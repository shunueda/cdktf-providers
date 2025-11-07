// https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpectrocloudProviderConfig {
  /**
  * The Spectro Cloud API key. Can also be set with the `SPECTROCLOUD_APIKEY` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs#api_key SpectrocloudProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * The Spectro Cloud API host url. Can also be set with the `SPECTROCLOUD_HOST` environment variable. Defaults to https://api.spectrocloud.com
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs#host SpectrocloudProvider#host}
  */
  readonly host?: string;
  /**
  * Ignore insecure TLS errors for Spectro Cloud API endpoints. ⚠️ WARNING: Setting this to true disables SSL certificate verification and makes connections vulnerable to man-in-the-middle attacks. Only use this in development/testing environments or when connecting to self-signed certificates in trusted networks. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs#ignore_insecure_tls_error SpectrocloudProvider#ignore_insecure_tls_error}
  */
  readonly ignoreInsecureTlsError?: boolean | cdktf.IResolvable;
  /**
  * The Palette project the provider will target. If no value is provided, the `Default` Palette project is used. The default value is `Default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs#project_name SpectrocloudProvider#project_name}
  */
  readonly projectName?: string;
  /**
  * Number of retry attempts. Can also be set with the `SPECTROCLOUD_RETRY_ATTEMPTS` environment variable. Defaults to 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs#retry_attempts SpectrocloudProvider#retry_attempts}
  */
  readonly retryAttempts?: number;
  /**
  * Enable HTTP request tracing. Can also be set with the `SPECTROCLOUD_TRACE` environment variable. To enable Terraform debug logging, set `TF_LOG=DEBUG`. Visit the Terraform documentation to learn more about Terraform [debugging](https://developer.hashicorp.com/terraform/plugin/log/managing).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs#trace SpectrocloudProvider#trace}
  */
  readonly trace?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs#alias SpectrocloudProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs spectrocloud}
*/
export class SpectrocloudProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spectrocloud";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SpectrocloudProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SpectrocloudProvider to import
  * @param importFromId The id of the existing SpectrocloudProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SpectrocloudProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spectrocloud", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs spectrocloud} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpectrocloudProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SpectrocloudProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'spectrocloud',
      terraformGeneratorMetadata: {
        providerName: 'spectrocloud',
        providerVersion: '0.25.2'
      },
      terraformProviderSource: 'spectrocloud/spectrocloud'
    });
    this._apiKey = config.apiKey;
    this._host = config.host;
    this._ignoreInsecureTlsError = config.ignoreInsecureTlsError;
    this._projectName = config.projectName;
    this._retryAttempts = config.retryAttempts;
    this._trace = config.trace;
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

  // ignore_insecure_tls_error - computed: false, optional: true, required: false
  private _ignoreInsecureTlsError?: boolean | cdktf.IResolvable; 
  public get ignoreInsecureTlsError() {
    return this._ignoreInsecureTlsError;
  }
  public set ignoreInsecureTlsError(value: boolean | cdktf.IResolvable | undefined) {
    this._ignoreInsecureTlsError = value;
  }
  public resetIgnoreInsecureTlsError() {
    this._ignoreInsecureTlsError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreInsecureTlsErrorInput() {
    return this._ignoreInsecureTlsError;
  }

  // project_name - computed: false, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this._projectName;
  }
  public set projectName(value: string | undefined) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // retry_attempts - computed: false, optional: true, required: false
  private _retryAttempts?: number; 
  public get retryAttempts() {
    return this._retryAttempts;
  }
  public set retryAttempts(value: number | undefined) {
    this._retryAttempts = value;
  }
  public resetRetryAttempts() {
    this._retryAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryAttemptsInput() {
    return this._retryAttempts;
  }

  // trace - computed: false, optional: true, required: false
  private _trace?: boolean | cdktf.IResolvable; 
  public get trace() {
    return this._trace;
  }
  public set trace(value: boolean | cdktf.IResolvable | undefined) {
    this._trace = value;
  }
  public resetTrace() {
    this._trace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceInput() {
    return this._trace;
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
      host: cdktf.stringToTerraform(this._host),
      ignore_insecure_tls_error: cdktf.booleanToTerraform(this._ignoreInsecureTlsError),
      project_name: cdktf.stringToTerraform(this._projectName),
      retry_attempts: cdktf.numberToTerraform(this._retryAttempts),
      trace: cdktf.booleanToTerraform(this._trace),
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
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_insecure_tls_error: {
        value: cdktf.booleanToHclTerraform(this._ignoreInsecureTlsError),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry_attempts: {
        value: cdktf.numberToHclTerraform(this._retryAttempts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trace: {
        value: cdktf.booleanToHclTerraform(this._trace),
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
