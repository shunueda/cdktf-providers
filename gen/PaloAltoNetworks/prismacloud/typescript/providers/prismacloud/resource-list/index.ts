// https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/resource_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Resource list description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/resource_list#description ResourceList#description}
  */
  readonly description?: string;
  /**
  * Resource list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/resource_list#name ResourceList#name}
  */
  readonly name: string;
  /**
  * Resource list type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/resource_list#resource_list_type ResourceList#resource_list_type}
  */
  readonly resourceListType: string;
  /**
  * members block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/resource_list#members ResourceList#members}
  */
  readonly members: ResourceListMembers[] | cdktf.IResolvable;
}
export interface ResourceListMembersComputeAccessGroups {
  /**
  * List of pattern strings to define app_id in resource list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/resource_list#app_id ResourceList#app_id}
  */
  readonly appId?: string[];
  /**
  * List of pattern strings to define clusters in resource list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/resource_list#clusters ResourceList#clusters}
  */
  readonly clusters?: string[];
  /**
  * List of pattern strings to define code_repos in resource list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/resource_list#code_repos ResourceList#code_repos}
  */
  readonly codeRepos?: string[];
  /**
  * List of pattern strings to define containers in resource list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/resource_list#containers ResourceList#containers}
  */
  readonly containers?: string[];
  /**
  * List of pattern strings to define functions in resource list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/resource_list#functions ResourceList#functions}
  */
  readonly functions?: string[];
  /**
  * List of pattern strings to define hosts in resource list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/resource_list#hosts ResourceList#hosts}
  */
  readonly hosts?: string[];
  /**
  * List of pattern strings to define images in resource list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/resource_list#images ResourceList#images}
  */
  readonly images?: string[];
  /**
  * List of pattern strings to define labels in resource list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/resource_list#labels ResourceList#labels}
  */
  readonly labels?: string[];
  /**
  * List of pattern strings to define namespaces in resource list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/resource_list#namespaces ResourceList#namespaces}
  */
  readonly namespaces?: string[];
}

export function resourceListMembersComputeAccessGroupsToTerraform(struct?: ResourceListMembersComputeAccessGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.appId),
    clusters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusters),
    code_repos: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.codeRepos),
    containers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.containers),
    functions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.functions),
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    images: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.images),
    labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.labels),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
  }
}


