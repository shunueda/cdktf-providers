// https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubectlProviderConfig {
  /**
  * Defines the number of attempts any create/update action will take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs#apply_retry_count KubectlProvider#apply_retry_count}
  */
  readonly applyRetryCount?: number;
  /**
  * PEM-encoded client certificate for TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs#client_certificate KubectlProvider#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * PEM-encoded client certificate key for TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs#client_key KubectlProvider#client_key}
  */
  readonly clientKey?: string;
  /**
  * PEM-encoded root certificates bundle for TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs#cluster_ca_certificate KubectlProvider#cluster_ca_certificate}
  */
  readonly clusterCaCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs#config_context KubectlProvider#config_context}
  */
  readonly configContext?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs#config_context_auth_info KubectlProvider#config_context_auth_info}
  */
  readonly configContextAuthInfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs#config_context_cluster KubectlProvider#config_context_cluster}
  */
  readonly configContextCluster?: string;
  /**
  * Path to the kube config file, defaults to ~/.kube/config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs#config_path KubectlProvider#config_path}
  */
  readonly configPath?: string;
  /**
  * A list of paths to kube config files. Can be set with KUBE_CONFIG_PATHS environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs#config_paths KubectlProvider#config_paths}
  */
  readonly configPaths?: string[];
  /**
  * The hostname (in form of URI) of Kubernetes master.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs#host KubectlProvider#host}
  */
  readonly host?: string;
  /**
  * Whether server should be accessed without verifying the TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs#insecure KubectlProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Load local kubeconfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs#load_config_file KubectlProvider#load_config_file}
  */
  readonly loadConfigFile?: boolean | cdktf.IResolvable;
  /**
  * The password to use for HTTP basic authentication when accessing the Kubernetes master endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs#password KubectlProvider#password}
  */
  readonly password?: string;
  /**
  * URL to the proxy to be used for all API requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs#proxy_url KubectlProvider#proxy_url}
  */
  readonly proxyUrl?: string;
  /**
  * Server name passed to the server for SNI and is used in the client to check server certificates against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs#tls_server_name KubectlProvider#tls_server_name}
  */
  readonly tlsServerName?: string;
  /**
  * Token to authentifcate an service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs#token KubectlProvider#token}
  */
  readonly token?: string;
  /**
  * The username to use for HTTP basic authentication when accessing the Kubernetes master endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs#username KubectlProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs#alias KubectlProvider#alias}
  */
  readonly alias?: string;
  /**
  * exec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs#exec KubectlProvider#exec}
  */
  readonly exec?: KubectlProviderExec;
}
export interface KubectlProviderExec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs#api_version KubectlProvider#api_version}
  */
  readonly apiVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs#args KubectlProvider#args}
  */
  readonly args?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs#command KubectlProvider#command}
  */
  readonly command: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs#env KubectlProvider#env}
  */
  readonly env?: { [key: string]: string };
}

