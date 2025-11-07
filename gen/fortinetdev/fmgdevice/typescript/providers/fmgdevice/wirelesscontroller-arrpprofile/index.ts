// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_arrpprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelesscontrollerArrpprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_arrpprofile#comment WirelesscontrollerArrpprofile#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_arrpprofile#darrp_optimize WirelesscontrollerArrpprofile#darrp_optimize}
  */
  readonly darrpOptimize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_arrpprofile#darrp_optimize_schedules WirelesscontrollerArrpprofile#darrp_optimize_schedules}
  */
  readonly darrpOptimizeSchedules?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_arrpprofile#device_name WirelesscontrollerArrpprofile#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_arrpprofile#device_vdom WirelesscontrollerArrpprofile#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_arrpprofile#id WirelesscontrollerArrpprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_arrpprofile#include_dfs_channel WirelesscontrollerArrpprofile#include_dfs_channel}
  */
  readonly includeDfsChannel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_arrpprofile#include_weather_channel WirelesscontrollerArrpprofile#include_weather_channel}
  */
  readonly includeWeatherChannel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_arrpprofile#monitor_period WirelesscontrollerArrpprofile#monitor_period}
  */
  readonly monitorPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_arrpprofile#name WirelesscontrollerArrpprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_arrpprofile#override_darrp_optimize WirelesscontrollerArrpprofile#override_darrp_optimize}
  */
  readonly overrideDarrpOptimize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_arrpprofile#selection_period WirelesscontrollerArrpprofile#selection_period}
  */
  readonly selectionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_arrpprofile#threshold_ap WirelesscontrollerArrpprofile#threshold_ap}
  */
  readonly thresholdAp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_arrpprofile#threshold_channel_load WirelesscontrollerArrpprofile#threshold_channel_load}
  */
  readonly thresholdChannelLoad?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_arrpprofile#threshold_noise_floor WirelesscontrollerArrpprofile#threshold_noise_floor}
  */
  readonly thresholdNoiseFloor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_arrpprofile#threshold_rx_errors WirelesscontrollerArrpprofile#threshold_rx_errors}
  */
  readonly thresholdRxErrors?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_arrpprofile#threshold_spectral_rssi WirelesscontrollerArrpprofile#threshold_spectral_rssi}
  */
  readonly thresholdSpectralRssi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_arrpprofile#threshold_tx_retries WirelesscontrollerArrpprofile#threshold_tx_retries}
  */
  readonly thresholdTxRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_arrpprofile#weight_channel_load WirelesscontrollerArrpprofile#weight_channel_load}
  */
  readonly weightChannelLoad?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_arrpprofile#weight_dfs_channel WirelesscontrollerArrpprofile#weight_dfs_channel}
  */
  readonly weightDfsChannel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_arrpprofile#weight_managed_ap WirelesscontrollerArrpprofile#weight_managed_ap}
  */
  readonly weightManagedAp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_arrpprofile#weight_noise_floor WirelesscontrollerArrpprofile#weight_noise_floor}
  */
  readonly weightNoiseFloor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_arrpprofile#weight_rogue_ap WirelesscontrollerArrpprofile#weight_rogue_ap}
  */
  readonly weightRogueAp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_arrpprofile#weight_spectral_rssi WirelesscontrollerArrpprofile#weight_spectral_rssi}
  */
  readonly weightSpectralRssi?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_arrpprofile#weight_weather_channel WirelesscontrollerArrpprofile#weight_weather_channel}
  */
  readonly weightWeatherChannel?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_arrpprofile fmgdevice_wirelesscontroller_arrpprofile}
