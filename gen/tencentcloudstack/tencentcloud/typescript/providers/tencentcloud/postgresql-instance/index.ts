// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PostgresqlInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Auto renew flag, `1` for enabled. NOTES: Only support prepaid instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance#auto_renew_flag PostgresqlInstance#auto_renew_flag}
  */
  readonly autoRenewFlag?: number;
  /**
  * Whether to use voucher, `1` for enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance#auto_voucher PostgresqlInstance#auto_voucher}
  */
  readonly autoVoucher?: number;
  /**
  * Availability zone. NOTE: This field could not be modified, please use `db_node_set` instead of modification. The changes on this field will be suppressed when using the `db_node_set`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance#availability_zone PostgresqlInstance#availability_zone}
  */
  readonly availabilityZone: string;
  /**
  * Pay type of the postgresql instance. Values `POSTPAID_BY_HOUR` (Default), `PREPAID`. It only support to update the type from `POSTPAID_BY_HOUR` to `PREPAID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance#charge_type PostgresqlInstance#charge_type}
  */
  readonly chargeType?: string;
  /**
  * Charset of the root account. Valid values are `UTF8`,`LATIN1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance#charset PostgresqlInstance#charset}
  */
  readonly charset?: string;
  /**
  * Number of CPU cores. Allowed value must be equal `cpu` that data source `tencentcloud_postgresql_specinfos` provides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance#cpu PostgresqlInstance#cpu}
  */
  readonly cpu?: number;
  /**
  * PostgreSQL kernel version number. If it is specified, an instance running kernel DBKernelVersion will be created. It supports updating the minor kernel version immediately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance#db_kernel_version PostgresqlInstance#db_kernel_version}
  */
  readonly dbKernelVersion?: string;
  /**
  * PostgreSQL major version number. Valid values: 10, 11, 12, 13, 14, 15, 16. If it is specified, an instance running the latest kernel of PostgreSQL DBMajorVersion will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance#db_major_version PostgresqlInstance#db_major_version}
  */
  readonly dbMajorVersion?: string;
  /**
  * PostgreSQL major version number. Valid values: 10, 11, 12, 13, 14, 15, 16. If it is specified, an instance running the latest kernel of PostgreSQL DBMajorVersion will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance#db_major_vesion PostgresqlInstance#db_major_vesion}
  */
  readonly dbMajorVesion?: string;
  /**
  * Whether to enable instance deletion protection. Default: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance#delete_protection PostgresqlInstance#delete_protection}
  */
  readonly deleteProtection?: boolean | cdktf.IResolvable;
  /**
  * Version of the postgresql database engine. Valid values: `10.4`, `10.17`, `10.23`, `11.8`, `11.12`, `11.22`, `12.4`, `12.7`, `12.18`, `13.3`, `14.2`, `14.11`, `15.1`, `16.0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance#engine_version PostgresqlInstance#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance#id PostgresqlInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify the cluster served by KMS. If KMSClusterId is blank, use the KMS of the default cluster. If you choose to specify a KMS cluster, you need to pass in KMSClusterId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance#kms_cluster_id PostgresqlInstance#kms_cluster_id}
  */
  readonly kmsClusterId?: string;
  /**
  * KeyId of the custom key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance#kms_key_id PostgresqlInstance#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Region of the custom key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance#kms_region PostgresqlInstance#kms_region}
  */
  readonly kmsRegion?: string;
  /**
  * max_standby_archive_delay applies when WAL data is being read from WAL archive (and is therefore not current). Units are milliseconds if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance#max_standby_archive_delay PostgresqlInstance#max_standby_archive_delay}
  */
  readonly maxStandbyArchiveDelay?: number;
  /**
  * max_standby_streaming_delay applies when WAL data is being received via streaming replication. Units are milliseconds if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance#max_standby_streaming_delay PostgresqlInstance#max_standby_streaming_delay}
  */
  readonly maxStandbyStreamingDelay?: number;
  /**
  * Memory size(in GB). Allowed value must be larger than `memory` that data source `tencentcloud_postgresql_specinfos` provides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance#memory PostgresqlInstance#memory}
  */
  readonly memory: number;
  /**
  * Name of the postgresql instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance#name PostgresqlInstance#name}
  */
  readonly name: string;
  /**
  * Whether to support data transparent encryption, 1: yes, 0: no (default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance#need_support_tde PostgresqlInstance#need_support_tde}
  */
  readonly needSupportTde?: number;
  /**
  * Specify Prepaid period in month. Default `1`. Values: `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `24`, `36`. This field is valid only when creating a `PREPAID` type instance, or updating the charge type from `POSTPAID_BY_HOUR` to `PREPAID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance#period PostgresqlInstance#period}
  */
  readonly period?: number;
  /**
  * Project id, default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance#project_id PostgresqlInstance#project_id}
  */
  readonly projectId?: number;
  /**
  * Indicates whether to enable the access to an instance from public network or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance#public_access_switch PostgresqlInstance#public_access_switch}
  */
  readonly publicAccessSwitch?: boolean | cdktf.IResolvable;
  /**
  * Password of root account. This parameter can be specified when you purchase master instances, but it should be ignored when you purchase read-only instances or disaster recovery instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance#root_password PostgresqlInstance#root_password}
  */
  readonly rootPassword: string;
  /**
  * Instance root account name. This parameter is optional, Default value is `root`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance#root_user PostgresqlInstance#root_user}
  */
  readonly rootUser?: string;
  /**
  * ID of security group. If both vpc_id and subnet_id are not set, this argument should not be set either.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance#security_groups PostgresqlInstance#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Volume size(in GB). Allowed value must be a multiple of 10. The storage must be set with the limit of `storage_min` and `storage_max` which data source `tencentcloud_postgresql_specinfos` provides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance#storage PostgresqlInstance#storage}
  */
  readonly storage: number;
  /**
  * ID of subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance#subnet_id PostgresqlInstance#subnet_id}
  */
  readonly subnetId: string;
  /**
  * The available tags within this postgresql.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance#tags PostgresqlInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Specify Voucher Ids if `auto_voucher` was `1`, only support using 1 vouchers for now.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance#voucher_ids PostgresqlInstance#voucher_ids}
  */
  readonly voucherIds?: string[];
  /**
  * ID of VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance#vpc_id PostgresqlInstance#vpc_id}
  */
  readonly vpcId: string;
  /**
  * Switch time after instance configurations are modified. `0`: Switch immediately; `2`: Switch during maintenance time window. Default: `0`. Note: This only takes effect when updating the `memory`, `storage`, `cpu`, `db_node_set`, `db_kernel_version` fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance#wait_switch PostgresqlInstance#wait_switch}
  */
  readonly waitSwitch?: number;
  /**
  * backup_plan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance#backup_plan PostgresqlInstance#backup_plan}
  */
  readonly backupPlan?: PostgresqlInstanceBackupPlan;
  /**
  * db_node_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance#db_node_set PostgresqlInstance#db_node_set}
  */
  readonly dbNodeSet?: PostgresqlInstanceDbNodeSet[] | cdktf.IResolvable;
}
export interface PostgresqlInstanceBackupPlan {
  /**
  * List of backup period per week, available values: `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`. NOTE: At least specify two days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance#backup_period PostgresqlInstance#backup_period}
  */
  readonly backupPeriod?: string[];
  /**
  * Specify days of the retention.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance#base_backup_retention_period PostgresqlInstance#base_backup_retention_period}
  */
  readonly baseBackupRetentionPeriod?: number;
  /**
  * Specify latest backup start time, format `hh:mm:ss`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance#max_backup_start_time PostgresqlInstance#max_backup_start_time}
  */
  readonly maxBackupStartTime?: string;
  /**
  * Specify earliest backup start time, format `hh:mm:ss`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance#min_backup_start_time PostgresqlInstance#min_backup_start_time}
  */
  readonly minBackupStartTime?: string;
  /**
  * If it is in monthly dimension, the format is numeric characters, such as ["1","2"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance#monthly_backup_period PostgresqlInstance#monthly_backup_period}
  */
  readonly monthlyBackupPeriod?: string[];
  /**
  * Specify days of the retention.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance#monthly_backup_retention_period PostgresqlInstance#monthly_backup_retention_period}
  */
  readonly monthlyBackupRetentionPeriod?: number;
}

