// https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/permission_target
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataArtifactoryPermissionTargetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/permission_target#id DataArtifactoryPermissionTarget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/permission_target#name DataArtifactoryPermissionTarget#name}
  */
  readonly name: string;
  /**
  * build block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/permission_target#build DataArtifactoryPermissionTarget#build}
  */
  readonly buildAttribute?: DataArtifactoryPermissionTargetBuild;
  /**
  * release_bundle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/permission_target#release_bundle DataArtifactoryPermissionTarget#release_bundle}
  */
  readonly releaseBundle?: DataArtifactoryPermissionTargetReleaseBundle;
  /**
  * repo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/permission_target#repo DataArtifactoryPermissionTarget#repo}
  */
  readonly repo?: DataArtifactoryPermissionTargetRepo;
}
export interface DataArtifactoryPermissionTargetBuildActionsGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/permission_target#name DataArtifactoryPermissionTarget#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/permission_target#permissions DataArtifactoryPermissionTarget#permissions}
  */
  readonly permissions: string[];
}

export function dataArtifactoryPermissionTargetBuildActionsGroupsToTerraform(struct?: DataArtifactoryPermissionTargetBuildActionsGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissions),
  }
}


export function dataArtifactoryPermissionTargetBuildActionsGroupsToHclTerraform(struct?: DataArtifactoryPermissionTargetBuildActionsGroups | cdktf.IResolvable): any {
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

export class DataArtifactoryPermissionTargetBuildActionsGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataArtifactoryPermissionTargetBuildActionsGroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataArtifactoryPermissionTargetBuildActionsGroups | cdktf.IResolvable | undefined) {
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

export class DataArtifactoryPermissionTargetBuildActionsGroupsList extends cdktf.ComplexList {
  public internalValue? : DataArtifactoryPermissionTargetBuildActionsGroups[] | cdktf.IResolvable

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
  public get(index: number): DataArtifactoryPermissionTargetBuildActionsGroupsOutputReference {
    return new DataArtifactoryPermissionTargetBuildActionsGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataArtifactoryPermissionTargetBuildActionsUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/permission_target#name DataArtifactoryPermissionTarget#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/permission_target#permissions DataArtifactoryPermissionTarget#permissions}
  */
  readonly permissions: string[];
}

export function dataArtifactoryPermissionTargetBuildActionsUsersToTerraform(struct?: DataArtifactoryPermissionTargetBuildActionsUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissions),
  }
}


