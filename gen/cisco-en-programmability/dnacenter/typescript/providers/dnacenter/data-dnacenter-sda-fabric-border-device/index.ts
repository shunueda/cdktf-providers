// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/sda_fabric_border_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterSdaFabricBorderDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * deviceManagementIpAddress query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/sda_fabric_border_device#device_management_ip_address DataDnacenterSdaFabricBorderDevice#device_management_ip_address}
  */
  readonly deviceManagementIpAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/sda_fabric_border_device#id DataDnacenterSdaFabricBorderDevice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3HandoffVirtualNetwork {
}

export function dataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3HandoffVirtualNetworkToTerraform(struct?: DataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3HandoffVirtualNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3HandoffVirtualNetworkToHclTerraform(struct?: DataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3HandoffVirtualNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3HandoffVirtualNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3HandoffVirtualNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3HandoffVirtualNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id_ref - computed: true, optional: false, required: false
  public get idRef() {
    return this.getStringAttribute('id_ref');
  }
}

export class DataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3HandoffVirtualNetworkList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3HandoffVirtualNetworkOutputReference {
    return new DataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3HandoffVirtualNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3Handoff {
}

export function dataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3HandoffToTerraform(struct?: DataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3Handoff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3HandoffToHclTerraform(struct?: DataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3Handoff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3HandoffOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3Handoff | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3Handoff | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deploy_pending - computed: true, optional: false, required: false
  public get deployPending() {
    return this.getStringAttribute('deploy_pending');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }

  // instance_tenant_id - computed: true, optional: false, required: false
  public get instanceTenantId() {
    return this.getStringAttribute('instance_tenant_id');
  }

  // instance_version - computed: true, optional: false, required: false
  public get instanceVersion() {
    return this.getNumberAttribute('instance_version');
  }

  // local_ip_address - computed: true, optional: false, required: false
  public get localIpAddress() {
    return this.getStringAttribute('local_ip_address');
  }

  // remote_ip_address - computed: true, optional: false, required: false
  public get remoteIpAddress() {
    return this.getStringAttribute('remote_ip_address');
  }

  // virtual_network - computed: true, optional: false, required: false
  private _virtualNetwork = new DataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3HandoffVirtualNetworkList(this, "virtual_network", false);
  public get virtualNetwork() {
    return this._virtualNetwork;
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
}

export class DataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3HandoffList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3HandoffOutputReference {
    return new DataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3HandoffOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettings {
}

export function dataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsToTerraform(struct?: DataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsToHclTerraform(struct?: DataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deploy_pending - computed: true, optional: false, required: false
  public get deployPending() {
    return this.getStringAttribute('deploy_pending');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // external_domain_protocol_number - computed: true, optional: false, required: false
  public get externalDomainProtocolNumber() {
    return this.getStringAttribute('external_domain_protocol_number');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }

  // instance_tenant_id - computed: true, optional: false, required: false
  public get instanceTenantId() {
    return this.getStringAttribute('instance_tenant_id');
  }

  // instance_version - computed: true, optional: false, required: false
  public get instanceVersion() {
    return this.getNumberAttribute('instance_version');
  }

  // interface_uuid - computed: true, optional: false, required: false
  public get interfaceUuid() {
    return this.getStringAttribute('interface_uuid');
  }

  // l2_handoff - computed: true, optional: false, required: false
  public get l2Handoff() {
    return this.getListAttribute('l2_handoff');
  }

  // l3_handoff - computed: true, optional: false, required: false
  private _l3Handoff = new DataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3HandoffList(this, "l3_handoff", false);
  public get l3Handoff() {
    return this._l3Handoff;
  }

  // policy_propagation_enabled - computed: true, optional: false, required: false
  public get policyPropagationEnabled() {
    return this.getStringAttribute('policy_propagation_enabled');
  }

  // policy_sgt_tag - computed: true, optional: false, required: false
  public get policySgtTag() {
    return this.getNumberAttribute('policy_sgt_tag');
  }
}

export class DataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsOutputReference {
    return new DataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettings {
}

export function dataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettingsToTerraform(struct?: DataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettingsToHclTerraform(struct?: DataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connected_to - computed: true, optional: false, required: false
  public get connectedTo() {
    return this.getListAttribute('connected_to');
  }

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }

  // deploy_pending - computed: true, optional: false, required: false
  public get deployPending() {
    return this.getStringAttribute('deploy_pending');
  }

  // dhcp_enabled - computed: true, optional: false, required: false
  public get dhcpEnabled() {
    return this.getStringAttribute('dhcp_enabled');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // ext_connectivity_settings - computed: true, optional: false, required: false
  private _extConnectivitySettings = new DataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsList(this, "ext_connectivity_settings", false);
  public get extConnectivitySettings() {
    return this._extConnectivitySettings;
  }

  // external_connectivity_ip_pool - computed: true, optional: false, required: false
  public get externalConnectivityIpPool() {
    return this.getStringAttribute('external_connectivity_ip_pool');
  }

  // external_domain_routing_protocol - computed: true, optional: false, required: false
  public get externalDomainRoutingProtocol() {
    return this.getStringAttribute('external_domain_routing_protocol');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }

  // instance_tenant_id - computed: true, optional: false, required: false
  public get instanceTenantId() {
    return this.getStringAttribute('instance_tenant_id');
  }

  // instance_version - computed: true, optional: false, required: false
  public get instanceVersion() {
    return this.getNumberAttribute('instance_version');
  }

  // internal_domain_protocol_number - computed: true, optional: false, required: false
  public get internalDomainProtocolNumber() {
    return this.getStringAttribute('internal_domain_protocol_number');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }

  // node_type - computed: true, optional: false, required: false
  public get nodeType() {
    return this.getListAttribute('node_type');
  }

  // storage - computed: true, optional: false, required: false
  public get storage() {
    return this.getNumberAttribute('storage');
  }
}

export class DataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettingsOutputReference {
    return new DataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcpIpAddress {
}

export function dataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcpIpAddressToTerraform(struct?: DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcpIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcpIpAddressToHclTerraform(struct?: DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcpIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcpIpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcpIpAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcpIpAddress | undefined) {
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

  // address_type - computed: true, optional: false, required: false
  public get addressType() {
    return this.getStringAttribute('address_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // padded_address - computed: true, optional: false, required: false
  public get paddedAddress() {
    return this.getStringAttribute('padded_address');
  }
}

export class DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcpIpAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcpIpAddressOutputReference {
    return new DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcpIpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcp {
}

export function dataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcpToTerraform(struct?: DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcpToHclTerraform(struct?: DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address - computed: true, optional: false, required: false
  private _ipAddress = new DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcpIpAddressList(this, "ip_address", false);
  public get ipAddress() {
    return this._ipAddress;
  }
}

export class DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcpList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcpOutputReference {
    return new DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDnsIp {
}

export function dataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDnsIpToTerraform(struct?: DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDnsIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDnsIpToHclTerraform(struct?: DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDnsIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDnsIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDnsIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDnsIp | undefined) {
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

  // address_type - computed: true, optional: false, required: false
  public get addressType() {
    return this.getStringAttribute('address_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // padded_address - computed: true, optional: false, required: false
  public get paddedAddress() {
    return this.getStringAttribute('padded_address');
  }
}

export class DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDnsIpList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDnsIpOutputReference {
    return new DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDnsIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDns {
}

export function dataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDnsToTerraform(struct?: DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDnsToHclTerraform(struct?: DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip - computed: true, optional: false, required: false
  private _ip = new DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDnsIpList(this, "ip", false);
  public get ip() {
    return this._ip;
  }
}

export class DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDnsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDnsOutputReference {
    return new DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettings {
}

export function dataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsToTerraform(struct?: DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsToHclTerraform(struct?: DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aaa - computed: true, optional: false, required: false
  public get aaa() {
    return this.getListAttribute('aaa');
  }

  // cmx - computed: true, optional: false, required: false
  public get cmx() {
    return this.getListAttribute('cmx');
  }

  // deploy_pending - computed: true, optional: false, required: false
  public get deployPending() {
    return this.getStringAttribute('deploy_pending');
  }

  // dhcp - computed: true, optional: false, required: false
  private _dhcp = new DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcpList(this, "dhcp", false);
  public get dhcp() {
    return this._dhcp;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // dns - computed: true, optional: false, required: false
  private _dns = new DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsDnsList(this, "dns", false);
  public get dns() {
    return this._dns;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }

  // instance_tenant_id - computed: true, optional: false, required: false
  public get instanceTenantId() {
    return this.getStringAttribute('instance_tenant_id');
  }

  // instance_version - computed: true, optional: false, required: false
  public get instanceVersion() {
    return this.getNumberAttribute('instance_version');
  }

  // ldap - computed: true, optional: false, required: false
  public get ldap() {
    return this.getListAttribute('ldap');
  }

  // native_vlan - computed: true, optional: false, required: false
  public get nativeVlan() {
    return this.getListAttribute('native_vlan');
  }

  // netflow - computed: true, optional: false, required: false
  public get netflow() {
    return this.getListAttribute('netflow');
  }

  // ntp - computed: true, optional: false, required: false
  public get ntp() {
    return this.getListAttribute('ntp');
  }

  // snmp - computed: true, optional: false, required: false
  public get snmp() {
    return this.getListAttribute('snmp');
  }

  // syslogs - computed: true, optional: false, required: false
  public get syslogs() {
    return this.getListAttribute('syslogs');
  }
}

export class DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsOutputReference {
    return new DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterSdaFabricBorderDeviceItemPayloadTransitNetworks {
}

export function dataDnacenterSdaFabricBorderDeviceItemPayloadTransitNetworksToTerraform(struct?: DataDnacenterSdaFabricBorderDeviceItemPayloadTransitNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterSdaFabricBorderDeviceItemPayloadTransitNetworksToHclTerraform(struct?: DataDnacenterSdaFabricBorderDeviceItemPayloadTransitNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterSdaFabricBorderDeviceItemPayloadTransitNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterSdaFabricBorderDeviceItemPayloadTransitNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterSdaFabricBorderDeviceItemPayloadTransitNetworks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id_ref - computed: true, optional: false, required: false
  public get idRef() {
    return this.getStringAttribute('id_ref');
  }
}

export class DataDnacenterSdaFabricBorderDeviceItemPayloadTransitNetworksList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterSdaFabricBorderDeviceItemPayloadTransitNetworksOutputReference {
    return new DataDnacenterSdaFabricBorderDeviceItemPayloadTransitNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterSdaFabricBorderDeviceItemPayload {
}

export function dataDnacenterSdaFabricBorderDeviceItemPayloadToTerraform(struct?: DataDnacenterSdaFabricBorderDeviceItemPayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterSdaFabricBorderDeviceItemPayloadToHclTerraform(struct?: DataDnacenterSdaFabricBorderDeviceItemPayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterSdaFabricBorderDeviceItemPayloadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterSdaFabricBorderDeviceItemPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterSdaFabricBorderDeviceItemPayload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // akc_settings_cfs - computed: true, optional: false, required: false
  public get akcSettingsCfs() {
    return this.getListAttribute('akc_settings_cfs');
  }

  // auth_entity_class - computed: true, optional: false, required: false
  public get authEntityClass() {
    return this.getNumberAttribute('auth_entity_class');
  }

  // auth_entity_id - computed: true, optional: false, required: false
  public get authEntityId() {
    return this.getNumberAttribute('auth_entity_id');
  }

  // cfs_change_info - computed: true, optional: false, required: false
  public get cfsChangeInfo() {
    return this.getListAttribute('cfs_change_info');
  }

  // configs - computed: true, optional: false, required: false
  public get configs() {
    return this.getListAttribute('configs');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }

  // custom_provisions - computed: true, optional: false, required: false
  public get customProvisions() {
    return this.getListAttribute('custom_provisions');
  }

  // deploy_pending - computed: true, optional: false, required: false
  public get deployPending() {
    return this.getStringAttribute('deploy_pending');
  }

  // deployed - computed: true, optional: false, required: false
  public get deployed() {
    return this.getStringAttribute('deployed');
  }

  // device_interface_info - computed: true, optional: false, required: false
  public get deviceInterfaceInfo() {
    return this.getListAttribute('device_interface_info');
  }

  // device_settings - computed: true, optional: false, required: false
  private _deviceSettings = new DataDnacenterSdaFabricBorderDeviceItemPayloadDeviceSettingsList(this, "device_settings", false);
  public get deviceSettings() {
    return this._deviceSettings;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }

  // instance_tenant_id - computed: true, optional: false, required: false
  public get instanceTenantId() {
    return this.getStringAttribute('instance_tenant_id');
  }

  // instance_version - computed: true, optional: false, required: false
  public get instanceVersion() {
    return this.getNumberAttribute('instance_version');
  }

  // is_seeded - computed: true, optional: false, required: false
  public get isSeeded() {
    return this.getStringAttribute('is_seeded');
  }

  // is_stale - computed: true, optional: false, required: false
  public get isStale() {
    return this.getStringAttribute('is_stale');
  }

  // last_update_time - computed: true, optional: false, required: false
  public get lastUpdateTime() {
    return this.getNumberAttribute('last_update_time');
  }

  // managed_sites - computed: true, optional: false, required: false
  public get managedSites() {
    return this.getListAttribute('managed_sites');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // network_device_id - computed: true, optional: false, required: false
  public get networkDeviceId() {
    return this.getStringAttribute('network_device_id');
  }

  // network_wide_settings - computed: true, optional: false, required: false
  private _networkWideSettings = new DataDnacenterSdaFabricBorderDeviceItemPayloadNetworkWideSettingsList(this, "network_wide_settings", false);
  public get networkWideSettings() {
    return this._networkWideSettings;
  }

  // other_device - computed: true, optional: false, required: false
  public get otherDevice() {
    return this.getListAttribute('other_device');
  }

  // provisioning_state - computed: true, optional: false, required: false
  public get provisioningState() {
    return this.getStringAttribute('provisioning_state');
  }

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getNumberAttribute('resource_version');
  }

  // roles - computed: true, optional: false, required: false
  public get roles() {
    return this.getListAttribute('roles');
  }

  // save_wan_connectivity_details_only - computed: true, optional: false, required: false
  public get saveWanConnectivityDetailsOnly() {
    return this.getStringAttribute('save_wan_connectivity_details_only');
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getStringAttribute('site_id');
  }

  // target_id_list - computed: true, optional: false, required: false
  public get targetIdList() {
    return this.getListAttribute('target_id_list');
  }

  // transit_networks - computed: true, optional: false, required: false
  private _transitNetworks = new DataDnacenterSdaFabricBorderDeviceItemPayloadTransitNetworksList(this, "transit_networks", false);
  public get transitNetworks() {
    return this._transitNetworks;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // virtual_network - computed: true, optional: false, required: false
  public get virtualNetwork() {
    return this.getListAttribute('virtual_network');
  }

  // wlan - computed: true, optional: false, required: false
  public get wlan() {
    return this.getListAttribute('wlan');
  }
}

export class DataDnacenterSdaFabricBorderDeviceItemPayloadList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterSdaFabricBorderDeviceItemPayloadOutputReference {
    return new DataDnacenterSdaFabricBorderDeviceItemPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterSdaFabricBorderDeviceItem {
}

export function dataDnacenterSdaFabricBorderDeviceItemToTerraform(struct?: DataDnacenterSdaFabricBorderDeviceItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterSdaFabricBorderDeviceItemToHclTerraform(struct?: DataDnacenterSdaFabricBorderDeviceItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterSdaFabricBorderDeviceItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterSdaFabricBorderDeviceItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterSdaFabricBorderDeviceItem | undefined) {
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

  // payload - computed: true, optional: false, required: false
  private _payload = new DataDnacenterSdaFabricBorderDeviceItemPayloadList(this, "payload", false);
  public get payload() {
    return this._payload;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataDnacenterSdaFabricBorderDeviceItemList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterSdaFabricBorderDeviceItemOutputReference {
    return new DataDnacenterSdaFabricBorderDeviceItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/sda_fabric_border_device dnacenter_sda_fabric_border_device}
*/
export class DataDnacenterSdaFabricBorderDevice extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_sda_fabric_border_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterSdaFabricBorderDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterSdaFabricBorderDevice to import
  * @param importFromId The id of the existing DataDnacenterSdaFabricBorderDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/sda_fabric_border_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterSdaFabricBorderDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_sda_fabric_border_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/sda_fabric_border_device dnacenter_sda_fabric_border_device} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterSdaFabricBorderDeviceConfig
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterSdaFabricBorderDeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_sda_fabric_border_device',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21',
        providerVersionConstraint: '1.1.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceManagementIpAddress = config.deviceManagementIpAddress;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_management_ip_address - computed: false, optional: false, required: true
  private _deviceManagementIpAddress?: string; 
  public get deviceManagementIpAddress() {
    return this.getStringAttribute('device_management_ip_address');
  }
  public set deviceManagementIpAddress(value: string) {
    this._deviceManagementIpAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceManagementIpAddressInput() {
    return this._deviceManagementIpAddress;
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

  // item - computed: true, optional: false, required: false
  private _item = new DataDnacenterSdaFabricBorderDeviceItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_management_ip_address: cdktf.stringToTerraform(this._deviceManagementIpAddress),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_management_ip_address: {
        value: cdktf.stringToHclTerraform(this._deviceManagementIpAddress),
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
