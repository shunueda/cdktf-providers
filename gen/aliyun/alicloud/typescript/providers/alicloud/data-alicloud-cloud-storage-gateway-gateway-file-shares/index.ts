// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/cloud_storage_gateway_gateway_file_shares
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudCloudStorageGatewayGatewayFileSharesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/cloud_storage_gateway_gateway_file_shares#gateway_id DataAlicloudCloudStorageGatewayGatewayFileShares#gateway_id}
  */
  readonly gatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/cloud_storage_gateway_gateway_file_shares#id DataAlicloudCloudStorageGatewayGatewayFileShares#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/cloud_storage_gateway_gateway_file_shares#ids DataAlicloudCloudStorageGatewayGatewayFileShares#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/cloud_storage_gateway_gateway_file_shares#name_regex DataAlicloudCloudStorageGatewayGatewayFileShares#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/cloud_storage_gateway_gateway_file_shares#output_file DataAlicloudCloudStorageGatewayGatewayFileShares#output_file}
  */
  readonly outputFile?: string;
}
export interface DataAlicloudCloudStorageGatewayGatewayFileSharesShares {
}

export function dataAlicloudCloudStorageGatewayGatewayFileSharesSharesToTerraform(struct?: DataAlicloudCloudStorageGatewayGatewayFileSharesShares): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCloudStorageGatewayGatewayFileSharesSharesToHclTerraform(struct?: DataAlicloudCloudStorageGatewayGatewayFileSharesShares): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCloudStorageGatewayGatewayFileSharesSharesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCloudStorageGatewayGatewayFileSharesShares | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCloudStorageGatewayGatewayFileSharesShares | undefined) {
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

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // backend_limit - computed: true, optional: false, required: false
  public get backendLimit() {
    return this.getNumberAttribute('backend_limit');
  }

  // browsable - computed: true, optional: false, required: false
  public get browsable() {
    return this.getBooleanAttribute('browsable');
  }

  // bucket_infos - computed: true, optional: false, required: false
  public get bucketInfos() {
    return this.getStringAttribute('bucket_infos');
  }

  // buckets_stub - computed: true, optional: false, required: false
  public get bucketsStub() {
    return this.getBooleanAttribute('buckets_stub');
  }

  // bypass_cache_read - computed: true, optional: false, required: false
  public get bypassCacheRead() {
    return this.getBooleanAttribute('bypass_cache_read');
  }

  // cache_mode - computed: true, optional: false, required: false
  public get cacheMode() {
    return this.getStringAttribute('cache_mode');
  }

  // client_side_cmk - computed: true, optional: false, required: false
  public get clientSideCmk() {
    return this.getStringAttribute('client_side_cmk');
  }

  // client_side_encryption - computed: true, optional: false, required: false
  public get clientSideEncryption() {
    return this.getBooleanAttribute('client_side_encryption');
  }

  // direct_io - computed: true, optional: false, required: false
  public get directIo() {
    return this.getBooleanAttribute('direct_io');
  }

  // disk_id - computed: true, optional: false, required: false
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }

  // disk_type - computed: true, optional: false, required: false
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }

  // download_limit - computed: true, optional: false, required: false
  public get downloadLimit() {
    return this.getNumberAttribute('download_limit');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // express_sync_id - computed: true, optional: false, required: false
  public get expressSyncId() {
    return this.getStringAttribute('express_sync_id');
  }

  // fast_reclaim - computed: true, optional: false, required: false
  public get fastReclaim() {
    return this.getBooleanAttribute('fast_reclaim');
  }

  // fe_limit - computed: true, optional: false, required: false
  public get feLimit() {
    return this.getNumberAttribute('fe_limit');
  }

  // file_num_limit - computed: true, optional: false, required: false
  public get fileNumLimit() {
    return this.getStringAttribute('file_num_limit');
  }

  // fs_size_limit - computed: true, optional: false, required: false
  public get fsSizeLimit() {
    return this.getStringAttribute('fs_size_limit');
  }

  // gateway_file_share_name - computed: true, optional: false, required: false
  public get gatewayFileShareName() {
    return this.getStringAttribute('gateway_file_share_name');
  }

  // gateway_id - computed: true, optional: false, required: false
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_delete - computed: true, optional: false, required: false
  public get ignoreDelete() {
    return this.getBooleanAttribute('ignore_delete');
  }

  // in_place - computed: true, optional: false, required: false
  public get inPlace() {
    return this.getBooleanAttribute('in_place');
  }

  // in_rate - computed: true, optional: false, required: false
  public get inRate() {
    return this.getStringAttribute('in_rate');
  }

  // index_id - computed: true, optional: false, required: false
  public get indexId() {
    return this.getStringAttribute('index_id');
  }

  // kms_rotate_period - computed: true, optional: false, required: false
  public get kmsRotatePeriod() {
    return this.getNumberAttribute('kms_rotate_period');
  }

  // lag_period - computed: true, optional: false, required: false
  public get lagPeriod() {
    return this.getStringAttribute('lag_period');
  }

  // local_path - computed: true, optional: false, required: false
  public get localPath() {
    return this.getStringAttribute('local_path');
  }

  // mns_health - computed: true, optional: false, required: false
  public get mnsHealth() {
    return this.getStringAttribute('mns_health');
  }

  // nfs_v4_optimization - computed: true, optional: false, required: false
  public get nfsV4Optimization() {
    return this.getBooleanAttribute('nfs_v4_optimization');
  }

  // obsolete_buckets - computed: true, optional: false, required: false
  public get obsoleteBuckets() {
    return this.getStringAttribute('obsolete_buckets');
  }

  // oss_bucket_name - computed: true, optional: false, required: false
  public get ossBucketName() {
    return this.getStringAttribute('oss_bucket_name');
  }

  // oss_bucket_ssl - computed: true, optional: false, required: false
  public get ossBucketSsl() {
    return this.getBooleanAttribute('oss_bucket_ssl');
  }

  // oss_endpoint - computed: true, optional: false, required: false
  public get ossEndpoint() {
    return this.getStringAttribute('oss_endpoint');
  }

  // oss_health - computed: true, optional: false, required: false
  public get ossHealth() {
    return this.getStringAttribute('oss_health');
  }

  // oss_used - computed: true, optional: false, required: false
  public get ossUsed() {
    return this.getStringAttribute('oss_used');
  }

  // out_rate - computed: true, optional: false, required: false
  public get outRate() {
    return this.getStringAttribute('out_rate');
  }

  // partial_sync_paths - computed: true, optional: false, required: false
  public get partialSyncPaths() {
    return this.getStringAttribute('partial_sync_paths');
  }

  // path_prefix - computed: true, optional: false, required: false
  public get pathPrefix() {
    return this.getStringAttribute('path_prefix');
  }

  // polling_interval - computed: true, optional: false, required: false
  public get pollingInterval() {
    return this.getNumberAttribute('polling_interval');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // remaining_meta_space - computed: true, optional: false, required: false
  public get remainingMetaSpace() {
    return this.getStringAttribute('remaining_meta_space');
  }

  // remote_sync - computed: true, optional: false, required: false
  public get remoteSync() {
    return this.getBooleanAttribute('remote_sync');
  }

  // remote_sync_download - computed: true, optional: false, required: false
  public get remoteSyncDownload() {
    return this.getBooleanAttribute('remote_sync_download');
  }

  // ro_client_list - computed: true, optional: false, required: false
  public get roClientList() {
    return this.getStringAttribute('ro_client_list');
  }

  // ro_user_list - computed: true, optional: false, required: false
  public get roUserList() {
    return this.getStringAttribute('ro_user_list');
  }

  // rw_client_list - computed: true, optional: false, required: false
  public get rwClientList() {
    return this.getStringAttribute('rw_client_list');
  }

  // rw_user_list - computed: true, optional: false, required: false
  public get rwUserList() {
    return this.getStringAttribute('rw_user_list');
  }

  // server_side_cmk - computed: true, optional: false, required: false
  public get serverSideCmk() {
    return this.getStringAttribute('server_side_cmk');
  }

  // server_side_encryption - computed: true, optional: false, required: false
  public get serverSideEncryption() {
    return this.getBooleanAttribute('server_side_encryption');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getStringAttribute('size');
  }

  // squash - computed: true, optional: false, required: false
  public get squash() {
    return this.getStringAttribute('squash');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // support_archive - computed: true, optional: false, required: false
  public get supportArchive() {
    return this.getBooleanAttribute('support_archive');
  }

  // sync_progress - computed: true, optional: false, required: false
  public get syncProgress() {
    return this.getNumberAttribute('sync_progress');
  }

  // total_download - computed: true, optional: false, required: false
  public get totalDownload() {
    return this.getStringAttribute('total_download');
  }

  // total_upload - computed: true, optional: false, required: false
  public get totalUpload() {
    return this.getStringAttribute('total_upload');
  }

  // transfer_acceleration - computed: true, optional: false, required: false
  public get transferAcceleration() {
    return this.getBooleanAttribute('transfer_acceleration');
  }

  // used - computed: true, optional: false, required: false
  public get used() {
    return this.getStringAttribute('used');
  }

  // windows_acl - computed: true, optional: false, required: false
  public get windowsAcl() {
    return this.getBooleanAttribute('windows_acl');
  }
}

export class DataAlicloudCloudStorageGatewayGatewayFileSharesSharesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCloudStorageGatewayGatewayFileSharesSharesOutputReference {
    return new DataAlicloudCloudStorageGatewayGatewayFileSharesSharesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/cloud_storage_gateway_gateway_file_shares alicloud_cloud_storage_gateway_gateway_file_shares}
*/
export class DataAlicloudCloudStorageGatewayGatewayFileShares extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cloud_storage_gateway_gateway_file_shares";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudCloudStorageGatewayGatewayFileShares resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudCloudStorageGatewayGatewayFileShares to import
  * @param importFromId The id of the existing DataAlicloudCloudStorageGatewayGatewayFileShares that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/cloud_storage_gateway_gateway_file_shares#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudCloudStorageGatewayGatewayFileShares to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cloud_storage_gateway_gateway_file_shares", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/cloud_storage_gateway_gateway_file_shares alicloud_cloud_storage_gateway_gateway_file_shares} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudCloudStorageGatewayGatewayFileSharesConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudCloudStorageGatewayGatewayFileSharesConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cloud_storage_gateway_gateway_file_shares',
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
    this._gatewayId = config.gatewayId;
    this._id = config.id;
    this._ids = config.ids;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // shares - computed: true, optional: false, required: false
  private _shares = new DataAlicloudCloudStorageGatewayGatewayFileSharesSharesList(this, "shares", false);
  public get shares() {
    return this._shares;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gateway_id: cdktf.stringToTerraform(this._gatewayId),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
