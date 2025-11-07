// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/evpn_segment_routing_srv6_evi
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrEvpnSegmentRoutingSrv6EviConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/evpn_segment_routing_srv6_evi#device DataIosxrEvpnSegmentRoutingSrv6Evi#device}
  */
  readonly device?: string;
  /**
  * Configure EVPN Instance VPN ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/evpn_segment_routing_srv6_evi#vpn_id DataIosxrEvpnSegmentRoutingSrv6Evi#vpn_id}
  */
  readonly vpnId: number;
}
export interface DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetExportFourByteAsFormat {
}

export function dataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetExportFourByteAsFormatToTerraform(struct?: DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetExportFourByteAsFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetExportFourByteAsFormatToHclTerraform(struct?: DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetExportFourByteAsFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetExportFourByteAsFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetExportFourByteAsFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetExportFourByteAsFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // as_number - computed: true, optional: false, required: false
  public get asNumber() {
    return this.getNumberAttribute('as_number');
  }

  // assigned_number - computed: true, optional: false, required: false
  public get assignedNumber() {
    return this.getNumberAttribute('assigned_number');
  }
}

export class DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetExportFourByteAsFormatList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetExportFourByteAsFormatOutputReference {
    return new DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetExportFourByteAsFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetExportIpv4AddressFormat {
}

export function dataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetExportIpv4AddressFormatToTerraform(struct?: DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetExportIpv4AddressFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetExportIpv4AddressFormatToHclTerraform(struct?: DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetExportIpv4AddressFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetExportIpv4AddressFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetExportIpv4AddressFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetExportIpv4AddressFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assigned_number - computed: true, optional: false, required: false
  public get assignedNumber() {
    return this.getNumberAttribute('assigned_number');
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
}

export class DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetExportIpv4AddressFormatList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetExportIpv4AddressFormatOutputReference {
    return new DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetExportIpv4AddressFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetExportTwoByteAsFormat {
}

export function dataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetExportTwoByteAsFormatToTerraform(struct?: DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetExportTwoByteAsFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetExportTwoByteAsFormatToHclTerraform(struct?: DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetExportTwoByteAsFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetExportTwoByteAsFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetExportTwoByteAsFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetExportTwoByteAsFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // as_number - computed: true, optional: false, required: false
  public get asNumber() {
    return this.getNumberAttribute('as_number');
  }

  // assigned_number - computed: true, optional: false, required: false
  public get assignedNumber() {
    return this.getNumberAttribute('assigned_number');
  }
}

export class DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetExportTwoByteAsFormatList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetExportTwoByteAsFormatOutputReference {
    return new DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetExportTwoByteAsFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetImportFourByteAsFormat {
}

export function dataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetImportFourByteAsFormatToTerraform(struct?: DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetImportFourByteAsFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetImportFourByteAsFormatToHclTerraform(struct?: DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetImportFourByteAsFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetImportFourByteAsFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetImportFourByteAsFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetImportFourByteAsFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // as_number - computed: true, optional: false, required: false
  public get asNumber() {
    return this.getNumberAttribute('as_number');
  }

  // assigned_number - computed: true, optional: false, required: false
  public get assignedNumber() {
    return this.getNumberAttribute('assigned_number');
  }
}

export class DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetImportFourByteAsFormatList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetImportFourByteAsFormatOutputReference {
    return new DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetImportFourByteAsFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetImportIpv4AddressFormat {
}

export function dataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetImportIpv4AddressFormatToTerraform(struct?: DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetImportIpv4AddressFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetImportIpv4AddressFormatToHclTerraform(struct?: DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetImportIpv4AddressFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetImportIpv4AddressFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetImportIpv4AddressFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetImportIpv4AddressFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assigned_number - computed: true, optional: false, required: false
  public get assignedNumber() {
    return this.getNumberAttribute('assigned_number');
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
}

export class DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetImportIpv4AddressFormatList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetImportIpv4AddressFormatOutputReference {
    return new DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetImportIpv4AddressFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetImportTwoByteAsFormat {
}

export function dataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetImportTwoByteAsFormatToTerraform(struct?: DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetImportTwoByteAsFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetImportTwoByteAsFormatToHclTerraform(struct?: DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetImportTwoByteAsFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetImportTwoByteAsFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetImportTwoByteAsFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetImportTwoByteAsFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // as_number - computed: true, optional: false, required: false
  public get asNumber() {
    return this.getNumberAttribute('as_number');
  }

  // assigned_number - computed: true, optional: false, required: false
  public get assignedNumber() {
    return this.getNumberAttribute('assigned_number');
  }
}

export class DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetImportTwoByteAsFormatList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetImportTwoByteAsFormatOutputReference {
    return new DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetImportTwoByteAsFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrEvpnSegmentRoutingSrv6EviLocators {
}

export function dataIosxrEvpnSegmentRoutingSrv6EviLocatorsToTerraform(struct?: DataIosxrEvpnSegmentRoutingSrv6EviLocators): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrEvpnSegmentRoutingSrv6EviLocatorsToHclTerraform(struct?: DataIosxrEvpnSegmentRoutingSrv6EviLocators): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrEvpnSegmentRoutingSrv6EviLocatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrEvpnSegmentRoutingSrv6EviLocators | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrEvpnSegmentRoutingSrv6EviLocators | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // locator_name - computed: true, optional: false, required: false
  public get locatorName() {
    return this.getStringAttribute('locator_name');
  }

  // usid_allocation_wide_local_id_block - computed: true, optional: false, required: false
  public get usidAllocationWideLocalIdBlock() {
    return this.getBooleanAttribute('usid_allocation_wide_local_id_block');
  }
}

export class DataIosxrEvpnSegmentRoutingSrv6EviLocatorsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrEvpnSegmentRoutingSrv6EviLocatorsOutputReference {
    return new DataIosxrEvpnSegmentRoutingSrv6EviLocatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/evpn_segment_routing_srv6_evi iosxr_evpn_segment_routing_srv6_evi}
*/
export class DataIosxrEvpnSegmentRoutingSrv6Evi extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_evpn_segment_routing_srv6_evi";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrEvpnSegmentRoutingSrv6Evi resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrEvpnSegmentRoutingSrv6Evi to import
  * @param importFromId The id of the existing DataIosxrEvpnSegmentRoutingSrv6Evi that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/evpn_segment_routing_srv6_evi#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrEvpnSegmentRoutingSrv6Evi to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_evpn_segment_routing_srv6_evi", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/evpn_segment_routing_srv6_evi iosxr_evpn_segment_routing_srv6_evi} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrEvpnSegmentRoutingSrv6EviConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxrEvpnSegmentRoutingSrv6EviConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_evpn_segment_routing_srv6_evi',
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
    this._vpnId = config.vpnId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advertise_mac - computed: true, optional: false, required: false
  public get advertiseMac() {
    return this.getBooleanAttribute('advertise_mac');
  }

  // bgp_route_target_export_four_byte_as_format - computed: true, optional: false, required: false
  private _bgpRouteTargetExportFourByteAsFormat = new DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetExportFourByteAsFormatList(this, "bgp_route_target_export_four_byte_as_format", false);
  public get bgpRouteTargetExportFourByteAsFormat() {
    return this._bgpRouteTargetExportFourByteAsFormat;
  }

  // bgp_route_target_export_ipv4_address_format - computed: true, optional: false, required: false
  private _bgpRouteTargetExportIpv4AddressFormat = new DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetExportIpv4AddressFormatList(this, "bgp_route_target_export_ipv4_address_format", false);
  public get bgpRouteTargetExportIpv4AddressFormat() {
    return this._bgpRouteTargetExportIpv4AddressFormat;
  }

  // bgp_route_target_export_two_byte_as_format - computed: true, optional: false, required: false
  private _bgpRouteTargetExportTwoByteAsFormat = new DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetExportTwoByteAsFormatList(this, "bgp_route_target_export_two_byte_as_format", false);
  public get bgpRouteTargetExportTwoByteAsFormat() {
    return this._bgpRouteTargetExportTwoByteAsFormat;
  }

  // bgp_route_target_import_four_byte_as_format - computed: true, optional: false, required: false
  private _bgpRouteTargetImportFourByteAsFormat = new DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetImportFourByteAsFormatList(this, "bgp_route_target_import_four_byte_as_format", false);
  public get bgpRouteTargetImportFourByteAsFormat() {
    return this._bgpRouteTargetImportFourByteAsFormat;
  }

  // bgp_route_target_import_ipv4_address_format - computed: true, optional: false, required: false
  private _bgpRouteTargetImportIpv4AddressFormat = new DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetImportIpv4AddressFormatList(this, "bgp_route_target_import_ipv4_address_format", false);
  public get bgpRouteTargetImportIpv4AddressFormat() {
    return this._bgpRouteTargetImportIpv4AddressFormat;
  }

  // bgp_route_target_import_two_byte_as_format - computed: true, optional: false, required: false
  private _bgpRouteTargetImportTwoByteAsFormat = new DataIosxrEvpnSegmentRoutingSrv6EviBgpRouteTargetImportTwoByteAsFormatList(this, "bgp_route_target_import_two_byte_as_format", false);
  public get bgpRouteTargetImportTwoByteAsFormat() {
    return this._bgpRouteTargetImportTwoByteAsFormat;
  }

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

  // locators - computed: true, optional: false, required: false
  private _locators = new DataIosxrEvpnSegmentRoutingSrv6EviLocatorsList(this, "locators", false);
  public get locators() {
    return this._locators;
  }

  // vpn_id - computed: false, optional: false, required: true
  private _vpnId?: number; 
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }
  public set vpnId(value: number) {
    this._vpnId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIdInput() {
    return this._vpnId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      vpn_id: cdktf.numberToTerraform(this._vpnId),
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
      vpn_id: {
        value: cdktf.numberToHclTerraform(this._vpnId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
