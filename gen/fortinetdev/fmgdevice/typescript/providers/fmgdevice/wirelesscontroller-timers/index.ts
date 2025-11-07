// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_timers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelesscontrollerTimersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_timers#ap_reboot_wait_interval1 WirelesscontrollerTimers#ap_reboot_wait_interval1}
  */
  readonly apRebootWaitInterval1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_timers#ap_reboot_wait_interval2 WirelesscontrollerTimers#ap_reboot_wait_interval2}
  */
  readonly apRebootWaitInterval2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_timers#ap_reboot_wait_time WirelesscontrollerTimers#ap_reboot_wait_time}
  */
  readonly apRebootWaitTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_timers#auth_timeout WirelesscontrollerTimers#auth_timeout}
  */
  readonly authTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_timers#ble_device_cleanup WirelesscontrollerTimers#ble_device_cleanup}
  */
  readonly bleDeviceCleanup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_timers#ble_scan_report_intv WirelesscontrollerTimers#ble_scan_report_intv}
  */
  readonly bleScanReportIntv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_timers#client_idle_rehome_timeout WirelesscontrollerTimers#client_idle_rehome_timeout}
  */
  readonly clientIdleRehomeTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_timers#client_idle_timeout WirelesscontrollerTimers#client_idle_timeout}
  */
  readonly clientIdleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_timers#device_name WirelesscontrollerTimers#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_timers#discovery_interval WirelesscontrollerTimers#discovery_interval}
  */
  readonly discoveryInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_timers#drma_interval WirelesscontrollerTimers#drma_interval}
  */
  readonly drmaInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_timers#echo_interval WirelesscontrollerTimers#echo_interval}
  */
  readonly echoInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_timers#fake_ap_log WirelesscontrollerTimers#fake_ap_log}
  */
  readonly fakeApLog?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_timers#id WirelesscontrollerTimers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_timers#ipsec_intf_cleanup WirelesscontrollerTimers#ipsec_intf_cleanup}
  */
  readonly ipsecIntfCleanup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_timers#nat_session_keep_alive WirelesscontrollerTimers#nat_session_keep_alive}
  */
  readonly natSessionKeepAlive?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_timers#radio_stats_interval WirelesscontrollerTimers#radio_stats_interval}
  */
  readonly radioStatsInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_timers#rogue_ap_cleanup WirelesscontrollerTimers#rogue_ap_cleanup}
  */
  readonly rogueApCleanup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_timers#rogue_ap_log WirelesscontrollerTimers#rogue_ap_log}
  */
  readonly rogueApLog?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_timers#rogue_sta_cleanup WirelesscontrollerTimers#rogue_sta_cleanup}
  */
  readonly rogueStaCleanup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_timers#sta_cap_cleanup WirelesscontrollerTimers#sta_cap_cleanup}
  */
  readonly staCapCleanup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_timers#sta_capability_interval WirelesscontrollerTimers#sta_capability_interval}
  */
  readonly staCapabilityInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_timers#sta_locate_timer WirelesscontrollerTimers#sta_locate_timer}
  */
  readonly staLocateTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_timers#sta_stats_interval WirelesscontrollerTimers#sta_stats_interval}
  */
  readonly staStatsInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_timers#vap_stats_interval WirelesscontrollerTimers#vap_stats_interval}
  */
  readonly vapStatsInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_timers#wids_entry_cleanup WirelesscontrollerTimers#wids_entry_cleanup}
  */
  readonly widsEntryCleanup?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_timers fmgdevice_wirelesscontroller_timers}
*/
export class WirelesscontrollerTimers extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_wirelesscontroller_timers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelesscontrollerTimers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelesscontrollerTimers to import
  * @param importFromId The id of the existing WirelesscontrollerTimers that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_timers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelesscontrollerTimers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_wirelesscontroller_timers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_timers fmgdevice_wirelesscontroller_timers} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelesscontrollerTimersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WirelesscontrollerTimersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_wirelesscontroller_timers',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
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
    this._deviceName = config.deviceName;
    this._discoveryInterval = config.discoveryInterval;
    this._drmaInterval = config.drmaInterval;
    this._echoInterval = config.echoInterval;
    this._fakeApLog = config.fakeApLog;
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
    this._staStatsInterval = config.staStatsInterval;
    this._vapStatsInterval = config.vapStatsInterval;
    this._widsEntryCleanup = config.widsEntryCleanup;
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

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
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
      device_name: cdktf.stringToTerraform(this._deviceName),
      discovery_interval: cdktf.numberToTerraform(this._discoveryInterval),
      drma_interval: cdktf.numberToTerraform(this._drmaInterval),
      echo_interval: cdktf.numberToTerraform(this._echoInterval),
      fake_ap_log: cdktf.numberToTerraform(this._fakeApLog),
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
      sta_stats_interval: cdktf.numberToTerraform(this._staStatsInterval),
      vap_stats_interval: cdktf.numberToTerraform(this._vapStatsInterval),
      wids_entry_cleanup: cdktf.numberToTerraform(this._widsEntryCleanup),
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
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      wids_entry_cleanup: {
        value: cdktf.numberToHclTerraform(this._widsEntryCleanup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
