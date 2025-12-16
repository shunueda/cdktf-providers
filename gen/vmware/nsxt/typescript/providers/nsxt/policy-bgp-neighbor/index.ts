// https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_neighbor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyBgpNeighborConfig extends cdktf.TerraformMetaArguments {
  /**
  * Flag to enable allowas_in option for BGP neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_neighbor#allow_as_in PolicyBgpNeighbor#allow_as_in}
  */
  readonly allowAsIn?: boolean | cdktf.IResolvable;
  /**
  * Policy path to the BGP for this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_neighbor#bgp_path PolicyBgpNeighbor#bgp_path}
  */
  readonly bgpPath: string;
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_neighbor#description PolicyBgpNeighbor#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_neighbor#display_name PolicyBgpNeighbor#display_name}
  */
  readonly displayName: string;
  /**
  * BGP Graceful Restart Configuration Mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_neighbor#graceful_restart_mode PolicyBgpNeighbor#graceful_restart_mode}
  */
  readonly gracefulRestartMode?: string;
  /**
  * Wait time in seconds before declaring peer dead
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_neighbor#hold_down_time PolicyBgpNeighbor#hold_down_time}
  */
  readonly holdDownTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_neighbor#id PolicyBgpNeighbor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Interval between keep alive messages sent to peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_neighbor#keep_alive_time PolicyBgpNeighbor#keep_alive_time}
  */
  readonly keepAliveTime?: number;
  /**
  * Maximum number of hops allowed to reach BGP neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_neighbor#maximum_hop_limit PolicyBgpNeighbor#maximum_hop_limit}
  */
  readonly maximumHopLimit?: number;
  /**
  * Neighbor IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_neighbor#neighbor_address PolicyBgpNeighbor#neighbor_address}
  */
  readonly neighborAddress: string;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_neighbor#nsx_id PolicyBgpNeighbor#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * Password for BGP neighbor authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_neighbor#password PolicyBgpNeighbor#password}
  */
  readonly password?: string;
  /**
  * ASN of the neighbor in ASPLAIN or ASDOT Format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_neighbor#remote_as_num PolicyBgpNeighbor#remote_as_num}
  */
  readonly remoteAsNum: string;
  /**
  * Source IP Addresses for BGP peering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_neighbor#source_addresses PolicyBgpNeighbor#source_addresses}
  */
  readonly sourceAddresses?: string[];
  /**
  * bfd_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_neighbor#bfd_config PolicyBgpNeighbor#bfd_config}
  */
  readonly bfdConfig?: PolicyBgpNeighborBfdConfig;
  /**
  * route_filtering block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_neighbor#route_filtering PolicyBgpNeighbor#route_filtering}
  */
  readonly routeFiltering?: PolicyBgpNeighborRouteFiltering[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_neighbor#tag PolicyBgpNeighbor#tag}
  */
  readonly tag?: PolicyBgpNeighborTag[] | cdktf.IResolvable;
}
export interface PolicyBgpNeighborBfdConfig {
  /**
  * Flag to enable/disable BFD configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_neighbor#enabled PolicyBgpNeighbor#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Time interval between heartbeat packets in milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_neighbor#interval PolicyBgpNeighbor#interval}
  */
  readonly interval?: number;
  /**
  * Number of times heartbeat packet is missed before BFD declares the neighbor is down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_neighbor#multiple PolicyBgpNeighbor#multiple}
  */
  readonly multiple?: number;
}

export function policyBgpNeighborBfdConfigToTerraform(struct?: PolicyBgpNeighborBfdConfigOutputReference | PolicyBgpNeighborBfdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    interval: cdktf.numberToTerraform(struct!.interval),
    multiple: cdktf.numberToTerraform(struct!.multiple),
  }
}


