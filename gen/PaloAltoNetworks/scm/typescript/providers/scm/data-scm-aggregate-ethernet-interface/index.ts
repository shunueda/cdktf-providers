// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/aggregate_ethernet_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmAggregateEthernetInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * UUID of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/aggregate_ethernet_interface#id DataScmAggregateEthernetInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Aggregate interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/aggregate_ethernet_interface#name DataScmAggregateEthernetInterface#name}
  */
  readonly name?: string;
}
export interface DataScmAggregateEthernetInterfaceLayer2Lacp {
}

export function dataScmAggregateEthernetInterfaceLayer2LacpToTerraform(struct?: DataScmAggregateEthernetInterfaceLayer2Lacp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAggregateEthernetInterfaceLayer2LacpToHclTerraform(struct?: DataScmAggregateEthernetInterfaceLayer2Lacp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAggregateEthernetInterfaceLayer2LacpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAggregateEthernetInterfaceLayer2Lacp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAggregateEthernetInterfaceLayer2Lacp | undefined) {
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

  // fast_failover - computed: true, optional: false, required: false
  public get fastFailover() {
    return this.getBooleanAttribute('fast_failover');
  }

  // max_ports - computed: true, optional: false, required: false
  public get maxPorts() {
    return this.getNumberAttribute('max_ports');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // system_priority - computed: true, optional: false, required: false
  public get systemPriority() {
    return this.getNumberAttribute('system_priority');
  }

  // transmission_rate - computed: true, optional: false, required: false
  public get transmissionRate() {
    return this.getStringAttribute('transmission_rate');
  }
}
export interface DataScmAggregateEthernetInterfaceLayer2 {
}

export function dataScmAggregateEthernetInterfaceLayer2ToTerraform(struct?: DataScmAggregateEthernetInterfaceLayer2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAggregateEthernetInterfaceLayer2ToHclTerraform(struct?: DataScmAggregateEthernetInterfaceLayer2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAggregateEthernetInterfaceLayer2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAggregateEthernetInterfaceLayer2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAggregateEthernetInterfaceLayer2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lacp - computed: true, optional: false, required: false
  private _lacp = new DataScmAggregateEthernetInterfaceLayer2LacpOutputReference(this, "lacp");
  public get lacp() {
    return this._lacp;
  }

  // vlan_tag - computed: true, optional: false, required: false
  public get vlanTag() {
    return this.getNumberAttribute('vlan_tag');
  }
}
export interface DataScmAggregateEthernetInterfaceLayer3Arp {
}

export function dataScmAggregateEthernetInterfaceLayer3ArpToTerraform(struct?: DataScmAggregateEthernetInterfaceLayer3Arp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAggregateEthernetInterfaceLayer3ArpToHclTerraform(struct?: DataScmAggregateEthernetInterfaceLayer3Arp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAggregateEthernetInterfaceLayer3ArpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmAggregateEthernetInterfaceLayer3Arp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAggregateEthernetInterfaceLayer3Arp | undefined) {
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

export class DataScmAggregateEthernetInterfaceLayer3ArpList extends cdktf.ComplexList {

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
  public get(index: number): DataScmAggregateEthernetInterfaceLayer3ArpOutputReference {
    return new DataScmAggregateEthernetInterfaceLayer3ArpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmAggregateEthernetInterfaceLayer3DdnsConfig {
}

export function dataScmAggregateEthernetInterfaceLayer3DdnsConfigToTerraform(struct?: DataScmAggregateEthernetInterfaceLayer3DdnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAggregateEthernetInterfaceLayer3DdnsConfigToHclTerraform(struct?: DataScmAggregateEthernetInterfaceLayer3DdnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAggregateEthernetInterfaceLayer3DdnsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAggregateEthernetInterfaceLayer3DdnsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAggregateEthernetInterfaceLayer3DdnsConfig | undefined) {
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
export interface DataScmAggregateEthernetInterfaceLayer3DhcpClientSendHostname {
}

export function dataScmAggregateEthernetInterfaceLayer3DhcpClientSendHostnameToTerraform(struct?: DataScmAggregateEthernetInterfaceLayer3DhcpClientSendHostname): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAggregateEthernetInterfaceLayer3DhcpClientSendHostnameToHclTerraform(struct?: DataScmAggregateEthernetInterfaceLayer3DhcpClientSendHostname): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAggregateEthernetInterfaceLayer3DhcpClientSendHostnameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAggregateEthernetInterfaceLayer3DhcpClientSendHostname | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAggregateEthernetInterfaceLayer3DhcpClientSendHostname | undefined) {
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
export interface DataScmAggregateEthernetInterfaceLayer3DhcpClient {
}

export function dataScmAggregateEthernetInterfaceLayer3DhcpClientToTerraform(struct?: DataScmAggregateEthernetInterfaceLayer3DhcpClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAggregateEthernetInterfaceLayer3DhcpClientToHclTerraform(struct?: DataScmAggregateEthernetInterfaceLayer3DhcpClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAggregateEthernetInterfaceLayer3DhcpClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAggregateEthernetInterfaceLayer3DhcpClient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAggregateEthernetInterfaceLayer3DhcpClient | undefined) {
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
  private _sendHostname = new DataScmAggregateEthernetInterfaceLayer3DhcpClientSendHostnameOutputReference(this, "send_hostname");
  public get sendHostname() {
    return this._sendHostname;
  }
}
export interface DataScmAggregateEthernetInterfaceLayer3Lacp {
}

export function dataScmAggregateEthernetInterfaceLayer3LacpToTerraform(struct?: DataScmAggregateEthernetInterfaceLayer3Lacp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAggregateEthernetInterfaceLayer3LacpToHclTerraform(struct?: DataScmAggregateEthernetInterfaceLayer3Lacp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAggregateEthernetInterfaceLayer3LacpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAggregateEthernetInterfaceLayer3Lacp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAggregateEthernetInterfaceLayer3Lacp | undefined) {
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

  // fast_failover - computed: true, optional: false, required: false
  public get fastFailover() {
    return this.getBooleanAttribute('fast_failover');
  }

  // max_ports - computed: true, optional: false, required: false
  public get maxPorts() {
    return this.getNumberAttribute('max_ports');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // system_priority - computed: true, optional: false, required: false
  public get systemPriority() {
    return this.getNumberAttribute('system_priority');
  }

  // transmission_rate - computed: true, optional: false, required: false
  public get transmissionRate() {
    return this.getStringAttribute('transmission_rate');
  }
}
export interface DataScmAggregateEthernetInterfaceLayer3 {
}

export function dataScmAggregateEthernetInterfaceLayer3ToTerraform(struct?: DataScmAggregateEthernetInterfaceLayer3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAggregateEthernetInterfaceLayer3ToHclTerraform(struct?: DataScmAggregateEthernetInterfaceLayer3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAggregateEthernetInterfaceLayer3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAggregateEthernetInterfaceLayer3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAggregateEthernetInterfaceLayer3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arp - computed: true, optional: false, required: false
  private _arp = new DataScmAggregateEthernetInterfaceLayer3ArpList(this, "arp", false);
  public get arp() {
    return this._arp;
  }

  // ddns_config - computed: true, optional: false, required: false
  private _ddnsConfig = new DataScmAggregateEthernetInterfaceLayer3DdnsConfigOutputReference(this, "ddns_config");
  public get ddnsConfig() {
    return this._ddnsConfig;
  }

  // dhcp_client - computed: true, optional: false, required: false
  private _dhcpClient = new DataScmAggregateEthernetInterfaceLayer3DhcpClientOutputReference(this, "dhcp_client");
  public get dhcpClient() {
    return this._dhcpClient;
  }

  // interface_management_profile - computed: true, optional: false, required: false
  public get interfaceManagementProfile() {
    return this.getStringAttribute('interface_management_profile');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getListAttribute('ip');
  }

  // lacp - computed: true, optional: false, required: false
  private _lacp = new DataScmAggregateEthernetInterfaceLayer3LacpOutputReference(this, "lacp");
  public get lacp() {
    return this._lacp;
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/aggregate_ethernet_interface scm_aggregate_ethernet_interface}
*/
export class DataScmAggregateEthernetInterface extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_aggregate_ethernet_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmAggregateEthernetInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmAggregateEthernetInterface to import
  * @param importFromId The id of the existing DataScmAggregateEthernetInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/aggregate_ethernet_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmAggregateEthernetInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_aggregate_ethernet_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/aggregate_ethernet_interface scm_aggregate_ethernet_interface} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmAggregateEthernetInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataScmAggregateEthernetInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_aggregate_ethernet_interface',
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
  private _layer2 = new DataScmAggregateEthernetInterfaceLayer2OutputReference(this, "layer2");
  public get layer2() {
    return this._layer2;
  }

  // layer3 - computed: true, optional: false, required: false
  private _layer3 = new DataScmAggregateEthernetInterfaceLayer3OutputReference(this, "layer3");
  public get layer3() {
    return this._layer3;
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

  // snippet - computed: true, optional: false, required: false
  public get snippet() {
    return this.getStringAttribute('snippet');
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
