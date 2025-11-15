// https://registry.terraform.io/providers/strongdm/sdm/15.31.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SdmProviderConfig {
  /**
  * A GUID identifying the API key used to authenticate with the StrongDM API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.31.0/docs#api_access_key SdmProvider#api_access_key}
  */
  readonly apiAccessKey?: string;
  /**
  * A base64 encoded secret key used to authenticate with the StrongDM API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.31.0/docs#api_secret_key SdmProvider#api_secret_key}
  */
  readonly apiSecretKey?: string;
  /**
  * The host and port of the StrongDM API endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.31.0/docs#host SdmProvider#host}
  */
  readonly host?: string;
  /**
  * Whether experienced rate limits should cause the client to sleep instead of erroring out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.31.0/docs#retry_rate_limit_errors SdmProvider#retry_rate_limit_errors}
  */
  readonly retryRateLimitErrors?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.31.0/docs#alias SdmProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/strongdm/sdm/15.31.0/docs sdm}
*/
export class SdmProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SdmProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SdmProvider to import
  * @param importFromId The id of the existing SdmProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/strongdm/sdm/15.31.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SdmProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/strongdm/sdm/15.31.0/docs sdm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SdmProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SdmProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sdm',
      terraformGeneratorMetadata: {
        providerName: 'sdm',
        providerVersion: '15.31.0',
        providerVersionConstraint: '15.31.0'
      },
      terraformProviderSource: 'strongdm/sdm'
    });
    this._apiAccessKey = config.apiAccessKey;
    this._apiSecretKey = config.apiSecretKey;
    this._host = config.host;
    this._retryRateLimitErrors = config.retryRateLimitErrors;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_access_key - computed: false, optional: true, required: false
  private _apiAccessKey?: string; 
  public get apiAccessKey() {
    return this._apiAccessKey;
  }
  public set apiAccessKey(value: string | undefined) {
    this._apiAccessKey = value;
  }
  public resetApiAccessKey() {
    this._apiAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiAccessKeyInput() {
    return this._apiAccessKey;
  }

  // api_secret_key - computed: false, optional: true, required: false
  private _apiSecretKey?: string; 
  public get apiSecretKey() {
    return this._apiSecretKey;
  }
  public set apiSecretKey(value: string | undefined) {
    this._apiSecretKey = value;
  }
  public resetApiSecretKey() {
    this._apiSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSecretKeyInput() {
    return this._apiSecretKey;
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

  // retry_rate_limit_errors - computed: false, optional: true, required: false
  private _retryRateLimitErrors?: boolean | cdktf.IResolvable; 
  public get retryRateLimitErrors() {
    return this._retryRateLimitErrors;
  }
  public set retryRateLimitErrors(value: boolean | cdktf.IResolvable | undefined) {
    this._retryRateLimitErrors = value;
  }
  public resetRetryRateLimitErrors() {
    this._retryRateLimitErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryRateLimitErrorsInput() {
    return this._retryRateLimitErrors;
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
      api_access_key: cdktf.stringToTerraform(this._apiAccessKey),
      api_secret_key: cdktf.stringToTerraform(this._apiSecretKey),
      host: cdktf.stringToTerraform(this._host),
      retry_rate_limit_errors: cdktf.booleanToTerraform(this._retryRateLimitErrors),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_access_key: {
        value: cdktf.stringToHclTerraform(this._apiAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_secret_key: {
        value: cdktf.stringToHclTerraform(this._apiSecretKey),
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
      retry_rate_limit_errors: {
        value: cdktf.booleanToHclTerraform(this._retryRateLimitErrors),
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
