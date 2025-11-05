import { cp, glob, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ModuleKind } from 'typescript'
import { generateProviderConstruct, type Language } from './cdktf.ts'
import { createReadmeContent } from './readme.ts'
import { fetchProviderData } from './terraform/registry.ts'
import { tsc } from './typescript/compile.ts'
import {
  createNpmPackageName,
  createPackageJson,
  isNpmPackagePublished
} from './typescript/npm.ts'

// TypeScript only for now, but code is ready for more languages
const languages: Language[] = ['typescript']

for (const language of languages) {
  for await (const { attributes } of fetchProviderData()) {
    const { name, ['full-name']: fullname, namespace } = attributes

    const dir = join('gen', fullname, language)

    try {
      const { version } = await generateProviderConstruct({
        language,
        name,
        source: fullname,
        directory: dir
      })

      // Filter out versions with pre-release tags
      if (!/^\d+\.\d+\.\d+(-\d+)?$/.test(version)) {
        continue
      }

      switch (language) {
        case 'typescript': {
          const pkgname = createNpmPackageName(namespace, name)
          if (await isNpmPackagePublished(pkgname, version)) {
            continue
          }

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
          break
        }
      }
    } catch (e) {
      console.warn(
        `Error generating construct for ${fullname} (${language}):`,
        e
      )
    }
  }
}
