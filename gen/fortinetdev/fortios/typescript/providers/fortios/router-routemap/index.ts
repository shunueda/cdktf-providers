// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterRoutemapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#comments RouterRoutemap#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#dynamic_sort_subtable RouterRoutemap#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#get_all_tables RouterRoutemap#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#id RouterRoutemap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#name RouterRoutemap#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#vdomparam RouterRoutemap#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#rule RouterRoutemap#rule}
  */
  readonly rule?: RouterRoutemapRule[] | cdktf.IResolvable;
}
export interface RouterRoutemapRuleSetAspath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#as RouterRoutemap#as}
  */
  readonly as?: string;
}

export function routerRoutemapRuleSetAspathToTerraform(struct?: RouterRoutemapRuleSetAspath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as: cdktf.stringToTerraform(struct!.as),
  }
}


export function routerRoutemapRuleSetAspathToHclTerraform(struct?: RouterRoutemapRuleSetAspath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as: {
      value: cdktf.stringToHclTerraform(struct!.as),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterRoutemapRuleSetAspathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterRoutemapRuleSetAspath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._as !== undefined) {
      hasAnyValues = true;
      internalValueResult.as = this._as;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterRoutemapRuleSetAspath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._as = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._as = value.as;
    }
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
}

export class RouterRoutemapRuleSetAspathList extends cdktf.ComplexList {
  public internalValue? : RouterRoutemapRuleSetAspath[] | cdktf.IResolvable

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
  public get(index: number): RouterRoutemapRuleSetAspathOutputReference {
    return new RouterRoutemapRuleSetAspathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterRoutemapRuleSetCommunity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#community RouterRoutemap#community}
  */
  readonly community?: string;
}

export function routerRoutemapRuleSetCommunityToTerraform(struct?: RouterRoutemapRuleSetCommunity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    community: cdktf.stringToTerraform(struct!.community),
  }
}


export function routerRoutemapRuleSetCommunityToHclTerraform(struct?: RouterRoutemapRuleSetCommunity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    community: {
      value: cdktf.stringToHclTerraform(struct!.community),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterRoutemapRuleSetCommunityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterRoutemapRuleSetCommunity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._community !== undefined) {
      hasAnyValues = true;
      internalValueResult.community = this._community;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterRoutemapRuleSetCommunity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._community = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._community = value.community;
    }
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
}

export class RouterRoutemapRuleSetCommunityList extends cdktf.ComplexList {
  public internalValue? : RouterRoutemapRuleSetCommunity[] | cdktf.IResolvable

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
  public get(index: number): RouterRoutemapRuleSetCommunityOutputReference {
    return new RouterRoutemapRuleSetCommunityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterRoutemapRuleSetExtcommunityRt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#community RouterRoutemap#community}
  */
  readonly community?: string;
}

export function routerRoutemapRuleSetExtcommunityRtToTerraform(struct?: RouterRoutemapRuleSetExtcommunityRt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    community: cdktf.stringToTerraform(struct!.community),
  }
}


export function routerRoutemapRuleSetExtcommunityRtToHclTerraform(struct?: RouterRoutemapRuleSetExtcommunityRt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    community: {
      value: cdktf.stringToHclTerraform(struct!.community),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterRoutemapRuleSetExtcommunityRtOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterRoutemapRuleSetExtcommunityRt | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._community !== undefined) {
      hasAnyValues = true;
      internalValueResult.community = this._community;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterRoutemapRuleSetExtcommunityRt | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._community = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._community = value.community;
    }
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
}

export class RouterRoutemapRuleSetExtcommunityRtList extends cdktf.ComplexList {
  public internalValue? : RouterRoutemapRuleSetExtcommunityRt[] | cdktf.IResolvable

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
  public get(index: number): RouterRoutemapRuleSetExtcommunityRtOutputReference {
    return new RouterRoutemapRuleSetExtcommunityRtOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterRoutemapRuleSetExtcommunitySoo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#community RouterRoutemap#community}
  */
  readonly community?: string;
}

export function routerRoutemapRuleSetExtcommunitySooToTerraform(struct?: RouterRoutemapRuleSetExtcommunitySoo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    community: cdktf.stringToTerraform(struct!.community),
  }
}


export function routerRoutemapRuleSetExtcommunitySooToHclTerraform(struct?: RouterRoutemapRuleSetExtcommunitySoo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    community: {
      value: cdktf.stringToHclTerraform(struct!.community),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterRoutemapRuleSetExtcommunitySooOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterRoutemapRuleSetExtcommunitySoo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._community !== undefined) {
      hasAnyValues = true;
      internalValueResult.community = this._community;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterRoutemapRuleSetExtcommunitySoo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._community = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._community = value.community;
    }
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
}

