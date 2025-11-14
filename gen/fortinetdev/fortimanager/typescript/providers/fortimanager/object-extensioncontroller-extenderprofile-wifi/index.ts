// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectExtensioncontrollerExtenderprofileWifiAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi#adom ObjectExtensioncontrollerExtenderprofileWifiA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi#country ObjectExtensioncontrollerExtenderprofileWifiA#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi#dfs ObjectExtensioncontrollerExtenderprofileWifiA#dfs}
  */
  readonly dfs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi#extender_profile ObjectExtensioncontrollerExtenderprofileWifiA#extender_profile}
  */
  readonly extenderProfile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi#id ObjectExtensioncontrollerExtenderprofileWifiA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi#scopetype ObjectExtensioncontrollerExtenderprofileWifiA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * radio_1 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi#radio_1 ObjectExtensioncontrollerExtenderprofileWifiA#radio_1}
  */
  readonly radio1?: ObjectExtensioncontrollerExtenderprofileWifiRadio1A;
  /**
  * radio_2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi#radio_2 ObjectExtensioncontrollerExtenderprofileWifiA#radio_2}
  */
  readonly radio2?: ObjectExtensioncontrollerExtenderprofileWifiRadio2A;
}
export interface ObjectExtensioncontrollerExtenderprofileWifiRadio1A {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi#band ObjectExtensioncontrollerExtenderprofileWifiA#band}
  */
  readonly band?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi#bandwidth ObjectExtensioncontrollerExtenderprofileWifiA#bandwidth}
  */
  readonly bandwidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi#beacon_interval ObjectExtensioncontrollerExtenderprofileWifiA#beacon_interval}
  */
  readonly beaconInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi#bss_color ObjectExtensioncontrollerExtenderprofileWifiA#bss_color}
  */
  readonly bssColor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi#bss_color_mode ObjectExtensioncontrollerExtenderprofileWifiA#bss_color_mode}
  */
  readonly bssColorMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi#channel ObjectExtensioncontrollerExtenderprofileWifiA#channel}
  */
  readonly channel?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi#extension_channel ObjectExtensioncontrollerExtenderprofileWifiA#extension_channel}
  */
  readonly extensionChannel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi#guard_interval ObjectExtensioncontrollerExtenderprofileWifiA#guard_interval}
  */
  readonly guardInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi#lan_ext_vap ObjectExtensioncontrollerExtenderprofileWifiA#lan_ext_vap}
  */
  readonly lanExtVap?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi#local_vaps ObjectExtensioncontrollerExtenderprofileWifiA#local_vaps}
  */
  readonly localVaps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi#max_clients ObjectExtensioncontrollerExtenderprofileWifiA#max_clients}
  */
  readonly maxClients?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi#mode ObjectExtensioncontrollerExtenderprofileWifiA#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi#n80211d ObjectExtensioncontrollerExtenderprofileWifiA#n80211d}
  */
  readonly n80211D?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi#operating_standard ObjectExtensioncontrollerExtenderprofileWifiA#operating_standard}
  */
  readonly operatingStandard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi#power_level ObjectExtensioncontrollerExtenderprofileWifiA#power_level}
  */
  readonly powerLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi#radio_id ObjectExtensioncontrollerExtenderprofileWifiA#radio_id}
  */
  readonly radioId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi#status ObjectExtensioncontrollerExtenderprofileWifiA#status}
  */
  readonly status?: string;
}

