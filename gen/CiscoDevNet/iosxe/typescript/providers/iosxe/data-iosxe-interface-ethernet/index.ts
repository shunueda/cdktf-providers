// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/data-sources/interface_ethernet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeInterfaceEthernetConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/data-sources/interface_ethernet#device DataIosxeInterfaceEthernet#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/data-sources/interface_ethernet#name DataIosxeInterfaceEthernet#name}
  */
  readonly name: string;
  /**
  * Interface type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/data-sources/interface_ethernet#type DataIosxeInterfaceEthernet#type}
  */
  readonly type: string;
}
export interface DataIosxeInterfaceEthernetDeviceTrackingAttachedPolicies {
}

export function dataIosxeInterfaceEthernetDeviceTrackingAttachedPoliciesToTerraform(struct?: DataIosxeInterfaceEthernetDeviceTrackingAttachedPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeInterfaceEthernetDeviceTrackingAttachedPoliciesToHclTerraform(struct?: DataIosxeInterfaceEthernetDeviceTrackingAttachedPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeInterfaceEthernetDeviceTrackingAttachedPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeInterfaceEthernetDeviceTrackingAttachedPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeInterfaceEthernetDeviceTrackingAttachedPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataIosxeInterfaceEthernetDeviceTrackingAttachedPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeInterfaceEthernetDeviceTrackingAttachedPoliciesOutputReference {
    return new DataIosxeInterfaceEthernetDeviceTrackingAttachedPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeInterfaceEthernetEvpnEthernetSegments {
}

export function dataIosxeInterfaceEthernetEvpnEthernetSegmentsToTerraform(struct?: DataIosxeInterfaceEthernetEvpnEthernetSegments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeInterfaceEthernetEvpnEthernetSegmentsToHclTerraform(struct?: DataIosxeInterfaceEthernetEvpnEthernetSegments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeInterfaceEthernetEvpnEthernetSegmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeInterfaceEthernetEvpnEthernetSegments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeInterfaceEthernetEvpnEthernetSegments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // es_value - computed: true, optional: false, required: false
  public get esValue() {
    return this.getNumberAttribute('es_value');
  }
}

export class DataIosxeInterfaceEthernetEvpnEthernetSegmentsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeInterfaceEthernetEvpnEthernetSegmentsOutputReference {
    return new DataIosxeInterfaceEthernetEvpnEthernetSegmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeInterfaceEthernetHelperAddresses {
}

export function dataIosxeInterfaceEthernetHelperAddressesToTerraform(struct?: DataIosxeInterfaceEthernetHelperAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeInterfaceEthernetHelperAddressesToHclTerraform(struct?: DataIosxeInterfaceEthernetHelperAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeInterfaceEthernetHelperAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeInterfaceEthernetHelperAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeInterfaceEthernetHelperAddresses | undefined) {
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

  // global - computed: true, optional: false, required: false
  public get global() {
    return this.getBooleanAttribute('global');
  }

  // vrf - computed: true, optional: false, required: false
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
}

export class DataIosxeInterfaceEthernetHelperAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeInterfaceEthernetHelperAddressesOutputReference {
    return new DataIosxeInterfaceEthernetHelperAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeInterfaceEthernetHoldQueues {
}

export function dataIosxeInterfaceEthernetHoldQueuesToTerraform(struct?: DataIosxeInterfaceEthernetHoldQueues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeInterfaceEthernetHoldQueuesToHclTerraform(struct?: DataIosxeInterfaceEthernetHoldQueues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeInterfaceEthernetHoldQueuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeInterfaceEthernetHoldQueues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeInterfaceEthernetHoldQueues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // queue_length - computed: true, optional: false, required: false
  public get queueLength() {
    return this.getNumberAttribute('queue_length');
  }
}

export class DataIosxeInterfaceEthernetHoldQueuesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeInterfaceEthernetHoldQueuesOutputReference {
    return new DataIosxeInterfaceEthernetHoldQueuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeInterfaceEthernetIpFlowMonitors {
}

export function dataIosxeInterfaceEthernetIpFlowMonitorsToTerraform(struct?: DataIosxeInterfaceEthernetIpFlowMonitors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeInterfaceEthernetIpFlowMonitorsToHclTerraform(struct?: DataIosxeInterfaceEthernetIpFlowMonitors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeInterfaceEthernetIpFlowMonitorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeInterfaceEthernetIpFlowMonitors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeInterfaceEthernetIpFlowMonitors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataIosxeInterfaceEthernetIpFlowMonitorsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeInterfaceEthernetIpFlowMonitorsOutputReference {
    return new DataIosxeInterfaceEthernetIpFlowMonitorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeInterfaceEthernetIpv6Addresses {
}

export function dataIosxeInterfaceEthernetIpv6AddressesToTerraform(struct?: DataIosxeInterfaceEthernetIpv6Addresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeInterfaceEthernetIpv6AddressesToHclTerraform(struct?: DataIosxeInterfaceEthernetIpv6Addresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeInterfaceEthernetIpv6AddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeInterfaceEthernetIpv6Addresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeInterfaceEthernetIpv6Addresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // eui_64 - computed: true, optional: false, required: false
  public get eui64() {
    return this.getBooleanAttribute('eui_64');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}

export class DataIosxeInterfaceEthernetIpv6AddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeInterfaceEthernetIpv6AddressesOutputReference {
    return new DataIosxeInterfaceEthernetIpv6AddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeInterfaceEthernetIpv6FlowMonitors {
}

export function dataIosxeInterfaceEthernetIpv6FlowMonitorsToTerraform(struct?: DataIosxeInterfaceEthernetIpv6FlowMonitors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeInterfaceEthernetIpv6FlowMonitorsToHclTerraform(struct?: DataIosxeInterfaceEthernetIpv6FlowMonitors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeInterfaceEthernetIpv6FlowMonitorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeInterfaceEthernetIpv6FlowMonitors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeInterfaceEthernetIpv6FlowMonitors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataIosxeInterfaceEthernetIpv6FlowMonitorsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeInterfaceEthernetIpv6FlowMonitorsOutputReference {
    return new DataIosxeInterfaceEthernetIpv6FlowMonitorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeInterfaceEthernetIpv6LinkLocalAddresses {
}

export function dataIosxeInterfaceEthernetIpv6LinkLocalAddressesToTerraform(struct?: DataIosxeInterfaceEthernetIpv6LinkLocalAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeInterfaceEthernetIpv6LinkLocalAddressesToHclTerraform(struct?: DataIosxeInterfaceEthernetIpv6LinkLocalAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeInterfaceEthernetIpv6LinkLocalAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeInterfaceEthernetIpv6LinkLocalAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeInterfaceEthernetIpv6LinkLocalAddresses | undefined) {
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

  // link_local - computed: true, optional: false, required: false
  public get linkLocal() {
    return this.getBooleanAttribute('link_local');
  }
}

export class DataIosxeInterfaceEthernetIpv6LinkLocalAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeInterfaceEthernetIpv6LinkLocalAddressesOutputReference {
    return new DataIosxeInterfaceEthernetIpv6LinkLocalAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeInterfaceEthernetServiceInstances {
}

export function dataIosxeInterfaceEthernetServiceInstancesToTerraform(struct?: DataIosxeInterfaceEthernetServiceInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeInterfaceEthernetServiceInstancesToHclTerraform(struct?: DataIosxeInterfaceEthernetServiceInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeInterfaceEthernetServiceInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeInterfaceEthernetServiceInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeInterfaceEthernetServiceInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encapsulation_untagged - computed: true, optional: false, required: false
  public get encapsulationUntagged() {
    return this.getBooleanAttribute('encapsulation_untagged');
  }

  // ethernet - computed: true, optional: false, required: false
  public get ethernet() {
    return this.getBooleanAttribute('ethernet');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }
}

export class DataIosxeInterfaceEthernetServiceInstancesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeInterfaceEthernetServiceInstancesOutputReference {
    return new DataIosxeInterfaceEthernetServiceInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeInterfaceEthernetSourceTemplate {
}

export function dataIosxeInterfaceEthernetSourceTemplateToTerraform(struct?: DataIosxeInterfaceEthernetSourceTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeInterfaceEthernetSourceTemplateToHclTerraform(struct?: DataIosxeInterfaceEthernetSourceTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeInterfaceEthernetSourceTemplateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeInterfaceEthernetSourceTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeInterfaceEthernetSourceTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // merge - computed: true, optional: false, required: false
  public get merge() {
    return this.getBooleanAttribute('merge');
  }

  // template_name - computed: true, optional: false, required: false
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
}

export class DataIosxeInterfaceEthernetSourceTemplateList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeInterfaceEthernetSourceTemplateOutputReference {
    return new DataIosxeInterfaceEthernetSourceTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/data-sources/interface_ethernet iosxe_interface_ethernet}
*/
export class DataIosxeInterfaceEthernet extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_interface_ethernet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeInterfaceEthernet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeInterfaceEthernet to import
  * @param importFromId The id of the existing DataIosxeInterfaceEthernet that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/data-sources/interface_ethernet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeInterfaceEthernet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_interface_ethernet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/data-sources/interface_ethernet iosxe_interface_ethernet} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeInterfaceEthernetConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxeInterfaceEthernetConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_interface_ethernet',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.14.4',
        providerVersionConstraint: '0.14.4'
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
    this._name = config.name;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arp_timeout - computed: true, optional: false, required: false
  public get arpTimeout() {
    return this.getNumberAttribute('arp_timeout');
  }

  // authentication_event_fail_action_authorize_vlan - computed: true, optional: false, required: false
  public get authenticationEventFailActionAuthorizeVlan() {
    return this.getNumberAttribute('authentication_event_fail_action_authorize_vlan');
  }

  // authentication_event_fail_action_next_method - computed: true, optional: false, required: false
  public get authenticationEventFailActionNextMethod() {
    return this.getBooleanAttribute('authentication_event_fail_action_next_method');
  }

  // authentication_event_linksec_fail_action_next_method - computed: true, optional: false, required: false
  public get authenticationEventLinksecFailActionNextMethod() {
    return this.getBooleanAttribute('authentication_event_linksec_fail_action_next_method');
  }

  // authentication_event_no_response_action_authorize_vlan - computed: true, optional: false, required: false
  public get authenticationEventNoResponseActionAuthorizeVlan() {
    return this.getNumberAttribute('authentication_event_no_response_action_authorize_vlan');
  }

  // authentication_event_server_alive_action_reinitialize - computed: true, optional: false, required: false
  public get authenticationEventServerAliveActionReinitialize() {
    return this.getBooleanAttribute('authentication_event_server_alive_action_reinitialize');
  }

  // authentication_event_server_dead_action_authorize - computed: true, optional: false, required: false
  public get authenticationEventServerDeadActionAuthorize() {
    return this.getBooleanAttribute('authentication_event_server_dead_action_authorize');
  }

  // authentication_event_server_dead_action_authorize_vlan - computed: true, optional: false, required: false
  public get authenticationEventServerDeadActionAuthorizeVlan() {
    return this.getNumberAttribute('authentication_event_server_dead_action_authorize_vlan');
  }

  // authentication_event_server_dead_action_authorize_voice - computed: true, optional: false, required: false
  public get authenticationEventServerDeadActionAuthorizeVoice() {
    return this.getBooleanAttribute('authentication_event_server_dead_action_authorize_voice');
  }

  // authentication_event_server_dead_action_reinitialize_vlan - computed: true, optional: false, required: false
  public get authenticationEventServerDeadActionReinitializeVlan() {
    return this.getNumberAttribute('authentication_event_server_dead_action_reinitialize_vlan');
  }

  // authentication_host_mode - computed: true, optional: false, required: false
  public get authenticationHostMode() {
    return this.getStringAttribute('authentication_host_mode');
  }

  // authentication_order_dot1x - computed: true, optional: false, required: false
  public get authenticationOrderDot1X() {
    return this.getBooleanAttribute('authentication_order_dot1x');
  }

  // authentication_order_dot1x_mab - computed: true, optional: false, required: false
  public get authenticationOrderDot1XMab() {
    return this.getBooleanAttribute('authentication_order_dot1x_mab');
  }

  // authentication_order_dot1x_webauth - computed: true, optional: false, required: false
  public get authenticationOrderDot1XWebauth() {
    return this.getBooleanAttribute('authentication_order_dot1x_webauth');
  }

  // authentication_order_mab - computed: true, optional: false, required: false
  public get authenticationOrderMab() {
    return this.getBooleanAttribute('authentication_order_mab');
  }

  // authentication_order_mab_dot1x - computed: true, optional: false, required: false
  public get authenticationOrderMabDot1X() {
    return this.getBooleanAttribute('authentication_order_mab_dot1x');
  }

  // authentication_order_mab_webauth - computed: true, optional: false, required: false
  public get authenticationOrderMabWebauth() {
    return this.getBooleanAttribute('authentication_order_mab_webauth');
  }

  // authentication_order_webauth - computed: true, optional: false, required: false
  public get authenticationOrderWebauth() {
    return this.getBooleanAttribute('authentication_order_webauth');
  }

  // authentication_periodic - computed: true, optional: false, required: false
  public get authenticationPeriodic() {
    return this.getBooleanAttribute('authentication_periodic');
  }

  // authentication_port_control - computed: true, optional: false, required: false
  public get authenticationPortControl() {
    return this.getStringAttribute('authentication_port_control');
  }

  // authentication_priority_dot1x - computed: true, optional: false, required: false
  public get authenticationPriorityDot1X() {
    return this.getBooleanAttribute('authentication_priority_dot1x');
  }

  // authentication_priority_dot1x_mab - computed: true, optional: false, required: false
  public get authenticationPriorityDot1XMab() {
    return this.getBooleanAttribute('authentication_priority_dot1x_mab');
  }

  // authentication_priority_dot1x_webauth - computed: true, optional: false, required: false
  public get authenticationPriorityDot1XWebauth() {
    return this.getBooleanAttribute('authentication_priority_dot1x_webauth');
  }

  // authentication_priority_mab - computed: true, optional: false, required: false
  public get authenticationPriorityMab() {
    return this.getBooleanAttribute('authentication_priority_mab');
  }

  // authentication_priority_mab_dot1x - computed: true, optional: false, required: false
  public get authenticationPriorityMabDot1X() {
    return this.getBooleanAttribute('authentication_priority_mab_dot1x');
  }

  // authentication_priority_mab_webauth - computed: true, optional: false, required: false
  public get authenticationPriorityMabWebauth() {
    return this.getBooleanAttribute('authentication_priority_mab_webauth');
  }

  // authentication_priority_webauth - computed: true, optional: false, required: false
  public get authenticationPriorityWebauth() {
    return this.getBooleanAttribute('authentication_priority_webauth');
  }

  // authentication_timer_reauthenticate - computed: true, optional: false, required: false
  public get authenticationTimerReauthenticate() {
    return this.getNumberAttribute('authentication_timer_reauthenticate');
  }

  // authentication_timer_reauthenticate_server - computed: true, optional: false, required: false
  public get authenticationTimerReauthenticateServer() {
    return this.getBooleanAttribute('authentication_timer_reauthenticate_server');
  }

  // auto_qos_classify - computed: true, optional: false, required: false
  public get autoQosClassify() {
    return this.getBooleanAttribute('auto_qos_classify');
  }

  // auto_qos_classify_police - computed: true, optional: false, required: false
  public get autoQosClassifyPolice() {
    return this.getBooleanAttribute('auto_qos_classify_police');
  }

  // auto_qos_trust - computed: true, optional: false, required: false
  public get autoQosTrust() {
    return this.getBooleanAttribute('auto_qos_trust');
  }

  // auto_qos_trust_cos - computed: true, optional: false, required: false
  public get autoQosTrustCos() {
    return this.getBooleanAttribute('auto_qos_trust_cos');
  }

  // auto_qos_trust_dscp - computed: true, optional: false, required: false
  public get autoQosTrustDscp() {
    return this.getBooleanAttribute('auto_qos_trust_dscp');
  }

  // auto_qos_video_cts - computed: true, optional: false, required: false
  public get autoQosVideoCts() {
    return this.getBooleanAttribute('auto_qos_video_cts');
  }

  // auto_qos_video_ip_camera - computed: true, optional: false, required: false
  public get autoQosVideoIpCamera() {
    return this.getBooleanAttribute('auto_qos_video_ip_camera');
  }

  // auto_qos_video_media_player - computed: true, optional: false, required: false
  public get autoQosVideoMediaPlayer() {
    return this.getBooleanAttribute('auto_qos_video_media_player');
  }

  // auto_qos_voip - computed: true, optional: false, required: false
  public get autoQosVoip() {
    return this.getBooleanAttribute('auto_qos_voip');
  }

  // auto_qos_voip_cisco_phone - computed: true, optional: false, required: false
  public get autoQosVoipCiscoPhone() {
    return this.getBooleanAttribute('auto_qos_voip_cisco_phone');
  }

  // auto_qos_voip_cisco_softphone - computed: true, optional: false, required: false
  public get autoQosVoipCiscoSoftphone() {
    return this.getBooleanAttribute('auto_qos_voip_cisco_softphone');
  }

  // auto_qos_voip_trust - computed: true, optional: false, required: false
  public get autoQosVoipTrust() {
    return this.getBooleanAttribute('auto_qos_voip_trust');
  }

  // bandwidth - computed: true, optional: false, required: false
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }

  // bfd_echo - computed: true, optional: false, required: false
  public get bfdEcho() {
    return this.getBooleanAttribute('bfd_echo');
  }

  // bfd_enable - computed: true, optional: false, required: false
  public get bfdEnable() {
    return this.getBooleanAttribute('bfd_enable');
  }

  // bfd_interval - computed: true, optional: false, required: false
  public get bfdInterval() {
    return this.getNumberAttribute('bfd_interval');
  }

  // bfd_interval_min_rx - computed: true, optional: false, required: false
  public get bfdIntervalMinRx() {
    return this.getNumberAttribute('bfd_interval_min_rx');
  }

  // bfd_interval_multiplier - computed: true, optional: false, required: false
  public get bfdIntervalMultiplier() {
    return this.getNumberAttribute('bfd_interval_multiplier');
  }

  // bfd_local_address - computed: true, optional: false, required: false
  public get bfdLocalAddress() {
    return this.getStringAttribute('bfd_local_address');
  }

  // bfd_template - computed: true, optional: false, required: false
  public get bfdTemplate() {
    return this.getStringAttribute('bfd_template');
  }

  // bpduguard_disable - computed: true, optional: false, required: false
  public get bpduguardDisable() {
    return this.getBooleanAttribute('bpduguard_disable');
  }

  // bpduguard_enable - computed: true, optional: false, required: false
  public get bpduguardEnable() {
    return this.getBooleanAttribute('bpduguard_enable');
  }

  // carrier_delay_msec - computed: true, optional: false, required: false
  public get carrierDelayMsec() {
    return this.getNumberAttribute('carrier_delay_msec');
  }

  // cdp_enable - computed: true, optional: false, required: false
  public get cdpEnable() {
    return this.getBooleanAttribute('cdp_enable');
  }

  // cdp_tlv_app - computed: true, optional: false, required: false
  public get cdpTlvApp() {
    return this.getBooleanAttribute('cdp_tlv_app');
  }

  // cdp_tlv_location - computed: true, optional: false, required: false
  public get cdpTlvLocation() {
    return this.getBooleanAttribute('cdp_tlv_location');
  }

  // cdp_tlv_server_location - computed: true, optional: false, required: false
  public get cdpTlvServerLocation() {
    return this.getBooleanAttribute('cdp_tlv_server_location');
  }

  // channel_group_mode - computed: true, optional: false, required: false
  public get channelGroupMode() {
    return this.getStringAttribute('channel_group_mode');
  }

  // channel_group_number - computed: true, optional: false, required: false
  public get channelGroupNumber() {
    return this.getNumberAttribute('channel_group_number');
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

  // device_tracking - computed: true, optional: false, required: false
  public get deviceTracking() {
    return this.getBooleanAttribute('device_tracking');
  }

  // device_tracking_attached_policies - computed: true, optional: false, required: false
  private _deviceTrackingAttachedPolicies = new DataIosxeInterfaceEthernetDeviceTrackingAttachedPoliciesList(this, "device_tracking_attached_policies", false);
  public get deviceTrackingAttachedPolicies() {
    return this._deviceTrackingAttachedPolicies;
  }

  // dot1x_max_reauth_req - computed: true, optional: false, required: false
  public get dot1XMaxReauthReq() {
    return this.getNumberAttribute('dot1x_max_reauth_req');
  }

  // dot1x_max_req - computed: true, optional: false, required: false
  public get dot1XMaxReq() {
    return this.getNumberAttribute('dot1x_max_req');
  }

  // dot1x_pae - computed: true, optional: false, required: false
  public get dot1XPae() {
    return this.getStringAttribute('dot1x_pae');
  }

  // dot1x_timeout_auth_period - computed: true, optional: false, required: false
  public get dot1XTimeoutAuthPeriod() {
    return this.getNumberAttribute('dot1x_timeout_auth_period');
  }

  // dot1x_timeout_held_period - computed: true, optional: false, required: false
  public get dot1XTimeoutHeldPeriod() {
    return this.getNumberAttribute('dot1x_timeout_held_period');
  }

  // dot1x_timeout_quiet_period - computed: true, optional: false, required: false
  public get dot1XTimeoutQuietPeriod() {
    return this.getNumberAttribute('dot1x_timeout_quiet_period');
  }

  // dot1x_timeout_ratelimit_period - computed: true, optional: false, required: false
  public get dot1XTimeoutRatelimitPeriod() {
    return this.getNumberAttribute('dot1x_timeout_ratelimit_period');
  }

  // dot1x_timeout_server_timeout - computed: true, optional: false, required: false
  public get dot1XTimeoutServerTimeout() {
    return this.getNumberAttribute('dot1x_timeout_server_timeout');
  }

  // dot1x_timeout_start_period - computed: true, optional: false, required: false
  public get dot1XTimeoutStartPeriod() {
    return this.getNumberAttribute('dot1x_timeout_start_period');
  }

  // dot1x_timeout_supp_timeout - computed: true, optional: false, required: false
  public get dot1XTimeoutSuppTimeout() {
    return this.getNumberAttribute('dot1x_timeout_supp_timeout');
  }

  // dot1x_timeout_tx_period - computed: true, optional: false, required: false
  public get dot1XTimeoutTxPeriod() {
    return this.getNumberAttribute('dot1x_timeout_tx_period');
  }

  // encapsulation_dot1q_vlan_id - computed: true, optional: false, required: false
  public get encapsulationDot1QVlanId() {
    return this.getNumberAttribute('encapsulation_dot1q_vlan_id');
  }

  // evpn_ethernet_segments - computed: true, optional: false, required: false
  private _evpnEthernetSegments = new DataIosxeInterfaceEthernetEvpnEthernetSegmentsList(this, "evpn_ethernet_segments", false);
  public get evpnEthernetSegments() {
    return this._evpnEthernetSegments;
  }

  // helper_addresses - computed: true, optional: false, required: false
  private _helperAddresses = new DataIosxeInterfaceEthernetHelperAddressesList(this, "helper_addresses", false);
  public get helperAddresses() {
    return this._helperAddresses;
  }

  // hold_queues - computed: true, optional: false, required: false
  private _holdQueues = new DataIosxeInterfaceEthernetHoldQueuesList(this, "hold_queues", false);
  public get holdQueues() {
    return this._holdQueues;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_access_group_in - computed: true, optional: false, required: false
  public get ipAccessGroupIn() {
    return this.getStringAttribute('ip_access_group_in');
  }

  // ip_access_group_in_enable - computed: true, optional: false, required: false
  public get ipAccessGroupInEnable() {
    return this.getBooleanAttribute('ip_access_group_in_enable');
  }

  // ip_access_group_out - computed: true, optional: false, required: false
  public get ipAccessGroupOut() {
    return this.getStringAttribute('ip_access_group_out');
  }

  // ip_access_group_out_enable - computed: true, optional: false, required: false
  public get ipAccessGroupOutEnable() {
    return this.getBooleanAttribute('ip_access_group_out_enable');
  }

  // ip_arp_inspection_limit_rate - computed: true, optional: false, required: false
  public get ipArpInspectionLimitRate() {
    return this.getNumberAttribute('ip_arp_inspection_limit_rate');
  }

  // ip_arp_inspection_trust - computed: true, optional: false, required: false
  public get ipArpInspectionTrust() {
    return this.getBooleanAttribute('ip_arp_inspection_trust');
  }

  // ip_dhcp_relay_information_option_vpn_id - computed: true, optional: false, required: false
  public get ipDhcpRelayInformationOptionVpnId() {
    return this.getBooleanAttribute('ip_dhcp_relay_information_option_vpn_id');
  }

  // ip_dhcp_relay_source_interface - computed: true, optional: false, required: false
  public get ipDhcpRelaySourceInterface() {
    return this.getStringAttribute('ip_dhcp_relay_source_interface');
  }

  // ip_dhcp_snooping_trust - computed: true, optional: false, required: false
  public get ipDhcpSnoopingTrust() {
    return this.getBooleanAttribute('ip_dhcp_snooping_trust');
  }

  // ip_flow_monitors - computed: true, optional: false, required: false
  private _ipFlowMonitors = new DataIosxeInterfaceEthernetIpFlowMonitorsList(this, "ip_flow_monitors", false);
  public get ipFlowMonitors() {
    return this._ipFlowMonitors;
  }

  // ip_igmp_version - computed: true, optional: false, required: false
  public get ipIgmpVersion() {
    return this.getNumberAttribute('ip_igmp_version');
  }

  // ip_nat_inside - computed: true, optional: false, required: false
  public get ipNatInside() {
    return this.getBooleanAttribute('ip_nat_inside');
  }

  // ip_nat_outside - computed: true, optional: false, required: false
  public get ipNatOutside() {
    return this.getBooleanAttribute('ip_nat_outside');
  }

  // ip_nbar_protocol_discovery - computed: true, optional: false, required: false
  public get ipNbarProtocolDiscovery() {
    return this.getBooleanAttribute('ip_nbar_protocol_discovery');
  }

  // ip_proxy_arp - computed: true, optional: false, required: false
  public get ipProxyArp() {
    return this.getBooleanAttribute('ip_proxy_arp');
  }

  // ip_redirects - computed: true, optional: false, required: false
  public get ipRedirects() {
    return this.getBooleanAttribute('ip_redirects');
  }

  // ip_router_isis - computed: true, optional: false, required: false
  public get ipRouterIsis() {
    return this.getStringAttribute('ip_router_isis');
  }

  // ip_unreachables - computed: true, optional: false, required: false
  public get ipUnreachables() {
    return this.getBooleanAttribute('ip_unreachables');
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv4_address_mask - computed: true, optional: false, required: false
  public get ipv4AddressMask() {
    return this.getStringAttribute('ipv4_address_mask');
  }

  // ipv6_address_autoconfig_default - computed: true, optional: false, required: false
  public get ipv6AddressAutoconfigDefault() {
    return this.getBooleanAttribute('ipv6_address_autoconfig_default');
  }

  // ipv6_address_dhcp - computed: true, optional: false, required: false
  public get ipv6AddressDhcp() {
    return this.getBooleanAttribute('ipv6_address_dhcp');
  }

  // ipv6_addresses - computed: true, optional: false, required: false
  private _ipv6Addresses = new DataIosxeInterfaceEthernetIpv6AddressesList(this, "ipv6_addresses", false);
  public get ipv6Addresses() {
    return this._ipv6Addresses;
  }

  // ipv6_enable - computed: true, optional: false, required: false
  public get ipv6Enable() {
    return this.getBooleanAttribute('ipv6_enable');
  }

  // ipv6_flow_monitors - computed: true, optional: false, required: false
  private _ipv6FlowMonitors = new DataIosxeInterfaceEthernetIpv6FlowMonitorsList(this, "ipv6_flow_monitors", false);
  public get ipv6FlowMonitors() {
    return this._ipv6FlowMonitors;
  }

  // ipv6_link_local_addresses - computed: true, optional: false, required: false
  private _ipv6LinkLocalAddresses = new DataIosxeInterfaceEthernetIpv6LinkLocalAddressesList(this, "ipv6_link_local_addresses", false);
  public get ipv6LinkLocalAddresses() {
    return this._ipv6LinkLocalAddresses;
  }

  // ipv6_mtu - computed: true, optional: false, required: false
  public get ipv6Mtu() {
    return this.getNumberAttribute('ipv6_mtu');
  }

  // ipv6_nd_ra_suppress_all - computed: true, optional: false, required: false
  public get ipv6NdRaSuppressAll() {
    return this.getBooleanAttribute('ipv6_nd_ra_suppress_all');
  }

  // load_interval - computed: true, optional: false, required: false
  public get loadInterval() {
    return this.getNumberAttribute('load_interval');
  }

  // logging_event_link_status_enable - computed: true, optional: false, required: false
  public get loggingEventLinkStatusEnable() {
    return this.getBooleanAttribute('logging_event_link_status_enable');
  }

  // mab - computed: true, optional: false, required: false
  public get mab() {
    return this.getBooleanAttribute('mab');
  }

  // mab_eap - computed: true, optional: false, required: false
  public get mabEap() {
    return this.getBooleanAttribute('mab_eap');
  }

  // media_type - computed: true, optional: false, required: false
  public get mediaType() {
    return this.getStringAttribute('media_type');
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
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

  // negotiation_auto - computed: true, optional: false, required: false
  public get negotiationAuto() {
    return this.getBooleanAttribute('negotiation_auto');
  }

  // service_instances - computed: true, optional: false, required: false
  private _serviceInstances = new DataIosxeInterfaceEthernetServiceInstancesList(this, "service_instances", false);
  public get serviceInstances() {
    return this._serviceInstances;
  }

  // service_policy_input - computed: true, optional: false, required: false
  public get servicePolicyInput() {
    return this.getStringAttribute('service_policy_input');
  }

  // service_policy_output - computed: true, optional: false, required: false
  public get servicePolicyOutput() {
    return this.getStringAttribute('service_policy_output');
  }

  // shutdown - computed: true, optional: false, required: false
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }

  // snmp_trap_link_status - computed: true, optional: false, required: false
  public get snmpTrapLinkStatus() {
    return this.getBooleanAttribute('snmp_trap_link_status');
  }

  // source_template - computed: true, optional: false, required: false
  private _sourceTemplate = new DataIosxeInterfaceEthernetSourceTemplateList(this, "source_template", false);
  public get sourceTemplate() {
    return this._sourceTemplate;
  }

  // spanning_tree_guard - computed: true, optional: false, required: false
  public get spanningTreeGuard() {
    return this.getStringAttribute('spanning_tree_guard');
  }

  // spanning_tree_link_type - computed: true, optional: false, required: false
  public get spanningTreeLinkType() {
    return this.getStringAttribute('spanning_tree_link_type');
  }

  // spanning_tree_portfast - computed: true, optional: false, required: false
  public get spanningTreePortfast() {
    return this.getBooleanAttribute('spanning_tree_portfast');
  }

  // spanning_tree_portfast_disable - computed: true, optional: false, required: false
  public get spanningTreePortfastDisable() {
    return this.getBooleanAttribute('spanning_tree_portfast_disable');
  }

  // spanning_tree_portfast_edge - computed: true, optional: false, required: false
  public get spanningTreePortfastEdge() {
    return this.getBooleanAttribute('spanning_tree_portfast_edge');
  }

  // spanning_tree_portfast_trunk - computed: true, optional: false, required: false
  public get spanningTreePortfastTrunk() {
    return this.getBooleanAttribute('spanning_tree_portfast_trunk');
  }

  // speed_100 - computed: true, optional: false, required: false
  public get speed100() {
    return this.getBooleanAttribute('speed_100');
  }

  // speed_1000 - computed: true, optional: false, required: false
  public get speed1000() {
    return this.getBooleanAttribute('speed_1000');
  }

  // speed_10000 - computed: true, optional: false, required: false
  public get speed10000() {
    return this.getBooleanAttribute('speed_10000');
  }

  // speed_100000 - computed: true, optional: false, required: false
  public get speed100000() {
    return this.getBooleanAttribute('speed_100000');
  }

  // speed_2500 - computed: true, optional: false, required: false
  public get speed2500() {
    return this.getBooleanAttribute('speed_2500');
  }

  // speed_25000 - computed: true, optional: false, required: false
  public get speed25000() {
    return this.getBooleanAttribute('speed_25000');
  }

  // speed_40000 - computed: true, optional: false, required: false
  public get speed40000() {
    return this.getBooleanAttribute('speed_40000');
  }

  // speed_5000 - computed: true, optional: false, required: false
  public get speed5000() {
    return this.getBooleanAttribute('speed_5000');
  }

  // speed_nonegotiate - computed: true, optional: false, required: false
  public get speedNonegotiate() {
    return this.getBooleanAttribute('speed_nonegotiate');
  }

  // switchport - computed: true, optional: false, required: false
  public get switchport() {
    return this.getBooleanAttribute('switchport');
  }

  // trust_device - computed: true, optional: false, required: false
  public get trustDevice() {
    return this.getStringAttribute('trust_device');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unnumbered - computed: true, optional: false, required: false
  public get unnumbered() {
    return this.getStringAttribute('unnumbered');
  }

  // vrf_forwarding - computed: true, optional: false, required: false
  public get vrfForwarding() {
    return this.getStringAttribute('vrf_forwarding');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
