// https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MdbMysqlClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Deprecated field. You can safely remove this option. There is no need to recreate host if assign_public_ip is changed.
  * Regenerate hosts after changing the assign_public_ip parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#allow_regeneration_host MdbMysqlCluster#allow_regeneration_host}
  */
  readonly allowRegenerationHost?: boolean | cdktf.IResolvable;
  /**
  * The period in days during which backups are stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#backup_retain_period_days MdbMysqlCluster#backup_retain_period_days}
  */
  readonly backupRetainPeriodDays?: number;
  /**
  * The `true` value means that resource is protected from accidental deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#deletion_protection MdbMysqlCluster#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#description MdbMysqlCluster#description}
  */
  readonly description?: string;
  /**
  * ID of the KMS key for cluster disk encryption. Restoring without an encryption key will disable encryption if any exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#disk_encryption_key_id MdbMysqlCluster#disk_encryption_key_id}
  */
  readonly diskEncryptionKeyId?: string;
  /**
  * Deployment environment of the MySQL cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#environment MdbMysqlCluster#environment}
  */
  readonly environment: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#folder_id MdbMysqlCluster#folder_id}
  */
  readonly folderId?: string;
  /**
  * A list of host group IDs to place VMs of the cluster on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#host_group_ids MdbMysqlCluster#host_group_ids}
  */
  readonly hostGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#id MdbMysqlCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of key/value label pairs which assigned to resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#labels MdbMysqlCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * MySQL cluster config block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#mysql_config MdbMysqlCluster#mysql_config}
  */
  readonly mysqlConfig?: { [key: string]: string };
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#name MdbMysqlCluster#name}
  */
  readonly name: string;
  /**
  * The `VPC Network ID` of subnets which resource attached to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#network_id MdbMysqlCluster#network_id}
  */
  readonly networkId: string;
  /**
  * The list of security groups applied to resource or their components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#security_group_ids MdbMysqlCluster#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Version of the MySQL cluster. (allowed versions are: 5.7, 8.0, 8.4).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#version MdbMysqlCluster#version}
  */
  readonly version: string;
  /**
  * access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#access MdbMysqlCluster#access}
  */
  readonly access?: MdbMysqlClusterAccess;
  /**
  * backup_window_start block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#backup_window_start MdbMysqlCluster#backup_window_start}
  */
  readonly backupWindowStart?: MdbMysqlClusterBackupWindowStart;
  /**
  * database block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#database MdbMysqlCluster#database}
  */
  readonly database?: MdbMysqlClusterDatabase[] | cdktf.IResolvable;
  /**
  * disk_size_autoscaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#disk_size_autoscaling MdbMysqlCluster#disk_size_autoscaling}
  */
  readonly diskSizeAutoscaling?: MdbMysqlClusterDiskSizeAutoscaling;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#host MdbMysqlCluster#host}
  */
  readonly host: MdbMysqlClusterHost[] | cdktf.IResolvable;
  /**
  * maintenance_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#maintenance_window MdbMysqlCluster#maintenance_window}
  */
  readonly maintenanceWindow?: MdbMysqlClusterMaintenanceWindow;
  /**
  * performance_diagnostics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#performance_diagnostics MdbMysqlCluster#performance_diagnostics}
  */
  readonly performanceDiagnostics?: MdbMysqlClusterPerformanceDiagnostics;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#resources MdbMysqlCluster#resources}
  */
  readonly resources: MdbMysqlClusterResources;
  /**
  * restore block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#restore MdbMysqlCluster#restore}
  */
  readonly restore?: MdbMysqlClusterRestore;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#timeouts MdbMysqlCluster#timeouts}
  */
  readonly timeouts?: MdbMysqlClusterTimeouts;
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#user MdbMysqlCluster#user}
  */
  readonly user?: MdbMysqlClusterUser[] | cdktf.IResolvable;
}
export interface MdbMysqlClusterAccess {
  /**
  * Allow access for [Yandex DataLens](https://yandex.cloud/services/datalens).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#data_lens MdbMysqlCluster#data_lens}
  */
  readonly dataLens?: boolean | cdktf.IResolvable;
  /**
  * Allow access for [DataTransfer](https://yandex.cloud/services/data-transfer).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#data_transfer MdbMysqlCluster#data_transfer}
  */
  readonly dataTransfer?: boolean | cdktf.IResolvable;
  /**
  * Allows access for [SQL queries in the management console](https://yandex.cloud/docs/managed-mysql/operations/web-sql-query).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#web_sql MdbMysqlCluster#web_sql}
  */
  readonly webSql?: boolean | cdktf.IResolvable;
}

export function mdbMysqlClusterAccessToTerraform(struct?: MdbMysqlClusterAccessOutputReference | MdbMysqlClusterAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_lens: cdktf.booleanToTerraform(struct!.dataLens),
    data_transfer: cdktf.booleanToTerraform(struct!.dataTransfer),
    web_sql: cdktf.booleanToTerraform(struct!.webSql),
  }
}


