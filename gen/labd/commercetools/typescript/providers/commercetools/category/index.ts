// https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/category
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CategoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/category#description Category#description}
  */
  readonly description?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/category#external_id Category#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/category#id Category#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Category-specific unique identifier. Must be unique across a project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/category#key Category#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/category#meta_description Category#meta_description}
  */
  readonly metaDescription?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/category#meta_keywords Category#meta_keywords}
  */
  readonly metaKeywords?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/category#meta_title Category#meta_title}
  */
  readonly metaTitle?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/category#name Category#name}
  */
  readonly name: { [key: string]: string };
  /**
  * An attribute as base for a custom category order in one level, filled with random value when left empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/category#order_hint Category#order_hint}
  */
  readonly orderHint?: string;
  /**
  * A category that is the parent of this category in the category tree
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/category#parent Category#parent}
  */
  readonly parent?: string;
  /**
  * Human readable identifiers, needs to be unique
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/category#slug Category#slug}
  */
  readonly slug: { [key: string]: string };
  /**
  * assets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/category#assets Category#assets}
  */
  readonly assets?: CategoryAssets[] | cdktf.IResolvable;
  /**
  * custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/category#custom Category#custom}
  */
  readonly custom?: CategoryCustom;
}
export interface CategoryAssetsSourcesDimensions {
  /**
  * The height of the asset source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/category#h Category#h}
  */
  readonly h: number;
  /**
  * The width of the asset source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/category#w Category#w}
  */
  readonly w: number;
}

export function categoryAssetsSourcesDimensionsToTerraform(struct?: CategoryAssetsSourcesDimensionsOutputReference | CategoryAssetsSourcesDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    h: cdktf.numberToTerraform(struct!.h),
    w: cdktf.numberToTerraform(struct!.w),
  }
}


export function categoryAssetsSourcesDimensionsToHclTerraform(struct?: CategoryAssetsSourcesDimensionsOutputReference | CategoryAssetsSourcesDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    h: {
      value: cdktf.numberToHclTerraform(struct!.h),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    w: {
      value: cdktf.numberToHclTerraform(struct!.w),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CategoryAssetsSourcesDimensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CategoryAssetsSourcesDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._h !== undefined) {
      hasAnyValues = true;
      internalValueResult.h = this._h;
    }
    if (this._w !== undefined) {
      hasAnyValues = true;
      internalValueResult.w = this._w;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CategoryAssetsSourcesDimensions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._h = undefined;
      this._w = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._h = value.h;
      this._w = value.w;
    }
  }

  // h - computed: false, optional: false, required: true
  private _h?: number; 
  public get h() {
    return this.getNumberAttribute('h');
  }
  public set h(value: number) {
    this._h = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hInput() {
    return this._h;
  }

  // w - computed: false, optional: false, required: true
  private _w?: number; 
  public get w() {
    return this.getNumberAttribute('w');
  }
  public set w(value: number) {
    this._w = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wInput() {
    return this._w;
  }
}
export interface CategoryAssetsSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/category#content_type Category#content_type}
  */
  readonly contentType?: string;
  /**
  * Unique identifier, must be unique within the Asset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/category#key Category#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/category#uri Category#uri}
  */
  readonly uri: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/category#dimensions Category#dimensions}
  */
  readonly dimensions?: CategoryAssetsSourcesDimensions;
}

export function categoryAssetsSourcesToTerraform(struct?: CategoryAssetsSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    key: cdktf.stringToTerraform(struct!.key),
    uri: cdktf.stringToTerraform(struct!.uri),
    dimensions: categoryAssetsSourcesDimensionsToTerraform(struct!.dimensions),
  }
}


export function categoryAssetsSourcesToHclTerraform(struct?: CategoryAssetsSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
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
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimensions: {
      value: categoryAssetsSourcesDimensionsToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "CategoryAssetsSourcesDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CategoryAssetsSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CategoryAssetsSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CategoryAssetsSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentType = undefined;
      this._key = undefined;
      this._uri = undefined;
      this._dimensions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentType = value.contentType;
      this._key = value.key;
      this._uri = value.uri;
      this._dimensions.internalValue = value.dimensions;
    }
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // key - computed: false, optional: true, required: false
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

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new CategoryAssetsSourcesDimensionsOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: CategoryAssetsSourcesDimensions) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }
}

