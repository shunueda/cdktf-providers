// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apiaccesscontrol_privileged_api_requests
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciApiaccesscontrolPrivilegedApiRequestsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apiaccesscontrol_privileged_api_requests#compartment_id DataOciApiaccesscontrolPrivilegedApiRequests#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apiaccesscontrol_privileged_api_requests#display_name DataOciApiaccesscontrolPrivilegedApiRequests#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apiaccesscontrol_privileged_api_requests#id DataOciApiaccesscontrolPrivilegedApiRequests#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apiaccesscontrol_privileged_api_requests#resource_id DataOciApiaccesscontrolPrivilegedApiRequests#resource_id}
  */
  readonly resourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apiaccesscontrol_privileged_api_requests#resource_type DataOciApiaccesscontrolPrivilegedApiRequests#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apiaccesscontrol_privileged_api_requests#state DataOciApiaccesscontrolPrivilegedApiRequests#state}
  */
  readonly state?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apiaccesscontrol_privileged_api_requests#filter DataOciApiaccesscontrolPrivilegedApiRequests#filter}
  */
  readonly filter?: DataOciApiaccesscontrolPrivilegedApiRequestsFilter[] | cdktf.IResolvable;
}
export interface DataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollectionItemsApproverDetails {
}

export function dataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollectionItemsApproverDetailsToTerraform(struct?: DataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollectionItemsApproverDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollectionItemsApproverDetailsToHclTerraform(struct?: DataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollectionItemsApproverDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollectionItemsApproverDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollectionItemsApproverDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollectionItemsApproverDetails | undefined) {
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

export class DataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollectionItemsApproverDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollectionItemsApproverDetailsOutputReference {
    return new DataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollectionItemsApproverDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollectionItemsPrivilegedOperationListStruct {
}

export function dataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollectionItemsPrivilegedOperationListStructToTerraform(struct?: DataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollectionItemsPrivilegedOperationListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollectionItemsPrivilegedOperationListStructToHclTerraform(struct?: DataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollectionItemsPrivilegedOperationListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollectionItemsPrivilegedOperationListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollectionItemsPrivilegedOperationListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollectionItemsPrivilegedOperationListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_name - computed: true, optional: false, required: false
  public get apiName() {
    return this.getStringAttribute('api_name');
  }

  // attribute_names - computed: true, optional: false, required: false
  public get attributeNames() {
    return this.getListAttribute('attribute_names');
  }
}

export class DataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollectionItemsPrivilegedOperationListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollectionItemsPrivilegedOperationListStructOutputReference {
    return new DataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollectionItemsPrivilegedOperationListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollectionItems {
}

export function dataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollectionItemsToTerraform(struct?: DataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollectionItemsToHclTerraform(struct?: DataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // approver_details - computed: true, optional: false, required: false
  private _approverDetails = new DataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollectionItemsApproverDetailsList(this, "approver_details", false);
  public get approverDetails() {
    return this._approverDetails;
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // duration_in_hrs - computed: true, optional: false, required: false
  public get durationInHrs() {
    return this.getNumberAttribute('duration_in_hrs');
  }

  // entity_type - computed: true, optional: false, required: false
  public get entityType() {
    return this.getStringAttribute('entity_type');
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

  // notification_topic_id - computed: true, optional: false, required: false
  public get notificationTopicId() {
    return this.getStringAttribute('notification_topic_id');
  }

  // number_of_approvers_required - computed: true, optional: false, required: false
  public get numberOfApproversRequired() {
    return this.getNumberAttribute('number_of_approvers_required');
  }

  // privileged_api_control_id - computed: true, optional: false, required: false
  public get privilegedApiControlId() {
    return this.getStringAttribute('privileged_api_control_id');
  }

  // privileged_api_control_name - computed: true, optional: false, required: false
  public get privilegedApiControlName() {
    return this.getStringAttribute('privileged_api_control_name');
  }

  // privileged_operation_list - computed: true, optional: false, required: false
  private _privilegedOperationList = new DataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollectionItemsPrivilegedOperationListStructList(this, "privileged_operation_list", false);
  public get privilegedOperationList() {
    return this._privilegedOperationList;
  }

  // reason_detail - computed: true, optional: false, required: false
  public get reasonDetail() {
    return this.getStringAttribute('reason_detail');
  }

  // reason_summary - computed: true, optional: false, required: false
  public get reasonSummary() {
    return this.getStringAttribute('reason_summary');
  }

  // request_id - computed: true, optional: false, required: false
  public get requestId() {
    return this.getStringAttribute('request_id');
  }

  // requested_by - computed: true, optional: false, required: false
  public get requestedBy() {
    return this.getListAttribute('requested_by');
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

  // state_details - computed: true, optional: false, required: false
  public get stateDetails() {
    return this.getStringAttribute('state_details');
  }

  // sub_resource_name_list - computed: true, optional: false, required: false
  public get subResourceNameList() {
    return this.getListAttribute('sub_resource_name_list');
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

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_requested_for_future_access - computed: true, optional: false, required: false
  public get timeRequestedForFutureAccess() {
    return this.getStringAttribute('time_requested_for_future_access');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }
}

export class DataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollectionItemsOutputReference {
    return new DataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollection {
}

export function dataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollectionToTerraform(struct?: DataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollectionToHclTerraform(struct?: DataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollectionOutputReference {
    return new DataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApiaccesscontrolPrivilegedApiRequestsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apiaccesscontrol_privileged_api_requests#name DataOciApiaccesscontrolPrivilegedApiRequests#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apiaccesscontrol_privileged_api_requests#regex DataOciApiaccesscontrolPrivilegedApiRequests#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apiaccesscontrol_privileged_api_requests#values DataOciApiaccesscontrolPrivilegedApiRequests#values}
  */
  readonly values: string[];
}

export function dataOciApiaccesscontrolPrivilegedApiRequestsFilterToTerraform(struct?: DataOciApiaccesscontrolPrivilegedApiRequestsFilter | cdktf.IResolvable): any {
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


export function dataOciApiaccesscontrolPrivilegedApiRequestsFilterToHclTerraform(struct?: DataOciApiaccesscontrolPrivilegedApiRequestsFilter | cdktf.IResolvable): any {
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

export class DataOciApiaccesscontrolPrivilegedApiRequestsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApiaccesscontrolPrivilegedApiRequestsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciApiaccesscontrolPrivilegedApiRequestsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciApiaccesscontrolPrivilegedApiRequestsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciApiaccesscontrolPrivilegedApiRequestsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciApiaccesscontrolPrivilegedApiRequestsFilterOutputReference {
    return new DataOciApiaccesscontrolPrivilegedApiRequestsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apiaccesscontrol_privileged_api_requests oci_apiaccesscontrol_privileged_api_requests}
*/
export class DataOciApiaccesscontrolPrivilegedApiRequests extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_apiaccesscontrol_privileged_api_requests";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciApiaccesscontrolPrivilegedApiRequests resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciApiaccesscontrolPrivilegedApiRequests to import
  * @param importFromId The id of the existing DataOciApiaccesscontrolPrivilegedApiRequests that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apiaccesscontrol_privileged_api_requests#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciApiaccesscontrolPrivilegedApiRequests to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_apiaccesscontrol_privileged_api_requests", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apiaccesscontrol_privileged_api_requests oci_apiaccesscontrol_privileged_api_requests} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciApiaccesscontrolPrivilegedApiRequestsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOciApiaccesscontrolPrivilegedApiRequestsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_apiaccesscontrol_privileged_api_requests',
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._resourceId = config.resourceId;
    this._resourceType = config.resourceType;
    this._state = config.state;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
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

  // privileged_api_request_collection - computed: true, optional: false, required: false
  private _privilegedApiRequestCollection = new DataOciApiaccesscontrolPrivilegedApiRequestsPrivilegedApiRequestCollectionList(this, "privileged_api_request_collection", false);
  public get privilegedApiRequestCollection() {
    return this._privilegedApiRequestCollection;
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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciApiaccesscontrolPrivilegedApiRequestsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciApiaccesscontrolPrivilegedApiRequestsFilter[] | cdktf.IResolvable) {
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
      resource_id: cdktf.stringToTerraform(this._resourceId),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciApiaccesscontrolPrivilegedApiRequestsFilterToTerraform, true)(this._filter.internalValue),
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
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
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
      filter: {
        value: cdktf.listMapperHcl(dataOciApiaccesscontrolPrivilegedApiRequestsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciApiaccesscontrolPrivilegedApiRequestsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
