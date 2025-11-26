// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/bgp_route_map_redistribution_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmBgpRouteMapRedistributionListConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/bgp_route_map_redistribution_list#device DataScmBgpRouteMapRedistributionList#device}
  */
  readonly device?: string;
  /**
  * The folder of the item. Default: Shared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/bgp_route_map_redistribution_list#folder DataScmBgpRouteMapRedistributionList#folder}
  */
  readonly folder?: string;
  /**
  * The max number of items to return. Default: 200.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/bgp_route_map_redistribution_list#limit DataScmBgpRouteMapRedistributionList#limit}
  */
  readonly limit?: number;
  /**
  * The name of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/bgp_route_map_redistribution_list#name DataScmBgpRouteMapRedistributionList#name}
  */
  readonly name?: string;
  /**
  * The offset of the first item to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/bgp_route_map_redistribution_list#offset DataScmBgpRouteMapRedistributionList#offset}
  */
  readonly offset?: number;
  /**
  * The snippet of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/bgp_route_map_redistribution_list#snippet DataScmBgpRouteMapRedistributionList#snippet}
  */
  readonly snippet?: string;
}
export interface DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapMatchIpv4Address {
}

export function dataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapMatchIpv4AddressToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapMatchIpv4Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapMatchIpv4AddressToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapMatchIpv4Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapMatchIpv4AddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapMatchIpv4Address | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapMatchIpv4Address | undefined) {
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
export interface DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapMatchIpv4NextHop {
}

export function dataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapMatchIpv4NextHopToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapMatchIpv4NextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapMatchIpv4NextHopToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapMatchIpv4NextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapMatchIpv4NextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapMatchIpv4NextHop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapMatchIpv4NextHop | undefined) {
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
export interface DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapMatchIpv4RouteSource {
}

export function dataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapMatchIpv4RouteSourceToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapMatchIpv4RouteSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapMatchIpv4RouteSourceToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapMatchIpv4RouteSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapMatchIpv4RouteSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapMatchIpv4RouteSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapMatchIpv4RouteSource | undefined) {
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
export interface DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapMatchIpv4 {
}

export function dataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapMatchIpv4ToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapMatchIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapMatchIpv4ToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapMatchIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapMatchIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapMatchIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapMatchIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  private _address = new DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapMatchIpv4AddressOutputReference(this, "address");
  public get address() {
    return this._address;
  }

  // next_hop - computed: true, optional: false, required: false
  private _nextHop = new DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapMatchIpv4NextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }

  // route_source - computed: true, optional: false, required: false
  private _routeSource = new DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapMatchIpv4RouteSourceOutputReference(this, "route_source");
  public get routeSource() {
    return this._routeSource;
  }
}
export interface DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapMatch {
}

export function dataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapMatchToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapMatchToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapMatch | undefined) {
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
  private _ipv4 = new DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapMatchIpv4OutputReference(this, "ipv4");
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
export interface DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapSetMetric {
}

export function dataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapSetMetricToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapSetMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapSetMetricToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapSetMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapSetMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapSetMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapSetMetric | undefined) {
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
export interface DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapSet {
}

export function dataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapSetToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapSetToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metric - computed: true, optional: false, required: false
  private _metric = new DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapSetMetricOutputReference(this, "metric");
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
export interface DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMap {
}

export function dataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMap | undefined) {
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
  private _match = new DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getNumberAttribute('name');
  }

  // set - computed: true, optional: false, required: false
  private _set = new DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapSetOutputReference(this, "set");
  public get set() {
    return this._set;
  }
}