export class CategoryAssetsSourcesList extends cdktf.ComplexList {
  public internalValue? : CategoryAssetsSources[] | cdktf.IResolvable

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
  public get(index: number): CategoryAssetsSourcesOutputReference {
    return new CategoryAssetsSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CategoryAssets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/category#description Category#description}
  */
  readonly description?: { [key: string]: string };
  /**
  * Optional User-defined identifier for the asset. Asset keys are unique inside their container (in this case the category)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/category#key Category#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/category#name Category#name}
  */
  readonly name: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/category#tags Category#tags}
  */
  readonly tags?: string[];
  /**
  * sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/category#sources Category#sources}
  */
  readonly sources?: CategoryAssetsSources[] | cdktf.IResolvable;
}

export function categoryAssetsToTerraform(struct?: CategoryAssets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.description),
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.name),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    sources: cdktf.listMapper(categoryAssetsSourcesToTerraform, true)(struct!.sources),
  }
}


export function categoryAssetsToHclTerraform(struct?: CategoryAssets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.description),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.name),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sources: {
      value: cdktf.listMapperHcl(categoryAssetsSourcesToHclTerraform, true)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "CategoryAssetsSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CategoryAssetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CategoryAssets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CategoryAssets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._key = undefined;
      this._name = undefined;
      this._tags = undefined;
      this._sources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._key = value.key;
      this._name = value.name;
      this._tags = value.tags;
      this._sources.internalValue = value.sources;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: { [key: string]: string }; 
  public get description() {
    return this.getStringMapAttribute('description');
  }
  public set description(value: { [key: string]: string }) {
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

  // key - computed: false, optional: true, required: false
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

  // name - computed: false, optional: false, required: true
  private _name?: { [key: string]: string }; 
  public get name() {
    return this.getStringMapAttribute('name');
  }
  public set name(value: { [key: string]: string }) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // sources - computed: false, optional: true, required: false
  private _sources = new CategoryAssetsSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: CategoryAssetsSources[] | cdktf.IResolvable) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }
}

export class CategoryAssetsList extends cdktf.ComplexList {
  public internalValue? : CategoryAssets[] | cdktf.IResolvable

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
  public get(index: number): CategoryAssetsOutputReference {
    return new CategoryAssetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CategoryCustom {
  /**
  * Custom fields for this resource. Note that the values need to be provided as JSON encoded strings: `my-value = jsonencode({"key": "value"})`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/category#fields Category#fields}
  */
  readonly fields?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/category#type_id Category#type_id}
  */
  readonly typeId: string;
}

export function categoryCustomToTerraform(struct?: CategoryCustomOutputReference | CategoryCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.fields),
    type_id: cdktf.stringToTerraform(struct!.typeId),
  }
}


