// https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CapsmanConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_configuration#___path___ CapsmanConfiguration#___path___}
  */
  readonly path?: string;
  /**
  * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_configuration#___ts___ CapsmanConfiguration#___ts___}
  */
  readonly ts?: string;
  /**
  * Channel inline settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_configuration#channel CapsmanConfiguration#channel}
  */
  readonly channel?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_configuration#comment CapsmanConfiguration#comment}
  */
  readonly comment?: string;
  /**
  * Limits available bands, frequencies and maximum transmit power for each frequency. Also specifies default value of scan-list. Value no_country_set is an FCC compliant set of channels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_configuration#country CapsmanConfiguration#country}
  */
  readonly country?: string;
  /**
  * Datapath inline settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_configuration#datapath CapsmanConfiguration#datapath}
  */
  readonly datapath?: { [key: string]: string };
  /**
  * This interval is measured from third sending failure on the lowest data rate. At this point 3 * (hw-retries + 1) frame transmits on the lowest data rate had failed. During disconnect-timeout packet transmission will be retried with on-fail-retry-time interval. If no frame can be transmitted successfully during disconnect-timeout, the connection is closed, and this event is logged as "extensive data loss". Successful frame transmission resets this timer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_configuration#disconnect_timeout CapsmanConfiguration#disconnect_timeout}
  */
  readonly disconnectTimeout?: string;
  /**
  * How long to wait for confirmation of unicast frames (ACKs) before considering transmission unsuccessful, or in short ACK-Timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_configuration#distance CapsmanConfiguration#distance}
  */
  readonly distance?: string;
  /**
  * Discard frames that have been queued for sending longer than frame-lifetime. By default, when value of this property is 0, frames are discarded only after connection is closed (format: 0.00 sec).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_configuration#frame_lifetime CapsmanConfiguration#frame_lifetime}
  */
  readonly frameLifetime?: string;
  /**
  * Whether to allow use of short guard interval (refer to 802.11n MCS specification to see how this may affect throughput). "any" will use either short or long, depending on data rate, "long" will use long.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_configuration#guard_interval CapsmanConfiguration#guard_interval}
  */
  readonly guardInterval?: string;
  /**
  * This property has effect only in AP mode. Setting it to yes can remove this network from the list of wireless networks that are shown by some client software. Changing this setting does not improve the security of the wireless network, because SSID is included in other frames sent by the AP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_configuration#hide_ssid CapsmanConfiguration#hide_ssid}
  */
  readonly hideSsid?: boolean | cdktf.IResolvable;
  /**
  * Frame protection support property. [See docs](https://wiki.mikrotik.com/wiki/Manual:Interface/Wireless#Frame_protection_support_(RTS/CTS)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_configuration#hw_protection_mode CapsmanConfiguration#hw_protection_mode}
  */
  readonly hwProtectionMode?: string;
  /**
  * Number of times sending frame is retried without considering it a transmission failure. [See docs](https://wiki.mikrotik.com/wiki/Manual:Interface/Wireless)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_configuration#hw_retries CapsmanConfiguration#hw_retries}
  */
  readonly hwRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_configuration#id CapsmanConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Adjusts scan-list to use indoor, outdoor or all frequencies for the country that is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_configuration#installation CapsmanConfiguration#installation}
  */
  readonly installation?: string;
  /**
  * If a client has not communicated for around 20 seconds, AP sends a "keepalive-frame".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_configuration#keepalive_frames CapsmanConfiguration#keepalive_frames}
  */
  readonly keepaliveFrames?: string;
  /**
  * Tags the interface to the load balancing group. For a client to connect to interface in this group, the interface should have the same number of already connected clients as all other interfaces in the group or smaller. Useful in setups where ranges of CAPs mostly overlap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_configuration#load_balancing_group CapsmanConfiguration#load_balancing_group}
  */
  readonly loadBalancingGroup?: string;
  /**
  * Maximum number of associated clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_configuration#max_sta_count CapsmanConfiguration#max_sta_count}
  */
  readonly maxStaCount?: number;
  /**
  * Set operational mode. Only **ap** currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_configuration#mode CapsmanConfiguration#mode}
  */
  readonly mode?: string;
  /**
  * When set to full multicast packets will be sent with unicast destination MAC address, resolving multicast problem on a wireless link. This option should be enabled only on the access point, clients should be configured in station-bridge mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_configuration#multicast_helper CapsmanConfiguration#multicast_helper}
  */
  readonly multicastHelper?: string;
  /**
  * Changing the name of this resource will force it to be recreated.
  * 	> The links of other configuration properties to this resource may be lost!
  * 	> Changing the name of the resource outside of a Terraform will result in a loss of control integrity for that resource!
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_configuration#name CapsmanConfiguration#name}
  */
  readonly name: string;
  /**
  * Rates inline settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_configuration#rates CapsmanConfiguration#rates}
  */
  readonly rates?: { [key: string]: string };
  /**
  * Which antennas to use for receive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_configuration#rx_chains CapsmanConfiguration#rx_chains}
  */
  readonly rxChains?: number[];
  /**
  * Security inline settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_configuration#security CapsmanConfiguration#security}
  */
  readonly security?: { [key: string]: string };
  /**
  * SSID (service set identifier) is a name broadcast in the beacons that identifies wireless network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_configuration#ssid CapsmanConfiguration#ssid}
  */
  readonly ssid?: string;
  /**
  * Which antennas to use for transmit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_configuration#tx_chains CapsmanConfiguration#tx_chains}
  */
  readonly txChains?: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_configuration routeros_capsman_configuration}
