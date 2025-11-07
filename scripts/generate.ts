import { join } from 'node:path'
import { generateProviderConstruct, type Language } from '../src/cdktf.ts'
import { fetchProviderData } from '../src/terraform/registry.ts'

// TypeScript only for now, but code is ready for more languages
const languages: Language[] = ['typescript']

for (const language of languages) {
  for await (const { attributes } of fetchProviderData()) {
    const { name, ['full-name']: fullname } = attributes

    const dir = join('gen', fullname, language)
    const prefix = `[${fullname} ${language}]`

    try {
      console.log(prefix, 'Generating construct...')
      await generateProviderConstruct({
        language,
        name,
        source: fullname,
        directory: dir
      })
      console.log(prefix, 'Done.')
    } catch (error) {
      console.warn(prefix, `Error generating construct`, error)
    }
  }
}
