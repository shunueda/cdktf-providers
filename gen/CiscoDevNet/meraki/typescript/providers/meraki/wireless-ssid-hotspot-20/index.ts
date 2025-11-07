// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_hotspot_20
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelessSsidHotspot20Config extends cdktf.TerraformMetaArguments {
  /**
  * An array of domain names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_hotspot_20#domains WirelessSsidHotspot20#domains}
  */
  readonly domains?: string[];
  /**
  * Whether or not Hotspot 2.0 for this SSID is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_hotspot_20#enabled WirelessSsidHotspot20#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * An array of MCC/MNC pairs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_hotspot_20#mcc_mncs WirelessSsidHotspot20#mcc_mncs}
  */
  readonly mccMncs?: WirelessSsidHotspot20MccMncs[] | cdktf.IResolvable;
  /**
  * An array of NAI realms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_hotspot_20#nai_realms WirelessSsidHotspot20#nai_realms}
  */
  readonly naiRealms?: WirelessSsidHotspot20NaiRealms[] | cdktf.IResolvable;
  /**
  * The network type of this SSID (`Private network`, `Private network with guest access`, `Chargeable public network`, `Free public network`, `Personal device network`, `Emergency services only network`, `Test or experimental`, `Wildcard`)
  *   - Choices: `Chargeable public network`, `Emergency services only network`, `Free public network`, `Personal device network`, `Private network`, `Private network with guest access`, `Test or experimental`, `Wildcard`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_hotspot_20#network_access_type WirelessSsidHotspot20#network_access_type}
  */
  readonly networkAccessType?: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_hotspot_20#network_id WirelessSsidHotspot20#network_id}
  */
  readonly networkId: string;
  /**
  * Wireless SSID number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_hotspot_20#number WirelessSsidHotspot20#number}
  */
  readonly number: string;
  /**
  * Operator name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_hotspot_20#operator_name WirelessSsidHotspot20#operator_name}
  */
  readonly operatorName?: string;
  /**
  * An array of roaming consortium OIs (hexadecimal number 3-5 octets in length)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_hotspot_20#roam_consort_ois WirelessSsidHotspot20#roam_consort_ois}
  */
  readonly roamConsortOis?: string[];
  /**
  * Venue name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_hotspot_20#venue_name WirelessSsidHotspot20#venue_name}
  */
  readonly venueName?: string;
  /**
  * Venue type (`Unspecified`, `Unspecified Assembly`, `Arena`, `Stadium`, `Passenger Terminal`, `Amphitheater`, `Amusement Park`, `Place of Worship`, `Convention Center`, `Library`, `Museum`, `Restaurant`, `Theater`, `Bar`, `Coffee Shop`, `Zoo or Aquarium`, `Emergency Coordination Center`, `Unspecified Business`, `Doctor or Dentist office`, `Bank`, `Fire Station`, `Police Station`, `Post Office`, `Professional Office`, `Research and Development Facility`, `Attorney Office`, `Unspecified Educational`, `School, Primary`, `School, Secondary`, `University or College`, `Unspecified Factory and Industrial`, `Factory`, `Unspecified Institutional`, `Hospital`, `Long-Term Care Facility`, `Alcohol and Drug Rehabilitation Center`, `Group Home`, `Prison or Jail`, `Unspecified Mercantile`, `Retail Store`, `Grocery Market`, `Automotive Service Station`, `Shopping Mall`, `Gas Station`, `Unspecified Residential`, `Private Residence`, `Hotel or Motel`, `Dormitory`, `Boarding House`, `Unspecified Storage`, `Unspecified Utility and Miscellaneous`, `Unspecified Vehicular`, `Automobile or Truck`, `Airplane`, `Bus`, `Ferry`, `Ship or Boat`, `Train`, `Motor Bike`, `Unspecified Outdoor`, `Muni-mesh Network`, `City Park`, `Rest Area`, `Traffic Control`, `Bus Stop`, `Kiosk`)
  *   - Choices: `Airplane`, `Alcohol and Drug Rehabilitation Center`, `Amphitheater`, `Amusement Park`, `Arena`, `Attorney Office`, `Automobile or Truck`, `Automotive Service Station`, `Bank`, `Bar`, `Boarding House`, `Bus`, `Bus Stop`, `City Park`, `Coffee Shop`, `Convention Center`, `Doctor or Dentist office`, `Dormitory`, `Emergency Coordination Center`, `Factory`, `Ferry`, `Fire Station`, `Gas Station`, `Grocery Market`, `Group Home`, `Hospital`, `Hotel or Motel`, `Kiosk`, `Library`, `Long-Term Care Facility`, `Motor Bike`, `Muni-mesh Network`, `Museum`, `Passenger Terminal`, `Place of Worship`, `Police Station`, `Post Office`, `Prison or Jail`, `Private Residence`, `Professional Office`, `Research and Development Facility`, `Rest Area`, `Restaurant`, `Retail Store`, `School, Primary`, `School, Secondary`, `Ship or Boat`, `Shopping Mall`, `Stadium`, `Theater`, `Traffic Control`, `Train`, `University or College`, `Unspecified`, `Unspecified Assembly`, `Unspecified Business`, `Unspecified Educational`, `Unspecified Factory and Industrial`, `Unspecified Institutional`, `Unspecified Mercantile`, `Unspecified Outdoor`, `Unspecified Residential`, `Unspecified Storage`, `Unspecified Utility and Miscellaneous`, `Unspecified Vehicular`, `Zoo or Aquarium`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_hotspot_20#venue_type WirelessSsidHotspot20#venue_type}
  */
  readonly venueType?: string;
}
export interface WirelessSsidHotspot20MccMncs {
  /**
  * MCC value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_hotspot_20#mcc WirelessSsidHotspot20#mcc}
  */
  readonly mcc: string;
  /**
  * MNC value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_hotspot_20#mnc WirelessSsidHotspot20#mnc}
  */
  readonly mnc: string;
}

