// https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ArgocdProviderConfig {
  /**
  * ArgoCD authentication token, takes precedence over `username`/`password`. Can be set through the `ARGOCD_AUTH_TOKEN` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs#auth_token ArgocdProvider#auth_token}
  */
  readonly authToken?: string;
  /**
  * Additional root CA certificates file to add to the client TLS connection pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs#cert_file ArgocdProvider#cert_file}
  */
  readonly certFile?: string;
  /**
  * Client certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs#client_cert_file ArgocdProvider#client_cert_file}
  */
  readonly clientCertFile?: string;
  /**
  * Client certificate key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs#client_cert_key ArgocdProvider#client_cert_key}
  */
  readonly clientCertKey?: string;
  /**
  * Override the default config path of `$HOME/.config/argocd/config`. Only relevant when `use_local_config`. Can be set through the `ARGOCD_CONFIG_PATH` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs#config_path ArgocdProvider#config_path}
  */
  readonly configPath?: string;
  /**
  * Context to choose when using a local ArgoCD config file. Only relevant when `use_local_config`. Can be set through `ARGOCD_CONTEXT` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs#context ArgocdProvider#context}
  */
  readonly context?: string;
  /**
  * Configure direct access using Kubernetes API server.
  * 
  *   **Warning**: this feature works by starting a local ArgoCD API server that talks directly to the Kubernetes API using the **current context in the default kubeconfig** (`~/.kube/config`). This behavior cannot be overridden using either environment variables or the `kubernetes` block in the provider configuration at present).
  * 
  *   If the server fails to start (e.g. your kubeconfig is misconfigured) then the provider will fail as a result of the `argocd` module forcing it to exit and no logs will be available to help you debug this. The error message will be similar to
  *   > `The plugin encountered an error, and failed to respond to the plugin.(*GRPCProvider).ReadResource call. The plugin logs may contain more details.`
  * 
  *   To debug this, you will need to login via the ArgoCD CLI using `argocd login --core` and then running an operation. E.g. `argocd app list`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs#core ArgocdProvider#core}
  */
  readonly core?: boolean | cdktf.IResolvable;
  /**
  * Whether to use gRPC web proxy client. Useful if Argo CD server is behind proxy which does not support HTTP2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs#grpc_web ArgocdProvider#grpc_web}
  */
  readonly grpcWeb?: boolean | cdktf.IResolvable;
  /**
  * Use the gRPC web proxy client and set the web root, e.g. `argo-cd`. Useful if the Argo CD server is behind a proxy at a non-root path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs#grpc_web_root_path ArgocdProvider#grpc_web_root_path}
  */
  readonly grpcWebRootPath?: string;
  /**
  * Additional headers to add to each request to the ArgoCD server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs#headers ArgocdProvider#headers}
  */
  readonly headers?: string[];
  /**
  * Whether to skip TLS server certificate. Can be set through the `ARGOCD_INSECURE` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs#insecure ArgocdProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Authentication password. Can be set through the `ARGOCD_AUTH_PASSWORD` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs#password ArgocdProvider#password}
  */
  readonly password?: string;
  /**
  * Whether to initiate an unencrypted connection to ArgoCD server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs#plain_text ArgocdProvider#plain_text}
  */
  readonly plainText?: boolean | cdktf.IResolvable;
  /**
  * Connect to a random argocd-server port using port forwarding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs#port_forward ArgocdProvider#port_forward}
  */
  readonly portForward?: boolean | cdktf.IResolvable;
  /**
  * Namespace name which should be used for port forwarding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs#port_forward_with_namespace ArgocdProvider#port_forward_with_namespace}
  */
  readonly portForwardWithNamespace?: string;
  /**
  * ArgoCD server address with port. Can be set through the `ARGOCD_SERVER` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs#server_addr ArgocdProvider#server_addr}
  */
  readonly serverAddr?: string;
  /**
  * Use the authentication settings found in the local config file. Useful when you have previously logged in using SSO. Conflicts with `auth_token`, `username` and `password`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs#use_local_config ArgocdProvider#use_local_config}
  */
  readonly useLocalConfig?: boolean | cdktf.IResolvable;
  /**
  * User-Agent request header override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs#user_agent ArgocdProvider#user_agent}
  */
  readonly userAgent?: string;
  /**
  * Authentication username. Can be set through the `ARGOCD_AUTH_USERNAME` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs#username ArgocdProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs#alias ArgocdProvider#alias}
  */
  readonly alias?: string;
  /**
  * kubernetes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs#kubernetes ArgocdProvider#kubernetes}
  */
  readonly kubernetes?: ArgocdProviderKubernetes;
}
export interface ArgocdProviderKubernetesExec {
  /**
  * API version to use when decoding the ExecCredentials resource, e.g. `client.authentication.k8s.io/v1beta1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs#api_version ArgocdProvider#api_version}
  */
  readonly apiVersion: string;
  /**
  * Map of environment variables to set when executing the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs#args ArgocdProvider#args}
  */
  readonly args?: string[];
  /**
  * Command to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs#command ArgocdProvider#command}
  */
  readonly command: string;
  /**
  * List of arguments to pass when executing the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs#env ArgocdProvider#env}
  */
  readonly env?: { [key: string]: string };
}

