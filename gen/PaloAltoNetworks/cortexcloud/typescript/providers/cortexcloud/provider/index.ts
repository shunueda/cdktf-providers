// https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CortexcloudProviderConfig {
  /**
  * Your Cortex Cloud API key. 
  * 
  * 	Create a new API key in the Cortex Cloud console by navigating to `Settings > Configurations`, selecting `API Keys` under the `Integrations` section, and clicking the `New Key` button. 
  * 
  * 	Can also be configured using the `CORTEXCLOUD_API_KEY` environment variable.
  * 
  * >[!WARNING]
  * >Once you reach the screen displaying your new API key, you will not be able to view this screen again after closing the window. Ensure that you copy the key value before closing the window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs#api_key CortexcloudProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * Your Cortex Cloud API key. 
  * 
  * 	For existing API keys, this can be retrieved from the Cortex Cloud console by navigating to `Settings > Configurations`, selecting `API Keys` under the `Integrations` section, and finding the row associated with your API key. The key ID value will be in the `ID` column. 
  * 
  * 	Can also be configured using the `CORTEXCLOUD_API_KEY_ID` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs#api_key_id CortexcloudProvider#api_key_id}
  */
  readonly apiKeyId?: number;
  /**
  * The type of your provided Cortex Cloud API key. 
  * 
  * 	Advanced API keys are hashed using a nonce, a random string, and a timestamp to prevent replay attacks. 
  * 
  * 	Possible values are: `standard`, `advanced`
  * 
  * 	Defaults to `advanced`. 
  * 
  * 	Can also be configured using the `CORTEXCLOUD_API_KEY_TYPE` environment variable.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs#api_key_type CortexcloudProvider#api_key_type}
  */
  readonly apiKeyType?: string;
  /**
  * The API URL of your Cortex Cloud tenant. 
  * 
  * 	This can be retrieved from the Cortex Cloud console by navigating to `Settings > Configurations`, selecting `API Keys` under the `Integrations` section, and clicking the `Copy API URL` button. 
  * 
  * 	Can also be configured using the `CORTEXCLOUD_API_URL` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs#api_url CortexcloudProvider#api_url}
  */
  readonly apiUrl?: string;
  /**
  * The path to a JSON file containing the provider configuration values.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs#config_file CortexcloudProvider#config_file}
  */
  readonly configFile?: string;
  /**
  * The directory where text files containing the stack dump (also known as a stack trace) will be written whenever the provider encounters a runtime error or panics.
  * 
  * 	If an unhandled runtime error occurs during provider execution, a diagnostic message will be displayed that includes the path to a .txt file containing the full crash stack. We kindly encourage users to report any such occurances to the Cortex Cloud Terraform provider development team and include this file.
  * 
  * 	Defaults to the value of the `TMPDIR` environment variable on Unix systems (or `/tmp` if `TMPDIR` is empty/not configured).
  * 
  * 	On Windows systems, the default value will be interpreted as the first non-empty value in the following set of environment variables, in order of evaluation: `%TMP%`, `%TEMP%`, `%USERPROFILE%`. If none of these variables are set, the value will be set to the Windows directory (`C:\Users\<YourUsername>\AppData\Local\Temp`).
  * 
  * 	Can also be configured using the `CORTEXCLOUD_CRASH_STACK_DIR` environment variable.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs#crash_stack_dir CortexcloudProvider#crash_stack_dir}
  */
  readonly crashStackDir?: string;
  /**
  * The number of times the provider will retry a request to the Cortex Cloud API if it recieves a retryable HTTP response code (401, 429, 502, 503, or 504).
  * 
  * 	Defaults to `3`.
  * 
  * 	Can also be configured using the `CORTEXCLOUD_REQUEST_MAX_RETRIES` environment variable.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs#request_max_retries CortexcloudProvider#request_max_retries}
  */
  readonly requestMaxRetries?: number;
  /**
  * The maximum amount of time (in seconds) the provider will wait before retrying a failed request to the Cortex Cloud API. 
  * 
  * 	The delay between retries is calculated using an exponential backoff to give the system enough time to recover, along with jitter (±25% randomization) to prevent the thundering herd problem. The final calculated amount of seconds will be capped at this value.
  * 
  * 	Defaults to `60`.
  * 
  * 	Can also be configured using the `CORTEXCLOUD_REQUEST_MAX_RETRY_DELAY` environment variable.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs#request_max_retry_delay CortexcloudProvider#request_max_retry_delay}
  */
  readonly requestMaxRetryDelay?: number;
  /**
  * The amount of time (in seconds) the provider will wait for a response to for a given request to the Cortex Cloud API before timing out. 
  * 
  * 	Defaults to `30`. 
  * 
  * 	Can also be configured using the `CORTEXCLOUD_REQUEST_TIMEOUT` environment variable.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs#request_timeout CortexcloudProvider#request_timeout}
  */
  readonly requestTimeout?: number;
  /**
  * The log level for the Cortex Cloud Go SDK. 
  * 
  * 	All communications between the provider and the Cortex Cloud API are handled by the Cortex Cloud Go SDK. Logs from the SDK will be included in the logging output of the provider. 
  * 
  * 	Possible values are: `info`, `warn`, `error`, `debug` 
  * 
  * 	Defaults to `info`. 
  * 
  * 	Can also be configured using the `CORTEXCLOUD_SDK_LOG_LEVEL` environment variable.
  * 
  * >[!NOTE]
  * >SDK logs will only be visible in the provider logs if the [Terraform log level](https://developer.hashicorp.com/terraform/internals/debugging) is set to `DEBUG` or `TRACE`.
  * 
  * >[!WARNING]
  * >Setting this value to `debug` will cause the SDK to log all API requests and responses, which include sensitive values such as your API key.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs#sdk_log_level CortexcloudProvider#sdk_log_level}
  */
  readonly sdkLogLevel?: string;
  /**
  * Toggles SSL certificate verification for requests against the Cortex Cloud API.
  * 
  * 	Defaults to `false`. 
  * 
  * 	Can also be configured using the `CORTEXCLOUD_SKIP_SSL_VERIFY` environment variable.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs#skip_ssl_verify CortexcloudProvider#skip_ssl_verify}
  */
  readonly skipSslVerify?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs#alias CortexcloudProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs cortexcloud}
