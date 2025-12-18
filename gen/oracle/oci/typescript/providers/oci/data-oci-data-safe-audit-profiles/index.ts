// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_audit_profiles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeAuditProfilesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_audit_profiles#access_level DataOciDataSafeAuditProfiles#access_level}
  */
  readonly accessLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_audit_profiles#audit_collected_volume_greater_than_or_equal_to DataOciDataSafeAuditProfiles#audit_collected_volume_greater_than_or_equal_to}
  */
  readonly auditCollectedVolumeGreaterThanOrEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_audit_profiles#audit_profile_id DataOciDataSafeAuditProfiles#audit_profile_id}
  */
  readonly auditProfileId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_audit_profiles#compartment_id DataOciDataSafeAuditProfiles#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_audit_profiles#compartment_id_in_subtree DataOciDataSafeAuditProfiles#compartment_id_in_subtree}
  */
  readonly compartmentIdInSubtree?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_audit_profiles#display_name DataOciDataSafeAuditProfiles#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_audit_profiles#id DataOciDataSafeAuditProfiles#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_audit_profiles#is_override_global_retention_setting DataOciDataSafeAuditProfiles#is_override_global_retention_setting}
  */
  readonly isOverrideGlobalRetentionSetting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_audit_profiles#is_paid_usage_enabled DataOciDataSafeAuditProfiles#is_paid_usage_enabled}
  */
  readonly isPaidUsageEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_audit_profiles#state DataOciDataSafeAuditProfiles#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_audit_profiles#target_database_group_id DataOciDataSafeAuditProfiles#target_database_group_id}
  */
  readonly targetDatabaseGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_audit_profiles#target_id DataOciDataSafeAuditProfiles#target_id}
  */
  readonly targetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_audit_profiles#target_type DataOciDataSafeAuditProfiles#target_type}
  */
  readonly targetType?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_audit_profiles#filter DataOciDataSafeAuditProfiles#filter}
  */
  readonly filter?: DataOciDataSafeAuditProfilesFilter[] | cdktf.IResolvable;
}
export interface DataOciDataSafeAuditProfilesAuditProfileCollectionItemsAuditTrails {
}

