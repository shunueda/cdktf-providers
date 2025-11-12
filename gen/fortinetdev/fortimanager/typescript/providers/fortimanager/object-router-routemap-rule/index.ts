// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectRouterRoutemapRuleAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#action ObjectRouterRoutemapRuleA#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#adom ObjectRouterRoutemapRuleA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#fosid ObjectRouterRoutemapRuleA#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#id ObjectRouterRoutemapRuleA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#match_as_path ObjectRouterRoutemapRuleA#match_as_path}
  */
  readonly matchAsPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#match_community ObjectRouterRoutemapRuleA#match_community}
  */
  readonly matchCommunity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#match_community_exact ObjectRouterRoutemapRuleA#match_community_exact}
  */
  readonly matchCommunityExact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#match_extcommunity ObjectRouterRoutemapRuleA#match_extcommunity}
  */
  readonly matchExtcommunity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#match_extcommunity_exact ObjectRouterRoutemapRuleA#match_extcommunity_exact}
  */
  readonly matchExtcommunityExact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#match_flags ObjectRouterRoutemapRuleA#match_flags}
  */
  readonly matchFlags?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#match_interface ObjectRouterRoutemapRuleA#match_interface}
  */
  readonly matchInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#match_ip6_address ObjectRouterRoutemapRuleA#match_ip6_address}
  */
  readonly matchIp6Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#match_ip6_nexthop ObjectRouterRoutemapRuleA#match_ip6_nexthop}
  */
  readonly matchIp6Nexthop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#match_ip_address ObjectRouterRoutemapRuleA#match_ip_address}
  */
  readonly matchIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#match_ip_nexthop ObjectRouterRoutemapRuleA#match_ip_nexthop}
  */
  readonly matchIpNexthop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#match_metric ObjectRouterRoutemapRuleA#match_metric}
  */
  readonly matchMetric?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#match_origin ObjectRouterRoutemapRuleA#match_origin}
  */
  readonly matchOrigin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#match_route_type ObjectRouterRoutemapRuleA#match_route_type}
  */
  readonly matchRouteType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#match_tag ObjectRouterRoutemapRuleA#match_tag}
  */
  readonly matchTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#match_vrf ObjectRouterRoutemapRuleA#match_vrf}
  */
  readonly matchVrf?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#route_map ObjectRouterRoutemapRuleA#route_map}
  */
  readonly routeMap: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#scopetype ObjectRouterRoutemapRuleA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#set_aggregator_as ObjectRouterRoutemapRuleA#set_aggregator_as}
  */
  readonly setAggregatorAs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#set_aggregator_ip ObjectRouterRoutemapRuleA#set_aggregator_ip}
  */
  readonly setAggregatorIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#set_aspath ObjectRouterRoutemapRuleA#set_aspath}
  */
  readonly setAspath?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#set_aspath_action ObjectRouterRoutemapRuleA#set_aspath_action}
  */
  readonly setAspathAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#set_atomic_aggregate ObjectRouterRoutemapRuleA#set_atomic_aggregate}
  */
  readonly setAtomicAggregate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#set_community ObjectRouterRoutemapRuleA#set_community}
  */
  readonly setCommunity?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#set_community_additive ObjectRouterRoutemapRuleA#set_community_additive}
  */
  readonly setCommunityAdditive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#set_community_delete ObjectRouterRoutemapRuleA#set_community_delete}
  */
  readonly setCommunityDelete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#set_dampening_max_suppress ObjectRouterRoutemapRuleA#set_dampening_max_suppress}
  */
  readonly setDampeningMaxSuppress?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#set_dampening_reachability_half_life ObjectRouterRoutemapRuleA#set_dampening_reachability_half_life}
  */
  readonly setDampeningReachabilityHalfLife?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#set_dampening_reuse ObjectRouterRoutemapRuleA#set_dampening_reuse}
  */
  readonly setDampeningReuse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#set_dampening_suppress ObjectRouterRoutemapRuleA#set_dampening_suppress}
  */
  readonly setDampeningSuppress?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#set_dampening_unreachability_half_life ObjectRouterRoutemapRuleA#set_dampening_unreachability_half_life}
  */
  readonly setDampeningUnreachabilityHalfLife?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#set_extcommunity_rt ObjectRouterRoutemapRuleA#set_extcommunity_rt}
  */
  readonly setExtcommunityRt?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#set_extcommunity_soo ObjectRouterRoutemapRuleA#set_extcommunity_soo}
  */
  readonly setExtcommunitySoo?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#set_flags ObjectRouterRoutemapRuleA#set_flags}
  */
  readonly setFlags?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#set_ip6_nexthop ObjectRouterRoutemapRuleA#set_ip6_nexthop}
  */
  readonly setIp6Nexthop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#set_ip6_nexthop_local ObjectRouterRoutemapRuleA#set_ip6_nexthop_local}
  */
  readonly setIp6NexthopLocal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#set_ip_nexthop ObjectRouterRoutemapRuleA#set_ip_nexthop}
  */
  readonly setIpNexthop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#set_ip_prefsrc ObjectRouterRoutemapRuleA#set_ip_prefsrc}
  */
  readonly setIpPrefsrc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#set_local_preference ObjectRouterRoutemapRuleA#set_local_preference}
  */
  readonly setLocalPreference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#set_metric ObjectRouterRoutemapRuleA#set_metric}
  */
  readonly setMetric?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#set_metric_type ObjectRouterRoutemapRuleA#set_metric_type}
  */
  readonly setMetricType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#set_origin ObjectRouterRoutemapRuleA#set_origin}
  */
  readonly setOrigin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#set_originator_id ObjectRouterRoutemapRuleA#set_originator_id}
  */
  readonly setOriginatorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#set_priority ObjectRouterRoutemapRuleA#set_priority}
  */
  readonly setPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#set_route_tag ObjectRouterRoutemapRuleA#set_route_tag}
  */
  readonly setRouteTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#set_tag ObjectRouterRoutemapRuleA#set_tag}
  */
  readonly setTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#set_vpnv4_nexthop ObjectRouterRoutemapRuleA#set_vpnv4_nexthop}
  */
  readonly setVpnv4Nexthop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#set_vpnv6_nexthop ObjectRouterRoutemapRuleA#set_vpnv6_nexthop}
  */
  readonly setVpnv6Nexthop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#set_vpnv6_nexthop_local ObjectRouterRoutemapRuleA#set_vpnv6_nexthop_local}
  */
  readonly setVpnv6NexthopLocal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#set_weight ObjectRouterRoutemapRuleA#set_weight}
  */
  readonly setWeight?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule fortimanager_object_router_routemap_rule}
