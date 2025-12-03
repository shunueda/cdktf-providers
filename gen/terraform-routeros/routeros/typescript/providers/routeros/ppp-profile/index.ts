// https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ppp_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PppProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ppp_profile#___path___ PppProfile#___path___}
  */
  readonly path?: string;
  /**
  * Address list name to which ppp assigned (on server) or received (on client) address will be added.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ppp_profile#address_list PppProfile#address_list}
  */
  readonly addressList?: string;
  /**
  * Name of the bridge interface to which ppp interface will be added as a slave port. Both  tunnel endpoints (server and client) must be in bridge in order to make  this work, see more details on the BCP bridging manual.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ppp_profile#bridge PppProfile#bridge}
  */
  readonly bridge?: string;
  /**
  * Used  split-horizon value for the dynamically created bridge port. Can be  used to prevent bridging loops and isolate traffic. Set the same value  for a group of ports, to prevent them from sending data to ports with  the same horizon value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ppp_profile#bridge_horizon PppProfile#bridge_horizon}
  */
  readonly bridgeHorizon?: number;
  /**
  * Changes MAC learning behavior on the dynamically created bridge port: yes - enables MAC learning no - disables MAC learning default - derive this value from the interface default profile; same as yes if this is the interface default profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ppp_profile#bridge_learning PppProfile#bridge_learning}
  */
  readonly bridgeLearning?: string;
  /**
  * Used  path cost for the dynamically created bridge port, used by STP/RSTP to  determine the best path, used by MSTP to determine the best path between  regions. This property has no effect when a bridge protocol-mode is set to none.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ppp_profile#bridge_path_cost PppProfile#bridge_path_cost}
  */
  readonly bridgePathCost?: number;
  /**
  * Used  priority for the dynamically created bridge port, used by STP/RSTP to  determine the root port, used by MSTP to determine root port between  regions. This property has no effect when a bridge protocol-mode is set  to none.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ppp_profile#bridge_port_priority PppProfile#bridge_port_priority}
  */
  readonly bridgePortPriority?: number;
  /**
  * Modifies connection MSS settings (applies only for IPv4): yes - adjust connection MSS value no - do not adjust connection MSS value default - derive this value from the interface default profile; same as no if this is the interface default profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ppp_profile#change_tcp_mss PppProfile#change_tcp_mss}
  */
  readonly changeTcpMss?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ppp_profile#comment PppProfile#comment}
  */
  readonly comment?: string;
  /**
  * Lease time can be set starting from 7.20ab202, by default time is set to 1d.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ppp_profile#dhcpv6_lease_time PppProfile#dhcpv6_lease_time}
  */
  readonly dhcpv6LeaseTime?: string;
  /**
  * Name of the IPv6 pool which will be used by dynamically created DHCPv6-PD server when client connects. [Read more >>](https://wiki.mikrotik.com/wiki/Manual:IPv6_PD_over_PPP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ppp_profile#dhcpv6_pd_pool PppProfile#dhcpv6_pd_pool}
  */
  readonly dhcpv6PdPool?: string;
  /**
  * pecifies value for `use-radius` option selected for dynamically generated DHCPv6 PD servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ppp_profile#dhcpv6_use_radius PppProfile#dhcpv6_use_radius}
  */
  readonly dhcpv6UseRadius?: boolean | cdktf.IResolvable;
  /**
  * IP address of the DNS server that is supplied to ppp clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ppp_profile#dns_server PppProfile#dns_server}
  */
  readonly dnsServer?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ppp_profile#id PppProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies  the amount of time after which the link will be terminated if there are  no activity present. Timeout is not set by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ppp_profile#idle_timeout PppProfile#idle_timeout}
  */
  readonly idleTimeout?: string;
  /**
  * Firewall  chain name for incoming packets. Specified chain gets control for each  packet coming from the client. The ppp chain should be manually added  and rules with action=jump jump-target=ppp should be added to other  relevant chains in order for this feature to work. For more information  look at the examples section.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ppp_profile#incoming_filter PppProfile#incoming_filter}
  */
  readonly incomingFilter?: string;
  /**
  * Specify where to place dynamic simple queue entries for static DCHP leases with rate-limit parameter set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ppp_profile#insert_queue_before PppProfile#insert_queue_before}
  */
  readonly insertQueueBefore?: string;
  /**
  * Interface list name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ppp_profile#interface_list PppProfile#interface_list}
  */
  readonly interfaceList?: string;
  /**
  * Tunnel address or name of the pool from which address is assigned to ppp interface locally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ppp_profile#local_address PppProfile#local_address}
  */
  readonly localAddress?: string;
  /**
  * PPP profile name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ppp_profile#name PppProfile#name}
  */
  readonly name: string;
  /**
  * Execute script on user logging off. See on-up for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ppp_profile#on_down PppProfile#on_down}
  */
  readonly onDown?: string;
  /**
  * Execute script on user login-event. These are available variables that are accessible for the event script:
  *   * user
  *   * local-address
  *   * remote-address
  *   * caller-id
  *   * called-id
  *   * interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ppp_profile#on_up PppProfile#on_up}
  */
  readonly onUp?: string;
  /**
  * Defines whether a user is allowed to have more than one ppp session at a time yes - a user is not allowed to have more than one ppp session at a time no - the user is allowed to have more than one ppp session at a time default - derive this value from the interface default profile; same as no if this is the interface default profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ppp_profile#only_one PppProfile#only_one}
  */
  readonly onlyOne?: string;
  /**
  * Firewall  chain name for outgoing packets. The specified chain gets control for  each packet going to the client. The PPP chain should be manually added  and rules with action=jump jump-target=ppp should be added to other  relevant chains in order for this feature to work. For more information  look at the Examples section.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ppp_profile#outgoing_filter PppProfile#outgoing_filter}
  */
  readonly outgoingFilter?: string;
  /**
  * Name of parent simple queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ppp_profile#parent_queue PppProfile#parent_queue}
  */
  readonly parentQueue?: string;
  /**
  * Queue types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ppp_profile#queue_type PppProfile#queue_type}
  */
  readonly queueType?: string;
  /**
  * Rate limitation in form of rx-rate[/tx-rate]  [rx-burst-rate[/tx-burst-rate] [rx-burst-threshold[/tx-burst-threshold]  [rx-burst-time[/tx-burst-time] [priority] [rx-rate-min[/tx-rate-min]]]] from the point of view of the router (so 'rx' is client upload, and  'tx' is client download). All rates are measured in bits per second,  unless followed by optional 'k' suffix (kilobits per second) or 'M'  suffix (megabits per second). If tx-rate is not specified, rx-rate  serves as tx-rate too. The same applies for tx-burst-rate,  tx-burst-threshold and tx-burst-time. If both rx-burst-threshold and  tx-burst-threshold are not specified (but burst-rate is specified),  rx-rate and tx-rate are used as burst thresholds. If both rx-burst-time  and tx-burst-time are not specified, 1s is used as default. Priority  takes values 1..8, where 1 implies the highest priority, but 8 - the  lowest. If rx-rate-min and tx-rate-min are not specified rx-rate and  tx-rate values are used. The rx-rate-min and tx-rate-min values can not  exceed rx-rate and tx-rate values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ppp_profile#rate_limit PppProfile#rate_limit}
  */
  readonly rateLimit?: string;
  /**
  * Tunnel address or name of the pool from which address is assigned to remote ppp interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ppp_profile#remote_address PppProfile#remote_address}
  */
  readonly remoteAddress?: string;
  /**
  * Assign prefix from IPv6 pool to the client and install corresponding IPv6 route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ppp_profile#remote_ipv6_prefix_pool PppProfile#remote_ipv6_prefix_pool}
  */
  readonly remoteIpv6PrefixPool?: string;
  /**
  * If `remote-ipv6-prefix-pool` is specified and includes single `/64`prefix, then prefix can be used only for a single PPP client for RADVD configuration. When this option is set to value `yes`, the same prefix can be reused between all the clients using this PPP profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ppp_profile#remote_ipv6_prefix_reuse PppProfile#remote_ipv6_prefix_reuse}
  */
  readonly remoteIpv6PrefixReuse?: boolean | cdktf.IResolvable;
  /**
  * Maximum time the connection can stay up. By default no time limit is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ppp_profile#session_timeout PppProfile#session_timeout}
  */
  readonly sessionTimeout?: string;
  /**
  * Specifies whether to use data compression or not. yes - enable data compression no - disable data compression default - derive this value from the interface default profile; same as no if this is the interface default profile This setting does not affect OVPN tunnels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ppp_profile#use_compression PppProfile#use_compression}
  */
  readonly useCompression?: string;
  /**
  * Specifies whether to use data encryption or not. yes - enable data encryption no - disable data encryption default - derive this value from the interface default profile; same as no if this is the interface default profile require - explicitly requires encryption This setting does not work on OVPN and SSTP tunnels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ppp_profile#use_encryption PppProfile#use_encryption}
  */
  readonly useEncryption?: string;
  /**
  * Specifies whether to allow IPv6. By default is enabled if IPv6 package is installed. yes - enable IPv6 support no - disable IPv6 support default - derive this value from the interface default profile; same as no if this is the interface default profile require - explicitly requires IPv6 support.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ppp_profile#use_ipv6 PppProfile#use_ipv6}
  */
  readonly useIpv6?: string;
  /**
  * Specifies whether to allow MPLS over PPP. yes - enable MPLS support no - disable MPLS support default - derive this value from the interface default profile; same as no if this is the interface default profile require - explicitly requires MPLS support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ppp_profile#use_mpls PppProfile#use_mpls}
  */
  readonly useMpls?: string;
  /**
  * Specifies whether to allow UPnP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ppp_profile#use_upnp PppProfile#use_upnp}
  */
  readonly useUpnp?: string;
  /**
  * IP address of the WINS server to supply to Windows clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ppp_profile#wins_server PppProfile#wins_server}
  */
  readonly winsServer?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ppp_profile routeros_ppp_profile}
