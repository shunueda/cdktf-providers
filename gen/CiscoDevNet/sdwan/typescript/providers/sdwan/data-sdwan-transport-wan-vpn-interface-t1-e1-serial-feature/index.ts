// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_wan_vpn_interface_t1_e1_serial_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanTransportWanVpnInterfaceT1E1SerialFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_wan_vpn_interface_t1_e1_serial_feature#feature_profile_id DataSdwanTransportWanVpnInterfaceT1E1SerialFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The id of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_wan_vpn_interface_t1_e1_serial_feature#id DataSdwanTransportWanVpnInterfaceT1E1SerialFeature#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Transport WAN VPN Feature ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_wan_vpn_interface_t1_e1_serial_feature#transport_wan_vpn_feature_id DataSdwanTransportWanVpnInterfaceT1E1SerialFeature#transport_wan_vpn_feature_id}
  */
  readonly transportWanVpnFeatureId: string;
}
export interface DataSdwanTransportWanVpnInterfaceT1E1SerialFeatureTunnelInterfaceEncapsulations {
}

export function dataSdwanTransportWanVpnInterfaceT1E1SerialFeatureTunnelInterfaceEncapsulationsToTerraform(struct?: DataSdwanTransportWanVpnInterfaceT1E1SerialFeatureTunnelInterfaceEncapsulations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanTransportWanVpnInterfaceT1E1SerialFeatureTunnelInterfaceEncapsulationsToHclTerraform(struct?: DataSdwanTransportWanVpnInterfaceT1E1SerialFeatureTunnelInterfaceEncapsulations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanTransportWanVpnInterfaceT1E1SerialFeatureTunnelInterfaceEncapsulationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanTransportWanVpnInterfaceT1E1SerialFeatureTunnelInterfaceEncapsulations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanTransportWanVpnInterfaceT1E1SerialFeatureTunnelInterfaceEncapsulations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encapsulation - computed: true, optional: false, required: false
  public get encapsulation() {
    return this.getStringAttribute('encapsulation');
  }

  // preference - computed: true, optional: false, required: false
  public get preference() {
    return this.getNumberAttribute('preference');
  }

  // preference_variable - computed: true, optional: false, required: false
  public get preferenceVariable() {
    return this.getStringAttribute('preference_variable');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }

  // weight_variable - computed: true, optional: false, required: false
  public get weightVariable() {
    return this.getStringAttribute('weight_variable');
  }
}

export class DataSdwanTransportWanVpnInterfaceT1E1SerialFeatureTunnelInterfaceEncapsulationsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanTransportWanVpnInterfaceT1E1SerialFeatureTunnelInterfaceEncapsulationsOutputReference {
    return new DataSdwanTransportWanVpnInterfaceT1E1SerialFeatureTunnelInterfaceEncapsulationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_wan_vpn_interface_t1_e1_serial_feature sdwan_transport_wan_vpn_interface_t1_e1_serial_feature}
*/
export class DataSdwanTransportWanVpnInterfaceT1E1SerialFeature extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_transport_wan_vpn_interface_t1_e1_serial_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanTransportWanVpnInterfaceT1E1SerialFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanTransportWanVpnInterfaceT1E1SerialFeature to import
  * @param importFromId The id of the existing DataSdwanTransportWanVpnInterfaceT1E1SerialFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_wan_vpn_interface_t1_e1_serial_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanTransportWanVpnInterfaceT1E1SerialFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_transport_wan_vpn_interface_t1_e1_serial_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_wan_vpn_interface_t1_e1_serial_feature sdwan_transport_wan_vpn_interface_t1_e1_serial_feature} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanTransportWanVpnInterfaceT1E1SerialFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanTransportWanVpnInterfaceT1E1SerialFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_transport_wan_vpn_interface_t1_e1_serial_feature',
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
    this._featureProfileId = config.featureProfileId;
    this._id = config.id;
    this._transportWanVpnFeatureId = config.transportWanVpnFeatureId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl_ipv4_egress_feature_id - computed: true, optional: false, required: false
  public get aclIpv4EgressFeatureId() {
    return this.getStringAttribute('acl_ipv4_egress_feature_id');
  }

  // acl_ipv4_ingress_feature_id - computed: true, optional: false, required: false
  public get aclIpv4IngressFeatureId() {
    return this.getStringAttribute('acl_ipv4_ingress_feature_id');
  }

  // acl_ipv6_egress_feature_id - computed: true, optional: false, required: false
  public get aclIpv6EgressFeatureId() {
    return this.getStringAttribute('acl_ipv6_egress_feature_id');
  }

  // acl_ipv6_ingress_feature_id - computed: true, optional: false, required: false
  public get aclIpv6IngressFeatureId() {
    return this.getStringAttribute('acl_ipv6_ingress_feature_id');
  }

  // bandwidth - computed: true, optional: false, required: false
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }

  // bandwidth_downstream - computed: true, optional: false, required: false
  public get bandwidthDownstream() {
    return this.getNumberAttribute('bandwidth_downstream');
  }

  // bandwidth_downstream_variable - computed: true, optional: false, required: false
  public get bandwidthDownstreamVariable() {
    return this.getStringAttribute('bandwidth_downstream_variable');
  }

  // bandwidth_variable - computed: true, optional: false, required: false
  public get bandwidthVariable() {
    return this.getStringAttribute('bandwidth_variable');
  }

  // clock_rate - computed: true, optional: false, required: false
  public get clockRate() {
    return this.getStringAttribute('clock_rate');
  }

  // clock_rate_variable - computed: true, optional: false, required: false
  public get clockRateVariable() {
    return this.getStringAttribute('clock_rate_variable');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // encapsulation - computed: true, optional: false, required: false
  public get encapsulation() {
    return this.getStringAttribute('encapsulation');
  }

  // encapsulation_variable - computed: true, optional: false, required: false
  public get encapsulationVariable() {
    return this.getStringAttribute('encapsulation_variable');
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

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }

  // interface_name_variable - computed: true, optional: false, required: false
  public get interfaceNameVariable() {
    return this.getStringAttribute('interface_name_variable');
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

  // per_tunnel_qos - computed: true, optional: false, required: false
  public get perTunnelQos() {
    return this.getBooleanAttribute('per_tunnel_qos');
  }

  // per_tunnel_qos_aggregator - computed: true, optional: false, required: false
  public get perTunnelQosAggregator() {
    return this.getBooleanAttribute('per_tunnel_qos_aggregator');
  }

  // per_tunnel_qos_aggregator_variable - computed: true, optional: false, required: false
  public get perTunnelQosAggregatorVariable() {
    return this.getStringAttribute('per_tunnel_qos_aggregator_variable');
  }

  // per_tunnel_qos_variable - computed: true, optional: false, required: false
  public get perTunnelQosVariable() {
    return this.getStringAttribute('per_tunnel_qos_variable');
  }

  // qos_shaping_rate - computed: true, optional: false, required: false
  public get qosShapingRate() {
    return this.getNumberAttribute('qos_shaping_rate');
  }

  // qos_shaping_rate_variable - computed: true, optional: false, required: false
  public get qosShapingRateVariable() {
    return this.getStringAttribute('qos_shaping_rate_variable');
  }

  // shutdown - computed: true, optional: false, required: false
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }

  // shutdown_variable - computed: true, optional: false, required: false
  public get shutdownVariable() {
    return this.getStringAttribute('shutdown_variable');
  }

  // tcp_mss - computed: true, optional: false, required: false
  public get tcpMss() {
    return this.getNumberAttribute('tcp_mss');
  }

  // tcp_mss_variable - computed: true, optional: false, required: false
  public get tcpMssVariable() {
    return this.getStringAttribute('tcp_mss_variable');
  }

  // tloc_extension - computed: true, optional: false, required: false
  public get tlocExtension() {
    return this.getStringAttribute('tloc_extension');
  }

  // tloc_extension_variable - computed: true, optional: false, required: false
  public get tlocExtensionVariable() {
    return this.getStringAttribute('tloc_extension_variable');
  }

  // transport_wan_vpn_feature_id - computed: false, optional: false, required: true
  private _transportWanVpnFeatureId?: string; 
  public get transportWanVpnFeatureId() {
    return this.getStringAttribute('transport_wan_vpn_feature_id');
  }
  public set transportWanVpnFeatureId(value: string) {
    this._transportWanVpnFeatureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transportWanVpnFeatureIdInput() {
    return this._transportWanVpnFeatureId;
  }

  // tunnel_interface - computed: true, optional: false, required: false
  public get tunnelInterface() {
    return this.getBooleanAttribute('tunnel_interface');
  }

  // tunnel_interface_allow_all - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowAll() {
    return this.getBooleanAttribute('tunnel_interface_allow_all');
  }

  // tunnel_interface_allow_all_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowAllVariable() {
    return this.getStringAttribute('tunnel_interface_allow_all_variable');
  }

  // tunnel_interface_allow_bfd - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowBfd() {
    return this.getBooleanAttribute('tunnel_interface_allow_bfd');
  }

  // tunnel_interface_allow_bfd_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowBfdVariable() {
    return this.getStringAttribute('tunnel_interface_allow_bfd_variable');
  }

  // tunnel_interface_allow_bgp - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowBgp() {
    return this.getBooleanAttribute('tunnel_interface_allow_bgp');
  }

  // tunnel_interface_allow_bgp_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowBgpVariable() {
    return this.getStringAttribute('tunnel_interface_allow_bgp_variable');
  }

  // tunnel_interface_allow_dhcp - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowDhcp() {
    return this.getBooleanAttribute('tunnel_interface_allow_dhcp');
  }

  // tunnel_interface_allow_dhcp_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowDhcpVariable() {
    return this.getStringAttribute('tunnel_interface_allow_dhcp_variable');
  }

  // tunnel_interface_allow_dns - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowDns() {
    return this.getBooleanAttribute('tunnel_interface_allow_dns');
  }

  // tunnel_interface_allow_dns_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowDnsVariable() {
    return this.getStringAttribute('tunnel_interface_allow_dns_variable');
  }

  // tunnel_interface_allow_https - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowHttps() {
    return this.getBooleanAttribute('tunnel_interface_allow_https');
  }

  // tunnel_interface_allow_https_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowHttpsVariable() {
    return this.getStringAttribute('tunnel_interface_allow_https_variable');
  }

  // tunnel_interface_allow_icmp - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowIcmp() {
    return this.getBooleanAttribute('tunnel_interface_allow_icmp');
  }

  // tunnel_interface_allow_icmp_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowIcmpVariable() {
    return this.getStringAttribute('tunnel_interface_allow_icmp_variable');
  }

  // tunnel_interface_allow_netconf - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowNetconf() {
    return this.getBooleanAttribute('tunnel_interface_allow_netconf');
  }

  // tunnel_interface_allow_netconf_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowNetconfVariable() {
    return this.getStringAttribute('tunnel_interface_allow_netconf_variable');
  }

  // tunnel_interface_allow_ntp - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowNtp() {
    return this.getBooleanAttribute('tunnel_interface_allow_ntp');
  }

  // tunnel_interface_allow_ntp_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowNtpVariable() {
    return this.getStringAttribute('tunnel_interface_allow_ntp_variable');
  }

  // tunnel_interface_allow_ospf - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowOspf() {
    return this.getBooleanAttribute('tunnel_interface_allow_ospf');
  }

  // tunnel_interface_allow_ospf_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowOspfVariable() {
    return this.getStringAttribute('tunnel_interface_allow_ospf_variable');
  }

  // tunnel_interface_allow_snmp - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowSnmp() {
    return this.getBooleanAttribute('tunnel_interface_allow_snmp');
  }

  // tunnel_interface_allow_snmp_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowSnmpVariable() {
    return this.getStringAttribute('tunnel_interface_allow_snmp_variable');
  }

  // tunnel_interface_allow_ssh - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowSsh() {
    return this.getBooleanAttribute('tunnel_interface_allow_ssh');
  }

  // tunnel_interface_allow_ssh_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowSshVariable() {
    return this.getStringAttribute('tunnel_interface_allow_ssh_variable');
  }

  // tunnel_interface_allow_stun - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowStun() {
    return this.getBooleanAttribute('tunnel_interface_allow_stun');
  }

  // tunnel_interface_allow_stun_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowStunVariable() {
    return this.getStringAttribute('tunnel_interface_allow_stun_variable');
  }

  // tunnel_interface_bind_loopback_tunnel - computed: true, optional: false, required: false
  public get tunnelInterfaceBindLoopbackTunnel() {
    return this.getStringAttribute('tunnel_interface_bind_loopback_tunnel');
  }

  // tunnel_interface_bind_loopback_tunnel_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceBindLoopbackTunnelVariable() {
    return this.getStringAttribute('tunnel_interface_bind_loopback_tunnel_variable');
  }

  // tunnel_interface_border - computed: true, optional: false, required: false
  public get tunnelInterfaceBorder() {
    return this.getBooleanAttribute('tunnel_interface_border');
  }

  // tunnel_interface_border_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceBorderVariable() {
    return this.getStringAttribute('tunnel_interface_border_variable');
  }

  // tunnel_interface_carrier - computed: true, optional: false, required: false
  public get tunnelInterfaceCarrier() {
    return this.getStringAttribute('tunnel_interface_carrier');
  }

  // tunnel_interface_carrier_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceCarrierVariable() {
    return this.getStringAttribute('tunnel_interface_carrier_variable');
  }

  // tunnel_interface_clear_dont_fragment - computed: true, optional: false, required: false
  public get tunnelInterfaceClearDontFragment() {
    return this.getBooleanAttribute('tunnel_interface_clear_dont_fragment');
  }

  // tunnel_interface_clear_dont_fragment_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceClearDontFragmentVariable() {
    return this.getStringAttribute('tunnel_interface_clear_dont_fragment_variable');
  }

  // tunnel_interface_clear_network_broadcast - computed: true, optional: false, required: false
  public get tunnelInterfaceClearNetworkBroadcast() {
    return this.getBooleanAttribute('tunnel_interface_clear_network_broadcast');
  }

  // tunnel_interface_clear_network_broadcast_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceClearNetworkBroadcastVariable() {
    return this.getStringAttribute('tunnel_interface_clear_network_broadcast_variable');
  }

  // tunnel_interface_color - computed: true, optional: false, required: false
  public get tunnelInterfaceColor() {
    return this.getStringAttribute('tunnel_interface_color');
  }

  // tunnel_interface_color_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceColorVariable() {
    return this.getStringAttribute('tunnel_interface_color_variable');
  }

  // tunnel_interface_encapsulations - computed: true, optional: false, required: false
  private _tunnelInterfaceEncapsulations = new DataSdwanTransportWanVpnInterfaceT1E1SerialFeatureTunnelInterfaceEncapsulationsList(this, "tunnel_interface_encapsulations", false);
  public get tunnelInterfaceEncapsulations() {
    return this._tunnelInterfaceEncapsulations;
  }

  // tunnel_interface_exclude_controller_group_list - computed: true, optional: false, required: false
  public get tunnelInterfaceExcludeControllerGroupList() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tunnel_interface_exclude_controller_group_list')));
  }

  // tunnel_interface_exclude_controller_group_list_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceExcludeControllerGroupListVariable() {
    return this.getStringAttribute('tunnel_interface_exclude_controller_group_list_variable');
  }

  // tunnel_interface_groups - computed: true, optional: false, required: false
  public get tunnelInterfaceGroups() {
    return this.getNumberAttribute('tunnel_interface_groups');
  }

  // tunnel_interface_groups_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceGroupsVariable() {
    return this.getStringAttribute('tunnel_interface_groups_variable');
  }

  // tunnel_interface_hello_interval - computed: true, optional: false, required: false
  public get tunnelInterfaceHelloInterval() {
    return this.getNumberAttribute('tunnel_interface_hello_interval');
  }

  // tunnel_interface_hello_interval_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceHelloIntervalVariable() {
    return this.getStringAttribute('tunnel_interface_hello_interval_variable');
  }

  // tunnel_interface_hello_tolerance - computed: true, optional: false, required: false
  public get tunnelInterfaceHelloTolerance() {
    return this.getNumberAttribute('tunnel_interface_hello_tolerance');
  }

  // tunnel_interface_hello_tolerance_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceHelloToleranceVariable() {
    return this.getStringAttribute('tunnel_interface_hello_tolerance_variable');
  }

  // tunnel_interface_last_resort_circuit - computed: true, optional: false, required: false
  public get tunnelInterfaceLastResortCircuit() {
    return this.getBooleanAttribute('tunnel_interface_last_resort_circuit');
  }

  // tunnel_interface_last_resort_circuit_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceLastResortCircuitVariable() {
    return this.getStringAttribute('tunnel_interface_last_resort_circuit_variable');
  }

  // tunnel_interface_low_bandwidth_link - computed: true, optional: false, required: false
  public get tunnelInterfaceLowBandwidthLink() {
    return this.getBooleanAttribute('tunnel_interface_low_bandwidth_link');
  }

  // tunnel_interface_low_bandwidth_link_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceLowBandwidthLinkVariable() {
    return this.getStringAttribute('tunnel_interface_low_bandwidth_link_variable');
  }

  // tunnel_interface_max_control_connections - computed: true, optional: false, required: false
  public get tunnelInterfaceMaxControlConnections() {
    return this.getNumberAttribute('tunnel_interface_max_control_connections');
  }

  // tunnel_interface_max_control_connections_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceMaxControlConnectionsVariable() {
    return this.getStringAttribute('tunnel_interface_max_control_connections_variable');
  }

  // tunnel_interface_nat_refresh_interval - computed: true, optional: false, required: false
  public get tunnelInterfaceNatRefreshInterval() {
    return this.getNumberAttribute('tunnel_interface_nat_refresh_interval');
  }

  // tunnel_interface_nat_refresh_interval_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceNatRefreshIntervalVariable() {
    return this.getStringAttribute('tunnel_interface_nat_refresh_interval_variable');
  }

  // tunnel_interface_port_hop - computed: true, optional: false, required: false
  public get tunnelInterfacePortHop() {
    return this.getBooleanAttribute('tunnel_interface_port_hop');
  }

  // tunnel_interface_port_hop_variable - computed: true, optional: false, required: false
  public get tunnelInterfacePortHopVariable() {
    return this.getStringAttribute('tunnel_interface_port_hop_variable');
  }

  // tunnel_interface_restrict - computed: true, optional: false, required: false
  public get tunnelInterfaceRestrict() {
    return this.getBooleanAttribute('tunnel_interface_restrict');
  }

  // tunnel_interface_restrict_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceRestrictVariable() {
    return this.getStringAttribute('tunnel_interface_restrict_variable');
  }

  // tunnel_interface_tunnel_tcp_mss - computed: true, optional: false, required: false
  public get tunnelInterfaceTunnelTcpMss() {
    return this.getNumberAttribute('tunnel_interface_tunnel_tcp_mss');
  }

  // tunnel_interface_tunnel_tcp_mss_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceTunnelTcpMssVariable() {
    return this.getStringAttribute('tunnel_interface_tunnel_tcp_mss_variable');
  }

  // tunnel_interface_vbond_as_stun_server - computed: true, optional: false, required: false
  public get tunnelInterfaceVbondAsStunServer() {
    return this.getBooleanAttribute('tunnel_interface_vbond_as_stun_server');
  }

  // tunnel_interface_vbond_as_stun_server_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceVbondAsStunServerVariable() {
    return this.getStringAttribute('tunnel_interface_vbond_as_stun_server_variable');
  }

  // tunnel_interface_vmanage_connection_preference - computed: true, optional: false, required: false
  public get tunnelInterfaceVmanageConnectionPreference() {
    return this.getNumberAttribute('tunnel_interface_vmanage_connection_preference');
  }

  // tunnel_interface_vmanage_connection_preference_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceVmanageConnectionPreferenceVariable() {
    return this.getStringAttribute('tunnel_interface_vmanage_connection_preference_variable');
  }

  // tunnel_qos_mode - computed: true, optional: false, required: false
  public get tunnelQosMode() {
    return this.getStringAttribute('tunnel_qos_mode');
  }

  // tunnel_qos_mode_variable - computed: true, optional: false, required: false
  public get tunnelQosModeVariable() {
    return this.getStringAttribute('tunnel_qos_mode_variable');
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
      transport_wan_vpn_feature_id: cdktf.stringToTerraform(this._transportWanVpnFeatureId),
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
      transport_wan_vpn_feature_id: {
        value: cdktf.stringToHclTerraform(this._transportWanVpnFeatureId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
