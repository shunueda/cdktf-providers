// https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/data-sources/filesystem
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerstoreFilesystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * PowerStore filter expression to filter Filesystems by. Conflicts with `id`, `name`, `nas_server_id` and `file_system_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/data-sources/filesystem#filter_expression DataPowerstoreFilesystem#filter_expression}
  */
  readonly filterExpression?: string;
  /**
  * Unique identifier of the File System. Conflicts with `name` and `nas_server_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/data-sources/filesystem#id DataPowerstoreFilesystem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * File System name. Conflicts with `id` and `nas_server_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/data-sources/filesystem#name DataPowerstoreFilesystem#name}
  */
  readonly name?: string;
  /**
  * Nas server ID. Conflicts with `id` and `name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/data-sources/filesystem#nas_server_id DataPowerstoreFilesystem#nas_server_id}
  */
  readonly nasServerId?: string;
}
export interface DataPowerstoreFilesystemFilesystemsFlrAttributes {
}

export function dataPowerstoreFilesystemFilesystemsFlrAttributesToTerraform(struct?: DataPowerstoreFilesystemFilesystemsFlrAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerstoreFilesystemFilesystemsFlrAttributesToHclTerraform(struct?: DataPowerstoreFilesystemFilesystemsFlrAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerstoreFilesystemFilesystemsFlrAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerstoreFilesystemFilesystemsFlrAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerstoreFilesystemFilesystemsFlrAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_delete - computed: true, optional: false, required: false
  public get autoDelete() {
    return this.getBooleanAttribute('auto_delete');
  }

  // auto_lock - computed: true, optional: false, required: false
  public get autoLock() {
    return this.getBooleanAttribute('auto_lock');
  }

  // clock_time - computed: true, optional: false, required: false
  public get clockTime() {
    return this.getStringAttribute('clock_time');
  }

  // default_retention - computed: true, optional: false, required: false
  public get defaultRetention() {
    return this.getStringAttribute('default_retention');
  }

  // has_protected_files - computed: true, optional: false, required: false
  public get hasProtectedFiles() {
    return this.getBooleanAttribute('has_protected_files');
  }

  // maximum_retention - computed: true, optional: false, required: false
  public get maximumRetention() {
    return this.getStringAttribute('maximum_retention');
  }

  // maximum_retention_date - computed: true, optional: false, required: false
  public get maximumRetentionDate() {
    return this.getStringAttribute('maximum_retention_date');
  }

  // minimum_retention - computed: true, optional: false, required: false
  public get minimumRetention() {
    return this.getStringAttribute('minimum_retention');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // policy_interval - computed: true, optional: false, required: false
  public get policyInterval() {
    return this.getNumberAttribute('policy_interval');
  }
}
export interface DataPowerstoreFilesystemFilesystems {
}

export function dataPowerstoreFilesystemFilesystemsToTerraform(struct?: DataPowerstoreFilesystemFilesystems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerstoreFilesystemFilesystemsToHclTerraform(struct?: DataPowerstoreFilesystemFilesystems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerstoreFilesystemFilesystemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerstoreFilesystemFilesystems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerstoreFilesystemFilesystems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_policy - computed: true, optional: false, required: false
  public get accessPolicy() {
    return this.getStringAttribute('access_policy');
  }

  // access_type - computed: true, optional: false, required: false
  public get accessType() {
    return this.getStringAttribute('access_type');
  }

  // config_type - computed: true, optional: false, required: false
  public get configType() {
    return this.getStringAttribute('config_type');
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // creator_type - computed: true, optional: false, required: false
  public get creatorType() {
    return this.getStringAttribute('creator_type');
  }

  // default_hard_limit - computed: true, optional: false, required: false
  public get defaultHardLimit() {
    return this.getNumberAttribute('default_hard_limit');
  }

  // default_soft_limit - computed: true, optional: false, required: false
  public get defaultSoftLimit() {
    return this.getNumberAttribute('default_soft_limit');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // expiration_timestamp - computed: true, optional: false, required: false
  public get expirationTimestamp() {
    return this.getStringAttribute('expiration_timestamp');
  }

  // file_events_publishing_mode - computed: true, optional: false, required: false
  public get fileEventsPublishingMode() {
    return this.getStringAttribute('file_events_publishing_mode');
  }

  // filesystem_type - computed: true, optional: false, required: false
  public get filesystemType() {
    return this.getStringAttribute('filesystem_type');
  }

  // flr_attributes - computed: true, optional: false, required: false
  private _flrAttributes = new DataPowerstoreFilesystemFilesystemsFlrAttributesOutputReference(this, "flr_attributes");
  public get flrAttributes() {
    return this._flrAttributes;
  }

  // folder_rename_policy - computed: true, optional: false, required: false
  public get folderRenamePolicy() {
    return this.getStringAttribute('folder_rename_policy');
  }

  // grace_period - computed: true, optional: false, required: false
  public get gracePeriod() {
    return this.getNumberAttribute('grace_period');
  }

  // host_io_size - computed: true, optional: false, required: false
  public get hostIoSize() {
    return this.getStringAttribute('host_io_size');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_async_m_time_enabled - computed: true, optional: false, required: false
  public get isAsyncMTimeEnabled() {
    return this.getBooleanAttribute('is_async_m_time_enabled');
  }

  // is_modified - computed: true, optional: false, required: false
  public get isModified() {
    return this.getBooleanAttribute('is_modified');
  }

  // is_quota_enabled - computed: true, optional: false, required: false
  public get isQuotaEnabled() {
    return this.getBooleanAttribute('is_quota_enabled');
  }

  // is_smb_no_notify_enabled - computed: true, optional: false, required: false
  public get isSmbNoNotifyEnabled() {
    return this.getBooleanAttribute('is_smb_no_notify_enabled');
  }

  // is_smb_notify_on_access_enabled - computed: true, optional: false, required: false
  public get isSmbNotifyOnAccessEnabled() {
    return this.getBooleanAttribute('is_smb_notify_on_access_enabled');
  }

  // is_smb_notify_on_write_enabled - computed: true, optional: false, required: false
  public get isSmbNotifyOnWriteEnabled() {
    return this.getBooleanAttribute('is_smb_notify_on_write_enabled');
  }

  // is_smb_op_locks_enabled - computed: true, optional: false, required: false
  public get isSmbOpLocksEnabled() {
    return this.getBooleanAttribute('is_smb_op_locks_enabled');
  }

  // is_smb_sync_writes_enabled - computed: true, optional: false, required: false
  public get isSmbSyncWritesEnabled() {
    return this.getBooleanAttribute('is_smb_sync_writes_enabled');
  }

  // last_refresh_timestamp - computed: true, optional: false, required: false
  public get lastRefreshTimestamp() {
    return this.getStringAttribute('last_refresh_timestamp');
  }

  // last_writable_timestamp - computed: true, optional: false, required: false
  public get lastWritableTimestamp() {
    return this.getStringAttribute('last_writable_timestamp');
  }

  // locking_policy - computed: true, optional: false, required: false
  public get lockingPolicy() {
    return this.getStringAttribute('locking_policy');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nas_server_id - computed: true, optional: false, required: false
  public get nasServerId() {
    return this.getStringAttribute('nas_server_id');
  }

  // parent_id - computed: true, optional: false, required: false
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }

  // protection_policy_id - computed: true, optional: false, required: false
  public get protectionPolicyId() {
    return this.getStringAttribute('protection_policy_id');
  }

  // size_total - computed: true, optional: false, required: false
  public get sizeTotal() {
    return this.getNumberAttribute('size_total');
  }

  // size_used - computed: true, optional: false, required: false
  public get sizeUsed() {
    return this.getNumberAttribute('size_used');
  }

  // smb_notify_on_change_dir_depth - computed: true, optional: false, required: false
  public get smbNotifyOnChangeDirDepth() {
    return this.getNumberAttribute('smb_notify_on_change_dir_depth');
  }
}

export class DataPowerstoreFilesystemFilesystemsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerstoreFilesystemFilesystemsOutputReference {
    return new DataPowerstoreFilesystemFilesystemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/data-sources/filesystem powerstore_filesystem}
*/
export class DataPowerstoreFilesystem extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerstore_filesystem";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerstoreFilesystem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerstoreFilesystem to import
  * @param importFromId The id of the existing DataPowerstoreFilesystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/data-sources/filesystem#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerstoreFilesystem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerstore_filesystem", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/data-sources/filesystem powerstore_filesystem} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerstoreFilesystemConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerstoreFilesystemConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerstore_filesystem',
      terraformGeneratorMetadata: {
        providerName: 'powerstore',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filterExpression = config.filterExpression;
    this._id = config.id;
    this._name = config.name;
    this._nasServerId = config.nasServerId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filesystems - computed: true, optional: false, required: false
  private _filesystems = new DataPowerstoreFilesystemFilesystemsList(this, "filesystems", false);
  public get filesystems() {
    return this._filesystems;
  }

  // filter_expression - computed: false, optional: true, required: false
  private _filterExpression?: string; 
  public get filterExpression() {
    return this.getStringAttribute('filter_expression');
  }
  public set filterExpression(value: string) {
    this._filterExpression = value;
  }
  public resetFilterExpression() {
    this._filterExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterExpressionInput() {
    return this._filterExpression;
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

  // name - computed: false, optional: true, required: false
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

  // nas_server_id - computed: false, optional: true, required: false
  private _nasServerId?: string; 
  public get nasServerId() {
    return this.getStringAttribute('nas_server_id');
  }
  public set nasServerId(value: string) {
    this._nasServerId = value;
  }
  public resetNasServerId() {
    this._nasServerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nasServerIdInput() {
    return this._nasServerId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter_expression: cdktf.stringToTerraform(this._filterExpression),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      nas_server_id: cdktf.stringToTerraform(this._nasServerId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter_expression: {
        value: cdktf.stringToHclTerraform(this._filterExpression),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
