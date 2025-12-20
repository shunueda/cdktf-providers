// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/bgp_route_map_redistribution
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmBgpRouteMapRedistributionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/bgp_route_map_redistribution#device DataScmBgpRouteMapRedistribution#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/bgp_route_map_redistribution#folder DataScmBgpRouteMapRedistribution#folder}
  */
  readonly folder?: string;
  /**
  * BGP Route Map Redistributions UUID of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/bgp_route_map_redistribution#id DataScmBgpRouteMapRedistribution#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * BGP Route Map Redistributions Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/bgp_route_map_redistribution#name DataScmBgpRouteMapRedistribution#name}
  */
  readonly name?: string;
  /**
  * The snippet in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/bgp_route_map_redistribution#snippet DataScmBgpRouteMapRedistribution#snippet}
  */
  readonly snippet?: string;
}
export interface DataScmBgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4Address {
}

export function dataScmBgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4AddressToTerraform(struct?: DataScmBgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4AddressToHclTerraform(struct?: DataScmBgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4AddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4Address | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4Address | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_list - computed: true, optional: false, required: false
  public get accessList() {
    return this.getStringAttribute('access_list');
  }

  // prefix_list - computed: true, optional: false, required: false
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
}
export interface DataScmBgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4NextHop {
}

export function dataScmBgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4NextHopToTerraform(struct?: DataScmBgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4NextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4NextHopToHclTerraform(struct?: DataScmBgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4NextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4NextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4NextHop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4NextHop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_list - computed: true, optional: false, required: false
  public get accessList() {
    return this.getStringAttribute('access_list');
  }

  // prefix_list - computed: true, optional: false, required: false
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
}
export interface DataScmBgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4RouteSource {
}

export function dataScmBgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4RouteSourceToTerraform(struct?: DataScmBgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4RouteSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4RouteSourceToHclTerraform(struct?: DataScmBgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4RouteSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4RouteSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4RouteSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4RouteSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_list - computed: true, optional: false, required: false
  public get accessList() {
    return this.getStringAttribute('access_list');
  }

  // prefix_list - computed: true, optional: false, required: false
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
}
export interface DataScmBgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4 {
}

export function dataScmBgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4ToTerraform(struct?: DataScmBgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4ToHclTerraform(struct?: DataScmBgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  private _address = new DataScmBgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4AddressOutputReference(this, "address");
  public get address() {
    return this._address;
  }

  // next_hop - computed: true, optional: false, required: false
  private _nextHop = new DataScmBgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4NextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }

  // route_source - computed: true, optional: false, required: false
  private _routeSource = new DataScmBgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4RouteSourceOutputReference(this, "route_source");
  public get routeSource() {
    return this._routeSource;
  }
}
export interface DataScmBgpRouteMapRedistributionBgpOspfRouteMapMatch {
}

export function dataScmBgpRouteMapRedistributionBgpOspfRouteMapMatchToTerraform(struct?: DataScmBgpRouteMapRedistributionBgpOspfRouteMapMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionBgpOspfRouteMapMatchToHclTerraform(struct?: DataScmBgpRouteMapRedistributionBgpOspfRouteMapMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionBgpOspfRouteMapMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionBgpOspfRouteMapMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionBgpOspfRouteMapMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // as_path_access_list - computed: true, optional: false, required: false
  public get asPathAccessList() {
    return this.getStringAttribute('as_path_access_list');
  }

  // extended_community - computed: true, optional: false, required: false
  public get extendedCommunity() {
    return this.getStringAttribute('extended_community');
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataScmBgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }

  // large_community - computed: true, optional: false, required: false
  public get largeCommunity() {
    return this.getStringAttribute('large_community');
  }

  // local_preference - computed: true, optional: false, required: false
  public get localPreference() {
    return this.getNumberAttribute('local_preference');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getNumberAttribute('metric');
  }

  // origin - computed: true, optional: false, required: false
  public get origin() {
    return this.getStringAttribute('origin');
  }

  // peer - computed: true, optional: false, required: false
  public get peer() {
    return this.getStringAttribute('peer');
  }

  // regular_community - computed: true, optional: false, required: false
  public get regularCommunity() {
    return this.getStringAttribute('regular_community');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getNumberAttribute('tag');
  }
}
export interface DataScmBgpRouteMapRedistributionBgpOspfRouteMapSetMetric {
}

export function dataScmBgpRouteMapRedistributionBgpOspfRouteMapSetMetricToTerraform(struct?: DataScmBgpRouteMapRedistributionBgpOspfRouteMapSetMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionBgpOspfRouteMapSetMetricToHclTerraform(struct?: DataScmBgpRouteMapRedistributionBgpOspfRouteMapSetMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionBgpOspfRouteMapSetMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionBgpOspfRouteMapSetMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionBgpOspfRouteMapSetMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataScmBgpRouteMapRedistributionBgpOspfRouteMapSet {
}

export function dataScmBgpRouteMapRedistributionBgpOspfRouteMapSetToTerraform(struct?: DataScmBgpRouteMapRedistributionBgpOspfRouteMapSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionBgpOspfRouteMapSetToHclTerraform(struct?: DataScmBgpRouteMapRedistributionBgpOspfRouteMapSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionBgpOspfRouteMapSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionBgpOspfRouteMapSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionBgpOspfRouteMapSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metric - computed: true, optional: false, required: false
  private _metric = new DataScmBgpRouteMapRedistributionBgpOspfRouteMapSetMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }

  // metric_type - computed: true, optional: false, required: false
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getNumberAttribute('tag');
  }
}
export interface DataScmBgpRouteMapRedistributionBgpOspfRouteMap {
}

export function dataScmBgpRouteMapRedistributionBgpOspfRouteMapToTerraform(struct?: DataScmBgpRouteMapRedistributionBgpOspfRouteMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionBgpOspfRouteMapToHclTerraform(struct?: DataScmBgpRouteMapRedistributionBgpOspfRouteMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionBgpOspfRouteMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionBgpOspfRouteMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionBgpOspfRouteMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // match - computed: true, optional: false, required: false
  private _match = new DataScmBgpRouteMapRedistributionBgpOspfRouteMapMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getNumberAttribute('name');
  }

  // set - computed: true, optional: false, required: false
  private _set = new DataScmBgpRouteMapRedistributionBgpOspfRouteMapSetOutputReference(this, "set");
  public get set() {
    return this._set;
  }
}

export class DataScmBgpRouteMapRedistributionBgpOspfRouteMapList extends cdktf.ComplexList {

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
  public get(index: number): DataScmBgpRouteMapRedistributionBgpOspfRouteMapOutputReference {
    return new DataScmBgpRouteMapRedistributionBgpOspfRouteMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmBgpRouteMapRedistributionBgpOspf {
}

export function dataScmBgpRouteMapRedistributionBgpOspfToTerraform(struct?: DataScmBgpRouteMapRedistributionBgpOspf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionBgpOspfToHclTerraform(struct?: DataScmBgpRouteMapRedistributionBgpOspf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionBgpOspfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionBgpOspf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionBgpOspf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // route_map - computed: true, optional: false, required: false
  private _routeMap = new DataScmBgpRouteMapRedistributionBgpOspfRouteMapList(this, "route_map", false);
  public get routeMap() {
    return this._routeMap;
  }
}
export interface DataScmBgpRouteMapRedistributionBgpRibRouteMapMatchIpv4Address {
}

export function dataScmBgpRouteMapRedistributionBgpRibRouteMapMatchIpv4AddressToTerraform(struct?: DataScmBgpRouteMapRedistributionBgpRibRouteMapMatchIpv4Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionBgpRibRouteMapMatchIpv4AddressToHclTerraform(struct?: DataScmBgpRouteMapRedistributionBgpRibRouteMapMatchIpv4Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionBgpRibRouteMapMatchIpv4AddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionBgpRibRouteMapMatchIpv4Address | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionBgpRibRouteMapMatchIpv4Address | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_list - computed: true, optional: false, required: false
  public get accessList() {
    return this.getStringAttribute('access_list');
  }

  // prefix_list - computed: true, optional: false, required: false
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
}
export interface DataScmBgpRouteMapRedistributionBgpRibRouteMapMatchIpv4NextHop {
}

export function dataScmBgpRouteMapRedistributionBgpRibRouteMapMatchIpv4NextHopToTerraform(struct?: DataScmBgpRouteMapRedistributionBgpRibRouteMapMatchIpv4NextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionBgpRibRouteMapMatchIpv4NextHopToHclTerraform(struct?: DataScmBgpRouteMapRedistributionBgpRibRouteMapMatchIpv4NextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionBgpRibRouteMapMatchIpv4NextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionBgpRibRouteMapMatchIpv4NextHop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionBgpRibRouteMapMatchIpv4NextHop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_list - computed: true, optional: false, required: false
  public get accessList() {
    return this.getStringAttribute('access_list');
  }

  // prefix_list - computed: true, optional: false, required: false
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
}
export interface DataScmBgpRouteMapRedistributionBgpRibRouteMapMatchIpv4RouteSource {
}

export function dataScmBgpRouteMapRedistributionBgpRibRouteMapMatchIpv4RouteSourceToTerraform(struct?: DataScmBgpRouteMapRedistributionBgpRibRouteMapMatchIpv4RouteSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionBgpRibRouteMapMatchIpv4RouteSourceToHclTerraform(struct?: DataScmBgpRouteMapRedistributionBgpRibRouteMapMatchIpv4RouteSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionBgpRibRouteMapMatchIpv4RouteSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionBgpRibRouteMapMatchIpv4RouteSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionBgpRibRouteMapMatchIpv4RouteSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_list - computed: true, optional: false, required: false
  public get accessList() {
    return this.getStringAttribute('access_list');
  }

  // prefix_list - computed: true, optional: false, required: false
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
}
export interface DataScmBgpRouteMapRedistributionBgpRibRouteMapMatchIpv4 {
}

export function dataScmBgpRouteMapRedistributionBgpRibRouteMapMatchIpv4ToTerraform(struct?: DataScmBgpRouteMapRedistributionBgpRibRouteMapMatchIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionBgpRibRouteMapMatchIpv4ToHclTerraform(struct?: DataScmBgpRouteMapRedistributionBgpRibRouteMapMatchIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionBgpRibRouteMapMatchIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionBgpRibRouteMapMatchIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionBgpRibRouteMapMatchIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  private _address = new DataScmBgpRouteMapRedistributionBgpRibRouteMapMatchIpv4AddressOutputReference(this, "address");
  public get address() {
    return this._address;
  }

  // next_hop - computed: true, optional: false, required: false
  private _nextHop = new DataScmBgpRouteMapRedistributionBgpRibRouteMapMatchIpv4NextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }

  // route_source - computed: true, optional: false, required: false
  private _routeSource = new DataScmBgpRouteMapRedistributionBgpRibRouteMapMatchIpv4RouteSourceOutputReference(this, "route_source");
  public get routeSource() {
    return this._routeSource;
  }
}
export interface DataScmBgpRouteMapRedistributionBgpRibRouteMapMatch {
}

export function dataScmBgpRouteMapRedistributionBgpRibRouteMapMatchToTerraform(struct?: DataScmBgpRouteMapRedistributionBgpRibRouteMapMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionBgpRibRouteMapMatchToHclTerraform(struct?: DataScmBgpRouteMapRedistributionBgpRibRouteMapMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionBgpRibRouteMapMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionBgpRibRouteMapMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionBgpRibRouteMapMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // as_path_access_list - computed: true, optional: false, required: false
  public get asPathAccessList() {
    return this.getStringAttribute('as_path_access_list');
  }

  // extended_community - computed: true, optional: false, required: false
  public get extendedCommunity() {
    return this.getStringAttribute('extended_community');
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataScmBgpRouteMapRedistributionBgpRibRouteMapMatchIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }

  // large_community - computed: true, optional: false, required: false
  public get largeCommunity() {
    return this.getStringAttribute('large_community');
  }

  // local_preference - computed: true, optional: false, required: false
  public get localPreference() {
    return this.getNumberAttribute('local_preference');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getNumberAttribute('metric');
  }

  // origin - computed: true, optional: false, required: false
  public get origin() {
    return this.getStringAttribute('origin');
  }

  // peer - computed: true, optional: false, required: false
  public get peer() {
    return this.getStringAttribute('peer');
  }

  // regular_community - computed: true, optional: false, required: false
  public get regularCommunity() {
    return this.getStringAttribute('regular_community');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getNumberAttribute('tag');
  }
}
export interface DataScmBgpRouteMapRedistributionBgpRibRouteMapSet {
}

export function dataScmBgpRouteMapRedistributionBgpRibRouteMapSetToTerraform(struct?: DataScmBgpRouteMapRedistributionBgpRibRouteMapSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionBgpRibRouteMapSetToHclTerraform(struct?: DataScmBgpRouteMapRedistributionBgpRibRouteMapSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionBgpRibRouteMapSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionBgpRibRouteMapSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionBgpRibRouteMapSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source_address - computed: true, optional: false, required: false
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
}
export interface DataScmBgpRouteMapRedistributionBgpRibRouteMap {
}

export function dataScmBgpRouteMapRedistributionBgpRibRouteMapToTerraform(struct?: DataScmBgpRouteMapRedistributionBgpRibRouteMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionBgpRibRouteMapToHclTerraform(struct?: DataScmBgpRouteMapRedistributionBgpRibRouteMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionBgpRibRouteMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionBgpRibRouteMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionBgpRibRouteMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // match - computed: true, optional: false, required: false
  private _match = new DataScmBgpRouteMapRedistributionBgpRibRouteMapMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getNumberAttribute('name');
  }

  // set - computed: true, optional: false, required: false
  private _set = new DataScmBgpRouteMapRedistributionBgpRibRouteMapSetOutputReference(this, "set");
  public get set() {
    return this._set;
  }
}

export class DataScmBgpRouteMapRedistributionBgpRibRouteMapList extends cdktf.ComplexList {

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
  public get(index: number): DataScmBgpRouteMapRedistributionBgpRibRouteMapOutputReference {
    return new DataScmBgpRouteMapRedistributionBgpRibRouteMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmBgpRouteMapRedistributionBgpRib {
}

export function dataScmBgpRouteMapRedistributionBgpRibToTerraform(struct?: DataScmBgpRouteMapRedistributionBgpRib): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionBgpRibToHclTerraform(struct?: DataScmBgpRouteMapRedistributionBgpRib): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionBgpRibOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionBgpRib | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionBgpRib | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // route_map - computed: true, optional: false, required: false
  private _routeMap = new DataScmBgpRouteMapRedistributionBgpRibRouteMapList(this, "route_map", false);
  public get routeMap() {
    return this._routeMap;
  }
}
export interface DataScmBgpRouteMapRedistributionBgp {
}

export function dataScmBgpRouteMapRedistributionBgpToTerraform(struct?: DataScmBgpRouteMapRedistributionBgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionBgpToHclTerraform(struct?: DataScmBgpRouteMapRedistributionBgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionBgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionBgp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionBgp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ospf - computed: true, optional: false, required: false
  private _ospf = new DataScmBgpRouteMapRedistributionBgpOspfOutputReference(this, "ospf");
  public get ospf() {
    return this._ospf;
  }

  // rib - computed: true, optional: false, required: false
  private _rib = new DataScmBgpRouteMapRedistributionBgpRibOutputReference(this, "rib");
  public get rib() {
    return this._rib;
  }
}
export interface DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4Address {
}

export function dataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4AddressToTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4AddressToHclTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4AddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4Address | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4Address | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_list - computed: true, optional: false, required: false
  public get accessList() {
    return this.getStringAttribute('access_list');
  }

  // prefix_list - computed: true, optional: false, required: false
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
}
export interface DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4NextHop {
}

export function dataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4NextHopToTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4NextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4NextHopToHclTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4NextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4NextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4NextHop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4NextHop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_list - computed: true, optional: false, required: false
  public get accessList() {
    return this.getStringAttribute('access_list');
  }

  // prefix_list - computed: true, optional: false, required: false
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
}
export interface DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4 {
}

export function dataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4ToTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4ToHclTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  private _address = new DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4AddressOutputReference(this, "address");
  public get address() {
    return this._address;
  }

  // next_hop - computed: true, optional: false, required: false
  private _nextHop = new DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4NextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }
}
export interface DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapMatch {
}

export function dataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchToTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchToHclTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getNumberAttribute('metric');
  }
}
export interface DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapSetAggregator {
}

export function dataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapSetAggregatorToTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapSetAggregator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapSetAggregatorToHclTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapSetAggregator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapSetAggregatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapSetAggregator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapSetAggregator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // as - computed: true, optional: false, required: false
  public get as() {
    return this.getNumberAttribute('as');
  }

  // router_id - computed: true, optional: false, required: false
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
}
export interface DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapSetIpv4 {
}

export function dataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapSetIpv4ToTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapSetIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapSetIpv4ToHclTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapSetIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapSetIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapSetIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapSetIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // next_hop - computed: true, optional: false, required: false
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }

  // source_address - computed: true, optional: false, required: false
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
}
export interface DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapSetMetric {
}

export function dataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapSetMetricToTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapSetMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapSetMetricToHclTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapSetMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapSetMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapSetMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapSetMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapSet {
}

export function dataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapSetToTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapSetToHclTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregator - computed: true, optional: false, required: false
  private _aggregator = new DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapSetAggregatorOutputReference(this, "aggregator");
  public get aggregator() {
    return this._aggregator;
  }

  // aspath_prepend - computed: true, optional: false, required: false
  public get aspathPrepend() {
    return this.getNumberListAttribute('aspath_prepend');
  }

  // atomic_aggregate - computed: true, optional: false, required: false
  public get atomicAggregate() {
    return this.getBooleanAttribute('atomic_aggregate');
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapSetIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }

  // large_community - computed: true, optional: false, required: false
  public get largeCommunity() {
    return this.getListAttribute('large_community');
  }

  // local_preference - computed: true, optional: false, required: false
  public get localPreference() {
    return this.getNumberAttribute('local_preference');
  }

  // metric - computed: true, optional: false, required: false
  private _metric = new DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapSetMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }

  // origin - computed: true, optional: false, required: false
  public get origin() {
    return this.getStringAttribute('origin');
  }

  // originator_id - computed: true, optional: false, required: false
  public get originatorId() {
    return this.getStringAttribute('originator_id');
  }

  // regular_community - computed: true, optional: false, required: false
  public get regularCommunity() {
    return this.getListAttribute('regular_community');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getNumberAttribute('tag');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}
export interface DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMap {
}

export function dataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapToTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapToHclTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // match - computed: true, optional: false, required: false
  private _match = new DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getNumberAttribute('name');
  }

  // set - computed: true, optional: false, required: false
  private _set = new DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapSetOutputReference(this, "set");
  public get set() {
    return this._set;
  }
}

export class DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapList extends cdktf.ComplexList {

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
  public get(index: number): DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapOutputReference {
    return new DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmBgpRouteMapRedistributionConnectedStaticBgp {
}

export function dataScmBgpRouteMapRedistributionConnectedStaticBgpToTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticBgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionConnectedStaticBgpToHclTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticBgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionConnectedStaticBgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionConnectedStaticBgp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionConnectedStaticBgp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // route_map - computed: true, optional: false, required: false
  private _routeMap = new DataScmBgpRouteMapRedistributionConnectedStaticBgpRouteMapList(this, "route_map", false);
  public get routeMap() {
    return this._routeMap;
  }
}
export interface DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4Address {
}

export function dataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4AddressToTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4AddressToHclTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4AddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4Address | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4Address | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_list - computed: true, optional: false, required: false
  public get accessList() {
    return this.getStringAttribute('access_list');
  }

  // prefix_list - computed: true, optional: false, required: false
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
}
export interface DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4NextHop {
}

export function dataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4NextHopToTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4NextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4NextHopToHclTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4NextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4NextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4NextHop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4NextHop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_list - computed: true, optional: false, required: false
  public get accessList() {
    return this.getStringAttribute('access_list');
  }

  // prefix_list - computed: true, optional: false, required: false
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
}
export interface DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4 {
}

export function dataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4ToTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4ToHclTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  private _address = new DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4AddressOutputReference(this, "address");
  public get address() {
    return this._address;
  }

  // next_hop - computed: true, optional: false, required: false
  private _nextHop = new DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4NextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }
}
export interface DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapMatch {
}

