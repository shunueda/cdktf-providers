// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/operator_access_control_access_requests
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOperatorAccessControlAccessRequestsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/operator_access_control_access_requests#compartment_id DataOciOperatorAccessControlAccessRequests#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/operator_access_control_access_requests#id DataOciOperatorAccessControlAccessRequests#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/operator_access_control_access_requests#resource_name DataOciOperatorAccessControlAccessRequests#resource_name}
  */
  readonly resourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/operator_access_control_access_requests#resource_type DataOciOperatorAccessControlAccessRequests#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/operator_access_control_access_requests#state DataOciOperatorAccessControlAccessRequests#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/operator_access_control_access_requests#time_end DataOciOperatorAccessControlAccessRequests#time_end}
  */
  readonly timeEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/operator_access_control_access_requests#time_start DataOciOperatorAccessControlAccessRequests#time_start}
  */
  readonly timeStart?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/operator_access_control_access_requests#filter DataOciOperatorAccessControlAccessRequests#filter}
  */
  readonly filter?: DataOciOperatorAccessControlAccessRequestsFilter[] | cdktf.IResolvable;
}
export interface DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails {
}

export function dataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsToTerraform(struct?: DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsToHclTerraform(struct?: DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails | undefined) {
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

  // approval_additional_message - computed: true, optional: false, required: false
  public get approvalAdditionalMessage() {
    return this.getStringAttribute('approval_additional_message');
  }

  // approval_comment - computed: true, optional: false, required: false
  public get approvalComment() {
    return this.getStringAttribute('approval_comment');
  }

  // approver_id - computed: true, optional: false, required: false
  public get approverId() {
    return this.getStringAttribute('approver_id');
  }

  // time_approved_for_access - computed: true, optional: false, required: false
  public get timeApprovedForAccess() {
    return this.getStringAttribute('time_approved_for_access');
  }

  // time_of_authorization - computed: true, optional: false, required: false
  public get timeOfAuthorization() {
    return this.getStringAttribute('time_of_authorization');
  }
}

export class DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference {
    return new DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails {
}

export function dataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsToTerraform(struct?: DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsToHclTerraform(struct?: DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails | undefined) {
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

  // approval_additional_message - computed: true, optional: false, required: false
  public get approvalAdditionalMessage() {
    return this.getStringAttribute('approval_additional_message');
  }

  // approval_comment - computed: true, optional: false, required: false
  public get approvalComment() {
    return this.getStringAttribute('approval_comment');
  }

  // approver_id - computed: true, optional: false, required: false
  public get approverId() {
    return this.getStringAttribute('approver_id');
  }

  // time_approved_for_access - computed: true, optional: false, required: false
  public get timeApprovedForAccess() {
    return this.getStringAttribute('time_approved_for_access');
  }

  // time_of_authorization - computed: true, optional: false, required: false
  public get timeOfAuthorization() {
    return this.getStringAttribute('time_of_authorization');
  }
}

export class DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference {
    return new DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems {
}

export function dataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsToTerraform(struct?: DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsToHclTerraform(struct?: DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_reason_summary - computed: true, optional: false, required: false
  public get accessReasonSummary() {
    return this.getStringAttribute('access_reason_summary');
  }

  // action_requests_list - computed: true, optional: false, required: false
  public get actionRequestsList() {
    return this.getListAttribute('action_requests_list');
  }

  // approver_comment - computed: true, optional: false, required: false
  public get approverComment() {
    return this.getStringAttribute('approver_comment');
  }

  // approver_details - computed: true, optional: false, required: false
  private _approverDetails = new DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList(this, "approver_details", false);
  public get approverDetails() {
    return this._approverDetails;
  }

  // audit_type - computed: true, optional: false, required: false
  public get auditType() {
    return this.getListAttribute('audit_type');
  }

  // closure_comment - computed: true, optional: false, required: false
  public get closureComment() {
    return this.getStringAttribute('closure_comment');
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

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getNumberAttribute('duration');
  }

  // extend_duration - computed: true, optional: false, required: false
  public get extendDuration() {
    return this.getNumberAttribute('extend_duration');
  }

  // extension_approver_details - computed: true, optional: false, required: false
  private _extensionApproverDetails = new DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList(this, "extension_approver_details", false);
  public get extensionApproverDetails() {
    return this._extensionApproverDetails;
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

  // is_validate_assignment - computed: true, optional: false, required: false
  public get isValidateAssignment() {
    return this.getBooleanAttribute('is_validate_assignment');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // number_of_approvers - computed: true, optional: false, required: false
  public get numberOfApprovers() {
    return this.getNumberAttribute('number_of_approvers');
  }

  // number_of_approvers_required - computed: true, optional: false, required: false
  public get numberOfApproversRequired() {
    return this.getNumberAttribute('number_of_approvers_required');
  }

  // number_of_extension_approvers - computed: true, optional: false, required: false
  public get numberOfExtensionApprovers() {
    return this.getNumberAttribute('number_of_extension_approvers');
  }

  // opctl_additional_message - computed: true, optional: false, required: false
  public get opctlAdditionalMessage() {
    return this.getStringAttribute('opctl_additional_message');
  }

  // opctl_id - computed: true, optional: false, required: false
  public get opctlId() {
    return this.getStringAttribute('opctl_id');
  }

  // opctl_name - computed: true, optional: false, required: false
  public get opctlName() {
    return this.getStringAttribute('opctl_name');
  }

  // operator_id - computed: true, optional: false, required: false
  public get operatorId() {
    return this.getStringAttribute('operator_id');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // request_id - computed: true, optional: false, required: false
  public get requestId() {
    return this.getStringAttribute('request_id');
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

  // sub_resource_list - computed: true, optional: false, required: false
  public get subResourceList() {
    return this.getListAttribute('sub_resource_list');
  }

  // system_message - computed: true, optional: false, required: false
  public get systemMessage() {
    return this.getStringAttribute('system_message');
  }

  // time_of_creation - computed: true, optional: false, required: false
  public get timeOfCreation() {
    return this.getStringAttribute('time_of_creation');
  }

  // time_of_modification - computed: true, optional: false, required: false
  public get timeOfModification() {
    return this.getStringAttribute('time_of_modification');
  }

  // time_of_user_creation - computed: true, optional: false, required: false
  public get timeOfUserCreation() {
    return this.getStringAttribute('time_of_user_creation');
  }

  // time_requested_for_future_access - computed: true, optional: false, required: false
  public get timeRequestedForFutureAccess() {
    return this.getStringAttribute('time_requested_for_future_access');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }

  // workflow_id - computed: true, optional: false, required: false
  public get workflowId() {
    return this.getListAttribute('workflow_id');
  }
}

export class DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference {
    return new DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOperatorAccessControlAccessRequestsAccessRequestCollection {
}

export function dataOciOperatorAccessControlAccessRequestsAccessRequestCollectionToTerraform(struct?: DataOciOperatorAccessControlAccessRequestsAccessRequestCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOperatorAccessControlAccessRequestsAccessRequestCollectionToHclTerraform(struct?: DataOciOperatorAccessControlAccessRequestsAccessRequestCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOperatorAccessControlAccessRequestsAccessRequestCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOperatorAccessControlAccessRequestsAccessRequestCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference {
    return new DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOperatorAccessControlAccessRequestsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/operator_access_control_access_requests#name DataOciOperatorAccessControlAccessRequests#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/operator_access_control_access_requests#regex DataOciOperatorAccessControlAccessRequests#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/operator_access_control_access_requests#values DataOciOperatorAccessControlAccessRequests#values}
  */
  readonly values: string[];
}

export function dataOciOperatorAccessControlAccessRequestsFilterToTerraform(struct?: DataOciOperatorAccessControlAccessRequestsFilter | cdktf.IResolvable): any {
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


export function dataOciOperatorAccessControlAccessRequestsFilterToHclTerraform(struct?: DataOciOperatorAccessControlAccessRequestsFilter | cdktf.IResolvable): any {
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

export class DataOciOperatorAccessControlAccessRequestsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOperatorAccessControlAccessRequestsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciOperatorAccessControlAccessRequestsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciOperatorAccessControlAccessRequestsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciOperatorAccessControlAccessRequestsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciOperatorAccessControlAccessRequestsFilterOutputReference {
    return new DataOciOperatorAccessControlAccessRequestsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/operator_access_control_access_requests oci_operator_access_control_access_requests}
*/
export class DataOciOperatorAccessControlAccessRequests extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_operator_access_control_access_requests";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOperatorAccessControlAccessRequests resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOperatorAccessControlAccessRequests to import
  * @param importFromId The id of the existing DataOciOperatorAccessControlAccessRequests that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/operator_access_control_access_requests#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOperatorAccessControlAccessRequests to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_operator_access_control_access_requests", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/operator_access_control_access_requests oci_operator_access_control_access_requests} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOperatorAccessControlAccessRequestsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOperatorAccessControlAccessRequestsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_operator_access_control_access_requests',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
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
    this._id = config.id;
    this._resourceName = config.resourceName;
    this._resourceType = config.resourceType;
    this._state = config.state;
    this._timeEnd = config.timeEnd;
    this._timeStart = config.timeStart;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_request_collection - computed: true, optional: false, required: false
  private _accessRequestCollection = new DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList(this, "access_request_collection", false);
  public get accessRequestCollection() {
    return this._accessRequestCollection;
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

  // resource_name - computed: false, optional: true, required: false
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  public resetResourceName() {
    this._resourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
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
  private _filter = new DataOciOperatorAccessControlAccessRequestsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciOperatorAccessControlAccessRequestsFilter[] | cdktf.IResolvable) {
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
      id: cdktf.stringToTerraform(this._id),
      resource_name: cdktf.stringToTerraform(this._resourceName),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      state: cdktf.stringToTerraform(this._state),
      time_end: cdktf.stringToTerraform(this._timeEnd),
      time_start: cdktf.stringToTerraform(this._timeStart),
      filter: cdktf.listMapper(dataOciOperatorAccessControlAccessRequestsFilterToTerraform, true)(this._filter.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_name: {
        value: cdktf.stringToHclTerraform(this._resourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
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
        value: cdktf.listMapperHcl(dataOciOperatorAccessControlAccessRequestsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciOperatorAccessControlAccessRequestsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
