// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_static_vrf_ipv4_unicast
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrRouterStaticVrfIpv4UnicastConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_static_vrf_ipv4_unicast#device DataIosxrRouterStaticVrfIpv4Unicast#device}
  */
  readonly device?: string;
  /**
  * Destination prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_static_vrf_ipv4_unicast#prefix_address DataIosxrRouterStaticVrfIpv4Unicast#prefix_address}
  */
  readonly prefixAddress: string;
  /**
  * Destination prefix length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_static_vrf_ipv4_unicast#prefix_length DataIosxrRouterStaticVrfIpv4Unicast#prefix_length}
  */
  readonly prefixLength: number;
  /**
  * VRF Static route configuration subcommands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_static_vrf_ipv4_unicast#vrf_name DataIosxrRouterStaticVrfIpv4Unicast#vrf_name}
  */
  readonly vrfName: string;
}
export interface DataIosxrRouterStaticVrfIpv4UnicastNexthopAddresses {
}

export function dataIosxrRouterStaticVrfIpv4UnicastNexthopAddressesToTerraform(struct?: DataIosxrRouterStaticVrfIpv4UnicastNexthopAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterStaticVrfIpv4UnicastNexthopAddressesToHclTerraform(struct?: DataIosxrRouterStaticVrfIpv4UnicastNexthopAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterStaticVrfIpv4UnicastNexthopAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterStaticVrfIpv4UnicastNexthopAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterStaticVrfIpv4UnicastNexthopAddresses | undefined) {
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

export class DataIosxrRouterStaticVrfIpv4UnicastNexthopAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterStaticVrfIpv4UnicastNexthopAddressesOutputReference {
    return new DataIosxrRouterStaticVrfIpv4UnicastNexthopAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterStaticVrfIpv4UnicastNexthopInterfaceAddresses {
}

export function dataIosxrRouterStaticVrfIpv4UnicastNexthopInterfaceAddressesToTerraform(struct?: DataIosxrRouterStaticVrfIpv4UnicastNexthopInterfaceAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterStaticVrfIpv4UnicastNexthopInterfaceAddressesToHclTerraform(struct?: DataIosxrRouterStaticVrfIpv4UnicastNexthopInterfaceAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterStaticVrfIpv4UnicastNexthopInterfaceAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterStaticVrfIpv4UnicastNexthopInterfaceAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterStaticVrfIpv4UnicastNexthopInterfaceAddresses | undefined) {
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

export class DataIosxrRouterStaticVrfIpv4UnicastNexthopInterfaceAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterStaticVrfIpv4UnicastNexthopInterfaceAddressesOutputReference {
    return new DataIosxrRouterStaticVrfIpv4UnicastNexthopInterfaceAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterStaticVrfIpv4UnicastNexthopInterfaces {
}

export function dataIosxrRouterStaticVrfIpv4UnicastNexthopInterfacesToTerraform(struct?: DataIosxrRouterStaticVrfIpv4UnicastNexthopInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterStaticVrfIpv4UnicastNexthopInterfacesToHclTerraform(struct?: DataIosxrRouterStaticVrfIpv4UnicastNexthopInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterStaticVrfIpv4UnicastNexthopInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterStaticVrfIpv4UnicastNexthopInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterStaticVrfIpv4UnicastNexthopInterfaces | undefined) {
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

export class DataIosxrRouterStaticVrfIpv4UnicastNexthopInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterStaticVrfIpv4UnicastNexthopInterfacesOutputReference {
    return new DataIosxrRouterStaticVrfIpv4UnicastNexthopInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterStaticVrfIpv4UnicastVrfsNexthopAddresses {
}

export function dataIosxrRouterStaticVrfIpv4UnicastVrfsNexthopAddressesToTerraform(struct?: DataIosxrRouterStaticVrfIpv4UnicastVrfsNexthopAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterStaticVrfIpv4UnicastVrfsNexthopAddressesToHclTerraform(struct?: DataIosxrRouterStaticVrfIpv4UnicastVrfsNexthopAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterStaticVrfIpv4UnicastVrfsNexthopAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterStaticVrfIpv4UnicastVrfsNexthopAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterStaticVrfIpv4UnicastVrfsNexthopAddresses | undefined) {
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

export class DataIosxrRouterStaticVrfIpv4UnicastVrfsNexthopAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterStaticVrfIpv4UnicastVrfsNexthopAddressesOutputReference {
    return new DataIosxrRouterStaticVrfIpv4UnicastVrfsNexthopAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterStaticVrfIpv4UnicastVrfsNexthopInterfaceAddresses {
}

export function dataIosxrRouterStaticVrfIpv4UnicastVrfsNexthopInterfaceAddressesToTerraform(struct?: DataIosxrRouterStaticVrfIpv4UnicastVrfsNexthopInterfaceAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterStaticVrfIpv4UnicastVrfsNexthopInterfaceAddressesToHclTerraform(struct?: DataIosxrRouterStaticVrfIpv4UnicastVrfsNexthopInterfaceAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterStaticVrfIpv4UnicastVrfsNexthopInterfaceAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterStaticVrfIpv4UnicastVrfsNexthopInterfaceAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterStaticVrfIpv4UnicastVrfsNexthopInterfaceAddresses | undefined) {
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

export class DataIosxrRouterStaticVrfIpv4UnicastVrfsNexthopInterfaceAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterStaticVrfIpv4UnicastVrfsNexthopInterfaceAddressesOutputReference {
    return new DataIosxrRouterStaticVrfIpv4UnicastVrfsNexthopInterfaceAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterStaticVrfIpv4UnicastVrfsNexthopInterfaces {
}

export function dataIosxrRouterStaticVrfIpv4UnicastVrfsNexthopInterfacesToTerraform(struct?: DataIosxrRouterStaticVrfIpv4UnicastVrfsNexthopInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterStaticVrfIpv4UnicastVrfsNexthopInterfacesToHclTerraform(struct?: DataIosxrRouterStaticVrfIpv4UnicastVrfsNexthopInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterStaticVrfIpv4UnicastVrfsNexthopInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterStaticVrfIpv4UnicastVrfsNexthopInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterStaticVrfIpv4UnicastVrfsNexthopInterfaces | undefined) {
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

export class DataIosxrRouterStaticVrfIpv4UnicastVrfsNexthopInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterStaticVrfIpv4UnicastVrfsNexthopInterfacesOutputReference {
    return new DataIosxrRouterStaticVrfIpv4UnicastVrfsNexthopInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterStaticVrfIpv4UnicastVrfs {
}

export function dataIosxrRouterStaticVrfIpv4UnicastVrfsToTerraform(struct?: DataIosxrRouterStaticVrfIpv4UnicastVrfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterStaticVrfIpv4UnicastVrfsToHclTerraform(struct?: DataIosxrRouterStaticVrfIpv4UnicastVrfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterStaticVrfIpv4UnicastVrfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterStaticVrfIpv4UnicastVrfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterStaticVrfIpv4UnicastVrfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // nexthop_addresses - computed: true, optional: false, required: false
  private _nexthopAddresses = new DataIosxrRouterStaticVrfIpv4UnicastVrfsNexthopAddressesList(this, "nexthop_addresses", false);
  public get nexthopAddresses() {
    return this._nexthopAddresses;
  }

  // nexthop_interface_addresses - computed: true, optional: false, required: false
  private _nexthopInterfaceAddresses = new DataIosxrRouterStaticVrfIpv4UnicastVrfsNexthopInterfaceAddressesList(this, "nexthop_interface_addresses", false);
  public get nexthopInterfaceAddresses() {
    return this._nexthopInterfaceAddresses;
  }

  // nexthop_interfaces - computed: true, optional: false, required: false
  private _nexthopInterfaces = new DataIosxrRouterStaticVrfIpv4UnicastVrfsNexthopInterfacesList(this, "nexthop_interfaces", false);
  public get nexthopInterfaces() {
    return this._nexthopInterfaces;
  }

  // vrf_name - computed: true, optional: false, required: false
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
}

export class DataIosxrRouterStaticVrfIpv4UnicastVrfsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterStaticVrfIpv4UnicastVrfsOutputReference {
    return new DataIosxrRouterStaticVrfIpv4UnicastVrfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_static_vrf_ipv4_unicast iosxr_router_static_vrf_ipv4_unicast}
*/
export class DataIosxrRouterStaticVrfIpv4Unicast extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_router_static_vrf_ipv4_unicast";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrRouterStaticVrfIpv4Unicast resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrRouterStaticVrfIpv4Unicast to import
  * @param importFromId The id of the existing DataIosxrRouterStaticVrfIpv4Unicast that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_static_vrf_ipv4_unicast#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrRouterStaticVrfIpv4Unicast to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_router_static_vrf_ipv4_unicast", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_static_vrf_ipv4_unicast iosxr_router_static_vrf_ipv4_unicast} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrRouterStaticVrfIpv4UnicastConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxrRouterStaticVrfIpv4UnicastConfig) {
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
  private _nexthopAddresses = new DataIosxrRouterStaticVrfIpv4UnicastNexthopAddressesList(this, "nexthop_addresses", false);
  public get nexthopAddresses() {
    return this._nexthopAddresses;
  }

  // nexthop_interface_addresses - computed: true, optional: false, required: false
  private _nexthopInterfaceAddresses = new DataIosxrRouterStaticVrfIpv4UnicastNexthopInterfaceAddressesList(this, "nexthop_interface_addresses", false);
  public get nexthopInterfaceAddresses() {
    return this._nexthopInterfaceAddresses;
  }

  // nexthop_interfaces - computed: true, optional: false, required: false
  private _nexthopInterfaces = new DataIosxrRouterStaticVrfIpv4UnicastNexthopInterfacesList(this, "nexthop_interfaces", false);
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
  private _vrfs = new DataIosxrRouterStaticVrfIpv4UnicastVrfsList(this, "vrfs", false);
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
