// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterStaticIpv4UnicastConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#delete_mode RouterStaticIpv4Unicast#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#device RouterStaticIpv4Unicast#device}
  */
  readonly device?: string;
  /**
  * Forwarding router's address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#nexthop_addresses RouterStaticIpv4Unicast#nexthop_addresses}
  */
  readonly nexthopAddresses?: RouterStaticIpv4UnicastNexthopAddresses[] | cdktf.IResolvable;
  /**
  * Forwarding interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#nexthop_interface_addresses RouterStaticIpv4Unicast#nexthop_interface_addresses}
  */
  readonly nexthopInterfaceAddresses?: RouterStaticIpv4UnicastNexthopInterfaceAddresses[] | cdktf.IResolvable;
  /**
  * Forwarding interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#nexthop_interfaces RouterStaticIpv4Unicast#nexthop_interfaces}
  */
  readonly nexthopInterfaces?: RouterStaticIpv4UnicastNexthopInterfaces[] | cdktf.IResolvable;
  /**
  * Destination prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#prefix_address RouterStaticIpv4Unicast#prefix_address}
  */
  readonly prefixAddress: string;
  /**
  * Destination prefix length
  *   - Range: `0`-`128`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#prefix_length RouterStaticIpv4Unicast#prefix_length}
  */
  readonly prefixLength: number;
  /**
  * Destination VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#vrfs RouterStaticIpv4Unicast#vrfs}
  */
  readonly vrfs?: RouterStaticIpv4UnicastVrfs[] | cdktf.IResolvable;
}
export interface RouterStaticIpv4UnicastNexthopAddresses {
  /**
  * Forwarding router's address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#address RouterStaticIpv4Unicast#address}
  */
  readonly address: string;
  /**
  * Hello interval
  *   - Range: `3`-`30000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#bfd_fast_detect_minimum_interval RouterStaticIpv4Unicast#bfd_fast_detect_minimum_interval}
  */
  readonly bfdFastDetectMinimumInterval?: number;
  /**
  * Detect multiplier
  *   - Range: `1`-`10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#bfd_fast_detect_multiplier RouterStaticIpv4Unicast#bfd_fast_detect_multiplier}
  */
  readonly bfdFastDetectMultiplier?: number;
  /**
  * description of the static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#description RouterStaticIpv4Unicast#description}
  */
  readonly description?: string;
  /**
  * Distance metric for this route
  *   - Range: `1`-`254`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#distance_metric RouterStaticIpv4Unicast#distance_metric}
  */
  readonly distanceMetric?: number;
  /**
  * Set metric for this route
  *   - Range: `1`-`16777214`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#metric RouterStaticIpv4Unicast#metric}
  */
  readonly metric?: number;
  /**
  * Permanent route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#permanent RouterStaticIpv4Unicast#permanent}
  */
  readonly permanent?: boolean | cdktf.IResolvable;
  /**
  * Set tag for this route
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#tag RouterStaticIpv4Unicast#tag}
  */
  readonly tag?: number;
  /**
  * Enable object tracking for static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#track RouterStaticIpv4Unicast#track}
  */
  readonly track?: string;
}

export function routerStaticIpv4UnicastNexthopAddressesToTerraform(struct?: RouterStaticIpv4UnicastNexthopAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    bfd_fast_detect_minimum_interval: cdktf.numberToTerraform(struct!.bfdFastDetectMinimumInterval),
    bfd_fast_detect_multiplier: cdktf.numberToTerraform(struct!.bfdFastDetectMultiplier),
    description: cdktf.stringToTerraform(struct!.description),
    distance_metric: cdktf.numberToTerraform(struct!.distanceMetric),
    metric: cdktf.numberToTerraform(struct!.metric),
    permanent: cdktf.booleanToTerraform(struct!.permanent),
    tag: cdktf.numberToTerraform(struct!.tag),
    track: cdktf.stringToTerraform(struct!.track),
  }
}