export class DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapList extends cdktf.ComplexList {

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
  public get(index: number): DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapOutputReference {
    return new DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmBgpRouteMapRedistributionListDataBgpOspf {
}

export function dataScmBgpRouteMapRedistributionListDataBgpOspfToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataBgpOspf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataBgpOspfToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataBgpOspf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataBgpOspfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataBgpOspf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataBgpOspf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // route_map - computed: true, optional: false, required: false
  private _routeMap = new DataScmBgpRouteMapRedistributionListDataBgpOspfRouteMapList(this, "route_map", false);
  public get routeMap() {
    return this._routeMap;
  }
}
export interface DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapMatchIpv4Address {
}

export function dataScmBgpRouteMapRedistributionListDataBgpRibRouteMapMatchIpv4AddressToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapMatchIpv4Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataBgpRibRouteMapMatchIpv4AddressToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapMatchIpv4Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapMatchIpv4AddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapMatchIpv4Address | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapMatchIpv4Address | undefined) {
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
export interface DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapMatchIpv4NextHop {
}

export function dataScmBgpRouteMapRedistributionListDataBgpRibRouteMapMatchIpv4NextHopToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapMatchIpv4NextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataBgpRibRouteMapMatchIpv4NextHopToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapMatchIpv4NextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapMatchIpv4NextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapMatchIpv4NextHop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapMatchIpv4NextHop | undefined) {
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
export interface DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapMatchIpv4RouteSource {
}

export function dataScmBgpRouteMapRedistributionListDataBgpRibRouteMapMatchIpv4RouteSourceToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapMatchIpv4RouteSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataBgpRibRouteMapMatchIpv4RouteSourceToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapMatchIpv4RouteSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapMatchIpv4RouteSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapMatchIpv4RouteSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapMatchIpv4RouteSource | undefined) {
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
export interface DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapMatchIpv4 {
}

export function dataScmBgpRouteMapRedistributionListDataBgpRibRouteMapMatchIpv4ToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapMatchIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataBgpRibRouteMapMatchIpv4ToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapMatchIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapMatchIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapMatchIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapMatchIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  private _address = new DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapMatchIpv4AddressOutputReference(this, "address");
  public get address() {
    return this._address;
  }

  // next_hop - computed: true, optional: false, required: false
  private _nextHop = new DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapMatchIpv4NextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }

  // route_source - computed: true, optional: false, required: false
  private _routeSource = new DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapMatchIpv4RouteSourceOutputReference(this, "route_source");
  public get routeSource() {
    return this._routeSource;
  }
}
export interface DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapMatch {
}

export function dataScmBgpRouteMapRedistributionListDataBgpRibRouteMapMatchToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataBgpRibRouteMapMatchToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapMatch | undefined) {
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
  private _ipv4 = new DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapMatchIpv4OutputReference(this, "ipv4");
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
export interface DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapSet {
}

export function dataScmBgpRouteMapRedistributionListDataBgpRibRouteMapSetToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataBgpRibRouteMapSetToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapSet | undefined) {
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
export interface DataScmBgpRouteMapRedistributionListDataBgpRibRouteMap {
}

export function dataScmBgpRouteMapRedistributionListDataBgpRibRouteMapToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataBgpRibRouteMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataBgpRibRouteMapToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataBgpRibRouteMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataBgpRibRouteMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataBgpRibRouteMap | undefined) {
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
  private _match = new DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getNumberAttribute('name');
  }

  // set - computed: true, optional: false, required: false
  private _set = new DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapSetOutputReference(this, "set");
  public get set() {
    return this._set;
  }
}

export class DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapList extends cdktf.ComplexList {

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
  public get(index: number): DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapOutputReference {
    return new DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmBgpRouteMapRedistributionListDataBgpRib {
}

export function dataScmBgpRouteMapRedistributionListDataBgpRibToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataBgpRib): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataBgpRibToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataBgpRib): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataBgpRibOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataBgpRib | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataBgpRib | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // route_map - computed: true, optional: false, required: false
  private _routeMap = new DataScmBgpRouteMapRedistributionListDataBgpRibRouteMapList(this, "route_map", false);
  public get routeMap() {
    return this._routeMap;
  }
}
export interface DataScmBgpRouteMapRedistributionListDataBgp {
}

