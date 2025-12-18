// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_maintenance_run_histories
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseMaintenanceRunHistoriesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_maintenance_run_histories#availability_domain DataOciDatabaseMaintenanceRunHistories#availability_domain}
  */
  readonly availabilityDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_maintenance_run_histories#compartment_id DataOciDatabaseMaintenanceRunHistories#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_maintenance_run_histories#id DataOciDatabaseMaintenanceRunHistories#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_maintenance_run_histories#maintenance_type DataOciDatabaseMaintenanceRunHistories#maintenance_type}
  */
  readonly maintenanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_maintenance_run_histories#state DataOciDatabaseMaintenanceRunHistories#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_maintenance_run_histories#target_resource_id DataOciDatabaseMaintenanceRunHistories#target_resource_id}
  */
  readonly targetResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_maintenance_run_histories#target_resource_type DataOciDatabaseMaintenanceRunHistories#target_resource_type}
  */
  readonly targetResourceType?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_maintenance_run_histories#filter DataOciDatabaseMaintenanceRunHistories#filter}
  */
  readonly filter?: DataOciDatabaseMaintenanceRunHistoriesFilter[] | cdktf.IResolvable;
}
export interface DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetails {
}

export function dataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsToTerraform(struct?: DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsToHclTerraform(struct?: DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // estimated_patch_duration - computed: true, optional: false, required: false
  public get estimatedPatchDuration() {
    return this.getNumberAttribute('estimated_patch_duration');
  }

  // patching_status - computed: true, optional: false, required: false
  public get patchingStatus() {
    return this.getStringAttribute('patching_status');
  }

  // time_patching_ended - computed: true, optional: false, required: false
  public get timePatchingEnded() {
    return this.getStringAttribute('time_patching_ended');
  }

  // time_patching_started - computed: true, optional: false, required: false
  public get timePatchingStarted() {
    return this.getStringAttribute('time_patching_started');
  }
}

export class DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference {
    return new DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetails {
}

export function dataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsToTerraform(struct?: DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsToHclTerraform(struct?: DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // db_server_patching_details - computed: true, optional: false, required: false
  private _dbServerPatchingDetails = new DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList(this, "db_server_patching_details", false);
  public get dbServerPatchingDetails() {
    return this._dbServerPatchingDetails;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference {
    return new DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistoryExecutionActionsActionMembers {
}

export function dataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistoryExecutionActionsActionMembersToTerraform(struct?: DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistoryExecutionActionsActionMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistoryExecutionActionsActionMembersToHclTerraform(struct?: DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistoryExecutionActionsActionMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistoryExecutionActionsActionMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistoryExecutionActionsActionMembers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistoryExecutionActionsActionMembers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // estimated_time_in_mins - computed: true, optional: false, required: false
  public get estimatedTimeInMins() {
    return this.getNumberAttribute('estimated_time_in_mins');
  }

  // member_id - computed: true, optional: false, required: false
  public get memberId() {
    return this.getStringAttribute('member_id');
  }

  // member_order - computed: true, optional: false, required: false
  public get memberOrder() {
    return this.getNumberAttribute('member_order');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // total_time_taken_in_mins - computed: true, optional: false, required: false
  public get totalTimeTakenInMins() {
    return this.getNumberAttribute('total_time_taken_in_mins');
  }
}

export class DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistoryExecutionActionsActionMembersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistoryExecutionActionsActionMembersOutputReference {
    return new DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistoryExecutionActionsActionMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistoryExecutionActions {
}

export function dataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistoryExecutionActionsToTerraform(struct?: DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistoryExecutionActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistoryExecutionActionsToHclTerraform(struct?: DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistoryExecutionActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistoryExecutionActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistoryExecutionActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistoryExecutionActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_members - computed: true, optional: false, required: false
  private _actionMembers = new DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistoryExecutionActionsActionMembersList(this, "action_members", false);
  public get actionMembers() {
    return this._actionMembers;
  }

  // action_params - computed: true, optional: false, required: false
  private _actionParams = new cdktf.StringMap(this, "action_params");
  public get actionParams() {
    return this._actionParams;
  }

  // action_type - computed: true, optional: false, required: false
  public get actionType() {
    return this.getStringAttribute('action_type');
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

  // estimated_time_in_mins - computed: true, optional: false, required: false
  public get estimatedTimeInMins() {
    return this.getNumberAttribute('estimated_time_in_mins');
  }

  // execution_action_order - computed: true, optional: false, required: false
  public get executionActionOrder() {
    return this.getNumberAttribute('execution_action_order');
  }

  // execution_window_id - computed: true, optional: false, required: false
  public get executionWindowId() {
    return this.getStringAttribute('execution_window_id');
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // lifecycle_substate - computed: true, optional: false, required: false
  public get lifecycleSubstate() {
    return this.getStringAttribute('lifecycle_substate');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // total_time_taken_in_mins - computed: true, optional: false, required: false
  public get totalTimeTakenInMins() {
    return this.getNumberAttribute('total_time_taken_in_mins');
  }
}

export class DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistoryExecutionActionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistoryExecutionActionsOutputReference {
    return new DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistoryExecutionActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistoryExecutionWindow {
}

export function dataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistoryExecutionWindowToTerraform(struct?: DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistoryExecutionWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistoryExecutionWindowToHclTerraform(struct?: DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistoryExecutionWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistoryExecutionWindowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistoryExecutionWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistoryExecutionWindow | undefined) {
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

  // estimated_time_in_mins - computed: true, optional: false, required: false
  public get estimatedTimeInMins() {
    return this.getNumberAttribute('estimated_time_in_mins');
  }

  // execution_resource_id - computed: true, optional: false, required: false
  public get executionResourceId() {
    return this.getStringAttribute('execution_resource_id');
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

  // is_enforced_duration - computed: true, optional: false, required: false
  public get isEnforcedDuration() {
    return this.getBooleanAttribute('is_enforced_duration');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // lifecycle_substate - computed: true, optional: false, required: false
  public get lifecycleSubstate() {
    return this.getStringAttribute('lifecycle_substate');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_ended - computed: true, optional: false, required: false
  public get timeEnded() {
    return this.getStringAttribute('time_ended');
  }

  // time_scheduled - computed: true, optional: false, required: false
  public get timeScheduled() {
    return this.getStringAttribute('time_scheduled');
  }

  // time_started - computed: true, optional: false, required: false
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // total_time_taken_in_mins - computed: true, optional: false, required: false
  public get totalTimeTakenInMins() {
    return this.getNumberAttribute('total_time_taken_in_mins');
  }

  // window_duration_in_mins - computed: true, optional: false, required: false
  public get windowDurationInMins() {
    return this.getNumberAttribute('window_duration_in_mins');
  }

  // window_type - computed: true, optional: false, required: false
  public get windowType() {
    return this.getStringAttribute('window_type');
  }
}

export class DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistoryExecutionWindowList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistoryExecutionWindowOutputReference {
    return new DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistoryExecutionWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistory {
}

export function dataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistoryToTerraform(struct?: DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistoryToHclTerraform(struct?: DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // execution_actions - computed: true, optional: false, required: false
  private _executionActions = new DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistoryExecutionActionsList(this, "execution_actions", false);
  public get executionActions() {
    return this._executionActions;
  }

  // execution_window - computed: true, optional: false, required: false
  private _executionWindow = new DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistoryExecutionWindowList(this, "execution_window", false);
  public get executionWindow() {
    return this._executionWindow;
  }
}

export class DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistoryList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistoryOutputReference {
    return new DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTime {
}

export function dataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeToTerraform(struct?: DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeToHclTerraform(struct?: DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // estimated_db_server_patching_time - computed: true, optional: false, required: false
  public get estimatedDbServerPatchingTime() {
    return this.getNumberAttribute('estimated_db_server_patching_time');
  }

  // estimated_network_switches_patching_time - computed: true, optional: false, required: false
  public get estimatedNetworkSwitchesPatchingTime() {
    return this.getNumberAttribute('estimated_network_switches_patching_time');
  }

  // estimated_storage_server_patching_time - computed: true, optional: false, required: false
  public get estimatedStorageServerPatchingTime() {
    return this.getNumberAttribute('estimated_storage_server_patching_time');
  }

  // total_estimated_patching_time - computed: true, optional: false, required: false
  public get totalEstimatedPatchingTime() {
    return this.getNumberAttribute('total_estimated_patching_time');
  }
}

export class DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference {
    return new DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetails {
}

export function dataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsToTerraform(struct?: DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsToHclTerraform(struct?: DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetails | undefined) {
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

  // current_custom_action_timeout_in_mins - computed: true, optional: false, required: false
  public get currentCustomActionTimeoutInMins() {
    return this.getNumberAttribute('current_custom_action_timeout_in_mins');
  }

  // current_patching_component - computed: true, optional: false, required: false
  public get currentPatchingComponent() {
    return this.getStringAttribute('current_patching_component');
  }

  // custom_action_timeout_in_mins - computed: true, optional: false, required: false
  public get customActionTimeoutInMins() {
    return this.getNumberAttribute('custom_action_timeout_in_mins');
  }

  // database_software_image_id - computed: true, optional: false, required: false
  public get databaseSoftwareImageId() {
    return this.getStringAttribute('database_software_image_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // estimated_component_patching_start_time - computed: true, optional: false, required: false
  public get estimatedComponentPatchingStartTime() {
    return this.getStringAttribute('estimated_component_patching_start_time');
  }

  // estimated_patching_time - computed: true, optional: false, required: false
  private _estimatedPatchingTime = new DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList(this, "estimated_patching_time", false);
  public get estimatedPatchingTime() {
    return this._estimatedPatchingTime;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_custom_action_timeout_enabled - computed: true, optional: false, required: false
  public get isCustomActionTimeoutEnabled() {
    return this.getBooleanAttribute('is_custom_action_timeout_enabled');
  }

  // is_dst_file_update_enabled - computed: true, optional: false, required: false
  public get isDstFileUpdateEnabled() {
    return this.getBooleanAttribute('is_dst_file_update_enabled');
  }

  // is_maintenance_run_granular - computed: true, optional: false, required: false
  public get isMaintenanceRunGranular() {
    return this.getBooleanAttribute('is_maintenance_run_granular');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // maintenance_subtype - computed: true, optional: false, required: false
  public get maintenanceSubtype() {
    return this.getStringAttribute('maintenance_subtype');
  }

  // maintenance_type - computed: true, optional: false, required: false
  public get maintenanceType() {
    return this.getStringAttribute('maintenance_type');
  }

  // patch_failure_count - computed: true, optional: false, required: false
  public get patchFailureCount() {
    return this.getNumberAttribute('patch_failure_count');
  }

  // patch_id - computed: true, optional: false, required: false
  public get patchId() {
    return this.getStringAttribute('patch_id');
  }

  // patching_end_time - computed: true, optional: false, required: false
  public get patchingEndTime() {
    return this.getStringAttribute('patching_end_time');
  }

  // patching_mode - computed: true, optional: false, required: false
  public get patchingMode() {
    return this.getStringAttribute('patching_mode');
  }

  // patching_start_time - computed: true, optional: false, required: false
  public get patchingStartTime() {
    return this.getStringAttribute('patching_start_time');
  }

  // patching_status - computed: true, optional: false, required: false
  public get patchingStatus() {
    return this.getStringAttribute('patching_status');
  }

  // peer_maintenance_run_id - computed: true, optional: false, required: false
  public get peerMaintenanceRunId() {
    return this.getStringAttribute('peer_maintenance_run_id');
  }

  // peer_maintenance_run_ids - computed: true, optional: false, required: false
  public get peerMaintenanceRunIds() {
    return this.getListAttribute('peer_maintenance_run_ids');
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

  // target_db_server_version - computed: true, optional: false, required: false
  public get targetDbServerVersion() {
    return this.getStringAttribute('target_db_server_version');
  }

  // target_resource_id - computed: true, optional: false, required: false
  public get targetResourceId() {
    return this.getStringAttribute('target_resource_id');
  }

  // target_resource_type - computed: true, optional: false, required: false
  public get targetResourceType() {
    return this.getStringAttribute('target_resource_type');
  }

  // target_storage_server_version - computed: true, optional: false, required: false
  public get targetStorageServerVersion() {
    return this.getStringAttribute('target_storage_server_version');
  }

  // time_ended - computed: true, optional: false, required: false
  public get timeEnded() {
    return this.getStringAttribute('time_ended');
  }

  // time_scheduled - computed: true, optional: false, required: false
  public get timeScheduled() {
    return this.getStringAttribute('time_scheduled');
  }

  // time_started - computed: true, optional: false, required: false
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }

  // total_time_taken_in_mins - computed: true, optional: false, required: false
  public get totalTimeTakenInMins() {
    return this.getNumberAttribute('total_time_taken_in_mins');
  }
}

export class DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference {
    return new DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistories {
}

export function dataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesToTerraform(struct?: DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesToHclTerraform(struct?: DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistories | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // current_execution_window - computed: true, optional: false, required: false
  public get currentExecutionWindow() {
    return this.getStringAttribute('current_execution_window');
  }

  // db_servers_history_details - computed: true, optional: false, required: false
  private _dbServersHistoryDetails = new DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList(this, "db_servers_history_details", false);
  public get dbServersHistoryDetails() {
    return this._dbServersHistoryDetails;
  }

  // granular_maintenance_history - computed: true, optional: false, required: false
  private _granularMaintenanceHistory = new DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesGranularMaintenanceHistoryList(this, "granular_maintenance_history", false);
  public get granularMaintenanceHistory() {
    return this._granularMaintenanceHistory;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // maintenance_run_details - computed: true, optional: false, required: false
  private _maintenanceRunDetails = new DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList(this, "maintenance_run_details", false);
  public get maintenanceRunDetails() {
    return this._maintenanceRunDetails;
  }
}

export class DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference {
    return new DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMaintenanceRunHistoriesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_maintenance_run_histories#name DataOciDatabaseMaintenanceRunHistories#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_maintenance_run_histories#regex DataOciDatabaseMaintenanceRunHistories#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_maintenance_run_histories#values DataOciDatabaseMaintenanceRunHistories#values}
  */
  readonly values: string[];
}

export function dataOciDatabaseMaintenanceRunHistoriesFilterToTerraform(struct?: DataOciDatabaseMaintenanceRunHistoriesFilter | cdktf.IResolvable): any {
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


export function dataOciDatabaseMaintenanceRunHistoriesFilterToHclTerraform(struct?: DataOciDatabaseMaintenanceRunHistoriesFilter | cdktf.IResolvable): any {
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

export class DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMaintenanceRunHistoriesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDatabaseMaintenanceRunHistoriesFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDatabaseMaintenanceRunHistoriesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDatabaseMaintenanceRunHistoriesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference {
    return new DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_maintenance_run_histories oci_database_maintenance_run_histories}
*/
export class DataOciDatabaseMaintenanceRunHistories extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_maintenance_run_histories";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseMaintenanceRunHistories resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseMaintenanceRunHistories to import
  * @param importFromId The id of the existing DataOciDatabaseMaintenanceRunHistories that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_maintenance_run_histories#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseMaintenanceRunHistories to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_maintenance_run_histories", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_maintenance_run_histories oci_database_maintenance_run_histories} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseMaintenanceRunHistoriesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseMaintenanceRunHistoriesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_maintenance_run_histories',
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
    this._availabilityDomain = config.availabilityDomain;
    this._compartmentId = config.compartmentId;
    this._id = config.id;
    this._maintenanceType = config.maintenanceType;
    this._state = config.state;
    this._targetResourceId = config.targetResourceId;
    this._targetResourceType = config.targetResourceType;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: false, optional: true, required: false
  private _availabilityDomain?: string; 
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }
  public set availabilityDomain(value: string) {
    this._availabilityDomain = value;
  }
  public resetAvailabilityDomain() {
    this._availabilityDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityDomainInput() {
    return this._availabilityDomain;
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

  // maintenance_run_histories - computed: true, optional: false, required: false
  private _maintenanceRunHistories = new DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList(this, "maintenance_run_histories", false);
  public get maintenanceRunHistories() {
    return this._maintenanceRunHistories;
  }

  // maintenance_type - computed: false, optional: true, required: false
  private _maintenanceType?: string; 
  public get maintenanceType() {
    return this.getStringAttribute('maintenance_type');
  }
  public set maintenanceType(value: string) {
    this._maintenanceType = value;
  }
  public resetMaintenanceType() {
    this._maintenanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceTypeInput() {
    return this._maintenanceType;
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

  // target_resource_id - computed: false, optional: true, required: false
  private _targetResourceId?: string; 
  public get targetResourceId() {
    return this.getStringAttribute('target_resource_id');
  }
  public set targetResourceId(value: string) {
    this._targetResourceId = value;
  }
  public resetTargetResourceId() {
    this._targetResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceIdInput() {
    return this._targetResourceId;
  }

  // target_resource_type - computed: false, optional: true, required: false
  private _targetResourceType?: string; 
  public get targetResourceType() {
    return this.getStringAttribute('target_resource_type');
  }
  public set targetResourceType(value: string) {
    this._targetResourceType = value;
  }
  public resetTargetResourceType() {
    this._targetResourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceTypeInput() {
    return this._targetResourceType;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDatabaseMaintenanceRunHistoriesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDatabaseMaintenanceRunHistoriesFilter[] | cdktf.IResolvable) {
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
      availability_domain: cdktf.stringToTerraform(this._availabilityDomain),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      id: cdktf.stringToTerraform(this._id),
      maintenance_type: cdktf.stringToTerraform(this._maintenanceType),
      state: cdktf.stringToTerraform(this._state),
      target_resource_id: cdktf.stringToTerraform(this._targetResourceId),
      target_resource_type: cdktf.stringToTerraform(this._targetResourceType),
      filter: cdktf.listMapper(dataOciDatabaseMaintenanceRunHistoriesFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_domain: {
        value: cdktf.stringToHclTerraform(this._availabilityDomain),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_type: {
        value: cdktf.stringToHclTerraform(this._maintenanceType),
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
      target_resource_id: {
        value: cdktf.stringToHclTerraform(this._targetResourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_resource_type: {
        value: cdktf.stringToHclTerraform(this._targetResourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDatabaseMaintenanceRunHistoriesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDatabaseMaintenanceRunHistoriesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