export function resourceListMembersComputeAccessGroupsToHclTerraform(struct?: ResourceListMembersComputeAccessGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.appId),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    clusters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    code_repos: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.codeRepos),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    containers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.containers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    functions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.functions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    images: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.images),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.labels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceListMembersComputeAccessGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceListMembersComputeAccessGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appId = this._appId;
    }
    if (this._clusters !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusters = this._clusters;
    }
    if (this._codeRepos !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRepos = this._codeRepos;
    }
    if (this._containers !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers;
    }
    if (this._functions !== undefined) {
      hasAnyValues = true;
      internalValueResult.functions = this._functions;
    }
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._images !== undefined) {
      hasAnyValues = true;
      internalValueResult.images = this._images;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceListMembersComputeAccessGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appId = undefined;
      this._clusters = undefined;
      this._codeRepos = undefined;
      this._containers = undefined;
      this._functions = undefined;
      this._hosts = undefined;
      this._images = undefined;
      this._labels = undefined;
      this._namespaces = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appId = value.appId;
      this._clusters = value.clusters;
      this._codeRepos = value.codeRepos;
      this._containers = value.containers;
      this._functions = value.functions;
      this._hosts = value.hosts;
      this._images = value.images;
      this._labels = value.labels;
      this._namespaces = value.namespaces;
    }
  }

  // app_id - computed: true, optional: true, required: false
  private _appId?: string[]; 
  public get appId() {
    return this.getListAttribute('app_id');
  }
  public set appId(value: string[]) {
    this._appId = value;
  }
  public resetAppId() {
    this._appId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // clusters - computed: true, optional: true, required: false
  private _clusters?: string[]; 
  public get clusters() {
    return this.getListAttribute('clusters');
  }
  public set clusters(value: string[]) {
    this._clusters = value;
  }
  public resetClusters() {
    this._clusters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters;
  }

  // code_repos - computed: true, optional: true, required: false
  private _codeRepos?: string[]; 
  public get codeRepos() {
    return this.getListAttribute('code_repos');
  }
  public set codeRepos(value: string[]) {
    this._codeRepos = value;
  }
  public resetCodeRepos() {
    this._codeRepos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeReposInput() {
    return this._codeRepos;
  }

  // containers - computed: true, optional: true, required: false
  private _containers?: string[]; 
  public get containers() {
    return this.getListAttribute('containers');
  }
  public set containers(value: string[]) {
    this._containers = value;
  }
  public resetContainers() {
    this._containers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers;
  }

  // functions - computed: true, optional: true, required: false
  private _functions?: string[]; 
  public get functions() {
    return this.getListAttribute('functions');
  }
  public set functions(value: string[]) {
    this._functions = value;
  }
  public resetFunctions() {
    this._functions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionsInput() {
    return this._functions;
  }

  // hosts - computed: true, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // images - computed: true, optional: true, required: false
  private _images?: string[]; 
  public get images() {
    return this.getListAttribute('images');
  }
  public set images(value: string[]) {
    this._images = value;
  }
  public resetImages() {
    this._images = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagesInput() {
    return this._images;
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return this.getListAttribute('labels');
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // namespaces - computed: true, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }
}

export class ResourceListMembersComputeAccessGroupsList extends cdktf.ComplexList {
  public internalValue? : ResourceListMembersComputeAccessGroups[] | cdktf.IResolvable

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
  public get(index: number): ResourceListMembersComputeAccessGroupsOutputReference {
    return new ResourceListMembersComputeAccessGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceListMembersTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/resource_list#key ResourceList#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/resource_list#value ResourceList#value}
  */
  readonly value?: string;
}

export function resourceListMembersTagsToTerraform(struct?: ResourceListMembersTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function resourceListMembersTagsToHclTerraform(struct?: ResourceListMembersTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class ResourceListMembersTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceListMembersTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: ResourceListMembersTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._key = value.key;
      this._value = value.value;
    }
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

  // value - computed: false, optional: true, required: false
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

export class ResourceListMembersTagsList extends cdktf.ComplexList {
  public internalValue? : ResourceListMembersTags[] | cdktf.IResolvable

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
  public get(index: number): ResourceListMembersTagsOutputReference {
    return new ResourceListMembersTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceListMembers {
  /**
  * List of Azure resource groups part of the resource list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/resource_list#azure_resource_groups ResourceList#azure_resource_groups}
  */
  readonly azureResourceGroups?: string[];
  /**
  * compute_access_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/resource_list#compute_access_groups ResourceList#compute_access_groups}
  */
  readonly computeAccessGroups?: ResourceListMembersComputeAccessGroups[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/resource_list#tags ResourceList#tags}
  */
  readonly tags?: ResourceListMembersTags[] | cdktf.IResolvable;
}

export function resourceListMembersToTerraform(struct?: ResourceListMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_resource_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.azureResourceGroups),
    compute_access_groups: cdktf.listMapper(resourceListMembersComputeAccessGroupsToTerraform, true)(struct!.computeAccessGroups),
    tags: cdktf.listMapper(resourceListMembersTagsToTerraform, true)(struct!.tags),
  }
}


export function resourceListMembersToHclTerraform(struct?: ResourceListMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_resource_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.azureResourceGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    compute_access_groups: {
      value: cdktf.listMapperHcl(resourceListMembersComputeAccessGroupsToHclTerraform, true)(struct!.computeAccessGroups),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceListMembersComputeAccessGroupsList",
    },
    tags: {
      value: cdktf.listMapperHcl(resourceListMembersTagsToHclTerraform, true)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceListMembersTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceListMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceListMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureResourceGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureResourceGroups = this._azureResourceGroups;
    }
    if (this._computeAccessGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeAccessGroups = this._computeAccessGroups?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceListMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azureResourceGroups = undefined;
      this._computeAccessGroups.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azureResourceGroups = value.azureResourceGroups;
      this._computeAccessGroups.internalValue = value.computeAccessGroups;
      this._tags.internalValue = value.tags;
    }
  }

  // azure_resource_groups - computed: false, optional: true, required: false
  private _azureResourceGroups?: string[]; 
  public get azureResourceGroups() {
    return this.getListAttribute('azure_resource_groups');
  }
  public set azureResourceGroups(value: string[]) {
    this._azureResourceGroups = value;
  }
  public resetAzureResourceGroups() {
    this._azureResourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureResourceGroupsInput() {
    return this._azureResourceGroups;
  }

  // compute_access_groups - computed: false, optional: true, required: false
  private _computeAccessGroups = new ResourceListMembersComputeAccessGroupsList(this, "compute_access_groups", false);
  public get computeAccessGroups() {
    return this._computeAccessGroups;
  }
  public putComputeAccessGroups(value: ResourceListMembersComputeAccessGroups[] | cdktf.IResolvable) {
    this._computeAccessGroups.internalValue = value;
  }
  public resetComputeAccessGroups() {
    this._computeAccessGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeAccessGroupsInput() {
    return this._computeAccessGroups.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new ResourceListMembersTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ResourceListMembersTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class ResourceListMembersList extends cdktf.ComplexList {
  public internalValue? : ResourceListMembers[] | cdktf.IResolvable

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
  public get(index: number): ResourceListMembersOutputReference {
    return new ResourceListMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/resource_list prismacloud_resource_list}
*/
export class ResourceList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismacloud_resource_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResourceList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResourceList to import
  * @param importFromId The id of the existing ResourceList that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/resource_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResourceList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismacloud_resource_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/resource_list prismacloud_resource_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceListConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceListConfig) {
    super(scope, id, {
      terraformResourceType: 'prismacloud_resource_list',
      terraformGeneratorMetadata: {
        providerName: 'prismacloud',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
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
    this._resourceListType = config.resourceListType;
    this._members.internalValue = config.members;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // last_modified_by - computed: true, optional: false, required: false
  public get lastModifiedBy() {
    return this.getStringAttribute('last_modified_by');
  }

  // last_modified_ts - computed: true, optional: false, required: false
  public get lastModifiedTs() {
    return this.getNumberAttribute('last_modified_ts');
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

  // resource_list_type - computed: false, optional: false, required: true
  private _resourceListType?: string; 
  public get resourceListType() {
    return this.getStringAttribute('resource_list_type');
  }
  public set resourceListType(value: string) {
    this._resourceListType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceListTypeInput() {
    return this._resourceListType;
  }

  // members - computed: false, optional: false, required: true
  private _members = new ResourceListMembersList(this, "members", false);
  public get members() {
    return this._members;
  }
  public putMembers(value: ResourceListMembers[] | cdktf.IResolvable) {
    this._members.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      resource_list_type: cdktf.stringToTerraform(this._resourceListType),
      members: cdktf.listMapper(resourceListMembersToTerraform, true)(this._members.internalValue),
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
      resource_list_type: {
        value: cdktf.stringToHclTerraform(this._resourceListType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      members: {
        value: cdktf.listMapperHcl(resourceListMembersToHclTerraform, true)(this._members.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResourceListMembersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