*/
export class WirelesscontrollerArrpprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_wirelesscontroller_arrpprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelesscontrollerArrpprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelesscontrollerArrpprofile to import
  * @param importFromId The id of the existing WirelesscontrollerArrpprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_arrpprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelesscontrollerArrpprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_wirelesscontroller_arrpprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_arrpprofile fmgdevice_wirelesscontroller_arrpprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelesscontrollerArrpprofileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WirelesscontrollerArrpprofileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_wirelesscontroller_arrpprofile',
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
    this._comment = config.comment;
    this._darrpOptimize = config.darrpOptimize;
    this._darrpOptimizeSchedules = config.darrpOptimizeSchedules;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._id = config.id;
    this._includeDfsChannel = config.includeDfsChannel;
    this._includeWeatherChannel = config.includeWeatherChannel;
    this._monitorPeriod = config.monitorPeriod;
    this._name = config.name;
    this._overrideDarrpOptimize = config.overrideDarrpOptimize;
    this._selectionPeriod = config.selectionPeriod;
    this._thresholdAp = config.thresholdAp;
    this._thresholdChannelLoad = config.thresholdChannelLoad;
    this._thresholdNoiseFloor = config.thresholdNoiseFloor;
    this._thresholdRxErrors = config.thresholdRxErrors;
    this._thresholdSpectralRssi = config.thresholdSpectralRssi;
    this._thresholdTxRetries = config.thresholdTxRetries;
    this._weightChannelLoad = config.weightChannelLoad;
    this._weightDfsChannel = config.weightDfsChannel;
    this._weightManagedAp = config.weightManagedAp;
    this._weightNoiseFloor = config.weightNoiseFloor;
    this._weightRogueAp = config.weightRogueAp;
    this._weightSpectralRssi = config.weightSpectralRssi;
    this._weightWeatherChannel = config.weightWeatherChannel;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
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

  // darrp_optimize_schedules - computed: true, optional: true, required: false
  private _darrpOptimizeSchedules?: string[]; 
  public get darrpOptimizeSchedules() {
    return cdktf.Fn.tolist(this.getListAttribute('darrp_optimize_schedules'));
  }
  public set darrpOptimizeSchedules(value: string[]) {
    this._darrpOptimizeSchedules = value;
  }
  public resetDarrpOptimizeSchedules() {
    this._darrpOptimizeSchedules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darrpOptimizeSchedulesInput() {
    return this._darrpOptimizeSchedules;
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

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
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

  // include_dfs_channel - computed: true, optional: true, required: false
  private _includeDfsChannel?: string; 
  public get includeDfsChannel() {
    return this.getStringAttribute('include_dfs_channel');
  }
  public set includeDfsChannel(value: string) {
    this._includeDfsChannel = value;
  }
  public resetIncludeDfsChannel() {
    this._includeDfsChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDfsChannelInput() {
    return this._includeDfsChannel;
  }

  // include_weather_channel - computed: true, optional: true, required: false
  private _includeWeatherChannel?: string; 
  public get includeWeatherChannel() {
    return this.getStringAttribute('include_weather_channel');
  }
  public set includeWeatherChannel(value: string) {
    this._includeWeatherChannel = value;
  }
  public resetIncludeWeatherChannel() {
    this._includeWeatherChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeWeatherChannelInput() {
    return this._includeWeatherChannel;
  }

  // monitor_period - computed: true, optional: true, required: false
  private _monitorPeriod?: number; 
  public get monitorPeriod() {
    return this.getNumberAttribute('monitor_period');
  }
  public set monitorPeriod(value: number) {
    this._monitorPeriod = value;
  }
  public resetMonitorPeriod() {
    this._monitorPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorPeriodInput() {
    return this._monitorPeriod;
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

  // override_darrp_optimize - computed: true, optional: true, required: false
  private _overrideDarrpOptimize?: string; 
  public get overrideDarrpOptimize() {
    return this.getStringAttribute('override_darrp_optimize');
  }
  public set overrideDarrpOptimize(value: string) {
    this._overrideDarrpOptimize = value;
  }
  public resetOverrideDarrpOptimize() {
    this._overrideDarrpOptimize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideDarrpOptimizeInput() {
    return this._overrideDarrpOptimize;
  }

  // selection_period - computed: true, optional: true, required: false
  private _selectionPeriod?: number; 
  public get selectionPeriod() {
    return this.getNumberAttribute('selection_period');
  }
  public set selectionPeriod(value: number) {
    this._selectionPeriod = value;
  }
  public resetSelectionPeriod() {
    this._selectionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionPeriodInput() {
    return this._selectionPeriod;
  }

  // threshold_ap - computed: true, optional: true, required: false
  private _thresholdAp?: number; 
  public get thresholdAp() {
    return this.getNumberAttribute('threshold_ap');
  }
  public set thresholdAp(value: number) {
    this._thresholdAp = value;
  }
  public resetThresholdAp() {
    this._thresholdAp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdApInput() {
    return this._thresholdAp;
  }

  // threshold_channel_load - computed: true, optional: true, required: false
  private _thresholdChannelLoad?: number; 
  public get thresholdChannelLoad() {
    return this.getNumberAttribute('threshold_channel_load');
  }
  public set thresholdChannelLoad(value: number) {
    this._thresholdChannelLoad = value;
  }
  public resetThresholdChannelLoad() {
    this._thresholdChannelLoad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdChannelLoadInput() {
    return this._thresholdChannelLoad;
  }

  // threshold_noise_floor - computed: true, optional: true, required: false
  private _thresholdNoiseFloor?: string; 
  public get thresholdNoiseFloor() {
    return this.getStringAttribute('threshold_noise_floor');
  }
  public set thresholdNoiseFloor(value: string) {
    this._thresholdNoiseFloor = value;
  }
  public resetThresholdNoiseFloor() {
    this._thresholdNoiseFloor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdNoiseFloorInput() {
    return this._thresholdNoiseFloor;
  }

  // threshold_rx_errors - computed: true, optional: true, required: false
  private _thresholdRxErrors?: number; 
  public get thresholdRxErrors() {
    return this.getNumberAttribute('threshold_rx_errors');
  }
  public set thresholdRxErrors(value: number) {
    this._thresholdRxErrors = value;
  }
  public resetThresholdRxErrors() {
    this._thresholdRxErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdRxErrorsInput() {
    return this._thresholdRxErrors;
  }

  // threshold_spectral_rssi - computed: true, optional: true, required: false
  private _thresholdSpectralRssi?: string; 
  public get thresholdSpectralRssi() {
    return this.getStringAttribute('threshold_spectral_rssi');
  }
  public set thresholdSpectralRssi(value: string) {
    this._thresholdSpectralRssi = value;
  }
  public resetThresholdSpectralRssi() {
    this._thresholdSpectralRssi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdSpectralRssiInput() {
    return this._thresholdSpectralRssi;
  }

  // threshold_tx_retries - computed: true, optional: true, required: false
  private _thresholdTxRetries?: number; 
  public get thresholdTxRetries() {
    return this.getNumberAttribute('threshold_tx_retries');
  }
  public set thresholdTxRetries(value: number) {
    this._thresholdTxRetries = value;
  }
  public resetThresholdTxRetries() {
    this._thresholdTxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdTxRetriesInput() {
    return this._thresholdTxRetries;
  }

  // weight_channel_load - computed: true, optional: true, required: false
  private _weightChannelLoad?: number; 
  public get weightChannelLoad() {
    return this.getNumberAttribute('weight_channel_load');
  }
  public set weightChannelLoad(value: number) {
    this._weightChannelLoad = value;
  }
  public resetWeightChannelLoad() {
    this._weightChannelLoad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightChannelLoadInput() {
    return this._weightChannelLoad;
  }

  // weight_dfs_channel - computed: true, optional: true, required: false
  private _weightDfsChannel?: number; 
  public get weightDfsChannel() {
    return this.getNumberAttribute('weight_dfs_channel');
  }
  public set weightDfsChannel(value: number) {
    this._weightDfsChannel = value;
  }
  public resetWeightDfsChannel() {
    this._weightDfsChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightDfsChannelInput() {
    return this._weightDfsChannel;
  }

  // weight_managed_ap - computed: true, optional: true, required: false
  private _weightManagedAp?: number; 
  public get weightManagedAp() {
    return this.getNumberAttribute('weight_managed_ap');
  }
  public set weightManagedAp(value: number) {
    this._weightManagedAp = value;
  }
  public resetWeightManagedAp() {
    this._weightManagedAp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightManagedApInput() {
    return this._weightManagedAp;
  }

  // weight_noise_floor - computed: true, optional: true, required: false
  private _weightNoiseFloor?: number; 
  public get weightNoiseFloor() {
    return this.getNumberAttribute('weight_noise_floor');
  }
  public set weightNoiseFloor(value: number) {
    this._weightNoiseFloor = value;
  }
  public resetWeightNoiseFloor() {
    this._weightNoiseFloor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightNoiseFloorInput() {
    return this._weightNoiseFloor;
  }

  // weight_rogue_ap - computed: true, optional: true, required: false
  private _weightRogueAp?: number; 
  public get weightRogueAp() {
    return this.getNumberAttribute('weight_rogue_ap');
  }
  public set weightRogueAp(value: number) {
    this._weightRogueAp = value;
  }
  public resetWeightRogueAp() {
    this._weightRogueAp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightRogueApInput() {
    return this._weightRogueAp;
  }

  // weight_spectral_rssi - computed: true, optional: true, required: false
  private _weightSpectralRssi?: number; 
  public get weightSpectralRssi() {
    return this.getNumberAttribute('weight_spectral_rssi');
  }
  public set weightSpectralRssi(value: number) {
    this._weightSpectralRssi = value;
  }
  public resetWeightSpectralRssi() {
    this._weightSpectralRssi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightSpectralRssiInput() {
    return this._weightSpectralRssi;
  }

  // weight_weather_channel - computed: true, optional: true, required: false
  private _weightWeatherChannel?: number; 
  public get weightWeatherChannel() {
    return this.getNumberAttribute('weight_weather_channel');
  }
  public set weightWeatherChannel(value: number) {
    this._weightWeatherChannel = value;
  }
  public resetWeightWeatherChannel() {
    this._weightWeatherChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightWeatherChannelInput() {
    return this._weightWeatherChannel;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      darrp_optimize: cdktf.numberToTerraform(this._darrpOptimize),
      darrp_optimize_schedules: cdktf.listMapper(cdktf.stringToTerraform, false)(this._darrpOptimizeSchedules),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      id: cdktf.stringToTerraform(this._id),
      include_dfs_channel: cdktf.stringToTerraform(this._includeDfsChannel),
      include_weather_channel: cdktf.stringToTerraform(this._includeWeatherChannel),
      monitor_period: cdktf.numberToTerraform(this._monitorPeriod),
      name: cdktf.stringToTerraform(this._name),
      override_darrp_optimize: cdktf.stringToTerraform(this._overrideDarrpOptimize),
      selection_period: cdktf.numberToTerraform(this._selectionPeriod),
      threshold_ap: cdktf.numberToTerraform(this._thresholdAp),
      threshold_channel_load: cdktf.numberToTerraform(this._thresholdChannelLoad),
      threshold_noise_floor: cdktf.stringToTerraform(this._thresholdNoiseFloor),
      threshold_rx_errors: cdktf.numberToTerraform(this._thresholdRxErrors),
      threshold_spectral_rssi: cdktf.stringToTerraform(this._thresholdSpectralRssi),
      threshold_tx_retries: cdktf.numberToTerraform(this._thresholdTxRetries),
      weight_channel_load: cdktf.numberToTerraform(this._weightChannelLoad),
      weight_dfs_channel: cdktf.numberToTerraform(this._weightDfsChannel),
      weight_managed_ap: cdktf.numberToTerraform(this._weightManagedAp),
      weight_noise_floor: cdktf.numberToTerraform(this._weightNoiseFloor),
      weight_rogue_ap: cdktf.numberToTerraform(this._weightRogueAp),
      weight_spectral_rssi: cdktf.numberToTerraform(this._weightSpectralRssi),
      weight_weather_channel: cdktf.numberToTerraform(this._weightWeatherChannel),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
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
      darrp_optimize_schedules: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._darrpOptimizeSchedules),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
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
      include_dfs_channel: {
        value: cdktf.stringToHclTerraform(this._includeDfsChannel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_weather_channel: {
        value: cdktf.stringToHclTerraform(this._includeWeatherChannel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_period: {
        value: cdktf.numberToHclTerraform(this._monitorPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_darrp_optimize: {
        value: cdktf.stringToHclTerraform(this._overrideDarrpOptimize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      selection_period: {
        value: cdktf.numberToHclTerraform(this._selectionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      threshold_ap: {
        value: cdktf.numberToHclTerraform(this._thresholdAp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      threshold_channel_load: {
        value: cdktf.numberToHclTerraform(this._thresholdChannelLoad),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      threshold_noise_floor: {
        value: cdktf.stringToHclTerraform(this._thresholdNoiseFloor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threshold_rx_errors: {
        value: cdktf.numberToHclTerraform(this._thresholdRxErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      threshold_spectral_rssi: {
        value: cdktf.stringToHclTerraform(this._thresholdSpectralRssi),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threshold_tx_retries: {
        value: cdktf.numberToHclTerraform(this._thresholdTxRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      weight_channel_load: {
        value: cdktf.numberToHclTerraform(this._weightChannelLoad),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      weight_dfs_channel: {
        value: cdktf.numberToHclTerraform(this._weightDfsChannel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      weight_managed_ap: {
        value: cdktf.numberToHclTerraform(this._weightManagedAp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      weight_noise_floor: {
        value: cdktf.numberToHclTerraform(this._weightNoiseFloor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      weight_rogue_ap: {
        value: cdktf.numberToHclTerraform(this._weightRogueAp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      weight_spectral_rssi: {
        value: cdktf.numberToHclTerraform(this._weightSpectralRssi),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      weight_weather_channel: {
        value: cdktf.numberToHclTerraform(this._weightWeatherChannel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
