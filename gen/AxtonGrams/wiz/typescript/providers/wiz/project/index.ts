// https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the project is archived/inactive
  *     - Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#archived Project#archived}
  */
  readonly archived?: boolean | cdktf.IResolvable;
  /**
  * The business unit to which the project belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#business_unit Project#business_unit}
  */
  readonly businessUnit?: string;
  /**
  * The project description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#description Project#description}
  */
  readonly description?: string;
  /**
  * Identifiers for the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#identifiers Project#identifiers}
  */
  readonly identifiers?: string[];
  /**
  * Whether the project is a folder.
  *     - Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#is_folder Project#is_folder}
  */
  readonly isFolder?: boolean | cdktf.IResolvable;
  /**
  * The project name to display in Wiz.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#name Project#name}
  */
  readonly name: string;
  /**
  * The parent project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#parent_project_id Project#parent_project_id}
  */
  readonly parentProjectId?: string;
  /**
  * A list of project owner IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#project_owners Project#project_owners}
  */
  readonly projectOwners?: string[];
  /**
  * A list of security champions IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#security_champions Project#security_champions}
  */
  readonly securityChampions?: string[];
  /**
  * cloud_account_link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#cloud_account_link Project#cloud_account_link}
  */
  readonly cloudAccountLink?: ProjectCloudAccountLink[] | cdktf.IResolvable;
  /**
  * cloud_organization_link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#cloud_organization_link Project#cloud_organization_link}
  */
  readonly cloudOrganizationLink?: ProjectCloudOrganizationLink[] | cdktf.IResolvable;
  /**
  * kubernetes_cluster_link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#kubernetes_cluster_link Project#kubernetes_cluster_link}
  */
  readonly kubernetesClusterLink?: ProjectKubernetesClusterLink[] | cdktf.IResolvable;
  /**
  * risk_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#risk_profile Project#risk_profile}
  */
  readonly riskProfile?: ProjectRiskProfile;
}
export interface ProjectCloudAccountLinkResourceTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#key Project#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#value Project#value}
  */
  readonly value: string;
}

