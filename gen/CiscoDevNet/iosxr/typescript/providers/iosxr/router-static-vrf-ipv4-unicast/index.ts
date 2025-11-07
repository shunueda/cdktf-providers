// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterStaticVrfIpv4UnicastConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#delete_mode RouterStaticVrfIpv4Unicast#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#device RouterStaticVrfIpv4Unicast#device}
  */
  readonly device?: string;
  /**
  * Forwarding router's address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#nexthop_addresses RouterStaticVrfIpv4Unicast#nexthop_addresses}
  */
  readonly nexthopAddresses?: RouterStaticVrfIpv4UnicastNexthopAddresses[] | cdktf.IResolvable;
  /**
  * Forwarding interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#nexthop_interface_addresses RouterStaticVrfIpv4Unicast#nexthop_interface_addresses}
  */
  readonly nexthopInterfaceAddresses?: RouterStaticVrfIpv4UnicastNexthopInterfaceAddresses[] | cdktf.IResolvable;
  /**
  * Forwarding interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#nexthop_interfaces RouterStaticVrfIpv4Unicast#nexthop_interfaces}
  */
  readonly nexthopInterfaces?: RouterStaticVrfIpv4UnicastNexthopInterfaces[] | cdktf.IResolvable;
  /**
  * Destination prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#prefix_address RouterStaticVrfIpv4Unicast#prefix_address}
  */
  readonly prefixAddress: string;
  /**
  * Destination prefix length
  *   - Range: `0`-`128`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#prefix_length RouterStaticVrfIpv4Unicast#prefix_length}
  */
  readonly prefixLength: number;
  /**
  * VRF Static route configuration subcommands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#vrf_name RouterStaticVrfIpv4Unicast#vrf_name}
  */
  readonly vrfName: string;
  /**
  * Destination VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#vrfs RouterStaticVrfIpv4Unicast#vrfs}
  */
  readonly vrfs?: RouterStaticVrfIpv4UnicastVrfs[] | cdktf.IResolvable;
}
export interface RouterStaticVrfIpv4UnicastNexthopAddresses {
  /**
  * Forwarding router's address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#address RouterStaticVrfIpv4Unicast#address}
  */
  readonly address: string;
  /**
  * Hello interval
  *   - Range: `3`-`30000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#bfd_fast_detect_minimum_interval RouterStaticVrfIpv4Unicast#bfd_fast_detect_minimum_interval}
  */
  readonly bfdFastDetectMinimumInterval?: number;
  /**
  * Detect multiplier
  *   - Range: `1`-`10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#bfd_fast_detect_multiplier RouterStaticVrfIpv4Unicast#bfd_fast_detect_multiplier}
  */
  readonly bfdFastDetectMultiplier?: number;
  /**
  * description of the static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#description RouterStaticVrfIpv4Unicast#description}
  */
  readonly description?: string;
  /**
  * Distance metric for this route
  *   - Range: `1`-`254`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#distance_metric RouterStaticVrfIpv4Unicast#distance_metric}
  */
  readonly distanceMetric?: number;
  /**
  * Set metric for this route
  *   - Range: `1`-`16777214`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#metric RouterStaticVrfIpv4Unicast#metric}
  */
  readonly metric?: number;
  /**
  * Permanent route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#permanent RouterStaticVrfIpv4Unicast#permanent}
  */
  readonly permanent?: boolean | cdktf.IResolvable;
  /**
  * Set tag for this route
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#tag RouterStaticVrfIpv4Unicast#tag}
  */
  readonly tag?: number;
  /**
  * Enable object tracking for static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#track RouterStaticVrfIpv4Unicast#track}
  */
  readonly track?: string;
}

