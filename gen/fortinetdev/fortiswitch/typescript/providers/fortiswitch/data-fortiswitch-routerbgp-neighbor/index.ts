// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/routerbgp_neighbor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiswitchRouterbgpNeighborConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/routerbgp_neighbor#id DataFortiswitchRouterbgpNeighbor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/routerbgp_neighbor#ip DataFortiswitchRouterbgpNeighbor#ip}
  */
  readonly ip: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/routerbgp_neighbor fortiswitch_routerbgp_neighbor}
*/
export class DataFortiswitchRouterbgpNeighbor extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_routerbgp_neighbor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiswitchRouterbgpNeighbor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiswitchRouterbgpNeighbor to import
  * @param importFromId The id of the existing DataFortiswitchRouterbgpNeighbor that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/routerbgp_neighbor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiswitchRouterbgpNeighbor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_routerbgp_neighbor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/routerbgp_neighbor fortiswitch_routerbgp_neighbor} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiswitchRouterbgpNeighborConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortiswitchRouterbgpNeighborConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_routerbgp_neighbor',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._ip = config.ip;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activate - computed: true, optional: false, required: false
  public get activate() {
    return this.getStringAttribute('activate');
  }

  // activate6 - computed: true, optional: false, required: false
  public get activate6() {
    return this.getStringAttribute('activate6');
  }

  // activate_evpn - computed: true, optional: false, required: false
  public get activateEvpn() {
    return this.getStringAttribute('activate_evpn');
  }

  // advertisement_interval - computed: true, optional: false, required: false
  public get advertisementInterval() {
    return this.getNumberAttribute('advertisement_interval');
  }

  // allowas_in - computed: true, optional: false, required: false
  public get allowasIn() {
    return this.getNumberAttribute('allowas_in');
  }

  // allowas_in6 - computed: true, optional: false, required: false
  public get allowasIn6() {
    return this.getNumberAttribute('allowas_in6');
  }

  // allowas_in_enable - computed: true, optional: false, required: false
  public get allowasInEnable() {
    return this.getStringAttribute('allowas_in_enable');
  }

  // allowas_in_enable6 - computed: true, optional: false, required: false
  public get allowasInEnable6() {
    return this.getStringAttribute('allowas_in_enable6');
  }

  // allowas_in_enable_evpn - computed: true, optional: false, required: false
  public get allowasInEnableEvpn() {
    return this.getStringAttribute('allowas_in_enable_evpn');
  }

  // as_override - computed: true, optional: false, required: false
  public get asOverride() {
    return this.getStringAttribute('as_override');
  }

  // as_override6 - computed: true, optional: false, required: false
  public get asOverride6() {
    return this.getStringAttribute('as_override6');
  }

  // attribute_unchanged - computed: true, optional: false, required: false
  public get attributeUnchanged() {
    return this.getStringAttribute('attribute_unchanged');
  }

  // attribute_unchanged6 - computed: true, optional: false, required: false
  public get attributeUnchanged6() {
    return this.getStringAttribute('attribute_unchanged6');
  }

  // attribute_unchanged_evpn - computed: true, optional: false, required: false
  public get attributeUnchangedEvpn() {
    return this.getStringAttribute('attribute_unchanged_evpn');
  }

  // bfd - computed: true, optional: false, required: false
  public get bfd() {
    return this.getStringAttribute('bfd');
  }

  // bfd_session_mode - computed: true, optional: false, required: false
  public get bfdSessionMode() {
    return this.getStringAttribute('bfd_session_mode');
  }

  // capability_default_originate - computed: true, optional: false, required: false
  public get capabilityDefaultOriginate() {
    return this.getStringAttribute('capability_default_originate');
  }

  // capability_default_originate6 - computed: true, optional: false, required: false
  public get capabilityDefaultOriginate6() {
    return this.getStringAttribute('capability_default_originate6');
  }

  // capability_dynamic - computed: true, optional: false, required: false
  public get capabilityDynamic() {
    return this.getStringAttribute('capability_dynamic');
  }

  // capability_extended_nexthop - computed: true, optional: false, required: false
  public get capabilityExtendedNexthop() {
    return this.getStringAttribute('capability_extended_nexthop');
  }

  // capability_orf - computed: true, optional: false, required: false
  public get capabilityOrf() {
    return this.getStringAttribute('capability_orf');
  }

  // capability_orf6 - computed: true, optional: false, required: false
  public get capabilityOrf6() {
    return this.getStringAttribute('capability_orf6');
  }

  // connect_timer - computed: true, optional: false, required: false
  public get connectTimer() {
    return this.getNumberAttribute('connect_timer');
  }

  // default_originate_routemap - computed: true, optional: false, required: false
  public get defaultOriginateRoutemap() {
    return this.getStringAttribute('default_originate_routemap');
  }

  // default_originate_routemap6 - computed: true, optional: false, required: false
  public get defaultOriginateRoutemap6() {
    return this.getStringAttribute('default_originate_routemap6');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // distribute_list_in - computed: true, optional: false, required: false
  public get distributeListIn() {
    return this.getStringAttribute('distribute_list_in');
  }

  // distribute_list_in6 - computed: true, optional: false, required: false
  public get distributeListIn6() {
    return this.getStringAttribute('distribute_list_in6');
  }

  // distribute_list_out - computed: true, optional: false, required: false
  public get distributeListOut() {
    return this.getStringAttribute('distribute_list_out');
  }

  // distribute_list_out6 - computed: true, optional: false, required: false
  public get distributeListOut6() {
    return this.getStringAttribute('distribute_list_out6');
  }

  // dont_capability_negotiate - computed: true, optional: false, required: false
  public get dontCapabilityNegotiate() {
    return this.getStringAttribute('dont_capability_negotiate');
  }

  // ebgp_enforce_multihop - computed: true, optional: false, required: false
  public get ebgpEnforceMultihop() {
    return this.getStringAttribute('ebgp_enforce_multihop');
  }

  // ebgp_multihop_ttl - computed: true, optional: false, required: false
  public get ebgpMultihopTtl() {
    return this.getNumberAttribute('ebgp_multihop_ttl');
  }

  // ebgp_ttl_security_hops - computed: true, optional: false, required: false
  public get ebgpTtlSecurityHops() {
    return this.getNumberAttribute('ebgp_ttl_security_hops');
  }

  // enforce_first_as - computed: true, optional: false, required: false
  public get enforceFirstAs() {
    return this.getStringAttribute('enforce_first_as');
  }

  // filter_list_in - computed: true, optional: false, required: false
  public get filterListIn() {
    return this.getStringAttribute('filter_list_in');
  }

  // filter_list_in6 - computed: true, optional: false, required: false
  public get filterListIn6() {
    return this.getStringAttribute('filter_list_in6');
  }

  // filter_list_out - computed: true, optional: false, required: false
  public get filterListOut() {
    return this.getStringAttribute('filter_list_out');
  }

  // filter_list_out6 - computed: true, optional: false, required: false
  public get filterListOut6() {
    return this.getStringAttribute('filter_list_out6');
  }

  // holdtime_timer - computed: true, optional: false, required: false
  public get holdtimeTimer() {
    return this.getNumberAttribute('holdtime_timer');
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

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // keep_alive_timer - computed: true, optional: false, required: false
  public get keepAliveTimer() {
    return this.getNumberAttribute('keep_alive_timer');
  }

  // maximum_prefix - computed: true, optional: false, required: false
  public get maximumPrefix() {
    return this.getNumberAttribute('maximum_prefix');
  }

  // maximum_prefix6 - computed: true, optional: false, required: false
  public get maximumPrefix6() {
    return this.getNumberAttribute('maximum_prefix6');
  }

  // maximum_prefix_threshold - computed: true, optional: false, required: false
  public get maximumPrefixThreshold() {
    return this.getNumberAttribute('maximum_prefix_threshold');
  }

  // maximum_prefix_threshold6 - computed: true, optional: false, required: false
  public get maximumPrefixThreshold6() {
    return this.getNumberAttribute('maximum_prefix_threshold6');
  }

  // maximum_prefix_warning_only - computed: true, optional: false, required: false
  public get maximumPrefixWarningOnly() {
    return this.getStringAttribute('maximum_prefix_warning_only');
  }

  // maximum_prefix_warning_only6 - computed: true, optional: false, required: false
  public get maximumPrefixWarningOnly6() {
    return this.getStringAttribute('maximum_prefix_warning_only6');
  }

  // next_hop_self - computed: true, optional: false, required: false
  public get nextHopSelf() {
    return this.getStringAttribute('next_hop_self');
  }

  // next_hop_self6 - computed: true, optional: false, required: false
  public get nextHopSelf6() {
    return this.getStringAttribute('next_hop_self6');
  }

  // override_capability - computed: true, optional: false, required: false
  public get overrideCapability() {
    return this.getStringAttribute('override_capability');
  }

  // passive - computed: true, optional: false, required: false
  public get passive() {
    return this.getStringAttribute('passive');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // prefix_list_in - computed: true, optional: false, required: false
  public get prefixListIn() {
    return this.getStringAttribute('prefix_list_in');
  }

  // prefix_list_in6 - computed: true, optional: false, required: false
  public get prefixListIn6() {
    return this.getStringAttribute('prefix_list_in6');
  }

  // prefix_list_out - computed: true, optional: false, required: false
  public get prefixListOut() {
    return this.getStringAttribute('prefix_list_out');
  }

  // prefix_list_out6 - computed: true, optional: false, required: false
  public get prefixListOut6() {
    return this.getStringAttribute('prefix_list_out6');
  }

  // remote_as - computed: true, optional: false, required: false
  public get remoteAs() {
    return this.getNumberAttribute('remote_as');
  }

  // remove_private_as - computed: true, optional: false, required: false
  public get removePrivateAs() {
    return this.getStringAttribute('remove_private_as');
  }

  // remove_private_as6 - computed: true, optional: false, required: false
  public get removePrivateAs6() {
    return this.getStringAttribute('remove_private_as6');
  }

  // route_map_in - computed: true, optional: false, required: false
  public get routeMapIn() {
    return this.getStringAttribute('route_map_in');
  }

  // route_map_in6 - computed: true, optional: false, required: false
  public get routeMapIn6() {
    return this.getStringAttribute('route_map_in6');
  }

  // route_map_in_evpn - computed: true, optional: false, required: false
  public get routeMapInEvpn() {
    return this.getStringAttribute('route_map_in_evpn');
  }

  // route_map_out - computed: true, optional: false, required: false
  public get routeMapOut() {
    return this.getStringAttribute('route_map_out');
  }

  // route_map_out6 - computed: true, optional: false, required: false
  public get routeMapOut6() {
    return this.getStringAttribute('route_map_out6');
  }

  // route_map_out_evpn - computed: true, optional: false, required: false
  public get routeMapOutEvpn() {
    return this.getStringAttribute('route_map_out_evpn');
  }

  // route_reflector_client - computed: true, optional: false, required: false
  public get routeReflectorClient() {
    return this.getStringAttribute('route_reflector_client');
  }

  // route_reflector_client6 - computed: true, optional: false, required: false
  public get routeReflectorClient6() {
    return this.getStringAttribute('route_reflector_client6');
  }

  // route_reflector_client_evpn - computed: true, optional: false, required: false
  public get routeReflectorClientEvpn() {
    return this.getStringAttribute('route_reflector_client_evpn');
  }

  // route_server_client - computed: true, optional: false, required: false
  public get routeServerClient() {
    return this.getStringAttribute('route_server_client');
  }

  // route_server_client6 - computed: true, optional: false, required: false
  public get routeServerClient6() {
    return this.getStringAttribute('route_server_client6');
  }

  // send_community - computed: true, optional: false, required: false
  public get sendCommunity() {
    return this.getStringAttribute('send_community');
  }

  // send_community6 - computed: true, optional: false, required: false
  public get sendCommunity6() {
    return this.getStringAttribute('send_community6');
  }

  // shutdown - computed: true, optional: false, required: false
  public get shutdown() {
    return this.getStringAttribute('shutdown');
  }

  // soft_reconfiguration - computed: true, optional: false, required: false
  public get softReconfiguration() {
    return this.getStringAttribute('soft_reconfiguration');
  }

  // soft_reconfiguration6 - computed: true, optional: false, required: false
  public get softReconfiguration6() {
    return this.getStringAttribute('soft_reconfiguration6');
  }

  // soft_reconfiguration_evpn - computed: true, optional: false, required: false
  public get softReconfigurationEvpn() {
    return this.getStringAttribute('soft_reconfiguration_evpn');
  }

  // strict_capability_match - computed: true, optional: false, required: false
  public get strictCapabilityMatch() {
    return this.getStringAttribute('strict_capability_match');
  }

  // unsuppress_map - computed: true, optional: false, required: false
  public get unsuppressMap() {
    return this.getStringAttribute('unsuppress_map');
  }

  // unsuppress_map6 - computed: true, optional: false, required: false
  public get unsuppressMap6() {
    return this.getStringAttribute('unsuppress_map6');
  }

  // update_source - computed: true, optional: false, required: false
  public get updateSource() {
    return this.getStringAttribute('update_source');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
