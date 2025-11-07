// https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_routing_policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApstraDatacenterRoutingPoliciesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apstra Blueprint to search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_routing_policies#blueprint_id DataApstraDatacenterRoutingPolicies#blueprint_id}
  */
  readonly blueprintId: string;
  /**
  * List of filters used to select only desired node IDs. For a nodeto match a filter, all specified attributes must match (each attribute within a filter is AND-ed together). The returned node IDs represent the nodes matched by all of the filters together (filters are OR-ed together).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_routing_policies#filters DataApstraDatacenterRoutingPolicies#filters}
  */
  readonly filters?: DataApstraDatacenterRoutingPoliciesFilters[] | cdktf.IResolvable;
}
export interface DataApstraDatacenterRoutingPoliciesFiltersExportPolicy {
  /**
  * Exports all virtual networks (VLANs) that have L3 addresses within a routing zone (VRF).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_routing_policies#export_l2_edge_subnets DataApstraDatacenterRoutingPolicies#export_l2_edge_subnets}
  */
  readonly exportL2EdgeSubnets?: boolean | cdktf.IResolvable;
  /**
  * Exports all leaf to L3 server links within a routing zone (VRF). This will be an empty list on a layer2 based blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_routing_policies#export_l3_edge_server_links DataApstraDatacenterRoutingPolicies#export_l3_edge_server_links}
  */
  readonly exportL3EdgeServerLinks?: boolean | cdktf.IResolvable;
  /**
  * Exports all loopbacks within a routing zone (VRF) across spine, leaf, and L3 servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_routing_policies#export_loopbacks DataApstraDatacenterRoutingPolicies#export_loopbacks}
  */
  readonly exportLoopbacks?: boolean | cdktf.IResolvable;
  /**
  * Exports all spine-supersine (fabric) links within the default routing zone (VRF)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_routing_policies#export_spine_leaf_links DataApstraDatacenterRoutingPolicies#export_spine_leaf_links}
  */
  readonly exportSpineLeafLinks?: boolean | cdktf.IResolvable;
  /**
  * Exports all spine-leaf (fabric) links within a VRF. EVPN routing zones do not have spine-leaf addressing, so this generated list may be empty. For routing zones of type Virtual L3 Fabric, subinterfaces between spine-leaf will be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_routing_policies#export_spine_superspine_links DataApstraDatacenterRoutingPolicies#export_spine_superspine_links}
  */
  readonly exportSpineSuperspineLinks?: boolean | cdktf.IResolvable;
  /**
  * Exports all subnets in a VRF associated with static routes from all fabric systems to external routers associated with this routing policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_routing_policies#export_static_routes DataApstraDatacenterRoutingPolicies#export_static_routes}
  */
  readonly exportStaticRoutes?: boolean | cdktf.IResolvable;
}

export function dataApstraDatacenterRoutingPoliciesFiltersExportPolicyToTerraform(struct?: DataApstraDatacenterRoutingPoliciesFiltersExportPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    export_l2_edge_subnets: cdktf.booleanToTerraform(struct!.exportL2EdgeSubnets),
    export_l3_edge_server_links: cdktf.booleanToTerraform(struct!.exportL3EdgeServerLinks),
    export_loopbacks: cdktf.booleanToTerraform(struct!.exportLoopbacks),
    export_spine_leaf_links: cdktf.booleanToTerraform(struct!.exportSpineLeafLinks),
    export_spine_superspine_links: cdktf.booleanToTerraform(struct!.exportSpineSuperspineLinks),
    export_static_routes: cdktf.booleanToTerraform(struct!.exportStaticRoutes),
  }
}


