// https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpDhcpServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server#___path___ IpDhcpServer#___path___}
  */
  readonly path?: string;
  /**
  * Whether to add dynamic ARP entry. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server#add_arp IpDhcpServer#add_arp}
  */
  readonly addArp?: boolean | cdktf.IResolvable;
  /**
  * Address list to which address will be added if lease is bound.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server#address_lists IpDhcpServer#address_lists}
  */
  readonly addressLists?: string[];
  /**
  * IP pool, from which to take IP addresses for the clients. If set to static-only, then only the clients that have a static lease (added in lease submenu) will be allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server#address_pool IpDhcpServer#address_pool}
  */
  readonly addressPool?: string;
  /**
  * Creates a single simple queue entry for both IPv4 and IPv6 addresses, uses the MAC address and DUID for identification. Requires IPv6 DHCP Server to have this option enabled as well to work properly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server#allow_dual_stack_queue IpDhcpServer#allow_dual_stack_queue}
  */
  readonly allowDualStackQueue?: boolean | cdktf.IResolvable;
  /**
  * Always send replies as broadcasts even if destination IP is known.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server#always_broadcast IpDhcpServer#always_broadcast}
  */
  readonly alwaysBroadcast?: boolean | cdktf.IResolvable;
  /**
  * Option changes the way how a server responds to DHCP requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server#authoritative IpDhcpServer#authoritative}
  */
  readonly authoritative?: string;
  /**
  * Accepts two predefined options or time value: * forever - lease never expires * lease-time - use time from lease-time parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server#bootp_lease_time IpDhcpServer#bootp_lease_time}
  */
  readonly bootpLeaseTime?: string;
  /**
  * Support for BOOTP clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server#bootp_support IpDhcpServer#bootp_support}
  */
  readonly bootpSupport?: string;
  /**
  * Specifies whether to limit specific number of clients per single MAC address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server#client_mac_limit IpDhcpServer#client_mac_limit}
  */
  readonly clientMacLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server#comment IpDhcpServer#comment}
  */
  readonly comment?: string;
  /**
  * Allows to disable/enable conflict detection. If option is enabled, then whenever server tries to assign a lease it will send ICMP and ARP messages to detect whether such address in the network already exist. If any of above get reply address is considered already used. Conflict detection must be disabled when any kind of DHCP client limitation per port or per mac is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server#conflict_detection IpDhcpServer#conflict_detection}
  */
  readonly conflictDetection?: boolean | cdktf.IResolvable;
  /**
  * If secs field in DHCP packet is smaller than delay-threshold, then this packet is ignored. If set to none - there is no threshold (all DHCP packets are processed).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server#delay_threshold IpDhcpServer#delay_threshold}
  */
  readonly delayThreshold?: string;
  /**
  * Use custom set of DHCP options defined in option sets menu.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server#dhcp_option_set IpDhcpServer#dhcp_option_set}
  */
  readonly dhcpOptionSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server#disabled IpDhcpServer#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Dynamic lease identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server#dynamic_lease_identifiers IpDhcpServer#dynamic_lease_identifiers}
  */
  readonly dynamicLeaseIdentifiers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server#id IpDhcpServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify where to place dynamic simple queue entries for static DCHP leases with rate-limit parameter set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server#insert_queue_before IpDhcpServer#insert_queue_before}
  */
  readonly insertQueueBefore?: string;
  /**
  * Name of the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server#interface IpDhcpServer#interface}
  */
  readonly interface: string;
  /**
  * A script that will be executed after a lease is assigned or de-assigned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server#lease_script IpDhcpServer#lease_script}
  */
  readonly leaseScript?: string;
  /**
  * The time that a client may use the assigned address. The client will try to renew this address after half of this time and will request a new address after the time limit expires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server#lease_time IpDhcpServer#lease_time}
  */
  readonly leaseTime?: string;
  /**
  * Changing the name of this resource will force it to be recreated.
  * 	> The links of other configuration properties to this resource may be lost!
  * 	> Changing the name of the resource outside of a Terraform will result in a loss of control integrity for that resource!
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server#name IpDhcpServer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server#parent_queue IpDhcpServer#parent_queue}
  */
  readonly parentQueue?: string;
  /**
  * The IP address of the relay this DHCP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server#relay IpDhcpServer#relay}
  */
  readonly relay?: string;
  /**
  * The address which the DHCP client must send requests to in order to renew an IP address lease.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server#src_address IpDhcpServer#src_address}
  */
  readonly srcAddress?: string;
  /**
  * Support broadband TR101
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server#support_broadband_tr101 IpDhcpServer#support_broadband_tr101}
  */
  readonly supportBroadbandTr101?: boolean | cdktf.IResolvable;
  /**
  * Forward RADIUS Framed-Route as a DHCP Classless-Static-Route to DHCP-client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server#use_framed_as_classless IpDhcpServer#use_framed_as_classless}
  */
  readonly useFramedAsClassless?: boolean | cdktf.IResolvable;
  /**
  * Whether to use RADIUS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server#use_radius IpDhcpServer#use_radius}
  */
  readonly useRadius?: string;
  /**
  * Allow the server to send Reconfigure (forcerenew) messages to clients, prompting them to renew configuration without waiting for their lease to expire.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server#use_reconfigure IpDhcpServer#use_reconfigure}
  */
  readonly useReconfigure?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server routeros_ip_dhcp_server}
