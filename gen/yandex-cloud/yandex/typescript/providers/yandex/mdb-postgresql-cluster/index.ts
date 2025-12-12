// https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MdbPostgresqlClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The `true` value means that resource is protected from accidental deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#deletion_protection MdbPostgresqlCluster#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#description MdbPostgresqlCluster#description}
  */
  readonly description?: string;
  /**
  * ID of the KMS key for cluster disk encryption. Restoring without an encryption key will disable encryption if any exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#disk_encryption_key_id MdbPostgresqlCluster#disk_encryption_key_id}
  */
  readonly diskEncryptionKeyId?: string;
  /**
  * Deployment environment of the PostgreSQL cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#environment MdbPostgresqlCluster#environment}
  */
  readonly environment: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#folder_id MdbPostgresqlCluster#folder_id}
  */
  readonly folderId?: string;
  /**
  * Host Group IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#host_group_ids MdbPostgresqlCluster#host_group_ids}
  */
  readonly hostGroupIds?: string[];
  /**
  * Deprecated field. Will be removed in future versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#host_master_name MdbPostgresqlCluster#host_master_name}
  */
  readonly hostMasterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#id MdbPostgresqlCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of key/value label pairs which assigned to resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#labels MdbPostgresqlCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#name MdbPostgresqlCluster#name}
  */
  readonly name: string;
  /**
  * The `VPC Network ID` of subnets which resource attached to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#network_id MdbPostgresqlCluster#network_id}
  */
  readonly networkId: string;
  /**
  * The list of security groups applied to resource or their components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#security_group_ids MdbPostgresqlCluster#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#config MdbPostgresqlCluster#config}
  */
  readonly config: MdbPostgresqlClusterConfigA;
  /**
  * database block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#database MdbPostgresqlCluster#database}
  */
  readonly database?: MdbPostgresqlClusterDatabase[] | cdktf.IResolvable;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#host MdbPostgresqlCluster#host}
  */
  readonly host: MdbPostgresqlClusterHost[] | cdktf.IResolvable;
  /**
  * maintenance_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#maintenance_window MdbPostgresqlCluster#maintenance_window}
  */
  readonly maintenanceWindow?: MdbPostgresqlClusterMaintenanceWindow;
  /**
  * restore block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#restore MdbPostgresqlCluster#restore}
  */
  readonly restore?: MdbPostgresqlClusterRestore;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#timeouts MdbPostgresqlCluster#timeouts}
  */
  readonly timeouts?: MdbPostgresqlClusterTimeouts;
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#user MdbPostgresqlCluster#user}
  */
  readonly user?: MdbPostgresqlClusterUser[] | cdktf.IResolvable;
}
export interface MdbPostgresqlClusterConfigAccess {
  /**
  * Allow access for [Yandex DataLens](https://yandex.cloud/services/datalens).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#data_lens MdbPostgresqlCluster#data_lens}
  */
  readonly dataLens?: boolean | cdktf.IResolvable;
  /**
  * Allow access for [DataTransfer](https://yandex.cloud/services/data-transfer).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#data_transfer MdbPostgresqlCluster#data_transfer}
  */
  readonly dataTransfer?: boolean | cdktf.IResolvable;
  /**
  * Allow access for [connection to managed databases from functions](https://yandex.cloud/docs/functions/operations/database-connection).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#serverless MdbPostgresqlCluster#serverless}
  */
  readonly serverless?: boolean | cdktf.IResolvable;
  /**
  * Allow access for [SQL queries in the management console](https://yandex.cloud/docs/managed-postgresql/operations/web-sql-query).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#web_sql MdbPostgresqlCluster#web_sql}
  */
  readonly webSql?: boolean | cdktf.IResolvable;
}

export function mdbPostgresqlClusterConfigAccessToTerraform(struct?: MdbPostgresqlClusterConfigAccessOutputReference | MdbPostgresqlClusterConfigAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_lens: cdktf.booleanToTerraform(struct!.dataLens),
    data_transfer: cdktf.booleanToTerraform(struct!.dataTransfer),
    serverless: cdktf.booleanToTerraform(struct!.serverless),
    web_sql: cdktf.booleanToTerraform(struct!.webSql),
  }
}


