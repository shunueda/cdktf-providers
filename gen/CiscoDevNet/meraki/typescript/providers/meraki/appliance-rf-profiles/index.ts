// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_rf_profiles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplianceRfProfilesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_rf_profiles#items ApplianceRfProfiles#items}
  */
  readonly items: ApplianceRfProfilesItems[] | cdktf.IResolvable;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_rf_profiles#network_id ApplianceRfProfiles#network_id}
  */
  readonly networkId: string;
  /**
  * The organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_rf_profiles#organization_id ApplianceRfProfiles#organization_id}
  */
  readonly organizationId: string;
}
export interface ApplianceRfProfilesItems {
  /**
  * Determines whether ax radio on 5Ghz band is on or off. Can be either true or false. If false, we highly recommend disabling band steering. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_rf_profiles#five_ghz_settings_ax_enabled ApplianceRfProfiles#five_ghz_settings_ax_enabled}
  */
  readonly fiveGhzSettingsAxEnabled?: boolean | cdktf.IResolvable;
  /**
  * Sets min bitrate (Mbps) of 5Ghz band. Can be one of `6`, `9`, `12`, `18`, `24`, `36`, `48` or `54`. Defaults to 12.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_rf_profiles#five_ghz_settings_min_bitrate ApplianceRfProfiles#five_ghz_settings_min_bitrate}
  */
  readonly fiveGhzSettingsMinBitrate?: number;
  /**
  * The name of the new profile. Must be unique. This param is required on creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_rf_profiles#name ApplianceRfProfiles#name}
  */
  readonly name: string;
  /**
  * Choice between `dual`, `2.4ghz`, `5ghz`, `6ghz` or `multi`.
  *   - Choices: `2.4ghz`, `5ghz`, `6ghz`, `dual`, `multi`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_rf_profiles#per_ssid_settings_1_band_operation_mode ApplianceRfProfiles#per_ssid_settings_1_band_operation_mode}
  */
  readonly perSsidSettings1BandOperationMode?: string;
  /**
  * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_rf_profiles#per_ssid_settings_1_band_steering_enabled ApplianceRfProfiles#per_ssid_settings_1_band_steering_enabled}
  */
  readonly perSsidSettings1BandSteeringEnabled?: boolean | cdktf.IResolvable;
  /**
  * Choice between `dual`, `2.4ghz`, `5ghz`, `6ghz` or `multi`.
  *   - Choices: `2.4ghz`, `5ghz`, `6ghz`, `dual`, `multi`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_rf_profiles#per_ssid_settings_2_band_operation_mode ApplianceRfProfiles#per_ssid_settings_2_band_operation_mode}
  */
  readonly perSsidSettings2BandOperationMode?: string;
  /**
  * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_rf_profiles#per_ssid_settings_2_band_steering_enabled ApplianceRfProfiles#per_ssid_settings_2_band_steering_enabled}
  */
  readonly perSsidSettings2BandSteeringEnabled?: boolean | cdktf.IResolvable;
  /**
  * Choice between `dual`, `2.4ghz`, `5ghz`, `6ghz` or `multi`.
  *   - Choices: `2.4ghz`, `5ghz`, `6ghz`, `dual`, `multi`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_rf_profiles#per_ssid_settings_3_band_operation_mode ApplianceRfProfiles#per_ssid_settings_3_band_operation_mode}
  */
  readonly perSsidSettings3BandOperationMode?: string;
  /**
  * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_rf_profiles#per_ssid_settings_3_band_steering_enabled ApplianceRfProfiles#per_ssid_settings_3_band_steering_enabled}
  */
  readonly perSsidSettings3BandSteeringEnabled?: boolean | cdktf.IResolvable;
  /**
  * Choice between `dual`, `2.4ghz`, `5ghz`, `6ghz` or `multi`.
  *   - Choices: `2.4ghz`, `5ghz`, `6ghz`, `dual`, `multi`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_rf_profiles#per_ssid_settings_4_band_operation_mode ApplianceRfProfiles#per_ssid_settings_4_band_operation_mode}
  */
  readonly perSsidSettings4BandOperationMode?: string;
  /**
  * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_rf_profiles#per_ssid_settings_4_band_steering_enabled ApplianceRfProfiles#per_ssid_settings_4_band_steering_enabled}
  */
  readonly perSsidSettings4BandSteeringEnabled?: boolean | cdktf.IResolvable;
  /**
  * Determines whether ax radio on 2.4Ghz band is on or off. Can be either true or false. If false, we highly recommend disabling band steering. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_rf_profiles#two_four_ghz_settings_ax_enabled ApplianceRfProfiles#two_four_ghz_settings_ax_enabled}
  */
  readonly twoFourGhzSettingsAxEnabled?: boolean | cdktf.IResolvable;
  /**
  * Sets min bitrate (Mbps) of 2.4Ghz band. Can be one of `1`, `2`, `5.5`, `6`, `9`, `11`, `12`, `18`, `24`, `36`, `48` or `54`. Defaults to 11.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_rf_profiles#two_four_ghz_settings_min_bitrate ApplianceRfProfiles#two_four_ghz_settings_min_bitrate}
  */
  readonly twoFourGhzSettingsMinBitrate?: number;
}

