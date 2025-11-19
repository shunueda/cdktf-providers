// https://registry.terraform.io/providers/castai/castai/8.2.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CastaiProviderConfig {
  /**
  * The token used to connect to CAST AI API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs#api_token CastaiProvider#api_token}
  */
  readonly apiToken?: string;
  /**
  * CAST.AI API url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs#api_url CastaiProvider#api_url}
  */
  readonly apiUrl?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs#alias CastaiProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs castai}
*/
export class CastaiProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "castai";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CastaiProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CastaiProvider to import
  * @param importFromId The id of the existing CastaiProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CastaiProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "castai", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs castai} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CastaiProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CastaiProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'castai',
      terraformGeneratorMetadata: {
        providerName: 'castai',
        providerVersion: '8.2.1',
        providerVersionConstraint: '8.2.1'
      },
      terraformProviderSource: 'castai/castai'
    });
    this._apiToken = config.apiToken;
    this._apiUrl = config.apiUrl;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_token - computed: false, optional: true, required: false
  private _apiToken?: string; 
  public get apiToken() {
    return this._apiToken;
  }
  public set apiToken(value: string | undefined) {
    this._apiToken = value;
  }
  public resetApiToken() {
    this._apiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
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
      api_token: cdktf.stringToTerraform(this._apiToken),
      api_url: cdktf.stringToTerraform(this._apiUrl),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_token: {
        value: cdktf.stringToHclTerraform(this._apiToken),
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
