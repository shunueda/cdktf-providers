// https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceEthernetConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet#___path___ InterfaceEthernet#___path___}
  */
  readonly path?: string;
  /**
  * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet#___skip___ InterfaceEthernet#___skip___}
  */
  readonly skip?: string;
  /**
  * 
  * 				Advertised speed and duplex modes for Ethernet interfaces over twisted pair, 
  * 				only applies when auto-negotiation is enabled. Advertising higher speeds than 
  * 				the actual interface supported speed will have no effect, multiple options are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet#advertise InterfaceEthernet#advertise}
  */
  readonly advertise?: string;
  /**
  * Address Resolution Protocol mode:
  *   * disabled - the interface will not use ARP
  *   * enabled - the interface will use ARP
  *   * local-proxy-arp - the router performs proxy ARP on the interface and sends replies to the same interface
  *   * proxy-arp - the router performs proxy ARP on the interface and sends replies to other interfaces
  *   * reply-only - the interface will only reply to requests originated from matching IP address/MAC address combinations which are entered as static entries in the ARP table. No dynamic entries will be automatically stored in the ARP table. Therefore for communications to be successful, a valid static entry must already exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet#arp InterfaceEthernet#arp}
  */
  readonly arp?: string;
  /**
  * ARP timeout is time how long ARP record is kept in ARP table after no packets are received from IP. Value auto equals to the value of arp-timeout in IP/Settings, default is 30s. Can use postfix `ms`, `s`, `m`, `h`, `d` for milliseconds, seconds, minutes, hours or days. If no postfix is set then seconds (s) is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet#arp_timeout InterfaceEthernet#arp_timeout}
  */
  readonly arpTimeout?: string;
  /**
  * When enabled, the interface "advertises" its maximum capabilities to achieve the best connection possible.
  * 					Note1: Auto-negotiation should not be disabled on one end only, otherwise Ethernet Interfaces may not work properly.
  * 					Note2: Gigabit Ethernet and NBASE-T Ethernet links cannot work with auto-negotiation disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet#auto_negotiation InterfaceEthernet#auto_negotiation}
  */
  readonly autoNegotiation?: boolean | cdktf.IResolvable;
  /**
  * Sets max rx/tx bandwidth in kbps that will be handled by an interface. TX limit is supported on all Atheros switch-chip ports. 
  * 				RX limit is supported only on Atheros8327/QCA8337 switch-chip ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet#bandwidth InterfaceEthernet#bandwidth}
  */
  readonly bandwidth?: string;
  /**
  * Changes the cable length setting (only applicable to NS DP83815/6 cards)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet#cable_settings InterfaceEthernet#cable_settings}
  */
  readonly cableSettings?: string;
  /**
  * When auto mode is selected, the port that was first connected will establish the link. In case this link fails, the other port will try to establish a new link. If both ports are connected at the same time (e.g. after reboot), 
  * 				the priority will be the SFP/SFP+ port. When sfp mode is selected, the interface will only work through SFP/SFP+ cage.
  * 				When copper mode is selected, the interface will only work through RJ45 Ethernet port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet#combo_mode InterfaceEthernet#combo_mode}
  */
  readonly comboMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet#comment InterfaceEthernet#comment}
  */
  readonly comment?: string;
  /**
  * Disable running check. If this value is set to 'no', the router automatically detects whether the NIC is connected with a device in the network or not.
  * 			Default value is 'yes' because older NICs do not support it. (only applicable to x86)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet#disable_running_check InterfaceEthernet#disable_running_check}
  */
  readonly disableRunningCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet#disabled InterfaceEthernet#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The factory name of the identifier, serves as resource identifier. Determines which interface will be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet#factory_name InterfaceEthernet#factory_name}
  */
  readonly factoryName: string;
  /**
  * Changes Forward Error Correction (FEC) mode for SFP28, QSFP+ and QSFP28 interfaces. Same mode should be used on both link ends, otherwise FEC mismatch could result in non-working link or even false link-ups. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet#fec_mode InterfaceEthernet#fec_mode}
  */
  readonly fecMode?: string;
  /**
  * Defines whether the transmission of data appears in two directions simultaneously, only applies when auto-negotiation is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet#full_duplex InterfaceEthernet#full_duplex}
  */
  readonly fullDuplex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet#id InterfaceEthernet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Layer2 Maximum transmission unit. [See](https://wiki.mikrotik.com/wiki/Maximum_Transmission_Unit_on_RouterBoards).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet#l2mtu InterfaceEthernet#l2mtu}
  */
  readonly l2Mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet#loop_protect InterfaceEthernet#loop_protect}
  */
  readonly loopProtect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet#loop_protect_disable_time InterfaceEthernet#loop_protect_disable_time}
  */
  readonly loopProtectDisableTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet#loop_protect_send_interval InterfaceEthernet#loop_protect_send_interval}
  */
  readonly loopProtectSendInterval?: string;
  /**
  * Media Access Control number of an interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet#mac_address InterfaceEthernet#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Whether the MDI/X auto cross over cable correction feature is enabled for the port (Hardware specific, e.g. ether1 on RB500 can be set to yes/no. Fixed to 'yes' on other hardware.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet#mdix_enable InterfaceEthernet#mdix_enable}
  */
  readonly mdixEnable?: boolean | cdktf.IResolvable;
  /**
  * Layer3 Maximum transmission unit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet#mtu InterfaceEthernet#mtu}
  */
  readonly mtu?: number;
  /**
  * Name of the ethernet interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet#name InterfaceEthernet#name}
  */
  readonly name: string;
  /**
  * An option that enables LLDP for managing devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet#poe_lldp_enabled InterfaceEthernet#poe_lldp_enabled}
  */
  readonly poeLldpEnabled?: boolean | cdktf.IResolvable;
  /**
  * PoE settings: (https://wiki.mikrotik.com/wiki/Manual:PoE-Out)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet#poe_out InterfaceEthernet#poe_out}
  */
  readonly poeOut?: string;
  /**
  * PoE settings: (https://wiki.mikrotik.com/wiki/Manual:PoE-Out)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet#poe_priority InterfaceEthernet#poe_priority}
  */
  readonly poePriority?: number;
  /**
  * An option that allows us to manually control the voltage outputs on the PoE port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet#poe_voltage InterfaceEthernet#poe_voltage}
  */
  readonly poeVoltage?: string;
  /**
  * An options that disables PoE-Out power for 5s between the specified intervals.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet#power_cycle_interval InterfaceEthernet#power_cycle_interval}
  */
  readonly powerCycleInterval?: string;
  /**
  * An address to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet#power_cycle_ping_address InterfaceEthernet#power_cycle_ping_address}
  */
  readonly powerCyclePingAddress?: string;
  /**
  * An option that enables ping watchdog of power cycles on the port if a host does not respond to ICMP or MAC-Telnet packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet#power_cycle_ping_enabled InterfaceEthernet#power_cycle_ping_enabled}
  */
  readonly powerCyclePingEnabled?: boolean | cdktf.IResolvable;
  /**
  * If the host does not respond over the specified period, the PoE-Out port is switched off for 5s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet#power_cycle_ping_timeout InterfaceEthernet#power_cycle_ping_timeout}
  */
  readonly powerCyclePingTimeout?: string;
  /**
  * When set to on, the port will process received pause frames and suspend transmission if required.
  * 					auto is the same as on except when auto-negotiation=yes flow control status is resolved by taking into account what other end advertises.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet#rx_flow_control InterfaceEthernet#rx_flow_control}
  */
  readonly rxFlowControl?: string;
  /**
  * An option to ignore RX LOS (Loss of Signal) status of the SFP module.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet#sfp_ignore_rx_los InterfaceEthernet#sfp_ignore_rx_los}
  */
  readonly sfpIgnoreRxLos?: boolean | cdktf.IResolvable;
  /**
  * Allows to control rate select pin for SFP ports. Values: high | low
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet#sfp_rate_select InterfaceEthernet#sfp_rate_select}
  */
  readonly sfpRateSelect?: string;
  /**
  * The temperature in Celsius at which the interface will be temporarily turned off due to too high detected SFP module temperature (introduced v6.48).The default value for SFP/SFP+/SFP28 interfaces is 95, and for QSFP+/QSFP28 interfaces 80 (introduced v7.6).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet#sfp_shutdown_temperature InterfaceEthernet#sfp_shutdown_temperature}
  */
  readonly sfpShutdownTemperature?: number;
  /**
  * Sets interface data transmission speed which takes effect only when ```auto_negotiation``` is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet#speed InterfaceEthernet#speed}
  */
  readonly speed?: string;
  /**
  * When set to on, the port will generate pause frames to the upstream device to temporarily stop the packet transmission. 
  * 					Pause frames are only generated when some routers output interface is congested and packets cannot be transmitted anymore. 
  * 					Auto is the same as on except when auto-negotiation=yes flow control status is resolved by taking into account what other end advertises.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet#tx_flow_control InterfaceEthernet#tx_flow_control}
  */
  readonly txFlowControl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet routeros_interface_ethernet}
