// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_timers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelesscontrollerTimersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_timers#ap_reboot_wait_interval1 WirelesscontrollerTimers#ap_reboot_wait_interval1}
  */
  readonly apRebootWaitInterval1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_timers#ap_reboot_wait_interval2 WirelesscontrollerTimers#ap_reboot_wait_interval2}
  */
  readonly apRebootWaitInterval2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_timers#ap_reboot_wait_time WirelesscontrollerTimers#ap_reboot_wait_time}
  */
  readonly apRebootWaitTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_timers#auth_timeout WirelesscontrollerTimers#auth_timeout}
  */
  readonly authTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_timers#ble_device_cleanup WirelesscontrollerTimers#ble_device_cleanup}
  */
  readonly bleDeviceCleanup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_timers#ble_scan_report_intv WirelesscontrollerTimers#ble_scan_report_intv}
  */
  readonly bleScanReportIntv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_timers#client_idle_rehome_timeout WirelesscontrollerTimers#client_idle_rehome_timeout}
  */
  readonly clientIdleRehomeTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_timers#client_idle_timeout WirelesscontrollerTimers#client_idle_timeout}
  */
  readonly clientIdleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_timers#darrp_day WirelesscontrollerTimers#darrp_day}
  */
  readonly darrpDay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_timers#darrp_optimize WirelesscontrollerTimers#darrp_optimize}
  */
  readonly darrpOptimize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_timers#discovery_interval WirelesscontrollerTimers#discovery_interval}
  */
  readonly discoveryInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_timers#drma_interval WirelesscontrollerTimers#drma_interval}
  */
  readonly drmaInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_timers#dynamic_sort_subtable WirelesscontrollerTimers#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_timers#echo_interval WirelesscontrollerTimers#echo_interval}
  */
  readonly echoInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_timers#fake_ap_log WirelesscontrollerTimers#fake_ap_log}
  */
  readonly fakeApLog?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_timers#get_all_tables WirelesscontrollerTimers#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_timers#id WirelesscontrollerTimers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_timers#ipsec_intf_cleanup WirelesscontrollerTimers#ipsec_intf_cleanup}
  */
  readonly ipsecIntfCleanup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_timers#nat_session_keep_alive WirelesscontrollerTimers#nat_session_keep_alive}
  */
  readonly natSessionKeepAlive?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_timers#radio_stats_interval WirelesscontrollerTimers#radio_stats_interval}
  */
  readonly radioStatsInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_timers#rogue_ap_cleanup WirelesscontrollerTimers#rogue_ap_cleanup}
  */
  readonly rogueApCleanup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_timers#rogue_ap_log WirelesscontrollerTimers#rogue_ap_log}
  */
  readonly rogueApLog?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_timers#rogue_sta_cleanup WirelesscontrollerTimers#rogue_sta_cleanup}
  */
  readonly rogueStaCleanup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_timers#sta_cap_cleanup WirelesscontrollerTimers#sta_cap_cleanup}
  */
  readonly staCapCleanup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_timers#sta_capability_interval WirelesscontrollerTimers#sta_capability_interval}
  */
  readonly staCapabilityInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_timers#sta_locate_timer WirelesscontrollerTimers#sta_locate_timer}
  */
  readonly staLocateTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_timers#sta_offline_cleanup WirelesscontrollerTimers#sta_offline_cleanup}
  */
  readonly staOfflineCleanup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_timers#sta_offline_ip2mac_cleanup WirelesscontrollerTimers#sta_offline_ip2mac_cleanup}
  */
  readonly staOfflineIp2MacCleanup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_timers#sta_stats_interval WirelesscontrollerTimers#sta_stats_interval}
  */
  readonly staStatsInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_timers#vap_stats_interval WirelesscontrollerTimers#vap_stats_interval}
  */
  readonly vapStatsInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_timers#vdomparam WirelesscontrollerTimers#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_timers#wids_entry_cleanup WirelesscontrollerTimers#wids_entry_cleanup}
  */
  readonly widsEntryCleanup?: number;
  /**
  * darrp_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_timers#darrp_time WirelesscontrollerTimers#darrp_time}
  */
  readonly darrpTime?: WirelesscontrollerTimersDarrpTime[] | cdktf.IResolvable;
}
export interface WirelesscontrollerTimersDarrpTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_timers#time WirelesscontrollerTimers#time}
  */
  readonly time?: string;
}