export function dataScmBgpRouteMapRedistributionListDataBgpToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataBgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataBgpToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataBgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataBgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataBgp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataBgp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ospf - computed: true, optional: false, required: false
  private _ospf = new DataScmBgpRouteMapRedistributionListDataBgpOspfOutputReference(this, "ospf");
  public get ospf() {
    return this._ospf;
  }

  // rib - computed: true, optional: false, required: false
  private _rib = new DataScmBgpRouteMapRedistributionListDataBgpRibOutputReference(this, "rib");
  public get rib() {
    return this._rib;
  }
}
export interface DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapMatchIpv4Address {
}

export function dataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapMatchIpv4AddressToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapMatchIpv4Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapMatchIpv4AddressToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapMatchIpv4Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapMatchIpv4AddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapMatchIpv4Address | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapMatchIpv4Address | undefined) {
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
export interface DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapMatchIpv4NextHop {
}

export function dataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapMatchIpv4NextHopToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapMatchIpv4NextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapMatchIpv4NextHopToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapMatchIpv4NextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapMatchIpv4NextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapMatchIpv4NextHop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapMatchIpv4NextHop | undefined) {
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
export interface DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapMatchIpv4 {
}

export function dataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapMatchIpv4ToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapMatchIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapMatchIpv4ToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapMatchIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapMatchIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapMatchIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapMatchIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  private _address = new DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapMatchIpv4AddressOutputReference(this, "address");
  public get address() {
    return this._address;
  }

  // next_hop - computed: true, optional: false, required: false
  private _nextHop = new DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapMatchIpv4NextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }
}
export interface DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapMatch {
}

export function dataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapMatchToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapMatchToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapMatch | undefined) {
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
  private _ipv4 = new DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapMatchIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getNumberAttribute('metric');
  }
}
export interface DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapSetAggregator {
}

export function dataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapSetAggregatorToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapSetAggregator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapSetAggregatorToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapSetAggregator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapSetAggregatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapSetAggregator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapSetAggregator | undefined) {
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
export interface DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapSetIpv4 {
}

export function dataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapSetIpv4ToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapSetIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapSetIpv4ToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapSetIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapSetIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapSetIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapSetIpv4 | undefined) {
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
export interface DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapSetMetric {
}

export function dataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapSetMetricToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapSetMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapSetMetricToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapSetMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapSetMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapSetMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapSetMetric | undefined) {
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
export interface DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapSet {
}

export function dataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapSetToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapSetToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregator - computed: true, optional: false, required: false
  private _aggregator = new DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapSetAggregatorOutputReference(this, "aggregator");
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
  private _ipv4 = new DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapSetIpv4OutputReference(this, "ipv4");
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
  private _metric = new DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapSetMetricOutputReference(this, "metric");
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
export interface DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMap {
}

export function dataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMap | undefined) {
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
  private _match = new DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getNumberAttribute('name');
  }

  // set - computed: true, optional: false, required: false
  private _set = new DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapSetOutputReference(this, "set");
  public get set() {
    return this._set;
  }
}

export class DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapList extends cdktf.ComplexList {

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
  public get(index: number): DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapOutputReference {
    return new DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmBgpRouteMapRedistributionListDataConnectedStaticBgp {
}

export function dataScmBgpRouteMapRedistributionListDataConnectedStaticBgpToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticBgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataConnectedStaticBgpToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticBgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataConnectedStaticBgp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataConnectedStaticBgp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // route_map - computed: true, optional: false, required: false
  private _routeMap = new DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpRouteMapList(this, "route_map", false);
  public get routeMap() {
    return this._routeMap;
  }
}
export interface DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapMatchIpv4Address {
}

export function dataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapMatchIpv4AddressToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapMatchIpv4Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapMatchIpv4AddressToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapMatchIpv4Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapMatchIpv4AddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapMatchIpv4Address | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapMatchIpv4Address | undefined) {
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
export interface DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapMatchIpv4NextHop {
}

export function dataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapMatchIpv4NextHopToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapMatchIpv4NextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapMatchIpv4NextHopToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapMatchIpv4NextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapMatchIpv4NextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapMatchIpv4NextHop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapMatchIpv4NextHop | undefined) {
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
export interface DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapMatchIpv4 {
}

export function dataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapMatchIpv4ToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapMatchIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapMatchIpv4ToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapMatchIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapMatchIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapMatchIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapMatchIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  private _address = new DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapMatchIpv4AddressOutputReference(this, "address");
  public get address() {
    return this._address;
  }

  // next_hop - computed: true, optional: false, required: false
  private _nextHop = new DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapMatchIpv4NextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }
}
export interface DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapMatch {
}

