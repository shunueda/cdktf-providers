// https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BuildConfig extends cdktf.TerraformMetaArguments {
  /**
  * The parsed structure of the apko configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#config Build#config}
  */
  readonly config: BuildConfigA;
  /**
  * A map from the APK architecture to the config for that architecture.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#configs Build#configs}
  */
  readonly configs?: { [key: string]: BuildConfigs } | cdktf.IResolvable;
  /**
  * The name of the container repository to which we should publish the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#repo Build#repo}
  */
  readonly repo: string;
  /**
  * A map from the APK architecture to the digest for that architecture and its SBOM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#sboms Build#sboms}
  */
  readonly sboms?: { [key: string]: BuildSboms } | cdktf.IResolvable;
}
export interface BuildConfigAccountsGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#gid Build#gid}
  */
  readonly gid: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#groupname Build#groupname}
  */
  readonly groupname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#members Build#members}
  */
  readonly members: string[];
}

export function buildConfigAccountsGroupsToTerraform(struct?: BuildConfigAccountsGroups | cdktf.IResolvable): any {
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


export function buildConfigAccountsGroupsToHclTerraform(struct?: BuildConfigAccountsGroups | cdktf.IResolvable): any {
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

export class BuildConfigAccountsGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BuildConfigAccountsGroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BuildConfigAccountsGroups | cdktf.IResolvable | undefined) {
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

export class BuildConfigAccountsGroupsList extends cdktf.ComplexList {
  public internalValue? : BuildConfigAccountsGroups[] | cdktf.IResolvable

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
  public get(index: number): BuildConfigAccountsGroupsOutputReference {
    return new BuildConfigAccountsGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BuildConfigAccountsUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#gid Build#gid}
  */
  readonly gid: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#homedir Build#homedir}
  */
  readonly homedir: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#shell Build#shell}
  */
  readonly shell: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#uid Build#uid}
  */
  readonly uid: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#username Build#username}
  */
  readonly username: string;
}

export function buildConfigAccountsUsersToTerraform(struct?: BuildConfigAccountsUsers | cdktf.IResolvable): any {
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


export function buildConfigAccountsUsersToHclTerraform(struct?: BuildConfigAccountsUsers | cdktf.IResolvable): any {
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

export class BuildConfigAccountsUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BuildConfigAccountsUsers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BuildConfigAccountsUsers | cdktf.IResolvable | undefined) {
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

export class BuildConfigAccountsUsersList extends cdktf.ComplexList {
  public internalValue? : BuildConfigAccountsUsers[] | cdktf.IResolvable

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
  public get(index: number): BuildConfigAccountsUsersOutputReference {
    return new BuildConfigAccountsUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BuildConfigAccounts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#groups Build#groups}
  */
  readonly groups: BuildConfigAccountsGroups[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#run-as Build#run-as}
  */
  readonly runAs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#users Build#users}
  */
  readonly users: BuildConfigAccountsUsers[] | cdktf.IResolvable;
}

export function buildConfigAccountsToTerraform(struct?: BuildConfigAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    groups: cdktf.listMapper(buildConfigAccountsGroupsToTerraform, false)(struct!.groups),
    run-as: cdktf.stringToTerraform(struct!.runAs),
    users: cdktf.listMapper(buildConfigAccountsUsersToTerraform, false)(struct!.users),
  }
}


export function buildConfigAccountsToHclTerraform(struct?: BuildConfigAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    groups: {
      value: cdktf.listMapperHcl(buildConfigAccountsGroupsToHclTerraform, false)(struct!.groups),
      isBlock: true,
      type: "list",
      storageClassType: "BuildConfigAccountsGroupsList",
    },
    run-as: {
      value: cdktf.stringToHclTerraform(struct!.runAs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    users: {
      value: cdktf.listMapperHcl(buildConfigAccountsUsersToHclTerraform, false)(struct!.users),
      isBlock: true,
      type: "list",
      storageClassType: "BuildConfigAccountsUsersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BuildConfigAccountsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BuildConfigAccounts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BuildConfigAccounts | cdktf.IResolvable | undefined) {
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
  private _groups = new BuildConfigAccountsGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: BuildConfigAccountsGroups[] | cdktf.IResolvable) {
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
  private _users = new BuildConfigAccountsUsersList(this, "users", false);
  public get users() {
    return this._users;
  }
  public putUsers(value: BuildConfigAccountsUsers[] | cdktf.IResolvable) {
    this._users.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }
}
export interface BuildConfigContents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#build_repositories Build#build_repositories}
  */
  readonly buildRepositories: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#keyring Build#keyring}
  */
  readonly keyring: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#packages Build#packages}
  */
  readonly packages: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#repositories Build#repositories}
  */
  readonly repositories: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#runtime_repositories Build#runtime_repositories}
  */
  readonly runtimeRepositories: string[];
}

export function buildConfigContentsToTerraform(struct?: BuildConfigContents | cdktf.IResolvable): any {
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


export function buildConfigContentsToHclTerraform(struct?: BuildConfigContents | cdktf.IResolvable): any {
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

export class BuildConfigContentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BuildConfigContents | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BuildConfigContents | cdktf.IResolvable | undefined) {
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
export interface BuildConfigEntrypoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#command Build#command}
  */
  readonly command: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#services Build#services}
  */
  readonly services: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#shell-fragment Build#shell-fragment}
  */
  readonly shellFragment: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#type Build#type}
  */
  readonly type: string;
}

export function buildConfigEntrypointToTerraform(struct?: BuildConfigEntrypoint | cdktf.IResolvable): any {
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


export function buildConfigEntrypointToHclTerraform(struct?: BuildConfigEntrypoint | cdktf.IResolvable): any {
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

export class BuildConfigEntrypointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BuildConfigEntrypoint | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BuildConfigEntrypoint | cdktf.IResolvable | undefined) {
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
export interface BuildConfigLayering {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#budget Build#budget}
  */
  readonly budget: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#strategy Build#strategy}
  */
  readonly strategy: string;
}

export function buildConfigLayeringToTerraform(struct?: BuildConfigLayering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    budget: cdktf.numberToTerraform(struct!.budget),
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function buildConfigLayeringToHclTerraform(struct?: BuildConfigLayering | cdktf.IResolvable): any {
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

export class BuildConfigLayeringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BuildConfigLayering | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BuildConfigLayering | cdktf.IResolvable | undefined) {
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
export interface BuildConfigPaths {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#gid Build#gid}
  */
  readonly gid: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#path Build#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#permissions Build#permissions}
  */
  readonly permissions: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#recursive Build#recursive}
  */
  readonly recursive: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#source Build#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#type Build#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#uid Build#uid}
  */
  readonly uid: number;
}

export function buildConfigPathsToTerraform(struct?: BuildConfigPaths | cdktf.IResolvable): any {
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


export function buildConfigPathsToHclTerraform(struct?: BuildConfigPaths | cdktf.IResolvable): any {
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

export class BuildConfigPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BuildConfigPaths | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BuildConfigPaths | cdktf.IResolvable | undefined) {
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

export class BuildConfigPathsList extends cdktf.ComplexList {
  public internalValue? : BuildConfigPaths[] | cdktf.IResolvable

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
  public get(index: number): BuildConfigPathsOutputReference {
    return new BuildConfigPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BuildConfigA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#accounts Build#accounts}
  */
  readonly accounts: BuildConfigAccounts;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#annotations Build#annotations}
  */
  readonly annotations: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#archs Build#archs}
  */
  readonly archs: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#cmd Build#cmd}
  */
  readonly cmd: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#contents Build#contents}
  */
  readonly contents: BuildConfigContents;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#entrypoint Build#entrypoint}
  */
  readonly entrypoint: BuildConfigEntrypoint;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#environment Build#environment}
  */
  readonly environment: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#include Build#include}
  */
  readonly include: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#layering Build#layering}
  */
  readonly layering: BuildConfigLayering;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#paths Build#paths}
  */
  readonly paths: BuildConfigPaths[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#stop-signal Build#stop-signal}
  */
  readonly stopSignal: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#vcs-url Build#vcs-url}
  */
  readonly vcsUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#volumes Build#volumes}
  */
  readonly volumes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#work-dir Build#work-dir}
  */
  readonly workDir: string;
}

export function buildConfigAToTerraform(struct?: BuildConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accounts: buildConfigAccountsToTerraform(struct!.accounts),
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    archs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.archs),
    cmd: cdktf.stringToTerraform(struct!.cmd),
    contents: buildConfigContentsToTerraform(struct!.contents),
    entrypoint: buildConfigEntrypointToTerraform(struct!.entrypoint),
    environment: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environment),
    include: cdktf.stringToTerraform(struct!.include),
    layering: buildConfigLayeringToTerraform(struct!.layering),
    paths: cdktf.listMapper(buildConfigPathsToTerraform, false)(struct!.paths),
    stop-signal: cdktf.stringToTerraform(struct!.stopSignal),
    vcs-url: cdktf.stringToTerraform(struct!.vcsUrl),
    volumes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.volumes),
    work-dir: cdktf.stringToTerraform(struct!.workDir),
  }
}


export function buildConfigAToHclTerraform(struct?: BuildConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accounts: {
      value: buildConfigAccountsToHclTerraform(struct!.accounts),
      isBlock: true,
      type: "struct",
      storageClassType: "BuildConfigAccounts",
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
      value: buildConfigContentsToHclTerraform(struct!.contents),
      isBlock: true,
      type: "struct",
      storageClassType: "BuildConfigContents",
    },
    entrypoint: {
      value: buildConfigEntrypointToHclTerraform(struct!.entrypoint),
      isBlock: true,
      type: "struct",
      storageClassType: "BuildConfigEntrypoint",
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
      value: buildConfigLayeringToHclTerraform(struct!.layering),
      isBlock: true,
      type: "struct",
      storageClassType: "BuildConfigLayering",
    },
    paths: {
      value: cdktf.listMapperHcl(buildConfigPathsToHclTerraform, false)(struct!.paths),
      isBlock: true,
      type: "list",
      storageClassType: "BuildConfigPathsList",
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

export class BuildConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BuildConfigA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BuildConfigA | cdktf.IResolvable | undefined) {
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
  private _accounts = new BuildConfigAccountsOutputReference(this, "accounts");
  public get accounts() {
    return this._accounts;
  }
  public putAccounts(value: BuildConfigAccounts) {
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
  private _contents = new BuildConfigContentsOutputReference(this, "contents");
  public get contents() {
    return this._contents;
  }
  public putContents(value: BuildConfigContents) {
    this._contents.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentsInput() {
    return this._contents.internalValue;
  }

  // entrypoint - computed: false, optional: false, required: true
  private _entrypoint = new BuildConfigEntrypointOutputReference(this, "entrypoint");
  public get entrypoint() {
    return this._entrypoint;
  }
  public putEntrypoint(value: BuildConfigEntrypoint) {
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
  private _layering = new BuildConfigLayeringOutputReference(this, "layering");
  public get layering() {
    return this._layering;
  }
  public putLayering(value: BuildConfigLayering) {
    this._layering.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get layeringInput() {
    return this._layering.internalValue;
  }

  // paths - computed: false, optional: false, required: true
  private _paths = new BuildConfigPathsList(this, "paths", false);
  public get paths() {
    return this._paths;
  }
  public putPaths(value: BuildConfigPaths[] | cdktf.IResolvable) {
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
export interface BuildConfigsConfigAccountsGroups {
}

export function buildConfigsConfigAccountsGroupsToTerraform(struct?: BuildConfigsConfigAccountsGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function buildConfigsConfigAccountsGroupsToHclTerraform(struct?: BuildConfigsConfigAccountsGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BuildConfigsConfigAccountsGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BuildConfigsConfigAccountsGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BuildConfigsConfigAccountsGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // gid - computed: false, optional: false, required: false
  public get gid() {
    return this.getNumberAttribute('gid');
  }

  // groupname - computed: false, optional: false, required: false
  public get groupname() {
    return this.getStringAttribute('groupname');
  }

  // members - computed: false, optional: false, required: false
  public get members() {
    return this.getListAttribute('members');
  }
}

export class BuildConfigsConfigAccountsGroupsList extends cdktf.ComplexList {
  public internalValue? : BuildConfigsConfigAccountsGroups[] | cdktf.IResolvable

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
  public get(index: number): BuildConfigsConfigAccountsGroupsOutputReference {
    return new BuildConfigsConfigAccountsGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BuildConfigsConfigAccountsUsers {
}

export function buildConfigsConfigAccountsUsersToTerraform(struct?: BuildConfigsConfigAccountsUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function buildConfigsConfigAccountsUsersToHclTerraform(struct?: BuildConfigsConfigAccountsUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BuildConfigsConfigAccountsUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BuildConfigsConfigAccountsUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BuildConfigsConfigAccountsUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // gid - computed: false, optional: false, required: false
  public get gid() {
    return this.getNumberAttribute('gid');
  }

  // homedir - computed: false, optional: false, required: false
  public get homedir() {
    return this.getStringAttribute('homedir');
  }

  // shell - computed: false, optional: false, required: false
  public get shell() {
    return this.getStringAttribute('shell');
  }

  // uid - computed: false, optional: false, required: false
  public get uid() {
    return this.getNumberAttribute('uid');
  }

  // username - computed: false, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class BuildConfigsConfigAccountsUsersList extends cdktf.ComplexList {
  public internalValue? : BuildConfigsConfigAccountsUsers[] | cdktf.IResolvable

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
  public get(index: number): BuildConfigsConfigAccountsUsersOutputReference {
    return new BuildConfigsConfigAccountsUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BuildConfigsConfigAccounts {
}

export function buildConfigsConfigAccountsToTerraform(struct?: BuildConfigsConfigAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function buildConfigsConfigAccountsToHclTerraform(struct?: BuildConfigsConfigAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BuildConfigsConfigAccountsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BuildConfigsConfigAccounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BuildConfigsConfigAccounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // groups - computed: false, optional: false, required: false
  private _groups = new BuildConfigsConfigAccountsGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }

  // run-as - computed: false, optional: false, required: false
  public get runAs() {
    return this.getStringAttribute('run-as');
  }

  // users - computed: false, optional: false, required: false
  private _users = new BuildConfigsConfigAccountsUsersList(this, "users", false);
  public get users() {
    return this._users;
  }
}
export interface BuildConfigsConfigContents {
}

export function buildConfigsConfigContentsToTerraform(struct?: BuildConfigsConfigContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function buildConfigsConfigContentsToHclTerraform(struct?: BuildConfigsConfigContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BuildConfigsConfigContentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BuildConfigsConfigContents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BuildConfigsConfigContents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // build_repositories - computed: false, optional: false, required: false
  public get buildRepositories() {
    return this.getListAttribute('build_repositories');
  }

  // keyring - computed: false, optional: false, required: false
  public get keyring() {
    return this.getListAttribute('keyring');
  }

  // packages - computed: false, optional: false, required: false
  public get packages() {
    return this.getListAttribute('packages');
  }

  // repositories - computed: false, optional: false, required: false
  public get repositories() {
    return this.getListAttribute('repositories');
  }

  // runtime_repositories - computed: false, optional: false, required: false
  public get runtimeRepositories() {
    return this.getListAttribute('runtime_repositories');
  }
}
export interface BuildConfigsConfigEntrypoint {
}

export function buildConfigsConfigEntrypointToTerraform(struct?: BuildConfigsConfigEntrypoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function buildConfigsConfigEntrypointToHclTerraform(struct?: BuildConfigsConfigEntrypoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BuildConfigsConfigEntrypointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BuildConfigsConfigEntrypoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BuildConfigsConfigEntrypoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // command - computed: false, optional: false, required: false
  public get command() {
    return this.getStringAttribute('command');
  }

  // services - computed: false, optional: false, required: false
  public get services() {
    return this.getStringMapAttribute('services');
  }

  // shell-fragment - computed: false, optional: false, required: false
  public get shellFragment() {
    return this.getStringAttribute('shell-fragment');
  }

  // type - computed: false, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface BuildConfigsConfigLayering {
}

export function buildConfigsConfigLayeringToTerraform(struct?: BuildConfigsConfigLayering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function buildConfigsConfigLayeringToHclTerraform(struct?: BuildConfigsConfigLayering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BuildConfigsConfigLayeringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BuildConfigsConfigLayering | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BuildConfigsConfigLayering | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // budget - computed: false, optional: false, required: false
  public get budget() {
    return this.getNumberAttribute('budget');
  }

  // strategy - computed: false, optional: false, required: false
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
}
export interface BuildConfigsConfigPaths {
}

export function buildConfigsConfigPathsToTerraform(struct?: BuildConfigsConfigPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function buildConfigsConfigPathsToHclTerraform(struct?: BuildConfigsConfigPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BuildConfigsConfigPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BuildConfigsConfigPaths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BuildConfigsConfigPaths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // gid - computed: false, optional: false, required: false
  public get gid() {
    return this.getNumberAttribute('gid');
  }

  // path - computed: false, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // permissions - computed: false, optional: false, required: false
  public get permissions() {
    return this.getNumberAttribute('permissions');
  }

  // recursive - computed: false, optional: false, required: false
  public get recursive() {
    return this.getBooleanAttribute('recursive');
  }

  // source - computed: false, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // type - computed: false, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uid - computed: false, optional: false, required: false
  public get uid() {
    return this.getNumberAttribute('uid');
  }
}

export class BuildConfigsConfigPathsList extends cdktf.ComplexList {
  public internalValue? : BuildConfigsConfigPaths[] | cdktf.IResolvable

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
  public get(index: number): BuildConfigsConfigPathsOutputReference {
    return new BuildConfigsConfigPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BuildConfigsConfig {
}

export function buildConfigsConfigToTerraform(struct?: BuildConfigsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function buildConfigsConfigToHclTerraform(struct?: BuildConfigsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BuildConfigsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BuildConfigsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BuildConfigsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // accounts - computed: false, optional: false, required: false
  private _accounts = new BuildConfigsConfigAccountsOutputReference(this, "accounts");
  public get accounts() {
    return this._accounts;
  }

  // annotations - computed: false, optional: false, required: false
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }

  // archs - computed: false, optional: false, required: false
  public get archs() {
    return this.getListAttribute('archs');
  }

  // cmd - computed: false, optional: false, required: false
  public get cmd() {
    return this.getStringAttribute('cmd');
  }

  // contents - computed: false, optional: false, required: false
  private _contents = new BuildConfigsConfigContentsOutputReference(this, "contents");
  public get contents() {
    return this._contents;
  }

  // entrypoint - computed: false, optional: false, required: false
  private _entrypoint = new BuildConfigsConfigEntrypointOutputReference(this, "entrypoint");
  public get entrypoint() {
    return this._entrypoint;
  }

  // environment - computed: false, optional: false, required: false
  public get environment() {
    return this.getStringMapAttribute('environment');
  }

  // include - computed: false, optional: false, required: false
  public get include() {
    return this.getStringAttribute('include');
  }

  // layering - computed: false, optional: false, required: false
  private _layering = new BuildConfigsConfigLayeringOutputReference(this, "layering");
  public get layering() {
    return this._layering;
  }

  // paths - computed: false, optional: false, required: false
  private _paths = new BuildConfigsConfigPathsList(this, "paths", false);
  public get paths() {
    return this._paths;
  }

  // stop-signal - computed: false, optional: false, required: false
  public get stopSignal() {
    return this.getStringAttribute('stop-signal');
  }

  // vcs-url - computed: false, optional: false, required: false
  public get vcsUrl() {
    return this.getStringAttribute('vcs-url');
  }

  // volumes - computed: false, optional: false, required: false
  public get volumes() {
    return this.getListAttribute('volumes');
  }

  // work-dir - computed: false, optional: false, required: false
  public get workDir() {
    return this.getStringAttribute('work-dir');
  }
}
export interface BuildConfigs {
  /**
  * The parsed structure of the apko configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#config Build#config}
  */
  readonly config: BuildConfigsConfig;
}

export function buildConfigsToTerraform(struct?: BuildConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: buildConfigsConfigToTerraform(struct!.config),
  }
}


export function buildConfigsToHclTerraform(struct?: BuildConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: buildConfigsConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "BuildConfigsConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BuildConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): BuildConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BuildConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config.internalValue = value.config;
    }
  }

  // config - computed: false, optional: false, required: true
  private _config = new BuildConfigsConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: BuildConfigsConfig) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}

export class BuildConfigsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: BuildConfigs } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): BuildConfigsOutputReference {
    return new BuildConfigsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface BuildSboms {
  /**
  * The digest of the index or image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#digest Build#digest}
  */
  readonly digest?: string;
  /**
  * The path to the SBOM contents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#predicate_path Build#predicate_path}
  */
  readonly predicatePath?: string;
  /**
  * The hex-encoded SHA256 hash of the SBOM contents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#predicate_sha256 Build#predicate_sha256}
  */
  readonly predicateSha256?: string;
  /**
  * The predicate type of the SBOM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#predicate_type Build#predicate_type}
  */
  readonly predicateType?: string;
}

export function buildSbomsToTerraform(struct?: BuildSboms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digest: cdktf.stringToTerraform(struct!.digest),
    predicate_path: cdktf.stringToTerraform(struct!.predicatePath),
    predicate_sha256: cdktf.stringToTerraform(struct!.predicateSha256),
    predicate_type: cdktf.stringToTerraform(struct!.predicateType),
  }
}


export function buildSbomsToHclTerraform(struct?: BuildSboms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    digest: {
      value: cdktf.stringToHclTerraform(struct!.digest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    predicate_path: {
      value: cdktf.stringToHclTerraform(struct!.predicatePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    predicate_sha256: {
      value: cdktf.stringToHclTerraform(struct!.predicateSha256),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    predicate_type: {
      value: cdktf.stringToHclTerraform(struct!.predicateType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BuildSbomsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): BuildSboms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digest !== undefined) {
      hasAnyValues = true;
      internalValueResult.digest = this._digest;
    }
    if (this._predicatePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.predicatePath = this._predicatePath;
    }
    if (this._predicateSha256 !== undefined) {
      hasAnyValues = true;
      internalValueResult.predicateSha256 = this._predicateSha256;
    }
    if (this._predicateType !== undefined) {
      hasAnyValues = true;
      internalValueResult.predicateType = this._predicateType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BuildSboms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._digest = undefined;
      this._predicatePath = undefined;
      this._predicateSha256 = undefined;
      this._predicateType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._digest = value.digest;
      this._predicatePath = value.predicatePath;
      this._predicateSha256 = value.predicateSha256;
      this._predicateType = value.predicateType;
    }
  }

  // digest - computed: true, optional: true, required: false
  private _digest?: string; 
  public get digest() {
    return this.getStringAttribute('digest');
  }
  public set digest(value: string) {
    this._digest = value;
  }
  public resetDigest() {
    this._digest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestInput() {
    return this._digest;
  }

  // predicate_path - computed: true, optional: true, required: false
  private _predicatePath?: string; 
  public get predicatePath() {
    return this.getStringAttribute('predicate_path');
  }
  public set predicatePath(value: string) {
    this._predicatePath = value;
  }
  public resetPredicatePath() {
    this._predicatePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predicatePathInput() {
    return this._predicatePath;
  }

  // predicate_sha256 - computed: true, optional: true, required: false
  private _predicateSha256?: string; 
  public get predicateSha256() {
    return this.getStringAttribute('predicate_sha256');
  }
  public set predicateSha256(value: string) {
    this._predicateSha256 = value;
  }
  public resetPredicateSha256() {
    this._predicateSha256 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predicateSha256Input() {
    return this._predicateSha256;
  }

  // predicate_type - computed: true, optional: true, required: false
  private _predicateType?: string; 
  public get predicateType() {
    return this.getStringAttribute('predicate_type');
  }
  public set predicateType(value: string) {
    this._predicateType = value;
  }
  public resetPredicateType() {
    this._predicateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predicateTypeInput() {
    return this._predicateType;
  }
}

export class BuildSbomsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: BuildSboms } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): BuildSbomsOutputReference {
    return new BuildSbomsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build apko_build}
*/
export class Build extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apko_build";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Build resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Build to import
  * @param importFromId The id of the existing Build that should be imported. Refer to the {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Build to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apko_build", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.30/docs/resources/build apko_build} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BuildConfig
  */
  public constructor(scope: Construct, id: string, config: BuildConfig) {
    super(scope, id, {
      terraformResourceType: 'apko_build',
      terraformGeneratorMetadata: {
        providerName: 'apko',
        providerVersion: '0.30.30',
        providerVersionConstraint: '0.30.30'
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
    this._configs.internalValue = config.configs;
    this._repo = config.repo;
    this._sboms.internalValue = config.sboms;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: false, optional: false, required: true
  private _config = new BuildConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: BuildConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // configs - computed: false, optional: true, required: false
  private _configs = new BuildConfigsMap(this, "configs");
  public get configs() {
    return this._configs;
  }
  public putConfigs(value: { [key: string]: BuildConfigs } | cdktf.IResolvable) {
    this._configs.internalValue = value;
  }
  public resetConfigs() {
    this._configs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configsInput() {
    return this._configs.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_ref - computed: true, optional: false, required: false
  public get imageRef() {
    return this.getStringAttribute('image_ref');
  }

  // repo - computed: false, optional: false, required: true
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }

  // sboms - computed: true, optional: true, required: false
  private _sboms = new BuildSbomsMap(this, "sboms");
  public get sboms() {
    return this._sboms;
  }
  public putSboms(value: { [key: string]: BuildSboms } | cdktf.IResolvable) {
    this._sboms.internalValue = value;
  }
  public resetSboms() {
    this._sboms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sbomsInput() {
    return this._sboms.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: buildConfigAToTerraform(this._config.internalValue),
      configs: cdktf.hashMapper(buildConfigsToTerraform)(this._configs.internalValue),
      repo: cdktf.stringToTerraform(this._repo),
      sboms: cdktf.hashMapper(buildSbomsToTerraform)(this._sboms.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: buildConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BuildConfigA",
      },
      configs: {
        value: cdktf.hashMapperHcl(buildConfigsToHclTerraform)(this._configs.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "BuildConfigsMap",
      },
      repo: {
        value: cdktf.stringToHclTerraform(this._repo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sboms: {
        value: cdktf.hashMapperHcl(buildSbomsToHclTerraform)(this._sboms.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "BuildSbomsMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
