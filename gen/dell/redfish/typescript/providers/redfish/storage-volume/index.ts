// https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_volume
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageVolumeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Capacity Bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_volume#capacity_bytes StorageVolume#capacity_bytes}
  */
  readonly capacityBytes?: number;
  /**
  * Disk Cache Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_volume#disk_cache_policy StorageVolume#disk_cache_policy}
  */
  readonly diskCachePolicy?: string;
  /**
  * Drives
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_volume#drives StorageVolume#drives}
  */
  readonly drives: string[];
  /**
  * Encrypt the virtual disk, default is false. This flag is only supported on firmware levels 6 and above
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_volume#encrypted StorageVolume#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Optimum Io Size Bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_volume#optimum_io_size_bytes StorageVolume#optimum_io_size_bytes}
  */
  readonly optimumIoSizeBytes?: number;
  /**
  * Raid Type, Defaults to RAID0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_volume#raid_type StorageVolume#raid_type}
  */
  readonly raidType?: string;
  /**
  * Read Cache Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_volume#read_cache_policy StorageVolume#read_cache_policy}
  */
  readonly readCachePolicy?: string;
  /**
  * Reset Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_volume#reset_timeout StorageVolume#reset_timeout}
  */
  readonly resetTimeout?: number;
  /**
  * Reset Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_volume#reset_type StorageVolume#reset_type}
  */
  readonly resetType?: string;
  /**
  * Settings Apply Time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_volume#settings_apply_time StorageVolume#settings_apply_time}
  */
  readonly settingsApplyTime?: string;
  /**
  * Storage Controller ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_volume#storage_controller_id StorageVolume#storage_controller_id}
  */
  readonly storageControllerId: string;
  /**
  * System ID of the system
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_volume#system_id StorageVolume#system_id}
  */
  readonly systemId?: string;
  /**
  * Volume Job Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_volume#volume_job_timeout StorageVolume#volume_job_timeout}
  */
  readonly volumeJobTimeout?: number;
  /**
  * Volume Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_volume#volume_name StorageVolume#volume_name}
  */
  readonly volumeName: string;
  /**
  * Volume Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_volume#volume_type StorageVolume#volume_type}
  */
  readonly volumeType?: string;
  /**
  * Write Cache Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_volume#write_cache_policy StorageVolume#write_cache_policy}
  */
  readonly writeCachePolicy?: string;
  /**
  * redfish_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_volume#redfish_server StorageVolume#redfish_server}
  */
  readonly redfishServer?: StorageVolumeRedfishServer[] | cdktf.IResolvable;
}
export interface StorageVolumeRedfishServer {
  /**
  * Server BMC IP address or hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_volume#endpoint StorageVolume#endpoint}
  */
  readonly endpoint?: string;
  /**
  * User password for login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_volume#password StorageVolume#password}
  */
  readonly password?: string;
  /**
  * Alias name for server BMCs. The key in provider's `redfish_servers` map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_volume#redfish_alias StorageVolume#redfish_alias}
  */
  readonly redfishAlias?: string;
  /**
  * This field indicates whether the SSL/TLS certificate must be verified or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_volume#ssl_insecure StorageVolume#ssl_insecure}
  */
  readonly sslInsecure?: boolean | cdktf.IResolvable;
  /**
  * User name for login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_volume#user StorageVolume#user}
  */
  readonly user?: string;
}

