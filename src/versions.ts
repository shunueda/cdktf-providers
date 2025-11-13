import cdktf from '@cdktf/commons/package.json' with { type: 'json' }
import constructs from 'constructs/package.json' with { type: 'json' }

export const versions = {
  cdktf: cdktf.version,
  constructs: constructs.version
} as const
