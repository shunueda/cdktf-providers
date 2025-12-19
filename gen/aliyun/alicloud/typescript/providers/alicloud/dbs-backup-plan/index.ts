// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbsBackupPlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan#backup_gateway_id DbsBackupPlan#backup_gateway_id}
  */
  readonly backupGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan#backup_log_interval_seconds DbsBackupPlan#backup_log_interval_seconds}
  */
  readonly backupLogIntervalSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan#backup_method DbsBackupPlan#backup_method}
  */
  readonly backupMethod: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan#backup_objects DbsBackupPlan#backup_objects}
  */
  readonly backupObjects?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan#backup_period DbsBackupPlan#backup_period}
  */
  readonly backupPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan#backup_plan_name DbsBackupPlan#backup_plan_name}
  */
  readonly backupPlanName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan#backup_rate_limit DbsBackupPlan#backup_rate_limit}
  */
  readonly backupRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan#backup_retention_period DbsBackupPlan#backup_retention_period}
  */
  readonly backupRetentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan#backup_speed_limit DbsBackupPlan#backup_speed_limit}
  */
  readonly backupSpeedLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan#backup_start_time DbsBackupPlan#backup_start_time}
  */
  readonly backupStartTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan#backup_storage_type DbsBackupPlan#backup_storage_type}
  */
  readonly backupStorageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan#backup_strategy_type DbsBackupPlan#backup_strategy_type}
  */
  readonly backupStrategyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan#cross_aliyun_id DbsBackupPlan#cross_aliyun_id}
  */
  readonly crossAliyunId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan#cross_role_name DbsBackupPlan#cross_role_name}
  */
  readonly crossRoleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan#database_region DbsBackupPlan#database_region}
  */
  readonly databaseRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan#database_type DbsBackupPlan#database_type}
  */
  readonly databaseType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan#duplication_archive_period DbsBackupPlan#duplication_archive_period}
  */
  readonly duplicationArchivePeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan#duplication_infrequent_access_period DbsBackupPlan#duplication_infrequent_access_period}
  */
  readonly duplicationInfrequentAccessPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan#enable_backup_log DbsBackupPlan#enable_backup_log}
  */
  readonly enableBackupLog?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan#id DbsBackupPlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan#instance_class DbsBackupPlan#instance_class}
  */
  readonly instanceClass: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan#instance_type DbsBackupPlan#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan#oss_bucket_name DbsBackupPlan#oss_bucket_name}
  */
  readonly ossBucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan#payment_type DbsBackupPlan#payment_type}
  */
  readonly paymentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan#period DbsBackupPlan#period}
  */
  readonly period?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan#resource_group_id DbsBackupPlan#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan#source_endpoint_database_name DbsBackupPlan#source_endpoint_database_name}
  */
  readonly sourceEndpointDatabaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan#source_endpoint_instance_id DbsBackupPlan#source_endpoint_instance_id}
  */
  readonly sourceEndpointInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan#source_endpoint_instance_type DbsBackupPlan#source_endpoint_instance_type}
  */
  readonly sourceEndpointInstanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan#source_endpoint_ip DbsBackupPlan#source_endpoint_ip}
  */
  readonly sourceEndpointIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan#source_endpoint_oracle_sid DbsBackupPlan#source_endpoint_oracle_sid}
  */
  readonly sourceEndpointOracleSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan#source_endpoint_password DbsBackupPlan#source_endpoint_password}
  */
  readonly sourceEndpointPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan#source_endpoint_port DbsBackupPlan#source_endpoint_port}
  */
  readonly sourceEndpointPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan#source_endpoint_region DbsBackupPlan#source_endpoint_region}
  */
  readonly sourceEndpointRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan#source_endpoint_sid DbsBackupPlan#source_endpoint_sid}
  */
  readonly sourceEndpointSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan#source_endpoint_user_name DbsBackupPlan#source_endpoint_user_name}
  */
  readonly sourceEndpointUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan#status DbsBackupPlan#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan#storage_region DbsBackupPlan#storage_region}
  */
  readonly storageRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan#used_time DbsBackupPlan#used_time}
  */
  readonly usedTime?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan#timeouts DbsBackupPlan#timeouts}
  */
  readonly timeouts?: DbsBackupPlanTimeouts;
}
export interface DbsBackupPlanTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan#create DbsBackupPlan#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan#delete DbsBackupPlan#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan#update DbsBackupPlan#update}
  */
  readonly update?: string;
}

