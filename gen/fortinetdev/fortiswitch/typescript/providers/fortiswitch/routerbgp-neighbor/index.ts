// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterbgpNeighborConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#activate RouterbgpNeighbor#activate}
  */
  readonly activate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#activate6 RouterbgpNeighbor#activate6}
  */
  readonly activate6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#activate_evpn RouterbgpNeighbor#activate_evpn}
  */
  readonly activateEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#advertisement_interval RouterbgpNeighbor#advertisement_interval}
  */
  readonly advertisementInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#allowas_in RouterbgpNeighbor#allowas_in}
  */
  readonly allowasIn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#allowas_in6 RouterbgpNeighbor#allowas_in6}
  */
  readonly allowasIn6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#allowas_in_enable RouterbgpNeighbor#allowas_in_enable}
  */
  readonly allowasInEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#allowas_in_enable6 RouterbgpNeighbor#allowas_in_enable6}
  */
  readonly allowasInEnable6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#allowas_in_enable_evpn RouterbgpNeighbor#allowas_in_enable_evpn}
  */
  readonly allowasInEnableEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#as_override RouterbgpNeighbor#as_override}
  */
  readonly asOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#as_override6 RouterbgpNeighbor#as_override6}
  */
  readonly asOverride6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#attribute_unchanged RouterbgpNeighbor#attribute_unchanged}
  */
  readonly attributeUnchanged?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#attribute_unchanged6 RouterbgpNeighbor#attribute_unchanged6}
  */
  readonly attributeUnchanged6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#attribute_unchanged_evpn RouterbgpNeighbor#attribute_unchanged_evpn}
  */
  readonly attributeUnchangedEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#bfd RouterbgpNeighbor#bfd}
  */
  readonly bfd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#bfd_session_mode RouterbgpNeighbor#bfd_session_mode}
  */
  readonly bfdSessionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#capability_default_originate RouterbgpNeighbor#capability_default_originate}
  */
  readonly capabilityDefaultOriginate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#capability_default_originate6 RouterbgpNeighbor#capability_default_originate6}
  */
  readonly capabilityDefaultOriginate6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#capability_dynamic RouterbgpNeighbor#capability_dynamic}
  */
  readonly capabilityDynamic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#capability_extended_nexthop RouterbgpNeighbor#capability_extended_nexthop}
  */
  readonly capabilityExtendedNexthop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#capability_orf RouterbgpNeighbor#capability_orf}
  */
  readonly capabilityOrf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#capability_orf6 RouterbgpNeighbor#capability_orf6}
  */
  readonly capabilityOrf6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#connect_timer RouterbgpNeighbor#connect_timer}
  */
  readonly connectTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#default_originate_routemap RouterbgpNeighbor#default_originate_routemap}
  */
  readonly defaultOriginateRoutemap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#default_originate_routemap6 RouterbgpNeighbor#default_originate_routemap6}
  */
  readonly defaultOriginateRoutemap6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#description RouterbgpNeighbor#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#distribute_list_in RouterbgpNeighbor#distribute_list_in}
  */
  readonly distributeListIn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#distribute_list_in6 RouterbgpNeighbor#distribute_list_in6}
  */
  readonly distributeListIn6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#distribute_list_out RouterbgpNeighbor#distribute_list_out}
  */
  readonly distributeListOut?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#distribute_list_out6 RouterbgpNeighbor#distribute_list_out6}
  */
  readonly distributeListOut6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#dont_capability_negotiate RouterbgpNeighbor#dont_capability_negotiate}
  */
  readonly dontCapabilityNegotiate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#ebgp_enforce_multihop RouterbgpNeighbor#ebgp_enforce_multihop}
  */
  readonly ebgpEnforceMultihop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#ebgp_multihop_ttl RouterbgpNeighbor#ebgp_multihop_ttl}
  */
  readonly ebgpMultihopTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#ebgp_ttl_security_hops RouterbgpNeighbor#ebgp_ttl_security_hops}
  */
  readonly ebgpTtlSecurityHops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#enforce_first_as RouterbgpNeighbor#enforce_first_as}
  */
  readonly enforceFirstAs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#filter_list_in RouterbgpNeighbor#filter_list_in}
  */
  readonly filterListIn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#filter_list_in6 RouterbgpNeighbor#filter_list_in6}
  */
  readonly filterListIn6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#filter_list_out RouterbgpNeighbor#filter_list_out}
  */
  readonly filterListOut?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#filter_list_out6 RouterbgpNeighbor#filter_list_out6}
  */
  readonly filterListOut6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#holdtime_timer RouterbgpNeighbor#holdtime_timer}
  */
  readonly holdtimeTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#id RouterbgpNeighbor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#interface RouterbgpNeighbor#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#ip RouterbgpNeighbor#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#keep_alive_timer RouterbgpNeighbor#keep_alive_timer}
  */
  readonly keepAliveTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#maximum_prefix RouterbgpNeighbor#maximum_prefix}
  */
  readonly maximumPrefix?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#maximum_prefix6 RouterbgpNeighbor#maximum_prefix6}
  */
  readonly maximumPrefix6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#maximum_prefix_threshold RouterbgpNeighbor#maximum_prefix_threshold}
  */
  readonly maximumPrefixThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#maximum_prefix_threshold6 RouterbgpNeighbor#maximum_prefix_threshold6}
  */
  readonly maximumPrefixThreshold6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#maximum_prefix_warning_only RouterbgpNeighbor#maximum_prefix_warning_only}
  */
  readonly maximumPrefixWarningOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#maximum_prefix_warning_only6 RouterbgpNeighbor#maximum_prefix_warning_only6}
  */
  readonly maximumPrefixWarningOnly6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#next_hop_self RouterbgpNeighbor#next_hop_self}
  */
  readonly nextHopSelf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#next_hop_self6 RouterbgpNeighbor#next_hop_self6}
  */
  readonly nextHopSelf6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#override_capability RouterbgpNeighbor#override_capability}
  */
  readonly overrideCapability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#passive RouterbgpNeighbor#passive}
  */
  readonly passive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#password RouterbgpNeighbor#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#prefix_list_in RouterbgpNeighbor#prefix_list_in}
  */
  readonly prefixListIn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#prefix_list_in6 RouterbgpNeighbor#prefix_list_in6}
  */
  readonly prefixListIn6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#prefix_list_out RouterbgpNeighbor#prefix_list_out}
  */
  readonly prefixListOut?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#prefix_list_out6 RouterbgpNeighbor#prefix_list_out6}
  */
  readonly prefixListOut6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#remote_as RouterbgpNeighbor#remote_as}
  */
  readonly remoteAs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#remove_private_as RouterbgpNeighbor#remove_private_as}
  */
  readonly removePrivateAs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#remove_private_as6 RouterbgpNeighbor#remove_private_as6}
  */
  readonly removePrivateAs6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#route_map_in RouterbgpNeighbor#route_map_in}
  */
  readonly routeMapIn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#route_map_in6 RouterbgpNeighbor#route_map_in6}
  */
  readonly routeMapIn6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#route_map_in_evpn RouterbgpNeighbor#route_map_in_evpn}
  */
  readonly routeMapInEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#route_map_out RouterbgpNeighbor#route_map_out}
  */
  readonly routeMapOut?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#route_map_out6 RouterbgpNeighbor#route_map_out6}
  */
  readonly routeMapOut6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#route_map_out_evpn RouterbgpNeighbor#route_map_out_evpn}
  */
  readonly routeMapOutEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#route_reflector_client RouterbgpNeighbor#route_reflector_client}
  */
  readonly routeReflectorClient?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#route_reflector_client6 RouterbgpNeighbor#route_reflector_client6}
  */
  readonly routeReflectorClient6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#route_reflector_client_evpn RouterbgpNeighbor#route_reflector_client_evpn}
  */
  readonly routeReflectorClientEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#route_server_client RouterbgpNeighbor#route_server_client}
  */
  readonly routeServerClient?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#route_server_client6 RouterbgpNeighbor#route_server_client6}
  */
  readonly routeServerClient6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#send_community RouterbgpNeighbor#send_community}
  */
  readonly sendCommunity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#send_community6 RouterbgpNeighbor#send_community6}
  */
  readonly sendCommunity6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#shutdown RouterbgpNeighbor#shutdown}
  */
  readonly shutdown?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#soft_reconfiguration RouterbgpNeighbor#soft_reconfiguration}
  */
  readonly softReconfiguration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#soft_reconfiguration6 RouterbgpNeighbor#soft_reconfiguration6}
  */
  readonly softReconfiguration6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#soft_reconfiguration_evpn RouterbgpNeighbor#soft_reconfiguration_evpn}
  */
  readonly softReconfigurationEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#strict_capability_match RouterbgpNeighbor#strict_capability_match}
  */
  readonly strictCapabilityMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#unsuppress_map RouterbgpNeighbor#unsuppress_map}
  */
  readonly unsuppressMap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#unsuppress_map6 RouterbgpNeighbor#unsuppress_map6}
  */
  readonly unsuppressMap6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#update_source RouterbgpNeighbor#update_source}
  */
  readonly updateSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#weight RouterbgpNeighbor#weight}
  */
  readonly weight?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor fortiswitch_routerbgp_neighbor}
