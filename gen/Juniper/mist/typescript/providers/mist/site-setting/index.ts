// https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SiteSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#analytic SiteSetting#analytic}
  */
  readonly analytic?: SiteSettingAnalytic;
  /**
  * Enable threshold-based device down delivery for AP devices only. When configured it takes effect for AP devices and `device_updown_threshold` is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#ap_updown_threshold SiteSetting#ap_updown_threshold}
  */
  readonly apUpdownThreshold?: number;
  /**
  * Auto Upgrade Settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#auto_upgrade SiteSetting#auto_upgrade}
  */
  readonly autoUpgrade?: SiteSettingAutoUpgrade;
  /**
  * auto upgrade AP ESL. When both firmware and ESL auto-upgrade are enabled, ESL upgrade will be done only after firmware upgrade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#auto_upgrade_esl SiteSetting#auto_upgrade_esl}
  */
  readonly autoUpgradeEsl?: SiteSettingAutoUpgradeEsl;
  /**
  * enable threshold-based bgp neighbor down delivery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#bgp_neighbor_updown_threshold SiteSetting#bgp_neighbor_updown_threshold}
  */
  readonly bgpNeighborUpdownThreshold?: number;
  /**
  * BLE AP settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#ble_config SiteSetting#ble_config}
  */
  readonly bleConfig?: SiteSettingBleConfig;
  /**
  * Whether to enable ap auto config revert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#config_auto_revert SiteSetting#config_auto_revert}
  */
  readonly configAutoRevert?: boolean | cdktf.IResolvable;
  /**
  * Mist also uses some heuristic rules to prevent destructive configs from being pushed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#config_push_policy SiteSetting#config_push_policy}
  */
  readonly configPushPolicy?: SiteSettingConfigPushPolicy;
  /**
  * You can define some URLs that's critical to site operations the latency will be captured and considered for site health
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#critical_url_monitoring SiteSetting#critical_url_monitoring}
  */
  readonly criticalUrlMonitoring?: SiteSettingCriticalUrlMonitoring;
  /**
  * Port usage to assign to switch ports without any port usage assigned. Default: `default` to preserve default behavior
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#default_port_usage SiteSetting#default_port_usage}
  */
  readonly defaultPortUsage?: string;
  /**
  * By default, device_updown_threshold, if set, will apply to all devices types if different values for specific device type is desired, use the following
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#device_updown_threshold SiteSetting#device_updown_threshold}
  */
  readonly deviceUpdownThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#enable_unii_4 SiteSetting#enable_unii_4}
  */
  readonly enableUnii4?: boolean | cdktf.IResolvable;
  /**
  * **Note**: if hours does not exist, it's treated as everyday of the week, 00:00-23:59. Currently, we don't allow multiple ranges for the same day
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#engagement SiteSetting#engagement}
  */
  readonly engagement?: SiteSettingEngagement;
  /**
  * Gateway Site settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#gateway_mgmt SiteSetting#gateway_mgmt}
  */
  readonly gatewayMgmt?: SiteSettingGatewayMgmt;
  /**
  * Enable threshold-based device down delivery for Gateway devices only. When configured it takes effect for GW devices and `device_updown_threshold` is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#gateway_updown_threshold SiteSetting#gateway_updown_threshold}
  */
  readonly gatewayUpdownThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#juniper_srx SiteSetting#juniper_srx}
  */
  readonly juniperSrx?: SiteSettingJuniperSrx;
  /**
  * LED AP settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#led SiteSetting#led}
  */
  readonly led?: SiteSettingLed;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#marvis SiteSetting#marvis}
  */
  readonly marvis?: SiteSettingMarvis;
  /**
  * Occupancy Analytics settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#occupancy SiteSetting#occupancy}
  */
  readonly occupancy?: SiteSettingOccupancy;
  /**
  * Whether to store the config on AP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#persist_config_on_device SiteSetting#persist_config_on_device}
  */
  readonly persistConfigOnDevice?: boolean | cdktf.IResolvable;
  /**
  * Proxy Configuration to talk to Mist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#proxy SiteSetting#proxy}
  */
  readonly proxy?: SiteSettingProxy;
  /**
  * By default, only the configuration generated by Mist is cleaned up during the configuration process. If `true`, all the existing configuration will be removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#remove_existing_configs SiteSetting#remove_existing_configs}
  */
  readonly removeExistingConfigs?: boolean | cdktf.IResolvable;
  /**
  * Whether AP should periodically connect to BLE devices and report GATT device info (device name, manufacturer name, serial number, battery %, temperature, humidity)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#report_gatt SiteSetting#report_gatt}
  */
  readonly reportGatt?: boolean | cdktf.IResolvable;
  /**
  * Rogue site settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#rogue SiteSetting#rogue}
  */
  readonly rogue?: SiteSettingRogue;
  /**
  * Managed mobility
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#rtsa SiteSetting#rtsa}
  */
  readonly rtsa?: SiteSettingRtsa;
  /**
  * Set of heuristic rules will be enabled when marvis subscription is not available. It triggers when, in a Z minute window, there are more than Y distinct client encountering over X failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#simple_alert SiteSetting#simple_alert}
  */
  readonly simpleAlert?: SiteSettingSimpleAlert;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#site_id SiteSetting#site_id}
  */
  readonly siteId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#skyatp SiteSetting#skyatp}
  */
  readonly skyatp?: SiteSettingSkyatp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#sle_thresholds SiteSetting#sle_thresholds}
  */
  readonly sleThresholds?: SiteSettingSleThresholds;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#srx_app SiteSetting#srx_app}
  */
  readonly srxApp?: SiteSettingSrxApp;
  /**
  * When limit_ssh_access = true in Org Setting, list of SSH public keys provided by Mist Support to install onto APs (see Org:Setting)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#ssh_keys SiteSetting#ssh_keys}
  */
  readonly sshKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#ssr SiteSetting#ssr}
  */
  readonly ssr?: SiteSettingSsr;
  /**
  * Enable threshold-based device down delivery for Switch devices only. When configured it takes effect for SW devices and `device_updown_threshold` is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#switch_updown_threshold SiteSetting#switch_updown_threshold}
  */
  readonly switchUpdownThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#synthetic_test SiteSetting#synthetic_test}
  */
  readonly syntheticTest?: SiteSettingSyntheticTest;
  /**
  * Whether to track anonymous BLE assets (requires ‘track_asset’  enabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#track_anonymous_devices SiteSetting#track_anonymous_devices}
  */
  readonly trackAnonymousDevices?: boolean | cdktf.IResolvable;
  /**
  * AP Uplink port configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#uplink_port_config SiteSetting#uplink_port_config}
  */
  readonly uplinkPortConfig?: SiteSettingUplinkPortConfig;
  /**
  * Dictionary of name->value, the vars can then be used in Wlans. This can overwrite those from Site Vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#vars SiteSetting#vars}
  */
  readonly vars?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#vna SiteSetting#vna}
  */
  readonly vna?: SiteSettingVna;
  /**
  * enable threshold-based vpn path down delivery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#vpn_path_updown_threshold SiteSetting#vpn_path_updown_threshold}
  */
  readonly vpnPathUpdownThreshold?: number;
  /**
  * enable threshold-based vpn peer down delivery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#vpn_peer_updown_threshold SiteSetting#vpn_peer_updown_threshold}
  */
  readonly vpnPeerUpdownThreshold?: number;
  /**
  * Optional, for EX9200 only to segregate virtual-switches. Property key is the instance name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#vs_instance SiteSetting#vs_instance}
  */
  readonly vsInstance?: { [key: string]: SiteSettingVsInstance } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#wan_vna SiteSetting#wan_vna}
  */
  readonly wanVna?: SiteSettingWanVna;
  /**
  * WIDS site settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#wids SiteSetting#wids}
  */
  readonly wids?: SiteSettingWids;
  /**
  * Wi-Fi site settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#wifi SiteSetting#wifi}
  */
  readonly wifi?: SiteSettingWifi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#wired_vna SiteSetting#wired_vna}
  */
  readonly wiredVna?: SiteSettingWiredVna;
  /**
  * Zone Occupancy alert site settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#zone_occupancy_alert SiteSetting#zone_occupancy_alert}
  */
  readonly zoneOccupancyAlert?: SiteSettingZoneOccupancyAlert;
}
export interface SiteSettingAnalytic {
  /**
  * Enable Advanced Analytic feature (using SUB-ANA license)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#enabled SiteSetting#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function siteSettingAnalyticToTerraform(struct?: SiteSettingAnalytic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function siteSettingAnalyticToHclTerraform(struct?: SiteSettingAnalytic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingAnalyticOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteSettingAnalytic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingAnalytic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
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
}
export interface SiteSettingAutoUpgrade {
  /**
  * Custom versions for different models. Property key is the model name (e.g. "AP41")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#custom_versions SiteSetting#custom_versions}
  */
  readonly customVersions?: { [key: string]: string };
  /**
  * enum: `any`, `fri`, `mon`, `sat`, `sun`, `thu`, `tue`, `wed`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#day_of_week SiteSetting#day_of_week}
  */
  readonly dayOfWeek?: string;
  /**
  * Whether auto upgrade should happen (Note that Mist may auto-upgrade if the version is not supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#enabled SiteSetting#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * `any` / HH:MM (24-hour format), upgrade will happen within up to 1-hour from this time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#time_of_day SiteSetting#time_of_day}
  */
  readonly timeOfDay?: string;
  /**
  * desired version. enum: `beta`, `custom`, `stable`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#version SiteSetting#version}
  */
  readonly version?: string;
}

