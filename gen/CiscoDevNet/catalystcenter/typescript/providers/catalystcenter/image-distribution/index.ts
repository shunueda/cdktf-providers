// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/image_distribution
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImageDistributionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UUID of the network device to which to copy the software image file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/image_distribution#device_uuid ImageDistribution#device_uuid}
  */
  readonly deviceUuid?: string;
  /**
  * The UUID of the software image to copy. It could be obtained for example from `catalystcenter_image.id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/image_distribution#image_uuid ImageDistribution#image_uuid}
  */
  readonly imageUuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/image_distribution catalystcenter_image_distribution}
*/
export class ImageDistribution extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_image_distribution";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ImageDistribution resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ImageDistribution to import
  * @param importFromId The id of the existing ImageDistribution that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/image_distribution#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ImageDistribution to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_image_distribution", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/image_distribution catalystcenter_image_distribution} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImageDistributionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ImageDistributionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_image_distribution',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.5',
        providerVersionConstraint: '0.4.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceUuid = config.deviceUuid;
    this._imageUuid = config.imageUuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_uuid - computed: false, optional: true, required: false
  private _deviceUuid?: string; 
  public get deviceUuid() {
    return this.getStringAttribute('device_uuid');
  }
  public set deviceUuid(value: string) {
    this._deviceUuid = value;
  }
  public resetDeviceUuid() {
    this._deviceUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceUuidInput() {
    return this._deviceUuid;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_uuid - computed: false, optional: true, required: false
  private _imageUuid?: string; 
  public get imageUuid() {
    return this.getStringAttribute('image_uuid');
  }
  public set imageUuid(value: string) {
    this._imageUuid = value;
  }
  public resetImageUuid() {
    this._imageUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUuidInput() {
    return this._imageUuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_uuid: cdktf.stringToTerraform(this._deviceUuid),
      image_uuid: cdktf.stringToTerraform(this._imageUuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_uuid: {
        value: cdktf.stringToHclTerraform(this._deviceUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_uuid: {
        value: cdktf.stringToHclTerraform(this._imageUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
