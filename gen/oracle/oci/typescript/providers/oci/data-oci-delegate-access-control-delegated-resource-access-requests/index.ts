// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#compartment_id DataOciDelegateAccessControlDelegatedResourceAccessRequests#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#delegation_control_id DataOciDelegateAccessControlDelegatedResourceAccessRequests#delegation_control_id}
  */
  readonly delegationControlId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#id DataOciDelegateAccessControlDelegatedResourceAccessRequests#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#request_status DataOciDelegateAccessControlDelegatedResourceAccessRequests#request_status}
  */
  readonly requestStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#resource_id DataOciDelegateAccessControlDelegatedResourceAccessRequests#resource_id}
  */
  readonly resourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#state DataOciDelegateAccessControlDelegatedResourceAccessRequests#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#time_end DataOciDelegateAccessControlDelegatedResourceAccessRequests#time_end}
  */
  readonly timeEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#time_start DataOciDelegateAccessControlDelegatedResourceAccessRequests#time_start}
  */
  readonly timeStart?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#filter DataOciDelegateAccessControlDelegatedResourceAccessRequests#filter}
  */
  readonly filter?: DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter[] | cdktf.IResolvable;
}
export interface DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfo {
}

export function dataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoToTerraform(struct?: DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoToHclTerraform(struct?: DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // approval_action - computed: true, optional: false, required: false
  public get approvalAction() {
    return this.getStringAttribute('approval_action');
  }

  // approval_type - computed: true, optional: false, required: false
  public get approvalType() {
    return this.getStringAttribute('approval_type');
  }

  // approver_additional_message - computed: true, optional: false, required: false
  public get approverAdditionalMessage() {
    return this.getStringAttribute('approver_additional_message');
  }

  // approver_comment - computed: true, optional: false, required: false
  public get approverComment() {
    return this.getStringAttribute('approver_comment');
  }

  // approver_id - computed: true, optional: false, required: false
  public get approverId() {
    return this.getStringAttribute('approver_id');
  }

  // time_approved_for_access - computed: true, optional: false, required: false
  public get timeApprovedForAccess() {
    return this.getStringAttribute('time_approved_for_access');
  }
}

export class DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference {
    return new DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItems {
}

export function dataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsToTerraform(struct?: DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsToHclTerraform(struct?: DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // approval_info - computed: true, optional: false, required: false
  private _approvalInfo = new DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList(this, "approval_info", false);
  public get approvalInfo() {
    return this._approvalInfo;
  }

  // audit_types - computed: true, optional: false, required: false
  public get auditTypes() {
    return this.getListAttribute('audit_types');
  }

  // closure_comment - computed: true, optional: false, required: false
  public get closureComment() {
    return this.getStringAttribute('closure_comment');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // database_name_list - computed: true, optional: false, required: false
  public get databaseNameList() {
    return this.getListAttribute('database_name_list');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // delegation_control_id - computed: true, optional: false, required: false
  public get delegationControlId() {
    return this.getStringAttribute('delegation_control_id');
  }

  // delegation_subscription_ids - computed: true, optional: false, required: false
  public get delegationSubscriptionIds() {
    return this.getListAttribute('delegation_subscription_ids');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // duration_in_hours - computed: true, optional: false, required: false
  public get durationInHours() {
    return this.getNumberAttribute('duration_in_hours');
  }

  // extend_duration_in_hours - computed: true, optional: false, required: false
  public get extendDurationInHours() {
    return this.getNumberAttribute('extend_duration_in_hours');
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

  // is_auto_approved - computed: true, optional: false, required: false
  public get isAutoApproved() {
    return this.getBooleanAttribute('is_auto_approved');
  }

  // is_pending_more_info - computed: true, optional: false, required: false
  public get isPendingMoreInfo() {
    return this.getBooleanAttribute('is_pending_more_info');
  }

  // lifecycle_state_details - computed: true, optional: false, required: false
  public get lifecycleStateDetails() {
    return this.getStringAttribute('lifecycle_state_details');
  }

  // num_extension_approvals - computed: true, optional: false, required: false
  public get numExtensionApprovals() {
    return this.getNumberAttribute('num_extension_approvals');
  }

  // num_initial_approvals - computed: true, optional: false, required: false
  public get numInitialApprovals() {
    return this.getNumberAttribute('num_initial_approvals');
  }

  // provided_service_types - computed: true, optional: false, required: false
  public get providedServiceTypes() {
    return this.getListAttribute('provided_service_types');
  }

  // reason_for_request - computed: true, optional: false, required: false
  public get reasonForRequest() {
    return this.getStringAttribute('reason_for_request');
  }

  // request_status - computed: true, optional: false, required: false
  public get requestStatus() {
    return this.getStringAttribute('request_status');
  }

  // requested_action_names - computed: true, optional: false, required: false
  public get requestedActionNames() {
    return this.getListAttribute('requested_action_names');
  }

  // requester_type - computed: true, optional: false, required: false
  public get requesterType() {
    return this.getStringAttribute('requester_type');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
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

  // ticket_numbers - computed: true, optional: false, required: false
  public get ticketNumbers() {
    return this.getListAttribute('ticket_numbers');
  }

  // time_access_requested - computed: true, optional: false, required: false
  public get timeAccessRequested() {
    return this.getStringAttribute('time_access_requested');
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

export class DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference {
    return new DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollection {
}

export function dataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionToTerraform(struct?: DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionToHclTerraform(struct?: DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference {
    return new DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#name DataOciDelegateAccessControlDelegatedResourceAccessRequests#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#regex DataOciDelegateAccessControlDelegatedResourceAccessRequests#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#values DataOciDelegateAccessControlDelegatedResourceAccessRequests#values}
  */
  readonly values: string[];
}

export function dataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterToTerraform(struct?: DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter | cdktf.IResolvable): any {
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


export function dataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterToHclTerraform(struct?: DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter | cdktf.IResolvable): any {
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

export class DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference {
    return new DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests oci_delegate_access_control_delegated_resource_access_requests}
*/
export class DataOciDelegateAccessControlDelegatedResourceAccessRequests extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_delegate_access_control_delegated_resource_access_requests";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDelegateAccessControlDelegatedResourceAccessRequests resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDelegateAccessControlDelegatedResourceAccessRequests to import
  * @param importFromId The id of the existing DataOciDelegateAccessControlDelegatedResourceAccessRequests that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDelegateAccessControlDelegatedResourceAccessRequests to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_delegate_access_control_delegated_resource_access_requests", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests oci_delegate_access_control_delegated_resource_access_requests} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_delegate_access_control_delegated_resource_access_requests',
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
    this._compartmentId = config.compartmentId;
    this._delegationControlId = config.delegationControlId;
    this._id = config.id;
    this._requestStatus = config.requestStatus;
    this._resourceId = config.resourceId;
    this._state = config.state;
    this._timeEnd = config.timeEnd;
    this._timeStart = config.timeStart;
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

  // delegated_resource_access_request_summary_collection - computed: true, optional: false, required: false
  private _delegatedResourceAccessRequestSummaryCollection = new DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList(this, "delegated_resource_access_request_summary_collection", false);
  public get delegatedResourceAccessRequestSummaryCollection() {
    return this._delegatedResourceAccessRequestSummaryCollection;
  }

  // delegation_control_id - computed: false, optional: true, required: false
  private _delegationControlId?: string; 
  public get delegationControlId() {
    return this.getStringAttribute('delegation_control_id');
  }
  public set delegationControlId(value: string) {
    this._delegationControlId = value;
  }
  public resetDelegationControlId() {
    this._delegationControlId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegationControlIdInput() {
    return this._delegationControlId;
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

  // request_status - computed: false, optional: true, required: false
  private _requestStatus?: string; 
  public get requestStatus() {
    return this.getStringAttribute('request_status');
  }
  public set requestStatus(value: string) {
    this._requestStatus = value;
  }
  public resetRequestStatus() {
    this._requestStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestStatusInput() {
    return this._requestStatus;
  }

  // resource_id - computed: false, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
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

  // time_end - computed: false, optional: true, required: false
  private _timeEnd?: string; 
  public get timeEnd() {
    return this.getStringAttribute('time_end');
  }
  public set timeEnd(value: string) {
    this._timeEnd = value;
  }
  public resetTimeEnd() {
    this._timeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeEndInput() {
    return this._timeEnd;
  }

  // time_start - computed: false, optional: true, required: false
  private _timeStart?: string; 
  public get timeStart() {
    return this.getStringAttribute('time_start');
  }
  public set timeStart(value: string) {
    this._timeStart = value;
  }
  public resetTimeStart() {
    this._timeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeStartInput() {
    return this._timeStart;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter[] | cdktf.IResolvable) {
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
      delegation_control_id: cdktf.stringToTerraform(this._delegationControlId),
      id: cdktf.stringToTerraform(this._id),
      request_status: cdktf.stringToTerraform(this._requestStatus),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      state: cdktf.stringToTerraform(this._state),
      time_end: cdktf.stringToTerraform(this._timeEnd),
      time_start: cdktf.stringToTerraform(this._timeStart),
      filter: cdktf.listMapper(dataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterToTerraform, true)(this._filter.internalValue),
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
      delegation_control_id: {
        value: cdktf.stringToHclTerraform(this._delegationControlId),
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
      request_status: {
        value: cdktf.stringToHclTerraform(this._requestStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
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
      time_end: {
        value: cdktf.stringToHclTerraform(this._timeEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_start: {
        value: cdktf.stringToHclTerraform(this._timeStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
