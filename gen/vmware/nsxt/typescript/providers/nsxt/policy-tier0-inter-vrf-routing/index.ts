// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_inter_vrf_routing
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyTier0InterVrfRoutingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_inter_vrf_routing#description PolicyTier0InterVrfRouting#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_inter_vrf_routing#display_name PolicyTier0InterVrfRouting#display_name}
  */
  readonly displayName: string;
  /**
  * Policy path for the Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_inter_vrf_routing#gateway_path PolicyTier0InterVrfRouting#gateway_path}
  */
  readonly gatewayPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_inter_vrf_routing#id PolicyTier0InterVrfRouting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_inter_vrf_routing#nsx_id PolicyTier0InterVrfRouting#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * Policy path to tier0/vrf belongs to the same parent tier0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_inter_vrf_routing#target_path PolicyTier0InterVrfRouting#target_path}
  */
  readonly targetPath: string;
  /**
  * bgp_route_leaking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_inter_vrf_routing#bgp_route_leaking PolicyTier0InterVrfRouting#bgp_route_leaking}
  */
  readonly bgpRouteLeaking?: PolicyTier0InterVrfRoutingBgpRouteLeaking[] | cdktf.IResolvable;
  /**
  * static_route_advertisement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_inter_vrf_routing#static_route_advertisement PolicyTier0InterVrfRouting#static_route_advertisement}
  */
  readonly staticRouteAdvertisement?: PolicyTier0InterVrfRoutingStaticRouteAdvertisement;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_inter_vrf_routing#tag PolicyTier0InterVrfRouting#tag}
  */
  readonly tag?: PolicyTier0InterVrfRoutingTag[] | cdktf.IResolvable;
}
export interface PolicyTier0InterVrfRoutingBgpRouteLeaking {
  /**
  * Address family type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_inter_vrf_routing#address_family PolicyTier0InterVrfRouting#address_family}
  */
  readonly addressFamily?: string;
  /**
  * route map path for IN direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_inter_vrf_routing#in_filter PolicyTier0InterVrfRouting#in_filter}
  */
  readonly inFilter?: string[];
  /**
  * route map path for OUT direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_inter_vrf_routing#out_filter PolicyTier0InterVrfRouting#out_filter}
  */
  readonly outFilter?: string[];
}

export function policyTier0InterVrfRoutingBgpRouteLeakingToTerraform(struct?: PolicyTier0InterVrfRoutingBgpRouteLeaking | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_family: cdktf.stringToTerraform(struct!.addressFamily),
    in_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inFilter),
    out_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.outFilter),
  }
}


