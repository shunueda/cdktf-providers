export function createReadmeContent({
  terraformProviderName,
  version,
  npmPackageName
}: {
  terraformProviderName: string
  version: string
  npmPackageName: string
}): string {
  // language=markdown
  return `
# ${npmPackageName} (v${version})

This package provides the prebuilt [Terraform ${terraformProviderName} provider](https://registry.terraform.io/providers/${terraformProviderName}/${version}/docs) bindings for [CDK for Terraform (CDKTF)](https://cdk.tf).

The bindings are **automatically generated** from the upstream provider schema. They are intended for use in TypeScript CDKTF applications, and always match the version of the upstream Terraform provider.

For more details, see the [cdktf-providers](https://github.com/shunueda/cdktf-providers) repository.

## Installation

\`npm install ${npmPackageName}\`

## Docs

See provider documentation on [registry.terraform.io](https://registry.terraform.io/providers/${terraformProviderName}/${version}/docs).

## Disclaimer

CDK for Terraform (CDKTF) and Terraform are trademarks of HashiCorp, Inc. This project is not affiliated with or endorsed by HashiCorp.
  `.trim()
}