*/
export class InterfaceEthernet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_interface_ethernet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceEthernet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceEthernet to import
  * @param importFromId The id of the existing InterfaceEthernet that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceEthernet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_interface_ethernet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/interface_ethernet routeros_interface_ethernet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceEthernetConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceEthernetConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_interface_ethernet',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.95.0',
        providerVersionConstraint: '1.95.0'
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
    this._skip = config.skip;
    this._advertise = config.advertise;
    this._arp = config.arp;
    this._arpTimeout = config.arpTimeout;
    this._autoNegotiation = config.autoNegotiation;
    this._bandwidth = config.bandwidth;
    this._cableSettings = config.cableSettings;
    this._comboMode = config.comboMode;
    this._comment = config.comment;
    this._disableRunningCheck = config.disableRunningCheck;
    this._disabled = config.disabled;
    this._factoryName = config.factoryName;
    this._fecMode = config.fecMode;
    this._fullDuplex = config.fullDuplex;
    this._id = config.id;
    this._l2Mtu = config.l2Mtu;
    this._loopProtect = config.loopProtect;
    this._loopProtectDisableTime = config.loopProtectDisableTime;
    this._loopProtectSendInterval = config.loopProtectSendInterval;
    this._macAddress = config.macAddress;
    this._mdixEnable = config.mdixEnable;
    this._mtu = config.mtu;
    this._name = config.name;
    this._poeLldpEnabled = config.poeLldpEnabled;
    this._poeOut = config.poeOut;
    this._poePriority = config.poePriority;
    this._poeVoltage = config.poeVoltage;
    this._powerCycleInterval = config.powerCycleInterval;
    this._powerCyclePingAddress = config.powerCyclePingAddress;
    this._powerCyclePingEnabled = config.powerCyclePingEnabled;
    this._powerCyclePingTimeout = config.powerCyclePingTimeout;
    this._rxFlowControl = config.rxFlowControl;
    this._sfpIgnoreRxLos = config.sfpIgnoreRxLos;
    this._sfpRateSelect = config.sfpRateSelect;
    this._sfpShutdownTemperature = config.sfpShutdownTemperature;
    this._speed = config.speed;
    this._txFlowControl = config.txFlowControl;
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

  // ___skip___ - computed: false, optional: true, required: false
  private _skip?: string; 
  public get skip() {
    return this.getStringAttribute('___skip___');
  }
  public set skip(value: string) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
  }

  // advertise - computed: false, optional: true, required: false
  private _advertise?: string; 
  public get advertise() {
    return this.getStringAttribute('advertise');
  }
  public set advertise(value: string) {
    this._advertise = value;
  }
  public resetAdvertise() {
    this._advertise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseInput() {
    return this._advertise;
  }

  // arp - computed: false, optional: true, required: false
  private _arp?: string; 
  public get arp() {
    return this.getStringAttribute('arp');
  }
  public set arp(value: string) {
    this._arp = value;
  }
  public resetArp() {
    this._arp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpInput() {
    return this._arp;
  }

  // arp_timeout - computed: false, optional: true, required: false
  private _arpTimeout?: string; 
  public get arpTimeout() {
    return this.getStringAttribute('arp_timeout');
  }
  public set arpTimeout(value: string) {
    this._arpTimeout = value;
  }
  public resetArpTimeout() {
    this._arpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTimeoutInput() {
    return this._arpTimeout;
  }

  // auto_negotiation - computed: false, optional: true, required: false
  private _autoNegotiation?: boolean | cdktf.IResolvable; 
  public get autoNegotiation() {
    return this.getBooleanAttribute('auto_negotiation');
  }
  public set autoNegotiation(value: boolean | cdktf.IResolvable) {
    this._autoNegotiation = value;
  }
  public resetAutoNegotiation() {
    this._autoNegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoNegotiationInput() {
    return this._autoNegotiation;
  }

  // bandwidth - computed: false, optional: true, required: false
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

  // cable_settings - computed: false, optional: true, required: false
  private _cableSettings?: string; 
  public get cableSettings() {
    return this.getStringAttribute('cable_settings');
  }
  public set cableSettings(value: string) {
    this._cableSettings = value;
  }
  public resetCableSettings() {
    this._cableSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cableSettingsInput() {
    return this._cableSettings;
  }

  // combo_mode - computed: false, optional: true, required: false
  private _comboMode?: string; 
  public get comboMode() {
    return this.getStringAttribute('combo_mode');
  }
  public set comboMode(value: string) {
    this._comboMode = value;
  }
  public resetComboMode() {
    this._comboMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comboModeInput() {
    return this._comboMode;
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

  // default_name - computed: true, optional: false, required: false
  public get defaultName() {
    return this.getStringAttribute('default_name');
  }

  // disable_running_check - computed: false, optional: true, required: false
  private _disableRunningCheck?: boolean | cdktf.IResolvable; 
  public get disableRunningCheck() {
    return this.getBooleanAttribute('disable_running_check');
  }
  public set disableRunningCheck(value: boolean | cdktf.IResolvable) {
    this._disableRunningCheck = value;
  }
  public resetDisableRunningCheck() {
    this._disableRunningCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRunningCheckInput() {
    return this._disableRunningCheck;
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

  // factory_name - computed: false, optional: false, required: true
  private _factoryName?: string; 
  public get factoryName() {
    return this.getStringAttribute('factory_name');
  }
  public set factoryName(value: string) {
    this._factoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get factoryNameInput() {
    return this._factoryName;
  }

  // fec_mode - computed: false, optional: true, required: false
  private _fecMode?: string; 
  public get fecMode() {
    return this.getStringAttribute('fec_mode');
  }
  public set fecMode(value: string) {
    this._fecMode = value;
  }
  public resetFecMode() {
    this._fecMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fecModeInput() {
    return this._fecMode;
  }

  // full_duplex - computed: false, optional: true, required: false
  private _fullDuplex?: boolean | cdktf.IResolvable; 
  public get fullDuplex() {
    return this.getBooleanAttribute('full_duplex');
  }
  public set fullDuplex(value: boolean | cdktf.IResolvable) {
    this._fullDuplex = value;
  }
  public resetFullDuplex() {
    this._fullDuplex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullDuplexInput() {
    return this._fullDuplex;
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

  // l2mtu - computed: false, optional: true, required: false
  private _l2Mtu?: number; 
  public get l2Mtu() {
    return this.getNumberAttribute('l2mtu');
  }
  public set l2Mtu(value: number) {
    this._l2Mtu = value;
  }
  public resetL2Mtu() {
    this._l2Mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2MtuInput() {
    return this._l2Mtu;
  }

  // loop_protect - computed: false, optional: true, required: false
  private _loopProtect?: string; 
  public get loopProtect() {
    return this.getStringAttribute('loop_protect');
  }
  public set loopProtect(value: string) {
    this._loopProtect = value;
  }
  public resetLoopProtect() {
    this._loopProtect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopProtectInput() {
    return this._loopProtect;
  }

  // loop_protect_disable_time - computed: false, optional: true, required: false
  private _loopProtectDisableTime?: string; 
  public get loopProtectDisableTime() {
    return this.getStringAttribute('loop_protect_disable_time');
  }
  public set loopProtectDisableTime(value: string) {
    this._loopProtectDisableTime = value;
  }
  public resetLoopProtectDisableTime() {
    this._loopProtectDisableTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopProtectDisableTimeInput() {
    return this._loopProtectDisableTime;
  }

  // loop_protect_send_interval - computed: false, optional: true, required: false
  private _loopProtectSendInterval?: string; 
  public get loopProtectSendInterval() {
    return this.getStringAttribute('loop_protect_send_interval');
  }
  public set loopProtectSendInterval(value: string) {
    this._loopProtectSendInterval = value;
  }
  public resetLoopProtectSendInterval() {
    this._loopProtectSendInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopProtectSendIntervalInput() {
    return this._loopProtectSendInterval;
  }

  // loop_protect_status - computed: true, optional: false, required: false
  public get loopProtectStatus() {
    return this.getStringAttribute('loop_protect_status');
  }

  // mac_address - computed: false, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // mdix_enable - computed: false, optional: true, required: false
  private _mdixEnable?: boolean | cdktf.IResolvable; 
  public get mdixEnable() {
    return this.getBooleanAttribute('mdix_enable');
  }
  public set mdixEnable(value: boolean | cdktf.IResolvable) {
    this._mdixEnable = value;
  }
  public resetMdixEnable() {
    this._mdixEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdixEnableInput() {
    return this._mdixEnable;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
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

  // orig_mac_address - computed: true, optional: false, required: false
  public get origMacAddress() {
    return this.getStringAttribute('orig_mac_address');
  }

  // poe_lldp_enabled - computed: false, optional: true, required: false
  private _poeLldpEnabled?: boolean | cdktf.IResolvable; 
  public get poeLldpEnabled() {
    return this.getBooleanAttribute('poe_lldp_enabled');
  }
  public set poeLldpEnabled(value: boolean | cdktf.IResolvable) {
    this._poeLldpEnabled = value;
  }
  public resetPoeLldpEnabled() {
    this._poeLldpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poeLldpEnabledInput() {
    return this._poeLldpEnabled;
  }

  // poe_out - computed: false, optional: true, required: false
  private _poeOut?: string; 
  public get poeOut() {
    return this.getStringAttribute('poe_out');
  }
  public set poeOut(value: string) {
    this._poeOut = value;
  }
  public resetPoeOut() {
    this._poeOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poeOutInput() {
    return this._poeOut;
  }

  // poe_priority - computed: false, optional: true, required: false
  private _poePriority?: number; 
  public get poePriority() {
    return this.getNumberAttribute('poe_priority');
  }
  public set poePriority(value: number) {
    this._poePriority = value;
  }
  public resetPoePriority() {
    this._poePriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poePriorityInput() {
    return this._poePriority;
  }

  // poe_voltage - computed: false, optional: true, required: false
  private _poeVoltage?: string; 
  public get poeVoltage() {
    return this.getStringAttribute('poe_voltage');
  }
  public set poeVoltage(value: string) {
    this._poeVoltage = value;
  }
  public resetPoeVoltage() {
    this._poeVoltage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poeVoltageInput() {
    return this._poeVoltage;
  }

  // power_cycle_interval - computed: false, optional: true, required: false
  private _powerCycleInterval?: string; 
  public get powerCycleInterval() {
    return this.getStringAttribute('power_cycle_interval');
  }
  public set powerCycleInterval(value: string) {
    this._powerCycleInterval = value;
  }
  public resetPowerCycleInterval() {
    this._powerCycleInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerCycleIntervalInput() {
    return this._powerCycleInterval;
  }

  // power_cycle_ping_address - computed: false, optional: true, required: false
  private _powerCyclePingAddress?: string; 
  public get powerCyclePingAddress() {
    return this.getStringAttribute('power_cycle_ping_address');
  }
  public set powerCyclePingAddress(value: string) {
    this._powerCyclePingAddress = value;
  }
  public resetPowerCyclePingAddress() {
    this._powerCyclePingAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerCyclePingAddressInput() {
    return this._powerCyclePingAddress;
  }

  // power_cycle_ping_enabled - computed: false, optional: true, required: false
  private _powerCyclePingEnabled?: boolean | cdktf.IResolvable; 
  public get powerCyclePingEnabled() {
    return this.getBooleanAttribute('power_cycle_ping_enabled');
  }
  public set powerCyclePingEnabled(value: boolean | cdktf.IResolvable) {
    this._powerCyclePingEnabled = value;
  }
  public resetPowerCyclePingEnabled() {
    this._powerCyclePingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerCyclePingEnabledInput() {
    return this._powerCyclePingEnabled;
  }

  // power_cycle_ping_timeout - computed: false, optional: true, required: false
  private _powerCyclePingTimeout?: string; 
  public get powerCyclePingTimeout() {
    return this.getStringAttribute('power_cycle_ping_timeout');
  }
  public set powerCyclePingTimeout(value: string) {
    this._powerCyclePingTimeout = value;
  }
  public resetPowerCyclePingTimeout() {
    this._powerCyclePingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerCyclePingTimeoutInput() {
    return this._powerCyclePingTimeout;
  }

  // running - computed: true, optional: false, required: false
  public get running() {
    return this.getBooleanAttribute('running');
  }

  // rx_flow_control - computed: false, optional: true, required: false
  private _rxFlowControl?: string; 
  public get rxFlowControl() {
    return this.getStringAttribute('rx_flow_control');
  }
  public set rxFlowControl(value: string) {
    this._rxFlowControl = value;
  }
  public resetRxFlowControl() {
    this._rxFlowControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxFlowControlInput() {
    return this._rxFlowControl;
  }

  // sfp_ignore_rx_los - computed: false, optional: true, required: false
  private _sfpIgnoreRxLos?: boolean | cdktf.IResolvable; 
  public get sfpIgnoreRxLos() {
    return this.getBooleanAttribute('sfp_ignore_rx_los');
  }
  public set sfpIgnoreRxLos(value: boolean | cdktf.IResolvable) {
    this._sfpIgnoreRxLos = value;
  }
  public resetSfpIgnoreRxLos() {
    this._sfpIgnoreRxLos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sfpIgnoreRxLosInput() {
    return this._sfpIgnoreRxLos;
  }

  // sfp_rate_select - computed: false, optional: true, required: false
  private _sfpRateSelect?: string; 
  public get sfpRateSelect() {
    return this.getStringAttribute('sfp_rate_select');
  }
  public set sfpRateSelect(value: string) {
    this._sfpRateSelect = value;
  }
  public resetSfpRateSelect() {
    this._sfpRateSelect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sfpRateSelectInput() {
    return this._sfpRateSelect;
  }

  // sfp_shutdown_temperature - computed: false, optional: true, required: false
  private _sfpShutdownTemperature?: number; 
  public get sfpShutdownTemperature() {
    return this.getNumberAttribute('sfp_shutdown_temperature');
  }
  public set sfpShutdownTemperature(value: number) {
    this._sfpShutdownTemperature = value;
  }
  public resetSfpShutdownTemperature() {
    this._sfpShutdownTemperature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sfpShutdownTemperatureInput() {
    return this._sfpShutdownTemperature;
  }

  // slave - computed: true, optional: false, required: false
  public get slave() {
    return this.getBooleanAttribute('slave');
  }

  // speed - computed: false, optional: true, required: false
  private _speed?: string; 
  public get speed() {
    return this.getStringAttribute('speed');
  }
  public set speed(value: string) {
    this._speed = value;
  }
  public resetSpeed() {
    this._speed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInput() {
    return this._speed;
  }

  // switch - computed: true, optional: false, required: false
  public get switch() {
    return this.getStringAttribute('switch');
  }

  // tx_flow_control - computed: false, optional: true, required: false
  private _txFlowControl?: string; 
  public get txFlowControl() {
    return this.getStringAttribute('tx_flow_control');
  }
  public set txFlowControl(value: string) {
    this._txFlowControl = value;
  }
  public resetTxFlowControl() {
    this._txFlowControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txFlowControlInput() {
    return this._txFlowControl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      ___skip___: cdktf.stringToTerraform(this._skip),
      advertise: cdktf.stringToTerraform(this._advertise),
      arp: cdktf.stringToTerraform(this._arp),
      arp_timeout: cdktf.stringToTerraform(this._arpTimeout),
      auto_negotiation: cdktf.booleanToTerraform(this._autoNegotiation),
      bandwidth: cdktf.stringToTerraform(this._bandwidth),
      cable_settings: cdktf.stringToTerraform(this._cableSettings),
      combo_mode: cdktf.stringToTerraform(this._comboMode),
      comment: cdktf.stringToTerraform(this._comment),
      disable_running_check: cdktf.booleanToTerraform(this._disableRunningCheck),
      disabled: cdktf.booleanToTerraform(this._disabled),
      factory_name: cdktf.stringToTerraform(this._factoryName),
      fec_mode: cdktf.stringToTerraform(this._fecMode),
      full_duplex: cdktf.booleanToTerraform(this._fullDuplex),
      id: cdktf.stringToTerraform(this._id),
      l2mtu: cdktf.numberToTerraform(this._l2Mtu),
      loop_protect: cdktf.stringToTerraform(this._loopProtect),
      loop_protect_disable_time: cdktf.stringToTerraform(this._loopProtectDisableTime),
      loop_protect_send_interval: cdktf.stringToTerraform(this._loopProtectSendInterval),
      mac_address: cdktf.stringToTerraform(this._macAddress),
      mdix_enable: cdktf.booleanToTerraform(this._mdixEnable),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      poe_lldp_enabled: cdktf.booleanToTerraform(this._poeLldpEnabled),
      poe_out: cdktf.stringToTerraform(this._poeOut),
      poe_priority: cdktf.numberToTerraform(this._poePriority),
      poe_voltage: cdktf.stringToTerraform(this._poeVoltage),
      power_cycle_interval: cdktf.stringToTerraform(this._powerCycleInterval),
      power_cycle_ping_address: cdktf.stringToTerraform(this._powerCyclePingAddress),
      power_cycle_ping_enabled: cdktf.booleanToTerraform(this._powerCyclePingEnabled),
      power_cycle_ping_timeout: cdktf.stringToTerraform(this._powerCyclePingTimeout),
      rx_flow_control: cdktf.stringToTerraform(this._rxFlowControl),
      sfp_ignore_rx_los: cdktf.booleanToTerraform(this._sfpIgnoreRxLos),
      sfp_rate_select: cdktf.stringToTerraform(this._sfpRateSelect),
      sfp_shutdown_temperature: cdktf.numberToTerraform(this._sfpShutdownTemperature),
      speed: cdktf.stringToTerraform(this._speed),
      tx_flow_control: cdktf.stringToTerraform(this._txFlowControl),
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
      ___skip___: {
        value: cdktf.stringToHclTerraform(this._skip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advertise: {
        value: cdktf.stringToHclTerraform(this._advertise),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arp: {
        value: cdktf.stringToHclTerraform(this._arp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arp_timeout: {
        value: cdktf.stringToHclTerraform(this._arpTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_negotiation: {
        value: cdktf.booleanToHclTerraform(this._autoNegotiation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bandwidth: {
        value: cdktf.stringToHclTerraform(this._bandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cable_settings: {
        value: cdktf.stringToHclTerraform(this._cableSettings),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      combo_mode: {
        value: cdktf.stringToHclTerraform(this._comboMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_running_check: {
        value: cdktf.booleanToHclTerraform(this._disableRunningCheck),
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
      factory_name: {
        value: cdktf.stringToHclTerraform(this._factoryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fec_mode: {
        value: cdktf.stringToHclTerraform(this._fecMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      full_duplex: {
        value: cdktf.booleanToHclTerraform(this._fullDuplex),
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
      l2mtu: {
        value: cdktf.numberToHclTerraform(this._l2Mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      loop_protect: {
        value: cdktf.stringToHclTerraform(this._loopProtect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loop_protect_disable_time: {
        value: cdktf.stringToHclTerraform(this._loopProtectDisableTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loop_protect_send_interval: {
        value: cdktf.stringToHclTerraform(this._loopProtectSendInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_address: {
        value: cdktf.stringToHclTerraform(this._macAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mdix_enable: {
        value: cdktf.booleanToHclTerraform(this._mdixEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
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
      poe_lldp_enabled: {
        value: cdktf.booleanToHclTerraform(this._poeLldpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      poe_out: {
        value: cdktf.stringToHclTerraform(this._poeOut),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      poe_priority: {
        value: cdktf.numberToHclTerraform(this._poePriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      poe_voltage: {
        value: cdktf.stringToHclTerraform(this._poeVoltage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      power_cycle_interval: {
        value: cdktf.stringToHclTerraform(this._powerCycleInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      power_cycle_ping_address: {
        value: cdktf.stringToHclTerraform(this._powerCyclePingAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      power_cycle_ping_enabled: {
        value: cdktf.booleanToHclTerraform(this._powerCyclePingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      power_cycle_ping_timeout: {
        value: cdktf.stringToHclTerraform(this._powerCyclePingTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rx_flow_control: {
        value: cdktf.stringToHclTerraform(this._rxFlowControl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sfp_ignore_rx_los: {
        value: cdktf.booleanToHclTerraform(this._sfpIgnoreRxLos),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sfp_rate_select: {
        value: cdktf.stringToHclTerraform(this._sfpRateSelect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sfp_shutdown_temperature: {
        value: cdktf.numberToHclTerraform(this._sfpShutdownTemperature),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      speed: {
        value: cdktf.stringToHclTerraform(this._speed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tx_flow_control: {
        value: cdktf.stringToHclTerraform(this._txFlowControl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
