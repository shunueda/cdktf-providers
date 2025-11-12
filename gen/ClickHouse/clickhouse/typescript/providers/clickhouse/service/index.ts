// https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configuration of service backup settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service#backup_configuration Service#backup_configuration}
  */
  readonly backupConfiguration?: ServiceBackupConfiguration;
  /**
  * ID of the backup to restore when creating new service. If specified, the service will be created as a restore operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service#backup_id Service#backup_id}
  */
  readonly backupId?: string;
  /**
  * BYOC ID related to the cloud provider account you want to create this service into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service#byoc_id Service#byoc_id}
  */
  readonly byocId?: string;
  /**
  * Cloud provider ('aws', 'gcp', or 'azure') in which the service is deployed in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service#cloud_provider Service#cloud_provider}
  */
  readonly cloudProvider: string;
  /**
  * Compliance type of the service. Can be 'hipaa', 'pci'. Required for organizations that wish to deploy their services in the hipaa/pci compliant environment. NOTE: hipaa/pci compliance should be enabled for your ClickHouse organization before using this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service#compliance_type Service#compliance_type}
  */
  readonly complianceType?: string;
  /**
  * Double SHA1 hash of password for connecting with the MySQL protocol. Cannot be specified if `password` is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service#double_sha1_password_hash Service#double_sha1_password_hash}
  */
  readonly doubleSha1PasswordHash?: string;
  /**
  * Custom role identifier ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service#encryption_assumed_role_identifier Service#encryption_assumed_role_identifier}
  */
  readonly encryptionAssumedRoleIdentifier?: string;
  /**
  * Custom encryption key ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service#encryption_key Service#encryption_key}
  */
  readonly encryptionKey?: string;
  /**
  * Allow to enable and configure additional endpoints (read protocols) to expose on the ClickHouse service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service#endpoints Service#endpoints}
  */
  readonly endpoints?: ServiceEndpoints;
  /**
  * When set to true the service is allowed to scale down to zero when idle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service#idle_scaling Service#idle_scaling}
  */
  readonly idleScaling?: boolean | cdktf.IResolvable;
  /**
  * Set minimum idling timeout (in minutes). Must be greater than or equal to 5 minutes. Must be set if idle_scaling is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service#idle_timeout_minutes Service#idle_timeout_minutes}
  */
  readonly idleTimeoutMinutes?: number;
  /**
  * List of IP addresses allowed to access the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service#ip_access Service#ip_access}
  */
  readonly ipAccess: ServiceIpAccess[] | cdktf.IResolvable;
  /**
  * Maximum memory of a single replica during auto-scaling in GiB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service#max_replica_memory_gb Service#max_replica_memory_gb}
  */
  readonly maxReplicaMemoryGb?: number;
  /**
  * Maximum total memory of all workers during auto-scaling in GiB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service#max_total_memory_gb Service#max_total_memory_gb}
  */
  readonly maxTotalMemoryGb?: number;
  /**
  * Minimum memory of a single replica during auto-scaling in GiB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service#min_replica_memory_gb Service#min_replica_memory_gb}
  */
  readonly minReplicaMemoryGb?: number;
  /**
  * Minimum total memory of all workers during auto-scaling in GiB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service#min_total_memory_gb Service#min_total_memory_gb}
  */
  readonly minTotalMemoryGb?: number;
  /**
  * User defined identifier for the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service#name Service#name}
  */
  readonly name: string;
  /**
  * Number of replicas for the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service#num_replicas Service#num_replicas}
  */
  readonly numReplicas?: number;
  /**
  * Password for the default user. One of either `password` or `password_hash` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service#password Service#password}
  */
  readonly password?: string;
  /**
  * SHA256 hash of password for the default user. One of either `password` or `password_hash` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service#password_hash Service#password_hash}
  */
  readonly passwordHash?: string;
  /**
  * Configuration of the query API endpoints feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service#query_api_endpoints Service#query_api_endpoints}
  */
  readonly queryApiEndpoints?: ServiceQueryApiEndpoints;
  /**
  * Indicates if this service should be read only. Only allowed for secondary services, those which share data with another service (i.e. when `warehouse_id` field is set).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service#readonly Service#readonly}
  */
  readonly readonly?: boolean | cdktf.IResolvable;
  /**
  * Region within the cloud provider in which the service is deployed in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service#region Service#region}
  */
  readonly region: string;
  /**
  * Release channel to use for this service. Can be 'default', 'fast' or 'slow'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service#release_channel Service#release_channel}
  */
  readonly releaseChannel?: string;
  /**
  * Tier of the service: 'development', 'production'. Required for organizations using the Legacy ClickHouse Cloud Tiers, must be omitted for organizations using the new ClickHouse Cloud Tiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service#tier Service#tier}
  */
  readonly tier?: string;
  /**
  * Configuration of the Transparent Data Encryption (TDE) feature. Requires an organization with the Enterprise plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service#transparent_data_encryption Service#transparent_data_encryption}
  */
  readonly transparentDataEncryption?: ServiceTransparentDataEncryption;
  /**
  * Set it to the 'warehouse_id' attribute of another service to share the data with it. The service must be in the same cloud and region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service#warehouse_id Service#warehouse_id}
  */
  readonly warehouseId?: string;
}
export interface ServiceBackupConfiguration {
  /**
  * Interval in hours between each backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service#backup_period_in_hours Service#backup_period_in_hours}
  */
  readonly backupPeriodInHours?: number;
  /**
  * How long in hours to keep a backup before deleting it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service#backup_retention_period_in_hours Service#backup_retention_period_in_hours}
  */
  readonly backupRetentionPeriodInHours?: number;
  /**
  * Time of the day in UTC that indicates the start time of a 2 hours window to be used for backup. If set, backup_period_in_hours must be null and backups are created once a day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service#backup_start_time Service#backup_start_time}
  */
  readonly backupStartTime?: string;
}

