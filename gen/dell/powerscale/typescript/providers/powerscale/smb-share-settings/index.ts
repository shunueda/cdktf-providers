// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SmbShareSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Only enumerate files and folders the requesting user has access to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share_settings#access_based_enumeration SmbShareSettings#access_based_enumeration}
  */
  readonly accessBasedEnumeration?: boolean | cdktf.IResolvable;
  /**
  * Access-based enumeration on only the root directory of the share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share_settings#access_based_enumeration_root_only SmbShareSettings#access_based_enumeration_root_only}
  */
  readonly accessBasedEnumerationRootOnly?: boolean | cdktf.IResolvable;
  /**
  * Allow deletion of read-only files in the share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share_settings#allow_delete_readonly SmbShareSettings#allow_delete_readonly}
  */
  readonly allowDeleteReadonly?: boolean | cdktf.IResolvable;
  /**
  * Allows users to execute files they have read rights for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share_settings#allow_execute_always SmbShareSettings#allow_execute_always}
  */
  readonly allowExecuteAlways?: boolean | cdktf.IResolvable;
  /**
  * Persistent open timeout for the share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share_settings#ca_timeout SmbShareSettings#ca_timeout}
  */
  readonly caTimeout?: number;
  /**
  * Specify the level of write-integrity on continuously available shares. Acceptable values: none, write-read-coherent, full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share_settings#ca_write_integrity SmbShareSettings#ca_write_integrity}
  */
  readonly caWriteIntegrity?: string;
  /**
  * Specify level of change notification alerts on the share. Acceptable values: all, norecurse, none
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share_settings#change_notify SmbShareSettings#change_notify}
  */
  readonly changeNotify?: string;
  /**
  * Specify if persistent opens are allowed on the share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share_settings#continuously_available SmbShareSettings#continuously_available}
  */
  readonly continuouslyAvailable?: boolean | cdktf.IResolvable;
  /**
  * Set the create permissions for new files and directories in share. Acceptable values: default acl, inherit mode bits, use create mask and mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share_settings#create_permissions SmbShareSettings#create_permissions}
  */
  readonly createPermissions?: string;
  /**
  * Client-side caching policy for the shares. Acceptable values: manual, documents, programs, none
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share_settings#csc_policy SmbShareSettings#csc_policy}
  */
  readonly cscPolicy?: string;
  /**
  * Unix umask or mode bits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share_settings#directory_create_mask SmbShareSettings#directory_create_mask}
  */
  readonly directoryCreateMask?: number;
  /**
  * Unix umask or mode bits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share_settings#directory_create_mode SmbShareSettings#directory_create_mode}
  */
  readonly directoryCreateMode?: number;
  /**
  * Unix umask or mode bits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share_settings#file_create_mask SmbShareSettings#file_create_mask}
  */
  readonly fileCreateMask?: number;
  /**
  * Unix umask or mode bits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share_settings#file_create_mode SmbShareSettings#file_create_mode}
  */
  readonly fileCreateMode?: number;
  /**
  * Specifies the list of file extensions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share_settings#file_filter_extensions SmbShareSettings#file_filter_extensions}
  */
  readonly fileFilterExtensions?: string[];
  /**
  * Specifies if filter list is for deny or allow. Default is deny.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share_settings#file_filter_type SmbShareSettings#file_filter_type}
  */
  readonly fileFilterType?: string;
  /**
  * Enables file filtering on the share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share_settings#file_filtering_enabled SmbShareSettings#file_filtering_enabled}
  */
  readonly fileFilteringEnabled?: boolean | cdktf.IResolvable;
  /**
  * Hide files and directories that begin with a period '.'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share_settings#hide_dot_files SmbShareSettings#hide_dot_files}
  */
  readonly hideDotFiles?: boolean | cdktf.IResolvable;
  /**
  * An ACL expressing which hosts are allowed access. A deny clause must be the final entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share_settings#host_acl SmbShareSettings#host_acl}
  */
  readonly hostAcl?: string[];
  /**
  * Specify the condition in which user access is done as the guest account. Acceptable values: always, bad user, never
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share_settings#impersonate_guest SmbShareSettings#impersonate_guest}
  */
  readonly impersonateGuest?: string;
  /**
  * User account to be used as guest account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share_settings#impersonate_user SmbShareSettings#impersonate_user}
  */
  readonly impersonateUser?: string;
  /**
  * Specifies the wchar_t starting point for automatic byte mangling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share_settings#mangle_byte_start SmbShareSettings#mangle_byte_start}
  */
  readonly mangleByteStart?: number;
  /**
  * Character mangle map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share_settings#mangle_map SmbShareSettings#mangle_map}
  */
  readonly mangleMap?: string[];
  /**
  * Support NTFS ACLs on files and directories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share_settings#ntfs_acl_support SmbShareSettings#ntfs_acl_support}
  */
  readonly ntfsAclSupport?: boolean | cdktf.IResolvable;
  /**
  * Allow oplock requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share_settings#oplocks SmbShareSettings#oplocks}
  */
  readonly oplocks?: boolean | cdktf.IResolvable;
  /**
  * When specified as 'effective', or not specified, all fields are returned. When specified as 'user', only fields with non-default values are shown. When specified as 'default', the original values are returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share_settings#scope SmbShareSettings#scope}
  */
  readonly scope?: string;
  /**
  * Enables SMB3 encryption for the share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share_settings#smb3_encryption_enabled SmbShareSettings#smb3_encryption_enabled}
  */
  readonly smb3EncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enables sparse file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share_settings#sparse_file SmbShareSettings#sparse_file}
  */
  readonly sparseFile?: boolean | cdktf.IResolvable;
  /**
  * Specifies if persistent opens would do strict lockout on the share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share_settings#strict_ca_lockout SmbShareSettings#strict_ca_lockout}
  */
  readonly strictCaLockout?: boolean | cdktf.IResolvable;
  /**
  * Handle SMB flush operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share_settings#strict_flush SmbShareSettings#strict_flush}
  */
  readonly strictFlush?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether byte range locks contend against SMB I/O.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share_settings#strict_locking SmbShareSettings#strict_locking}
  */
  readonly strictLocking?: boolean | cdktf.IResolvable;
  /**
  * Name of the access zone in which to update settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share_settings#zone SmbShareSettings#zone}
  */
  readonly zone: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share_settings powerscale_smb_share_settings}
