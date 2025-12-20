// https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The context of the Cluster group. Allowed values are `project` or `tenant`. Defaults to `tenant`. If  the `project` context is specified, the project name will sourced from the provider configuration parameter [`project_name`](https://registry.terraform.io/providers/spectrocloud/spectrocloud/latest/docs#schema).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_group#context ClusterGroup#context}
  */
  readonly context?: string;
  /**
  * The description of the cluster. Default value is empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_group#description ClusterGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_group#id ClusterGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the cluster group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_group#name ClusterGroup#name}
  */
  readonly name: string;
  /**
  * A list of tags to be applied to the cluster group. Tags must be in the form of `key:value`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_group#tags ClusterGroup#tags}
  */
  readonly tags?: string[];
  /**
  * cluster_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_group#cluster_profile ClusterGroup#cluster_profile}
  */
  readonly clusterProfile?: ClusterGroupClusterProfile[] | cdktf.IResolvable;
  /**
  * clusters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_group#clusters ClusterGroup#clusters}
  */
  readonly clusters?: ClusterGroupClusters[] | cdktf.IResolvable;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_group#config ClusterGroup#config}
  */
  readonly config: ClusterGroupConfigA;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_group#timeouts ClusterGroup#timeouts}
  */
  readonly timeouts?: ClusterGroupTimeouts;
}
export interface ClusterGroupClusterProfilePackManifest {
  /**
  * The content of the manifest. The content is the YAML content of the manifest. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_group#content ClusterGroup#content}
  */
  readonly content: string;
  /**
  * The name of the manifest. The name must be unique within the pack. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_group#name ClusterGroup#name}
  */
  readonly name: string;
}

