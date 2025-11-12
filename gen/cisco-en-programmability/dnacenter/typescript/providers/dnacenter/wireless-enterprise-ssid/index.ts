// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_enterprise_ssid
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelessEnterpriseSsidConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_enterprise_ssid#id WirelessEnterpriseSsid#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_enterprise_ssid#parameters WirelessEnterpriseSsid#parameters}
  */
  readonly parameters?: WirelessEnterpriseSsidParameters[] | cdktf.IResolvable;
}
export interface WirelessEnterpriseSsidItemSsidDetailsMultiPskSettings {
}

export function wirelessEnterpriseSsidItemSsidDetailsMultiPskSettingsToTerraform(struct?: WirelessEnterpriseSsidItemSsidDetailsMultiPskSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function wirelessEnterpriseSsidItemSsidDetailsMultiPskSettingsToHclTerraform(struct?: WirelessEnterpriseSsidItemSsidDetailsMultiPskSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class WirelessEnterpriseSsidItemSsidDetailsMultiPskSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessEnterpriseSsidItemSsidDetailsMultiPskSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessEnterpriseSsidItemSsidDetailsMultiPskSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // passphrase - computed: true, optional: false, required: false
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }

  // passphrase_type - computed: true, optional: false, required: false
  public get passphraseType() {
    return this.getStringAttribute('passphrase_type');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }
}

