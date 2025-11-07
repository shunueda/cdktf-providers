// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/media_services_media_assets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciMediaServicesMediaAssetsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/media_services_media_assets#bucket DataOciMediaServicesMediaAssets#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/media_services_media_assets#compartment_id DataOciMediaServicesMediaAssets#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/media_services_media_assets#display_name DataOciMediaServicesMediaAssets#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/media_services_media_assets#distribution_channel_id DataOciMediaServicesMediaAssets#distribution_channel_id}
  */
  readonly distributionChannelId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/media_services_media_assets#id DataOciMediaServicesMediaAssets#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/media_services_media_assets#master_media_asset_id DataOciMediaServicesMediaAssets#master_media_asset_id}
  */
  readonly masterMediaAssetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/media_services_media_assets#media_workflow_job_id DataOciMediaServicesMediaAssets#media_workflow_job_id}
  */
  readonly mediaWorkflowJobId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/media_services_media_assets#object DataOciMediaServicesMediaAssets#object}
  */
  readonly object?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/media_services_media_assets#parent_media_asset_id DataOciMediaServicesMediaAssets#parent_media_asset_id}
  */
  readonly parentMediaAssetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/media_services_media_assets#source_media_workflow_id DataOciMediaServicesMediaAssets#source_media_workflow_id}
  */
  readonly sourceMediaWorkflowId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/media_services_media_assets#source_media_workflow_version DataOciMediaServicesMediaAssets#source_media_workflow_version}
  */
  readonly sourceMediaWorkflowVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/media_services_media_assets#state DataOciMediaServicesMediaAssets#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/media_services_media_assets#type DataOciMediaServicesMediaAssets#type}
  */
  readonly type?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/media_services_media_assets#filter DataOciMediaServicesMediaAssets#filter}
  */
  readonly filter?: DataOciMediaServicesMediaAssetsFilter[] | cdktf.IResolvable;
}
export interface DataOciMediaServicesMediaAssetsMediaAssetCollectionItemsLocks {
}

