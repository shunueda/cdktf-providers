// https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/data-sources/interface_physical
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCiscoasaInterfacePhysicalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/data-sources/interface_physical#hardware_id DataCiscoasaInterfacePhysical#hardware_id}
  */
  readonly hardwareId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/data-sources/interface_physical#id DataCiscoasaInterfacePhysical#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataCiscoasaInterfacePhysicalIpAddressDhcpDhcpClientSlaTrackingSettings {
}

export function dataCiscoasaInterfacePhysicalIpAddressDhcpDhcpClientSlaTrackingSettingsToTerraform(struct?: DataCiscoasaInterfacePhysicalIpAddressDhcpDhcpClientSlaTrackingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCiscoasaInterfacePhysicalIpAddressDhcpDhcpClientSlaTrackingSettingsToHclTerraform(struct?: DataCiscoasaInterfacePhysicalIpAddressDhcpDhcpClientSlaTrackingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCiscoasaInterfacePhysicalIpAddressDhcpDhcpClientSlaTrackingSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCiscoasaInterfacePhysicalIpAddressDhcpDhcpClientSlaTrackingSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCiscoasaInterfacePhysicalIpAddressDhcpDhcpClientSlaTrackingSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_size_in_bytes - computed: true, optional: false, required: false
  public get dataSizeInBytes() {
    return this.getNumberAttribute('data_size_in_bytes');
  }

  // frequency_in_seconds - computed: true, optional: false, required: false
  public get frequencyInSeconds() {
    return this.getNumberAttribute('frequency_in_seconds');
  }

  // num_packets - computed: true, optional: false, required: false
  public get numPackets() {
    return this.getNumberAttribute('num_packets');
  }

  // sla_id - computed: true, optional: false, required: false
  public get slaId() {
    return this.getNumberAttribute('sla_id');
  }

  // threshold_in_milliseconds - computed: true, optional: false, required: false
  public get thresholdInMilliseconds() {
    return this.getNumberAttribute('threshold_in_milliseconds');
  }

  // timeout_in_milliseconds - computed: true, optional: false, required: false
  public get timeoutInMilliseconds() {
    return this.getNumberAttribute('timeout_in_milliseconds');
  }

  // tos - computed: true, optional: false, required: false
  public get tos() {
    return this.getNumberAttribute('tos');
  }

  // tracked_ip - computed: true, optional: false, required: false
  public get trackedIp() {
    return this.getStringAttribute('tracked_ip');
  }
}

export class DataCiscoasaInterfacePhysicalIpAddressDhcpDhcpClientSlaTrackingSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCiscoasaInterfacePhysicalIpAddressDhcpDhcpClientSlaTrackingSettingsOutputReference {
    return new DataCiscoasaInterfacePhysicalIpAddressDhcpDhcpClientSlaTrackingSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCiscoasaInterfacePhysicalIpAddressDhcpDhcpClient {
}

export function dataCiscoasaInterfacePhysicalIpAddressDhcpDhcpClientToTerraform(struct?: DataCiscoasaInterfacePhysicalIpAddressDhcpDhcpClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCiscoasaInterfacePhysicalIpAddressDhcpDhcpClientToHclTerraform(struct?: DataCiscoasaInterfacePhysicalIpAddressDhcpDhcpClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCiscoasaInterfacePhysicalIpAddressDhcpDhcpClientOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCiscoasaInterfacePhysicalIpAddressDhcpDhcpClient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCiscoasaInterfacePhysicalIpAddressDhcpDhcpClient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getNumberAttribute('metric');
  }

  // primary_track_id - computed: true, optional: false, required: false
  public get primaryTrackId() {
    return this.getNumberAttribute('primary_track_id');
  }

  // set_default_route - computed: true, optional: false, required: false
  public get setDefaultRoute() {
    return this.getBooleanAttribute('set_default_route');
  }

  // sla_tracking_settings - computed: true, optional: false, required: false
  private _slaTrackingSettings = new DataCiscoasaInterfacePhysicalIpAddressDhcpDhcpClientSlaTrackingSettingsList(this, "sla_tracking_settings", false);
  public get slaTrackingSettings() {
    return this._slaTrackingSettings;
  }

  // tracking_enabled - computed: true, optional: false, required: false
  public get trackingEnabled() {
    return this.getBooleanAttribute('tracking_enabled');
  }
}

export class DataCiscoasaInterfacePhysicalIpAddressDhcpDhcpClientList extends cdktf.ComplexList {

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
  public get(index: number): DataCiscoasaInterfacePhysicalIpAddressDhcpDhcpClientOutputReference {
    return new DataCiscoasaInterfacePhysicalIpAddressDhcpDhcpClientOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCiscoasaInterfacePhysicalIpAddressDhcp {
}

export function dataCiscoasaInterfacePhysicalIpAddressDhcpToTerraform(struct?: DataCiscoasaInterfacePhysicalIpAddressDhcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCiscoasaInterfacePhysicalIpAddressDhcpToHclTerraform(struct?: DataCiscoasaInterfacePhysicalIpAddressDhcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCiscoasaInterfacePhysicalIpAddressDhcpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCiscoasaInterfacePhysicalIpAddressDhcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCiscoasaInterfacePhysicalIpAddressDhcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dhcp_broadcast - computed: true, optional: false, required: false
  public get dhcpBroadcast() {
    return this.getBooleanAttribute('dhcp_broadcast');
  }

  // dhcp_client - computed: true, optional: false, required: false
  private _dhcpClient = new DataCiscoasaInterfacePhysicalIpAddressDhcpDhcpClientList(this, "dhcp_client", false);
  public get dhcpClient() {
    return this._dhcpClient;
  }

  // dhcp_option_using_mac - computed: true, optional: false, required: false
  public get dhcpOptionUsingMac() {
    return this.getBooleanAttribute('dhcp_option_using_mac');
  }
}

export class DataCiscoasaInterfacePhysicalIpAddressDhcpList extends cdktf.ComplexList {

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
  public get(index: number): DataCiscoasaInterfacePhysicalIpAddressDhcpOutputReference {
    return new DataCiscoasaInterfacePhysicalIpAddressDhcpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCiscoasaInterfacePhysicalIpAddressStatic {
}

export function dataCiscoasaInterfacePhysicalIpAddressStaticToTerraform(struct?: DataCiscoasaInterfacePhysicalIpAddressStatic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCiscoasaInterfacePhysicalIpAddressStaticToHclTerraform(struct?: DataCiscoasaInterfacePhysicalIpAddressStatic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCiscoasaInterfacePhysicalIpAddressStaticOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCiscoasaInterfacePhysicalIpAddressStatic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCiscoasaInterfacePhysicalIpAddressStatic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // net_mask - computed: true, optional: false, required: false
  public get netMask() {
    return this.getStringAttribute('net_mask');
  }
}

export class DataCiscoasaInterfacePhysicalIpAddressStaticList extends cdktf.ComplexList {

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
  public get(index: number): DataCiscoasaInterfacePhysicalIpAddressStaticOutputReference {
    return new DataCiscoasaInterfacePhysicalIpAddressStaticOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCiscoasaInterfacePhysicalIpAddress {
}

export function dataCiscoasaInterfacePhysicalIpAddressToTerraform(struct?: DataCiscoasaInterfacePhysicalIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCiscoasaInterfacePhysicalIpAddressToHclTerraform(struct?: DataCiscoasaInterfacePhysicalIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCiscoasaInterfacePhysicalIpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCiscoasaInterfacePhysicalIpAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCiscoasaInterfacePhysicalIpAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dhcp - computed: true, optional: false, required: false
  private _dhcp = new DataCiscoasaInterfacePhysicalIpAddressDhcpList(this, "dhcp", false);
  public get dhcp() {
    return this._dhcp;
  }

  // static - computed: true, optional: false, required: false
  private _static = new DataCiscoasaInterfacePhysicalIpAddressStaticList(this, "static", false);
  public get static() {
    return this._static;
  }
}

export class DataCiscoasaInterfacePhysicalIpAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataCiscoasaInterfacePhysicalIpAddressOutputReference {
    return new DataCiscoasaInterfacePhysicalIpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCiscoasaInterfacePhysicalIpv6InfoIpv6Addresses {
}

export function dataCiscoasaInterfacePhysicalIpv6InfoIpv6AddressesToTerraform(struct?: DataCiscoasaInterfacePhysicalIpv6InfoIpv6Addresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCiscoasaInterfacePhysicalIpv6InfoIpv6AddressesToHclTerraform(struct?: DataCiscoasaInterfacePhysicalIpv6InfoIpv6Addresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCiscoasaInterfacePhysicalIpv6InfoIpv6AddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCiscoasaInterfacePhysicalIpv6InfoIpv6Addresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCiscoasaInterfacePhysicalIpv6InfoIpv6Addresses | undefined) {
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

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // standby - computed: true, optional: false, required: false
  public get standby() {
    return this.getStringAttribute('standby');
  }
}

export class DataCiscoasaInterfacePhysicalIpv6InfoIpv6AddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataCiscoasaInterfacePhysicalIpv6InfoIpv6AddressesOutputReference {
    return new DataCiscoasaInterfacePhysicalIpv6InfoIpv6AddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCiscoasaInterfacePhysicalIpv6InfoLinkLocalAddress {
}

export function dataCiscoasaInterfacePhysicalIpv6InfoLinkLocalAddressToTerraform(struct?: DataCiscoasaInterfacePhysicalIpv6InfoLinkLocalAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCiscoasaInterfacePhysicalIpv6InfoLinkLocalAddressToHclTerraform(struct?: DataCiscoasaInterfacePhysicalIpv6InfoLinkLocalAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCiscoasaInterfacePhysicalIpv6InfoLinkLocalAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCiscoasaInterfacePhysicalIpv6InfoLinkLocalAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCiscoasaInterfacePhysicalIpv6InfoLinkLocalAddress | undefined) {
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

  // standby - computed: true, optional: false, required: false
  public get standby() {
    return this.getStringAttribute('standby');
  }
}

export class DataCiscoasaInterfacePhysicalIpv6InfoLinkLocalAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataCiscoasaInterfacePhysicalIpv6InfoLinkLocalAddressOutputReference {
    return new DataCiscoasaInterfacePhysicalIpv6InfoLinkLocalAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCiscoasaInterfacePhysicalIpv6InfoNDiscoveryPrefixListStruct {
}

export function dataCiscoasaInterfacePhysicalIpv6InfoNDiscoveryPrefixListStructToTerraform(struct?: DataCiscoasaInterfacePhysicalIpv6InfoNDiscoveryPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCiscoasaInterfacePhysicalIpv6InfoNDiscoveryPrefixListStructToHclTerraform(struct?: DataCiscoasaInterfacePhysicalIpv6InfoNDiscoveryPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCiscoasaInterfacePhysicalIpv6InfoNDiscoveryPrefixListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCiscoasaInterfacePhysicalIpv6InfoNDiscoveryPrefixListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCiscoasaInterfacePhysicalIpv6InfoNDiscoveryPrefixListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_prefix - computed: true, optional: false, required: false
  public get defaultPrefix() {
    return this.getBooleanAttribute('default_prefix');
  }

  // has_duration - computed: true, optional: false, required: false
  public get hasDuration() {
    return this.getBooleanAttribute('has_duration');
  }

  // no_advertise - computed: true, optional: false, required: false
  public get noAdvertise() {
    return this.getBooleanAttribute('no_advertise');
  }

  // off_link - computed: true, optional: false, required: false
  public get offLink() {
    return this.getBooleanAttribute('off_link');
  }

  // preferred_lifetime - computed: true, optional: false, required: false
  public get preferredLifetime() {
    return this.getNumberAttribute('preferred_lifetime');
  }

  // valid_lifetime - computed: true, optional: false, required: false
  public get validLifetime() {
    return this.getNumberAttribute('valid_lifetime');
  }
}

export class DataCiscoasaInterfacePhysicalIpv6InfoNDiscoveryPrefixListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataCiscoasaInterfacePhysicalIpv6InfoNDiscoveryPrefixListStructOutputReference {
    return new DataCiscoasaInterfacePhysicalIpv6InfoNDiscoveryPrefixListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCiscoasaInterfacePhysicalIpv6Info {
}

export function dataCiscoasaInterfacePhysicalIpv6InfoToTerraform(struct?: DataCiscoasaInterfacePhysicalIpv6Info): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCiscoasaInterfacePhysicalIpv6InfoToHclTerraform(struct?: DataCiscoasaInterfacePhysicalIpv6Info): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCiscoasaInterfacePhysicalIpv6InfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCiscoasaInterfacePhysicalIpv6Info | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCiscoasaInterfacePhysicalIpv6Info | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_config - computed: true, optional: false, required: false
  public get autoConfig() {
    return this.getBooleanAttribute('auto_config');
  }

  // dad_attempts - computed: true, optional: false, required: false
  public get dadAttempts() {
    return this.getNumberAttribute('dad_attempts');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // enforce_eui64 - computed: true, optional: false, required: false
  public get enforceEui64() {
    return this.getBooleanAttribute('enforce_eui64');
  }

  // ipv6_addresses - computed: true, optional: false, required: false
  private _ipv6Addresses = new DataCiscoasaInterfacePhysicalIpv6InfoIpv6AddressesList(this, "ipv6_addresses", false);
  public get ipv6Addresses() {
    return this._ipv6Addresses;
  }

  // link_local_address - computed: true, optional: false, required: false
  private _linkLocalAddress = new DataCiscoasaInterfacePhysicalIpv6InfoLinkLocalAddressList(this, "link_local_address", false);
  public get linkLocalAddress() {
    return this._linkLocalAddress;
  }

  // managed_address_config - computed: true, optional: false, required: false
  public get managedAddressConfig() {
    return this.getBooleanAttribute('managed_address_config');
  }

  // n_discovery_prefix_list - computed: true, optional: false, required: false
  private _nDiscoveryPrefixList = new DataCiscoasaInterfacePhysicalIpv6InfoNDiscoveryPrefixListStructList(this, "n_discovery_prefix_list", false);
  public get nDiscoveryPrefixList() {
    return this._nDiscoveryPrefixList;
  }

  // ns_interval - computed: true, optional: false, required: false
  public get nsInterval() {
    return this.getNumberAttribute('ns_interval');
  }

  // other_stateful_config - computed: true, optional: false, required: false
  public get otherStatefulConfig() {
    return this.getBooleanAttribute('other_stateful_config');
  }

  // reachable_time - computed: true, optional: false, required: false
  public get reachableTime() {
    return this.getNumberAttribute('reachable_time');
  }

  // router_advert_interval - computed: true, optional: false, required: false
  public get routerAdvertInterval() {
    return this.getNumberAttribute('router_advert_interval');
  }

  // router_advert_interval_unit - computed: true, optional: false, required: false
  public get routerAdvertIntervalUnit() {
    return this.getStringAttribute('router_advert_interval_unit');
  }

  // router_advert_lifetime - computed: true, optional: false, required: false
  public get routerAdvertLifetime() {
    return this.getNumberAttribute('router_advert_lifetime');
  }

  // suppress_router_advert - computed: true, optional: false, required: false
  public get suppressRouterAdvert() {
    return this.getBooleanAttribute('suppress_router_advert');
  }
}

export class DataCiscoasaInterfacePhysicalIpv6InfoList extends cdktf.ComplexList {

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
  public get(index: number): DataCiscoasaInterfacePhysicalIpv6InfoOutputReference {
    return new DataCiscoasaInterfacePhysicalIpv6InfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/data-sources/interface_physical ciscoasa_interface_physical}
*/
export class DataCiscoasaInterfacePhysical extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciscoasa_interface_physical";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCiscoasaInterfacePhysical resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCiscoasaInterfacePhysical to import
  * @param importFromId The id of the existing DataCiscoasaInterfacePhysical that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/data-sources/interface_physical#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCiscoasaInterfacePhysical to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciscoasa_interface_physical", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/data-sources/interface_physical ciscoasa_interface_physical} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCiscoasaInterfacePhysicalConfig
  */
  public constructor(scope: Construct, id: string, config: DataCiscoasaInterfacePhysicalConfig) {
    super(scope, id, {
      terraformResourceType: 'ciscoasa_interface_physical',
      terraformGeneratorMetadata: {
        providerName: 'ciscoasa',
        providerVersion: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hardwareId = config.hardwareId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_mac_address - computed: true, optional: false, required: false
  public get activeMacAddress() {
    return this.getStringAttribute('active_mac_address');
  }

  // forward_traffic_cx - computed: true, optional: false, required: false
  public get forwardTrafficCx() {
    return this.getBooleanAttribute('forward_traffic_cx');
  }

  // forward_traffic_sfr - computed: true, optional: false, required: false
  public get forwardTrafficSfr() {
    return this.getBooleanAttribute('forward_traffic_sfr');
  }

  // hardware_id - computed: false, optional: false, required: true
  private _hardwareId?: string; 
  public get hardwareId() {
    return this.getStringAttribute('hardware_id');
  }
  public set hardwareId(value: string) {
    this._hardwareId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareIdInput() {
    return this._hardwareId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // interface_desc - computed: true, optional: false, required: false
  public get interfaceDesc() {
    return this.getStringAttribute('interface_desc');
  }

  // ip_address - computed: true, optional: false, required: false
  private _ipAddress = new DataCiscoasaInterfacePhysicalIpAddressList(this, "ip_address", false);
  public get ipAddress() {
    return this._ipAddress;
  }

  // ipv6_info - computed: true, optional: false, required: false
  private _ipv6Info = new DataCiscoasaInterfacePhysicalIpv6InfoList(this, "ipv6_info", false);
  public get ipv6Info() {
    return this._ipv6Info;
  }

  // management_only - computed: true, optional: false, required: false
  public get managementOnly() {
    return this.getBooleanAttribute('management_only');
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // security_level - computed: true, optional: false, required: false
  public get securityLevel() {
    return this.getNumberAttribute('security_level');
  }

  // shutdown - computed: true, optional: false, required: false
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }

  // stand_by_mac_address - computed: true, optional: false, required: false
  public get standByMacAddress() {
    return this.getStringAttribute('stand_by_mac_address');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hardware_id: cdktf.stringToTerraform(this._hardwareId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hardware_id: {
        value: cdktf.stringToHclTerraform(this._hardwareId),
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
