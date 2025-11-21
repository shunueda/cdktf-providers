// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/recovery_protected_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciRecoveryProtectedDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/recovery_protected_database#protected_database_id DataOciRecoveryProtectedDatabase#protected_database_id}
  */
  readonly protectedDatabaseId: string;
}
export interface DataOciRecoveryProtectedDatabaseMetrics {
}

export function dataOciRecoveryProtectedDatabaseMetricsToTerraform(struct?: DataOciRecoveryProtectedDatabaseMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciRecoveryProtectedDatabaseMetricsToHclTerraform(struct?: DataOciRecoveryProtectedDatabaseMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciRecoveryProtectedDatabaseMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciRecoveryProtectedDatabaseMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciRecoveryProtectedDatabaseMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_space_estimate_in_gbs - computed: true, optional: false, required: false
  public get backupSpaceEstimateInGbs() {
    return this.getNumberAttribute('backup_space_estimate_in_gbs');
  }

  // backup_space_used_in_gbs - computed: true, optional: false, required: false
  public get backupSpaceUsedInGbs() {
    return this.getNumberAttribute('backup_space_used_in_gbs');
  }

  // current_retention_period_in_seconds - computed: true, optional: false, required: false
  public get currentRetentionPeriodInSeconds() {
    return this.getNumberAttribute('current_retention_period_in_seconds');
  }

  // db_size_in_gbs - computed: true, optional: false, required: false
  public get dbSizeInGbs() {
    return this.getNumberAttribute('db_size_in_gbs');
  }

  // is_redo_logs_enabled - computed: true, optional: false, required: false
  public get isRedoLogsEnabled() {
    return this.getBooleanAttribute('is_redo_logs_enabled');
  }

  // minimum_recovery_needed_in_days - computed: true, optional: false, required: false
  public get minimumRecoveryNeededInDays() {
    return this.getNumberAttribute('minimum_recovery_needed_in_days');
  }

  // retention_period_in_days - computed: true, optional: false, required: false
  public get retentionPeriodInDays() {
    return this.getNumberAttribute('retention_period_in_days');
  }

  // unprotected_window_in_seconds - computed: true, optional: false, required: false
  public get unprotectedWindowInSeconds() {
    return this.getNumberAttribute('unprotected_window_in_seconds');
  }
}

export class DataOciRecoveryProtectedDatabaseMetricsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciRecoveryProtectedDatabaseMetricsOutputReference {
    return new DataOciRecoveryProtectedDatabaseMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciRecoveryProtectedDatabaseRecoveryServiceSubnets {
}

export function dataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsToTerraform(struct?: DataOciRecoveryProtectedDatabaseRecoveryServiceSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsToHclTerraform(struct?: DataOciRecoveryProtectedDatabaseRecoveryServiceSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciRecoveryProtectedDatabaseRecoveryServiceSubnets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciRecoveryProtectedDatabaseRecoveryServiceSubnets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // recovery_service_subnet_id - computed: true, optional: false, required: false
  public get recoveryServiceSubnetId() {
    return this.getStringAttribute('recovery_service_subnet_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference {
    return new DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/recovery_protected_database oci_recovery_protected_database}
*/
export class DataOciRecoveryProtectedDatabase extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_recovery_protected_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciRecoveryProtectedDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciRecoveryProtectedDatabase to import
  * @param importFromId The id of the existing DataOciRecoveryProtectedDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/recovery_protected_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciRecoveryProtectedDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_recovery_protected_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/recovery_protected_database oci_recovery_protected_database} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciRecoveryProtectedDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciRecoveryProtectedDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_recovery_protected_database',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._protectedDatabaseId = config.protectedDatabaseId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // database_id - computed: true, optional: false, required: false
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }

  // database_size - computed: true, optional: false, required: false
  public get databaseSize() {
    return this.getStringAttribute('database_size');
  }

  // db_unique_name - computed: true, optional: false, required: false
  public get dbUniqueName() {
    return this.getStringAttribute('db_unique_name');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // deletion_schedule - computed: true, optional: false, required: false
  public get deletionSchedule() {
    return this.getStringAttribute('deletion_schedule');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
  }

  // health_details - computed: true, optional: false, required: false
  public get healthDetails() {
    return this.getStringAttribute('health_details');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_read_only_resource - computed: true, optional: false, required: false
  public get isReadOnlyResource() {
    return this.getBooleanAttribute('is_read_only_resource');
  }

  // is_redo_logs_shipped - computed: true, optional: false, required: false
  public get isRedoLogsShipped() {
    return this.getBooleanAttribute('is_redo_logs_shipped');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // metrics - computed: true, optional: false, required: false
  private _metrics = new DataOciRecoveryProtectedDatabaseMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // policy_locked_date_time - computed: true, optional: false, required: false
  public get policyLockedDateTime() {
    return this.getStringAttribute('policy_locked_date_time');
  }

  // protected_database_id - computed: false, optional: false, required: true
  private _protectedDatabaseId?: string; 
  public get protectedDatabaseId() {
    return this.getStringAttribute('protected_database_id');
  }
  public set protectedDatabaseId(value: string) {
    this._protectedDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedDatabaseIdInput() {
    return this._protectedDatabaseId;
  }

  // protection_policy_id - computed: true, optional: false, required: false
  public get protectionPolicyId() {
    return this.getStringAttribute('protection_policy_id');
  }

  // recovery_service_subnets - computed: true, optional: false, required: false
  private _recoveryServiceSubnets = new DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList(this, "recovery_service_subnets", false);
  public get recoveryServiceSubnets() {
    return this._recoveryServiceSubnets;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subscription_id - computed: true, optional: false, required: false
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // vpc_user_name - computed: true, optional: false, required: false
  public get vpcUserName() {
    return this.getStringAttribute('vpc_user_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      protected_database_id: cdktf.stringToTerraform(this._protectedDatabaseId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      protected_database_id: {
        value: cdktf.stringToHclTerraform(this._protectedDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