export function serviceBackupConfigurationToTerraform(struct?: ServiceBackupConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_period_in_hours: cdktf.numberToTerraform(struct!.backupPeriodInHours),
    backup_retention_period_in_hours: cdktf.numberToTerraform(struct!.backupRetentionPeriodInHours),
    backup_start_time: cdktf.stringToTerraform(struct!.backupStartTime),
  }
}


export function serviceBackupConfigurationToHclTerraform(struct?: ServiceBackupConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_period_in_hours: {
      value: cdktf.numberToHclTerraform(struct!.backupPeriodInHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    backup_retention_period_in_hours: {
      value: cdktf.numberToHclTerraform(struct!.backupRetentionPeriodInHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    backup_start_time: {
      value: cdktf.stringToHclTerraform(struct!.backupStartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceBackupConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceBackupConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupPeriodInHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupPeriodInHours = this._backupPeriodInHours;
    }
    if (this._backupRetentionPeriodInHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupRetentionPeriodInHours = this._backupRetentionPeriodInHours;
    }
    if (this._backupStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupStartTime = this._backupStartTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceBackupConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupPeriodInHours = undefined;
      this._backupRetentionPeriodInHours = undefined;
      this._backupStartTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupPeriodInHours = value.backupPeriodInHours;
      this._backupRetentionPeriodInHours = value.backupRetentionPeriodInHours;
      this._backupStartTime = value.backupStartTime;
    }
  }

  // backup_period_in_hours - computed: true, optional: true, required: false
  private _backupPeriodInHours?: number; 
  public get backupPeriodInHours() {
    return this.getNumberAttribute('backup_period_in_hours');
  }
  public set backupPeriodInHours(value: number) {
    this._backupPeriodInHours = value;
  }
  public resetBackupPeriodInHours() {
    this._backupPeriodInHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPeriodInHoursInput() {
    return this._backupPeriodInHours;
  }

  // backup_retention_period_in_hours - computed: true, optional: true, required: false
  private _backupRetentionPeriodInHours?: number; 
  public get backupRetentionPeriodInHours() {
    return this.getNumberAttribute('backup_retention_period_in_hours');
  }
  public set backupRetentionPeriodInHours(value: number) {
    this._backupRetentionPeriodInHours = value;
  }
  public resetBackupRetentionPeriodInHours() {
    this._backupRetentionPeriodInHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionPeriodInHoursInput() {
    return this._backupRetentionPeriodInHours;
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
}
export interface ServiceEndpointsHttps {
}

export function serviceEndpointsHttpsToTerraform(struct?: ServiceEndpointsHttps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function serviceEndpointsHttpsToHclTerraform(struct?: ServiceEndpointsHttps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ServiceEndpointsHttpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceEndpointsHttps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceEndpointsHttps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface ServiceEndpointsMysql {
  /**
  * Wether to enable the mysql endpoint or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service#enabled Service#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function serviceEndpointsMysqlToTerraform(struct?: ServiceEndpointsMysql | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function serviceEndpointsMysqlToHclTerraform(struct?: ServiceEndpointsMysql | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceEndpointsMysqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceEndpointsMysql | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceEndpointsMysql | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface ServiceEndpointsNativesecure {
}

export function serviceEndpointsNativesecureToTerraform(struct?: ServiceEndpointsNativesecure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function serviceEndpointsNativesecureToHclTerraform(struct?: ServiceEndpointsNativesecure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ServiceEndpointsNativesecureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceEndpointsNativesecure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceEndpointsNativesecure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface ServiceEndpoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service#https Service#https}
  */
  readonly https?: ServiceEndpointsHttps;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service#mysql Service#mysql}
  */
  readonly mysql?: ServiceEndpointsMysql;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service#nativesecure Service#nativesecure}
  */
  readonly nativesecure?: ServiceEndpointsNativesecure;
}

export function serviceEndpointsToTerraform(struct?: ServiceEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    https: serviceEndpointsHttpsToTerraform(struct!.https),
    mysql: serviceEndpointsMysqlToTerraform(struct!.mysql),
    nativesecure: serviceEndpointsNativesecureToTerraform(struct!.nativesecure),
  }
}


export function serviceEndpointsToHclTerraform(struct?: ServiceEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    https: {
      value: serviceEndpointsHttpsToHclTerraform(struct!.https),
      isBlock: true,
      type: "struct",
      storageClassType: "ServiceEndpointsHttps",
    },
    mysql: {
      value: serviceEndpointsMysqlToHclTerraform(struct!.mysql),
      isBlock: true,
      type: "struct",
      storageClassType: "ServiceEndpointsMysql",
    },
    nativesecure: {
      value: serviceEndpointsNativesecureToHclTerraform(struct!.nativesecure),
      isBlock: true,
      type: "struct",
      storageClassType: "ServiceEndpointsNativesecure",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceEndpointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._https?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.https = this._https?.internalValue;
    }
    if (this._mysql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysql = this._mysql?.internalValue;
    }
    if (this._nativesecure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nativesecure = this._nativesecure?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._https.internalValue = undefined;
      this._mysql.internalValue = undefined;
      this._nativesecure.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._https.internalValue = value.https;
      this._mysql.internalValue = value.mysql;
      this._nativesecure.internalValue = value.nativesecure;
    }
  }

  // https - computed: true, optional: true, required: false
  private _https = new ServiceEndpointsHttpsOutputReference(this, "https");
  public get https() {
    return this._https;
  }
  public putHttps(value: ServiceEndpointsHttps) {
    this._https.internalValue = value;
  }
  public resetHttps() {
    this._https.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsInput() {
    return this._https.internalValue;
  }

  // mysql - computed: true, optional: true, required: false
  private _mysql = new ServiceEndpointsMysqlOutputReference(this, "mysql");
  public get mysql() {
    return this._mysql;
  }
  public putMysql(value: ServiceEndpointsMysql) {
    this._mysql.internalValue = value;
  }
  public resetMysql() {
    this._mysql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlInput() {
    return this._mysql.internalValue;
  }

  // nativesecure - computed: true, optional: true, required: false
  private _nativesecure = new ServiceEndpointsNativesecureOutputReference(this, "nativesecure");
  public get nativesecure() {
    return this._nativesecure;
  }
  public putNativesecure(value: ServiceEndpointsNativesecure) {
    this._nativesecure.internalValue = value;
  }
  public resetNativesecure() {
    this._nativesecure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativesecureInput() {
    return this._nativesecure.internalValue;
  }
}
export interface ServiceIpAccess {
  /**
  * Description of the IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service#description Service#description}
  */
  readonly description: string;
  /**
  * IP address allowed to access the service. In case you want to set the ip_access to anywhere you should set source to 0.0.0.0/0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service#source Service#source}
  */
  readonly source: string;
}

export function serviceIpAccessToTerraform(struct?: ServiceIpAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function serviceIpAccessToHclTerraform(struct?: ServiceIpAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIpAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceIpAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIpAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._source = value.source;
    }
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class ServiceIpAccessList extends cdktf.ComplexList {
  public internalValue? : ServiceIpAccess[] | cdktf.IResolvable

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
  public get(index: number): ServiceIpAccessOutputReference {
    return new ServiceIpAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePrivateEndpointConfig {
}

export function servicePrivateEndpointConfigToTerraform(struct?: ServicePrivateEndpointConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function servicePrivateEndpointConfigToHclTerraform(struct?: ServicePrivateEndpointConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ServicePrivateEndpointConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServicePrivateEndpointConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePrivateEndpointConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoint_service_id - computed: true, optional: false, required: false
  public get endpointServiceId() {
    return this.getStringAttribute('endpoint_service_id');
  }

  // private_dns_hostname - computed: true, optional: false, required: false
  public get privateDnsHostname() {
    return this.getStringAttribute('private_dns_hostname');
  }
}
export interface ServiceQueryApiEndpoints {
  /**
  * Comma separated list of domain names to be allowed cross-origin resource sharing (CORS) access to the query API. Leave this field empty to restrict access to backend servers only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service#allowed_origins Service#allowed_origins}
  */
  readonly allowedOrigins?: string;
  /**
  * The UUIDs of the API Keys to grant access to the query API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service#api_key_ids Service#api_key_ids}
  */
  readonly apiKeyIds: string[];
  /**
  * The Database role that will be used to run the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service#roles Service#roles}
  */
  readonly roles: string[];
}

export function serviceQueryApiEndpointsToTerraform(struct?: ServiceQueryApiEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_origins: cdktf.stringToTerraform(struct!.allowedOrigins),
    api_key_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiKeyIds),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
  }
}


export function serviceQueryApiEndpointsToHclTerraform(struct?: ServiceQueryApiEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_origins: {
      value: cdktf.stringToHclTerraform(struct!.allowedOrigins),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_key_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apiKeyIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class ServiceQueryApiEndpointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceQueryApiEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedOrigins = this._allowedOrigins;
    }
    if (this._apiKeyIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyIds = this._apiKeyIds;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceQueryApiEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedOrigins = undefined;
      this._apiKeyIds = undefined;
      this._roles = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedOrigins = value.allowedOrigins;
      this._apiKeyIds = value.apiKeyIds;
      this._roles = value.roles;
    }
  }

  // allowed_origins - computed: false, optional: true, required: false
  private _allowedOrigins?: string; 
  public get allowedOrigins() {
    return this.getStringAttribute('allowed_origins');
  }
  public set allowedOrigins(value: string) {
    this._allowedOrigins = value;
  }
  public resetAllowedOrigins() {
    this._allowedOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOriginsInput() {
    return this._allowedOrigins;
  }

  // api_key_ids - computed: false, optional: false, required: true
  private _apiKeyIds?: string[]; 
  public get apiKeyIds() {
    return this.getListAttribute('api_key_ids');
  }
  public set apiKeyIds(value: string[]) {
    this._apiKeyIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyIdsInput() {
    return this._apiKeyIds;
  }

  // roles - computed: false, optional: false, required: true
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }
}
export interface ServiceTransparentDataEncryption {
  /**
  * If true, TDE is enabled for the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service#enabled Service#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function serviceTransparentDataEncryptionToTerraform(struct?: ServiceTransparentDataEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function serviceTransparentDataEncryptionToHclTerraform(struct?: ServiceTransparentDataEncryption | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceTransparentDataEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceTransparentDataEncryption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceTransparentDataEncryption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
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

  // role_id - computed: true, optional: false, required: false
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service clickhouse_service}
*/
export class Service extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clickhouse_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Service resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Service to import
  * @param importFromId The id of the existing Service that should be imported. Refer to the {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Service to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clickhouse_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service clickhouse_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'clickhouse_service',
      terraformGeneratorMetadata: {
        providerName: 'clickhouse',
        providerVersion: '3.5.4',
        providerVersionConstraint: '3.5.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupConfiguration.internalValue = config.backupConfiguration;
    this._backupId = config.backupId;
    this._byocId = config.byocId;
    this._cloudProvider = config.cloudProvider;
    this._complianceType = config.complianceType;
    this._doubleSha1PasswordHash = config.doubleSha1PasswordHash;
    this._encryptionAssumedRoleIdentifier = config.encryptionAssumedRoleIdentifier;
    this._encryptionKey = config.encryptionKey;
    this._endpoints.internalValue = config.endpoints;
    this._idleScaling = config.idleScaling;
    this._idleTimeoutMinutes = config.idleTimeoutMinutes;
    this._ipAccess.internalValue = config.ipAccess;
    this._maxReplicaMemoryGb = config.maxReplicaMemoryGb;
    this._maxTotalMemoryGb = config.maxTotalMemoryGb;
    this._minReplicaMemoryGb = config.minReplicaMemoryGb;
    this._minTotalMemoryGb = config.minTotalMemoryGb;
    this._name = config.name;
    this._numReplicas = config.numReplicas;
    this._password = config.password;
    this._passwordHash = config.passwordHash;
    this._queryApiEndpoints.internalValue = config.queryApiEndpoints;
    this._readonly = config.readonly;
    this._region = config.region;
    this._releaseChannel = config.releaseChannel;
    this._tier = config.tier;
    this._transparentDataEncryption.internalValue = config.transparentDataEncryption;
    this._warehouseId = config.warehouseId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_configuration - computed: true, optional: true, required: false
  private _backupConfiguration = new ServiceBackupConfigurationOutputReference(this, "backup_configuration");
  public get backupConfiguration() {
    return this._backupConfiguration;
  }
  public putBackupConfiguration(value: ServiceBackupConfiguration) {
    this._backupConfiguration.internalValue = value;
  }
  public resetBackupConfiguration() {
    this._backupConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupConfigurationInput() {
    return this._backupConfiguration.internalValue;
  }

  // backup_id - computed: false, optional: true, required: false
  private _backupId?: string; 
  public get backupId() {
    return this.getStringAttribute('backup_id');
  }
  public set backupId(value: string) {
    this._backupId = value;
  }
  public resetBackupId() {
    this._backupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupIdInput() {
    return this._backupId;
  }

  // byoc_id - computed: false, optional: true, required: false
  private _byocId?: string; 
  public get byocId() {
    return this.getStringAttribute('byoc_id');
  }
  public set byocId(value: string) {
    this._byocId = value;
  }
  public resetByocId() {
    this._byocId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byocIdInput() {
    return this._byocId;
  }

  // cloud_provider - computed: false, optional: false, required: true
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // compliance_type - computed: false, optional: true, required: false
  private _complianceType?: string; 
  public get complianceType() {
    return this.getStringAttribute('compliance_type');
  }
  public set complianceType(value: string) {
    this._complianceType = value;
  }
  public resetComplianceType() {
    this._complianceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceTypeInput() {
    return this._complianceType;
  }

  // double_sha1_password_hash - computed: false, optional: true, required: false
  private _doubleSha1PasswordHash?: string; 
  public get doubleSha1PasswordHash() {
    return this.getStringAttribute('double_sha1_password_hash');
  }
  public set doubleSha1PasswordHash(value: string) {
    this._doubleSha1PasswordHash = value;
  }
  public resetDoubleSha1PasswordHash() {
    this._doubleSha1PasswordHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleSha1PasswordHashInput() {
    return this._doubleSha1PasswordHash;
  }

  // encryption_assumed_role_identifier - computed: false, optional: true, required: false
  private _encryptionAssumedRoleIdentifier?: string; 
  public get encryptionAssumedRoleIdentifier() {
    return this.getStringAttribute('encryption_assumed_role_identifier');
  }
  public set encryptionAssumedRoleIdentifier(value: string) {
    this._encryptionAssumedRoleIdentifier = value;
  }
  public resetEncryptionAssumedRoleIdentifier() {
    this._encryptionAssumedRoleIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAssumedRoleIdentifierInput() {
    return this._encryptionAssumedRoleIdentifier;
  }

  // encryption_key - computed: true, optional: true, required: false
  private _encryptionKey?: string; 
  public get encryptionKey() {
    return this.getStringAttribute('encryption_key');
  }
  public set encryptionKey(value: string) {
    this._encryptionKey = value;
  }
  public resetEncryptionKey() {
    this._encryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey;
  }

  // endpoints - computed: true, optional: true, required: false
  private _endpoints = new ServiceEndpointsOutputReference(this, "endpoints");
  public get endpoints() {
    return this._endpoints;
  }
  public putEndpoints(value: ServiceEndpoints) {
    this._endpoints.internalValue = value;
  }
  public resetEndpoints() {
    this._endpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints.internalValue;
  }

  // iam_role - computed: true, optional: false, required: false
  public get iamRole() {
    return this.getStringAttribute('iam_role');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idle_scaling - computed: true, optional: true, required: false
  private _idleScaling?: boolean | cdktf.IResolvable; 
  public get idleScaling() {
    return this.getBooleanAttribute('idle_scaling');
  }
  public set idleScaling(value: boolean | cdktf.IResolvable) {
    this._idleScaling = value;
  }
  public resetIdleScaling() {
    this._idleScaling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleScalingInput() {
    return this._idleScaling;
  }

  // idle_timeout_minutes - computed: true, optional: true, required: false
  private _idleTimeoutMinutes?: number; 
  public get idleTimeoutMinutes() {
    return this.getNumberAttribute('idle_timeout_minutes');
  }
  public set idleTimeoutMinutes(value: number) {
    this._idleTimeoutMinutes = value;
  }
  public resetIdleTimeoutMinutes() {
    this._idleTimeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutMinutesInput() {
    return this._idleTimeoutMinutes;
  }

  // ip_access - computed: false, optional: false, required: true
  private _ipAccess = new ServiceIpAccessList(this, "ip_access", false);
  public get ipAccess() {
    return this._ipAccess;
  }
  public putIpAccess(value: ServiceIpAccess[] | cdktf.IResolvable) {
    this._ipAccess.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAccessInput() {
    return this._ipAccess.internalValue;
  }

  // is_primary - computed: true, optional: false, required: false
  public get isPrimary() {
    return this.getBooleanAttribute('is_primary');
  }

  // max_replica_memory_gb - computed: true, optional: true, required: false
  private _maxReplicaMemoryGb?: number; 
  public get maxReplicaMemoryGb() {
    return this.getNumberAttribute('max_replica_memory_gb');
  }
  public set maxReplicaMemoryGb(value: number) {
    this._maxReplicaMemoryGb = value;
  }
  public resetMaxReplicaMemoryGb() {
    this._maxReplicaMemoryGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplicaMemoryGbInput() {
    return this._maxReplicaMemoryGb;
  }

  // max_total_memory_gb - computed: false, optional: true, required: false
  private _maxTotalMemoryGb?: number; 
  public get maxTotalMemoryGb() {
    return this.getNumberAttribute('max_total_memory_gb');
  }
  public set maxTotalMemoryGb(value: number) {
    this._maxTotalMemoryGb = value;
  }
  public resetMaxTotalMemoryGb() {
    this._maxTotalMemoryGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTotalMemoryGbInput() {
    return this._maxTotalMemoryGb;
  }

  // min_replica_memory_gb - computed: true, optional: true, required: false
  private _minReplicaMemoryGb?: number; 
  public get minReplicaMemoryGb() {
    return this.getNumberAttribute('min_replica_memory_gb');
  }
  public set minReplicaMemoryGb(value: number) {
    this._minReplicaMemoryGb = value;
  }
  public resetMinReplicaMemoryGb() {
    this._minReplicaMemoryGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReplicaMemoryGbInput() {
    return this._minReplicaMemoryGb;
  }

  // min_total_memory_gb - computed: false, optional: true, required: false
  private _minTotalMemoryGb?: number; 
  public get minTotalMemoryGb() {
    return this.getNumberAttribute('min_total_memory_gb');
  }
  public set minTotalMemoryGb(value: number) {
    this._minTotalMemoryGb = value;
  }
  public resetMinTotalMemoryGb() {
    this._minTotalMemoryGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTotalMemoryGbInput() {
    return this._minTotalMemoryGb;
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

  // num_replicas - computed: true, optional: true, required: false
  private _numReplicas?: number; 
  public get numReplicas() {
    return this.getNumberAttribute('num_replicas');
  }
  public set numReplicas(value: number) {
    this._numReplicas = value;
  }
  public resetNumReplicas() {
    this._numReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numReplicasInput() {
    return this._numReplicas;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_hash - computed: false, optional: true, required: false
  private _passwordHash?: string; 
  public get passwordHash() {
    return this.getStringAttribute('password_hash');
  }
  public set passwordHash(value: string) {
    this._passwordHash = value;
  }
  public resetPasswordHash() {
    this._passwordHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordHashInput() {
    return this._passwordHash;
  }

  // private_endpoint_config - computed: true, optional: false, required: false
  private _privateEndpointConfig = new ServicePrivateEndpointConfigOutputReference(this, "private_endpoint_config");
  public get privateEndpointConfig() {
    return this._privateEndpointConfig;
  }

  // query_api_endpoints - computed: false, optional: true, required: false
  private _queryApiEndpoints = new ServiceQueryApiEndpointsOutputReference(this, "query_api_endpoints");
  public get queryApiEndpoints() {
    return this._queryApiEndpoints;
  }
  public putQueryApiEndpoints(value: ServiceQueryApiEndpoints) {
    this._queryApiEndpoints.internalValue = value;
  }
  public resetQueryApiEndpoints() {
    this._queryApiEndpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryApiEndpointsInput() {
    return this._queryApiEndpoints.internalValue;
  }

  // readonly - computed: true, optional: true, required: false
  private _readonly?: boolean | cdktf.IResolvable; 
  public get readonly() {
    return this.getBooleanAttribute('readonly');
  }
  public set readonly(value: boolean | cdktf.IResolvable) {
    this._readonly = value;
  }
  public resetReadonly() {
    this._readonly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyInput() {
    return this._readonly;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // release_channel - computed: true, optional: true, required: false
  private _releaseChannel?: string; 
  public get releaseChannel() {
    return this.getStringAttribute('release_channel');
  }
  public set releaseChannel(value: string) {
    this._releaseChannel = value;
  }
  public resetReleaseChannel() {
    this._releaseChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseChannelInput() {
    return this._releaseChannel;
  }

  // tier - computed: false, optional: true, required: false
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  public resetTier() {
    this._tier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }

  // transparent_data_encryption - computed: true, optional: true, required: false
  private _transparentDataEncryption = new ServiceTransparentDataEncryptionOutputReference(this, "transparent_data_encryption");
  public get transparentDataEncryption() {
    return this._transparentDataEncryption;
  }
  public putTransparentDataEncryption(value: ServiceTransparentDataEncryption) {
    this._transparentDataEncryption.internalValue = value;
  }
  public resetTransparentDataEncryption() {
    this._transparentDataEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transparentDataEncryptionInput() {
    return this._transparentDataEncryption.internalValue;
  }

  // warehouse_id - computed: true, optional: true, required: false
  private _warehouseId?: string; 
  public get warehouseId() {
    return this.getStringAttribute('warehouse_id');
  }
  public set warehouseId(value: string) {
    this._warehouseId = value;
  }
  public resetWarehouseId() {
    this._warehouseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseIdInput() {
    return this._warehouseId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_configuration: serviceBackupConfigurationToTerraform(this._backupConfiguration.internalValue),
      backup_id: cdktf.stringToTerraform(this._backupId),
      byoc_id: cdktf.stringToTerraform(this._byocId),
      cloud_provider: cdktf.stringToTerraform(this._cloudProvider),
      compliance_type: cdktf.stringToTerraform(this._complianceType),
      double_sha1_password_hash: cdktf.stringToTerraform(this._doubleSha1PasswordHash),
      encryption_assumed_role_identifier: cdktf.stringToTerraform(this._encryptionAssumedRoleIdentifier),
      encryption_key: cdktf.stringToTerraform(this._encryptionKey),
      endpoints: serviceEndpointsToTerraform(this._endpoints.internalValue),
      idle_scaling: cdktf.booleanToTerraform(this._idleScaling),
      idle_timeout_minutes: cdktf.numberToTerraform(this._idleTimeoutMinutes),
      ip_access: cdktf.listMapper(serviceIpAccessToTerraform, false)(this._ipAccess.internalValue),
      max_replica_memory_gb: cdktf.numberToTerraform(this._maxReplicaMemoryGb),
      max_total_memory_gb: cdktf.numberToTerraform(this._maxTotalMemoryGb),
      min_replica_memory_gb: cdktf.numberToTerraform(this._minReplicaMemoryGb),
      min_total_memory_gb: cdktf.numberToTerraform(this._minTotalMemoryGb),
      name: cdktf.stringToTerraform(this._name),
      num_replicas: cdktf.numberToTerraform(this._numReplicas),
      password: cdktf.stringToTerraform(this._password),
      password_hash: cdktf.stringToTerraform(this._passwordHash),
      query_api_endpoints: serviceQueryApiEndpointsToTerraform(this._queryApiEndpoints.internalValue),
      readonly: cdktf.booleanToTerraform(this._readonly),
      region: cdktf.stringToTerraform(this._region),
      release_channel: cdktf.stringToTerraform(this._releaseChannel),
      tier: cdktf.stringToTerraform(this._tier),
      transparent_data_encryption: serviceTransparentDataEncryptionToTerraform(this._transparentDataEncryption.internalValue),
      warehouse_id: cdktf.stringToTerraform(this._warehouseId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_configuration: {
        value: serviceBackupConfigurationToHclTerraform(this._backupConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServiceBackupConfiguration",
      },
      backup_id: {
        value: cdktf.stringToHclTerraform(this._backupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      byoc_id: {
        value: cdktf.stringToHclTerraform(this._byocId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_provider: {
        value: cdktf.stringToHclTerraform(this._cloudProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compliance_type: {
        value: cdktf.stringToHclTerraform(this._complianceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      double_sha1_password_hash: {
        value: cdktf.stringToHclTerraform(this._doubleSha1PasswordHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_assumed_role_identifier: {
        value: cdktf.stringToHclTerraform(this._encryptionAssumedRoleIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_key: {
        value: cdktf.stringToHclTerraform(this._encryptionKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoints: {
        value: serviceEndpointsToHclTerraform(this._endpoints.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServiceEndpoints",
      },
      idle_scaling: {
        value: cdktf.booleanToHclTerraform(this._idleScaling),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      idle_timeout_minutes: {
        value: cdktf.numberToHclTerraform(this._idleTimeoutMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_access: {
        value: cdktf.listMapperHcl(serviceIpAccessToHclTerraform, false)(this._ipAccess.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceIpAccessList",
      },
      max_replica_memory_gb: {
        value: cdktf.numberToHclTerraform(this._maxReplicaMemoryGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_total_memory_gb: {
        value: cdktf.numberToHclTerraform(this._maxTotalMemoryGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_replica_memory_gb: {
        value: cdktf.numberToHclTerraform(this._minReplicaMemoryGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_total_memory_gb: {
        value: cdktf.numberToHclTerraform(this._minTotalMemoryGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      num_replicas: {
        value: cdktf.numberToHclTerraform(this._numReplicas),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_hash: {
        value: cdktf.stringToHclTerraform(this._passwordHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_api_endpoints: {
        value: serviceQueryApiEndpointsToHclTerraform(this._queryApiEndpoints.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServiceQueryApiEndpoints",
      },
      readonly: {
        value: cdktf.booleanToHclTerraform(this._readonly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      release_channel: {
        value: cdktf.stringToHclTerraform(this._releaseChannel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tier: {
        value: cdktf.stringToHclTerraform(this._tier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transparent_data_encryption: {
        value: serviceTransparentDataEncryptionToHclTerraform(this._transparentDataEncryption.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServiceTransparentDataEncryption",
      },
      warehouse_id: {
        value: cdktf.stringToHclTerraform(this._warehouseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
