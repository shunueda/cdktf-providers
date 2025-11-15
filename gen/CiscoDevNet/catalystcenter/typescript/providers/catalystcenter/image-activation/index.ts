// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/image_activation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImageActivationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow to activate a lower version of an image. Updating this attribute later does not cause image to be re-activated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/image_activation#activate_lower_image_version ImageActivation#activate_lower_image_version}
  */
  readonly activateLowerImageVersion?: boolean | cdktf.IResolvable;
  /**
  * Device upgrade mode. Updating this attribute later does not cause image to be re-activated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/image_activation#device_upgrade_mode ImageActivation#device_upgrade_mode}
  */
  readonly deviceUpgradeMode?: string;
  /**
  * The UUID of the network device on which to active the software image. Changing it forces the entire resource to be re-created, so that the activation occurs as newly specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/image_activation#device_uuid ImageActivation#device_uuid}
  */
  readonly deviceUuid?: string;
  /**
  * Whether to distribute the image as needed, thus negating the need for a separate `catalystcenter_image_distribution`. Updating this attribute later does not cause image to be re-activated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/image_activation#distribute_if_needed ImageActivation#distribute_if_needed}
  */
  readonly distributeIfNeeded?: boolean | cdktf.IResolvable;
  /**
  * The list of UUIDs of the software images to activate. The UUIDs could be obtained for example from `catalystcenter_image.id`. SMU images shouldn't be specified in this list. Changing/adding/removing any UUID causes the entire resource to be re-created, so that the entire activation occurs as newly specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/image_activation#image_uuid_list ImageActivation#image_uuid_list}
  */
  readonly imageUuidList?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/image_activation catalystcenter_image_activation}
*/
export class ImageActivation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_image_activation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ImageActivation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ImageActivation to import
  * @param importFromId The id of the existing ImageActivation that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/image_activation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ImageActivation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_image_activation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/image_activation catalystcenter_image_activation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImageActivationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ImageActivationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_image_activation',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.3',
        providerVersionConstraint: '0.4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activateLowerImageVersion = config.activateLowerImageVersion;
    this._deviceUpgradeMode = config.deviceUpgradeMode;
    this._deviceUuid = config.deviceUuid;
    this._distributeIfNeeded = config.distributeIfNeeded;
    this._imageUuidList = config.imageUuidList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activate_lower_image_version - computed: false, optional: true, required: false
  private _activateLowerImageVersion?: boolean | cdktf.IResolvable; 
  public get activateLowerImageVersion() {
    return this.getBooleanAttribute('activate_lower_image_version');
  }
  public set activateLowerImageVersion(value: boolean | cdktf.IResolvable) {
    this._activateLowerImageVersion = value;
  }
  public resetActivateLowerImageVersion() {
    this._activateLowerImageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activateLowerImageVersionInput() {
    return this._activateLowerImageVersion;
  }

  // device_upgrade_mode - computed: false, optional: true, required: false
  private _deviceUpgradeMode?: string; 
  public get deviceUpgradeMode() {
    return this.getStringAttribute('device_upgrade_mode');
  }
  public set deviceUpgradeMode(value: string) {
    this._deviceUpgradeMode = value;
  }
  public resetDeviceUpgradeMode() {
    this._deviceUpgradeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceUpgradeModeInput() {
    return this._deviceUpgradeMode;
  }

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

  // distribute_if_needed - computed: false, optional: true, required: false
  private _distributeIfNeeded?: boolean | cdktf.IResolvable; 
  public get distributeIfNeeded() {
    return this.getBooleanAttribute('distribute_if_needed');
  }
  public set distributeIfNeeded(value: boolean | cdktf.IResolvable) {
    this._distributeIfNeeded = value;
  }
  public resetDistributeIfNeeded() {
    this._distributeIfNeeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeIfNeededInput() {
    return this._distributeIfNeeded;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_uuid_list - computed: false, optional: true, required: false
  private _imageUuidList?: string[]; 
  public get imageUuidList() {
    return cdktf.Fn.tolist(this.getListAttribute('image_uuid_list'));
  }
  public set imageUuidList(value: string[]) {
    this._imageUuidList = value;
  }
  public resetImageUuidList() {
    this._imageUuidList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUuidListInput() {
    return this._imageUuidList;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      activate_lower_image_version: cdktf.booleanToTerraform(this._activateLowerImageVersion),
      device_upgrade_mode: cdktf.stringToTerraform(this._deviceUpgradeMode),
      device_uuid: cdktf.stringToTerraform(this._deviceUuid),
      distribute_if_needed: cdktf.booleanToTerraform(this._distributeIfNeeded),
      image_uuid_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._imageUuidList),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activate_lower_image_version: {
        value: cdktf.booleanToHclTerraform(this._activateLowerImageVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      device_upgrade_mode: {
        value: cdktf.stringToHclTerraform(this._deviceUpgradeMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_uuid: {
        value: cdktf.stringToHclTerraform(this._deviceUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distribute_if_needed: {
        value: cdktf.booleanToHclTerraform(this._distributeIfNeeded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      image_uuid_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._imageUuidList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