export function dataOciMediaServicesMediaAssetsMediaAssetCollectionItemsLocksToTerraform(struct?: DataOciMediaServicesMediaAssetsMediaAssetCollectionItemsLocks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMediaServicesMediaAssetsMediaAssetCollectionItemsLocksToHclTerraform(struct?: DataOciMediaServicesMediaAssetsMediaAssetCollectionItemsLocks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMediaServicesMediaAssetsMediaAssetCollectionItemsLocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMediaServicesMediaAssetsMediaAssetCollectionItemsLocks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMediaServicesMediaAssetsMediaAssetCollectionItemsLocks | undefined) {
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

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // related_resource_id - computed: true, optional: false, required: false
  public get relatedResourceId() {
    return this.getStringAttribute('related_resource_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciMediaServicesMediaAssetsMediaAssetCollectionItemsLocksList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMediaServicesMediaAssetsMediaAssetCollectionItemsLocksOutputReference {
    return new DataOciMediaServicesMediaAssetsMediaAssetCollectionItemsLocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciMediaServicesMediaAssetsMediaAssetCollectionItemsMediaAssetTags {
}

export function dataOciMediaServicesMediaAssetsMediaAssetCollectionItemsMediaAssetTagsToTerraform(struct?: DataOciMediaServicesMediaAssetsMediaAssetCollectionItemsMediaAssetTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMediaServicesMediaAssetsMediaAssetCollectionItemsMediaAssetTagsToHclTerraform(struct?: DataOciMediaServicesMediaAssetsMediaAssetCollectionItemsMediaAssetTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMediaServicesMediaAssetsMediaAssetCollectionItemsMediaAssetTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMediaServicesMediaAssetsMediaAssetCollectionItemsMediaAssetTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMediaServicesMediaAssetsMediaAssetCollectionItemsMediaAssetTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciMediaServicesMediaAssetsMediaAssetCollectionItemsMediaAssetTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMediaServicesMediaAssetsMediaAssetCollectionItemsMediaAssetTagsOutputReference {
    return new DataOciMediaServicesMediaAssetsMediaAssetCollectionItemsMediaAssetTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciMediaServicesMediaAssetsMediaAssetCollectionItemsMetadata {
}

export function dataOciMediaServicesMediaAssetsMediaAssetCollectionItemsMetadataToTerraform(struct?: DataOciMediaServicesMediaAssetsMediaAssetCollectionItemsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMediaServicesMediaAssetsMediaAssetCollectionItemsMetadataToHclTerraform(struct?: DataOciMediaServicesMediaAssetsMediaAssetCollectionItemsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMediaServicesMediaAssetsMediaAssetCollectionItemsMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMediaServicesMediaAssetsMediaAssetCollectionItemsMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMediaServicesMediaAssetsMediaAssetCollectionItemsMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metadata - computed: true, optional: false, required: false
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
}

export class DataOciMediaServicesMediaAssetsMediaAssetCollectionItemsMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMediaServicesMediaAssetsMediaAssetCollectionItemsMetadataOutputReference {
    return new DataOciMediaServicesMediaAssetsMediaAssetCollectionItemsMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciMediaServicesMediaAssetsMediaAssetCollectionItems {
}

export function dataOciMediaServicesMediaAssetsMediaAssetCollectionItemsToTerraform(struct?: DataOciMediaServicesMediaAssetsMediaAssetCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMediaServicesMediaAssetsMediaAssetCollectionItemsToHclTerraform(struct?: DataOciMediaServicesMediaAssetsMediaAssetCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMediaServicesMediaAssetsMediaAssetCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMediaServicesMediaAssetsMediaAssetCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMediaServicesMediaAssetsMediaAssetCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
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

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_lock_override - computed: true, optional: false, required: false
  public get isLockOverride() {
    return this.getBooleanAttribute('is_lock_override');
  }

  // locks - computed: true, optional: false, required: false
  private _locks = new DataOciMediaServicesMediaAssetsMediaAssetCollectionItemsLocksList(this, "locks", false);
  public get locks() {
    return this._locks;
  }

  // master_media_asset_id - computed: true, optional: false, required: false
  public get masterMediaAssetId() {
    return this.getStringAttribute('master_media_asset_id');
  }

  // media_asset_tags - computed: true, optional: false, required: false
  private _mediaAssetTags = new DataOciMediaServicesMediaAssetsMediaAssetCollectionItemsMediaAssetTagsList(this, "media_asset_tags", false);
  public get mediaAssetTags() {
    return this._mediaAssetTags;
  }

  // media_workflow_job_id - computed: true, optional: false, required: false
  public get mediaWorkflowJobId() {
    return this.getStringAttribute('media_workflow_job_id');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataOciMediaServicesMediaAssetsMediaAssetCollectionItemsMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }

  // object_etag - computed: true, optional: false, required: false
  public get objectEtag() {
    return this.getStringAttribute('object_etag');
  }

  // parent_media_asset_id - computed: true, optional: false, required: false
  public get parentMediaAssetId() {
    return this.getStringAttribute('parent_media_asset_id');
  }

  // segment_range_end_index - computed: true, optional: false, required: false
  public get segmentRangeEndIndex() {
    return this.getStringAttribute('segment_range_end_index');
  }

  // segment_range_start_index - computed: true, optional: false, required: false
  public get segmentRangeStartIndex() {
    return this.getStringAttribute('segment_range_start_index');
  }

  // source_media_workflow_id - computed: true, optional: false, required: false
  public get sourceMediaWorkflowId() {
    return this.getStringAttribute('source_media_workflow_id');
  }

  // source_media_workflow_version - computed: true, optional: false, required: false
  public get sourceMediaWorkflowVersion() {
    return this.getStringAttribute('source_media_workflow_version');
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciMediaServicesMediaAssetsMediaAssetCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMediaServicesMediaAssetsMediaAssetCollectionItemsOutputReference {
    return new DataOciMediaServicesMediaAssetsMediaAssetCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciMediaServicesMediaAssetsMediaAssetCollection {
}

export function dataOciMediaServicesMediaAssetsMediaAssetCollectionToTerraform(struct?: DataOciMediaServicesMediaAssetsMediaAssetCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMediaServicesMediaAssetsMediaAssetCollectionToHclTerraform(struct?: DataOciMediaServicesMediaAssetsMediaAssetCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMediaServicesMediaAssetsMediaAssetCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMediaServicesMediaAssetsMediaAssetCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMediaServicesMediaAssetsMediaAssetCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciMediaServicesMediaAssetsMediaAssetCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciMediaServicesMediaAssetsMediaAssetCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMediaServicesMediaAssetsMediaAssetCollectionOutputReference {
    return new DataOciMediaServicesMediaAssetsMediaAssetCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciMediaServicesMediaAssetsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/media_services_media_assets#name DataOciMediaServicesMediaAssets#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/media_services_media_assets#regex DataOciMediaServicesMediaAssets#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/media_services_media_assets#values DataOciMediaServicesMediaAssets#values}
  */
  readonly values: string[];
}

export function dataOciMediaServicesMediaAssetsFilterToTerraform(struct?: DataOciMediaServicesMediaAssetsFilter | cdktf.IResolvable): any {
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


export function dataOciMediaServicesMediaAssetsFilterToHclTerraform(struct?: DataOciMediaServicesMediaAssetsFilter | cdktf.IResolvable): any {
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

export class DataOciMediaServicesMediaAssetsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMediaServicesMediaAssetsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciMediaServicesMediaAssetsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciMediaServicesMediaAssetsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciMediaServicesMediaAssetsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciMediaServicesMediaAssetsFilterOutputReference {
    return new DataOciMediaServicesMediaAssetsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/media_services_media_assets oci_media_services_media_assets}
*/
export class DataOciMediaServicesMediaAssets extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_media_services_media_assets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciMediaServicesMediaAssets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciMediaServicesMediaAssets to import
  * @param importFromId The id of the existing DataOciMediaServicesMediaAssets that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/media_services_media_assets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciMediaServicesMediaAssets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_media_services_media_assets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/media_services_media_assets oci_media_services_media_assets} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciMediaServicesMediaAssetsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOciMediaServicesMediaAssetsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_media_services_media_assets',
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
    this._bucket = config.bucket;
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._distributionChannelId = config.distributionChannelId;
    this._id = config.id;
    this._masterMediaAssetId = config.masterMediaAssetId;
    this._mediaWorkflowJobId = config.mediaWorkflowJobId;
    this._object = config.object;
    this._parentMediaAssetId = config.parentMediaAssetId;
    this._sourceMediaWorkflowId = config.sourceMediaWorkflowId;
    this._sourceMediaWorkflowVersion = config.sourceMediaWorkflowVersion;
    this._state = config.state;
    this._type = config.type;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

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

  // distribution_channel_id - computed: false, optional: true, required: false
  private _distributionChannelId?: string; 
  public get distributionChannelId() {
    return this.getStringAttribute('distribution_channel_id');
  }
  public set distributionChannelId(value: string) {
    this._distributionChannelId = value;
  }
  public resetDistributionChannelId() {
    this._distributionChannelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionChannelIdInput() {
    return this._distributionChannelId;
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

  // master_media_asset_id - computed: false, optional: true, required: false
  private _masterMediaAssetId?: string; 
  public get masterMediaAssetId() {
    return this.getStringAttribute('master_media_asset_id');
  }
  public set masterMediaAssetId(value: string) {
    this._masterMediaAssetId = value;
  }
  public resetMasterMediaAssetId() {
    this._masterMediaAssetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterMediaAssetIdInput() {
    return this._masterMediaAssetId;
  }

  // media_asset_collection - computed: true, optional: false, required: false
  private _mediaAssetCollection = new DataOciMediaServicesMediaAssetsMediaAssetCollectionList(this, "media_asset_collection", false);
  public get mediaAssetCollection() {
    return this._mediaAssetCollection;
  }

  // media_workflow_job_id - computed: false, optional: true, required: false
  private _mediaWorkflowJobId?: string; 
  public get mediaWorkflowJobId() {
    return this.getStringAttribute('media_workflow_job_id');
  }
  public set mediaWorkflowJobId(value: string) {
    this._mediaWorkflowJobId = value;
  }
  public resetMediaWorkflowJobId() {
    this._mediaWorkflowJobId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaWorkflowJobIdInput() {
    return this._mediaWorkflowJobId;
  }

  // object - computed: false, optional: true, required: false
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // parent_media_asset_id - computed: false, optional: true, required: false
  private _parentMediaAssetId?: string; 
  public get parentMediaAssetId() {
    return this.getStringAttribute('parent_media_asset_id');
  }
  public set parentMediaAssetId(value: string) {
    this._parentMediaAssetId = value;
  }
  public resetParentMediaAssetId() {
    this._parentMediaAssetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentMediaAssetIdInput() {
    return this._parentMediaAssetId;
  }

  // source_media_workflow_id - computed: false, optional: true, required: false
  private _sourceMediaWorkflowId?: string; 
  public get sourceMediaWorkflowId() {
    return this.getStringAttribute('source_media_workflow_id');
  }
  public set sourceMediaWorkflowId(value: string) {
    this._sourceMediaWorkflowId = value;
  }
  public resetSourceMediaWorkflowId() {
    this._sourceMediaWorkflowId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceMediaWorkflowIdInput() {
    return this._sourceMediaWorkflowId;
  }

  // source_media_workflow_version - computed: false, optional: true, required: false
  private _sourceMediaWorkflowVersion?: string; 
  public get sourceMediaWorkflowVersion() {
    return this.getStringAttribute('source_media_workflow_version');
  }
  public set sourceMediaWorkflowVersion(value: string) {
    this._sourceMediaWorkflowVersion = value;
  }
  public resetSourceMediaWorkflowVersion() {
    this._sourceMediaWorkflowVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceMediaWorkflowVersionInput() {
    return this._sourceMediaWorkflowVersion;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciMediaServicesMediaAssetsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciMediaServicesMediaAssetsFilter[] | cdktf.IResolvable) {
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
      bucket: cdktf.stringToTerraform(this._bucket),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      display_name: cdktf.stringToTerraform(this._displayName),
      distribution_channel_id: cdktf.stringToTerraform(this._distributionChannelId),
      id: cdktf.stringToTerraform(this._id),
      master_media_asset_id: cdktf.stringToTerraform(this._masterMediaAssetId),
      media_workflow_job_id: cdktf.stringToTerraform(this._mediaWorkflowJobId),
      object: cdktf.stringToTerraform(this._object),
      parent_media_asset_id: cdktf.stringToTerraform(this._parentMediaAssetId),
      source_media_workflow_id: cdktf.stringToTerraform(this._sourceMediaWorkflowId),
      source_media_workflow_version: cdktf.stringToTerraform(this._sourceMediaWorkflowVersion),
      state: cdktf.stringToTerraform(this._state),
      type: cdktf.stringToTerraform(this._type),
      filter: cdktf.listMapper(dataOciMediaServicesMediaAssetsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket: {
        value: cdktf.stringToHclTerraform(this._bucket),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distribution_channel_id: {
        value: cdktf.stringToHclTerraform(this._distributionChannelId),
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
      master_media_asset_id: {
        value: cdktf.stringToHclTerraform(this._masterMediaAssetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      media_workflow_job_id: {
        value: cdktf.stringToHclTerraform(this._mediaWorkflowJobId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object: {
        value: cdktf.stringToHclTerraform(this._object),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_media_asset_id: {
        value: cdktf.stringToHclTerraform(this._parentMediaAssetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_media_workflow_id: {
        value: cdktf.stringToHclTerraform(this._sourceMediaWorkflowId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_media_workflow_version: {
        value: cdktf.stringToHclTerraform(this._sourceMediaWorkflowVersion),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciMediaServicesMediaAssetsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciMediaServicesMediaAssetsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
