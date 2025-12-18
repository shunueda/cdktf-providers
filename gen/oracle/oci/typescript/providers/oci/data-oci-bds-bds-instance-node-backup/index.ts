// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/bds_bds_instance_node_backup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciBdsBdsInstanceNodeBackupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/bds_bds_instance_node_backup#bds_instance_id DataOciBdsBdsInstanceNodeBackup#bds_instance_id}
  */
  readonly bdsInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/bds_bds_instance_node_backup#id DataOciBdsBdsInstanceNodeBackup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/bds_bds_instance_node_backup#node_backup_id DataOciBdsBdsInstanceNodeBackup#node_backup_id}
  */
  readonly nodeBackupId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/bds_bds_instance_node_backup oci_bds_bds_instance_node_backup}
*/
export class DataOciBdsBdsInstanceNodeBackup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_bds_bds_instance_node_backup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciBdsBdsInstanceNodeBackup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciBdsBdsInstanceNodeBackup to import
  * @param importFromId The id of the existing DataOciBdsBdsInstanceNodeBackup that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/bds_bds_instance_node_backup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciBdsBdsInstanceNodeBackup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_bds_bds_instance_node_backup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/bds_bds_instance_node_backup oci_bds_bds_instance_node_backup} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciBdsBdsInstanceNodeBackupConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciBdsBdsInstanceNodeBackupConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_bds_bds_instance_node_backup',
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
    this._bdsInstanceId = config.bdsInstanceId;
    this._id = config.id;
    this._nodeBackupId = config.nodeBackupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_trigger_type - computed: true, optional: false, required: false
  public get backupTriggerType() {
    return this.getStringAttribute('backup_trigger_type');
  }

  // backup_type - computed: true, optional: false, required: false
  public get backupType() {
    return this.getStringAttribute('backup_type');
  }

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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // node_backup_config_id - computed: true, optional: false, required: false
  public get nodeBackupConfigId() {
    return this.getStringAttribute('node_backup_config_id');
  }

  // node_backup_id - computed: false, optional: false, required: true
  private _nodeBackupId?: string; 
  public get nodeBackupId() {
    return this.getStringAttribute('node_backup_id');
  }
  public set nodeBackupId(value: string) {
    this._nodeBackupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeBackupIdInput() {
    return this._nodeBackupId;
  }

  // node_host_name - computed: true, optional: false, required: false
  public get nodeHostName() {
    return this.getStringAttribute('node_host_name');
  }

  // node_instance_id - computed: true, optional: false, required: false
  public get nodeInstanceId() {
    return this.getStringAttribute('node_instance_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bds_instance_id: cdktf.stringToTerraform(this._bdsInstanceId),
      id: cdktf.stringToTerraform(this._id),
      node_backup_id: cdktf.stringToTerraform(this._nodeBackupId),
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
      node_backup_id: {
        value: cdktf.stringToHclTerraform(this._nodeBackupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
