// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_fleet_drs_file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciJmsFleetDrsFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_fleet_drs_file#drs_file_key DataOciJmsFleetDrsFile#drs_file_key}
  */
  readonly drsFileKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_fleet_drs_file#fleet_id DataOciJmsFleetDrsFile#fleet_id}
  */
  readonly fleetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_fleet_drs_file#id DataOciJmsFleetDrsFile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_fleet_drs_file oci_jms_fleet_drs_file}
*/
export class DataOciJmsFleetDrsFile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_jms_fleet_drs_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciJmsFleetDrsFile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciJmsFleetDrsFile to import
  * @param importFromId The id of the existing DataOciJmsFleetDrsFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_fleet_drs_file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciJmsFleetDrsFile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_jms_fleet_drs_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_fleet_drs_file oci_jms_fleet_drs_file} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciJmsFleetDrsFileConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciJmsFleetDrsFileConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_jms_fleet_drs_file',
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
    this._drsFileKey = config.drsFileKey;
    this._fleetId = config.fleetId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // checksum_type - computed: true, optional: false, required: false
  public get checksumType() {
    return this.getStringAttribute('checksum_type');
  }

  // checksum_value - computed: true, optional: false, required: false
  public get checksumValue() {
    return this.getStringAttribute('checksum_value');
  }

  // drs_file_key - computed: false, optional: false, required: true
  private _drsFileKey?: string; 
  public get drsFileKey() {
    return this.getStringAttribute('drs_file_key');
  }
  public set drsFileKey(value: string) {
    this._drsFileKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get drsFileKeyInput() {
    return this._drsFileKey;
  }

  // drs_file_name - computed: true, optional: false, required: false
  public get drsFileName() {
    return this.getStringAttribute('drs_file_name');
  }

  // fleet_id - computed: false, optional: false, required: true
  private _fleetId?: string; 
  public get fleetId() {
    return this.getStringAttribute('fleet_id');
  }
  public set fleetId(value: string) {
    this._fleetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetIdInput() {
    return this._fleetId;
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

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      drs_file_key: cdktf.stringToTerraform(this._drsFileKey),
      fleet_id: cdktf.stringToTerraform(this._fleetId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      drs_file_key: {
        value: cdktf.stringToHclTerraform(this._drsFileKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fleet_id: {
        value: cdktf.stringToHclTerraform(this._fleetId),
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