export function dataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchToTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchToHclTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getNumberAttribute('metric');
  }
}
export interface DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapSetMetric {
}

export function dataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapSetMetricToTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapSetMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapSetMetricToHclTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapSetMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapSetMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapSetMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapSetMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapSet {
}

export function dataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapSetToTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapSetToHclTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metric - computed: true, optional: false, required: false
  private _metric = new DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapSetMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }

  // metric_type - computed: true, optional: false, required: false
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getNumberAttribute('tag');
  }
}
export interface DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMap {
}

export function dataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapToTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapToHclTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // match - computed: true, optional: false, required: false
  private _match = new DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getNumberAttribute('name');
  }

  // set - computed: true, optional: false, required: false
  private _set = new DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapSetOutputReference(this, "set");
  public get set() {
    return this._set;
  }
}

export class DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapList extends cdktf.ComplexList {

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
  public get(index: number): DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapOutputReference {
    return new DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmBgpRouteMapRedistributionConnectedStaticOspf {
}

export function dataScmBgpRouteMapRedistributionConnectedStaticOspfToTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticOspf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionConnectedStaticOspfToHclTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticOspf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionConnectedStaticOspfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionConnectedStaticOspf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionConnectedStaticOspf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // route_map - computed: true, optional: false, required: false
  private _routeMap = new DataScmBgpRouteMapRedistributionConnectedStaticOspfRouteMapList(this, "route_map", false);
  public get routeMap() {
    return this._routeMap;
  }
}
export interface DataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4Address {
}

export function dataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4AddressToTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4AddressToHclTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4AddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4Address | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4Address | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_list - computed: true, optional: false, required: false
  public get accessList() {
    return this.getStringAttribute('access_list');
  }

