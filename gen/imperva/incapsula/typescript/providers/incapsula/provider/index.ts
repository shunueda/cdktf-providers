// https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IncapsulaProviderConfig {
  /**
  * The API identifier for API operations. You can retrieve this
  * from the Incapsula management console. Can be set via INCAPSULA_API_ID environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs#api_id IncapsulaProvider#api_id}
  */
  readonly apiId?: string;
  /**
  * The API key for API operations. You can retrieve this
  * from the Incapsula management console. Can be set via INCAPSULA_API_KEY environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs#api_key IncapsulaProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * The base URL for API operations. Used for provider development.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs#base_url IncapsulaProvider#base_url}
  */
  readonly baseUrl?: string;
  /**
  * The base URL (same as v2 but with different subdomain) for API operations. Used for provider development.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs#base_url_api IncapsulaProvider#base_url_api}
  */
  readonly baseUrlApi?: string;
  /**
  * The base URL (revision 2) for API operations. Used for provider development.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs#base_url_rev_2 IncapsulaProvider#base_url_rev_2}
  */
  readonly baseUrlRev2?: string;
  /**
  * The base URL (revision 3) for API operations. Used for provider development.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs#base_url_rev_3 IncapsulaProvider#base_url_rev_3}
  */
  readonly baseUrlRev3?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs#alias IncapsulaProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs incapsula}
*/
export class IncapsulaProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incapsula";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IncapsulaProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IncapsulaProvider to import
  * @param importFromId The id of the existing IncapsulaProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IncapsulaProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incapsula", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs incapsula} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IncapsulaProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IncapsulaProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'incapsula',
      terraformGeneratorMetadata: {
        providerName: 'incapsula',
        providerVersion: '3.35.1'
      },
      terraformProviderSource: 'imperva/incapsula'
    });
    this._apiId = config.apiId;
    this._apiKey = config.apiKey;
    this._baseUrl = config.baseUrl;
    this._baseUrlApi = config.baseUrlApi;
    this._baseUrlRev2 = config.baseUrlRev2;
    this._baseUrlRev3 = config.baseUrlRev3;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_id - computed: false, optional: true, required: false
  private _apiId?: string; 
  public get apiId() {
    return this._apiId;
  }
  public set apiId(value: string | undefined) {
    this._apiId = value;
  }
  public resetApiId() {
    this._apiId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdInput() {
    return this._apiId;
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

  // base_url - computed: false, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this._baseUrl;
  }
  public set baseUrl(value: string | undefined) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // base_url_api - computed: false, optional: true, required: false
  private _baseUrlApi?: string; 
  public get baseUrlApi() {
    return this._baseUrlApi;
  }
  public set baseUrlApi(value: string | undefined) {
    this._baseUrlApi = value;
  }
  public resetBaseUrlApi() {
    this._baseUrlApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlApiInput() {
    return this._baseUrlApi;
  }

  // base_url_rev_2 - computed: false, optional: true, required: false
  private _baseUrlRev2?: string; 
  public get baseUrlRev2() {
    return this._baseUrlRev2;
  }
  public set baseUrlRev2(value: string | undefined) {
    this._baseUrlRev2 = value;
  }
  public resetBaseUrlRev2() {
    this._baseUrlRev2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlRev2Input() {
    return this._baseUrlRev2;
  }

  // base_url_rev_3 - computed: false, optional: true, required: false
  private _baseUrlRev3?: string; 
  public get baseUrlRev3() {
    return this._baseUrlRev3;
  }
  public set baseUrlRev3(value: string | undefined) {
    this._baseUrlRev3 = value;
  }
  public resetBaseUrlRev3() {
    this._baseUrlRev3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlRev3Input() {
    return this._baseUrlRev3;
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
      api_id: cdktf.stringToTerraform(this._apiId),
      api_key: cdktf.stringToTerraform(this._apiKey),
      base_url: cdktf.stringToTerraform(this._baseUrl),
      base_url_api: cdktf.stringToTerraform(this._baseUrlApi),
      base_url_rev_2: cdktf.stringToTerraform(this._baseUrlRev2),
      base_url_rev_3: cdktf.stringToTerraform(this._baseUrlRev3),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_id: {
        value: cdktf.stringToHclTerraform(this._apiId),
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
      base_url: {
        value: cdktf.stringToHclTerraform(this._baseUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base_url_api: {
        value: cdktf.stringToHclTerraform(this._baseUrlApi),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base_url_rev_2: {
        value: cdktf.stringToHclTerraform(this._baseUrlRev2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base_url_rev_3: {
        value: cdktf.stringToHclTerraform(this._baseUrlRev3),
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