export function categoryCustomToHclTerraform(struct?: CategoryCustomOutputReference | CategoryCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.fields),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    type_id: {
      value: cdktf.stringToHclTerraform(struct!.typeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CategoryCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CategoryCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    if (this._typeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeId = this._typeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CategoryCustom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fields = undefined;
      this._typeId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fields = value.fields;
      this._typeId = value.typeId;
    }
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: { [key: string]: string }; 
  public get fields() {
    return this.getStringMapAttribute('fields');
  }
  public set fields(value: { [key: string]: string }) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }

  // type_id - computed: false, optional: false, required: true
  private _typeId?: string; 
  public get typeId() {
    return this.getStringAttribute('type_id');
  }
  public set typeId(value: string) {
    this._typeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeIdInput() {
    return this._typeId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/category commercetools_category}
*/
export class Category extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "commercetools_category";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Category resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Category to import
  * @param importFromId The id of the existing Category that should be imported. Refer to the {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/category#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Category to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "commercetools_category", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/category commercetools_category} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CategoryConfig
  */
  public constructor(scope: Construct, id: string, config: CategoryConfig) {
    super(scope, id, {
      terraformResourceType: 'commercetools_category',
      terraformGeneratorMetadata: {
        providerName: 'commercetools',
        providerVersion: '1.21.1'
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
    this._externalId = config.externalId;
    this._id = config.id;
    this._key = config.key;
    this._metaDescription = config.metaDescription;
    this._metaKeywords = config.metaKeywords;
    this._metaTitle = config.metaTitle;
    this._name = config.name;
    this._orderHint = config.orderHint;
    this._parent = config.parent;
    this._slug = config.slug;
    this._assets.internalValue = config.assets;
    this._custom.internalValue = config.custom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: { [key: string]: string }; 
  public get description() {
    return this.getStringMapAttribute('description');
  }
  public set description(value: { [key: string]: string }) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
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

  // key - computed: false, optional: true, required: false
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

  // meta_description - computed: false, optional: true, required: false
  private _metaDescription?: { [key: string]: string }; 
  public get metaDescription() {
    return this.getStringMapAttribute('meta_description');
  }
  public set metaDescription(value: { [key: string]: string }) {
    this._metaDescription = value;
  }
  public resetMetaDescription() {
    this._metaDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaDescriptionInput() {
    return this._metaDescription;
  }

  // meta_keywords - computed: false, optional: true, required: false
  private _metaKeywords?: { [key: string]: string }; 
  public get metaKeywords() {
    return this.getStringMapAttribute('meta_keywords');
  }
  public set metaKeywords(value: { [key: string]: string }) {
    this._metaKeywords = value;
  }
  public resetMetaKeywords() {
    this._metaKeywords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaKeywordsInput() {
    return this._metaKeywords;
  }

  // meta_title - computed: false, optional: true, required: false
  private _metaTitle?: { [key: string]: string }; 
  public get metaTitle() {
    return this.getStringMapAttribute('meta_title');
  }
  public set metaTitle(value: { [key: string]: string }) {
    this._metaTitle = value;
  }
  public resetMetaTitle() {
    this._metaTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaTitleInput() {
    return this._metaTitle;
  }

  // name - computed: false, optional: false, required: true
  private _name?: { [key: string]: string }; 
  public get name() {
    return this.getStringMapAttribute('name');
  }
  public set name(value: { [key: string]: string }) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // order_hint - computed: false, optional: true, required: false
  private _orderHint?: string; 
  public get orderHint() {
    return this.getStringAttribute('order_hint');
  }
  public set orderHint(value: string) {
    this._orderHint = value;
  }
  public resetOrderHint() {
    this._orderHint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderHintInput() {
    return this._orderHint;
  }

  // parent - computed: false, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // slug - computed: false, optional: false, required: true
  private _slug?: { [key: string]: string }; 
  public get slug() {
    return this.getStringMapAttribute('slug');
  }
  public set slug(value: { [key: string]: string }) {
    this._slug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // assets - computed: false, optional: true, required: false
  private _assets = new CategoryAssetsList(this, "assets", false);
  public get assets() {
    return this._assets;
  }
  public putAssets(value: CategoryAssets[] | cdktf.IResolvable) {
    this._assets.internalValue = value;
  }
  public resetAssets() {
    this._assets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetsInput() {
    return this._assets.internalValue;
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new CategoryCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: CategoryCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.hashMapper(cdktf.stringToTerraform)(this._description),
      external_id: cdktf.stringToTerraform(this._externalId),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      meta_description: cdktf.hashMapper(cdktf.stringToTerraform)(this._metaDescription),
      meta_keywords: cdktf.hashMapper(cdktf.stringToTerraform)(this._metaKeywords),
      meta_title: cdktf.hashMapper(cdktf.stringToTerraform)(this._metaTitle),
      name: cdktf.hashMapper(cdktf.stringToTerraform)(this._name),
      order_hint: cdktf.stringToTerraform(this._orderHint),
      parent: cdktf.stringToTerraform(this._parent),
      slug: cdktf.hashMapper(cdktf.stringToTerraform)(this._slug),
      assets: cdktf.listMapper(categoryAssetsToTerraform, true)(this._assets.internalValue),
      custom: categoryCustomToTerraform(this._custom.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._description),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      external_id: {
        value: cdktf.stringToHclTerraform(this._externalId),
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
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      meta_description: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metaDescription),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      meta_keywords: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metaKeywords),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      meta_title: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metaTitle),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._name),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      order_hint: {
        value: cdktf.stringToHclTerraform(this._orderHint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slug: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._slug),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      assets: {
        value: cdktf.listMapperHcl(categoryAssetsToHclTerraform, true)(this._assets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CategoryAssetsList",
      },
      custom: {
        value: categoryCustomToHclTerraform(this._custom.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CategoryCustomList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
