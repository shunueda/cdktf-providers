// https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_route_map
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyGatewayRouteMapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_route_map#description PolicyGatewayRouteMap#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_route_map#display_name PolicyGatewayRouteMap#display_name}
  */
  readonly displayName: string;
  /**
  * Policy path for Tier0 gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_route_map#gateway_path PolicyGatewayRouteMap#gateway_path}
  */
  readonly gatewayPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_route_map#id PolicyGatewayRouteMap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_route_map#nsx_id PolicyGatewayRouteMap#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_route_map#entry PolicyGatewayRouteMap#entry}
  */
  readonly entry: PolicyGatewayRouteMapEntry[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_route_map#tag PolicyGatewayRouteMap#tag}
  */
  readonly tag?: PolicyGatewayRouteMapTag[] | cdktf.IResolvable;
}
export interface PolicyGatewayRouteMapEntryCommunityListMatch {
  /**
  * Community list path or a regular expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_route_map#criteria PolicyGatewayRouteMap#criteria}
  */
  readonly criteria: string;
  /**
  * Match operator for community list entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_route_map#match_operator PolicyGatewayRouteMap#match_operator}
  */
  readonly matchOperator: string;
}

export function policyGatewayRouteMapEntryCommunityListMatchToTerraform(struct?: PolicyGatewayRouteMapEntryCommunityListMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria: cdktf.stringToTerraform(struct!.criteria),
    match_operator: cdktf.stringToTerraform(struct!.matchOperator),
  }
}


