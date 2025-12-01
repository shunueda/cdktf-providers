// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cloud_storage_gateway_gateway_cache_disk
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudStorageGatewayGatewayCacheDiskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cloud_storage_gateway_gateway_cache_disk#cache_disk_category CloudStorageGatewayGatewayCacheDisk#cache_disk_category}
  */
  readonly cacheDiskCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cloud_storage_gateway_gateway_cache_disk#cache_disk_size_in_gb CloudStorageGatewayGatewayCacheDisk#cache_disk_size_in_gb}
  */
  readonly cacheDiskSizeInGb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cloud_storage_gateway_gateway_cache_disk#gateway_id CloudStorageGatewayGatewayCacheDisk#gateway_id}
  */
  readonly gatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cloud_storage_gateway_gateway_cache_disk#id CloudStorageGatewayGatewayCacheDisk#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cloud_storage_gateway_gateway_cache_disk#performance_level CloudStorageGatewayGatewayCacheDisk#performance_level}
  */
  readonly performanceLevel?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cloud_storage_gateway_gateway_cache_disk alicloud_cloud_storage_gateway_gateway_cache_disk}
*/
export class CloudStorageGatewayGatewayCacheDisk extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cloud_storage_gateway_gateway_cache_disk";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudStorageGatewayGatewayCacheDisk resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudStorageGatewayGatewayCacheDisk to import
  * @param importFromId The id of the existing CloudStorageGatewayGatewayCacheDisk that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cloud_storage_gateway_gateway_cache_disk#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudStorageGatewayGatewayCacheDisk to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cloud_storage_gateway_gateway_cache_disk", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cloud_storage_gateway_gateway_cache_disk alicloud_cloud_storage_gateway_gateway_cache_disk} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudStorageGatewayGatewayCacheDiskConfig
  */
  public constructor(scope: Construct, id: string, config: CloudStorageGatewayGatewayCacheDiskConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cloud_storage_gateway_gateway_cache_disk',
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
    this._cacheDiskCategory = config.cacheDiskCategory;
    this._cacheDiskSizeInGb = config.cacheDiskSizeInGb;
    this._gatewayId = config.gatewayId;
    this._id = config.id;
    this._performanceLevel = config.performanceLevel;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_disk_category - computed: true, optional: true, required: false
  private _cacheDiskCategory?: string; 
  public get cacheDiskCategory() {
    return this.getStringAttribute('cache_disk_category');
  }
  public set cacheDiskCategory(value: string) {
    this._cacheDiskCategory = value;
  }
  public resetCacheDiskCategory() {
    this._cacheDiskCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheDiskCategoryInput() {
    return this._cacheDiskCategory;
  }

  // cache_disk_size_in_gb - computed: false, optional: false, required: true
  private _cacheDiskSizeInGb?: number; 
  public get cacheDiskSizeInGb() {
    return this.getNumberAttribute('cache_disk_size_in_gb');
  }
  public set cacheDiskSizeInGb(value: number) {
    this._cacheDiskSizeInGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheDiskSizeInGbInput() {
    return this._cacheDiskSizeInGb;
  }

  // cache_id - computed: true, optional: false, required: false
  public get cacheId() {
    return this.getStringAttribute('cache_id');
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

  // local_file_path - computed: true, optional: false, required: false
  public get localFilePath() {
    return this.getStringAttribute('local_file_path');
  }

  // performance_level - computed: false, optional: true, required: false
  private _performanceLevel?: string; 
  public get performanceLevel() {
    return this.getStringAttribute('performance_level');
  }
  public set performanceLevel(value: string) {
    this._performanceLevel = value;
  }
  public resetPerformanceLevel() {
    this._performanceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceLevelInput() {
    return this._performanceLevel;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cache_disk_category: cdktf.stringToTerraform(this._cacheDiskCategory),
      cache_disk_size_in_gb: cdktf.numberToTerraform(this._cacheDiskSizeInGb),
      gateway_id: cdktf.stringToTerraform(this._gatewayId),
      id: cdktf.stringToTerraform(this._id),
      performance_level: cdktf.stringToTerraform(this._performanceLevel),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cache_disk_category: {
        value: cdktf.stringToHclTerraform(this._cacheDiskCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_disk_size_in_gb: {
        value: cdktf.numberToHclTerraform(this._cacheDiskSizeInGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      performance_level: {
        value: cdktf.stringToHclTerraform(this._performanceLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
