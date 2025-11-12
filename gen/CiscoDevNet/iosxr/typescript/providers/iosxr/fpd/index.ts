// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/fpd
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FpdConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disable fpd auto reload`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/fpd#auto_reload_disable Fpd#auto_reload_disable}
  */
  readonly autoReloadDisable?: boolean | cdktf.IResolvable;
  /**
  * Enable fpd auto reload`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/fpd#auto_reload_enable Fpd#auto_reload_enable}
  */
  readonly autoReloadEnable?: boolean | cdktf.IResolvable;
  /**
  * Disable fpd auto upgrade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/fpd#auto_upgrade_disable Fpd#auto_upgrade_disable}
  */
  readonly autoUpgradeDisable?: boolean | cdktf.IResolvable;
  /**
  * Enable fpd auto upgrade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/fpd#auto_upgrade_enable Fpd#auto_upgrade_enable}
  */
  readonly autoUpgradeEnable?: boolean | cdktf.IResolvable;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/fpd#delete_mode Fpd#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/fpd#device Fpd#device}
  */
  readonly device?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/fpd iosxr_fpd}
*/
export class Fpd extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_fpd";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Fpd resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Fpd to import
  * @param importFromId The id of the existing Fpd that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/fpd#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Fpd to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_fpd", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/fpd iosxr_fpd} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FpdConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FpdConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxr_fpd',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0',
        providerVersionConstraint: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoReloadDisable = config.autoReloadDisable;
    this._autoReloadEnable = config.autoReloadEnable;
    this._autoUpgradeDisable = config.autoUpgradeDisable;
    this._autoUpgradeEnable = config.autoUpgradeEnable;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_reload_disable - computed: false, optional: true, required: false
  private _autoReloadDisable?: boolean | cdktf.IResolvable; 
  public get autoReloadDisable() {
    return this.getBooleanAttribute('auto_reload_disable');
  }
  public set autoReloadDisable(value: boolean | cdktf.IResolvable) {
    this._autoReloadDisable = value;
  }
  public resetAutoReloadDisable() {
    this._autoReloadDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoReloadDisableInput() {
    return this._autoReloadDisable;
  }

  // auto_reload_enable - computed: false, optional: true, required: false
  private _autoReloadEnable?: boolean | cdktf.IResolvable; 
  public get autoReloadEnable() {
    return this.getBooleanAttribute('auto_reload_enable');
  }
  public set autoReloadEnable(value: boolean | cdktf.IResolvable) {
    this._autoReloadEnable = value;
  }
  public resetAutoReloadEnable() {
    this._autoReloadEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoReloadEnableInput() {
    return this._autoReloadEnable;
  }

  // auto_upgrade_disable - computed: false, optional: true, required: false
  private _autoUpgradeDisable?: boolean | cdktf.IResolvable; 
  public get autoUpgradeDisable() {
    return this.getBooleanAttribute('auto_upgrade_disable');
  }
  public set autoUpgradeDisable(value: boolean | cdktf.IResolvable) {
    this._autoUpgradeDisable = value;
  }
  public resetAutoUpgradeDisable() {
    this._autoUpgradeDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpgradeDisableInput() {
    return this._autoUpgradeDisable;
  }

  // auto_upgrade_enable - computed: false, optional: true, required: false
  private _autoUpgradeEnable?: boolean | cdktf.IResolvable; 
  public get autoUpgradeEnable() {
    return this.getBooleanAttribute('auto_upgrade_enable');
  }
  public set autoUpgradeEnable(value: boolean | cdktf.IResolvable) {
    this._autoUpgradeEnable = value;
  }
  public resetAutoUpgradeEnable() {
    this._autoUpgradeEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpgradeEnableInput() {
    return this._autoUpgradeEnable;
  }

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_reload_disable: cdktf.booleanToTerraform(this._autoReloadDisable),
      auto_reload_enable: cdktf.booleanToTerraform(this._autoReloadEnable),
      auto_upgrade_disable: cdktf.booleanToTerraform(this._autoUpgradeDisable),
      auto_upgrade_enable: cdktf.booleanToTerraform(this._autoUpgradeEnable),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_reload_disable: {
        value: cdktf.booleanToHclTerraform(this._autoReloadDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_reload_enable: {
        value: cdktf.booleanToHclTerraform(this._autoReloadEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_upgrade_disable: {
        value: cdktf.booleanToHclTerraform(this._autoUpgradeDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_upgrade_enable: {
        value: cdktf.booleanToHclTerraform(this._autoUpgradeEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