export function dataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapMatchToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapMatchToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapMatch | undefined) {
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
  private _ipv4 = new DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapMatchIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getNumberAttribute('metric');
  }
}
export interface DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapSetMetric {
}

export function dataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapSetMetricToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapSetMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapSetMetricToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapSetMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapSetMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapSetMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapSetMetric | undefined) {
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
export interface DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapSet {
}

export function dataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapSetToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapSetToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metric - computed: true, optional: false, required: false
  private _metric = new DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapSetMetricOutputReference(this, "metric");
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
export interface DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMap {
}

export function dataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMap | undefined) {
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
  private _match = new DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getNumberAttribute('name');
  }

  // set - computed: true, optional: false, required: false
  private _set = new DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapSetOutputReference(this, "set");
  public get set() {
    return this._set;
  }
}

export class DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapList extends cdktf.ComplexList {

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
  public get(index: number): DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapOutputReference {
    return new DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmBgpRouteMapRedistributionListDataConnectedStaticOspf {
}

export function dataScmBgpRouteMapRedistributionListDataConnectedStaticOspfToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticOspf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataConnectedStaticOspfToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticOspf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataConnectedStaticOspf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataConnectedStaticOspf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // route_map - computed: true, optional: false, required: false
  private _routeMap = new DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfRouteMapList(this, "route_map", false);
  public get routeMap() {
    return this._routeMap;
  }
}
export interface DataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapMatchIpv4Address {
}

export function dataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapMatchIpv4AddressToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapMatchIpv4Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapMatchIpv4AddressToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapMatchIpv4Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapMatchIpv4AddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapMatchIpv4Address | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapMatchIpv4Address | undefined) {
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
export interface DataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapMatchIpv4NextHop {
}

export function dataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapMatchIpv4NextHopToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapMatchIpv4NextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapMatchIpv4NextHopToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapMatchIpv4NextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapMatchIpv4NextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapMatchIpv4NextHop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapMatchIpv4NextHop | undefined) {
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
export interface DataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapMatchIpv4 {
}

export function dataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapMatchIpv4ToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapMatchIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapMatchIpv4ToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapMatchIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapMatchIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapMatchIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapMatchIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  private _address = new DataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapMatchIpv4AddressOutputReference(this, "address");
  public get address() {
    return this._address;
  }

  // next_hop - computed: true, optional: false, required: false
  private _nextHop = new DataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapMatchIpv4NextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }
}
export interface DataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapMatch {
}

export function dataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapMatchToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapMatchToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapMatch | undefined) {
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
  private _ipv4 = new DataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapMatchIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getNumberAttribute('metric');
  }
}
export interface DataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapSet {
}

export function dataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapSetToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapSetToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapSet | undefined) {
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
export interface DataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMap {
}

export function dataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMap | undefined) {
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
  private _match = new DataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getNumberAttribute('name');
  }

  // set - computed: true, optional: false, required: false
  private _set = new DataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapSetOutputReference(this, "set");
  public get set() {
    return this._set;
  }
}