export function kubectlProviderExecToTerraform(struct?: KubectlProviderExec): any {
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


export function kubectlProviderExecToHclTerraform(struct?: KubectlProviderExec): any {
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


/**
* Represents a {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs kubectl}
*/
export class KubectlProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kubectl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubectlProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubectlProvider to import
  * @param importFromId The id of the existing KubectlProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubectlProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kubectl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs kubectl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubectlProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: KubectlProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'kubectl',
      terraformGeneratorMetadata: {
        providerName: 'kubectl',
        providerVersion: '2.1.3',
        providerVersionConstraint: '2.1.3'
      },
      terraformProviderSource: 'alekc/kubectl'
    });
    this._applyRetryCount = config.applyRetryCount;
    this._clientCertificate = config.clientCertificate;
    this._clientKey = config.clientKey;
    this._clusterCaCertificate = config.clusterCaCertificate;
    this._configContext = config.configContext;
    this._configContextAuthInfo = config.configContextAuthInfo;
    this._configContextCluster = config.configContextCluster;
    this._configPath = config.configPath;
    this._configPaths = config.configPaths;
    this._host = config.host;
    this._insecure = config.insecure;
    this._loadConfigFile = config.loadConfigFile;
    this._password = config.password;
    this._proxyUrl = config.proxyUrl;
    this._tlsServerName = config.tlsServerName;
    this._token = config.token;
    this._username = config.username;
    this._alias = config.alias;
    this._exec = config.exec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apply_retry_count - computed: false, optional: true, required: false
  private _applyRetryCount?: number; 
  public get applyRetryCount() {
    return this._applyRetryCount;
  }
  public set applyRetryCount(value: number | undefined) {
    this._applyRetryCount = value;
  }
  public resetApplyRetryCount() {
    this._applyRetryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyRetryCountInput() {
    return this._applyRetryCount;
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this._clientCertificate;
  }
  public set clientCertificate(value: string | undefined) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey?: string; 
  public get clientKey() {
    return this._clientKey;
  }
  public set clientKey(value: string | undefined) {
    this._clientKey = value;
  }
  public resetClientKey() {
    this._clientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
  }

  // cluster_ca_certificate - computed: false, optional: true, required: false
  private _clusterCaCertificate?: string; 
  public get clusterCaCertificate() {
    return this._clusterCaCertificate;
  }
  public set clusterCaCertificate(value: string | undefined) {
    this._clusterCaCertificate = value;
  }
  public resetClusterCaCertificate() {
    this._clusterCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCaCertificateInput() {
    return this._clusterCaCertificate;
  }

  // config_context - computed: false, optional: true, required: false
  private _configContext?: string; 
  public get configContext() {
    return this._configContext;
  }
  public set configContext(value: string | undefined) {
    this._configContext = value;
  }
  public resetConfigContext() {
    this._configContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configContextInput() {
    return this._configContext;
  }

  // config_context_auth_info - computed: false, optional: true, required: false
  private _configContextAuthInfo?: string; 
  public get configContextAuthInfo() {
    return this._configContextAuthInfo;
  }
  public set configContextAuthInfo(value: string | undefined) {
    this._configContextAuthInfo = value;
  }
  public resetConfigContextAuthInfo() {
    this._configContextAuthInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configContextAuthInfoInput() {
    return this._configContextAuthInfo;
  }

  // config_context_cluster - computed: false, optional: true, required: false
  private _configContextCluster?: string; 
  public get configContextCluster() {
    return this._configContextCluster;
  }
  public set configContextCluster(value: string | undefined) {
    this._configContextCluster = value;
  }
  public resetConfigContextCluster() {
    this._configContextCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configContextClusterInput() {
    return this._configContextCluster;
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

  // config_paths - computed: false, optional: true, required: false
  private _configPaths?: string[]; 
  public get configPaths() {
    return this._configPaths;
  }
  public set configPaths(value: string[] | undefined) {
    this._configPaths = value;
  }
  public resetConfigPaths() {
    this._configPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configPathsInput() {
    return this._configPaths;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this._host;
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // load_config_file - computed: false, optional: true, required: false
  private _loadConfigFile?: boolean | cdktf.IResolvable; 
  public get loadConfigFile() {
    return this._loadConfigFile;
  }
  public set loadConfigFile(value: boolean | cdktf.IResolvable | undefined) {
    this._loadConfigFile = value;
  }
  public resetLoadConfigFile() {
    this._loadConfigFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadConfigFileInput() {
    return this._loadConfigFile;
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

  // proxy_url - computed: false, optional: true, required: false
  private _proxyUrl?: string; 
  public get proxyUrl() {
    return this._proxyUrl;
  }
  public set proxyUrl(value: string | undefined) {
    this._proxyUrl = value;
  }
  public resetProxyUrl() {
    this._proxyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyUrlInput() {
    return this._proxyUrl;
  }

  // tls_server_name - computed: false, optional: true, required: false
  private _tlsServerName?: string; 
  public get tlsServerName() {
    return this._tlsServerName;
  }
  public set tlsServerName(value: string | undefined) {
    this._tlsServerName = value;
  }
  public resetTlsServerName() {
    this._tlsServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsServerNameInput() {
    return this._tlsServerName;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
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

  // exec - computed: false, optional: true, required: false
  private _exec?: KubectlProviderExec; 
  public get exec() {
    return this._exec;
  }
  public set exec(value: KubectlProviderExec | undefined) {
    this._exec = value;
  }
  public resetExec() {
    this._exec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apply_retry_count: cdktf.numberToTerraform(this._applyRetryCount),
      client_certificate: cdktf.stringToTerraform(this._clientCertificate),
      client_key: cdktf.stringToTerraform(this._clientKey),
      cluster_ca_certificate: cdktf.stringToTerraform(this._clusterCaCertificate),
      config_context: cdktf.stringToTerraform(this._configContext),
      config_context_auth_info: cdktf.stringToTerraform(this._configContextAuthInfo),
      config_context_cluster: cdktf.stringToTerraform(this._configContextCluster),
      config_path: cdktf.stringToTerraform(this._configPath),
      config_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(this._configPaths),
      host: cdktf.stringToTerraform(this._host),
      insecure: cdktf.booleanToTerraform(this._insecure),
      load_config_file: cdktf.booleanToTerraform(this._loadConfigFile),
      password: cdktf.stringToTerraform(this._password),
      proxy_url: cdktf.stringToTerraform(this._proxyUrl),
      tls_server_name: cdktf.stringToTerraform(this._tlsServerName),
      token: cdktf.stringToTerraform(this._token),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
      exec: kubectlProviderExecToTerraform(this._exec),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apply_retry_count: {
        value: cdktf.numberToHclTerraform(this._applyRetryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_certificate: {
        value: cdktf.stringToHclTerraform(this._clientCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_key: {
        value: cdktf.stringToHclTerraform(this._clientKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_ca_certificate: {
        value: cdktf.stringToHclTerraform(this._clusterCaCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_context: {
        value: cdktf.stringToHclTerraform(this._configContext),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_context_auth_info: {
        value: cdktf.stringToHclTerraform(this._configContextAuthInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_context_cluster: {
        value: cdktf.stringToHclTerraform(this._configContextCluster),
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
      config_paths: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._configPaths),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure: {
        value: cdktf.booleanToHclTerraform(this._insecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      load_config_file: {
        value: cdktf.booleanToHclTerraform(this._loadConfigFile),
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
      proxy_url: {
        value: cdktf.stringToHclTerraform(this._proxyUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_server_name: {
        value: cdktf.stringToHclTerraform(this._tlsServerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
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
      exec: {
        value: kubectlProviderExecToHclTerraform(this._exec),
        isBlock: true,
        type: "list",
        storageClassType: "KubectlProviderExecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