export function policyBgpNeighborBfdConfigToHclTerraform(struct?: PolicyBgpNeighborBfdConfigOutputReference | PolicyBgpNeighborBfdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multiple: {
      value: cdktf.numberToHclTerraform(struct!.multiple),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyBgpNeighborBfdConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyBgpNeighborBfdConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._multiple !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiple = this._multiple;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyBgpNeighborBfdConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._interval = undefined;
      this._multiple = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._interval = value.interval;
      this._multiple = value.multiple;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // multiple - computed: false, optional: true, required: false
  private _multiple?: number; 
  public get multiple() {
    return this.getNumberAttribute('multiple');
  }
  public set multiple(value: number) {
    this._multiple = value;
  }
  public resetMultiple() {
    this._multiple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleInput() {
    return this._multiple;
  }
}
export interface PolicyBgpNeighborRouteFiltering {
  /**
  * Address family type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_neighbor#address_family PolicyBgpNeighbor#address_family}
  */
  readonly addressFamily: string;
  /**
  * Flag to enable/disable address family
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_neighbor#enabled PolicyBgpNeighbor#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Prefix-list or route map path for IN direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_neighbor#in_route_filter PolicyBgpNeighbor#in_route_filter}
  */
  readonly inRouteFilter?: string;
  /**
  * Maximum number of routes for the address family
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_neighbor#maximum_routes PolicyBgpNeighbor#maximum_routes}
  */
  readonly maximumRoutes?: number;
  /**
  * Prefix-list or route map path for OUT direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_neighbor#out_route_filter PolicyBgpNeighbor#out_route_filter}
  */
  readonly outRouteFilter?: string;
}

export function policyBgpNeighborRouteFilteringToTerraform(struct?: PolicyBgpNeighborRouteFiltering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_family: cdktf.stringToTerraform(struct!.addressFamily),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    in_route_filter: cdktf.stringToTerraform(struct!.inRouteFilter),
    maximum_routes: cdktf.numberToTerraform(struct!.maximumRoutes),
    out_route_filter: cdktf.stringToTerraform(struct!.outRouteFilter),
  }
}


export function policyBgpNeighborRouteFilteringToHclTerraform(struct?: PolicyBgpNeighborRouteFiltering | cdktf.IResolvable): any {
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
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    in_route_filter: {
      value: cdktf.stringToHclTerraform(struct!.inRouteFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_routes: {
      value: cdktf.numberToHclTerraform(struct!.maximumRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out_route_filter: {
      value: cdktf.stringToHclTerraform(struct!.outRouteFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyBgpNeighborRouteFilteringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyBgpNeighborRouteFiltering | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressFamily = this._addressFamily;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._inRouteFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.inRouteFilter = this._inRouteFilter;
    }
    if (this._maximumRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRoutes = this._maximumRoutes;
    }
    if (this._outRouteFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.outRouteFilter = this._outRouteFilter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyBgpNeighborRouteFiltering | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressFamily = undefined;
      this._enabled = undefined;
      this._inRouteFilter = undefined;
      this._maximumRoutes = undefined;
      this._outRouteFilter = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressFamily = value.addressFamily;
      this._enabled = value.enabled;
      this._inRouteFilter = value.inRouteFilter;
      this._maximumRoutes = value.maximumRoutes;
      this._outRouteFilter = value.outRouteFilter;
    }
  }

  // address_family - computed: false, optional: false, required: true
  private _addressFamily?: string; 
  public get addressFamily() {
    return this.getStringAttribute('address_family');
  }
  public set addressFamily(value: string) {
    this._addressFamily = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFamilyInput() {
    return this._addressFamily;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // in_route_filter - computed: false, optional: true, required: false
  private _inRouteFilter?: string; 
  public get inRouteFilter() {
    return this.getStringAttribute('in_route_filter');
  }
  public set inRouteFilter(value: string) {
    this._inRouteFilter = value;
  }
  public resetInRouteFilter() {
    this._inRouteFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inRouteFilterInput() {
    return this._inRouteFilter;
  }

  // maximum_routes - computed: false, optional: true, required: false
  private _maximumRoutes?: number; 
  public get maximumRoutes() {
    return this.getNumberAttribute('maximum_routes');
  }
  public set maximumRoutes(value: number) {
    this._maximumRoutes = value;
  }
  public resetMaximumRoutes() {
    this._maximumRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRoutesInput() {
    return this._maximumRoutes;
  }

  // out_route_filter - computed: false, optional: true, required: false
  private _outRouteFilter?: string; 
  public get outRouteFilter() {
    return this.getStringAttribute('out_route_filter');
  }
  public set outRouteFilter(value: string) {
    this._outRouteFilter = value;
  }
  public resetOutRouteFilter() {
    this._outRouteFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outRouteFilterInput() {
    return this._outRouteFilter;
  }
}

export class PolicyBgpNeighborRouteFilteringList extends cdktf.ComplexList {
  public internalValue? : PolicyBgpNeighborRouteFiltering[] | cdktf.IResolvable

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
  public get(index: number): PolicyBgpNeighborRouteFilteringOutputReference {
    return new PolicyBgpNeighborRouteFilteringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyBgpNeighborTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_neighbor#scope PolicyBgpNeighbor#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_neighbor#tag PolicyBgpNeighbor#tag}
  */
  readonly tag?: string;
}

export function policyBgpNeighborTagToTerraform(struct?: PolicyBgpNeighborTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyBgpNeighborTagToHclTerraform(struct?: PolicyBgpNeighborTag | cdktf.IResolvable): any {
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

export class PolicyBgpNeighborTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyBgpNeighborTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyBgpNeighborTag | cdktf.IResolvable | undefined) {
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

export class PolicyBgpNeighborTagList extends cdktf.ComplexList {
  public internalValue? : PolicyBgpNeighborTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyBgpNeighborTagOutputReference {
    return new PolicyBgpNeighborTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_neighbor nsxt_policy_bgp_neighbor}
*/
export class PolicyBgpNeighbor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_bgp_neighbor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyBgpNeighbor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyBgpNeighbor to import
  * @param importFromId The id of the existing PolicyBgpNeighbor that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_neighbor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyBgpNeighbor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_bgp_neighbor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_neighbor nsxt_policy_bgp_neighbor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyBgpNeighborConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyBgpNeighborConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_bgp_neighbor',
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
    this._allowAsIn = config.allowAsIn;
    this._bgpPath = config.bgpPath;
    this._description = config.description;
    this._displayName = config.displayName;
    this._gracefulRestartMode = config.gracefulRestartMode;
    this._holdDownTime = config.holdDownTime;
    this._id = config.id;
    this._keepAliveTime = config.keepAliveTime;
    this._maximumHopLimit = config.maximumHopLimit;
    this._neighborAddress = config.neighborAddress;
    this._nsxId = config.nsxId;
    this._password = config.password;
    this._remoteAsNum = config.remoteAsNum;
    this._sourceAddresses = config.sourceAddresses;
    this._bfdConfig.internalValue = config.bfdConfig;
    this._routeFiltering.internalValue = config.routeFiltering;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_as_in - computed: false, optional: true, required: false
  private _allowAsIn?: boolean | cdktf.IResolvable; 
  public get allowAsIn() {
    return this.getBooleanAttribute('allow_as_in');
  }
  public set allowAsIn(value: boolean | cdktf.IResolvable) {
    this._allowAsIn = value;
  }
  public resetAllowAsIn() {
    this._allowAsIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAsInInput() {
    return this._allowAsIn;
  }

  // bgp_path - computed: false, optional: false, required: true
  private _bgpPath?: string; 
  public get bgpPath() {
    return this.getStringAttribute('bgp_path');
  }
  public set bgpPath(value: string) {
    this._bgpPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpPathInput() {
    return this._bgpPath;
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

  // graceful_restart_mode - computed: false, optional: true, required: false
  private _gracefulRestartMode?: string; 
  public get gracefulRestartMode() {
    return this.getStringAttribute('graceful_restart_mode');
  }
  public set gracefulRestartMode(value: string) {
    this._gracefulRestartMode = value;
  }
  public resetGracefulRestartMode() {
    this._gracefulRestartMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulRestartModeInput() {
    return this._gracefulRestartMode;
  }

  // hold_down_time - computed: false, optional: true, required: false
  private _holdDownTime?: number; 
  public get holdDownTime() {
    return this.getNumberAttribute('hold_down_time');
  }
  public set holdDownTime(value: number) {
    this._holdDownTime = value;
  }
  public resetHoldDownTime() {
    this._holdDownTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdDownTimeInput() {
    return this._holdDownTime;
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

  // keep_alive_time - computed: false, optional: true, required: false
  private _keepAliveTime?: number; 
  public get keepAliveTime() {
    return this.getNumberAttribute('keep_alive_time');
  }
  public set keepAliveTime(value: number) {
    this._keepAliveTime = value;
  }
  public resetKeepAliveTime() {
    this._keepAliveTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAliveTimeInput() {
    return this._keepAliveTime;
  }

  // maximum_hop_limit - computed: false, optional: true, required: false
  private _maximumHopLimit?: number; 
  public get maximumHopLimit() {
    return this.getNumberAttribute('maximum_hop_limit');
  }
  public set maximumHopLimit(value: number) {
    this._maximumHopLimit = value;
  }
  public resetMaximumHopLimit() {
    this._maximumHopLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumHopLimitInput() {
    return this._maximumHopLimit;
  }

  // neighbor_address - computed: false, optional: false, required: true
  private _neighborAddress?: string; 
  public get neighborAddress() {
    return this.getStringAttribute('neighbor_address');
  }
  public set neighborAddress(value: string) {
    this._neighborAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborAddressInput() {
    return this._neighborAddress;
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

  // password - computed: false, optional: true, required: false
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

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // remote_as_num - computed: false, optional: false, required: true
  private _remoteAsNum?: string; 
  public get remoteAsNum() {
    return this.getStringAttribute('remote_as_num');
  }
  public set remoteAsNum(value: string) {
    this._remoteAsNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAsNumInput() {
    return this._remoteAsNum;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // source_addresses - computed: false, optional: true, required: false
  private _sourceAddresses?: string[]; 
  public get sourceAddresses() {
    return this.getListAttribute('source_addresses');
  }
  public set sourceAddresses(value: string[]) {
    this._sourceAddresses = value;
  }
  public resetSourceAddresses() {
    this._sourceAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressesInput() {
    return this._sourceAddresses;
  }

  // bfd_config - computed: false, optional: true, required: false
  private _bfdConfig = new PolicyBgpNeighborBfdConfigOutputReference(this, "bfd_config");
  public get bfdConfig() {
    return this._bfdConfig;
  }
  public putBfdConfig(value: PolicyBgpNeighborBfdConfig) {
    this._bfdConfig.internalValue = value;
  }
  public resetBfdConfig() {
    this._bfdConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdConfigInput() {
    return this._bfdConfig.internalValue;
  }

  // route_filtering - computed: false, optional: true, required: false
  private _routeFiltering = new PolicyBgpNeighborRouteFilteringList(this, "route_filtering", false);
  public get routeFiltering() {
    return this._routeFiltering;
  }
  public putRouteFiltering(value: PolicyBgpNeighborRouteFiltering[] | cdktf.IResolvable) {
    this._routeFiltering.internalValue = value;
  }
  public resetRouteFiltering() {
    this._routeFiltering.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeFilteringInput() {
    return this._routeFiltering.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicyBgpNeighborTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyBgpNeighborTag[] | cdktf.IResolvable) {
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
      allow_as_in: cdktf.booleanToTerraform(this._allowAsIn),
      bgp_path: cdktf.stringToTerraform(this._bgpPath),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      graceful_restart_mode: cdktf.stringToTerraform(this._gracefulRestartMode),
      hold_down_time: cdktf.numberToTerraform(this._holdDownTime),
      id: cdktf.stringToTerraform(this._id),
      keep_alive_time: cdktf.numberToTerraform(this._keepAliveTime),
      maximum_hop_limit: cdktf.numberToTerraform(this._maximumHopLimit),
      neighbor_address: cdktf.stringToTerraform(this._neighborAddress),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      password: cdktf.stringToTerraform(this._password),
      remote_as_num: cdktf.stringToTerraform(this._remoteAsNum),
      source_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceAddresses),
      bfd_config: policyBgpNeighborBfdConfigToTerraform(this._bfdConfig.internalValue),
      route_filtering: cdktf.listMapper(policyBgpNeighborRouteFilteringToTerraform, true)(this._routeFiltering.internalValue),
      tag: cdktf.listMapper(policyBgpNeighborTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_as_in: {
        value: cdktf.booleanToHclTerraform(this._allowAsIn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bgp_path: {
        value: cdktf.stringToHclTerraform(this._bgpPath),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      graceful_restart_mode: {
        value: cdktf.stringToHclTerraform(this._gracefulRestartMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hold_down_time: {
        value: cdktf.numberToHclTerraform(this._holdDownTime),
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
      keep_alive_time: {
        value: cdktf.numberToHclTerraform(this._keepAliveTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_hop_limit: {
        value: cdktf.numberToHclTerraform(this._maximumHopLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      neighbor_address: {
        value: cdktf.stringToHclTerraform(this._neighborAddress),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_as_num: {
        value: cdktf.stringToHclTerraform(this._remoteAsNum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceAddresses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      bfd_config: {
        value: policyBgpNeighborBfdConfigToHclTerraform(this._bfdConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyBgpNeighborBfdConfigList",
      },
      route_filtering: {
        value: cdktf.listMapperHcl(policyBgpNeighborRouteFilteringToHclTerraform, true)(this._routeFiltering.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyBgpNeighborRouteFilteringList",
      },
      tag: {
        value: cdktf.listMapperHcl(policyBgpNeighborTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyBgpNeighborTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
