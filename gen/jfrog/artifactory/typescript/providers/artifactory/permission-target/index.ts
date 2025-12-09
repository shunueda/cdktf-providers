// https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/permission_target
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PermissionTargetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/permission_target#id PermissionTarget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/permission_target#name PermissionTarget#name}
  */
  readonly name: string;
  /**
  * build block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/permission_target#build PermissionTarget#build}
  */
  readonly buildAttribute?: PermissionTargetBuild;
  /**
  * release_bundle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/permission_target#release_bundle PermissionTarget#release_bundle}
  */
  readonly releaseBundle?: PermissionTargetReleaseBundle;
  /**
  * repo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/permission_target#repo PermissionTarget#repo}
  */
  readonly repo?: PermissionTargetRepo;
}
export interface PermissionTargetBuildActionsGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/permission_target#name PermissionTarget#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/permission_target#permissions PermissionTarget#permissions}
  */
  readonly permissions: string[];
}

export function permissionTargetBuildActionsGroupsToTerraform(struct?: PermissionTargetBuildActionsGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissions),
  }
}


export function permissionTargetBuildActionsGroupsToHclTerraform(struct?: PermissionTargetBuildActionsGroups | cdktf.IResolvable): any {
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
    permissions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permissions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PermissionTargetBuildActionsGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PermissionTargetBuildActionsGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PermissionTargetBuildActionsGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._permissions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._permissions = value.permissions;
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

  // permissions - computed: false, optional: false, required: true
  private _permissions?: string[]; 
  public get permissions() {
    return cdktf.Fn.tolist(this.getListAttribute('permissions'));
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }
}

export class PermissionTargetBuildActionsGroupsList extends cdktf.ComplexList {
  public internalValue? : PermissionTargetBuildActionsGroups[] | cdktf.IResolvable

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
  public get(index: number): PermissionTargetBuildActionsGroupsOutputReference {
    return new PermissionTargetBuildActionsGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PermissionTargetBuildActionsUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/permission_target#name PermissionTarget#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/permission_target#permissions PermissionTarget#permissions}
  */
  readonly permissions: string[];
}

export function permissionTargetBuildActionsUsersToTerraform(struct?: PermissionTargetBuildActionsUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissions),
  }
}


export function permissionTargetBuildActionsUsersToHclTerraform(struct?: PermissionTargetBuildActionsUsers | cdktf.IResolvable): any {
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
    permissions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permissions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PermissionTargetBuildActionsUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PermissionTargetBuildActionsUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PermissionTargetBuildActionsUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._permissions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._permissions = value.permissions;
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

  // permissions - computed: false, optional: false, required: true
  private _permissions?: string[]; 
  public get permissions() {
    return cdktf.Fn.tolist(this.getListAttribute('permissions'));
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }
}

export class PermissionTargetBuildActionsUsersList extends cdktf.ComplexList {
  public internalValue? : PermissionTargetBuildActionsUsers[] | cdktf.IResolvable

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
  public get(index: number): PermissionTargetBuildActionsUsersOutputReference {
    return new PermissionTargetBuildActionsUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PermissionTargetBuildActions {
  /**
  * groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/permission_target#groups PermissionTarget#groups}
  */
  readonly groups?: PermissionTargetBuildActionsGroups[] | cdktf.IResolvable;
  /**
  * users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/permission_target#users PermissionTarget#users}
  */
  readonly users?: PermissionTargetBuildActionsUsers[] | cdktf.IResolvable;
}

export function permissionTargetBuildActionsToTerraform(struct?: PermissionTargetBuildActionsOutputReference | PermissionTargetBuildActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    groups: cdktf.listMapper(permissionTargetBuildActionsGroupsToTerraform, true)(struct!.groups),
    users: cdktf.listMapper(permissionTargetBuildActionsUsersToTerraform, true)(struct!.users),
  }
}


export function permissionTargetBuildActionsToHclTerraform(struct?: PermissionTargetBuildActionsOutputReference | PermissionTargetBuildActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    groups: {
      value: cdktf.listMapperHcl(permissionTargetBuildActionsGroupsToHclTerraform, true)(struct!.groups),
      isBlock: true,
      type: "set",
      storageClassType: "PermissionTargetBuildActionsGroupsList",
    },
    users: {
      value: cdktf.listMapperHcl(permissionTargetBuildActionsUsersToHclTerraform, true)(struct!.users),
      isBlock: true,
      type: "set",
      storageClassType: "PermissionTargetBuildActionsUsersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PermissionTargetBuildActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PermissionTargetBuildActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups?.internalValue;
    }
    if (this._users?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PermissionTargetBuildActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groups.internalValue = undefined;
      this._users.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groups.internalValue = value.groups;
      this._users.internalValue = value.users;
    }
  }

