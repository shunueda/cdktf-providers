// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_wan_vpn_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanTransportWanVpnFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_wan_vpn_feature#feature_profile_id DataSdwanTransportWanVpnFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The id of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_wan_vpn_feature#id DataSdwanTransportWanVpnFeature#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataSdwanTransportWanVpnFeatureIpv4StaticRoutesNextHops {
}

export function dataSdwanTransportWanVpnFeatureIpv4StaticRoutesNextHopsToTerraform(struct?: DataSdwanTransportWanVpnFeatureIpv4StaticRoutesNextHops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanTransportWanVpnFeatureIpv4StaticRoutesNextHopsToHclTerraform(struct?: DataSdwanTransportWanVpnFeatureIpv4StaticRoutesNextHops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanTransportWanVpnFeatureIpv4StaticRoutesNextHopsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanTransportWanVpnFeatureIpv4StaticRoutesNextHops | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanTransportWanVpnFeatureIpv4StaticRoutesNextHops | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // address_variable - computed: true, optional: false, required: false
  public get addressVariable() {
    return this.getStringAttribute('address_variable');
  }

  // administrative_distance - computed: true, optional: false, required: false
  public get administrativeDistance() {
    return this.getNumberAttribute('administrative_distance');
  }

  // administrative_distance_variable - computed: true, optional: false, required: false
  public get administrativeDistanceVariable() {
    return this.getStringAttribute('administrative_distance_variable');
  }
}

export class DataSdwanTransportWanVpnFeatureIpv4StaticRoutesNextHopsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanTransportWanVpnFeatureIpv4StaticRoutesNextHopsOutputReference {
    return new DataSdwanTransportWanVpnFeatureIpv4StaticRoutesNextHopsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanTransportWanVpnFeatureIpv4StaticRoutes {
}

export function dataSdwanTransportWanVpnFeatureIpv4StaticRoutesToTerraform(struct?: DataSdwanTransportWanVpnFeatureIpv4StaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanTransportWanVpnFeatureIpv4StaticRoutesToHclTerraform(struct?: DataSdwanTransportWanVpnFeatureIpv4StaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanTransportWanVpnFeatureIpv4StaticRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanTransportWanVpnFeatureIpv4StaticRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanTransportWanVpnFeatureIpv4StaticRoutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // administrative_distance - computed: true, optional: false, required: false
  public get administrativeDistance() {
    return this.getNumberAttribute('administrative_distance');
  }

  // administrative_distance_variable - computed: true, optional: false, required: false
  public get administrativeDistanceVariable() {
    return this.getStringAttribute('administrative_distance_variable');
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // network_address - computed: true, optional: false, required: false
  public get networkAddress() {
    return this.getStringAttribute('network_address');
  }

  // network_address_variable - computed: true, optional: false, required: false
  public get networkAddressVariable() {
    return this.getStringAttribute('network_address_variable');
  }

  // next_hops - computed: true, optional: false, required: false
  private _nextHops = new DataSdwanTransportWanVpnFeatureIpv4StaticRoutesNextHopsList(this, "next_hops", false);
  public get nextHops() {
    return this._nextHops;
  }

  // subnet_mask - computed: true, optional: false, required: false
  public get subnetMask() {
    return this.getStringAttribute('subnet_mask');
  }

  // subnet_mask_variable - computed: true, optional: false, required: false
  public get subnetMaskVariable() {
    return this.getStringAttribute('subnet_mask_variable');
  }
}

export class DataSdwanTransportWanVpnFeatureIpv4StaticRoutesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanTransportWanVpnFeatureIpv4StaticRoutesOutputReference {
    return new DataSdwanTransportWanVpnFeatureIpv4StaticRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanTransportWanVpnFeatureIpv6StaticRoutesNextHops {
}

export function dataSdwanTransportWanVpnFeatureIpv6StaticRoutesNextHopsToTerraform(struct?: DataSdwanTransportWanVpnFeatureIpv6StaticRoutesNextHops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanTransportWanVpnFeatureIpv6StaticRoutesNextHopsToHclTerraform(struct?: DataSdwanTransportWanVpnFeatureIpv6StaticRoutesNextHops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanTransportWanVpnFeatureIpv6StaticRoutesNextHopsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanTransportWanVpnFeatureIpv6StaticRoutesNextHops | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanTransportWanVpnFeatureIpv6StaticRoutesNextHops | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // address_variable - computed: true, optional: false, required: false
  public get addressVariable() {
    return this.getStringAttribute('address_variable');
  }

  // administrative_distance - computed: true, optional: false, required: false
  public get administrativeDistance() {
    return this.getNumberAttribute('administrative_distance');
  }

  // administrative_distance_variable - computed: true, optional: false, required: false
  public get administrativeDistanceVariable() {
    return this.getStringAttribute('administrative_distance_variable');
  }
}

export class DataSdwanTransportWanVpnFeatureIpv6StaticRoutesNextHopsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanTransportWanVpnFeatureIpv6StaticRoutesNextHopsOutputReference {
    return new DataSdwanTransportWanVpnFeatureIpv6StaticRoutesNextHopsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanTransportWanVpnFeatureIpv6StaticRoutes {
}

export function dataSdwanTransportWanVpnFeatureIpv6StaticRoutesToTerraform(struct?: DataSdwanTransportWanVpnFeatureIpv6StaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanTransportWanVpnFeatureIpv6StaticRoutesToHclTerraform(struct?: DataSdwanTransportWanVpnFeatureIpv6StaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanTransportWanVpnFeatureIpv6StaticRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanTransportWanVpnFeatureIpv6StaticRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanTransportWanVpnFeatureIpv6StaticRoutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // nat - computed: true, optional: false, required: false
  public get nat() {
    return this.getStringAttribute('nat');
  }

  // nat_variable - computed: true, optional: false, required: false
  public get natVariable() {
    return this.getStringAttribute('nat_variable');
  }

  // next_hops - computed: true, optional: false, required: false
  private _nextHops = new DataSdwanTransportWanVpnFeatureIpv6StaticRoutesNextHopsList(this, "next_hops", false);
  public get nextHops() {
    return this._nextHops;
  }

  // null0 - computed: true, optional: false, required: false
  public get null0() {
    return this.getBooleanAttribute('null0');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // prefix_variable - computed: true, optional: false, required: false
  public get prefixVariable() {
    return this.getStringAttribute('prefix_variable');
  }
}

export class DataSdwanTransportWanVpnFeatureIpv6StaticRoutesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanTransportWanVpnFeatureIpv6StaticRoutesOutputReference {
    return new DataSdwanTransportWanVpnFeatureIpv6StaticRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanTransportWanVpnFeatureNat64V4Pools {
}

export function dataSdwanTransportWanVpnFeatureNat64V4PoolsToTerraform(struct?: DataSdwanTransportWanVpnFeatureNat64V4Pools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanTransportWanVpnFeatureNat64V4PoolsToHclTerraform(struct?: DataSdwanTransportWanVpnFeatureNat64V4Pools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanTransportWanVpnFeatureNat64V4PoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanTransportWanVpnFeatureNat64V4Pools | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanTransportWanVpnFeatureNat64V4Pools | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // nat64_v4_pool_name - computed: true, optional: false, required: false
  public get nat64V4PoolName() {
    return this.getStringAttribute('nat64_v4_pool_name');
  }

  // nat64_v4_pool_name_variable - computed: true, optional: false, required: false
  public get nat64V4PoolNameVariable() {
    return this.getStringAttribute('nat64_v4_pool_name_variable');
  }

  // nat64_v4_pool_overload - computed: true, optional: false, required: false
  public get nat64V4PoolOverload() {
    return this.getBooleanAttribute('nat64_v4_pool_overload');
  }

  // nat64_v4_pool_overload_variable - computed: true, optional: false, required: false
  public get nat64V4PoolOverloadVariable() {
    return this.getStringAttribute('nat64_v4_pool_overload_variable');
  }

  // nat64_v4_pool_range_end - computed: true, optional: false, required: false
  public get nat64V4PoolRangeEnd() {
    return this.getStringAttribute('nat64_v4_pool_range_end');
  }

  // nat64_v4_pool_range_end_variable - computed: true, optional: false, required: false
  public get nat64V4PoolRangeEndVariable() {
    return this.getStringAttribute('nat64_v4_pool_range_end_variable');
  }

  // nat64_v4_pool_range_start - computed: true, optional: false, required: false
  public get nat64V4PoolRangeStart() {
    return this.getStringAttribute('nat64_v4_pool_range_start');
  }

  // nat64_v4_pool_range_start_variable - computed: true, optional: false, required: false
  public get nat64V4PoolRangeStartVariable() {
    return this.getStringAttribute('nat64_v4_pool_range_start_variable');
  }
}

export class DataSdwanTransportWanVpnFeatureNat64V4PoolsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanTransportWanVpnFeatureNat64V4PoolsOutputReference {
    return new DataSdwanTransportWanVpnFeatureNat64V4PoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanTransportWanVpnFeatureNewHostMappings {
}

export function dataSdwanTransportWanVpnFeatureNewHostMappingsToTerraform(struct?: DataSdwanTransportWanVpnFeatureNewHostMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanTransportWanVpnFeatureNewHostMappingsToHclTerraform(struct?: DataSdwanTransportWanVpnFeatureNewHostMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanTransportWanVpnFeatureNewHostMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanTransportWanVpnFeatureNewHostMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanTransportWanVpnFeatureNewHostMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // host_name_variable - computed: true, optional: false, required: false
  public get hostNameVariable() {
    return this.getStringAttribute('host_name_variable');
  }

  // list_of_ip_addresses - computed: true, optional: false, required: false
  public get listOfIpAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('list_of_ip_addresses'));
  }

  // list_of_ip_addresses_variable - computed: true, optional: false, required: false
  public get listOfIpAddressesVariable() {
    return this.getStringAttribute('list_of_ip_addresses_variable');
  }
}

export class DataSdwanTransportWanVpnFeatureNewHostMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanTransportWanVpnFeatureNewHostMappingsOutputReference {
    return new DataSdwanTransportWanVpnFeatureNewHostMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanTransportWanVpnFeatureServices {
}

export function dataSdwanTransportWanVpnFeatureServicesToTerraform(struct?: DataSdwanTransportWanVpnFeatureServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanTransportWanVpnFeatureServicesToHclTerraform(struct?: DataSdwanTransportWanVpnFeatureServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanTransportWanVpnFeatureServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanTransportWanVpnFeatureServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanTransportWanVpnFeatureServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
}

export class DataSdwanTransportWanVpnFeatureServicesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanTransportWanVpnFeatureServicesOutputReference {
    return new DataSdwanTransportWanVpnFeatureServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_wan_vpn_feature sdwan_transport_wan_vpn_feature}
*/
export class DataSdwanTransportWanVpnFeature extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_transport_wan_vpn_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanTransportWanVpnFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanTransportWanVpnFeature to import
  * @param importFromId The id of the existing DataSdwanTransportWanVpnFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_wan_vpn_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanTransportWanVpnFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_transport_wan_vpn_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_wan_vpn_feature sdwan_transport_wan_vpn_feature} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanTransportWanVpnFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanTransportWanVpnFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_transport_wan_vpn_feature',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._featureProfileId = config.featureProfileId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enhance_ecmp_keying - computed: true, optional: false, required: false
  public get enhanceEcmpKeying() {
    return this.getBooleanAttribute('enhance_ecmp_keying');
  }

  // enhance_ecmp_keying_variable - computed: true, optional: false, required: false
  public get enhanceEcmpKeyingVariable() {
    return this.getStringAttribute('enhance_ecmp_keying_variable');
  }

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
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

  // ipv4_static_routes - computed: true, optional: false, required: false
  private _ipv4StaticRoutes = new DataSdwanTransportWanVpnFeatureIpv4StaticRoutesList(this, "ipv4_static_routes", false);
  public get ipv4StaticRoutes() {
    return this._ipv4StaticRoutes;
  }

  // ipv6_static_routes - computed: true, optional: false, required: false
  private _ipv6StaticRoutes = new DataSdwanTransportWanVpnFeatureIpv6StaticRoutesList(this, "ipv6_static_routes", false);
  public get ipv6StaticRoutes() {
    return this._ipv6StaticRoutes;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nat_64_v4_pools - computed: true, optional: false, required: false
  private _nat64V4Pools = new DataSdwanTransportWanVpnFeatureNat64V4PoolsList(this, "nat_64_v4_pools", false);
  public get nat64V4Pools() {
    return this._nat64V4Pools;
  }

  // new_host_mappings - computed: true, optional: false, required: false
  private _newHostMappings = new DataSdwanTransportWanVpnFeatureNewHostMappingsList(this, "new_host_mappings", false);
  public get newHostMappings() {
    return this._newHostMappings;
  }

  // primary_dns_address_ipv4 - computed: true, optional: false, required: false
  public get primaryDnsAddressIpv4() {
    return this.getStringAttribute('primary_dns_address_ipv4');
  }

  // primary_dns_address_ipv4_variable - computed: true, optional: false, required: false
  public get primaryDnsAddressIpv4Variable() {
    return this.getStringAttribute('primary_dns_address_ipv4_variable');
  }

  // primary_dns_address_ipv6 - computed: true, optional: false, required: false
  public get primaryDnsAddressIpv6() {
    return this.getStringAttribute('primary_dns_address_ipv6');
  }

  // primary_dns_address_ipv6_variable - computed: true, optional: false, required: false
  public get primaryDnsAddressIpv6Variable() {
    return this.getStringAttribute('primary_dns_address_ipv6_variable');
  }

  // secondary_dns_address_ipv4 - computed: true, optional: false, required: false
  public get secondaryDnsAddressIpv4() {
    return this.getStringAttribute('secondary_dns_address_ipv4');
  }

  // secondary_dns_address_ipv4_variable - computed: true, optional: false, required: false
  public get secondaryDnsAddressIpv4Variable() {
    return this.getStringAttribute('secondary_dns_address_ipv4_variable');
  }

  // secondary_dns_address_ipv6 - computed: true, optional: false, required: false
  public get secondaryDnsAddressIpv6() {
    return this.getStringAttribute('secondary_dns_address_ipv6');
  }

  // secondary_dns_address_ipv6_variable - computed: true, optional: false, required: false
  public get secondaryDnsAddressIpv6Variable() {
    return this.getStringAttribute('secondary_dns_address_ipv6_variable');
  }

  // services - computed: true, optional: false, required: false
  private _services = new DataSdwanTransportWanVpnFeatureServicesList(this, "services", false);
  public get services() {
    return this._services;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // vpn - computed: true, optional: false, required: false
  public get vpn() {
    return this.getNumberAttribute('vpn');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