export class DataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapList extends cdktf.ComplexList {

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
  public get(index: number): DataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapOutputReference {
    return new DataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmBgpRouteMapRedistributionListDataConnectedStaticRib {
}

export function dataScmBgpRouteMapRedistributionListDataConnectedStaticRibToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticRib): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataConnectedStaticRibToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStaticRib): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataConnectedStaticRibOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataConnectedStaticRib | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataConnectedStaticRib | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // route_map - computed: true, optional: false, required: false
  private _routeMap = new DataScmBgpRouteMapRedistributionListDataConnectedStaticRibRouteMapList(this, "route_map", false);
  public get routeMap() {
    return this._routeMap;
  }
}
export interface DataScmBgpRouteMapRedistributionListDataConnectedStatic {
}

export function dataScmBgpRouteMapRedistributionListDataConnectedStaticToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStatic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataConnectedStaticToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataConnectedStatic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataConnectedStaticOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataConnectedStatic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataConnectedStatic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bgp - computed: true, optional: false, required: false
  private _bgp = new DataScmBgpRouteMapRedistributionListDataConnectedStaticBgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }

  // ospf - computed: true, optional: false, required: false
  private _ospf = new DataScmBgpRouteMapRedistributionListDataConnectedStaticOspfOutputReference(this, "ospf");
  public get ospf() {
    return this._ospf;
  }

  // rib - computed: true, optional: false, required: false
  private _rib = new DataScmBgpRouteMapRedistributionListDataConnectedStaticRibOutputReference(this, "rib");
  public get rib() {
    return this._rib;
  }
}
export interface DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapMatchAddress {
}

export function dataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapMatchAddressToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapMatchAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapMatchAddressToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapMatchAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapMatchAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapMatchAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapMatchAddress | undefined) {
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
export interface DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapMatchNextHop {
}

export function dataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapMatchNextHopToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapMatchNextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapMatchNextHopToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapMatchNextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapMatchNextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapMatchNextHop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapMatchNextHop | undefined) {
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
export interface DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapMatch {
}

export function dataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapMatchToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapMatchToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  private _address = new DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapMatchAddressOutputReference(this, "address");
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
  private _nextHop = new DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapMatchNextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getNumberAttribute('tag');
  }
}
export interface DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapSetAggregator {
}

export function dataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapSetAggregatorToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapSetAggregator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapSetAggregatorToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapSetAggregator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapSetAggregatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapSetAggregator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapSetAggregator | undefined) {
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
export interface DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapSetIpv4 {
}

export function dataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapSetIpv4ToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapSetIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapSetIpv4ToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapSetIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapSetIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapSetIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapSetIpv4 | undefined) {
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
export interface DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapSetMetric {
}

export function dataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapSetMetricToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapSetMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapSetMetricToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapSetMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapSetMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapSetMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapSetMetric | undefined) {
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
export interface DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapSet {
}

export function dataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapSetToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapSetToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregator - computed: true, optional: false, required: false
  private _aggregator = new DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapSetAggregatorOutputReference(this, "aggregator");
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
  private _ipv4 = new DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapSetIpv4OutputReference(this, "ipv4");
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
  private _metric = new DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapSetMetricOutputReference(this, "metric");
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
export interface DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMap {
}

export function dataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMap | undefined) {
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
  private _match = new DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getNumberAttribute('name');
  }

  // set - computed: true, optional: false, required: false
  private _set = new DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapSetOutputReference(this, "set");
  public get set() {
    return this._set;
  }
}

