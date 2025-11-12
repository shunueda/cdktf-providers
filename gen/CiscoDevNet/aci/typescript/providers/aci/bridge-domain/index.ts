// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BridgeDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Advertise host routes (/32 prefixes) out of the L3Out(s) associated to the Bridge Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#advertise_host_routes BridgeDomain#advertise_host_routes}
  */
  readonly advertiseHostRoutes?: string;
  /**
  * The annotation of the Bridge Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#annotation BridgeDomain#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#annotations BridgeDomain#annotations}
  */
  readonly annotations?: BridgeDomainAnnotations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#arp_flood BridgeDomain#arp_flood}
  */
  readonly arpFlood?: string;
  /**
  * Enable ARP flooding for the Bridge Domain object. If flooding is disabled, ARP requests for unknown endpoints will be forwarded by the leaf switch to the spine proxy for resolution and might trigger an ARP glean if the endpoint is not present in the COOP database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#arp_flooding BridgeDomain#arp_flooding}
  */
  readonly arpFlooding?: string;
  /**
  * The domain type of the Bridge Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#bridge_domain_type BridgeDomain#bridge_domain_type}
  */
  readonly bridgeDomainType?: string;
  /**
  * Clear all endpoints in leaf switches for the Bridge Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#clear_remote_mac_entries BridgeDomain#clear_remote_mac_entries}
  */
  readonly clearRemoteMacEntries?: string;
  /**
  * The MAC address of the Bridge Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#custom_mac_address BridgeDomain#custom_mac_address}
  */
  readonly customMacAddress?: string;
  /**
  * The description of the Bridge Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#description BridgeDomain#description}
  */
  readonly description?: string;
  /**
  * Drop rogue multicast ARP packets for the Bridge Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#drop_arp_with_multicast_smac BridgeDomain#drop_arp_with_multicast_smac}
  */
  readonly dropArpWithMulticastSmac?: string;
  /**
  * Enable intersite Broadcast, Unknown-Unicast and Multicast (BUM) traffic between sites for the Bridge Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#enable_intersite_bum_traffic BridgeDomain#enable_intersite_bum_traffic}
  */
  readonly enableIntersiteBumTraffic?: string;
  /**
  * Enable rogue exception based on MAC wildcard for the Bridge Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#enable_rogue_exception_mac BridgeDomain#enable_rogue_exception_mac}
  */
  readonly enableRogueExceptionMac?: string;
  /**
  * The End Point move detection option uses the Gratuitous Address Resolution Protocol (GARP). A gratuitous ARP is an ARP broadcast-type of packet that is used to verify that no other device on the network has the same IP address as the sending device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#endpoint_move_detection_mode BridgeDomain#endpoint_move_detection_mode}
  */
  readonly endpointMoveDetectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#ep_clear BridgeDomain#ep_clear}
  */
  readonly epClear?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#ep_move_detect_mode BridgeDomain#ep_move_detect_mode}
  */
  readonly epMoveDetectMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#host_based_routing BridgeDomain#host_based_routing}
  */
  readonly hostBasedRouting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#intersite_bum_traffic_allow BridgeDomain#intersite_bum_traffic_allow}
  */
  readonly intersiteBumTrafficAllow?: string;
  /**
  * Enable L2 stretch between sites for the Bridge Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#intersite_l2_stretch BridgeDomain#intersite_l2_stretch}
  */
  readonly intersiteL2Stretch?: string;
  /**
  * The IP learning setting of the Bridge Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#ip_learning BridgeDomain#ip_learning}
  */
  readonly ipLearning?: string;
  /**
  * The forwarding method for unknown IPv6 multicast destinations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#ipv6_l3_unknown_multicast_flooding BridgeDomain#ipv6_l3_unknown_multicast_flooding}
  */
  readonly ipv6L3UnknownMulticastFlooding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#ipv6_mcast_allow BridgeDomain#ipv6_mcast_allow}
  */
  readonly ipv6McastAllow?: string;
  /**
  * The forwarding method for unknown layer 2 destinations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#l2_unknown_unicast_flooding BridgeDomain#l2_unknown_unicast_flooding}
  */
  readonly l2UnknownUnicastFlooding?: string;
  /**
  * The forwarding method for unknown layer 3 multicast destinations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#l3_unknown_multicast_flooding BridgeDomain#l3_unknown_multicast_flooding}
  */
  readonly l3UnknownMulticastFlooding?: string;
  /**
  * The bridge domain (BD) access profile. When created over a BD, contracts are not enforced for the BD, and the encap will be applied to all endpoint groups on this BD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#legacy_mode BridgeDomain#legacy_mode}
  */
  readonly legacyMode?: BridgeDomainLegacyMode;
  /**
  * Limit IP address learning to subnets for the Bridge Domain object. Every Bridge Domain object can have multiple subnets associated with it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#limit_ip_learn_to_subnets BridgeDomain#limit_ip_learn_to_subnets}
  */
  readonly limitIpLearnToSubnets?: string;
  /**
  * The override of the system generated IPv6 link-local address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#link_local_ipv6_address BridgeDomain#link_local_ipv6_address}
  */
  readonly linkLocalIpv6Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#ll_addr BridgeDomain#ll_addr}
  */
  readonly llAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#mac BridgeDomain#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#mcast_allow BridgeDomain#mcast_allow}
  */
  readonly mcastAllow?: string;
  /**
  * The multiple destination forwarding method for L2 Multicast, Broadcast, and Link Layer traffic types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#multi_destination_flooding BridgeDomain#multi_destination_flooding}
  */
  readonly multiDestinationFlooding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#multi_dst_pkt_act BridgeDomain#multi_dst_pkt_act}
  */
  readonly multiDstPktAct?: string;
  /**
  * The name of the Bridge Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#name BridgeDomain#name}
  */
  readonly name?: string;
  /**
  * The name alias of the Bridge Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#name_alias BridgeDomain#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Optimize WAN Bandwidth for the Bridge Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#optimize_wan_bandwidth BridgeDomain#optimize_wan_bandwidth}
  */
  readonly optimizeWanBandwidth?: string;
  /**
  * The key for enabling clients to own their data for entity correlation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#owner_key BridgeDomain#owner_key}
  */
  readonly ownerKey?: string;
  /**
  * A tag for enabling clients to add their own data. For example, to indicate who created this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#owner_tag BridgeDomain#owner_tag}
  */
  readonly ownerTag?: string;
  /**
  * The distinguished name (DN) of the parent object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#parent_dn BridgeDomain#parent_dn}
  */
  readonly parentDn?: string;
  /**
  * Enable IPv4 Protocol Independent Multicast (PIM) traffic for the Bridge Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#pim BridgeDomain#pim}
  */
  readonly pim?: string;
  /**
  * Enable IPv6 Protocol Independent Multicast (PIM) traffic for the Bridge Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#pim_ipv6 BridgeDomain#pim_ipv6}
  */
  readonly pimIpv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#relation_fv_rs_abd_pol_mon_pol BridgeDomain#relation_fv_rs_abd_pol_mon_pol}
  */
  readonly relationFvRsAbdPolMonPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#relation_fv_rs_bd_flood_to BridgeDomain#relation_fv_rs_bd_flood_to}
  */
  readonly relationFvRsBdFloodTo?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#relation_fv_rs_bd_to_ep_ret BridgeDomain#relation_fv_rs_bd_to_ep_ret}
  */
  readonly relationFvRsBdToEpRet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#relation_fv_rs_bd_to_fhs BridgeDomain#relation_fv_rs_bd_to_fhs}
  */
  readonly relationFvRsBdToFhs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#relation_fv_rs_bd_to_nd_p BridgeDomain#relation_fv_rs_bd_to_nd_p}
  */
  readonly relationFvRsBdToNdP?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#relation_fv_rs_bd_to_out BridgeDomain#relation_fv_rs_bd_to_out}
  */
  readonly relationFvRsBdToOut?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#relation_fv_rs_bd_to_profile BridgeDomain#relation_fv_rs_bd_to_profile}
  */
  readonly relationFvRsBdToProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#relation_fv_rs_bd_to_relay_p BridgeDomain#relation_fv_rs_bd_to_relay_p}
  */
  readonly relationFvRsBdToRelayP?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#relation_fv_rs_ctx BridgeDomain#relation_fv_rs_ctx}
  */
  readonly relationFvRsCtx?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#relation_fv_rs_igmpsn BridgeDomain#relation_fv_rs_igmpsn}
  */
  readonly relationFvRsIgmpsn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#relation_fv_rs_mldsn BridgeDomain#relation_fv_rs_mldsn}
  */
  readonly relationFvRsMldsn?: string;
  /**
  * A source relation to the DHCP relay profile. This is an internal object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#relation_to_dhcp_relay_policy BridgeDomain#relation_to_dhcp_relay_policy}
  */
  readonly relationToDhcpRelayPolicy?: BridgeDomainRelationToDhcpRelayPolicy;
  /**
  * A source relation to the endpoint retention policy providing the parameters for the lifecycle of the endpoint group. This is an internal object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#relation_to_end_point_retention_policy BridgeDomain#relation_to_end_point_retention_policy}
  */
  readonly relationToEndPointRetentionPolicy?: BridgeDomainRelationToEndPointRetentionPolicy;
  /**
  * Relation to FHS BD policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#relation_to_first_hop_security_policy BridgeDomain#relation_to_first_hop_security_policy}
  */
  readonly relationToFirstHopSecurityPolicy?: BridgeDomainRelationToFirstHopSecurityPolicy;
  /**
  * A source relation to the Internet Group Management Protocol (IGMP) snooping policy. This is an internal object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#relation_to_igmp_snooping_policy BridgeDomain#relation_to_igmp_snooping_policy}
  */
  readonly relationToIgmpSnoopingPolicy?: BridgeDomainRelationToIgmpSnoopingPolicy;
  /**
  * A source relation to the policy controlling connectivity to the outside. This is an internal object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#relation_to_l3_outsides BridgeDomain#relation_to_l3_outsides}
  */
  readonly relationToL3Outsides?: BridgeDomainRelationToL3Outsides[] | cdktf.IResolvable;
  /**
  * Relation to an MLD Snoop policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#relation_to_mld_snooping_policy BridgeDomain#relation_to_mld_snooping_policy}
  */
  readonly relationToMldSnoopingPolicy?: BridgeDomainRelationToMldSnoopingPolicy;
  /**
  * A source relation to the monitoring policy model for the endpoint group semantic scope. This is an internal object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#relation_to_monitoring_policy BridgeDomain#relation_to_monitoring_policy}
  */
  readonly relationToMonitoringPolicy?: BridgeDomainRelationToMonitoringPolicy;
  /**
  * The neighbor discovery policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#relation_to_neighbor_discovery_interface_policy BridgeDomain#relation_to_neighbor_discovery_interface_policy}
  */
  readonly relationToNeighborDiscoveryInterfacePolicy?: BridgeDomainRelationToNeighborDiscoveryInterfacePolicy;
  /**
  * Relation to Netflow Monitor policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#relation_to_netflow_monitor_policies BridgeDomain#relation_to_netflow_monitor_policies}
  */
  readonly relationToNetflowMonitorPolicies?: BridgeDomainRelationToNetflowMonitorPolicies[] | cdktf.IResolvable;
  /**
  * A source relation to external networks that are routed via Layer 3 networks outside the fabric that are reachable by a tenant's applications. This is an internal object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#relation_to_route_control_profile BridgeDomain#relation_to_route_control_profile}
  */
  readonly relationToRouteControlProfile?: BridgeDomainRelationToRouteControlProfile;
  /**
  * A source relation to a private layer 3 network context that either belongs to a specific tenant or is shared. This is an internal object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#relation_to_vrf BridgeDomain#relation_to_vrf}
  */
  readonly relationToVrf?: BridgeDomainRelationToVrf;
  /**
  * Configuration of MAC address to be excepted from Rogue processing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#rogue_coop_exceptions BridgeDomain#rogue_coop_exceptions}
  */
  readonly rogueCoopExceptions?: BridgeDomainRogueCoopExceptions[] | cdktf.IResolvable;
  /**
  * Disable Routing on service BD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#service_bd_routing_disable BridgeDomain#service_bd_routing_disable}
  */
  readonly serviceBdRoutingDisable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#tags BridgeDomain#tags}
  */
  readonly tags?: BridgeDomainTags[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#tenant_dn BridgeDomain#tenant_dn}
  */
  readonly tenantDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#unicast_route BridgeDomain#unicast_route}
  */
  readonly unicastRoute?: string;
  /**
  * Enables L3 routing and endpoint IP learning for the Bridge Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#unicast_routing BridgeDomain#unicast_routing}
  */
  readonly unicastRouting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#unk_mac_ucast_act BridgeDomain#unk_mac_ucast_act}
  */
  readonly unkMacUcastAct?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#unk_mcast_act BridgeDomain#unk_mcast_act}
  */
  readonly unkMcastAct?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#v6unk_mcast_act BridgeDomain#v6unk_mcast_act}
  */
  readonly v6UnkMcastAct?: string;
  /**
  * The virtual MAC address of the Bridge Domain object. This is used when the the BD/SVI is extended to multiple sites using a L2 Outside.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#virtual_mac_address BridgeDomain#virtual_mac_address}
  */
  readonly virtualMacAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#vmac BridgeDomain#vmac}
  */
  readonly vmac?: string;
  /**
  * relation_fv_rs_bd_to_netflow_monitor_pol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#relation_fv_rs_bd_to_netflow_monitor_pol BridgeDomain#relation_fv_rs_bd_to_netflow_monitor_pol}
  */
  readonly relationFvRsBdToNetflowMonitorPol?: BridgeDomainRelationFvRsBdToNetflowMonitorPol[] | cdktf.IResolvable;
}
export interface BridgeDomainAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#key BridgeDomain#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#value BridgeDomain#value}
  */
  readonly value?: string;
}

