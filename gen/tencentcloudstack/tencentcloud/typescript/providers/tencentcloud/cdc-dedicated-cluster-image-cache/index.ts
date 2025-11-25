// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cdc_dedicated_cluster_image_cache
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdcDedicatedClusterImageCacheConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cdc_dedicated_cluster_image_cache#dedicated_cluster_id CdcDedicatedClusterImageCache#dedicated_cluster_id}
  */
  readonly dedicatedClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cdc_dedicated_cluster_image_cache#id CdcDedicatedClusterImageCache#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Image ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cdc_dedicated_cluster_image_cache#image_id CdcDedicatedClusterImageCache#image_id}
  */
  readonly imageId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cdc_dedicated_cluster_image_cache tencentcloud_cdc_dedicated_cluster_image_cache}
*/
export class CdcDedicatedClusterImageCache extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cdc_dedicated_cluster_image_cache";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CdcDedicatedClusterImageCache resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdcDedicatedClusterImageCache to import
  * @param importFromId The id of the existing CdcDedicatedClusterImageCache that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cdc_dedicated_cluster_image_cache#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdcDedicatedClusterImageCache to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cdc_dedicated_cluster_image_cache", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cdc_dedicated_cluster_image_cache tencentcloud_cdc_dedicated_cluster_image_cache} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdcDedicatedClusterImageCacheConfig
  */
  public constructor(scope: Construct, id: string, config: CdcDedicatedClusterImageCacheConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cdc_dedicated_cluster_image_cache',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dedicatedClusterId = config.dedicatedClusterId;
    this._id = config.id;
    this._imageId = config.imageId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dedicated_cluster_id - computed: false, optional: false, required: true
  private _dedicatedClusterId?: string; 
  public get dedicatedClusterId() {
    return this.getStringAttribute('dedicated_cluster_id');
  }
  public set dedicatedClusterId(value: string) {
    this._dedicatedClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedClusterIdInput() {
    return this._dedicatedClusterId;
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

  // image_id - computed: false, optional: false, required: true
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dedicated_cluster_id: cdktf.stringToTerraform(this._dedicatedClusterId),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dedicated_cluster_id: {
        value: cdktf.stringToHclTerraform(this._dedicatedClusterId),
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
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
