// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_storage_gateway_gateway_block_volume
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudStorageGatewayGatewayBlockVolumeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_storage_gateway_gateway_block_volume#cache_mode CloudStorageGatewayGatewayBlockVolume#cache_mode}
  */
  readonly cacheMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_storage_gateway_gateway_block_volume#chap_enabled CloudStorageGatewayGatewayBlockVolume#chap_enabled}
  */
  readonly chapEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_storage_gateway_gateway_block_volume#chap_in_password CloudStorageGatewayGatewayBlockVolume#chap_in_password}
  */
  readonly chapInPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_storage_gateway_gateway_block_volume#chap_in_user CloudStorageGatewayGatewayBlockVolume#chap_in_user}
  */
  readonly chapInUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_storage_gateway_gateway_block_volume#chunk_size CloudStorageGatewayGatewayBlockVolume#chunk_size}
  */
  readonly chunkSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_storage_gateway_gateway_block_volume#gateway_block_volume_name CloudStorageGatewayGatewayBlockVolume#gateway_block_volume_name}
  */
  readonly gatewayBlockVolumeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_storage_gateway_gateway_block_volume#gateway_id CloudStorageGatewayGatewayBlockVolume#gateway_id}
  */
  readonly gatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_storage_gateway_gateway_block_volume#id CloudStorageGatewayGatewayBlockVolume#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_storage_gateway_gateway_block_volume#is_source_deletion CloudStorageGatewayGatewayBlockVolume#is_source_deletion}
  */
  readonly isSourceDeletion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_storage_gateway_gateway_block_volume#local_path CloudStorageGatewayGatewayBlockVolume#local_path}
  */
  readonly localPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_storage_gateway_gateway_block_volume#oss_bucket_name CloudStorageGatewayGatewayBlockVolume#oss_bucket_name}
  */
  readonly ossBucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_storage_gateway_gateway_block_volume#oss_bucket_ssl CloudStorageGatewayGatewayBlockVolume#oss_bucket_ssl}
  */
  readonly ossBucketSsl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_storage_gateway_gateway_block_volume#oss_endpoint CloudStorageGatewayGatewayBlockVolume#oss_endpoint}
  */
  readonly ossEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_storage_gateway_gateway_block_volume#protocol CloudStorageGatewayGatewayBlockVolume#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_storage_gateway_gateway_block_volume#recovery CloudStorageGatewayGatewayBlockVolume#recovery}
  */
  readonly recovery?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_storage_gateway_gateway_block_volume#size CloudStorageGatewayGatewayBlockVolume#size}
  */
  readonly size?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_storage_gateway_gateway_block_volume#timeouts CloudStorageGatewayGatewayBlockVolume#timeouts}
  */
  readonly timeouts?: CloudStorageGatewayGatewayBlockVolumeTimeouts;
}
export interface CloudStorageGatewayGatewayBlockVolumeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_storage_gateway_gateway_block_volume#create CloudStorageGatewayGatewayBlockVolume#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_storage_gateway_gateway_block_volume#delete CloudStorageGatewayGatewayBlockVolume#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_storage_gateway_gateway_block_volume#update CloudStorageGatewayGatewayBlockVolume#update}
  */
  readonly update?: string;
}