  // groups - computed: false, optional: true, required: false
  private _groups = new PermissionTargetBuildActionsGroupsList(this, "groups", true);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: PermissionTargetBuildActionsGroups[] | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  public resetGroups() {
    this._groups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }

  // users - computed: false, optional: true, required: false
  private _users = new PermissionTargetBuildActionsUsersList(this, "users", true);
  public get users() {
    return this._users;
  }
  public putUsers(value: PermissionTargetBuildActionsUsers[] | cdktf.IResolvable) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }
}
export interface PermissionTargetBuild {
  /**
  * The default value will be [] if nothing is supplied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/permission_target#excludes_pattern PermissionTarget#excludes_pattern}
  */
  readonly excludesPattern?: string[];
  /**
  * The default value will be [""] if nothing is supplied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/permission_target#includes_pattern PermissionTarget#includes_pattern}
  */
  readonly includesPattern?: string[];
  /**
  * This can only be 1 value: "artifactory-build-info", and currently, validation of sets/lists is not allowed. Artifactory will reject the request if you change this
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/permission_target#repositories PermissionTarget#repositories}
  */
  readonly repositories: string[];
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/permission_target#actions PermissionTarget#actions}
  */
  readonly actions?: PermissionTargetBuildActions;
}

export function permissionTargetBuildToTerraform(struct?: PermissionTargetBuildOutputReference | PermissionTargetBuild): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excludes_pattern: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludesPattern),
    includes_pattern: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includesPattern),
    repositories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.repositories),
    actions: permissionTargetBuildActionsToTerraform(struct!.actions),
  }
}


export function permissionTargetBuildToHclTerraform(struct?: PermissionTargetBuildOutputReference | PermissionTargetBuild): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excludes_pattern: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludesPattern),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    includes_pattern: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includesPattern),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    repositories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.repositories),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    actions: {
      value: permissionTargetBuildActionsToHclTerraform(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "PermissionTargetBuildActionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PermissionTargetBuildOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PermissionTargetBuild | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludesPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludesPattern = this._excludesPattern;
    }
    if (this._includesPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.includesPattern = this._includesPattern;
    }
    if (this._repositories !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositories = this._repositories;
    }
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PermissionTargetBuild | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludesPattern = undefined;
      this._includesPattern = undefined;
      this._repositories = undefined;
      this._actions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludesPattern = value.excludesPattern;
      this._includesPattern = value.includesPattern;
      this._repositories = value.repositories;
      this._actions.internalValue = value.actions;
    }
  }

  // excludes_pattern - computed: false, optional: true, required: false
  private _excludesPattern?: string[]; 
  public get excludesPattern() {
    return cdktf.Fn.tolist(this.getListAttribute('excludes_pattern'));
  }
  public set excludesPattern(value: string[]) {
    this._excludesPattern = value;
  }
  public resetExcludesPattern() {
    this._excludesPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesPatternInput() {
    return this._excludesPattern;
  }

  // includes_pattern - computed: false, optional: true, required: false
  private _includesPattern?: string[]; 
  public get includesPattern() {
    return cdktf.Fn.tolist(this.getListAttribute('includes_pattern'));
  }
  public set includesPattern(value: string[]) {
    this._includesPattern = value;
  }
  public resetIncludesPattern() {
    this._includesPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includesPatternInput() {
    return this._includesPattern;
  }

  // repositories - computed: false, optional: false, required: true
  private _repositories?: string[]; 
  public get repositories() {
    return cdktf.Fn.tolist(this.getListAttribute('repositories'));
  }
  public set repositories(value: string[]) {
    this._repositories = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoriesInput() {
    return this._repositories;
  }

  // actions - computed: false, optional: true, required: false
  private _actions = new PermissionTargetBuildActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }
  public putActions(value: PermissionTargetBuildActions) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }
}
export interface PermissionTargetReleaseBundleActionsGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/permission_target#name PermissionTarget#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/permission_target#permissions PermissionTarget#permissions}
  */
  readonly permissions: string[];
}

