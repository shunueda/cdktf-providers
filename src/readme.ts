export function createReadmeContent(options: {
  terraformProviderName: string
  version: string
  npmPackageName: string
}): string {
  // language=markdown
  return `
# ${options.npmPackageName} (v${options.version})

This package provides the prebuilt [Terraform ${options.terraformProviderName} provider](https://registry.terraform.io/providers/${options.terraformProviderName}/${options.version}/docs) bindings for [CDK for Terraform (CDKTF)](https://cdk.tf).

The bindings are **automatically generated** from the upstream provider schema. They are intended for use in TypeScript CDKTF applications, and follow the same versioning as the underlying Terraform provider.

> **Note:** CDK for Terraform (CDKTF) and Terraform are trademarks of HashiCorp, Inc. This project is not affiliated with or endorsed by HashiCorp.

## Installation

\`npm install ${options.npmPackageName}\`

## Docs

Visit a hosted version of the documentation on [registry.terraform.io](https://registry.terraform.io/providers/${options.terraformProviderName}/${options.version}/docs).
  `.trim()
}