*/
export class IpDhcpServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ip_dhcp_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpDhcpServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpDhcpServer to import
  * @param importFromId The id of the existing IpDhcpServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpDhcpServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ip_dhcp_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_dhcp_server routeros_ip_dhcp_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpDhcpServerConfig
  */
  public constructor(scope: Construct, id: string, config: IpDhcpServerConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_ip_dhcp_server',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.92.1',
        providerVersionConstraint: '1.92.1'
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
    this._addArp = config.addArp;
    this._addressLists = config.addressLists;
    this._addressPool = config.addressPool;
    this._allowDualStackQueue = config.allowDualStackQueue;
    this._alwaysBroadcast = config.alwaysBroadcast;
    this._authoritative = config.authoritative;
    this._bootpLeaseTime = config.bootpLeaseTime;
    this._bootpSupport = config.bootpSupport;
    this._clientMacLimit = config.clientMacLimit;
    this._comment = config.comment;
    this._conflictDetection = config.conflictDetection;
    this._delayThreshold = config.delayThreshold;
    this._dhcpOptionSet = config.dhcpOptionSet;
    this._disabled = config.disabled;
    this._dynamicLeaseIdentifiers = config.dynamicLeaseIdentifiers;
    this._id = config.id;
    this._insertQueueBefore = config.insertQueueBefore;
    this._interface = config.interface;
    this._leaseScript = config.leaseScript;
    this._leaseTime = config.leaseTime;
    this._name = config.name;
    this._parentQueue = config.parentQueue;
    this._relay = config.relay;
    this._srcAddress = config.srcAddress;
    this._supportBroadbandTr101 = config.supportBroadbandTr101;
    this._useFramedAsClassless = config.useFramedAsClassless;
    this._useRadius = config.useRadius;
    this._useReconfigure = config.useReconfigure;
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

  // add_arp - computed: false, optional: true, required: false
  private _addArp?: boolean | cdktf.IResolvable; 
  public get addArp() {
    return this.getBooleanAttribute('add_arp');
  }
  public set addArp(value: boolean | cdktf.IResolvable) {
    this._addArp = value;
  }
  public resetAddArp() {
    this._addArp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addArpInput() {
    return this._addArp;
  }

  // address_lists - computed: false, optional: true, required: false
  private _addressLists?: string[]; 
  public get addressLists() {
    return cdktf.Fn.tolist(this.getListAttribute('address_lists'));
  }
  public set addressLists(value: string[]) {
    this._addressLists = value;
  }
  public resetAddressLists() {
    this._addressLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressListsInput() {
    return this._addressLists;
  }

  // address_pool - computed: false, optional: true, required: false
  private _addressPool?: string; 
  public get addressPool() {
    return this.getStringAttribute('address_pool');
  }
  public set addressPool(value: string) {
    this._addressPool = value;
  }
  public resetAddressPool() {
    this._addressPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressPoolInput() {
    return this._addressPool;
  }

  // allow_dual_stack_queue - computed: false, optional: true, required: false
  private _allowDualStackQueue?: boolean | cdktf.IResolvable; 
  public get allowDualStackQueue() {
    return this.getBooleanAttribute('allow_dual_stack_queue');
  }
  public set allowDualStackQueue(value: boolean | cdktf.IResolvable) {
    this._allowDualStackQueue = value;
  }
  public resetAllowDualStackQueue() {
    this._allowDualStackQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDualStackQueueInput() {
    return this._allowDualStackQueue;
  }

  // always_broadcast - computed: false, optional: true, required: false
  private _alwaysBroadcast?: boolean | cdktf.IResolvable; 
  public get alwaysBroadcast() {
    return this.getBooleanAttribute('always_broadcast');
  }
  public set alwaysBroadcast(value: boolean | cdktf.IResolvable) {
    this._alwaysBroadcast = value;
  }
  public resetAlwaysBroadcast() {
    this._alwaysBroadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysBroadcastInput() {
    return this._alwaysBroadcast;
  }

  // authoritative - computed: false, optional: true, required: false
  private _authoritative?: string; 
  public get authoritative() {
    return this.getStringAttribute('authoritative');
  }
  public set authoritative(value: string) {
    this._authoritative = value;
  }
  public resetAuthoritative() {
    this._authoritative = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authoritativeInput() {
    return this._authoritative;
  }

  // bootp_lease_time - computed: false, optional: true, required: false
  private _bootpLeaseTime?: string; 
  public get bootpLeaseTime() {
    return this.getStringAttribute('bootp_lease_time');
  }
  public set bootpLeaseTime(value: string) {
    this._bootpLeaseTime = value;
  }
  public resetBootpLeaseTime() {
    this._bootpLeaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootpLeaseTimeInput() {
    return this._bootpLeaseTime;
  }

  // bootp_support - computed: false, optional: true, required: false
  private _bootpSupport?: string; 
  public get bootpSupport() {
    return this.getStringAttribute('bootp_support');
  }
  public set bootpSupport(value: string) {
    this._bootpSupport = value;
  }
  public resetBootpSupport() {
    this._bootpSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootpSupportInput() {
    return this._bootpSupport;
  }

  // client_mac_limit - computed: false, optional: true, required: false
  private _clientMacLimit?: number; 
  public get clientMacLimit() {
    return this.getNumberAttribute('client_mac_limit');
  }
  public set clientMacLimit(value: number) {
    this._clientMacLimit = value;
  }
  public resetClientMacLimit() {
    this._clientMacLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientMacLimitInput() {
    return this._clientMacLimit;
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

  // conflict_detection - computed: false, optional: true, required: false
  private _conflictDetection?: boolean | cdktf.IResolvable; 
  public get conflictDetection() {
    return this.getBooleanAttribute('conflict_detection');
  }
  public set conflictDetection(value: boolean | cdktf.IResolvable) {
    this._conflictDetection = value;
  }
  public resetConflictDetection() {
    this._conflictDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conflictDetectionInput() {
    return this._conflictDetection;
  }

  // delay_threshold - computed: false, optional: true, required: false
  private _delayThreshold?: string; 
  public get delayThreshold() {
    return this.getStringAttribute('delay_threshold');
  }
  public set delayThreshold(value: string) {
    this._delayThreshold = value;
  }
  public resetDelayThreshold() {
    this._delayThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayThresholdInput() {
    return this._delayThreshold;
  }

  // dhcp_option_set - computed: false, optional: true, required: false
  private _dhcpOptionSet?: string; 
  public get dhcpOptionSet() {
    return this.getStringAttribute('dhcp_option_set');
  }
  public set dhcpOptionSet(value: string) {
    this._dhcpOptionSet = value;
  }
  public resetDhcpOptionSet() {
    this._dhcpOptionSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionSetInput() {
    return this._dhcpOptionSet;
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

  // dynamic - computed: true, optional: false, required: false
  public get dynamic() {
    return this.getBooleanAttribute('dynamic');
  }

  // dynamic_lease_identifiers - computed: false, optional: true, required: false
  private _dynamicLeaseIdentifiers?: string; 
  public get dynamicLeaseIdentifiers() {
    return this.getStringAttribute('dynamic_lease_identifiers');
  }
  public set dynamicLeaseIdentifiers(value: string) {
    this._dynamicLeaseIdentifiers = value;
  }
  public resetDynamicLeaseIdentifiers() {
    this._dynamicLeaseIdentifiers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicLeaseIdentifiersInput() {
    return this._dynamicLeaseIdentifiers;
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

  // insert_queue_before - computed: false, optional: true, required: false
  private _insertQueueBefore?: string; 
  public get insertQueueBefore() {
    return this.getStringAttribute('insert_queue_before');
  }
  public set insertQueueBefore(value: string) {
    this._insertQueueBefore = value;
  }
  public resetInsertQueueBefore() {
    this._insertQueueBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertQueueBeforeInput() {
    return this._insertQueueBefore;
  }

  // interface - computed: false, optional: false, required: true
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // invalid - computed: true, optional: false, required: false
  public get invalid() {
    return this.getBooleanAttribute('invalid');
  }

  // lease_script - computed: false, optional: true, required: false
  private _leaseScript?: string; 
  public get leaseScript() {
    return this.getStringAttribute('lease_script');
  }
  public set leaseScript(value: string) {
    this._leaseScript = value;
  }
  public resetLeaseScript() {
    this._leaseScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseScriptInput() {
    return this._leaseScript;
  }

  // lease_time - computed: false, optional: true, required: false
  private _leaseTime?: string; 
  public get leaseTime() {
    return this.getStringAttribute('lease_time');
  }
  public set leaseTime(value: string) {
    this._leaseTime = value;
  }
  public resetLeaseTime() {
    this._leaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseTimeInput() {
    return this._leaseTime;
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

  // parent_queue - computed: false, optional: true, required: false
  private _parentQueue?: string; 
  public get parentQueue() {
    return this.getStringAttribute('parent_queue');
  }
  public set parentQueue(value: string) {
    this._parentQueue = value;
  }
  public resetParentQueue() {
    this._parentQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentQueueInput() {
    return this._parentQueue;
  }

  // relay - computed: false, optional: true, required: false
  private _relay?: string; 
  public get relay() {
    return this.getStringAttribute('relay');
  }
  public set relay(value: string) {
    this._relay = value;
  }
  public resetRelay() {
    this._relay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayInput() {
    return this._relay;
  }

  // src_address - computed: false, optional: true, required: false
  private _srcAddress?: string; 
  public get srcAddress() {
    return this.getStringAttribute('src_address');
  }
  public set srcAddress(value: string) {
    this._srcAddress = value;
  }
  public resetSrcAddress() {
    this._srcAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAddressInput() {
    return this._srcAddress;
  }

  // support_broadband_tr101 - computed: false, optional: true, required: false
  private _supportBroadbandTr101?: boolean | cdktf.IResolvable; 
  public get supportBroadbandTr101() {
    return this.getBooleanAttribute('support_broadband_tr101');
  }
  public set supportBroadbandTr101(value: boolean | cdktf.IResolvable) {
    this._supportBroadbandTr101 = value;
  }
  public resetSupportBroadbandTr101() {
    this._supportBroadbandTr101 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportBroadbandTr101Input() {
    return this._supportBroadbandTr101;
  }

  // use_framed_as_classless - computed: false, optional: true, required: false
  private _useFramedAsClassless?: boolean | cdktf.IResolvable; 
  public get useFramedAsClassless() {
    return this.getBooleanAttribute('use_framed_as_classless');
  }
  public set useFramedAsClassless(value: boolean | cdktf.IResolvable) {
    this._useFramedAsClassless = value;
  }
  public resetUseFramedAsClassless() {
    this._useFramedAsClassless = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useFramedAsClasslessInput() {
    return this._useFramedAsClassless;
  }

  // use_radius - computed: false, optional: true, required: false
  private _useRadius?: string; 
  public get useRadius() {
    return this.getStringAttribute('use_radius');
  }
  public set useRadius(value: string) {
    this._useRadius = value;
  }
  public resetUseRadius() {
    this._useRadius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRadiusInput() {
    return this._useRadius;
  }

  // use_reconfigure - computed: false, optional: true, required: false
  private _useReconfigure?: boolean | cdktf.IResolvable; 
  public get useReconfigure() {
    return this.getBooleanAttribute('use_reconfigure');
  }
  public set useReconfigure(value: boolean | cdktf.IResolvable) {
    this._useReconfigure = value;
  }
  public resetUseReconfigure() {
    this._useReconfigure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useReconfigureInput() {
    return this._useReconfigure;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      add_arp: cdktf.booleanToTerraform(this._addArp),
      address_lists: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addressLists),
      address_pool: cdktf.stringToTerraform(this._addressPool),
      allow_dual_stack_queue: cdktf.booleanToTerraform(this._allowDualStackQueue),
      always_broadcast: cdktf.booleanToTerraform(this._alwaysBroadcast),
      authoritative: cdktf.stringToTerraform(this._authoritative),
      bootp_lease_time: cdktf.stringToTerraform(this._bootpLeaseTime),
      bootp_support: cdktf.stringToTerraform(this._bootpSupport),
      client_mac_limit: cdktf.numberToTerraform(this._clientMacLimit),
      comment: cdktf.stringToTerraform(this._comment),
      conflict_detection: cdktf.booleanToTerraform(this._conflictDetection),
      delay_threshold: cdktf.stringToTerraform(this._delayThreshold),
      dhcp_option_set: cdktf.stringToTerraform(this._dhcpOptionSet),
      disabled: cdktf.booleanToTerraform(this._disabled),
      dynamic_lease_identifiers: cdktf.stringToTerraform(this._dynamicLeaseIdentifiers),
      id: cdktf.stringToTerraform(this._id),
      insert_queue_before: cdktf.stringToTerraform(this._insertQueueBefore),
      interface: cdktf.stringToTerraform(this._interface),
      lease_script: cdktf.stringToTerraform(this._leaseScript),
      lease_time: cdktf.stringToTerraform(this._leaseTime),
      name: cdktf.stringToTerraform(this._name),
      parent_queue: cdktf.stringToTerraform(this._parentQueue),
      relay: cdktf.stringToTerraform(this._relay),
      src_address: cdktf.stringToTerraform(this._srcAddress),
      support_broadband_tr101: cdktf.booleanToTerraform(this._supportBroadbandTr101),
      use_framed_as_classless: cdktf.booleanToTerraform(this._useFramedAsClassless),
      use_radius: cdktf.stringToTerraform(this._useRadius),
      use_reconfigure: cdktf.booleanToTerraform(this._useReconfigure),
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
      add_arp: {
        value: cdktf.booleanToHclTerraform(this._addArp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      address_lists: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addressLists),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      address_pool: {
        value: cdktf.stringToHclTerraform(this._addressPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_dual_stack_queue: {
        value: cdktf.booleanToHclTerraform(this._allowDualStackQueue),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      always_broadcast: {
        value: cdktf.booleanToHclTerraform(this._alwaysBroadcast),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authoritative: {
        value: cdktf.stringToHclTerraform(this._authoritative),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bootp_lease_time: {
        value: cdktf.stringToHclTerraform(this._bootpLeaseTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bootp_support: {
        value: cdktf.stringToHclTerraform(this._bootpSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_mac_limit: {
        value: cdktf.numberToHclTerraform(this._clientMacLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conflict_detection: {
        value: cdktf.booleanToHclTerraform(this._conflictDetection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delay_threshold: {
        value: cdktf.stringToHclTerraform(this._delayThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_option_set: {
        value: cdktf.stringToHclTerraform(this._dhcpOptionSet),
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
      dynamic_lease_identifiers: {
        value: cdktf.stringToHclTerraform(this._dynamicLeaseIdentifiers),
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
      insert_queue_before: {
        value: cdktf.stringToHclTerraform(this._insertQueueBefore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lease_script: {
        value: cdktf.stringToHclTerraform(this._leaseScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lease_time: {
        value: cdktf.stringToHclTerraform(this._leaseTime),
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
      parent_queue: {
        value: cdktf.stringToHclTerraform(this._parentQueue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relay: {
        value: cdktf.stringToHclTerraform(this._relay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_address: {
        value: cdktf.stringToHclTerraform(this._srcAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      support_broadband_tr101: {
        value: cdktf.booleanToHclTerraform(this._supportBroadbandTr101),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_framed_as_classless: {
        value: cdktf.booleanToHclTerraform(this._useFramedAsClassless),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_radius: {
        value: cdktf.stringToHclTerraform(this._useRadius),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_reconfigure: {
        value: cdktf.booleanToHclTerraform(this._useReconfigure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