export function permissionTargetReleaseBundleActionsGroupsToTerraform(struct?: PermissionTargetReleaseBundleActionsGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissions),
  }
}


export function permissionTargetReleaseBundleActionsGroupsToHclTerraform(struct?: PermissionTargetReleaseBundleActionsGroups | cdktf.IResolvable): any {
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
    permissions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permissions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PermissionTargetReleaseBundleActionsGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PermissionTargetReleaseBundleActionsGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PermissionTargetReleaseBundleActionsGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._permissions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._permissions = value.permissions;
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

  // permissions - computed: false, optional: false, required: true
  private _permissions?: string[]; 
  public get permissions() {
    return cdktf.Fn.tolist(this.getListAttribute('permissions'));
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }
}

export class PermissionTargetReleaseBundleActionsGroupsList extends cdktf.ComplexList {
  public internalValue? : PermissionTargetReleaseBundleActionsGroups[] | cdktf.IResolvable

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
  public get(index: number): PermissionTargetReleaseBundleActionsGroupsOutputReference {
    return new PermissionTargetReleaseBundleActionsGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PermissionTargetReleaseBundleActionsUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/permission_target#name PermissionTarget#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/permission_target#permissions PermissionTarget#permissions}
  */
  readonly permissions: string[];
}

export function permissionTargetReleaseBundleActionsUsersToTerraform(struct?: PermissionTargetReleaseBundleActionsUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissions),
  }
}


export function permissionTargetReleaseBundleActionsUsersToHclTerraform(struct?: PermissionTargetReleaseBundleActionsUsers | cdktf.IResolvable): any {
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
    permissions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permissions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PermissionTargetReleaseBundleActionsUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PermissionTargetReleaseBundleActionsUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PermissionTargetReleaseBundleActionsUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._permissions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._permissions = value.permissions;
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

  // permissions - computed: false, optional: false, required: true
  private _permissions?: string[]; 
  public get permissions() {
    return cdktf.Fn.tolist(this.getListAttribute('permissions'));
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }
}

