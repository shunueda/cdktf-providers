// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_maintenance_run_history
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseMaintenanceRunHistoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_maintenance_run_history#id DataOciDatabaseMaintenanceRunHistory#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_maintenance_run_history#maintenance_run_history_id DataOciDatabaseMaintenanceRunHistory#maintenance_run_history_id}
  */
  readonly maintenanceRunHistoryId: string;
}
export interface DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetails {
}

export function dataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsToTerraform(struct?: DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsToHclTerraform(struct?: DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetails | undefined) {
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

export class DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference {
    return new DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetails {
}

export function dataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsToTerraform(struct?: DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsToHclTerraform(struct?: DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // db_server_patching_details - computed: true, optional: false, required: false
  private _dbServerPatchingDetails = new DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList(this, "db_server_patching_details", false);
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

export class DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference {
    return new DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistoryExecutionActionsActionMembers {
}

export function dataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistoryExecutionActionsActionMembersToTerraform(struct?: DataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistoryExecutionActionsActionMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistoryExecutionActionsActionMembersToHclTerraform(struct?: DataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistoryExecutionActionsActionMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistoryExecutionActionsActionMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistoryExecutionActionsActionMembers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistoryExecutionActionsActionMembers | undefined) {
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

export class DataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistoryExecutionActionsActionMembersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistoryExecutionActionsActionMembersOutputReference {
    return new DataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistoryExecutionActionsActionMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistoryExecutionActions {
}

export function dataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistoryExecutionActionsToTerraform(struct?: DataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistoryExecutionActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistoryExecutionActionsToHclTerraform(struct?: DataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistoryExecutionActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistoryExecutionActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistoryExecutionActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistoryExecutionActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_members - computed: true, optional: false, required: false
  private _actionMembers = new DataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistoryExecutionActionsActionMembersList(this, "action_members", false);
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

export class DataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistoryExecutionActionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistoryExecutionActionsOutputReference {
    return new DataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistoryExecutionActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistoryExecutionWindow {
}

export function dataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistoryExecutionWindowToTerraform(struct?: DataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistoryExecutionWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistoryExecutionWindowToHclTerraform(struct?: DataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistoryExecutionWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistoryExecutionWindowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistoryExecutionWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistoryExecutionWindow | undefined) {
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

export class DataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistoryExecutionWindowList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistoryExecutionWindowOutputReference {
    return new DataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistoryExecutionWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistory {
}

export function dataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistoryToTerraform(struct?: DataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistoryToHclTerraform(struct?: DataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // execution_actions - computed: true, optional: false, required: false
  private _executionActions = new DataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistoryExecutionActionsList(this, "execution_actions", false);
  public get executionActions() {
    return this._executionActions;
  }

  // execution_window - computed: true, optional: false, required: false
  private _executionWindow = new DataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistoryExecutionWindowList(this, "execution_window", false);
  public get executionWindow() {
    return this._executionWindow;
  }
}

export class DataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistoryList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistoryOutputReference {
    return new DataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTime {
}

export function dataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeToTerraform(struct?: DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeToHclTerraform(struct?: DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTime | undefined) {
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

export class DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference {
    return new DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetails {
}

export function dataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsToTerraform(struct?: DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsToHclTerraform(struct?: DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetails | undefined) {
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
  private _estimatedPatchingTime = new DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList(this, "estimated_patching_time", false);
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

export class DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference {
    return new DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_maintenance_run_history oci_database_maintenance_run_history}
*/
export class DataOciDatabaseMaintenanceRunHistory extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_maintenance_run_history";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseMaintenanceRunHistory resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseMaintenanceRunHistory to import
  * @param importFromId The id of the existing DataOciDatabaseMaintenanceRunHistory that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_maintenance_run_history#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseMaintenanceRunHistory to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_maintenance_run_history", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_maintenance_run_history oci_database_maintenance_run_history} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseMaintenanceRunHistoryConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseMaintenanceRunHistoryConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_maintenance_run_history',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._maintenanceRunHistoryId = config.maintenanceRunHistoryId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // current_execution_window - computed: true, optional: false, required: false
  public get currentExecutionWindow() {
    return this.getStringAttribute('current_execution_window');
  }

  // db_servers_history_details - computed: true, optional: false, required: false
  private _dbServersHistoryDetails = new DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList(this, "db_servers_history_details", false);
  public get dbServersHistoryDetails() {
    return this._dbServersHistoryDetails;
  }

  // granular_maintenance_history - computed: true, optional: false, required: false
  private _granularMaintenanceHistory = new DataOciDatabaseMaintenanceRunHistoryGranularMaintenanceHistoryList(this, "granular_maintenance_history", false);
  public get granularMaintenanceHistory() {
    return this._granularMaintenanceHistory;
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

  // maintenance_run_details - computed: true, optional: false, required: false
  private _maintenanceRunDetails = new DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList(this, "maintenance_run_details", false);
  public get maintenanceRunDetails() {
    return this._maintenanceRunDetails;
  }

  // maintenance_run_history_id - computed: false, optional: false, required: true
  private _maintenanceRunHistoryId?: string; 
  public get maintenanceRunHistoryId() {
    return this.getStringAttribute('maintenance_run_history_id');
  }
  public set maintenanceRunHistoryId(value: string) {
    this._maintenanceRunHistoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceRunHistoryIdInput() {
    return this._maintenanceRunHistoryId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      maintenance_run_history_id: cdktf.stringToTerraform(this._maintenanceRunHistoryId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_run_history_id: {
        value: cdktf.stringToHclTerraform(this._maintenanceRunHistoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