export function dataOciDataSafeAuditProfilesAuditProfileCollectionItemsAuditTrailsToTerraform(struct?: DataOciDataSafeAuditProfilesAuditProfileCollectionItemsAuditTrails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeAuditProfilesAuditProfileCollectionItemsAuditTrailsToHclTerraform(struct?: DataOciDataSafeAuditProfilesAuditProfileCollectionItemsAuditTrails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeAuditProfilesAuditProfileCollectionItemsAuditTrailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeAuditProfilesAuditProfileCollectionItemsAuditTrails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeAuditProfilesAuditProfileCollectionItemsAuditTrails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audit_collection_start_time - computed: true, optional: false, required: false
  public get auditCollectionStartTime() {
    return this.getStringAttribute('audit_collection_start_time');
  }

  // audit_profile_id - computed: true, optional: false, required: false
  public get auditProfileId() {
    return this.getStringAttribute('audit_profile_id');
  }

  // can_update_last_archive_time_on_target - computed: true, optional: false, required: false
  public get canUpdateLastArchiveTimeOnTarget() {
    return this.getBooleanAttribute('can_update_last_archive_time_on_target');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_auto_purge_enabled - computed: true, optional: false, required: false
  public get isAutoPurgeEnabled() {
    return this.getBooleanAttribute('is_auto_purge_enabled');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // peer_target_database_key - computed: true, optional: false, required: false
  public get peerTargetDatabaseKey() {
    return this.getNumberAttribute('peer_target_database_key');
  }

  // purge_job_details - computed: true, optional: false, required: false
  public get purgeJobDetails() {
    return this.getStringAttribute('purge_job_details');
  }

  // purge_job_status - computed: true, optional: false, required: false
  public get purgeJobStatus() {
    return this.getStringAttribute('purge_job_status');
  }

  // purge_job_time - computed: true, optional: false, required: false
  public get purgeJobTime() {
    return this.getStringAttribute('purge_job_time');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_last_collected - computed: true, optional: false, required: false
  public get timeLastCollected() {
    return this.getStringAttribute('time_last_collected');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // trail_location - computed: true, optional: false, required: false
  public get trailLocation() {
    return this.getStringAttribute('trail_location');
  }

  // trail_source - computed: true, optional: false, required: false
  public get trailSource() {
    return this.getStringAttribute('trail_source');
  }

  // work_request_id - computed: true, optional: false, required: false
  public get workRequestId() {
    return this.getStringAttribute('work_request_id');
  }
}

export class DataOciDataSafeAuditProfilesAuditProfileCollectionItemsAuditTrailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeAuditProfilesAuditProfileCollectionItemsAuditTrailsOutputReference {
    return new DataOciDataSafeAuditProfilesAuditProfileCollectionItemsAuditTrailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeAuditProfilesAuditProfileCollectionItems {
}

export function dataOciDataSafeAuditProfilesAuditProfileCollectionItemsToTerraform(struct?: DataOciDataSafeAuditProfilesAuditProfileCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeAuditProfilesAuditProfileCollectionItemsToHclTerraform(struct?: DataOciDataSafeAuditProfilesAuditProfileCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeAuditProfilesAuditProfileCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeAuditProfilesAuditProfileCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeAuditProfilesAuditProfileCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audit_collected_volume - computed: true, optional: false, required: false
  public get auditCollectedVolume() {
    return this.getStringAttribute('audit_collected_volume');
  }

  // audit_trails - computed: true, optional: false, required: false
  private _auditTrails = new DataOciDataSafeAuditProfilesAuditProfileCollectionItemsAuditTrailsList(this, "audit_trails", false);
  public get auditTrails() {
    return this._auditTrails;
  }

  // change_retention_trigger - computed: true, optional: false, required: false
  public get changeRetentionTrigger() {
    return this.getNumberAttribute('change_retention_trigger');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_override_global_paid_usage - computed: true, optional: false, required: false
  public get isOverrideGlobalPaidUsage() {
    return this.getBooleanAttribute('is_override_global_paid_usage');
  }

  // is_override_global_retention_setting - computed: true, optional: false, required: false
  public get isOverrideGlobalRetentionSetting() {
    return this.getBooleanAttribute('is_override_global_retention_setting');
  }

  // is_paid_usage_enabled - computed: true, optional: false, required: false
  public get isPaidUsageEnabled() {
    return this.getBooleanAttribute('is_paid_usage_enabled');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // offline_months - computed: true, optional: false, required: false
  public get offlineMonths() {
    return this.getNumberAttribute('offline_months');
  }

  // offline_months_source - computed: true, optional: false, required: false
  public get offlineMonthsSource() {
    return this.getStringAttribute('offline_months_source');
  }

  // online_months - computed: true, optional: false, required: false
  public get onlineMonths() {
    return this.getNumberAttribute('online_months');
  }

  // online_months_source - computed: true, optional: false, required: false
  public get onlineMonthsSource() {
    return this.getStringAttribute('online_months_source');
  }

  // paid_usage_source - computed: true, optional: false, required: false
  public get paidUsageSource() {
    return this.getStringAttribute('paid_usage_source');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // target_type - computed: true, optional: false, required: false
  public get targetType() {
    return this.getStringAttribute('target_type');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }
}

export class DataOciDataSafeAuditProfilesAuditProfileCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeAuditProfilesAuditProfileCollectionItemsOutputReference {
    return new DataOciDataSafeAuditProfilesAuditProfileCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeAuditProfilesAuditProfileCollection {
}

export function dataOciDataSafeAuditProfilesAuditProfileCollectionToTerraform(struct?: DataOciDataSafeAuditProfilesAuditProfileCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeAuditProfilesAuditProfileCollectionToHclTerraform(struct?: DataOciDataSafeAuditProfilesAuditProfileCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeAuditProfilesAuditProfileCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeAuditProfilesAuditProfileCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeAuditProfilesAuditProfileCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDataSafeAuditProfilesAuditProfileCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDataSafeAuditProfilesAuditProfileCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeAuditProfilesAuditProfileCollectionOutputReference {
    return new DataOciDataSafeAuditProfilesAuditProfileCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeAuditProfilesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_audit_profiles#name DataOciDataSafeAuditProfiles#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_audit_profiles#regex DataOciDataSafeAuditProfiles#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_audit_profiles#values DataOciDataSafeAuditProfiles#values}
  */
  readonly values: string[];
}

export function dataOciDataSafeAuditProfilesFilterToTerraform(struct?: DataOciDataSafeAuditProfilesFilter | cdktf.IResolvable): any {
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


export function dataOciDataSafeAuditProfilesFilterToHclTerraform(struct?: DataOciDataSafeAuditProfilesFilter | cdktf.IResolvable): any {
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

export class DataOciDataSafeAuditProfilesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeAuditProfilesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDataSafeAuditProfilesFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDataSafeAuditProfilesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDataSafeAuditProfilesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDataSafeAuditProfilesFilterOutputReference {
    return new DataOciDataSafeAuditProfilesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_audit_profiles oci_data_safe_audit_profiles}
*/
export class DataOciDataSafeAuditProfiles extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_audit_profiles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeAuditProfiles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeAuditProfiles to import
  * @param importFromId The id of the existing DataOciDataSafeAuditProfiles that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_audit_profiles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeAuditProfiles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_audit_profiles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_audit_profiles oci_data_safe_audit_profiles} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeAuditProfilesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeAuditProfilesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_audit_profiles',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessLevel = config.accessLevel;
    this._auditCollectedVolumeGreaterThanOrEqualTo = config.auditCollectedVolumeGreaterThanOrEqualTo;
    this._auditProfileId = config.auditProfileId;
    this._compartmentId = config.compartmentId;
    this._compartmentIdInSubtree = config.compartmentIdInSubtree;
    this._displayName = config.displayName;
    this._id = config.id;
    this._isOverrideGlobalRetentionSetting = config.isOverrideGlobalRetentionSetting;
    this._isPaidUsageEnabled = config.isPaidUsageEnabled;
    this._state = config.state;
    this._targetDatabaseGroupId = config.targetDatabaseGroupId;
    this._targetId = config.targetId;
    this._targetType = config.targetType;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_level - computed: false, optional: true, required: false
  private _accessLevel?: string; 
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }
  public set accessLevel(value: string) {
    this._accessLevel = value;
  }
  public resetAccessLevel() {
    this._accessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelInput() {
    return this._accessLevel;
  }

  // audit_collected_volume_greater_than_or_equal_to - computed: false, optional: true, required: false
  private _auditCollectedVolumeGreaterThanOrEqualTo?: string; 
  public get auditCollectedVolumeGreaterThanOrEqualTo() {
    return this.getStringAttribute('audit_collected_volume_greater_than_or_equal_to');
  }
  public set auditCollectedVolumeGreaterThanOrEqualTo(value: string) {
    this._auditCollectedVolumeGreaterThanOrEqualTo = value;
  }
  public resetAuditCollectedVolumeGreaterThanOrEqualTo() {
    this._auditCollectedVolumeGreaterThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditCollectedVolumeGreaterThanOrEqualToInput() {
    return this._auditCollectedVolumeGreaterThanOrEqualTo;
  }

  // audit_profile_collection - computed: true, optional: false, required: false
  private _auditProfileCollection = new DataOciDataSafeAuditProfilesAuditProfileCollectionList(this, "audit_profile_collection", false);
  public get auditProfileCollection() {
    return this._auditProfileCollection;
  }

  // audit_profile_id - computed: false, optional: true, required: false
  private _auditProfileId?: string; 
  public get auditProfileId() {
    return this.getStringAttribute('audit_profile_id');
  }
  public set auditProfileId(value: string) {
    this._auditProfileId = value;
  }
  public resetAuditProfileId() {
    this._auditProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditProfileIdInput() {
    return this._auditProfileId;
  }

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

  // compartment_id_in_subtree - computed: false, optional: true, required: false
  private _compartmentIdInSubtree?: boolean | cdktf.IResolvable; 
  public get compartmentIdInSubtree() {
    return this.getBooleanAttribute('compartment_id_in_subtree');
  }
  public set compartmentIdInSubtree(value: boolean | cdktf.IResolvable) {
    this._compartmentIdInSubtree = value;
  }
  public resetCompartmentIdInSubtree() {
    this._compartmentIdInSubtree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInSubtreeInput() {
    return this._compartmentIdInSubtree;
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

  // is_override_global_retention_setting - computed: false, optional: true, required: false
  private _isOverrideGlobalRetentionSetting?: boolean | cdktf.IResolvable; 
  public get isOverrideGlobalRetentionSetting() {
    return this.getBooleanAttribute('is_override_global_retention_setting');
  }
  public set isOverrideGlobalRetentionSetting(value: boolean | cdktf.IResolvable) {
    this._isOverrideGlobalRetentionSetting = value;
  }
  public resetIsOverrideGlobalRetentionSetting() {
    this._isOverrideGlobalRetentionSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOverrideGlobalRetentionSettingInput() {
    return this._isOverrideGlobalRetentionSetting;
  }

  // is_paid_usage_enabled - computed: false, optional: true, required: false
  private _isPaidUsageEnabled?: boolean | cdktf.IResolvable; 
  public get isPaidUsageEnabled() {
    return this.getBooleanAttribute('is_paid_usage_enabled');
  }
  public set isPaidUsageEnabled(value: boolean | cdktf.IResolvable) {
    this._isPaidUsageEnabled = value;
  }
  public resetIsPaidUsageEnabled() {
    this._isPaidUsageEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPaidUsageEnabledInput() {
    return this._isPaidUsageEnabled;
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

  // target_database_group_id - computed: false, optional: true, required: false
  private _targetDatabaseGroupId?: string; 
  public get targetDatabaseGroupId() {
    return this.getStringAttribute('target_database_group_id');
  }
  public set targetDatabaseGroupId(value: string) {
    this._targetDatabaseGroupId = value;
  }
  public resetTargetDatabaseGroupId() {
    this._targetDatabaseGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDatabaseGroupIdInput() {
    return this._targetDatabaseGroupId;
  }

  // target_id - computed: false, optional: true, required: false
  private _targetId?: string; 
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
  public set targetId(value: string) {
    this._targetId = value;
  }
  public resetTargetId() {
    this._targetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdInput() {
    return this._targetId;
  }

  // target_type - computed: false, optional: true, required: false
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  public resetTargetType() {
    this._targetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDataSafeAuditProfilesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDataSafeAuditProfilesFilter[] | cdktf.IResolvable) {
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
      access_level: cdktf.stringToTerraform(this._accessLevel),
      audit_collected_volume_greater_than_or_equal_to: cdktf.stringToTerraform(this._auditCollectedVolumeGreaterThanOrEqualTo),
      audit_profile_id: cdktf.stringToTerraform(this._auditProfileId),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      compartment_id_in_subtree: cdktf.booleanToTerraform(this._compartmentIdInSubtree),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      is_override_global_retention_setting: cdktf.booleanToTerraform(this._isOverrideGlobalRetentionSetting),
      is_paid_usage_enabled: cdktf.booleanToTerraform(this._isPaidUsageEnabled),
      state: cdktf.stringToTerraform(this._state),
      target_database_group_id: cdktf.stringToTerraform(this._targetDatabaseGroupId),
      target_id: cdktf.stringToTerraform(this._targetId),
      target_type: cdktf.stringToTerraform(this._targetType),
      filter: cdktf.listMapper(dataOciDataSafeAuditProfilesFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_level: {
        value: cdktf.stringToHclTerraform(this._accessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      audit_collected_volume_greater_than_or_equal_to: {
        value: cdktf.stringToHclTerraform(this._auditCollectedVolumeGreaterThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      audit_profile_id: {
        value: cdktf.stringToHclTerraform(this._auditProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id_in_subtree: {
        value: cdktf.booleanToHclTerraform(this._compartmentIdInSubtree),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      is_override_global_retention_setting: {
        value: cdktf.booleanToHclTerraform(this._isOverrideGlobalRetentionSetting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_paid_usage_enabled: {
        value: cdktf.booleanToHclTerraform(this._isPaidUsageEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_database_group_id: {
        value: cdktf.stringToHclTerraform(this._targetDatabaseGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_id: {
        value: cdktf.stringToHclTerraform(this._targetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_type: {
        value: cdktf.stringToHclTerraform(this._targetType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDataSafeAuditProfilesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDataSafeAuditProfilesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