export class PermissionTargetReleaseBundleActionsUsersList extends cdktf.ComplexList {
  public internalValue? : PermissionTargetReleaseBundleActionsUsers[] | cdktf.IResolvable

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
  public get(index: number): PermissionTargetReleaseBundleActionsUsersOutputReference {
    return new PermissionTargetReleaseBundleActionsUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PermissionTargetReleaseBundleActions {
  /**
  * groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/permission_target#groups PermissionTarget#groups}
  */
  readonly groups?: PermissionTargetReleaseBundleActionsGroups[] | cdktf.IResolvable;
  /**
  * users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/permission_target#users PermissionTarget#users}
  */
  readonly users?: PermissionTargetReleaseBundleActionsUsers[] | cdktf.IResolvable;
}

export function permissionTargetReleaseBundleActionsToTerraform(struct?: PermissionTargetReleaseBundleActionsOutputReference | PermissionTargetReleaseBundleActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    groups: cdktf.listMapper(permissionTargetReleaseBundleActionsGroupsToTerraform, true)(struct!.groups),
    users: cdktf.listMapper(permissionTargetReleaseBundleActionsUsersToTerraform, true)(struct!.users),
  }
}


export function permissionTargetReleaseBundleActionsToHclTerraform(struct?: PermissionTargetReleaseBundleActionsOutputReference | PermissionTargetReleaseBundleActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    groups: {
      value: cdktf.listMapperHcl(permissionTargetReleaseBundleActionsGroupsToHclTerraform, true)(struct!.groups),
      isBlock: true,
      type: "set",
      storageClassType: "PermissionTargetReleaseBundleActionsGroupsList",
    },
    users: {
      value: cdktf.listMapperHcl(permissionTargetReleaseBundleActionsUsersToHclTerraform, true)(struct!.users),
      isBlock: true,
      type: "set",
      storageClassType: "PermissionTargetReleaseBundleActionsUsersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PermissionTargetReleaseBundleActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PermissionTargetReleaseBundleActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups?.internalValue;
    }
    if (this._users?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PermissionTargetReleaseBundleActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groups.internalValue = undefined;
      this._users.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groups.internalValue = value.groups;
      this._users.internalValue = value.users;
    }
  }

  // groups - computed: false, optional: true, required: false
  private _groups = new PermissionTargetReleaseBundleActionsGroupsList(this, "groups", true);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: PermissionTargetReleaseBundleActionsGroups[] | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  public resetGroups() {
    this._groups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }

  // users - computed: false, optional: true, required: false
  private _users = new PermissionTargetReleaseBundleActionsUsersList(this, "users", true);
  public get users() {
    return this._users;
  }
  public putUsers(value: PermissionTargetReleaseBundleActionsUsers[] | cdktf.IResolvable) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }
}
export interface PermissionTargetReleaseBundle {
  /**
  * The default value will be [] if nothing is supplied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/permission_target#excludes_pattern PermissionTarget#excludes_pattern}
  */
  readonly excludesPattern?: string[];
  /**
  * The default value will be [""] if nothing is supplied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/permission_target#includes_pattern PermissionTarget#includes_pattern}
  */
  readonly includesPattern?: string[];
  /**
  * This can only be 1 value: "artifactory-build-info", and currently, validation of sets/lists is not allowed. Artifactory will reject the request if you change this
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/permission_target#repositories PermissionTarget#repositories}
  */
  readonly repositories: string[];
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/permission_target#actions PermissionTarget#actions}
  */
  readonly actions?: PermissionTargetReleaseBundleActions;
}

export function permissionTargetReleaseBundleToTerraform(struct?: PermissionTargetReleaseBundleOutputReference | PermissionTargetReleaseBundle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excludes_pattern: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludesPattern),
    includes_pattern: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includesPattern),
    repositories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.repositories),
    actions: permissionTargetReleaseBundleActionsToTerraform(struct!.actions),
  }
}


