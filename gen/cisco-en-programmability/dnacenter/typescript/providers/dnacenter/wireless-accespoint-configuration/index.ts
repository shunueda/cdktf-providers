// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelessAccespointConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#id WirelessAccespointConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#parameters WirelessAccespointConfiguration#parameters}
  */
  readonly parameters: WirelessAccespointConfigurationParameters;
}
export interface WirelessAccespointConfigurationItem {
}

export function wirelessAccespointConfigurationItemToTerraform(struct?: WirelessAccespointConfigurationItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function wirelessAccespointConfigurationItemToHclTerraform(struct?: WirelessAccespointConfigurationItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class WirelessAccespointConfigurationItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessAccespointConfigurationItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessAccespointConfigurationItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getStringAttribute('task_id');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class WirelessAccespointConfigurationItemList extends cdktf.ComplexList {

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
  public get(index: number): WirelessAccespointConfigurationItemOutputReference {
    return new WirelessAccespointConfigurationItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelessAccespointConfigurationParametersApListStruct {
  /**
  * The current host name of the access point.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#ap_name WirelessAccespointConfiguration#ap_name}
  */
  readonly apName?: string;
  /**
  * The modified hostname of the access point.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#ap_name_new WirelessAccespointConfiguration#ap_name_new}
  */
  readonly apNameNew?: string;
  /**
  * The ethernet MAC address of the access point.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#mac_address WirelessAccespointConfiguration#mac_address}
  */
  readonly macAddress?: string;
}

export function wirelessAccespointConfigurationParametersApListStructToTerraform(struct?: WirelessAccespointConfigurationParametersApListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ap_name: cdktf.stringToTerraform(struct!.apName),
    ap_name_new: cdktf.stringToTerraform(struct!.apNameNew),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
  }
}


export function wirelessAccespointConfigurationParametersApListStructToHclTerraform(struct?: WirelessAccespointConfigurationParametersApListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ap_name: {
      value: cdktf.stringToHclTerraform(struct!.apName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ap_name_new: {
      value: cdktf.stringToHclTerraform(struct!.apNameNew),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelessAccespointConfigurationParametersApListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessAccespointConfigurationParametersApListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apName !== undefined) {
      hasAnyValues = true;
      internalValueResult.apName = this._apName;
    }
    if (this._apNameNew !== undefined) {
      hasAnyValues = true;
      internalValueResult.apNameNew = this._apNameNew;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessAccespointConfigurationParametersApListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apName = undefined;
      this._apNameNew = undefined;
      this._macAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apName = value.apName;
      this._apNameNew = value.apNameNew;
      this._macAddress = value.macAddress;
    }
  }

  // ap_name - computed: true, optional: true, required: false
  private _apName?: string; 
  public get apName() {
    return this.getStringAttribute('ap_name');
  }
  public set apName(value: string) {
    this._apName = value;
  }
  public resetApName() {
    this._apName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apNameInput() {
    return this._apName;
  }

  // ap_name_new - computed: true, optional: true, required: false
  private _apNameNew?: string; 
  public get apNameNew() {
    return this.getStringAttribute('ap_name_new');
  }
  public set apNameNew(value: string) {
    this._apNameNew = value;
  }
  public resetApNameNew() {
    this._apNameNew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apNameNewInput() {
    return this._apNameNew;
  }

  // mac_address - computed: true, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }
}

export class WirelessAccespointConfigurationParametersApListStructList extends cdktf.ComplexList {
  public internalValue? : WirelessAccespointConfigurationParametersApListStruct[] | cdktf.IResolvable

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
  public get(index: number): WirelessAccespointConfigurationParametersApListStructOutputReference {
    return new WirelessAccespointConfigurationParametersApListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelessAccespointConfigurationParametersPrimaryIpAddress {
  /**
  * Configure the IP address for an access point's primary controller.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#address WirelessAccespointConfiguration#address}
  */
  readonly address?: string;
}

export function wirelessAccespointConfigurationParametersPrimaryIpAddressToTerraform(struct?: WirelessAccespointConfigurationParametersPrimaryIpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
  }
}


export function wirelessAccespointConfigurationParametersPrimaryIpAddressToHclTerraform(struct?: WirelessAccespointConfigurationParametersPrimaryIpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelessAccespointConfigurationParametersPrimaryIpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessAccespointConfigurationParametersPrimaryIpAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessAccespointConfigurationParametersPrimaryIpAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
    }
  }

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }
}

export class WirelessAccespointConfigurationParametersPrimaryIpAddressList extends cdktf.ComplexList {
  public internalValue? : WirelessAccespointConfigurationParametersPrimaryIpAddress[] | cdktf.IResolvable

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
  public get(index: number): WirelessAccespointConfigurationParametersPrimaryIpAddressOutputReference {
    return new WirelessAccespointConfigurationParametersPrimaryIpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelessAccespointConfigurationParametersRadioConfigurations {
  /**
  * Configure the admin status on the specified radio for an access point. Set this parameter's value to "true" to enable it and "false" to disable it.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#admin_status WirelessAccespointConfiguration#admin_status}
  */
  readonly adminStatus?: string;
  /**
  * Configure the antenna cable name on the specified radio for an access point. If cable loss needs to be configured, set this parameter's value to "other". 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#antenna_cable_name WirelessAccespointConfiguration#antenna_cable_name}
  */
  readonly antennaCableName?: string;
  /**
  * Configure the antenna degree on the specified radio for an access point.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#antenna_degree WirelessAccespointConfiguration#antenna_degree}
  */
  readonly antennaDegree?: number;
  /**
  * Configure the antenna elevation angle on the specified radio for an access point.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#antenna_elev_angle_degree WirelessAccespointConfiguration#antenna_elev_angle_degree}
  */
  readonly antennaElevAngleDegree?: number;
  /**
  * Configure the antenna elevation angle direction on the specified radio for an access point: for up, set "1"; for down, set "-1".
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#antenna_elev_angle_sign WirelessAccespointConfiguration#antenna_elev_angle_sign}
  */
  readonly antennaElevAngleSign?: number;
  /**
  * Configure the antenna gain on the specified radio for an access point by setting a decimal value (in dBi).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#antenna_gain WirelessAccespointConfiguration#antenna_gain}
  */
  readonly antennaGain?: number;
  /**
  * Configure the antenna pattern name on the specified radio for an access point. If antenna gain needs to be configured, set this parameter's value to "other".
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#antenna_pattern_name WirelessAccespointConfiguration#antenna_pattern_name}
  */
  readonly antennaPatternName?: string;
  /**
  * Configure the cable loss on the specified radio for an access point by setting a decimal value (in dBi).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#cable_loss WirelessAccespointConfiguration#cable_loss}
  */
  readonly cableLoss?: number;
  /**
  * Configure the channel assignment mode on the specified radio for an access point: for global mode, set "1"; and for custom mode, set "2".
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#channel_assignment_mode WirelessAccespointConfiguration#channel_assignment_mode}
  */
  readonly channelAssignmentMode?: number;
  /**
  * Configure the channel number on the specified radio for an access point.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#channel_number WirelessAccespointConfiguration#channel_number}
  */
  readonly channelNumber?: number;
  /**
  * Configure the channel width on the specified radio for an access point: for 20 MHz, set "3"; for 40 MHz, set "4"; for 80 MHz, set "5"; and for 160 MHz, set "6".
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#channel_width WirelessAccespointConfiguration#channel_width}
  */
  readonly channelWidth?: number;
  /**
  * Configure CleanAir or Spectrum Intelligence on the specified radio for an access point. Set this parameter's value to "0" to disable the feature or "1" to enable it.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#clean_air_si WirelessAccespointConfiguration#clean_air_si}
  */
  readonly cleanAirSi?: number;
  /**
  * To change the admin status on the specified radio for an access point, set this parameter's value to "true".
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#configure_admin_status WirelessAccespointConfiguration#configure_admin_status}
  */
  readonly configureAdminStatus?: string;
  /**
  * To change the antenna cable name on the specified radio for an access point, set this parameter's value to "true".
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#configure_antenna_cable WirelessAccespointConfiguration#configure_antenna_cable}
  */
  readonly configureAntennaCable?: string;
  /**
  * To change the antenna degree on the specified radio for an access point, set this parameter's value to "true".
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#configure_antenna_degree WirelessAccespointConfiguration#configure_antenna_degree}
  */
  readonly configureAntennaDegree?: string;
  /**
  * To change the antenna pattern name on the specified radio for an access point, set the value for this parameter to "true".
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#configure_antenna_pattern_name WirelessAccespointConfiguration#configure_antenna_pattern_name}
  */
  readonly configureAntennaPatternName?: string;
  /**
  * To change the channel on the specified radio for an access point, set this parameter's value to "true".
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#configure_channel WirelessAccespointConfiguration#configure_channel}
  */
  readonly configureChannel?: string;
  /**
  * To change the channel width on the specified radio for an access point, set this parameter's value to "true".
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#configure_channel_width WirelessAccespointConfiguration#configure_channel_width}
  */
  readonly configureChannelWidth?: string;
  /**
  * To enable or disable either CleanAir or Spectrum Intelligence on the specified radio for an access point, set this parameter's value to "true".
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#configure_clean_air_si WirelessAccespointConfiguration#configure_clean_air_si}
  */
  readonly configureCleanAirSi?: string;
  /**
  * To change the elevation angle degree on the specified radio for an access point, set this parameter's value to "true".
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#configure_elev_angle_degree WirelessAccespointConfiguration#configure_elev_angle_degree}
  */
  readonly configureElevAngleDegree?: string;
  /**
  * To change the power assignment mode on the specified radio for an access point, set this parameter's value to "true".
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#configure_power WirelessAccespointConfiguration#configure_power}
  */
  readonly configurePower?: string;
  /**
  * To change the radio role on the specified radio for an access point, set this parameter's value to "true".
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#configure_radio_role_assignment WirelessAccespointConfiguration#configure_radio_role_assignment}
  */
  readonly configureRadioRoleAssignment?: string;
  /**
  * Configure the power assignment mode on the specified radio for an access point: for global mode, set "1"; and for custom mode, set "2".
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#power_assignment_mode WirelessAccespointConfiguration#power_assignment_mode}
  */
  readonly powerAssignmentMode?: number;
  /**
  * Configure the power level on the specified radio for an access point by setting a value between 1 and 8.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#powerlevel WirelessAccespointConfiguration#powerlevel}
  */
  readonly powerlevel?: number;
  /**
  * Configure the band on the specified radio for an access point: for 2.4 GHz, set "RADIO24"; for 5 GHz, set "RADIO5".
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#radio_band WirelessAccespointConfiguration#radio_band}
  */
  readonly radioBand?: string;
  /**
  * Configure one of the following roles on the specified radio for an access point: "auto", "serving", or "monitor".
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#radio_role_assignment WirelessAccespointConfiguration#radio_role_assignment}
  */
  readonly radioRoleAssignment?: string;
  /**
  * Configure an access point's radio band: for 2.4 GHz, set "1"; for 5 GHz, set "2"; for XOR, set "3"; and for 6 GHz, set "6".
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#radio_type WirelessAccespointConfiguration#radio_type}
  */
  readonly radioType?: number;
}

export function wirelessAccespointConfigurationParametersRadioConfigurationsToTerraform(struct?: WirelessAccespointConfigurationParametersRadioConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_status: cdktf.stringToTerraform(struct!.adminStatus),
    antenna_cable_name: cdktf.stringToTerraform(struct!.antennaCableName),
    antenna_degree: cdktf.numberToTerraform(struct!.antennaDegree),
    antenna_elev_angle_degree: cdktf.numberToTerraform(struct!.antennaElevAngleDegree),
    antenna_elev_angle_sign: cdktf.numberToTerraform(struct!.antennaElevAngleSign),
    antenna_gain: cdktf.numberToTerraform(struct!.antennaGain),
    antenna_pattern_name: cdktf.stringToTerraform(struct!.antennaPatternName),
    cable_loss: cdktf.numberToTerraform(struct!.cableLoss),
    channel_assignment_mode: cdktf.numberToTerraform(struct!.channelAssignmentMode),
    channel_number: cdktf.numberToTerraform(struct!.channelNumber),
    channel_width: cdktf.numberToTerraform(struct!.channelWidth),
    clean_air_si: cdktf.numberToTerraform(struct!.cleanAirSi),
    configure_admin_status: cdktf.stringToTerraform(struct!.configureAdminStatus),
    configure_antenna_cable: cdktf.stringToTerraform(struct!.configureAntennaCable),
    configure_antenna_degree: cdktf.stringToTerraform(struct!.configureAntennaDegree),
    configure_antenna_pattern_name: cdktf.stringToTerraform(struct!.configureAntennaPatternName),
    configure_channel: cdktf.stringToTerraform(struct!.configureChannel),
    configure_channel_width: cdktf.stringToTerraform(struct!.configureChannelWidth),
    configure_clean_air_si: cdktf.stringToTerraform(struct!.configureCleanAirSi),
    configure_elev_angle_degree: cdktf.stringToTerraform(struct!.configureElevAngleDegree),
    configure_power: cdktf.stringToTerraform(struct!.configurePower),
    configure_radio_role_assignment: cdktf.stringToTerraform(struct!.configureRadioRoleAssignment),
    power_assignment_mode: cdktf.numberToTerraform(struct!.powerAssignmentMode),
    powerlevel: cdktf.numberToTerraform(struct!.powerlevel),
    radio_band: cdktf.stringToTerraform(struct!.radioBand),
    radio_role_assignment: cdktf.stringToTerraform(struct!.radioRoleAssignment),
    radio_type: cdktf.numberToTerraform(struct!.radioType),
  }
}


export function wirelessAccespointConfigurationParametersRadioConfigurationsToHclTerraform(struct?: WirelessAccespointConfigurationParametersRadioConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_status: {
      value: cdktf.stringToHclTerraform(struct!.adminStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    antenna_cable_name: {
      value: cdktf.stringToHclTerraform(struct!.antennaCableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    antenna_degree: {
      value: cdktf.numberToHclTerraform(struct!.antennaDegree),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    antenna_elev_angle_degree: {
      value: cdktf.numberToHclTerraform(struct!.antennaElevAngleDegree),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    antenna_elev_angle_sign: {
      value: cdktf.numberToHclTerraform(struct!.antennaElevAngleSign),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    antenna_gain: {
      value: cdktf.numberToHclTerraform(struct!.antennaGain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    antenna_pattern_name: {
      value: cdktf.stringToHclTerraform(struct!.antennaPatternName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cable_loss: {
      value: cdktf.numberToHclTerraform(struct!.cableLoss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    channel_assignment_mode: {
      value: cdktf.numberToHclTerraform(struct!.channelAssignmentMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    channel_number: {
      value: cdktf.numberToHclTerraform(struct!.channelNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    channel_width: {
      value: cdktf.numberToHclTerraform(struct!.channelWidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    clean_air_si: {
      value: cdktf.numberToHclTerraform(struct!.cleanAirSi),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    configure_admin_status: {
      value: cdktf.stringToHclTerraform(struct!.configureAdminStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configure_antenna_cable: {
      value: cdktf.stringToHclTerraform(struct!.configureAntennaCable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configure_antenna_degree: {
      value: cdktf.stringToHclTerraform(struct!.configureAntennaDegree),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configure_antenna_pattern_name: {
      value: cdktf.stringToHclTerraform(struct!.configureAntennaPatternName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configure_channel: {
      value: cdktf.stringToHclTerraform(struct!.configureChannel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configure_channel_width: {
      value: cdktf.stringToHclTerraform(struct!.configureChannelWidth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configure_clean_air_si: {
      value: cdktf.stringToHclTerraform(struct!.configureCleanAirSi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configure_elev_angle_degree: {
      value: cdktf.stringToHclTerraform(struct!.configureElevAngleDegree),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configure_power: {
      value: cdktf.stringToHclTerraform(struct!.configurePower),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configure_radio_role_assignment: {
      value: cdktf.stringToHclTerraform(struct!.configureRadioRoleAssignment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    power_assignment_mode: {
      value: cdktf.numberToHclTerraform(struct!.powerAssignmentMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    powerlevel: {
      value: cdktf.numberToHclTerraform(struct!.powerlevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radio_band: {
      value: cdktf.stringToHclTerraform(struct!.radioBand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    radio_role_assignment: {
      value: cdktf.stringToHclTerraform(struct!.radioRoleAssignment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    radio_type: {
      value: cdktf.numberToHclTerraform(struct!.radioType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelessAccespointConfigurationParametersRadioConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessAccespointConfigurationParametersRadioConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminStatus = this._adminStatus;
    }
    if (this._antennaCableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.antennaCableName = this._antennaCableName;
    }
    if (this._antennaDegree !== undefined) {
      hasAnyValues = true;
      internalValueResult.antennaDegree = this._antennaDegree;
    }
    if (this._antennaElevAngleDegree !== undefined) {
      hasAnyValues = true;
      internalValueResult.antennaElevAngleDegree = this._antennaElevAngleDegree;
    }
    if (this._antennaElevAngleSign !== undefined) {
      hasAnyValues = true;
      internalValueResult.antennaElevAngleSign = this._antennaElevAngleSign;
    }
    if (this._antennaGain !== undefined) {
      hasAnyValues = true;
      internalValueResult.antennaGain = this._antennaGain;
    }
    if (this._antennaPatternName !== undefined) {
      hasAnyValues = true;
      internalValueResult.antennaPatternName = this._antennaPatternName;
    }
    if (this._cableLoss !== undefined) {
      hasAnyValues = true;
      internalValueResult.cableLoss = this._cableLoss;
    }
    if (this._channelAssignmentMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelAssignmentMode = this._channelAssignmentMode;
    }
    if (this._channelNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelNumber = this._channelNumber;
    }
    if (this._channelWidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelWidth = this._channelWidth;
    }
    if (this._cleanAirSi !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanAirSi = this._cleanAirSi;
    }
    if (this._configureAdminStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.configureAdminStatus = this._configureAdminStatus;
    }
    if (this._configureAntennaCable !== undefined) {
      hasAnyValues = true;
      internalValueResult.configureAntennaCable = this._configureAntennaCable;
    }
    if (this._configureAntennaDegree !== undefined) {
      hasAnyValues = true;
      internalValueResult.configureAntennaDegree = this._configureAntennaDegree;
    }
    if (this._configureAntennaPatternName !== undefined) {
      hasAnyValues = true;
      internalValueResult.configureAntennaPatternName = this._configureAntennaPatternName;
    }
    if (this._configureChannel !== undefined) {
      hasAnyValues = true;
      internalValueResult.configureChannel = this._configureChannel;
    }
    if (this._configureChannelWidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.configureChannelWidth = this._configureChannelWidth;
    }
    if (this._configureCleanAirSi !== undefined) {
      hasAnyValues = true;
      internalValueResult.configureCleanAirSi = this._configureCleanAirSi;
    }
    if (this._configureElevAngleDegree !== undefined) {
      hasAnyValues = true;
      internalValueResult.configureElevAngleDegree = this._configureElevAngleDegree;
    }
    if (this._configurePower !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurePower = this._configurePower;
    }
    if (this._configureRadioRoleAssignment !== undefined) {
      hasAnyValues = true;
      internalValueResult.configureRadioRoleAssignment = this._configureRadioRoleAssignment;
    }
    if (this._powerAssignmentMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerAssignmentMode = this._powerAssignmentMode;
    }
    if (this._powerlevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerlevel = this._powerlevel;
    }
    if (this._radioBand !== undefined) {
      hasAnyValues = true;
      internalValueResult.radioBand = this._radioBand;
    }
    if (this._radioRoleAssignment !== undefined) {
      hasAnyValues = true;
      internalValueResult.radioRoleAssignment = this._radioRoleAssignment;
    }
    if (this._radioType !== undefined) {
      hasAnyValues = true;
      internalValueResult.radioType = this._radioType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessAccespointConfigurationParametersRadioConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminStatus = undefined;
      this._antennaCableName = undefined;
      this._antennaDegree = undefined;
      this._antennaElevAngleDegree = undefined;
      this._antennaElevAngleSign = undefined;
      this._antennaGain = undefined;
      this._antennaPatternName = undefined;
      this._cableLoss = undefined;
      this._channelAssignmentMode = undefined;
      this._channelNumber = undefined;
      this._channelWidth = undefined;
      this._cleanAirSi = undefined;
      this._configureAdminStatus = undefined;
      this._configureAntennaCable = undefined;
      this._configureAntennaDegree = undefined;
      this._configureAntennaPatternName = undefined;
      this._configureChannel = undefined;
      this._configureChannelWidth = undefined;
      this._configureCleanAirSi = undefined;
      this._configureElevAngleDegree = undefined;
      this._configurePower = undefined;
      this._configureRadioRoleAssignment = undefined;
      this._powerAssignmentMode = undefined;
      this._powerlevel = undefined;
      this._radioBand = undefined;
      this._radioRoleAssignment = undefined;
      this._radioType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminStatus = value.adminStatus;
      this._antennaCableName = value.antennaCableName;
      this._antennaDegree = value.antennaDegree;
      this._antennaElevAngleDegree = value.antennaElevAngleDegree;
      this._antennaElevAngleSign = value.antennaElevAngleSign;
      this._antennaGain = value.antennaGain;
      this._antennaPatternName = value.antennaPatternName;
      this._cableLoss = value.cableLoss;
      this._channelAssignmentMode = value.channelAssignmentMode;
      this._channelNumber = value.channelNumber;
      this._channelWidth = value.channelWidth;
      this._cleanAirSi = value.cleanAirSi;
      this._configureAdminStatus = value.configureAdminStatus;
      this._configureAntennaCable = value.configureAntennaCable;
      this._configureAntennaDegree = value.configureAntennaDegree;
      this._configureAntennaPatternName = value.configureAntennaPatternName;
      this._configureChannel = value.configureChannel;
      this._configureChannelWidth = value.configureChannelWidth;
      this._configureCleanAirSi = value.configureCleanAirSi;
      this._configureElevAngleDegree = value.configureElevAngleDegree;
      this._configurePower = value.configurePower;
      this._configureRadioRoleAssignment = value.configureRadioRoleAssignment;
      this._powerAssignmentMode = value.powerAssignmentMode;
      this._powerlevel = value.powerlevel;
      this._radioBand = value.radioBand;
      this._radioRoleAssignment = value.radioRoleAssignment;
      this._radioType = value.radioType;
    }
  }

  // admin_status - computed: true, optional: true, required: false
  private _adminStatus?: string; 
  public get adminStatus() {
    return this.getStringAttribute('admin_status');
  }
  public set adminStatus(value: string) {
    this._adminStatus = value;
  }
  public resetAdminStatus() {
    this._adminStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStatusInput() {
    return this._adminStatus;
  }

  // antenna_cable_name - computed: true, optional: true, required: false
  private _antennaCableName?: string; 
  public get antennaCableName() {
    return this.getStringAttribute('antenna_cable_name');
  }
  public set antennaCableName(value: string) {
    this._antennaCableName = value;
  }
  public resetAntennaCableName() {
    this._antennaCableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antennaCableNameInput() {
    return this._antennaCableName;
  }

  // antenna_degree - computed: true, optional: true, required: false
  private _antennaDegree?: number; 
  public get antennaDegree() {
    return this.getNumberAttribute('antenna_degree');
  }
  public set antennaDegree(value: number) {
    this._antennaDegree = value;
  }
  public resetAntennaDegree() {
    this._antennaDegree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antennaDegreeInput() {
    return this._antennaDegree;
  }

  // antenna_elev_angle_degree - computed: true, optional: true, required: false
  private _antennaElevAngleDegree?: number; 
  public get antennaElevAngleDegree() {
    return this.getNumberAttribute('antenna_elev_angle_degree');
  }
  public set antennaElevAngleDegree(value: number) {
    this._antennaElevAngleDegree = value;
  }
  public resetAntennaElevAngleDegree() {
    this._antennaElevAngleDegree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antennaElevAngleDegreeInput() {
    return this._antennaElevAngleDegree;
  }

  // antenna_elev_angle_sign - computed: true, optional: true, required: false
  private _antennaElevAngleSign?: number; 
  public get antennaElevAngleSign() {
    return this.getNumberAttribute('antenna_elev_angle_sign');
  }
  public set antennaElevAngleSign(value: number) {
    this._antennaElevAngleSign = value;
  }
  public resetAntennaElevAngleSign() {
    this._antennaElevAngleSign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antennaElevAngleSignInput() {
    return this._antennaElevAngleSign;
  }

  // antenna_gain - computed: true, optional: true, required: false
  private _antennaGain?: number; 
  public get antennaGain() {
    return this.getNumberAttribute('antenna_gain');
  }
  public set antennaGain(value: number) {
    this._antennaGain = value;
  }
  public resetAntennaGain() {
    this._antennaGain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antennaGainInput() {
    return this._antennaGain;
  }

  // antenna_pattern_name - computed: true, optional: true, required: false
  private _antennaPatternName?: string; 
  public get antennaPatternName() {
    return this.getStringAttribute('antenna_pattern_name');
  }
  public set antennaPatternName(value: string) {
    this._antennaPatternName = value;
  }
  public resetAntennaPatternName() {
    this._antennaPatternName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antennaPatternNameInput() {
    return this._antennaPatternName;
  }

  // cable_loss - computed: true, optional: true, required: false
  private _cableLoss?: number; 
  public get cableLoss() {
    return this.getNumberAttribute('cable_loss');
  }
  public set cableLoss(value: number) {
    this._cableLoss = value;
  }
  public resetCableLoss() {
    this._cableLoss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cableLossInput() {
    return this._cableLoss;
  }

  // channel_assignment_mode - computed: true, optional: true, required: false
  private _channelAssignmentMode?: number; 
  public get channelAssignmentMode() {
    return this.getNumberAttribute('channel_assignment_mode');
  }
  public set channelAssignmentMode(value: number) {
    this._channelAssignmentMode = value;
  }
  public resetChannelAssignmentMode() {
    this._channelAssignmentMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelAssignmentModeInput() {
    return this._channelAssignmentMode;
  }

  // channel_number - computed: true, optional: true, required: false
  private _channelNumber?: number; 
  public get channelNumber() {
    return this.getNumberAttribute('channel_number');
  }
  public set channelNumber(value: number) {
    this._channelNumber = value;
  }
  public resetChannelNumber() {
    this._channelNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelNumberInput() {
    return this._channelNumber;
  }

  // channel_width - computed: true, optional: true, required: false
  private _channelWidth?: number; 
  public get channelWidth() {
    return this.getNumberAttribute('channel_width');
  }
  public set channelWidth(value: number) {
    this._channelWidth = value;
  }
  public resetChannelWidth() {
    this._channelWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelWidthInput() {
    return this._channelWidth;
  }

  // clean_air_si - computed: true, optional: true, required: false
  private _cleanAirSi?: number; 
  public get cleanAirSi() {
    return this.getNumberAttribute('clean_air_si');
  }
  public set cleanAirSi(value: number) {
    this._cleanAirSi = value;
  }
  public resetCleanAirSi() {
    this._cleanAirSi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanAirSiInput() {
    return this._cleanAirSi;
  }

  // configure_admin_status - computed: true, optional: true, required: false
  private _configureAdminStatus?: string; 
  public get configureAdminStatus() {
    return this.getStringAttribute('configure_admin_status');
  }
  public set configureAdminStatus(value: string) {
    this._configureAdminStatus = value;
  }
  public resetConfigureAdminStatus() {
    this._configureAdminStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configureAdminStatusInput() {
    return this._configureAdminStatus;
  }

  // configure_antenna_cable - computed: true, optional: true, required: false
  private _configureAntennaCable?: string; 
  public get configureAntennaCable() {
    return this.getStringAttribute('configure_antenna_cable');
  }
  public set configureAntennaCable(value: string) {
    this._configureAntennaCable = value;
  }
  public resetConfigureAntennaCable() {
    this._configureAntennaCable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configureAntennaCableInput() {
    return this._configureAntennaCable;
  }

  // configure_antenna_degree - computed: true, optional: true, required: false
  private _configureAntennaDegree?: string; 
  public get configureAntennaDegree() {
    return this.getStringAttribute('configure_antenna_degree');
  }
  public set configureAntennaDegree(value: string) {
    this._configureAntennaDegree = value;
  }
  public resetConfigureAntennaDegree() {
    this._configureAntennaDegree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configureAntennaDegreeInput() {
    return this._configureAntennaDegree;
  }

  // configure_antenna_pattern_name - computed: true, optional: true, required: false
  private _configureAntennaPatternName?: string; 
  public get configureAntennaPatternName() {
    return this.getStringAttribute('configure_antenna_pattern_name');
  }
  public set configureAntennaPatternName(value: string) {
    this._configureAntennaPatternName = value;
  }
  public resetConfigureAntennaPatternName() {
    this._configureAntennaPatternName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configureAntennaPatternNameInput() {
    return this._configureAntennaPatternName;
  }

  // configure_channel - computed: true, optional: true, required: false
  private _configureChannel?: string; 
  public get configureChannel() {
    return this.getStringAttribute('configure_channel');
  }
  public set configureChannel(value: string) {
    this._configureChannel = value;
  }
  public resetConfigureChannel() {
    this._configureChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configureChannelInput() {
    return this._configureChannel;
  }

  // configure_channel_width - computed: true, optional: true, required: false
  private _configureChannelWidth?: string; 
  public get configureChannelWidth() {
    return this.getStringAttribute('configure_channel_width');
  }
  public set configureChannelWidth(value: string) {
    this._configureChannelWidth = value;
  }
  public resetConfigureChannelWidth() {
    this._configureChannelWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configureChannelWidthInput() {
    return this._configureChannelWidth;
  }

  // configure_clean_air_si - computed: true, optional: true, required: false
  private _configureCleanAirSi?: string; 
  public get configureCleanAirSi() {
    return this.getStringAttribute('configure_clean_air_si');
  }
  public set configureCleanAirSi(value: string) {
    this._configureCleanAirSi = value;
  }
  public resetConfigureCleanAirSi() {
    this._configureCleanAirSi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configureCleanAirSiInput() {
    return this._configureCleanAirSi;
  }

  // configure_elev_angle_degree - computed: true, optional: true, required: false
  private _configureElevAngleDegree?: string; 
  public get configureElevAngleDegree() {
    return this.getStringAttribute('configure_elev_angle_degree');
  }
  public set configureElevAngleDegree(value: string) {
    this._configureElevAngleDegree = value;
  }
  public resetConfigureElevAngleDegree() {
    this._configureElevAngleDegree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configureElevAngleDegreeInput() {
    return this._configureElevAngleDegree;
  }

  // configure_power - computed: true, optional: true, required: false
  private _configurePower?: string; 
  public get configurePower() {
    return this.getStringAttribute('configure_power');
  }
  public set configurePower(value: string) {
    this._configurePower = value;
  }
  public resetConfigurePower() {
    this._configurePower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurePowerInput() {
    return this._configurePower;
  }

  // configure_radio_role_assignment - computed: true, optional: true, required: false
  private _configureRadioRoleAssignment?: string; 
  public get configureRadioRoleAssignment() {
    return this.getStringAttribute('configure_radio_role_assignment');
  }
  public set configureRadioRoleAssignment(value: string) {
    this._configureRadioRoleAssignment = value;
  }
  public resetConfigureRadioRoleAssignment() {
    this._configureRadioRoleAssignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configureRadioRoleAssignmentInput() {
    return this._configureRadioRoleAssignment;
  }

  // power_assignment_mode - computed: true, optional: true, required: false
  private _powerAssignmentMode?: number; 
  public get powerAssignmentMode() {
    return this.getNumberAttribute('power_assignment_mode');
  }
  public set powerAssignmentMode(value: number) {
    this._powerAssignmentMode = value;
  }
  public resetPowerAssignmentMode() {
    this._powerAssignmentMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerAssignmentModeInput() {
    return this._powerAssignmentMode;
  }

  // powerlevel - computed: true, optional: true, required: false
  private _powerlevel?: number; 
  public get powerlevel() {
    return this.getNumberAttribute('powerlevel');
  }
  public set powerlevel(value: number) {
    this._powerlevel = value;
  }
  public resetPowerlevel() {
    this._powerlevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerlevelInput() {
    return this._powerlevel;
  }

  // radio_band - computed: true, optional: true, required: false
  private _radioBand?: string; 
  public get radioBand() {
    return this.getStringAttribute('radio_band');
  }
  public set radioBand(value: string) {
    this._radioBand = value;
  }
  public resetRadioBand() {
    this._radioBand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioBandInput() {
    return this._radioBand;
  }

  // radio_role_assignment - computed: true, optional: true, required: false
  private _radioRoleAssignment?: string; 
  public get radioRoleAssignment() {
    return this.getStringAttribute('radio_role_assignment');
  }
  public set radioRoleAssignment(value: string) {
    this._radioRoleAssignment = value;
  }
  public resetRadioRoleAssignment() {
    this._radioRoleAssignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioRoleAssignmentInput() {
    return this._radioRoleAssignment;
  }

  // radio_type - computed: true, optional: true, required: false
  private _radioType?: number; 
  public get radioType() {
    return this.getNumberAttribute('radio_type');
  }
  public set radioType(value: number) {
    this._radioType = value;
  }
  public resetRadioType() {
    this._radioType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeInput() {
    return this._radioType;
  }
}

export class WirelessAccespointConfigurationParametersRadioConfigurationsList extends cdktf.ComplexList {
  public internalValue? : WirelessAccespointConfigurationParametersRadioConfigurations[] | cdktf.IResolvable

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
  public get(index: number): WirelessAccespointConfigurationParametersRadioConfigurationsOutputReference {
    return new WirelessAccespointConfigurationParametersRadioConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelessAccespointConfigurationParametersSecondaryIpAddress {
  /**
  * Configure the IP address for an access point's secondary controller.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#address WirelessAccespointConfiguration#address}
  */
  readonly address?: string;
}

export function wirelessAccespointConfigurationParametersSecondaryIpAddressToTerraform(struct?: WirelessAccespointConfigurationParametersSecondaryIpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
  }
}


export function wirelessAccespointConfigurationParametersSecondaryIpAddressToHclTerraform(struct?: WirelessAccespointConfigurationParametersSecondaryIpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelessAccespointConfigurationParametersSecondaryIpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessAccespointConfigurationParametersSecondaryIpAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessAccespointConfigurationParametersSecondaryIpAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
    }
  }

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }
}

export class WirelessAccespointConfigurationParametersSecondaryIpAddressList extends cdktf.ComplexList {
  public internalValue? : WirelessAccespointConfigurationParametersSecondaryIpAddress[] | cdktf.IResolvable

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
  public get(index: number): WirelessAccespointConfigurationParametersSecondaryIpAddressOutputReference {
    return new WirelessAccespointConfigurationParametersSecondaryIpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelessAccespointConfigurationParametersTertiaryIpAddress {
  /**
  * Configure the IP address for an access point's tertiary controller.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#address WirelessAccespointConfiguration#address}
  */
  readonly address?: string;
}

export function wirelessAccespointConfigurationParametersTertiaryIpAddressToTerraform(struct?: WirelessAccespointConfigurationParametersTertiaryIpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
  }
}


export function wirelessAccespointConfigurationParametersTertiaryIpAddressToHclTerraform(struct?: WirelessAccespointConfigurationParametersTertiaryIpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelessAccespointConfigurationParametersTertiaryIpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessAccespointConfigurationParametersTertiaryIpAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessAccespointConfigurationParametersTertiaryIpAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
    }
  }

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }
}

export class WirelessAccespointConfigurationParametersTertiaryIpAddressList extends cdktf.ComplexList {
  public internalValue? : WirelessAccespointConfigurationParametersTertiaryIpAddress[] | cdktf.IResolvable

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
  public get(index: number): WirelessAccespointConfigurationParametersTertiaryIpAddressOutputReference {
    return new WirelessAccespointConfigurationParametersTertiaryIpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelessAccespointConfigurationParameters {
  /**
  * Configure the access point's admin status. Set this parameter's value to "true" to enable it and "false" to disable it.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#admin_status WirelessAccespointConfiguration#admin_status}
  */
  readonly adminStatus?: string;
  /**
  * Configure the height of the access point by setting a value between 3 and height of the floor.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#ap_height WirelessAccespointConfiguration#ap_height}
  */
  readonly apHeight?: number;
  /**
  * Configure the access point's mode: for local/flexconnect mode, set "0"; for monitor mode, set "1"; for sniffer mode, set "4"; and for bridge/flex+bridge mode, set "5".
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#ap_mode WirelessAccespointConfiguration#ap_mode}
  */
  readonly apMode?: number;
  /**
  * To change the access point's admin status, set this parameter's value to "true".
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#configure_admin_status WirelessAccespointConfiguration#configure_admin_status}
  */
  readonly configureAdminStatus?: string;
  /**
  * To change the access point's height, set this parameter's value to "true".
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#configure_ap_height WirelessAccespointConfiguration#configure_ap_height}
  */
  readonly configureApHeight?: string;
  /**
  * To change the access point's mode, set this parameter's value to "true".
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#configure_ap_mode WirelessAccespointConfiguration#configure_ap_mode}
  */
  readonly configureApMode?: string;
  /**
  * To change the access point's failover priority, set this parameter's value to "true".
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#configure_failover_priority WirelessAccespointConfiguration#configure_failover_priority}
  */
  readonly configureFailoverPriority?: string;
  /**
  * To change the access point's HA controller, set this parameter's value to "true".
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#configure_hacontroller WirelessAccespointConfiguration#configure_hacontroller}
  */
  readonly configureHacontroller?: string;
  /**
  * To change the access point's LED brightness level, set this parameter's value to "true".
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#configure_led_brightness_level WirelessAccespointConfiguration#configure_led_brightness_level}
  */
  readonly configureLedBrightnessLevel?: string;
  /**
  * To change the access point's LED status, set this parameter's value to "true".
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#configure_led_status WirelessAccespointConfiguration#configure_led_status}
  */
  readonly configureLedStatus?: string;
  /**
  * To change the access point's location, set this parameter's value to "true".
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#configure_location WirelessAccespointConfiguration#configure_location}
  */
  readonly configureLocation?: string;
  /**
  * Configure the acess point's failover priority: for low, set "1"; for medium, set "2"; for high, set "3"; and for critical, set "4".
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#failover_priority WirelessAccespointConfiguration#failover_priority}
  */
  readonly failoverPriority?: number;
  /**
  * Configure the access point's LED brightness level by setting a value between 1 and 8.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#led_brightness_level WirelessAccespointConfiguration#led_brightness_level}
  */
  readonly ledBrightnessLevel?: number;
  /**
  * Configure the access point's LED status. Set "true" to enable its status and "false" to disable it.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#led_status WirelessAccespointConfiguration#led_status}
  */
  readonly ledStatus?: string;
  /**
  * Configure the access point's location.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#location WirelessAccespointConfiguration#location}
  */
  readonly location?: string;
  /**
  * Configure the hostname for an access point's primary controller.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#primary_controller_name WirelessAccespointConfiguration#primary_controller_name}
  */
  readonly primaryControllerName?: string;
  /**
  * Configure the hostname for an access point's secondary controller.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#secondary_controller_name WirelessAccespointConfiguration#secondary_controller_name}
  */
  readonly secondaryControllerName?: string;
  /**
  * Configure the hostname for an access point's tertiary controller.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#tertiary_controller_name WirelessAccespointConfiguration#tertiary_controller_name}
  */
  readonly tertiaryControllerName?: string;
  /**
  * ap_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#ap_list WirelessAccespointConfiguration#ap_list}
  */
  readonly apList?: WirelessAccespointConfigurationParametersApListStruct[] | cdktf.IResolvable;
  /**
  * primary_ip_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#primary_ip_address WirelessAccespointConfiguration#primary_ip_address}
  */
  readonly primaryIpAddress?: WirelessAccespointConfigurationParametersPrimaryIpAddress[] | cdktf.IResolvable;
  /**
  * radio_configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#radio_configurations WirelessAccespointConfiguration#radio_configurations}
  */
  readonly radioConfigurations?: WirelessAccespointConfigurationParametersRadioConfigurations[] | cdktf.IResolvable;
  /**
  * secondary_ip_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#secondary_ip_address WirelessAccespointConfiguration#secondary_ip_address}
  */
  readonly secondaryIpAddress?: WirelessAccespointConfigurationParametersSecondaryIpAddress[] | cdktf.IResolvable;
  /**
  * tertiary_ip_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#tertiary_ip_address WirelessAccespointConfiguration#tertiary_ip_address}
  */
  readonly tertiaryIpAddress?: WirelessAccespointConfigurationParametersTertiaryIpAddress[] | cdktf.IResolvable;
}

export function wirelessAccespointConfigurationParametersToTerraform(struct?: WirelessAccespointConfigurationParametersOutputReference | WirelessAccespointConfigurationParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_status: cdktf.stringToTerraform(struct!.adminStatus),
    ap_height: cdktf.numberToTerraform(struct!.apHeight),
    ap_mode: cdktf.numberToTerraform(struct!.apMode),
    configure_admin_status: cdktf.stringToTerraform(struct!.configureAdminStatus),
    configure_ap_height: cdktf.stringToTerraform(struct!.configureApHeight),
    configure_ap_mode: cdktf.stringToTerraform(struct!.configureApMode),
    configure_failover_priority: cdktf.stringToTerraform(struct!.configureFailoverPriority),
    configure_hacontroller: cdktf.stringToTerraform(struct!.configureHacontroller),
    configure_led_brightness_level: cdktf.stringToTerraform(struct!.configureLedBrightnessLevel),
    configure_led_status: cdktf.stringToTerraform(struct!.configureLedStatus),
    configure_location: cdktf.stringToTerraform(struct!.configureLocation),
    failover_priority: cdktf.numberToTerraform(struct!.failoverPriority),
    led_brightness_level: cdktf.numberToTerraform(struct!.ledBrightnessLevel),
    led_status: cdktf.stringToTerraform(struct!.ledStatus),
    location: cdktf.stringToTerraform(struct!.location),
    primary_controller_name: cdktf.stringToTerraform(struct!.primaryControllerName),
    secondary_controller_name: cdktf.stringToTerraform(struct!.secondaryControllerName),
    tertiary_controller_name: cdktf.stringToTerraform(struct!.tertiaryControllerName),
    ap_list: cdktf.listMapper(wirelessAccespointConfigurationParametersApListStructToTerraform, true)(struct!.apList),
    primary_ip_address: cdktf.listMapper(wirelessAccespointConfigurationParametersPrimaryIpAddressToTerraform, true)(struct!.primaryIpAddress),
    radio_configurations: cdktf.listMapper(wirelessAccespointConfigurationParametersRadioConfigurationsToTerraform, true)(struct!.radioConfigurations),
    secondary_ip_address: cdktf.listMapper(wirelessAccespointConfigurationParametersSecondaryIpAddressToTerraform, true)(struct!.secondaryIpAddress),
    tertiary_ip_address: cdktf.listMapper(wirelessAccespointConfigurationParametersTertiaryIpAddressToTerraform, true)(struct!.tertiaryIpAddress),
  }
}


export function wirelessAccespointConfigurationParametersToHclTerraform(struct?: WirelessAccespointConfigurationParametersOutputReference | WirelessAccespointConfigurationParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_status: {
      value: cdktf.stringToHclTerraform(struct!.adminStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ap_height: {
      value: cdktf.numberToHclTerraform(struct!.apHeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ap_mode: {
      value: cdktf.numberToHclTerraform(struct!.apMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    configure_admin_status: {
      value: cdktf.stringToHclTerraform(struct!.configureAdminStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configure_ap_height: {
      value: cdktf.stringToHclTerraform(struct!.configureApHeight),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configure_ap_mode: {
      value: cdktf.stringToHclTerraform(struct!.configureApMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configure_failover_priority: {
      value: cdktf.stringToHclTerraform(struct!.configureFailoverPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configure_hacontroller: {
      value: cdktf.stringToHclTerraform(struct!.configureHacontroller),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configure_led_brightness_level: {
      value: cdktf.stringToHclTerraform(struct!.configureLedBrightnessLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configure_led_status: {
      value: cdktf.stringToHclTerraform(struct!.configureLedStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configure_location: {
      value: cdktf.stringToHclTerraform(struct!.configureLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failover_priority: {
      value: cdktf.numberToHclTerraform(struct!.failoverPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    led_brightness_level: {
      value: cdktf.numberToHclTerraform(struct!.ledBrightnessLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    led_status: {
      value: cdktf.stringToHclTerraform(struct!.ledStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_controller_name: {
      value: cdktf.stringToHclTerraform(struct!.primaryControllerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_controller_name: {
      value: cdktf.stringToHclTerraform(struct!.secondaryControllerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tertiary_controller_name: {
      value: cdktf.stringToHclTerraform(struct!.tertiaryControllerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ap_list: {
      value: cdktf.listMapperHcl(wirelessAccespointConfigurationParametersApListStructToHclTerraform, true)(struct!.apList),
      isBlock: true,
      type: "list",
      storageClassType: "WirelessAccespointConfigurationParametersApListStructList",
    },
    primary_ip_address: {
      value: cdktf.listMapperHcl(wirelessAccespointConfigurationParametersPrimaryIpAddressToHclTerraform, true)(struct!.primaryIpAddress),
      isBlock: true,
      type: "list",
      storageClassType: "WirelessAccespointConfigurationParametersPrimaryIpAddressList",
    },
    radio_configurations: {
      value: cdktf.listMapperHcl(wirelessAccespointConfigurationParametersRadioConfigurationsToHclTerraform, true)(struct!.radioConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "WirelessAccespointConfigurationParametersRadioConfigurationsList",
    },
    secondary_ip_address: {
      value: cdktf.listMapperHcl(wirelessAccespointConfigurationParametersSecondaryIpAddressToHclTerraform, true)(struct!.secondaryIpAddress),
      isBlock: true,
      type: "list",
      storageClassType: "WirelessAccespointConfigurationParametersSecondaryIpAddressList",
    },
    tertiary_ip_address: {
      value: cdktf.listMapperHcl(wirelessAccespointConfigurationParametersTertiaryIpAddressToHclTerraform, true)(struct!.tertiaryIpAddress),
      isBlock: true,
      type: "list",
      storageClassType: "WirelessAccespointConfigurationParametersTertiaryIpAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelessAccespointConfigurationParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WirelessAccespointConfigurationParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminStatus = this._adminStatus;
    }
    if (this._apHeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.apHeight = this._apHeight;
    }
    if (this._apMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.apMode = this._apMode;
    }
    if (this._configureAdminStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.configureAdminStatus = this._configureAdminStatus;
    }
    if (this._configureApHeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.configureApHeight = this._configureApHeight;
    }
    if (this._configureApMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.configureApMode = this._configureApMode;
    }
    if (this._configureFailoverPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.configureFailoverPriority = this._configureFailoverPriority;
    }
    if (this._configureHacontroller !== undefined) {
      hasAnyValues = true;
      internalValueResult.configureHacontroller = this._configureHacontroller;
    }
    if (this._configureLedBrightnessLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.configureLedBrightnessLevel = this._configureLedBrightnessLevel;
    }
    if (this._configureLedStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.configureLedStatus = this._configureLedStatus;
    }
    if (this._configureLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.configureLocation = this._configureLocation;
    }
    if (this._failoverPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverPriority = this._failoverPriority;
    }
    if (this._ledBrightnessLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.ledBrightnessLevel = this._ledBrightnessLevel;
    }
    if (this._ledStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ledStatus = this._ledStatus;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._primaryControllerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryControllerName = this._primaryControllerName;
    }
    if (this._secondaryControllerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryControllerName = this._secondaryControllerName;
    }
    if (this._tertiaryControllerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tertiaryControllerName = this._tertiaryControllerName;
    }
    if (this._apList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apList = this._apList?.internalValue;
    }
    if (this._primaryIpAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryIpAddress = this._primaryIpAddress?.internalValue;
    }
    if (this._radioConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.radioConfigurations = this._radioConfigurations?.internalValue;
    }
    if (this._secondaryIpAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryIpAddress = this._secondaryIpAddress?.internalValue;
    }
    if (this._tertiaryIpAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tertiaryIpAddress = this._tertiaryIpAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessAccespointConfigurationParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminStatus = undefined;
      this._apHeight = undefined;
      this._apMode = undefined;
      this._configureAdminStatus = undefined;
      this._configureApHeight = undefined;
      this._configureApMode = undefined;
      this._configureFailoverPriority = undefined;
      this._configureHacontroller = undefined;
      this._configureLedBrightnessLevel = undefined;
      this._configureLedStatus = undefined;
      this._configureLocation = undefined;
      this._failoverPriority = undefined;
      this._ledBrightnessLevel = undefined;
      this._ledStatus = undefined;
      this._location = undefined;
      this._primaryControllerName = undefined;
      this._secondaryControllerName = undefined;
      this._tertiaryControllerName = undefined;
      this._apList.internalValue = undefined;
      this._primaryIpAddress.internalValue = undefined;
      this._radioConfigurations.internalValue = undefined;
      this._secondaryIpAddress.internalValue = undefined;
      this._tertiaryIpAddress.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminStatus = value.adminStatus;
      this._apHeight = value.apHeight;
      this._apMode = value.apMode;
      this._configureAdminStatus = value.configureAdminStatus;
      this._configureApHeight = value.configureApHeight;
      this._configureApMode = value.configureApMode;
      this._configureFailoverPriority = value.configureFailoverPriority;
      this._configureHacontroller = value.configureHacontroller;
      this._configureLedBrightnessLevel = value.configureLedBrightnessLevel;
      this._configureLedStatus = value.configureLedStatus;
      this._configureLocation = value.configureLocation;
      this._failoverPriority = value.failoverPriority;
      this._ledBrightnessLevel = value.ledBrightnessLevel;
      this._ledStatus = value.ledStatus;
      this._location = value.location;
      this._primaryControllerName = value.primaryControllerName;
      this._secondaryControllerName = value.secondaryControllerName;
      this._tertiaryControllerName = value.tertiaryControllerName;
      this._apList.internalValue = value.apList;
      this._primaryIpAddress.internalValue = value.primaryIpAddress;
      this._radioConfigurations.internalValue = value.radioConfigurations;
      this._secondaryIpAddress.internalValue = value.secondaryIpAddress;
      this._tertiaryIpAddress.internalValue = value.tertiaryIpAddress;
    }
  }

  // admin_status - computed: true, optional: true, required: false
  private _adminStatus?: string; 
  public get adminStatus() {
    return this.getStringAttribute('admin_status');
  }
  public set adminStatus(value: string) {
    this._adminStatus = value;
  }
  public resetAdminStatus() {
    this._adminStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStatusInput() {
    return this._adminStatus;
  }

  // ap_height - computed: true, optional: true, required: false
  private _apHeight?: number; 
  public get apHeight() {
    return this.getNumberAttribute('ap_height');
  }
  public set apHeight(value: number) {
    this._apHeight = value;
  }
  public resetApHeight() {
    this._apHeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apHeightInput() {
    return this._apHeight;
  }

  // ap_mode - computed: true, optional: true, required: false
  private _apMode?: number; 
  public get apMode() {
    return this.getNumberAttribute('ap_mode');
  }
  public set apMode(value: number) {
    this._apMode = value;
  }
  public resetApMode() {
    this._apMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apModeInput() {
    return this._apMode;
  }

  // configure_admin_status - computed: true, optional: true, required: false
  private _configureAdminStatus?: string; 
  public get configureAdminStatus() {
    return this.getStringAttribute('configure_admin_status');
  }
  public set configureAdminStatus(value: string) {
    this._configureAdminStatus = value;
  }
  public resetConfigureAdminStatus() {
    this._configureAdminStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configureAdminStatusInput() {
    return this._configureAdminStatus;
  }

  // configure_ap_height - computed: true, optional: true, required: false
  private _configureApHeight?: string; 
  public get configureApHeight() {
    return this.getStringAttribute('configure_ap_height');
  }
  public set configureApHeight(value: string) {
    this._configureApHeight = value;
  }
  public resetConfigureApHeight() {
    this._configureApHeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configureApHeightInput() {
    return this._configureApHeight;
  }

  // configure_ap_mode - computed: true, optional: true, required: false
  private _configureApMode?: string; 
  public get configureApMode() {
    return this.getStringAttribute('configure_ap_mode');
  }
  public set configureApMode(value: string) {
    this._configureApMode = value;
  }
  public resetConfigureApMode() {
    this._configureApMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configureApModeInput() {
    return this._configureApMode;
  }

  // configure_failover_priority - computed: true, optional: true, required: false
  private _configureFailoverPriority?: string; 
  public get configureFailoverPriority() {
    return this.getStringAttribute('configure_failover_priority');
  }
  public set configureFailoverPriority(value: string) {
    this._configureFailoverPriority = value;
  }
  public resetConfigureFailoverPriority() {
    this._configureFailoverPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configureFailoverPriorityInput() {
    return this._configureFailoverPriority;
  }

  // configure_hacontroller - computed: true, optional: true, required: false
  private _configureHacontroller?: string; 
  public get configureHacontroller() {
    return this.getStringAttribute('configure_hacontroller');
  }
  public set configureHacontroller(value: string) {
    this._configureHacontroller = value;
  }
  public resetConfigureHacontroller() {
    this._configureHacontroller = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configureHacontrollerInput() {
    return this._configureHacontroller;
  }

  // configure_led_brightness_level - computed: true, optional: true, required: false
  private _configureLedBrightnessLevel?: string; 
  public get configureLedBrightnessLevel() {
    return this.getStringAttribute('configure_led_brightness_level');
  }
  public set configureLedBrightnessLevel(value: string) {
    this._configureLedBrightnessLevel = value;
  }
  public resetConfigureLedBrightnessLevel() {
    this._configureLedBrightnessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configureLedBrightnessLevelInput() {
    return this._configureLedBrightnessLevel;
  }

  // configure_led_status - computed: true, optional: true, required: false
  private _configureLedStatus?: string; 
  public get configureLedStatus() {
    return this.getStringAttribute('configure_led_status');
  }
  public set configureLedStatus(value: string) {
    this._configureLedStatus = value;
  }
  public resetConfigureLedStatus() {
    this._configureLedStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configureLedStatusInput() {
    return this._configureLedStatus;
  }

  // configure_location - computed: true, optional: true, required: false
  private _configureLocation?: string; 
  public get configureLocation() {
    return this.getStringAttribute('configure_location');
  }
  public set configureLocation(value: string) {
    this._configureLocation = value;
  }
  public resetConfigureLocation() {
    this._configureLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configureLocationInput() {
    return this._configureLocation;
  }

  // failover_priority - computed: true, optional: true, required: false
  private _failoverPriority?: number; 
  public get failoverPriority() {
    return this.getNumberAttribute('failover_priority');
  }
  public set failoverPriority(value: number) {
    this._failoverPriority = value;
  }
  public resetFailoverPriority() {
    this._failoverPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverPriorityInput() {
    return this._failoverPriority;
  }

  // led_brightness_level - computed: true, optional: true, required: false
  private _ledBrightnessLevel?: number; 
  public get ledBrightnessLevel() {
    return this.getNumberAttribute('led_brightness_level');
  }
  public set ledBrightnessLevel(value: number) {
    this._ledBrightnessLevel = value;
  }
  public resetLedBrightnessLevel() {
    this._ledBrightnessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ledBrightnessLevelInput() {
    return this._ledBrightnessLevel;
  }

  // led_status - computed: true, optional: true, required: false
  private _ledStatus?: string; 
  public get ledStatus() {
    return this.getStringAttribute('led_status');
  }
  public set ledStatus(value: string) {
    this._ledStatus = value;
  }
  public resetLedStatus() {
    this._ledStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ledStatusInput() {
    return this._ledStatus;
  }

  // location - computed: true, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // primary_controller_name - computed: true, optional: true, required: false
  private _primaryControllerName?: string; 
  public get primaryControllerName() {
    return this.getStringAttribute('primary_controller_name');
  }
  public set primaryControllerName(value: string) {
    this._primaryControllerName = value;
  }
  public resetPrimaryControllerName() {
    this._primaryControllerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryControllerNameInput() {
    return this._primaryControllerName;
  }

  // secondary_controller_name - computed: true, optional: true, required: false
  private _secondaryControllerName?: string; 
  public get secondaryControllerName() {
    return this.getStringAttribute('secondary_controller_name');
  }
  public set secondaryControllerName(value: string) {
    this._secondaryControllerName = value;
  }
  public resetSecondaryControllerName() {
    this._secondaryControllerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryControllerNameInput() {
    return this._secondaryControllerName;
  }

  // tertiary_controller_name - computed: true, optional: true, required: false
  private _tertiaryControllerName?: string; 
  public get tertiaryControllerName() {
    return this.getStringAttribute('tertiary_controller_name');
  }
  public set tertiaryControllerName(value: string) {
    this._tertiaryControllerName = value;
  }
  public resetTertiaryControllerName() {
    this._tertiaryControllerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tertiaryControllerNameInput() {
    return this._tertiaryControllerName;
  }

  // ap_list - computed: false, optional: true, required: false
  private _apList = new WirelessAccespointConfigurationParametersApListStructList(this, "ap_list", false);
  public get apList() {
    return this._apList;
  }
  public putApList(value: WirelessAccespointConfigurationParametersApListStruct[] | cdktf.IResolvable) {
    this._apList.internalValue = value;
  }
  public resetApList() {
    this._apList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apListInput() {
    return this._apList.internalValue;
  }

  // primary_ip_address - computed: false, optional: true, required: false
  private _primaryIpAddress = new WirelessAccespointConfigurationParametersPrimaryIpAddressList(this, "primary_ip_address", false);
  public get primaryIpAddress() {
    return this._primaryIpAddress;
  }
  public putPrimaryIpAddress(value: WirelessAccespointConfigurationParametersPrimaryIpAddress[] | cdktf.IResolvable) {
    this._primaryIpAddress.internalValue = value;
  }
  public resetPrimaryIpAddress() {
    this._primaryIpAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryIpAddressInput() {
    return this._primaryIpAddress.internalValue;
  }

  // radio_configurations - computed: false, optional: true, required: false
  private _radioConfigurations = new WirelessAccespointConfigurationParametersRadioConfigurationsList(this, "radio_configurations", false);
  public get radioConfigurations() {
    return this._radioConfigurations;
  }
  public putRadioConfigurations(value: WirelessAccespointConfigurationParametersRadioConfigurations[] | cdktf.IResolvable) {
    this._radioConfigurations.internalValue = value;
  }
  public resetRadioConfigurations() {
    this._radioConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioConfigurationsInput() {
    return this._radioConfigurations.internalValue;
  }

  // secondary_ip_address - computed: false, optional: true, required: false
  private _secondaryIpAddress = new WirelessAccespointConfigurationParametersSecondaryIpAddressList(this, "secondary_ip_address", false);
  public get secondaryIpAddress() {
    return this._secondaryIpAddress;
  }
  public putSecondaryIpAddress(value: WirelessAccespointConfigurationParametersSecondaryIpAddress[] | cdktf.IResolvable) {
    this._secondaryIpAddress.internalValue = value;
  }
  public resetSecondaryIpAddress() {
    this._secondaryIpAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryIpAddressInput() {
    return this._secondaryIpAddress.internalValue;
  }

  // tertiary_ip_address - computed: false, optional: true, required: false
  private _tertiaryIpAddress = new WirelessAccespointConfigurationParametersTertiaryIpAddressList(this, "tertiary_ip_address", false);
  public get tertiaryIpAddress() {
    return this._tertiaryIpAddress;
  }
  public putTertiaryIpAddress(value: WirelessAccespointConfigurationParametersTertiaryIpAddress[] | cdktf.IResolvable) {
    this._tertiaryIpAddress.internalValue = value;
  }
  public resetTertiaryIpAddress() {
    this._tertiaryIpAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tertiaryIpAddressInput() {
    return this._tertiaryIpAddress.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration dnacenter_wireless_accespoint_configuration}
*/
export class WirelessAccespointConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_wireless_accespoint_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelessAccespointConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelessAccespointConfiguration to import
  * @param importFromId The id of the existing WirelessAccespointConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelessAccespointConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_wireless_accespoint_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_accespoint_configuration dnacenter_wireless_accespoint_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelessAccespointConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: WirelessAccespointConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_wireless_accespoint_configuration',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21'
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
  private _item = new WirelessAccespointConfigurationItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new WirelessAccespointConfigurationParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: WirelessAccespointConfigurationParameters) {
    this._parameters.internalValue = value;
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
      parameters: wirelessAccespointConfigurationParametersToTerraform(this._parameters.internalValue),
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
        value: wirelessAccespointConfigurationParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelessAccespointConfigurationParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
