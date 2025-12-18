// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatascienceModelGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#compartment_id DatascienceModelGroup#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#create_type DatascienceModelGroup#create_type}
  */
  readonly createType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#defined_tags DatascienceModelGroup#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#description DatascienceModelGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#display_name DatascienceModelGroup#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#freeform_tags DatascienceModelGroup#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#id DatascienceModelGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#model_group_version_history_id DatascienceModelGroup#model_group_version_history_id}
  */
  readonly modelGroupVersionHistoryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#project_id DatascienceModelGroup#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#version_label DatascienceModelGroup#version_label}
  */
  readonly versionLabel?: string;
  /**
  * member_model_entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#member_model_entries DatascienceModelGroup#member_model_entries}
  */
  readonly memberModelEntries?: DatascienceModelGroupMemberModelEntries;
  /**
  * model_group_clone_source_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#model_group_clone_source_details DatascienceModelGroup#model_group_clone_source_details}
  */
  readonly modelGroupCloneSourceDetails?: DatascienceModelGroupModelGroupCloneSourceDetails;
  /**
  * model_group_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#model_group_details DatascienceModelGroup#model_group_details}
  */
  readonly modelGroupDetails?: DatascienceModelGroupModelGroupDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#timeouts DatascienceModelGroup#timeouts}
  */
  readonly timeouts?: DatascienceModelGroupTimeouts;
}
export interface DatascienceModelGroupMemberModelEntriesMemberModelDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#inference_key DatascienceModelGroup#inference_key}
  */
  readonly inferenceKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#model_id DatascienceModelGroup#model_id}
  */
  readonly modelId?: string;
}

export function datascienceModelGroupMemberModelEntriesMemberModelDetailsToTerraform(struct?: DatascienceModelGroupMemberModelEntriesMemberModelDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inference_key: cdktf.stringToTerraform(struct!.inferenceKey),
    model_id: cdktf.stringToTerraform(struct!.modelId),
  }
}