export function applianceRfProfilesItemsToTerraform(struct?: ApplianceRfProfilesItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    five_ghz_settings_ax_enabled: cdktf.booleanToTerraform(struct!.fiveGhzSettingsAxEnabled),
    five_ghz_settings_min_bitrate: cdktf.numberToTerraform(struct!.fiveGhzSettingsMinBitrate),
    name: cdktf.stringToTerraform(struct!.name),
    per_ssid_settings_1_band_operation_mode: cdktf.stringToTerraform(struct!.perSsidSettings1BandOperationMode),
    per_ssid_settings_1_band_steering_enabled: cdktf.booleanToTerraform(struct!.perSsidSettings1BandSteeringEnabled),
    per_ssid_settings_2_band_operation_mode: cdktf.stringToTerraform(struct!.perSsidSettings2BandOperationMode),
    per_ssid_settings_2_band_steering_enabled: cdktf.booleanToTerraform(struct!.perSsidSettings2BandSteeringEnabled),
    per_ssid_settings_3_band_operation_mode: cdktf.stringToTerraform(struct!.perSsidSettings3BandOperationMode),
    per_ssid_settings_3_band_steering_enabled: cdktf.booleanToTerraform(struct!.perSsidSettings3BandSteeringEnabled),
    per_ssid_settings_4_band_operation_mode: cdktf.stringToTerraform(struct!.perSsidSettings4BandOperationMode),
    per_ssid_settings_4_band_steering_enabled: cdktf.booleanToTerraform(struct!.perSsidSettings4BandSteeringEnabled),
    two_four_ghz_settings_ax_enabled: cdktf.booleanToTerraform(struct!.twoFourGhzSettingsAxEnabled),
    two_four_ghz_settings_min_bitrate: cdktf.numberToTerraform(struct!.twoFourGhzSettingsMinBitrate),
  }
}


