// https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/cs_aws_hosted_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPacketfabricCsAwsHostedConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique PF circuit ID for this connection
  * 		Example: PF-AP-LAX1-1002
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/cs_aws_hosted_connection#cloud_circuit_id DataPacketfabricCsAwsHostedConnection#cloud_circuit_id}
  */
  readonly cloudCircuitId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/cs_aws_hosted_connection#id DataPacketfabricCsAwsHostedConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataPacketfabricCsAwsHostedConnectionCloudSettingsBgpSettings {
}

export function dataPacketfabricCsAwsHostedConnectionCloudSettingsBgpSettingsToTerraform(struct?: DataPacketfabricCsAwsHostedConnectionCloudSettingsBgpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPacketfabricCsAwsHostedConnectionCloudSettingsBgpSettingsToHclTerraform(struct?: DataPacketfabricCsAwsHostedConnectionCloudSettingsBgpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPacketfabricCsAwsHostedConnectionCloudSettingsBgpSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPacketfabricCsAwsHostedConnectionCloudSettingsBgpSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPacketfabricCsAwsHostedConnectionCloudSettingsBgpSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_family - computed: true, optional: false, required: false
  public get addressFamily() {
    return this.getStringAttribute('address_family');
  }

  // advertised_prefixes - computed: true, optional: false, required: false
  public get advertisedPrefixes() {
    return this.getListAttribute('advertised_prefixes');
  }

  // customer_asn - computed: true, optional: false, required: false
  public get customerAsn() {
    return this.getNumberAttribute('customer_asn');
  }

  // customer_router_ip - computed: true, optional: false, required: false
  public get customerRouterIp() {
    return this.getStringAttribute('customer_router_ip');
  }

  // google_advertise_mode - computed: true, optional: false, required: false
  public get googleAdvertiseMode() {
    return this.getStringAttribute('google_advertise_mode');
  }

  // google_advertised_ip_ranges - computed: true, optional: false, required: false
  public get googleAdvertisedIpRanges() {
    return this.getListAttribute('google_advertised_ip_ranges');
  }

  // google_keepalive_interval - computed: true, optional: false, required: false
  public get googleKeepaliveInterval() {
    return this.getNumberAttribute('google_keepalive_interval');
  }

  // l3_address - computed: true, optional: false, required: false
  public get l3Address() {
    return this.getStringAttribute('l3_address');
  }

  // md5 - computed: true, optional: false, required: false
  public get md5() {
    return this.getStringAttribute('md5');
  }

  // remote_address - computed: true, optional: false, required: false
  public get remoteAddress() {
    return this.getStringAttribute('remote_address');
  }

  // remote_asn - computed: true, optional: false, required: false
  public get remoteAsn() {
    return this.getNumberAttribute('remote_asn');
  }

  // remote_router_ip - computed: true, optional: false, required: false
  public get remoteRouterIp() {
    return this.getStringAttribute('remote_router_ip');
  }
}

export class DataPacketfabricCsAwsHostedConnectionCloudSettingsBgpSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataPacketfabricCsAwsHostedConnectionCloudSettingsBgpSettingsOutputReference {
    return new DataPacketfabricCsAwsHostedConnectionCloudSettingsBgpSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPacketfabricCsAwsHostedConnectionCloudSettingsCloudState {
}

export function dataPacketfabricCsAwsHostedConnectionCloudSettingsCloudStateToTerraform(struct?: DataPacketfabricCsAwsHostedConnectionCloudSettingsCloudState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPacketfabricCsAwsHostedConnectionCloudSettingsCloudStateToHclTerraform(struct?: DataPacketfabricCsAwsHostedConnectionCloudSettingsCloudState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPacketfabricCsAwsHostedConnectionCloudSettingsCloudStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPacketfabricCsAwsHostedConnectionCloudSettingsCloudState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPacketfabricCsAwsHostedConnectionCloudSettingsCloudState | undefined) {
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

export class DataPacketfabricCsAwsHostedConnectionCloudSettingsCloudStateList extends cdktf.ComplexList {

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
  public get(index: number): DataPacketfabricCsAwsHostedConnectionCloudSettingsCloudStateOutputReference {
    return new DataPacketfabricCsAwsHostedConnectionCloudSettingsCloudStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPacketfabricCsAwsHostedConnectionCloudSettings {
}

export function dataPacketfabricCsAwsHostedConnectionCloudSettingsToTerraform(struct?: DataPacketfabricCsAwsHostedConnectionCloudSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPacketfabricCsAwsHostedConnectionCloudSettingsToHclTerraform(struct?: DataPacketfabricCsAwsHostedConnectionCloudSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPacketfabricCsAwsHostedConnectionCloudSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPacketfabricCsAwsHostedConnectionCloudSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPacketfabricCsAwsHostedConnectionCloudSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_account_id - computed: true, optional: false, required: false
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }

  // aws_connection_id - computed: true, optional: false, required: false
  public get awsConnectionId() {
    return this.getStringAttribute('aws_connection_id');
  }

  // aws_dx_aws_device - computed: true, optional: false, required: false
  public get awsDxAwsDevice() {
    return this.getStringAttribute('aws_dx_aws_device');
  }

  // aws_dx_aws_logical_device_id - computed: true, optional: false, required: false
  public get awsDxAwsLogicalDeviceId() {
    return this.getStringAttribute('aws_dx_aws_logical_device_id');
  }

  // aws_dx_bandwidth - computed: true, optional: false, required: false
  public get awsDxBandwidth() {
    return this.getStringAttribute('aws_dx_bandwidth');
  }

  // aws_dx_encryption_mode - computed: true, optional: false, required: false
  public get awsDxEncryptionMode() {
    return this.getStringAttribute('aws_dx_encryption_mode');
  }

  // aws_dx_has_logical_redundancy - computed: true, optional: false, required: false
  public get awsDxHasLogicalRedundancy() {
    return this.getBooleanAttribute('aws_dx_has_logical_redundancy');
  }

  // aws_dx_jumbo_frame_capable - computed: true, optional: false, required: false
  public get awsDxJumboFrameCapable() {
    return this.getBooleanAttribute('aws_dx_jumbo_frame_capable');
  }

  // aws_dx_location - computed: true, optional: false, required: false
  public get awsDxLocation() {
    return this.getStringAttribute('aws_dx_location');
  }

  // aws_dx_mac_sec_capable - computed: true, optional: false, required: false
  public get awsDxMacSecCapable() {
    return this.getBooleanAttribute('aws_dx_mac_sec_capable');
  }

  // aws_hosted_type - computed: true, optional: false, required: false
  public get awsHostedType() {
    return this.getStringAttribute('aws_hosted_type');
  }

  // aws_region - computed: true, optional: false, required: false
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }

  // aws_vif_bgp_peer_id - computed: true, optional: false, required: false
  public get awsVifBgpPeerId() {
    return this.getStringAttribute('aws_vif_bgp_peer_id');
  }

  // aws_vif_direct_connect_gw_id - computed: true, optional: false, required: false
  public get awsVifDirectConnectGwId() {
    return this.getStringAttribute('aws_vif_direct_connect_gw_id');
  }

  // aws_vif_id - computed: true, optional: false, required: false
  public get awsVifId() {
    return this.getStringAttribute('aws_vif_id');
  }

  // aws_vif_type - computed: true, optional: false, required: false
  public get awsVifType() {
    return this.getStringAttribute('aws_vif_type');
  }

  // bgp_settings - computed: true, optional: false, required: false
  private _bgpSettings = new DataPacketfabricCsAwsHostedConnectionCloudSettingsBgpSettingsList(this, "bgp_settings", false);
  public get bgpSettings() {
    return this._bgpSettings;
  }

  // cloud_state - computed: true, optional: false, required: false
  private _cloudState = new DataPacketfabricCsAwsHostedConnectionCloudSettingsCloudStateList(this, "cloud_state", false);
  public get cloudState() {
    return this._cloudState;
  }

  // credentials_uuid - computed: true, optional: false, required: false
  public get credentialsUuid() {
    return this.getStringAttribute('credentials_uuid');
  }

  // google_cloud_router_name - computed: true, optional: false, required: false
  public get googleCloudRouterName() {
    return this.getStringAttribute('google_cloud_router_name');
  }

  // google_dataplane_version - computed: true, optional: false, required: false
  public get googleDataplaneVersion() {
    return this.getNumberAttribute('google_dataplane_version');
  }

  // google_edge_availability_domain - computed: true, optional: false, required: false
  public get googleEdgeAvailabilityDomain() {
    return this.getNumberAttribute('google_edge_availability_domain');
  }

  // google_interface_name - computed: true, optional: false, required: false
  public get googleInterfaceName() {
    return this.getStringAttribute('google_interface_name');
  }

  // google_pairing_key - computed: true, optional: false, required: false
  public get googlePairingKey() {
    return this.getStringAttribute('google_pairing_key');
  }

  // google_project_id - computed: true, optional: false, required: false
  public get googleProjectId() {
    return this.getStringAttribute('google_project_id');
  }

  // google_region - computed: true, optional: false, required: false
  public get googleRegion() {
    return this.getStringAttribute('google_region');
  }

  // google_vlan_attachment_name - computed: true, optional: false, required: false
  public get googleVlanAttachmentName() {
    return this.getStringAttribute('google_vlan_attachment_name');
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }

  // svlan_id_cust - computed: true, optional: false, required: false
  public get svlanIdCust() {
    return this.getNumberAttribute('svlan_id_cust');
  }

  // vlan_id_cust - computed: true, optional: false, required: false
  public get vlanIdCust() {
    return this.getNumberAttribute('vlan_id_cust');
  }

  // vlan_id_pf - computed: true, optional: false, required: false
  public get vlanIdPf() {
    return this.getNumberAttribute('vlan_id_pf');
  }
}

export class DataPacketfabricCsAwsHostedConnectionCloudSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataPacketfabricCsAwsHostedConnectionCloudSettingsOutputReference {
    return new DataPacketfabricCsAwsHostedConnectionCloudSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPacketfabricCsAwsHostedConnectionSettings {
}

export function dataPacketfabricCsAwsHostedConnectionSettingsToTerraform(struct?: DataPacketfabricCsAwsHostedConnectionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPacketfabricCsAwsHostedConnectionSettingsToHclTerraform(struct?: DataPacketfabricCsAwsHostedConnectionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPacketfabricCsAwsHostedConnectionSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPacketfabricCsAwsHostedConnectionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPacketfabricCsAwsHostedConnectionSettings | undefined) {
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

export class DataPacketfabricCsAwsHostedConnectionSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataPacketfabricCsAwsHostedConnectionSettingsOutputReference {
    return new DataPacketfabricCsAwsHostedConnectionSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/cs_aws_hosted_connection packetfabric_cs_aws_hosted_connection}
*/
export class DataPacketfabricCsAwsHostedConnection extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "packetfabric_cs_aws_hosted_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPacketfabricCsAwsHostedConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPacketfabricCsAwsHostedConnection to import
  * @param importFromId The id of the existing DataPacketfabricCsAwsHostedConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/cs_aws_hosted_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPacketfabricCsAwsHostedConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "packetfabric_cs_aws_hosted_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/cs_aws_hosted_connection packetfabric_cs_aws_hosted_connection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPacketfabricCsAwsHostedConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: DataPacketfabricCsAwsHostedConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'packetfabric_cs_aws_hosted_connection',
      terraformGeneratorMetadata: {
        providerName: 'packetfabric',
        providerVersion: '1.9.3',
        providerVersionConstraint: '1.9.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudCircuitId = config.cloudCircuitId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_circuit_id - computed: false, optional: false, required: true
  private _cloudCircuitId?: string; 
  public get cloudCircuitId() {
    return this.getStringAttribute('cloud_circuit_id');
  }
  public set cloudCircuitId(value: string) {
    this._cloudCircuitId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudCircuitIdInput() {
    return this._cloudCircuitId;
  }

  // cloud_provider_connection_id - computed: true, optional: false, required: false
  public get cloudProviderConnectionId() {
    return this.getStringAttribute('cloud_provider_connection_id');
  }

  // cloud_provider_pop - computed: true, optional: false, required: false
  public get cloudProviderPop() {
    return this.getStringAttribute('cloud_provider_pop');
  }

  // cloud_provider_region - computed: true, optional: false, required: false
  public get cloudProviderRegion() {
    return this.getStringAttribute('cloud_provider_region');
  }

  // cloud_settings - computed: true, optional: false, required: false
  private _cloudSettings = new DataPacketfabricCsAwsHostedConnectionCloudSettingsList(this, "cloud_settings", false);
  public get cloudSettings() {
    return this._cloudSettings;
  }

  // customer_uuid - computed: true, optional: false, required: false
  public get customerUuid() {
    return this.getStringAttribute('customer_uuid');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // is_awaiting_onramp - computed: true, optional: false, required: false
  public get isAwaitingOnramp() {
    return this.getBooleanAttribute('is_awaiting_onramp');
  }

  // pop - computed: true, optional: false, required: false
  public get pop() {
    return this.getStringAttribute('pop');
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

  // settings - computed: true, optional: false, required: false
  private _settings = new DataPacketfabricCsAwsHostedConnectionSettingsList(this, "settings", false);
  public get settings() {
    return this._settings;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_circuit_id: cdktf.stringToTerraform(this._cloudCircuitId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_circuit_id: {
        value: cdktf.stringToHclTerraform(this._cloudCircuitId),
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
