// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_radio3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelesscontrollerWtpRadio3AConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_radio3#auto_power_high WirelesscontrollerWtpRadio3A#auto_power_high}
  */
  readonly autoPowerHigh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_radio3#auto_power_level WirelesscontrollerWtpRadio3A#auto_power_level}
  */
  readonly autoPowerLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_radio3#auto_power_low WirelesscontrollerWtpRadio3A#auto_power_low}
  */
  readonly autoPowerLow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_radio3#auto_power_target WirelesscontrollerWtpRadio3A#auto_power_target}
  */
  readonly autoPowerTarget?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_radio3#band WirelesscontrollerWtpRadio3A#band}
  */
  readonly band?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_radio3#channel WirelesscontrollerWtpRadio3A#channel}
  */
  readonly channel?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_radio3#device_name WirelesscontrollerWtpRadio3A#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_radio3#device_vdom WirelesscontrollerWtpRadio3A#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_radio3#drma_manual_mode WirelesscontrollerWtpRadio3A#drma_manual_mode}
  */
  readonly drmaManualMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_radio3#id WirelesscontrollerWtpRadio3A#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_radio3#override_analysis WirelesscontrollerWtpRadio3A#override_analysis}
  */
  readonly overrideAnalysis?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_radio3#override_band WirelesscontrollerWtpRadio3A#override_band}
  */
  readonly overrideBand?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_radio3#override_channel WirelesscontrollerWtpRadio3A#override_channel}
  */
  readonly overrideChannel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_radio3#override_txpower WirelesscontrollerWtpRadio3A#override_txpower}
  */
  readonly overrideTxpower?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_radio3#override_vaps WirelesscontrollerWtpRadio3A#override_vaps}
  */
  readonly overrideVaps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_radio3#power_level WirelesscontrollerWtpRadio3A#power_level}
  */
  readonly powerLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_radio3#power_mode WirelesscontrollerWtpRadio3A#power_mode}
  */
  readonly powerMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_radio3#power_value WirelesscontrollerWtpRadio3A#power_value}
  */
  readonly powerValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_radio3#radio_id WirelesscontrollerWtpRadio3A#radio_id}
  */
  readonly radioId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_radio3#spectrum_analysis WirelesscontrollerWtpRadio3A#spectrum_analysis}
  */
  readonly spectrumAnalysis?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_radio3#vap1 WirelesscontrollerWtpRadio3A#vap1}
  */
  readonly vap1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_radio3#vap2 WirelesscontrollerWtpRadio3A#vap2}
  */
  readonly vap2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_radio3#vap3 WirelesscontrollerWtpRadio3A#vap3}
  */
  readonly vap3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_radio3#vap4 WirelesscontrollerWtpRadio3A#vap4}
  */
  readonly vap4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_radio3#vap5 WirelesscontrollerWtpRadio3A#vap5}
  */
  readonly vap5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_radio3#vap6 WirelesscontrollerWtpRadio3A#vap6}
  */
  readonly vap6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_radio3#vap7 WirelesscontrollerWtpRadio3A#vap7}
  */
  readonly vap7?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_radio3#vap8 WirelesscontrollerWtpRadio3A#vap8}
  */
  readonly vap8?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_radio3#vap_all WirelesscontrollerWtpRadio3A#vap_all}
  */
  readonly vapAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_radio3#vaps WirelesscontrollerWtpRadio3A#vaps}
  */
  readonly vaps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_radio3#wtp WirelesscontrollerWtpRadio3A#wtp}
  */
  readonly wtp: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_radio3 fmgdevice_wirelesscontroller_wtp_radio3}
