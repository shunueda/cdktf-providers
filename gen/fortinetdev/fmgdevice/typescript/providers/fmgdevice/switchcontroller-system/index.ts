// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchcontrollerSystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_system#caputp_echo_interval SwitchcontrollerSystem#caputp_echo_interval}
  */
  readonly caputpEchoInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_system#caputp_max_retransmit SwitchcontrollerSystem#caputp_max_retransmit}
  */
  readonly caputpMaxRetransmit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_system#data_sync_interval SwitchcontrollerSystem#data_sync_interval}
  */
  readonly dataSyncInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_system#device_name SwitchcontrollerSystem#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_system#dynamic_periodic_interval SwitchcontrollerSystem#dynamic_periodic_interval}
  */
  readonly dynamicPeriodicInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_system#id SwitchcontrollerSystem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_system#iot_holdoff SwitchcontrollerSystem#iot_holdoff}
  */
  readonly iotHoldoff?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_system#iot_mac_idle SwitchcontrollerSystem#iot_mac_idle}
  */
  readonly iotMacIdle?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_system#iot_scan_interval SwitchcontrollerSystem#iot_scan_interval}
  */
  readonly iotScanInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_system#iot_weight_threshold SwitchcontrollerSystem#iot_weight_threshold}
  */
  readonly iotWeightThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_system#nac_periodic_interval SwitchcontrollerSystem#nac_periodic_interval}
  */
  readonly nacPeriodicInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_system#parallel_process SwitchcontrollerSystem#parallel_process}
  */
  readonly parallelProcess?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_system#parallel_process_override SwitchcontrollerSystem#parallel_process_override}
  */
  readonly parallelProcessOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_system#tunnel_mode SwitchcontrollerSystem#tunnel_mode}
  */
  readonly tunnelMode?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_system fmgdevice_switchcontroller_system}
