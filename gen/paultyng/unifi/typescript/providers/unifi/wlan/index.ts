// https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/wlan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * IDs of the AP groups to use for this network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/wlan#ap_group_ids Wlan#ap_group_ids}
  */
  readonly apGroupIds?: string[];
  /**
  * Improves client transitions between APs when they have a weak signal. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/wlan#bss_transition Wlan#bss_transition}
  */
  readonly bssTransition?: boolean | cdktf.IResolvable;
  /**
  * Enables 802.11r fast roaming. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/wlan#fast_roaming_enabled Wlan#fast_roaming_enabled}
  */
  readonly fastRoamingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether or not to hide the SSID from broadcast.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/wlan#hide_ssid Wlan#hide_ssid}
  */
  readonly hideSsid?: boolean | cdktf.IResolvable;
  /**
  * Indicates that this is a guest WLAN and should use guest behaviors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/wlan#is_guest Wlan#is_guest}
  */
  readonly isGuest?: boolean | cdktf.IResolvable;
  /**
  * Isolates stations on layer 2 (ethernet) level. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/wlan#l2_isolation Wlan#l2_isolation}
  */
  readonly l2Isolation?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether or not the MAC filter is turned of for the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/wlan#mac_filter_enabled Wlan#mac_filter_enabled}
  */
  readonly macFilterEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of MAC addresses to filter (only valid if `mac_filter_enabled` is `true`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/wlan#mac_filter_list Wlan#mac_filter_list}
  */
  readonly macFilterList?: string[];
  /**
  * MAC address filter policy (only valid if `mac_filter_enabled` is `true`). Defaults to `deny`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/wlan#mac_filter_policy Wlan#mac_filter_policy}
  */
  readonly macFilterPolicy?: string;
  /**
  * Set minimum data rate control for 2G devices, in Kbps. Use `0` to disable minimum data rates. Valid values are: `1000`, `2000`, `5500`, `6000`, `9000`, `11000`, `12000`, `18000`, `24000`, `36000`, `48000`,  and `54000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/wlan#minimum_data_rate_2g_kbps Wlan#minimum_data_rate_2g_kbps}
  */
  readonly minimumDataRate2GKbps?: number;
  /**
  * Set minimum data rate control for 5G devices, in Kbps. Use `0` to disable minimum data rates. Valid values are: `6000`, `9000`, `12000`, `18000`, `24000`, `36000`, `48000`,  and `54000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/wlan#minimum_data_rate_5g_kbps Wlan#minimum_data_rate_5g_kbps}
  */
  readonly minimumDataRate5GKbps?: number;
  /**
  * Indicates whether or not Multicast Enhance is turned of for the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/wlan#multicast_enhance Wlan#multicast_enhance}
  */
  readonly multicastEnhance?: boolean | cdktf.IResolvable;
  /**
  * The SSID of the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/wlan#name Wlan#name}
  */
  readonly name: string;
  /**
  * ID of the network for this SSID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/wlan#network_id Wlan#network_id}
  */
  readonly networkId?: string;
  /**
  * Connect high performance clients to 5 GHz only. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/wlan#no2ghz_oui Wlan#no2ghz_oui}
  */
  readonly no2GhzOui?: boolean | cdktf.IResolvable;
  /**
  * The passphrase for the network, this is only required if `security` is not set to `open`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/wlan#passphrase Wlan#passphrase}
  */
  readonly passphrase?: string;
  /**
  * Enable Protected Management Frames. This cannot be disabled if using WPA 3. Valid values are `required`, `optional` and `disabled`. Defaults to `disabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/wlan#pmf_mode Wlan#pmf_mode}
  */
  readonly pmfMode?: string;
  /**
  * Reduces airtime usage by allowing APs to "proxy" common broadcast frames as unicast. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/wlan#proxy_arp Wlan#proxy_arp}
  */
  readonly proxyArp?: boolean | cdktf.IResolvable;
  /**
  * ID of the RADIUS profile to use when security `wpaeap`. You can query this via the `unifi_radius_profile` data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/wlan#radius_profile_id Wlan#radius_profile_id}
  */
  readonly radiusProfileId?: string;
  /**
  * The type of WiFi security for this network. Valid values are: `wpapsk`, `wpaeap`, and `open`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/wlan#security Wlan#security}
  */
  readonly security: string;
  /**
  * The name of the site to associate the wlan with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/wlan#site Wlan#site}
  */
  readonly site?: string;
  /**
  * Enable Unscheduled Automatic Power Save Delivery. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/wlan#uapsd Wlan#uapsd}
  */
  readonly uapsd?: boolean | cdktf.IResolvable;
  /**
  * ID of the user group to use for this network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/wlan#user_group_id Wlan#user_group_id}
  */
  readonly userGroupId: string;
  /**
  * Radio band your WiFi network will use. Defaults to `both`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/wlan#wlan_band Wlan#wlan_band}
  */
  readonly wlanBand?: string;
  /**
  * Enable WPA 3 support (security must be `wpapsk` and PMF must be turned on).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/wlan#wpa3_support Wlan#wpa3_support}
  */
  readonly wpa3Support?: boolean | cdktf.IResolvable;
  /**
  * Enable WPA 3 and WPA 2 support (security must be `wpapsk` and `wpa3_support` must be true).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/wlan#wpa3_transition Wlan#wpa3_transition}
  */
  readonly wpa3Transition?: boolean | cdktf.IResolvable;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/wlan#schedule Wlan#schedule}
  */
  readonly schedule?: WlanSchedule[] | cdktf.IResolvable;
}
export interface WlanSchedule {
  /**
  * Day of week for the block. Valid values are `sun`, `mon`, `tue`, `wed`, `thu`, `fri`, `sat`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/wlan#day_of_week Wlan#day_of_week}
  */
  readonly dayOfWeek: string;
  /**
  * Length of the block in minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/wlan#duration Wlan#duration}
  */
  readonly duration: number;
  /**
  * Name of the block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/wlan#name Wlan#name}
  */
  readonly name?: string;
  /**
  * Start hour for the block (0-23).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/wlan#start_hour Wlan#start_hour}
  */
  readonly startHour: number;
  /**
  * Start minute for the block (0-59). Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/wlan#start_minute Wlan#start_minute}
  */
  readonly startMinute?: number;
}