*/
export class CapsmanConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_capsman_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CapsmanConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CapsmanConfiguration to import
  * @param importFromId The id of the existing CapsmanConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CapsmanConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_capsman_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_configuration routeros_capsman_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CapsmanConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: CapsmanConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_capsman_configuration',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.91.0',
        providerVersionConstraint: '1.91.0'
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
    this._channel = config.channel;
    this._comment = config.comment;
    this._country = config.country;
    this._datapath = config.datapath;
    this._disconnectTimeout = config.disconnectTimeout;
    this._distance = config.distance;
    this._frameLifetime = config.frameLifetime;
    this._guardInterval = config.guardInterval;
    this._hideSsid = config.hideSsid;
    this._hwProtectionMode = config.hwProtectionMode;
    this._hwRetries = config.hwRetries;
    this._id = config.id;
    this._installation = config.installation;
    this._keepaliveFrames = config.keepaliveFrames;
    this._loadBalancingGroup = config.loadBalancingGroup;
    this._maxStaCount = config.maxStaCount;
    this._mode = config.mode;
    this._multicastHelper = config.multicastHelper;
    this._name = config.name;
    this._rates = config.rates;
    this._rxChains = config.rxChains;
    this._security = config.security;
    this._ssid = config.ssid;
    this._txChains = config.txChains;
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

  // disconnect_timeout - computed: false, optional: true, required: false
  private _disconnectTimeout?: string; 
  public get disconnectTimeout() {
    return this.getStringAttribute('disconnect_timeout');
  }
  public set disconnectTimeout(value: string) {
    this._disconnectTimeout = value;
  }
  public resetDisconnectTimeout() {
    this._disconnectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disconnectTimeoutInput() {
    return this._disconnectTimeout;
  }

  // distance - computed: false, optional: true, required: false
  private _distance?: string; 
  public get distance() {
    return this.getStringAttribute('distance');
  }
  public set distance(value: string) {
    this._distance = value;
  }
  public resetDistance() {
    this._distance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceInput() {
    return this._distance;
  }

  // frame_lifetime - computed: false, optional: true, required: false
  private _frameLifetime?: string; 
  public get frameLifetime() {
    return this.getStringAttribute('frame_lifetime');
  }
  public set frameLifetime(value: string) {
    this._frameLifetime = value;
  }
  public resetFrameLifetime() {
    this._frameLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameLifetimeInput() {
    return this._frameLifetime;
  }

  // guard_interval - computed: false, optional: true, required: false
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

  // hide_ssid - computed: true, optional: true, required: false
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

  // hw_protection_mode - computed: false, optional: true, required: false
  private _hwProtectionMode?: string; 
  public get hwProtectionMode() {
    return this.getStringAttribute('hw_protection_mode');
  }
  public set hwProtectionMode(value: string) {
    this._hwProtectionMode = value;
  }
  public resetHwProtectionMode() {
    this._hwProtectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwProtectionModeInput() {
    return this._hwProtectionMode;
  }

  // hw_retries - computed: false, optional: true, required: false
  private _hwRetries?: number; 
  public get hwRetries() {
    return this.getNumberAttribute('hw_retries');
  }
  public set hwRetries(value: number) {
    this._hwRetries = value;
  }
  public resetHwRetries() {
    this._hwRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwRetriesInput() {
    return this._hwRetries;
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

  // installation - computed: false, optional: true, required: false
  private _installation?: string; 
  public get installation() {
    return this.getStringAttribute('installation');
  }
  public set installation(value: string) {
    this._installation = value;
  }
  public resetInstallation() {
    this._installation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installationInput() {
    return this._installation;
  }

  // keepalive_frames - computed: false, optional: true, required: false
  private _keepaliveFrames?: string; 
  public get keepaliveFrames() {
    return this.getStringAttribute('keepalive_frames');
  }
  public set keepaliveFrames(value: string) {
    this._keepaliveFrames = value;
  }
  public resetKeepaliveFrames() {
    this._keepaliveFrames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveFramesInput() {
    return this._keepaliveFrames;
  }

  // load_balancing_group - computed: false, optional: true, required: false
  private _loadBalancingGroup?: string; 
  public get loadBalancingGroup() {
    return this.getStringAttribute('load_balancing_group');
  }
  public set loadBalancingGroup(value: string) {
    this._loadBalancingGroup = value;
  }
  public resetLoadBalancingGroup() {
    this._loadBalancingGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingGroupInput() {
    return this._loadBalancingGroup;
  }

  // max_sta_count - computed: false, optional: true, required: false
  private _maxStaCount?: number; 
  public get maxStaCount() {
    return this.getNumberAttribute('max_sta_count');
  }
  public set maxStaCount(value: number) {
    this._maxStaCount = value;
  }
  public resetMaxStaCount() {
    this._maxStaCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStaCountInput() {
    return this._maxStaCount;
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

  // multicast_helper - computed: false, optional: true, required: false
  private _multicastHelper?: string; 
  public get multicastHelper() {
    return this.getStringAttribute('multicast_helper');
  }
  public set multicastHelper(value: string) {
    this._multicastHelper = value;
  }
  public resetMulticastHelper() {
    this._multicastHelper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastHelperInput() {
    return this._multicastHelper;
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

  // rates - computed: false, optional: true, required: false
  private _rates?: { [key: string]: string }; 
  public get rates() {
    return this.getStringMapAttribute('rates');
  }
  public set rates(value: { [key: string]: string }) {
    this._rates = value;
  }
  public resetRates() {
    this._rates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratesInput() {
    return this._rates;
  }

  // rx_chains - computed: false, optional: true, required: false
  private _rxChains?: number[]; 
  public get rxChains() {
    return this.getNumberListAttribute('rx_chains');
  }
  public set rxChains(value: number[]) {
    this._rxChains = value;
  }
  public resetRxChains() {
    this._rxChains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxChainsInput() {
    return this._rxChains;
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

  // tx_chains - computed: false, optional: true, required: false
  private _txChains?: number[]; 
  public get txChains() {
    return this.getNumberListAttribute('tx_chains');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      ___ts___: cdktf.stringToTerraform(this._ts),
      channel: cdktf.hashMapper(cdktf.stringToTerraform)(this._channel),
      comment: cdktf.stringToTerraform(this._comment),
      country: cdktf.stringToTerraform(this._country),
      datapath: cdktf.hashMapper(cdktf.stringToTerraform)(this._datapath),
      disconnect_timeout: cdktf.stringToTerraform(this._disconnectTimeout),
      distance: cdktf.stringToTerraform(this._distance),
      frame_lifetime: cdktf.stringToTerraform(this._frameLifetime),
      guard_interval: cdktf.stringToTerraform(this._guardInterval),
      hide_ssid: cdktf.booleanToTerraform(this._hideSsid),
      hw_protection_mode: cdktf.stringToTerraform(this._hwProtectionMode),
      hw_retries: cdktf.numberToTerraform(this._hwRetries),
      id: cdktf.stringToTerraform(this._id),
      installation: cdktf.stringToTerraform(this._installation),
      keepalive_frames: cdktf.stringToTerraform(this._keepaliveFrames),
      load_balancing_group: cdktf.stringToTerraform(this._loadBalancingGroup),
      max_sta_count: cdktf.numberToTerraform(this._maxStaCount),
      mode: cdktf.stringToTerraform(this._mode),
      multicast_helper: cdktf.stringToTerraform(this._multicastHelper),
      name: cdktf.stringToTerraform(this._name),
      rates: cdktf.hashMapper(cdktf.stringToTerraform)(this._rates),
      rx_chains: cdktf.listMapper(cdktf.numberToTerraform, false)(this._rxChains),
      security: cdktf.hashMapper(cdktf.stringToTerraform)(this._security),
      ssid: cdktf.stringToTerraform(this._ssid),
      tx_chains: cdktf.listMapper(cdktf.numberToTerraform, false)(this._txChains),
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
      disconnect_timeout: {
        value: cdktf.stringToHclTerraform(this._disconnectTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distance: {
        value: cdktf.stringToHclTerraform(this._distance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      frame_lifetime: {
        value: cdktf.stringToHclTerraform(this._frameLifetime),
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
      hide_ssid: {
        value: cdktf.booleanToHclTerraform(this._hideSsid),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hw_protection_mode: {
        value: cdktf.stringToHclTerraform(this._hwProtectionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hw_retries: {
        value: cdktf.numberToHclTerraform(this._hwRetries),
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
      installation: {
        value: cdktf.stringToHclTerraform(this._installation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keepalive_frames: {
        value: cdktf.stringToHclTerraform(this._keepaliveFrames),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancing_group: {
        value: cdktf.stringToHclTerraform(this._loadBalancingGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_sta_count: {
        value: cdktf.numberToHclTerraform(this._maxStaCount),
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
      multicast_helper: {
        value: cdktf.stringToHclTerraform(this._multicastHelper),
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
      rates: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._rates),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      rx_chains: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._rxChains),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
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
      tx_chains: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._txChains),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
