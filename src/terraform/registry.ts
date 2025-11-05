import { URL } from 'node:url'
import { z } from 'zod'
import { fetchJsonParse } from '../helpers/fetch.ts'
import {
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

export async function fetchProviderVersions(providerFullName: string) {
  const url = createFetchProviderVersionsUrl(providerFullName)
  return fetchJsonParse(url, providersResponseSchema)
}

export async function* fetchProviderData(
  page = 0
): AsyncGenerator<
  z.infer<typeof providersResponseNoVersionsSchema>['data'][number]
> {
  const url = createFetchProvidersUrl(page)
  const { data } = await fetchJsonParse(url, providersResponseNoVersionsSchema)
  if (!data.length) {
    return
  }
  yield* data.filter(({ attributes }) => {
    const { tier, downloads } = attributes
    return tier !== 'community' || downloads >= communityTierDownloadThreshold
  })
  yield* fetchProviderData(page + 1)
}
