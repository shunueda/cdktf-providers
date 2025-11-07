// https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/cloud_router_connections
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPacketfabricCloudRouterConnectionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Circuit ID of the target cloud router. This starts with "PF-L3-CUST-".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/cloud_router_connections#circuit_id DataPacketfabricCloudRouterConnections#circuit_id}
  */
  readonly circuitId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/cloud_router_connections#id DataPacketfabricCloudRouterConnections#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataPacketfabricCloudRouterConnectionsCloudConnectionsBgpStateListStruct {
}

export function dataPacketfabricCloudRouterConnectionsCloudConnectionsBgpStateListStructToTerraform(struct?: DataPacketfabricCloudRouterConnectionsCloudConnectionsBgpStateListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPacketfabricCloudRouterConnectionsCloudConnectionsBgpStateListStructToHclTerraform(struct?: DataPacketfabricCloudRouterConnectionsCloudConnectionsBgpStateListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPacketfabricCloudRouterConnectionsCloudConnectionsBgpStateListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPacketfabricCloudRouterConnectionsCloudConnectionsBgpStateListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPacketfabricCloudRouterConnectionsCloudConnectionsBgpStateListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bgp_settings_uuid - computed: true, optional: false, required: false
  public get bgpSettingsUuid() {
    return this.getStringAttribute('bgp_settings_uuid');
  }

  // bgp_state - computed: true, optional: false, required: false
  public get bgpState() {
    return this.getStringAttribute('bgp_state');
  }
}

export class DataPacketfabricCloudRouterConnectionsCloudConnectionsBgpStateListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataPacketfabricCloudRouterConnectionsCloudConnectionsBgpStateListStructOutputReference {
    return new DataPacketfabricCloudRouterConnectionsCloudConnectionsBgpStateListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPacketfabricCloudRouterConnectionsCloudConnectionsCloudProvider {
}

export function dataPacketfabricCloudRouterConnectionsCloudConnectionsCloudProviderToTerraform(struct?: DataPacketfabricCloudRouterConnectionsCloudConnectionsCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPacketfabricCloudRouterConnectionsCloudConnectionsCloudProviderToHclTerraform(struct?: DataPacketfabricCloudRouterConnectionsCloudConnectionsCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPacketfabricCloudRouterConnectionsCloudConnectionsCloudProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPacketfabricCloudRouterConnectionsCloudConnectionsCloudProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPacketfabricCloudRouterConnectionsCloudConnectionsCloudProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pop - computed: true, optional: false, required: false
  public get pop() {
    return this.getStringAttribute('pop');
  }

  // site - computed: true, optional: false, required: false
  public get site() {
    return this.getStringAttribute('site');
  }
}

export class DataPacketfabricCloudRouterConnectionsCloudConnectionsCloudProviderList extends cdktf.ComplexList {

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
  public get(index: number): DataPacketfabricCloudRouterConnectionsCloudConnectionsCloudProviderOutputReference {
    return new DataPacketfabricCloudRouterConnectionsCloudConnectionsCloudProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPacketfabricCloudRouterConnectionsCloudConnectionsCloudSettingsCloudState {
}

export function dataPacketfabricCloudRouterConnectionsCloudConnectionsCloudSettingsCloudStateToTerraform(struct?: DataPacketfabricCloudRouterConnectionsCloudConnectionsCloudSettingsCloudState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPacketfabricCloudRouterConnectionsCloudConnectionsCloudSettingsCloudStateToHclTerraform(struct?: DataPacketfabricCloudRouterConnectionsCloudConnectionsCloudSettingsCloudState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPacketfabricCloudRouterConnectionsCloudConnectionsCloudSettingsCloudStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPacketfabricCloudRouterConnectionsCloudConnectionsCloudSettingsCloudState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPacketfabricCloudRouterConnectionsCloudConnectionsCloudSettingsCloudState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_dx_connection_state - computed: true, optional: false, required: false
  public get awsDxConnectionState() {
    return this.getStringAttribute('aws_dx_connection_state');
  }

  // aws_dx_port_encryption_status - computed: true, optional: false, required: false
  public get awsDxPortEncryptionStatus() {
    return this.getStringAttribute('aws_dx_port_encryption_status');
  }

  // aws_vif_state - computed: true, optional: false, required: false
  public get awsVifState() {
    return this.getStringAttribute('aws_vif_state');
  }

  // bgp_state - computed: true, optional: false, required: false
  public get bgpState() {
    return this.getStringAttribute('bgp_state');
  }

  // google_interconnect_admin_enabled - computed: true, optional: false, required: false
  public get googleInterconnectAdminEnabled() {
    return this.getBooleanAttribute('google_interconnect_admin_enabled');
  }

  // google_interconnect_state - computed: true, optional: false, required: false
  public get googleInterconnectState() {
    return this.getStringAttribute('google_interconnect_state');
  }
}

export class DataPacketfabricCloudRouterConnectionsCloudConnectionsCloudSettingsCloudStateList extends cdktf.ComplexList {

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
  public get(index: number): DataPacketfabricCloudRouterConnectionsCloudConnectionsCloudSettingsCloudStateOutputReference {
    return new DataPacketfabricCloudRouterConnectionsCloudConnectionsCloudSettingsCloudStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPacketfabricCloudRouterConnectionsCloudConnectionsCloudSettings {
}

export function dataPacketfabricCloudRouterConnectionsCloudConnectionsCloudSettingsToTerraform(struct?: DataPacketfabricCloudRouterConnectionsCloudConnectionsCloudSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPacketfabricCloudRouterConnectionsCloudConnectionsCloudSettingsToHclTerraform(struct?: DataPacketfabricCloudRouterConnectionsCloudConnectionsCloudSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPacketfabricCloudRouterConnectionsCloudConnectionsCloudSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPacketfabricCloudRouterConnectionsCloudConnectionsCloudSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPacketfabricCloudRouterConnectionsCloudConnectionsCloudSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // aws_account_id - computed: true, optional: false, required: false
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }

  // aws_connection_id - computed: true, optional: false, required: false
  public get awsConnectionId() {
    return this.getStringAttribute('aws_connection_id');
  }

  // aws_hosted_type - computed: true, optional: false, required: false
  public get awsHostedType() {
    return this.getStringAttribute('aws_hosted_type');
  }

  // aws_region - computed: true, optional: false, required: false
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }

  // azure_connection_type - computed: true, optional: false, required: false
  public get azureConnectionType() {
    return this.getStringAttribute('azure_connection_type');
  }

  // azure_service_key - computed: true, optional: false, required: false
  public get azureServiceKey() {
    return this.getStringAttribute('azure_service_key');
  }

  // azure_service_tag - computed: true, optional: false, required: false
  public get azureServiceTag() {
    return this.getNumberAttribute('azure_service_tag');
  }

  // bgp_asn - computed: true, optional: false, required: false
  public get bgpAsn() {
    return this.getNumberAttribute('bgp_asn');
  }

  // bgp_cer_cidr - computed: true, optional: false, required: false
  public get bgpCerCidr() {
    return this.getStringAttribute('bgp_cer_cidr');
  }

  // bgp_ibm_cidr - computed: true, optional: false, required: false
  public get bgpIbmCidr() {
    return this.getStringAttribute('bgp_ibm_cidr');
  }

  // cloud_state - computed: true, optional: false, required: false
  private _cloudState = new DataPacketfabricCloudRouterConnectionsCloudConnectionsCloudSettingsCloudStateList(this, "cloud_state", false);
  public get cloudState() {
    return this._cloudState;
  }

  // gateway_id - computed: true, optional: false, required: false
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }

  // google_pairing_key - computed: true, optional: false, required: false
  public get googlePairingKey() {
    return this.getStringAttribute('google_pairing_key');
  }

  // google_vlan_attachment_name - computed: true, optional: false, required: false
  public get googleVlanAttachmentName() {
    return this.getStringAttribute('google_vlan_attachment_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nat_public_ip - computed: true, optional: false, required: false
  public get natPublicIp() {
    return this.getStringAttribute('nat_public_ip');
  }

  // oracle_region - computed: true, optional: false, required: false
  public get oracleRegion() {
    return this.getStringAttribute('oracle_region');
  }

  // port_compartment_ocid - computed: true, optional: false, required: false
  public get portCompartmentOcid() {
    return this.getStringAttribute('port_compartment_ocid');
  }

  // port_cross_connect_ocid - computed: true, optional: false, required: false
  public get portCrossConnectOcid() {
    return this.getStringAttribute('port_cross_connect_ocid');
  }

  // port_id - computed: true, optional: false, required: false
  public get portId() {
    return this.getStringAttribute('port_id');
  }

  // primary_public_ip - computed: true, optional: false, required: false
  public get primaryPublicIp() {
    return this.getStringAttribute('primary_public_ip');
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // secondary_public_ip - computed: true, optional: false, required: false
  public get secondaryPublicIp() {
    return this.getStringAttribute('secondary_public_ip');
  }

  // svlan_id_cust - computed: true, optional: false, required: false
  public get svlanIdCust() {
    return this.getNumberAttribute('svlan_id_cust');
  }

  // vc_ocid - computed: true, optional: false, required: false
  public get vcOcid() {
    return this.getStringAttribute('vc_ocid');
  }

  // vlan_id_cust - computed: true, optional: false, required: false
  public get vlanIdCust() {
    return this.getNumberAttribute('vlan_id_cust');
  }

  // vlan_id_microsoft - computed: true, optional: false, required: false
  public get vlanIdMicrosoft() {
    return this.getNumberAttribute('vlan_id_microsoft');
  }

  // vlan_id_pf - computed: true, optional: false, required: false
  public get vlanIdPf() {
    return this.getNumberAttribute('vlan_id_pf');
  }

  // vlan_id_private - computed: true, optional: false, required: false
  public get vlanIdPrivate() {
    return this.getNumberAttribute('vlan_id_private');
  }
}

export class DataPacketfabricCloudRouterConnectionsCloudConnectionsCloudSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataPacketfabricCloudRouterConnectionsCloudConnectionsCloudSettingsOutputReference {
    return new DataPacketfabricCloudRouterConnectionsCloudConnectionsCloudSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPacketfabricCloudRouterConnectionsCloudConnections {
}

export function dataPacketfabricCloudRouterConnectionsCloudConnectionsToTerraform(struct?: DataPacketfabricCloudRouterConnectionsCloudConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPacketfabricCloudRouterConnectionsCloudConnectionsToHclTerraform(struct?: DataPacketfabricCloudRouterConnectionsCloudConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPacketfabricCloudRouterConnectionsCloudConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPacketfabricCloudRouterConnectionsCloudConnections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPacketfabricCloudRouterConnectionsCloudConnections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_uuid - computed: true, optional: false, required: false
  public get accountUuid() {
    return this.getStringAttribute('account_uuid');
  }

  // bgp_state_list - computed: true, optional: false, required: false
  private _bgpStateList = new DataPacketfabricCloudRouterConnectionsCloudConnectionsBgpStateListStructList(this, "bgp_state_list", true);
  public get bgpStateList() {
    return this._bgpStateList;
  }

  // cloud_circuit_id - computed: true, optional: false, required: false
  public get cloudCircuitId() {
    return this.getStringAttribute('cloud_circuit_id');
  }

  // cloud_provider - computed: true, optional: false, required: false
  private _cloudProvider = new DataPacketfabricCloudRouterConnectionsCloudConnectionsCloudProviderList(this, "cloud_provider", true);
  public get cloudProvider() {
    return this._cloudProvider;
  }

  // cloud_provider_connection_id - computed: true, optional: false, required: false
  public get cloudProviderConnectionId() {
    return this.getStringAttribute('cloud_provider_connection_id');
  }

  // cloud_router_asn - computed: true, optional: false, required: false
  public get cloudRouterAsn() {
    return this.getNumberAttribute('cloud_router_asn');
  }

  // cloud_router_circuit_id - computed: true, optional: false, required: false
  public get cloudRouterCircuitId() {
    return this.getStringAttribute('cloud_router_circuit_id');
  }

  // cloud_router_name - computed: true, optional: false, required: false
  public get cloudRouterName() {
    return this.getStringAttribute('cloud_router_name');
  }

  // cloud_settings - computed: true, optional: false, required: false
  private _cloudSettings = new DataPacketfabricCloudRouterConnectionsCloudConnectionsCloudSettingsList(this, "cloud_settings", true);
  public get cloudSettings() {
    return this._cloudSettings;
  }

  // connection_type - computed: true, optional: false, required: false
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }

  // customer_uuid - computed: true, optional: false, required: false
  public get customerUuid() {
    return this.getStringAttribute('customer_uuid');
  }

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // desired_nat - computed: true, optional: false, required: false
  public get desiredNat() {
    return this.getStringAttribute('desired_nat');
  }

  // dnat_capable - computed: true, optional: false, required: false
  public get dnatCapable() {
    return this.getBooleanAttribute('dnat_capable');
  }

  // nat_capable - computed: true, optional: false, required: false
  public get natCapable() {
    return this.getBooleanAttribute('nat_capable');
  }

  // pending_delete - computed: true, optional: false, required: false
  public get pendingDelete() {
    return this.getBooleanAttribute('pending_delete');
  }

  // pop - computed: true, optional: false, required: false
  public get pop() {
    return this.getStringAttribute('pop');
  }

  // port_circuit_id - computed: true, optional: false, required: false
  public get portCircuitId() {
    return this.getStringAttribute('port_circuit_id');
  }

  // port_type - computed: true, optional: false, required: false
  public get portType() {
    return this.getStringAttribute('port_type');
  }

  // service_class - computed: true, optional: false, required: false
  public get serviceClass() {
    return this.getStringAttribute('service_class');
  }

  // service_provider - computed: true, optional: false, required: false
  public get serviceProvider() {
    return this.getStringAttribute('service_provider');
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // site - computed: true, optional: false, required: false
  public get site() {
    return this.getStringAttribute('site');
  }

  // speed - computed: true, optional: false, required: false
  public get speed() {
    return this.getStringAttribute('speed');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subscription_term - computed: true, optional: false, required: false
  public get subscriptionTerm() {
    return this.getNumberAttribute('subscription_term');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // user_uuid - computed: true, optional: false, required: false
  public get userUuid() {
    return this.getStringAttribute('user_uuid');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // vlan - computed: true, optional: false, required: false
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DataPacketfabricCloudRouterConnectionsCloudConnectionsList extends cdktf.ComplexList {

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
  public get(index: number): DataPacketfabricCloudRouterConnectionsCloudConnectionsOutputReference {
    return new DataPacketfabricCloudRouterConnectionsCloudConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/cloud_router_connections packetfabric_cloud_router_connections}
*/
export class DataPacketfabricCloudRouterConnections extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "packetfabric_cloud_router_connections";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPacketfabricCloudRouterConnections resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPacketfabricCloudRouterConnections to import
  * @param importFromId The id of the existing DataPacketfabricCloudRouterConnections that should be imported. Refer to the {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/cloud_router_connections#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPacketfabricCloudRouterConnections to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "packetfabric_cloud_router_connections", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/cloud_router_connections packetfabric_cloud_router_connections} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPacketfabricCloudRouterConnectionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataPacketfabricCloudRouterConnectionsConfig) {
    super(scope, id, {
      terraformResourceType: 'packetfabric_cloud_router_connections',
      terraformGeneratorMetadata: {
        providerName: 'packetfabric',
        providerVersion: '1.9.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._circuitId = config.circuitId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // circuit_id - computed: false, optional: false, required: true
  private _circuitId?: string; 
  public get circuitId() {
    return this.getStringAttribute('circuit_id');
  }
  public set circuitId(value: string) {
    this._circuitId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitIdInput() {
    return this._circuitId;
  }

  // cloud_connections - computed: true, optional: false, required: false
  private _cloudConnections = new DataPacketfabricCloudRouterConnectionsCloudConnectionsList(this, "cloud_connections", false);
  public get cloudConnections() {
    return this._cloudConnections;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      circuit_id: cdktf.stringToTerraform(this._circuitId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      circuit_id: {
        value: cdktf.stringToHclTerraform(this._circuitId),
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
