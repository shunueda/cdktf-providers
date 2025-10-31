import { URL } from 'node:url'
import type { ZodType } from 'zod'
import {
  type ProviderData,
  providersResponseNoVersionsSchema,
  providersResponseSchema
} from './schema.ts'

// only fetch community providers with more than 500k downloads. Pulled out of thin air.
const communityTierDownloadThreshold = 500_000

const baseUrl = 'https://registry.terraform.io/v2/providers'

function createFetchProvidersUrl(page: number): URL {
  const url = new URL(baseUrl)
  // Official providers get prebuilt npm packages by default, so we skip them
  const tiers = ['partner', 'community']
  url.searchParams.set('filter[tier]', tiers.join())
  // Maximum allowed by the API
  url.searchParams.set('page[size]', '100')
  url.searchParams.set('page[number]', page.toString())
  return url
}

function createFetchProviderVersionsUrl(providerFullName: string): URL {
  const url = new URL(`./${providerFullName}`, `${baseUrl}/`)
  url.searchParams.set('include', 'provider-versions')
  return url
}

async function fetchJsonParse<T>(url: URL, schema: ZodType<T>): Promise<T> {
  const response = await fetch(url)
  const json = await response.json()
  return schema.parse(json)
}

export async function* fetchProviderData(
  page = 0
): AsyncGenerator<ProviderData> {
  const url = createFetchProvidersUrl(page)
  const { data } = await fetchJsonParse(url, providersResponseNoVersionsSchema)
  if (!data.length) {
    return
  }
  for (const { attributes } of data) {
    if (
      attributes.tier === 'community' &&
      attributes.downloads < communityTierDownloadThreshold
    ) {
      continue
    }
    const url = createFetchProviderVersionsUrl(attributes['full-name'])
    yield fetchJsonParse(url, providersResponseSchema)
  }
  yield* fetchProviderData(page + 1)
}
