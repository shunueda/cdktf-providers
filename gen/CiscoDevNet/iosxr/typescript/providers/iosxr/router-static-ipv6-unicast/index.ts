// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterStaticIpv6UnicastConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#delete_mode RouterStaticIpv6Unicast#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#device RouterStaticIpv6Unicast#device}
  */
  readonly device?: string;
  /**
  * Forwarding router's address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#nexthop_addresses RouterStaticIpv6Unicast#nexthop_addresses}
  */
  readonly nexthopAddresses?: RouterStaticIpv6UnicastNexthopAddresses[] | cdktf.IResolvable;
  /**
  * Forwarding interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#nexthop_interface_addresses RouterStaticIpv6Unicast#nexthop_interface_addresses}
  */
  readonly nexthopInterfaceAddresses?: RouterStaticIpv6UnicastNexthopInterfaceAddresses[] | cdktf.IResolvable;
  /**
  * Forwarding interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#nexthop_interfaces RouterStaticIpv6Unicast#nexthop_interfaces}
  */
  readonly nexthopInterfaces?: RouterStaticIpv6UnicastNexthopInterfaces[] | cdktf.IResolvable;
  /**
  * Destination prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#prefix_address RouterStaticIpv6Unicast#prefix_address}
  */
  readonly prefixAddress: string;
  /**
  * Destination prefix length
  *   - Range: `0`-`128`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#prefix_length RouterStaticIpv6Unicast#prefix_length}
  */
  readonly prefixLength: number;
  /**
  * Destination VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#vrfs RouterStaticIpv6Unicast#vrfs}
  */
  readonly vrfs?: RouterStaticIpv6UnicastVrfs[] | cdktf.IResolvable;
}
export interface RouterStaticIpv6UnicastNexthopAddresses {
  /**
  * Forwarding router's address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#address RouterStaticIpv6Unicast#address}
  */
  readonly address: string;
  /**
  * description of the static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#description RouterStaticIpv6Unicast#description}
  */
  readonly description?: string;
  /**
  * Distance metric for this route
  *   - Range: `1`-`254`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#distance_metric RouterStaticIpv6Unicast#distance_metric}
  */
  readonly distanceMetric?: number;
  /**
  * Set metric for this route
  *   - Range: `1`-`16777214`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#metric RouterStaticIpv6Unicast#metric}
  */
  readonly metric?: number;
  /**
  * Permanent route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#permanent RouterStaticIpv6Unicast#permanent}
  */
  readonly permanent?: boolean | cdktf.IResolvable;
  /**
  * Set tag for this route
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#tag RouterStaticIpv6Unicast#tag}
  */
  readonly tag?: number;
  /**
  * Enable object tracking for static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#track RouterStaticIpv6Unicast#track}
  */
  readonly track?: string;
}

export function routerStaticIpv6UnicastNexthopAddressesToTerraform(struct?: RouterStaticIpv6UnicastNexthopAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    description: cdktf.stringToTerraform(struct!.description),
    distance_metric: cdktf.numberToTerraform(struct!.distanceMetric),
    metric: cdktf.numberToTerraform(struct!.metric),
    permanent: cdktf.booleanToTerraform(struct!.permanent),
    tag: cdktf.numberToTerraform(struct!.tag),
    track: cdktf.stringToTerraform(struct!.track),
  }
}