*/
export class SmbShareSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_smb_share_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SmbShareSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SmbShareSettings to import
  * @param importFromId The id of the existing SmbShareSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SmbShareSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_smb_share_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smb_share_settings powerscale_smb_share_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SmbShareSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: SmbShareSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'powerscale_smb_share_settings',
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
    this._accessBasedEnumeration = config.accessBasedEnumeration;
    this._accessBasedEnumerationRootOnly = config.accessBasedEnumerationRootOnly;
    this._allowDeleteReadonly = config.allowDeleteReadonly;
    this._allowExecuteAlways = config.allowExecuteAlways;
    this._caTimeout = config.caTimeout;
    this._caWriteIntegrity = config.caWriteIntegrity;
    this._changeNotify = config.changeNotify;
    this._continuouslyAvailable = config.continuouslyAvailable;
    this._createPermissions = config.createPermissions;
    this._cscPolicy = config.cscPolicy;
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
    this._mangleByteStart = config.mangleByteStart;
    this._mangleMap = config.mangleMap;
    this._ntfsAclSupport = config.ntfsAclSupport;
    this._oplocks = config.oplocks;
    this._scope = config.scope;
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

  // continuously_available - computed: true, optional: true, required: false
  private _continuouslyAvailable?: boolean | cdktf.IResolvable; 
  public get continuouslyAvailable() {
    return this.getBooleanAttribute('continuously_available');
  }
  public set continuouslyAvailable(value: boolean | cdktf.IResolvable) {
    this._continuouslyAvailable = value;
  }
  public resetContinuouslyAvailable() {
    this._continuouslyAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuouslyAvailableInput() {
    return this._continuouslyAvailable;
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

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
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
      ca_timeout: cdktf.numberToTerraform(this._caTimeout),
      ca_write_integrity: cdktf.stringToTerraform(this._caWriteIntegrity),
      change_notify: cdktf.stringToTerraform(this._changeNotify),
      continuously_available: cdktf.booleanToTerraform(this._continuouslyAvailable),
      create_permissions: cdktf.stringToTerraform(this._createPermissions),
      csc_policy: cdktf.stringToTerraform(this._cscPolicy),
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
      mangle_byte_start: cdktf.numberToTerraform(this._mangleByteStart),
      mangle_map: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mangleMap),
      ntfs_acl_support: cdktf.booleanToTerraform(this._ntfsAclSupport),
      oplocks: cdktf.booleanToTerraform(this._oplocks),
      scope: cdktf.stringToTerraform(this._scope),
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
      continuously_available: {
        value: cdktf.booleanToHclTerraform(this._continuouslyAvailable),
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
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
