// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterStaticVrfIpv4MulticastConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#delete_mode RouterStaticVrfIpv4Multicast#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#device RouterStaticVrfIpv4Multicast#device}
  */
  readonly device?: string;
  /**
  * Forwarding router's address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#nexthop_addresses RouterStaticVrfIpv4Multicast#nexthop_addresses}
  */
  readonly nexthopAddresses?: RouterStaticVrfIpv4MulticastNexthopAddresses[] | cdktf.IResolvable;
  /**
  * Forwarding interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#nexthop_interface_addresses RouterStaticVrfIpv4Multicast#nexthop_interface_addresses}
  */
  readonly nexthopInterfaceAddresses?: RouterStaticVrfIpv4MulticastNexthopInterfaceAddresses[] | cdktf.IResolvable;
  /**
  * Forwarding interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#nexthop_interfaces RouterStaticVrfIpv4Multicast#nexthop_interfaces}
  */
  readonly nexthopInterfaces?: RouterStaticVrfIpv4MulticastNexthopInterfaces[] | cdktf.IResolvable;
  /**
  * Destination prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#prefix_address RouterStaticVrfIpv4Multicast#prefix_address}
  */
  readonly prefixAddress: string;
  /**
  * Destination prefix length
  *   - Range: `0`-`128`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#prefix_length RouterStaticVrfIpv4Multicast#prefix_length}
  */
  readonly prefixLength: number;
  /**
  * VRF Static route configuration subcommands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#vrf_name RouterStaticVrfIpv4Multicast#vrf_name}
  */
  readonly vrfName: string;
  /**
  * Destination VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#vrfs RouterStaticVrfIpv4Multicast#vrfs}
  */
  readonly vrfs?: RouterStaticVrfIpv4MulticastVrfs[] | cdktf.IResolvable;
}
export interface RouterStaticVrfIpv4MulticastNexthopAddresses {
  /**
  * Forwarding router's address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#address RouterStaticVrfIpv4Multicast#address}
  */
  readonly address: string;
  /**
  * Hello interval
  *   - Range: `3`-`30000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#bfd_fast_detect_minimum_interval RouterStaticVrfIpv4Multicast#bfd_fast_detect_minimum_interval}
  */
  readonly bfdFastDetectMinimumInterval?: number;
  /**
  * Detect multiplier
  *   - Range: `1`-`10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#bfd_fast_detect_multiplier RouterStaticVrfIpv4Multicast#bfd_fast_detect_multiplier}
  */
  readonly bfdFastDetectMultiplier?: number;
  /**
  * description of the static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#description RouterStaticVrfIpv4Multicast#description}
  */
  readonly description?: string;
  /**
  * Distance metric for this route
  *   - Range: `1`-`254`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#distance_metric RouterStaticVrfIpv4Multicast#distance_metric}
  */
  readonly distanceMetric?: number;
  /**
  * Set metric for this route
  *   - Range: `1`-`16777214`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#metric RouterStaticVrfIpv4Multicast#metric}
  */
  readonly metric?: number;
  /**
  * Permanent route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#permanent RouterStaticVrfIpv4Multicast#permanent}
  */
  readonly permanent?: boolean | cdktf.IResolvable;
  /**
  * Set tag for this route
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#tag RouterStaticVrfIpv4Multicast#tag}
  */
  readonly tag?: number;
  /**
  * Enable object tracking for static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#track RouterStaticVrfIpv4Multicast#track}
  */
  readonly track?: string;
}