*/
export class PppProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ppp_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PppProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PppProfile to import
  * @param importFromId The id of the existing PppProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ppp_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PppProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ppp_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ppp_profile routeros_ppp_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PppProfileConfig
  */
  public constructor(scope: Construct, id: string, config: PppProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_ppp_profile',
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
    this._addressList = config.addressList;
    this._bridge = config.bridge;
    this._bridgeHorizon = config.bridgeHorizon;
    this._bridgeLearning = config.bridgeLearning;
    this._bridgePathCost = config.bridgePathCost;
    this._bridgePortPriority = config.bridgePortPriority;
    this._changeTcpMss = config.changeTcpMss;
    this._comment = config.comment;
    this._dhcpv6LeaseTime = config.dhcpv6LeaseTime;
    this._dhcpv6PdPool = config.dhcpv6PdPool;
    this._dhcpv6UseRadius = config.dhcpv6UseRadius;
    this._dnsServer = config.dnsServer;
    this._id = config.id;
    this._idleTimeout = config.idleTimeout;
    this._incomingFilter = config.incomingFilter;
    this._insertQueueBefore = config.insertQueueBefore;
    this._interfaceList = config.interfaceList;
    this._localAddress = config.localAddress;
    this._name = config.name;
    this._onDown = config.onDown;
    this._onUp = config.onUp;
    this._onlyOne = config.onlyOne;
    this._outgoingFilter = config.outgoingFilter;
    this._parentQueue = config.parentQueue;
    this._queueType = config.queueType;
    this._rateLimit = config.rateLimit;
    this._remoteAddress = config.remoteAddress;
    this._remoteIpv6PrefixPool = config.remoteIpv6PrefixPool;
    this._remoteIpv6PrefixReuse = config.remoteIpv6PrefixReuse;
    this._sessionTimeout = config.sessionTimeout;
    this._useCompression = config.useCompression;
    this._useEncryption = config.useEncryption;
    this._useIpv6 = config.useIpv6;
    this._useMpls = config.useMpls;
    this._useUpnp = config.useUpnp;
    this._winsServer = config.winsServer;
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

  // address_list - computed: false, optional: true, required: false
  private _addressList?: string; 
  public get addressList() {
    return this.getStringAttribute('address_list');
  }
  public set addressList(value: string) {
    this._addressList = value;
  }
  public resetAddressList() {
    this._addressList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressListInput() {
    return this._addressList;
  }

  // bridge - computed: false, optional: true, required: false
  private _bridge?: string; 
  public get bridge() {
    return this.getStringAttribute('bridge');
  }
  public set bridge(value: string) {
    this._bridge = value;
  }
  public resetBridge() {
    this._bridge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeInput() {
    return this._bridge;
  }

  // bridge_horizon - computed: false, optional: true, required: false
  private _bridgeHorizon?: number; 
  public get bridgeHorizon() {
    return this.getNumberAttribute('bridge_horizon');
  }
  public set bridgeHorizon(value: number) {
    this._bridgeHorizon = value;
  }
  public resetBridgeHorizon() {
    this._bridgeHorizon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeHorizonInput() {
    return this._bridgeHorizon;
  }

  // bridge_learning - computed: false, optional: true, required: false
  private _bridgeLearning?: string; 
  public get bridgeLearning() {
    return this.getStringAttribute('bridge_learning');
  }
  public set bridgeLearning(value: string) {
    this._bridgeLearning = value;
  }
  public resetBridgeLearning() {
    this._bridgeLearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeLearningInput() {
    return this._bridgeLearning;
  }

  // bridge_path_cost - computed: false, optional: true, required: false
  private _bridgePathCost?: number; 
  public get bridgePathCost() {
    return this.getNumberAttribute('bridge_path_cost');
  }
  public set bridgePathCost(value: number) {
    this._bridgePathCost = value;
  }
  public resetBridgePathCost() {
    this._bridgePathCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgePathCostInput() {
    return this._bridgePathCost;
  }

  // bridge_port_priority - computed: false, optional: true, required: false
  private _bridgePortPriority?: number; 
  public get bridgePortPriority() {
    return this.getNumberAttribute('bridge_port_priority');
  }
  public set bridgePortPriority(value: number) {
    this._bridgePortPriority = value;
  }
  public resetBridgePortPriority() {
    this._bridgePortPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgePortPriorityInput() {
    return this._bridgePortPriority;
  }

  // change_tcp_mss - computed: false, optional: true, required: false
  private _changeTcpMss?: string; 
  public get changeTcpMss() {
    return this.getStringAttribute('change_tcp_mss');
  }
  public set changeTcpMss(value: string) {
    this._changeTcpMss = value;
  }
  public resetChangeTcpMss() {
    this._changeTcpMss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeTcpMssInput() {
    return this._changeTcpMss;
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

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }

  // dhcpv6_lease_time - computed: false, optional: true, required: false
  private _dhcpv6LeaseTime?: string; 
  public get dhcpv6LeaseTime() {
    return this.getStringAttribute('dhcpv6_lease_time');
  }
  public set dhcpv6LeaseTime(value: string) {
    this._dhcpv6LeaseTime = value;
  }
  public resetDhcpv6LeaseTime() {
    this._dhcpv6LeaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpv6LeaseTimeInput() {
    return this._dhcpv6LeaseTime;
  }

  // dhcpv6_pd_pool - computed: false, optional: true, required: false
  private _dhcpv6PdPool?: string; 
  public get dhcpv6PdPool() {
    return this.getStringAttribute('dhcpv6_pd_pool');
  }
  public set dhcpv6PdPool(value: string) {
    this._dhcpv6PdPool = value;
  }
  public resetDhcpv6PdPool() {
    this._dhcpv6PdPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpv6PdPoolInput() {
    return this._dhcpv6PdPool;
  }

  // dhcpv6_use_radius - computed: false, optional: true, required: false
  private _dhcpv6UseRadius?: boolean | cdktf.IResolvable; 
  public get dhcpv6UseRadius() {
    return this.getBooleanAttribute('dhcpv6_use_radius');
  }
  public set dhcpv6UseRadius(value: boolean | cdktf.IResolvable) {
    this._dhcpv6UseRadius = value;
  }
  public resetDhcpv6UseRadius() {
    this._dhcpv6UseRadius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpv6UseRadiusInput() {
    return this._dhcpv6UseRadius;
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer?: string[]; 
  public get dnsServer() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_server'));
  }
  public set dnsServer(value: string[]) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
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

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: string; 
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }
  public set idleTimeout(value: string) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // incoming_filter - computed: false, optional: true, required: false
  private _incomingFilter?: string; 
  public get incomingFilter() {
    return this.getStringAttribute('incoming_filter');
  }
  public set incomingFilter(value: string) {
    this._incomingFilter = value;
  }
  public resetIncomingFilter() {
    this._incomingFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incomingFilterInput() {
    return this._incomingFilter;
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

  // interface_list - computed: false, optional: true, required: false
  private _interfaceList?: string; 
  public get interfaceList() {
    return this.getStringAttribute('interface_list');
  }
  public set interfaceList(value: string) {
    this._interfaceList = value;
  }
  public resetInterfaceList() {
    this._interfaceList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceListInput() {
    return this._interfaceList;
  }

  // local_address - computed: false, optional: true, required: false
  private _localAddress?: string; 
  public get localAddress() {
    return this.getStringAttribute('local_address');
  }
  public set localAddress(value: string) {
    this._localAddress = value;
  }
  public resetLocalAddress() {
    this._localAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAddressInput() {
    return this._localAddress;
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

  // on_down - computed: false, optional: true, required: false
  private _onDown?: string; 
  public get onDown() {
    return this.getStringAttribute('on_down');
  }
  public set onDown(value: string) {
    this._onDown = value;
  }
  public resetOnDown() {
    this._onDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDownInput() {
    return this._onDown;
  }

  // on_up - computed: false, optional: true, required: false
  private _onUp?: string; 
  public get onUp() {
    return this.getStringAttribute('on_up');
  }
  public set onUp(value: string) {
    this._onUp = value;
  }
  public resetOnUp() {
    this._onUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onUpInput() {
    return this._onUp;
  }

  // only_one - computed: false, optional: true, required: false
  private _onlyOne?: string; 
  public get onlyOne() {
    return this.getStringAttribute('only_one');
  }
  public set onlyOne(value: string) {
    this._onlyOne = value;
  }
  public resetOnlyOne() {
    this._onlyOne = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyOneInput() {
    return this._onlyOne;
  }

  // outgoing_filter - computed: false, optional: true, required: false
  private _outgoingFilter?: string; 
  public get outgoingFilter() {
    return this.getStringAttribute('outgoing_filter');
  }
  public set outgoingFilter(value: string) {
    this._outgoingFilter = value;
  }
  public resetOutgoingFilter() {
    this._outgoingFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outgoingFilterInput() {
    return this._outgoingFilter;
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

  // queue_type - computed: false, optional: true, required: false
  private _queueType?: string; 
  public get queueType() {
    return this.getStringAttribute('queue_type');
  }
  public set queueType(value: string) {
    this._queueType = value;
  }
  public resetQueueType() {
    this._queueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueTypeInput() {
    return this._queueType;
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit?: string; 
  public get rateLimit() {
    return this.getStringAttribute('rate_limit');
  }
  public set rateLimit(value: string) {
    this._rateLimit = value;
  }
  public resetRateLimit() {
    this._rateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit;
  }

  // remote_address - computed: false, optional: true, required: false
  private _remoteAddress?: string; 
  public get remoteAddress() {
    return this.getStringAttribute('remote_address');
  }
  public set remoteAddress(value: string) {
    this._remoteAddress = value;
  }
  public resetRemoteAddress() {
    this._remoteAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAddressInput() {
    return this._remoteAddress;
  }

  // remote_ipv6_prefix_pool - computed: false, optional: true, required: false
  private _remoteIpv6PrefixPool?: string; 
  public get remoteIpv6PrefixPool() {
    return this.getStringAttribute('remote_ipv6_prefix_pool');
  }
  public set remoteIpv6PrefixPool(value: string) {
    this._remoteIpv6PrefixPool = value;
  }
  public resetRemoteIpv6PrefixPool() {
    this._remoteIpv6PrefixPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpv6PrefixPoolInput() {
    return this._remoteIpv6PrefixPool;
  }

  // remote_ipv6_prefix_reuse - computed: false, optional: true, required: false
  private _remoteIpv6PrefixReuse?: boolean | cdktf.IResolvable; 
  public get remoteIpv6PrefixReuse() {
    return this.getBooleanAttribute('remote_ipv6_prefix_reuse');
  }
  public set remoteIpv6PrefixReuse(value: boolean | cdktf.IResolvable) {
    this._remoteIpv6PrefixReuse = value;
  }
  public resetRemoteIpv6PrefixReuse() {
    this._remoteIpv6PrefixReuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpv6PrefixReuseInput() {
    return this._remoteIpv6PrefixReuse;
  }

  // session_timeout - computed: false, optional: true, required: false
  private _sessionTimeout?: string; 
  public get sessionTimeout() {
    return this.getStringAttribute('session_timeout');
  }
  public set sessionTimeout(value: string) {
    this._sessionTimeout = value;
  }
  public resetSessionTimeout() {
    this._sessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutInput() {
    return this._sessionTimeout;
  }

  // use_compression - computed: false, optional: true, required: false
  private _useCompression?: string; 
  public get useCompression() {
    return this.getStringAttribute('use_compression');
  }
  public set useCompression(value: string) {
    this._useCompression = value;
  }
  public resetUseCompression() {
    this._useCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCompressionInput() {
    return this._useCompression;
  }

  // use_encryption - computed: false, optional: true, required: false
  private _useEncryption?: string; 
  public get useEncryption() {
    return this.getStringAttribute('use_encryption');
  }
  public set useEncryption(value: string) {
    this._useEncryption = value;
  }
  public resetUseEncryption() {
    this._useEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEncryptionInput() {
    return this._useEncryption;
  }

  // use_ipv6 - computed: false, optional: true, required: false
  private _useIpv6?: string; 
  public get useIpv6() {
    return this.getStringAttribute('use_ipv6');
  }
  public set useIpv6(value: string) {
    this._useIpv6 = value;
  }
  public resetUseIpv6() {
    this._useIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIpv6Input() {
    return this._useIpv6;
  }

  // use_mpls - computed: false, optional: true, required: false
  private _useMpls?: string; 
  public get useMpls() {
    return this.getStringAttribute('use_mpls');
  }
  public set useMpls(value: string) {
    this._useMpls = value;
  }
  public resetUseMpls() {
    this._useMpls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMplsInput() {
    return this._useMpls;
  }

  // use_upnp - computed: false, optional: true, required: false
  private _useUpnp?: string; 
  public get useUpnp() {
    return this.getStringAttribute('use_upnp');
  }
  public set useUpnp(value: string) {
    this._useUpnp = value;
  }
  public resetUseUpnp() {
    this._useUpnp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useUpnpInput() {
    return this._useUpnp;
  }

  // wins_server - computed: false, optional: true, required: false
  private _winsServer?: string[]; 
  public get winsServer() {
    return cdktf.Fn.tolist(this.getListAttribute('wins_server'));
  }
  public set winsServer(value: string[]) {
    this._winsServer = value;
  }
  public resetWinsServer() {
    this._winsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get winsServerInput() {
    return this._winsServer;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      address_list: cdktf.stringToTerraform(this._addressList),
      bridge: cdktf.stringToTerraform(this._bridge),
      bridge_horizon: cdktf.numberToTerraform(this._bridgeHorizon),
      bridge_learning: cdktf.stringToTerraform(this._bridgeLearning),
      bridge_path_cost: cdktf.numberToTerraform(this._bridgePathCost),
      bridge_port_priority: cdktf.numberToTerraform(this._bridgePortPriority),
      change_tcp_mss: cdktf.stringToTerraform(this._changeTcpMss),
      comment: cdktf.stringToTerraform(this._comment),
      dhcpv6_lease_time: cdktf.stringToTerraform(this._dhcpv6LeaseTime),
      dhcpv6_pd_pool: cdktf.stringToTerraform(this._dhcpv6PdPool),
      dhcpv6_use_radius: cdktf.booleanToTerraform(this._dhcpv6UseRadius),
      dns_server: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsServer),
      id: cdktf.stringToTerraform(this._id),
      idle_timeout: cdktf.stringToTerraform(this._idleTimeout),
      incoming_filter: cdktf.stringToTerraform(this._incomingFilter),
      insert_queue_before: cdktf.stringToTerraform(this._insertQueueBefore),
      interface_list: cdktf.stringToTerraform(this._interfaceList),
      local_address: cdktf.stringToTerraform(this._localAddress),
      name: cdktf.stringToTerraform(this._name),
      on_down: cdktf.stringToTerraform(this._onDown),
      on_up: cdktf.stringToTerraform(this._onUp),
      only_one: cdktf.stringToTerraform(this._onlyOne),
      outgoing_filter: cdktf.stringToTerraform(this._outgoingFilter),
      parent_queue: cdktf.stringToTerraform(this._parentQueue),
      queue_type: cdktf.stringToTerraform(this._queueType),
      rate_limit: cdktf.stringToTerraform(this._rateLimit),
      remote_address: cdktf.stringToTerraform(this._remoteAddress),
      remote_ipv6_prefix_pool: cdktf.stringToTerraform(this._remoteIpv6PrefixPool),
      remote_ipv6_prefix_reuse: cdktf.booleanToTerraform(this._remoteIpv6PrefixReuse),
      session_timeout: cdktf.stringToTerraform(this._sessionTimeout),
      use_compression: cdktf.stringToTerraform(this._useCompression),
      use_encryption: cdktf.stringToTerraform(this._useEncryption),
      use_ipv6: cdktf.stringToTerraform(this._useIpv6),
      use_mpls: cdktf.stringToTerraform(this._useMpls),
      use_upnp: cdktf.stringToTerraform(this._useUpnp),
      wins_server: cdktf.listMapper(cdktf.stringToTerraform, false)(this._winsServer),
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
      address_list: {
        value: cdktf.stringToHclTerraform(this._addressList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bridge: {
        value: cdktf.stringToHclTerraform(this._bridge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bridge_horizon: {
        value: cdktf.numberToHclTerraform(this._bridgeHorizon),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bridge_learning: {
        value: cdktf.stringToHclTerraform(this._bridgeLearning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bridge_path_cost: {
        value: cdktf.numberToHclTerraform(this._bridgePathCost),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bridge_port_priority: {
        value: cdktf.numberToHclTerraform(this._bridgePortPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      change_tcp_mss: {
        value: cdktf.stringToHclTerraform(this._changeTcpMss),
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
      dhcpv6_lease_time: {
        value: cdktf.stringToHclTerraform(this._dhcpv6LeaseTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcpv6_pd_pool: {
        value: cdktf.stringToHclTerraform(this._dhcpv6PdPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcpv6_use_radius: {
        value: cdktf.booleanToHclTerraform(this._dhcpv6UseRadius),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dns_server: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsServer),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idle_timeout: {
        value: cdktf.stringToHclTerraform(this._idleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      incoming_filter: {
        value: cdktf.stringToHclTerraform(this._incomingFilter),
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
      interface_list: {
        value: cdktf.stringToHclTerraform(this._interfaceList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_address: {
        value: cdktf.stringToHclTerraform(this._localAddress),
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
      on_down: {
        value: cdktf.stringToHclTerraform(this._onDown),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_up: {
        value: cdktf.stringToHclTerraform(this._onUp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      only_one: {
        value: cdktf.stringToHclTerraform(this._onlyOne),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outgoing_filter: {
        value: cdktf.stringToHclTerraform(this._outgoingFilter),
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
      queue_type: {
        value: cdktf.stringToHclTerraform(this._queueType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate_limit: {
        value: cdktf.stringToHclTerraform(this._rateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_address: {
        value: cdktf.stringToHclTerraform(this._remoteAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_ipv6_prefix_pool: {
        value: cdktf.stringToHclTerraform(this._remoteIpv6PrefixPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_ipv6_prefix_reuse: {
        value: cdktf.booleanToHclTerraform(this._remoteIpv6PrefixReuse),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      session_timeout: {
        value: cdktf.stringToHclTerraform(this._sessionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_compression: {
        value: cdktf.stringToHclTerraform(this._useCompression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_encryption: {
        value: cdktf.stringToHclTerraform(this._useEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_ipv6: {
        value: cdktf.stringToHclTerraform(this._useIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_mpls: {
        value: cdktf.stringToHclTerraform(this._useMpls),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_upnp: {
        value: cdktf.stringToHclTerraform(this._useUpnp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wins_server: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._winsServer),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