export function datascienceModelGroupMemberModelEntriesMemberModelDetailsToHclTerraform(struct?: DatascienceModelGroupMemberModelEntriesMemberModelDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inference_key: {
      value: cdktf.stringToHclTerraform(struct!.inferenceKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_id: {
      value: cdktf.stringToHclTerraform(struct!.modelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceModelGroupMemberModelEntriesMemberModelDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatascienceModelGroupMemberModelEntriesMemberModelDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inferenceKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.inferenceKey = this._inferenceKey;
    }
    if (this._modelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelId = this._modelId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceModelGroupMemberModelEntriesMemberModelDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inferenceKey = undefined;
      this._modelId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inferenceKey = value.inferenceKey;
      this._modelId = value.modelId;
    }
  }

  // inference_key - computed: true, optional: true, required: false
  private _inferenceKey?: string; 
  public get inferenceKey() {
    return this.getStringAttribute('inference_key');
  }
  public set inferenceKey(value: string) {
    this._inferenceKey = value;
  }
  public resetInferenceKey() {
    this._inferenceKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceKeyInput() {
    return this._inferenceKey;
  }

  // model_id - computed: true, optional: true, required: false
  private _modelId?: string; 
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
  public set modelId(value: string) {
    this._modelId = value;
  }
  public resetModelId() {
    this._modelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdInput() {
    return this._modelId;
  }
}

export class DatascienceModelGroupMemberModelEntriesMemberModelDetailsList extends cdktf.ComplexList {
  public internalValue? : DatascienceModelGroupMemberModelEntriesMemberModelDetails[] | cdktf.IResolvable

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
  public get(index: number): DatascienceModelGroupMemberModelEntriesMemberModelDetailsOutputReference {
    return new DatascienceModelGroupMemberModelEntriesMemberModelDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatascienceModelGroupMemberModelEntries {
  /**
  * member_model_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#member_model_details DatascienceModelGroup#member_model_details}
  */
  readonly memberModelDetails?: DatascienceModelGroupMemberModelEntriesMemberModelDetails[] | cdktf.IResolvable;
}

export function datascienceModelGroupMemberModelEntriesToTerraform(struct?: DatascienceModelGroupMemberModelEntriesOutputReference | DatascienceModelGroupMemberModelEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    member_model_details: cdktf.listMapper(datascienceModelGroupMemberModelEntriesMemberModelDetailsToTerraform, true)(struct!.memberModelDetails),
  }
}


export function datascienceModelGroupMemberModelEntriesToHclTerraform(struct?: DatascienceModelGroupMemberModelEntriesOutputReference | DatascienceModelGroupMemberModelEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    member_model_details: {
      value: cdktf.listMapperHcl(datascienceModelGroupMemberModelEntriesMemberModelDetailsToHclTerraform, true)(struct!.memberModelDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceModelGroupMemberModelEntriesMemberModelDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceModelGroupMemberModelEntriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceModelGroupMemberModelEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memberModelDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberModelDetails = this._memberModelDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceModelGroupMemberModelEntries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._memberModelDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._memberModelDetails.internalValue = value.memberModelDetails;
    }
  }

  // member_model_details - computed: false, optional: true, required: false
  private _memberModelDetails = new DatascienceModelGroupMemberModelEntriesMemberModelDetailsList(this, "member_model_details", false);
  public get memberModelDetails() {
    return this._memberModelDetails;
  }
  public putMemberModelDetails(value: DatascienceModelGroupMemberModelEntriesMemberModelDetails[] | cdktf.IResolvable) {
    this._memberModelDetails.internalValue = value;
  }
  public resetMemberModelDetails() {
    this._memberModelDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberModelDetailsInput() {
    return this._memberModelDetails.internalValue;
  }
}
export interface DatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsCustomMetadataListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#category DatascienceModelGroup#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#description DatascienceModelGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#key DatascienceModelGroup#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#value DatascienceModelGroup#value}
  */
  readonly value?: string;
}

export function datascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsCustomMetadataListStructToTerraform(struct?: DatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsCustomMetadataListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    description: cdktf.stringToTerraform(struct!.description),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function datascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsCustomMetadataListStructToHclTerraform(struct?: DatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsCustomMetadataListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsCustomMetadataListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsCustomMetadataListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsCustomMetadataListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._description = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._description = value.description;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // category - computed: true, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsCustomMetadataListStructList extends cdktf.ComplexList {
  public internalValue? : DatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsCustomMetadataListStruct[] | cdktf.IResolvable

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
  public get(index: number): DatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsCustomMetadataListStructOutputReference {
    return new DatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsCustomMetadataListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#base_model_id DatascienceModelGroup#base_model_id}
  */
  readonly baseModelId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#type DatascienceModelGroup#type}
  */
  readonly type: string;
  /**
  * custom_metadata_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#custom_metadata_list DatascienceModelGroup#custom_metadata_list}
  */
  readonly customMetadataList?: DatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsCustomMetadataListStruct[] | cdktf.IResolvable;
}

export function datascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsToTerraform(struct?: DatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsOutputReference | DatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_model_id: cdktf.stringToTerraform(struct!.baseModelId),
    type: cdktf.stringToTerraform(struct!.type),
    custom_metadata_list: cdktf.listMapper(datascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsCustomMetadataListStructToTerraform, true)(struct!.customMetadataList),
  }
}


export function datascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsToHclTerraform(struct?: DatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsOutputReference | DatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_model_id: {
      value: cdktf.stringToHclTerraform(struct!.baseModelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_metadata_list: {
      value: cdktf.listMapperHcl(datascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsCustomMetadataListStructToHclTerraform, true)(struct!.customMetadataList),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsCustomMetadataListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseModelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseModelId = this._baseModelId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._customMetadataList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMetadataList = this._customMetadataList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseModelId = undefined;
      this._type = undefined;
      this._customMetadataList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseModelId = value.baseModelId;
      this._type = value.type;
      this._customMetadataList.internalValue = value.customMetadataList;
    }
  }

  // base_model_id - computed: true, optional: true, required: false
  private _baseModelId?: string; 
  public get baseModelId() {
    return this.getStringAttribute('base_model_id');
  }
  public set baseModelId(value: string) {
    this._baseModelId = value;
  }
  public resetBaseModelId() {
    this._baseModelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseModelIdInput() {
    return this._baseModelId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // custom_metadata_list - computed: false, optional: true, required: false
  private _customMetadataList = new DatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsCustomMetadataListStructList(this, "custom_metadata_list", false);
  public get customMetadataList() {
    return this._customMetadataList;
  }
  public putCustomMetadataList(value: DatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsCustomMetadataListStruct[] | cdktf.IResolvable) {
    this._customMetadataList.internalValue = value;
  }
  public resetCustomMetadataList() {
    this._customMetadataList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMetadataListInput() {
    return this._customMetadataList.internalValue;
  }
}
export interface DatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#defined_tags DatascienceModelGroup#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#description DatascienceModelGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#display_name DatascienceModelGroup#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#freeform_tags DatascienceModelGroup#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#model_group_version_history_id DatascienceModelGroup#model_group_version_history_id}
  */
  readonly modelGroupVersionHistoryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#version_label DatascienceModelGroup#version_label}
  */
  readonly versionLabel?: string;
  /**
  * model_group_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#model_group_details DatascienceModelGroup#model_group_details}
  */
  readonly modelGroupDetails?: DatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetails;
}

export function datascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsToTerraform(struct?: DatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsOutputReference | DatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.definedTags),
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.freeformTags),
    model_group_version_history_id: cdktf.stringToTerraform(struct!.modelGroupVersionHistoryId),
    version_label: cdktf.stringToTerraform(struct!.versionLabel),
    model_group_details: datascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsToTerraform(struct!.modelGroupDetails),
  }
}


export function datascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsToHclTerraform(struct?: DatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsOutputReference | DatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    defined_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.definedTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    freeform_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.freeformTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    model_group_version_history_id: {
      value: cdktf.stringToHclTerraform(struct!.modelGroupVersionHistoryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_label: {
      value: cdktf.stringToHclTerraform(struct!.versionLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_group_details: {
      value: datascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsToHclTerraform(struct!.modelGroupDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definedTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.definedTags = this._definedTags;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._freeformTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeformTags = this._freeformTags;
    }
    if (this._modelGroupVersionHistoryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelGroupVersionHistoryId = this._modelGroupVersionHistoryId;
    }
    if (this._versionLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionLabel = this._versionLabel;
    }
    if (this._modelGroupDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelGroupDetails = this._modelGroupDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._definedTags = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._freeformTags = undefined;
      this._modelGroupVersionHistoryId = undefined;
      this._versionLabel = undefined;
      this._modelGroupDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._definedTags = value.definedTags;
      this._description = value.description;
      this._displayName = value.displayName;
      this._freeformTags = value.freeformTags;
      this._modelGroupVersionHistoryId = value.modelGroupVersionHistoryId;
      this._versionLabel = value.versionLabel;
      this._modelGroupDetails.internalValue = value.modelGroupDetails;
    }
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: true, optional: true, required: false
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

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
  }

  // model_group_version_history_id - computed: true, optional: true, required: false
  private _modelGroupVersionHistoryId?: string; 
  public get modelGroupVersionHistoryId() {
    return this.getStringAttribute('model_group_version_history_id');
  }
  public set modelGroupVersionHistoryId(value: string) {
    this._modelGroupVersionHistoryId = value;
  }
  public resetModelGroupVersionHistoryId() {
    this._modelGroupVersionHistoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelGroupVersionHistoryIdInput() {
    return this._modelGroupVersionHistoryId;
  }

  // version_label - computed: true, optional: true, required: false
  private _versionLabel?: string; 
  public get versionLabel() {
    return this.getStringAttribute('version_label');
  }
  public set versionLabel(value: string) {
    this._versionLabel = value;
  }
  public resetVersionLabel() {
    this._versionLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionLabelInput() {
    return this._versionLabel;
  }

  // model_group_details - computed: false, optional: true, required: false
  private _modelGroupDetails = new DatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetailsOutputReference(this, "model_group_details");
  public get modelGroupDetails() {
    return this._modelGroupDetails;
  }
  public putModelGroupDetails(value: DatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsModelGroupDetails) {
    this._modelGroupDetails.internalValue = value;
  }
  public resetModelGroupDetails() {
    this._modelGroupDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelGroupDetailsInput() {
    return this._modelGroupDetails.internalValue;
  }
}
export interface DatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#inference_key DatascienceModelGroup#inference_key}
  */
  readonly inferenceKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#model_id DatascienceModelGroup#model_id}
  */
  readonly modelId: string;
}

export function datascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsValuesToTerraform(struct?: DatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inference_key: cdktf.stringToTerraform(struct!.inferenceKey),
    model_id: cdktf.stringToTerraform(struct!.modelId),
  }
}


export function datascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsValuesToHclTerraform(struct?: DatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inference_key: {
      value: cdktf.stringToHclTerraform(struct!.inferenceKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_id: {
      value: cdktf.stringToHclTerraform(struct!.modelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inferenceKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.inferenceKey = this._inferenceKey;
    }
    if (this._modelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelId = this._modelId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inferenceKey = undefined;
      this._modelId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inferenceKey = value.inferenceKey;
      this._modelId = value.modelId;
    }
  }

  // inference_key - computed: true, optional: true, required: false
  private _inferenceKey?: string; 
  public get inferenceKey() {
    return this.getStringAttribute('inference_key');
  }
  public set inferenceKey(value: string) {
    this._inferenceKey = value;
  }
  public resetInferenceKey() {
    this._inferenceKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceKeyInput() {
    return this._inferenceKey;
  }

  // model_id - computed: false, optional: false, required: true
  private _modelId?: string; 
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
  public set modelId(value: string) {
    this._modelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdInput() {
    return this._modelId;
  }
}

export class DatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsValuesList extends cdktf.ComplexList {
  public internalValue? : DatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsValues[] | cdktf.IResolvable

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
  public get(index: number): DatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsValuesOutputReference {
    return new DatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#operation DatascienceModelGroup#operation}
  */
  readonly operation: string;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#values DatascienceModelGroup#values}
  */
  readonly values: DatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsValues[] | cdktf.IResolvable;
}

export function datascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsToTerraform(struct?: DatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    values: cdktf.listMapper(datascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsValuesToTerraform, true)(struct!.values),
  }
}


export function datascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsToHclTerraform(struct?: DatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(datascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._values.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._values.internalValue = value.values;
    }
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // values - computed: false, optional: false, required: true
  private _values = new DatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: DatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}

export class DatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsList extends cdktf.ComplexList {
  public internalValue? : DatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItems[] | cdktf.IResolvable

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
  public get(index: number): DatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsOutputReference {
    return new DatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetails {
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#items DatascienceModelGroup#items}
  */
  readonly items?: DatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItems[] | cdktf.IResolvable;
}

export function datascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsToTerraform(struct?: DatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsOutputReference | DatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(datascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsToTerraform, true)(struct!.items),
  }
}


export function datascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsToHclTerraform(struct?: DatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsOutputReference | DatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(datascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface DatascienceModelGroupModelGroupCloneSourceDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#model_group_clone_source_type DatascienceModelGroup#model_group_clone_source_type}
  */
  readonly modelGroupCloneSourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#source_id DatascienceModelGroup#source_id}
  */
  readonly sourceId: string;
  /**
  * modify_model_group_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#modify_model_group_details DatascienceModelGroup#modify_model_group_details}
  */
  readonly modifyModelGroupDetails?: DatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetails;
  /**
  * patch_model_group_member_model_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#patch_model_group_member_model_details DatascienceModelGroup#patch_model_group_member_model_details}
  */
  readonly patchModelGroupMemberModelDetails?: DatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetails;
}

export function datascienceModelGroupModelGroupCloneSourceDetailsToTerraform(struct?: DatascienceModelGroupModelGroupCloneSourceDetailsOutputReference | DatascienceModelGroupModelGroupCloneSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    model_group_clone_source_type: cdktf.stringToTerraform(struct!.modelGroupCloneSourceType),
    source_id: cdktf.stringToTerraform(struct!.sourceId),
    modify_model_group_details: datascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsToTerraform(struct!.modifyModelGroupDetails),
    patch_model_group_member_model_details: datascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsToTerraform(struct!.patchModelGroupMemberModelDetails),
  }
}


export function datascienceModelGroupModelGroupCloneSourceDetailsToHclTerraform(struct?: DatascienceModelGroupModelGroupCloneSourceDetailsOutputReference | DatascienceModelGroupModelGroupCloneSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    model_group_clone_source_type: {
      value: cdktf.stringToHclTerraform(struct!.modelGroupCloneSourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modify_model_group_details: {
      value: datascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsToHclTerraform(struct!.modifyModelGroupDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsList",
    },
    patch_model_group_member_model_details: {
      value: datascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsToHclTerraform(struct!.patchModelGroupMemberModelDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceModelGroupModelGroupCloneSourceDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceModelGroupModelGroupCloneSourceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modelGroupCloneSourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelGroupCloneSourceType = this._modelGroupCloneSourceType;
    }
    if (this._sourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceId = this._sourceId;
    }
    if (this._modifyModelGroupDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifyModelGroupDetails = this._modifyModelGroupDetails?.internalValue;
    }
    if (this._patchModelGroupMemberModelDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchModelGroupMemberModelDetails = this._patchModelGroupMemberModelDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceModelGroupModelGroupCloneSourceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._modelGroupCloneSourceType = undefined;
      this._sourceId = undefined;
      this._modifyModelGroupDetails.internalValue = undefined;
      this._patchModelGroupMemberModelDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._modelGroupCloneSourceType = value.modelGroupCloneSourceType;
      this._sourceId = value.sourceId;
      this._modifyModelGroupDetails.internalValue = value.modifyModelGroupDetails;
      this._patchModelGroupMemberModelDetails.internalValue = value.patchModelGroupMemberModelDetails;
    }
  }

  // model_group_clone_source_type - computed: false, optional: false, required: true
  private _modelGroupCloneSourceType?: string; 
  public get modelGroupCloneSourceType() {
    return this.getStringAttribute('model_group_clone_source_type');
  }
  public set modelGroupCloneSourceType(value: string) {
    this._modelGroupCloneSourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelGroupCloneSourceTypeInput() {
    return this._modelGroupCloneSourceType;
  }

  // source_id - computed: false, optional: false, required: true
  private _sourceId?: string; 
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }
  public set sourceId(value: string) {
    this._sourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdInput() {
    return this._sourceId;
  }

  // modify_model_group_details - computed: false, optional: true, required: false
  private _modifyModelGroupDetails = new DatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetailsOutputReference(this, "modify_model_group_details");
  public get modifyModelGroupDetails() {
    return this._modifyModelGroupDetails;
  }
  public putModifyModelGroupDetails(value: DatascienceModelGroupModelGroupCloneSourceDetailsModifyModelGroupDetails) {
    this._modifyModelGroupDetails.internalValue = value;
  }
  public resetModifyModelGroupDetails() {
    this._modifyModelGroupDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyModelGroupDetailsInput() {
    return this._modifyModelGroupDetails.internalValue;
  }

  // patch_model_group_member_model_details - computed: false, optional: true, required: false
  private _patchModelGroupMemberModelDetails = new DatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetailsOutputReference(this, "patch_model_group_member_model_details");
  public get patchModelGroupMemberModelDetails() {
    return this._patchModelGroupMemberModelDetails;
  }
  public putPatchModelGroupMemberModelDetails(value: DatascienceModelGroupModelGroupCloneSourceDetailsPatchModelGroupMemberModelDetails) {
    this._patchModelGroupMemberModelDetails.internalValue = value;
  }
  public resetPatchModelGroupMemberModelDetails() {
    this._patchModelGroupMemberModelDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchModelGroupMemberModelDetailsInput() {
    return this._patchModelGroupMemberModelDetails.internalValue;
  }
}
export interface DatascienceModelGroupModelGroupDetailsCustomMetadataListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#category DatascienceModelGroup#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#description DatascienceModelGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#key DatascienceModelGroup#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#value DatascienceModelGroup#value}
  */
  readonly value?: string;
}

export function datascienceModelGroupModelGroupDetailsCustomMetadataListStructToTerraform(struct?: DatascienceModelGroupModelGroupDetailsCustomMetadataListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    description: cdktf.stringToTerraform(struct!.description),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function datascienceModelGroupModelGroupDetailsCustomMetadataListStructToHclTerraform(struct?: DatascienceModelGroupModelGroupDetailsCustomMetadataListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceModelGroupModelGroupDetailsCustomMetadataListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatascienceModelGroupModelGroupDetailsCustomMetadataListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceModelGroupModelGroupDetailsCustomMetadataListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._description = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._description = value.description;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // category - computed: true, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DatascienceModelGroupModelGroupDetailsCustomMetadataListStructList extends cdktf.ComplexList {
  public internalValue? : DatascienceModelGroupModelGroupDetailsCustomMetadataListStruct[] | cdktf.IResolvable

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
  public get(index: number): DatascienceModelGroupModelGroupDetailsCustomMetadataListStructOutputReference {
    return new DatascienceModelGroupModelGroupDetailsCustomMetadataListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatascienceModelGroupModelGroupDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#base_model_id DatascienceModelGroup#base_model_id}
  */
  readonly baseModelId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#type DatascienceModelGroup#type}
  */
  readonly type: string;
  /**
  * custom_metadata_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#custom_metadata_list DatascienceModelGroup#custom_metadata_list}
  */
  readonly customMetadataList?: DatascienceModelGroupModelGroupDetailsCustomMetadataListStruct[] | cdktf.IResolvable;
}

export function datascienceModelGroupModelGroupDetailsToTerraform(struct?: DatascienceModelGroupModelGroupDetailsOutputReference | DatascienceModelGroupModelGroupDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_model_id: cdktf.stringToTerraform(struct!.baseModelId),
    type: cdktf.stringToTerraform(struct!.type),
    custom_metadata_list: cdktf.listMapper(datascienceModelGroupModelGroupDetailsCustomMetadataListStructToTerraform, true)(struct!.customMetadataList),
  }
}


export function datascienceModelGroupModelGroupDetailsToHclTerraform(struct?: DatascienceModelGroupModelGroupDetailsOutputReference | DatascienceModelGroupModelGroupDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_model_id: {
      value: cdktf.stringToHclTerraform(struct!.baseModelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_metadata_list: {
      value: cdktf.listMapperHcl(datascienceModelGroupModelGroupDetailsCustomMetadataListStructToHclTerraform, true)(struct!.customMetadataList),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceModelGroupModelGroupDetailsCustomMetadataListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceModelGroupModelGroupDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceModelGroupModelGroupDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseModelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseModelId = this._baseModelId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._customMetadataList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMetadataList = this._customMetadataList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceModelGroupModelGroupDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseModelId = undefined;
      this._type = undefined;
      this._customMetadataList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseModelId = value.baseModelId;
      this._type = value.type;
      this._customMetadataList.internalValue = value.customMetadataList;
    }
  }

  // base_model_id - computed: true, optional: true, required: false
  private _baseModelId?: string; 
  public get baseModelId() {
    return this.getStringAttribute('base_model_id');
  }
  public set baseModelId(value: string) {
    this._baseModelId = value;
  }
  public resetBaseModelId() {
    this._baseModelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseModelIdInput() {
    return this._baseModelId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // custom_metadata_list - computed: false, optional: true, required: false
  private _customMetadataList = new DatascienceModelGroupModelGroupDetailsCustomMetadataListStructList(this, "custom_metadata_list", false);
  public get customMetadataList() {
    return this._customMetadataList;
  }
  public putCustomMetadataList(value: DatascienceModelGroupModelGroupDetailsCustomMetadataListStruct[] | cdktf.IResolvable) {
    this._customMetadataList.internalValue = value;
  }
  public resetCustomMetadataList() {
    this._customMetadataList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMetadataListInput() {
    return this._customMetadataList.internalValue;
  }
}
export interface DatascienceModelGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#create DatascienceModelGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#delete DatascienceModelGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#update DatascienceModelGroup#update}
  */
  readonly update?: string;
}

export function datascienceModelGroupTimeoutsToTerraform(struct?: DatascienceModelGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function datascienceModelGroupTimeoutsToHclTerraform(struct?: DatascienceModelGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceModelGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatascienceModelGroupTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceModelGroupTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group oci_datascience_model_group}
*/
export class DatascienceModelGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_datascience_model_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatascienceModelGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatascienceModelGroup to import
  * @param importFromId The id of the existing DatascienceModelGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatascienceModelGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_datascience_model_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/datascience_model_group oci_datascience_model_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatascienceModelGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DatascienceModelGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_datascience_model_group',
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
    this._createType = config.createType;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._modelGroupVersionHistoryId = config.modelGroupVersionHistoryId;
    this._projectId = config.projectId;
    this._versionLabel = config.versionLabel;
    this._memberModelEntries.internalValue = config.memberModelEntries;
    this._modelGroupCloneSourceDetails.internalValue = config.modelGroupCloneSourceDetails;
    this._modelGroupDetails.internalValue = config.modelGroupDetails;
    this._timeouts.internalValue = config.timeouts;
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

  // create_type - computed: false, optional: false, required: true
  private _createType?: string; 
  public get createType() {
    return this.getStringAttribute('create_type');
  }
  public set createType(value: string) {
    this._createType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createTypeInput() {
    return this._createType;
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: true, optional: true, required: false
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

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // model_group_version_history_id - computed: true, optional: true, required: false
  private _modelGroupVersionHistoryId?: string; 
  public get modelGroupVersionHistoryId() {
    return this.getStringAttribute('model_group_version_history_id');
  }
  public set modelGroupVersionHistoryId(value: string) {
    this._modelGroupVersionHistoryId = value;
  }
  public resetModelGroupVersionHistoryId() {
    this._modelGroupVersionHistoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelGroupVersionHistoryIdInput() {
    return this._modelGroupVersionHistoryId;
  }

  // model_group_version_history_name - computed: true, optional: false, required: false
  public get modelGroupVersionHistoryName() {
    return this.getStringAttribute('model_group_version_history_name');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
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

  // version_label - computed: true, optional: true, required: false
  private _versionLabel?: string; 
  public get versionLabel() {
    return this.getStringAttribute('version_label');
  }
  public set versionLabel(value: string) {
    this._versionLabel = value;
  }
  public resetVersionLabel() {
    this._versionLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionLabelInput() {
    return this._versionLabel;
  }

  // member_model_entries - computed: false, optional: true, required: false
  private _memberModelEntries = new DatascienceModelGroupMemberModelEntriesOutputReference(this, "member_model_entries");
  public get memberModelEntries() {
    return this._memberModelEntries;
  }
  public putMemberModelEntries(value: DatascienceModelGroupMemberModelEntries) {
    this._memberModelEntries.internalValue = value;
  }
  public resetMemberModelEntries() {
    this._memberModelEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberModelEntriesInput() {
    return this._memberModelEntries.internalValue;
  }

  // model_group_clone_source_details - computed: false, optional: true, required: false
  private _modelGroupCloneSourceDetails = new DatascienceModelGroupModelGroupCloneSourceDetailsOutputReference(this, "model_group_clone_source_details");
  public get modelGroupCloneSourceDetails() {
    return this._modelGroupCloneSourceDetails;
  }
  public putModelGroupCloneSourceDetails(value: DatascienceModelGroupModelGroupCloneSourceDetails) {
    this._modelGroupCloneSourceDetails.internalValue = value;
  }
  public resetModelGroupCloneSourceDetails() {
    this._modelGroupCloneSourceDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelGroupCloneSourceDetailsInput() {
    return this._modelGroupCloneSourceDetails.internalValue;
  }

  // model_group_details - computed: false, optional: true, required: false
  private _modelGroupDetails = new DatascienceModelGroupModelGroupDetailsOutputReference(this, "model_group_details");
  public get modelGroupDetails() {
    return this._modelGroupDetails;
  }
  public putModelGroupDetails(value: DatascienceModelGroupModelGroupDetails) {
    this._modelGroupDetails.internalValue = value;
  }
  public resetModelGroupDetails() {
    this._modelGroupDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelGroupDetailsInput() {
    return this._modelGroupDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatascienceModelGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatascienceModelGroupTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      create_type: cdktf.stringToTerraform(this._createType),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      model_group_version_history_id: cdktf.stringToTerraform(this._modelGroupVersionHistoryId),
      project_id: cdktf.stringToTerraform(this._projectId),
      version_label: cdktf.stringToTerraform(this._versionLabel),
      member_model_entries: datascienceModelGroupMemberModelEntriesToTerraform(this._memberModelEntries.internalValue),
      model_group_clone_source_details: datascienceModelGroupModelGroupCloneSourceDetailsToTerraform(this._modelGroupCloneSourceDetails.internalValue),
      model_group_details: datascienceModelGroupModelGroupDetailsToTerraform(this._modelGroupDetails.internalValue),
      timeouts: datascienceModelGroupTimeoutsToTerraform(this._timeouts.internalValue),
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
      create_type: {
        value: cdktf.stringToHclTerraform(this._createType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model_group_version_history_id: {
        value: cdktf.stringToHclTerraform(this._modelGroupVersionHistoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_label: {
        value: cdktf.stringToHclTerraform(this._versionLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_model_entries: {
        value: datascienceModelGroupMemberModelEntriesToHclTerraform(this._memberModelEntries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatascienceModelGroupMemberModelEntriesList",
      },
      model_group_clone_source_details: {
        value: datascienceModelGroupModelGroupCloneSourceDetailsToHclTerraform(this._modelGroupCloneSourceDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatascienceModelGroupModelGroupCloneSourceDetailsList",
      },
      model_group_details: {
        value: datascienceModelGroupModelGroupDetailsToHclTerraform(this._modelGroupDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatascienceModelGroupModelGroupDetailsList",
      },
      timeouts: {
        value: datascienceModelGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatascienceModelGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
