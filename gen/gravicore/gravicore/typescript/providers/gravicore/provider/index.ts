// https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GravicoreProviderConfig {
  /**
  * The region where AWS operations will take place.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs#region GravicoreProvider#region}
  */
  readonly region: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs#alias GravicoreProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs gravicore}
*/
export class GravicoreProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gravicore";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GravicoreProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GravicoreProvider to import
  * @param importFromId The id of the existing GravicoreProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GravicoreProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gravicore", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs gravicore} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GravicoreProviderConfig
  */
  public constructor(scope: Construct, id: string, config: GravicoreProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'gravicore',
      terraformGeneratorMetadata: {
        providerName: 'gravicore',
        providerVersion: '1.0.8',
        providerVersionConstraint: '1.0.8'
      },
      terraformProviderSource: 'gravicore/gravicore'
    });
    this._region = config.region;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this._region;
  }
  public set region(value: string | undefined) {
    this._region = value;
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
      region: cdktf.stringToTerraform(this._region),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
