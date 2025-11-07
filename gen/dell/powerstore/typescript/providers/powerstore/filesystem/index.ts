// https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/filesystem
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FilesystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * File system security access policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/filesystem#access_policy Filesystem#access_policy}
  */
  readonly accessPolicy?: string;
  /**
  * The Capacity Unit corresponding to the size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/filesystem#capacity_unit Filesystem#capacity_unit}
  */
  readonly capacityUnit?: string;
  /**
  * File system security access policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/filesystem#config_type Filesystem#config_type}
  */
  readonly configType?: string;
  /**
  * File system description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/filesystem#description Filesystem#description}
  */
  readonly description?: string;
  /**
  * State of the event notification services for all file systems of the NAS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/filesystem#file_events_publishing_mode Filesystem#file_events_publishing_mode}
  */
  readonly fileEventsPublishingMode?: string;
  /**
  * Type of filesystem: normal or snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/filesystem#flr_attributes Filesystem#flr_attributes}
  */
  readonly flrAttributes?: FilesystemFlrAttributes;
  /**
  * File system folder rename policies for the file system with multiprotocol access enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/filesystem#folder_rename_policy Filesystem#folder_rename_policy}
  */
  readonly folderRenamePolicy?: string;
  /**
  * Typical size of writes from the server or other computer using the VMware file system to the storage system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/filesystem#host_io_size Filesystem#host_io_size}
  */
  readonly hostIoSize?: string;
  /**
  * Indicates whether asynchronous MTIME is enabled on the file system or protocol snaps that are mounted writeable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/filesystem#is_async_mtime_enabled Filesystem#is_async_mtime_enabled}
  */
  readonly isAsyncMtimeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether notifications of changes to directory file structure are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/filesystem#is_smb_no_notify_enabled Filesystem#is_smb_no_notify_enabled}
  */
  readonly isSmbNoNotifyEnabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether file access notifications are enabled on the file system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/filesystem#is_smb_notify_on_access_enabled Filesystem#is_smb_notify_on_access_enabled}
  */
  readonly isSmbNotifyOnAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether file writes notifications are enabled on the file system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/filesystem#is_smb_notify_on_write_enabled Filesystem#is_smb_notify_on_write_enabled}
  */
  readonly isSmbNotifyOnWriteEnabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether opportunistic file locking is enabled on the file system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/filesystem#is_smb_op_locks_enabled Filesystem#is_smb_op_locks_enabled}
  */
  readonly isSmbOpLocksEnabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the synchronous writes option is enabled on the file system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/filesystem#is_smb_sync_writes_enabled Filesystem#is_smb_sync_writes_enabled}
  */
  readonly isSmbSyncWritesEnabled?: boolean | cdktf.IResolvable;
  /**
  * File system locking policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/filesystem#locking_policy Filesystem#locking_policy}
  */
  readonly lockingPolicy?: string;
  /**
  * Name of the file system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/filesystem#name Filesystem#name}
  */
  readonly name: string;
  /**
  * Unique identifier of the NAS Server on which the file system is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/filesystem#nas_server_id Filesystem#nas_server_id}
  */
  readonly nasServerId: string;
  /**
  * Unique identifier of the protection policy applied to the file system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/filesystem#protection_policy_id Filesystem#protection_policy_id}
  */
  readonly protectionPolicyId?: string;
  /**
  * Size that the file system presents to the host or end user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/filesystem#size Filesystem#size}
  */
  readonly size: number;
  /**
  * Lowest directory level to which the enabled notifications apply, if any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/filesystem#smb_notify_on_change_dir_depth Filesystem#smb_notify_on_change_dir_depth}
  */
  readonly smbNotifyOnChangeDirDepth?: number;
}
export interface FilesystemFlrAttributes {
  /**
  * Indicates whether locked files will be automatically delete from an FLR-enabled file system once their retention periods have expired.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/filesystem#auto_delete Filesystem#auto_delete}
  */
  readonly autoDelete?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to automatically lock files in an FLR-enabled file system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/filesystem#auto_lock Filesystem#auto_lock}
  */
  readonly autoLock?: boolean | cdktf.IResolvable;
  /**
  * The FLR type of the file system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/filesystem#default_retention Filesystem#default_retention}
  */
  readonly defaultRetention?: string;
  /**
  * The FLR type of the file system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/filesystem#maximum_retention Filesystem#maximum_retention}
  */
  readonly maximumRetention?: string;
  /**
  * The FLR type of the file system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/filesystem#minimum_retention Filesystem#minimum_retention}
  */
  readonly minimumRetention?: string;
  /**
  * The FLR type of the file system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/filesystem#mode Filesystem#mode}
  */
  readonly mode?: string;
  /**
  * Indicates how long to wait (in seconds) after files are modified before the files are automatically locked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/filesystem#policy_interval Filesystem#policy_interval}
  */
  readonly policyInterval?: number;
}