export function wirelessSsidHotspot20MccMncsToTerraform(struct?: WirelessSsidHotspot20MccMncs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mcc: cdktf.stringToTerraform(struct!.mcc),
    mnc: cdktf.stringToTerraform(struct!.mnc),
  }
}


export function wirelessSsidHotspot20MccMncsToHclTerraform(struct?: WirelessSsidHotspot20MccMncs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mcc: {
      value: cdktf.stringToHclTerraform(struct!.mcc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mnc: {
      value: cdktf.stringToHclTerraform(struct!.mnc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelessSsidHotspot20MccMncsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessSsidHotspot20MccMncs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mcc !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcc = this._mcc;
    }
    if (this._mnc !== undefined) {
      hasAnyValues = true;
      internalValueResult.mnc = this._mnc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessSsidHotspot20MccMncs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mcc = undefined;
      this._mnc = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mcc = value.mcc;
      this._mnc = value.mnc;
    }
  }

  // mcc - computed: false, optional: false, required: true
  private _mcc?: string; 
  public get mcc() {
    return this.getStringAttribute('mcc');
  }
  public set mcc(value: string) {
    this._mcc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mccInput() {
    return this._mcc;
  }

  // mnc - computed: false, optional: false, required: true
  private _mnc?: string; 
  public get mnc() {
    return this.getStringAttribute('mnc');
  }
  public set mnc(value: string) {
    this._mnc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mncInput() {
    return this._mnc;
  }
}

export class WirelessSsidHotspot20MccMncsList extends cdktf.ComplexList {
  public internalValue? : WirelessSsidHotspot20MccMncs[] | cdktf.IResolvable

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
  public get(index: number): WirelessSsidHotspot20MccMncsOutputReference {
    return new WirelessSsidHotspot20MccMncsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelessSsidHotspot20NaiRealmsMethods {
  /**
  * An array of autentication types. Possible values are `SIM`, `USIM`, `NFC Secure Element`, `Hardware Token`, `Softoken`, `Certificate`, `username/password`, `none`, `Reserved`, `Vendor Specific`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_hotspot_20#authentication_types_credentials WirelessSsidHotspot20#authentication_types_credentials}
  */
  readonly authenticationTypesCredentials?: string[];
  /**
  * An array of autentication types. Possible values are `EAP-TLS`, `EAP-SIM`, `EAP-AKA`, `EAP-TTLS with MSCHAPv2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_hotspot_20#authentication_types_eap_inner_authentication WirelessSsidHotspot20#authentication_types_eap_inner_authentication}
  */
  readonly authenticationTypesEapInnerAuthentication?: string[];
  /**
  * An array of autentication types. Possible values are `Reserved`, `PAP`, `CHAP`, `MSCHAP`, `MSCHAPV2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_hotspot_20#authentication_types_non_eap_inner_authentication WirelessSsidHotspot20#authentication_types_non_eap_inner_authentication}
  */
  readonly authenticationTypesNonEapInnerAuthentication?: string[];
  /**
  * An array of autentication types. Possible values are `SIM`, `USIM`, `NFC Secure Element`, `Hardware Token`, `Softoken`, `Certificate`, `username/password`, `Reserved`, `Anonymous`, `Vendor Specific`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_hotspot_20#authentication_types_tunneled_eap_method_credentials WirelessSsidHotspot20#authentication_types_tunneled_eap_method_credentials}
  */
  readonly authenticationTypesTunneledEapMethodCredentials?: string[];
  /**
  * ID of method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_hotspot_20#id WirelessSsidHotspot20#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function wirelessSsidHotspot20NaiRealmsMethodsToTerraform(struct?: WirelessSsidHotspot20NaiRealmsMethods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_types_credentials: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authenticationTypesCredentials),
    authentication_types_eap_inner_authentication: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authenticationTypesEapInnerAuthentication),
    authentication_types_non_eap_inner_authentication: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authenticationTypesNonEapInnerAuthentication),
    authentication_types_tunneled_eap_method_credentials: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authenticationTypesTunneledEapMethodCredentials),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function wirelessSsidHotspot20NaiRealmsMethodsToHclTerraform(struct?: WirelessSsidHotspot20NaiRealmsMethods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_types_credentials: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authenticationTypesCredentials),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    authentication_types_eap_inner_authentication: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authenticationTypesEapInnerAuthentication),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    authentication_types_non_eap_inner_authentication: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authenticationTypesNonEapInnerAuthentication),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    authentication_types_tunneled_eap_method_credentials: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authenticationTypesTunneledEapMethodCredentials),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelessSsidHotspot20NaiRealmsMethodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessSsidHotspot20NaiRealmsMethods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationTypesCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationTypesCredentials = this._authenticationTypesCredentials;
    }
    if (this._authenticationTypesEapInnerAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationTypesEapInnerAuthentication = this._authenticationTypesEapInnerAuthentication;
    }
    if (this._authenticationTypesNonEapInnerAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationTypesNonEapInnerAuthentication = this._authenticationTypesNonEapInnerAuthentication;
    }
    if (this._authenticationTypesTunneledEapMethodCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationTypesTunneledEapMethodCredentials = this._authenticationTypesTunneledEapMethodCredentials;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessSsidHotspot20NaiRealmsMethods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationTypesCredentials = undefined;
      this._authenticationTypesEapInnerAuthentication = undefined;
      this._authenticationTypesNonEapInnerAuthentication = undefined;
      this._authenticationTypesTunneledEapMethodCredentials = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationTypesCredentials = value.authenticationTypesCredentials;
      this._authenticationTypesEapInnerAuthentication = value.authenticationTypesEapInnerAuthentication;
      this._authenticationTypesNonEapInnerAuthentication = value.authenticationTypesNonEapInnerAuthentication;
      this._authenticationTypesTunneledEapMethodCredentials = value.authenticationTypesTunneledEapMethodCredentials;
      this._id = value.id;
    }
  }

  // authentication_types_credentials - computed: false, optional: true, required: false
  private _authenticationTypesCredentials?: string[]; 
  public get authenticationTypesCredentials() {
    return cdktf.Fn.tolist(this.getListAttribute('authentication_types_credentials'));
  }
  public set authenticationTypesCredentials(value: string[]) {
    this._authenticationTypesCredentials = value;
  }
  public resetAuthenticationTypesCredentials() {
    this._authenticationTypesCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypesCredentialsInput() {
    return this._authenticationTypesCredentials;
  }

  // authentication_types_eap_inner_authentication - computed: false, optional: true, required: false
  private _authenticationTypesEapInnerAuthentication?: string[]; 
  public get authenticationTypesEapInnerAuthentication() {
    return cdktf.Fn.tolist(this.getListAttribute('authentication_types_eap_inner_authentication'));
  }
  public set authenticationTypesEapInnerAuthentication(value: string[]) {
    this._authenticationTypesEapInnerAuthentication = value;
  }
  public resetAuthenticationTypesEapInnerAuthentication() {
    this._authenticationTypesEapInnerAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypesEapInnerAuthenticationInput() {
    return this._authenticationTypesEapInnerAuthentication;
  }

  // authentication_types_non_eap_inner_authentication - computed: false, optional: true, required: false
  private _authenticationTypesNonEapInnerAuthentication?: string[]; 
  public get authenticationTypesNonEapInnerAuthentication() {
    return cdktf.Fn.tolist(this.getListAttribute('authentication_types_non_eap_inner_authentication'));
  }
  public set authenticationTypesNonEapInnerAuthentication(value: string[]) {
    this._authenticationTypesNonEapInnerAuthentication = value;
  }
  public resetAuthenticationTypesNonEapInnerAuthentication() {
    this._authenticationTypesNonEapInnerAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypesNonEapInnerAuthenticationInput() {
    return this._authenticationTypesNonEapInnerAuthentication;
  }

  // authentication_types_tunneled_eap_method_credentials - computed: false, optional: true, required: false
  private _authenticationTypesTunneledEapMethodCredentials?: string[]; 
  public get authenticationTypesTunneledEapMethodCredentials() {
    return cdktf.Fn.tolist(this.getListAttribute('authentication_types_tunneled_eap_method_credentials'));
  }
  public set authenticationTypesTunneledEapMethodCredentials(value: string[]) {
    this._authenticationTypesTunneledEapMethodCredentials = value;
  }
  public resetAuthenticationTypesTunneledEapMethodCredentials() {
    this._authenticationTypesTunneledEapMethodCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypesTunneledEapMethodCredentialsInput() {
    return this._authenticationTypesTunneledEapMethodCredentials;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class WirelessSsidHotspot20NaiRealmsMethodsList extends cdktf.ComplexList {
  public internalValue? : WirelessSsidHotspot20NaiRealmsMethods[] | cdktf.IResolvable

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
  public get(index: number): WirelessSsidHotspot20NaiRealmsMethodsOutputReference {
    return new WirelessSsidHotspot20NaiRealmsMethodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelessSsidHotspot20NaiRealms {
  /**
  * The format for the realm (`1` or `0`)
  *   - Choices: `0`, `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_hotspot_20#format WirelessSsidHotspot20#format}
  */
  readonly format?: string;
  /**
  * An array of EAP methods for the realm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_hotspot_20#methods WirelessSsidHotspot20#methods}
  */
  readonly methods?: WirelessSsidHotspot20NaiRealmsMethods[] | cdktf.IResolvable;
  /**
  * The name of the realm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_hotspot_20#realm WirelessSsidHotspot20#realm}
  */
  readonly realm: string;
}

export function wirelessSsidHotspot20NaiRealmsToTerraform(struct?: WirelessSsidHotspot20NaiRealms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    methods: cdktf.listMapper(wirelessSsidHotspot20NaiRealmsMethodsToTerraform, false)(struct!.methods),
    realm: cdktf.stringToTerraform(struct!.realm),
  }
}


export function wirelessSsidHotspot20NaiRealmsToHclTerraform(struct?: WirelessSsidHotspot20NaiRealms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    methods: {
      value: cdktf.listMapperHcl(wirelessSsidHotspot20NaiRealmsMethodsToHclTerraform, false)(struct!.methods),
      isBlock: true,
      type: "list",
      storageClassType: "WirelessSsidHotspot20NaiRealmsMethodsList",
    },
    realm: {
      value: cdktf.stringToHclTerraform(struct!.realm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelessSsidHotspot20NaiRealmsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessSsidHotspot20NaiRealms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._methods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods?.internalValue;
    }
    if (this._realm !== undefined) {
      hasAnyValues = true;
      internalValueResult.realm = this._realm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessSsidHotspot20NaiRealms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._methods.internalValue = undefined;
      this._realm = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._methods.internalValue = value.methods;
      this._realm = value.realm;
    }
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // methods - computed: false, optional: true, required: false
  private _methods = new WirelessSsidHotspot20NaiRealmsMethodsList(this, "methods", false);
  public get methods() {
    return this._methods;
  }
  public putMethods(value: WirelessSsidHotspot20NaiRealmsMethods[] | cdktf.IResolvable) {
    this._methods.internalValue = value;
  }
  public resetMethods() {
    this._methods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods.internalValue;
  }

  // realm - computed: false, optional: false, required: true
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }
}

export class WirelessSsidHotspot20NaiRealmsList extends cdktf.ComplexList {
  public internalValue? : WirelessSsidHotspot20NaiRealms[] | cdktf.IResolvable

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
  public get(index: number): WirelessSsidHotspot20NaiRealmsOutputReference {
    return new WirelessSsidHotspot20NaiRealmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_hotspot_20 meraki_wireless_ssid_hotspot_20}
*/
export class WirelessSsidHotspot20 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_wireless_ssid_hotspot_20";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelessSsidHotspot20 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelessSsidHotspot20 to import
  * @param importFromId The id of the existing WirelessSsidHotspot20 that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_hotspot_20#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelessSsidHotspot20 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_wireless_ssid_hotspot_20", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_hotspot_20 meraki_wireless_ssid_hotspot_20} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelessSsidHotspot20Config
  */
  public constructor(scope: Construct, id: string, config: WirelessSsidHotspot20Config) {
    super(scope, id, {
      terraformResourceType: 'meraki_wireless_ssid_hotspot_20',
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
    this._domains = config.domains;
    this._enabled = config.enabled;
    this._mccMncs.internalValue = config.mccMncs;
    this._naiRealms.internalValue = config.naiRealms;
    this._networkAccessType = config.networkAccessType;
    this._networkId = config.networkId;
    this._number = config.number;
    this._operatorName = config.operatorName;
    this._roamConsortOis = config.roamConsortOis;
    this._venueName = config.venueName;
    this._venueType = config.venueType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domains - computed: false, optional: true, required: false
  private _domains?: string[]; 
  public get domains() {
    return cdktf.Fn.tolist(this.getListAttribute('domains'));
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  public resetDomains() {
    this._domains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mcc_mncs - computed: false, optional: true, required: false
  private _mccMncs = new WirelessSsidHotspot20MccMncsList(this, "mcc_mncs", false);
  public get mccMncs() {
    return this._mccMncs;
  }
  public putMccMncs(value: WirelessSsidHotspot20MccMncs[] | cdktf.IResolvable) {
    this._mccMncs.internalValue = value;
  }
  public resetMccMncs() {
    this._mccMncs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mccMncsInput() {
    return this._mccMncs.internalValue;
  }

  // nai_realms - computed: false, optional: true, required: false
  private _naiRealms = new WirelessSsidHotspot20NaiRealmsList(this, "nai_realms", false);
  public get naiRealms() {
    return this._naiRealms;
  }
  public putNaiRealms(value: WirelessSsidHotspot20NaiRealms[] | cdktf.IResolvable) {
    this._naiRealms.internalValue = value;
  }
  public resetNaiRealms() {
    this._naiRealms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get naiRealmsInput() {
    return this._naiRealms.internalValue;
  }

  // network_access_type - computed: false, optional: true, required: false
  private _networkAccessType?: string; 
  public get networkAccessType() {
    return this.getStringAttribute('network_access_type');
  }
  public set networkAccessType(value: string) {
    this._networkAccessType = value;
  }
  public resetNetworkAccessType() {
    this._networkAccessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAccessTypeInput() {
    return this._networkAccessType;
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

  // number - computed: false, optional: false, required: true
  private _number?: string; 
  public get number() {
    return this.getStringAttribute('number');
  }
  public set number(value: string) {
    this._number = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // operator_name - computed: false, optional: true, required: false
  private _operatorName?: string; 
  public get operatorName() {
    return this.getStringAttribute('operator_name');
  }
  public set operatorName(value: string) {
    this._operatorName = value;
  }
  public resetOperatorName() {
    this._operatorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorNameInput() {
    return this._operatorName;
  }

  // roam_consort_ois - computed: false, optional: true, required: false
  private _roamConsortOis?: string[]; 
  public get roamConsortOis() {
    return cdktf.Fn.tolist(this.getListAttribute('roam_consort_ois'));
  }
  public set roamConsortOis(value: string[]) {
    this._roamConsortOis = value;
  }
  public resetRoamConsortOis() {
    this._roamConsortOis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roamConsortOisInput() {
    return this._roamConsortOis;
  }

  // venue_name - computed: false, optional: true, required: false
  private _venueName?: string; 
  public get venueName() {
    return this.getStringAttribute('venue_name');
  }
  public set venueName(value: string) {
    this._venueName = value;
  }
  public resetVenueName() {
    this._venueName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get venueNameInput() {
    return this._venueName;
  }

  // venue_type - computed: false, optional: true, required: false
  private _venueType?: string; 
  public get venueType() {
    return this.getStringAttribute('venue_type');
  }
  public set venueType(value: string) {
    this._venueType = value;
  }
  public resetVenueType() {
    this._venueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get venueTypeInput() {
    return this._venueType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domains),
      enabled: cdktf.booleanToTerraform(this._enabled),
      mcc_mncs: cdktf.listMapper(wirelessSsidHotspot20MccMncsToTerraform, false)(this._mccMncs.internalValue),
      nai_realms: cdktf.listMapper(wirelessSsidHotspot20NaiRealmsToTerraform, false)(this._naiRealms.internalValue),
      network_access_type: cdktf.stringToTerraform(this._networkAccessType),
      network_id: cdktf.stringToTerraform(this._networkId),
      number: cdktf.stringToTerraform(this._number),
      operator_name: cdktf.stringToTerraform(this._operatorName),
      roam_consort_ois: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roamConsortOis),
      venue_name: cdktf.stringToTerraform(this._venueName),
      venue_type: cdktf.stringToTerraform(this._venueType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domains),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mcc_mncs: {
        value: cdktf.listMapperHcl(wirelessSsidHotspot20MccMncsToHclTerraform, false)(this._mccMncs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelessSsidHotspot20MccMncsList",
      },
      nai_realms: {
        value: cdktf.listMapperHcl(wirelessSsidHotspot20NaiRealmsToHclTerraform, false)(this._naiRealms.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelessSsidHotspot20NaiRealmsList",
      },
      network_access_type: {
        value: cdktf.stringToHclTerraform(this._networkAccessType),
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
      number: {
        value: cdktf.stringToHclTerraform(this._number),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operator_name: {
        value: cdktf.stringToHclTerraform(this._operatorName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      roam_consort_ois: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roamConsortOis),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      venue_name: {
        value: cdktf.stringToHclTerraform(this._venueName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      venue_type: {
        value: cdktf.stringToHclTerraform(this._venueType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