export function applianceRfProfilesItemsToHclTerraform(struct?: ApplianceRfProfilesItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    five_ghz_settings_ax_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.fiveGhzSettingsAxEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    five_ghz_settings_min_bitrate: {
      value: cdktf.numberToHclTerraform(struct!.fiveGhzSettingsMinBitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    per_ssid_settings_1_band_operation_mode: {
      value: cdktf.stringToHclTerraform(struct!.perSsidSettings1BandOperationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    per_ssid_settings_1_band_steering_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.perSsidSettings1BandSteeringEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    per_ssid_settings_2_band_operation_mode: {
      value: cdktf.stringToHclTerraform(struct!.perSsidSettings2BandOperationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    per_ssid_settings_2_band_steering_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.perSsidSettings2BandSteeringEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    per_ssid_settings_3_band_operation_mode: {
      value: cdktf.stringToHclTerraform(struct!.perSsidSettings3BandOperationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    per_ssid_settings_3_band_steering_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.perSsidSettings3BandSteeringEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    per_ssid_settings_4_band_operation_mode: {
      value: cdktf.stringToHclTerraform(struct!.perSsidSettings4BandOperationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    per_ssid_settings_4_band_steering_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.perSsidSettings4BandSteeringEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    two_four_ghz_settings_ax_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.twoFourGhzSettingsAxEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    two_four_ghz_settings_min_bitrate: {
      value: cdktf.numberToHclTerraform(struct!.twoFourGhzSettingsMinBitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplianceRfProfilesItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplianceRfProfilesItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fiveGhzSettingsAxEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.fiveGhzSettingsAxEnabled = this._fiveGhzSettingsAxEnabled;
    }
    if (this._fiveGhzSettingsMinBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.fiveGhzSettingsMinBitrate = this._fiveGhzSettingsMinBitrate;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._perSsidSettings1BandOperationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings1BandOperationMode = this._perSsidSettings1BandOperationMode;
    }
    if (this._perSsidSettings1BandSteeringEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings1BandSteeringEnabled = this._perSsidSettings1BandSteeringEnabled;
    }
    if (this._perSsidSettings2BandOperationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings2BandOperationMode = this._perSsidSettings2BandOperationMode;
    }
    if (this._perSsidSettings2BandSteeringEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings2BandSteeringEnabled = this._perSsidSettings2BandSteeringEnabled;
    }
    if (this._perSsidSettings3BandOperationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings3BandOperationMode = this._perSsidSettings3BandOperationMode;
    }
    if (this._perSsidSettings3BandSteeringEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings3BandSteeringEnabled = this._perSsidSettings3BandSteeringEnabled;
    }
    if (this._perSsidSettings4BandOperationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings4BandOperationMode = this._perSsidSettings4BandOperationMode;
    }
    if (this._perSsidSettings4BandSteeringEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings4BandSteeringEnabled = this._perSsidSettings4BandSteeringEnabled;
    }
    if (this._twoFourGhzSettingsAxEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.twoFourGhzSettingsAxEnabled = this._twoFourGhzSettingsAxEnabled;
    }
    if (this._twoFourGhzSettingsMinBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.twoFourGhzSettingsMinBitrate = this._twoFourGhzSettingsMinBitrate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplianceRfProfilesItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fiveGhzSettingsAxEnabled = undefined;
      this._fiveGhzSettingsMinBitrate = undefined;
      this._name = undefined;
      this._perSsidSettings1BandOperationMode = undefined;
      this._perSsidSettings1BandSteeringEnabled = undefined;
      this._perSsidSettings2BandOperationMode = undefined;
      this._perSsidSettings2BandSteeringEnabled = undefined;
      this._perSsidSettings3BandOperationMode = undefined;
      this._perSsidSettings3BandSteeringEnabled = undefined;
      this._perSsidSettings4BandOperationMode = undefined;
      this._perSsidSettings4BandSteeringEnabled = undefined;
      this._twoFourGhzSettingsAxEnabled = undefined;
      this._twoFourGhzSettingsMinBitrate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fiveGhzSettingsAxEnabled = value.fiveGhzSettingsAxEnabled;
      this._fiveGhzSettingsMinBitrate = value.fiveGhzSettingsMinBitrate;
      this._name = value.name;
      this._perSsidSettings1BandOperationMode = value.perSsidSettings1BandOperationMode;
      this._perSsidSettings1BandSteeringEnabled = value.perSsidSettings1BandSteeringEnabled;
      this._perSsidSettings2BandOperationMode = value.perSsidSettings2BandOperationMode;
      this._perSsidSettings2BandSteeringEnabled = value.perSsidSettings2BandSteeringEnabled;
      this._perSsidSettings3BandOperationMode = value.perSsidSettings3BandOperationMode;
      this._perSsidSettings3BandSteeringEnabled = value.perSsidSettings3BandSteeringEnabled;
      this._perSsidSettings4BandOperationMode = value.perSsidSettings4BandOperationMode;
      this._perSsidSettings4BandSteeringEnabled = value.perSsidSettings4BandSteeringEnabled;
      this._twoFourGhzSettingsAxEnabled = value.twoFourGhzSettingsAxEnabled;
      this._twoFourGhzSettingsMinBitrate = value.twoFourGhzSettingsMinBitrate;
    }
  }

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
}

export class ApplianceRfProfilesItemsList extends cdktf.ComplexList {
  public internalValue? : ApplianceRfProfilesItems[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplianceRfProfilesItemsOutputReference {
    return new ApplianceRfProfilesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_rf_profiles meraki_appliance_rf_profiles}
*/
export class ApplianceRfProfiles extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_rf_profiles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplianceRfProfiles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplianceRfProfiles to import
  * @param importFromId The id of the existing ApplianceRfProfiles that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_rf_profiles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplianceRfProfiles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_rf_profiles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_rf_profiles meraki_appliance_rf_profiles} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplianceRfProfilesConfig
  */
  public constructor(scope: Construct, id: string, config: ApplianceRfProfilesConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_rf_profiles',
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
    this._items.internalValue = config.items;
    this._networkId = config.networkId;
    this._organizationId = config.organizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // items - computed: false, optional: false, required: true
  private _items = new ApplianceRfProfilesItemsList(this, "items", true);
  public get items() {
    return this._items;
  }
  public putItems(value: ApplianceRfProfilesItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      items: cdktf.listMapper(applianceRfProfilesItemsToTerraform, false)(this._items.internalValue),
      network_id: cdktf.stringToTerraform(this._networkId),
      organization_id: cdktf.stringToTerraform(this._organizationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      items: {
        value: cdktf.listMapperHcl(applianceRfProfilesItemsToHclTerraform, false)(this._items.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplianceRfProfilesItemsList",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