  // prefix_list - computed: true, optional: false, required: false
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
}
export interface DataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4NextHop {
}

export function dataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4NextHopToTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4NextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4NextHopToHclTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4NextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4NextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4NextHop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4NextHop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_list - computed: true, optional: false, required: false
  public get accessList() {
    return this.getStringAttribute('access_list');
  }

  // prefix_list - computed: true, optional: false, required: false
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
}
export interface DataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4 {
}

export function dataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4ToTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4ToHclTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  private _address = new DataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4AddressOutputReference(this, "address");
  public get address() {
    return this._address;
  }

  // next_hop - computed: true, optional: false, required: false
  private _nextHop = new DataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4NextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }
}
export interface DataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapMatch {
}

export function dataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapMatchToTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapMatchToHclTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getNumberAttribute('metric');
  }
}
export interface DataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapSet {
}

export function dataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapSetToTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapSetToHclTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source_address - computed: true, optional: false, required: false
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
}
export interface DataScmBgpRouteMapRedistributionConnectedStaticRibRouteMap {
}

export function dataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapToTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticRibRouteMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapToHclTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticRibRouteMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionConnectedStaticRibRouteMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionConnectedStaticRibRouteMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // match - computed: true, optional: false, required: false
  private _match = new DataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getNumberAttribute('name');
  }

  // set - computed: true, optional: false, required: false
  private _set = new DataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapSetOutputReference(this, "set");
  public get set() {
    return this._set;
  }
}

