// https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_bonding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceBondingConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_bonding#___path___ InterfaceBonding#___path___}
  */
  readonly path?: string;
  /**
  * Address Resolution Protocol for the interface. disabled - the interface will not use ARP enabled - the interface will use ARP proxy-arp - the interface will use the ARP proxy feature reply-only -the interface will only reply to requests originated from matching IPaddress/MAC address combinations which are entered as static entries inthe '/ip arp' table. No dynamic entries will be automatically stored inthe '/ip arp' table. Therefore for communications to be successful, avalid static entry must already exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_bonding#arp InterfaceBonding#arp}
  */
  readonly arp?: string;
  /**
  * Time in milliseconds defines how often to monitor ARP requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_bonding#arp_interval InterfaceBonding#arp_interval}
  */
  readonly arpInterval?: string;
  /**
  * IP target address which will be monitored if link-monitoring is set to arp. You can specify multiple IP addresses, separated by a comma.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_bonding#arp_ip_targets InterfaceBonding#arp_ip_targets}
  */
  readonly arpIpTargets?: string;
  /**
  * ARP timeout is time how long ARP record is kept in ARP table after no packets are received from IP. Value auto equals to the value of arp-timeout in IP/Settings, default is 30s. Can use postfix `ms`, `s`, `m`, `h`, `d` for milliseconds, seconds, minutes, hours or days. If no postfix is set then seconds (s) is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_bonding#arp_timeout InterfaceBonding#arp_timeout}
  */
  readonly arpTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_bonding#comment InterfaceBonding#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_bonding#disabled InterfaceBonding#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * If a link failure has been detected, the bonding interface is disabled for a down-delay time. The value should be a multiple of mii-interval, otherwise, it will be rounded down to the nearest value. This property only has an effect when link-monitoring is set to mii.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_bonding#down_delay InterfaceBonding#down_delay}
  */
  readonly downDelay?: string;
  /**
  * Bydefault, the bonding interface will use the MAC address of the firstselected slave interface. This property allows to configure static MACaddress for the bond interface (all zeros, broadcast or multicastaddresses will not apply). RouterOS will automatically change the MACaddress for slave interfaces and it will be visible in /interface ethernet configuration export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_bonding#forced_mac_address InterfaceBonding#forced_mac_address}
  */
  readonly forcedMacAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_bonding#id InterfaceBonding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies whether ports actively or passively participates in the LACP:
  *     - **active** - ports actively initiate LACP communication, regardless of the partner's LACP mode (i.e, it "speaks" even if the partner is silent)
  *     - **passive** - ports only respond to LACP messages and do not initiate them unless the partner is in active mode (i.e., it "listens" and responds only if spoken to).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_bonding#lacp_mode InterfaceBonding#lacp_mode}
  */
  readonly lacpMode?: string;
  /**
  * LinkAggregation Control Protocol rate specifies how often to exchange withLACPDUs between bonding peers. Used to determine whether a link is up orother changes have occurred in the network. LACP tries to adapt tothese changes providing failover.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_bonding#lacp_rate InterfaceBonding#lacp_rate}
  */
  readonly lacpRate?: string;
  /**
  * Specifiesthe upper 10 bits of the port key. The lower 6 bits are automaticallyassigned based on individual port link speed and duplex. The setting isavailable only since RouterOS v7.3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_bonding#lacp_user_key InterfaceBonding#lacp_user_key}
  */
  readonly lacpUserKey?: number;
  /**
  * Method to use for monitoring the link (whether it is up or down) arp - uses Address Resolution Protocol to determine whether the remote interface is reachable mii - uses Media Independent Interface to determine link status. Link status determination relies on the device driver. none - no method for link monitoring is used. Note: some bonding modes require specific link monitoring to work properly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_bonding#link_monitoring InterfaceBonding#link_monitoring}
  */
  readonly linkMonitoring?: string;
  /**
  * How often to monitor the link for failures (the parameter used only if link-monitoring is mii)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_bonding#mii_interval InterfaceBonding#mii_interval}
  */
  readonly miiInterval?: string;
  /**
  * How many active slave links needed for bonding to become active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_bonding#min_links InterfaceBonding#min_links}
  */
  readonly minLinks?: number;
  /**
  * ChangesMLAG ID for bonding interface. The same MLAG ID should be used on bothpeer devices to successfully create a single MLAG. See more details on MLAG .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_bonding#mlag_id InterfaceBonding#mlag_id}
  */
  readonly mlagId?: number;
  /**
  * Specifies one of the bonding policies:
  *   * 802.3ad -IEEE 802.3ad dynamic link aggregation. In this mode, the interfaces areaggregated in a group where each slave shares the same speed. Itprovides fault tolerance and load balancing. Slave selection foroutgoing traffic is done according to the transmit-hash-policy
  *   * active-backup - provides link backup. Only one slave can be active at a time. Another slave only becomes active, if the first one fails.
  *   * balance-alb - adaptive load balancing. The same as balance-tlb but received traffic is also balanced. The device driver should have support for changing it's MAC address.
  *   * balance-rr -round-robin load balancing. Slaves in a bonding interface will transmitand receive data in sequential order. It provides load balancing andfault tolerance.
  *   * balance-tlb -Outgoing traffic is distributed according to the current load on eachslave. Incoming traffic is not balanced and is received by the currentslave. If receiving slave fails, then another slave takes the MACaddress of the failed slave.
  *   * balance-xor - Transmit based on the selected transmit-hash-policy. This mode provides load balancing and fault tolerance.
  *   * broadcast -Broadcasts the same data on all interfaces at once. This provides faulttolerance but slows down traffic throughput on some slow machines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_bonding#mode InterfaceBonding#mode}
  */
  readonly mode?: string;
  /**
  * MaximumTransmit Unit in bytes. Must be smaller or equal to the smallest L2MTUvalue of a bonding slave. L2MTU of a bonding interface is determined bythe lowest L2MTU value among its slave interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_bonding#mtu InterfaceBonding#mtu}
  */
  readonly mtu?: number;
  /**
  * Name of the bonding interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_bonding#name InterfaceBonding#name}
  */
  readonly name: string;
  /**
  * Controlsthe primary interface between active slave ports, works only foractive-backup, balance-tlb and balance-alb modes. For active-backupmode, it controls which running interface is supposed to send andreceive the traffic. For balance-tlb mode, it controls which runninginterface is supposed to receive all the traffic, but for balance-albmode, it controls which interface is supposed to receive the unbalanced  traffic (the non-IPv4 traffic). When none of the interfaces are selectedas primary, device will automatically select the interface that isconfigured as the first one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_bonding#primary InterfaceBonding#primary}
  */
  readonly primary?: string;
  /**
  * At least two ethernet-like interfaces separated by a comma, which will be used for bonding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_bonding#slaves InterfaceBonding#slaves}
  */
  readonly slaves: string[];
  /**
  * Selects the transmit hash policy to use for slave selection in balance-xor and 802.3ad modes:
  *   * layer-2 -Uses XOR of hardware MAC addresses to generate the hash. This algorithm  will place all traffic to a particular network peer on the same slave.This algorithm is 802.3ad compliant.
  *   * layer-2-and-3 -This policy uses a combination of layer2 and layer3 protocolinformation to generate the hash. Uses XOR of hardware MAC addresses andIP addresses to generate the hash. This algorithm will place alltraffic to a particular network peer on the same slave. For non-IPtraffic, the formula is the same as for the layer2 transmit hash policy.This policy is intended to provide a more balanced distribution oftraffic than layer2 alone, especially in environments where a layer3gateway device is required to reach most destinations. This algorithm is802.3ad compliant.
  *   * layer-3-and-4 - This policyuses upper layer protocol information, when available, to generate thehash. This allows for traffic to a particular network peer to spanmultiple slaves, although a single connection will not span multipleslaves. For fragmented TCP or UDP packets and all other IP protocoltraffic, the source and destination port information is omitted. Fornon-IP traffic, the formula is the same as for the layer2 transmit hashpolicy. This algorithm is not fully 802.3ad compliant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_bonding#transmit_hash_policy InterfaceBonding#transmit_hash_policy}
  */
  readonly transmitHashPolicy?: string;
  /**
  * If a link has been brought up, the bonding interface is disabled for up-delay time and after this time it is enabled. The value should be a multiple of mii-interval , otherwise, it will be rounded down to the nearest value. This property only has an effect when link-monitoring is set to mii.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_bonding#up_delay InterfaceBonding#up_delay}
  */
  readonly upDelay?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_bonding routeros_interface_bonding}
