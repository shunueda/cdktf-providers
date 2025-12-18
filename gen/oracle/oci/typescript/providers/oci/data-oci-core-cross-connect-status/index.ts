// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_cross_connect_status
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCoreCrossConnectStatusConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_cross_connect_status#cross_connect_id DataOciCoreCrossConnectStatus#cross_connect_id}
  */
  readonly crossConnectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_cross_connect_status#id DataOciCoreCrossConnectStatus#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_cross_connect_status oci_core_cross_connect_status}
*/
export class DataOciCoreCrossConnectStatus extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_cross_connect_status";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCoreCrossConnectStatus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCoreCrossConnectStatus to import
  * @param importFromId The id of the existing DataOciCoreCrossConnectStatus that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_cross_connect_status#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCoreCrossConnectStatus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_cross_connect_status", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_cross_connect_status oci_core_cross_connect_status} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCoreCrossConnectStatusConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCoreCrossConnectStatusConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_cross_connect_status',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._crossConnectId = config.crossConnectId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cross_connect_id - computed: false, optional: false, required: true
  private _crossConnectId?: string; 
  public get crossConnectId() {
    return this.getStringAttribute('cross_connect_id');
  }
  public set crossConnectId(value: string) {
    this._crossConnectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crossConnectIdInput() {
    return this._crossConnectId;
  }

  // encryption_status - computed: true, optional: false, required: false
  public get encryptionStatus() {
    return this.getStringAttribute('encryption_status');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // interface_state - computed: true, optional: false, required: false
  public get interfaceState() {
    return this.getStringAttribute('interface_state');
  }

  // light_level_ind_bm - computed: true, optional: false, required: false
  public get lightLevelIndBm() {
    return this.getNumberAttribute('light_level_ind_bm');
  }

  // light_level_indicator - computed: true, optional: false, required: false
  public get lightLevelIndicator() {
    return this.getStringAttribute('light_level_indicator');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cross_connect_id: cdktf.stringToTerraform(this._crossConnectId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cross_connect_id: {
        value: cdktf.stringToHclTerraform(this._crossConnectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
