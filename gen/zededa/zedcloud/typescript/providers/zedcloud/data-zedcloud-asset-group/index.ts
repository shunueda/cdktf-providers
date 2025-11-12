// https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/asset_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZedcloudAssetGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Detailed description of the asset group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/asset_group#description DataZedcloudAssetGroup#description}
  */
  readonly description?: string;
  /**
  * User defined name of the asset group, unique across the enterprise. Once asset group is created, name can’t be changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/asset_group#name DataZedcloudAssetGroup#name}
  */
  readonly name?: string;
  /**
  * project id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/asset_group#project_id DataZedcloudAssetGroup#project_id}
  */
  readonly projectId?: string;
  /**
  * User defined title of the asset group. Title can be changed at any time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/asset_group#title DataZedcloudAssetGroup#title}
  */
  readonly title?: string;
  /**
  * asset_ids block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/asset_group#asset_ids DataZedcloudAssetGroup#asset_ids}
  */
  readonly assetIds?: DataZedcloudAssetGroupAssetIds[] | cdktf.IResolvable;
  /**
  * asset_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/asset_group#asset_tags DataZedcloudAssetGroup#asset_tags}
  */
  readonly assetTags?: DataZedcloudAssetGroupAssetTags[] | cdktf.IResolvable;
}
export interface DataZedcloudAssetGroupAssetIds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/asset_group#ids DataZedcloudAssetGroup#ids}
  */
  readonly ids?: string[];
}

export function dataZedcloudAssetGroupAssetIdsToTerraform(struct?: DataZedcloudAssetGroupAssetIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ids),
  }
}


export function dataZedcloudAssetGroupAssetIdsToHclTerraform(struct?: DataZedcloudAssetGroupAssetIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudAssetGroupAssetIdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudAssetGroupAssetIds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ids !== undefined) {
      hasAnyValues = true;
      internalValueResult.ids = this._ids;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudAssetGroupAssetIds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ids = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ids = value.ids;
    }
  }

  // ids - computed: false, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }
}

export class DataZedcloudAssetGroupAssetIdsList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudAssetGroupAssetIds[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudAssetGroupAssetIdsOutputReference {
    return new DataZedcloudAssetGroupAssetIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudAssetGroupAssetTagsAssetTag {
  /**
  * Tags are name/value pairs that enable you to categorize resources. Tag names are case insensitive with max_length 512 and min_length 3. Tag values are case sensitive with max_length 256 and min_length 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/asset_group#tag DataZedcloudAssetGroup#tag}
  */
  readonly tag?: { [key: string]: string };
}

export function dataZedcloudAssetGroupAssetTagsAssetTagToTerraform(struct?: DataZedcloudAssetGroupAssetTagsAssetTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tag),
  }
}


