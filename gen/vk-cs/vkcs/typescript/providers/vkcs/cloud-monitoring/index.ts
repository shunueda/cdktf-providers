// https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/cloud_monitoring
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudMonitoringConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the image to create cloud monitoring for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/cloud_monitoring#image_id CloudMonitoring#image_id}
  */
  readonly imageId: string;
  /**
  * The region in which to obtain the service client. If omitted, the `region` argument of the provider is used. Changing this creates a new cloud_monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/cloud_monitoring#region CloudMonitoring#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/cloud_monitoring vkcs_cloud_monitoring}
*/
export class CloudMonitoring extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vkcs_cloud_monitoring";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudMonitoring resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudMonitoring to import
  * @param importFromId The id of the existing CloudMonitoring that should be imported. Refer to the {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/cloud_monitoring#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudMonitoring to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vkcs_cloud_monitoring", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/cloud_monitoring vkcs_cloud_monitoring} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudMonitoringConfig
  */
  public constructor(scope: Construct, id: string, config: CloudMonitoringConfig) {
    super(scope, id, {
      terraformResourceType: 'vkcs_cloud_monitoring',
      terraformGeneratorMetadata: {
        providerName: 'vkcs',
        providerVersion: '0.13.2',
        providerVersionConstraint: '0.13.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._imageId = config.imageId;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // script - computed: true, optional: false, required: false
  public get script() {
    return this.getStringAttribute('script');
  }

  // service_user_id - computed: true, optional: false, required: false
  public get serviceUserId() {
    return this.getStringAttribute('service_user_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      image_id: cdktf.stringToTerraform(this._imageId),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
