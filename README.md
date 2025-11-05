# cdktf-providers

This repository automatically builds and publishes prebuilt [Terraform provider](https://registry.terraform.io/browse/providers)
bindings for [CDK for Terraform (CDKTF)](https://cdk.tf).

## Motivation

Using Terraform providers directly in CDKTF normally requires running `cdktf get`, which downloads the Terraform
provider schema, generates language bindings from it, and adds them to your project under `.gen/`.
While this process works, it introduces several problems at scale:

- You must re-generate the bindings every time the provider or CDKTF version changes.
- The generated code is large, and hard to track in version control. If not checked in, every team member and CI
  environment must re-generate it locally, leading to inconsistencies.

Prebuilt providers eliminate this friction.
Instead of generating bindings locally, you can install a ready-made package directly from your language’s package
registry (npm, PyPI, Maven, NuGet, etc.). Official and some partner providers are already available this way, but many
others are not. This repository fills that gap by automatically mirroring non-official Terraform providers into prebuilt CDKTF
packages.

This provides several advantages:

- Simple dependency upgrades (just bump the version). Since it's just a package, it easier for bots (like Dependabot) to
  manage.
- Consistent provider versions across teams and environments.

## Versioning

This repository follows a **1:1 version mapping with the Terraform Registry**.
Each published package version corresponds exactly to the version of the underlying Terraform provider. This is a
strategic decision.

Official CDKTF providers (e.g. [`cdktf-provider-aws`](https://github.com/cdktf/cdktf-provider-aws)) typically **do
not** match their versions to the Terraform Registry for a few reasons:

1. **Terraform providers occasionally break semver.**
   Because they mirror evolving APIs, minor releases can include breaking changes.
2. **CDKTF code generation evolves separately.**
   A new CDKTF release may change how bindings are generated without any provider schema change.
3. **Manual and semantic-release–based versioning.**
   Official providers use their own semver cadence to coordinate across the CDKTF ecosystem rather than following every
   upstream provider bump.

This project instead takes a simpler, predictable approach:

1. **1:1 mapping = zero ambiguity.**
   The package version always matches the Terraform provider version.
   No guessing, no interpretation, no custom semver policy.
2. **Automation first.**
   Detecting and classifying breaking schema changes is technically possible but too brittle and expensive to maintain
   at scale.
   Mirroring the registry is reliable and deterministic.
3. **Clear responsibility boundaries.**
   Terraform provider maintainers own the schema and version semantics.
   This project’s job is to mirror those releases faithfully into CDKTF bindings across all supported languages.

In other words: **this repository mirrors, not interprets.**