export function dataZedcloudAssetGroupAssetTagsAssetTagToHclTerraform(struct?: DataZedcloudAssetGroupAssetTagsAssetTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tag),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudAssetGroupAssetTagsAssetTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudAssetGroupAssetTagsAssetTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudAssetGroupAssetTagsAssetTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tag = value.tag;
    }
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: { [key: string]: string }; 
  public get tag() {
    return this.getStringMapAttribute('tag');
  }
  public set tag(value: { [key: string]: string }) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class DataZedcloudAssetGroupAssetTagsAssetTagList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudAssetGroupAssetTagsAssetTag[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudAssetGroupAssetTagsAssetTagOutputReference {
    return new DataZedcloudAssetGroupAssetTagsAssetTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudAssetGroupAssetTags {
  /**
  * asset_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/asset_group#asset_tag DataZedcloudAssetGroup#asset_tag}
  */
  readonly assetTag?: DataZedcloudAssetGroupAssetTagsAssetTag[] | cdktf.IResolvable;
}

export function dataZedcloudAssetGroupAssetTagsToTerraform(struct?: DataZedcloudAssetGroupAssetTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asset_tag: cdktf.listMapper(dataZedcloudAssetGroupAssetTagsAssetTagToTerraform, true)(struct!.assetTag),
  }
}


export function dataZedcloudAssetGroupAssetTagsToHclTerraform(struct?: DataZedcloudAssetGroupAssetTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asset_tag: {
      value: cdktf.listMapperHcl(dataZedcloudAssetGroupAssetTagsAssetTagToHclTerraform, true)(struct!.assetTag),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudAssetGroupAssetTagsAssetTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudAssetGroupAssetTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudAssetGroupAssetTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assetTag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assetTag = this._assetTag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudAssetGroupAssetTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assetTag.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assetTag.internalValue = value.assetTag;
    }
  }

  // asset_tag - computed: false, optional: true, required: false
  private _assetTag = new DataZedcloudAssetGroupAssetTagsAssetTagList(this, "asset_tag", false);
  public get assetTag() {
    return this._assetTag;
  }
  public putAssetTag(value: DataZedcloudAssetGroupAssetTagsAssetTag[] | cdktf.IResolvable) {
    this._assetTag.internalValue = value;
  }
  public resetAssetTag() {
    this._assetTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetTagInput() {
    return this._assetTag.internalValue;
  }
}

export class DataZedcloudAssetGroupAssetTagsList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudAssetGroupAssetTags[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudAssetGroupAssetTagsOutputReference {
    return new DataZedcloudAssetGroupAssetTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/asset_group zedcloud_asset_group}
*/
export class DataZedcloudAssetGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zedcloud_asset_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZedcloudAssetGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZedcloudAssetGroup to import
  * @param importFromId The id of the existing DataZedcloudAssetGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/asset_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZedcloudAssetGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zedcloud_asset_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/asset_group zedcloud_asset_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZedcloudAssetGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZedcloudAssetGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zedcloud_asset_group',
      terraformGeneratorMetadata: {
        providerName: 'zedcloud',
        providerVersion: '2.5.0',
        providerVersionConstraint: '2.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._name = config.name;
    this._projectId = config.projectId;
    this._title = config.title;
    this._assetIds.internalValue = config.assetIds;
    this._assetTags.internalValue = config.assetTags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asset_count - computed: true, optional: false, required: false
  public get assetCount() {
    return this.getNumberAttribute('asset_count');
  }

  // description - computed: false, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // asset_ids - computed: false, optional: true, required: false
  private _assetIds = new DataZedcloudAssetGroupAssetIdsList(this, "asset_ids", false);
  public get assetIds() {
    return this._assetIds;
  }
  public putAssetIds(value: DataZedcloudAssetGroupAssetIds[] | cdktf.IResolvable) {
    this._assetIds.internalValue = value;
  }
  public resetAssetIds() {
    this._assetIds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetIdsInput() {
    return this._assetIds.internalValue;
  }

  // asset_tags - computed: false, optional: true, required: false
  private _assetTags = new DataZedcloudAssetGroupAssetTagsList(this, "asset_tags", false);
  public get assetTags() {
    return this._assetTags;
  }
  public putAssetTags(value: DataZedcloudAssetGroupAssetTags[] | cdktf.IResolvable) {
    this._assetTags.internalValue = value;
  }
  public resetAssetTags() {
    this._assetTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetTagsInput() {
    return this._assetTags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      title: cdktf.stringToTerraform(this._title),
      asset_ids: cdktf.listMapper(dataZedcloudAssetGroupAssetIdsToTerraform, true)(this._assetIds.internalValue),
      asset_tags: cdktf.listMapper(dataZedcloudAssetGroupAssetTagsToTerraform, true)(this._assetTags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      asset_ids: {
        value: cdktf.listMapperHcl(dataZedcloudAssetGroupAssetIdsToHclTerraform, true)(this._assetIds.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataZedcloudAssetGroupAssetIdsList",
      },
      asset_tags: {
        value: cdktf.listMapperHcl(dataZedcloudAssetGroupAssetTagsToHclTerraform, true)(this._assetTags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataZedcloudAssetGroupAssetTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