export class DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapList extends cdktf.ComplexList {

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
  public get(index: number): DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapOutputReference {
    return new DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmBgpRouteMapRedistributionListDataOspfBgp {
}

export function dataScmBgpRouteMapRedistributionListDataOspfBgpToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataOspfBgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataOspfBgpToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataOspfBgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataOspfBgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataOspfBgp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataOspfBgp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // route_map - computed: true, optional: false, required: false
  private _routeMap = new DataScmBgpRouteMapRedistributionListDataOspfBgpRouteMapList(this, "route_map", false);
  public get routeMap() {
    return this._routeMap;
  }
}
export interface DataScmBgpRouteMapRedistributionListDataOspfRibRouteMapMatchAddress {
}

export function dataScmBgpRouteMapRedistributionListDataOspfRibRouteMapMatchAddressToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataOspfRibRouteMapMatchAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataOspfRibRouteMapMatchAddressToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataOspfRibRouteMapMatchAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataOspfRibRouteMapMatchAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataOspfRibRouteMapMatchAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataOspfRibRouteMapMatchAddress | undefined) {
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
export interface DataScmBgpRouteMapRedistributionListDataOspfRibRouteMapMatchNextHop {
}

export function dataScmBgpRouteMapRedistributionListDataOspfRibRouteMapMatchNextHopToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataOspfRibRouteMapMatchNextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataOspfRibRouteMapMatchNextHopToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataOspfRibRouteMapMatchNextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataOspfRibRouteMapMatchNextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataOspfRibRouteMapMatchNextHop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataOspfRibRouteMapMatchNextHop | undefined) {
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
export interface DataScmBgpRouteMapRedistributionListDataOspfRibRouteMapMatch {
}

export function dataScmBgpRouteMapRedistributionListDataOspfRibRouteMapMatchToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataOspfRibRouteMapMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataOspfRibRouteMapMatchToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataOspfRibRouteMapMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataOspfRibRouteMapMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataOspfRibRouteMapMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataOspfRibRouteMapMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  private _address = new DataScmBgpRouteMapRedistributionListDataOspfRibRouteMapMatchAddressOutputReference(this, "address");
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
  private _nextHop = new DataScmBgpRouteMapRedistributionListDataOspfRibRouteMapMatchNextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getNumberAttribute('tag');
  }
}
export interface DataScmBgpRouteMapRedistributionListDataOspfRibRouteMapSet {
}

export function dataScmBgpRouteMapRedistributionListDataOspfRibRouteMapSetToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataOspfRibRouteMapSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataOspfRibRouteMapSetToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataOspfRibRouteMapSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataOspfRibRouteMapSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataOspfRibRouteMapSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataOspfRibRouteMapSet | undefined) {
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
export interface DataScmBgpRouteMapRedistributionListDataOspfRibRouteMap {
}

export function dataScmBgpRouteMapRedistributionListDataOspfRibRouteMapToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataOspfRibRouteMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataOspfRibRouteMapToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataOspfRibRouteMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataOspfRibRouteMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataOspfRibRouteMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataOspfRibRouteMap | undefined) {
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
  private _match = new DataScmBgpRouteMapRedistributionListDataOspfRibRouteMapMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getNumberAttribute('name');
  }

  // set - computed: true, optional: false, required: false
  private _set = new DataScmBgpRouteMapRedistributionListDataOspfRibRouteMapSetOutputReference(this, "set");
  public get set() {
    return this._set;
  }
}

export class DataScmBgpRouteMapRedistributionListDataOspfRibRouteMapList extends cdktf.ComplexList {

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
  public get(index: number): DataScmBgpRouteMapRedistributionListDataOspfRibRouteMapOutputReference {
    return new DataScmBgpRouteMapRedistributionListDataOspfRibRouteMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmBgpRouteMapRedistributionListDataOspfRib {
}

export function dataScmBgpRouteMapRedistributionListDataOspfRibToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataOspfRib): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataOspfRibToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataOspfRib): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataOspfRibOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataOspfRib | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataOspfRib | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // route_map - computed: true, optional: false, required: false
  private _routeMap = new DataScmBgpRouteMapRedistributionListDataOspfRibRouteMapList(this, "route_map", false);
  public get routeMap() {
    return this._routeMap;
  }
}
export interface DataScmBgpRouteMapRedistributionListDataOspf {
}