export function permissionTargetReleaseBundleToHclTerraform(struct?: PermissionTargetReleaseBundleOutputReference | PermissionTargetReleaseBundle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excludes_pattern: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludesPattern),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    includes_pattern: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includesPattern),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    repositories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.repositories),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    actions: {
      value: permissionTargetReleaseBundleActionsToHclTerraform(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "PermissionTargetReleaseBundleActionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PermissionTargetReleaseBundleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PermissionTargetReleaseBundle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludesPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludesPattern = this._excludesPattern;
    }
    if (this._includesPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.includesPattern = this._includesPattern;
    }
    if (this._repositories !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositories = this._repositories;
    }
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PermissionTargetReleaseBundle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludesPattern = undefined;
      this._includesPattern = undefined;
      this._repositories = undefined;
      this._actions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludesPattern = value.excludesPattern;
      this._includesPattern = value.includesPattern;
      this._repositories = value.repositories;
      this._actions.internalValue = value.actions;
    }
  }

  // excludes_pattern - computed: false, optional: true, required: false
  private _excludesPattern?: string[]; 
  public get excludesPattern() {
    return cdktf.Fn.tolist(this.getListAttribute('excludes_pattern'));
  }
  public set excludesPattern(value: string[]) {
    this._excludesPattern = value;
  }
  public resetExcludesPattern() {
    this._excludesPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesPatternInput() {
    return this._excludesPattern;
  }

  // includes_pattern - computed: false, optional: true, required: false
  private _includesPattern?: string[]; 
  public get includesPattern() {
    return cdktf.Fn.tolist(this.getListAttribute('includes_pattern'));
  }
  public set includesPattern(value: string[]) {
    this._includesPattern = value;
  }
  public resetIncludesPattern() {
    this._includesPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includesPatternInput() {
    return this._includesPattern;
  }

  // repositories - computed: false, optional: false, required: true
  private _repositories?: string[]; 
  public get repositories() {
    return cdktf.Fn.tolist(this.getListAttribute('repositories'));
  }
  public set repositories(value: string[]) {
    this._repositories = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoriesInput() {
    return this._repositories;
  }

  // actions - computed: false, optional: true, required: false
  private _actions = new PermissionTargetReleaseBundleActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }
  public putActions(value: PermissionTargetReleaseBundleActions) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }
}
export interface PermissionTargetRepoActionsGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/permission_target#name PermissionTarget#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/permission_target#permissions PermissionTarget#permissions}
  */
  readonly permissions: string[];
}

export function permissionTargetRepoActionsGroupsToTerraform(struct?: PermissionTargetRepoActionsGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissions),
  }
}


export function permissionTargetRepoActionsGroupsToHclTerraform(struct?: PermissionTargetRepoActionsGroups | cdktf.IResolvable): any {
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
    permissions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permissions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PermissionTargetRepoActionsGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PermissionTargetRepoActionsGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PermissionTargetRepoActionsGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._permissions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._permissions = value.permissions;
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

  // permissions - computed: false, optional: false, required: true
  private _permissions?: string[]; 
  public get permissions() {
    return cdktf.Fn.tolist(this.getListAttribute('permissions'));
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }
}

export class PermissionTargetRepoActionsGroupsList extends cdktf.ComplexList {
  public internalValue? : PermissionTargetRepoActionsGroups[] | cdktf.IResolvable

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
  public get(index: number): PermissionTargetRepoActionsGroupsOutputReference {
    return new PermissionTargetRepoActionsGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PermissionTargetRepoActionsUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/permission_target#name PermissionTarget#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/permission_target#permissions PermissionTarget#permissions}
  */
  readonly permissions: string[];
}

export function permissionTargetRepoActionsUsersToTerraform(struct?: PermissionTargetRepoActionsUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissions),
  }
}


export function permissionTargetRepoActionsUsersToHclTerraform(struct?: PermissionTargetRepoActionsUsers | cdktf.IResolvable): any {
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
    permissions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permissions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PermissionTargetRepoActionsUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PermissionTargetRepoActionsUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PermissionTargetRepoActionsUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._permissions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._permissions = value.permissions;
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

  // permissions - computed: false, optional: false, required: true
  private _permissions?: string[]; 
  public get permissions() {
    return cdktf.Fn.tolist(this.getListAttribute('permissions'));
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }
}