export function routerStaticVrfIpv4MulticastNexthopAddressesToTerraform(struct?: RouterStaticVrfIpv4MulticastNexthopAddresses | cdktf.IResolvable): any {
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


export function routerStaticVrfIpv4MulticastNexthopAddressesToHclTerraform(struct?: RouterStaticVrfIpv4MulticastNexthopAddresses | cdktf.IResolvable): any {
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

export class RouterStaticVrfIpv4MulticastNexthopAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterStaticVrfIpv4MulticastNexthopAddresses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterStaticVrfIpv4MulticastNexthopAddresses | cdktf.IResolvable | undefined) {
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

export class RouterStaticVrfIpv4MulticastNexthopAddressesList extends cdktf.ComplexList {
  public internalValue? : RouterStaticVrfIpv4MulticastNexthopAddresses[] | cdktf.IResolvable

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
  public get(index: number): RouterStaticVrfIpv4MulticastNexthopAddressesOutputReference {
    return new RouterStaticVrfIpv4MulticastNexthopAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterStaticVrfIpv4MulticastNexthopInterfaceAddresses {
  /**
  * Forwarding router's address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#address RouterStaticVrfIpv4Multicast#address}
  */
  readonly address: string;
  /**
  * Hello interval
  *   - Range: `3`-`30000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#bfd_fast_detect_minimum_interval RouterStaticVrfIpv4Multicast#bfd_fast_detect_minimum_interval}
  */
  readonly bfdFastDetectMinimumInterval?: number;
  /**
  * Detect multiplier
  *   - Range: `1`-`10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#bfd_fast_detect_multiplier RouterStaticVrfIpv4Multicast#bfd_fast_detect_multiplier}
  */
  readonly bfdFastDetectMultiplier?: number;
  /**
  * description of the static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#description RouterStaticVrfIpv4Multicast#description}
  */
  readonly description?: string;
  /**
  * Distance metric for this route
  *   - Range: `1`-`254`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#distance_metric RouterStaticVrfIpv4Multicast#distance_metric}
  */
  readonly distanceMetric?: number;
  /**
  * Forwarding interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#interface_name RouterStaticVrfIpv4Multicast#interface_name}
  */
  readonly interfaceName: string;
  /**
  * Set metric for this route
  *   - Range: `1`-`16777214`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#metric RouterStaticVrfIpv4Multicast#metric}
  */
  readonly metric?: number;
  /**
  * Permanent route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#permanent RouterStaticVrfIpv4Multicast#permanent}
  */
  readonly permanent?: boolean | cdktf.IResolvable;
  /**
  * Set tag for this route
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#tag RouterStaticVrfIpv4Multicast#tag}
  */
  readonly tag?: number;
  /**
  * Enable object tracking for static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#track RouterStaticVrfIpv4Multicast#track}
  */
  readonly track?: string;
}

export function routerStaticVrfIpv4MulticastNexthopInterfaceAddressesToTerraform(struct?: RouterStaticVrfIpv4MulticastNexthopInterfaceAddresses | cdktf.IResolvable): any {
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


export function routerStaticVrfIpv4MulticastNexthopInterfaceAddressesToHclTerraform(struct?: RouterStaticVrfIpv4MulticastNexthopInterfaceAddresses | cdktf.IResolvable): any {
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

export class RouterStaticVrfIpv4MulticastNexthopInterfaceAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterStaticVrfIpv4MulticastNexthopInterfaceAddresses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterStaticVrfIpv4MulticastNexthopInterfaceAddresses | cdktf.IResolvable | undefined) {
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

export class RouterStaticVrfIpv4MulticastNexthopInterfaceAddressesList extends cdktf.ComplexList {
  public internalValue? : RouterStaticVrfIpv4MulticastNexthopInterfaceAddresses[] | cdktf.IResolvable

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
  public get(index: number): RouterStaticVrfIpv4MulticastNexthopInterfaceAddressesOutputReference {
    return new RouterStaticVrfIpv4MulticastNexthopInterfaceAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterStaticVrfIpv4MulticastNexthopInterfaces {
  /**
  * description of the static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#description RouterStaticVrfIpv4Multicast#description}
  */
  readonly description?: string;
  /**
  * Distance metric for this route
  *   - Range: `1`-`254`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#distance_metric RouterStaticVrfIpv4Multicast#distance_metric}
  */
  readonly distanceMetric?: number;
  /**
  * Forwarding interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#interface_name RouterStaticVrfIpv4Multicast#interface_name}
  */
  readonly interfaceName: string;
  /**
  * Set metric for this route
  *   - Range: `1`-`16777214`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#metric RouterStaticVrfIpv4Multicast#metric}
  */
  readonly metric?: number;
  /**
  * Permanent route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#permanent RouterStaticVrfIpv4Multicast#permanent}
  */
  readonly permanent?: boolean | cdktf.IResolvable;
  /**
  * Set tag for this route
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#tag RouterStaticVrfIpv4Multicast#tag}
  */
  readonly tag?: number;
  /**
  * Enable object tracking for static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#track RouterStaticVrfIpv4Multicast#track}
  */
  readonly track?: string;
}

export function routerStaticVrfIpv4MulticastNexthopInterfacesToTerraform(struct?: RouterStaticVrfIpv4MulticastNexthopInterfaces | cdktf.IResolvable): any {
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


export function routerStaticVrfIpv4MulticastNexthopInterfacesToHclTerraform(struct?: RouterStaticVrfIpv4MulticastNexthopInterfaces | cdktf.IResolvable): any {
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

export class RouterStaticVrfIpv4MulticastNexthopInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterStaticVrfIpv4MulticastNexthopInterfaces | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterStaticVrfIpv4MulticastNexthopInterfaces | cdktf.IResolvable | undefined) {
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

export class RouterStaticVrfIpv4MulticastNexthopInterfacesList extends cdktf.ComplexList {
  public internalValue? : RouterStaticVrfIpv4MulticastNexthopInterfaces[] | cdktf.IResolvable

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
  public get(index: number): RouterStaticVrfIpv4MulticastNexthopInterfacesOutputReference {
    return new RouterStaticVrfIpv4MulticastNexthopInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterStaticVrfIpv4MulticastVrfsNexthopAddresses {
  /**
  * Forwarding router's address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#address RouterStaticVrfIpv4Multicast#address}
  */
  readonly address: string;
  /**
  * Hello interval
  *   - Range: `3`-`30000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#bfd_fast_detect_minimum_interval RouterStaticVrfIpv4Multicast#bfd_fast_detect_minimum_interval}
  */
  readonly bfdFastDetectMinimumInterval?: number;
  /**
  * Detect multiplier
  *   - Range: `1`-`10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#bfd_fast_detect_multiplier RouterStaticVrfIpv4Multicast#bfd_fast_detect_multiplier}
  */
  readonly bfdFastDetectMultiplier?: number;
  /**
  * description of the static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#description RouterStaticVrfIpv4Multicast#description}
  */
  readonly description?: string;
  /**
  * Distance metric for this route
  *   - Range: `1`-`254`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#distance_metric RouterStaticVrfIpv4Multicast#distance_metric}
  */
  readonly distanceMetric?: number;
  /**
  * Set metric for this route
  *   - Range: `1`-`16777214`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#metric RouterStaticVrfIpv4Multicast#metric}
  */
  readonly metric?: number;
  /**
  * Permanent route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#permanent RouterStaticVrfIpv4Multicast#permanent}
  */
  readonly permanent?: boolean | cdktf.IResolvable;
  /**
  * Set tag for this route
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#tag RouterStaticVrfIpv4Multicast#tag}
  */
  readonly tag?: number;
  /**
  * Enable object tracking for static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#track RouterStaticVrfIpv4Multicast#track}
  */
  readonly track?: string;
}

export function routerStaticVrfIpv4MulticastVrfsNexthopAddressesToTerraform(struct?: RouterStaticVrfIpv4MulticastVrfsNexthopAddresses | cdktf.IResolvable): any {
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


export function routerStaticVrfIpv4MulticastVrfsNexthopAddressesToHclTerraform(struct?: RouterStaticVrfIpv4MulticastVrfsNexthopAddresses | cdktf.IResolvable): any {
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

export class RouterStaticVrfIpv4MulticastVrfsNexthopAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterStaticVrfIpv4MulticastVrfsNexthopAddresses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterStaticVrfIpv4MulticastVrfsNexthopAddresses | cdktf.IResolvable | undefined) {
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

export class RouterStaticVrfIpv4MulticastVrfsNexthopAddressesList extends cdktf.ComplexList {
  public internalValue? : RouterStaticVrfIpv4MulticastVrfsNexthopAddresses[] | cdktf.IResolvable

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
  public get(index: number): RouterStaticVrfIpv4MulticastVrfsNexthopAddressesOutputReference {
    return new RouterStaticVrfIpv4MulticastVrfsNexthopAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterStaticVrfIpv4MulticastVrfsNexthopInterfaceAddresses {
  /**
  * Forwarding router's address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#address RouterStaticVrfIpv4Multicast#address}
  */
  readonly address: string;
  /**
  * Hello interval
  *   - Range: `3`-`30000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#bfd_fast_detect_minimum_interval RouterStaticVrfIpv4Multicast#bfd_fast_detect_minimum_interval}
  */
  readonly bfdFastDetectMinimumInterval?: number;
  /**
  * Detect multiplier
  *   - Range: `1`-`10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#bfd_fast_detect_multiplier RouterStaticVrfIpv4Multicast#bfd_fast_detect_multiplier}
  */
  readonly bfdFastDetectMultiplier?: number;
  /**
  * description of the static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#description RouterStaticVrfIpv4Multicast#description}
  */
  readonly description?: string;
  /**
  * Distance metric for this route
  *   - Range: `1`-`254`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#distance_metric RouterStaticVrfIpv4Multicast#distance_metric}
  */
  readonly distanceMetric?: number;
  /**
  * Forwarding interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#interface_name RouterStaticVrfIpv4Multicast#interface_name}
  */
  readonly interfaceName: string;
  /**
  * Set metric for this route
  *   - Range: `1`-`16777214`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#metric RouterStaticVrfIpv4Multicast#metric}
  */
  readonly metric?: number;
  /**
  * Permanent route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#permanent RouterStaticVrfIpv4Multicast#permanent}
  */
  readonly permanent?: boolean | cdktf.IResolvable;
  /**
  * Set tag for this route
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#tag RouterStaticVrfIpv4Multicast#tag}
  */
  readonly tag?: number;
  /**
  * Enable object tracking for static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#track RouterStaticVrfIpv4Multicast#track}
  */
  readonly track?: string;
}

export function routerStaticVrfIpv4MulticastVrfsNexthopInterfaceAddressesToTerraform(struct?: RouterStaticVrfIpv4MulticastVrfsNexthopInterfaceAddresses | cdktf.IResolvable): any {
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


export function routerStaticVrfIpv4MulticastVrfsNexthopInterfaceAddressesToHclTerraform(struct?: RouterStaticVrfIpv4MulticastVrfsNexthopInterfaceAddresses | cdktf.IResolvable): any {
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

export class RouterStaticVrfIpv4MulticastVrfsNexthopInterfaceAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterStaticVrfIpv4MulticastVrfsNexthopInterfaceAddresses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterStaticVrfIpv4MulticastVrfsNexthopInterfaceAddresses | cdktf.IResolvable | undefined) {
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

export class RouterStaticVrfIpv4MulticastVrfsNexthopInterfaceAddressesList extends cdktf.ComplexList {
  public internalValue? : RouterStaticVrfIpv4MulticastVrfsNexthopInterfaceAddresses[] | cdktf.IResolvable

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
  public get(index: number): RouterStaticVrfIpv4MulticastVrfsNexthopInterfaceAddressesOutputReference {
    return new RouterStaticVrfIpv4MulticastVrfsNexthopInterfaceAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterStaticVrfIpv4MulticastVrfsNexthopInterfaces {
  /**
  * description of the static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#description RouterStaticVrfIpv4Multicast#description}
  */
  readonly description?: string;
  /**
  * Distance metric for this route
  *   - Range: `1`-`254`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#distance_metric RouterStaticVrfIpv4Multicast#distance_metric}
  */
  readonly distanceMetric?: number;
  /**
  * Forwarding interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#interface_name RouterStaticVrfIpv4Multicast#interface_name}
  */
  readonly interfaceName: string;
  /**
  * Set metric for this route
  *   - Range: `1`-`16777214`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#metric RouterStaticVrfIpv4Multicast#metric}
  */
  readonly metric?: number;
  /**
  * Permanent route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#permanent RouterStaticVrfIpv4Multicast#permanent}
  */
  readonly permanent?: boolean | cdktf.IResolvable;
  /**
  * Set tag for this route
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#tag RouterStaticVrfIpv4Multicast#tag}
  */
  readonly tag?: number;
  /**
  * Enable object tracking for static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#track RouterStaticVrfIpv4Multicast#track}
  */
  readonly track?: string;
}

export function routerStaticVrfIpv4MulticastVrfsNexthopInterfacesToTerraform(struct?: RouterStaticVrfIpv4MulticastVrfsNexthopInterfaces | cdktf.IResolvable): any {
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


export function routerStaticVrfIpv4MulticastVrfsNexthopInterfacesToHclTerraform(struct?: RouterStaticVrfIpv4MulticastVrfsNexthopInterfaces | cdktf.IResolvable): any {
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

export class RouterStaticVrfIpv4MulticastVrfsNexthopInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterStaticVrfIpv4MulticastVrfsNexthopInterfaces | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterStaticVrfIpv4MulticastVrfsNexthopInterfaces | cdktf.IResolvable | undefined) {
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

export class RouterStaticVrfIpv4MulticastVrfsNexthopInterfacesList extends cdktf.ComplexList {
  public internalValue? : RouterStaticVrfIpv4MulticastVrfsNexthopInterfaces[] | cdktf.IResolvable

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
  public get(index: number): RouterStaticVrfIpv4MulticastVrfsNexthopInterfacesOutputReference {
    return new RouterStaticVrfIpv4MulticastVrfsNexthopInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterStaticVrfIpv4MulticastVrfs {
  /**
  * Forwarding router's address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#nexthop_addresses RouterStaticVrfIpv4Multicast#nexthop_addresses}
  */
  readonly nexthopAddresses?: RouterStaticVrfIpv4MulticastVrfsNexthopAddresses[] | cdktf.IResolvable;
  /**
  * Forwarding interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#nexthop_interface_addresses RouterStaticVrfIpv4Multicast#nexthop_interface_addresses}
  */
  readonly nexthopInterfaceAddresses?: RouterStaticVrfIpv4MulticastVrfsNexthopInterfaceAddresses[] | cdktf.IResolvable;
  /**
  * Forwarding interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#nexthop_interfaces RouterStaticVrfIpv4Multicast#nexthop_interfaces}
  */
  readonly nexthopInterfaces?: RouterStaticVrfIpv4MulticastVrfsNexthopInterfaces[] | cdktf.IResolvable;
  /**
  * Destination VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#vrf_name RouterStaticVrfIpv4Multicast#vrf_name}
  */
  readonly vrfName: string;
}

export function routerStaticVrfIpv4MulticastVrfsToTerraform(struct?: RouterStaticVrfIpv4MulticastVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nexthop_addresses: cdktf.listMapper(routerStaticVrfIpv4MulticastVrfsNexthopAddressesToTerraform, false)(struct!.nexthopAddresses),
    nexthop_interface_addresses: cdktf.listMapper(routerStaticVrfIpv4MulticastVrfsNexthopInterfaceAddressesToTerraform, false)(struct!.nexthopInterfaceAddresses),
    nexthop_interfaces: cdktf.listMapper(routerStaticVrfIpv4MulticastVrfsNexthopInterfacesToTerraform, false)(struct!.nexthopInterfaces),
    vrf_name: cdktf.stringToTerraform(struct!.vrfName),
  }
}


export function routerStaticVrfIpv4MulticastVrfsToHclTerraform(struct?: RouterStaticVrfIpv4MulticastVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nexthop_addresses: {
      value: cdktf.listMapperHcl(routerStaticVrfIpv4MulticastVrfsNexthopAddressesToHclTerraform, false)(struct!.nexthopAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "RouterStaticVrfIpv4MulticastVrfsNexthopAddressesList",
    },
    nexthop_interface_addresses: {
      value: cdktf.listMapperHcl(routerStaticVrfIpv4MulticastVrfsNexthopInterfaceAddressesToHclTerraform, false)(struct!.nexthopInterfaceAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "RouterStaticVrfIpv4MulticastVrfsNexthopInterfaceAddressesList",
    },
    nexthop_interfaces: {
      value: cdktf.listMapperHcl(routerStaticVrfIpv4MulticastVrfsNexthopInterfacesToHclTerraform, false)(struct!.nexthopInterfaces),
      isBlock: true,
      type: "list",
      storageClassType: "RouterStaticVrfIpv4MulticastVrfsNexthopInterfacesList",
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

export class RouterStaticVrfIpv4MulticastVrfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterStaticVrfIpv4MulticastVrfs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterStaticVrfIpv4MulticastVrfs | cdktf.IResolvable | undefined) {
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
  private _nexthopAddresses = new RouterStaticVrfIpv4MulticastVrfsNexthopAddressesList(this, "nexthop_addresses", false);
  public get nexthopAddresses() {
    return this._nexthopAddresses;
  }
  public putNexthopAddresses(value: RouterStaticVrfIpv4MulticastVrfsNexthopAddresses[] | cdktf.IResolvable) {
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
  private _nexthopInterfaceAddresses = new RouterStaticVrfIpv4MulticastVrfsNexthopInterfaceAddressesList(this, "nexthop_interface_addresses", false);
  public get nexthopInterfaceAddresses() {
    return this._nexthopInterfaceAddresses;
  }
  public putNexthopInterfaceAddresses(value: RouterStaticVrfIpv4MulticastVrfsNexthopInterfaceAddresses[] | cdktf.IResolvable) {
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
  private _nexthopInterfaces = new RouterStaticVrfIpv4MulticastVrfsNexthopInterfacesList(this, "nexthop_interfaces", false);
  public get nexthopInterfaces() {
    return this._nexthopInterfaces;
  }
  public putNexthopInterfaces(value: RouterStaticVrfIpv4MulticastVrfsNexthopInterfaces[] | cdktf.IResolvable) {
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

export class RouterStaticVrfIpv4MulticastVrfsList extends cdktf.ComplexList {
  public internalValue? : RouterStaticVrfIpv4MulticastVrfs[] | cdktf.IResolvable

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
  public get(index: number): RouterStaticVrfIpv4MulticastVrfsOutputReference {
    return new RouterStaticVrfIpv4MulticastVrfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast iosxr_router_static_vrf_ipv4_multicast}
*/
export class RouterStaticVrfIpv4Multicast extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_router_static_vrf_ipv4_multicast";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterStaticVrfIpv4Multicast resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterStaticVrfIpv4Multicast to import
  * @param importFromId The id of the existing RouterStaticVrfIpv4Multicast that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterStaticVrfIpv4Multicast to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_router_static_vrf_ipv4_multicast", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_multicast iosxr_router_static_vrf_ipv4_multicast} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterStaticVrfIpv4MulticastConfig
  */
  public constructor(scope: Construct, id: string, config: RouterStaticVrfIpv4MulticastConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_router_static_vrf_ipv4_multicast',
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
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._nexthopAddresses.internalValue = config.nexthopAddresses;
    this._nexthopInterfaceAddresses.internalValue = config.nexthopInterfaceAddresses;
    this._nexthopInterfaces.internalValue = config.nexthopInterfaces;
    this._prefixAddress = config.prefixAddress;
    this._prefixLength = config.prefixLength;
    this._vrfName = config.vrfName;
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
  private _nexthopAddresses = new RouterStaticVrfIpv4MulticastNexthopAddressesList(this, "nexthop_addresses", false);
  public get nexthopAddresses() {
    return this._nexthopAddresses;
  }
  public putNexthopAddresses(value: RouterStaticVrfIpv4MulticastNexthopAddresses[] | cdktf.IResolvable) {
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
  private _nexthopInterfaceAddresses = new RouterStaticVrfIpv4MulticastNexthopInterfaceAddressesList(this, "nexthop_interface_addresses", false);
  public get nexthopInterfaceAddresses() {
    return this._nexthopInterfaceAddresses;
  }
  public putNexthopInterfaceAddresses(value: RouterStaticVrfIpv4MulticastNexthopInterfaceAddresses[] | cdktf.IResolvable) {
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
  private _nexthopInterfaces = new RouterStaticVrfIpv4MulticastNexthopInterfacesList(this, "nexthop_interfaces", false);
  public get nexthopInterfaces() {
    return this._nexthopInterfaces;
  }
  public putNexthopInterfaces(value: RouterStaticVrfIpv4MulticastNexthopInterfaces[] | cdktf.IResolvable) {
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

  // vrfs - computed: false, optional: true, required: false
  private _vrfs = new RouterStaticVrfIpv4MulticastVrfsList(this, "vrfs", false);
  public get vrfs() {
    return this._vrfs;
  }
  public putVrfs(value: RouterStaticVrfIpv4MulticastVrfs[] | cdktf.IResolvable) {
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
      nexthop_addresses: cdktf.listMapper(routerStaticVrfIpv4MulticastNexthopAddressesToTerraform, false)(this._nexthopAddresses.internalValue),
      nexthop_interface_addresses: cdktf.listMapper(routerStaticVrfIpv4MulticastNexthopInterfaceAddressesToTerraform, false)(this._nexthopInterfaceAddresses.internalValue),
      nexthop_interfaces: cdktf.listMapper(routerStaticVrfIpv4MulticastNexthopInterfacesToTerraform, false)(this._nexthopInterfaces.internalValue),
      prefix_address: cdktf.stringToTerraform(this._prefixAddress),
      prefix_length: cdktf.numberToTerraform(this._prefixLength),
      vrf_name: cdktf.stringToTerraform(this._vrfName),
      vrfs: cdktf.listMapper(routerStaticVrfIpv4MulticastVrfsToTerraform, false)(this._vrfs.internalValue),
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
        value: cdktf.listMapperHcl(routerStaticVrfIpv4MulticastNexthopAddressesToHclTerraform, false)(this._nexthopAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterStaticVrfIpv4MulticastNexthopAddressesList",
      },
      nexthop_interface_addresses: {
        value: cdktf.listMapperHcl(routerStaticVrfIpv4MulticastNexthopInterfaceAddressesToHclTerraform, false)(this._nexthopInterfaceAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterStaticVrfIpv4MulticastNexthopInterfaceAddressesList",
      },
      nexthop_interfaces: {
        value: cdktf.listMapperHcl(routerStaticVrfIpv4MulticastNexthopInterfacesToHclTerraform, false)(this._nexthopInterfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterStaticVrfIpv4MulticastNexthopInterfacesList",
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
      vrf_name: {
        value: cdktf.stringToHclTerraform(this._vrfName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrfs: {
        value: cdktf.listMapperHcl(routerStaticVrfIpv4MulticastVrfsToHclTerraform, false)(this._vrfs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterStaticVrfIpv4MulticastVrfsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