export function siteSettingAutoUpgradeToTerraform(struct?: SiteSettingAutoUpgrade | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_versions: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customVersions),
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    time_of_day: cdktf.stringToTerraform(struct!.timeOfDay),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function siteSettingAutoUpgradeToHclTerraform(struct?: SiteSettingAutoUpgrade | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_versions: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customVersions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    time_of_day: {
      value: cdktf.stringToHclTerraform(struct!.timeOfDay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingAutoUpgradeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteSettingAutoUpgrade | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.customVersions = this._customVersions;
    }
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._timeOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOfDay = this._timeOfDay;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingAutoUpgrade | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customVersions = undefined;
      this._dayOfWeek = undefined;
      this._enabled = undefined;
      this._timeOfDay = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customVersions = value.customVersions;
      this._dayOfWeek = value.dayOfWeek;
      this._enabled = value.enabled;
      this._timeOfDay = value.timeOfDay;
      this._version = value.version;
    }
  }

  // custom_versions - computed: true, optional: true, required: false
  private _customVersions?: { [key: string]: string }; 
  public get customVersions() {
    return this.getStringMapAttribute('custom_versions');
  }
  public set customVersions(value: { [key: string]: string }) {
    this._customVersions = value;
  }
  public resetCustomVersions() {
    this._customVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customVersionsInput() {
    return this._customVersions;
  }

  // day_of_week - computed: true, optional: true, required: false
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // enabled - computed: true, optional: true, required: false
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

  // time_of_day - computed: true, optional: true, required: false
  private _timeOfDay?: string; 
  public get timeOfDay() {
    return this.getStringAttribute('time_of_day');
  }
  public set timeOfDay(value: string) {
    this._timeOfDay = value;
  }
  public resetTimeOfDay() {
    this._timeOfDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOfDayInput() {
    return this._timeOfDay;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface SiteSettingAutoUpgradeEsl {
  /**
  * If true, it will allow downgrade to a lower version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#allow_downgrade SiteSetting#allow_downgrade}
  */
  readonly allowDowngrade?: boolean | cdktf.IResolvable;
  /**
  * Custom versions for different models. Property key is the model name (e.g. "AP41")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#custom_versions SiteSetting#custom_versions}
  */
  readonly customVersions?: { [key: string]: string };
  /**
  * enum: `any`, `fri`, `mon`, `sat`, `sun`, `thu`, `tue`, `wed`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#day_of_week SiteSetting#day_of_week}
  */
  readonly dayOfWeek?: string;
  /**
  * Whether auto upgrade should happen (Note that Mist may auto-upgrade if the version is not supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#enabled SiteSetting#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * `any` / HH:MM (24-hour format), upgrade will happen within up to 1-hour from this time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#time_of_day SiteSetting#time_of_day}
  */
  readonly timeOfDay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#version SiteSetting#version}
  */
  readonly version?: string;
}

export function siteSettingAutoUpgradeEslToTerraform(struct?: SiteSettingAutoUpgradeEsl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_downgrade: cdktf.booleanToTerraform(struct!.allowDowngrade),
    custom_versions: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customVersions),
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    time_of_day: cdktf.stringToTerraform(struct!.timeOfDay),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function siteSettingAutoUpgradeEslToHclTerraform(struct?: SiteSettingAutoUpgradeEsl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_downgrade: {
      value: cdktf.booleanToHclTerraform(struct!.allowDowngrade),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_versions: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customVersions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    time_of_day: {
      value: cdktf.stringToHclTerraform(struct!.timeOfDay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingAutoUpgradeEslOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteSettingAutoUpgradeEsl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowDowngrade !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowDowngrade = this._allowDowngrade;
    }
    if (this._customVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.customVersions = this._customVersions;
    }
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._timeOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOfDay = this._timeOfDay;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingAutoUpgradeEsl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowDowngrade = undefined;
      this._customVersions = undefined;
      this._dayOfWeek = undefined;
      this._enabled = undefined;
      this._timeOfDay = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowDowngrade = value.allowDowngrade;
      this._customVersions = value.customVersions;
      this._dayOfWeek = value.dayOfWeek;
      this._enabled = value.enabled;
      this._timeOfDay = value.timeOfDay;
      this._version = value.version;
    }
  }

  // allow_downgrade - computed: true, optional: true, required: false
  private _allowDowngrade?: boolean | cdktf.IResolvable; 
  public get allowDowngrade() {
    return this.getBooleanAttribute('allow_downgrade');
  }
  public set allowDowngrade(value: boolean | cdktf.IResolvable) {
    this._allowDowngrade = value;
  }
  public resetAllowDowngrade() {
    this._allowDowngrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDowngradeInput() {
    return this._allowDowngrade;
  }

  // custom_versions - computed: false, optional: true, required: false
  private _customVersions?: { [key: string]: string }; 
  public get customVersions() {
    return this.getStringMapAttribute('custom_versions');
  }
  public set customVersions(value: { [key: string]: string }) {
    this._customVersions = value;
  }
  public resetCustomVersions() {
    this._customVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customVersionsInput() {
    return this._customVersions;
  }

  // day_of_week - computed: false, optional: true, required: false
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // enabled - computed: true, optional: true, required: false
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

  // time_of_day - computed: false, optional: true, required: false
  private _timeOfDay?: string; 
  public get timeOfDay() {
    return this.getStringAttribute('time_of_day');
  }
  public set timeOfDay(value: string) {
    this._timeOfDay = value;
  }
  public resetTimeOfDay() {
    this._timeOfDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOfDayInput() {
    return this._timeOfDay;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface SiteSettingBleConfig {
  /**
  * Whether Mist beacons is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#beacon_enabled SiteSetting#beacon_enabled}
  */
  readonly beaconEnabled?: boolean | cdktf.IResolvable;
  /**
  * Required if `beacon_rate_mode`==`custom`, 1-10, in number-beacons-per-second
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#beacon_rate SiteSetting#beacon_rate}
  */
  readonly beaconRate?: number;
  /**
  * enum: `custom`, `default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#beacon_rate_mode SiteSetting#beacon_rate_mode}
  */
  readonly beaconRateMode?: string;
  /**
  * List of AP BLE location beam numbers (1-8) which should be disabled at the AP and not transmit location information (where beam 1 is oriented at the top the AP, growing counter-clock-wise, with 9 being the omni BLE beam)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#beam_disabled SiteSetting#beam_disabled}
  */
  readonly beamDisabled?: number[];
  /**
  * Can be enabled if `beacon_enabled`==`true`, whether to send custom packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#custom_ble_packet_enabled SiteSetting#custom_ble_packet_enabled}
  */
  readonly customBlePacketEnabled?: boolean | cdktf.IResolvable;
  /**
  * The custom frame to be sent out in this beacon. The frame must be a hexstring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#custom_ble_packet_frame SiteSetting#custom_ble_packet_frame}
  */
  readonly customBlePacketFrame?: string;
  /**
  * Frequency (msec) of data emitted by custom ble beacon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#custom_ble_packet_freq_msec SiteSetting#custom_ble_packet_freq_msec}
  */
  readonly customBlePacketFreqMsec?: number;
  /**
  * Advertised TX Power, -100 to 20 (dBm), omit this attribute to use default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#eddystone_uid_adv_power SiteSetting#eddystone_uid_adv_power}
  */
  readonly eddystoneUidAdvPower?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#eddystone_uid_beams SiteSetting#eddystone_uid_beams}
  */
  readonly eddystoneUidBeams?: string;
  /**
  * Only if `beacon_enabled`==`false`, Whether Eddystone-UID beacon is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#eddystone_uid_enabled SiteSetting#eddystone_uid_enabled}
  */
  readonly eddystoneUidEnabled?: boolean | cdktf.IResolvable;
  /**
  * Frequency (msec) of data emit by Eddystone-UID beacon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#eddystone_uid_freq_msec SiteSetting#eddystone_uid_freq_msec}
  */
  readonly eddystoneUidFreqMsec?: number;
  /**
  * Eddystone-UID instance for the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#eddystone_uid_instance SiteSetting#eddystone_uid_instance}
  */
  readonly eddystoneUidInstance?: string;
  /**
  * Eddystone-UID namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#eddystone_uid_namespace SiteSetting#eddystone_uid_namespace}
  */
  readonly eddystoneUidNamespace?: string;
  /**
  * Advertised TX Power, -100 to 20 (dBm), omit this attribute to use default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#eddystone_url_adv_power SiteSetting#eddystone_url_adv_power}
  */
  readonly eddystoneUrlAdvPower?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#eddystone_url_beams SiteSetting#eddystone_url_beams}
  */
  readonly eddystoneUrlBeams?: string;
  /**
  * Only if `beacon_enabled`==`false`, Whether Eddystone-URL beacon is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#eddystone_url_enabled SiteSetting#eddystone_url_enabled}
  */
  readonly eddystoneUrlEnabled?: boolean | cdktf.IResolvable;
  /**
  * Frequency (msec) of data emit by Eddystone-UID beacon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#eddystone_url_freq_msec SiteSetting#eddystone_url_freq_msec}
  */
  readonly eddystoneUrlFreqMsec?: number;
  /**
  * URL pointed by Eddystone-URL beacon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#eddystone_url_url SiteSetting#eddystone_url_url}
  */
  readonly eddystoneUrlUrl?: string;
  /**
  * Advertised TX Power, -100 to 20 (dBm), omit this attribute to use default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#ibeacon_adv_power SiteSetting#ibeacon_adv_power}
  */
  readonly ibeaconAdvPower?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#ibeacon_beams SiteSetting#ibeacon_beams}
  */
  readonly ibeaconBeams?: string;
  /**
  * Can be enabled if `beacon_enabled`==`true`, whether to send iBeacon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#ibeacon_enabled SiteSetting#ibeacon_enabled}
  */
  readonly ibeaconEnabled?: boolean | cdktf.IResolvable;
  /**
  * Frequency (msec) of data emit for iBeacon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#ibeacon_freq_msec SiteSetting#ibeacon_freq_msec}
  */
  readonly ibeaconFreqMsec?: number;
  /**
  * Major number for iBeacon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#ibeacon_major SiteSetting#ibeacon_major}
  */
  readonly ibeaconMajor?: number;
  /**
  * Minor number for iBeacon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#ibeacon_minor SiteSetting#ibeacon_minor}
  */
  readonly ibeaconMinor?: number;
  /**
  * Optional, if not specified, the same UUID as the beacon will be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#ibeacon_uuid SiteSetting#ibeacon_uuid}
  */
  readonly ibeaconUuid?: string;
  /**
  * Required if `power_mode`==`custom`; else use `power_mode` as default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#power SiteSetting#power}
  */
  readonly power?: number;
  /**
  * enum: `custom`, `default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#power_mode SiteSetting#power_mode}
  */
  readonly powerMode?: string;
}

export function siteSettingBleConfigToTerraform(struct?: SiteSettingBleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    beacon_enabled: cdktf.booleanToTerraform(struct!.beaconEnabled),
    beacon_rate: cdktf.numberToTerraform(struct!.beaconRate),
    beacon_rate_mode: cdktf.stringToTerraform(struct!.beaconRateMode),
    beam_disabled: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.beamDisabled),
    custom_ble_packet_enabled: cdktf.booleanToTerraform(struct!.customBlePacketEnabled),
    custom_ble_packet_frame: cdktf.stringToTerraform(struct!.customBlePacketFrame),
    custom_ble_packet_freq_msec: cdktf.numberToTerraform(struct!.customBlePacketFreqMsec),
    eddystone_uid_adv_power: cdktf.numberToTerraform(struct!.eddystoneUidAdvPower),
    eddystone_uid_beams: cdktf.stringToTerraform(struct!.eddystoneUidBeams),
    eddystone_uid_enabled: cdktf.booleanToTerraform(struct!.eddystoneUidEnabled),
    eddystone_uid_freq_msec: cdktf.numberToTerraform(struct!.eddystoneUidFreqMsec),
    eddystone_uid_instance: cdktf.stringToTerraform(struct!.eddystoneUidInstance),
    eddystone_uid_namespace: cdktf.stringToTerraform(struct!.eddystoneUidNamespace),
    eddystone_url_adv_power: cdktf.numberToTerraform(struct!.eddystoneUrlAdvPower),
    eddystone_url_beams: cdktf.stringToTerraform(struct!.eddystoneUrlBeams),
    eddystone_url_enabled: cdktf.booleanToTerraform(struct!.eddystoneUrlEnabled),
    eddystone_url_freq_msec: cdktf.numberToTerraform(struct!.eddystoneUrlFreqMsec),
    eddystone_url_url: cdktf.stringToTerraform(struct!.eddystoneUrlUrl),
    ibeacon_adv_power: cdktf.numberToTerraform(struct!.ibeaconAdvPower),
    ibeacon_beams: cdktf.stringToTerraform(struct!.ibeaconBeams),
    ibeacon_enabled: cdktf.booleanToTerraform(struct!.ibeaconEnabled),
    ibeacon_freq_msec: cdktf.numberToTerraform(struct!.ibeaconFreqMsec),
    ibeacon_major: cdktf.numberToTerraform(struct!.ibeaconMajor),
    ibeacon_minor: cdktf.numberToTerraform(struct!.ibeaconMinor),
    ibeacon_uuid: cdktf.stringToTerraform(struct!.ibeaconUuid),
    power: cdktf.numberToTerraform(struct!.power),
    power_mode: cdktf.stringToTerraform(struct!.powerMode),
  }
}


export function siteSettingBleConfigToHclTerraform(struct?: SiteSettingBleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    beacon_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.beaconEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    beacon_rate: {
      value: cdktf.numberToHclTerraform(struct!.beaconRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    beacon_rate_mode: {
      value: cdktf.stringToHclTerraform(struct!.beaconRateMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    beam_disabled: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.beamDisabled),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    custom_ble_packet_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.customBlePacketEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_ble_packet_frame: {
      value: cdktf.stringToHclTerraform(struct!.customBlePacketFrame),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_ble_packet_freq_msec: {
      value: cdktf.numberToHclTerraform(struct!.customBlePacketFreqMsec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eddystone_uid_adv_power: {
      value: cdktf.numberToHclTerraform(struct!.eddystoneUidAdvPower),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eddystone_uid_beams: {
      value: cdktf.stringToHclTerraform(struct!.eddystoneUidBeams),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eddystone_uid_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.eddystoneUidEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    eddystone_uid_freq_msec: {
      value: cdktf.numberToHclTerraform(struct!.eddystoneUidFreqMsec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eddystone_uid_instance: {
      value: cdktf.stringToHclTerraform(struct!.eddystoneUidInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eddystone_uid_namespace: {
      value: cdktf.stringToHclTerraform(struct!.eddystoneUidNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eddystone_url_adv_power: {
      value: cdktf.numberToHclTerraform(struct!.eddystoneUrlAdvPower),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eddystone_url_beams: {
      value: cdktf.stringToHclTerraform(struct!.eddystoneUrlBeams),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eddystone_url_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.eddystoneUrlEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    eddystone_url_freq_msec: {
      value: cdktf.numberToHclTerraform(struct!.eddystoneUrlFreqMsec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eddystone_url_url: {
      value: cdktf.stringToHclTerraform(struct!.eddystoneUrlUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ibeacon_adv_power: {
      value: cdktf.numberToHclTerraform(struct!.ibeaconAdvPower),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ibeacon_beams: {
      value: cdktf.stringToHclTerraform(struct!.ibeaconBeams),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ibeacon_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ibeaconEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ibeacon_freq_msec: {
      value: cdktf.numberToHclTerraform(struct!.ibeaconFreqMsec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ibeacon_major: {
      value: cdktf.numberToHclTerraform(struct!.ibeaconMajor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ibeacon_minor: {
      value: cdktf.numberToHclTerraform(struct!.ibeaconMinor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ibeacon_uuid: {
      value: cdktf.stringToHclTerraform(struct!.ibeaconUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    power: {
      value: cdktf.numberToHclTerraform(struct!.power),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    power_mode: {
      value: cdktf.stringToHclTerraform(struct!.powerMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingBleConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteSettingBleConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._beaconEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.beaconEnabled = this._beaconEnabled;
    }
    if (this._beaconRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.beaconRate = this._beaconRate;
    }
    if (this._beaconRateMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.beaconRateMode = this._beaconRateMode;
    }
    if (this._beamDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.beamDisabled = this._beamDisabled;
    }
    if (this._customBlePacketEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.customBlePacketEnabled = this._customBlePacketEnabled;
    }
    if (this._customBlePacketFrame !== undefined) {
      hasAnyValues = true;
      internalValueResult.customBlePacketFrame = this._customBlePacketFrame;
    }
    if (this._customBlePacketFreqMsec !== undefined) {
      hasAnyValues = true;
      internalValueResult.customBlePacketFreqMsec = this._customBlePacketFreqMsec;
    }
    if (this._eddystoneUidAdvPower !== undefined) {
      hasAnyValues = true;
      internalValueResult.eddystoneUidAdvPower = this._eddystoneUidAdvPower;
    }
    if (this._eddystoneUidBeams !== undefined) {
      hasAnyValues = true;
      internalValueResult.eddystoneUidBeams = this._eddystoneUidBeams;
    }
    if (this._eddystoneUidEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.eddystoneUidEnabled = this._eddystoneUidEnabled;
    }
    if (this._eddystoneUidFreqMsec !== undefined) {
      hasAnyValues = true;
      internalValueResult.eddystoneUidFreqMsec = this._eddystoneUidFreqMsec;
    }
    if (this._eddystoneUidInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.eddystoneUidInstance = this._eddystoneUidInstance;
    }
    if (this._eddystoneUidNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.eddystoneUidNamespace = this._eddystoneUidNamespace;
    }
    if (this._eddystoneUrlAdvPower !== undefined) {
      hasAnyValues = true;
      internalValueResult.eddystoneUrlAdvPower = this._eddystoneUrlAdvPower;
    }
    if (this._eddystoneUrlBeams !== undefined) {
      hasAnyValues = true;
      internalValueResult.eddystoneUrlBeams = this._eddystoneUrlBeams;
    }
    if (this._eddystoneUrlEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.eddystoneUrlEnabled = this._eddystoneUrlEnabled;
    }
    if (this._eddystoneUrlFreqMsec !== undefined) {
      hasAnyValues = true;
      internalValueResult.eddystoneUrlFreqMsec = this._eddystoneUrlFreqMsec;
    }
    if (this._eddystoneUrlUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.eddystoneUrlUrl = this._eddystoneUrlUrl;
    }
    if (this._ibeaconAdvPower !== undefined) {
      hasAnyValues = true;
      internalValueResult.ibeaconAdvPower = this._ibeaconAdvPower;
    }
    if (this._ibeaconBeams !== undefined) {
      hasAnyValues = true;
      internalValueResult.ibeaconBeams = this._ibeaconBeams;
    }
    if (this._ibeaconEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ibeaconEnabled = this._ibeaconEnabled;
    }
    if (this._ibeaconFreqMsec !== undefined) {
      hasAnyValues = true;
      internalValueResult.ibeaconFreqMsec = this._ibeaconFreqMsec;
    }
    if (this._ibeaconMajor !== undefined) {
      hasAnyValues = true;
      internalValueResult.ibeaconMajor = this._ibeaconMajor;
    }
    if (this._ibeaconMinor !== undefined) {
      hasAnyValues = true;
      internalValueResult.ibeaconMinor = this._ibeaconMinor;
    }
    if (this._ibeaconUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.ibeaconUuid = this._ibeaconUuid;
    }
    if (this._power !== undefined) {
      hasAnyValues = true;
      internalValueResult.power = this._power;
    }
    if (this._powerMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerMode = this._powerMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingBleConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._beaconEnabled = undefined;
      this._beaconRate = undefined;
      this._beaconRateMode = undefined;
      this._beamDisabled = undefined;
      this._customBlePacketEnabled = undefined;
      this._customBlePacketFrame = undefined;
      this._customBlePacketFreqMsec = undefined;
      this._eddystoneUidAdvPower = undefined;
      this._eddystoneUidBeams = undefined;
      this._eddystoneUidEnabled = undefined;
      this._eddystoneUidFreqMsec = undefined;
      this._eddystoneUidInstance = undefined;
      this._eddystoneUidNamespace = undefined;
      this._eddystoneUrlAdvPower = undefined;
      this._eddystoneUrlBeams = undefined;
      this._eddystoneUrlEnabled = undefined;
      this._eddystoneUrlFreqMsec = undefined;
      this._eddystoneUrlUrl = undefined;
      this._ibeaconAdvPower = undefined;
      this._ibeaconBeams = undefined;
      this._ibeaconEnabled = undefined;
      this._ibeaconFreqMsec = undefined;
      this._ibeaconMajor = undefined;
      this._ibeaconMinor = undefined;
      this._ibeaconUuid = undefined;
      this._power = undefined;
      this._powerMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._beaconEnabled = value.beaconEnabled;
      this._beaconRate = value.beaconRate;
      this._beaconRateMode = value.beaconRateMode;
      this._beamDisabled = value.beamDisabled;
      this._customBlePacketEnabled = value.customBlePacketEnabled;
      this._customBlePacketFrame = value.customBlePacketFrame;
      this._customBlePacketFreqMsec = value.customBlePacketFreqMsec;
      this._eddystoneUidAdvPower = value.eddystoneUidAdvPower;
      this._eddystoneUidBeams = value.eddystoneUidBeams;
      this._eddystoneUidEnabled = value.eddystoneUidEnabled;
      this._eddystoneUidFreqMsec = value.eddystoneUidFreqMsec;
      this._eddystoneUidInstance = value.eddystoneUidInstance;
      this._eddystoneUidNamespace = value.eddystoneUidNamespace;
      this._eddystoneUrlAdvPower = value.eddystoneUrlAdvPower;
      this._eddystoneUrlBeams = value.eddystoneUrlBeams;
      this._eddystoneUrlEnabled = value.eddystoneUrlEnabled;
      this._eddystoneUrlFreqMsec = value.eddystoneUrlFreqMsec;
      this._eddystoneUrlUrl = value.eddystoneUrlUrl;
      this._ibeaconAdvPower = value.ibeaconAdvPower;
      this._ibeaconBeams = value.ibeaconBeams;
      this._ibeaconEnabled = value.ibeaconEnabled;
      this._ibeaconFreqMsec = value.ibeaconFreqMsec;
      this._ibeaconMajor = value.ibeaconMajor;
      this._ibeaconMinor = value.ibeaconMinor;
      this._ibeaconUuid = value.ibeaconUuid;
      this._power = value.power;
      this._powerMode = value.powerMode;
    }
  }

  // beacon_enabled - computed: true, optional: true, required: false
  private _beaconEnabled?: boolean | cdktf.IResolvable; 
  public get beaconEnabled() {
    return this.getBooleanAttribute('beacon_enabled');
  }
  public set beaconEnabled(value: boolean | cdktf.IResolvable) {
    this._beaconEnabled = value;
  }
  public resetBeaconEnabled() {
    this._beaconEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beaconEnabledInput() {
    return this._beaconEnabled;
  }

  // beacon_rate - computed: false, optional: true, required: false
  private _beaconRate?: number; 
  public get beaconRate() {
    return this.getNumberAttribute('beacon_rate');
  }
  public set beaconRate(value: number) {
    this._beaconRate = value;
  }
  public resetBeaconRate() {
    this._beaconRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beaconRateInput() {
    return this._beaconRate;
  }

  // beacon_rate_mode - computed: true, optional: true, required: false
  private _beaconRateMode?: string; 
  public get beaconRateMode() {
    return this.getStringAttribute('beacon_rate_mode');
  }
  public set beaconRateMode(value: string) {
    this._beaconRateMode = value;
  }
  public resetBeaconRateMode() {
    this._beaconRateMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beaconRateModeInput() {
    return this._beaconRateMode;
  }

  // beam_disabled - computed: false, optional: true, required: false
  private _beamDisabled?: number[]; 
  public get beamDisabled() {
    return this.getNumberListAttribute('beam_disabled');
  }
  public set beamDisabled(value: number[]) {
    this._beamDisabled = value;
  }
  public resetBeamDisabled() {
    this._beamDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beamDisabledInput() {
    return this._beamDisabled;
  }

  // custom_ble_packet_enabled - computed: true, optional: true, required: false
  private _customBlePacketEnabled?: boolean | cdktf.IResolvable; 
  public get customBlePacketEnabled() {
    return this.getBooleanAttribute('custom_ble_packet_enabled');
  }
  public set customBlePacketEnabled(value: boolean | cdktf.IResolvable) {
    this._customBlePacketEnabled = value;
  }
  public resetCustomBlePacketEnabled() {
    this._customBlePacketEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customBlePacketEnabledInput() {
    return this._customBlePacketEnabled;
  }

  // custom_ble_packet_frame - computed: true, optional: true, required: false
  private _customBlePacketFrame?: string; 
  public get customBlePacketFrame() {
    return this.getStringAttribute('custom_ble_packet_frame');
  }
  public set customBlePacketFrame(value: string) {
    this._customBlePacketFrame = value;
  }
  public resetCustomBlePacketFrame() {
    this._customBlePacketFrame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customBlePacketFrameInput() {
    return this._customBlePacketFrame;
  }

  // custom_ble_packet_freq_msec - computed: true, optional: true, required: false
  private _customBlePacketFreqMsec?: number; 
  public get customBlePacketFreqMsec() {
    return this.getNumberAttribute('custom_ble_packet_freq_msec');
  }
  public set customBlePacketFreqMsec(value: number) {
    this._customBlePacketFreqMsec = value;
  }
  public resetCustomBlePacketFreqMsec() {
    this._customBlePacketFreqMsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customBlePacketFreqMsecInput() {
    return this._customBlePacketFreqMsec;
  }

  // eddystone_uid_adv_power - computed: true, optional: true, required: false
  private _eddystoneUidAdvPower?: number; 
  public get eddystoneUidAdvPower() {
    return this.getNumberAttribute('eddystone_uid_adv_power');
  }
  public set eddystoneUidAdvPower(value: number) {
    this._eddystoneUidAdvPower = value;
  }
  public resetEddystoneUidAdvPower() {
    this._eddystoneUidAdvPower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eddystoneUidAdvPowerInput() {
    return this._eddystoneUidAdvPower;
  }

  // eddystone_uid_beams - computed: true, optional: true, required: false
  private _eddystoneUidBeams?: string; 
  public get eddystoneUidBeams() {
    return this.getStringAttribute('eddystone_uid_beams');
  }
  public set eddystoneUidBeams(value: string) {
    this._eddystoneUidBeams = value;
  }
  public resetEddystoneUidBeams() {
    this._eddystoneUidBeams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eddystoneUidBeamsInput() {
    return this._eddystoneUidBeams;
  }

  // eddystone_uid_enabled - computed: true, optional: true, required: false
  private _eddystoneUidEnabled?: boolean | cdktf.IResolvable; 
  public get eddystoneUidEnabled() {
    return this.getBooleanAttribute('eddystone_uid_enabled');
  }
  public set eddystoneUidEnabled(value: boolean | cdktf.IResolvable) {
    this._eddystoneUidEnabled = value;
  }
  public resetEddystoneUidEnabled() {
    this._eddystoneUidEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eddystoneUidEnabledInput() {
    return this._eddystoneUidEnabled;
  }

  // eddystone_uid_freq_msec - computed: true, optional: true, required: false
  private _eddystoneUidFreqMsec?: number; 
  public get eddystoneUidFreqMsec() {
    return this.getNumberAttribute('eddystone_uid_freq_msec');
  }
  public set eddystoneUidFreqMsec(value: number) {
    this._eddystoneUidFreqMsec = value;
  }
  public resetEddystoneUidFreqMsec() {
    this._eddystoneUidFreqMsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eddystoneUidFreqMsecInput() {
    return this._eddystoneUidFreqMsec;
  }

  // eddystone_uid_instance - computed: true, optional: true, required: false
  private _eddystoneUidInstance?: string; 
  public get eddystoneUidInstance() {
    return this.getStringAttribute('eddystone_uid_instance');
  }
  public set eddystoneUidInstance(value: string) {
    this._eddystoneUidInstance = value;
  }
  public resetEddystoneUidInstance() {
    this._eddystoneUidInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eddystoneUidInstanceInput() {
    return this._eddystoneUidInstance;
  }

  // eddystone_uid_namespace - computed: true, optional: true, required: false
  private _eddystoneUidNamespace?: string; 
  public get eddystoneUidNamespace() {
    return this.getStringAttribute('eddystone_uid_namespace');
  }
  public set eddystoneUidNamespace(value: string) {
    this._eddystoneUidNamespace = value;
  }
  public resetEddystoneUidNamespace() {
    this._eddystoneUidNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eddystoneUidNamespaceInput() {
    return this._eddystoneUidNamespace;
  }

  // eddystone_url_adv_power - computed: true, optional: true, required: false
  private _eddystoneUrlAdvPower?: number; 
  public get eddystoneUrlAdvPower() {
    return this.getNumberAttribute('eddystone_url_adv_power');
  }
  public set eddystoneUrlAdvPower(value: number) {
    this._eddystoneUrlAdvPower = value;
  }
  public resetEddystoneUrlAdvPower() {
    this._eddystoneUrlAdvPower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eddystoneUrlAdvPowerInput() {
    return this._eddystoneUrlAdvPower;
  }

  // eddystone_url_beams - computed: true, optional: true, required: false
  private _eddystoneUrlBeams?: string; 
  public get eddystoneUrlBeams() {
    return this.getStringAttribute('eddystone_url_beams');
  }
  public set eddystoneUrlBeams(value: string) {
    this._eddystoneUrlBeams = value;
  }
  public resetEddystoneUrlBeams() {
    this._eddystoneUrlBeams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eddystoneUrlBeamsInput() {
    return this._eddystoneUrlBeams;
  }

  // eddystone_url_enabled - computed: true, optional: true, required: false
  private _eddystoneUrlEnabled?: boolean | cdktf.IResolvable; 
  public get eddystoneUrlEnabled() {
    return this.getBooleanAttribute('eddystone_url_enabled');
  }
  public set eddystoneUrlEnabled(value: boolean | cdktf.IResolvable) {
    this._eddystoneUrlEnabled = value;
  }
  public resetEddystoneUrlEnabled() {
    this._eddystoneUrlEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eddystoneUrlEnabledInput() {
    return this._eddystoneUrlEnabled;
  }

  // eddystone_url_freq_msec - computed: true, optional: true, required: false
  private _eddystoneUrlFreqMsec?: number; 
  public get eddystoneUrlFreqMsec() {
    return this.getNumberAttribute('eddystone_url_freq_msec');
  }
  public set eddystoneUrlFreqMsec(value: number) {
    this._eddystoneUrlFreqMsec = value;
  }
  public resetEddystoneUrlFreqMsec() {
    this._eddystoneUrlFreqMsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eddystoneUrlFreqMsecInput() {
    return this._eddystoneUrlFreqMsec;
  }

  // eddystone_url_url - computed: true, optional: true, required: false
  private _eddystoneUrlUrl?: string; 
  public get eddystoneUrlUrl() {
    return this.getStringAttribute('eddystone_url_url');
  }
  public set eddystoneUrlUrl(value: string) {
    this._eddystoneUrlUrl = value;
  }
  public resetEddystoneUrlUrl() {
    this._eddystoneUrlUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eddystoneUrlUrlInput() {
    return this._eddystoneUrlUrl;
  }

  // ibeacon_adv_power - computed: true, optional: true, required: false
  private _ibeaconAdvPower?: number; 
  public get ibeaconAdvPower() {
    return this.getNumberAttribute('ibeacon_adv_power');
  }
  public set ibeaconAdvPower(value: number) {
    this._ibeaconAdvPower = value;
  }
  public resetIbeaconAdvPower() {
    this._ibeaconAdvPower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibeaconAdvPowerInput() {
    return this._ibeaconAdvPower;
  }

  // ibeacon_beams - computed: true, optional: true, required: false
  private _ibeaconBeams?: string; 
  public get ibeaconBeams() {
    return this.getStringAttribute('ibeacon_beams');
  }
  public set ibeaconBeams(value: string) {
    this._ibeaconBeams = value;
  }
  public resetIbeaconBeams() {
    this._ibeaconBeams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibeaconBeamsInput() {
    return this._ibeaconBeams;
  }

  // ibeacon_enabled - computed: true, optional: true, required: false
  private _ibeaconEnabled?: boolean | cdktf.IResolvable; 
  public get ibeaconEnabled() {
    return this.getBooleanAttribute('ibeacon_enabled');
  }
  public set ibeaconEnabled(value: boolean | cdktf.IResolvable) {
    this._ibeaconEnabled = value;
  }
  public resetIbeaconEnabled() {
    this._ibeaconEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibeaconEnabledInput() {
    return this._ibeaconEnabled;
  }

  // ibeacon_freq_msec - computed: true, optional: true, required: false
  private _ibeaconFreqMsec?: number; 
  public get ibeaconFreqMsec() {
    return this.getNumberAttribute('ibeacon_freq_msec');
  }
  public set ibeaconFreqMsec(value: number) {
    this._ibeaconFreqMsec = value;
  }
  public resetIbeaconFreqMsec() {
    this._ibeaconFreqMsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibeaconFreqMsecInput() {
    return this._ibeaconFreqMsec;
  }

  // ibeacon_major - computed: true, optional: true, required: false
  private _ibeaconMajor?: number; 
  public get ibeaconMajor() {
    return this.getNumberAttribute('ibeacon_major');
  }
  public set ibeaconMajor(value: number) {
    this._ibeaconMajor = value;
  }
  public resetIbeaconMajor() {
    this._ibeaconMajor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibeaconMajorInput() {
    return this._ibeaconMajor;
  }

  // ibeacon_minor - computed: true, optional: true, required: false
  private _ibeaconMinor?: number; 
  public get ibeaconMinor() {
    return this.getNumberAttribute('ibeacon_minor');
  }
  public set ibeaconMinor(value: number) {
    this._ibeaconMinor = value;
  }
  public resetIbeaconMinor() {
    this._ibeaconMinor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibeaconMinorInput() {
    return this._ibeaconMinor;
  }

  // ibeacon_uuid - computed: true, optional: true, required: false
  private _ibeaconUuid?: string; 
  public get ibeaconUuid() {
    return this.getStringAttribute('ibeacon_uuid');
  }
  public set ibeaconUuid(value: string) {
    this._ibeaconUuid = value;
  }
  public resetIbeaconUuid() {
    this._ibeaconUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibeaconUuidInput() {
    return this._ibeaconUuid;
  }

  // power - computed: true, optional: true, required: false
  private _power?: number; 
  public get power() {
    return this.getNumberAttribute('power');
  }
  public set power(value: number) {
    this._power = value;
  }
  public resetPower() {
    this._power = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerInput() {
    return this._power;
  }

  // power_mode - computed: true, optional: true, required: false
  private _powerMode?: string; 
  public get powerMode() {
    return this.getStringAttribute('power_mode');
  }
  public set powerMode(value: string) {
    this._powerMode = value;
  }
  public resetPowerMode() {
    this._powerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerModeInput() {
    return this._powerMode;
  }
}
export interface SiteSettingConfigPushPolicyPushWindowHours {
  /**
  * Hour range of the day (e.g. `09:00-17:00`). If the hour is not defined then it's treated as 00:00-23:59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#fri SiteSetting#fri}
  */
  readonly fri?: string;
  /**
  * Hour range of the day (e.g. `09:00-17:00`). If the hour is not defined then it's treated as 00:00-23:59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#mon SiteSetting#mon}
  */
  readonly mon?: string;
  /**
  * Hour range of the day (e.g. `09:00-17:00`). If the hour is not defined then it's treated as 00:00-23:59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#sat SiteSetting#sat}
  */
  readonly sat?: string;
  /**
  * Hour range of the day (e.g. `09:00-17:00`). If the hour is not defined then it's treated as 00:00-23:59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#sun SiteSetting#sun}
  */
  readonly sun?: string;
  /**
  * Hour range of the day (e.g. `09:00-17:00`). If the hour is not defined then it's treated as 00:00-23:59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#thu SiteSetting#thu}
  */
  readonly thu?: string;
  /**
  * Hour range of the day (e.g. `09:00-17:00`). If the hour is not defined then it's treated as 00:00-23:59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#tue SiteSetting#tue}
  */
  readonly tue?: string;
  /**
  * Hour range of the day (e.g. `09:00-17:00`). If the hour is not defined then it's treated as 00:00-23:59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#wed SiteSetting#wed}
  */
  readonly wed?: string;
}

export function siteSettingConfigPushPolicyPushWindowHoursToTerraform(struct?: SiteSettingConfigPushPolicyPushWindowHours | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fri: cdktf.stringToTerraform(struct!.fri),
    mon: cdktf.stringToTerraform(struct!.mon),
    sat: cdktf.stringToTerraform(struct!.sat),
    sun: cdktf.stringToTerraform(struct!.sun),
    thu: cdktf.stringToTerraform(struct!.thu),
    tue: cdktf.stringToTerraform(struct!.tue),
    wed: cdktf.stringToTerraform(struct!.wed),
  }
}


export function siteSettingConfigPushPolicyPushWindowHoursToHclTerraform(struct?: SiteSettingConfigPushPolicyPushWindowHours | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fri: {
      value: cdktf.stringToHclTerraform(struct!.fri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mon: {
      value: cdktf.stringToHclTerraform(struct!.mon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sat: {
      value: cdktf.stringToHclTerraform(struct!.sat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sun: {
      value: cdktf.stringToHclTerraform(struct!.sun),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    thu: {
      value: cdktf.stringToHclTerraform(struct!.thu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tue: {
      value: cdktf.stringToHclTerraform(struct!.tue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wed: {
      value: cdktf.stringToHclTerraform(struct!.wed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingConfigPushPolicyPushWindowHoursOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteSettingConfigPushPolicyPushWindowHours | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fri !== undefined) {
      hasAnyValues = true;
      internalValueResult.fri = this._fri;
    }
    if (this._mon !== undefined) {
      hasAnyValues = true;
      internalValueResult.mon = this._mon;
    }
    if (this._sat !== undefined) {
      hasAnyValues = true;
      internalValueResult.sat = this._sat;
    }
    if (this._sun !== undefined) {
      hasAnyValues = true;
      internalValueResult.sun = this._sun;
    }
    if (this._thu !== undefined) {
      hasAnyValues = true;
      internalValueResult.thu = this._thu;
    }
    if (this._tue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tue = this._tue;
    }
    if (this._wed !== undefined) {
      hasAnyValues = true;
      internalValueResult.wed = this._wed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingConfigPushPolicyPushWindowHours | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fri = undefined;
      this._mon = undefined;
      this._sat = undefined;
      this._sun = undefined;
      this._thu = undefined;
      this._tue = undefined;
      this._wed = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fri = value.fri;
      this._mon = value.mon;
      this._sat = value.sat;
      this._sun = value.sun;
      this._thu = value.thu;
      this._tue = value.tue;
      this._wed = value.wed;
    }
  }

  // fri - computed: true, optional: true, required: false
  private _fri?: string; 
  public get fri() {
    return this.getStringAttribute('fri');
  }
  public set fri(value: string) {
    this._fri = value;
  }
  public resetFri() {
    this._fri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friInput() {
    return this._fri;
  }

  // mon - computed: true, optional: true, required: false
  private _mon?: string; 
  public get mon() {
    return this.getStringAttribute('mon');
  }
  public set mon(value: string) {
    this._mon = value;
  }
  public resetMon() {
    this._mon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monInput() {
    return this._mon;
  }

  // sat - computed: true, optional: true, required: false
  private _sat?: string; 
  public get sat() {
    return this.getStringAttribute('sat');
  }
  public set sat(value: string) {
    this._sat = value;
  }
  public resetSat() {
    this._sat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get satInput() {
    return this._sat;
  }

  // sun - computed: true, optional: true, required: false
  private _sun?: string; 
  public get sun() {
    return this.getStringAttribute('sun');
  }
  public set sun(value: string) {
    this._sun = value;
  }
  public resetSun() {
    this._sun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sunInput() {
    return this._sun;
  }

  // thu - computed: true, optional: true, required: false
  private _thu?: string; 
  public get thu() {
    return this.getStringAttribute('thu');
  }
  public set thu(value: string) {
    this._thu = value;
  }
  public resetThu() {
    this._thu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thuInput() {
    return this._thu;
  }

  // tue - computed: true, optional: true, required: false
  private _tue?: string; 
  public get tue() {
    return this.getStringAttribute('tue');
  }
  public set tue(value: string) {
    this._tue = value;
  }
  public resetTue() {
    this._tue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tueInput() {
    return this._tue;
  }

  // wed - computed: true, optional: true, required: false
  private _wed?: string; 
  public get wed() {
    return this.getStringAttribute('wed');
  }
  public set wed(value: string) {
    this._wed = value;
  }
  public resetWed() {
    this._wed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wedInput() {
    return this._wed;
  }
}
export interface SiteSettingConfigPushPolicyPushWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#enabled SiteSetting#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Days/Hours of operation filter, the available days (mon, tue, wed, thu, fri, sat, sun)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#hours SiteSetting#hours}
  */
  readonly hours?: SiteSettingConfigPushPolicyPushWindowHours;
}

export function siteSettingConfigPushPolicyPushWindowToTerraform(struct?: SiteSettingConfigPushPolicyPushWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    hours: siteSettingConfigPushPolicyPushWindowHoursToTerraform(struct!.hours),
  }
}


export function siteSettingConfigPushPolicyPushWindowToHclTerraform(struct?: SiteSettingConfigPushPolicyPushWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hours: {
      value: siteSettingConfigPushPolicyPushWindowHoursToHclTerraform(struct!.hours),
      isBlock: true,
      type: "struct",
      storageClassType: "SiteSettingConfigPushPolicyPushWindowHours",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingConfigPushPolicyPushWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteSettingConfigPushPolicyPushWindow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._hours?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingConfigPushPolicyPushWindow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._hours.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._hours.internalValue = value.hours;
    }
  }

  // enabled - computed: true, optional: true, required: false
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

  // hours - computed: false, optional: true, required: false
  private _hours = new SiteSettingConfigPushPolicyPushWindowHoursOutputReference(this, "hours");
  public get hours() {
    return this._hours;
  }
  public putHours(value: SiteSettingConfigPushPolicyPushWindowHours) {
    this._hours.internalValue = value;
  }
  public resetHours() {
    this._hours.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours.internalValue;
  }
}
export interface SiteSettingConfigPushPolicy {
  /**
  * Stop any new config from being pushed to the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#no_push SiteSetting#no_push}
  */
  readonly noPush?: boolean | cdktf.IResolvable;
  /**
  * If enabled, new config will only be pushed to device within the specified time window
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#push_window SiteSetting#push_window}
  */
  readonly pushWindow?: SiteSettingConfigPushPolicyPushWindow;
}

export function siteSettingConfigPushPolicyToTerraform(struct?: SiteSettingConfigPushPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_push: cdktf.booleanToTerraform(struct!.noPush),
    push_window: siteSettingConfigPushPolicyPushWindowToTerraform(struct!.pushWindow),
  }
}


export function siteSettingConfigPushPolicyToHclTerraform(struct?: SiteSettingConfigPushPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_push: {
      value: cdktf.booleanToHclTerraform(struct!.noPush),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    push_window: {
      value: siteSettingConfigPushPolicyPushWindowToHclTerraform(struct!.pushWindow),
      isBlock: true,
      type: "struct",
      storageClassType: "SiteSettingConfigPushPolicyPushWindow",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingConfigPushPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteSettingConfigPushPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noPush !== undefined) {
      hasAnyValues = true;
      internalValueResult.noPush = this._noPush;
    }
    if (this._pushWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pushWindow = this._pushWindow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingConfigPushPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._noPush = undefined;
      this._pushWindow.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._noPush = value.noPush;
      this._pushWindow.internalValue = value.pushWindow;
    }
  }

  // no_push - computed: true, optional: true, required: false
  private _noPush?: boolean | cdktf.IResolvable; 
  public get noPush() {
    return this.getBooleanAttribute('no_push');
  }
  public set noPush(value: boolean | cdktf.IResolvable) {
    this._noPush = value;
  }
  public resetNoPush() {
    this._noPush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPushInput() {
    return this._noPush;
  }

  // push_window - computed: false, optional: true, required: false
  private _pushWindow = new SiteSettingConfigPushPolicyPushWindowOutputReference(this, "push_window");
  public get pushWindow() {
    return this._pushWindow;
  }
  public putPushWindow(value: SiteSettingConfigPushPolicyPushWindow) {
    this._pushWindow.internalValue = value;
  }
  public resetPushWindow() {
    this._pushWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushWindowInput() {
    return this._pushWindow.internalValue;
  }
}
export interface SiteSettingCriticalUrlMonitoringMonitors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#url SiteSetting#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#vlan_id SiteSetting#vlan_id}
  */
  readonly vlanId?: string;
}

export function siteSettingCriticalUrlMonitoringMonitorsToTerraform(struct?: SiteSettingCriticalUrlMonitoringMonitors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
    vlan_id: cdktf.stringToTerraform(struct!.vlanId),
  }
}


export function siteSettingCriticalUrlMonitoringMonitorsToHclTerraform(struct?: SiteSettingCriticalUrlMonitoringMonitors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.stringToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingCriticalUrlMonitoringMonitorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteSettingCriticalUrlMonitoringMonitors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingCriticalUrlMonitoringMonitors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._url = undefined;
      this._vlanId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._url = value.url;
      this._vlanId = value.vlanId;
    }
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // vlan_id - computed: true, optional: true, required: false
  private _vlanId?: string; 
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
  public set vlanId(value: string) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }
}

export class SiteSettingCriticalUrlMonitoringMonitorsList extends cdktf.ComplexList {
  public internalValue? : SiteSettingCriticalUrlMonitoringMonitors[] | cdktf.IResolvable

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
  public get(index: number): SiteSettingCriticalUrlMonitoringMonitorsOutputReference {
    return new SiteSettingCriticalUrlMonitoringMonitorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteSettingCriticalUrlMonitoring {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#enabled SiteSetting#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#monitors SiteSetting#monitors}
  */
  readonly monitors?: SiteSettingCriticalUrlMonitoringMonitors[] | cdktf.IResolvable;
}

export function siteSettingCriticalUrlMonitoringToTerraform(struct?: SiteSettingCriticalUrlMonitoring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    monitors: cdktf.listMapper(siteSettingCriticalUrlMonitoringMonitorsToTerraform, false)(struct!.monitors),
  }
}


export function siteSettingCriticalUrlMonitoringToHclTerraform(struct?: SiteSettingCriticalUrlMonitoring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitors: {
      value: cdktf.listMapperHcl(siteSettingCriticalUrlMonitoringMonitorsToHclTerraform, false)(struct!.monitors),
      isBlock: true,
      type: "list",
      storageClassType: "SiteSettingCriticalUrlMonitoringMonitorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingCriticalUrlMonitoringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteSettingCriticalUrlMonitoring | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._monitors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitors = this._monitors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingCriticalUrlMonitoring | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._monitors.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._monitors.internalValue = value.monitors;
    }
  }

  // enabled - computed: true, optional: true, required: false
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

  // monitors - computed: true, optional: true, required: false
  private _monitors = new SiteSettingCriticalUrlMonitoringMonitorsList(this, "monitors", false);
  public get monitors() {
    return this._monitors;
  }
  public putMonitors(value: SiteSettingCriticalUrlMonitoringMonitors[] | cdktf.IResolvable) {
    this._monitors.internalValue = value;
  }
  public resetMonitors() {
    this._monitors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorsInput() {
    return this._monitors.internalValue;
  }
}
export interface SiteSettingEngagementDwellTagNames {
  /**
  * Default to `Visitor`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#bounce SiteSetting#bounce}
  */
  readonly bounce?: string;
  /**
  * Default to `Associates`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#engaged SiteSetting#engaged}
  */
  readonly engaged?: string;
  /**
  * Default to `Passerby`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#passerby SiteSetting#passerby}
  */
  readonly passerby?: string;
  /**
  * Default to `Assets`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#stationed SiteSetting#stationed}
  */
  readonly stationed?: string;
}

export function siteSettingEngagementDwellTagNamesToTerraform(struct?: SiteSettingEngagementDwellTagNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bounce: cdktf.stringToTerraform(struct!.bounce),
    engaged: cdktf.stringToTerraform(struct!.engaged),
    passerby: cdktf.stringToTerraform(struct!.passerby),
    stationed: cdktf.stringToTerraform(struct!.stationed),
  }
}


export function siteSettingEngagementDwellTagNamesToHclTerraform(struct?: SiteSettingEngagementDwellTagNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bounce: {
      value: cdktf.stringToHclTerraform(struct!.bounce),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    engaged: {
      value: cdktf.stringToHclTerraform(struct!.engaged),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passerby: {
      value: cdktf.stringToHclTerraform(struct!.passerby),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stationed: {
      value: cdktf.stringToHclTerraform(struct!.stationed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingEngagementDwellTagNamesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteSettingEngagementDwellTagNames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bounce !== undefined) {
      hasAnyValues = true;
      internalValueResult.bounce = this._bounce;
    }
    if (this._engaged !== undefined) {
      hasAnyValues = true;
      internalValueResult.engaged = this._engaged;
    }
    if (this._passerby !== undefined) {
      hasAnyValues = true;
      internalValueResult.passerby = this._passerby;
    }
    if (this._stationed !== undefined) {
      hasAnyValues = true;
      internalValueResult.stationed = this._stationed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingEngagementDwellTagNames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bounce = undefined;
      this._engaged = undefined;
      this._passerby = undefined;
      this._stationed = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bounce = value.bounce;
      this._engaged = value.engaged;
      this._passerby = value.passerby;
      this._stationed = value.stationed;
    }
  }

  // bounce - computed: true, optional: true, required: false
  private _bounce?: string; 
  public get bounce() {
    return this.getStringAttribute('bounce');
  }
  public set bounce(value: string) {
    this._bounce = value;
  }
  public resetBounce() {
    this._bounce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bounceInput() {
    return this._bounce;
  }

  // engaged - computed: true, optional: true, required: false
  private _engaged?: string; 
  public get engaged() {
    return this.getStringAttribute('engaged');
  }
  public set engaged(value: string) {
    this._engaged = value;
  }
  public resetEngaged() {
    this._engaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engagedInput() {
    return this._engaged;
  }

  // passerby - computed: true, optional: true, required: false
  private _passerby?: string; 
  public get passerby() {
    return this.getStringAttribute('passerby');
  }
  public set passerby(value: string) {
    this._passerby = value;
  }
  public resetPasserby() {
    this._passerby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passerbyInput() {
    return this._passerby;
  }

  // stationed - computed: true, optional: true, required: false
  private _stationed?: string; 
  public get stationed() {
    return this.getStringAttribute('stationed');
  }
  public set stationed(value: string) {
    this._stationed = value;
  }
  public resetStationed() {
    this._stationed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stationedInput() {
    return this._stationed;
  }
}
export interface SiteSettingEngagementDwellTags {
  /**
  * Default to `301-14400`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#bounce SiteSetting#bounce}
  */
  readonly bounce?: string;
  /**
  * Default to `14401-28800`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#engaged SiteSetting#engaged}
  */
  readonly engaged?: string;
  /**
  * Default to `1-300`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#passerby SiteSetting#passerby}
  */
  readonly passerby?: string;
  /**
  * Default to `28801-42000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#stationed SiteSetting#stationed}
  */
  readonly stationed?: string;
}

export function siteSettingEngagementDwellTagsToTerraform(struct?: SiteSettingEngagementDwellTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bounce: cdktf.stringToTerraform(struct!.bounce),
    engaged: cdktf.stringToTerraform(struct!.engaged),
    passerby: cdktf.stringToTerraform(struct!.passerby),
    stationed: cdktf.stringToTerraform(struct!.stationed),
  }
}


export function siteSettingEngagementDwellTagsToHclTerraform(struct?: SiteSettingEngagementDwellTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bounce: {
      value: cdktf.stringToHclTerraform(struct!.bounce),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    engaged: {
      value: cdktf.stringToHclTerraform(struct!.engaged),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passerby: {
      value: cdktf.stringToHclTerraform(struct!.passerby),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stationed: {
      value: cdktf.stringToHclTerraform(struct!.stationed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingEngagementDwellTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteSettingEngagementDwellTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bounce !== undefined) {
      hasAnyValues = true;
      internalValueResult.bounce = this._bounce;
    }
    if (this._engaged !== undefined) {
      hasAnyValues = true;
      internalValueResult.engaged = this._engaged;
    }
    if (this._passerby !== undefined) {
      hasAnyValues = true;
      internalValueResult.passerby = this._passerby;
    }
    if (this._stationed !== undefined) {
      hasAnyValues = true;
      internalValueResult.stationed = this._stationed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingEngagementDwellTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bounce = undefined;
      this._engaged = undefined;
      this._passerby = undefined;
      this._stationed = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bounce = value.bounce;
      this._engaged = value.engaged;
      this._passerby = value.passerby;
      this._stationed = value.stationed;
    }
  }

  // bounce - computed: true, optional: true, required: false
  private _bounce?: string; 
  public get bounce() {
    return this.getStringAttribute('bounce');
  }
  public set bounce(value: string) {
    this._bounce = value;
  }
  public resetBounce() {
    this._bounce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bounceInput() {
    return this._bounce;
  }

  // engaged - computed: true, optional: true, required: false
  private _engaged?: string; 
  public get engaged() {
    return this.getStringAttribute('engaged');
  }
  public set engaged(value: string) {
    this._engaged = value;
  }
  public resetEngaged() {
    this._engaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engagedInput() {
    return this._engaged;
  }

  // passerby - computed: true, optional: true, required: false
  private _passerby?: string; 
  public get passerby() {
    return this.getStringAttribute('passerby');
  }
  public set passerby(value: string) {
    this._passerby = value;
  }
  public resetPasserby() {
    this._passerby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passerbyInput() {
    return this._passerby;
  }

  // stationed - computed: true, optional: true, required: false
  private _stationed?: string; 
  public get stationed() {
    return this.getStringAttribute('stationed');
  }
  public set stationed(value: string) {
    this._stationed = value;
  }
  public resetStationed() {
    this._stationed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stationedInput() {
    return this._stationed;
  }
}
export interface SiteSettingEngagementHours {
  /**
  * Hour range of the day (e.g. `09:00-17:00`). If the hour is not defined then it's treated as 00:00-23:59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#fri SiteSetting#fri}
  */
  readonly fri?: string;
  /**
  * Hour range of the day (e.g. `09:00-17:00`). If the hour is not defined then it's treated as 00:00-23:59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#mon SiteSetting#mon}
  */
  readonly mon?: string;
  /**
  * Hour range of the day (e.g. `09:00-17:00`). If the hour is not defined then it's treated as 00:00-23:59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#sat SiteSetting#sat}
  */
  readonly sat?: string;
  /**
  * Hour range of the day (e.g. `09:00-17:00`). If the hour is not defined then it's treated as 00:00-23:59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#sun SiteSetting#sun}
  */
  readonly sun?: string;
  /**
  * Hour range of the day (e.g. `09:00-17:00`). If the hour is not defined then it's treated as 00:00-23:59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#thu SiteSetting#thu}
  */
  readonly thu?: string;
  /**
  * Hour range of the day (e.g. `09:00-17:00`). If the hour is not defined then it's treated as 00:00-23:59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#tue SiteSetting#tue}
  */
  readonly tue?: string;
  /**
  * Hour range of the day (e.g. `09:00-17:00`). If the hour is not defined then it's treated as 00:00-23:59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#wed SiteSetting#wed}
  */
  readonly wed?: string;
}

export function siteSettingEngagementHoursToTerraform(struct?: SiteSettingEngagementHours | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fri: cdktf.stringToTerraform(struct!.fri),
    mon: cdktf.stringToTerraform(struct!.mon),
    sat: cdktf.stringToTerraform(struct!.sat),
    sun: cdktf.stringToTerraform(struct!.sun),
    thu: cdktf.stringToTerraform(struct!.thu),
    tue: cdktf.stringToTerraform(struct!.tue),
    wed: cdktf.stringToTerraform(struct!.wed),
  }
}


export function siteSettingEngagementHoursToHclTerraform(struct?: SiteSettingEngagementHours | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fri: {
      value: cdktf.stringToHclTerraform(struct!.fri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mon: {
      value: cdktf.stringToHclTerraform(struct!.mon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sat: {
      value: cdktf.stringToHclTerraform(struct!.sat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sun: {
      value: cdktf.stringToHclTerraform(struct!.sun),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    thu: {
      value: cdktf.stringToHclTerraform(struct!.thu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tue: {
      value: cdktf.stringToHclTerraform(struct!.tue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wed: {
      value: cdktf.stringToHclTerraform(struct!.wed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingEngagementHoursOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteSettingEngagementHours | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fri !== undefined) {
      hasAnyValues = true;
      internalValueResult.fri = this._fri;
    }
    if (this._mon !== undefined) {
      hasAnyValues = true;
      internalValueResult.mon = this._mon;
    }
    if (this._sat !== undefined) {
      hasAnyValues = true;
      internalValueResult.sat = this._sat;
    }
    if (this._sun !== undefined) {
      hasAnyValues = true;
      internalValueResult.sun = this._sun;
    }
    if (this._thu !== undefined) {
      hasAnyValues = true;
      internalValueResult.thu = this._thu;
    }
    if (this._tue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tue = this._tue;
    }
    if (this._wed !== undefined) {
      hasAnyValues = true;
      internalValueResult.wed = this._wed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingEngagementHours | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fri = undefined;
      this._mon = undefined;
      this._sat = undefined;
      this._sun = undefined;
      this._thu = undefined;
      this._tue = undefined;
      this._wed = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fri = value.fri;
      this._mon = value.mon;
      this._sat = value.sat;
      this._sun = value.sun;
      this._thu = value.thu;
      this._tue = value.tue;
      this._wed = value.wed;
    }
  }

  // fri - computed: true, optional: true, required: false
  private _fri?: string; 
  public get fri() {
    return this.getStringAttribute('fri');
  }
  public set fri(value: string) {
    this._fri = value;
  }
  public resetFri() {
    this._fri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friInput() {
    return this._fri;
  }

  // mon - computed: true, optional: true, required: false
  private _mon?: string; 
  public get mon() {
    return this.getStringAttribute('mon');
  }
  public set mon(value: string) {
    this._mon = value;
  }
  public resetMon() {
    this._mon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monInput() {
    return this._mon;
  }

  // sat - computed: true, optional: true, required: false
  private _sat?: string; 
  public get sat() {
    return this.getStringAttribute('sat');
  }
  public set sat(value: string) {
    this._sat = value;
  }
  public resetSat() {
    this._sat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get satInput() {
    return this._sat;
  }

  // sun - computed: true, optional: true, required: false
  private _sun?: string; 
  public get sun() {
    return this.getStringAttribute('sun');
  }
  public set sun(value: string) {
    this._sun = value;
  }
  public resetSun() {
    this._sun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sunInput() {
    return this._sun;
  }

  // thu - computed: true, optional: true, required: false
  private _thu?: string; 
  public get thu() {
    return this.getStringAttribute('thu');
  }
  public set thu(value: string) {
    this._thu = value;
  }
  public resetThu() {
    this._thu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thuInput() {
    return this._thu;
  }

  // tue - computed: true, optional: true, required: false
  private _tue?: string; 
  public get tue() {
    return this.getStringAttribute('tue');
  }
  public set tue(value: string) {
    this._tue = value;
  }
  public resetTue() {
    this._tue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tueInput() {
    return this._tue;
  }

  // wed - computed: true, optional: true, required: false
  private _wed?: string; 
  public get wed() {
    return this.getStringAttribute('wed');
  }
  public set wed(value: string) {
    this._wed = value;
  }
  public resetWed() {
    this._wed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wedInput() {
    return this._wed;
  }
}
export interface SiteSettingEngagement {
  /**
  * Name associated to each tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#dwell_tag_names SiteSetting#dwell_tag_names}
  */
  readonly dwellTagNames?: SiteSettingEngagementDwellTagNames;
  /**
  * add tags to visits within the duration (in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#dwell_tags SiteSetting#dwell_tags}
  */
  readonly dwellTags?: SiteSettingEngagementDwellTags;
  /**
  * Days/Hours of operation filter, the available days (mon, tue, wed, thu, fri, sat, sun)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#hours SiteSetting#hours}
  */
  readonly hours?: SiteSettingEngagementHours;
  /**
  * Max time, default is 43200(12h), max is 68400 (18h)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#max_dwell SiteSetting#max_dwell}
  */
  readonly maxDwell?: number;
  /**
  * min time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#min_dwell SiteSetting#min_dwell}
  */
  readonly minDwell?: number;
}

export function siteSettingEngagementToTerraform(struct?: SiteSettingEngagement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dwell_tag_names: siteSettingEngagementDwellTagNamesToTerraform(struct!.dwellTagNames),
    dwell_tags: siteSettingEngagementDwellTagsToTerraform(struct!.dwellTags),
    hours: siteSettingEngagementHoursToTerraform(struct!.hours),
    max_dwell: cdktf.numberToTerraform(struct!.maxDwell),
    min_dwell: cdktf.numberToTerraform(struct!.minDwell),
  }
}


export function siteSettingEngagementToHclTerraform(struct?: SiteSettingEngagement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dwell_tag_names: {
      value: siteSettingEngagementDwellTagNamesToHclTerraform(struct!.dwellTagNames),
      isBlock: true,
      type: "struct",
      storageClassType: "SiteSettingEngagementDwellTagNames",
    },
    dwell_tags: {
      value: siteSettingEngagementDwellTagsToHclTerraform(struct!.dwellTags),
      isBlock: true,
      type: "struct",
      storageClassType: "SiteSettingEngagementDwellTags",
    },
    hours: {
      value: siteSettingEngagementHoursToHclTerraform(struct!.hours),
      isBlock: true,
      type: "struct",
      storageClassType: "SiteSettingEngagementHours",
    },
    max_dwell: {
      value: cdktf.numberToHclTerraform(struct!.maxDwell),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_dwell: {
      value: cdktf.numberToHclTerraform(struct!.minDwell),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingEngagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteSettingEngagement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dwellTagNames?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dwellTagNames = this._dwellTagNames?.internalValue;
    }
    if (this._dwellTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dwellTags = this._dwellTags?.internalValue;
    }
    if (this._hours?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours?.internalValue;
    }
    if (this._maxDwell !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDwell = this._maxDwell;
    }
    if (this._minDwell !== undefined) {
      hasAnyValues = true;
      internalValueResult.minDwell = this._minDwell;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingEngagement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dwellTagNames.internalValue = undefined;
      this._dwellTags.internalValue = undefined;
      this._hours.internalValue = undefined;
      this._maxDwell = undefined;
      this._minDwell = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dwellTagNames.internalValue = value.dwellTagNames;
      this._dwellTags.internalValue = value.dwellTags;
      this._hours.internalValue = value.hours;
      this._maxDwell = value.maxDwell;
      this._minDwell = value.minDwell;
    }
  }

  // dwell_tag_names - computed: true, optional: true, required: false
  private _dwellTagNames = new SiteSettingEngagementDwellTagNamesOutputReference(this, "dwell_tag_names");
  public get dwellTagNames() {
    return this._dwellTagNames;
  }
  public putDwellTagNames(value: SiteSettingEngagementDwellTagNames) {
    this._dwellTagNames.internalValue = value;
  }
  public resetDwellTagNames() {
    this._dwellTagNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dwellTagNamesInput() {
    return this._dwellTagNames.internalValue;
  }

  // dwell_tags - computed: true, optional: true, required: false
  private _dwellTags = new SiteSettingEngagementDwellTagsOutputReference(this, "dwell_tags");
  public get dwellTags() {
    return this._dwellTags;
  }
  public putDwellTags(value: SiteSettingEngagementDwellTags) {
    this._dwellTags.internalValue = value;
  }
  public resetDwellTags() {
    this._dwellTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dwellTagsInput() {
    return this._dwellTags.internalValue;
  }

  // hours - computed: true, optional: true, required: false
  private _hours = new SiteSettingEngagementHoursOutputReference(this, "hours");
  public get hours() {
    return this._hours;
  }
  public putHours(value: SiteSettingEngagementHours) {
    this._hours.internalValue = value;
  }
  public resetHours() {
    this._hours.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours.internalValue;
  }

  // max_dwell - computed: true, optional: true, required: false
  private _maxDwell?: number; 
  public get maxDwell() {
    return this.getNumberAttribute('max_dwell');
  }
  public set maxDwell(value: number) {
    this._maxDwell = value;
  }
  public resetMaxDwell() {
    this._maxDwell = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDwellInput() {
    return this._maxDwell;
  }

  // min_dwell - computed: true, optional: true, required: false
  private _minDwell?: number; 
  public get minDwell() {
    return this.getNumberAttribute('min_dwell');
  }
  public set minDwell(value: number) {
    this._minDwell = value;
  }
  public resetMinDwell() {
    this._minDwell = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDwellInput() {
    return this._minDwell;
  }
}
export interface SiteSettingGatewayMgmtAppProbingCustomApps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#app_type SiteSetting#app_type}
  */
  readonly appType?: string;
  /**
  * Only 1 entry is allowed:
  *     * if `protocol`==`http`: URL (e.g. `http://test.com` or `https://test.com`)
  *     * if `protocol`==`icmp`: IP Address (e.g. `1.2.3.4`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#hostnames SiteSetting#hostnames}
  */
  readonly hostnames: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#name SiteSetting#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#network SiteSetting#network}
  */
  readonly network?: string;
  /**
  * If `protocol`==`icmp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#packet_size SiteSetting#packet_size}
  */
  readonly packetSize?: number;
  /**
  * enum: `http`, `icmp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#protocol SiteSetting#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#vrf SiteSetting#vrf}
  */
  readonly vrf?: string;
}

export function siteSettingGatewayMgmtAppProbingCustomAppsToTerraform(struct?: SiteSettingGatewayMgmtAppProbingCustomApps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_type: cdktf.stringToTerraform(struct!.appType),
    hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostnames),
    name: cdktf.stringToTerraform(struct!.name),
    network: cdktf.stringToTerraform(struct!.network),
    packet_size: cdktf.numberToTerraform(struct!.packetSize),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    vrf: cdktf.stringToTerraform(struct!.vrf),
  }
}


export function siteSettingGatewayMgmtAppProbingCustomAppsToHclTerraform(struct?: SiteSettingGatewayMgmtAppProbingCustomApps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_type: {
      value: cdktf.stringToHclTerraform(struct!.appType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostnames: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hostnames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    packet_size: {
      value: cdktf.numberToHclTerraform(struct!.packetSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf: {
      value: cdktf.stringToHclTerraform(struct!.vrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingGatewayMgmtAppProbingCustomAppsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteSettingGatewayMgmtAppProbingCustomApps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appType !== undefined) {
      hasAnyValues = true;
      internalValueResult.appType = this._appType;
    }
    if (this._hostnames !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnames = this._hostnames;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._packetSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetSize = this._packetSize;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._vrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrf = this._vrf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingGatewayMgmtAppProbingCustomApps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appType = undefined;
      this._hostnames = undefined;
      this._name = undefined;
      this._network = undefined;
      this._packetSize = undefined;
      this._protocol = undefined;
      this._vrf = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appType = value.appType;
      this._hostnames = value.hostnames;
      this._name = value.name;
      this._network = value.network;
      this._packetSize = value.packetSize;
      this._protocol = value.protocol;
      this._vrf = value.vrf;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // app_type - computed: true, optional: true, required: false
  private _appType?: string; 
  public get appType() {
    return this.getStringAttribute('app_type');
  }
  public set appType(value: string) {
    this._appType = value;
  }
  public resetAppType() {
    this._appType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appTypeInput() {
    return this._appType;
  }

  // hostnames - computed: true, optional: false, required: true
  private _hostnames?: string[]; 
  public get hostnames() {
    return this.getListAttribute('hostnames');
  }
  public set hostnames(value: string[]) {
    this._hostnames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamesInput() {
    return this._hostnames;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: true
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

  // network - computed: true, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // packet_size - computed: true, optional: true, required: false
  private _packetSize?: number; 
  public get packetSize() {
    return this.getNumberAttribute('packet_size');
  }
  public set packetSize(value: number) {
    this._packetSize = value;
  }
  public resetPacketSize() {
    this._packetSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetSizeInput() {
    return this._packetSize;
  }

  // protocol - computed: true, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // vrf - computed: true, optional: true, required: false
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  public resetVrf() {
    this._vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }
}

export class SiteSettingGatewayMgmtAppProbingCustomAppsList extends cdktf.ComplexList {
  public internalValue? : SiteSettingGatewayMgmtAppProbingCustomApps[] | cdktf.IResolvable

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
  public get(index: number): SiteSettingGatewayMgmtAppProbingCustomAppsOutputReference {
    return new SiteSettingGatewayMgmtAppProbingCustomAppsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteSettingGatewayMgmtAppProbing {
  /**
  * APp-keys from [List Applications]($e/Constants%20Definitions/listApplications)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#apps SiteSetting#apps}
  */
  readonly apps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#custom_apps SiteSetting#custom_apps}
  */
  readonly customApps?: SiteSettingGatewayMgmtAppProbingCustomApps[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#enabled SiteSetting#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function siteSettingGatewayMgmtAppProbingToTerraform(struct?: SiteSettingGatewayMgmtAppProbing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apps),
    custom_apps: cdktf.listMapper(siteSettingGatewayMgmtAppProbingCustomAppsToTerraform, false)(struct!.customApps),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function siteSettingGatewayMgmtAppProbingToHclTerraform(struct?: SiteSettingGatewayMgmtAppProbing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    custom_apps: {
      value: cdktf.listMapperHcl(siteSettingGatewayMgmtAppProbingCustomAppsToHclTerraform, false)(struct!.customApps),
      isBlock: true,
      type: "list",
      storageClassType: "SiteSettingGatewayMgmtAppProbingCustomAppsList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingGatewayMgmtAppProbingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteSettingGatewayMgmtAppProbing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apps !== undefined) {
      hasAnyValues = true;
      internalValueResult.apps = this._apps;
    }
    if (this._customApps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customApps = this._customApps?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingGatewayMgmtAppProbing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apps = undefined;
      this._customApps.internalValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apps = value.apps;
      this._customApps.internalValue = value.customApps;
      this._enabled = value.enabled;
    }
  }

  // apps - computed: true, optional: true, required: false
  private _apps?: string[]; 
  public get apps() {
    return this.getListAttribute('apps');
  }
  public set apps(value: string[]) {
    this._apps = value;
  }
  public resetApps() {
    this._apps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appsInput() {
    return this._apps;
  }

  // custom_apps - computed: true, optional: true, required: false
  private _customApps = new SiteSettingGatewayMgmtAppProbingCustomAppsList(this, "custom_apps", false);
  public get customApps() {
    return this._customApps;
  }
  public putCustomApps(value: SiteSettingGatewayMgmtAppProbingCustomApps[] | cdktf.IResolvable) {
    this._customApps.internalValue = value;
  }
  public resetCustomApps() {
    this._customApps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAppsInput() {
    return this._customApps.internalValue;
  }

  // enabled - computed: true, optional: true, required: false
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
}
export interface SiteSettingGatewayMgmtAutoSignatureUpdate {
  /**
  * enum: `any`, `fri`, `mon`, `sat`, `sun`, `thu`, `tue`, `wed`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#day_of_week SiteSetting#day_of_week}
  */
  readonly dayOfWeek?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#enable SiteSetting#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Optional, Mist will decide the timing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#time_of_day SiteSetting#time_of_day}
  */
  readonly timeOfDay?: string;
}

export function siteSettingGatewayMgmtAutoSignatureUpdateToTerraform(struct?: SiteSettingGatewayMgmtAutoSignatureUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    enable: cdktf.booleanToTerraform(struct!.enable),
    time_of_day: cdktf.stringToTerraform(struct!.timeOfDay),
  }
}


export function siteSettingGatewayMgmtAutoSignatureUpdateToHclTerraform(struct?: SiteSettingGatewayMgmtAutoSignatureUpdate | cdktf.IResolvable): any {
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
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    time_of_day: {
      value: cdktf.stringToHclTerraform(struct!.timeOfDay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingGatewayMgmtAutoSignatureUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteSettingGatewayMgmtAutoSignatureUpdate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._timeOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOfDay = this._timeOfDay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingGatewayMgmtAutoSignatureUpdate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dayOfWeek = undefined;
      this._enable = undefined;
      this._timeOfDay = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dayOfWeek = value.dayOfWeek;
      this._enable = value.enable;
      this._timeOfDay = value.timeOfDay;
    }
  }

  // day_of_week - computed: true, optional: true, required: false
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // time_of_day - computed: true, optional: true, required: false
  private _timeOfDay?: string; 
  public get timeOfDay() {
    return this.getStringAttribute('time_of_day');
  }
  public set timeOfDay(value: string) {
    this._timeOfDay = value;
  }
  public resetTimeOfDay() {
    this._timeOfDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOfDayInput() {
    return this._timeOfDay;
  }
}
export interface SiteSettingGatewayMgmtProtectReCustom {
  /**
  * matched dst port, "0" means any. Note: For `protocol`==`any` and  `port_range`==`any`, configure `trusted_hosts` instead
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#port_range SiteSetting#port_range}
  */
  readonly portRange?: string;
  /**
  * enum: `any`, `icmp`, `tcp`, `udp`. Note: For `protocol`==`any` and  `port_range`==`any`, configure `trusted_hosts` instead
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#protocol SiteSetting#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#subnets SiteSetting#subnets}
  */
  readonly subnets: string[];
}

export function siteSettingGatewayMgmtProtectReCustomToTerraform(struct?: SiteSettingGatewayMgmtProtectReCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_range: cdktf.stringToTerraform(struct!.portRange),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnets),
  }
}


export function siteSettingGatewayMgmtProtectReCustomToHclTerraform(struct?: SiteSettingGatewayMgmtProtectReCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_range: {
      value: cdktf.stringToHclTerraform(struct!.portRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingGatewayMgmtProtectReCustomOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteSettingGatewayMgmtProtectReCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRange = this._portRange;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingGatewayMgmtProtectReCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portRange = undefined;
      this._protocol = undefined;
      this._subnets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._portRange = value.portRange;
      this._protocol = value.protocol;
      this._subnets = value.subnets;
    }
  }

  // port_range - computed: true, optional: true, required: false
  private _portRange?: string; 
  public get portRange() {
    return this.getStringAttribute('port_range');
  }
  public set portRange(value: string) {
    this._portRange = value;
  }
  public resetPortRange() {
    this._portRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // subnets - computed: true, optional: false, required: true
  private _subnets?: string[]; 
  public get subnets() {
    return this.getListAttribute('subnets');
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }
}

export class SiteSettingGatewayMgmtProtectReCustomList extends cdktf.ComplexList {
  public internalValue? : SiteSettingGatewayMgmtProtectReCustom[] | cdktf.IResolvable

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
  public get(index: number): SiteSettingGatewayMgmtProtectReCustomOutputReference {
    return new SiteSettingGatewayMgmtProtectReCustomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteSettingGatewayMgmtProtectRe {
  /**
  * optionally, services we'll allow. enum: `icmp`, `ssh`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#allowed_services SiteSetting#allowed_services}
  */
  readonly allowedServices?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#custom SiteSetting#custom}
  */
  readonly custom?: SiteSettingGatewayMgmtProtectReCustom[] | cdktf.IResolvable;
  /**
  * When enabled, all traffic that is not essential to our operation will be dropped
  * e.g. ntp / dns / traffic to mist will be allowed by default
  *      if dhcpd is enabled, we'll make sure it works
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#enabled SiteSetting#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable hit count for Protect_RE policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#hit_count SiteSetting#hit_count}
  */
  readonly hitCount?: boolean | cdktf.IResolvable;
  /**
  * host/subnets we'll allow traffic to/from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#trusted_hosts SiteSetting#trusted_hosts}
  */
  readonly trustedHosts?: string[];
}

export function siteSettingGatewayMgmtProtectReToTerraform(struct?: SiteSettingGatewayMgmtProtectRe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedServices),
    custom: cdktf.listMapper(siteSettingGatewayMgmtProtectReCustomToTerraform, false)(struct!.custom),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    hit_count: cdktf.booleanToTerraform(struct!.hitCount),
    trusted_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.trustedHosts),
  }
}


export function siteSettingGatewayMgmtProtectReToHclTerraform(struct?: SiteSettingGatewayMgmtProtectRe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedServices),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    custom: {
      value: cdktf.listMapperHcl(siteSettingGatewayMgmtProtectReCustomToHclTerraform, false)(struct!.custom),
      isBlock: true,
      type: "list",
      storageClassType: "SiteSettingGatewayMgmtProtectReCustomList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hit_count: {
      value: cdktf.booleanToHclTerraform(struct!.hitCount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trusted_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.trustedHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingGatewayMgmtProtectReOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteSettingGatewayMgmtProtectRe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedServices = this._allowedServices;
    }
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._hitCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.hitCount = this._hitCount;
    }
    if (this._trustedHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedHosts = this._trustedHosts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingGatewayMgmtProtectRe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedServices = undefined;
      this._custom.internalValue = undefined;
      this._enabled = undefined;
      this._hitCount = undefined;
      this._trustedHosts = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedServices = value.allowedServices;
      this._custom.internalValue = value.custom;
      this._enabled = value.enabled;
      this._hitCount = value.hitCount;
      this._trustedHosts = value.trustedHosts;
    }
  }

  // allowed_services - computed: true, optional: true, required: false
  private _allowedServices?: string[]; 
  public get allowedServices() {
    return this.getListAttribute('allowed_services');
  }
  public set allowedServices(value: string[]) {
    this._allowedServices = value;
  }
  public resetAllowedServices() {
    this._allowedServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedServicesInput() {
    return this._allowedServices;
  }

  // custom - computed: true, optional: true, required: false
  private _custom = new SiteSettingGatewayMgmtProtectReCustomList(this, "custom", false);
  public get custom() {
    return this._custom;
  }
  public putCustom(value: SiteSettingGatewayMgmtProtectReCustom[] | cdktf.IResolvable) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // enabled - computed: true, optional: true, required: false
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

  // hit_count - computed: true, optional: true, required: false
  private _hitCount?: boolean | cdktf.IResolvable; 
  public get hitCount() {
    return this.getBooleanAttribute('hit_count');
  }
  public set hitCount(value: boolean | cdktf.IResolvable) {
    this._hitCount = value;
  }
  public resetHitCount() {
    this._hitCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitCountInput() {
    return this._hitCount;
  }

  // trusted_hosts - computed: true, optional: true, required: false
  private _trustedHosts?: string[]; 
  public get trustedHosts() {
    return this.getListAttribute('trusted_hosts');
  }
  public set trustedHosts(value: string[]) {
    this._trustedHosts = value;
  }
  public resetTrustedHosts() {
    this._trustedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedHostsInput() {
    return this._trustedHosts;
  }
}
export interface SiteSettingGatewayMgmt {
  /**
  * For SSR only, as direct root access is not allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#admin_sshkeys SiteSetting#admin_sshkeys}
  */
  readonly adminSshkeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#app_probing SiteSetting#app_probing}
  */
  readonly appProbing?: SiteSettingGatewayMgmtAppProbing;
  /**
  * Consumes uplink bandwidth, requires WA license
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#app_usage SiteSetting#app_usage}
  */
  readonly appUsage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#auto_signature_update SiteSetting#auto_signature_update}
  */
  readonly autoSignatureUpdate?: SiteSettingGatewayMgmtAutoSignatureUpdate;
  /**
  * Rollback timer for commit confirmed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#config_revert_timer SiteSetting#config_revert_timer}
  */
  readonly configRevertTimer?: number;
  /**
  * For SSR and SRX, disable console port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#disable_console SiteSetting#disable_console}
  */
  readonly disableConsole?: boolean | cdktf.IResolvable;
  /**
  * For SSR and SRX, disable management interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#disable_oob SiteSetting#disable_oob}
  */
  readonly disableOob?: boolean | cdktf.IResolvable;
  /**
  * For SSR and SRX, disable usb interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#disable_usb SiteSetting#disable_usb}
  */
  readonly disableUsb?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#fips_enabled SiteSetting#fips_enabled}
  */
  readonly fipsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#probe_hosts SiteSetting#probe_hosts}
  */
  readonly probeHosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#probe_hostsv6 SiteSetting#probe_hostsv6}
  */
  readonly probeHostsv6?: string[];
  /**
  * Restrict inbound-traffic to host
  * when enabled, all traffic that is not essential to our operation will be dropped 
  * e.g. ntp / dns / traffic to mist will be allowed by default, if dhcpd is enabled, we'll make sure it works
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#protect_re SiteSetting#protect_re}
  */
  readonly protectRe?: SiteSettingGatewayMgmtProtectRe;
  /**
  * For SRX only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#root_password SiteSetting#root_password}
  */
  readonly rootPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#security_log_source_address SiteSetting#security_log_source_address}
  */
  readonly securityLogSourceAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#security_log_source_interface SiteSetting#security_log_source_interface}
  */
  readonly securityLogSourceInterface?: string;
}

export function siteSettingGatewayMgmtToTerraform(struct?: SiteSettingGatewayMgmt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_sshkeys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.adminSshkeys),
    app_probing: siteSettingGatewayMgmtAppProbingToTerraform(struct!.appProbing),
    app_usage: cdktf.booleanToTerraform(struct!.appUsage),
    auto_signature_update: siteSettingGatewayMgmtAutoSignatureUpdateToTerraform(struct!.autoSignatureUpdate),
    config_revert_timer: cdktf.numberToTerraform(struct!.configRevertTimer),
    disable_console: cdktf.booleanToTerraform(struct!.disableConsole),
    disable_oob: cdktf.booleanToTerraform(struct!.disableOob),
    disable_usb: cdktf.booleanToTerraform(struct!.disableUsb),
    fips_enabled: cdktf.booleanToTerraform(struct!.fipsEnabled),
    probe_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.probeHosts),
    probe_hostsv6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.probeHostsv6),
    protect_re: siteSettingGatewayMgmtProtectReToTerraform(struct!.protectRe),
    root_password: cdktf.stringToTerraform(struct!.rootPassword),
    security_log_source_address: cdktf.stringToTerraform(struct!.securityLogSourceAddress),
    security_log_source_interface: cdktf.stringToTerraform(struct!.securityLogSourceInterface),
  }
}


export function siteSettingGatewayMgmtToHclTerraform(struct?: SiteSettingGatewayMgmt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_sshkeys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.adminSshkeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    app_probing: {
      value: siteSettingGatewayMgmtAppProbingToHclTerraform(struct!.appProbing),
      isBlock: true,
      type: "struct",
      storageClassType: "SiteSettingGatewayMgmtAppProbing",
    },
    app_usage: {
      value: cdktf.booleanToHclTerraform(struct!.appUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_signature_update: {
      value: siteSettingGatewayMgmtAutoSignatureUpdateToHclTerraform(struct!.autoSignatureUpdate),
      isBlock: true,
      type: "struct",
      storageClassType: "SiteSettingGatewayMgmtAutoSignatureUpdate",
    },
    config_revert_timer: {
      value: cdktf.numberToHclTerraform(struct!.configRevertTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable_console: {
      value: cdktf.booleanToHclTerraform(struct!.disableConsole),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_oob: {
      value: cdktf.booleanToHclTerraform(struct!.disableOob),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_usb: {
      value: cdktf.booleanToHclTerraform(struct!.disableUsb),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fips_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.fipsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    probe_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.probeHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    probe_hostsv6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.probeHostsv6),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    protect_re: {
      value: siteSettingGatewayMgmtProtectReToHclTerraform(struct!.protectRe),
      isBlock: true,
      type: "struct",
      storageClassType: "SiteSettingGatewayMgmtProtectRe",
    },
    root_password: {
      value: cdktf.stringToHclTerraform(struct!.rootPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_log_source_address: {
      value: cdktf.stringToHclTerraform(struct!.securityLogSourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_log_source_interface: {
      value: cdktf.stringToHclTerraform(struct!.securityLogSourceInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingGatewayMgmtOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteSettingGatewayMgmt | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminSshkeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminSshkeys = this._adminSshkeys;
    }
    if (this._appProbing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appProbing = this._appProbing?.internalValue;
    }
    if (this._appUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.appUsage = this._appUsage;
    }
    if (this._autoSignatureUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoSignatureUpdate = this._autoSignatureUpdate?.internalValue;
    }
    if (this._configRevertTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.configRevertTimer = this._configRevertTimer;
    }
    if (this._disableConsole !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableConsole = this._disableConsole;
    }
    if (this._disableOob !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableOob = this._disableOob;
    }
    if (this._disableUsb !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableUsb = this._disableUsb;
    }
    if (this._fipsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.fipsEnabled = this._fipsEnabled;
    }
    if (this._probeHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeHosts = this._probeHosts;
    }
    if (this._probeHostsv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeHostsv6 = this._probeHostsv6;
    }
    if (this._protectRe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectRe = this._protectRe?.internalValue;
    }
    if (this._rootPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootPassword = this._rootPassword;
    }
    if (this._securityLogSourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityLogSourceAddress = this._securityLogSourceAddress;
    }
    if (this._securityLogSourceInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityLogSourceInterface = this._securityLogSourceInterface;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingGatewayMgmt | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminSshkeys = undefined;
      this._appProbing.internalValue = undefined;
      this._appUsage = undefined;
      this._autoSignatureUpdate.internalValue = undefined;
      this._configRevertTimer = undefined;
      this._disableConsole = undefined;
      this._disableOob = undefined;
      this._disableUsb = undefined;
      this._fipsEnabled = undefined;
      this._probeHosts = undefined;
      this._probeHostsv6 = undefined;
      this._protectRe.internalValue = undefined;
      this._rootPassword = undefined;
      this._securityLogSourceAddress = undefined;
      this._securityLogSourceInterface = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminSshkeys = value.adminSshkeys;
      this._appProbing.internalValue = value.appProbing;
      this._appUsage = value.appUsage;
      this._autoSignatureUpdate.internalValue = value.autoSignatureUpdate;
      this._configRevertTimer = value.configRevertTimer;
      this._disableConsole = value.disableConsole;
      this._disableOob = value.disableOob;
      this._disableUsb = value.disableUsb;
      this._fipsEnabled = value.fipsEnabled;
      this._probeHosts = value.probeHosts;
      this._probeHostsv6 = value.probeHostsv6;
      this._protectRe.internalValue = value.protectRe;
      this._rootPassword = value.rootPassword;
      this._securityLogSourceAddress = value.securityLogSourceAddress;
      this._securityLogSourceInterface = value.securityLogSourceInterface;
    }
  }

  // admin_sshkeys - computed: true, optional: true, required: false
  private _adminSshkeys?: string[]; 
  public get adminSshkeys() {
    return this.getListAttribute('admin_sshkeys');
  }
  public set adminSshkeys(value: string[]) {
    this._adminSshkeys = value;
  }
  public resetAdminSshkeys() {
    this._adminSshkeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminSshkeysInput() {
    return this._adminSshkeys;
  }

  // app_probing - computed: true, optional: true, required: false
  private _appProbing = new SiteSettingGatewayMgmtAppProbingOutputReference(this, "app_probing");
  public get appProbing() {
    return this._appProbing;
  }
  public putAppProbing(value: SiteSettingGatewayMgmtAppProbing) {
    this._appProbing.internalValue = value;
  }
  public resetAppProbing() {
    this._appProbing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appProbingInput() {
    return this._appProbing.internalValue;
  }

  // app_usage - computed: true, optional: true, required: false
  private _appUsage?: boolean | cdktf.IResolvable; 
  public get appUsage() {
    return this.getBooleanAttribute('app_usage');
  }
  public set appUsage(value: boolean | cdktf.IResolvable) {
    this._appUsage = value;
  }
  public resetAppUsage() {
    this._appUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appUsageInput() {
    return this._appUsage;
  }

  // auto_signature_update - computed: true, optional: true, required: false
  private _autoSignatureUpdate = new SiteSettingGatewayMgmtAutoSignatureUpdateOutputReference(this, "auto_signature_update");
  public get autoSignatureUpdate() {
    return this._autoSignatureUpdate;
  }
  public putAutoSignatureUpdate(value: SiteSettingGatewayMgmtAutoSignatureUpdate) {
    this._autoSignatureUpdate.internalValue = value;
  }
  public resetAutoSignatureUpdate() {
    this._autoSignatureUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSignatureUpdateInput() {
    return this._autoSignatureUpdate.internalValue;
  }

  // config_revert_timer - computed: true, optional: true, required: false
  private _configRevertTimer?: number; 
  public get configRevertTimer() {
    return this.getNumberAttribute('config_revert_timer');
  }
  public set configRevertTimer(value: number) {
    this._configRevertTimer = value;
  }
  public resetConfigRevertTimer() {
    this._configRevertTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configRevertTimerInput() {
    return this._configRevertTimer;
  }

  // disable_console - computed: true, optional: true, required: false
  private _disableConsole?: boolean | cdktf.IResolvable; 
  public get disableConsole() {
    return this.getBooleanAttribute('disable_console');
  }
  public set disableConsole(value: boolean | cdktf.IResolvable) {
    this._disableConsole = value;
  }
  public resetDisableConsole() {
    this._disableConsole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableConsoleInput() {
    return this._disableConsole;
  }

  // disable_oob - computed: true, optional: true, required: false
  private _disableOob?: boolean | cdktf.IResolvable; 
  public get disableOob() {
    return this.getBooleanAttribute('disable_oob');
  }
  public set disableOob(value: boolean | cdktf.IResolvable) {
    this._disableOob = value;
  }
  public resetDisableOob() {
    this._disableOob = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableOobInput() {
    return this._disableOob;
  }

  // disable_usb - computed: true, optional: true, required: false
  private _disableUsb?: boolean | cdktf.IResolvable; 
  public get disableUsb() {
    return this.getBooleanAttribute('disable_usb');
  }
  public set disableUsb(value: boolean | cdktf.IResolvable) {
    this._disableUsb = value;
  }
  public resetDisableUsb() {
    this._disableUsb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableUsbInput() {
    return this._disableUsb;
  }

  // fips_enabled - computed: true, optional: true, required: false
  private _fipsEnabled?: boolean | cdktf.IResolvable; 
  public get fipsEnabled() {
    return this.getBooleanAttribute('fips_enabled');
  }
  public set fipsEnabled(value: boolean | cdktf.IResolvable) {
    this._fipsEnabled = value;
  }
  public resetFipsEnabled() {
    this._fipsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fipsEnabledInput() {
    return this._fipsEnabled;
  }

  // probe_hosts - computed: true, optional: true, required: false
  private _probeHosts?: string[]; 
  public get probeHosts() {
    return this.getListAttribute('probe_hosts');
  }
  public set probeHosts(value: string[]) {
    this._probeHosts = value;
  }
  public resetProbeHosts() {
    this._probeHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeHostsInput() {
    return this._probeHosts;
  }

  // probe_hostsv6 - computed: true, optional: true, required: false
  private _probeHostsv6?: string[]; 
  public get probeHostsv6() {
    return this.getListAttribute('probe_hostsv6');
  }
  public set probeHostsv6(value: string[]) {
    this._probeHostsv6 = value;
  }
  public resetProbeHostsv6() {
    this._probeHostsv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeHostsv6Input() {
    return this._probeHostsv6;
  }

  // protect_re - computed: true, optional: true, required: false
  private _protectRe = new SiteSettingGatewayMgmtProtectReOutputReference(this, "protect_re");
  public get protectRe() {
    return this._protectRe;
  }
  public putProtectRe(value: SiteSettingGatewayMgmtProtectRe) {
    this._protectRe.internalValue = value;
  }
  public resetProtectRe() {
    this._protectRe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectReInput() {
    return this._protectRe.internalValue;
  }

  // root_password - computed: true, optional: true, required: false
  private _rootPassword?: string; 
  public get rootPassword() {
    return this.getStringAttribute('root_password');
  }
  public set rootPassword(value: string) {
    this._rootPassword = value;
  }
  public resetRootPassword() {
    this._rootPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPasswordInput() {
    return this._rootPassword;
  }

  // security_log_source_address - computed: true, optional: true, required: false
  private _securityLogSourceAddress?: string; 
  public get securityLogSourceAddress() {
    return this.getStringAttribute('security_log_source_address');
  }
  public set securityLogSourceAddress(value: string) {
    this._securityLogSourceAddress = value;
  }
  public resetSecurityLogSourceAddress() {
    this._securityLogSourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityLogSourceAddressInput() {
    return this._securityLogSourceAddress;
  }

  // security_log_source_interface - computed: true, optional: true, required: false
  private _securityLogSourceInterface?: string; 
  public get securityLogSourceInterface() {
    return this.getStringAttribute('security_log_source_interface');
  }
  public set securityLogSourceInterface(value: string) {
    this._securityLogSourceInterface = value;
  }
  public resetSecurityLogSourceInterface() {
    this._securityLogSourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityLogSourceInterfaceInput() {
    return this._securityLogSourceInterface;
  }
}
export interface SiteSettingJuniperSrxAutoUpgrade {
  /**
  * Property key is the SRX Hardware model (e.g. "SRX4600")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#custom_versions SiteSetting#custom_versions}
  */
  readonly customVersions?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#enabled SiteSetting#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#snapshot SiteSetting#snapshot}
  */
  readonly snapshot?: boolean | cdktf.IResolvable;
}

export function siteSettingJuniperSrxAutoUpgradeToTerraform(struct?: SiteSettingJuniperSrxAutoUpgrade | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_versions: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customVersions),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    snapshot: cdktf.booleanToTerraform(struct!.snapshot),
  }
}


export function siteSettingJuniperSrxAutoUpgradeToHclTerraform(struct?: SiteSettingJuniperSrxAutoUpgrade | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_versions: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customVersions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snapshot: {
      value: cdktf.booleanToHclTerraform(struct!.snapshot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingJuniperSrxAutoUpgradeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteSettingJuniperSrxAutoUpgrade | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.customVersions = this._customVersions;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._snapshot !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshot = this._snapshot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingJuniperSrxAutoUpgrade | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customVersions = undefined;
      this._enabled = undefined;
      this._snapshot = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customVersions = value.customVersions;
      this._enabled = value.enabled;
      this._snapshot = value.snapshot;
    }
  }

  // custom_versions - computed: false, optional: true, required: false
  private _customVersions?: { [key: string]: string }; 
  public get customVersions() {
    return this.getStringMapAttribute('custom_versions');
  }
  public set customVersions(value: { [key: string]: string }) {
    this._customVersions = value;
  }
  public resetCustomVersions() {
    this._customVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customVersionsInput() {
    return this._customVersions;
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

  // snapshot - computed: false, optional: true, required: false
  private _snapshot?: boolean | cdktf.IResolvable; 
  public get snapshot() {
    return this.getBooleanAttribute('snapshot');
  }
  public set snapshot(value: boolean | cdktf.IResolvable) {
    this._snapshot = value;
  }
  public resetSnapshot() {
    this._snapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotInput() {
    return this._snapshot;
  }
}
export interface SiteSettingJuniperSrxGateways {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#api_key SiteSetting#api_key}
  */
  readonly apiKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#api_password SiteSetting#api_password}
  */
  readonly apiPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#api_url SiteSetting#api_url}
  */
  readonly apiUrl?: string;
}

export function siteSettingJuniperSrxGatewaysToTerraform(struct?: SiteSettingJuniperSrxGateways | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    api_password: cdktf.stringToTerraform(struct!.apiPassword),
    api_url: cdktf.stringToTerraform(struct!.apiUrl),
  }
}


export function siteSettingJuniperSrxGatewaysToHclTerraform(struct?: SiteSettingJuniperSrxGateways | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_password: {
      value: cdktf.stringToHclTerraform(struct!.apiPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_url: {
      value: cdktf.stringToHclTerraform(struct!.apiUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingJuniperSrxGatewaysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteSettingJuniperSrxGateways | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._apiPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiPassword = this._apiPassword;
    }
    if (this._apiUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiUrl = this._apiUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingJuniperSrxGateways | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
      this._apiPassword = undefined;
      this._apiUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
      this._apiPassword = value.apiPassword;
      this._apiUrl = value.apiUrl;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_password - computed: false, optional: true, required: false
  private _apiPassword?: string; 
  public get apiPassword() {
    return this.getStringAttribute('api_password');
  }
  public set apiPassword(value: string) {
    this._apiPassword = value;
  }
  public resetApiPassword() {
    this._apiPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiPasswordInput() {
    return this._apiPassword;
  }

  // api_url - computed: false, optional: true, required: false
  private _apiUrl?: string; 
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }
  public set apiUrl(value: string) {
    this._apiUrl = value;
  }
  public resetApiUrl() {
    this._apiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlInput() {
    return this._apiUrl;
  }
}

export class SiteSettingJuniperSrxGatewaysList extends cdktf.ComplexList {
  public internalValue? : SiteSettingJuniperSrxGateways[] | cdktf.IResolvable

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
  public get(index: number): SiteSettingJuniperSrxGatewaysOutputReference {
    return new SiteSettingJuniperSrxGatewaysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteSettingJuniperSrx {
  /**
  * auto_upgrade device first time it is onboarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#auto_upgrade SiteSetting#auto_upgrade}
  */
  readonly autoUpgrade?: SiteSettingJuniperSrxAutoUpgrade;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#gateways SiteSetting#gateways}
  */
  readonly gateways?: SiteSettingJuniperSrxGateways[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#send_mist_nac_user_info SiteSetting#send_mist_nac_user_info}
  */
  readonly sendMistNacUserInfo?: boolean | cdktf.IResolvable;
}

export function siteSettingJuniperSrxToTerraform(struct?: SiteSettingJuniperSrx | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_upgrade: siteSettingJuniperSrxAutoUpgradeToTerraform(struct!.autoUpgrade),
    gateways: cdktf.listMapper(siteSettingJuniperSrxGatewaysToTerraform, false)(struct!.gateways),
    send_mist_nac_user_info: cdktf.booleanToTerraform(struct!.sendMistNacUserInfo),
  }
}


export function siteSettingJuniperSrxToHclTerraform(struct?: SiteSettingJuniperSrx | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_upgrade: {
      value: siteSettingJuniperSrxAutoUpgradeToHclTerraform(struct!.autoUpgrade),
      isBlock: true,
      type: "struct",
      storageClassType: "SiteSettingJuniperSrxAutoUpgrade",
    },
    gateways: {
      value: cdktf.listMapperHcl(siteSettingJuniperSrxGatewaysToHclTerraform, false)(struct!.gateways),
      isBlock: true,
      type: "list",
      storageClassType: "SiteSettingJuniperSrxGatewaysList",
    },
    send_mist_nac_user_info: {
      value: cdktf.booleanToHclTerraform(struct!.sendMistNacUserInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingJuniperSrxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteSettingJuniperSrx | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoUpgrade?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoUpgrade = this._autoUpgrade?.internalValue;
    }
    if (this._gateways?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateways = this._gateways?.internalValue;
    }
    if (this._sendMistNacUserInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendMistNacUserInfo = this._sendMistNacUserInfo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingJuniperSrx | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoUpgrade.internalValue = undefined;
      this._gateways.internalValue = undefined;
      this._sendMistNacUserInfo = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoUpgrade.internalValue = value.autoUpgrade;
      this._gateways.internalValue = value.gateways;
      this._sendMistNacUserInfo = value.sendMistNacUserInfo;
    }
  }

  // auto_upgrade - computed: false, optional: true, required: false
  private _autoUpgrade = new SiteSettingJuniperSrxAutoUpgradeOutputReference(this, "auto_upgrade");
  public get autoUpgrade() {
    return this._autoUpgrade;
  }
  public putAutoUpgrade(value: SiteSettingJuniperSrxAutoUpgrade) {
    this._autoUpgrade.internalValue = value;
  }
  public resetAutoUpgrade() {
    this._autoUpgrade.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpgradeInput() {
    return this._autoUpgrade.internalValue;
  }

  // gateways - computed: false, optional: true, required: false
  private _gateways = new SiteSettingJuniperSrxGatewaysList(this, "gateways", false);
  public get gateways() {
    return this._gateways;
  }
  public putGateways(value: SiteSettingJuniperSrxGateways[] | cdktf.IResolvable) {
    this._gateways.internalValue = value;
  }
  public resetGateways() {
    this._gateways.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewaysInput() {
    return this._gateways.internalValue;
  }

  // send_mist_nac_user_info - computed: false, optional: true, required: false
  private _sendMistNacUserInfo?: boolean | cdktf.IResolvable; 
  public get sendMistNacUserInfo() {
    return this.getBooleanAttribute('send_mist_nac_user_info');
  }
  public set sendMistNacUserInfo(value: boolean | cdktf.IResolvable) {
    this._sendMistNacUserInfo = value;
  }
  public resetSendMistNacUserInfo() {
    this._sendMistNacUserInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendMistNacUserInfoInput() {
    return this._sendMistNacUserInfo;
  }
}
export interface SiteSettingLed {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#brightness SiteSetting#brightness}
  */
  readonly brightness?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#enabled SiteSetting#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function siteSettingLedToTerraform(struct?: SiteSettingLed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    brightness: cdktf.numberToTerraform(struct!.brightness),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function siteSettingLedToHclTerraform(struct?: SiteSettingLed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    brightness: {
      value: cdktf.numberToHclTerraform(struct!.brightness),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingLedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteSettingLed | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._brightness !== undefined) {
      hasAnyValues = true;
      internalValueResult.brightness = this._brightness;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingLed | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._brightness = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._brightness = value.brightness;
      this._enabled = value.enabled;
    }
  }

  // brightness - computed: true, optional: true, required: false
  private _brightness?: number; 
  public get brightness() {
    return this.getNumberAttribute('brightness');
  }
  public set brightness(value: number) {
    this._brightness = value;
  }
  public resetBrightness() {
    this._brightness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brightnessInput() {
    return this._brightness;
  }

  // enabled - computed: true, optional: true, required: false
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
}
export interface SiteSettingMarvisAutoOperations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#bounce_port_for_abnormal_poe_client SiteSetting#bounce_port_for_abnormal_poe_client}
  */
  readonly bouncePortForAbnormalPoeClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#disable_port_when_ddos_protocol_violation SiteSetting#disable_port_when_ddos_protocol_violation}
  */
  readonly disablePortWhenDdosProtocolViolation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#disable_port_when_rogue_dhcp_server_detected SiteSetting#disable_port_when_rogue_dhcp_server_detected}
  */
  readonly disablePortWhenRogueDhcpServerDetected?: boolean | cdktf.IResolvable;
}

export function siteSettingMarvisAutoOperationsToTerraform(struct?: SiteSettingMarvisAutoOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bounce_port_for_abnormal_poe_client: cdktf.booleanToTerraform(struct!.bouncePortForAbnormalPoeClient),
    disable_port_when_ddos_protocol_violation: cdktf.booleanToTerraform(struct!.disablePortWhenDdosProtocolViolation),
    disable_port_when_rogue_dhcp_server_detected: cdktf.booleanToTerraform(struct!.disablePortWhenRogueDhcpServerDetected),
  }
}


export function siteSettingMarvisAutoOperationsToHclTerraform(struct?: SiteSettingMarvisAutoOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bounce_port_for_abnormal_poe_client: {
      value: cdktf.booleanToHclTerraform(struct!.bouncePortForAbnormalPoeClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_port_when_ddos_protocol_violation: {
      value: cdktf.booleanToHclTerraform(struct!.disablePortWhenDdosProtocolViolation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_port_when_rogue_dhcp_server_detected: {
      value: cdktf.booleanToHclTerraform(struct!.disablePortWhenRogueDhcpServerDetected),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingMarvisAutoOperationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteSettingMarvisAutoOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bouncePortForAbnormalPoeClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.bouncePortForAbnormalPoeClient = this._bouncePortForAbnormalPoeClient;
    }
    if (this._disablePortWhenDdosProtocolViolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePortWhenDdosProtocolViolation = this._disablePortWhenDdosProtocolViolation;
    }
    if (this._disablePortWhenRogueDhcpServerDetected !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePortWhenRogueDhcpServerDetected = this._disablePortWhenRogueDhcpServerDetected;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingMarvisAutoOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bouncePortForAbnormalPoeClient = undefined;
      this._disablePortWhenDdosProtocolViolation = undefined;
      this._disablePortWhenRogueDhcpServerDetected = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bouncePortForAbnormalPoeClient = value.bouncePortForAbnormalPoeClient;
      this._disablePortWhenDdosProtocolViolation = value.disablePortWhenDdosProtocolViolation;
      this._disablePortWhenRogueDhcpServerDetected = value.disablePortWhenRogueDhcpServerDetected;
    }
  }

  // bounce_port_for_abnormal_poe_client - computed: true, optional: true, required: false
  private _bouncePortForAbnormalPoeClient?: boolean | cdktf.IResolvable; 
  public get bouncePortForAbnormalPoeClient() {
    return this.getBooleanAttribute('bounce_port_for_abnormal_poe_client');
  }
  public set bouncePortForAbnormalPoeClient(value: boolean | cdktf.IResolvable) {
    this._bouncePortForAbnormalPoeClient = value;
  }
  public resetBouncePortForAbnormalPoeClient() {
    this._bouncePortForAbnormalPoeClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bouncePortForAbnormalPoeClientInput() {
    return this._bouncePortForAbnormalPoeClient;
  }

  // disable_port_when_ddos_protocol_violation - computed: true, optional: true, required: false
  private _disablePortWhenDdosProtocolViolation?: boolean | cdktf.IResolvable; 
  public get disablePortWhenDdosProtocolViolation() {
    return this.getBooleanAttribute('disable_port_when_ddos_protocol_violation');
  }
  public set disablePortWhenDdosProtocolViolation(value: boolean | cdktf.IResolvable) {
    this._disablePortWhenDdosProtocolViolation = value;
  }
  public resetDisablePortWhenDdosProtocolViolation() {
    this._disablePortWhenDdosProtocolViolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePortWhenDdosProtocolViolationInput() {
    return this._disablePortWhenDdosProtocolViolation;
  }

  // disable_port_when_rogue_dhcp_server_detected - computed: true, optional: true, required: false
  private _disablePortWhenRogueDhcpServerDetected?: boolean | cdktf.IResolvable; 
  public get disablePortWhenRogueDhcpServerDetected() {
    return this.getBooleanAttribute('disable_port_when_rogue_dhcp_server_detected');
  }
  public set disablePortWhenRogueDhcpServerDetected(value: boolean | cdktf.IResolvable) {
    this._disablePortWhenRogueDhcpServerDetected = value;
  }
  public resetDisablePortWhenRogueDhcpServerDetected() {
    this._disablePortWhenRogueDhcpServerDetected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePortWhenRogueDhcpServerDetectedInput() {
    return this._disablePortWhenRogueDhcpServerDetected;
  }
}
export interface SiteSettingMarvis {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#auto_operations SiteSetting#auto_operations}
  */
  readonly autoOperations?: SiteSettingMarvisAutoOperations;
}

export function siteSettingMarvisToTerraform(struct?: SiteSettingMarvis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_operations: siteSettingMarvisAutoOperationsToTerraform(struct!.autoOperations),
  }
}


export function siteSettingMarvisToHclTerraform(struct?: SiteSettingMarvis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_operations: {
      value: siteSettingMarvisAutoOperationsToHclTerraform(struct!.autoOperations),
      isBlock: true,
      type: "struct",
      storageClassType: "SiteSettingMarvisAutoOperations",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingMarvisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteSettingMarvis | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoOperations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoOperations = this._autoOperations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingMarvis | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoOperations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoOperations.internalValue = value.autoOperations;
    }
  }

  // auto_operations - computed: false, optional: true, required: false
  private _autoOperations = new SiteSettingMarvisAutoOperationsOutputReference(this, "auto_operations");
  public get autoOperations() {
    return this._autoOperations;
  }
  public putAutoOperations(value: SiteSettingMarvisAutoOperations) {
    this._autoOperations.internalValue = value;
  }
  public resetAutoOperations() {
    this._autoOperations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoOperationsInput() {
    return this._autoOperations.internalValue;
  }
}
export interface SiteSettingOccupancy {
  /**
  * Indicate whether named BLE assets should be included in the zone occupancy calculation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#assets_enabled SiteSetting#assets_enabled}
  */
  readonly assetsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Indicate whether connected Wi-Fi clients should be included in the zone occupancy calculation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#clients_enabled SiteSetting#clients_enabled}
  */
  readonly clientsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Minimum duration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#min_duration SiteSetting#min_duration}
  */
  readonly minDuration?: number;
  /**
  * Indicate whether SDK clients should be included in the zone occupancy calculation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#sdkclients_enabled SiteSetting#sdkclients_enabled}
  */
  readonly sdkclientsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Indicate whether unconnected Wi-Fi clients should be included in the zone occupancy calculation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#unconnected_clients_enabled SiteSetting#unconnected_clients_enabled}
  */
  readonly unconnectedClientsEnabled?: boolean | cdktf.IResolvable;
}

export function siteSettingOccupancyToTerraform(struct?: SiteSettingOccupancy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assets_enabled: cdktf.booleanToTerraform(struct!.assetsEnabled),
    clients_enabled: cdktf.booleanToTerraform(struct!.clientsEnabled),
    min_duration: cdktf.numberToTerraform(struct!.minDuration),
    sdkclients_enabled: cdktf.booleanToTerraform(struct!.sdkclientsEnabled),
    unconnected_clients_enabled: cdktf.booleanToTerraform(struct!.unconnectedClientsEnabled),
  }
}


export function siteSettingOccupancyToHclTerraform(struct?: SiteSettingOccupancy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assets_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.assetsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    clients_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.clientsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    min_duration: {
      value: cdktf.numberToHclTerraform(struct!.minDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sdkclients_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sdkclientsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unconnected_clients_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.unconnectedClientsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingOccupancyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteSettingOccupancy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assetsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.assetsEnabled = this._assetsEnabled;
    }
    if (this._clientsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientsEnabled = this._clientsEnabled;
    }
    if (this._minDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.minDuration = this._minDuration;
    }
    if (this._sdkclientsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdkclientsEnabled = this._sdkclientsEnabled;
    }
    if (this._unconnectedClientsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.unconnectedClientsEnabled = this._unconnectedClientsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingOccupancy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assetsEnabled = undefined;
      this._clientsEnabled = undefined;
      this._minDuration = undefined;
      this._sdkclientsEnabled = undefined;
      this._unconnectedClientsEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assetsEnabled = value.assetsEnabled;
      this._clientsEnabled = value.clientsEnabled;
      this._minDuration = value.minDuration;
      this._sdkclientsEnabled = value.sdkclientsEnabled;
      this._unconnectedClientsEnabled = value.unconnectedClientsEnabled;
    }
  }

  // assets_enabled - computed: true, optional: true, required: false
  private _assetsEnabled?: boolean | cdktf.IResolvable; 
  public get assetsEnabled() {
    return this.getBooleanAttribute('assets_enabled');
  }
  public set assetsEnabled(value: boolean | cdktf.IResolvable) {
    this._assetsEnabled = value;
  }
  public resetAssetsEnabled() {
    this._assetsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetsEnabledInput() {
    return this._assetsEnabled;
  }

  // clients_enabled - computed: true, optional: true, required: false
  private _clientsEnabled?: boolean | cdktf.IResolvable; 
  public get clientsEnabled() {
    return this.getBooleanAttribute('clients_enabled');
  }
  public set clientsEnabled(value: boolean | cdktf.IResolvable) {
    this._clientsEnabled = value;
  }
  public resetClientsEnabled() {
    this._clientsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsEnabledInput() {
    return this._clientsEnabled;
  }

  // min_duration - computed: true, optional: true, required: false
  private _minDuration?: number; 
  public get minDuration() {
    return this.getNumberAttribute('min_duration');
  }
  public set minDuration(value: number) {
    this._minDuration = value;
  }
  public resetMinDuration() {
    this._minDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDurationInput() {
    return this._minDuration;
  }

  // sdkclients_enabled - computed: true, optional: true, required: false
  private _sdkclientsEnabled?: boolean | cdktf.IResolvable; 
  public get sdkclientsEnabled() {
    return this.getBooleanAttribute('sdkclients_enabled');
  }
  public set sdkclientsEnabled(value: boolean | cdktf.IResolvable) {
    this._sdkclientsEnabled = value;
  }
  public resetSdkclientsEnabled() {
    this._sdkclientsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdkclientsEnabledInput() {
    return this._sdkclientsEnabled;
  }

  // unconnected_clients_enabled - computed: true, optional: true, required: false
  private _unconnectedClientsEnabled?: boolean | cdktf.IResolvable; 
  public get unconnectedClientsEnabled() {
    return this.getBooleanAttribute('unconnected_clients_enabled');
  }
  public set unconnectedClientsEnabled(value: boolean | cdktf.IResolvable) {
    this._unconnectedClientsEnabled = value;
  }
  public resetUnconnectedClientsEnabled() {
    this._unconnectedClientsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unconnectedClientsEnabledInput() {
    return this._unconnectedClientsEnabled;
  }
}
export interface SiteSettingProxy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#url SiteSetting#url}
  */
  readonly url?: string;
}

export function siteSettingProxyToTerraform(struct?: SiteSettingProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function siteSettingProxyToHclTerraform(struct?: SiteSettingProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteSettingProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface SiteSettingRogue {
  /**
  * list of VLAN IDs on which rogue APs are ignored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#allowed_vlan_ids SiteSetting#allowed_vlan_ids}
  */
  readonly allowedVlanIds?: number[];
  /**
  * Whether rogue detection is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#enabled SiteSetting#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Whether honeypot detection is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#honeypot_enabled SiteSetting#honeypot_enabled}
  */
  readonly honeypotEnabled?: boolean | cdktf.IResolvable;
  /**
  * Minimum duration for a bssid to be considered neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#min_duration SiteSetting#min_duration}
  */
  readonly minDuration?: number;
  /**
  * Minimum duration for a bssid to be considered rogue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#min_rogue_duration SiteSetting#min_rogue_duration}
  */
  readonly minRogueDuration?: number;
  /**
  * Minimum RSSI for an AP to be considered rogue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#min_rogue_rssi SiteSetting#min_rogue_rssi}
  */
  readonly minRogueRssi?: number;
  /**
  * Minimum RSSI for an AP to be considered neighbor (ignoring APs that’s far away)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#min_rssi SiteSetting#min_rssi}
  */
  readonly minRssi?: number;
  /**
  * list of BSSIDs to whitelist. Ex: "cc-:8e-:6f-:d4-:bf-:16", "cc-8e-6f-d4-bf-16", "cc-73-*", "cc:82:*"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#whitelisted_bssids SiteSetting#whitelisted_bssids}
  */
  readonly whitelistedBssids?: string[];
  /**
  * List of SSIDs to whitelist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#whitelisted_ssids SiteSetting#whitelisted_ssids}
  */
  readonly whitelistedSsids?: string[];
}

export function siteSettingRogueToTerraform(struct?: SiteSettingRogue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_vlan_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.allowedVlanIds),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    honeypot_enabled: cdktf.booleanToTerraform(struct!.honeypotEnabled),
    min_duration: cdktf.numberToTerraform(struct!.minDuration),
    min_rogue_duration: cdktf.numberToTerraform(struct!.minRogueDuration),
    min_rogue_rssi: cdktf.numberToTerraform(struct!.minRogueRssi),
    min_rssi: cdktf.numberToTerraform(struct!.minRssi),
    whitelisted_bssids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.whitelistedBssids),
    whitelisted_ssids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.whitelistedSsids),
  }
}


export function siteSettingRogueToHclTerraform(struct?: SiteSettingRogue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_vlan_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.allowedVlanIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    honeypot_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.honeypotEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    min_duration: {
      value: cdktf.numberToHclTerraform(struct!.minDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_rogue_duration: {
      value: cdktf.numberToHclTerraform(struct!.minRogueDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_rogue_rssi: {
      value: cdktf.numberToHclTerraform(struct!.minRogueRssi),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_rssi: {
      value: cdktf.numberToHclTerraform(struct!.minRssi),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    whitelisted_bssids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.whitelistedBssids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    whitelisted_ssids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.whitelistedSsids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingRogueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteSettingRogue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedVlanIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedVlanIds = this._allowedVlanIds;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._honeypotEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.honeypotEnabled = this._honeypotEnabled;
    }
    if (this._minDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.minDuration = this._minDuration;
    }
    if (this._minRogueDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.minRogueDuration = this._minRogueDuration;
    }
    if (this._minRogueRssi !== undefined) {
      hasAnyValues = true;
      internalValueResult.minRogueRssi = this._minRogueRssi;
    }
    if (this._minRssi !== undefined) {
      hasAnyValues = true;
      internalValueResult.minRssi = this._minRssi;
    }
    if (this._whitelistedBssids !== undefined) {
      hasAnyValues = true;
      internalValueResult.whitelistedBssids = this._whitelistedBssids;
    }
    if (this._whitelistedSsids !== undefined) {
      hasAnyValues = true;
      internalValueResult.whitelistedSsids = this._whitelistedSsids;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingRogue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedVlanIds = undefined;
      this._enabled = undefined;
      this._honeypotEnabled = undefined;
      this._minDuration = undefined;
      this._minRogueDuration = undefined;
      this._minRogueRssi = undefined;
      this._minRssi = undefined;
      this._whitelistedBssids = undefined;
      this._whitelistedSsids = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedVlanIds = value.allowedVlanIds;
      this._enabled = value.enabled;
      this._honeypotEnabled = value.honeypotEnabled;
      this._minDuration = value.minDuration;
      this._minRogueDuration = value.minRogueDuration;
      this._minRogueRssi = value.minRogueRssi;
      this._minRssi = value.minRssi;
      this._whitelistedBssids = value.whitelistedBssids;
      this._whitelistedSsids = value.whitelistedSsids;
    }
  }

  // allowed_vlan_ids - computed: true, optional: true, required: false
  private _allowedVlanIds?: number[]; 
  public get allowedVlanIds() {
    return this.getNumberListAttribute('allowed_vlan_ids');
  }
  public set allowedVlanIds(value: number[]) {
    this._allowedVlanIds = value;
  }
  public resetAllowedVlanIds() {
    this._allowedVlanIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedVlanIdsInput() {
    return this._allowedVlanIds;
  }

  // enabled - computed: true, optional: true, required: false
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

  // honeypot_enabled - computed: true, optional: true, required: false
  private _honeypotEnabled?: boolean | cdktf.IResolvable; 
  public get honeypotEnabled() {
    return this.getBooleanAttribute('honeypot_enabled');
  }
  public set honeypotEnabled(value: boolean | cdktf.IResolvable) {
    this._honeypotEnabled = value;
  }
  public resetHoneypotEnabled() {
    this._honeypotEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get honeypotEnabledInput() {
    return this._honeypotEnabled;
  }

  // min_duration - computed: true, optional: true, required: false
  private _minDuration?: number; 
  public get minDuration() {
    return this.getNumberAttribute('min_duration');
  }
  public set minDuration(value: number) {
    this._minDuration = value;
  }
  public resetMinDuration() {
    this._minDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDurationInput() {
    return this._minDuration;
  }

  // min_rogue_duration - computed: true, optional: true, required: false
  private _minRogueDuration?: number; 
  public get minRogueDuration() {
    return this.getNumberAttribute('min_rogue_duration');
  }
  public set minRogueDuration(value: number) {
    this._minRogueDuration = value;
  }
  public resetMinRogueDuration() {
    this._minRogueDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRogueDurationInput() {
    return this._minRogueDuration;
  }

  // min_rogue_rssi - computed: true, optional: true, required: false
  private _minRogueRssi?: number; 
  public get minRogueRssi() {
    return this.getNumberAttribute('min_rogue_rssi');
  }
  public set minRogueRssi(value: number) {
    this._minRogueRssi = value;
  }
  public resetMinRogueRssi() {
    this._minRogueRssi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRogueRssiInput() {
    return this._minRogueRssi;
  }

  // min_rssi - computed: true, optional: true, required: false
  private _minRssi?: number; 
  public get minRssi() {
    return this.getNumberAttribute('min_rssi');
  }
  public set minRssi(value: number) {
    this._minRssi = value;
  }
  public resetMinRssi() {
    this._minRssi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRssiInput() {
    return this._minRssi;
  }

  // whitelisted_bssids - computed: true, optional: true, required: false
  private _whitelistedBssids?: string[]; 
  public get whitelistedBssids() {
    return this.getListAttribute('whitelisted_bssids');
  }
  public set whitelistedBssids(value: string[]) {
    this._whitelistedBssids = value;
  }
  public resetWhitelistedBssids() {
    this._whitelistedBssids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistedBssidsInput() {
    return this._whitelistedBssids;
  }

  // whitelisted_ssids - computed: true, optional: true, required: false
  private _whitelistedSsids?: string[]; 
  public get whitelistedSsids() {
    return this.getListAttribute('whitelisted_ssids');
  }
  public set whitelistedSsids(value: string[]) {
    this._whitelistedSsids = value;
  }
  public resetWhitelistedSsids() {
    this._whitelistedSsids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistedSsidsInput() {
    return this._whitelistedSsids;
  }
}
export interface SiteSettingRtsa {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#app_waking SiteSetting#app_waking}
  */
  readonly appWaking?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#disable_dead_reckoning SiteSetting#disable_dead_reckoning}
  */
  readonly disableDeadReckoning?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#disable_pressure_sensor SiteSetting#disable_pressure_sensor}
  */
  readonly disablePressureSensor?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#enabled SiteSetting#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Asset tracking related
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#track_asset SiteSetting#track_asset}
  */
  readonly trackAsset?: boolean | cdktf.IResolvable;
}

export function siteSettingRtsaToTerraform(struct?: SiteSettingRtsa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_waking: cdktf.booleanToTerraform(struct!.appWaking),
    disable_dead_reckoning: cdktf.booleanToTerraform(struct!.disableDeadReckoning),
    disable_pressure_sensor: cdktf.booleanToTerraform(struct!.disablePressureSensor),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    track_asset: cdktf.booleanToTerraform(struct!.trackAsset),
  }
}


export function siteSettingRtsaToHclTerraform(struct?: SiteSettingRtsa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_waking: {
      value: cdktf.booleanToHclTerraform(struct!.appWaking),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_dead_reckoning: {
      value: cdktf.booleanToHclTerraform(struct!.disableDeadReckoning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_pressure_sensor: {
      value: cdktf.booleanToHclTerraform(struct!.disablePressureSensor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    track_asset: {
      value: cdktf.booleanToHclTerraform(struct!.trackAsset),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingRtsaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteSettingRtsa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appWaking !== undefined) {
      hasAnyValues = true;
      internalValueResult.appWaking = this._appWaking;
    }
    if (this._disableDeadReckoning !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableDeadReckoning = this._disableDeadReckoning;
    }
    if (this._disablePressureSensor !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePressureSensor = this._disablePressureSensor;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._trackAsset !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackAsset = this._trackAsset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingRtsa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appWaking = undefined;
      this._disableDeadReckoning = undefined;
      this._disablePressureSensor = undefined;
      this._enabled = undefined;
      this._trackAsset = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appWaking = value.appWaking;
      this._disableDeadReckoning = value.disableDeadReckoning;
      this._disablePressureSensor = value.disablePressureSensor;
      this._enabled = value.enabled;
      this._trackAsset = value.trackAsset;
    }
  }

  // app_waking - computed: true, optional: true, required: false
  private _appWaking?: boolean | cdktf.IResolvable; 
  public get appWaking() {
    return this.getBooleanAttribute('app_waking');
  }
  public set appWaking(value: boolean | cdktf.IResolvable) {
    this._appWaking = value;
  }
  public resetAppWaking() {
    this._appWaking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appWakingInput() {
    return this._appWaking;
  }

  // disable_dead_reckoning - computed: true, optional: true, required: false
  private _disableDeadReckoning?: boolean | cdktf.IResolvable; 
  public get disableDeadReckoning() {
    return this.getBooleanAttribute('disable_dead_reckoning');
  }
  public set disableDeadReckoning(value: boolean | cdktf.IResolvable) {
    this._disableDeadReckoning = value;
  }
  public resetDisableDeadReckoning() {
    this._disableDeadReckoning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableDeadReckoningInput() {
    return this._disableDeadReckoning;
  }

  // disable_pressure_sensor - computed: true, optional: true, required: false
  private _disablePressureSensor?: boolean | cdktf.IResolvable; 
  public get disablePressureSensor() {
    return this.getBooleanAttribute('disable_pressure_sensor');
  }
  public set disablePressureSensor(value: boolean | cdktf.IResolvable) {
    this._disablePressureSensor = value;
  }
  public resetDisablePressureSensor() {
    this._disablePressureSensor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePressureSensorInput() {
    return this._disablePressureSensor;
  }

  // enabled - computed: true, optional: true, required: false
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

  // track_asset - computed: true, optional: true, required: false
  private _trackAsset?: boolean | cdktf.IResolvable; 
  public get trackAsset() {
    return this.getBooleanAttribute('track_asset');
  }
  public set trackAsset(value: boolean | cdktf.IResolvable) {
    this._trackAsset = value;
  }
  public resetTrackAsset() {
    this._trackAsset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackAssetInput() {
    return this._trackAsset;
  }
}
export interface SiteSettingSimpleAlertArpFailure {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#client_count SiteSetting#client_count}
  */
  readonly clientCount?: number;
  /**
  * failing within minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#duration SiteSetting#duration}
  */
  readonly duration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#incident_count SiteSetting#incident_count}
  */
  readonly incidentCount?: number;
}

export function siteSettingSimpleAlertArpFailureToTerraform(struct?: SiteSettingSimpleAlertArpFailure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_count: cdktf.numberToTerraform(struct!.clientCount),
    duration: cdktf.numberToTerraform(struct!.duration),
    incident_count: cdktf.numberToTerraform(struct!.incidentCount),
  }
}


export function siteSettingSimpleAlertArpFailureToHclTerraform(struct?: SiteSettingSimpleAlertArpFailure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_count: {
      value: cdktf.numberToHclTerraform(struct!.clientCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    incident_count: {
      value: cdktf.numberToHclTerraform(struct!.incidentCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingSimpleAlertArpFailureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteSettingSimpleAlertArpFailure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCount = this._clientCount;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._incidentCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentCount = this._incidentCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingSimpleAlertArpFailure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientCount = undefined;
      this._duration = undefined;
      this._incidentCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientCount = value.clientCount;
      this._duration = value.duration;
      this._incidentCount = value.incidentCount;
    }
  }

  // client_count - computed: true, optional: true, required: false
  private _clientCount?: number; 
  public get clientCount() {
    return this.getNumberAttribute('client_count');
  }
  public set clientCount(value: number) {
    this._clientCount = value;
  }
  public resetClientCount() {
    this._clientCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCountInput() {
    return this._clientCount;
  }

  // duration - computed: true, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // incident_count - computed: true, optional: true, required: false
  private _incidentCount?: number; 
  public get incidentCount() {
    return this.getNumberAttribute('incident_count');
  }
  public set incidentCount(value: number) {
    this._incidentCount = value;
  }
  public resetIncidentCount() {
    this._incidentCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentCountInput() {
    return this._incidentCount;
  }
}
export interface SiteSettingSimpleAlertDhcpFailure {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#client_count SiteSetting#client_count}
  */
  readonly clientCount?: number;
  /**
  * failing within minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#duration SiteSetting#duration}
  */
  readonly duration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#incident_count SiteSetting#incident_count}
  */
  readonly incidentCount?: number;
}

export function siteSettingSimpleAlertDhcpFailureToTerraform(struct?: SiteSettingSimpleAlertDhcpFailure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_count: cdktf.numberToTerraform(struct!.clientCount),
    duration: cdktf.numberToTerraform(struct!.duration),
    incident_count: cdktf.numberToTerraform(struct!.incidentCount),
  }
}


export function siteSettingSimpleAlertDhcpFailureToHclTerraform(struct?: SiteSettingSimpleAlertDhcpFailure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_count: {
      value: cdktf.numberToHclTerraform(struct!.clientCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    incident_count: {
      value: cdktf.numberToHclTerraform(struct!.incidentCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingSimpleAlertDhcpFailureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteSettingSimpleAlertDhcpFailure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCount = this._clientCount;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._incidentCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentCount = this._incidentCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingSimpleAlertDhcpFailure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientCount = undefined;
      this._duration = undefined;
      this._incidentCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientCount = value.clientCount;
      this._duration = value.duration;
      this._incidentCount = value.incidentCount;
    }
  }

  // client_count - computed: true, optional: true, required: false
  private _clientCount?: number; 
  public get clientCount() {
    return this.getNumberAttribute('client_count');
  }
  public set clientCount(value: number) {
    this._clientCount = value;
  }
  public resetClientCount() {
    this._clientCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCountInput() {
    return this._clientCount;
  }

  // duration - computed: true, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // incident_count - computed: true, optional: true, required: false
  private _incidentCount?: number; 
  public get incidentCount() {
    return this.getNumberAttribute('incident_count');
  }
  public set incidentCount(value: number) {
    this._incidentCount = value;
  }
  public resetIncidentCount() {
    this._incidentCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentCountInput() {
    return this._incidentCount;
  }
}
export interface SiteSettingSimpleAlertDnsFailure {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#client_count SiteSetting#client_count}
  */
  readonly clientCount?: number;
  /**
  * failing within minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#duration SiteSetting#duration}
  */
  readonly duration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#incident_count SiteSetting#incident_count}
  */
  readonly incidentCount?: number;
}

export function siteSettingSimpleAlertDnsFailureToTerraform(struct?: SiteSettingSimpleAlertDnsFailure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_count: cdktf.numberToTerraform(struct!.clientCount),
    duration: cdktf.numberToTerraform(struct!.duration),
    incident_count: cdktf.numberToTerraform(struct!.incidentCount),
  }
}


export function siteSettingSimpleAlertDnsFailureToHclTerraform(struct?: SiteSettingSimpleAlertDnsFailure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_count: {
      value: cdktf.numberToHclTerraform(struct!.clientCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    incident_count: {
      value: cdktf.numberToHclTerraform(struct!.incidentCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingSimpleAlertDnsFailureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteSettingSimpleAlertDnsFailure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCount = this._clientCount;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._incidentCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentCount = this._incidentCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingSimpleAlertDnsFailure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientCount = undefined;
      this._duration = undefined;
      this._incidentCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientCount = value.clientCount;
      this._duration = value.duration;
      this._incidentCount = value.incidentCount;
    }
  }

  // client_count - computed: true, optional: true, required: false
  private _clientCount?: number; 
  public get clientCount() {
    return this.getNumberAttribute('client_count');
  }
  public set clientCount(value: number) {
    this._clientCount = value;
  }
  public resetClientCount() {
    this._clientCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCountInput() {
    return this._clientCount;
  }

  // duration - computed: true, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // incident_count - computed: true, optional: true, required: false
  private _incidentCount?: number; 
  public get incidentCount() {
    return this.getNumberAttribute('incident_count');
  }
  public set incidentCount(value: number) {
    this._incidentCount = value;
  }
  public resetIncidentCount() {
    this._incidentCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentCountInput() {
    return this._incidentCount;
  }
}
export interface SiteSettingSimpleAlert {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#arp_failure SiteSetting#arp_failure}
  */
  readonly arpFailure?: SiteSettingSimpleAlertArpFailure;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#dhcp_failure SiteSetting#dhcp_failure}
  */
  readonly dhcpFailure?: SiteSettingSimpleAlertDhcpFailure;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#dns_failure SiteSetting#dns_failure}
  */
  readonly dnsFailure?: SiteSettingSimpleAlertDnsFailure;
}

export function siteSettingSimpleAlertToTerraform(struct?: SiteSettingSimpleAlert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arp_failure: siteSettingSimpleAlertArpFailureToTerraform(struct!.arpFailure),
    dhcp_failure: siteSettingSimpleAlertDhcpFailureToTerraform(struct!.dhcpFailure),
    dns_failure: siteSettingSimpleAlertDnsFailureToTerraform(struct!.dnsFailure),
  }
}


export function siteSettingSimpleAlertToHclTerraform(struct?: SiteSettingSimpleAlert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arp_failure: {
      value: siteSettingSimpleAlertArpFailureToHclTerraform(struct!.arpFailure),
      isBlock: true,
      type: "struct",
      storageClassType: "SiteSettingSimpleAlertArpFailure",
    },
    dhcp_failure: {
      value: siteSettingSimpleAlertDhcpFailureToHclTerraform(struct!.dhcpFailure),
      isBlock: true,
      type: "struct",
      storageClassType: "SiteSettingSimpleAlertDhcpFailure",
    },
    dns_failure: {
      value: siteSettingSimpleAlertDnsFailureToHclTerraform(struct!.dnsFailure),
      isBlock: true,
      type: "struct",
      storageClassType: "SiteSettingSimpleAlertDnsFailure",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingSimpleAlertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteSettingSimpleAlert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arpFailure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpFailure = this._arpFailure?.internalValue;
    }
    if (this._dhcpFailure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpFailure = this._dhcpFailure?.internalValue;
    }
    if (this._dnsFailure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFailure = this._dnsFailure?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingSimpleAlert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arpFailure.internalValue = undefined;
      this._dhcpFailure.internalValue = undefined;
      this._dnsFailure.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arpFailure.internalValue = value.arpFailure;
      this._dhcpFailure.internalValue = value.dhcpFailure;
      this._dnsFailure.internalValue = value.dnsFailure;
    }
  }

  // arp_failure - computed: false, optional: true, required: false
  private _arpFailure = new SiteSettingSimpleAlertArpFailureOutputReference(this, "arp_failure");
  public get arpFailure() {
    return this._arpFailure;
  }
  public putArpFailure(value: SiteSettingSimpleAlertArpFailure) {
    this._arpFailure.internalValue = value;
  }
  public resetArpFailure() {
    this._arpFailure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpFailureInput() {
    return this._arpFailure.internalValue;
  }

  // dhcp_failure - computed: false, optional: true, required: false
  private _dhcpFailure = new SiteSettingSimpleAlertDhcpFailureOutputReference(this, "dhcp_failure");
  public get dhcpFailure() {
    return this._dhcpFailure;
  }
  public putDhcpFailure(value: SiteSettingSimpleAlertDhcpFailure) {
    this._dhcpFailure.internalValue = value;
  }
  public resetDhcpFailure() {
    this._dhcpFailure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpFailureInput() {
    return this._dhcpFailure.internalValue;
  }

  // dns_failure - computed: false, optional: true, required: false
  private _dnsFailure = new SiteSettingSimpleAlertDnsFailureOutputReference(this, "dns_failure");
  public get dnsFailure() {
    return this._dnsFailure;
  }
  public putDnsFailure(value: SiteSettingSimpleAlertDnsFailure) {
    this._dnsFailure.internalValue = value;
  }
  public resetDnsFailure() {
    this._dnsFailure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFailureInput() {
    return this._dnsFailure.internalValue;
  }
}
export interface SiteSettingSkyatp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#enabled SiteSetting#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Whether to send IP-MAC mapping to SkyATP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#send_ip_mac_mapping SiteSetting#send_ip_mac_mapping}
  */
  readonly sendIpMacMapping?: boolean | cdktf.IResolvable;
}

export function siteSettingSkyatpToTerraform(struct?: SiteSettingSkyatp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    send_ip_mac_mapping: cdktf.booleanToTerraform(struct!.sendIpMacMapping),
  }
}


export function siteSettingSkyatpToHclTerraform(struct?: SiteSettingSkyatp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_ip_mac_mapping: {
      value: cdktf.booleanToHclTerraform(struct!.sendIpMacMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingSkyatpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteSettingSkyatp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._sendIpMacMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendIpMacMapping = this._sendIpMacMapping;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingSkyatp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._sendIpMacMapping = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._sendIpMacMapping = value.sendIpMacMapping;
    }
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

  // send_ip_mac_mapping - computed: true, optional: true, required: false
  private _sendIpMacMapping?: boolean | cdktf.IResolvable; 
  public get sendIpMacMapping() {
    return this.getBooleanAttribute('send_ip_mac_mapping');
  }
  public set sendIpMacMapping(value: boolean | cdktf.IResolvable) {
    this._sendIpMacMapping = value;
  }
  public resetSendIpMacMapping() {
    this._sendIpMacMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendIpMacMappingInput() {
    return this._sendIpMacMapping;
  }
}
export interface SiteSettingSleThresholds {
  /**
  * Capacity, in %
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#capacity SiteSetting#capacity}
  */
  readonly capacity?: number;
  /**
  * Coverage, in dBm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#coverage SiteSetting#coverage}
  */
  readonly coverage?: number;
  /**
  * Throughput, in Mbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#throughput SiteSetting#throughput}
  */
  readonly throughput?: number;
  /**
  * Time to connect, in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#timetoconnect SiteSetting#timetoconnect}
  */
  readonly timetoconnect?: number;
}

export function siteSettingSleThresholdsToTerraform(struct?: SiteSettingSleThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.numberToTerraform(struct!.capacity),
    coverage: cdktf.numberToTerraform(struct!.coverage),
    throughput: cdktf.numberToTerraform(struct!.throughput),
    timetoconnect: cdktf.numberToTerraform(struct!.timetoconnect),
  }
}


export function siteSettingSleThresholdsToHclTerraform(struct?: SiteSettingSleThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity: {
      value: cdktf.numberToHclTerraform(struct!.capacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    coverage: {
      value: cdktf.numberToHclTerraform(struct!.coverage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    throughput: {
      value: cdktf.numberToHclTerraform(struct!.throughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timetoconnect: {
      value: cdktf.numberToHclTerraform(struct!.timetoconnect),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingSleThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteSettingSleThresholds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._coverage !== undefined) {
      hasAnyValues = true;
      internalValueResult.coverage = this._coverage;
    }
    if (this._throughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughput = this._throughput;
    }
    if (this._timetoconnect !== undefined) {
      hasAnyValues = true;
      internalValueResult.timetoconnect = this._timetoconnect;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingSleThresholds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacity = undefined;
      this._coverage = undefined;
      this._throughput = undefined;
      this._timetoconnect = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacity = value.capacity;
      this._coverage = value.coverage;
      this._throughput = value.throughput;
      this._timetoconnect = value.timetoconnect;
    }
  }

  // capacity - computed: true, optional: true, required: false
  private _capacity?: number; 
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // coverage - computed: true, optional: true, required: false
  private _coverage?: number; 
  public get coverage() {
    return this.getNumberAttribute('coverage');
  }
  public set coverage(value: number) {
    this._coverage = value;
  }
  public resetCoverage() {
    this._coverage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coverageInput() {
    return this._coverage;
  }

  // throughput - computed: true, optional: true, required: false
  private _throughput?: number; 
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }
  public set throughput(value: number) {
    this._throughput = value;
  }
  public resetThroughput() {
    this._throughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInput() {
    return this._throughput;
  }

  // timetoconnect - computed: true, optional: true, required: false
  private _timetoconnect?: number; 
  public get timetoconnect() {
    return this.getNumberAttribute('timetoconnect');
  }
  public set timetoconnect(value: number) {
    this._timetoconnect = value;
  }
  public resetTimetoconnect() {
    this._timetoconnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timetoconnectInput() {
    return this._timetoconnect;
  }
}
export interface SiteSettingSrxApp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#enabled SiteSetting#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function siteSettingSrxAppToTerraform(struct?: SiteSettingSrxApp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function siteSettingSrxAppToHclTerraform(struct?: SiteSettingSrxApp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingSrxAppOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteSettingSrxApp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingSrxApp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
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
}
export interface SiteSettingSsrAutoUpgrade {
  /**
  * upgrade channel to follow. enum: `alpha`, `beta`, `stable`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#channel SiteSetting#channel}
  */
  readonly channel?: string;
  /**
  * Property key is the SSR model (e.g. "SSR130").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#custom_versions SiteSetting#custom_versions}
  */
  readonly customVersions?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#enabled SiteSetting#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function siteSettingSsrAutoUpgradeToTerraform(struct?: SiteSettingSsrAutoUpgrade | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel: cdktf.stringToTerraform(struct!.channel),
    custom_versions: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customVersions),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function siteSettingSsrAutoUpgradeToHclTerraform(struct?: SiteSettingSsrAutoUpgrade | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel: {
      value: cdktf.stringToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_versions: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customVersions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingSsrAutoUpgradeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteSettingSsrAutoUpgrade | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._customVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.customVersions = this._customVersions;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingSsrAutoUpgrade | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channel = undefined;
      this._customVersions = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channel = value.channel;
      this._customVersions = value.customVersions;
      this._enabled = value.enabled;
    }
  }

  // channel - computed: false, optional: true, required: false
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // custom_versions - computed: false, optional: true, required: false
  private _customVersions?: { [key: string]: string }; 
  public get customVersions() {
    return this.getStringMapAttribute('custom_versions');
  }
  public set customVersions(value: { [key: string]: string }) {
    this._customVersions = value;
  }
  public resetCustomVersions() {
    this._customVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customVersionsInput() {
    return this._customVersions;
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
}
export interface SiteSettingSsrProxy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#url SiteSetting#url}
  */
  readonly url?: string;
}

export function siteSettingSsrProxyToTerraform(struct?: SiteSettingSsrProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function siteSettingSsrProxyToHclTerraform(struct?: SiteSettingSsrProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingSsrProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteSettingSsrProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingSsrProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface SiteSettingSsr {
  /**
  * auto_upgrade device first time it is onboarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#auto_upgrade SiteSetting#auto_upgrade}
  */
  readonly autoUpgrade?: SiteSettingSsrAutoUpgrade;
  /**
  * List of Conductor IP Addresses or Hosts to be used by the SSR Devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#conductor_hosts SiteSetting#conductor_hosts}
  */
  readonly conductorHosts?: string[];
  /**
  * Token to be used by the SSR Devices to connect to the Conductor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#conductor_token SiteSetting#conductor_token}
  */
  readonly conductorToken?: string;
  /**
  * Disable stats collection on SSR devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#disable_stats SiteSetting#disable_stats}
  */
  readonly disableStats?: boolean | cdktf.IResolvable;
  /**
  * Proxy Configuration to talk to Mist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#proxy SiteSetting#proxy}
  */
  readonly proxy?: SiteSettingSsrProxy;
}

export function siteSettingSsrToTerraform(struct?: SiteSettingSsr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_upgrade: siteSettingSsrAutoUpgradeToTerraform(struct!.autoUpgrade),
    conductor_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.conductorHosts),
    conductor_token: cdktf.stringToTerraform(struct!.conductorToken),
    disable_stats: cdktf.booleanToTerraform(struct!.disableStats),
    proxy: siteSettingSsrProxyToTerraform(struct!.proxy),
  }
}


export function siteSettingSsrToHclTerraform(struct?: SiteSettingSsr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_upgrade: {
      value: siteSettingSsrAutoUpgradeToHclTerraform(struct!.autoUpgrade),
      isBlock: true,
      type: "struct",
      storageClassType: "SiteSettingSsrAutoUpgrade",
    },
    conductor_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.conductorHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    conductor_token: {
      value: cdktf.stringToHclTerraform(struct!.conductorToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_stats: {
      value: cdktf.booleanToHclTerraform(struct!.disableStats),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proxy: {
      value: siteSettingSsrProxyToHclTerraform(struct!.proxy),
      isBlock: true,
      type: "struct",
      storageClassType: "SiteSettingSsrProxy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingSsrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteSettingSsr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoUpgrade?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoUpgrade = this._autoUpgrade?.internalValue;
    }
    if (this._conductorHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.conductorHosts = this._conductorHosts;
    }
    if (this._conductorToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.conductorToken = this._conductorToken;
    }
    if (this._disableStats !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableStats = this._disableStats;
    }
    if (this._proxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingSsr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoUpgrade.internalValue = undefined;
      this._conductorHosts = undefined;
      this._conductorToken = undefined;
      this._disableStats = undefined;
      this._proxy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoUpgrade.internalValue = value.autoUpgrade;
      this._conductorHosts = value.conductorHosts;
      this._conductorToken = value.conductorToken;
      this._disableStats = value.disableStats;
      this._proxy.internalValue = value.proxy;
    }
  }

  // auto_upgrade - computed: false, optional: true, required: false
  private _autoUpgrade = new SiteSettingSsrAutoUpgradeOutputReference(this, "auto_upgrade");
  public get autoUpgrade() {
    return this._autoUpgrade;
  }
  public putAutoUpgrade(value: SiteSettingSsrAutoUpgrade) {
    this._autoUpgrade.internalValue = value;
  }
  public resetAutoUpgrade() {
    this._autoUpgrade.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpgradeInput() {
    return this._autoUpgrade.internalValue;
  }

  // conductor_hosts - computed: false, optional: true, required: false
  private _conductorHosts?: string[]; 
  public get conductorHosts() {
    return this.getListAttribute('conductor_hosts');
  }
  public set conductorHosts(value: string[]) {
    this._conductorHosts = value;
  }
  public resetConductorHosts() {
    this._conductorHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conductorHostsInput() {
    return this._conductorHosts;
  }

  // conductor_token - computed: false, optional: true, required: false
  private _conductorToken?: string; 
  public get conductorToken() {
    return this.getStringAttribute('conductor_token');
  }
  public set conductorToken(value: string) {
    this._conductorToken = value;
  }
  public resetConductorToken() {
    this._conductorToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conductorTokenInput() {
    return this._conductorToken;
  }

  // disable_stats - computed: false, optional: true, required: false
  private _disableStats?: boolean | cdktf.IResolvable; 
  public get disableStats() {
    return this.getBooleanAttribute('disable_stats');
  }
  public set disableStats(value: boolean | cdktf.IResolvable) {
    this._disableStats = value;
  }
  public resetDisableStats() {
    this._disableStats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableStatsInput() {
    return this._disableStats;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy = new SiteSettingSsrProxyOutputReference(this, "proxy");
  public get proxy() {
    return this._proxy;
  }
  public putProxy(value: SiteSettingSsrProxy) {
    this._proxy.internalValue = value;
  }
  public resetProxy() {
    this._proxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy.internalValue;
  }
}
export interface SiteSettingSyntheticTestCustomProbes {
  /**
  * enum: `auto`, `high`, `low`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#aggressiveness SiteSetting#aggressiveness}
  */
  readonly aggressiveness?: string;
  /**
  * If `type`==`icmp` or `type`==`tcp`, Host to be used for the custom probe
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#host SiteSetting#host}
  */
  readonly host?: string;
  /**
  * If `type`==`tcp`, Port to be used for the custom probe
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#port SiteSetting#port}
  */
  readonly port?: number;
  /**
  * In milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#threshold SiteSetting#threshold}
  */
  readonly threshold?: number;
  /**
  * enum: `curl`, `icmp`, `tcp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#type SiteSetting#type}
  */
  readonly type?: string;
  /**
  * If `type`==`curl`, URL to be used for the custom probe, can be url or IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#url SiteSetting#url}
  */
  readonly url?: string;
}

export function siteSettingSyntheticTestCustomProbesToTerraform(struct?: SiteSettingSyntheticTestCustomProbes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggressiveness: cdktf.stringToTerraform(struct!.aggressiveness),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    type: cdktf.stringToTerraform(struct!.type),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function siteSettingSyntheticTestCustomProbesToHclTerraform(struct?: SiteSettingSyntheticTestCustomProbes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggressiveness: {
      value: cdktf.stringToHclTerraform(struct!.aggressiveness),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingSyntheticTestCustomProbesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SiteSettingSyntheticTestCustomProbes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggressiveness !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggressiveness = this._aggressiveness;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingSyntheticTestCustomProbes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggressiveness = undefined;
      this._host = undefined;
      this._port = undefined;
      this._threshold = undefined;
      this._type = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggressiveness = value.aggressiveness;
      this._host = value.host;
      this._port = value.port;
      this._threshold = value.threshold;
      this._type = value.type;
      this._url = value.url;
    }
  }

  // aggressiveness - computed: true, optional: true, required: false
  private _aggressiveness?: string; 
  public get aggressiveness() {
    return this.getStringAttribute('aggressiveness');
  }
  public set aggressiveness(value: string) {
    this._aggressiveness = value;
  }
  public resetAggressiveness() {
    this._aggressiveness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggressivenessInput() {
    return this._aggressiveness;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // threshold - computed: true, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class SiteSettingSyntheticTestCustomProbesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SiteSettingSyntheticTestCustomProbes } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SiteSettingSyntheticTestCustomProbesOutputReference {
    return new SiteSettingSyntheticTestCustomProbesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SiteSettingSyntheticTestLanNetworks {
  /**
  * List of networks to be used for synthetic tests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#networks SiteSetting#networks}
  */
  readonly networks?: string[];
  /**
  * app name comes from `custom_probes` above or /const/synthetic_test_probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#probes SiteSetting#probes}
  */
  readonly probes?: string[];
}

export function siteSettingSyntheticTestLanNetworksToTerraform(struct?: SiteSettingSyntheticTestLanNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    networks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networks),
    probes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.probes),
  }
}


export function siteSettingSyntheticTestLanNetworksToHclTerraform(struct?: SiteSettingSyntheticTestLanNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    networks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    probes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.probes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingSyntheticTestLanNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteSettingSyntheticTestLanNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networks !== undefined) {
      hasAnyValues = true;
      internalValueResult.networks = this._networks;
    }
    if (this._probes !== undefined) {
      hasAnyValues = true;
      internalValueResult.probes = this._probes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingSyntheticTestLanNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networks = undefined;
      this._probes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networks = value.networks;
      this._probes = value.probes;
    }
  }

  // networks - computed: true, optional: true, required: false
  private _networks?: string[]; 
  public get networks() {
    return this.getListAttribute('networks');
  }
  public set networks(value: string[]) {
    this._networks = value;
  }
  public resetNetworks() {
    this._networks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks;
  }

  // probes - computed: true, optional: true, required: false
  private _probes?: string[]; 
  public get probes() {
    return this.getListAttribute('probes');
  }
  public set probes(value: string[]) {
    this._probes = value;
  }
  public resetProbes() {
    this._probes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probesInput() {
    return this._probes;
  }
}

export class SiteSettingSyntheticTestLanNetworksList extends cdktf.ComplexList {
  public internalValue? : SiteSettingSyntheticTestLanNetworks[] | cdktf.IResolvable

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
  public get(index: number): SiteSettingSyntheticTestLanNetworksOutputReference {
    return new SiteSettingSyntheticTestLanNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteSettingSyntheticTestVlans {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#custom_test_urls SiteSetting#custom_test_urls}
  */
  readonly customTestUrls?: string[];
  /**
  * For some vlans where we don't want this to run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#disabled SiteSetting#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * app name comes from `custom_probes` above or /const/synthetic_test_probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#probes SiteSetting#probes}
  */
  readonly probes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#vlan_ids SiteSetting#vlan_ids}
  */
  readonly vlanIds?: string[];
}

export function siteSettingSyntheticTestVlansToTerraform(struct?: SiteSettingSyntheticTestVlans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_test_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customTestUrls),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    probes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.probes),
    vlan_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vlanIds),
  }
}


export function siteSettingSyntheticTestVlansToHclTerraform(struct?: SiteSettingSyntheticTestVlans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_test_urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customTestUrls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    probes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.probes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vlan_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vlanIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingSyntheticTestVlansOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteSettingSyntheticTestVlans | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customTestUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTestUrls = this._customTestUrls;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._probes !== undefined) {
      hasAnyValues = true;
      internalValueResult.probes = this._probes;
    }
    if (this._vlanIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanIds = this._vlanIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingSyntheticTestVlans | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customTestUrls = undefined;
      this._disabled = undefined;
      this._probes = undefined;
      this._vlanIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customTestUrls = value.customTestUrls;
      this._disabled = value.disabled;
      this._probes = value.probes;
      this._vlanIds = value.vlanIds;
    }
  }

  // custom_test_urls - computed: true, optional: true, required: false
  private _customTestUrls?: string[]; 
  public get customTestUrls() {
    return this.getListAttribute('custom_test_urls');
  }
  public set customTestUrls(value: string[]) {
    this._customTestUrls = value;
  }
  public resetCustomTestUrls() {
    this._customTestUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTestUrlsInput() {
    return this._customTestUrls;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // probes - computed: true, optional: true, required: false
  private _probes?: string[]; 
  public get probes() {
    return this.getListAttribute('probes');
  }
  public set probes(value: string[]) {
    this._probes = value;
  }
  public resetProbes() {
    this._probes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probesInput() {
    return this._probes;
  }

  // vlan_ids - computed: true, optional: true, required: false
  private _vlanIds?: string[]; 
  public get vlanIds() {
    return this.getListAttribute('vlan_ids');
  }
  public set vlanIds(value: string[]) {
    this._vlanIds = value;
  }
  public resetVlanIds() {
    this._vlanIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdsInput() {
    return this._vlanIds;
  }
}

export class SiteSettingSyntheticTestVlansList extends cdktf.ComplexList {
  public internalValue? : SiteSettingSyntheticTestVlans[] | cdktf.IResolvable

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
  public get(index: number): SiteSettingSyntheticTestVlansOutputReference {
    return new SiteSettingSyntheticTestVlansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteSettingSyntheticTestWanSpeedtest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#enabled SiteSetting#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * `any` / HH:MM (24-hour format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#time_of_day SiteSetting#time_of_day}
  */
  readonly timeOfDay?: string;
}

export function siteSettingSyntheticTestWanSpeedtestToTerraform(struct?: SiteSettingSyntheticTestWanSpeedtest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    time_of_day: cdktf.stringToTerraform(struct!.timeOfDay),
  }
}


export function siteSettingSyntheticTestWanSpeedtestToHclTerraform(struct?: SiteSettingSyntheticTestWanSpeedtest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    time_of_day: {
      value: cdktf.stringToHclTerraform(struct!.timeOfDay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingSyntheticTestWanSpeedtestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteSettingSyntheticTestWanSpeedtest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._timeOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOfDay = this._timeOfDay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingSyntheticTestWanSpeedtest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._timeOfDay = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._timeOfDay = value.timeOfDay;
    }
  }

  // enabled - computed: true, optional: true, required: false
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

  // time_of_day - computed: true, optional: true, required: false
  private _timeOfDay?: string; 
  public get timeOfDay() {
    return this.getStringAttribute('time_of_day');
  }
  public set timeOfDay(value: string) {
    this._timeOfDay = value;
  }
  public resetTimeOfDay() {
    this._timeOfDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOfDayInput() {
    return this._timeOfDay;
  }
}
export interface SiteSettingSyntheticTest {
  /**
  * enum: `auto`, `high`, `low`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#aggressiveness SiteSetting#aggressiveness}
  */
  readonly aggressiveness?: string;
  /**
  * Custom probes to be used for synthetic tests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#custom_probes SiteSetting#custom_probes}
  */
  readonly customProbes?: { [key: string]: SiteSettingSyntheticTestCustomProbes } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#disabled SiteSetting#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * List of networks to be used for synthetic tests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#lan_networks SiteSetting#lan_networks}
  */
  readonly lanNetworks?: SiteSettingSyntheticTestLanNetworks[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#vlans SiteSetting#vlans}
  */
  readonly vlans?: SiteSettingSyntheticTestVlans[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#wan_speedtest SiteSetting#wan_speedtest}
  */
  readonly wanSpeedtest?: SiteSettingSyntheticTestWanSpeedtest;
}

export function siteSettingSyntheticTestToTerraform(struct?: SiteSettingSyntheticTest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggressiveness: cdktf.stringToTerraform(struct!.aggressiveness),
    custom_probes: cdktf.hashMapper(siteSettingSyntheticTestCustomProbesToTerraform)(struct!.customProbes),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    lan_networks: cdktf.listMapper(siteSettingSyntheticTestLanNetworksToTerraform, false)(struct!.lanNetworks),
    vlans: cdktf.listMapper(siteSettingSyntheticTestVlansToTerraform, false)(struct!.vlans),
    wan_speedtest: siteSettingSyntheticTestWanSpeedtestToTerraform(struct!.wanSpeedtest),
  }
}


export function siteSettingSyntheticTestToHclTerraform(struct?: SiteSettingSyntheticTest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggressiveness: {
      value: cdktf.stringToHclTerraform(struct!.aggressiveness),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_probes: {
      value: cdktf.hashMapperHcl(siteSettingSyntheticTestCustomProbesToHclTerraform)(struct!.customProbes),
      isBlock: true,
      type: "map",
      storageClassType: "SiteSettingSyntheticTestCustomProbesMap",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lan_networks: {
      value: cdktf.listMapperHcl(siteSettingSyntheticTestLanNetworksToHclTerraform, false)(struct!.lanNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "SiteSettingSyntheticTestLanNetworksList",
    },
    vlans: {
      value: cdktf.listMapperHcl(siteSettingSyntheticTestVlansToHclTerraform, false)(struct!.vlans),
      isBlock: true,
      type: "list",
      storageClassType: "SiteSettingSyntheticTestVlansList",
    },
    wan_speedtest: {
      value: siteSettingSyntheticTestWanSpeedtestToHclTerraform(struct!.wanSpeedtest),
      isBlock: true,
      type: "struct",
      storageClassType: "SiteSettingSyntheticTestWanSpeedtest",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingSyntheticTestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteSettingSyntheticTest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggressiveness !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggressiveness = this._aggressiveness;
    }
    if (this._customProbes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProbes = this._customProbes?.internalValue;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._lanNetworks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lanNetworks = this._lanNetworks?.internalValue;
    }
    if (this._vlans?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlans = this._vlans?.internalValue;
    }
    if (this._wanSpeedtest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wanSpeedtest = this._wanSpeedtest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingSyntheticTest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggressiveness = undefined;
      this._customProbes.internalValue = undefined;
      this._disabled = undefined;
      this._lanNetworks.internalValue = undefined;
      this._vlans.internalValue = undefined;
      this._wanSpeedtest.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggressiveness = value.aggressiveness;
      this._customProbes.internalValue = value.customProbes;
      this._disabled = value.disabled;
      this._lanNetworks.internalValue = value.lanNetworks;
      this._vlans.internalValue = value.vlans;
      this._wanSpeedtest.internalValue = value.wanSpeedtest;
    }
  }

  // aggressiveness - computed: true, optional: true, required: false
  private _aggressiveness?: string; 
  public get aggressiveness() {
    return this.getStringAttribute('aggressiveness');
  }
  public set aggressiveness(value: string) {
    this._aggressiveness = value;
  }
  public resetAggressiveness() {
    this._aggressiveness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggressivenessInput() {
    return this._aggressiveness;
  }

  // custom_probes - computed: true, optional: true, required: false
  private _customProbes = new SiteSettingSyntheticTestCustomProbesMap(this, "custom_probes");
  public get customProbes() {
    return this._customProbes;
  }
  public putCustomProbes(value: { [key: string]: SiteSettingSyntheticTestCustomProbes } | cdktf.IResolvable) {
    this._customProbes.internalValue = value;
  }
  public resetCustomProbes() {
    this._customProbes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProbesInput() {
    return this._customProbes.internalValue;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // lan_networks - computed: true, optional: true, required: false
  private _lanNetworks = new SiteSettingSyntheticTestLanNetworksList(this, "lan_networks", false);
  public get lanNetworks() {
    return this._lanNetworks;
  }
  public putLanNetworks(value: SiteSettingSyntheticTestLanNetworks[] | cdktf.IResolvable) {
    this._lanNetworks.internalValue = value;
  }
  public resetLanNetworks() {
    this._lanNetworks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lanNetworksInput() {
    return this._lanNetworks.internalValue;
  }

  // vlans - computed: true, optional: true, required: false
  private _vlans = new SiteSettingSyntheticTestVlansList(this, "vlans", false);
  public get vlans() {
    return this._vlans;
  }
  public putVlans(value: SiteSettingSyntheticTestVlans[] | cdktf.IResolvable) {
    this._vlans.internalValue = value;
  }
  public resetVlans() {
    this._vlans.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlansInput() {
    return this._vlans.internalValue;
  }

  // wan_speedtest - computed: true, optional: true, required: false
  private _wanSpeedtest = new SiteSettingSyntheticTestWanSpeedtestOutputReference(this, "wan_speedtest");
  public get wanSpeedtest() {
    return this._wanSpeedtest;
  }
  public putWanSpeedtest(value: SiteSettingSyntheticTestWanSpeedtest) {
    this._wanSpeedtest.internalValue = value;
  }
  public resetWanSpeedtest() {
    this._wanSpeedtest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanSpeedtestInput() {
    return this._wanSpeedtest.internalValue;
  }
}
export interface SiteSettingUplinkPortConfig {
  /**
  * Whether to do 802.1x against uplink switch. When enabled, AP cert will be used to do EAP-TLS and the Org's CA Cert has to be provisioned at the switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#dot1x SiteSetting#dot1x}
  */
  readonly dot1X?: boolean | cdktf.IResolvable;
  /**
  * By default, WLANs are disabled when uplink is down. In some scenario, like SiteSurvey, one would want the AP to keep sending beacons.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#keep_wlans_up_if_down SiteSetting#keep_wlans_up_if_down}
  */
  readonly keepWlansUpIfDown?: boolean | cdktf.IResolvable;
}

export function siteSettingUplinkPortConfigToTerraform(struct?: SiteSettingUplinkPortConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dot1x: cdktf.booleanToTerraform(struct!.dot1X),
    keep_wlans_up_if_down: cdktf.booleanToTerraform(struct!.keepWlansUpIfDown),
  }
}


export function siteSettingUplinkPortConfigToHclTerraform(struct?: SiteSettingUplinkPortConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dot1x: {
      value: cdktf.booleanToHclTerraform(struct!.dot1X),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keep_wlans_up_if_down: {
      value: cdktf.booleanToHclTerraform(struct!.keepWlansUpIfDown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingUplinkPortConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteSettingUplinkPortConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dot1X !== undefined) {
      hasAnyValues = true;
      internalValueResult.dot1X = this._dot1X;
    }
    if (this._keepWlansUpIfDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepWlansUpIfDown = this._keepWlansUpIfDown;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingUplinkPortConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dot1X = undefined;
      this._keepWlansUpIfDown = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dot1X = value.dot1X;
      this._keepWlansUpIfDown = value.keepWlansUpIfDown;
    }
  }

  // dot1x - computed: true, optional: true, required: false
  private _dot1X?: boolean | cdktf.IResolvable; 
  public get dot1X() {
    return this.getBooleanAttribute('dot1x');
  }
  public set dot1X(value: boolean | cdktf.IResolvable) {
    this._dot1X = value;
  }
  public resetDot1X() {
    this._dot1X = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XInput() {
    return this._dot1X;
  }

  // keep_wlans_up_if_down - computed: true, optional: true, required: false
  private _keepWlansUpIfDown?: boolean | cdktf.IResolvable; 
  public get keepWlansUpIfDown() {
    return this.getBooleanAttribute('keep_wlans_up_if_down');
  }
  public set keepWlansUpIfDown(value: boolean | cdktf.IResolvable) {
    this._keepWlansUpIfDown = value;
  }
  public resetKeepWlansUpIfDown() {
    this._keepWlansUpIfDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepWlansUpIfDownInput() {
    return this._keepWlansUpIfDown;
  }
}
export interface SiteSettingVna {
  /**
  * Enable Virtual Network Assistant (using SUB-VNA license). This applied to AP / Switch / Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#enabled SiteSetting#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function siteSettingVnaToTerraform(struct?: SiteSettingVna | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function siteSettingVnaToHclTerraform(struct?: SiteSettingVna | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingVnaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteSettingVna | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingVna | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
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
}
export interface SiteSettingVsInstance {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#networks SiteSetting#networks}
  */
  readonly networks?: string[];
}

export function siteSettingVsInstanceToTerraform(struct?: SiteSettingVsInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    networks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networks),
  }
}


export function siteSettingVsInstanceToHclTerraform(struct?: SiteSettingVsInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    networks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingVsInstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SiteSettingVsInstance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networks !== undefined) {
      hasAnyValues = true;
      internalValueResult.networks = this._networks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingVsInstance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networks = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networks = value.networks;
    }
  }

  // networks - computed: true, optional: true, required: false
  private _networks?: string[]; 
  public get networks() {
    return this.getListAttribute('networks');
  }
  public set networks(value: string[]) {
    this._networks = value;
  }
  public resetNetworks() {
    this._networks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks;
  }
}

export class SiteSettingVsInstanceMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SiteSettingVsInstance } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SiteSettingVsInstanceOutputReference {
    return new SiteSettingVsInstanceOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SiteSettingWanVna {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#enabled SiteSetting#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function siteSettingWanVnaToTerraform(struct?: SiteSettingWanVna | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function siteSettingWanVnaToHclTerraform(struct?: SiteSettingWanVna | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingWanVnaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteSettingWanVna | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingWanVna | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
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
}
export interface SiteSettingWidsRepeatedAuthFailures {
  /**
  * Window where a trigger will be detected and action to be taken (in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#duration SiteSetting#duration}
  */
  readonly duration?: number;
  /**
  * Count of events to trigger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#threshold SiteSetting#threshold}
  */
  readonly threshold?: number;
}

export function siteSettingWidsRepeatedAuthFailuresToTerraform(struct?: SiteSettingWidsRepeatedAuthFailures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function siteSettingWidsRepeatedAuthFailuresToHclTerraform(struct?: SiteSettingWidsRepeatedAuthFailures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingWidsRepeatedAuthFailuresOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteSettingWidsRepeatedAuthFailures | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingWidsRepeatedAuthFailures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._threshold = value.threshold;
    }
  }

  // duration - computed: true, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // threshold - computed: true, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface SiteSettingWids {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#repeated_auth_failures SiteSetting#repeated_auth_failures}
  */
  readonly repeatedAuthFailures?: SiteSettingWidsRepeatedAuthFailures;
}

export function siteSettingWidsToTerraform(struct?: SiteSettingWids | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repeated_auth_failures: siteSettingWidsRepeatedAuthFailuresToTerraform(struct!.repeatedAuthFailures),
  }
}


export function siteSettingWidsToHclTerraform(struct?: SiteSettingWids | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repeated_auth_failures: {
      value: siteSettingWidsRepeatedAuthFailuresToHclTerraform(struct!.repeatedAuthFailures),
      isBlock: true,
      type: "struct",
      storageClassType: "SiteSettingWidsRepeatedAuthFailures",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingWidsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteSettingWids | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repeatedAuthFailures?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatedAuthFailures = this._repeatedAuthFailures?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingWids | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._repeatedAuthFailures.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._repeatedAuthFailures.internalValue = value.repeatedAuthFailures;
    }
  }

  // repeated_auth_failures - computed: true, optional: true, required: false
  private _repeatedAuthFailures = new SiteSettingWidsRepeatedAuthFailuresOutputReference(this, "repeated_auth_failures");
  public get repeatedAuthFailures() {
    return this._repeatedAuthFailures;
  }
  public putRepeatedAuthFailures(value: SiteSettingWidsRepeatedAuthFailures) {
    this._repeatedAuthFailures.internalValue = value;
  }
  public resetRepeatedAuthFailures() {
    this._repeatedAuthFailures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatedAuthFailuresInput() {
    return this._repeatedAuthFailures.internalValue;
  }
}
export interface SiteSettingWifi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#cisco_enabled SiteSetting#cisco_enabled}
  */
  readonly ciscoEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether to disable 11k
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#disable_11k SiteSetting#disable_11k}
  */
  readonly disable11K?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#disable_radios_when_power_constrained SiteSetting#disable_radios_when_power_constrained}
  */
  readonly disableRadiosWhenPowerConstrained?: boolean | cdktf.IResolvable;
  /**
  * When proxy_arp is enabled, check for arp spoofing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#enable_arp_spoof_check SiteSetting#enable_arp_spoof_check}
  */
  readonly enableArpSpoofCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#enable_shared_radio_scanning SiteSetting#enable_shared_radio_scanning}
  */
  readonly enableSharedRadioScanning?: boolean | cdktf.IResolvable;
  /**
  * Enable Wi-Fi feature (using SUB-MAN license)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#enabled SiteSetting#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Whether to locate connected clients
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#locate_connected SiteSetting#locate_connected}
  */
  readonly locateConnected?: boolean | cdktf.IResolvable;
  /**
  * Whether to locate unconnected clients
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#locate_unconnected SiteSetting#locate_unconnected}
  */
  readonly locateUnconnected?: boolean | cdktf.IResolvable;
  /**
  * Whether to allow Mesh to use DFS channels. For DFS channels, Remote Mesh AP would have to do CAC when scanning for new Base AP, which is slow and will disrupt the connection. If roaming is desired, keep it disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#mesh_allow_dfs SiteSetting#mesh_allow_dfs}
  */
  readonly meshAllowDfs?: boolean | cdktf.IResolvable;
  /**
  * Used to enable/disable CRM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#mesh_enable_crm SiteSetting#mesh_enable_crm}
  */
  readonly meshEnableCrm?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable Mesh feature for the site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#mesh_enabled SiteSetting#mesh_enabled}
  */
  readonly meshEnabled?: boolean | cdktf.IResolvable;
  /**
  * Optional passphrase of mesh networking, default is generated randomly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#mesh_psk SiteSetting#mesh_psk}
  */
  readonly meshPsk?: string;
  /**
  * Optional ssid of mesh networking, default is based on site_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#mesh_ssid SiteSetting#mesh_ssid}
  */
  readonly meshSsid?: string;
  /**
  * enum: `default`, `disabled`, `enabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#proxy_arp SiteSetting#proxy_arp}
  */
  readonly proxyArp?: string;
}

export function siteSettingWifiToTerraform(struct?: SiteSettingWifi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cisco_enabled: cdktf.booleanToTerraform(struct!.ciscoEnabled),
    disable_11k: cdktf.booleanToTerraform(struct!.disable11K),
    disable_radios_when_power_constrained: cdktf.booleanToTerraform(struct!.disableRadiosWhenPowerConstrained),
    enable_arp_spoof_check: cdktf.booleanToTerraform(struct!.enableArpSpoofCheck),
    enable_shared_radio_scanning: cdktf.booleanToTerraform(struct!.enableSharedRadioScanning),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    locate_connected: cdktf.booleanToTerraform(struct!.locateConnected),
    locate_unconnected: cdktf.booleanToTerraform(struct!.locateUnconnected),
    mesh_allow_dfs: cdktf.booleanToTerraform(struct!.meshAllowDfs),
    mesh_enable_crm: cdktf.booleanToTerraform(struct!.meshEnableCrm),
    mesh_enabled: cdktf.booleanToTerraform(struct!.meshEnabled),
    mesh_psk: cdktf.stringToTerraform(struct!.meshPsk),
    mesh_ssid: cdktf.stringToTerraform(struct!.meshSsid),
    proxy_arp: cdktf.stringToTerraform(struct!.proxyArp),
  }
}


export function siteSettingWifiToHclTerraform(struct?: SiteSettingWifi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cisco_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ciscoEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_11k: {
      value: cdktf.booleanToHclTerraform(struct!.disable11K),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_radios_when_power_constrained: {
      value: cdktf.booleanToHclTerraform(struct!.disableRadiosWhenPowerConstrained),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_arp_spoof_check: {
      value: cdktf.booleanToHclTerraform(struct!.enableArpSpoofCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_shared_radio_scanning: {
      value: cdktf.booleanToHclTerraform(struct!.enableSharedRadioScanning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    locate_connected: {
      value: cdktf.booleanToHclTerraform(struct!.locateConnected),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    locate_unconnected: {
      value: cdktf.booleanToHclTerraform(struct!.locateUnconnected),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mesh_allow_dfs: {
      value: cdktf.booleanToHclTerraform(struct!.meshAllowDfs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mesh_enable_crm: {
      value: cdktf.booleanToHclTerraform(struct!.meshEnableCrm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mesh_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.meshEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mesh_psk: {
      value: cdktf.stringToHclTerraform(struct!.meshPsk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mesh_ssid: {
      value: cdktf.stringToHclTerraform(struct!.meshSsid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_arp: {
      value: cdktf.stringToHclTerraform(struct!.proxyArp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingWifiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteSettingWifi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ciscoEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ciscoEnabled = this._ciscoEnabled;
    }
    if (this._disable11K !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable11K = this._disable11K;
    }
    if (this._disableRadiosWhenPowerConstrained !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableRadiosWhenPowerConstrained = this._disableRadiosWhenPowerConstrained;
    }
    if (this._enableArpSpoofCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableArpSpoofCheck = this._enableArpSpoofCheck;
    }
    if (this._enableSharedRadioScanning !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSharedRadioScanning = this._enableSharedRadioScanning;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._locateConnected !== undefined) {
      hasAnyValues = true;
      internalValueResult.locateConnected = this._locateConnected;
    }
    if (this._locateUnconnected !== undefined) {
      hasAnyValues = true;
      internalValueResult.locateUnconnected = this._locateUnconnected;
    }
    if (this._meshAllowDfs !== undefined) {
      hasAnyValues = true;
      internalValueResult.meshAllowDfs = this._meshAllowDfs;
    }
    if (this._meshEnableCrm !== undefined) {
      hasAnyValues = true;
      internalValueResult.meshEnableCrm = this._meshEnableCrm;
    }
    if (this._meshEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.meshEnabled = this._meshEnabled;
    }
    if (this._meshPsk !== undefined) {
      hasAnyValues = true;
      internalValueResult.meshPsk = this._meshPsk;
    }
    if (this._meshSsid !== undefined) {
      hasAnyValues = true;
      internalValueResult.meshSsid = this._meshSsid;
    }
    if (this._proxyArp !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyArp = this._proxyArp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingWifi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ciscoEnabled = undefined;
      this._disable11K = undefined;
      this._disableRadiosWhenPowerConstrained = undefined;
      this._enableArpSpoofCheck = undefined;
      this._enableSharedRadioScanning = undefined;
      this._enabled = undefined;
      this._locateConnected = undefined;
      this._locateUnconnected = undefined;
      this._meshAllowDfs = undefined;
      this._meshEnableCrm = undefined;
      this._meshEnabled = undefined;
      this._meshPsk = undefined;
      this._meshSsid = undefined;
      this._proxyArp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ciscoEnabled = value.ciscoEnabled;
      this._disable11K = value.disable11K;
      this._disableRadiosWhenPowerConstrained = value.disableRadiosWhenPowerConstrained;
      this._enableArpSpoofCheck = value.enableArpSpoofCheck;
      this._enableSharedRadioScanning = value.enableSharedRadioScanning;
      this._enabled = value.enabled;
      this._locateConnected = value.locateConnected;
      this._locateUnconnected = value.locateUnconnected;
      this._meshAllowDfs = value.meshAllowDfs;
      this._meshEnableCrm = value.meshEnableCrm;
      this._meshEnabled = value.meshEnabled;
      this._meshPsk = value.meshPsk;
      this._meshSsid = value.meshSsid;
      this._proxyArp = value.proxyArp;
    }
  }

  // cisco_enabled - computed: true, optional: true, required: false
  private _ciscoEnabled?: boolean | cdktf.IResolvable; 
  public get ciscoEnabled() {
    return this.getBooleanAttribute('cisco_enabled');
  }
  public set ciscoEnabled(value: boolean | cdktf.IResolvable) {
    this._ciscoEnabled = value;
  }
  public resetCiscoEnabled() {
    this._ciscoEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciscoEnabledInput() {
    return this._ciscoEnabled;
  }

  // disable_11k - computed: true, optional: true, required: false
  private _disable11K?: boolean | cdktf.IResolvable; 
  public get disable11K() {
    return this.getBooleanAttribute('disable_11k');
  }
  public set disable11K(value: boolean | cdktf.IResolvable) {
    this._disable11K = value;
  }
  public resetDisable11K() {
    this._disable11K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disable11KInput() {
    return this._disable11K;
  }

  // disable_radios_when_power_constrained - computed: true, optional: true, required: false
  private _disableRadiosWhenPowerConstrained?: boolean | cdktf.IResolvable; 
  public get disableRadiosWhenPowerConstrained() {
    return this.getBooleanAttribute('disable_radios_when_power_constrained');
  }
  public set disableRadiosWhenPowerConstrained(value: boolean | cdktf.IResolvable) {
    this._disableRadiosWhenPowerConstrained = value;
  }
  public resetDisableRadiosWhenPowerConstrained() {
    this._disableRadiosWhenPowerConstrained = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRadiosWhenPowerConstrainedInput() {
    return this._disableRadiosWhenPowerConstrained;
  }

  // enable_arp_spoof_check - computed: true, optional: true, required: false
  private _enableArpSpoofCheck?: boolean | cdktf.IResolvable; 
  public get enableArpSpoofCheck() {
    return this.getBooleanAttribute('enable_arp_spoof_check');
  }
  public set enableArpSpoofCheck(value: boolean | cdktf.IResolvable) {
    this._enableArpSpoofCheck = value;
  }
  public resetEnableArpSpoofCheck() {
    this._enableArpSpoofCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableArpSpoofCheckInput() {
    return this._enableArpSpoofCheck;
  }

  // enable_shared_radio_scanning - computed: true, optional: true, required: false
  private _enableSharedRadioScanning?: boolean | cdktf.IResolvable; 
  public get enableSharedRadioScanning() {
    return this.getBooleanAttribute('enable_shared_radio_scanning');
  }
  public set enableSharedRadioScanning(value: boolean | cdktf.IResolvable) {
    this._enableSharedRadioScanning = value;
  }
  public resetEnableSharedRadioScanning() {
    this._enableSharedRadioScanning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSharedRadioScanningInput() {
    return this._enableSharedRadioScanning;
  }

  // enabled - computed: true, optional: true, required: false
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

  // locate_connected - computed: true, optional: true, required: false
  private _locateConnected?: boolean | cdktf.IResolvable; 
  public get locateConnected() {
    return this.getBooleanAttribute('locate_connected');
  }
  public set locateConnected(value: boolean | cdktf.IResolvable) {
    this._locateConnected = value;
  }
  public resetLocateConnected() {
    this._locateConnected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locateConnectedInput() {
    return this._locateConnected;
  }

  // locate_unconnected - computed: true, optional: true, required: false
  private _locateUnconnected?: boolean | cdktf.IResolvable; 
  public get locateUnconnected() {
    return this.getBooleanAttribute('locate_unconnected');
  }
  public set locateUnconnected(value: boolean | cdktf.IResolvable) {
    this._locateUnconnected = value;
  }
  public resetLocateUnconnected() {
    this._locateUnconnected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locateUnconnectedInput() {
    return this._locateUnconnected;
  }

  // mesh_allow_dfs - computed: true, optional: true, required: false
  private _meshAllowDfs?: boolean | cdktf.IResolvable; 
  public get meshAllowDfs() {
    return this.getBooleanAttribute('mesh_allow_dfs');
  }
  public set meshAllowDfs(value: boolean | cdktf.IResolvable) {
    this._meshAllowDfs = value;
  }
  public resetMeshAllowDfs() {
    this._meshAllowDfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshAllowDfsInput() {
    return this._meshAllowDfs;
  }

  // mesh_enable_crm - computed: true, optional: true, required: false
  private _meshEnableCrm?: boolean | cdktf.IResolvable; 
  public get meshEnableCrm() {
    return this.getBooleanAttribute('mesh_enable_crm');
  }
  public set meshEnableCrm(value: boolean | cdktf.IResolvable) {
    this._meshEnableCrm = value;
  }
  public resetMeshEnableCrm() {
    this._meshEnableCrm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshEnableCrmInput() {
    return this._meshEnableCrm;
  }

  // mesh_enabled - computed: true, optional: true, required: false
  private _meshEnabled?: boolean | cdktf.IResolvable; 
  public get meshEnabled() {
    return this.getBooleanAttribute('mesh_enabled');
  }
  public set meshEnabled(value: boolean | cdktf.IResolvable) {
    this._meshEnabled = value;
  }
  public resetMeshEnabled() {
    this._meshEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshEnabledInput() {
    return this._meshEnabled;
  }

  // mesh_psk - computed: true, optional: true, required: false
  private _meshPsk?: string; 
  public get meshPsk() {
    return this.getStringAttribute('mesh_psk');
  }
  public set meshPsk(value: string) {
    this._meshPsk = value;
  }
  public resetMeshPsk() {
    this._meshPsk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshPskInput() {
    return this._meshPsk;
  }

  // mesh_ssid - computed: true, optional: true, required: false
  private _meshSsid?: string; 
  public get meshSsid() {
    return this.getStringAttribute('mesh_ssid');
  }
  public set meshSsid(value: string) {
    this._meshSsid = value;
  }
  public resetMeshSsid() {
    this._meshSsid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshSsidInput() {
    return this._meshSsid;
  }

  // proxy_arp - computed: true, optional: true, required: false
  private _proxyArp?: string; 
  public get proxyArp() {
    return this.getStringAttribute('proxy_arp');
  }
  public set proxyArp(value: string) {
    this._proxyArp = value;
  }
  public resetProxyArp() {
    this._proxyArp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyArpInput() {
    return this._proxyArp;
  }
}
export interface SiteSettingWiredVna {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#enabled SiteSetting#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function siteSettingWiredVnaToTerraform(struct?: SiteSettingWiredVna | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function siteSettingWiredVnaToHclTerraform(struct?: SiteSettingWiredVna | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingWiredVnaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteSettingWiredVna | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingWiredVna | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
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
}
export interface SiteSettingZoneOccupancyAlert {
  /**
  * List of email addresses to send email notifications when the alert threshold is reached
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#email_notifiers SiteSetting#email_notifiers}
  */
  readonly emailNotifiers?: string[];
  /**
  * Indicate whether zone occupancy alert is enabled for the site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#enabled SiteSetting#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Sending zone-occupancy-alert webhook message only if a zone stays non-compliant (i.e. actual occupancy > occupancy_limit) for a minimum duration specified in the threshold, in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#threshold SiteSetting#threshold}
  */
  readonly threshold?: number;
}

export function siteSettingZoneOccupancyAlertToTerraform(struct?: SiteSettingZoneOccupancyAlert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_notifiers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emailNotifiers),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function siteSettingZoneOccupancyAlertToHclTerraform(struct?: SiteSettingZoneOccupancyAlert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email_notifiers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.emailNotifiers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSettingZoneOccupancyAlertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteSettingZoneOccupancyAlert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailNotifiers !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailNotifiers = this._emailNotifiers;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSettingZoneOccupancyAlert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._emailNotifiers = undefined;
      this._enabled = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._emailNotifiers = value.emailNotifiers;
      this._enabled = value.enabled;
      this._threshold = value.threshold;
    }
  }

  // email_notifiers - computed: true, optional: true, required: false
  private _emailNotifiers?: string[]; 
  public get emailNotifiers() {
    return this.getListAttribute('email_notifiers');
  }
  public set emailNotifiers(value: string[]) {
    this._emailNotifiers = value;
  }
  public resetEmailNotifiers() {
    this._emailNotifiers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailNotifiersInput() {
    return this._emailNotifiers;
  }

  // enabled - computed: true, optional: true, required: false
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

  // threshold - computed: true, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting mist_site_setting}
*/
export class SiteSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_site_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SiteSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SiteSetting to import
  * @param importFromId The id of the existing SiteSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SiteSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_site_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_setting mist_site_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SiteSettingConfig
  */
  public constructor(scope: Construct, id: string, config: SiteSettingConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_site_setting',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.0',
        providerVersionConstraint: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._analytic.internalValue = config.analytic;
    this._apUpdownThreshold = config.apUpdownThreshold;
    this._autoUpgrade.internalValue = config.autoUpgrade;
    this._autoUpgradeEsl.internalValue = config.autoUpgradeEsl;
    this._bgpNeighborUpdownThreshold = config.bgpNeighborUpdownThreshold;
    this._bleConfig.internalValue = config.bleConfig;
    this._configAutoRevert = config.configAutoRevert;
    this._configPushPolicy.internalValue = config.configPushPolicy;
    this._criticalUrlMonitoring.internalValue = config.criticalUrlMonitoring;
    this._defaultPortUsage = config.defaultPortUsage;
    this._deviceUpdownThreshold = config.deviceUpdownThreshold;
    this._enableUnii4 = config.enableUnii4;
    this._engagement.internalValue = config.engagement;
    this._gatewayMgmt.internalValue = config.gatewayMgmt;
    this._gatewayUpdownThreshold = config.gatewayUpdownThreshold;
    this._juniperSrx.internalValue = config.juniperSrx;
    this._led.internalValue = config.led;
    this._marvis.internalValue = config.marvis;
    this._occupancy.internalValue = config.occupancy;
    this._persistConfigOnDevice = config.persistConfigOnDevice;
    this._proxy.internalValue = config.proxy;
    this._removeExistingConfigs = config.removeExistingConfigs;
    this._reportGatt = config.reportGatt;
    this._rogue.internalValue = config.rogue;
    this._rtsa.internalValue = config.rtsa;
    this._simpleAlert.internalValue = config.simpleAlert;
    this._siteId = config.siteId;
    this._skyatp.internalValue = config.skyatp;
    this._sleThresholds.internalValue = config.sleThresholds;
    this._srxApp.internalValue = config.srxApp;
    this._sshKeys = config.sshKeys;
    this._ssr.internalValue = config.ssr;
    this._switchUpdownThreshold = config.switchUpdownThreshold;
    this._syntheticTest.internalValue = config.syntheticTest;
    this._trackAnonymousDevices = config.trackAnonymousDevices;
    this._uplinkPortConfig.internalValue = config.uplinkPortConfig;
    this._vars = config.vars;
    this._vna.internalValue = config.vna;
    this._vpnPathUpdownThreshold = config.vpnPathUpdownThreshold;
    this._vpnPeerUpdownThreshold = config.vpnPeerUpdownThreshold;
    this._vsInstance.internalValue = config.vsInstance;
    this._wanVna.internalValue = config.wanVna;
    this._wids.internalValue = config.wids;
    this._wifi.internalValue = config.wifi;
    this._wiredVna.internalValue = config.wiredVna;
    this._zoneOccupancyAlert.internalValue = config.zoneOccupancyAlert;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // analytic - computed: true, optional: true, required: false
  private _analytic = new SiteSettingAnalyticOutputReference(this, "analytic");
  public get analytic() {
    return this._analytic;
  }
  public putAnalytic(value: SiteSettingAnalytic) {
    this._analytic.internalValue = value;
  }
  public resetAnalytic() {
    this._analytic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticInput() {
    return this._analytic.internalValue;
  }

  // ap_updown_threshold - computed: false, optional: true, required: false
  private _apUpdownThreshold?: number; 
  public get apUpdownThreshold() {
    return this.getNumberAttribute('ap_updown_threshold');
  }
  public set apUpdownThreshold(value: number) {
    this._apUpdownThreshold = value;
  }
  public resetApUpdownThreshold() {
    this._apUpdownThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apUpdownThresholdInput() {
    return this._apUpdownThreshold;
  }

  // auto_upgrade - computed: true, optional: true, required: false
  private _autoUpgrade = new SiteSettingAutoUpgradeOutputReference(this, "auto_upgrade");
  public get autoUpgrade() {
    return this._autoUpgrade;
  }
  public putAutoUpgrade(value: SiteSettingAutoUpgrade) {
    this._autoUpgrade.internalValue = value;
  }
  public resetAutoUpgrade() {
    this._autoUpgrade.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpgradeInput() {
    return this._autoUpgrade.internalValue;
  }

  // auto_upgrade_esl - computed: false, optional: true, required: false
  private _autoUpgradeEsl = new SiteSettingAutoUpgradeEslOutputReference(this, "auto_upgrade_esl");
  public get autoUpgradeEsl() {
    return this._autoUpgradeEsl;
  }
  public putAutoUpgradeEsl(value: SiteSettingAutoUpgradeEsl) {
    this._autoUpgradeEsl.internalValue = value;
  }
  public resetAutoUpgradeEsl() {
    this._autoUpgradeEsl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpgradeEslInput() {
    return this._autoUpgradeEsl.internalValue;
  }

  // bgp_neighbor_updown_threshold - computed: false, optional: true, required: false
  private _bgpNeighborUpdownThreshold?: number; 
  public get bgpNeighborUpdownThreshold() {
    return this.getNumberAttribute('bgp_neighbor_updown_threshold');
  }
  public set bgpNeighborUpdownThreshold(value: number) {
    this._bgpNeighborUpdownThreshold = value;
  }
  public resetBgpNeighborUpdownThreshold() {
    this._bgpNeighborUpdownThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpNeighborUpdownThresholdInput() {
    return this._bgpNeighborUpdownThreshold;
  }

  // blacklist_url - computed: true, optional: false, required: false
  public get blacklistUrl() {
    return this.getStringAttribute('blacklist_url');
  }

  // ble_config - computed: false, optional: true, required: false
  private _bleConfig = new SiteSettingBleConfigOutputReference(this, "ble_config");
  public get bleConfig() {
    return this._bleConfig;
  }
  public putBleConfig(value: SiteSettingBleConfig) {
    this._bleConfig.internalValue = value;
  }
  public resetBleConfig() {
    this._bleConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bleConfigInput() {
    return this._bleConfig.internalValue;
  }

  // config_auto_revert - computed: true, optional: true, required: false
  private _configAutoRevert?: boolean | cdktf.IResolvable; 
  public get configAutoRevert() {
    return this.getBooleanAttribute('config_auto_revert');
  }
  public set configAutoRevert(value: boolean | cdktf.IResolvable) {
    this._configAutoRevert = value;
  }
  public resetConfigAutoRevert() {
    this._configAutoRevert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configAutoRevertInput() {
    return this._configAutoRevert;
  }

  // config_push_policy - computed: false, optional: true, required: false
  private _configPushPolicy = new SiteSettingConfigPushPolicyOutputReference(this, "config_push_policy");
  public get configPushPolicy() {
    return this._configPushPolicy;
  }
  public putConfigPushPolicy(value: SiteSettingConfigPushPolicy) {
    this._configPushPolicy.internalValue = value;
  }
  public resetConfigPushPolicy() {
    this._configPushPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configPushPolicyInput() {
    return this._configPushPolicy.internalValue;
  }

  // critical_url_monitoring - computed: false, optional: true, required: false
  private _criticalUrlMonitoring = new SiteSettingCriticalUrlMonitoringOutputReference(this, "critical_url_monitoring");
  public get criticalUrlMonitoring() {
    return this._criticalUrlMonitoring;
  }
  public putCriticalUrlMonitoring(value: SiteSettingCriticalUrlMonitoring) {
    this._criticalUrlMonitoring.internalValue = value;
  }
  public resetCriticalUrlMonitoring() {
    this._criticalUrlMonitoring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalUrlMonitoringInput() {
    return this._criticalUrlMonitoring.internalValue;
  }

  // default_port_usage - computed: true, optional: true, required: false
  private _defaultPortUsage?: string; 
  public get defaultPortUsage() {
    return this.getStringAttribute('default_port_usage');
  }
  public set defaultPortUsage(value: string) {
    this._defaultPortUsage = value;
  }
  public resetDefaultPortUsage() {
    this._defaultPortUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPortUsageInput() {
    return this._defaultPortUsage;
  }

  // device_updown_threshold - computed: false, optional: true, required: false
  private _deviceUpdownThreshold?: number; 
  public get deviceUpdownThreshold() {
    return this.getNumberAttribute('device_updown_threshold');
  }
  public set deviceUpdownThreshold(value: number) {
    this._deviceUpdownThreshold = value;
  }
  public resetDeviceUpdownThreshold() {
    this._deviceUpdownThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceUpdownThresholdInput() {
    return this._deviceUpdownThreshold;
  }

  // enable_unii_4 - computed: true, optional: true, required: false
  private _enableUnii4?: boolean | cdktf.IResolvable; 
  public get enableUnii4() {
    return this.getBooleanAttribute('enable_unii_4');
  }
  public set enableUnii4(value: boolean | cdktf.IResolvable) {
    this._enableUnii4 = value;
  }
  public resetEnableUnii4() {
    this._enableUnii4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUnii4Input() {
    return this._enableUnii4;
  }

  // engagement - computed: true, optional: true, required: false
  private _engagement = new SiteSettingEngagementOutputReference(this, "engagement");
  public get engagement() {
    return this._engagement;
  }
  public putEngagement(value: SiteSettingEngagement) {
    this._engagement.internalValue = value;
  }
  public resetEngagement() {
    this._engagement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engagementInput() {
    return this._engagement.internalValue;
  }

  // gateway_mgmt - computed: true, optional: true, required: false
  private _gatewayMgmt = new SiteSettingGatewayMgmtOutputReference(this, "gateway_mgmt");
  public get gatewayMgmt() {
    return this._gatewayMgmt;
  }
  public putGatewayMgmt(value: SiteSettingGatewayMgmt) {
    this._gatewayMgmt.internalValue = value;
  }
  public resetGatewayMgmt() {
    this._gatewayMgmt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayMgmtInput() {
    return this._gatewayMgmt.internalValue;
  }

  // gateway_updown_threshold - computed: false, optional: true, required: false
  private _gatewayUpdownThreshold?: number; 
  public get gatewayUpdownThreshold() {
    return this.getNumberAttribute('gateway_updown_threshold');
  }
  public set gatewayUpdownThreshold(value: number) {
    this._gatewayUpdownThreshold = value;
  }
  public resetGatewayUpdownThreshold() {
    this._gatewayUpdownThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayUpdownThresholdInput() {
    return this._gatewayUpdownThreshold;
  }

  // juniper_srx - computed: false, optional: true, required: false
  private _juniperSrx = new SiteSettingJuniperSrxOutputReference(this, "juniper_srx");
  public get juniperSrx() {
    return this._juniperSrx;
  }
  public putJuniperSrx(value: SiteSettingJuniperSrx) {
    this._juniperSrx.internalValue = value;
  }
  public resetJuniperSrx() {
    this._juniperSrx.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get juniperSrxInput() {
    return this._juniperSrx.internalValue;
  }

  // led - computed: true, optional: true, required: false
  private _led = new SiteSettingLedOutputReference(this, "led");
  public get led() {
    return this._led;
  }
  public putLed(value: SiteSettingLed) {
    this._led.internalValue = value;
  }
  public resetLed() {
    this._led.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ledInput() {
    return this._led.internalValue;
  }

  // marvis - computed: false, optional: true, required: false
  private _marvis = new SiteSettingMarvisOutputReference(this, "marvis");
  public get marvis() {
    return this._marvis;
  }
  public putMarvis(value: SiteSettingMarvis) {
    this._marvis.internalValue = value;
  }
  public resetMarvis() {
    this._marvis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marvisInput() {
    return this._marvis.internalValue;
  }

  // occupancy - computed: true, optional: true, required: false
  private _occupancy = new SiteSettingOccupancyOutputReference(this, "occupancy");
  public get occupancy() {
    return this._occupancy;
  }
  public putOccupancy(value: SiteSettingOccupancy) {
    this._occupancy.internalValue = value;
  }
  public resetOccupancy() {
    this._occupancy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get occupancyInput() {
    return this._occupancy.internalValue;
  }

  // persist_config_on_device - computed: true, optional: true, required: false
  private _persistConfigOnDevice?: boolean | cdktf.IResolvable; 
  public get persistConfigOnDevice() {
    return this.getBooleanAttribute('persist_config_on_device');
  }
  public set persistConfigOnDevice(value: boolean | cdktf.IResolvable) {
    this._persistConfigOnDevice = value;
  }
  public resetPersistConfigOnDevice() {
    this._persistConfigOnDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistConfigOnDeviceInput() {
    return this._persistConfigOnDevice;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy = new SiteSettingProxyOutputReference(this, "proxy");
  public get proxy() {
    return this._proxy;
  }
  public putProxy(value: SiteSettingProxy) {
    this._proxy.internalValue = value;
  }
  public resetProxy() {
    this._proxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy.internalValue;
  }

  // remove_existing_configs - computed: false, optional: true, required: false
  private _removeExistingConfigs?: boolean | cdktf.IResolvable; 
  public get removeExistingConfigs() {
    return this.getBooleanAttribute('remove_existing_configs');
  }
  public set removeExistingConfigs(value: boolean | cdktf.IResolvable) {
    this._removeExistingConfigs = value;
  }
  public resetRemoveExistingConfigs() {
    this._removeExistingConfigs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeExistingConfigsInput() {
    return this._removeExistingConfigs;
  }

  // report_gatt - computed: false, optional: true, required: false
  private _reportGatt?: boolean | cdktf.IResolvable; 
  public get reportGatt() {
    return this.getBooleanAttribute('report_gatt');
  }
  public set reportGatt(value: boolean | cdktf.IResolvable) {
    this._reportGatt = value;
  }
  public resetReportGatt() {
    this._reportGatt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportGattInput() {
    return this._reportGatt;
  }

  // rogue - computed: true, optional: true, required: false
  private _rogue = new SiteSettingRogueOutputReference(this, "rogue");
  public get rogue() {
    return this._rogue;
  }
  public putRogue(value: SiteSettingRogue) {
    this._rogue.internalValue = value;
  }
  public resetRogue() {
    this._rogue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rogueInput() {
    return this._rogue.internalValue;
  }

  // rtsa - computed: true, optional: true, required: false
  private _rtsa = new SiteSettingRtsaOutputReference(this, "rtsa");
  public get rtsa() {
    return this._rtsa;
  }
  public putRtsa(value: SiteSettingRtsa) {
    this._rtsa.internalValue = value;
  }
  public resetRtsa() {
    this._rtsa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtsaInput() {
    return this._rtsa.internalValue;
  }

  // simple_alert - computed: false, optional: true, required: false
  private _simpleAlert = new SiteSettingSimpleAlertOutputReference(this, "simple_alert");
  public get simpleAlert() {
    return this._simpleAlert;
  }
  public putSimpleAlert(value: SiteSettingSimpleAlert) {
    this._simpleAlert.internalValue = value;
  }
  public resetSimpleAlert() {
    this._simpleAlert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleAlertInput() {
    return this._simpleAlert.internalValue;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // skyatp - computed: false, optional: true, required: false
  private _skyatp = new SiteSettingSkyatpOutputReference(this, "skyatp");
  public get skyatp() {
    return this._skyatp;
  }
  public putSkyatp(value: SiteSettingSkyatp) {
    this._skyatp.internalValue = value;
  }
  public resetSkyatp() {
    this._skyatp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skyatpInput() {
    return this._skyatp.internalValue;
  }

  // sle_thresholds - computed: false, optional: true, required: false
  private _sleThresholds = new SiteSettingSleThresholdsOutputReference(this, "sle_thresholds");
  public get sleThresholds() {
    return this._sleThresholds;
  }
  public putSleThresholds(value: SiteSettingSleThresholds) {
    this._sleThresholds.internalValue = value;
  }
  public resetSleThresholds() {
    this._sleThresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sleThresholdsInput() {
    return this._sleThresholds.internalValue;
  }

  // srx_app - computed: false, optional: true, required: false
  private _srxApp = new SiteSettingSrxAppOutputReference(this, "srx_app");
  public get srxApp() {
    return this._srxApp;
  }
  public putSrxApp(value: SiteSettingSrxApp) {
    this._srxApp.internalValue = value;
  }
  public resetSrxApp() {
    this._srxApp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srxAppInput() {
    return this._srxApp.internalValue;
  }

  // ssh_keys - computed: true, optional: true, required: false
  private _sshKeys?: string[]; 
  public get sshKeys() {
    return this.getListAttribute('ssh_keys');
  }
  public set sshKeys(value: string[]) {
    this._sshKeys = value;
  }
  public resetSshKeys() {
    this._sshKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeysInput() {
    return this._sshKeys;
  }

  // ssr - computed: false, optional: true, required: false
  private _ssr = new SiteSettingSsrOutputReference(this, "ssr");
  public get ssr() {
    return this._ssr;
  }
  public putSsr(value: SiteSettingSsr) {
    this._ssr.internalValue = value;
  }
  public resetSsr() {
    this._ssr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssrInput() {
    return this._ssr.internalValue;
  }

  // switch_updown_threshold - computed: false, optional: true, required: false
  private _switchUpdownThreshold?: number; 
  public get switchUpdownThreshold() {
    return this.getNumberAttribute('switch_updown_threshold');
  }
  public set switchUpdownThreshold(value: number) {
    this._switchUpdownThreshold = value;
  }
  public resetSwitchUpdownThreshold() {
    this._switchUpdownThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchUpdownThresholdInput() {
    return this._switchUpdownThreshold;
  }

  // synthetic_test - computed: true, optional: true, required: false
  private _syntheticTest = new SiteSettingSyntheticTestOutputReference(this, "synthetic_test");
  public get syntheticTest() {
    return this._syntheticTest;
  }
  public putSyntheticTest(value: SiteSettingSyntheticTest) {
    this._syntheticTest.internalValue = value;
  }
  public resetSyntheticTest() {
    this._syntheticTest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syntheticTestInput() {
    return this._syntheticTest.internalValue;
  }

  // track_anonymous_devices - computed: false, optional: true, required: false
  private _trackAnonymousDevices?: boolean | cdktf.IResolvable; 
  public get trackAnonymousDevices() {
    return this.getBooleanAttribute('track_anonymous_devices');
  }
  public set trackAnonymousDevices(value: boolean | cdktf.IResolvable) {
    this._trackAnonymousDevices = value;
  }
  public resetTrackAnonymousDevices() {
    this._trackAnonymousDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackAnonymousDevicesInput() {
    return this._trackAnonymousDevices;
  }

  // uplink_port_config - computed: true, optional: true, required: false
  private _uplinkPortConfig = new SiteSettingUplinkPortConfigOutputReference(this, "uplink_port_config");
  public get uplinkPortConfig() {
    return this._uplinkPortConfig;
  }
  public putUplinkPortConfig(value: SiteSettingUplinkPortConfig) {
    this._uplinkPortConfig.internalValue = value;
  }
  public resetUplinkPortConfig() {
    this._uplinkPortConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkPortConfigInput() {
    return this._uplinkPortConfig.internalValue;
  }

  // vars - computed: false, optional: true, required: false
  private _vars?: { [key: string]: string }; 
  public get vars() {
    return this.getStringMapAttribute('vars');
  }
  public set vars(value: { [key: string]: string }) {
    this._vars = value;
  }
  public resetVars() {
    this._vars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varsInput() {
    return this._vars;
  }

  // vna - computed: false, optional: true, required: false
  private _vna = new SiteSettingVnaOutputReference(this, "vna");
  public get vna() {
    return this._vna;
  }
  public putVna(value: SiteSettingVna) {
    this._vna.internalValue = value;
  }
  public resetVna() {
    this._vna.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnaInput() {
    return this._vna.internalValue;
  }

  // vpn_path_updown_threshold - computed: false, optional: true, required: false
  private _vpnPathUpdownThreshold?: number; 
  public get vpnPathUpdownThreshold() {
    return this.getNumberAttribute('vpn_path_updown_threshold');
  }
  public set vpnPathUpdownThreshold(value: number) {
    this._vpnPathUpdownThreshold = value;
  }
  public resetVpnPathUpdownThreshold() {
    this._vpnPathUpdownThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnPathUpdownThresholdInput() {
    return this._vpnPathUpdownThreshold;
  }

  // vpn_peer_updown_threshold - computed: false, optional: true, required: false
  private _vpnPeerUpdownThreshold?: number; 
  public get vpnPeerUpdownThreshold() {
    return this.getNumberAttribute('vpn_peer_updown_threshold');
  }
  public set vpnPeerUpdownThreshold(value: number) {
    this._vpnPeerUpdownThreshold = value;
  }
  public resetVpnPeerUpdownThreshold() {
    this._vpnPeerUpdownThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnPeerUpdownThresholdInput() {
    return this._vpnPeerUpdownThreshold;
  }

  // vs_instance - computed: false, optional: true, required: false
  private _vsInstance = new SiteSettingVsInstanceMap(this, "vs_instance");
  public get vsInstance() {
    return this._vsInstance;
  }
  public putVsInstance(value: { [key: string]: SiteSettingVsInstance } | cdktf.IResolvable) {
    this._vsInstance.internalValue = value;
  }
  public resetVsInstance() {
    this._vsInstance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsInstanceInput() {
    return this._vsInstance.internalValue;
  }

  // wan_vna - computed: false, optional: true, required: false
  private _wanVna = new SiteSettingWanVnaOutputReference(this, "wan_vna");
  public get wanVna() {
    return this._wanVna;
  }
  public putWanVna(value: SiteSettingWanVna) {
    this._wanVna.internalValue = value;
  }
  public resetWanVna() {
    this._wanVna.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanVnaInput() {
    return this._wanVna.internalValue;
  }

  // watched_station_url - computed: true, optional: false, required: false
  public get watchedStationUrl() {
    return this.getStringAttribute('watched_station_url');
  }

  // whitelist_url - computed: true, optional: false, required: false
  public get whitelistUrl() {
    return this.getStringAttribute('whitelist_url');
  }

  // wids - computed: true, optional: true, required: false
  private _wids = new SiteSettingWidsOutputReference(this, "wids");
  public get wids() {
    return this._wids;
  }
  public putWids(value: SiteSettingWids) {
    this._wids.internalValue = value;
  }
  public resetWids() {
    this._wids.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widsInput() {
    return this._wids.internalValue;
  }

  // wifi - computed: true, optional: true, required: false
  private _wifi = new SiteSettingWifiOutputReference(this, "wifi");
  public get wifi() {
    return this._wifi;
  }
  public putWifi(value: SiteSettingWifi) {
    this._wifi.internalValue = value;
  }
  public resetWifi() {
    this._wifi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiInput() {
    return this._wifi.internalValue;
  }

  // wired_vna - computed: false, optional: true, required: false
  private _wiredVna = new SiteSettingWiredVnaOutputReference(this, "wired_vna");
  public get wiredVna() {
    return this._wiredVna;
  }
  public putWiredVna(value: SiteSettingWiredVna) {
    this._wiredVna.internalValue = value;
  }
  public resetWiredVna() {
    this._wiredVna.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wiredVnaInput() {
    return this._wiredVna.internalValue;
  }

  // zone_occupancy_alert - computed: true, optional: true, required: false
  private _zoneOccupancyAlert = new SiteSettingZoneOccupancyAlertOutputReference(this, "zone_occupancy_alert");
  public get zoneOccupancyAlert() {
    return this._zoneOccupancyAlert;
  }
  public putZoneOccupancyAlert(value: SiteSettingZoneOccupancyAlert) {
    this._zoneOccupancyAlert.internalValue = value;
  }
  public resetZoneOccupancyAlert() {
    this._zoneOccupancyAlert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneOccupancyAlertInput() {
    return this._zoneOccupancyAlert.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      analytic: siteSettingAnalyticToTerraform(this._analytic.internalValue),
      ap_updown_threshold: cdktf.numberToTerraform(this._apUpdownThreshold),
      auto_upgrade: siteSettingAutoUpgradeToTerraform(this._autoUpgrade.internalValue),
      auto_upgrade_esl: siteSettingAutoUpgradeEslToTerraform(this._autoUpgradeEsl.internalValue),
      bgp_neighbor_updown_threshold: cdktf.numberToTerraform(this._bgpNeighborUpdownThreshold),
      ble_config: siteSettingBleConfigToTerraform(this._bleConfig.internalValue),
      config_auto_revert: cdktf.booleanToTerraform(this._configAutoRevert),
      config_push_policy: siteSettingConfigPushPolicyToTerraform(this._configPushPolicy.internalValue),
      critical_url_monitoring: siteSettingCriticalUrlMonitoringToTerraform(this._criticalUrlMonitoring.internalValue),
      default_port_usage: cdktf.stringToTerraform(this._defaultPortUsage),
      device_updown_threshold: cdktf.numberToTerraform(this._deviceUpdownThreshold),
      enable_unii_4: cdktf.booleanToTerraform(this._enableUnii4),
      engagement: siteSettingEngagementToTerraform(this._engagement.internalValue),
      gateway_mgmt: siteSettingGatewayMgmtToTerraform(this._gatewayMgmt.internalValue),
      gateway_updown_threshold: cdktf.numberToTerraform(this._gatewayUpdownThreshold),
      juniper_srx: siteSettingJuniperSrxToTerraform(this._juniperSrx.internalValue),
      led: siteSettingLedToTerraform(this._led.internalValue),
      marvis: siteSettingMarvisToTerraform(this._marvis.internalValue),
      occupancy: siteSettingOccupancyToTerraform(this._occupancy.internalValue),
      persist_config_on_device: cdktf.booleanToTerraform(this._persistConfigOnDevice),
      proxy: siteSettingProxyToTerraform(this._proxy.internalValue),
      remove_existing_configs: cdktf.booleanToTerraform(this._removeExistingConfigs),
      report_gatt: cdktf.booleanToTerraform(this._reportGatt),
      rogue: siteSettingRogueToTerraform(this._rogue.internalValue),
      rtsa: siteSettingRtsaToTerraform(this._rtsa.internalValue),
      simple_alert: siteSettingSimpleAlertToTerraform(this._simpleAlert.internalValue),
      site_id: cdktf.stringToTerraform(this._siteId),
      skyatp: siteSettingSkyatpToTerraform(this._skyatp.internalValue),
      sle_thresholds: siteSettingSleThresholdsToTerraform(this._sleThresholds.internalValue),
      srx_app: siteSettingSrxAppToTerraform(this._srxApp.internalValue),
      ssh_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshKeys),
      ssr: siteSettingSsrToTerraform(this._ssr.internalValue),
      switch_updown_threshold: cdktf.numberToTerraform(this._switchUpdownThreshold),
      synthetic_test: siteSettingSyntheticTestToTerraform(this._syntheticTest.internalValue),
      track_anonymous_devices: cdktf.booleanToTerraform(this._trackAnonymousDevices),
      uplink_port_config: siteSettingUplinkPortConfigToTerraform(this._uplinkPortConfig.internalValue),
      vars: cdktf.hashMapper(cdktf.stringToTerraform)(this._vars),
      vna: siteSettingVnaToTerraform(this._vna.internalValue),
      vpn_path_updown_threshold: cdktf.numberToTerraform(this._vpnPathUpdownThreshold),
      vpn_peer_updown_threshold: cdktf.numberToTerraform(this._vpnPeerUpdownThreshold),
      vs_instance: cdktf.hashMapper(siteSettingVsInstanceToTerraform)(this._vsInstance.internalValue),
      wan_vna: siteSettingWanVnaToTerraform(this._wanVna.internalValue),
      wids: siteSettingWidsToTerraform(this._wids.internalValue),
      wifi: siteSettingWifiToTerraform(this._wifi.internalValue),
      wired_vna: siteSettingWiredVnaToTerraform(this._wiredVna.internalValue),
      zone_occupancy_alert: siteSettingZoneOccupancyAlertToTerraform(this._zoneOccupancyAlert.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      analytic: {
        value: siteSettingAnalyticToHclTerraform(this._analytic.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteSettingAnalytic",
      },
      ap_updown_threshold: {
        value: cdktf.numberToHclTerraform(this._apUpdownThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_upgrade: {
        value: siteSettingAutoUpgradeToHclTerraform(this._autoUpgrade.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteSettingAutoUpgrade",
      },
      auto_upgrade_esl: {
        value: siteSettingAutoUpgradeEslToHclTerraform(this._autoUpgradeEsl.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteSettingAutoUpgradeEsl",
      },
      bgp_neighbor_updown_threshold: {
        value: cdktf.numberToHclTerraform(this._bgpNeighborUpdownThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ble_config: {
        value: siteSettingBleConfigToHclTerraform(this._bleConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteSettingBleConfig",
      },
      config_auto_revert: {
        value: cdktf.booleanToHclTerraform(this._configAutoRevert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      config_push_policy: {
        value: siteSettingConfigPushPolicyToHclTerraform(this._configPushPolicy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteSettingConfigPushPolicy",
      },
      critical_url_monitoring: {
        value: siteSettingCriticalUrlMonitoringToHclTerraform(this._criticalUrlMonitoring.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteSettingCriticalUrlMonitoring",
      },
      default_port_usage: {
        value: cdktf.stringToHclTerraform(this._defaultPortUsage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_updown_threshold: {
        value: cdktf.numberToHclTerraform(this._deviceUpdownThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_unii_4: {
        value: cdktf.booleanToHclTerraform(this._enableUnii4),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      engagement: {
        value: siteSettingEngagementToHclTerraform(this._engagement.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteSettingEngagement",
      },
      gateway_mgmt: {
        value: siteSettingGatewayMgmtToHclTerraform(this._gatewayMgmt.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteSettingGatewayMgmt",
      },
      gateway_updown_threshold: {
        value: cdktf.numberToHclTerraform(this._gatewayUpdownThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      juniper_srx: {
        value: siteSettingJuniperSrxToHclTerraform(this._juniperSrx.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteSettingJuniperSrx",
      },
      led: {
        value: siteSettingLedToHclTerraform(this._led.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteSettingLed",
      },
      marvis: {
        value: siteSettingMarvisToHclTerraform(this._marvis.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteSettingMarvis",
      },
      occupancy: {
        value: siteSettingOccupancyToHclTerraform(this._occupancy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteSettingOccupancy",
      },
      persist_config_on_device: {
        value: cdktf.booleanToHclTerraform(this._persistConfigOnDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      proxy: {
        value: siteSettingProxyToHclTerraform(this._proxy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteSettingProxy",
      },
      remove_existing_configs: {
        value: cdktf.booleanToHclTerraform(this._removeExistingConfigs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      report_gatt: {
        value: cdktf.booleanToHclTerraform(this._reportGatt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rogue: {
        value: siteSettingRogueToHclTerraform(this._rogue.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteSettingRogue",
      },
      rtsa: {
        value: siteSettingRtsaToHclTerraform(this._rtsa.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteSettingRtsa",
      },
      simple_alert: {
        value: siteSettingSimpleAlertToHclTerraform(this._simpleAlert.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteSettingSimpleAlert",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skyatp: {
        value: siteSettingSkyatpToHclTerraform(this._skyatp.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteSettingSkyatp",
      },
      sle_thresholds: {
        value: siteSettingSleThresholdsToHclTerraform(this._sleThresholds.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteSettingSleThresholds",
      },
      srx_app: {
        value: siteSettingSrxAppToHclTerraform(this._srxApp.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteSettingSrxApp",
      },
      ssh_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ssr: {
        value: siteSettingSsrToHclTerraform(this._ssr.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteSettingSsr",
      },
      switch_updown_threshold: {
        value: cdktf.numberToHclTerraform(this._switchUpdownThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      synthetic_test: {
        value: siteSettingSyntheticTestToHclTerraform(this._syntheticTest.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteSettingSyntheticTest",
      },
      track_anonymous_devices: {
        value: cdktf.booleanToHclTerraform(this._trackAnonymousDevices),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      uplink_port_config: {
        value: siteSettingUplinkPortConfigToHclTerraform(this._uplinkPortConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteSettingUplinkPortConfig",
      },
      vars: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._vars),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vna: {
        value: siteSettingVnaToHclTerraform(this._vna.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteSettingVna",
      },
      vpn_path_updown_threshold: {
        value: cdktf.numberToHclTerraform(this._vpnPathUpdownThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vpn_peer_updown_threshold: {
        value: cdktf.numberToHclTerraform(this._vpnPeerUpdownThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vs_instance: {
        value: cdktf.hashMapperHcl(siteSettingVsInstanceToHclTerraform)(this._vsInstance.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "SiteSettingVsInstanceMap",
      },
      wan_vna: {
        value: siteSettingWanVnaToHclTerraform(this._wanVna.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteSettingWanVna",
      },
      wids: {
        value: siteSettingWidsToHclTerraform(this._wids.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteSettingWids",
      },
      wifi: {
        value: siteSettingWifiToHclTerraform(this._wifi.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteSettingWifi",
      },
      wired_vna: {
        value: siteSettingWiredVnaToHclTerraform(this._wiredVna.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteSettingWiredVna",
      },
      zone_occupancy_alert: {
        value: siteSettingZoneOccupancyAlertToHclTerraform(this._zoneOccupancyAlert.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteSettingZoneOccupancyAlert",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