export class WirelessEnterpriseSsidItemSsidDetailsMultiPskSettingsList extends cdktf.ComplexList {

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
  public get(index: number): WirelessEnterpriseSsidItemSsidDetailsMultiPskSettingsOutputReference {
    return new WirelessEnterpriseSsidItemSsidDetailsMultiPskSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelessEnterpriseSsidItemSsidDetails {
}

export function wirelessEnterpriseSsidItemSsidDetailsToTerraform(struct?: WirelessEnterpriseSsidItemSsidDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function wirelessEnterpriseSsidItemSsidDetailsToHclTerraform(struct?: WirelessEnterpriseSsidItemSsidDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class WirelessEnterpriseSsidItemSsidDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessEnterpriseSsidItemSsidDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessEnterpriseSsidItemSsidDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aaa_override - computed: true, optional: false, required: false
  public get aaaOverride() {
    return this.getStringAttribute('aaa_override');
  }

  // auth_server - computed: true, optional: false, required: false
  public get authServer() {
    return this.getStringAttribute('auth_server');
  }

  // client_rate_limit - computed: true, optional: false, required: false
  public get clientRateLimit() {
    return this.getNumberAttribute('client_rate_limit');
  }

  // coverage_hole_detection_enable - computed: true, optional: false, required: false
  public get coverageHoleDetectionEnable() {
    return this.getStringAttribute('coverage_hole_detection_enable');
  }

  // enable_broadcast_ssi_d - computed: true, optional: false, required: false
  public get enableBroadcastSsiD() {
    return this.getStringAttribute('enable_broadcast_ssi_d');
  }

  // enable_fast_lane - computed: true, optional: false, required: false
  public get enableFastLane() {
    return this.getStringAttribute('enable_fast_lane');
  }

  // enable_mac_filtering - computed: true, optional: false, required: false
  public get enableMacFiltering() {
    return this.getStringAttribute('enable_mac_filtering');
  }

  // fast_transition - computed: true, optional: false, required: false
  public get fastTransition() {
    return this.getStringAttribute('fast_transition');
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getStringAttribute('is_enabled');
  }

  // is_fabric - computed: true, optional: false, required: false
  public get isFabric() {
    return this.getStringAttribute('is_fabric');
  }

  // multi_psk_settings - computed: true, optional: false, required: false
  private _multiPskSettings = new WirelessEnterpriseSsidItemSsidDetailsMultiPskSettingsList(this, "multi_psk_settings", false);
  public get multiPskSettings() {
    return this._multiPskSettings;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nas_options - computed: true, optional: false, required: false
  public get nasOptions() {
    return this.getListAttribute('nas_options');
  }

  // passphrase - computed: true, optional: false, required: false
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }

  // protected_management_frame - computed: true, optional: false, required: false
  public get protectedManagementFrame() {
    return this.getStringAttribute('protected_management_frame');
  }

  // radio_policy - computed: true, optional: false, required: false
  public get radioPolicy() {
    return this.getStringAttribute('radio_policy');
  }

  // security_level - computed: true, optional: false, required: false
  public get securityLevel() {
    return this.getStringAttribute('security_level');
  }

  // traffic_type - computed: true, optional: false, required: false
  public get trafficType() {
    return this.getStringAttribute('traffic_type');
  }

  // wlan_type - computed: true, optional: false, required: false
  public get wlanType() {
    return this.getStringAttribute('wlan_type');
  }
}

export class WirelessEnterpriseSsidItemSsidDetailsList extends cdktf.ComplexList {

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
  public get(index: number): WirelessEnterpriseSsidItemSsidDetailsOutputReference {
    return new WirelessEnterpriseSsidItemSsidDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelessEnterpriseSsidItem {
}

export function wirelessEnterpriseSsidItemToTerraform(struct?: WirelessEnterpriseSsidItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function wirelessEnterpriseSsidItemToHclTerraform(struct?: WirelessEnterpriseSsidItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class WirelessEnterpriseSsidItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessEnterpriseSsidItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessEnterpriseSsidItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_uuid - computed: true, optional: false, required: false
  public get groupUuid() {
    return this.getStringAttribute('group_uuid');
  }

  // inherited_group_name - computed: true, optional: false, required: false
  public get inheritedGroupName() {
    return this.getStringAttribute('inherited_group_name');
  }

  // inherited_group_uuid - computed: true, optional: false, required: false
  public get inheritedGroupUuid() {
    return this.getStringAttribute('inherited_group_uuid');
  }

  // instance_uuid - computed: true, optional: false, required: false
  public get instanceUuid() {
    return this.getStringAttribute('instance_uuid');
  }

  // ssid_details - computed: true, optional: false, required: false
  private _ssidDetails = new WirelessEnterpriseSsidItemSsidDetailsList(this, "ssid_details", false);
  public get ssidDetails() {
    return this._ssidDetails;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class WirelessEnterpriseSsidItemList extends cdktf.ComplexList {

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
  public get(index: number): WirelessEnterpriseSsidItemOutputReference {
    return new WirelessEnterpriseSsidItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelessEnterpriseSsidParameters {
  /**
  * Basic Service Set Client Idle Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_enterprise_ssid#basic_service_set_client_idle_timeout WirelessEnterpriseSsid#basic_service_set_client_idle_timeout}
  */
  readonly basicServiceSetClientIdleTimeout?: number;
  /**
  * Client Exclusion Timeout
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_enterprise_ssid#client_exclusion_timeout WirelessEnterpriseSsid#client_exclusion_timeout}
  */
  readonly clientExclusionTimeout?: number;
  /**
  * Enable Basic Service Set Max Idle 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_enterprise_ssid#enable_basic_service_set_max_idle WirelessEnterpriseSsid#enable_basic_service_set_max_idle}
  */
  readonly enableBasicServiceSetMaxIdle?: string;
  /**
  * Enable Broadcase SSID 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_enterprise_ssid#enable_broadcast_ssi_d WirelessEnterpriseSsid#enable_broadcast_ssi_d}
  */
  readonly enableBroadcastSsiD?: string;
  /**
  * Enable Client Exclusion
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_enterprise_ssid#enable_client_exclusion WirelessEnterpriseSsid#enable_client_exclusion}
  */
  readonly enableClientExclusion?: string;
  /**
  * Enable Directed Multicast Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_enterprise_ssid#enable_directed_multicast_service WirelessEnterpriseSsid#enable_directed_multicast_service}
  */
  readonly enableDirectedMulticastService?: string;
  /**
  * Enable FastLane
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_enterprise_ssid#enable_fast_lane WirelessEnterpriseSsid#enable_fast_lane}
  */
  readonly enableFastLane?: string;
  /**
  * Enable MAC Filtering
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_enterprise_ssid#enable_mac_filtering WirelessEnterpriseSsid#enable_mac_filtering}
  */
  readonly enableMacFiltering?: string;
  /**
  * Enable Neighbor List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_enterprise_ssid#enable_neighbor_list WirelessEnterpriseSsid#enable_neighbor_list}
  */
  readonly enableNeighborList?: string;
  /**
  * Enable Session Timeout
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_enterprise_ssid#enable_session_time_out WirelessEnterpriseSsid#enable_session_time_out}
  */
  readonly enableSessionTimeOut?: string;
  /**
  * Fast Transition
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_enterprise_ssid#fast_transition WirelessEnterpriseSsid#fast_transition}
  */
  readonly fastTransition?: string;
  /**
  * Management Frame Protection Client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_enterprise_ssid#mfp_client_protection WirelessEnterpriseSsid#mfp_client_protection}
  */
  readonly mfpClientProtection?: string;
  /**
  * SSID NAME
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_enterprise_ssid#name WirelessEnterpriseSsid#name}
  */
  readonly name?: string;
  /**
  * Nas Options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_enterprise_ssid#nas_options WirelessEnterpriseSsid#nas_options}
  */
  readonly nasOptions?: string[];
  /**
  * Passphrase
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_enterprise_ssid#passphrase WirelessEnterpriseSsid#passphrase}
  */
  readonly passphrase?: string;
  /**
  * Radio Policy Enum (enum: Triple band operation (2.4GHz, 5GHz and 6GHz), Triple band operation with band select, 5GHz only, 2.4GHz only, 6GHz only)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_enterprise_ssid#radio_policy WirelessEnterpriseSsid#radio_policy}
  */
  readonly radioPolicy?: string;
  /**
  * Security Level
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_enterprise_ssid#security_level WirelessEnterpriseSsid#security_level}
  */
  readonly securityLevel?: string;
  /**
  * Session Time Out
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_enterprise_ssid#session_time_out WirelessEnterpriseSsid#session_time_out}
  */
  readonly sessionTimeOut?: number;
  /**
  * ssidName path parameter. Enter the SSID name to be deleted
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_enterprise_ssid#ssid_name WirelessEnterpriseSsid#ssid_name}
  */
  readonly ssidName?: string;
  /**
  * Traffic Type Enum (voicedata or data )
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_enterprise_ssid#traffic_type WirelessEnterpriseSsid#traffic_type}
  */
  readonly trafficType?: string;
}

export function wirelessEnterpriseSsidParametersToTerraform(struct?: WirelessEnterpriseSsidParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic_service_set_client_idle_timeout: cdktf.numberToTerraform(struct!.basicServiceSetClientIdleTimeout),
    client_exclusion_timeout: cdktf.numberToTerraform(struct!.clientExclusionTimeout),
    enable_basic_service_set_max_idle: cdktf.stringToTerraform(struct!.enableBasicServiceSetMaxIdle),
    enable_broadcast_ssi_d: cdktf.stringToTerraform(struct!.enableBroadcastSsiD),
    enable_client_exclusion: cdktf.stringToTerraform(struct!.enableClientExclusion),
    enable_directed_multicast_service: cdktf.stringToTerraform(struct!.enableDirectedMulticastService),
    enable_fast_lane: cdktf.stringToTerraform(struct!.enableFastLane),
    enable_mac_filtering: cdktf.stringToTerraform(struct!.enableMacFiltering),
    enable_neighbor_list: cdktf.stringToTerraform(struct!.enableNeighborList),
    enable_session_time_out: cdktf.stringToTerraform(struct!.enableSessionTimeOut),
    fast_transition: cdktf.stringToTerraform(struct!.fastTransition),
    mfp_client_protection: cdktf.stringToTerraform(struct!.mfpClientProtection),
    name: cdktf.stringToTerraform(struct!.name),
    nas_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nasOptions),
    passphrase: cdktf.stringToTerraform(struct!.passphrase),
    radio_policy: cdktf.stringToTerraform(struct!.radioPolicy),
    security_level: cdktf.stringToTerraform(struct!.securityLevel),
    session_time_out: cdktf.numberToTerraform(struct!.sessionTimeOut),
    ssid_name: cdktf.stringToTerraform(struct!.ssidName),
    traffic_type: cdktf.stringToTerraform(struct!.trafficType),
  }
}


export function wirelessEnterpriseSsidParametersToHclTerraform(struct?: WirelessEnterpriseSsidParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic_service_set_client_idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.basicServiceSetClientIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_exclusion_timeout: {
      value: cdktf.numberToHclTerraform(struct!.clientExclusionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_basic_service_set_max_idle: {
      value: cdktf.stringToHclTerraform(struct!.enableBasicServiceSetMaxIdle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_broadcast_ssi_d: {
      value: cdktf.stringToHclTerraform(struct!.enableBroadcastSsiD),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_client_exclusion: {
      value: cdktf.stringToHclTerraform(struct!.enableClientExclusion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_directed_multicast_service: {
      value: cdktf.stringToHclTerraform(struct!.enableDirectedMulticastService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_fast_lane: {
      value: cdktf.stringToHclTerraform(struct!.enableFastLane),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_mac_filtering: {
      value: cdktf.stringToHclTerraform(struct!.enableMacFiltering),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_neighbor_list: {
      value: cdktf.stringToHclTerraform(struct!.enableNeighborList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_session_time_out: {
      value: cdktf.stringToHclTerraform(struct!.enableSessionTimeOut),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fast_transition: {
      value: cdktf.stringToHclTerraform(struct!.fastTransition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mfp_client_protection: {
      value: cdktf.stringToHclTerraform(struct!.mfpClientProtection),
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
    nas_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nasOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    passphrase: {
      value: cdktf.stringToHclTerraform(struct!.passphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    radio_policy: {
      value: cdktf.stringToHclTerraform(struct!.radioPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_level: {
      value: cdktf.stringToHclTerraform(struct!.securityLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_time_out: {
      value: cdktf.numberToHclTerraform(struct!.sessionTimeOut),
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
    traffic_type: {
      value: cdktf.stringToHclTerraform(struct!.trafficType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelessEnterpriseSsidParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessEnterpriseSsidParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicServiceSetClientIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicServiceSetClientIdleTimeout = this._basicServiceSetClientIdleTimeout;
    }
    if (this._clientExclusionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientExclusionTimeout = this._clientExclusionTimeout;
    }
    if (this._enableBasicServiceSetMaxIdle !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableBasicServiceSetMaxIdle = this._enableBasicServiceSetMaxIdle;
    }
    if (this._enableBroadcastSsiD !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableBroadcastSsiD = this._enableBroadcastSsiD;
    }
    if (this._enableClientExclusion !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableClientExclusion = this._enableClientExclusion;
    }
    if (this._enableDirectedMulticastService !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDirectedMulticastService = this._enableDirectedMulticastService;
    }
    if (this._enableFastLane !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableFastLane = this._enableFastLane;
    }
    if (this._enableMacFiltering !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMacFiltering = this._enableMacFiltering;
    }
    if (this._enableNeighborList !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNeighborList = this._enableNeighborList;
    }
    if (this._enableSessionTimeOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSessionTimeOut = this._enableSessionTimeOut;
    }
    if (this._fastTransition !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastTransition = this._fastTransition;
    }
    if (this._mfpClientProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.mfpClientProtection = this._mfpClientProtection;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nasOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.nasOptions = this._nasOptions;
    }
    if (this._passphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphrase = this._passphrase;
    }
    if (this._radioPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.radioPolicy = this._radioPolicy;
    }
    if (this._securityLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityLevel = this._securityLevel;
    }
    if (this._sessionTimeOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionTimeOut = this._sessionTimeOut;
    }
    if (this._ssidName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssidName = this._ssidName;
    }
    if (this._trafficType !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficType = this._trafficType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessEnterpriseSsidParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basicServiceSetClientIdleTimeout = undefined;
      this._clientExclusionTimeout = undefined;
      this._enableBasicServiceSetMaxIdle = undefined;
      this._enableBroadcastSsiD = undefined;
      this._enableClientExclusion = undefined;
      this._enableDirectedMulticastService = undefined;
      this._enableFastLane = undefined;
      this._enableMacFiltering = undefined;
      this._enableNeighborList = undefined;
      this._enableSessionTimeOut = undefined;
      this._fastTransition = undefined;
      this._mfpClientProtection = undefined;
      this._name = undefined;
      this._nasOptions = undefined;
      this._passphrase = undefined;
      this._radioPolicy = undefined;
      this._securityLevel = undefined;
      this._sessionTimeOut = undefined;
      this._ssidName = undefined;
      this._trafficType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basicServiceSetClientIdleTimeout = value.basicServiceSetClientIdleTimeout;
      this._clientExclusionTimeout = value.clientExclusionTimeout;
      this._enableBasicServiceSetMaxIdle = value.enableBasicServiceSetMaxIdle;
      this._enableBroadcastSsiD = value.enableBroadcastSsiD;
      this._enableClientExclusion = value.enableClientExclusion;
      this._enableDirectedMulticastService = value.enableDirectedMulticastService;
      this._enableFastLane = value.enableFastLane;
      this._enableMacFiltering = value.enableMacFiltering;
      this._enableNeighborList = value.enableNeighborList;
      this._enableSessionTimeOut = value.enableSessionTimeOut;
      this._fastTransition = value.fastTransition;
      this._mfpClientProtection = value.mfpClientProtection;
      this._name = value.name;
      this._nasOptions = value.nasOptions;
      this._passphrase = value.passphrase;
      this._radioPolicy = value.radioPolicy;
      this._securityLevel = value.securityLevel;
      this._sessionTimeOut = value.sessionTimeOut;
      this._ssidName = value.ssidName;
      this._trafficType = value.trafficType;
    }
  }

  // basic_service_set_client_idle_timeout - computed: true, optional: true, required: false
  private _basicServiceSetClientIdleTimeout?: number; 
  public get basicServiceSetClientIdleTimeout() {
    return this.getNumberAttribute('basic_service_set_client_idle_timeout');
  }
  public set basicServiceSetClientIdleTimeout(value: number) {
    this._basicServiceSetClientIdleTimeout = value;
  }
  public resetBasicServiceSetClientIdleTimeout() {
    this._basicServiceSetClientIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicServiceSetClientIdleTimeoutInput() {
    return this._basicServiceSetClientIdleTimeout;
  }

  // client_exclusion_timeout - computed: true, optional: true, required: false
  private _clientExclusionTimeout?: number; 
  public get clientExclusionTimeout() {
    return this.getNumberAttribute('client_exclusion_timeout');
  }
  public set clientExclusionTimeout(value: number) {
    this._clientExclusionTimeout = value;
  }
  public resetClientExclusionTimeout() {
    this._clientExclusionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientExclusionTimeoutInput() {
    return this._clientExclusionTimeout;
  }

  // enable_basic_service_set_max_idle - computed: true, optional: true, required: false
  private _enableBasicServiceSetMaxIdle?: string; 
  public get enableBasicServiceSetMaxIdle() {
    return this.getStringAttribute('enable_basic_service_set_max_idle');
  }
  public set enableBasicServiceSetMaxIdle(value: string) {
    this._enableBasicServiceSetMaxIdle = value;
  }
  public resetEnableBasicServiceSetMaxIdle() {
    this._enableBasicServiceSetMaxIdle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBasicServiceSetMaxIdleInput() {
    return this._enableBasicServiceSetMaxIdle;
  }

  // enable_broadcast_ssi_d - computed: true, optional: true, required: false
  private _enableBroadcastSsiD?: string; 
  public get enableBroadcastSsiD() {
    return this.getStringAttribute('enable_broadcast_ssi_d');
  }
  public set enableBroadcastSsiD(value: string) {
    this._enableBroadcastSsiD = value;
  }
  public resetEnableBroadcastSsiD() {
    this._enableBroadcastSsiD = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBroadcastSsiDInput() {
    return this._enableBroadcastSsiD;
  }

  // enable_client_exclusion - computed: true, optional: true, required: false
  private _enableClientExclusion?: string; 
  public get enableClientExclusion() {
    return this.getStringAttribute('enable_client_exclusion');
  }
  public set enableClientExclusion(value: string) {
    this._enableClientExclusion = value;
  }
  public resetEnableClientExclusion() {
    this._enableClientExclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableClientExclusionInput() {
    return this._enableClientExclusion;
  }

  // enable_directed_multicast_service - computed: true, optional: true, required: false
  private _enableDirectedMulticastService?: string; 
  public get enableDirectedMulticastService() {
    return this.getStringAttribute('enable_directed_multicast_service');
  }
  public set enableDirectedMulticastService(value: string) {
    this._enableDirectedMulticastService = value;
  }
  public resetEnableDirectedMulticastService() {
    this._enableDirectedMulticastService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDirectedMulticastServiceInput() {
    return this._enableDirectedMulticastService;
  }

  // enable_fast_lane - computed: true, optional: true, required: false
  private _enableFastLane?: string; 
  public get enableFastLane() {
    return this.getStringAttribute('enable_fast_lane');
  }
  public set enableFastLane(value: string) {
    this._enableFastLane = value;
  }
  public resetEnableFastLane() {
    this._enableFastLane = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFastLaneInput() {
    return this._enableFastLane;
  }

  // enable_mac_filtering - computed: true, optional: true, required: false
  private _enableMacFiltering?: string; 
  public get enableMacFiltering() {
    return this.getStringAttribute('enable_mac_filtering');
  }
  public set enableMacFiltering(value: string) {
    this._enableMacFiltering = value;
  }
  public resetEnableMacFiltering() {
    this._enableMacFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMacFilteringInput() {
    return this._enableMacFiltering;
  }

  // enable_neighbor_list - computed: true, optional: true, required: false
  private _enableNeighborList?: string; 
  public get enableNeighborList() {
    return this.getStringAttribute('enable_neighbor_list');
  }
  public set enableNeighborList(value: string) {
    this._enableNeighborList = value;
  }
  public resetEnableNeighborList() {
    this._enableNeighborList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNeighborListInput() {
    return this._enableNeighborList;
  }

  // enable_session_time_out - computed: true, optional: true, required: false
  private _enableSessionTimeOut?: string; 
  public get enableSessionTimeOut() {
    return this.getStringAttribute('enable_session_time_out');
  }
  public set enableSessionTimeOut(value: string) {
    this._enableSessionTimeOut = value;
  }
  public resetEnableSessionTimeOut() {
    this._enableSessionTimeOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSessionTimeOutInput() {
    return this._enableSessionTimeOut;
  }

  // fast_transition - computed: true, optional: true, required: false
  private _fastTransition?: string; 
  public get fastTransition() {
    return this.getStringAttribute('fast_transition');
  }
  public set fastTransition(value: string) {
    this._fastTransition = value;
  }
  public resetFastTransition() {
    this._fastTransition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastTransitionInput() {
    return this._fastTransition;
  }

  // mfp_client_protection - computed: true, optional: true, required: false
  private _mfpClientProtection?: string; 
  public get mfpClientProtection() {
    return this.getStringAttribute('mfp_client_protection');
  }
  public set mfpClientProtection(value: string) {
    this._mfpClientProtection = value;
  }
  public resetMfpClientProtection() {
    this._mfpClientProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfpClientProtectionInput() {
    return this._mfpClientProtection;
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

  // nas_options - computed: true, optional: true, required: false
  private _nasOptions?: string[]; 
  public get nasOptions() {
    return this.getListAttribute('nas_options');
  }
  public set nasOptions(value: string[]) {
    this._nasOptions = value;
  }
  public resetNasOptions() {
    this._nasOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nasOptionsInput() {
    return this._nasOptions;
  }

  // passphrase - computed: true, optional: true, required: false
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }

  // radio_policy - computed: true, optional: true, required: false
  private _radioPolicy?: string; 
  public get radioPolicy() {
    return this.getStringAttribute('radio_policy');
  }
  public set radioPolicy(value: string) {
    this._radioPolicy = value;
  }
  public resetRadioPolicy() {
    this._radioPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioPolicyInput() {
    return this._radioPolicy;
  }

  // security_level - computed: true, optional: true, required: false
  private _securityLevel?: string; 
  public get securityLevel() {
    return this.getStringAttribute('security_level');
  }
  public set securityLevel(value: string) {
    this._securityLevel = value;
  }
  public resetSecurityLevel() {
    this._securityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityLevelInput() {
    return this._securityLevel;
  }

  // session_time_out - computed: true, optional: true, required: false
  private _sessionTimeOut?: number; 
  public get sessionTimeOut() {
    return this.getNumberAttribute('session_time_out');
  }
  public set sessionTimeOut(value: number) {
    this._sessionTimeOut = value;
  }
  public resetSessionTimeOut() {
    this._sessionTimeOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeOutInput() {
    return this._sessionTimeOut;
  }

  // ssid_name - computed: false, optional: true, required: false
  private _ssidName?: string; 
  public get ssidName() {
    return this.getStringAttribute('ssid_name');
  }
  public set ssidName(value: string) {
    this._ssidName = value;
  }
  public resetSsidName() {
    this._ssidName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssidNameInput() {
    return this._ssidName;
  }

  // traffic_type - computed: true, optional: true, required: false
  private _trafficType?: string; 
  public get trafficType() {
    return this.getStringAttribute('traffic_type');
  }
  public set trafficType(value: string) {
    this._trafficType = value;
  }
  public resetTrafficType() {
    this._trafficType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficTypeInput() {
    return this._trafficType;
  }
}

export class WirelessEnterpriseSsidParametersList extends cdktf.ComplexList {
  public internalValue? : WirelessEnterpriseSsidParameters[] | cdktf.IResolvable

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
  public get(index: number): WirelessEnterpriseSsidParametersOutputReference {
    return new WirelessEnterpriseSsidParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_enterprise_ssid dnacenter_wireless_enterprise_ssid}
*/
export class WirelessEnterpriseSsid extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_wireless_enterprise_ssid";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelessEnterpriseSsid resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelessEnterpriseSsid to import
  * @param importFromId The id of the existing WirelessEnterpriseSsid that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_enterprise_ssid#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelessEnterpriseSsid to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_wireless_enterprise_ssid", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_enterprise_ssid dnacenter_wireless_enterprise_ssid} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelessEnterpriseSsidConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WirelessEnterpriseSsidConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_wireless_enterprise_ssid',
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
  private _item = new WirelessEnterpriseSsidItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new WirelessEnterpriseSsidParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: WirelessEnterpriseSsidParameters[] | cdktf.IResolvable) {
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
      parameters: cdktf.listMapper(wirelessEnterpriseSsidParametersToTerraform, true)(this._parameters.internalValue),
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
        value: cdktf.listMapperHcl(wirelessEnterpriseSsidParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelessEnterpriseSsidParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