*/
export class CortexcloudProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cortexcloud";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CortexcloudProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CortexcloudProvider to import
  * @param importFromId The id of the existing CortexcloudProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CortexcloudProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cortexcloud", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs cortexcloud} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CortexcloudProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CortexcloudProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cortexcloud',
      terraformGeneratorMetadata: {
        providerName: 'cortexcloud',
        providerVersion: '1.0.2',
        providerVersionConstraint: '1.0.2'
      },
      terraformProviderSource: 'PaloAltoNetworks/cortexcloud'
    });
    this._apiKey = config.apiKey;
    this._apiKeyId = config.apiKeyId;
    this._apiKeyType = config.apiKeyType;
    this._apiUrl = config.apiUrl;
    this._configFile = config.configFile;
    this._crashStackDir = config.crashStackDir;
    this._requestMaxRetries = config.requestMaxRetries;
    this._requestMaxRetryDelay = config.requestMaxRetryDelay;
    this._requestTimeout = config.requestTimeout;
    this._sdkLogLevel = config.sdkLogLevel;
    this._skipSslVerify = config.skipSslVerify;
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

  // api_key_id - computed: false, optional: true, required: false
  private _apiKeyId?: number; 
  public get apiKeyId() {
    return this._apiKeyId;
  }
  public set apiKeyId(value: number | undefined) {
    this._apiKeyId = value;
  }
  public resetApiKeyId() {
    this._apiKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyIdInput() {
    return this._apiKeyId;
  }

  // api_key_type - computed: false, optional: true, required: false
  private _apiKeyType?: string; 
  public get apiKeyType() {
    return this._apiKeyType;
  }
  public set apiKeyType(value: string | undefined) {
    this._apiKeyType = value;
  }
  public resetApiKeyType() {
    this._apiKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyTypeInput() {
    return this._apiKeyType;
  }

  // api_url - computed: false, optional: true, required: false
  private _apiUrl?: string; 
  public get apiUrl() {
    return this._apiUrl;
  }
  public set apiUrl(value: string | undefined) {
    this._apiUrl = value;
  }
  public resetApiUrl() {
    this._apiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlInput() {
    return this._apiUrl;
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

  // crash_stack_dir - computed: false, optional: true, required: false
  private _crashStackDir?: string; 
  public get crashStackDir() {
    return this._crashStackDir;
  }
  public set crashStackDir(value: string | undefined) {
    this._crashStackDir = value;
  }
  public resetCrashStackDir() {
    this._crashStackDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crashStackDirInput() {
    return this._crashStackDir;
  }

  // request_max_retries - computed: false, optional: true, required: false
  private _requestMaxRetries?: number; 
  public get requestMaxRetries() {
    return this._requestMaxRetries;
  }
  public set requestMaxRetries(value: number | undefined) {
    this._requestMaxRetries = value;
  }
  public resetRequestMaxRetries() {
    this._requestMaxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMaxRetriesInput() {
    return this._requestMaxRetries;
  }

  // request_max_retry_delay - computed: false, optional: true, required: false
  private _requestMaxRetryDelay?: number; 
  public get requestMaxRetryDelay() {
    return this._requestMaxRetryDelay;
  }
  public set requestMaxRetryDelay(value: number | undefined) {
    this._requestMaxRetryDelay = value;
  }
  public resetRequestMaxRetryDelay() {
    this._requestMaxRetryDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMaxRetryDelayInput() {
    return this._requestMaxRetryDelay;
  }

  // request_timeout - computed: false, optional: true, required: false
  private _requestTimeout?: number; 
  public get requestTimeout() {
    return this._requestTimeout;
  }
  public set requestTimeout(value: number | undefined) {
    this._requestTimeout = value;
  }
  public resetRequestTimeout() {
    this._requestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInput() {
    return this._requestTimeout;
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

  // skip_ssl_verify - computed: false, optional: true, required: false
  private _skipSslVerify?: boolean | cdktf.IResolvable; 
  public get skipSslVerify() {
    return this._skipSslVerify;
  }
  public set skipSslVerify(value: boolean | cdktf.IResolvable | undefined) {
    this._skipSslVerify = value;
  }
  public resetSkipSslVerify() {
    this._skipSslVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipSslVerifyInput() {
    return this._skipSslVerify;
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
      api_key_id: cdktf.numberToTerraform(this._apiKeyId),
      api_key_type: cdktf.stringToTerraform(this._apiKeyType),
      api_url: cdktf.stringToTerraform(this._apiUrl),
      config_file: cdktf.stringToTerraform(this._configFile),
      crash_stack_dir: cdktf.stringToTerraform(this._crashStackDir),
      request_max_retries: cdktf.numberToTerraform(this._requestMaxRetries),
      request_max_retry_delay: cdktf.numberToTerraform(this._requestMaxRetryDelay),
      request_timeout: cdktf.numberToTerraform(this._requestTimeout),
      sdk_log_level: cdktf.stringToTerraform(this._sdkLogLevel),
      skip_ssl_verify: cdktf.booleanToTerraform(this._skipSslVerify),
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
      api_key_id: {
        value: cdktf.numberToHclTerraform(this._apiKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      api_key_type: {
        value: cdktf.stringToHclTerraform(this._apiKeyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_url: {
        value: cdktf.stringToHclTerraform(this._apiUrl),
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
      crash_stack_dir: {
        value: cdktf.stringToHclTerraform(this._crashStackDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_max_retries: {
        value: cdktf.numberToHclTerraform(this._requestMaxRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      request_max_retry_delay: {
        value: cdktf.numberToHclTerraform(this._requestMaxRetryDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      request_timeout: {
        value: cdktf.numberToHclTerraform(this._requestTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sdk_log_level: {
        value: cdktf.stringToHclTerraform(this._sdkLogLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_ssl_verify: {
        value: cdktf.booleanToHclTerraform(this._skipSslVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
