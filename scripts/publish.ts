import { ok } from 'node:assert/strict'
import { log, warn } from 'node:console'
import { cp, glob, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { ModuleKind, ScriptTarget } from 'typescript'
import { readVersionsFile } from '../src/cdktf.ts'
import { createReadmeContent } from '../src/readme.ts'
import { tsc } from '../src/typescript/compile.ts'
import {
  createNpmPackageName,
  createPackageJson,
  isNpmPackagePublished
} from '../src/typescript/npm.ts'

const versionsFiles = glob('gen/**/versions.json')

for await (const versionsFile of versionsFiles) {
  const dir = dirname(versionsFile)

  const [_, namespace, name, language] = dir.split('/')
  ok(namespace && name && language) // should never happen

  const fullname = `${namespace}/${name}`
  const version = await readVersionsFile(dir, fullname)
  const prefix = `[${fullname}@${version} ${language}]`

  switch (language) {
    case 'typescript': {
      const pkgname = createNpmPackageName(namespace, name)

      if (await isNpmPackagePublished(pkgname, version)) {
        log(prefix, 'Already published, skipping.')
        continue
      }

      log(prefix, 'Compiling...')
      const files = glob(join(dir, '**', '*.ts'))
      const { emitSkipped, diagnostics } = await tsc(files, {
        module: ModuleKind.ES2022,
        target: ScriptTarget.ES2022,
        declaration: true,
        sourceMap: true,
        outDir: join(dir, 'dist'),
        // Skip type cheking because we process files in chunks. We assume the
        // generated code is always valid. Also speeds up the compilation.
        noCheck: true,
        noEmitOnError: true
      })

      if (emitSkipped && diagnostics.length) {
        warn(prefix, 'Failed to compile, skipping...')
        continue
      }

      await writeFile(
        join(dir, 'package.json'),
        JSON.stringify(createPackageJson(pkgname, version, dir), null, 2)
      )

      await writeFile(
        join(dir, 'README.md'),
        createReadmeContent({
          terraformProviderName: fullname,
          npmPackageName: pkgname,
          version
        })
      )

      await cp('LICENSE', join(dir, 'LICENSE'))

      // await publishNpmPackage(directory, env.NPM_TOKEN)
      log(prefix, 'Done.')
    }
  }
}