*/
export class InterfaceBonding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_interface_bonding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceBonding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceBonding to import
  * @param importFromId The id of the existing InterfaceBonding that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_bonding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceBonding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_interface_bonding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_bonding routeros_interface_bonding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceBondingConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceBondingConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_interface_bonding',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.98.0',
        providerVersionConstraint: '1.98.0'
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
    this._arp = config.arp;
    this._arpInterval = config.arpInterval;
    this._arpIpTargets = config.arpIpTargets;
    this._arpTimeout = config.arpTimeout;
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._downDelay = config.downDelay;
    this._forcedMacAddress = config.forcedMacAddress;
    this._id = config.id;
    this._lacpMode = config.lacpMode;
    this._lacpRate = config.lacpRate;
    this._lacpUserKey = config.lacpUserKey;
    this._linkMonitoring = config.linkMonitoring;
    this._miiInterval = config.miiInterval;
    this._minLinks = config.minLinks;
    this._mlagId = config.mlagId;
    this._mode = config.mode;
    this._mtu = config.mtu;
    this._name = config.name;
    this._primary = config.primary;
    this._slaves = config.slaves;
    this._transmitHashPolicy = config.transmitHashPolicy;
    this._upDelay = config.upDelay;
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

  // arp_interval - computed: false, optional: true, required: false
  private _arpInterval?: string; 
  public get arpInterval() {
    return this.getStringAttribute('arp_interval');
  }
  public set arpInterval(value: string) {
    this._arpInterval = value;
  }
  public resetArpInterval() {
    this._arpInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpIntervalInput() {
    return this._arpInterval;
  }

  // arp_ip_targets - computed: false, optional: true, required: false
  private _arpIpTargets?: string; 
  public get arpIpTargets() {
    return this.getStringAttribute('arp_ip_targets');
  }
  public set arpIpTargets(value: string) {
    this._arpIpTargets = value;
  }
  public resetArpIpTargets() {
    this._arpIpTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpIpTargetsInput() {
    return this._arpIpTargets;
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

  // down_delay - computed: false, optional: true, required: false
  private _downDelay?: string; 
  public get downDelay() {
    return this.getStringAttribute('down_delay');
  }
  public set downDelay(value: string) {
    this._downDelay = value;
  }
  public resetDownDelay() {
    this._downDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downDelayInput() {
    return this._downDelay;
  }

  // forced_mac_address - computed: false, optional: true, required: false
  private _forcedMacAddress?: string; 
  public get forcedMacAddress() {
    return this.getStringAttribute('forced_mac_address');
  }
  public set forcedMacAddress(value: string) {
    this._forcedMacAddress = value;
  }
  public resetForcedMacAddress() {
    this._forcedMacAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcedMacAddressInput() {
    return this._forcedMacAddress;
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

  // lacp_mode - computed: false, optional: true, required: false
  private _lacpMode?: string; 
  public get lacpMode() {
    return this.getStringAttribute('lacp_mode');
  }
  public set lacpMode(value: string) {
    this._lacpMode = value;
  }
  public resetLacpMode() {
    this._lacpMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lacpModeInput() {
    return this._lacpMode;
  }

  // lacp_rate - computed: false, optional: true, required: false
  private _lacpRate?: string; 
  public get lacpRate() {
    return this.getStringAttribute('lacp_rate');
  }
  public set lacpRate(value: string) {
    this._lacpRate = value;
  }
  public resetLacpRate() {
    this._lacpRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lacpRateInput() {
    return this._lacpRate;
  }

  // lacp_user_key - computed: false, optional: true, required: false
  private _lacpUserKey?: number; 
  public get lacpUserKey() {
    return this.getNumberAttribute('lacp_user_key');
  }
  public set lacpUserKey(value: number) {
    this._lacpUserKey = value;
  }
  public resetLacpUserKey() {
    this._lacpUserKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lacpUserKeyInput() {
    return this._lacpUserKey;
  }

  // link_monitoring - computed: false, optional: true, required: false
  private _linkMonitoring?: string; 
  public get linkMonitoring() {
    return this.getStringAttribute('link_monitoring');
  }
  public set linkMonitoring(value: string) {
    this._linkMonitoring = value;
  }
  public resetLinkMonitoring() {
    this._linkMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkMonitoringInput() {
    return this._linkMonitoring;
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // mii_interval - computed: false, optional: true, required: false
  private _miiInterval?: string; 
  public get miiInterval() {
    return this.getStringAttribute('mii_interval');
  }
  public set miiInterval(value: string) {
    this._miiInterval = value;
  }
  public resetMiiInterval() {
    this._miiInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get miiIntervalInput() {
    return this._miiInterval;
  }

  // min_links - computed: false, optional: true, required: false
  private _minLinks?: number; 
  public get minLinks() {
    return this.getNumberAttribute('min_links');
  }
  public set minLinks(value: number) {
    this._minLinks = value;
  }
  public resetMinLinks() {
    this._minLinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLinksInput() {
    return this._minLinks;
  }

  // mlag_id - computed: false, optional: true, required: false
  private _mlagId?: number; 
  public get mlagId() {
    return this.getNumberAttribute('mlag_id');
  }
  public set mlagId(value: number) {
    this._mlagId = value;
  }
  public resetMlagId() {
    this._mlagId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mlagIdInput() {
    return this._mlagId;
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

  // primary - computed: false, optional: true, required: false
  private _primary?: string; 
  public get primary() {
    return this.getStringAttribute('primary');
  }
  public set primary(value: string) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // running - computed: true, optional: false, required: false
  public get running() {
    return this.getBooleanAttribute('running');
  }

  // slaves - computed: false, optional: false, required: true
  private _slaves?: string[]; 
  public get slaves() {
    return cdktf.Fn.tolist(this.getListAttribute('slaves'));
  }
  public set slaves(value: string[]) {
    this._slaves = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slavesInput() {
    return this._slaves;
  }

  // transmit_hash_policy - computed: false, optional: true, required: false
  private _transmitHashPolicy?: string; 
  public get transmitHashPolicy() {
    return this.getStringAttribute('transmit_hash_policy');
  }
  public set transmitHashPolicy(value: string) {
    this._transmitHashPolicy = value;
  }
  public resetTransmitHashPolicy() {
    this._transmitHashPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitHashPolicyInput() {
    return this._transmitHashPolicy;
  }

  // up_delay - computed: false, optional: true, required: false
  private _upDelay?: string; 
  public get upDelay() {
    return this.getStringAttribute('up_delay');
  }
  public set upDelay(value: string) {
    this._upDelay = value;
  }
  public resetUpDelay() {
    this._upDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upDelayInput() {
    return this._upDelay;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      arp: cdktf.stringToTerraform(this._arp),
      arp_interval: cdktf.stringToTerraform(this._arpInterval),
      arp_ip_targets: cdktf.stringToTerraform(this._arpIpTargets),
      arp_timeout: cdktf.stringToTerraform(this._arpTimeout),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      down_delay: cdktf.stringToTerraform(this._downDelay),
      forced_mac_address: cdktf.stringToTerraform(this._forcedMacAddress),
      id: cdktf.stringToTerraform(this._id),
      lacp_mode: cdktf.stringToTerraform(this._lacpMode),
      lacp_rate: cdktf.stringToTerraform(this._lacpRate),
      lacp_user_key: cdktf.numberToTerraform(this._lacpUserKey),
      link_monitoring: cdktf.stringToTerraform(this._linkMonitoring),
      mii_interval: cdktf.stringToTerraform(this._miiInterval),
      min_links: cdktf.numberToTerraform(this._minLinks),
      mlag_id: cdktf.numberToTerraform(this._mlagId),
      mode: cdktf.stringToTerraform(this._mode),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      primary: cdktf.stringToTerraform(this._primary),
      slaves: cdktf.listMapper(cdktf.stringToTerraform, false)(this._slaves),
      transmit_hash_policy: cdktf.stringToTerraform(this._transmitHashPolicy),
      up_delay: cdktf.stringToTerraform(this._upDelay),
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
      arp: {
        value: cdktf.stringToHclTerraform(this._arp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arp_interval: {
        value: cdktf.stringToHclTerraform(this._arpInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arp_ip_targets: {
        value: cdktf.stringToHclTerraform(this._arpIpTargets),
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
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      down_delay: {
        value: cdktf.stringToHclTerraform(this._downDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forced_mac_address: {
        value: cdktf.stringToHclTerraform(this._forcedMacAddress),
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
      lacp_mode: {
        value: cdktf.stringToHclTerraform(this._lacpMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lacp_rate: {
        value: cdktf.stringToHclTerraform(this._lacpRate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lacp_user_key: {
        value: cdktf.numberToHclTerraform(this._lacpUserKey),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      link_monitoring: {
        value: cdktf.stringToHclTerraform(this._linkMonitoring),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mii_interval: {
        value: cdktf.stringToHclTerraform(this._miiInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_links: {
        value: cdktf.numberToHclTerraform(this._minLinks),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mlag_id: {
        value: cdktf.numberToHclTerraform(this._mlagId),
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
      primary: {
        value: cdktf.stringToHclTerraform(this._primary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slaves: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._slaves),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      transmit_hash_policy: {
        value: cdktf.stringToHclTerraform(this._transmitHashPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      up_delay: {
        value: cdktf.stringToHclTerraform(this._upDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
