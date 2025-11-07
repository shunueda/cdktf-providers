// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelessProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * These additional interfaces will be configured on the device as independent interfaces in addition to the interfaces mapped to SSIDs. Max Limit 4094
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_profile#additional_interfaces WirelessProfile#additional_interfaces}
  */
  readonly additionalInterfaces?: string[];
  /**
  * AP Zones
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_profile#ap_zones WirelessProfile#ap_zones}
  */
  readonly apZones?: WirelessProfileApZones[] | cdktf.IResolvable;
  /**
  * SSID Details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_profile#ssid_details WirelessProfile#ssid_details}
  */
  readonly ssidDetails?: WirelessProfileSsidDetails[] | cdktf.IResolvable;
  /**
  * Wireless Network Profile Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_profile#wireless_profile_name WirelessProfile#wireless_profile_name}
  */
  readonly wirelessProfileName: string;
}
export interface WirelessProfileApZones {
  /**
  * AP Zone Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_profile#ap_zone_name WirelessProfile#ap_zone_name}
  */
  readonly apZoneName?: string;
  /**
  * RF Profile Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_profile#rf_profile_name WirelessProfile#rf_profile_name}
  */
  readonly rfProfileName?: string;
  /**
  * ssids part of apZone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_profile#ssids WirelessProfile#ssids}
  */
  readonly ssids?: string[];
}

export function wirelessProfileApZonesToTerraform(struct?: WirelessProfileApZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ap_zone_name: cdktf.stringToTerraform(struct!.apZoneName),
    rf_profile_name: cdktf.stringToTerraform(struct!.rfProfileName),
    ssids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ssids),
  }
}