export function storageVolumeRedfishServerToTerraform(struct?: StorageVolumeRedfishServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    password: cdktf.stringToTerraform(struct!.password),
    redfish_alias: cdktf.stringToTerraform(struct!.redfishAlias),
    ssl_insecure: cdktf.booleanToTerraform(struct!.sslInsecure),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function storageVolumeRedfishServerToHclTerraform(struct?: StorageVolumeRedfishServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redfish_alias: {
      value: cdktf.stringToHclTerraform(struct!.redfishAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_insecure: {
      value: cdktf.booleanToHclTerraform(struct!.sslInsecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageVolumeRedfishServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageVolumeRedfishServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._redfishAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.redfishAlias = this._redfishAlias;
    }
    if (this._sslInsecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslInsecure = this._sslInsecure;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageVolumeRedfishServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint = undefined;
      this._password = undefined;
      this._redfishAlias = undefined;
      this._sslInsecure = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint = value.endpoint;
      this._password = value.password;
      this._redfishAlias = value.redfishAlias;
      this._sslInsecure = value.sslInsecure;
      this._user = value.user;
    }
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // redfish_alias - computed: false, optional: true, required: false
  private _redfishAlias?: string; 
  public get redfishAlias() {
    return this.getStringAttribute('redfish_alias');
  }
  public set redfishAlias(value: string) {
    this._redfishAlias = value;
  }
  public resetRedfishAlias() {
    this._redfishAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redfishAliasInput() {
    return this._redfishAlias;
  }

  // ssl_insecure - computed: false, optional: true, required: false
  private _sslInsecure?: boolean | cdktf.IResolvable; 
  public get sslInsecure() {
    return this.getBooleanAttribute('ssl_insecure');
  }
  public set sslInsecure(value: boolean | cdktf.IResolvable) {
    this._sslInsecure = value;
  }
  public resetSslInsecure() {
    this._sslInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInsecureInput() {
    return this._sslInsecure;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}

export class StorageVolumeRedfishServerList extends cdktf.ComplexList {
  public internalValue? : StorageVolumeRedfishServer[] | cdktf.IResolvable

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
  public get(index: number): StorageVolumeRedfishServerOutputReference {
    return new StorageVolumeRedfishServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_volume redfish_storage_volume}
*/
export class StorageVolume extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "redfish_storage_volume";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StorageVolume resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StorageVolume to import
  * @param importFromId The id of the existing StorageVolume that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_volume#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StorageVolume to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "redfish_storage_volume", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_volume redfish_storage_volume} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageVolumeConfig
  */
  public constructor(scope: Construct, id: string, config: StorageVolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'redfish_storage_volume',
      terraformGeneratorMetadata: {
        providerName: 'redfish',
        providerVersion: '1.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._capacityBytes = config.capacityBytes;
    this._diskCachePolicy = config.diskCachePolicy;
    this._drives = config.drives;
    this._encrypted = config.encrypted;
    this._optimumIoSizeBytes = config.optimumIoSizeBytes;
    this._raidType = config.raidType;
    this._readCachePolicy = config.readCachePolicy;
    this._resetTimeout = config.resetTimeout;
    this._resetType = config.resetType;
    this._settingsApplyTime = config.settingsApplyTime;
    this._storageControllerId = config.storageControllerId;
    this._systemId = config.systemId;
    this._volumeJobTimeout = config.volumeJobTimeout;
    this._volumeName = config.volumeName;
    this._volumeType = config.volumeType;
    this._writeCachePolicy = config.writeCachePolicy;
    this._redfishServer.internalValue = config.redfishServer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capacity_bytes - computed: false, optional: true, required: false
  private _capacityBytes?: number; 
  public get capacityBytes() {
    return this.getNumberAttribute('capacity_bytes');
  }
  public set capacityBytes(value: number) {
    this._capacityBytes = value;
  }
  public resetCapacityBytes() {
    this._capacityBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityBytesInput() {
    return this._capacityBytes;
  }

  // disk_cache_policy - computed: true, optional: true, required: false
  private _diskCachePolicy?: string; 
  public get diskCachePolicy() {
    return this.getStringAttribute('disk_cache_policy');
  }
  public set diskCachePolicy(value: string) {
    this._diskCachePolicy = value;
  }
  public resetDiskCachePolicy() {
    this._diskCachePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskCachePolicyInput() {
    return this._diskCachePolicy;
  }

  // drives - computed: false, optional: false, required: true
  private _drives?: string[]; 
  public get drives() {
    return this.getListAttribute('drives');
  }
  public set drives(value: string[]) {
    this._drives = value;
  }
  // Temporarily expose input value. Use with caution.
  public get drivesInput() {
    return this._drives;
  }

  // encrypted - computed: true, optional: true, required: false
  private _encrypted?: boolean | cdktf.IResolvable; 
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean | cdktf.IResolvable) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // optimum_io_size_bytes - computed: false, optional: true, required: false
  private _optimumIoSizeBytes?: number; 
  public get optimumIoSizeBytes() {
    return this.getNumberAttribute('optimum_io_size_bytes');
  }
  public set optimumIoSizeBytes(value: number) {
    this._optimumIoSizeBytes = value;
  }
  public resetOptimumIoSizeBytes() {
    this._optimumIoSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimumIoSizeBytesInput() {
    return this._optimumIoSizeBytes;
  }

  // raid_type - computed: true, optional: true, required: false
  private _raidType?: string; 
  public get raidType() {
    return this.getStringAttribute('raid_type');
  }
  public set raidType(value: string) {
    this._raidType = value;
  }
  public resetRaidType() {
    this._raidType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get raidTypeInput() {
    return this._raidType;
  }

  // read_cache_policy - computed: true, optional: true, required: false
  private _readCachePolicy?: string; 
  public get readCachePolicy() {
    return this.getStringAttribute('read_cache_policy');
  }
  public set readCachePolicy(value: string) {
    this._readCachePolicy = value;
  }
  public resetReadCachePolicy() {
    this._readCachePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readCachePolicyInput() {
    return this._readCachePolicy;
  }

  // reset_timeout - computed: true, optional: true, required: false
  private _resetTimeout?: number; 
  public get resetTimeout() {
    return this.getNumberAttribute('reset_timeout');
  }
  public set resetTimeout(value: number) {
    this._resetTimeout = value;
  }
  public resetResetTimeout() {
    this._resetTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetTimeoutInput() {
    return this._resetTimeout;
  }

  // reset_type - computed: true, optional: true, required: false
  private _resetType?: string; 
  public get resetType() {
    return this.getStringAttribute('reset_type');
  }
  public set resetType(value: string) {
    this._resetType = value;
  }
  public resetResetType() {
    this._resetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetTypeInput() {
    return this._resetType;
  }

  // settings_apply_time - computed: true, optional: true, required: false
  private _settingsApplyTime?: string; 
  public get settingsApplyTime() {
    return this.getStringAttribute('settings_apply_time');
  }
  public set settingsApplyTime(value: string) {
    this._settingsApplyTime = value;
  }
  public resetSettingsApplyTime() {
    this._settingsApplyTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsApplyTimeInput() {
    return this._settingsApplyTime;
  }

  // storage_controller_id - computed: false, optional: false, required: true
  private _storageControllerId?: string; 
  public get storageControllerId() {
    return this.getStringAttribute('storage_controller_id');
  }
  public set storageControllerId(value: string) {
    this._storageControllerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageControllerIdInput() {
    return this._storageControllerId;
  }

  // system_id - computed: true, optional: true, required: false
  private _systemId?: string; 
  public get systemId() {
    return this.getStringAttribute('system_id');
  }
  public set systemId(value: string) {
    this._systemId = value;
  }
  public resetSystemId() {
    this._systemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIdInput() {
    return this._systemId;
  }

  // volume_job_timeout - computed: true, optional: true, required: false
  private _volumeJobTimeout?: number; 
  public get volumeJobTimeout() {
    return this.getNumberAttribute('volume_job_timeout');
  }
  public set volumeJobTimeout(value: number) {
    this._volumeJobTimeout = value;
  }
  public resetVolumeJobTimeout() {
    this._volumeJobTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeJobTimeoutInput() {
    return this._volumeJobTimeout;
  }

  // volume_name - computed: false, optional: false, required: true
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }

  // volume_type - computed: false, optional: true, required: false
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }

  // write_cache_policy - computed: true, optional: true, required: false
  private _writeCachePolicy?: string; 
  public get writeCachePolicy() {
    return this.getStringAttribute('write_cache_policy');
  }
  public set writeCachePolicy(value: string) {
    this._writeCachePolicy = value;
  }
  public resetWriteCachePolicy() {
    this._writeCachePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeCachePolicyInput() {
    return this._writeCachePolicy;
  }

  // redfish_server - computed: false, optional: true, required: false
  private _redfishServer = new StorageVolumeRedfishServerList(this, "redfish_server", false);
  public get redfishServer() {
    return this._redfishServer;
  }
  public putRedfishServer(value: StorageVolumeRedfishServer[] | cdktf.IResolvable) {
    this._redfishServer.internalValue = value;
  }
  public resetRedfishServer() {
    this._redfishServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redfishServerInput() {
    return this._redfishServer.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capacity_bytes: cdktf.numberToTerraform(this._capacityBytes),
      disk_cache_policy: cdktf.stringToTerraform(this._diskCachePolicy),
      drives: cdktf.listMapper(cdktf.stringToTerraform, false)(this._drives),
      encrypted: cdktf.booleanToTerraform(this._encrypted),
      optimum_io_size_bytes: cdktf.numberToTerraform(this._optimumIoSizeBytes),
      raid_type: cdktf.stringToTerraform(this._raidType),
      read_cache_policy: cdktf.stringToTerraform(this._readCachePolicy),
      reset_timeout: cdktf.numberToTerraform(this._resetTimeout),
      reset_type: cdktf.stringToTerraform(this._resetType),
      settings_apply_time: cdktf.stringToTerraform(this._settingsApplyTime),
      storage_controller_id: cdktf.stringToTerraform(this._storageControllerId),
      system_id: cdktf.stringToTerraform(this._systemId),
      volume_job_timeout: cdktf.numberToTerraform(this._volumeJobTimeout),
      volume_name: cdktf.stringToTerraform(this._volumeName),
      volume_type: cdktf.stringToTerraform(this._volumeType),
      write_cache_policy: cdktf.stringToTerraform(this._writeCachePolicy),
      redfish_server: cdktf.listMapper(storageVolumeRedfishServerToTerraform, true)(this._redfishServer.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capacity_bytes: {
        value: cdktf.numberToHclTerraform(this._capacityBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disk_cache_policy: {
        value: cdktf.stringToHclTerraform(this._diskCachePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drives: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._drives),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      encrypted: {
        value: cdktf.booleanToHclTerraform(this._encrypted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      optimum_io_size_bytes: {
        value: cdktf.numberToHclTerraform(this._optimumIoSizeBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      raid_type: {
        value: cdktf.stringToHclTerraform(this._raidType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_cache_policy: {
        value: cdktf.stringToHclTerraform(this._readCachePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reset_timeout: {
        value: cdktf.numberToHclTerraform(this._resetTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reset_type: {
        value: cdktf.stringToHclTerraform(this._resetType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      settings_apply_time: {
        value: cdktf.stringToHclTerraform(this._settingsApplyTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_controller_id: {
        value: cdktf.stringToHclTerraform(this._storageControllerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_id: {
        value: cdktf.stringToHclTerraform(this._systemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_job_timeout: {
        value: cdktf.numberToHclTerraform(this._volumeJobTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      volume_name: {
        value: cdktf.stringToHclTerraform(this._volumeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_type: {
        value: cdktf.stringToHclTerraform(this._volumeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      write_cache_policy: {
        value: cdktf.stringToHclTerraform(this._writeCachePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redfish_server: {
        value: cdktf.listMapperHcl(storageVolumeRedfishServerToHclTerraform, true)(this._redfishServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageVolumeRedfishServerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
