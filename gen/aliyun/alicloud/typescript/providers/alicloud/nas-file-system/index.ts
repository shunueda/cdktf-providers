// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_file_system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NasFileSystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_file_system#capacity NasFileSystem#capacity}
  */
  readonly capacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_file_system#description NasFileSystem#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_file_system#encrypt_type NasFileSystem#encrypt_type}
  */
  readonly encryptType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_file_system#file_system_type NasFileSystem#file_system_type}
  */
  readonly fileSystemType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_file_system#id NasFileSystem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_file_system#keytab NasFileSystem#keytab}
  */
  readonly keytab?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_file_system#keytab_md5 NasFileSystem#keytab_md5}
  */
  readonly keytabMd5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_file_system#kms_key_id NasFileSystem#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_file_system#protocol_type NasFileSystem#protocol_type}
  */
  readonly protocolType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_file_system#resource_group_id NasFileSystem#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_file_system#snapshot_id NasFileSystem#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_file_system#storage_type NasFileSystem#storage_type}
  */
  readonly storageType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_file_system#tags NasFileSystem#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_file_system#vpc_id NasFileSystem#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_file_system#vswitch_id NasFileSystem#vswitch_id}
  */
  readonly vswitchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_file_system#zone_id NasFileSystem#zone_id}
  */
  readonly zoneId?: string;
  /**
  * nfs_acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_file_system#nfs_acl NasFileSystem#nfs_acl}
  */
  readonly nfsAcl?: NasFileSystemNfsAcl;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_file_system#options NasFileSystem#options}
  */
  readonly options?: NasFileSystemOptions;
  /**
  * recycle_bin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_file_system#recycle_bin NasFileSystem#recycle_bin}
  */
  readonly recycleBin?: NasFileSystemRecycleBin;
  /**
  * smb_acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_file_system#smb_acl NasFileSystem#smb_acl}
  */
  readonly smbAcl?: NasFileSystemSmbAcl;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_file_system#timeouts NasFileSystem#timeouts}
  */
  readonly timeouts?: NasFileSystemTimeouts;
}
export interface NasFileSystemNfsAcl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_file_system#enabled NasFileSystem#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function nasFileSystemNfsAclToTerraform(struct?: NasFileSystemNfsAclOutputReference | NasFileSystemNfsAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function nasFileSystemNfsAclToHclTerraform(struct?: NasFileSystemNfsAclOutputReference | NasFileSystemNfsAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NasFileSystemNfsAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NasFileSystemNfsAcl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NasFileSystemNfsAcl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface NasFileSystemOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_file_system#enable_oplock NasFileSystem#enable_oplock}
  */
  readonly enableOplock?: boolean | cdktf.IResolvable;
}

export function nasFileSystemOptionsToTerraform(struct?: NasFileSystemOptionsOutputReference | NasFileSystemOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_oplock: cdktf.booleanToTerraform(struct!.enableOplock),
  }
}


export function nasFileSystemOptionsToHclTerraform(struct?: NasFileSystemOptionsOutputReference | NasFileSystemOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_oplock: {
      value: cdktf.booleanToHclTerraform(struct!.enableOplock),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NasFileSystemOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NasFileSystemOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableOplock !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableOplock = this._enableOplock;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NasFileSystemOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableOplock = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableOplock = value.enableOplock;
    }
  }

  // enable_oplock - computed: true, optional: true, required: false
  private _enableOplock?: boolean | cdktf.IResolvable; 
  public get enableOplock() {
    return this.getBooleanAttribute('enable_oplock');
  }
  public set enableOplock(value: boolean | cdktf.IResolvable) {
    this._enableOplock = value;
  }
  public resetEnableOplock() {
    this._enableOplock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOplockInput() {
    return this._enableOplock;
  }
}
export interface NasFileSystemRecycleBin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_file_system#reserved_days NasFileSystem#reserved_days}
  */
  readonly reservedDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_file_system#status NasFileSystem#status}
  */
  readonly status?: string;
}

