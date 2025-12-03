// https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoutingBgpConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#___path___ RoutingBgpConnection#___path___}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#add_path_out RoutingBgpConnection#add_path_out}
  */
  readonly addPathOut?: string;
  /**
  * List of address families about which this peer will exchange routing information. The remote peer must support (they usually do) BGP capabilities optional parameter to negotiate any other families than IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#address_families RoutingBgpConnection#address_families}
  */
  readonly addressFamilies?: string;
  /**
  * 32-bit BGP autonomous system number. Value can be entered in AS-Plain and AS-Dot formats. The parameter is also used to set up the BGP confederation, in the following format: confederation_as/as . For example, if your AS is 34 and your confederation AS is 43, then as configuration should be as =43/34.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#as RoutingBgpConnection#as}
  */
  readonly as: string;
  /**
  * VPLS NLRI length format type. Used for compatibility with Cisco VPLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#cisco_vpls_nlri_len_fmt RoutingBgpConnection#cisco_vpls_nlri_len_fmt}
  */
  readonly ciscoVplsNlriLenFmt?: string;
  /**
  * In case this instance is a route reflector: the cluster ID of the router reflector cluster to this instance belongs. This attribute helps to recognize routing updates that come from another route reflector in this cluster and avoid routing information looping. Note that normally there is only one route reflector in a cluster; in this case, 'cluster-id' does not need to be configured and BGP router ID is used instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#cluster_id RoutingBgpConnection#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#comment RoutingBgpConnection#comment}
  */
  readonly comment?: string;
  /**
  * Whether to allow the router to initiate the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#connect RoutingBgpConnection#connect}
  */
  readonly connect?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#disabled RoutingBgpConnection#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the BGP Hold Time value to use when negotiating with peers. According to the BGP specification, if the router does not receive successive KEEPALIVE and/or UPDATE and/or NOTIFICATION messages within the period specified in the Hold Time field of the OPEN message, then the BGP connection to the peer will be closed. The minimal hold-time value of both peers will be actually used (note that the special value 0 or 'infinity' is lower than any other value) infinity - never expire the connection and never send keepalive messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#hold_time RoutingBgpConnection#hold_time}
  */
  readonly holdTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#id RoutingBgpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the instance this VPN is assigned to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#instance RoutingBgpConnection#instance}
  */
  readonly instance?: string;
  /**
  * How long to keep the BGP session open after the last received 'keepalive' message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#keepalive_time RoutingBgpConnection#keepalive_time}
  */
  readonly keepaliveTime?: string;
  /**
  * Whether to listen for incoming connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#listen RoutingBgpConnection#listen}
  */
  readonly listen?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether the remote peer is more than one hop away. This option affects outgoing next-hop selection as described in RFC 4271 (for EBGP only, excluding EBGP peers local to the confederation). It also affects: whether to accept connections from peers that are not in the same network (the remote address of the connection is used for this check); whether to accept incoming routes with NEXT_HOP attribute that is not in the same network as the address used to establish the connection; the target-scope of the routes installed from this peer; routes from multi-hop or IBGP peers resolve their next-hops through IGP routes by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#multihop RoutingBgpConnection#multihop}
  */
  readonly multihop?: boolean | cdktf.IResolvable;
  /**
  * Name of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#name RoutingBgpConnection#name}
  */
  readonly name: string;
  /**
  * Affects the outgoing NEXT_HOP attribute selection. Note that next-hops set in filters always take precedence. Also note that the next-hop is not changed on route reflection, except when it's set in the filter. default - select the next-hop as described in RFC 4271 force-self - always use a local address of the interface that is used to connect to the peer as the next-hop; propagate - try to propagate further the next-hop received; i.e. if the route has BGP NEXT_HOP attribute, then use it as the next-hop, otherwise, fall back to the default case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#nexthop_choice RoutingBgpConnection#nexthop_choice}
  */
  readonly nexthopChoice?: string;
  /**
  * BGP Router ID to be used. Use the ID from the /routing/router-id configuration by specifying the reference name, or set the ID directly by specifying IP. Equal router-ids are also used to group peers into one instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#router_id RoutingBgpConnection#router_id}
  */
  readonly routerId?: string;
  /**
  * Name of the routing table, to install routes in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#routing_table RoutingBgpConnection#routing_table}
  */
  readonly routingTable?: string;
  /**
  * Filename to be used to save BGP protocol-specific packet content (Exported PDU) into pcap file. This method allows much simpler peer-specific packet capturing for debugging purposes. Pcap files in this format can also be loaded to create virtual BGP peers to recreate conditions that happened at the time when packet capture was running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#save_to RoutingBgpConnection#save_to}
  */
  readonly saveTo?: string;
  /**
  * The key used to authenticate the connection with TCP MD5 signature as described in RFC 2385. If not specified, authentication is not used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#tcp_md5_key RoutingBgpConnection#tcp_md5_key}
  */
  readonly tcpMd5Key?: string;
  /**
  * List of the template names, to inherit parameters from. Useful for dynamic BGP peers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#templates RoutingBgpConnection#templates}
  */
  readonly templates?: string[];
  /**
  * Whether to use the BFD protocol for faster connection state detection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#use_bfd RoutingBgpConnection#use_bfd}
  */
  readonly useBfd?: boolean | cdktf.IResolvable;
  /**
  * The VRF table this resource operates on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#vrf RoutingBgpConnection#vrf}
  */
  readonly vrf?: string;
  /**
  * input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#input RoutingBgpConnection#input}
  */
  readonly input?: RoutingBgpConnectionInput;
  /**
  * local block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#local RoutingBgpConnection#local}
  */
  readonly local?: RoutingBgpConnectionLocal;
  /**
  * output block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#output RoutingBgpConnection#output}
  */
  readonly output?: RoutingBgpConnectionOutput;
  /**
  * remote block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#remote RoutingBgpConnection#remote}
  */
  readonly remote?: RoutingBgpConnectionRemote;
}
export interface RoutingBgpConnectionInput {
  /**
  * A quick way to filter incoming updates with specific communities. It allows filtering incoming messages directly before they are even parsed and stored in memory, that way significantly reducing memory usage. Regular input filter chain can only reject prefixes which means that it will still eat memory and will be visible in /routing route table as 'not active, filtered'. Changes to be applied required session refresh.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#accept_communities RoutingBgpConnection#accept_communities}
  */
  readonly acceptCommunities?: string;
  /**
  * A quick way to filter incoming updates with specific extended communities. It allows filtering incoming messages directly before they are even parsed and stored in memory, that way significantly reducing memory usage. Regular input filter chain can only reject prefixes which means that it will still eat memory and will be visible in /routing route table as 'not active, filtered'. Changes to be applied required session refresh.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#accept_ext_communities RoutingBgpConnection#accept_ext_communities}
  */
  readonly acceptExtCommunities?: string;
  /**
  * A quick way to filter incoming updates with specific large communities. It allows filtering incoming messages directly before they are even parsed and stored in memory, that way significantly reducing memory usage. Regular input filter chain can only reject prefixes which means that it will still eat memory and will be visible in /routing route table as 'not active, filtered'. Changes to be applied required session refresh.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#accept_large_communities RoutingBgpConnection#accept_large_communities}
  */
  readonly acceptLargeCommunities?: string;
  /**
  * Name of the ipv4/6 address-list. A quick way to filter incoming updates with specific NLRIs. It allows filtering incoming messages directly before they are even parsed and stored in memory, that way significantly reducing memory usage. Regular input filter chain can only reject prefixes which means that it will still eat memory and will be visible in /routing route table as 'not active, filtered'. Changes to be applied required session restart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#accept_nlri RoutingBgpConnection#accept_nlri}
  */
  readonly acceptNlri?: string;
  /**
  * A quick way to filter incoming updates with specific 'unknown' attributes. It allows filtering incoming messages directly before they are even parsed and stored in memory, that way significantly reducing memory usage. Regular input filter chain can only reject prefixes which means that it will still eat memory and will be visible in /routing route table as 'not active, filtered'. Changes to be applied required session refresh.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#accept_unknown RoutingBgpConnection#accept_unknown}
  */
  readonly acceptUnknown?: string;
  /**
  * Configure input multi-core processing. Read more in Routing Protocol Multi-core Support article. alone - input and output of each session are processed in its own process, most likely the best option when there are a lot of cores and a lot of peers afi, instance, vrf, remote-as - try to run input/output of new session in process with similar parameters main - run input/output in the main process (could potentially increase performance on single-core even possibly on multi-core devices with a small amount of cores) input - run output in the same process as input (can be set only for output affinity)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#affinity RoutingBgpConnection#affinity}
  */
  readonly affinity?: string;
  /**
  * Indicates how many times to allow your own AS number in AS-PATH, before discarding a prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#allow_as RoutingBgpConnection#allow_as}
  */
  readonly allowAs?: number;
  /**
  * Name of the routing filter chain to be used on input prefixes. This happens after NLRIs are processed. If the chain is not specified, then BGP by default accepts everything.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#filter RoutingBgpConnection#filter}
  */
  readonly filter?: string;
  /**
  * A quick way to filter incoming updates with specific communities. It allows filtering incoming messages directly before they are even parsed and stored in memory, that way significantly reducing memory usage. Regular input filter chain can only reject prefixes which means that it will still eat memory and will be visible in /routing route table as "not active, filtered". Changes to be applied required session refresh.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#filter_communities RoutingBgpConnection#filter_communities}
  */
  readonly filterCommunities?: string;
  /**
  * A quick way to filter incoming updates with specific extended communities. It allows filtering incoming messages directly before they are even parsed and stored in memory, that way significantly reducing memory usage. Regular input filter chain can only reject prefixes which means that it will still eat memory and will be visible in /routing route table as "not active, filtered". Changes to be applied required session refresh.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#filter_ext_communities RoutingBgpConnection#filter_ext_communities}
  */
  readonly filterExtCommunities?: string;
  /**
  * A quick way to filter incoming updates with specific large communities. It allows filtering incoming messages directly before they are even parsed and stored in memory, that way significantly reducing memory usage. Regular input filter chain can only reject prefixes which means that it will still eat memory and will be visible in /routing route table as "not active, filtered". Changes to be applied required session refresh.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#filter_large_communities RoutingBgpConnection#filter_large_communities}
  */
  readonly filterLargeCommunities?: string;
  /**
  * Name of the filter chain that will filter incoming IPv4/IPv6 NLRIs directly before they are  stored in memory, that way significantly reducing memory usage. Regular input filter chain can only reject prefixes which means that it will still eat memory and will be visible in `/routing route` table as `not active, filtered`. Changes to be applied required session restart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#filter_nlri RoutingBgpConnection#filter_nlri}
  */
  readonly filterNlri?: string;
  /**
  * A quick way to filter incoming updates with specific "unknown" attributes. It allows filtering incoming messages directly before they are even parsed and stored in memory, that way significantly reducing memory usage. Regular input filter chain can only reject prefixes which means that it will still eat memory and will be visible in /routing route table as "not active, filtered". Changes to be applied required session refresh.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#filter_unknown RoutingBgpConnection#filter_unknown}
  */
  readonly filterUnknown?: string;
  /**
  * Whether to ignore the AS_PATH attribute in the BGP route selection algorithm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#ignore_as_path_len RoutingBgpConnection#ignore_as_path_len}
  */
  readonly ignoreAsPathLen?: boolean | cdktf.IResolvable;
  /**
  * Try to limit the amount of received IPv4 routes to the specified number. This number does not represent the exact number of routes going to be installed in the routing table by the peer. BGP session 'clear' command must be used to reset the flag if the limit is reached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#limit_process_routes_ipv4 RoutingBgpConnection#limit_process_routes_ipv4}
  */
  readonly limitProcessRoutesIpv4?: number;
  /**
  * Try to limit the amount of received IPv6 routes to the specified number. This number does not represent the exact number of routes going to be installed in the routing table by the peer. BGP session 'clear' command must be used to reset the flag if the limit is reached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#limit_process_routes_ipv6 RoutingBgpConnection#limit_process_routes_ipv6}
  */
  readonly limitProcessRoutesIpv6?: number;
}

