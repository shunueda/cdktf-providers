// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway_file_share
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudStorageGatewayGatewayFileShareConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway_file_share#access_based_enumeration CloudStorageGatewayGatewayFileShare#access_based_enumeration}
  */
  readonly accessBasedEnumeration?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway_file_share#backend_limit CloudStorageGatewayGatewayFileShare#backend_limit}
  */
  readonly backendLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway_file_share#browsable CloudStorageGatewayGatewayFileShare#browsable}
  */
  readonly browsable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway_file_share#bypass_cache_read CloudStorageGatewayGatewayFileShare#bypass_cache_read}
  */
  readonly bypassCacheRead?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway_file_share#cache_mode CloudStorageGatewayGatewayFileShare#cache_mode}
  */
  readonly cacheMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway_file_share#direct_io CloudStorageGatewayGatewayFileShare#direct_io}
  */
  readonly directIo?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway_file_share#download_limit CloudStorageGatewayGatewayFileShare#download_limit}
  */
  readonly downloadLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway_file_share#fast_reclaim CloudStorageGatewayGatewayFileShare#fast_reclaim}
  */
  readonly fastReclaim?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway_file_share#fe_limit CloudStorageGatewayGatewayFileShare#fe_limit}
  */
  readonly feLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway_file_share#gateway_file_share_name CloudStorageGatewayGatewayFileShare#gateway_file_share_name}
  */
  readonly gatewayFileShareName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway_file_share#gateway_id CloudStorageGatewayGatewayFileShare#gateway_id}
  */
  readonly gatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway_file_share#id CloudStorageGatewayGatewayFileShare#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway_file_share#ignore_delete CloudStorageGatewayGatewayFileShare#ignore_delete}
  */
  readonly ignoreDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway_file_share#in_place CloudStorageGatewayGatewayFileShare#in_place}
  */
  readonly inPlace?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway_file_share#lag_period CloudStorageGatewayGatewayFileShare#lag_period}
  */
  readonly lagPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway_file_share#local_path CloudStorageGatewayGatewayFileShare#local_path}
  */
  readonly localPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway_file_share#nfs_v4_optimization CloudStorageGatewayGatewayFileShare#nfs_v4_optimization}
  */
  readonly nfsV4Optimization?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway_file_share#oss_bucket_name CloudStorageGatewayGatewayFileShare#oss_bucket_name}
  */
  readonly ossBucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway_file_share#oss_bucket_ssl CloudStorageGatewayGatewayFileShare#oss_bucket_ssl}
  */
  readonly ossBucketSsl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway_file_share#oss_endpoint CloudStorageGatewayGatewayFileShare#oss_endpoint}
  */
  readonly ossEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway_file_share#partial_sync_paths CloudStorageGatewayGatewayFileShare#partial_sync_paths}
  */
  readonly partialSyncPaths?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway_file_share#path_prefix CloudStorageGatewayGatewayFileShare#path_prefix}
  */
  readonly pathPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway_file_share#polling_interval CloudStorageGatewayGatewayFileShare#polling_interval}
  */
  readonly pollingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway_file_share#protocol CloudStorageGatewayGatewayFileShare#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway_file_share#remote_sync CloudStorageGatewayGatewayFileShare#remote_sync}
  */
  readonly remoteSync?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway_file_share#remote_sync_download CloudStorageGatewayGatewayFileShare#remote_sync_download}
  */
  readonly remoteSyncDownload?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway_file_share#ro_client_list CloudStorageGatewayGatewayFileShare#ro_client_list}
  */
  readonly roClientList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway_file_share#ro_user_list CloudStorageGatewayGatewayFileShare#ro_user_list}
  */
  readonly roUserList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway_file_share#rw_client_list CloudStorageGatewayGatewayFileShare#rw_client_list}
  */
  readonly rwClientList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway_file_share#rw_user_list CloudStorageGatewayGatewayFileShare#rw_user_list}
  */
  readonly rwUserList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway_file_share#squash CloudStorageGatewayGatewayFileShare#squash}
  */
  readonly squash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway_file_share#support_archive CloudStorageGatewayGatewayFileShare#support_archive}
  */
  readonly supportArchive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway_file_share#transfer_acceleration CloudStorageGatewayGatewayFileShare#transfer_acceleration}
  */
  readonly transferAcceleration?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway_file_share#windows_acl CloudStorageGatewayGatewayFileShare#windows_acl}
  */
  readonly windowsAcl?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway_file_share#timeouts CloudStorageGatewayGatewayFileShare#timeouts}
  */
  readonly timeouts?: CloudStorageGatewayGatewayFileShareTimeouts;
}
export interface CloudStorageGatewayGatewayFileShareTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway_file_share#create CloudStorageGatewayGatewayFileShare#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway_file_share#delete CloudStorageGatewayGatewayFileShare#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway_file_share#update CloudStorageGatewayGatewayFileShare#update}
  */
  readonly update?: string;
}

