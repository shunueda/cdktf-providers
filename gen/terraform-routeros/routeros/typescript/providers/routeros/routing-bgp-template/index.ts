// https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoutingBgpTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#___path___ RoutingBgpTemplate#___path___}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#add_path_out RoutingBgpTemplate#add_path_out}
  */
  readonly addPathOut?: string;
  /**
  * List of address families about which this peer will exchange routing information. The remote peer must support (they usually do) BGP capabilities optional parameter to negotiate any other families than IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#address_families RoutingBgpTemplate#address_families}
  */
  readonly addressFamilies?: string;
  /**
  * 32-bit BGP autonomous system number. Value can be entered in AS-Plain and AS-Dot formats. The parameter is also used to set up the BGP confederation, in the following format: confederation_as/as . For example, if your AS is 34 and your confederation AS is 43, then as configuration should be as =43/34.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#as RoutingBgpTemplate#as}
  */
  readonly as: string;
  /**
  * If set, then all instances of the remote peer's AS number in the BGP AS-PATH attribute are replaced with the local AS number before sending a route update to that peer. Happens before routing filters and prepending.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#as_override RoutingBgpTemplate#as_override}
  */
  readonly asOverride?: boolean | cdktf.IResolvable;
  /**
  * VPLS NLRI length format type. Used for compatibility with Cisco VPLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#cisco_vpls_nlri_len_fmt RoutingBgpTemplate#cisco_vpls_nlri_len_fmt}
  */
  readonly ciscoVplsNlriLenFmt?: string;
  /**
  * In case this instance is a route reflector: the cluster ID of the router reflector cluster to this instance belongs. This attribute helps to recognize routing updates that come from another route reflector in this cluster and avoid routing information looping. Note that normally there is only one route reflector in a cluster; in this case, 'cluster-id' does not need to be configured and BGP router ID is used instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#cluster_id RoutingBgpTemplate#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#comment RoutingBgpTemplate#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#disabled RoutingBgpTemplate#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the BGP Hold Time value to use when negotiating with peers. According to the BGP specification, if the router does not receive successive KEEPALIVE and/or UPDATE and/or NOTIFICATION messages within the period specified in the Hold Time field of the OPEN message, then the BGP connection to the peer will be closed. The minimal hold-time value of both peers will be actually used (note that the special value 0 or 'infinity' is lower than any other value) infinity - never expire the connection and never send keepalive messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#hold_time RoutingBgpTemplate#hold_time}
  */
  readonly holdTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#id RoutingBgpTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * How long to keep the BGP session open after the last received 'keepalive' message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#keepalive_time RoutingBgpTemplate#keepalive_time}
  */
  readonly keepaliveTime?: string;
  /**
  * Specifies whether the remote peer is more than one hop away. This option affects outgoing next-hop selection as described in RFC 4271 (for EBGP only, excluding EBGP peers local to the confederation). It also affects: whether to accept connections from peers that are not in the same network (the remote address of the connection is used for this check); whether to accept incoming routes with NEXT_HOP attribute that is not in the same network as the address used to establish the connection; the target-scope of the routes installed from this peer; routes from multi-hop or IBGP peers resolve their next-hops through IGP routes by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#multihop RoutingBgpTemplate#multihop}
  */
  readonly multihop?: boolean | cdktf.IResolvable;
  /**
  * Name of the BGP template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#name RoutingBgpTemplate#name}
  */
  readonly name: string;
  /**
  * Affects the outgoing NEXT_HOP attribute selection. Note that next-hops set in filters always take precedence. Also note that the next-hop is not changed on route reflection, except when it's set in the filter. default - select the next-hop as described in RFC 4271 force-self - always use a local address of the interface that is used to connect to the peer as the next-hop; propagate - try to propagate further the next-hop received; i.e. if the route has BGP NEXT_HOP attribute, then use it as the next-hop, otherwise, fall back to the default case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#nexthop_choice RoutingBgpTemplate#nexthop_choice}
  */
  readonly nexthopChoice?: string;
  /**
  * If set, then the BGP AS-PATH attribute is removed before sending out route updates if the attribute contains only private AS numbers. The removal process happens before routing filters are applied and before the local, AS number is prepended to the AS path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#remove_private_as RoutingBgpTemplate#remove_private_as}
  */
  readonly removePrivateAs?: boolean | cdktf.IResolvable;
  /**
  * BGP Router ID to be used. Use the ID from the /routing/router-id configuration by specifying the reference name, or set the ID directly by specifying IP. Equal router-ids are also used to group peers into one instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#router_id RoutingBgpTemplate#router_id}
  */
  readonly routerId?: string;
  /**
  * Name of the routing table, to install routes in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#routing_table RoutingBgpTemplate#routing_table}
  */
  readonly routingTable?: string;
  /**
  * Filename to be used to save BGP protocol-specific packet content (Exported PDU) into pcap file. This method allows much simpler peer-specific packet capturing for debugging purposes. Pcap files in this format can also be loaded to create virtual BGP peers to recreate conditions that happened at the time when packet capture was running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#save_to RoutingBgpTemplate#save_to}
  */
  readonly saveTo?: string;
  /**
  * List of template names from which to inherit parameters. Useful feature, to easily configure groups with overlapping configuration options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#templates RoutingBgpTemplate#templates}
  */
  readonly templates?: string[];
  /**
  * Whether to use the BFD protocol for faster connection state detection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#use_bfd RoutingBgpTemplate#use_bfd}
  */
  readonly useBfd?: boolean | cdktf.IResolvable;
  /**
  * The VRF table this resource operates on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#vrf RoutingBgpTemplate#vrf}
  */
  readonly vrf?: string;
  /**
  * input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#input RoutingBgpTemplate#input}
  */
  readonly input?: RoutingBgpTemplateInput;
  /**
  * output block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#output RoutingBgpTemplate#output}
  */
  readonly output?: RoutingBgpTemplateOutput;
}
export interface RoutingBgpTemplateInput {
  /**
  * A quick way to filter incoming updates with specific communities. It allows filtering incoming messages directly before they are even parsed and stored in memory, that way significantly reducing memory usage. Regular input filter chain can only reject prefixes which means that it will still eat memory and will be visible in /routing route table as 'not active, filtered'. Changes to be applied required session refresh.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#accept_comunities RoutingBgpTemplate#accept_comunities}
  */
  readonly acceptComunities?: string;
  /**
  * A quick way to filter incoming updates with specific extended communities. It allows filtering incoming messages directly before they are even parsed and stored in memory, that way significantly reducing memory usage. Regular input filter chain can only reject prefixes which means that it will still eat memory and will be visible in /routing route table as 'not active, filtered'. Changes to be applied required session refresh.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#accept_ext_communities RoutingBgpTemplate#accept_ext_communities}
  */
  readonly acceptExtCommunities?: string;
  /**
  * A quick way to filter incoming updates with specific large communities. It allows filtering incoming messages directly before they are even parsed and stored in memory, that way significantly reducing memory usage. Regular input filter chain can only reject prefixes which means that it will still eat memory and will be visible in /routing route table as 'not active, filtered'. Changes to be applied required session refresh.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#accept_large_comunities RoutingBgpTemplate#accept_large_comunities}
  */
  readonly acceptLargeComunities?: string;
  /**
  * Name of the ipv4/6 address-list. A quick way to filter incoming updates with specific NLRIs. It allows filtering incoming messages directly before they are even parsed and stored in memory, that way significantly reducing memory usage. Regular input filter chain can only reject prefixes which means that it will still eat memory and will be visible in /routing route table as 'not active, filtered'. Changes to be applied required session restart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#accept_nlri RoutingBgpTemplate#accept_nlri}
  */
  readonly acceptNlri?: string;
  /**
  * A quick way to filter incoming updates with specific 'unknown' attributes. It allows filtering incoming messages directly before they are even parsed and stored in memory, that way significantly reducing memory usage. Regular input filter chain can only reject prefixes which means that it will still eat memory and will be visible in /routing route table as 'not active, filtered'. Changes to be applied required session refresh.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#accept_unknown RoutingBgpTemplate#accept_unknown}
  */
  readonly acceptUnknown?: string;
  /**
  * Configure input multi-core processing. Read more in Routing Protocol Multi-core Support article. alone - input and output of each session are processed in its own process, most likely the best option when there are a lot of cores and a lot of peers afi, instance, vrf, remote-as - try to run input/output of new session in process with similar parameters main - run input/output in the main process (could potentially increase performance on single-core even possibly on multi-core devices with a small amount of cores) input - run output in the same process as input (can be set only for output affinity)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#affinity RoutingBgpTemplate#affinity}
  */
  readonly affinity?: string;
  /**
  * Indicates how many times to allow your own AS number in AS-PATH, before discarding a prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#allow_as RoutingBgpTemplate#allow_as}
  */
  readonly allowAs?: number;
  /**
  * Name of the routing filter chain to be used on input prefixes. This happens after NLRIs are processed. If the chain is not specified, then BGP by default accepts everything.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#filter RoutingBgpTemplate#filter}
  */
  readonly filter?: string;
  /**
  * A quick way to filter incoming updates with specific communities. It allows filtering incoming messages directly before they are even parsed and stored in memory, that way significantly reducing memory usage. Regular input filter chain can only reject prefixes which means that it will still eat memory and will be visible in /routing route table as "not active, filtered". Changes to be applied required session refresh.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#filter_communities RoutingBgpTemplate#filter_communities}
  */
  readonly filterCommunities?: string;
  /**
  * A quick way to filter incoming updates with specific extended communities. It allows filtering incoming messages directly before they are even parsed and stored in memory, that way significantly reducing memory usage. Regular input filter chain can only reject prefixes which means that it will still eat memory and will be visible in /routing route table as "not active, filtered". Changes to be applied required session refresh.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#filter_ext_communities RoutingBgpTemplate#filter_ext_communities}
  */
  readonly filterExtCommunities?: string;
  /**
  * A quick way to filter incoming updates with specific large communities. It allows filtering incoming messages directly before they are even parsed and stored in memory, that way significantly reducing memory usage. Regular input filter chain can only reject prefixes which means that it will still eat memory and will be visible in /routing route table as "not active, filtered". Changes to be applied required session refresh.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#filter_large_communities RoutingBgpTemplate#filter_large_communities}
  */
  readonly filterLargeCommunities?: string;
  /**
  * Name of the filter chain that will filter incoming IPv4/IPv6 NLRIs directly before they are  stored in memory, that way significantly reducing memory usage. Regular input filter chain can only reject prefixes which means that it will still eat memory and will be visible in `/routing route` table as `not active, filtered`. Changes to be applied required session restart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#filter_nlri RoutingBgpTemplate#filter_nlri}
  */
  readonly filterNlri?: string;
  /**
  * A quick way to filter incoming updates with specific "unknown" attributes. It allows filtering incoming messages directly before they are even parsed and stored in memory, that way significantly reducing memory usage. Regular input filter chain can only reject prefixes which means that it will still eat memory and will be visible in /routing route table as "not active, filtered". Changes to be applied required session refresh.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#filter_unknown RoutingBgpTemplate#filter_unknown}
  */
  readonly filterUnknown?: string;
  /**
  * Whether to ignore the AS_PATH attribute in the BGP route selection algorithm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#ignore_as_path_len RoutingBgpTemplate#ignore_as_path_len}
  */
  readonly ignoreAsPathLen?: boolean | cdktf.IResolvable;
  /**
  * Try to limit the amount of received IPv4 routes to the specified number. This number does not represent the exact number of routes going to be installed in the routing table by the peer. BGP session 'clear' command must be used to reset the flag if the limit is reached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#limit_process_routes_ipv4 RoutingBgpTemplate#limit_process_routes_ipv4}
  */
  readonly limitProcessRoutesIpv4?: number;
  /**
  * Try to limit the amount of received IPv6 routes to the specified number. This number does not represent the exact number of routes going to be installed in the routing table by the peer. BGP session 'clear' command must be used to reset the flag if the limit is reached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#limit_process_routes_ipv6 RoutingBgpTemplate#limit_process_routes_ipv6}
  */
  readonly limitProcessRoutesIpv6?: number;
}