export function routingBgpConnectionInputToTerraform(struct?: RoutingBgpConnectionInputOutputReference | RoutingBgpConnectionInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_communities: cdktf.stringToTerraform(struct!.acceptCommunities),
    accept_ext_communities: cdktf.stringToTerraform(struct!.acceptExtCommunities),
    accept_large_communities: cdktf.stringToTerraform(struct!.acceptLargeCommunities),
    accept_nlri: cdktf.stringToTerraform(struct!.acceptNlri),
    accept_unknown: cdktf.stringToTerraform(struct!.acceptUnknown),
    affinity: cdktf.stringToTerraform(struct!.affinity),
    allow_as: cdktf.numberToTerraform(struct!.allowAs),
    filter: cdktf.stringToTerraform(struct!.filter),
    filter_communities: cdktf.stringToTerraform(struct!.filterCommunities),
    filter_ext_communities: cdktf.stringToTerraform(struct!.filterExtCommunities),
    filter_large_communities: cdktf.stringToTerraform(struct!.filterLargeCommunities),
    filter_nlri: cdktf.stringToTerraform(struct!.filterNlri),
    filter_unknown: cdktf.stringToTerraform(struct!.filterUnknown),
    ignore_as_path_len: cdktf.booleanToTerraform(struct!.ignoreAsPathLen),
    limit_process_routes_ipv4: cdktf.numberToTerraform(struct!.limitProcessRoutesIpv4),
    limit_process_routes_ipv6: cdktf.numberToTerraform(struct!.limitProcessRoutesIpv6),
  }
}