export function bridgeDomainAnnotationsToTerraform(struct?: BridgeDomainAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function bridgeDomainAnnotationsToHclTerraform(struct?: BridgeDomainAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BridgeDomainAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BridgeDomainAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BridgeDomainAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class BridgeDomainAnnotationsList extends cdktf.ComplexList {
  public internalValue? : BridgeDomainAnnotations[] | cdktf.IResolvable

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
  public get(index: number): BridgeDomainAnnotationsOutputReference {
    return new BridgeDomainAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BridgeDomainLegacyModeAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#key BridgeDomain#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#value BridgeDomain#value}
  */
  readonly value?: string;
}

export function bridgeDomainLegacyModeAnnotationsToTerraform(struct?: BridgeDomainLegacyModeAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function bridgeDomainLegacyModeAnnotationsToHclTerraform(struct?: BridgeDomainLegacyModeAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BridgeDomainLegacyModeAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BridgeDomainLegacyModeAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BridgeDomainLegacyModeAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class BridgeDomainLegacyModeAnnotationsList extends cdktf.ComplexList {
  public internalValue? : BridgeDomainLegacyModeAnnotations[] | cdktf.IResolvable

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
  public get(index: number): BridgeDomainLegacyModeAnnotationsOutputReference {
    return new BridgeDomainLegacyModeAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BridgeDomainLegacyModeTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#key BridgeDomain#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#value BridgeDomain#value}
  */
  readonly value?: string;
}

export function bridgeDomainLegacyModeTagsToTerraform(struct?: BridgeDomainLegacyModeTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function bridgeDomainLegacyModeTagsToHclTerraform(struct?: BridgeDomainLegacyModeTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BridgeDomainLegacyModeTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BridgeDomainLegacyModeTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BridgeDomainLegacyModeTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class BridgeDomainLegacyModeTagsList extends cdktf.ComplexList {
  public internalValue? : BridgeDomainLegacyModeTags[] | cdktf.IResolvable

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
  public get(index: number): BridgeDomainLegacyModeTagsOutputReference {
    return new BridgeDomainLegacyModeTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BridgeDomainLegacyMode {
  /**
  * The annotation of the Legacy Mode object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#annotation BridgeDomain#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#annotations BridgeDomain#annotations}
  */
  readonly annotations?: BridgeDomainLegacyModeAnnotations[] | cdktf.IResolvable;
  /**
  * The description of the Legacy Mode object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#description BridgeDomain#description}
  */
  readonly description?: string;
  /**
  * The VLAN or VXLAN encapsulation of the Legacy Mode object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#encapsulation BridgeDomain#encapsulation}
  */
  readonly encapsulation?: string;
  /**
  * The name of the Legacy Mode object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#name BridgeDomain#name}
  */
  readonly name?: string;
  /**
  * The name alias of the Legacy Mode object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#name_alias BridgeDomain#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * The key for enabling clients to own their data for entity correlation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#owner_key BridgeDomain#owner_key}
  */
  readonly ownerKey?: string;
  /**
  * A tag for enabling clients to add their own data. For example, to indicate who created this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#owner_tag BridgeDomain#owner_tag}
  */
  readonly ownerTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#tags BridgeDomain#tags}
  */
  readonly tags?: BridgeDomainLegacyModeTags[] | cdktf.IResolvable;
}

export function bridgeDomainLegacyModeToTerraform(struct?: BridgeDomainLegacyMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(bridgeDomainLegacyModeAnnotationsToTerraform, false)(struct!.annotations),
    description: cdktf.stringToTerraform(struct!.description),
    encapsulation: cdktf.stringToTerraform(struct!.encapsulation),
    name: cdktf.stringToTerraform(struct!.name),
    name_alias: cdktf.stringToTerraform(struct!.nameAlias),
    owner_key: cdktf.stringToTerraform(struct!.ownerKey),
    owner_tag: cdktf.stringToTerraform(struct!.ownerTag),
    tags: cdktf.listMapper(bridgeDomainLegacyModeTagsToTerraform, false)(struct!.tags),
  }
}


export function bridgeDomainLegacyModeToHclTerraform(struct?: BridgeDomainLegacyMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation: {
      value: cdktf.stringToHclTerraform(struct!.annotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotations: {
      value: cdktf.listMapperHcl(bridgeDomainLegacyModeAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "BridgeDomainLegacyModeAnnotationsList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encapsulation: {
      value: cdktf.stringToHclTerraform(struct!.encapsulation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_alias: {
      value: cdktf.stringToHclTerraform(struct!.nameAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner_key: {
      value: cdktf.stringToHclTerraform(struct!.ownerKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner_tag: {
      value: cdktf.stringToHclTerraform(struct!.ownerTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(bridgeDomainLegacyModeTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "BridgeDomainLegacyModeTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BridgeDomainLegacyModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BridgeDomainLegacyMode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._encapsulation !== undefined) {
      hasAnyValues = true;
      internalValueResult.encapsulation = this._encapsulation;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nameAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameAlias = this._nameAlias;
    }
    if (this._ownerKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerKey = this._ownerKey;
    }
    if (this._ownerTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerTag = this._ownerTag;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BridgeDomainLegacyMode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._description = undefined;
      this._encapsulation = undefined;
      this._name = undefined;
      this._nameAlias = undefined;
      this._ownerKey = undefined;
      this._ownerTag = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._description = value.description;
      this._encapsulation = value.encapsulation;
      this._name = value.name;
      this._nameAlias = value.nameAlias;
      this._ownerKey = value.ownerKey;
      this._ownerTag = value.ownerTag;
      this._tags.internalValue = value.tags;
    }
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations = new BridgeDomainLegacyModeAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: BridgeDomainLegacyModeAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // encapsulation - computed: true, optional: true, required: false
  private _encapsulation?: string; 
  public get encapsulation() {
    return this.getStringAttribute('encapsulation');
  }
  public set encapsulation(value: string) {
    this._encapsulation = value;
  }
  public resetEncapsulation() {
    this._encapsulation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulationInput() {
    return this._encapsulation;
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

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // owner_key - computed: true, optional: true, required: false
  private _ownerKey?: string; 
  public get ownerKey() {
    return this.getStringAttribute('owner_key');
  }
  public set ownerKey(value: string) {
    this._ownerKey = value;
  }
  public resetOwnerKey() {
    this._ownerKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerKeyInput() {
    return this._ownerKey;
  }

  // owner_tag - computed: true, optional: true, required: false
  private _ownerTag?: string; 
  public get ownerTag() {
    return this.getStringAttribute('owner_tag');
  }
  public set ownerTag(value: string) {
    this._ownerTag = value;
  }
  public resetOwnerTag() {
    this._ownerTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerTagInput() {
    return this._ownerTag;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new BridgeDomainLegacyModeTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: BridgeDomainLegacyModeTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface BridgeDomainRelationToDhcpRelayPolicyAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#key BridgeDomain#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#value BridgeDomain#value}
  */
  readonly value?: string;
}

export function bridgeDomainRelationToDhcpRelayPolicyAnnotationsToTerraform(struct?: BridgeDomainRelationToDhcpRelayPolicyAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function bridgeDomainRelationToDhcpRelayPolicyAnnotationsToHclTerraform(struct?: BridgeDomainRelationToDhcpRelayPolicyAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BridgeDomainRelationToDhcpRelayPolicyAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BridgeDomainRelationToDhcpRelayPolicyAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BridgeDomainRelationToDhcpRelayPolicyAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class BridgeDomainRelationToDhcpRelayPolicyAnnotationsList extends cdktf.ComplexList {
  public internalValue? : BridgeDomainRelationToDhcpRelayPolicyAnnotations[] | cdktf.IResolvable

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
  public get(index: number): BridgeDomainRelationToDhcpRelayPolicyAnnotationsOutputReference {
    return new BridgeDomainRelationToDhcpRelayPolicyAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BridgeDomainRelationToDhcpRelayPolicyTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#key BridgeDomain#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#value BridgeDomain#value}
  */
  readonly value?: string;
}

export function bridgeDomainRelationToDhcpRelayPolicyTagsToTerraform(struct?: BridgeDomainRelationToDhcpRelayPolicyTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function bridgeDomainRelationToDhcpRelayPolicyTagsToHclTerraform(struct?: BridgeDomainRelationToDhcpRelayPolicyTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BridgeDomainRelationToDhcpRelayPolicyTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BridgeDomainRelationToDhcpRelayPolicyTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BridgeDomainRelationToDhcpRelayPolicyTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class BridgeDomainRelationToDhcpRelayPolicyTagsList extends cdktf.ComplexList {
  public internalValue? : BridgeDomainRelationToDhcpRelayPolicyTags[] | cdktf.IResolvable

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
  public get(index: number): BridgeDomainRelationToDhcpRelayPolicyTagsOutputReference {
    return new BridgeDomainRelationToDhcpRelayPolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BridgeDomainRelationToDhcpRelayPolicy {
  /**
  * The annotation of the Relation From Bridge Domain To DHCP Relay Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#annotation BridgeDomain#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#annotations BridgeDomain#annotations}
  */
  readonly annotations?: BridgeDomainRelationToDhcpRelayPolicyAnnotations[] | cdktf.IResolvable;
  /**
  * The name of the DHCP Relay Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#dhcp_relay_policy_name BridgeDomain#dhcp_relay_policy_name}
  */
  readonly dhcpRelayPolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#tags BridgeDomain#tags}
  */
  readonly tags?: BridgeDomainRelationToDhcpRelayPolicyTags[] | cdktf.IResolvable;
}

export function bridgeDomainRelationToDhcpRelayPolicyToTerraform(struct?: BridgeDomainRelationToDhcpRelayPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(bridgeDomainRelationToDhcpRelayPolicyAnnotationsToTerraform, false)(struct!.annotations),
    dhcp_relay_policy_name: cdktf.stringToTerraform(struct!.dhcpRelayPolicyName),
    tags: cdktf.listMapper(bridgeDomainRelationToDhcpRelayPolicyTagsToTerraform, false)(struct!.tags),
  }
}


export function bridgeDomainRelationToDhcpRelayPolicyToHclTerraform(struct?: BridgeDomainRelationToDhcpRelayPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation: {
      value: cdktf.stringToHclTerraform(struct!.annotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotations: {
      value: cdktf.listMapperHcl(bridgeDomainRelationToDhcpRelayPolicyAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "BridgeDomainRelationToDhcpRelayPolicyAnnotationsList",
    },
    dhcp_relay_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.dhcpRelayPolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(bridgeDomainRelationToDhcpRelayPolicyTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "BridgeDomainRelationToDhcpRelayPolicyTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BridgeDomainRelationToDhcpRelayPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BridgeDomainRelationToDhcpRelayPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._dhcpRelayPolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpRelayPolicyName = this._dhcpRelayPolicyName;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BridgeDomainRelationToDhcpRelayPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._dhcpRelayPolicyName = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._dhcpRelayPolicyName = value.dhcpRelayPolicyName;
      this._tags.internalValue = value.tags;
    }
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations = new BridgeDomainRelationToDhcpRelayPolicyAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: BridgeDomainRelationToDhcpRelayPolicyAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // dhcp_relay_policy_name - computed: true, optional: true, required: false
  private _dhcpRelayPolicyName?: string; 
  public get dhcpRelayPolicyName() {
    return this.getStringAttribute('dhcp_relay_policy_name');
  }
  public set dhcpRelayPolicyName(value: string) {
    this._dhcpRelayPolicyName = value;
  }
  public resetDhcpRelayPolicyName() {
    this._dhcpRelayPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRelayPolicyNameInput() {
    return this._dhcpRelayPolicyName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new BridgeDomainRelationToDhcpRelayPolicyTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: BridgeDomainRelationToDhcpRelayPolicyTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface BridgeDomainRelationToEndPointRetentionPolicyAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#key BridgeDomain#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#value BridgeDomain#value}
  */
  readonly value?: string;
}

export function bridgeDomainRelationToEndPointRetentionPolicyAnnotationsToTerraform(struct?: BridgeDomainRelationToEndPointRetentionPolicyAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function bridgeDomainRelationToEndPointRetentionPolicyAnnotationsToHclTerraform(struct?: BridgeDomainRelationToEndPointRetentionPolicyAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BridgeDomainRelationToEndPointRetentionPolicyAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BridgeDomainRelationToEndPointRetentionPolicyAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BridgeDomainRelationToEndPointRetentionPolicyAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class BridgeDomainRelationToEndPointRetentionPolicyAnnotationsList extends cdktf.ComplexList {
  public internalValue? : BridgeDomainRelationToEndPointRetentionPolicyAnnotations[] | cdktf.IResolvable

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
  public get(index: number): BridgeDomainRelationToEndPointRetentionPolicyAnnotationsOutputReference {
    return new BridgeDomainRelationToEndPointRetentionPolicyAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BridgeDomainRelationToEndPointRetentionPolicyTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#key BridgeDomain#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#value BridgeDomain#value}
  */
  readonly value?: string;
}

export function bridgeDomainRelationToEndPointRetentionPolicyTagsToTerraform(struct?: BridgeDomainRelationToEndPointRetentionPolicyTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function bridgeDomainRelationToEndPointRetentionPolicyTagsToHclTerraform(struct?: BridgeDomainRelationToEndPointRetentionPolicyTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BridgeDomainRelationToEndPointRetentionPolicyTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BridgeDomainRelationToEndPointRetentionPolicyTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BridgeDomainRelationToEndPointRetentionPolicyTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class BridgeDomainRelationToEndPointRetentionPolicyTagsList extends cdktf.ComplexList {
  public internalValue? : BridgeDomainRelationToEndPointRetentionPolicyTags[] | cdktf.IResolvable

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
  public get(index: number): BridgeDomainRelationToEndPointRetentionPolicyTagsOutputReference {
    return new BridgeDomainRelationToEndPointRetentionPolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BridgeDomainRelationToEndPointRetentionPolicy {
  /**
  * The annotation of the Relation From Bridge Domain To End Point Retention Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#annotation BridgeDomain#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#annotations BridgeDomain#annotations}
  */
  readonly annotations?: BridgeDomainRelationToEndPointRetentionPolicyAnnotations[] | cdktf.IResolvable;
  /**
  * The name of the Endpoint Retention Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#end_point_retention_policy_name BridgeDomain#end_point_retention_policy_name}
  */
  readonly endPointRetentionPolicyName?: string;
  /**
  * The action to take for resolving the Endpoint Retention Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#resolve_action BridgeDomain#resolve_action}
  */
  readonly resolveAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#tags BridgeDomain#tags}
  */
  readonly tags?: BridgeDomainRelationToEndPointRetentionPolicyTags[] | cdktf.IResolvable;
}

export function bridgeDomainRelationToEndPointRetentionPolicyToTerraform(struct?: BridgeDomainRelationToEndPointRetentionPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(bridgeDomainRelationToEndPointRetentionPolicyAnnotationsToTerraform, false)(struct!.annotations),
    end_point_retention_policy_name: cdktf.stringToTerraform(struct!.endPointRetentionPolicyName),
    resolve_action: cdktf.stringToTerraform(struct!.resolveAction),
    tags: cdktf.listMapper(bridgeDomainRelationToEndPointRetentionPolicyTagsToTerraform, false)(struct!.tags),
  }
}


export function bridgeDomainRelationToEndPointRetentionPolicyToHclTerraform(struct?: BridgeDomainRelationToEndPointRetentionPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation: {
      value: cdktf.stringToHclTerraform(struct!.annotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotations: {
      value: cdktf.listMapperHcl(bridgeDomainRelationToEndPointRetentionPolicyAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "BridgeDomainRelationToEndPointRetentionPolicyAnnotationsList",
    },
    end_point_retention_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.endPointRetentionPolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resolve_action: {
      value: cdktf.stringToHclTerraform(struct!.resolveAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(bridgeDomainRelationToEndPointRetentionPolicyTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "BridgeDomainRelationToEndPointRetentionPolicyTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BridgeDomainRelationToEndPointRetentionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BridgeDomainRelationToEndPointRetentionPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._endPointRetentionPolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPointRetentionPolicyName = this._endPointRetentionPolicyName;
    }
    if (this._resolveAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolveAction = this._resolveAction;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BridgeDomainRelationToEndPointRetentionPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._endPointRetentionPolicyName = undefined;
      this._resolveAction = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._endPointRetentionPolicyName = value.endPointRetentionPolicyName;
      this._resolveAction = value.resolveAction;
      this._tags.internalValue = value.tags;
    }
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations = new BridgeDomainRelationToEndPointRetentionPolicyAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: BridgeDomainRelationToEndPointRetentionPolicyAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // end_point_retention_policy_name - computed: true, optional: true, required: false
  private _endPointRetentionPolicyName?: string; 
  public get endPointRetentionPolicyName() {
    return this.getStringAttribute('end_point_retention_policy_name');
  }
  public set endPointRetentionPolicyName(value: string) {
    this._endPointRetentionPolicyName = value;
  }
  public resetEndPointRetentionPolicyName() {
    this._endPointRetentionPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPointRetentionPolicyNameInput() {
    return this._endPointRetentionPolicyName;
  }

  // resolve_action - computed: true, optional: true, required: false
  private _resolveAction?: string; 
  public get resolveAction() {
    return this.getStringAttribute('resolve_action');
  }
  public set resolveAction(value: string) {
    this._resolveAction = value;
  }
  public resetResolveAction() {
    this._resolveAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveActionInput() {
    return this._resolveAction;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new BridgeDomainRelationToEndPointRetentionPolicyTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: BridgeDomainRelationToEndPointRetentionPolicyTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface BridgeDomainRelationToFirstHopSecurityPolicyAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#key BridgeDomain#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#value BridgeDomain#value}
  */
  readonly value?: string;
}

export function bridgeDomainRelationToFirstHopSecurityPolicyAnnotationsToTerraform(struct?: BridgeDomainRelationToFirstHopSecurityPolicyAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function bridgeDomainRelationToFirstHopSecurityPolicyAnnotationsToHclTerraform(struct?: BridgeDomainRelationToFirstHopSecurityPolicyAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BridgeDomainRelationToFirstHopSecurityPolicyAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BridgeDomainRelationToFirstHopSecurityPolicyAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BridgeDomainRelationToFirstHopSecurityPolicyAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class BridgeDomainRelationToFirstHopSecurityPolicyAnnotationsList extends cdktf.ComplexList {
  public internalValue? : BridgeDomainRelationToFirstHopSecurityPolicyAnnotations[] | cdktf.IResolvable

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
  public get(index: number): BridgeDomainRelationToFirstHopSecurityPolicyAnnotationsOutputReference {
    return new BridgeDomainRelationToFirstHopSecurityPolicyAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BridgeDomainRelationToFirstHopSecurityPolicyTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#key BridgeDomain#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#value BridgeDomain#value}
  */
  readonly value?: string;
}

export function bridgeDomainRelationToFirstHopSecurityPolicyTagsToTerraform(struct?: BridgeDomainRelationToFirstHopSecurityPolicyTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function bridgeDomainRelationToFirstHopSecurityPolicyTagsToHclTerraform(struct?: BridgeDomainRelationToFirstHopSecurityPolicyTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BridgeDomainRelationToFirstHopSecurityPolicyTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BridgeDomainRelationToFirstHopSecurityPolicyTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BridgeDomainRelationToFirstHopSecurityPolicyTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class BridgeDomainRelationToFirstHopSecurityPolicyTagsList extends cdktf.ComplexList {
  public internalValue? : BridgeDomainRelationToFirstHopSecurityPolicyTags[] | cdktf.IResolvable

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
  public get(index: number): BridgeDomainRelationToFirstHopSecurityPolicyTagsOutputReference {
    return new BridgeDomainRelationToFirstHopSecurityPolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BridgeDomainRelationToFirstHopSecurityPolicy {
  /**
  * The annotation of the Relation From Bridge Domain To First Hop Security Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#annotation BridgeDomain#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#annotations BridgeDomain#annotations}
  */
  readonly annotations?: BridgeDomainRelationToFirstHopSecurityPolicyAnnotations[] | cdktf.IResolvable;
  /**
  * The name of the First Hop Security Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#first_hop_security_policy_name BridgeDomain#first_hop_security_policy_name}
  */
  readonly firstHopSecurityPolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#tags BridgeDomain#tags}
  */
  readonly tags?: BridgeDomainRelationToFirstHopSecurityPolicyTags[] | cdktf.IResolvable;
}

export function bridgeDomainRelationToFirstHopSecurityPolicyToTerraform(struct?: BridgeDomainRelationToFirstHopSecurityPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(bridgeDomainRelationToFirstHopSecurityPolicyAnnotationsToTerraform, false)(struct!.annotations),
    first_hop_security_policy_name: cdktf.stringToTerraform(struct!.firstHopSecurityPolicyName),
    tags: cdktf.listMapper(bridgeDomainRelationToFirstHopSecurityPolicyTagsToTerraform, false)(struct!.tags),
  }
}


export function bridgeDomainRelationToFirstHopSecurityPolicyToHclTerraform(struct?: BridgeDomainRelationToFirstHopSecurityPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation: {
      value: cdktf.stringToHclTerraform(struct!.annotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotations: {
      value: cdktf.listMapperHcl(bridgeDomainRelationToFirstHopSecurityPolicyAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "BridgeDomainRelationToFirstHopSecurityPolicyAnnotationsList",
    },
    first_hop_security_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.firstHopSecurityPolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(bridgeDomainRelationToFirstHopSecurityPolicyTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "BridgeDomainRelationToFirstHopSecurityPolicyTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BridgeDomainRelationToFirstHopSecurityPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BridgeDomainRelationToFirstHopSecurityPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._firstHopSecurityPolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstHopSecurityPolicyName = this._firstHopSecurityPolicyName;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BridgeDomainRelationToFirstHopSecurityPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._firstHopSecurityPolicyName = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._firstHopSecurityPolicyName = value.firstHopSecurityPolicyName;
      this._tags.internalValue = value.tags;
    }
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations = new BridgeDomainRelationToFirstHopSecurityPolicyAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: BridgeDomainRelationToFirstHopSecurityPolicyAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // first_hop_security_policy_name - computed: true, optional: true, required: false
  private _firstHopSecurityPolicyName?: string; 
  public get firstHopSecurityPolicyName() {
    return this.getStringAttribute('first_hop_security_policy_name');
  }
  public set firstHopSecurityPolicyName(value: string) {
    this._firstHopSecurityPolicyName = value;
  }
  public resetFirstHopSecurityPolicyName() {
    this._firstHopSecurityPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstHopSecurityPolicyNameInput() {
    return this._firstHopSecurityPolicyName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new BridgeDomainRelationToFirstHopSecurityPolicyTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: BridgeDomainRelationToFirstHopSecurityPolicyTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface BridgeDomainRelationToIgmpSnoopingPolicyAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#key BridgeDomain#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#value BridgeDomain#value}
  */
  readonly value?: string;
}

export function bridgeDomainRelationToIgmpSnoopingPolicyAnnotationsToTerraform(struct?: BridgeDomainRelationToIgmpSnoopingPolicyAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function bridgeDomainRelationToIgmpSnoopingPolicyAnnotationsToHclTerraform(struct?: BridgeDomainRelationToIgmpSnoopingPolicyAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BridgeDomainRelationToIgmpSnoopingPolicyAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BridgeDomainRelationToIgmpSnoopingPolicyAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BridgeDomainRelationToIgmpSnoopingPolicyAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class BridgeDomainRelationToIgmpSnoopingPolicyAnnotationsList extends cdktf.ComplexList {
  public internalValue? : BridgeDomainRelationToIgmpSnoopingPolicyAnnotations[] | cdktf.IResolvable

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
  public get(index: number): BridgeDomainRelationToIgmpSnoopingPolicyAnnotationsOutputReference {
    return new BridgeDomainRelationToIgmpSnoopingPolicyAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BridgeDomainRelationToIgmpSnoopingPolicyTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#key BridgeDomain#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#value BridgeDomain#value}
  */
  readonly value?: string;
}

export function bridgeDomainRelationToIgmpSnoopingPolicyTagsToTerraform(struct?: BridgeDomainRelationToIgmpSnoopingPolicyTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function bridgeDomainRelationToIgmpSnoopingPolicyTagsToHclTerraform(struct?: BridgeDomainRelationToIgmpSnoopingPolicyTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BridgeDomainRelationToIgmpSnoopingPolicyTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BridgeDomainRelationToIgmpSnoopingPolicyTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BridgeDomainRelationToIgmpSnoopingPolicyTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class BridgeDomainRelationToIgmpSnoopingPolicyTagsList extends cdktf.ComplexList {
  public internalValue? : BridgeDomainRelationToIgmpSnoopingPolicyTags[] | cdktf.IResolvable

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
  public get(index: number): BridgeDomainRelationToIgmpSnoopingPolicyTagsOutputReference {
    return new BridgeDomainRelationToIgmpSnoopingPolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BridgeDomainRelationToIgmpSnoopingPolicy {
  /**
  * The annotation of the Relation To IGMP Snooping Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#annotation BridgeDomain#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#annotations BridgeDomain#annotations}
  */
  readonly annotations?: BridgeDomainRelationToIgmpSnoopingPolicyAnnotations[] | cdktf.IResolvable;
  /**
  * The name of the IGMP Snooping Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#igmp_snooping_policy_name BridgeDomain#igmp_snooping_policy_name}
  */
  readonly igmpSnoopingPolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#tags BridgeDomain#tags}
  */
  readonly tags?: BridgeDomainRelationToIgmpSnoopingPolicyTags[] | cdktf.IResolvable;
}

export function bridgeDomainRelationToIgmpSnoopingPolicyToTerraform(struct?: BridgeDomainRelationToIgmpSnoopingPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(bridgeDomainRelationToIgmpSnoopingPolicyAnnotationsToTerraform, false)(struct!.annotations),
    igmp_snooping_policy_name: cdktf.stringToTerraform(struct!.igmpSnoopingPolicyName),
    tags: cdktf.listMapper(bridgeDomainRelationToIgmpSnoopingPolicyTagsToTerraform, false)(struct!.tags),
  }
}


export function bridgeDomainRelationToIgmpSnoopingPolicyToHclTerraform(struct?: BridgeDomainRelationToIgmpSnoopingPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation: {
      value: cdktf.stringToHclTerraform(struct!.annotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotations: {
      value: cdktf.listMapperHcl(bridgeDomainRelationToIgmpSnoopingPolicyAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "BridgeDomainRelationToIgmpSnoopingPolicyAnnotationsList",
    },
    igmp_snooping_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.igmpSnoopingPolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(bridgeDomainRelationToIgmpSnoopingPolicyTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "BridgeDomainRelationToIgmpSnoopingPolicyTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BridgeDomainRelationToIgmpSnoopingPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BridgeDomainRelationToIgmpSnoopingPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._igmpSnoopingPolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.igmpSnoopingPolicyName = this._igmpSnoopingPolicyName;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BridgeDomainRelationToIgmpSnoopingPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._igmpSnoopingPolicyName = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._igmpSnoopingPolicyName = value.igmpSnoopingPolicyName;
      this._tags.internalValue = value.tags;
    }
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations = new BridgeDomainRelationToIgmpSnoopingPolicyAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: BridgeDomainRelationToIgmpSnoopingPolicyAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // igmp_snooping_policy_name - computed: true, optional: true, required: false
  private _igmpSnoopingPolicyName?: string; 
  public get igmpSnoopingPolicyName() {
    return this.getStringAttribute('igmp_snooping_policy_name');
  }
  public set igmpSnoopingPolicyName(value: string) {
    this._igmpSnoopingPolicyName = value;
  }
  public resetIgmpSnoopingPolicyName() {
    this._igmpSnoopingPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpSnoopingPolicyNameInput() {
    return this._igmpSnoopingPolicyName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new BridgeDomainRelationToIgmpSnoopingPolicyTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: BridgeDomainRelationToIgmpSnoopingPolicyTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface BridgeDomainRelationToL3OutsidesAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#key BridgeDomain#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#value BridgeDomain#value}
  */
  readonly value?: string;
}

export function bridgeDomainRelationToL3OutsidesAnnotationsToTerraform(struct?: BridgeDomainRelationToL3OutsidesAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function bridgeDomainRelationToL3OutsidesAnnotationsToHclTerraform(struct?: BridgeDomainRelationToL3OutsidesAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BridgeDomainRelationToL3OutsidesAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BridgeDomainRelationToL3OutsidesAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BridgeDomainRelationToL3OutsidesAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class BridgeDomainRelationToL3OutsidesAnnotationsList extends cdktf.ComplexList {
  public internalValue? : BridgeDomainRelationToL3OutsidesAnnotations[] | cdktf.IResolvable

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
  public get(index: number): BridgeDomainRelationToL3OutsidesAnnotationsOutputReference {
    return new BridgeDomainRelationToL3OutsidesAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BridgeDomainRelationToL3OutsidesTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#key BridgeDomain#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#value BridgeDomain#value}
  */
  readonly value?: string;
}

export function bridgeDomainRelationToL3OutsidesTagsToTerraform(struct?: BridgeDomainRelationToL3OutsidesTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function bridgeDomainRelationToL3OutsidesTagsToHclTerraform(struct?: BridgeDomainRelationToL3OutsidesTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BridgeDomainRelationToL3OutsidesTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BridgeDomainRelationToL3OutsidesTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BridgeDomainRelationToL3OutsidesTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class BridgeDomainRelationToL3OutsidesTagsList extends cdktf.ComplexList {
  public internalValue? : BridgeDomainRelationToL3OutsidesTags[] | cdktf.IResolvable

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
  public get(index: number): BridgeDomainRelationToL3OutsidesTagsOutputReference {
    return new BridgeDomainRelationToL3OutsidesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BridgeDomainRelationToL3Outsides {
  /**
  * The annotation of the Relation From Bridge Domain To L3 Outside object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#annotation BridgeDomain#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#annotations BridgeDomain#annotations}
  */
  readonly annotations?: BridgeDomainRelationToL3OutsidesAnnotations[] | cdktf.IResolvable;
  /**
  * The name of the L3 Outside object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#l3_outside_name BridgeDomain#l3_outside_name}
  */
  readonly l3OutsideName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#tags BridgeDomain#tags}
  */
  readonly tags?: BridgeDomainRelationToL3OutsidesTags[] | cdktf.IResolvable;
}

export function bridgeDomainRelationToL3OutsidesToTerraform(struct?: BridgeDomainRelationToL3Outsides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(bridgeDomainRelationToL3OutsidesAnnotationsToTerraform, false)(struct!.annotations),
    l3_outside_name: cdktf.stringToTerraform(struct!.l3OutsideName),
    tags: cdktf.listMapper(bridgeDomainRelationToL3OutsidesTagsToTerraform, false)(struct!.tags),
  }
}


export function bridgeDomainRelationToL3OutsidesToHclTerraform(struct?: BridgeDomainRelationToL3Outsides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation: {
      value: cdktf.stringToHclTerraform(struct!.annotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotations: {
      value: cdktf.listMapperHcl(bridgeDomainRelationToL3OutsidesAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "BridgeDomainRelationToL3OutsidesAnnotationsList",
    },
    l3_outside_name: {
      value: cdktf.stringToHclTerraform(struct!.l3OutsideName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(bridgeDomainRelationToL3OutsidesTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "BridgeDomainRelationToL3OutsidesTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BridgeDomainRelationToL3OutsidesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BridgeDomainRelationToL3Outsides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._l3OutsideName !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3OutsideName = this._l3OutsideName;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BridgeDomainRelationToL3Outsides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._l3OutsideName = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._l3OutsideName = value.l3OutsideName;
      this._tags.internalValue = value.tags;
    }
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations = new BridgeDomainRelationToL3OutsidesAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: BridgeDomainRelationToL3OutsidesAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // l3_outside_name - computed: true, optional: true, required: false
  private _l3OutsideName?: string; 
  public get l3OutsideName() {
    return this.getStringAttribute('l3_outside_name');
  }
  public set l3OutsideName(value: string) {
    this._l3OutsideName = value;
  }
  public resetL3OutsideName() {
    this._l3OutsideName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3OutsideNameInput() {
    return this._l3OutsideName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new BridgeDomainRelationToL3OutsidesTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: BridgeDomainRelationToL3OutsidesTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class BridgeDomainRelationToL3OutsidesList extends cdktf.ComplexList {
  public internalValue? : BridgeDomainRelationToL3Outsides[] | cdktf.IResolvable

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
  public get(index: number): BridgeDomainRelationToL3OutsidesOutputReference {
    return new BridgeDomainRelationToL3OutsidesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BridgeDomainRelationToMldSnoopingPolicyAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#key BridgeDomain#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#value BridgeDomain#value}
  */
  readonly value?: string;
}

export function bridgeDomainRelationToMldSnoopingPolicyAnnotationsToTerraform(struct?: BridgeDomainRelationToMldSnoopingPolicyAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function bridgeDomainRelationToMldSnoopingPolicyAnnotationsToHclTerraform(struct?: BridgeDomainRelationToMldSnoopingPolicyAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BridgeDomainRelationToMldSnoopingPolicyAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BridgeDomainRelationToMldSnoopingPolicyAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BridgeDomainRelationToMldSnoopingPolicyAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class BridgeDomainRelationToMldSnoopingPolicyAnnotationsList extends cdktf.ComplexList {
  public internalValue? : BridgeDomainRelationToMldSnoopingPolicyAnnotations[] | cdktf.IResolvable

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
  public get(index: number): BridgeDomainRelationToMldSnoopingPolicyAnnotationsOutputReference {
    return new BridgeDomainRelationToMldSnoopingPolicyAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BridgeDomainRelationToMldSnoopingPolicyTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#key BridgeDomain#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#value BridgeDomain#value}
  */
  readonly value?: string;
}

export function bridgeDomainRelationToMldSnoopingPolicyTagsToTerraform(struct?: BridgeDomainRelationToMldSnoopingPolicyTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function bridgeDomainRelationToMldSnoopingPolicyTagsToHclTerraform(struct?: BridgeDomainRelationToMldSnoopingPolicyTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BridgeDomainRelationToMldSnoopingPolicyTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BridgeDomainRelationToMldSnoopingPolicyTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BridgeDomainRelationToMldSnoopingPolicyTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class BridgeDomainRelationToMldSnoopingPolicyTagsList extends cdktf.ComplexList {
  public internalValue? : BridgeDomainRelationToMldSnoopingPolicyTags[] | cdktf.IResolvable

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
  public get(index: number): BridgeDomainRelationToMldSnoopingPolicyTagsOutputReference {
    return new BridgeDomainRelationToMldSnoopingPolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BridgeDomainRelationToMldSnoopingPolicy {
  /**
  * The annotation of the Relation To MLD Snooping Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#annotation BridgeDomain#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#annotations BridgeDomain#annotations}
  */
  readonly annotations?: BridgeDomainRelationToMldSnoopingPolicyAnnotations[] | cdktf.IResolvable;
  /**
  * The name of the MLD Snooping Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#mld_snooping_policy_name BridgeDomain#mld_snooping_policy_name}
  */
  readonly mldSnoopingPolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#tags BridgeDomain#tags}
  */
  readonly tags?: BridgeDomainRelationToMldSnoopingPolicyTags[] | cdktf.IResolvable;
}

export function bridgeDomainRelationToMldSnoopingPolicyToTerraform(struct?: BridgeDomainRelationToMldSnoopingPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(bridgeDomainRelationToMldSnoopingPolicyAnnotationsToTerraform, false)(struct!.annotations),
    mld_snooping_policy_name: cdktf.stringToTerraform(struct!.mldSnoopingPolicyName),
    tags: cdktf.listMapper(bridgeDomainRelationToMldSnoopingPolicyTagsToTerraform, false)(struct!.tags),
  }
}


export function bridgeDomainRelationToMldSnoopingPolicyToHclTerraform(struct?: BridgeDomainRelationToMldSnoopingPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation: {
      value: cdktf.stringToHclTerraform(struct!.annotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotations: {
      value: cdktf.listMapperHcl(bridgeDomainRelationToMldSnoopingPolicyAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "BridgeDomainRelationToMldSnoopingPolicyAnnotationsList",
    },
    mld_snooping_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.mldSnoopingPolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(bridgeDomainRelationToMldSnoopingPolicyTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "BridgeDomainRelationToMldSnoopingPolicyTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BridgeDomainRelationToMldSnoopingPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BridgeDomainRelationToMldSnoopingPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._mldSnoopingPolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.mldSnoopingPolicyName = this._mldSnoopingPolicyName;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BridgeDomainRelationToMldSnoopingPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._mldSnoopingPolicyName = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._mldSnoopingPolicyName = value.mldSnoopingPolicyName;
      this._tags.internalValue = value.tags;
    }
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations = new BridgeDomainRelationToMldSnoopingPolicyAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: BridgeDomainRelationToMldSnoopingPolicyAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // mld_snooping_policy_name - computed: true, optional: true, required: false
  private _mldSnoopingPolicyName?: string; 
  public get mldSnoopingPolicyName() {
    return this.getStringAttribute('mld_snooping_policy_name');
  }
  public set mldSnoopingPolicyName(value: string) {
    this._mldSnoopingPolicyName = value;
  }
  public resetMldSnoopingPolicyName() {
    this._mldSnoopingPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mldSnoopingPolicyNameInput() {
    return this._mldSnoopingPolicyName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new BridgeDomainRelationToMldSnoopingPolicyTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: BridgeDomainRelationToMldSnoopingPolicyTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface BridgeDomainRelationToMonitoringPolicyAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#key BridgeDomain#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#value BridgeDomain#value}
  */
  readonly value?: string;
}

export function bridgeDomainRelationToMonitoringPolicyAnnotationsToTerraform(struct?: BridgeDomainRelationToMonitoringPolicyAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function bridgeDomainRelationToMonitoringPolicyAnnotationsToHclTerraform(struct?: BridgeDomainRelationToMonitoringPolicyAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BridgeDomainRelationToMonitoringPolicyAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BridgeDomainRelationToMonitoringPolicyAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BridgeDomainRelationToMonitoringPolicyAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class BridgeDomainRelationToMonitoringPolicyAnnotationsList extends cdktf.ComplexList {
  public internalValue? : BridgeDomainRelationToMonitoringPolicyAnnotations[] | cdktf.IResolvable

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
  public get(index: number): BridgeDomainRelationToMonitoringPolicyAnnotationsOutputReference {
    return new BridgeDomainRelationToMonitoringPolicyAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BridgeDomainRelationToMonitoringPolicyTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#key BridgeDomain#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#value BridgeDomain#value}
  */
  readonly value?: string;
}

export function bridgeDomainRelationToMonitoringPolicyTagsToTerraform(struct?: BridgeDomainRelationToMonitoringPolicyTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function bridgeDomainRelationToMonitoringPolicyTagsToHclTerraform(struct?: BridgeDomainRelationToMonitoringPolicyTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BridgeDomainRelationToMonitoringPolicyTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BridgeDomainRelationToMonitoringPolicyTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BridgeDomainRelationToMonitoringPolicyTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class BridgeDomainRelationToMonitoringPolicyTagsList extends cdktf.ComplexList {
  public internalValue? : BridgeDomainRelationToMonitoringPolicyTags[] | cdktf.IResolvable

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
  public get(index: number): BridgeDomainRelationToMonitoringPolicyTagsOutputReference {
    return new BridgeDomainRelationToMonitoringPolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BridgeDomainRelationToMonitoringPolicy {
  /**
  * The annotation of the Relation From Bridge Domain To Monitoring Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#annotation BridgeDomain#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#annotations BridgeDomain#annotations}
  */
  readonly annotations?: BridgeDomainRelationToMonitoringPolicyAnnotations[] | cdktf.IResolvable;
  /**
  * The name of the Monitoring Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#monitoring_policy_name BridgeDomain#monitoring_policy_name}
  */
  readonly monitoringPolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#tags BridgeDomain#tags}
  */
  readonly tags?: BridgeDomainRelationToMonitoringPolicyTags[] | cdktf.IResolvable;
}

export function bridgeDomainRelationToMonitoringPolicyToTerraform(struct?: BridgeDomainRelationToMonitoringPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(bridgeDomainRelationToMonitoringPolicyAnnotationsToTerraform, false)(struct!.annotations),
    monitoring_policy_name: cdktf.stringToTerraform(struct!.monitoringPolicyName),
    tags: cdktf.listMapper(bridgeDomainRelationToMonitoringPolicyTagsToTerraform, false)(struct!.tags),
  }
}


export function bridgeDomainRelationToMonitoringPolicyToHclTerraform(struct?: BridgeDomainRelationToMonitoringPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation: {
      value: cdktf.stringToHclTerraform(struct!.annotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotations: {
      value: cdktf.listMapperHcl(bridgeDomainRelationToMonitoringPolicyAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "BridgeDomainRelationToMonitoringPolicyAnnotationsList",
    },
    monitoring_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.monitoringPolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(bridgeDomainRelationToMonitoringPolicyTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "BridgeDomainRelationToMonitoringPolicyTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BridgeDomainRelationToMonitoringPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BridgeDomainRelationToMonitoringPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._monitoringPolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringPolicyName = this._monitoringPolicyName;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BridgeDomainRelationToMonitoringPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._monitoringPolicyName = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._monitoringPolicyName = value.monitoringPolicyName;
      this._tags.internalValue = value.tags;
    }
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations = new BridgeDomainRelationToMonitoringPolicyAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: BridgeDomainRelationToMonitoringPolicyAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // monitoring_policy_name - computed: true, optional: true, required: false
  private _monitoringPolicyName?: string; 
  public get monitoringPolicyName() {
    return this.getStringAttribute('monitoring_policy_name');
  }
  public set monitoringPolicyName(value: string) {
    this._monitoringPolicyName = value;
  }
  public resetMonitoringPolicyName() {
    this._monitoringPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringPolicyNameInput() {
    return this._monitoringPolicyName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new BridgeDomainRelationToMonitoringPolicyTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: BridgeDomainRelationToMonitoringPolicyTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface BridgeDomainRelationToNeighborDiscoveryInterfacePolicyAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#key BridgeDomain#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#value BridgeDomain#value}
  */
  readonly value?: string;
}

export function bridgeDomainRelationToNeighborDiscoveryInterfacePolicyAnnotationsToTerraform(struct?: BridgeDomainRelationToNeighborDiscoveryInterfacePolicyAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function bridgeDomainRelationToNeighborDiscoveryInterfacePolicyAnnotationsToHclTerraform(struct?: BridgeDomainRelationToNeighborDiscoveryInterfacePolicyAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BridgeDomainRelationToNeighborDiscoveryInterfacePolicyAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BridgeDomainRelationToNeighborDiscoveryInterfacePolicyAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BridgeDomainRelationToNeighborDiscoveryInterfacePolicyAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class BridgeDomainRelationToNeighborDiscoveryInterfacePolicyAnnotationsList extends cdktf.ComplexList {
  public internalValue? : BridgeDomainRelationToNeighborDiscoveryInterfacePolicyAnnotations[] | cdktf.IResolvable

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
  public get(index: number): BridgeDomainRelationToNeighborDiscoveryInterfacePolicyAnnotationsOutputReference {
    return new BridgeDomainRelationToNeighborDiscoveryInterfacePolicyAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BridgeDomainRelationToNeighborDiscoveryInterfacePolicyTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#key BridgeDomain#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#value BridgeDomain#value}
  */
  readonly value?: string;
}

export function bridgeDomainRelationToNeighborDiscoveryInterfacePolicyTagsToTerraform(struct?: BridgeDomainRelationToNeighborDiscoveryInterfacePolicyTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function bridgeDomainRelationToNeighborDiscoveryInterfacePolicyTagsToHclTerraform(struct?: BridgeDomainRelationToNeighborDiscoveryInterfacePolicyTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BridgeDomainRelationToNeighborDiscoveryInterfacePolicyTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BridgeDomainRelationToNeighborDiscoveryInterfacePolicyTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BridgeDomainRelationToNeighborDiscoveryInterfacePolicyTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class BridgeDomainRelationToNeighborDiscoveryInterfacePolicyTagsList extends cdktf.ComplexList {
  public internalValue? : BridgeDomainRelationToNeighborDiscoveryInterfacePolicyTags[] | cdktf.IResolvable

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
  public get(index: number): BridgeDomainRelationToNeighborDiscoveryInterfacePolicyTagsOutputReference {
    return new BridgeDomainRelationToNeighborDiscoveryInterfacePolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BridgeDomainRelationToNeighborDiscoveryInterfacePolicy {
  /**
  * The annotation of the Relation From Bridge Domain To Neighbor Discovery Interface Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#annotation BridgeDomain#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#annotations BridgeDomain#annotations}
  */
  readonly annotations?: BridgeDomainRelationToNeighborDiscoveryInterfacePolicyAnnotations[] | cdktf.IResolvable;
  /**
  * The name of the Neighbor Discovery Interface Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#neighbor_discovery_interface_policy_name BridgeDomain#neighbor_discovery_interface_policy_name}
  */
  readonly neighborDiscoveryInterfacePolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#tags BridgeDomain#tags}
  */
  readonly tags?: BridgeDomainRelationToNeighborDiscoveryInterfacePolicyTags[] | cdktf.IResolvable;
}

export function bridgeDomainRelationToNeighborDiscoveryInterfacePolicyToTerraform(struct?: BridgeDomainRelationToNeighborDiscoveryInterfacePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(bridgeDomainRelationToNeighborDiscoveryInterfacePolicyAnnotationsToTerraform, false)(struct!.annotations),
    neighbor_discovery_interface_policy_name: cdktf.stringToTerraform(struct!.neighborDiscoveryInterfacePolicyName),
    tags: cdktf.listMapper(bridgeDomainRelationToNeighborDiscoveryInterfacePolicyTagsToTerraform, false)(struct!.tags),
  }
}


export function bridgeDomainRelationToNeighborDiscoveryInterfacePolicyToHclTerraform(struct?: BridgeDomainRelationToNeighborDiscoveryInterfacePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation: {
      value: cdktf.stringToHclTerraform(struct!.annotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotations: {
      value: cdktf.listMapperHcl(bridgeDomainRelationToNeighborDiscoveryInterfacePolicyAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "BridgeDomainRelationToNeighborDiscoveryInterfacePolicyAnnotationsList",
    },
    neighbor_discovery_interface_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.neighborDiscoveryInterfacePolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(bridgeDomainRelationToNeighborDiscoveryInterfacePolicyTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "BridgeDomainRelationToNeighborDiscoveryInterfacePolicyTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BridgeDomainRelationToNeighborDiscoveryInterfacePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BridgeDomainRelationToNeighborDiscoveryInterfacePolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._neighborDiscoveryInterfacePolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborDiscoveryInterfacePolicyName = this._neighborDiscoveryInterfacePolicyName;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BridgeDomainRelationToNeighborDiscoveryInterfacePolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._neighborDiscoveryInterfacePolicyName = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._neighborDiscoveryInterfacePolicyName = value.neighborDiscoveryInterfacePolicyName;
      this._tags.internalValue = value.tags;
    }
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations = new BridgeDomainRelationToNeighborDiscoveryInterfacePolicyAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: BridgeDomainRelationToNeighborDiscoveryInterfacePolicyAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // neighbor_discovery_interface_policy_name - computed: true, optional: true, required: false
  private _neighborDiscoveryInterfacePolicyName?: string; 
  public get neighborDiscoveryInterfacePolicyName() {
    return this.getStringAttribute('neighbor_discovery_interface_policy_name');
  }
  public set neighborDiscoveryInterfacePolicyName(value: string) {
    this._neighborDiscoveryInterfacePolicyName = value;
  }
  public resetNeighborDiscoveryInterfacePolicyName() {
    this._neighborDiscoveryInterfacePolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborDiscoveryInterfacePolicyNameInput() {
    return this._neighborDiscoveryInterfacePolicyName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new BridgeDomainRelationToNeighborDiscoveryInterfacePolicyTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: BridgeDomainRelationToNeighborDiscoveryInterfacePolicyTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface BridgeDomainRelationToNetflowMonitorPoliciesAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#key BridgeDomain#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#value BridgeDomain#value}
  */
  readonly value?: string;
}

export function bridgeDomainRelationToNetflowMonitorPoliciesAnnotationsToTerraform(struct?: BridgeDomainRelationToNetflowMonitorPoliciesAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function bridgeDomainRelationToNetflowMonitorPoliciesAnnotationsToHclTerraform(struct?: BridgeDomainRelationToNetflowMonitorPoliciesAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BridgeDomainRelationToNetflowMonitorPoliciesAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BridgeDomainRelationToNetflowMonitorPoliciesAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BridgeDomainRelationToNetflowMonitorPoliciesAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class BridgeDomainRelationToNetflowMonitorPoliciesAnnotationsList extends cdktf.ComplexList {
  public internalValue? : BridgeDomainRelationToNetflowMonitorPoliciesAnnotations[] | cdktf.IResolvable

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
  public get(index: number): BridgeDomainRelationToNetflowMonitorPoliciesAnnotationsOutputReference {
    return new BridgeDomainRelationToNetflowMonitorPoliciesAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BridgeDomainRelationToNetflowMonitorPoliciesTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#key BridgeDomain#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#value BridgeDomain#value}
  */
  readonly value?: string;
}

export function bridgeDomainRelationToNetflowMonitorPoliciesTagsToTerraform(struct?: BridgeDomainRelationToNetflowMonitorPoliciesTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function bridgeDomainRelationToNetflowMonitorPoliciesTagsToHclTerraform(struct?: BridgeDomainRelationToNetflowMonitorPoliciesTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BridgeDomainRelationToNetflowMonitorPoliciesTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BridgeDomainRelationToNetflowMonitorPoliciesTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BridgeDomainRelationToNetflowMonitorPoliciesTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class BridgeDomainRelationToNetflowMonitorPoliciesTagsList extends cdktf.ComplexList {
  public internalValue? : BridgeDomainRelationToNetflowMonitorPoliciesTags[] | cdktf.IResolvable

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
  public get(index: number): BridgeDomainRelationToNetflowMonitorPoliciesTagsOutputReference {
    return new BridgeDomainRelationToNetflowMonitorPoliciesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BridgeDomainRelationToNetflowMonitorPolicies {
  /**
  * The annotation of the Relation From Bridge Domain To NetFlow Monitor Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#annotation BridgeDomain#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#annotations BridgeDomain#annotations}
  */
  readonly annotations?: BridgeDomainRelationToNetflowMonitorPoliciesAnnotations[] | cdktf.IResolvable;
  /**
  * The filter type of the NetFlow Monitor Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#filter_type BridgeDomain#filter_type}
  */
  readonly filterType?: string;
  /**
  * The name of the NetFlow Monitor Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#netflow_monitor_policy_name BridgeDomain#netflow_monitor_policy_name}
  */
  readonly netflowMonitorPolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#tags BridgeDomain#tags}
  */
  readonly tags?: BridgeDomainRelationToNetflowMonitorPoliciesTags[] | cdktf.IResolvable;
}

export function bridgeDomainRelationToNetflowMonitorPoliciesToTerraform(struct?: BridgeDomainRelationToNetflowMonitorPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(bridgeDomainRelationToNetflowMonitorPoliciesAnnotationsToTerraform, false)(struct!.annotations),
    filter_type: cdktf.stringToTerraform(struct!.filterType),
    netflow_monitor_policy_name: cdktf.stringToTerraform(struct!.netflowMonitorPolicyName),
    tags: cdktf.listMapper(bridgeDomainRelationToNetflowMonitorPoliciesTagsToTerraform, false)(struct!.tags),
  }
}


export function bridgeDomainRelationToNetflowMonitorPoliciesToHclTerraform(struct?: BridgeDomainRelationToNetflowMonitorPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation: {
      value: cdktf.stringToHclTerraform(struct!.annotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotations: {
      value: cdktf.listMapperHcl(bridgeDomainRelationToNetflowMonitorPoliciesAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "BridgeDomainRelationToNetflowMonitorPoliciesAnnotationsList",
    },
    filter_type: {
      value: cdktf.stringToHclTerraform(struct!.filterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netflow_monitor_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.netflowMonitorPolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(bridgeDomainRelationToNetflowMonitorPoliciesTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "BridgeDomainRelationToNetflowMonitorPoliciesTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BridgeDomainRelationToNetflowMonitorPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BridgeDomainRelationToNetflowMonitorPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._filterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterType = this._filterType;
    }
    if (this._netflowMonitorPolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowMonitorPolicyName = this._netflowMonitorPolicyName;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BridgeDomainRelationToNetflowMonitorPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._filterType = undefined;
      this._netflowMonitorPolicyName = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._filterType = value.filterType;
      this._netflowMonitorPolicyName = value.netflowMonitorPolicyName;
      this._tags.internalValue = value.tags;
    }
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations = new BridgeDomainRelationToNetflowMonitorPoliciesAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: BridgeDomainRelationToNetflowMonitorPoliciesAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // filter_type - computed: true, optional: true, required: false
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  public resetFilterType() {
    this._filterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
  }

  // netflow_monitor_policy_name - computed: true, optional: true, required: false
  private _netflowMonitorPolicyName?: string; 
  public get netflowMonitorPolicyName() {
    return this.getStringAttribute('netflow_monitor_policy_name');
  }
  public set netflowMonitorPolicyName(value: string) {
    this._netflowMonitorPolicyName = value;
  }
  public resetNetflowMonitorPolicyName() {
    this._netflowMonitorPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowMonitorPolicyNameInput() {
    return this._netflowMonitorPolicyName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new BridgeDomainRelationToNetflowMonitorPoliciesTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: BridgeDomainRelationToNetflowMonitorPoliciesTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class BridgeDomainRelationToNetflowMonitorPoliciesList extends cdktf.ComplexList {
  public internalValue? : BridgeDomainRelationToNetflowMonitorPolicies[] | cdktf.IResolvable

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
  public get(index: number): BridgeDomainRelationToNetflowMonitorPoliciesOutputReference {
    return new BridgeDomainRelationToNetflowMonitorPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BridgeDomainRelationToRouteControlProfileAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#key BridgeDomain#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#value BridgeDomain#value}
  */
  readonly value?: string;
}

export function bridgeDomainRelationToRouteControlProfileAnnotationsToTerraform(struct?: BridgeDomainRelationToRouteControlProfileAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function bridgeDomainRelationToRouteControlProfileAnnotationsToHclTerraform(struct?: BridgeDomainRelationToRouteControlProfileAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BridgeDomainRelationToRouteControlProfileAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BridgeDomainRelationToRouteControlProfileAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BridgeDomainRelationToRouteControlProfileAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class BridgeDomainRelationToRouteControlProfileAnnotationsList extends cdktf.ComplexList {
  public internalValue? : BridgeDomainRelationToRouteControlProfileAnnotations[] | cdktf.IResolvable

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
  public get(index: number): BridgeDomainRelationToRouteControlProfileAnnotationsOutputReference {
    return new BridgeDomainRelationToRouteControlProfileAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BridgeDomainRelationToRouteControlProfileTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#key BridgeDomain#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#value BridgeDomain#value}
  */
  readonly value?: string;
}

export function bridgeDomainRelationToRouteControlProfileTagsToTerraform(struct?: BridgeDomainRelationToRouteControlProfileTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function bridgeDomainRelationToRouteControlProfileTagsToHclTerraform(struct?: BridgeDomainRelationToRouteControlProfileTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BridgeDomainRelationToRouteControlProfileTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BridgeDomainRelationToRouteControlProfileTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BridgeDomainRelationToRouteControlProfileTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class BridgeDomainRelationToRouteControlProfileTagsList extends cdktf.ComplexList {
  public internalValue? : BridgeDomainRelationToRouteControlProfileTags[] | cdktf.IResolvable

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
  public get(index: number): BridgeDomainRelationToRouteControlProfileTagsOutputReference {
    return new BridgeDomainRelationToRouteControlProfileTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BridgeDomainRelationToRouteControlProfile {
  /**
  * The annotation of the Relation From Bridge Domain To Route Control Profile object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#annotation BridgeDomain#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#annotations BridgeDomain#annotations}
  */
  readonly annotations?: BridgeDomainRelationToRouteControlProfileAnnotations[] | cdktf.IResolvable;
  /**
  * The name of the L3 Outside object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#l3_outside_name BridgeDomain#l3_outside_name}
  */
  readonly l3OutsideName?: string;
  /**
  * The name of the Route Control Profile object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#route_control_profile_name BridgeDomain#route_control_profile_name}
  */
  readonly routeControlProfileName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#tags BridgeDomain#tags}
  */
  readonly tags?: BridgeDomainRelationToRouteControlProfileTags[] | cdktf.IResolvable;
}

export function bridgeDomainRelationToRouteControlProfileToTerraform(struct?: BridgeDomainRelationToRouteControlProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(bridgeDomainRelationToRouteControlProfileAnnotationsToTerraform, false)(struct!.annotations),
    l3_outside_name: cdktf.stringToTerraform(struct!.l3OutsideName),
    route_control_profile_name: cdktf.stringToTerraform(struct!.routeControlProfileName),
    tags: cdktf.listMapper(bridgeDomainRelationToRouteControlProfileTagsToTerraform, false)(struct!.tags),
  }
}


export function bridgeDomainRelationToRouteControlProfileToHclTerraform(struct?: BridgeDomainRelationToRouteControlProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation: {
      value: cdktf.stringToHclTerraform(struct!.annotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotations: {
      value: cdktf.listMapperHcl(bridgeDomainRelationToRouteControlProfileAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "BridgeDomainRelationToRouteControlProfileAnnotationsList",
    },
    l3_outside_name: {
      value: cdktf.stringToHclTerraform(struct!.l3OutsideName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_control_profile_name: {
      value: cdktf.stringToHclTerraform(struct!.routeControlProfileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(bridgeDomainRelationToRouteControlProfileTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "BridgeDomainRelationToRouteControlProfileTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BridgeDomainRelationToRouteControlProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BridgeDomainRelationToRouteControlProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._l3OutsideName !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3OutsideName = this._l3OutsideName;
    }
    if (this._routeControlProfileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeControlProfileName = this._routeControlProfileName;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BridgeDomainRelationToRouteControlProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._l3OutsideName = undefined;
      this._routeControlProfileName = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._l3OutsideName = value.l3OutsideName;
      this._routeControlProfileName = value.routeControlProfileName;
      this._tags.internalValue = value.tags;
    }
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations = new BridgeDomainRelationToRouteControlProfileAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: BridgeDomainRelationToRouteControlProfileAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // l3_outside_name - computed: true, optional: true, required: false
  private _l3OutsideName?: string; 
  public get l3OutsideName() {
    return this.getStringAttribute('l3_outside_name');
  }
  public set l3OutsideName(value: string) {
    this._l3OutsideName = value;
  }
  public resetL3OutsideName() {
    this._l3OutsideName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3OutsideNameInput() {
    return this._l3OutsideName;
  }

  // route_control_profile_name - computed: true, optional: true, required: false
  private _routeControlProfileName?: string; 
  public get routeControlProfileName() {
    return this.getStringAttribute('route_control_profile_name');
  }
  public set routeControlProfileName(value: string) {
    this._routeControlProfileName = value;
  }
  public resetRouteControlProfileName() {
    this._routeControlProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeControlProfileNameInput() {
    return this._routeControlProfileName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new BridgeDomainRelationToRouteControlProfileTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: BridgeDomainRelationToRouteControlProfileTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface BridgeDomainRelationToVrfAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#key BridgeDomain#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#value BridgeDomain#value}
  */
  readonly value?: string;
}

export function bridgeDomainRelationToVrfAnnotationsToTerraform(struct?: BridgeDomainRelationToVrfAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function bridgeDomainRelationToVrfAnnotationsToHclTerraform(struct?: BridgeDomainRelationToVrfAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BridgeDomainRelationToVrfAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BridgeDomainRelationToVrfAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BridgeDomainRelationToVrfAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class BridgeDomainRelationToVrfAnnotationsList extends cdktf.ComplexList {
  public internalValue? : BridgeDomainRelationToVrfAnnotations[] | cdktf.IResolvable

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
  public get(index: number): BridgeDomainRelationToVrfAnnotationsOutputReference {
    return new BridgeDomainRelationToVrfAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BridgeDomainRelationToVrfTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#key BridgeDomain#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#value BridgeDomain#value}
  */
  readonly value?: string;
}

export function bridgeDomainRelationToVrfTagsToTerraform(struct?: BridgeDomainRelationToVrfTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function bridgeDomainRelationToVrfTagsToHclTerraform(struct?: BridgeDomainRelationToVrfTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BridgeDomainRelationToVrfTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BridgeDomainRelationToVrfTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BridgeDomainRelationToVrfTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class BridgeDomainRelationToVrfTagsList extends cdktf.ComplexList {
  public internalValue? : BridgeDomainRelationToVrfTags[] | cdktf.IResolvable

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
  public get(index: number): BridgeDomainRelationToVrfTagsOutputReference {
    return new BridgeDomainRelationToVrfTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BridgeDomainRelationToVrf {
  /**
  * The annotation of the Relation To VRF object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#annotation BridgeDomain#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#annotations BridgeDomain#annotations}
  */
  readonly annotations?: BridgeDomainRelationToVrfAnnotations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#tags BridgeDomain#tags}
  */
  readonly tags?: BridgeDomainRelationToVrfTags[] | cdktf.IResolvable;
  /**
  * The name of the VRF object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#vrf_name BridgeDomain#vrf_name}
  */
  readonly vrfName?: string;
}

export function bridgeDomainRelationToVrfToTerraform(struct?: BridgeDomainRelationToVrf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(bridgeDomainRelationToVrfAnnotationsToTerraform, false)(struct!.annotations),
    tags: cdktf.listMapper(bridgeDomainRelationToVrfTagsToTerraform, false)(struct!.tags),
    vrf_name: cdktf.stringToTerraform(struct!.vrfName),
  }
}


export function bridgeDomainRelationToVrfToHclTerraform(struct?: BridgeDomainRelationToVrf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation: {
      value: cdktf.stringToHclTerraform(struct!.annotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotations: {
      value: cdktf.listMapperHcl(bridgeDomainRelationToVrfAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "BridgeDomainRelationToVrfAnnotationsList",
    },
    tags: {
      value: cdktf.listMapperHcl(bridgeDomainRelationToVrfTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "BridgeDomainRelationToVrfTagsList",
    },
    vrf_name: {
      value: cdktf.stringToHclTerraform(struct!.vrfName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BridgeDomainRelationToVrfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BridgeDomainRelationToVrf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._vrfName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfName = this._vrfName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BridgeDomainRelationToVrf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._tags.internalValue = undefined;
      this._vrfName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._tags.internalValue = value.tags;
      this._vrfName = value.vrfName;
    }
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations = new BridgeDomainRelationToVrfAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: BridgeDomainRelationToVrfAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new BridgeDomainRelationToVrfTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: BridgeDomainRelationToVrfTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // vrf_name - computed: true, optional: true, required: false
  private _vrfName?: string; 
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
  public set vrfName(value: string) {
    this._vrfName = value;
  }
  public resetVrfName() {
    this._vrfName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfNameInput() {
    return this._vrfName;
  }
}
export interface BridgeDomainRogueCoopExceptionsAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#key BridgeDomain#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#value BridgeDomain#value}
  */
  readonly value?: string;
}

export function bridgeDomainRogueCoopExceptionsAnnotationsToTerraform(struct?: BridgeDomainRogueCoopExceptionsAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function bridgeDomainRogueCoopExceptionsAnnotationsToHclTerraform(struct?: BridgeDomainRogueCoopExceptionsAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BridgeDomainRogueCoopExceptionsAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BridgeDomainRogueCoopExceptionsAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BridgeDomainRogueCoopExceptionsAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class BridgeDomainRogueCoopExceptionsAnnotationsList extends cdktf.ComplexList {
  public internalValue? : BridgeDomainRogueCoopExceptionsAnnotations[] | cdktf.IResolvable

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
  public get(index: number): BridgeDomainRogueCoopExceptionsAnnotationsOutputReference {
    return new BridgeDomainRogueCoopExceptionsAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BridgeDomainRogueCoopExceptionsTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#key BridgeDomain#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#value BridgeDomain#value}
  */
  readonly value?: string;
}

export function bridgeDomainRogueCoopExceptionsTagsToTerraform(struct?: BridgeDomainRogueCoopExceptionsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function bridgeDomainRogueCoopExceptionsTagsToHclTerraform(struct?: BridgeDomainRogueCoopExceptionsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BridgeDomainRogueCoopExceptionsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BridgeDomainRogueCoopExceptionsTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BridgeDomainRogueCoopExceptionsTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class BridgeDomainRogueCoopExceptionsTagsList extends cdktf.ComplexList {
  public internalValue? : BridgeDomainRogueCoopExceptionsTags[] | cdktf.IResolvable

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
  public get(index: number): BridgeDomainRogueCoopExceptionsTagsOutputReference {
    return new BridgeDomainRogueCoopExceptionsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BridgeDomainRogueCoopExceptions {
  /**
  * The annotation of the Rogue Coop Exception object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#annotation BridgeDomain#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#annotations BridgeDomain#annotations}
  */
  readonly annotations?: BridgeDomainRogueCoopExceptionsAnnotations[] | cdktf.IResolvable;
  /**
  * The description of the Rogue Coop Exception object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#description BridgeDomain#description}
  */
  readonly description?: string;
  /**
  * The MAC address of the Rogue Coop Exception object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#mac BridgeDomain#mac}
  */
  readonly mac?: string;
  /**
  * The name of the Rogue Coop Exception object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#name BridgeDomain#name}
  */
  readonly name?: string;
  /**
  * The name alias of the Rogue Coop Exception object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#name_alias BridgeDomain#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#tags BridgeDomain#tags}
  */
  readonly tags?: BridgeDomainRogueCoopExceptionsTags[] | cdktf.IResolvable;
}

export function bridgeDomainRogueCoopExceptionsToTerraform(struct?: BridgeDomainRogueCoopExceptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(bridgeDomainRogueCoopExceptionsAnnotationsToTerraform, false)(struct!.annotations),
    description: cdktf.stringToTerraform(struct!.description),
    mac: cdktf.stringToTerraform(struct!.mac),
    name: cdktf.stringToTerraform(struct!.name),
    name_alias: cdktf.stringToTerraform(struct!.nameAlias),
    tags: cdktf.listMapper(bridgeDomainRogueCoopExceptionsTagsToTerraform, false)(struct!.tags),
  }
}


export function bridgeDomainRogueCoopExceptionsToHclTerraform(struct?: BridgeDomainRogueCoopExceptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation: {
      value: cdktf.stringToHclTerraform(struct!.annotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotations: {
      value: cdktf.listMapperHcl(bridgeDomainRogueCoopExceptionsAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "BridgeDomainRogueCoopExceptionsAnnotationsList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_alias: {
      value: cdktf.stringToHclTerraform(struct!.nameAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(bridgeDomainRogueCoopExceptionsTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "BridgeDomainRogueCoopExceptionsTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BridgeDomainRogueCoopExceptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BridgeDomainRogueCoopExceptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nameAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameAlias = this._nameAlias;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BridgeDomainRogueCoopExceptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._description = undefined;
      this._mac = undefined;
      this._name = undefined;
      this._nameAlias = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._description = value.description;
      this._mac = value.mac;
      this._name = value.name;
      this._nameAlias = value.nameAlias;
      this._tags.internalValue = value.tags;
    }
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations = new BridgeDomainRogueCoopExceptionsAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: BridgeDomainRogueCoopExceptionsAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // mac - computed: true, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
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

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new BridgeDomainRogueCoopExceptionsTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: BridgeDomainRogueCoopExceptionsTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class BridgeDomainRogueCoopExceptionsList extends cdktf.ComplexList {
  public internalValue? : BridgeDomainRogueCoopExceptions[] | cdktf.IResolvable

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
  public get(index: number): BridgeDomainRogueCoopExceptionsOutputReference {
    return new BridgeDomainRogueCoopExceptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BridgeDomainTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#key BridgeDomain#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#value BridgeDomain#value}
  */
  readonly value?: string;
}

export function bridgeDomainTagsToTerraform(struct?: BridgeDomainTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function bridgeDomainTagsToHclTerraform(struct?: BridgeDomainTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BridgeDomainTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BridgeDomainTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BridgeDomainTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class BridgeDomainTagsList extends cdktf.ComplexList {
  public internalValue? : BridgeDomainTags[] | cdktf.IResolvable

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
  public get(index: number): BridgeDomainTagsOutputReference {
    return new BridgeDomainTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BridgeDomainRelationFvRsBdToNetflowMonitorPol {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#flt_type BridgeDomain#flt_type}
  */
  readonly fltType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#tn_netflow_monitor_pol_name BridgeDomain#tn_netflow_monitor_pol_name}
  */
  readonly tnNetflowMonitorPolName?: string;
}

export function bridgeDomainRelationFvRsBdToNetflowMonitorPolToTerraform(struct?: BridgeDomainRelationFvRsBdToNetflowMonitorPol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flt_type: cdktf.stringToTerraform(struct!.fltType),
    tn_netflow_monitor_pol_name: cdktf.stringToTerraform(struct!.tnNetflowMonitorPolName),
  }
}


export function bridgeDomainRelationFvRsBdToNetflowMonitorPolToHclTerraform(struct?: BridgeDomainRelationFvRsBdToNetflowMonitorPol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flt_type: {
      value: cdktf.stringToHclTerraform(struct!.fltType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tn_netflow_monitor_pol_name: {
      value: cdktf.stringToHclTerraform(struct!.tnNetflowMonitorPolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BridgeDomainRelationFvRsBdToNetflowMonitorPolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BridgeDomainRelationFvRsBdToNetflowMonitorPol | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fltType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fltType = this._fltType;
    }
    if (this._tnNetflowMonitorPolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tnNetflowMonitorPolName = this._tnNetflowMonitorPolName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BridgeDomainRelationFvRsBdToNetflowMonitorPol | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fltType = undefined;
      this._tnNetflowMonitorPolName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fltType = value.fltType;
      this._tnNetflowMonitorPolName = value.tnNetflowMonitorPolName;
    }
  }

  // flt_type - computed: true, optional: true, required: false
  private _fltType?: string; 
  public get fltType() {
    return this.getStringAttribute('flt_type');
  }
  public set fltType(value: string) {
    this._fltType = value;
  }
  public resetFltType() {
    this._fltType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fltTypeInput() {
    return this._fltType;
  }

  // tn_netflow_monitor_pol_name - computed: true, optional: true, required: false
  private _tnNetflowMonitorPolName?: string; 
  public get tnNetflowMonitorPolName() {
    return this.getStringAttribute('tn_netflow_monitor_pol_name');
  }
  public set tnNetflowMonitorPolName(value: string) {
    this._tnNetflowMonitorPolName = value;
  }
  public resetTnNetflowMonitorPolName() {
    this._tnNetflowMonitorPolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tnNetflowMonitorPolNameInput() {
    return this._tnNetflowMonitorPolName;
  }
}

export class BridgeDomainRelationFvRsBdToNetflowMonitorPolList extends cdktf.ComplexList {
  public internalValue? : BridgeDomainRelationFvRsBdToNetflowMonitorPol[] | cdktf.IResolvable

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
  public get(index: number): BridgeDomainRelationFvRsBdToNetflowMonitorPolOutputReference {
    return new BridgeDomainRelationFvRsBdToNetflowMonitorPolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain aci_bridge_domain}
*/
export class BridgeDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_bridge_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BridgeDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BridgeDomain to import
  * @param importFromId The id of the existing BridgeDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BridgeDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_bridge_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bridge_domain aci_bridge_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BridgeDomainConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BridgeDomainConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aci_bridge_domain',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0',
        providerVersionConstraint: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._advertiseHostRoutes = config.advertiseHostRoutes;
    this._annotation = config.annotation;
    this._annotations.internalValue = config.annotations;
    this._arpFlood = config.arpFlood;
    this._arpFlooding = config.arpFlooding;
    this._bridgeDomainType = config.bridgeDomainType;
    this._clearRemoteMacEntries = config.clearRemoteMacEntries;
    this._customMacAddress = config.customMacAddress;
    this._description = config.description;
    this._dropArpWithMulticastSmac = config.dropArpWithMulticastSmac;
    this._enableIntersiteBumTraffic = config.enableIntersiteBumTraffic;
    this._enableRogueExceptionMac = config.enableRogueExceptionMac;
    this._endpointMoveDetectionMode = config.endpointMoveDetectionMode;
    this._epClear = config.epClear;
    this._epMoveDetectMode = config.epMoveDetectMode;
    this._hostBasedRouting = config.hostBasedRouting;
    this._intersiteBumTrafficAllow = config.intersiteBumTrafficAllow;
    this._intersiteL2Stretch = config.intersiteL2Stretch;
    this._ipLearning = config.ipLearning;
    this._ipv6L3UnknownMulticastFlooding = config.ipv6L3UnknownMulticastFlooding;
    this._ipv6McastAllow = config.ipv6McastAllow;
    this._l2UnknownUnicastFlooding = config.l2UnknownUnicastFlooding;
    this._l3UnknownMulticastFlooding = config.l3UnknownMulticastFlooding;
    this._legacyMode.internalValue = config.legacyMode;
    this._limitIpLearnToSubnets = config.limitIpLearnToSubnets;
    this._linkLocalIpv6Address = config.linkLocalIpv6Address;
    this._llAddr = config.llAddr;
    this._mac = config.mac;
    this._mcastAllow = config.mcastAllow;
    this._multiDestinationFlooding = config.multiDestinationFlooding;
    this._multiDstPktAct = config.multiDstPktAct;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._optimizeWanBandwidth = config.optimizeWanBandwidth;
    this._ownerKey = config.ownerKey;
    this._ownerTag = config.ownerTag;
    this._parentDn = config.parentDn;
    this._pim = config.pim;
    this._pimIpv6 = config.pimIpv6;
    this._relationFvRsAbdPolMonPol = config.relationFvRsAbdPolMonPol;
    this._relationFvRsBdFloodTo = config.relationFvRsBdFloodTo;
    this._relationFvRsBdToEpRet = config.relationFvRsBdToEpRet;
    this._relationFvRsBdToFhs = config.relationFvRsBdToFhs;
    this._relationFvRsBdToNdP = config.relationFvRsBdToNdP;
    this._relationFvRsBdToOut = config.relationFvRsBdToOut;
    this._relationFvRsBdToProfile = config.relationFvRsBdToProfile;
    this._relationFvRsBdToRelayP = config.relationFvRsBdToRelayP;
    this._relationFvRsCtx = config.relationFvRsCtx;
    this._relationFvRsIgmpsn = config.relationFvRsIgmpsn;
    this._relationFvRsMldsn = config.relationFvRsMldsn;
    this._relationToDhcpRelayPolicy.internalValue = config.relationToDhcpRelayPolicy;
    this._relationToEndPointRetentionPolicy.internalValue = config.relationToEndPointRetentionPolicy;
    this._relationToFirstHopSecurityPolicy.internalValue = config.relationToFirstHopSecurityPolicy;
    this._relationToIgmpSnoopingPolicy.internalValue = config.relationToIgmpSnoopingPolicy;
    this._relationToL3Outsides.internalValue = config.relationToL3Outsides;
    this._relationToMldSnoopingPolicy.internalValue = config.relationToMldSnoopingPolicy;
    this._relationToMonitoringPolicy.internalValue = config.relationToMonitoringPolicy;
    this._relationToNeighborDiscoveryInterfacePolicy.internalValue = config.relationToNeighborDiscoveryInterfacePolicy;
    this._relationToNetflowMonitorPolicies.internalValue = config.relationToNetflowMonitorPolicies;
    this._relationToRouteControlProfile.internalValue = config.relationToRouteControlProfile;
    this._relationToVrf.internalValue = config.relationToVrf;
    this._rogueCoopExceptions.internalValue = config.rogueCoopExceptions;
    this._serviceBdRoutingDisable = config.serviceBdRoutingDisable;
    this._tags.internalValue = config.tags;
    this._tenantDn = config.tenantDn;
    this._unicastRoute = config.unicastRoute;
    this._unicastRouting = config.unicastRouting;
    this._unkMacUcastAct = config.unkMacUcastAct;
    this._unkMcastAct = config.unkMcastAct;
    this._v6UnkMcastAct = config.v6UnkMcastAct;
    this._virtualMacAddress = config.virtualMacAddress;
    this._vmac = config.vmac;
    this._relationFvRsBdToNetflowMonitorPol.internalValue = config.relationFvRsBdToNetflowMonitorPol;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advertise_host_routes - computed: true, optional: true, required: false
  private _advertiseHostRoutes?: string; 
  public get advertiseHostRoutes() {
    return this.getStringAttribute('advertise_host_routes');
  }
  public set advertiseHostRoutes(value: string) {
    this._advertiseHostRoutes = value;
  }
  public resetAdvertiseHostRoutes() {
    this._advertiseHostRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseHostRoutesInput() {
    return this._advertiseHostRoutes;
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations = new BridgeDomainAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: BridgeDomainAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // arp_flood - computed: true, optional: true, required: false
  private _arpFlood?: string; 
  public get arpFlood() {
    return this.getStringAttribute('arp_flood');
  }
  public set arpFlood(value: string) {
    this._arpFlood = value;
  }
  public resetArpFlood() {
    this._arpFlood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpFloodInput() {
    return this._arpFlood;
  }

  // arp_flooding - computed: true, optional: true, required: false
  private _arpFlooding?: string; 
  public get arpFlooding() {
    return this.getStringAttribute('arp_flooding');
  }
  public set arpFlooding(value: string) {
    this._arpFlooding = value;
  }
  public resetArpFlooding() {
    this._arpFlooding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpFloodingInput() {
    return this._arpFlooding;
  }

  // bridge_domain_type - computed: true, optional: true, required: false
  private _bridgeDomainType?: string; 
  public get bridgeDomainType() {
    return this.getStringAttribute('bridge_domain_type');
  }
  public set bridgeDomainType(value: string) {
    this._bridgeDomainType = value;
  }
  public resetBridgeDomainType() {
    this._bridgeDomainType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeDomainTypeInput() {
    return this._bridgeDomainType;
  }

  // clear_remote_mac_entries - computed: true, optional: true, required: false
  private _clearRemoteMacEntries?: string; 
  public get clearRemoteMacEntries() {
    return this.getStringAttribute('clear_remote_mac_entries');
  }
  public set clearRemoteMacEntries(value: string) {
    this._clearRemoteMacEntries = value;
  }
  public resetClearRemoteMacEntries() {
    this._clearRemoteMacEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearRemoteMacEntriesInput() {
    return this._clearRemoteMacEntries;
  }

  // custom_mac_address - computed: true, optional: true, required: false
  private _customMacAddress?: string; 
  public get customMacAddress() {
    return this.getStringAttribute('custom_mac_address');
  }
  public set customMacAddress(value: string) {
    this._customMacAddress = value;
  }
  public resetCustomMacAddress() {
    this._customMacAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMacAddressInput() {
    return this._customMacAddress;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // drop_arp_with_multicast_smac - computed: true, optional: true, required: false
  private _dropArpWithMulticastSmac?: string; 
  public get dropArpWithMulticastSmac() {
    return this.getStringAttribute('drop_arp_with_multicast_smac');
  }
  public set dropArpWithMulticastSmac(value: string) {
    this._dropArpWithMulticastSmac = value;
  }
  public resetDropArpWithMulticastSmac() {
    this._dropArpWithMulticastSmac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropArpWithMulticastSmacInput() {
    return this._dropArpWithMulticastSmac;
  }

  // enable_intersite_bum_traffic - computed: true, optional: true, required: false
  private _enableIntersiteBumTraffic?: string; 
  public get enableIntersiteBumTraffic() {
    return this.getStringAttribute('enable_intersite_bum_traffic');
  }
  public set enableIntersiteBumTraffic(value: string) {
    this._enableIntersiteBumTraffic = value;
  }
  public resetEnableIntersiteBumTraffic() {
    this._enableIntersiteBumTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIntersiteBumTrafficInput() {
    return this._enableIntersiteBumTraffic;
  }

  // enable_rogue_exception_mac - computed: true, optional: true, required: false
  private _enableRogueExceptionMac?: string; 
  public get enableRogueExceptionMac() {
    return this.getStringAttribute('enable_rogue_exception_mac');
  }
  public set enableRogueExceptionMac(value: string) {
    this._enableRogueExceptionMac = value;
  }
  public resetEnableRogueExceptionMac() {
    this._enableRogueExceptionMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRogueExceptionMacInput() {
    return this._enableRogueExceptionMac;
  }

  // endpoint_move_detection_mode - computed: true, optional: true, required: false
  private _endpointMoveDetectionMode?: string; 
  public get endpointMoveDetectionMode() {
    return this.getStringAttribute('endpoint_move_detection_mode');
  }
  public set endpointMoveDetectionMode(value: string) {
    this._endpointMoveDetectionMode = value;
  }
  public resetEndpointMoveDetectionMode() {
    this._endpointMoveDetectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointMoveDetectionModeInput() {
    return this._endpointMoveDetectionMode;
  }

  // ep_clear - computed: true, optional: true, required: false
  private _epClear?: string; 
  public get epClear() {
    return this.getStringAttribute('ep_clear');
  }
  public set epClear(value: string) {
    this._epClear = value;
  }
  public resetEpClear() {
    this._epClear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epClearInput() {
    return this._epClear;
  }

  // ep_move_detect_mode - computed: true, optional: true, required: false
  private _epMoveDetectMode?: string; 
  public get epMoveDetectMode() {
    return this.getStringAttribute('ep_move_detect_mode');
  }
  public set epMoveDetectMode(value: string) {
    this._epMoveDetectMode = value;
  }
  public resetEpMoveDetectMode() {
    this._epMoveDetectMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epMoveDetectModeInput() {
    return this._epMoveDetectMode;
  }

  // host_based_routing - computed: true, optional: true, required: false
  private _hostBasedRouting?: string; 
  public get hostBasedRouting() {
    return this.getStringAttribute('host_based_routing');
  }
  public set hostBasedRouting(value: string) {
    this._hostBasedRouting = value;
  }
  public resetHostBasedRouting() {
    this._hostBasedRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostBasedRoutingInput() {
    return this._hostBasedRouting;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // intersite_bum_traffic_allow - computed: true, optional: true, required: false
  private _intersiteBumTrafficAllow?: string; 
  public get intersiteBumTrafficAllow() {
    return this.getStringAttribute('intersite_bum_traffic_allow');
  }
  public set intersiteBumTrafficAllow(value: string) {
    this._intersiteBumTrafficAllow = value;
  }
  public resetIntersiteBumTrafficAllow() {
    this._intersiteBumTrafficAllow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intersiteBumTrafficAllowInput() {
    return this._intersiteBumTrafficAllow;
  }

  // intersite_l2_stretch - computed: true, optional: true, required: false
  private _intersiteL2Stretch?: string; 
  public get intersiteL2Stretch() {
    return this.getStringAttribute('intersite_l2_stretch');
  }
  public set intersiteL2Stretch(value: string) {
    this._intersiteL2Stretch = value;
  }
  public resetIntersiteL2Stretch() {
    this._intersiteL2Stretch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intersiteL2StretchInput() {
    return this._intersiteL2Stretch;
  }

  // ip_learning - computed: true, optional: true, required: false
  private _ipLearning?: string; 
  public get ipLearning() {
    return this.getStringAttribute('ip_learning');
  }
  public set ipLearning(value: string) {
    this._ipLearning = value;
  }
  public resetIpLearning() {
    this._ipLearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipLearningInput() {
    return this._ipLearning;
  }

  // ipv6_l3_unknown_multicast_flooding - computed: true, optional: true, required: false
  private _ipv6L3UnknownMulticastFlooding?: string; 
  public get ipv6L3UnknownMulticastFlooding() {
    return this.getStringAttribute('ipv6_l3_unknown_multicast_flooding');
  }
  public set ipv6L3UnknownMulticastFlooding(value: string) {
    this._ipv6L3UnknownMulticastFlooding = value;
  }
  public resetIpv6L3UnknownMulticastFlooding() {
    this._ipv6L3UnknownMulticastFlooding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6L3UnknownMulticastFloodingInput() {
    return this._ipv6L3UnknownMulticastFlooding;
  }

  // ipv6_mcast_allow - computed: true, optional: true, required: false
  private _ipv6McastAllow?: string; 
  public get ipv6McastAllow() {
    return this.getStringAttribute('ipv6_mcast_allow');
  }
  public set ipv6McastAllow(value: string) {
    this._ipv6McastAllow = value;
  }
  public resetIpv6McastAllow() {
    this._ipv6McastAllow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6McastAllowInput() {
    return this._ipv6McastAllow;
  }

  // l2_unknown_unicast_flooding - computed: true, optional: true, required: false
  private _l2UnknownUnicastFlooding?: string; 
  public get l2UnknownUnicastFlooding() {
    return this.getStringAttribute('l2_unknown_unicast_flooding');
  }
  public set l2UnknownUnicastFlooding(value: string) {
    this._l2UnknownUnicastFlooding = value;
  }
  public resetL2UnknownUnicastFlooding() {
    this._l2UnknownUnicastFlooding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2UnknownUnicastFloodingInput() {
    return this._l2UnknownUnicastFlooding;
  }

  // l3_unknown_multicast_flooding - computed: true, optional: true, required: false
  private _l3UnknownMulticastFlooding?: string; 
  public get l3UnknownMulticastFlooding() {
    return this.getStringAttribute('l3_unknown_multicast_flooding');
  }
  public set l3UnknownMulticastFlooding(value: string) {
    this._l3UnknownMulticastFlooding = value;
  }
  public resetL3UnknownMulticastFlooding() {
    this._l3UnknownMulticastFlooding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3UnknownMulticastFloodingInput() {
    return this._l3UnknownMulticastFlooding;
  }

  // legacy_mode - computed: true, optional: true, required: false
  private _legacyMode = new BridgeDomainLegacyModeOutputReference(this, "legacy_mode");
  public get legacyMode() {
    return this._legacyMode;
  }
  public putLegacyMode(value: BridgeDomainLegacyMode) {
    this._legacyMode.internalValue = value;
  }
  public resetLegacyMode() {
    this._legacyMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legacyModeInput() {
    return this._legacyMode.internalValue;
  }

  // limit_ip_learn_to_subnets - computed: true, optional: true, required: false
  private _limitIpLearnToSubnets?: string; 
  public get limitIpLearnToSubnets() {
    return this.getStringAttribute('limit_ip_learn_to_subnets');
  }
  public set limitIpLearnToSubnets(value: string) {
    this._limitIpLearnToSubnets = value;
  }
  public resetLimitIpLearnToSubnets() {
    this._limitIpLearnToSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitIpLearnToSubnetsInput() {
    return this._limitIpLearnToSubnets;
  }

  // link_local_ipv6_address - computed: true, optional: true, required: false
  private _linkLocalIpv6Address?: string; 
  public get linkLocalIpv6Address() {
    return this.getStringAttribute('link_local_ipv6_address');
  }
  public set linkLocalIpv6Address(value: string) {
    this._linkLocalIpv6Address = value;
  }
  public resetLinkLocalIpv6Address() {
    this._linkLocalIpv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkLocalIpv6AddressInput() {
    return this._linkLocalIpv6Address;
  }

  // ll_addr - computed: true, optional: true, required: false
  private _llAddr?: string; 
  public get llAddr() {
    return this.getStringAttribute('ll_addr');
  }
  public set llAddr(value: string) {
    this._llAddr = value;
  }
  public resetLlAddr() {
    this._llAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get llAddrInput() {
    return this._llAddr;
  }

  // mac - computed: true, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }

  // mcast_allow - computed: true, optional: true, required: false
  private _mcastAllow?: string; 
  public get mcastAllow() {
    return this.getStringAttribute('mcast_allow');
  }
  public set mcastAllow(value: string) {
    this._mcastAllow = value;
  }
  public resetMcastAllow() {
    this._mcastAllow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcastAllowInput() {
    return this._mcastAllow;
  }

  // multi_destination_flooding - computed: true, optional: true, required: false
  private _multiDestinationFlooding?: string; 
  public get multiDestinationFlooding() {
    return this.getStringAttribute('multi_destination_flooding');
  }
  public set multiDestinationFlooding(value: string) {
    this._multiDestinationFlooding = value;
  }
  public resetMultiDestinationFlooding() {
    this._multiDestinationFlooding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiDestinationFloodingInput() {
    return this._multiDestinationFlooding;
  }

  // multi_dst_pkt_act - computed: true, optional: true, required: false
  private _multiDstPktAct?: string; 
  public get multiDstPktAct() {
    return this.getStringAttribute('multi_dst_pkt_act');
  }
  public set multiDstPktAct(value: string) {
    this._multiDstPktAct = value;
  }
  public resetMultiDstPktAct() {
    this._multiDstPktAct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiDstPktActInput() {
    return this._multiDstPktAct;
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

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // optimize_wan_bandwidth - computed: true, optional: true, required: false
  private _optimizeWanBandwidth?: string; 
  public get optimizeWanBandwidth() {
    return this.getStringAttribute('optimize_wan_bandwidth');
  }
  public set optimizeWanBandwidth(value: string) {
    this._optimizeWanBandwidth = value;
  }
  public resetOptimizeWanBandwidth() {
    this._optimizeWanBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizeWanBandwidthInput() {
    return this._optimizeWanBandwidth;
  }

  // owner_key - computed: true, optional: true, required: false
  private _ownerKey?: string; 
  public get ownerKey() {
    return this.getStringAttribute('owner_key');
  }
  public set ownerKey(value: string) {
    this._ownerKey = value;
  }
  public resetOwnerKey() {
    this._ownerKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerKeyInput() {
    return this._ownerKey;
  }

  // owner_tag - computed: true, optional: true, required: false
  private _ownerTag?: string; 
  public get ownerTag() {
    return this.getStringAttribute('owner_tag');
  }
  public set ownerTag(value: string) {
    this._ownerTag = value;
  }
  public resetOwnerTag() {
    this._ownerTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerTagInput() {
    return this._ownerTag;
  }

  // parent_dn - computed: true, optional: true, required: false
  private _parentDn?: string; 
  public get parentDn() {
    return this.getStringAttribute('parent_dn');
  }
  public set parentDn(value: string) {
    this._parentDn = value;
  }
  public resetParentDn() {
    this._parentDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentDnInput() {
    return this._parentDn;
  }

  // pc_tag - computed: true, optional: false, required: false
  public get pcTag() {
    return this.getStringAttribute('pc_tag');
  }

  // pim - computed: true, optional: true, required: false
  private _pim?: string; 
  public get pim() {
    return this.getStringAttribute('pim');
  }
  public set pim(value: string) {
    this._pim = value;
  }
  public resetPim() {
    this._pim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pimInput() {
    return this._pim;
  }

  // pim_ipv6 - computed: true, optional: true, required: false
  private _pimIpv6?: string; 
  public get pimIpv6() {
    return this.getStringAttribute('pim_ipv6');
  }
  public set pimIpv6(value: string) {
    this._pimIpv6 = value;
  }
  public resetPimIpv6() {
    this._pimIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pimIpv6Input() {
    return this._pimIpv6;
  }

  // relation_fv_rs_abd_pol_mon_pol - computed: true, optional: true, required: false
  private _relationFvRsAbdPolMonPol?: string; 
  public get relationFvRsAbdPolMonPol() {
    return this.getStringAttribute('relation_fv_rs_abd_pol_mon_pol');
  }
  public set relationFvRsAbdPolMonPol(value: string) {
    this._relationFvRsAbdPolMonPol = value;
  }
  public resetRelationFvRsAbdPolMonPol() {
    this._relationFvRsAbdPolMonPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsAbdPolMonPolInput() {
    return this._relationFvRsAbdPolMonPol;
  }

  // relation_fv_rs_bd_flood_to - computed: true, optional: true, required: false
  private _relationFvRsBdFloodTo?: string[]; 
  public get relationFvRsBdFloodTo() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_fv_rs_bd_flood_to'));
  }
  public set relationFvRsBdFloodTo(value: string[]) {
    this._relationFvRsBdFloodTo = value;
  }
  public resetRelationFvRsBdFloodTo() {
    this._relationFvRsBdFloodTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsBdFloodToInput() {
    return this._relationFvRsBdFloodTo;
  }

  // relation_fv_rs_bd_to_ep_ret - computed: true, optional: true, required: false
  private _relationFvRsBdToEpRet?: string; 
  public get relationFvRsBdToEpRet() {
    return this.getStringAttribute('relation_fv_rs_bd_to_ep_ret');
  }
  public set relationFvRsBdToEpRet(value: string) {
    this._relationFvRsBdToEpRet = value;
  }
  public resetRelationFvRsBdToEpRet() {
    this._relationFvRsBdToEpRet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsBdToEpRetInput() {
    return this._relationFvRsBdToEpRet;
  }

  // relation_fv_rs_bd_to_fhs - computed: true, optional: true, required: false
  private _relationFvRsBdToFhs?: string; 
  public get relationFvRsBdToFhs() {
    return this.getStringAttribute('relation_fv_rs_bd_to_fhs');
  }
  public set relationFvRsBdToFhs(value: string) {
    this._relationFvRsBdToFhs = value;
  }
  public resetRelationFvRsBdToFhs() {
    this._relationFvRsBdToFhs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsBdToFhsInput() {
    return this._relationFvRsBdToFhs;
  }

  // relation_fv_rs_bd_to_nd_p - computed: true, optional: true, required: false
  private _relationFvRsBdToNdP?: string; 
  public get relationFvRsBdToNdP() {
    return this.getStringAttribute('relation_fv_rs_bd_to_nd_p');
  }
  public set relationFvRsBdToNdP(value: string) {
    this._relationFvRsBdToNdP = value;
  }
  public resetRelationFvRsBdToNdP() {
    this._relationFvRsBdToNdP = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsBdToNdPInput() {
    return this._relationFvRsBdToNdP;
  }

  // relation_fv_rs_bd_to_out - computed: true, optional: true, required: false
  private _relationFvRsBdToOut?: string[]; 
  public get relationFvRsBdToOut() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_fv_rs_bd_to_out'));
  }
  public set relationFvRsBdToOut(value: string[]) {
    this._relationFvRsBdToOut = value;
  }
  public resetRelationFvRsBdToOut() {
    this._relationFvRsBdToOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsBdToOutInput() {
    return this._relationFvRsBdToOut;
  }

  // relation_fv_rs_bd_to_profile - computed: true, optional: true, required: false
  private _relationFvRsBdToProfile?: string; 
  public get relationFvRsBdToProfile() {
    return this.getStringAttribute('relation_fv_rs_bd_to_profile');
  }
  public set relationFvRsBdToProfile(value: string) {
    this._relationFvRsBdToProfile = value;
  }
  public resetRelationFvRsBdToProfile() {
    this._relationFvRsBdToProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsBdToProfileInput() {
    return this._relationFvRsBdToProfile;
  }

  // relation_fv_rs_bd_to_relay_p - computed: true, optional: true, required: false
  private _relationFvRsBdToRelayP?: string; 
  public get relationFvRsBdToRelayP() {
    return this.getStringAttribute('relation_fv_rs_bd_to_relay_p');
  }
  public set relationFvRsBdToRelayP(value: string) {
    this._relationFvRsBdToRelayP = value;
  }
  public resetRelationFvRsBdToRelayP() {
    this._relationFvRsBdToRelayP = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsBdToRelayPInput() {
    return this._relationFvRsBdToRelayP;
  }

  // relation_fv_rs_ctx - computed: true, optional: true, required: false
  private _relationFvRsCtx?: string; 
  public get relationFvRsCtx() {
    return this.getStringAttribute('relation_fv_rs_ctx');
  }
  public set relationFvRsCtx(value: string) {
    this._relationFvRsCtx = value;
  }
  public resetRelationFvRsCtx() {
    this._relationFvRsCtx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsCtxInput() {
    return this._relationFvRsCtx;
  }

  // relation_fv_rs_igmpsn - computed: true, optional: true, required: false
  private _relationFvRsIgmpsn?: string; 
  public get relationFvRsIgmpsn() {
    return this.getStringAttribute('relation_fv_rs_igmpsn');
  }
  public set relationFvRsIgmpsn(value: string) {
    this._relationFvRsIgmpsn = value;
  }
  public resetRelationFvRsIgmpsn() {
    this._relationFvRsIgmpsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsIgmpsnInput() {
    return this._relationFvRsIgmpsn;
  }

  // relation_fv_rs_mldsn - computed: true, optional: true, required: false
  private _relationFvRsMldsn?: string; 
  public get relationFvRsMldsn() {
    return this.getStringAttribute('relation_fv_rs_mldsn');
  }
  public set relationFvRsMldsn(value: string) {
    this._relationFvRsMldsn = value;
  }
  public resetRelationFvRsMldsn() {
    this._relationFvRsMldsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsMldsnInput() {
    return this._relationFvRsMldsn;
  }

  // relation_to_dhcp_relay_policy - computed: true, optional: true, required: false
  private _relationToDhcpRelayPolicy = new BridgeDomainRelationToDhcpRelayPolicyOutputReference(this, "relation_to_dhcp_relay_policy");
  public get relationToDhcpRelayPolicy() {
    return this._relationToDhcpRelayPolicy;
  }
  public putRelationToDhcpRelayPolicy(value: BridgeDomainRelationToDhcpRelayPolicy) {
    this._relationToDhcpRelayPolicy.internalValue = value;
  }
  public resetRelationToDhcpRelayPolicy() {
    this._relationToDhcpRelayPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationToDhcpRelayPolicyInput() {
    return this._relationToDhcpRelayPolicy.internalValue;
  }

  // relation_to_end_point_retention_policy - computed: true, optional: true, required: false
  private _relationToEndPointRetentionPolicy = new BridgeDomainRelationToEndPointRetentionPolicyOutputReference(this, "relation_to_end_point_retention_policy");
  public get relationToEndPointRetentionPolicy() {
    return this._relationToEndPointRetentionPolicy;
  }
  public putRelationToEndPointRetentionPolicy(value: BridgeDomainRelationToEndPointRetentionPolicy) {
    this._relationToEndPointRetentionPolicy.internalValue = value;
  }
  public resetRelationToEndPointRetentionPolicy() {
    this._relationToEndPointRetentionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationToEndPointRetentionPolicyInput() {
    return this._relationToEndPointRetentionPolicy.internalValue;
  }

  // relation_to_first_hop_security_policy - computed: true, optional: true, required: false
  private _relationToFirstHopSecurityPolicy = new BridgeDomainRelationToFirstHopSecurityPolicyOutputReference(this, "relation_to_first_hop_security_policy");
  public get relationToFirstHopSecurityPolicy() {
    return this._relationToFirstHopSecurityPolicy;
  }
  public putRelationToFirstHopSecurityPolicy(value: BridgeDomainRelationToFirstHopSecurityPolicy) {
    this._relationToFirstHopSecurityPolicy.internalValue = value;
  }
  public resetRelationToFirstHopSecurityPolicy() {
    this._relationToFirstHopSecurityPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationToFirstHopSecurityPolicyInput() {
    return this._relationToFirstHopSecurityPolicy.internalValue;
  }

  // relation_to_igmp_snooping_policy - computed: true, optional: true, required: false
  private _relationToIgmpSnoopingPolicy = new BridgeDomainRelationToIgmpSnoopingPolicyOutputReference(this, "relation_to_igmp_snooping_policy");
  public get relationToIgmpSnoopingPolicy() {
    return this._relationToIgmpSnoopingPolicy;
  }
  public putRelationToIgmpSnoopingPolicy(value: BridgeDomainRelationToIgmpSnoopingPolicy) {
    this._relationToIgmpSnoopingPolicy.internalValue = value;
  }
  public resetRelationToIgmpSnoopingPolicy() {
    this._relationToIgmpSnoopingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationToIgmpSnoopingPolicyInput() {
    return this._relationToIgmpSnoopingPolicy.internalValue;
  }

  // relation_to_l3_outsides - computed: true, optional: true, required: false
  private _relationToL3Outsides = new BridgeDomainRelationToL3OutsidesList(this, "relation_to_l3_outsides", true);
  public get relationToL3Outsides() {
    return this._relationToL3Outsides;
  }
  public putRelationToL3Outsides(value: BridgeDomainRelationToL3Outsides[] | cdktf.IResolvable) {
    this._relationToL3Outsides.internalValue = value;
  }
  public resetRelationToL3Outsides() {
    this._relationToL3Outsides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationToL3OutsidesInput() {
    return this._relationToL3Outsides.internalValue;
  }

  // relation_to_mld_snooping_policy - computed: true, optional: true, required: false
  private _relationToMldSnoopingPolicy = new BridgeDomainRelationToMldSnoopingPolicyOutputReference(this, "relation_to_mld_snooping_policy");
  public get relationToMldSnoopingPolicy() {
    return this._relationToMldSnoopingPolicy;
  }
  public putRelationToMldSnoopingPolicy(value: BridgeDomainRelationToMldSnoopingPolicy) {
    this._relationToMldSnoopingPolicy.internalValue = value;
  }
  public resetRelationToMldSnoopingPolicy() {
    this._relationToMldSnoopingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationToMldSnoopingPolicyInput() {
    return this._relationToMldSnoopingPolicy.internalValue;
  }

  // relation_to_monitoring_policy - computed: true, optional: true, required: false
  private _relationToMonitoringPolicy = new BridgeDomainRelationToMonitoringPolicyOutputReference(this, "relation_to_monitoring_policy");
  public get relationToMonitoringPolicy() {
    return this._relationToMonitoringPolicy;
  }
  public putRelationToMonitoringPolicy(value: BridgeDomainRelationToMonitoringPolicy) {
    this._relationToMonitoringPolicy.internalValue = value;
  }
  public resetRelationToMonitoringPolicy() {
    this._relationToMonitoringPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationToMonitoringPolicyInput() {
    return this._relationToMonitoringPolicy.internalValue;
  }

  // relation_to_neighbor_discovery_interface_policy - computed: true, optional: true, required: false
  private _relationToNeighborDiscoveryInterfacePolicy = new BridgeDomainRelationToNeighborDiscoveryInterfacePolicyOutputReference(this, "relation_to_neighbor_discovery_interface_policy");
  public get relationToNeighborDiscoveryInterfacePolicy() {
    return this._relationToNeighborDiscoveryInterfacePolicy;
  }
  public putRelationToNeighborDiscoveryInterfacePolicy(value: BridgeDomainRelationToNeighborDiscoveryInterfacePolicy) {
    this._relationToNeighborDiscoveryInterfacePolicy.internalValue = value;
  }
  public resetRelationToNeighborDiscoveryInterfacePolicy() {
    this._relationToNeighborDiscoveryInterfacePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationToNeighborDiscoveryInterfacePolicyInput() {
    return this._relationToNeighborDiscoveryInterfacePolicy.internalValue;
  }

  // relation_to_netflow_monitor_policies - computed: true, optional: true, required: false
  private _relationToNetflowMonitorPolicies = new BridgeDomainRelationToNetflowMonitorPoliciesList(this, "relation_to_netflow_monitor_policies", true);
  public get relationToNetflowMonitorPolicies() {
    return this._relationToNetflowMonitorPolicies;
  }
  public putRelationToNetflowMonitorPolicies(value: BridgeDomainRelationToNetflowMonitorPolicies[] | cdktf.IResolvable) {
    this._relationToNetflowMonitorPolicies.internalValue = value;
  }
  public resetRelationToNetflowMonitorPolicies() {
    this._relationToNetflowMonitorPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationToNetflowMonitorPoliciesInput() {
    return this._relationToNetflowMonitorPolicies.internalValue;
  }

  // relation_to_route_control_profile - computed: true, optional: true, required: false
  private _relationToRouteControlProfile = new BridgeDomainRelationToRouteControlProfileOutputReference(this, "relation_to_route_control_profile");
  public get relationToRouteControlProfile() {
    return this._relationToRouteControlProfile;
  }
  public putRelationToRouteControlProfile(value: BridgeDomainRelationToRouteControlProfile) {
    this._relationToRouteControlProfile.internalValue = value;
  }
  public resetRelationToRouteControlProfile() {
    this._relationToRouteControlProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationToRouteControlProfileInput() {
    return this._relationToRouteControlProfile.internalValue;
  }

  // relation_to_vrf - computed: true, optional: true, required: false
  private _relationToVrf = new BridgeDomainRelationToVrfOutputReference(this, "relation_to_vrf");
  public get relationToVrf() {
    return this._relationToVrf;
  }
  public putRelationToVrf(value: BridgeDomainRelationToVrf) {
    this._relationToVrf.internalValue = value;
  }
  public resetRelationToVrf() {
    this._relationToVrf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationToVrfInput() {
    return this._relationToVrf.internalValue;
  }

  // rogue_coop_exceptions - computed: true, optional: true, required: false
  private _rogueCoopExceptions = new BridgeDomainRogueCoopExceptionsList(this, "rogue_coop_exceptions", true);
  public get rogueCoopExceptions() {
    return this._rogueCoopExceptions;
  }
  public putRogueCoopExceptions(value: BridgeDomainRogueCoopExceptions[] | cdktf.IResolvable) {
    this._rogueCoopExceptions.internalValue = value;
  }
  public resetRogueCoopExceptions() {
    this._rogueCoopExceptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rogueCoopExceptionsInput() {
    return this._rogueCoopExceptions.internalValue;
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // segment - computed: true, optional: false, required: false
  public get segment() {
    return this.getStringAttribute('segment');
  }

  // service_bd_routing_disable - computed: true, optional: true, required: false
  private _serviceBdRoutingDisable?: string; 
  public get serviceBdRoutingDisable() {
    return this.getStringAttribute('service_bd_routing_disable');
  }
  public set serviceBdRoutingDisable(value: string) {
    this._serviceBdRoutingDisable = value;
  }
  public resetServiceBdRoutingDisable() {
    this._serviceBdRoutingDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceBdRoutingDisableInput() {
    return this._serviceBdRoutingDisable;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new BridgeDomainTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: BridgeDomainTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // tenant_dn - computed: true, optional: true, required: false
  private _tenantDn?: string; 
  public get tenantDn() {
    return this.getStringAttribute('tenant_dn');
  }
  public set tenantDn(value: string) {
    this._tenantDn = value;
  }
  public resetTenantDn() {
    this._tenantDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantDnInput() {
    return this._tenantDn;
  }

  // unicast_route - computed: true, optional: true, required: false
  private _unicastRoute?: string; 
  public get unicastRoute() {
    return this.getStringAttribute('unicast_route');
  }
  public set unicastRoute(value: string) {
    this._unicastRoute = value;
  }
  public resetUnicastRoute() {
    this._unicastRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unicastRouteInput() {
    return this._unicastRoute;
  }

  // unicast_routing - computed: true, optional: true, required: false
  private _unicastRouting?: string; 
  public get unicastRouting() {
    return this.getStringAttribute('unicast_routing');
  }
  public set unicastRouting(value: string) {
    this._unicastRouting = value;
  }
  public resetUnicastRouting() {
    this._unicastRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unicastRoutingInput() {
    return this._unicastRouting;
  }

  // unk_mac_ucast_act - computed: true, optional: true, required: false
  private _unkMacUcastAct?: string; 
  public get unkMacUcastAct() {
    return this.getStringAttribute('unk_mac_ucast_act');
  }
  public set unkMacUcastAct(value: string) {
    this._unkMacUcastAct = value;
  }
  public resetUnkMacUcastAct() {
    this._unkMacUcastAct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unkMacUcastActInput() {
    return this._unkMacUcastAct;
  }

  // unk_mcast_act - computed: true, optional: true, required: false
  private _unkMcastAct?: string; 
  public get unkMcastAct() {
    return this.getStringAttribute('unk_mcast_act');
  }
  public set unkMcastAct(value: string) {
    this._unkMcastAct = value;
  }
  public resetUnkMcastAct() {
    this._unkMcastAct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unkMcastActInput() {
    return this._unkMcastAct;
  }

  // v6unk_mcast_act - computed: true, optional: true, required: false
  private _v6UnkMcastAct?: string; 
  public get v6UnkMcastAct() {
    return this.getStringAttribute('v6unk_mcast_act');
  }
  public set v6UnkMcastAct(value: string) {
    this._v6UnkMcastAct = value;
  }
  public resetV6UnkMcastAct() {
    this._v6UnkMcastAct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6UnkMcastActInput() {
    return this._v6UnkMcastAct;
  }

  // virtual_mac_address - computed: true, optional: true, required: false
  private _virtualMacAddress?: string; 
  public get virtualMacAddress() {
    return this.getStringAttribute('virtual_mac_address');
  }
  public set virtualMacAddress(value: string) {
    this._virtualMacAddress = value;
  }
  public resetVirtualMacAddress() {
    this._virtualMacAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMacAddressInput() {
    return this._virtualMacAddress;
  }

  // vmac - computed: true, optional: true, required: false
  private _vmac?: string; 
  public get vmac() {
    return this.getStringAttribute('vmac');
  }
  public set vmac(value: string) {
    this._vmac = value;
  }
  public resetVmac() {
    this._vmac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmacInput() {
    return this._vmac;
  }

  // relation_fv_rs_bd_to_netflow_monitor_pol - computed: false, optional: true, required: false
  private _relationFvRsBdToNetflowMonitorPol = new BridgeDomainRelationFvRsBdToNetflowMonitorPolList(this, "relation_fv_rs_bd_to_netflow_monitor_pol", true);
  public get relationFvRsBdToNetflowMonitorPol() {
    return this._relationFvRsBdToNetflowMonitorPol;
  }
  public putRelationFvRsBdToNetflowMonitorPol(value: BridgeDomainRelationFvRsBdToNetflowMonitorPol[] | cdktf.IResolvable) {
    this._relationFvRsBdToNetflowMonitorPol.internalValue = value;
  }
  public resetRelationFvRsBdToNetflowMonitorPol() {
    this._relationFvRsBdToNetflowMonitorPol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsBdToNetflowMonitorPolInput() {
    return this._relationFvRsBdToNetflowMonitorPol.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advertise_host_routes: cdktf.stringToTerraform(this._advertiseHostRoutes),
      annotation: cdktf.stringToTerraform(this._annotation),
      annotations: cdktf.listMapper(bridgeDomainAnnotationsToTerraform, false)(this._annotations.internalValue),
      arp_flood: cdktf.stringToTerraform(this._arpFlood),
      arp_flooding: cdktf.stringToTerraform(this._arpFlooding),
      bridge_domain_type: cdktf.stringToTerraform(this._bridgeDomainType),
      clear_remote_mac_entries: cdktf.stringToTerraform(this._clearRemoteMacEntries),
      custom_mac_address: cdktf.stringToTerraform(this._customMacAddress),
      description: cdktf.stringToTerraform(this._description),
      drop_arp_with_multicast_smac: cdktf.stringToTerraform(this._dropArpWithMulticastSmac),
      enable_intersite_bum_traffic: cdktf.stringToTerraform(this._enableIntersiteBumTraffic),
      enable_rogue_exception_mac: cdktf.stringToTerraform(this._enableRogueExceptionMac),
      endpoint_move_detection_mode: cdktf.stringToTerraform(this._endpointMoveDetectionMode),
      ep_clear: cdktf.stringToTerraform(this._epClear),
      ep_move_detect_mode: cdktf.stringToTerraform(this._epMoveDetectMode),
      host_based_routing: cdktf.stringToTerraform(this._hostBasedRouting),
      intersite_bum_traffic_allow: cdktf.stringToTerraform(this._intersiteBumTrafficAllow),
      intersite_l2_stretch: cdktf.stringToTerraform(this._intersiteL2Stretch),
      ip_learning: cdktf.stringToTerraform(this._ipLearning),
      ipv6_l3_unknown_multicast_flooding: cdktf.stringToTerraform(this._ipv6L3UnknownMulticastFlooding),
      ipv6_mcast_allow: cdktf.stringToTerraform(this._ipv6McastAllow),
      l2_unknown_unicast_flooding: cdktf.stringToTerraform(this._l2UnknownUnicastFlooding),
      l3_unknown_multicast_flooding: cdktf.stringToTerraform(this._l3UnknownMulticastFlooding),
      legacy_mode: bridgeDomainLegacyModeToTerraform(this._legacyMode.internalValue),
      limit_ip_learn_to_subnets: cdktf.stringToTerraform(this._limitIpLearnToSubnets),
      link_local_ipv6_address: cdktf.stringToTerraform(this._linkLocalIpv6Address),
      ll_addr: cdktf.stringToTerraform(this._llAddr),
      mac: cdktf.stringToTerraform(this._mac),
      mcast_allow: cdktf.stringToTerraform(this._mcastAllow),
      multi_destination_flooding: cdktf.stringToTerraform(this._multiDestinationFlooding),
      multi_dst_pkt_act: cdktf.stringToTerraform(this._multiDstPktAct),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      optimize_wan_bandwidth: cdktf.stringToTerraform(this._optimizeWanBandwidth),
      owner_key: cdktf.stringToTerraform(this._ownerKey),
      owner_tag: cdktf.stringToTerraform(this._ownerTag),
      parent_dn: cdktf.stringToTerraform(this._parentDn),
      pim: cdktf.stringToTerraform(this._pim),
      pim_ipv6: cdktf.stringToTerraform(this._pimIpv6),
      relation_fv_rs_abd_pol_mon_pol: cdktf.stringToTerraform(this._relationFvRsAbdPolMonPol),
      relation_fv_rs_bd_flood_to: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationFvRsBdFloodTo),
      relation_fv_rs_bd_to_ep_ret: cdktf.stringToTerraform(this._relationFvRsBdToEpRet),
      relation_fv_rs_bd_to_fhs: cdktf.stringToTerraform(this._relationFvRsBdToFhs),
      relation_fv_rs_bd_to_nd_p: cdktf.stringToTerraform(this._relationFvRsBdToNdP),
      relation_fv_rs_bd_to_out: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationFvRsBdToOut),
      relation_fv_rs_bd_to_profile: cdktf.stringToTerraform(this._relationFvRsBdToProfile),
      relation_fv_rs_bd_to_relay_p: cdktf.stringToTerraform(this._relationFvRsBdToRelayP),
      relation_fv_rs_ctx: cdktf.stringToTerraform(this._relationFvRsCtx),
      relation_fv_rs_igmpsn: cdktf.stringToTerraform(this._relationFvRsIgmpsn),
      relation_fv_rs_mldsn: cdktf.stringToTerraform(this._relationFvRsMldsn),
      relation_to_dhcp_relay_policy: bridgeDomainRelationToDhcpRelayPolicyToTerraform(this._relationToDhcpRelayPolicy.internalValue),
      relation_to_end_point_retention_policy: bridgeDomainRelationToEndPointRetentionPolicyToTerraform(this._relationToEndPointRetentionPolicy.internalValue),
      relation_to_first_hop_security_policy: bridgeDomainRelationToFirstHopSecurityPolicyToTerraform(this._relationToFirstHopSecurityPolicy.internalValue),
      relation_to_igmp_snooping_policy: bridgeDomainRelationToIgmpSnoopingPolicyToTerraform(this._relationToIgmpSnoopingPolicy.internalValue),
      relation_to_l3_outsides: cdktf.listMapper(bridgeDomainRelationToL3OutsidesToTerraform, false)(this._relationToL3Outsides.internalValue),
      relation_to_mld_snooping_policy: bridgeDomainRelationToMldSnoopingPolicyToTerraform(this._relationToMldSnoopingPolicy.internalValue),
      relation_to_monitoring_policy: bridgeDomainRelationToMonitoringPolicyToTerraform(this._relationToMonitoringPolicy.internalValue),
      relation_to_neighbor_discovery_interface_policy: bridgeDomainRelationToNeighborDiscoveryInterfacePolicyToTerraform(this._relationToNeighborDiscoveryInterfacePolicy.internalValue),
      relation_to_netflow_monitor_policies: cdktf.listMapper(bridgeDomainRelationToNetflowMonitorPoliciesToTerraform, false)(this._relationToNetflowMonitorPolicies.internalValue),
      relation_to_route_control_profile: bridgeDomainRelationToRouteControlProfileToTerraform(this._relationToRouteControlProfile.internalValue),
      relation_to_vrf: bridgeDomainRelationToVrfToTerraform(this._relationToVrf.internalValue),
      rogue_coop_exceptions: cdktf.listMapper(bridgeDomainRogueCoopExceptionsToTerraform, false)(this._rogueCoopExceptions.internalValue),
      service_bd_routing_disable: cdktf.stringToTerraform(this._serviceBdRoutingDisable),
      tags: cdktf.listMapper(bridgeDomainTagsToTerraform, false)(this._tags.internalValue),
      tenant_dn: cdktf.stringToTerraform(this._tenantDn),
      unicast_route: cdktf.stringToTerraform(this._unicastRoute),
      unicast_routing: cdktf.stringToTerraform(this._unicastRouting),
      unk_mac_ucast_act: cdktf.stringToTerraform(this._unkMacUcastAct),
      unk_mcast_act: cdktf.stringToTerraform(this._unkMcastAct),
      v6unk_mcast_act: cdktf.stringToTerraform(this._v6UnkMcastAct),
      virtual_mac_address: cdktf.stringToTerraform(this._virtualMacAddress),
      vmac: cdktf.stringToTerraform(this._vmac),
      relation_fv_rs_bd_to_netflow_monitor_pol: cdktf.listMapper(bridgeDomainRelationFvRsBdToNetflowMonitorPolToTerraform, true)(this._relationFvRsBdToNetflowMonitorPol.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advertise_host_routes: {
        value: cdktf.stringToHclTerraform(this._advertiseHostRoutes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      annotations: {
        value: cdktf.listMapperHcl(bridgeDomainAnnotationsToHclTerraform, false)(this._annotations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BridgeDomainAnnotationsList",
      },
      arp_flood: {
        value: cdktf.stringToHclTerraform(this._arpFlood),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arp_flooding: {
        value: cdktf.stringToHclTerraform(this._arpFlooding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bridge_domain_type: {
        value: cdktf.stringToHclTerraform(this._bridgeDomainType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clear_remote_mac_entries: {
        value: cdktf.stringToHclTerraform(this._clearRemoteMacEntries),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_mac_address: {
        value: cdktf.stringToHclTerraform(this._customMacAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drop_arp_with_multicast_smac: {
        value: cdktf.stringToHclTerraform(this._dropArpWithMulticastSmac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_intersite_bum_traffic: {
        value: cdktf.stringToHclTerraform(this._enableIntersiteBumTraffic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_rogue_exception_mac: {
        value: cdktf.stringToHclTerraform(this._enableRogueExceptionMac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_move_detection_mode: {
        value: cdktf.stringToHclTerraform(this._endpointMoveDetectionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ep_clear: {
        value: cdktf.stringToHclTerraform(this._epClear),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ep_move_detect_mode: {
        value: cdktf.stringToHclTerraform(this._epMoveDetectMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_based_routing: {
        value: cdktf.stringToHclTerraform(this._hostBasedRouting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intersite_bum_traffic_allow: {
        value: cdktf.stringToHclTerraform(this._intersiteBumTrafficAllow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intersite_l2_stretch: {
        value: cdktf.stringToHclTerraform(this._intersiteL2Stretch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_learning: {
        value: cdktf.stringToHclTerraform(this._ipLearning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_l3_unknown_multicast_flooding: {
        value: cdktf.stringToHclTerraform(this._ipv6L3UnknownMulticastFlooding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_mcast_allow: {
        value: cdktf.stringToHclTerraform(this._ipv6McastAllow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l2_unknown_unicast_flooding: {
        value: cdktf.stringToHclTerraform(this._l2UnknownUnicastFlooding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l3_unknown_multicast_flooding: {
        value: cdktf.stringToHclTerraform(this._l3UnknownMulticastFlooding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      legacy_mode: {
        value: bridgeDomainLegacyModeToHclTerraform(this._legacyMode.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BridgeDomainLegacyMode",
      },
      limit_ip_learn_to_subnets: {
        value: cdktf.stringToHclTerraform(this._limitIpLearnToSubnets),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link_local_ipv6_address: {
        value: cdktf.stringToHclTerraform(this._linkLocalIpv6Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ll_addr: {
        value: cdktf.stringToHclTerraform(this._llAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac: {
        value: cdktf.stringToHclTerraform(this._mac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mcast_allow: {
        value: cdktf.stringToHclTerraform(this._mcastAllow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi_destination_flooding: {
        value: cdktf.stringToHclTerraform(this._multiDestinationFlooding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi_dst_pkt_act: {
        value: cdktf.stringToHclTerraform(this._multiDstPktAct),
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
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      optimize_wan_bandwidth: {
        value: cdktf.stringToHclTerraform(this._optimizeWanBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_key: {
        value: cdktf.stringToHclTerraform(this._ownerKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_tag: {
        value: cdktf.stringToHclTerraform(this._ownerTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_dn: {
        value: cdktf.stringToHclTerraform(this._parentDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pim: {
        value: cdktf.stringToHclTerraform(this._pim),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pim_ipv6: {
        value: cdktf.stringToHclTerraform(this._pimIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_fv_rs_abd_pol_mon_pol: {
        value: cdktf.stringToHclTerraform(this._relationFvRsAbdPolMonPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_fv_rs_bd_flood_to: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relationFvRsBdFloodTo),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      relation_fv_rs_bd_to_ep_ret: {
        value: cdktf.stringToHclTerraform(this._relationFvRsBdToEpRet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_fv_rs_bd_to_fhs: {
        value: cdktf.stringToHclTerraform(this._relationFvRsBdToFhs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_fv_rs_bd_to_nd_p: {
        value: cdktf.stringToHclTerraform(this._relationFvRsBdToNdP),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_fv_rs_bd_to_out: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relationFvRsBdToOut),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      relation_fv_rs_bd_to_profile: {
        value: cdktf.stringToHclTerraform(this._relationFvRsBdToProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_fv_rs_bd_to_relay_p: {
        value: cdktf.stringToHclTerraform(this._relationFvRsBdToRelayP),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_fv_rs_ctx: {
        value: cdktf.stringToHclTerraform(this._relationFvRsCtx),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_fv_rs_igmpsn: {
        value: cdktf.stringToHclTerraform(this._relationFvRsIgmpsn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_fv_rs_mldsn: {
        value: cdktf.stringToHclTerraform(this._relationFvRsMldsn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_to_dhcp_relay_policy: {
        value: bridgeDomainRelationToDhcpRelayPolicyToHclTerraform(this._relationToDhcpRelayPolicy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BridgeDomainRelationToDhcpRelayPolicy",
      },
      relation_to_end_point_retention_policy: {
        value: bridgeDomainRelationToEndPointRetentionPolicyToHclTerraform(this._relationToEndPointRetentionPolicy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BridgeDomainRelationToEndPointRetentionPolicy",
      },
      relation_to_first_hop_security_policy: {
        value: bridgeDomainRelationToFirstHopSecurityPolicyToHclTerraform(this._relationToFirstHopSecurityPolicy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BridgeDomainRelationToFirstHopSecurityPolicy",
      },
      relation_to_igmp_snooping_policy: {
        value: bridgeDomainRelationToIgmpSnoopingPolicyToHclTerraform(this._relationToIgmpSnoopingPolicy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BridgeDomainRelationToIgmpSnoopingPolicy",
      },
      relation_to_l3_outsides: {
        value: cdktf.listMapperHcl(bridgeDomainRelationToL3OutsidesToHclTerraform, false)(this._relationToL3Outsides.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BridgeDomainRelationToL3OutsidesList",
      },
      relation_to_mld_snooping_policy: {
        value: bridgeDomainRelationToMldSnoopingPolicyToHclTerraform(this._relationToMldSnoopingPolicy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BridgeDomainRelationToMldSnoopingPolicy",
      },
      relation_to_monitoring_policy: {
        value: bridgeDomainRelationToMonitoringPolicyToHclTerraform(this._relationToMonitoringPolicy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BridgeDomainRelationToMonitoringPolicy",
      },
      relation_to_neighbor_discovery_interface_policy: {
        value: bridgeDomainRelationToNeighborDiscoveryInterfacePolicyToHclTerraform(this._relationToNeighborDiscoveryInterfacePolicy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BridgeDomainRelationToNeighborDiscoveryInterfacePolicy",
      },
      relation_to_netflow_monitor_policies: {
        value: cdktf.listMapperHcl(bridgeDomainRelationToNetflowMonitorPoliciesToHclTerraform, false)(this._relationToNetflowMonitorPolicies.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BridgeDomainRelationToNetflowMonitorPoliciesList",
      },
      relation_to_route_control_profile: {
        value: bridgeDomainRelationToRouteControlProfileToHclTerraform(this._relationToRouteControlProfile.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BridgeDomainRelationToRouteControlProfile",
      },
      relation_to_vrf: {
        value: bridgeDomainRelationToVrfToHclTerraform(this._relationToVrf.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BridgeDomainRelationToVrf",
      },
      rogue_coop_exceptions: {
        value: cdktf.listMapperHcl(bridgeDomainRogueCoopExceptionsToHclTerraform, false)(this._rogueCoopExceptions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BridgeDomainRogueCoopExceptionsList",
      },
      service_bd_routing_disable: {
        value: cdktf.stringToHclTerraform(this._serviceBdRoutingDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(bridgeDomainTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BridgeDomainTagsList",
      },
      tenant_dn: {
        value: cdktf.stringToHclTerraform(this._tenantDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unicast_route: {
        value: cdktf.stringToHclTerraform(this._unicastRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unicast_routing: {
        value: cdktf.stringToHclTerraform(this._unicastRouting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unk_mac_ucast_act: {
        value: cdktf.stringToHclTerraform(this._unkMacUcastAct),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unk_mcast_act: {
        value: cdktf.stringToHclTerraform(this._unkMcastAct),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      v6unk_mcast_act: {
        value: cdktf.stringToHclTerraform(this._v6UnkMcastAct),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_mac_address: {
        value: cdktf.stringToHclTerraform(this._virtualMacAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vmac: {
        value: cdktf.stringToHclTerraform(this._vmac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_fv_rs_bd_to_netflow_monitor_pol: {
        value: cdktf.listMapperHcl(bridgeDomainRelationFvRsBdToNetflowMonitorPolToHclTerraform, true)(this._relationFvRsBdToNetflowMonitorPol.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BridgeDomainRelationFvRsBdToNetflowMonitorPolList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
