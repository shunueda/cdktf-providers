import { cp, glob, readdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ModuleKind } from 'typescript'
import { readVersionsFile } from '../src/cdktf.ts'
import { createReadmeContent } from '../src/readme.ts'
import { tsc } from '../src/typescript/compile.ts'
import {
  createNpmPackageName,
  createPackageJson,
  isNpmPackagePublished
} from '../src/typescript/npm.ts'

for (const namespace of await readdir('gen')) {
  for (const name of await readdir(`gen/${namespace}`)) {
    const dir = join('gen', namespace, name)
    const fullname = `${namespace}/${name}`
    for (const language of await readdir(dir)) {
      const prefix = `[${fullname} ${language}]`
      switch (language) {
        case 'typescript': {
          const pkgname = createNpmPackageName(namespace, name)
          const version = await readVersionsFile(dir, fullname)
          if (await isNpmPackagePublished(pkgname, version)) {
            continue
          }
          console.log(prefix, `Compiling TypeScript...`)
          const files = glob(join(dir, '**', '*.ts'))
          await tsc(files, {
            module: ModuleKind.ES2022,
            declaration: true,
            sourceMap: true,
            outDir: join(dir, 'dist')
          })

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
          console.log(prefix, 'Done.')
          break
        }
      }
    }
  }
}
