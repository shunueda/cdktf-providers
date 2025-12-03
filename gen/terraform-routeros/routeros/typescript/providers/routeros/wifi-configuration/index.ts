// https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WifiConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_configuration#___path___ WifiConfiguration#___path___}
  */
  readonly path?: string;
  /**
  * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_configuration#___ts___ WifiConfiguration#___ts___}
  */
  readonly ts?: string;
  /**
  * AAA inline settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_configuration#aaa WifiConfiguration#aaa}
  */
  readonly aaa?: { [key: string]: string };
  /**
  * An option overrides the default antenna gain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_configuration#antenna_gain WifiConfiguration#antenna_gain}
  */
  readonly antennaGain?: number;
  /**
  * Time interval between beacon frames.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_configuration#beacon_interval WifiConfiguration#beacon_interval}
  */
  readonly beaconInterval?: string;
  /**
  * Radio chains to use for receiving signals.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_configuration#chains WifiConfiguration#chains}
  */
  readonly chains?: number[];
  /**
  * Channel inline settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_configuration#channel WifiConfiguration#channel}
  */
  readonly channel?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_configuration#comment WifiConfiguration#comment}
  */
  readonly comment?: string;
  /**
  * An option determines which regulatory domain restrictions are applied to an interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_configuration#country WifiConfiguration#country}
  */
  readonly country?: string;
  /**
  * Datapath inline settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_configuration#datapath WifiConfiguration#datapath}
  */
  readonly datapath?: { [key: string]: string };
  /**
  * Whether to assign lower priority to channels with a control frequency of 5720 or 5825-5885 MHz. These channels are unsupported by some client devices, making their automatic selection undesirable. Defaults to `yes` in ETSI regulatory domains, elsewhere to `no`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_configuration#deprioritize_unii_3_4 WifiConfiguration#deprioritize_unii_3_4}
  */
  readonly deprioritizeUnii34?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_configuration#disabled WifiConfiguration#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * A period at which to transmit multicast traffic, when there are client devices in power save mode connected to the AP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_configuration#dtim_period WifiConfiguration#dtim_period}
  */
  readonly dtimPeriod?: number;
  /**
  * This property has effect only in AP mode. Setting it to yes can remove this network from the list of wireless networks that are shown by some client software. Changing this setting does not improve the security of the wireless network, because SSID is included in other frames sent by the AP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_configuration#hide_ssid WifiConfiguration#hide_ssid}
  */
  readonly hideSsid?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_configuration#id WifiConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Interworking inline settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_configuration#interworking WifiConfiguration#interworking}
  */
  readonly interworking?: { [key: string]: string };
  /**
  * An option to specify the remote CAP mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_configuration#manager WifiConfiguration#manager}
  */
  readonly manager?: string;
  /**
  * An option to specify the access point operational mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_configuration#mode WifiConfiguration#mode}
  */
  readonly mode?: string;
  /**
  * An option to enable converting every multicast-address IP or IPv6 packet into multiple unicast-addresses frames for each connected station.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_configuration#multicast_enhance WifiConfiguration#multicast_enhance}
  */
  readonly multicastEnhance?: string;
  /**
  * Name of the configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_configuration#name WifiConfiguration#name}
  */
  readonly name: string;
  /**
  * An option to specify the QoS classifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_configuration#qos_classifier WifiConfiguration#qos_classifier}
  */
  readonly qosClassifier?: string;
  /**
  * Security inline settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_configuration#security WifiConfiguration#security}
  */
  readonly security?: { [key: string]: string };
  /**
  * SSID (service set identifier) is a name broadcast in the beacons that identifies wireless network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_configuration#ssid WifiConfiguration#ssid}
  */
  readonly ssid?: string;
  /**
  * Steering inline settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_configuration#steering WifiConfiguration#steering}
  */
  readonly steering?: { [key: string]: string };
  /**
  * Radio chains to use for transmitting signals.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_configuration#tx_chains WifiConfiguration#tx_chains}
  */
  readonly txChains?: number[];
  /**
  * A limit on the transmit power (in dBm) of the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_configuration#tx_power WifiConfiguration#tx_power}
  */
  readonly txPower?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_configuration routeros_wifi_configuration}
