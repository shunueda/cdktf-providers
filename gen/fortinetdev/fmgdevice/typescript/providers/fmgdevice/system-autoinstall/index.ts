// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_autoinstall
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemAutoinstallConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_autoinstall#auto_install_config SystemAutoinstall#auto_install_config}
  */
  readonly autoInstallConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_autoinstall#auto_install_image SystemAutoinstall#auto_install_image}
  */
  readonly autoInstallImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_autoinstall#default_config_file SystemAutoinstall#default_config_file}
  */
  readonly defaultConfigFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_autoinstall#default_image_file SystemAutoinstall#default_image_file}
  */
  readonly defaultImageFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_autoinstall#device_name SystemAutoinstall#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_autoinstall#id SystemAutoinstall#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_autoinstall fmgdevice_system_autoinstall}
*/
export class SystemAutoinstall extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_autoinstall";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemAutoinstall resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemAutoinstall to import
  * @param importFromId The id of the existing SystemAutoinstall that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_autoinstall#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemAutoinstall to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_autoinstall", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_autoinstall fmgdevice_system_autoinstall} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemAutoinstallConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemAutoinstallConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_autoinstall',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoInstallConfig = config.autoInstallConfig;
    this._autoInstallImage = config.autoInstallImage;
    this._defaultConfigFile = config.defaultConfigFile;
    this._defaultImageFile = config.defaultImageFile;
    this._deviceName = config.deviceName;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_install_config - computed: false, optional: true, required: false
  private _autoInstallConfig?: string; 
  public get autoInstallConfig() {
    return this.getStringAttribute('auto_install_config');
  }
  public set autoInstallConfig(value: string) {
    this._autoInstallConfig = value;
  }
  public resetAutoInstallConfig() {
    this._autoInstallConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoInstallConfigInput() {
    return this._autoInstallConfig;
  }

  // auto_install_image - computed: true, optional: true, required: false
  private _autoInstallImage?: string; 
  public get autoInstallImage() {
    return this.getStringAttribute('auto_install_image');
  }
  public set autoInstallImage(value: string) {
    this._autoInstallImage = value;
  }
  public resetAutoInstallImage() {
    this._autoInstallImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoInstallImageInput() {
    return this._autoInstallImage;
  }

  // default_config_file - computed: true, optional: true, required: false
  private _defaultConfigFile?: string; 
  public get defaultConfigFile() {
    return this.getStringAttribute('default_config_file');
  }
  public set defaultConfigFile(value: string) {
    this._defaultConfigFile = value;
  }
  public resetDefaultConfigFile() {
    this._defaultConfigFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultConfigFileInput() {
    return this._defaultConfigFile;
  }

  // default_image_file - computed: true, optional: true, required: false
  private _defaultImageFile?: string; 
  public get defaultImageFile() {
    return this.getStringAttribute('default_image_file');
  }
  public set defaultImageFile(value: string) {
    this._defaultImageFile = value;
  }
  public resetDefaultImageFile() {
    this._defaultImageFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultImageFileInput() {
    return this._defaultImageFile;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_install_config: cdktf.stringToTerraform(this._autoInstallConfig),
      auto_install_image: cdktf.stringToTerraform(this._autoInstallImage),
      default_config_file: cdktf.stringToTerraform(this._defaultConfigFile),
      default_image_file: cdktf.stringToTerraform(this._defaultImageFile),
      device_name: cdktf.stringToTerraform(this._deviceName),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_install_config: {
        value: cdktf.stringToHclTerraform(this._autoInstallConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_install_image: {
        value: cdktf.stringToHclTerraform(this._autoInstallImage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_config_file: {
        value: cdktf.stringToHclTerraform(this._defaultConfigFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_image_file: {
        value: cdktf.stringToHclTerraform(this._defaultImageFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
