// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface_address_family
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterIsisInterfaceAddressFamilyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify the absolute value of Adjacency Segement ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface_address_family#adjacency_sid_absolutes RouterIsisInterfaceAddressFamily#adjacency_sid_absolutes}
  */
  readonly adjacencySidAbsolutes?: RouterIsisInterfaceAddressFamilyAdjacencySidAbsolutes[] | cdktf.IResolvable;
  /**
  * Specify the index of Adjacency Segement ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface_address_family#adjacency_sid_indices RouterIsisInterfaceAddressFamily#adjacency_sid_indices}
  */
  readonly adjacencySidIndices?: RouterIsisInterfaceAddressFamilyAdjacencySidIndices[] | cdktf.IResolvable;
  /**
  * Filter routes based on a route policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface_address_family#advertise_prefix_route_policy RouterIsisInterfaceAddressFamily#advertise_prefix_route_policy}
  */
  readonly advertisePrefixRoutePolicy?: string;
  /**
  * Set advertisement for one level only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface_address_family#advertise_prefix_route_policy_levels RouterIsisInterfaceAddressFamily#advertise_prefix_route_policy_levels}
  */
  readonly advertisePrefixRoutePolicyLevels?: RouterIsisInterfaceAddressFamilyAdvertisePrefixRoutePolicyLevels[] | cdktf.IResolvable;
  /**
  * af-name
  *   - Choices: `ipv4`, `ipv6`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface_address_family#af_name RouterIsisInterfaceAddressFamily#af_name}
  */
  readonly afName: string;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface_address_family#delete_mode RouterIsisInterfaceAddressFamily#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface_address_family#device RouterIsisInterfaceAddressFamily#device}
  */
  readonly device?: string;
  /**
  * enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface_address_family#fast_reroute_levels RouterIsisInterfaceAddressFamily#fast_reroute_levels}
  */
  readonly fastRerouteLevels?: RouterIsisInterfaceAddressFamilyFastRerouteLevels[] | cdktf.IResolvable;
  /**
  * per-link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface_address_family#fast_reroute_per_link RouterIsisInterfaceAddressFamily#fast_reroute_per_link}
  */
  readonly fastReroutePerLink?: boolean | cdktf.IResolvable;
  /**
  * per-prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface_address_family#fast_reroute_per_prefix RouterIsisInterfaceAddressFamily#fast_reroute_per_prefix}
  */
  readonly fastReroutePerPrefix?: boolean | cdktf.IResolvable;
  /**
  * Interface to configure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface_address_family#interface_name RouterIsisInterfaceAddressFamily#interface_name}
  */
  readonly interfaceName: string;
  /**
  * Default metric: <1-63> for narrow, <1-16777214> for wide
  *   - Range: `1`-`16777214`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface_address_family#metric_default RouterIsisInterfaceAddressFamily#metric_default}
  */
  readonly metricDefault?: number;
  /**
  * Set metric for one level only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface_address_family#metric_levels RouterIsisInterfaceAddressFamily#metric_levels}
  */
  readonly metricLevels?: RouterIsisInterfaceAddressFamilyMetricLevels[] | cdktf.IResolvable;
  /**
  * Maximum wide metric. All routers will exclude this link from their SPF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface_address_family#metric_maximum RouterIsisInterfaceAddressFamily#metric_maximum}
  */
  readonly metricMaximum?: boolean | cdktf.IResolvable;
  /**
  * Process ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface_address_family#process_id RouterIsisInterfaceAddressFamily#process_id}
  */
  readonly processId: string;
  /**
  * saf-name
  *   - Choices: `multicast`, `unicast`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface_address_family#saf_name RouterIsisInterfaceAddressFamily#saf_name}
  */
  readonly safName: string;
  /**
  * Set interface tag
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface_address_family#tag RouterIsisInterfaceAddressFamily#tag}
  */
  readonly tag?: number;
}
export interface RouterIsisInterfaceAddressFamilyAdjacencySidAbsolutes {
  /**
  * The Adjacency Segment ID value
  *   - Range: `16000`-`1048575`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface_address_family#absolute_number RouterIsisInterfaceAddressFamily#absolute_number}
  */
  readonly absoluteNumber: number;
  /**
  * Protect Adjacency SID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface_address_family#protected RouterIsisInterfaceAddressFamily#protected}
  */
  readonly protected?: boolean | cdktf.IResolvable;
}

