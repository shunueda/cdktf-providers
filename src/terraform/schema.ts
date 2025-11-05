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

export const providersResponseNoVersionsSchema = z.object({
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

export const providersResponseSchema = z.object({
  data: providerDataSchema.extend({
    relationships: z.object({
      'provider-versions': z.object({
        data: z.array(
          z.object({
            id: z.string(),
            type: z.literal('provider-versions')
          })
        ),
        links: z.object({
          related: z.string()
        })
      })
    })
  }),
  included: z.array(
    z.object({
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
  )
})

export type ProvidersResponse = output<typeof providersResponseSchema>