export function routerStaticIpv4UnicastNexthopAddressesToHclTerraform(struct?: RouterStaticIpv4UnicastNexthopAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bfd_fast_detect_minimum_interval: {
      value: cdktf.numberToHclTerraform(struct!.bfdFastDetectMinimumInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bfd_fast_detect_multiplier: {
      value: cdktf.numberToHclTerraform(struct!.bfdFastDetectMultiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    distance_metric: {
      value: cdktf.numberToHclTerraform(struct!.distanceMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permanent: {
      value: cdktf.booleanToHclTerraform(struct!.permanent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tag: {
      value: cdktf.numberToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    track: {
      value: cdktf.stringToHclTerraform(struct!.track),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterStaticIpv4UnicastNexthopAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterStaticIpv4UnicastNexthopAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._bfdFastDetectMinimumInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdFastDetectMinimumInterval = this._bfdFastDetectMinimumInterval;
    }
    if (this._bfdFastDetectMultiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdFastDetectMultiplier = this._bfdFastDetectMultiplier;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._distanceMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.distanceMetric = this._distanceMetric;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._permanent !== undefined) {
      hasAnyValues = true;
      internalValueResult.permanent = this._permanent;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._track !== undefined) {
      hasAnyValues = true;
      internalValueResult.track = this._track;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterStaticIpv4UnicastNexthopAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._bfdFastDetectMinimumInterval = undefined;
      this._bfdFastDetectMultiplier = undefined;
      this._description = undefined;
      this._distanceMetric = undefined;
      this._metric = undefined;
      this._permanent = undefined;
      this._tag = undefined;
      this._track = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._bfdFastDetectMinimumInterval = value.bfdFastDetectMinimumInterval;
      this._bfdFastDetectMultiplier = value.bfdFastDetectMultiplier;
      this._description = value.description;
      this._distanceMetric = value.distanceMetric;
      this._metric = value.metric;
      this._permanent = value.permanent;
      this._tag = value.tag;
      this._track = value.track;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // bfd_fast_detect_minimum_interval - computed: false, optional: true, required: false
  private _bfdFastDetectMinimumInterval?: number; 
  public get bfdFastDetectMinimumInterval() {
    return this.getNumberAttribute('bfd_fast_detect_minimum_interval');
  }
  public set bfdFastDetectMinimumInterval(value: number) {
    this._bfdFastDetectMinimumInterval = value;
  }
  public resetBfdFastDetectMinimumInterval() {
    this._bfdFastDetectMinimumInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdFastDetectMinimumIntervalInput() {
    return this._bfdFastDetectMinimumInterval;
  }

  // bfd_fast_detect_multiplier - computed: false, optional: true, required: false
  private _bfdFastDetectMultiplier?: number; 
  public get bfdFastDetectMultiplier() {
    return this.getNumberAttribute('bfd_fast_detect_multiplier');
  }
  public set bfdFastDetectMultiplier(value: number) {
    this._bfdFastDetectMultiplier = value;
  }
  public resetBfdFastDetectMultiplier() {
    this._bfdFastDetectMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdFastDetectMultiplierInput() {
    return this._bfdFastDetectMultiplier;
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

  // distance_metric - computed: false, optional: true, required: false
  private _distanceMetric?: number; 
  public get distanceMetric() {
    return this.getNumberAttribute('distance_metric');
  }
  public set distanceMetric(value: number) {
    this._distanceMetric = value;
  }
  public resetDistanceMetric() {
    this._distanceMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceMetricInput() {
    return this._distanceMetric;
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // permanent - computed: false, optional: true, required: false
  private _permanent?: boolean | cdktf.IResolvable; 
  public get permanent() {
    return this.getBooleanAttribute('permanent');
  }
  public set permanent(value: boolean | cdktf.IResolvable) {
    this._permanent = value;
  }
  public resetPermanent() {
    this._permanent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permanentInput() {
    return this._permanent;
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

  // track - computed: false, optional: true, required: false
  private _track?: string; 
  public get track() {
    return this.getStringAttribute('track');
  }
  public set track(value: string) {
    this._track = value;
  }
  public resetTrack() {
    this._track = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackInput() {
    return this._track;
  }
}

export class RouterStaticIpv4UnicastNexthopAddressesList extends cdktf.ComplexList {
  public internalValue? : RouterStaticIpv4UnicastNexthopAddresses[] | cdktf.IResolvable

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
  public get(index: number): RouterStaticIpv4UnicastNexthopAddressesOutputReference {
    return new RouterStaticIpv4UnicastNexthopAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterStaticIpv4UnicastNexthopInterfaceAddresses {
  /**
  * Forwarding router's address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#address RouterStaticIpv4Unicast#address}
  */
  readonly address: string;
  /**
  * Hello interval
  *   - Range: `3`-`30000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#bfd_fast_detect_minimum_interval RouterStaticIpv4Unicast#bfd_fast_detect_minimum_interval}
  */
  readonly bfdFastDetectMinimumInterval?: number;
  /**
  * Detect multiplier
  *   - Range: `1`-`10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#bfd_fast_detect_multiplier RouterStaticIpv4Unicast#bfd_fast_detect_multiplier}
  */
  readonly bfdFastDetectMultiplier?: number;
  /**
  * description of the static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#description RouterStaticIpv4Unicast#description}
  */
  readonly description?: string;
  /**
  * Distance metric for this route
  *   - Range: `1`-`254`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#distance_metric RouterStaticIpv4Unicast#distance_metric}
  */
  readonly distanceMetric?: number;
  /**
  * Forwarding interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#interface_name RouterStaticIpv4Unicast#interface_name}
  */
  readonly interfaceName: string;
  /**
  * Set metric for this route
  *   - Range: `1`-`16777214`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#metric RouterStaticIpv4Unicast#metric}
  */
  readonly metric?: number;
  /**
  * Permanent route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#permanent RouterStaticIpv4Unicast#permanent}
  */
  readonly permanent?: boolean | cdktf.IResolvable;
  /**
  * Set tag for this route
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#tag RouterStaticIpv4Unicast#tag}
  */
  readonly tag?: number;
  /**
  * Enable object tracking for static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#track RouterStaticIpv4Unicast#track}
  */
  readonly track?: string;
}

export function routerStaticIpv4UnicastNexthopInterfaceAddressesToTerraform(struct?: RouterStaticIpv4UnicastNexthopInterfaceAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    bfd_fast_detect_minimum_interval: cdktf.numberToTerraform(struct!.bfdFastDetectMinimumInterval),
    bfd_fast_detect_multiplier: cdktf.numberToTerraform(struct!.bfdFastDetectMultiplier),
    description: cdktf.stringToTerraform(struct!.description),
    distance_metric: cdktf.numberToTerraform(struct!.distanceMetric),
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    metric: cdktf.numberToTerraform(struct!.metric),
    permanent: cdktf.booleanToTerraform(struct!.permanent),
    tag: cdktf.numberToTerraform(struct!.tag),
    track: cdktf.stringToTerraform(struct!.track),
  }
}


export function routerStaticIpv4UnicastNexthopInterfaceAddressesToHclTerraform(struct?: RouterStaticIpv4UnicastNexthopInterfaceAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bfd_fast_detect_minimum_interval: {
      value: cdktf.numberToHclTerraform(struct!.bfdFastDetectMinimumInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bfd_fast_detect_multiplier: {
      value: cdktf.numberToHclTerraform(struct!.bfdFastDetectMultiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    distance_metric: {
      value: cdktf.numberToHclTerraform(struct!.distanceMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permanent: {
      value: cdktf.booleanToHclTerraform(struct!.permanent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tag: {
      value: cdktf.numberToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    track: {
      value: cdktf.stringToHclTerraform(struct!.track),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterStaticIpv4UnicastNexthopInterfaceAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterStaticIpv4UnicastNexthopInterfaceAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._bfdFastDetectMinimumInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdFastDetectMinimumInterval = this._bfdFastDetectMinimumInterval;
    }
    if (this._bfdFastDetectMultiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdFastDetectMultiplier = this._bfdFastDetectMultiplier;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._distanceMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.distanceMetric = this._distanceMetric;
    }
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._permanent !== undefined) {
      hasAnyValues = true;
      internalValueResult.permanent = this._permanent;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._track !== undefined) {
      hasAnyValues = true;
      internalValueResult.track = this._track;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterStaticIpv4UnicastNexthopInterfaceAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._bfdFastDetectMinimumInterval = undefined;
      this._bfdFastDetectMultiplier = undefined;
      this._description = undefined;
      this._distanceMetric = undefined;
      this._interfaceName = undefined;
      this._metric = undefined;
      this._permanent = undefined;
      this._tag = undefined;
      this._track = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._bfdFastDetectMinimumInterval = value.bfdFastDetectMinimumInterval;
      this._bfdFastDetectMultiplier = value.bfdFastDetectMultiplier;
      this._description = value.description;
      this._distanceMetric = value.distanceMetric;
      this._interfaceName = value.interfaceName;
      this._metric = value.metric;
      this._permanent = value.permanent;
      this._tag = value.tag;
      this._track = value.track;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // bfd_fast_detect_minimum_interval - computed: false, optional: true, required: false
  private _bfdFastDetectMinimumInterval?: number; 
  public get bfdFastDetectMinimumInterval() {
    return this.getNumberAttribute('bfd_fast_detect_minimum_interval');
  }
  public set bfdFastDetectMinimumInterval(value: number) {
    this._bfdFastDetectMinimumInterval = value;
  }
  public resetBfdFastDetectMinimumInterval() {
    this._bfdFastDetectMinimumInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdFastDetectMinimumIntervalInput() {
    return this._bfdFastDetectMinimumInterval;
  }

  // bfd_fast_detect_multiplier - computed: false, optional: true, required: false
  private _bfdFastDetectMultiplier?: number; 
  public get bfdFastDetectMultiplier() {
    return this.getNumberAttribute('bfd_fast_detect_multiplier');
  }
  public set bfdFastDetectMultiplier(value: number) {
    this._bfdFastDetectMultiplier = value;
  }
  public resetBfdFastDetectMultiplier() {
    this._bfdFastDetectMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdFastDetectMultiplierInput() {
    return this._bfdFastDetectMultiplier;
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

  // distance_metric - computed: false, optional: true, required: false
  private _distanceMetric?: number; 
  public get distanceMetric() {
    return this.getNumberAttribute('distance_metric');
  }
  public set distanceMetric(value: number) {
    this._distanceMetric = value;
  }
  public resetDistanceMetric() {
    this._distanceMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceMetricInput() {
    return this._distanceMetric;
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

  // metric - computed: false, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // permanent - computed: false, optional: true, required: false
  private _permanent?: boolean | cdktf.IResolvable; 
  public get permanent() {
    return this.getBooleanAttribute('permanent');
  }
  public set permanent(value: boolean | cdktf.IResolvable) {
    this._permanent = value;
  }
  public resetPermanent() {
    this._permanent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permanentInput() {
    return this._permanent;
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

  // track - computed: false, optional: true, required: false
  private _track?: string; 
  public get track() {
    return this.getStringAttribute('track');
  }
  public set track(value: string) {
    this._track = value;
  }
  public resetTrack() {
    this._track = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackInput() {
    return this._track;
  }
}

export class RouterStaticIpv4UnicastNexthopInterfaceAddressesList extends cdktf.ComplexList {
  public internalValue? : RouterStaticIpv4UnicastNexthopInterfaceAddresses[] | cdktf.IResolvable

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
  public get(index: number): RouterStaticIpv4UnicastNexthopInterfaceAddressesOutputReference {
    return new RouterStaticIpv4UnicastNexthopInterfaceAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterStaticIpv4UnicastNexthopInterfaces {
  /**
  * description of the static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#description RouterStaticIpv4Unicast#description}
  */
  readonly description?: string;
  /**
  * Distance metric for this route
  *   - Range: `1`-`254`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#distance_metric RouterStaticIpv4Unicast#distance_metric}
  */
  readonly distanceMetric?: number;
  /**
  * Forwarding interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#interface_name RouterStaticIpv4Unicast#interface_name}
  */
  readonly interfaceName: string;
  /**
  * Set metric for this route
  *   - Range: `1`-`16777214`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#metric RouterStaticIpv4Unicast#metric}
  */
  readonly metric?: number;
  /**
  * Permanent route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#permanent RouterStaticIpv4Unicast#permanent}
  */
  readonly permanent?: boolean | cdktf.IResolvable;
  /**
  * Set tag for this route
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#tag RouterStaticIpv4Unicast#tag}
  */
  readonly tag?: number;
  /**
  * Enable object tracking for static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#track RouterStaticIpv4Unicast#track}
  */
  readonly track?: string;
}

export function routerStaticIpv4UnicastNexthopInterfacesToTerraform(struct?: RouterStaticIpv4UnicastNexthopInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    distance_metric: cdktf.numberToTerraform(struct!.distanceMetric),
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    metric: cdktf.numberToTerraform(struct!.metric),
    permanent: cdktf.booleanToTerraform(struct!.permanent),
    tag: cdktf.numberToTerraform(struct!.tag),
    track: cdktf.stringToTerraform(struct!.track),
  }
}


export function routerStaticIpv4UnicastNexthopInterfacesToHclTerraform(struct?: RouterStaticIpv4UnicastNexthopInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    distance_metric: {
      value: cdktf.numberToHclTerraform(struct!.distanceMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permanent: {
      value: cdktf.booleanToHclTerraform(struct!.permanent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tag: {
      value: cdktf.numberToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    track: {
      value: cdktf.stringToHclTerraform(struct!.track),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterStaticIpv4UnicastNexthopInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterStaticIpv4UnicastNexthopInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._distanceMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.distanceMetric = this._distanceMetric;
    }
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._permanent !== undefined) {
      hasAnyValues = true;
      internalValueResult.permanent = this._permanent;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._track !== undefined) {
      hasAnyValues = true;
      internalValueResult.track = this._track;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterStaticIpv4UnicastNexthopInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._distanceMetric = undefined;
      this._interfaceName = undefined;
      this._metric = undefined;
      this._permanent = undefined;
      this._tag = undefined;
      this._track = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._distanceMetric = value.distanceMetric;
      this._interfaceName = value.interfaceName;
      this._metric = value.metric;
      this._permanent = value.permanent;
      this._tag = value.tag;
      this._track = value.track;
    }
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

  // distance_metric - computed: false, optional: true, required: false
  private _distanceMetric?: number; 
  public get distanceMetric() {
    return this.getNumberAttribute('distance_metric');
  }
  public set distanceMetric(value: number) {
    this._distanceMetric = value;
  }
  public resetDistanceMetric() {
    this._distanceMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceMetricInput() {
    return this._distanceMetric;
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

  // metric - computed: false, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // permanent - computed: false, optional: true, required: false
  private _permanent?: boolean | cdktf.IResolvable; 
  public get permanent() {
    return this.getBooleanAttribute('permanent');
  }
  public set permanent(value: boolean | cdktf.IResolvable) {
    this._permanent = value;
  }
  public resetPermanent() {
    this._permanent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permanentInput() {
    return this._permanent;
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

  // track - computed: false, optional: true, required: false
  private _track?: string; 
  public get track() {
    return this.getStringAttribute('track');
  }
  public set track(value: string) {
    this._track = value;
  }
  public resetTrack() {
    this._track = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackInput() {
    return this._track;
  }
}

export class RouterStaticIpv4UnicastNexthopInterfacesList extends cdktf.ComplexList {
  public internalValue? : RouterStaticIpv4UnicastNexthopInterfaces[] | cdktf.IResolvable

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
  public get(index: number): RouterStaticIpv4UnicastNexthopInterfacesOutputReference {
    return new RouterStaticIpv4UnicastNexthopInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterStaticIpv4UnicastVrfsNexthopAddresses {
  /**
  * Forwarding router's address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#address RouterStaticIpv4Unicast#address}
  */
  readonly address: string;
  /**
  * Hello interval
  *   - Range: `3`-`30000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#bfd_fast_detect_minimum_interval RouterStaticIpv4Unicast#bfd_fast_detect_minimum_interval}
  */
  readonly bfdFastDetectMinimumInterval?: number;
  /**
  * Detect multiplier
  *   - Range: `1`-`10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#bfd_fast_detect_multiplier RouterStaticIpv4Unicast#bfd_fast_detect_multiplier}
  */
  readonly bfdFastDetectMultiplier?: number;
  /**
  * description of the static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#description RouterStaticIpv4Unicast#description}
  */
  readonly description?: string;
  /**
  * Distance metric for this route
  *   - Range: `1`-`254`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#distance_metric RouterStaticIpv4Unicast#distance_metric}
  */
  readonly distanceMetric?: number;
  /**
  * Set metric for this route
  *   - Range: `1`-`16777214`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#metric RouterStaticIpv4Unicast#metric}
  */
  readonly metric?: number;
  /**
  * Permanent route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#permanent RouterStaticIpv4Unicast#permanent}
  */
  readonly permanent?: boolean | cdktf.IResolvable;
  /**
  * Set tag for this route
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#tag RouterStaticIpv4Unicast#tag}
  */
  readonly tag?: number;
  /**
  * Enable object tracking for static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#track RouterStaticIpv4Unicast#track}
  */
  readonly track?: string;
}

export function routerStaticIpv4UnicastVrfsNexthopAddressesToTerraform(struct?: RouterStaticIpv4UnicastVrfsNexthopAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    bfd_fast_detect_minimum_interval: cdktf.numberToTerraform(struct!.bfdFastDetectMinimumInterval),
    bfd_fast_detect_multiplier: cdktf.numberToTerraform(struct!.bfdFastDetectMultiplier),
    description: cdktf.stringToTerraform(struct!.description),
    distance_metric: cdktf.numberToTerraform(struct!.distanceMetric),
    metric: cdktf.numberToTerraform(struct!.metric),
    permanent: cdktf.booleanToTerraform(struct!.permanent),
    tag: cdktf.numberToTerraform(struct!.tag),
    track: cdktf.stringToTerraform(struct!.track),
  }
}


export function routerStaticIpv4UnicastVrfsNexthopAddressesToHclTerraform(struct?: RouterStaticIpv4UnicastVrfsNexthopAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bfd_fast_detect_minimum_interval: {
      value: cdktf.numberToHclTerraform(struct!.bfdFastDetectMinimumInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bfd_fast_detect_multiplier: {
      value: cdktf.numberToHclTerraform(struct!.bfdFastDetectMultiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    distance_metric: {
      value: cdktf.numberToHclTerraform(struct!.distanceMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permanent: {
      value: cdktf.booleanToHclTerraform(struct!.permanent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tag: {
      value: cdktf.numberToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    track: {
      value: cdktf.stringToHclTerraform(struct!.track),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterStaticIpv4UnicastVrfsNexthopAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterStaticIpv4UnicastVrfsNexthopAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._bfdFastDetectMinimumInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdFastDetectMinimumInterval = this._bfdFastDetectMinimumInterval;
    }
    if (this._bfdFastDetectMultiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdFastDetectMultiplier = this._bfdFastDetectMultiplier;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._distanceMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.distanceMetric = this._distanceMetric;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._permanent !== undefined) {
      hasAnyValues = true;
      internalValueResult.permanent = this._permanent;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._track !== undefined) {
      hasAnyValues = true;
      internalValueResult.track = this._track;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterStaticIpv4UnicastVrfsNexthopAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._bfdFastDetectMinimumInterval = undefined;
      this._bfdFastDetectMultiplier = undefined;
      this._description = undefined;
      this._distanceMetric = undefined;
      this._metric = undefined;
      this._permanent = undefined;
      this._tag = undefined;
      this._track = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._bfdFastDetectMinimumInterval = value.bfdFastDetectMinimumInterval;
      this._bfdFastDetectMultiplier = value.bfdFastDetectMultiplier;
      this._description = value.description;
      this._distanceMetric = value.distanceMetric;
      this._metric = value.metric;
      this._permanent = value.permanent;
      this._tag = value.tag;
      this._track = value.track;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // bfd_fast_detect_minimum_interval - computed: false, optional: true, required: false
  private _bfdFastDetectMinimumInterval?: number; 
  public get bfdFastDetectMinimumInterval() {
    return this.getNumberAttribute('bfd_fast_detect_minimum_interval');
  }
  public set bfdFastDetectMinimumInterval(value: number) {
    this._bfdFastDetectMinimumInterval = value;
  }
  public resetBfdFastDetectMinimumInterval() {
    this._bfdFastDetectMinimumInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdFastDetectMinimumIntervalInput() {
    return this._bfdFastDetectMinimumInterval;
  }

  // bfd_fast_detect_multiplier - computed: false, optional: true, required: false
  private _bfdFastDetectMultiplier?: number; 
  public get bfdFastDetectMultiplier() {
    return this.getNumberAttribute('bfd_fast_detect_multiplier');
  }
  public set bfdFastDetectMultiplier(value: number) {
    this._bfdFastDetectMultiplier = value;
  }
  public resetBfdFastDetectMultiplier() {
    this._bfdFastDetectMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdFastDetectMultiplierInput() {
    return this._bfdFastDetectMultiplier;
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

  // distance_metric - computed: false, optional: true, required: false
  private _distanceMetric?: number; 
  public get distanceMetric() {
    return this.getNumberAttribute('distance_metric');
  }
  public set distanceMetric(value: number) {
    this._distanceMetric = value;
  }
  public resetDistanceMetric() {
    this._distanceMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceMetricInput() {
    return this._distanceMetric;
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // permanent - computed: false, optional: true, required: false
  private _permanent?: boolean | cdktf.IResolvable; 
  public get permanent() {
    return this.getBooleanAttribute('permanent');
  }
  public set permanent(value: boolean | cdktf.IResolvable) {
    this._permanent = value;
  }
  public resetPermanent() {
    this._permanent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permanentInput() {
    return this._permanent;
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

  // track - computed: false, optional: true, required: false
  private _track?: string; 
  public get track() {
    return this.getStringAttribute('track');
  }
  public set track(value: string) {
    this._track = value;
  }
  public resetTrack() {
    this._track = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackInput() {
    return this._track;
  }
}

export class RouterStaticIpv4UnicastVrfsNexthopAddressesList extends cdktf.ComplexList {
  public internalValue? : RouterStaticIpv4UnicastVrfsNexthopAddresses[] | cdktf.IResolvable

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
  public get(index: number): RouterStaticIpv4UnicastVrfsNexthopAddressesOutputReference {
    return new RouterStaticIpv4UnicastVrfsNexthopAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterStaticIpv4UnicastVrfsNexthopInterfaceAddresses {
  /**
  * Forwarding router's address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#address RouterStaticIpv4Unicast#address}
  */
  readonly address: string;
  /**
  * Hello interval
  *   - Range: `3`-`30000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#bfd_fast_detect_minimum_interval RouterStaticIpv4Unicast#bfd_fast_detect_minimum_interval}
  */
  readonly bfdFastDetectMinimumInterval?: number;
  /**
  * Detect multiplier
  *   - Range: `1`-`10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#bfd_fast_detect_multiplier RouterStaticIpv4Unicast#bfd_fast_detect_multiplier}
  */
  readonly bfdFastDetectMultiplier?: number;
  /**
  * description of the static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#description RouterStaticIpv4Unicast#description}
  */
  readonly description?: string;
  /**
  * Distance metric for this route
  *   - Range: `1`-`254`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#distance_metric RouterStaticIpv4Unicast#distance_metric}
  */
  readonly distanceMetric?: number;
  /**
  * Forwarding interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#interface_name RouterStaticIpv4Unicast#interface_name}
  */
  readonly interfaceName: string;
  /**
  * Set metric for this route
  *   - Range: `1`-`16777214`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#metric RouterStaticIpv4Unicast#metric}
  */
  readonly metric?: number;
  /**
  * Permanent route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#permanent RouterStaticIpv4Unicast#permanent}
  */
  readonly permanent?: boolean | cdktf.IResolvable;
  /**
  * Set tag for this route
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#tag RouterStaticIpv4Unicast#tag}
  */
  readonly tag?: number;
  /**
  * Enable object tracking for static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#track RouterStaticIpv4Unicast#track}
  */
  readonly track?: string;
}

export function routerStaticIpv4UnicastVrfsNexthopInterfaceAddressesToTerraform(struct?: RouterStaticIpv4UnicastVrfsNexthopInterfaceAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    bfd_fast_detect_minimum_interval: cdktf.numberToTerraform(struct!.bfdFastDetectMinimumInterval),
    bfd_fast_detect_multiplier: cdktf.numberToTerraform(struct!.bfdFastDetectMultiplier),
    description: cdktf.stringToTerraform(struct!.description),
    distance_metric: cdktf.numberToTerraform(struct!.distanceMetric),
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    metric: cdktf.numberToTerraform(struct!.metric),
    permanent: cdktf.booleanToTerraform(struct!.permanent),
    tag: cdktf.numberToTerraform(struct!.tag),
    track: cdktf.stringToTerraform(struct!.track),
  }
}


export function routerStaticIpv4UnicastVrfsNexthopInterfaceAddressesToHclTerraform(struct?: RouterStaticIpv4UnicastVrfsNexthopInterfaceAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bfd_fast_detect_minimum_interval: {
      value: cdktf.numberToHclTerraform(struct!.bfdFastDetectMinimumInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bfd_fast_detect_multiplier: {
      value: cdktf.numberToHclTerraform(struct!.bfdFastDetectMultiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    distance_metric: {
      value: cdktf.numberToHclTerraform(struct!.distanceMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permanent: {
      value: cdktf.booleanToHclTerraform(struct!.permanent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tag: {
      value: cdktf.numberToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    track: {
      value: cdktf.stringToHclTerraform(struct!.track),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterStaticIpv4UnicastVrfsNexthopInterfaceAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterStaticIpv4UnicastVrfsNexthopInterfaceAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._bfdFastDetectMinimumInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdFastDetectMinimumInterval = this._bfdFastDetectMinimumInterval;
    }
    if (this._bfdFastDetectMultiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdFastDetectMultiplier = this._bfdFastDetectMultiplier;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._distanceMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.distanceMetric = this._distanceMetric;
    }
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._permanent !== undefined) {
      hasAnyValues = true;
      internalValueResult.permanent = this._permanent;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._track !== undefined) {
      hasAnyValues = true;
      internalValueResult.track = this._track;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterStaticIpv4UnicastVrfsNexthopInterfaceAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._bfdFastDetectMinimumInterval = undefined;
      this._bfdFastDetectMultiplier = undefined;
      this._description = undefined;
      this._distanceMetric = undefined;
      this._interfaceName = undefined;
      this._metric = undefined;
      this._permanent = undefined;
      this._tag = undefined;
      this._track = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._bfdFastDetectMinimumInterval = value.bfdFastDetectMinimumInterval;
      this._bfdFastDetectMultiplier = value.bfdFastDetectMultiplier;
      this._description = value.description;
      this._distanceMetric = value.distanceMetric;
      this._interfaceName = value.interfaceName;
      this._metric = value.metric;
      this._permanent = value.permanent;
      this._tag = value.tag;
      this._track = value.track;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // bfd_fast_detect_minimum_interval - computed: false, optional: true, required: false
  private _bfdFastDetectMinimumInterval?: number; 
  public get bfdFastDetectMinimumInterval() {
    return this.getNumberAttribute('bfd_fast_detect_minimum_interval');
  }
  public set bfdFastDetectMinimumInterval(value: number) {
    this._bfdFastDetectMinimumInterval = value;
  }
  public resetBfdFastDetectMinimumInterval() {
    this._bfdFastDetectMinimumInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdFastDetectMinimumIntervalInput() {
    return this._bfdFastDetectMinimumInterval;
  }

  // bfd_fast_detect_multiplier - computed: false, optional: true, required: false
  private _bfdFastDetectMultiplier?: number; 
  public get bfdFastDetectMultiplier() {
    return this.getNumberAttribute('bfd_fast_detect_multiplier');
  }
  public set bfdFastDetectMultiplier(value: number) {
    this._bfdFastDetectMultiplier = value;
  }
  public resetBfdFastDetectMultiplier() {
    this._bfdFastDetectMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdFastDetectMultiplierInput() {
    return this._bfdFastDetectMultiplier;
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

  // distance_metric - computed: false, optional: true, required: false
  private _distanceMetric?: number; 
  public get distanceMetric() {
    return this.getNumberAttribute('distance_metric');
  }
  public set distanceMetric(value: number) {
    this._distanceMetric = value;
  }
  public resetDistanceMetric() {
    this._distanceMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceMetricInput() {
    return this._distanceMetric;
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

  // metric - computed: false, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // permanent - computed: false, optional: true, required: false
  private _permanent?: boolean | cdktf.IResolvable; 
  public get permanent() {
    return this.getBooleanAttribute('permanent');
  }
  public set permanent(value: boolean | cdktf.IResolvable) {
    this._permanent = value;
  }
  public resetPermanent() {
    this._permanent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permanentInput() {
    return this._permanent;
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

  // track - computed: false, optional: true, required: false
  private _track?: string; 
  public get track() {
    return this.getStringAttribute('track');
  }
  public set track(value: string) {
    this._track = value;
  }
  public resetTrack() {
    this._track = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackInput() {
    return this._track;
  }
}

export class RouterStaticIpv4UnicastVrfsNexthopInterfaceAddressesList extends cdktf.ComplexList {
  public internalValue? : RouterStaticIpv4UnicastVrfsNexthopInterfaceAddresses[] | cdktf.IResolvable

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
  public get(index: number): RouterStaticIpv4UnicastVrfsNexthopInterfaceAddressesOutputReference {
    return new RouterStaticIpv4UnicastVrfsNexthopInterfaceAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterStaticIpv4UnicastVrfsNexthopInterfaces {
  /**
  * description of the static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#description RouterStaticIpv4Unicast#description}
  */
  readonly description?: string;
  /**
  * Distance metric for this route
  *   - Range: `1`-`254`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#distance_metric RouterStaticIpv4Unicast#distance_metric}
  */
  readonly distanceMetric?: number;
  /**
  * Forwarding interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#interface_name RouterStaticIpv4Unicast#interface_name}
  */
  readonly interfaceName: string;
  /**
  * Set metric for this route
  *   - Range: `1`-`16777214`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#metric RouterStaticIpv4Unicast#metric}
  */
  readonly metric?: number;
  /**
  * Permanent route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#permanent RouterStaticIpv4Unicast#permanent}
  */
  readonly permanent?: boolean | cdktf.IResolvable;
  /**
  * Set tag for this route
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#tag RouterStaticIpv4Unicast#tag}
  */
  readonly tag?: number;
  /**
  * Enable object tracking for static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#track RouterStaticIpv4Unicast#track}
  */
  readonly track?: string;
}

export function routerStaticIpv4UnicastVrfsNexthopInterfacesToTerraform(struct?: RouterStaticIpv4UnicastVrfsNexthopInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    distance_metric: cdktf.numberToTerraform(struct!.distanceMetric),
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    metric: cdktf.numberToTerraform(struct!.metric),
    permanent: cdktf.booleanToTerraform(struct!.permanent),
    tag: cdktf.numberToTerraform(struct!.tag),
    track: cdktf.stringToTerraform(struct!.track),
  }
}


export function routerStaticIpv4UnicastVrfsNexthopInterfacesToHclTerraform(struct?: RouterStaticIpv4UnicastVrfsNexthopInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    distance_metric: {
      value: cdktf.numberToHclTerraform(struct!.distanceMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permanent: {
      value: cdktf.booleanToHclTerraform(struct!.permanent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tag: {
      value: cdktf.numberToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    track: {
      value: cdktf.stringToHclTerraform(struct!.track),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterStaticIpv4UnicastVrfsNexthopInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterStaticIpv4UnicastVrfsNexthopInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._distanceMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.distanceMetric = this._distanceMetric;
    }
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._permanent !== undefined) {
      hasAnyValues = true;
      internalValueResult.permanent = this._permanent;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._track !== undefined) {
      hasAnyValues = true;
      internalValueResult.track = this._track;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterStaticIpv4UnicastVrfsNexthopInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._distanceMetric = undefined;
      this._interfaceName = undefined;
      this._metric = undefined;
      this._permanent = undefined;
      this._tag = undefined;
      this._track = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._distanceMetric = value.distanceMetric;
      this._interfaceName = value.interfaceName;
      this._metric = value.metric;
      this._permanent = value.permanent;
      this._tag = value.tag;
      this._track = value.track;
    }
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

  // distance_metric - computed: false, optional: true, required: false
  private _distanceMetric?: number; 
  public get distanceMetric() {
    return this.getNumberAttribute('distance_metric');
  }
  public set distanceMetric(value: number) {
    this._distanceMetric = value;
  }
  public resetDistanceMetric() {
    this._distanceMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceMetricInput() {
    return this._distanceMetric;
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

  // metric - computed: false, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // permanent - computed: false, optional: true, required: false
  private _permanent?: boolean | cdktf.IResolvable; 
  public get permanent() {
    return this.getBooleanAttribute('permanent');
  }
  public set permanent(value: boolean | cdktf.IResolvable) {
    this._permanent = value;
  }
  public resetPermanent() {
    this._permanent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permanentInput() {
    return this._permanent;
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

  // track - computed: false, optional: true, required: false
  private _track?: string; 
  public get track() {
    return this.getStringAttribute('track');
  }
  public set track(value: string) {
    this._track = value;
  }
  public resetTrack() {
    this._track = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackInput() {
    return this._track;
  }
}

export class RouterStaticIpv4UnicastVrfsNexthopInterfacesList extends cdktf.ComplexList {
  public internalValue? : RouterStaticIpv4UnicastVrfsNexthopInterfaces[] | cdktf.IResolvable

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
  public get(index: number): RouterStaticIpv4UnicastVrfsNexthopInterfacesOutputReference {
    return new RouterStaticIpv4UnicastVrfsNexthopInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterStaticIpv4UnicastVrfs {
  /**
  * Forwarding router's address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#nexthop_addresses RouterStaticIpv4Unicast#nexthop_addresses}
  */
  readonly nexthopAddresses?: RouterStaticIpv4UnicastVrfsNexthopAddresses[] | cdktf.IResolvable;
  /**
  * Forwarding interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#nexthop_interface_addresses RouterStaticIpv4Unicast#nexthop_interface_addresses}
  */
  readonly nexthopInterfaceAddresses?: RouterStaticIpv4UnicastVrfsNexthopInterfaceAddresses[] | cdktf.IResolvable;
  /**
  * Forwarding interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#nexthop_interfaces RouterStaticIpv4Unicast#nexthop_interfaces}
  */
  readonly nexthopInterfaces?: RouterStaticIpv4UnicastVrfsNexthopInterfaces[] | cdktf.IResolvable;
  /**
  * Destination VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#vrf_name RouterStaticIpv4Unicast#vrf_name}
  */
  readonly vrfName: string;
}

export function routerStaticIpv4UnicastVrfsToTerraform(struct?: RouterStaticIpv4UnicastVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nexthop_addresses: cdktf.listMapper(routerStaticIpv4UnicastVrfsNexthopAddressesToTerraform, false)(struct!.nexthopAddresses),
    nexthop_interface_addresses: cdktf.listMapper(routerStaticIpv4UnicastVrfsNexthopInterfaceAddressesToTerraform, false)(struct!.nexthopInterfaceAddresses),
    nexthop_interfaces: cdktf.listMapper(routerStaticIpv4UnicastVrfsNexthopInterfacesToTerraform, false)(struct!.nexthopInterfaces),
    vrf_name: cdktf.stringToTerraform(struct!.vrfName),
  }
}


export function routerStaticIpv4UnicastVrfsToHclTerraform(struct?: RouterStaticIpv4UnicastVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nexthop_addresses: {
      value: cdktf.listMapperHcl(routerStaticIpv4UnicastVrfsNexthopAddressesToHclTerraform, false)(struct!.nexthopAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "RouterStaticIpv4UnicastVrfsNexthopAddressesList",
    },
    nexthop_interface_addresses: {
      value: cdktf.listMapperHcl(routerStaticIpv4UnicastVrfsNexthopInterfaceAddressesToHclTerraform, false)(struct!.nexthopInterfaceAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "RouterStaticIpv4UnicastVrfsNexthopInterfaceAddressesList",
    },
    nexthop_interfaces: {
      value: cdktf.listMapperHcl(routerStaticIpv4UnicastVrfsNexthopInterfacesToHclTerraform, false)(struct!.nexthopInterfaces),
      isBlock: true,
      type: "list",
      storageClassType: "RouterStaticIpv4UnicastVrfsNexthopInterfacesList",
    },
    vrf_name: {
      value: cdktf.stringToHclTerraform(struct!.vrfName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterStaticIpv4UnicastVrfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterStaticIpv4UnicastVrfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nexthopAddresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthopAddresses = this._nexthopAddresses?.internalValue;
    }
    if (this._nexthopInterfaceAddresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthopInterfaceAddresses = this._nexthopInterfaceAddresses?.internalValue;
    }
    if (this._nexthopInterfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthopInterfaces = this._nexthopInterfaces?.internalValue;
    }
    if (this._vrfName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfName = this._vrfName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterStaticIpv4UnicastVrfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nexthopAddresses.internalValue = undefined;
      this._nexthopInterfaceAddresses.internalValue = undefined;
      this._nexthopInterfaces.internalValue = undefined;
      this._vrfName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nexthopAddresses.internalValue = value.nexthopAddresses;
      this._nexthopInterfaceAddresses.internalValue = value.nexthopInterfaceAddresses;
      this._nexthopInterfaces.internalValue = value.nexthopInterfaces;
      this._vrfName = value.vrfName;
    }
  }

  // nexthop_addresses - computed: false, optional: true, required: false
  private _nexthopAddresses = new RouterStaticIpv4UnicastVrfsNexthopAddressesList(this, "nexthop_addresses", false);
  public get nexthopAddresses() {
    return this._nexthopAddresses;
  }
  public putNexthopAddresses(value: RouterStaticIpv4UnicastVrfsNexthopAddresses[] | cdktf.IResolvable) {
    this._nexthopAddresses.internalValue = value;
  }
  public resetNexthopAddresses() {
    this._nexthopAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopAddressesInput() {
    return this._nexthopAddresses.internalValue;
  }

  // nexthop_interface_addresses - computed: false, optional: true, required: false
  private _nexthopInterfaceAddresses = new RouterStaticIpv4UnicastVrfsNexthopInterfaceAddressesList(this, "nexthop_interface_addresses", false);
  public get nexthopInterfaceAddresses() {
    return this._nexthopInterfaceAddresses;
  }
  public putNexthopInterfaceAddresses(value: RouterStaticIpv4UnicastVrfsNexthopInterfaceAddresses[] | cdktf.IResolvable) {
    this._nexthopInterfaceAddresses.internalValue = value;
  }
  public resetNexthopInterfaceAddresses() {
    this._nexthopInterfaceAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopInterfaceAddressesInput() {
    return this._nexthopInterfaceAddresses.internalValue;
  }

  // nexthop_interfaces - computed: false, optional: true, required: false
  private _nexthopInterfaces = new RouterStaticIpv4UnicastVrfsNexthopInterfacesList(this, "nexthop_interfaces", false);
  public get nexthopInterfaces() {
    return this._nexthopInterfaces;
  }
  public putNexthopInterfaces(value: RouterStaticIpv4UnicastVrfsNexthopInterfaces[] | cdktf.IResolvable) {
    this._nexthopInterfaces.internalValue = value;
  }
  public resetNexthopInterfaces() {
    this._nexthopInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopInterfacesInput() {
    return this._nexthopInterfaces.internalValue;
  }

  // vrf_name - computed: false, optional: false, required: true
  private _vrfName?: string; 
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
  public set vrfName(value: string) {
    this._vrfName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfNameInput() {
    return this._vrfName;
  }
}

export class RouterStaticIpv4UnicastVrfsList extends cdktf.ComplexList {
  public internalValue? : RouterStaticIpv4UnicastVrfs[] | cdktf.IResolvable

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
  public get(index: number): RouterStaticIpv4UnicastVrfsOutputReference {
    return new RouterStaticIpv4UnicastVrfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast iosxr_router_static_ipv4_unicast}
*/
export class RouterStaticIpv4Unicast extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_router_static_ipv4_unicast";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterStaticIpv4Unicast resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterStaticIpv4Unicast to import
  * @param importFromId The id of the existing RouterStaticIpv4Unicast that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterStaticIpv4Unicast to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_router_static_ipv4_unicast", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv4_unicast iosxr_router_static_ipv4_unicast} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterStaticIpv4UnicastConfig
  */
  public constructor(scope: Construct, id: string, config: RouterStaticIpv4UnicastConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_router_static_ipv4_unicast',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._nexthopAddresses.internalValue = config.nexthopAddresses;
    this._nexthopInterfaceAddresses.internalValue = config.nexthopInterfaceAddresses;
    this._nexthopInterfaces.internalValue = config.nexthopInterfaces;
    this._prefixAddress = config.prefixAddress;
    this._prefixLength = config.prefixLength;
    this._vrfs.internalValue = config.vrfs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // nexthop_addresses - computed: false, optional: true, required: false
  private _nexthopAddresses = new RouterStaticIpv4UnicastNexthopAddressesList(this, "nexthop_addresses", false);
  public get nexthopAddresses() {
    return this._nexthopAddresses;
  }
  public putNexthopAddresses(value: RouterStaticIpv4UnicastNexthopAddresses[] | cdktf.IResolvable) {
    this._nexthopAddresses.internalValue = value;
  }
  public resetNexthopAddresses() {
    this._nexthopAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopAddressesInput() {
    return this._nexthopAddresses.internalValue;
  }

  // nexthop_interface_addresses - computed: false, optional: true, required: false
  private _nexthopInterfaceAddresses = new RouterStaticIpv4UnicastNexthopInterfaceAddressesList(this, "nexthop_interface_addresses", false);
  public get nexthopInterfaceAddresses() {
    return this._nexthopInterfaceAddresses;
  }
  public putNexthopInterfaceAddresses(value: RouterStaticIpv4UnicastNexthopInterfaceAddresses[] | cdktf.IResolvable) {
    this._nexthopInterfaceAddresses.internalValue = value;
  }
  public resetNexthopInterfaceAddresses() {
    this._nexthopInterfaceAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopInterfaceAddressesInput() {
    return this._nexthopInterfaceAddresses.internalValue;
  }

  // nexthop_interfaces - computed: false, optional: true, required: false
  private _nexthopInterfaces = new RouterStaticIpv4UnicastNexthopInterfacesList(this, "nexthop_interfaces", false);
  public get nexthopInterfaces() {
    return this._nexthopInterfaces;
  }
  public putNexthopInterfaces(value: RouterStaticIpv4UnicastNexthopInterfaces[] | cdktf.IResolvable) {
    this._nexthopInterfaces.internalValue = value;
  }
  public resetNexthopInterfaces() {
    this._nexthopInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopInterfacesInput() {
    return this._nexthopInterfaces.internalValue;
  }

  // prefix_address - computed: false, optional: false, required: true
  private _prefixAddress?: string; 
  public get prefixAddress() {
    return this.getStringAttribute('prefix_address');
  }
  public set prefixAddress(value: string) {
    this._prefixAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixAddressInput() {
    return this._prefixAddress;
  }

  // prefix_length - computed: false, optional: false, required: true
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // vrfs - computed: false, optional: true, required: false
  private _vrfs = new RouterStaticIpv4UnicastVrfsList(this, "vrfs", false);
  public get vrfs() {
    return this._vrfs;
  }
  public putVrfs(value: RouterStaticIpv4UnicastVrfs[] | cdktf.IResolvable) {
    this._vrfs.internalValue = value;
  }
  public resetVrfs() {
    this._vrfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfsInput() {
    return this._vrfs.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      nexthop_addresses: cdktf.listMapper(routerStaticIpv4UnicastNexthopAddressesToTerraform, false)(this._nexthopAddresses.internalValue),
      nexthop_interface_addresses: cdktf.listMapper(routerStaticIpv4UnicastNexthopInterfaceAddressesToTerraform, false)(this._nexthopInterfaceAddresses.internalValue),
      nexthop_interfaces: cdktf.listMapper(routerStaticIpv4UnicastNexthopInterfacesToTerraform, false)(this._nexthopInterfaces.internalValue),
      prefix_address: cdktf.stringToTerraform(this._prefixAddress),
      prefix_length: cdktf.numberToTerraform(this._prefixLength),
      vrfs: cdktf.listMapper(routerStaticIpv4UnicastVrfsToTerraform, false)(this._vrfs.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      nexthop_addresses: {
        value: cdktf.listMapperHcl(routerStaticIpv4UnicastNexthopAddressesToHclTerraform, false)(this._nexthopAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterStaticIpv4UnicastNexthopAddressesList",
      },
      nexthop_interface_addresses: {
        value: cdktf.listMapperHcl(routerStaticIpv4UnicastNexthopInterfaceAddressesToHclTerraform, false)(this._nexthopInterfaceAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterStaticIpv4UnicastNexthopInterfaceAddressesList",
      },
      nexthop_interfaces: {
        value: cdktf.listMapperHcl(routerStaticIpv4UnicastNexthopInterfacesToHclTerraform, false)(this._nexthopInterfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterStaticIpv4UnicastNexthopInterfacesList",
      },
      prefix_address: {
        value: cdktf.stringToHclTerraform(this._prefixAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_length: {
        value: cdktf.numberToHclTerraform(this._prefixLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vrfs: {
        value: cdktf.listMapperHcl(routerStaticIpv4UnicastVrfsToHclTerraform, false)(this._vrfs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterStaticIpv4UnicastVrfsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