export class RouterRoutemapRuleSetExtcommunitySooList extends cdktf.ComplexList {
  public internalValue? : RouterRoutemapRuleSetExtcommunitySoo[] | cdktf.IResolvable

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
  public get(index: number): RouterRoutemapRuleSetExtcommunitySooOutputReference {
    return new RouterRoutemapRuleSetExtcommunitySooOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterRoutemapRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#action RouterRoutemap#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#id RouterRoutemap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#match_as_path RouterRoutemap#match_as_path}
  */
  readonly matchAsPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#match_community RouterRoutemap#match_community}
  */
  readonly matchCommunity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#match_community_exact RouterRoutemap#match_community_exact}
  */
  readonly matchCommunityExact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#match_extcommunity RouterRoutemap#match_extcommunity}
  */
  readonly matchExtcommunity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#match_extcommunity_exact RouterRoutemap#match_extcommunity_exact}
  */
  readonly matchExtcommunityExact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#match_flags RouterRoutemap#match_flags}
  */
  readonly matchFlags?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#match_interface RouterRoutemap#match_interface}
  */
  readonly matchInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#match_ip6_address RouterRoutemap#match_ip6_address}
  */
  readonly matchIp6Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#match_ip6_nexthop RouterRoutemap#match_ip6_nexthop}
  */
  readonly matchIp6Nexthop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#match_ip_address RouterRoutemap#match_ip_address}
  */
  readonly matchIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#match_ip_nexthop RouterRoutemap#match_ip_nexthop}
  */
  readonly matchIpNexthop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#match_metric RouterRoutemap#match_metric}
  */
  readonly matchMetric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#match_origin RouterRoutemap#match_origin}
  */
  readonly matchOrigin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#match_route_type RouterRoutemap#match_route_type}
  */
  readonly matchRouteType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#match_tag RouterRoutemap#match_tag}
  */
  readonly matchTag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#match_vrf RouterRoutemap#match_vrf}
  */
  readonly matchVrf?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#set_aggregator_as RouterRoutemap#set_aggregator_as}
  */
  readonly setAggregatorAs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#set_aggregator_ip RouterRoutemap#set_aggregator_ip}
  */
  readonly setAggregatorIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#set_aspath_action RouterRoutemap#set_aspath_action}
  */
  readonly setAspathAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#set_atomic_aggregate RouterRoutemap#set_atomic_aggregate}
  */
  readonly setAtomicAggregate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#set_community_additive RouterRoutemap#set_community_additive}
  */
  readonly setCommunityAdditive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#set_community_delete RouterRoutemap#set_community_delete}
  */
  readonly setCommunityDelete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#set_dampening_max_suppress RouterRoutemap#set_dampening_max_suppress}
  */
  readonly setDampeningMaxSuppress?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#set_dampening_reachability_half_life RouterRoutemap#set_dampening_reachability_half_life}
  */
  readonly setDampeningReachabilityHalfLife?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#set_dampening_reuse RouterRoutemap#set_dampening_reuse}
  */
  readonly setDampeningReuse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#set_dampening_suppress RouterRoutemap#set_dampening_suppress}
  */
  readonly setDampeningSuppress?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#set_dampening_unreachability_half_life RouterRoutemap#set_dampening_unreachability_half_life}
  */
  readonly setDampeningUnreachabilityHalfLife?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#set_flags RouterRoutemap#set_flags}
  */
  readonly setFlags?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#set_ip6_nexthop RouterRoutemap#set_ip6_nexthop}
  */
  readonly setIp6Nexthop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#set_ip6_nexthop_local RouterRoutemap#set_ip6_nexthop_local}
  */
  readonly setIp6NexthopLocal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#set_ip_nexthop RouterRoutemap#set_ip_nexthop}
  */
  readonly setIpNexthop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#set_ip_prefsrc RouterRoutemap#set_ip_prefsrc}
  */
  readonly setIpPrefsrc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#set_local_preference RouterRoutemap#set_local_preference}
  */
  readonly setLocalPreference?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#set_metric RouterRoutemap#set_metric}
  */
  readonly setMetric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#set_metric_type RouterRoutemap#set_metric_type}
  */
  readonly setMetricType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#set_origin RouterRoutemap#set_origin}
  */
  readonly setOrigin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#set_originator_id RouterRoutemap#set_originator_id}
  */
  readonly setOriginatorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#set_priority RouterRoutemap#set_priority}
  */
  readonly setPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#set_route_tag RouterRoutemap#set_route_tag}
  */
  readonly setRouteTag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#set_tag RouterRoutemap#set_tag}
  */
  readonly setTag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#set_vpnv4_nexthop RouterRoutemap#set_vpnv4_nexthop}
  */
  readonly setVpnv4Nexthop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#set_vpnv6_nexthop RouterRoutemap#set_vpnv6_nexthop}
  */
  readonly setVpnv6Nexthop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#set_vpnv6_nexthop_local RouterRoutemap#set_vpnv6_nexthop_local}
  */
  readonly setVpnv6NexthopLocal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#set_weight RouterRoutemap#set_weight}
  */
  readonly setWeight?: number;
  /**
  * set_aspath block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#set_aspath RouterRoutemap#set_aspath}
  */
  readonly setAspath?: RouterRoutemapRuleSetAspath[] | cdktf.IResolvable;
  /**
  * set_community block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#set_community RouterRoutemap#set_community}
  */
  readonly setCommunity?: RouterRoutemapRuleSetCommunity[] | cdktf.IResolvable;
  /**
  * set_extcommunity_rt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#set_extcommunity_rt RouterRoutemap#set_extcommunity_rt}
  */
  readonly setExtcommunityRt?: RouterRoutemapRuleSetExtcommunityRt[] | cdktf.IResolvable;
  /**
  * set_extcommunity_soo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#set_extcommunity_soo RouterRoutemap#set_extcommunity_soo}
  */
  readonly setExtcommunitySoo?: RouterRoutemapRuleSetExtcommunitySoo[] | cdktf.IResolvable;
}

export function routerRoutemapRuleToTerraform(struct?: RouterRoutemapRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    id: cdktf.numberToTerraform(struct!.id),
    match_as_path: cdktf.stringToTerraform(struct!.matchAsPath),
    match_community: cdktf.stringToTerraform(struct!.matchCommunity),
    match_community_exact: cdktf.stringToTerraform(struct!.matchCommunityExact),
    match_extcommunity: cdktf.stringToTerraform(struct!.matchExtcommunity),
    match_extcommunity_exact: cdktf.stringToTerraform(struct!.matchExtcommunityExact),
    match_flags: cdktf.numberToTerraform(struct!.matchFlags),
    match_interface: cdktf.stringToTerraform(struct!.matchInterface),
    match_ip6_address: cdktf.stringToTerraform(struct!.matchIp6Address),
    match_ip6_nexthop: cdktf.stringToTerraform(struct!.matchIp6Nexthop),
    match_ip_address: cdktf.stringToTerraform(struct!.matchIpAddress),
    match_ip_nexthop: cdktf.stringToTerraform(struct!.matchIpNexthop),
    match_metric: cdktf.numberToTerraform(struct!.matchMetric),
    match_origin: cdktf.stringToTerraform(struct!.matchOrigin),
    match_route_type: cdktf.stringToTerraform(struct!.matchRouteType),
    match_tag: cdktf.numberToTerraform(struct!.matchTag),
    match_vrf: cdktf.numberToTerraform(struct!.matchVrf),
    set_aggregator_as: cdktf.numberToTerraform(struct!.setAggregatorAs),
    set_aggregator_ip: cdktf.stringToTerraform(struct!.setAggregatorIp),
    set_aspath_action: cdktf.stringToTerraform(struct!.setAspathAction),
    set_atomic_aggregate: cdktf.stringToTerraform(struct!.setAtomicAggregate),
    set_community_additive: cdktf.stringToTerraform(struct!.setCommunityAdditive),
    set_community_delete: cdktf.stringToTerraform(struct!.setCommunityDelete),
    set_dampening_max_suppress: cdktf.numberToTerraform(struct!.setDampeningMaxSuppress),
    set_dampening_reachability_half_life: cdktf.numberToTerraform(struct!.setDampeningReachabilityHalfLife),
    set_dampening_reuse: cdktf.numberToTerraform(struct!.setDampeningReuse),
    set_dampening_suppress: cdktf.numberToTerraform(struct!.setDampeningSuppress),
    set_dampening_unreachability_half_life: cdktf.numberToTerraform(struct!.setDampeningUnreachabilityHalfLife),
    set_flags: cdktf.numberToTerraform(struct!.setFlags),
    set_ip6_nexthop: cdktf.stringToTerraform(struct!.setIp6Nexthop),
    set_ip6_nexthop_local: cdktf.stringToTerraform(struct!.setIp6NexthopLocal),
    set_ip_nexthop: cdktf.stringToTerraform(struct!.setIpNexthop),
    set_ip_prefsrc: cdktf.stringToTerraform(struct!.setIpPrefsrc),
    set_local_preference: cdktf.numberToTerraform(struct!.setLocalPreference),
    set_metric: cdktf.numberToTerraform(struct!.setMetric),
    set_metric_type: cdktf.stringToTerraform(struct!.setMetricType),
    set_origin: cdktf.stringToTerraform(struct!.setOrigin),
    set_originator_id: cdktf.stringToTerraform(struct!.setOriginatorId),
    set_priority: cdktf.numberToTerraform(struct!.setPriority),
    set_route_tag: cdktf.numberToTerraform(struct!.setRouteTag),
    set_tag: cdktf.numberToTerraform(struct!.setTag),
    set_vpnv4_nexthop: cdktf.stringToTerraform(struct!.setVpnv4Nexthop),
    set_vpnv6_nexthop: cdktf.stringToTerraform(struct!.setVpnv6Nexthop),
    set_vpnv6_nexthop_local: cdktf.stringToTerraform(struct!.setVpnv6NexthopLocal),
    set_weight: cdktf.numberToTerraform(struct!.setWeight),
    set_aspath: cdktf.listMapper(routerRoutemapRuleSetAspathToTerraform, true)(struct!.setAspath),
    set_community: cdktf.listMapper(routerRoutemapRuleSetCommunityToTerraform, true)(struct!.setCommunity),
    set_extcommunity_rt: cdktf.listMapper(routerRoutemapRuleSetExtcommunityRtToTerraform, true)(struct!.setExtcommunityRt),
    set_extcommunity_soo: cdktf.listMapper(routerRoutemapRuleSetExtcommunitySooToTerraform, true)(struct!.setExtcommunitySoo),
  }
}