export function routingBgpTemplateInputToTerraform(struct?: RoutingBgpTemplateInputOutputReference | RoutingBgpTemplateInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_comunities: cdktf.stringToTerraform(struct!.acceptComunities),
    accept_ext_communities: cdktf.stringToTerraform(struct!.acceptExtCommunities),
    accept_large_comunities: cdktf.stringToTerraform(struct!.acceptLargeComunities),
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


export function routingBgpTemplateInputToHclTerraform(struct?: RoutingBgpTemplateInputOutputReference | RoutingBgpTemplateInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_comunities: {
      value: cdktf.stringToHclTerraform(struct!.acceptComunities),
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
    accept_large_comunities: {
      value: cdktf.stringToHclTerraform(struct!.acceptLargeComunities),
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

export class RoutingBgpTemplateInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoutingBgpTemplateInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptComunities !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptComunities = this._acceptComunities;
    }
    if (this._acceptExtCommunities !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptExtCommunities = this._acceptExtCommunities;
    }
    if (this._acceptLargeComunities !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptLargeComunities = this._acceptLargeComunities;
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

  public set internalValue(value: RoutingBgpTemplateInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceptComunities = undefined;
      this._acceptExtCommunities = undefined;
      this._acceptLargeComunities = undefined;
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
      this._acceptComunities = value.acceptComunities;
      this._acceptExtCommunities = value.acceptExtCommunities;
      this._acceptLargeComunities = value.acceptLargeComunities;
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

  // accept_comunities - computed: false, optional: true, required: false
  private _acceptComunities?: string; 
  public get acceptComunities() {
    return this.getStringAttribute('accept_comunities');
  }
  public set acceptComunities(value: string) {
    this._acceptComunities = value;
  }
  public resetAcceptComunities() {
    this._acceptComunities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptComunitiesInput() {
    return this._acceptComunities;
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

  // accept_large_comunities - computed: false, optional: true, required: false
  private _acceptLargeComunities?: string; 
  public get acceptLargeComunities() {
    return this.getStringAttribute('accept_large_comunities');
  }
  public set acceptLargeComunities(value: string) {
    this._acceptLargeComunities = value;
  }
  public resetAcceptLargeComunities() {
    this._acceptLargeComunities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptLargeComunitiesInput() {
    return this._acceptLargeComunities;
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
export interface RoutingBgpTemplateOutput {
  /**
  * Configure output multicore processing. Read more in Routing Protocol Multi-core Support article. alone - input and output of each session is processed in its own process, the most likely best option when there are a lot of cores and a lot of peers afi, instance, vrf, remote-as - try to run input/output of new session in process with similar parameters main - run input/output in the main process (could potentially increase performance on single-core even possibly on multicore devices with small amount of cores) input - run output in the same process as input (can be set only for output affinity).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#affinity RoutingBgpTemplate#affinity}
  */
  readonly affinity?: string;
  /**
  * Specifies default route (0.0.0.0/0) distribution method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#default_originate RoutingBgpTemplate#default_originate}
  */
  readonly defaultOriginate?: string;
  /**
  * The count of AS prepended to the AS path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#default_prepend RoutingBgpTemplate#default_prepend}
  */
  readonly defaultPrepend?: number;
  /**
  * Name of the routing filter chain to be used on the output prefixes. If the chain is not specified, then BGP by default accepts everything.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#filter_chain RoutingBgpTemplate#filter_chain}
  */
  readonly filterChain?: string;
  /**
  * Name of the routing select chain to be used for prefix selection. If not specified, then default selection is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#filter_select RoutingBgpTemplate#filter_select}
  */
  readonly filterSelect?: string;
  /**
  * Store in memory sent prefix attributes, required for ' dump-saved-advertisements ' command to work. By default, sent-out prefixes are not stored to preserve the router's memory. An option should be enabled only for debugging purposes when necessary to see currently advertised prefixes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#keep_sent_attributes RoutingBgpTemplate#keep_sent_attributes}
  */
  readonly keepSentAttributes?: boolean | cdktf.IResolvable;
  /**
  * Name of the address list used to send local networks. The network is sent only if a matching IGP route exists in the routing table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#network RoutingBgpTemplate#network}
  */
  readonly network?: string;
  /**
  * Disable client-to-client route reflection in Route Reflector setups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#no_client_to_client_reflection RoutingBgpTemplate#no_client_to_client_reflection}
  */
  readonly noClientToClientReflection?: boolean | cdktf.IResolvable;
  /**
  * The early cut is the mechanism, to guess (based on default RFC behavior) what would happen with the sent NPLRI when received by the remote peer. If the algorithm determines that the NLRI is going to be dropped, a peer will not even try to send it. However such behavior may not be desired in specific scenarios, then then this option should be used to disable the early cut feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#no_early_cut RoutingBgpTemplate#no_early_cut}
  */
  readonly noEarlyCut?: boolean | cdktf.IResolvable;
  /**
  * Enable redistribution of specified route types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#redistribute RoutingBgpTemplate#redistribute}
  */
  readonly redistribute?: string;
}

export function routingBgpTemplateOutputToTerraform(struct?: RoutingBgpTemplateOutputOutputReference | RoutingBgpTemplateOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: cdktf.stringToTerraform(struct!.affinity),
    default_originate: cdktf.stringToTerraform(struct!.defaultOriginate),
    default_prepend: cdktf.numberToTerraform(struct!.defaultPrepend),
    filter_chain: cdktf.stringToTerraform(struct!.filterChain),
    filter_select: cdktf.stringToTerraform(struct!.filterSelect),
    keep_sent_attributes: cdktf.booleanToTerraform(struct!.keepSentAttributes),
    network: cdktf.stringToTerraform(struct!.network),
    no_client_to_client_reflection: cdktf.booleanToTerraform(struct!.noClientToClientReflection),
    no_early_cut: cdktf.booleanToTerraform(struct!.noEarlyCut),
    redistribute: cdktf.stringToTerraform(struct!.redistribute),
  }
}


export function routingBgpTemplateOutputToHclTerraform(struct?: RoutingBgpTemplateOutputOutputReference | RoutingBgpTemplateOutput): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingBgpTemplateOutputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoutingBgpTemplateOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingBgpTemplateOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._affinity = undefined;
      this._defaultOriginate = undefined;
      this._defaultPrepend = undefined;
      this._filterChain = undefined;
      this._filterSelect = undefined;
      this._keepSentAttributes = undefined;
      this._network = undefined;
      this._noClientToClientReflection = undefined;
      this._noEarlyCut = undefined;
      this._redistribute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._affinity = value.affinity;
      this._defaultOriginate = value.defaultOriginate;
      this._defaultPrepend = value.defaultPrepend;
      this._filterChain = value.filterChain;
      this._filterSelect = value.filterSelect;
      this._keepSentAttributes = value.keepSentAttributes;
      this._network = value.network;
      this._noClientToClientReflection = value.noClientToClientReflection;
      this._noEarlyCut = value.noEarlyCut;
      this._redistribute = value.redistribute;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template routeros_routing_bgp_template}
*/
export class RoutingBgpTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_routing_bgp_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RoutingBgpTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RoutingBgpTemplate to import
  * @param importFromId The id of the existing RoutingBgpTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RoutingBgpTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_routing_bgp_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_template routeros_routing_bgp_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoutingBgpTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: RoutingBgpTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_routing_bgp_template',
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
    this._addPathOut = config.addPathOut;
    this._addressFamilies = config.addressFamilies;
    this._as = config.as;
    this._asOverride = config.asOverride;
    this._ciscoVplsNlriLenFmt = config.ciscoVplsNlriLenFmt;
    this._clusterId = config.clusterId;
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._holdTime = config.holdTime;
    this._id = config.id;
    this._keepaliveTime = config.keepaliveTime;
    this._multihop = config.multihop;
    this._name = config.name;
    this._nexthopChoice = config.nexthopChoice;
    this._removePrivateAs = config.removePrivateAs;
    this._routerId = config.routerId;
    this._routingTable = config.routingTable;
    this._saveTo = config.saveTo;
    this._templates = config.templates;
    this._useBfd = config.useBfd;
    this._vrf = config.vrf;
    this._input.internalValue = config.input;
    this._output.internalValue = config.output;
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

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
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
  private _input = new RoutingBgpTemplateInputOutputReference(this, "input");
  public get input() {
    return this._input;
  }
  public putInput(value: RoutingBgpTemplateInput) {
    this._input.internalValue = value;
  }
  public resetInput() {
    this._input.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input.internalValue;
  }

  // output - computed: false, optional: true, required: false
  private _output = new RoutingBgpTemplateOutputOutputReference(this, "output");
  public get output() {
    return this._output;
  }
  public putOutput(value: RoutingBgpTemplateOutput) {
    this._output.internalValue = value;
  }
  public resetOutput() {
    this._output.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output.internalValue;
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
      as_override: cdktf.booleanToTerraform(this._asOverride),
      cisco_vpls_nlri_len_fmt: cdktf.stringToTerraform(this._ciscoVplsNlriLenFmt),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      hold_time: cdktf.stringToTerraform(this._holdTime),
      id: cdktf.stringToTerraform(this._id),
      keepalive_time: cdktf.stringToTerraform(this._keepaliveTime),
      multihop: cdktf.booleanToTerraform(this._multihop),
      name: cdktf.stringToTerraform(this._name),
      nexthop_choice: cdktf.stringToTerraform(this._nexthopChoice),
      remove_private_as: cdktf.booleanToTerraform(this._removePrivateAs),
      router_id: cdktf.stringToTerraform(this._routerId),
      routing_table: cdktf.stringToTerraform(this._routingTable),
      save_to: cdktf.stringToTerraform(this._saveTo),
      templates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._templates),
      use_bfd: cdktf.booleanToTerraform(this._useBfd),
      vrf: cdktf.stringToTerraform(this._vrf),
      input: routingBgpTemplateInputToTerraform(this._input.internalValue),
      output: routingBgpTemplateOutputToTerraform(this._output.internalValue),
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
      as_override: {
        value: cdktf.booleanToHclTerraform(this._asOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      keepalive_time: {
        value: cdktf.stringToHclTerraform(this._keepaliveTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      remove_private_as: {
        value: cdktf.booleanToHclTerraform(this._removePrivateAs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
        value: routingBgpTemplateInputToHclTerraform(this._input.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoutingBgpTemplateInputList",
      },
      output: {
        value: routingBgpTemplateOutputToHclTerraform(this._output.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoutingBgpTemplateOutputList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