export function wirelessProfileApZonesToHclTerraform(struct?: WirelessProfileApZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ap_zone_name: {
      value: cdktf.stringToHclTerraform(struct!.apZoneName),
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
    ssids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ssids),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelessProfileApZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessProfileApZones | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apZoneName !== undefined) {
      hasAnyValues = true;
      internalValueResult.apZoneName = this._apZoneName;
    }
    if (this._rfProfileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.rfProfileName = this._rfProfileName;
    }
    if (this._ssids !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssids = this._ssids;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessProfileApZones | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apZoneName = undefined;
      this._rfProfileName = undefined;
      this._ssids = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apZoneName = value.apZoneName;
      this._rfProfileName = value.rfProfileName;
      this._ssids = value.ssids;
    }
  }

  // ap_zone_name - computed: false, optional: true, required: false
  private _apZoneName?: string; 
  public get apZoneName() {
    return this.getStringAttribute('ap_zone_name');
  }
  public set apZoneName(value: string) {
    this._apZoneName = value;
  }
  public resetApZoneName() {
    this._apZoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apZoneNameInput() {
    return this._apZoneName;
  }

  // rf_profile_name - computed: false, optional: true, required: false
  private _rfProfileName?: string; 
  public get rfProfileName() {
    return this.getStringAttribute('rf_profile_name');
  }
  public set rfProfileName(value: string) {
    this._rfProfileName = value;
  }
  public resetRfProfileName() {
    this._rfProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfProfileNameInput() {
    return this._rfProfileName;
  }

  // ssids - computed: false, optional: true, required: false
  private _ssids?: string[]; 
  public get ssids() {
    return cdktf.Fn.tolist(this.getListAttribute('ssids'));
  }
  public set ssids(value: string[]) {
    this._ssids = value;
  }
  public resetSsids() {
    this._ssids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssidsInput() {
    return this._ssids;
  }
}

export class WirelessProfileApZonesList extends cdktf.ComplexList {
  public internalValue? : WirelessProfileApZones[] | cdktf.IResolvable

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
  public get(index: number): WirelessProfileApZonesOutputReference {
    return new WirelessProfileApZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelessProfileSsidDetails {
  /**
  * 802.11be Profile Id. Applicable to IOS controllers with version 17.15 and higher. 802.11be Profiles if passed, should be same across all SSIDs in network profile being configured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_profile#dot11be_profile_id WirelessProfile#dot11be_profile_id}
  */
  readonly dot11BeProfileId?: string;
  /**
  * True if fabric is enabled, else False. Flex and fabric cannot be enabled simultaneously and a profile can only contain either flex SSIDs or fabric SSIDs and not both at the same time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_profile#enable_fabric WirelessProfile#enable_fabric}
  */
  readonly enableFabric?: boolean | cdktf.IResolvable;
  /**
  * True if flex connect is enabled, else False. Flex and fabric cannot be enabled simultaneously and a profile can only contain either flex SSIDs or fabric SSIDs and not both at the same time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_profile#enable_flex_connect WirelessProfile#enable_flex_connect}
  */
  readonly enableFlexConnect?: boolean | cdktf.IResolvable;
  /**
  * Interface Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_profile#interface_name WirelessProfile#interface_name}
  */
  readonly interfaceName?: string;
  /**
  * Local To Vlan Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_profile#local_to_vlan WirelessProfile#local_to_vlan}
  */
  readonly localToVlan?: number;
  /**
  * SSID Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_profile#ssid_name WirelessProfile#ssid_name}
  */
  readonly ssidName: string;
  /**
  * WLAN Profile Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_profile#wlan_profile_name WirelessProfile#wlan_profile_name}
  */
  readonly wlanProfileName?: string;
}

export function wirelessProfileSsidDetailsToTerraform(struct?: WirelessProfileSsidDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dot11be_profile_id: cdktf.stringToTerraform(struct!.dot11BeProfileId),
    enable_fabric: cdktf.booleanToTerraform(struct!.enableFabric),
    enable_flex_connect: cdktf.booleanToTerraform(struct!.enableFlexConnect),
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    local_to_vlan: cdktf.numberToTerraform(struct!.localToVlan),
    ssid_name: cdktf.stringToTerraform(struct!.ssidName),
    wlan_profile_name: cdktf.stringToTerraform(struct!.wlanProfileName),
  }
}


export function wirelessProfileSsidDetailsToHclTerraform(struct?: WirelessProfileSsidDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dot11be_profile_id: {
      value: cdktf.stringToHclTerraform(struct!.dot11BeProfileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_fabric: {
      value: cdktf.booleanToHclTerraform(struct!.enableFabric),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_flex_connect: {
      value: cdktf.booleanToHclTerraform(struct!.enableFlexConnect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_to_vlan: {
      value: cdktf.numberToHclTerraform(struct!.localToVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssid_name: {
      value: cdktf.stringToHclTerraform(struct!.ssidName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wlan_profile_name: {
      value: cdktf.stringToHclTerraform(struct!.wlanProfileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelessProfileSsidDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessProfileSsidDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dot11BeProfileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dot11BeProfileId = this._dot11BeProfileId;
    }
    if (this._enableFabric !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableFabric = this._enableFabric;
    }
    if (this._enableFlexConnect !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableFlexConnect = this._enableFlexConnect;
    }
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._localToVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.localToVlan = this._localToVlan;
    }
    if (this._ssidName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssidName = this._ssidName;
    }
    if (this._wlanProfileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.wlanProfileName = this._wlanProfileName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessProfileSsidDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dot11BeProfileId = undefined;
      this._enableFabric = undefined;
      this._enableFlexConnect = undefined;
      this._interfaceName = undefined;
      this._localToVlan = undefined;
      this._ssidName = undefined;
      this._wlanProfileName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dot11BeProfileId = value.dot11BeProfileId;
      this._enableFabric = value.enableFabric;
      this._enableFlexConnect = value.enableFlexConnect;
      this._interfaceName = value.interfaceName;
      this._localToVlan = value.localToVlan;
      this._ssidName = value.ssidName;
      this._wlanProfileName = value.wlanProfileName;
    }
  }

  // dot11be_profile_id - computed: false, optional: true, required: false
  private _dot11BeProfileId?: string; 
  public get dot11BeProfileId() {
    return this.getStringAttribute('dot11be_profile_id');
  }
  public set dot11BeProfileId(value: string) {
    this._dot11BeProfileId = value;
  }
  public resetDot11BeProfileId() {
    this._dot11BeProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot11BeProfileIdInput() {
    return this._dot11BeProfileId;
  }

  // enable_fabric - computed: false, optional: true, required: false
  private _enableFabric?: boolean | cdktf.IResolvable; 
  public get enableFabric() {
    return this.getBooleanAttribute('enable_fabric');
  }
  public set enableFabric(value: boolean | cdktf.IResolvable) {
    this._enableFabric = value;
  }
  public resetEnableFabric() {
    this._enableFabric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFabricInput() {
    return this._enableFabric;
  }

  // enable_flex_connect - computed: false, optional: true, required: false
  private _enableFlexConnect?: boolean | cdktf.IResolvable; 
  public get enableFlexConnect() {
    return this.getBooleanAttribute('enable_flex_connect');
  }
  public set enableFlexConnect(value: boolean | cdktf.IResolvable) {
    this._enableFlexConnect = value;
  }
  public resetEnableFlexConnect() {
    this._enableFlexConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFlexConnectInput() {
    return this._enableFlexConnect;
  }

  // interface_name - computed: false, optional: true, required: false
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  public resetInterfaceName() {
    this._interfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // local_to_vlan - computed: false, optional: true, required: false
  private _localToVlan?: number; 
  public get localToVlan() {
    return this.getNumberAttribute('local_to_vlan');
  }
  public set localToVlan(value: number) {
    this._localToVlan = value;
  }
  public resetLocalToVlan() {
    this._localToVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localToVlanInput() {
    return this._localToVlan;
  }

  // ssid_name - computed: false, optional: false, required: true
  private _ssidName?: string; 
  public get ssidName() {
    return this.getStringAttribute('ssid_name');
  }
  public set ssidName(value: string) {
    this._ssidName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ssidNameInput() {
    return this._ssidName;
  }

  // wlan_profile_name - computed: false, optional: true, required: false
  private _wlanProfileName?: string; 
  public get wlanProfileName() {
    return this.getStringAttribute('wlan_profile_name');
  }
  public set wlanProfileName(value: string) {
    this._wlanProfileName = value;
  }
  public resetWlanProfileName() {
    this._wlanProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wlanProfileNameInput() {
    return this._wlanProfileName;
  }
}

export class WirelessProfileSsidDetailsList extends cdktf.ComplexList {
  public internalValue? : WirelessProfileSsidDetails[] | cdktf.IResolvable

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
  public get(index: number): WirelessProfileSsidDetailsOutputReference {
    return new WirelessProfileSsidDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_profile catalystcenter_wireless_profile}
*/
export class WirelessProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_wireless_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelessProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelessProfile to import
  * @param importFromId The id of the existing WirelessProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelessProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_wireless_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_profile catalystcenter_wireless_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelessProfileConfig
  */
  public constructor(scope: Construct, id: string, config: WirelessProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_wireless_profile',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalInterfaces = config.additionalInterfaces;
    this._apZones.internalValue = config.apZones;
    this._ssidDetails.internalValue = config.ssidDetails;
    this._wirelessProfileName = config.wirelessProfileName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_interfaces - computed: false, optional: true, required: false
  private _additionalInterfaces?: string[]; 
  public get additionalInterfaces() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_interfaces'));
  }
  public set additionalInterfaces(value: string[]) {
    this._additionalInterfaces = value;
  }
  public resetAdditionalInterfaces() {
    this._additionalInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalInterfacesInput() {
    return this._additionalInterfaces;
  }

  // ap_zones - computed: false, optional: true, required: false
  private _apZones = new WirelessProfileApZonesList(this, "ap_zones", true);
  public get apZones() {
    return this._apZones;
  }
  public putApZones(value: WirelessProfileApZones[] | cdktf.IResolvable) {
    this._apZones.internalValue = value;
  }
  public resetApZones() {
    this._apZones.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apZonesInput() {
    return this._apZones.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ssid_details - computed: false, optional: true, required: false
  private _ssidDetails = new WirelessProfileSsidDetailsList(this, "ssid_details", true);
  public get ssidDetails() {
    return this._ssidDetails;
  }
  public putSsidDetails(value: WirelessProfileSsidDetails[] | cdktf.IResolvable) {
    this._ssidDetails.internalValue = value;
  }
  public resetSsidDetails() {
    this._ssidDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssidDetailsInput() {
    return this._ssidDetails.internalValue;
  }

  // wireless_profile_name - computed: false, optional: false, required: true
  private _wirelessProfileName?: string; 
  public get wirelessProfileName() {
    return this.getStringAttribute('wireless_profile_name');
  }
  public set wirelessProfileName(value: string) {
    this._wirelessProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wirelessProfileNameInput() {
    return this._wirelessProfileName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additionalInterfaces),
      ap_zones: cdktf.listMapper(wirelessProfileApZonesToTerraform, false)(this._apZones.internalValue),
      ssid_details: cdktf.listMapper(wirelessProfileSsidDetailsToTerraform, false)(this._ssidDetails.internalValue),
      wireless_profile_name: cdktf.stringToTerraform(this._wirelessProfileName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_interfaces: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additionalInterfaces),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ap_zones: {
        value: cdktf.listMapperHcl(wirelessProfileApZonesToHclTerraform, false)(this._apZones.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WirelessProfileApZonesList",
      },
      ssid_details: {
        value: cdktf.listMapperHcl(wirelessProfileSsidDetailsToHclTerraform, false)(this._ssidDetails.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WirelessProfileSsidDetailsList",
      },
      wireless_profile_name: {
        value: cdktf.stringToHclTerraform(this._wirelessProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
