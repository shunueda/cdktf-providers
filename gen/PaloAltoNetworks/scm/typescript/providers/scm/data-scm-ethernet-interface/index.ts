// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/ethernet_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmEthernetInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * UUID of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/ethernet_interface#id DataScmEthernetInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/ethernet_interface#name DataScmEthernetInterface#name}
  */
  readonly name?: string;
}
export interface DataScmEthernetInterfaceLayer2Lldp {
}

export function dataScmEthernetInterfaceLayer2LldpToTerraform(struct?: DataScmEthernetInterfaceLayer2Lldp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmEthernetInterfaceLayer2LldpToHclTerraform(struct?: DataScmEthernetInterfaceLayer2Lldp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmEthernetInterfaceLayer2LldpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmEthernetInterfaceLayer2Lldp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmEthernetInterfaceLayer2Lldp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
}
export interface DataScmEthernetInterfaceLayer2 {
}

export function dataScmEthernetInterfaceLayer2ToTerraform(struct?: DataScmEthernetInterfaceLayer2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmEthernetInterfaceLayer2ToHclTerraform(struct?: DataScmEthernetInterfaceLayer2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmEthernetInterfaceLayer2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmEthernetInterfaceLayer2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmEthernetInterfaceLayer2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lldp - computed: true, optional: false, required: false
  private _lldp = new DataScmEthernetInterfaceLayer2LldpOutputReference(this, "lldp");
  public get lldp() {
    return this._lldp;
  }

  // vlan_tag - computed: true, optional: false, required: false
  public get vlanTag() {
    return this.getStringAttribute('vlan_tag');
  }
}
export interface DataScmEthernetInterfaceLayer3Arp {
}

export function dataScmEthernetInterfaceLayer3ArpToTerraform(struct?: DataScmEthernetInterfaceLayer3Arp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmEthernetInterfaceLayer3ArpToHclTerraform(struct?: DataScmEthernetInterfaceLayer3Arp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmEthernetInterfaceLayer3ArpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmEthernetInterfaceLayer3Arp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmEthernetInterfaceLayer3Arp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hw_address - computed: true, optional: false, required: false
  public get hwAddress() {
    return this.getStringAttribute('hw_address');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataScmEthernetInterfaceLayer3ArpList extends cdktf.ComplexList {

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
  public get(index: number): DataScmEthernetInterfaceLayer3ArpOutputReference {
    return new DataScmEthernetInterfaceLayer3ArpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmEthernetInterfaceLayer3DdnsConfig {
}

export function dataScmEthernetInterfaceLayer3DdnsConfigToTerraform(struct?: DataScmEthernetInterfaceLayer3DdnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmEthernetInterfaceLayer3DdnsConfigToHclTerraform(struct?: DataScmEthernetInterfaceLayer3DdnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmEthernetInterfaceLayer3DdnsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmEthernetInterfaceLayer3DdnsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmEthernetInterfaceLayer3DdnsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ddns_cert_profile - computed: true, optional: false, required: false
  public get ddnsCertProfile() {
    return this.getStringAttribute('ddns_cert_profile');
  }

  // ddns_enabled - computed: true, optional: false, required: false
  public get ddnsEnabled() {
    return this.getBooleanAttribute('ddns_enabled');
  }

  // ddns_hostname - computed: true, optional: false, required: false
  public get ddnsHostname() {
    return this.getStringAttribute('ddns_hostname');
  }

  // ddns_ip - computed: true, optional: false, required: false
  public get ddnsIp() {
    return this.getStringAttribute('ddns_ip');
  }

  // ddns_update_interval - computed: true, optional: false, required: false
  public get ddnsUpdateInterval() {
    return this.getNumberAttribute('ddns_update_interval');
  }

  // ddns_vendor - computed: true, optional: false, required: false
  public get ddnsVendor() {
    return this.getStringAttribute('ddns_vendor');
  }

  // ddns_vendor_config - computed: true, optional: false, required: false
  public get ddnsVendorConfig() {
    return this.getStringAttribute('ddns_vendor_config');
  }
}
export interface DataScmEthernetInterfaceLayer3DhcpClientSendHostname {
}

export function dataScmEthernetInterfaceLayer3DhcpClientSendHostnameToTerraform(struct?: DataScmEthernetInterfaceLayer3DhcpClientSendHostname): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmEthernetInterfaceLayer3DhcpClientSendHostnameToHclTerraform(struct?: DataScmEthernetInterfaceLayer3DhcpClientSendHostname): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmEthernetInterfaceLayer3DhcpClientSendHostnameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmEthernetInterfaceLayer3DhcpClientSendHostname | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmEthernetInterfaceLayer3DhcpClientSendHostname | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
}
export interface DataScmEthernetInterfaceLayer3DhcpClient {
}

export function dataScmEthernetInterfaceLayer3DhcpClientToTerraform(struct?: DataScmEthernetInterfaceLayer3DhcpClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmEthernetInterfaceLayer3DhcpClientToHclTerraform(struct?: DataScmEthernetInterfaceLayer3DhcpClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmEthernetInterfaceLayer3DhcpClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmEthernetInterfaceLayer3DhcpClient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmEthernetInterfaceLayer3DhcpClient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_default_route - computed: true, optional: false, required: false
  public get createDefaultRoute() {
    return this.getBooleanAttribute('create_default_route');
  }

  // default_route_metric - computed: true, optional: false, required: false
  public get defaultRouteMetric() {
    return this.getNumberAttribute('default_route_metric');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // send_hostname - computed: true, optional: false, required: false
  private _sendHostname = new DataScmEthernetInterfaceLayer3DhcpClientSendHostnameOutputReference(this, "send_hostname");
  public get sendHostname() {
    return this._sendHostname;
  }
}
export interface DataScmEthernetInterfaceLayer3Ip {
}

export function dataScmEthernetInterfaceLayer3IpToTerraform(struct?: DataScmEthernetInterfaceLayer3Ip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmEthernetInterfaceLayer3IpToHclTerraform(struct?: DataScmEthernetInterfaceLayer3Ip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmEthernetInterfaceLayer3IpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmEthernetInterfaceLayer3Ip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmEthernetInterfaceLayer3Ip | undefined) {
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

export class DataScmEthernetInterfaceLayer3IpList extends cdktf.ComplexList {

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
  public get(index: number): DataScmEthernetInterfaceLayer3IpOutputReference {
    return new DataScmEthernetInterfaceLayer3IpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmEthernetInterfaceLayer3PppoePassive {
}

export function dataScmEthernetInterfaceLayer3PppoePassiveToTerraform(struct?: DataScmEthernetInterfaceLayer3PppoePassive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmEthernetInterfaceLayer3PppoePassiveToHclTerraform(struct?: DataScmEthernetInterfaceLayer3PppoePassive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmEthernetInterfaceLayer3PppoePassiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmEthernetInterfaceLayer3PppoePassive | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmEthernetInterfaceLayer3PppoePassive | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
}
export interface DataScmEthernetInterfaceLayer3PppoeStaticAddress {
}

export function dataScmEthernetInterfaceLayer3PppoeStaticAddressToTerraform(struct?: DataScmEthernetInterfaceLayer3PppoeStaticAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmEthernetInterfaceLayer3PppoeStaticAddressToHclTerraform(struct?: DataScmEthernetInterfaceLayer3PppoeStaticAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmEthernetInterfaceLayer3PppoeStaticAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmEthernetInterfaceLayer3PppoeStaticAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmEthernetInterfaceLayer3PppoeStaticAddress | undefined) {
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
}
export interface DataScmEthernetInterfaceLayer3Pppoe {
}

export function dataScmEthernetInterfaceLayer3PppoeToTerraform(struct?: DataScmEthernetInterfaceLayer3Pppoe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmEthernetInterfaceLayer3PppoeToHclTerraform(struct?: DataScmEthernetInterfaceLayer3Pppoe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmEthernetInterfaceLayer3PppoeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmEthernetInterfaceLayer3Pppoe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmEthernetInterfaceLayer3Pppoe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_concentrator - computed: true, optional: false, required: false
  public get accessConcentrator() {
    return this.getStringAttribute('access_concentrator');
  }

  // authentication - computed: true, optional: false, required: false
  public get authentication() {
    return this.getStringAttribute('authentication');
  }

  // default_route_metric - computed: true, optional: false, required: false
  public get defaultRouteMetric() {
    return this.getNumberAttribute('default_route_metric');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // passive - computed: true, optional: false, required: false
  private _passive = new DataScmEthernetInterfaceLayer3PppoePassiveOutputReference(this, "passive");
  public get passive() {
    return this._passive;
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }

  // static_address - computed: true, optional: false, required: false
  private _staticAddress = new DataScmEthernetInterfaceLayer3PppoeStaticAddressOutputReference(this, "static_address");
  public get staticAddress() {
    return this._staticAddress;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataScmEthernetInterfaceLayer3 {
}

export function dataScmEthernetInterfaceLayer3ToTerraform(struct?: DataScmEthernetInterfaceLayer3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmEthernetInterfaceLayer3ToHclTerraform(struct?: DataScmEthernetInterfaceLayer3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmEthernetInterfaceLayer3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmEthernetInterfaceLayer3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmEthernetInterfaceLayer3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arp - computed: true, optional: false, required: false
  private _arp = new DataScmEthernetInterfaceLayer3ArpList(this, "arp", false);
  public get arp() {
    return this._arp;
  }

  // ddns_config - computed: true, optional: false, required: false
  private _ddnsConfig = new DataScmEthernetInterfaceLayer3DdnsConfigOutputReference(this, "ddns_config");
  public get ddnsConfig() {
    return this._ddnsConfig;
  }

  // dhcp_client - computed: true, optional: false, required: false
  private _dhcpClient = new DataScmEthernetInterfaceLayer3DhcpClientOutputReference(this, "dhcp_client");
  public get dhcpClient() {
    return this._dhcpClient;
  }

  // interface_management_profile - computed: true, optional: false, required: false
  public get interfaceManagementProfile() {
    return this.getStringAttribute('interface_management_profile');
  }

  // ip - computed: true, optional: false, required: false
  private _ip = new DataScmEthernetInterfaceLayer3IpList(this, "ip", false);
  public get ip() {
    return this._ip;
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }

  // pppoe - computed: true, optional: false, required: false
  private _pppoe = new DataScmEthernetInterfaceLayer3PppoeOutputReference(this, "pppoe");
  public get pppoe() {
    return this._pppoe;
  }
}
export interface DataScmEthernetInterfacePoe {
}

export function dataScmEthernetInterfacePoeToTerraform(struct?: DataScmEthernetInterfacePoe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmEthernetInterfacePoeToHclTerraform(struct?: DataScmEthernetInterfacePoe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmEthernetInterfacePoeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmEthernetInterfacePoe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmEthernetInterfacePoe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // poe_enabled - computed: true, optional: false, required: false
  public get poeEnabled() {
    return this.getBooleanAttribute('poe_enabled');
  }

  // poe_rsvd_pwr - computed: true, optional: false, required: false
  public get poeRsvdPwr() {
    return this.getNumberAttribute('poe_rsvd_pwr');
  }
}
export interface DataScmEthernetInterfaceTap {
}

export function dataScmEthernetInterfaceTapToTerraform(struct?: DataScmEthernetInterfaceTap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmEthernetInterfaceTapToHclTerraform(struct?: DataScmEthernetInterfaceTap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmEthernetInterfaceTapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmEthernetInterfaceTap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmEthernetInterfaceTap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/ethernet_interface scm_ethernet_interface}
*/
export class DataScmEthernetInterface extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_ethernet_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmEthernetInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmEthernetInterface to import
  * @param importFromId The id of the existing DataScmEthernetInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/ethernet_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmEthernetInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_ethernet_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/ethernet_interface scm_ethernet_interface} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmEthernetInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataScmEthernetInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_ethernet_interface',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.3'
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getStringAttribute('device');
  }

  // encrypted_values - computed: true, optional: false, required: false
  private _encryptedValues = new cdktf.StringMap(this, "encrypted_values");
  public get encryptedValues() {
    return this._encryptedValues;
  }

  // folder - computed: true, optional: false, required: false
  public get folder() {
    return this.getStringAttribute('folder');
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

  // layer2 - computed: true, optional: false, required: false
  private _layer2 = new DataScmEthernetInterfaceLayer2OutputReference(this, "layer2");
  public get layer2() {
    return this._layer2;
  }

  // layer3 - computed: true, optional: false, required: false
  private _layer3 = new DataScmEthernetInterfaceLayer3OutputReference(this, "layer3");
  public get layer3() {
    return this._layer3;
  }

  // link_duplex - computed: true, optional: false, required: false
  public get linkDuplex() {
    return this.getStringAttribute('link_duplex');
  }

  // link_speed - computed: true, optional: false, required: false
  public get linkSpeed() {
    return this.getStringAttribute('link_speed');
  }

  // link_state - computed: true, optional: false, required: false
  public get linkState() {
    return this.getStringAttribute('link_state');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // poe - computed: true, optional: false, required: false
  private _poe = new DataScmEthernetInterfacePoeOutputReference(this, "poe");
  public get poe() {
    return this._poe;
  }

  // snippet - computed: true, optional: false, required: false
  public get snippet() {
    return this.getStringAttribute('snippet');
  }

  // tap - computed: true, optional: false, required: false
  private _tap = new DataScmEthernetInterfaceTapOutputReference(this, "tap");
  public get tap() {
    return this._tap;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