export function policyTier0InterVrfRoutingBgpRouteLeakingToHclTerraform(struct?: PolicyTier0InterVrfRoutingBgpRouteLeaking | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_family: {
      value: cdktf.stringToHclTerraform(struct!.addressFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    in_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inFilter),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    out_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.outFilter),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyTier0InterVrfRoutingBgpRouteLeakingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyTier0InterVrfRoutingBgpRouteLeaking | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressFamily = this._addressFamily;
    }
    if (this._inFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.inFilter = this._inFilter;
    }
    if (this._outFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.outFilter = this._outFilter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyTier0InterVrfRoutingBgpRouteLeaking | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressFamily = undefined;
      this._inFilter = undefined;
      this._outFilter = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressFamily = value.addressFamily;
      this._inFilter = value.inFilter;
      this._outFilter = value.outFilter;
    }
  }

  // address_family - computed: false, optional: true, required: false
  private _addressFamily?: string; 
  public get addressFamily() {
    return this.getStringAttribute('address_family');
  }
  public set addressFamily(value: string) {
    this._addressFamily = value;
  }
  public resetAddressFamily() {
    this._addressFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFamilyInput() {
    return this._addressFamily;
  }

  // in_filter - computed: false, optional: true, required: false
  private _inFilter?: string[]; 
  public get inFilter() {
    return this.getListAttribute('in_filter');
  }
  public set inFilter(value: string[]) {
    this._inFilter = value;
  }
  public resetInFilter() {
    this._inFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inFilterInput() {
    return this._inFilter;
  }

  // out_filter - computed: false, optional: true, required: false
  private _outFilter?: string[]; 
  public get outFilter() {
    return this.getListAttribute('out_filter');
  }
  public set outFilter(value: string[]) {
    this._outFilter = value;
  }
  public resetOutFilter() {
    this._outFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outFilterInput() {
    return this._outFilter;
  }
}

export class PolicyTier0InterVrfRoutingBgpRouteLeakingList extends cdktf.ComplexList {
  public internalValue? : PolicyTier0InterVrfRoutingBgpRouteLeaking[] | cdktf.IResolvable

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
  public get(index: number): PolicyTier0InterVrfRoutingBgpRouteLeakingOutputReference {
    return new PolicyTier0InterVrfRoutingBgpRouteLeakingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyTier0InterVrfRoutingStaticRouteAdvertisementAdvertisementRule {
  /**
  * Action to advertise routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_inter_vrf_routing#action PolicyTier0InterVrfRouting#action}
  */
  readonly action?: string;
  /**
  * Display name for rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_inter_vrf_routing#name PolicyTier0InterVrfRouting#name}
  */
  readonly name?: string;
  /**
  * Prefix operator to match subnets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_inter_vrf_routing#prefix_operator PolicyTier0InterVrfRouting#prefix_operator}
  */
  readonly prefixOperator?: string;
  /**
  * Enable different types of route advertisements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_inter_vrf_routing#route_advertisement_types PolicyTier0InterVrfRouting#route_advertisement_types}
  */
  readonly routeAdvertisementTypes?: string[];
  /**
  * Network CIDRs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_inter_vrf_routing#subnets PolicyTier0InterVrfRouting#subnets}
  */
  readonly subnets?: string[];
}

export function policyTier0InterVrfRoutingStaticRouteAdvertisementAdvertisementRuleToTerraform(struct?: PolicyTier0InterVrfRoutingStaticRouteAdvertisementAdvertisementRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
    prefix_operator: cdktf.stringToTerraform(struct!.prefixOperator),
    route_advertisement_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeAdvertisementTypes),
    subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnets),
  }
}


export function policyTier0InterVrfRoutingStaticRouteAdvertisementAdvertisementRuleToHclTerraform(struct?: PolicyTier0InterVrfRoutingStaticRouteAdvertisementAdvertisementRule | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_operator: {
      value: cdktf.stringToHclTerraform(struct!.prefixOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_advertisement_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeAdvertisementTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyTier0InterVrfRoutingStaticRouteAdvertisementAdvertisementRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyTier0InterVrfRoutingStaticRouteAdvertisementAdvertisementRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._prefixOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixOperator = this._prefixOperator;
    }
    if (this._routeAdvertisementTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeAdvertisementTypes = this._routeAdvertisementTypes;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyTier0InterVrfRoutingStaticRouteAdvertisementAdvertisementRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._name = undefined;
      this._prefixOperator = undefined;
      this._routeAdvertisementTypes = undefined;
      this._subnets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._name = value.name;
      this._prefixOperator = value.prefixOperator;
      this._routeAdvertisementTypes = value.routeAdvertisementTypes;
      this._subnets = value.subnets;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // prefix_operator - computed: false, optional: true, required: false
  private _prefixOperator?: string; 
  public get prefixOperator() {
    return this.getStringAttribute('prefix_operator');
  }
  public set prefixOperator(value: string) {
    this._prefixOperator = value;
  }
  public resetPrefixOperator() {
    this._prefixOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixOperatorInput() {
    return this._prefixOperator;
  }

  // route_advertisement_types - computed: false, optional: true, required: false
  private _routeAdvertisementTypes?: string[]; 
  public get routeAdvertisementTypes() {
    return this.getListAttribute('route_advertisement_types');
  }
  public set routeAdvertisementTypes(value: string[]) {
    this._routeAdvertisementTypes = value;
  }
  public resetRouteAdvertisementTypes() {
    this._routeAdvertisementTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeAdvertisementTypesInput() {
    return this._routeAdvertisementTypes;
  }

  // subnets - computed: false, optional: true, required: false
  private _subnets?: string[]; 
  public get subnets() {
    return this.getListAttribute('subnets');
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  public resetSubnets() {
    this._subnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }
}

export class PolicyTier0InterVrfRoutingStaticRouteAdvertisementAdvertisementRuleList extends cdktf.ComplexList {
  public internalValue? : PolicyTier0InterVrfRoutingStaticRouteAdvertisementAdvertisementRule[] | cdktf.IResolvable

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
  public get(index: number): PolicyTier0InterVrfRoutingStaticRouteAdvertisementAdvertisementRuleOutputReference {
    return new PolicyTier0InterVrfRoutingStaticRouteAdvertisementAdvertisementRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyTier0InterVrfRoutingStaticRouteAdvertisement {
  /**
  * Paths of ordered Prefix list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_inter_vrf_routing#in_filter_prefix_list PolicyTier0InterVrfRouting#in_filter_prefix_list}
  */
  readonly inFilterPrefixList?: string[];
  /**
  * advertisement_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_inter_vrf_routing#advertisement_rule PolicyTier0InterVrfRouting#advertisement_rule}
  */
  readonly advertisementRule?: PolicyTier0InterVrfRoutingStaticRouteAdvertisementAdvertisementRule[] | cdktf.IResolvable;
}

export function policyTier0InterVrfRoutingStaticRouteAdvertisementToTerraform(struct?: PolicyTier0InterVrfRoutingStaticRouteAdvertisementOutputReference | PolicyTier0InterVrfRoutingStaticRouteAdvertisement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    in_filter_prefix_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inFilterPrefixList),
    advertisement_rule: cdktf.listMapper(policyTier0InterVrfRoutingStaticRouteAdvertisementAdvertisementRuleToTerraform, true)(struct!.advertisementRule),
  }
}


export function policyTier0InterVrfRoutingStaticRouteAdvertisementToHclTerraform(struct?: PolicyTier0InterVrfRoutingStaticRouteAdvertisementOutputReference | PolicyTier0InterVrfRoutingStaticRouteAdvertisement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    in_filter_prefix_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inFilterPrefixList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    advertisement_rule: {
      value: cdktf.listMapperHcl(policyTier0InterVrfRoutingStaticRouteAdvertisementAdvertisementRuleToHclTerraform, true)(struct!.advertisementRule),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyTier0InterVrfRoutingStaticRouteAdvertisementAdvertisementRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyTier0InterVrfRoutingStaticRouteAdvertisementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyTier0InterVrfRoutingStaticRouteAdvertisement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inFilterPrefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.inFilterPrefixList = this._inFilterPrefixList;
    }
    if (this._advertisementRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertisementRule = this._advertisementRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyTier0InterVrfRoutingStaticRouteAdvertisement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inFilterPrefixList = undefined;
      this._advertisementRule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inFilterPrefixList = value.inFilterPrefixList;
      this._advertisementRule.internalValue = value.advertisementRule;
    }
  }

  // in_filter_prefix_list - computed: false, optional: true, required: false
  private _inFilterPrefixList?: string[]; 
  public get inFilterPrefixList() {
    return this.getListAttribute('in_filter_prefix_list');
  }
  public set inFilterPrefixList(value: string[]) {
    this._inFilterPrefixList = value;
  }
  public resetInFilterPrefixList() {
    this._inFilterPrefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inFilterPrefixListInput() {
    return this._inFilterPrefixList;
  }

  // advertisement_rule - computed: false, optional: true, required: false
  private _advertisementRule = new PolicyTier0InterVrfRoutingStaticRouteAdvertisementAdvertisementRuleList(this, "advertisement_rule", false);
  public get advertisementRule() {
    return this._advertisementRule;
  }
  public putAdvertisementRule(value: PolicyTier0InterVrfRoutingStaticRouteAdvertisementAdvertisementRule[] | cdktf.IResolvable) {
    this._advertisementRule.internalValue = value;
  }
  public resetAdvertisementRule() {
    this._advertisementRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisementRuleInput() {
    return this._advertisementRule.internalValue;
  }
}
export interface PolicyTier0InterVrfRoutingTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_inter_vrf_routing#scope PolicyTier0InterVrfRouting#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_inter_vrf_routing#tag PolicyTier0InterVrfRouting#tag}
  */
  readonly tag?: string;
}

export function policyTier0InterVrfRoutingTagToTerraform(struct?: PolicyTier0InterVrfRoutingTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyTier0InterVrfRoutingTagToHclTerraform(struct?: PolicyTier0InterVrfRoutingTag | cdktf.IResolvable): any {
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

export class PolicyTier0InterVrfRoutingTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyTier0InterVrfRoutingTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyTier0InterVrfRoutingTag | cdktf.IResolvable | undefined) {
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

export class PolicyTier0InterVrfRoutingTagList extends cdktf.ComplexList {
  public internalValue? : PolicyTier0InterVrfRoutingTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyTier0InterVrfRoutingTagOutputReference {
    return new PolicyTier0InterVrfRoutingTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_inter_vrf_routing nsxt_policy_tier0_inter_vrf_routing}
*/
export class PolicyTier0InterVrfRouting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_tier0_inter_vrf_routing";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyTier0InterVrfRouting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyTier0InterVrfRouting to import
  * @param importFromId The id of the existing PolicyTier0InterVrfRouting that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_inter_vrf_routing#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyTier0InterVrfRouting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_tier0_inter_vrf_routing", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_inter_vrf_routing nsxt_policy_tier0_inter_vrf_routing} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyTier0InterVrfRoutingConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyTier0InterVrfRoutingConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_tier0_inter_vrf_routing',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0',
        providerVersionConstraint: '3.10.0'
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
    this._targetPath = config.targetPath;
    this._bgpRouteLeaking.internalValue = config.bgpRouteLeaking;
    this._staticRouteAdvertisement.internalValue = config.staticRouteAdvertisement;
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

  // target_path - computed: false, optional: false, required: true
  private _targetPath?: string; 
  public get targetPath() {
    return this.getStringAttribute('target_path');
  }
  public set targetPath(value: string) {
    this._targetPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPathInput() {
    return this._targetPath;
  }

  // bgp_route_leaking - computed: false, optional: true, required: false
  private _bgpRouteLeaking = new PolicyTier0InterVrfRoutingBgpRouteLeakingList(this, "bgp_route_leaking", false);
  public get bgpRouteLeaking() {
    return this._bgpRouteLeaking;
  }
  public putBgpRouteLeaking(value: PolicyTier0InterVrfRoutingBgpRouteLeaking[] | cdktf.IResolvable) {
    this._bgpRouteLeaking.internalValue = value;
  }
  public resetBgpRouteLeaking() {
    this._bgpRouteLeaking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpRouteLeakingInput() {
    return this._bgpRouteLeaking.internalValue;
  }

  // static_route_advertisement - computed: false, optional: true, required: false
  private _staticRouteAdvertisement = new PolicyTier0InterVrfRoutingStaticRouteAdvertisementOutputReference(this, "static_route_advertisement");
  public get staticRouteAdvertisement() {
    return this._staticRouteAdvertisement;
  }
  public putStaticRouteAdvertisement(value: PolicyTier0InterVrfRoutingStaticRouteAdvertisement) {
    this._staticRouteAdvertisement.internalValue = value;
  }
  public resetStaticRouteAdvertisement() {
    this._staticRouteAdvertisement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRouteAdvertisementInput() {
    return this._staticRouteAdvertisement.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicyTier0InterVrfRoutingTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyTier0InterVrfRoutingTag[] | cdktf.IResolvable) {
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
      target_path: cdktf.stringToTerraform(this._targetPath),
      bgp_route_leaking: cdktf.listMapper(policyTier0InterVrfRoutingBgpRouteLeakingToTerraform, true)(this._bgpRouteLeaking.internalValue),
      static_route_advertisement: policyTier0InterVrfRoutingStaticRouteAdvertisementToTerraform(this._staticRouteAdvertisement.internalValue),
      tag: cdktf.listMapper(policyTier0InterVrfRoutingTagToTerraform, true)(this._tag.internalValue),
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
      target_path: {
        value: cdktf.stringToHclTerraform(this._targetPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_route_leaking: {
        value: cdktf.listMapperHcl(policyTier0InterVrfRoutingBgpRouteLeakingToHclTerraform, true)(this._bgpRouteLeaking.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyTier0InterVrfRoutingBgpRouteLeakingList",
      },
      static_route_advertisement: {
        value: policyTier0InterVrfRoutingStaticRouteAdvertisementToHclTerraform(this._staticRouteAdvertisement.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyTier0InterVrfRoutingStaticRouteAdvertisementList",
      },
      tag: {
        value: cdktf.listMapperHcl(policyTier0InterVrfRoutingTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyTier0InterVrfRoutingTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
