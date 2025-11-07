// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CheckpointProviderConfig {
  /**
  * Administrator API key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs#api_key CheckpointProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * Number of batch size to automatically run publish
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs#auto_publish_batch_size CheckpointProvider#auto_publish_batch_size}
  */
  readonly autoPublishBatchSize?: number;
  /**
  * Smart-1 Cloud management UID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs#cloud_mgmt_id CheckpointProvider#cloud_mgmt_id}
  */
  readonly cloudMgmtId?: string;
  /**
  * Check Point access context - gaia_api or web_api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs#context CheckpointProvider#context}
  */
  readonly context?: string;
  /**
  * login to specific domain. Domain can be identified by name or UID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs#domain CheckpointProvider#domain}
  */
  readonly domain?: string;
  /**
  * Indicates that the client should not check the server's certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs#ignore_server_certificate CheckpointProvider#ignore_server_certificate}
  */
  readonly ignoreServerCertificate?: boolean | cdktf.IResolvable;
  /**
  * Check Point Management admin password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs#password CheckpointProvider#password}
  */
  readonly password?: string;
  /**
  * Port used for connection to the API server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs#port CheckpointProvider#port}
  */
  readonly port?: number;
  /**
  * HTTP proxy server address (without "http://")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs#proxy_host CheckpointProvider#proxy_host}
  */
  readonly proxyHost?: string;
  /**
  * HTTP proxy port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs#proxy_port CheckpointProvider#proxy_port}
  */
  readonly proxyPort?: number;
  /**
  * Check Point Management server IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs#server CheckpointProvider#server}
  */
  readonly server?: string;
  /**
  * Session purpose description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs#session_description CheckpointProvider#session_description}
  */
  readonly sessionDescription?: string;
  /**
  * File name used to store the current session id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs#session_file_name CheckpointProvider#session_file_name}
  */
  readonly sessionFileName?: string;
  /**
  * Session unique name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs#session_name CheckpointProvider#session_name}
  */
  readonly sessionName?: string;
  /**
  * Timeout for the Check Point session in seconds. Can be 10-3600
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs#session_timeout CheckpointProvider#session_timeout}
  */
  readonly sessionTimeout?: number;
  /**
  * Timeout in seconds for the Go SDK to complete a transaction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs#timeout CheckpointProvider#timeout}
  */
  readonly timeout?: number;
  /**
  * Check Point Management admin name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs#username CheckpointProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs#alias CheckpointProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs checkpoint}
*/
export class CheckpointProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CheckpointProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CheckpointProvider to import
  * @param importFromId The id of the existing CheckpointProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CheckpointProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs checkpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CheckpointProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CheckpointProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
      },
      terraformProviderSource: 'CheckPointSW/checkpoint'
    });
    this._apiKey = config.apiKey;
    this._autoPublishBatchSize = config.autoPublishBatchSize;
    this._cloudMgmtId = config.cloudMgmtId;
    this._context = config.context;
    this._domain = config.domain;
    this._ignoreServerCertificate = config.ignoreServerCertificate;
    this._password = config.password;
    this._port = config.port;
    this._proxyHost = config.proxyHost;
    this._proxyPort = config.proxyPort;
    this._server = config.server;
    this._sessionDescription = config.sessionDescription;
    this._sessionFileName = config.sessionFileName;
    this._sessionName = config.sessionName;
    this._sessionTimeout = config.sessionTimeout;
    this._timeout = config.timeout;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this._apiKey;
  }
  public set apiKey(value: string | undefined) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // auto_publish_batch_size - computed: false, optional: true, required: false
  private _autoPublishBatchSize?: number; 
  public get autoPublishBatchSize() {
    return this._autoPublishBatchSize;
  }
  public set autoPublishBatchSize(value: number | undefined) {
    this._autoPublishBatchSize = value;
  }
  public resetAutoPublishBatchSize() {
    this._autoPublishBatchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPublishBatchSizeInput() {
    return this._autoPublishBatchSize;
  }

  // cloud_mgmt_id - computed: false, optional: true, required: false
  private _cloudMgmtId?: string; 
  public get cloudMgmtId() {
    return this._cloudMgmtId;
  }
  public set cloudMgmtId(value: string | undefined) {
    this._cloudMgmtId = value;
  }
  public resetCloudMgmtId() {
    this._cloudMgmtId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudMgmtIdInput() {
    return this._cloudMgmtId;
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

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this._domain;
  }
  public set domain(value: string | undefined) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // ignore_server_certificate - computed: false, optional: true, required: false
  private _ignoreServerCertificate?: boolean | cdktf.IResolvable; 
  public get ignoreServerCertificate() {
    return this._ignoreServerCertificate;
  }
  public set ignoreServerCertificate(value: boolean | cdktf.IResolvable | undefined) {
    this._ignoreServerCertificate = value;
  }
  public resetIgnoreServerCertificate() {
    this._ignoreServerCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreServerCertificateInput() {
    return this._ignoreServerCertificate;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this._port;
  }
  public set port(value: number | undefined) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // proxy_host - computed: false, optional: true, required: false
  private _proxyHost?: string; 
  public get proxyHost() {
    return this._proxyHost;
  }
  public set proxyHost(value: string | undefined) {
    this._proxyHost = value;
  }
  public resetProxyHost() {
    this._proxyHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyHostInput() {
    return this._proxyHost;
  }

  // proxy_port - computed: false, optional: true, required: false
  private _proxyPort?: number; 
  public get proxyPort() {
    return this._proxyPort;
  }
  public set proxyPort(value: number | undefined) {
    this._proxyPort = value;
  }
  public resetProxyPort() {
    this._proxyPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyPortInput() {
    return this._proxyPort;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this._server;
  }
  public set server(value: string | undefined) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // session_description - computed: false, optional: true, required: false
  private _sessionDescription?: string; 
  public get sessionDescription() {
    return this._sessionDescription;
  }
  public set sessionDescription(value: string | undefined) {
    this._sessionDescription = value;
  }
  public resetSessionDescription() {
    this._sessionDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionDescriptionInput() {
    return this._sessionDescription;
  }

  // session_file_name - computed: false, optional: true, required: false
  private _sessionFileName?: string; 
  public get sessionFileName() {
    return this._sessionFileName;
  }
  public set sessionFileName(value: string | undefined) {
    this._sessionFileName = value;
  }
  public resetSessionFileName() {
    this._sessionFileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionFileNameInput() {
    return this._sessionFileName;
  }

  // session_name - computed: false, optional: true, required: false
  private _sessionName?: string; 
  public get sessionName() {
    return this._sessionName;
  }
  public set sessionName(value: string | undefined) {
    this._sessionName = value;
  }
  public resetSessionName() {
    this._sessionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionNameInput() {
    return this._sessionName;
  }

  // session_timeout - computed: false, optional: true, required: false
  private _sessionTimeout?: number; 
  public get sessionTimeout() {
    return this._sessionTimeout;
  }
  public set sessionTimeout(value: number | undefined) {
    this._sessionTimeout = value;
  }
  public resetSessionTimeout() {
    this._sessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutInput() {
    return this._sessionTimeout;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this._timeout;
  }
  public set timeout(value: number | undefined) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key: cdktf.stringToTerraform(this._apiKey),
      auto_publish_batch_size: cdktf.numberToTerraform(this._autoPublishBatchSize),
      cloud_mgmt_id: cdktf.stringToTerraform(this._cloudMgmtId),
      context: cdktf.stringToTerraform(this._context),
      domain: cdktf.stringToTerraform(this._domain),
      ignore_server_certificate: cdktf.booleanToTerraform(this._ignoreServerCertificate),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      proxy_host: cdktf.stringToTerraform(this._proxyHost),
      proxy_port: cdktf.numberToTerraform(this._proxyPort),
      server: cdktf.stringToTerraform(this._server),
      session_description: cdktf.stringToTerraform(this._sessionDescription),
      session_file_name: cdktf.stringToTerraform(this._sessionFileName),
      session_name: cdktf.stringToTerraform(this._sessionName),
      session_timeout: cdktf.numberToTerraform(this._sessionTimeout),
      timeout: cdktf.numberToTerraform(this._timeout),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_publish_batch_size: {
        value: cdktf.numberToHclTerraform(this._autoPublishBatchSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cloud_mgmt_id: {
        value: cdktf.stringToHclTerraform(this._cloudMgmtId),
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
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_server_certificate: {
        value: cdktf.booleanToHclTerraform(this._ignoreServerCertificate),
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
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proxy_host: {
        value: cdktf.stringToHclTerraform(this._proxyHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_port: {
        value: cdktf.numberToHclTerraform(this._proxyPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_description: {
        value: cdktf.stringToHclTerraform(this._sessionDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_file_name: {
        value: cdktf.stringToHclTerraform(this._sessionFileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_name: {
        value: cdktf.stringToHclTerraform(this._sessionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_timeout: {
        value: cdktf.numberToHclTerraform(this._sessionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
