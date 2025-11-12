import { join } from 'node:path'
import { generateProviderConstruct, type Language } from '../src/cdktf.ts'
import {
  fetchProviderData,
  fetchProviderVerionData
} from '../src/terraform/registry.ts'

// TypeScript only for now, but code is ready for more languages
const languages: Language[] = ['typescript']

for (const language of languages) {
  for await (const { attributes, id } of fetchProviderData()) {
    const { name, ['full-name']: fullname } = attributes

    const dir = join('gen', fullname, language)
    const prefix = `[${fullname} ${language}]`

    const versionData = await fetchProviderVerionData(id)
    const version = versionData
      .map(it => it.attributes)
      .filter(({ version }) => /^\d+\.\d+\.\d+$/.test(version)) // only x.x.x versions
      .toSorted((a, b) => b['published-at'].localeCompare(a['published-at'])) // latest
      ?.at(0)?.version

    if (!version) {
      console.warn(prefix, `No valid version found, skipping.`)
      continue
    }

    try {
      console.log(prefix, 'Generating construct...')
      await generateProviderConstruct({
        language,
        name,
        version,
        source: fullname,
        directory: dir
      })
      console.log(prefix, 'Done.')
    } catch (error) {
      console.warn(prefix, `Error generating construct`, error)
    }
  }
}