export function mdbMysqlClusterAccessToHclTerraform(struct?: MdbMysqlClusterAccessOutputReference | MdbMysqlClusterAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_lens: {
      value: cdktf.booleanToHclTerraform(struct!.dataLens),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    data_transfer: {
      value: cdktf.booleanToHclTerraform(struct!.dataTransfer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    web_sql: {
      value: cdktf.booleanToHclTerraform(struct!.webSql),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbMysqlClusterAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbMysqlClusterAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataLens !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLens = this._dataLens;
    }
    if (this._dataTransfer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataTransfer = this._dataTransfer;
    }
    if (this._webSql !== undefined) {
      hasAnyValues = true;
      internalValueResult.webSql = this._webSql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbMysqlClusterAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataLens = undefined;
      this._dataTransfer = undefined;
      this._webSql = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataLens = value.dataLens;
      this._dataTransfer = value.dataTransfer;
      this._webSql = value.webSql;
    }
  }

  // data_lens - computed: false, optional: true, required: false
  private _dataLens?: boolean | cdktf.IResolvable; 
  public get dataLens() {
    return this.getBooleanAttribute('data_lens');
  }
  public set dataLens(value: boolean | cdktf.IResolvable) {
    this._dataLens = value;
  }
  public resetDataLens() {
    this._dataLens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLensInput() {
    return this._dataLens;
  }

  // data_transfer - computed: false, optional: true, required: false
  private _dataTransfer?: boolean | cdktf.IResolvable; 
  public get dataTransfer() {
    return this.getBooleanAttribute('data_transfer');
  }
  public set dataTransfer(value: boolean | cdktf.IResolvable) {
    this._dataTransfer = value;
  }
  public resetDataTransfer() {
    this._dataTransfer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTransferInput() {
    return this._dataTransfer;
  }

  // web_sql - computed: false, optional: true, required: false
  private _webSql?: boolean | cdktf.IResolvable; 
  public get webSql() {
    return this.getBooleanAttribute('web_sql');
  }
  public set webSql(value: boolean | cdktf.IResolvable) {
    this._webSql = value;
  }
  public resetWebSql() {
    this._webSql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webSqlInput() {
    return this._webSql;
  }
}
export interface MdbMysqlClusterBackupWindowStart {
  /**
  * The hour at which backup will be started (UTC).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#hours MdbMysqlCluster#hours}
  */
  readonly hours?: number;
  /**
  * The minute at which backup will be started (UTC).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#minutes MdbMysqlCluster#minutes}
  */
  readonly minutes?: number;
}

export function mdbMysqlClusterBackupWindowStartToTerraform(struct?: MdbMysqlClusterBackupWindowStartOutputReference | MdbMysqlClusterBackupWindowStart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
  }
}


export function mdbMysqlClusterBackupWindowStartToHclTerraform(struct?: MdbMysqlClusterBackupWindowStartOutputReference | MdbMysqlClusterBackupWindowStart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbMysqlClusterBackupWindowStartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbMysqlClusterBackupWindowStart | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbMysqlClusterBackupWindowStart | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hours = undefined;
      this._minutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hours = value.hours;
      this._minutes = value.minutes;
    }
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }
}
export interface MdbMysqlClusterDatabase {
  /**
  * The name of the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#name MdbMysqlCluster#name}
  */
  readonly name: string;
}

export function mdbMysqlClusterDatabaseToTerraform(struct?: MdbMysqlClusterDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function mdbMysqlClusterDatabaseToHclTerraform(struct?: MdbMysqlClusterDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbMysqlClusterDatabaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MdbMysqlClusterDatabase | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbMysqlClusterDatabase | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class MdbMysqlClusterDatabaseList extends cdktf.ComplexList {
  public internalValue? : MdbMysqlClusterDatabase[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MdbMysqlClusterDatabaseOutputReference {
    return new MdbMysqlClusterDatabaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MdbMysqlClusterDiskSizeAutoscaling {
  /**
  * Limit of disk size after autoscaling (GiB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#disk_size_limit MdbMysqlCluster#disk_size_limit}
  */
  readonly diskSizeLimit: number;
  /**
  * Immediate autoscaling disk usage (percent).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#emergency_usage_threshold MdbMysqlCluster#emergency_usage_threshold}
  */
  readonly emergencyUsageThreshold?: number;
  /**
  * Maintenance window autoscaling disk usage (percent).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#planned_usage_threshold MdbMysqlCluster#planned_usage_threshold}
  */
  readonly plannedUsageThreshold?: number;
}

export function mdbMysqlClusterDiskSizeAutoscalingToTerraform(struct?: MdbMysqlClusterDiskSizeAutoscalingOutputReference | MdbMysqlClusterDiskSizeAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size_limit: cdktf.numberToTerraform(struct!.diskSizeLimit),
    emergency_usage_threshold: cdktf.numberToTerraform(struct!.emergencyUsageThreshold),
    planned_usage_threshold: cdktf.numberToTerraform(struct!.plannedUsageThreshold),
  }
}


export function mdbMysqlClusterDiskSizeAutoscalingToHclTerraform(struct?: MdbMysqlClusterDiskSizeAutoscalingOutputReference | MdbMysqlClusterDiskSizeAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_size_limit: {
      value: cdktf.numberToHclTerraform(struct!.diskSizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    emergency_usage_threshold: {
      value: cdktf.numberToHclTerraform(struct!.emergencyUsageThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    planned_usage_threshold: {
      value: cdktf.numberToHclTerraform(struct!.plannedUsageThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbMysqlClusterDiskSizeAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbMysqlClusterDiskSizeAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeLimit = this._diskSizeLimit;
    }
    if (this._emergencyUsageThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.emergencyUsageThreshold = this._emergencyUsageThreshold;
    }
    if (this._plannedUsageThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.plannedUsageThreshold = this._plannedUsageThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbMysqlClusterDiskSizeAutoscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskSizeLimit = undefined;
      this._emergencyUsageThreshold = undefined;
      this._plannedUsageThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskSizeLimit = value.diskSizeLimit;
      this._emergencyUsageThreshold = value.emergencyUsageThreshold;
      this._plannedUsageThreshold = value.plannedUsageThreshold;
    }
  }

  // disk_size_limit - computed: false, optional: false, required: true
  private _diskSizeLimit?: number; 
  public get diskSizeLimit() {
    return this.getNumberAttribute('disk_size_limit');
  }
  public set diskSizeLimit(value: number) {
    this._diskSizeLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeLimitInput() {
    return this._diskSizeLimit;
  }

  // emergency_usage_threshold - computed: false, optional: true, required: false
  private _emergencyUsageThreshold?: number; 
  public get emergencyUsageThreshold() {
    return this.getNumberAttribute('emergency_usage_threshold');
  }
  public set emergencyUsageThreshold(value: number) {
    this._emergencyUsageThreshold = value;
  }
  public resetEmergencyUsageThreshold() {
    this._emergencyUsageThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emergencyUsageThresholdInput() {
    return this._emergencyUsageThreshold;
  }

  // planned_usage_threshold - computed: false, optional: true, required: false
  private _plannedUsageThreshold?: number; 
  public get plannedUsageThreshold() {
    return this.getNumberAttribute('planned_usage_threshold');
  }
  public set plannedUsageThreshold(value: number) {
    this._plannedUsageThreshold = value;
  }
  public resetPlannedUsageThreshold() {
    this._plannedUsageThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plannedUsageThresholdInput() {
    return this._plannedUsageThreshold;
  }
}
export interface MdbMysqlClusterHost {
  /**
  * Sets whether the host should get a public IP address. It can be changed on the fly only when `name` is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#assign_public_ip MdbMysqlCluster#assign_public_ip}
  */
  readonly assignPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Host backup priority. Value is between 0 and 100, default is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#backup_priority MdbMysqlCluster#backup_priority}
  */
  readonly backupPriority?: number;
  /**
  * Host state name. It should be set for all hosts or unset for all hosts. This field can be used by another host, to select which host will be its replication source. Please refer to `replication_source_name` parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#name MdbMysqlCluster#name}
  */
  readonly name?: string;
  /**
  * Host master promotion priority. Value is between 0 and 100, default is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#priority MdbMysqlCluster#priority}
  */
  readonly priority?: number;
  /**
  * Host replication source name points to host's `name` from which this host should replicate. When not set then host in HA group. It works only when `name` is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#replication_source_name MdbMysqlCluster#replication_source_name}
  */
  readonly replicationSourceName?: string;
  /**
  * The ID of the subnet, to which the host belongs. The subnet must be a part of the network to which the cluster belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#subnet_id MdbMysqlCluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * The [availability zone](https://yandex.cloud/docs/overview/concepts/geo-scope) where resource is located. If it is not provided, the default provider zone will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#zone MdbMysqlCluster#zone}
  */
  readonly zone: string;
}

export function mdbMysqlClusterHostToTerraform(struct?: MdbMysqlClusterHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_public_ip: cdktf.booleanToTerraform(struct!.assignPublicIp),
    backup_priority: cdktf.numberToTerraform(struct!.backupPriority),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    replication_source_name: cdktf.stringToTerraform(struct!.replicationSourceName),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function mdbMysqlClusterHostToHclTerraform(struct?: MdbMysqlClusterHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.assignPublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    backup_priority: {
      value: cdktf.numberToHclTerraform(struct!.backupPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replication_source_name: {
      value: cdktf.stringToHclTerraform(struct!.replicationSourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbMysqlClusterHostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MdbMysqlClusterHost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignPublicIp = this._assignPublicIp;
    }
    if (this._backupPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupPriority = this._backupPriority;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._replicationSourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationSourceName = this._replicationSourceName;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbMysqlClusterHost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignPublicIp = undefined;
      this._backupPriority = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._replicationSourceName = undefined;
      this._subnetId = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assignPublicIp = value.assignPublicIp;
      this._backupPriority = value.backupPriority;
      this._name = value.name;
      this._priority = value.priority;
      this._replicationSourceName = value.replicationSourceName;
      this._subnetId = value.subnetId;
      this._zone = value.zone;
    }
  }

  // assign_public_ip - computed: false, optional: true, required: false
  private _assignPublicIp?: boolean | cdktf.IResolvable; 
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
  }
  public set assignPublicIp(value: boolean | cdktf.IResolvable) {
    this._assignPublicIp = value;
  }
  public resetAssignPublicIp() {
    this._assignPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignPublicIpInput() {
    return this._assignPublicIp;
  }

  // backup_priority - computed: false, optional: true, required: false
  private _backupPriority?: number; 
  public get backupPriority() {
    return this.getNumberAttribute('backup_priority');
  }
  public set backupPriority(value: number) {
    this._backupPriority = value;
  }
  public resetBackupPriority() {
    this._backupPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPriorityInput() {
    return this._backupPriority;
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // replication_source - computed: true, optional: false, required: false
  public get replicationSource() {
    return this.getStringAttribute('replication_source');
  }

  // replication_source_name - computed: false, optional: true, required: false
  private _replicationSourceName?: string; 
  public get replicationSourceName() {
    return this.getStringAttribute('replication_source_name');
  }
  public set replicationSourceName(value: string) {
    this._replicationSourceName = value;
  }
  public resetReplicationSourceName() {
    this._replicationSourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationSourceNameInput() {
    return this._replicationSourceName;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}

export class MdbMysqlClusterHostList extends cdktf.ComplexList {
  public internalValue? : MdbMysqlClusterHost[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MdbMysqlClusterHostOutputReference {
    return new MdbMysqlClusterHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MdbMysqlClusterMaintenanceWindow {
  /**
  * Day of the week (in `DDD` format). Allowed values: `MON`, `TUE`, `WED`, `THU`, `FRI`, `SAT`, `SUN`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#day MdbMysqlCluster#day}
  */
  readonly day?: string;
  /**
  * Hour of the day in UTC (in `HH` format). Allowed value is between 1 and 24.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#hour MdbMysqlCluster#hour}
  */
  readonly hour?: number;
  /**
  * Type of maintenance window. Can be either `ANYTIME` or `WEEKLY`. A day and hour of window need to be specified with weekly window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#type MdbMysqlCluster#type}
  */
  readonly type: string;
}

export function mdbMysqlClusterMaintenanceWindowToTerraform(struct?: MdbMysqlClusterMaintenanceWindowOutputReference | MdbMysqlClusterMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.stringToTerraform(struct!.day),
    hour: cdktf.numberToTerraform(struct!.hour),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function mdbMysqlClusterMaintenanceWindowToHclTerraform(struct?: MdbMysqlClusterMaintenanceWindowOutputReference | MdbMysqlClusterMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.stringToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hour: {
      value: cdktf.numberToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbMysqlClusterMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbMysqlClusterMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbMysqlClusterMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._day = undefined;
      this._hour = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._day = value.day;
      this._hour = value.hour;
      this._type = value.type;
    }
  }

  // day - computed: false, optional: true, required: false
  private _day?: string; 
  public get day() {
    return this.getStringAttribute('day');
  }
  public set day(value: string) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // hour - computed: false, optional: true, required: false
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  public resetHour() {
    this._hour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface MdbMysqlClusterPerformanceDiagnostics {
  /**
  * Enable performance diagnostics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#enabled MdbMysqlCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Interval (in seconds) for my_stat_activity sampling Acceptable values are 1 to 86400, inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#sessions_sampling_interval MdbMysqlCluster#sessions_sampling_interval}
  */
  readonly sessionsSamplingInterval: number;
  /**
  * Interval (in seconds) for my_stat_statements sampling Acceptable values are 1 to 86400, inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#statements_sampling_interval MdbMysqlCluster#statements_sampling_interval}
  */
  readonly statementsSamplingInterval: number;
}

export function mdbMysqlClusterPerformanceDiagnosticsToTerraform(struct?: MdbMysqlClusterPerformanceDiagnosticsOutputReference | MdbMysqlClusterPerformanceDiagnostics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    sessions_sampling_interval: cdktf.numberToTerraform(struct!.sessionsSamplingInterval),
    statements_sampling_interval: cdktf.numberToTerraform(struct!.statementsSamplingInterval),
  }
}


export function mdbMysqlClusterPerformanceDiagnosticsToHclTerraform(struct?: MdbMysqlClusterPerformanceDiagnosticsOutputReference | MdbMysqlClusterPerformanceDiagnostics): any {
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
    sessions_sampling_interval: {
      value: cdktf.numberToHclTerraform(struct!.sessionsSamplingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    statements_sampling_interval: {
      value: cdktf.numberToHclTerraform(struct!.statementsSamplingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbMysqlClusterPerformanceDiagnosticsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbMysqlClusterPerformanceDiagnostics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._sessionsSamplingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionsSamplingInterval = this._sessionsSamplingInterval;
    }
    if (this._statementsSamplingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.statementsSamplingInterval = this._statementsSamplingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbMysqlClusterPerformanceDiagnostics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._sessionsSamplingInterval = undefined;
      this._statementsSamplingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._sessionsSamplingInterval = value.sessionsSamplingInterval;
      this._statementsSamplingInterval = value.statementsSamplingInterval;
    }
  }

  // enabled - computed: true, optional: true, required: false
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

  // sessions_sampling_interval - computed: false, optional: false, required: true
  private _sessionsSamplingInterval?: number; 
  public get sessionsSamplingInterval() {
    return this.getNumberAttribute('sessions_sampling_interval');
  }
  public set sessionsSamplingInterval(value: number) {
    this._sessionsSamplingInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionsSamplingIntervalInput() {
    return this._sessionsSamplingInterval;
  }

  // statements_sampling_interval - computed: false, optional: false, required: true
  private _statementsSamplingInterval?: number; 
  public get statementsSamplingInterval() {
    return this.getNumberAttribute('statements_sampling_interval');
  }
  public set statementsSamplingInterval(value: number) {
    this._statementsSamplingInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statementsSamplingIntervalInput() {
    return this._statementsSamplingInterval;
  }
}
export interface MdbMysqlClusterResources {
  /**
  * Volume of the storage available to a MySQL host, in gigabytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#disk_size MdbMysqlCluster#disk_size}
  */
  readonly diskSize: number;
  /**
  * Type of the storage of MySQL hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#disk_type_id MdbMysqlCluster#disk_type_id}
  */
  readonly diskTypeId: string;
  /**
  * The ID of the preset for computational resources available to a MySQL host (CPU, memory etc.). For more information, see [the official documentation](https://yandex.cloud/docs/managed-mysql/concepts/instance-types).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#resource_preset_id MdbMysqlCluster#resource_preset_id}
  */
  readonly resourcePresetId: string;
}

export function mdbMysqlClusterResourcesToTerraform(struct?: MdbMysqlClusterResourcesOutputReference | MdbMysqlClusterResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type_id: cdktf.stringToTerraform(struct!.diskTypeId),
    resource_preset_id: cdktf.stringToTerraform(struct!.resourcePresetId),
  }
}


export function mdbMysqlClusterResourcesToHclTerraform(struct?: MdbMysqlClusterResourcesOutputReference | MdbMysqlClusterResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type_id: {
      value: cdktf.stringToHclTerraform(struct!.diskTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_preset_id: {
      value: cdktf.stringToHclTerraform(struct!.resourcePresetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbMysqlClusterResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbMysqlClusterResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskTypeId = this._diskTypeId;
    }
    if (this._resourcePresetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePresetId = this._resourcePresetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbMysqlClusterResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskSize = undefined;
      this._diskTypeId = undefined;
      this._resourcePresetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskSize = value.diskSize;
      this._diskTypeId = value.diskTypeId;
      this._resourcePresetId = value.resourcePresetId;
    }
  }

  // disk_size - computed: false, optional: false, required: true
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type_id - computed: false, optional: false, required: true
  private _diskTypeId?: string; 
  public get diskTypeId() {
    return this.getStringAttribute('disk_type_id');
  }
  public set diskTypeId(value: string) {
    this._diskTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeIdInput() {
    return this._diskTypeId;
  }

  // resource_preset_id - computed: false, optional: false, required: true
  private _resourcePresetId?: string; 
  public get resourcePresetId() {
    return this.getStringAttribute('resource_preset_id');
  }
  public set resourcePresetId(value: string) {
    this._resourcePresetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePresetIdInput() {
    return this._resourcePresetId;
  }
}
export interface MdbMysqlClusterRestore {
  /**
  * Backup ID. The cluster will be created from the specified backup. [How to get a list of MySQL backups](https://yandex.cloud/docs/managed-mysql/operations/cluster-backups).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#backup_id MdbMysqlCluster#backup_id}
  */
  readonly backupId: string;
  /**
  * Timestamp of the moment to which the MySQL cluster should be restored. (Format: `2006-01-02T15:04:05` - UTC). When not set, current time is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#time MdbMysqlCluster#time}
  */
  readonly time?: string;
}

export function mdbMysqlClusterRestoreToTerraform(struct?: MdbMysqlClusterRestoreOutputReference | MdbMysqlClusterRestore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_id: cdktf.stringToTerraform(struct!.backupId),
    time: cdktf.stringToTerraform(struct!.time),
  }
}


export function mdbMysqlClusterRestoreToHclTerraform(struct?: MdbMysqlClusterRestoreOutputReference | MdbMysqlClusterRestore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_id: {
      value: cdktf.stringToHclTerraform(struct!.backupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time: {
      value: cdktf.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbMysqlClusterRestoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbMysqlClusterRestore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupId = this._backupId;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbMysqlClusterRestore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupId = undefined;
      this._time = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupId = value.backupId;
      this._time = value.time;
    }
  }

  // backup_id - computed: false, optional: false, required: true
  private _backupId?: string; 
  public get backupId() {
    return this.getStringAttribute('backup_id');
  }
  public set backupId(value: string) {
    this._backupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupIdInput() {
    return this._backupId;
  }

  // time - computed: false, optional: true, required: false
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}
export interface MdbMysqlClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#create MdbMysqlCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#delete MdbMysqlCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#update MdbMysqlCluster#update}
  */
  readonly update?: string;
}

export function mdbMysqlClusterTimeoutsToTerraform(struct?: MdbMysqlClusterTimeouts | cdktf.IResolvable): any {
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


export function mdbMysqlClusterTimeoutsToHclTerraform(struct?: MdbMysqlClusterTimeouts | cdktf.IResolvable): any {
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

export class MdbMysqlClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbMysqlClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MdbMysqlClusterTimeouts | cdktf.IResolvable | undefined) {
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
export interface MdbMysqlClusterUserConnectionLimits {
  /**
  * Max connections per hour.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#max_connections_per_hour MdbMysqlCluster#max_connections_per_hour}
  */
  readonly maxConnectionsPerHour?: number;
  /**
  * Max questions per hour.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#max_questions_per_hour MdbMysqlCluster#max_questions_per_hour}
  */
  readonly maxQuestionsPerHour?: number;
  /**
  * Max updates per hour.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#max_updates_per_hour MdbMysqlCluster#max_updates_per_hour}
  */
  readonly maxUpdatesPerHour?: number;
  /**
  * Max user connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#max_user_connections MdbMysqlCluster#max_user_connections}
  */
  readonly maxUserConnections?: number;
}

export function mdbMysqlClusterUserConnectionLimitsToTerraform(struct?: MdbMysqlClusterUserConnectionLimitsOutputReference | MdbMysqlClusterUserConnectionLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_connections_per_hour: cdktf.numberToTerraform(struct!.maxConnectionsPerHour),
    max_questions_per_hour: cdktf.numberToTerraform(struct!.maxQuestionsPerHour),
    max_updates_per_hour: cdktf.numberToTerraform(struct!.maxUpdatesPerHour),
    max_user_connections: cdktf.numberToTerraform(struct!.maxUserConnections),
  }
}


export function mdbMysqlClusterUserConnectionLimitsToHclTerraform(struct?: MdbMysqlClusterUserConnectionLimitsOutputReference | MdbMysqlClusterUserConnectionLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_connections_per_hour: {
      value: cdktf.numberToHclTerraform(struct!.maxConnectionsPerHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_questions_per_hour: {
      value: cdktf.numberToHclTerraform(struct!.maxQuestionsPerHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_updates_per_hour: {
      value: cdktf.numberToHclTerraform(struct!.maxUpdatesPerHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_user_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxUserConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbMysqlClusterUserConnectionLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbMysqlClusterUserConnectionLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConnectionsPerHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectionsPerHour = this._maxConnectionsPerHour;
    }
    if (this._maxQuestionsPerHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxQuestionsPerHour = this._maxQuestionsPerHour;
    }
    if (this._maxUpdatesPerHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUpdatesPerHour = this._maxUpdatesPerHour;
    }
    if (this._maxUserConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUserConnections = this._maxUserConnections;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbMysqlClusterUserConnectionLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxConnectionsPerHour = undefined;
      this._maxQuestionsPerHour = undefined;
      this._maxUpdatesPerHour = undefined;
      this._maxUserConnections = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxConnectionsPerHour = value.maxConnectionsPerHour;
      this._maxQuestionsPerHour = value.maxQuestionsPerHour;
      this._maxUpdatesPerHour = value.maxUpdatesPerHour;
      this._maxUserConnections = value.maxUserConnections;
    }
  }

  // max_connections_per_hour - computed: false, optional: true, required: false
  private _maxConnectionsPerHour?: number; 
  public get maxConnectionsPerHour() {
    return this.getNumberAttribute('max_connections_per_hour');
  }
  public set maxConnectionsPerHour(value: number) {
    this._maxConnectionsPerHour = value;
  }
  public resetMaxConnectionsPerHour() {
    this._maxConnectionsPerHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsPerHourInput() {
    return this._maxConnectionsPerHour;
  }

  // max_questions_per_hour - computed: false, optional: true, required: false
  private _maxQuestionsPerHour?: number; 
  public get maxQuestionsPerHour() {
    return this.getNumberAttribute('max_questions_per_hour');
  }
  public set maxQuestionsPerHour(value: number) {
    this._maxQuestionsPerHour = value;
  }
  public resetMaxQuestionsPerHour() {
    this._maxQuestionsPerHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxQuestionsPerHourInput() {
    return this._maxQuestionsPerHour;
  }

  // max_updates_per_hour - computed: false, optional: true, required: false
  private _maxUpdatesPerHour?: number; 
  public get maxUpdatesPerHour() {
    return this.getNumberAttribute('max_updates_per_hour');
  }
  public set maxUpdatesPerHour(value: number) {
    this._maxUpdatesPerHour = value;
  }
  public resetMaxUpdatesPerHour() {
    this._maxUpdatesPerHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUpdatesPerHourInput() {
    return this._maxUpdatesPerHour;
  }

  // max_user_connections - computed: false, optional: true, required: false
  private _maxUserConnections?: number; 
  public get maxUserConnections() {
    return this.getNumberAttribute('max_user_connections');
  }
  public set maxUserConnections(value: number) {
    this._maxUserConnections = value;
  }
  public resetMaxUserConnections() {
    this._maxUserConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUserConnectionsInput() {
    return this._maxUserConnections;
  }
}
export interface MdbMysqlClusterUserPermission {
  /**
  * The name of the database that the permission grants access to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#database_name MdbMysqlCluster#database_name}
  */
  readonly databaseName: string;
  /**
  * List user's roles in the database. Allowed roles: `ALL`,`ALTER`,`ALTER_ROUTINE`,`CREATE`,`CREATE_ROUTINE`,`CREATE_TEMPORARY_TABLES`, `CREATE_VIEW`,`DELETE`,`DROP`,`EVENT`,`EXECUTE`,`INDEX`,`INSERT`,`LOCK_TABLES`,`SELECT`,`SHOW_VIEW`,`TRIGGER`,`UPDATE`,`REFERENCES`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#roles MdbMysqlCluster#roles}
  */
  readonly roles?: string[];
}

export function mdbMysqlClusterUserPermissionToTerraform(struct?: MdbMysqlClusterUserPermission | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
  }
}


export function mdbMysqlClusterUserPermissionToHclTerraform(struct?: MdbMysqlClusterUserPermission | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbMysqlClusterUserPermissionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MdbMysqlClusterUserPermission | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbMysqlClusterUserPermission | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseName = undefined;
      this._roles = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseName = value.databaseName;
      this._roles = value.roles;
    }
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }
}

export class MdbMysqlClusterUserPermissionList extends cdktf.ComplexList {
  public internalValue? : MdbMysqlClusterUserPermission[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MdbMysqlClusterUserPermissionOutputReference {
    return new MdbMysqlClusterUserPermissionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MdbMysqlClusterUser {
  /**
  * Authentication plugin. Allowed values: `MYSQL_NATIVE_PASSWORD`, `CACHING_SHA2_PASSWORD`, `SHA256_PASSWORD`, `MYSQL_NO_LOGIN`, `MDB_IAMPROXY_AUTH` (for version 5.7 `MYSQL_NATIVE_PASSWORD`, `SHA256_PASSWORD`, `MYSQL_NO_LOGIN`, `MDB_IAMPROXY_AUTH`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#authentication_plugin MdbMysqlCluster#authentication_plugin}
  */
  readonly authenticationPlugin?: string;
  /**
  * List user's global permissions. Allowed permissions: `REPLICATION_CLIENT`, `REPLICATION_SLAVE`, `PROCESS`, `FLUSH_OPTIMIZER_COSTS`, `SHOW_ROUTINE`, `MDB_ADMIN` for clear list use empty list. If the attribute is not specified there will be no changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#global_permissions MdbMysqlCluster#global_permissions}
  */
  readonly globalPermissions?: string[];
  /**
  * The name of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#name MdbMysqlCluster#name}
  */
  readonly name: string;
  /**
  * The password of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#password MdbMysqlCluster#password}
  */
  readonly password: string;
  /**
  * connection_limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#connection_limits MdbMysqlCluster#connection_limits}
  */
  readonly connectionLimits?: MdbMysqlClusterUserConnectionLimits;
  /**
  * permission block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#permission MdbMysqlCluster#permission}
  */
  readonly permission?: MdbMysqlClusterUserPermission[] | cdktf.IResolvable;
}

export function mdbMysqlClusterUserToTerraform(struct?: MdbMysqlClusterUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_plugin: cdktf.stringToTerraform(struct!.authenticationPlugin),
    global_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.globalPermissions),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    connection_limits: mdbMysqlClusterUserConnectionLimitsToTerraform(struct!.connectionLimits),
    permission: cdktf.listMapper(mdbMysqlClusterUserPermissionToTerraform, true)(struct!.permission),
  }
}


export function mdbMysqlClusterUserToHclTerraform(struct?: MdbMysqlClusterUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_plugin: {
      value: cdktf.stringToHclTerraform(struct!.authenticationPlugin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_permissions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.globalPermissions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_limits: {
      value: mdbMysqlClusterUserConnectionLimitsToHclTerraform(struct!.connectionLimits),
      isBlock: true,
      type: "list",
      storageClassType: "MdbMysqlClusterUserConnectionLimitsList",
    },
    permission: {
      value: cdktf.listMapperHcl(mdbMysqlClusterUserPermissionToHclTerraform, true)(struct!.permission),
      isBlock: true,
      type: "set",
      storageClassType: "MdbMysqlClusterUserPermissionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbMysqlClusterUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MdbMysqlClusterUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationPlugin !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationPlugin = this._authenticationPlugin;
    }
    if (this._globalPermissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalPermissions = this._globalPermissions;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._connectionLimits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionLimits = this._connectionLimits?.internalValue;
    }
    if (this._permission?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbMysqlClusterUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationPlugin = undefined;
      this._globalPermissions = undefined;
      this._name = undefined;
      this._password = undefined;
      this._connectionLimits.internalValue = undefined;
      this._permission.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationPlugin = value.authenticationPlugin;
      this._globalPermissions = value.globalPermissions;
      this._name = value.name;
      this._password = value.password;
      this._connectionLimits.internalValue = value.connectionLimits;
      this._permission.internalValue = value.permission;
    }
  }

  // authentication_plugin - computed: true, optional: true, required: false
  private _authenticationPlugin?: string; 
  public get authenticationPlugin() {
    return this.getStringAttribute('authentication_plugin');
  }
  public set authenticationPlugin(value: string) {
    this._authenticationPlugin = value;
  }
  public resetAuthenticationPlugin() {
    this._authenticationPlugin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationPluginInput() {
    return this._authenticationPlugin;
  }

  // global_permissions - computed: true, optional: true, required: false
  private _globalPermissions?: string[]; 
  public get globalPermissions() {
    return cdktf.Fn.tolist(this.getListAttribute('global_permissions'));
  }
  public set globalPermissions(value: string[]) {
    this._globalPermissions = value;
  }
  public resetGlobalPermissions() {
    this._globalPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalPermissionsInput() {
    return this._globalPermissions;
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // connection_limits - computed: false, optional: true, required: false
  private _connectionLimits = new MdbMysqlClusterUserConnectionLimitsOutputReference(this, "connection_limits");
  public get connectionLimits() {
    return this._connectionLimits;
  }
  public putConnectionLimits(value: MdbMysqlClusterUserConnectionLimits) {
    this._connectionLimits.internalValue = value;
  }
  public resetConnectionLimits() {
    this._connectionLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLimitsInput() {
    return this._connectionLimits.internalValue;
  }

  // permission - computed: false, optional: true, required: false
  private _permission = new MdbMysqlClusterUserPermissionList(this, "permission", true);
  public get permission() {
    return this._permission;
  }
  public putPermission(value: MdbMysqlClusterUserPermission[] | cdktf.IResolvable) {
    this._permission.internalValue = value;
  }
  public resetPermission() {
    this._permission.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission.internalValue;
  }
}

export class MdbMysqlClusterUserList extends cdktf.ComplexList {
  public internalValue? : MdbMysqlClusterUser[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MdbMysqlClusterUserOutputReference {
    return new MdbMysqlClusterUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster yandex_mdb_mysql_cluster}
*/
export class MdbMysqlCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_mdb_mysql_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MdbMysqlCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MdbMysqlCluster to import
  * @param importFromId The id of the existing MdbMysqlCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MdbMysqlCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_mdb_mysql_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/mdb_mysql_cluster yandex_mdb_mysql_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MdbMysqlClusterConfig
  */
  public constructor(scope: Construct, id: string, config: MdbMysqlClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_mdb_mysql_cluster',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.172.0',
        providerVersionConstraint: '0.172.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowRegenerationHost = config.allowRegenerationHost;
    this._backupRetainPeriodDays = config.backupRetainPeriodDays;
    this._deletionProtection = config.deletionProtection;
    this._description = config.description;
    this._diskEncryptionKeyId = config.diskEncryptionKeyId;
    this._environment = config.environment;
    this._folderId = config.folderId;
    this._hostGroupIds = config.hostGroupIds;
    this._id = config.id;
    this._labels = config.labels;
    this._mysqlConfig = config.mysqlConfig;
    this._name = config.name;
    this._networkId = config.networkId;
    this._securityGroupIds = config.securityGroupIds;
    this._version = config.version;
    this._access.internalValue = config.access;
    this._backupWindowStart.internalValue = config.backupWindowStart;
    this._database.internalValue = config.database;
    this._diskSizeAutoscaling.internalValue = config.diskSizeAutoscaling;
    this._host.internalValue = config.host;
    this._maintenanceWindow.internalValue = config.maintenanceWindow;
    this._performanceDiagnostics.internalValue = config.performanceDiagnostics;
    this._resources.internalValue = config.resources;
    this._restore.internalValue = config.restore;
    this._timeouts.internalValue = config.timeouts;
    this._user.internalValue = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_regeneration_host - computed: false, optional: true, required: false
  private _allowRegenerationHost?: boolean | cdktf.IResolvable; 
  public get allowRegenerationHost() {
    return this.getBooleanAttribute('allow_regeneration_host');
  }
  public set allowRegenerationHost(value: boolean | cdktf.IResolvable) {
    this._allowRegenerationHost = value;
  }
  public resetAllowRegenerationHost() {
    this._allowRegenerationHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRegenerationHostInput() {
    return this._allowRegenerationHost;
  }

  // backup_retain_period_days - computed: true, optional: true, required: false
  private _backupRetainPeriodDays?: number; 
  public get backupRetainPeriodDays() {
    return this.getNumberAttribute('backup_retain_period_days');
  }
  public set backupRetainPeriodDays(value: number) {
    this._backupRetainPeriodDays = value;
  }
  public resetBackupRetainPeriodDays() {
    this._backupRetainPeriodDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetainPeriodDaysInput() {
    return this._backupRetainPeriodDays;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deletion_protection - computed: true, optional: true, required: false
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

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disk_encryption_key_id - computed: true, optional: true, required: false
  private _diskEncryptionKeyId?: string; 
  public get diskEncryptionKeyId() {
    return this.getStringAttribute('disk_encryption_key_id');
  }
  public set diskEncryptionKeyId(value: string) {
    this._diskEncryptionKeyId = value;
  }
  public resetDiskEncryptionKeyId() {
    this._diskEncryptionKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionKeyIdInput() {
    return this._diskEncryptionKeyId;
  }

  // environment - computed: false, optional: false, required: true
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
  }

  // host_group_ids - computed: true, optional: true, required: false
  private _hostGroupIds?: string[]; 
  public get hostGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('host_group_ids'));
  }
  public set hostGroupIds(value: string[]) {
    this._hostGroupIds = value;
  }
  public resetHostGroupIds() {
    this._hostGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostGroupIdsInput() {
    return this._hostGroupIds;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // mysql_config - computed: true, optional: true, required: false
  private _mysqlConfig?: { [key: string]: string }; 
  public get mysqlConfig() {
    return this.getStringMapAttribute('mysql_config');
  }
  public set mysqlConfig(value: { [key: string]: string }) {
    this._mysqlConfig = value;
  }
  public resetMysqlConfig() {
    this._mysqlConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlConfigInput() {
    return this._mysqlConfig;
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

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // access - computed: false, optional: true, required: false
  private _access = new MdbMysqlClusterAccessOutputReference(this, "access");
  public get access() {
    return this._access;
  }
  public putAccess(value: MdbMysqlClusterAccess) {
    this._access.internalValue = value;
  }
  public resetAccess() {
    this._access.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access.internalValue;
  }

  // backup_window_start - computed: false, optional: true, required: false
  private _backupWindowStart = new MdbMysqlClusterBackupWindowStartOutputReference(this, "backup_window_start");
  public get backupWindowStart() {
    return this._backupWindowStart;
  }
  public putBackupWindowStart(value: MdbMysqlClusterBackupWindowStart) {
    this._backupWindowStart.internalValue = value;
  }
  public resetBackupWindowStart() {
    this._backupWindowStart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupWindowStartInput() {
    return this._backupWindowStart.internalValue;
  }

  // database - computed: false, optional: true, required: false
  private _database = new MdbMysqlClusterDatabaseList(this, "database", true);
  public get database() {
    return this._database;
  }
  public putDatabase(value: MdbMysqlClusterDatabase[] | cdktf.IResolvable) {
    this._database.internalValue = value;
  }
  public resetDatabase() {
    this._database.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database.internalValue;
  }

  // disk_size_autoscaling - computed: false, optional: true, required: false
  private _diskSizeAutoscaling = new MdbMysqlClusterDiskSizeAutoscalingOutputReference(this, "disk_size_autoscaling");
  public get diskSizeAutoscaling() {
    return this._diskSizeAutoscaling;
  }
  public putDiskSizeAutoscaling(value: MdbMysqlClusterDiskSizeAutoscaling) {
    this._diskSizeAutoscaling.internalValue = value;
  }
  public resetDiskSizeAutoscaling() {
    this._diskSizeAutoscaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeAutoscalingInput() {
    return this._diskSizeAutoscaling.internalValue;
  }

  // host - computed: false, optional: false, required: true
  private _host = new MdbMysqlClusterHostList(this, "host", false);
  public get host() {
    return this._host;
  }
  public putHost(value: MdbMysqlClusterHost[] | cdktf.IResolvable) {
    this._host.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new MdbMysqlClusterMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: MdbMysqlClusterMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // performance_diagnostics - computed: false, optional: true, required: false
  private _performanceDiagnostics = new MdbMysqlClusterPerformanceDiagnosticsOutputReference(this, "performance_diagnostics");
  public get performanceDiagnostics() {
    return this._performanceDiagnostics;
  }
  public putPerformanceDiagnostics(value: MdbMysqlClusterPerformanceDiagnostics) {
    this._performanceDiagnostics.internalValue = value;
  }
  public resetPerformanceDiagnostics() {
    this._performanceDiagnostics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceDiagnosticsInput() {
    return this._performanceDiagnostics.internalValue;
  }

  // resources - computed: false, optional: false, required: true
  private _resources = new MdbMysqlClusterResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: MdbMysqlClusterResources) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // restore - computed: false, optional: true, required: false
  private _restore = new MdbMysqlClusterRestoreOutputReference(this, "restore");
  public get restore() {
    return this._restore;
  }
  public putRestore(value: MdbMysqlClusterRestore) {
    this._restore.internalValue = value;
  }
  public resetRestore() {
    this._restore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreInput() {
    return this._restore.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MdbMysqlClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MdbMysqlClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // user - computed: false, optional: true, required: false
  private _user = new MdbMysqlClusterUserList(this, "user", false);
  public get user() {
    return this._user;
  }
  public putUser(value: MdbMysqlClusterUser[] | cdktf.IResolvable) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_regeneration_host: cdktf.booleanToTerraform(this._allowRegenerationHost),
      backup_retain_period_days: cdktf.numberToTerraform(this._backupRetainPeriodDays),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      description: cdktf.stringToTerraform(this._description),
      disk_encryption_key_id: cdktf.stringToTerraform(this._diskEncryptionKeyId),
      environment: cdktf.stringToTerraform(this._environment),
      folder_id: cdktf.stringToTerraform(this._folderId),
      host_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostGroupIds),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      mysql_config: cdktf.hashMapper(cdktf.stringToTerraform)(this._mysqlConfig),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      version: cdktf.stringToTerraform(this._version),
      access: mdbMysqlClusterAccessToTerraform(this._access.internalValue),
      backup_window_start: mdbMysqlClusterBackupWindowStartToTerraform(this._backupWindowStart.internalValue),
      database: cdktf.listMapper(mdbMysqlClusterDatabaseToTerraform, true)(this._database.internalValue),
      disk_size_autoscaling: mdbMysqlClusterDiskSizeAutoscalingToTerraform(this._diskSizeAutoscaling.internalValue),
      host: cdktf.listMapper(mdbMysqlClusterHostToTerraform, true)(this._host.internalValue),
      maintenance_window: mdbMysqlClusterMaintenanceWindowToTerraform(this._maintenanceWindow.internalValue),
      performance_diagnostics: mdbMysqlClusterPerformanceDiagnosticsToTerraform(this._performanceDiagnostics.internalValue),
      resources: mdbMysqlClusterResourcesToTerraform(this._resources.internalValue),
      restore: mdbMysqlClusterRestoreToTerraform(this._restore.internalValue),
      timeouts: mdbMysqlClusterTimeoutsToTerraform(this._timeouts.internalValue),
      user: cdktf.listMapper(mdbMysqlClusterUserToTerraform, true)(this._user.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_regeneration_host: {
        value: cdktf.booleanToHclTerraform(this._allowRegenerationHost),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      backup_retain_period_days: {
        value: cdktf.numberToHclTerraform(this._backupRetainPeriodDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_encryption_key_id: {
        value: cdktf.stringToHclTerraform(this._diskEncryptionKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      mysql_config: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._mysqlConfig),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access: {
        value: mdbMysqlClusterAccessToHclTerraform(this._access.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MdbMysqlClusterAccessList",
      },
      backup_window_start: {
        value: mdbMysqlClusterBackupWindowStartToHclTerraform(this._backupWindowStart.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MdbMysqlClusterBackupWindowStartList",
      },
      database: {
        value: cdktf.listMapperHcl(mdbMysqlClusterDatabaseToHclTerraform, true)(this._database.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MdbMysqlClusterDatabaseList",
      },
      disk_size_autoscaling: {
        value: mdbMysqlClusterDiskSizeAutoscalingToHclTerraform(this._diskSizeAutoscaling.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MdbMysqlClusterDiskSizeAutoscalingList",
      },
      host: {
        value: cdktf.listMapperHcl(mdbMysqlClusterHostToHclTerraform, true)(this._host.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MdbMysqlClusterHostList",
      },
      maintenance_window: {
        value: mdbMysqlClusterMaintenanceWindowToHclTerraform(this._maintenanceWindow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MdbMysqlClusterMaintenanceWindowList",
      },
      performance_diagnostics: {
        value: mdbMysqlClusterPerformanceDiagnosticsToHclTerraform(this._performanceDiagnostics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MdbMysqlClusterPerformanceDiagnosticsList",
      },
      resources: {
        value: mdbMysqlClusterResourcesToHclTerraform(this._resources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MdbMysqlClusterResourcesList",
      },
      restore: {
        value: mdbMysqlClusterRestoreToHclTerraform(this._restore.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MdbMysqlClusterRestoreList",
      },
      timeouts: {
        value: mdbMysqlClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdbMysqlClusterTimeouts",
      },
      user: {
        value: cdktf.listMapperHcl(mdbMysqlClusterUserToHclTerraform, true)(this._user.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MdbMysqlClusterUserList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
