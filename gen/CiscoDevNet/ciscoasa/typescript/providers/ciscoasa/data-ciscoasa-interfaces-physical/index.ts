// https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/data-sources/interfaces_physical
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCiscoasaInterfacesPhysicalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/data-sources/interfaces_physical#id DataCiscoasaInterfacesPhysical#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressDhcpDhcpClientSlaTrackingSettings {
}

export function dataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressDhcpDhcpClientSlaTrackingSettingsToTerraform(struct?: DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressDhcpDhcpClientSlaTrackingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressDhcpDhcpClientSlaTrackingSettingsToHclTerraform(struct?: DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressDhcpDhcpClientSlaTrackingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressDhcpDhcpClientSlaTrackingSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressDhcpDhcpClientSlaTrackingSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressDhcpDhcpClientSlaTrackingSettings | undefined) {
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

export class DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressDhcpDhcpClientSlaTrackingSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressDhcpDhcpClientSlaTrackingSettingsOutputReference {
    return new DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressDhcpDhcpClientSlaTrackingSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressDhcpDhcpClient {
}

export function dataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressDhcpDhcpClientToTerraform(struct?: DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressDhcpDhcpClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressDhcpDhcpClientToHclTerraform(struct?: DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressDhcpDhcpClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressDhcpDhcpClientOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressDhcpDhcpClient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressDhcpDhcpClient | undefined) {
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
  private _slaTrackingSettings = new DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressDhcpDhcpClientSlaTrackingSettingsList(this, "sla_tracking_settings", false);
  public get slaTrackingSettings() {
    return this._slaTrackingSettings;
  }

  // tracking_enabled - computed: true, optional: false, required: false
  public get trackingEnabled() {
    return this.getBooleanAttribute('tracking_enabled');
  }
}

export class DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressDhcpDhcpClientList extends cdktf.ComplexList {

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
  public get(index: number): DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressDhcpDhcpClientOutputReference {
    return new DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressDhcpDhcpClientOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressDhcp {
}

export function dataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressDhcpToTerraform(struct?: DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressDhcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressDhcpToHclTerraform(struct?: DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressDhcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressDhcpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressDhcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressDhcp | undefined) {
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
  private _dhcpClient = new DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressDhcpDhcpClientList(this, "dhcp_client", false);
  public get dhcpClient() {
    return this._dhcpClient;
  }

  // dhcp_option_using_mac - computed: true, optional: false, required: false
  public get dhcpOptionUsingMac() {
    return this.getBooleanAttribute('dhcp_option_using_mac');
  }
}

export class DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressDhcpList extends cdktf.ComplexList {

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
  public get(index: number): DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressDhcpOutputReference {
    return new DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressDhcpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressStatic {
}

export function dataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressStaticToTerraform(struct?: DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressStatic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressStaticToHclTerraform(struct?: DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressStatic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressStaticOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressStatic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressStatic | undefined) {
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

export class DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressStaticList extends cdktf.ComplexList {

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
  public get(index: number): DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressStaticOutputReference {
    return new DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressStaticOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddress {
}

export function dataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressToTerraform(struct?: DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressToHclTerraform(struct?: DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dhcp - computed: true, optional: false, required: false
  private _dhcp = new DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressDhcpList(this, "dhcp", false);
  public get dhcp() {
    return this._dhcp;
  }

  // static - computed: true, optional: false, required: false
  private _static = new DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressStaticList(this, "static", false);
  public get static() {
    return this._static;
  }
}

export class DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressOutputReference {
    return new DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6InfoIpv6Addresses {
}

export function dataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6InfoIpv6AddressesToTerraform(struct?: DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6InfoIpv6Addresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6InfoIpv6AddressesToHclTerraform(struct?: DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6InfoIpv6Addresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6InfoIpv6AddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6InfoIpv6Addresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6InfoIpv6Addresses | undefined) {
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

export class DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6InfoIpv6AddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6InfoIpv6AddressesOutputReference {
    return new DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6InfoIpv6AddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6InfoLinkLocalAddress {
}

export function dataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6InfoLinkLocalAddressToTerraform(struct?: DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6InfoLinkLocalAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6InfoLinkLocalAddressToHclTerraform(struct?: DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6InfoLinkLocalAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6InfoLinkLocalAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6InfoLinkLocalAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6InfoLinkLocalAddress | undefined) {
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

export class DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6InfoLinkLocalAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6InfoLinkLocalAddressOutputReference {
    return new DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6InfoLinkLocalAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6InfoNDiscoveryPrefixListStruct {
}

export function dataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6InfoNDiscoveryPrefixListStructToTerraform(struct?: DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6InfoNDiscoveryPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6InfoNDiscoveryPrefixListStructToHclTerraform(struct?: DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6InfoNDiscoveryPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6InfoNDiscoveryPrefixListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6InfoNDiscoveryPrefixListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6InfoNDiscoveryPrefixListStruct | undefined) {
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

export class DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6InfoNDiscoveryPrefixListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6InfoNDiscoveryPrefixListStructOutputReference {
    return new DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6InfoNDiscoveryPrefixListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6Info {
}

export function dataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6InfoToTerraform(struct?: DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6Info): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6InfoToHclTerraform(struct?: DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6Info): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6InfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6Info | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6Info | undefined) {
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
  private _ipv6Addresses = new DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6InfoIpv6AddressesList(this, "ipv6_addresses", false);
  public get ipv6Addresses() {
    return this._ipv6Addresses;
  }

  // link_local_address - computed: true, optional: false, required: false
  private _linkLocalAddress = new DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6InfoLinkLocalAddressList(this, "link_local_address", false);
  public get linkLocalAddress() {
    return this._linkLocalAddress;
  }

  // managed_address_config - computed: true, optional: false, required: false
  public get managedAddressConfig() {
    return this.getBooleanAttribute('managed_address_config');
  }

  // n_discovery_prefix_list - computed: true, optional: false, required: false
  private _nDiscoveryPrefixList = new DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6InfoNDiscoveryPrefixListStructList(this, "n_discovery_prefix_list", false);
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

export class DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6InfoList extends cdktf.ComplexList {

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
  public get(index: number): DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6InfoOutputReference {
    return new DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6InfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCiscoasaInterfacesPhysicalInterfacesPhysical {
}

export function dataCiscoasaInterfacesPhysicalInterfacesPhysicalToTerraform(struct?: DataCiscoasaInterfacesPhysicalInterfacesPhysical): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCiscoasaInterfacesPhysicalInterfacesPhysicalToHclTerraform(struct?: DataCiscoasaInterfacesPhysicalInterfacesPhysical): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCiscoasaInterfacesPhysicalInterfacesPhysicalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCiscoasaInterfacesPhysicalInterfacesPhysical | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCiscoasaInterfacesPhysicalInterfacesPhysical | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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

  // hardware_id - computed: true, optional: false, required: false
  public get hardwareId() {
    return this.getStringAttribute('hardware_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_desc - computed: true, optional: false, required: false
  public get interfaceDesc() {
    return this.getStringAttribute('interface_desc');
  }

  // ip_address - computed: true, optional: false, required: false
  private _ipAddress = new DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpAddressList(this, "ip_address", false);
  public get ipAddress() {
    return this._ipAddress;
  }

  // ipv6_info - computed: true, optional: false, required: false
  private _ipv6Info = new DataCiscoasaInterfacesPhysicalInterfacesPhysicalIpv6InfoList(this, "ipv6_info", false);
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
}

export class DataCiscoasaInterfacesPhysicalInterfacesPhysicalList extends cdktf.ComplexList {

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
  public get(index: number): DataCiscoasaInterfacesPhysicalInterfacesPhysicalOutputReference {
    return new DataCiscoasaInterfacesPhysicalInterfacesPhysicalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/data-sources/interfaces_physical ciscoasa_interfaces_physical}
*/
export class DataCiscoasaInterfacesPhysical extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciscoasa_interfaces_physical";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCiscoasaInterfacesPhysical resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCiscoasaInterfacesPhysical to import
  * @param importFromId The id of the existing DataCiscoasaInterfacesPhysical that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/data-sources/interfaces_physical#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCiscoasaInterfacesPhysical to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciscoasa_interfaces_physical", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/data-sources/interfaces_physical ciscoasa_interfaces_physical} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCiscoasaInterfacesPhysicalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCiscoasaInterfacesPhysicalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ciscoasa_interfaces_physical',
      terraformGeneratorMetadata: {
        providerName: 'ciscoasa',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // interfaces_physical - computed: true, optional: false, required: false
  private _interfacesPhysical = new DataCiscoasaInterfacesPhysicalInterfacesPhysicalList(this, "interfaces_physical", false);
  public get interfacesPhysical() {
    return this._interfacesPhysical;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
