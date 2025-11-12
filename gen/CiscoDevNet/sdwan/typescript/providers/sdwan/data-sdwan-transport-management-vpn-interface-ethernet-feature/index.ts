// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_management_vpn_interface_ethernet_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanTransportManagementVpnInterfaceEthernetFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_management_vpn_interface_ethernet_feature#feature_profile_id DataSdwanTransportManagementVpnInterfaceEthernetFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The id of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_management_vpn_interface_ethernet_feature#id DataSdwanTransportManagementVpnInterfaceEthernetFeature#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Transport Management VPN Feature ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_management_vpn_interface_ethernet_feature#transport_management_vpn_feature_id DataSdwanTransportManagementVpnInterfaceEthernetFeature#transport_management_vpn_feature_id}
  */
  readonly transportManagementVpnFeatureId: string;
}
export interface DataSdwanTransportManagementVpnInterfaceEthernetFeatureArpEntries {
}

export function dataSdwanTransportManagementVpnInterfaceEthernetFeatureArpEntriesToTerraform(struct?: DataSdwanTransportManagementVpnInterfaceEthernetFeatureArpEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanTransportManagementVpnInterfaceEthernetFeatureArpEntriesToHclTerraform(struct?: DataSdwanTransportManagementVpnInterfaceEthernetFeatureArpEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanTransportManagementVpnInterfaceEthernetFeatureArpEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanTransportManagementVpnInterfaceEthernetFeatureArpEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanTransportManagementVpnInterfaceEthernetFeatureArpEntries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ip_address_variable - computed: true, optional: false, required: false
  public get ipAddressVariable() {
    return this.getStringAttribute('ip_address_variable');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // mac_address_variable - computed: true, optional: false, required: false
  public get macAddressVariable() {
    return this.getStringAttribute('mac_address_variable');
  }
}

export class DataSdwanTransportManagementVpnInterfaceEthernetFeatureArpEntriesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanTransportManagementVpnInterfaceEthernetFeatureArpEntriesOutputReference {
    return new DataSdwanTransportManagementVpnInterfaceEthernetFeatureArpEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanTransportManagementVpnInterfaceEthernetFeatureIpv4SecondaryAddresses {
}

export function dataSdwanTransportManagementVpnInterfaceEthernetFeatureIpv4SecondaryAddressesToTerraform(struct?: DataSdwanTransportManagementVpnInterfaceEthernetFeatureIpv4SecondaryAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanTransportManagementVpnInterfaceEthernetFeatureIpv4SecondaryAddressesToHclTerraform(struct?: DataSdwanTransportManagementVpnInterfaceEthernetFeatureIpv4SecondaryAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanTransportManagementVpnInterfaceEthernetFeatureIpv4SecondaryAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanTransportManagementVpnInterfaceEthernetFeatureIpv4SecondaryAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanTransportManagementVpnInterfaceEthernetFeatureIpv4SecondaryAddresses | undefined) {
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

  // address_variable - computed: true, optional: false, required: false
  public get addressVariable() {
    return this.getStringAttribute('address_variable');
  }

  // subnet_mask - computed: true, optional: false, required: false
  public get subnetMask() {
    return this.getStringAttribute('subnet_mask');
  }

  // subnet_mask_variable - computed: true, optional: false, required: false
  public get subnetMaskVariable() {
    return this.getStringAttribute('subnet_mask_variable');
  }
}

export class DataSdwanTransportManagementVpnInterfaceEthernetFeatureIpv4SecondaryAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanTransportManagementVpnInterfaceEthernetFeatureIpv4SecondaryAddressesOutputReference {
    return new DataSdwanTransportManagementVpnInterfaceEthernetFeatureIpv4SecondaryAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_management_vpn_interface_ethernet_feature sdwan_transport_management_vpn_interface_ethernet_feature}
*/
export class DataSdwanTransportManagementVpnInterfaceEthernetFeature extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_transport_management_vpn_interface_ethernet_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanTransportManagementVpnInterfaceEthernetFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanTransportManagementVpnInterfaceEthernetFeature to import
  * @param importFromId The id of the existing DataSdwanTransportManagementVpnInterfaceEthernetFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_management_vpn_interface_ethernet_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanTransportManagementVpnInterfaceEthernetFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_transport_management_vpn_interface_ethernet_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_management_vpn_interface_ethernet_feature sdwan_transport_management_vpn_interface_ethernet_feature} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanTransportManagementVpnInterfaceEthernetFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanTransportManagementVpnInterfaceEthernetFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_transport_management_vpn_interface_ethernet_feature',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._featureProfileId = config.featureProfileId;
    this._id = config.id;
    this._transportManagementVpnFeatureId = config.transportManagementVpnFeatureId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arp_entries - computed: true, optional: false, required: false
  private _arpEntries = new DataSdwanTransportManagementVpnInterfaceEthernetFeatureArpEntriesList(this, "arp_entries", false);
  public get arpEntries() {
    return this._arpEntries;
  }

  // arp_timeout - computed: true, optional: false, required: false
  public get arpTimeout() {
    return this.getNumberAttribute('arp_timeout');
  }

  // arp_timeout_variable - computed: true, optional: false, required: false
  public get arpTimeoutVariable() {
    return this.getStringAttribute('arp_timeout_variable');
  }

  // autonegotiate - computed: true, optional: false, required: false
  public get autonegotiate() {
    return this.getBooleanAttribute('autonegotiate');
  }

  // autonegotiate_variable - computed: true, optional: false, required: false
  public get autonegotiateVariable() {
    return this.getStringAttribute('autonegotiate_variable');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // duplex - computed: true, optional: false, required: false
  public get duplex() {
    return this.getStringAttribute('duplex');
  }

  // duplex_variable - computed: true, optional: false, required: false
  public get duplexVariable() {
    return this.getStringAttribute('duplex_variable');
  }

  // enable_dhcpv6 - computed: true, optional: false, required: false
  public get enableDhcpv6() {
    return this.getBooleanAttribute('enable_dhcpv6');
  }

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
  }

  // icmp_redirect_disable - computed: true, optional: false, required: false
  public get icmpRedirectDisable() {
    return this.getBooleanAttribute('icmp_redirect_disable');
  }

  // icmp_redirect_disable_variable - computed: true, optional: false, required: false
  public get icmpRedirectDisableVariable() {
    return this.getStringAttribute('icmp_redirect_disable_variable');
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

  // interface_description - computed: true, optional: false, required: false
  public get interfaceDescription() {
    return this.getStringAttribute('interface_description');
  }

  // interface_description_variable - computed: true, optional: false, required: false
  public get interfaceDescriptionVariable() {
    return this.getStringAttribute('interface_description_variable');
  }

  // interface_mtu - computed: true, optional: false, required: false
  public get interfaceMtu() {
    return this.getNumberAttribute('interface_mtu');
  }

  // interface_mtu_variable - computed: true, optional: false, required: false
  public get interfaceMtuVariable() {
    return this.getStringAttribute('interface_mtu_variable');
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }

  // interface_name_variable - computed: true, optional: false, required: false
  public get interfaceNameVariable() {
    return this.getStringAttribute('interface_name_variable');
  }

  // ip_directed_broadcast - computed: true, optional: false, required: false
  public get ipDirectedBroadcast() {
    return this.getBooleanAttribute('ip_directed_broadcast');
  }

  // ip_directed_broadcast_variable - computed: true, optional: false, required: false
  public get ipDirectedBroadcastVariable() {
    return this.getStringAttribute('ip_directed_broadcast_variable');
  }

  // ip_mtu - computed: true, optional: false, required: false
  public get ipMtu() {
    return this.getNumberAttribute('ip_mtu');
  }

  // ip_mtu_variable - computed: true, optional: false, required: false
  public get ipMtuVariable() {
    return this.getStringAttribute('ip_mtu_variable');
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv4_address_variable - computed: true, optional: false, required: false
  public get ipv4AddressVariable() {
    return this.getStringAttribute('ipv4_address_variable');
  }

  // ipv4_auto_detect_bandwidth - computed: true, optional: false, required: false
  public get ipv4AutoDetectBandwidth() {
    return this.getBooleanAttribute('ipv4_auto_detect_bandwidth');
  }

  // ipv4_auto_detect_bandwidth_variable - computed: true, optional: false, required: false
  public get ipv4AutoDetectBandwidthVariable() {
    return this.getStringAttribute('ipv4_auto_detect_bandwidth_variable');
  }

  // ipv4_configuration_type - computed: true, optional: false, required: false
  public get ipv4ConfigurationType() {
    return this.getStringAttribute('ipv4_configuration_type');
  }

  // ipv4_dhcp_distance - computed: true, optional: false, required: false
  public get ipv4DhcpDistance() {
    return this.getNumberAttribute('ipv4_dhcp_distance');
  }

  // ipv4_dhcp_distance_variable - computed: true, optional: false, required: false
  public get ipv4DhcpDistanceVariable() {
    return this.getStringAttribute('ipv4_dhcp_distance_variable');
  }

  // ipv4_dhcp_helper - computed: true, optional: false, required: false
  public get ipv4DhcpHelper() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv4_dhcp_helper'));
  }

  // ipv4_dhcp_helper_variable - computed: true, optional: false, required: false
  public get ipv4DhcpHelperVariable() {
    return this.getStringAttribute('ipv4_dhcp_helper_variable');
  }

  // ipv4_iperf_server - computed: true, optional: false, required: false
  public get ipv4IperfServer() {
    return this.getStringAttribute('ipv4_iperf_server');
  }

  // ipv4_iperf_server_variable - computed: true, optional: false, required: false
  public get ipv4IperfServerVariable() {
    return this.getStringAttribute('ipv4_iperf_server_variable');
  }

  // ipv4_secondary_addresses - computed: true, optional: false, required: false
  private _ipv4SecondaryAddresses = new DataSdwanTransportManagementVpnInterfaceEthernetFeatureIpv4SecondaryAddressesList(this, "ipv4_secondary_addresses", false);
  public get ipv4SecondaryAddresses() {
    return this._ipv4SecondaryAddresses;
  }

  // ipv4_subnet_mask - computed: true, optional: false, required: false
  public get ipv4SubnetMask() {
    return this.getStringAttribute('ipv4_subnet_mask');
  }

  // ipv4_subnet_mask_variable - computed: true, optional: false, required: false
  public get ipv4SubnetMaskVariable() {
    return this.getStringAttribute('ipv4_subnet_mask_variable');
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // ipv6_address_variable - computed: true, optional: false, required: false
  public get ipv6AddressVariable() {
    return this.getStringAttribute('ipv6_address_variable');
  }

  // ipv6_configuration_type - computed: true, optional: false, required: false
  public get ipv6ConfigurationType() {
    return this.getStringAttribute('ipv6_configuration_type');
  }

  // load_interval - computed: true, optional: false, required: false
  public get loadInterval() {
    return this.getNumberAttribute('load_interval');
  }

  // load_interval_variable - computed: true, optional: false, required: false
  public get loadIntervalVariable() {
    return this.getStringAttribute('load_interval_variable');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // mac_address_variable - computed: true, optional: false, required: false
  public get macAddressVariable() {
    return this.getStringAttribute('mac_address_variable');
  }

  // media_type - computed: true, optional: false, required: false
  public get mediaType() {
    return this.getStringAttribute('media_type');
  }

  // media_type_variable - computed: true, optional: false, required: false
  public get mediaTypeVariable() {
    return this.getStringAttribute('media_type_variable');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // shutdown - computed: true, optional: false, required: false
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }

  // shutdown_variable - computed: true, optional: false, required: false
  public get shutdownVariable() {
    return this.getStringAttribute('shutdown_variable');
  }

  // speed - computed: true, optional: false, required: false
  public get speed() {
    return this.getStringAttribute('speed');
  }

  // speed_variable - computed: true, optional: false, required: false
  public get speedVariable() {
    return this.getStringAttribute('speed_variable');
  }

  // tcp_mss - computed: true, optional: false, required: false
  public get tcpMss() {
    return this.getNumberAttribute('tcp_mss');
  }

  // tcp_mss_variable - computed: true, optional: false, required: false
  public get tcpMssVariable() {
    return this.getStringAttribute('tcp_mss_variable');
  }

  // transport_management_vpn_feature_id - computed: false, optional: false, required: true
  private _transportManagementVpnFeatureId?: string; 
  public get transportManagementVpnFeatureId() {
    return this.getStringAttribute('transport_management_vpn_feature_id');
  }
  public set transportManagementVpnFeatureId(value: string) {
    this._transportManagementVpnFeatureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transportManagementVpnFeatureIdInput() {
    return this._transportManagementVpnFeatureId;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      id: cdktf.stringToTerraform(this._id),
      transport_management_vpn_feature_id: cdktf.stringToTerraform(this._transportManagementVpnFeatureId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
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
      transport_management_vpn_feature_id: {
        value: cdktf.stringToHclTerraform(this._transportManagementVpnFeatureId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
