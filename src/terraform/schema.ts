import { type output, z } from 'zod'

const providersSchema = z.object({
  type: z.literal('providers'),
  id: z.string(),
  attributes: z.object({
    alias: z.string().nullable(),
    description: z.string(),
    downloads: z.number(),
    featured: z.boolean(),
    'full-name': z.string(),
    'logo-url': z.string(),
    name: z.string(),
    namespace: z.string(),
    'owner-name': z.string(),
    'repository-id': z.number().optional(),
    'robots-noindex': z.boolean(),
    source: z.url(),
    tier: z.enum(['official', 'partner', 'community']),
    unlisted: z.boolean(),
    warning: z.string()
  }),
  links: z.object({
    self: z.string()
  })
})

export type ProviderData = output<typeof providersSchema>

const providerVersionsSchema = z.object({
  type: z.literal('provider-versions'),
  id: z.string(),
  attributes: z.object({
    description: z.string(),
    downloads: z.number(),
    'published-at': z.string(),
    tag: z.string(),
    version: z.string()
  }),
  links: z.object({
    self: z.string()
  })
})

export type ProviderVersionData = output<typeof providerVersionsSchema>

export const providersResponseSchema = z.object({
  data: z.array(providersSchema),
  links: z.object({
    first: z.string(),
    last: z.string(),
    next: z.string().nullable(),
    prev: z.string().nullable()
  }),
  meta: z.object({
    pagination: z.object({
      'page-size': z.number(),
      'current-page': z.number(),
      'next-page': z.number().nullable(),
      'prev-page': z.number().nullable(),
      'total-pages': z.number(),
      'total-count': z.number()
    })
  })
})

export const providerVersionsResponseSchema = z.object({
  data: z.array(providerVersionsSchema)
})