export class PermissionTargetRepoActionsUsersList extends cdktf.ComplexList {
  public internalValue? : PermissionTargetRepoActionsUsers[] | cdktf.IResolvable

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
  public get(index: number): PermissionTargetRepoActionsUsersOutputReference {
    return new PermissionTargetRepoActionsUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PermissionTargetRepoActions {
  /**
  * groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/permission_target#groups PermissionTarget#groups}
  */
  readonly groups?: PermissionTargetRepoActionsGroups[] | cdktf.IResolvable;
  /**
  * users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/permission_target#users PermissionTarget#users}
  */
  readonly users?: PermissionTargetRepoActionsUsers[] | cdktf.IResolvable;
}

export function permissionTargetRepoActionsToTerraform(struct?: PermissionTargetRepoActionsOutputReference | PermissionTargetRepoActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    groups: cdktf.listMapper(permissionTargetRepoActionsGroupsToTerraform, true)(struct!.groups),
    users: cdktf.listMapper(permissionTargetRepoActionsUsersToTerraform, true)(struct!.users),
  }
}


export function permissionTargetRepoActionsToHclTerraform(struct?: PermissionTargetRepoActionsOutputReference | PermissionTargetRepoActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    groups: {
      value: cdktf.listMapperHcl(permissionTargetRepoActionsGroupsToHclTerraform, true)(struct!.groups),
      isBlock: true,
      type: "set",
      storageClassType: "PermissionTargetRepoActionsGroupsList",
    },
    users: {
      value: cdktf.listMapperHcl(permissionTargetRepoActionsUsersToHclTerraform, true)(struct!.users),
      isBlock: true,
      type: "set",
      storageClassType: "PermissionTargetRepoActionsUsersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PermissionTargetRepoActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PermissionTargetRepoActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups?.internalValue;
    }
    if (this._users?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PermissionTargetRepoActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groups.internalValue = undefined;
      this._users.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groups.internalValue = value.groups;
      this._users.internalValue = value.users;
    }
  }

  // groups - computed: false, optional: true, required: false
  private _groups = new PermissionTargetRepoActionsGroupsList(this, "groups", true);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: PermissionTargetRepoActionsGroups[] | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  public resetGroups() {
    this._groups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }

  // users - computed: false, optional: true, required: false
  private _users = new PermissionTargetRepoActionsUsersList(this, "users", true);
  public get users() {
    return this._users;
  }
  public putUsers(value: PermissionTargetRepoActionsUsers[] | cdktf.IResolvable) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }
}
export interface PermissionTargetRepo {
  /**
  * The default value will be [] if nothing is supplied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/permission_target#excludes_pattern PermissionTarget#excludes_pattern}
  */
  readonly excludesPattern?: string[];
  /**
  * The default value will be [""] if nothing is supplied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/permission_target#includes_pattern PermissionTarget#includes_pattern}
  */
  readonly includesPattern?: string[];
  /**
  * This can only be 1 value: "artifactory-build-info", and currently, validation of sets/lists is not allowed. Artifactory will reject the request if you change this
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/permission_target#repositories PermissionTarget#repositories}
  */
  readonly repositories: string[];
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/permission_target#actions PermissionTarget#actions}
  */
  readonly actions?: PermissionTargetRepoActions;
}

export function permissionTargetRepoToTerraform(struct?: PermissionTargetRepoOutputReference | PermissionTargetRepo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excludes_pattern: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludesPattern),
    includes_pattern: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includesPattern),
    repositories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.repositories),
    actions: permissionTargetRepoActionsToTerraform(struct!.actions),
  }
}


