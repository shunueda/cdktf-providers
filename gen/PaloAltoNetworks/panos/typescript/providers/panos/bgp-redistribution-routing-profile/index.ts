// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BgpRedistributionRoutingProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile#ipv4 BgpRedistributionRoutingProfile#ipv4}
  */
  readonly ipv4?: BgpRedistributionRoutingProfileIpv4;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile#ipv6 BgpRedistributionRoutingProfile#ipv6}
  */
  readonly ipv6?: BgpRedistributionRoutingProfileIpv6;
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile#location BgpRedistributionRoutingProfile#location}
  */
  readonly location: BgpRedistributionRoutingProfileLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile#name BgpRedistributionRoutingProfile#name}
  */
  readonly name: string;
}
export interface BgpRedistributionRoutingProfileIpv4UnicastConnected {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile#enable BgpRedistributionRoutingProfile#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Set Metric (Field ignored if route-map configured).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile#metric BgpRedistributionRoutingProfile#metric}
  */
  readonly metric?: number;
  /**
  * Apply Route-Map on Redistributed Routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile#route_map BgpRedistributionRoutingProfile#route_map}
  */
  readonly routeMap?: string;
}

export function bgpRedistributionRoutingProfileIpv4UnicastConnectedToTerraform(struct?: BgpRedistributionRoutingProfileIpv4UnicastConnected | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    metric: cdktf.numberToTerraform(struct!.metric),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function bgpRedistributionRoutingProfileIpv4UnicastConnectedToHclTerraform(struct?: BgpRedistributionRoutingProfileIpv4UnicastConnected | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRedistributionRoutingProfileIpv4UnicastConnectedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRedistributionRoutingProfileIpv4UnicastConnected | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRedistributionRoutingProfileIpv4UnicastConnected | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._metric = undefined;
      this._routeMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._metric = value.metric;
      this._routeMap = value.routeMap;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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

  // route_map - computed: false, optional: true, required: false
  private _routeMap?: string; 
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
  public set routeMap(value: string) {
    this._routeMap = value;
  }
  public resetRouteMap() {
    this._routeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap;
  }
}
export interface BgpRedistributionRoutingProfileIpv4UnicastOspf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile#enable BgpRedistributionRoutingProfile#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Set Metric (Field ignored if route-map configured).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile#metric BgpRedistributionRoutingProfile#metric}
  */
  readonly metric?: number;
  /**
  * Apply Route-Map on Redistributed Routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile#route_map BgpRedistributionRoutingProfile#route_map}
  */
  readonly routeMap?: string;
}