export function routerRoutemapRuleToHclTerraform(struct?: RouterRoutemapRule | cdktf.IResolvable): any {
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
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_as_path: {
      value: cdktf.stringToHclTerraform(struct!.matchAsPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_community: {
      value: cdktf.stringToHclTerraform(struct!.matchCommunity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_community_exact: {
      value: cdktf.stringToHclTerraform(struct!.matchCommunityExact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_extcommunity: {
      value: cdktf.stringToHclTerraform(struct!.matchExtcommunity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_extcommunity_exact: {
      value: cdktf.stringToHclTerraform(struct!.matchExtcommunityExact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_flags: {
      value: cdktf.numberToHclTerraform(struct!.matchFlags),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_interface: {
      value: cdktf.stringToHclTerraform(struct!.matchInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_ip6_address: {
      value: cdktf.stringToHclTerraform(struct!.matchIp6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_ip6_nexthop: {
      value: cdktf.stringToHclTerraform(struct!.matchIp6Nexthop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.matchIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_ip_nexthop: {
      value: cdktf.stringToHclTerraform(struct!.matchIpNexthop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_metric: {
      value: cdktf.numberToHclTerraform(struct!.matchMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_origin: {
      value: cdktf.stringToHclTerraform(struct!.matchOrigin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_route_type: {
      value: cdktf.stringToHclTerraform(struct!.matchRouteType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_tag: {
      value: cdktf.numberToHclTerraform(struct!.matchTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_vrf: {
      value: cdktf.numberToHclTerraform(struct!.matchVrf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_aggregator_as: {
      value: cdktf.numberToHclTerraform(struct!.setAggregatorAs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_aggregator_ip: {
      value: cdktf.stringToHclTerraform(struct!.setAggregatorIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_aspath_action: {
      value: cdktf.stringToHclTerraform(struct!.setAspathAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_atomic_aggregate: {
      value: cdktf.stringToHclTerraform(struct!.setAtomicAggregate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_community_additive: {
      value: cdktf.stringToHclTerraform(struct!.setCommunityAdditive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_community_delete: {
      value: cdktf.stringToHclTerraform(struct!.setCommunityDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_dampening_max_suppress: {
      value: cdktf.numberToHclTerraform(struct!.setDampeningMaxSuppress),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_dampening_reachability_half_life: {
      value: cdktf.numberToHclTerraform(struct!.setDampeningReachabilityHalfLife),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_dampening_reuse: {
      value: cdktf.numberToHclTerraform(struct!.setDampeningReuse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_dampening_suppress: {
      value: cdktf.numberToHclTerraform(struct!.setDampeningSuppress),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_dampening_unreachability_half_life: {
      value: cdktf.numberToHclTerraform(struct!.setDampeningUnreachabilityHalfLife),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_flags: {
      value: cdktf.numberToHclTerraform(struct!.setFlags),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_ip6_nexthop: {
      value: cdktf.stringToHclTerraform(struct!.setIp6Nexthop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_ip6_nexthop_local: {
      value: cdktf.stringToHclTerraform(struct!.setIp6NexthopLocal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_ip_nexthop: {
      value: cdktf.stringToHclTerraform(struct!.setIpNexthop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_ip_prefsrc: {
      value: cdktf.stringToHclTerraform(struct!.setIpPrefsrc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_local_preference: {
      value: cdktf.numberToHclTerraform(struct!.setLocalPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_metric: {
      value: cdktf.numberToHclTerraform(struct!.setMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_metric_type: {
      value: cdktf.stringToHclTerraform(struct!.setMetricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_origin: {
      value: cdktf.stringToHclTerraform(struct!.setOrigin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_originator_id: {
      value: cdktf.stringToHclTerraform(struct!.setOriginatorId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_priority: {
      value: cdktf.numberToHclTerraform(struct!.setPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_route_tag: {
      value: cdktf.numberToHclTerraform(struct!.setRouteTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_tag: {
      value: cdktf.numberToHclTerraform(struct!.setTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_vpnv4_nexthop: {
      value: cdktf.stringToHclTerraform(struct!.setVpnv4Nexthop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_vpnv6_nexthop: {
      value: cdktf.stringToHclTerraform(struct!.setVpnv6Nexthop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_vpnv6_nexthop_local: {
      value: cdktf.stringToHclTerraform(struct!.setVpnv6NexthopLocal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_weight: {
      value: cdktf.numberToHclTerraform(struct!.setWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_aspath: {
      value: cdktf.listMapperHcl(routerRoutemapRuleSetAspathToHclTerraform, true)(struct!.setAspath),
      isBlock: true,
      type: "set",
      storageClassType: "RouterRoutemapRuleSetAspathList",
    },
    set_community: {
      value: cdktf.listMapperHcl(routerRoutemapRuleSetCommunityToHclTerraform, true)(struct!.setCommunity),
      isBlock: true,
      type: "set",
      storageClassType: "RouterRoutemapRuleSetCommunityList",
    },
    set_extcommunity_rt: {
      value: cdktf.listMapperHcl(routerRoutemapRuleSetExtcommunityRtToHclTerraform, true)(struct!.setExtcommunityRt),
      isBlock: true,
      type: "set",
      storageClassType: "RouterRoutemapRuleSetExtcommunityRtList",
    },
    set_extcommunity_soo: {
      value: cdktf.listMapperHcl(routerRoutemapRuleSetExtcommunitySooToHclTerraform, true)(struct!.setExtcommunitySoo),
      isBlock: true,
      type: "set",
      storageClassType: "RouterRoutemapRuleSetExtcommunitySooList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterRoutemapRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterRoutemapRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._matchAsPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAsPath = this._matchAsPath;
    }
    if (this._matchCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCommunity = this._matchCommunity;
    }
    if (this._matchCommunityExact !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCommunityExact = this._matchCommunityExact;
    }
    if (this._matchExtcommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExtcommunity = this._matchExtcommunity;
    }
    if (this._matchExtcommunityExact !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExtcommunityExact = this._matchExtcommunityExact;
    }
    if (this._matchFlags !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFlags = this._matchFlags;
    }
    if (this._matchInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchInterface = this._matchInterface;
    }
    if (this._matchIp6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchIp6Address = this._matchIp6Address;
    }
    if (this._matchIp6Nexthop !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchIp6Nexthop = this._matchIp6Nexthop;
    }
    if (this._matchIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchIpAddress = this._matchIpAddress;
    }
    if (this._matchIpNexthop !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchIpNexthop = this._matchIpNexthop;
    }
    if (this._matchMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchMetric = this._matchMetric;
    }
    if (this._matchOrigin !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOrigin = this._matchOrigin;
    }
    if (this._matchRouteType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRouteType = this._matchRouteType;
    }
    if (this._matchTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchTag = this._matchTag;
    }
    if (this._matchVrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchVrf = this._matchVrf;
    }
    if (this._setAggregatorAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.setAggregatorAs = this._setAggregatorAs;
    }
    if (this._setAggregatorIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.setAggregatorIp = this._setAggregatorIp;
    }
    if (this._setAspathAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.setAspathAction = this._setAspathAction;
    }
    if (this._setAtomicAggregate !== undefined) {
      hasAnyValues = true;
      internalValueResult.setAtomicAggregate = this._setAtomicAggregate;
    }
    if (this._setCommunityAdditive !== undefined) {
      hasAnyValues = true;
      internalValueResult.setCommunityAdditive = this._setCommunityAdditive;
    }
    if (this._setCommunityDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.setCommunityDelete = this._setCommunityDelete;
    }
    if (this._setDampeningMaxSuppress !== undefined) {
      hasAnyValues = true;
      internalValueResult.setDampeningMaxSuppress = this._setDampeningMaxSuppress;
    }
    if (this._setDampeningReachabilityHalfLife !== undefined) {
      hasAnyValues = true;
      internalValueResult.setDampeningReachabilityHalfLife = this._setDampeningReachabilityHalfLife;
    }
    if (this._setDampeningReuse !== undefined) {
      hasAnyValues = true;
      internalValueResult.setDampeningReuse = this._setDampeningReuse;
    }
    if (this._setDampeningSuppress !== undefined) {
      hasAnyValues = true;
      internalValueResult.setDampeningSuppress = this._setDampeningSuppress;
    }
    if (this._setDampeningUnreachabilityHalfLife !== undefined) {
      hasAnyValues = true;
      internalValueResult.setDampeningUnreachabilityHalfLife = this._setDampeningUnreachabilityHalfLife;
    }
    if (this._setFlags !== undefined) {
      hasAnyValues = true;
      internalValueResult.setFlags = this._setFlags;
    }
    if (this._setIp6Nexthop !== undefined) {
      hasAnyValues = true;
      internalValueResult.setIp6Nexthop = this._setIp6Nexthop;
    }
    if (this._setIp6NexthopLocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.setIp6NexthopLocal = this._setIp6NexthopLocal;
    }
    if (this._setIpNexthop !== undefined) {
      hasAnyValues = true;
      internalValueResult.setIpNexthop = this._setIpNexthop;
    }
    if (this._setIpPrefsrc !== undefined) {
      hasAnyValues = true;
      internalValueResult.setIpPrefsrc = this._setIpPrefsrc;
    }
    if (this._setLocalPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.setLocalPreference = this._setLocalPreference;
    }
    if (this._setMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.setMetric = this._setMetric;
    }
    if (this._setMetricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.setMetricType = this._setMetricType;
    }
    if (this._setOrigin !== undefined) {
      hasAnyValues = true;
      internalValueResult.setOrigin = this._setOrigin;
    }
    if (this._setOriginatorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.setOriginatorId = this._setOriginatorId;
    }
    if (this._setPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.setPriority = this._setPriority;
    }
    if (this._setRouteTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.setRouteTag = this._setRouteTag;
    }
    if (this._setTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.setTag = this._setTag;
    }
    if (this._setVpnv4Nexthop !== undefined) {
      hasAnyValues = true;
      internalValueResult.setVpnv4Nexthop = this._setVpnv4Nexthop;
    }
    if (this._setVpnv6Nexthop !== undefined) {
      hasAnyValues = true;
      internalValueResult.setVpnv6Nexthop = this._setVpnv6Nexthop;
    }
    if (this._setVpnv6NexthopLocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.setVpnv6NexthopLocal = this._setVpnv6NexthopLocal;
    }
    if (this._setWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.setWeight = this._setWeight;
    }
    if (this._setAspath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setAspath = this._setAspath?.internalValue;
    }
    if (this._setCommunity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setCommunity = this._setCommunity?.internalValue;
    }
    if (this._setExtcommunityRt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setExtcommunityRt = this._setExtcommunityRt?.internalValue;
    }
    if (this._setExtcommunitySoo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setExtcommunitySoo = this._setExtcommunitySoo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterRoutemapRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._id = undefined;
      this._matchAsPath = undefined;
      this._matchCommunity = undefined;
      this._matchCommunityExact = undefined;
      this._matchExtcommunity = undefined;
      this._matchExtcommunityExact = undefined;
      this._matchFlags = undefined;
      this._matchInterface = undefined;
      this._matchIp6Address = undefined;
      this._matchIp6Nexthop = undefined;
      this._matchIpAddress = undefined;
      this._matchIpNexthop = undefined;
      this._matchMetric = undefined;
      this._matchOrigin = undefined;
      this._matchRouteType = undefined;
      this._matchTag = undefined;
      this._matchVrf = undefined;
      this._setAggregatorAs = undefined;
      this._setAggregatorIp = undefined;
      this._setAspathAction = undefined;
      this._setAtomicAggregate = undefined;
      this._setCommunityAdditive = undefined;
      this._setCommunityDelete = undefined;
      this._setDampeningMaxSuppress = undefined;
      this._setDampeningReachabilityHalfLife = undefined;
      this._setDampeningReuse = undefined;
      this._setDampeningSuppress = undefined;
      this._setDampeningUnreachabilityHalfLife = undefined;
      this._setFlags = undefined;
      this._setIp6Nexthop = undefined;
      this._setIp6NexthopLocal = undefined;
      this._setIpNexthop = undefined;
      this._setIpPrefsrc = undefined;
      this._setLocalPreference = undefined;
      this._setMetric = undefined;
      this._setMetricType = undefined;
      this._setOrigin = undefined;
      this._setOriginatorId = undefined;
      this._setPriority = undefined;
      this._setRouteTag = undefined;
      this._setTag = undefined;
      this._setVpnv4Nexthop = undefined;
      this._setVpnv6Nexthop = undefined;
      this._setVpnv6NexthopLocal = undefined;
      this._setWeight = undefined;
      this._setAspath.internalValue = undefined;
      this._setCommunity.internalValue = undefined;
      this._setExtcommunityRt.internalValue = undefined;
      this._setExtcommunitySoo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._id = value.id;
      this._matchAsPath = value.matchAsPath;
      this._matchCommunity = value.matchCommunity;
      this._matchCommunityExact = value.matchCommunityExact;
      this._matchExtcommunity = value.matchExtcommunity;
      this._matchExtcommunityExact = value.matchExtcommunityExact;
      this._matchFlags = value.matchFlags;
      this._matchInterface = value.matchInterface;
      this._matchIp6Address = value.matchIp6Address;
      this._matchIp6Nexthop = value.matchIp6Nexthop;
      this._matchIpAddress = value.matchIpAddress;
      this._matchIpNexthop = value.matchIpNexthop;
      this._matchMetric = value.matchMetric;
      this._matchOrigin = value.matchOrigin;
      this._matchRouteType = value.matchRouteType;
      this._matchTag = value.matchTag;
      this._matchVrf = value.matchVrf;
      this._setAggregatorAs = value.setAggregatorAs;
      this._setAggregatorIp = value.setAggregatorIp;
      this._setAspathAction = value.setAspathAction;
      this._setAtomicAggregate = value.setAtomicAggregate;
      this._setCommunityAdditive = value.setCommunityAdditive;
      this._setCommunityDelete = value.setCommunityDelete;
      this._setDampeningMaxSuppress = value.setDampeningMaxSuppress;
      this._setDampeningReachabilityHalfLife = value.setDampeningReachabilityHalfLife;
      this._setDampeningReuse = value.setDampeningReuse;
      this._setDampeningSuppress = value.setDampeningSuppress;
      this._setDampeningUnreachabilityHalfLife = value.setDampeningUnreachabilityHalfLife;
      this._setFlags = value.setFlags;
      this._setIp6Nexthop = value.setIp6Nexthop;
      this._setIp6NexthopLocal = value.setIp6NexthopLocal;
      this._setIpNexthop = value.setIpNexthop;
      this._setIpPrefsrc = value.setIpPrefsrc;
      this._setLocalPreference = value.setLocalPreference;
      this._setMetric = value.setMetric;
      this._setMetricType = value.setMetricType;
      this._setOrigin = value.setOrigin;
      this._setOriginatorId = value.setOriginatorId;
      this._setPriority = value.setPriority;
      this._setRouteTag = value.setRouteTag;
      this._setTag = value.setTag;
      this._setVpnv4Nexthop = value.setVpnv4Nexthop;
      this._setVpnv6Nexthop = value.setVpnv6Nexthop;
      this._setVpnv6NexthopLocal = value.setVpnv6NexthopLocal;
      this._setWeight = value.setWeight;
      this._setAspath.internalValue = value.setAspath;
      this._setCommunity.internalValue = value.setCommunity;
      this._setExtcommunityRt.internalValue = value.setExtcommunityRt;
      this._setExtcommunitySoo.internalValue = value.setExtcommunitySoo;
    }
  }

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

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
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

  // match_community_exact - computed: true, optional: true, required: false
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

  // match_flags - computed: true, optional: true, required: false
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
  private _matchMetric?: number; 
  public get matchMetric() {
    return this.getNumberAttribute('match_metric');
  }
  public set matchMetric(value: number) {
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
  private _matchTag?: number; 
  public get matchTag() {
    return this.getNumberAttribute('match_tag');
  }
  public set matchTag(value: number) {
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

  // set_community_additive - computed: true, optional: true, required: false
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

  // set_flags - computed: true, optional: true, required: false
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

  // set_ip6_nexthop - computed: false, optional: true, required: false
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

  // set_ip6_nexthop_local - computed: false, optional: true, required: false
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

  // set_ip_nexthop - computed: false, optional: true, required: false
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
  private _setLocalPreference?: number; 
  public get setLocalPreference() {
    return this.getNumberAttribute('set_local_preference');
  }
  public set setLocalPreference(value: number) {
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
  private _setMetric?: number; 
  public get setMetric() {
    return this.getNumberAttribute('set_metric');
  }
  public set setMetric(value: number) {
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

  // set_originator_id - computed: false, optional: true, required: false
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
  private _setRouteTag?: number; 
  public get setRouteTag() {
    return this.getNumberAttribute('set_route_tag');
  }
  public set setRouteTag(value: number) {
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
  private _setTag?: number; 
  public get setTag() {
    return this.getNumberAttribute('set_tag');
  }
  public set setTag(value: number) {
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
  private _setWeight?: number; 
  public get setWeight() {
    return this.getNumberAttribute('set_weight');
  }
  public set setWeight(value: number) {
    this._setWeight = value;
  }
  public resetSetWeight() {
    this._setWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setWeightInput() {
    return this._setWeight;
  }

  // set_aspath - computed: false, optional: true, required: false
  private _setAspath = new RouterRoutemapRuleSetAspathList(this, "set_aspath", true);
  public get setAspath() {
    return this._setAspath;
  }
  public putSetAspath(value: RouterRoutemapRuleSetAspath[] | cdktf.IResolvable) {
    this._setAspath.internalValue = value;
  }
  public resetSetAspath() {
    this._setAspath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setAspathInput() {
    return this._setAspath.internalValue;
  }

  // set_community - computed: false, optional: true, required: false
  private _setCommunity = new RouterRoutemapRuleSetCommunityList(this, "set_community", true);
  public get setCommunity() {
    return this._setCommunity;
  }
  public putSetCommunity(value: RouterRoutemapRuleSetCommunity[] | cdktf.IResolvable) {
    this._setCommunity.internalValue = value;
  }
  public resetSetCommunity() {
    this._setCommunity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCommunityInput() {
    return this._setCommunity.internalValue;
  }

  // set_extcommunity_rt - computed: false, optional: true, required: false
  private _setExtcommunityRt = new RouterRoutemapRuleSetExtcommunityRtList(this, "set_extcommunity_rt", true);
  public get setExtcommunityRt() {
    return this._setExtcommunityRt;
  }
  public putSetExtcommunityRt(value: RouterRoutemapRuleSetExtcommunityRt[] | cdktf.IResolvable) {
    this._setExtcommunityRt.internalValue = value;
  }
  public resetSetExtcommunityRt() {
    this._setExtcommunityRt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setExtcommunityRtInput() {
    return this._setExtcommunityRt.internalValue;
  }

  // set_extcommunity_soo - computed: false, optional: true, required: false
  private _setExtcommunitySoo = new RouterRoutemapRuleSetExtcommunitySooList(this, "set_extcommunity_soo", true);
  public get setExtcommunitySoo() {
    return this._setExtcommunitySoo;
  }
  public putSetExtcommunitySoo(value: RouterRoutemapRuleSetExtcommunitySoo[] | cdktf.IResolvable) {
    this._setExtcommunitySoo.internalValue = value;
  }
  public resetSetExtcommunitySoo() {
    this._setExtcommunitySoo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setExtcommunitySooInput() {
    return this._setExtcommunitySoo.internalValue;
  }
}

export class RouterRoutemapRuleList extends cdktf.ComplexList {
  public internalValue? : RouterRoutemapRule[] | cdktf.IResolvable

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
  public get(index: number): RouterRoutemapRuleOutputReference {
    return new RouterRoutemapRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap fortios_router_routemap}
*/
export class RouterRoutemap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_router_routemap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterRoutemap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterRoutemap to import
  * @param importFromId The id of the existing RouterRoutemap that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterRoutemap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_router_routemap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_routemap fortios_router_routemap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterRoutemapConfig
  */
  public constructor(scope: Construct, id: string, config: RouterRoutemapConfig) {
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
    this._comments = config.comments;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._name = config.name;
    this._vdomparam = config.vdomparam;
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // vdomparam - computed: true, optional: true, required: false
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

  // rule - computed: false, optional: true, required: false
  private _rule = new RouterRoutemapRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: RouterRoutemapRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comments: cdktf.stringToTerraform(this._comments),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      rule: cdktf.listMapper(routerRoutemapRuleToTerraform, true)(this._rule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      rule: {
        value: cdktf.listMapperHcl(routerRoutemapRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterRoutemapRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
