// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_rf_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplianceRfProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Determines whether ax radio on 5Ghz band is on or off. Can be either true or false. If false, we highly recommend disabling band steering. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_rf_profile#five_ghz_settings_ax_enabled ApplianceRfProfile#five_ghz_settings_ax_enabled}
  */
  readonly fiveGhzSettingsAxEnabled?: boolean | cdktf.IResolvable;
  /**
  * Sets min bitrate (Mbps) of 5Ghz band. Can be one of `6`, `9`, `12`, `18`, `24`, `36`, `48` or `54`. Defaults to 12.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_rf_profile#five_ghz_settings_min_bitrate ApplianceRfProfile#five_ghz_settings_min_bitrate}
  */
  readonly fiveGhzSettingsMinBitrate?: number;
  /**
  * The name of the new profile. Must be unique. This param is required on creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_rf_profile#name ApplianceRfProfile#name}
  */
  readonly name: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_rf_profile#network_id ApplianceRfProfile#network_id}
  */
  readonly networkId: string;
  /**
  * Choice between `dual`, `2.4ghz`, `5ghz`, `6ghz` or `multi`.
  *   - Choices: `2.4ghz`, `5ghz`, `6ghz`, `dual`, `multi`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_rf_profile#per_ssid_settings_1_band_operation_mode ApplianceRfProfile#per_ssid_settings_1_band_operation_mode}
  */
  readonly perSsidSettings1BandOperationMode?: string;
  /**
  * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_rf_profile#per_ssid_settings_1_band_steering_enabled ApplianceRfProfile#per_ssid_settings_1_band_steering_enabled}
  */
  readonly perSsidSettings1BandSteeringEnabled?: boolean | cdktf.IResolvable;
  /**
  * Choice between `dual`, `2.4ghz`, `5ghz`, `6ghz` or `multi`.
  *   - Choices: `2.4ghz`, `5ghz`, `6ghz`, `dual`, `multi`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_rf_profile#per_ssid_settings_2_band_operation_mode ApplianceRfProfile#per_ssid_settings_2_band_operation_mode}
  */
  readonly perSsidSettings2BandOperationMode?: string;
  /**
  * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_rf_profile#per_ssid_settings_2_band_steering_enabled ApplianceRfProfile#per_ssid_settings_2_band_steering_enabled}
  */
  readonly perSsidSettings2BandSteeringEnabled?: boolean | cdktf.IResolvable;
  /**
  * Choice between `dual`, `2.4ghz`, `5ghz`, `6ghz` or `multi`.
  *   - Choices: `2.4ghz`, `5ghz`, `6ghz`, `dual`, `multi`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_rf_profile#per_ssid_settings_3_band_operation_mode ApplianceRfProfile#per_ssid_settings_3_band_operation_mode}
  */
  readonly perSsidSettings3BandOperationMode?: string;
  /**
  * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_rf_profile#per_ssid_settings_3_band_steering_enabled ApplianceRfProfile#per_ssid_settings_3_band_steering_enabled}
  */
  readonly perSsidSettings3BandSteeringEnabled?: boolean | cdktf.IResolvable;
  /**
  * Choice between `dual`, `2.4ghz`, `5ghz`, `6ghz` or `multi`.
  *   - Choices: `2.4ghz`, `5ghz`, `6ghz`, `dual`, `multi`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_rf_profile#per_ssid_settings_4_band_operation_mode ApplianceRfProfile#per_ssid_settings_4_band_operation_mode}
  */
  readonly perSsidSettings4BandOperationMode?: string;
  /**
  * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_rf_profile#per_ssid_settings_4_band_steering_enabled ApplianceRfProfile#per_ssid_settings_4_band_steering_enabled}
  */
  readonly perSsidSettings4BandSteeringEnabled?: boolean | cdktf.IResolvable;
  /**
  * Determines whether ax radio on 2.4Ghz band is on or off. Can be either true or false. If false, we highly recommend disabling band steering. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_rf_profile#two_four_ghz_settings_ax_enabled ApplianceRfProfile#two_four_ghz_settings_ax_enabled}
  */
  readonly twoFourGhzSettingsAxEnabled?: boolean | cdktf.IResolvable;
  /**
  * Sets min bitrate (Mbps) of 2.4Ghz band. Can be one of `1`, `2`, `5.5`, `6`, `9`, `11`, `12`, `18`, `24`, `36`, `48` or `54`. Defaults to 11.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_rf_profile#two_four_ghz_settings_min_bitrate ApplianceRfProfile#two_four_ghz_settings_min_bitrate}
  */
  readonly twoFourGhzSettingsMinBitrate?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_rf_profile meraki_appliance_rf_profile}