export function routingBgpConnectionInputToHclTerraform(struct?: RoutingBgpConnectionInputOutputReference | RoutingBgpConnectionInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_communities: {
      value: cdktf.stringToHclTerraform(struct!.acceptCommunities),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    accept_ext_communities: {
      value: cdktf.stringToHclTerraform(struct!.acceptExtCommunities),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    accept_large_communities: {
      value: cdktf.stringToHclTerraform(struct!.acceptLargeCommunities),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    accept_nlri: {
      value: cdktf.stringToHclTerraform(struct!.acceptNlri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    accept_unknown: {
      value: cdktf.stringToHclTerraform(struct!.acceptUnknown),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    affinity: {
      value: cdktf.stringToHclTerraform(struct!.affinity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_as: {
      value: cdktf.numberToHclTerraform(struct!.allowAs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_communities: {
      value: cdktf.stringToHclTerraform(struct!.filterCommunities),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_ext_communities: {
      value: cdktf.stringToHclTerraform(struct!.filterExtCommunities),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_large_communities: {
      value: cdktf.stringToHclTerraform(struct!.filterLargeCommunities),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_nlri: {
      value: cdktf.stringToHclTerraform(struct!.filterNlri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_unknown: {
      value: cdktf.stringToHclTerraform(struct!.filterUnknown),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_as_path_len: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreAsPathLen),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limit_process_routes_ipv4: {
      value: cdktf.numberToHclTerraform(struct!.limitProcessRoutesIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit_process_routes_ipv6: {
      value: cdktf.numberToHclTerraform(struct!.limitProcessRoutesIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingBgpConnectionInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoutingBgpConnectionInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptCommunities !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptCommunities = this._acceptCommunities;
    }
    if (this._acceptExtCommunities !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptExtCommunities = this._acceptExtCommunities;
    }
    if (this._acceptLargeCommunities !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptLargeCommunities = this._acceptLargeCommunities;
    }
    if (this._acceptNlri !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptNlri = this._acceptNlri;
    }
    if (this._acceptUnknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptUnknown = this._acceptUnknown;
    }
    if (this._affinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity;
    }
    if (this._allowAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAs = this._allowAs;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._filterCommunities !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterCommunities = this._filterCommunities;
    }
    if (this._filterExtCommunities !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterExtCommunities = this._filterExtCommunities;
    }
    if (this._filterLargeCommunities !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterLargeCommunities = this._filterLargeCommunities;
    }
    if (this._filterNlri !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterNlri = this._filterNlri;
    }
    if (this._filterUnknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterUnknown = this._filterUnknown;
    }
    if (this._ignoreAsPathLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreAsPathLen = this._ignoreAsPathLen;
    }
    if (this._limitProcessRoutesIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitProcessRoutesIpv4 = this._limitProcessRoutesIpv4;
    }
    if (this._limitProcessRoutesIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitProcessRoutesIpv6 = this._limitProcessRoutesIpv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingBgpConnectionInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceptCommunities = undefined;
      this._acceptExtCommunities = undefined;
      this._acceptLargeCommunities = undefined;
      this._acceptNlri = undefined;
      this._acceptUnknown = undefined;
      this._affinity = undefined;
      this._allowAs = undefined;
      this._filter = undefined;
      this._filterCommunities = undefined;
      this._filterExtCommunities = undefined;
      this._filterLargeCommunities = undefined;
      this._filterNlri = undefined;
      this._filterUnknown = undefined;
      this._ignoreAsPathLen = undefined;
      this._limitProcessRoutesIpv4 = undefined;
      this._limitProcessRoutesIpv6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceptCommunities = value.acceptCommunities;
      this._acceptExtCommunities = value.acceptExtCommunities;
      this._acceptLargeCommunities = value.acceptLargeCommunities;
      this._acceptNlri = value.acceptNlri;
      this._acceptUnknown = value.acceptUnknown;
      this._affinity = value.affinity;
      this._allowAs = value.allowAs;
      this._filter = value.filter;
      this._filterCommunities = value.filterCommunities;
      this._filterExtCommunities = value.filterExtCommunities;
      this._filterLargeCommunities = value.filterLargeCommunities;
      this._filterNlri = value.filterNlri;
      this._filterUnknown = value.filterUnknown;
      this._ignoreAsPathLen = value.ignoreAsPathLen;
      this._limitProcessRoutesIpv4 = value.limitProcessRoutesIpv4;
      this._limitProcessRoutesIpv6 = value.limitProcessRoutesIpv6;
    }
  }

  // accept_communities - computed: false, optional: true, required: false
  private _acceptCommunities?: string; 
  public get acceptCommunities() {
    return this.getStringAttribute('accept_communities');
  }
  public set acceptCommunities(value: string) {
    this._acceptCommunities = value;
  }
  public resetAcceptCommunities() {
    this._acceptCommunities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptCommunitiesInput() {
    return this._acceptCommunities;
  }

  // accept_ext_communities - computed: false, optional: true, required: false
  private _acceptExtCommunities?: string; 
  public get acceptExtCommunities() {
    return this.getStringAttribute('accept_ext_communities');
  }
  public set acceptExtCommunities(value: string) {
    this._acceptExtCommunities = value;
  }
  public resetAcceptExtCommunities() {
    this._acceptExtCommunities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptExtCommunitiesInput() {
    return this._acceptExtCommunities;
  }

  // accept_large_communities - computed: false, optional: true, required: false
  private _acceptLargeCommunities?: string; 
  public get acceptLargeCommunities() {
    return this.getStringAttribute('accept_large_communities');
  }
  public set acceptLargeCommunities(value: string) {
    this._acceptLargeCommunities = value;
  }
  public resetAcceptLargeCommunities() {
    this._acceptLargeCommunities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptLargeCommunitiesInput() {
    return this._acceptLargeCommunities;
  }

  // accept_nlri - computed: false, optional: true, required: false
  private _acceptNlri?: string; 
  public get acceptNlri() {
    return this.getStringAttribute('accept_nlri');
  }
  public set acceptNlri(value: string) {
    this._acceptNlri = value;
  }
  public resetAcceptNlri() {
    this._acceptNlri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptNlriInput() {
    return this._acceptNlri;
  }

  // accept_unknown - computed: false, optional: true, required: false
  private _acceptUnknown?: string; 
  public get acceptUnknown() {
    return this.getStringAttribute('accept_unknown');
  }
  public set acceptUnknown(value: string) {
    this._acceptUnknown = value;
  }
  public resetAcceptUnknown() {
    this._acceptUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptUnknownInput() {
    return this._acceptUnknown;
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity?: string; 
  public get affinity() {
    return this.getStringAttribute('affinity');
  }
  public set affinity(value: string) {
    this._affinity = value;
  }
  public resetAffinity() {
    this._affinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity;
  }

  // allow_as - computed: false, optional: true, required: false
  private _allowAs?: number; 
  public get allowAs() {
    return this.getNumberAttribute('allow_as');
  }
  public set allowAs(value: number) {
    this._allowAs = value;
  }
  public resetAllowAs() {
    this._allowAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAsInput() {
    return this._allowAs;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // filter_communities - computed: false, optional: true, required: false
  private _filterCommunities?: string; 
  public get filterCommunities() {
    return this.getStringAttribute('filter_communities');
  }
  public set filterCommunities(value: string) {
    this._filterCommunities = value;
  }
  public resetFilterCommunities() {
    this._filterCommunities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterCommunitiesInput() {
    return this._filterCommunities;
  }

  // filter_ext_communities - computed: false, optional: true, required: false
  private _filterExtCommunities?: string; 
  public get filterExtCommunities() {
    return this.getStringAttribute('filter_ext_communities');
  }
  public set filterExtCommunities(value: string) {
    this._filterExtCommunities = value;
  }
  public resetFilterExtCommunities() {
    this._filterExtCommunities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterExtCommunitiesInput() {
    return this._filterExtCommunities;
  }

  // filter_large_communities - computed: false, optional: true, required: false
  private _filterLargeCommunities?: string; 
  public get filterLargeCommunities() {
    return this.getStringAttribute('filter_large_communities');
  }
  public set filterLargeCommunities(value: string) {
    this._filterLargeCommunities = value;
  }
  public resetFilterLargeCommunities() {
    this._filterLargeCommunities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterLargeCommunitiesInput() {
    return this._filterLargeCommunities;
  }

  // filter_nlri - computed: false, optional: true, required: false
  private _filterNlri?: string; 
  public get filterNlri() {
    return this.getStringAttribute('filter_nlri');
  }
  public set filterNlri(value: string) {
    this._filterNlri = value;
  }
  public resetFilterNlri() {
    this._filterNlri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterNlriInput() {
    return this._filterNlri;
  }

  // filter_unknown - computed: false, optional: true, required: false
  private _filterUnknown?: string; 
  public get filterUnknown() {
    return this.getStringAttribute('filter_unknown');
  }
  public set filterUnknown(value: string) {
    this._filterUnknown = value;
  }
  public resetFilterUnknown() {
    this._filterUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterUnknownInput() {
    return this._filterUnknown;
  }

  // ignore_as_path_len - computed: false, optional: true, required: false
  private _ignoreAsPathLen?: boolean | cdktf.IResolvable; 
  public get ignoreAsPathLen() {
    return this.getBooleanAttribute('ignore_as_path_len');
  }
  public set ignoreAsPathLen(value: boolean | cdktf.IResolvable) {
    this._ignoreAsPathLen = value;
  }
  public resetIgnoreAsPathLen() {
    this._ignoreAsPathLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreAsPathLenInput() {
    return this._ignoreAsPathLen;
  }

  // limit_process_routes_ipv4 - computed: false, optional: true, required: false
  private _limitProcessRoutesIpv4?: number; 
  public get limitProcessRoutesIpv4() {
    return this.getNumberAttribute('limit_process_routes_ipv4');
  }
  public set limitProcessRoutesIpv4(value: number) {
    this._limitProcessRoutesIpv4 = value;
  }
  public resetLimitProcessRoutesIpv4() {
    this._limitProcessRoutesIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitProcessRoutesIpv4Input() {
    return this._limitProcessRoutesIpv4;
  }

  // limit_process_routes_ipv6 - computed: false, optional: true, required: false
  private _limitProcessRoutesIpv6?: number; 
  public get limitProcessRoutesIpv6() {
    return this.getNumberAttribute('limit_process_routes_ipv6');
  }
  public set limitProcessRoutesIpv6(value: number) {
    this._limitProcessRoutesIpv6 = value;
  }
  public resetLimitProcessRoutesIpv6() {
    this._limitProcessRoutesIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitProcessRoutesIpv6Input() {
    return this._limitProcessRoutesIpv6;
  }
}
export interface RoutingBgpConnectionLocal {
  /**
  * Local connection IPv4/6 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#address RoutingBgpConnection#address}
  */
  readonly address?: string;
  /**
  * Local connection port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#port RoutingBgpConnection#port}
  */
  readonly port?: number;
  /**
  * BGP role, in most common scenarios it should be set to iBGP or eBGP. More information on BGP roles can be found in the corresponding [RFC draft](https://datatracker.ietf.org/doc/draft-ietf-idr-bgp-open-policy/?include_text=1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#role RoutingBgpConnection#role}
  */
  readonly role: string;
  /**
  * Time To Live (hop limit) that will be recorded in sent TCP packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#ttl RoutingBgpConnection#ttl}
  */
  readonly ttl?: number;
}

export function routingBgpConnectionLocalToTerraform(struct?: RoutingBgpConnectionLocalOutputReference | RoutingBgpConnectionLocal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    port: cdktf.numberToTerraform(struct!.port),
    role: cdktf.stringToTerraform(struct!.role),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}


export function routingBgpConnectionLocalToHclTerraform(struct?: RoutingBgpConnectionLocalOutputReference | RoutingBgpConnectionLocal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingBgpConnectionLocalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoutingBgpConnectionLocal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingBgpConnectionLocal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._port = undefined;
      this._role = undefined;
      this._ttl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._port = value.port;
      this._role = value.role;
      this._ttl = value.ttl;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // default_address - computed: true, optional: false, required: false
  public get defaultAddress() {
    return this.getStringAttribute('default_address');
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}
export interface RoutingBgpConnectionOutput {
  /**
  * Configure output multicore processing. Read more in Routing Protocol Multi-core Support article. alone - input and output of each session is processed in its own process, the most likely best option when there are a lot of cores and a lot of peers afi, instance, vrf, remote-as - try to run input/output of new session in process with similar parameters main - run input/output in the main process (could potentially increase performance on single-core even possibly on multicore devices with small amount of cores) input - run output in the same process as input (can be set only for output affinity).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#affinity RoutingBgpConnection#affinity}
  */
  readonly affinity?: string;
  /**
  * If set, then all instances of the remote peer's AS number in the BGP AS-PATH attribute are replaced with the local AS number before sending a route update to that peer. Happens before routing filters and prepending.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#as_override RoutingBgpConnection#as_override}
  */
  readonly asOverride?: boolean | cdktf.IResolvable;
  /**
  * Specifies default route (0.0.0.0/0) distribution method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#default_originate RoutingBgpConnection#default_originate}
  */
  readonly defaultOriginate?: string;
  /**
  * The count of AS prepended to the AS path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#default_prepend RoutingBgpConnection#default_prepend}
  */
  readonly defaultPrepend?: number;
  /**
  * Name of the routing filter chain to be used on the output prefixes. If the chain is not specified, then BGP by default accepts everything.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#filter_chain RoutingBgpConnection#filter_chain}
  */
  readonly filterChain?: string;
  /**
  * Name of the routing select chain to be used for prefix selection. If not specified, then default selection is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#filter_select RoutingBgpConnection#filter_select}
  */
  readonly filterSelect?: string;
  /**
  * Store in memory sent prefix attributes, required for ' dump-saved-advertisements ' command to work. By default, sent-out prefixes are not stored to preserve the router's memory. An option should be enabled only for debugging purposes when necessary to see currently advertised prefixes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#keep_sent_attributes RoutingBgpConnection#keep_sent_attributes}
  */
  readonly keepSentAttributes?: boolean | cdktf.IResolvable;
  /**
  * Name of the address list used to send local networks. The network is sent only if a matching IGP route exists in the routing table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#network RoutingBgpConnection#network}
  */
  readonly network?: string;
  /**
  * Disable client-to-client route reflection in Route Reflector setups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#no_client_to_client_reflection RoutingBgpConnection#no_client_to_client_reflection}
  */
  readonly noClientToClientReflection?: boolean | cdktf.IResolvable;
  /**
  * The early cut is the mechanism, to guess (based on default RFC behavior) what would happen with the sent NPLRI when received by the remote peer. If the algorithm determines that the NLRI is going to be dropped, a peer will not even try to send it. However such behavior may not be desired in specific scenarios, then then this option should be used to disable the early cut feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#no_early_cut RoutingBgpConnection#no_early_cut}
  */
  readonly noEarlyCut?: boolean | cdktf.IResolvable;
  /**
  * Enable redistribution of specified route types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#redistribute RoutingBgpConnection#redistribute}
  */
  readonly redistribute?: string;
  /**
  * If set, then the BGP AS-PATH attribute is removed before sending out route updates if the attribute contains only private AS numbers. The removal process happens before routing filters are applied and before the local, AS number is prepended to the AS path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#remove_private_as RoutingBgpConnection#remove_private_as}
  */
  readonly removePrivateAs?: boolean | cdktf.IResolvable;
}

export function routingBgpConnectionOutputToTerraform(struct?: RoutingBgpConnectionOutputOutputReference | RoutingBgpConnectionOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: cdktf.stringToTerraform(struct!.affinity),
    as_override: cdktf.booleanToTerraform(struct!.asOverride),
    default_originate: cdktf.stringToTerraform(struct!.defaultOriginate),
    default_prepend: cdktf.numberToTerraform(struct!.defaultPrepend),
    filter_chain: cdktf.stringToTerraform(struct!.filterChain),
    filter_select: cdktf.stringToTerraform(struct!.filterSelect),
    keep_sent_attributes: cdktf.booleanToTerraform(struct!.keepSentAttributes),
    network: cdktf.stringToTerraform(struct!.network),
    no_client_to_client_reflection: cdktf.booleanToTerraform(struct!.noClientToClientReflection),
    no_early_cut: cdktf.booleanToTerraform(struct!.noEarlyCut),
    redistribute: cdktf.stringToTerraform(struct!.redistribute),
    remove_private_as: cdktf.booleanToTerraform(struct!.removePrivateAs),
  }
}


export function routingBgpConnectionOutputToHclTerraform(struct?: RoutingBgpConnectionOutputOutputReference | RoutingBgpConnectionOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: cdktf.stringToHclTerraform(struct!.affinity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    as_override: {
      value: cdktf.booleanToHclTerraform(struct!.asOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_originate: {
      value: cdktf.stringToHclTerraform(struct!.defaultOriginate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_prepend: {
      value: cdktf.numberToHclTerraform(struct!.defaultPrepend),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_chain: {
      value: cdktf.stringToHclTerraform(struct!.filterChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_select: {
      value: cdktf.stringToHclTerraform(struct!.filterSelect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_sent_attributes: {
      value: cdktf.booleanToHclTerraform(struct!.keepSentAttributes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_client_to_client_reflection: {
      value: cdktf.booleanToHclTerraform(struct!.noClientToClientReflection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_early_cut: {
      value: cdktf.booleanToHclTerraform(struct!.noEarlyCut),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    redistribute: {
      value: cdktf.stringToHclTerraform(struct!.redistribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_private_as: {
      value: cdktf.booleanToHclTerraform(struct!.removePrivateAs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingBgpConnectionOutputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoutingBgpConnectionOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity;
    }
    if (this._asOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.asOverride = this._asOverride;
    }
    if (this._defaultOriginate !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultOriginate = this._defaultOriginate;
    }
    if (this._defaultPrepend !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPrepend = this._defaultPrepend;
    }
    if (this._filterChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterChain = this._filterChain;
    }
    if (this._filterSelect !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterSelect = this._filterSelect;
    }
    if (this._keepSentAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepSentAttributes = this._keepSentAttributes;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._noClientToClientReflection !== undefined) {
      hasAnyValues = true;
      internalValueResult.noClientToClientReflection = this._noClientToClientReflection;
    }
    if (this._noEarlyCut !== undefined) {
      hasAnyValues = true;
      internalValueResult.noEarlyCut = this._noEarlyCut;
    }
    if (this._redistribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.redistribute = this._redistribute;
    }
    if (this._removePrivateAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.removePrivateAs = this._removePrivateAs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingBgpConnectionOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._affinity = undefined;
      this._asOverride = undefined;
      this._defaultOriginate = undefined;
      this._defaultPrepend = undefined;
      this._filterChain = undefined;
      this._filterSelect = undefined;
      this._keepSentAttributes = undefined;
      this._network = undefined;
      this._noClientToClientReflection = undefined;
      this._noEarlyCut = undefined;
      this._redistribute = undefined;
      this._removePrivateAs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._affinity = value.affinity;
      this._asOverride = value.asOverride;
      this._defaultOriginate = value.defaultOriginate;
      this._defaultPrepend = value.defaultPrepend;
      this._filterChain = value.filterChain;
      this._filterSelect = value.filterSelect;
      this._keepSentAttributes = value.keepSentAttributes;
      this._network = value.network;
      this._noClientToClientReflection = value.noClientToClientReflection;
      this._noEarlyCut = value.noEarlyCut;
      this._redistribute = value.redistribute;
      this._removePrivateAs = value.removePrivateAs;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity?: string; 
  public get affinity() {
    return this.getStringAttribute('affinity');
  }
  public set affinity(value: string) {
    this._affinity = value;
  }
  public resetAffinity() {
    this._affinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity;
  }

  // as_override - computed: false, optional: true, required: false
  private _asOverride?: boolean | cdktf.IResolvable; 
  public get asOverride() {
    return this.getBooleanAttribute('as_override');
  }
  public set asOverride(value: boolean | cdktf.IResolvable) {
    this._asOverride = value;
  }
  public resetAsOverride() {
    this._asOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asOverrideInput() {
    return this._asOverride;
  }

  // default_originate - computed: false, optional: true, required: false
  private _defaultOriginate?: string; 
  public get defaultOriginate() {
    return this.getStringAttribute('default_originate');
  }
  public set defaultOriginate(value: string) {
    this._defaultOriginate = value;
  }
  public resetDefaultOriginate() {
    this._defaultOriginate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOriginateInput() {
    return this._defaultOriginate;
  }

  // default_prepend - computed: false, optional: true, required: false
  private _defaultPrepend?: number; 
  public get defaultPrepend() {
    return this.getNumberAttribute('default_prepend');
  }
  public set defaultPrepend(value: number) {
    this._defaultPrepend = value;
  }
  public resetDefaultPrepend() {
    this._defaultPrepend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPrependInput() {
    return this._defaultPrepend;
  }

  // filter_chain - computed: false, optional: true, required: false
  private _filterChain?: string; 
  public get filterChain() {
    return this.getStringAttribute('filter_chain');
  }
  public set filterChain(value: string) {
    this._filterChain = value;
  }
  public resetFilterChain() {
    this._filterChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterChainInput() {
    return this._filterChain;
  }

  // filter_select - computed: false, optional: true, required: false
  private _filterSelect?: string; 
  public get filterSelect() {
    return this.getStringAttribute('filter_select');
  }
  public set filterSelect(value: string) {
    this._filterSelect = value;
  }
  public resetFilterSelect() {
    this._filterSelect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSelectInput() {
    return this._filterSelect;
  }

  // keep_sent_attributes - computed: false, optional: true, required: false
  private _keepSentAttributes?: boolean | cdktf.IResolvable; 
  public get keepSentAttributes() {
    return this.getBooleanAttribute('keep_sent_attributes');
  }
  public set keepSentAttributes(value: boolean | cdktf.IResolvable) {
    this._keepSentAttributes = value;
  }
  public resetKeepSentAttributes() {
    this._keepSentAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepSentAttributesInput() {
    return this._keepSentAttributes;
  }

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // no_client_to_client_reflection - computed: false, optional: true, required: false
  private _noClientToClientReflection?: boolean | cdktf.IResolvable; 
  public get noClientToClientReflection() {
    return this.getBooleanAttribute('no_client_to_client_reflection');
  }
  public set noClientToClientReflection(value: boolean | cdktf.IResolvable) {
    this._noClientToClientReflection = value;
  }
  public resetNoClientToClientReflection() {
    this._noClientToClientReflection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noClientToClientReflectionInput() {
    return this._noClientToClientReflection;
  }

  // no_early_cut - computed: false, optional: true, required: false
  private _noEarlyCut?: boolean | cdktf.IResolvable; 
  public get noEarlyCut() {
    return this.getBooleanAttribute('no_early_cut');
  }
  public set noEarlyCut(value: boolean | cdktf.IResolvable) {
    this._noEarlyCut = value;
  }
  public resetNoEarlyCut() {
    this._noEarlyCut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noEarlyCutInput() {
    return this._noEarlyCut;
  }

  // redistribute - computed: false, optional: true, required: false
  private _redistribute?: string; 
  public get redistribute() {
    return this.getStringAttribute('redistribute');
  }
  public set redistribute(value: string) {
    this._redistribute = value;
  }
  public resetRedistribute() {
    this._redistribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeInput() {
    return this._redistribute;
  }

  // remove_private_as - computed: false, optional: true, required: false
  private _removePrivateAs?: boolean | cdktf.IResolvable; 
  public get removePrivateAs() {
    return this.getBooleanAttribute('remove_private_as');
  }
  public set removePrivateAs(value: boolean | cdktf.IResolvable) {
    this._removePrivateAs = value;
  }
  public resetRemovePrivateAs() {
    this._removePrivateAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePrivateAsInput() {
    return this._removePrivateAs;
  }
}
export interface RoutingBgpConnectionRemote {
  /**
  * Remote IPv4/6 address used to connect and/or listen to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#address RoutingBgpConnection#address}
  */
  readonly address?: string;
  /**
  * List of remote AS numbers that are allowed to connect. Useful for dynamic peer configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#allowed_as RoutingBgpConnection#allowed_as}
  */
  readonly allowedAs?: string;
  /**
  * Remote AS number. If not specified BGP will determine remote AS automatically from the OPEN message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#as RoutingBgpConnection#as}
  */
  readonly as?: string;
  /**
  * Local connection port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#port RoutingBgpConnection#port}
  */
  readonly port?: number;
  /**
  * Acceptable minimum Time To Live, the hop limit for this TCP connection. For example, if 'ttl=255' then only single-hop neighbors will be able to establish the connection. This property only affects EBGP peers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#ttl RoutingBgpConnection#ttl}
  */
  readonly ttl?: number;
}

export function routingBgpConnectionRemoteToTerraform(struct?: RoutingBgpConnectionRemoteOutputReference | RoutingBgpConnectionRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    allowed_as: cdktf.stringToTerraform(struct!.allowedAs),
    as: cdktf.stringToTerraform(struct!.as),
    port: cdktf.numberToTerraform(struct!.port),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}


export function routingBgpConnectionRemoteToHclTerraform(struct?: RoutingBgpConnectionRemoteOutputReference | RoutingBgpConnectionRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowed_as: {
      value: cdktf.stringToHclTerraform(struct!.allowedAs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    as: {
      value: cdktf.stringToHclTerraform(struct!.as),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingBgpConnectionRemoteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoutingBgpConnectionRemote | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._allowedAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedAs = this._allowedAs;
    }
    if (this._as !== undefined) {
      hasAnyValues = true;
      internalValueResult.as = this._as;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingBgpConnectionRemote | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._allowedAs = undefined;
      this._as = undefined;
      this._port = undefined;
      this._ttl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._allowedAs = value.allowedAs;
      this._as = value.as;
      this._port = value.port;
      this._ttl = value.ttl;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // allowed_as - computed: false, optional: true, required: false
  private _allowedAs?: string; 
  public get allowedAs() {
    return this.getStringAttribute('allowed_as');
  }
  public set allowedAs(value: string) {
    this._allowedAs = value;
  }
  public resetAllowedAs() {
    this._allowedAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAsInput() {
    return this._allowedAs;
  }

  // as - computed: false, optional: true, required: false
  private _as?: string; 
  public get as() {
    return this.getStringAttribute('as');
  }
  public set as(value: string) {
    this._as = value;
  }
  public resetAs() {
    this._as = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asInput() {
    return this._as;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection routeros_routing_bgp_connection}
*/
export class RoutingBgpConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_routing_bgp_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RoutingBgpConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RoutingBgpConnection to import
  * @param importFromId The id of the existing RoutingBgpConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RoutingBgpConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_routing_bgp_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/routing_bgp_connection routeros_routing_bgp_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoutingBgpConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: RoutingBgpConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_routing_bgp_connection',
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
    this._addPathOut = config.addPathOut;
    this._addressFamilies = config.addressFamilies;
    this._as = config.as;
    this._ciscoVplsNlriLenFmt = config.ciscoVplsNlriLenFmt;
    this._clusterId = config.clusterId;
    this._comment = config.comment;
    this._connect = config.connect;
    this._disabled = config.disabled;
    this._holdTime = config.holdTime;
    this._id = config.id;
    this._instance = config.instance;
    this._keepaliveTime = config.keepaliveTime;
    this._listen = config.listen;
    this._multihop = config.multihop;
    this._name = config.name;
    this._nexthopChoice = config.nexthopChoice;
    this._routerId = config.routerId;
    this._routingTable = config.routingTable;
    this._saveTo = config.saveTo;
    this._tcpMd5Key = config.tcpMd5Key;
    this._templates = config.templates;
    this._useBfd = config.useBfd;
    this._vrf = config.vrf;
    this._input.internalValue = config.input;
    this._local.internalValue = config.local;
    this._output.internalValue = config.output;
    this._remote.internalValue = config.remote;
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

  // add_path_out - computed: false, optional: true, required: false
  private _addPathOut?: string; 
  public get addPathOut() {
    return this.getStringAttribute('add_path_out');
  }
  public set addPathOut(value: string) {
    this._addPathOut = value;
  }
  public resetAddPathOut() {
    this._addPathOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addPathOutInput() {
    return this._addPathOut;
  }

  // address_families - computed: false, optional: true, required: false
  private _addressFamilies?: string; 
  public get addressFamilies() {
    return this.getStringAttribute('address_families');
  }
  public set addressFamilies(value: string) {
    this._addressFamilies = value;
  }
  public resetAddressFamilies() {
    this._addressFamilies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFamiliesInput() {
    return this._addressFamilies;
  }

  // as - computed: false, optional: false, required: true
  private _as?: string; 
  public get as() {
    return this.getStringAttribute('as');
  }
  public set as(value: string) {
    this._as = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asInput() {
    return this._as;
  }

  // cisco_vpls_nlri_len_fmt - computed: false, optional: true, required: false
  private _ciscoVplsNlriLenFmt?: string; 
  public get ciscoVplsNlriLenFmt() {
    return this.getStringAttribute('cisco_vpls_nlri_len_fmt');
  }
  public set ciscoVplsNlriLenFmt(value: string) {
    this._ciscoVplsNlriLenFmt = value;
  }
  public resetCiscoVplsNlriLenFmt() {
    this._ciscoVplsNlriLenFmt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciscoVplsNlriLenFmtInput() {
    return this._ciscoVplsNlriLenFmt;
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // connect - computed: false, optional: true, required: false
  private _connect?: boolean | cdktf.IResolvable; 
  public get connect() {
    return this.getBooleanAttribute('connect');
  }
  public set connect(value: boolean | cdktf.IResolvable) {
    this._connect = value;
  }
  public resetConnect() {
    this._connect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectInput() {
    return this._connect;
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

  // hold_time - computed: true, optional: true, required: false
  private _holdTime?: string; 
  public get holdTime() {
    return this.getStringAttribute('hold_time');
  }
  public set holdTime(value: string) {
    this._holdTime = value;
  }
  public resetHoldTime() {
    this._holdTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdTimeInput() {
    return this._holdTime;
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

  // inactive - computed: true, optional: false, required: false
  public get inactive() {
    return this.getBooleanAttribute('inactive');
  }

  // instance - computed: false, optional: true, required: false
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  public resetInstance() {
    this._instance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
  }

  // keepalive_time - computed: false, optional: true, required: false
  private _keepaliveTime?: string; 
  public get keepaliveTime() {
    return this.getStringAttribute('keepalive_time');
  }
  public set keepaliveTime(value: string) {
    this._keepaliveTime = value;
  }
  public resetKeepaliveTime() {
    this._keepaliveTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveTimeInput() {
    return this._keepaliveTime;
  }

  // listen - computed: false, optional: true, required: false
  private _listen?: boolean | cdktf.IResolvable; 
  public get listen() {
    return this.getBooleanAttribute('listen');
  }
  public set listen(value: boolean | cdktf.IResolvable) {
    this._listen = value;
  }
  public resetListen() {
    this._listen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenInput() {
    return this._listen;
  }

  // multihop - computed: false, optional: true, required: false
  private _multihop?: boolean | cdktf.IResolvable; 
  public get multihop() {
    return this.getBooleanAttribute('multihop');
  }
  public set multihop(value: boolean | cdktf.IResolvable) {
    this._multihop = value;
  }
  public resetMultihop() {
    this._multihop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multihopInput() {
    return this._multihop;
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

  // nexthop_choice - computed: false, optional: true, required: false
  private _nexthopChoice?: string; 
  public get nexthopChoice() {
    return this.getStringAttribute('nexthop_choice');
  }
  public set nexthopChoice(value: string) {
    this._nexthopChoice = value;
  }
  public resetNexthopChoice() {
    this._nexthopChoice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopChoiceInput() {
    return this._nexthopChoice;
  }

  // router_id - computed: false, optional: true, required: false
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
  }
  public resetRouterId() {
    this._routerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId;
  }

  // routing_table - computed: true, optional: true, required: false
  private _routingTable?: string; 
  public get routingTable() {
    return this.getStringAttribute('routing_table');
  }
  public set routingTable(value: string) {
    this._routingTable = value;
  }
  public resetRoutingTable() {
    this._routingTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingTableInput() {
    return this._routingTable;
  }

  // save_to - computed: false, optional: true, required: false
  private _saveTo?: string; 
  public get saveTo() {
    return this.getStringAttribute('save_to');
  }
  public set saveTo(value: string) {
    this._saveTo = value;
  }
  public resetSaveTo() {
    this._saveTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveToInput() {
    return this._saveTo;
  }

  // tcp_md5_key - computed: false, optional: true, required: false
  private _tcpMd5Key?: string; 
  public get tcpMd5Key() {
    return this.getStringAttribute('tcp_md5_key');
  }
  public set tcpMd5Key(value: string) {
    this._tcpMd5Key = value;
  }
  public resetTcpMd5Key() {
    this._tcpMd5Key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMd5KeyInput() {
    return this._tcpMd5Key;
  }

  // templates - computed: false, optional: true, required: false
  private _templates?: string[]; 
  public get templates() {
    return cdktf.Fn.tolist(this.getListAttribute('templates'));
  }
  public set templates(value: string[]) {
    this._templates = value;
  }
  public resetTemplates() {
    this._templates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatesInput() {
    return this._templates;
  }

  // use_bfd - computed: false, optional: true, required: false
  private _useBfd?: boolean | cdktf.IResolvable; 
  public get useBfd() {
    return this.getBooleanAttribute('use_bfd');
  }
  public set useBfd(value: boolean | cdktf.IResolvable) {
    this._useBfd = value;
  }
  public resetUseBfd() {
    this._useBfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useBfdInput() {
    return this._useBfd;
  }

  // vrf - computed: false, optional: true, required: false
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  public resetVrf() {
    this._vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }

  // input - computed: false, optional: true, required: false
  private _input = new RoutingBgpConnectionInputOutputReference(this, "input");
  public get input() {
    return this._input;
  }
  public putInput(value: RoutingBgpConnectionInput) {
    this._input.internalValue = value;
  }
  public resetInput() {
    this._input.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input.internalValue;
  }

  // local - computed: false, optional: true, required: false
  private _local = new RoutingBgpConnectionLocalOutputReference(this, "local");
  public get local() {
    return this._local;
  }
  public putLocal(value: RoutingBgpConnectionLocal) {
    this._local.internalValue = value;
  }
  public resetLocal() {
    this._local.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local.internalValue;
  }

  // output - computed: false, optional: true, required: false
  private _output = new RoutingBgpConnectionOutputOutputReference(this, "output");
  public get output() {
    return this._output;
  }
  public putOutput(value: RoutingBgpConnectionOutput) {
    this._output.internalValue = value;
  }
  public resetOutput() {
    this._output.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output.internalValue;
  }

  // remote - computed: false, optional: true, required: false
  private _remote = new RoutingBgpConnectionRemoteOutputReference(this, "remote");
  public get remote() {
    return this._remote;
  }
  public putRemote(value: RoutingBgpConnectionRemote) {
    this._remote.internalValue = value;
  }
  public resetRemote() {
    this._remote.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      add_path_out: cdktf.stringToTerraform(this._addPathOut),
      address_families: cdktf.stringToTerraform(this._addressFamilies),
      as: cdktf.stringToTerraform(this._as),
      cisco_vpls_nlri_len_fmt: cdktf.stringToTerraform(this._ciscoVplsNlriLenFmt),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      comment: cdktf.stringToTerraform(this._comment),
      connect: cdktf.booleanToTerraform(this._connect),
      disabled: cdktf.booleanToTerraform(this._disabled),
      hold_time: cdktf.stringToTerraform(this._holdTime),
      id: cdktf.stringToTerraform(this._id),
      instance: cdktf.stringToTerraform(this._instance),
      keepalive_time: cdktf.stringToTerraform(this._keepaliveTime),
      listen: cdktf.booleanToTerraform(this._listen),
      multihop: cdktf.booleanToTerraform(this._multihop),
      name: cdktf.stringToTerraform(this._name),
      nexthop_choice: cdktf.stringToTerraform(this._nexthopChoice),
      router_id: cdktf.stringToTerraform(this._routerId),
      routing_table: cdktf.stringToTerraform(this._routingTable),
      save_to: cdktf.stringToTerraform(this._saveTo),
      tcp_md5_key: cdktf.stringToTerraform(this._tcpMd5Key),
      templates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._templates),
      use_bfd: cdktf.booleanToTerraform(this._useBfd),
      vrf: cdktf.stringToTerraform(this._vrf),
      input: routingBgpConnectionInputToTerraform(this._input.internalValue),
      local: routingBgpConnectionLocalToTerraform(this._local.internalValue),
      output: routingBgpConnectionOutputToTerraform(this._output.internalValue),
      remote: routingBgpConnectionRemoteToTerraform(this._remote.internalValue),
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
      add_path_out: {
        value: cdktf.stringToHclTerraform(this._addPathOut),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address_families: {
        value: cdktf.stringToHclTerraform(this._addressFamilies),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      as: {
        value: cdktf.stringToHclTerraform(this._as),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cisco_vpls_nlri_len_fmt: {
        value: cdktf.stringToHclTerraform(this._ciscoVplsNlriLenFmt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
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
      connect: {
        value: cdktf.booleanToHclTerraform(this._connect),
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
      hold_time: {
        value: cdktf.stringToHclTerraform(this._holdTime),
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
      instance: {
        value: cdktf.stringToHclTerraform(this._instance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keepalive_time: {
        value: cdktf.stringToHclTerraform(this._keepaliveTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listen: {
        value: cdktf.booleanToHclTerraform(this._listen),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      multihop: {
        value: cdktf.booleanToHclTerraform(this._multihop),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nexthop_choice: {
        value: cdktf.stringToHclTerraform(this._nexthopChoice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      router_id: {
        value: cdktf.stringToHclTerraform(this._routerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_table: {
        value: cdktf.stringToHclTerraform(this._routingTable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      save_to: {
        value: cdktf.stringToHclTerraform(this._saveTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_md5_key: {
        value: cdktf.stringToHclTerraform(this._tcpMd5Key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      templates: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._templates),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      use_bfd: {
        value: cdktf.booleanToHclTerraform(this._useBfd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vrf: {
        value: cdktf.stringToHclTerraform(this._vrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      input: {
        value: routingBgpConnectionInputToHclTerraform(this._input.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoutingBgpConnectionInputList",
      },
      local: {
        value: routingBgpConnectionLocalToHclTerraform(this._local.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoutingBgpConnectionLocalList",
      },
      output: {
        value: routingBgpConnectionOutputToHclTerraform(this._output.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoutingBgpConnectionOutputList",
      },
      remote: {
        value: routingBgpConnectionRemoteToHclTerraform(this._remote.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoutingBgpConnectionRemoteList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