export function cloudStorageGatewayGatewayBlockVolumeTimeoutsToTerraform(struct?: CloudStorageGatewayGatewayBlockVolumeTimeouts | cdktf.IResolvable): any {
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


export function cloudStorageGatewayGatewayBlockVolumeTimeoutsToHclTerraform(struct?: CloudStorageGatewayGatewayBlockVolumeTimeouts | cdktf.IResolvable): any {
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

export class CloudStorageGatewayGatewayBlockVolumeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudStorageGatewayGatewayBlockVolumeTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudStorageGatewayGatewayBlockVolumeTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_storage_gateway_gateway_block_volume alicloud_cloud_storage_gateway_gateway_block_volume}
*/
export class CloudStorageGatewayGatewayBlockVolume extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cloud_storage_gateway_gateway_block_volume";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudStorageGatewayGatewayBlockVolume resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudStorageGatewayGatewayBlockVolume to import
  * @param importFromId The id of the existing CloudStorageGatewayGatewayBlockVolume that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_storage_gateway_gateway_block_volume#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudStorageGatewayGatewayBlockVolume to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cloud_storage_gateway_gateway_block_volume", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_storage_gateway_gateway_block_volume alicloud_cloud_storage_gateway_gateway_block_volume} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudStorageGatewayGatewayBlockVolumeConfig
  */
  public constructor(scope: Construct, id: string, config: CloudStorageGatewayGatewayBlockVolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cloud_storage_gateway_gateway_block_volume',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cacheMode = config.cacheMode;
    this._chapEnabled = config.chapEnabled;
    this._chapInPassword = config.chapInPassword;
    this._chapInUser = config.chapInUser;
    this._chunkSize = config.chunkSize;
    this._gatewayBlockVolumeName = config.gatewayBlockVolumeName;
    this._gatewayId = config.gatewayId;
    this._id = config.id;
    this._isSourceDeletion = config.isSourceDeletion;
    this._localPath = config.localPath;
    this._ossBucketName = config.ossBucketName;
    this._ossBucketSsl = config.ossBucketSsl;
    this._ossEndpoint = config.ossEndpoint;
    this._protocol = config.protocol;
    this._recovery = config.recovery;
    this._size = config.size;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // chap_enabled - computed: true, optional: true, required: false
  private _chapEnabled?: boolean | cdktf.IResolvable; 
  public get chapEnabled() {
    return this.getBooleanAttribute('chap_enabled');
  }
  public set chapEnabled(value: boolean | cdktf.IResolvable) {
    this._chapEnabled = value;
  }
  public resetChapEnabled() {
    this._chapEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chapEnabledInput() {
    return this._chapEnabled;
  }

  // chap_in_password - computed: false, optional: true, required: false
  private _chapInPassword?: string; 
  public get chapInPassword() {
    return this.getStringAttribute('chap_in_password');
  }
  public set chapInPassword(value: string) {
    this._chapInPassword = value;
  }
  public resetChapInPassword() {
    this._chapInPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chapInPasswordInput() {
    return this._chapInPassword;
  }

  // chap_in_user - computed: false, optional: true, required: false
  private _chapInUser?: string; 
  public get chapInUser() {
    return this.getStringAttribute('chap_in_user');
  }
  public set chapInUser(value: string) {
    this._chapInUser = value;
  }
  public resetChapInUser() {
    this._chapInUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chapInUserInput() {
    return this._chapInUser;
  }

  // chunk_size - computed: true, optional: true, required: false
  private _chunkSize?: number; 
  public get chunkSize() {
    return this.getNumberAttribute('chunk_size');
  }
  public set chunkSize(value: number) {
    this._chunkSize = value;
  }
  public resetChunkSize() {
    this._chunkSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkSizeInput() {
    return this._chunkSize;
  }

  // gateway_block_volume_name - computed: false, optional: false, required: true
  private _gatewayBlockVolumeName?: string; 
  public get gatewayBlockVolumeName() {
    return this.getStringAttribute('gateway_block_volume_name');
  }
  public set gatewayBlockVolumeName(value: string) {
    this._gatewayBlockVolumeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayBlockVolumeNameInput() {
    return this._gatewayBlockVolumeName;
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

  // index_id - computed: true, optional: false, required: false
  public get indexId() {
    return this.getStringAttribute('index_id');
  }

  // is_source_deletion - computed: false, optional: true, required: false
  private _isSourceDeletion?: boolean | cdktf.IResolvable; 
  public get isSourceDeletion() {
    return this.getBooleanAttribute('is_source_deletion');
  }
  public set isSourceDeletion(value: boolean | cdktf.IResolvable) {
    this._isSourceDeletion = value;
  }
  public resetIsSourceDeletion() {
    this._isSourceDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSourceDeletionInput() {
    return this._isSourceDeletion;
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
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

  // recovery - computed: false, optional: true, required: false
  private _recovery?: boolean | cdktf.IResolvable; 
  public get recovery() {
    return this.getBooleanAttribute('recovery');
  }
  public set recovery(value: boolean | cdktf.IResolvable) {
    this._recovery = value;
  }
  public resetRecovery() {
    this._recovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryInput() {
    return this._recovery;
  }

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudStorageGatewayGatewayBlockVolumeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudStorageGatewayGatewayBlockVolumeTimeouts) {
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
      cache_mode: cdktf.stringToTerraform(this._cacheMode),
      chap_enabled: cdktf.booleanToTerraform(this._chapEnabled),
      chap_in_password: cdktf.stringToTerraform(this._chapInPassword),
      chap_in_user: cdktf.stringToTerraform(this._chapInUser),
      chunk_size: cdktf.numberToTerraform(this._chunkSize),
      gateway_block_volume_name: cdktf.stringToTerraform(this._gatewayBlockVolumeName),
      gateway_id: cdktf.stringToTerraform(this._gatewayId),
      id: cdktf.stringToTerraform(this._id),
      is_source_deletion: cdktf.booleanToTerraform(this._isSourceDeletion),
      local_path: cdktf.stringToTerraform(this._localPath),
      oss_bucket_name: cdktf.stringToTerraform(this._ossBucketName),
      oss_bucket_ssl: cdktf.booleanToTerraform(this._ossBucketSsl),
      oss_endpoint: cdktf.stringToTerraform(this._ossEndpoint),
      protocol: cdktf.stringToTerraform(this._protocol),
      recovery: cdktf.booleanToTerraform(this._recovery),
      size: cdktf.numberToTerraform(this._size),
      timeouts: cloudStorageGatewayGatewayBlockVolumeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cache_mode: {
        value: cdktf.stringToHclTerraform(this._cacheMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      chap_enabled: {
        value: cdktf.booleanToHclTerraform(this._chapEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      chap_in_password: {
        value: cdktf.stringToHclTerraform(this._chapInPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      chap_in_user: {
        value: cdktf.stringToHclTerraform(this._chapInUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      chunk_size: {
        value: cdktf.numberToHclTerraform(this._chunkSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gateway_block_volume_name: {
        value: cdktf.stringToHclTerraform(this._gatewayBlockVolumeName),
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
      is_source_deletion: {
        value: cdktf.booleanToHclTerraform(this._isSourceDeletion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      local_path: {
        value: cdktf.stringToHclTerraform(this._localPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recovery: {
        value: cdktf.booleanToHclTerraform(this._recovery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: cloudStorageGatewayGatewayBlockVolumeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudStorageGatewayGatewayBlockVolumeTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
