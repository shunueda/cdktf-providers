// https://registry.terraform.io/providers/harness/harness/0.39.3/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HarnessProviderConfig {
  /**
  * The Harness account id. This can also be set using the `HARNESS_ACCOUNT_ID` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs#account_id HarnessProvider#account_id}
  */
  readonly accountId?: string;
  /**
  * The Harness API key. This can also be set using the `HARNESS_API_KEY` environment variable. For more information to create an API key in FirstGen, see https://docs.harness.io/article/smloyragsm-api-keys#create_an_api_key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs#api_key HarnessProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * The URL of the Harness API endpoint. The default is `https://app.harness.io/gateway`. This can also be set using the `HARNESS_ENDPOINT` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs#endpoint HarnessProvider#endpoint}
  */
  readonly endpoint?: string;
  /**
  * The API key for the Harness next gen platform. This can also be set using the `HARNESS_PLATFORM_API_KEY` environment variable. For more information to create an API key in NextGen, see https://docs.harness.io/article/tdoad7xrh9-add-and-manage-api-keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs#platform_api_key HarnessProvider#platform_api_key}
  */
  readonly platformApiKey?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs#alias HarnessProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs harness}
*/
export class HarnessProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HarnessProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HarnessProvider to import
  * @param importFromId The id of the existing HarnessProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HarnessProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs harness} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HarnessProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: HarnessProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'harness',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.3',
        providerVersionConstraint: '0.39.3'
      },
      terraformProviderSource: 'harness/harness'
    });
    this._accountId = config.accountId;
    this._apiKey = config.apiKey;
    this._endpoint = config.endpoint;
    this._platformApiKey = config.platformApiKey;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this._accountId;
  }
  public set accountId(value: string | undefined) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
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

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this._endpoint;
  }
  public set endpoint(value: string | undefined) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // platform_api_key - computed: false, optional: true, required: false
  private _platformApiKey?: string; 
  public get platformApiKey() {
    return this._platformApiKey;
  }
  public set platformApiKey(value: string | undefined) {
    this._platformApiKey = value;
  }
  public resetPlatformApiKey() {
    this._platformApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformApiKeyInput() {
    return this._platformApiKey;
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
      account_id: cdktf.stringToTerraform(this._accountId),
      api_key: cdktf.stringToTerraform(this._apiKey),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      platform_api_key: cdktf.stringToTerraform(this._platformApiKey),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform_api_key: {
        value: cdktf.stringToHclTerraform(this._platformApiKey),
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