*/
export class ApplianceRfProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_rf_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplianceRfProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplianceRfProfile to import
  * @param importFromId The id of the existing ApplianceRfProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_rf_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplianceRfProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_rf_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_rf_profile meraki_appliance_rf_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplianceRfProfileConfig
  */
  public constructor(scope: Construct, id: string, config: ApplianceRfProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_rf_profile',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1',
        providerVersionConstraint: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fiveGhzSettingsAxEnabled = config.fiveGhzSettingsAxEnabled;
    this._fiveGhzSettingsMinBitrate = config.fiveGhzSettingsMinBitrate;
    this._name = config.name;
    this._networkId = config.networkId;
    this._perSsidSettings1BandOperationMode = config.perSsidSettings1BandOperationMode;
    this._perSsidSettings1BandSteeringEnabled = config.perSsidSettings1BandSteeringEnabled;
    this._perSsidSettings2BandOperationMode = config.perSsidSettings2BandOperationMode;
    this._perSsidSettings2BandSteeringEnabled = config.perSsidSettings2BandSteeringEnabled;
    this._perSsidSettings3BandOperationMode = config.perSsidSettings3BandOperationMode;
    this._perSsidSettings3BandSteeringEnabled = config.perSsidSettings3BandSteeringEnabled;
    this._perSsidSettings4BandOperationMode = config.perSsidSettings4BandOperationMode;
    this._perSsidSettings4BandSteeringEnabled = config.perSsidSettings4BandSteeringEnabled;
    this._twoFourGhzSettingsAxEnabled = config.twoFourGhzSettingsAxEnabled;
    this._twoFourGhzSettingsMinBitrate = config.twoFourGhzSettingsMinBitrate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // five_ghz_settings_ax_enabled - computed: false, optional: true, required: false
  private _fiveGhzSettingsAxEnabled?: boolean | cdktf.IResolvable; 
  public get fiveGhzSettingsAxEnabled() {
    return this.getBooleanAttribute('five_ghz_settings_ax_enabled');
  }
  public set fiveGhzSettingsAxEnabled(value: boolean | cdktf.IResolvable) {
    this._fiveGhzSettingsAxEnabled = value;
  }
  public resetFiveGhzSettingsAxEnabled() {
    this._fiveGhzSettingsAxEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fiveGhzSettingsAxEnabledInput() {
    return this._fiveGhzSettingsAxEnabled;
  }

  // five_ghz_settings_min_bitrate - computed: false, optional: true, required: false
  private _fiveGhzSettingsMinBitrate?: number; 
  public get fiveGhzSettingsMinBitrate() {
    return this.getNumberAttribute('five_ghz_settings_min_bitrate');
  }
  public set fiveGhzSettingsMinBitrate(value: number) {
    this._fiveGhzSettingsMinBitrate = value;
  }
  public resetFiveGhzSettingsMinBitrate() {
    this._fiveGhzSettingsMinBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fiveGhzSettingsMinBitrateInput() {
    return this._fiveGhzSettingsMinBitrate;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // per_ssid_settings_1_band_operation_mode - computed: false, optional: true, required: false
  private _perSsidSettings1BandOperationMode?: string; 
  public get perSsidSettings1BandOperationMode() {
    return this.getStringAttribute('per_ssid_settings_1_band_operation_mode');
  }
  public set perSsidSettings1BandOperationMode(value: string) {
    this._perSsidSettings1BandOperationMode = value;
  }
  public resetPerSsidSettings1BandOperationMode() {
    this._perSsidSettings1BandOperationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings1BandOperationModeInput() {
    return this._perSsidSettings1BandOperationMode;
  }

  // per_ssid_settings_1_band_steering_enabled - computed: false, optional: true, required: false
  private _perSsidSettings1BandSteeringEnabled?: boolean | cdktf.IResolvable; 
  public get perSsidSettings1BandSteeringEnabled() {
    return this.getBooleanAttribute('per_ssid_settings_1_band_steering_enabled');
  }
  public set perSsidSettings1BandSteeringEnabled(value: boolean | cdktf.IResolvable) {
    this._perSsidSettings1BandSteeringEnabled = value;
  }
  public resetPerSsidSettings1BandSteeringEnabled() {
    this._perSsidSettings1BandSteeringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings1BandSteeringEnabledInput() {
    return this._perSsidSettings1BandSteeringEnabled;
  }

  // per_ssid_settings_2_band_operation_mode - computed: false, optional: true, required: false
  private _perSsidSettings2BandOperationMode?: string; 
  public get perSsidSettings2BandOperationMode() {
    return this.getStringAttribute('per_ssid_settings_2_band_operation_mode');
  }
  public set perSsidSettings2BandOperationMode(value: string) {
    this._perSsidSettings2BandOperationMode = value;
  }
  public resetPerSsidSettings2BandOperationMode() {
    this._perSsidSettings2BandOperationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings2BandOperationModeInput() {
    return this._perSsidSettings2BandOperationMode;
  }

  // per_ssid_settings_2_band_steering_enabled - computed: false, optional: true, required: false
  private _perSsidSettings2BandSteeringEnabled?: boolean | cdktf.IResolvable; 
  public get perSsidSettings2BandSteeringEnabled() {
    return this.getBooleanAttribute('per_ssid_settings_2_band_steering_enabled');
  }
  public set perSsidSettings2BandSteeringEnabled(value: boolean | cdktf.IResolvable) {
    this._perSsidSettings2BandSteeringEnabled = value;
  }
  public resetPerSsidSettings2BandSteeringEnabled() {
    this._perSsidSettings2BandSteeringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings2BandSteeringEnabledInput() {
    return this._perSsidSettings2BandSteeringEnabled;
  }

  // per_ssid_settings_3_band_operation_mode - computed: false, optional: true, required: false
  private _perSsidSettings3BandOperationMode?: string; 
  public get perSsidSettings3BandOperationMode() {
    return this.getStringAttribute('per_ssid_settings_3_band_operation_mode');
  }
  public set perSsidSettings3BandOperationMode(value: string) {
    this._perSsidSettings3BandOperationMode = value;
  }
  public resetPerSsidSettings3BandOperationMode() {
    this._perSsidSettings3BandOperationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings3BandOperationModeInput() {
    return this._perSsidSettings3BandOperationMode;
  }

  // per_ssid_settings_3_band_steering_enabled - computed: false, optional: true, required: false
  private _perSsidSettings3BandSteeringEnabled?: boolean | cdktf.IResolvable; 
  public get perSsidSettings3BandSteeringEnabled() {
    return this.getBooleanAttribute('per_ssid_settings_3_band_steering_enabled');
  }
  public set perSsidSettings3BandSteeringEnabled(value: boolean | cdktf.IResolvable) {
    this._perSsidSettings3BandSteeringEnabled = value;
  }
  public resetPerSsidSettings3BandSteeringEnabled() {
    this._perSsidSettings3BandSteeringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings3BandSteeringEnabledInput() {
    return this._perSsidSettings3BandSteeringEnabled;
  }

  // per_ssid_settings_4_band_operation_mode - computed: false, optional: true, required: false
  private _perSsidSettings4BandOperationMode?: string; 
  public get perSsidSettings4BandOperationMode() {
    return this.getStringAttribute('per_ssid_settings_4_band_operation_mode');
  }
  public set perSsidSettings4BandOperationMode(value: string) {
    this._perSsidSettings4BandOperationMode = value;
  }
  public resetPerSsidSettings4BandOperationMode() {
    this._perSsidSettings4BandOperationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings4BandOperationModeInput() {
    return this._perSsidSettings4BandOperationMode;
  }

  // per_ssid_settings_4_band_steering_enabled - computed: false, optional: true, required: false
  private _perSsidSettings4BandSteeringEnabled?: boolean | cdktf.IResolvable; 
  public get perSsidSettings4BandSteeringEnabled() {
    return this.getBooleanAttribute('per_ssid_settings_4_band_steering_enabled');
  }
  public set perSsidSettings4BandSteeringEnabled(value: boolean | cdktf.IResolvable) {
    this._perSsidSettings4BandSteeringEnabled = value;
  }
  public resetPerSsidSettings4BandSteeringEnabled() {
    this._perSsidSettings4BandSteeringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings4BandSteeringEnabledInput() {
    return this._perSsidSettings4BandSteeringEnabled;
  }

  // two_four_ghz_settings_ax_enabled - computed: false, optional: true, required: false
  private _twoFourGhzSettingsAxEnabled?: boolean | cdktf.IResolvable; 
  public get twoFourGhzSettingsAxEnabled() {
    return this.getBooleanAttribute('two_four_ghz_settings_ax_enabled');
  }
  public set twoFourGhzSettingsAxEnabled(value: boolean | cdktf.IResolvable) {
    this._twoFourGhzSettingsAxEnabled = value;
  }
  public resetTwoFourGhzSettingsAxEnabled() {
    this._twoFourGhzSettingsAxEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFourGhzSettingsAxEnabledInput() {
    return this._twoFourGhzSettingsAxEnabled;
  }

  // two_four_ghz_settings_min_bitrate - computed: false, optional: true, required: false
  private _twoFourGhzSettingsMinBitrate?: number; 
  public get twoFourGhzSettingsMinBitrate() {
    return this.getNumberAttribute('two_four_ghz_settings_min_bitrate');
  }
  public set twoFourGhzSettingsMinBitrate(value: number) {
    this._twoFourGhzSettingsMinBitrate = value;
  }
  public resetTwoFourGhzSettingsMinBitrate() {
    this._twoFourGhzSettingsMinBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFourGhzSettingsMinBitrateInput() {
    return this._twoFourGhzSettingsMinBitrate;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      five_ghz_settings_ax_enabled: cdktf.booleanToTerraform(this._fiveGhzSettingsAxEnabled),
      five_ghz_settings_min_bitrate: cdktf.numberToTerraform(this._fiveGhzSettingsMinBitrate),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      per_ssid_settings_1_band_operation_mode: cdktf.stringToTerraform(this._perSsidSettings1BandOperationMode),
      per_ssid_settings_1_band_steering_enabled: cdktf.booleanToTerraform(this._perSsidSettings1BandSteeringEnabled),
      per_ssid_settings_2_band_operation_mode: cdktf.stringToTerraform(this._perSsidSettings2BandOperationMode),
      per_ssid_settings_2_band_steering_enabled: cdktf.booleanToTerraform(this._perSsidSettings2BandSteeringEnabled),
      per_ssid_settings_3_band_operation_mode: cdktf.stringToTerraform(this._perSsidSettings3BandOperationMode),
      per_ssid_settings_3_band_steering_enabled: cdktf.booleanToTerraform(this._perSsidSettings3BandSteeringEnabled),
      per_ssid_settings_4_band_operation_mode: cdktf.stringToTerraform(this._perSsidSettings4BandOperationMode),
      per_ssid_settings_4_band_steering_enabled: cdktf.booleanToTerraform(this._perSsidSettings4BandSteeringEnabled),
      two_four_ghz_settings_ax_enabled: cdktf.booleanToTerraform(this._twoFourGhzSettingsAxEnabled),
      two_four_ghz_settings_min_bitrate: cdktf.numberToTerraform(this._twoFourGhzSettingsMinBitrate),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      five_ghz_settings_ax_enabled: {
        value: cdktf.booleanToHclTerraform(this._fiveGhzSettingsAxEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      five_ghz_settings_min_bitrate: {
        value: cdktf.numberToHclTerraform(this._fiveGhzSettingsMinBitrate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      per_ssid_settings_1_band_operation_mode: {
        value: cdktf.stringToHclTerraform(this._perSsidSettings1BandOperationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      per_ssid_settings_1_band_steering_enabled: {
        value: cdktf.booleanToHclTerraform(this._perSsidSettings1BandSteeringEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      per_ssid_settings_2_band_operation_mode: {
        value: cdktf.stringToHclTerraform(this._perSsidSettings2BandOperationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      per_ssid_settings_2_band_steering_enabled: {
        value: cdktf.booleanToHclTerraform(this._perSsidSettings2BandSteeringEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      per_ssid_settings_3_band_operation_mode: {
        value: cdktf.stringToHclTerraform(this._perSsidSettings3BandOperationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      per_ssid_settings_3_band_steering_enabled: {
        value: cdktf.booleanToHclTerraform(this._perSsidSettings3BandSteeringEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      per_ssid_settings_4_band_operation_mode: {
        value: cdktf.stringToHclTerraform(this._perSsidSettings4BandOperationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      per_ssid_settings_4_band_steering_enabled: {
        value: cdktf.booleanToHclTerraform(this._perSsidSettings4BandSteeringEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      two_four_ghz_settings_ax_enabled: {
        value: cdktf.booleanToHclTerraform(this._twoFourGhzSettingsAxEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      two_four_ghz_settings_min_bitrate: {
        value: cdktf.numberToHclTerraform(this._twoFourGhzSettingsMinBitrate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
