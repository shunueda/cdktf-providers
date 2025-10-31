import { get } from '@cdktf/cli-core'
import { Language, TerraformProviderConstraint } from '@cdktf/commons'
import { cp, rm } from 'node:fs/promises'
import { join } from 'node:path'
import { fetchProviderData } from './terraform/registry.ts'

for await (const { data, included } of fetchProviderData()) {
  const { name, ['full-name']: fullname } = data.attributes
  for (const { attributes } of included) {
    const { version } = attributes
    // Generate only TypeScript for now
    const language = Language.TYPESCRIPT
    const dir = join('gen', fullname, version, language)
    try {
      await get({
        constraints: [
          new TerraformProviderConstraint({
            name,
            version,
            source: fullname
          })
        ],
        constructsOptions: {
          targetLanguage: language,
          codeMakerOutput: dir
        }
      })
      // Files are generated into a 'providers/${name}' subdir, move them up
      const generated = join(dir, 'providers', name)
      await cp(generated, dir, { recursive: true })
      await rm(generated, { recursive: true })
    } catch {
      console.warn(`Failed to generate ${fullname}@${version}`)
    }
  }
}
