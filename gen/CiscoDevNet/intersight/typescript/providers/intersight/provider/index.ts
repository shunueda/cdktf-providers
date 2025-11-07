// https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntersightProviderConfig {
  /**
  * API Key Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs#apikey IntersightProvider#apikey}
  */
  readonly apikey: string;
  /**
  * Endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs#endpoint IntersightProvider#endpoint}
  */
  readonly endpoint: string;
  /**
  * Secret Key String or File Path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs#secretkey IntersightProvider#secretkey}
  */
  readonly secretkey: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs#alias IntersightProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs intersight}
*/
export class IntersightProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "intersight";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntersightProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntersightProvider to import
  * @param importFromId The id of the existing IntersightProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntersightProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "intersight", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs intersight} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntersightProviderConfig
  */
  public constructor(scope: Construct, id: string, config: IntersightProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'intersight',
      terraformGeneratorMetadata: {
        providerName: 'intersight',
        providerVersion: '1.0.72'
      },
      terraformProviderSource: 'CiscoDevNet/intersight'
    });
    this._apikey = config.apikey;
    this._endpoint = config.endpoint;
    this._secretkey = config.secretkey;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apikey - computed: false, optional: false, required: true
  private _apikey?: string; 
  public get apikey() {
    return this._apikey;
  }
  public set apikey(value: string | undefined) {
    this._apikey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apikeyInput() {
    return this._apikey;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this._endpoint;
  }
  public set endpoint(value: string | undefined) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // secretkey - computed: false, optional: false, required: true
  private _secretkey?: string; 
  public get secretkey() {
    return this._secretkey;
  }
  public set secretkey(value: string | undefined) {
    this._secretkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretkeyInput() {
    return this._secretkey;
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
      apikey: cdktf.stringToTerraform(this._apikey),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      secretkey: cdktf.stringToTerraform(this._secretkey),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apikey: {
        value: cdktf.stringToHclTerraform(this._apikey),
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
      secretkey: {
        value: cdktf.stringToHclTerraform(this._secretkey),
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
