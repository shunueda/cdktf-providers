// https://registry.terraform.io/providers/chainguard-dev/apko/0.30.20/docs/data-sources/config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApkoConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * The raw contents of the apko configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.20/docs/data-sources/config#config_contents DataApkoConfig#config_contents}
  */
  readonly configContents?: string;
  /**
  * A map from the APK architecture to the config for that architecture.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.20/docs/data-sources/config#configs DataApkoConfig#configs}
  */
  readonly configs?: { [key: string]: DataApkoConfigConfigs } | cdktf.IResolvable;
  /**
  * Default annotations to add.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.20/docs/data-sources/config#default_annotations DataApkoConfig#default_annotations}
  */
  readonly defaultAnnotations?: { [key: string]: string };
  /**
  * A list of extra packages to install.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.20/docs/data-sources/config#extra_packages DataApkoConfig#extra_packages}
  */
  readonly extraPackages?: string[];
}
export interface DataApkoConfigConfigAccountsGroups {
}

export function dataApkoConfigConfigAccountsGroupsToTerraform(struct?: DataApkoConfigConfigAccountsGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApkoConfigConfigAccountsGroupsToHclTerraform(struct?: DataApkoConfigConfigAccountsGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApkoConfigConfigAccountsGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApkoConfigConfigAccountsGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApkoConfigConfigAccountsGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gid - computed: true, optional: false, required: false
  public get gid() {
    return this.getNumberAttribute('gid');
  }

  // groupname - computed: true, optional: false, required: false
  public get groupname() {
    return this.getStringAttribute('groupname');
  }

  // members - computed: true, optional: false, required: false
  public get members() {
    return this.getListAttribute('members');
  }
}

export class DataApkoConfigConfigAccountsGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataApkoConfigConfigAccountsGroupsOutputReference {
    return new DataApkoConfigConfigAccountsGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApkoConfigConfigAccountsUsers {
}

export function dataApkoConfigConfigAccountsUsersToTerraform(struct?: DataApkoConfigConfigAccountsUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApkoConfigConfigAccountsUsersToHclTerraform(struct?: DataApkoConfigConfigAccountsUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApkoConfigConfigAccountsUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApkoConfigConfigAccountsUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApkoConfigConfigAccountsUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gid - computed: true, optional: false, required: false
  public get gid() {
    return this.getNumberAttribute('gid');
  }

  // homedir - computed: true, optional: false, required: false
  public get homedir() {
    return this.getStringAttribute('homedir');
  }

  // shell - computed: true, optional: false, required: false
  public get shell() {
    return this.getStringAttribute('shell');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getNumberAttribute('uid');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataApkoConfigConfigAccountsUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataApkoConfigConfigAccountsUsersOutputReference {
    return new DataApkoConfigConfigAccountsUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApkoConfigConfigAccounts {
}

export function dataApkoConfigConfigAccountsToTerraform(struct?: DataApkoConfigConfigAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApkoConfigConfigAccountsToHclTerraform(struct?: DataApkoConfigConfigAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApkoConfigConfigAccountsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataApkoConfigConfigAccounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApkoConfigConfigAccounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataApkoConfigConfigAccountsGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }

  // run-as - computed: true, optional: false, required: false
  public get runAs() {
    return this.getStringAttribute('run-as');
  }

  // users - computed: true, optional: false, required: false
  private _users = new DataApkoConfigConfigAccountsUsersList(this, "users", false);
  public get users() {
    return this._users;
  }
}
export interface DataApkoConfigConfigContents {
}

export function dataApkoConfigConfigContentsToTerraform(struct?: DataApkoConfigConfigContents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApkoConfigConfigContentsToHclTerraform(struct?: DataApkoConfigConfigContents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApkoConfigConfigContentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataApkoConfigConfigContents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApkoConfigConfigContents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // build_repositories - computed: true, optional: false, required: false
  public get buildRepositories() {
    return this.getListAttribute('build_repositories');
  }

  // keyring - computed: true, optional: false, required: false
  public get keyring() {
    return this.getListAttribute('keyring');
  }

  // packages - computed: true, optional: false, required: false
  public get packages() {
    return this.getListAttribute('packages');
  }

  // repositories - computed: true, optional: false, required: false
  public get repositories() {
    return this.getListAttribute('repositories');
  }

  // runtime_repositories - computed: true, optional: false, required: false
  public get runtimeRepositories() {
    return this.getListAttribute('runtime_repositories');
  }
}
export interface DataApkoConfigConfigEntrypoint {
}

export function dataApkoConfigConfigEntrypointToTerraform(struct?: DataApkoConfigConfigEntrypoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApkoConfigConfigEntrypointToHclTerraform(struct?: DataApkoConfigConfigEntrypoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApkoConfigConfigEntrypointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataApkoConfigConfigEntrypoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApkoConfigConfigEntrypoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getStringAttribute('command');
  }

  // services - computed: true, optional: false, required: false
  private _services = new cdktf.StringMap(this, "services");
  public get services() {
    return this._services;
  }

  // shell-fragment - computed: true, optional: false, required: false
  public get shellFragment() {
    return this.getStringAttribute('shell-fragment');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataApkoConfigConfigLayering {
}

export function dataApkoConfigConfigLayeringToTerraform(struct?: DataApkoConfigConfigLayering): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApkoConfigConfigLayeringToHclTerraform(struct?: DataApkoConfigConfigLayering): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApkoConfigConfigLayeringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataApkoConfigConfigLayering | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApkoConfigConfigLayering | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // budget - computed: true, optional: false, required: false
  public get budget() {
    return this.getNumberAttribute('budget');
  }

  // strategy - computed: true, optional: false, required: false
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
}
export interface DataApkoConfigConfigPaths {
}

export function dataApkoConfigConfigPathsToTerraform(struct?: DataApkoConfigConfigPaths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApkoConfigConfigPathsToHclTerraform(struct?: DataApkoConfigConfigPaths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApkoConfigConfigPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApkoConfigConfigPaths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApkoConfigConfigPaths | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gid - computed: true, optional: false, required: false
  public get gid() {
    return this.getNumberAttribute('gid');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return this.getNumberAttribute('permissions');
  }

  // recursive - computed: true, optional: false, required: false
  public get recursive() {
    return this.getBooleanAttribute('recursive');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getNumberAttribute('uid');
  }
}

export class DataApkoConfigConfigPathsList extends cdktf.ComplexList {

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
  public get(index: number): DataApkoConfigConfigPathsOutputReference {
    return new DataApkoConfigConfigPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApkoConfigConfigA {
}

export function dataApkoConfigConfigAToTerraform(struct?: DataApkoConfigConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApkoConfigConfigAToHclTerraform(struct?: DataApkoConfigConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApkoConfigConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataApkoConfigConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApkoConfigConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accounts - computed: true, optional: false, required: false
  private _accounts = new DataApkoConfigConfigAccountsOutputReference(this, "accounts");
  public get accounts() {
    return this._accounts;
  }

  // annotations - computed: true, optional: false, required: false
  private _annotations = new cdktf.StringMap(this, "annotations");
  public get annotations() {
    return this._annotations;
  }

  // archs - computed: true, optional: false, required: false
  public get archs() {
    return this.getListAttribute('archs');
  }

  // cmd - computed: true, optional: false, required: false
  public get cmd() {
    return this.getStringAttribute('cmd');
  }

  // contents - computed: true, optional: false, required: false
  private _contents = new DataApkoConfigConfigContentsOutputReference(this, "contents");
  public get contents() {
    return this._contents;
  }

  // entrypoint - computed: true, optional: false, required: false
  private _entrypoint = new DataApkoConfigConfigEntrypointOutputReference(this, "entrypoint");
  public get entrypoint() {
    return this._entrypoint;
  }

  // environment - computed: true, optional: false, required: false
  private _environment = new cdktf.StringMap(this, "environment");
  public get environment() {
    return this._environment;
  }

  // include - computed: true, optional: false, required: false
  public get include() {
    return this.getStringAttribute('include');
  }

  // layering - computed: true, optional: false, required: false
  private _layering = new DataApkoConfigConfigLayeringOutputReference(this, "layering");
  public get layering() {
    return this._layering;
  }

  // paths - computed: true, optional: false, required: false
  private _paths = new DataApkoConfigConfigPathsList(this, "paths", false);
  public get paths() {
    return this._paths;
  }

  // stop-signal - computed: true, optional: false, required: false
  public get stopSignal() {
    return this.getStringAttribute('stop-signal');
  }

  // vcs-url - computed: true, optional: false, required: false
  public get vcsUrl() {
    return this.getStringAttribute('vcs-url');
  }

  // volumes - computed: true, optional: false, required: false
  public get volumes() {
    return this.getListAttribute('volumes');
  }

  // work-dir - computed: true, optional: false, required: false
  public get workDir() {
    return this.getStringAttribute('work-dir');
  }
}
export interface DataApkoConfigConfigsConfigAccountsGroups {
}

export function dataApkoConfigConfigsConfigAccountsGroupsToTerraform(struct?: DataApkoConfigConfigsConfigAccountsGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApkoConfigConfigsConfigAccountsGroupsToHclTerraform(struct?: DataApkoConfigConfigsConfigAccountsGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApkoConfigConfigsConfigAccountsGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApkoConfigConfigsConfigAccountsGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApkoConfigConfigsConfigAccountsGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gid - computed: true, optional: false, required: false
  public get gid() {
    return this.getNumberAttribute('gid');
  }

  // groupname - computed: true, optional: false, required: false
  public get groupname() {
    return this.getStringAttribute('groupname');
  }

  // members - computed: true, optional: false, required: false
  public get members() {
    return this.getListAttribute('members');
  }
}

export class DataApkoConfigConfigsConfigAccountsGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataApkoConfigConfigsConfigAccountsGroupsOutputReference {
    return new DataApkoConfigConfigsConfigAccountsGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApkoConfigConfigsConfigAccountsUsers {
}

export function dataApkoConfigConfigsConfigAccountsUsersToTerraform(struct?: DataApkoConfigConfigsConfigAccountsUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApkoConfigConfigsConfigAccountsUsersToHclTerraform(struct?: DataApkoConfigConfigsConfigAccountsUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApkoConfigConfigsConfigAccountsUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApkoConfigConfigsConfigAccountsUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApkoConfigConfigsConfigAccountsUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gid - computed: true, optional: false, required: false
  public get gid() {
    return this.getNumberAttribute('gid');
  }

  // homedir - computed: true, optional: false, required: false
  public get homedir() {
    return this.getStringAttribute('homedir');
  }

  // shell - computed: true, optional: false, required: false
  public get shell() {
    return this.getStringAttribute('shell');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getNumberAttribute('uid');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataApkoConfigConfigsConfigAccountsUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataApkoConfigConfigsConfigAccountsUsersOutputReference {
    return new DataApkoConfigConfigsConfigAccountsUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApkoConfigConfigsConfigAccounts {
}

export function dataApkoConfigConfigsConfigAccountsToTerraform(struct?: DataApkoConfigConfigsConfigAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApkoConfigConfigsConfigAccountsToHclTerraform(struct?: DataApkoConfigConfigsConfigAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApkoConfigConfigsConfigAccountsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataApkoConfigConfigsConfigAccounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApkoConfigConfigsConfigAccounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataApkoConfigConfigsConfigAccountsGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }

  // run-as - computed: true, optional: false, required: false
  public get runAs() {
    return this.getStringAttribute('run-as');
  }

  // users - computed: true, optional: false, required: false
  private _users = new DataApkoConfigConfigsConfigAccountsUsersList(this, "users", false);
  public get users() {
    return this._users;
  }
}
export interface DataApkoConfigConfigsConfigContents {
}

export function dataApkoConfigConfigsConfigContentsToTerraform(struct?: DataApkoConfigConfigsConfigContents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApkoConfigConfigsConfigContentsToHclTerraform(struct?: DataApkoConfigConfigsConfigContents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApkoConfigConfigsConfigContentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataApkoConfigConfigsConfigContents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApkoConfigConfigsConfigContents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // build_repositories - computed: true, optional: false, required: false
  public get buildRepositories() {
    return this.getListAttribute('build_repositories');
  }

  // keyring - computed: true, optional: false, required: false
  public get keyring() {
    return this.getListAttribute('keyring');
  }

  // packages - computed: true, optional: false, required: false
  public get packages() {
    return this.getListAttribute('packages');
  }

  // repositories - computed: true, optional: false, required: false
  public get repositories() {
    return this.getListAttribute('repositories');
  }

  // runtime_repositories - computed: true, optional: false, required: false
  public get runtimeRepositories() {
    return this.getListAttribute('runtime_repositories');
  }
}
export interface DataApkoConfigConfigsConfigEntrypoint {
}

export function dataApkoConfigConfigsConfigEntrypointToTerraform(struct?: DataApkoConfigConfigsConfigEntrypoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApkoConfigConfigsConfigEntrypointToHclTerraform(struct?: DataApkoConfigConfigsConfigEntrypoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApkoConfigConfigsConfigEntrypointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataApkoConfigConfigsConfigEntrypoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApkoConfigConfigsConfigEntrypoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getStringAttribute('command');
  }

  // services - computed: true, optional: false, required: false
  private _services = new cdktf.StringMap(this, "services");
  public get services() {
    return this._services;
  }

  // shell-fragment - computed: true, optional: false, required: false
  public get shellFragment() {
    return this.getStringAttribute('shell-fragment');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataApkoConfigConfigsConfigLayering {
}

export function dataApkoConfigConfigsConfigLayeringToTerraform(struct?: DataApkoConfigConfigsConfigLayering): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApkoConfigConfigsConfigLayeringToHclTerraform(struct?: DataApkoConfigConfigsConfigLayering): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApkoConfigConfigsConfigLayeringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataApkoConfigConfigsConfigLayering | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApkoConfigConfigsConfigLayering | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // budget - computed: true, optional: false, required: false
  public get budget() {
    return this.getNumberAttribute('budget');
  }

  // strategy - computed: true, optional: false, required: false
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
}
export interface DataApkoConfigConfigsConfigPaths {
}

export function dataApkoConfigConfigsConfigPathsToTerraform(struct?: DataApkoConfigConfigsConfigPaths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApkoConfigConfigsConfigPathsToHclTerraform(struct?: DataApkoConfigConfigsConfigPaths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApkoConfigConfigsConfigPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApkoConfigConfigsConfigPaths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApkoConfigConfigsConfigPaths | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gid - computed: true, optional: false, required: false
  public get gid() {
    return this.getNumberAttribute('gid');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return this.getNumberAttribute('permissions');
  }

  // recursive - computed: true, optional: false, required: false
  public get recursive() {
    return this.getBooleanAttribute('recursive');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getNumberAttribute('uid');
  }
}

export class DataApkoConfigConfigsConfigPathsList extends cdktf.ComplexList {

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
  public get(index: number): DataApkoConfigConfigsConfigPathsOutputReference {
    return new DataApkoConfigConfigsConfigPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApkoConfigConfigsConfig {
}

export function dataApkoConfigConfigsConfigToTerraform(struct?: DataApkoConfigConfigsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApkoConfigConfigsConfigToHclTerraform(struct?: DataApkoConfigConfigsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApkoConfigConfigsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataApkoConfigConfigsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApkoConfigConfigsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accounts - computed: true, optional: false, required: false
  private _accounts = new DataApkoConfigConfigsConfigAccountsOutputReference(this, "accounts");
  public get accounts() {
    return this._accounts;
  }

  // annotations - computed: true, optional: false, required: false
  private _annotations = new cdktf.StringMap(this, "annotations");
  public get annotations() {
    return this._annotations;
  }

  // archs - computed: true, optional: false, required: false
  public get archs() {
    return this.getListAttribute('archs');
  }

  // cmd - computed: true, optional: false, required: false
  public get cmd() {
    return this.getStringAttribute('cmd');
  }

  // contents - computed: true, optional: false, required: false
  private _contents = new DataApkoConfigConfigsConfigContentsOutputReference(this, "contents");
  public get contents() {
    return this._contents;
  }

  // entrypoint - computed: true, optional: false, required: false
  private _entrypoint = new DataApkoConfigConfigsConfigEntrypointOutputReference(this, "entrypoint");
  public get entrypoint() {
    return this._entrypoint;
  }

  // environment - computed: true, optional: false, required: false
  private _environment = new cdktf.StringMap(this, "environment");
  public get environment() {
    return this._environment;
  }

  // include - computed: true, optional: false, required: false
  public get include() {
    return this.getStringAttribute('include');
  }

  // layering - computed: true, optional: false, required: false
  private _layering = new DataApkoConfigConfigsConfigLayeringOutputReference(this, "layering");
  public get layering() {
    return this._layering;
  }

  // paths - computed: true, optional: false, required: false
  private _paths = new DataApkoConfigConfigsConfigPathsList(this, "paths", false);
  public get paths() {
    return this._paths;
  }

  // stop-signal - computed: true, optional: false, required: false
  public get stopSignal() {
    return this.getStringAttribute('stop-signal');
  }

  // vcs-url - computed: true, optional: false, required: false
  public get vcsUrl() {
    return this.getStringAttribute('vcs-url');
  }

  // volumes - computed: true, optional: false, required: false
  public get volumes() {
    return this.getListAttribute('volumes');
  }

  // work-dir - computed: true, optional: false, required: false
  public get workDir() {
    return this.getStringAttribute('work-dir');
  }
}
export interface DataApkoConfigConfigs {
}

export function dataApkoConfigConfigsToTerraform(struct?: DataApkoConfigConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApkoConfigConfigsToHclTerraform(struct?: DataApkoConfigConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApkoConfigConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApkoConfigConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApkoConfigConfigs | cdktf.IResolvable | undefined) {
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

  // config - computed: true, optional: false, required: false
  private _config = new DataApkoConfigConfigsConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
}

export class DataApkoConfigConfigsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DataApkoConfigConfigs } | cdktf.IResolvable

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
  public get(key: string): DataApkoConfigConfigsOutputReference {
    return new DataApkoConfigConfigsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.20/docs/data-sources/config apko_config}
*/
export class DataApkoConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apko_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApkoConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApkoConfig to import
  * @param importFromId The id of the existing DataApkoConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.20/docs/data-sources/config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApkoConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apko_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.20/docs/data-sources/config apko_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApkoConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataApkoConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'apko_config',
      terraformGeneratorMetadata: {
        providerName: 'apko',
        providerVersion: '0.30.20',
        providerVersionConstraint: '0.30.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configContents = config.configContents;
    this._configs.internalValue = config.configs;
    this._defaultAnnotations = config.defaultAnnotations;
    this._extraPackages = config.extraPackages;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: true, optional: false, required: false
  private _config = new DataApkoConfigConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // config_contents - computed: false, optional: true, required: false
  private _configContents?: string; 
  public get configContents() {
    return this.getStringAttribute('config_contents');
  }
  public set configContents(value: string) {
    this._configContents = value;
  }
  public resetConfigContents() {
    this._configContents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configContentsInput() {
    return this._configContents;
  }

  // configs - computed: true, optional: true, required: false
  private _configs = new DataApkoConfigConfigsMap(this, "configs");
  public get configs() {
    return this._configs;
  }
  public putConfigs(value: { [key: string]: DataApkoConfigConfigs } | cdktf.IResolvable) {
    this._configs.internalValue = value;
  }
  public resetConfigs() {
    this._configs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configsInput() {
    return this._configs.internalValue;
  }

  // default_annotations - computed: false, optional: true, required: false
  private _defaultAnnotations?: { [key: string]: string }; 
  public get defaultAnnotations() {
    return this.getStringMapAttribute('default_annotations');
  }
  public set defaultAnnotations(value: { [key: string]: string }) {
    this._defaultAnnotations = value;
  }
  public resetDefaultAnnotations() {
    this._defaultAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAnnotationsInput() {
    return this._defaultAnnotations;
  }

  // extra_packages - computed: false, optional: true, required: false
  private _extraPackages?: string[]; 
  public get extraPackages() {
    return this.getListAttribute('extra_packages');
  }
  public set extraPackages(value: string[]) {
    this._extraPackages = value;
  }
  public resetExtraPackages() {
    this._extraPackages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraPackagesInput() {
    return this._extraPackages;
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
      config_contents: cdktf.stringToTerraform(this._configContents),
      configs: cdktf.hashMapper(dataApkoConfigConfigsToTerraform)(this._configs.internalValue),
      default_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._defaultAnnotations),
      extra_packages: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extraPackages),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_contents: {
        value: cdktf.stringToHclTerraform(this._configContents),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configs: {
        value: cdktf.hashMapperHcl(dataApkoConfigConfigsToHclTerraform)(this._configs.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "DataApkoConfigConfigsMap",
      },
      default_annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._defaultAnnotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      extra_packages: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._extraPackages),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
