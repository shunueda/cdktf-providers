// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_rf_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelessRfProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_rf_profile#id WirelessRfProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_rf_profile#parameters WirelessRfProfile#parameters}
  */
  readonly parameters?: WirelessRfProfileParameters[] | cdktf.IResolvable;
}
export interface WirelessRfProfileItem {
}

export function wirelessRfProfileItemToTerraform(struct?: WirelessRfProfileItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function wirelessRfProfileItemToHclTerraform(struct?: WirelessRfProfileItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class WirelessRfProfileItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessRfProfileItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessRfProfileItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // a_radio_channels - computed: true, optional: false, required: false
  public get aRadioChannels() {
    return this.getStringAttribute('a_radio_channels');
  }

  // b_radio_channels - computed: true, optional: false, required: false
  public get bRadioChannels() {
    return this.getStringAttribute('b_radio_channels');
  }

  // c_radio_channels - computed: true, optional: false, required: false
  public get cRadioChannels() {
    return this.getStringAttribute('c_radio_channels');
  }

  // channel_width - computed: true, optional: false, required: false
  public get channelWidth() {
    return this.getStringAttribute('channel_width');
  }

  // data_rates_a - computed: true, optional: false, required: false
  public get dataRatesA() {
    return this.getStringAttribute('data_rates_a');
  }

  // data_rates_b - computed: true, optional: false, required: false
  public get dataRatesB() {
    return this.getStringAttribute('data_rates_b');
  }

  // data_rates_c - computed: true, optional: false, required: false
  public get dataRatesC() {
    return this.getStringAttribute('data_rates_c');
  }

  // default_rf_profile - computed: true, optional: false, required: false
  public get defaultRfProfile() {
    return this.getStringAttribute('default_rf_profile');
  }

  // enable_a_radio_type - computed: true, optional: false, required: false
  public get enableARadioType() {
    return this.getStringAttribute('enable_a_radio_type');
  }

  // enable_b_radio_type - computed: true, optional: false, required: false
  public get enableBRadioType() {
    return this.getStringAttribute('enable_b_radio_type');
  }

  // enable_brown_field - computed: true, optional: false, required: false
  public get enableBrownField() {
    return this.getStringAttribute('enable_brown_field');
  }

  // enable_c_radio_type - computed: true, optional: false, required: false
  public get enableCRadioType() {
    return this.getStringAttribute('enable_c_radio_type');
  }

  // enable_custom - computed: true, optional: false, required: false
  public get enableCustom() {
    return this.getStringAttribute('enable_custom');
  }

  // mandatory_data_rates_a - computed: true, optional: false, required: false
  public get mandatoryDataRatesA() {
    return this.getStringAttribute('mandatory_data_rates_a');
  }

  // mandatory_data_rates_b - computed: true, optional: false, required: false
  public get mandatoryDataRatesB() {
    return this.getStringAttribute('mandatory_data_rates_b');
  }

  // mandatory_data_rates_c - computed: true, optional: false, required: false
  public get mandatoryDataRatesC() {
    return this.getStringAttribute('mandatory_data_rates_c');
  }

  // max_power_level_a - computed: true, optional: false, required: false
  public get maxPowerLevelA() {
    return this.getStringAttribute('max_power_level_a');
  }

  // max_power_level_b - computed: true, optional: false, required: false
  public get maxPowerLevelB() {
    return this.getStringAttribute('max_power_level_b');
  }

  // min_power_level_a - computed: true, optional: false, required: false
  public get minPowerLevelA() {
    return this.getStringAttribute('min_power_level_a');
  }

  // min_power_level_b - computed: true, optional: false, required: false
  public get minPowerLevelB() {
    return this.getStringAttribute('min_power_level_b');
  }

  // min_power_level_c - computed: true, optional: false, required: false
  public get minPowerLevelC() {
    return this.getStringAttribute('min_power_level_c');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_profile_a - computed: true, optional: false, required: false
  public get parentProfileA() {
    return this.getStringAttribute('parent_profile_a');
  }

  // parent_profile_b - computed: true, optional: false, required: false
  public get parentProfileB() {
    return this.getStringAttribute('parent_profile_b');
  }

  // power_threshold_v1_a - computed: true, optional: false, required: false
  public get powerThresholdV1A() {
    return this.getNumberAttribute('power_threshold_v1_a');
  }

  // power_threshold_v1_b - computed: true, optional: false, required: false
  public get powerThresholdV1B() {
    return this.getNumberAttribute('power_threshold_v1_b');
  }

  // power_threshold_v1_c - computed: true, optional: false, required: false
  public get powerThresholdV1C() {
    return this.getNumberAttribute('power_threshold_v1_c');
  }

  // rx_sop_threshold_a - computed: true, optional: false, required: false
  public get rxSopThresholdA() {
    return this.getStringAttribute('rx_sop_threshold_a');
  }

  // rx_sop_threshold_b - computed: true, optional: false, required: false
  public get rxSopThresholdB() {
    return this.getStringAttribute('rx_sop_threshold_b');
  }

  // rx_sop_threshold_c - computed: true, optional: false, required: false
  public get rxSopThresholdC() {
    return this.getStringAttribute('rx_sop_threshold_c');
  }
}

export class WirelessRfProfileItemList extends cdktf.ComplexList {

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
  public get(index: number): WirelessRfProfileItemOutputReference {
    return new WirelessRfProfileItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelessRfProfileParametersRadioTypeAProperties {
  /**
  * Data Rates
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_rf_profile#data_rates WirelessRfProfile#data_rates}
  */
  readonly dataRates?: string;
  /**
  * Mandatory Data Rates
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_rf_profile#mandatory_data_rates WirelessRfProfile#mandatory_data_rates}
  */
  readonly mandatoryDataRates?: string;
  /**
  * Max Power Level
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_rf_profile#max_power_level WirelessRfProfile#max_power_level}
  */
  readonly maxPowerLevel?: number;
  /**
  * Rx Sop Threshold
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_rf_profile#min_power_level WirelessRfProfile#min_power_level}
  */
  readonly minPowerLevel?: number;
  /**
  * Parent Profile
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_rf_profile#parent_profile WirelessRfProfile#parent_profile}
  */
  readonly parentProfile?: string;
  /**
  * Power Threshold V1
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_rf_profile#power_threshold_v1 WirelessRfProfile#power_threshold_v1}
  */
  readonly powerThresholdV1?: number;
  /**
  * Radio Channels
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_rf_profile#radio_channels WirelessRfProfile#radio_channels}
  */
  readonly radioChannels?: string;
  /**
  * Rx Sop Threshold
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_rf_profile#rx_sop_threshold WirelessRfProfile#rx_sop_threshold}
  */
  readonly rxSopThreshold?: string;
}

export function wirelessRfProfileParametersRadioTypeAPropertiesToTerraform(struct?: WirelessRfProfileParametersRadioTypeAProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_rates: cdktf.stringToTerraform(struct!.dataRates),
    mandatory_data_rates: cdktf.stringToTerraform(struct!.mandatoryDataRates),
    max_power_level: cdktf.numberToTerraform(struct!.maxPowerLevel),
    min_power_level: cdktf.numberToTerraform(struct!.minPowerLevel),
    parent_profile: cdktf.stringToTerraform(struct!.parentProfile),
    power_threshold_v1: cdktf.numberToTerraform(struct!.powerThresholdV1),
    radio_channels: cdktf.stringToTerraform(struct!.radioChannels),
    rx_sop_threshold: cdktf.stringToTerraform(struct!.rxSopThreshold),
  }
}


export function wirelessRfProfileParametersRadioTypeAPropertiesToHclTerraform(struct?: WirelessRfProfileParametersRadioTypeAProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_rates: {
      value: cdktf.stringToHclTerraform(struct!.dataRates),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mandatory_data_rates: {
      value: cdktf.stringToHclTerraform(struct!.mandatoryDataRates),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_power_level: {
      value: cdktf.numberToHclTerraform(struct!.maxPowerLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_power_level: {
      value: cdktf.numberToHclTerraform(struct!.minPowerLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parent_profile: {
      value: cdktf.stringToHclTerraform(struct!.parentProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    power_threshold_v1: {
      value: cdktf.numberToHclTerraform(struct!.powerThresholdV1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radio_channels: {
      value: cdktf.stringToHclTerraform(struct!.radioChannels),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rx_sop_threshold: {
      value: cdktf.stringToHclTerraform(struct!.rxSopThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelessRfProfileParametersRadioTypeAPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessRfProfileParametersRadioTypeAProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataRates !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataRates = this._dataRates;
    }
    if (this._mandatoryDataRates !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandatoryDataRates = this._mandatoryDataRates;
    }
    if (this._maxPowerLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPowerLevel = this._maxPowerLevel;
    }
    if (this._minPowerLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.minPowerLevel = this._minPowerLevel;
    }
    if (this._parentProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentProfile = this._parentProfile;
    }
    if (this._powerThresholdV1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerThresholdV1 = this._powerThresholdV1;
    }
    if (this._radioChannels !== undefined) {
      hasAnyValues = true;
      internalValueResult.radioChannels = this._radioChannels;
    }
    if (this._rxSopThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxSopThreshold = this._rxSopThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessRfProfileParametersRadioTypeAProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataRates = undefined;
      this._mandatoryDataRates = undefined;
      this._maxPowerLevel = undefined;
      this._minPowerLevel = undefined;
      this._parentProfile = undefined;
      this._powerThresholdV1 = undefined;
      this._radioChannels = undefined;
      this._rxSopThreshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataRates = value.dataRates;
      this._mandatoryDataRates = value.mandatoryDataRates;
      this._maxPowerLevel = value.maxPowerLevel;
      this._minPowerLevel = value.minPowerLevel;
      this._parentProfile = value.parentProfile;
      this._powerThresholdV1 = value.powerThresholdV1;
      this._radioChannels = value.radioChannels;
      this._rxSopThreshold = value.rxSopThreshold;
    }
  }

  // data_rates - computed: true, optional: true, required: false
  private _dataRates?: string; 
  public get dataRates() {
    return this.getStringAttribute('data_rates');
  }
  public set dataRates(value: string) {
    this._dataRates = value;
  }
  public resetDataRates() {
    this._dataRates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRatesInput() {
    return this._dataRates;
  }

  // mandatory_data_rates - computed: true, optional: true, required: false
  private _mandatoryDataRates?: string; 
  public get mandatoryDataRates() {
    return this.getStringAttribute('mandatory_data_rates');
  }
  public set mandatoryDataRates(value: string) {
    this._mandatoryDataRates = value;
  }
  public resetMandatoryDataRates() {
    this._mandatoryDataRates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryDataRatesInput() {
    return this._mandatoryDataRates;
  }

  // max_power_level - computed: true, optional: true, required: false
  private _maxPowerLevel?: number; 
  public get maxPowerLevel() {
    return this.getNumberAttribute('max_power_level');
  }
  public set maxPowerLevel(value: number) {
    this._maxPowerLevel = value;
  }
  public resetMaxPowerLevel() {
    this._maxPowerLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPowerLevelInput() {
    return this._maxPowerLevel;
  }

  // min_power_level - computed: true, optional: true, required: false
  private _minPowerLevel?: number; 
  public get minPowerLevel() {
    return this.getNumberAttribute('min_power_level');
  }
  public set minPowerLevel(value: number) {
    this._minPowerLevel = value;
  }
  public resetMinPowerLevel() {
    this._minPowerLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPowerLevelInput() {
    return this._minPowerLevel;
  }

  // parent_profile - computed: true, optional: true, required: false
  private _parentProfile?: string; 
  public get parentProfile() {
    return this.getStringAttribute('parent_profile');
  }
  public set parentProfile(value: string) {
    this._parentProfile = value;
  }
  public resetParentProfile() {
    this._parentProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentProfileInput() {
    return this._parentProfile;
  }

  // power_threshold_v1 - computed: true, optional: true, required: false
  private _powerThresholdV1?: number; 
  public get powerThresholdV1() {
    return this.getNumberAttribute('power_threshold_v1');
  }
  public set powerThresholdV1(value: number) {
    this._powerThresholdV1 = value;
  }
  public resetPowerThresholdV1() {
    this._powerThresholdV1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerThresholdV1Input() {
    return this._powerThresholdV1;
  }

  // radio_channels - computed: true, optional: true, required: false
  private _radioChannels?: string; 
  public get radioChannels() {
    return this.getStringAttribute('radio_channels');
  }
  public set radioChannels(value: string) {
    this._radioChannels = value;
  }
  public resetRadioChannels() {
    this._radioChannels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioChannelsInput() {
    return this._radioChannels;
  }

  // rx_sop_threshold - computed: true, optional: true, required: false
  private _rxSopThreshold?: string; 
  public get rxSopThreshold() {
    return this.getStringAttribute('rx_sop_threshold');
  }
  public set rxSopThreshold(value: string) {
    this._rxSopThreshold = value;
  }
  public resetRxSopThreshold() {
    this._rxSopThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxSopThresholdInput() {
    return this._rxSopThreshold;
  }
}

export class WirelessRfProfileParametersRadioTypeAPropertiesList extends cdktf.ComplexList {
  public internalValue? : WirelessRfProfileParametersRadioTypeAProperties[] | cdktf.IResolvable

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
  public get(index: number): WirelessRfProfileParametersRadioTypeAPropertiesOutputReference {
    return new WirelessRfProfileParametersRadioTypeAPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelessRfProfileParametersRadioTypeBProperties {
  /**
  * Data Rates
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_rf_profile#data_rates WirelessRfProfile#data_rates}
  */
  readonly dataRates?: string;
  /**
  * Mandatory Data Rates
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_rf_profile#mandatory_data_rates WirelessRfProfile#mandatory_data_rates}
  */
  readonly mandatoryDataRates?: string;
  /**
  * Max Power Level
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_rf_profile#max_power_level WirelessRfProfile#max_power_level}
  */
  readonly maxPowerLevel?: number;
  /**
  * Min Power Level
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_rf_profile#min_power_level WirelessRfProfile#min_power_level}
  */
  readonly minPowerLevel?: number;
  /**
  * Parent Profile
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_rf_profile#parent_profile WirelessRfProfile#parent_profile}
  */
  readonly parentProfile?: string;
  /**
  * Power Threshold V1
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_rf_profile#power_threshold_v1 WirelessRfProfile#power_threshold_v1}
  */
  readonly powerThresholdV1?: number;
  /**
  * Radio Channels
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_rf_profile#radio_channels WirelessRfProfile#radio_channels}
  */
  readonly radioChannels?: string;
  /**
  * Rx Sop Threshold
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_rf_profile#rx_sop_threshold WirelessRfProfile#rx_sop_threshold}
  */
  readonly rxSopThreshold?: string;
}

export function wirelessRfProfileParametersRadioTypeBPropertiesToTerraform(struct?: WirelessRfProfileParametersRadioTypeBProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_rates: cdktf.stringToTerraform(struct!.dataRates),
    mandatory_data_rates: cdktf.stringToTerraform(struct!.mandatoryDataRates),
    max_power_level: cdktf.numberToTerraform(struct!.maxPowerLevel),
    min_power_level: cdktf.numberToTerraform(struct!.minPowerLevel),
    parent_profile: cdktf.stringToTerraform(struct!.parentProfile),
    power_threshold_v1: cdktf.numberToTerraform(struct!.powerThresholdV1),
    radio_channels: cdktf.stringToTerraform(struct!.radioChannels),
    rx_sop_threshold: cdktf.stringToTerraform(struct!.rxSopThreshold),
  }
}


export function wirelessRfProfileParametersRadioTypeBPropertiesToHclTerraform(struct?: WirelessRfProfileParametersRadioTypeBProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_rates: {
      value: cdktf.stringToHclTerraform(struct!.dataRates),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mandatory_data_rates: {
      value: cdktf.stringToHclTerraform(struct!.mandatoryDataRates),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_power_level: {
      value: cdktf.numberToHclTerraform(struct!.maxPowerLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_power_level: {
      value: cdktf.numberToHclTerraform(struct!.minPowerLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parent_profile: {
      value: cdktf.stringToHclTerraform(struct!.parentProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    power_threshold_v1: {
      value: cdktf.numberToHclTerraform(struct!.powerThresholdV1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radio_channels: {
      value: cdktf.stringToHclTerraform(struct!.radioChannels),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rx_sop_threshold: {
      value: cdktf.stringToHclTerraform(struct!.rxSopThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelessRfProfileParametersRadioTypeBPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessRfProfileParametersRadioTypeBProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataRates !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataRates = this._dataRates;
    }
    if (this._mandatoryDataRates !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandatoryDataRates = this._mandatoryDataRates;
    }
    if (this._maxPowerLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPowerLevel = this._maxPowerLevel;
    }
    if (this._minPowerLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.minPowerLevel = this._minPowerLevel;
    }
    if (this._parentProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentProfile = this._parentProfile;
    }
    if (this._powerThresholdV1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerThresholdV1 = this._powerThresholdV1;
    }
    if (this._radioChannels !== undefined) {
      hasAnyValues = true;
      internalValueResult.radioChannels = this._radioChannels;
    }
    if (this._rxSopThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxSopThreshold = this._rxSopThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessRfProfileParametersRadioTypeBProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataRates = undefined;
      this._mandatoryDataRates = undefined;
      this._maxPowerLevel = undefined;
      this._minPowerLevel = undefined;
      this._parentProfile = undefined;
      this._powerThresholdV1 = undefined;
      this._radioChannels = undefined;
      this._rxSopThreshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataRates = value.dataRates;
      this._mandatoryDataRates = value.mandatoryDataRates;
      this._maxPowerLevel = value.maxPowerLevel;
      this._minPowerLevel = value.minPowerLevel;
      this._parentProfile = value.parentProfile;
      this._powerThresholdV1 = value.powerThresholdV1;
      this._radioChannels = value.radioChannels;
      this._rxSopThreshold = value.rxSopThreshold;
    }
  }

  // data_rates - computed: true, optional: true, required: false
  private _dataRates?: string; 
  public get dataRates() {
    return this.getStringAttribute('data_rates');
  }
  public set dataRates(value: string) {
    this._dataRates = value;
  }
  public resetDataRates() {
    this._dataRates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRatesInput() {
    return this._dataRates;
  }

  // mandatory_data_rates - computed: true, optional: true, required: false
  private _mandatoryDataRates?: string; 
  public get mandatoryDataRates() {
    return this.getStringAttribute('mandatory_data_rates');
  }
  public set mandatoryDataRates(value: string) {
    this._mandatoryDataRates = value;
  }
  public resetMandatoryDataRates() {
    this._mandatoryDataRates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryDataRatesInput() {
    return this._mandatoryDataRates;
  }

  // max_power_level - computed: true, optional: true, required: false
  private _maxPowerLevel?: number; 
  public get maxPowerLevel() {
    return this.getNumberAttribute('max_power_level');
  }
  public set maxPowerLevel(value: number) {
    this._maxPowerLevel = value;
  }
  public resetMaxPowerLevel() {
    this._maxPowerLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPowerLevelInput() {
    return this._maxPowerLevel;
  }

  // min_power_level - computed: true, optional: true, required: false
  private _minPowerLevel?: number; 
  public get minPowerLevel() {
    return this.getNumberAttribute('min_power_level');
  }
  public set minPowerLevel(value: number) {
    this._minPowerLevel = value;
  }
  public resetMinPowerLevel() {
    this._minPowerLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPowerLevelInput() {
    return this._minPowerLevel;
  }

  // parent_profile - computed: true, optional: true, required: false
  private _parentProfile?: string; 
  public get parentProfile() {
    return this.getStringAttribute('parent_profile');
  }
  public set parentProfile(value: string) {
    this._parentProfile = value;
  }
  public resetParentProfile() {
    this._parentProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentProfileInput() {
    return this._parentProfile;
  }

  // power_threshold_v1 - computed: true, optional: true, required: false
  private _powerThresholdV1?: number; 
  public get powerThresholdV1() {
    return this.getNumberAttribute('power_threshold_v1');
  }
  public set powerThresholdV1(value: number) {
    this._powerThresholdV1 = value;
  }
  public resetPowerThresholdV1() {
    this._powerThresholdV1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerThresholdV1Input() {
    return this._powerThresholdV1;
  }

  // radio_channels - computed: true, optional: true, required: false
  private _radioChannels?: string; 
  public get radioChannels() {
    return this.getStringAttribute('radio_channels');
  }
  public set radioChannels(value: string) {
    this._radioChannels = value;
  }
  public resetRadioChannels() {
    this._radioChannels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioChannelsInput() {
    return this._radioChannels;
  }

  // rx_sop_threshold - computed: true, optional: true, required: false
  private _rxSopThreshold?: string; 
  public get rxSopThreshold() {
    return this.getStringAttribute('rx_sop_threshold');
  }
  public set rxSopThreshold(value: string) {
    this._rxSopThreshold = value;
  }
  public resetRxSopThreshold() {
    this._rxSopThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxSopThresholdInput() {
    return this._rxSopThreshold;
  }
}

export class WirelessRfProfileParametersRadioTypeBPropertiesList extends cdktf.ComplexList {
  public internalValue? : WirelessRfProfileParametersRadioTypeBProperties[] | cdktf.IResolvable

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
  public get(index: number): WirelessRfProfileParametersRadioTypeBPropertiesOutputReference {
    return new WirelessRfProfileParametersRadioTypeBPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelessRfProfileParametersRadioTypeCProperties {
  /**
  * Data Rates
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_rf_profile#data_rates WirelessRfProfile#data_rates}
  */
  readonly dataRates?: string;
  /**
  * Mandatory Data Rates
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_rf_profile#mandatory_data_rates WirelessRfProfile#mandatory_data_rates}
  */
  readonly mandatoryDataRates?: string;
  /**
  * Max Power Level
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_rf_profile#max_power_level WirelessRfProfile#max_power_level}
  */
  readonly maxPowerLevel?: number;
  /**
  * Min Power Level
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_rf_profile#min_power_level WirelessRfProfile#min_power_level}
  */
  readonly minPowerLevel?: number;
  /**
  * Parent Profile
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_rf_profile#parent_profile WirelessRfProfile#parent_profile}
  */
  readonly parentProfile?: string;
  /**
  * Power Threshold V1
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_rf_profile#power_threshold_v1 WirelessRfProfile#power_threshold_v1}
  */
  readonly powerThresholdV1?: number;
  /**
  * Radio Channels
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_rf_profile#radio_channels WirelessRfProfile#radio_channels}
  */
  readonly radioChannels?: string;
  /**
  * Rx Sop Threshold
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_rf_profile#rx_sop_threshold WirelessRfProfile#rx_sop_threshold}
  */
  readonly rxSopThreshold?: string;
}

export function wirelessRfProfileParametersRadioTypeCPropertiesToTerraform(struct?: WirelessRfProfileParametersRadioTypeCProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_rates: cdktf.stringToTerraform(struct!.dataRates),
    mandatory_data_rates: cdktf.stringToTerraform(struct!.mandatoryDataRates),
    max_power_level: cdktf.numberToTerraform(struct!.maxPowerLevel),
    min_power_level: cdktf.numberToTerraform(struct!.minPowerLevel),
    parent_profile: cdktf.stringToTerraform(struct!.parentProfile),
    power_threshold_v1: cdktf.numberToTerraform(struct!.powerThresholdV1),
    radio_channels: cdktf.stringToTerraform(struct!.radioChannels),
    rx_sop_threshold: cdktf.stringToTerraform(struct!.rxSopThreshold),
  }
}


export function wirelessRfProfileParametersRadioTypeCPropertiesToHclTerraform(struct?: WirelessRfProfileParametersRadioTypeCProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_rates: {
      value: cdktf.stringToHclTerraform(struct!.dataRates),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mandatory_data_rates: {
      value: cdktf.stringToHclTerraform(struct!.mandatoryDataRates),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_power_level: {
      value: cdktf.numberToHclTerraform(struct!.maxPowerLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_power_level: {
      value: cdktf.numberToHclTerraform(struct!.minPowerLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parent_profile: {
      value: cdktf.stringToHclTerraform(struct!.parentProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    power_threshold_v1: {
      value: cdktf.numberToHclTerraform(struct!.powerThresholdV1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radio_channels: {
      value: cdktf.stringToHclTerraform(struct!.radioChannels),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rx_sop_threshold: {
      value: cdktf.stringToHclTerraform(struct!.rxSopThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelessRfProfileParametersRadioTypeCPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessRfProfileParametersRadioTypeCProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataRates !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataRates = this._dataRates;
    }
    if (this._mandatoryDataRates !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandatoryDataRates = this._mandatoryDataRates;
    }
    if (this._maxPowerLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPowerLevel = this._maxPowerLevel;
    }
    if (this._minPowerLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.minPowerLevel = this._minPowerLevel;
    }
    if (this._parentProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentProfile = this._parentProfile;
    }
    if (this._powerThresholdV1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerThresholdV1 = this._powerThresholdV1;
    }
    if (this._radioChannels !== undefined) {
      hasAnyValues = true;
      internalValueResult.radioChannels = this._radioChannels;
    }
    if (this._rxSopThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxSopThreshold = this._rxSopThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessRfProfileParametersRadioTypeCProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataRates = undefined;
      this._mandatoryDataRates = undefined;
      this._maxPowerLevel = undefined;
      this._minPowerLevel = undefined;
      this._parentProfile = undefined;
      this._powerThresholdV1 = undefined;
      this._radioChannels = undefined;
      this._rxSopThreshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataRates = value.dataRates;
      this._mandatoryDataRates = value.mandatoryDataRates;
      this._maxPowerLevel = value.maxPowerLevel;
      this._minPowerLevel = value.minPowerLevel;
      this._parentProfile = value.parentProfile;
      this._powerThresholdV1 = value.powerThresholdV1;
      this._radioChannels = value.radioChannels;
      this._rxSopThreshold = value.rxSopThreshold;
    }
  }

  // data_rates - computed: true, optional: true, required: false
  private _dataRates?: string; 
  public get dataRates() {
    return this.getStringAttribute('data_rates');
  }
  public set dataRates(value: string) {
    this._dataRates = value;
  }
  public resetDataRates() {
    this._dataRates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRatesInput() {
    return this._dataRates;
  }

  // mandatory_data_rates - computed: true, optional: true, required: false
  private _mandatoryDataRates?: string; 
  public get mandatoryDataRates() {
    return this.getStringAttribute('mandatory_data_rates');
  }
  public set mandatoryDataRates(value: string) {
    this._mandatoryDataRates = value;
  }
  public resetMandatoryDataRates() {
    this._mandatoryDataRates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryDataRatesInput() {
    return this._mandatoryDataRates;
  }

  // max_power_level - computed: true, optional: true, required: false
  private _maxPowerLevel?: number; 
  public get maxPowerLevel() {
    return this.getNumberAttribute('max_power_level');
  }
  public set maxPowerLevel(value: number) {
    this._maxPowerLevel = value;
  }
  public resetMaxPowerLevel() {
    this._maxPowerLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPowerLevelInput() {
    return this._maxPowerLevel;
  }

  // min_power_level - computed: true, optional: true, required: false
  private _minPowerLevel?: number; 
  public get minPowerLevel() {
    return this.getNumberAttribute('min_power_level');
  }
  public set minPowerLevel(value: number) {
    this._minPowerLevel = value;
  }
  public resetMinPowerLevel() {
    this._minPowerLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPowerLevelInput() {
    return this._minPowerLevel;
  }

  // parent_profile - computed: true, optional: true, required: false
  private _parentProfile?: string; 
  public get parentProfile() {
    return this.getStringAttribute('parent_profile');
  }
  public set parentProfile(value: string) {
    this._parentProfile = value;
  }
  public resetParentProfile() {
    this._parentProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentProfileInput() {
    return this._parentProfile;
  }

  // power_threshold_v1 - computed: true, optional: true, required: false
  private _powerThresholdV1?: number; 
  public get powerThresholdV1() {
    return this.getNumberAttribute('power_threshold_v1');
  }
  public set powerThresholdV1(value: number) {
    this._powerThresholdV1 = value;
  }
  public resetPowerThresholdV1() {
    this._powerThresholdV1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerThresholdV1Input() {
    return this._powerThresholdV1;
  }

  // radio_channels - computed: true, optional: true, required: false
  private _radioChannels?: string; 
  public get radioChannels() {
    return this.getStringAttribute('radio_channels');
  }
  public set radioChannels(value: string) {
    this._radioChannels = value;
  }
  public resetRadioChannels() {
    this._radioChannels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioChannelsInput() {
    return this._radioChannels;
  }

  // rx_sop_threshold - computed: true, optional: true, required: false
  private _rxSopThreshold?: string; 
  public get rxSopThreshold() {
    return this.getStringAttribute('rx_sop_threshold');
  }
  public set rxSopThreshold(value: string) {
    this._rxSopThreshold = value;
  }
  public resetRxSopThreshold() {
    this._rxSopThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxSopThresholdInput() {
    return this._rxSopThreshold;
  }
}

export class WirelessRfProfileParametersRadioTypeCPropertiesList extends cdktf.ComplexList {
  public internalValue? : WirelessRfProfileParametersRadioTypeCProperties[] | cdktf.IResolvable

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
  public get(index: number): WirelessRfProfileParametersRadioTypeCPropertiesOutputReference {
    return new WirelessRfProfileParametersRadioTypeCPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelessRfProfileParameters {
  /**
  * Channel Width
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_rf_profile#channel_width WirelessRfProfile#channel_width}
  */
  readonly channelWidth?: string;
  /**
  * is Default Rf Profile
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_rf_profile#default_rf_profile WirelessRfProfile#default_rf_profile}
  */
  readonly defaultRfProfile?: string;
  /**
  * Enable Brown Field
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_rf_profile#enable_brown_field WirelessRfProfile#enable_brown_field}
  */
  readonly enableBrownField?: string;
  /**
  * Enable Custom
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_rf_profile#enable_custom WirelessRfProfile#enable_custom}
  */
  readonly enableCustom?: string;
  /**
  * Enable Radio Type A
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_rf_profile#enable_radio_type_a WirelessRfProfile#enable_radio_type_a}
  */
  readonly enableRadioTypeA?: string;
  /**
  * Enable Radio Type B
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_rf_profile#enable_radio_type_b WirelessRfProfile#enable_radio_type_b}
  */
  readonly enableRadioTypeB?: string;
  /**
  * Enable Radio Type C (6GHz)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_rf_profile#enable_radio_type_c WirelessRfProfile#enable_radio_type_c}
  */
  readonly enableRadioTypeC?: string;
  /**
  * RF Profile Name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_rf_profile#name WirelessRfProfile#name}
  */
  readonly name?: string;
  /**
  * rfProfileName path parameter. RF profile name to be deleted(required) *non-custom RF profile cannot be deleted
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_rf_profile#rf_profile_name WirelessRfProfile#rf_profile_name}
  */
  readonly rfProfileName: string;
  /**
  * radio_type_a_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_rf_profile#radio_type_a_properties WirelessRfProfile#radio_type_a_properties}
  */
  readonly radioTypeAProperties?: WirelessRfProfileParametersRadioTypeAProperties[] | cdktf.IResolvable;
  /**
  * radio_type_b_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_rf_profile#radio_type_b_properties WirelessRfProfile#radio_type_b_properties}
  */
  readonly radioTypeBProperties?: WirelessRfProfileParametersRadioTypeBProperties[] | cdktf.IResolvable;
  /**
  * radio_type_c_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_rf_profile#radio_type_c_properties WirelessRfProfile#radio_type_c_properties}
  */
  readonly radioTypeCProperties?: WirelessRfProfileParametersRadioTypeCProperties[] | cdktf.IResolvable;
}

export function wirelessRfProfileParametersToTerraform(struct?: WirelessRfProfileParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel_width: cdktf.stringToTerraform(struct!.channelWidth),
    default_rf_profile: cdktf.stringToTerraform(struct!.defaultRfProfile),
    enable_brown_field: cdktf.stringToTerraform(struct!.enableBrownField),
    enable_custom: cdktf.stringToTerraform(struct!.enableCustom),
    enable_radio_type_a: cdktf.stringToTerraform(struct!.enableRadioTypeA),
    enable_radio_type_b: cdktf.stringToTerraform(struct!.enableRadioTypeB),
    enable_radio_type_c: cdktf.stringToTerraform(struct!.enableRadioTypeC),
    name: cdktf.stringToTerraform(struct!.name),
    rf_profile_name: cdktf.stringToTerraform(struct!.rfProfileName),
    radio_type_a_properties: cdktf.listMapper(wirelessRfProfileParametersRadioTypeAPropertiesToTerraform, true)(struct!.radioTypeAProperties),
    radio_type_b_properties: cdktf.listMapper(wirelessRfProfileParametersRadioTypeBPropertiesToTerraform, true)(struct!.radioTypeBProperties),
    radio_type_c_properties: cdktf.listMapper(wirelessRfProfileParametersRadioTypeCPropertiesToTerraform, true)(struct!.radioTypeCProperties),
  }
}


export function wirelessRfProfileParametersToHclTerraform(struct?: WirelessRfProfileParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel_width: {
      value: cdktf.stringToHclTerraform(struct!.channelWidth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_rf_profile: {
      value: cdktf.stringToHclTerraform(struct!.defaultRfProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_brown_field: {
      value: cdktf.stringToHclTerraform(struct!.enableBrownField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_custom: {
      value: cdktf.stringToHclTerraform(struct!.enableCustom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_radio_type_a: {
      value: cdktf.stringToHclTerraform(struct!.enableRadioTypeA),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_radio_type_b: {
      value: cdktf.stringToHclTerraform(struct!.enableRadioTypeB),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_radio_type_c: {
      value: cdktf.stringToHclTerraform(struct!.enableRadioTypeC),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rf_profile_name: {
      value: cdktf.stringToHclTerraform(struct!.rfProfileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    radio_type_a_properties: {
      value: cdktf.listMapperHcl(wirelessRfProfileParametersRadioTypeAPropertiesToHclTerraform, true)(struct!.radioTypeAProperties),
      isBlock: true,
      type: "list",
      storageClassType: "WirelessRfProfileParametersRadioTypeAPropertiesList",
    },
    radio_type_b_properties: {
      value: cdktf.listMapperHcl(wirelessRfProfileParametersRadioTypeBPropertiesToHclTerraform, true)(struct!.radioTypeBProperties),
      isBlock: true,
      type: "list",
      storageClassType: "WirelessRfProfileParametersRadioTypeBPropertiesList",
    },
    radio_type_c_properties: {
      value: cdktf.listMapperHcl(wirelessRfProfileParametersRadioTypeCPropertiesToHclTerraform, true)(struct!.radioTypeCProperties),
      isBlock: true,
      type: "list",
      storageClassType: "WirelessRfProfileParametersRadioTypeCPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelessRfProfileParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessRfProfileParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channelWidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelWidth = this._channelWidth;
    }
    if (this._defaultRfProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRfProfile = this._defaultRfProfile;
    }
    if (this._enableBrownField !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableBrownField = this._enableBrownField;
    }
    if (this._enableCustom !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCustom = this._enableCustom;
    }
    if (this._enableRadioTypeA !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRadioTypeA = this._enableRadioTypeA;
    }
    if (this._enableRadioTypeB !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRadioTypeB = this._enableRadioTypeB;
    }
    if (this._enableRadioTypeC !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRadioTypeC = this._enableRadioTypeC;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rfProfileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.rfProfileName = this._rfProfileName;
    }
    if (this._radioTypeAProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.radioTypeAProperties = this._radioTypeAProperties?.internalValue;
    }
    if (this._radioTypeBProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.radioTypeBProperties = this._radioTypeBProperties?.internalValue;
    }
    if (this._radioTypeCProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.radioTypeCProperties = this._radioTypeCProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessRfProfileParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channelWidth = undefined;
      this._defaultRfProfile = undefined;
      this._enableBrownField = undefined;
      this._enableCustom = undefined;
      this._enableRadioTypeA = undefined;
      this._enableRadioTypeB = undefined;
      this._enableRadioTypeC = undefined;
      this._name = undefined;
      this._rfProfileName = undefined;
      this._radioTypeAProperties.internalValue = undefined;
      this._radioTypeBProperties.internalValue = undefined;
      this._radioTypeCProperties.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channelWidth = value.channelWidth;
      this._defaultRfProfile = value.defaultRfProfile;
      this._enableBrownField = value.enableBrownField;
      this._enableCustom = value.enableCustom;
      this._enableRadioTypeA = value.enableRadioTypeA;
      this._enableRadioTypeB = value.enableRadioTypeB;
      this._enableRadioTypeC = value.enableRadioTypeC;
      this._name = value.name;
      this._rfProfileName = value.rfProfileName;
      this._radioTypeAProperties.internalValue = value.radioTypeAProperties;
      this._radioTypeBProperties.internalValue = value.radioTypeBProperties;
      this._radioTypeCProperties.internalValue = value.radioTypeCProperties;
    }
  }

  // channel_width - computed: true, optional: true, required: false
  private _channelWidth?: string; 
  public get channelWidth() {
    return this.getStringAttribute('channel_width');
  }
  public set channelWidth(value: string) {
    this._channelWidth = value;
  }
  public resetChannelWidth() {
    this._channelWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelWidthInput() {
    return this._channelWidth;
  }

  // default_rf_profile - computed: true, optional: true, required: false
  private _defaultRfProfile?: string; 
  public get defaultRfProfile() {
    return this.getStringAttribute('default_rf_profile');
  }
  public set defaultRfProfile(value: string) {
    this._defaultRfProfile = value;
  }
  public resetDefaultRfProfile() {
    this._defaultRfProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRfProfileInput() {
    return this._defaultRfProfile;
  }

  // enable_brown_field - computed: true, optional: true, required: false
  private _enableBrownField?: string; 
  public get enableBrownField() {
    return this.getStringAttribute('enable_brown_field');
  }
  public set enableBrownField(value: string) {
    this._enableBrownField = value;
  }
  public resetEnableBrownField() {
    this._enableBrownField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBrownFieldInput() {
    return this._enableBrownField;
  }

  // enable_custom - computed: true, optional: true, required: false
  private _enableCustom?: string; 
  public get enableCustom() {
    return this.getStringAttribute('enable_custom');
  }
  public set enableCustom(value: string) {
    this._enableCustom = value;
  }
  public resetEnableCustom() {
    this._enableCustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCustomInput() {
    return this._enableCustom;
  }

  // enable_radio_type_a - computed: true, optional: true, required: false
  private _enableRadioTypeA?: string; 
  public get enableRadioTypeA() {
    return this.getStringAttribute('enable_radio_type_a');
  }
  public set enableRadioTypeA(value: string) {
    this._enableRadioTypeA = value;
  }
  public resetEnableRadioTypeA() {
    this._enableRadioTypeA = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRadioTypeAInput() {
    return this._enableRadioTypeA;
  }

  // enable_radio_type_b - computed: true, optional: true, required: false
  private _enableRadioTypeB?: string; 
  public get enableRadioTypeB() {
    return this.getStringAttribute('enable_radio_type_b');
  }
  public set enableRadioTypeB(value: string) {
    this._enableRadioTypeB = value;
  }
  public resetEnableRadioTypeB() {
    this._enableRadioTypeB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRadioTypeBInput() {
    return this._enableRadioTypeB;
  }

  // enable_radio_type_c - computed: true, optional: true, required: false
  private _enableRadioTypeC?: string; 
  public get enableRadioTypeC() {
    return this.getStringAttribute('enable_radio_type_c');
  }
  public set enableRadioTypeC(value: string) {
    this._enableRadioTypeC = value;
  }
  public resetEnableRadioTypeC() {
    this._enableRadioTypeC = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRadioTypeCInput() {
    return this._enableRadioTypeC;
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

  // rf_profile_name - computed: false, optional: false, required: true
  private _rfProfileName?: string; 
  public get rfProfileName() {
    return this.getStringAttribute('rf_profile_name');
  }
  public set rfProfileName(value: string) {
    this._rfProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rfProfileNameInput() {
    return this._rfProfileName;
  }

  // radio_type_a_properties - computed: false, optional: true, required: false
  private _radioTypeAProperties = new WirelessRfProfileParametersRadioTypeAPropertiesList(this, "radio_type_a_properties", false);
  public get radioTypeAProperties() {
    return this._radioTypeAProperties;
  }
  public putRadioTypeAProperties(value: WirelessRfProfileParametersRadioTypeAProperties[] | cdktf.IResolvable) {
    this._radioTypeAProperties.internalValue = value;
  }
  public resetRadioTypeAProperties() {
    this._radioTypeAProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeAPropertiesInput() {
    return this._radioTypeAProperties.internalValue;
  }

  // radio_type_b_properties - computed: false, optional: true, required: false
  private _radioTypeBProperties = new WirelessRfProfileParametersRadioTypeBPropertiesList(this, "radio_type_b_properties", false);
  public get radioTypeBProperties() {
    return this._radioTypeBProperties;
  }
  public putRadioTypeBProperties(value: WirelessRfProfileParametersRadioTypeBProperties[] | cdktf.IResolvable) {
    this._radioTypeBProperties.internalValue = value;
  }
  public resetRadioTypeBProperties() {
    this._radioTypeBProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeBPropertiesInput() {
    return this._radioTypeBProperties.internalValue;
  }

  // radio_type_c_properties - computed: false, optional: true, required: false
  private _radioTypeCProperties = new WirelessRfProfileParametersRadioTypeCPropertiesList(this, "radio_type_c_properties", false);
  public get radioTypeCProperties() {
    return this._radioTypeCProperties;
  }
  public putRadioTypeCProperties(value: WirelessRfProfileParametersRadioTypeCProperties[] | cdktf.IResolvable) {
    this._radioTypeCProperties.internalValue = value;
  }
  public resetRadioTypeCProperties() {
    this._radioTypeCProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeCPropertiesInput() {
    return this._radioTypeCProperties.internalValue;
  }
}

export class WirelessRfProfileParametersList extends cdktf.ComplexList {
  public internalValue? : WirelessRfProfileParameters[] | cdktf.IResolvable

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
  public get(index: number): WirelessRfProfileParametersOutputReference {
    return new WirelessRfProfileParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_rf_profile dnacenter_wireless_rf_profile}
*/
export class WirelessRfProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_wireless_rf_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelessRfProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelessRfProfile to import
  * @param importFromId The id of the existing WirelessRfProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_rf_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelessRfProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_wireless_rf_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_rf_profile dnacenter_wireless_rf_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelessRfProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WirelessRfProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_wireless_rf_profile',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21',
        providerVersionConstraint: '1.1.21'
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
    this._parameters.internalValue = config.parameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // item - computed: true, optional: false, required: false
  private _item = new WirelessRfProfileItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new WirelessRfProfileParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: WirelessRfProfileParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parameters: cdktf.listMapper(wirelessRfProfileParametersToTerraform, true)(this._parameters.internalValue),
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
      parameters: {
        value: cdktf.listMapperHcl(wirelessRfProfileParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelessRfProfileParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
