// https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/data-sources/requests
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpalRequestsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The pagination cursor value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/data-sources/requests#cursor DataOpalRequests#cursor}
  */
  readonly cursor?: string;
  /**
  * An end date filter for the events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/data-sources/requests#end_date_filter DataOpalRequests#end_date_filter}
  */
  readonly endDateFilter?: string;
  /**
  * Number of results to return per page. Default is 200.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/data-sources/requests#page_size DataOpalRequests#page_size}
  */
  readonly pageSize?: number;
  /**
  * Filter requests by their requester ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/data-sources/requests#requester_id DataOpalRequests#requester_id}
  */
  readonly requesterId?: string;
  /**
  * Boolean toggle for if it should only show pending requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/data-sources/requests#show_pending_only DataOpalRequests#show_pending_only}
  */
  readonly showPendingOnly?: boolean | cdktf.IResolvable;
  /**
  * A start date filter for the events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/data-sources/requests#start_date_filter DataOpalRequests#start_date_filter}
  */
  readonly startDateFilter?: string;
  /**
  * Filter requests by their target user ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/data-sources/requests#target_user_id DataOpalRequests#target_user_id}
  */
  readonly targetUserId?: string;
}
export interface DataOpalRequestsRequestsCustomFieldsResponsesFieldValue {
}

