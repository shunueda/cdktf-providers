// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mongodb_instance_backup_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MongodbInstanceBackupRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set automatic backup method. Valid values:
  * - 0: Logical backup;
  * - 1: Physical backup;
  * - 3: Snapshot backup (supported only in cloud disk version).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mongodb_instance_backup_rule#backup_method MongodbInstanceBackupRule#backup_method}
  */
  readonly backupMethod: number;
  /**
  * Specify the number of days to save backup data. The default is 7 days, and the support settings are 7, 30, 90, 180, 365.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mongodb_instance_backup_rule#backup_retention_period MongodbInstanceBackupRule#backup_retention_period}
  */
  readonly backupRetentionPeriod?: number;
  /**
  * Set the start time for automatic backup. The value range is: [0,23]. For example, setting this parameter to 2 means that backup starts at 02:00.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mongodb_instance_backup_rule#backup_time MongodbInstanceBackupRule#backup_time}
  */
  readonly backupTime: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mongodb_instance_backup_rule#id MongodbInstanceBackupRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mongodb_instance_backup_rule#instance_id MongodbInstanceBackupRule#instance_id}
  */
  readonly instanceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mongodb_instance_backup_rule tencentcloud_mongodb_instance_backup_rule}
*/
export class MongodbInstanceBackupRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mongodb_instance_backup_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MongodbInstanceBackupRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MongodbInstanceBackupRule to import
  * @param importFromId The id of the existing MongodbInstanceBackupRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mongodb_instance_backup_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MongodbInstanceBackupRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mongodb_instance_backup_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mongodb_instance_backup_rule tencentcloud_mongodb_instance_backup_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MongodbInstanceBackupRuleConfig
  */
  public constructor(scope: Construct, id: string, config: MongodbInstanceBackupRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mongodb_instance_backup_rule',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupMethod = config.backupMethod;
    this._backupRetentionPeriod = config.backupRetentionPeriod;
    this._backupTime = config.backupTime;
    this._id = config.id;
    this._instanceId = config.instanceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_method - computed: false, optional: false, required: true
  private _backupMethod?: number; 
  public get backupMethod() {
    return this.getNumberAttribute('backup_method');
  }
  public set backupMethod(value: number) {
    this._backupMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupMethodInput() {
    return this._backupMethod;
  }

  // backup_retention_period - computed: true, optional: true, required: false
  private _backupRetentionPeriod?: number; 
  public get backupRetentionPeriod() {
    return this.getNumberAttribute('backup_retention_period');
  }
  public set backupRetentionPeriod(value: number) {
    this._backupRetentionPeriod = value;
  }
  public resetBackupRetentionPeriod() {
    this._backupRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionPeriodInput() {
    return this._backupRetentionPeriod;
  }

  // backup_time - computed: false, optional: false, required: true
  private _backupTime?: number; 
  public get backupTime() {
    return this.getNumberAttribute('backup_time');
  }
  public set backupTime(value: number) {
    this._backupTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupTimeInput() {
    return this._backupTime;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_method: cdktf.numberToTerraform(this._backupMethod),
      backup_retention_period: cdktf.numberToTerraform(this._backupRetentionPeriod),
      backup_time: cdktf.numberToTerraform(this._backupTime),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_method: {
        value: cdktf.numberToHclTerraform(this._backupMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backup_retention_period: {
        value: cdktf.numberToHclTerraform(this._backupRetentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backup_time: {
        value: cdktf.numberToHclTerraform(this._backupTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
