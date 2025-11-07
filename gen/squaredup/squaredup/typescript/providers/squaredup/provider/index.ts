// https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SquaredupProviderConfig {
  /**
  * API Key for SquaredUp API. May also be set via the SQUAREDUP_API_KEY environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs#api_key SquaredupProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * Region of your SquaredUp instance. May also be set via the SQUAREDUP_REGION environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs#region SquaredupProvider#region}
  */
  readonly region?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs#alias SquaredupProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs squaredup}
*/
export class SquaredupProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "squaredup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SquaredupProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SquaredupProvider to import
  * @param importFromId The id of the existing SquaredupProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SquaredupProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "squaredup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs squaredup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SquaredupProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SquaredupProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'squaredup',
      terraformGeneratorMetadata: {
        providerName: 'squaredup',
        providerVersion: '1.5.0'
      },
      terraformProviderSource: 'squaredup/squaredup'
    });
    this._apiKey = config.apiKey;
    this._region = config.region;
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

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this._region;
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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
      region: cdktf.stringToTerraform(this._region),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
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
