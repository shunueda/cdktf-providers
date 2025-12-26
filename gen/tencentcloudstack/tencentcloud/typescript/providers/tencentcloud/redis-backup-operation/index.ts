// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/redis_backup_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedisBackupOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/redis_backup_operation#id RedisBackupOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/redis_backup_operation#instance_id RedisBackupOperation#instance_id}
  */
  readonly instanceId: string;
  /**
  * Notes information for the backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/redis_backup_operation#remark RedisBackupOperation#remark}
  */
  readonly remark?: string;
  /**
  * Number of days to store.0 specifies the default retention time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/redis_backup_operation#storage_days RedisBackupOperation#storage_days}
  */
  readonly storageDays?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/redis_backup_operation tencentcloud_redis_backup_operation}
*/
export class RedisBackupOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_redis_backup_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RedisBackupOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RedisBackupOperation to import
  * @param importFromId The id of the existing RedisBackupOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/redis_backup_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RedisBackupOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_redis_backup_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/redis_backup_operation tencentcloud_redis_backup_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedisBackupOperationConfig
  */
  public constructor(scope: Construct, id: string, config: RedisBackupOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_redis_backup_operation',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._remark = config.remark;
    this._storageDays = config.storageDays;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // remark - computed: false, optional: true, required: false
  private _remark?: string; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string) {
    this._remark = value;
  }
  public resetRemark() {
    this._remark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark;
  }

  // storage_days - computed: false, optional: true, required: false
  private _storageDays?: number; 
  public get storageDays() {
    return this.getNumberAttribute('storage_days');
  }
  public set storageDays(value: number) {
    this._storageDays = value;
  }
  public resetStorageDays() {
    this._storageDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDaysInput() {
    return this._storageDays;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      remark: cdktf.stringToTerraform(this._remark),
      storage_days: cdktf.numberToTerraform(this._storageDays),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remark: {
        value: cdktf.stringToHclTerraform(this._remark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_days: {
        value: cdktf.numberToHclTerraform(this._storageDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