export function objectExtensioncontrollerExtenderprofileWifiRadio1AToTerraform(struct?: ObjectExtensioncontrollerExtenderprofileWifiRadio1AOutputReference | ObjectExtensioncontrollerExtenderprofileWifiRadio1A): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    band: cdktf.stringToTerraform(struct!.band),
    bandwidth: cdktf.stringToTerraform(struct!.bandwidth),
    beacon_interval: cdktf.numberToTerraform(struct!.beaconInterval),
    bss_color: cdktf.numberToTerraform(struct!.bssColor),
    bss_color_mode: cdktf.stringToTerraform(struct!.bssColorMode),
    channel: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channel),
    extension_channel: cdktf.stringToTerraform(struct!.extensionChannel),
    guard_interval: cdktf.stringToTerraform(struct!.guardInterval),
    lan_ext_vap: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.lanExtVap),
    local_vaps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.localVaps),
    max_clients: cdktf.numberToTerraform(struct!.maxClients),
    mode: cdktf.stringToTerraform(struct!.mode),
    n80211d: cdktf.stringToTerraform(struct!.n80211D),
    operating_standard: cdktf.stringToTerraform(struct!.operatingStandard),
    power_level: cdktf.numberToTerraform(struct!.powerLevel),
    radio_id: cdktf.numberToTerraform(struct!.radioId),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function objectExtensioncontrollerExtenderprofileWifiRadio1AToHclTerraform(struct?: ObjectExtensioncontrollerExtenderprofileWifiRadio1AOutputReference | ObjectExtensioncontrollerExtenderprofileWifiRadio1A): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    band: {
      value: cdktf.stringToHclTerraform(struct!.band),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bandwidth: {
      value: cdktf.stringToHclTerraform(struct!.bandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    beacon_interval: {
      value: cdktf.numberToHclTerraform(struct!.beaconInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bss_color: {
      value: cdktf.numberToHclTerraform(struct!.bssColor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bss_color_mode: {
      value: cdktf.stringToHclTerraform(struct!.bssColorMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channel),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    extension_channel: {
      value: cdktf.stringToHclTerraform(struct!.extensionChannel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    guard_interval: {
      value: cdktf.stringToHclTerraform(struct!.guardInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lan_ext_vap: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.lanExtVap),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    local_vaps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.localVaps),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    max_clients: {
      value: cdktf.numberToHclTerraform(struct!.maxClients),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    n80211d: {
      value: cdktf.stringToHclTerraform(struct!.n80211D),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operating_standard: {
      value: cdktf.stringToHclTerraform(struct!.operatingStandard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    power_level: {
      value: cdktf.numberToHclTerraform(struct!.powerLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radio_id: {
      value: cdktf.numberToHclTerraform(struct!.radioId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectExtensioncontrollerExtenderprofileWifiRadio1AOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectExtensioncontrollerExtenderprofileWifiRadio1A | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._band !== undefined) {
      hasAnyValues = true;
      internalValueResult.band = this._band;
    }
    if (this._bandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidth = this._bandwidth;
    }
    if (this._beaconInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.beaconInterval = this._beaconInterval;
    }
    if (this._bssColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.bssColor = this._bssColor;
    }
    if (this._bssColorMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.bssColorMode = this._bssColorMode;
    }
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._extensionChannel !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionChannel = this._extensionChannel;
    }
    if (this._guardInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.guardInterval = this._guardInterval;
    }
    if (this._lanExtVap !== undefined) {
      hasAnyValues = true;
      internalValueResult.lanExtVap = this._lanExtVap;
    }
    if (this._localVaps !== undefined) {
      hasAnyValues = true;
      internalValueResult.localVaps = this._localVaps;
    }
    if (this._maxClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxClients = this._maxClients;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._n80211D !== undefined) {
      hasAnyValues = true;
      internalValueResult.n80211D = this._n80211D;
    }
    if (this._operatingStandard !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatingStandard = this._operatingStandard;
    }
    if (this._powerLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerLevel = this._powerLevel;
    }
    if (this._radioId !== undefined) {
      hasAnyValues = true;
      internalValueResult.radioId = this._radioId;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectExtensioncontrollerExtenderprofileWifiRadio1A | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._band = undefined;
      this._bandwidth = undefined;
      this._beaconInterval = undefined;
      this._bssColor = undefined;
      this._bssColorMode = undefined;
      this._channel = undefined;
      this._extensionChannel = undefined;
      this._guardInterval = undefined;
      this._lanExtVap = undefined;
      this._localVaps = undefined;
      this._maxClients = undefined;
      this._mode = undefined;
      this._n80211D = undefined;
      this._operatingStandard = undefined;
      this._powerLevel = undefined;
      this._radioId = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._band = value.band;
      this._bandwidth = value.bandwidth;
      this._beaconInterval = value.beaconInterval;
      this._bssColor = value.bssColor;
      this._bssColorMode = value.bssColorMode;
      this._channel = value.channel;
      this._extensionChannel = value.extensionChannel;
      this._guardInterval = value.guardInterval;
      this._lanExtVap = value.lanExtVap;
      this._localVaps = value.localVaps;
      this._maxClients = value.maxClients;
      this._mode = value.mode;
      this._n80211D = value.n80211D;
      this._operatingStandard = value.operatingStandard;
      this._powerLevel = value.powerLevel;
      this._radioId = value.radioId;
      this._status = value.status;
    }
  }

  // band - computed: true, optional: true, required: false
  private _band?: string; 
  public get band() {
    return this.getStringAttribute('band');
  }
  public set band(value: string) {
    this._band = value;
  }
  public resetBand() {
    this._band = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandInput() {
    return this._band;
  }

  // bandwidth - computed: true, optional: true, required: false
  private _bandwidth?: string; 
  public get bandwidth() {
    return this.getStringAttribute('bandwidth');
  }
  public set bandwidth(value: string) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // beacon_interval - computed: true, optional: true, required: false
  private _beaconInterval?: number; 
  public get beaconInterval() {
    return this.getNumberAttribute('beacon_interval');
  }
  public set beaconInterval(value: number) {
    this._beaconInterval = value;
  }
  public resetBeaconInterval() {
    this._beaconInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beaconIntervalInput() {
    return this._beaconInterval;
  }

  // bss_color - computed: false, optional: true, required: false
  private _bssColor?: number; 
  public get bssColor() {
    return this.getNumberAttribute('bss_color');
  }
  public set bssColor(value: number) {
    this._bssColor = value;
  }
  public resetBssColor() {
    this._bssColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bssColorInput() {
    return this._bssColor;
  }

  // bss_color_mode - computed: true, optional: true, required: false
  private _bssColorMode?: string; 
  public get bssColorMode() {
    return this.getStringAttribute('bss_color_mode');
  }
  public set bssColorMode(value: string) {
    this._bssColorMode = value;
  }
  public resetBssColorMode() {
    this._bssColorMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bssColorModeInput() {
    return this._bssColorMode;
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

  // extension_channel - computed: true, optional: true, required: false
  private _extensionChannel?: string; 
  public get extensionChannel() {
    return this.getStringAttribute('extension_channel');
  }
  public set extensionChannel(value: string) {
    this._extensionChannel = value;
  }
  public resetExtensionChannel() {
    this._extensionChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionChannelInput() {
    return this._extensionChannel;
  }

  // guard_interval - computed: true, optional: true, required: false
  private _guardInterval?: string; 
  public get guardInterval() {
    return this.getStringAttribute('guard_interval');
  }
  public set guardInterval(value: string) {
    this._guardInterval = value;
  }
  public resetGuardInterval() {
    this._guardInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guardIntervalInput() {
    return this._guardInterval;
  }

  // lan_ext_vap - computed: true, optional: true, required: false
  private _lanExtVap?: string[]; 
  public get lanExtVap() {
    return cdktf.Fn.tolist(this.getListAttribute('lan_ext_vap'));
  }
  public set lanExtVap(value: string[]) {
    this._lanExtVap = value;
  }
  public resetLanExtVap() {
    this._lanExtVap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lanExtVapInput() {
    return this._lanExtVap;
  }

  // local_vaps - computed: true, optional: true, required: false
  private _localVaps?: string[]; 
  public get localVaps() {
    return cdktf.Fn.tolist(this.getListAttribute('local_vaps'));
  }
  public set localVaps(value: string[]) {
    this._localVaps = value;
  }
  public resetLocalVaps() {
    this._localVaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localVapsInput() {
    return this._localVaps;
  }

  // max_clients - computed: false, optional: true, required: false
  private _maxClients?: number; 
  public get maxClients() {
    return this.getNumberAttribute('max_clients');
  }
  public set maxClients(value: number) {
    this._maxClients = value;
  }
  public resetMaxClients() {
    this._maxClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxClientsInput() {
    return this._maxClients;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // n80211d - computed: true, optional: true, required: false
  private _n80211D?: string; 
  public get n80211D() {
    return this.getStringAttribute('n80211d');
  }
  public set n80211D(value: string) {
    this._n80211D = value;
  }
  public resetN80211D() {
    this._n80211D = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get n80211DInput() {
    return this._n80211D;
  }

  // operating_standard - computed: true, optional: true, required: false
  private _operatingStandard?: string; 
  public get operatingStandard() {
    return this.getStringAttribute('operating_standard');
  }
  public set operatingStandard(value: string) {
    this._operatingStandard = value;
  }
  public resetOperatingStandard() {
    this._operatingStandard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingStandardInput() {
    return this._operatingStandard;
  }

  // power_level - computed: true, optional: true, required: false
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

  // radio_id - computed: false, optional: true, required: false
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

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface ObjectExtensioncontrollerExtenderprofileWifiRadio2A {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi#band ObjectExtensioncontrollerExtenderprofileWifiA#band}
  */
  readonly band?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi#bandwidth ObjectExtensioncontrollerExtenderprofileWifiA#bandwidth}
  */
  readonly bandwidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi#beacon_interval ObjectExtensioncontrollerExtenderprofileWifiA#beacon_interval}
  */
  readonly beaconInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi#bss_color ObjectExtensioncontrollerExtenderprofileWifiA#bss_color}
  */
  readonly bssColor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi#bss_color_mode ObjectExtensioncontrollerExtenderprofileWifiA#bss_color_mode}
  */
  readonly bssColorMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi#channel ObjectExtensioncontrollerExtenderprofileWifiA#channel}
  */
  readonly channel?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi#extension_channel ObjectExtensioncontrollerExtenderprofileWifiA#extension_channel}
  */
  readonly extensionChannel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi#guard_interval ObjectExtensioncontrollerExtenderprofileWifiA#guard_interval}
  */
  readonly guardInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi#lan_ext_vap ObjectExtensioncontrollerExtenderprofileWifiA#lan_ext_vap}
  */
  readonly lanExtVap?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi#local_vaps ObjectExtensioncontrollerExtenderprofileWifiA#local_vaps}
  */
  readonly localVaps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi#max_clients ObjectExtensioncontrollerExtenderprofileWifiA#max_clients}
  */
  readonly maxClients?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi#mode ObjectExtensioncontrollerExtenderprofileWifiA#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi#n80211d ObjectExtensioncontrollerExtenderprofileWifiA#n80211d}
  */
  readonly n80211D?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi#operating_standard ObjectExtensioncontrollerExtenderprofileWifiA#operating_standard}
  */
  readonly operatingStandard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi#power_level ObjectExtensioncontrollerExtenderprofileWifiA#power_level}
  */
  readonly powerLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi#radio_id ObjectExtensioncontrollerExtenderprofileWifiA#radio_id}
  */
  readonly radioId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi#status ObjectExtensioncontrollerExtenderprofileWifiA#status}
  */
  readonly status?: string;
}

export function objectExtensioncontrollerExtenderprofileWifiRadio2AToTerraform(struct?: ObjectExtensioncontrollerExtenderprofileWifiRadio2AOutputReference | ObjectExtensioncontrollerExtenderprofileWifiRadio2A): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    band: cdktf.stringToTerraform(struct!.band),
    bandwidth: cdktf.stringToTerraform(struct!.bandwidth),
    beacon_interval: cdktf.numberToTerraform(struct!.beaconInterval),
    bss_color: cdktf.numberToTerraform(struct!.bssColor),
    bss_color_mode: cdktf.stringToTerraform(struct!.bssColorMode),
    channel: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channel),
    extension_channel: cdktf.stringToTerraform(struct!.extensionChannel),
    guard_interval: cdktf.stringToTerraform(struct!.guardInterval),
    lan_ext_vap: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.lanExtVap),
    local_vaps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.localVaps),
    max_clients: cdktf.numberToTerraform(struct!.maxClients),
    mode: cdktf.stringToTerraform(struct!.mode),
    n80211d: cdktf.stringToTerraform(struct!.n80211D),
    operating_standard: cdktf.stringToTerraform(struct!.operatingStandard),
    power_level: cdktf.numberToTerraform(struct!.powerLevel),
    radio_id: cdktf.numberToTerraform(struct!.radioId),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function objectExtensioncontrollerExtenderprofileWifiRadio2AToHclTerraform(struct?: ObjectExtensioncontrollerExtenderprofileWifiRadio2AOutputReference | ObjectExtensioncontrollerExtenderprofileWifiRadio2A): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    band: {
      value: cdktf.stringToHclTerraform(struct!.band),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bandwidth: {
      value: cdktf.stringToHclTerraform(struct!.bandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    beacon_interval: {
      value: cdktf.numberToHclTerraform(struct!.beaconInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bss_color: {
      value: cdktf.numberToHclTerraform(struct!.bssColor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bss_color_mode: {
      value: cdktf.stringToHclTerraform(struct!.bssColorMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channel),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    extension_channel: {
      value: cdktf.stringToHclTerraform(struct!.extensionChannel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    guard_interval: {
      value: cdktf.stringToHclTerraform(struct!.guardInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lan_ext_vap: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.lanExtVap),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    local_vaps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.localVaps),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    max_clients: {
      value: cdktf.numberToHclTerraform(struct!.maxClients),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    n80211d: {
      value: cdktf.stringToHclTerraform(struct!.n80211D),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operating_standard: {
      value: cdktf.stringToHclTerraform(struct!.operatingStandard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    power_level: {
      value: cdktf.numberToHclTerraform(struct!.powerLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radio_id: {
      value: cdktf.numberToHclTerraform(struct!.radioId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectExtensioncontrollerExtenderprofileWifiRadio2AOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectExtensioncontrollerExtenderprofileWifiRadio2A | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._band !== undefined) {
      hasAnyValues = true;
      internalValueResult.band = this._band;
    }
    if (this._bandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidth = this._bandwidth;
    }
    if (this._beaconInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.beaconInterval = this._beaconInterval;
    }
    if (this._bssColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.bssColor = this._bssColor;
    }
    if (this._bssColorMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.bssColorMode = this._bssColorMode;
    }
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._extensionChannel !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionChannel = this._extensionChannel;
    }
    if (this._guardInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.guardInterval = this._guardInterval;
    }
    if (this._lanExtVap !== undefined) {
      hasAnyValues = true;
      internalValueResult.lanExtVap = this._lanExtVap;
    }
    if (this._localVaps !== undefined) {
      hasAnyValues = true;
      internalValueResult.localVaps = this._localVaps;
    }
    if (this._maxClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxClients = this._maxClients;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._n80211D !== undefined) {
      hasAnyValues = true;
      internalValueResult.n80211D = this._n80211D;
    }
    if (this._operatingStandard !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatingStandard = this._operatingStandard;
    }
    if (this._powerLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerLevel = this._powerLevel;
    }
    if (this._radioId !== undefined) {
      hasAnyValues = true;
      internalValueResult.radioId = this._radioId;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectExtensioncontrollerExtenderprofileWifiRadio2A | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._band = undefined;
      this._bandwidth = undefined;
      this._beaconInterval = undefined;
      this._bssColor = undefined;
      this._bssColorMode = undefined;
      this._channel = undefined;
      this._extensionChannel = undefined;
      this._guardInterval = undefined;
      this._lanExtVap = undefined;
      this._localVaps = undefined;
      this._maxClients = undefined;
      this._mode = undefined;
      this._n80211D = undefined;
      this._operatingStandard = undefined;
      this._powerLevel = undefined;
      this._radioId = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._band = value.band;
      this._bandwidth = value.bandwidth;
      this._beaconInterval = value.beaconInterval;
      this._bssColor = value.bssColor;
      this._bssColorMode = value.bssColorMode;
      this._channel = value.channel;
      this._extensionChannel = value.extensionChannel;
      this._guardInterval = value.guardInterval;
      this._lanExtVap = value.lanExtVap;
      this._localVaps = value.localVaps;
      this._maxClients = value.maxClients;
      this._mode = value.mode;
      this._n80211D = value.n80211D;
      this._operatingStandard = value.operatingStandard;
      this._powerLevel = value.powerLevel;
      this._radioId = value.radioId;
      this._status = value.status;
    }
  }

  // band - computed: true, optional: true, required: false
  private _band?: string; 
  public get band() {
    return this.getStringAttribute('band');
  }
  public set band(value: string) {
    this._band = value;
  }
  public resetBand() {
    this._band = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandInput() {
    return this._band;
  }

  // bandwidth - computed: true, optional: true, required: false
  private _bandwidth?: string; 
  public get bandwidth() {
    return this.getStringAttribute('bandwidth');
  }
  public set bandwidth(value: string) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // beacon_interval - computed: true, optional: true, required: false
  private _beaconInterval?: number; 
  public get beaconInterval() {
    return this.getNumberAttribute('beacon_interval');
  }
  public set beaconInterval(value: number) {
    this._beaconInterval = value;
  }
  public resetBeaconInterval() {
    this._beaconInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beaconIntervalInput() {
    return this._beaconInterval;
  }

  // bss_color - computed: false, optional: true, required: false
  private _bssColor?: number; 
  public get bssColor() {
    return this.getNumberAttribute('bss_color');
  }
  public set bssColor(value: number) {
    this._bssColor = value;
  }
  public resetBssColor() {
    this._bssColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bssColorInput() {
    return this._bssColor;
  }

  // bss_color_mode - computed: true, optional: true, required: false
  private _bssColorMode?: string; 
  public get bssColorMode() {
    return this.getStringAttribute('bss_color_mode');
  }
  public set bssColorMode(value: string) {
    this._bssColorMode = value;
  }
  public resetBssColorMode() {
    this._bssColorMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bssColorModeInput() {
    return this._bssColorMode;
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

  // extension_channel - computed: true, optional: true, required: false
  private _extensionChannel?: string; 
  public get extensionChannel() {
    return this.getStringAttribute('extension_channel');
  }
  public set extensionChannel(value: string) {
    this._extensionChannel = value;
  }
  public resetExtensionChannel() {
    this._extensionChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionChannelInput() {
    return this._extensionChannel;
  }

  // guard_interval - computed: true, optional: true, required: false
  private _guardInterval?: string; 
  public get guardInterval() {
    return this.getStringAttribute('guard_interval');
  }
  public set guardInterval(value: string) {
    this._guardInterval = value;
  }
  public resetGuardInterval() {
    this._guardInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guardIntervalInput() {
    return this._guardInterval;
  }

  // lan_ext_vap - computed: true, optional: true, required: false
  private _lanExtVap?: string[]; 
  public get lanExtVap() {
    return cdktf.Fn.tolist(this.getListAttribute('lan_ext_vap'));
  }
  public set lanExtVap(value: string[]) {
    this._lanExtVap = value;
  }
  public resetLanExtVap() {
    this._lanExtVap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lanExtVapInput() {
    return this._lanExtVap;
  }

  // local_vaps - computed: true, optional: true, required: false
  private _localVaps?: string[]; 
  public get localVaps() {
    return cdktf.Fn.tolist(this.getListAttribute('local_vaps'));
  }
  public set localVaps(value: string[]) {
    this._localVaps = value;
  }
  public resetLocalVaps() {
    this._localVaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localVapsInput() {
    return this._localVaps;
  }

  // max_clients - computed: false, optional: true, required: false
  private _maxClients?: number; 
  public get maxClients() {
    return this.getNumberAttribute('max_clients');
  }
  public set maxClients(value: number) {
    this._maxClients = value;
  }
  public resetMaxClients() {
    this._maxClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxClientsInput() {
    return this._maxClients;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // n80211d - computed: true, optional: true, required: false
  private _n80211D?: string; 
  public get n80211D() {
    return this.getStringAttribute('n80211d');
  }
  public set n80211D(value: string) {
    this._n80211D = value;
  }
  public resetN80211D() {
    this._n80211D = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get n80211DInput() {
    return this._n80211D;
  }

  // operating_standard - computed: true, optional: true, required: false
  private _operatingStandard?: string; 
  public get operatingStandard() {
    return this.getStringAttribute('operating_standard');
  }
  public set operatingStandard(value: string) {
    this._operatingStandard = value;
  }
  public resetOperatingStandard() {
    this._operatingStandard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingStandardInput() {
    return this._operatingStandard;
  }

  // power_level - computed: true, optional: true, required: false
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

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi fortimanager_object_extensioncontroller_extenderprofile_wifi}
*/
export class ObjectExtensioncontrollerExtenderprofileWifiA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_extensioncontroller_extenderprofile_wifi";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectExtensioncontrollerExtenderprofileWifiA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectExtensioncontrollerExtenderprofileWifiA to import
  * @param importFromId The id of the existing ObjectExtensioncontrollerExtenderprofileWifiA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectExtensioncontrollerExtenderprofileWifiA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_extensioncontroller_extenderprofile_wifi", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi fortimanager_object_extensioncontroller_extenderprofile_wifi} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectExtensioncontrollerExtenderprofileWifiAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectExtensioncontrollerExtenderprofileWifiAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_extensioncontroller_extenderprofile_wifi',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._country = config.country;
    this._dfs = config.dfs;
    this._extenderProfile = config.extenderProfile;
    this._id = config.id;
    this._scopetype = config.scopetype;
    this._radio1.internalValue = config.radio1;
    this._radio2.internalValue = config.radio2;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // country - computed: true, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // dfs - computed: false, optional: true, required: false
  private _dfs?: string; 
  public get dfs() {
    return this.getStringAttribute('dfs');
  }
  public set dfs(value: string) {
    this._dfs = value;
  }
  public resetDfs() {
    this._dfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dfsInput() {
    return this._dfs;
  }

  // extender_profile - computed: false, optional: false, required: true
  private _extenderProfile?: string; 
  public get extenderProfile() {
    return this.getStringAttribute('extender_profile');
  }
  public set extenderProfile(value: string) {
    this._extenderProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extenderProfileInput() {
    return this._extenderProfile;
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

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // radio_1 - computed: false, optional: true, required: false
  private _radio1 = new ObjectExtensioncontrollerExtenderprofileWifiRadio1AOutputReference(this, "radio_1");
  public get radio1() {
    return this._radio1;
  }
  public putRadio1(value: ObjectExtensioncontrollerExtenderprofileWifiRadio1A) {
    this._radio1.internalValue = value;
  }
  public resetRadio1() {
    this._radio1.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radio1Input() {
    return this._radio1.internalValue;
  }

  // radio_2 - computed: false, optional: true, required: false
  private _radio2 = new ObjectExtensioncontrollerExtenderprofileWifiRadio2AOutputReference(this, "radio_2");
  public get radio2() {
    return this._radio2;
  }
  public putRadio2(value: ObjectExtensioncontrollerExtenderprofileWifiRadio2A) {
    this._radio2.internalValue = value;
  }
  public resetRadio2() {
    this._radio2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radio2Input() {
    return this._radio2.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      country: cdktf.stringToTerraform(this._country),
      dfs: cdktf.stringToTerraform(this._dfs),
      extender_profile: cdktf.stringToTerraform(this._extenderProfile),
      id: cdktf.stringToTerraform(this._id),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      radio_1: objectExtensioncontrollerExtenderprofileWifiRadio1AToTerraform(this._radio1.internalValue),
      radio_2: objectExtensioncontrollerExtenderprofileWifiRadio2AToTerraform(this._radio2.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      country: {
        value: cdktf.stringToHclTerraform(this._country),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dfs: {
        value: cdktf.stringToHclTerraform(this._dfs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extender_profile: {
        value: cdktf.stringToHclTerraform(this._extenderProfile),
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
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radio_1: {
        value: objectExtensioncontrollerExtenderprofileWifiRadio1AToHclTerraform(this._radio1.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectExtensioncontrollerExtenderprofileWifiRadio1AList",
      },
      radio_2: {
        value: objectExtensioncontrollerExtenderprofileWifiRadio2AToHclTerraform(this._radio2.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectExtensioncontrollerExtenderprofileWifiRadio2AList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