export function bgpRedistributionRoutingProfileIpv4UnicastOspfToTerraform(struct?: BgpRedistributionRoutingProfileIpv4UnicastOspf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    metric: cdktf.numberToTerraform(struct!.metric),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function bgpRedistributionRoutingProfileIpv4UnicastOspfToHclTerraform(struct?: BgpRedistributionRoutingProfileIpv4UnicastOspf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRedistributionRoutingProfileIpv4UnicastOspfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRedistributionRoutingProfileIpv4UnicastOspf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRedistributionRoutingProfileIpv4UnicastOspf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._metric = undefined;
      this._routeMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._metric = value.metric;
      this._routeMap = value.routeMap;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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

  // route_map - computed: false, optional: true, required: false
  private _routeMap?: string; 
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
  public set routeMap(value: string) {
    this._routeMap = value;
  }
  public resetRouteMap() {
    this._routeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap;
  }
}
export interface BgpRedistributionRoutingProfileIpv4UnicastRip {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile#enable BgpRedistributionRoutingProfile#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Set Metric (Field ignored if route-map configured).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile#metric BgpRedistributionRoutingProfile#metric}
  */
  readonly metric?: number;
  /**
  * Apply Route-Map on Redistributed Routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile#route_map BgpRedistributionRoutingProfile#route_map}
  */
  readonly routeMap?: string;
}

export function bgpRedistributionRoutingProfileIpv4UnicastRipToTerraform(struct?: BgpRedistributionRoutingProfileIpv4UnicastRip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    metric: cdktf.numberToTerraform(struct!.metric),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function bgpRedistributionRoutingProfileIpv4UnicastRipToHclTerraform(struct?: BgpRedistributionRoutingProfileIpv4UnicastRip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRedistributionRoutingProfileIpv4UnicastRipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRedistributionRoutingProfileIpv4UnicastRip | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRedistributionRoutingProfileIpv4UnicastRip | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._metric = undefined;
      this._routeMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._metric = value.metric;
      this._routeMap = value.routeMap;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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

  // route_map - computed: false, optional: true, required: false
  private _routeMap?: string; 
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
  public set routeMap(value: string) {
    this._routeMap = value;
  }
  public resetRouteMap() {
    this._routeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap;
  }
}
export interface BgpRedistributionRoutingProfileIpv4UnicastStatic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile#enable BgpRedistributionRoutingProfile#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Set Metric (Field ignored if route-map configured).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile#metric BgpRedistributionRoutingProfile#metric}
  */
  readonly metric?: number;
  /**
  * Apply Route-Map on Redistributed Routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile#route_map BgpRedistributionRoutingProfile#route_map}
  */
  readonly routeMap?: string;
}

export function bgpRedistributionRoutingProfileIpv4UnicastStaticToTerraform(struct?: BgpRedistributionRoutingProfileIpv4UnicastStatic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    metric: cdktf.numberToTerraform(struct!.metric),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function bgpRedistributionRoutingProfileIpv4UnicastStaticToHclTerraform(struct?: BgpRedistributionRoutingProfileIpv4UnicastStatic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRedistributionRoutingProfileIpv4UnicastStaticOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRedistributionRoutingProfileIpv4UnicastStatic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRedistributionRoutingProfileIpv4UnicastStatic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._metric = undefined;
      this._routeMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._metric = value.metric;
      this._routeMap = value.routeMap;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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

  // route_map - computed: false, optional: true, required: false
  private _routeMap?: string; 
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
  public set routeMap(value: string) {
    this._routeMap = value;
  }
  public resetRouteMap() {
    this._routeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap;
  }
}
export interface BgpRedistributionRoutingProfileIpv4Unicast {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile#connected BgpRedistributionRoutingProfile#connected}
  */
  readonly connected?: BgpRedistributionRoutingProfileIpv4UnicastConnected;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile#ospf BgpRedistributionRoutingProfile#ospf}
  */
  readonly ospf?: BgpRedistributionRoutingProfileIpv4UnicastOspf;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile#rip BgpRedistributionRoutingProfile#rip}
  */
  readonly rip?: BgpRedistributionRoutingProfileIpv4UnicastRip;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile#static BgpRedistributionRoutingProfile#static}
  */
  readonly static?: BgpRedistributionRoutingProfileIpv4UnicastStatic;
}

export function bgpRedistributionRoutingProfileIpv4UnicastToTerraform(struct?: BgpRedistributionRoutingProfileIpv4Unicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connected: bgpRedistributionRoutingProfileIpv4UnicastConnectedToTerraform(struct!.connected),
    ospf: bgpRedistributionRoutingProfileIpv4UnicastOspfToTerraform(struct!.ospf),
    rip: bgpRedistributionRoutingProfileIpv4UnicastRipToTerraform(struct!.rip),
    static: bgpRedistributionRoutingProfileIpv4UnicastStaticToTerraform(struct!.static),
  }
}


export function bgpRedistributionRoutingProfileIpv4UnicastToHclTerraform(struct?: BgpRedistributionRoutingProfileIpv4Unicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connected: {
      value: bgpRedistributionRoutingProfileIpv4UnicastConnectedToHclTerraform(struct!.connected),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRedistributionRoutingProfileIpv4UnicastConnected",
    },
    ospf: {
      value: bgpRedistributionRoutingProfileIpv4UnicastOspfToHclTerraform(struct!.ospf),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRedistributionRoutingProfileIpv4UnicastOspf",
    },
    rip: {
      value: bgpRedistributionRoutingProfileIpv4UnicastRipToHclTerraform(struct!.rip),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRedistributionRoutingProfileIpv4UnicastRip",
    },
    static: {
      value: bgpRedistributionRoutingProfileIpv4UnicastStaticToHclTerraform(struct!.static),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRedistributionRoutingProfileIpv4UnicastStatic",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRedistributionRoutingProfileIpv4UnicastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRedistributionRoutingProfileIpv4Unicast | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connected?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connected = this._connected?.internalValue;
    }
    if (this._ospf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospf = this._ospf?.internalValue;
    }
    if (this._rip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rip = this._rip?.internalValue;
    }
    if (this._static?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.static = this._static?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRedistributionRoutingProfileIpv4Unicast | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connected.internalValue = undefined;
      this._ospf.internalValue = undefined;
      this._rip.internalValue = undefined;
      this._static.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connected.internalValue = value.connected;
      this._ospf.internalValue = value.ospf;
      this._rip.internalValue = value.rip;
      this._static.internalValue = value.static;
    }
  }

  // connected - computed: false, optional: true, required: false
  private _connected = new BgpRedistributionRoutingProfileIpv4UnicastConnectedOutputReference(this, "connected");
  public get connected() {
    return this._connected;
  }
  public putConnected(value: BgpRedistributionRoutingProfileIpv4UnicastConnected) {
    this._connected.internalValue = value;
  }
  public resetConnected() {
    this._connected.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectedInput() {
    return this._connected.internalValue;
  }

  // ospf - computed: false, optional: true, required: false
  private _ospf = new BgpRedistributionRoutingProfileIpv4UnicastOspfOutputReference(this, "ospf");
  public get ospf() {
    return this._ospf;
  }
  public putOspf(value: BgpRedistributionRoutingProfileIpv4UnicastOspf) {
    this._ospf.internalValue = value;
  }
  public resetOspf() {
    this._ospf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfInput() {
    return this._ospf.internalValue;
  }

  // rip - computed: false, optional: true, required: false
  private _rip = new BgpRedistributionRoutingProfileIpv4UnicastRipOutputReference(this, "rip");
  public get rip() {
    return this._rip;
  }
  public putRip(value: BgpRedistributionRoutingProfileIpv4UnicastRip) {
    this._rip.internalValue = value;
  }
  public resetRip() {
    this._rip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripInput() {
    return this._rip.internalValue;
  }

  // static - computed: false, optional: true, required: false
  private _static = new BgpRedistributionRoutingProfileIpv4UnicastStaticOutputReference(this, "static");
  public get static() {
    return this._static;
  }
  public putStatic(value: BgpRedistributionRoutingProfileIpv4UnicastStatic) {
    this._static.internalValue = value;
  }
  public resetStatic() {
    this._static.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticInput() {
    return this._static.internalValue;
  }
}
export interface BgpRedistributionRoutingProfileIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile#unicast BgpRedistributionRoutingProfile#unicast}
  */
  readonly unicast?: BgpRedistributionRoutingProfileIpv4Unicast;
}

export function bgpRedistributionRoutingProfileIpv4ToTerraform(struct?: BgpRedistributionRoutingProfileIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unicast: bgpRedistributionRoutingProfileIpv4UnicastToTerraform(struct!.unicast),
  }
}


export function bgpRedistributionRoutingProfileIpv4ToHclTerraform(struct?: BgpRedistributionRoutingProfileIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unicast: {
      value: bgpRedistributionRoutingProfileIpv4UnicastToHclTerraform(struct!.unicast),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRedistributionRoutingProfileIpv4Unicast",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRedistributionRoutingProfileIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRedistributionRoutingProfileIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unicast?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unicast = this._unicast?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRedistributionRoutingProfileIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unicast.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unicast.internalValue = value.unicast;
    }
  }

  // unicast - computed: false, optional: true, required: false
  private _unicast = new BgpRedistributionRoutingProfileIpv4UnicastOutputReference(this, "unicast");
  public get unicast() {
    return this._unicast;
  }
  public putUnicast(value: BgpRedistributionRoutingProfileIpv4Unicast) {
    this._unicast.internalValue = value;
  }
  public resetUnicast() {
    this._unicast.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unicastInput() {
    return this._unicast.internalValue;
  }
}
export interface BgpRedistributionRoutingProfileIpv6UnicastConnected {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile#enable BgpRedistributionRoutingProfile#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Set Metric (Field ignored if route-map configured).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile#metric BgpRedistributionRoutingProfile#metric}
  */
  readonly metric?: number;
  /**
  * Apply Route-Map on Redistributed Routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile#route_map BgpRedistributionRoutingProfile#route_map}
  */
  readonly routeMap?: string;
}

export function bgpRedistributionRoutingProfileIpv6UnicastConnectedToTerraform(struct?: BgpRedistributionRoutingProfileIpv6UnicastConnected | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    metric: cdktf.numberToTerraform(struct!.metric),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function bgpRedistributionRoutingProfileIpv6UnicastConnectedToHclTerraform(struct?: BgpRedistributionRoutingProfileIpv6UnicastConnected | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRedistributionRoutingProfileIpv6UnicastConnectedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRedistributionRoutingProfileIpv6UnicastConnected | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRedistributionRoutingProfileIpv6UnicastConnected | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._metric = undefined;
      this._routeMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._metric = value.metric;
      this._routeMap = value.routeMap;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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

  // route_map - computed: false, optional: true, required: false
  private _routeMap?: string; 
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
  public set routeMap(value: string) {
    this._routeMap = value;
  }
  public resetRouteMap() {
    this._routeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap;
  }
}
export interface BgpRedistributionRoutingProfileIpv6UnicastOspfv3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile#enable BgpRedistributionRoutingProfile#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Set Metric (Field ignored if route-map configured).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile#metric BgpRedistributionRoutingProfile#metric}
  */
  readonly metric?: number;
  /**
  * Apply Route-Map on Redistributed Routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile#route_map BgpRedistributionRoutingProfile#route_map}
  */
  readonly routeMap?: string;
}

export function bgpRedistributionRoutingProfileIpv6UnicastOspfv3ToTerraform(struct?: BgpRedistributionRoutingProfileIpv6UnicastOspfv3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    metric: cdktf.numberToTerraform(struct!.metric),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function bgpRedistributionRoutingProfileIpv6UnicastOspfv3ToHclTerraform(struct?: BgpRedistributionRoutingProfileIpv6UnicastOspfv3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRedistributionRoutingProfileIpv6UnicastOspfv3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRedistributionRoutingProfileIpv6UnicastOspfv3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRedistributionRoutingProfileIpv6UnicastOspfv3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._metric = undefined;
      this._routeMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._metric = value.metric;
      this._routeMap = value.routeMap;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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

  // route_map - computed: false, optional: true, required: false
  private _routeMap?: string; 
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
  public set routeMap(value: string) {
    this._routeMap = value;
  }
  public resetRouteMap() {
    this._routeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap;
  }
}
export interface BgpRedistributionRoutingProfileIpv6UnicastStatic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile#enable BgpRedistributionRoutingProfile#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Set Metric (Field ignored if route-map configured).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile#metric BgpRedistributionRoutingProfile#metric}
  */
  readonly metric?: number;
  /**
  * Apply Route-Map on Redistributed Routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile#route_map BgpRedistributionRoutingProfile#route_map}
  */
  readonly routeMap?: string;
}

export function bgpRedistributionRoutingProfileIpv6UnicastStaticToTerraform(struct?: BgpRedistributionRoutingProfileIpv6UnicastStatic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    metric: cdktf.numberToTerraform(struct!.metric),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function bgpRedistributionRoutingProfileIpv6UnicastStaticToHclTerraform(struct?: BgpRedistributionRoutingProfileIpv6UnicastStatic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRedistributionRoutingProfileIpv6UnicastStaticOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRedistributionRoutingProfileIpv6UnicastStatic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRedistributionRoutingProfileIpv6UnicastStatic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._metric = undefined;
      this._routeMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._metric = value.metric;
      this._routeMap = value.routeMap;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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

  // route_map - computed: false, optional: true, required: false
  private _routeMap?: string; 
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
  public set routeMap(value: string) {
    this._routeMap = value;
  }
  public resetRouteMap() {
    this._routeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap;
  }
}
export interface BgpRedistributionRoutingProfileIpv6Unicast {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile#connected BgpRedistributionRoutingProfile#connected}
  */
  readonly connected?: BgpRedistributionRoutingProfileIpv6UnicastConnected;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile#ospfv3 BgpRedistributionRoutingProfile#ospfv3}
  */
  readonly ospfv3?: BgpRedistributionRoutingProfileIpv6UnicastOspfv3;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile#static BgpRedistributionRoutingProfile#static}
  */
  readonly static?: BgpRedistributionRoutingProfileIpv6UnicastStatic;
}

export function bgpRedistributionRoutingProfileIpv6UnicastToTerraform(struct?: BgpRedistributionRoutingProfileIpv6Unicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connected: bgpRedistributionRoutingProfileIpv6UnicastConnectedToTerraform(struct!.connected),
    ospfv3: bgpRedistributionRoutingProfileIpv6UnicastOspfv3ToTerraform(struct!.ospfv3),
    static: bgpRedistributionRoutingProfileIpv6UnicastStaticToTerraform(struct!.static),
  }
}


export function bgpRedistributionRoutingProfileIpv6UnicastToHclTerraform(struct?: BgpRedistributionRoutingProfileIpv6Unicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connected: {
      value: bgpRedistributionRoutingProfileIpv6UnicastConnectedToHclTerraform(struct!.connected),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRedistributionRoutingProfileIpv6UnicastConnected",
    },
    ospfv3: {
      value: bgpRedistributionRoutingProfileIpv6UnicastOspfv3ToHclTerraform(struct!.ospfv3),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRedistributionRoutingProfileIpv6UnicastOspfv3",
    },
    static: {
      value: bgpRedistributionRoutingProfileIpv6UnicastStaticToHclTerraform(struct!.static),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRedistributionRoutingProfileIpv6UnicastStatic",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRedistributionRoutingProfileIpv6UnicastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRedistributionRoutingProfileIpv6Unicast | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connected?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connected = this._connected?.internalValue;
    }
    if (this._ospfv3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfv3 = this._ospfv3?.internalValue;
    }
    if (this._static?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.static = this._static?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRedistributionRoutingProfileIpv6Unicast | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connected.internalValue = undefined;
      this._ospfv3.internalValue = undefined;
      this._static.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connected.internalValue = value.connected;
      this._ospfv3.internalValue = value.ospfv3;
      this._static.internalValue = value.static;
    }
  }

  // connected - computed: false, optional: true, required: false
  private _connected = new BgpRedistributionRoutingProfileIpv6UnicastConnectedOutputReference(this, "connected");
  public get connected() {
    return this._connected;
  }
  public putConnected(value: BgpRedistributionRoutingProfileIpv6UnicastConnected) {
    this._connected.internalValue = value;
  }
  public resetConnected() {
    this._connected.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectedInput() {
    return this._connected.internalValue;
  }

  // ospfv3 - computed: false, optional: true, required: false
  private _ospfv3 = new BgpRedistributionRoutingProfileIpv6UnicastOspfv3OutputReference(this, "ospfv3");
  public get ospfv3() {
    return this._ospfv3;
  }
  public putOspfv3(value: BgpRedistributionRoutingProfileIpv6UnicastOspfv3) {
    this._ospfv3.internalValue = value;
  }
  public resetOspfv3() {
    this._ospfv3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfv3Input() {
    return this._ospfv3.internalValue;
  }

  // static - computed: false, optional: true, required: false
  private _static = new BgpRedistributionRoutingProfileIpv6UnicastStaticOutputReference(this, "static");
  public get static() {
    return this._static;
  }
  public putStatic(value: BgpRedistributionRoutingProfileIpv6UnicastStatic) {
    this._static.internalValue = value;
  }
  public resetStatic() {
    this._static.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticInput() {
    return this._static.internalValue;
  }
}
export interface BgpRedistributionRoutingProfileIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile#unicast BgpRedistributionRoutingProfile#unicast}
  */
  readonly unicast?: BgpRedistributionRoutingProfileIpv6Unicast;
}

export function bgpRedistributionRoutingProfileIpv6ToTerraform(struct?: BgpRedistributionRoutingProfileIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unicast: bgpRedistributionRoutingProfileIpv6UnicastToTerraform(struct!.unicast),
  }
}


export function bgpRedistributionRoutingProfileIpv6ToHclTerraform(struct?: BgpRedistributionRoutingProfileIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unicast: {
      value: bgpRedistributionRoutingProfileIpv6UnicastToHclTerraform(struct!.unicast),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRedistributionRoutingProfileIpv6Unicast",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRedistributionRoutingProfileIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRedistributionRoutingProfileIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unicast?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unicast = this._unicast?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRedistributionRoutingProfileIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unicast.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unicast.internalValue = value.unicast;
    }
  }

  // unicast - computed: false, optional: true, required: false
  private _unicast = new BgpRedistributionRoutingProfileIpv6UnicastOutputReference(this, "unicast");
  public get unicast() {
    return this._unicast;
  }
  public putUnicast(value: BgpRedistributionRoutingProfileIpv6Unicast) {
    this._unicast.internalValue = value;
  }
  public resetUnicast() {
    this._unicast.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unicastInput() {
    return this._unicast.internalValue;
  }
}
export interface BgpRedistributionRoutingProfileLocationNgfw {
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile#ngfw_device BgpRedistributionRoutingProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function bgpRedistributionRoutingProfileLocationNgfwToTerraform(struct?: BgpRedistributionRoutingProfileLocationNgfw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function bgpRedistributionRoutingProfileLocationNgfwToHclTerraform(struct?: BgpRedistributionRoutingProfileLocationNgfw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ngfw_device: {
      value: cdktf.stringToHclTerraform(struct!.ngfwDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRedistributionRoutingProfileLocationNgfwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRedistributionRoutingProfileLocationNgfw | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRedistributionRoutingProfileLocationNgfw | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ngfwDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ngfwDevice = value.ngfwDevice;
    }
  }

  // ngfw_device - computed: true, optional: true, required: false
  private _ngfwDevice?: string; 
  public get ngfwDevice() {
    return this.getStringAttribute('ngfw_device');
  }
  public set ngfwDevice(value: string) {
    this._ngfwDevice = value;
  }
  public resetNgfwDevice() {
    this._ngfwDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwDeviceInput() {
    return this._ngfwDevice;
  }
}
export interface BgpRedistributionRoutingProfileLocationTemplate {
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile#name BgpRedistributionRoutingProfile#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile#ngfw_device BgpRedistributionRoutingProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile#panorama_device BgpRedistributionRoutingProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function bgpRedistributionRoutingProfileLocationTemplateToTerraform(struct?: BgpRedistributionRoutingProfileLocationTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function bgpRedistributionRoutingProfileLocationTemplateToHclTerraform(struct?: BgpRedistributionRoutingProfileLocationTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ngfw_device: {
      value: cdktf.stringToHclTerraform(struct!.ngfwDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    panorama_device: {
      value: cdktf.stringToHclTerraform(struct!.panoramaDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRedistributionRoutingProfileLocationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRedistributionRoutingProfileLocationTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRedistributionRoutingProfileLocationTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._ngfwDevice = undefined;
      this._panoramaDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._ngfwDevice = value.ngfwDevice;
      this._panoramaDevice = value.panoramaDevice;
    }
  }

  // name - computed: true, optional: true, required: false
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

  // ngfw_device - computed: true, optional: true, required: false
  private _ngfwDevice?: string; 
  public get ngfwDevice() {
    return this.getStringAttribute('ngfw_device');
  }
  public set ngfwDevice(value: string) {
    this._ngfwDevice = value;
  }
  public resetNgfwDevice() {
    this._ngfwDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwDeviceInput() {
    return this._ngfwDevice;
  }

  // panorama_device - computed: true, optional: true, required: false
  private _panoramaDevice?: string; 
  public get panoramaDevice() {
    return this.getStringAttribute('panorama_device');
  }
  public set panoramaDevice(value: string) {
    this._panoramaDevice = value;
  }
  public resetPanoramaDevice() {
    this._panoramaDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaDeviceInput() {
    return this._panoramaDevice;
  }
}
export interface BgpRedistributionRoutingProfileLocationTemplateStack {
  /**
  * Specific Panorama template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile#name BgpRedistributionRoutingProfile#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile#ngfw_device BgpRedistributionRoutingProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile#panorama_device BgpRedistributionRoutingProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function bgpRedistributionRoutingProfileLocationTemplateStackToTerraform(struct?: BgpRedistributionRoutingProfileLocationTemplateStack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function bgpRedistributionRoutingProfileLocationTemplateStackToHclTerraform(struct?: BgpRedistributionRoutingProfileLocationTemplateStack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ngfw_device: {
      value: cdktf.stringToHclTerraform(struct!.ngfwDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    panorama_device: {
      value: cdktf.stringToHclTerraform(struct!.panoramaDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRedistributionRoutingProfileLocationTemplateStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRedistributionRoutingProfileLocationTemplateStack | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRedistributionRoutingProfileLocationTemplateStack | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._ngfwDevice = undefined;
      this._panoramaDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._ngfwDevice = value.ngfwDevice;
      this._panoramaDevice = value.panoramaDevice;
    }
  }

  // name - computed: true, optional: true, required: false
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

  // ngfw_device - computed: true, optional: true, required: false
  private _ngfwDevice?: string; 
  public get ngfwDevice() {
    return this.getStringAttribute('ngfw_device');
  }
  public set ngfwDevice(value: string) {
    this._ngfwDevice = value;
  }
  public resetNgfwDevice() {
    this._ngfwDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwDeviceInput() {
    return this._ngfwDevice;
  }

  // panorama_device - computed: true, optional: true, required: false
  private _panoramaDevice?: string; 
  public get panoramaDevice() {
    return this.getStringAttribute('panorama_device');
  }
  public set panoramaDevice(value: string) {
    this._panoramaDevice = value;
  }
  public resetPanoramaDevice() {
    this._panoramaDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaDeviceInput() {
    return this._panoramaDevice;
  }
}
export interface BgpRedistributionRoutingProfileLocation {
  /**
  * Located in a specific NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile#ngfw BgpRedistributionRoutingProfile#ngfw}
  */
  readonly ngfw?: BgpRedistributionRoutingProfileLocationNgfw;
  /**
  * Located in a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile#template BgpRedistributionRoutingProfile#template}
  */
  readonly template?: BgpRedistributionRoutingProfileLocationTemplate;
  /**
  * Located in a specific template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile#template_stack BgpRedistributionRoutingProfile#template_stack}
  */
  readonly templateStack?: BgpRedistributionRoutingProfileLocationTemplateStack;
}

export function bgpRedistributionRoutingProfileLocationToTerraform(struct?: BgpRedistributionRoutingProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw: bgpRedistributionRoutingProfileLocationNgfwToTerraform(struct!.ngfw),
    template: bgpRedistributionRoutingProfileLocationTemplateToTerraform(struct!.template),
    template_stack: bgpRedistributionRoutingProfileLocationTemplateStackToTerraform(struct!.templateStack),
  }
}


export function bgpRedistributionRoutingProfileLocationToHclTerraform(struct?: BgpRedistributionRoutingProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ngfw: {
      value: bgpRedistributionRoutingProfileLocationNgfwToHclTerraform(struct!.ngfw),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRedistributionRoutingProfileLocationNgfw",
    },
    template: {
      value: bgpRedistributionRoutingProfileLocationTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRedistributionRoutingProfileLocationTemplate",
    },
    template_stack: {
      value: bgpRedistributionRoutingProfileLocationTemplateStackToHclTerraform(struct!.templateStack),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRedistributionRoutingProfileLocationTemplateStack",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRedistributionRoutingProfileLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRedistributionRoutingProfileLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ngfw?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfw = this._ngfw?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    if (this._templateStack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateStack = this._templateStack?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRedistributionRoutingProfileLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ngfw.internalValue = undefined;
      this._template.internalValue = undefined;
      this._templateStack.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ngfw.internalValue = value.ngfw;
      this._template.internalValue = value.template;
      this._templateStack.internalValue = value.templateStack;
    }
  }

  // ngfw - computed: false, optional: true, required: false
  private _ngfw = new BgpRedistributionRoutingProfileLocationNgfwOutputReference(this, "ngfw");
  public get ngfw() {
    return this._ngfw;
  }
  public putNgfw(value: BgpRedistributionRoutingProfileLocationNgfw) {
    this._ngfw.internalValue = value;
  }
  public resetNgfw() {
    this._ngfw.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwInput() {
    return this._ngfw.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new BgpRedistributionRoutingProfileLocationTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: BgpRedistributionRoutingProfileLocationTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // template_stack - computed: false, optional: true, required: false
  private _templateStack = new BgpRedistributionRoutingProfileLocationTemplateStackOutputReference(this, "template_stack");
  public get templateStack() {
    return this._templateStack;
  }
  public putTemplateStack(value: BgpRedistributionRoutingProfileLocationTemplateStack) {
    this._templateStack.internalValue = value;
  }
  public resetTemplateStack() {
    this._templateStack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateStackInput() {
    return this._templateStack.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile panos_bgp_redistribution_routing_profile}
*/
export class BgpRedistributionRoutingProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_bgp_redistribution_routing_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BgpRedistributionRoutingProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BgpRedistributionRoutingProfile to import
  * @param importFromId The id of the existing BgpRedistributionRoutingProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BgpRedistributionRoutingProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_bgp_redistribution_routing_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_redistribution_routing_profile panos_bgp_redistribution_routing_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BgpRedistributionRoutingProfileConfig
  */
  public constructor(scope: Construct, id: string, config: BgpRedistributionRoutingProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_bgp_redistribution_routing_profile',
      terraformGeneratorMetadata: {
        providerName: 'panos',
        providerVersion: '2.0.7',
        providerVersionConstraint: '2.0.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ipv4.internalValue = config.ipv4;
    this._ipv6.internalValue = config.ipv6;
    this._location.internalValue = config.location;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new BgpRedistributionRoutingProfileIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: BgpRedistributionRoutingProfileIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new BgpRedistributionRoutingProfileIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: BgpRedistributionRoutingProfileIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }

  // location - computed: false, optional: false, required: true
  private _location = new BgpRedistributionRoutingProfileLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: BgpRedistributionRoutingProfileLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ipv4: bgpRedistributionRoutingProfileIpv4ToTerraform(this._ipv4.internalValue),
      ipv6: bgpRedistributionRoutingProfileIpv6ToTerraform(this._ipv6.internalValue),
      location: bgpRedistributionRoutingProfileLocationToTerraform(this._location.internalValue),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ipv4: {
        value: bgpRedistributionRoutingProfileIpv4ToHclTerraform(this._ipv4.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BgpRedistributionRoutingProfileIpv4",
      },
      ipv6: {
        value: bgpRedistributionRoutingProfileIpv6ToHclTerraform(this._ipv6.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BgpRedistributionRoutingProfileIpv6",
      },
      location: {
        value: bgpRedistributionRoutingProfileLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BgpRedistributionRoutingProfileLocation",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
