# cdktf-providers

This repository automatically builds and publishes prebuilt [Terraform provider](https://registry.terraform.io/browse/providers)
bindings for [CDK for Terraform (CDKTF)](https://cdk.tf).

## Motivation

Using Terraform providers in CDKTF requires running [`cdktf get`](https://developer.hashicorp.com/terraform/cdktf/cli-reference/commands#get), which downloads the Terraform
provider schema, generates language bindings from it, and adds them to your project under `.gen/`.
While this works, it introduces several problems at scale:

- You must re-generate the bindings every time the provider or CDKTF version changes.
- The generated code is large and hard to track in version control. If not checked in, each team member and CI environment must re-generate it locally, often leading to inconsistencies.
- Generated bindings must be compiled as part of your CDKTF project. For example, in TypeScript, you can’t enable [`eraseableSyntaxOnly`](https://www.typescriptlang.org/tsconfig/#erasableSyntaxOnly), because the generated code includes non-erasable syntax.

Prebuilt providers eliminate this friction.
Instead of generating bindings locally, you can install a ready-made package directly from your language’s package
registry (npm, PyPI, Maven, NuGet, etc.). Official and select partner providers (e.g. [`cdktf-provider-cloudflare`](https://github.com/cdktf/cdktf-provider-cloudflare)) are already available this way, but most non-official providers are not. This repository fills that gap by automatically mirroring non-official Terraform providers into prebuilt CDKTF
packages.

## Versioning

This repository uses a **1:1 version mapping** with the Terraform Registry. Each published package version matches the exact version of its corresponding Terraform provider.

Official CDKTF providers **do not** follow this rule. Their versions diverge because:

- Terraform providers occasionally break semantic versioning since their schemas mirror upstream APIs.
- CDKTF’s code generation evolves independently and can introduce breaking changes even without provider schema updates.

This project takes a simpler, consistent approach: each package mirrors its provider version directly. Detecting and classifying breaking schema changes is possible but impractical to maintain at scale.

**This repository mirrors, not interprets.**

## Disclaimer

CDK for Terraform (CDKTF) and Terraform are trademarks of HashiCorp, Inc. This project is not affiliated with or endorsed by HashiCorp.