export function routerStaticVrfIpv4UnicastNexthopAddressesToTerraform(struct?: RouterStaticVrfIpv4UnicastNexthopAddresses | cdktf.IResolvable): any {
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


export function routerStaticVrfIpv4UnicastNexthopAddressesToHclTerraform(struct?: RouterStaticVrfIpv4UnicastNexthopAddresses | cdktf.IResolvable): any {
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

export class RouterStaticVrfIpv4UnicastNexthopAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterStaticVrfIpv4UnicastNexthopAddresses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterStaticVrfIpv4UnicastNexthopAddresses | cdktf.IResolvable | undefined) {
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

export class RouterStaticVrfIpv4UnicastNexthopAddressesList extends cdktf.ComplexList {
  public internalValue? : RouterStaticVrfIpv4UnicastNexthopAddresses[] | cdktf.IResolvable

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
  public get(index: number): RouterStaticVrfIpv4UnicastNexthopAddressesOutputReference {
    return new RouterStaticVrfIpv4UnicastNexthopAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterStaticVrfIpv4UnicastNexthopInterfaceAddresses {
  /**
  * Forwarding router's address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#address RouterStaticVrfIpv4Unicast#address}
  */
  readonly address: string;
  /**
  * Hello interval
  *   - Range: `3`-`30000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#bfd_fast_detect_minimum_interval RouterStaticVrfIpv4Unicast#bfd_fast_detect_minimum_interval}
  */
  readonly bfdFastDetectMinimumInterval?: number;
  /**
  * Detect multiplier
  *   - Range: `1`-`10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#bfd_fast_detect_multiplier RouterStaticVrfIpv4Unicast#bfd_fast_detect_multiplier}
  */
  readonly bfdFastDetectMultiplier?: number;
  /**
  * description of the static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#description RouterStaticVrfIpv4Unicast#description}
  */
  readonly description?: string;
  /**
  * Distance metric for this route
  *   - Range: `1`-`254`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#distance_metric RouterStaticVrfIpv4Unicast#distance_metric}
  */
  readonly distanceMetric?: number;
  /**
  * Forwarding interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#interface_name RouterStaticVrfIpv4Unicast#interface_name}
  */
  readonly interfaceName: string;
  /**
  * Set metric for this route
  *   - Range: `1`-`16777214`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#metric RouterStaticVrfIpv4Unicast#metric}
  */
  readonly metric?: number;
  /**
  * Permanent route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#permanent RouterStaticVrfIpv4Unicast#permanent}
  */
  readonly permanent?: boolean | cdktf.IResolvable;
  /**
  * Set tag for this route
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#tag RouterStaticVrfIpv4Unicast#tag}
  */
  readonly tag?: number;
  /**
  * Enable object tracking for static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#track RouterStaticVrfIpv4Unicast#track}
  */
  readonly track?: string;
}

export function routerStaticVrfIpv4UnicastNexthopInterfaceAddressesToTerraform(struct?: RouterStaticVrfIpv4UnicastNexthopInterfaceAddresses | cdktf.IResolvable): any {
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


export function routerStaticVrfIpv4UnicastNexthopInterfaceAddressesToHclTerraform(struct?: RouterStaticVrfIpv4UnicastNexthopInterfaceAddresses | cdktf.IResolvable): any {
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

export class RouterStaticVrfIpv4UnicastNexthopInterfaceAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterStaticVrfIpv4UnicastNexthopInterfaceAddresses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterStaticVrfIpv4UnicastNexthopInterfaceAddresses | cdktf.IResolvable | undefined) {
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

export class RouterStaticVrfIpv4UnicastNexthopInterfaceAddressesList extends cdktf.ComplexList {
  public internalValue? : RouterStaticVrfIpv4UnicastNexthopInterfaceAddresses[] | cdktf.IResolvable

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
  public get(index: number): RouterStaticVrfIpv4UnicastNexthopInterfaceAddressesOutputReference {
    return new RouterStaticVrfIpv4UnicastNexthopInterfaceAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterStaticVrfIpv4UnicastNexthopInterfaces {
  /**
  * description of the static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#description RouterStaticVrfIpv4Unicast#description}
  */
  readonly description?: string;
  /**
  * Distance metric for this route
  *   - Range: `1`-`254`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#distance_metric RouterStaticVrfIpv4Unicast#distance_metric}
  */
  readonly distanceMetric?: number;
  /**
  * Forwarding interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#interface_name RouterStaticVrfIpv4Unicast#interface_name}
  */
  readonly interfaceName: string;
  /**
  * Set metric for this route
  *   - Range: `1`-`16777214`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#metric RouterStaticVrfIpv4Unicast#metric}
  */
  readonly metric?: number;
  /**
  * Permanent route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#permanent RouterStaticVrfIpv4Unicast#permanent}
  */
  readonly permanent?: boolean | cdktf.IResolvable;
  /**
  * Set tag for this route
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#tag RouterStaticVrfIpv4Unicast#tag}
  */
  readonly tag?: number;
  /**
  * Enable object tracking for static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#track RouterStaticVrfIpv4Unicast#track}
  */
  readonly track?: string;
}

export function routerStaticVrfIpv4UnicastNexthopInterfacesToTerraform(struct?: RouterStaticVrfIpv4UnicastNexthopInterfaces | cdktf.IResolvable): any {
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


export function routerStaticVrfIpv4UnicastNexthopInterfacesToHclTerraform(struct?: RouterStaticVrfIpv4UnicastNexthopInterfaces | cdktf.IResolvable): any {
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

export class RouterStaticVrfIpv4UnicastNexthopInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterStaticVrfIpv4UnicastNexthopInterfaces | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterStaticVrfIpv4UnicastNexthopInterfaces | cdktf.IResolvable | undefined) {
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

export class RouterStaticVrfIpv4UnicastNexthopInterfacesList extends cdktf.ComplexList {
  public internalValue? : RouterStaticVrfIpv4UnicastNexthopInterfaces[] | cdktf.IResolvable

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
  public get(index: number): RouterStaticVrfIpv4UnicastNexthopInterfacesOutputReference {
    return new RouterStaticVrfIpv4UnicastNexthopInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterStaticVrfIpv4UnicastVrfsNexthopAddresses {
  /**
  * Forwarding router's address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#address RouterStaticVrfIpv4Unicast#address}
  */
  readonly address: string;
  /**
  * Hello interval
  *   - Range: `3`-`30000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#bfd_fast_detect_minimum_interval RouterStaticVrfIpv4Unicast#bfd_fast_detect_minimum_interval}
  */
  readonly bfdFastDetectMinimumInterval?: number;
  /**
  * Detect multiplier
  *   - Range: `1`-`10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#bfd_fast_detect_multiplier RouterStaticVrfIpv4Unicast#bfd_fast_detect_multiplier}
  */
  readonly bfdFastDetectMultiplier?: number;
  /**
  * description of the static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#description RouterStaticVrfIpv4Unicast#description}
  */
  readonly description?: string;
  /**
  * Distance metric for this route
  *   - Range: `1`-`254`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#distance_metric RouterStaticVrfIpv4Unicast#distance_metric}
  */
  readonly distanceMetric?: number;
  /**
  * Set metric for this route
  *   - Range: `1`-`16777214`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#metric RouterStaticVrfIpv4Unicast#metric}
  */
  readonly metric?: number;
  /**
  * Permanent route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#permanent RouterStaticVrfIpv4Unicast#permanent}
  */
  readonly permanent?: boolean | cdktf.IResolvable;
  /**
  * Set tag for this route
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#tag RouterStaticVrfIpv4Unicast#tag}
  */
  readonly tag?: number;
  /**
  * Enable object tracking for static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#track RouterStaticVrfIpv4Unicast#track}
  */
  readonly track?: string;
}

export function routerStaticVrfIpv4UnicastVrfsNexthopAddressesToTerraform(struct?: RouterStaticVrfIpv4UnicastVrfsNexthopAddresses | cdktf.IResolvable): any {
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


export function routerStaticVrfIpv4UnicastVrfsNexthopAddressesToHclTerraform(struct?: RouterStaticVrfIpv4UnicastVrfsNexthopAddresses | cdktf.IResolvable): any {
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

export class RouterStaticVrfIpv4UnicastVrfsNexthopAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterStaticVrfIpv4UnicastVrfsNexthopAddresses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterStaticVrfIpv4UnicastVrfsNexthopAddresses | cdktf.IResolvable | undefined) {
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

export class RouterStaticVrfIpv4UnicastVrfsNexthopAddressesList extends cdktf.ComplexList {
  public internalValue? : RouterStaticVrfIpv4UnicastVrfsNexthopAddresses[] | cdktf.IResolvable

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
  public get(index: number): RouterStaticVrfIpv4UnicastVrfsNexthopAddressesOutputReference {
    return new RouterStaticVrfIpv4UnicastVrfsNexthopAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterStaticVrfIpv4UnicastVrfsNexthopInterfaceAddresses {
  /**
  * Forwarding router's address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#address RouterStaticVrfIpv4Unicast#address}
  */
  readonly address: string;
  /**
  * Hello interval
  *   - Range: `3`-`30000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#bfd_fast_detect_minimum_interval RouterStaticVrfIpv4Unicast#bfd_fast_detect_minimum_interval}
  */
  readonly bfdFastDetectMinimumInterval?: number;
  /**
  * Detect multiplier
  *   - Range: `1`-`10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#bfd_fast_detect_multiplier RouterStaticVrfIpv4Unicast#bfd_fast_detect_multiplier}
  */
  readonly bfdFastDetectMultiplier?: number;
  /**
  * description of the static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#description RouterStaticVrfIpv4Unicast#description}
  */
  readonly description?: string;
  /**
  * Distance metric for this route
  *   - Range: `1`-`254`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#distance_metric RouterStaticVrfIpv4Unicast#distance_metric}
  */
  readonly distanceMetric?: number;
  /**
  * Forwarding interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#interface_name RouterStaticVrfIpv4Unicast#interface_name}
  */
  readonly interfaceName: string;
  /**
  * Set metric for this route
  *   - Range: `1`-`16777214`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#metric RouterStaticVrfIpv4Unicast#metric}
  */
  readonly metric?: number;
  /**
  * Permanent route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#permanent RouterStaticVrfIpv4Unicast#permanent}
  */
  readonly permanent?: boolean | cdktf.IResolvable;
  /**
  * Set tag for this route
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#tag RouterStaticVrfIpv4Unicast#tag}
  */
  readonly tag?: number;
  /**
  * Enable object tracking for static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#track RouterStaticVrfIpv4Unicast#track}
  */
  readonly track?: string;
}

export function routerStaticVrfIpv4UnicastVrfsNexthopInterfaceAddressesToTerraform(struct?: RouterStaticVrfIpv4UnicastVrfsNexthopInterfaceAddresses | cdktf.IResolvable): any {
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


export function routerStaticVrfIpv4UnicastVrfsNexthopInterfaceAddressesToHclTerraform(struct?: RouterStaticVrfIpv4UnicastVrfsNexthopInterfaceAddresses | cdktf.IResolvable): any {
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

export class RouterStaticVrfIpv4UnicastVrfsNexthopInterfaceAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterStaticVrfIpv4UnicastVrfsNexthopInterfaceAddresses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterStaticVrfIpv4UnicastVrfsNexthopInterfaceAddresses | cdktf.IResolvable | undefined) {
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

export class RouterStaticVrfIpv4UnicastVrfsNexthopInterfaceAddressesList extends cdktf.ComplexList {
  public internalValue? : RouterStaticVrfIpv4UnicastVrfsNexthopInterfaceAddresses[] | cdktf.IResolvable

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
  public get(index: number): RouterStaticVrfIpv4UnicastVrfsNexthopInterfaceAddressesOutputReference {
    return new RouterStaticVrfIpv4UnicastVrfsNexthopInterfaceAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterStaticVrfIpv4UnicastVrfsNexthopInterfaces {
  /**
  * description of the static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#description RouterStaticVrfIpv4Unicast#description}
  */
  readonly description?: string;
  /**
  * Distance metric for this route
  *   - Range: `1`-`254`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#distance_metric RouterStaticVrfIpv4Unicast#distance_metric}
  */
  readonly distanceMetric?: number;
  /**
  * Forwarding interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#interface_name RouterStaticVrfIpv4Unicast#interface_name}
  */
  readonly interfaceName: string;
  /**
  * Set metric for this route
  *   - Range: `1`-`16777214`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#metric RouterStaticVrfIpv4Unicast#metric}
  */
  readonly metric?: number;
  /**
  * Permanent route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#permanent RouterStaticVrfIpv4Unicast#permanent}
  */
  readonly permanent?: boolean | cdktf.IResolvable;
  /**
  * Set tag for this route
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#tag RouterStaticVrfIpv4Unicast#tag}
  */
  readonly tag?: number;
  /**
  * Enable object tracking for static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#track RouterStaticVrfIpv4Unicast#track}
  */
  readonly track?: string;
}

export function routerStaticVrfIpv4UnicastVrfsNexthopInterfacesToTerraform(struct?: RouterStaticVrfIpv4UnicastVrfsNexthopInterfaces | cdktf.IResolvable): any {
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


export function routerStaticVrfIpv4UnicastVrfsNexthopInterfacesToHclTerraform(struct?: RouterStaticVrfIpv4UnicastVrfsNexthopInterfaces | cdktf.IResolvable): any {
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

export class RouterStaticVrfIpv4UnicastVrfsNexthopInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterStaticVrfIpv4UnicastVrfsNexthopInterfaces | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterStaticVrfIpv4UnicastVrfsNexthopInterfaces | cdktf.IResolvable | undefined) {
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

export class RouterStaticVrfIpv4UnicastVrfsNexthopInterfacesList extends cdktf.ComplexList {
  public internalValue? : RouterStaticVrfIpv4UnicastVrfsNexthopInterfaces[] | cdktf.IResolvable

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
  public get(index: number): RouterStaticVrfIpv4UnicastVrfsNexthopInterfacesOutputReference {
    return new RouterStaticVrfIpv4UnicastVrfsNexthopInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterStaticVrfIpv4UnicastVrfs {
  /**
  * Forwarding router's address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#nexthop_addresses RouterStaticVrfIpv4Unicast#nexthop_addresses}
  */
  readonly nexthopAddresses?: RouterStaticVrfIpv4UnicastVrfsNexthopAddresses[] | cdktf.IResolvable;
  /**
  * Forwarding interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#nexthop_interface_addresses RouterStaticVrfIpv4Unicast#nexthop_interface_addresses}
  */
  readonly nexthopInterfaceAddresses?: RouterStaticVrfIpv4UnicastVrfsNexthopInterfaceAddresses[] | cdktf.IResolvable;
  /**
  * Forwarding interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#nexthop_interfaces RouterStaticVrfIpv4Unicast#nexthop_interfaces}
  */
  readonly nexthopInterfaces?: RouterStaticVrfIpv4UnicastVrfsNexthopInterfaces[] | cdktf.IResolvable;
  /**
  * Destination VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#vrf_name RouterStaticVrfIpv4Unicast#vrf_name}
  */
  readonly vrfName: string;
}

export function routerStaticVrfIpv4UnicastVrfsToTerraform(struct?: RouterStaticVrfIpv4UnicastVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nexthop_addresses: cdktf.listMapper(routerStaticVrfIpv4UnicastVrfsNexthopAddressesToTerraform, false)(struct!.nexthopAddresses),
    nexthop_interface_addresses: cdktf.listMapper(routerStaticVrfIpv4UnicastVrfsNexthopInterfaceAddressesToTerraform, false)(struct!.nexthopInterfaceAddresses),
    nexthop_interfaces: cdktf.listMapper(routerStaticVrfIpv4UnicastVrfsNexthopInterfacesToTerraform, false)(struct!.nexthopInterfaces),
    vrf_name: cdktf.stringToTerraform(struct!.vrfName),
  }
}


export function routerStaticVrfIpv4UnicastVrfsToHclTerraform(struct?: RouterStaticVrfIpv4UnicastVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nexthop_addresses: {
      value: cdktf.listMapperHcl(routerStaticVrfIpv4UnicastVrfsNexthopAddressesToHclTerraform, false)(struct!.nexthopAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "RouterStaticVrfIpv4UnicastVrfsNexthopAddressesList",
    },
    nexthop_interface_addresses: {
      value: cdktf.listMapperHcl(routerStaticVrfIpv4UnicastVrfsNexthopInterfaceAddressesToHclTerraform, false)(struct!.nexthopInterfaceAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "RouterStaticVrfIpv4UnicastVrfsNexthopInterfaceAddressesList",
    },
    nexthop_interfaces: {
      value: cdktf.listMapperHcl(routerStaticVrfIpv4UnicastVrfsNexthopInterfacesToHclTerraform, false)(struct!.nexthopInterfaces),
      isBlock: true,
      type: "list",
      storageClassType: "RouterStaticVrfIpv4UnicastVrfsNexthopInterfacesList",
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

export class RouterStaticVrfIpv4UnicastVrfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterStaticVrfIpv4UnicastVrfs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterStaticVrfIpv4UnicastVrfs | cdktf.IResolvable | undefined) {
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
  private _nexthopAddresses = new RouterStaticVrfIpv4UnicastVrfsNexthopAddressesList(this, "nexthop_addresses", false);
  public get nexthopAddresses() {
    return this._nexthopAddresses;
  }
  public putNexthopAddresses(value: RouterStaticVrfIpv4UnicastVrfsNexthopAddresses[] | cdktf.IResolvable) {
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
  private _nexthopInterfaceAddresses = new RouterStaticVrfIpv4UnicastVrfsNexthopInterfaceAddressesList(this, "nexthop_interface_addresses", false);
  public get nexthopInterfaceAddresses() {
    return this._nexthopInterfaceAddresses;
  }
  public putNexthopInterfaceAddresses(value: RouterStaticVrfIpv4UnicastVrfsNexthopInterfaceAddresses[] | cdktf.IResolvable) {
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
  private _nexthopInterfaces = new RouterStaticVrfIpv4UnicastVrfsNexthopInterfacesList(this, "nexthop_interfaces", false);
  public get nexthopInterfaces() {
    return this._nexthopInterfaces;
  }
  public putNexthopInterfaces(value: RouterStaticVrfIpv4UnicastVrfsNexthopInterfaces[] | cdktf.IResolvable) {
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

export class RouterStaticVrfIpv4UnicastVrfsList extends cdktf.ComplexList {
  public internalValue? : RouterStaticVrfIpv4UnicastVrfs[] | cdktf.IResolvable

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
  public get(index: number): RouterStaticVrfIpv4UnicastVrfsOutputReference {
    return new RouterStaticVrfIpv4UnicastVrfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast iosxr_router_static_vrf_ipv4_unicast}
*/
export class RouterStaticVrfIpv4Unicast extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_router_static_vrf_ipv4_unicast";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterStaticVrfIpv4Unicast resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterStaticVrfIpv4Unicast to import
  * @param importFromId The id of the existing RouterStaticVrfIpv4Unicast that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterStaticVrfIpv4Unicast to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_router_static_vrf_ipv4_unicast", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_vrf_ipv4_unicast iosxr_router_static_vrf_ipv4_unicast} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterStaticVrfIpv4UnicastConfig
  */
  public constructor(scope: Construct, id: string, config: RouterStaticVrfIpv4UnicastConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_router_static_vrf_ipv4_unicast',
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
  private _nexthopAddresses = new RouterStaticVrfIpv4UnicastNexthopAddressesList(this, "nexthop_addresses", false);
  public get nexthopAddresses() {
    return this._nexthopAddresses;
  }
  public putNexthopAddresses(value: RouterStaticVrfIpv4UnicastNexthopAddresses[] | cdktf.IResolvable) {
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
  private _nexthopInterfaceAddresses = new RouterStaticVrfIpv4UnicastNexthopInterfaceAddressesList(this, "nexthop_interface_addresses", false);
  public get nexthopInterfaceAddresses() {
    return this._nexthopInterfaceAddresses;
  }
  public putNexthopInterfaceAddresses(value: RouterStaticVrfIpv4UnicastNexthopInterfaceAddresses[] | cdktf.IResolvable) {
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
  private _nexthopInterfaces = new RouterStaticVrfIpv4UnicastNexthopInterfacesList(this, "nexthop_interfaces", false);
  public get nexthopInterfaces() {
    return this._nexthopInterfaces;
  }
  public putNexthopInterfaces(value: RouterStaticVrfIpv4UnicastNexthopInterfaces[] | cdktf.IResolvable) {
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
  private _vrfs = new RouterStaticVrfIpv4UnicastVrfsList(this, "vrfs", false);
  public get vrfs() {
    return this._vrfs;
  }
  public putVrfs(value: RouterStaticVrfIpv4UnicastVrfs[] | cdktf.IResolvable) {
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
      nexthop_addresses: cdktf.listMapper(routerStaticVrfIpv4UnicastNexthopAddressesToTerraform, false)(this._nexthopAddresses.internalValue),
      nexthop_interface_addresses: cdktf.listMapper(routerStaticVrfIpv4UnicastNexthopInterfaceAddressesToTerraform, false)(this._nexthopInterfaceAddresses.internalValue),
      nexthop_interfaces: cdktf.listMapper(routerStaticVrfIpv4UnicastNexthopInterfacesToTerraform, false)(this._nexthopInterfaces.internalValue),
      prefix_address: cdktf.stringToTerraform(this._prefixAddress),
      prefix_length: cdktf.numberToTerraform(this._prefixLength),
      vrf_name: cdktf.stringToTerraform(this._vrfName),
      vrfs: cdktf.listMapper(routerStaticVrfIpv4UnicastVrfsToTerraform, false)(this._vrfs.internalValue),
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
        value: cdktf.listMapperHcl(routerStaticVrfIpv4UnicastNexthopAddressesToHclTerraform, false)(this._nexthopAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterStaticVrfIpv4UnicastNexthopAddressesList",
      },
      nexthop_interface_addresses: {
        value: cdktf.listMapperHcl(routerStaticVrfIpv4UnicastNexthopInterfaceAddressesToHclTerraform, false)(this._nexthopInterfaceAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterStaticVrfIpv4UnicastNexthopInterfaceAddressesList",
      },
      nexthop_interfaces: {
        value: cdktf.listMapperHcl(routerStaticVrfIpv4UnicastNexthopInterfacesToHclTerraform, false)(this._nexthopInterfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterStaticVrfIpv4UnicastNexthopInterfacesList",
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
        value: cdktf.listMapperHcl(routerStaticVrfIpv4UnicastVrfsToHclTerraform, false)(this._vrfs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterStaticVrfIpv4UnicastVrfsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