export function dataOpalRequestsRequestsCustomFieldsResponsesFieldValueToTerraform(struct?: DataOpalRequestsRequestsCustomFieldsResponsesFieldValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalRequestsRequestsCustomFieldsResponsesFieldValueToHclTerraform(struct?: DataOpalRequestsRequestsCustomFieldsResponsesFieldValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalRequestsRequestsCustomFieldsResponsesFieldValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalRequestsRequestsCustomFieldsResponsesFieldValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalRequestsRequestsCustomFieldsResponsesFieldValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boolean - computed: true, optional: false, required: false
  public get boolean() {
    return this.getBooleanAttribute('boolean');
  }

  // str - computed: true, optional: false, required: false
  public get str() {
    return this.getStringAttribute('str');
  }
}
export interface DataOpalRequestsRequestsCustomFieldsResponses {
}

export function dataOpalRequestsRequestsCustomFieldsResponsesToTerraform(struct?: DataOpalRequestsRequestsCustomFieldsResponses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalRequestsRequestsCustomFieldsResponsesToHclTerraform(struct?: DataOpalRequestsRequestsCustomFieldsResponses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalRequestsRequestsCustomFieldsResponsesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpalRequestsRequestsCustomFieldsResponses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalRequestsRequestsCustomFieldsResponses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_name - computed: true, optional: false, required: false
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }

  // field_type - computed: true, optional: false, required: false
  public get fieldType() {
    return this.getStringAttribute('field_type');
  }

  // field_value - computed: true, optional: false, required: false
  private _fieldValue = new DataOpalRequestsRequestsCustomFieldsResponsesFieldValueOutputReference(this, "field_value");
  public get fieldValue() {
    return this._fieldValue;
  }
}

export class DataOpalRequestsRequestsCustomFieldsResponsesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpalRequestsRequestsCustomFieldsResponsesOutputReference {
    return new DataOpalRequestsRequestsCustomFieldsResponsesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpalRequestsRequestsRequestedItemsListStruct {
}

export function dataOpalRequestsRequestsRequestedItemsListStructToTerraform(struct?: DataOpalRequestsRequestsRequestedItemsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalRequestsRequestsRequestedItemsListStructToHclTerraform(struct?: DataOpalRequestsRequestsRequestedItemsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalRequestsRequestsRequestedItemsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpalRequestsRequestsRequestedItemsListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalRequestsRequestsRequestedItemsListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_level_name - computed: true, optional: false, required: false
  public get accessLevelName() {
    return this.getStringAttribute('access_level_name');
  }

  // access_level_remote_id - computed: true, optional: false, required: false
  public get accessLevelRemoteId() {
    return this.getStringAttribute('access_level_remote_id');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // remote_id - computed: true, optional: false, required: false
  public get remoteId() {
    return this.getStringAttribute('remote_id');
  }

  // remote_name - computed: true, optional: false, required: false
  public get remoteName() {
    return this.getStringAttribute('remote_name');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
}

export class DataOpalRequestsRequestsRequestedItemsListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataOpalRequestsRequestsRequestedItemsListStructOutputReference {
    return new DataOpalRequestsRequestsRequestedItemsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpalRequestsRequestsReviewerStagesStagesReviewers {
}

export function dataOpalRequestsRequestsReviewerStagesStagesReviewersToTerraform(struct?: DataOpalRequestsRequestsReviewerStagesStagesReviewers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalRequestsRequestsReviewerStagesStagesReviewersToHclTerraform(struct?: DataOpalRequestsRequestsReviewerStagesStagesReviewers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalRequestsRequestsReviewerStagesStagesReviewersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpalRequestsRequestsReviewerStagesStagesReviewers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalRequestsRequestsReviewerStagesStagesReviewers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // full_name - computed: true, optional: false, required: false
  public get fullName() {
    return this.getStringAttribute('full_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataOpalRequestsRequestsReviewerStagesStagesReviewersList extends cdktf.ComplexList {

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
  public get(index: number): DataOpalRequestsRequestsReviewerStagesStagesReviewersOutputReference {
    return new DataOpalRequestsRequestsReviewerStagesStagesReviewersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpalRequestsRequestsReviewerStagesStages {
}

export function dataOpalRequestsRequestsReviewerStagesStagesToTerraform(struct?: DataOpalRequestsRequestsReviewerStagesStages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalRequestsRequestsReviewerStagesStagesToHclTerraform(struct?: DataOpalRequestsRequestsReviewerStagesStages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalRequestsRequestsReviewerStagesStagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpalRequestsRequestsReviewerStagesStages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalRequestsRequestsReviewerStagesStages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // reviewers - computed: true, optional: false, required: false
  private _reviewers = new DataOpalRequestsRequestsReviewerStagesStagesReviewersList(this, "reviewers", false);
  public get reviewers() {
    return this._reviewers;
  }

  // stage - computed: true, optional: false, required: false
  public get stage() {
    return this.getNumberAttribute('stage');
  }
}

export class DataOpalRequestsRequestsReviewerStagesStagesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpalRequestsRequestsReviewerStagesStagesOutputReference {
    return new DataOpalRequestsRequestsReviewerStagesStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpalRequestsRequestsReviewerStages {
}

export function dataOpalRequestsRequestsReviewerStagesToTerraform(struct?: DataOpalRequestsRequestsReviewerStages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalRequestsRequestsReviewerStagesToHclTerraform(struct?: DataOpalRequestsRequestsReviewerStages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalRequestsRequestsReviewerStagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpalRequestsRequestsReviewerStages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalRequestsRequestsReviewerStages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_level_name - computed: true, optional: false, required: false
  public get accessLevelName() {
    return this.getStringAttribute('access_level_name');
  }

  // access_level_remote_id - computed: true, optional: false, required: false
  public get accessLevelRemoteId() {
    return this.getStringAttribute('access_level_remote_id');
  }

  // item_id - computed: true, optional: false, required: false
  public get itemId() {
    return this.getStringAttribute('item_id');
  }

  // item_name - computed: true, optional: false, required: false
  public get itemName() {
    return this.getStringAttribute('item_name');
  }

  // stages - computed: true, optional: false, required: false
  private _stages = new DataOpalRequestsRequestsReviewerStagesStagesList(this, "stages", false);
  public get stages() {
    return this._stages;
  }
}

export class DataOpalRequestsRequestsReviewerStagesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpalRequestsRequestsReviewerStagesOutputReference {
    return new DataOpalRequestsRequestsReviewerStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpalRequestsRequestsStagesStagesReviewers {
}

export function dataOpalRequestsRequestsStagesStagesReviewersToTerraform(struct?: DataOpalRequestsRequestsStagesStagesReviewers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalRequestsRequestsStagesStagesReviewersToHclTerraform(struct?: DataOpalRequestsRequestsStagesStagesReviewers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalRequestsRequestsStagesStagesReviewersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpalRequestsRequestsStagesStagesReviewers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalRequestsRequestsStagesStagesReviewers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // full_name - computed: true, optional: false, required: false
  public get fullName() {
    return this.getStringAttribute('full_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataOpalRequestsRequestsStagesStagesReviewersList extends cdktf.ComplexList {

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
  public get(index: number): DataOpalRequestsRequestsStagesStagesReviewersOutputReference {
    return new DataOpalRequestsRequestsStagesStagesReviewersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpalRequestsRequestsStagesStages {
}

export function dataOpalRequestsRequestsStagesStagesToTerraform(struct?: DataOpalRequestsRequestsStagesStages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalRequestsRequestsStagesStagesToHclTerraform(struct?: DataOpalRequestsRequestsStagesStages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalRequestsRequestsStagesStagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpalRequestsRequestsStagesStages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalRequestsRequestsStagesStages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // reviewers - computed: true, optional: false, required: false
  private _reviewers = new DataOpalRequestsRequestsStagesStagesReviewersList(this, "reviewers", false);
  public get reviewers() {
    return this._reviewers;
  }

  // stage - computed: true, optional: false, required: false
  public get stage() {
    return this.getNumberAttribute('stage');
  }
}

export class DataOpalRequestsRequestsStagesStagesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpalRequestsRequestsStagesStagesOutputReference {
    return new DataOpalRequestsRequestsStagesStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpalRequestsRequestsStages {
}

export function dataOpalRequestsRequestsStagesToTerraform(struct?: DataOpalRequestsRequestsStages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalRequestsRequestsStagesToHclTerraform(struct?: DataOpalRequestsRequestsStages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalRequestsRequestsStagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalRequestsRequestsStages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalRequestsRequestsStages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // requested_item_name - computed: true, optional: false, required: false
  public get requestedItemName() {
    return this.getStringAttribute('requested_item_name');
  }

  // requested_role_name - computed: true, optional: false, required: false
  public get requestedRoleName() {
    return this.getStringAttribute('requested_role_name');
  }

  // stages - computed: true, optional: false, required: false
  private _stages = new DataOpalRequestsRequestsStagesStagesList(this, "stages", false);
  public get stages() {
    return this._stages;
  }
}
export interface DataOpalRequestsRequests {
}

export function dataOpalRequestsRequestsToTerraform(struct?: DataOpalRequestsRequests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalRequestsRequestsToHclTerraform(struct?: DataOpalRequestsRequests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalRequestsRequestsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpalRequestsRequests | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalRequestsRequests | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // custom_fields_responses - computed: true, optional: false, required: false
  private _customFieldsResponses = new DataOpalRequestsRequestsCustomFieldsResponsesList(this, "custom_fields_responses", false);
  public get customFieldsResponses() {
    return this._customFieldsResponses;
  }

  // duration_minutes - computed: true, optional: false, required: false
  public get durationMinutes() {
    return this.getNumberAttribute('duration_minutes');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // requested_items_list - computed: true, optional: false, required: false
  private _requestedItemsList = new DataOpalRequestsRequestsRequestedItemsListStructList(this, "requested_items_list", false);
  public get requestedItemsList() {
    return this._requestedItemsList;
  }

  // requester_id - computed: true, optional: false, required: false
  public get requesterId() {
    return this.getStringAttribute('requester_id');
  }

  // reviewer_stages - computed: true, optional: false, required: false
  private _reviewerStages = new DataOpalRequestsRequestsReviewerStagesList(this, "reviewer_stages", false);
  public get reviewerStages() {
    return this._reviewerStages;
  }

  // stages - computed: true, optional: false, required: false
  private _stages = new DataOpalRequestsRequestsStagesOutputReference(this, "stages");
  public get stages() {
    return this._stages;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // target_group_id - computed: true, optional: false, required: false
  public get targetGroupId() {
    return this.getStringAttribute('target_group_id');
  }

  // target_user_id - computed: true, optional: false, required: false
  public get targetUserId() {
    return this.getStringAttribute('target_user_id');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class DataOpalRequestsRequestsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpalRequestsRequestsOutputReference {
    return new DataOpalRequestsRequestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/data-sources/requests opal_requests}
*/
export class DataOpalRequests extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opal_requests";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpalRequests resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpalRequests to import
  * @param importFromId The id of the existing DataOpalRequests that should be imported. Refer to the {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/data-sources/requests#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpalRequests to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opal_requests", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/data-sources/requests opal_requests} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpalRequestsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpalRequestsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'opal_requests',
      terraformGeneratorMetadata: {
        providerName: 'opal',
        providerVersion: '3.3.3',
        providerVersionConstraint: '3.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cursor = config.cursor;
    this._endDateFilter = config.endDateFilter;
    this._pageSize = config.pageSize;
    this._requesterId = config.requesterId;
    this._showPendingOnly = config.showPendingOnly;
    this._startDateFilter = config.startDateFilter;
    this._targetUserId = config.targetUserId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cursor - computed: true, optional: true, required: false
  private _cursor?: string; 
  public get cursor() {
    return this.getStringAttribute('cursor');
  }
  public set cursor(value: string) {
    this._cursor = value;
  }
  public resetCursor() {
    this._cursor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cursorInput() {
    return this._cursor;
  }

  // end_date_filter - computed: false, optional: true, required: false
  private _endDateFilter?: string; 
  public get endDateFilter() {
    return this.getStringAttribute('end_date_filter');
  }
  public set endDateFilter(value: string) {
    this._endDateFilter = value;
  }
  public resetEndDateFilter() {
    this._endDateFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateFilterInput() {
    return this._endDateFilter;
  }

  // page_size - computed: false, optional: true, required: false
  private _pageSize?: number; 
  public get pageSize() {
    return this.getNumberAttribute('page_size');
  }
  public set pageSize(value: number) {
    this._pageSize = value;
  }
  public resetPageSize() {
    this._pageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageSizeInput() {
    return this._pageSize;
  }

  // requester_id - computed: false, optional: true, required: false
  private _requesterId?: string; 
  public get requesterId() {
    return this.getStringAttribute('requester_id');
  }
  public set requesterId(value: string) {
    this._requesterId = value;
  }
  public resetRequesterId() {
    this._requesterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requesterIdInput() {
    return this._requesterId;
  }

  // requests - computed: true, optional: false, required: false
  private _requests = new DataOpalRequestsRequestsList(this, "requests", false);
  public get requests() {
    return this._requests;
  }

  // show_pending_only - computed: false, optional: true, required: false
  private _showPendingOnly?: boolean | cdktf.IResolvable; 
  public get showPendingOnly() {
    return this.getBooleanAttribute('show_pending_only');
  }
  public set showPendingOnly(value: boolean | cdktf.IResolvable) {
    this._showPendingOnly = value;
  }
  public resetShowPendingOnly() {
    this._showPendingOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showPendingOnlyInput() {
    return this._showPendingOnly;
  }

  // start_date_filter - computed: false, optional: true, required: false
  private _startDateFilter?: string; 
  public get startDateFilter() {
    return this.getStringAttribute('start_date_filter');
  }
  public set startDateFilter(value: string) {
    this._startDateFilter = value;
  }
  public resetStartDateFilter() {
    this._startDateFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateFilterInput() {
    return this._startDateFilter;
  }

  // target_user_id - computed: false, optional: true, required: false
  private _targetUserId?: string; 
  public get targetUserId() {
    return this.getStringAttribute('target_user_id');
  }
  public set targetUserId(value: string) {
    this._targetUserId = value;
  }
  public resetTargetUserId() {
    this._targetUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetUserIdInput() {
    return this._targetUserId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cursor: cdktf.stringToTerraform(this._cursor),
      end_date_filter: cdktf.stringToTerraform(this._endDateFilter),
      page_size: cdktf.numberToTerraform(this._pageSize),
      requester_id: cdktf.stringToTerraform(this._requesterId),
      show_pending_only: cdktf.booleanToTerraform(this._showPendingOnly),
      start_date_filter: cdktf.stringToTerraform(this._startDateFilter),
      target_user_id: cdktf.stringToTerraform(this._targetUserId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cursor: {
        value: cdktf.stringToHclTerraform(this._cursor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_date_filter: {
        value: cdktf.stringToHclTerraform(this._endDateFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page_size: {
        value: cdktf.numberToHclTerraform(this._pageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      requester_id: {
        value: cdktf.stringToHclTerraform(this._requesterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      show_pending_only: {
        value: cdktf.booleanToHclTerraform(this._showPendingOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      start_date_filter: {
        value: cdktf.stringToHclTerraform(this._startDateFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_user_id: {
        value: cdktf.stringToHclTerraform(this._targetUserId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