*/
export class WirelesscontrollerWtpRadio3A extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_wirelesscontroller_wtp_radio3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelesscontrollerWtpRadio3A resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelesscontrollerWtpRadio3A to import
  * @param importFromId The id of the existing WirelesscontrollerWtpRadio3A that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_radio3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelesscontrollerWtpRadio3A to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_wirelesscontroller_wtp_radio3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_radio3 fmgdevice_wirelesscontroller_wtp_radio3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelesscontrollerWtpRadio3AConfig
  */
  public constructor(scope: Construct, id: string, config: WirelesscontrollerWtpRadio3AConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_wirelesscontroller_wtp_radio3',
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
    this._autoPowerHigh = config.autoPowerHigh;
    this._autoPowerLevel = config.autoPowerLevel;
    this._autoPowerLow = config.autoPowerLow;
    this._autoPowerTarget = config.autoPowerTarget;
    this._band = config.band;
    this._channel = config.channel;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._drmaManualMode = config.drmaManualMode;
    this._id = config.id;
    this._overrideAnalysis = config.overrideAnalysis;
    this._overrideBand = config.overrideBand;
    this._overrideChannel = config.overrideChannel;
    this._overrideTxpower = config.overrideTxpower;
    this._overrideVaps = config.overrideVaps;
    this._powerLevel = config.powerLevel;
    this._powerMode = config.powerMode;
    this._powerValue = config.powerValue;
    this._radioId = config.radioId;
    this._spectrumAnalysis = config.spectrumAnalysis;
    this._vap1 = config.vap1;
    this._vap2 = config.vap2;
    this._vap3 = config.vap3;
    this._vap4 = config.vap4;
    this._vap5 = config.vap5;
    this._vap6 = config.vap6;
    this._vap7 = config.vap7;
    this._vap8 = config.vap8;
    this._vapAll = config.vapAll;
    this._vaps = config.vaps;
    this._wtp = config.wtp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_power_high - computed: false, optional: true, required: false
  private _autoPowerHigh?: number; 
  public get autoPowerHigh() {
    return this.getNumberAttribute('auto_power_high');
  }
  public set autoPowerHigh(value: number) {
    this._autoPowerHigh = value;
  }
  public resetAutoPowerHigh() {
    this._autoPowerHigh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPowerHighInput() {
    return this._autoPowerHigh;
  }

  // auto_power_level - computed: false, optional: true, required: false
  private _autoPowerLevel?: string; 
  public get autoPowerLevel() {
    return this.getStringAttribute('auto_power_level');
  }
  public set autoPowerLevel(value: string) {
    this._autoPowerLevel = value;
  }
  public resetAutoPowerLevel() {
    this._autoPowerLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPowerLevelInput() {
    return this._autoPowerLevel;
  }

  // auto_power_low - computed: false, optional: true, required: false
  private _autoPowerLow?: number; 
  public get autoPowerLow() {
    return this.getNumberAttribute('auto_power_low');
  }
  public set autoPowerLow(value: number) {
    this._autoPowerLow = value;
  }
  public resetAutoPowerLow() {
    this._autoPowerLow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPowerLowInput() {
    return this._autoPowerLow;
  }

  // auto_power_target - computed: true, optional: true, required: false
  private _autoPowerTarget?: string; 
  public get autoPowerTarget() {
    return this.getStringAttribute('auto_power_target');
  }
  public set autoPowerTarget(value: string) {
    this._autoPowerTarget = value;
  }
  public resetAutoPowerTarget() {
    this._autoPowerTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPowerTargetInput() {
    return this._autoPowerTarget;
  }

  // band - computed: true, optional: true, required: false
  private _band?: string[]; 
  public get band() {
    return cdktf.Fn.tolist(this.getListAttribute('band'));
  }
  public set band(value: string[]) {
    this._band = value;
  }
  public resetBand() {
    this._band = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandInput() {
    return this._band;
  }

  // channel - computed: true, optional: true, required: false
  private _channel?: string[]; 
  public get channel() {
    return cdktf.Fn.tolist(this.getListAttribute('channel'));
  }
  public set channel(value: string[]) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
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

  // drma_manual_mode - computed: false, optional: true, required: false
  private _drmaManualMode?: string; 
  public get drmaManualMode() {
    return this.getStringAttribute('drma_manual_mode');
  }
  public set drmaManualMode(value: string) {
    this._drmaManualMode = value;
  }
  public resetDrmaManualMode() {
    this._drmaManualMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drmaManualModeInput() {
    return this._drmaManualMode;
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

  // override_analysis - computed: false, optional: true, required: false
  private _overrideAnalysis?: string; 
  public get overrideAnalysis() {
    return this.getStringAttribute('override_analysis');
  }
  public set overrideAnalysis(value: string) {
    this._overrideAnalysis = value;
  }
  public resetOverrideAnalysis() {
    this._overrideAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideAnalysisInput() {
    return this._overrideAnalysis;
  }

  // override_band - computed: true, optional: true, required: false
  private _overrideBand?: string; 
  public get overrideBand() {
    return this.getStringAttribute('override_band');
  }
  public set overrideBand(value: string) {
    this._overrideBand = value;
  }
  public resetOverrideBand() {
    this._overrideBand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideBandInput() {
    return this._overrideBand;
  }

  // override_channel - computed: true, optional: true, required: false
  private _overrideChannel?: string; 
  public get overrideChannel() {
    return this.getStringAttribute('override_channel');
  }
  public set overrideChannel(value: string) {
    this._overrideChannel = value;
  }
  public resetOverrideChannel() {
    this._overrideChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideChannelInput() {
    return this._overrideChannel;
  }

  // override_txpower - computed: true, optional: true, required: false
  private _overrideTxpower?: string; 
  public get overrideTxpower() {
    return this.getStringAttribute('override_txpower');
  }
  public set overrideTxpower(value: string) {
    this._overrideTxpower = value;
  }
  public resetOverrideTxpower() {
    this._overrideTxpower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideTxpowerInput() {
    return this._overrideTxpower;
  }

  // override_vaps - computed: true, optional: true, required: false
  private _overrideVaps?: string; 
  public get overrideVaps() {
    return this.getStringAttribute('override_vaps');
  }
  public set overrideVaps(value: string) {
    this._overrideVaps = value;
  }
  public resetOverrideVaps() {
    this._overrideVaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideVapsInput() {
    return this._overrideVaps;
  }

  // power_level - computed: false, optional: true, required: false
  private _powerLevel?: number; 
  public get powerLevel() {
    return this.getNumberAttribute('power_level');
  }
  public set powerLevel(value: number) {
    this._powerLevel = value;
  }
  public resetPowerLevel() {
    this._powerLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerLevelInput() {
    return this._powerLevel;
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

  // power_value - computed: true, optional: true, required: false
  private _powerValue?: number; 
  public get powerValue() {
    return this.getNumberAttribute('power_value');
  }
  public set powerValue(value: number) {
    this._powerValue = value;
  }
  public resetPowerValue() {
    this._powerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerValueInput() {
    return this._powerValue;
  }

  // radio_id - computed: true, optional: true, required: false
  private _radioId?: number; 
  public get radioId() {
    return this.getNumberAttribute('radio_id');
  }
  public set radioId(value: number) {
    this._radioId = value;
  }
  public resetRadioId() {
    this._radioId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioIdInput() {
    return this._radioId;
  }

  // spectrum_analysis - computed: false, optional: true, required: false
  private _spectrumAnalysis?: string; 
  public get spectrumAnalysis() {
    return this.getStringAttribute('spectrum_analysis');
  }
  public set spectrumAnalysis(value: string) {
    this._spectrumAnalysis = value;
  }
  public resetSpectrumAnalysis() {
    this._spectrumAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spectrumAnalysisInput() {
    return this._spectrumAnalysis;
  }

  // vap1 - computed: false, optional: true, required: false
  private _vap1?: string; 
  public get vap1() {
    return this.getStringAttribute('vap1');
  }
  public set vap1(value: string) {
    this._vap1 = value;
  }
  public resetVap1() {
    this._vap1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap1Input() {
    return this._vap1;
  }

  // vap2 - computed: false, optional: true, required: false
  private _vap2?: string; 
  public get vap2() {
    return this.getStringAttribute('vap2');
  }
  public set vap2(value: string) {
    this._vap2 = value;
  }
  public resetVap2() {
    this._vap2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap2Input() {
    return this._vap2;
  }

  // vap3 - computed: false, optional: true, required: false
  private _vap3?: string; 
  public get vap3() {
    return this.getStringAttribute('vap3');
  }
  public set vap3(value: string) {
    this._vap3 = value;
  }
  public resetVap3() {
    this._vap3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap3Input() {
    return this._vap3;
  }

  // vap4 - computed: false, optional: true, required: false
  private _vap4?: string; 
  public get vap4() {
    return this.getStringAttribute('vap4');
  }
  public set vap4(value: string) {
    this._vap4 = value;
  }
  public resetVap4() {
    this._vap4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap4Input() {
    return this._vap4;
  }

  // vap5 - computed: false, optional: true, required: false
  private _vap5?: string; 
  public get vap5() {
    return this.getStringAttribute('vap5');
  }
  public set vap5(value: string) {
    this._vap5 = value;
  }
  public resetVap5() {
    this._vap5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap5Input() {
    return this._vap5;
  }

  // vap6 - computed: false, optional: true, required: false
  private _vap6?: string; 
  public get vap6() {
    return this.getStringAttribute('vap6');
  }
  public set vap6(value: string) {
    this._vap6 = value;
  }
  public resetVap6() {
    this._vap6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap6Input() {
    return this._vap6;
  }

  // vap7 - computed: false, optional: true, required: false
  private _vap7?: string; 
  public get vap7() {
    return this.getStringAttribute('vap7');
  }
  public set vap7(value: string) {
    this._vap7 = value;
  }
  public resetVap7() {
    this._vap7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap7Input() {
    return this._vap7;
  }

  // vap8 - computed: false, optional: true, required: false
  private _vap8?: string; 
  public get vap8() {
    return this.getStringAttribute('vap8');
  }
  public set vap8(value: string) {
    this._vap8 = value;
  }
  public resetVap8() {
    this._vap8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap8Input() {
    return this._vap8;
  }

  // vap_all - computed: false, optional: true, required: false
  private _vapAll?: string; 
  public get vapAll() {
    return this.getStringAttribute('vap_all');
  }
  public set vapAll(value: string) {
    this._vapAll = value;
  }
  public resetVapAll() {
    this._vapAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vapAllInput() {
    return this._vapAll;
  }

  // vaps - computed: true, optional: true, required: false
  private _vaps?: string[]; 
  public get vaps() {
    return cdktf.Fn.tolist(this.getListAttribute('vaps'));
  }
  public set vaps(value: string[]) {
    this._vaps = value;
  }
  public resetVaps() {
    this._vaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vapsInput() {
    return this._vaps;
  }

  // wtp - computed: false, optional: false, required: true
  private _wtp?: string; 
  public get wtp() {
    return this.getStringAttribute('wtp');
  }
  public set wtp(value: string) {
    this._wtp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wtpInput() {
    return this._wtp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_power_high: cdktf.numberToTerraform(this._autoPowerHigh),
      auto_power_level: cdktf.stringToTerraform(this._autoPowerLevel),
      auto_power_low: cdktf.numberToTerraform(this._autoPowerLow),
      auto_power_target: cdktf.stringToTerraform(this._autoPowerTarget),
      band: cdktf.listMapper(cdktf.stringToTerraform, false)(this._band),
      channel: cdktf.listMapper(cdktf.stringToTerraform, false)(this._channel),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      drma_manual_mode: cdktf.stringToTerraform(this._drmaManualMode),
      id: cdktf.stringToTerraform(this._id),
      override_analysis: cdktf.stringToTerraform(this._overrideAnalysis),
      override_band: cdktf.stringToTerraform(this._overrideBand),
      override_channel: cdktf.stringToTerraform(this._overrideChannel),
      override_txpower: cdktf.stringToTerraform(this._overrideTxpower),
      override_vaps: cdktf.stringToTerraform(this._overrideVaps),
      power_level: cdktf.numberToTerraform(this._powerLevel),
      power_mode: cdktf.stringToTerraform(this._powerMode),
      power_value: cdktf.numberToTerraform(this._powerValue),
      radio_id: cdktf.numberToTerraform(this._radioId),
      spectrum_analysis: cdktf.stringToTerraform(this._spectrumAnalysis),
      vap1: cdktf.stringToTerraform(this._vap1),
      vap2: cdktf.stringToTerraform(this._vap2),
      vap3: cdktf.stringToTerraform(this._vap3),
      vap4: cdktf.stringToTerraform(this._vap4),
      vap5: cdktf.stringToTerraform(this._vap5),
      vap6: cdktf.stringToTerraform(this._vap6),
      vap7: cdktf.stringToTerraform(this._vap7),
      vap8: cdktf.stringToTerraform(this._vap8),
      vap_all: cdktf.stringToTerraform(this._vapAll),
      vaps: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vaps),
      wtp: cdktf.stringToTerraform(this._wtp),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_power_high: {
        value: cdktf.numberToHclTerraform(this._autoPowerHigh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_power_level: {
        value: cdktf.stringToHclTerraform(this._autoPowerLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_power_low: {
        value: cdktf.numberToHclTerraform(this._autoPowerLow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_power_target: {
        value: cdktf.stringToHclTerraform(this._autoPowerTarget),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      band: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._band),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      channel: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._channel),
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
      drma_manual_mode: {
        value: cdktf.stringToHclTerraform(this._drmaManualMode),
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
      override_analysis: {
        value: cdktf.stringToHclTerraform(this._overrideAnalysis),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_band: {
        value: cdktf.stringToHclTerraform(this._overrideBand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_channel: {
        value: cdktf.stringToHclTerraform(this._overrideChannel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_txpower: {
        value: cdktf.stringToHclTerraform(this._overrideTxpower),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_vaps: {
        value: cdktf.stringToHclTerraform(this._overrideVaps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      power_level: {
        value: cdktf.numberToHclTerraform(this._powerLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      power_mode: {
        value: cdktf.stringToHclTerraform(this._powerMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      power_value: {
        value: cdktf.numberToHclTerraform(this._powerValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radio_id: {
        value: cdktf.numberToHclTerraform(this._radioId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spectrum_analysis: {
        value: cdktf.stringToHclTerraform(this._spectrumAnalysis),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vap1: {
        value: cdktf.stringToHclTerraform(this._vap1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vap2: {
        value: cdktf.stringToHclTerraform(this._vap2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vap3: {
        value: cdktf.stringToHclTerraform(this._vap3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vap4: {
        value: cdktf.stringToHclTerraform(this._vap4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vap5: {
        value: cdktf.stringToHclTerraform(this._vap5),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vap6: {
        value: cdktf.stringToHclTerraform(this._vap6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vap7: {
        value: cdktf.stringToHclTerraform(this._vap7),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vap8: {
        value: cdktf.stringToHclTerraform(this._vap8),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vap_all: {
        value: cdktf.stringToHclTerraform(this._vapAll),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vaps: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vaps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      wtp: {
        value: cdktf.stringToHclTerraform(this._wtp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
