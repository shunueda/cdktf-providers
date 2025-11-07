// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/vrf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrVrfConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/vrf#device DataIosxrVrf#device}
  */
  readonly device?: string;
  /**
  * VRF name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/vrf#vrf_name DataIosxrVrf#vrf_name}
  */
  readonly vrfName: string;
}
export interface DataIosxrVrfIpv4UnicastExportRouteTargetFourByteAsFormat {
}

export function dataIosxrVrfIpv4UnicastExportRouteTargetFourByteAsFormatToTerraform(struct?: DataIosxrVrfIpv4UnicastExportRouteTargetFourByteAsFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrVrfIpv4UnicastExportRouteTargetFourByteAsFormatToHclTerraform(struct?: DataIosxrVrfIpv4UnicastExportRouteTargetFourByteAsFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrVrfIpv4UnicastExportRouteTargetFourByteAsFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrVrfIpv4UnicastExportRouteTargetFourByteAsFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrVrfIpv4UnicastExportRouteTargetFourByteAsFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // asn4_index - computed: true, optional: false, required: false
  public get asn4Index() {
    return this.getNumberAttribute('asn4_index');
  }

  // four_byte_as_number - computed: true, optional: false, required: false
  public get fourByteAsNumber() {
    return this.getNumberAttribute('four_byte_as_number');
  }

  // stitching - computed: true, optional: false, required: false
  public get stitching() {
    return this.getStringAttribute('stitching');
  }
}

export class DataIosxrVrfIpv4UnicastExportRouteTargetFourByteAsFormatList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrVrfIpv4UnicastExportRouteTargetFourByteAsFormatOutputReference {
    return new DataIosxrVrfIpv4UnicastExportRouteTargetFourByteAsFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrVrfIpv4UnicastExportRouteTargetIpAddressFormat {
}

export function dataIosxrVrfIpv4UnicastExportRouteTargetIpAddressFormatToTerraform(struct?: DataIosxrVrfIpv4UnicastExportRouteTargetIpAddressFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrVrfIpv4UnicastExportRouteTargetIpAddressFormatToHclTerraform(struct?: DataIosxrVrfIpv4UnicastExportRouteTargetIpAddressFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrVrfIpv4UnicastExportRouteTargetIpAddressFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrVrfIpv4UnicastExportRouteTargetIpAddressFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrVrfIpv4UnicastExportRouteTargetIpAddressFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv4_address_index - computed: true, optional: false, required: false
  public get ipv4AddressIndex() {
    return this.getNumberAttribute('ipv4_address_index');
  }

  // stitching - computed: true, optional: false, required: false
  public get stitching() {
    return this.getStringAttribute('stitching');
  }
}

export class DataIosxrVrfIpv4UnicastExportRouteTargetIpAddressFormatList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrVrfIpv4UnicastExportRouteTargetIpAddressFormatOutputReference {
    return new DataIosxrVrfIpv4UnicastExportRouteTargetIpAddressFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrVrfIpv4UnicastExportRouteTargetTwoByteAsFormat {
}

export function dataIosxrVrfIpv4UnicastExportRouteTargetTwoByteAsFormatToTerraform(struct?: DataIosxrVrfIpv4UnicastExportRouteTargetTwoByteAsFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrVrfIpv4UnicastExportRouteTargetTwoByteAsFormatToHclTerraform(struct?: DataIosxrVrfIpv4UnicastExportRouteTargetTwoByteAsFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrVrfIpv4UnicastExportRouteTargetTwoByteAsFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrVrfIpv4UnicastExportRouteTargetTwoByteAsFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrVrfIpv4UnicastExportRouteTargetTwoByteAsFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // asn2_index - computed: true, optional: false, required: false
  public get asn2Index() {
    return this.getNumberAttribute('asn2_index');
  }

  // stitching - computed: true, optional: false, required: false
  public get stitching() {
    return this.getStringAttribute('stitching');
  }

  // two_byte_as_number - computed: true, optional: false, required: false
  public get twoByteAsNumber() {
    return this.getNumberAttribute('two_byte_as_number');
  }
}

export class DataIosxrVrfIpv4UnicastExportRouteTargetTwoByteAsFormatList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrVrfIpv4UnicastExportRouteTargetTwoByteAsFormatOutputReference {
    return new DataIosxrVrfIpv4UnicastExportRouteTargetTwoByteAsFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrVrfIpv4UnicastImportRouteTargetFourByteAsFormat {
}

export function dataIosxrVrfIpv4UnicastImportRouteTargetFourByteAsFormatToTerraform(struct?: DataIosxrVrfIpv4UnicastImportRouteTargetFourByteAsFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrVrfIpv4UnicastImportRouteTargetFourByteAsFormatToHclTerraform(struct?: DataIosxrVrfIpv4UnicastImportRouteTargetFourByteAsFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrVrfIpv4UnicastImportRouteTargetFourByteAsFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrVrfIpv4UnicastImportRouteTargetFourByteAsFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrVrfIpv4UnicastImportRouteTargetFourByteAsFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // asn4_index - computed: true, optional: false, required: false
  public get asn4Index() {
    return this.getNumberAttribute('asn4_index');
  }

  // four_byte_as_number - computed: true, optional: false, required: false
  public get fourByteAsNumber() {
    return this.getNumberAttribute('four_byte_as_number');
  }

  // stitching - computed: true, optional: false, required: false
  public get stitching() {
    return this.getStringAttribute('stitching');
  }
}

export class DataIosxrVrfIpv4UnicastImportRouteTargetFourByteAsFormatList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrVrfIpv4UnicastImportRouteTargetFourByteAsFormatOutputReference {
    return new DataIosxrVrfIpv4UnicastImportRouteTargetFourByteAsFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrVrfIpv4UnicastImportRouteTargetIpAddressFormat {
}

export function dataIosxrVrfIpv4UnicastImportRouteTargetIpAddressFormatToTerraform(struct?: DataIosxrVrfIpv4UnicastImportRouteTargetIpAddressFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrVrfIpv4UnicastImportRouteTargetIpAddressFormatToHclTerraform(struct?: DataIosxrVrfIpv4UnicastImportRouteTargetIpAddressFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrVrfIpv4UnicastImportRouteTargetIpAddressFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrVrfIpv4UnicastImportRouteTargetIpAddressFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrVrfIpv4UnicastImportRouteTargetIpAddressFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv4_address_index - computed: true, optional: false, required: false
  public get ipv4AddressIndex() {
    return this.getNumberAttribute('ipv4_address_index');
  }

  // stitching - computed: true, optional: false, required: false
  public get stitching() {
    return this.getStringAttribute('stitching');
  }
}

export class DataIosxrVrfIpv4UnicastImportRouteTargetIpAddressFormatList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrVrfIpv4UnicastImportRouteTargetIpAddressFormatOutputReference {
    return new DataIosxrVrfIpv4UnicastImportRouteTargetIpAddressFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrVrfIpv4UnicastImportRouteTargetTwoByteAsFormat {
}

export function dataIosxrVrfIpv4UnicastImportRouteTargetTwoByteAsFormatToTerraform(struct?: DataIosxrVrfIpv4UnicastImportRouteTargetTwoByteAsFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrVrfIpv4UnicastImportRouteTargetTwoByteAsFormatToHclTerraform(struct?: DataIosxrVrfIpv4UnicastImportRouteTargetTwoByteAsFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrVrfIpv4UnicastImportRouteTargetTwoByteAsFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrVrfIpv4UnicastImportRouteTargetTwoByteAsFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrVrfIpv4UnicastImportRouteTargetTwoByteAsFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // asn2_index - computed: true, optional: false, required: false
  public get asn2Index() {
    return this.getNumberAttribute('asn2_index');
  }

  // stitching - computed: true, optional: false, required: false
  public get stitching() {
    return this.getStringAttribute('stitching');
  }

  // two_byte_as_number - computed: true, optional: false, required: false
  public get twoByteAsNumber() {
    return this.getNumberAttribute('two_byte_as_number');
  }
}

export class DataIosxrVrfIpv4UnicastImportRouteTargetTwoByteAsFormatList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrVrfIpv4UnicastImportRouteTargetTwoByteAsFormatOutputReference {
    return new DataIosxrVrfIpv4UnicastImportRouteTargetTwoByteAsFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrVrfIpv6UnicastExportRouteTargetFourByteAsFormat {
}

export function dataIosxrVrfIpv6UnicastExportRouteTargetFourByteAsFormatToTerraform(struct?: DataIosxrVrfIpv6UnicastExportRouteTargetFourByteAsFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrVrfIpv6UnicastExportRouteTargetFourByteAsFormatToHclTerraform(struct?: DataIosxrVrfIpv6UnicastExportRouteTargetFourByteAsFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrVrfIpv6UnicastExportRouteTargetFourByteAsFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrVrfIpv6UnicastExportRouteTargetFourByteAsFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrVrfIpv6UnicastExportRouteTargetFourByteAsFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // asn4_index - computed: true, optional: false, required: false
  public get asn4Index() {
    return this.getNumberAttribute('asn4_index');
  }

  // four_byte_as_number - computed: true, optional: false, required: false
  public get fourByteAsNumber() {
    return this.getNumberAttribute('four_byte_as_number');
  }

  // stitching - computed: true, optional: false, required: false
  public get stitching() {
    return this.getStringAttribute('stitching');
  }
}

export class DataIosxrVrfIpv6UnicastExportRouteTargetFourByteAsFormatList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrVrfIpv6UnicastExportRouteTargetFourByteAsFormatOutputReference {
    return new DataIosxrVrfIpv6UnicastExportRouteTargetFourByteAsFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrVrfIpv6UnicastExportRouteTargetIpAddressFormat {
}

export function dataIosxrVrfIpv6UnicastExportRouteTargetIpAddressFormatToTerraform(struct?: DataIosxrVrfIpv6UnicastExportRouteTargetIpAddressFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrVrfIpv6UnicastExportRouteTargetIpAddressFormatToHclTerraform(struct?: DataIosxrVrfIpv6UnicastExportRouteTargetIpAddressFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrVrfIpv6UnicastExportRouteTargetIpAddressFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrVrfIpv6UnicastExportRouteTargetIpAddressFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrVrfIpv6UnicastExportRouteTargetIpAddressFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv4_address_index - computed: true, optional: false, required: false
  public get ipv4AddressIndex() {
    return this.getNumberAttribute('ipv4_address_index');
  }

  // stitching - computed: true, optional: false, required: false
  public get stitching() {
    return this.getStringAttribute('stitching');
  }
}

export class DataIosxrVrfIpv6UnicastExportRouteTargetIpAddressFormatList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrVrfIpv6UnicastExportRouteTargetIpAddressFormatOutputReference {
    return new DataIosxrVrfIpv6UnicastExportRouteTargetIpAddressFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrVrfIpv6UnicastExportRouteTargetTwoByteAsFormat {
}

export function dataIosxrVrfIpv6UnicastExportRouteTargetTwoByteAsFormatToTerraform(struct?: DataIosxrVrfIpv6UnicastExportRouteTargetTwoByteAsFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrVrfIpv6UnicastExportRouteTargetTwoByteAsFormatToHclTerraform(struct?: DataIosxrVrfIpv6UnicastExportRouteTargetTwoByteAsFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrVrfIpv6UnicastExportRouteTargetTwoByteAsFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrVrfIpv6UnicastExportRouteTargetTwoByteAsFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrVrfIpv6UnicastExportRouteTargetTwoByteAsFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // asn2_index - computed: true, optional: false, required: false
  public get asn2Index() {
    return this.getNumberAttribute('asn2_index');
  }

  // stitching - computed: true, optional: false, required: false
  public get stitching() {
    return this.getStringAttribute('stitching');
  }

  // two_byte_as_number - computed: true, optional: false, required: false
  public get twoByteAsNumber() {
    return this.getNumberAttribute('two_byte_as_number');
  }
}

export class DataIosxrVrfIpv6UnicastExportRouteTargetTwoByteAsFormatList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrVrfIpv6UnicastExportRouteTargetTwoByteAsFormatOutputReference {
    return new DataIosxrVrfIpv6UnicastExportRouteTargetTwoByteAsFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrVrfIpv6UnicastImportRouteTargetFourByteAsFormat {
}

export function dataIosxrVrfIpv6UnicastImportRouteTargetFourByteAsFormatToTerraform(struct?: DataIosxrVrfIpv6UnicastImportRouteTargetFourByteAsFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrVrfIpv6UnicastImportRouteTargetFourByteAsFormatToHclTerraform(struct?: DataIosxrVrfIpv6UnicastImportRouteTargetFourByteAsFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrVrfIpv6UnicastImportRouteTargetFourByteAsFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrVrfIpv6UnicastImportRouteTargetFourByteAsFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrVrfIpv6UnicastImportRouteTargetFourByteAsFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // asn4_index - computed: true, optional: false, required: false
  public get asn4Index() {
    return this.getNumberAttribute('asn4_index');
  }

  // four_byte_as_number - computed: true, optional: false, required: false
  public get fourByteAsNumber() {
    return this.getNumberAttribute('four_byte_as_number');
  }

  // stitching - computed: true, optional: false, required: false
  public get stitching() {
    return this.getStringAttribute('stitching');
  }
}

export class DataIosxrVrfIpv6UnicastImportRouteTargetFourByteAsFormatList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrVrfIpv6UnicastImportRouteTargetFourByteAsFormatOutputReference {
    return new DataIosxrVrfIpv6UnicastImportRouteTargetFourByteAsFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrVrfIpv6UnicastImportRouteTargetIpAddressFormat {
}

export function dataIosxrVrfIpv6UnicastImportRouteTargetIpAddressFormatToTerraform(struct?: DataIosxrVrfIpv6UnicastImportRouteTargetIpAddressFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrVrfIpv6UnicastImportRouteTargetIpAddressFormatToHclTerraform(struct?: DataIosxrVrfIpv6UnicastImportRouteTargetIpAddressFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrVrfIpv6UnicastImportRouteTargetIpAddressFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrVrfIpv6UnicastImportRouteTargetIpAddressFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrVrfIpv6UnicastImportRouteTargetIpAddressFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv4_address_index - computed: true, optional: false, required: false
  public get ipv4AddressIndex() {
    return this.getNumberAttribute('ipv4_address_index');
  }

  // stitching - computed: true, optional: false, required: false
  public get stitching() {
    return this.getStringAttribute('stitching');
  }
}

export class DataIosxrVrfIpv6UnicastImportRouteTargetIpAddressFormatList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrVrfIpv6UnicastImportRouteTargetIpAddressFormatOutputReference {
    return new DataIosxrVrfIpv6UnicastImportRouteTargetIpAddressFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrVrfIpv6UnicastImportRouteTargetTwoByteAsFormat {
}

export function dataIosxrVrfIpv6UnicastImportRouteTargetTwoByteAsFormatToTerraform(struct?: DataIosxrVrfIpv6UnicastImportRouteTargetTwoByteAsFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrVrfIpv6UnicastImportRouteTargetTwoByteAsFormatToHclTerraform(struct?: DataIosxrVrfIpv6UnicastImportRouteTargetTwoByteAsFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrVrfIpv6UnicastImportRouteTargetTwoByteAsFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrVrfIpv6UnicastImportRouteTargetTwoByteAsFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrVrfIpv6UnicastImportRouteTargetTwoByteAsFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // asn2_index - computed: true, optional: false, required: false
  public get asn2Index() {
    return this.getNumberAttribute('asn2_index');
  }

  // stitching - computed: true, optional: false, required: false
  public get stitching() {
    return this.getStringAttribute('stitching');
  }

  // two_byte_as_number - computed: true, optional: false, required: false
  public get twoByteAsNumber() {
    return this.getNumberAttribute('two_byte_as_number');
  }
}

export class DataIosxrVrfIpv6UnicastImportRouteTargetTwoByteAsFormatList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrVrfIpv6UnicastImportRouteTargetTwoByteAsFormatOutputReference {
    return new DataIosxrVrfIpv6UnicastImportRouteTargetTwoByteAsFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/vrf iosxr_vrf}
*/
export class DataIosxrVrf extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_vrf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrVrf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrVrf to import
  * @param importFromId The id of the existing DataIosxrVrf that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/vrf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrVrf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_vrf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/vrf iosxr_vrf} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrVrfConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxrVrfConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_vrf',
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
    this._vrfName = config.vrfName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // ipv4_flowspec - computed: true, optional: false, required: false
  public get ipv4Flowspec() {
    return this.getBooleanAttribute('ipv4_flowspec');
  }

  // ipv4_multicast - computed: true, optional: false, required: false
  public get ipv4Multicast() {
    return this.getBooleanAttribute('ipv4_multicast');
  }

  // ipv4_unicast - computed: true, optional: false, required: false
  public get ipv4Unicast() {
    return this.getBooleanAttribute('ipv4_unicast');
  }

  // ipv4_unicast_export_route_policy - computed: true, optional: false, required: false
  public get ipv4UnicastExportRoutePolicy() {
    return this.getStringAttribute('ipv4_unicast_export_route_policy');
  }

  // ipv4_unicast_export_route_target_four_byte_as_format - computed: true, optional: false, required: false
  private _ipv4UnicastExportRouteTargetFourByteAsFormat = new DataIosxrVrfIpv4UnicastExportRouteTargetFourByteAsFormatList(this, "ipv4_unicast_export_route_target_four_byte_as_format", false);
  public get ipv4UnicastExportRouteTargetFourByteAsFormat() {
    return this._ipv4UnicastExportRouteTargetFourByteAsFormat;
  }

  // ipv4_unicast_export_route_target_ip_address_format - computed: true, optional: false, required: false
  private _ipv4UnicastExportRouteTargetIpAddressFormat = new DataIosxrVrfIpv4UnicastExportRouteTargetIpAddressFormatList(this, "ipv4_unicast_export_route_target_ip_address_format", false);
  public get ipv4UnicastExportRouteTargetIpAddressFormat() {
    return this._ipv4UnicastExportRouteTargetIpAddressFormat;
  }

  // ipv4_unicast_export_route_target_two_byte_as_format - computed: true, optional: false, required: false
  private _ipv4UnicastExportRouteTargetTwoByteAsFormat = new DataIosxrVrfIpv4UnicastExportRouteTargetTwoByteAsFormatList(this, "ipv4_unicast_export_route_target_two_byte_as_format", false);
  public get ipv4UnicastExportRouteTargetTwoByteAsFormat() {
    return this._ipv4UnicastExportRouteTargetTwoByteAsFormat;
  }

  // ipv4_unicast_import_route_policy - computed: true, optional: false, required: false
  public get ipv4UnicastImportRoutePolicy() {
    return this.getStringAttribute('ipv4_unicast_import_route_policy');
  }

  // ipv4_unicast_import_route_target_four_byte_as_format - computed: true, optional: false, required: false
  private _ipv4UnicastImportRouteTargetFourByteAsFormat = new DataIosxrVrfIpv4UnicastImportRouteTargetFourByteAsFormatList(this, "ipv4_unicast_import_route_target_four_byte_as_format", false);
  public get ipv4UnicastImportRouteTargetFourByteAsFormat() {
    return this._ipv4UnicastImportRouteTargetFourByteAsFormat;
  }

  // ipv4_unicast_import_route_target_ip_address_format - computed: true, optional: false, required: false
  private _ipv4UnicastImportRouteTargetIpAddressFormat = new DataIosxrVrfIpv4UnicastImportRouteTargetIpAddressFormatList(this, "ipv4_unicast_import_route_target_ip_address_format", false);
  public get ipv4UnicastImportRouteTargetIpAddressFormat() {
    return this._ipv4UnicastImportRouteTargetIpAddressFormat;
  }

  // ipv4_unicast_import_route_target_two_byte_as_format - computed: true, optional: false, required: false
  private _ipv4UnicastImportRouteTargetTwoByteAsFormat = new DataIosxrVrfIpv4UnicastImportRouteTargetTwoByteAsFormatList(this, "ipv4_unicast_import_route_target_two_byte_as_format", false);
  public get ipv4UnicastImportRouteTargetTwoByteAsFormat() {
    return this._ipv4UnicastImportRouteTargetTwoByteAsFormat;
  }

  // ipv6_flowspec - computed: true, optional: false, required: false
  public get ipv6Flowspec() {
    return this.getBooleanAttribute('ipv6_flowspec');
  }

  // ipv6_multicast - computed: true, optional: false, required: false
  public get ipv6Multicast() {
    return this.getBooleanAttribute('ipv6_multicast');
  }

  // ipv6_unicast - computed: true, optional: false, required: false
  public get ipv6Unicast() {
    return this.getBooleanAttribute('ipv6_unicast');
  }

  // ipv6_unicast_export_route_policy - computed: true, optional: false, required: false
  public get ipv6UnicastExportRoutePolicy() {
    return this.getStringAttribute('ipv6_unicast_export_route_policy');
  }

  // ipv6_unicast_export_route_target_four_byte_as_format - computed: true, optional: false, required: false
  private _ipv6UnicastExportRouteTargetFourByteAsFormat = new DataIosxrVrfIpv6UnicastExportRouteTargetFourByteAsFormatList(this, "ipv6_unicast_export_route_target_four_byte_as_format", false);
  public get ipv6UnicastExportRouteTargetFourByteAsFormat() {
    return this._ipv6UnicastExportRouteTargetFourByteAsFormat;
  }

  // ipv6_unicast_export_route_target_ip_address_format - computed: true, optional: false, required: false
  private _ipv6UnicastExportRouteTargetIpAddressFormat = new DataIosxrVrfIpv6UnicastExportRouteTargetIpAddressFormatList(this, "ipv6_unicast_export_route_target_ip_address_format", false);
  public get ipv6UnicastExportRouteTargetIpAddressFormat() {
    return this._ipv6UnicastExportRouteTargetIpAddressFormat;
  }

  // ipv6_unicast_export_route_target_two_byte_as_format - computed: true, optional: false, required: false
  private _ipv6UnicastExportRouteTargetTwoByteAsFormat = new DataIosxrVrfIpv6UnicastExportRouteTargetTwoByteAsFormatList(this, "ipv6_unicast_export_route_target_two_byte_as_format", false);
  public get ipv6UnicastExportRouteTargetTwoByteAsFormat() {
    return this._ipv6UnicastExportRouteTargetTwoByteAsFormat;
  }

  // ipv6_unicast_import_route_policy - computed: true, optional: false, required: false
  public get ipv6UnicastImportRoutePolicy() {
    return this.getStringAttribute('ipv6_unicast_import_route_policy');
  }

  // ipv6_unicast_import_route_target_four_byte_as_format - computed: true, optional: false, required: false
  private _ipv6UnicastImportRouteTargetFourByteAsFormat = new DataIosxrVrfIpv6UnicastImportRouteTargetFourByteAsFormatList(this, "ipv6_unicast_import_route_target_four_byte_as_format", false);
  public get ipv6UnicastImportRouteTargetFourByteAsFormat() {
    return this._ipv6UnicastImportRouteTargetFourByteAsFormat;
  }

  // ipv6_unicast_import_route_target_ip_address_format - computed: true, optional: false, required: false
  private _ipv6UnicastImportRouteTargetIpAddressFormat = new DataIosxrVrfIpv6UnicastImportRouteTargetIpAddressFormatList(this, "ipv6_unicast_import_route_target_ip_address_format", false);
  public get ipv6UnicastImportRouteTargetIpAddressFormat() {
    return this._ipv6UnicastImportRouteTargetIpAddressFormat;
  }

  // ipv6_unicast_import_route_target_two_byte_as_format - computed: true, optional: false, required: false
  private _ipv6UnicastImportRouteTargetTwoByteAsFormat = new DataIosxrVrfIpv6UnicastImportRouteTargetTwoByteAsFormatList(this, "ipv6_unicast_import_route_target_two_byte_as_format", false);
  public get ipv6UnicastImportRouteTargetTwoByteAsFormat() {
    return this._ipv6UnicastImportRouteTargetTwoByteAsFormat;
  }

  // rd_four_byte_as_index - computed: true, optional: false, required: false
  public get rdFourByteAsIndex() {
    return this.getNumberAttribute('rd_four_byte_as_index');
  }

  // rd_four_byte_as_number - computed: true, optional: false, required: false
  public get rdFourByteAsNumber() {
    return this.getStringAttribute('rd_four_byte_as_number');
  }

  // rd_ipv4_address - computed: true, optional: false, required: false
  public get rdIpv4Address() {
    return this.getStringAttribute('rd_ipv4_address');
  }

  // rd_ipv4_address_index - computed: true, optional: false, required: false
  public get rdIpv4AddressIndex() {
    return this.getNumberAttribute('rd_ipv4_address_index');
  }

  // rd_two_byte_as_index - computed: true, optional: false, required: false
  public get rdTwoByteAsIndex() {
    return this.getNumberAttribute('rd_two_byte_as_index');
  }

  // rd_two_byte_as_number - computed: true, optional: false, required: false
  public get rdTwoByteAsNumber() {
    return this.getStringAttribute('rd_two_byte_as_number');
  }

  // vpn_id - computed: true, optional: false, required: false
  public get vpnId() {
    return this.getStringAttribute('vpn_id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
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
