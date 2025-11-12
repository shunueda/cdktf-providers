// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_border_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SdaFabricBorderDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_border_device#id SdaFabricBorderDevice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_border_device#parameters SdaFabricBorderDevice#parameters}
  */
  readonly parameters?: SdaFabricBorderDeviceParameters[] | cdktf.IResolvable;
}
export interface SdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3HandoffVirtualNetwork {
}

export function sdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3HandoffVirtualNetworkToTerraform(struct?: SdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3HandoffVirtualNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3HandoffVirtualNetworkToHclTerraform(struct?: SdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3HandoffVirtualNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3HandoffVirtualNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3HandoffVirtualNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3HandoffVirtualNetwork | undefined) {
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

export class SdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3HandoffVirtualNetworkList extends cdktf.ComplexList {

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
  public get(index: number): SdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3HandoffVirtualNetworkOutputReference {
    return new SdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3HandoffVirtualNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3Handoff {
}

export function sdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3HandoffToTerraform(struct?: SdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3Handoff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3HandoffToHclTerraform(struct?: SdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3Handoff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3HandoffOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3Handoff | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3Handoff | undefined) {
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
  private _virtualNetwork = new SdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3HandoffVirtualNetworkList(this, "virtual_network", false);
  public get virtualNetwork() {
    return this._virtualNetwork;
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
}

export class SdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3HandoffList extends cdktf.ComplexList {

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
  public get(index: number): SdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3HandoffOutputReference {
    return new SdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3HandoffOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettings {
}

export function sdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsToTerraform(struct?: SdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsToHclTerraform(struct?: SdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettings | undefined) {
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
  private _l3Handoff = new SdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsL3HandoffList(this, "l3_handoff", false);
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

export class SdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsList extends cdktf.ComplexList {

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
  public get(index: number): SdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsOutputReference {
    return new SdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SdaFabricBorderDeviceItemPayloadDeviceSettings {
}

export function sdaFabricBorderDeviceItemPayloadDeviceSettingsToTerraform(struct?: SdaFabricBorderDeviceItemPayloadDeviceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sdaFabricBorderDeviceItemPayloadDeviceSettingsToHclTerraform(struct?: SdaFabricBorderDeviceItemPayloadDeviceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SdaFabricBorderDeviceItemPayloadDeviceSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SdaFabricBorderDeviceItemPayloadDeviceSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdaFabricBorderDeviceItemPayloadDeviceSettings | undefined) {
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
  private _extConnectivitySettings = new SdaFabricBorderDeviceItemPayloadDeviceSettingsExtConnectivitySettingsList(this, "ext_connectivity_settings", false);
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

export class SdaFabricBorderDeviceItemPayloadDeviceSettingsList extends cdktf.ComplexList {

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
  public get(index: number): SdaFabricBorderDeviceItemPayloadDeviceSettingsOutputReference {
    return new SdaFabricBorderDeviceItemPayloadDeviceSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcpIpAddress {
}

export function sdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcpIpAddressToTerraform(struct?: SdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcpIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcpIpAddressToHclTerraform(struct?: SdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcpIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcpIpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcpIpAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcpIpAddress | undefined) {
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

export class SdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcpIpAddressList extends cdktf.ComplexList {

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
  public get(index: number): SdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcpIpAddressOutputReference {
    return new SdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcpIpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcp {
}

export function sdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcpToTerraform(struct?: SdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcpToHclTerraform(struct?: SdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcp | undefined) {
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
  private _ipAddress = new SdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcpIpAddressList(this, "ip_address", false);
  public get ipAddress() {
    return this._ipAddress;
  }
}

export class SdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcpList extends cdktf.ComplexList {

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
  public get(index: number): SdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcpOutputReference {
    return new SdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SdaFabricBorderDeviceItemPayloadNetworkWideSettingsDnsIp {
}

export function sdaFabricBorderDeviceItemPayloadNetworkWideSettingsDnsIpToTerraform(struct?: SdaFabricBorderDeviceItemPayloadNetworkWideSettingsDnsIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sdaFabricBorderDeviceItemPayloadNetworkWideSettingsDnsIpToHclTerraform(struct?: SdaFabricBorderDeviceItemPayloadNetworkWideSettingsDnsIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SdaFabricBorderDeviceItemPayloadNetworkWideSettingsDnsIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SdaFabricBorderDeviceItemPayloadNetworkWideSettingsDnsIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdaFabricBorderDeviceItemPayloadNetworkWideSettingsDnsIp | undefined) {
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

export class SdaFabricBorderDeviceItemPayloadNetworkWideSettingsDnsIpList extends cdktf.ComplexList {

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
  public get(index: number): SdaFabricBorderDeviceItemPayloadNetworkWideSettingsDnsIpOutputReference {
    return new SdaFabricBorderDeviceItemPayloadNetworkWideSettingsDnsIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SdaFabricBorderDeviceItemPayloadNetworkWideSettingsDns {
}

export function sdaFabricBorderDeviceItemPayloadNetworkWideSettingsDnsToTerraform(struct?: SdaFabricBorderDeviceItemPayloadNetworkWideSettingsDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sdaFabricBorderDeviceItemPayloadNetworkWideSettingsDnsToHclTerraform(struct?: SdaFabricBorderDeviceItemPayloadNetworkWideSettingsDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SdaFabricBorderDeviceItemPayloadNetworkWideSettingsDnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SdaFabricBorderDeviceItemPayloadNetworkWideSettingsDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdaFabricBorderDeviceItemPayloadNetworkWideSettingsDns | undefined) {
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
  private _ip = new SdaFabricBorderDeviceItemPayloadNetworkWideSettingsDnsIpList(this, "ip", false);
  public get ip() {
    return this._ip;
  }
}

export class SdaFabricBorderDeviceItemPayloadNetworkWideSettingsDnsList extends cdktf.ComplexList {

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
  public get(index: number): SdaFabricBorderDeviceItemPayloadNetworkWideSettingsDnsOutputReference {
    return new SdaFabricBorderDeviceItemPayloadNetworkWideSettingsDnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SdaFabricBorderDeviceItemPayloadNetworkWideSettings {
}

export function sdaFabricBorderDeviceItemPayloadNetworkWideSettingsToTerraform(struct?: SdaFabricBorderDeviceItemPayloadNetworkWideSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sdaFabricBorderDeviceItemPayloadNetworkWideSettingsToHclTerraform(struct?: SdaFabricBorderDeviceItemPayloadNetworkWideSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SdaFabricBorderDeviceItemPayloadNetworkWideSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SdaFabricBorderDeviceItemPayloadNetworkWideSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdaFabricBorderDeviceItemPayloadNetworkWideSettings | undefined) {
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
  private _dhcp = new SdaFabricBorderDeviceItemPayloadNetworkWideSettingsDhcpList(this, "dhcp", false);
  public get dhcp() {
    return this._dhcp;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // dns - computed: true, optional: false, required: false
  private _dns = new SdaFabricBorderDeviceItemPayloadNetworkWideSettingsDnsList(this, "dns", false);
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

export class SdaFabricBorderDeviceItemPayloadNetworkWideSettingsList extends cdktf.ComplexList {

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
  public get(index: number): SdaFabricBorderDeviceItemPayloadNetworkWideSettingsOutputReference {
    return new SdaFabricBorderDeviceItemPayloadNetworkWideSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SdaFabricBorderDeviceItemPayloadTransitNetworks {
}

export function sdaFabricBorderDeviceItemPayloadTransitNetworksToTerraform(struct?: SdaFabricBorderDeviceItemPayloadTransitNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sdaFabricBorderDeviceItemPayloadTransitNetworksToHclTerraform(struct?: SdaFabricBorderDeviceItemPayloadTransitNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SdaFabricBorderDeviceItemPayloadTransitNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SdaFabricBorderDeviceItemPayloadTransitNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdaFabricBorderDeviceItemPayloadTransitNetworks | undefined) {
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

export class SdaFabricBorderDeviceItemPayloadTransitNetworksList extends cdktf.ComplexList {

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
  public get(index: number): SdaFabricBorderDeviceItemPayloadTransitNetworksOutputReference {
    return new SdaFabricBorderDeviceItemPayloadTransitNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SdaFabricBorderDeviceItemPayload {
}

export function sdaFabricBorderDeviceItemPayloadToTerraform(struct?: SdaFabricBorderDeviceItemPayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sdaFabricBorderDeviceItemPayloadToHclTerraform(struct?: SdaFabricBorderDeviceItemPayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SdaFabricBorderDeviceItemPayloadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SdaFabricBorderDeviceItemPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdaFabricBorderDeviceItemPayload | undefined) {
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
  private _deviceSettings = new SdaFabricBorderDeviceItemPayloadDeviceSettingsList(this, "device_settings", false);
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
  private _networkWideSettings = new SdaFabricBorderDeviceItemPayloadNetworkWideSettingsList(this, "network_wide_settings", false);
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
  private _transitNetworks = new SdaFabricBorderDeviceItemPayloadTransitNetworksList(this, "transit_networks", false);
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

export class SdaFabricBorderDeviceItemPayloadList extends cdktf.ComplexList {

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
  public get(index: number): SdaFabricBorderDeviceItemPayloadOutputReference {
    return new SdaFabricBorderDeviceItemPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SdaFabricBorderDeviceItem {
}

export function sdaFabricBorderDeviceItemToTerraform(struct?: SdaFabricBorderDeviceItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sdaFabricBorderDeviceItemToHclTerraform(struct?: SdaFabricBorderDeviceItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SdaFabricBorderDeviceItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SdaFabricBorderDeviceItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdaFabricBorderDeviceItem | undefined) {
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
  private _payload = new SdaFabricBorderDeviceItemPayloadList(this, "payload", false);
  public get payload() {
    return this._payload;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class SdaFabricBorderDeviceItemList extends cdktf.ComplexList {

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
  public get(index: number): SdaFabricBorderDeviceItemOutputReference {
    return new SdaFabricBorderDeviceItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL2Handoff {
  /**
  * Virtual Network Name, that is associated to Fabric Site
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_border_device#virtual_network_name SdaFabricBorderDevice#virtual_network_name}
  */
  readonly virtualNetworkName?: string;
  /**
  * Vlan Name of L2 Handoff
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_border_device#vlan_name SdaFabricBorderDevice#vlan_name}
  */
  readonly vlanName?: string;
}

export function sdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL2HandoffToTerraform(struct?: SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL2Handoff | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_network_name: cdktf.stringToTerraform(struct!.virtualNetworkName),
    vlan_name: cdktf.stringToTerraform(struct!.vlanName),
  }
}


export function sdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL2HandoffToHclTerraform(struct?: SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL2Handoff | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    virtual_network_name: {
      value: cdktf.stringToHclTerraform(struct!.virtualNetworkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_name: {
      value: cdktf.stringToHclTerraform(struct!.vlanName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL2HandoffOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL2Handoff | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._virtualNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkName = this._virtualNetworkName;
    }
    if (this._vlanName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanName = this._vlanName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL2Handoff | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._virtualNetworkName = undefined;
      this._vlanName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._virtualNetworkName = value.virtualNetworkName;
      this._vlanName = value.vlanName;
    }
  }

  // virtual_network_name - computed: true, optional: true, required: false
  private _virtualNetworkName?: string; 
  public get virtualNetworkName() {
    return this.getStringAttribute('virtual_network_name');
  }
  public set virtualNetworkName(value: string) {
    this._virtualNetworkName = value;
  }
  public resetVirtualNetworkName() {
    this._virtualNetworkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkNameInput() {
    return this._virtualNetworkName;
  }

  // vlan_name - computed: true, optional: true, required: false
  private _vlanName?: string; 
  public get vlanName() {
    return this.getStringAttribute('vlan_name');
  }
  public set vlanName(value: string) {
    this._vlanName = value;
  }
  public resetVlanName() {
    this._vlanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanNameInput() {
    return this._vlanName;
  }
}

export class SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL2HandoffList extends cdktf.ComplexList {
  public internalValue? : SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL2Handoff[] | cdktf.IResolvable

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
  public get(index: number): SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL2HandoffOutputReference {
    return new SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL2HandoffOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL3HandoffVirtualNetwork {
  /**
  * Virtual Network Name, that is associated to Fabric Site
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_border_device#virtual_network_name SdaFabricBorderDevice#virtual_network_name}
  */
  readonly virtualNetworkName?: string;
  /**
  * Vlan Id (e.g.,2-4096 except for reserved VLANs (1002-1005, 2046, 4095))
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_border_device#vlan_id SdaFabricBorderDevice#vlan_id}
  */
  readonly vlanId?: string;
}

export function sdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL3HandoffVirtualNetworkToTerraform(struct?: SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL3HandoffVirtualNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_network_name: cdktf.stringToTerraform(struct!.virtualNetworkName),
    vlan_id: cdktf.stringToTerraform(struct!.vlanId),
  }
}


export function sdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL3HandoffVirtualNetworkToHclTerraform(struct?: SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL3HandoffVirtualNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    virtual_network_name: {
      value: cdktf.stringToHclTerraform(struct!.virtualNetworkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.stringToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL3HandoffVirtualNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL3HandoffVirtualNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._virtualNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkName = this._virtualNetworkName;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL3HandoffVirtualNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._virtualNetworkName = undefined;
      this._vlanId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._virtualNetworkName = value.virtualNetworkName;
      this._vlanId = value.vlanId;
    }
  }

  // virtual_network_name - computed: true, optional: true, required: false
  private _virtualNetworkName?: string; 
  public get virtualNetworkName() {
    return this.getStringAttribute('virtual_network_name');
  }
  public set virtualNetworkName(value: string) {
    this._virtualNetworkName = value;
  }
  public resetVirtualNetworkName() {
    this._virtualNetworkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkNameInput() {
    return this._virtualNetworkName;
  }

  // vlan_id - computed: true, optional: true, required: false
  private _vlanId?: string; 
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
  public set vlanId(value: string) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }
}

export class SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL3HandoffVirtualNetworkList extends cdktf.ComplexList {
  public internalValue? : SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL3HandoffVirtualNetwork[] | cdktf.IResolvable

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
  public get(index: number): SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL3HandoffVirtualNetworkOutputReference {
    return new SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL3HandoffVirtualNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL3Handoff {
  /**
  * virtual_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_border_device#virtual_network SdaFabricBorderDevice#virtual_network}
  */
  readonly virtualNetwork?: SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL3HandoffVirtualNetwork[] | cdktf.IResolvable;
}

export function sdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL3HandoffToTerraform(struct?: SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL3Handoff | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_network: cdktf.listMapper(sdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL3HandoffVirtualNetworkToTerraform, true)(struct!.virtualNetwork),
  }
}


export function sdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL3HandoffToHclTerraform(struct?: SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL3Handoff | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    virtual_network: {
      value: cdktf.listMapperHcl(sdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL3HandoffVirtualNetworkToHclTerraform, true)(struct!.virtualNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL3HandoffVirtualNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL3HandoffOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL3Handoff | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._virtualNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetwork = this._virtualNetwork?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL3Handoff | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._virtualNetwork.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._virtualNetwork.internalValue = value.virtualNetwork;
    }
  }

  // virtual_network - computed: false, optional: true, required: false
  private _virtualNetwork = new SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL3HandoffVirtualNetworkList(this, "virtual_network", false);
  public get virtualNetwork() {
    return this._virtualNetwork;
  }
  public putVirtualNetwork(value: SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL3HandoffVirtualNetwork[] | cdktf.IResolvable) {
    this._virtualNetwork.internalValue = value;
  }
  public resetVirtualNetwork() {
    this._virtualNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkInput() {
    return this._virtualNetwork.internalValue;
  }
}

export class SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL3HandoffList extends cdktf.ComplexList {
  public internalValue? : SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL3Handoff[] | cdktf.IResolvable

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
  public get(index: number): SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL3HandoffOutputReference {
    return new SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL3HandoffOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettings {
  /**
  * External Autonomous System Number peer (e.g.,1-65535)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_border_device#external_autonomou_system_number SdaFabricBorderDevice#external_autonomou_system_number}
  */
  readonly externalAutonomouSystemNumber?: string;
  /**
  * Interface Description
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_border_device#interface_description SdaFabricBorderDevice#interface_description}
  */
  readonly interfaceDescription?: string;
  /**
  * Interface Name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_border_device#interface_name SdaFabricBorderDevice#interface_name}
  */
  readonly interfaceName?: string;
  /**
  * l2_handoff block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_border_device#l2_handoff SdaFabricBorderDevice#l2_handoff}
  */
  readonly l2Handoff?: SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL2Handoff[] | cdktf.IResolvable;
  /**
  * l3_handoff block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_border_device#l3_handoff SdaFabricBorderDevice#l3_handoff}
  */
  readonly l3Handoff?: SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL3Handoff[] | cdktf.IResolvable;
}

export function sdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsToTerraform(struct?: SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_autonomou_system_number: cdktf.stringToTerraform(struct!.externalAutonomouSystemNumber),
    interface_description: cdktf.stringToTerraform(struct!.interfaceDescription),
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    l2_handoff: cdktf.listMapper(sdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL2HandoffToTerraform, true)(struct!.l2Handoff),
    l3_handoff: cdktf.listMapper(sdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL3HandoffToTerraform, true)(struct!.l3Handoff),
  }
}


export function sdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsToHclTerraform(struct?: SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_autonomou_system_number: {
      value: cdktf.stringToHclTerraform(struct!.externalAutonomouSystemNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_description: {
      value: cdktf.stringToHclTerraform(struct!.interfaceDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    l2_handoff: {
      value: cdktf.listMapperHcl(sdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL2HandoffToHclTerraform, true)(struct!.l2Handoff),
      isBlock: true,
      type: "list",
      storageClassType: "SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL2HandoffList",
    },
    l3_handoff: {
      value: cdktf.listMapperHcl(sdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL3HandoffToHclTerraform, true)(struct!.l3Handoff),
      isBlock: true,
      type: "list",
      storageClassType: "SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL3HandoffList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalAutonomouSystemNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalAutonomouSystemNumber = this._externalAutonomouSystemNumber;
    }
    if (this._interfaceDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceDescription = this._interfaceDescription;
    }
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._l2Handoff?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.l2Handoff = this._l2Handoff?.internalValue;
    }
    if (this._l3Handoff?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3Handoff = this._l3Handoff?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalAutonomouSystemNumber = undefined;
      this._interfaceDescription = undefined;
      this._interfaceName = undefined;
      this._l2Handoff.internalValue = undefined;
      this._l3Handoff.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalAutonomouSystemNumber = value.externalAutonomouSystemNumber;
      this._interfaceDescription = value.interfaceDescription;
      this._interfaceName = value.interfaceName;
      this._l2Handoff.internalValue = value.l2Handoff;
      this._l3Handoff.internalValue = value.l3Handoff;
    }
  }

  // external_autonomou_system_number - computed: true, optional: true, required: false
  private _externalAutonomouSystemNumber?: string; 
  public get externalAutonomouSystemNumber() {
    return this.getStringAttribute('external_autonomou_system_number');
  }
  public set externalAutonomouSystemNumber(value: string) {
    this._externalAutonomouSystemNumber = value;
  }
  public resetExternalAutonomouSystemNumber() {
    this._externalAutonomouSystemNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAutonomouSystemNumberInput() {
    return this._externalAutonomouSystemNumber;
  }

  // interface_description - computed: true, optional: true, required: false
  private _interfaceDescription?: string; 
  public get interfaceDescription() {
    return this.getStringAttribute('interface_description');
  }
  public set interfaceDescription(value: string) {
    this._interfaceDescription = value;
  }
  public resetInterfaceDescription() {
    this._interfaceDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceDescriptionInput() {
    return this._interfaceDescription;
  }

  // interface_name - computed: true, optional: true, required: false
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  public resetInterfaceName() {
    this._interfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // l2_handoff - computed: false, optional: true, required: false
  private _l2Handoff = new SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL2HandoffList(this, "l2_handoff", false);
  public get l2Handoff() {
    return this._l2Handoff;
  }
  public putL2Handoff(value: SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL2Handoff[] | cdktf.IResolvable) {
    this._l2Handoff.internalValue = value;
  }
  public resetL2Handoff() {
    this._l2Handoff.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2HandoffInput() {
    return this._l2Handoff.internalValue;
  }

  // l3_handoff - computed: false, optional: true, required: false
  private _l3Handoff = new SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL3HandoffList(this, "l3_handoff", false);
  public get l3Handoff() {
    return this._l3Handoff;
  }
  public putL3Handoff(value: SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsL3Handoff[] | cdktf.IResolvable) {
    this._l3Handoff.internalValue = value;
  }
  public resetL3Handoff() {
    this._l3Handoff.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3HandoffInput() {
    return this._l3Handoff.internalValue;
  }
}

export class SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsList extends cdktf.ComplexList {
  public internalValue? : SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettings[] | cdktf.IResolvable

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
  public get(index: number): SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsOutputReference {
    return new SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SdaFabricBorderDeviceParametersPayload {
  /**
  * Border priority associated with a given device. Allowed range for Border Priority is [1-9]. A lower value indicates higher priority. E.g., a priority of 1 takes precedence over 5. Default priority would be set to 10.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_border_device#border_priority SdaFabricBorderDevice#border_priority}
  */
  readonly borderPriority?: string;
  /**
  * Border Session Type
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_border_device#border_session_type SdaFabricBorderDevice#border_session_type}
  */
  readonly borderSessionType?: string;
  /**
  * Border With External Connectivity (Note: True for transit and False for non-transit border)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_border_device#border_with_external_connectivity SdaFabricBorderDevice#border_with_external_connectivity}
  */
  readonly borderWithExternalConnectivity?: string;
  /**
  * Connected to Internet
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_border_device#connected_to_internet SdaFabricBorderDevice#connected_to_internet}
  */
  readonly connectedToInternet?: string;
  /**
  * Management Ip Address of the provisioned Device
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_border_device#device_management_ip_address SdaFabricBorderDevice#device_management_ip_address}
  */
  readonly deviceManagementIpAddress?: string;
  /**
  * Supported Device Roles in SD-Access fabric. Allowed roles are "Border_Node","Control_Plane_Node","Edge_Node". E.g. ["Border_Node"] or ["Border_Node", "Control_Plane_Node"] or ["Border_Node", "Control_Plane_Node","Edge_Node"]
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_border_device#device_role SdaFabricBorderDevice#device_role}
  */
  readonly deviceRole?: string[];
  /**
  * External Connectivity IpPool Name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_border_device#external_connectivity_ip_pool_name SdaFabricBorderDevice#external_connectivity_ip_pool_name}
  */
  readonly externalConnectivityIpPoolName?: string;
  /**
  * External Domain Routing Protocol Name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_border_device#external_domain_routing_protocol_name SdaFabricBorderDevice#external_domain_routing_protocol_name}
  */
  readonly externalDomainRoutingProtocolName?: string;
  /**
  * Internal Autonomouns System Number (e.g.,1-65535)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_border_device#internal_autonomou_system_number SdaFabricBorderDevice#internal_autonomou_system_number}
  */
  readonly internalAutonomouSystemNumber?: string;
  /**
  * Route Distribution Protocol for Control Plane Device. Allowed values are "LISP_BGP" or "LISP_PUB_SUB". Default value is "LISP_BGP"
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_border_device#route_distribution_protocol SdaFabricBorderDevice#route_distribution_protocol}
  */
  readonly routeDistributionProtocol?: string;
  /**
  * SD-Access Transit Network Name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_border_device#sda_transit_network_name SdaFabricBorderDevice#sda_transit_network_name}
  */
  readonly sdaTransitNetworkName?: string;
  /**
  * Site Name Hierarchy of provisioned Device(site should be part of Fabric Site)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_border_device#site_name_hierarchy SdaFabricBorderDevice#site_name_hierarchy}
  */
  readonly siteNameHierarchy?: string;
  /**
  * external_connectivity_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_border_device#external_connectivity_settings SdaFabricBorderDevice#external_connectivity_settings}
  */
  readonly externalConnectivitySettings?: SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettings[] | cdktf.IResolvable;
}

export function sdaFabricBorderDeviceParametersPayloadToTerraform(struct?: SdaFabricBorderDeviceParametersPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    border_priority: cdktf.stringToTerraform(struct!.borderPriority),
    border_session_type: cdktf.stringToTerraform(struct!.borderSessionType),
    border_with_external_connectivity: cdktf.stringToTerraform(struct!.borderWithExternalConnectivity),
    connected_to_internet: cdktf.stringToTerraform(struct!.connectedToInternet),
    device_management_ip_address: cdktf.stringToTerraform(struct!.deviceManagementIpAddress),
    device_role: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deviceRole),
    external_connectivity_ip_pool_name: cdktf.stringToTerraform(struct!.externalConnectivityIpPoolName),
    external_domain_routing_protocol_name: cdktf.stringToTerraform(struct!.externalDomainRoutingProtocolName),
    internal_autonomou_system_number: cdktf.stringToTerraform(struct!.internalAutonomouSystemNumber),
    route_distribution_protocol: cdktf.stringToTerraform(struct!.routeDistributionProtocol),
    sda_transit_network_name: cdktf.stringToTerraform(struct!.sdaTransitNetworkName),
    site_name_hierarchy: cdktf.stringToTerraform(struct!.siteNameHierarchy),
    external_connectivity_settings: cdktf.listMapper(sdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsToTerraform, true)(struct!.externalConnectivitySettings),
  }
}


export function sdaFabricBorderDeviceParametersPayloadToHclTerraform(struct?: SdaFabricBorderDeviceParametersPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    border_priority: {
      value: cdktf.stringToHclTerraform(struct!.borderPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    border_session_type: {
      value: cdktf.stringToHclTerraform(struct!.borderSessionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    border_with_external_connectivity: {
      value: cdktf.stringToHclTerraform(struct!.borderWithExternalConnectivity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connected_to_internet: {
      value: cdktf.stringToHclTerraform(struct!.connectedToInternet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_management_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.deviceManagementIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_role: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deviceRole),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    external_connectivity_ip_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.externalConnectivityIpPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_domain_routing_protocol_name: {
      value: cdktf.stringToHclTerraform(struct!.externalDomainRoutingProtocolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internal_autonomou_system_number: {
      value: cdktf.stringToHclTerraform(struct!.internalAutonomouSystemNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_distribution_protocol: {
      value: cdktf.stringToHclTerraform(struct!.routeDistributionProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sda_transit_network_name: {
      value: cdktf.stringToHclTerraform(struct!.sdaTransitNetworkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_name_hierarchy: {
      value: cdktf.stringToHclTerraform(struct!.siteNameHierarchy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_connectivity_settings: {
      value: cdktf.listMapperHcl(sdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsToHclTerraform, true)(struct!.externalConnectivitySettings),
      isBlock: true,
      type: "list",
      storageClassType: "SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SdaFabricBorderDeviceParametersPayloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SdaFabricBorderDeviceParametersPayload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._borderPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.borderPriority = this._borderPriority;
    }
    if (this._borderSessionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.borderSessionType = this._borderSessionType;
    }
    if (this._borderWithExternalConnectivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.borderWithExternalConnectivity = this._borderWithExternalConnectivity;
    }
    if (this._connectedToInternet !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectedToInternet = this._connectedToInternet;
    }
    if (this._deviceManagementIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceManagementIpAddress = this._deviceManagementIpAddress;
    }
    if (this._deviceRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceRole = this._deviceRole;
    }
    if (this._externalConnectivityIpPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalConnectivityIpPoolName = this._externalConnectivityIpPoolName;
    }
    if (this._externalDomainRoutingProtocolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalDomainRoutingProtocolName = this._externalDomainRoutingProtocolName;
    }
    if (this._internalAutonomouSystemNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalAutonomouSystemNumber = this._internalAutonomouSystemNumber;
    }
    if (this._routeDistributionProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeDistributionProtocol = this._routeDistributionProtocol;
    }
    if (this._sdaTransitNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdaTransitNetworkName = this._sdaTransitNetworkName;
    }
    if (this._siteNameHierarchy !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteNameHierarchy = this._siteNameHierarchy;
    }
    if (this._externalConnectivitySettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalConnectivitySettings = this._externalConnectivitySettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdaFabricBorderDeviceParametersPayload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._borderPriority = undefined;
      this._borderSessionType = undefined;
      this._borderWithExternalConnectivity = undefined;
      this._connectedToInternet = undefined;
      this._deviceManagementIpAddress = undefined;
      this._deviceRole = undefined;
      this._externalConnectivityIpPoolName = undefined;
      this._externalDomainRoutingProtocolName = undefined;
      this._internalAutonomouSystemNumber = undefined;
      this._routeDistributionProtocol = undefined;
      this._sdaTransitNetworkName = undefined;
      this._siteNameHierarchy = undefined;
      this._externalConnectivitySettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._borderPriority = value.borderPriority;
      this._borderSessionType = value.borderSessionType;
      this._borderWithExternalConnectivity = value.borderWithExternalConnectivity;
      this._connectedToInternet = value.connectedToInternet;
      this._deviceManagementIpAddress = value.deviceManagementIpAddress;
      this._deviceRole = value.deviceRole;
      this._externalConnectivityIpPoolName = value.externalConnectivityIpPoolName;
      this._externalDomainRoutingProtocolName = value.externalDomainRoutingProtocolName;
      this._internalAutonomouSystemNumber = value.internalAutonomouSystemNumber;
      this._routeDistributionProtocol = value.routeDistributionProtocol;
      this._sdaTransitNetworkName = value.sdaTransitNetworkName;
      this._siteNameHierarchy = value.siteNameHierarchy;
      this._externalConnectivitySettings.internalValue = value.externalConnectivitySettings;
    }
  }

  // border_priority - computed: true, optional: true, required: false
  private _borderPriority?: string; 
  public get borderPriority() {
    return this.getStringAttribute('border_priority');
  }
  public set borderPriority(value: string) {
    this._borderPriority = value;
  }
  public resetBorderPriority() {
    this._borderPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get borderPriorityInput() {
    return this._borderPriority;
  }

  // border_session_type - computed: true, optional: true, required: false
  private _borderSessionType?: string; 
  public get borderSessionType() {
    return this.getStringAttribute('border_session_type');
  }
  public set borderSessionType(value: string) {
    this._borderSessionType = value;
  }
  public resetBorderSessionType() {
    this._borderSessionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get borderSessionTypeInput() {
    return this._borderSessionType;
  }

  // border_with_external_connectivity - computed: true, optional: true, required: false
  private _borderWithExternalConnectivity?: string; 
  public get borderWithExternalConnectivity() {
    return this.getStringAttribute('border_with_external_connectivity');
  }
  public set borderWithExternalConnectivity(value: string) {
    this._borderWithExternalConnectivity = value;
  }
  public resetBorderWithExternalConnectivity() {
    this._borderWithExternalConnectivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get borderWithExternalConnectivityInput() {
    return this._borderWithExternalConnectivity;
  }

  // connected_to_internet - computed: true, optional: true, required: false
  private _connectedToInternet?: string; 
  public get connectedToInternet() {
    return this.getStringAttribute('connected_to_internet');
  }
  public set connectedToInternet(value: string) {
    this._connectedToInternet = value;
  }
  public resetConnectedToInternet() {
    this._connectedToInternet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectedToInternetInput() {
    return this._connectedToInternet;
  }

  // device_management_ip_address - computed: true, optional: true, required: false
  private _deviceManagementIpAddress?: string; 
  public get deviceManagementIpAddress() {
    return this.getStringAttribute('device_management_ip_address');
  }
  public set deviceManagementIpAddress(value: string) {
    this._deviceManagementIpAddress = value;
  }
  public resetDeviceManagementIpAddress() {
    this._deviceManagementIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceManagementIpAddressInput() {
    return this._deviceManagementIpAddress;
  }

  // device_role - computed: true, optional: true, required: false
  private _deviceRole?: string[]; 
  public get deviceRole() {
    return this.getListAttribute('device_role');
  }
  public set deviceRole(value: string[]) {
    this._deviceRole = value;
  }
  public resetDeviceRole() {
    this._deviceRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceRoleInput() {
    return this._deviceRole;
  }

  // external_connectivity_ip_pool_name - computed: true, optional: true, required: false
  private _externalConnectivityIpPoolName?: string; 
  public get externalConnectivityIpPoolName() {
    return this.getStringAttribute('external_connectivity_ip_pool_name');
  }
  public set externalConnectivityIpPoolName(value: string) {
    this._externalConnectivityIpPoolName = value;
  }
  public resetExternalConnectivityIpPoolName() {
    this._externalConnectivityIpPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalConnectivityIpPoolNameInput() {
    return this._externalConnectivityIpPoolName;
  }

  // external_domain_routing_protocol_name - computed: true, optional: true, required: false
  private _externalDomainRoutingProtocolName?: string; 
  public get externalDomainRoutingProtocolName() {
    return this.getStringAttribute('external_domain_routing_protocol_name');
  }
  public set externalDomainRoutingProtocolName(value: string) {
    this._externalDomainRoutingProtocolName = value;
  }
  public resetExternalDomainRoutingProtocolName() {
    this._externalDomainRoutingProtocolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDomainRoutingProtocolNameInput() {
    return this._externalDomainRoutingProtocolName;
  }

  // internal_autonomou_system_number - computed: true, optional: true, required: false
  private _internalAutonomouSystemNumber?: string; 
  public get internalAutonomouSystemNumber() {
    return this.getStringAttribute('internal_autonomou_system_number');
  }
  public set internalAutonomouSystemNumber(value: string) {
    this._internalAutonomouSystemNumber = value;
  }
  public resetInternalAutonomouSystemNumber() {
    this._internalAutonomouSystemNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalAutonomouSystemNumberInput() {
    return this._internalAutonomouSystemNumber;
  }

  // route_distribution_protocol - computed: true, optional: true, required: false
  private _routeDistributionProtocol?: string; 
  public get routeDistributionProtocol() {
    return this.getStringAttribute('route_distribution_protocol');
  }
  public set routeDistributionProtocol(value: string) {
    this._routeDistributionProtocol = value;
  }
  public resetRouteDistributionProtocol() {
    this._routeDistributionProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeDistributionProtocolInput() {
    return this._routeDistributionProtocol;
  }

  // sda_transit_network_name - computed: true, optional: true, required: false
  private _sdaTransitNetworkName?: string; 
  public get sdaTransitNetworkName() {
    return this.getStringAttribute('sda_transit_network_name');
  }
  public set sdaTransitNetworkName(value: string) {
    this._sdaTransitNetworkName = value;
  }
  public resetSdaTransitNetworkName() {
    this._sdaTransitNetworkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdaTransitNetworkNameInput() {
    return this._sdaTransitNetworkName;
  }

  // site_name_hierarchy - computed: true, optional: true, required: false
  private _siteNameHierarchy?: string; 
  public get siteNameHierarchy() {
    return this.getStringAttribute('site_name_hierarchy');
  }
  public set siteNameHierarchy(value: string) {
    this._siteNameHierarchy = value;
  }
  public resetSiteNameHierarchy() {
    this._siteNameHierarchy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteNameHierarchyInput() {
    return this._siteNameHierarchy;
  }

  // external_connectivity_settings - computed: false, optional: true, required: false
  private _externalConnectivitySettings = new SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettingsList(this, "external_connectivity_settings", false);
  public get externalConnectivitySettings() {
    return this._externalConnectivitySettings;
  }
  public putExternalConnectivitySettings(value: SdaFabricBorderDeviceParametersPayloadExternalConnectivitySettings[] | cdktf.IResolvable) {
    this._externalConnectivitySettings.internalValue = value;
  }
  public resetExternalConnectivitySettings() {
    this._externalConnectivitySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalConnectivitySettingsInput() {
    return this._externalConnectivitySettings.internalValue;
  }
}

export class SdaFabricBorderDeviceParametersPayloadList extends cdktf.ComplexList {
  public internalValue? : SdaFabricBorderDeviceParametersPayload[] | cdktf.IResolvable

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
  public get(index: number): SdaFabricBorderDeviceParametersPayloadOutputReference {
    return new SdaFabricBorderDeviceParametersPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SdaFabricBorderDeviceParameters {
  /**
  * payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_border_device#payload SdaFabricBorderDevice#payload}
  */
  readonly payload?: SdaFabricBorderDeviceParametersPayload[] | cdktf.IResolvable;
}

export function sdaFabricBorderDeviceParametersToTerraform(struct?: SdaFabricBorderDeviceParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    payload: cdktf.listMapper(sdaFabricBorderDeviceParametersPayloadToTerraform, true)(struct!.payload),
  }
}


export function sdaFabricBorderDeviceParametersToHclTerraform(struct?: SdaFabricBorderDeviceParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    payload: {
      value: cdktf.listMapperHcl(sdaFabricBorderDeviceParametersPayloadToHclTerraform, true)(struct!.payload),
      isBlock: true,
      type: "list",
      storageClassType: "SdaFabricBorderDeviceParametersPayloadList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SdaFabricBorderDeviceParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SdaFabricBorderDeviceParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdaFabricBorderDeviceParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._payload.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._payload.internalValue = value.payload;
    }
  }

  // payload - computed: false, optional: true, required: false
  private _payload = new SdaFabricBorderDeviceParametersPayloadList(this, "payload", false);
  public get payload() {
    return this._payload;
  }
  public putPayload(value: SdaFabricBorderDeviceParametersPayload[] | cdktf.IResolvable) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
  }
}

export class SdaFabricBorderDeviceParametersList extends cdktf.ComplexList {
  public internalValue? : SdaFabricBorderDeviceParameters[] | cdktf.IResolvable

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
  public get(index: number): SdaFabricBorderDeviceParametersOutputReference {
    return new SdaFabricBorderDeviceParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_border_device dnacenter_sda_fabric_border_device}
*/
export class SdaFabricBorderDevice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_sda_fabric_border_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SdaFabricBorderDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SdaFabricBorderDevice to import
  * @param importFromId The id of the existing SdaFabricBorderDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_border_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SdaFabricBorderDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_sda_fabric_border_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_border_device dnacenter_sda_fabric_border_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SdaFabricBorderDeviceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SdaFabricBorderDeviceConfig = {}) {
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
    this._id = config.id;
    this._parameters.internalValue = config.parameters;
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

  // item - computed: true, optional: false, required: false
  private _item = new SdaFabricBorderDeviceItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new SdaFabricBorderDeviceParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: SdaFabricBorderDeviceParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parameters: cdktf.listMapper(sdaFabricBorderDeviceParametersToTerraform, true)(this._parameters.internalValue),
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
      parameters: {
        value: cdktf.listMapperHcl(sdaFabricBorderDeviceParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SdaFabricBorderDeviceParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