export function dbsBackupPlanTimeoutsToTerraform(struct?: DbsBackupPlanTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function dbsBackupPlanTimeoutsToHclTerraform(struct?: DbsBackupPlanTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbsBackupPlanTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DbsBackupPlanTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbsBackupPlanTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan alicloud_dbs_backup_plan}
*/
export class DbsBackupPlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_dbs_backup_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DbsBackupPlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DbsBackupPlan to import
  * @param importFromId The id of the existing DbsBackupPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DbsBackupPlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_dbs_backup_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dbs_backup_plan alicloud_dbs_backup_plan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbsBackupPlanConfig
  */
  public constructor(scope: Construct, id: string, config: DbsBackupPlanConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_dbs_backup_plan',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupGatewayId = config.backupGatewayId;
    this._backupLogIntervalSeconds = config.backupLogIntervalSeconds;
    this._backupMethod = config.backupMethod;
    this._backupObjects = config.backupObjects;
    this._backupPeriod = config.backupPeriod;
    this._backupPlanName = config.backupPlanName;
    this._backupRateLimit = config.backupRateLimit;
    this._backupRetentionPeriod = config.backupRetentionPeriod;
    this._backupSpeedLimit = config.backupSpeedLimit;
    this._backupStartTime = config.backupStartTime;
    this._backupStorageType = config.backupStorageType;
    this._backupStrategyType = config.backupStrategyType;
    this._crossAliyunId = config.crossAliyunId;
    this._crossRoleName = config.crossRoleName;
    this._databaseRegion = config.databaseRegion;
    this._databaseType = config.databaseType;
    this._duplicationArchivePeriod = config.duplicationArchivePeriod;
    this._duplicationInfrequentAccessPeriod = config.duplicationInfrequentAccessPeriod;
    this._enableBackupLog = config.enableBackupLog;
    this._id = config.id;
    this._instanceClass = config.instanceClass;
    this._instanceType = config.instanceType;
    this._ossBucketName = config.ossBucketName;
    this._paymentType = config.paymentType;
    this._period = config.period;
    this._resourceGroupId = config.resourceGroupId;
    this._sourceEndpointDatabaseName = config.sourceEndpointDatabaseName;
    this._sourceEndpointInstanceId = config.sourceEndpointInstanceId;
    this._sourceEndpointInstanceType = config.sourceEndpointInstanceType;
    this._sourceEndpointIp = config.sourceEndpointIp;
    this._sourceEndpointOracleSid = config.sourceEndpointOracleSid;
    this._sourceEndpointPassword = config.sourceEndpointPassword;
    this._sourceEndpointPort = config.sourceEndpointPort;
    this._sourceEndpointRegion = config.sourceEndpointRegion;
    this._sourceEndpointSid = config.sourceEndpointSid;
    this._sourceEndpointUserName = config.sourceEndpointUserName;
    this._status = config.status;
    this._storageRegion = config.storageRegion;
    this._usedTime = config.usedTime;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_gateway_id - computed: true, optional: true, required: false
  private _backupGatewayId?: string; 
  public get backupGatewayId() {
    return this.getStringAttribute('backup_gateway_id');
  }
  public set backupGatewayId(value: string) {
    this._backupGatewayId = value;
  }
  public resetBackupGatewayId() {
    this._backupGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupGatewayIdInput() {
    return this._backupGatewayId;
  }

  // backup_log_interval_seconds - computed: false, optional: true, required: false
  private _backupLogIntervalSeconds?: number; 
  public get backupLogIntervalSeconds() {
    return this.getNumberAttribute('backup_log_interval_seconds');
  }
  public set backupLogIntervalSeconds(value: number) {
    this._backupLogIntervalSeconds = value;
  }
  public resetBackupLogIntervalSeconds() {
    this._backupLogIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupLogIntervalSecondsInput() {
    return this._backupLogIntervalSeconds;
  }

  // backup_method - computed: false, optional: false, required: true
  private _backupMethod?: string; 
  public get backupMethod() {
    return this.getStringAttribute('backup_method');
  }
  public set backupMethod(value: string) {
    this._backupMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupMethodInput() {
    return this._backupMethod;
  }

  // backup_objects - computed: true, optional: true, required: false
  private _backupObjects?: string; 
  public get backupObjects() {
    return this.getStringAttribute('backup_objects');
  }
  public set backupObjects(value: string) {
    this._backupObjects = value;
  }
  public resetBackupObjects() {
    this._backupObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupObjectsInput() {
    return this._backupObjects;
  }

  // backup_period - computed: true, optional: true, required: false
  private _backupPeriod?: string; 
  public get backupPeriod() {
    return this.getStringAttribute('backup_period');
  }
  public set backupPeriod(value: string) {
    this._backupPeriod = value;
  }
  public resetBackupPeriod() {
    this._backupPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPeriodInput() {
    return this._backupPeriod;
  }

  // backup_plan_name - computed: false, optional: false, required: true
  private _backupPlanName?: string; 
  public get backupPlanName() {
    return this.getStringAttribute('backup_plan_name');
  }
  public set backupPlanName(value: string) {
    this._backupPlanName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPlanNameInput() {
    return this._backupPlanName;
  }

  // backup_rate_limit - computed: false, optional: true, required: false
  private _backupRateLimit?: string; 
  public get backupRateLimit() {
    return this.getStringAttribute('backup_rate_limit');
  }
  public set backupRateLimit(value: string) {
    this._backupRateLimit = value;
  }
  public resetBackupRateLimit() {
    this._backupRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRateLimitInput() {
    return this._backupRateLimit;
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

  // backup_speed_limit - computed: false, optional: true, required: false
  private _backupSpeedLimit?: string; 
  public get backupSpeedLimit() {
    return this.getStringAttribute('backup_speed_limit');
  }
  public set backupSpeedLimit(value: string) {
    this._backupSpeedLimit = value;
  }
  public resetBackupSpeedLimit() {
    this._backupSpeedLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupSpeedLimitInput() {
    return this._backupSpeedLimit;
  }

  // backup_start_time - computed: true, optional: true, required: false
  private _backupStartTime?: string; 
  public get backupStartTime() {
    return this.getStringAttribute('backup_start_time');
  }
  public set backupStartTime(value: string) {
    this._backupStartTime = value;
  }
  public resetBackupStartTime() {
    this._backupStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupStartTimeInput() {
    return this._backupStartTime;
  }

  // backup_storage_type - computed: true, optional: true, required: false
  private _backupStorageType?: string; 
  public get backupStorageType() {
    return this.getStringAttribute('backup_storage_type');
  }
  public set backupStorageType(value: string) {
    this._backupStorageType = value;
  }
  public resetBackupStorageType() {
    this._backupStorageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupStorageTypeInput() {
    return this._backupStorageType;
  }

  // backup_strategy_type - computed: false, optional: true, required: false
  private _backupStrategyType?: string; 
  public get backupStrategyType() {
    return this.getStringAttribute('backup_strategy_type');
  }
  public set backupStrategyType(value: string) {
    this._backupStrategyType = value;
  }
  public resetBackupStrategyType() {
    this._backupStrategyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupStrategyTypeInput() {
    return this._backupStrategyType;
  }

  // cross_aliyun_id - computed: true, optional: true, required: false
  private _crossAliyunId?: string; 
  public get crossAliyunId() {
    return this.getStringAttribute('cross_aliyun_id');
  }
  public set crossAliyunId(value: string) {
    this._crossAliyunId = value;
  }
  public resetCrossAliyunId() {
    this._crossAliyunId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAliyunIdInput() {
    return this._crossAliyunId;
  }

  // cross_role_name - computed: true, optional: true, required: false
  private _crossRoleName?: string; 
  public get crossRoleName() {
    return this.getStringAttribute('cross_role_name');
  }
  public set crossRoleName(value: string) {
    this._crossRoleName = value;
  }
  public resetCrossRoleName() {
    this._crossRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossRoleNameInput() {
    return this._crossRoleName;
  }

  // database_region - computed: false, optional: true, required: false
  private _databaseRegion?: string; 
  public get databaseRegion() {
    return this.getStringAttribute('database_region');
  }
  public set databaseRegion(value: string) {
    this._databaseRegion = value;
  }
  public resetDatabaseRegion() {
    this._databaseRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseRegionInput() {
    return this._databaseRegion;
  }

  // database_type - computed: false, optional: false, required: true
  private _databaseType?: string; 
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }
  public set databaseType(value: string) {
    this._databaseType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseTypeInput() {
    return this._databaseType;
  }

  // duplication_archive_period - computed: true, optional: true, required: false
  private _duplicationArchivePeriod?: number; 
  public get duplicationArchivePeriod() {
    return this.getNumberAttribute('duplication_archive_period');
  }
  public set duplicationArchivePeriod(value: number) {
    this._duplicationArchivePeriod = value;
  }
  public resetDuplicationArchivePeriod() {
    this._duplicationArchivePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplicationArchivePeriodInput() {
    return this._duplicationArchivePeriod;
  }

  // duplication_infrequent_access_period - computed: true, optional: true, required: false
  private _duplicationInfrequentAccessPeriod?: number; 
  public get duplicationInfrequentAccessPeriod() {
    return this.getNumberAttribute('duplication_infrequent_access_period');
  }
  public set duplicationInfrequentAccessPeriod(value: number) {
    this._duplicationInfrequentAccessPeriod = value;
  }
  public resetDuplicationInfrequentAccessPeriod() {
    this._duplicationInfrequentAccessPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplicationInfrequentAccessPeriodInput() {
    return this._duplicationInfrequentAccessPeriod;
  }

  // enable_backup_log - computed: true, optional: true, required: false
  private _enableBackupLog?: boolean | cdktf.IResolvable; 
  public get enableBackupLog() {
    return this.getBooleanAttribute('enable_backup_log');
  }
  public set enableBackupLog(value: boolean | cdktf.IResolvable) {
    this._enableBackupLog = value;
  }
  public resetEnableBackupLog() {
    this._enableBackupLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBackupLogInput() {
    return this._enableBackupLog;
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

  // instance_class - computed: false, optional: false, required: true
  private _instanceClass?: string; 
  public get instanceClass() {
    return this.getStringAttribute('instance_class');
  }
  public set instanceClass(value: string) {
    this._instanceClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceClassInput() {
    return this._instanceClass;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // oss_bucket_name - computed: true, optional: true, required: false
  private _ossBucketName?: string; 
  public get ossBucketName() {
    return this.getStringAttribute('oss_bucket_name');
  }
  public set ossBucketName(value: string) {
    this._ossBucketName = value;
  }
  public resetOssBucketName() {
    this._ossBucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ossBucketNameInput() {
    return this._ossBucketName;
  }

  // payment_type - computed: true, optional: true, required: false
  private _paymentType?: string; 
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }
  public set paymentType(value: string) {
    this._paymentType = value;
  }
  public resetPaymentType() {
    this._paymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentTypeInput() {
    return this._paymentType;
  }

  // period - computed: false, optional: true, required: false
  private _period?: string; 
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // source_endpoint_database_name - computed: true, optional: true, required: false
  private _sourceEndpointDatabaseName?: string; 
  public get sourceEndpointDatabaseName() {
    return this.getStringAttribute('source_endpoint_database_name');
  }
  public set sourceEndpointDatabaseName(value: string) {
    this._sourceEndpointDatabaseName = value;
  }
  public resetSourceEndpointDatabaseName() {
    this._sourceEndpointDatabaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndpointDatabaseNameInput() {
    return this._sourceEndpointDatabaseName;
  }

  // source_endpoint_instance_id - computed: true, optional: true, required: false
  private _sourceEndpointInstanceId?: string; 
  public get sourceEndpointInstanceId() {
    return this.getStringAttribute('source_endpoint_instance_id');
  }
  public set sourceEndpointInstanceId(value: string) {
    this._sourceEndpointInstanceId = value;
  }
  public resetSourceEndpointInstanceId() {
    this._sourceEndpointInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndpointInstanceIdInput() {
    return this._sourceEndpointInstanceId;
  }

  // source_endpoint_instance_type - computed: false, optional: false, required: true
  private _sourceEndpointInstanceType?: string; 
  public get sourceEndpointInstanceType() {
    return this.getStringAttribute('source_endpoint_instance_type');
  }
  public set sourceEndpointInstanceType(value: string) {
    this._sourceEndpointInstanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndpointInstanceTypeInput() {
    return this._sourceEndpointInstanceType;
  }

  // source_endpoint_ip - computed: false, optional: true, required: false
  private _sourceEndpointIp?: string; 
  public get sourceEndpointIp() {
    return this.getStringAttribute('source_endpoint_ip');
  }
  public set sourceEndpointIp(value: string) {
    this._sourceEndpointIp = value;
  }
  public resetSourceEndpointIp() {
    this._sourceEndpointIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndpointIpInput() {
    return this._sourceEndpointIp;
  }

  // source_endpoint_oracle_sid - computed: false, optional: true, required: false
  private _sourceEndpointOracleSid?: string; 
  public get sourceEndpointOracleSid() {
    return this.getStringAttribute('source_endpoint_oracle_sid');
  }
  public set sourceEndpointOracleSid(value: string) {
    this._sourceEndpointOracleSid = value;
  }
  public resetSourceEndpointOracleSid() {
    this._sourceEndpointOracleSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndpointOracleSidInput() {
    return this._sourceEndpointOracleSid;
  }

  // source_endpoint_password - computed: false, optional: true, required: false
  private _sourceEndpointPassword?: string; 
  public get sourceEndpointPassword() {
    return this.getStringAttribute('source_endpoint_password');
  }
  public set sourceEndpointPassword(value: string) {
    this._sourceEndpointPassword = value;
  }
  public resetSourceEndpointPassword() {
    this._sourceEndpointPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndpointPasswordInput() {
    return this._sourceEndpointPassword;
  }

  // source_endpoint_port - computed: false, optional: true, required: false
  private _sourceEndpointPort?: number; 
  public get sourceEndpointPort() {
    return this.getNumberAttribute('source_endpoint_port');
  }
  public set sourceEndpointPort(value: number) {
    this._sourceEndpointPort = value;
  }
  public resetSourceEndpointPort() {
    this._sourceEndpointPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndpointPortInput() {
    return this._sourceEndpointPort;
  }

  // source_endpoint_region - computed: true, optional: true, required: false
  private _sourceEndpointRegion?: string; 
  public get sourceEndpointRegion() {
    return this.getStringAttribute('source_endpoint_region');
  }
  public set sourceEndpointRegion(value: string) {
    this._sourceEndpointRegion = value;
  }
  public resetSourceEndpointRegion() {
    this._sourceEndpointRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndpointRegionInput() {
    return this._sourceEndpointRegion;
  }

  // source_endpoint_sid - computed: true, optional: true, required: false
  private _sourceEndpointSid?: string; 
  public get sourceEndpointSid() {
    return this.getStringAttribute('source_endpoint_sid');
  }
  public set sourceEndpointSid(value: string) {
    this._sourceEndpointSid = value;
  }
  public resetSourceEndpointSid() {
    this._sourceEndpointSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndpointSidInput() {
    return this._sourceEndpointSid;
  }

  // source_endpoint_user_name - computed: true, optional: true, required: false
  private _sourceEndpointUserName?: string; 
  public get sourceEndpointUserName() {
    return this.getStringAttribute('source_endpoint_user_name');
  }
  public set sourceEndpointUserName(value: string) {
    this._sourceEndpointUserName = value;
  }
  public resetSourceEndpointUserName() {
    this._sourceEndpointUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndpointUserNameInput() {
    return this._sourceEndpointUserName;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // storage_region - computed: false, optional: true, required: false
  private _storageRegion?: string; 
  public get storageRegion() {
    return this.getStringAttribute('storage_region');
  }
  public set storageRegion(value: string) {
    this._storageRegion = value;
  }
  public resetStorageRegion() {
    this._storageRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageRegionInput() {
    return this._storageRegion;
  }

  // used_time - computed: false, optional: true, required: false
  private _usedTime?: number; 
  public get usedTime() {
    return this.getNumberAttribute('used_time');
  }
  public set usedTime(value: number) {
    this._usedTime = value;
  }
  public resetUsedTime() {
    this._usedTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usedTimeInput() {
    return this._usedTime;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DbsBackupPlanTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DbsBackupPlanTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_gateway_id: cdktf.stringToTerraform(this._backupGatewayId),
      backup_log_interval_seconds: cdktf.numberToTerraform(this._backupLogIntervalSeconds),
      backup_method: cdktf.stringToTerraform(this._backupMethod),
      backup_objects: cdktf.stringToTerraform(this._backupObjects),
      backup_period: cdktf.stringToTerraform(this._backupPeriod),
      backup_plan_name: cdktf.stringToTerraform(this._backupPlanName),
      backup_rate_limit: cdktf.stringToTerraform(this._backupRateLimit),
      backup_retention_period: cdktf.numberToTerraform(this._backupRetentionPeriod),
      backup_speed_limit: cdktf.stringToTerraform(this._backupSpeedLimit),
      backup_start_time: cdktf.stringToTerraform(this._backupStartTime),
      backup_storage_type: cdktf.stringToTerraform(this._backupStorageType),
      backup_strategy_type: cdktf.stringToTerraform(this._backupStrategyType),
      cross_aliyun_id: cdktf.stringToTerraform(this._crossAliyunId),
      cross_role_name: cdktf.stringToTerraform(this._crossRoleName),
      database_region: cdktf.stringToTerraform(this._databaseRegion),
      database_type: cdktf.stringToTerraform(this._databaseType),
      duplication_archive_period: cdktf.numberToTerraform(this._duplicationArchivePeriod),
      duplication_infrequent_access_period: cdktf.numberToTerraform(this._duplicationInfrequentAccessPeriod),
      enable_backup_log: cdktf.booleanToTerraform(this._enableBackupLog),
      id: cdktf.stringToTerraform(this._id),
      instance_class: cdktf.stringToTerraform(this._instanceClass),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      oss_bucket_name: cdktf.stringToTerraform(this._ossBucketName),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      period: cdktf.stringToTerraform(this._period),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      source_endpoint_database_name: cdktf.stringToTerraform(this._sourceEndpointDatabaseName),
      source_endpoint_instance_id: cdktf.stringToTerraform(this._sourceEndpointInstanceId),
      source_endpoint_instance_type: cdktf.stringToTerraform(this._sourceEndpointInstanceType),
      source_endpoint_ip: cdktf.stringToTerraform(this._sourceEndpointIp),
      source_endpoint_oracle_sid: cdktf.stringToTerraform(this._sourceEndpointOracleSid),
      source_endpoint_password: cdktf.stringToTerraform(this._sourceEndpointPassword),
      source_endpoint_port: cdktf.numberToTerraform(this._sourceEndpointPort),
      source_endpoint_region: cdktf.stringToTerraform(this._sourceEndpointRegion),
      source_endpoint_sid: cdktf.stringToTerraform(this._sourceEndpointSid),
      source_endpoint_user_name: cdktf.stringToTerraform(this._sourceEndpointUserName),
      status: cdktf.stringToTerraform(this._status),
      storage_region: cdktf.stringToTerraform(this._storageRegion),
      used_time: cdktf.numberToTerraform(this._usedTime),
      timeouts: dbsBackupPlanTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_gateway_id: {
        value: cdktf.stringToHclTerraform(this._backupGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_log_interval_seconds: {
        value: cdktf.numberToHclTerraform(this._backupLogIntervalSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backup_method: {
        value: cdktf.stringToHclTerraform(this._backupMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_objects: {
        value: cdktf.stringToHclTerraform(this._backupObjects),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_period: {
        value: cdktf.stringToHclTerraform(this._backupPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_plan_name: {
        value: cdktf.stringToHclTerraform(this._backupPlanName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_rate_limit: {
        value: cdktf.stringToHclTerraform(this._backupRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_retention_period: {
        value: cdktf.numberToHclTerraform(this._backupRetentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backup_speed_limit: {
        value: cdktf.stringToHclTerraform(this._backupSpeedLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_start_time: {
        value: cdktf.stringToHclTerraform(this._backupStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_storage_type: {
        value: cdktf.stringToHclTerraform(this._backupStorageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_strategy_type: {
        value: cdktf.stringToHclTerraform(this._backupStrategyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cross_aliyun_id: {
        value: cdktf.stringToHclTerraform(this._crossAliyunId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cross_role_name: {
        value: cdktf.stringToHclTerraform(this._crossRoleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_region: {
        value: cdktf.stringToHclTerraform(this._databaseRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_type: {
        value: cdktf.stringToHclTerraform(this._databaseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      duplication_archive_period: {
        value: cdktf.numberToHclTerraform(this._duplicationArchivePeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      duplication_infrequent_access_period: {
        value: cdktf.numberToHclTerraform(this._duplicationInfrequentAccessPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_backup_log: {
        value: cdktf.booleanToHclTerraform(this._enableBackupLog),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_class: {
        value: cdktf.stringToHclTerraform(this._instanceClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oss_bucket_name: {
        value: cdktf.stringToHclTerraform(this._ossBucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      payment_type: {
        value: cdktf.stringToHclTerraform(this._paymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period: {
        value: cdktf.stringToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_endpoint_database_name: {
        value: cdktf.stringToHclTerraform(this._sourceEndpointDatabaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_endpoint_instance_id: {
        value: cdktf.stringToHclTerraform(this._sourceEndpointInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_endpoint_instance_type: {
        value: cdktf.stringToHclTerraform(this._sourceEndpointInstanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_endpoint_ip: {
        value: cdktf.stringToHclTerraform(this._sourceEndpointIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_endpoint_oracle_sid: {
        value: cdktf.stringToHclTerraform(this._sourceEndpointOracleSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_endpoint_password: {
        value: cdktf.stringToHclTerraform(this._sourceEndpointPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_endpoint_port: {
        value: cdktf.numberToHclTerraform(this._sourceEndpointPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_endpoint_region: {
        value: cdktf.stringToHclTerraform(this._sourceEndpointRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_endpoint_sid: {
        value: cdktf.stringToHclTerraform(this._sourceEndpointSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_endpoint_user_name: {
        value: cdktf.stringToHclTerraform(this._sourceEndpointUserName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_region: {
        value: cdktf.stringToHclTerraform(this._storageRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      used_time: {
        value: cdktf.numberToHclTerraform(this._usedTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: dbsBackupPlanTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DbsBackupPlanTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
