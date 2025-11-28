// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PanosProviderConfig {
  /**
  * Additional HTTP headers to send with API calls Environment variable: `PANOS_HEADERS`. JSON config file variable: `additional_headers`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs#additional_headers PanosProvider#additional_headers}
  */
  readonly additionalHeaders?: { [key: string]: string };
  /**
  * The API key for PAN-OS. Either specify this or give both username and password. Environment variable: `PANOS_API_KEY`. JSON config file variable: `api_key`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs#api_key PanosProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * Send the API key in the request body instead of using the authentication header. Environment variable: `PANOS_API_KEY_IN_REQUEST`. JSON config file variable: `api_key_in_request`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs#api_key_in_request PanosProvider#api_key_in_request}
  */
  readonly apiKeyInRequest?: boolean | cdktf.IResolvable;
  /**
  * Filesystem path to a JSON config file that specifies the provider's params. JSON config file variable: `auth_file`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs#auth_file PanosProvider#auth_file}
  */
  readonly authFile?: string;
  /**
  * (Local inspection mode) The PAN-OS config file to load read in using `file()` JSON config file variable: `config_file`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs#config_file PanosProvider#config_file}
  */
  readonly configFile?: string;
  /**
  * The hostname or IP address of the PAN-OS instance (NGFW or Panorama). Environment variable: `PANOS_HOSTNAME`. JSON config file variable: `hostname`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs#hostname PanosProvider#hostname}
  */
  readonly hostname?: string;
  /**
  * Number of operations to send as part of a single MultiConfig update Default: `500`. Environment variable: `PANOS_MULTI_CONFIG_BATCH_SIZE`. JSON config file variable: `multi_config_batch_size`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs#multi_config_batch_size PanosProvider#multi_config_batch_size}
  */
  readonly multiConfigBatchSize?: number;
  /**
  * (Local inspection mode) The version of PAN-OS that exported the config file. This is only used if the root 'config' block does not contain the 'detail-version' attribute. Example: `10.2.3`. JSON config file variable: `panos_version`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs#panos_version PanosProvider#panos_version}
  */
  readonly panosVersion?: string;
  /**
  * The password.  This is required if the api_key is not configured. Environment variable: `PANOS_PASSWORD`. JSON config file variable: `password`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs#password PanosProvider#password}
  */
  readonly password?: string;
  /**
  * If the port is non-standard for the protocol, the port number to use. Environment variable: `PANOS_PORT`. JSON config file variable: `port`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs#port PanosProvider#port}
  */
  readonly port?: number;
  /**
  * The protocol (https or http). Default: `https`. Environment variable: `PANOS_PROTOCOL`. JSON config file variable: `protocol`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs#protocol PanosProvider#protocol}
  */
  readonly protocol?: string;
  /**
  * Log categories to configure for the PAN-OS SDK library Environment variable: `PANOS_LOG_CATEGORIES`. JSON config file variable: `sdk_log_categories`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs#sdk_log_categories PanosProvider#sdk_log_categories}
  */
  readonly sdkLogCategories?: string;
  /**
  * SDK logging Level for categories Default: `INFO`. Environment variable: `PANOS_LOG_LEVEL`. JSON config file variable: `sdk_log_level`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs#sdk_log_level PanosProvider#sdk_log_level}
  */
  readonly sdkLogLevel?: string;
  /**
  * (For https protocol) Skip verifying the HTTPS certificate. Environment variable: `PANOS_SKIP_VERIFY_CERTIFICATE`. JSON config file variable: `skip_verify_certificate`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs#skip_verify_certificate PanosProvider#skip_verify_certificate}
  */
  readonly skipVerifyCertificate?: boolean | cdktf.IResolvable;
  /**
  * Target setting (NGFW serial number). Environment variable: `PANOS_TARGET`. JSON config file variable: `target`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs#target PanosProvider#target}
  */
  readonly target?: string;
  /**
  * The username.  This is required if api_key is not configured. Environment variable: `PANOS_USERNAME`. JSON config file variable: `username`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs#username PanosProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs#alias PanosProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs panos}
*/
export class PanosProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PanosProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PanosProvider to import
  * @param importFromId The id of the existing PanosProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PanosProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs panos} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PanosProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PanosProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'panos',
      terraformGeneratorMetadata: {
        providerName: 'panos',
        providerVersion: '2.0.7',
        providerVersionConstraint: '2.0.7'
      },
      terraformProviderSource: 'PaloAltoNetworks/panos'
    });
    this._additionalHeaders = config.additionalHeaders;
    this._apiKey = config.apiKey;
    this._apiKeyInRequest = config.apiKeyInRequest;
    this._authFile = config.authFile;
    this._configFile = config.configFile;
    this._hostname = config.hostname;
    this._multiConfigBatchSize = config.multiConfigBatchSize;
    this._panosVersion = config.panosVersion;
    this._password = config.password;
    this._port = config.port;
    this._protocol = config.protocol;
    this._sdkLogCategories = config.sdkLogCategories;
    this._sdkLogLevel = config.sdkLogLevel;
    this._skipVerifyCertificate = config.skipVerifyCertificate;
    this._target = config.target;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_headers - computed: false, optional: true, required: false
  private _additionalHeaders?: { [key: string]: string }; 
  public get additionalHeaders() {
    return this._additionalHeaders;
  }
  public set additionalHeaders(value: { [key: string]: string } | undefined) {
    this._additionalHeaders = value;
  }
  public resetAdditionalHeaders() {
    this._additionalHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalHeadersInput() {
    return this._additionalHeaders;
  }

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

  // api_key_in_request - computed: false, optional: true, required: false
  private _apiKeyInRequest?: boolean | cdktf.IResolvable; 
  public get apiKeyInRequest() {
    return this._apiKeyInRequest;
  }
  public set apiKeyInRequest(value: boolean | cdktf.IResolvable | undefined) {
    this._apiKeyInRequest = value;
  }
  public resetApiKeyInRequest() {
    this._apiKeyInRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInRequestInput() {
    return this._apiKeyInRequest;
  }

  // auth_file - computed: false, optional: true, required: false
  private _authFile?: string; 
  public get authFile() {
    return this._authFile;
  }
  public set authFile(value: string | undefined) {
    this._authFile = value;
  }
  public resetAuthFile() {
    this._authFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authFileInput() {
    return this._authFile;
  }

  // config_file - computed: false, optional: true, required: false
  private _configFile?: string; 
  public get configFile() {
    return this._configFile;
  }
  public set configFile(value: string | undefined) {
    this._configFile = value;
  }
  public resetConfigFile() {
    this._configFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configFileInput() {
    return this._configFile;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this._hostname;
  }
  public set hostname(value: string | undefined) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // multi_config_batch_size - computed: false, optional: true, required: false
  private _multiConfigBatchSize?: number; 
  public get multiConfigBatchSize() {
    return this._multiConfigBatchSize;
  }
  public set multiConfigBatchSize(value: number | undefined) {
    this._multiConfigBatchSize = value;
  }
  public resetMultiConfigBatchSize() {
    this._multiConfigBatchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiConfigBatchSizeInput() {
    return this._multiConfigBatchSize;
  }

  // panos_version - computed: false, optional: true, required: false
  private _panosVersion?: string; 
  public get panosVersion() {
    return this._panosVersion;
  }
  public set panosVersion(value: string | undefined) {
    this._panosVersion = value;
  }
  public resetPanosVersion() {
    this._panosVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panosVersionInput() {
    return this._panosVersion;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this._protocol;
  }
  public set protocol(value: string | undefined) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // sdk_log_categories - computed: false, optional: true, required: false
  private _sdkLogCategories?: string; 
  public get sdkLogCategories() {
    return this._sdkLogCategories;
  }
  public set sdkLogCategories(value: string | undefined) {
    this._sdkLogCategories = value;
  }
  public resetSdkLogCategories() {
    this._sdkLogCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdkLogCategoriesInput() {
    return this._sdkLogCategories;
  }

  // sdk_log_level - computed: false, optional: true, required: false
  private _sdkLogLevel?: string; 
  public get sdkLogLevel() {
    return this._sdkLogLevel;
  }
  public set sdkLogLevel(value: string | undefined) {
    this._sdkLogLevel = value;
  }
  public resetSdkLogLevel() {
    this._sdkLogLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdkLogLevelInput() {
    return this._sdkLogLevel;
  }

  // skip_verify_certificate - computed: false, optional: true, required: false
  private _skipVerifyCertificate?: boolean | cdktf.IResolvable; 
  public get skipVerifyCertificate() {
    return this._skipVerifyCertificate;
  }
  public set skipVerifyCertificate(value: boolean | cdktf.IResolvable | undefined) {
    this._skipVerifyCertificate = value;
  }
  public resetSkipVerifyCertificate() {
    this._skipVerifyCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipVerifyCertificateInput() {
    return this._skipVerifyCertificate;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this._target;
  }
  public set target(value: string | undefined) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
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
      additional_headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._additionalHeaders),
      api_key: cdktf.stringToTerraform(this._apiKey),
      api_key_in_request: cdktf.booleanToTerraform(this._apiKeyInRequest),
      auth_file: cdktf.stringToTerraform(this._authFile),
      config_file: cdktf.stringToTerraform(this._configFile),
      hostname: cdktf.stringToTerraform(this._hostname),
      multi_config_batch_size: cdktf.numberToTerraform(this._multiConfigBatchSize),
      panos_version: cdktf.stringToTerraform(this._panosVersion),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      protocol: cdktf.stringToTerraform(this._protocol),
      sdk_log_categories: cdktf.stringToTerraform(this._sdkLogCategories),
      sdk_log_level: cdktf.stringToTerraform(this._sdkLogLevel),
      skip_verify_certificate: cdktf.booleanToTerraform(this._skipVerifyCertificate),
      target: cdktf.stringToTerraform(this._target),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._additionalHeaders),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_key_in_request: {
        value: cdktf.booleanToHclTerraform(this._apiKeyInRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auth_file: {
        value: cdktf.stringToHclTerraform(this._authFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_file: {
        value: cdktf.stringToHclTerraform(this._configFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi_config_batch_size: {
        value: cdktf.numberToHclTerraform(this._multiConfigBatchSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      panos_version: {
        value: cdktf.stringToHclTerraform(this._panosVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdk_log_categories: {
        value: cdktf.stringToHclTerraform(this._sdkLogCategories),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdk_log_level: {
        value: cdktf.stringToHclTerraform(this._sdkLogLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_verify_certificate: {
        value: cdktf.booleanToHclTerraform(this._skipVerifyCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      target: {
        value: cdktf.stringToHclTerraform(this._target),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
