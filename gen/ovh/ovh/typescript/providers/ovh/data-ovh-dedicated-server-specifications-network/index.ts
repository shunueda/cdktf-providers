// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/dedicated_server_specifications_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOvhDedicatedServerSpecificationsNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * The internal name of your dedicated server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/dedicated_server_specifications_network#service_name DataOvhDedicatedServerSpecificationsNetwork#service_name}
  */
  readonly serviceName: string;
}
export interface DataOvhDedicatedServerSpecificationsNetworkBandwidthInternetToOvh {
}

export function dataOvhDedicatedServerSpecificationsNetworkBandwidthInternetToOvhToTerraform(struct?: DataOvhDedicatedServerSpecificationsNetworkBandwidthInternetToOvh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOvhDedicatedServerSpecificationsNetworkBandwidthInternetToOvhToHclTerraform(struct?: DataOvhDedicatedServerSpecificationsNetworkBandwidthInternetToOvh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOvhDedicatedServerSpecificationsNetworkBandwidthInternetToOvhOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOvhDedicatedServerSpecificationsNetworkBandwidthInternetToOvh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhDedicatedServerSpecificationsNetworkBandwidthInternetToOvh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataOvhDedicatedServerSpecificationsNetworkBandwidthOvhToInternet {
}

export function dataOvhDedicatedServerSpecificationsNetworkBandwidthOvhToInternetToTerraform(struct?: DataOvhDedicatedServerSpecificationsNetworkBandwidthOvhToInternet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOvhDedicatedServerSpecificationsNetworkBandwidthOvhToInternetToHclTerraform(struct?: DataOvhDedicatedServerSpecificationsNetworkBandwidthOvhToInternet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOvhDedicatedServerSpecificationsNetworkBandwidthOvhToInternetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOvhDedicatedServerSpecificationsNetworkBandwidthOvhToInternet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhDedicatedServerSpecificationsNetworkBandwidthOvhToInternet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataOvhDedicatedServerSpecificationsNetworkBandwidthOvhToOvh {
}

export function dataOvhDedicatedServerSpecificationsNetworkBandwidthOvhToOvhToTerraform(struct?: DataOvhDedicatedServerSpecificationsNetworkBandwidthOvhToOvh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOvhDedicatedServerSpecificationsNetworkBandwidthOvhToOvhToHclTerraform(struct?: DataOvhDedicatedServerSpecificationsNetworkBandwidthOvhToOvh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOvhDedicatedServerSpecificationsNetworkBandwidthOvhToOvhOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOvhDedicatedServerSpecificationsNetworkBandwidthOvhToOvh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhDedicatedServerSpecificationsNetworkBandwidthOvhToOvh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataOvhDedicatedServerSpecificationsNetworkBandwidth {
}

export function dataOvhDedicatedServerSpecificationsNetworkBandwidthToTerraform(struct?: DataOvhDedicatedServerSpecificationsNetworkBandwidth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOvhDedicatedServerSpecificationsNetworkBandwidthToHclTerraform(struct?: DataOvhDedicatedServerSpecificationsNetworkBandwidth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOvhDedicatedServerSpecificationsNetworkBandwidthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOvhDedicatedServerSpecificationsNetworkBandwidth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhDedicatedServerSpecificationsNetworkBandwidth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // internet_to_ovh - computed: true, optional: false, required: false
  private _internetToOvh = new DataOvhDedicatedServerSpecificationsNetworkBandwidthInternetToOvhOutputReference(this, "internet_to_ovh");
  public get internetToOvh() {
    return this._internetToOvh;
  }

  // ovh_to_internet - computed: true, optional: false, required: false
  private _ovhToInternet = new DataOvhDedicatedServerSpecificationsNetworkBandwidthOvhToInternetOutputReference(this, "ovh_to_internet");
  public get ovhToInternet() {
    return this._ovhToInternet;
  }

  // ovh_to_ovh - computed: true, optional: false, required: false
  private _ovhToOvh = new DataOvhDedicatedServerSpecificationsNetworkBandwidthOvhToOvhOutputReference(this, "ovh_to_ovh");
  public get ovhToOvh() {
    return this._ovhToOvh;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataOvhDedicatedServerSpecificationsNetworkConnectionVal {
}

export function dataOvhDedicatedServerSpecificationsNetworkConnectionValToTerraform(struct?: DataOvhDedicatedServerSpecificationsNetworkConnectionVal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOvhDedicatedServerSpecificationsNetworkConnectionValToHclTerraform(struct?: DataOvhDedicatedServerSpecificationsNetworkConnectionVal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOvhDedicatedServerSpecificationsNetworkConnectionValOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOvhDedicatedServerSpecificationsNetworkConnectionVal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhDedicatedServerSpecificationsNetworkConnectionVal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataOvhDedicatedServerSpecificationsNetworkOlaAvailableModesInterfaces {
}

export function dataOvhDedicatedServerSpecificationsNetworkOlaAvailableModesInterfacesToTerraform(struct?: DataOvhDedicatedServerSpecificationsNetworkOlaAvailableModesInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOvhDedicatedServerSpecificationsNetworkOlaAvailableModesInterfacesToHclTerraform(struct?: DataOvhDedicatedServerSpecificationsNetworkOlaAvailableModesInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOvhDedicatedServerSpecificationsNetworkOlaAvailableModesInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOvhDedicatedServerSpecificationsNetworkOlaAvailableModesInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhDedicatedServerSpecificationsNetworkOlaAvailableModesInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation - computed: true, optional: false, required: false
  public get aggregation() {
    return this.getBooleanAttribute('aggregation');
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOvhDedicatedServerSpecificationsNetworkOlaAvailableModesInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataOvhDedicatedServerSpecificationsNetworkOlaAvailableModesInterfacesOutputReference {
    return new DataOvhDedicatedServerSpecificationsNetworkOlaAvailableModesInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOvhDedicatedServerSpecificationsNetworkOlaAvailableModes {
}

export function dataOvhDedicatedServerSpecificationsNetworkOlaAvailableModesToTerraform(struct?: DataOvhDedicatedServerSpecificationsNetworkOlaAvailableModes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOvhDedicatedServerSpecificationsNetworkOlaAvailableModesToHclTerraform(struct?: DataOvhDedicatedServerSpecificationsNetworkOlaAvailableModes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOvhDedicatedServerSpecificationsNetworkOlaAvailableModesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOvhDedicatedServerSpecificationsNetworkOlaAvailableModes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhDedicatedServerSpecificationsNetworkOlaAvailableModes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new DataOvhDedicatedServerSpecificationsNetworkOlaAvailableModesInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataOvhDedicatedServerSpecificationsNetworkOlaAvailableModesList extends cdktf.ComplexList {

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
  public get(index: number): DataOvhDedicatedServerSpecificationsNetworkOlaAvailableModesOutputReference {
    return new DataOvhDedicatedServerSpecificationsNetworkOlaAvailableModesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOvhDedicatedServerSpecificationsNetworkOla {
}

export function dataOvhDedicatedServerSpecificationsNetworkOlaToTerraform(struct?: DataOvhDedicatedServerSpecificationsNetworkOla): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOvhDedicatedServerSpecificationsNetworkOlaToHclTerraform(struct?: DataOvhDedicatedServerSpecificationsNetworkOla): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOvhDedicatedServerSpecificationsNetworkOlaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOvhDedicatedServerSpecificationsNetworkOla | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhDedicatedServerSpecificationsNetworkOla | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available - computed: true, optional: false, required: false
  public get available() {
    return this.getBooleanAttribute('available');
  }

  // available_modes - computed: true, optional: false, required: false
  private _availableModes = new DataOvhDedicatedServerSpecificationsNetworkOlaAvailableModesList(this, "available_modes", false);
  public get availableModes() {
    return this._availableModes;
  }

  // supported_modes - computed: true, optional: false, required: false
  public get supportedModes() {
    return this.getListAttribute('supported_modes');
  }
}
export interface DataOvhDedicatedServerSpecificationsNetworkRoutingIpv4 {
}

export function dataOvhDedicatedServerSpecificationsNetworkRoutingIpv4ToTerraform(struct?: DataOvhDedicatedServerSpecificationsNetworkRoutingIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOvhDedicatedServerSpecificationsNetworkRoutingIpv4ToHclTerraform(struct?: DataOvhDedicatedServerSpecificationsNetworkRoutingIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOvhDedicatedServerSpecificationsNetworkRoutingIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOvhDedicatedServerSpecificationsNetworkRoutingIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhDedicatedServerSpecificationsNetworkRoutingIpv4 | undefined) {
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

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }
}
export interface DataOvhDedicatedServerSpecificationsNetworkRoutingIpv6 {
}

export function dataOvhDedicatedServerSpecificationsNetworkRoutingIpv6ToTerraform(struct?: DataOvhDedicatedServerSpecificationsNetworkRoutingIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOvhDedicatedServerSpecificationsNetworkRoutingIpv6ToHclTerraform(struct?: DataOvhDedicatedServerSpecificationsNetworkRoutingIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOvhDedicatedServerSpecificationsNetworkRoutingIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOvhDedicatedServerSpecificationsNetworkRoutingIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhDedicatedServerSpecificationsNetworkRoutingIpv6 | undefined) {
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

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }
}
export interface DataOvhDedicatedServerSpecificationsNetworkRouting {
}

export function dataOvhDedicatedServerSpecificationsNetworkRoutingToTerraform(struct?: DataOvhDedicatedServerSpecificationsNetworkRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOvhDedicatedServerSpecificationsNetworkRoutingToHclTerraform(struct?: DataOvhDedicatedServerSpecificationsNetworkRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOvhDedicatedServerSpecificationsNetworkRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOvhDedicatedServerSpecificationsNetworkRouting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhDedicatedServerSpecificationsNetworkRouting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataOvhDedicatedServerSpecificationsNetworkRoutingIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new DataOvhDedicatedServerSpecificationsNetworkRoutingIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
}
export interface DataOvhDedicatedServerSpecificationsNetworkSwitching {
}

export function dataOvhDedicatedServerSpecificationsNetworkSwitchingToTerraform(struct?: DataOvhDedicatedServerSpecificationsNetworkSwitching): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOvhDedicatedServerSpecificationsNetworkSwitchingToHclTerraform(struct?: DataOvhDedicatedServerSpecificationsNetworkSwitching): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOvhDedicatedServerSpecificationsNetworkSwitchingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOvhDedicatedServerSpecificationsNetworkSwitching | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhDedicatedServerSpecificationsNetworkSwitching | undefined) {
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
export interface DataOvhDedicatedServerSpecificationsNetworkTrafficInputQuotaSize {
}

export function dataOvhDedicatedServerSpecificationsNetworkTrafficInputQuotaSizeToTerraform(struct?: DataOvhDedicatedServerSpecificationsNetworkTrafficInputQuotaSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOvhDedicatedServerSpecificationsNetworkTrafficInputQuotaSizeToHclTerraform(struct?: DataOvhDedicatedServerSpecificationsNetworkTrafficInputQuotaSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOvhDedicatedServerSpecificationsNetworkTrafficInputQuotaSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOvhDedicatedServerSpecificationsNetworkTrafficInputQuotaSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhDedicatedServerSpecificationsNetworkTrafficInputQuotaSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataOvhDedicatedServerSpecificationsNetworkTrafficInputQuotaUsed {
}

export function dataOvhDedicatedServerSpecificationsNetworkTrafficInputQuotaUsedToTerraform(struct?: DataOvhDedicatedServerSpecificationsNetworkTrafficInputQuotaUsed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOvhDedicatedServerSpecificationsNetworkTrafficInputQuotaUsedToHclTerraform(struct?: DataOvhDedicatedServerSpecificationsNetworkTrafficInputQuotaUsed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOvhDedicatedServerSpecificationsNetworkTrafficInputQuotaUsedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOvhDedicatedServerSpecificationsNetworkTrafficInputQuotaUsed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhDedicatedServerSpecificationsNetworkTrafficInputQuotaUsed | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataOvhDedicatedServerSpecificationsNetworkTrafficOutputQuotaSize {
}

export function dataOvhDedicatedServerSpecificationsNetworkTrafficOutputQuotaSizeToTerraform(struct?: DataOvhDedicatedServerSpecificationsNetworkTrafficOutputQuotaSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOvhDedicatedServerSpecificationsNetworkTrafficOutputQuotaSizeToHclTerraform(struct?: DataOvhDedicatedServerSpecificationsNetworkTrafficOutputQuotaSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOvhDedicatedServerSpecificationsNetworkTrafficOutputQuotaSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOvhDedicatedServerSpecificationsNetworkTrafficOutputQuotaSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhDedicatedServerSpecificationsNetworkTrafficOutputQuotaSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataOvhDedicatedServerSpecificationsNetworkTrafficOutputQuotaUsed {
}

export function dataOvhDedicatedServerSpecificationsNetworkTrafficOutputQuotaUsedToTerraform(struct?: DataOvhDedicatedServerSpecificationsNetworkTrafficOutputQuotaUsed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOvhDedicatedServerSpecificationsNetworkTrafficOutputQuotaUsedToHclTerraform(struct?: DataOvhDedicatedServerSpecificationsNetworkTrafficOutputQuotaUsed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOvhDedicatedServerSpecificationsNetworkTrafficOutputQuotaUsedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOvhDedicatedServerSpecificationsNetworkTrafficOutputQuotaUsed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhDedicatedServerSpecificationsNetworkTrafficOutputQuotaUsed | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataOvhDedicatedServerSpecificationsNetworkTraffic {
}

export function dataOvhDedicatedServerSpecificationsNetworkTrafficToTerraform(struct?: DataOvhDedicatedServerSpecificationsNetworkTraffic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOvhDedicatedServerSpecificationsNetworkTrafficToHclTerraform(struct?: DataOvhDedicatedServerSpecificationsNetworkTraffic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOvhDedicatedServerSpecificationsNetworkTrafficOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOvhDedicatedServerSpecificationsNetworkTraffic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhDedicatedServerSpecificationsNetworkTraffic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // input_quota_size - computed: true, optional: false, required: false
  private _inputQuotaSize = new DataOvhDedicatedServerSpecificationsNetworkTrafficInputQuotaSizeOutputReference(this, "input_quota_size");
  public get inputQuotaSize() {
    return this._inputQuotaSize;
  }

  // input_quota_used - computed: true, optional: false, required: false
  private _inputQuotaUsed = new DataOvhDedicatedServerSpecificationsNetworkTrafficInputQuotaUsedOutputReference(this, "input_quota_used");
  public get inputQuotaUsed() {
    return this._inputQuotaUsed;
  }

  // is_throttled - computed: true, optional: false, required: false
  public get isThrottled() {
    return this.getBooleanAttribute('is_throttled');
  }

  // output_quota_size - computed: true, optional: false, required: false
  private _outputQuotaSize = new DataOvhDedicatedServerSpecificationsNetworkTrafficOutputQuotaSizeOutputReference(this, "output_quota_size");
  public get outputQuotaSize() {
    return this._outputQuotaSize;
  }

  // output_quota_used - computed: true, optional: false, required: false
  private _outputQuotaUsed = new DataOvhDedicatedServerSpecificationsNetworkTrafficOutputQuotaUsedOutputReference(this, "output_quota_used");
  public get outputQuotaUsed() {
    return this._outputQuotaUsed;
  }

  // reset_quota_date - computed: true, optional: false, required: false
  public get resetQuotaDate() {
    return this.getStringAttribute('reset_quota_date');
  }
}
export interface DataOvhDedicatedServerSpecificationsNetworkVmac {
}

export function dataOvhDedicatedServerSpecificationsNetworkVmacToTerraform(struct?: DataOvhDedicatedServerSpecificationsNetworkVmac): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOvhDedicatedServerSpecificationsNetworkVmacToHclTerraform(struct?: DataOvhDedicatedServerSpecificationsNetworkVmac): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOvhDedicatedServerSpecificationsNetworkVmacOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOvhDedicatedServerSpecificationsNetworkVmac | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhDedicatedServerSpecificationsNetworkVmac | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // supported - computed: true, optional: false, required: false
  public get supported() {
    return this.getBooleanAttribute('supported');
  }
}
export interface DataOvhDedicatedServerSpecificationsNetworkVrackBandwidth {
}

export function dataOvhDedicatedServerSpecificationsNetworkVrackBandwidthToTerraform(struct?: DataOvhDedicatedServerSpecificationsNetworkVrackBandwidth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOvhDedicatedServerSpecificationsNetworkVrackBandwidthToHclTerraform(struct?: DataOvhDedicatedServerSpecificationsNetworkVrackBandwidth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOvhDedicatedServerSpecificationsNetworkVrackBandwidthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOvhDedicatedServerSpecificationsNetworkVrackBandwidth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhDedicatedServerSpecificationsNetworkVrackBandwidth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataOvhDedicatedServerSpecificationsNetworkVrack {
}

export function dataOvhDedicatedServerSpecificationsNetworkVrackToTerraform(struct?: DataOvhDedicatedServerSpecificationsNetworkVrack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOvhDedicatedServerSpecificationsNetworkVrackToHclTerraform(struct?: DataOvhDedicatedServerSpecificationsNetworkVrack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOvhDedicatedServerSpecificationsNetworkVrackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOvhDedicatedServerSpecificationsNetworkVrack | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhDedicatedServerSpecificationsNetworkVrack | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bandwidth - computed: true, optional: false, required: false
  private _bandwidth = new DataOvhDedicatedServerSpecificationsNetworkVrackBandwidthOutputReference(this, "bandwidth");
  public get bandwidth() {
    return this._bandwidth;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/dedicated_server_specifications_network ovh_dedicated_server_specifications_network}
*/
export class DataOvhDedicatedServerSpecificationsNetwork extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_dedicated_server_specifications_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOvhDedicatedServerSpecificationsNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOvhDedicatedServerSpecificationsNetwork to import
  * @param importFromId The id of the existing DataOvhDedicatedServerSpecificationsNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/dedicated_server_specifications_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOvhDedicatedServerSpecificationsNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_dedicated_server_specifications_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/dedicated_server_specifications_network ovh_dedicated_server_specifications_network} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOvhDedicatedServerSpecificationsNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: DataOvhDedicatedServerSpecificationsNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_dedicated_server_specifications_network',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.9.0',
        providerVersionConstraint: '2.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._serviceName = config.serviceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth - computed: true, optional: false, required: false
  private _bandwidth = new DataOvhDedicatedServerSpecificationsNetworkBandwidthOutputReference(this, "bandwidth");
  public get bandwidth() {
    return this._bandwidth;
  }

  // connection_val - computed: true, optional: false, required: false
  private _connectionVal = new DataOvhDedicatedServerSpecificationsNetworkConnectionValOutputReference(this, "connection_val");
  public get connectionVal() {
    return this._connectionVal;
  }

  // ola - computed: true, optional: false, required: false
  private _ola = new DataOvhDedicatedServerSpecificationsNetworkOlaOutputReference(this, "ola");
  public get ola() {
    return this._ola;
  }

  // routing - computed: true, optional: false, required: false
  private _routing = new DataOvhDedicatedServerSpecificationsNetworkRoutingOutputReference(this, "routing");
  public get routing() {
    return this._routing;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // switching - computed: true, optional: false, required: false
  private _switching = new DataOvhDedicatedServerSpecificationsNetworkSwitchingOutputReference(this, "switching");
  public get switching() {
    return this._switching;
  }

  // traffic - computed: true, optional: false, required: false
  private _traffic = new DataOvhDedicatedServerSpecificationsNetworkTrafficOutputReference(this, "traffic");
  public get traffic() {
    return this._traffic;
  }

  // vmac - computed: true, optional: false, required: false
  private _vmac = new DataOvhDedicatedServerSpecificationsNetworkVmacOutputReference(this, "vmac");
  public get vmac() {
    return this._vmac;
  }

  // vrack - computed: true, optional: false, required: false
  private _vrack = new DataOvhDedicatedServerSpecificationsNetworkVrackOutputReference(this, "vrack");
  public get vrack() {
    return this._vrack;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      service_name: cdktf.stringToTerraform(this._serviceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