export function permissionTargetRepoToHclTerraform(struct?: PermissionTargetRepoOutputReference | PermissionTargetRepo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excludes_pattern: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludesPattern),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    includes_pattern: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includesPattern),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    repositories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.repositories),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    actions: {
      value: permissionTargetRepoActionsToHclTerraform(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "PermissionTargetRepoActionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PermissionTargetRepoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PermissionTargetRepo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludesPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludesPattern = this._excludesPattern;
    }
    if (this._includesPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.includesPattern = this._includesPattern;
    }
    if (this._repositories !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositories = this._repositories;
    }
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PermissionTargetRepo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludesPattern = undefined;
      this._includesPattern = undefined;
      this._repositories = undefined;
      this._actions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludesPattern = value.excludesPattern;
      this._includesPattern = value.includesPattern;
      this._repositories = value.repositories;
      this._actions.internalValue = value.actions;
    }
  }

  // excludes_pattern - computed: false, optional: true, required: false
  private _excludesPattern?: string[]; 
  public get excludesPattern() {
    return cdktf.Fn.tolist(this.getListAttribute('excludes_pattern'));
  }
  public set excludesPattern(value: string[]) {
    this._excludesPattern = value;
  }
  public resetExcludesPattern() {
    this._excludesPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesPatternInput() {
    return this._excludesPattern;
  }

  // includes_pattern - computed: false, optional: true, required: false
  private _includesPattern?: string[]; 
  public get includesPattern() {
    return cdktf.Fn.tolist(this.getListAttribute('includes_pattern'));
  }
  public set includesPattern(value: string[]) {
    this._includesPattern = value;
  }
  public resetIncludesPattern() {
    this._includesPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includesPatternInput() {
    return this._includesPattern;
  }

  // repositories - computed: false, optional: false, required: true
  private _repositories?: string[]; 
  public get repositories() {
    return cdktf.Fn.tolist(this.getListAttribute('repositories'));
  }
  public set repositories(value: string[]) {
    this._repositories = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoriesInput() {
    return this._repositories;
  }

  // actions - computed: false, optional: true, required: false
  private _actions = new PermissionTargetRepoActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }
  public putActions(value: PermissionTargetRepoActions) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/permission_target artifactory_permission_target}
*/
export class PermissionTarget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artifactory_permission_target";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PermissionTarget resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PermissionTarget to import
  * @param importFromId The id of the existing PermissionTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/permission_target#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PermissionTarget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artifactory_permission_target", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/permission_target artifactory_permission_target} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PermissionTargetConfig
  */
  public constructor(scope: Construct, id: string, config: PermissionTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'artifactory_permission_target',
      terraformGeneratorMetadata: {
        providerName: 'artifactory',
        providerVersion: '12.11.1',
        providerVersionConstraint: '12.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._build.internalValue = config.buildAttribute;
    this._releaseBundle.internalValue = config.releaseBundle;
    this._repo.internalValue = config.repo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // build - computed: false, optional: true, required: false
  private _build = new PermissionTargetBuildOutputReference(this, "build");
  public get buildAttribute() {
    return this._build;
  }
  public putBuildAttribute(value: PermissionTargetBuild) {
    this._build.internalValue = value;
  }
  public resetBuildAttribute() {
    this._build.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildAttributeInput() {
    return this._build.internalValue;
  }

  // release_bundle - computed: false, optional: true, required: false
  private _releaseBundle = new PermissionTargetReleaseBundleOutputReference(this, "release_bundle");
  public get releaseBundle() {
    return this._releaseBundle;
  }
  public putReleaseBundle(value: PermissionTargetReleaseBundle) {
    this._releaseBundle.internalValue = value;
  }
  public resetReleaseBundle() {
    this._releaseBundle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseBundleInput() {
    return this._releaseBundle.internalValue;
  }

  // repo - computed: false, optional: true, required: false
  private _repo = new PermissionTargetRepoOutputReference(this, "repo");
  public get repo() {
    return this._repo;
  }
  public putRepo(value: PermissionTargetRepo) {
    this._repo.internalValue = value;
  }
  public resetRepo() {
    this._repo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      build: permissionTargetBuildToTerraform(this._build.internalValue),
      release_bundle: permissionTargetReleaseBundleToTerraform(this._releaseBundle.internalValue),
      repo: permissionTargetRepoToTerraform(this._repo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      build: {
        value: permissionTargetBuildToHclTerraform(this._build.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PermissionTargetBuildList",
      },
      release_bundle: {
        value: permissionTargetReleaseBundleToHclTerraform(this._releaseBundle.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PermissionTargetReleaseBundleList",
      },
      repo: {
        value: permissionTargetRepoToHclTerraform(this._repo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PermissionTargetRepoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
