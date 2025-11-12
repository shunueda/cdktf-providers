// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/smb_share
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerscaleSmbShareConfig extends cdktf.TerraformMetaArguments {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/smb_share#filter DataPowerscaleSmbShare#filter}
  */
  readonly filter?: DataPowerscaleSmbShareFilter;
}
export interface DataPowerscaleSmbShareSmbSharesPermissionsTrustee {
}

export function dataPowerscaleSmbShareSmbSharesPermissionsTrusteeToTerraform(struct?: DataPowerscaleSmbShareSmbSharesPermissionsTrustee): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleSmbShareSmbSharesPermissionsTrusteeToHclTerraform(struct?: DataPowerscaleSmbShareSmbSharesPermissionsTrustee): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleSmbShareSmbSharesPermissionsTrusteeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleSmbShareSmbSharesPermissionsTrustee | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleSmbShareSmbSharesPermissionsTrustee | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPowerscaleSmbShareSmbSharesPermissions {
}

export function dataPowerscaleSmbShareSmbSharesPermissionsToTerraform(struct?: DataPowerscaleSmbShareSmbSharesPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleSmbShareSmbSharesPermissionsToHclTerraform(struct?: DataPowerscaleSmbShareSmbSharesPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleSmbShareSmbSharesPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleSmbShareSmbSharesPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleSmbShareSmbSharesPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // permission - computed: true, optional: false, required: false
  public get permission() {
    return this.getStringAttribute('permission');
  }

  // permission_type - computed: true, optional: false, required: false
  public get permissionType() {
    return this.getStringAttribute('permission_type');
  }

  // trustee - computed: true, optional: false, required: false
  private _trustee = new DataPowerscaleSmbShareSmbSharesPermissionsTrusteeOutputReference(this, "trustee");
  public get trustee() {
    return this._trustee;
  }
}

export class DataPowerscaleSmbShareSmbSharesPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerscaleSmbShareSmbSharesPermissionsOutputReference {
    return new DataPowerscaleSmbShareSmbSharesPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleSmbShareSmbSharesRunAsRoot {
}

export function dataPowerscaleSmbShareSmbSharesRunAsRootToTerraform(struct?: DataPowerscaleSmbShareSmbSharesRunAsRoot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleSmbShareSmbSharesRunAsRootToHclTerraform(struct?: DataPowerscaleSmbShareSmbSharesRunAsRoot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleSmbShareSmbSharesRunAsRootOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleSmbShareSmbSharesRunAsRoot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleSmbShareSmbSharesRunAsRoot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataPowerscaleSmbShareSmbSharesRunAsRootList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerscaleSmbShareSmbSharesRunAsRootOutputReference {
    return new DataPowerscaleSmbShareSmbSharesRunAsRootOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleSmbShareSmbShares {
}

export function dataPowerscaleSmbShareSmbSharesToTerraform(struct?: DataPowerscaleSmbShareSmbShares): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleSmbShareSmbSharesToHclTerraform(struct?: DataPowerscaleSmbShareSmbShares): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleSmbShareSmbSharesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleSmbShareSmbShares | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleSmbShareSmbShares | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_based_enumeration - computed: true, optional: false, required: false
  public get accessBasedEnumeration() {
    return this.getBooleanAttribute('access_based_enumeration');
  }

  // access_based_enumeration_root_only - computed: true, optional: false, required: false
  public get accessBasedEnumerationRootOnly() {
    return this.getBooleanAttribute('access_based_enumeration_root_only');
  }

  // allow_delete_readonly - computed: true, optional: false, required: false
  public get allowDeleteReadonly() {
    return this.getBooleanAttribute('allow_delete_readonly');
  }

  // allow_execute_always - computed: true, optional: false, required: false
  public get allowExecuteAlways() {
    return this.getBooleanAttribute('allow_execute_always');
  }

  // allow_variable_expansion - computed: true, optional: false, required: false
  public get allowVariableExpansion() {
    return this.getBooleanAttribute('allow_variable_expansion');
  }

  // auto_create_directory - computed: true, optional: false, required: false
  public get autoCreateDirectory() {
    return this.getBooleanAttribute('auto_create_directory');
  }

  // browsable - computed: true, optional: false, required: false
  public get browsable() {
    return this.getBooleanAttribute('browsable');
  }

  // ca_timeout - computed: true, optional: false, required: false
  public get caTimeout() {
    return this.getNumberAttribute('ca_timeout');
  }

  // ca_write_integrity - computed: true, optional: false, required: false
  public get caWriteIntegrity() {
    return this.getStringAttribute('ca_write_integrity');
  }

  // change_notify - computed: true, optional: false, required: false
  public get changeNotify() {
    return this.getStringAttribute('change_notify');
  }

  // continuously_available - computed: true, optional: false, required: false
  public get continuouslyAvailable() {
    return this.getBooleanAttribute('continuously_available');
  }

  // create_permissions - computed: true, optional: false, required: false
  public get createPermissions() {
    return this.getStringAttribute('create_permissions');
  }

  // csc_policy - computed: true, optional: false, required: false
  public get cscPolicy() {
    return this.getStringAttribute('csc_policy');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // directory_create_mask - computed: true, optional: false, required: false
  public get directoryCreateMask() {
    return this.getNumberAttribute('directory_create_mask');
  }

  // directory_create_mode - computed: true, optional: false, required: false
  public get directoryCreateMode() {
    return this.getNumberAttribute('directory_create_mode');
  }

  // file_create_mask - computed: true, optional: false, required: false
  public get fileCreateMask() {
    return this.getNumberAttribute('file_create_mask');
  }

  // file_create_mode - computed: true, optional: false, required: false
  public get fileCreateMode() {
    return this.getNumberAttribute('file_create_mode');
  }

  // file_filter_extensions - computed: true, optional: false, required: false
  public get fileFilterExtensions() {
    return this.getListAttribute('file_filter_extensions');
  }

  // file_filter_type - computed: true, optional: false, required: false
  public get fileFilterType() {
    return this.getStringAttribute('file_filter_type');
  }

  // file_filtering_enabled - computed: true, optional: false, required: false
  public get fileFilteringEnabled() {
    return this.getBooleanAttribute('file_filtering_enabled');
  }

  // hide_dot_files - computed: true, optional: false, required: false
  public get hideDotFiles() {
    return this.getBooleanAttribute('hide_dot_files');
  }

  // host_acl - computed: true, optional: false, required: false
  public get hostAcl() {
    return this.getListAttribute('host_acl');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // impersonate_guest - computed: true, optional: false, required: false
  public get impersonateGuest() {
    return this.getStringAttribute('impersonate_guest');
  }

  // impersonate_user - computed: true, optional: false, required: false
  public get impersonateUser() {
    return this.getStringAttribute('impersonate_user');
  }

  // inheritable_path_acl - computed: true, optional: false, required: false
  public get inheritablePathAcl() {
    return this.getBooleanAttribute('inheritable_path_acl');
  }

  // mangle_byte_start - computed: true, optional: false, required: false
  public get mangleByteStart() {
    return this.getNumberAttribute('mangle_byte_start');
  }

  // mangle_map - computed: true, optional: false, required: false
  public get mangleMap() {
    return this.getListAttribute('mangle_map');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ntfs_acl_support - computed: true, optional: false, required: false
  public get ntfsAclSupport() {
    return this.getBooleanAttribute('ntfs_acl_support');
  }

  // oplocks - computed: true, optional: false, required: false
  public get oplocks() {
    return this.getBooleanAttribute('oplocks');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataPowerscaleSmbShareSmbSharesPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // run_as_root - computed: true, optional: false, required: false
  private _runAsRoot = new DataPowerscaleSmbShareSmbSharesRunAsRootList(this, "run_as_root", false);
  public get runAsRoot() {
    return this._runAsRoot;
  }

  // smb3_encryption_enabled - computed: true, optional: false, required: false
  public get smb3EncryptionEnabled() {
    return this.getBooleanAttribute('smb3_encryption_enabled');
  }

  // sparse_file - computed: true, optional: false, required: false
  public get sparseFile() {
    return this.getBooleanAttribute('sparse_file');
  }

  // strict_ca_lockout - computed: true, optional: false, required: false
  public get strictCaLockout() {
    return this.getBooleanAttribute('strict_ca_lockout');
  }

  // strict_flush - computed: true, optional: false, required: false
  public get strictFlush() {
    return this.getBooleanAttribute('strict_flush');
  }

  // strict_locking - computed: true, optional: false, required: false
  public get strictLocking() {
    return this.getBooleanAttribute('strict_locking');
  }

  // zid - computed: true, optional: false, required: false
  public get zid() {
    return this.getNumberAttribute('zid');
  }
}

export class DataPowerscaleSmbShareSmbSharesList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerscaleSmbShareSmbSharesOutputReference {
    return new DataPowerscaleSmbShareSmbSharesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleSmbShareFilter {
  /**
  * The direction of the sort.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/smb_share#dir DataPowerscaleSmbShare#dir}
  */
  readonly dir?: string;
  /**
  * Return no more than this many results at once (see resume).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/smb_share#limit DataPowerscaleSmbShare#limit}
  */
  readonly limit?: number;
  /**
  * Names to filter smb shares.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/smb_share#names DataPowerscaleSmbShare#names}
  */
  readonly names?: string[];
  /**
  * The position of the first item returned for a paginated query within the full result set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/smb_share#offset DataPowerscaleSmbShare#offset}
  */
  readonly offset?: number;
  /**
  * Continue returning results from previous call using this token (token should come from the previous call, resume cannot be used with other options).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/smb_share#resume DataPowerscaleSmbShare#resume}
  */
  readonly resume?: string;
  /**
  * If specified as "effective" or not specified, all fields are returned. If specified as "user", only fields with non-default values are shown. If specified as "default", the original values are returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/smb_share#scope DataPowerscaleSmbShare#scope}
  */
  readonly scope?: string;
  /**
  * The field that will be used for sorting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/smb_share#sort DataPowerscaleSmbShare#sort}
  */
  readonly sort?: string;
  /**
  * Specifies which access zone to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/smb_share#zone DataPowerscaleSmbShare#zone}
  */
  readonly zone?: string;
}

export function dataPowerscaleSmbShareFilterToTerraform(struct?: DataPowerscaleSmbShareFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dir: cdktf.stringToTerraform(struct!.dir),
    limit: cdktf.numberToTerraform(struct!.limit),
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
    offset: cdktf.numberToTerraform(struct!.offset),
    resume: cdktf.stringToTerraform(struct!.resume),
    scope: cdktf.stringToTerraform(struct!.scope),
    sort: cdktf.stringToTerraform(struct!.sort),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function dataPowerscaleSmbShareFilterToHclTerraform(struct?: DataPowerscaleSmbShareFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dir: {
      value: cdktf.stringToHclTerraform(struct!.dir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    offset: {
      value: cdktf.numberToHclTerraform(struct!.offset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resume: {
      value: cdktf.stringToHclTerraform(struct!.resume),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sort: {
      value: cdktf.stringToHclTerraform(struct!.sort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerscaleSmbShareFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleSmbShareFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dir !== undefined) {
      hasAnyValues = true;
      internalValueResult.dir = this._dir;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    if (this._offset !== undefined) {
      hasAnyValues = true;
      internalValueResult.offset = this._offset;
    }
    if (this._resume !== undefined) {
      hasAnyValues = true;
      internalValueResult.resume = this._resume;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._sort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sort = this._sort;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleSmbShareFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dir = undefined;
      this._limit = undefined;
      this._names = undefined;
      this._offset = undefined;
      this._resume = undefined;
      this._scope = undefined;
      this._sort = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dir = value.dir;
      this._limit = value.limit;
      this._names = value.names;
      this._offset = value.offset;
      this._resume = value.resume;
      this._scope = value.scope;
      this._sort = value.sort;
      this._zone = value.zone;
    }
  }

  // dir - computed: false, optional: true, required: false
  private _dir?: string; 
  public get dir() {
    return this.getStringAttribute('dir');
  }
  public set dir(value: string) {
    this._dir = value;
  }
  public resetDir() {
    this._dir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dirInput() {
    return this._dir;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // names - computed: false, optional: true, required: false
  private _names?: string[]; 
  public get names() {
    return cdktf.Fn.tolist(this.getListAttribute('names'));
  }
  public set names(value: string[]) {
    this._names = value;
  }
  public resetNames() {
    this._names = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // resume - computed: false, optional: true, required: false
  private _resume?: string; 
  public get resume() {
    return this.getStringAttribute('resume');
  }
  public set resume(value: string) {
    this._resume = value;
  }
  public resetResume() {
    this._resume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resumeInput() {
    return this._resume;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // sort - computed: false, optional: true, required: false
  private _sort?: string; 
  public get sort() {
    return this.getStringAttribute('sort');
  }
  public set sort(value: string) {
    this._sort = value;
  }
  public resetSort() {
    this._sort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/smb_share powerscale_smb_share}
*/
export class DataPowerscaleSmbShare extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_smb_share";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerscaleSmbShare resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerscaleSmbShare to import
  * @param importFromId The id of the existing DataPowerscaleSmbShare that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/smb_share#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerscaleSmbShare to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_smb_share", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/smb_share powerscale_smb_share} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerscaleSmbShareConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerscaleSmbShareConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerscale_smb_share',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // smb_shares - computed: true, optional: false, required: false
  private _smbShares = new DataPowerscaleSmbShareSmbSharesList(this, "smb_shares", false);
  public get smbShares() {
    return this._smbShares;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataPowerscaleSmbShareFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataPowerscaleSmbShareFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: dataPowerscaleSmbShareFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataPowerscaleSmbShareFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerscaleSmbShareFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