export function clusterGroupClusterProfilePackManifestToTerraform(struct?: ClusterGroupClusterProfilePackManifest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function clusterGroupClusterProfilePackManifestToHclTerraform(struct?: ClusterGroupClusterProfilePackManifest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterGroupClusterProfilePackManifestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterGroupClusterProfilePackManifest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterGroupClusterProfilePackManifest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._name = value.name;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
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

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class ClusterGroupClusterProfilePackManifestList extends cdktf.ComplexList {
  public internalValue? : ClusterGroupClusterProfilePackManifest[] | cdktf.IResolvable

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
  public get(index: number): ClusterGroupClusterProfilePackManifestOutputReference {
    return new ClusterGroupClusterProfilePackManifestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterGroupClusterProfilePack {
  /**
  * The name of the pack. The name must be unique within the cluster profile. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_group#name ClusterGroup#name}
  */
  readonly name: string;
  /**
  * The registry name of the pack. The registry name is the human-readable name of the registry. This attribute can be used instead of `registry_uid` for better readability. If `uid` is not provided, this field can be used along with `name` and `tag` to resolve the pack UID internally. Either `registry_uid` or `registry_name` can be specified, but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_group#registry_name ClusterGroup#registry_name}
  */
  readonly registryName?: string;
  /**
  * The registry UID of the pack. The registry UID is the unique identifier of the registry. This attribute is required if there is more than one registry that contains a pack with the same name. If `uid` is not provided, this field is required along with `name` and `tag` to resolve the pack UID internally. Either `registry_uid` or `registry_name` can be specified, but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_group#registry_uid ClusterGroup#registry_uid}
  */
  readonly registryUid?: string;
  /**
  * The tag of the pack. The tag is the version of the pack. This attribute is required if the pack type is `spectro` or `helm`. If `uid` is not provided, this field is required along with `name` and `registry_uid` (or `registry_name`) to resolve the pack UID internally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_group#tag ClusterGroup#tag}
  */
  readonly tag?: string;
  /**
  * The type of the pack. Allowed values are `spectro`, `manifest`, `helm`, or `oci`. The default value is spectro. If using an OCI registry for pack, set the type to `oci`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_group#type ClusterGroup#type}
  */
  readonly type?: string;
  /**
  * The unique identifier of the pack. The value can be looked up using the [`spectrocloud_pack`](https://registry.terraform.io/providers/spectrocloud/spectrocloud/latest/docs/data-sources/pack) data source. This value is required if the pack type is `spectro` and for `helm` if the chart is from a public helm registry. If not provided, all of `name`, `tag`, and `registry_uid` must be specified to resolve the pack UID internally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_group#uid ClusterGroup#uid}
  */
  readonly uid?: string;
  /**
  * The values of the pack. The values are the configuration values of the pack. The values are specified in YAML format. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_group#values ClusterGroup#values}
  */
  readonly values?: string;
  /**
  * manifest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_group#manifest ClusterGroup#manifest}
  */
  readonly manifest?: ClusterGroupClusterProfilePackManifest[] | cdktf.IResolvable;
}

export function clusterGroupClusterProfilePackToTerraform(struct?: ClusterGroupClusterProfilePack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    registry_name: cdktf.stringToTerraform(struct!.registryName),
    registry_uid: cdktf.stringToTerraform(struct!.registryUid),
    tag: cdktf.stringToTerraform(struct!.tag),
    type: cdktf.stringToTerraform(struct!.type),
    uid: cdktf.stringToTerraform(struct!.uid),
    values: cdktf.stringToTerraform(struct!.values),
    manifest: cdktf.listMapper(clusterGroupClusterProfilePackManifestToTerraform, true)(struct!.manifest),
  }
}


export function clusterGroupClusterProfilePackToHclTerraform(struct?: ClusterGroupClusterProfilePack | cdktf.IResolvable): any {
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
    registry_name: {
      value: cdktf.stringToHclTerraform(struct!.registryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry_uid: {
      value: cdktf.stringToHclTerraform(struct!.registryUid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
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
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.stringToHclTerraform(struct!.values),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    manifest: {
      value: cdktf.listMapperHcl(clusterGroupClusterProfilePackManifestToHclTerraform, true)(struct!.manifest),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterGroupClusterProfilePackManifestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterGroupClusterProfilePackOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterGroupClusterProfilePack | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._registryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryName = this._registryName;
    }
    if (this._registryUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryUid = this._registryUid;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._manifest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manifest = this._manifest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterGroupClusterProfilePack | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._registryName = undefined;
      this._registryUid = undefined;
      this._tag = undefined;
      this._type = undefined;
      this._uid = undefined;
      this._values = undefined;
      this._manifest.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._registryName = value.registryName;
      this._registryUid = value.registryUid;
      this._tag = value.tag;
      this._type = value.type;
      this._uid = value.uid;
      this._values = value.values;
      this._manifest.internalValue = value.manifest;
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

  // registry_name - computed: false, optional: true, required: false
  private _registryName?: string; 
  public get registryName() {
    return this.getStringAttribute('registry_name');
  }
  public set registryName(value: string) {
    this._registryName = value;
  }
  public resetRegistryName() {
    this._registryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryNameInput() {
    return this._registryName;
  }

  // registry_uid - computed: false, optional: true, required: false
  private _registryUid?: string; 
  public get registryUid() {
    return this.getStringAttribute('registry_uid');
  }
  public set registryUid(value: string) {
    this._registryUid = value;
  }
  public resetRegistryUid() {
    this._registryUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryUidInput() {
    return this._registryUid;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
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

  // uid - computed: true, optional: true, required: false
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

  // values - computed: false, optional: true, required: false
  private _values?: string; 
  public get values() {
    return this.getStringAttribute('values');
  }
  public set values(value: string) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // manifest - computed: false, optional: true, required: false
  private _manifest = new ClusterGroupClusterProfilePackManifestList(this, "manifest", false);
  public get manifest() {
    return this._manifest;
  }
  public putManifest(value: ClusterGroupClusterProfilePackManifest[] | cdktf.IResolvable) {
    this._manifest.internalValue = value;
  }
  public resetManifest() {
    this._manifest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestInput() {
    return this._manifest.internalValue;
  }
}

export class ClusterGroupClusterProfilePackList extends cdktf.ComplexList {
  public internalValue? : ClusterGroupClusterProfilePack[] | cdktf.IResolvable

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
  public get(index: number): ClusterGroupClusterProfilePackOutputReference {
    return new ClusterGroupClusterProfilePackOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterGroupClusterProfile {
  /**
  * The ID of the cluster profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_group#id ClusterGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A map of cluster profile variables, specified as key-value pairs. For example: `priority = "5"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_group#variables ClusterGroup#variables}
  */
  readonly variables?: { [key: string]: string };
  /**
  * pack block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_group#pack ClusterGroup#pack}
  */
  readonly pack?: ClusterGroupClusterProfilePack[] | cdktf.IResolvable;
}

export function clusterGroupClusterProfileToTerraform(struct?: ClusterGroupClusterProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.variables),
    pack: cdktf.listMapper(clusterGroupClusterProfilePackToTerraform, true)(struct!.pack),
  }
}


export function clusterGroupClusterProfileToHclTerraform(struct?: ClusterGroupClusterProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variables: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.variables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pack: {
      value: cdktf.listMapperHcl(clusterGroupClusterProfilePackToHclTerraform, true)(struct!.pack),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterGroupClusterProfilePackList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterGroupClusterProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterGroupClusterProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._variables !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables;
    }
    if (this._pack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pack = this._pack?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterGroupClusterProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._variables = undefined;
      this._pack.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._variables = value.variables;
      this._pack.internalValue = value.pack;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // variables - computed: false, optional: true, required: false
  private _variables?: { [key: string]: string }; 
  public get variables() {
    return this.getStringMapAttribute('variables');
  }
  public set variables(value: { [key: string]: string }) {
    this._variables = value;
  }
  public resetVariables() {
    this._variables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables;
  }

  // pack - computed: false, optional: true, required: false
  private _pack = new ClusterGroupClusterProfilePackList(this, "pack", false);
  public get pack() {
    return this._pack;
  }
  public putPack(value: ClusterGroupClusterProfilePack[] | cdktf.IResolvable) {
    this._pack.internalValue = value;
  }
  public resetPack() {
    this._pack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packInput() {
    return this._pack.internalValue;
  }
}

export class ClusterGroupClusterProfileList extends cdktf.ComplexList {
  public internalValue? : ClusterGroupClusterProfile[] | cdktf.IResolvable

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
  public get(index: number): ClusterGroupClusterProfileOutputReference {
    return new ClusterGroupClusterProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterGroupClusters {
  /**
  * The UID of the host cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_group#cluster_uid ClusterGroup#cluster_uid}
  */
  readonly clusterUid: string;
  /**
  * The host DNS wildcard for the cluster. i.e. `*.dev` or `*test.com`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_group#host_dns ClusterGroup#host_dns}
  */
  readonly hostDns?: string;
}

export function clusterGroupClustersToTerraform(struct?: ClusterGroupClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_uid: cdktf.stringToTerraform(struct!.clusterUid),
    host_dns: cdktf.stringToTerraform(struct!.hostDns),
  }
}


export function clusterGroupClustersToHclTerraform(struct?: ClusterGroupClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_uid: {
      value: cdktf.stringToHclTerraform(struct!.clusterUid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_dns: {
      value: cdktf.stringToHclTerraform(struct!.hostDns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterGroupClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterGroupClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterUid = this._clusterUid;
    }
    if (this._hostDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostDns = this._hostDns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterGroupClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterUid = undefined;
      this._hostDns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterUid = value.clusterUid;
      this._hostDns = value.hostDns;
    }
  }

  // cluster_uid - computed: false, optional: false, required: true
  private _clusterUid?: string; 
  public get clusterUid() {
    return this.getStringAttribute('cluster_uid');
  }
  public set clusterUid(value: string) {
    this._clusterUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterUidInput() {
    return this._clusterUid;
  }

  // host_dns - computed: false, optional: true, required: false
  private _hostDns?: string; 
  public get hostDns() {
    return this.getStringAttribute('host_dns');
  }
  public set hostDns(value: string) {
    this._hostDns = value;
  }
  public resetHostDns() {
    this._hostDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostDnsInput() {
    return this._hostDns;
  }
}

export class ClusterGroupClustersList extends cdktf.ComplexList {
  public internalValue? : ClusterGroupClusters[] | cdktf.IResolvable

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
  public get(index: number): ClusterGroupClustersOutputReference {
    return new ClusterGroupClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterGroupConfigA {
  /**
  * The CPU limit in millicores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_group#cpu_millicore ClusterGroup#cpu_millicore}
  */
  readonly cpuMillicore?: number;
  /**
  * The host endpoint type. Allowed values are 'Ingress' or 'LoadBalancer'. Defaults to 'Ingress'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_group#host_endpoint_type ClusterGroup#host_endpoint_type}
  */
  readonly hostEndpointType?: string;
  /**
  * The Kubernetes distribution, allowed values are `vcluster-generic`,`k3s` and `cncf_k8s`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_group#k8s_distribution ClusterGroup#k8s_distribution}
  */
  readonly k8SDistribution?: string;
  /**
  * The memory limit in megabytes (MB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_group#memory_in_mb ClusterGroup#memory_in_mb}
  */
  readonly memoryInMb?: number;
  /**
  * The allowed oversubscription percentage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_group#oversubscription_percent ClusterGroup#oversubscription_percent}
  */
  readonly oversubscriptionPercent?: number;
  /**
  * The storage limit in gigabytes (GB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_group#storage_in_gb ClusterGroup#storage_in_gb}
  */
  readonly storageInGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_group#values ClusterGroup#values}
  */
  readonly values?: string;
}

export function clusterGroupConfigAToTerraform(struct?: ClusterGroupConfigAOutputReference | ClusterGroupConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_millicore: cdktf.numberToTerraform(struct!.cpuMillicore),
    host_endpoint_type: cdktf.stringToTerraform(struct!.hostEndpointType),
    k8s_distribution: cdktf.stringToTerraform(struct!.k8SDistribution),
    memory_in_mb: cdktf.numberToTerraform(struct!.memoryInMb),
    oversubscription_percent: cdktf.numberToTerraform(struct!.oversubscriptionPercent),
    storage_in_gb: cdktf.numberToTerraform(struct!.storageInGb),
    values: cdktf.stringToTerraform(struct!.values),
  }
}


export function clusterGroupConfigAToHclTerraform(struct?: ClusterGroupConfigAOutputReference | ClusterGroupConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_millicore: {
      value: cdktf.numberToHclTerraform(struct!.cpuMillicore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host_endpoint_type: {
      value: cdktf.stringToHclTerraform(struct!.hostEndpointType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    k8s_distribution: {
      value: cdktf.stringToHclTerraform(struct!.k8SDistribution),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_in_mb: {
      value: cdktf.numberToHclTerraform(struct!.memoryInMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    oversubscription_percent: {
      value: cdktf.numberToHclTerraform(struct!.oversubscriptionPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_in_gb: {
      value: cdktf.numberToHclTerraform(struct!.storageInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    values: {
      value: cdktf.stringToHclTerraform(struct!.values),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterGroupConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterGroupConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuMillicore !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuMillicore = this._cpuMillicore;
    }
    if (this._hostEndpointType !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostEndpointType = this._hostEndpointType;
    }
    if (this._k8SDistribution !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8SDistribution = this._k8SDistribution;
    }
    if (this._memoryInMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryInMb = this._memoryInMb;
    }
    if (this._oversubscriptionPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversubscriptionPercent = this._oversubscriptionPercent;
    }
    if (this._storageInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageInGb = this._storageInGb;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterGroupConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuMillicore = undefined;
      this._hostEndpointType = undefined;
      this._k8SDistribution = undefined;
      this._memoryInMb = undefined;
      this._oversubscriptionPercent = undefined;
      this._storageInGb = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuMillicore = value.cpuMillicore;
      this._hostEndpointType = value.hostEndpointType;
      this._k8SDistribution = value.k8SDistribution;
      this._memoryInMb = value.memoryInMb;
      this._oversubscriptionPercent = value.oversubscriptionPercent;
      this._storageInGb = value.storageInGb;
      this._values = value.values;
    }
  }

  // cpu_millicore - computed: false, optional: true, required: false
  private _cpuMillicore?: number; 
  public get cpuMillicore() {
    return this.getNumberAttribute('cpu_millicore');
  }
  public set cpuMillicore(value: number) {
    this._cpuMillicore = value;
  }
  public resetCpuMillicore() {
    this._cpuMillicore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuMillicoreInput() {
    return this._cpuMillicore;
  }

  // host_endpoint_type - computed: false, optional: true, required: false
  private _hostEndpointType?: string; 
  public get hostEndpointType() {
    return this.getStringAttribute('host_endpoint_type');
  }
  public set hostEndpointType(value: string) {
    this._hostEndpointType = value;
  }
  public resetHostEndpointType() {
    this._hostEndpointType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostEndpointTypeInput() {
    return this._hostEndpointType;
  }

  // k8s_distribution - computed: false, optional: true, required: false
  private _k8SDistribution?: string; 
  public get k8SDistribution() {
    return this.getStringAttribute('k8s_distribution');
  }
  public set k8SDistribution(value: string) {
    this._k8SDistribution = value;
  }
  public resetK8SDistribution() {
    this._k8SDistribution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SDistributionInput() {
    return this._k8SDistribution;
  }

  // memory_in_mb - computed: false, optional: true, required: false
  private _memoryInMb?: number; 
  public get memoryInMb() {
    return this.getNumberAttribute('memory_in_mb');
  }
  public set memoryInMb(value: number) {
    this._memoryInMb = value;
  }
  public resetMemoryInMb() {
    this._memoryInMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInMbInput() {
    return this._memoryInMb;
  }

  // oversubscription_percent - computed: false, optional: true, required: false
  private _oversubscriptionPercent?: number; 
  public get oversubscriptionPercent() {
    return this.getNumberAttribute('oversubscription_percent');
  }
  public set oversubscriptionPercent(value: number) {
    this._oversubscriptionPercent = value;
  }
  public resetOversubscriptionPercent() {
    this._oversubscriptionPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversubscriptionPercentInput() {
    return this._oversubscriptionPercent;
  }

  // storage_in_gb - computed: false, optional: true, required: false
  private _storageInGb?: number; 
  public get storageInGb() {
    return this.getNumberAttribute('storage_in_gb');
  }
  public set storageInGb(value: number) {
    this._storageInGb = value;
  }
  public resetStorageInGb() {
    this._storageInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInGbInput() {
    return this._storageInGb;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string; 
  public get values() {
    return this.getStringAttribute('values');
  }
  public set values(value: string) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface ClusterGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_group#create ClusterGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_group#delete ClusterGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_group#update ClusterGroup#update}
  */
  readonly update?: string;
}

export function clusterGroupTimeoutsToTerraform(struct?: ClusterGroupTimeouts | cdktf.IResolvable): any {
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


export function clusterGroupTimeoutsToHclTerraform(struct?: ClusterGroupTimeouts | cdktf.IResolvable): any {
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

export class ClusterGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterGroupTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterGroupTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_group spectrocloud_cluster_group}
*/
export class ClusterGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spectrocloud_cluster_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClusterGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClusterGroup to import
  * @param importFromId The id of the existing ClusterGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClusterGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spectrocloud_cluster_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_group spectrocloud_cluster_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'spectrocloud_cluster_group',
      terraformGeneratorMetadata: {
        providerName: 'spectrocloud',
        providerVersion: '0.26.2',
        providerVersionConstraint: '0.26.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._context = config.context;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._tags = config.tags;
    this._clusterProfile.internalValue = config.clusterProfile;
    this._clusters.internalValue = config.clusters;
    this._config.internalValue = config.config;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
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

  // cluster_profile - computed: false, optional: true, required: false
  private _clusterProfile = new ClusterGroupClusterProfileList(this, "cluster_profile", false);
  public get clusterProfile() {
    return this._clusterProfile;
  }
  public putClusterProfile(value: ClusterGroupClusterProfile[] | cdktf.IResolvable) {
    this._clusterProfile.internalValue = value;
  }
  public resetClusterProfile() {
    this._clusterProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterProfileInput() {
    return this._clusterProfile.internalValue;
  }

  // clusters - computed: false, optional: true, required: false
  private _clusters = new ClusterGroupClustersList(this, "clusters", false);
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: ClusterGroupClusters[] | cdktf.IResolvable) {
    this._clusters.internalValue = value;
  }
  public resetClusters() {
    this._clusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters.internalValue;
  }

  // config - computed: false, optional: false, required: true
  private _config = new ClusterGroupConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: ClusterGroupConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ClusterGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ClusterGroupTimeouts) {
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
      context: cdktf.stringToTerraform(this._context),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      cluster_profile: cdktf.listMapper(clusterGroupClusterProfileToTerraform, true)(this._clusterProfile.internalValue),
      clusters: cdktf.listMapper(clusterGroupClustersToTerraform, true)(this._clusters.internalValue),
      config: clusterGroupConfigAToTerraform(this._config.internalValue),
      timeouts: clusterGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      context: {
        value: cdktf.stringToHclTerraform(this._context),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cluster_profile: {
        value: cdktf.listMapperHcl(clusterGroupClusterProfileToHclTerraform, true)(this._clusterProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterGroupClusterProfileList",
      },
      clusters: {
        value: cdktf.listMapperHcl(clusterGroupClustersToHclTerraform, true)(this._clusters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterGroupClustersList",
      },
      config: {
        value: clusterGroupConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterGroupConfigAList",
      },
      timeouts: {
        value: clusterGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
