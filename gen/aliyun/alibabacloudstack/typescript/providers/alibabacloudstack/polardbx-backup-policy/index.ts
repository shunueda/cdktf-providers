// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_backup_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolardbxBackupPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_backup_policy#backup_period PolardbxBackupPolicy#backup_period}
  */
  readonly backupPeriod: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_backup_policy#backup_plan_begin PolardbxBackupPolicy#backup_plan_begin}
  */
  readonly backupPlanBegin: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_backup_policy#backup_set_retention PolardbxBackupPolicy#backup_set_retention}
  */
  readonly backupSetRetention: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_backup_policy#backup_type PolardbxBackupPolicy#backup_type}
  */
  readonly backupType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_backup_policy#backup_way PolardbxBackupPolicy#backup_way}
  */
  readonly backupWay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_backup_policy#db_instance_id PolardbxBackupPolicy#db_instance_id}
  */
  readonly dbInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_backup_policy#force_clean_on_high_space_usage PolardbxBackupPolicy#force_clean_on_high_space_usage}
  */
  readonly forceCleanOnHighSpaceUsage: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_backup_policy#id PolardbxBackupPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_backup_policy#local_log_retention PolardbxBackupPolicy#local_log_retention}
  */
  readonly localLogRetention: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_backup_policy#local_log_retention_number PolardbxBackupPolicy#local_log_retention_number}
  */
  readonly localLogRetentionNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_backup_policy#log_local_retention_space PolardbxBackupPolicy#log_local_retention_space}
  */
  readonly logLocalRetentionSpace: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_backup_policy#remove_log_retention PolardbxBackupPolicy#remove_log_retention}
  */
  readonly removeLogRetention: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_backup_policy alibabacloudstack_polardbx_backup_policy}