export function argocdProviderKubernetesExecToTerraform(struct?: ArgocdProviderKubernetesExec): any {
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


export function argocdProviderKubernetesExecToHclTerraform(struct?: ArgocdProviderKubernetesExec): any {
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

export interface ArgocdProviderKubernetes {
  /**
  * PEM-encoded client certificate for TLS authentication. Can be sourced from `KUBE_CLIENT_CERT_DATA`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs#client_certificate ArgocdProvider#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * PEM-encoded client certificate key for TLS authentication. Can be sourced from `KUBE_CLIENT_KEY_DATA`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs#client_key ArgocdProvider#client_key}
  */
  readonly clientKey?: string;
  /**
  * PEM-encoded root certificates bundle for TLS authentication. Can be sourced from `KUBE_CLUSTER_CA_CERT_DATA`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs#cluster_ca_certificate ArgocdProvider#cluster_ca_certificate}
  */
  readonly clusterCaCertificate?: string;
  /**
  * Context to choose from the config file. Can be sourced from `KUBE_CTX`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs#config_context ArgocdProvider#config_context}
  */
  readonly configContext?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs#config_context_auth_info ArgocdProvider#config_context_auth_info}
  */
  readonly configContextAuthInfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs#config_context_cluster ArgocdProvider#config_context_cluster}
  */
  readonly configContextCluster?: string;
  /**
  * The hostname (in form of URI) of the Kubernetes API. Can be sourced from `KUBE_HOST`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs#host ArgocdProvider#host}
  */
  readonly host?: string;
  /**
  * Whether server should be accessed without verifying the TLS certificate. Can be sourced from `KUBE_INSECURE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs#insecure ArgocdProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * The password to use for HTTP basic authentication when accessing the Kubernetes API. Can be sourced from `KUBE_PASSWORD`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs#password ArgocdProvider#password}
  */
  readonly password?: string;
  /**
  * Token to authenticate an service account. Can be sourced from `KUBE_TOKEN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs#token ArgocdProvider#token}
  */
  readonly token?: string;
  /**
  * The username to use for HTTP basic authentication when accessing the Kubernetes API. Can be sourced from `KUBE_USER`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs#username ArgocdProvider#username}
  */
  readonly username?: string;
  /**
  * exec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs#exec ArgocdProvider#exec}
  */
  readonly exec?: ArgocdProviderKubernetesExec;
}

export function argocdProviderKubernetesToTerraform(struct?: ArgocdProviderKubernetes): any {
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
    host: cdktf.stringToTerraform(struct!.host),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    password: cdktf.stringToTerraform(struct!.password),
    token: cdktf.stringToTerraform(struct!.token),
    username: cdktf.stringToTerraform(struct!.username),
    exec: argocdProviderKubernetesExecToTerraform(struct!.exec),
  }
}


export function argocdProviderKubernetesToHclTerraform(struct?: ArgocdProviderKubernetes): any {
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
    exec: {
      value: argocdProviderKubernetesExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "list",
      storageClassType: "ArgocdProviderKubernetesExecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs argocd}
*/
export class ArgocdProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "argocd";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ArgocdProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ArgocdProvider to import
  * @param importFromId The id of the existing ArgocdProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ArgocdProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "argocd", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs argocd} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ArgocdProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ArgocdProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'argocd',
      terraformGeneratorMetadata: {
        providerName: 'argocd',
        providerVersion: '7.11.2'
      },
      terraformProviderSource: 'argoproj-labs/argocd'
    });
    this._authToken = config.authToken;
    this._certFile = config.certFile;
    this._clientCertFile = config.clientCertFile;
    this._clientCertKey = config.clientCertKey;
    this._configPath = config.configPath;
    this._context = config.context;
    this._core = config.core;
    this._grpcWeb = config.grpcWeb;
    this._grpcWebRootPath = config.grpcWebRootPath;
    this._headers = config.headers;
    this._insecure = config.insecure;
    this._password = config.password;
    this._plainText = config.plainText;
    this._portForward = config.portForward;
    this._portForwardWithNamespace = config.portForwardWithNamespace;
    this._serverAddr = config.serverAddr;
    this._useLocalConfig = config.useLocalConfig;
    this._userAgent = config.userAgent;
    this._username = config.username;
    this._alias = config.alias;
    this._kubernetes = config.kubernetes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_token - computed: false, optional: true, required: false
  private _authToken?: string; 
  public get authToken() {
    return this._authToken;
  }
  public set authToken(value: string | undefined) {
    this._authToken = value;
  }
  public resetAuthToken() {
    this._authToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTokenInput() {
    return this._authToken;
  }

  // cert_file - computed: false, optional: true, required: false
  private _certFile?: string; 
  public get certFile() {
    return this._certFile;
  }
  public set certFile(value: string | undefined) {
    this._certFile = value;
  }
  public resetCertFile() {
    this._certFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certFileInput() {
    return this._certFile;
  }

  // client_cert_file - computed: false, optional: true, required: false
  private _clientCertFile?: string; 
  public get clientCertFile() {
    return this._clientCertFile;
  }
  public set clientCertFile(value: string | undefined) {
    this._clientCertFile = value;
  }
  public resetClientCertFile() {
    this._clientCertFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertFileInput() {
    return this._clientCertFile;
  }

  // client_cert_key - computed: false, optional: true, required: false
  private _clientCertKey?: string; 
  public get clientCertKey() {
    return this._clientCertKey;
  }
  public set clientCertKey(value: string | undefined) {
    this._clientCertKey = value;
  }
  public resetClientCertKey() {
    this._clientCertKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertKeyInput() {
    return this._clientCertKey;
  }

  // config_path - computed: false, optional: true, required: false
  private _configPath?: string; 
  public get configPath() {
    return this._configPath;
  }
  public set configPath(value: string | undefined) {
    this._configPath = value;
  }
  public resetConfigPath() {
    this._configPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configPathInput() {
    return this._configPath;
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this._context;
  }
  public set context(value: string | undefined) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // core - computed: false, optional: true, required: false
  private _core?: boolean | cdktf.IResolvable; 
  public get core() {
    return this._core;
  }
  public set core(value: boolean | cdktf.IResolvable | undefined) {
    this._core = value;
  }
  public resetCore() {
    this._core = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreInput() {
    return this._core;
  }

  // grpc_web - computed: false, optional: true, required: false
  private _grpcWeb?: boolean | cdktf.IResolvable; 
  public get grpcWeb() {
    return this._grpcWeb;
  }
  public set grpcWeb(value: boolean | cdktf.IResolvable | undefined) {
    this._grpcWeb = value;
  }
  public resetGrpcWeb() {
    this._grpcWeb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcWebInput() {
    return this._grpcWeb;
  }

  // grpc_web_root_path - computed: false, optional: true, required: false
  private _grpcWebRootPath?: string; 
  public get grpcWebRootPath() {
    return this._grpcWebRootPath;
  }
  public set grpcWebRootPath(value: string | undefined) {
    this._grpcWebRootPath = value;
  }
  public resetGrpcWebRootPath() {
    this._grpcWebRootPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcWebRootPathInput() {
    return this._grpcWebRootPath;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: string[]; 
  public get headers() {
    return this._headers;
  }
  public set headers(value: string[] | undefined) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this._insecure;
  }
  public set insecure(value: boolean | cdktf.IResolvable | undefined) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // plain_text - computed: false, optional: true, required: false
  private _plainText?: boolean | cdktf.IResolvable; 
  public get plainText() {
    return this._plainText;
  }
  public set plainText(value: boolean | cdktf.IResolvable | undefined) {
    this._plainText = value;
  }
  public resetPlainText() {
    this._plainText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextInput() {
    return this._plainText;
  }

  // port_forward - computed: false, optional: true, required: false
  private _portForward?: boolean | cdktf.IResolvable; 
  public get portForward() {
    return this._portForward;
  }
  public set portForward(value: boolean | cdktf.IResolvable | undefined) {
    this._portForward = value;
  }
  public resetPortForward() {
    this._portForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portForwardInput() {
    return this._portForward;
  }

  // port_forward_with_namespace - computed: false, optional: true, required: false
  private _portForwardWithNamespace?: string; 
  public get portForwardWithNamespace() {
    return this._portForwardWithNamespace;
  }
  public set portForwardWithNamespace(value: string | undefined) {
    this._portForwardWithNamespace = value;
  }
  public resetPortForwardWithNamespace() {
    this._portForwardWithNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portForwardWithNamespaceInput() {
    return this._portForwardWithNamespace;
  }

  // server_addr - computed: false, optional: true, required: false
  private _serverAddr?: string; 
  public get serverAddr() {
    return this._serverAddr;
  }
  public set serverAddr(value: string | undefined) {
    this._serverAddr = value;
  }
  public resetServerAddr() {
    this._serverAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddrInput() {
    return this._serverAddr;
  }

  // use_local_config - computed: false, optional: true, required: false
  private _useLocalConfig?: boolean | cdktf.IResolvable; 
  public get useLocalConfig() {
    return this._useLocalConfig;
  }
  public set useLocalConfig(value: boolean | cdktf.IResolvable | undefined) {
    this._useLocalConfig = value;
  }
  public resetUseLocalConfig() {
    this._useLocalConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLocalConfigInput() {
    return this._useLocalConfig;
  }

  // user_agent - computed: false, optional: true, required: false
  private _userAgent?: string; 
  public get userAgent() {
    return this._userAgent;
  }
  public set userAgent(value: string | undefined) {
    this._userAgent = value;
  }
  public resetUserAgent() {
    this._userAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentInput() {
    return this._userAgent;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
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

  // kubernetes - computed: false, optional: true, required: false
  private _kubernetes?: ArgocdProviderKubernetes; 
  public get kubernetes() {
    return this._kubernetes;
  }
  public set kubernetes(value: ArgocdProviderKubernetes | undefined) {
    this._kubernetes = value;
  }
  public resetKubernetes() {
    this._kubernetes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesInput() {
    return this._kubernetes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_token: cdktf.stringToTerraform(this._authToken),
      cert_file: cdktf.stringToTerraform(this._certFile),
      client_cert_file: cdktf.stringToTerraform(this._clientCertFile),
      client_cert_key: cdktf.stringToTerraform(this._clientCertKey),
      config_path: cdktf.stringToTerraform(this._configPath),
      context: cdktf.stringToTerraform(this._context),
      core: cdktf.booleanToTerraform(this._core),
      grpc_web: cdktf.booleanToTerraform(this._grpcWeb),
      grpc_web_root_path: cdktf.stringToTerraform(this._grpcWebRootPath),
      headers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._headers),
      insecure: cdktf.booleanToTerraform(this._insecure),
      password: cdktf.stringToTerraform(this._password),
      plain_text: cdktf.booleanToTerraform(this._plainText),
      port_forward: cdktf.booleanToTerraform(this._portForward),
      port_forward_with_namespace: cdktf.stringToTerraform(this._portForwardWithNamespace),
      server_addr: cdktf.stringToTerraform(this._serverAddr),
      use_local_config: cdktf.booleanToTerraform(this._useLocalConfig),
      user_agent: cdktf.stringToTerraform(this._userAgent),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
      kubernetes: argocdProviderKubernetesToTerraform(this._kubernetes),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_token: {
        value: cdktf.stringToHclTerraform(this._authToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_file: {
        value: cdktf.stringToHclTerraform(this._certFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_cert_file: {
        value: cdktf.stringToHclTerraform(this._clientCertFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_cert_key: {
        value: cdktf.stringToHclTerraform(this._clientCertKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_path: {
        value: cdktf.stringToHclTerraform(this._configPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      context: {
        value: cdktf.stringToHclTerraform(this._context),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      core: {
        value: cdktf.booleanToHclTerraform(this._core),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      grpc_web: {
        value: cdktf.booleanToHclTerraform(this._grpcWeb),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      grpc_web_root_path: {
        value: cdktf.stringToHclTerraform(this._grpcWebRootPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      headers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._headers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      insecure: {
        value: cdktf.booleanToHclTerraform(this._insecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plain_text: {
        value: cdktf.booleanToHclTerraform(this._plainText),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port_forward: {
        value: cdktf.booleanToHclTerraform(this._portForward),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port_forward_with_namespace: {
        value: cdktf.stringToHclTerraform(this._portForwardWithNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_addr: {
        value: cdktf.stringToHclTerraform(this._serverAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_local_config: {
        value: cdktf.booleanToHclTerraform(this._useLocalConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_agent: {
        value: cdktf.stringToHclTerraform(this._userAgent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubernetes: {
        value: argocdProviderKubernetesToHclTerraform(this._kubernetes),
        isBlock: true,
        type: "list",
        storageClassType: "ArgocdProviderKubernetesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
