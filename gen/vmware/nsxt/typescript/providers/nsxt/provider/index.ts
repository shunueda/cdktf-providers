// https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsxtProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs#allow_unverified_ssl NsxtProvider#allow_unverified_ssl}
  */
  readonly allowUnverifiedSsl?: boolean | cdktf.IResolvable;
  /**
  * CA certificate passed as string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs#ca NsxtProvider#ca}
  */
  readonly ca?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs#ca_file NsxtProvider#ca_file}
  */
  readonly caFile?: string;
  /**
  * Client certificate passed as string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs#client_auth_cert NsxtProvider#client_auth_cert}
  */
  readonly clientAuthCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs#client_auth_cert_file NsxtProvider#client_auth_cert_file}
  */
  readonly clientAuthCertFile?: string;
  /**
  * Client certificate key passed as string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs#client_auth_key NsxtProvider#client_auth_key}
  */
  readonly clientAuthKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs#client_auth_key_file NsxtProvider#client_auth_key_file}
  */
  readonly clientAuthKeyFile?: string;
  /**
  * Enforcement Point for NSXT Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs#enforcement_point NsxtProvider#enforcement_point}
  */
  readonly enforcementPoint?: string;
  /**
  * Is this a policy global manager endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs#global_manager NsxtProvider#global_manager}
  */
  readonly globalManager?: boolean | cdktf.IResolvable;
  /**
  * The hostname or IP address of the NSX manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs#host NsxtProvider#host}
  */
  readonly host?: string;
  /**
  * license keys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs#license_keys NsxtProvider#license_keys}
  */
  readonly licenseKeys?: string[];
  /**
  * Maximum number of HTTP client retries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs#max_retries NsxtProvider#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Avoid initializing NSX connection on startup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs#on_demand_connection NsxtProvider#on_demand_connection}
  */
  readonly onDemandConnection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs#password NsxtProvider#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs#remote_auth NsxtProvider#remote_auth}
  */
  readonly remoteAuth?: boolean | cdktf.IResolvable;
  /**
  * Maximum delay in milliseconds between retries of a request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs#retry_max_delay NsxtProvider#retry_max_delay}
  */
  readonly retryMaxDelay?: number;
  /**
  * Minimum delay in milliseconds between retries of a request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs#retry_min_delay NsxtProvider#retry_min_delay}
  */
  readonly retryMinDelay?: number;
  /**
  * HTTP replies status codes to retry on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs#retry_on_status_codes NsxtProvider#retry_on_status_codes}
  */
  readonly retryOnStatusCodes?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs#session_auth NsxtProvider#session_auth}
  */
  readonly sessionAuth?: boolean | cdktf.IResolvable;
  /**
  * Treat partial success status as success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs#tolerate_partial_success NsxtProvider#tolerate_partial_success}
  */
  readonly toleratePartialSuccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs#username NsxtProvider#username}
  */
  readonly username?: string;
  /**
  * URL for VMC authorization service (CSP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs#vmc_auth_host NsxtProvider#vmc_auth_host}
  */
  readonly vmcAuthHost?: string;
  /**
  * Mode for VMC authorization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs#vmc_auth_mode NsxtProvider#vmc_auth_mode}
  */
  readonly vmcAuthMode?: string;
  /**
  * ID of OAuth App associated with the VMC organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs#vmc_client_id NsxtProvider#vmc_client_id}
  */
  readonly vmcClientId?: string;
  /**
  * Secret of OAuth App associated with the VMC organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs#vmc_client_secret NsxtProvider#vmc_client_secret}
  */
  readonly vmcClientSecret?: string;
  /**
  * Long-living API token for VMC authorization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs#vmc_token NsxtProvider#vmc_token}
  */
  readonly vmcToken?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs#alias NsxtProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs nsxt}
