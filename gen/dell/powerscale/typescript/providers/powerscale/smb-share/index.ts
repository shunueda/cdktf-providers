// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SmbShareConfig extends cdktf.TerraformMetaArguments {
  /**
  * Only enumerate files and folders the requesting user has access to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#access_based_enumeration SmbShare#access_based_enumeration}
  */
  readonly accessBasedEnumeration?: boolean | cdktf.IResolvable;
  /**
  * Access-based enumeration on only the root directory of the share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#access_based_enumeration_root_only SmbShare#access_based_enumeration_root_only}
  */
  readonly accessBasedEnumerationRootOnly?: boolean | cdktf.IResolvable;
  /**
  * Allow deletion of read-only files in the share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#allow_delete_readonly SmbShare#allow_delete_readonly}
  */
  readonly allowDeleteReadonly?: boolean | cdktf.IResolvable;
  /**
  * Allows users to execute files they have read rights for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#allow_execute_always SmbShare#allow_execute_always}
  */
  readonly allowExecuteAlways?: boolean | cdktf.IResolvable;
  /**
  * Allow automatic expansion of variables for home directories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#allow_variable_expansion SmbShare#allow_variable_expansion}
  */
  readonly allowVariableExpansion?: boolean | cdktf.IResolvable;
  /**
  * Automatically create home directories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#auto_create_directory SmbShare#auto_create_directory}
  */
  readonly autoCreateDirectory?: boolean | cdktf.IResolvable;
  /**
  * Share is visible in net view and the browse list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#browsable SmbShare#browsable}
  */
  readonly browsable?: boolean | cdktf.IResolvable;
  /**
  * Persistent open timeout for the share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#ca_timeout SmbShare#ca_timeout}
  */
  readonly caTimeout?: number;
  /**
  * Specify the level of write-integrity on continuously available shares.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#ca_write_integrity SmbShare#ca_write_integrity}
  */
  readonly caWriteIntegrity?: string;
  /**
  * Level of change notification alerts on the share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#change_notify SmbShare#change_notify}
  */
  readonly changeNotify?: string;
  /**
  * Create path if does not exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#create_path SmbShare#create_path}
  */
  readonly createPath?: boolean | cdktf.IResolvable;
  /**
  * Create permissions for new files and directories in share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#create_permissions SmbShare#create_permissions}
  */
  readonly createPermissions?: string;
  /**
  * Client-side caching policy for the shares.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#csc_policy SmbShare#csc_policy}
  */
  readonly cscPolicy?: string;
  /**
  * Description for this SMB share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#description SmbShare#description}
  */
  readonly description?: string;
  /**
  * Directory create mask bits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#directory_create_mask SmbShare#directory_create_mask}
  */
  readonly directoryCreateMask?: number;
  /**
  * Directory create mode bits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#directory_create_mode SmbShare#directory_create_mode}
  */
  readonly directoryCreateMode?: number;
  /**
  * File create mask bits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#file_create_mask SmbShare#file_create_mask}
  */
  readonly fileCreateMask?: number;
  /**
  * File create mode bits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#file_create_mode SmbShare#file_create_mode}
  */
  readonly fileCreateMode?: number;
  /**
  * Specifies the list of file extensions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#file_filter_extensions SmbShare#file_filter_extensions}
  */
  readonly fileFilterExtensions?: string[];
  /**
  * Specifies if filter list is for deny or allow. Default is deny.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#file_filter_type SmbShare#file_filter_type}
  */
  readonly fileFilterType?: string;
  /**
  * Enables file filtering on this zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#file_filtering_enabled SmbShare#file_filtering_enabled}
  */
  readonly fileFilteringEnabled?: boolean | cdktf.IResolvable;
  /**
  * Hide files and directories that begin with a period '.'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#hide_dot_files SmbShare#hide_dot_files}
  */
  readonly hideDotFiles?: boolean | cdktf.IResolvable;
  /**
  * An ACL expressing which hosts are allowed access. A deny clause must be the final entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#host_acl SmbShare#host_acl}
  */
  readonly hostAcl?: string[];
  /**
  * Specify the condition in which user access is done as the guest account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#impersonate_guest SmbShare#impersonate_guest}
  */
  readonly impersonateGuest?: string;
  /**
  * User account to be used as guest account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#impersonate_user SmbShare#impersonate_user}
  */
  readonly impersonateUser?: string;
  /**
  * Set the inheritable ACL on the share path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#inheritable_path_acl SmbShare#inheritable_path_acl}
  */
  readonly inheritablePathAcl?: boolean | cdktf.IResolvable;
  /**
  * Specifies the wchar_t starting point for automatic byte mangling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#mangle_byte_start SmbShare#mangle_byte_start}
  */
  readonly mangleByteStart?: number;
  /**
  * Character mangle map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#mangle_map SmbShare#mangle_map}
  */
  readonly mangleMap?: string[];
  /**
  * Share name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#name SmbShare#name}
  */
  readonly name: string;
  /**
  * Support NTFS ACLs on files and directories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#ntfs_acl_support SmbShare#ntfs_acl_support}
  */
  readonly ntfsAclSupport?: boolean | cdktf.IResolvable;
  /**
  * Support oplocks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#oplocks SmbShare#oplocks}
  */
  readonly oplocks?: boolean | cdktf.IResolvable;
  /**
  * Path of share within /ifs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#path SmbShare#path}
  */
  readonly path: string;
  /**
  * Specifies an ordered list of permission modifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#permissions SmbShare#permissions}
  */
  readonly permissions: SmbSharePermissions[] | cdktf.IResolvable;
  /**
  * Allow account to run as root.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#run_as_root SmbShare#run_as_root}
  */
  readonly runAsRoot?: SmbShareRunAsRoot[] | cdktf.IResolvable;
  /**
  * Enables SMB3 encryption for the share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#smb3_encryption_enabled SmbShare#smb3_encryption_enabled}
  */
  readonly smb3EncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enables sparse file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#sparse_file SmbShare#sparse_file}
  */
  readonly sparseFile?: boolean | cdktf.IResolvable;
  /**
  * Specifies if persistent opens would do strict lockout on the share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#strict_ca_lockout SmbShare#strict_ca_lockout}
  */
  readonly strictCaLockout?: boolean | cdktf.IResolvable;
  /**
  * Handle SMB flush operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#strict_flush SmbShare#strict_flush}
  */
  readonly strictFlush?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether byte range locks contend against SMB I/O.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#strict_locking SmbShare#strict_locking}
  */
  readonly strictLocking?: boolean | cdktf.IResolvable;
  /**
  * Name of the access zone to which to move this SMB share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#zone SmbShare#zone}
  */
  readonly zone?: string;
}
export interface SmbSharePermissionsTrustee {
  /**
  * Specifies the serialized form of a persona using security identifier, which can be 'SID:S-1-1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#id SmbShare#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the persona name, which must be combined with a type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#name SmbShare#name}
  */
  readonly name?: string;
  /**
  * Specifies the type of persona, which must be combined with a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#type SmbShare#type}
  */
  readonly type?: string;
}

