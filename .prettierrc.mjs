/** @type {import("prettier").Config} */
const config = {
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
  ],
  semi: false,
  importOrder: [
    '<BUILTIN_MODULES>',
    '<THIRD_PARTY_MODULES>',
    '',
    '^[./]'
  ],
  importOrderTypeScriptVersion: '5.4.5'
}

export default config