export function dataScmBgpRouteMapRedistributionListDataOspfToTerraform(struct?: DataScmBgpRouteMapRedistributionListDataOspf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRouteMapRedistributionListDataOspfToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListDataOspf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRouteMapRedistributionListDataOspfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRouteMapRedistributionListDataOspf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListDataOspf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bgp - computed: true, optional: false, required: false
  private _bgp = new DataScmBgpRouteMapRedistributionListDataOspfBgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }

  // rib - computed: true, optional: false, required: false
  private _rib = new DataScmBgpRouteMapRedistributionListDataOspfRibOutputReference(this, "rib");
  public get rib() {
    return this._rib;
  }
}
export interface DataScmBgpRouteMapRedistributionListData {
  /**
  * BGP Route Map Redistributions UUID of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/bgp_route_map_redistribution_list#id DataScmBgpRouteMapRedistributionList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * BGP Route Map Redistributions Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/bgp_route_map_redistribution_list#name DataScmBgpRouteMapRedistributionList#name}
  */
  readonly name?: string;
}

export function dataScmBgpRouteMapRedistributionListDataToTerraform(struct?: DataScmBgpRouteMapRedistributionListData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataScmBgpRouteMapRedistributionListDataToHclTerraform(struct?: DataScmBgpRouteMapRedistributionListData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class DataScmBgpRouteMapRedistributionListDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmBgpRouteMapRedistributionListData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRouteMapRedistributionListData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // bgp - computed: true, optional: false, required: false
  private _bgp = new DataScmBgpRouteMapRedistributionListDataBgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }

  // connected_static - computed: true, optional: false, required: false
  private _connectedStatic = new DataScmBgpRouteMapRedistributionListDataConnectedStaticOutputReference(this, "connected_static");
  public get connectedStatic() {
    return this._connectedStatic;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getStringAttribute('device');
  }

  // folder - computed: true, optional: false, required: false
  public get folder() {
    return this.getStringAttribute('folder');
  }

  // id - computed: true, optional: false, required: true
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
  private _ospf = new DataScmBgpRouteMapRedistributionListDataOspfOutputReference(this, "ospf");
  public get ospf() {
    return this._ospf;
  }

  // snippet - computed: true, optional: false, required: false
  public get snippet() {
    return this.getStringAttribute('snippet');
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }
}

export class DataScmBgpRouteMapRedistributionListDataList extends cdktf.ComplexList {
  public internalValue? : DataScmBgpRouteMapRedistributionListData[] | cdktf.IResolvable

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
  public get(index: number): DataScmBgpRouteMapRedistributionListDataOutputReference {
    return new DataScmBgpRouteMapRedistributionListDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/bgp_route_map_redistribution_list scm_bgp_route_map_redistribution_list}
*/
export class DataScmBgpRouteMapRedistributionList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_bgp_route_map_redistribution_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmBgpRouteMapRedistributionList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmBgpRouteMapRedistributionList to import
  * @param importFromId The id of the existing DataScmBgpRouteMapRedistributionList that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/bgp_route_map_redistribution_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmBgpRouteMapRedistributionList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_bgp_route_map_redistribution_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/bgp_route_map_redistribution_list scm_bgp_route_map_redistribution_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmBgpRouteMapRedistributionListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataScmBgpRouteMapRedistributionListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'scm_bgp_route_map_redistribution_list',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.5',
        providerVersionConstraint: '1.0.5'
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
    this._limit = config.limit;
    this._name = config.name;
    this._offset = config.offset;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: true, optional: false, required: false
  private _data = new DataScmBgpRouteMapRedistributionListDataList(this, "data", false);
  public get data() {
    return this._data;
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

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
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

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
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

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      limit: cdktf.numberToTerraform(this._limit),
      name: cdktf.stringToTerraform(this._name),
      offset: cdktf.numberToTerraform(this._offset),
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
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
