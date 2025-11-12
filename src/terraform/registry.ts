import { URL } from 'node:url'
import {
  type ProviderData,
  providersResponseSchema,
  type ProviderVersionData,
  providerVersionsResponseSchema
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

function createFetchProviderVersionUrl(id: string): URL {
  const url = new URL(baseUrl)
  url.pathname += `/${id}/provider-versions`
  return url
}

export async function* fetchProviderData(
  page = 0
): AsyncGenerator<ProviderData> {
  const url = createFetchProvidersUrl(page)
  const response = await fetch(url)
  const json = await response.json()
  const { data } = providersResponseSchema.parse(json)
  if (!data.length) {
    return
  }
  yield* data.filter(({ attributes }) => {
    const { tier, downloads } = attributes
    return tier !== 'community' || downloads >= communityTierDownloadThreshold
  })
  yield* fetchProviderData(page + 1)
}

export async function fetchProviderVerionData(
  id: string
): Promise<ProviderVersionData[]> {
  const url = createFetchProviderVersionUrl(id)
  const response = await fetch(url)
  const json = await response.json()
  const { data } = providerVersionsResponseSchema.parse(json)
  return data
}