export function cloudStorageGatewayGatewayFileShareTimeoutsToTerraform(struct?: CloudStorageGatewayGatewayFileShareTimeouts | cdktf.IResolvable): any {
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


export function cloudStorageGatewayGatewayFileShareTimeoutsToHclTerraform(struct?: CloudStorageGatewayGatewayFileShareTimeouts | cdktf.IResolvable): any {
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

export class CloudStorageGatewayGatewayFileShareTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudStorageGatewayGatewayFileShareTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudStorageGatewayGatewayFileShareTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway_file_share alicloud_cloud_storage_gateway_gateway_file_share}
*/
export class CloudStorageGatewayGatewayFileShare extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cloud_storage_gateway_gateway_file_share";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudStorageGatewayGatewayFileShare resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudStorageGatewayGatewayFileShare to import
  * @param importFromId The id of the existing CloudStorageGatewayGatewayFileShare that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway_file_share#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudStorageGatewayGatewayFileShare to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cloud_storage_gateway_gateway_file_share", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_storage_gateway_gateway_file_share alicloud_cloud_storage_gateway_gateway_file_share} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudStorageGatewayGatewayFileShareConfig
  */
  public constructor(scope: Construct, id: string, config: CloudStorageGatewayGatewayFileShareConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cloud_storage_gateway_gateway_file_share',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
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
    this._backendLimit = config.backendLimit;
    this._browsable = config.browsable;
    this._bypassCacheRead = config.bypassCacheRead;
    this._cacheMode = config.cacheMode;
    this._directIo = config.directIo;
    this._downloadLimit = config.downloadLimit;
    this._fastReclaim = config.fastReclaim;
    this._feLimit = config.feLimit;
    this._gatewayFileShareName = config.gatewayFileShareName;
    this._gatewayId = config.gatewayId;
    this._id = config.id;
    this._ignoreDelete = config.ignoreDelete;
    this._inPlace = config.inPlace;
    this._lagPeriod = config.lagPeriod;
    this._localPath = config.localPath;
    this._nfsV4Optimization = config.nfsV4Optimization;
    this._ossBucketName = config.ossBucketName;
    this._ossBucketSsl = config.ossBucketSsl;
    this._ossEndpoint = config.ossEndpoint;
    this._partialSyncPaths = config.partialSyncPaths;
    this._pathPrefix = config.pathPrefix;
    this._pollingInterval = config.pollingInterval;
    this._protocol = config.protocol;
    this._remoteSync = config.remoteSync;
    this._remoteSyncDownload = config.remoteSyncDownload;
    this._roClientList = config.roClientList;
    this._roUserList = config.roUserList;
    this._rwClientList = config.rwClientList;
    this._rwUserList = config.rwUserList;
    this._squash = config.squash;
    this._supportArchive = config.supportArchive;
    this._transferAcceleration = config.transferAcceleration;
    this._windowsAcl = config.windowsAcl;
    this._timeouts.internalValue = config.timeouts;
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

  // backend_limit - computed: true, optional: true, required: false
  private _backendLimit?: number; 
  public get backendLimit() {
    return this.getNumberAttribute('backend_limit');
  }
  public set backendLimit(value: number) {
    this._backendLimit = value;
  }
  public resetBackendLimit() {
    this._backendLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendLimitInput() {
    return this._backendLimit;
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

  // bypass_cache_read - computed: true, optional: true, required: false
  private _bypassCacheRead?: boolean | cdktf.IResolvable; 
  public get bypassCacheRead() {
    return this.getBooleanAttribute('bypass_cache_read');
  }
  public set bypassCacheRead(value: boolean | cdktf.IResolvable) {
    this._bypassCacheRead = value;
  }
  public resetBypassCacheRead() {
    this._bypassCacheRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassCacheReadInput() {
    return this._bypassCacheRead;
  }

  // cache_mode - computed: true, optional: true, required: false
  private _cacheMode?: string; 
  public get cacheMode() {
    return this.getStringAttribute('cache_mode');
  }
  public set cacheMode(value: string) {
    this._cacheMode = value;
  }
  public resetCacheMode() {
    this._cacheMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheModeInput() {
    return this._cacheMode;
  }

  // direct_io - computed: true, optional: true, required: false
  private _directIo?: boolean | cdktf.IResolvable; 
  public get directIo() {
    return this.getBooleanAttribute('direct_io');
  }
  public set directIo(value: boolean | cdktf.IResolvable) {
    this._directIo = value;
  }
  public resetDirectIo() {
    this._directIo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directIoInput() {
    return this._directIo;
  }

  // download_limit - computed: true, optional: true, required: false
  private _downloadLimit?: number; 
  public get downloadLimit() {
    return this.getNumberAttribute('download_limit');
  }
  public set downloadLimit(value: number) {
    this._downloadLimit = value;
  }
  public resetDownloadLimit() {
    this._downloadLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadLimitInput() {
    return this._downloadLimit;
  }

  // fast_reclaim - computed: true, optional: true, required: false
  private _fastReclaim?: boolean | cdktf.IResolvable; 
  public get fastReclaim() {
    return this.getBooleanAttribute('fast_reclaim');
  }
  public set fastReclaim(value: boolean | cdktf.IResolvable) {
    this._fastReclaim = value;
  }
  public resetFastReclaim() {
    this._fastReclaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastReclaimInput() {
    return this._fastReclaim;
  }

  // fe_limit - computed: true, optional: true, required: false
  private _feLimit?: number; 
  public get feLimit() {
    return this.getNumberAttribute('fe_limit');
  }
  public set feLimit(value: number) {
    this._feLimit = value;
  }
  public resetFeLimit() {
    this._feLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feLimitInput() {
    return this._feLimit;
  }

  // gateway_file_share_name - computed: false, optional: false, required: true
  private _gatewayFileShareName?: string; 
  public get gatewayFileShareName() {
    return this.getStringAttribute('gateway_file_share_name');
  }
  public set gatewayFileShareName(value: string) {
    this._gatewayFileShareName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayFileShareNameInput() {
    return this._gatewayFileShareName;
  }

  // gateway_id - computed: false, optional: false, required: true
  private _gatewayId?: string; 
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }
  public set gatewayId(value: string) {
    this._gatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdInput() {
    return this._gatewayId;
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

  // ignore_delete - computed: true, optional: true, required: false
  private _ignoreDelete?: boolean | cdktf.IResolvable; 
  public get ignoreDelete() {
    return this.getBooleanAttribute('ignore_delete');
  }
  public set ignoreDelete(value: boolean | cdktf.IResolvable) {
    this._ignoreDelete = value;
  }
  public resetIgnoreDelete() {
    this._ignoreDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDeleteInput() {
    return this._ignoreDelete;
  }

  // in_place - computed: true, optional: true, required: false
  private _inPlace?: boolean | cdktf.IResolvable; 
  public get inPlace() {
    return this.getBooleanAttribute('in_place');
  }
  public set inPlace(value: boolean | cdktf.IResolvable) {
    this._inPlace = value;
  }
  public resetInPlace() {
    this._inPlace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inPlaceInput() {
    return this._inPlace;
  }

  // index_id - computed: true, optional: false, required: false
  public get indexId() {
    return this.getStringAttribute('index_id');
  }

  // lag_period - computed: true, optional: true, required: false
  private _lagPeriod?: number; 
  public get lagPeriod() {
    return this.getNumberAttribute('lag_period');
  }
  public set lagPeriod(value: number) {
    this._lagPeriod = value;
  }
  public resetLagPeriod() {
    this._lagPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lagPeriodInput() {
    return this._lagPeriod;
  }

  // local_path - computed: false, optional: false, required: true
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }

  // nfs_v4_optimization - computed: true, optional: true, required: false
  private _nfsV4Optimization?: boolean | cdktf.IResolvable; 
  public get nfsV4Optimization() {
    return this.getBooleanAttribute('nfs_v4_optimization');
  }
  public set nfsV4Optimization(value: boolean | cdktf.IResolvable) {
    this._nfsV4Optimization = value;
  }
  public resetNfsV4Optimization() {
    this._nfsV4Optimization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsV4OptimizationInput() {
    return this._nfsV4Optimization;
  }

  // oss_bucket_name - computed: false, optional: false, required: true
  private _ossBucketName?: string; 
  public get ossBucketName() {
    return this.getStringAttribute('oss_bucket_name');
  }
  public set ossBucketName(value: string) {
    this._ossBucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ossBucketNameInput() {
    return this._ossBucketName;
  }

  // oss_bucket_ssl - computed: true, optional: true, required: false
  private _ossBucketSsl?: boolean | cdktf.IResolvable; 
  public get ossBucketSsl() {
    return this.getBooleanAttribute('oss_bucket_ssl');
  }
  public set ossBucketSsl(value: boolean | cdktf.IResolvable) {
    this._ossBucketSsl = value;
  }
  public resetOssBucketSsl() {
    this._ossBucketSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ossBucketSslInput() {
    return this._ossBucketSsl;
  }

  // oss_endpoint - computed: false, optional: false, required: true
  private _ossEndpoint?: string; 
  public get ossEndpoint() {
    return this.getStringAttribute('oss_endpoint');
  }
  public set ossEndpoint(value: string) {
    this._ossEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ossEndpointInput() {
    return this._ossEndpoint;
  }

  // partial_sync_paths - computed: false, optional: true, required: false
  private _partialSyncPaths?: string; 
  public get partialSyncPaths() {
    return this.getStringAttribute('partial_sync_paths');
  }
  public set partialSyncPaths(value: string) {
    this._partialSyncPaths = value;
  }
  public resetPartialSyncPaths() {
    this._partialSyncPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialSyncPathsInput() {
    return this._partialSyncPaths;
  }

  // path_prefix - computed: false, optional: true, required: false
  private _pathPrefix?: string; 
  public get pathPrefix() {
    return this.getStringAttribute('path_prefix');
  }
  public set pathPrefix(value: string) {
    this._pathPrefix = value;
  }
  public resetPathPrefix() {
    this._pathPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPrefixInput() {
    return this._pathPrefix;
  }

  // polling_interval - computed: false, optional: true, required: false
  private _pollingInterval?: number; 
  public get pollingInterval() {
    return this.getNumberAttribute('polling_interval');
  }
  public set pollingInterval(value: number) {
    this._pollingInterval = value;
  }
  public resetPollingInterval() {
    this._pollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingIntervalInput() {
    return this._pollingInterval;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // remote_sync - computed: true, optional: true, required: false
  private _remoteSync?: boolean | cdktf.IResolvable; 
  public get remoteSync() {
    return this.getBooleanAttribute('remote_sync');
  }
  public set remoteSync(value: boolean | cdktf.IResolvable) {
    this._remoteSync = value;
  }
  public resetRemoteSync() {
    this._remoteSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteSyncInput() {
    return this._remoteSync;
  }

  // remote_sync_download - computed: true, optional: true, required: false
  private _remoteSyncDownload?: boolean | cdktf.IResolvable; 
  public get remoteSyncDownload() {
    return this.getBooleanAttribute('remote_sync_download');
  }
  public set remoteSyncDownload(value: boolean | cdktf.IResolvable) {
    this._remoteSyncDownload = value;
  }
  public resetRemoteSyncDownload() {
    this._remoteSyncDownload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteSyncDownloadInput() {
    return this._remoteSyncDownload;
  }

  // ro_client_list - computed: false, optional: true, required: false
  private _roClientList?: string; 
  public get roClientList() {
    return this.getStringAttribute('ro_client_list');
  }
  public set roClientList(value: string) {
    this._roClientList = value;
  }
  public resetRoClientList() {
    this._roClientList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roClientListInput() {
    return this._roClientList;
  }

  // ro_user_list - computed: false, optional: true, required: false
  private _roUserList?: string; 
  public get roUserList() {
    return this.getStringAttribute('ro_user_list');
  }
  public set roUserList(value: string) {
    this._roUserList = value;
  }
  public resetRoUserList() {
    this._roUserList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roUserListInput() {
    return this._roUserList;
  }

  // rw_client_list - computed: false, optional: true, required: false
  private _rwClientList?: string; 
  public get rwClientList() {
    return this.getStringAttribute('rw_client_list');
  }
  public set rwClientList(value: string) {
    this._rwClientList = value;
  }
  public resetRwClientList() {
    this._rwClientList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rwClientListInput() {
    return this._rwClientList;
  }

  // rw_user_list - computed: false, optional: true, required: false
  private _rwUserList?: string; 
  public get rwUserList() {
    return this.getStringAttribute('rw_user_list');
  }
  public set rwUserList(value: string) {
    this._rwUserList = value;
  }
  public resetRwUserList() {
    this._rwUserList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rwUserListInput() {
    return this._rwUserList;
  }

  // squash - computed: true, optional: true, required: false
  private _squash?: string; 
  public get squash() {
    return this.getStringAttribute('squash');
  }
  public set squash(value: string) {
    this._squash = value;
  }
  public resetSquash() {
    this._squash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get squashInput() {
    return this._squash;
  }

  // support_archive - computed: true, optional: true, required: false
  private _supportArchive?: boolean | cdktf.IResolvable; 
  public get supportArchive() {
    return this.getBooleanAttribute('support_archive');
  }
  public set supportArchive(value: boolean | cdktf.IResolvable) {
    this._supportArchive = value;
  }
  public resetSupportArchive() {
    this._supportArchive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportArchiveInput() {
    return this._supportArchive;
  }

  // transfer_acceleration - computed: true, optional: true, required: false
  private _transferAcceleration?: boolean | cdktf.IResolvable; 
  public get transferAcceleration() {
    return this.getBooleanAttribute('transfer_acceleration');
  }
  public set transferAcceleration(value: boolean | cdktf.IResolvable) {
    this._transferAcceleration = value;
  }
  public resetTransferAcceleration() {
    this._transferAcceleration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferAccelerationInput() {
    return this._transferAcceleration;
  }

  // windows_acl - computed: true, optional: true, required: false
  private _windowsAcl?: boolean | cdktf.IResolvable; 
  public get windowsAcl() {
    return this.getBooleanAttribute('windows_acl');
  }
  public set windowsAcl(value: boolean | cdktf.IResolvable) {
    this._windowsAcl = value;
  }
  public resetWindowsAcl() {
    this._windowsAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsAclInput() {
    return this._windowsAcl;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudStorageGatewayGatewayFileShareTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudStorageGatewayGatewayFileShareTimeouts) {
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
      access_based_enumeration: cdktf.booleanToTerraform(this._accessBasedEnumeration),
      backend_limit: cdktf.numberToTerraform(this._backendLimit),
      browsable: cdktf.booleanToTerraform(this._browsable),
      bypass_cache_read: cdktf.booleanToTerraform(this._bypassCacheRead),
      cache_mode: cdktf.stringToTerraform(this._cacheMode),
      direct_io: cdktf.booleanToTerraform(this._directIo),
      download_limit: cdktf.numberToTerraform(this._downloadLimit),
      fast_reclaim: cdktf.booleanToTerraform(this._fastReclaim),
      fe_limit: cdktf.numberToTerraform(this._feLimit),
      gateway_file_share_name: cdktf.stringToTerraform(this._gatewayFileShareName),
      gateway_id: cdktf.stringToTerraform(this._gatewayId),
      id: cdktf.stringToTerraform(this._id),
      ignore_delete: cdktf.booleanToTerraform(this._ignoreDelete),
      in_place: cdktf.booleanToTerraform(this._inPlace),
      lag_period: cdktf.numberToTerraform(this._lagPeriod),
      local_path: cdktf.stringToTerraform(this._localPath),
      nfs_v4_optimization: cdktf.booleanToTerraform(this._nfsV4Optimization),
      oss_bucket_name: cdktf.stringToTerraform(this._ossBucketName),
      oss_bucket_ssl: cdktf.booleanToTerraform(this._ossBucketSsl),
      oss_endpoint: cdktf.stringToTerraform(this._ossEndpoint),
      partial_sync_paths: cdktf.stringToTerraform(this._partialSyncPaths),
      path_prefix: cdktf.stringToTerraform(this._pathPrefix),
      polling_interval: cdktf.numberToTerraform(this._pollingInterval),
      protocol: cdktf.stringToTerraform(this._protocol),
      remote_sync: cdktf.booleanToTerraform(this._remoteSync),
      remote_sync_download: cdktf.booleanToTerraform(this._remoteSyncDownload),
      ro_client_list: cdktf.stringToTerraform(this._roClientList),
      ro_user_list: cdktf.stringToTerraform(this._roUserList),
      rw_client_list: cdktf.stringToTerraform(this._rwClientList),
      rw_user_list: cdktf.stringToTerraform(this._rwUserList),
      squash: cdktf.stringToTerraform(this._squash),
      support_archive: cdktf.booleanToTerraform(this._supportArchive),
      transfer_acceleration: cdktf.booleanToTerraform(this._transferAcceleration),
      windows_acl: cdktf.booleanToTerraform(this._windowsAcl),
      timeouts: cloudStorageGatewayGatewayFileShareTimeoutsToTerraform(this._timeouts.internalValue),
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
      backend_limit: {
        value: cdktf.numberToHclTerraform(this._backendLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      browsable: {
        value: cdktf.booleanToHclTerraform(this._browsable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bypass_cache_read: {
        value: cdktf.booleanToHclTerraform(this._bypassCacheRead),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cache_mode: {
        value: cdktf.stringToHclTerraform(this._cacheMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direct_io: {
        value: cdktf.booleanToHclTerraform(this._directIo),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      download_limit: {
        value: cdktf.numberToHclTerraform(this._downloadLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fast_reclaim: {
        value: cdktf.booleanToHclTerraform(this._fastReclaim),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fe_limit: {
        value: cdktf.numberToHclTerraform(this._feLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gateway_file_share_name: {
        value: cdktf.stringToHclTerraform(this._gatewayFileShareName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_id: {
        value: cdktf.stringToHclTerraform(this._gatewayId),
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
      ignore_delete: {
        value: cdktf.booleanToHclTerraform(this._ignoreDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      in_place: {
        value: cdktf.booleanToHclTerraform(this._inPlace),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lag_period: {
        value: cdktf.numberToHclTerraform(this._lagPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      local_path: {
        value: cdktf.stringToHclTerraform(this._localPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nfs_v4_optimization: {
        value: cdktf.booleanToHclTerraform(this._nfsV4Optimization),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      oss_bucket_name: {
        value: cdktf.stringToHclTerraform(this._ossBucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oss_bucket_ssl: {
        value: cdktf.booleanToHclTerraform(this._ossBucketSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      oss_endpoint: {
        value: cdktf.stringToHclTerraform(this._ossEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partial_sync_paths: {
        value: cdktf.stringToHclTerraform(this._partialSyncPaths),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path_prefix: {
        value: cdktf.stringToHclTerraform(this._pathPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      polling_interval: {
        value: cdktf.numberToHclTerraform(this._pollingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_sync: {
        value: cdktf.booleanToHclTerraform(this._remoteSync),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remote_sync_download: {
        value: cdktf.booleanToHclTerraform(this._remoteSyncDownload),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ro_client_list: {
        value: cdktf.stringToHclTerraform(this._roClientList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ro_user_list: {
        value: cdktf.stringToHclTerraform(this._roUserList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rw_client_list: {
        value: cdktf.stringToHclTerraform(this._rwClientList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rw_user_list: {
        value: cdktf.stringToHclTerraform(this._rwUserList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      squash: {
        value: cdktf.stringToHclTerraform(this._squash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      support_archive: {
        value: cdktf.booleanToHclTerraform(this._supportArchive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      transfer_acceleration: {
        value: cdktf.booleanToHclTerraform(this._transferAcceleration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      windows_acl: {
        value: cdktf.booleanToHclTerraform(this._windowsAcl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: cloudStorageGatewayGatewayFileShareTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudStorageGatewayGatewayFileShareTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