export function routerIsisInterfaceAddressFamilyAdjacencySidAbsolutesToTerraform(struct?: RouterIsisInterfaceAddressFamilyAdjacencySidAbsolutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    absolute_number: cdktf.numberToTerraform(struct!.absoluteNumber),
    protected: cdktf.booleanToTerraform(struct!.protected),
  }
}


export function routerIsisInterfaceAddressFamilyAdjacencySidAbsolutesToHclTerraform(struct?: RouterIsisInterfaceAddressFamilyAdjacencySidAbsolutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    absolute_number: {
      value: cdktf.numberToHclTerraform(struct!.absoluteNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protected: {
      value: cdktf.booleanToHclTerraform(struct!.protected),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisInterfaceAddressFamilyAdjacencySidAbsolutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisInterfaceAddressFamilyAdjacencySidAbsolutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._absoluteNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.absoluteNumber = this._absoluteNumber;
    }
    if (this._protected !== undefined) {
      hasAnyValues = true;
      internalValueResult.protected = this._protected;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisInterfaceAddressFamilyAdjacencySidAbsolutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._absoluteNumber = undefined;
      this._protected = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._absoluteNumber = value.absoluteNumber;
      this._protected = value.protected;
    }
  }

  // absolute_number - computed: false, optional: false, required: true
  private _absoluteNumber?: number; 
  public get absoluteNumber() {
    return this.getNumberAttribute('absolute_number');
  }
  public set absoluteNumber(value: number) {
    this._absoluteNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get absoluteNumberInput() {
    return this._absoluteNumber;
  }

  // protected - computed: false, optional: true, required: false
  private _protected?: boolean | cdktf.IResolvable; 
  public get protected() {
    return this.getBooleanAttribute('protected');
  }
  public set protected(value: boolean | cdktf.IResolvable) {
    this._protected = value;
  }
  public resetProtected() {
    this._protected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedInput() {
    return this._protected;
  }
}

export class RouterIsisInterfaceAddressFamilyAdjacencySidAbsolutesList extends cdktf.ComplexList {
  public internalValue? : RouterIsisInterfaceAddressFamilyAdjacencySidAbsolutes[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisInterfaceAddressFamilyAdjacencySidAbsolutesOutputReference {
    return new RouterIsisInterfaceAddressFamilyAdjacencySidAbsolutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisInterfaceAddressFamilyAdjacencySidIndices {
  /**
  * The Adjacency Segment ID index
  *   - Range: `0`-`1048575`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface_address_family#index_number RouterIsisInterfaceAddressFamily#index_number}
  */
  readonly indexNumber: number;
  /**
  * Protect Adjacency SID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface_address_family#protected RouterIsisInterfaceAddressFamily#protected}
  */
  readonly protected?: boolean | cdktf.IResolvable;
}

export function routerIsisInterfaceAddressFamilyAdjacencySidIndicesToTerraform(struct?: RouterIsisInterfaceAddressFamilyAdjacencySidIndices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index_number: cdktf.numberToTerraform(struct!.indexNumber),
    protected: cdktf.booleanToTerraform(struct!.protected),
  }
}


export function routerIsisInterfaceAddressFamilyAdjacencySidIndicesToHclTerraform(struct?: RouterIsisInterfaceAddressFamilyAdjacencySidIndices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index_number: {
      value: cdktf.numberToHclTerraform(struct!.indexNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protected: {
      value: cdktf.booleanToHclTerraform(struct!.protected),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisInterfaceAddressFamilyAdjacencySidIndicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisInterfaceAddressFamilyAdjacencySidIndices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indexNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexNumber = this._indexNumber;
    }
    if (this._protected !== undefined) {
      hasAnyValues = true;
      internalValueResult.protected = this._protected;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisInterfaceAddressFamilyAdjacencySidIndices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._indexNumber = undefined;
      this._protected = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._indexNumber = value.indexNumber;
      this._protected = value.protected;
    }
  }

  // index_number - computed: false, optional: false, required: true
  private _indexNumber?: number; 
  public get indexNumber() {
    return this.getNumberAttribute('index_number');
  }
  public set indexNumber(value: number) {
    this._indexNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexNumberInput() {
    return this._indexNumber;
  }

  // protected - computed: false, optional: true, required: false
  private _protected?: boolean | cdktf.IResolvable; 
  public get protected() {
    return this.getBooleanAttribute('protected');
  }
  public set protected(value: boolean | cdktf.IResolvable) {
    this._protected = value;
  }
  public resetProtected() {
    this._protected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedInput() {
    return this._protected;
  }
}

export class RouterIsisInterfaceAddressFamilyAdjacencySidIndicesList extends cdktf.ComplexList {
  public internalValue? : RouterIsisInterfaceAddressFamilyAdjacencySidIndices[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisInterfaceAddressFamilyAdjacencySidIndicesOutputReference {
    return new RouterIsisInterfaceAddressFamilyAdjacencySidIndicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisInterfaceAddressFamilyAdvertisePrefixRoutePolicyLevels {
  /**
  * Set advertisement at this level only
  *   - Range: `1`-`2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface_address_family#level_number RouterIsisInterfaceAddressFamily#level_number}
  */
  readonly levelNumber: number;
  /**
  * Filter routes based on a route policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface_address_family#route_policy RouterIsisInterfaceAddressFamily#route_policy}
  */
  readonly routePolicy?: string;
}

export function routerIsisInterfaceAddressFamilyAdvertisePrefixRoutePolicyLevelsToTerraform(struct?: RouterIsisInterfaceAddressFamilyAdvertisePrefixRoutePolicyLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level_number: cdktf.numberToTerraform(struct!.levelNumber),
    route_policy: cdktf.stringToTerraform(struct!.routePolicy),
  }
}


export function routerIsisInterfaceAddressFamilyAdvertisePrefixRoutePolicyLevelsToHclTerraform(struct?: RouterIsisInterfaceAddressFamilyAdvertisePrefixRoutePolicyLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level_number: {
      value: cdktf.numberToHclTerraform(struct!.levelNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_policy: {
      value: cdktf.stringToHclTerraform(struct!.routePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisInterfaceAddressFamilyAdvertisePrefixRoutePolicyLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisInterfaceAddressFamilyAdvertisePrefixRoutePolicyLevels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._levelNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelNumber = this._levelNumber;
    }
    if (this._routePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePolicy = this._routePolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisInterfaceAddressFamilyAdvertisePrefixRoutePolicyLevels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._levelNumber = undefined;
      this._routePolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._levelNumber = value.levelNumber;
      this._routePolicy = value.routePolicy;
    }
  }

  // level_number - computed: false, optional: false, required: true
  private _levelNumber?: number; 
  public get levelNumber() {
    return this.getNumberAttribute('level_number');
  }
  public set levelNumber(value: number) {
    this._levelNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelNumberInput() {
    return this._levelNumber;
  }

  // route_policy - computed: false, optional: true, required: false
  private _routePolicy?: string; 
  public get routePolicy() {
    return this.getStringAttribute('route_policy');
  }
  public set routePolicy(value: string) {
    this._routePolicy = value;
  }
  public resetRoutePolicy() {
    this._routePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyInput() {
    return this._routePolicy;
  }
}

export class RouterIsisInterfaceAddressFamilyAdvertisePrefixRoutePolicyLevelsList extends cdktf.ComplexList {
  public internalValue? : RouterIsisInterfaceAddressFamilyAdvertisePrefixRoutePolicyLevels[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisInterfaceAddressFamilyAdvertisePrefixRoutePolicyLevelsOutputReference {
    return new RouterIsisInterfaceAddressFamilyAdvertisePrefixRoutePolicyLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisInterfaceAddressFamilyFastRerouteLevels {
  /**
  * Configure FRR for one level only
  *   - Range: `1`-`2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface_address_family#level_number RouterIsisInterfaceAddressFamily#level_number}
  */
  readonly levelNumber: number;
  /**
  * per-link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface_address_family#per_link RouterIsisInterfaceAddressFamily#per_link}
  */
  readonly perLink?: boolean | cdktf.IResolvable;
  /**
  * per-prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface_address_family#per_prefix RouterIsisInterfaceAddressFamily#per_prefix}
  */
  readonly perPrefix?: boolean | cdktf.IResolvable;
}

export function routerIsisInterfaceAddressFamilyFastRerouteLevelsToTerraform(struct?: RouterIsisInterfaceAddressFamilyFastRerouteLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level_number: cdktf.numberToTerraform(struct!.levelNumber),
    per_link: cdktf.booleanToTerraform(struct!.perLink),
    per_prefix: cdktf.booleanToTerraform(struct!.perPrefix),
  }
}


export function routerIsisInterfaceAddressFamilyFastRerouteLevelsToHclTerraform(struct?: RouterIsisInterfaceAddressFamilyFastRerouteLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level_number: {
      value: cdktf.numberToHclTerraform(struct!.levelNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_link: {
      value: cdktf.booleanToHclTerraform(struct!.perLink),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    per_prefix: {
      value: cdktf.booleanToHclTerraform(struct!.perPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisInterfaceAddressFamilyFastRerouteLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisInterfaceAddressFamilyFastRerouteLevels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._levelNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelNumber = this._levelNumber;
    }
    if (this._perLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.perLink = this._perLink;
    }
    if (this._perPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.perPrefix = this._perPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisInterfaceAddressFamilyFastRerouteLevels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._levelNumber = undefined;
      this._perLink = undefined;
      this._perPrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._levelNumber = value.levelNumber;
      this._perLink = value.perLink;
      this._perPrefix = value.perPrefix;
    }
  }

  // level_number - computed: false, optional: false, required: true
  private _levelNumber?: number; 
  public get levelNumber() {
    return this.getNumberAttribute('level_number');
  }
  public set levelNumber(value: number) {
    this._levelNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelNumberInput() {
    return this._levelNumber;
  }

  // per_link - computed: false, optional: true, required: false
  private _perLink?: boolean | cdktf.IResolvable; 
  public get perLink() {
    return this.getBooleanAttribute('per_link');
  }
  public set perLink(value: boolean | cdktf.IResolvable) {
    this._perLink = value;
  }
  public resetPerLink() {
    this._perLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perLinkInput() {
    return this._perLink;
  }

  // per_prefix - computed: false, optional: true, required: false
  private _perPrefix?: boolean | cdktf.IResolvable; 
  public get perPrefix() {
    return this.getBooleanAttribute('per_prefix');
  }
  public set perPrefix(value: boolean | cdktf.IResolvable) {
    this._perPrefix = value;
  }
  public resetPerPrefix() {
    this._perPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perPrefixInput() {
    return this._perPrefix;
  }
}

export class RouterIsisInterfaceAddressFamilyFastRerouteLevelsList extends cdktf.ComplexList {
  public internalValue? : RouterIsisInterfaceAddressFamilyFastRerouteLevels[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisInterfaceAddressFamilyFastRerouteLevelsOutputReference {
    return new RouterIsisInterfaceAddressFamilyFastRerouteLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisInterfaceAddressFamilyMetricLevels {
  /**
  * Set metric at this level only
  *   - Range: `1`-`2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface_address_family#level_number RouterIsisInterfaceAddressFamily#level_number}
  */
  readonly levelNumber: number;
  /**
  * Default metric: <1-63> for narrow, <1-16777214> for wide
  *   - Range: `1`-`16777214`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface_address_family#metric_default RouterIsisInterfaceAddressFamily#metric_default}
  */
  readonly metricDefault?: number;
  /**
  * Maximum wide metric. All routers will exclude this link from their SPF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface_address_family#metric_maximum RouterIsisInterfaceAddressFamily#metric_maximum}
  */
  readonly metricMaximum?: boolean | cdktf.IResolvable;
}

export function routerIsisInterfaceAddressFamilyMetricLevelsToTerraform(struct?: RouterIsisInterfaceAddressFamilyMetricLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level_number: cdktf.numberToTerraform(struct!.levelNumber),
    metric_default: cdktf.numberToTerraform(struct!.metricDefault),
    metric_maximum: cdktf.booleanToTerraform(struct!.metricMaximum),
  }
}


export function routerIsisInterfaceAddressFamilyMetricLevelsToHclTerraform(struct?: RouterIsisInterfaceAddressFamilyMetricLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level_number: {
      value: cdktf.numberToHclTerraform(struct!.levelNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_default: {
      value: cdktf.numberToHclTerraform(struct!.metricDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_maximum: {
      value: cdktf.booleanToHclTerraform(struct!.metricMaximum),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisInterfaceAddressFamilyMetricLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisInterfaceAddressFamilyMetricLevels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._levelNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelNumber = this._levelNumber;
    }
    if (this._metricDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricDefault = this._metricDefault;
    }
    if (this._metricMaximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricMaximum = this._metricMaximum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisInterfaceAddressFamilyMetricLevels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._levelNumber = undefined;
      this._metricDefault = undefined;
      this._metricMaximum = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._levelNumber = value.levelNumber;
      this._metricDefault = value.metricDefault;
      this._metricMaximum = value.metricMaximum;
    }
  }

  // level_number - computed: false, optional: false, required: true
  private _levelNumber?: number; 
  public get levelNumber() {
    return this.getNumberAttribute('level_number');
  }
  public set levelNumber(value: number) {
    this._levelNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelNumberInput() {
    return this._levelNumber;
  }

  // metric_default - computed: false, optional: true, required: false
  private _metricDefault?: number; 
  public get metricDefault() {
    return this.getNumberAttribute('metric_default');
  }
  public set metricDefault(value: number) {
    this._metricDefault = value;
  }
  public resetMetricDefault() {
    this._metricDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricDefaultInput() {
    return this._metricDefault;
  }

  // metric_maximum - computed: false, optional: true, required: false
  private _metricMaximum?: boolean | cdktf.IResolvable; 
  public get metricMaximum() {
    return this.getBooleanAttribute('metric_maximum');
  }
  public set metricMaximum(value: boolean | cdktf.IResolvable) {
    this._metricMaximum = value;
  }
  public resetMetricMaximum() {
    this._metricMaximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricMaximumInput() {
    return this._metricMaximum;
  }
}

export class RouterIsisInterfaceAddressFamilyMetricLevelsList extends cdktf.ComplexList {
  public internalValue? : RouterIsisInterfaceAddressFamilyMetricLevels[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisInterfaceAddressFamilyMetricLevelsOutputReference {
    return new RouterIsisInterfaceAddressFamilyMetricLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface_address_family iosxr_router_isis_interface_address_family}
*/
export class RouterIsisInterfaceAddressFamily extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_router_isis_interface_address_family";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterIsisInterfaceAddressFamily resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterIsisInterfaceAddressFamily to import
  * @param importFromId The id of the existing RouterIsisInterfaceAddressFamily that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface_address_family#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterIsisInterfaceAddressFamily to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_router_isis_interface_address_family", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface_address_family iosxr_router_isis_interface_address_family} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterIsisInterfaceAddressFamilyConfig
  */
  public constructor(scope: Construct, id: string, config: RouterIsisInterfaceAddressFamilyConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_router_isis_interface_address_family',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0',
        providerVersionConstraint: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adjacencySidAbsolutes.internalValue = config.adjacencySidAbsolutes;
    this._adjacencySidIndices.internalValue = config.adjacencySidIndices;
    this._advertisePrefixRoutePolicy = config.advertisePrefixRoutePolicy;
    this._advertisePrefixRoutePolicyLevels.internalValue = config.advertisePrefixRoutePolicyLevels;
    this._afName = config.afName;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._fastRerouteLevels.internalValue = config.fastRerouteLevels;
    this._fastReroutePerLink = config.fastReroutePerLink;
    this._fastReroutePerPrefix = config.fastReroutePerPrefix;
    this._interfaceName = config.interfaceName;
    this._metricDefault = config.metricDefault;
    this._metricLevels.internalValue = config.metricLevels;
    this._metricMaximum = config.metricMaximum;
    this._processId = config.processId;
    this._safName = config.safName;
    this._tag = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adjacency_sid_absolutes - computed: false, optional: true, required: false
  private _adjacencySidAbsolutes = new RouterIsisInterfaceAddressFamilyAdjacencySidAbsolutesList(this, "adjacency_sid_absolutes", false);
  public get adjacencySidAbsolutes() {
    return this._adjacencySidAbsolutes;
  }
  public putAdjacencySidAbsolutes(value: RouterIsisInterfaceAddressFamilyAdjacencySidAbsolutes[] | cdktf.IResolvable) {
    this._adjacencySidAbsolutes.internalValue = value;
  }
  public resetAdjacencySidAbsolutes() {
    this._adjacencySidAbsolutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjacencySidAbsolutesInput() {
    return this._adjacencySidAbsolutes.internalValue;
  }

  // adjacency_sid_indices - computed: false, optional: true, required: false
  private _adjacencySidIndices = new RouterIsisInterfaceAddressFamilyAdjacencySidIndicesList(this, "adjacency_sid_indices", false);
  public get adjacencySidIndices() {
    return this._adjacencySidIndices;
  }
  public putAdjacencySidIndices(value: RouterIsisInterfaceAddressFamilyAdjacencySidIndices[] | cdktf.IResolvable) {
    this._adjacencySidIndices.internalValue = value;
  }
  public resetAdjacencySidIndices() {
    this._adjacencySidIndices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjacencySidIndicesInput() {
    return this._adjacencySidIndices.internalValue;
  }

  // advertise_prefix_route_policy - computed: false, optional: true, required: false
  private _advertisePrefixRoutePolicy?: string; 
  public get advertisePrefixRoutePolicy() {
    return this.getStringAttribute('advertise_prefix_route_policy');
  }
  public set advertisePrefixRoutePolicy(value: string) {
    this._advertisePrefixRoutePolicy = value;
  }
  public resetAdvertisePrefixRoutePolicy() {
    this._advertisePrefixRoutePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisePrefixRoutePolicyInput() {
    return this._advertisePrefixRoutePolicy;
  }

  // advertise_prefix_route_policy_levels - computed: false, optional: true, required: false
  private _advertisePrefixRoutePolicyLevels = new RouterIsisInterfaceAddressFamilyAdvertisePrefixRoutePolicyLevelsList(this, "advertise_prefix_route_policy_levels", false);
  public get advertisePrefixRoutePolicyLevels() {
    return this._advertisePrefixRoutePolicyLevels;
  }
  public putAdvertisePrefixRoutePolicyLevels(value: RouterIsisInterfaceAddressFamilyAdvertisePrefixRoutePolicyLevels[] | cdktf.IResolvable) {
    this._advertisePrefixRoutePolicyLevels.internalValue = value;
  }
  public resetAdvertisePrefixRoutePolicyLevels() {
    this._advertisePrefixRoutePolicyLevels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisePrefixRoutePolicyLevelsInput() {
    return this._advertisePrefixRoutePolicyLevels.internalValue;
  }

  // af_name - computed: false, optional: false, required: true
  private _afName?: string; 
  public get afName() {
    return this.getStringAttribute('af_name');
  }
  public set afName(value: string) {
    this._afName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get afNameInput() {
    return this._afName;
  }

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // fast_reroute_levels - computed: false, optional: true, required: false
  private _fastRerouteLevels = new RouterIsisInterfaceAddressFamilyFastRerouteLevelsList(this, "fast_reroute_levels", false);
  public get fastRerouteLevels() {
    return this._fastRerouteLevels;
  }
  public putFastRerouteLevels(value: RouterIsisInterfaceAddressFamilyFastRerouteLevels[] | cdktf.IResolvable) {
    this._fastRerouteLevels.internalValue = value;
  }
  public resetFastRerouteLevels() {
    this._fastRerouteLevels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastRerouteLevelsInput() {
    return this._fastRerouteLevels.internalValue;
  }

  // fast_reroute_per_link - computed: false, optional: true, required: false
  private _fastReroutePerLink?: boolean | cdktf.IResolvable; 
  public get fastReroutePerLink() {
    return this.getBooleanAttribute('fast_reroute_per_link');
  }
  public set fastReroutePerLink(value: boolean | cdktf.IResolvable) {
    this._fastReroutePerLink = value;
  }
  public resetFastReroutePerLink() {
    this._fastReroutePerLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastReroutePerLinkInput() {
    return this._fastReroutePerLink;
  }

  // fast_reroute_per_prefix - computed: false, optional: true, required: false
  private _fastReroutePerPrefix?: boolean | cdktf.IResolvable; 
  public get fastReroutePerPrefix() {
    return this.getBooleanAttribute('fast_reroute_per_prefix');
  }
  public set fastReroutePerPrefix(value: boolean | cdktf.IResolvable) {
    this._fastReroutePerPrefix = value;
  }
  public resetFastReroutePerPrefix() {
    this._fastReroutePerPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastReroutePerPrefixInput() {
    return this._fastReroutePerPrefix;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_name - computed: false, optional: false, required: true
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // metric_default - computed: false, optional: true, required: false
  private _metricDefault?: number; 
  public get metricDefault() {
    return this.getNumberAttribute('metric_default');
  }
  public set metricDefault(value: number) {
    this._metricDefault = value;
  }
  public resetMetricDefault() {
    this._metricDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricDefaultInput() {
    return this._metricDefault;
  }

  // metric_levels - computed: false, optional: true, required: false
  private _metricLevels = new RouterIsisInterfaceAddressFamilyMetricLevelsList(this, "metric_levels", false);
  public get metricLevels() {
    return this._metricLevels;
  }
  public putMetricLevels(value: RouterIsisInterfaceAddressFamilyMetricLevels[] | cdktf.IResolvable) {
    this._metricLevels.internalValue = value;
  }
  public resetMetricLevels() {
    this._metricLevels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricLevelsInput() {
    return this._metricLevels.internalValue;
  }

  // metric_maximum - computed: false, optional: true, required: false
  private _metricMaximum?: boolean | cdktf.IResolvable; 
  public get metricMaximum() {
    return this.getBooleanAttribute('metric_maximum');
  }
  public set metricMaximum(value: boolean | cdktf.IResolvable) {
    this._metricMaximum = value;
  }
  public resetMetricMaximum() {
    this._metricMaximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricMaximumInput() {
    return this._metricMaximum;
  }

  // process_id - computed: false, optional: false, required: true
  private _processId?: string; 
  public get processId() {
    return this.getStringAttribute('process_id');
  }
  public set processId(value: string) {
    this._processId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processIdInput() {
    return this._processId;
  }

  // saf_name - computed: false, optional: false, required: true
  private _safName?: string; 
  public get safName() {
    return this.getStringAttribute('saf_name');
  }
  public set safName(value: string) {
    this._safName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get safNameInput() {
    return this._safName;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: number; 
  public get tag() {
    return this.getNumberAttribute('tag');
  }
  public set tag(value: number) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adjacency_sid_absolutes: cdktf.listMapper(routerIsisInterfaceAddressFamilyAdjacencySidAbsolutesToTerraform, false)(this._adjacencySidAbsolutes.internalValue),
      adjacency_sid_indices: cdktf.listMapper(routerIsisInterfaceAddressFamilyAdjacencySidIndicesToTerraform, false)(this._adjacencySidIndices.internalValue),
      advertise_prefix_route_policy: cdktf.stringToTerraform(this._advertisePrefixRoutePolicy),
      advertise_prefix_route_policy_levels: cdktf.listMapper(routerIsisInterfaceAddressFamilyAdvertisePrefixRoutePolicyLevelsToTerraform, false)(this._advertisePrefixRoutePolicyLevels.internalValue),
      af_name: cdktf.stringToTerraform(this._afName),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      fast_reroute_levels: cdktf.listMapper(routerIsisInterfaceAddressFamilyFastRerouteLevelsToTerraform, false)(this._fastRerouteLevels.internalValue),
      fast_reroute_per_link: cdktf.booleanToTerraform(this._fastReroutePerLink),
      fast_reroute_per_prefix: cdktf.booleanToTerraform(this._fastReroutePerPrefix),
      interface_name: cdktf.stringToTerraform(this._interfaceName),
      metric_default: cdktf.numberToTerraform(this._metricDefault),
      metric_levels: cdktf.listMapper(routerIsisInterfaceAddressFamilyMetricLevelsToTerraform, false)(this._metricLevels.internalValue),
      metric_maximum: cdktf.booleanToTerraform(this._metricMaximum),
      process_id: cdktf.stringToTerraform(this._processId),
      saf_name: cdktf.stringToTerraform(this._safName),
      tag: cdktf.numberToTerraform(this._tag),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adjacency_sid_absolutes: {
        value: cdktf.listMapperHcl(routerIsisInterfaceAddressFamilyAdjacencySidAbsolutesToHclTerraform, false)(this._adjacencySidAbsolutes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisInterfaceAddressFamilyAdjacencySidAbsolutesList",
      },
      adjacency_sid_indices: {
        value: cdktf.listMapperHcl(routerIsisInterfaceAddressFamilyAdjacencySidIndicesToHclTerraform, false)(this._adjacencySidIndices.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisInterfaceAddressFamilyAdjacencySidIndicesList",
      },
      advertise_prefix_route_policy: {
        value: cdktf.stringToHclTerraform(this._advertisePrefixRoutePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advertise_prefix_route_policy_levels: {
        value: cdktf.listMapperHcl(routerIsisInterfaceAddressFamilyAdvertisePrefixRoutePolicyLevelsToHclTerraform, false)(this._advertisePrefixRoutePolicyLevels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisInterfaceAddressFamilyAdvertisePrefixRoutePolicyLevelsList",
      },
      af_name: {
        value: cdktf.stringToHclTerraform(this._afName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fast_reroute_levels: {
        value: cdktf.listMapperHcl(routerIsisInterfaceAddressFamilyFastRerouteLevelsToHclTerraform, false)(this._fastRerouteLevels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisInterfaceAddressFamilyFastRerouteLevelsList",
      },
      fast_reroute_per_link: {
        value: cdktf.booleanToHclTerraform(this._fastReroutePerLink),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fast_reroute_per_prefix: {
        value: cdktf.booleanToHclTerraform(this._fastReroutePerPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interface_name: {
        value: cdktf.stringToHclTerraform(this._interfaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric_default: {
        value: cdktf.numberToHclTerraform(this._metricDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metric_levels: {
        value: cdktf.listMapperHcl(routerIsisInterfaceAddressFamilyMetricLevelsToHclTerraform, false)(this._metricLevels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisInterfaceAddressFamilyMetricLevelsList",
      },
      metric_maximum: {
        value: cdktf.booleanToHclTerraform(this._metricMaximum),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      process_id: {
        value: cdktf.stringToHclTerraform(this._processId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saf_name: {
        value: cdktf.stringToHclTerraform(this._safName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag: {
        value: cdktf.numberToHclTerraform(this._tag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