export function filesystemFlrAttributesToTerraform(struct?: FilesystemFlrAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_delete: cdktf.booleanToTerraform(struct!.autoDelete),
    auto_lock: cdktf.booleanToTerraform(struct!.autoLock),
    default_retention: cdktf.stringToTerraform(struct!.defaultRetention),
    maximum_retention: cdktf.stringToTerraform(struct!.maximumRetention),
    minimum_retention: cdktf.stringToTerraform(struct!.minimumRetention),
    mode: cdktf.stringToTerraform(struct!.mode),
    policy_interval: cdktf.numberToTerraform(struct!.policyInterval),
  }
}


export function filesystemFlrAttributesToHclTerraform(struct?: FilesystemFlrAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_delete: {
      value: cdktf.booleanToHclTerraform(struct!.autoDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_lock: {
      value: cdktf.booleanToHclTerraform(struct!.autoLock),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_retention: {
      value: cdktf.stringToHclTerraform(struct!.defaultRetention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_retention: {
      value: cdktf.stringToHclTerraform(struct!.maximumRetention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum_retention: {
      value: cdktf.stringToHclTerraform(struct!.minimumRetention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_interval: {
      value: cdktf.numberToHclTerraform(struct!.policyInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FilesystemFlrAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FilesystemFlrAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDelete = this._autoDelete;
    }
    if (this._autoLock !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoLock = this._autoLock;
    }
    if (this._defaultRetention !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRetention = this._defaultRetention;
    }
    if (this._maximumRetention !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRetention = this._maximumRetention;
    }
    if (this._minimumRetention !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumRetention = this._minimumRetention;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._policyInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyInterval = this._policyInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilesystemFlrAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoDelete = undefined;
      this._autoLock = undefined;
      this._defaultRetention = undefined;
      this._maximumRetention = undefined;
      this._minimumRetention = undefined;
      this._mode = undefined;
      this._policyInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoDelete = value.autoDelete;
      this._autoLock = value.autoLock;
      this._defaultRetention = value.defaultRetention;
      this._maximumRetention = value.maximumRetention;
      this._minimumRetention = value.minimumRetention;
      this._mode = value.mode;
      this._policyInterval = value.policyInterval;
    }
  }

  // auto_delete - computed: true, optional: true, required: false
  private _autoDelete?: boolean | cdktf.IResolvable; 
  public get autoDelete() {
    return this.getBooleanAttribute('auto_delete');
  }
  public set autoDelete(value: boolean | cdktf.IResolvable) {
    this._autoDelete = value;
  }
  public resetAutoDelete() {
    this._autoDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeleteInput() {
    return this._autoDelete;
  }

  // auto_lock - computed: true, optional: true, required: false
  private _autoLock?: boolean | cdktf.IResolvable; 
  public get autoLock() {
    return this.getBooleanAttribute('auto_lock');
  }
  public set autoLock(value: boolean | cdktf.IResolvable) {
    this._autoLock = value;
  }
  public resetAutoLock() {
    this._autoLock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoLockInput() {
    return this._autoLock;
  }

  // default_retention - computed: true, optional: true, required: false
  private _defaultRetention?: string; 
  public get defaultRetention() {
    return this.getStringAttribute('default_retention');
  }
  public set defaultRetention(value: string) {
    this._defaultRetention = value;
  }
  public resetDefaultRetention() {
    this._defaultRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRetentionInput() {
    return this._defaultRetention;
  }

  // maximum_retention - computed: true, optional: true, required: false
  private _maximumRetention?: string; 
  public get maximumRetention() {
    return this.getStringAttribute('maximum_retention');
  }
  public set maximumRetention(value: string) {
    this._maximumRetention = value;
  }
  public resetMaximumRetention() {
    this._maximumRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRetentionInput() {
    return this._maximumRetention;
  }

  // minimum_retention - computed: true, optional: true, required: false
  private _minimumRetention?: string; 
  public get minimumRetention() {
    return this.getStringAttribute('minimum_retention');
  }
  public set minimumRetention(value: string) {
    this._minimumRetention = value;
  }
  public resetMinimumRetention() {
    this._minimumRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumRetentionInput() {
    return this._minimumRetention;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // policy_interval - computed: true, optional: true, required: false
  private _policyInterval?: number; 
  public get policyInterval() {
    return this.getNumberAttribute('policy_interval');
  }
  public set policyInterval(value: number) {
    this._policyInterval = value;
  }
  public resetPolicyInterval() {
    this._policyInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIntervalInput() {
    return this._policyInterval;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/filesystem powerstore_filesystem}
*/
export class Filesystem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerstore_filesystem";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Filesystem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Filesystem to import
  * @param importFromId The id of the existing Filesystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/filesystem#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Filesystem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerstore_filesystem", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/filesystem powerstore_filesystem} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FilesystemConfig
  */
  public constructor(scope: Construct, id: string, config: FilesystemConfig) {
    super(scope, id, {
      terraformResourceType: 'powerstore_filesystem',
      terraformGeneratorMetadata: {
        providerName: 'powerstore',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessPolicy = config.accessPolicy;
    this._capacityUnit = config.capacityUnit;
    this._configType = config.configType;
    this._description = config.description;
    this._fileEventsPublishingMode = config.fileEventsPublishingMode;
    this._flrAttributes.internalValue = config.flrAttributes;
    this._folderRenamePolicy = config.folderRenamePolicy;
    this._hostIoSize = config.hostIoSize;
    this._isAsyncMtimeEnabled = config.isAsyncMtimeEnabled;
    this._isSmbNoNotifyEnabled = config.isSmbNoNotifyEnabled;
    this._isSmbNotifyOnAccessEnabled = config.isSmbNotifyOnAccessEnabled;
    this._isSmbNotifyOnWriteEnabled = config.isSmbNotifyOnWriteEnabled;
    this._isSmbOpLocksEnabled = config.isSmbOpLocksEnabled;
    this._isSmbSyncWritesEnabled = config.isSmbSyncWritesEnabled;
    this._lockingPolicy = config.lockingPolicy;
    this._name = config.name;
    this._nasServerId = config.nasServerId;
    this._protectionPolicyId = config.protectionPolicyId;
    this._size = config.size;
    this._smbNotifyOnChangeDirDepth = config.smbNotifyOnChangeDirDepth;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policy - computed: true, optional: true, required: false
  private _accessPolicy?: string; 
  public get accessPolicy() {
    return this.getStringAttribute('access_policy');
  }
  public set accessPolicy(value: string) {
    this._accessPolicy = value;
  }
  public resetAccessPolicy() {
    this._accessPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPolicyInput() {
    return this._accessPolicy;
  }

  // capacity_unit - computed: true, optional: true, required: false
  private _capacityUnit?: string; 
  public get capacityUnit() {
    return this.getStringAttribute('capacity_unit');
  }
  public set capacityUnit(value: string) {
    this._capacityUnit = value;
  }
  public resetCapacityUnit() {
    this._capacityUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityUnitInput() {
    return this._capacityUnit;
  }

  // config_type - computed: true, optional: true, required: false
  private _configType?: string; 
  public get configType() {
    return this.getStringAttribute('config_type');
  }
  public set configType(value: string) {
    this._configType = value;
  }
  public resetConfigType() {
    this._configType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configTypeInput() {
    return this._configType;
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

  // file_events_publishing_mode - computed: true, optional: true, required: false
  private _fileEventsPublishingMode?: string; 
  public get fileEventsPublishingMode() {
    return this.getStringAttribute('file_events_publishing_mode');
  }
  public set fileEventsPublishingMode(value: string) {
    this._fileEventsPublishingMode = value;
  }
  public resetFileEventsPublishingMode() {
    this._fileEventsPublishingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileEventsPublishingModeInput() {
    return this._fileEventsPublishingMode;
  }

  // file_system_type - computed: true, optional: false, required: false
  public get fileSystemType() {
    return this.getStringAttribute('file_system_type');
  }

  // flr_attributes - computed: true, optional: true, required: false
  private _flrAttributes = new FilesystemFlrAttributesOutputReference(this, "flr_attributes");
  public get flrAttributes() {
    return this._flrAttributes;
  }
  public putFlrAttributes(value: FilesystemFlrAttributes) {
    this._flrAttributes.internalValue = value;
  }
  public resetFlrAttributes() {
    this._flrAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flrAttributesInput() {
    return this._flrAttributes.internalValue;
  }

  // folder_rename_policy - computed: true, optional: true, required: false
  private _folderRenamePolicy?: string; 
  public get folderRenamePolicy() {
    return this.getStringAttribute('folder_rename_policy');
  }
  public set folderRenamePolicy(value: string) {
    this._folderRenamePolicy = value;
  }
  public resetFolderRenamePolicy() {
    this._folderRenamePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderRenamePolicyInput() {
    return this._folderRenamePolicy;
  }

  // host_io_size - computed: true, optional: true, required: false
  private _hostIoSize?: string; 
  public get hostIoSize() {
    return this.getStringAttribute('host_io_size');
  }
  public set hostIoSize(value: string) {
    this._hostIoSize = value;
  }
  public resetHostIoSize() {
    this._hostIoSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIoSizeInput() {
    return this._hostIoSize;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_async_mtime_enabled - computed: true, optional: true, required: false
  private _isAsyncMtimeEnabled?: boolean | cdktf.IResolvable; 
  public get isAsyncMtimeEnabled() {
    return this.getBooleanAttribute('is_async_mtime_enabled');
  }
  public set isAsyncMtimeEnabled(value: boolean | cdktf.IResolvable) {
    this._isAsyncMtimeEnabled = value;
  }
  public resetIsAsyncMtimeEnabled() {
    this._isAsyncMtimeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAsyncMtimeEnabledInput() {
    return this._isAsyncMtimeEnabled;
  }

  // is_smb_no_notify_enabled - computed: true, optional: true, required: false
  private _isSmbNoNotifyEnabled?: boolean | cdktf.IResolvable; 
  public get isSmbNoNotifyEnabled() {
    return this.getBooleanAttribute('is_smb_no_notify_enabled');
  }
  public set isSmbNoNotifyEnabled(value: boolean | cdktf.IResolvable) {
    this._isSmbNoNotifyEnabled = value;
  }
  public resetIsSmbNoNotifyEnabled() {
    this._isSmbNoNotifyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSmbNoNotifyEnabledInput() {
    return this._isSmbNoNotifyEnabled;
  }

  // is_smb_notify_on_access_enabled - computed: true, optional: true, required: false
  private _isSmbNotifyOnAccessEnabled?: boolean | cdktf.IResolvable; 
  public get isSmbNotifyOnAccessEnabled() {
    return this.getBooleanAttribute('is_smb_notify_on_access_enabled');
  }
  public set isSmbNotifyOnAccessEnabled(value: boolean | cdktf.IResolvable) {
    this._isSmbNotifyOnAccessEnabled = value;
  }
  public resetIsSmbNotifyOnAccessEnabled() {
    this._isSmbNotifyOnAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSmbNotifyOnAccessEnabledInput() {
    return this._isSmbNotifyOnAccessEnabled;
  }

  // is_smb_notify_on_write_enabled - computed: true, optional: true, required: false
  private _isSmbNotifyOnWriteEnabled?: boolean | cdktf.IResolvable; 
  public get isSmbNotifyOnWriteEnabled() {
    return this.getBooleanAttribute('is_smb_notify_on_write_enabled');
  }
  public set isSmbNotifyOnWriteEnabled(value: boolean | cdktf.IResolvable) {
    this._isSmbNotifyOnWriteEnabled = value;
  }
  public resetIsSmbNotifyOnWriteEnabled() {
    this._isSmbNotifyOnWriteEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSmbNotifyOnWriteEnabledInput() {
    return this._isSmbNotifyOnWriteEnabled;
  }

  // is_smb_op_locks_enabled - computed: true, optional: true, required: false
  private _isSmbOpLocksEnabled?: boolean | cdktf.IResolvable; 
  public get isSmbOpLocksEnabled() {
    return this.getBooleanAttribute('is_smb_op_locks_enabled');
  }
  public set isSmbOpLocksEnabled(value: boolean | cdktf.IResolvable) {
    this._isSmbOpLocksEnabled = value;
  }
  public resetIsSmbOpLocksEnabled() {
    this._isSmbOpLocksEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSmbOpLocksEnabledInput() {
    return this._isSmbOpLocksEnabled;
  }

  // is_smb_sync_writes_enabled - computed: true, optional: true, required: false
  private _isSmbSyncWritesEnabled?: boolean | cdktf.IResolvable; 
  public get isSmbSyncWritesEnabled() {
    return this.getBooleanAttribute('is_smb_sync_writes_enabled');
  }
  public set isSmbSyncWritesEnabled(value: boolean | cdktf.IResolvable) {
    this._isSmbSyncWritesEnabled = value;
  }
  public resetIsSmbSyncWritesEnabled() {
    this._isSmbSyncWritesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSmbSyncWritesEnabledInput() {
    return this._isSmbSyncWritesEnabled;
  }

  // locking_policy - computed: true, optional: true, required: false
  private _lockingPolicy?: string; 
  public get lockingPolicy() {
    return this.getStringAttribute('locking_policy');
  }
  public set lockingPolicy(value: string) {
    this._lockingPolicy = value;
  }
  public resetLockingPolicy() {
    this._lockingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockingPolicyInput() {
    return this._lockingPolicy;
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

  // nas_server_id - computed: false, optional: false, required: true
  private _nasServerId?: string; 
  public get nasServerId() {
    return this.getStringAttribute('nas_server_id');
  }
  public set nasServerId(value: string) {
    this._nasServerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nasServerIdInput() {
    return this._nasServerId;
  }

  // parent_id - computed: true, optional: false, required: false
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }

  // protection_policy_id - computed: true, optional: true, required: false
  private _protectionPolicyId?: string; 
  public get protectionPolicyId() {
    return this.getStringAttribute('protection_policy_id');
  }
  public set protectionPolicyId(value: string) {
    this._protectionPolicyId = value;
  }
  public resetProtectionPolicyId() {
    this._protectionPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionPolicyIdInput() {
    return this._protectionPolicyId;
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // smb_notify_on_change_dir_depth - computed: true, optional: true, required: false
  private _smbNotifyOnChangeDirDepth?: number; 
  public get smbNotifyOnChangeDirDepth() {
    return this.getNumberAttribute('smb_notify_on_change_dir_depth');
  }
  public set smbNotifyOnChangeDirDepth(value: number) {
    this._smbNotifyOnChangeDirDepth = value;
  }
  public resetSmbNotifyOnChangeDirDepth() {
    this._smbNotifyOnChangeDirDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smbNotifyOnChangeDirDepthInput() {
    return this._smbNotifyOnChangeDirDepth;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_policy: cdktf.stringToTerraform(this._accessPolicy),
      capacity_unit: cdktf.stringToTerraform(this._capacityUnit),
      config_type: cdktf.stringToTerraform(this._configType),
      description: cdktf.stringToTerraform(this._description),
      file_events_publishing_mode: cdktf.stringToTerraform(this._fileEventsPublishingMode),
      flr_attributes: filesystemFlrAttributesToTerraform(this._flrAttributes.internalValue),
      folder_rename_policy: cdktf.stringToTerraform(this._folderRenamePolicy),
      host_io_size: cdktf.stringToTerraform(this._hostIoSize),
      is_async_mtime_enabled: cdktf.booleanToTerraform(this._isAsyncMtimeEnabled),
      is_smb_no_notify_enabled: cdktf.booleanToTerraform(this._isSmbNoNotifyEnabled),
      is_smb_notify_on_access_enabled: cdktf.booleanToTerraform(this._isSmbNotifyOnAccessEnabled),
      is_smb_notify_on_write_enabled: cdktf.booleanToTerraform(this._isSmbNotifyOnWriteEnabled),
      is_smb_op_locks_enabled: cdktf.booleanToTerraform(this._isSmbOpLocksEnabled),
      is_smb_sync_writes_enabled: cdktf.booleanToTerraform(this._isSmbSyncWritesEnabled),
      locking_policy: cdktf.stringToTerraform(this._lockingPolicy),
      name: cdktf.stringToTerraform(this._name),
      nas_server_id: cdktf.stringToTerraform(this._nasServerId),
      protection_policy_id: cdktf.stringToTerraform(this._protectionPolicyId),
      size: cdktf.numberToTerraform(this._size),
      smb_notify_on_change_dir_depth: cdktf.numberToTerraform(this._smbNotifyOnChangeDirDepth),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_policy: {
        value: cdktf.stringToHclTerraform(this._accessPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capacity_unit: {
        value: cdktf.stringToHclTerraform(this._capacityUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_type: {
        value: cdktf.stringToHclTerraform(this._configType),
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
      file_events_publishing_mode: {
        value: cdktf.stringToHclTerraform(this._fileEventsPublishingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flr_attributes: {
        value: filesystemFlrAttributesToHclTerraform(this._flrAttributes.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FilesystemFlrAttributes",
      },
      folder_rename_policy: {
        value: cdktf.stringToHclTerraform(this._folderRenamePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_io_size: {
        value: cdktf.stringToHclTerraform(this._hostIoSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_async_mtime_enabled: {
        value: cdktf.booleanToHclTerraform(this._isAsyncMtimeEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_smb_no_notify_enabled: {
        value: cdktf.booleanToHclTerraform(this._isSmbNoNotifyEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_smb_notify_on_access_enabled: {
        value: cdktf.booleanToHclTerraform(this._isSmbNotifyOnAccessEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_smb_notify_on_write_enabled: {
        value: cdktf.booleanToHclTerraform(this._isSmbNotifyOnWriteEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_smb_op_locks_enabled: {
        value: cdktf.booleanToHclTerraform(this._isSmbOpLocksEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_smb_sync_writes_enabled: {
        value: cdktf.booleanToHclTerraform(this._isSmbSyncWritesEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      locking_policy: {
        value: cdktf.stringToHclTerraform(this._lockingPolicy),
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
      nas_server_id: {
        value: cdktf.stringToHclTerraform(this._nasServerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protection_policy_id: {
        value: cdktf.stringToHclTerraform(this._protectionPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      smb_notify_on_change_dir_depth: {
        value: cdktf.numberToHclTerraform(this._smbNotifyOnChangeDirDepth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
