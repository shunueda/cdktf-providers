// https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApkoTagsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The parsed structure of the apko configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#config DataApkoTags#config}
  */
  readonly config: DataApkoTagsConfigA;
  /**
  * The package name to extract tags for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#target_package DataApkoTags#target_package}
  */
  readonly targetPackage: string;
}
export interface DataApkoTagsConfigAccountsGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#gid DataApkoTags#gid}
  */
  readonly gid: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#groupname DataApkoTags#groupname}
  */
  readonly groupname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#members DataApkoTags#members}
  */
  readonly members: string[];
}

export function dataApkoTagsConfigAccountsGroupsToTerraform(struct?: DataApkoTagsConfigAccountsGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gid: cdktf.numberToTerraform(struct!.gid),
    groupname: cdktf.stringToTerraform(struct!.groupname),
    members: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.members),
  }
}


export function dataApkoTagsConfigAccountsGroupsToHclTerraform(struct?: DataApkoTagsConfigAccountsGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gid: {
      value: cdktf.numberToHclTerraform(struct!.gid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    groupname: {
      value: cdktf.stringToHclTerraform(struct!.groupname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    members: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.members),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataApkoTagsConfigAccountsGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApkoTagsConfigAccountsGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gid !== undefined) {
      hasAnyValues = true;
      internalValueResult.gid = this._gid;
    }
    if (this._groupname !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupname = this._groupname;
    }
    if (this._members !== undefined) {
      hasAnyValues = true;
      internalValueResult.members = this._members;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApkoTagsConfigAccountsGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gid = undefined;
      this._groupname = undefined;
      this._members = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gid = value.gid;
      this._groupname = value.groupname;
      this._members = value.members;
    }
  }

  // gid - computed: false, optional: false, required: true
  private _gid?: number; 
  public get gid() {
    return this.getNumberAttribute('gid');
  }
  public set gid(value: number) {
    this._gid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gidInput() {
    return this._gid;
  }

  // groupname - computed: false, optional: false, required: true
  private _groupname?: string; 
  public get groupname() {
    return this.getStringAttribute('groupname');
  }
  public set groupname(value: string) {
    this._groupname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupnameInput() {
    return this._groupname;
  }

  // members - computed: false, optional: false, required: true
  private _members?: string[]; 
  public get members() {
    return this.getListAttribute('members');
  }
  public set members(value: string[]) {
    this._members = value;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members;
  }
}

export class DataApkoTagsConfigAccountsGroupsList extends cdktf.ComplexList {
  public internalValue? : DataApkoTagsConfigAccountsGroups[] | cdktf.IResolvable

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
  public get(index: number): DataApkoTagsConfigAccountsGroupsOutputReference {
    return new DataApkoTagsConfigAccountsGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApkoTagsConfigAccountsUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#gid DataApkoTags#gid}
  */
  readonly gid: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#homedir DataApkoTags#homedir}
  */
  readonly homedir: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#shell DataApkoTags#shell}
  */
  readonly shell: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#uid DataApkoTags#uid}
  */
  readonly uid: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#username DataApkoTags#username}
  */
  readonly username: string;
}

export function dataApkoTagsConfigAccountsUsersToTerraform(struct?: DataApkoTagsConfigAccountsUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gid: cdktf.numberToTerraform(struct!.gid),
    homedir: cdktf.stringToTerraform(struct!.homedir),
    shell: cdktf.stringToTerraform(struct!.shell),
    uid: cdktf.numberToTerraform(struct!.uid),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataApkoTagsConfigAccountsUsersToHclTerraform(struct?: DataApkoTagsConfigAccountsUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gid: {
      value: cdktf.numberToHclTerraform(struct!.gid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    homedir: {
      value: cdktf.stringToHclTerraform(struct!.homedir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shell: {
      value: cdktf.stringToHclTerraform(struct!.shell),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.numberToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataApkoTagsConfigAccountsUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApkoTagsConfigAccountsUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gid !== undefined) {
      hasAnyValues = true;
      internalValueResult.gid = this._gid;
    }
    if (this._homedir !== undefined) {
      hasAnyValues = true;
      internalValueResult.homedir = this._homedir;
    }
    if (this._shell !== undefined) {
      hasAnyValues = true;
      internalValueResult.shell = this._shell;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApkoTagsConfigAccountsUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gid = undefined;
      this._homedir = undefined;
      this._shell = undefined;
      this._uid = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gid = value.gid;
      this._homedir = value.homedir;
      this._shell = value.shell;
      this._uid = value.uid;
      this._username = value.username;
    }
  }

  // gid - computed: false, optional: false, required: true
  private _gid?: number; 
  public get gid() {
    return this.getNumberAttribute('gid');
  }
  public set gid(value: number) {
    this._gid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gidInput() {
    return this._gid;
  }

  // homedir - computed: false, optional: false, required: true
  private _homedir?: string; 
  public get homedir() {
    return this.getStringAttribute('homedir');
  }
  public set homedir(value: string) {
    this._homedir = value;
  }
  // Temporarily expose input value. Use with caution.
  public get homedirInput() {
    return this._homedir;
  }

  // shell - computed: false, optional: false, required: true
  private _shell?: string; 
  public get shell() {
    return this.getStringAttribute('shell');
  }
  public set shell(value: string) {
    this._shell = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shellInput() {
    return this._shell;
  }

  // uid - computed: false, optional: false, required: true
  private _uid?: number; 
  public get uid() {
    return this.getNumberAttribute('uid');
  }
  public set uid(value: number) {
    this._uid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class DataApkoTagsConfigAccountsUsersList extends cdktf.ComplexList {
  public internalValue? : DataApkoTagsConfigAccountsUsers[] | cdktf.IResolvable

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
  public get(index: number): DataApkoTagsConfigAccountsUsersOutputReference {
    return new DataApkoTagsConfigAccountsUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApkoTagsConfigAccounts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#groups DataApkoTags#groups}
  */
  readonly groups: DataApkoTagsConfigAccountsGroups[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#run-as DataApkoTags#run-as}
  */
  readonly runAs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#users DataApkoTags#users}
  */
  readonly users: DataApkoTagsConfigAccountsUsers[] | cdktf.IResolvable;
}

export function dataApkoTagsConfigAccountsToTerraform(struct?: DataApkoTagsConfigAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    groups: cdktf.listMapper(dataApkoTagsConfigAccountsGroupsToTerraform, false)(struct!.groups),
    run-as: cdktf.stringToTerraform(struct!.runAs),
    users: cdktf.listMapper(dataApkoTagsConfigAccountsUsersToTerraform, false)(struct!.users),
  }
}


export function dataApkoTagsConfigAccountsToHclTerraform(struct?: DataApkoTagsConfigAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    groups: {
      value: cdktf.listMapperHcl(dataApkoTagsConfigAccountsGroupsToHclTerraform, false)(struct!.groups),
      isBlock: true,
      type: "list",
      storageClassType: "DataApkoTagsConfigAccountsGroupsList",
    },
    run-as: {
      value: cdktf.stringToHclTerraform(struct!.runAs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    users: {
      value: cdktf.listMapperHcl(dataApkoTagsConfigAccountsUsersToHclTerraform, false)(struct!.users),
      isBlock: true,
      type: "list",
      storageClassType: "DataApkoTagsConfigAccountsUsersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataApkoTagsConfigAccountsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataApkoTagsConfigAccounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups?.internalValue;
    }
    if (this._runAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAs = this._runAs;
    }
    if (this._users?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApkoTagsConfigAccounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groups.internalValue = undefined;
      this._runAs = undefined;
      this._users.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groups.internalValue = value.groups;
      this._runAs = value.runAs;
      this._users.internalValue = value.users;
    }
  }

  // groups - computed: false, optional: false, required: true
  private _groups = new DataApkoTagsConfigAccountsGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: DataApkoTagsConfigAccountsGroups[] | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }

  // run-as - computed: false, optional: false, required: true
  private _runAs?: string; 
  public get runAs() {
    return this.getStringAttribute('run-as');
  }
  public set runAs(value: string) {
    this._runAs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsInput() {
    return this._runAs;
  }

  // users - computed: false, optional: false, required: true
  private _users = new DataApkoTagsConfigAccountsUsersList(this, "users", false);
  public get users() {
    return this._users;
  }
  public putUsers(value: DataApkoTagsConfigAccountsUsers[] | cdktf.IResolvable) {
    this._users.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }
}
export interface DataApkoTagsConfigContents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#build_repositories DataApkoTags#build_repositories}
  */
  readonly buildRepositories: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#keyring DataApkoTags#keyring}
  */
  readonly keyring: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#packages DataApkoTags#packages}
  */
  readonly packages: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#repositories DataApkoTags#repositories}
  */
  readonly repositories: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#runtime_repositories DataApkoTags#runtime_repositories}
  */
  readonly runtimeRepositories: string[];
}

export function dataApkoTagsConfigContentsToTerraform(struct?: DataApkoTagsConfigContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    build_repositories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.buildRepositories),
    keyring: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keyring),
    packages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.packages),
    repositories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.repositories),
    runtime_repositories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.runtimeRepositories),
  }
}


export function dataApkoTagsConfigContentsToHclTerraform(struct?: DataApkoTagsConfigContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    build_repositories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.buildRepositories),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    keyring: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keyring),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    packages: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.packages),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    repositories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.repositories),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    runtime_repositories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.runtimeRepositories),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataApkoTagsConfigContentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataApkoTagsConfigContents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buildRepositories !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildRepositories = this._buildRepositories;
    }
    if (this._keyring !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyring = this._keyring;
    }
    if (this._packages !== undefined) {
      hasAnyValues = true;
      internalValueResult.packages = this._packages;
    }
    if (this._repositories !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositories = this._repositories;
    }
    if (this._runtimeRepositories !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeRepositories = this._runtimeRepositories;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApkoTagsConfigContents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buildRepositories = undefined;
      this._keyring = undefined;
      this._packages = undefined;
      this._repositories = undefined;
      this._runtimeRepositories = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buildRepositories = value.buildRepositories;
      this._keyring = value.keyring;
      this._packages = value.packages;
      this._repositories = value.repositories;
      this._runtimeRepositories = value.runtimeRepositories;
    }
  }

  // build_repositories - computed: false, optional: false, required: true
  private _buildRepositories?: string[]; 
  public get buildRepositories() {
    return this.getListAttribute('build_repositories');
  }
  public set buildRepositories(value: string[]) {
    this._buildRepositories = value;
  }
  // Temporarily expose input value. Use with caution.
  public get buildRepositoriesInput() {
    return this._buildRepositories;
  }

  // keyring - computed: false, optional: false, required: true
  private _keyring?: string[]; 
  public get keyring() {
    return this.getListAttribute('keyring');
  }
  public set keyring(value: string[]) {
    this._keyring = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyringInput() {
    return this._keyring;
  }

  // packages - computed: false, optional: false, required: true
  private _packages?: string[]; 
  public get packages() {
    return this.getListAttribute('packages');
  }
  public set packages(value: string[]) {
    this._packages = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packagesInput() {
    return this._packages;
  }

  // repositories - computed: false, optional: false, required: true
  private _repositories?: string[]; 
  public get repositories() {
    return this.getListAttribute('repositories');
  }
  public set repositories(value: string[]) {
    this._repositories = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoriesInput() {
    return this._repositories;
  }

  // runtime_repositories - computed: false, optional: false, required: true
  private _runtimeRepositories?: string[]; 
  public get runtimeRepositories() {
    return this.getListAttribute('runtime_repositories');
  }
  public set runtimeRepositories(value: string[]) {
    this._runtimeRepositories = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeRepositoriesInput() {
    return this._runtimeRepositories;
  }
}
export interface DataApkoTagsConfigEntrypoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#command DataApkoTags#command}
  */
  readonly command: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#services DataApkoTags#services}
  */
  readonly services: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#shell-fragment DataApkoTags#shell-fragment}
  */
  readonly shellFragment: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#type DataApkoTags#type}
  */
  readonly type: string;
}

export function dataApkoTagsConfigEntrypointToTerraform(struct?: DataApkoTagsConfigEntrypoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.stringToTerraform(struct!.command),
    services: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.services),
    shell-fragment: cdktf.stringToTerraform(struct!.shellFragment),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataApkoTagsConfigEntrypointToHclTerraform(struct?: DataApkoTagsConfigEntrypoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.services),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    shell-fragment: {
      value: cdktf.stringToHclTerraform(struct!.shellFragment),
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

export class DataApkoTagsConfigEntrypointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataApkoTagsConfigEntrypoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    if (this._shellFragment !== undefined) {
      hasAnyValues = true;
      internalValueResult.shellFragment = this._shellFragment;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApkoTagsConfigEntrypoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._services = undefined;
      this._shellFragment = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
      this._services = value.services;
      this._shellFragment = value.shellFragment;
      this._type = value.type;
    }
  }

  // command - computed: false, optional: false, required: true
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // services - computed: false, optional: false, required: true
  private _services?: { [key: string]: string }; 
  public get services() {
    return this.getStringMapAttribute('services');
  }
  public set services(value: { [key: string]: string }) {
    this._services = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }

  // shell-fragment - computed: false, optional: false, required: true
  private _shellFragment?: string; 
  public get shellFragment() {
    return this.getStringAttribute('shell-fragment');
  }
  public set shellFragment(value: string) {
    this._shellFragment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shellFragmentInput() {
    return this._shellFragment;
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
export interface DataApkoTagsConfigLayering {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#budget DataApkoTags#budget}
  */
  readonly budget: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#strategy DataApkoTags#strategy}
  */
  readonly strategy: string;
}

export function dataApkoTagsConfigLayeringToTerraform(struct?: DataApkoTagsConfigLayering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    budget: cdktf.numberToTerraform(struct!.budget),
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function dataApkoTagsConfigLayeringToHclTerraform(struct?: DataApkoTagsConfigLayering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    budget: {
      value: cdktf.numberToHclTerraform(struct!.budget),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataApkoTagsConfigLayeringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataApkoTagsConfigLayering | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._budget !== undefined) {
      hasAnyValues = true;
      internalValueResult.budget = this._budget;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApkoTagsConfigLayering | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._budget = undefined;
      this._strategy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._budget = value.budget;
      this._strategy = value.strategy;
    }
  }

  // budget - computed: false, optional: false, required: true
  private _budget?: number; 
  public get budget() {
    return this.getNumberAttribute('budget');
  }
  public set budget(value: number) {
    this._budget = value;
  }
  // Temporarily expose input value. Use with caution.
  public get budgetInput() {
    return this._budget;
  }

  // strategy - computed: false, optional: false, required: true
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }
}
export interface DataApkoTagsConfigPaths {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#gid DataApkoTags#gid}
  */
  readonly gid: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#path DataApkoTags#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#permissions DataApkoTags#permissions}
  */
  readonly permissions: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#recursive DataApkoTags#recursive}
  */
  readonly recursive: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#source DataApkoTags#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#type DataApkoTags#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#uid DataApkoTags#uid}
  */
  readonly uid: number;
}

export function dataApkoTagsConfigPathsToTerraform(struct?: DataApkoTagsConfigPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gid: cdktf.numberToTerraform(struct!.gid),
    path: cdktf.stringToTerraform(struct!.path),
    permissions: cdktf.numberToTerraform(struct!.permissions),
    recursive: cdktf.booleanToTerraform(struct!.recursive),
    source: cdktf.stringToTerraform(struct!.source),
    type: cdktf.stringToTerraform(struct!.type),
    uid: cdktf.numberToTerraform(struct!.uid),
  }
}


export function dataApkoTagsConfigPathsToHclTerraform(struct?: DataApkoTagsConfigPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gid: {
      value: cdktf.numberToHclTerraform(struct!.gid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permissions: {
      value: cdktf.numberToHclTerraform(struct!.permissions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recursive: {
      value: cdktf.booleanToHclTerraform(struct!.recursive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
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
      value: cdktf.numberToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataApkoTagsConfigPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApkoTagsConfigPaths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gid !== undefined) {
      hasAnyValues = true;
      internalValueResult.gid = this._gid;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    if (this._recursive !== undefined) {
      hasAnyValues = true;
      internalValueResult.recursive = this._recursive;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApkoTagsConfigPaths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gid = undefined;
      this._path = undefined;
      this._permissions = undefined;
      this._recursive = undefined;
      this._source = undefined;
      this._type = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gid = value.gid;
      this._path = value.path;
      this._permissions = value.permissions;
      this._recursive = value.recursive;
      this._source = value.source;
      this._type = value.type;
      this._uid = value.uid;
    }
  }

  // gid - computed: false, optional: false, required: true
  private _gid?: number; 
  public get gid() {
    return this.getNumberAttribute('gid');
  }
  public set gid(value: number) {
    this._gid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gidInput() {
    return this._gid;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // permissions - computed: false, optional: false, required: true
  private _permissions?: number; 
  public get permissions() {
    return this.getNumberAttribute('permissions');
  }
  public set permissions(value: number) {
    this._permissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // recursive - computed: false, optional: false, required: true
  private _recursive?: boolean | cdktf.IResolvable; 
  public get recursive() {
    return this.getBooleanAttribute('recursive');
  }
  public set recursive(value: boolean | cdktf.IResolvable) {
    this._recursive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveInput() {
    return this._recursive;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
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

  // uid - computed: false, optional: false, required: true
  private _uid?: number; 
  public get uid() {
    return this.getNumberAttribute('uid');
  }
  public set uid(value: number) {
    this._uid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}

export class DataApkoTagsConfigPathsList extends cdktf.ComplexList {
  public internalValue? : DataApkoTagsConfigPaths[] | cdktf.IResolvable

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
  public get(index: number): DataApkoTagsConfigPathsOutputReference {
    return new DataApkoTagsConfigPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApkoTagsConfigA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#accounts DataApkoTags#accounts}
  */
  readonly accounts: DataApkoTagsConfigAccounts;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#annotations DataApkoTags#annotations}
  */
  readonly annotations: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#archs DataApkoTags#archs}
  */
  readonly archs: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#cmd DataApkoTags#cmd}
  */
  readonly cmd: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#contents DataApkoTags#contents}
  */
  readonly contents: DataApkoTagsConfigContents;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#entrypoint DataApkoTags#entrypoint}
  */
  readonly entrypoint: DataApkoTagsConfigEntrypoint;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#environment DataApkoTags#environment}
  */
  readonly environment: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#include DataApkoTags#include}
  */
  readonly include: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#layering DataApkoTags#layering}
  */
  readonly layering: DataApkoTagsConfigLayering;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#paths DataApkoTags#paths}
  */
  readonly paths: DataApkoTagsConfigPaths[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#stop-signal DataApkoTags#stop-signal}
  */
  readonly stopSignal: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#vcs-url DataApkoTags#vcs-url}
  */
  readonly vcsUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#volumes DataApkoTags#volumes}
  */
  readonly volumes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#work-dir DataApkoTags#work-dir}
  */
  readonly workDir: string;
}

export function dataApkoTagsConfigAToTerraform(struct?: DataApkoTagsConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accounts: dataApkoTagsConfigAccountsToTerraform(struct!.accounts),
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    archs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.archs),
    cmd: cdktf.stringToTerraform(struct!.cmd),
    contents: dataApkoTagsConfigContentsToTerraform(struct!.contents),
    entrypoint: dataApkoTagsConfigEntrypointToTerraform(struct!.entrypoint),
    environment: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environment),
    include: cdktf.stringToTerraform(struct!.include),
    layering: dataApkoTagsConfigLayeringToTerraform(struct!.layering),
    paths: cdktf.listMapper(dataApkoTagsConfigPathsToTerraform, false)(struct!.paths),
    stop-signal: cdktf.stringToTerraform(struct!.stopSignal),
    vcs-url: cdktf.stringToTerraform(struct!.vcsUrl),
    volumes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.volumes),
    work-dir: cdktf.stringToTerraform(struct!.workDir),
  }
}


export function dataApkoTagsConfigAToHclTerraform(struct?: DataApkoTagsConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accounts: {
      value: dataApkoTagsConfigAccountsToHclTerraform(struct!.accounts),
      isBlock: true,
      type: "struct",
      storageClassType: "DataApkoTagsConfigAccounts",
    },
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    archs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.archs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cmd: {
      value: cdktf.stringToHclTerraform(struct!.cmd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    contents: {
      value: dataApkoTagsConfigContentsToHclTerraform(struct!.contents),
      isBlock: true,
      type: "struct",
      storageClassType: "DataApkoTagsConfigContents",
    },
    entrypoint: {
      value: dataApkoTagsConfigEntrypointToHclTerraform(struct!.entrypoint),
      isBlock: true,
      type: "struct",
      storageClassType: "DataApkoTagsConfigEntrypoint",
    },
    environment: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.environment),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    include: {
      value: cdktf.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    layering: {
      value: dataApkoTagsConfigLayeringToHclTerraform(struct!.layering),
      isBlock: true,
      type: "struct",
      storageClassType: "DataApkoTagsConfigLayering",
    },
    paths: {
      value: cdktf.listMapperHcl(dataApkoTagsConfigPathsToHclTerraform, false)(struct!.paths),
      isBlock: true,
      type: "list",
      storageClassType: "DataApkoTagsConfigPathsList",
    },
    stop-signal: {
      value: cdktf.stringToHclTerraform(struct!.stopSignal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vcs-url: {
      value: cdktf.stringToHclTerraform(struct!.vcsUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volumes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.volumes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    work-dir: {
      value: cdktf.stringToHclTerraform(struct!.workDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataApkoTagsConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataApkoTagsConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accounts = this._accounts?.internalValue;
    }
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._archs !== undefined) {
      hasAnyValues = true;
      internalValueResult.archs = this._archs;
    }
    if (this._cmd !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmd = this._cmd;
    }
    if (this._contents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contents = this._contents?.internalValue;
    }
    if (this._entrypoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entrypoint = this._entrypoint?.internalValue;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._layering?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.layering = this._layering?.internalValue;
    }
    if (this._paths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths?.internalValue;
    }
    if (this._stopSignal !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopSignal = this._stopSignal;
    }
    if (this._vcsUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcsUrl = this._vcsUrl;
    }
    if (this._volumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes;
    }
    if (this._workDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.workDir = this._workDir;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApkoTagsConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accounts.internalValue = undefined;
      this._annotations = undefined;
      this._archs = undefined;
      this._cmd = undefined;
      this._contents.internalValue = undefined;
      this._entrypoint.internalValue = undefined;
      this._environment = undefined;
      this._include = undefined;
      this._layering.internalValue = undefined;
      this._paths.internalValue = undefined;
      this._stopSignal = undefined;
      this._vcsUrl = undefined;
      this._volumes = undefined;
      this._workDir = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accounts.internalValue = value.accounts;
      this._annotations = value.annotations;
      this._archs = value.archs;
      this._cmd = value.cmd;
      this._contents.internalValue = value.contents;
      this._entrypoint.internalValue = value.entrypoint;
      this._environment = value.environment;
      this._include = value.include;
      this._layering.internalValue = value.layering;
      this._paths.internalValue = value.paths;
      this._stopSignal = value.stopSignal;
      this._vcsUrl = value.vcsUrl;
      this._volumes = value.volumes;
      this._workDir = value.workDir;
    }
  }

  // accounts - computed: false, optional: false, required: true
  private _accounts = new DataApkoTagsConfigAccountsOutputReference(this, "accounts");
  public get accounts() {
    return this._accounts;
  }
  public putAccounts(value: DataApkoTagsConfigAccounts) {
    this._accounts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountsInput() {
    return this._accounts.internalValue;
  }

  // annotations - computed: false, optional: false, required: true
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // archs - computed: false, optional: false, required: true
  private _archs?: string[]; 
  public get archs() {
    return this.getListAttribute('archs');
  }
  public set archs(value: string[]) {
    this._archs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get archsInput() {
    return this._archs;
  }

  // cmd - computed: false, optional: false, required: true
  private _cmd?: string; 
  public get cmd() {
    return this.getStringAttribute('cmd');
  }
  public set cmd(value: string) {
    this._cmd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdInput() {
    return this._cmd;
  }

  // contents - computed: false, optional: false, required: true
  private _contents = new DataApkoTagsConfigContentsOutputReference(this, "contents");
  public get contents() {
    return this._contents;
  }
  public putContents(value: DataApkoTagsConfigContents) {
    this._contents.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentsInput() {
    return this._contents.internalValue;
  }

  // entrypoint - computed: false, optional: false, required: true
  private _entrypoint = new DataApkoTagsConfigEntrypointOutputReference(this, "entrypoint");
  public get entrypoint() {
    return this._entrypoint;
  }
  public putEntrypoint(value: DataApkoTagsConfigEntrypoint) {
    this._entrypoint.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entrypointInput() {
    return this._entrypoint.internalValue;
  }

  // environment - computed: false, optional: false, required: true
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // include - computed: false, optional: false, required: true
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // layering - computed: false, optional: false, required: true
  private _layering = new DataApkoTagsConfigLayeringOutputReference(this, "layering");
  public get layering() {
    return this._layering;
  }
  public putLayering(value: DataApkoTagsConfigLayering) {
    this._layering.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get layeringInput() {
    return this._layering.internalValue;
  }

  // paths - computed: false, optional: false, required: true
  private _paths = new DataApkoTagsConfigPathsList(this, "paths", false);
  public get paths() {
    return this._paths;
  }
  public putPaths(value: DataApkoTagsConfigPaths[] | cdktf.IResolvable) {
    this._paths.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths.internalValue;
  }

  // stop-signal - computed: false, optional: false, required: true
  private _stopSignal?: string; 
  public get stopSignal() {
    return this.getStringAttribute('stop-signal');
  }
  public set stopSignal(value: string) {
    this._stopSignal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stopSignalInput() {
    return this._stopSignal;
  }

  // vcs-url - computed: false, optional: false, required: true
  private _vcsUrl?: string; 
  public get vcsUrl() {
    return this.getStringAttribute('vcs-url');
  }
  public set vcsUrl(value: string) {
    this._vcsUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcsUrlInput() {
    return this._vcsUrl;
  }

  // volumes - computed: false, optional: false, required: true
  private _volumes?: string[]; 
  public get volumes() {
    return this.getListAttribute('volumes');
  }
  public set volumes(value: string[]) {
    this._volumes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes;
  }

  // work-dir - computed: false, optional: false, required: true
  private _workDir?: string; 
  public get workDir() {
    return this.getStringAttribute('work-dir');
  }
  public set workDir(value: string) {
    this._workDir = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workDirInput() {
    return this._workDir;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags apko_tags}
*/
export class DataApkoTags extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apko_tags";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApkoTags resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApkoTags to import
  * @param importFromId The id of the existing DataApkoTags that should be imported. Refer to the {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApkoTags to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apko_tags", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.28/docs/data-sources/tags apko_tags} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApkoTagsConfig
  */
  public constructor(scope: Construct, id: string, config: DataApkoTagsConfig) {
    super(scope, id, {
      terraformResourceType: 'apko_tags',
      terraformGeneratorMetadata: {
        providerName: 'apko',
        providerVersion: '0.30.28',
        providerVersionConstraint: '0.30.28'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._config.internalValue = config.config;
    this._targetPackage = config.targetPackage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: false, optional: false, required: true
  private _config = new DataApkoTagsConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataApkoTagsConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // target_package - computed: false, optional: false, required: true
  private _targetPackage?: string; 
  public get targetPackage() {
    return this.getStringAttribute('target_package');
  }
  public set targetPackage(value: string) {
    this._targetPackage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPackageInput() {
    return this._targetPackage;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: dataApkoTagsConfigAToTerraform(this._config.internalValue),
      target_package: cdktf.stringToTerraform(this._targetPackage),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: dataApkoTagsConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataApkoTagsConfigA",
      },
      target_package: {
        value: cdktf.stringToHclTerraform(this._targetPackage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
