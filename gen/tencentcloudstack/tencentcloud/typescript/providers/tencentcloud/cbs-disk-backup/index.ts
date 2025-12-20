// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cbs_disk_backup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CbsDiskBackupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Backup point name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cbs_disk_backup#disk_backup_name CbsDiskBackup#disk_backup_name}
  */
  readonly diskBackupName?: string;
  /**
  * ID of the original cloud disk of the backup point, which can be queried through the DescribeDisks API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cbs_disk_backup#disk_id CbsDiskBackup#disk_id}
  */
  readonly diskId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cbs_disk_backup#id CbsDiskBackup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cbs_disk_backup tencentcloud_cbs_disk_backup}
*/
export class CbsDiskBackup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cbs_disk_backup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CbsDiskBackup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CbsDiskBackup to import
  * @param importFromId The id of the existing CbsDiskBackup that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cbs_disk_backup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CbsDiskBackup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cbs_disk_backup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cbs_disk_backup tencentcloud_cbs_disk_backup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CbsDiskBackupConfig
  */
  public constructor(scope: Construct, id: string, config: CbsDiskBackupConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cbs_disk_backup',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._diskBackupName = config.diskBackupName;
    this._diskId = config.diskId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disk_backup_name - computed: false, optional: true, required: false
  private _diskBackupName?: string; 
  public get diskBackupName() {
    return this.getStringAttribute('disk_backup_name');
  }
  public set diskBackupName(value: string) {
    this._diskBackupName = value;
  }
  public resetDiskBackupName() {
    this._diskBackupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskBackupNameInput() {
    return this._diskBackupName;
  }

  // disk_id - computed: false, optional: false, required: true
  private _diskId?: string; 
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }
  public set diskId(value: string) {
    this._diskId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdInput() {
    return this._diskId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disk_backup_name: cdktf.stringToTerraform(this._diskBackupName),
      disk_id: cdktf.stringToTerraform(this._diskId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disk_backup_name: {
        value: cdktf.stringToHclTerraform(this._diskBackupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_id: {
        value: cdktf.stringToHclTerraform(this._diskId),
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