*/
export class RouterbgpNeighbor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_routerbgp_neighbor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterbgpNeighbor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterbgpNeighbor to import
  * @param importFromId The id of the existing RouterbgpNeighbor that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterbgpNeighbor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_routerbgp_neighbor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/routerbgp_neighbor fortiswitch_routerbgp_neighbor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterbgpNeighborConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RouterbgpNeighborConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_routerbgp_neighbor',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6',
        providerVersionConstraint: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activate = config.activate;
    this._activate6 = config.activate6;
    this._activateEvpn = config.activateEvpn;
    this._advertisementInterval = config.advertisementInterval;
    this._allowasIn = config.allowasIn;
    this._allowasIn6 = config.allowasIn6;
    this._allowasInEnable = config.allowasInEnable;
    this._allowasInEnable6 = config.allowasInEnable6;
    this._allowasInEnableEvpn = config.allowasInEnableEvpn;
    this._asOverride = config.asOverride;
    this._asOverride6 = config.asOverride6;
    this._attributeUnchanged = config.attributeUnchanged;
    this._attributeUnchanged6 = config.attributeUnchanged6;
    this._attributeUnchangedEvpn = config.attributeUnchangedEvpn;
    this._bfd = config.bfd;
    this._bfdSessionMode = config.bfdSessionMode;
    this._capabilityDefaultOriginate = config.capabilityDefaultOriginate;
    this._capabilityDefaultOriginate6 = config.capabilityDefaultOriginate6;
    this._capabilityDynamic = config.capabilityDynamic;
    this._capabilityExtendedNexthop = config.capabilityExtendedNexthop;
    this._capabilityOrf = config.capabilityOrf;
    this._capabilityOrf6 = config.capabilityOrf6;
    this._connectTimer = config.connectTimer;
    this._defaultOriginateRoutemap = config.defaultOriginateRoutemap;
    this._defaultOriginateRoutemap6 = config.defaultOriginateRoutemap6;
    this._description = config.description;
    this._distributeListIn = config.distributeListIn;
    this._distributeListIn6 = config.distributeListIn6;
    this._distributeListOut = config.distributeListOut;
    this._distributeListOut6 = config.distributeListOut6;
    this._dontCapabilityNegotiate = config.dontCapabilityNegotiate;
    this._ebgpEnforceMultihop = config.ebgpEnforceMultihop;
    this._ebgpMultihopTtl = config.ebgpMultihopTtl;
    this._ebgpTtlSecurityHops = config.ebgpTtlSecurityHops;
    this._enforceFirstAs = config.enforceFirstAs;
    this._filterListIn = config.filterListIn;
    this._filterListIn6 = config.filterListIn6;
    this._filterListOut = config.filterListOut;
    this._filterListOut6 = config.filterListOut6;
    this._holdtimeTimer = config.holdtimeTimer;
    this._id = config.id;
    this._interface = config.interface;
    this._ip = config.ip;
    this._keepAliveTimer = config.keepAliveTimer;
    this._maximumPrefix = config.maximumPrefix;
    this._maximumPrefix6 = config.maximumPrefix6;
    this._maximumPrefixThreshold = config.maximumPrefixThreshold;
    this._maximumPrefixThreshold6 = config.maximumPrefixThreshold6;
    this._maximumPrefixWarningOnly = config.maximumPrefixWarningOnly;
    this._maximumPrefixWarningOnly6 = config.maximumPrefixWarningOnly6;
    this._nextHopSelf = config.nextHopSelf;
    this._nextHopSelf6 = config.nextHopSelf6;
    this._overrideCapability = config.overrideCapability;
    this._passive = config.passive;
    this._password = config.password;
    this._prefixListIn = config.prefixListIn;
    this._prefixListIn6 = config.prefixListIn6;
    this._prefixListOut = config.prefixListOut;
    this._prefixListOut6 = config.prefixListOut6;
    this._remoteAs = config.remoteAs;
    this._removePrivateAs = config.removePrivateAs;
    this._removePrivateAs6 = config.removePrivateAs6;
    this._routeMapIn = config.routeMapIn;
    this._routeMapIn6 = config.routeMapIn6;
    this._routeMapInEvpn = config.routeMapInEvpn;
    this._routeMapOut = config.routeMapOut;
    this._routeMapOut6 = config.routeMapOut6;
    this._routeMapOutEvpn = config.routeMapOutEvpn;
    this._routeReflectorClient = config.routeReflectorClient;
    this._routeReflectorClient6 = config.routeReflectorClient6;
    this._routeReflectorClientEvpn = config.routeReflectorClientEvpn;
    this._routeServerClient = config.routeServerClient;
    this._routeServerClient6 = config.routeServerClient6;
    this._sendCommunity = config.sendCommunity;
    this._sendCommunity6 = config.sendCommunity6;
    this._shutdown = config.shutdown;
    this._softReconfiguration = config.softReconfiguration;
    this._softReconfiguration6 = config.softReconfiguration6;
    this._softReconfigurationEvpn = config.softReconfigurationEvpn;
    this._strictCapabilityMatch = config.strictCapabilityMatch;
    this._unsuppressMap = config.unsuppressMap;
    this._unsuppressMap6 = config.unsuppressMap6;
    this._updateSource = config.updateSource;
    this._weight = config.weight;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activate - computed: true, optional: true, required: false
  private _activate?: string; 
  public get activate() {
    return this.getStringAttribute('activate');
  }
  public set activate(value: string) {
    this._activate = value;
  }
  public resetActivate() {
    this._activate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activateInput() {
    return this._activate;
  }

  // activate6 - computed: true, optional: true, required: false
  private _activate6?: string; 
  public get activate6() {
    return this.getStringAttribute('activate6');
  }
  public set activate6(value: string) {
    this._activate6 = value;
  }
  public resetActivate6() {
    this._activate6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activate6Input() {
    return this._activate6;
  }

  // activate_evpn - computed: true, optional: true, required: false
  private _activateEvpn?: string; 
  public get activateEvpn() {
    return this.getStringAttribute('activate_evpn');
  }
  public set activateEvpn(value: string) {
    this._activateEvpn = value;
  }
  public resetActivateEvpn() {
    this._activateEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activateEvpnInput() {
    return this._activateEvpn;
  }

  // advertisement_interval - computed: true, optional: true, required: false
  private _advertisementInterval?: number; 
  public get advertisementInterval() {
    return this.getNumberAttribute('advertisement_interval');
  }
  public set advertisementInterval(value: number) {
    this._advertisementInterval = value;
  }
  public resetAdvertisementInterval() {
    this._advertisementInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisementIntervalInput() {
    return this._advertisementInterval;
  }

  // allowas_in - computed: true, optional: true, required: false
  private _allowasIn?: number; 
  public get allowasIn() {
    return this.getNumberAttribute('allowas_in');
  }
  public set allowasIn(value: number) {
    this._allowasIn = value;
  }
  public resetAllowasIn() {
    this._allowasIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInInput() {
    return this._allowasIn;
  }

  // allowas_in6 - computed: true, optional: true, required: false
  private _allowasIn6?: number; 
  public get allowasIn6() {
    return this.getNumberAttribute('allowas_in6');
  }
  public set allowasIn6(value: number) {
    this._allowasIn6 = value;
  }
  public resetAllowasIn6() {
    this._allowasIn6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasIn6Input() {
    return this._allowasIn6;
  }

  // allowas_in_enable - computed: true, optional: true, required: false
  private _allowasInEnable?: string; 
  public get allowasInEnable() {
    return this.getStringAttribute('allowas_in_enable');
  }
  public set allowasInEnable(value: string) {
    this._allowasInEnable = value;
  }
  public resetAllowasInEnable() {
    this._allowasInEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInEnableInput() {
    return this._allowasInEnable;
  }

  // allowas_in_enable6 - computed: true, optional: true, required: false
  private _allowasInEnable6?: string; 
  public get allowasInEnable6() {
    return this.getStringAttribute('allowas_in_enable6');
  }
  public set allowasInEnable6(value: string) {
    this._allowasInEnable6 = value;
  }
  public resetAllowasInEnable6() {
    this._allowasInEnable6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInEnable6Input() {
    return this._allowasInEnable6;
  }

  // allowas_in_enable_evpn - computed: true, optional: true, required: false
  private _allowasInEnableEvpn?: string; 
  public get allowasInEnableEvpn() {
    return this.getStringAttribute('allowas_in_enable_evpn');
  }
  public set allowasInEnableEvpn(value: string) {
    this._allowasInEnableEvpn = value;
  }
  public resetAllowasInEnableEvpn() {
    this._allowasInEnableEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInEnableEvpnInput() {
    return this._allowasInEnableEvpn;
  }

  // as_override - computed: true, optional: true, required: false
  private _asOverride?: string; 
  public get asOverride() {
    return this.getStringAttribute('as_override');
  }
  public set asOverride(value: string) {
    this._asOverride = value;
  }
  public resetAsOverride() {
    this._asOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asOverrideInput() {
    return this._asOverride;
  }

  // as_override6 - computed: true, optional: true, required: false
  private _asOverride6?: string; 
  public get asOverride6() {
    return this.getStringAttribute('as_override6');
  }
  public set asOverride6(value: string) {
    this._asOverride6 = value;
  }
  public resetAsOverride6() {
    this._asOverride6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asOverride6Input() {
    return this._asOverride6;
  }

  // attribute_unchanged - computed: true, optional: true, required: false
  private _attributeUnchanged?: string; 
  public get attributeUnchanged() {
    return this.getStringAttribute('attribute_unchanged');
  }
  public set attributeUnchanged(value: string) {
    this._attributeUnchanged = value;
  }
  public resetAttributeUnchanged() {
    this._attributeUnchanged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeUnchangedInput() {
    return this._attributeUnchanged;
  }

  // attribute_unchanged6 - computed: true, optional: true, required: false
  private _attributeUnchanged6?: string; 
  public get attributeUnchanged6() {
    return this.getStringAttribute('attribute_unchanged6');
  }
  public set attributeUnchanged6(value: string) {
    this._attributeUnchanged6 = value;
  }
  public resetAttributeUnchanged6() {
    this._attributeUnchanged6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeUnchanged6Input() {
    return this._attributeUnchanged6;
  }

  // attribute_unchanged_evpn - computed: true, optional: true, required: false
  private _attributeUnchangedEvpn?: string; 
  public get attributeUnchangedEvpn() {
    return this.getStringAttribute('attribute_unchanged_evpn');
  }
  public set attributeUnchangedEvpn(value: string) {
    this._attributeUnchangedEvpn = value;
  }
  public resetAttributeUnchangedEvpn() {
    this._attributeUnchangedEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeUnchangedEvpnInput() {
    return this._attributeUnchangedEvpn;
  }

  // bfd - computed: true, optional: true, required: false
  private _bfd?: string; 
  public get bfd() {
    return this.getStringAttribute('bfd');
  }
  public set bfd(value: string) {
    this._bfd = value;
  }
  public resetBfd() {
    this._bfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd;
  }

  // bfd_session_mode - computed: true, optional: true, required: false
  private _bfdSessionMode?: string; 
  public get bfdSessionMode() {
    return this.getStringAttribute('bfd_session_mode');
  }
  public set bfdSessionMode(value: string) {
    this._bfdSessionMode = value;
  }
  public resetBfdSessionMode() {
    this._bfdSessionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdSessionModeInput() {
    return this._bfdSessionMode;
  }

  // capability_default_originate - computed: true, optional: true, required: false
  private _capabilityDefaultOriginate?: string; 
  public get capabilityDefaultOriginate() {
    return this.getStringAttribute('capability_default_originate');
  }
  public set capabilityDefaultOriginate(value: string) {
    this._capabilityDefaultOriginate = value;
  }
  public resetCapabilityDefaultOriginate() {
    this._capabilityDefaultOriginate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityDefaultOriginateInput() {
    return this._capabilityDefaultOriginate;
  }

  // capability_default_originate6 - computed: true, optional: true, required: false
  private _capabilityDefaultOriginate6?: string; 
  public get capabilityDefaultOriginate6() {
    return this.getStringAttribute('capability_default_originate6');
  }
  public set capabilityDefaultOriginate6(value: string) {
    this._capabilityDefaultOriginate6 = value;
  }
  public resetCapabilityDefaultOriginate6() {
    this._capabilityDefaultOriginate6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityDefaultOriginate6Input() {
    return this._capabilityDefaultOriginate6;
  }

  // capability_dynamic - computed: true, optional: true, required: false
  private _capabilityDynamic?: string; 
  public get capabilityDynamic() {
    return this.getStringAttribute('capability_dynamic');
  }
  public set capabilityDynamic(value: string) {
    this._capabilityDynamic = value;
  }
  public resetCapabilityDynamic() {
    this._capabilityDynamic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityDynamicInput() {
    return this._capabilityDynamic;
  }

  // capability_extended_nexthop - computed: true, optional: true, required: false
  private _capabilityExtendedNexthop?: string; 
  public get capabilityExtendedNexthop() {
    return this.getStringAttribute('capability_extended_nexthop');
  }
  public set capabilityExtendedNexthop(value: string) {
    this._capabilityExtendedNexthop = value;
  }
  public resetCapabilityExtendedNexthop() {
    this._capabilityExtendedNexthop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityExtendedNexthopInput() {
    return this._capabilityExtendedNexthop;
  }

  // capability_orf - computed: true, optional: true, required: false
  private _capabilityOrf?: string; 
  public get capabilityOrf() {
    return this.getStringAttribute('capability_orf');
  }
  public set capabilityOrf(value: string) {
    this._capabilityOrf = value;
  }
  public resetCapabilityOrf() {
    this._capabilityOrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityOrfInput() {
    return this._capabilityOrf;
  }

  // capability_orf6 - computed: true, optional: true, required: false
  private _capabilityOrf6?: string; 
  public get capabilityOrf6() {
    return this.getStringAttribute('capability_orf6');
  }
  public set capabilityOrf6(value: string) {
    this._capabilityOrf6 = value;
  }
  public resetCapabilityOrf6() {
    this._capabilityOrf6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityOrf6Input() {
    return this._capabilityOrf6;
  }

  // connect_timer - computed: true, optional: true, required: false
  private _connectTimer?: number; 
  public get connectTimer() {
    return this.getNumberAttribute('connect_timer');
  }
  public set connectTimer(value: number) {
    this._connectTimer = value;
  }
  public resetConnectTimer() {
    this._connectTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimerInput() {
    return this._connectTimer;
  }

  // default_originate_routemap - computed: true, optional: true, required: false
  private _defaultOriginateRoutemap?: string; 
  public get defaultOriginateRoutemap() {
    return this.getStringAttribute('default_originate_routemap');
  }
  public set defaultOriginateRoutemap(value: string) {
    this._defaultOriginateRoutemap = value;
  }
  public resetDefaultOriginateRoutemap() {
    this._defaultOriginateRoutemap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOriginateRoutemapInput() {
    return this._defaultOriginateRoutemap;
  }

  // default_originate_routemap6 - computed: true, optional: true, required: false
  private _defaultOriginateRoutemap6?: string; 
  public get defaultOriginateRoutemap6() {
    return this.getStringAttribute('default_originate_routemap6');
  }
  public set defaultOriginateRoutemap6(value: string) {
    this._defaultOriginateRoutemap6 = value;
  }
  public resetDefaultOriginateRoutemap6() {
    this._defaultOriginateRoutemap6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOriginateRoutemap6Input() {
    return this._defaultOriginateRoutemap6;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // distribute_list_in - computed: true, optional: true, required: false
  private _distributeListIn?: string; 
  public get distributeListIn() {
    return this.getStringAttribute('distribute_list_in');
  }
  public set distributeListIn(value: string) {
    this._distributeListIn = value;
  }
  public resetDistributeListIn() {
    this._distributeListIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListInInput() {
    return this._distributeListIn;
  }

  // distribute_list_in6 - computed: true, optional: true, required: false
  private _distributeListIn6?: string; 
  public get distributeListIn6() {
    return this.getStringAttribute('distribute_list_in6');
  }
  public set distributeListIn6(value: string) {
    this._distributeListIn6 = value;
  }
  public resetDistributeListIn6() {
    this._distributeListIn6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListIn6Input() {
    return this._distributeListIn6;
  }

  // distribute_list_out - computed: true, optional: true, required: false
  private _distributeListOut?: string; 
  public get distributeListOut() {
    return this.getStringAttribute('distribute_list_out');
  }
  public set distributeListOut(value: string) {
    this._distributeListOut = value;
  }
  public resetDistributeListOut() {
    this._distributeListOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListOutInput() {
    return this._distributeListOut;
  }

  // distribute_list_out6 - computed: true, optional: true, required: false
  private _distributeListOut6?: string; 
  public get distributeListOut6() {
    return this.getStringAttribute('distribute_list_out6');
  }
  public set distributeListOut6(value: string) {
    this._distributeListOut6 = value;
  }
  public resetDistributeListOut6() {
    this._distributeListOut6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListOut6Input() {
    return this._distributeListOut6;
  }

  // dont_capability_negotiate - computed: true, optional: true, required: false
  private _dontCapabilityNegotiate?: string; 
  public get dontCapabilityNegotiate() {
    return this.getStringAttribute('dont_capability_negotiate');
  }
  public set dontCapabilityNegotiate(value: string) {
    this._dontCapabilityNegotiate = value;
  }
  public resetDontCapabilityNegotiate() {
    this._dontCapabilityNegotiate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dontCapabilityNegotiateInput() {
    return this._dontCapabilityNegotiate;
  }

  // ebgp_enforce_multihop - computed: true, optional: true, required: false
  private _ebgpEnforceMultihop?: string; 
  public get ebgpEnforceMultihop() {
    return this.getStringAttribute('ebgp_enforce_multihop');
  }
  public set ebgpEnforceMultihop(value: string) {
    this._ebgpEnforceMultihop = value;
  }
  public resetEbgpEnforceMultihop() {
    this._ebgpEnforceMultihop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpEnforceMultihopInput() {
    return this._ebgpEnforceMultihop;
  }

  // ebgp_multihop_ttl - computed: true, optional: true, required: false
  private _ebgpMultihopTtl?: number; 
  public get ebgpMultihopTtl() {
    return this.getNumberAttribute('ebgp_multihop_ttl');
  }
  public set ebgpMultihopTtl(value: number) {
    this._ebgpMultihopTtl = value;
  }
  public resetEbgpMultihopTtl() {
    this._ebgpMultihopTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpMultihopTtlInput() {
    return this._ebgpMultihopTtl;
  }

  // ebgp_ttl_security_hops - computed: true, optional: true, required: false
  private _ebgpTtlSecurityHops?: number; 
  public get ebgpTtlSecurityHops() {
    return this.getNumberAttribute('ebgp_ttl_security_hops');
  }
  public set ebgpTtlSecurityHops(value: number) {
    this._ebgpTtlSecurityHops = value;
  }
  public resetEbgpTtlSecurityHops() {
    this._ebgpTtlSecurityHops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpTtlSecurityHopsInput() {
    return this._ebgpTtlSecurityHops;
  }

  // enforce_first_as - computed: true, optional: true, required: false
  private _enforceFirstAs?: string; 
  public get enforceFirstAs() {
    return this.getStringAttribute('enforce_first_as');
  }
  public set enforceFirstAs(value: string) {
    this._enforceFirstAs = value;
  }
  public resetEnforceFirstAs() {
    this._enforceFirstAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceFirstAsInput() {
    return this._enforceFirstAs;
  }

  // filter_list_in - computed: true, optional: true, required: false
  private _filterListIn?: string; 
  public get filterListIn() {
    return this.getStringAttribute('filter_list_in');
  }
  public set filterListIn(value: string) {
    this._filterListIn = value;
  }
  public resetFilterListIn() {
    this._filterListIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListInInput() {
    return this._filterListIn;
  }

  // filter_list_in6 - computed: true, optional: true, required: false
  private _filterListIn6?: string; 
  public get filterListIn6() {
    return this.getStringAttribute('filter_list_in6');
  }
  public set filterListIn6(value: string) {
    this._filterListIn6 = value;
  }
  public resetFilterListIn6() {
    this._filterListIn6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListIn6Input() {
    return this._filterListIn6;
  }

  // filter_list_out - computed: true, optional: true, required: false
  private _filterListOut?: string; 
  public get filterListOut() {
    return this.getStringAttribute('filter_list_out');
  }
  public set filterListOut(value: string) {
    this._filterListOut = value;
  }
  public resetFilterListOut() {
    this._filterListOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListOutInput() {
    return this._filterListOut;
  }

  // filter_list_out6 - computed: true, optional: true, required: false
  private _filterListOut6?: string; 
  public get filterListOut6() {
    return this.getStringAttribute('filter_list_out6');
  }
  public set filterListOut6(value: string) {
    this._filterListOut6 = value;
  }
  public resetFilterListOut6() {
    this._filterListOut6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListOut6Input() {
    return this._filterListOut6;
  }

  // holdtime_timer - computed: true, optional: true, required: false
  private _holdtimeTimer?: number; 
  public get holdtimeTimer() {
    return this.getNumberAttribute('holdtime_timer');
  }
  public set holdtimeTimer(value: number) {
    this._holdtimeTimer = value;
  }
  public resetHoldtimeTimer() {
    this._holdtimeTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdtimeTimerInput() {
    return this._holdtimeTimer;
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

  // interface - computed: true, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // keep_alive_timer - computed: true, optional: true, required: false
  private _keepAliveTimer?: number; 
  public get keepAliveTimer() {
    return this.getNumberAttribute('keep_alive_timer');
  }
  public set keepAliveTimer(value: number) {
    this._keepAliveTimer = value;
  }
  public resetKeepAliveTimer() {
    this._keepAliveTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAliveTimerInput() {
    return this._keepAliveTimer;
  }

  // maximum_prefix - computed: true, optional: true, required: false
  private _maximumPrefix?: number; 
  public get maximumPrefix() {
    return this.getNumberAttribute('maximum_prefix');
  }
  public set maximumPrefix(value: number) {
    this._maximumPrefix = value;
  }
  public resetMaximumPrefix() {
    this._maximumPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixInput() {
    return this._maximumPrefix;
  }

  // maximum_prefix6 - computed: true, optional: true, required: false
  private _maximumPrefix6?: number; 
  public get maximumPrefix6() {
    return this.getNumberAttribute('maximum_prefix6');
  }
  public set maximumPrefix6(value: number) {
    this._maximumPrefix6 = value;
  }
  public resetMaximumPrefix6() {
    this._maximumPrefix6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefix6Input() {
    return this._maximumPrefix6;
  }

  // maximum_prefix_threshold - computed: true, optional: true, required: false
  private _maximumPrefixThreshold?: number; 
  public get maximumPrefixThreshold() {
    return this.getNumberAttribute('maximum_prefix_threshold');
  }
  public set maximumPrefixThreshold(value: number) {
    this._maximumPrefixThreshold = value;
  }
  public resetMaximumPrefixThreshold() {
    this._maximumPrefixThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixThresholdInput() {
    return this._maximumPrefixThreshold;
  }

  // maximum_prefix_threshold6 - computed: true, optional: true, required: false
  private _maximumPrefixThreshold6?: number; 
  public get maximumPrefixThreshold6() {
    return this.getNumberAttribute('maximum_prefix_threshold6');
  }
  public set maximumPrefixThreshold6(value: number) {
    this._maximumPrefixThreshold6 = value;
  }
  public resetMaximumPrefixThreshold6() {
    this._maximumPrefixThreshold6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixThreshold6Input() {
    return this._maximumPrefixThreshold6;
  }

  // maximum_prefix_warning_only - computed: true, optional: true, required: false
  private _maximumPrefixWarningOnly?: string; 
  public get maximumPrefixWarningOnly() {
    return this.getStringAttribute('maximum_prefix_warning_only');
  }
  public set maximumPrefixWarningOnly(value: string) {
    this._maximumPrefixWarningOnly = value;
  }
  public resetMaximumPrefixWarningOnly() {
    this._maximumPrefixWarningOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixWarningOnlyInput() {
    return this._maximumPrefixWarningOnly;
  }

  // maximum_prefix_warning_only6 - computed: true, optional: true, required: false
  private _maximumPrefixWarningOnly6?: string; 
  public get maximumPrefixWarningOnly6() {
    return this.getStringAttribute('maximum_prefix_warning_only6');
  }
  public set maximumPrefixWarningOnly6(value: string) {
    this._maximumPrefixWarningOnly6 = value;
  }
  public resetMaximumPrefixWarningOnly6() {
    this._maximumPrefixWarningOnly6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixWarningOnly6Input() {
    return this._maximumPrefixWarningOnly6;
  }

  // next_hop_self - computed: true, optional: true, required: false
  private _nextHopSelf?: string; 
  public get nextHopSelf() {
    return this.getStringAttribute('next_hop_self');
  }
  public set nextHopSelf(value: string) {
    this._nextHopSelf = value;
  }
  public resetNextHopSelf() {
    this._nextHopSelf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopSelfInput() {
    return this._nextHopSelf;
  }

  // next_hop_self6 - computed: true, optional: true, required: false
  private _nextHopSelf6?: string; 
  public get nextHopSelf6() {
    return this.getStringAttribute('next_hop_self6');
  }
  public set nextHopSelf6(value: string) {
    this._nextHopSelf6 = value;
  }
  public resetNextHopSelf6() {
    this._nextHopSelf6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopSelf6Input() {
    return this._nextHopSelf6;
  }

  // override_capability - computed: true, optional: true, required: false
  private _overrideCapability?: string; 
  public get overrideCapability() {
    return this.getStringAttribute('override_capability');
  }
  public set overrideCapability(value: string) {
    this._overrideCapability = value;
  }
  public resetOverrideCapability() {
    this._overrideCapability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideCapabilityInput() {
    return this._overrideCapability;
  }

  // passive - computed: true, optional: true, required: false
  private _passive?: string; 
  public get passive() {
    return this.getStringAttribute('passive');
  }
  public set passive(value: string) {
    this._passive = value;
  }
  public resetPassive() {
    this._passive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInput() {
    return this._passive;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // prefix_list_in - computed: true, optional: true, required: false
  private _prefixListIn?: string; 
  public get prefixListIn() {
    return this.getStringAttribute('prefix_list_in');
  }
  public set prefixListIn(value: string) {
    this._prefixListIn = value;
  }
  public resetPrefixListIn() {
    this._prefixListIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInInput() {
    return this._prefixListIn;
  }

  // prefix_list_in6 - computed: true, optional: true, required: false
  private _prefixListIn6?: string; 
  public get prefixListIn6() {
    return this.getStringAttribute('prefix_list_in6');
  }
  public set prefixListIn6(value: string) {
    this._prefixListIn6 = value;
  }
  public resetPrefixListIn6() {
    this._prefixListIn6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListIn6Input() {
    return this._prefixListIn6;
  }

  // prefix_list_out - computed: true, optional: true, required: false
  private _prefixListOut?: string; 
  public get prefixListOut() {
    return this.getStringAttribute('prefix_list_out');
  }
  public set prefixListOut(value: string) {
    this._prefixListOut = value;
  }
  public resetPrefixListOut() {
    this._prefixListOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListOutInput() {
    return this._prefixListOut;
  }

  // prefix_list_out6 - computed: true, optional: true, required: false
  private _prefixListOut6?: string; 
  public get prefixListOut6() {
    return this.getStringAttribute('prefix_list_out6');
  }
  public set prefixListOut6(value: string) {
    this._prefixListOut6 = value;
  }
  public resetPrefixListOut6() {
    this._prefixListOut6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListOut6Input() {
    return this._prefixListOut6;
  }

  // remote_as - computed: true, optional: true, required: false
  private _remoteAs?: number; 
  public get remoteAs() {
    return this.getNumberAttribute('remote_as');
  }
  public set remoteAs(value: number) {
    this._remoteAs = value;
  }
  public resetRemoteAs() {
    this._remoteAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAsInput() {
    return this._remoteAs;
  }

  // remove_private_as - computed: true, optional: true, required: false
  private _removePrivateAs?: string; 
  public get removePrivateAs() {
    return this.getStringAttribute('remove_private_as');
  }
  public set removePrivateAs(value: string) {
    this._removePrivateAs = value;
  }
  public resetRemovePrivateAs() {
    this._removePrivateAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePrivateAsInput() {
    return this._removePrivateAs;
  }

  // remove_private_as6 - computed: true, optional: true, required: false
  private _removePrivateAs6?: string; 
  public get removePrivateAs6() {
    return this.getStringAttribute('remove_private_as6');
  }
  public set removePrivateAs6(value: string) {
    this._removePrivateAs6 = value;
  }
  public resetRemovePrivateAs6() {
    this._removePrivateAs6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePrivateAs6Input() {
    return this._removePrivateAs6;
  }

  // route_map_in - computed: true, optional: true, required: false
  private _routeMapIn?: string; 
  public get routeMapIn() {
    return this.getStringAttribute('route_map_in');
  }
  public set routeMapIn(value: string) {
    this._routeMapIn = value;
  }
  public resetRouteMapIn() {
    this._routeMapIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInInput() {
    return this._routeMapIn;
  }

  // route_map_in6 - computed: true, optional: true, required: false
  private _routeMapIn6?: string; 
  public get routeMapIn6() {
    return this.getStringAttribute('route_map_in6');
  }
  public set routeMapIn6(value: string) {
    this._routeMapIn6 = value;
  }
  public resetRouteMapIn6() {
    this._routeMapIn6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapIn6Input() {
    return this._routeMapIn6;
  }

  // route_map_in_evpn - computed: true, optional: true, required: false
  private _routeMapInEvpn?: string; 
  public get routeMapInEvpn() {
    return this.getStringAttribute('route_map_in_evpn');
  }
  public set routeMapInEvpn(value: string) {
    this._routeMapInEvpn = value;
  }
  public resetRouteMapInEvpn() {
    this._routeMapInEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInEvpnInput() {
    return this._routeMapInEvpn;
  }

  // route_map_out - computed: true, optional: true, required: false
  private _routeMapOut?: string; 
  public get routeMapOut() {
    return this.getStringAttribute('route_map_out');
  }
  public set routeMapOut(value: string) {
    this._routeMapOut = value;
  }
  public resetRouteMapOut() {
    this._routeMapOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapOutInput() {
    return this._routeMapOut;
  }

  // route_map_out6 - computed: true, optional: true, required: false
  private _routeMapOut6?: string; 
  public get routeMapOut6() {
    return this.getStringAttribute('route_map_out6');
  }
  public set routeMapOut6(value: string) {
    this._routeMapOut6 = value;
  }
  public resetRouteMapOut6() {
    this._routeMapOut6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapOut6Input() {
    return this._routeMapOut6;
  }

  // route_map_out_evpn - computed: true, optional: true, required: false
  private _routeMapOutEvpn?: string; 
  public get routeMapOutEvpn() {
    return this.getStringAttribute('route_map_out_evpn');
  }
  public set routeMapOutEvpn(value: string) {
    this._routeMapOutEvpn = value;
  }
  public resetRouteMapOutEvpn() {
    this._routeMapOutEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapOutEvpnInput() {
    return this._routeMapOutEvpn;
  }

  // route_reflector_client - computed: true, optional: true, required: false
  private _routeReflectorClient?: string; 
  public get routeReflectorClient() {
    return this.getStringAttribute('route_reflector_client');
  }
  public set routeReflectorClient(value: string) {
    this._routeReflectorClient = value;
  }
  public resetRouteReflectorClient() {
    this._routeReflectorClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeReflectorClientInput() {
    return this._routeReflectorClient;
  }

  // route_reflector_client6 - computed: true, optional: true, required: false
  private _routeReflectorClient6?: string; 
  public get routeReflectorClient6() {
    return this.getStringAttribute('route_reflector_client6');
  }
  public set routeReflectorClient6(value: string) {
    this._routeReflectorClient6 = value;
  }
  public resetRouteReflectorClient6() {
    this._routeReflectorClient6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeReflectorClient6Input() {
    return this._routeReflectorClient6;
  }

  // route_reflector_client_evpn - computed: true, optional: true, required: false
  private _routeReflectorClientEvpn?: string; 
  public get routeReflectorClientEvpn() {
    return this.getStringAttribute('route_reflector_client_evpn');
  }
  public set routeReflectorClientEvpn(value: string) {
    this._routeReflectorClientEvpn = value;
  }
  public resetRouteReflectorClientEvpn() {
    this._routeReflectorClientEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeReflectorClientEvpnInput() {
    return this._routeReflectorClientEvpn;
  }

  // route_server_client - computed: true, optional: true, required: false
  private _routeServerClient?: string; 
  public get routeServerClient() {
    return this.getStringAttribute('route_server_client');
  }
  public set routeServerClient(value: string) {
    this._routeServerClient = value;
  }
  public resetRouteServerClient() {
    this._routeServerClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeServerClientInput() {
    return this._routeServerClient;
  }

  // route_server_client6 - computed: true, optional: true, required: false
  private _routeServerClient6?: string; 
  public get routeServerClient6() {
    return this.getStringAttribute('route_server_client6');
  }
  public set routeServerClient6(value: string) {
    this._routeServerClient6 = value;
  }
  public resetRouteServerClient6() {
    this._routeServerClient6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeServerClient6Input() {
    return this._routeServerClient6;
  }

  // send_community - computed: true, optional: true, required: false
  private _sendCommunity?: string; 
  public get sendCommunity() {
    return this.getStringAttribute('send_community');
  }
  public set sendCommunity(value: string) {
    this._sendCommunity = value;
  }
  public resetSendCommunity() {
    this._sendCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCommunityInput() {
    return this._sendCommunity;
  }

  // send_community6 - computed: true, optional: true, required: false
  private _sendCommunity6?: string; 
  public get sendCommunity6() {
    return this.getStringAttribute('send_community6');
  }
  public set sendCommunity6(value: string) {
    this._sendCommunity6 = value;
  }
  public resetSendCommunity6() {
    this._sendCommunity6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCommunity6Input() {
    return this._sendCommunity6;
  }

  // shutdown - computed: true, optional: true, required: false
  private _shutdown?: string; 
  public get shutdown() {
    return this.getStringAttribute('shutdown');
  }
  public set shutdown(value: string) {
    this._shutdown = value;
  }
  public resetShutdown() {
    this._shutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownInput() {
    return this._shutdown;
  }

  // soft_reconfiguration - computed: true, optional: true, required: false
  private _softReconfiguration?: string; 
  public get softReconfiguration() {
    return this.getStringAttribute('soft_reconfiguration');
  }
  public set softReconfiguration(value: string) {
    this._softReconfiguration = value;
  }
  public resetSoftReconfiguration() {
    this._softReconfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softReconfigurationInput() {
    return this._softReconfiguration;
  }

  // soft_reconfiguration6 - computed: true, optional: true, required: false
  private _softReconfiguration6?: string; 
  public get softReconfiguration6() {
    return this.getStringAttribute('soft_reconfiguration6');
  }
  public set softReconfiguration6(value: string) {
    this._softReconfiguration6 = value;
  }
  public resetSoftReconfiguration6() {
    this._softReconfiguration6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softReconfiguration6Input() {
    return this._softReconfiguration6;
  }

  // soft_reconfiguration_evpn - computed: true, optional: true, required: false
  private _softReconfigurationEvpn?: string; 
  public get softReconfigurationEvpn() {
    return this.getStringAttribute('soft_reconfiguration_evpn');
  }
  public set softReconfigurationEvpn(value: string) {
    this._softReconfigurationEvpn = value;
  }
  public resetSoftReconfigurationEvpn() {
    this._softReconfigurationEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softReconfigurationEvpnInput() {
    return this._softReconfigurationEvpn;
  }

  // strict_capability_match - computed: true, optional: true, required: false
  private _strictCapabilityMatch?: string; 
  public get strictCapabilityMatch() {
    return this.getStringAttribute('strict_capability_match');
  }
  public set strictCapabilityMatch(value: string) {
    this._strictCapabilityMatch = value;
  }
  public resetStrictCapabilityMatch() {
    this._strictCapabilityMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictCapabilityMatchInput() {
    return this._strictCapabilityMatch;
  }

  // unsuppress_map - computed: true, optional: true, required: false
  private _unsuppressMap?: string; 
  public get unsuppressMap() {
    return this.getStringAttribute('unsuppress_map');
  }
  public set unsuppressMap(value: string) {
    this._unsuppressMap = value;
  }
  public resetUnsuppressMap() {
    this._unsuppressMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsuppressMapInput() {
    return this._unsuppressMap;
  }

  // unsuppress_map6 - computed: true, optional: true, required: false
  private _unsuppressMap6?: string; 
  public get unsuppressMap6() {
    return this.getStringAttribute('unsuppress_map6');
  }
  public set unsuppressMap6(value: string) {
    this._unsuppressMap6 = value;
  }
  public resetUnsuppressMap6() {
    this._unsuppressMap6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsuppressMap6Input() {
    return this._unsuppressMap6;
  }

  // update_source - computed: true, optional: true, required: false
  private _updateSource?: string; 
  public get updateSource() {
    return this.getStringAttribute('update_source');
  }
  public set updateSource(value: string) {
    this._updateSource = value;
  }
  public resetUpdateSource() {
    this._updateSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateSourceInput() {
    return this._updateSource;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      activate: cdktf.stringToTerraform(this._activate),
      activate6: cdktf.stringToTerraform(this._activate6),
      activate_evpn: cdktf.stringToTerraform(this._activateEvpn),
      advertisement_interval: cdktf.numberToTerraform(this._advertisementInterval),
      allowas_in: cdktf.numberToTerraform(this._allowasIn),
      allowas_in6: cdktf.numberToTerraform(this._allowasIn6),
      allowas_in_enable: cdktf.stringToTerraform(this._allowasInEnable),
      allowas_in_enable6: cdktf.stringToTerraform(this._allowasInEnable6),
      allowas_in_enable_evpn: cdktf.stringToTerraform(this._allowasInEnableEvpn),
      as_override: cdktf.stringToTerraform(this._asOverride),
      as_override6: cdktf.stringToTerraform(this._asOverride6),
      attribute_unchanged: cdktf.stringToTerraform(this._attributeUnchanged),
      attribute_unchanged6: cdktf.stringToTerraform(this._attributeUnchanged6),
      attribute_unchanged_evpn: cdktf.stringToTerraform(this._attributeUnchangedEvpn),
      bfd: cdktf.stringToTerraform(this._bfd),
      bfd_session_mode: cdktf.stringToTerraform(this._bfdSessionMode),
      capability_default_originate: cdktf.stringToTerraform(this._capabilityDefaultOriginate),
      capability_default_originate6: cdktf.stringToTerraform(this._capabilityDefaultOriginate6),
      capability_dynamic: cdktf.stringToTerraform(this._capabilityDynamic),
      capability_extended_nexthop: cdktf.stringToTerraform(this._capabilityExtendedNexthop),
      capability_orf: cdktf.stringToTerraform(this._capabilityOrf),
      capability_orf6: cdktf.stringToTerraform(this._capabilityOrf6),
      connect_timer: cdktf.numberToTerraform(this._connectTimer),
      default_originate_routemap: cdktf.stringToTerraform(this._defaultOriginateRoutemap),
      default_originate_routemap6: cdktf.stringToTerraform(this._defaultOriginateRoutemap6),
      description: cdktf.stringToTerraform(this._description),
      distribute_list_in: cdktf.stringToTerraform(this._distributeListIn),
      distribute_list_in6: cdktf.stringToTerraform(this._distributeListIn6),
      distribute_list_out: cdktf.stringToTerraform(this._distributeListOut),
      distribute_list_out6: cdktf.stringToTerraform(this._distributeListOut6),
      dont_capability_negotiate: cdktf.stringToTerraform(this._dontCapabilityNegotiate),
      ebgp_enforce_multihop: cdktf.stringToTerraform(this._ebgpEnforceMultihop),
      ebgp_multihop_ttl: cdktf.numberToTerraform(this._ebgpMultihopTtl),
      ebgp_ttl_security_hops: cdktf.numberToTerraform(this._ebgpTtlSecurityHops),
      enforce_first_as: cdktf.stringToTerraform(this._enforceFirstAs),
      filter_list_in: cdktf.stringToTerraform(this._filterListIn),
      filter_list_in6: cdktf.stringToTerraform(this._filterListIn6),
      filter_list_out: cdktf.stringToTerraform(this._filterListOut),
      filter_list_out6: cdktf.stringToTerraform(this._filterListOut6),
      holdtime_timer: cdktf.numberToTerraform(this._holdtimeTimer),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      ip: cdktf.stringToTerraform(this._ip),
      keep_alive_timer: cdktf.numberToTerraform(this._keepAliveTimer),
      maximum_prefix: cdktf.numberToTerraform(this._maximumPrefix),
      maximum_prefix6: cdktf.numberToTerraform(this._maximumPrefix6),
      maximum_prefix_threshold: cdktf.numberToTerraform(this._maximumPrefixThreshold),
      maximum_prefix_threshold6: cdktf.numberToTerraform(this._maximumPrefixThreshold6),
      maximum_prefix_warning_only: cdktf.stringToTerraform(this._maximumPrefixWarningOnly),
      maximum_prefix_warning_only6: cdktf.stringToTerraform(this._maximumPrefixWarningOnly6),
      next_hop_self: cdktf.stringToTerraform(this._nextHopSelf),
      next_hop_self6: cdktf.stringToTerraform(this._nextHopSelf6),
      override_capability: cdktf.stringToTerraform(this._overrideCapability),
      passive: cdktf.stringToTerraform(this._passive),
      password: cdktf.stringToTerraform(this._password),
      prefix_list_in: cdktf.stringToTerraform(this._prefixListIn),
      prefix_list_in6: cdktf.stringToTerraform(this._prefixListIn6),
      prefix_list_out: cdktf.stringToTerraform(this._prefixListOut),
      prefix_list_out6: cdktf.stringToTerraform(this._prefixListOut6),
      remote_as: cdktf.numberToTerraform(this._remoteAs),
      remove_private_as: cdktf.stringToTerraform(this._removePrivateAs),
      remove_private_as6: cdktf.stringToTerraform(this._removePrivateAs6),
      route_map_in: cdktf.stringToTerraform(this._routeMapIn),
      route_map_in6: cdktf.stringToTerraform(this._routeMapIn6),
      route_map_in_evpn: cdktf.stringToTerraform(this._routeMapInEvpn),
      route_map_out: cdktf.stringToTerraform(this._routeMapOut),
      route_map_out6: cdktf.stringToTerraform(this._routeMapOut6),
      route_map_out_evpn: cdktf.stringToTerraform(this._routeMapOutEvpn),
      route_reflector_client: cdktf.stringToTerraform(this._routeReflectorClient),
      route_reflector_client6: cdktf.stringToTerraform(this._routeReflectorClient6),
      route_reflector_client_evpn: cdktf.stringToTerraform(this._routeReflectorClientEvpn),
      route_server_client: cdktf.stringToTerraform(this._routeServerClient),
      route_server_client6: cdktf.stringToTerraform(this._routeServerClient6),
      send_community: cdktf.stringToTerraform(this._sendCommunity),
      send_community6: cdktf.stringToTerraform(this._sendCommunity6),
      shutdown: cdktf.stringToTerraform(this._shutdown),
      soft_reconfiguration: cdktf.stringToTerraform(this._softReconfiguration),
      soft_reconfiguration6: cdktf.stringToTerraform(this._softReconfiguration6),
      soft_reconfiguration_evpn: cdktf.stringToTerraform(this._softReconfigurationEvpn),
      strict_capability_match: cdktf.stringToTerraform(this._strictCapabilityMatch),
      unsuppress_map: cdktf.stringToTerraform(this._unsuppressMap),
      unsuppress_map6: cdktf.stringToTerraform(this._unsuppressMap6),
      update_source: cdktf.stringToTerraform(this._updateSource),
      weight: cdktf.numberToTerraform(this._weight),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activate: {
        value: cdktf.stringToHclTerraform(this._activate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      activate6: {
        value: cdktf.stringToHclTerraform(this._activate6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      activate_evpn: {
        value: cdktf.stringToHclTerraform(this._activateEvpn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advertisement_interval: {
        value: cdktf.numberToHclTerraform(this._advertisementInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      allowas_in: {
        value: cdktf.numberToHclTerraform(this._allowasIn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      allowas_in6: {
        value: cdktf.numberToHclTerraform(this._allowasIn6),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      allowas_in_enable: {
        value: cdktf.stringToHclTerraform(this._allowasInEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowas_in_enable6: {
        value: cdktf.stringToHclTerraform(this._allowasInEnable6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowas_in_enable_evpn: {
        value: cdktf.stringToHclTerraform(this._allowasInEnableEvpn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      as_override: {
        value: cdktf.stringToHclTerraform(this._asOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      as_override6: {
        value: cdktf.stringToHclTerraform(this._asOverride6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute_unchanged: {
        value: cdktf.stringToHclTerraform(this._attributeUnchanged),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute_unchanged6: {
        value: cdktf.stringToHclTerraform(this._attributeUnchanged6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute_unchanged_evpn: {
        value: cdktf.stringToHclTerraform(this._attributeUnchangedEvpn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bfd: {
        value: cdktf.stringToHclTerraform(this._bfd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bfd_session_mode: {
        value: cdktf.stringToHclTerraform(this._bfdSessionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capability_default_originate: {
        value: cdktf.stringToHclTerraform(this._capabilityDefaultOriginate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capability_default_originate6: {
        value: cdktf.stringToHclTerraform(this._capabilityDefaultOriginate6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capability_dynamic: {
        value: cdktf.stringToHclTerraform(this._capabilityDynamic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capability_extended_nexthop: {
        value: cdktf.stringToHclTerraform(this._capabilityExtendedNexthop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capability_orf: {
        value: cdktf.stringToHclTerraform(this._capabilityOrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capability_orf6: {
        value: cdktf.stringToHclTerraform(this._capabilityOrf6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connect_timer: {
        value: cdktf.numberToHclTerraform(this._connectTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_originate_routemap: {
        value: cdktf.stringToHclTerraform(this._defaultOriginateRoutemap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_originate_routemap6: {
        value: cdktf.stringToHclTerraform(this._defaultOriginateRoutemap6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distribute_list_in: {
        value: cdktf.stringToHclTerraform(this._distributeListIn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distribute_list_in6: {
        value: cdktf.stringToHclTerraform(this._distributeListIn6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distribute_list_out: {
        value: cdktf.stringToHclTerraform(this._distributeListOut),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distribute_list_out6: {
        value: cdktf.stringToHclTerraform(this._distributeListOut6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dont_capability_negotiate: {
        value: cdktf.stringToHclTerraform(this._dontCapabilityNegotiate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ebgp_enforce_multihop: {
        value: cdktf.stringToHclTerraform(this._ebgpEnforceMultihop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ebgp_multihop_ttl: {
        value: cdktf.numberToHclTerraform(this._ebgpMultihopTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ebgp_ttl_security_hops: {
        value: cdktf.numberToHclTerraform(this._ebgpTtlSecurityHops),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enforce_first_as: {
        value: cdktf.stringToHclTerraform(this._enforceFirstAs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_list_in: {
        value: cdktf.stringToHclTerraform(this._filterListIn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_list_in6: {
        value: cdktf.stringToHclTerraform(this._filterListIn6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_list_out: {
        value: cdktf.stringToHclTerraform(this._filterListOut),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_list_out6: {
        value: cdktf.stringToHclTerraform(this._filterListOut6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      holdtime_timer: {
        value: cdktf.numberToHclTerraform(this._holdtimeTimer),
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
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keep_alive_timer: {
        value: cdktf.numberToHclTerraform(this._keepAliveTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_prefix: {
        value: cdktf.numberToHclTerraform(this._maximumPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_prefix6: {
        value: cdktf.numberToHclTerraform(this._maximumPrefix6),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_prefix_threshold: {
        value: cdktf.numberToHclTerraform(this._maximumPrefixThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_prefix_threshold6: {
        value: cdktf.numberToHclTerraform(this._maximumPrefixThreshold6),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_prefix_warning_only: {
        value: cdktf.stringToHclTerraform(this._maximumPrefixWarningOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_prefix_warning_only6: {
        value: cdktf.stringToHclTerraform(this._maximumPrefixWarningOnly6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next_hop_self: {
        value: cdktf.stringToHclTerraform(this._nextHopSelf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next_hop_self6: {
        value: cdktf.stringToHclTerraform(this._nextHopSelf6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_capability: {
        value: cdktf.stringToHclTerraform(this._overrideCapability),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passive: {
        value: cdktf.stringToHclTerraform(this._passive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_list_in: {
        value: cdktf.stringToHclTerraform(this._prefixListIn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_list_in6: {
        value: cdktf.stringToHclTerraform(this._prefixListIn6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_list_out: {
        value: cdktf.stringToHclTerraform(this._prefixListOut),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_list_out6: {
        value: cdktf.stringToHclTerraform(this._prefixListOut6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_as: {
        value: cdktf.numberToHclTerraform(this._remoteAs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remove_private_as: {
        value: cdktf.stringToHclTerraform(this._removePrivateAs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remove_private_as6: {
        value: cdktf.stringToHclTerraform(this._removePrivateAs6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_map_in: {
        value: cdktf.stringToHclTerraform(this._routeMapIn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_map_in6: {
        value: cdktf.stringToHclTerraform(this._routeMapIn6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_map_in_evpn: {
        value: cdktf.stringToHclTerraform(this._routeMapInEvpn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_map_out: {
        value: cdktf.stringToHclTerraform(this._routeMapOut),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_map_out6: {
        value: cdktf.stringToHclTerraform(this._routeMapOut6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_map_out_evpn: {
        value: cdktf.stringToHclTerraform(this._routeMapOutEvpn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_reflector_client: {
        value: cdktf.stringToHclTerraform(this._routeReflectorClient),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_reflector_client6: {
        value: cdktf.stringToHclTerraform(this._routeReflectorClient6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_reflector_client_evpn: {
        value: cdktf.stringToHclTerraform(this._routeReflectorClientEvpn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_server_client: {
        value: cdktf.stringToHclTerraform(this._routeServerClient),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_server_client6: {
        value: cdktf.stringToHclTerraform(this._routeServerClient6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_community: {
        value: cdktf.stringToHclTerraform(this._sendCommunity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_community6: {
        value: cdktf.stringToHclTerraform(this._sendCommunity6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shutdown: {
        value: cdktf.stringToHclTerraform(this._shutdown),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      soft_reconfiguration: {
        value: cdktf.stringToHclTerraform(this._softReconfiguration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      soft_reconfiguration6: {
        value: cdktf.stringToHclTerraform(this._softReconfiguration6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      soft_reconfiguration_evpn: {
        value: cdktf.stringToHclTerraform(this._softReconfigurationEvpn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strict_capability_match: {
        value: cdktf.stringToHclTerraform(this._strictCapabilityMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unsuppress_map: {
        value: cdktf.stringToHclTerraform(this._unsuppressMap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unsuppress_map6: {
        value: cdktf.stringToHclTerraform(this._unsuppressMap6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_source: {
        value: cdktf.stringToHclTerraform(this._updateSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
