// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/upgrade_cf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UpgradeCfConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/upgrade_cf#device UpgradeCf#device}
  */
  readonly device?: number;
  /**
  * File URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/upgrade_cf#file_url UpgradeCf#file_url}
  */
  readonly fileUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/upgrade_cf#id UpgradeCf#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'pri': Primary image;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/upgrade_cf#image UpgradeCf#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/upgrade_cf#image_file UpgradeCf#image_file}
  */
  readonly imageFile?: string;
  /**
  * Use image from local VCS image repository (Specify an image name, format: aximage_XX_XX_XX_XX.tar.gz)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/upgrade_cf#local UpgradeCf#local}
  */
  readonly local?: string;
  /**
  * reboot system after upgrade is done
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/upgrade_cf#reboot_after_upgrade UpgradeCf#reboot_after_upgrade}
  */
  readonly rebootAfterUpgrade?: number;
  /**
  * in staggered upgrade mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/upgrade_cf#staggered_upgrade_mode UpgradeCf#staggered_upgrade_mode}
  */
  readonly staggeredUpgradeMode?: number;
  /**
  * Use management port as source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/upgrade_cf#use_mgmt_port UpgradeCf#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/upgrade_cf thunder_upgrade_cf}
*/
export class UpgradeCf extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_upgrade_cf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UpgradeCf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UpgradeCf to import
  * @param importFromId The id of the existing UpgradeCf that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/upgrade_cf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UpgradeCf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_upgrade_cf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/upgrade_cf thunder_upgrade_cf} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UpgradeCfConfig = {}
  */
  public constructor(scope: Construct, id: string, config: UpgradeCfConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_upgrade_cf',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._fileUrl = config.fileUrl;
    this._id = config.id;
    this._image = config.image;
    this._imageFile = config.imageFile;
    this._local = config.local;
    this._rebootAfterUpgrade = config.rebootAfterUpgrade;
    this._staggeredUpgradeMode = config.staggeredUpgradeMode;
    this._useMgmtPort = config.useMgmtPort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: true, required: false
  private _device?: number; 
  public get device() {
    return this.getNumberAttribute('device');
  }
  public set device(value: number) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // file_url - computed: false, optional: true, required: false
  private _fileUrl?: string; 
  public get fileUrl() {
    return this.getStringAttribute('file_url');
  }
  public set fileUrl(value: string) {
    this._fileUrl = value;
  }
  public resetFileUrl() {
    this._fileUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileUrlInput() {
    return this._fileUrl;
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

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // image_file - computed: false, optional: true, required: false
  private _imageFile?: string; 
  public get imageFile() {
    return this.getStringAttribute('image_file');
  }
  public set imageFile(value: string) {
    this._imageFile = value;
  }
  public resetImageFile() {
    this._imageFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageFileInput() {
    return this._imageFile;
  }

  // local - computed: false, optional: true, required: false
  private _local?: string; 
  public get local() {
    return this.getStringAttribute('local');
  }
  public set local(value: string) {
    this._local = value;
  }
  public resetLocal() {
    this._local = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local;
  }

  // reboot_after_upgrade - computed: false, optional: true, required: false
  private _rebootAfterUpgrade?: number; 
  public get rebootAfterUpgrade() {
    return this.getNumberAttribute('reboot_after_upgrade');
  }
  public set rebootAfterUpgrade(value: number) {
    this._rebootAfterUpgrade = value;
  }
  public resetRebootAfterUpgrade() {
    this._rebootAfterUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootAfterUpgradeInput() {
    return this._rebootAfterUpgrade;
  }

  // staggered_upgrade_mode - computed: false, optional: true, required: false
  private _staggeredUpgradeMode?: number; 
  public get staggeredUpgradeMode() {
    return this.getNumberAttribute('staggered_upgrade_mode');
  }
  public set staggeredUpgradeMode(value: number) {
    this._staggeredUpgradeMode = value;
  }
  public resetStaggeredUpgradeMode() {
    this._staggeredUpgradeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staggeredUpgradeModeInput() {
    return this._staggeredUpgradeMode;
  }

  // use_mgmt_port - computed: false, optional: true, required: false
  private _useMgmtPort?: number; 
  public get useMgmtPort() {
    return this.getNumberAttribute('use_mgmt_port');
  }
  public set useMgmtPort(value: number) {
    this._useMgmtPort = value;
  }
  public resetUseMgmtPort() {
    this._useMgmtPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtPortInput() {
    return this._useMgmtPort;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.numberToTerraform(this._device),
      file_url: cdktf.stringToTerraform(this._fileUrl),
      id: cdktf.stringToTerraform(this._id),
      image: cdktf.stringToTerraform(this._image),
      image_file: cdktf.stringToTerraform(this._imageFile),
      local: cdktf.stringToTerraform(this._local),
      reboot_after_upgrade: cdktf.numberToTerraform(this._rebootAfterUpgrade),
      staggered_upgrade_mode: cdktf.numberToTerraform(this._staggeredUpgradeMode),
      use_mgmt_port: cdktf.numberToTerraform(this._useMgmtPort),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.numberToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      file_url: {
        value: cdktf.stringToHclTerraform(this._fileUrl),
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
      image: {
        value: cdktf.stringToHclTerraform(this._image),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_file: {
        value: cdktf.stringToHclTerraform(this._imageFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local: {
        value: cdktf.stringToHclTerraform(this._local),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reboot_after_upgrade: {
        value: cdktf.numberToHclTerraform(this._rebootAfterUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      staggered_upgrade_mode: {
        value: cdktf.numberToHclTerraform(this._staggeredUpgradeMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_mgmt_port: {
        value: cdktf.numberToHclTerraform(this._useMgmtPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
