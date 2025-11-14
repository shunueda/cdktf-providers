// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi_radio1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectExtensioncontrollerExtenderprofileWifiRadio1AConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi_radio1#adom ObjectExtensioncontrollerExtenderprofileWifiRadio1A#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi_radio1#band ObjectExtensioncontrollerExtenderprofileWifiRadio1A#band}
  */
  readonly band?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi_radio1#bandwidth ObjectExtensioncontrollerExtenderprofileWifiRadio1A#bandwidth}
  */
  readonly bandwidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi_radio1#beacon_interval ObjectExtensioncontrollerExtenderprofileWifiRadio1A#beacon_interval}
  */
  readonly beaconInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi_radio1#bss_color ObjectExtensioncontrollerExtenderprofileWifiRadio1A#bss_color}
  */
  readonly bssColor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi_radio1#bss_color_mode ObjectExtensioncontrollerExtenderprofileWifiRadio1A#bss_color_mode}
  */
  readonly bssColorMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi_radio1#channel ObjectExtensioncontrollerExtenderprofileWifiRadio1A#channel}
  */
  readonly channel?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi_radio1#extender_profile ObjectExtensioncontrollerExtenderprofileWifiRadio1A#extender_profile}
  */
  readonly extenderProfile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi_radio1#extension_channel ObjectExtensioncontrollerExtenderprofileWifiRadio1A#extension_channel}
  */
  readonly extensionChannel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi_radio1#guard_interval ObjectExtensioncontrollerExtenderprofileWifiRadio1A#guard_interval}
  */
  readonly guardInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi_radio1#id ObjectExtensioncontrollerExtenderprofileWifiRadio1A#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi_radio1#lan_ext_vap ObjectExtensioncontrollerExtenderprofileWifiRadio1A#lan_ext_vap}
  */
  readonly lanExtVap?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi_radio1#local_vaps ObjectExtensioncontrollerExtenderprofileWifiRadio1A#local_vaps}
  */
  readonly localVaps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi_radio1#max_clients ObjectExtensioncontrollerExtenderprofileWifiRadio1A#max_clients}
  */
  readonly maxClients?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi_radio1#mode ObjectExtensioncontrollerExtenderprofileWifiRadio1A#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi_radio1#n80211d ObjectExtensioncontrollerExtenderprofileWifiRadio1A#n80211d}
  */
  readonly n80211D?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi_radio1#operating_standard ObjectExtensioncontrollerExtenderprofileWifiRadio1A#operating_standard}
  */
  readonly operatingStandard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi_radio1#power_level ObjectExtensioncontrollerExtenderprofileWifiRadio1A#power_level}
  */
  readonly powerLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi_radio1#radio_id ObjectExtensioncontrollerExtenderprofileWifiRadio1A#radio_id}
  */
  readonly radioId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi_radio1#scopetype ObjectExtensioncontrollerExtenderprofileWifiRadio1A#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi_radio1#status ObjectExtensioncontrollerExtenderprofileWifiRadio1A#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi_radio1 fortimanager_object_extensioncontroller_extenderprofile_wifi_radio1}
*/
export class ObjectExtensioncontrollerExtenderprofileWifiRadio1A extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_extensioncontroller_extenderprofile_wifi_radio1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectExtensioncontrollerExtenderprofileWifiRadio1A resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectExtensioncontrollerExtenderprofileWifiRadio1A to import
  * @param importFromId The id of the existing ObjectExtensioncontrollerExtenderprofileWifiRadio1A that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi_radio1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectExtensioncontrollerExtenderprofileWifiRadio1A to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_extensioncontroller_extenderprofile_wifi_radio1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_wifi_radio1 fortimanager_object_extensioncontroller_extenderprofile_wifi_radio1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectExtensioncontrollerExtenderprofileWifiRadio1AConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectExtensioncontrollerExtenderprofileWifiRadio1AConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_extensioncontroller_extenderprofile_wifi_radio1',
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
    this._band = config.band;
    this._bandwidth = config.bandwidth;
    this._beaconInterval = config.beaconInterval;
    this._bssColor = config.bssColor;
    this._bssColorMode = config.bssColorMode;
    this._channel = config.channel;
    this._extenderProfile = config.extenderProfile;
    this._extensionChannel = config.extensionChannel;
    this._guardInterval = config.guardInterval;
    this._id = config.id;
    this._lanExtVap = config.lanExtVap;
    this._localVaps = config.localVaps;
    this._maxClients = config.maxClients;
    this._mode = config.mode;
    this._n80211D = config.n80211D;
    this._operatingStandard = config.operatingStandard;
    this._powerLevel = config.powerLevel;
    this._radioId = config.radioId;
    this._scopetype = config.scopetype;
    this._status = config.status;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      band: cdktf.stringToTerraform(this._band),
      bandwidth: cdktf.stringToTerraform(this._bandwidth),
      beacon_interval: cdktf.numberToTerraform(this._beaconInterval),
      bss_color: cdktf.numberToTerraform(this._bssColor),
      bss_color_mode: cdktf.stringToTerraform(this._bssColorMode),
      channel: cdktf.listMapper(cdktf.stringToTerraform, false)(this._channel),
      extender_profile: cdktf.stringToTerraform(this._extenderProfile),
      extension_channel: cdktf.stringToTerraform(this._extensionChannel),
      guard_interval: cdktf.stringToTerraform(this._guardInterval),
      id: cdktf.stringToTerraform(this._id),
      lan_ext_vap: cdktf.listMapper(cdktf.stringToTerraform, false)(this._lanExtVap),
      local_vaps: cdktf.listMapper(cdktf.stringToTerraform, false)(this._localVaps),
      max_clients: cdktf.numberToTerraform(this._maxClients),
      mode: cdktf.stringToTerraform(this._mode),
      n80211d: cdktf.stringToTerraform(this._n80211D),
      operating_standard: cdktf.stringToTerraform(this._operatingStandard),
      power_level: cdktf.numberToTerraform(this._powerLevel),
      radio_id: cdktf.numberToTerraform(this._radioId),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      status: cdktf.stringToTerraform(this._status),
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
      band: {
        value: cdktf.stringToHclTerraform(this._band),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bandwidth: {
        value: cdktf.stringToHclTerraform(this._bandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      beacon_interval: {
        value: cdktf.numberToHclTerraform(this._beaconInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bss_color: {
        value: cdktf.numberToHclTerraform(this._bssColor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bss_color_mode: {
        value: cdktf.stringToHclTerraform(this._bssColorMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      channel: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._channel),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      extender_profile: {
        value: cdktf.stringToHclTerraform(this._extenderProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extension_channel: {
        value: cdktf.stringToHclTerraform(this._extensionChannel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      guard_interval: {
        value: cdktf.stringToHclTerraform(this._guardInterval),
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
      lan_ext_vap: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._lanExtVap),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      local_vaps: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._localVaps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      max_clients: {
        value: cdktf.numberToHclTerraform(this._maxClients),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      n80211d: {
        value: cdktf.stringToHclTerraform(this._n80211D),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operating_standard: {
        value: cdktf.stringToHclTerraform(this._operatingStandard),
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
      radio_id: {
        value: cdktf.numberToHclTerraform(this._radioId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
