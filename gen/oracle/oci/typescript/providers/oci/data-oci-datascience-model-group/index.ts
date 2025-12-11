// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/datascience_model_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatascienceModelGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/datascience_model_group#model_group_id DataOciDatascienceModelGroup#model_group_id}
  */
  readonly modelGroupId: string;
}
export interface DataOciDatascienceModelGroupMemberModelEntriesMemberModelDetails {
}

export function dataOciDatascienceModelGroupMemberModelEntriesMemberModelDetailsToTerraform(struct?: DataOciDatascienceModelGroupMemberModelEntriesMemberModelDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatascienceModelGroupMemberModelEntriesMemberModelDetailsToHclTerraform(struct?: DataOciDatascienceModelGroupMemberModelEntriesMemberModelDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatascienceModelGroupMemberModelEntriesMemberModelDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatascienceModelGroupMemberModelEntriesMemberModelDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatascienceModelGroupMemberModelEntriesMemberModelDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // inference_key - computed: true, optional: false, required: false
  public get inferenceKey() {
    return this.getStringAttribute('inference_key');
  }

  // model_id - computed: true, optional: false, required: false
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
}

export class DataOciDatascienceModelGroupMemberModelEntriesMemberModelDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatascienceModelGroupMemberModelEntriesMemberModelDetailsOutputReference {
    return new DataOciDatascienceModelGroupMemberModelEntriesMemberModelDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatascienceModelGroupMemberModelEntries {
}

export function dataOciDatascienceModelGroupMemberModelEntriesToTerraform(struct?: DataOciDatascienceModelGroupMemberModelEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatascienceModelGroupMemberModelEntriesToHclTerraform(struct?: DataOciDatascienceModelGroupMemberModelEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatascienceModelGroupMemberModelEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatascienceModelGroupMemberModelEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatascienceModelGroupMemberModelEntries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // member_model_details - computed: true, optional: false, required: false
  private _memberModelDetails = new DataOciDatascienceModelGroupMemberModelEntriesMemberModelDetailsList(this, "member_model_details", false);
  public get memberModelDetails() {
    return this._memberModelDetails;
  }
}

export class DataOciDatascienceModelGroupMemberModelEntriesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatascienceModelGroupMemberModelEntriesOutputReference {
    return new DataOciDatascienceModelGroupMemberModelEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsCustomMetadataListStruct {
}

export function dataOciDatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsCustomMetadataListStructToTerraform(struct?: DataOciDatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsCustomMetadataListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsCustomMetadataListStructToHclTerraform(struct?: DataOciDatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsCustomMetadataListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsCustomMetadataListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsCustomMetadataListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsCustomMetadataListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciDatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsCustomMetadataListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsCustomMetadataListStructOutputReference {
    return new DataOciDatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsCustomMetadataListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetails {
}

export function dataOciDatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsToTerraform(struct?: DataOciDatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsToHclTerraform(struct?: DataOciDatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base_model_id - computed: true, optional: false, required: false
  public get baseModelId() {
    return this.getStringAttribute('base_model_id');
  }

  // custom_metadata_list - computed: true, optional: false, required: false
  private _customMetadataList = new DataOciDatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsCustomMetadataListStructList(this, "custom_metadata_list", false);
  public get customMetadataList() {
    return this._customMetadataList;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciDatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsOutputReference {
    return new DataOciDatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetails {
}

export function dataOciDatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsToTerraform(struct?: DataOciDatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsToHclTerraform(struct?: DataOciDatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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

  // model_group_details - computed: true, optional: false, required: false
  private _modelGroupDetails = new DataOciDatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsList(this, "model_group_details", false);
  public get modelGroupDetails() {
    return this._modelGroupDetails;
  }

  // model_group_version_history_id - computed: true, optional: false, required: false
  public get modelGroupVersionHistoryId() {
    return this.getStringAttribute('model_group_version_history_id');
  }

  // version_label - computed: true, optional: false, required: false
  public get versionLabel() {
    return this.getStringAttribute('version_label');
  }
}

export class DataOciDatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsOutputReference {
    return new DataOciDatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsValues {
}

export function dataOciDatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsValuesToTerraform(struct?: DataOciDatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsValuesToHclTerraform(struct?: DataOciDatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // inference_key - computed: true, optional: false, required: false
  public get inferenceKey() {
    return this.getStringAttribute('inference_key');
  }

  // model_id - computed: true, optional: false, required: false
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
}

export class DataOciDatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsValuesOutputReference {
    return new DataOciDatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItems {
}

export function dataOciDatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsToTerraform(struct?: DataOciDatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsToHclTerraform(struct?: DataOciDatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operation - computed: true, optional: false, required: false
  public get operation() {
    return this.getStringAttribute('operation');
  }

  // values - computed: true, optional: false, required: false
  private _values = new DataOciDatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
}

export class DataOciDatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsOutputReference {
    return new DataOciDatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetails {
}

export function dataOciDatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsToTerraform(struct?: DataOciDatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsToHclTerraform(struct?: DataOciDatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsOutputReference {
    return new DataOciDatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatascienceModelGroupModelGroupCloneSourceDetails {
}

export function dataOciDatascienceModelGroupModelGroupCloneSourceDetailsToTerraform(struct?: DataOciDatascienceModelGroupModelGroupCloneSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatascienceModelGroupModelGroupCloneSourceDetailsToHclTerraform(struct?: DataOciDatascienceModelGroupModelGroupCloneSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatascienceModelGroupModelGroupCloneSourceDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatascienceModelGroupModelGroupCloneSourceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatascienceModelGroupModelGroupCloneSourceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // model_group_clone_source_type - computed: true, optional: false, required: false
  public get modelGroupCloneSourceType() {
    return this.getStringAttribute('model_group_clone_source_type');
  }

  // modify_model_group_details - computed: true, optional: false, required: false
  private _modifyModelGroupDetails = new DataOciDatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsList(this, "modify_model_group_details", false);
  public get modifyModelGroupDetails() {
    return this._modifyModelGroupDetails;
  }

  // patch_model_group_member_model_details - computed: true, optional: false, required: false
  private _patchModelGroupMemberModelDetails = new DataOciDatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsList(this, "patch_model_group_member_model_details", false);
  public get patchModelGroupMemberModelDetails() {
    return this._patchModelGroupMemberModelDetails;
  }

  // source_id - computed: true, optional: false, required: false
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }
}

export class DataOciDatascienceModelGroupModelGroupCloneSourceDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatascienceModelGroupModelGroupCloneSourceDetailsOutputReference {
    return new DataOciDatascienceModelGroupModelGroupCloneSourceDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatascienceModelGroupModelGroupDetailsCustomMetadataListStruct {
}

export function dataOciDatascienceModelGroupModelGroupDetailsCustomMetadataListStructToTerraform(struct?: DataOciDatascienceModelGroupModelGroupDetailsCustomMetadataListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatascienceModelGroupModelGroupDetailsCustomMetadataListStructToHclTerraform(struct?: DataOciDatascienceModelGroupModelGroupDetailsCustomMetadataListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatascienceModelGroupModelGroupDetailsCustomMetadataListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatascienceModelGroupModelGroupDetailsCustomMetadataListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatascienceModelGroupModelGroupDetailsCustomMetadataListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciDatascienceModelGroupModelGroupDetailsCustomMetadataListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatascienceModelGroupModelGroupDetailsCustomMetadataListStructOutputReference {
    return new DataOciDatascienceModelGroupModelGroupDetailsCustomMetadataListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatascienceModelGroupModelGroupDetails {
}

export function dataOciDatascienceModelGroupModelGroupDetailsToTerraform(struct?: DataOciDatascienceModelGroupModelGroupDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatascienceModelGroupModelGroupDetailsToHclTerraform(struct?: DataOciDatascienceModelGroupModelGroupDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatascienceModelGroupModelGroupDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatascienceModelGroupModelGroupDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatascienceModelGroupModelGroupDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base_model_id - computed: true, optional: false, required: false
  public get baseModelId() {
    return this.getStringAttribute('base_model_id');
  }

  // custom_metadata_list - computed: true, optional: false, required: false
  private _customMetadataList = new DataOciDatascienceModelGroupModelGroupDetailsCustomMetadataListStructList(this, "custom_metadata_list", false);
  public get customMetadataList() {
    return this._customMetadataList;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciDatascienceModelGroupModelGroupDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatascienceModelGroupModelGroupDetailsOutputReference {
    return new DataOciDatascienceModelGroupModelGroupDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/datascience_model_group oci_datascience_model_group}
*/
export class DataOciDatascienceModelGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_datascience_model_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatascienceModelGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatascienceModelGroup to import
  * @param importFromId The id of the existing DataOciDatascienceModelGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/datascience_model_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatascienceModelGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_datascience_model_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/datascience_model_group oci_datascience_model_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatascienceModelGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatascienceModelGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_datascience_model_group',
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
    this._modelGroupId = config.modelGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // create_type - computed: true, optional: false, required: false
  public get createType() {
    return this.getStringAttribute('create_type');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // member_model_entries - computed: true, optional: false, required: false
  private _memberModelEntries = new DataOciDatascienceModelGroupMemberModelEntriesList(this, "member_model_entries", false);
  public get memberModelEntries() {
    return this._memberModelEntries;
  }

  // model_group_clone_source_details - computed: true, optional: false, required: false
  private _modelGroupCloneSourceDetails = new DataOciDatascienceModelGroupModelGroupCloneSourceDetailsList(this, "model_group_clone_source_details", false);
  public get modelGroupCloneSourceDetails() {
    return this._modelGroupCloneSourceDetails;
  }

  // model_group_details - computed: true, optional: false, required: false
  private _modelGroupDetails = new DataOciDatascienceModelGroupModelGroupDetailsList(this, "model_group_details", false);
  public get modelGroupDetails() {
    return this._modelGroupDetails;
  }

  // model_group_id - computed: false, optional: false, required: true
  private _modelGroupId?: string; 
  public get modelGroupId() {
    return this.getStringAttribute('model_group_id');
  }
  public set modelGroupId(value: string) {
    this._modelGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelGroupIdInput() {
    return this._modelGroupId;
  }

  // model_group_version_history_id - computed: true, optional: false, required: false
  public get modelGroupVersionHistoryId() {
    return this.getStringAttribute('model_group_version_history_id');
  }

  // model_group_version_history_name - computed: true, optional: false, required: false
  public get modelGroupVersionHistoryName() {
    return this.getStringAttribute('model_group_version_history_name');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // source_model_group_id - computed: true, optional: false, required: false
  public get sourceModelGroupId() {
    return this.getStringAttribute('source_model_group_id');
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

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getStringAttribute('version_id');
  }

  // version_label - computed: true, optional: false, required: false
  public get versionLabel() {
    return this.getStringAttribute('version_label');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      model_group_id: cdktf.stringToTerraform(this._modelGroupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      model_group_id: {
        value: cdktf.stringToHclTerraform(this._modelGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