export class DataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapList extends cdktf.ComplexList {

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
  public get(index: number): DataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapOutputReference {
    return new DataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmBgpRouteMapRedistributionConnectedStaticRib {
}

export function dataScmBgpRouteMapRedistributionConnectedStaticRibToTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticRib): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionConnectedStaticRibToHclTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStaticRib): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionConnectedStaticRibOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionConnectedStaticRib | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionConnectedStaticRib | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // route_map - computed: true, optional: false, required: false
  private _routeMap = new DataScmBgpRouteMapRedistributionConnectedStaticRibRouteMapList(this, "route_map", false);
  public get routeMap() {
    return this._routeMap;
  }
}
export interface DataScmBgpRouteMapRedistributionConnectedStatic {
}

export function dataScmBgpRouteMapRedistributionConnectedStaticToTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStatic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionConnectedStaticToHclTerraform(struct?: DataScmBgpRouteMapRedistributionConnectedStatic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionConnectedStaticOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionConnectedStatic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionConnectedStatic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bgp - computed: true, optional: false, required: false
  private _bgp = new DataScmBgpRouteMapRedistributionConnectedStaticBgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }

  // ospf - computed: true, optional: false, required: false
  private _ospf = new DataScmBgpRouteMapRedistributionConnectedStaticOspfOutputReference(this, "ospf");
  public get ospf() {
    return this._ospf;
  }

  // rib - computed: true, optional: false, required: false
  private _rib = new DataScmBgpRouteMapRedistributionConnectedStaticRibOutputReference(this, "rib");
  public get rib() {
    return this._rib;
  }
}
export interface DataScmBgpRouteMapRedistributionOspfBgpRouteMapMatchAddress {
}

