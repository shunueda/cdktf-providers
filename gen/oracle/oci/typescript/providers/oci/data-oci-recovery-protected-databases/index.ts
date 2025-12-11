// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/recovery_protected_databases
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciRecoveryProtectedDatabasesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/recovery_protected_databases#compartment_id DataOciRecoveryProtectedDatabases#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/recovery_protected_databases#display_name DataOciRecoveryProtectedDatabases#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/recovery_protected_databases#id DataOciRecoveryProtectedDatabases#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/recovery_protected_databases#protection_policy_id DataOciRecoveryProtectedDatabases#protection_policy_id}
  */
  readonly protectionPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/recovery_protected_databases#recovery_service_subnet_id DataOciRecoveryProtectedDatabases#recovery_service_subnet_id}
  */
  readonly recoveryServiceSubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/recovery_protected_databases#state DataOciRecoveryProtectedDatabases#state}
  */
  readonly state?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/recovery_protected_databases#filter DataOciRecoveryProtectedDatabases#filter}
  */
  readonly filter?: DataOciRecoveryProtectedDatabasesFilter[] | cdktf.IResolvable;
}
export interface DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics {
}

export function dataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsToTerraform(struct?: DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsToHclTerraform(struct?: DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics | undefined) {
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

export class DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference {
    return new DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets {
}

export function dataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsToTerraform(struct?: DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsToHclTerraform(struct?: DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets | undefined) {
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

export class DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference {
    return new DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems {
}

export function dataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsToTerraform(struct?: DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsToHclTerraform(struct?: DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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
  private _metrics = new DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList(this, "metrics", false);
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

  // protection_policy_id - computed: true, optional: false, required: false
  public get protectionPolicyId() {
    return this.getStringAttribute('protection_policy_id');
  }

  // recovery_service_subnets - computed: true, optional: false, required: false
  private _recoveryServiceSubnets = new DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList(this, "recovery_service_subnets", false);
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
}

export class DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference {
    return new DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection {
}

export function dataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionToTerraform(struct?: DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionToHclTerraform(struct?: DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference {
    return new DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciRecoveryProtectedDatabasesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/recovery_protected_databases#name DataOciRecoveryProtectedDatabases#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/recovery_protected_databases#regex DataOciRecoveryProtectedDatabases#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/recovery_protected_databases#values DataOciRecoveryProtectedDatabases#values}
  */
  readonly values: string[];
}

export function dataOciRecoveryProtectedDatabasesFilterToTerraform(struct?: DataOciRecoveryProtectedDatabasesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciRecoveryProtectedDatabasesFilterToHclTerraform(struct?: DataOciRecoveryProtectedDatabasesFilter | cdktf.IResolvable): any {
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
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciRecoveryProtectedDatabasesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciRecoveryProtectedDatabasesFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciRecoveryProtectedDatabasesFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciRecoveryProtectedDatabasesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciRecoveryProtectedDatabasesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciRecoveryProtectedDatabasesFilterOutputReference {
    return new DataOciRecoveryProtectedDatabasesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/recovery_protected_databases oci_recovery_protected_databases}
*/
export class DataOciRecoveryProtectedDatabases extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_recovery_protected_databases";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciRecoveryProtectedDatabases resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciRecoveryProtectedDatabases to import
  * @param importFromId The id of the existing DataOciRecoveryProtectedDatabases that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/recovery_protected_databases#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciRecoveryProtectedDatabases to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_recovery_protected_databases", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/recovery_protected_databases oci_recovery_protected_databases} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciRecoveryProtectedDatabasesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciRecoveryProtectedDatabasesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_recovery_protected_databases',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._id = config.id;
    this._protectionPolicyId = config.protectionPolicyId;
    this._recoveryServiceSubnetId = config.recoveryServiceSubnetId;
    this._state = config.state;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: false, optional: true, required: false
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

  // protected_database_collection - computed: true, optional: false, required: false
  private _protectedDatabaseCollection = new DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList(this, "protected_database_collection", false);
  public get protectedDatabaseCollection() {
    return this._protectedDatabaseCollection;
  }

  // protection_policy_id - computed: false, optional: true, required: false
  private _protectionPolicyId?: string; 
  public get protectionPolicyId() {
    return this.getStringAttribute('protection_policy_id');
  }
  public set protectionPolicyId(value: string) {
    this._protectionPolicyId = value;
  }
  public resetProtectionPolicyId() {
    this._protectionPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionPolicyIdInput() {
    return this._protectionPolicyId;
  }

  // recovery_service_subnet_id - computed: false, optional: true, required: false
  private _recoveryServiceSubnetId?: string; 
  public get recoveryServiceSubnetId() {
    return this.getStringAttribute('recovery_service_subnet_id');
  }
  public set recoveryServiceSubnetId(value: string) {
    this._recoveryServiceSubnetId = value;
  }
  public resetRecoveryServiceSubnetId() {
    this._recoveryServiceSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryServiceSubnetIdInput() {
    return this._recoveryServiceSubnetId;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciRecoveryProtectedDatabasesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciRecoveryProtectedDatabasesFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      protection_policy_id: cdktf.stringToTerraform(this._protectionPolicyId),
      recovery_service_subnet_id: cdktf.stringToTerraform(this._recoveryServiceSubnetId),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciRecoveryProtectedDatabasesFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      protection_policy_id: {
        value: cdktf.stringToHclTerraform(this._protectionPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recovery_service_subnet_id: {
        value: cdktf.stringToHclTerraform(this._recoveryServiceSubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciRecoveryProtectedDatabasesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciRecoveryProtectedDatabasesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
