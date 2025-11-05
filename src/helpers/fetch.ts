import { URL } from 'node:url'
import type { ZodType } from 'zod'

export async function fetchJsonParse<const T>(
  url: URL,
  schema: ZodType<T>
): Promise<T> {
  const response = await fetch(url)
  const json = await response.json()
  return schema.parse(json)
}
