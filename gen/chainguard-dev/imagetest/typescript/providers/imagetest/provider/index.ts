// https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImagetestProviderConfig {
  /**
  * An optional list of extra oci registries to wire in auth credentials for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs#extra_repos ImagetestProvider#extra_repos}
  */
  readonly extraRepos?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs#harnesses ImagetestProvider#harnesses}
  */
  readonly harnesses?: ImagetestProviderHarnesses;
  /**
  * Configuration for test log output to files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs#logs ImagetestProvider#logs}
  */
  readonly logs?: ImagetestProviderLogs;
  /**
  * The target repository the provider will use for pushing/pulling dynamically built images.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs#repo ImagetestProvider#repo}
  */
  readonly repo?: string;
  /**
  * The optional configuration for all test sandboxes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs#sandbox ImagetestProvider#sandbox}
  */
  readonly sandbox?: ImagetestProviderSandbox;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs#test_execution ImagetestProvider#test_execution}
  */
  readonly testExecution?: ImagetestProviderTestExecution;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs#alias ImagetestProvider#alias}
  */
  readonly alias?: string;
}
export interface ImagetestProviderHarnessesCluster {
  /**
  * The relative or absolute path on the host to the source directory to mount.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs#kubeconfig ImagetestProvider#kubeconfig}
  */
  readonly kubeconfig: string;
}

export function imagetestProviderHarnessesClusterToTerraform(struct?: ImagetestProviderHarnessesCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kubeconfig: cdktf.stringToTerraform(struct!.kubeconfig),
  }
}


