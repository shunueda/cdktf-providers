// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/router_routemap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiosRouterRoutemapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/router_routemap#id DataFortiosRouterRoutemap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/router_routemap#name DataFortiosRouterRoutemap#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/router_routemap#vdomparam DataFortiosRouterRoutemap#vdomparam}
  */
  readonly vdomparam?: string;
}
export interface DataFortiosRouterRoutemapRuleSetAspath {
}

export function dataFortiosRouterRoutemapRuleSetAspathToTerraform(struct?: DataFortiosRouterRoutemapRuleSetAspath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterRoutemapRuleSetAspathToHclTerraform(struct?: DataFortiosRouterRoutemapRuleSetAspath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterRoutemapRuleSetAspathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiosRouterRoutemapRuleSetAspath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterRoutemapRuleSetAspath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // as - computed: true, optional: false, required: false
  public get as() {
    return this.getStringAttribute('as');
  }
}

export class DataFortiosRouterRoutemapRuleSetAspathList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataFortiosRouterRoutemapRuleSetAspathOutputReference {
    return new DataFortiosRouterRoutemapRuleSetAspathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterRoutemapRuleSetCommunity {
}

export function dataFortiosRouterRoutemapRuleSetCommunityToTerraform(struct?: DataFortiosRouterRoutemapRuleSetCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterRoutemapRuleSetCommunityToHclTerraform(struct?: DataFortiosRouterRoutemapRuleSetCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterRoutemapRuleSetCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiosRouterRoutemapRuleSetCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterRoutemapRuleSetCommunity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // community - computed: true, optional: false, required: false
  public get community() {
    return this.getStringAttribute('community');
  }
}

export class DataFortiosRouterRoutemapRuleSetCommunityList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataFortiosRouterRoutemapRuleSetCommunityOutputReference {
    return new DataFortiosRouterRoutemapRuleSetCommunityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterRoutemapRuleSetExtcommunityRt {
}

export function dataFortiosRouterRoutemapRuleSetExtcommunityRtToTerraform(struct?: DataFortiosRouterRoutemapRuleSetExtcommunityRt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterRoutemapRuleSetExtcommunityRtToHclTerraform(struct?: DataFortiosRouterRoutemapRuleSetExtcommunityRt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterRoutemapRuleSetExtcommunityRtOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiosRouterRoutemapRuleSetExtcommunityRt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterRoutemapRuleSetExtcommunityRt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // community - computed: true, optional: false, required: false
  public get community() {
    return this.getStringAttribute('community');
  }
}

export class DataFortiosRouterRoutemapRuleSetExtcommunityRtList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataFortiosRouterRoutemapRuleSetExtcommunityRtOutputReference {
    return new DataFortiosRouterRoutemapRuleSetExtcommunityRtOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterRoutemapRuleSetExtcommunitySoo {
}

export function dataFortiosRouterRoutemapRuleSetExtcommunitySooToTerraform(struct?: DataFortiosRouterRoutemapRuleSetExtcommunitySoo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterRoutemapRuleSetExtcommunitySooToHclTerraform(struct?: DataFortiosRouterRoutemapRuleSetExtcommunitySoo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterRoutemapRuleSetExtcommunitySooOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiosRouterRoutemapRuleSetExtcommunitySoo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterRoutemapRuleSetExtcommunitySoo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // community - computed: true, optional: false, required: false
  public get community() {
    return this.getStringAttribute('community');
  }
}

export class DataFortiosRouterRoutemapRuleSetExtcommunitySooList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataFortiosRouterRoutemapRuleSetExtcommunitySooOutputReference {
    return new DataFortiosRouterRoutemapRuleSetExtcommunitySooOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterRoutemapRule {
}

export function dataFortiosRouterRoutemapRuleToTerraform(struct?: DataFortiosRouterRoutemapRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterRoutemapRuleToHclTerraform(struct?: DataFortiosRouterRoutemapRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterRoutemapRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiosRouterRoutemapRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterRoutemapRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // match_as_path - computed: true, optional: false, required: false
  public get matchAsPath() {
    return this.getStringAttribute('match_as_path');
  }

  // match_community - computed: true, optional: false, required: false
  public get matchCommunity() {
    return this.getStringAttribute('match_community');
  }

  // match_community_exact - computed: true, optional: false, required: false
  public get matchCommunityExact() {
    return this.getStringAttribute('match_community_exact');
  }

  // match_extcommunity - computed: true, optional: false, required: false
  public get matchExtcommunity() {
    return this.getStringAttribute('match_extcommunity');
  }

  // match_extcommunity_exact - computed: true, optional: false, required: false
  public get matchExtcommunityExact() {
    return this.getStringAttribute('match_extcommunity_exact');
  }

  // match_flags - computed: true, optional: false, required: false
  public get matchFlags() {
    return this.getNumberAttribute('match_flags');
  }

  // match_interface - computed: true, optional: false, required: false
  public get matchInterface() {
    return this.getStringAttribute('match_interface');
  }

  // match_ip6_address - computed: true, optional: false, required: false
  public get matchIp6Address() {
    return this.getStringAttribute('match_ip6_address');
  }

  // match_ip6_nexthop - computed: true, optional: false, required: false
  public get matchIp6Nexthop() {
    return this.getStringAttribute('match_ip6_nexthop');
  }

  // match_ip_address - computed: true, optional: false, required: false
  public get matchIpAddress() {
    return this.getStringAttribute('match_ip_address');
  }

  // match_ip_nexthop - computed: true, optional: false, required: false
  public get matchIpNexthop() {
    return this.getStringAttribute('match_ip_nexthop');
  }

  // match_metric - computed: true, optional: false, required: false
  public get matchMetric() {
    return this.getNumberAttribute('match_metric');
  }

  // match_origin - computed: true, optional: false, required: false
  public get matchOrigin() {
    return this.getStringAttribute('match_origin');
  }

  // match_route_type - computed: true, optional: false, required: false
  public get matchRouteType() {
    return this.getStringAttribute('match_route_type');
  }

  // match_tag - computed: true, optional: false, required: false
  public get matchTag() {
    return this.getNumberAttribute('match_tag');
  }

  // match_vrf - computed: true, optional: false, required: false
  public get matchVrf() {
    return this.getNumberAttribute('match_vrf');
  }

  // set_aggregator_as - computed: true, optional: false, required: false
  public get setAggregatorAs() {
    return this.getNumberAttribute('set_aggregator_as');
  }

  // set_aggregator_ip - computed: true, optional: false, required: false
  public get setAggregatorIp() {
    return this.getStringAttribute('set_aggregator_ip');
  }

  // set_aspath - computed: true, optional: false, required: false
  private _setAspath = new DataFortiosRouterRoutemapRuleSetAspathList(this, "set_aspath", false);
  public get setAspath() {
    return this._setAspath;
  }

  // set_aspath_action - computed: true, optional: false, required: false
  public get setAspathAction() {
    return this.getStringAttribute('set_aspath_action');
  }

  // set_atomic_aggregate - computed: true, optional: false, required: false
  public get setAtomicAggregate() {
    return this.getStringAttribute('set_atomic_aggregate');
  }

  // set_community - computed: true, optional: false, required: false
  private _setCommunity = new DataFortiosRouterRoutemapRuleSetCommunityList(this, "set_community", false);
  public get setCommunity() {
    return this._setCommunity;
  }

  // set_community_additive - computed: true, optional: false, required: false
  public get setCommunityAdditive() {
    return this.getStringAttribute('set_community_additive');
  }

  // set_community_delete - computed: true, optional: false, required: false
  public get setCommunityDelete() {
    return this.getStringAttribute('set_community_delete');
  }

  // set_dampening_max_suppress - computed: true, optional: false, required: false
  public get setDampeningMaxSuppress() {
    return this.getNumberAttribute('set_dampening_max_suppress');
  }

  // set_dampening_reachability_half_life - computed: true, optional: false, required: false
  public get setDampeningReachabilityHalfLife() {
    return this.getNumberAttribute('set_dampening_reachability_half_life');
  }

  // set_dampening_reuse - computed: true, optional: false, required: false
  public get setDampeningReuse() {
    return this.getNumberAttribute('set_dampening_reuse');
  }

  // set_dampening_suppress - computed: true, optional: false, required: false
  public get setDampeningSuppress() {
    return this.getNumberAttribute('set_dampening_suppress');
  }

  // set_dampening_unreachability_half_life - computed: true, optional: false, required: false
  public get setDampeningUnreachabilityHalfLife() {
    return this.getNumberAttribute('set_dampening_unreachability_half_life');
  }

  // set_extcommunity_rt - computed: true, optional: false, required: false
  private _setExtcommunityRt = new DataFortiosRouterRoutemapRuleSetExtcommunityRtList(this, "set_extcommunity_rt", false);
  public get setExtcommunityRt() {
    return this._setExtcommunityRt;
  }

  // set_extcommunity_soo - computed: true, optional: false, required: false
  private _setExtcommunitySoo = new DataFortiosRouterRoutemapRuleSetExtcommunitySooList(this, "set_extcommunity_soo", false);
  public get setExtcommunitySoo() {
    return this._setExtcommunitySoo;
  }

  // set_flags - computed: true, optional: false, required: false
  public get setFlags() {
    return this.getNumberAttribute('set_flags');
  }

  // set_ip6_nexthop - computed: true, optional: false, required: false
  public get setIp6Nexthop() {
    return this.getStringAttribute('set_ip6_nexthop');
  }

  // set_ip6_nexthop_local - computed: true, optional: false, required: false
  public get setIp6NexthopLocal() {
    return this.getStringAttribute('set_ip6_nexthop_local');
  }

  // set_ip_nexthop - computed: true, optional: false, required: false
  public get setIpNexthop() {
    return this.getStringAttribute('set_ip_nexthop');
  }

  // set_ip_prefsrc - computed: true, optional: false, required: false
  public get setIpPrefsrc() {
    return this.getStringAttribute('set_ip_prefsrc');
  }

  // set_local_preference - computed: true, optional: false, required: false
  public get setLocalPreference() {
    return this.getNumberAttribute('set_local_preference');
  }

  // set_metric - computed: true, optional: false, required: false
  public get setMetric() {
    return this.getNumberAttribute('set_metric');
  }

  // set_metric_type - computed: true, optional: false, required: false
  public get setMetricType() {
    return this.getStringAttribute('set_metric_type');
  }

  // set_origin - computed: true, optional: false, required: false
  public get setOrigin() {
    return this.getStringAttribute('set_origin');
  }

  // set_originator_id - computed: true, optional: false, required: false
  public get setOriginatorId() {
    return this.getStringAttribute('set_originator_id');
  }

  // set_priority - computed: true, optional: false, required: false
  public get setPriority() {
    return this.getNumberAttribute('set_priority');
  }

  // set_route_tag - computed: true, optional: false, required: false
  public get setRouteTag() {
    return this.getNumberAttribute('set_route_tag');
  }

  // set_tag - computed: true, optional: false, required: false
  public get setTag() {
    return this.getNumberAttribute('set_tag');
  }

  // set_vpnv4_nexthop - computed: true, optional: false, required: false
  public get setVpnv4Nexthop() {
    return this.getStringAttribute('set_vpnv4_nexthop');
  }

  // set_vpnv6_nexthop - computed: true, optional: false, required: false
  public get setVpnv6Nexthop() {
    return this.getStringAttribute('set_vpnv6_nexthop');
  }

  // set_vpnv6_nexthop_local - computed: true, optional: false, required: false
  public get setVpnv6NexthopLocal() {
    return this.getStringAttribute('set_vpnv6_nexthop_local');
  }

  // set_weight - computed: true, optional: false, required: false
  public get setWeight() {
    return this.getNumberAttribute('set_weight');
  }
}

export class DataFortiosRouterRoutemapRuleList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataFortiosRouterRoutemapRuleOutputReference {
    return new DataFortiosRouterRoutemapRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/router_routemap fortios_router_routemap}
*/
export class DataFortiosRouterRoutemap extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_router_routemap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiosRouterRoutemap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiosRouterRoutemap to import
  * @param importFromId The id of the existing DataFortiosRouterRoutemap that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/router_routemap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiosRouterRoutemap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_router_routemap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/router_routemap fortios_router_routemap} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiosRouterRoutemapConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortiosRouterRoutemapConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_router_routemap',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
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
    this._name = config.name;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
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

  // rule - computed: true, optional: false, required: false
  private _rule = new DataFortiosRouterRoutemapRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }

  // vdomparam - computed: false, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
