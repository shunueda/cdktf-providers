// https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/data-sources/scope
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSecureworkloadScopeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/data-sources/scope#exact_name DataSecureworkloadScope#exact_name}
  */
  readonly exactName: string;
  /**
  * Short name of the scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/data-sources/scope#exact_short_name DataSecureworkloadScope#exact_short_name}
  */
  readonly exactShortName?: string;
  /**
  * The VRF ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/data-sources/scope#vrf_id DataSecureworkloadScope#vrf_id}
  */
  readonly vrfId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/data-sources/scope secureworkload_scope}
*/
export class DataSecureworkloadScope extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "secureworkload_scope";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSecureworkloadScope resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSecureworkloadScope to import
  * @param importFromId The id of the existing DataSecureworkloadScope that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/data-sources/scope#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSecureworkloadScope to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "secureworkload_scope", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/data-sources/scope secureworkload_scope} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSecureworkloadScopeConfig
  */
  public constructor(scope: Construct, id: string, config: DataSecureworkloadScopeConfig) {
    super(scope, id, {
      terraformResourceType: 'secureworkload_scope',
      terraformGeneratorMetadata: {
        providerName: 'secureworkload',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._exactName = config.exactName;
    this._exactShortName = config.exactShortName;
    this._vrfId = config.vrfId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // exact_name - computed: false, optional: false, required: true
  private _exactName?: string; 
  public get exactName() {
    return this.getStringAttribute('exact_name');
  }
  public set exactName(value: string) {
    this._exactName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exactNameInput() {
    return this._exactName;
  }

  // exact_short_name - computed: false, optional: true, required: false
  private _exactShortName?: string; 
  public get exactShortName() {
    return this.getStringAttribute('exact_short_name');
  }
  public set exactShortName(value: string) {
    this._exactShortName = value;
  }
  public resetExactShortName() {
    this._exactShortName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactShortNameInput() {
    return this._exactShortName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // vrf_id - computed: false, optional: true, required: false
  private _vrfId?: number; 
  public get vrfId() {
    return this.getNumberAttribute('vrf_id');
  }
  public set vrfId(value: number) {
    this._vrfId = value;
  }
  public resetVrfId() {
    this._vrfId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfIdInput() {
    return this._vrfId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      exact_name: cdktf.stringToTerraform(this._exactName),
      exact_short_name: cdktf.stringToTerraform(this._exactShortName),
      vrf_id: cdktf.numberToTerraform(this._vrfId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      exact_name: {
        value: cdktf.stringToHclTerraform(this._exactName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exact_short_name: {
        value: cdktf.stringToHclTerraform(this._exactShortName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_id: {
        value: cdktf.numberToHclTerraform(this._vrfId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
