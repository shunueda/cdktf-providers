import { type output, z } from 'zod'

const providerDataSchema = z.object({
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

export type ProviderData = output<typeof providerDataSchema>

export const providersResponseSchema = z.object({
  data: z.array(providerDataSchema),
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