*/
export class PolardbxBackupPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_polardbx_backup_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolardbxBackupPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolardbxBackupPolicy to import
  * @param importFromId The id of the existing PolardbxBackupPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_backup_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolardbxBackupPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_polardbx_backup_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_backup_policy alibabacloudstack_polardbx_backup_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolardbxBackupPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: PolardbxBackupPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_polardbx_backup_policy',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.19'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupPeriod = config.backupPeriod;
    this._backupPlanBegin = config.backupPlanBegin;
    this._backupSetRetention = config.backupSetRetention;
    this._backupType = config.backupType;
    this._backupWay = config.backupWay;
    this._dbInstanceId = config.dbInstanceId;
    this._forceCleanOnHighSpaceUsage = config.forceCleanOnHighSpaceUsage;
    this._id = config.id;
    this._localLogRetention = config.localLogRetention;
    this._localLogRetentionNumber = config.localLogRetentionNumber;
    this._logLocalRetentionSpace = config.logLocalRetentionSpace;
    this._removeLogRetention = config.removeLogRetention;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_period - computed: false, optional: false, required: true
  private _backupPeriod?: string; 
  public get backupPeriod() {
    return this.getStringAttribute('backup_period');
  }
  public set backupPeriod(value: string) {
    this._backupPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPeriodInput() {
    return this._backupPeriod;
  }

  // backup_plan_begin - computed: false, optional: false, required: true
  private _backupPlanBegin?: string; 
  public get backupPlanBegin() {
    return this.getStringAttribute('backup_plan_begin');
  }
  public set backupPlanBegin(value: string) {
    this._backupPlanBegin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPlanBeginInput() {
    return this._backupPlanBegin;
  }

  // backup_set_retention - computed: false, optional: false, required: true
  private _backupSetRetention?: number; 
  public get backupSetRetention() {
    return this.getNumberAttribute('backup_set_retention');
  }
  public set backupSetRetention(value: number) {
    this._backupSetRetention = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupSetRetentionInput() {
    return this._backupSetRetention;
  }

  // backup_type - computed: false, optional: true, required: false
  private _backupType?: string; 
  public get backupType() {
    return this.getStringAttribute('backup_type');
  }
  public set backupType(value: string) {
    this._backupType = value;
  }
  public resetBackupType() {
    this._backupType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupTypeInput() {
    return this._backupType;
  }

  // backup_way - computed: false, optional: true, required: false
  private _backupWay?: string; 
  public get backupWay() {
    return this.getStringAttribute('backup_way');
  }
  public set backupWay(value: string) {
    this._backupWay = value;
  }
  public resetBackupWay() {
    this._backupWay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupWayInput() {
    return this._backupWay;
  }

  // cold_data_backup_interval - computed: true, optional: false, required: false
  public get coldDataBackupInterval() {
    return this.getNumberAttribute('cold_data_backup_interval');
  }

  // cold_data_backup_retention - computed: true, optional: false, required: false
  public get coldDataBackupRetention() {
    return this.getNumberAttribute('cold_data_backup_retention');
  }

  // db_instance_id - computed: false, optional: false, required: true
  private _dbInstanceId?: string; 
  public get dbInstanceId() {
    return this.getStringAttribute('db_instance_id');
  }
  public set dbInstanceId(value: string) {
    this._dbInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIdInput() {
    return this._dbInstanceId;
  }

  // force_clean_on_high_space_usage - computed: false, optional: false, required: true
  private _forceCleanOnHighSpaceUsage?: number; 
  public get forceCleanOnHighSpaceUsage() {
    return this.getNumberAttribute('force_clean_on_high_space_usage');
  }
  public set forceCleanOnHighSpaceUsage(value: number) {
    this._forceCleanOnHighSpaceUsage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forceCleanOnHighSpaceUsageInput() {
    return this._forceCleanOnHighSpaceUsage;
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

  // local_log_retention - computed: false, optional: false, required: true
  private _localLogRetention?: number; 
  public get localLogRetention() {
    return this.getNumberAttribute('local_log_retention');
  }
  public set localLogRetention(value: number) {
    this._localLogRetention = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localLogRetentionInput() {
    return this._localLogRetention;
  }

  // local_log_retention_number - computed: false, optional: true, required: false
  private _localLogRetentionNumber?: number; 
  public get localLogRetentionNumber() {
    return this.getNumberAttribute('local_log_retention_number');
  }
  public set localLogRetentionNumber(value: number) {
    this._localLogRetentionNumber = value;
  }
  public resetLocalLogRetentionNumber() {
    this._localLogRetentionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localLogRetentionNumberInput() {
    return this._localLogRetentionNumber;
  }

  // log_local_retention_space - computed: false, optional: false, required: true
  private _logLocalRetentionSpace?: number; 
  public get logLocalRetentionSpace() {
    return this.getNumberAttribute('log_local_retention_space');
  }
  public set logLocalRetentionSpace(value: number) {
    this._logLocalRetentionSpace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logLocalRetentionSpaceInput() {
    return this._logLocalRetentionSpace;
  }

  // remove_log_retention - computed: false, optional: false, required: true
  private _removeLogRetention?: number; 
  public get removeLogRetention() {
    return this.getNumberAttribute('remove_log_retention');
  }
  public set removeLogRetention(value: number) {
    this._removeLogRetention = value;
  }
  // Temporarily expose input value. Use with caution.
  public get removeLogRetentionInput() {
    return this._removeLogRetention;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_period: cdktf.stringToTerraform(this._backupPeriod),
      backup_plan_begin: cdktf.stringToTerraform(this._backupPlanBegin),
      backup_set_retention: cdktf.numberToTerraform(this._backupSetRetention),
      backup_type: cdktf.stringToTerraform(this._backupType),
      backup_way: cdktf.stringToTerraform(this._backupWay),
      db_instance_id: cdktf.stringToTerraform(this._dbInstanceId),
      force_clean_on_high_space_usage: cdktf.numberToTerraform(this._forceCleanOnHighSpaceUsage),
      id: cdktf.stringToTerraform(this._id),
      local_log_retention: cdktf.numberToTerraform(this._localLogRetention),
      local_log_retention_number: cdktf.numberToTerraform(this._localLogRetentionNumber),
      log_local_retention_space: cdktf.numberToTerraform(this._logLocalRetentionSpace),
      remove_log_retention: cdktf.numberToTerraform(this._removeLogRetention),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_period: {
        value: cdktf.stringToHclTerraform(this._backupPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_plan_begin: {
        value: cdktf.stringToHclTerraform(this._backupPlanBegin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_set_retention: {
        value: cdktf.numberToHclTerraform(this._backupSetRetention),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backup_type: {
        value: cdktf.stringToHclTerraform(this._backupType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_way: {
        value: cdktf.stringToHclTerraform(this._backupWay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_id: {
        value: cdktf.stringToHclTerraform(this._dbInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_clean_on_high_space_usage: {
        value: cdktf.numberToHclTerraform(this._forceCleanOnHighSpaceUsage),
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
      local_log_retention: {
        value: cdktf.numberToHclTerraform(this._localLogRetention),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      local_log_retention_number: {
        value: cdktf.numberToHclTerraform(this._localLogRetentionNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_local_retention_space: {
        value: cdktf.numberToHclTerraform(this._logLocalRetentionSpace),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remove_log_retention: {
        value: cdktf.numberToHclTerraform(this._removeLogRetention),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