export function postgresqlInstanceBackupPlanToTerraform(struct?: PostgresqlInstanceBackupPlanOutputReference | PostgresqlInstanceBackupPlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_period: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.backupPeriod),
    base_backup_retention_period: cdktf.numberToTerraform(struct!.baseBackupRetentionPeriod),
    max_backup_start_time: cdktf.stringToTerraform(struct!.maxBackupStartTime),
    min_backup_start_time: cdktf.stringToTerraform(struct!.minBackupStartTime),
    monthly_backup_period: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monthlyBackupPeriod),
    monthly_backup_retention_period: cdktf.numberToTerraform(struct!.monthlyBackupRetentionPeriod),
  }
}


export function postgresqlInstanceBackupPlanToHclTerraform(struct?: PostgresqlInstanceBackupPlanOutputReference | PostgresqlInstanceBackupPlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_period: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.backupPeriod),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    base_backup_retention_period: {
      value: cdktf.numberToHclTerraform(struct!.baseBackupRetentionPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_backup_start_time: {
      value: cdktf.stringToHclTerraform(struct!.maxBackupStartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_backup_start_time: {
      value: cdktf.stringToHclTerraform(struct!.minBackupStartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monthly_backup_period: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.monthlyBackupPeriod),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    monthly_backup_retention_period: {
      value: cdktf.numberToHclTerraform(struct!.monthlyBackupRetentionPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PostgresqlInstanceBackupPlanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PostgresqlInstanceBackupPlan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupPeriod = this._backupPeriod;
    }
    if (this._baseBackupRetentionPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseBackupRetentionPeriod = this._baseBackupRetentionPeriod;
    }
    if (this._maxBackupStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBackupStartTime = this._maxBackupStartTime;
    }
    if (this._minBackupStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.minBackupStartTime = this._minBackupStartTime;
    }
    if (this._monthlyBackupPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthlyBackupPeriod = this._monthlyBackupPeriod;
    }
    if (this._monthlyBackupRetentionPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthlyBackupRetentionPeriod = this._monthlyBackupRetentionPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PostgresqlInstanceBackupPlan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupPeriod = undefined;
      this._baseBackupRetentionPeriod = undefined;
      this._maxBackupStartTime = undefined;
      this._minBackupStartTime = undefined;
      this._monthlyBackupPeriod = undefined;
      this._monthlyBackupRetentionPeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupPeriod = value.backupPeriod;
      this._baseBackupRetentionPeriod = value.baseBackupRetentionPeriod;
      this._maxBackupStartTime = value.maxBackupStartTime;
      this._minBackupStartTime = value.minBackupStartTime;
      this._monthlyBackupPeriod = value.monthlyBackupPeriod;
      this._monthlyBackupRetentionPeriod = value.monthlyBackupRetentionPeriod;
    }
  }

  // backup_period - computed: true, optional: true, required: false
  private _backupPeriod?: string[]; 
  public get backupPeriod() {
    return this.getListAttribute('backup_period');
  }
  public set backupPeriod(value: string[]) {
    this._backupPeriod = value;
  }
  public resetBackupPeriod() {
    this._backupPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPeriodInput() {
    return this._backupPeriod;
  }

  // base_backup_retention_period - computed: true, optional: true, required: false
  private _baseBackupRetentionPeriod?: number; 
  public get baseBackupRetentionPeriod() {
    return this.getNumberAttribute('base_backup_retention_period');
  }
  public set baseBackupRetentionPeriod(value: number) {
    this._baseBackupRetentionPeriod = value;
  }
  public resetBaseBackupRetentionPeriod() {
    this._baseBackupRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseBackupRetentionPeriodInput() {
    return this._baseBackupRetentionPeriod;
  }

  // max_backup_start_time - computed: true, optional: true, required: false
  private _maxBackupStartTime?: string; 
  public get maxBackupStartTime() {
    return this.getStringAttribute('max_backup_start_time');
  }
  public set maxBackupStartTime(value: string) {
    this._maxBackupStartTime = value;
  }
  public resetMaxBackupStartTime() {
    this._maxBackupStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBackupStartTimeInput() {
    return this._maxBackupStartTime;
  }

  // min_backup_start_time - computed: true, optional: true, required: false
  private _minBackupStartTime?: string; 
  public get minBackupStartTime() {
    return this.getStringAttribute('min_backup_start_time');
  }
  public set minBackupStartTime(value: string) {
    this._minBackupStartTime = value;
  }
  public resetMinBackupStartTime() {
    this._minBackupStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minBackupStartTimeInput() {
    return this._minBackupStartTime;
  }

  // monthly_backup_period - computed: false, optional: true, required: false
  private _monthlyBackupPeriod?: string[]; 
  public get monthlyBackupPeriod() {
    return this.getListAttribute('monthly_backup_period');
  }
  public set monthlyBackupPeriod(value: string[]) {
    this._monthlyBackupPeriod = value;
  }
  public resetMonthlyBackupPeriod() {
    this._monthlyBackupPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyBackupPeriodInput() {
    return this._monthlyBackupPeriod;
  }

  // monthly_backup_retention_period - computed: false, optional: true, required: false
  private _monthlyBackupRetentionPeriod?: number; 
  public get monthlyBackupRetentionPeriod() {
    return this.getNumberAttribute('monthly_backup_retention_period');
  }
  public set monthlyBackupRetentionPeriod(value: number) {
    this._monthlyBackupRetentionPeriod = value;
  }
  public resetMonthlyBackupRetentionPeriod() {
    this._monthlyBackupRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyBackupRetentionPeriodInput() {
    return this._monthlyBackupRetentionPeriod;
  }

  // monthly_plan_id - computed: true, optional: false, required: false
  public get monthlyPlanId() {
    return this.getStringAttribute('monthly_plan_id');
  }
}
export interface PostgresqlInstanceDbNodeSet {
  /**
  * Dedicated cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance#dedicated_cluster_id PostgresqlInstance#dedicated_cluster_id}
  */
  readonly dedicatedClusterId?: string;
  /**
  * Indicates node type, available values:`Primary`, `Standby`. Default: `Standby`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance#role PostgresqlInstance#role}
  */
  readonly role?: string;
  /**
  * Indicates the node available zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance#zone PostgresqlInstance#zone}
  */
  readonly zone: string;
}

export function postgresqlInstanceDbNodeSetToTerraform(struct?: PostgresqlInstanceDbNodeSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dedicated_cluster_id: cdktf.stringToTerraform(struct!.dedicatedClusterId),
    role: cdktf.stringToTerraform(struct!.role),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function postgresqlInstanceDbNodeSetToHclTerraform(struct?: PostgresqlInstanceDbNodeSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dedicated_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.dedicatedClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
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

export class PostgresqlInstanceDbNodeSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PostgresqlInstanceDbNodeSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dedicatedClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicatedClusterId = this._dedicatedClusterId;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PostgresqlInstanceDbNodeSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dedicatedClusterId = undefined;
      this._role = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dedicatedClusterId = value.dedicatedClusterId;
      this._role = value.role;
      this._zone = value.zone;
    }
  }

  // dedicated_cluster_id - computed: false, optional: true, required: false
  private _dedicatedClusterId?: string; 
  public get dedicatedClusterId() {
    return this.getStringAttribute('dedicated_cluster_id');
  }
  public set dedicatedClusterId(value: string) {
    this._dedicatedClusterId = value;
  }
  public resetDedicatedClusterId() {
    this._dedicatedClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedClusterIdInput() {
    return this._dedicatedClusterId;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
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

export class PostgresqlInstanceDbNodeSetList extends cdktf.ComplexList {
  public internalValue? : PostgresqlInstanceDbNodeSet[] | cdktf.IResolvable

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
  public get(index: number): PostgresqlInstanceDbNodeSetOutputReference {
    return new PostgresqlInstanceDbNodeSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance tencentcloud_postgresql_instance}
*/
export class PostgresqlInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_postgresql_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PostgresqlInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PostgresqlInstance to import
  * @param importFromId The id of the existing PostgresqlInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PostgresqlInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_postgresql_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_instance tencentcloud_postgresql_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PostgresqlInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: PostgresqlInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_postgresql_instance',
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
    this._autoRenewFlag = config.autoRenewFlag;
    this._autoVoucher = config.autoVoucher;
    this._availabilityZone = config.availabilityZone;
    this._chargeType = config.chargeType;
    this._charset = config.charset;
    this._cpu = config.cpu;
    this._dbKernelVersion = config.dbKernelVersion;
    this._dbMajorVersion = config.dbMajorVersion;
    this._dbMajorVesion = config.dbMajorVesion;
    this._deleteProtection = config.deleteProtection;
    this._engineVersion = config.engineVersion;
    this._id = config.id;
    this._kmsClusterId = config.kmsClusterId;
    this._kmsKeyId = config.kmsKeyId;
    this._kmsRegion = config.kmsRegion;
    this._maxStandbyArchiveDelay = config.maxStandbyArchiveDelay;
    this._maxStandbyStreamingDelay = config.maxStandbyStreamingDelay;
    this._memory = config.memory;
    this._name = config.name;
    this._needSupportTde = config.needSupportTde;
    this._period = config.period;
    this._projectId = config.projectId;
    this._publicAccessSwitch = config.publicAccessSwitch;
    this._rootPassword = config.rootPassword;
    this._rootUser = config.rootUser;
    this._securityGroups = config.securityGroups;
    this._storage = config.storage;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._voucherIds = config.voucherIds;
    this._vpcId = config.vpcId;
    this._waitSwitch = config.waitSwitch;
    this._backupPlan.internalValue = config.backupPlan;
    this._dbNodeSet.internalValue = config.dbNodeSet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_renew_flag - computed: false, optional: true, required: false
  private _autoRenewFlag?: number; 
  public get autoRenewFlag() {
    return this.getNumberAttribute('auto_renew_flag');
  }
  public set autoRenewFlag(value: number) {
    this._autoRenewFlag = value;
  }
  public resetAutoRenewFlag() {
    this._autoRenewFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewFlagInput() {
    return this._autoRenewFlag;
  }

  // auto_voucher - computed: false, optional: true, required: false
  private _autoVoucher?: number; 
  public get autoVoucher() {
    return this.getNumberAttribute('auto_voucher');
  }
  public set autoVoucher(value: number) {
    this._autoVoucher = value;
  }
  public resetAutoVoucher() {
    this._autoVoucher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoVoucherInput() {
    return this._autoVoucher;
  }

  // availability_zone - computed: false, optional: false, required: true
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // charge_type - computed: false, optional: true, required: false
  private _chargeType?: string; 
  public get chargeType() {
    return this.getStringAttribute('charge_type');
  }
  public set chargeType(value: string) {
    this._chargeType = value;
  }
  public resetChargeType() {
    this._chargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chargeTypeInput() {
    return this._chargeType;
  }

  // charset - computed: false, optional: true, required: false
  private _charset?: string; 
  public get charset() {
    return this.getStringAttribute('charset');
  }
  public set charset(value: string) {
    this._charset = value;
  }
  public resetCharset() {
    this._charset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get charsetInput() {
    return this._charset;
  }

  // cpu - computed: true, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // db_kernel_version - computed: true, optional: true, required: false
  private _dbKernelVersion?: string; 
  public get dbKernelVersion() {
    return this.getStringAttribute('db_kernel_version');
  }
  public set dbKernelVersion(value: string) {
    this._dbKernelVersion = value;
  }
  public resetDbKernelVersion() {
    this._dbKernelVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbKernelVersionInput() {
    return this._dbKernelVersion;
  }

  // db_major_version - computed: true, optional: true, required: false
  private _dbMajorVersion?: string; 
  public get dbMajorVersion() {
    return this.getStringAttribute('db_major_version');
  }
  public set dbMajorVersion(value: string) {
    this._dbMajorVersion = value;
  }
  public resetDbMajorVersion() {
    this._dbMajorVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbMajorVersionInput() {
    return this._dbMajorVersion;
  }

  // db_major_vesion - computed: true, optional: true, required: false
  private _dbMajorVesion?: string; 
  public get dbMajorVesion() {
    return this.getStringAttribute('db_major_vesion');
  }
  public set dbMajorVesion(value: string) {
    this._dbMajorVesion = value;
  }
  public resetDbMajorVesion() {
    this._dbMajorVesion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbMajorVesionInput() {
    return this._dbMajorVesion;
  }

  // delete_protection - computed: false, optional: true, required: false
  private _deleteProtection?: boolean | cdktf.IResolvable; 
  public get deleteProtection() {
    return this.getBooleanAttribute('delete_protection');
  }
  public set deleteProtection(value: boolean | cdktf.IResolvable) {
    this._deleteProtection = value;
  }
  public resetDeleteProtection() {
    this._deleteProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteProtectionInput() {
    return this._deleteProtection;
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

  // kms_cluster_id - computed: true, optional: true, required: false
  private _kmsClusterId?: string; 
  public get kmsClusterId() {
    return this.getStringAttribute('kms_cluster_id');
  }
  public set kmsClusterId(value: string) {
    this._kmsClusterId = value;
  }
  public resetKmsClusterId() {
    this._kmsClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsClusterIdInput() {
    return this._kmsClusterId;
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

  // kms_region - computed: true, optional: true, required: false
  private _kmsRegion?: string; 
  public get kmsRegion() {
    return this.getStringAttribute('kms_region');
  }
  public set kmsRegion(value: string) {
    this._kmsRegion = value;
  }
  public resetKmsRegion() {
    this._kmsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsRegionInput() {
    return this._kmsRegion;
  }

  // max_standby_archive_delay - computed: true, optional: true, required: false
  private _maxStandbyArchiveDelay?: number; 
  public get maxStandbyArchiveDelay() {
    return this.getNumberAttribute('max_standby_archive_delay');
  }
  public set maxStandbyArchiveDelay(value: number) {
    this._maxStandbyArchiveDelay = value;
  }
  public resetMaxStandbyArchiveDelay() {
    this._maxStandbyArchiveDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStandbyArchiveDelayInput() {
    return this._maxStandbyArchiveDelay;
  }

  // max_standby_streaming_delay - computed: true, optional: true, required: false
  private _maxStandbyStreamingDelay?: number; 
  public get maxStandbyStreamingDelay() {
    return this.getNumberAttribute('max_standby_streaming_delay');
  }
  public set maxStandbyStreamingDelay(value: number) {
    this._maxStandbyStreamingDelay = value;
  }
  public resetMaxStandbyStreamingDelay() {
    this._maxStandbyStreamingDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStandbyStreamingDelayInput() {
    return this._maxStandbyStreamingDelay;
  }

  // memory - computed: false, optional: false, required: true
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
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

  // need_support_tde - computed: true, optional: true, required: false
  private _needSupportTde?: number; 
  public get needSupportTde() {
    return this.getNumberAttribute('need_support_tde');
  }
  public set needSupportTde(value: number) {
    this._needSupportTde = value;
  }
  public resetNeedSupportTde() {
    this._needSupportTde = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get needSupportTdeInput() {
    return this._needSupportTde;
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // private_access_ip - computed: true, optional: false, required: false
  public get privateAccessIp() {
    return this.getStringAttribute('private_access_ip');
  }

  // private_access_port - computed: true, optional: false, required: false
  public get privateAccessPort() {
    return this.getNumberAttribute('private_access_port');
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // public_access_host - computed: true, optional: false, required: false
  public get publicAccessHost() {
    return this.getStringAttribute('public_access_host');
  }

  // public_access_port - computed: true, optional: false, required: false
  public get publicAccessPort() {
    return this.getNumberAttribute('public_access_port');
  }

  // public_access_switch - computed: false, optional: true, required: false
  private _publicAccessSwitch?: boolean | cdktf.IResolvable; 
  public get publicAccessSwitch() {
    return this.getBooleanAttribute('public_access_switch');
  }
  public set publicAccessSwitch(value: boolean | cdktf.IResolvable) {
    this._publicAccessSwitch = value;
  }
  public resetPublicAccessSwitch() {
    this._publicAccessSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAccessSwitchInput() {
    return this._publicAccessSwitch;
  }

  // root_password - computed: false, optional: false, required: true
  private _rootPassword?: string; 
  public get rootPassword() {
    return this.getStringAttribute('root_password');
  }
  public set rootPassword(value: string) {
    this._rootPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPasswordInput() {
    return this._rootPassword;
  }

  // root_user - computed: false, optional: true, required: false
  private _rootUser?: string; 
  public get rootUser() {
    return this.getStringAttribute('root_user');
  }
  public set rootUser(value: string) {
    this._rootUser = value;
  }
  public resetRootUser() {
    this._rootUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootUserInput() {
    return this._rootUser;
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('security_groups'));
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // storage - computed: false, optional: false, required: true
  private _storage?: number; 
  public get storage() {
    return this.getNumberAttribute('storage');
  }
  public set storage(value: number) {
    this._storage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getNumberAttribute('uid');
  }

  // voucher_ids - computed: false, optional: true, required: false
  private _voucherIds?: string[]; 
  public get voucherIds() {
    return this.getListAttribute('voucher_ids');
  }
  public set voucherIds(value: string[]) {
    this._voucherIds = value;
  }
  public resetVoucherIds() {
    this._voucherIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voucherIdsInput() {
    return this._voucherIds;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // wait_switch - computed: false, optional: true, required: false
  private _waitSwitch?: number; 
  public get waitSwitch() {
    return this.getNumberAttribute('wait_switch');
  }
  public set waitSwitch(value: number) {
    this._waitSwitch = value;
  }
  public resetWaitSwitch() {
    this._waitSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitSwitchInput() {
    return this._waitSwitch;
  }

  // backup_plan - computed: false, optional: true, required: false
  private _backupPlan = new PostgresqlInstanceBackupPlanOutputReference(this, "backup_plan");
  public get backupPlan() {
    return this._backupPlan;
  }
  public putBackupPlan(value: PostgresqlInstanceBackupPlan) {
    this._backupPlan.internalValue = value;
  }
  public resetBackupPlan() {
    this._backupPlan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPlanInput() {
    return this._backupPlan.internalValue;
  }

  // db_node_set - computed: false, optional: true, required: false
  private _dbNodeSet = new PostgresqlInstanceDbNodeSetList(this, "db_node_set", true);
  public get dbNodeSet() {
    return this._dbNodeSet;
  }
  public putDbNodeSet(value: PostgresqlInstanceDbNodeSet[] | cdktf.IResolvable) {
    this._dbNodeSet.internalValue = value;
  }
  public resetDbNodeSet() {
    this._dbNodeSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNodeSetInput() {
    return this._dbNodeSet.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_renew_flag: cdktf.numberToTerraform(this._autoRenewFlag),
      auto_voucher: cdktf.numberToTerraform(this._autoVoucher),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      charge_type: cdktf.stringToTerraform(this._chargeType),
      charset: cdktf.stringToTerraform(this._charset),
      cpu: cdktf.numberToTerraform(this._cpu),
      db_kernel_version: cdktf.stringToTerraform(this._dbKernelVersion),
      db_major_version: cdktf.stringToTerraform(this._dbMajorVersion),
      db_major_vesion: cdktf.stringToTerraform(this._dbMajorVesion),
      delete_protection: cdktf.booleanToTerraform(this._deleteProtection),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      id: cdktf.stringToTerraform(this._id),
      kms_cluster_id: cdktf.stringToTerraform(this._kmsClusterId),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      kms_region: cdktf.stringToTerraform(this._kmsRegion),
      max_standby_archive_delay: cdktf.numberToTerraform(this._maxStandbyArchiveDelay),
      max_standby_streaming_delay: cdktf.numberToTerraform(this._maxStandbyStreamingDelay),
      memory: cdktf.numberToTerraform(this._memory),
      name: cdktf.stringToTerraform(this._name),
      need_support_tde: cdktf.numberToTerraform(this._needSupportTde),
      period: cdktf.numberToTerraform(this._period),
      project_id: cdktf.numberToTerraform(this._projectId),
      public_access_switch: cdktf.booleanToTerraform(this._publicAccessSwitch),
      root_password: cdktf.stringToTerraform(this._rootPassword),
      root_user: cdktf.stringToTerraform(this._rootUser),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroups),
      storage: cdktf.numberToTerraform(this._storage),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      voucher_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._voucherIds),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      wait_switch: cdktf.numberToTerraform(this._waitSwitch),
      backup_plan: postgresqlInstanceBackupPlanToTerraform(this._backupPlan.internalValue),
      db_node_set: cdktf.listMapper(postgresqlInstanceDbNodeSetToTerraform, true)(this._dbNodeSet.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_renew_flag: {
        value: cdktf.numberToHclTerraform(this._autoRenewFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_voucher: {
        value: cdktf.numberToHclTerraform(this._autoVoucher),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      charge_type: {
        value: cdktf.stringToHclTerraform(this._chargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      charset: {
        value: cdktf.stringToHclTerraform(this._charset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu: {
        value: cdktf.numberToHclTerraform(this._cpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_kernel_version: {
        value: cdktf.stringToHclTerraform(this._dbKernelVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_major_version: {
        value: cdktf.stringToHclTerraform(this._dbMajorVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_major_vesion: {
        value: cdktf.stringToHclTerraform(this._dbMajorVesion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_protection: {
        value: cdktf.booleanToHclTerraform(this._deleteProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      engine_version: {
        value: cdktf.stringToHclTerraform(this._engineVersion),
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
      kms_cluster_id: {
        value: cdktf.stringToHclTerraform(this._kmsClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_region: {
        value: cdktf.stringToHclTerraform(this._kmsRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_standby_archive_delay: {
        value: cdktf.numberToHclTerraform(this._maxStandbyArchiveDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_standby_streaming_delay: {
        value: cdktf.numberToHclTerraform(this._maxStandbyStreamingDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memory: {
        value: cdktf.numberToHclTerraform(this._memory),
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
      need_support_tde: {
        value: cdktf.numberToHclTerraform(this._needSupportTde),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      public_access_switch: {
        value: cdktf.booleanToHclTerraform(this._publicAccessSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      root_password: {
        value: cdktf.stringToHclTerraform(this._rootPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      root_user: {
        value: cdktf.stringToHclTerraform(this._rootUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      storage: {
        value: cdktf.numberToHclTerraform(this._storage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      voucher_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._voucherIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_switch: {
        value: cdktf.numberToHclTerraform(this._waitSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backup_plan: {
        value: postgresqlInstanceBackupPlanToHclTerraform(this._backupPlan.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PostgresqlInstanceBackupPlanList",
      },
      db_node_set: {
        value: cdktf.listMapperHcl(postgresqlInstanceDbNodeSetToHclTerraform, true)(this._dbNodeSet.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PostgresqlInstanceDbNodeSetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
