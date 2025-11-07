// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/rds_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RdsInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * (Required unless a `snapshot_id` is provided) The allocated storage in gigabytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/rds_instance#allocated_storage RdsInstance#allocated_storage}
  */
  readonly allocatedStorage?: number;
  /**
  * Enable or disable auto minor version upgrade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/rds_instance#auto_minor_version_upgrade RdsInstance#auto_minor_version_upgrade}
  */
  readonly autoMinorVersionUpgrade?: boolean | cdktf.IResolvable;
  /**
  * Specify a valid Availability Zone for the RDS primary instance (when Multi-AZ is disabled) or for the Aurora writer instance. e.g. us-west-2a
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/rds_instance#availability_zone RdsInstance#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Specifies backup retention period between 1 and 35 day(s). Default backup retention period is 1 day. Defaults to `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/rds_instance#backup_retention_period RdsInstance#backup_retention_period}
  */
  readonly backupRetentionPeriod?: number;
  /**
  * Parameter group associated with this instance's DB Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/rds_instance#cluster_parameter_group_name RdsInstance#cluster_parameter_group_name}
  */
  readonly clusterParameterGroupName?: string;
  /**
  * The name of the database to create when the DB instance is created. This is not applicable for update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/rds_instance#db_name RdsInstance#db_name}
  */
  readonly dbName?: string;
  /**
  * Name of DB subnet group. DB instance will be created in the VPC associated with the DB subnet group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/rds_instance#db_subnet_group_name RdsInstance#db_subnet_group_name}
  */
  readonly dbSubnetGroupName?: string;
  /**
  * If the DB instance should have deletion protection enabled.The database can't be deleted when this value is set to `true`. This setting is not applicable for document db cluster instance. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/rds_instance#deletion_protection RdsInstance#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to enable the RDS IAM authentication. It can only be set during instance creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/rds_instance#enable_iam_auth RdsInstance#enable_iam_auth}
  */
  readonly enableIamAuth?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to enable the RDS instance logging. This setting is not applicable for document db cluster instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/rds_instance#enable_logging RdsInstance#enable_logging}
  */
  readonly enableLogging?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to encrypt the RDS instance storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/rds_instance#encrypt_storage RdsInstance#encrypt_storage}
  */
  readonly encryptStorage?: boolean | cdktf.IResolvable;
  /**
  * The numerical index of database engine to use the for the RDS instance.
  * Should be one of:
  * 
  *    - `0` : MySQL
  *    - `1` : PostgreSQL
  *    - `2` : MsftSQL-Express
  *    - `3` : MsftSQL-Standard
  *    - `8` : Aurora-MySQL
  *    - `9` : Aurora-PostgreSQL
  *    - `10` : MsftSQL-Web
  *    - `13` : DocumentDB
  *    - `14` : MariaDB
  *    - `16` : Aurora
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/rds_instance#engine RdsInstance#engine}
  */
  readonly engine: number;
  /**
  * The database engine version to use the for the RDS instance.
  * If you don't know the available engine versions for your RDS instance, you can use the [AWS CLI](https://docs.aws.amazon.com/cli/latest/reference/rds/describe-db-engine-versions.html) to retrieve a list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/rds_instance#engine_version RdsInstance#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * Interval to capture metrics in real time for the operating system (OS) that your Amazon RDS DB instance runs on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/rds_instance#enhanced_monitoring RdsInstance#enhanced_monitoring}
  */
  readonly enhancedMonitoring?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/rds_instance#id RdsInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The IOPS (Input/Output Operations Per Second) value. Should be specified only if `storage_type` is either io1 or gp3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/rds_instance#iops RdsInstance#iops}
  */
  readonly iops?: number;
  /**
  * The globally unique identifier for the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/rds_instance#kms_key_id RdsInstance#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * The master password of the RDS instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/rds_instance#master_password RdsInstance#master_password}
  */
  readonly masterPassword?: string;
  /**
  * The master username of the RDS instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/rds_instance#master_username RdsInstance#master_username}
  */
  readonly masterUsername?: string;
  /**
  * Specifies if the RDS instance is multi-AZ.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/rds_instance#multi_az RdsInstance#multi_az}
  */
  readonly multiAz?: boolean | cdktf.IResolvable;
  /**
  * The short name of the RDS instance.  Duplo will add a prefix to the name.  You can retrieve the full name from the `identifier` attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/rds_instance#name RdsInstance#name}
  */
  readonly name: string;
  /**
  * A RDS parameter group name to apply to the RDS instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/rds_instance#parameter_group_name RdsInstance#parameter_group_name}
  */
  readonly parameterGroupName?: string;
  /**
  * The instance type of the RDS instance.
  * See AWS documentation for the [available instance types](https://aws.amazon.com/rds/instance-types/).Size should be set as db.serverless if rds instamce is created as serverless
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/rds_instance#size RdsInstance#size}
  */
  readonly size: string;
  /**
  * If the final snapshot should be taken. When set to true, the final snapshot will not be taken when the resource is deleted. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/rds_instance#skip_final_snapshot RdsInstance#skip_final_snapshot}
  */
  readonly skipFinalSnapshot?: boolean | cdktf.IResolvable;
  /**
  * A database snapshot to initialize the RDS instance from, at launch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/rds_instance#snapshot_id RdsInstance#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Storage type to be used for RDS instance storage.
  * 
  * 			|Storage Type  | Performance                        | Throughput            | Descritpion                                                                                                                                                                                                               |
  * 			|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
  * 			| gp2          | 3 IOPS/GB, up to 16K IOPS          | Up to 250 MB/s	    | General-purpose databases, small to medium workloads. 'gp2' provides SSD-based storage with burstable IOPS                                                                                                                |
  * 			| gp3          | 3K to 16K IOPS                     | Up to 1,000 MB/s      | Cost-effective, customizable performance for a wide range of workloads. gp3 offers a more advanced and cost-effective version of gp2. You can provision IOPS and throughput independently of storage size.                |
  * 			| io1          | Up to 256K IOPS                    | Up to 1,000 MB/s      | Mission-critical applications with high IOPS requirements. io1 provides provisioned IOPS, meaning you can define and guarantee IOPS performance levels independently of storage capacity.                                 |
  * 			| standard     | Variable, low IOPS                 | Low and unpredictable | Low-cost, infrequent access, small databases, or test environments. Magnetic storage is the oldest and least performant storage option. It is mainly used for low-cost applications with low performance demands.         |
  * 			| aurora       | Automatic scaling, up to 200K IOPS | Varies                | High-performance, fault-tolerant, distributed storage for Amazon Aurora databases. Aurora uses a unique distributed, fault-tolerant storage system that automatically replicates data across multiple Availability Zones. |
  * 			| aurora-iopt1 | Provisioned IOPS, similar to io1   | Varies                | Aurora databases needing guaranteed, high-performance IOPS. Aurora I/O-Optimized storage offers provisioned IOPS for Aurora clusters that require consistently high performance for critical workloads.                   |
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/rds_instance#storage_type RdsInstance#storage_type}
  */
  readonly storageType?: string;
  /**
  * Whether or not to store RDS details in the AWS secrets manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/rds_instance#store_details_in_secret_manager RdsInstance#store_details_in_secret_manager}
  */
  readonly storeDetailsInSecretManager?: boolean | cdktf.IResolvable;
  /**
  * The GUID of the tenant that the RDS instance will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/rds_instance#tenant_id RdsInstance#tenant_id}
  */
  readonly tenantId: string;
  /**
  * performance_insights block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/rds_instance#performance_insights RdsInstance#performance_insights}
  */
  readonly performanceInsights?: RdsInstancePerformanceInsights;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/rds_instance#timeouts RdsInstance#timeouts}
  */
  readonly timeouts?: RdsInstanceTimeouts;
  /**
  * v2_scaling_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/rds_instance#v2_scaling_configuration RdsInstance#v2_scaling_configuration}
  */
  readonly v2ScalingConfiguration?: RdsInstanceV2ScalingConfiguration;
}
export interface RdsInstancePerformanceInsights {
  /**
  * Turn on or off Performance Insights Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/rds_instance#enabled RdsInstance#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specify ARN for the KMS key to encrypt Performance Insights data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/rds_instance#kms_key_id RdsInstance#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Specify retention period in Days. Valid values are 7, 731 (2 years) or a multiple of 31. For Document DB retention period is 7 Defaults to `7`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/rds_instance#retention_period RdsInstance#retention_period}
  */
  readonly retentionPeriod?: number;
}

