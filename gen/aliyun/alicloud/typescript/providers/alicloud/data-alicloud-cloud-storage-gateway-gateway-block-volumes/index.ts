// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_storage_gateway_gateway_block_volumes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudCloudStorageGatewayGatewayBlockVolumesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_storage_gateway_gateway_block_volumes#gateway_id DataAlicloudCloudStorageGatewayGatewayBlockVolumes#gateway_id}
  */
  readonly gatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_storage_gateway_gateway_block_volumes#id DataAlicloudCloudStorageGatewayGatewayBlockVolumes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_storage_gateway_gateway_block_volumes#ids DataAlicloudCloudStorageGatewayGatewayBlockVolumes#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_storage_gateway_gateway_block_volumes#name_regex DataAlicloudCloudStorageGatewayGatewayBlockVolumes#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_storage_gateway_gateway_block_volumes#output_file DataAlicloudCloudStorageGatewayGatewayBlockVolumes#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_storage_gateway_gateway_block_volumes#status DataAlicloudCloudStorageGatewayGatewayBlockVolumes#status}
  */
  readonly status?: number;
}
export interface DataAlicloudCloudStorageGatewayGatewayBlockVolumesVolumes {
}

export function dataAlicloudCloudStorageGatewayGatewayBlockVolumesVolumesToTerraform(struct?: DataAlicloudCloudStorageGatewayGatewayBlockVolumesVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCloudStorageGatewayGatewayBlockVolumesVolumesToHclTerraform(struct?: DataAlicloudCloudStorageGatewayGatewayBlockVolumesVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCloudStorageGatewayGatewayBlockVolumesVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCloudStorageGatewayGatewayBlockVolumesVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCloudStorageGatewayGatewayBlockVolumesVolumes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // cache_mode - computed: true, optional: false, required: false
  public get cacheMode() {
    return this.getStringAttribute('cache_mode');
  }

  // chap_enabled - computed: true, optional: false, required: false
  public get chapEnabled() {
    return this.getBooleanAttribute('chap_enabled');
  }

  // chap_in_user - computed: true, optional: false, required: false
  public get chapInUser() {
    return this.getStringAttribute('chap_in_user');
  }

  // chunk_size - computed: true, optional: false, required: false
  public get chunkSize() {
    return this.getNumberAttribute('chunk_size');
  }

  // disk_id - computed: true, optional: false, required: false
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }

  // disk_type - computed: true, optional: false, required: false
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // gateway_block_volume_name - computed: true, optional: false, required: false
  public get gatewayBlockVolumeName() {
    return this.getStringAttribute('gateway_block_volume_name');
  }

  // gateway_id - computed: true, optional: false, required: false
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // index_id - computed: true, optional: false, required: false
  public get indexId() {
    return this.getStringAttribute('index_id');
  }

  // local_path - computed: true, optional: false, required: false
  public get localPath() {
    return this.getStringAttribute('local_path');
  }

  // lun_id - computed: true, optional: false, required: false
  public get lunId() {
    return this.getNumberAttribute('lun_id');
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

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getStringAttribute('target');
  }

  // total_download - computed: true, optional: false, required: false
  public get totalDownload() {
    return this.getNumberAttribute('total_download');
  }

  // total_upload - computed: true, optional: false, required: false
  public get totalUpload() {
    return this.getNumberAttribute('total_upload');
  }

  // volume_state - computed: true, optional: false, required: false
  public get volumeState() {
    return this.getNumberAttribute('volume_state');
  }
}

export class DataAlicloudCloudStorageGatewayGatewayBlockVolumesVolumesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCloudStorageGatewayGatewayBlockVolumesVolumesOutputReference {
    return new DataAlicloudCloudStorageGatewayGatewayBlockVolumesVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_storage_gateway_gateway_block_volumes alicloud_cloud_storage_gateway_gateway_block_volumes}
*/
export class DataAlicloudCloudStorageGatewayGatewayBlockVolumes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cloud_storage_gateway_gateway_block_volumes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudCloudStorageGatewayGatewayBlockVolumes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudCloudStorageGatewayGatewayBlockVolumes to import
  * @param importFromId The id of the existing DataAlicloudCloudStorageGatewayGatewayBlockVolumes that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_storage_gateway_gateway_block_volumes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudCloudStorageGatewayGatewayBlockVolumes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cloud_storage_gateway_gateway_block_volumes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_storage_gateway_gateway_block_volumes alicloud_cloud_storage_gateway_gateway_block_volumes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudCloudStorageGatewayGatewayBlockVolumesConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudCloudStorageGatewayGatewayBlockVolumesConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cloud_storage_gateway_gateway_block_volumes',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
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
    this._status = config.status;
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

  // status - computed: false, optional: true, required: false
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // volumes - computed: true, optional: false, required: false
  private _volumes = new DataAlicloudCloudStorageGatewayGatewayBlockVolumesVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
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
      status: cdktf.numberToTerraform(this._status),
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
      status: {
        value: cdktf.numberToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