export function dataApstraDatacenterRoutingPoliciesFiltersExportPolicyToHclTerraform(struct?: DataApstraDatacenterRoutingPoliciesFiltersExportPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    export_l2_edge_subnets: {
      value: cdktf.booleanToHclTerraform(struct!.exportL2EdgeSubnets),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    export_l3_edge_server_links: {
      value: cdktf.booleanToHclTerraform(struct!.exportL3EdgeServerLinks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    export_loopbacks: {
      value: cdktf.booleanToHclTerraform(struct!.exportLoopbacks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    export_spine_leaf_links: {
      value: cdktf.booleanToHclTerraform(struct!.exportSpineLeafLinks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    export_spine_superspine_links: {
      value: cdktf.booleanToHclTerraform(struct!.exportSpineSuperspineLinks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    export_static_routes: {
      value: cdktf.booleanToHclTerraform(struct!.exportStaticRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataApstraDatacenterRoutingPoliciesFiltersExportPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataApstraDatacenterRoutingPoliciesFiltersExportPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exportL2EdgeSubnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportL2EdgeSubnets = this._exportL2EdgeSubnets;
    }
    if (this._exportL3EdgeServerLinks !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportL3EdgeServerLinks = this._exportL3EdgeServerLinks;
    }
    if (this._exportLoopbacks !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportLoopbacks = this._exportLoopbacks;
    }
    if (this._exportSpineLeafLinks !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportSpineLeafLinks = this._exportSpineLeafLinks;
    }
    if (this._exportSpineSuperspineLinks !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportSpineSuperspineLinks = this._exportSpineSuperspineLinks;
    }
    if (this._exportStaticRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportStaticRoutes = this._exportStaticRoutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraDatacenterRoutingPoliciesFiltersExportPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exportL2EdgeSubnets = undefined;
      this._exportL3EdgeServerLinks = undefined;
      this._exportLoopbacks = undefined;
      this._exportSpineLeafLinks = undefined;
      this._exportSpineSuperspineLinks = undefined;
      this._exportStaticRoutes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exportL2EdgeSubnets = value.exportL2EdgeSubnets;
      this._exportL3EdgeServerLinks = value.exportL3EdgeServerLinks;
      this._exportLoopbacks = value.exportLoopbacks;
      this._exportSpineLeafLinks = value.exportSpineLeafLinks;
      this._exportSpineSuperspineLinks = value.exportSpineSuperspineLinks;
      this._exportStaticRoutes = value.exportStaticRoutes;
    }
  }

  // export_l2_edge_subnets - computed: false, optional: true, required: false
  private _exportL2EdgeSubnets?: boolean | cdktf.IResolvable; 
  public get exportL2EdgeSubnets() {
    return this.getBooleanAttribute('export_l2_edge_subnets');
  }
  public set exportL2EdgeSubnets(value: boolean | cdktf.IResolvable) {
    this._exportL2EdgeSubnets = value;
  }
  public resetExportL2EdgeSubnets() {
    this._exportL2EdgeSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportL2EdgeSubnetsInput() {
    return this._exportL2EdgeSubnets;
  }

  // export_l3_edge_server_links - computed: false, optional: true, required: false
  private _exportL3EdgeServerLinks?: boolean | cdktf.IResolvable; 
  public get exportL3EdgeServerLinks() {
    return this.getBooleanAttribute('export_l3_edge_server_links');
  }
  public set exportL3EdgeServerLinks(value: boolean | cdktf.IResolvable) {
    this._exportL3EdgeServerLinks = value;
  }
  public resetExportL3EdgeServerLinks() {
    this._exportL3EdgeServerLinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportL3EdgeServerLinksInput() {
    return this._exportL3EdgeServerLinks;
  }

  // export_loopbacks - computed: false, optional: true, required: false
  private _exportLoopbacks?: boolean | cdktf.IResolvable; 
  public get exportLoopbacks() {
    return this.getBooleanAttribute('export_loopbacks');
  }
  public set exportLoopbacks(value: boolean | cdktf.IResolvable) {
    this._exportLoopbacks = value;
  }
  public resetExportLoopbacks() {
    this._exportLoopbacks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportLoopbacksInput() {
    return this._exportLoopbacks;
  }

  // export_spine_leaf_links - computed: false, optional: true, required: false
  private _exportSpineLeafLinks?: boolean | cdktf.IResolvable; 
  public get exportSpineLeafLinks() {
    return this.getBooleanAttribute('export_spine_leaf_links');
  }
  public set exportSpineLeafLinks(value: boolean | cdktf.IResolvable) {
    this._exportSpineLeafLinks = value;
  }
  public resetExportSpineLeafLinks() {
    this._exportSpineLeafLinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportSpineLeafLinksInput() {
    return this._exportSpineLeafLinks;
  }

  // export_spine_superspine_links - computed: false, optional: true, required: false
  private _exportSpineSuperspineLinks?: boolean | cdktf.IResolvable; 
  public get exportSpineSuperspineLinks() {
    return this.getBooleanAttribute('export_spine_superspine_links');
  }
  public set exportSpineSuperspineLinks(value: boolean | cdktf.IResolvable) {
    this._exportSpineSuperspineLinks = value;
  }
  public resetExportSpineSuperspineLinks() {
    this._exportSpineSuperspineLinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportSpineSuperspineLinksInput() {
    return this._exportSpineSuperspineLinks;
  }

  // export_static_routes - computed: false, optional: true, required: false
  private _exportStaticRoutes?: boolean | cdktf.IResolvable; 
  public get exportStaticRoutes() {
    return this.getBooleanAttribute('export_static_routes');
  }
  public set exportStaticRoutes(value: boolean | cdktf.IResolvable) {
    this._exportStaticRoutes = value;
  }
  public resetExportStaticRoutes() {
    this._exportStaticRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportStaticRoutesInput() {
    return this._exportStaticRoutes;
  }
}
export interface DataApstraDatacenterRoutingPoliciesFiltersExtraExports {
  /**
  * If the action is "permit", match the route. If the action is "deny", do not match the route. For composing complex policies, all prefix-list items will be processed in the order specified, top-down. This allows the user to deny a subset of a route that may otherwise be permitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_routing_policies#action DataApstraDatacenterRoutingPolicies#action}
  */
  readonly action?: string;
  /**
  * Match less-specific prefixes from a parent prefix, up from `ge_mask` to the prefix length of the route. Range is 0-32 for IPv4, 0-128 for IPv6. If not specified, implies the prefix-list entry should be an exact match. The option can be optionally be used in combination with `le_mask`. `ge_mask` must be longer than the subnet prefix length. If `le_mask` and `ge_mask` are both specified, then `le_mask` must be greater than `ge_mask`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_routing_policies#ge_mask DataApstraDatacenterRoutingPolicies#ge_mask}
  */
  readonly geMask?: number;
  /**
  * Match more-specific prefixes from a parent prefix, up until `le_mask` prefix len. Range is 0-32 for IPv4, 0-128 for IPv6. If not specified, implies the prefix-list entry should be an exact match. The option can be optionally be used in combination with `ge_mask`. `le_mask` must be longer than the subnet prefix length. If `le_mask` and `ge_mask` are both specified, then `le_mask` must be greater than `ge_mask`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_routing_policies#le_mask DataApstraDatacenterRoutingPolicies#le_mask}
  */
  readonly leMask?: number;
  /**
  * IPv4 or IPv6 network address specified in the form of network/prefixlen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_routing_policies#prefix DataApstraDatacenterRoutingPolicies#prefix}
  */
  readonly prefix?: string;
}

export function dataApstraDatacenterRoutingPoliciesFiltersExtraExportsToTerraform(struct?: DataApstraDatacenterRoutingPoliciesFiltersExtraExports | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    ge_mask: cdktf.numberToTerraform(struct!.geMask),
    le_mask: cdktf.numberToTerraform(struct!.leMask),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function dataApstraDatacenterRoutingPoliciesFiltersExtraExportsToHclTerraform(struct?: DataApstraDatacenterRoutingPoliciesFiltersExtraExports | cdktf.IResolvable): any {
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
    ge_mask: {
      value: cdktf.numberToHclTerraform(struct!.geMask),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    le_mask: {
      value: cdktf.numberToHclTerraform(struct!.leMask),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataApstraDatacenterRoutingPoliciesFiltersExtraExportsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraDatacenterRoutingPoliciesFiltersExtraExports | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._geMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.geMask = this._geMask;
    }
    if (this._leMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.leMask = this._leMask;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraDatacenterRoutingPoliciesFiltersExtraExports | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._geMask = undefined;
      this._leMask = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._geMask = value.geMask;
      this._leMask = value.leMask;
      this._prefix = value.prefix;
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

  // ge_mask - computed: false, optional: true, required: false
  private _geMask?: number; 
  public get geMask() {
    return this.getNumberAttribute('ge_mask');
  }
  public set geMask(value: number) {
    this._geMask = value;
  }
  public resetGeMask() {
    this._geMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geMaskInput() {
    return this._geMask;
  }

  // le_mask - computed: false, optional: true, required: false
  private _leMask?: number; 
  public get leMask() {
    return this.getNumberAttribute('le_mask');
  }
  public set leMask(value: number) {
    this._leMask = value;
  }
  public resetLeMask() {
    this._leMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leMaskInput() {
    return this._leMask;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class DataApstraDatacenterRoutingPoliciesFiltersExtraExportsList extends cdktf.ComplexList {
  public internalValue? : DataApstraDatacenterRoutingPoliciesFiltersExtraExports[] | cdktf.IResolvable

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
  public get(index: number): DataApstraDatacenterRoutingPoliciesFiltersExtraExportsOutputReference {
    return new DataApstraDatacenterRoutingPoliciesFiltersExtraExportsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApstraDatacenterRoutingPoliciesFiltersExtraImports {
  /**
  * If the action is "permit", match the route. If the action is "deny", do not match the route. For composing complex policies, all prefix-list items will be processed in the order specified, top-down. This allows the user to deny a subset of a route that may otherwise be permitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_routing_policies#action DataApstraDatacenterRoutingPolicies#action}
  */
  readonly action?: string;
  /**
  * Match less-specific prefixes from a parent prefix, up from `ge_mask` to the prefix length of the route. Range is 0-32 for IPv4, 0-128 for IPv6. If not specified, implies the prefix-list entry should be an exact match. The option can be optionally be used in combination with `le_mask`. `ge_mask` must be longer than the subnet prefix length. If `le_mask` and `ge_mask` are both specified, then `le_mask` must be greater than `ge_mask`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_routing_policies#ge_mask DataApstraDatacenterRoutingPolicies#ge_mask}
  */
  readonly geMask?: number;
  /**
  * Match more-specific prefixes from a parent prefix, up until `le_mask` prefix len. Range is 0-32 for IPv4, 0-128 for IPv6. If not specified, implies the prefix-list entry should be an exact match. The option can be optionally be used in combination with `ge_mask`. `le_mask` must be longer than the subnet prefix length. If `le_mask` and `ge_mask` are both specified, then `le_mask` must be greater than `ge_mask`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_routing_policies#le_mask DataApstraDatacenterRoutingPolicies#le_mask}
  */
  readonly leMask?: number;
  /**
  * IPv4 or IPv6 network address specified in the form of network/prefixlen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_routing_policies#prefix DataApstraDatacenterRoutingPolicies#prefix}
  */
  readonly prefix?: string;
}

export function dataApstraDatacenterRoutingPoliciesFiltersExtraImportsToTerraform(struct?: DataApstraDatacenterRoutingPoliciesFiltersExtraImports | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    ge_mask: cdktf.numberToTerraform(struct!.geMask),
    le_mask: cdktf.numberToTerraform(struct!.leMask),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function dataApstraDatacenterRoutingPoliciesFiltersExtraImportsToHclTerraform(struct?: DataApstraDatacenterRoutingPoliciesFiltersExtraImports | cdktf.IResolvable): any {
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
    ge_mask: {
      value: cdktf.numberToHclTerraform(struct!.geMask),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    le_mask: {
      value: cdktf.numberToHclTerraform(struct!.leMask),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataApstraDatacenterRoutingPoliciesFiltersExtraImportsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraDatacenterRoutingPoliciesFiltersExtraImports | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._geMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.geMask = this._geMask;
    }
    if (this._leMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.leMask = this._leMask;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraDatacenterRoutingPoliciesFiltersExtraImports | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._geMask = undefined;
      this._leMask = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._geMask = value.geMask;
      this._leMask = value.leMask;
      this._prefix = value.prefix;
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

  // ge_mask - computed: false, optional: true, required: false
  private _geMask?: number; 
  public get geMask() {
    return this.getNumberAttribute('ge_mask');
  }
  public set geMask(value: number) {
    this._geMask = value;
  }
  public resetGeMask() {
    this._geMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geMaskInput() {
    return this._geMask;
  }

  // le_mask - computed: false, optional: true, required: false
  private _leMask?: number; 
  public get leMask() {
    return this.getNumberAttribute('le_mask');
  }
  public set leMask(value: number) {
    this._leMask = value;
  }
  public resetLeMask() {
    this._leMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leMaskInput() {
    return this._leMask;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class DataApstraDatacenterRoutingPoliciesFiltersExtraImportsList extends cdktf.ComplexList {
  public internalValue? : DataApstraDatacenterRoutingPoliciesFiltersExtraImports[] | cdktf.IResolvable

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
  public get(index: number): DataApstraDatacenterRoutingPoliciesFiltersExtraImportsOutputReference {
    return new DataApstraDatacenterRoutingPoliciesFiltersExtraImportsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApstraDatacenterRoutingPoliciesFilters {
  /**
  * All `aggregate_prefixes` specified here are required for the filter to match, but the list need not be an *exact match*. That is, a policy containting `10.1.0.0/16` and `10.2.0.0/16` will match a filter which specifies only `10.1.0.0/16`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_routing_policies#aggregate_prefixes DataApstraDatacenterRoutingPolicies#aggregate_prefixes}
  */
  readonly aggregatePrefixes?: string[];
  /**
  * Web UI 'description' field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_routing_policies#description DataApstraDatacenterRoutingPolicies#description}
  */
  readonly description?: string;
  /**
  * Default IPv4 route is expected to be imported via protocol session using this policy. Used for rendering route expectations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_routing_policies#expect_default_ipv4 DataApstraDatacenterRoutingPolicies#expect_default_ipv4}
  */
  readonly expectDefaultIpv4?: boolean | cdktf.IResolvable;
  /**
  * Default IPv6 route is expected to be imported via protocol session using this policy. Used for rendering route expectations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_routing_policies#expect_default_ipv6 DataApstraDatacenterRoutingPolicies#expect_default_ipv6}
  */
  readonly expectDefaultIpv6?: boolean | cdktf.IResolvable;
  /**
  * The export policy controls export of various types of fabric prefixes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_routing_policies#export_policy DataApstraDatacenterRoutingPolicies#export_policy}
  */
  readonly exportPolicy?: DataApstraDatacenterRoutingPoliciesFiltersExportPolicy;
  /**
  * All `extra_exports` specified here are required for the filter to match, using the same logic as `aggregate_prefixes`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_routing_policies#extra_exports DataApstraDatacenterRoutingPolicies#extra_exports}
  */
  readonly extraExports?: DataApstraDatacenterRoutingPoliciesFiltersExtraExports[] | cdktf.IResolvable;
  /**
  * All `extra_imports` specified here are required for the filter to match, using the same logic as `aggregate_prefixes`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_routing_policies#extra_imports DataApstraDatacenterRoutingPolicies#extra_imports}
  */
  readonly extraImports?: DataApstraDatacenterRoutingPoliciesFiltersExtraImports[] | cdktf.IResolvable;
  /**
  * Apstra graph node ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_routing_policies#id DataApstraDatacenterRoutingPolicies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * One of: `extra_only`, `default_only`, `all`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_routing_policies#import_policy DataApstraDatacenterRoutingPolicies#import_policy}
  */
  readonly importPolicy?: string;
  /**
  * Web UI `name` field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_routing_policies#name DataApstraDatacenterRoutingPolicies#name}
  */
  readonly name?: string;
}

export function dataApstraDatacenterRoutingPoliciesFiltersToTerraform(struct?: DataApstraDatacenterRoutingPoliciesFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregate_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.aggregatePrefixes),
    description: cdktf.stringToTerraform(struct!.description),
    expect_default_ipv4: cdktf.booleanToTerraform(struct!.expectDefaultIpv4),
    expect_default_ipv6: cdktf.booleanToTerraform(struct!.expectDefaultIpv6),
    export_policy: dataApstraDatacenterRoutingPoliciesFiltersExportPolicyToTerraform(struct!.exportPolicy),
    extra_exports: cdktf.listMapper(dataApstraDatacenterRoutingPoliciesFiltersExtraExportsToTerraform, false)(struct!.extraExports),
    extra_imports: cdktf.listMapper(dataApstraDatacenterRoutingPoliciesFiltersExtraImportsToTerraform, false)(struct!.extraImports),
    id: cdktf.stringToTerraform(struct!.id),
    import_policy: cdktf.stringToTerraform(struct!.importPolicy),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataApstraDatacenterRoutingPoliciesFiltersToHclTerraform(struct?: DataApstraDatacenterRoutingPoliciesFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregate_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.aggregatePrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expect_default_ipv4: {
      value: cdktf.booleanToHclTerraform(struct!.expectDefaultIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expect_default_ipv6: {
      value: cdktf.booleanToHclTerraform(struct!.expectDefaultIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    export_policy: {
      value: dataApstraDatacenterRoutingPoliciesFiltersExportPolicyToHclTerraform(struct!.exportPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataApstraDatacenterRoutingPoliciesFiltersExportPolicy",
    },
    extra_exports: {
      value: cdktf.listMapperHcl(dataApstraDatacenterRoutingPoliciesFiltersExtraExportsToHclTerraform, false)(struct!.extraExports),
      isBlock: true,
      type: "list",
      storageClassType: "DataApstraDatacenterRoutingPoliciesFiltersExtraExportsList",
    },
    extra_imports: {
      value: cdktf.listMapperHcl(dataApstraDatacenterRoutingPoliciesFiltersExtraImportsToHclTerraform, false)(struct!.extraImports),
      isBlock: true,
      type: "list",
      storageClassType: "DataApstraDatacenterRoutingPoliciesFiltersExtraImportsList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    import_policy: {
      value: cdktf.stringToHclTerraform(struct!.importPolicy),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataApstraDatacenterRoutingPoliciesFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraDatacenterRoutingPoliciesFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregatePrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregatePrefixes = this._aggregatePrefixes;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._expectDefaultIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectDefaultIpv4 = this._expectDefaultIpv4;
    }
    if (this._expectDefaultIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectDefaultIpv6 = this._expectDefaultIpv6;
    }
    if (this._exportPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportPolicy = this._exportPolicy?.internalValue;
    }
    if (this._extraExports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraExports = this._extraExports?.internalValue;
    }
    if (this._extraImports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraImports = this._extraImports?.internalValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._importPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.importPolicy = this._importPolicy;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraDatacenterRoutingPoliciesFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregatePrefixes = undefined;
      this._description = undefined;
      this._expectDefaultIpv4 = undefined;
      this._expectDefaultIpv6 = undefined;
      this._exportPolicy.internalValue = undefined;
      this._extraExports.internalValue = undefined;
      this._extraImports.internalValue = undefined;
      this._id = undefined;
      this._importPolicy = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregatePrefixes = value.aggregatePrefixes;
      this._description = value.description;
      this._expectDefaultIpv4 = value.expectDefaultIpv4;
      this._expectDefaultIpv6 = value.expectDefaultIpv6;
      this._exportPolicy.internalValue = value.exportPolicy;
      this._extraExports.internalValue = value.extraExports;
      this._extraImports.internalValue = value.extraImports;
      this._id = value.id;
      this._importPolicy = value.importPolicy;
      this._name = value.name;
    }
  }

  // aggregate_prefixes - computed: false, optional: true, required: false
  private _aggregatePrefixes?: string[]; 
  public get aggregatePrefixes() {
    return this.getListAttribute('aggregate_prefixes');
  }
  public set aggregatePrefixes(value: string[]) {
    this._aggregatePrefixes = value;
  }
  public resetAggregatePrefixes() {
    this._aggregatePrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatePrefixesInput() {
    return this._aggregatePrefixes;
  }

  // blueprint_id - computed: true, optional: false, required: false
  public get blueprintId() {
    return this.getStringAttribute('blueprint_id');
  }

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

  // expect_default_ipv4 - computed: false, optional: true, required: false
  private _expectDefaultIpv4?: boolean | cdktf.IResolvable; 
  public get expectDefaultIpv4() {
    return this.getBooleanAttribute('expect_default_ipv4');
  }
  public set expectDefaultIpv4(value: boolean | cdktf.IResolvable) {
    this._expectDefaultIpv4 = value;
  }
  public resetExpectDefaultIpv4() {
    this._expectDefaultIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectDefaultIpv4Input() {
    return this._expectDefaultIpv4;
  }

  // expect_default_ipv6 - computed: false, optional: true, required: false
  private _expectDefaultIpv6?: boolean | cdktf.IResolvable; 
  public get expectDefaultIpv6() {
    return this.getBooleanAttribute('expect_default_ipv6');
  }
  public set expectDefaultIpv6(value: boolean | cdktf.IResolvable) {
    this._expectDefaultIpv6 = value;
  }
  public resetExpectDefaultIpv6() {
    this._expectDefaultIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectDefaultIpv6Input() {
    return this._expectDefaultIpv6;
  }

  // export_policy - computed: false, optional: true, required: false
  private _exportPolicy = new DataApstraDatacenterRoutingPoliciesFiltersExportPolicyOutputReference(this, "export_policy");
  public get exportPolicy() {
    return this._exportPolicy;
  }
  public putExportPolicy(value: DataApstraDatacenterRoutingPoliciesFiltersExportPolicy) {
    this._exportPolicy.internalValue = value;
  }
  public resetExportPolicy() {
    this._exportPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPolicyInput() {
    return this._exportPolicy.internalValue;
  }

  // extra_exports - computed: false, optional: true, required: false
  private _extraExports = new DataApstraDatacenterRoutingPoliciesFiltersExtraExportsList(this, "extra_exports", false);
  public get extraExports() {
    return this._extraExports;
  }
  public putExtraExports(value: DataApstraDatacenterRoutingPoliciesFiltersExtraExports[] | cdktf.IResolvable) {
    this._extraExports.internalValue = value;
  }
  public resetExtraExports() {
    this._extraExports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraExportsInput() {
    return this._extraExports.internalValue;
  }

  // extra_imports - computed: false, optional: true, required: false
  private _extraImports = new DataApstraDatacenterRoutingPoliciesFiltersExtraImportsList(this, "extra_imports", false);
  public get extraImports() {
    return this._extraImports;
  }
  public putExtraImports(value: DataApstraDatacenterRoutingPoliciesFiltersExtraImports[] | cdktf.IResolvable) {
    this._extraImports.internalValue = value;
  }
  public resetExtraImports() {
    this._extraImports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraImportsInput() {
    return this._extraImports.internalValue;
  }

  // id - computed: false, optional: true, required: false
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

  // import_policy - computed: false, optional: true, required: false
  private _importPolicy?: string; 
  public get importPolicy() {
    return this.getStringAttribute('import_policy');
  }
  public set importPolicy(value: string) {
    this._importPolicy = value;
  }
  public resetImportPolicy() {
    this._importPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importPolicyInput() {
    return this._importPolicy;
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
}

export class DataApstraDatacenterRoutingPoliciesFiltersList extends cdktf.ComplexList {
  public internalValue? : DataApstraDatacenterRoutingPoliciesFilters[] | cdktf.IResolvable

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
  public get(index: number): DataApstraDatacenterRoutingPoliciesFiltersOutputReference {
    return new DataApstraDatacenterRoutingPoliciesFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_routing_policies apstra_datacenter_routing_policies}
*/
export class DataApstraDatacenterRoutingPolicies extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_datacenter_routing_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApstraDatacenterRoutingPolicies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApstraDatacenterRoutingPolicies to import
  * @param importFromId The id of the existing DataApstraDatacenterRoutingPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_routing_policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApstraDatacenterRoutingPolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_datacenter_routing_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_routing_policies apstra_datacenter_routing_policies} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApstraDatacenterRoutingPoliciesConfig
  */
  public constructor(scope: Construct, id: string, config: DataApstraDatacenterRoutingPoliciesConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_datacenter_routing_policies',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blueprintId = config.blueprintId;
    this._filters.internalValue = config.filters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blueprint_id - computed: false, optional: false, required: true
  private _blueprintId?: string; 
  public get blueprintId() {
    return this.getStringAttribute('blueprint_id');
  }
  public set blueprintId(value: string) {
    this._blueprintId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintIdInput() {
    return this._blueprintId;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new DataApstraDatacenterRoutingPoliciesFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataApstraDatacenterRoutingPoliciesFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return cdktf.Fn.tolist(this.getListAttribute('ids'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blueprint_id: cdktf.stringToTerraform(this._blueprintId),
      filters: cdktf.listMapper(dataApstraDatacenterRoutingPoliciesFiltersToTerraform, false)(this._filters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blueprint_id: {
        value: cdktf.stringToHclTerraform(this._blueprintId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filters: {
        value: cdktf.listMapperHcl(dataApstraDatacenterRoutingPoliciesFiltersToHclTerraform, false)(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataApstraDatacenterRoutingPoliciesFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