export function wirelesscontrollerTimersDarrpTimeToTerraform(struct?: WirelesscontrollerTimersDarrpTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time: cdktf.stringToTerraform(struct!.time),
  }
}


export function wirelesscontrollerTimersDarrpTimeToHclTerraform(struct?: WirelesscontrollerTimersDarrpTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    time: {
      value: cdktf.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelesscontrollerTimersDarrpTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelesscontrollerTimersDarrpTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelesscontrollerTimersDarrpTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._time = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._time = value.time;
    }
  }

  // time - computed: false, optional: true, required: false
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}

export class WirelesscontrollerTimersDarrpTimeList extends cdktf.ComplexList {
  public internalValue? : WirelesscontrollerTimersDarrpTime[] | cdktf.IResolvable

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
  public get(index: number): WirelesscontrollerTimersDarrpTimeOutputReference {
    return new WirelesscontrollerTimersDarrpTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_timers fortios_wirelesscontroller_timers}
*/
export class WirelesscontrollerTimers extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_wirelesscontroller_timers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelesscontrollerTimers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelesscontrollerTimers to import
  * @param importFromId The id of the existing WirelesscontrollerTimers that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_timers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelesscontrollerTimers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_wirelesscontroller_timers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_timers fortios_wirelesscontroller_timers} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelesscontrollerTimersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WirelesscontrollerTimersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_wirelesscontroller_timers',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apRebootWaitInterval1 = config.apRebootWaitInterval1;
    this._apRebootWaitInterval2 = config.apRebootWaitInterval2;
    this._apRebootWaitTime = config.apRebootWaitTime;
    this._authTimeout = config.authTimeout;
    this._bleDeviceCleanup = config.bleDeviceCleanup;
    this._bleScanReportIntv = config.bleScanReportIntv;
    this._clientIdleRehomeTimeout = config.clientIdleRehomeTimeout;
    this._clientIdleTimeout = config.clientIdleTimeout;
    this._darrpDay = config.darrpDay;
    this._darrpOptimize = config.darrpOptimize;
    this._discoveryInterval = config.discoveryInterval;
    this._drmaInterval = config.drmaInterval;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._echoInterval = config.echoInterval;
    this._fakeApLog = config.fakeApLog;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._ipsecIntfCleanup = config.ipsecIntfCleanup;
    this._natSessionKeepAlive = config.natSessionKeepAlive;
    this._radioStatsInterval = config.radioStatsInterval;
    this._rogueApCleanup = config.rogueApCleanup;
    this._rogueApLog = config.rogueApLog;
    this._rogueStaCleanup = config.rogueStaCleanup;
    this._staCapCleanup = config.staCapCleanup;
    this._staCapabilityInterval = config.staCapabilityInterval;
    this._staLocateTimer = config.staLocateTimer;
    this._staOfflineCleanup = config.staOfflineCleanup;
    this._staOfflineIp2MacCleanup = config.staOfflineIp2MacCleanup;
    this._staStatsInterval = config.staStatsInterval;
    this._vapStatsInterval = config.vapStatsInterval;
    this._vdomparam = config.vdomparam;
    this._widsEntryCleanup = config.widsEntryCleanup;
    this._darrpTime.internalValue = config.darrpTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ap_reboot_wait_interval1 - computed: false, optional: true, required: false
  private _apRebootWaitInterval1?: number; 
  public get apRebootWaitInterval1() {
    return this.getNumberAttribute('ap_reboot_wait_interval1');
  }
  public set apRebootWaitInterval1(value: number) {
    this._apRebootWaitInterval1 = value;
  }
  public resetApRebootWaitInterval1() {
    this._apRebootWaitInterval1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apRebootWaitInterval1Input() {
    return this._apRebootWaitInterval1;
  }

  // ap_reboot_wait_interval2 - computed: false, optional: true, required: false
  private _apRebootWaitInterval2?: number; 
  public get apRebootWaitInterval2() {
    return this.getNumberAttribute('ap_reboot_wait_interval2');
  }
  public set apRebootWaitInterval2(value: number) {
    this._apRebootWaitInterval2 = value;
  }
  public resetApRebootWaitInterval2() {
    this._apRebootWaitInterval2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apRebootWaitInterval2Input() {
    return this._apRebootWaitInterval2;
  }

  // ap_reboot_wait_time - computed: false, optional: true, required: false
  private _apRebootWaitTime?: string; 
  public get apRebootWaitTime() {
    return this.getStringAttribute('ap_reboot_wait_time');
  }
  public set apRebootWaitTime(value: string) {
    this._apRebootWaitTime = value;
  }
  public resetApRebootWaitTime() {
    this._apRebootWaitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apRebootWaitTimeInput() {
    return this._apRebootWaitTime;
  }

  // auth_timeout - computed: true, optional: true, required: false
  private _authTimeout?: number; 
  public get authTimeout() {
    return this.getNumberAttribute('auth_timeout');
  }
  public set authTimeout(value: number) {
    this._authTimeout = value;
  }
  public resetAuthTimeout() {
    this._authTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTimeoutInput() {
    return this._authTimeout;
  }

  // ble_device_cleanup - computed: true, optional: true, required: false
  private _bleDeviceCleanup?: number; 
  public get bleDeviceCleanup() {
    return this.getNumberAttribute('ble_device_cleanup');
  }
  public set bleDeviceCleanup(value: number) {
    this._bleDeviceCleanup = value;
  }
  public resetBleDeviceCleanup() {
    this._bleDeviceCleanup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bleDeviceCleanupInput() {
    return this._bleDeviceCleanup;
  }

  // ble_scan_report_intv - computed: true, optional: true, required: false
  private _bleScanReportIntv?: number; 
  public get bleScanReportIntv() {
    return this.getNumberAttribute('ble_scan_report_intv');
  }
  public set bleScanReportIntv(value: number) {
    this._bleScanReportIntv = value;
  }
  public resetBleScanReportIntv() {
    this._bleScanReportIntv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bleScanReportIntvInput() {
    return this._bleScanReportIntv;
  }

  // client_idle_rehome_timeout - computed: true, optional: true, required: false
  private _clientIdleRehomeTimeout?: number; 
  public get clientIdleRehomeTimeout() {
    return this.getNumberAttribute('client_idle_rehome_timeout');
  }
  public set clientIdleRehomeTimeout(value: number) {
    this._clientIdleRehomeTimeout = value;
  }
  public resetClientIdleRehomeTimeout() {
    this._clientIdleRehomeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdleRehomeTimeoutInput() {
    return this._clientIdleRehomeTimeout;
  }

  // client_idle_timeout - computed: true, optional: true, required: false
  private _clientIdleTimeout?: number; 
  public get clientIdleTimeout() {
    return this.getNumberAttribute('client_idle_timeout');
  }
  public set clientIdleTimeout(value: number) {
    this._clientIdleTimeout = value;
  }
  public resetClientIdleTimeout() {
    this._clientIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdleTimeoutInput() {
    return this._clientIdleTimeout;
  }

  // darrp_day - computed: false, optional: true, required: false
  private _darrpDay?: string; 
  public get darrpDay() {
    return this.getStringAttribute('darrp_day');
  }
  public set darrpDay(value: string) {
    this._darrpDay = value;
  }
  public resetDarrpDay() {
    this._darrpDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darrpDayInput() {
    return this._darrpDay;
  }

  // darrp_optimize - computed: false, optional: true, required: false
  private _darrpOptimize?: number; 
  public get darrpOptimize() {
    return this.getNumberAttribute('darrp_optimize');
  }
  public set darrpOptimize(value: number) {
    this._darrpOptimize = value;
  }
  public resetDarrpOptimize() {
    this._darrpOptimize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darrpOptimizeInput() {
    return this._darrpOptimize;
  }

  // discovery_interval - computed: true, optional: true, required: false
  private _discoveryInterval?: number; 
  public get discoveryInterval() {
    return this.getNumberAttribute('discovery_interval');
  }
  public set discoveryInterval(value: number) {
    this._discoveryInterval = value;
  }
  public resetDiscoveryInterval() {
    this._discoveryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryIntervalInput() {
    return this._discoveryInterval;
  }

  // drma_interval - computed: true, optional: true, required: false
  private _drmaInterval?: number; 
  public get drmaInterval() {
    return this.getNumberAttribute('drma_interval');
  }
  public set drmaInterval(value: number) {
    this._drmaInterval = value;
  }
  public resetDrmaInterval() {
    this._drmaInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drmaIntervalInput() {
    return this._drmaInterval;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // echo_interval - computed: true, optional: true, required: false
  private _echoInterval?: number; 
  public get echoInterval() {
    return this.getNumberAttribute('echo_interval');
  }
  public set echoInterval(value: number) {
    this._echoInterval = value;
  }
  public resetEchoInterval() {
    this._echoInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get echoIntervalInput() {
    return this._echoInterval;
  }

  // fake_ap_log - computed: true, optional: true, required: false
  private _fakeApLog?: number; 
  public get fakeApLog() {
    return this.getNumberAttribute('fake_ap_log');
  }
  public set fakeApLog(value: number) {
    this._fakeApLog = value;
  }
  public resetFakeApLog() {
    this._fakeApLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fakeApLogInput() {
    return this._fakeApLog;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // ipsec_intf_cleanup - computed: true, optional: true, required: false
  private _ipsecIntfCleanup?: number; 
  public get ipsecIntfCleanup() {
    return this.getNumberAttribute('ipsec_intf_cleanup');
  }
  public set ipsecIntfCleanup(value: number) {
    this._ipsecIntfCleanup = value;
  }
  public resetIpsecIntfCleanup() {
    this._ipsecIntfCleanup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecIntfCleanupInput() {
    return this._ipsecIntfCleanup;
  }

  // nat_session_keep_alive - computed: false, optional: true, required: false
  private _natSessionKeepAlive?: number; 
  public get natSessionKeepAlive() {
    return this.getNumberAttribute('nat_session_keep_alive');
  }
  public set natSessionKeepAlive(value: number) {
    this._natSessionKeepAlive = value;
  }
  public resetNatSessionKeepAlive() {
    this._natSessionKeepAlive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natSessionKeepAliveInput() {
    return this._natSessionKeepAlive;
  }

  // radio_stats_interval - computed: true, optional: true, required: false
  private _radioStatsInterval?: number; 
  public get radioStatsInterval() {
    return this.getNumberAttribute('radio_stats_interval');
  }
  public set radioStatsInterval(value: number) {
    this._radioStatsInterval = value;
  }
  public resetRadioStatsInterval() {
    this._radioStatsInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioStatsIntervalInput() {
    return this._radioStatsInterval;
  }

  // rogue_ap_cleanup - computed: false, optional: true, required: false
  private _rogueApCleanup?: number; 
  public get rogueApCleanup() {
    return this.getNumberAttribute('rogue_ap_cleanup');
  }
  public set rogueApCleanup(value: number) {
    this._rogueApCleanup = value;
  }
  public resetRogueApCleanup() {
    this._rogueApCleanup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rogueApCleanupInput() {
    return this._rogueApCleanup;
  }

  // rogue_ap_log - computed: false, optional: true, required: false
  private _rogueApLog?: number; 
  public get rogueApLog() {
    return this.getNumberAttribute('rogue_ap_log');
  }
  public set rogueApLog(value: number) {
    this._rogueApLog = value;
  }
  public resetRogueApLog() {
    this._rogueApLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rogueApLogInput() {
    return this._rogueApLog;
  }

  // rogue_sta_cleanup - computed: false, optional: true, required: false
  private _rogueStaCleanup?: number; 
  public get rogueStaCleanup() {
    return this.getNumberAttribute('rogue_sta_cleanup');
  }
  public set rogueStaCleanup(value: number) {
    this._rogueStaCleanup = value;
  }
  public resetRogueStaCleanup() {
    this._rogueStaCleanup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rogueStaCleanupInput() {
    return this._rogueStaCleanup;
  }

  // sta_cap_cleanup - computed: false, optional: true, required: false
  private _staCapCleanup?: number; 
  public get staCapCleanup() {
    return this.getNumberAttribute('sta_cap_cleanup');
  }
  public set staCapCleanup(value: number) {
    this._staCapCleanup = value;
  }
  public resetStaCapCleanup() {
    this._staCapCleanup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staCapCleanupInput() {
    return this._staCapCleanup;
  }

  // sta_capability_interval - computed: true, optional: true, required: false
  private _staCapabilityInterval?: number; 
  public get staCapabilityInterval() {
    return this.getNumberAttribute('sta_capability_interval');
  }
  public set staCapabilityInterval(value: number) {
    this._staCapabilityInterval = value;
  }
  public resetStaCapabilityInterval() {
    this._staCapabilityInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staCapabilityIntervalInput() {
    return this._staCapabilityInterval;
  }

  // sta_locate_timer - computed: true, optional: true, required: false
  private _staLocateTimer?: number; 
  public get staLocateTimer() {
    return this.getNumberAttribute('sta_locate_timer');
  }
  public set staLocateTimer(value: number) {
    this._staLocateTimer = value;
  }
  public resetStaLocateTimer() {
    this._staLocateTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staLocateTimerInput() {
    return this._staLocateTimer;
  }

  // sta_offline_cleanup - computed: true, optional: true, required: false
  private _staOfflineCleanup?: number; 
  public get staOfflineCleanup() {
    return this.getNumberAttribute('sta_offline_cleanup');
  }
  public set staOfflineCleanup(value: number) {
    this._staOfflineCleanup = value;
  }
  public resetStaOfflineCleanup() {
    this._staOfflineCleanup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staOfflineCleanupInput() {
    return this._staOfflineCleanup;
  }

  // sta_offline_ip2mac_cleanup - computed: true, optional: true, required: false
  private _staOfflineIp2MacCleanup?: number; 
  public get staOfflineIp2MacCleanup() {
    return this.getNumberAttribute('sta_offline_ip2mac_cleanup');
  }
  public set staOfflineIp2MacCleanup(value: number) {
    this._staOfflineIp2MacCleanup = value;
  }
  public resetStaOfflineIp2MacCleanup() {
    this._staOfflineIp2MacCleanup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staOfflineIp2MacCleanupInput() {
    return this._staOfflineIp2MacCleanup;
  }

  // sta_stats_interval - computed: true, optional: true, required: false
  private _staStatsInterval?: number; 
  public get staStatsInterval() {
    return this.getNumberAttribute('sta_stats_interval');
  }
  public set staStatsInterval(value: number) {
    this._staStatsInterval = value;
  }
  public resetStaStatsInterval() {
    this._staStatsInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staStatsIntervalInput() {
    return this._staStatsInterval;
  }

  // vap_stats_interval - computed: true, optional: true, required: false
  private _vapStatsInterval?: number; 
  public get vapStatsInterval() {
    return this.getNumberAttribute('vap_stats_interval');
  }
  public set vapStatsInterval(value: number) {
    this._vapStatsInterval = value;
  }
  public resetVapStatsInterval() {
    this._vapStatsInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vapStatsIntervalInput() {
    return this._vapStatsInterval;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // wids_entry_cleanup - computed: false, optional: true, required: false
  private _widsEntryCleanup?: number; 
  public get widsEntryCleanup() {
    return this.getNumberAttribute('wids_entry_cleanup');
  }
  public set widsEntryCleanup(value: number) {
    this._widsEntryCleanup = value;
  }
  public resetWidsEntryCleanup() {
    this._widsEntryCleanup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widsEntryCleanupInput() {
    return this._widsEntryCleanup;
  }

  // darrp_time - computed: false, optional: true, required: false
  private _darrpTime = new WirelesscontrollerTimersDarrpTimeList(this, "darrp_time", false);
  public get darrpTime() {
    return this._darrpTime;
  }
  public putDarrpTime(value: WirelesscontrollerTimersDarrpTime[] | cdktf.IResolvable) {
    this._darrpTime.internalValue = value;
  }
  public resetDarrpTime() {
    this._darrpTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darrpTimeInput() {
    return this._darrpTime.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ap_reboot_wait_interval1: cdktf.numberToTerraform(this._apRebootWaitInterval1),
      ap_reboot_wait_interval2: cdktf.numberToTerraform(this._apRebootWaitInterval2),
      ap_reboot_wait_time: cdktf.stringToTerraform(this._apRebootWaitTime),
      auth_timeout: cdktf.numberToTerraform(this._authTimeout),
      ble_device_cleanup: cdktf.numberToTerraform(this._bleDeviceCleanup),
      ble_scan_report_intv: cdktf.numberToTerraform(this._bleScanReportIntv),
      client_idle_rehome_timeout: cdktf.numberToTerraform(this._clientIdleRehomeTimeout),
      client_idle_timeout: cdktf.numberToTerraform(this._clientIdleTimeout),
      darrp_day: cdktf.stringToTerraform(this._darrpDay),
      darrp_optimize: cdktf.numberToTerraform(this._darrpOptimize),
      discovery_interval: cdktf.numberToTerraform(this._discoveryInterval),
      drma_interval: cdktf.numberToTerraform(this._drmaInterval),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      echo_interval: cdktf.numberToTerraform(this._echoInterval),
      fake_ap_log: cdktf.numberToTerraform(this._fakeApLog),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      ipsec_intf_cleanup: cdktf.numberToTerraform(this._ipsecIntfCleanup),
      nat_session_keep_alive: cdktf.numberToTerraform(this._natSessionKeepAlive),
      radio_stats_interval: cdktf.numberToTerraform(this._radioStatsInterval),
      rogue_ap_cleanup: cdktf.numberToTerraform(this._rogueApCleanup),
      rogue_ap_log: cdktf.numberToTerraform(this._rogueApLog),
      rogue_sta_cleanup: cdktf.numberToTerraform(this._rogueStaCleanup),
      sta_cap_cleanup: cdktf.numberToTerraform(this._staCapCleanup),
      sta_capability_interval: cdktf.numberToTerraform(this._staCapabilityInterval),
      sta_locate_timer: cdktf.numberToTerraform(this._staLocateTimer),
      sta_offline_cleanup: cdktf.numberToTerraform(this._staOfflineCleanup),
      sta_offline_ip2mac_cleanup: cdktf.numberToTerraform(this._staOfflineIp2MacCleanup),
      sta_stats_interval: cdktf.numberToTerraform(this._staStatsInterval),
      vap_stats_interval: cdktf.numberToTerraform(this._vapStatsInterval),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      wids_entry_cleanup: cdktf.numberToTerraform(this._widsEntryCleanup),
      darrp_time: cdktf.listMapper(wirelesscontrollerTimersDarrpTimeToTerraform, true)(this._darrpTime.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ap_reboot_wait_interval1: {
        value: cdktf.numberToHclTerraform(this._apRebootWaitInterval1),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ap_reboot_wait_interval2: {
        value: cdktf.numberToHclTerraform(this._apRebootWaitInterval2),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ap_reboot_wait_time: {
        value: cdktf.stringToHclTerraform(this._apRebootWaitTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_timeout: {
        value: cdktf.numberToHclTerraform(this._authTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ble_device_cleanup: {
        value: cdktf.numberToHclTerraform(this._bleDeviceCleanup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ble_scan_report_intv: {
        value: cdktf.numberToHclTerraform(this._bleScanReportIntv),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_idle_rehome_timeout: {
        value: cdktf.numberToHclTerraform(this._clientIdleRehomeTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_idle_timeout: {
        value: cdktf.numberToHclTerraform(this._clientIdleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      darrp_day: {
        value: cdktf.stringToHclTerraform(this._darrpDay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      darrp_optimize: {
        value: cdktf.numberToHclTerraform(this._darrpOptimize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      discovery_interval: {
        value: cdktf.numberToHclTerraform(this._discoveryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drma_interval: {
        value: cdktf.numberToHclTerraform(this._drmaInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      echo_interval: {
        value: cdktf.numberToHclTerraform(this._echoInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fake_ap_log: {
        value: cdktf.numberToHclTerraform(this._fakeApLog),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_intf_cleanup: {
        value: cdktf.numberToHclTerraform(this._ipsecIntfCleanup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nat_session_keep_alive: {
        value: cdktf.numberToHclTerraform(this._natSessionKeepAlive),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radio_stats_interval: {
        value: cdktf.numberToHclTerraform(this._radioStatsInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rogue_ap_cleanup: {
        value: cdktf.numberToHclTerraform(this._rogueApCleanup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rogue_ap_log: {
        value: cdktf.numberToHclTerraform(this._rogueApLog),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rogue_sta_cleanup: {
        value: cdktf.numberToHclTerraform(this._rogueStaCleanup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sta_cap_cleanup: {
        value: cdktf.numberToHclTerraform(this._staCapCleanup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sta_capability_interval: {
        value: cdktf.numberToHclTerraform(this._staCapabilityInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sta_locate_timer: {
        value: cdktf.numberToHclTerraform(this._staLocateTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sta_offline_cleanup: {
        value: cdktf.numberToHclTerraform(this._staOfflineCleanup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sta_offline_ip2mac_cleanup: {
        value: cdktf.numberToHclTerraform(this._staOfflineIp2MacCleanup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sta_stats_interval: {
        value: cdktf.numberToHclTerraform(this._staStatsInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vap_stats_interval: {
        value: cdktf.numberToHclTerraform(this._vapStatsInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wids_entry_cleanup: {
        value: cdktf.numberToHclTerraform(this._widsEntryCleanup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      darrp_time: {
        value: cdktf.listMapperHcl(wirelesscontrollerTimersDarrpTimeToHclTerraform, true)(this._darrpTime.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelesscontrollerTimersDarrpTimeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