export function routerStaticIpv6UnicastNexthopAddressesToHclTerraform(struct?: RouterStaticIpv6UnicastNexthopAddresses | cdktf.IResolvable): any {
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

export class RouterStaticIpv6UnicastNexthopAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterStaticIpv6UnicastNexthopAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
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

  public set internalValue(value: RouterStaticIpv6UnicastNexthopAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
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

export class RouterStaticIpv6UnicastNexthopAddressesList extends cdktf.ComplexList {
  public internalValue? : RouterStaticIpv6UnicastNexthopAddresses[] | cdktf.IResolvable

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
  public get(index: number): RouterStaticIpv6UnicastNexthopAddressesOutputReference {
    return new RouterStaticIpv6UnicastNexthopAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterStaticIpv6UnicastNexthopInterfaceAddresses {
  /**
  * Forwarding router's address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#address RouterStaticIpv6Unicast#address}
  */
  readonly address: string;
  /**
  * description of the static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#description RouterStaticIpv6Unicast#description}
  */
  readonly description?: string;
  /**
  * Distance metric for this route
  *   - Range: `1`-`254`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#distance_metric RouterStaticIpv6Unicast#distance_metric}
  */
  readonly distanceMetric?: number;
  /**
  * Forwarding interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#interface_name RouterStaticIpv6Unicast#interface_name}
  */
  readonly interfaceName: string;
  /**
  * Set metric for this route
  *   - Range: `1`-`16777214`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#metric RouterStaticIpv6Unicast#metric}
  */
  readonly metric?: number;
  /**
  * Permanent route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#permanent RouterStaticIpv6Unicast#permanent}
  */
  readonly permanent?: boolean | cdktf.IResolvable;
  /**
  * Set tag for this route
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#tag RouterStaticIpv6Unicast#tag}
  */
  readonly tag?: number;
  /**
  * Enable object tracking for static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#track RouterStaticIpv6Unicast#track}
  */
  readonly track?: string;
}

export function routerStaticIpv6UnicastNexthopInterfaceAddressesToTerraform(struct?: RouterStaticIpv6UnicastNexthopInterfaceAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    description: cdktf.stringToTerraform(struct!.description),
    distance_metric: cdktf.numberToTerraform(struct!.distanceMetric),
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    metric: cdktf.numberToTerraform(struct!.metric),
    permanent: cdktf.booleanToTerraform(struct!.permanent),
    tag: cdktf.numberToTerraform(struct!.tag),
    track: cdktf.stringToTerraform(struct!.track),
  }
}


export function routerStaticIpv6UnicastNexthopInterfaceAddressesToHclTerraform(struct?: RouterStaticIpv6UnicastNexthopInterfaceAddresses | cdktf.IResolvable): any {
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

export class RouterStaticIpv6UnicastNexthopInterfaceAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterStaticIpv6UnicastNexthopInterfaceAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
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

  public set internalValue(value: RouterStaticIpv6UnicastNexthopInterfaceAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
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

export class RouterStaticIpv6UnicastNexthopInterfaceAddressesList extends cdktf.ComplexList {
  public internalValue? : RouterStaticIpv6UnicastNexthopInterfaceAddresses[] | cdktf.IResolvable

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
  public get(index: number): RouterStaticIpv6UnicastNexthopInterfaceAddressesOutputReference {
    return new RouterStaticIpv6UnicastNexthopInterfaceAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterStaticIpv6UnicastNexthopInterfaces {
  /**
  * description of the static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#description RouterStaticIpv6Unicast#description}
  */
  readonly description?: string;
  /**
  * Distance metric for this route
  *   - Range: `1`-`254`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#distance_metric RouterStaticIpv6Unicast#distance_metric}
  */
  readonly distanceMetric?: number;
  /**
  * Forwarding interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#interface_name RouterStaticIpv6Unicast#interface_name}
  */
  readonly interfaceName: string;
  /**
  * Set metric for this route
  *   - Range: `1`-`16777214`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#metric RouterStaticIpv6Unicast#metric}
  */
  readonly metric?: number;
  /**
  * Permanent route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#permanent RouterStaticIpv6Unicast#permanent}
  */
  readonly permanent?: boolean | cdktf.IResolvable;
  /**
  * Set tag for this route
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#tag RouterStaticIpv6Unicast#tag}
  */
  readonly tag?: number;
  /**
  * Enable object tracking for static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#track RouterStaticIpv6Unicast#track}
  */
  readonly track?: string;
}

export function routerStaticIpv6UnicastNexthopInterfacesToTerraform(struct?: RouterStaticIpv6UnicastNexthopInterfaces | cdktf.IResolvable): any {
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


export function routerStaticIpv6UnicastNexthopInterfacesToHclTerraform(struct?: RouterStaticIpv6UnicastNexthopInterfaces | cdktf.IResolvable): any {
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

export class RouterStaticIpv6UnicastNexthopInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterStaticIpv6UnicastNexthopInterfaces | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterStaticIpv6UnicastNexthopInterfaces | cdktf.IResolvable | undefined) {
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

export class RouterStaticIpv6UnicastNexthopInterfacesList extends cdktf.ComplexList {
  public internalValue? : RouterStaticIpv6UnicastNexthopInterfaces[] | cdktf.IResolvable

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
  public get(index: number): RouterStaticIpv6UnicastNexthopInterfacesOutputReference {
    return new RouterStaticIpv6UnicastNexthopInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterStaticIpv6UnicastVrfsNexthopAddresses {
  /**
  * Forwarding router's address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#address RouterStaticIpv6Unicast#address}
  */
  readonly address: string;
  /**
  * description of the static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#description RouterStaticIpv6Unicast#description}
  */
  readonly description?: string;
  /**
  * Distance metric for this route
  *   - Range: `1`-`254`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#distance_metric RouterStaticIpv6Unicast#distance_metric}
  */
  readonly distanceMetric?: number;
  /**
  * Set metric for this route
  *   - Range: `1`-`16777214`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#metric RouterStaticIpv6Unicast#metric}
  */
  readonly metric?: number;
  /**
  * Permanent route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#permanent RouterStaticIpv6Unicast#permanent}
  */
  readonly permanent?: boolean | cdktf.IResolvable;
  /**
  * Set tag for this route
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#tag RouterStaticIpv6Unicast#tag}
  */
  readonly tag?: number;
  /**
  * Enable object tracking for static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#track RouterStaticIpv6Unicast#track}
  */
  readonly track?: string;
}

export function routerStaticIpv6UnicastVrfsNexthopAddressesToTerraform(struct?: RouterStaticIpv6UnicastVrfsNexthopAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    description: cdktf.stringToTerraform(struct!.description),
    distance_metric: cdktf.numberToTerraform(struct!.distanceMetric),
    metric: cdktf.numberToTerraform(struct!.metric),
    permanent: cdktf.booleanToTerraform(struct!.permanent),
    tag: cdktf.numberToTerraform(struct!.tag),
    track: cdktf.stringToTerraform(struct!.track),
  }
}


export function routerStaticIpv6UnicastVrfsNexthopAddressesToHclTerraform(struct?: RouterStaticIpv6UnicastVrfsNexthopAddresses | cdktf.IResolvable): any {
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

export class RouterStaticIpv6UnicastVrfsNexthopAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterStaticIpv6UnicastVrfsNexthopAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
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

  public set internalValue(value: RouterStaticIpv6UnicastVrfsNexthopAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
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

export class RouterStaticIpv6UnicastVrfsNexthopAddressesList extends cdktf.ComplexList {
  public internalValue? : RouterStaticIpv6UnicastVrfsNexthopAddresses[] | cdktf.IResolvable

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
  public get(index: number): RouterStaticIpv6UnicastVrfsNexthopAddressesOutputReference {
    return new RouterStaticIpv6UnicastVrfsNexthopAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterStaticIpv6UnicastVrfsNexthopInterfaceAddresses {
  /**
  * Forwarding router's address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#address RouterStaticIpv6Unicast#address}
  */
  readonly address: string;
  /**
  * description of the static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#description RouterStaticIpv6Unicast#description}
  */
  readonly description?: string;
  /**
  * Distance metric for this route
  *   - Range: `1`-`254`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#distance_metric RouterStaticIpv6Unicast#distance_metric}
  */
  readonly distanceMetric?: number;
  /**
  * Forwarding interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#interface_name RouterStaticIpv6Unicast#interface_name}
  */
  readonly interfaceName: string;
  /**
  * Set metric for this route
  *   - Range: `1`-`16777214`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#metric RouterStaticIpv6Unicast#metric}
  */
  readonly metric?: number;
  /**
  * Permanent route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#permanent RouterStaticIpv6Unicast#permanent}
  */
  readonly permanent?: boolean | cdktf.IResolvable;
  /**
  * Set tag for this route
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#tag RouterStaticIpv6Unicast#tag}
  */
  readonly tag?: number;
  /**
  * Enable object tracking for static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#track RouterStaticIpv6Unicast#track}
  */
  readonly track?: string;
}

export function routerStaticIpv6UnicastVrfsNexthopInterfaceAddressesToTerraform(struct?: RouterStaticIpv6UnicastVrfsNexthopInterfaceAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    description: cdktf.stringToTerraform(struct!.description),
    distance_metric: cdktf.numberToTerraform(struct!.distanceMetric),
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    metric: cdktf.numberToTerraform(struct!.metric),
    permanent: cdktf.booleanToTerraform(struct!.permanent),
    tag: cdktf.numberToTerraform(struct!.tag),
    track: cdktf.stringToTerraform(struct!.track),
  }
}


export function routerStaticIpv6UnicastVrfsNexthopInterfaceAddressesToHclTerraform(struct?: RouterStaticIpv6UnicastVrfsNexthopInterfaceAddresses | cdktf.IResolvable): any {
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

export class RouterStaticIpv6UnicastVrfsNexthopInterfaceAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterStaticIpv6UnicastVrfsNexthopInterfaceAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
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

  public set internalValue(value: RouterStaticIpv6UnicastVrfsNexthopInterfaceAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
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

export class RouterStaticIpv6UnicastVrfsNexthopInterfaceAddressesList extends cdktf.ComplexList {
  public internalValue? : RouterStaticIpv6UnicastVrfsNexthopInterfaceAddresses[] | cdktf.IResolvable

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
  public get(index: number): RouterStaticIpv6UnicastVrfsNexthopInterfaceAddressesOutputReference {
    return new RouterStaticIpv6UnicastVrfsNexthopInterfaceAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterStaticIpv6UnicastVrfsNexthopInterfaces {
  /**
  * description of the static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#description RouterStaticIpv6Unicast#description}
  */
  readonly description?: string;
  /**
  * Distance metric for this route
  *   - Range: `1`-`254`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#distance_metric RouterStaticIpv6Unicast#distance_metric}
  */
  readonly distanceMetric?: number;
  /**
  * Forwarding interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#interface_name RouterStaticIpv6Unicast#interface_name}
  */
  readonly interfaceName: string;
  /**
  * Set metric for this route
  *   - Range: `1`-`16777214`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#metric RouterStaticIpv6Unicast#metric}
  */
  readonly metric?: number;
  /**
  * Permanent route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#permanent RouterStaticIpv6Unicast#permanent}
  */
  readonly permanent?: boolean | cdktf.IResolvable;
  /**
  * Set tag for this route
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#tag RouterStaticIpv6Unicast#tag}
  */
  readonly tag?: number;
  /**
  * Enable object tracking for static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#track RouterStaticIpv6Unicast#track}
  */
  readonly track?: string;
}

export function routerStaticIpv6UnicastVrfsNexthopInterfacesToTerraform(struct?: RouterStaticIpv6UnicastVrfsNexthopInterfaces | cdktf.IResolvable): any {
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


export function routerStaticIpv6UnicastVrfsNexthopInterfacesToHclTerraform(struct?: RouterStaticIpv6UnicastVrfsNexthopInterfaces | cdktf.IResolvable): any {
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

export class RouterStaticIpv6UnicastVrfsNexthopInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterStaticIpv6UnicastVrfsNexthopInterfaces | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterStaticIpv6UnicastVrfsNexthopInterfaces | cdktf.IResolvable | undefined) {
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

export class RouterStaticIpv6UnicastVrfsNexthopInterfacesList extends cdktf.ComplexList {
  public internalValue? : RouterStaticIpv6UnicastVrfsNexthopInterfaces[] | cdktf.IResolvable

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
  public get(index: number): RouterStaticIpv6UnicastVrfsNexthopInterfacesOutputReference {
    return new RouterStaticIpv6UnicastVrfsNexthopInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterStaticIpv6UnicastVrfs {
  /**
  * Forwarding router's address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#nexthop_addresses RouterStaticIpv6Unicast#nexthop_addresses}
  */
  readonly nexthopAddresses?: RouterStaticIpv6UnicastVrfsNexthopAddresses[] | cdktf.IResolvable;
  /**
  * Forwarding interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#nexthop_interface_addresses RouterStaticIpv6Unicast#nexthop_interface_addresses}
  */
  readonly nexthopInterfaceAddresses?: RouterStaticIpv6UnicastVrfsNexthopInterfaceAddresses[] | cdktf.IResolvable;
  /**
  * Forwarding interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#nexthop_interfaces RouterStaticIpv6Unicast#nexthop_interfaces}
  */
  readonly nexthopInterfaces?: RouterStaticIpv6UnicastVrfsNexthopInterfaces[] | cdktf.IResolvable;
  /**
  * Destination VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#vrf_name RouterStaticIpv6Unicast#vrf_name}
  */
  readonly vrfName: string;
}

export function routerStaticIpv6UnicastVrfsToTerraform(struct?: RouterStaticIpv6UnicastVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nexthop_addresses: cdktf.listMapper(routerStaticIpv6UnicastVrfsNexthopAddressesToTerraform, false)(struct!.nexthopAddresses),
    nexthop_interface_addresses: cdktf.listMapper(routerStaticIpv6UnicastVrfsNexthopInterfaceAddressesToTerraform, false)(struct!.nexthopInterfaceAddresses),
    nexthop_interfaces: cdktf.listMapper(routerStaticIpv6UnicastVrfsNexthopInterfacesToTerraform, false)(struct!.nexthopInterfaces),
    vrf_name: cdktf.stringToTerraform(struct!.vrfName),
  }
}


export function routerStaticIpv6UnicastVrfsToHclTerraform(struct?: RouterStaticIpv6UnicastVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nexthop_addresses: {
      value: cdktf.listMapperHcl(routerStaticIpv6UnicastVrfsNexthopAddressesToHclTerraform, false)(struct!.nexthopAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "RouterStaticIpv6UnicastVrfsNexthopAddressesList",
    },
    nexthop_interface_addresses: {
      value: cdktf.listMapperHcl(routerStaticIpv6UnicastVrfsNexthopInterfaceAddressesToHclTerraform, false)(struct!.nexthopInterfaceAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "RouterStaticIpv6UnicastVrfsNexthopInterfaceAddressesList",
    },
    nexthop_interfaces: {
      value: cdktf.listMapperHcl(routerStaticIpv6UnicastVrfsNexthopInterfacesToHclTerraform, false)(struct!.nexthopInterfaces),
      isBlock: true,
      type: "list",
      storageClassType: "RouterStaticIpv6UnicastVrfsNexthopInterfacesList",
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

export class RouterStaticIpv6UnicastVrfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterStaticIpv6UnicastVrfs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterStaticIpv6UnicastVrfs | cdktf.IResolvable | undefined) {
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
  private _nexthopAddresses = new RouterStaticIpv6UnicastVrfsNexthopAddressesList(this, "nexthop_addresses", false);
  public get nexthopAddresses() {
    return this._nexthopAddresses;
  }
  public putNexthopAddresses(value: RouterStaticIpv6UnicastVrfsNexthopAddresses[] | cdktf.IResolvable) {
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
  private _nexthopInterfaceAddresses = new RouterStaticIpv6UnicastVrfsNexthopInterfaceAddressesList(this, "nexthop_interface_addresses", false);
  public get nexthopInterfaceAddresses() {
    return this._nexthopInterfaceAddresses;
  }
  public putNexthopInterfaceAddresses(value: RouterStaticIpv6UnicastVrfsNexthopInterfaceAddresses[] | cdktf.IResolvable) {
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
  private _nexthopInterfaces = new RouterStaticIpv6UnicastVrfsNexthopInterfacesList(this, "nexthop_interfaces", false);
  public get nexthopInterfaces() {
    return this._nexthopInterfaces;
  }
  public putNexthopInterfaces(value: RouterStaticIpv6UnicastVrfsNexthopInterfaces[] | cdktf.IResolvable) {
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

export class RouterStaticIpv6UnicastVrfsList extends cdktf.ComplexList {
  public internalValue? : RouterStaticIpv6UnicastVrfs[] | cdktf.IResolvable

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
  public get(index: number): RouterStaticIpv6UnicastVrfsOutputReference {
    return new RouterStaticIpv6UnicastVrfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast iosxr_router_static_ipv6_unicast}
*/
export class RouterStaticIpv6Unicast extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_router_static_ipv6_unicast";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterStaticIpv6Unicast resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterStaticIpv6Unicast to import
  * @param importFromId The id of the existing RouterStaticIpv6Unicast that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterStaticIpv6Unicast to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_router_static_ipv6_unicast", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_static_ipv6_unicast iosxr_router_static_ipv6_unicast} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterStaticIpv6UnicastConfig
  */
  public constructor(scope: Construct, id: string, config: RouterStaticIpv6UnicastConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_router_static_ipv6_unicast',
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
  private _nexthopAddresses = new RouterStaticIpv6UnicastNexthopAddressesList(this, "nexthop_addresses", false);
  public get nexthopAddresses() {
    return this._nexthopAddresses;
  }
  public putNexthopAddresses(value: RouterStaticIpv6UnicastNexthopAddresses[] | cdktf.IResolvable) {
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
  private _nexthopInterfaceAddresses = new RouterStaticIpv6UnicastNexthopInterfaceAddressesList(this, "nexthop_interface_addresses", false);
  public get nexthopInterfaceAddresses() {
    return this._nexthopInterfaceAddresses;
  }
  public putNexthopInterfaceAddresses(value: RouterStaticIpv6UnicastNexthopInterfaceAddresses[] | cdktf.IResolvable) {
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
  private _nexthopInterfaces = new RouterStaticIpv6UnicastNexthopInterfacesList(this, "nexthop_interfaces", false);
  public get nexthopInterfaces() {
    return this._nexthopInterfaces;
  }
  public putNexthopInterfaces(value: RouterStaticIpv6UnicastNexthopInterfaces[] | cdktf.IResolvable) {
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
  private _vrfs = new RouterStaticIpv6UnicastVrfsList(this, "vrfs", false);
  public get vrfs() {
    return this._vrfs;
  }
  public putVrfs(value: RouterStaticIpv6UnicastVrfs[] | cdktf.IResolvable) {
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
      nexthop_addresses: cdktf.listMapper(routerStaticIpv6UnicastNexthopAddressesToTerraform, false)(this._nexthopAddresses.internalValue),
      nexthop_interface_addresses: cdktf.listMapper(routerStaticIpv6UnicastNexthopInterfaceAddressesToTerraform, false)(this._nexthopInterfaceAddresses.internalValue),
      nexthop_interfaces: cdktf.listMapper(routerStaticIpv6UnicastNexthopInterfacesToTerraform, false)(this._nexthopInterfaces.internalValue),
      prefix_address: cdktf.stringToTerraform(this._prefixAddress),
      prefix_length: cdktf.numberToTerraform(this._prefixLength),
      vrfs: cdktf.listMapper(routerStaticIpv6UnicastVrfsToTerraform, false)(this._vrfs.internalValue),
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
        value: cdktf.listMapperHcl(routerStaticIpv6UnicastNexthopAddressesToHclTerraform, false)(this._nexthopAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterStaticIpv6UnicastNexthopAddressesList",
      },
      nexthop_interface_addresses: {
        value: cdktf.listMapperHcl(routerStaticIpv6UnicastNexthopInterfaceAddressesToHclTerraform, false)(this._nexthopInterfaceAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterStaticIpv6UnicastNexthopInterfaceAddressesList",
      },
      nexthop_interfaces: {
        value: cdktf.listMapperHcl(routerStaticIpv6UnicastNexthopInterfacesToHclTerraform, false)(this._nexthopInterfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterStaticIpv6UnicastNexthopInterfacesList",
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
        value: cdktf.listMapperHcl(routerStaticIpv6UnicastVrfsToHclTerraform, false)(this._vrfs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterStaticIpv6UnicastVrfsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
