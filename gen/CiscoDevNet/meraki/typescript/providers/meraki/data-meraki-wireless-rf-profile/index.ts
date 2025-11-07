// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_rf_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiWirelessRfProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_rf_profile#id DataMerakiWirelessRfProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the new profile. Must be unique. This param is required on creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_rf_profile#name DataMerakiWirelessRfProfile#name}
  */
  readonly name?: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_rf_profile#network_id DataMerakiWirelessRfProfile#network_id}
  */
  readonly networkId: string;
}
export interface DataMerakiWirelessRfProfileFlexRadiosByModel {
}

export function dataMerakiWirelessRfProfileFlexRadiosByModelToTerraform(struct?: DataMerakiWirelessRfProfileFlexRadiosByModel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiWirelessRfProfileFlexRadiosByModelToHclTerraform(struct?: DataMerakiWirelessRfProfileFlexRadiosByModel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiWirelessRfProfileFlexRadiosByModelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMerakiWirelessRfProfileFlexRadiosByModel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiWirelessRfProfileFlexRadiosByModel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bands - computed: true, optional: false, required: false
  public get bands() {
    return cdktf.Fn.tolist(this.getListAttribute('bands'));
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }
}

export class DataMerakiWirelessRfProfileFlexRadiosByModelList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiWirelessRfProfileFlexRadiosByModelOutputReference {
    return new DataMerakiWirelessRfProfileFlexRadiosByModelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_rf_profile meraki_wireless_rf_profile}
*/
export class DataMerakiWirelessRfProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_wireless_rf_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiWirelessRfProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiWirelessRfProfile to import
  * @param importFromId The id of the existing DataMerakiWirelessRfProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_rf_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiWirelessRfProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_wireless_rf_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_rf_profile meraki_wireless_rf_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiWirelessRfProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiWirelessRfProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_wireless_rf_profile',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._networkId = config.networkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ap_band_settings_band_operation_mode - computed: true, optional: false, required: false
  public get apBandSettingsBandOperationMode() {
    return this.getStringAttribute('ap_band_settings_band_operation_mode');
  }

  // ap_band_settings_band_steering_enabled - computed: true, optional: false, required: false
  public get apBandSettingsBandSteeringEnabled() {
    return this.getBooleanAttribute('ap_band_settings_band_steering_enabled');
  }

  // ap_band_settings_bands_enabled - computed: true, optional: false, required: false
  public get apBandSettingsBandsEnabled() {
    return cdktf.Fn.tolist(this.getListAttribute('ap_band_settings_bands_enabled'));
  }

  // band_selection_type - computed: true, optional: false, required: false
  public get bandSelectionType() {
    return this.getStringAttribute('band_selection_type');
  }

  // client_balancing_enabled - computed: true, optional: false, required: false
  public get clientBalancingEnabled() {
    return this.getBooleanAttribute('client_balancing_enabled');
  }

  // five_ghz_settings_channel_width - computed: true, optional: false, required: false
  public get fiveGhzSettingsChannelWidth() {
    return this.getStringAttribute('five_ghz_settings_channel_width');
  }

  // five_ghz_settings_max_power - computed: true, optional: false, required: false
  public get fiveGhzSettingsMaxPower() {
    return this.getNumberAttribute('five_ghz_settings_max_power');
  }

  // five_ghz_settings_min_bitrate - computed: true, optional: false, required: false
  public get fiveGhzSettingsMinBitrate() {
    return this.getNumberAttribute('five_ghz_settings_min_bitrate');
  }

  // five_ghz_settings_min_power - computed: true, optional: false, required: false
  public get fiveGhzSettingsMinPower() {
    return this.getNumberAttribute('five_ghz_settings_min_power');
  }

  // five_ghz_settings_rxsop - computed: true, optional: false, required: false
  public get fiveGhzSettingsRxsop() {
    return this.getNumberAttribute('five_ghz_settings_rxsop');
  }

  // five_ghz_settings_valid_auto_channels - computed: true, optional: false, required: false
  public get fiveGhzSettingsValidAutoChannels() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('five_ghz_settings_valid_auto_channels')));
  }

  // flex_radios_by_model - computed: true, optional: false, required: false
  private _flexRadiosByModel = new DataMerakiWirelessRfProfileFlexRadiosByModelList(this, "flex_radios_by_model", false);
  public get flexRadiosByModel() {
    return this._flexRadiosByModel;
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

  // is_indoor_default - computed: true, optional: false, required: false
  public get isIndoorDefault() {
    return this.getBooleanAttribute('is_indoor_default');
  }

  // is_outdoor_default - computed: true, optional: false, required: false
  public get isOutdoorDefault() {
    return this.getBooleanAttribute('is_outdoor_default');
  }

  // min_bitrate_type - computed: true, optional: false, required: false
  public get minBitrateType() {
    return this.getStringAttribute('min_bitrate_type');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
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

  // per_ssid_settings_0_band_operation_mode - computed: true, optional: false, required: false
  public get perSsidSettings0BandOperationMode() {
    return this.getStringAttribute('per_ssid_settings_0_band_operation_mode');
  }

  // per_ssid_settings_0_band_steering_enabled - computed: true, optional: false, required: false
  public get perSsidSettings0BandSteeringEnabled() {
    return this.getBooleanAttribute('per_ssid_settings_0_band_steering_enabled');
  }

  // per_ssid_settings_0_bands_enabled - computed: true, optional: false, required: false
  public get perSsidSettings0BandsEnabled() {
    return cdktf.Fn.tolist(this.getListAttribute('per_ssid_settings_0_bands_enabled'));
  }

  // per_ssid_settings_0_min_bitrate - computed: true, optional: false, required: false
  public get perSsidSettings0MinBitrate() {
    return this.getNumberAttribute('per_ssid_settings_0_min_bitrate');
  }

  // per_ssid_settings_10_band_operation_mode - computed: true, optional: false, required: false
  public get perSsidSettings10BandOperationMode() {
    return this.getStringAttribute('per_ssid_settings_10_band_operation_mode');
  }

  // per_ssid_settings_10_band_steering_enabled - computed: true, optional: false, required: false
  public get perSsidSettings10BandSteeringEnabled() {
    return this.getBooleanAttribute('per_ssid_settings_10_band_steering_enabled');
  }

  // per_ssid_settings_10_bands_enabled - computed: true, optional: false, required: false
  public get perSsidSettings10BandsEnabled() {
    return cdktf.Fn.tolist(this.getListAttribute('per_ssid_settings_10_bands_enabled'));
  }

  // per_ssid_settings_10_min_bitrate - computed: true, optional: false, required: false
  public get perSsidSettings10MinBitrate() {
    return this.getNumberAttribute('per_ssid_settings_10_min_bitrate');
  }

  // per_ssid_settings_11_band_operation_mode - computed: true, optional: false, required: false
  public get perSsidSettings11BandOperationMode() {
    return this.getStringAttribute('per_ssid_settings_11_band_operation_mode');
  }

  // per_ssid_settings_11_band_steering_enabled - computed: true, optional: false, required: false
  public get perSsidSettings11BandSteeringEnabled() {
    return this.getBooleanAttribute('per_ssid_settings_11_band_steering_enabled');
  }

  // per_ssid_settings_11_bands_enabled - computed: true, optional: false, required: false
  public get perSsidSettings11BandsEnabled() {
    return cdktf.Fn.tolist(this.getListAttribute('per_ssid_settings_11_bands_enabled'));
  }

  // per_ssid_settings_11_min_bitrate - computed: true, optional: false, required: false
  public get perSsidSettings11MinBitrate() {
    return this.getNumberAttribute('per_ssid_settings_11_min_bitrate');
  }

  // per_ssid_settings_12_band_operation_mode - computed: true, optional: false, required: false
  public get perSsidSettings12BandOperationMode() {
    return this.getStringAttribute('per_ssid_settings_12_band_operation_mode');
  }

  // per_ssid_settings_12_band_steering_enabled - computed: true, optional: false, required: false
  public get perSsidSettings12BandSteeringEnabled() {
    return this.getBooleanAttribute('per_ssid_settings_12_band_steering_enabled');
  }

  // per_ssid_settings_12_bands_enabled - computed: true, optional: false, required: false
  public get perSsidSettings12BandsEnabled() {
    return cdktf.Fn.tolist(this.getListAttribute('per_ssid_settings_12_bands_enabled'));
  }

  // per_ssid_settings_12_min_bitrate - computed: true, optional: false, required: false
  public get perSsidSettings12MinBitrate() {
    return this.getNumberAttribute('per_ssid_settings_12_min_bitrate');
  }

  // per_ssid_settings_13_band_operation_mode - computed: true, optional: false, required: false
  public get perSsidSettings13BandOperationMode() {
    return this.getStringAttribute('per_ssid_settings_13_band_operation_mode');
  }

  // per_ssid_settings_13_band_steering_enabled - computed: true, optional: false, required: false
  public get perSsidSettings13BandSteeringEnabled() {
    return this.getBooleanAttribute('per_ssid_settings_13_band_steering_enabled');
  }

  // per_ssid_settings_13_bands_enabled - computed: true, optional: false, required: false
  public get perSsidSettings13BandsEnabled() {
    return cdktf.Fn.tolist(this.getListAttribute('per_ssid_settings_13_bands_enabled'));
  }

  // per_ssid_settings_13_min_bitrate - computed: true, optional: false, required: false
  public get perSsidSettings13MinBitrate() {
    return this.getNumberAttribute('per_ssid_settings_13_min_bitrate');
  }

  // per_ssid_settings_14_band_operation_mode - computed: true, optional: false, required: false
  public get perSsidSettings14BandOperationMode() {
    return this.getStringAttribute('per_ssid_settings_14_band_operation_mode');
  }

  // per_ssid_settings_14_band_steering_enabled - computed: true, optional: false, required: false
  public get perSsidSettings14BandSteeringEnabled() {
    return this.getBooleanAttribute('per_ssid_settings_14_band_steering_enabled');
  }

  // per_ssid_settings_14_bands_enabled - computed: true, optional: false, required: false
  public get perSsidSettings14BandsEnabled() {
    return cdktf.Fn.tolist(this.getListAttribute('per_ssid_settings_14_bands_enabled'));
  }

  // per_ssid_settings_14_min_bitrate - computed: true, optional: false, required: false
  public get perSsidSettings14MinBitrate() {
    return this.getNumberAttribute('per_ssid_settings_14_min_bitrate');
  }

  // per_ssid_settings_1_band_operation_mode - computed: true, optional: false, required: false
  public get perSsidSettings1BandOperationMode() {
    return this.getStringAttribute('per_ssid_settings_1_band_operation_mode');
  }

  // per_ssid_settings_1_band_steering_enabled - computed: true, optional: false, required: false
  public get perSsidSettings1BandSteeringEnabled() {
    return this.getBooleanAttribute('per_ssid_settings_1_band_steering_enabled');
  }

  // per_ssid_settings_1_bands_enabled - computed: true, optional: false, required: false
  public get perSsidSettings1BandsEnabled() {
    return cdktf.Fn.tolist(this.getListAttribute('per_ssid_settings_1_bands_enabled'));
  }

  // per_ssid_settings_1_min_bitrate - computed: true, optional: false, required: false
  public get perSsidSettings1MinBitrate() {
    return this.getNumberAttribute('per_ssid_settings_1_min_bitrate');
  }

  // per_ssid_settings_2_band_operation_mode - computed: true, optional: false, required: false
  public get perSsidSettings2BandOperationMode() {
    return this.getStringAttribute('per_ssid_settings_2_band_operation_mode');
  }

  // per_ssid_settings_2_band_steering_enabled - computed: true, optional: false, required: false
  public get perSsidSettings2BandSteeringEnabled() {
    return this.getBooleanAttribute('per_ssid_settings_2_band_steering_enabled');
  }

  // per_ssid_settings_2_bands_enabled - computed: true, optional: false, required: false
  public get perSsidSettings2BandsEnabled() {
    return cdktf.Fn.tolist(this.getListAttribute('per_ssid_settings_2_bands_enabled'));
  }

  // per_ssid_settings_2_min_bitrate - computed: true, optional: false, required: false
  public get perSsidSettings2MinBitrate() {
    return this.getNumberAttribute('per_ssid_settings_2_min_bitrate');
  }

  // per_ssid_settings_3_band_operation_mode - computed: true, optional: false, required: false
  public get perSsidSettings3BandOperationMode() {
    return this.getStringAttribute('per_ssid_settings_3_band_operation_mode');
  }

  // per_ssid_settings_3_band_steering_enabled - computed: true, optional: false, required: false
  public get perSsidSettings3BandSteeringEnabled() {
    return this.getBooleanAttribute('per_ssid_settings_3_band_steering_enabled');
  }

  // per_ssid_settings_3_bands_enabled - computed: true, optional: false, required: false
  public get perSsidSettings3BandsEnabled() {
    return cdktf.Fn.tolist(this.getListAttribute('per_ssid_settings_3_bands_enabled'));
  }

  // per_ssid_settings_3_min_bitrate - computed: true, optional: false, required: false
  public get perSsidSettings3MinBitrate() {
    return this.getNumberAttribute('per_ssid_settings_3_min_bitrate');
  }

  // per_ssid_settings_4_band_operation_mode - computed: true, optional: false, required: false
  public get perSsidSettings4BandOperationMode() {
    return this.getStringAttribute('per_ssid_settings_4_band_operation_mode');
  }

  // per_ssid_settings_4_band_steering_enabled - computed: true, optional: false, required: false
  public get perSsidSettings4BandSteeringEnabled() {
    return this.getBooleanAttribute('per_ssid_settings_4_band_steering_enabled');
  }

  // per_ssid_settings_4_bands_enabled - computed: true, optional: false, required: false
  public get perSsidSettings4BandsEnabled() {
    return cdktf.Fn.tolist(this.getListAttribute('per_ssid_settings_4_bands_enabled'));
  }

  // per_ssid_settings_4_min_bitrate - computed: true, optional: false, required: false
  public get perSsidSettings4MinBitrate() {
    return this.getNumberAttribute('per_ssid_settings_4_min_bitrate');
  }

  // per_ssid_settings_5_band_operation_mode - computed: true, optional: false, required: false
  public get perSsidSettings5BandOperationMode() {
    return this.getStringAttribute('per_ssid_settings_5_band_operation_mode');
  }

  // per_ssid_settings_5_band_steering_enabled - computed: true, optional: false, required: false
  public get perSsidSettings5BandSteeringEnabled() {
    return this.getBooleanAttribute('per_ssid_settings_5_band_steering_enabled');
  }

  // per_ssid_settings_5_bands_enabled - computed: true, optional: false, required: false
  public get perSsidSettings5BandsEnabled() {
    return cdktf.Fn.tolist(this.getListAttribute('per_ssid_settings_5_bands_enabled'));
  }

  // per_ssid_settings_5_min_bitrate - computed: true, optional: false, required: false
  public get perSsidSettings5MinBitrate() {
    return this.getNumberAttribute('per_ssid_settings_5_min_bitrate');
  }

  // per_ssid_settings_6_band_operation_mode - computed: true, optional: false, required: false
  public get perSsidSettings6BandOperationMode() {
    return this.getStringAttribute('per_ssid_settings_6_band_operation_mode');
  }

  // per_ssid_settings_6_band_steering_enabled - computed: true, optional: false, required: false
  public get perSsidSettings6BandSteeringEnabled() {
    return this.getBooleanAttribute('per_ssid_settings_6_band_steering_enabled');
  }

  // per_ssid_settings_6_bands_enabled - computed: true, optional: false, required: false
  public get perSsidSettings6BandsEnabled() {
    return cdktf.Fn.tolist(this.getListAttribute('per_ssid_settings_6_bands_enabled'));
  }

  // per_ssid_settings_6_min_bitrate - computed: true, optional: false, required: false
  public get perSsidSettings6MinBitrate() {
    return this.getNumberAttribute('per_ssid_settings_6_min_bitrate');
  }

  // per_ssid_settings_7_band_operation_mode - computed: true, optional: false, required: false
  public get perSsidSettings7BandOperationMode() {
    return this.getStringAttribute('per_ssid_settings_7_band_operation_mode');
  }

  // per_ssid_settings_7_band_steering_enabled - computed: true, optional: false, required: false
  public get perSsidSettings7BandSteeringEnabled() {
    return this.getBooleanAttribute('per_ssid_settings_7_band_steering_enabled');
  }

  // per_ssid_settings_7_bands_enabled - computed: true, optional: false, required: false
  public get perSsidSettings7BandsEnabled() {
    return cdktf.Fn.tolist(this.getListAttribute('per_ssid_settings_7_bands_enabled'));
  }

  // per_ssid_settings_7_min_bitrate - computed: true, optional: false, required: false
  public get perSsidSettings7MinBitrate() {
    return this.getNumberAttribute('per_ssid_settings_7_min_bitrate');
  }

  // per_ssid_settings_8_band_operation_mode - computed: true, optional: false, required: false
  public get perSsidSettings8BandOperationMode() {
    return this.getStringAttribute('per_ssid_settings_8_band_operation_mode');
  }

  // per_ssid_settings_8_band_steering_enabled - computed: true, optional: false, required: false
  public get perSsidSettings8BandSteeringEnabled() {
    return this.getBooleanAttribute('per_ssid_settings_8_band_steering_enabled');
  }

  // per_ssid_settings_8_bands_enabled - computed: true, optional: false, required: false
  public get perSsidSettings8BandsEnabled() {
    return cdktf.Fn.tolist(this.getListAttribute('per_ssid_settings_8_bands_enabled'));
  }

  // per_ssid_settings_8_min_bitrate - computed: true, optional: false, required: false
  public get perSsidSettings8MinBitrate() {
    return this.getNumberAttribute('per_ssid_settings_8_min_bitrate');
  }

  // per_ssid_settings_9_band_operation_mode - computed: true, optional: false, required: false
  public get perSsidSettings9BandOperationMode() {
    return this.getStringAttribute('per_ssid_settings_9_band_operation_mode');
  }

  // per_ssid_settings_9_band_steering_enabled - computed: true, optional: false, required: false
  public get perSsidSettings9BandSteeringEnabled() {
    return this.getBooleanAttribute('per_ssid_settings_9_band_steering_enabled');
  }

  // per_ssid_settings_9_bands_enabled - computed: true, optional: false, required: false
  public get perSsidSettings9BandsEnabled() {
    return cdktf.Fn.tolist(this.getListAttribute('per_ssid_settings_9_bands_enabled'));
  }

  // per_ssid_settings_9_min_bitrate - computed: true, optional: false, required: false
  public get perSsidSettings9MinBitrate() {
    return this.getNumberAttribute('per_ssid_settings_9_min_bitrate');
  }

  // six_ghz_settings_channel_width - computed: true, optional: false, required: false
  public get sixGhzSettingsChannelWidth() {
    return this.getStringAttribute('six_ghz_settings_channel_width');
  }

  // six_ghz_settings_max_power - computed: true, optional: false, required: false
  public get sixGhzSettingsMaxPower() {
    return this.getNumberAttribute('six_ghz_settings_max_power');
  }

  // six_ghz_settings_min_bitrate - computed: true, optional: false, required: false
  public get sixGhzSettingsMinBitrate() {
    return this.getNumberAttribute('six_ghz_settings_min_bitrate');
  }

  // six_ghz_settings_min_power - computed: true, optional: false, required: false
  public get sixGhzSettingsMinPower() {
    return this.getNumberAttribute('six_ghz_settings_min_power');
  }

  // six_ghz_settings_rxsop - computed: true, optional: false, required: false
  public get sixGhzSettingsRxsop() {
    return this.getNumberAttribute('six_ghz_settings_rxsop');
  }

  // six_ghz_settings_valid_auto_channels - computed: true, optional: false, required: false
  public get sixGhzSettingsValidAutoChannels() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('six_ghz_settings_valid_auto_channels')));
  }

  // transmission_enabled - computed: true, optional: false, required: false
  public get transmissionEnabled() {
    return this.getBooleanAttribute('transmission_enabled');
  }

  // two_four_ghz_settings_ax_enabled - computed: true, optional: false, required: false
  public get twoFourGhzSettingsAxEnabled() {
    return this.getBooleanAttribute('two_four_ghz_settings_ax_enabled');
  }

  // two_four_ghz_settings_max_power - computed: true, optional: false, required: false
  public get twoFourGhzSettingsMaxPower() {
    return this.getNumberAttribute('two_four_ghz_settings_max_power');
  }

  // two_four_ghz_settings_min_bitrate - computed: true, optional: false, required: false
  public get twoFourGhzSettingsMinBitrate() {
    return this.getNumberAttribute('two_four_ghz_settings_min_bitrate');
  }

  // two_four_ghz_settings_min_power - computed: true, optional: false, required: false
  public get twoFourGhzSettingsMinPower() {
    return this.getNumberAttribute('two_four_ghz_settings_min_power');
  }

  // two_four_ghz_settings_rxsop - computed: true, optional: false, required: false
  public get twoFourGhzSettingsRxsop() {
    return this.getNumberAttribute('two_four_ghz_settings_rxsop');
  }

  // two_four_ghz_settings_valid_auto_channels - computed: true, optional: false, required: false
  public get twoFourGhzSettingsValidAutoChannels() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('two_four_ghz_settings_valid_auto_channels')));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