export function imagetestProviderHarnessesClusterToHclTerraform(struct?: ImagetestProviderHarnessesCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kubeconfig: {
      value: cdktf.stringToHclTerraform(struct!.kubeconfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface ImagetestProviderHarnessesDockerMounts {
  /**
  * The absolute path on the container to mount the source directory to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs#destination ImagetestProvider#destination}
  */
  readonly destination: string;
  /**
  * The relative or absolute path on the host to the source directory to mount.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs#source ImagetestProvider#source}
  */
  readonly source: string;
}

export function imagetestProviderHarnessesDockerMountsToTerraform(struct?: ImagetestProviderHarnessesDockerMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function imagetestProviderHarnessesDockerMountsToHclTerraform(struct?: ImagetestProviderHarnessesDockerMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface ImagetestProviderHarnessesDockerNetworks {
  /**
  * The name of the existing network to attach the container to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs#name ImagetestProvider#name}
  */
  readonly name: string;
}

export function imagetestProviderHarnessesDockerNetworksToTerraform(struct?: ImagetestProviderHarnessesDockerNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function imagetestProviderHarnessesDockerNetworksToHclTerraform(struct?: ImagetestProviderHarnessesDockerNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface ImagetestProviderHarnessesDockerRegistriesAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs#auth ImagetestProvider#auth}
  */
  readonly auth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs#password ImagetestProvider#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs#username ImagetestProvider#username}
  */
  readonly username?: string;
}

export function imagetestProviderHarnessesDockerRegistriesAuthToTerraform(struct?: ImagetestProviderHarnessesDockerRegistriesAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: cdktf.stringToTerraform(struct!.auth),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function imagetestProviderHarnessesDockerRegistriesAuthToHclTerraform(struct?: ImagetestProviderHarnessesDockerRegistriesAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: cdktf.stringToHclTerraform(struct!.auth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface ImagetestProviderHarnessesDockerRegistries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs#auth ImagetestProvider#auth}
  */
  readonly auth?: ImagetestProviderHarnessesDockerRegistriesAuth;
}

export function imagetestProviderHarnessesDockerRegistriesToTerraform(struct?: ImagetestProviderHarnessesDockerRegistries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: imagetestProviderHarnessesDockerRegistriesAuthToTerraform(struct!.auth),
  }
}


export function imagetestProviderHarnessesDockerRegistriesToHclTerraform(struct?: ImagetestProviderHarnessesDockerRegistries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: imagetestProviderHarnessesDockerRegistriesAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "ImagetestProviderHarnessesDockerRegistriesAuth",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface ImagetestProviderHarnessesDocker {
  /**
  * Environment variables to set on the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs#envs ImagetestProvider#envs}
  */
  readonly envs?: { [key: string]: string };
  /**
  * The Docker host socket path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs#host_socket_path ImagetestProvider#host_socket_path}
  */
  readonly hostSocketPath?: string;
  /**
  * The list of mounts to create on the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs#mounts ImagetestProvider#mounts}
  */
  readonly mounts?: ImagetestProviderHarnessesDockerMounts[] | cdktf.IResolvable;
  /**
  * A map of existing networks to attach the container to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs#networks ImagetestProvider#networks}
  */
  readonly networks?: { [key: string]: ImagetestProviderHarnessesDockerNetworks } | cdktf.IResolvable;
  /**
  * A map of registries containing configuration for optional auth, tls, and mirror configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs#registries ImagetestProvider#registries}
  */
  readonly registries?: { [key: string]: ImagetestProviderHarnessesDockerRegistries } | cdktf.IResolvable;
}

export function imagetestProviderHarnessesDockerToTerraform(struct?: ImagetestProviderHarnessesDocker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    envs: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envs),
    host_socket_path: cdktf.stringToTerraform(struct!.hostSocketPath),
    mounts: cdktf.listMapper(imagetestProviderHarnessesDockerMountsToTerraform, false)(struct!.mounts),
    networks: cdktf.hashMapper(imagetestProviderHarnessesDockerNetworksToTerraform)(struct!.networks),
    registries: cdktf.hashMapper(imagetestProviderHarnessesDockerRegistriesToTerraform)(struct!.registries),
  }
}


export function imagetestProviderHarnessesDockerToHclTerraform(struct?: ImagetestProviderHarnessesDocker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    envs: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.envs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    host_socket_path: {
      value: cdktf.stringToHclTerraform(struct!.hostSocketPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mounts: {
      value: cdktf.listMapperHcl(imagetestProviderHarnessesDockerMountsToHclTerraform, false)(struct!.mounts),
      isBlock: true,
      type: "list",
      storageClassType: "ImagetestProviderHarnessesDockerMountsList",
    },
    networks: {
      value: cdktf.hashMapperHcl(imagetestProviderHarnessesDockerNetworksToHclTerraform)(struct!.networks),
      isBlock: true,
      type: "map",
      storageClassType: "ImagetestProviderHarnessesDockerNetworksMap",
    },
    registries: {
      value: cdktf.hashMapperHcl(imagetestProviderHarnessesDockerRegistriesToHclTerraform)(struct!.registries),
      isBlock: true,
      type: "map",
      storageClassType: "ImagetestProviderHarnessesDockerRegistriesMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface ImagetestProviderHarnessesK3SNetworks {
  /**
  * The name of the existing network to attach the harness containers to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs#name ImagetestProvider#name}
  */
  readonly name: string;
}

export function imagetestProviderHarnessesK3SNetworksToTerraform(struct?: ImagetestProviderHarnessesK3SNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function imagetestProviderHarnessesK3SNetworksToHclTerraform(struct?: ImagetestProviderHarnessesK3SNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface ImagetestProviderHarnessesK3SRegistriesAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs#auth ImagetestProvider#auth}
  */
  readonly auth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs#password ImagetestProvider#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs#username ImagetestProvider#username}
  */
  readonly username?: string;
}

export function imagetestProviderHarnessesK3SRegistriesAuthToTerraform(struct?: ImagetestProviderHarnessesK3SRegistriesAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: cdktf.stringToTerraform(struct!.auth),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function imagetestProviderHarnessesK3SRegistriesAuthToHclTerraform(struct?: ImagetestProviderHarnessesK3SRegistriesAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: cdktf.stringToHclTerraform(struct!.auth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface ImagetestProviderHarnessesK3SRegistriesMirror {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs#endpoints ImagetestProvider#endpoints}
  */
  readonly endpoints?: string[];
}

export function imagetestProviderHarnessesK3SRegistriesMirrorToTerraform(struct?: ImagetestProviderHarnessesK3SRegistriesMirror | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.endpoints),
  }
}


export function imagetestProviderHarnessesK3SRegistriesMirrorToHclTerraform(struct?: ImagetestProviderHarnessesK3SRegistriesMirror | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.endpoints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface ImagetestProviderHarnessesK3SRegistriesTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs#ca_file ImagetestProvider#ca_file}
  */
  readonly caFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs#cert_file ImagetestProvider#cert_file}
  */
  readonly certFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs#key_file ImagetestProvider#key_file}
  */
  readonly keyFile?: string;
}

export function imagetestProviderHarnessesK3SRegistriesTlsToTerraform(struct?: ImagetestProviderHarnessesK3SRegistriesTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_file: cdktf.stringToTerraform(struct!.caFile),
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    key_file: cdktf.stringToTerraform(struct!.keyFile),
  }
}


export function imagetestProviderHarnessesK3SRegistriesTlsToHclTerraform(struct?: ImagetestProviderHarnessesK3SRegistriesTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_file: {
      value: cdktf.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_file: {
      value: cdktf.stringToHclTerraform(struct!.certFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktf.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface ImagetestProviderHarnessesK3SRegistries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs#auth ImagetestProvider#auth}
  */
  readonly auth?: ImagetestProviderHarnessesK3SRegistriesAuth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs#mirror ImagetestProvider#mirror}
  */
  readonly mirror?: ImagetestProviderHarnessesK3SRegistriesMirror;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs#tls ImagetestProvider#tls}
  */
  readonly tls?: ImagetestProviderHarnessesK3SRegistriesTls;
}

export function imagetestProviderHarnessesK3SRegistriesToTerraform(struct?: ImagetestProviderHarnessesK3SRegistries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: imagetestProviderHarnessesK3SRegistriesAuthToTerraform(struct!.auth),
    mirror: imagetestProviderHarnessesK3SRegistriesMirrorToTerraform(struct!.mirror),
    tls: imagetestProviderHarnessesK3SRegistriesTlsToTerraform(struct!.tls),
  }
}


export function imagetestProviderHarnessesK3SRegistriesToHclTerraform(struct?: ImagetestProviderHarnessesK3SRegistries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: imagetestProviderHarnessesK3SRegistriesAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "ImagetestProviderHarnessesK3SRegistriesAuth",
    },
    mirror: {
      value: imagetestProviderHarnessesK3SRegistriesMirrorToHclTerraform(struct!.mirror),
      isBlock: true,
      type: "struct",
      storageClassType: "ImagetestProviderHarnessesK3SRegistriesMirror",
    },
    tls: {
      value: imagetestProviderHarnessesK3SRegistriesTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "ImagetestProviderHarnessesK3SRegistriesTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface ImagetestProviderHarnessesK3S {
  /**
  * A map of existing networks to attach the harness containers to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs#networks ImagetestProvider#networks}
  */
  readonly networks?: { [key: string]: ImagetestProviderHarnessesK3SNetworks } | cdktf.IResolvable;
  /**
  * A map of registries containing configuration for optional auth, tls, and mirror configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs#registries ImagetestProvider#registries}
  */
  readonly registries?: { [key: string]: ImagetestProviderHarnessesK3SRegistries } | cdktf.IResolvable;
}

export function imagetestProviderHarnessesK3SToTerraform(struct?: ImagetestProviderHarnessesK3S | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    networks: cdktf.hashMapper(imagetestProviderHarnessesK3SNetworksToTerraform)(struct!.networks),
    registries: cdktf.hashMapper(imagetestProviderHarnessesK3SRegistriesToTerraform)(struct!.registries),
  }
}


export function imagetestProviderHarnessesK3SToHclTerraform(struct?: ImagetestProviderHarnessesK3S | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    networks: {
      value: cdktf.hashMapperHcl(imagetestProviderHarnessesK3SNetworksToHclTerraform)(struct!.networks),
      isBlock: true,
      type: "map",
      storageClassType: "ImagetestProviderHarnessesK3SNetworksMap",
    },
    registries: {
      value: cdktf.hashMapperHcl(imagetestProviderHarnessesK3SRegistriesToHclTerraform)(struct!.registries),
      isBlock: true,
      type: "map",
      storageClassType: "ImagetestProviderHarnessesK3SRegistriesMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface ImagetestProviderHarnesses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs#cluster ImagetestProvider#cluster}
  */
  readonly cluster?: ImagetestProviderHarnessesCluster;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs#docker ImagetestProvider#docker}
  */
  readonly docker?: ImagetestProviderHarnessesDocker;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs#k3s ImagetestProvider#k3s}
  */
  readonly k3S?: ImagetestProviderHarnessesK3S;
}

export function imagetestProviderHarnessesToTerraform(struct?: ImagetestProviderHarnesses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: imagetestProviderHarnessesClusterToTerraform(struct!.cluster),
    docker: imagetestProviderHarnessesDockerToTerraform(struct!.docker),
    k3s: imagetestProviderHarnessesK3SToTerraform(struct!.k3S),
  }
}


export function imagetestProviderHarnessesToHclTerraform(struct?: ImagetestProviderHarnesses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: imagetestProviderHarnessesClusterToHclTerraform(struct!.cluster),
      isBlock: true,
      type: "struct",
      storageClassType: "ImagetestProviderHarnessesCluster",
    },
    docker: {
      value: imagetestProviderHarnessesDockerToHclTerraform(struct!.docker),
      isBlock: true,
      type: "struct",
      storageClassType: "ImagetestProviderHarnessesDocker",
    },
    k3s: {
      value: imagetestProviderHarnessesK3SToHclTerraform(struct!.k3S),
      isBlock: true,
      type: "struct",
      storageClassType: "ImagetestProviderHarnessesK3S",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface ImagetestProviderLogs {
  /**
  * Base directory where test logs will be written. Each test resource creates its own subdirectory. Can be overridden by IMAGETEST_LOGS environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs#directory ImagetestProvider#directory}
  */
  readonly directory?: string;
}

export function imagetestProviderLogsToTerraform(struct?: ImagetestProviderLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    directory: cdktf.stringToTerraform(struct!.directory),
  }
}


export function imagetestProviderLogsToHclTerraform(struct?: ImagetestProviderLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    directory: {
      value: cdktf.stringToHclTerraform(struct!.directory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface ImagetestProviderSandbox {
  /**
  * A list of additional keyrings to use for the sandbox.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs#extra_keyrings ImagetestProvider#extra_keyrings}
  */
  readonly extraKeyrings?: string[];
  /**
  * A list of additional packages to use for the sandbox.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs#extra_packages ImagetestProvider#extra_packages}
  */
  readonly extraPackages?: string[];
  /**
  * A list of additional repositories to use for the sandbox.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs#extra_repos ImagetestProvider#extra_repos}
  */
  readonly extraRepos?: string[];
}

export function imagetestProviderSandboxToTerraform(struct?: ImagetestProviderSandbox | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extra_keyrings: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraKeyrings),
    extra_packages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraPackages),
    extra_repos: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraRepos),
  }
}


export function imagetestProviderSandboxToHclTerraform(struct?: ImagetestProviderSandbox | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extra_keyrings: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraKeyrings),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    extra_packages: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraPackages),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    extra_repos: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraRepos),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface ImagetestProviderTestExecution {
  /**
  * Skip features with matching label values. If `include_by_label` is present, the set of included tests are evaluated for skipping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs#exclude_by_label ImagetestProvider#exclude_by_label}
  */
  readonly excludeByLabel?: { [key: string]: string };
  /**
  * Run features with matching label values. Any tests which do not contain all of the provided labels will be skipped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs#include_by_label ImagetestProvider#include_by_label}
  */
  readonly includeByLabel?: { [key: string]: string };
  /**
  * Skips all features and harnesses. All tests can also be skipped by setting the environment variable `IMAGETEST_SKIP_ALL` to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs#skip_all_tests ImagetestProvider#skip_all_tests}
  */
  readonly skipAllTests?: boolean | cdktf.IResolvable;
  /**
  * Skips the teardown of test harnesses to allow debugging test failures. Harness teardown can also be skipped by setting the environment variable `IMAGETEST_SKIP_TEARDOWN` to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs#skip_teardown ImagetestProvider#skip_teardown}
  */
  readonly skipTeardown?: boolean | cdktf.IResolvable;
}

export function imagetestProviderTestExecutionToTerraform(struct?: ImagetestProviderTestExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_by_label: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.excludeByLabel),
    include_by_label: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.includeByLabel),
    skip_all_tests: cdktf.booleanToTerraform(struct!.skipAllTests),
    skip_teardown: cdktf.booleanToTerraform(struct!.skipTeardown),
  }
}


export function imagetestProviderTestExecutionToHclTerraform(struct?: ImagetestProviderTestExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_by_label: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.excludeByLabel),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    include_by_label: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.includeByLabel),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    skip_all_tests: {
      value: cdktf.booleanToHclTerraform(struct!.skipAllTests),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_teardown: {
      value: cdktf.booleanToHclTerraform(struct!.skipTeardown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs imagetest}
*/
export class ImagetestProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "imagetest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ImagetestProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ImagetestProvider to import
  * @param importFromId The id of the existing ImagetestProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ImagetestProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "imagetest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs imagetest} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImagetestProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ImagetestProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'imagetest',
      terraformGeneratorMetadata: {
        providerName: 'imagetest',
        providerVersion: '0.0.107',
        providerVersionConstraint: '0.0.107'
      },
      terraformProviderSource: 'chainguard-dev/imagetest'
    });
    this._extraRepos = config.extraRepos;
    this._harnesses = config.harnesses;
    this._logs = config.logs;
    this._repo = config.repo;
    this._sandbox = config.sandbox;
    this._testExecution = config.testExecution;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // extra_repos - computed: false, optional: true, required: false
  private _extraRepos?: string[]; 
  public get extraRepos() {
    return this._extraRepos;
  }
  public set extraRepos(value: string[] | undefined) {
    this._extraRepos = value;
  }
  public resetExtraRepos() {
    this._extraRepos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraReposInput() {
    return this._extraRepos;
  }

  // harnesses - computed: false, optional: true, required: false
  private _harnesses?: ImagetestProviderHarnesses; 
  public get harnesses() {
    return this._harnesses;
  }
  public set harnesses(value: ImagetestProviderHarnesses | undefined) {
    this._harnesses = value;
  }
  public resetHarnesses() {
    this._harnesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get harnessesInput() {
    return this._harnesses;
  }

  // logs - computed: false, optional: true, required: false
  private _logs?: ImagetestProviderLogs; 
  public get logs() {
    return this._logs;
  }
  public set logs(value: ImagetestProviderLogs | undefined) {
    this._logs = value;
  }
  public resetLogs() {
    this._logs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsInput() {
    return this._logs;
  }

  // repo - computed: false, optional: true, required: false
  private _repo?: string; 
  public get repo() {
    return this._repo;
  }
  public set repo(value: string | undefined) {
    this._repo = value;
  }
  public resetRepo() {
    this._repo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }

  // sandbox - computed: false, optional: true, required: false
  private _sandbox?: ImagetestProviderSandbox; 
  public get sandbox() {
    return this._sandbox;
  }
  public set sandbox(value: ImagetestProviderSandbox | undefined) {
    this._sandbox = value;
  }
  public resetSandbox() {
    this._sandbox = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sandboxInput() {
    return this._sandbox;
  }

  // test_execution - computed: false, optional: true, required: false
  private _testExecution?: ImagetestProviderTestExecution; 
  public get testExecution() {
    return this._testExecution;
  }
  public set testExecution(value: ImagetestProviderTestExecution | undefined) {
    this._testExecution = value;
  }
  public resetTestExecution() {
    this._testExecution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testExecutionInput() {
    return this._testExecution;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      extra_repos: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extraRepos),
      harnesses: imagetestProviderHarnessesToTerraform(this._harnesses),
      logs: imagetestProviderLogsToTerraform(this._logs),
      repo: cdktf.stringToTerraform(this._repo),
      sandbox: imagetestProviderSandboxToTerraform(this._sandbox),
      test_execution: imagetestProviderTestExecutionToTerraform(this._testExecution),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      extra_repos: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._extraRepos),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      harnesses: {
        value: imagetestProviderHarnessesToHclTerraform(this._harnesses),
        isBlock: true,
        type: "struct",
        storageClassType: "ImagetestProviderHarnesses",
      },
      logs: {
        value: imagetestProviderLogsToHclTerraform(this._logs),
        isBlock: true,
        type: "struct",
        storageClassType: "ImagetestProviderLogs",
      },
      repo: {
        value: cdktf.stringToHclTerraform(this._repo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sandbox: {
        value: imagetestProviderSandboxToHclTerraform(this._sandbox),
        isBlock: true,
        type: "struct",
        storageClassType: "ImagetestProviderSandbox",
      },
      test_execution: {
        value: imagetestProviderTestExecutionToHclTerraform(this._testExecution),
        isBlock: true,
        type: "struct",
        storageClassType: "ImagetestProviderTestExecution",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