*/
export class NsxtProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NsxtProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NsxtProvider to import
  * @param importFromId The id of the existing NsxtProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NsxtProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs nsxt} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsxtProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NsxtProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nsxt',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.11.0',
        providerVersionConstraint: '3.11.0'
      },
      terraformProviderSource: 'vmware/nsxt'
    });
    this._allowUnverifiedSsl = config.allowUnverifiedSsl;
    this._ca = config.ca;
    this._caFile = config.caFile;
    this._clientAuthCert = config.clientAuthCert;
    this._clientAuthCertFile = config.clientAuthCertFile;
    this._clientAuthKey = config.clientAuthKey;
    this._clientAuthKeyFile = config.clientAuthKeyFile;
    this._enforcementPoint = config.enforcementPoint;
    this._globalManager = config.globalManager;
    this._host = config.host;
    this._licenseKeys = config.licenseKeys;
    this._maxRetries = config.maxRetries;
    this._onDemandConnection = config.onDemandConnection;
    this._password = config.password;
    this._remoteAuth = config.remoteAuth;
    this._retryMaxDelay = config.retryMaxDelay;
    this._retryMinDelay = config.retryMinDelay;
    this._retryOnStatusCodes = config.retryOnStatusCodes;
    this._sessionAuth = config.sessionAuth;
    this._toleratePartialSuccess = config.toleratePartialSuccess;
    this._username = config.username;
    this._vmcAuthHost = config.vmcAuthHost;
    this._vmcAuthMode = config.vmcAuthMode;
    this._vmcClientId = config.vmcClientId;
    this._vmcClientSecret = config.vmcClientSecret;
    this._vmcToken = config.vmcToken;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_unverified_ssl - computed: false, optional: true, required: false
  private _allowUnverifiedSsl?: boolean | cdktf.IResolvable; 
  public get allowUnverifiedSsl() {
    return this._allowUnverifiedSsl;
  }
  public set allowUnverifiedSsl(value: boolean | cdktf.IResolvable | undefined) {
    this._allowUnverifiedSsl = value;
  }
  public resetAllowUnverifiedSsl() {
    this._allowUnverifiedSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnverifiedSslInput() {
    return this._allowUnverifiedSsl;
  }

  // ca - computed: false, optional: true, required: false
  private _ca?: string; 
  public get ca() {
    return this._ca;
  }
  public set ca(value: string | undefined) {
    this._ca = value;
  }
  public resetCa() {
    this._ca = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca;
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this._caFile;
  }
  public set caFile(value: string | undefined) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // client_auth_cert - computed: false, optional: true, required: false
  private _clientAuthCert?: string; 
  public get clientAuthCert() {
    return this._clientAuthCert;
  }
  public set clientAuthCert(value: string | undefined) {
    this._clientAuthCert = value;
  }
  public resetClientAuthCert() {
    this._clientAuthCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthCertInput() {
    return this._clientAuthCert;
  }

  // client_auth_cert_file - computed: false, optional: true, required: false
  private _clientAuthCertFile?: string; 
  public get clientAuthCertFile() {
    return this._clientAuthCertFile;
  }
  public set clientAuthCertFile(value: string | undefined) {
    this._clientAuthCertFile = value;
  }
  public resetClientAuthCertFile() {
    this._clientAuthCertFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthCertFileInput() {
    return this._clientAuthCertFile;
  }

  // client_auth_key - computed: false, optional: true, required: false
  private _clientAuthKey?: string; 
  public get clientAuthKey() {
    return this._clientAuthKey;
  }
  public set clientAuthKey(value: string | undefined) {
    this._clientAuthKey = value;
  }
  public resetClientAuthKey() {
    this._clientAuthKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthKeyInput() {
    return this._clientAuthKey;
  }

  // client_auth_key_file - computed: false, optional: true, required: false
  private _clientAuthKeyFile?: string; 
  public get clientAuthKeyFile() {
    return this._clientAuthKeyFile;
  }
  public set clientAuthKeyFile(value: string | undefined) {
    this._clientAuthKeyFile = value;
  }
  public resetClientAuthKeyFile() {
    this._clientAuthKeyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthKeyFileInput() {
    return this._clientAuthKeyFile;
  }

  // enforcement_point - computed: false, optional: true, required: false
  private _enforcementPoint?: string; 
  public get enforcementPoint() {
    return this._enforcementPoint;
  }
  public set enforcementPoint(value: string | undefined) {
    this._enforcementPoint = value;
  }
  public resetEnforcementPoint() {
    this._enforcementPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementPointInput() {
    return this._enforcementPoint;
  }

  // global_manager - computed: false, optional: true, required: false
  private _globalManager?: boolean | cdktf.IResolvable; 
  public get globalManager() {
    return this._globalManager;
  }
  public set globalManager(value: boolean | cdktf.IResolvable | undefined) {
    this._globalManager = value;
  }
  public resetGlobalManager() {
    this._globalManager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalManagerInput() {
    return this._globalManager;
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

  // license_keys - computed: false, optional: true, required: false
  private _licenseKeys?: string[]; 
  public get licenseKeys() {
    return this._licenseKeys;
  }
  public set licenseKeys(value: string[] | undefined) {
    this._licenseKeys = value;
  }
  public resetLicenseKeys() {
    this._licenseKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseKeysInput() {
    return this._licenseKeys;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this._maxRetries;
  }
  public set maxRetries(value: number | undefined) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // on_demand_connection - computed: false, optional: true, required: false
  private _onDemandConnection?: boolean | cdktf.IResolvable; 
  public get onDemandConnection() {
    return this._onDemandConnection;
  }
  public set onDemandConnection(value: boolean | cdktf.IResolvable | undefined) {
    this._onDemandConnection = value;
  }
  public resetOnDemandConnection() {
    this._onDemandConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandConnectionInput() {
    return this._onDemandConnection;
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

  // remote_auth - computed: false, optional: true, required: false
  private _remoteAuth?: boolean | cdktf.IResolvable; 
  public get remoteAuth() {
    return this._remoteAuth;
  }
  public set remoteAuth(value: boolean | cdktf.IResolvable | undefined) {
    this._remoteAuth = value;
  }
  public resetRemoteAuth() {
    this._remoteAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAuthInput() {
    return this._remoteAuth;
  }

  // retry_max_delay - computed: false, optional: true, required: false
  private _retryMaxDelay?: number; 
  public get retryMaxDelay() {
    return this._retryMaxDelay;
  }
  public set retryMaxDelay(value: number | undefined) {
    this._retryMaxDelay = value;
  }
  public resetRetryMaxDelay() {
    this._retryMaxDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryMaxDelayInput() {
    return this._retryMaxDelay;
  }

  // retry_min_delay - computed: false, optional: true, required: false
  private _retryMinDelay?: number; 
  public get retryMinDelay() {
    return this._retryMinDelay;
  }
  public set retryMinDelay(value: number | undefined) {
    this._retryMinDelay = value;
  }
  public resetRetryMinDelay() {
    this._retryMinDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryMinDelayInput() {
    return this._retryMinDelay;
  }

  // retry_on_status_codes - computed: false, optional: true, required: false
  private _retryOnStatusCodes?: number[]; 
  public get retryOnStatusCodes() {
    return this._retryOnStatusCodes;
  }
  public set retryOnStatusCodes(value: number[] | undefined) {
    this._retryOnStatusCodes = value;
  }
  public resetRetryOnStatusCodes() {
    this._retryOnStatusCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryOnStatusCodesInput() {
    return this._retryOnStatusCodes;
  }

  // session_auth - computed: false, optional: true, required: false
  private _sessionAuth?: boolean | cdktf.IResolvable; 
  public get sessionAuth() {
    return this._sessionAuth;
  }
  public set sessionAuth(value: boolean | cdktf.IResolvable | undefined) {
    this._sessionAuth = value;
  }
  public resetSessionAuth() {
    this._sessionAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAuthInput() {
    return this._sessionAuth;
  }

  // tolerate_partial_success - computed: false, optional: true, required: false
  private _toleratePartialSuccess?: boolean | cdktf.IResolvable; 
  public get toleratePartialSuccess() {
    return this._toleratePartialSuccess;
  }
  public set toleratePartialSuccess(value: boolean | cdktf.IResolvable | undefined) {
    this._toleratePartialSuccess = value;
  }
  public resetToleratePartialSuccess() {
    this._toleratePartialSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toleratePartialSuccessInput() {
    return this._toleratePartialSuccess;
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

  // vmc_auth_host - computed: false, optional: true, required: false
  private _vmcAuthHost?: string; 
  public get vmcAuthHost() {
    return this._vmcAuthHost;
  }
  public set vmcAuthHost(value: string | undefined) {
    this._vmcAuthHost = value;
  }
  public resetVmcAuthHost() {
    this._vmcAuthHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmcAuthHostInput() {
    return this._vmcAuthHost;
  }

  // vmc_auth_mode - computed: false, optional: true, required: false
  private _vmcAuthMode?: string; 
  public get vmcAuthMode() {
    return this._vmcAuthMode;
  }
  public set vmcAuthMode(value: string | undefined) {
    this._vmcAuthMode = value;
  }
  public resetVmcAuthMode() {
    this._vmcAuthMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmcAuthModeInput() {
    return this._vmcAuthMode;
  }

  // vmc_client_id - computed: false, optional: true, required: false
  private _vmcClientId?: string; 
  public get vmcClientId() {
    return this._vmcClientId;
  }
  public set vmcClientId(value: string | undefined) {
    this._vmcClientId = value;
  }
  public resetVmcClientId() {
    this._vmcClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmcClientIdInput() {
    return this._vmcClientId;
  }

  // vmc_client_secret - computed: false, optional: true, required: false
  private _vmcClientSecret?: string; 
  public get vmcClientSecret() {
    return this._vmcClientSecret;
  }
  public set vmcClientSecret(value: string | undefined) {
    this._vmcClientSecret = value;
  }
  public resetVmcClientSecret() {
    this._vmcClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmcClientSecretInput() {
    return this._vmcClientSecret;
  }

  // vmc_token - computed: false, optional: true, required: false
  private _vmcToken?: string; 
  public get vmcToken() {
    return this._vmcToken;
  }
  public set vmcToken(value: string | undefined) {
    this._vmcToken = value;
  }
  public resetVmcToken() {
    this._vmcToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmcTokenInput() {
    return this._vmcToken;
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
      allow_unverified_ssl: cdktf.booleanToTerraform(this._allowUnverifiedSsl),
      ca: cdktf.stringToTerraform(this._ca),
      ca_file: cdktf.stringToTerraform(this._caFile),
      client_auth_cert: cdktf.stringToTerraform(this._clientAuthCert),
      client_auth_cert_file: cdktf.stringToTerraform(this._clientAuthCertFile),
      client_auth_key: cdktf.stringToTerraform(this._clientAuthKey),
      client_auth_key_file: cdktf.stringToTerraform(this._clientAuthKeyFile),
      enforcement_point: cdktf.stringToTerraform(this._enforcementPoint),
      global_manager: cdktf.booleanToTerraform(this._globalManager),
      host: cdktf.stringToTerraform(this._host),
      license_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._licenseKeys),
      max_retries: cdktf.numberToTerraform(this._maxRetries),
      on_demand_connection: cdktf.booleanToTerraform(this._onDemandConnection),
      password: cdktf.stringToTerraform(this._password),
      remote_auth: cdktf.booleanToTerraform(this._remoteAuth),
      retry_max_delay: cdktf.numberToTerraform(this._retryMaxDelay),
      retry_min_delay: cdktf.numberToTerraform(this._retryMinDelay),
      retry_on_status_codes: cdktf.listMapper(cdktf.numberToTerraform, false)(this._retryOnStatusCodes),
      session_auth: cdktf.booleanToTerraform(this._sessionAuth),
      tolerate_partial_success: cdktf.booleanToTerraform(this._toleratePartialSuccess),
      username: cdktf.stringToTerraform(this._username),
      vmc_auth_host: cdktf.stringToTerraform(this._vmcAuthHost),
      vmc_auth_mode: cdktf.stringToTerraform(this._vmcAuthMode),
      vmc_client_id: cdktf.stringToTerraform(this._vmcClientId),
      vmc_client_secret: cdktf.stringToTerraform(this._vmcClientSecret),
      vmc_token: cdktf.stringToTerraform(this._vmcToken),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_unverified_ssl: {
        value: cdktf.booleanToHclTerraform(this._allowUnverifiedSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ca: {
        value: cdktf.stringToHclTerraform(this._ca),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_file: {
        value: cdktf.stringToHclTerraform(this._caFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_auth_cert: {
        value: cdktf.stringToHclTerraform(this._clientAuthCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_auth_cert_file: {
        value: cdktf.stringToHclTerraform(this._clientAuthCertFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_auth_key: {
        value: cdktf.stringToHclTerraform(this._clientAuthKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_auth_key_file: {
        value: cdktf.stringToHclTerraform(this._clientAuthKeyFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enforcement_point: {
        value: cdktf.stringToHclTerraform(this._enforcementPoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      global_manager: {
        value: cdktf.booleanToHclTerraform(this._globalManager),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._licenseKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      max_retries: {
        value: cdktf.numberToHclTerraform(this._maxRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      on_demand_connection: {
        value: cdktf.booleanToHclTerraform(this._onDemandConnection),
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
      remote_auth: {
        value: cdktf.booleanToHclTerraform(this._remoteAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      retry_max_delay: {
        value: cdktf.numberToHclTerraform(this._retryMaxDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry_min_delay: {
        value: cdktf.numberToHclTerraform(this._retryMinDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry_on_status_codes: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._retryOnStatusCodes),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      session_auth: {
        value: cdktf.booleanToHclTerraform(this._sessionAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tolerate_partial_success: {
        value: cdktf.booleanToHclTerraform(this._toleratePartialSuccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vmc_auth_host: {
        value: cdktf.stringToHclTerraform(this._vmcAuthHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vmc_auth_mode: {
        value: cdktf.stringToHclTerraform(this._vmcAuthMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vmc_client_id: {
        value: cdktf.stringToHclTerraform(this._vmcClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vmc_client_secret: {
        value: cdktf.stringToHclTerraform(this._vmcClientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vmc_token: {
        value: cdktf.stringToHclTerraform(this._vmcToken),
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
