// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/bds_bds_instance_software_update
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciBdsBdsInstanceSoftwareUpdateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/bds_bds_instance_software_update#bds_instance_id DataOciBdsBdsInstanceSoftwareUpdate#bds_instance_id}
  */
  readonly bdsInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/bds_bds_instance_software_update#id DataOciBdsBdsInstanceSoftwareUpdate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/bds_bds_instance_software_update#software_update_key DataOciBdsBdsInstanceSoftwareUpdate#software_update_key}
  */
  readonly softwareUpdateKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/bds_bds_instance_software_update oci_bds_bds_instance_software_update}
*/
export class DataOciBdsBdsInstanceSoftwareUpdate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_bds_bds_instance_software_update";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciBdsBdsInstanceSoftwareUpdate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciBdsBdsInstanceSoftwareUpdate to import
  * @param importFromId The id of the existing DataOciBdsBdsInstanceSoftwareUpdate that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/bds_bds_instance_software_update#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciBdsBdsInstanceSoftwareUpdate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_bds_bds_instance_software_update", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/bds_bds_instance_software_update oci_bds_bds_instance_software_update} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciBdsBdsInstanceSoftwareUpdateConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciBdsBdsInstanceSoftwareUpdateConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_bds_bds_instance_software_update',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bdsInstanceId = config.bdsInstanceId;
    this._id = config.id;
    this._softwareUpdateKey = config.softwareUpdateKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bds_instance_id - computed: false, optional: false, required: true
  private _bdsInstanceId?: string; 
  public get bdsInstanceId() {
    return this.getStringAttribute('bds_instance_id');
  }
  public set bdsInstanceId(value: string) {
    this._bdsInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bdsInstanceIdInput() {
    return this._bdsInstanceId;
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

  // software_update_key - computed: false, optional: false, required: true
  private _softwareUpdateKey?: string; 
  public get softwareUpdateKey() {
    return this.getStringAttribute('software_update_key');
  }
  public set softwareUpdateKey(value: string) {
    this._softwareUpdateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareUpdateKeyInput() {
    return this._softwareUpdateKey;
  }

  // software_update_type - computed: true, optional: false, required: false
  public get softwareUpdateType() {
    return this.getStringAttribute('software_update_type');
  }

  // software_update_version - computed: true, optional: false, required: false
  public get softwareUpdateVersion() {
    return this.getStringAttribute('software_update_version');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_due - computed: true, optional: false, required: false
  public get timeDue() {
    return this.getStringAttribute('time_due');
  }

  // time_released - computed: true, optional: false, required: false
  public get timeReleased() {
    return this.getStringAttribute('time_released');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bds_instance_id: cdktf.stringToTerraform(this._bdsInstanceId),
      id: cdktf.stringToTerraform(this._id),
      software_update_key: cdktf.stringToTerraform(this._softwareUpdateKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bds_instance_id: {
        value: cdktf.stringToHclTerraform(this._bdsInstanceId),
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
      software_update_key: {
        value: cdktf.stringToHclTerraform(this._softwareUpdateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