export function policyGatewayRouteMapEntryCommunityListMatchToHclTerraform(struct?: PolicyGatewayRouteMapEntryCommunityListMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    criteria: {
      value: cdktf.stringToHclTerraform(struct!.criteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_operator: {
      value: cdktf.stringToHclTerraform(struct!.matchOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyGatewayRouteMapEntryCommunityListMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PolicyGatewayRouteMapEntryCommunityListMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria;
    }
    if (this._matchOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOperator = this._matchOperator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyGatewayRouteMapEntryCommunityListMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._criteria = undefined;
      this._matchOperator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._criteria = value.criteria;
      this._matchOperator = value.matchOperator;
    }
  }

  // criteria - computed: false, optional: false, required: true
  private _criteria?: string; 
  public get criteria() {
    return this.getStringAttribute('criteria');
  }
  public set criteria(value: string) {
    this._criteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria;
  }

  // match_operator - computed: false, optional: false, required: true
  private _matchOperator?: string; 
  public get matchOperator() {
    return this.getStringAttribute('match_operator');
  }
  public set matchOperator(value: string) {
    this._matchOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOperatorInput() {
    return this._matchOperator;
  }
}

export class PolicyGatewayRouteMapEntryCommunityListMatchList extends cdktf.ComplexList {
  public internalValue? : PolicyGatewayRouteMapEntryCommunityListMatch[] | cdktf.IResolvable

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
  public get(index: number): PolicyGatewayRouteMapEntryCommunityListMatchOutputReference {
    return new PolicyGatewayRouteMapEntryCommunityListMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyGatewayRouteMapEntrySet {
  /**
  * Autonomous System (AS) path prepend to influence route selection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_route_map#as_path_prepend PolicyGatewayRouteMap#as_path_prepend}
  */
  readonly asPathPrepend?: string;
  /**
  * Set BGP regular or large community for matching routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_route_map#community PolicyGatewayRouteMap#community}
  */
  readonly community?: string;
  /**
  * Local preference indicates the degree of preference for one BGP route over other BGP routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_route_map#local_preference PolicyGatewayRouteMap#local_preference}
  */
  readonly localPreference?: number;
  /**
  * A lower Multi exit descriminator (MED) is preferred over a higher value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_route_map#med PolicyGatewayRouteMap#med}
  */
  readonly med?: number;
  /**
  * Indicator whether to prefer global address over link-local as the next hop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_route_map#prefer_global_v6_next_hop PolicyGatewayRouteMap#prefer_global_v6_next_hop}
  */
  readonly preferGlobalV6NextHop?: boolean | cdktf.IResolvable;
  /**
  * Weight is used to select a route when multiple routes are available to the same network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_route_map#weight PolicyGatewayRouteMap#weight}
  */
  readonly weight?: number;
}

export function policyGatewayRouteMapEntrySetToTerraform(struct?: PolicyGatewayRouteMapEntrySetOutputReference | PolicyGatewayRouteMapEntrySet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_path_prepend: cdktf.stringToTerraform(struct!.asPathPrepend),
    community: cdktf.stringToTerraform(struct!.community),
    local_preference: cdktf.numberToTerraform(struct!.localPreference),
    med: cdktf.numberToTerraform(struct!.med),
    prefer_global_v6_next_hop: cdktf.booleanToTerraform(struct!.preferGlobalV6NextHop),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function policyGatewayRouteMapEntrySetToHclTerraform(struct?: PolicyGatewayRouteMapEntrySetOutputReference | PolicyGatewayRouteMapEntrySet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_path_prepend: {
      value: cdktf.stringToHclTerraform(struct!.asPathPrepend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    community: {
      value: cdktf.stringToHclTerraform(struct!.community),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_preference: {
      value: cdktf.numberToHclTerraform(struct!.localPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    med: {
      value: cdktf.numberToHclTerraform(struct!.med),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefer_global_v6_next_hop: {
      value: cdktf.booleanToHclTerraform(struct!.preferGlobalV6NextHop),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyGatewayRouteMapEntrySetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyGatewayRouteMapEntrySet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asPathPrepend !== undefined) {
      hasAnyValues = true;
      internalValueResult.asPathPrepend = this._asPathPrepend;
    }
    if (this._community !== undefined) {
      hasAnyValues = true;
      internalValueResult.community = this._community;
    }
    if (this._localPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPreference = this._localPreference;
    }
    if (this._med !== undefined) {
      hasAnyValues = true;
      internalValueResult.med = this._med;
    }
    if (this._preferGlobalV6NextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferGlobalV6NextHop = this._preferGlobalV6NextHop;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyGatewayRouteMapEntrySet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asPathPrepend = undefined;
      this._community = undefined;
      this._localPreference = undefined;
      this._med = undefined;
      this._preferGlobalV6NextHop = undefined;
      this._weight = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asPathPrepend = value.asPathPrepend;
      this._community = value.community;
      this._localPreference = value.localPreference;
      this._med = value.med;
      this._preferGlobalV6NextHop = value.preferGlobalV6NextHop;
      this._weight = value.weight;
    }
  }

  // as_path_prepend - computed: false, optional: true, required: false
  private _asPathPrepend?: string; 
  public get asPathPrepend() {
    return this.getStringAttribute('as_path_prepend');
  }
  public set asPathPrepend(value: string) {
    this._asPathPrepend = value;
  }
  public resetAsPathPrepend() {
    this._asPathPrepend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asPathPrependInput() {
    return this._asPathPrepend;
  }

  // community - computed: false, optional: true, required: false
  private _community?: string; 
  public get community() {
    return this.getStringAttribute('community');
  }
  public set community(value: string) {
    this._community = value;
  }
  public resetCommunity() {
    this._community = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityInput() {
    return this._community;
  }

  // local_preference - computed: true, optional: true, required: false
  private _localPreference?: number; 
  public get localPreference() {
    return this.getNumberAttribute('local_preference');
  }
  public set localPreference(value: number) {
    this._localPreference = value;
  }
  public resetLocalPreference() {
    this._localPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPreferenceInput() {
    return this._localPreference;
  }

  // med - computed: true, optional: true, required: false
  private _med?: number; 
  public get med() {
    return this.getNumberAttribute('med');
  }
  public set med(value: number) {
    this._med = value;
  }
  public resetMed() {
    this._med = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get medInput() {
    return this._med;
  }

  // prefer_global_v6_next_hop - computed: false, optional: true, required: false
  private _preferGlobalV6NextHop?: boolean | cdktf.IResolvable; 
  public get preferGlobalV6NextHop() {
    return this.getBooleanAttribute('prefer_global_v6_next_hop');
  }
  public set preferGlobalV6NextHop(value: boolean | cdktf.IResolvable) {
    this._preferGlobalV6NextHop = value;
  }
  public resetPreferGlobalV6NextHop() {
    this._preferGlobalV6NextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferGlobalV6NextHopInput() {
    return this._preferGlobalV6NextHop;
  }

  // weight - computed: false, optional: true, required: false
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
}
export interface PolicyGatewayRouteMapEntry {
  /**
  * Action for the route map entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_route_map#action PolicyGatewayRouteMap#action}
  */
  readonly action?: string;
  /**
  * List of paths for prefix lists for route map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_route_map#prefix_list_matches PolicyGatewayRouteMap#prefix_list_matches}
  */
  readonly prefixListMatches?: string[];
  /**
  * community_list_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_route_map#community_list_match PolicyGatewayRouteMap#community_list_match}
  */
  readonly communityListMatch?: PolicyGatewayRouteMapEntryCommunityListMatch[] | cdktf.IResolvable;
  /**
  * set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_route_map#set PolicyGatewayRouteMap#set}
  */
  readonly set?: PolicyGatewayRouteMapEntrySet;
}

export function policyGatewayRouteMapEntryToTerraform(struct?: PolicyGatewayRouteMapEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    prefix_list_matches: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixListMatches),
    community_list_match: cdktf.listMapper(policyGatewayRouteMapEntryCommunityListMatchToTerraform, true)(struct!.communityListMatch),
    set: policyGatewayRouteMapEntrySetToTerraform(struct!.set),
  }
}


export function policyGatewayRouteMapEntryToHclTerraform(struct?: PolicyGatewayRouteMapEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list_matches: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixListMatches),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    community_list_match: {
      value: cdktf.listMapperHcl(policyGatewayRouteMapEntryCommunityListMatchToHclTerraform, true)(struct!.communityListMatch),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyGatewayRouteMapEntryCommunityListMatchList",
    },
    set: {
      value: policyGatewayRouteMapEntrySetToHclTerraform(struct!.set),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyGatewayRouteMapEntrySetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyGatewayRouteMapEntryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PolicyGatewayRouteMapEntry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._prefixListMatches !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListMatches = this._prefixListMatches;
    }
    if (this._communityListMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.communityListMatch = this._communityListMatch?.internalValue;
    }
    if (this._set?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyGatewayRouteMapEntry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._prefixListMatches = undefined;
      this._communityListMatch.internalValue = undefined;
      this._set.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._prefixListMatches = value.prefixListMatches;
      this._communityListMatch.internalValue = value.communityListMatch;
      this._set.internalValue = value.set;
    }
  }

  // action - computed: false, optional: true, required: false
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

  // prefix_list_matches - computed: false, optional: true, required: false
  private _prefixListMatches?: string[]; 
  public get prefixListMatches() {
    return cdktf.Fn.tolist(this.getListAttribute('prefix_list_matches'));
  }
  public set prefixListMatches(value: string[]) {
    this._prefixListMatches = value;
  }
  public resetPrefixListMatches() {
    this._prefixListMatches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListMatchesInput() {
    return this._prefixListMatches;
  }

  // community_list_match - computed: false, optional: true, required: false
  private _communityListMatch = new PolicyGatewayRouteMapEntryCommunityListMatchList(this, "community_list_match", false);
  public get communityListMatch() {
    return this._communityListMatch;
  }
  public putCommunityListMatch(value: PolicyGatewayRouteMapEntryCommunityListMatch[] | cdktf.IResolvable) {
    this._communityListMatch.internalValue = value;
  }
  public resetCommunityListMatch() {
    this._communityListMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityListMatchInput() {
    return this._communityListMatch.internalValue;
  }

  // set - computed: false, optional: true, required: false
  private _set = new PolicyGatewayRouteMapEntrySetOutputReference(this, "set");
  public get set() {
    return this._set;
  }
  public putSet(value: PolicyGatewayRouteMapEntrySet) {
    this._set.internalValue = value;
  }
  public resetSet() {
    this._set.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set.internalValue;
  }
}

export class PolicyGatewayRouteMapEntryList extends cdktf.ComplexList {
  public internalValue? : PolicyGatewayRouteMapEntry[] | cdktf.IResolvable

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
  public get(index: number): PolicyGatewayRouteMapEntryOutputReference {
    return new PolicyGatewayRouteMapEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyGatewayRouteMapTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_route_map#scope PolicyGatewayRouteMap#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_route_map#tag PolicyGatewayRouteMap#tag}
  */
  readonly tag?: string;
}

export function policyGatewayRouteMapTagToTerraform(struct?: PolicyGatewayRouteMapTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyGatewayRouteMapTagToHclTerraform(struct?: PolicyGatewayRouteMapTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyGatewayRouteMapTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PolicyGatewayRouteMapTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyGatewayRouteMapTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
      this._tag = value.tag;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class PolicyGatewayRouteMapTagList extends cdktf.ComplexList {
  public internalValue? : PolicyGatewayRouteMapTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyGatewayRouteMapTagOutputReference {
    return new PolicyGatewayRouteMapTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_route_map nsxt_policy_gateway_route_map}
*/
export class PolicyGatewayRouteMap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_gateway_route_map";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyGatewayRouteMap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyGatewayRouteMap to import
  * @param importFromId The id of the existing PolicyGatewayRouteMap that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_route_map#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyGatewayRouteMap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_gateway_route_map", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_route_map nsxt_policy_gateway_route_map} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyGatewayRouteMapConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyGatewayRouteMapConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_gateway_route_map',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.11.0',
        providerVersionConstraint: '3.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._gatewayPath = config.gatewayPath;
    this._id = config.id;
    this._nsxId = config.nsxId;
    this._entry.internalValue = config.entry;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // gateway_path - computed: false, optional: false, required: true
  private _gatewayPath?: string; 
  public get gatewayPath() {
    return this.getStringAttribute('gateway_path');
  }
  public set gatewayPath(value: string) {
    this._gatewayPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayPathInput() {
    return this._gatewayPath;
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

  // nsx_id - computed: true, optional: true, required: false
  private _nsxId?: string; 
  public get nsxId() {
    return this.getStringAttribute('nsx_id');
  }
  public set nsxId(value: string) {
    this._nsxId = value;
  }
  public resetNsxId() {
    this._nsxId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxIdInput() {
    return this._nsxId;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // entry - computed: false, optional: false, required: true
  private _entry = new PolicyGatewayRouteMapEntryList(this, "entry", false);
  public get entry() {
    return this._entry;
  }
  public putEntry(value: PolicyGatewayRouteMapEntry[] | cdktf.IResolvable) {
    this._entry.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entryInput() {
    return this._entry.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicyGatewayRouteMapTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyGatewayRouteMapTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      gateway_path: cdktf.stringToTerraform(this._gatewayPath),
      id: cdktf.stringToTerraform(this._id),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      entry: cdktf.listMapper(policyGatewayRouteMapEntryToTerraform, true)(this._entry.internalValue),
      tag: cdktf.listMapper(policyGatewayRouteMapTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_path: {
        value: cdktf.stringToHclTerraform(this._gatewayPath),
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
      nsx_id: {
        value: cdktf.stringToHclTerraform(this._nsxId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entry: {
        value: cdktf.listMapperHcl(policyGatewayRouteMapEntryToHclTerraform, true)(this._entry.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyGatewayRouteMapEntryList",
      },
      tag: {
        value: cdktf.listMapperHcl(policyGatewayRouteMapTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyGatewayRouteMapTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