export function smbSharePermissionsTrusteeToTerraform(struct?: SmbSharePermissionsTrustee | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function smbSharePermissionsTrusteeToHclTerraform(struct?: SmbSharePermissionsTrustee | cdktf.IResolvable): any {
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

export class SmbSharePermissionsTrusteeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SmbSharePermissionsTrustee | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
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

  public set internalValue(value: SmbSharePermissionsTrustee | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
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
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
    }
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: true, optional: true, required: false
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
}
export interface SmbSharePermissions {
  /**
  * Specifies the file system rights that are allowed or denied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#permission SmbShare#permission}
  */
  readonly permission: string;
  /**
  * Determines whether the permission is allowed or denied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#permission_type SmbShare#permission_type}
  */
  readonly permissionType: string;
  /**
  * Specifies the persona of the file group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#trustee SmbShare#trustee}
  */
  readonly trustee: SmbSharePermissionsTrustee;
}

export function smbSharePermissionsToTerraform(struct?: SmbSharePermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permission: cdktf.stringToTerraform(struct!.permission),
    permission_type: cdktf.stringToTerraform(struct!.permissionType),
    trustee: smbSharePermissionsTrusteeToTerraform(struct!.trustee),
  }
}


export function smbSharePermissionsToHclTerraform(struct?: SmbSharePermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission_type: {
      value: cdktf.stringToHclTerraform(struct!.permissionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trustee: {
      value: smbSharePermissionsTrusteeToHclTerraform(struct!.trustee),
      isBlock: true,
      type: "struct",
      storageClassType: "SmbSharePermissionsTrustee",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SmbSharePermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SmbSharePermissions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    if (this._permissionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionType = this._permissionType;
    }
    if (this._trustee?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustee = this._trustee?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SmbSharePermissions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._permission = undefined;
      this._permissionType = undefined;
      this._trustee.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._permission = value.permission;
      this._permissionType = value.permissionType;
      this._trustee.internalValue = value.trustee;
    }
  }

  // permission - computed: false, optional: false, required: true
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }

  // permission_type - computed: false, optional: false, required: true
  private _permissionType?: string; 
  public get permissionType() {
    return this.getStringAttribute('permission_type');
  }
  public set permissionType(value: string) {
    this._permissionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionTypeInput() {
    return this._permissionType;
  }

  // trustee - computed: false, optional: false, required: true
  private _trustee = new SmbSharePermissionsTrusteeOutputReference(this, "trustee");
  public get trustee() {
    return this._trustee;
  }
  public putTrustee(value: SmbSharePermissionsTrustee) {
    this._trustee.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trusteeInput() {
    return this._trustee.internalValue;
  }
}

export class SmbSharePermissionsList extends cdktf.ComplexList {
  public internalValue? : SmbSharePermissions[] | cdktf.IResolvable

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
  public get(index: number): SmbSharePermissionsOutputReference {
    return new SmbSharePermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SmbShareRunAsRoot {
  /**
  * Specifies the serialized form of a persona using security identifier, which can be 'SID:S-1-1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#id SmbShare#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the persona name, which must be combined with a type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#name SmbShare#name}
  */
  readonly name?: string;
  /**
  * Specifies the type of persona, which must be combined with a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#type SmbShare#type}
  */
  readonly type?: string;
}

export function smbShareRunAsRootToTerraform(struct?: SmbShareRunAsRoot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function smbShareRunAsRootToHclTerraform(struct?: SmbShareRunAsRoot | cdktf.IResolvable): any {
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

export class SmbShareRunAsRootOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SmbShareRunAsRoot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
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

  public set internalValue(value: SmbShareRunAsRoot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
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
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
    }
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: true, optional: true, required: false
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
}

export class SmbShareRunAsRootList extends cdktf.ComplexList {
  public internalValue? : SmbShareRunAsRoot[] | cdktf.IResolvable

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
  public get(index: number): SmbShareRunAsRootOutputReference {
    return new SmbShareRunAsRootOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share powerscale_smb_share}
*/
export class SmbShare extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_smb_share";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SmbShare resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SmbShare to import
  * @param importFromId The id of the existing SmbShare that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SmbShare to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_smb_share", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share powerscale_smb_share} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SmbShareConfig
  */
  public constructor(scope: Construct, id: string, config: SmbShareConfig) {
    super(scope, id, {
      terraformResourceType: 'powerscale_smb_share',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessBasedEnumeration = config.accessBasedEnumeration;
    this._accessBasedEnumerationRootOnly = config.accessBasedEnumerationRootOnly;
    this._allowDeleteReadonly = config.allowDeleteReadonly;
    this._allowExecuteAlways = config.allowExecuteAlways;
    this._allowVariableExpansion = config.allowVariableExpansion;
    this._autoCreateDirectory = config.autoCreateDirectory;
    this._browsable = config.browsable;
    this._caTimeout = config.caTimeout;
    this._caWriteIntegrity = config.caWriteIntegrity;
    this._changeNotify = config.changeNotify;
    this._createPath = config.createPath;
    this._createPermissions = config.createPermissions;
    this._cscPolicy = config.cscPolicy;
    this._description = config.description;
    this._directoryCreateMask = config.directoryCreateMask;
    this._directoryCreateMode = config.directoryCreateMode;
    this._fileCreateMask = config.fileCreateMask;
    this._fileCreateMode = config.fileCreateMode;
    this._fileFilterExtensions = config.fileFilterExtensions;
    this._fileFilterType = config.fileFilterType;
    this._fileFilteringEnabled = config.fileFilteringEnabled;
    this._hideDotFiles = config.hideDotFiles;
    this._hostAcl = config.hostAcl;
    this._impersonateGuest = config.impersonateGuest;
    this._impersonateUser = config.impersonateUser;
    this._inheritablePathAcl = config.inheritablePathAcl;
    this._mangleByteStart = config.mangleByteStart;
    this._mangleMap = config.mangleMap;
    this._name = config.name;
    this._ntfsAclSupport = config.ntfsAclSupport;
    this._oplocks = config.oplocks;
    this._path = config.path;
    this._permissions.internalValue = config.permissions;
    this._runAsRoot.internalValue = config.runAsRoot;
    this._smb3EncryptionEnabled = config.smb3EncryptionEnabled;
    this._sparseFile = config.sparseFile;
    this._strictCaLockout = config.strictCaLockout;
    this._strictFlush = config.strictFlush;
    this._strictLocking = config.strictLocking;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_based_enumeration - computed: true, optional: true, required: false
  private _accessBasedEnumeration?: boolean | cdktf.IResolvable; 
  public get accessBasedEnumeration() {
    return this.getBooleanAttribute('access_based_enumeration');
  }
  public set accessBasedEnumeration(value: boolean | cdktf.IResolvable) {
    this._accessBasedEnumeration = value;
  }
  public resetAccessBasedEnumeration() {
    this._accessBasedEnumeration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessBasedEnumerationInput() {
    return this._accessBasedEnumeration;
  }

  // access_based_enumeration_root_only - computed: true, optional: true, required: false
  private _accessBasedEnumerationRootOnly?: boolean | cdktf.IResolvable; 
  public get accessBasedEnumerationRootOnly() {
    return this.getBooleanAttribute('access_based_enumeration_root_only');
  }
  public set accessBasedEnumerationRootOnly(value: boolean | cdktf.IResolvable) {
    this._accessBasedEnumerationRootOnly = value;
  }
  public resetAccessBasedEnumerationRootOnly() {
    this._accessBasedEnumerationRootOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessBasedEnumerationRootOnlyInput() {
    return this._accessBasedEnumerationRootOnly;
  }

  // allow_delete_readonly - computed: true, optional: true, required: false
  private _allowDeleteReadonly?: boolean | cdktf.IResolvable; 
  public get allowDeleteReadonly() {
    return this.getBooleanAttribute('allow_delete_readonly');
  }
  public set allowDeleteReadonly(value: boolean | cdktf.IResolvable) {
    this._allowDeleteReadonly = value;
  }
  public resetAllowDeleteReadonly() {
    this._allowDeleteReadonly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDeleteReadonlyInput() {
    return this._allowDeleteReadonly;
  }

  // allow_execute_always - computed: true, optional: true, required: false
  private _allowExecuteAlways?: boolean | cdktf.IResolvable; 
  public get allowExecuteAlways() {
    return this.getBooleanAttribute('allow_execute_always');
  }
  public set allowExecuteAlways(value: boolean | cdktf.IResolvable) {
    this._allowExecuteAlways = value;
  }
  public resetAllowExecuteAlways() {
    this._allowExecuteAlways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowExecuteAlwaysInput() {
    return this._allowExecuteAlways;
  }

  // allow_variable_expansion - computed: true, optional: true, required: false
  private _allowVariableExpansion?: boolean | cdktf.IResolvable; 
  public get allowVariableExpansion() {
    return this.getBooleanAttribute('allow_variable_expansion');
  }
  public set allowVariableExpansion(value: boolean | cdktf.IResolvable) {
    this._allowVariableExpansion = value;
  }
  public resetAllowVariableExpansion() {
    this._allowVariableExpansion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowVariableExpansionInput() {
    return this._allowVariableExpansion;
  }

  // auto_create_directory - computed: true, optional: true, required: false
  private _autoCreateDirectory?: boolean | cdktf.IResolvable; 
  public get autoCreateDirectory() {
    return this.getBooleanAttribute('auto_create_directory');
  }
  public set autoCreateDirectory(value: boolean | cdktf.IResolvable) {
    this._autoCreateDirectory = value;
  }
  public resetAutoCreateDirectory() {
    this._autoCreateDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateDirectoryInput() {
    return this._autoCreateDirectory;
  }

  // browsable - computed: true, optional: true, required: false
  private _browsable?: boolean | cdktf.IResolvable; 
  public get browsable() {
    return this.getBooleanAttribute('browsable');
  }
  public set browsable(value: boolean | cdktf.IResolvable) {
    this._browsable = value;
  }
  public resetBrowsable() {
    this._browsable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browsableInput() {
    return this._browsable;
  }

  // ca_timeout - computed: true, optional: true, required: false
  private _caTimeout?: number; 
  public get caTimeout() {
    return this.getNumberAttribute('ca_timeout');
  }
  public set caTimeout(value: number) {
    this._caTimeout = value;
  }
  public resetCaTimeout() {
    this._caTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caTimeoutInput() {
    return this._caTimeout;
  }

  // ca_write_integrity - computed: true, optional: true, required: false
  private _caWriteIntegrity?: string; 
  public get caWriteIntegrity() {
    return this.getStringAttribute('ca_write_integrity');
  }
  public set caWriteIntegrity(value: string) {
    this._caWriteIntegrity = value;
  }
  public resetCaWriteIntegrity() {
    this._caWriteIntegrity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caWriteIntegrityInput() {
    return this._caWriteIntegrity;
  }

  // change_notify - computed: true, optional: true, required: false
  private _changeNotify?: string; 
  public get changeNotify() {
    return this.getStringAttribute('change_notify');
  }
  public set changeNotify(value: string) {
    this._changeNotify = value;
  }
  public resetChangeNotify() {
    this._changeNotify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeNotifyInput() {
    return this._changeNotify;
  }

  // continuously_available - computed: true, optional: false, required: false
  public get continuouslyAvailable() {
    return this.getBooleanAttribute('continuously_available');
  }

  // create_path - computed: false, optional: true, required: false
  private _createPath?: boolean | cdktf.IResolvable; 
  public get createPath() {
    return this.getBooleanAttribute('create_path');
  }
  public set createPath(value: boolean | cdktf.IResolvable) {
    this._createPath = value;
  }
  public resetCreatePath() {
    this._createPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createPathInput() {
    return this._createPath;
  }

  // create_permissions - computed: true, optional: true, required: false
  private _createPermissions?: string; 
  public get createPermissions() {
    return this.getStringAttribute('create_permissions');
  }
  public set createPermissions(value: string) {
    this._createPermissions = value;
  }
  public resetCreatePermissions() {
    this._createPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createPermissionsInput() {
    return this._createPermissions;
  }

  // csc_policy - computed: true, optional: true, required: false
  private _cscPolicy?: string; 
  public get cscPolicy() {
    return this.getStringAttribute('csc_policy');
  }
  public set cscPolicy(value: string) {
    this._cscPolicy = value;
  }
  public resetCscPolicy() {
    this._cscPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cscPolicyInput() {
    return this._cscPolicy;
  }

  // description - computed: true, optional: true, required: false
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

  // directory_create_mask - computed: true, optional: true, required: false
  private _directoryCreateMask?: number; 
  public get directoryCreateMask() {
    return this.getNumberAttribute('directory_create_mask');
  }
  public set directoryCreateMask(value: number) {
    this._directoryCreateMask = value;
  }
  public resetDirectoryCreateMask() {
    this._directoryCreateMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryCreateMaskInput() {
    return this._directoryCreateMask;
  }

  // directory_create_mode - computed: true, optional: true, required: false
  private _directoryCreateMode?: number; 
  public get directoryCreateMode() {
    return this.getNumberAttribute('directory_create_mode');
  }
  public set directoryCreateMode(value: number) {
    this._directoryCreateMode = value;
  }
  public resetDirectoryCreateMode() {
    this._directoryCreateMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryCreateModeInput() {
    return this._directoryCreateMode;
  }

  // file_create_mask - computed: true, optional: true, required: false
  private _fileCreateMask?: number; 
  public get fileCreateMask() {
    return this.getNumberAttribute('file_create_mask');
  }
  public set fileCreateMask(value: number) {
    this._fileCreateMask = value;
  }
  public resetFileCreateMask() {
    this._fileCreateMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileCreateMaskInput() {
    return this._fileCreateMask;
  }

  // file_create_mode - computed: true, optional: true, required: false
  private _fileCreateMode?: number; 
  public get fileCreateMode() {
    return this.getNumberAttribute('file_create_mode');
  }
  public set fileCreateMode(value: number) {
    this._fileCreateMode = value;
  }
  public resetFileCreateMode() {
    this._fileCreateMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileCreateModeInput() {
    return this._fileCreateMode;
  }

  // file_filter_extensions - computed: true, optional: true, required: false
  private _fileFilterExtensions?: string[]; 
  public get fileFilterExtensions() {
    return cdktf.Fn.tolist(this.getListAttribute('file_filter_extensions'));
  }
  public set fileFilterExtensions(value: string[]) {
    this._fileFilterExtensions = value;
  }
  public resetFileFilterExtensions() {
    this._fileFilterExtensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileFilterExtensionsInput() {
    return this._fileFilterExtensions;
  }

  // file_filter_type - computed: true, optional: true, required: false
  private _fileFilterType?: string; 
  public get fileFilterType() {
    return this.getStringAttribute('file_filter_type');
  }
  public set fileFilterType(value: string) {
    this._fileFilterType = value;
  }
  public resetFileFilterType() {
    this._fileFilterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileFilterTypeInput() {
    return this._fileFilterType;
  }

  // file_filtering_enabled - computed: true, optional: true, required: false
  private _fileFilteringEnabled?: boolean | cdktf.IResolvable; 
  public get fileFilteringEnabled() {
    return this.getBooleanAttribute('file_filtering_enabled');
  }
  public set fileFilteringEnabled(value: boolean | cdktf.IResolvable) {
    this._fileFilteringEnabled = value;
  }
  public resetFileFilteringEnabled() {
    this._fileFilteringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileFilteringEnabledInput() {
    return this._fileFilteringEnabled;
  }

  // hide_dot_files - computed: true, optional: true, required: false
  private _hideDotFiles?: boolean | cdktf.IResolvable; 
  public get hideDotFiles() {
    return this.getBooleanAttribute('hide_dot_files');
  }
  public set hideDotFiles(value: boolean | cdktf.IResolvable) {
    this._hideDotFiles = value;
  }
  public resetHideDotFiles() {
    this._hideDotFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideDotFilesInput() {
    return this._hideDotFiles;
  }

  // host_acl - computed: true, optional: true, required: false
  private _hostAcl?: string[]; 
  public get hostAcl() {
    return cdktf.Fn.tolist(this.getListAttribute('host_acl'));
  }
  public set hostAcl(value: string[]) {
    this._hostAcl = value;
  }
  public resetHostAcl() {
    this._hostAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostAclInput() {
    return this._hostAcl;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // impersonate_guest - computed: true, optional: true, required: false
  private _impersonateGuest?: string; 
  public get impersonateGuest() {
    return this.getStringAttribute('impersonate_guest');
  }
  public set impersonateGuest(value: string) {
    this._impersonateGuest = value;
  }
  public resetImpersonateGuest() {
    this._impersonateGuest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get impersonateGuestInput() {
    return this._impersonateGuest;
  }

  // impersonate_user - computed: true, optional: true, required: false
  private _impersonateUser?: string; 
  public get impersonateUser() {
    return this.getStringAttribute('impersonate_user');
  }
  public set impersonateUser(value: string) {
    this._impersonateUser = value;
  }
  public resetImpersonateUser() {
    this._impersonateUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get impersonateUserInput() {
    return this._impersonateUser;
  }

  // inheritable_path_acl - computed: true, optional: true, required: false
  private _inheritablePathAcl?: boolean | cdktf.IResolvable; 
  public get inheritablePathAcl() {
    return this.getBooleanAttribute('inheritable_path_acl');
  }
  public set inheritablePathAcl(value: boolean | cdktf.IResolvable) {
    this._inheritablePathAcl = value;
  }
  public resetInheritablePathAcl() {
    this._inheritablePathAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritablePathAclInput() {
    return this._inheritablePathAcl;
  }

  // mangle_byte_start - computed: true, optional: true, required: false
  private _mangleByteStart?: number; 
  public get mangleByteStart() {
    return this.getNumberAttribute('mangle_byte_start');
  }
  public set mangleByteStart(value: number) {
    this._mangleByteStart = value;
  }
  public resetMangleByteStart() {
    this._mangleByteStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mangleByteStartInput() {
    return this._mangleByteStart;
  }

  // mangle_map - computed: true, optional: true, required: false
  private _mangleMap?: string[]; 
  public get mangleMap() {
    return cdktf.Fn.tolist(this.getListAttribute('mangle_map'));
  }
  public set mangleMap(value: string[]) {
    this._mangleMap = value;
  }
  public resetMangleMap() {
    this._mangleMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mangleMapInput() {
    return this._mangleMap;
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

  // ntfs_acl_support - computed: true, optional: true, required: false
  private _ntfsAclSupport?: boolean | cdktf.IResolvable; 
  public get ntfsAclSupport() {
    return this.getBooleanAttribute('ntfs_acl_support');
  }
  public set ntfsAclSupport(value: boolean | cdktf.IResolvable) {
    this._ntfsAclSupport = value;
  }
  public resetNtfsAclSupport() {
    this._ntfsAclSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntfsAclSupportInput() {
    return this._ntfsAclSupport;
  }

  // oplocks - computed: true, optional: true, required: false
  private _oplocks?: boolean | cdktf.IResolvable; 
  public get oplocks() {
    return this.getBooleanAttribute('oplocks');
  }
  public set oplocks(value: boolean | cdktf.IResolvable) {
    this._oplocks = value;
  }
  public resetOplocks() {
    this._oplocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oplocksInput() {
    return this._oplocks;
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
  private _permissions = new SmbSharePermissionsList(this, "permissions", true);
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: SmbSharePermissions[] | cdktf.IResolvable) {
    this._permissions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }

  // run_as_root - computed: true, optional: true, required: false
  private _runAsRoot = new SmbShareRunAsRootList(this, "run_as_root", true);
  public get runAsRoot() {
    return this._runAsRoot;
  }
  public putRunAsRoot(value: SmbShareRunAsRoot[] | cdktf.IResolvable) {
    this._runAsRoot.internalValue = value;
  }
  public resetRunAsRoot() {
    this._runAsRoot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsRootInput() {
    return this._runAsRoot.internalValue;
  }

  // smb3_encryption_enabled - computed: true, optional: true, required: false
  private _smb3EncryptionEnabled?: boolean | cdktf.IResolvable; 
  public get smb3EncryptionEnabled() {
    return this.getBooleanAttribute('smb3_encryption_enabled');
  }
  public set smb3EncryptionEnabled(value: boolean | cdktf.IResolvable) {
    this._smb3EncryptionEnabled = value;
  }
  public resetSmb3EncryptionEnabled() {
    this._smb3EncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smb3EncryptionEnabledInput() {
    return this._smb3EncryptionEnabled;
  }

  // sparse_file - computed: true, optional: true, required: false
  private _sparseFile?: boolean | cdktf.IResolvable; 
  public get sparseFile() {
    return this.getBooleanAttribute('sparse_file');
  }
  public set sparseFile(value: boolean | cdktf.IResolvable) {
    this._sparseFile = value;
  }
  public resetSparseFile() {
    this._sparseFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparseFileInput() {
    return this._sparseFile;
  }

  // strict_ca_lockout - computed: true, optional: true, required: false
  private _strictCaLockout?: boolean | cdktf.IResolvable; 
  public get strictCaLockout() {
    return this.getBooleanAttribute('strict_ca_lockout');
  }
  public set strictCaLockout(value: boolean | cdktf.IResolvable) {
    this._strictCaLockout = value;
  }
  public resetStrictCaLockout() {
    this._strictCaLockout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictCaLockoutInput() {
    return this._strictCaLockout;
  }

  // strict_flush - computed: true, optional: true, required: false
  private _strictFlush?: boolean | cdktf.IResolvable; 
  public get strictFlush() {
    return this.getBooleanAttribute('strict_flush');
  }
  public set strictFlush(value: boolean | cdktf.IResolvable) {
    this._strictFlush = value;
  }
  public resetStrictFlush() {
    this._strictFlush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictFlushInput() {
    return this._strictFlush;
  }

  // strict_locking - computed: true, optional: true, required: false
  private _strictLocking?: boolean | cdktf.IResolvable; 
  public get strictLocking() {
    return this.getBooleanAttribute('strict_locking');
  }
  public set strictLocking(value: boolean | cdktf.IResolvable) {
    this._strictLocking = value;
  }
  public resetStrictLocking() {
    this._strictLocking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictLockingInput() {
    return this._strictLocking;
  }

  // zid - computed: true, optional: false, required: false
  public get zid() {
    return this.getNumberAttribute('zid');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_based_enumeration: cdktf.booleanToTerraform(this._accessBasedEnumeration),
      access_based_enumeration_root_only: cdktf.booleanToTerraform(this._accessBasedEnumerationRootOnly),
      allow_delete_readonly: cdktf.booleanToTerraform(this._allowDeleteReadonly),
      allow_execute_always: cdktf.booleanToTerraform(this._allowExecuteAlways),
      allow_variable_expansion: cdktf.booleanToTerraform(this._allowVariableExpansion),
      auto_create_directory: cdktf.booleanToTerraform(this._autoCreateDirectory),
      browsable: cdktf.booleanToTerraform(this._browsable),
      ca_timeout: cdktf.numberToTerraform(this._caTimeout),
      ca_write_integrity: cdktf.stringToTerraform(this._caWriteIntegrity),
      change_notify: cdktf.stringToTerraform(this._changeNotify),
      create_path: cdktf.booleanToTerraform(this._createPath),
      create_permissions: cdktf.stringToTerraform(this._createPermissions),
      csc_policy: cdktf.stringToTerraform(this._cscPolicy),
      description: cdktf.stringToTerraform(this._description),
      directory_create_mask: cdktf.numberToTerraform(this._directoryCreateMask),
      directory_create_mode: cdktf.numberToTerraform(this._directoryCreateMode),
      file_create_mask: cdktf.numberToTerraform(this._fileCreateMask),
      file_create_mode: cdktf.numberToTerraform(this._fileCreateMode),
      file_filter_extensions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fileFilterExtensions),
      file_filter_type: cdktf.stringToTerraform(this._fileFilterType),
      file_filtering_enabled: cdktf.booleanToTerraform(this._fileFilteringEnabled),
      hide_dot_files: cdktf.booleanToTerraform(this._hideDotFiles),
      host_acl: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostAcl),
      impersonate_guest: cdktf.stringToTerraform(this._impersonateGuest),
      impersonate_user: cdktf.stringToTerraform(this._impersonateUser),
      inheritable_path_acl: cdktf.booleanToTerraform(this._inheritablePathAcl),
      mangle_byte_start: cdktf.numberToTerraform(this._mangleByteStart),
      mangle_map: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mangleMap),
      name: cdktf.stringToTerraform(this._name),
      ntfs_acl_support: cdktf.booleanToTerraform(this._ntfsAclSupport),
      oplocks: cdktf.booleanToTerraform(this._oplocks),
      path: cdktf.stringToTerraform(this._path),
      permissions: cdktf.listMapper(smbSharePermissionsToTerraform, false)(this._permissions.internalValue),
      run_as_root: cdktf.listMapper(smbShareRunAsRootToTerraform, false)(this._runAsRoot.internalValue),
      smb3_encryption_enabled: cdktf.booleanToTerraform(this._smb3EncryptionEnabled),
      sparse_file: cdktf.booleanToTerraform(this._sparseFile),
      strict_ca_lockout: cdktf.booleanToTerraform(this._strictCaLockout),
      strict_flush: cdktf.booleanToTerraform(this._strictFlush),
      strict_locking: cdktf.booleanToTerraform(this._strictLocking),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_based_enumeration: {
        value: cdktf.booleanToHclTerraform(this._accessBasedEnumeration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      access_based_enumeration_root_only: {
        value: cdktf.booleanToHclTerraform(this._accessBasedEnumerationRootOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_delete_readonly: {
        value: cdktf.booleanToHclTerraform(this._allowDeleteReadonly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_execute_always: {
        value: cdktf.booleanToHclTerraform(this._allowExecuteAlways),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_variable_expansion: {
        value: cdktf.booleanToHclTerraform(this._allowVariableExpansion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_create_directory: {
        value: cdktf.booleanToHclTerraform(this._autoCreateDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      browsable: {
        value: cdktf.booleanToHclTerraform(this._browsable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ca_timeout: {
        value: cdktf.numberToHclTerraform(this._caTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ca_write_integrity: {
        value: cdktf.stringToHclTerraform(this._caWriteIntegrity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      change_notify: {
        value: cdktf.stringToHclTerraform(this._changeNotify),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_path: {
        value: cdktf.booleanToHclTerraform(this._createPath),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      create_permissions: {
        value: cdktf.stringToHclTerraform(this._createPermissions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csc_policy: {
        value: cdktf.stringToHclTerraform(this._cscPolicy),
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
      directory_create_mask: {
        value: cdktf.numberToHclTerraform(this._directoryCreateMask),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      directory_create_mode: {
        value: cdktf.numberToHclTerraform(this._directoryCreateMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      file_create_mask: {
        value: cdktf.numberToHclTerraform(this._fileCreateMask),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      file_create_mode: {
        value: cdktf.numberToHclTerraform(this._fileCreateMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      file_filter_extensions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fileFilterExtensions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      file_filter_type: {
        value: cdktf.stringToHclTerraform(this._fileFilterType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_filtering_enabled: {
        value: cdktf.booleanToHclTerraform(this._fileFilteringEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hide_dot_files: {
        value: cdktf.booleanToHclTerraform(this._hideDotFiles),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host_acl: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostAcl),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      impersonate_guest: {
        value: cdktf.stringToHclTerraform(this._impersonateGuest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      impersonate_user: {
        value: cdktf.stringToHclTerraform(this._impersonateUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inheritable_path_acl: {
        value: cdktf.booleanToHclTerraform(this._inheritablePathAcl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mangle_byte_start: {
        value: cdktf.numberToHclTerraform(this._mangleByteStart),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mangle_map: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mangleMap),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ntfs_acl_support: {
        value: cdktf.booleanToHclTerraform(this._ntfsAclSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      oplocks: {
        value: cdktf.booleanToHclTerraform(this._oplocks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permissions: {
        value: cdktf.listMapperHcl(smbSharePermissionsToHclTerraform, false)(this._permissions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SmbSharePermissionsList",
      },
      run_as_root: {
        value: cdktf.listMapperHcl(smbShareRunAsRootToHclTerraform, false)(this._runAsRoot.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SmbShareRunAsRootList",
      },
      smb3_encryption_enabled: {
        value: cdktf.booleanToHclTerraform(this._smb3EncryptionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sparse_file: {
        value: cdktf.booleanToHclTerraform(this._sparseFile),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      strict_ca_lockout: {
        value: cdktf.booleanToHclTerraform(this._strictCaLockout),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      strict_flush: {
        value: cdktf.booleanToHclTerraform(this._strictFlush),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      strict_locking: {
        value: cdktf.booleanToHclTerraform(this._strictLocking),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
