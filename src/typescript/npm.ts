/**
 * Technically not TypeScript, but it's close enough I guess.
 *
 * Avoid importing from `@npm/*` or `npm*` outside this module. The goal is to
 * keep this layer replaceable with plain `fetch` in the future.
 */
import type { PackageJSON } from '@npm/types'
import { Arborist } from '@npmcli/arborist'
import { publish } from 'libnpmpublish'
import { env } from 'node:process'
import pacote from 'pacote'
import { versions } from '../versions.ts'

const npmPackageScope = '@cdktf-providers'

/**
 * Create an NPM package name for a given provider namespace and name.
 *
 * For providers where the namespace and name are the same, it will be in the
 * format `@cdktf-providers/<name>`.
 *
 * Otherwise, it will be in the format
 * `@cdktf-providers/<namespace>-<name>`.
 *
 * @example
 * createNpmPackageName('aws', 'aws') // '@cdktf-providers/aws'
 * createNpmPackageName('google', 'compute') // '@cdktf-providers/google-compute'
 */
export function createNpmPackageName(namespace: string, name: string): string {
  return `${npmPackageScope}/${namespace === name ? name : `${namespace}-${name}`}`.toLowerCase()
}

/**
 * Check if a given NPM package version is already published.
 */
export async function isNpmPackagePublished(
  pkgname: string,
  version: string
): Promise<boolean> {
  try {
    await pacote.resolve(`${pkgname}@${version}`)
    return true
  } catch {
    return false
  }
}

/**
 * Publish an NPM package located in the given directory.
 */
export async function publishNpmPackage(dir: string) {
  const manifest = await pacote.manifest(dir)
  const tarball = await pacote.tarball(dir, { Arborist })
  // libnpmpublish typing is wrong
  await publish(manifest as Parameters<typeof publish>[0], tarball, {
    provenance: true,
    forceAuth: {
      token: env.NPM_TOKEN
    }
  })
}

export function createPackageJson({
  pkgname,
  namespace,
  name,
  version,
  dir
}: {
  pkgname: string
  namespace: string
  name: string
  version: string
  dir: string
}): Readonly<PackageJSON> {
  return {
    name: pkgname,
    version,
    repository: {
      type: 'git',
      url: 'https://github.com/shunueda/cdktf-providers.git',
      directory: dir
    },
    type: 'module',
    exports: {
      '.': {
        import: './dist/index.js',
        types: './dist/index.d.ts',
        require: './dist/index.js'
      },
      './lazy-index': {
        import: './dist/lazy-index.js',
        types: './dist/lazy-index.d.ts',
        require: './dist/lazy-index.js'
      },
      './*': {
        import: './dist/*/index.js',
        types: './dist/*/index.d.ts',
        require: './dist/*/index.js'
      }
    },
    files: ['dist'],
    keywords: ['cdk', 'cdktf', 'provider', 'terraform'].concat(
      namespace === name ? [name] : [namespace, name]
    ),
    peerDependencies: {
      cdktf: `^${versions.cdktf}`,
      constructs: `^${versions.constructs}`
    },
    // Non-standard field but used by official cdktf provider packages
    cdktf: {
      isDeprecated: false,
      provider: {
        name: `registry.terraform.io/${namespace}/${name}`,
        version
      }
    }
  }
}
