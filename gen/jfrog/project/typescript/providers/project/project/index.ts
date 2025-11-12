// https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Block deployment of artifacts if storage quota is exceeded.
  * 
  * ~>This setting only applies to self-hosted environment. See [Manage Storage Quotas](https://jfrog.com/help/r/jfrog-platform-administration-documentation/manage-storage-quotas).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/project#block_deployments_on_limit Project#block_deployments_on_limit}
  */
  readonly blockDeploymentsOnLimit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/project#description Project#description}
  */
  readonly description?: string;
  /**
  * Also known as project name on the UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/project#display_name Project#display_name}
  */
  readonly displayName: string;
  /**
  * Alerts will be sent when reaching 75% and 95% of the storage quota. This serves as a notification only and is not a blocker
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/project#email_notification Project#email_notification}
  */
  readonly emailNotification?: boolean | cdktf.IResolvable;
  /**
  * The Project Key is added as a prefix to resources created within a Project. This field is mandatory and supports only 2 - 32 lowercase alphanumeric and hyphen characters. Must begin with a letter. For example: `us1a-test`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/project#key Project#key}
  */
  readonly key: string;
  /**
  * Storage quota in GiB. Must be 1 or larger. Set to -1 for unlimited storage. This is translated to binary bytes for Artifactory API. So for a 1TB quota, this should be set to 1024 (vs 1000) which will translate to 1099511627776 bytes for the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/project#max_storage_in_gibibytes Project#max_storage_in_gibibytes}
  */
  readonly maxStorageInGibibytes?: number;
  /**
  * (Optional) List of existing repo keys to be assigned to the project. If you wish to use the alternate method of setting `project_key` attribute in each `artifactory_*_repository` resource in the `artifactory` provider, you will need to use `lifecycle.ignore_changes` in the `project` resource to avoid state drift.
  * 
  * ```hcl
  * lifecycle {
  * 	ignore_changes = [
  * 		repos
  * 	]
  * }
  * ```
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/project#repos Project#repos}
  */
  readonly repos?: string[];
  /**
  * When set to true, this resource will ignore the `group` attributes and allow users to be managed by `project_group` resource instead. Default to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/project#use_project_group_resource Project#use_project_group_resource}
  */
  readonly useProjectGroupResource?: boolean | cdktf.IResolvable;
  /**
  * When set to true, this resource will ignore the `repos` attributes and allow repository to be managed by `project_repository` resource instead. Default to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/project#use_project_repository_resource Project#use_project_repository_resource}
  */
  readonly useProjectRepositoryResource?: boolean | cdktf.IResolvable;
  /**
  * When set to true, this resource will ignore the `roles` attributes and allow roles to be managed by `project_role` resource instead. Default to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/project#use_project_role_resource Project#use_project_role_resource}
  */
  readonly useProjectRoleResource?: boolean | cdktf.IResolvable;
  /**
  * When set to true, this resource will ignore the `member` attributes and allow users to be managed by `project_user` resource instead. Default to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/project#use_project_user_resource Project#use_project_user_resource}
  */
  readonly useProjectUserResource?: boolean | cdktf.IResolvable;
  /**
  * admin_privileges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/project#admin_privileges Project#admin_privileges}
  */
  readonly adminPrivileges?: ProjectAdminPrivileges[] | cdktf.IResolvable;
  /**
  * group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/project#group Project#group}
  */
  readonly group?: ProjectGroup[] | cdktf.IResolvable;
  /**
  * member block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/project#member Project#member}
  */
  readonly member?: ProjectMember[] | cdktf.IResolvable;
  /**
  * role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/project#role Project#role}
  */
  readonly role?: ProjectRole[] | cdktf.IResolvable;
}
export interface ProjectAdminPrivileges {
  /**
  * Enables a project admin to define the resources to be indexed by Xray
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/project#index_resources Project#index_resources}
  */
  readonly indexResources: boolean | cdktf.IResolvable;
  /**
  * Allows the Project Admin to manage Platform users/groups as project members with different roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/project#manage_members Project#manage_members}
  */
  readonly manageMembers: boolean | cdktf.IResolvable;
  /**
  * Allows the Project Admin to manage resources - repositories, builds and Pipelines resources on the project level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/project#manage_resources Project#manage_resources}
  */
  readonly manageResources: boolean | cdktf.IResolvable;
}