export function dataScmBgpRouteMapRedistributionOspfBgpRouteMapMatchAddressToTerraform(struct?: DataScmBgpRouteMapRedistributionOspfBgpRouteMapMatchAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionOspfBgpRouteMapMatchAddressToHclTerraform(struct?: DataScmBgpRouteMapRedistributionOspfBgpRouteMapMatchAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionOspfBgpRouteMapMatchAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionOspfBgpRouteMapMatchAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionOspfBgpRouteMapMatchAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_list - computed: true, optional: false, required: false
  public get accessList() {
    return this.getStringAttribute('access_list');
  }

  // prefix_list - computed: true, optional: false, required: false
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
}
export interface DataScmBgpRouteMapRedistributionOspfBgpRouteMapMatchNextHop {
}

export function dataScmBgpRouteMapRedistributionOspfBgpRouteMapMatchNextHopToTerraform(struct?: DataScmBgpRouteMapRedistributionOspfBgpRouteMapMatchNextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionOspfBgpRouteMapMatchNextHopToHclTerraform(struct?: DataScmBgpRouteMapRedistributionOspfBgpRouteMapMatchNextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionOspfBgpRouteMapMatchNextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionOspfBgpRouteMapMatchNextHop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionOspfBgpRouteMapMatchNextHop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_list - computed: true, optional: false, required: false
  public get accessList() {
    return this.getStringAttribute('access_list');
  }

  // prefix_list - computed: true, optional: false, required: false
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
}
export interface DataScmBgpRouteMapRedistributionOspfBgpRouteMapMatch {
}

export function dataScmBgpRouteMapRedistributionOspfBgpRouteMapMatchToTerraform(struct?: DataScmBgpRouteMapRedistributionOspfBgpRouteMapMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionOspfBgpRouteMapMatchToHclTerraform(struct?: DataScmBgpRouteMapRedistributionOspfBgpRouteMapMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionOspfBgpRouteMapMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionOspfBgpRouteMapMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionOspfBgpRouteMapMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  private _address = new DataScmBgpRouteMapRedistributionOspfBgpRouteMapMatchAddressOutputReference(this, "address");
  public get address() {
    return this._address;
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getNumberAttribute('metric');
  }

  // next_hop - computed: true, optional: false, required: false
  private _nextHop = new DataScmBgpRouteMapRedistributionOspfBgpRouteMapMatchNextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getNumberAttribute('tag');
  }
}
export interface DataScmBgpRouteMapRedistributionOspfBgpRouteMapSetAggregator {
}

export function dataScmBgpRouteMapRedistributionOspfBgpRouteMapSetAggregatorToTerraform(struct?: DataScmBgpRouteMapRedistributionOspfBgpRouteMapSetAggregator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionOspfBgpRouteMapSetAggregatorToHclTerraform(struct?: DataScmBgpRouteMapRedistributionOspfBgpRouteMapSetAggregator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionOspfBgpRouteMapSetAggregatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionOspfBgpRouteMapSetAggregator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionOspfBgpRouteMapSetAggregator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // as - computed: true, optional: false, required: false
  public get as() {
    return this.getNumberAttribute('as');
  }

  // router_id - computed: true, optional: false, required: false
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
}
export interface DataScmBgpRouteMapRedistributionOspfBgpRouteMapSetIpv4 {
}

export function dataScmBgpRouteMapRedistributionOspfBgpRouteMapSetIpv4ToTerraform(struct?: DataScmBgpRouteMapRedistributionOspfBgpRouteMapSetIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionOspfBgpRouteMapSetIpv4ToHclTerraform(struct?: DataScmBgpRouteMapRedistributionOspfBgpRouteMapSetIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionOspfBgpRouteMapSetIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionOspfBgpRouteMapSetIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionOspfBgpRouteMapSetIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // next_hop - computed: true, optional: false, required: false
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }

  // source_address - computed: true, optional: false, required: false
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
}
export interface DataScmBgpRouteMapRedistributionOspfBgpRouteMapSetMetric {
}

export function dataScmBgpRouteMapRedistributionOspfBgpRouteMapSetMetricToTerraform(struct?: DataScmBgpRouteMapRedistributionOspfBgpRouteMapSetMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionOspfBgpRouteMapSetMetricToHclTerraform(struct?: DataScmBgpRouteMapRedistributionOspfBgpRouteMapSetMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionOspfBgpRouteMapSetMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionOspfBgpRouteMapSetMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionOspfBgpRouteMapSetMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataScmBgpRouteMapRedistributionOspfBgpRouteMapSet {
}

export function dataScmBgpRouteMapRedistributionOspfBgpRouteMapSetToTerraform(struct?: DataScmBgpRouteMapRedistributionOspfBgpRouteMapSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionOspfBgpRouteMapSetToHclTerraform(struct?: DataScmBgpRouteMapRedistributionOspfBgpRouteMapSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionOspfBgpRouteMapSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionOspfBgpRouteMapSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionOspfBgpRouteMapSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregator - computed: true, optional: false, required: false
  private _aggregator = new DataScmBgpRouteMapRedistributionOspfBgpRouteMapSetAggregatorOutputReference(this, "aggregator");
  public get aggregator() {
    return this._aggregator;
  }

  // aspath_prepend - computed: true, optional: false, required: false
  public get aspathPrepend() {
    return this.getNumberListAttribute('aspath_prepend');
  }

  // atomic_aggregate - computed: true, optional: false, required: false
  public get atomicAggregate() {
    return this.getBooleanAttribute('atomic_aggregate');
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataScmBgpRouteMapRedistributionOspfBgpRouteMapSetIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }

  // large_community - computed: true, optional: false, required: false
  public get largeCommunity() {
    return this.getListAttribute('large_community');
  }

  // local_preference - computed: true, optional: false, required: false
  public get localPreference() {
    return this.getNumberAttribute('local_preference');
  }

  // metric - computed: true, optional: false, required: false
  private _metric = new DataScmBgpRouteMapRedistributionOspfBgpRouteMapSetMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }

  // origin - computed: true, optional: false, required: false
  public get origin() {
    return this.getStringAttribute('origin');
  }

  // originator_id - computed: true, optional: false, required: false
  public get originatorId() {
    return this.getStringAttribute('originator_id');
  }

  // regular_community - computed: true, optional: false, required: false
  public get regularCommunity() {
    return this.getListAttribute('regular_community');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getNumberAttribute('tag');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}
export interface DataScmBgpRouteMapRedistributionOspfBgpRouteMap {
}

export function dataScmBgpRouteMapRedistributionOspfBgpRouteMapToTerraform(struct?: DataScmBgpRouteMapRedistributionOspfBgpRouteMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionOspfBgpRouteMapToHclTerraform(struct?: DataScmBgpRouteMapRedistributionOspfBgpRouteMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionOspfBgpRouteMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionOspfBgpRouteMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionOspfBgpRouteMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // match - computed: true, optional: false, required: false
  private _match = new DataScmBgpRouteMapRedistributionOspfBgpRouteMapMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getNumberAttribute('name');
  }

  // set - computed: true, optional: false, required: false
  private _set = new DataScmBgpRouteMapRedistributionOspfBgpRouteMapSetOutputReference(this, "set");
  public get set() {
    return this._set;
  }
}

export class DataScmBgpRouteMapRedistributionOspfBgpRouteMapList extends cdktf.ComplexList {

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
  public get(index: number): DataScmBgpRouteMapRedistributionOspfBgpRouteMapOutputReference {
    return new DataScmBgpRouteMapRedistributionOspfBgpRouteMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmBgpRouteMapRedistributionOspfBgp {
}

export function dataScmBgpRouteMapRedistributionOspfBgpToTerraform(struct?: DataScmBgpRouteMapRedistributionOspfBgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionOspfBgpToHclTerraform(struct?: DataScmBgpRouteMapRedistributionOspfBgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionOspfBgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionOspfBgp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionOspfBgp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // route_map - computed: true, optional: false, required: false
  private _routeMap = new DataScmBgpRouteMapRedistributionOspfBgpRouteMapList(this, "route_map", false);
  public get routeMap() {
    return this._routeMap;
  }
}
export interface DataScmBgpRouteMapRedistributionOspfRibRouteMapMatchAddress {
}

export function dataScmBgpRouteMapRedistributionOspfRibRouteMapMatchAddressToTerraform(struct?: DataScmBgpRouteMapRedistributionOspfRibRouteMapMatchAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionOspfRibRouteMapMatchAddressToHclTerraform(struct?: DataScmBgpRouteMapRedistributionOspfRibRouteMapMatchAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionOspfRibRouteMapMatchAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionOspfRibRouteMapMatchAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionOspfRibRouteMapMatchAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_list - computed: true, optional: false, required: false
  public get accessList() {
    return this.getStringAttribute('access_list');
  }

  // prefix_list - computed: true, optional: false, required: false
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
}
export interface DataScmBgpRouteMapRedistributionOspfRibRouteMapMatchNextHop {
}

export function dataScmBgpRouteMapRedistributionOspfRibRouteMapMatchNextHopToTerraform(struct?: DataScmBgpRouteMapRedistributionOspfRibRouteMapMatchNextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionOspfRibRouteMapMatchNextHopToHclTerraform(struct?: DataScmBgpRouteMapRedistributionOspfRibRouteMapMatchNextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionOspfRibRouteMapMatchNextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionOspfRibRouteMapMatchNextHop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionOspfRibRouteMapMatchNextHop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_list - computed: true, optional: false, required: false
  public get accessList() {
    return this.getStringAttribute('access_list');
  }

  // prefix_list - computed: true, optional: false, required: false
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
}
export interface DataScmBgpRouteMapRedistributionOspfRibRouteMapMatch {
}

export function dataScmBgpRouteMapRedistributionOspfRibRouteMapMatchToTerraform(struct?: DataScmBgpRouteMapRedistributionOspfRibRouteMapMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionOspfRibRouteMapMatchToHclTerraform(struct?: DataScmBgpRouteMapRedistributionOspfRibRouteMapMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionOspfRibRouteMapMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionOspfRibRouteMapMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionOspfRibRouteMapMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  private _address = new DataScmBgpRouteMapRedistributionOspfRibRouteMapMatchAddressOutputReference(this, "address");
  public get address() {
    return this._address;
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getNumberAttribute('metric');
  }

  // next_hop - computed: true, optional: false, required: false
  private _nextHop = new DataScmBgpRouteMapRedistributionOspfRibRouteMapMatchNextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getNumberAttribute('tag');
  }
}
export interface DataScmBgpRouteMapRedistributionOspfRibRouteMapSet {
}

export function dataScmBgpRouteMapRedistributionOspfRibRouteMapSetToTerraform(struct?: DataScmBgpRouteMapRedistributionOspfRibRouteMapSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionOspfRibRouteMapSetToHclTerraform(struct?: DataScmBgpRouteMapRedistributionOspfRibRouteMapSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionOspfRibRouteMapSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionOspfRibRouteMapSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionOspfRibRouteMapSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source_address - computed: true, optional: false, required: false
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
}
export interface DataScmBgpRouteMapRedistributionOspfRibRouteMap {
}

export function dataScmBgpRouteMapRedistributionOspfRibRouteMapToTerraform(struct?: DataScmBgpRouteMapRedistributionOspfRibRouteMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionOspfRibRouteMapToHclTerraform(struct?: DataScmBgpRouteMapRedistributionOspfRibRouteMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionOspfRibRouteMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionOspfRibRouteMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionOspfRibRouteMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // match - computed: true, optional: false, required: false
  private _match = new DataScmBgpRouteMapRedistributionOspfRibRouteMapMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getNumberAttribute('name');
  }

  // set - computed: true, optional: false, required: false
  private _set = new DataScmBgpRouteMapRedistributionOspfRibRouteMapSetOutputReference(this, "set");
  public get set() {
    return this._set;
  }
}

export class DataScmBgpRouteMapRedistributionOspfRibRouteMapList extends cdktf.ComplexList {

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
  public get(index: number): DataScmBgpRouteMapRedistributionOspfRibRouteMapOutputReference {
    return new DataScmBgpRouteMapRedistributionOspfRibRouteMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmBgpRouteMapRedistributionOspfRib {
}

export function dataScmBgpRouteMapRedistributionOspfRibToTerraform(struct?: DataScmBgpRouteMapRedistributionOspfRib): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionOspfRibToHclTerraform(struct?: DataScmBgpRouteMapRedistributionOspfRib): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionOspfRibOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionOspfRib | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionOspfRib | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // route_map - computed: true, optional: false, required: false
  private _routeMap = new DataScmBgpRouteMapRedistributionOspfRibRouteMapList(this, "route_map", false);
  public get routeMap() {
    return this._routeMap;
  }
}
export interface DataScmBgpRouteMapRedistributionOspf {
}

export function dataScmBgpRouteMapRedistributionOspfToTerraform(struct?: DataScmBgpRouteMapRedistributionOspf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionOspfToHclTerraform(struct?: DataScmBgpRouteMapRedistributionOspf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionOspfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionOspf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionOspf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bgp - computed: true, optional: false, required: false
  private _bgp = new DataScmBgpRouteMapRedistributionOspfBgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }

  // rib - computed: true, optional: false, required: false
  private _rib = new DataScmBgpRouteMapRedistributionOspfRibOutputReference(this, "rib");
  public get rib() {
    return this._rib;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/bgp_route_map_redistribution scm_bgp_route_map_redistribution}
*/
export class DataScmBgpRouteMapRedistribution extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_bgp_route_map_redistribution";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmBgpRouteMapRedistribution resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmBgpRouteMapRedistribution to import
  * @param importFromId The id of the existing DataScmBgpRouteMapRedistribution that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/bgp_route_map_redistribution#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmBgpRouteMapRedistribution to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_bgp_route_map_redistribution", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/bgp_route_map_redistribution scm_bgp_route_map_redistribution} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmBgpRouteMapRedistributionConfig
  */
  public constructor(scope: Construct, id: string, config: DataScmBgpRouteMapRedistributionConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_bgp_route_map_redistribution',
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
    this._id = config.id;
    this._name = config.name;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bgp - computed: true, optional: false, required: false
  private _bgp = new DataScmBgpRouteMapRedistributionBgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }

  // connected_static - computed: true, optional: false, required: false
  private _connectedStatic = new DataScmBgpRouteMapRedistributionConnectedStaticOutputReference(this, "connected_static");
  public get connectedStatic() {
    return this._connectedStatic;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device - computed: true, optional: true, required: false
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

  // folder - computed: true, optional: true, required: false
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // ospf - computed: true, optional: false, required: false
  private _ospf = new DataScmBgpRouteMapRedistributionOspfOutputReference(this, "ospf");
  public get ospf() {
    return this._ospf;
  }

  // snippet - computed: true, optional: true, required: false
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
      id: cdktf.stringToTerraform(this._id),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