export function wlanScheduleToTerraform(struct?: WlanSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    duration: cdktf.numberToTerraform(struct!.duration),
    name: cdktf.stringToTerraform(struct!.name),
    start_hour: cdktf.numberToTerraform(struct!.startHour),
    start_minute: cdktf.numberToTerraform(struct!.startMinute),
  }
}


export function wlanScheduleToHclTerraform(struct?: WlanSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
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
    start_hour: {
      value: cdktf.numberToHclTerraform(struct!.startHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_minute: {
      value: cdktf.numberToHclTerraform(struct!.startMinute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WlanScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WlanSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._startHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.startHour = this._startHour;
    }
    if (this._startMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.startMinute = this._startMinute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WlanSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dayOfWeek = undefined;
      this._duration = undefined;
      this._name = undefined;
      this._startHour = undefined;
      this._startMinute = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dayOfWeek = value.dayOfWeek;
      this._duration = value.duration;
      this._name = value.name;
      this._startHour = value.startHour;
      this._startMinute = value.startMinute;
    }
  }

  // day_of_week - computed: false, optional: false, required: true
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // name - computed: false, optional: true, required: false
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

  // start_hour - computed: false, optional: false, required: true
  private _startHour?: number; 
  public get startHour() {
    return this.getNumberAttribute('start_hour');
  }
  public set startHour(value: number) {
    this._startHour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startHourInput() {
    return this._startHour;
  }

  // start_minute - computed: false, optional: true, required: false
  private _startMinute?: number; 
  public get startMinute() {
    return this.getNumberAttribute('start_minute');
  }
  public set startMinute(value: number) {
    this._startMinute = value;
  }
  public resetStartMinute() {
    this._startMinute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startMinuteInput() {
    return this._startMinute;
  }
}

export class WlanScheduleList extends cdktf.ComplexList {
  public internalValue? : WlanSchedule[] | cdktf.IResolvable

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
  public get(index: number): WlanScheduleOutputReference {
    return new WlanScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/wlan unifi_wlan}
*/
export class Wlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "unifi_wlan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Wlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Wlan to import
  * @param importFromId The id of the existing Wlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/wlan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Wlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "unifi_wlan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/wlan unifi_wlan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WlanConfig
  */
  public constructor(scope: Construct, id: string, config: WlanConfig) {
    super(scope, id, {
      terraformResourceType: 'unifi_wlan',
      terraformGeneratorMetadata: {
        providerName: 'unifi',
        providerVersion: '0.41.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apGroupIds = config.apGroupIds;
    this._bssTransition = config.bssTransition;
    this._fastRoamingEnabled = config.fastRoamingEnabled;
    this._hideSsid = config.hideSsid;
    this._isGuest = config.isGuest;
    this._l2Isolation = config.l2Isolation;
    this._macFilterEnabled = config.macFilterEnabled;
    this._macFilterList = config.macFilterList;
    this._macFilterPolicy = config.macFilterPolicy;
    this._minimumDataRate2GKbps = config.minimumDataRate2GKbps;
    this._minimumDataRate5GKbps = config.minimumDataRate5GKbps;
    this._multicastEnhance = config.multicastEnhance;
    this._name = config.name;
    this._networkId = config.networkId;
    this._no2GhzOui = config.no2GhzOui;
    this._passphrase = config.passphrase;
    this._pmfMode = config.pmfMode;
    this._proxyArp = config.proxyArp;
    this._radiusProfileId = config.radiusProfileId;
    this._security = config.security;
    this._site = config.site;
    this._uapsd = config.uapsd;
    this._userGroupId = config.userGroupId;
    this._wlanBand = config.wlanBand;
    this._wpa3Support = config.wpa3Support;
    this._wpa3Transition = config.wpa3Transition;
    this._schedule.internalValue = config.schedule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ap_group_ids - computed: false, optional: true, required: false
  private _apGroupIds?: string[]; 
  public get apGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('ap_group_ids'));
  }
  public set apGroupIds(value: string[]) {
    this._apGroupIds = value;
  }
  public resetApGroupIds() {
    this._apGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apGroupIdsInput() {
    return this._apGroupIds;
  }

  // bss_transition - computed: false, optional: true, required: false
  private _bssTransition?: boolean | cdktf.IResolvable; 
  public get bssTransition() {
    return this.getBooleanAttribute('bss_transition');
  }
  public set bssTransition(value: boolean | cdktf.IResolvable) {
    this._bssTransition = value;
  }
  public resetBssTransition() {
    this._bssTransition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bssTransitionInput() {
    return this._bssTransition;
  }

  // fast_roaming_enabled - computed: false, optional: true, required: false
  private _fastRoamingEnabled?: boolean | cdktf.IResolvable; 
  public get fastRoamingEnabled() {
    return this.getBooleanAttribute('fast_roaming_enabled');
  }
  public set fastRoamingEnabled(value: boolean | cdktf.IResolvable) {
    this._fastRoamingEnabled = value;
  }
  public resetFastRoamingEnabled() {
    this._fastRoamingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastRoamingEnabledInput() {
    return this._fastRoamingEnabled;
  }

  // hide_ssid - computed: false, optional: true, required: false
  private _hideSsid?: boolean | cdktf.IResolvable; 
  public get hideSsid() {
    return this.getBooleanAttribute('hide_ssid');
  }
  public set hideSsid(value: boolean | cdktf.IResolvable) {
    this._hideSsid = value;
  }
  public resetHideSsid() {
    this._hideSsid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideSsidInput() {
    return this._hideSsid;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_guest - computed: false, optional: true, required: false
  private _isGuest?: boolean | cdktf.IResolvable; 
  public get isGuest() {
    return this.getBooleanAttribute('is_guest');
  }
  public set isGuest(value: boolean | cdktf.IResolvable) {
    this._isGuest = value;
  }
  public resetIsGuest() {
    this._isGuest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isGuestInput() {
    return this._isGuest;
  }

  // l2_isolation - computed: false, optional: true, required: false
  private _l2Isolation?: boolean | cdktf.IResolvable; 
  public get l2Isolation() {
    return this.getBooleanAttribute('l2_isolation');
  }
  public set l2Isolation(value: boolean | cdktf.IResolvable) {
    this._l2Isolation = value;
  }
  public resetL2Isolation() {
    this._l2Isolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2IsolationInput() {
    return this._l2Isolation;
  }

  // mac_filter_enabled - computed: false, optional: true, required: false
  private _macFilterEnabled?: boolean | cdktf.IResolvable; 
  public get macFilterEnabled() {
    return this.getBooleanAttribute('mac_filter_enabled');
  }
  public set macFilterEnabled(value: boolean | cdktf.IResolvable) {
    this._macFilterEnabled = value;
  }
  public resetMacFilterEnabled() {
    this._macFilterEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macFilterEnabledInput() {
    return this._macFilterEnabled;
  }

  // mac_filter_list - computed: false, optional: true, required: false
  private _macFilterList?: string[]; 
  public get macFilterList() {
    return cdktf.Fn.tolist(this.getListAttribute('mac_filter_list'));
  }
  public set macFilterList(value: string[]) {
    this._macFilterList = value;
  }
  public resetMacFilterList() {
    this._macFilterList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macFilterListInput() {
    return this._macFilterList;
  }

  // mac_filter_policy - computed: false, optional: true, required: false
  private _macFilterPolicy?: string; 
  public get macFilterPolicy() {
    return this.getStringAttribute('mac_filter_policy');
  }
  public set macFilterPolicy(value: string) {
    this._macFilterPolicy = value;
  }
  public resetMacFilterPolicy() {
    this._macFilterPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macFilterPolicyInput() {
    return this._macFilterPolicy;
  }

  // minimum_data_rate_2g_kbps - computed: false, optional: true, required: false
  private _minimumDataRate2GKbps?: number; 
  public get minimumDataRate2GKbps() {
    return this.getNumberAttribute('minimum_data_rate_2g_kbps');
  }
  public set minimumDataRate2GKbps(value: number) {
    this._minimumDataRate2GKbps = value;
  }
  public resetMinimumDataRate2GKbps() {
    this._minimumDataRate2GKbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumDataRate2GKbpsInput() {
    return this._minimumDataRate2GKbps;
  }

  // minimum_data_rate_5g_kbps - computed: false, optional: true, required: false
  private _minimumDataRate5GKbps?: number; 
  public get minimumDataRate5GKbps() {
    return this.getNumberAttribute('minimum_data_rate_5g_kbps');
  }
  public set minimumDataRate5GKbps(value: number) {
    this._minimumDataRate5GKbps = value;
  }
  public resetMinimumDataRate5GKbps() {
    this._minimumDataRate5GKbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumDataRate5GKbpsInput() {
    return this._minimumDataRate5GKbps;
  }

  // multicast_enhance - computed: false, optional: true, required: false
  private _multicastEnhance?: boolean | cdktf.IResolvable; 
  public get multicastEnhance() {
    return this.getBooleanAttribute('multicast_enhance');
  }
  public set multicastEnhance(value: boolean | cdktf.IResolvable) {
    this._multicastEnhance = value;
  }
  public resetMulticastEnhance() {
    this._multicastEnhance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastEnhanceInput() {
    return this._multicastEnhance;
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

  // network_id - computed: false, optional: true, required: false
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // no2ghz_oui - computed: false, optional: true, required: false
  private _no2GhzOui?: boolean | cdktf.IResolvable; 
  public get no2GhzOui() {
    return this.getBooleanAttribute('no2ghz_oui');
  }
  public set no2GhzOui(value: boolean | cdktf.IResolvable) {
    this._no2GhzOui = value;
  }
  public resetNo2GhzOui() {
    this._no2GhzOui = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get no2GhzOuiInput() {
    return this._no2GhzOui;
  }

  // passphrase - computed: false, optional: true, required: false
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

  // pmf_mode - computed: false, optional: true, required: false
  private _pmfMode?: string; 
  public get pmfMode() {
    return this.getStringAttribute('pmf_mode');
  }
  public set pmfMode(value: string) {
    this._pmfMode = value;
  }
  public resetPmfMode() {
    this._pmfMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmfModeInput() {
    return this._pmfMode;
  }

  // proxy_arp - computed: false, optional: true, required: false
  private _proxyArp?: boolean | cdktf.IResolvable; 
  public get proxyArp() {
    return this.getBooleanAttribute('proxy_arp');
  }
  public set proxyArp(value: boolean | cdktf.IResolvable) {
    this._proxyArp = value;
  }
  public resetProxyArp() {
    this._proxyArp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyArpInput() {
    return this._proxyArp;
  }

  // radius_profile_id - computed: false, optional: true, required: false
  private _radiusProfileId?: string; 
  public get radiusProfileId() {
    return this.getStringAttribute('radius_profile_id');
  }
  public set radiusProfileId(value: string) {
    this._radiusProfileId = value;
  }
  public resetRadiusProfileId() {
    this._radiusProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusProfileIdInput() {
    return this._radiusProfileId;
  }

  // security - computed: false, optional: false, required: true
  private _security?: string; 
  public get security() {
    return this.getStringAttribute('security');
  }
  public set security(value: string) {
    this._security = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security;
  }

  // site - computed: true, optional: true, required: false
  private _site?: string; 
  public get site() {
    return this.getStringAttribute('site');
  }
  public set site(value: string) {
    this._site = value;
  }
  public resetSite() {
    this._site = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site;
  }

  // uapsd - computed: false, optional: true, required: false
  private _uapsd?: boolean | cdktf.IResolvable; 
  public get uapsd() {
    return this.getBooleanAttribute('uapsd');
  }
  public set uapsd(value: boolean | cdktf.IResolvable) {
    this._uapsd = value;
  }
  public resetUapsd() {
    this._uapsd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uapsdInput() {
    return this._uapsd;
  }

  // user_group_id - computed: false, optional: false, required: true
  private _userGroupId?: string; 
  public get userGroupId() {
    return this.getStringAttribute('user_group_id');
  }
  public set userGroupId(value: string) {
    this._userGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupIdInput() {
    return this._userGroupId;
  }

  // wlan_band - computed: false, optional: true, required: false
  private _wlanBand?: string; 
  public get wlanBand() {
    return this.getStringAttribute('wlan_band');
  }
  public set wlanBand(value: string) {
    this._wlanBand = value;
  }
  public resetWlanBand() {
    this._wlanBand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wlanBandInput() {
    return this._wlanBand;
  }

  // wpa3_support - computed: false, optional: true, required: false
  private _wpa3Support?: boolean | cdktf.IResolvable; 
  public get wpa3Support() {
    return this.getBooleanAttribute('wpa3_support');
  }
  public set wpa3Support(value: boolean | cdktf.IResolvable) {
    this._wpa3Support = value;
  }
  public resetWpa3Support() {
    this._wpa3Support = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wpa3SupportInput() {
    return this._wpa3Support;
  }

  // wpa3_transition - computed: false, optional: true, required: false
  private _wpa3Transition?: boolean | cdktf.IResolvable; 
  public get wpa3Transition() {
    return this.getBooleanAttribute('wpa3_transition');
  }
  public set wpa3Transition(value: boolean | cdktf.IResolvable) {
    this._wpa3Transition = value;
  }
  public resetWpa3Transition() {
    this._wpa3Transition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wpa3TransitionInput() {
    return this._wpa3Transition;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new WlanScheduleList(this, "schedule", false);
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: WlanSchedule[] | cdktf.IResolvable) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ap_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._apGroupIds),
      bss_transition: cdktf.booleanToTerraform(this._bssTransition),
      fast_roaming_enabled: cdktf.booleanToTerraform(this._fastRoamingEnabled),
      hide_ssid: cdktf.booleanToTerraform(this._hideSsid),
      is_guest: cdktf.booleanToTerraform(this._isGuest),
      l2_isolation: cdktf.booleanToTerraform(this._l2Isolation),
      mac_filter_enabled: cdktf.booleanToTerraform(this._macFilterEnabled),
      mac_filter_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._macFilterList),
      mac_filter_policy: cdktf.stringToTerraform(this._macFilterPolicy),
      minimum_data_rate_2g_kbps: cdktf.numberToTerraform(this._minimumDataRate2GKbps),
      minimum_data_rate_5g_kbps: cdktf.numberToTerraform(this._minimumDataRate5GKbps),
      multicast_enhance: cdktf.booleanToTerraform(this._multicastEnhance),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      no2ghz_oui: cdktf.booleanToTerraform(this._no2GhzOui),
      passphrase: cdktf.stringToTerraform(this._passphrase),
      pmf_mode: cdktf.stringToTerraform(this._pmfMode),
      proxy_arp: cdktf.booleanToTerraform(this._proxyArp),
      radius_profile_id: cdktf.stringToTerraform(this._radiusProfileId),
      security: cdktf.stringToTerraform(this._security),
      site: cdktf.stringToTerraform(this._site),
      uapsd: cdktf.booleanToTerraform(this._uapsd),
      user_group_id: cdktf.stringToTerraform(this._userGroupId),
      wlan_band: cdktf.stringToTerraform(this._wlanBand),
      wpa3_support: cdktf.booleanToTerraform(this._wpa3Support),
      wpa3_transition: cdktf.booleanToTerraform(this._wpa3Transition),
      schedule: cdktf.listMapper(wlanScheduleToTerraform, true)(this._schedule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ap_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._apGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bss_transition: {
        value: cdktf.booleanToHclTerraform(this._bssTransition),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fast_roaming_enabled: {
        value: cdktf.booleanToHclTerraform(this._fastRoamingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hide_ssid: {
        value: cdktf.booleanToHclTerraform(this._hideSsid),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_guest: {
        value: cdktf.booleanToHclTerraform(this._isGuest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      l2_isolation: {
        value: cdktf.booleanToHclTerraform(this._l2Isolation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mac_filter_enabled: {
        value: cdktf.booleanToHclTerraform(this._macFilterEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mac_filter_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._macFilterList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      mac_filter_policy: {
        value: cdktf.stringToHclTerraform(this._macFilterPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minimum_data_rate_2g_kbps: {
        value: cdktf.numberToHclTerraform(this._minimumDataRate2GKbps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minimum_data_rate_5g_kbps: {
        value: cdktf.numberToHclTerraform(this._minimumDataRate5GKbps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multicast_enhance: {
        value: cdktf.booleanToHclTerraform(this._multicastEnhance),
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
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no2ghz_oui: {
        value: cdktf.booleanToHclTerraform(this._no2GhzOui),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      passphrase: {
        value: cdktf.stringToHclTerraform(this._passphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pmf_mode: {
        value: cdktf.stringToHclTerraform(this._pmfMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_arp: {
        value: cdktf.booleanToHclTerraform(this._proxyArp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      radius_profile_id: {
        value: cdktf.stringToHclTerraform(this._radiusProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security: {
        value: cdktf.stringToHclTerraform(this._security),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site: {
        value: cdktf.stringToHclTerraform(this._site),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uapsd: {
        value: cdktf.booleanToHclTerraform(this._uapsd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_group_id: {
        value: cdktf.stringToHclTerraform(this._userGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wlan_band: {
        value: cdktf.stringToHclTerraform(this._wlanBand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wpa3_support: {
        value: cdktf.booleanToHclTerraform(this._wpa3Support),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wpa3_transition: {
        value: cdktf.booleanToHclTerraform(this._wpa3Transition),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      schedule: {
        value: cdktf.listMapperHcl(wlanScheduleToHclTerraform, true)(this._schedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WlanScheduleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
