// https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBackstageUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * A complete replica of the `User` as it would exist in backstage. Set this to provide a fallback in case the Backstage instance is not functioning, is down, or is unrealiable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/user#fallback DataBackstageUser#fallback}
  */
  readonly fallback?: DataBackstageUserFallback;
  /**
  * Name of the entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/user#name DataBackstageUser#name}
  */
  readonly name: string;
  /**
  * Namespace that the entity belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/user#namespace DataBackstageUser#namespace}
  */
  readonly namespace?: string;
}
export interface DataBackstageUserFallbackMetadataLinks {
  /**
  * A key representing a visual icon to be displayed in the UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/user#icon DataBackstageUser#icon}
  */
  readonly icon?: string;
  /**
  * A user-friendly display name for the link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/user#title DataBackstageUser#title}
  */
  readonly title?: string;
  /**
  * An optional value to categorize links into specific groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/user#type DataBackstageUser#type}
  */
  readonly type?: string;
  /**
  * URL in a standard uri format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/user#url DataBackstageUser#url}
  */
  readonly url?: string;
}

export function dataBackstageUserFallbackMetadataLinksToTerraform(struct?: DataBackstageUserFallbackMetadataLinks | cdktf.IResolvable): any {
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


export function dataBackstageUserFallbackMetadataLinksToHclTerraform(struct?: DataBackstageUserFallbackMetadataLinks | cdktf.IResolvable): any {
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

export class DataBackstageUserFallbackMetadataLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBackstageUserFallbackMetadataLinks | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBackstageUserFallbackMetadataLinks | cdktf.IResolvable | undefined) {
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

export class DataBackstageUserFallbackMetadataLinksList extends cdktf.ComplexList {
  public internalValue? : DataBackstageUserFallbackMetadataLinks[] | cdktf.IResolvable

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
  public get(index: number): DataBackstageUserFallbackMetadataLinksOutputReference {
    return new DataBackstageUserFallbackMetadataLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBackstageUserFallbackMetadata {
  /**
  * Key/Value pairs of non-identifying auxiliary information attached to entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/user#annotations DataBackstageUser#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * A short (typically relatively few words) description of the entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/user#description DataBackstageUser#description}
  */
  readonly description?: string;
  /**
  * An opaque string that changes for each update operation to any part of the entity, including metadata. This field can not be set by the user at creation time, and the server will reject an attempt to do so. The field will be populated in read operations.The field can (optionally) be specified when performing update or delete operations, and the server will then reject the operation if it does not match the current stored value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/user#etag DataBackstageUser#etag}
  */
  readonly etag?: string;
  /**
  * Key/Value pairs of identifying information attached to the entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/user#labels DataBackstageUser#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * A list of external hyperlinks related to the entity. Links can provide additional contextual information that may be located outside of Backstage itself. For example, an admin dashboard or external CMS page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/user#links DataBackstageUser#links}
  */
  readonly links?: DataBackstageUserFallbackMetadataLinks[] | cdktf.IResolvable;
  /**
  * Name of the entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/user#name DataBackstageUser#name}
  */
  readonly name?: string;
  /**
  * Namespace that the entity belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/user#namespace DataBackstageUser#namespace}
  */
  readonly namespace?: string;
  /**
  * A list of single-valued strings, to for example classify catalog entities in various ways.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/user#tags DataBackstageUser#tags}
  */
  readonly tags?: string[];
  /**
  * A display name of the entity, to be presented in user interfaces instead of the name property, when available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/user#title DataBackstageUser#title}
  */
  readonly title?: string;
  /**
  * A globally unique ID for the entity. This field can not be set by the user at creation time, and the server will reject an attempt to do so. The field will be populated in read operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/user#uid DataBackstageUser#uid}
  */
  readonly uid?: string;
}

export function dataBackstageUserFallbackMetadataToTerraform(struct?: DataBackstageUserFallbackMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    description: cdktf.stringToTerraform(struct!.description),
    etag: cdktf.stringToTerraform(struct!.etag),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    links: cdktf.listMapper(dataBackstageUserFallbackMetadataLinksToTerraform, false)(struct!.links),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    title: cdktf.stringToTerraform(struct!.title),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataBackstageUserFallbackMetadataToHclTerraform(struct?: DataBackstageUserFallbackMetadata | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataBackstageUserFallbackMetadataLinksToHclTerraform, false)(struct!.links),
      isBlock: true,
      type: "list",
      storageClassType: "DataBackstageUserFallbackMetadataLinksList",
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

export class DataBackstageUserFallbackMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBackstageUserFallbackMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBackstageUserFallbackMetadata | cdktf.IResolvable | undefined) {
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
  private _links = new DataBackstageUserFallbackMetadataLinksList(this, "links", false);
  public get links() {
    return this._links;
  }
  public putLinks(value: DataBackstageUserFallbackMetadataLinks[] | cdktf.IResolvable) {
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
export interface DataBackstageUserFallbackRelationsTarget {
  /**
  * The high level entity type being described.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/user#kind DataBackstageUser#kind}
  */
  readonly kind?: string;
  /**
  * Name of the entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/user#name DataBackstageUser#name}
  */
  readonly name?: string;
  /**
  * Namespace that the target entity belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/user#namespace DataBackstageUser#namespace}
  */
  readonly namespace?: string;
}

export function dataBackstageUserFallbackRelationsTargetToTerraform(struct?: DataBackstageUserFallbackRelationsTarget | cdktf.IResolvable): any {
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


export function dataBackstageUserFallbackRelationsTargetToHclTerraform(struct?: DataBackstageUserFallbackRelationsTarget | cdktf.IResolvable): any {
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

export class DataBackstageUserFallbackRelationsTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBackstageUserFallbackRelationsTarget | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBackstageUserFallbackRelationsTarget | cdktf.IResolvable | undefined) {
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
export interface DataBackstageUserFallbackRelations {
  /**
  * The entity of the target of this relation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/user#target DataBackstageUser#target}
  */
  readonly target?: DataBackstageUserFallbackRelationsTarget;
  /**
  * The entity ref of the target of this relation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/user#target_ref DataBackstageUser#target_ref}
  */
  readonly targetRef?: string;
  /**
  * Type of the relation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/user#type DataBackstageUser#type}
  */
  readonly type?: string;
}

export function dataBackstageUserFallbackRelationsToTerraform(struct?: DataBackstageUserFallbackRelations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target: dataBackstageUserFallbackRelationsTargetToTerraform(struct!.target),
    target_ref: cdktf.stringToTerraform(struct!.targetRef),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataBackstageUserFallbackRelationsToHclTerraform(struct?: DataBackstageUserFallbackRelations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target: {
      value: dataBackstageUserFallbackRelationsTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBackstageUserFallbackRelationsTarget",
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

export class DataBackstageUserFallbackRelationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBackstageUserFallbackRelations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBackstageUserFallbackRelations | cdktf.IResolvable | undefined) {
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
  private _target = new DataBackstageUserFallbackRelationsTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataBackstageUserFallbackRelationsTarget) {
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

export class DataBackstageUserFallbackRelationsList extends cdktf.ComplexList {
  public internalValue? : DataBackstageUserFallbackRelations[] | cdktf.IResolvable

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
  public get(index: number): DataBackstageUserFallbackRelationsOutputReference {
    return new DataBackstageUserFallbackRelationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBackstageUserFallbackSpecProfile {
  /**
  * A simple display name to present to users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/user#display_name DataBackstageUser#display_name}
  */
  readonly displayName?: string;
  /**
  * Email where this user can be reached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/user#email DataBackstageUser#email}
  */
  readonly email?: string;
  /**
  * A URL of an image that represents this user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/user#picture DataBackstageUser#picture}
  */
  readonly picture?: string;
}

export function dataBackstageUserFallbackSpecProfileToTerraform(struct?: DataBackstageUserFallbackSpecProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    email: cdktf.stringToTerraform(struct!.email),
    picture: cdktf.stringToTerraform(struct!.picture),
  }
}


export function dataBackstageUserFallbackSpecProfileToHclTerraform(struct?: DataBackstageUserFallbackSpecProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    picture: {
      value: cdktf.stringToHclTerraform(struct!.picture),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBackstageUserFallbackSpecProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBackstageUserFallbackSpecProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._picture !== undefined) {
      hasAnyValues = true;
      internalValueResult.picture = this._picture;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBackstageUserFallbackSpecProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._email = undefined;
      this._picture = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._email = value.email;
      this._picture = value.picture;
    }
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

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // picture - computed: false, optional: true, required: false
  private _picture?: string; 
  public get picture() {
    return this.getStringAttribute('picture');
  }
  public set picture(value: string) {
    this._picture = value;
  }
  public resetPicture() {
    this._picture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pictureInput() {
    return this._picture;
  }
}
export interface DataBackstageUserFallbackSpec {
  /**
  * The list of groups that the user is a direct member of (i.e., no transitive memberships are listed here).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/user#member_of DataBackstageUser#member_of}
  */
  readonly memberOf?: string[];
  /**
  * Profile information about the user, mainly for display purposes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/user#profile DataBackstageUser#profile}
  */
  readonly profile?: DataBackstageUserFallbackSpecProfile;
}

export function dataBackstageUserFallbackSpecToTerraform(struct?: DataBackstageUserFallbackSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    member_of: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.memberOf),
    profile: dataBackstageUserFallbackSpecProfileToTerraform(struct!.profile),
  }
}


export function dataBackstageUserFallbackSpecToHclTerraform(struct?: DataBackstageUserFallbackSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    member_of: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.memberOf),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    profile: {
      value: dataBackstageUserFallbackSpecProfileToHclTerraform(struct!.profile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBackstageUserFallbackSpecProfile",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBackstageUserFallbackSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBackstageUserFallbackSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memberOf !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberOf = this._memberOf;
    }
    if (this._profile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBackstageUserFallbackSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._memberOf = undefined;
      this._profile.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._memberOf = value.memberOf;
      this._profile.internalValue = value.profile;
    }
  }

  // member_of - computed: false, optional: true, required: false
  private _memberOf?: string[]; 
  public get memberOf() {
    return this.getListAttribute('member_of');
  }
  public set memberOf(value: string[]) {
    this._memberOf = value;
  }
  public resetMemberOf() {
    this._memberOf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberOfInput() {
    return this._memberOf;
  }

  // profile - computed: false, optional: true, required: false
  private _profile = new DataBackstageUserFallbackSpecProfileOutputReference(this, "profile");
  public get profile() {
    return this._profile;
  }
  public putProfile(value: DataBackstageUserFallbackSpecProfile) {
    this._profile.internalValue = value;
  }
  public resetProfile() {
    this._profile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile.internalValue;
  }
}
export interface DataBackstageUserFallback {
  /**
  * Version of specification format for this particular entity that this is written against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/user#api_version DataBackstageUser#api_version}
  */
  readonly apiVersion?: string;
  /**
  * A globally unique ID for the entity. This field can not be set by the user at creation time, and the server will reject an attempt to do so. The field will be populated in read operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/user#id DataBackstageUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The high level entity type being described.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/user#kind DataBackstageUser#kind}
  */
  readonly kind?: string;
  /**
  * Metadata fields common to all versions/kinds of entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/user#metadata DataBackstageUser#metadata}
  */
  readonly metadata?: DataBackstageUserFallbackMetadata;
  /**
  * Name of the entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/user#name DataBackstageUser#name}
  */
  readonly name: string;
  /**
  * Namespace that the entity belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/user#namespace DataBackstageUser#namespace}
  */
  readonly namespace?: string;
  /**
  * Relations that this entity has with other entities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/user#relations DataBackstageUser#relations}
  */
  readonly relations?: DataBackstageUserFallbackRelations[] | cdktf.IResolvable;
  /**
  * The specification data describing the entity itself.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/user#spec DataBackstageUser#spec}
  */
  readonly spec?: DataBackstageUserFallbackSpec;
}

export function dataBackstageUserFallbackToTerraform(struct?: DataBackstageUserFallback | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    id: cdktf.stringToTerraform(struct!.id),
    kind: cdktf.stringToTerraform(struct!.kind),
    metadata: dataBackstageUserFallbackMetadataToTerraform(struct!.metadata),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    relations: cdktf.listMapper(dataBackstageUserFallbackRelationsToTerraform, false)(struct!.relations),
    spec: dataBackstageUserFallbackSpecToTerraform(struct!.spec),
  }
}


export function dataBackstageUserFallbackToHclTerraform(struct?: DataBackstageUserFallback | cdktf.IResolvable): any {
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
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
      value: dataBackstageUserFallbackMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBackstageUserFallbackMetadata",
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
    relations: {
      value: cdktf.listMapperHcl(dataBackstageUserFallbackRelationsToHclTerraform, false)(struct!.relations),
      isBlock: true,
      type: "list",
      storageClassType: "DataBackstageUserFallbackRelationsList",
    },
    spec: {
      value: dataBackstageUserFallbackSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBackstageUserFallbackSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBackstageUserFallbackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBackstageUserFallback | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._relations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relations = this._relations?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBackstageUserFallback | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._id = undefined;
      this._kind = undefined;
      this._metadata.internalValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._relations.internalValue = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._id = value.id;
      this._kind = value.kind;
      this._metadata.internalValue = value.metadata;
      this._name = value.name;
      this._namespace = value.namespace;
      this._relations.internalValue = value.relations;
      this._spec.internalValue = value.spec;
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
  private _metadata = new DataBackstageUserFallbackMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataBackstageUserFallbackMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
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

  // relations - computed: false, optional: true, required: false
  private _relations = new DataBackstageUserFallbackRelationsList(this, "relations", false);
  public get relations() {
    return this._relations;
  }
  public putRelations(value: DataBackstageUserFallbackRelations[] | cdktf.IResolvable) {
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
  private _spec = new DataBackstageUserFallbackSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataBackstageUserFallbackSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface DataBackstageUserMetadataLinks {
}

export function dataBackstageUserMetadataLinksToTerraform(struct?: DataBackstageUserMetadataLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBackstageUserMetadataLinksToHclTerraform(struct?: DataBackstageUserMetadataLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBackstageUserMetadataLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBackstageUserMetadataLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBackstageUserMetadataLinks | undefined) {
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

export class DataBackstageUserMetadataLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataBackstageUserMetadataLinksOutputReference {
    return new DataBackstageUserMetadataLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBackstageUserMetadata {
}

export function dataBackstageUserMetadataToTerraform(struct?: DataBackstageUserMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBackstageUserMetadataToHclTerraform(struct?: DataBackstageUserMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBackstageUserMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBackstageUserMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBackstageUserMetadata | undefined) {
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
  private _links = new DataBackstageUserMetadataLinksList(this, "links", false);
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
export interface DataBackstageUserRelationsTarget {
}

export function dataBackstageUserRelationsTargetToTerraform(struct?: DataBackstageUserRelationsTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBackstageUserRelationsTargetToHclTerraform(struct?: DataBackstageUserRelationsTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBackstageUserRelationsTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBackstageUserRelationsTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBackstageUserRelationsTarget | undefined) {
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
export interface DataBackstageUserRelations {
}

export function dataBackstageUserRelationsToTerraform(struct?: DataBackstageUserRelations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBackstageUserRelationsToHclTerraform(struct?: DataBackstageUserRelations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBackstageUserRelationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBackstageUserRelations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBackstageUserRelations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // target - computed: true, optional: false, required: false
  private _target = new DataBackstageUserRelationsTargetOutputReference(this, "target");
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

export class DataBackstageUserRelationsList extends cdktf.ComplexList {

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
  public get(index: number): DataBackstageUserRelationsOutputReference {
    return new DataBackstageUserRelationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBackstageUserSpecProfile {
}

export function dataBackstageUserSpecProfileToTerraform(struct?: DataBackstageUserSpecProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBackstageUserSpecProfileToHclTerraform(struct?: DataBackstageUserSpecProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBackstageUserSpecProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBackstageUserSpecProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBackstageUserSpecProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // picture - computed: true, optional: false, required: false
  public get picture() {
    return this.getStringAttribute('picture');
  }
}
export interface DataBackstageUserSpec {
}

export function dataBackstageUserSpecToTerraform(struct?: DataBackstageUserSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBackstageUserSpecToHclTerraform(struct?: DataBackstageUserSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBackstageUserSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBackstageUserSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBackstageUserSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // member_of - computed: true, optional: false, required: false
  public get memberOf() {
    return this.getListAttribute('member_of');
  }

  // profile - computed: true, optional: false, required: false
  private _profile = new DataBackstageUserSpecProfileOutputReference(this, "profile");
  public get profile() {
    return this._profile;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/user backstage_user}
*/
export class DataBackstageUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "backstage_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBackstageUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBackstageUser to import
  * @param importFromId The id of the existing DataBackstageUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBackstageUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "backstage_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datolabs-io/backstage/3.3.0/docs/data-sources/user backstage_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBackstageUserConfig
  */
  public constructor(scope: Construct, id: string, config: DataBackstageUserConfig) {
    super(scope, id, {
      terraformResourceType: 'backstage_user',
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
    this._name = config.name;
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // fallback - computed: false, optional: true, required: false
  private _fallback = new DataBackstageUserFallbackOutputReference(this, "fallback");
  public get fallback() {
    return this._fallback;
  }
  public putFallback(value: DataBackstageUserFallback) {
    this._fallback.internalValue = value;
  }
  public resetFallback() {
    this._fallback.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackInput() {
    return this._fallback.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataBackstageUserMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
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

  // relations - computed: true, optional: false, required: false
  private _relations = new DataBackstageUserRelationsList(this, "relations", false);
  public get relations() {
    return this._relations;
  }

  // spec - computed: true, optional: false, required: false
  private _spec = new DataBackstageUserSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fallback: dataBackstageUserFallbackToTerraform(this._fallback.internalValue),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fallback: {
        value: dataBackstageUserFallbackToHclTerraform(this._fallback.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataBackstageUserFallback",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
