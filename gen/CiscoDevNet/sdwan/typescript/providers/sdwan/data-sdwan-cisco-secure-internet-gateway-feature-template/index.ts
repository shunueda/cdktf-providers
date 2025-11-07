// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_secure_internet_gateway_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanCiscoSecureInternetGatewayFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_secure_internet_gateway_feature_template#id DataSdwanCiscoSecureInternetGatewayFeatureTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_secure_internet_gateway_feature_template#name DataSdwanCiscoSecureInternetGatewayFeatureTemplate#name}
  */
  readonly name?: string;
}
export interface DataSdwanCiscoSecureInternetGatewayFeatureTemplateInterfaces {
}

export function dataSdwanCiscoSecureInternetGatewayFeatureTemplateInterfacesToTerraform(struct?: DataSdwanCiscoSecureInternetGatewayFeatureTemplateInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoSecureInternetGatewayFeatureTemplateInterfacesToHclTerraform(struct?: DataSdwanCiscoSecureInternetGatewayFeatureTemplateInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoSecureInternetGatewayFeatureTemplateInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoSecureInternetGatewayFeatureTemplateInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoSecureInternetGatewayFeatureTemplateInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application - computed: true, optional: false, required: false
  public get application() {
    return this.getStringAttribute('application');
  }

  // auto_tunnel_mode - computed: true, optional: false, required: false
  public get autoTunnelMode() {
    return this.getBooleanAttribute('auto_tunnel_mode');
  }

  // dead_peer_detection_interval - computed: true, optional: false, required: false
  public get deadPeerDetectionInterval() {
    return this.getNumberAttribute('dead_peer_detection_interval');
  }

  // dead_peer_detection_interval_variable - computed: true, optional: false, required: false
  public get deadPeerDetectionIntervalVariable() {
    return this.getStringAttribute('dead_peer_detection_interval_variable');
  }

  // dead_peer_detection_retries - computed: true, optional: false, required: false
  public get deadPeerDetectionRetries() {
    return this.getNumberAttribute('dead_peer_detection_retries');
  }

  // dead_peer_detection_retries_variable - computed: true, optional: false, required: false
  public get deadPeerDetectionRetriesVariable() {
    return this.getStringAttribute('dead_peer_detection_retries_variable');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // description_variable - computed: true, optional: false, required: false
  public get descriptionVariable() {
    return this.getStringAttribute('description_variable');
  }

  // ike_ciphersuite - computed: true, optional: false, required: false
  public get ikeCiphersuite() {
    return this.getStringAttribute('ike_ciphersuite');
  }

  // ike_ciphersuite_variable - computed: true, optional: false, required: false
  public get ikeCiphersuiteVariable() {
    return this.getStringAttribute('ike_ciphersuite_variable');
  }

  // ike_group - computed: true, optional: false, required: false
  public get ikeGroup() {
    return this.getStringAttribute('ike_group');
  }

  // ike_group_variable - computed: true, optional: false, required: false
  public get ikeGroupVariable() {
    return this.getStringAttribute('ike_group_variable');
  }

  // ike_pre_shared_key - computed: true, optional: false, required: false
  public get ikePreSharedKey() {
    return this.getStringAttribute('ike_pre_shared_key');
  }

  // ike_pre_shared_key_dynamic - computed: true, optional: false, required: false
  public get ikePreSharedKeyDynamic() {
    return this.getBooleanAttribute('ike_pre_shared_key_dynamic');
  }

  // ike_pre_shared_key_local_id - computed: true, optional: false, required: false
  public get ikePreSharedKeyLocalId() {
    return this.getStringAttribute('ike_pre_shared_key_local_id');
  }

  // ike_pre_shared_key_local_id_variable - computed: true, optional: false, required: false
  public get ikePreSharedKeyLocalIdVariable() {
    return this.getStringAttribute('ike_pre_shared_key_local_id_variable');
  }

  // ike_pre_shared_key_remote_id - computed: true, optional: false, required: false
  public get ikePreSharedKeyRemoteId() {
    return this.getStringAttribute('ike_pre_shared_key_remote_id');
  }

  // ike_pre_shared_key_remote_id_variable - computed: true, optional: false, required: false
  public get ikePreSharedKeyRemoteIdVariable() {
    return this.getStringAttribute('ike_pre_shared_key_remote_id_variable');
  }

  // ike_pre_shared_key_variable - computed: true, optional: false, required: false
  public get ikePreSharedKeyVariable() {
    return this.getStringAttribute('ike_pre_shared_key_variable');
  }

  // ike_rekey_interval - computed: true, optional: false, required: false
  public get ikeRekeyInterval() {
    return this.getNumberAttribute('ike_rekey_interval');
  }

  // ike_rekey_interval_variable - computed: true, optional: false, required: false
  public get ikeRekeyIntervalVariable() {
    return this.getStringAttribute('ike_rekey_interval_variable');
  }

  // ike_version - computed: true, optional: false, required: false
  public get ikeVersion() {
    return this.getNumberAttribute('ike_version');
  }

  // ike_version_variable - computed: true, optional: false, required: false
  public get ikeVersionVariable() {
    return this.getStringAttribute('ike_version_variable');
  }

  // ip_unnumbered - computed: true, optional: false, required: false
  public get ipUnnumbered() {
    return this.getBooleanAttribute('ip_unnumbered');
  }

  // ipsec_ciphersuite - computed: true, optional: false, required: false
  public get ipsecCiphersuite() {
    return this.getStringAttribute('ipsec_ciphersuite');
  }

  // ipsec_ciphersuite_variable - computed: true, optional: false, required: false
  public get ipsecCiphersuiteVariable() {
    return this.getStringAttribute('ipsec_ciphersuite_variable');
  }

  // ipsec_perfect_forward_secrecy - computed: true, optional: false, required: false
  public get ipsecPerfectForwardSecrecy() {
    return this.getStringAttribute('ipsec_perfect_forward_secrecy');
  }

  // ipsec_perfect_forward_secrecy_variable - computed: true, optional: false, required: false
  public get ipsecPerfectForwardSecrecyVariable() {
    return this.getStringAttribute('ipsec_perfect_forward_secrecy_variable');
  }

  // ipsec_rekey_interval - computed: true, optional: false, required: false
  public get ipsecRekeyInterval() {
    return this.getNumberAttribute('ipsec_rekey_interval');
  }

  // ipsec_rekey_interval_variable - computed: true, optional: false, required: false
  public get ipsecRekeyIntervalVariable() {
    return this.getStringAttribute('ipsec_rekey_interval_variable');
  }

  // ipsec_replay_window - computed: true, optional: false, required: false
  public get ipsecReplayWindow() {
    return this.getNumberAttribute('ipsec_replay_window');
  }

  // ipsec_replay_window_variable - computed: true, optional: false, required: false
  public get ipsecReplayWindowVariable() {
    return this.getStringAttribute('ipsec_replay_window_variable');
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv4_address_variable - computed: true, optional: false, required: false
  public get ipv4AddressVariable() {
    return this.getStringAttribute('ipv4_address_variable');
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }

  // mtu_variable - computed: true, optional: false, required: false
  public get mtuVariable() {
    return this.getStringAttribute('mtu_variable');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_variable - computed: true, optional: false, required: false
  public get nameVariable() {
    return this.getStringAttribute('name_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // shutdown - computed: true, optional: false, required: false
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }

  // sig_provider - computed: true, optional: false, required: false
  public get sigProvider() {
    return this.getStringAttribute('sig_provider');
  }

  // tcp_mss - computed: true, optional: false, required: false
  public get tcpMss() {
    return this.getNumberAttribute('tcp_mss');
  }

  // tcp_mss_variable - computed: true, optional: false, required: false
  public get tcpMssVariable() {
    return this.getStringAttribute('tcp_mss_variable');
  }

  // track_enable - computed: true, optional: false, required: false
  public get trackEnable() {
    return this.getBooleanAttribute('track_enable');
  }

  // tracker - computed: true, optional: false, required: false
  public get tracker() {
    return this.getStringAttribute('tracker');
  }

  // tunnel_dc_preference - computed: true, optional: false, required: false
  public get tunnelDcPreference() {
    return this.getStringAttribute('tunnel_dc_preference');
  }

  // tunnel_destination - computed: true, optional: false, required: false
  public get tunnelDestination() {
    return this.getStringAttribute('tunnel_destination');
  }

  // tunnel_destination_variable - computed: true, optional: false, required: false
  public get tunnelDestinationVariable() {
    return this.getStringAttribute('tunnel_destination_variable');
  }

  // tunnel_public_ip - computed: true, optional: false, required: false
  public get tunnelPublicIp() {
    return this.getStringAttribute('tunnel_public_ip');
  }

  // tunnel_public_ip_variable - computed: true, optional: false, required: false
  public get tunnelPublicIpVariable() {
    return this.getStringAttribute('tunnel_public_ip_variable');
  }

  // tunnel_route_via - computed: true, optional: false, required: false
  public get tunnelRouteVia() {
    return this.getStringAttribute('tunnel_route_via');
  }

  // tunnel_route_via_variable - computed: true, optional: false, required: false
  public get tunnelRouteViaVariable() {
    return this.getStringAttribute('tunnel_route_via_variable');
  }

  // tunnel_source - computed: true, optional: false, required: false
  public get tunnelSource() {
    return this.getStringAttribute('tunnel_source');
  }

  // tunnel_source_interface - computed: true, optional: false, required: false
  public get tunnelSourceInterface() {
    return this.getStringAttribute('tunnel_source_interface');
  }

  // tunnel_source_interface_variable - computed: true, optional: false, required: false
  public get tunnelSourceInterfaceVariable() {
    return this.getStringAttribute('tunnel_source_interface_variable');
  }

  // tunnel_source_variable - computed: true, optional: false, required: false
  public get tunnelSourceVariable() {
    return this.getStringAttribute('tunnel_source_variable');
  }
}

export class DataSdwanCiscoSecureInternetGatewayFeatureTemplateInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoSecureInternetGatewayFeatureTemplateInterfacesOutputReference {
    return new DataSdwanCiscoSecureInternetGatewayFeatureTemplateInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoSecureInternetGatewayFeatureTemplateServicesInterfacePairs {
}

export function dataSdwanCiscoSecureInternetGatewayFeatureTemplateServicesInterfacePairsToTerraform(struct?: DataSdwanCiscoSecureInternetGatewayFeatureTemplateServicesInterfacePairs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoSecureInternetGatewayFeatureTemplateServicesInterfacePairsToHclTerraform(struct?: DataSdwanCiscoSecureInternetGatewayFeatureTemplateServicesInterfacePairs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoSecureInternetGatewayFeatureTemplateServicesInterfacePairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoSecureInternetGatewayFeatureTemplateServicesInterfacePairs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoSecureInternetGatewayFeatureTemplateServicesInterfacePairs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_interface - computed: true, optional: false, required: false
  public get activeInterface() {
    return this.getStringAttribute('active_interface');
  }

  // active_interface_weight - computed: true, optional: false, required: false
  public get activeInterfaceWeight() {
    return this.getNumberAttribute('active_interface_weight');
  }

  // backup_interface - computed: true, optional: false, required: false
  public get backupInterface() {
    return this.getStringAttribute('backup_interface');
  }

  // backup_interface_weight - computed: true, optional: false, required: false
  public get backupInterfaceWeight() {
    return this.getNumberAttribute('backup_interface_weight');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}

export class DataSdwanCiscoSecureInternetGatewayFeatureTemplateServicesInterfacePairsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoSecureInternetGatewayFeatureTemplateServicesInterfacePairsOutputReference {
    return new DataSdwanCiscoSecureInternetGatewayFeatureTemplateServicesInterfacePairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoSecureInternetGatewayFeatureTemplateServices {
}

export function dataSdwanCiscoSecureInternetGatewayFeatureTemplateServicesToTerraform(struct?: DataSdwanCiscoSecureInternetGatewayFeatureTemplateServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoSecureInternetGatewayFeatureTemplateServicesToHclTerraform(struct?: DataSdwanCiscoSecureInternetGatewayFeatureTemplateServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoSecureInternetGatewayFeatureTemplateServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoSecureInternetGatewayFeatureTemplateServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoSecureInternetGatewayFeatureTemplateServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface_pairs - computed: true, optional: false, required: false
  private _interfacePairs = new DataSdwanCiscoSecureInternetGatewayFeatureTemplateServicesInterfacePairsList(this, "interface_pairs", false);
  public get interfacePairs() {
    return this._interfacePairs;
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // umbrella_primary_data_center - computed: true, optional: false, required: false
  public get umbrellaPrimaryDataCenter() {
    return this.getStringAttribute('umbrella_primary_data_center');
  }

  // umbrella_primary_data_center_variable - computed: true, optional: false, required: false
  public get umbrellaPrimaryDataCenterVariable() {
    return this.getStringAttribute('umbrella_primary_data_center_variable');
  }

  // umbrella_secondary_data_center - computed: true, optional: false, required: false
  public get umbrellaSecondaryDataCenter() {
    return this.getStringAttribute('umbrella_secondary_data_center');
  }

  // umbrella_secondary_data_center_variable - computed: true, optional: false, required: false
  public get umbrellaSecondaryDataCenterVariable() {
    return this.getStringAttribute('umbrella_secondary_data_center_variable');
  }

  // zscaler_aup_block_internet_until_accepted - computed: true, optional: false, required: false
  public get zscalerAupBlockInternetUntilAccepted() {
    return this.getBooleanAttribute('zscaler_aup_block_internet_until_accepted');
  }

  // zscaler_aup_enabled - computed: true, optional: false, required: false
  public get zscalerAupEnabled() {
    return this.getBooleanAttribute('zscaler_aup_enabled');
  }

  // zscaler_aup_force_ssl_inspection - computed: true, optional: false, required: false
  public get zscalerAupForceSslInspection() {
    return this.getBooleanAttribute('zscaler_aup_force_ssl_inspection');
  }

  // zscaler_aup_timeout - computed: true, optional: false, required: false
  public get zscalerAupTimeout() {
    return this.getNumberAttribute('zscaler_aup_timeout');
  }

  // zscaler_authentication_required - computed: true, optional: false, required: false
  public get zscalerAuthenticationRequired() {
    return this.getBooleanAttribute('zscaler_authentication_required');
  }

  // zscaler_caution_enabled - computed: true, optional: false, required: false
  public get zscalerCautionEnabled() {
    return this.getBooleanAttribute('zscaler_caution_enabled');
  }

  // zscaler_firewall_enabled - computed: true, optional: false, required: false
  public get zscalerFirewallEnabled() {
    return this.getBooleanAttribute('zscaler_firewall_enabled');
  }

  // zscaler_ips_control_enabled - computed: true, optional: false, required: false
  public get zscalerIpsControlEnabled() {
    return this.getBooleanAttribute('zscaler_ips_control_enabled');
  }

  // zscaler_location_name - computed: true, optional: false, required: false
  public get zscalerLocationName() {
    return this.getStringAttribute('zscaler_location_name');
  }

  // zscaler_location_name_variable - computed: true, optional: false, required: false
  public get zscalerLocationNameVariable() {
    return this.getStringAttribute('zscaler_location_name_variable');
  }

  // zscaler_primary_data_center - computed: true, optional: false, required: false
  public get zscalerPrimaryDataCenter() {
    return this.getStringAttribute('zscaler_primary_data_center');
  }

  // zscaler_primary_data_center_variable - computed: true, optional: false, required: false
  public get zscalerPrimaryDataCenterVariable() {
    return this.getStringAttribute('zscaler_primary_data_center_variable');
  }

  // zscaler_secondary_data_center - computed: true, optional: false, required: false
  public get zscalerSecondaryDataCenter() {
    return this.getStringAttribute('zscaler_secondary_data_center');
  }

  // zscaler_secondary_data_center_variable - computed: true, optional: false, required: false
  public get zscalerSecondaryDataCenterVariable() {
    return this.getStringAttribute('zscaler_secondary_data_center_variable');
  }

  // zscaler_surrogate_display_time_unit - computed: true, optional: false, required: false
  public get zscalerSurrogateDisplayTimeUnit() {
    return this.getStringAttribute('zscaler_surrogate_display_time_unit');
  }

  // zscaler_surrogate_idle_time - computed: true, optional: false, required: false
  public get zscalerSurrogateIdleTime() {
    return this.getNumberAttribute('zscaler_surrogate_idle_time');
  }

  // zscaler_surrogate_ip - computed: true, optional: false, required: false
  public get zscalerSurrogateIp() {
    return this.getBooleanAttribute('zscaler_surrogate_ip');
  }

  // zscaler_surrogate_ip_enforce_for_known_browsers - computed: true, optional: false, required: false
  public get zscalerSurrogateIpEnforceForKnownBrowsers() {
    return this.getBooleanAttribute('zscaler_surrogate_ip_enforce_for_known_browsers');
  }

  // zscaler_surrogate_refresh_time - computed: true, optional: false, required: false
  public get zscalerSurrogateRefreshTime() {
    return this.getNumberAttribute('zscaler_surrogate_refresh_time');
  }

  // zscaler_surrogate_refresh_time_unit - computed: true, optional: false, required: false
  public get zscalerSurrogateRefreshTimeUnit() {
    return this.getStringAttribute('zscaler_surrogate_refresh_time_unit');
  }

  // zscaler_xff_forward - computed: true, optional: false, required: false
  public get zscalerXffForward() {
    return this.getBooleanAttribute('zscaler_xff_forward');
  }
}

export class DataSdwanCiscoSecureInternetGatewayFeatureTemplateServicesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoSecureInternetGatewayFeatureTemplateServicesOutputReference {
    return new DataSdwanCiscoSecureInternetGatewayFeatureTemplateServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoSecureInternetGatewayFeatureTemplateTrackers {
}

export function dataSdwanCiscoSecureInternetGatewayFeatureTemplateTrackersToTerraform(struct?: DataSdwanCiscoSecureInternetGatewayFeatureTemplateTrackers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoSecureInternetGatewayFeatureTemplateTrackersToHclTerraform(struct?: DataSdwanCiscoSecureInternetGatewayFeatureTemplateTrackers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoSecureInternetGatewayFeatureTemplateTrackersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoSecureInternetGatewayFeatureTemplateTrackers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoSecureInternetGatewayFeatureTemplateTrackers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoint_api_url - computed: true, optional: false, required: false
  public get endpointApiUrl() {
    return this.getStringAttribute('endpoint_api_url');
  }

  // endpoint_api_url_variable - computed: true, optional: false, required: false
  public get endpointApiUrlVariable() {
    return this.getStringAttribute('endpoint_api_url_variable');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // interval_variable - computed: true, optional: false, required: false
  public get intervalVariable() {
    return this.getStringAttribute('interval_variable');
  }

  // multiplier - computed: true, optional: false, required: false
  public get multiplier() {
    return this.getNumberAttribute('multiplier');
  }

  // multiplier_variable - computed: true, optional: false, required: false
  public get multiplierVariable() {
    return this.getStringAttribute('multiplier_variable');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_variable - computed: true, optional: false, required: false
  public get nameVariable() {
    return this.getStringAttribute('name_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }

  // threshold_variable - computed: true, optional: false, required: false
  public get thresholdVariable() {
    return this.getStringAttribute('threshold_variable');
  }

  // tracker_type - computed: true, optional: false, required: false
  public get trackerType() {
    return this.getStringAttribute('tracker_type');
  }
}

export class DataSdwanCiscoSecureInternetGatewayFeatureTemplateTrackersList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoSecureInternetGatewayFeatureTemplateTrackersOutputReference {
    return new DataSdwanCiscoSecureInternetGatewayFeatureTemplateTrackersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_secure_internet_gateway_feature_template sdwan_cisco_secure_internet_gateway_feature_template}
*/
export class DataSdwanCiscoSecureInternetGatewayFeatureTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cisco_secure_internet_gateway_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanCiscoSecureInternetGatewayFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanCiscoSecureInternetGatewayFeatureTemplate to import
  * @param importFromId The id of the existing DataSdwanCiscoSecureInternetGatewayFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_secure_internet_gateway_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanCiscoSecureInternetGatewayFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cisco_secure_internet_gateway_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_secure_internet_gateway_feature_template sdwan_cisco_secure_internet_gateway_feature_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanCiscoSecureInternetGatewayFeatureTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSdwanCiscoSecureInternetGatewayFeatureTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cisco_secure_internet_gateway_feature_template',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_types - computed: true, optional: false, required: false
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
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

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new DataSdwanCiscoSecureInternetGatewayFeatureTemplateInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
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

  // services - computed: true, optional: false, required: false
  private _services = new DataSdwanCiscoSecureInternetGatewayFeatureTemplateServicesList(this, "services", false);
  public get services() {
    return this._services;
  }

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
  }

  // tracker_source_ip - computed: true, optional: false, required: false
  public get trackerSourceIp() {
    return this.getStringAttribute('tracker_source_ip');
  }

  // tracker_source_ip_variable - computed: true, optional: false, required: false
  public get trackerSourceIpVariable() {
    return this.getStringAttribute('tracker_source_ip_variable');
  }

  // trackers - computed: true, optional: false, required: false
  private _trackers = new DataSdwanCiscoSecureInternetGatewayFeatureTemplateTrackersList(this, "trackers", false);
  public get trackers() {
    return this._trackers;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // vpn_id - computed: true, optional: false, required: false
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
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
