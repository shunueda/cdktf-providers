import { type Config } from 'prettier'

export default {
  plugins: [
    'prettier-plugin-organize-imports',
    'prettier-plugin-packagejson',
    'prettier-plugin-sh'
  ],
  arrowParens: 'avoid',
  semi: false,
  singleQuote: true,
  trailingComma: 'none'
} satisfies Config
