// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_static_vrf_ipv6_multicast
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrRouterStaticVrfIpv6MulticastConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_static_vrf_ipv6_multicast#device DataIosxrRouterStaticVrfIpv6Multicast#device}
  */
  readonly device?: string;
  /**
  * Destination prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_static_vrf_ipv6_multicast#prefix_address DataIosxrRouterStaticVrfIpv6Multicast#prefix_address}
  */
  readonly prefixAddress: string;
  /**
  * Destination prefix length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_static_vrf_ipv6_multicast#prefix_length DataIosxrRouterStaticVrfIpv6Multicast#prefix_length}
  */
  readonly prefixLength: number;
  /**
  * VRF Static route configuration subcommands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_static_vrf_ipv6_multicast#vrf_name DataIosxrRouterStaticVrfIpv6Multicast#vrf_name}
  */
  readonly vrfName: string;
}
export interface DataIosxrRouterStaticVrfIpv6MulticastNexthopAddresses {
}

export function dataIosxrRouterStaticVrfIpv6MulticastNexthopAddressesToTerraform(struct?: DataIosxrRouterStaticVrfIpv6MulticastNexthopAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterStaticVrfIpv6MulticastNexthopAddressesToHclTerraform(struct?: DataIosxrRouterStaticVrfIpv6MulticastNexthopAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterStaticVrfIpv6MulticastNexthopAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterStaticVrfIpv6MulticastNexthopAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterStaticVrfIpv6MulticastNexthopAddresses | undefined) {
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // distance_metric - computed: true, optional: false, required: false
  public get distanceMetric() {
    return this.getNumberAttribute('distance_metric');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getNumberAttribute('metric');
  }

  // permanent - computed: true, optional: false, required: false
  public get permanent() {
    return this.getBooleanAttribute('permanent');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getNumberAttribute('tag');
  }

  // track - computed: true, optional: false, required: false
  public get track() {
    return this.getStringAttribute('track');
  }
}

export class DataIosxrRouterStaticVrfIpv6MulticastNexthopAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterStaticVrfIpv6MulticastNexthopAddressesOutputReference {
    return new DataIosxrRouterStaticVrfIpv6MulticastNexthopAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterStaticVrfIpv6MulticastNexthopInterfaceAddresses {
}

export function dataIosxrRouterStaticVrfIpv6MulticastNexthopInterfaceAddressesToTerraform(struct?: DataIosxrRouterStaticVrfIpv6MulticastNexthopInterfaceAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterStaticVrfIpv6MulticastNexthopInterfaceAddressesToHclTerraform(struct?: DataIosxrRouterStaticVrfIpv6MulticastNexthopInterfaceAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterStaticVrfIpv6MulticastNexthopInterfaceAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterStaticVrfIpv6MulticastNexthopInterfaceAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterStaticVrfIpv6MulticastNexthopInterfaceAddresses | undefined) {
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // distance_metric - computed: true, optional: false, required: false
  public get distanceMetric() {
    return this.getNumberAttribute('distance_metric');
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getNumberAttribute('metric');
  }

  // permanent - computed: true, optional: false, required: false
  public get permanent() {
    return this.getBooleanAttribute('permanent');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getNumberAttribute('tag');
  }

  // track - computed: true, optional: false, required: false
  public get track() {
    return this.getStringAttribute('track');
  }
}

export class DataIosxrRouterStaticVrfIpv6MulticastNexthopInterfaceAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterStaticVrfIpv6MulticastNexthopInterfaceAddressesOutputReference {
    return new DataIosxrRouterStaticVrfIpv6MulticastNexthopInterfaceAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterStaticVrfIpv6MulticastNexthopInterfaces {
}

export function dataIosxrRouterStaticVrfIpv6MulticastNexthopInterfacesToTerraform(struct?: DataIosxrRouterStaticVrfIpv6MulticastNexthopInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterStaticVrfIpv6MulticastNexthopInterfacesToHclTerraform(struct?: DataIosxrRouterStaticVrfIpv6MulticastNexthopInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterStaticVrfIpv6MulticastNexthopInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterStaticVrfIpv6MulticastNexthopInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterStaticVrfIpv6MulticastNexthopInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // distance_metric - computed: true, optional: false, required: false
  public get distanceMetric() {
    return this.getNumberAttribute('distance_metric');
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getNumberAttribute('metric');
  }

  // permanent - computed: true, optional: false, required: false
  public get permanent() {
    return this.getBooleanAttribute('permanent');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getNumberAttribute('tag');
  }

  // track - computed: true, optional: false, required: false
  public get track() {
    return this.getStringAttribute('track');
  }
}

export class DataIosxrRouterStaticVrfIpv6MulticastNexthopInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterStaticVrfIpv6MulticastNexthopInterfacesOutputReference {
    return new DataIosxrRouterStaticVrfIpv6MulticastNexthopInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterStaticVrfIpv6MulticastVrfsNexthopAddresses {
}

export function dataIosxrRouterStaticVrfIpv6MulticastVrfsNexthopAddressesToTerraform(struct?: DataIosxrRouterStaticVrfIpv6MulticastVrfsNexthopAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterStaticVrfIpv6MulticastVrfsNexthopAddressesToHclTerraform(struct?: DataIosxrRouterStaticVrfIpv6MulticastVrfsNexthopAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterStaticVrfIpv6MulticastVrfsNexthopAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterStaticVrfIpv6MulticastVrfsNexthopAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterStaticVrfIpv6MulticastVrfsNexthopAddresses | undefined) {
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // distance_metric - computed: true, optional: false, required: false
  public get distanceMetric() {
    return this.getNumberAttribute('distance_metric');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getNumberAttribute('metric');
  }

  // permanent - computed: true, optional: false, required: false
  public get permanent() {
    return this.getBooleanAttribute('permanent');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getNumberAttribute('tag');
  }

  // track - computed: true, optional: false, required: false
  public get track() {
    return this.getStringAttribute('track');
  }
}

export class DataIosxrRouterStaticVrfIpv6MulticastVrfsNexthopAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterStaticVrfIpv6MulticastVrfsNexthopAddressesOutputReference {
    return new DataIosxrRouterStaticVrfIpv6MulticastVrfsNexthopAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterStaticVrfIpv6MulticastVrfsNexthopInterfaceAddresses {
}

export function dataIosxrRouterStaticVrfIpv6MulticastVrfsNexthopInterfaceAddressesToTerraform(struct?: DataIosxrRouterStaticVrfIpv6MulticastVrfsNexthopInterfaceAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterStaticVrfIpv6MulticastVrfsNexthopInterfaceAddressesToHclTerraform(struct?: DataIosxrRouterStaticVrfIpv6MulticastVrfsNexthopInterfaceAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterStaticVrfIpv6MulticastVrfsNexthopInterfaceAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterStaticVrfIpv6MulticastVrfsNexthopInterfaceAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterStaticVrfIpv6MulticastVrfsNexthopInterfaceAddresses | undefined) {
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

  // bfd_fast_detect_minimum_interval - computed: true, optional: false, required: false
  public get bfdFastDetectMinimumInterval() {
    return this.getNumberAttribute('bfd_fast_detect_minimum_interval');
  }

  // bfd_fast_detect_multiplier - computed: true, optional: false, required: false
  public get bfdFastDetectMultiplier() {
    return this.getNumberAttribute('bfd_fast_detect_multiplier');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // distance_metric - computed: true, optional: false, required: false
  public get distanceMetric() {
    return this.getNumberAttribute('distance_metric');
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getNumberAttribute('metric');
  }

  // permanent - computed: true, optional: false, required: false
  public get permanent() {
    return this.getBooleanAttribute('permanent');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getNumberAttribute('tag');
  }

  // track - computed: true, optional: false, required: false
  public get track() {
    return this.getStringAttribute('track');
  }
}

export class DataIosxrRouterStaticVrfIpv6MulticastVrfsNexthopInterfaceAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterStaticVrfIpv6MulticastVrfsNexthopInterfaceAddressesOutputReference {
    return new DataIosxrRouterStaticVrfIpv6MulticastVrfsNexthopInterfaceAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterStaticVrfIpv6MulticastVrfsNexthopInterfaces {
}

export function dataIosxrRouterStaticVrfIpv6MulticastVrfsNexthopInterfacesToTerraform(struct?: DataIosxrRouterStaticVrfIpv6MulticastVrfsNexthopInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterStaticVrfIpv6MulticastVrfsNexthopInterfacesToHclTerraform(struct?: DataIosxrRouterStaticVrfIpv6MulticastVrfsNexthopInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterStaticVrfIpv6MulticastVrfsNexthopInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterStaticVrfIpv6MulticastVrfsNexthopInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterStaticVrfIpv6MulticastVrfsNexthopInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // distance_metric - computed: true, optional: false, required: false
  public get distanceMetric() {
    return this.getNumberAttribute('distance_metric');
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getNumberAttribute('metric');
  }

  // permanent - computed: true, optional: false, required: false
  public get permanent() {
    return this.getBooleanAttribute('permanent');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getNumberAttribute('tag');
  }

  // track - computed: true, optional: false, required: false
  public get track() {
    return this.getStringAttribute('track');
  }
}

export class DataIosxrRouterStaticVrfIpv6MulticastVrfsNexthopInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterStaticVrfIpv6MulticastVrfsNexthopInterfacesOutputReference {
    return new DataIosxrRouterStaticVrfIpv6MulticastVrfsNexthopInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterStaticVrfIpv6MulticastVrfs {
}

export function dataIosxrRouterStaticVrfIpv6MulticastVrfsToTerraform(struct?: DataIosxrRouterStaticVrfIpv6MulticastVrfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterStaticVrfIpv6MulticastVrfsToHclTerraform(struct?: DataIosxrRouterStaticVrfIpv6MulticastVrfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterStaticVrfIpv6MulticastVrfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterStaticVrfIpv6MulticastVrfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterStaticVrfIpv6MulticastVrfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // nexthop_addresses - computed: true, optional: false, required: false
  private _nexthopAddresses = new DataIosxrRouterStaticVrfIpv6MulticastVrfsNexthopAddressesList(this, "nexthop_addresses", false);
  public get nexthopAddresses() {
    return this._nexthopAddresses;
  }

  // nexthop_interface_addresses - computed: true, optional: false, required: false
  private _nexthopInterfaceAddresses = new DataIosxrRouterStaticVrfIpv6MulticastVrfsNexthopInterfaceAddressesList(this, "nexthop_interface_addresses", false);
  public get nexthopInterfaceAddresses() {
    return this._nexthopInterfaceAddresses;
  }

  // nexthop_interfaces - computed: true, optional: false, required: false
  private _nexthopInterfaces = new DataIosxrRouterStaticVrfIpv6MulticastVrfsNexthopInterfacesList(this, "nexthop_interfaces", false);
  public get nexthopInterfaces() {
    return this._nexthopInterfaces;
  }

  // vrf_name - computed: true, optional: false, required: false
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
}

export class DataIosxrRouterStaticVrfIpv6MulticastVrfsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterStaticVrfIpv6MulticastVrfsOutputReference {
    return new DataIosxrRouterStaticVrfIpv6MulticastVrfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_static_vrf_ipv6_multicast iosxr_router_static_vrf_ipv6_multicast}
*/
export class DataIosxrRouterStaticVrfIpv6Multicast extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_router_static_vrf_ipv6_multicast";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrRouterStaticVrfIpv6Multicast resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrRouterStaticVrfIpv6Multicast to import
  * @param importFromId The id of the existing DataIosxrRouterStaticVrfIpv6Multicast that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_static_vrf_ipv6_multicast#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrRouterStaticVrfIpv6Multicast to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_router_static_vrf_ipv6_multicast", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_static_vrf_ipv6_multicast iosxr_router_static_vrf_ipv6_multicast} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrRouterStaticVrfIpv6MulticastConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxrRouterStaticVrfIpv6MulticastConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_router_static_vrf_ipv6_multicast',
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
    this._device = config.device;
    this._prefixAddress = config.prefixAddress;
    this._prefixLength = config.prefixLength;
    this._vrfName = config.vrfName;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // nexthop_addresses - computed: true, optional: false, required: false
  private _nexthopAddresses = new DataIosxrRouterStaticVrfIpv6MulticastNexthopAddressesList(this, "nexthop_addresses", false);
  public get nexthopAddresses() {
    return this._nexthopAddresses;
  }

  // nexthop_interface_addresses - computed: true, optional: false, required: false
  private _nexthopInterfaceAddresses = new DataIosxrRouterStaticVrfIpv6MulticastNexthopInterfaceAddressesList(this, "nexthop_interface_addresses", false);
  public get nexthopInterfaceAddresses() {
    return this._nexthopInterfaceAddresses;
  }

  // nexthop_interfaces - computed: true, optional: false, required: false
  private _nexthopInterfaces = new DataIosxrRouterStaticVrfIpv6MulticastNexthopInterfacesList(this, "nexthop_interfaces", false);
  public get nexthopInterfaces() {
    return this._nexthopInterfaces;
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

  // vrfs - computed: true, optional: false, required: false
  private _vrfs = new DataIosxrRouterStaticVrfIpv6MulticastVrfsList(this, "vrfs", false);
  public get vrfs() {
    return this._vrfs;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      prefix_address: cdktf.stringToTerraform(this._prefixAddress),
      prefix_length: cdktf.numberToTerraform(this._prefixLength),
      vrf_name: cdktf.stringToTerraform(this._vrfName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
