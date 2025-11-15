// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_radio_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplianceRadioSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Sets a manual channel for 5 GHz. Can be `36`, `40`, `44`, `48`, `52`, `56`, `60`, `64`, `100`, `104`, `108`, `112`, `116`, `120`, `124`, `128`, `132`, `136`, `140`, `144`, `149`, `153`, `157`, `161`, `165`, `169`, `173` or `177` or null for using auto channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_radio_settings#five_ghz_settings_channel ApplianceRadioSettings#five_ghz_settings_channel}
  */
  readonly fiveGhzSettingsChannel?: number;
  /**
  * Sets a manual channel width for 5 GHz. Can be `0`, `20`, `40`, `80` or `160` or null for using auto channel width.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_radio_settings#five_ghz_settings_channel_width ApplianceRadioSettings#five_ghz_settings_channel_width}
  */
  readonly fiveGhzSettingsChannelWidth?: number;
  /**
  * Set a manual target power for 5 GHz (dBm). Enter null for using auto power range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_radio_settings#five_ghz_settings_target_power ApplianceRadioSettings#five_ghz_settings_target_power}
  */
  readonly fiveGhzSettingsTargetPower?: number;
  /**
  * The ID of an RF profile to assign to the device. If the value of this parameter is null, the appropriate basic RF profile (indoor or outdoor) will be assigned to the device. Assigning an RF profile will clear ALL manually configured overrides on the device (channel width, channel, power).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_radio_settings#rf_profile_id ApplianceRadioSettings#rf_profile_id}
  */
  readonly rfProfileId?: string;
  /**
  * Device serial
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_radio_settings#serial ApplianceRadioSettings#serial}
  */
  readonly serial: string;
  /**
  * Sets a manual channel for 2.4 GHz. Can be `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `13` or `14` or null for using auto channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_radio_settings#two_four_ghz_settings_channel ApplianceRadioSettings#two_four_ghz_settings_channel}
  */
  readonly twoFourGhzSettingsChannel?: number;
  /**
  * Set a manual target power for 2.4 GHz (dBm). Enter null for using auto power range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_radio_settings#two_four_ghz_settings_target_power ApplianceRadioSettings#two_four_ghz_settings_target_power}
  */
  readonly twoFourGhzSettingsTargetPower?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_radio_settings meraki_appliance_radio_settings}
