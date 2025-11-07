// https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface B1DdiProviderConfig {
  /**
  * API token for authentication against the Infoblox BloxOne DDI platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs#api_key B1DdiProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * The base path is to indicate the API version and the product name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs#base_path B1DdiProvider#base_path}
  */
  readonly basePath?: string;
  /**
  * BloxOne DDI host URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs#host B1DdiProvider#host}
  */
  readonly host: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs#alias B1DdiProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs b1ddi}
*/
export class B1DdiProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "b1ddi";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a B1DdiProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the B1DdiProvider to import
  * @param importFromId The id of the existing B1DdiProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the B1DdiProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "b1ddi", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs b1ddi} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options B1DdiProviderConfig
  */
  public constructor(scope: Construct, id: string, config: B1DdiProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'b1ddi',
      terraformGeneratorMetadata: {
        providerName: 'b1ddi',
        providerVersion: '0.1.5'
      },
      terraformProviderSource: 'infobloxopen/b1ddi'
    });
    this._apiKey = config.apiKey;
    this._basePath = config.basePath;
    this._host = config.host;
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

  // base_path - computed: false, optional: true, required: false
  private _basePath?: string; 
  public get basePath() {
    return this._basePath;
  }
  public set basePath(value: string | undefined) {
    this._basePath = value;
  }
  public resetBasePath() {
    this._basePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathInput() {
    return this._basePath;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this._host;
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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
      base_path: cdktf.stringToTerraform(this._basePath),
      host: cdktf.stringToTerraform(this._host),
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
      base_path: {
        value: cdktf.stringToHclTerraform(this._basePath),
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
