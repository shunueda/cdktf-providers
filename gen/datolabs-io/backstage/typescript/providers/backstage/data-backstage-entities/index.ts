// https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/entities
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBackstageEntitiesConfig extends cdktf.TerraformMetaArguments {
  /**
  * A complete replica of the `Entity` as it would exist in backstage. Set this to provide a fallback in case the Backstage instance is not functioning, is down, or is unrealiable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/entities#fallback DataBackstageEntities#fallback}
  */
  readonly fallback?: DataBackstageEntitiesFallback;
  /**
  * A set of conditions that can be used to filter entities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/entities#filters DataBackstageEntities#filters}
  */
  readonly filters: string[];
}
export interface DataBackstageEntitiesEntitiesMetadataLinks {
}

export function dataBackstageEntitiesEntitiesMetadataLinksToTerraform(struct?: DataBackstageEntitiesEntitiesMetadataLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBackstageEntitiesEntitiesMetadataLinksToHclTerraform(struct?: DataBackstageEntitiesEntitiesMetadataLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBackstageEntitiesEntitiesMetadataLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBackstageEntitiesEntitiesMetadataLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBackstageEntitiesEntitiesMetadataLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // icon - computed: true, optional: false, required: false
  public get icon() {
    return this.getStringAttribute('icon');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataBackstageEntitiesEntitiesMetadataLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataBackstageEntitiesEntitiesMetadataLinksOutputReference {
    return new DataBackstageEntitiesEntitiesMetadataLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBackstageEntitiesEntitiesMetadata {
}

export function dataBackstageEntitiesEntitiesMetadataToTerraform(struct?: DataBackstageEntitiesEntitiesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBackstageEntitiesEntitiesMetadataToHclTerraform(struct?: DataBackstageEntitiesEntitiesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBackstageEntitiesEntitiesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBackstageEntitiesEntitiesMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBackstageEntitiesEntitiesMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // annotations - computed: true, optional: false, required: false
  private _annotations = new cdktf.StringMap(this, "annotations");
  public get annotations() {
    return this._annotations;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataBackstageEntitiesEntitiesMetadataLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}
export interface DataBackstageEntitiesEntitiesRelationsTarget {
}

export function dataBackstageEntitiesEntitiesRelationsTargetToTerraform(struct?: DataBackstageEntitiesEntitiesRelationsTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBackstageEntitiesEntitiesRelationsTargetToHclTerraform(struct?: DataBackstageEntitiesEntitiesRelationsTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBackstageEntitiesEntitiesRelationsTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBackstageEntitiesEntitiesRelationsTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBackstageEntitiesEntitiesRelationsTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}
export interface DataBackstageEntitiesEntitiesRelations {
}

export function dataBackstageEntitiesEntitiesRelationsToTerraform(struct?: DataBackstageEntitiesEntitiesRelations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBackstageEntitiesEntitiesRelationsToHclTerraform(struct?: DataBackstageEntitiesEntitiesRelations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBackstageEntitiesEntitiesRelationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBackstageEntitiesEntitiesRelations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBackstageEntitiesEntitiesRelations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // target - computed: true, optional: false, required: false
  private _target = new DataBackstageEntitiesEntitiesRelationsTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }

  // target_ref - computed: true, optional: false, required: false
  public get targetRef() {
    return this.getStringAttribute('target_ref');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataBackstageEntitiesEntitiesRelationsList extends cdktf.ComplexList {

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
  public get(index: number): DataBackstageEntitiesEntitiesRelationsOutputReference {
    return new DataBackstageEntitiesEntitiesRelationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBackstageEntitiesEntities {
}

export function dataBackstageEntitiesEntitiesToTerraform(struct?: DataBackstageEntitiesEntities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBackstageEntitiesEntitiesToHclTerraform(struct?: DataBackstageEntitiesEntities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBackstageEntitiesEntitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBackstageEntitiesEntities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBackstageEntitiesEntities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataBackstageEntitiesEntitiesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // relations - computed: true, optional: false, required: false
  private _relations = new DataBackstageEntitiesEntitiesRelationsList(this, "relations", false);
  public get relations() {
    return this._relations;
  }

  // spec - computed: true, optional: false, required: false
  public get spec() {
    return this.getStringAttribute('spec');
  }
}

export class DataBackstageEntitiesEntitiesList extends cdktf.ComplexList {

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
  public get(index: number): DataBackstageEntitiesEntitiesOutputReference {
    return new DataBackstageEntitiesEntitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBackstageEntitiesFallbackEntitiesMetadataLinks {
  /**
  * A key representing a visual icon to be displayed in the UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/entities#icon DataBackstageEntities#icon}
  */
  readonly icon?: string;
  /**
  * A user-friendly display name for the link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/entities#title DataBackstageEntities#title}
  */
  readonly title?: string;
  /**
  * An optional value to categorize links into specific groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/entities#type DataBackstageEntities#type}
  */
  readonly type?: string;
  /**
  * URL in a standard uri format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/entities#url DataBackstageEntities#url}
  */
  readonly url?: string;
}

export function dataBackstageEntitiesFallbackEntitiesMetadataLinksToTerraform(struct?: DataBackstageEntitiesFallbackEntitiesMetadataLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icon: cdktf.stringToTerraform(struct!.icon),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataBackstageEntitiesFallbackEntitiesMetadataLinksToHclTerraform(struct?: DataBackstageEntitiesFallbackEntitiesMetadataLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icon: {
      value: cdktf.stringToHclTerraform(struct!.icon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
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
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBackstageEntitiesFallbackEntitiesMetadataLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBackstageEntitiesFallbackEntitiesMetadataLinks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icon !== undefined) {
      hasAnyValues = true;
      internalValueResult.icon = this._icon;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBackstageEntitiesFallbackEntitiesMetadataLinks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icon = undefined;
      this._title = undefined;
      this._type = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icon = value.icon;
      this._title = value.title;
      this._type = value.type;
      this._url = value.url;
    }
  }

  // icon - computed: false, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
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

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class DataBackstageEntitiesFallbackEntitiesMetadataLinksList extends cdktf.ComplexList {
  public internalValue? : DataBackstageEntitiesFallbackEntitiesMetadataLinks[] | cdktf.IResolvable

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
  public get(index: number): DataBackstageEntitiesFallbackEntitiesMetadataLinksOutputReference {
    return new DataBackstageEntitiesFallbackEntitiesMetadataLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBackstageEntitiesFallbackEntitiesMetadata {
  /**
  * Key/Value pairs of non-identifying auxiliary information attached to entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/entities#annotations DataBackstageEntities#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * A short (typically relatively few words) description of the entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/entities#description DataBackstageEntities#description}
  */
  readonly description?: string;
  /**
  * An opaque string that changes for each update operation to any part of the entity, including metadata. This field can not be set by the user at creation time, and the server will reject an attempt to do so. The field will be populated in read operations.The field can (optionally) be specified when performing update or delete operations, and the server will then reject the operation if it does not match the current stored value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/entities#etag DataBackstageEntities#etag}
  */
  readonly etag?: string;
  /**
  * Key/Value pairs of identifying information attached to the entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/entities#labels DataBackstageEntities#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * A list of external hyperlinks related to the entity. Links can provide additional contextual information that may be located outside of Backstage itself. For example, an admin dashboard or external CMS page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/entities#links DataBackstageEntities#links}
  */
  readonly links?: DataBackstageEntitiesFallbackEntitiesMetadataLinks[] | cdktf.IResolvable;
  /**
  * Name of the entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/entities#name DataBackstageEntities#name}
  */
  readonly name?: string;
  /**
  * Namespace that the entity belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/entities#namespace DataBackstageEntities#namespace}
  */
  readonly namespace?: string;
  /**
  * A list of single-valued strings, to for example classify catalog entities in various ways.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/entities#tags DataBackstageEntities#tags}
  */
  readonly tags?: string[];
  /**
  * A display name of the entity, to be presented in user interfaces instead of the name property, when available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/entities#title DataBackstageEntities#title}
  */
  readonly title?: string;
  /**
  * A globally unique ID for the entity. This field can not be set by the user at creation time, and the server will reject an attempt to do so. The field will be populated in read operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/entities#uid DataBackstageEntities#uid}
  */
  readonly uid?: string;
}

export function dataBackstageEntitiesFallbackEntitiesMetadataToTerraform(struct?: DataBackstageEntitiesFallbackEntitiesMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    description: cdktf.stringToTerraform(struct!.description),
    etag: cdktf.stringToTerraform(struct!.etag),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    links: cdktf.listMapper(dataBackstageEntitiesFallbackEntitiesMetadataLinksToTerraform, false)(struct!.links),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    title: cdktf.stringToTerraform(struct!.title),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataBackstageEntitiesFallbackEntitiesMetadataToHclTerraform(struct?: DataBackstageEntitiesFallbackEntitiesMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
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
    etag: {
      value: cdktf.stringToHclTerraform(struct!.etag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    links: {
      value: cdktf.listMapperHcl(dataBackstageEntitiesFallbackEntitiesMetadataLinksToHclTerraform, false)(struct!.links),
      isBlock: true,
      type: "list",
      storageClassType: "DataBackstageEntitiesFallbackEntitiesMetadataLinksList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBackstageEntitiesFallbackEntitiesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBackstageEntitiesFallbackEntitiesMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._etag !== undefined) {
      hasAnyValues = true;
      internalValueResult.etag = this._etag;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._links?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.links = this._links?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBackstageEntitiesFallbackEntitiesMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._description = undefined;
      this._etag = undefined;
      this._labels = undefined;
      this._links.internalValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tags = undefined;
      this._title = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._description = value.description;
      this._etag = value.etag;
      this._labels = value.labels;
      this._links.internalValue = value.links;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tags = value.tags;
      this._title = value.title;
      this._uid = value.uid;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
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

  // etag - computed: false, optional: true, required: false
  private _etag?: string; 
  public get etag() {
    return this.getStringAttribute('etag');
  }
  public set etag(value: string) {
    this._etag = value;
  }
  public resetEtag() {
    this._etag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etagInput() {
    return this._etag;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // links - computed: false, optional: true, required: false
  private _links = new DataBackstageEntitiesFallbackEntitiesMetadataLinksList(this, "links", false);
  public get links() {
    return this._links;
  }
  public putLinks(value: DataBackstageEntitiesFallbackEntitiesMetadataLinks[] | cdktf.IResolvable) {
    this._links.internalValue = value;
  }
  public resetLinks() {
    this._links.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linksInput() {
    return this._links.internalValue;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
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

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface DataBackstageEntitiesFallbackEntitiesRelationsTarget {
  /**
  * The high level entity type being described.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/entities#kind DataBackstageEntities#kind}
  */
  readonly kind?: string;
  /**
  * Name of the entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/entities#name DataBackstageEntities#name}
  */
  readonly name?: string;
  /**
  * Namespace that the target entity belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/entities#namespace DataBackstageEntities#namespace}
  */
  readonly namespace?: string;
}

export function dataBackstageEntitiesFallbackEntitiesRelationsTargetToTerraform(struct?: DataBackstageEntitiesFallbackEntitiesRelationsTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataBackstageEntitiesFallbackEntitiesRelationsTargetToHclTerraform(struct?: DataBackstageEntitiesFallbackEntitiesRelationsTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBackstageEntitiesFallbackEntitiesRelationsTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBackstageEntitiesFallbackEntitiesRelationsTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBackstageEntitiesFallbackEntitiesRelationsTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataBackstageEntitiesFallbackEntitiesRelations {
  /**
  * The entity of the target of this relation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/entities#target DataBackstageEntities#target}
  */
  readonly target?: DataBackstageEntitiesFallbackEntitiesRelationsTarget;
  /**
  * The entity ref of the target of this relation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/entities#target_ref DataBackstageEntities#target_ref}
  */
  readonly targetRef?: string;
  /**
  * Type of the relation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/entities#type DataBackstageEntities#type}
  */
  readonly type?: string;
}

export function dataBackstageEntitiesFallbackEntitiesRelationsToTerraform(struct?: DataBackstageEntitiesFallbackEntitiesRelations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target: dataBackstageEntitiesFallbackEntitiesRelationsTargetToTerraform(struct!.target),
    target_ref: cdktf.stringToTerraform(struct!.targetRef),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataBackstageEntitiesFallbackEntitiesRelationsToHclTerraform(struct?: DataBackstageEntitiesFallbackEntitiesRelations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target: {
      value: dataBackstageEntitiesFallbackEntitiesRelationsTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBackstageEntitiesFallbackEntitiesRelationsTarget",
    },
    target_ref: {
      value: cdktf.stringToHclTerraform(struct!.targetRef),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBackstageEntitiesFallbackEntitiesRelationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBackstageEntitiesFallbackEntitiesRelations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    if (this._targetRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRef = this._targetRef;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBackstageEntitiesFallbackEntitiesRelations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._target.internalValue = undefined;
      this._targetRef = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._target.internalValue = value.target;
      this._targetRef = value.targetRef;
      this._type = value.type;
    }
  }

  // target - computed: false, optional: true, required: false
  private _target = new DataBackstageEntitiesFallbackEntitiesRelationsTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataBackstageEntitiesFallbackEntitiesRelationsTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // target_ref - computed: false, optional: true, required: false
  private _targetRef?: string; 
  public get targetRef() {
    return this.getStringAttribute('target_ref');
  }
  public set targetRef(value: string) {
    this._targetRef = value;
  }
  public resetTargetRef() {
    this._targetRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefInput() {
    return this._targetRef;
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
}

export class DataBackstageEntitiesFallbackEntitiesRelationsList extends cdktf.ComplexList {
  public internalValue? : DataBackstageEntitiesFallbackEntitiesRelations[] | cdktf.IResolvable

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
  public get(index: number): DataBackstageEntitiesFallbackEntitiesRelationsOutputReference {
    return new DataBackstageEntitiesFallbackEntitiesRelationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBackstageEntitiesFallbackEntities {
  /**
  * Version of specification format for this particular entity that this is written against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/entities#api_version DataBackstageEntities#api_version}
  */
  readonly apiVersion?: string;
  /**
  * The high level entity type being described.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/entities#kind DataBackstageEntities#kind}
  */
  readonly kind?: string;
  /**
  * Metadata fields common to all versions/kinds of entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/entities#metadata DataBackstageEntities#metadata}
  */
  readonly metadata?: DataBackstageEntitiesFallbackEntitiesMetadata;
  /**
  * Relations that this entity has with other entities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/entities#relations DataBackstageEntities#relations}
  */
  readonly relations?: DataBackstageEntitiesFallbackEntitiesRelations[] | cdktf.IResolvable;
  /**
  * The specification data describing the entity itself (as JSON).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/entities#spec DataBackstageEntities#spec}
  */
  readonly spec?: string;
}

export function dataBackstageEntitiesFallbackEntitiesToTerraform(struct?: DataBackstageEntitiesFallbackEntities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    metadata: dataBackstageEntitiesFallbackEntitiesMetadataToTerraform(struct!.metadata),
    relations: cdktf.listMapper(dataBackstageEntitiesFallbackEntitiesRelationsToTerraform, false)(struct!.relations),
    spec: cdktf.stringToTerraform(struct!.spec),
  }
}


export function dataBackstageEntitiesFallbackEntitiesToHclTerraform(struct?: DataBackstageEntitiesFallbackEntities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: dataBackstageEntitiesFallbackEntitiesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBackstageEntitiesFallbackEntitiesMetadata",
    },
    relations: {
      value: cdktf.listMapperHcl(dataBackstageEntitiesFallbackEntitiesRelationsToHclTerraform, false)(struct!.relations),
      isBlock: true,
      type: "list",
      storageClassType: "DataBackstageEntitiesFallbackEntitiesRelationsList",
    },
    spec: {
      value: cdktf.stringToHclTerraform(struct!.spec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBackstageEntitiesFallbackEntitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBackstageEntitiesFallbackEntities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._relations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relations = this._relations?.internalValue;
    }
    if (this._spec !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBackstageEntitiesFallbackEntities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
      this._metadata.internalValue = undefined;
      this._relations.internalValue = undefined;
      this._spec = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._metadata.internalValue = value.metadata;
      this._relations.internalValue = value.relations;
      this._spec = value.spec;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataBackstageEntitiesFallbackEntitiesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataBackstageEntitiesFallbackEntitiesMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // relations - computed: false, optional: true, required: false
  private _relations = new DataBackstageEntitiesFallbackEntitiesRelationsList(this, "relations", false);
  public get relations() {
    return this._relations;
  }
  public putRelations(value: DataBackstageEntitiesFallbackEntitiesRelations[] | cdktf.IResolvable) {
    this._relations.internalValue = value;
  }
  public resetRelations() {
    this._relations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationsInput() {
    return this._relations.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec?: string; 
  public get spec() {
    return this.getStringAttribute('spec');
  }
  public set spec(value: string) {
    this._spec = value;
  }
  public resetSpec() {
    this._spec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec;
  }
}

export class DataBackstageEntitiesFallbackEntitiesList extends cdktf.ComplexList {
  public internalValue? : DataBackstageEntitiesFallbackEntities[] | cdktf.IResolvable

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
  public get(index: number): DataBackstageEntitiesFallbackEntitiesOutputReference {
    return new DataBackstageEntitiesFallbackEntitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBackstageEntitiesFallback {
  /**
  * The specification data describing the entity itself.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/entities#entities DataBackstageEntities#entities}
  */
  readonly entities?: DataBackstageEntitiesFallbackEntities[] | cdktf.IResolvable;
  /**
  * A set of conditions that can be used to filter entities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/entities#filters DataBackstageEntities#filters}
  */
  readonly filters: string[];
  /**
  * A globally unique ID for the entity. This field can not be set by the user at creation time, and the server will reject an attempt to do so. The field will be populated in read operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/entities#id DataBackstageEntities#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function dataBackstageEntitiesFallbackToTerraform(struct?: DataBackstageEntitiesFallback | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entities: cdktf.listMapper(dataBackstageEntitiesFallbackEntitiesToTerraform, false)(struct!.entities),
    filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filters),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataBackstageEntitiesFallbackToHclTerraform(struct?: DataBackstageEntitiesFallback | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entities: {
      value: cdktf.listMapperHcl(dataBackstageEntitiesFallbackEntitiesToHclTerraform, false)(struct!.entities),
      isBlock: true,
      type: "list",
      storageClassType: "DataBackstageEntitiesFallbackEntitiesList",
    },
    filters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBackstageEntitiesFallbackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBackstageEntitiesFallback | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entities = this._entities?.internalValue;
    }
    if (this._filters !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBackstageEntitiesFallback | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entities.internalValue = undefined;
      this._filters = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entities.internalValue = value.entities;
      this._filters = value.filters;
      this._id = value.id;
    }
  }

  // entities - computed: false, optional: true, required: false
  private _entities = new DataBackstageEntitiesFallbackEntitiesList(this, "entities", false);
  public get entities() {
    return this._entities;
  }
  public putEntities(value: DataBackstageEntitiesFallbackEntities[] | cdktf.IResolvable) {
    this._entities.internalValue = value;
  }
  public resetEntities() {
    this._entities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitiesInput() {
    return this._entities.internalValue;
  }

  // filters - computed: false, optional: false, required: true
  private _filters?: string[]; 
  public get filters() {
    return this.getListAttribute('filters');
  }
  public set filters(value: string[]) {
    this._filters = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/entities backstage_entities}
*/
export class DataBackstageEntities extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "backstage_entities";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBackstageEntities resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBackstageEntities to import
  * @param importFromId The id of the existing DataBackstageEntities that should be imported. Refer to the {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/entities#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBackstageEntities to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "backstage_entities", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/entities backstage_entities} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBackstageEntitiesConfig
  */
  public constructor(scope: Construct, id: string, config: DataBackstageEntitiesConfig) {
    super(scope, id, {
      terraformResourceType: 'backstage_entities',
      terraformGeneratorMetadata: {
        providerName: 'backstage',
        providerVersion: '3.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fallback.internalValue = config.fallback;
    this._filters = config.filters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // entities - computed: true, optional: false, required: false
  private _entities = new DataBackstageEntitiesEntitiesList(this, "entities", false);
  public get entities() {
    return this._entities;
  }

  // fallback - computed: false, optional: true, required: false
  private _fallback = new DataBackstageEntitiesFallbackOutputReference(this, "fallback");
  public get fallback() {
    return this._fallback;
  }
  public putFallback(value: DataBackstageEntitiesFallback) {
    this._fallback.internalValue = value;
  }
  public resetFallback() {
    this._fallback.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackInput() {
    return this._fallback.internalValue;
  }

  // filters - computed: false, optional: false, required: true
  private _filters?: string[]; 
  public get filters() {
    return this.getListAttribute('filters');
  }
  public set filters(value: string[]) {
    this._filters = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fallback: dataBackstageEntitiesFallbackToTerraform(this._fallback.internalValue),
      filters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filters),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fallback: {
        value: dataBackstageEntitiesFallbackToHclTerraform(this._fallback.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataBackstageEntitiesFallback",
      },
      filters: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filters),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
