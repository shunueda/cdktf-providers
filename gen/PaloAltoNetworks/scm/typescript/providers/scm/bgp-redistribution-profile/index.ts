// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_redistribution_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BgpRedistributionProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_redistribution_profile#device BgpRedistributionProfile#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_redistribution_profile#folder BgpRedistributionProfile#folder}
  */
  readonly folder?: string;
  /**
  * Ipv4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_redistribution_profile#ipv4 BgpRedistributionProfile#ipv4}
  */
  readonly ipv4: BgpRedistributionProfileIpv4;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_redistribution_profile#name BgpRedistributionProfile#name}
  */
  readonly name: string;
  /**
  * The snippet in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_redistribution_profile#snippet BgpRedistributionProfile#snippet}
  */
  readonly snippet?: string;
}
export interface BgpRedistributionProfileIpv4UnicastConnected {
  /**
  * Enable connected route redistribution?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_redistribution_profile#enable BgpRedistributionProfile#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Route metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_redistribution_profile#metric BgpRedistributionProfile#metric}
  */
  readonly metric?: number;
  /**
  * Route map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_redistribution_profile#route_map BgpRedistributionProfile#route_map}
  */
  readonly routeMap?: string;
}

export function bgpRedistributionProfileIpv4UnicastConnectedToTerraform(struct?: BgpRedistributionProfileIpv4UnicastConnected | cdktf.IResolvable): any {
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


export function bgpRedistributionProfileIpv4UnicastConnectedToHclTerraform(struct?: BgpRedistributionProfileIpv4UnicastConnected | cdktf.IResolvable): any {
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

export class BgpRedistributionProfileIpv4UnicastConnectedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRedistributionProfileIpv4UnicastConnected | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpRedistributionProfileIpv4UnicastConnected | cdktf.IResolvable | undefined) {
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
export interface BgpRedistributionProfileIpv4UnicastOspf {
  /**
  * Enable OSPF route redistribution?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_redistribution_profile#enable BgpRedistributionProfile#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Route metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_redistribution_profile#metric BgpRedistributionProfile#metric}
  */
  readonly metric?: number;
  /**
  * Route map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_redistribution_profile#route_map BgpRedistributionProfile#route_map}
  */
  readonly routeMap?: string;
}

export function bgpRedistributionProfileIpv4UnicastOspfToTerraform(struct?: BgpRedistributionProfileIpv4UnicastOspf | cdktf.IResolvable): any {
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


export function bgpRedistributionProfileIpv4UnicastOspfToHclTerraform(struct?: BgpRedistributionProfileIpv4UnicastOspf | cdktf.IResolvable): any {
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

export class BgpRedistributionProfileIpv4UnicastOspfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRedistributionProfileIpv4UnicastOspf | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpRedistributionProfileIpv4UnicastOspf | cdktf.IResolvable | undefined) {
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
export interface BgpRedistributionProfileIpv4UnicastStatic {
  /**
  * Enable static route redistribution?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_redistribution_profile#enable BgpRedistributionProfile#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Route metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_redistribution_profile#metric BgpRedistributionProfile#metric}
  */
  readonly metric?: number;
  /**
  * Route map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_redistribution_profile#route_map BgpRedistributionProfile#route_map}
  */
  readonly routeMap?: string;
}

export function bgpRedistributionProfileIpv4UnicastStaticToTerraform(struct?: BgpRedistributionProfileIpv4UnicastStatic | cdktf.IResolvable): any {
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


export function bgpRedistributionProfileIpv4UnicastStaticToHclTerraform(struct?: BgpRedistributionProfileIpv4UnicastStatic | cdktf.IResolvable): any {
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

export class BgpRedistributionProfileIpv4UnicastStaticOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRedistributionProfileIpv4UnicastStatic | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpRedistributionProfileIpv4UnicastStatic | cdktf.IResolvable | undefined) {
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
export interface BgpRedistributionProfileIpv4Unicast {
  /**
  * Connected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_redistribution_profile#connected BgpRedistributionProfile#connected}
  */
  readonly connected?: BgpRedistributionProfileIpv4UnicastConnected;
  /**
  * Ospf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_redistribution_profile#ospf BgpRedistributionProfile#ospf}
  */
  readonly ospf?: BgpRedistributionProfileIpv4UnicastOspf;
  /**
  * Static
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_redistribution_profile#static BgpRedistributionProfile#static}
  */
  readonly static?: BgpRedistributionProfileIpv4UnicastStatic;
}

export function bgpRedistributionProfileIpv4UnicastToTerraform(struct?: BgpRedistributionProfileIpv4Unicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connected: bgpRedistributionProfileIpv4UnicastConnectedToTerraform(struct!.connected),
    ospf: bgpRedistributionProfileIpv4UnicastOspfToTerraform(struct!.ospf),
    static: bgpRedistributionProfileIpv4UnicastStaticToTerraform(struct!.static),
  }
}


export function bgpRedistributionProfileIpv4UnicastToHclTerraform(struct?: BgpRedistributionProfileIpv4Unicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connected: {
      value: bgpRedistributionProfileIpv4UnicastConnectedToHclTerraform(struct!.connected),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRedistributionProfileIpv4UnicastConnected",
    },
    ospf: {
      value: bgpRedistributionProfileIpv4UnicastOspfToHclTerraform(struct!.ospf),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRedistributionProfileIpv4UnicastOspf",
    },
    static: {
      value: bgpRedistributionProfileIpv4UnicastStaticToHclTerraform(struct!.static),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRedistributionProfileIpv4UnicastStatic",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRedistributionProfileIpv4UnicastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRedistributionProfileIpv4Unicast | cdktf.IResolvable | undefined {
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
    if (this._static?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.static = this._static?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRedistributionProfileIpv4Unicast | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connected.internalValue = undefined;
      this._ospf.internalValue = undefined;
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
      this._static.internalValue = value.static;
    }
  }

  // connected - computed: false, optional: true, required: false
  private _connected = new BgpRedistributionProfileIpv4UnicastConnectedOutputReference(this, "connected");
  public get connected() {
    return this._connected;
  }
  public putConnected(value: BgpRedistributionProfileIpv4UnicastConnected) {
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
  private _ospf = new BgpRedistributionProfileIpv4UnicastOspfOutputReference(this, "ospf");
  public get ospf() {
    return this._ospf;
  }
  public putOspf(value: BgpRedistributionProfileIpv4UnicastOspf) {
    this._ospf.internalValue = value;
  }
  public resetOspf() {
    this._ospf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfInput() {
    return this._ospf.internalValue;
  }

  // static - computed: false, optional: true, required: false
  private _static = new BgpRedistributionProfileIpv4UnicastStaticOutputReference(this, "static");
  public get static() {
    return this._static;
  }
  public putStatic(value: BgpRedistributionProfileIpv4UnicastStatic) {
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
export interface BgpRedistributionProfileIpv4 {
  /**
  * Unicast
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_redistribution_profile#unicast BgpRedistributionProfile#unicast}
  */
  readonly unicast?: BgpRedistributionProfileIpv4Unicast;
}

export function bgpRedistributionProfileIpv4ToTerraform(struct?: BgpRedistributionProfileIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unicast: bgpRedistributionProfileIpv4UnicastToTerraform(struct!.unicast),
  }
}


export function bgpRedistributionProfileIpv4ToHclTerraform(struct?: BgpRedistributionProfileIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unicast: {
      value: bgpRedistributionProfileIpv4UnicastToHclTerraform(struct!.unicast),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRedistributionProfileIpv4Unicast",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRedistributionProfileIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRedistributionProfileIpv4 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpRedistributionProfileIpv4 | cdktf.IResolvable | undefined) {
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
  private _unicast = new BgpRedistributionProfileIpv4UnicastOutputReference(this, "unicast");
  public get unicast() {
    return this._unicast;
  }
  public putUnicast(value: BgpRedistributionProfileIpv4Unicast) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_redistribution_profile scm_bgp_redistribution_profile}
*/
export class BgpRedistributionProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_bgp_redistribution_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BgpRedistributionProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BgpRedistributionProfile to import
  * @param importFromId The id of the existing BgpRedistributionProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_redistribution_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BgpRedistributionProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_bgp_redistribution_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_redistribution_profile scm_bgp_redistribution_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BgpRedistributionProfileConfig
  */
  public constructor(scope: Construct, id: string, config: BgpRedistributionProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_bgp_redistribution_profile',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.6',
        providerVersionConstraint: '1.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._folder = config.folder;
    this._ipv4.internalValue = config.ipv4;
    this._name = config.name;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv4 - computed: false, optional: false, required: true
  private _ipv4 = new BgpRedistributionProfileIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: BgpRedistributionProfileIpv4) {
    this._ipv4.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
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

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      ipv4: bgpRedistributionProfileIpv4ToTerraform(this._ipv4.internalValue),
      name: cdktf.stringToTerraform(this._name),
      snippet: cdktf.stringToTerraform(this._snippet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4: {
        value: bgpRedistributionProfileIpv4ToHclTerraform(this._ipv4.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BgpRedistributionProfileIpv4",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