export function dataArtifactoryPermissionTargetBuildActionsUsersToHclTerraform(struct?: DataArtifactoryPermissionTargetBuildActionsUsers | cdktf.IResolvable): any {
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

export class DataArtifactoryPermissionTargetBuildActionsUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataArtifactoryPermissionTargetBuildActionsUsers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataArtifactoryPermissionTargetBuildActionsUsers | cdktf.IResolvable | undefined) {
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

export class DataArtifactoryPermissionTargetBuildActionsUsersList extends cdktf.ComplexList {
  public internalValue? : DataArtifactoryPermissionTargetBuildActionsUsers[] | cdktf.IResolvable

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
  public get(index: number): DataArtifactoryPermissionTargetBuildActionsUsersOutputReference {
    return new DataArtifactoryPermissionTargetBuildActionsUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataArtifactoryPermissionTargetBuildActions {
  /**
  * groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/permission_target#groups DataArtifactoryPermissionTarget#groups}
  */
  readonly groups?: DataArtifactoryPermissionTargetBuildActionsGroups[] | cdktf.IResolvable;
  /**
  * users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/permission_target#users DataArtifactoryPermissionTarget#users}
  */
  readonly users?: DataArtifactoryPermissionTargetBuildActionsUsers[] | cdktf.IResolvable;
}

export function dataArtifactoryPermissionTargetBuildActionsToTerraform(struct?: DataArtifactoryPermissionTargetBuildActionsOutputReference | DataArtifactoryPermissionTargetBuildActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    groups: cdktf.listMapper(dataArtifactoryPermissionTargetBuildActionsGroupsToTerraform, true)(struct!.groups),
    users: cdktf.listMapper(dataArtifactoryPermissionTargetBuildActionsUsersToTerraform, true)(struct!.users),
  }
}


export function dataArtifactoryPermissionTargetBuildActionsToHclTerraform(struct?: DataArtifactoryPermissionTargetBuildActionsOutputReference | DataArtifactoryPermissionTargetBuildActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    groups: {
      value: cdktf.listMapperHcl(dataArtifactoryPermissionTargetBuildActionsGroupsToHclTerraform, true)(struct!.groups),
      isBlock: true,
      type: "set",
      storageClassType: "DataArtifactoryPermissionTargetBuildActionsGroupsList",
    },
    users: {
      value: cdktf.listMapperHcl(dataArtifactoryPermissionTargetBuildActionsUsersToHclTerraform, true)(struct!.users),
      isBlock: true,
      type: "set",
      storageClassType: "DataArtifactoryPermissionTargetBuildActionsUsersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataArtifactoryPermissionTargetBuildActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataArtifactoryPermissionTargetBuildActions | undefined {
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

  public set internalValue(value: DataArtifactoryPermissionTargetBuildActions | undefined) {
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
  private _groups = new DataArtifactoryPermissionTargetBuildActionsGroupsList(this, "groups", true);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: DataArtifactoryPermissionTargetBuildActionsGroups[] | cdktf.IResolvable) {
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
  private _users = new DataArtifactoryPermissionTargetBuildActionsUsersList(this, "users", true);
  public get users() {
    return this._users;
  }
  public putUsers(value: DataArtifactoryPermissionTargetBuildActionsUsers[] | cdktf.IResolvable) {
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
export interface DataArtifactoryPermissionTargetBuild {
  /**
  * The default value will be [] if nothing is supplied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/permission_target#excludes_pattern DataArtifactoryPermissionTarget#excludes_pattern}
  */
  readonly excludesPattern?: string[];
  /**
  * The default value will be [""] if nothing is supplied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/permission_target#includes_pattern DataArtifactoryPermissionTarget#includes_pattern}
  */
  readonly includesPattern?: string[];
  /**
  * This can only be 1 value: "artifactory-build-info", and currently, validation of sets/lists is not allowed. Artifactory will reject the request if you change this
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/permission_target#repositories DataArtifactoryPermissionTarget#repositories}
  */
  readonly repositories: string[];
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/permission_target#actions DataArtifactoryPermissionTarget#actions}
  */
  readonly actions?: DataArtifactoryPermissionTargetBuildActions;
}

export function dataArtifactoryPermissionTargetBuildToTerraform(struct?: DataArtifactoryPermissionTargetBuildOutputReference | DataArtifactoryPermissionTargetBuild): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excludes_pattern: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludesPattern),
    includes_pattern: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includesPattern),
    repositories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.repositories),
    actions: dataArtifactoryPermissionTargetBuildActionsToTerraform(struct!.actions),
  }
}


export function dataArtifactoryPermissionTargetBuildToHclTerraform(struct?: DataArtifactoryPermissionTargetBuildOutputReference | DataArtifactoryPermissionTargetBuild): any {
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
      value: dataArtifactoryPermissionTargetBuildActionsToHclTerraform(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "DataArtifactoryPermissionTargetBuildActionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataArtifactoryPermissionTargetBuildOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataArtifactoryPermissionTargetBuild | undefined {
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

  public set internalValue(value: DataArtifactoryPermissionTargetBuild | undefined) {
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
  private _actions = new DataArtifactoryPermissionTargetBuildActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }
  public putActions(value: DataArtifactoryPermissionTargetBuildActions) {
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
export interface DataArtifactoryPermissionTargetReleaseBundleActionsGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/permission_target#name DataArtifactoryPermissionTarget#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/permission_target#permissions DataArtifactoryPermissionTarget#permissions}
  */
  readonly permissions: string[];
}

export function dataArtifactoryPermissionTargetReleaseBundleActionsGroupsToTerraform(struct?: DataArtifactoryPermissionTargetReleaseBundleActionsGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissions),
  }
}


export function dataArtifactoryPermissionTargetReleaseBundleActionsGroupsToHclTerraform(struct?: DataArtifactoryPermissionTargetReleaseBundleActionsGroups | cdktf.IResolvable): any {
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

export class DataArtifactoryPermissionTargetReleaseBundleActionsGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataArtifactoryPermissionTargetReleaseBundleActionsGroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataArtifactoryPermissionTargetReleaseBundleActionsGroups | cdktf.IResolvable | undefined) {
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

export class DataArtifactoryPermissionTargetReleaseBundleActionsGroupsList extends cdktf.ComplexList {
  public internalValue? : DataArtifactoryPermissionTargetReleaseBundleActionsGroups[] | cdktf.IResolvable

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
  public get(index: number): DataArtifactoryPermissionTargetReleaseBundleActionsGroupsOutputReference {
    return new DataArtifactoryPermissionTargetReleaseBundleActionsGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataArtifactoryPermissionTargetReleaseBundleActionsUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/permission_target#name DataArtifactoryPermissionTarget#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/permission_target#permissions DataArtifactoryPermissionTarget#permissions}
  */
  readonly permissions: string[];
}

export function dataArtifactoryPermissionTargetReleaseBundleActionsUsersToTerraform(struct?: DataArtifactoryPermissionTargetReleaseBundleActionsUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissions),
  }
}


export function dataArtifactoryPermissionTargetReleaseBundleActionsUsersToHclTerraform(struct?: DataArtifactoryPermissionTargetReleaseBundleActionsUsers | cdktf.IResolvable): any {
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

export class DataArtifactoryPermissionTargetReleaseBundleActionsUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataArtifactoryPermissionTargetReleaseBundleActionsUsers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataArtifactoryPermissionTargetReleaseBundleActionsUsers | cdktf.IResolvable | undefined) {
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

export class DataArtifactoryPermissionTargetReleaseBundleActionsUsersList extends cdktf.ComplexList {
  public internalValue? : DataArtifactoryPermissionTargetReleaseBundleActionsUsers[] | cdktf.IResolvable

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
  public get(index: number): DataArtifactoryPermissionTargetReleaseBundleActionsUsersOutputReference {
    return new DataArtifactoryPermissionTargetReleaseBundleActionsUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataArtifactoryPermissionTargetReleaseBundleActions {
  /**
  * groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/permission_target#groups DataArtifactoryPermissionTarget#groups}
  */
  readonly groups?: DataArtifactoryPermissionTargetReleaseBundleActionsGroups[] | cdktf.IResolvable;
  /**
  * users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/permission_target#users DataArtifactoryPermissionTarget#users}
  */
  readonly users?: DataArtifactoryPermissionTargetReleaseBundleActionsUsers[] | cdktf.IResolvable;
}

export function dataArtifactoryPermissionTargetReleaseBundleActionsToTerraform(struct?: DataArtifactoryPermissionTargetReleaseBundleActionsOutputReference | DataArtifactoryPermissionTargetReleaseBundleActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    groups: cdktf.listMapper(dataArtifactoryPermissionTargetReleaseBundleActionsGroupsToTerraform, true)(struct!.groups),
    users: cdktf.listMapper(dataArtifactoryPermissionTargetReleaseBundleActionsUsersToTerraform, true)(struct!.users),
  }
}


export function dataArtifactoryPermissionTargetReleaseBundleActionsToHclTerraform(struct?: DataArtifactoryPermissionTargetReleaseBundleActionsOutputReference | DataArtifactoryPermissionTargetReleaseBundleActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    groups: {
      value: cdktf.listMapperHcl(dataArtifactoryPermissionTargetReleaseBundleActionsGroupsToHclTerraform, true)(struct!.groups),
      isBlock: true,
      type: "set",
      storageClassType: "DataArtifactoryPermissionTargetReleaseBundleActionsGroupsList",
    },
    users: {
      value: cdktf.listMapperHcl(dataArtifactoryPermissionTargetReleaseBundleActionsUsersToHclTerraform, true)(struct!.users),
      isBlock: true,
      type: "set",
      storageClassType: "DataArtifactoryPermissionTargetReleaseBundleActionsUsersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataArtifactoryPermissionTargetReleaseBundleActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataArtifactoryPermissionTargetReleaseBundleActions | undefined {
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

  public set internalValue(value: DataArtifactoryPermissionTargetReleaseBundleActions | undefined) {
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
  private _groups = new DataArtifactoryPermissionTargetReleaseBundleActionsGroupsList(this, "groups", true);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: DataArtifactoryPermissionTargetReleaseBundleActionsGroups[] | cdktf.IResolvable) {
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
  private _users = new DataArtifactoryPermissionTargetReleaseBundleActionsUsersList(this, "users", true);
  public get users() {
    return this._users;
  }
  public putUsers(value: DataArtifactoryPermissionTargetReleaseBundleActionsUsers[] | cdktf.IResolvable) {
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
export interface DataArtifactoryPermissionTargetReleaseBundle {
  /**
  * The default value will be [] if nothing is supplied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/permission_target#excludes_pattern DataArtifactoryPermissionTarget#excludes_pattern}
  */
  readonly excludesPattern?: string[];
  /**
  * The default value will be [""] if nothing is supplied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/permission_target#includes_pattern DataArtifactoryPermissionTarget#includes_pattern}
  */
  readonly includesPattern?: string[];
  /**
  * This can only be 1 value: "artifactory-build-info", and currently, validation of sets/lists is not allowed. Artifactory will reject the request if you change this
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/permission_target#repositories DataArtifactoryPermissionTarget#repositories}
  */
  readonly repositories: string[];
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/permission_target#actions DataArtifactoryPermissionTarget#actions}
  */
  readonly actions?: DataArtifactoryPermissionTargetReleaseBundleActions;
}

export function dataArtifactoryPermissionTargetReleaseBundleToTerraform(struct?: DataArtifactoryPermissionTargetReleaseBundleOutputReference | DataArtifactoryPermissionTargetReleaseBundle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excludes_pattern: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludesPattern),
    includes_pattern: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includesPattern),
    repositories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.repositories),
    actions: dataArtifactoryPermissionTargetReleaseBundleActionsToTerraform(struct!.actions),
  }
}


export function dataArtifactoryPermissionTargetReleaseBundleToHclTerraform(struct?: DataArtifactoryPermissionTargetReleaseBundleOutputReference | DataArtifactoryPermissionTargetReleaseBundle): any {
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
      value: dataArtifactoryPermissionTargetReleaseBundleActionsToHclTerraform(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "DataArtifactoryPermissionTargetReleaseBundleActionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataArtifactoryPermissionTargetReleaseBundleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataArtifactoryPermissionTargetReleaseBundle | undefined {
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

  public set internalValue(value: DataArtifactoryPermissionTargetReleaseBundle | undefined) {
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
  private _actions = new DataArtifactoryPermissionTargetReleaseBundleActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }
  public putActions(value: DataArtifactoryPermissionTargetReleaseBundleActions) {
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
export interface DataArtifactoryPermissionTargetRepoActionsGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/permission_target#name DataArtifactoryPermissionTarget#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/permission_target#permissions DataArtifactoryPermissionTarget#permissions}
  */
  readonly permissions: string[];
}

export function dataArtifactoryPermissionTargetRepoActionsGroupsToTerraform(struct?: DataArtifactoryPermissionTargetRepoActionsGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissions),
  }
}


export function dataArtifactoryPermissionTargetRepoActionsGroupsToHclTerraform(struct?: DataArtifactoryPermissionTargetRepoActionsGroups | cdktf.IResolvable): any {
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

export class DataArtifactoryPermissionTargetRepoActionsGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataArtifactoryPermissionTargetRepoActionsGroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataArtifactoryPermissionTargetRepoActionsGroups | cdktf.IResolvable | undefined) {
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

export class DataArtifactoryPermissionTargetRepoActionsGroupsList extends cdktf.ComplexList {
  public internalValue? : DataArtifactoryPermissionTargetRepoActionsGroups[] | cdktf.IResolvable

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
  public get(index: number): DataArtifactoryPermissionTargetRepoActionsGroupsOutputReference {
    return new DataArtifactoryPermissionTargetRepoActionsGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataArtifactoryPermissionTargetRepoActionsUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/permission_target#name DataArtifactoryPermissionTarget#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/permission_target#permissions DataArtifactoryPermissionTarget#permissions}
  */
  readonly permissions: string[];
}

export function dataArtifactoryPermissionTargetRepoActionsUsersToTerraform(struct?: DataArtifactoryPermissionTargetRepoActionsUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissions),
  }
}


export function dataArtifactoryPermissionTargetRepoActionsUsersToHclTerraform(struct?: DataArtifactoryPermissionTargetRepoActionsUsers | cdktf.IResolvable): any {
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

export class DataArtifactoryPermissionTargetRepoActionsUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataArtifactoryPermissionTargetRepoActionsUsers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataArtifactoryPermissionTargetRepoActionsUsers | cdktf.IResolvable | undefined) {
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

export class DataArtifactoryPermissionTargetRepoActionsUsersList extends cdktf.ComplexList {
  public internalValue? : DataArtifactoryPermissionTargetRepoActionsUsers[] | cdktf.IResolvable

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
  public get(index: number): DataArtifactoryPermissionTargetRepoActionsUsersOutputReference {
    return new DataArtifactoryPermissionTargetRepoActionsUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataArtifactoryPermissionTargetRepoActions {
  /**
  * groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/permission_target#groups DataArtifactoryPermissionTarget#groups}
  */
  readonly groups?: DataArtifactoryPermissionTargetRepoActionsGroups[] | cdktf.IResolvable;
  /**
  * users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/permission_target#users DataArtifactoryPermissionTarget#users}
  */
  readonly users?: DataArtifactoryPermissionTargetRepoActionsUsers[] | cdktf.IResolvable;
}

export function dataArtifactoryPermissionTargetRepoActionsToTerraform(struct?: DataArtifactoryPermissionTargetRepoActionsOutputReference | DataArtifactoryPermissionTargetRepoActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    groups: cdktf.listMapper(dataArtifactoryPermissionTargetRepoActionsGroupsToTerraform, true)(struct!.groups),
    users: cdktf.listMapper(dataArtifactoryPermissionTargetRepoActionsUsersToTerraform, true)(struct!.users),
  }
}


export function dataArtifactoryPermissionTargetRepoActionsToHclTerraform(struct?: DataArtifactoryPermissionTargetRepoActionsOutputReference | DataArtifactoryPermissionTargetRepoActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    groups: {
      value: cdktf.listMapperHcl(dataArtifactoryPermissionTargetRepoActionsGroupsToHclTerraform, true)(struct!.groups),
      isBlock: true,
      type: "set",
      storageClassType: "DataArtifactoryPermissionTargetRepoActionsGroupsList",
    },
    users: {
      value: cdktf.listMapperHcl(dataArtifactoryPermissionTargetRepoActionsUsersToHclTerraform, true)(struct!.users),
      isBlock: true,
      type: "set",
      storageClassType: "DataArtifactoryPermissionTargetRepoActionsUsersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataArtifactoryPermissionTargetRepoActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataArtifactoryPermissionTargetRepoActions | undefined {
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

  public set internalValue(value: DataArtifactoryPermissionTargetRepoActions | undefined) {
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
  private _groups = new DataArtifactoryPermissionTargetRepoActionsGroupsList(this, "groups", true);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: DataArtifactoryPermissionTargetRepoActionsGroups[] | cdktf.IResolvable) {
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
  private _users = new DataArtifactoryPermissionTargetRepoActionsUsersList(this, "users", true);
  public get users() {
    return this._users;
  }
  public putUsers(value: DataArtifactoryPermissionTargetRepoActionsUsers[] | cdktf.IResolvable) {
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
export interface DataArtifactoryPermissionTargetRepo {
  /**
  * The default value will be [] if nothing is supplied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/permission_target#excludes_pattern DataArtifactoryPermissionTarget#excludes_pattern}
  */
  readonly excludesPattern?: string[];
  /**
  * The default value will be [""] if nothing is supplied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/permission_target#includes_pattern DataArtifactoryPermissionTarget#includes_pattern}
  */
  readonly includesPattern?: string[];
  /**
  * This can only be 1 value: "artifactory-build-info", and currently, validation of sets/lists is not allowed. Artifactory will reject the request if you change this
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/permission_target#repositories DataArtifactoryPermissionTarget#repositories}
  */
  readonly repositories: string[];
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/permission_target#actions DataArtifactoryPermissionTarget#actions}
  */
  readonly actions?: DataArtifactoryPermissionTargetRepoActions;
}

export function dataArtifactoryPermissionTargetRepoToTerraform(struct?: DataArtifactoryPermissionTargetRepoOutputReference | DataArtifactoryPermissionTargetRepo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excludes_pattern: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludesPattern),
    includes_pattern: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includesPattern),
    repositories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.repositories),
    actions: dataArtifactoryPermissionTargetRepoActionsToTerraform(struct!.actions),
  }
}


export function dataArtifactoryPermissionTargetRepoToHclTerraform(struct?: DataArtifactoryPermissionTargetRepoOutputReference | DataArtifactoryPermissionTargetRepo): any {
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
      value: dataArtifactoryPermissionTargetRepoActionsToHclTerraform(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "DataArtifactoryPermissionTargetRepoActionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataArtifactoryPermissionTargetRepoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataArtifactoryPermissionTargetRepo | undefined {
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

  public set internalValue(value: DataArtifactoryPermissionTargetRepo | undefined) {
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
  private _actions = new DataArtifactoryPermissionTargetRepoActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }
  public putActions(value: DataArtifactoryPermissionTargetRepoActions) {
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
* Represents a {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/permission_target artifactory_permission_target}
*/
export class DataArtifactoryPermissionTarget extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artifactory_permission_target";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataArtifactoryPermissionTarget resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataArtifactoryPermissionTarget to import
  * @param importFromId The id of the existing DataArtifactoryPermissionTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/permission_target#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataArtifactoryPermissionTarget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artifactory_permission_target", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/permission_target artifactory_permission_target} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataArtifactoryPermissionTargetConfig
  */
  public constructor(scope: Construct, id: string, config: DataArtifactoryPermissionTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'artifactory_permission_target',
      terraformGeneratorMetadata: {
        providerName: 'artifactory',
        providerVersion: '12.10.1'
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
  private _build = new DataArtifactoryPermissionTargetBuildOutputReference(this, "build");
  public get buildAttribute() {
    return this._build;
  }
  public putBuildAttribute(value: DataArtifactoryPermissionTargetBuild) {
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
  private _releaseBundle = new DataArtifactoryPermissionTargetReleaseBundleOutputReference(this, "release_bundle");
  public get releaseBundle() {
    return this._releaseBundle;
  }
  public putReleaseBundle(value: DataArtifactoryPermissionTargetReleaseBundle) {
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
  private _repo = new DataArtifactoryPermissionTargetRepoOutputReference(this, "repo");
  public get repo() {
    return this._repo;
  }
  public putRepo(value: DataArtifactoryPermissionTargetRepo) {
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
      build: dataArtifactoryPermissionTargetBuildToTerraform(this._build.internalValue),
      release_bundle: dataArtifactoryPermissionTargetReleaseBundleToTerraform(this._releaseBundle.internalValue),
      repo: dataArtifactoryPermissionTargetRepoToTerraform(this._repo.internalValue),
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
        value: dataArtifactoryPermissionTargetBuildToHclTerraform(this._build.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataArtifactoryPermissionTargetBuildList",
      },
      release_bundle: {
        value: dataArtifactoryPermissionTargetReleaseBundleToHclTerraform(this._releaseBundle.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataArtifactoryPermissionTargetReleaseBundleList",
      },
      repo: {
        value: dataArtifactoryPermissionTargetRepoToHclTerraform(this._repo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataArtifactoryPermissionTargetRepoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