*/
export class WifiConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_wifi_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WifiConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WifiConfiguration to import
  * @param importFromId The id of the existing WifiConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WifiConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_wifi_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_configuration routeros_wifi_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WifiConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: WifiConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_wifi_configuration',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.96.0',
        providerVersionConstraint: '1.96.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._ts = config.ts;
    this._aaa = config.aaa;
    this._antennaGain = config.antennaGain;
    this._beaconInterval = config.beaconInterval;
    this._chains = config.chains;
    this._channel = config.channel;
    this._comment = config.comment;
    this._country = config.country;
    this._datapath = config.datapath;
    this._deprioritizeUnii34 = config.deprioritizeUnii34;
    this._disabled = config.disabled;
    this._dtimPeriod = config.dtimPeriod;
    this._hideSsid = config.hideSsid;
    this._id = config.id;
    this._interworking = config.interworking;
    this._manager = config.manager;
    this._mode = config.mode;
    this._multicastEnhance = config.multicastEnhance;
    this._name = config.name;
    this._qosClassifier = config.qosClassifier;
    this._security = config.security;
    this._ssid = config.ssid;
    this._steering = config.steering;
    this._txChains = config.txChains;
    this._txPower = config.txPower;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // ___ts___ - computed: false, optional: true, required: false
  private _ts?: string; 
  public get ts() {
    return this.getStringAttribute('___ts___');
  }
  public set ts(value: string) {
    this._ts = value;
  }
  public resetTs() {
    this._ts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsInput() {
    return this._ts;
  }

  // aaa - computed: false, optional: true, required: false
  private _aaa?: { [key: string]: string }; 
  public get aaa() {
    return this.getStringMapAttribute('aaa');
  }
  public set aaa(value: { [key: string]: string }) {
    this._aaa = value;
  }
  public resetAaa() {
    this._aaa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaaInput() {
    return this._aaa;
  }

  // antenna_gain - computed: false, optional: true, required: false
  private _antennaGain?: number; 
  public get antennaGain() {
    return this.getNumberAttribute('antenna_gain');
  }
  public set antennaGain(value: number) {
    this._antennaGain = value;
  }
  public resetAntennaGain() {
    this._antennaGain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antennaGainInput() {
    return this._antennaGain;
  }

  // beacon_interval - computed: false, optional: true, required: false
  private _beaconInterval?: string; 
  public get beaconInterval() {
    return this.getStringAttribute('beacon_interval');
  }
  public set beaconInterval(value: string) {
    this._beaconInterval = value;
  }
  public resetBeaconInterval() {
    this._beaconInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beaconIntervalInput() {
    return this._beaconInterval;
  }

  // chains - computed: false, optional: true, required: false
  private _chains?: number[]; 
  public get chains() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('chains')));
  }
  public set chains(value: number[]) {
    this._chains = value;
  }
  public resetChains() {
    this._chains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chainsInput() {
    return this._chains;
  }

  // channel - computed: false, optional: true, required: false
  private _channel?: { [key: string]: string }; 
  public get channel() {
    return this.getStringMapAttribute('channel');
  }
  public set channel(value: { [key: string]: string }) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

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

  // country - computed: false, optional: true, required: false
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

  // datapath - computed: false, optional: true, required: false
  private _datapath?: { [key: string]: string }; 
  public get datapath() {
    return this.getStringMapAttribute('datapath');
  }
  public set datapath(value: { [key: string]: string }) {
    this._datapath = value;
  }
  public resetDatapath() {
    this._datapath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datapathInput() {
    return this._datapath;
  }

  // deprioritize_unii_3_4 - computed: false, optional: true, required: false
  private _deprioritizeUnii34?: boolean | cdktf.IResolvable; 
  public get deprioritizeUnii34() {
    return this.getBooleanAttribute('deprioritize_unii_3_4');
  }
  public set deprioritizeUnii34(value: boolean | cdktf.IResolvable) {
    this._deprioritizeUnii34 = value;
  }
  public resetDeprioritizeUnii34() {
    this._deprioritizeUnii34 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprioritizeUnii34Input() {
    return this._deprioritizeUnii34;
  }

  // disabled - computed: false, optional: true, required: false
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

  // dtim_period - computed: false, optional: true, required: false
  private _dtimPeriod?: number; 
  public get dtimPeriod() {
    return this.getNumberAttribute('dtim_period');
  }
  public set dtimPeriod(value: number) {
    this._dtimPeriod = value;
  }
  public resetDtimPeriod() {
    this._dtimPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtimPeriodInput() {
    return this._dtimPeriod;
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

  // interworking - computed: false, optional: true, required: false
  private _interworking?: { [key: string]: string }; 
  public get interworking() {
    return this.getStringMapAttribute('interworking');
  }
  public set interworking(value: { [key: string]: string }) {
    this._interworking = value;
  }
  public resetInterworking() {
    this._interworking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interworkingInput() {
    return this._interworking;
  }

  // manager - computed: false, optional: true, required: false
  private _manager?: string; 
  public get manager() {
    return this.getStringAttribute('manager');
  }
  public set manager(value: string) {
    this._manager = value;
  }
  public resetManager() {
    this._manager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managerInput() {
    return this._manager;
  }

  // mode - computed: false, optional: true, required: false
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

  // multicast_enhance - computed: false, optional: true, required: false
  private _multicastEnhance?: string; 
  public get multicastEnhance() {
    return this.getStringAttribute('multicast_enhance');
  }
  public set multicastEnhance(value: string) {
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

  // qos_classifier - computed: false, optional: true, required: false
  private _qosClassifier?: string; 
  public get qosClassifier() {
    return this.getStringAttribute('qos_classifier');
  }
  public set qosClassifier(value: string) {
    this._qosClassifier = value;
  }
  public resetQosClassifier() {
    this._qosClassifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosClassifierInput() {
    return this._qosClassifier;
  }

  // security - computed: false, optional: true, required: false
  private _security?: { [key: string]: string }; 
  public get security() {
    return this.getStringMapAttribute('security');
  }
  public set security(value: { [key: string]: string }) {
    this._security = value;
  }
  public resetSecurity() {
    this._security = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security;
  }

  // ssid - computed: false, optional: true, required: false
  private _ssid?: string; 
  public get ssid() {
    return this.getStringAttribute('ssid');
  }
  public set ssid(value: string) {
    this._ssid = value;
  }
  public resetSsid() {
    this._ssid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssidInput() {
    return this._ssid;
  }

  // steering - computed: false, optional: true, required: false
  private _steering?: { [key: string]: string }; 
  public get steering() {
    return this.getStringMapAttribute('steering');
  }
  public set steering(value: { [key: string]: string }) {
    this._steering = value;
  }
  public resetSteering() {
    this._steering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get steeringInput() {
    return this._steering;
  }

  // tx_chains - computed: false, optional: true, required: false
  private _txChains?: number[]; 
  public get txChains() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tx_chains')));
  }
  public set txChains(value: number[]) {
    this._txChains = value;
  }
  public resetTxChains() {
    this._txChains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txChainsInput() {
    return this._txChains;
  }

  // tx_power - computed: false, optional: true, required: false
  private _txPower?: number; 
  public get txPower() {
    return this.getNumberAttribute('tx_power');
  }
  public set txPower(value: number) {
    this._txPower = value;
  }
  public resetTxPower() {
    this._txPower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txPowerInput() {
    return this._txPower;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      ___ts___: cdktf.stringToTerraform(this._ts),
      aaa: cdktf.hashMapper(cdktf.stringToTerraform)(this._aaa),
      antenna_gain: cdktf.numberToTerraform(this._antennaGain),
      beacon_interval: cdktf.stringToTerraform(this._beaconInterval),
      chains: cdktf.listMapper(cdktf.numberToTerraform, false)(this._chains),
      channel: cdktf.hashMapper(cdktf.stringToTerraform)(this._channel),
      comment: cdktf.stringToTerraform(this._comment),
      country: cdktf.stringToTerraform(this._country),
      datapath: cdktf.hashMapper(cdktf.stringToTerraform)(this._datapath),
      deprioritize_unii_3_4: cdktf.booleanToTerraform(this._deprioritizeUnii34),
      disabled: cdktf.booleanToTerraform(this._disabled),
      dtim_period: cdktf.numberToTerraform(this._dtimPeriod),
      hide_ssid: cdktf.booleanToTerraform(this._hideSsid),
      id: cdktf.stringToTerraform(this._id),
      interworking: cdktf.hashMapper(cdktf.stringToTerraform)(this._interworking),
      manager: cdktf.stringToTerraform(this._manager),
      mode: cdktf.stringToTerraform(this._mode),
      multicast_enhance: cdktf.stringToTerraform(this._multicastEnhance),
      name: cdktf.stringToTerraform(this._name),
      qos_classifier: cdktf.stringToTerraform(this._qosClassifier),
      security: cdktf.hashMapper(cdktf.stringToTerraform)(this._security),
      ssid: cdktf.stringToTerraform(this._ssid),
      steering: cdktf.hashMapper(cdktf.stringToTerraform)(this._steering),
      tx_chains: cdktf.listMapper(cdktf.numberToTerraform, false)(this._txChains),
      tx_power: cdktf.numberToTerraform(this._txPower),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ___ts___: {
        value: cdktf.stringToHclTerraform(this._ts),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aaa: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._aaa),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      antenna_gain: {
        value: cdktf.numberToHclTerraform(this._antennaGain),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      beacon_interval: {
        value: cdktf.stringToHclTerraform(this._beaconInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      chains: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._chains),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      channel: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._channel),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
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
      datapath: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._datapath),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      deprioritize_unii_3_4: {
        value: cdktf.booleanToHclTerraform(this._deprioritizeUnii34),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dtim_period: {
        value: cdktf.numberToHclTerraform(this._dtimPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hide_ssid: {
        value: cdktf.booleanToHclTerraform(this._hideSsid),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interworking: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._interworking),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      manager: {
        value: cdktf.stringToHclTerraform(this._manager),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multicast_enhance: {
        value: cdktf.stringToHclTerraform(this._multicastEnhance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qos_classifier: {
        value: cdktf.stringToHclTerraform(this._qosClassifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._security),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      ssid: {
        value: cdktf.stringToHclTerraform(this._ssid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      steering: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._steering),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tx_chains: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._txChains),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      tx_power: {
        value: cdktf.numberToHclTerraform(this._txPower),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
