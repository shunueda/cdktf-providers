// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_static_ipv4_multicast
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrRouterStaticIpv4MulticastConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_static_ipv4_multicast#device DataIosxrRouterStaticIpv4Multicast#device}
  */
  readonly device?: string;
  /**
  * Destination prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_static_ipv4_multicast#prefix_address DataIosxrRouterStaticIpv4Multicast#prefix_address}
  */
  readonly prefixAddress: string;
  /**
  * Destination prefix length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_static_ipv4_multicast#prefix_length DataIosxrRouterStaticIpv4Multicast#prefix_length}
  */
  readonly prefixLength: number;
}
export interface DataIosxrRouterStaticIpv4MulticastNexthopAddresses {
}

export function dataIosxrRouterStaticIpv4MulticastNexthopAddressesToTerraform(struct?: DataIosxrRouterStaticIpv4MulticastNexthopAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterStaticIpv4MulticastNexthopAddressesToHclTerraform(struct?: DataIosxrRouterStaticIpv4MulticastNexthopAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterStaticIpv4MulticastNexthopAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterStaticIpv4MulticastNexthopAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterStaticIpv4MulticastNexthopAddresses | undefined) {
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

export class DataIosxrRouterStaticIpv4MulticastNexthopAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterStaticIpv4MulticastNexthopAddressesOutputReference {
    return new DataIosxrRouterStaticIpv4MulticastNexthopAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterStaticIpv4MulticastNexthopInterfaceAddresses {
}

export function dataIosxrRouterStaticIpv4MulticastNexthopInterfaceAddressesToTerraform(struct?: DataIosxrRouterStaticIpv4MulticastNexthopInterfaceAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterStaticIpv4MulticastNexthopInterfaceAddressesToHclTerraform(struct?: DataIosxrRouterStaticIpv4MulticastNexthopInterfaceAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterStaticIpv4MulticastNexthopInterfaceAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterStaticIpv4MulticastNexthopInterfaceAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterStaticIpv4MulticastNexthopInterfaceAddresses | undefined) {
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

export class DataIosxrRouterStaticIpv4MulticastNexthopInterfaceAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterStaticIpv4MulticastNexthopInterfaceAddressesOutputReference {
    return new DataIosxrRouterStaticIpv4MulticastNexthopInterfaceAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterStaticIpv4MulticastNexthopInterfaces {
}

export function dataIosxrRouterStaticIpv4MulticastNexthopInterfacesToTerraform(struct?: DataIosxrRouterStaticIpv4MulticastNexthopInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterStaticIpv4MulticastNexthopInterfacesToHclTerraform(struct?: DataIosxrRouterStaticIpv4MulticastNexthopInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterStaticIpv4MulticastNexthopInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterStaticIpv4MulticastNexthopInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterStaticIpv4MulticastNexthopInterfaces | undefined) {
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

export class DataIosxrRouterStaticIpv4MulticastNexthopInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterStaticIpv4MulticastNexthopInterfacesOutputReference {
    return new DataIosxrRouterStaticIpv4MulticastNexthopInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterStaticIpv4MulticastVrfsNexthopAddresses {
}

export function dataIosxrRouterStaticIpv4MulticastVrfsNexthopAddressesToTerraform(struct?: DataIosxrRouterStaticIpv4MulticastVrfsNexthopAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterStaticIpv4MulticastVrfsNexthopAddressesToHclTerraform(struct?: DataIosxrRouterStaticIpv4MulticastVrfsNexthopAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterStaticIpv4MulticastVrfsNexthopAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterStaticIpv4MulticastVrfsNexthopAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterStaticIpv4MulticastVrfsNexthopAddresses | undefined) {
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

export class DataIosxrRouterStaticIpv4MulticastVrfsNexthopAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterStaticIpv4MulticastVrfsNexthopAddressesOutputReference {
    return new DataIosxrRouterStaticIpv4MulticastVrfsNexthopAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterStaticIpv4MulticastVrfsNexthopInterfaceAddresses {
}

export function dataIosxrRouterStaticIpv4MulticastVrfsNexthopInterfaceAddressesToTerraform(struct?: DataIosxrRouterStaticIpv4MulticastVrfsNexthopInterfaceAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterStaticIpv4MulticastVrfsNexthopInterfaceAddressesToHclTerraform(struct?: DataIosxrRouterStaticIpv4MulticastVrfsNexthopInterfaceAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterStaticIpv4MulticastVrfsNexthopInterfaceAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterStaticIpv4MulticastVrfsNexthopInterfaceAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterStaticIpv4MulticastVrfsNexthopInterfaceAddresses | undefined) {
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

export class DataIosxrRouterStaticIpv4MulticastVrfsNexthopInterfaceAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterStaticIpv4MulticastVrfsNexthopInterfaceAddressesOutputReference {
    return new DataIosxrRouterStaticIpv4MulticastVrfsNexthopInterfaceAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterStaticIpv4MulticastVrfsNexthopInterfaces {
}

export function dataIosxrRouterStaticIpv4MulticastVrfsNexthopInterfacesToTerraform(struct?: DataIosxrRouterStaticIpv4MulticastVrfsNexthopInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterStaticIpv4MulticastVrfsNexthopInterfacesToHclTerraform(struct?: DataIosxrRouterStaticIpv4MulticastVrfsNexthopInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterStaticIpv4MulticastVrfsNexthopInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterStaticIpv4MulticastVrfsNexthopInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterStaticIpv4MulticastVrfsNexthopInterfaces | undefined) {
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

export class DataIosxrRouterStaticIpv4MulticastVrfsNexthopInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterStaticIpv4MulticastVrfsNexthopInterfacesOutputReference {
    return new DataIosxrRouterStaticIpv4MulticastVrfsNexthopInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterStaticIpv4MulticastVrfs {
}

export function dataIosxrRouterStaticIpv4MulticastVrfsToTerraform(struct?: DataIosxrRouterStaticIpv4MulticastVrfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterStaticIpv4MulticastVrfsToHclTerraform(struct?: DataIosxrRouterStaticIpv4MulticastVrfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterStaticIpv4MulticastVrfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterStaticIpv4MulticastVrfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterStaticIpv4MulticastVrfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // nexthop_addresses - computed: true, optional: false, required: false
  private _nexthopAddresses = new DataIosxrRouterStaticIpv4MulticastVrfsNexthopAddressesList(this, "nexthop_addresses", false);
  public get nexthopAddresses() {
    return this._nexthopAddresses;
  }

  // nexthop_interface_addresses - computed: true, optional: false, required: false
  private _nexthopInterfaceAddresses = new DataIosxrRouterStaticIpv4MulticastVrfsNexthopInterfaceAddressesList(this, "nexthop_interface_addresses", false);
  public get nexthopInterfaceAddresses() {
    return this._nexthopInterfaceAddresses;
  }

  // nexthop_interfaces - computed: true, optional: false, required: false
  private _nexthopInterfaces = new DataIosxrRouterStaticIpv4MulticastVrfsNexthopInterfacesList(this, "nexthop_interfaces", false);
  public get nexthopInterfaces() {
    return this._nexthopInterfaces;
  }

  // vrf_name - computed: true, optional: false, required: false
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
}

export class DataIosxrRouterStaticIpv4MulticastVrfsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterStaticIpv4MulticastVrfsOutputReference {
    return new DataIosxrRouterStaticIpv4MulticastVrfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_static_ipv4_multicast iosxr_router_static_ipv4_multicast}
*/
export class DataIosxrRouterStaticIpv4Multicast extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_router_static_ipv4_multicast";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrRouterStaticIpv4Multicast resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrRouterStaticIpv4Multicast to import
  * @param importFromId The id of the existing DataIosxrRouterStaticIpv4Multicast that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_static_ipv4_multicast#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrRouterStaticIpv4Multicast to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_router_static_ipv4_multicast", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_static_ipv4_multicast iosxr_router_static_ipv4_multicast} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrRouterStaticIpv4MulticastConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxrRouterStaticIpv4MulticastConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_router_static_ipv4_multicast',
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
  private _nexthopAddresses = new DataIosxrRouterStaticIpv4MulticastNexthopAddressesList(this, "nexthop_addresses", false);
  public get nexthopAddresses() {
    return this._nexthopAddresses;
  }

  // nexthop_interface_addresses - computed: true, optional: false, required: false
  private _nexthopInterfaceAddresses = new DataIosxrRouterStaticIpv4MulticastNexthopInterfaceAddressesList(this, "nexthop_interface_addresses", false);
  public get nexthopInterfaceAddresses() {
    return this._nexthopInterfaceAddresses;
  }

  // nexthop_interfaces - computed: true, optional: false, required: false
  private _nexthopInterfaces = new DataIosxrRouterStaticIpv4MulticastNexthopInterfacesList(this, "nexthop_interfaces", false);
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

  // vrfs - computed: true, optional: false, required: false
  private _vrfs = new DataIosxrRouterStaticIpv4MulticastVrfsList(this, "vrfs", false);
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