export function projectCloudAccountLinkResourceTagsToTerraform(struct?: ProjectCloudAccountLinkResourceTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function projectCloudAccountLinkResourceTagsToHclTerraform(struct?: ProjectCloudAccountLinkResourceTags | cdktf.IResolvable): any {
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

export class ProjectCloudAccountLinkResourceTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectCloudAccountLinkResourceTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ProjectCloudAccountLinkResourceTags | cdktf.IResolvable | undefined) {
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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProjectCloudAccountLinkResourceTagsList extends cdktf.ComplexList {
  public internalValue? : ProjectCloudAccountLinkResourceTags[] | cdktf.IResolvable

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
  public get(index: number): ProjectCloudAccountLinkResourceTagsOutputReference {
    return new ProjectCloudAccountLinkResourceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudAccountLink {
  /**
  * The Wiz internal identifier for the Cloud Account Subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#cloud_account_id Project#cloud_account_id}
  */
  readonly cloudAccountId: string;
  /**
  * The environment.
  *     - Allowed values: 
  *         - PRODUCTION
  *         - STAGING
  *         - DEVELOPMENT
  *         - TESTING
  *         - OTHER
  * 
  *     - Defaults to `PRODUCTION`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#environment Project#environment}
  */
  readonly environment?: string;
  /**
  * Please provide a list of resource group identifiers for filtering by resource groups. `shared` must be true to define resource_groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#resource_groups Project#resource_groups}
  */
  readonly resourceGroups?: string[];
  /**
  * Subscriptions that host a few projects can be marked as ‘shared subscriptions’ and resources can be filtered by tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#shared Project#shared}
  */
  readonly shared?: boolean | cdktf.IResolvable;
  /**
  * resource_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#resource_tags Project#resource_tags}
  */
  readonly resourceTags?: ProjectCloudAccountLinkResourceTags[] | cdktf.IResolvable;
}

export function projectCloudAccountLinkToTerraform(struct?: ProjectCloudAccountLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_account_id: cdktf.stringToTerraform(struct!.cloudAccountId),
    environment: cdktf.stringToTerraform(struct!.environment),
    resource_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceGroups),
    shared: cdktf.booleanToTerraform(struct!.shared),
    resource_tags: cdktf.listMapper(projectCloudAccountLinkResourceTagsToTerraform, true)(struct!.resourceTags),
  }
}


export function projectCloudAccountLinkToHclTerraform(struct?: ProjectCloudAccountLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_account_id: {
      value: cdktf.stringToHclTerraform(struct!.cloudAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment: {
      value: cdktf.stringToHclTerraform(struct!.environment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    shared: {
      value: cdktf.booleanToHclTerraform(struct!.shared),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resource_tags: {
      value: cdktf.listMapperHcl(projectCloudAccountLinkResourceTagsToHclTerraform, true)(struct!.resourceTags),
      isBlock: true,
      type: "set",
      storageClassType: "ProjectCloudAccountLinkResourceTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectCloudAccountLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectCloudAccountLink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudAccountId = this._cloudAccountId;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._resourceGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroups = this._resourceGroups;
    }
    if (this._shared !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared;
    }
    if (this._resourceTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTags = this._resourceTags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudAccountLink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudAccountId = undefined;
      this._environment = undefined;
      this._resourceGroups = undefined;
      this._shared = undefined;
      this._resourceTags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudAccountId = value.cloudAccountId;
      this._environment = value.environment;
      this._resourceGroups = value.resourceGroups;
      this._shared = value.shared;
      this._resourceTags.internalValue = value.resourceTags;
    }
  }

  // cloud_account_id - computed: false, optional: false, required: true
  private _cloudAccountId?: string; 
  public get cloudAccountId() {
    return this.getStringAttribute('cloud_account_id');
  }
  public set cloudAccountId(value: string) {
    this._cloudAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAccountIdInput() {
    return this._cloudAccountId;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // resource_groups - computed: false, optional: true, required: false
  private _resourceGroups?: string[]; 
  public get resourceGroups() {
    return this.getListAttribute('resource_groups');
  }
  public set resourceGroups(value: string[]) {
    this._resourceGroups = value;
  }
  public resetResourceGroups() {
    this._resourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups;
  }

  // shared - computed: false, optional: true, required: false
  private _shared?: boolean | cdktf.IResolvable; 
  public get shared() {
    return this.getBooleanAttribute('shared');
  }
  public set shared(value: boolean | cdktf.IResolvable) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }

  // resource_tags - computed: false, optional: true, required: false
  private _resourceTags = new ProjectCloudAccountLinkResourceTagsList(this, "resource_tags", true);
  public get resourceTags() {
    return this._resourceTags;
  }
  public putResourceTags(value: ProjectCloudAccountLinkResourceTags[] | cdktf.IResolvable) {
    this._resourceTags.internalValue = value;
  }
  public resetResourceTags() {
    this._resourceTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagsInput() {
    return this._resourceTags.internalValue;
  }
}

export class ProjectCloudAccountLinkList extends cdktf.ComplexList {
  public internalValue? : ProjectCloudAccountLink[] | cdktf.IResolvable

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
  public get(index: number): ProjectCloudAccountLinkOutputReference {
    return new ProjectCloudAccountLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudOrganizationLinkResourceTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#key Project#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#value Project#value}
  */
  readonly value: string;
}

export function projectCloudOrganizationLinkResourceTagsToTerraform(struct?: ProjectCloudOrganizationLinkResourceTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function projectCloudOrganizationLinkResourceTagsToHclTerraform(struct?: ProjectCloudOrganizationLinkResourceTags | cdktf.IResolvable): any {
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

export class ProjectCloudOrganizationLinkResourceTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectCloudOrganizationLinkResourceTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ProjectCloudOrganizationLinkResourceTags | cdktf.IResolvable | undefined) {
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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProjectCloudOrganizationLinkResourceTagsList extends cdktf.ComplexList {
  public internalValue? : ProjectCloudOrganizationLinkResourceTags[] | cdktf.IResolvable

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
  public get(index: number): ProjectCloudOrganizationLinkResourceTagsOutputReference {
    return new ProjectCloudOrganizationLinkResourceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudOrganizationLink {
  /**
  * The Wiz internal identifier for the Organizational Unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#cloud_organization Project#cloud_organization}
  */
  readonly cloudOrganization: string;
  /**
  * The environment.
  *     - Allowed values: 
  *         - PRODUCTION
  *         - STAGING
  *         - DEVELOPMENT
  *         - TESTING
  *         - OTHER
  * 
  *     - Defaults to `PRODUCTION`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#environment Project#environment}
  */
  readonly environment?: string;
  /**
  * Please provide a list of strings for filtering by resource groups. `shared` must be true to define resource_groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#resource_groups Project#resource_groups}
  */
  readonly resourceGroups?: string[];
  /**
  * Subscriptions that host a few projects can be marked as ‘shared subscriptions’ and resources can be filtered by tags.
  *     - Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#shared Project#shared}
  */
  readonly shared?: boolean | cdktf.IResolvable;
  /**
  * resource_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#resource_tags Project#resource_tags}
  */
  readonly resourceTags?: ProjectCloudOrganizationLinkResourceTags[] | cdktf.IResolvable;
}

export function projectCloudOrganizationLinkToTerraform(struct?: ProjectCloudOrganizationLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_organization: cdktf.stringToTerraform(struct!.cloudOrganization),
    environment: cdktf.stringToTerraform(struct!.environment),
    resource_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceGroups),
    shared: cdktf.booleanToTerraform(struct!.shared),
    resource_tags: cdktf.listMapper(projectCloudOrganizationLinkResourceTagsToTerraform, true)(struct!.resourceTags),
  }
}


export function projectCloudOrganizationLinkToHclTerraform(struct?: ProjectCloudOrganizationLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_organization: {
      value: cdktf.stringToHclTerraform(struct!.cloudOrganization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment: {
      value: cdktf.stringToHclTerraform(struct!.environment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    shared: {
      value: cdktf.booleanToHclTerraform(struct!.shared),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resource_tags: {
      value: cdktf.listMapperHcl(projectCloudOrganizationLinkResourceTagsToHclTerraform, true)(struct!.resourceTags),
      isBlock: true,
      type: "set",
      storageClassType: "ProjectCloudOrganizationLinkResourceTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectCloudOrganizationLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectCloudOrganizationLink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudOrganization !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudOrganization = this._cloudOrganization;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._resourceGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroups = this._resourceGroups;
    }
    if (this._shared !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared;
    }
    if (this._resourceTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTags = this._resourceTags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudOrganizationLink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudOrganization = undefined;
      this._environment = undefined;
      this._resourceGroups = undefined;
      this._shared = undefined;
      this._resourceTags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudOrganization = value.cloudOrganization;
      this._environment = value.environment;
      this._resourceGroups = value.resourceGroups;
      this._shared = value.shared;
      this._resourceTags.internalValue = value.resourceTags;
    }
  }

  // cloud_organization - computed: false, optional: false, required: true
  private _cloudOrganization?: string; 
  public get cloudOrganization() {
    return this.getStringAttribute('cloud_organization');
  }
  public set cloudOrganization(value: string) {
    this._cloudOrganization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudOrganizationInput() {
    return this._cloudOrganization;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // resource_groups - computed: false, optional: true, required: false
  private _resourceGroups?: string[]; 
  public get resourceGroups() {
    return this.getListAttribute('resource_groups');
  }
  public set resourceGroups(value: string[]) {
    this._resourceGroups = value;
  }
  public resetResourceGroups() {
    this._resourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups;
  }

  // shared - computed: false, optional: true, required: false
  private _shared?: boolean | cdktf.IResolvable; 
  public get shared() {
    return this.getBooleanAttribute('shared');
  }
  public set shared(value: boolean | cdktf.IResolvable) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }

  // resource_tags - computed: false, optional: true, required: false
  private _resourceTags = new ProjectCloudOrganizationLinkResourceTagsList(this, "resource_tags", true);
  public get resourceTags() {
    return this._resourceTags;
  }
  public putResourceTags(value: ProjectCloudOrganizationLinkResourceTags[] | cdktf.IResolvable) {
    this._resourceTags.internalValue = value;
  }
  public resetResourceTags() {
    this._resourceTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagsInput() {
    return this._resourceTags.internalValue;
  }
}

export class ProjectCloudOrganizationLinkList extends cdktf.ComplexList {
  public internalValue? : ProjectCloudOrganizationLink[] | cdktf.IResolvable

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
  public get(index: number): ProjectCloudOrganizationLinkOutputReference {
    return new ProjectCloudOrganizationLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectKubernetesClusterLink {
  /**
  * The environment.
  *     - Allowed values: 
  *         - PRODUCTION
  *         - STAGING
  *         - DEVELOPMENT
  *         - TESTING
  *         - OTHER
  * 
  *     - Defaults to `PRODUCTION`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#environment Project#environment}
  */
  readonly environment?: string;
  /**
  * The Wiz internal identifier for the kubernetes cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#kubernetes_cluster Project#kubernetes_cluster}
  */
  readonly kubernetesCluster: string;
  /**
  * The kubernetes namespaces to link. `shared` must be set to `true` if namespaces are set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#namespaces Project#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Mark the kubernetes cluster as shared, in which case, specific namespaces can be linked. This needs to be set to `true` if `namespaces` are set.
  *     - Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#shared Project#shared}
  */
  readonly shared?: boolean | cdktf.IResolvable;
}

export function projectKubernetesClusterLinkToTerraform(struct?: ProjectKubernetesClusterLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment: cdktf.stringToTerraform(struct!.environment),
    kubernetes_cluster: cdktf.stringToTerraform(struct!.kubernetesCluster),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    shared: cdktf.booleanToTerraform(struct!.shared),
  }
}


export function projectKubernetesClusterLinkToHclTerraform(struct?: ProjectKubernetesClusterLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    environment: {
      value: cdktf.stringToHclTerraform(struct!.environment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubernetes_cluster: {
      value: cdktf.stringToHclTerraform(struct!.kubernetesCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    shared: {
      value: cdktf.booleanToHclTerraform(struct!.shared),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectKubernetesClusterLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectKubernetesClusterLink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._kubernetesCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesCluster = this._kubernetesCluster;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._shared !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectKubernetesClusterLink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._environment = undefined;
      this._kubernetesCluster = undefined;
      this._namespaces = undefined;
      this._shared = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._environment = value.environment;
      this._kubernetesCluster = value.kubernetesCluster;
      this._namespaces = value.namespaces;
      this._shared = value.shared;
    }
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // kubernetes_cluster - computed: false, optional: false, required: true
  private _kubernetesCluster?: string; 
  public get kubernetesCluster() {
    return this.getStringAttribute('kubernetes_cluster');
  }
  public set kubernetesCluster(value: string) {
    this._kubernetesCluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesClusterInput() {
    return this._kubernetesCluster;
  }

  // namespaces - computed: false, optional: true, required: false
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

  // shared - computed: false, optional: true, required: false
  private _shared?: boolean | cdktf.IResolvable; 
  public get shared() {
    return this.getBooleanAttribute('shared');
  }
  public set shared(value: boolean | cdktf.IResolvable) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }
}

export class ProjectKubernetesClusterLinkList extends cdktf.ComplexList {
  public internalValue? : ProjectKubernetesClusterLink[] | cdktf.IResolvable

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
  public get(index: number): ProjectKubernetesClusterLinkOutputReference {
    return new ProjectKubernetesClusterLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectRiskProfile {
  /**
  * Business impact.
  *     - Allowed values: 
  *         - LBI
  *         - MBI
  *         - HBI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#business_impact Project#business_impact}
  */
  readonly businessImpact?: string;
  /**
  * Does the project require authentication?
  *     - Allowed values: 
  *         - YES
  *         - NO
  *         - UNKNOWN
  * 
  *     - Defaults to `UNKNOWN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#has_authentication Project#has_authentication}
  */
  readonly hasAuthentication?: string;
  /**
  * Does the project expose an API?
  *     - Allowed values: 
  *         - YES
  *         - NO
  *         - UNKNOWN
  * 
  *     - Defaults to `UNKNOWN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#has_exposed_api Project#has_exposed_api}
  */
  readonly hasExposedApi?: string;
  /**
  * Is the project under active development?
  *     - Allowed values: 
  *         - YES
  *         - NO
  *         - UNKNOWN
  * 
  *     - Defaults to `UNKNOWN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#is_actively_developed Project#is_actively_developed}
  */
  readonly isActivelyDeveloped?: string;
  /**
  * Is the project customer facing?
  *     - Allowed values: 
  *         - YES
  *         - NO
  *         - UNKNOWN
  * 
  *     - Defaults to `UNKNOWN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#is_customer_facing Project#is_customer_facing}
  */
  readonly isCustomerFacing?: string;
  /**
  * Is the project Internet facing?
  *     - Allowed values: 
  *         - YES
  *         - NO
  *         - UNKNOWN
  * 
  *     - Defaults to `UNKNOWN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#is_internet_facing Project#is_internet_facing}
  */
  readonly isInternetFacing?: string;
  /**
  * Is the project regulated?
  *     - Allowed values: 
  *         - YES
  *         - NO
  *         - UNKNOWN
  * 
  *     - Defaults to `UNKNOWN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#is_regulated Project#is_regulated}
  */
  readonly isRegulated?: string;
  /**
  * Regulatory Standards.
  *     - Allowed values: 
  *         - ISO_20000_1_2011
  *         - ISO_22301
  *         - ISO_27001
  *         - ISO_27017
  *         - ISO_27018
  *         - ISO_27701
  *         - ISO_9001
  *         - SOC
  *         - FEDRAMP
  *         - NIST_800_171
  *         - NIST_CSF
  *         - HIPPA_HITECH
  *         - HITRUST
  *         - PCI_DSS
  *         - SEC_17A_4
  *         - SEC_REGULATION_SCI
  *         - SOX
  *         - GDPR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#regulatory_standards Project#regulatory_standards}
  */
  readonly regulatoryStandards?: string[];
  /**
  * Sensitive Data Types.
  *     - Allowed values: 
  *         - CLASSIFIED
  *         - HEALTH
  *         - PII
  *         - PCI
  *         - FINANCIAL
  *         - CUSTOMER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#sensitive_data_types Project#sensitive_data_types}
  */
  readonly sensitiveDataTypes?: string[];
  /**
  * Does the project store data?
  *     - Allowed values: 
  *         - YES
  *         - NO
  *         - UNKNOWN
  * 
  *     - Defaults to `UNKNOWN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#stores_data Project#stores_data}
  */
  readonly storesData?: string;
}

export function projectRiskProfileToTerraform(struct?: ProjectRiskProfileOutputReference | ProjectRiskProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    business_impact: cdktf.stringToTerraform(struct!.businessImpact),
    has_authentication: cdktf.stringToTerraform(struct!.hasAuthentication),
    has_exposed_api: cdktf.stringToTerraform(struct!.hasExposedApi),
    is_actively_developed: cdktf.stringToTerraform(struct!.isActivelyDeveloped),
    is_customer_facing: cdktf.stringToTerraform(struct!.isCustomerFacing),
    is_internet_facing: cdktf.stringToTerraform(struct!.isInternetFacing),
    is_regulated: cdktf.stringToTerraform(struct!.isRegulated),
    regulatory_standards: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regulatoryStandards),
    sensitive_data_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sensitiveDataTypes),
    stores_data: cdktf.stringToTerraform(struct!.storesData),
  }
}


export function projectRiskProfileToHclTerraform(struct?: ProjectRiskProfileOutputReference | ProjectRiskProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    business_impact: {
      value: cdktf.stringToHclTerraform(struct!.businessImpact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    has_authentication: {
      value: cdktf.stringToHclTerraform(struct!.hasAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    has_exposed_api: {
      value: cdktf.stringToHclTerraform(struct!.hasExposedApi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_actively_developed: {
      value: cdktf.stringToHclTerraform(struct!.isActivelyDeveloped),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_customer_facing: {
      value: cdktf.stringToHclTerraform(struct!.isCustomerFacing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_internet_facing: {
      value: cdktf.stringToHclTerraform(struct!.isInternetFacing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_regulated: {
      value: cdktf.stringToHclTerraform(struct!.isRegulated),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regulatory_standards: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regulatoryStandards),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sensitive_data_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sensitiveDataTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    stores_data: {
      value: cdktf.stringToHclTerraform(struct!.storesData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectRiskProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProjectRiskProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._businessImpact !== undefined) {
      hasAnyValues = true;
      internalValueResult.businessImpact = this._businessImpact;
    }
    if (this._hasAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasAuthentication = this._hasAuthentication;
    }
    if (this._hasExposedApi !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasExposedApi = this._hasExposedApi;
    }
    if (this._isActivelyDeveloped !== undefined) {
      hasAnyValues = true;
      internalValueResult.isActivelyDeveloped = this._isActivelyDeveloped;
    }
    if (this._isCustomerFacing !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCustomerFacing = this._isCustomerFacing;
    }
    if (this._isInternetFacing !== undefined) {
      hasAnyValues = true;
      internalValueResult.isInternetFacing = this._isInternetFacing;
    }
    if (this._isRegulated !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRegulated = this._isRegulated;
    }
    if (this._regulatoryStandards !== undefined) {
      hasAnyValues = true;
      internalValueResult.regulatoryStandards = this._regulatoryStandards;
    }
    if (this._sensitiveDataTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveDataTypes = this._sensitiveDataTypes;
    }
    if (this._storesData !== undefined) {
      hasAnyValues = true;
      internalValueResult.storesData = this._storesData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectRiskProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._businessImpact = undefined;
      this._hasAuthentication = undefined;
      this._hasExposedApi = undefined;
      this._isActivelyDeveloped = undefined;
      this._isCustomerFacing = undefined;
      this._isInternetFacing = undefined;
      this._isRegulated = undefined;
      this._regulatoryStandards = undefined;
      this._sensitiveDataTypes = undefined;
      this._storesData = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._businessImpact = value.businessImpact;
      this._hasAuthentication = value.hasAuthentication;
      this._hasExposedApi = value.hasExposedApi;
      this._isActivelyDeveloped = value.isActivelyDeveloped;
      this._isCustomerFacing = value.isCustomerFacing;
      this._isInternetFacing = value.isInternetFacing;
      this._isRegulated = value.isRegulated;
      this._regulatoryStandards = value.regulatoryStandards;
      this._sensitiveDataTypes = value.sensitiveDataTypes;
      this._storesData = value.storesData;
    }
  }

  // business_impact - computed: false, optional: true, required: false
  private _businessImpact?: string; 
  public get businessImpact() {
    return this.getStringAttribute('business_impact');
  }
  public set businessImpact(value: string) {
    this._businessImpact = value;
  }
  public resetBusinessImpact() {
    this._businessImpact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessImpactInput() {
    return this._businessImpact;
  }

  // has_authentication - computed: false, optional: true, required: false
  private _hasAuthentication?: string; 
  public get hasAuthentication() {
    return this.getStringAttribute('has_authentication');
  }
  public set hasAuthentication(value: string) {
    this._hasAuthentication = value;
  }
  public resetHasAuthentication() {
    this._hasAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasAuthenticationInput() {
    return this._hasAuthentication;
  }

  // has_exposed_api - computed: false, optional: true, required: false
  private _hasExposedApi?: string; 
  public get hasExposedApi() {
    return this.getStringAttribute('has_exposed_api');
  }
  public set hasExposedApi(value: string) {
    this._hasExposedApi = value;
  }
  public resetHasExposedApi() {
    this._hasExposedApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasExposedApiInput() {
    return this._hasExposedApi;
  }

  // is_actively_developed - computed: false, optional: true, required: false
  private _isActivelyDeveloped?: string; 
  public get isActivelyDeveloped() {
    return this.getStringAttribute('is_actively_developed');
  }
  public set isActivelyDeveloped(value: string) {
    this._isActivelyDeveloped = value;
  }
  public resetIsActivelyDeveloped() {
    this._isActivelyDeveloped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isActivelyDevelopedInput() {
    return this._isActivelyDeveloped;
  }

  // is_customer_facing - computed: false, optional: true, required: false
  private _isCustomerFacing?: string; 
  public get isCustomerFacing() {
    return this.getStringAttribute('is_customer_facing');
  }
  public set isCustomerFacing(value: string) {
    this._isCustomerFacing = value;
  }
  public resetIsCustomerFacing() {
    this._isCustomerFacing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCustomerFacingInput() {
    return this._isCustomerFacing;
  }

  // is_internet_facing - computed: false, optional: true, required: false
  private _isInternetFacing?: string; 
  public get isInternetFacing() {
    return this.getStringAttribute('is_internet_facing');
  }
  public set isInternetFacing(value: string) {
    this._isInternetFacing = value;
  }
  public resetIsInternetFacing() {
    this._isInternetFacing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInternetFacingInput() {
    return this._isInternetFacing;
  }

  // is_regulated - computed: false, optional: true, required: false
  private _isRegulated?: string; 
  public get isRegulated() {
    return this.getStringAttribute('is_regulated');
  }
  public set isRegulated(value: string) {
    this._isRegulated = value;
  }
  public resetIsRegulated() {
    this._isRegulated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRegulatedInput() {
    return this._isRegulated;
  }

  // regulatory_standards - computed: false, optional: true, required: false
  private _regulatoryStandards?: string[]; 
  public get regulatoryStandards() {
    return this.getListAttribute('regulatory_standards');
  }
  public set regulatoryStandards(value: string[]) {
    this._regulatoryStandards = value;
  }
  public resetRegulatoryStandards() {
    this._regulatoryStandards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regulatoryStandardsInput() {
    return this._regulatoryStandards;
  }

  // sensitive_data_types - computed: false, optional: true, required: false
  private _sensitiveDataTypes?: string[]; 
  public get sensitiveDataTypes() {
    return this.getListAttribute('sensitive_data_types');
  }
  public set sensitiveDataTypes(value: string[]) {
    this._sensitiveDataTypes = value;
  }
  public resetSensitiveDataTypes() {
    this._sensitiveDataTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveDataTypesInput() {
    return this._sensitiveDataTypes;
  }

  // stores_data - computed: false, optional: true, required: false
  private _storesData?: string; 
  public get storesData() {
    return this.getStringAttribute('stores_data');
  }
  public set storesData(value: string) {
    this._storesData = value;
  }
  public resetStoresData() {
    this._storesData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storesDataInput() {
    return this._storesData;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project wiz_project}
*/
export class Project extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "wiz_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Project to import
  * @param importFromId The id of the existing Project that should be imported. Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Project to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "wiz_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project wiz_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'wiz_project',
      terraformGeneratorMetadata: {
        providerName: 'wiz',
        providerVersion: '1.2.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._archived = config.archived;
    this._businessUnit = config.businessUnit;
    this._description = config.description;
    this._identifiers = config.identifiers;
    this._isFolder = config.isFolder;
    this._name = config.name;
    this._parentProjectId = config.parentProjectId;
    this._projectOwners = config.projectOwners;
    this._securityChampions = config.securityChampions;
    this._cloudAccountLink.internalValue = config.cloudAccountLink;
    this._cloudOrganizationLink.internalValue = config.cloudOrganizationLink;
    this._kubernetesClusterLink.internalValue = config.kubernetesClusterLink;
    this._riskProfile.internalValue = config.riskProfile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // archived - computed: false, optional: true, required: false
  private _archived?: boolean | cdktf.IResolvable; 
  public get archived() {
    return this.getBooleanAttribute('archived');
  }
  public set archived(value: boolean | cdktf.IResolvable) {
    this._archived = value;
  }
  public resetArchived() {
    this._archived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archivedInput() {
    return this._archived;
  }

  // business_unit - computed: false, optional: true, required: false
  private _businessUnit?: string; 
  public get businessUnit() {
    return this.getStringAttribute('business_unit');
  }
  public set businessUnit(value: string) {
    this._businessUnit = value;
  }
  public resetBusinessUnit() {
    this._businessUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessUnitInput() {
    return this._businessUnit;
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

  // identifiers - computed: false, optional: true, required: false
  private _identifiers?: string[]; 
  public get identifiers() {
    return this.getListAttribute('identifiers');
  }
  public set identifiers(value: string[]) {
    this._identifiers = value;
  }
  public resetIdentifiers() {
    this._identifiers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifiersInput() {
    return this._identifiers;
  }

  // is_folder - computed: false, optional: true, required: false
  private _isFolder?: boolean | cdktf.IResolvable; 
  public get isFolder() {
    return this.getBooleanAttribute('is_folder');
  }
  public set isFolder(value: boolean | cdktf.IResolvable) {
    this._isFolder = value;
  }
  public resetIsFolder() {
    this._isFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFolderInput() {
    return this._isFolder;
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

  // parent_project_id - computed: false, optional: true, required: false
  private _parentProjectId?: string; 
  public get parentProjectId() {
    return this.getStringAttribute('parent_project_id');
  }
  public set parentProjectId(value: string) {
    this._parentProjectId = value;
  }
  public resetParentProjectId() {
    this._parentProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentProjectIdInput() {
    return this._parentProjectId;
  }

  // project_owners - computed: false, optional: true, required: false
  private _projectOwners?: string[]; 
  public get projectOwners() {
    return this.getListAttribute('project_owners');
  }
  public set projectOwners(value: string[]) {
    this._projectOwners = value;
  }
  public resetProjectOwners() {
    this._projectOwners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectOwnersInput() {
    return this._projectOwners;
  }

  // security_champions - computed: false, optional: true, required: false
  private _securityChampions?: string[]; 
  public get securityChampions() {
    return this.getListAttribute('security_champions');
  }
  public set securityChampions(value: string[]) {
    this._securityChampions = value;
  }
  public resetSecurityChampions() {
    this._securityChampions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityChampionsInput() {
    return this._securityChampions;
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }

  // cloud_account_link - computed: false, optional: true, required: false
  private _cloudAccountLink = new ProjectCloudAccountLinkList(this, "cloud_account_link", true);
  public get cloudAccountLink() {
    return this._cloudAccountLink;
  }
  public putCloudAccountLink(value: ProjectCloudAccountLink[] | cdktf.IResolvable) {
    this._cloudAccountLink.internalValue = value;
  }
  public resetCloudAccountLink() {
    this._cloudAccountLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAccountLinkInput() {
    return this._cloudAccountLink.internalValue;
  }

  // cloud_organization_link - computed: false, optional: true, required: false
  private _cloudOrganizationLink = new ProjectCloudOrganizationLinkList(this, "cloud_organization_link", true);
  public get cloudOrganizationLink() {
    return this._cloudOrganizationLink;
  }
  public putCloudOrganizationLink(value: ProjectCloudOrganizationLink[] | cdktf.IResolvable) {
    this._cloudOrganizationLink.internalValue = value;
  }
  public resetCloudOrganizationLink() {
    this._cloudOrganizationLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudOrganizationLinkInput() {
    return this._cloudOrganizationLink.internalValue;
  }

  // kubernetes_cluster_link - computed: false, optional: true, required: false
  private _kubernetesClusterLink = new ProjectKubernetesClusterLinkList(this, "kubernetes_cluster_link", true);
  public get kubernetesClusterLink() {
    return this._kubernetesClusterLink;
  }
  public putKubernetesClusterLink(value: ProjectKubernetesClusterLink[] | cdktf.IResolvable) {
    this._kubernetesClusterLink.internalValue = value;
  }
  public resetKubernetesClusterLink() {
    this._kubernetesClusterLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesClusterLinkInput() {
    return this._kubernetesClusterLink.internalValue;
  }

  // risk_profile - computed: false, optional: true, required: false
  private _riskProfile = new ProjectRiskProfileOutputReference(this, "risk_profile");
  public get riskProfile() {
    return this._riskProfile;
  }
  public putRiskProfile(value: ProjectRiskProfile) {
    this._riskProfile.internalValue = value;
  }
  public resetRiskProfile() {
    this._riskProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riskProfileInput() {
    return this._riskProfile.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      archived: cdktf.booleanToTerraform(this._archived),
      business_unit: cdktf.stringToTerraform(this._businessUnit),
      description: cdktf.stringToTerraform(this._description),
      identifiers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._identifiers),
      is_folder: cdktf.booleanToTerraform(this._isFolder),
      name: cdktf.stringToTerraform(this._name),
      parent_project_id: cdktf.stringToTerraform(this._parentProjectId),
      project_owners: cdktf.listMapper(cdktf.stringToTerraform, false)(this._projectOwners),
      security_champions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityChampions),
      cloud_account_link: cdktf.listMapper(projectCloudAccountLinkToTerraform, true)(this._cloudAccountLink.internalValue),
      cloud_organization_link: cdktf.listMapper(projectCloudOrganizationLinkToTerraform, true)(this._cloudOrganizationLink.internalValue),
      kubernetes_cluster_link: cdktf.listMapper(projectKubernetesClusterLinkToTerraform, true)(this._kubernetesClusterLink.internalValue),
      risk_profile: projectRiskProfileToTerraform(this._riskProfile.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      archived: {
        value: cdktf.booleanToHclTerraform(this._archived),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      business_unit: {
        value: cdktf.stringToHclTerraform(this._businessUnit),
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
      identifiers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._identifiers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      is_folder: {
        value: cdktf.booleanToHclTerraform(this._isFolder),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_project_id: {
        value: cdktf.stringToHclTerraform(this._parentProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_owners: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._projectOwners),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      security_champions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityChampions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      cloud_account_link: {
        value: cdktf.listMapperHcl(projectCloudAccountLinkToHclTerraform, true)(this._cloudAccountLink.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProjectCloudAccountLinkList",
      },
      cloud_organization_link: {
        value: cdktf.listMapperHcl(projectCloudOrganizationLinkToHclTerraform, true)(this._cloudOrganizationLink.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProjectCloudOrganizationLinkList",
      },
      kubernetes_cluster_link: {
        value: cdktf.listMapperHcl(projectKubernetesClusterLinkToHclTerraform, true)(this._kubernetesClusterLink.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProjectKubernetesClusterLinkList",
      },
      risk_profile: {
        value: projectRiskProfileToHclTerraform(this._riskProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectRiskProfileList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
