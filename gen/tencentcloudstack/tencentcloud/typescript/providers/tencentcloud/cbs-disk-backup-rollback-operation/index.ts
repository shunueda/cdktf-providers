// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cbs_disk_backup_rollback_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CbsDiskBackupRollbackOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cloud disk backup point ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cbs_disk_backup_rollback_operation#disk_backup_id CbsDiskBackupRollbackOperation#disk_backup_id}
  */
  readonly diskBackupId: string;
  /**
  * Cloud disk backup point original cloud disk ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cbs_disk_backup_rollback_operation#disk_id CbsDiskBackupRollbackOperation#disk_id}
  */
  readonly diskId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cbs_disk_backup_rollback_operation#id CbsDiskBackupRollbackOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cbs_disk_backup_rollback_operation tencentcloud_cbs_disk_backup_rollback_operation}
*/
export class CbsDiskBackupRollbackOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cbs_disk_backup_rollback_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CbsDiskBackupRollbackOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CbsDiskBackupRollbackOperation to import
  * @param importFromId The id of the existing CbsDiskBackupRollbackOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cbs_disk_backup_rollback_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CbsDiskBackupRollbackOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cbs_disk_backup_rollback_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cbs_disk_backup_rollback_operation tencentcloud_cbs_disk_backup_rollback_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CbsDiskBackupRollbackOperationConfig
  */
  public constructor(scope: Construct, id: string, config: CbsDiskBackupRollbackOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cbs_disk_backup_rollback_operation',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.42',
        providerVersionConstraint: '1.82.42'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._diskBackupId = config.diskBackupId;
    this._diskId = config.diskId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disk_backup_id - computed: false, optional: false, required: true
  private _diskBackupId?: string; 
  public get diskBackupId() {
    return this.getStringAttribute('disk_backup_id');
  }
  public set diskBackupId(value: string) {
    this._diskBackupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskBackupIdInput() {
    return this._diskBackupId;
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

  // is_rollback_completed - computed: true, optional: false, required: false
  public get isRollbackCompleted() {
    return this.getBooleanAttribute('is_rollback_completed');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disk_backup_id: cdktf.stringToTerraform(this._diskBackupId),
      disk_id: cdktf.stringToTerraform(this._diskId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disk_backup_id: {
        value: cdktf.stringToHclTerraform(this._diskBackupId),
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