export function mdbPostgresqlClusterConfigAccessToHclTerraform(struct?: MdbPostgresqlClusterConfigAccessOutputReference | MdbPostgresqlClusterConfigAccess): any {
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
    serverless: {
      value: cdktf.booleanToHclTerraform(struct!.serverless),
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

export class MdbPostgresqlClusterConfigAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbPostgresqlClusterConfigAccess | undefined {
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
    if (this._serverless !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverless = this._serverless;
    }
    if (this._webSql !== undefined) {
      hasAnyValues = true;
      internalValueResult.webSql = this._webSql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbPostgresqlClusterConfigAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataLens = undefined;
      this._dataTransfer = undefined;
      this._serverless = undefined;
      this._webSql = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataLens = value.dataLens;
      this._dataTransfer = value.dataTransfer;
      this._serverless = value.serverless;
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

  // serverless - computed: false, optional: true, required: false
  private _serverless?: boolean | cdktf.IResolvable; 
  public get serverless() {
    return this.getBooleanAttribute('serverless');
  }
  public set serverless(value: boolean | cdktf.IResolvable) {
    this._serverless = value;
  }
  public resetServerless() {
    this._serverless = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessInput() {
    return this._serverless;
  }

  // web_sql - computed: true, optional: true, required: false
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
export interface MdbPostgresqlClusterConfigBackupWindowStart {
  /**
  * The hour at which backup will be started (UTC).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#hours MdbPostgresqlCluster#hours}
  */
  readonly hours?: number;
  /**
  * The minute at which backup will be started.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#minutes MdbPostgresqlCluster#minutes}
  */
  readonly minutes?: number;
}

export function mdbPostgresqlClusterConfigBackupWindowStartToTerraform(struct?: MdbPostgresqlClusterConfigBackupWindowStartOutputReference | MdbPostgresqlClusterConfigBackupWindowStart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
  }
}


export function mdbPostgresqlClusterConfigBackupWindowStartToHclTerraform(struct?: MdbPostgresqlClusterConfigBackupWindowStartOutputReference | MdbPostgresqlClusterConfigBackupWindowStart): any {
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

export class MdbPostgresqlClusterConfigBackupWindowStartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbPostgresqlClusterConfigBackupWindowStart | undefined {
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

  public set internalValue(value: MdbPostgresqlClusterConfigBackupWindowStart | undefined) {
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
export interface MdbPostgresqlClusterConfigDiskSizeAutoscaling {
  /**
  * The overall maximum for disk size that limit all autoscaling iterations. See the [documentation](https://yandex.cloud/en/docs/managed-postgresql/concepts/storage#auto-rescale) for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#disk_size_limit MdbPostgresqlCluster#disk_size_limit}
  */
  readonly diskSizeLimit: number;
  /**
  * Threshold of storage usage (in percent) that triggers immediate automatic scaling of the storage. Zero value means disabled threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#emergency_usage_threshold MdbPostgresqlCluster#emergency_usage_threshold}
  */
  readonly emergencyUsageThreshold?: number;
  /**
  * Threshold of storage usage (in percent) that triggers automatic scaling of the storage during the maintenance window. Zero value means disabled threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#planned_usage_threshold MdbPostgresqlCluster#planned_usage_threshold}
  */
  readonly plannedUsageThreshold?: number;
}

export function mdbPostgresqlClusterConfigDiskSizeAutoscalingToTerraform(struct?: MdbPostgresqlClusterConfigDiskSizeAutoscalingOutputReference | MdbPostgresqlClusterConfigDiskSizeAutoscaling): any {
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


export function mdbPostgresqlClusterConfigDiskSizeAutoscalingToHclTerraform(struct?: MdbPostgresqlClusterConfigDiskSizeAutoscalingOutputReference | MdbPostgresqlClusterConfigDiskSizeAutoscaling): any {
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

export class MdbPostgresqlClusterConfigDiskSizeAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbPostgresqlClusterConfigDiskSizeAutoscaling | undefined {
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

  public set internalValue(value: MdbPostgresqlClusterConfigDiskSizeAutoscaling | undefined) {
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
export interface MdbPostgresqlClusterConfigPerformanceDiagnostics {
  /**
  * Enable performance diagnostics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#enabled MdbPostgresqlCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Interval (in seconds) for pg_stat_activity sampling. Acceptable values are 1 to 86400, inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#sessions_sampling_interval MdbPostgresqlCluster#sessions_sampling_interval}
  */
  readonly sessionsSamplingInterval: number;
  /**
  * Interval (in seconds) for pg_stat_statements sampling. Acceptable values are 1 to 86400, inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#statements_sampling_interval MdbPostgresqlCluster#statements_sampling_interval}
  */
  readonly statementsSamplingInterval: number;
}

export function mdbPostgresqlClusterConfigPerformanceDiagnosticsToTerraform(struct?: MdbPostgresqlClusterConfigPerformanceDiagnosticsOutputReference | MdbPostgresqlClusterConfigPerformanceDiagnostics): any {
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


export function mdbPostgresqlClusterConfigPerformanceDiagnosticsToHclTerraform(struct?: MdbPostgresqlClusterConfigPerformanceDiagnosticsOutputReference | MdbPostgresqlClusterConfigPerformanceDiagnostics): any {
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

export class MdbPostgresqlClusterConfigPerformanceDiagnosticsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbPostgresqlClusterConfigPerformanceDiagnostics | undefined {
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

  public set internalValue(value: MdbPostgresqlClusterConfigPerformanceDiagnostics | undefined) {
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
export interface MdbPostgresqlClusterConfigPoolerConfig {
  /**
  * Setting `pool_discard` [parameter in Odyssey](https://github.com/yandex/odyssey/blob/master/documentation/configuration.md#pool_discard-yesno).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#pool_discard MdbPostgresqlCluster#pool_discard}
  */
  readonly poolDiscard?: boolean | cdktf.IResolvable;
  /**
  * Mode that the connection pooler is working in. See descriptions of all modes in the [documentation for Odyssey](https://github.com/yandex/odyssey/blob/master/documentation/configuration.md#pool-string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#pooling_mode MdbPostgresqlCluster#pooling_mode}
  */
  readonly poolingMode?: string;
}

export function mdbPostgresqlClusterConfigPoolerConfigToTerraform(struct?: MdbPostgresqlClusterConfigPoolerConfigOutputReference | MdbPostgresqlClusterConfigPoolerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pool_discard: cdktf.booleanToTerraform(struct!.poolDiscard),
    pooling_mode: cdktf.stringToTerraform(struct!.poolingMode),
  }
}


export function mdbPostgresqlClusterConfigPoolerConfigToHclTerraform(struct?: MdbPostgresqlClusterConfigPoolerConfigOutputReference | MdbPostgresqlClusterConfigPoolerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pool_discard: {
      value: cdktf.booleanToHclTerraform(struct!.poolDiscard),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pooling_mode: {
      value: cdktf.stringToHclTerraform(struct!.poolingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbPostgresqlClusterConfigPoolerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbPostgresqlClusterConfigPoolerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._poolDiscard !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolDiscard = this._poolDiscard;
    }
    if (this._poolingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolingMode = this._poolingMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbPostgresqlClusterConfigPoolerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._poolDiscard = undefined;
      this._poolingMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._poolDiscard = value.poolDiscard;
      this._poolingMode = value.poolingMode;
    }
  }

  // pool_discard - computed: false, optional: true, required: false
  private _poolDiscard?: boolean | cdktf.IResolvable; 
  public get poolDiscard() {
    return this.getBooleanAttribute('pool_discard');
  }
  public set poolDiscard(value: boolean | cdktf.IResolvable) {
    this._poolDiscard = value;
  }
  public resetPoolDiscard() {
    this._poolDiscard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolDiscardInput() {
    return this._poolDiscard;
  }

  // pooling_mode - computed: false, optional: true, required: false
  private _poolingMode?: string; 
  public get poolingMode() {
    return this.getStringAttribute('pooling_mode');
  }
  public set poolingMode(value: string) {
    this._poolingMode = value;
  }
  public resetPoolingMode() {
    this._poolingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolingModeInput() {
    return this._poolingMode;
  }
}
export interface MdbPostgresqlClusterConfigResources {
  /**
  * Volume of the storage available to a PostgreSQL host, in gigabytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#disk_size MdbPostgresqlCluster#disk_size}
  */
  readonly diskSize: number;
  /**
  * Type of the storage of PostgreSQL hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#disk_type_id MdbPostgresqlCluster#disk_type_id}
  */
  readonly diskTypeId?: string;
  /**
  * The ID of the preset for computational resources available to a PostgreSQL host (CPU, memory etc.). For more information, see [the official documentation](https://yandex.cloud/docs/managed-postgresql/concepts/instance-types).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#resource_preset_id MdbPostgresqlCluster#resource_preset_id}
  */
  readonly resourcePresetId: string;
}

export function mdbPostgresqlClusterConfigResourcesToTerraform(struct?: MdbPostgresqlClusterConfigResourcesOutputReference | MdbPostgresqlClusterConfigResources): any {
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


export function mdbPostgresqlClusterConfigResourcesToHclTerraform(struct?: MdbPostgresqlClusterConfigResourcesOutputReference | MdbPostgresqlClusterConfigResources): any {
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

export class MdbPostgresqlClusterConfigResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbPostgresqlClusterConfigResources | undefined {
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

  public set internalValue(value: MdbPostgresqlClusterConfigResources | undefined) {
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

  // disk_type_id - computed: false, optional: true, required: false
  private _diskTypeId?: string; 
  public get diskTypeId() {
    return this.getStringAttribute('disk_type_id');
  }
  public set diskTypeId(value: string) {
    this._diskTypeId = value;
  }
  public resetDiskTypeId() {
    this._diskTypeId = undefined;
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
export interface MdbPostgresqlClusterConfigA {
  /**
  * Configuration setting which enables/disables autofailover in cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#autofailover MdbPostgresqlCluster#autofailover}
  */
  readonly autofailover?: boolean | cdktf.IResolvable;
  /**
  * The period in days during which backups are stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#backup_retain_period_days MdbPostgresqlCluster#backup_retain_period_days}
  */
  readonly backupRetainPeriodDays?: number;
  /**
  * PostgreSQL cluster configuration. For detailed information specific to your PostgreSQL version, please refer to the [API proto specifications](https://github.com/yandex-cloud/cloudapi/tree/master/yandex/cloud/mdb/postgresql/v1/config).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#postgresql_config MdbPostgresqlCluster#postgresql_config}
  */
  readonly postgresqlConfig?: { [key: string]: string };
  /**
  * Version of the PostgreSQL cluster. (allowed versions are: 13, 13-1c, 14, 14-1c, 15, 15-1c, 16, 17).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#version MdbPostgresqlCluster#version}
  */
  readonly version: string;
  /**
  * access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#access MdbPostgresqlCluster#access}
  */
  readonly access?: MdbPostgresqlClusterConfigAccess;
  /**
  * backup_window_start block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#backup_window_start MdbPostgresqlCluster#backup_window_start}
  */
  readonly backupWindowStart?: MdbPostgresqlClusterConfigBackupWindowStart;
  /**
  * disk_size_autoscaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#disk_size_autoscaling MdbPostgresqlCluster#disk_size_autoscaling}
  */
  readonly diskSizeAutoscaling?: MdbPostgresqlClusterConfigDiskSizeAutoscaling;
  /**
  * performance_diagnostics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#performance_diagnostics MdbPostgresqlCluster#performance_diagnostics}
  */
  readonly performanceDiagnostics?: MdbPostgresqlClusterConfigPerformanceDiagnostics;
  /**
  * pooler_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#pooler_config MdbPostgresqlCluster#pooler_config}
  */
  readonly poolerConfig?: MdbPostgresqlClusterConfigPoolerConfig;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#resources MdbPostgresqlCluster#resources}
  */
  readonly resources: MdbPostgresqlClusterConfigResources;
}

export function mdbPostgresqlClusterConfigAToTerraform(struct?: MdbPostgresqlClusterConfigAOutputReference | MdbPostgresqlClusterConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autofailover: cdktf.booleanToTerraform(struct!.autofailover),
    backup_retain_period_days: cdktf.numberToTerraform(struct!.backupRetainPeriodDays),
    postgresql_config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.postgresqlConfig),
    version: cdktf.stringToTerraform(struct!.version),
    access: mdbPostgresqlClusterConfigAccessToTerraform(struct!.access),
    backup_window_start: mdbPostgresqlClusterConfigBackupWindowStartToTerraform(struct!.backupWindowStart),
    disk_size_autoscaling: mdbPostgresqlClusterConfigDiskSizeAutoscalingToTerraform(struct!.diskSizeAutoscaling),
    performance_diagnostics: mdbPostgresqlClusterConfigPerformanceDiagnosticsToTerraform(struct!.performanceDiagnostics),
    pooler_config: mdbPostgresqlClusterConfigPoolerConfigToTerraform(struct!.poolerConfig),
    resources: mdbPostgresqlClusterConfigResourcesToTerraform(struct!.resources),
  }
}


export function mdbPostgresqlClusterConfigAToHclTerraform(struct?: MdbPostgresqlClusterConfigAOutputReference | MdbPostgresqlClusterConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autofailover: {
      value: cdktf.booleanToHclTerraform(struct!.autofailover),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    backup_retain_period_days: {
      value: cdktf.numberToHclTerraform(struct!.backupRetainPeriodDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    postgresql_config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.postgresqlConfig),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access: {
      value: mdbPostgresqlClusterConfigAccessToHclTerraform(struct!.access),
      isBlock: true,
      type: "list",
      storageClassType: "MdbPostgresqlClusterConfigAccessList",
    },
    backup_window_start: {
      value: mdbPostgresqlClusterConfigBackupWindowStartToHclTerraform(struct!.backupWindowStart),
      isBlock: true,
      type: "list",
      storageClassType: "MdbPostgresqlClusterConfigBackupWindowStartList",
    },
    disk_size_autoscaling: {
      value: mdbPostgresqlClusterConfigDiskSizeAutoscalingToHclTerraform(struct!.diskSizeAutoscaling),
      isBlock: true,
      type: "list",
      storageClassType: "MdbPostgresqlClusterConfigDiskSizeAutoscalingList",
    },
    performance_diagnostics: {
      value: mdbPostgresqlClusterConfigPerformanceDiagnosticsToHclTerraform(struct!.performanceDiagnostics),
      isBlock: true,
      type: "list",
      storageClassType: "MdbPostgresqlClusterConfigPerformanceDiagnosticsList",
    },
    pooler_config: {
      value: mdbPostgresqlClusterConfigPoolerConfigToHclTerraform(struct!.poolerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "MdbPostgresqlClusterConfigPoolerConfigList",
    },
    resources: {
      value: mdbPostgresqlClusterConfigResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "MdbPostgresqlClusterConfigResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbPostgresqlClusterConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbPostgresqlClusterConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autofailover !== undefined) {
      hasAnyValues = true;
      internalValueResult.autofailover = this._autofailover;
    }
    if (this._backupRetainPeriodDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupRetainPeriodDays = this._backupRetainPeriodDays;
    }
    if (this._postgresqlConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresqlConfig = this._postgresqlConfig;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._access?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access?.internalValue;
    }
    if (this._backupWindowStart?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupWindowStart = this._backupWindowStart?.internalValue;
    }
    if (this._diskSizeAutoscaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeAutoscaling = this._diskSizeAutoscaling?.internalValue;
    }
    if (this._performanceDiagnostics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceDiagnostics = this._performanceDiagnostics?.internalValue;
    }
    if (this._poolerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolerConfig = this._poolerConfig?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbPostgresqlClusterConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autofailover = undefined;
      this._backupRetainPeriodDays = undefined;
      this._postgresqlConfig = undefined;
      this._version = undefined;
      this._access.internalValue = undefined;
      this._backupWindowStart.internalValue = undefined;
      this._diskSizeAutoscaling.internalValue = undefined;
      this._performanceDiagnostics.internalValue = undefined;
      this._poolerConfig.internalValue = undefined;
      this._resources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autofailover = value.autofailover;
      this._backupRetainPeriodDays = value.backupRetainPeriodDays;
      this._postgresqlConfig = value.postgresqlConfig;
      this._version = value.version;
      this._access.internalValue = value.access;
      this._backupWindowStart.internalValue = value.backupWindowStart;
      this._diskSizeAutoscaling.internalValue = value.diskSizeAutoscaling;
      this._performanceDiagnostics.internalValue = value.performanceDiagnostics;
      this._poolerConfig.internalValue = value.poolerConfig;
      this._resources.internalValue = value.resources;
    }
  }

  // autofailover - computed: true, optional: true, required: false
  private _autofailover?: boolean | cdktf.IResolvable; 
  public get autofailover() {
    return this.getBooleanAttribute('autofailover');
  }
  public set autofailover(value: boolean | cdktf.IResolvable) {
    this._autofailover = value;
  }
  public resetAutofailover() {
    this._autofailover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autofailoverInput() {
    return this._autofailover;
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

  // postgresql_config - computed: true, optional: true, required: false
  private _postgresqlConfig?: { [key: string]: string }; 
  public get postgresqlConfig() {
    return this.getStringMapAttribute('postgresql_config');
  }
  public set postgresqlConfig(value: { [key: string]: string }) {
    this._postgresqlConfig = value;
  }
  public resetPostgresqlConfig() {
    this._postgresqlConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlConfigInput() {
    return this._postgresqlConfig;
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
  private _access = new MdbPostgresqlClusterConfigAccessOutputReference(this, "access");
  public get access() {
    return this._access;
  }
  public putAccess(value: MdbPostgresqlClusterConfigAccess) {
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
  private _backupWindowStart = new MdbPostgresqlClusterConfigBackupWindowStartOutputReference(this, "backup_window_start");
  public get backupWindowStart() {
    return this._backupWindowStart;
  }
  public putBackupWindowStart(value: MdbPostgresqlClusterConfigBackupWindowStart) {
    this._backupWindowStart.internalValue = value;
  }
  public resetBackupWindowStart() {
    this._backupWindowStart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupWindowStartInput() {
    return this._backupWindowStart.internalValue;
  }

  // disk_size_autoscaling - computed: false, optional: true, required: false
  private _diskSizeAutoscaling = new MdbPostgresqlClusterConfigDiskSizeAutoscalingOutputReference(this, "disk_size_autoscaling");
  public get diskSizeAutoscaling() {
    return this._diskSizeAutoscaling;
  }
  public putDiskSizeAutoscaling(value: MdbPostgresqlClusterConfigDiskSizeAutoscaling) {
    this._diskSizeAutoscaling.internalValue = value;
  }
  public resetDiskSizeAutoscaling() {
    this._diskSizeAutoscaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeAutoscalingInput() {
    return this._diskSizeAutoscaling.internalValue;
  }

  // performance_diagnostics - computed: false, optional: true, required: false
  private _performanceDiagnostics = new MdbPostgresqlClusterConfigPerformanceDiagnosticsOutputReference(this, "performance_diagnostics");
  public get performanceDiagnostics() {
    return this._performanceDiagnostics;
  }
  public putPerformanceDiagnostics(value: MdbPostgresqlClusterConfigPerformanceDiagnostics) {
    this._performanceDiagnostics.internalValue = value;
  }
  public resetPerformanceDiagnostics() {
    this._performanceDiagnostics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceDiagnosticsInput() {
    return this._performanceDiagnostics.internalValue;
  }

  // pooler_config - computed: false, optional: true, required: false
  private _poolerConfig = new MdbPostgresqlClusterConfigPoolerConfigOutputReference(this, "pooler_config");
  public get poolerConfig() {
    return this._poolerConfig;
  }
  public putPoolerConfig(value: MdbPostgresqlClusterConfigPoolerConfig) {
    this._poolerConfig.internalValue = value;
  }
  public resetPoolerConfig() {
    this._poolerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolerConfigInput() {
    return this._poolerConfig.internalValue;
  }

  // resources - computed: false, optional: false, required: true
  private _resources = new MdbPostgresqlClusterConfigResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: MdbPostgresqlClusterConfigResources) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}
export interface MdbPostgresqlClusterDatabaseExtension {
  /**
  * Name of the database extension. For more information on available extensions see [the official documentation](https://yandex.cloud/docs/managed-postgresql/operations/cluster-extensions).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#name MdbPostgresqlCluster#name}
  */
  readonly name: string;
  /**
  * Version of the extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#version MdbPostgresqlCluster#version}
  */
  readonly version?: string;
}

export function mdbPostgresqlClusterDatabaseExtensionToTerraform(struct?: MdbPostgresqlClusterDatabaseExtension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function mdbPostgresqlClusterDatabaseExtensionToHclTerraform(struct?: MdbPostgresqlClusterDatabaseExtension | cdktf.IResolvable): any {
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
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbPostgresqlClusterDatabaseExtensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdbPostgresqlClusterDatabaseExtension | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbPostgresqlClusterDatabaseExtension | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._version = value.version;
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class MdbPostgresqlClusterDatabaseExtensionList extends cdktf.ComplexList {
  public internalValue? : MdbPostgresqlClusterDatabaseExtension[] | cdktf.IResolvable

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
  public get(index: number): MdbPostgresqlClusterDatabaseExtensionOutputReference {
    return new MdbPostgresqlClusterDatabaseExtensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MdbPostgresqlClusterDatabase {
  /**
  * POSIX locale for string sorting order. Forbidden to change in an existing database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#lc_collate MdbPostgresqlCluster#lc_collate}
  */
  readonly lcCollate?: string;
  /**
  * POSIX locale for character classification. Forbidden to change in an existing database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#lc_type MdbPostgresqlCluster#lc_type}
  */
  readonly lcType?: string;
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#name MdbPostgresqlCluster#name}
  */
  readonly name: string;
  /**
  * Name of the user assigned as the owner of the database. Forbidden to change in an existing database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#owner MdbPostgresqlCluster#owner}
  */
  readonly owner: string;
  /**
  * Name of the template database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#template_db MdbPostgresqlCluster#template_db}
  */
  readonly templateDb?: string;
  /**
  * extension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#extension MdbPostgresqlCluster#extension}
  */
  readonly extension?: MdbPostgresqlClusterDatabaseExtension[] | cdktf.IResolvable;
}

export function mdbPostgresqlClusterDatabaseToTerraform(struct?: MdbPostgresqlClusterDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lc_collate: cdktf.stringToTerraform(struct!.lcCollate),
    lc_type: cdktf.stringToTerraform(struct!.lcType),
    name: cdktf.stringToTerraform(struct!.name),
    owner: cdktf.stringToTerraform(struct!.owner),
    template_db: cdktf.stringToTerraform(struct!.templateDb),
    extension: cdktf.listMapper(mdbPostgresqlClusterDatabaseExtensionToTerraform, true)(struct!.extension),
  }
}


export function mdbPostgresqlClusterDatabaseToHclTerraform(struct?: MdbPostgresqlClusterDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lc_collate: {
      value: cdktf.stringToHclTerraform(struct!.lcCollate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lc_type: {
      value: cdktf.stringToHclTerraform(struct!.lcType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_db: {
      value: cdktf.stringToHclTerraform(struct!.templateDb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extension: {
      value: cdktf.listMapperHcl(mdbPostgresqlClusterDatabaseExtensionToHclTerraform, true)(struct!.extension),
      isBlock: true,
      type: "set",
      storageClassType: "MdbPostgresqlClusterDatabaseExtensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbPostgresqlClusterDatabaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdbPostgresqlClusterDatabase | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lcCollate !== undefined) {
      hasAnyValues = true;
      internalValueResult.lcCollate = this._lcCollate;
    }
    if (this._lcType !== undefined) {
      hasAnyValues = true;
      internalValueResult.lcType = this._lcType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._templateDb !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateDb = this._templateDb;
    }
    if (this._extension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extension = this._extension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbPostgresqlClusterDatabase | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lcCollate = undefined;
      this._lcType = undefined;
      this._name = undefined;
      this._owner = undefined;
      this._templateDb = undefined;
      this._extension.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lcCollate = value.lcCollate;
      this._lcType = value.lcType;
      this._name = value.name;
      this._owner = value.owner;
      this._templateDb = value.templateDb;
      this._extension.internalValue = value.extension;
    }
  }

  // lc_collate - computed: false, optional: true, required: false
  private _lcCollate?: string; 
  public get lcCollate() {
    return this.getStringAttribute('lc_collate');
  }
  public set lcCollate(value: string) {
    this._lcCollate = value;
  }
  public resetLcCollate() {
    this._lcCollate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lcCollateInput() {
    return this._lcCollate;
  }

  // lc_type - computed: false, optional: true, required: false
  private _lcType?: string; 
  public get lcType() {
    return this.getStringAttribute('lc_type');
  }
  public set lcType(value: string) {
    this._lcType = value;
  }
  public resetLcType() {
    this._lcType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lcTypeInput() {
    return this._lcType;
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

  // owner - computed: false, optional: false, required: true
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // template_db - computed: false, optional: true, required: false
  private _templateDb?: string; 
  public get templateDb() {
    return this.getStringAttribute('template_db');
  }
  public set templateDb(value: string) {
    this._templateDb = value;
  }
  public resetTemplateDb() {
    this._templateDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDbInput() {
    return this._templateDb;
  }

  // extension - computed: false, optional: true, required: false
  private _extension = new MdbPostgresqlClusterDatabaseExtensionList(this, "extension", true);
  public get extension() {
    return this._extension;
  }
  public putExtension(value: MdbPostgresqlClusterDatabaseExtension[] | cdktf.IResolvable) {
    this._extension.internalValue = value;
  }
  public resetExtension() {
    this._extension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionInput() {
    return this._extension.internalValue;
  }
}

export class MdbPostgresqlClusterDatabaseList extends cdktf.ComplexList {
  public internalValue? : MdbPostgresqlClusterDatabase[] | cdktf.IResolvable

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
  public get(index: number): MdbPostgresqlClusterDatabaseOutputReference {
    return new MdbPostgresqlClusterDatabaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MdbPostgresqlClusterHost {
  /**
  * Whether the host should get a public IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#assign_public_ip MdbPostgresqlCluster#assign_public_ip}
  */
  readonly assignPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Host state name. It should be set for all hosts or unset for all hosts. This field can be used by another host, to select which host will be its replication source. Please see `replication_source_name` parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#name MdbPostgresqlCluster#name}
  */
  readonly name?: string;
  /**
  * Host priority in HA group. It works only when `name` is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#priority MdbPostgresqlCluster#priority}
  */
  readonly priority?: number;
  /**
  * Host replication source name points to host's `name` from which this host should replicate. When not set then host in HA group. It works only when `name` is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#replication_source_name MdbPostgresqlCluster#replication_source_name}
  */
  readonly replicationSourceName?: string;
  /**
  * The ID of the subnet, to which the host belongs. The subnet must be a part of the network to which the cluster belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#subnet_id MdbPostgresqlCluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * The [availability zone](https://yandex.cloud/docs/overview/concepts/geo-scope) where resource is located. If it is not provided, the default provider zone will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#zone MdbPostgresqlCluster#zone}
  */
  readonly zone: string;
}

export function mdbPostgresqlClusterHostToTerraform(struct?: MdbPostgresqlClusterHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_public_ip: cdktf.booleanToTerraform(struct!.assignPublicIp),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    replication_source_name: cdktf.stringToTerraform(struct!.replicationSourceName),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function mdbPostgresqlClusterHostToHclTerraform(struct?: MdbPostgresqlClusterHost | cdktf.IResolvable): any {
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

export class MdbPostgresqlClusterHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdbPostgresqlClusterHost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignPublicIp = this._assignPublicIp;
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

  public set internalValue(value: MdbPostgresqlClusterHost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignPublicIp = undefined;
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

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // subnet_id - computed: false, optional: true, required: false
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

export class MdbPostgresqlClusterHostList extends cdktf.ComplexList {
  public internalValue? : MdbPostgresqlClusterHost[] | cdktf.IResolvable

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
  public get(index: number): MdbPostgresqlClusterHostOutputReference {
    return new MdbPostgresqlClusterHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MdbPostgresqlClusterMaintenanceWindow {
  /**
  * Day of the week (in `DDD` format). Allowed values: `MON`, `TUE`, `WED`, `THU`, `FRI`, `SAT`, `SUN`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#day MdbPostgresqlCluster#day}
  */
  readonly day?: string;
  /**
  * Hour of the day in UTC (in `HH` format). Allowed value is between 1 and 24.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#hour MdbPostgresqlCluster#hour}
  */
  readonly hour?: number;
  /**
  * Type of maintenance window. Can be either `ANYTIME` or `WEEKLY`. A day and hour of window need to be specified with weekly window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#type MdbPostgresqlCluster#type}
  */
  readonly type: string;
}

export function mdbPostgresqlClusterMaintenanceWindowToTerraform(struct?: MdbPostgresqlClusterMaintenanceWindowOutputReference | MdbPostgresqlClusterMaintenanceWindow): any {
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


export function mdbPostgresqlClusterMaintenanceWindowToHclTerraform(struct?: MdbPostgresqlClusterMaintenanceWindowOutputReference | MdbPostgresqlClusterMaintenanceWindow): any {
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

export class MdbPostgresqlClusterMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbPostgresqlClusterMaintenanceWindow | undefined {
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

  public set internalValue(value: MdbPostgresqlClusterMaintenanceWindow | undefined) {
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
export interface MdbPostgresqlClusterRestore {
  /**
  * Backup ID. The cluster will be created from the specified backup. [How to get a list of PostgreSQL backups](https://yandex.cloud/docs/managed-postgresql/operations/cluster-backups).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#backup_id MdbPostgresqlCluster#backup_id}
  */
  readonly backupId: string;
  /**
  * Timestamp of the moment to which the PostgreSQL cluster should be restored. (Format: `2006-01-02T15:04:05` - UTC). When not set, current time is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#time MdbPostgresqlCluster#time}
  */
  readonly time?: string;
  /**
  * Flag that indicates whether a database should be restored to the first backup point available just after the timestamp specified in the [time] field instead of just before. Possible values:
  * * `false` (default) — the restore point refers to the first backup moment before [time].
  * * `true` — the restore point refers to the first backup point after [time].
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#time_inclusive MdbPostgresqlCluster#time_inclusive}
  */
  readonly timeInclusive?: boolean | cdktf.IResolvable;
}

export function mdbPostgresqlClusterRestoreToTerraform(struct?: MdbPostgresqlClusterRestoreOutputReference | MdbPostgresqlClusterRestore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_id: cdktf.stringToTerraform(struct!.backupId),
    time: cdktf.stringToTerraform(struct!.time),
    time_inclusive: cdktf.booleanToTerraform(struct!.timeInclusive),
  }
}


export function mdbPostgresqlClusterRestoreToHclTerraform(struct?: MdbPostgresqlClusterRestoreOutputReference | MdbPostgresqlClusterRestore): any {
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
    time_inclusive: {
      value: cdktf.booleanToHclTerraform(struct!.timeInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbPostgresqlClusterRestoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbPostgresqlClusterRestore | undefined {
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
    if (this._timeInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeInclusive = this._timeInclusive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbPostgresqlClusterRestore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupId = undefined;
      this._time = undefined;
      this._timeInclusive = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupId = value.backupId;
      this._time = value.time;
      this._timeInclusive = value.timeInclusive;
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

  // time_inclusive - computed: false, optional: true, required: false
  private _timeInclusive?: boolean | cdktf.IResolvable; 
  public get timeInclusive() {
    return this.getBooleanAttribute('time_inclusive');
  }
  public set timeInclusive(value: boolean | cdktf.IResolvable) {
    this._timeInclusive = value;
  }
  public resetTimeInclusive() {
    this._timeInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInclusiveInput() {
    return this._timeInclusive;
  }
}
export interface MdbPostgresqlClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#create MdbPostgresqlCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#delete MdbPostgresqlCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#update MdbPostgresqlCluster#update}
  */
  readonly update?: string;
}

export function mdbPostgresqlClusterTimeoutsToTerraform(struct?: MdbPostgresqlClusterTimeouts | cdktf.IResolvable): any {
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


export function mdbPostgresqlClusterTimeoutsToHclTerraform(struct?: MdbPostgresqlClusterTimeouts | cdktf.IResolvable): any {
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

export class MdbPostgresqlClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbPostgresqlClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MdbPostgresqlClusterTimeouts | cdktf.IResolvable | undefined) {
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
export interface MdbPostgresqlClusterUserPermission {
  /**
  * The name of the database that the permission grants access to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#database_name MdbPostgresqlCluster#database_name}
  */
  readonly databaseName: string;
}

export function mdbPostgresqlClusterUserPermissionToTerraform(struct?: MdbPostgresqlClusterUserPermission | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
  }
}


export function mdbPostgresqlClusterUserPermissionToHclTerraform(struct?: MdbPostgresqlClusterUserPermission | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbPostgresqlClusterUserPermissionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdbPostgresqlClusterUserPermission | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbPostgresqlClusterUserPermission | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseName = value.databaseName;
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
}

export class MdbPostgresqlClusterUserPermissionList extends cdktf.ComplexList {
  public internalValue? : MdbPostgresqlClusterUserPermission[] | cdktf.IResolvable

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
  public get(index: number): MdbPostgresqlClusterUserPermissionOutputReference {
    return new MdbPostgresqlClusterUserPermissionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MdbPostgresqlClusterUser {
  /**
  * The maximum number of connections per user. (Default 50).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#conn_limit MdbPostgresqlCluster#conn_limit}
  */
  readonly connLimit?: number;
  /**
  * List of the user's grants.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#grants MdbPostgresqlCluster#grants}
  */
  readonly grants?: string[];
  /**
  * User's ability to login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#login MdbPostgresqlCluster#login}
  */
  readonly login?: boolean | cdktf.IResolvable;
  /**
  * The name of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#name MdbPostgresqlCluster#name}
  */
  readonly name: string;
  /**
  * The password of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#password MdbPostgresqlCluster#password}
  */
  readonly password: string;
  /**
  * Map of user settings. [Full description](https://yandex.cloud/docs/managed-postgresql/api-ref/grpc/Cluster/create#yandex.cloud.mdb.postgresql.v1.UserSettings).
  * 
  * * `default_transaction_isolation` - defines the default isolation level to be set for all new SQL transactions. One of:
  *   - 1: `read uncommitted`
  *   - 2: `read committed`
  *   - 3: `repeatable read`
  *   - 4: `serializable`
  * 
  * * `lock_timeout` - The maximum time (in milliseconds) for any statement to wait for acquiring a lock on an table, index, row or other database object (default 0).
  * 
  * * `log_min_duration_statement` - This setting controls logging of the duration of statements. Default -1 disables logging of the duration of statements.
  * 
  * * `synchronous_commit` - This setting defines whether DBMS will commit transaction in a synchronous way. One of:
  *   - 1: `on`
  *   - 2: `off`
  *   - 3: `local`
  *   - 4: `remote write`
  *   - 5: `remote apply`
  * 
  * * `temp_file_limit` - The maximum storage space size (in kilobytes) that a single process can use to create temporary files.
  * 
  * * `log_statement` - This setting specifies which SQL statements should be logged (on the user level). One of:
  *   - 1: `none`
  *   - 2: `ddl`
  *   - 3: `mod`
  *   - 4: `all`
  * 
  * * `pool_mode` - Mode that the connection pooler is working in with specified user. One of:
  *   - 1: `session`
  *   - 2: `transaction`
  *   - 3: `statement`
  * 
  * * `prepared_statements_pooling` - This setting allows user to use prepared statements with transaction pooling. Boolean.
  * 
  * * `catchup_timeout` - The connection pooler setting. It determines the maximum allowed replication lag (in seconds). Pooler will reject connections to the replica with a lag above this threshold. Default value is 0, which disables this feature. Integer.
  * 
  * * `wal_sender_timeout` - The maximum time (in milliseconds) to wait for WAL replication. Terminate replication connections that are inactive for longer than this amount of time. Integer.
  * 
  * * `idle_in_transaction_session_timeout` - Sets the maximum allowed idle time (in milliseconds) between queries, when in a transaction. Value of 0 (default) disables the timeout. Integer.
  * 
  * * `statement_timeout` - The maximum time (in milliseconds) to wait for statement. Value of 0 (default) disables the timeout. Integer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#settings MdbPostgresqlCluster#settings}
  */
  readonly settings?: { [key: string]: string };
  /**
  * permission block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#permission MdbPostgresqlCluster#permission}
  */
  readonly permission?: MdbPostgresqlClusterUserPermission[] | cdktf.IResolvable;
}

export function mdbPostgresqlClusterUserToTerraform(struct?: MdbPostgresqlClusterUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conn_limit: cdktf.numberToTerraform(struct!.connLimit),
    grants: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.grants),
    login: cdktf.booleanToTerraform(struct!.login),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.settings),
    permission: cdktf.listMapper(mdbPostgresqlClusterUserPermissionToTerraform, true)(struct!.permission),
  }
}


export function mdbPostgresqlClusterUserToHclTerraform(struct?: MdbPostgresqlClusterUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conn_limit: {
      value: cdktf.numberToHclTerraform(struct!.connLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grants: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.grants),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    login: {
      value: cdktf.booleanToHclTerraform(struct!.login),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.settings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    permission: {
      value: cdktf.listMapperHcl(mdbPostgresqlClusterUserPermissionToHclTerraform, true)(struct!.permission),
      isBlock: true,
      type: "set",
      storageClassType: "MdbPostgresqlClusterUserPermissionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbPostgresqlClusterUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdbPostgresqlClusterUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connLimit = this._connLimit;
    }
    if (this._grants !== undefined) {
      hasAnyValues = true;
      internalValueResult.grants = this._grants;
    }
    if (this._login !== undefined) {
      hasAnyValues = true;
      internalValueResult.login = this._login;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    if (this._permission?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbPostgresqlClusterUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connLimit = undefined;
      this._grants = undefined;
      this._login = undefined;
      this._name = undefined;
      this._password = undefined;
      this._settings = undefined;
      this._permission.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connLimit = value.connLimit;
      this._grants = value.grants;
      this._login = value.login;
      this._name = value.name;
      this._password = value.password;
      this._settings = value.settings;
      this._permission.internalValue = value.permission;
    }
  }

  // conn_limit - computed: true, optional: true, required: false
  private _connLimit?: number; 
  public get connLimit() {
    return this.getNumberAttribute('conn_limit');
  }
  public set connLimit(value: number) {
    this._connLimit = value;
  }
  public resetConnLimit() {
    this._connLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connLimitInput() {
    return this._connLimit;
  }

  // grants - computed: true, optional: true, required: false
  private _grants?: string[]; 
  public get grants() {
    return this.getListAttribute('grants');
  }
  public set grants(value: string[]) {
    this._grants = value;
  }
  public resetGrants() {
    this._grants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantsInput() {
    return this._grants;
  }

  // login - computed: false, optional: true, required: false
  private _login?: boolean | cdktf.IResolvable; 
  public get login() {
    return this.getBooleanAttribute('login');
  }
  public set login(value: boolean | cdktf.IResolvable) {
    this._login = value;
  }
  public resetLogin() {
    this._login = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginInput() {
    return this._login;
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

  // settings - computed: true, optional: true, required: false
  private _settings?: { [key: string]: string }; 
  public get settings() {
    return this.getStringMapAttribute('settings');
  }
  public set settings(value: { [key: string]: string }) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // permission - computed: false, optional: true, required: false
  private _permission = new MdbPostgresqlClusterUserPermissionList(this, "permission", true);
  public get permission() {
    return this._permission;
  }
  public putPermission(value: MdbPostgresqlClusterUserPermission[] | cdktf.IResolvable) {
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

export class MdbPostgresqlClusterUserList extends cdktf.ComplexList {
  public internalValue? : MdbPostgresqlClusterUser[] | cdktf.IResolvable

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
  public get(index: number): MdbPostgresqlClusterUserOutputReference {
    return new MdbPostgresqlClusterUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster yandex_mdb_postgresql_cluster}
*/
export class MdbPostgresqlCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_mdb_postgresql_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MdbPostgresqlCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MdbPostgresqlCluster to import
  * @param importFromId The id of the existing MdbPostgresqlCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MdbPostgresqlCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_mdb_postgresql_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_postgresql_cluster yandex_mdb_postgresql_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MdbPostgresqlClusterConfig
  */
  public constructor(scope: Construct, id: string, config: MdbPostgresqlClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_mdb_postgresql_cluster',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.175.0',
        providerVersionConstraint: '0.175.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deletionProtection = config.deletionProtection;
    this._description = config.description;
    this._diskEncryptionKeyId = config.diskEncryptionKeyId;
    this._environment = config.environment;
    this._folderId = config.folderId;
    this._hostGroupIds = config.hostGroupIds;
    this._hostMasterName = config.hostMasterName;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._networkId = config.networkId;
    this._securityGroupIds = config.securityGroupIds;
    this._config.internalValue = config.config;
    this._database.internalValue = config.database;
    this._host.internalValue = config.host;
    this._maintenanceWindow.internalValue = config.maintenanceWindow;
    this._restore.internalValue = config.restore;
    this._timeouts.internalValue = config.timeouts;
    this._user.internalValue = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // host_master_name - computed: true, optional: true, required: false
  private _hostMasterName?: string; 
  public get hostMasterName() {
    return this.getStringAttribute('host_master_name');
  }
  public set hostMasterName(value: string) {
    this._hostMasterName = value;
  }
  public resetHostMasterName() {
    this._hostMasterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostMasterNameInput() {
    return this._hostMasterName;
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

  // labels - computed: true, optional: true, required: false
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

  // security_group_ids - computed: true, optional: true, required: false
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

  // config - computed: false, optional: false, required: true
  private _config = new MdbPostgresqlClusterConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: MdbPostgresqlClusterConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // database - computed: false, optional: true, required: false
  private _database = new MdbPostgresqlClusterDatabaseList(this, "database", false);
  public get database() {
    return this._database;
  }
  public putDatabase(value: MdbPostgresqlClusterDatabase[] | cdktf.IResolvable) {
    this._database.internalValue = value;
  }
  public resetDatabase() {
    this._database.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database.internalValue;
  }

  // host - computed: false, optional: false, required: true
  private _host = new MdbPostgresqlClusterHostList(this, "host", false);
  public get host() {
    return this._host;
  }
  public putHost(value: MdbPostgresqlClusterHost[] | cdktf.IResolvable) {
    this._host.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new MdbPostgresqlClusterMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: MdbPostgresqlClusterMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // restore - computed: false, optional: true, required: false
  private _restore = new MdbPostgresqlClusterRestoreOutputReference(this, "restore");
  public get restore() {
    return this._restore;
  }
  public putRestore(value: MdbPostgresqlClusterRestore) {
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
  private _timeouts = new MdbPostgresqlClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MdbPostgresqlClusterTimeouts) {
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
  private _user = new MdbPostgresqlClusterUserList(this, "user", false);
  public get user() {
    return this._user;
  }
  public putUser(value: MdbPostgresqlClusterUser[] | cdktf.IResolvable) {
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
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      description: cdktf.stringToTerraform(this._description),
      disk_encryption_key_id: cdktf.stringToTerraform(this._diskEncryptionKeyId),
      environment: cdktf.stringToTerraform(this._environment),
      folder_id: cdktf.stringToTerraform(this._folderId),
      host_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostGroupIds),
      host_master_name: cdktf.stringToTerraform(this._hostMasterName),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      config: mdbPostgresqlClusterConfigAToTerraform(this._config.internalValue),
      database: cdktf.listMapper(mdbPostgresqlClusterDatabaseToTerraform, true)(this._database.internalValue),
      host: cdktf.listMapper(mdbPostgresqlClusterHostToTerraform, true)(this._host.internalValue),
      maintenance_window: mdbPostgresqlClusterMaintenanceWindowToTerraform(this._maintenanceWindow.internalValue),
      restore: mdbPostgresqlClusterRestoreToTerraform(this._restore.internalValue),
      timeouts: mdbPostgresqlClusterTimeoutsToTerraform(this._timeouts.internalValue),
      user: cdktf.listMapper(mdbPostgresqlClusterUserToTerraform, true)(this._user.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      host_master_name: {
        value: cdktf.stringToHclTerraform(this._hostMasterName),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
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
      config: {
        value: mdbPostgresqlClusterConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MdbPostgresqlClusterConfigAList",
      },
      database: {
        value: cdktf.listMapperHcl(mdbPostgresqlClusterDatabaseToHclTerraform, true)(this._database.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MdbPostgresqlClusterDatabaseList",
      },
      host: {
        value: cdktf.listMapperHcl(mdbPostgresqlClusterHostToHclTerraform, true)(this._host.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MdbPostgresqlClusterHostList",
      },
      maintenance_window: {
        value: mdbPostgresqlClusterMaintenanceWindowToHclTerraform(this._maintenanceWindow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MdbPostgresqlClusterMaintenanceWindowList",
      },
      restore: {
        value: mdbPostgresqlClusterRestoreToHclTerraform(this._restore.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MdbPostgresqlClusterRestoreList",
      },
      timeouts: {
        value: mdbPostgresqlClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdbPostgresqlClusterTimeouts",
      },
      user: {
        value: cdktf.listMapperHcl(mdbPostgresqlClusterUserToHclTerraform, true)(this._user.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MdbPostgresqlClusterUserList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
