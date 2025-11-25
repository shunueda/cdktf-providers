// https://registry.terraform.io/providers/fluxcd/flux/1.7.5/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FluxProviderConfig {
  /**
  * Configuration block with settings for Git.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.5/docs#git FluxProvider#git}
  */
  readonly git?: FluxProviderGit;
  /**
  * Configuration block with settings for Kubernetes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.5/docs#kubernetes FluxProvider#kubernetes}
  */
  readonly kubernetes?: FluxProviderKubernetes;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.5/docs#alias FluxProvider#alias}
  */
  readonly alias?: string;
}
export interface FluxProviderGitHttp {
  /**
  * Allows http Git url connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.5/docs#allow_insecure_http FluxProvider#allow_insecure_http}
  */
  readonly allowInsecureHttp?: boolean | cdktf.IResolvable;
  /**
  * Certificate authority to validate self-signed certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.5/docs#certificate_authority FluxProvider#certificate_authority}
  */
  readonly certificateAuthority?: string;
  /**
  * Password for basic authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.5/docs#password FluxProvider#password}
  */
  readonly password?: string;
  /**
  * Username for basic authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.5/docs#username FluxProvider#username}
  */
  readonly username?: string;
}

export function fluxProviderGitHttpToTerraform(struct?: FluxProviderGitHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_insecure_http: cdktf.booleanToTerraform(struct!.allowInsecureHttp),
    certificate_authority: cdktf.stringToTerraform(struct!.certificateAuthority),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function fluxProviderGitHttpToHclTerraform(struct?: FluxProviderGitHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_insecure_http: {
      value: cdktf.booleanToHclTerraform(struct!.allowInsecureHttp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    certificate_authority: {
      value: cdktf.stringToHclTerraform(struct!.certificateAuthority),
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

export interface FluxProviderGitSsh {
  /**
  * The list of hostkey algorithms to use for ssh connections, arranged from most preferred to the least.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.5/docs#hostkey_algos FluxProvider#hostkey_algos}
  */
  readonly hostkeyAlgos?: string[];
  /**
  * Password of the SSH private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.5/docs#password FluxProvider#password}
  */
  readonly password?: string;
  /**
  * Private key used for authenticating to the Git SSH server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.5/docs#private_key FluxProvider#private_key}
  */
  readonly privateKey?: string;
  /**
  * Username for Git SSH server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.5/docs#username FluxProvider#username}
  */
  readonly username?: string;
}

export function fluxProviderGitSshToTerraform(struct?: FluxProviderGitSsh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostkey_algos: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostkeyAlgos),
    password: cdktf.stringToTerraform(struct!.password),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function fluxProviderGitSshToHclTerraform(struct?: FluxProviderGitSsh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostkey_algos: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hostkeyAlgos),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
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

export interface FluxProviderGit {
  /**
  * Author email for Git commits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.5/docs#author_email FluxProvider#author_email}
  */
  readonly authorEmail?: string;
  /**
  * Author name for Git commits. Defaults to `Flux`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.5/docs#author_name FluxProvider#author_name}
  */
  readonly authorName?: string;
  /**
  * Branch of the repository to reconcile from. Defaults to `main`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.5/docs#branch FluxProvider#branch}
  */
  readonly branch?: string;
  /**
  * String to add to the commit messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.5/docs#commit_message_appendix FluxProvider#commit_message_appendix}
  */
  readonly commitMessageAppendix?: string;
  /**
  * Key id for selecting a particular GPG key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.5/docs#gpg_key_id FluxProvider#gpg_key_id}
  */
  readonly gpgKeyId?: string;
  /**
  * Path to the GPG key ring for signing commits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.5/docs#gpg_key_ring FluxProvider#gpg_key_ring}
  */
  readonly gpgKeyRing?: string;
  /**
  * Passphrase for decrypting GPG private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.5/docs#gpg_passphrase FluxProvider#gpg_passphrase}
  */
  readonly gpgPassphrase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.5/docs#http FluxProvider#http}
  */
  readonly http?: FluxProviderGitHttp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.5/docs#ssh FluxProvider#ssh}
  */
  readonly ssh?: FluxProviderGitSsh;
  /**
  * Url of Git repository to bootstrap from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.5/docs#url FluxProvider#url}
  */
  readonly url: string;
}

export function fluxProviderGitToTerraform(struct?: FluxProviderGit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    author_email: cdktf.stringToTerraform(struct!.authorEmail),
    author_name: cdktf.stringToTerraform(struct!.authorName),
    branch: cdktf.stringToTerraform(struct!.branch),
    commit_message_appendix: cdktf.stringToTerraform(struct!.commitMessageAppendix),
    gpg_key_id: cdktf.stringToTerraform(struct!.gpgKeyId),
    gpg_key_ring: cdktf.stringToTerraform(struct!.gpgKeyRing),
    gpg_passphrase: cdktf.stringToTerraform(struct!.gpgPassphrase),
    http: fluxProviderGitHttpToTerraform(struct!.http),
    ssh: fluxProviderGitSshToTerraform(struct!.ssh),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function fluxProviderGitToHclTerraform(struct?: FluxProviderGit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    author_email: {
      value: cdktf.stringToHclTerraform(struct!.authorEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    author_name: {
      value: cdktf.stringToHclTerraform(struct!.authorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    commit_message_appendix: {
      value: cdktf.stringToHclTerraform(struct!.commitMessageAppendix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gpg_key_id: {
      value: cdktf.stringToHclTerraform(struct!.gpgKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gpg_key_ring: {
      value: cdktf.stringToHclTerraform(struct!.gpgKeyRing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gpg_passphrase: {
      value: cdktf.stringToHclTerraform(struct!.gpgPassphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http: {
      value: fluxProviderGitHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "struct",
      storageClassType: "FluxProviderGitHttp",
    },
    ssh: {
      value: fluxProviderGitSshToHclTerraform(struct!.ssh),
      isBlock: true,
      type: "struct",
      storageClassType: "FluxProviderGitSsh",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface FluxProviderKubernetesExec {
  /**
  * Kubernetes client authentication API Version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.5/docs#api_version FluxProvider#api_version}
  */
  readonly apiVersion: string;
  /**
  * Client authentication exec command arguments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.5/docs#args FluxProvider#args}
  */
  readonly args?: string[];
  /**
  * Client authentication exec command.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.5/docs#command FluxProvider#command}
  */
  readonly command: string;
  /**
  * Client authentication exec environment variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.5/docs#env FluxProvider#env}
  */
  readonly env?: { [key: string]: string };
}

export function fluxProviderKubernetesExecToTerraform(struct?: FluxProviderKubernetesExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    command: cdktf.stringToTerraform(struct!.command),
    env: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.env),
  }
}


export function fluxProviderKubernetesExecToHclTerraform(struct?: FluxProviderKubernetesExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktf.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface FluxProviderKubernetes {
  /**
  * PEM-encoded client certificate for TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.5/docs#client_certificate FluxProvider#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * PEM-encoded client certificate key for TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.5/docs#client_key FluxProvider#client_key}
  */
  readonly clientKey?: string;
  /**
  * PEM-encoded root certificates bundle for TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.5/docs#cluster_ca_certificate FluxProvider#cluster_ca_certificate}
  */
  readonly clusterCaCertificate?: string;
  /**
  * Context to choose from the config file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.5/docs#config_context FluxProvider#config_context}
  */
  readonly configContext?: string;
  /**
  * Authentication info context of the kube config (name of the kubeconfig user, `--user` flag in `kubectl`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.5/docs#config_context_auth_info FluxProvider#config_context_auth_info}
  */
  readonly configContextAuthInfo?: string;
  /**
  * Cluster context of the kube config (name of the kubeconfig cluster, `--cluster` flag in `kubectl`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.5/docs#config_context_cluster FluxProvider#config_context_cluster}
  */
  readonly configContextCluster?: string;
  /**
  * Path to the kube config file. Can be set with KUBE_CONFIG_PATH.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.5/docs#config_path FluxProvider#config_path}
  */
  readonly configPath?: string;
  /**
  * A list of paths to kube config files. Can be set with KUBE_CONFIG_PATHS environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.5/docs#config_paths FluxProvider#config_paths}
  */
  readonly configPaths?: string[];
  /**
  * Kubernetes client authentication exec plugin configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.5/docs#exec FluxProvider#exec}
  */
  readonly exec?: FluxProviderKubernetesExec;
  /**
  * The hostname (in form of URI) of Kubernetes master.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.5/docs#host FluxProvider#host}
  */
  readonly host?: string;
  /**
  * Whether server should be accessed without verifying the TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.5/docs#insecure FluxProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * The password to use for HTTP basic authentication when accessing the Kubernetes master endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.5/docs#password FluxProvider#password}
  */
  readonly password?: string;
  /**
  * URL to the proxy to be used for all API requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.5/docs#proxy_url FluxProvider#proxy_url}
  */
  readonly proxyUrl?: string;
  /**
  * Token to authenticate an service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.5/docs#token FluxProvider#token}
  */
  readonly token?: string;
  /**
  * The username to use for HTTP basic authentication when accessing the Kubernetes master endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.5/docs#username FluxProvider#username}
  */
  readonly username?: string;
}

export function fluxProviderKubernetesToTerraform(struct?: FluxProviderKubernetes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_certificate: cdktf.stringToTerraform(struct!.clientCertificate),
    client_key: cdktf.stringToTerraform(struct!.clientKey),
    cluster_ca_certificate: cdktf.stringToTerraform(struct!.clusterCaCertificate),
    config_context: cdktf.stringToTerraform(struct!.configContext),
    config_context_auth_info: cdktf.stringToTerraform(struct!.configContextAuthInfo),
    config_context_cluster: cdktf.stringToTerraform(struct!.configContextCluster),
    config_path: cdktf.stringToTerraform(struct!.configPath),
    config_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.configPaths),
    exec: fluxProviderKubernetesExecToTerraform(struct!.exec),
    host: cdktf.stringToTerraform(struct!.host),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    password: cdktf.stringToTerraform(struct!.password),
    proxy_url: cdktf.stringToTerraform(struct!.proxyUrl),
    token: cdktf.stringToTerraform(struct!.token),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function fluxProviderKubernetesToHclTerraform(struct?: FluxProviderKubernetes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key: {
      value: cdktf.stringToHclTerraform(struct!.clientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.clusterCaCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_context: {
      value: cdktf.stringToHclTerraform(struct!.configContext),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_context_auth_info: {
      value: cdktf.stringToHclTerraform(struct!.configContextAuthInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_context_cluster: {
      value: cdktf.stringToHclTerraform(struct!.configContextCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_path: {
      value: cdktf.stringToHclTerraform(struct!.configPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.configPaths),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    exec: {
      value: fluxProviderKubernetesExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "FluxProviderKubernetesExec",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_url: {
      value: cdktf.stringToHclTerraform(struct!.proxyUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
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


/**
* Represents a {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.5/docs flux}
*/
export class FluxProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "flux";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FluxProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FluxProvider to import
  * @param importFromId The id of the existing FluxProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.5/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FluxProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "flux", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.5/docs flux} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FluxProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FluxProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'flux',
      terraformGeneratorMetadata: {
        providerName: 'flux',
        providerVersion: '1.7.5',
        providerVersionConstraint: '1.7.5'
      },
      terraformProviderSource: 'fluxcd/flux'
    });
    this._git = config.git;
    this._kubernetes = config.kubernetes;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // git - computed: false, optional: true, required: false
  private _git?: FluxProviderGit; 
  public get git() {
    return this._git;
  }
  public set git(value: FluxProviderGit | undefined) {
    this._git = value;
  }
  public resetGit() {
    this._git = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitInput() {
    return this._git;
  }

  // kubernetes - computed: false, optional: true, required: false
  private _kubernetes?: FluxProviderKubernetes; 
  public get kubernetes() {
    return this._kubernetes;
  }
  public set kubernetes(value: FluxProviderKubernetes | undefined) {
    this._kubernetes = value;
  }
  public resetKubernetes() {
    this._kubernetes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesInput() {
    return this._kubernetes;
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
      git: fluxProviderGitToTerraform(this._git),
      kubernetes: fluxProviderKubernetesToTerraform(this._kubernetes),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      git: {
        value: fluxProviderGitToHclTerraform(this._git),
        isBlock: true,
        type: "struct",
        storageClassType: "FluxProviderGit",
      },
      kubernetes: {
        value: fluxProviderKubernetesToHclTerraform(this._kubernetes),
        isBlock: true,
        type: "struct",
        storageClassType: "FluxProviderKubernetes",
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