*/
export class ApplianceRadioSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_radio_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplianceRadioSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplianceRadioSettings to import
  * @param importFromId The id of the existing ApplianceRadioSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_radio_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplianceRadioSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_radio_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_radio_settings meraki_appliance_radio_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplianceRadioSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: ApplianceRadioSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_radio_settings',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fiveGhzSettingsChannel = config.fiveGhzSettingsChannel;
    this._fiveGhzSettingsChannelWidth = config.fiveGhzSettingsChannelWidth;
    this._fiveGhzSettingsTargetPower = config.fiveGhzSettingsTargetPower;
    this._rfProfileId = config.rfProfileId;
    this._serial = config.serial;
    this._twoFourGhzSettingsChannel = config.twoFourGhzSettingsChannel;
    this._twoFourGhzSettingsTargetPower = config.twoFourGhzSettingsTargetPower;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // five_ghz_settings_channel - computed: false, optional: true, required: false
  private _fiveGhzSettingsChannel?: number; 
  public get fiveGhzSettingsChannel() {
    return this.getNumberAttribute('five_ghz_settings_channel');
  }
  public set fiveGhzSettingsChannel(value: number) {
    this._fiveGhzSettingsChannel = value;
  }
  public resetFiveGhzSettingsChannel() {
    this._fiveGhzSettingsChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fiveGhzSettingsChannelInput() {
    return this._fiveGhzSettingsChannel;
  }

  // five_ghz_settings_channel_width - computed: false, optional: true, required: false
  private _fiveGhzSettingsChannelWidth?: number; 
  public get fiveGhzSettingsChannelWidth() {
    return this.getNumberAttribute('five_ghz_settings_channel_width');
  }
  public set fiveGhzSettingsChannelWidth(value: number) {
    this._fiveGhzSettingsChannelWidth = value;
  }
  public resetFiveGhzSettingsChannelWidth() {
    this._fiveGhzSettingsChannelWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fiveGhzSettingsChannelWidthInput() {
    return this._fiveGhzSettingsChannelWidth;
  }

  // five_ghz_settings_target_power - computed: false, optional: true, required: false
  private _fiveGhzSettingsTargetPower?: number; 
  public get fiveGhzSettingsTargetPower() {
    return this.getNumberAttribute('five_ghz_settings_target_power');
  }
  public set fiveGhzSettingsTargetPower(value: number) {
    this._fiveGhzSettingsTargetPower = value;
  }
  public resetFiveGhzSettingsTargetPower() {
    this._fiveGhzSettingsTargetPower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fiveGhzSettingsTargetPowerInput() {
    return this._fiveGhzSettingsTargetPower;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // rf_profile_id - computed: false, optional: true, required: false
  private _rfProfileId?: string; 
  public get rfProfileId() {
    return this.getStringAttribute('rf_profile_id');
  }
  public set rfProfileId(value: string) {
    this._rfProfileId = value;
  }
  public resetRfProfileId() {
    this._rfProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfProfileIdInput() {
    return this._rfProfileId;
  }

  // serial - computed: false, optional: false, required: true
  private _serial?: string; 
  public get serial() {
    return this.getStringAttribute('serial');
  }
  public set serial(value: string) {
    this._serial = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }

  // two_four_ghz_settings_channel - computed: false, optional: true, required: false
  private _twoFourGhzSettingsChannel?: number; 
  public get twoFourGhzSettingsChannel() {
    return this.getNumberAttribute('two_four_ghz_settings_channel');
  }
  public set twoFourGhzSettingsChannel(value: number) {
    this._twoFourGhzSettingsChannel = value;
  }
  public resetTwoFourGhzSettingsChannel() {
    this._twoFourGhzSettingsChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFourGhzSettingsChannelInput() {
    return this._twoFourGhzSettingsChannel;
  }

  // two_four_ghz_settings_target_power - computed: false, optional: true, required: false
  private _twoFourGhzSettingsTargetPower?: number; 
  public get twoFourGhzSettingsTargetPower() {
    return this.getNumberAttribute('two_four_ghz_settings_target_power');
  }
  public set twoFourGhzSettingsTargetPower(value: number) {
    this._twoFourGhzSettingsTargetPower = value;
  }
  public resetTwoFourGhzSettingsTargetPower() {
    this._twoFourGhzSettingsTargetPower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFourGhzSettingsTargetPowerInput() {
    return this._twoFourGhzSettingsTargetPower;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      five_ghz_settings_channel: cdktf.numberToTerraform(this._fiveGhzSettingsChannel),
      five_ghz_settings_channel_width: cdktf.numberToTerraform(this._fiveGhzSettingsChannelWidth),
      five_ghz_settings_target_power: cdktf.numberToTerraform(this._fiveGhzSettingsTargetPower),
      rf_profile_id: cdktf.stringToTerraform(this._rfProfileId),
      serial: cdktf.stringToTerraform(this._serial),
      two_four_ghz_settings_channel: cdktf.numberToTerraform(this._twoFourGhzSettingsChannel),
      two_four_ghz_settings_target_power: cdktf.numberToTerraform(this._twoFourGhzSettingsTargetPower),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      five_ghz_settings_channel: {
        value: cdktf.numberToHclTerraform(this._fiveGhzSettingsChannel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      five_ghz_settings_channel_width: {
        value: cdktf.numberToHclTerraform(this._fiveGhzSettingsChannelWidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      five_ghz_settings_target_power: {
        value: cdktf.numberToHclTerraform(this._fiveGhzSettingsTargetPower),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rf_profile_id: {
        value: cdktf.stringToHclTerraform(this._rfProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serial: {
        value: cdktf.stringToHclTerraform(this._serial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      two_four_ghz_settings_channel: {
        value: cdktf.numberToHclTerraform(this._twoFourGhzSettingsChannel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      two_four_ghz_settings_target_power: {
        value: cdktf.numberToHclTerraform(this._twoFourGhzSettingsTargetPower),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