export function nasFileSystemRecycleBinToTerraform(struct?: NasFileSystemRecycleBinOutputReference | NasFileSystemRecycleBin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reserved_days: cdktf.numberToTerraform(struct!.reservedDays),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function nasFileSystemRecycleBinToHclTerraform(struct?: NasFileSystemRecycleBinOutputReference | NasFileSystemRecycleBin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reserved_days: {
      value: cdktf.numberToHclTerraform(struct!.reservedDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NasFileSystemRecycleBinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NasFileSystemRecycleBin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reservedDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedDays = this._reservedDays;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NasFileSystemRecycleBin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._reservedDays = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._reservedDays = value.reservedDays;
      this._status = value.status;
    }
  }

  // enable_time - computed: true, optional: false, required: false
  public get enableTime() {
    return this.getStringAttribute('enable_time');
  }

  // reserved_days - computed: true, optional: true, required: false
  private _reservedDays?: number; 
  public get reservedDays() {
    return this.getNumberAttribute('reserved_days');
  }
  public set reservedDays(value: number) {
    this._reservedDays = value;
  }
  public resetReservedDays() {
    this._reservedDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedDaysInput() {
    return this._reservedDays;
  }

  // secondary_size - computed: true, optional: false, required: false
  public get secondarySize() {
    return this.getNumberAttribute('secondary_size');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface NasFileSystemSmbAcl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_file_system#enable_anonymous_access NasFileSystem#enable_anonymous_access}
  */
  readonly enableAnonymousAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_file_system#enabled NasFileSystem#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_file_system#encrypt_data NasFileSystem#encrypt_data}
  */
  readonly encryptData?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_file_system#home_dir_path NasFileSystem#home_dir_path}
  */
  readonly homeDirPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_file_system#reject_unencrypted_access NasFileSystem#reject_unencrypted_access}
  */
  readonly rejectUnencryptedAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_file_system#super_admin_sid NasFileSystem#super_admin_sid}
  */
  readonly superAdminSid?: string;
}

export function nasFileSystemSmbAclToTerraform(struct?: NasFileSystemSmbAclOutputReference | NasFileSystemSmbAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_anonymous_access: cdktf.booleanToTerraform(struct!.enableAnonymousAccess),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    encrypt_data: cdktf.booleanToTerraform(struct!.encryptData),
    home_dir_path: cdktf.stringToTerraform(struct!.homeDirPath),
    reject_unencrypted_access: cdktf.booleanToTerraform(struct!.rejectUnencryptedAccess),
    super_admin_sid: cdktf.stringToTerraform(struct!.superAdminSid),
  }
}


export function nasFileSystemSmbAclToHclTerraform(struct?: NasFileSystemSmbAclOutputReference | NasFileSystemSmbAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_anonymous_access: {
      value: cdktf.booleanToHclTerraform(struct!.enableAnonymousAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encrypt_data: {
      value: cdktf.booleanToHclTerraform(struct!.encryptData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    home_dir_path: {
      value: cdktf.stringToHclTerraform(struct!.homeDirPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reject_unencrypted_access: {
      value: cdktf.booleanToHclTerraform(struct!.rejectUnencryptedAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    super_admin_sid: {
      value: cdktf.stringToHclTerraform(struct!.superAdminSid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NasFileSystemSmbAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NasFileSystemSmbAcl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableAnonymousAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAnonymousAccess = this._enableAnonymousAccess;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._encryptData !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptData = this._encryptData;
    }
    if (this._homeDirPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.homeDirPath = this._homeDirPath;
    }
    if (this._rejectUnencryptedAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.rejectUnencryptedAccess = this._rejectUnencryptedAccess;
    }
    if (this._superAdminSid !== undefined) {
      hasAnyValues = true;
      internalValueResult.superAdminSid = this._superAdminSid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NasFileSystemSmbAcl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableAnonymousAccess = undefined;
      this._enabled = undefined;
      this._encryptData = undefined;
      this._homeDirPath = undefined;
      this._rejectUnencryptedAccess = undefined;
      this._superAdminSid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableAnonymousAccess = value.enableAnonymousAccess;
      this._enabled = value.enabled;
      this._encryptData = value.encryptData;
      this._homeDirPath = value.homeDirPath;
      this._rejectUnencryptedAccess = value.rejectUnencryptedAccess;
      this._superAdminSid = value.superAdminSid;
    }
  }

  // enable_anonymous_access - computed: true, optional: true, required: false
  private _enableAnonymousAccess?: boolean | cdktf.IResolvable; 
  public get enableAnonymousAccess() {
    return this.getBooleanAttribute('enable_anonymous_access');
  }
  public set enableAnonymousAccess(value: boolean | cdktf.IResolvable) {
    this._enableAnonymousAccess = value;
  }
  public resetEnableAnonymousAccess() {
    this._enableAnonymousAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAnonymousAccessInput() {
    return this._enableAnonymousAccess;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // encrypt_data - computed: false, optional: true, required: false
  private _encryptData?: boolean | cdktf.IResolvable; 
  public get encryptData() {
    return this.getBooleanAttribute('encrypt_data');
  }
  public set encryptData(value: boolean | cdktf.IResolvable) {
    this._encryptData = value;
  }
  public resetEncryptData() {
    this._encryptData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptDataInput() {
    return this._encryptData;
  }

  // home_dir_path - computed: false, optional: true, required: false
  private _homeDirPath?: string; 
  public get homeDirPath() {
    return this.getStringAttribute('home_dir_path');
  }
  public set homeDirPath(value: string) {
    this._homeDirPath = value;
  }
  public resetHomeDirPath() {
    this._homeDirPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homeDirPathInput() {
    return this._homeDirPath;
  }

  // reject_unencrypted_access - computed: false, optional: true, required: false
  private _rejectUnencryptedAccess?: boolean | cdktf.IResolvable; 
  public get rejectUnencryptedAccess() {
    return this.getBooleanAttribute('reject_unencrypted_access');
  }
  public set rejectUnencryptedAccess(value: boolean | cdktf.IResolvable) {
    this._rejectUnencryptedAccess = value;
  }
  public resetRejectUnencryptedAccess() {
    this._rejectUnencryptedAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectUnencryptedAccessInput() {
    return this._rejectUnencryptedAccess;
  }

  // super_admin_sid - computed: false, optional: true, required: false
  private _superAdminSid?: string; 
  public get superAdminSid() {
    return this.getStringAttribute('super_admin_sid');
  }
  public set superAdminSid(value: string) {
    this._superAdminSid = value;
  }
  public resetSuperAdminSid() {
    this._superAdminSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get superAdminSidInput() {
    return this._superAdminSid;
  }
}
export interface NasFileSystemTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_file_system#create NasFileSystem#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_file_system#delete NasFileSystem#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_file_system#update NasFileSystem#update}
  */
  readonly update?: string;
}

export function nasFileSystemTimeoutsToTerraform(struct?: NasFileSystemTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function nasFileSystemTimeoutsToHclTerraform(struct?: NasFileSystemTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NasFileSystemTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NasFileSystemTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NasFileSystemTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_file_system alicloud_nas_file_system}
*/
export class NasFileSystem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_nas_file_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NasFileSystem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NasFileSystem to import
  * @param importFromId The id of the existing NasFileSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_file_system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NasFileSystem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_nas_file_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/nas_file_system alicloud_nas_file_system} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NasFileSystemConfig
  */
  public constructor(scope: Construct, id: string, config: NasFileSystemConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_nas_file_system',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._capacity = config.capacity;
    this._description = config.description;
    this._encryptType = config.encryptType;
    this._fileSystemType = config.fileSystemType;
    this._id = config.id;
    this._keytab = config.keytab;
    this._keytabMd5 = config.keytabMd5;
    this._kmsKeyId = config.kmsKeyId;
    this._protocolType = config.protocolType;
    this._resourceGroupId = config.resourceGroupId;
    this._snapshotId = config.snapshotId;
    this._storageType = config.storageType;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._vswitchId = config.vswitchId;
    this._zoneId = config.zoneId;
    this._nfsAcl.internalValue = config.nfsAcl;
    this._options.internalValue = config.options;
    this._recycleBin.internalValue = config.recycleBin;
    this._smbAcl.internalValue = config.smbAcl;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capacity - computed: true, optional: true, required: false
  private _capacity?: number; 
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // encrypt_type - computed: true, optional: true, required: false
  private _encryptType?: number; 
  public get encryptType() {
    return this.getNumberAttribute('encrypt_type');
  }
  public set encryptType(value: number) {
    this._encryptType = value;
  }
  public resetEncryptType() {
    this._encryptType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptTypeInput() {
    return this._encryptType;
  }

  // file_system_type - computed: true, optional: true, required: false
  private _fileSystemType?: string; 
  public get fileSystemType() {
    return this.getStringAttribute('file_system_type');
  }
  public set fileSystemType(value: string) {
    this._fileSystemType = value;
  }
  public resetFileSystemType() {
    this._fileSystemType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemTypeInput() {
    return this._fileSystemType;
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

  // keytab - computed: false, optional: true, required: false
  private _keytab?: string; 
  public get keytab() {
    return this.getStringAttribute('keytab');
  }
  public set keytab(value: string) {
    this._keytab = value;
  }
  public resetKeytab() {
    this._keytab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keytabInput() {
    return this._keytab;
  }

  // keytab_md5 - computed: false, optional: true, required: false
  private _keytabMd5?: string; 
  public get keytabMd5() {
    return this.getStringAttribute('keytab_md5');
  }
  public set keytabMd5(value: string) {
    this._keytabMd5 = value;
  }
  public resetKeytabMd5() {
    this._keytabMd5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keytabMd5Input() {
    return this._keytabMd5;
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // protocol_type - computed: false, optional: false, required: true
  private _protocolType?: string; 
  public get protocolType() {
    return this.getStringAttribute('protocol_type');
  }
  public set protocolType(value: string) {
    this._protocolType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolTypeInput() {
    return this._protocolType;
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // snapshot_id - computed: false, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage_type - computed: false, optional: false, required: true
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vswitch_id - computed: false, optional: true, required: false
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  public resetVswitchId() {
    this._vswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // zone_id - computed: true, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // nfs_acl - computed: false, optional: true, required: false
  private _nfsAcl = new NasFileSystemNfsAclOutputReference(this, "nfs_acl");
  public get nfsAcl() {
    return this._nfsAcl;
  }
  public putNfsAcl(value: NasFileSystemNfsAcl) {
    this._nfsAcl.internalValue = value;
  }
  public resetNfsAcl() {
    this._nfsAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsAclInput() {
    return this._nfsAcl.internalValue;
  }

  // options - computed: false, optional: true, required: false
  private _options = new NasFileSystemOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: NasFileSystemOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // recycle_bin - computed: false, optional: true, required: false
  private _recycleBin = new NasFileSystemRecycleBinOutputReference(this, "recycle_bin");
  public get recycleBin() {
    return this._recycleBin;
  }
  public putRecycleBin(value: NasFileSystemRecycleBin) {
    this._recycleBin.internalValue = value;
  }
  public resetRecycleBin() {
    this._recycleBin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recycleBinInput() {
    return this._recycleBin.internalValue;
  }

  // smb_acl - computed: false, optional: true, required: false
  private _smbAcl = new NasFileSystemSmbAclOutputReference(this, "smb_acl");
  public get smbAcl() {
    return this._smbAcl;
  }
  public putSmbAcl(value: NasFileSystemSmbAcl) {
    this._smbAcl.internalValue = value;
  }
  public resetSmbAcl() {
    this._smbAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smbAclInput() {
    return this._smbAcl.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NasFileSystemTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NasFileSystemTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capacity: cdktf.numberToTerraform(this._capacity),
      description: cdktf.stringToTerraform(this._description),
      encrypt_type: cdktf.numberToTerraform(this._encryptType),
      file_system_type: cdktf.stringToTerraform(this._fileSystemType),
      id: cdktf.stringToTerraform(this._id),
      keytab: cdktf.stringToTerraform(this._keytab),
      keytab_md5: cdktf.stringToTerraform(this._keytabMd5),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      protocol_type: cdktf.stringToTerraform(this._protocolType),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      snapshot_id: cdktf.stringToTerraform(this._snapshotId),
      storage_type: cdktf.stringToTerraform(this._storageType),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      nfs_acl: nasFileSystemNfsAclToTerraform(this._nfsAcl.internalValue),
      options: nasFileSystemOptionsToTerraform(this._options.internalValue),
      recycle_bin: nasFileSystemRecycleBinToTerraform(this._recycleBin.internalValue),
      smb_acl: nasFileSystemSmbAclToTerraform(this._smbAcl.internalValue),
      timeouts: nasFileSystemTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capacity: {
        value: cdktf.numberToHclTerraform(this._capacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encrypt_type: {
        value: cdktf.numberToHclTerraform(this._encryptType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      file_system_type: {
        value: cdktf.stringToHclTerraform(this._fileSystemType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keytab: {
        value: cdktf.stringToHclTerraform(this._keytab),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keytab_md5: {
        value: cdktf.stringToHclTerraform(this._keytabMd5),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol_type: {
        value: cdktf.stringToHclTerraform(this._protocolType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_id: {
        value: cdktf.stringToHclTerraform(this._snapshotId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_type: {
        value: cdktf.stringToHclTerraform(this._storageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nfs_acl: {
        value: nasFileSystemNfsAclToHclTerraform(this._nfsAcl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NasFileSystemNfsAclList",
      },
      options: {
        value: nasFileSystemOptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NasFileSystemOptionsList",
      },
      recycle_bin: {
        value: nasFileSystemRecycleBinToHclTerraform(this._recycleBin.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NasFileSystemRecycleBinList",
      },
      smb_acl: {
        value: nasFileSystemSmbAclToHclTerraform(this._smbAcl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NasFileSystemSmbAclList",
      },
      timeouts: {
        value: nasFileSystemTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NasFileSystemTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