*/
export class ObjectRouterRoutemapRuleA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_router_routemap_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectRouterRoutemapRuleA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectRouterRoutemapRuleA to import
  * @param importFromId The id of the existing ObjectRouterRoutemapRuleA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectRouterRoutemapRuleA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_router_routemap_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_router_routemap_rule fortimanager_object_router_routemap_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectRouterRoutemapRuleAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectRouterRoutemapRuleAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_router_routemap_rule',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._adom = config.adom;
    this._fosid = config.fosid;
    this._id = config.id;
    this._matchAsPath = config.matchAsPath;
    this._matchCommunity = config.matchCommunity;
    this._matchCommunityExact = config.matchCommunityExact;
    this._matchExtcommunity = config.matchExtcommunity;
    this._matchExtcommunityExact = config.matchExtcommunityExact;
    this._matchFlags = config.matchFlags;
    this._matchInterface = config.matchInterface;
    this._matchIp6Address = config.matchIp6Address;
    this._matchIp6Nexthop = config.matchIp6Nexthop;
    this._matchIpAddress = config.matchIpAddress;
    this._matchIpNexthop = config.matchIpNexthop;
    this._matchMetric = config.matchMetric;
    this._matchOrigin = config.matchOrigin;
    this._matchRouteType = config.matchRouteType;
    this._matchTag = config.matchTag;
    this._matchVrf = config.matchVrf;
    this._routeMap = config.routeMap;
    this._scopetype = config.scopetype;
    this._setAggregatorAs = config.setAggregatorAs;
    this._setAggregatorIp = config.setAggregatorIp;
    this._setAspath = config.setAspath;
    this._setAspathAction = config.setAspathAction;
    this._setAtomicAggregate = config.setAtomicAggregate;
    this._setCommunity = config.setCommunity;
    this._setCommunityAdditive = config.setCommunityAdditive;
    this._setCommunityDelete = config.setCommunityDelete;
    this._setDampeningMaxSuppress = config.setDampeningMaxSuppress;
    this._setDampeningReachabilityHalfLife = config.setDampeningReachabilityHalfLife;
    this._setDampeningReuse = config.setDampeningReuse;
    this._setDampeningSuppress = config.setDampeningSuppress;
    this._setDampeningUnreachabilityHalfLife = config.setDampeningUnreachabilityHalfLife;
    this._setExtcommunityRt = config.setExtcommunityRt;
    this._setExtcommunitySoo = config.setExtcommunitySoo;
    this._setFlags = config.setFlags;
    this._setIp6Nexthop = config.setIp6Nexthop;
    this._setIp6NexthopLocal = config.setIp6NexthopLocal;
    this._setIpNexthop = config.setIpNexthop;
    this._setIpPrefsrc = config.setIpPrefsrc;
    this._setLocalPreference = config.setLocalPreference;
    this._setMetric = config.setMetric;
    this._setMetricType = config.setMetricType;
    this._setOrigin = config.setOrigin;
    this._setOriginatorId = config.setOriginatorId;
    this._setPriority = config.setPriority;
    this._setRouteTag = config.setRouteTag;
    this._setTag = config.setTag;
    this._setVpnv4Nexthop = config.setVpnv4Nexthop;
    this._setVpnv6Nexthop = config.setVpnv6Nexthop;
    this._setVpnv6NexthopLocal = config.setVpnv6NexthopLocal;
    this._setWeight = config.setWeight;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // match_as_path - computed: false, optional: true, required: false
  private _matchAsPath?: string; 
  public get matchAsPath() {
    return this.getStringAttribute('match_as_path');
  }
  public set matchAsPath(value: string) {
    this._matchAsPath = value;
  }
  public resetMatchAsPath() {
    this._matchAsPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAsPathInput() {
    return this._matchAsPath;
  }

  // match_community - computed: false, optional: true, required: false
  private _matchCommunity?: string; 
  public get matchCommunity() {
    return this.getStringAttribute('match_community');
  }
  public set matchCommunity(value: string) {
    this._matchCommunity = value;
  }
  public resetMatchCommunity() {
    this._matchCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCommunityInput() {
    return this._matchCommunity;
  }

  // match_community_exact - computed: false, optional: true, required: false
  private _matchCommunityExact?: string; 
  public get matchCommunityExact() {
    return this.getStringAttribute('match_community_exact');
  }
  public set matchCommunityExact(value: string) {
    this._matchCommunityExact = value;
  }
  public resetMatchCommunityExact() {
    this._matchCommunityExact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCommunityExactInput() {
    return this._matchCommunityExact;
  }

  // match_extcommunity - computed: false, optional: true, required: false
  private _matchExtcommunity?: string; 
  public get matchExtcommunity() {
    return this.getStringAttribute('match_extcommunity');
  }
  public set matchExtcommunity(value: string) {
    this._matchExtcommunity = value;
  }
  public resetMatchExtcommunity() {
    this._matchExtcommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExtcommunityInput() {
    return this._matchExtcommunity;
  }

  // match_extcommunity_exact - computed: true, optional: true, required: false
  private _matchExtcommunityExact?: string; 
  public get matchExtcommunityExact() {
    return this.getStringAttribute('match_extcommunity_exact');
  }
  public set matchExtcommunityExact(value: string) {
    this._matchExtcommunityExact = value;
  }
  public resetMatchExtcommunityExact() {
    this._matchExtcommunityExact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExtcommunityExactInput() {
    return this._matchExtcommunityExact;
  }

  // match_flags - computed: false, optional: true, required: false
  private _matchFlags?: number; 
  public get matchFlags() {
    return this.getNumberAttribute('match_flags');
  }
  public set matchFlags(value: number) {
    this._matchFlags = value;
  }
  public resetMatchFlags() {
    this._matchFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFlagsInput() {
    return this._matchFlags;
  }

  // match_interface - computed: false, optional: true, required: false
  private _matchInterface?: string; 
  public get matchInterface() {
    return this.getStringAttribute('match_interface');
  }
  public set matchInterface(value: string) {
    this._matchInterface = value;
  }
  public resetMatchInterface() {
    this._matchInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInterfaceInput() {
    return this._matchInterface;
  }

  // match_ip6_address - computed: false, optional: true, required: false
  private _matchIp6Address?: string; 
  public get matchIp6Address() {
    return this.getStringAttribute('match_ip6_address');
  }
  public set matchIp6Address(value: string) {
    this._matchIp6Address = value;
  }
  public resetMatchIp6Address() {
    this._matchIp6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchIp6AddressInput() {
    return this._matchIp6Address;
  }

  // match_ip6_nexthop - computed: false, optional: true, required: false
  private _matchIp6Nexthop?: string; 
  public get matchIp6Nexthop() {
    return this.getStringAttribute('match_ip6_nexthop');
  }
  public set matchIp6Nexthop(value: string) {
    this._matchIp6Nexthop = value;
  }
  public resetMatchIp6Nexthop() {
    this._matchIp6Nexthop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchIp6NexthopInput() {
    return this._matchIp6Nexthop;
  }

  // match_ip_address - computed: false, optional: true, required: false
  private _matchIpAddress?: string; 
  public get matchIpAddress() {
    return this.getStringAttribute('match_ip_address');
  }
  public set matchIpAddress(value: string) {
    this._matchIpAddress = value;
  }
  public resetMatchIpAddress() {
    this._matchIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchIpAddressInput() {
    return this._matchIpAddress;
  }

  // match_ip_nexthop - computed: false, optional: true, required: false
  private _matchIpNexthop?: string; 
  public get matchIpNexthop() {
    return this.getStringAttribute('match_ip_nexthop');
  }
  public set matchIpNexthop(value: string) {
    this._matchIpNexthop = value;
  }
  public resetMatchIpNexthop() {
    this._matchIpNexthop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchIpNexthopInput() {
    return this._matchIpNexthop;
  }

  // match_metric - computed: false, optional: true, required: false
  private _matchMetric?: string; 
  public get matchMetric() {
    return this.getStringAttribute('match_metric');
  }
  public set matchMetric(value: string) {
    this._matchMetric = value;
  }
  public resetMatchMetric() {
    this._matchMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchMetricInput() {
    return this._matchMetric;
  }

  // match_origin - computed: true, optional: true, required: false
  private _matchOrigin?: string; 
  public get matchOrigin() {
    return this.getStringAttribute('match_origin');
  }
  public set matchOrigin(value: string) {
    this._matchOrigin = value;
  }
  public resetMatchOrigin() {
    this._matchOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOriginInput() {
    return this._matchOrigin;
  }

  // match_route_type - computed: true, optional: true, required: false
  private _matchRouteType?: string; 
  public get matchRouteType() {
    return this.getStringAttribute('match_route_type');
  }
  public set matchRouteType(value: string) {
    this._matchRouteType = value;
  }
  public resetMatchRouteType() {
    this._matchRouteType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRouteTypeInput() {
    return this._matchRouteType;
  }

  // match_tag - computed: false, optional: true, required: false
  private _matchTag?: string; 
  public get matchTag() {
    return this.getStringAttribute('match_tag');
  }
  public set matchTag(value: string) {
    this._matchTag = value;
  }
  public resetMatchTag() {
    this._matchTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTagInput() {
    return this._matchTag;
  }

  // match_vrf - computed: false, optional: true, required: false
  private _matchVrf?: number; 
  public get matchVrf() {
    return this.getNumberAttribute('match_vrf');
  }
  public set matchVrf(value: number) {
    this._matchVrf = value;
  }
  public resetMatchVrf() {
    this._matchVrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchVrfInput() {
    return this._matchVrf;
  }

  // route_map - computed: false, optional: false, required: true
  private _routeMap?: string; 
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
  public set routeMap(value: string) {
    this._routeMap = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // set_aggregator_as - computed: false, optional: true, required: false
  private _setAggregatorAs?: number; 
  public get setAggregatorAs() {
    return this.getNumberAttribute('set_aggregator_as');
  }
  public set setAggregatorAs(value: number) {
    this._setAggregatorAs = value;
  }
  public resetSetAggregatorAs() {
    this._setAggregatorAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setAggregatorAsInput() {
    return this._setAggregatorAs;
  }

  // set_aggregator_ip - computed: true, optional: true, required: false
  private _setAggregatorIp?: string; 
  public get setAggregatorIp() {
    return this.getStringAttribute('set_aggregator_ip');
  }
  public set setAggregatorIp(value: string) {
    this._setAggregatorIp = value;
  }
  public resetSetAggregatorIp() {
    this._setAggregatorIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setAggregatorIpInput() {
    return this._setAggregatorIp;
  }

  // set_aspath - computed: true, optional: true, required: false
  private _setAspath?: string[]; 
  public get setAspath() {
    return cdktf.Fn.tolist(this.getListAttribute('set_aspath'));
  }
  public set setAspath(value: string[]) {
    this._setAspath = value;
  }
  public resetSetAspath() {
    this._setAspath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setAspathInput() {
    return this._setAspath;
  }

  // set_aspath_action - computed: true, optional: true, required: false
  private _setAspathAction?: string; 
  public get setAspathAction() {
    return this.getStringAttribute('set_aspath_action');
  }
  public set setAspathAction(value: string) {
    this._setAspathAction = value;
  }
  public resetSetAspathAction() {
    this._setAspathAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setAspathActionInput() {
    return this._setAspathAction;
  }

  // set_atomic_aggregate - computed: true, optional: true, required: false
  private _setAtomicAggregate?: string; 
  public get setAtomicAggregate() {
    return this.getStringAttribute('set_atomic_aggregate');
  }
  public set setAtomicAggregate(value: string) {
    this._setAtomicAggregate = value;
  }
  public resetSetAtomicAggregate() {
    this._setAtomicAggregate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setAtomicAggregateInput() {
    return this._setAtomicAggregate;
  }

  // set_community - computed: true, optional: true, required: false
  private _setCommunity?: string[]; 
  public get setCommunity() {
    return cdktf.Fn.tolist(this.getListAttribute('set_community'));
  }
  public set setCommunity(value: string[]) {
    this._setCommunity = value;
  }
  public resetSetCommunity() {
    this._setCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCommunityInput() {
    return this._setCommunity;
  }

  // set_community_additive - computed: false, optional: true, required: false
  private _setCommunityAdditive?: string; 
  public get setCommunityAdditive() {
    return this.getStringAttribute('set_community_additive');
  }
  public set setCommunityAdditive(value: string) {
    this._setCommunityAdditive = value;
  }
  public resetSetCommunityAdditive() {
    this._setCommunityAdditive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCommunityAdditiveInput() {
    return this._setCommunityAdditive;
  }

  // set_community_delete - computed: false, optional: true, required: false
  private _setCommunityDelete?: string; 
  public get setCommunityDelete() {
    return this.getStringAttribute('set_community_delete');
  }
  public set setCommunityDelete(value: string) {
    this._setCommunityDelete = value;
  }
  public resetSetCommunityDelete() {
    this._setCommunityDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCommunityDeleteInput() {
    return this._setCommunityDelete;
  }

  // set_dampening_max_suppress - computed: false, optional: true, required: false
  private _setDampeningMaxSuppress?: number; 
  public get setDampeningMaxSuppress() {
    return this.getNumberAttribute('set_dampening_max_suppress');
  }
  public set setDampeningMaxSuppress(value: number) {
    this._setDampeningMaxSuppress = value;
  }
  public resetSetDampeningMaxSuppress() {
    this._setDampeningMaxSuppress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setDampeningMaxSuppressInput() {
    return this._setDampeningMaxSuppress;
  }

  // set_dampening_reachability_half_life - computed: false, optional: true, required: false
  private _setDampeningReachabilityHalfLife?: number; 
  public get setDampeningReachabilityHalfLife() {
    return this.getNumberAttribute('set_dampening_reachability_half_life');
  }
  public set setDampeningReachabilityHalfLife(value: number) {
    this._setDampeningReachabilityHalfLife = value;
  }
  public resetSetDampeningReachabilityHalfLife() {
    this._setDampeningReachabilityHalfLife = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setDampeningReachabilityHalfLifeInput() {
    return this._setDampeningReachabilityHalfLife;
  }

  // set_dampening_reuse - computed: false, optional: true, required: false
  private _setDampeningReuse?: number; 
  public get setDampeningReuse() {
    return this.getNumberAttribute('set_dampening_reuse');
  }
  public set setDampeningReuse(value: number) {
    this._setDampeningReuse = value;
  }
  public resetSetDampeningReuse() {
    this._setDampeningReuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setDampeningReuseInput() {
    return this._setDampeningReuse;
  }

  // set_dampening_suppress - computed: false, optional: true, required: false
  private _setDampeningSuppress?: number; 
  public get setDampeningSuppress() {
    return this.getNumberAttribute('set_dampening_suppress');
  }
  public set setDampeningSuppress(value: number) {
    this._setDampeningSuppress = value;
  }
  public resetSetDampeningSuppress() {
    this._setDampeningSuppress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setDampeningSuppressInput() {
    return this._setDampeningSuppress;
  }

  // set_dampening_unreachability_half_life - computed: false, optional: true, required: false
  private _setDampeningUnreachabilityHalfLife?: number; 
  public get setDampeningUnreachabilityHalfLife() {
    return this.getNumberAttribute('set_dampening_unreachability_half_life');
  }
  public set setDampeningUnreachabilityHalfLife(value: number) {
    this._setDampeningUnreachabilityHalfLife = value;
  }
  public resetSetDampeningUnreachabilityHalfLife() {
    this._setDampeningUnreachabilityHalfLife = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setDampeningUnreachabilityHalfLifeInput() {
    return this._setDampeningUnreachabilityHalfLife;
  }

  // set_extcommunity_rt - computed: true, optional: true, required: false
  private _setExtcommunityRt?: string[]; 
  public get setExtcommunityRt() {
    return cdktf.Fn.tolist(this.getListAttribute('set_extcommunity_rt'));
  }
  public set setExtcommunityRt(value: string[]) {
    this._setExtcommunityRt = value;
  }
  public resetSetExtcommunityRt() {
    this._setExtcommunityRt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setExtcommunityRtInput() {
    return this._setExtcommunityRt;
  }

  // set_extcommunity_soo - computed: true, optional: true, required: false
  private _setExtcommunitySoo?: string[]; 
  public get setExtcommunitySoo() {
    return cdktf.Fn.tolist(this.getListAttribute('set_extcommunity_soo'));
  }
  public set setExtcommunitySoo(value: string[]) {
    this._setExtcommunitySoo = value;
  }
  public resetSetExtcommunitySoo() {
    this._setExtcommunitySoo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setExtcommunitySooInput() {
    return this._setExtcommunitySoo;
  }

  // set_flags - computed: false, optional: true, required: false
  private _setFlags?: number; 
  public get setFlags() {
    return this.getNumberAttribute('set_flags');
  }
  public set setFlags(value: number) {
    this._setFlags = value;
  }
  public resetSetFlags() {
    this._setFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setFlagsInput() {
    return this._setFlags;
  }

  // set_ip6_nexthop - computed: true, optional: true, required: false
  private _setIp6Nexthop?: string; 
  public get setIp6Nexthop() {
    return this.getStringAttribute('set_ip6_nexthop');
  }
  public set setIp6Nexthop(value: string) {
    this._setIp6Nexthop = value;
  }
  public resetSetIp6Nexthop() {
    this._setIp6Nexthop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setIp6NexthopInput() {
    return this._setIp6Nexthop;
  }

  // set_ip6_nexthop_local - computed: true, optional: true, required: false
  private _setIp6NexthopLocal?: string; 
  public get setIp6NexthopLocal() {
    return this.getStringAttribute('set_ip6_nexthop_local');
  }
  public set setIp6NexthopLocal(value: string) {
    this._setIp6NexthopLocal = value;
  }
  public resetSetIp6NexthopLocal() {
    this._setIp6NexthopLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setIp6NexthopLocalInput() {
    return this._setIp6NexthopLocal;
  }

  // set_ip_nexthop - computed: true, optional: true, required: false
  private _setIpNexthop?: string; 
  public get setIpNexthop() {
    return this.getStringAttribute('set_ip_nexthop');
  }
  public set setIpNexthop(value: string) {
    this._setIpNexthop = value;
  }
  public resetSetIpNexthop() {
    this._setIpNexthop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setIpNexthopInput() {
    return this._setIpNexthop;
  }

  // set_ip_prefsrc - computed: false, optional: true, required: false
  private _setIpPrefsrc?: string; 
  public get setIpPrefsrc() {
    return this.getStringAttribute('set_ip_prefsrc');
  }
  public set setIpPrefsrc(value: string) {
    this._setIpPrefsrc = value;
  }
  public resetSetIpPrefsrc() {
    this._setIpPrefsrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setIpPrefsrcInput() {
    return this._setIpPrefsrc;
  }

  // set_local_preference - computed: false, optional: true, required: false
  private _setLocalPreference?: string; 
  public get setLocalPreference() {
    return this.getStringAttribute('set_local_preference');
  }
  public set setLocalPreference(value: string) {
    this._setLocalPreference = value;
  }
  public resetSetLocalPreference() {
    this._setLocalPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setLocalPreferenceInput() {
    return this._setLocalPreference;
  }

  // set_metric - computed: false, optional: true, required: false
  private _setMetric?: string; 
  public get setMetric() {
    return this.getStringAttribute('set_metric');
  }
  public set setMetric(value: string) {
    this._setMetric = value;
  }
  public resetSetMetric() {
    this._setMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setMetricInput() {
    return this._setMetric;
  }

  // set_metric_type - computed: true, optional: true, required: false
  private _setMetricType?: string; 
  public get setMetricType() {
    return this.getStringAttribute('set_metric_type');
  }
  public set setMetricType(value: string) {
    this._setMetricType = value;
  }
  public resetSetMetricType() {
    this._setMetricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setMetricTypeInput() {
    return this._setMetricType;
  }

  // set_origin - computed: true, optional: true, required: false
  private _setOrigin?: string; 
  public get setOrigin() {
    return this.getStringAttribute('set_origin');
  }
  public set setOrigin(value: string) {
    this._setOrigin = value;
  }
  public resetSetOrigin() {
    this._setOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setOriginInput() {
    return this._setOrigin;
  }

  // set_originator_id - computed: true, optional: true, required: false
  private _setOriginatorId?: string; 
  public get setOriginatorId() {
    return this.getStringAttribute('set_originator_id');
  }
  public set setOriginatorId(value: string) {
    this._setOriginatorId = value;
  }
  public resetSetOriginatorId() {
    this._setOriginatorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setOriginatorIdInput() {
    return this._setOriginatorId;
  }

  // set_priority - computed: false, optional: true, required: false
  private _setPriority?: number; 
  public get setPriority() {
    return this.getNumberAttribute('set_priority');
  }
  public set setPriority(value: number) {
    this._setPriority = value;
  }
  public resetSetPriority() {
    this._setPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setPriorityInput() {
    return this._setPriority;
  }

  // set_route_tag - computed: false, optional: true, required: false
  private _setRouteTag?: string; 
  public get setRouteTag() {
    return this.getStringAttribute('set_route_tag');
  }
  public set setRouteTag(value: string) {
    this._setRouteTag = value;
  }
  public resetSetRouteTag() {
    this._setRouteTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setRouteTagInput() {
    return this._setRouteTag;
  }

  // set_tag - computed: false, optional: true, required: false
  private _setTag?: string; 
  public get setTag() {
    return this.getStringAttribute('set_tag');
  }
  public set setTag(value: string) {
    this._setTag = value;
  }
  public resetSetTag() {
    this._setTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setTagInput() {
    return this._setTag;
  }

  // set_vpnv4_nexthop - computed: false, optional: true, required: false
  private _setVpnv4Nexthop?: string; 
  public get setVpnv4Nexthop() {
    return this.getStringAttribute('set_vpnv4_nexthop');
  }
  public set setVpnv4Nexthop(value: string) {
    this._setVpnv4Nexthop = value;
  }
  public resetSetVpnv4Nexthop() {
    this._setVpnv4Nexthop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setVpnv4NexthopInput() {
    return this._setVpnv4Nexthop;
  }

  // set_vpnv6_nexthop - computed: false, optional: true, required: false
  private _setVpnv6Nexthop?: string; 
  public get setVpnv6Nexthop() {
    return this.getStringAttribute('set_vpnv6_nexthop');
  }
  public set setVpnv6Nexthop(value: string) {
    this._setVpnv6Nexthop = value;
  }
  public resetSetVpnv6Nexthop() {
    this._setVpnv6Nexthop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setVpnv6NexthopInput() {
    return this._setVpnv6Nexthop;
  }

  // set_vpnv6_nexthop_local - computed: false, optional: true, required: false
  private _setVpnv6NexthopLocal?: string; 
  public get setVpnv6NexthopLocal() {
    return this.getStringAttribute('set_vpnv6_nexthop_local');
  }
  public set setVpnv6NexthopLocal(value: string) {
    this._setVpnv6NexthopLocal = value;
  }
  public resetSetVpnv6NexthopLocal() {
    this._setVpnv6NexthopLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setVpnv6NexthopLocalInput() {
    return this._setVpnv6NexthopLocal;
  }

  // set_weight - computed: false, optional: true, required: false
  private _setWeight?: string; 
  public get setWeight() {
    return this.getStringAttribute('set_weight');
  }
  public set setWeight(value: string) {
    this._setWeight = value;
  }
  public resetSetWeight() {
    this._setWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setWeightInput() {
    return this._setWeight;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      adom: cdktf.stringToTerraform(this._adom),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      match_as_path: cdktf.stringToTerraform(this._matchAsPath),
      match_community: cdktf.stringToTerraform(this._matchCommunity),
      match_community_exact: cdktf.stringToTerraform(this._matchCommunityExact),
      match_extcommunity: cdktf.stringToTerraform(this._matchExtcommunity),
      match_extcommunity_exact: cdktf.stringToTerraform(this._matchExtcommunityExact),
      match_flags: cdktf.numberToTerraform(this._matchFlags),
      match_interface: cdktf.stringToTerraform(this._matchInterface),
      match_ip6_address: cdktf.stringToTerraform(this._matchIp6Address),
      match_ip6_nexthop: cdktf.stringToTerraform(this._matchIp6Nexthop),
      match_ip_address: cdktf.stringToTerraform(this._matchIpAddress),
      match_ip_nexthop: cdktf.stringToTerraform(this._matchIpNexthop),
      match_metric: cdktf.stringToTerraform(this._matchMetric),
      match_origin: cdktf.stringToTerraform(this._matchOrigin),
      match_route_type: cdktf.stringToTerraform(this._matchRouteType),
      match_tag: cdktf.stringToTerraform(this._matchTag),
      match_vrf: cdktf.numberToTerraform(this._matchVrf),
      route_map: cdktf.stringToTerraform(this._routeMap),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      set_aggregator_as: cdktf.numberToTerraform(this._setAggregatorAs),
      set_aggregator_ip: cdktf.stringToTerraform(this._setAggregatorIp),
      set_aspath: cdktf.listMapper(cdktf.stringToTerraform, false)(this._setAspath),
      set_aspath_action: cdktf.stringToTerraform(this._setAspathAction),
      set_atomic_aggregate: cdktf.stringToTerraform(this._setAtomicAggregate),
      set_community: cdktf.listMapper(cdktf.stringToTerraform, false)(this._setCommunity),
      set_community_additive: cdktf.stringToTerraform(this._setCommunityAdditive),
      set_community_delete: cdktf.stringToTerraform(this._setCommunityDelete),
      set_dampening_max_suppress: cdktf.numberToTerraform(this._setDampeningMaxSuppress),
      set_dampening_reachability_half_life: cdktf.numberToTerraform(this._setDampeningReachabilityHalfLife),
      set_dampening_reuse: cdktf.numberToTerraform(this._setDampeningReuse),
      set_dampening_suppress: cdktf.numberToTerraform(this._setDampeningSuppress),
      set_dampening_unreachability_half_life: cdktf.numberToTerraform(this._setDampeningUnreachabilityHalfLife),
      set_extcommunity_rt: cdktf.listMapper(cdktf.stringToTerraform, false)(this._setExtcommunityRt),
      set_extcommunity_soo: cdktf.listMapper(cdktf.stringToTerraform, false)(this._setExtcommunitySoo),
      set_flags: cdktf.numberToTerraform(this._setFlags),
      set_ip6_nexthop: cdktf.stringToTerraform(this._setIp6Nexthop),
      set_ip6_nexthop_local: cdktf.stringToTerraform(this._setIp6NexthopLocal),
      set_ip_nexthop: cdktf.stringToTerraform(this._setIpNexthop),
      set_ip_prefsrc: cdktf.stringToTerraform(this._setIpPrefsrc),
      set_local_preference: cdktf.stringToTerraform(this._setLocalPreference),
      set_metric: cdktf.stringToTerraform(this._setMetric),
      set_metric_type: cdktf.stringToTerraform(this._setMetricType),
      set_origin: cdktf.stringToTerraform(this._setOrigin),
      set_originator_id: cdktf.stringToTerraform(this._setOriginatorId),
      set_priority: cdktf.numberToTerraform(this._setPriority),
      set_route_tag: cdktf.stringToTerraform(this._setRouteTag),
      set_tag: cdktf.stringToTerraform(this._setTag),
      set_vpnv4_nexthop: cdktf.stringToTerraform(this._setVpnv4Nexthop),
      set_vpnv6_nexthop: cdktf.stringToTerraform(this._setVpnv6Nexthop),
      set_vpnv6_nexthop_local: cdktf.stringToTerraform(this._setVpnv6NexthopLocal),
      set_weight: cdktf.stringToTerraform(this._setWeight),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
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
      match_as_path: {
        value: cdktf.stringToHclTerraform(this._matchAsPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_community: {
        value: cdktf.stringToHclTerraform(this._matchCommunity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_community_exact: {
        value: cdktf.stringToHclTerraform(this._matchCommunityExact),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_extcommunity: {
        value: cdktf.stringToHclTerraform(this._matchExtcommunity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_extcommunity_exact: {
        value: cdktf.stringToHclTerraform(this._matchExtcommunityExact),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_flags: {
        value: cdktf.numberToHclTerraform(this._matchFlags),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      match_interface: {
        value: cdktf.stringToHclTerraform(this._matchInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_ip6_address: {
        value: cdktf.stringToHclTerraform(this._matchIp6Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_ip6_nexthop: {
        value: cdktf.stringToHclTerraform(this._matchIp6Nexthop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_ip_address: {
        value: cdktf.stringToHclTerraform(this._matchIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_ip_nexthop: {
        value: cdktf.stringToHclTerraform(this._matchIpNexthop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_metric: {
        value: cdktf.stringToHclTerraform(this._matchMetric),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_origin: {
        value: cdktf.stringToHclTerraform(this._matchOrigin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_route_type: {
        value: cdktf.stringToHclTerraform(this._matchRouteType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_tag: {
        value: cdktf.stringToHclTerraform(this._matchTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_vrf: {
        value: cdktf.numberToHclTerraform(this._matchVrf),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      route_map: {
        value: cdktf.stringToHclTerraform(this._routeMap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_aggregator_as: {
        value: cdktf.numberToHclTerraform(this._setAggregatorAs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      set_aggregator_ip: {
        value: cdktf.stringToHclTerraform(this._setAggregatorIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_aspath: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._setAspath),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      set_aspath_action: {
        value: cdktf.stringToHclTerraform(this._setAspathAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_atomic_aggregate: {
        value: cdktf.stringToHclTerraform(this._setAtomicAggregate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_community: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._setCommunity),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      set_community_additive: {
        value: cdktf.stringToHclTerraform(this._setCommunityAdditive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_community_delete: {
        value: cdktf.stringToHclTerraform(this._setCommunityDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_dampening_max_suppress: {
        value: cdktf.numberToHclTerraform(this._setDampeningMaxSuppress),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      set_dampening_reachability_half_life: {
        value: cdktf.numberToHclTerraform(this._setDampeningReachabilityHalfLife),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      set_dampening_reuse: {
        value: cdktf.numberToHclTerraform(this._setDampeningReuse),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      set_dampening_suppress: {
        value: cdktf.numberToHclTerraform(this._setDampeningSuppress),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      set_dampening_unreachability_half_life: {
        value: cdktf.numberToHclTerraform(this._setDampeningUnreachabilityHalfLife),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      set_extcommunity_rt: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._setExtcommunityRt),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      set_extcommunity_soo: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._setExtcommunitySoo),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      set_flags: {
        value: cdktf.numberToHclTerraform(this._setFlags),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      set_ip6_nexthop: {
        value: cdktf.stringToHclTerraform(this._setIp6Nexthop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_ip6_nexthop_local: {
        value: cdktf.stringToHclTerraform(this._setIp6NexthopLocal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_ip_nexthop: {
        value: cdktf.stringToHclTerraform(this._setIpNexthop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_ip_prefsrc: {
        value: cdktf.stringToHclTerraform(this._setIpPrefsrc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_local_preference: {
        value: cdktf.stringToHclTerraform(this._setLocalPreference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_metric: {
        value: cdktf.stringToHclTerraform(this._setMetric),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_metric_type: {
        value: cdktf.stringToHclTerraform(this._setMetricType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_origin: {
        value: cdktf.stringToHclTerraform(this._setOrigin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_originator_id: {
        value: cdktf.stringToHclTerraform(this._setOriginatorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_priority: {
        value: cdktf.numberToHclTerraform(this._setPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      set_route_tag: {
        value: cdktf.stringToHclTerraform(this._setRouteTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_tag: {
        value: cdktf.stringToHclTerraform(this._setTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_vpnv4_nexthop: {
        value: cdktf.stringToHclTerraform(this._setVpnv4Nexthop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_vpnv6_nexthop: {
        value: cdktf.stringToHclTerraform(this._setVpnv6Nexthop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_vpnv6_nexthop_local: {
        value: cdktf.stringToHclTerraform(this._setVpnv6NexthopLocal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_weight: {
        value: cdktf.stringToHclTerraform(this._setWeight),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
