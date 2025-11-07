// https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_recovery_password_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MdmRecoveryPasswordConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * If `true`, a unique password is generated for each device. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_recovery_password_config#dynamic_password MdmRecoveryPasswordConfig#dynamic_password}
  */
  readonly dynamicPassword?: boolean | cdktf.IResolvable;
  /**
  * Name of the recovery password configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_recovery_password_config#name MdmRecoveryPasswordConfig#name}
  */
  readonly name: string;
  /**
  * Set to `true` to rotate the firmware passwords. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_recovery_password_config#rotate_firmware_password MdmRecoveryPasswordConfig#rotate_firmware_password}
  */
  readonly rotateFirmwarePassword?: boolean | cdktf.IResolvable;
  /**
  * The automatic recovery password rotation interval in days. It has a maximum value of `365`. Defaults to `0` (no automatic rotation).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_recovery_password_config#rotation_interval_days MdmRecoveryPasswordConfig#rotation_interval_days}
  */
  readonly rotationIntervalDays?: number;
  /**
  * The  static password to set for all devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_recovery_password_config#static_password MdmRecoveryPasswordConfig#static_password}
  */
  readonly staticPassword?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_recovery_password_config zentral_mdm_recovery_password_config}
*/
export class MdmRecoveryPasswordConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zentral_mdm_recovery_password_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MdmRecoveryPasswordConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MdmRecoveryPasswordConfig to import
  * @param importFromId The id of the existing MdmRecoveryPasswordConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_recovery_password_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MdmRecoveryPasswordConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zentral_mdm_recovery_password_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_recovery_password_config zentral_mdm_recovery_password_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MdmRecoveryPasswordConfigConfig
  */
  public constructor(scope: Construct, id: string, config: MdmRecoveryPasswordConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'zentral_mdm_recovery_password_config',
      terraformGeneratorMetadata: {
        providerName: 'zentral',
        providerVersion: '0.1.64'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dynamicPassword = config.dynamicPassword;
    this._name = config.name;
    this._rotateFirmwarePassword = config.rotateFirmwarePassword;
    this._rotationIntervalDays = config.rotationIntervalDays;
    this._staticPassword = config.staticPassword;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dynamic_password - computed: true, optional: true, required: false
  private _dynamicPassword?: boolean | cdktf.IResolvable; 
  public get dynamicPassword() {
    return this.getBooleanAttribute('dynamic_password');
  }
  public set dynamicPassword(value: boolean | cdktf.IResolvable) {
    this._dynamicPassword = value;
  }
  public resetDynamicPassword() {
    this._dynamicPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicPasswordInput() {
    return this._dynamicPassword;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // rotate_firmware_password - computed: true, optional: true, required: false
  private _rotateFirmwarePassword?: boolean | cdktf.IResolvable; 
  public get rotateFirmwarePassword() {
    return this.getBooleanAttribute('rotate_firmware_password');
  }
  public set rotateFirmwarePassword(value: boolean | cdktf.IResolvable) {
    this._rotateFirmwarePassword = value;
  }
  public resetRotateFirmwarePassword() {
    this._rotateFirmwarePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotateFirmwarePasswordInput() {
    return this._rotateFirmwarePassword;
  }

  // rotation_interval_days - computed: true, optional: true, required: false
  private _rotationIntervalDays?: number; 
  public get rotationIntervalDays() {
    return this.getNumberAttribute('rotation_interval_days');
  }
  public set rotationIntervalDays(value: number) {
    this._rotationIntervalDays = value;
  }
  public resetRotationIntervalDays() {
    this._rotationIntervalDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationIntervalDaysInput() {
    return this._rotationIntervalDays;
  }

  // static_password - computed: false, optional: true, required: false
  private _staticPassword?: string; 
  public get staticPassword() {
    return this.getStringAttribute('static_password');
  }
  public set staticPassword(value: string) {
    this._staticPassword = value;
  }
  public resetStaticPassword() {
    this._staticPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticPasswordInput() {
    return this._staticPassword;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dynamic_password: cdktf.booleanToTerraform(this._dynamicPassword),
      name: cdktf.stringToTerraform(this._name),
      rotate_firmware_password: cdktf.booleanToTerraform(this._rotateFirmwarePassword),
      rotation_interval_days: cdktf.numberToTerraform(this._rotationIntervalDays),
      static_password: cdktf.stringToTerraform(this._staticPassword),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dynamic_password: {
        value: cdktf.booleanToHclTerraform(this._dynamicPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotate_firmware_password: {
        value: cdktf.booleanToHclTerraform(this._rotateFirmwarePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rotation_interval_days: {
        value: cdktf.numberToHclTerraform(this._rotationIntervalDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      static_password: {
        value: cdktf.stringToHclTerraform(this._staticPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
