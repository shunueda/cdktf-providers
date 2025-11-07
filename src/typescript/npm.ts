/**
 * Technically not TypeScript, but it's close enough I guess.
 *
 * Avoid importing from `@npm/*` or `npm*` outside this module. The goal is to
 * keep this layer replaceable with plain `fetch` in the future.
 */
import type { PackageJSON } from '@npm/types'
import { Arborist } from '@npmcli/arborist'
import { publish } from 'libnpmpublish'
import pacote from 'pacote'

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
export async function publishNpmPackage(directory: string, token?: string) {
  const manifest = await pacote.manifest(directory)
  const tarball = await pacote.tarball(directory, { Arborist })
  // libnpmpublish typing is wrong
  await publish(manifest as any, tarball, {
    provenance: true,
    forceAuth: {
      token
    }
  })
}

export function createPackageJson(
  name: string,
  version: string,
  directory: string
): Readonly<PackageJSON> {
  return {
    name,
    version,
    repository: {
      type: 'git',
      url: 'https://github.com/shunueda/cdktf-providers.git',
      directory
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
      },
      './package.json': './package.json'
    },
    files: ['dist']
  }
}