export function projectAdminPrivilegesToTerraform(struct?: ProjectAdminPrivileges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index_resources: cdktf.booleanToTerraform(struct!.indexResources),
    manage_members: cdktf.booleanToTerraform(struct!.manageMembers),
    manage_resources: cdktf.booleanToTerraform(struct!.manageResources),
  }
}


export function projectAdminPrivilegesToHclTerraform(struct?: ProjectAdminPrivileges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index_resources: {
      value: cdktf.booleanToHclTerraform(struct!.indexResources),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    manage_members: {
      value: cdktf.booleanToHclTerraform(struct!.manageMembers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    manage_resources: {
      value: cdktf.booleanToHclTerraform(struct!.manageResources),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectAdminPrivilegesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectAdminPrivileges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indexResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexResources = this._indexResources;
    }
    if (this._manageMembers !== undefined) {
      hasAnyValues = true;
      internalValueResult.manageMembers = this._manageMembers;
    }
    if (this._manageResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.manageResources = this._manageResources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectAdminPrivileges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._indexResources = undefined;
      this._manageMembers = undefined;
      this._manageResources = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._indexResources = value.indexResources;
      this._manageMembers = value.manageMembers;
      this._manageResources = value.manageResources;
    }
  }

  // index_resources - computed: false, optional: false, required: true
  private _indexResources?: boolean | cdktf.IResolvable; 
  public get indexResources() {
    return this.getBooleanAttribute('index_resources');
  }
  public set indexResources(value: boolean | cdktf.IResolvable) {
    this._indexResources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexResourcesInput() {
    return this._indexResources;
  }

  // manage_members - computed: false, optional: false, required: true
  private _manageMembers?: boolean | cdktf.IResolvable; 
  public get manageMembers() {
    return this.getBooleanAttribute('manage_members');
  }
  public set manageMembers(value: boolean | cdktf.IResolvable) {
    this._manageMembers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get manageMembersInput() {
    return this._manageMembers;
  }

  // manage_resources - computed: false, optional: false, required: true
  private _manageResources?: boolean | cdktf.IResolvable; 
  public get manageResources() {
    return this.getBooleanAttribute('manage_resources');
  }
  public set manageResources(value: boolean | cdktf.IResolvable) {
    this._manageResources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get manageResourcesInput() {
    return this._manageResources;
  }
}

export class ProjectAdminPrivilegesList extends cdktf.ComplexList {
  public internalValue? : ProjectAdminPrivileges[] | cdktf.IResolvable

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
  public get(index: number): ProjectAdminPrivilegesOutputReference {
    return new ProjectAdminPrivilegesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectGroup {
  /**
  * Must be existing Artifactory group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/project#name Project#name}
  */
  readonly name: string;
  /**
  * List of pre-defined Project or custom roles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/project#roles Project#roles}
  */
  readonly roles: string[];
}

export function projectGroupToTerraform(struct?: ProjectGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
  }
}


export function projectGroupToHclTerraform(struct?: ProjectGroup | cdktf.IResolvable): any {
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
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._roles = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._roles = value.roles;
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

  // roles - computed: false, optional: false, required: true
  private _roles?: string[]; 
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }
}

export class ProjectGroupList extends cdktf.ComplexList {
  public internalValue? : ProjectGroup[] | cdktf.IResolvable

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
  public get(index: number): ProjectGroupOutputReference {
    return new ProjectGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectMember {
  /**
  * Must be existing Artifactory user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/project#name Project#name}
  */
  readonly name: string;
  /**
  * List of pre-defined Project or custom roles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/project#roles Project#roles}
  */
  readonly roles: string[];
}

export function projectMemberToTerraform(struct?: ProjectMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
  }
}


export function projectMemberToHclTerraform(struct?: ProjectMember | cdktf.IResolvable): any {
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
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectMemberOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectMember | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectMember | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._roles = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._roles = value.roles;
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

  // roles - computed: false, optional: false, required: true
  private _roles?: string[]; 
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }
}

export class ProjectMemberList extends cdktf.ComplexList {
  public internalValue? : ProjectMember[] | cdktf.IResolvable

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
  public get(index: number): ProjectMemberOutputReference {
    return new ProjectMemberOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectRole {
  /**
  * List of pre-defined actions (READ_REPOSITORY, ANNOTATE_REPOSITORY, DEPLOY_CACHE_REPOSITORY, DELETE_OVERWRITE_REPOSITORY, MANAGE_XRAY_MD_REPOSITORY, READ_RELEASE_BUNDLE, ANNOTATE_RELEASE_BUNDLE, CREATE_RELEASE_BUNDLE, DISTRIBUTE_RELEASE_BUNDLE, DELETE_RELEASE_BUNDLE, MANAGE_XRAY_MD_RELEASE_BUNDLE, READ_BUILD, ANNOTATE_BUILD, DEPLOY_BUILD, DELETE_BUILD, MANAGE_XRAY_MD_BUILD, READ_SOURCES_PIPELINE, TRIGGER_PIPELINE, READ_INTEGRATIONS_PIPELINE, READ_POOLS_PIPELINE, MANAGE_INTEGRATIONS_PIPELINE, MANAGE_SOURCES_PIPELINE, MANAGE_POOLS_PIPELINE, TRIGGER_SECURITY, ISSUES_SECURITY, LICENCES_SECURITY, REPORTS_SECURITY, WATCHES_SECURITY, POLICIES_SECURITY, RULES_SECURITY, MANAGE_MEMBERS, MANAGE_RESOURCES)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/project#actions Project#actions}
  */
  readonly actions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/project#description Project#description}
  */
  readonly description?: string;
  /**
  * A repository can be available in different environments. Members with roles defined in the set environment will have access to the repository. List of pre-defined environments (DEV, PROD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/project#environments Project#environments}
  */
  readonly environments: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/project#name Project#name}
  */
  readonly name: string;
  /**
  * Type of role. Only "CUSTOM" is supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/project#type Project#type}
  */
  readonly type: string;
}

export function projectRoleToTerraform(struct?: ProjectRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    description: cdktf.stringToTerraform(struct!.description),
    environments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.environments),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function projectRoleToHclTerraform(struct?: ProjectRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environments: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.environments),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class ProjectRoleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectRole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._environments !== undefined) {
      hasAnyValues = true;
      internalValueResult.environments = this._environments;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectRole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._description = undefined;
      this._environments = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._description = value.description;
      this._environments = value.environments;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // actions - computed: false, optional: false, required: true
  private _actions?: string[]; 
  public get actions() {
    return cdktf.Fn.tolist(this.getListAttribute('actions'));
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
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

  // environments - computed: false, optional: false, required: true
  private _environments?: string[]; 
  public get environments() {
    return cdktf.Fn.tolist(this.getListAttribute('environments'));
  }
  public set environments(value: string[]) {
    this._environments = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentsInput() {
    return this._environments;
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
}

export class ProjectRoleList extends cdktf.ComplexList {
  public internalValue? : ProjectRole[] | cdktf.IResolvable

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
  public get(index: number): ProjectRoleOutputReference {
    return new ProjectRoleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/project project}
*/
export class Project extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Project to import
  * @param importFromId The id of the existing Project that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Project to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/project project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'project',
      terraformGeneratorMetadata: {
        providerName: 'project',
        providerVersion: '1.9.5',
        providerVersionConstraint: '1.9.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blockDeploymentsOnLimit = config.blockDeploymentsOnLimit;
    this._description = config.description;
    this._displayName = config.displayName;
    this._emailNotification = config.emailNotification;
    this._key = config.key;
    this._maxStorageInGibibytes = config.maxStorageInGibibytes;
    this._repos = config.repos;
    this._useProjectGroupResource = config.useProjectGroupResource;
    this._useProjectRepositoryResource = config.useProjectRepositoryResource;
    this._useProjectRoleResource = config.useProjectRoleResource;
    this._useProjectUserResource = config.useProjectUserResource;
    this._adminPrivileges.internalValue = config.adminPrivileges;
    this._group.internalValue = config.group;
    this._member.internalValue = config.member;
    this._role.internalValue = config.role;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // block_deployments_on_limit - computed: true, optional: true, required: false
  private _blockDeploymentsOnLimit?: boolean | cdktf.IResolvable; 
  public get blockDeploymentsOnLimit() {
    return this.getBooleanAttribute('block_deployments_on_limit');
  }
  public set blockDeploymentsOnLimit(value: boolean | cdktf.IResolvable) {
    this._blockDeploymentsOnLimit = value;
  }
  public resetBlockDeploymentsOnLimit() {
    this._blockDeploymentsOnLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDeploymentsOnLimitInput() {
    return this._blockDeploymentsOnLimit;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // email_notification - computed: true, optional: true, required: false
  private _emailNotification?: boolean | cdktf.IResolvable; 
  public get emailNotification() {
    return this.getBooleanAttribute('email_notification');
  }
  public set emailNotification(value: boolean | cdktf.IResolvable) {
    this._emailNotification = value;
  }
  public resetEmailNotification() {
    this._emailNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailNotificationInput() {
    return this._emailNotification;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // max_storage_in_gibibytes - computed: true, optional: true, required: false
  private _maxStorageInGibibytes?: number; 
  public get maxStorageInGibibytes() {
    return this.getNumberAttribute('max_storage_in_gibibytes');
  }
  public set maxStorageInGibibytes(value: number) {
    this._maxStorageInGibibytes = value;
  }
  public resetMaxStorageInGibibytes() {
    this._maxStorageInGibibytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStorageInGibibytesInput() {
    return this._maxStorageInGibibytes;
  }

  // repos - computed: false, optional: true, required: false
  private _repos?: string[]; 
  public get repos() {
    return cdktf.Fn.tolist(this.getListAttribute('repos'));
  }
  public set repos(value: string[]) {
    this._repos = value;
  }
  public resetRepos() {
    this._repos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reposInput() {
    return this._repos;
  }

  // use_project_group_resource - computed: true, optional: true, required: false
  private _useProjectGroupResource?: boolean | cdktf.IResolvable; 
  public get useProjectGroupResource() {
    return this.getBooleanAttribute('use_project_group_resource');
  }
  public set useProjectGroupResource(value: boolean | cdktf.IResolvable) {
    this._useProjectGroupResource = value;
  }
  public resetUseProjectGroupResource() {
    this._useProjectGroupResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useProjectGroupResourceInput() {
    return this._useProjectGroupResource;
  }

  // use_project_repository_resource - computed: true, optional: true, required: false
  private _useProjectRepositoryResource?: boolean | cdktf.IResolvable; 
  public get useProjectRepositoryResource() {
    return this.getBooleanAttribute('use_project_repository_resource');
  }
  public set useProjectRepositoryResource(value: boolean | cdktf.IResolvable) {
    this._useProjectRepositoryResource = value;
  }
  public resetUseProjectRepositoryResource() {
    this._useProjectRepositoryResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useProjectRepositoryResourceInput() {
    return this._useProjectRepositoryResource;
  }

  // use_project_role_resource - computed: true, optional: true, required: false
  private _useProjectRoleResource?: boolean | cdktf.IResolvable; 
  public get useProjectRoleResource() {
    return this.getBooleanAttribute('use_project_role_resource');
  }
  public set useProjectRoleResource(value: boolean | cdktf.IResolvable) {
    this._useProjectRoleResource = value;
  }
  public resetUseProjectRoleResource() {
    this._useProjectRoleResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useProjectRoleResourceInput() {
    return this._useProjectRoleResource;
  }

  // use_project_user_resource - computed: true, optional: true, required: false
  private _useProjectUserResource?: boolean | cdktf.IResolvable; 
  public get useProjectUserResource() {
    return this.getBooleanAttribute('use_project_user_resource');
  }
  public set useProjectUserResource(value: boolean | cdktf.IResolvable) {
    this._useProjectUserResource = value;
  }
  public resetUseProjectUserResource() {
    this._useProjectUserResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useProjectUserResourceInput() {
    return this._useProjectUserResource;
  }

  // admin_privileges - computed: false, optional: true, required: false
  private _adminPrivileges = new ProjectAdminPrivilegesList(this, "admin_privileges", true);
  public get adminPrivileges() {
    return this._adminPrivileges;
  }
  public putAdminPrivileges(value: ProjectAdminPrivileges[] | cdktf.IResolvable) {
    this._adminPrivileges.internalValue = value;
  }
  public resetAdminPrivileges() {
    this._adminPrivileges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPrivilegesInput() {
    return this._adminPrivileges.internalValue;
  }

  // group - computed: false, optional: true, required: false
  private _group = new ProjectGroupList(this, "group", true);
  public get group() {
    return this._group;
  }
  public putGroup(value: ProjectGroup[] | cdktf.IResolvable) {
    this._group.internalValue = value;
  }
  public resetGroup() {
    this._group.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group.internalValue;
  }

  // member - computed: false, optional: true, required: false
  private _member = new ProjectMemberList(this, "member", true);
  public get member() {
    return this._member;
  }
  public putMember(value: ProjectMember[] | cdktf.IResolvable) {
    this._member.internalValue = value;
  }
  public resetMember() {
    this._member.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member.internalValue;
  }

  // role - computed: false, optional: true, required: false
  private _role = new ProjectRoleList(this, "role", true);
  public get role() {
    return this._role;
  }
  public putRole(value: ProjectRole[] | cdktf.IResolvable) {
    this._role.internalValue = value;
  }
  public resetRole() {
    this._role.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      block_deployments_on_limit: cdktf.booleanToTerraform(this._blockDeploymentsOnLimit),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      email_notification: cdktf.booleanToTerraform(this._emailNotification),
      key: cdktf.stringToTerraform(this._key),
      max_storage_in_gibibytes: cdktf.numberToTerraform(this._maxStorageInGibibytes),
      repos: cdktf.listMapper(cdktf.stringToTerraform, false)(this._repos),
      use_project_group_resource: cdktf.booleanToTerraform(this._useProjectGroupResource),
      use_project_repository_resource: cdktf.booleanToTerraform(this._useProjectRepositoryResource),
      use_project_role_resource: cdktf.booleanToTerraform(this._useProjectRoleResource),
      use_project_user_resource: cdktf.booleanToTerraform(this._useProjectUserResource),
      admin_privileges: cdktf.listMapper(projectAdminPrivilegesToTerraform, true)(this._adminPrivileges.internalValue),
      group: cdktf.listMapper(projectGroupToTerraform, true)(this._group.internalValue),
      member: cdktf.listMapper(projectMemberToTerraform, true)(this._member.internalValue),
      role: cdktf.listMapper(projectRoleToTerraform, true)(this._role.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      block_deployments_on_limit: {
        value: cdktf.booleanToHclTerraform(this._blockDeploymentsOnLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      email_notification: {
        value: cdktf.booleanToHclTerraform(this._emailNotification),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_storage_in_gibibytes: {
        value: cdktf.numberToHclTerraform(this._maxStorageInGibibytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      repos: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._repos),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      use_project_group_resource: {
        value: cdktf.booleanToHclTerraform(this._useProjectGroupResource),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_project_repository_resource: {
        value: cdktf.booleanToHclTerraform(this._useProjectRepositoryResource),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_project_role_resource: {
        value: cdktf.booleanToHclTerraform(this._useProjectRoleResource),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_project_user_resource: {
        value: cdktf.booleanToHclTerraform(this._useProjectUserResource),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      admin_privileges: {
        value: cdktf.listMapperHcl(projectAdminPrivilegesToHclTerraform, true)(this._adminPrivileges.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProjectAdminPrivilegesList",
      },
      group: {
        value: cdktf.listMapperHcl(projectGroupToHclTerraform, true)(this._group.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProjectGroupList",
      },
      member: {
        value: cdktf.listMapperHcl(projectMemberToHclTerraform, true)(this._member.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProjectMemberList",
      },
      role: {
        value: cdktf.listMapperHcl(projectRoleToHclTerraform, true)(this._role.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProjectRoleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