export function rdsInstancePerformanceInsightsToTerraform(struct?: RdsInstancePerformanceInsightsOutputReference | RdsInstancePerformanceInsights): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    retention_period: cdktf.numberToTerraform(struct!.retentionPeriod),
  }
}


export function rdsInstancePerformanceInsightsToHclTerraform(struct?: RdsInstancePerformanceInsightsOutputReference | RdsInstancePerformanceInsights): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention_period: {
      value: cdktf.numberToHclTerraform(struct!.retentionPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RdsInstancePerformanceInsightsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RdsInstancePerformanceInsights | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._retentionPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPeriod = this._retentionPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdsInstancePerformanceInsights | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._kmsKeyId = undefined;
      this._retentionPeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._kmsKeyId = value.kmsKeyId;
      this._retentionPeriod = value.retentionPeriod;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // retention_period - computed: false, optional: true, required: false
  private _retentionPeriod?: number; 
  public get retentionPeriod() {
    return this.getNumberAttribute('retention_period');
  }
  public set retentionPeriod(value: number) {
    this._retentionPeriod = value;
  }
  public resetRetentionPeriod() {
    this._retentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInput() {
    return this._retentionPeriod;
  }
}
export interface RdsInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/rds_instance#create RdsInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/rds_instance#delete RdsInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/rds_instance#update RdsInstance#update}
  */
  readonly update?: string;
}

export function rdsInstanceTimeoutsToTerraform(struct?: RdsInstanceTimeouts | cdktf.IResolvable): any {
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


export function rdsInstanceTimeoutsToHclTerraform(struct?: RdsInstanceTimeouts | cdktf.IResolvable): any {
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

export class RdsInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RdsInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RdsInstanceTimeouts | cdktf.IResolvable | undefined) {
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
export interface RdsInstanceV2ScalingConfiguration {
  /**
  * Specifies max scaling capacity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/rds_instance#max_capacity RdsInstance#max_capacity}
  */
  readonly maxCapacity: number;
  /**
  * Specifies min scaling capacity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/rds_instance#min_capacity RdsInstance#min_capacity}
  */
  readonly minCapacity: number;
}

export function rdsInstanceV2ScalingConfigurationToTerraform(struct?: RdsInstanceV2ScalingConfigurationOutputReference | RdsInstanceV2ScalingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_capacity: cdktf.numberToTerraform(struct!.maxCapacity),
    min_capacity: cdktf.numberToTerraform(struct!.minCapacity),
  }
}


export function rdsInstanceV2ScalingConfigurationToHclTerraform(struct?: RdsInstanceV2ScalingConfigurationOutputReference | RdsInstanceV2ScalingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_capacity: {
      value: cdktf.numberToHclTerraform(struct!.maxCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_capacity: {
      value: cdktf.numberToHclTerraform(struct!.minCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RdsInstanceV2ScalingConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RdsInstanceV2ScalingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCapacity = this._maxCapacity;
    }
    if (this._minCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCapacity = this._minCapacity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdsInstanceV2ScalingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxCapacity = undefined;
      this._minCapacity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxCapacity = value.maxCapacity;
      this._minCapacity = value.minCapacity;
    }
  }

  // max_capacity - computed: false, optional: false, required: true
  private _maxCapacity?: number; 
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }
  public set maxCapacity(value: number) {
    this._maxCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCapacityInput() {
    return this._maxCapacity;
  }

  // min_capacity - computed: false, optional: false, required: true
  private _minCapacity?: number; 
  public get minCapacity() {
    return this.getNumberAttribute('min_capacity');
  }
  public set minCapacity(value: number) {
    this._minCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minCapacityInput() {
    return this._minCapacity;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/rds_instance duplocloud_rds_instance}
*/
export class RdsInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_rds_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RdsInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RdsInstance to import
  * @param importFromId The id of the existing RdsInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/rds_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RdsInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_rds_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/rds_instance duplocloud_rds_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RdsInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: RdsInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_rds_instance',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.28'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allocatedStorage = config.allocatedStorage;
    this._autoMinorVersionUpgrade = config.autoMinorVersionUpgrade;
    this._availabilityZone = config.availabilityZone;
    this._backupRetentionPeriod = config.backupRetentionPeriod;
    this._clusterParameterGroupName = config.clusterParameterGroupName;
    this._dbName = config.dbName;
    this._dbSubnetGroupName = config.dbSubnetGroupName;
    this._deletionProtection = config.deletionProtection;
    this._enableIamAuth = config.enableIamAuth;
    this._enableLogging = config.enableLogging;
    this._encryptStorage = config.encryptStorage;
    this._engine = config.engine;
    this._engineVersion = config.engineVersion;
    this._enhancedMonitoring = config.enhancedMonitoring;
    this._id = config.id;
    this._iops = config.iops;
    this._kmsKeyId = config.kmsKeyId;
    this._masterPassword = config.masterPassword;
    this._masterUsername = config.masterUsername;
    this._multiAz = config.multiAz;
    this._name = config.name;
    this._parameterGroupName = config.parameterGroupName;
    this._size = config.size;
    this._skipFinalSnapshot = config.skipFinalSnapshot;
    this._snapshotId = config.snapshotId;
    this._storageType = config.storageType;
    this._storeDetailsInSecretManager = config.storeDetailsInSecretManager;
    this._tenantId = config.tenantId;
    this._performanceInsights.internalValue = config.performanceInsights;
    this._timeouts.internalValue = config.timeouts;
    this._v2ScalingConfiguration.internalValue = config.v2ScalingConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocated_storage - computed: true, optional: true, required: false
  private _allocatedStorage?: number; 
  public get allocatedStorage() {
    return this.getNumberAttribute('allocated_storage');
  }
  public set allocatedStorage(value: number) {
    this._allocatedStorage = value;
  }
  public resetAllocatedStorage() {
    this._allocatedStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedStorageInput() {
    return this._allocatedStorage;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_minor_version_upgrade - computed: true, optional: true, required: false
  private _autoMinorVersionUpgrade?: boolean | cdktf.IResolvable; 
  public get autoMinorVersionUpgrade() {
    return this.getBooleanAttribute('auto_minor_version_upgrade');
  }
  public set autoMinorVersionUpgrade(value: boolean | cdktf.IResolvable) {
    this._autoMinorVersionUpgrade = value;
  }
  public resetAutoMinorVersionUpgrade() {
    this._autoMinorVersionUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMinorVersionUpgradeInput() {
    return this._autoMinorVersionUpgrade;
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // backup_retention_period - computed: false, optional: true, required: false
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

  // cluster_identifier - computed: true, optional: false, required: false
  public get clusterIdentifier() {
    return this.getStringAttribute('cluster_identifier');
  }

  // cluster_parameter_group_name - computed: true, optional: true, required: false
  private _clusterParameterGroupName?: string; 
  public get clusterParameterGroupName() {
    return this.getStringAttribute('cluster_parameter_group_name');
  }
  public set clusterParameterGroupName(value: string) {
    this._clusterParameterGroupName = value;
  }
  public resetClusterParameterGroupName() {
    this._clusterParameterGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterParameterGroupNameInput() {
    return this._clusterParameterGroupName;
  }

  // db_name - computed: true, optional: true, required: false
  private _dbName?: string; 
  public get dbName() {
    return this.getStringAttribute('db_name');
  }
  public set dbName(value: string) {
    this._dbName = value;
  }
  public resetDbName() {
    this._dbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNameInput() {
    return this._dbName;
  }

  // db_subnet_group_name - computed: true, optional: true, required: false
  private _dbSubnetGroupName?: string; 
  public get dbSubnetGroupName() {
    return this.getStringAttribute('db_subnet_group_name');
  }
  public set dbSubnetGroupName(value: string) {
    this._dbSubnetGroupName = value;
  }
  public resetDbSubnetGroupName() {
    this._dbSubnetGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSubnetGroupNameInput() {
    return this._dbSubnetGroupName;
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // enable_iam_auth - computed: true, optional: true, required: false
  private _enableIamAuth?: boolean | cdktf.IResolvable; 
  public get enableIamAuth() {
    return this.getBooleanAttribute('enable_iam_auth');
  }
  public set enableIamAuth(value: boolean | cdktf.IResolvable) {
    this._enableIamAuth = value;
  }
  public resetEnableIamAuth() {
    this._enableIamAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIamAuthInput() {
    return this._enableIamAuth;
  }

  // enable_logging - computed: true, optional: true, required: false
  private _enableLogging?: boolean | cdktf.IResolvable; 
  public get enableLogging() {
    return this.getBooleanAttribute('enable_logging');
  }
  public set enableLogging(value: boolean | cdktf.IResolvable) {
    this._enableLogging = value;
  }
  public resetEnableLogging() {
    this._enableLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLoggingInput() {
    return this._enableLogging;
  }

  // encrypt_storage - computed: false, optional: true, required: false
  private _encryptStorage?: boolean | cdktf.IResolvable; 
  public get encryptStorage() {
    return this.getBooleanAttribute('encrypt_storage');
  }
  public set encryptStorage(value: boolean | cdktf.IResolvable) {
    this._encryptStorage = value;
  }
  public resetEncryptStorage() {
    this._encryptStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptStorageInput() {
    return this._encryptStorage;
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // engine - computed: false, optional: false, required: true
  private _engine?: number; 
  public get engine() {
    return this.getNumberAttribute('engine');
  }
  public set engine(value: number) {
    this._engine = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
  }

  // engine_version - computed: true, optional: true, required: false
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  public resetEngineVersion() {
    this._engineVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
  }

  // enhanced_monitoring - computed: false, optional: true, required: false
  private _enhancedMonitoring?: number; 
  public get enhancedMonitoring() {
    return this.getNumberAttribute('enhanced_monitoring');
  }
  public set enhancedMonitoring(value: number) {
    this._enhancedMonitoring = value;
  }
  public resetEnhancedMonitoring() {
    this._enhancedMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedMonitoringInput() {
    return this._enhancedMonitoring;
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
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

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }

  // instance_status - computed: true, optional: false, required: false
  public get instanceStatus() {
    return this.getStringAttribute('instance_status');
  }

  // iops - computed: true, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // master_password - computed: false, optional: true, required: false
  private _masterPassword?: string; 
  public get masterPassword() {
    return this.getStringAttribute('master_password');
  }
  public set masterPassword(value: string) {
    this._masterPassword = value;
  }
  public resetMasterPassword() {
    this._masterPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterPasswordInput() {
    return this._masterPassword;
  }

  // master_username - computed: true, optional: true, required: false
  private _masterUsername?: string; 
  public get masterUsername() {
    return this.getStringAttribute('master_username');
  }
  public set masterUsername(value: string) {
    this._masterUsername = value;
  }
  public resetMasterUsername() {
    this._masterUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterUsernameInput() {
    return this._masterUsername;
  }

  // multi_az - computed: false, optional: true, required: false
  private _multiAz?: boolean | cdktf.IResolvable; 
  public get multiAz() {
    return this.getBooleanAttribute('multi_az');
  }
  public set multiAz(value: boolean | cdktf.IResolvable) {
    this._multiAz = value;
  }
  public resetMultiAz() {
    this._multiAz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiAzInput() {
    return this._multiAz;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // parameter_group_name - computed: false, optional: true, required: false
  private _parameterGroupName?: string; 
  public get parameterGroupName() {
    return this.getStringAttribute('parameter_group_name');
  }
  public set parameterGroupName(value: string) {
    this._parameterGroupName = value;
  }
  public resetParameterGroupName() {
    this._parameterGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterGroupNameInput() {
    return this._parameterGroupName;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // size - computed: false, optional: false, required: true
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // skip_final_snapshot - computed: false, optional: true, required: false
  private _skipFinalSnapshot?: boolean | cdktf.IResolvable; 
  public get skipFinalSnapshot() {
    return this.getBooleanAttribute('skip_final_snapshot');
  }
  public set skipFinalSnapshot(value: boolean | cdktf.IResolvable) {
    this._skipFinalSnapshot = value;
  }
  public resetSkipFinalSnapshot() {
    this._skipFinalSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipFinalSnapshotInput() {
    return this._skipFinalSnapshot;
  }

  // snapshot_id - computed: false, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }

  // storage_type - computed: true, optional: true, required: false
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // store_details_in_secret_manager - computed: false, optional: true, required: false
  private _storeDetailsInSecretManager?: boolean | cdktf.IResolvable; 
  public get storeDetailsInSecretManager() {
    return this.getBooleanAttribute('store_details_in_secret_manager');
  }
  public set storeDetailsInSecretManager(value: boolean | cdktf.IResolvable) {
    this._storeDetailsInSecretManager = value;
  }
  public resetStoreDetailsInSecretManager() {
    this._storeDetailsInSecretManager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeDetailsInSecretManagerInput() {
    return this._storeDetailsInSecretManager;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // performance_insights - computed: false, optional: true, required: false
  private _performanceInsights = new RdsInstancePerformanceInsightsOutputReference(this, "performance_insights");
  public get performanceInsights() {
    return this._performanceInsights;
  }
  public putPerformanceInsights(value: RdsInstancePerformanceInsights) {
    this._performanceInsights.internalValue = value;
  }
  public resetPerformanceInsights() {
    this._performanceInsights.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceInsightsInput() {
    return this._performanceInsights.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RdsInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RdsInstanceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // v2_scaling_configuration - computed: false, optional: true, required: false
  private _v2ScalingConfiguration = new RdsInstanceV2ScalingConfigurationOutputReference(this, "v2_scaling_configuration");
  public get v2ScalingConfiguration() {
    return this._v2ScalingConfiguration;
  }
  public putV2ScalingConfiguration(value: RdsInstanceV2ScalingConfiguration) {
    this._v2ScalingConfiguration.internalValue = value;
  }
  public resetV2ScalingConfiguration() {
    this._v2ScalingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2ScalingConfigurationInput() {
    return this._v2ScalingConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allocated_storage: cdktf.numberToTerraform(this._allocatedStorage),
      auto_minor_version_upgrade: cdktf.booleanToTerraform(this._autoMinorVersionUpgrade),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      backup_retention_period: cdktf.numberToTerraform(this._backupRetentionPeriod),
      cluster_parameter_group_name: cdktf.stringToTerraform(this._clusterParameterGroupName),
      db_name: cdktf.stringToTerraform(this._dbName),
      db_subnet_group_name: cdktf.stringToTerraform(this._dbSubnetGroupName),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      enable_iam_auth: cdktf.booleanToTerraform(this._enableIamAuth),
      enable_logging: cdktf.booleanToTerraform(this._enableLogging),
      encrypt_storage: cdktf.booleanToTerraform(this._encryptStorage),
      engine: cdktf.numberToTerraform(this._engine),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      enhanced_monitoring: cdktf.numberToTerraform(this._enhancedMonitoring),
      id: cdktf.stringToTerraform(this._id),
      iops: cdktf.numberToTerraform(this._iops),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      master_password: cdktf.stringToTerraform(this._masterPassword),
      master_username: cdktf.stringToTerraform(this._masterUsername),
      multi_az: cdktf.booleanToTerraform(this._multiAz),
      name: cdktf.stringToTerraform(this._name),
      parameter_group_name: cdktf.stringToTerraform(this._parameterGroupName),
      size: cdktf.stringToTerraform(this._size),
      skip_final_snapshot: cdktf.booleanToTerraform(this._skipFinalSnapshot),
      snapshot_id: cdktf.stringToTerraform(this._snapshotId),
      storage_type: cdktf.stringToTerraform(this._storageType),
      store_details_in_secret_manager: cdktf.booleanToTerraform(this._storeDetailsInSecretManager),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      performance_insights: rdsInstancePerformanceInsightsToTerraform(this._performanceInsights.internalValue),
      timeouts: rdsInstanceTimeoutsToTerraform(this._timeouts.internalValue),
      v2_scaling_configuration: rdsInstanceV2ScalingConfigurationToTerraform(this._v2ScalingConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allocated_storage: {
        value: cdktf.numberToHclTerraform(this._allocatedStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_minor_version_upgrade: {
        value: cdktf.booleanToHclTerraform(this._autoMinorVersionUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
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
      cluster_parameter_group_name: {
        value: cdktf.stringToHclTerraform(this._clusterParameterGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_name: {
        value: cdktf.stringToHclTerraform(this._dbName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_subnet_group_name: {
        value: cdktf.stringToHclTerraform(this._dbSubnetGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_iam_auth: {
        value: cdktf.booleanToHclTerraform(this._enableIamAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_logging: {
        value: cdktf.booleanToHclTerraform(this._enableLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encrypt_storage: {
        value: cdktf.booleanToHclTerraform(this._encryptStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      engine: {
        value: cdktf.numberToHclTerraform(this._engine),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_version: {
        value: cdktf.stringToHclTerraform(this._engineVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enhanced_monitoring: {
        value: cdktf.numberToHclTerraform(this._enhancedMonitoring),
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
      iops: {
        value: cdktf.numberToHclTerraform(this._iops),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      kms_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_password: {
        value: cdktf.stringToHclTerraform(this._masterPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_username: {
        value: cdktf.stringToHclTerraform(this._masterUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi_az: {
        value: cdktf.booleanToHclTerraform(this._multiAz),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameter_group_name: {
        value: cdktf.stringToHclTerraform(this._parameterGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.stringToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_final_snapshot: {
        value: cdktf.booleanToHclTerraform(this._skipFinalSnapshot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      snapshot_id: {
        value: cdktf.stringToHclTerraform(this._snapshotId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_type: {
        value: cdktf.stringToHclTerraform(this._storageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      store_details_in_secret_manager: {
        value: cdktf.booleanToHclTerraform(this._storeDetailsInSecretManager),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      performance_insights: {
        value: rdsInstancePerformanceInsightsToHclTerraform(this._performanceInsights.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RdsInstancePerformanceInsightsList",
      },
      timeouts: {
        value: rdsInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RdsInstanceTimeouts",
      },
      v2_scaling_configuration: {
        value: rdsInstanceV2ScalingConfigurationToHclTerraform(this._v2ScalingConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RdsInstanceV2ScalingConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