*/
export class SwitchcontrollerSystem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_switchcontroller_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchcontrollerSystem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchcontrollerSystem to import
  * @param importFromId The id of the existing SwitchcontrollerSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchcontrollerSystem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_switchcontroller_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_system fmgdevice_switchcontroller_system} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchcontrollerSystemConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchcontrollerSystemConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_switchcontroller_system',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._caputpEchoInterval = config.caputpEchoInterval;
    this._caputpMaxRetransmit = config.caputpMaxRetransmit;
    this._dataSyncInterval = config.dataSyncInterval;
    this._deviceName = config.deviceName;
    this._dynamicPeriodicInterval = config.dynamicPeriodicInterval;
    this._id = config.id;
    this._iotHoldoff = config.iotHoldoff;
    this._iotMacIdle = config.iotMacIdle;
    this._iotScanInterval = config.iotScanInterval;
    this._iotWeightThreshold = config.iotWeightThreshold;
    this._nacPeriodicInterval = config.nacPeriodicInterval;
    this._parallelProcess = config.parallelProcess;
    this._parallelProcessOverride = config.parallelProcessOverride;
    this._tunnelMode = config.tunnelMode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // caputp_echo_interval - computed: false, optional: true, required: false
  private _caputpEchoInterval?: number; 
  public get caputpEchoInterval() {
    return this.getNumberAttribute('caputp_echo_interval');
  }
  public set caputpEchoInterval(value: number) {
    this._caputpEchoInterval = value;
  }
  public resetCaputpEchoInterval() {
    this._caputpEchoInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caputpEchoIntervalInput() {
    return this._caputpEchoInterval;
  }

  // caputp_max_retransmit - computed: true, optional: true, required: false
  private _caputpMaxRetransmit?: number; 
  public get caputpMaxRetransmit() {
    return this.getNumberAttribute('caputp_max_retransmit');
  }
  public set caputpMaxRetransmit(value: number) {
    this._caputpMaxRetransmit = value;
  }
  public resetCaputpMaxRetransmit() {
    this._caputpMaxRetransmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caputpMaxRetransmitInput() {
    return this._caputpMaxRetransmit;
  }

  // data_sync_interval - computed: true, optional: true, required: false
  private _dataSyncInterval?: number; 
  public get dataSyncInterval() {
    return this.getNumberAttribute('data_sync_interval');
  }
  public set dataSyncInterval(value: number) {
    this._dataSyncInterval = value;
  }
  public resetDataSyncInterval() {
    this._dataSyncInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSyncIntervalInput() {
    return this._dataSyncInterval;
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

  // dynamic_periodic_interval - computed: true, optional: true, required: false
  private _dynamicPeriodicInterval?: number; 
  public get dynamicPeriodicInterval() {
    return this.getNumberAttribute('dynamic_periodic_interval');
  }
  public set dynamicPeriodicInterval(value: number) {
    this._dynamicPeriodicInterval = value;
  }
  public resetDynamicPeriodicInterval() {
    this._dynamicPeriodicInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicPeriodicIntervalInput() {
    return this._dynamicPeriodicInterval;
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

  // iot_holdoff - computed: true, optional: true, required: false
  private _iotHoldoff?: number; 
  public get iotHoldoff() {
    return this.getNumberAttribute('iot_holdoff');
  }
  public set iotHoldoff(value: number) {
    this._iotHoldoff = value;
  }
  public resetIotHoldoff() {
    this._iotHoldoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotHoldoffInput() {
    return this._iotHoldoff;
  }

  // iot_mac_idle - computed: true, optional: true, required: false
  private _iotMacIdle?: number; 
  public get iotMacIdle() {
    return this.getNumberAttribute('iot_mac_idle');
  }
  public set iotMacIdle(value: number) {
    this._iotMacIdle = value;
  }
  public resetIotMacIdle() {
    this._iotMacIdle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotMacIdleInput() {
    return this._iotMacIdle;
  }

  // iot_scan_interval - computed: true, optional: true, required: false
  private _iotScanInterval?: number; 
  public get iotScanInterval() {
    return this.getNumberAttribute('iot_scan_interval');
  }
  public set iotScanInterval(value: number) {
    this._iotScanInterval = value;
  }
  public resetIotScanInterval() {
    this._iotScanInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotScanIntervalInput() {
    return this._iotScanInterval;
  }

  // iot_weight_threshold - computed: true, optional: true, required: false
  private _iotWeightThreshold?: number; 
  public get iotWeightThreshold() {
    return this.getNumberAttribute('iot_weight_threshold');
  }
  public set iotWeightThreshold(value: number) {
    this._iotWeightThreshold = value;
  }
  public resetIotWeightThreshold() {
    this._iotWeightThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotWeightThresholdInput() {
    return this._iotWeightThreshold;
  }

  // nac_periodic_interval - computed: true, optional: true, required: false
  private _nacPeriodicInterval?: number; 
  public get nacPeriodicInterval() {
    return this.getNumberAttribute('nac_periodic_interval');
  }
  public set nacPeriodicInterval(value: number) {
    this._nacPeriodicInterval = value;
  }
  public resetNacPeriodicInterval() {
    this._nacPeriodicInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nacPeriodicIntervalInput() {
    return this._nacPeriodicInterval;
  }

  // parallel_process - computed: true, optional: true, required: false
  private _parallelProcess?: number; 
  public get parallelProcess() {
    return this.getNumberAttribute('parallel_process');
  }
  public set parallelProcess(value: number) {
    this._parallelProcess = value;
  }
  public resetParallelProcess() {
    this._parallelProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelProcessInput() {
    return this._parallelProcess;
  }

  // parallel_process_override - computed: true, optional: true, required: false
  private _parallelProcessOverride?: string; 
  public get parallelProcessOverride() {
    return this.getStringAttribute('parallel_process_override');
  }
  public set parallelProcessOverride(value: string) {
    this._parallelProcessOverride = value;
  }
  public resetParallelProcessOverride() {
    this._parallelProcessOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelProcessOverrideInput() {
    return this._parallelProcessOverride;
  }

  // tunnel_mode - computed: true, optional: true, required: false
  private _tunnelMode?: string; 
  public get tunnelMode() {
    return this.getStringAttribute('tunnel_mode');
  }
  public set tunnelMode(value: string) {
    this._tunnelMode = value;
  }
  public resetTunnelMode() {
    this._tunnelMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelModeInput() {
    return this._tunnelMode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      caputp_echo_interval: cdktf.numberToTerraform(this._caputpEchoInterval),
      caputp_max_retransmit: cdktf.numberToTerraform(this._caputpMaxRetransmit),
      data_sync_interval: cdktf.numberToTerraform(this._dataSyncInterval),
      device_name: cdktf.stringToTerraform(this._deviceName),
      dynamic_periodic_interval: cdktf.numberToTerraform(this._dynamicPeriodicInterval),
      id: cdktf.stringToTerraform(this._id),
      iot_holdoff: cdktf.numberToTerraform(this._iotHoldoff),
      iot_mac_idle: cdktf.numberToTerraform(this._iotMacIdle),
      iot_scan_interval: cdktf.numberToTerraform(this._iotScanInterval),
      iot_weight_threshold: cdktf.numberToTerraform(this._iotWeightThreshold),
      nac_periodic_interval: cdktf.numberToTerraform(this._nacPeriodicInterval),
      parallel_process: cdktf.numberToTerraform(this._parallelProcess),
      parallel_process_override: cdktf.stringToTerraform(this._parallelProcessOverride),
      tunnel_mode: cdktf.stringToTerraform(this._tunnelMode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      caputp_echo_interval: {
        value: cdktf.numberToHclTerraform(this._caputpEchoInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      caputp_max_retransmit: {
        value: cdktf.numberToHclTerraform(this._caputpMaxRetransmit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_sync_interval: {
        value: cdktf.numberToHclTerraform(this._dataSyncInterval),
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
      dynamic_periodic_interval: {
        value: cdktf.numberToHclTerraform(this._dynamicPeriodicInterval),
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
      iot_holdoff: {
        value: cdktf.numberToHclTerraform(this._iotHoldoff),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      iot_mac_idle: {
        value: cdktf.numberToHclTerraform(this._iotMacIdle),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      iot_scan_interval: {
        value: cdktf.numberToHclTerraform(this._iotScanInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      iot_weight_threshold: {
        value: cdktf.numberToHclTerraform(this._iotWeightThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nac_periodic_interval: {
        value: cdktf.numberToHclTerraform(this._nacPeriodicInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      parallel_process: {
        value: cdktf.numberToHclTerraform(this._parallelProcess),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      parallel_process_override: {
        value: cdktf.stringToHclTerraform(this._parallelProcessOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_mode: {
        value: cdktf.stringToHclTerraform(this._tunnelMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
