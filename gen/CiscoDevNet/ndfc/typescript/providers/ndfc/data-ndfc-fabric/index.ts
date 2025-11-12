// https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/data-sources/fabric
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNdfcFabricConfig extends cdktf.TerraformMetaArguments {
  /**
  * Fabric name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/data-sources/fabric#fabric_name DataNdfcFabric#fabric_name}
  */
  readonly fabricName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/data-sources/fabric ndfc_fabric}
*/
export class DataNdfcFabric extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ndfc_fabric";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNdfcFabric resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNdfcFabric to import
  * @param importFromId The id of the existing DataNdfcFabric that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/data-sources/fabric#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNdfcFabric to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ndfc_fabric", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/data-sources/fabric ndfc_fabric} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNdfcFabricConfig
  */
  public constructor(scope: Construct, id: string, config: DataNdfcFabricConfig) {
    super(scope, id, {
      terraformResourceType: 'ndfc_fabric',
      terraformGeneratorMetadata: {
        providerName: 'ndfc',
        providerVersion: '0.2.0',
        providerVersionConstraint: '0.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fabricName = config.fabricName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aaa_remote_ip_enabled - computed: true, optional: false, required: false
  public get aaaRemoteIpEnabled() {
    return this.getBooleanAttribute('aaa_remote_ip_enabled');
  }

  // aaa_server_conf - computed: true, optional: false, required: false
  public get aaaServerConf() {
    return this.getStringAttribute('aaa_server_conf');
  }

  // abstract_anycast_rp - computed: true, optional: false, required: false
  public get abstractAnycastRp() {
    return this.getStringAttribute('abstract_anycast_rp');
  }

  // abstract_bgp - computed: true, optional: false, required: false
  public get abstractBgp() {
    return this.getStringAttribute('abstract_bgp');
  }

  // abstract_bgp_neighbor - computed: true, optional: false, required: false
  public get abstractBgpNeighbor() {
    return this.getStringAttribute('abstract_bgp_neighbor');
  }

  // abstract_bgp_rr - computed: true, optional: false, required: false
  public get abstractBgpRr() {
    return this.getStringAttribute('abstract_bgp_rr');
  }

  // abstract_dhcp - computed: true, optional: false, required: false
  public get abstractDhcp() {
    return this.getStringAttribute('abstract_dhcp');
  }

  // abstract_extra_config_bootstrap - computed: true, optional: false, required: false
  public get abstractExtraConfigBootstrap() {
    return this.getStringAttribute('abstract_extra_config_bootstrap');
  }

  // abstract_extra_config_leaf - computed: true, optional: false, required: false
  public get abstractExtraConfigLeaf() {
    return this.getStringAttribute('abstract_extra_config_leaf');
  }

  // abstract_extra_config_spine - computed: true, optional: false, required: false
  public get abstractExtraConfigSpine() {
    return this.getStringAttribute('abstract_extra_config_spine');
  }

  // abstract_extra_config_tor - computed: true, optional: false, required: false
  public get abstractExtraConfigTor() {
    return this.getStringAttribute('abstract_extra_config_tor');
  }

  // abstract_feature_leaf - computed: true, optional: false, required: false
  public get abstractFeatureLeaf() {
    return this.getStringAttribute('abstract_feature_leaf');
  }

  // abstract_feature_spine - computed: true, optional: false, required: false
  public get abstractFeatureSpine() {
    return this.getStringAttribute('abstract_feature_spine');
  }

  // abstract_isis - computed: true, optional: false, required: false
  public get abstractIsis() {
    return this.getStringAttribute('abstract_isis');
  }

  // abstract_isis_interface - computed: true, optional: false, required: false
  public get abstractIsisInterface() {
    return this.getStringAttribute('abstract_isis_interface');
  }

  // abstract_loopback_interface - computed: true, optional: false, required: false
  public get abstractLoopbackInterface() {
    return this.getStringAttribute('abstract_loopback_interface');
  }

  // abstract_multicast - computed: true, optional: false, required: false
  public get abstractMulticast() {
    return this.getStringAttribute('abstract_multicast');
  }

  // abstract_ospf - computed: true, optional: false, required: false
  public get abstractOspf() {
    return this.getStringAttribute('abstract_ospf');
  }

  // abstract_ospf_interface - computed: true, optional: false, required: false
  public get abstractOspfInterface() {
    return this.getStringAttribute('abstract_ospf_interface');
  }

  // abstract_pim_interface - computed: true, optional: false, required: false
  public get abstractPimInterface() {
    return this.getStringAttribute('abstract_pim_interface');
  }

  // abstract_route_map - computed: true, optional: false, required: false
  public get abstractRouteMap() {
    return this.getStringAttribute('abstract_route_map');
  }

  // abstract_routed_host - computed: true, optional: false, required: false
  public get abstractRoutedHost() {
    return this.getStringAttribute('abstract_routed_host');
  }

  // abstract_vlan_interface - computed: true, optional: false, required: false
  public get abstractVlanInterface() {
    return this.getStringAttribute('abstract_vlan_interface');
  }

  // abstract_vpc_domain - computed: true, optional: false, required: false
  public get abstractVpcDomain() {
    return this.getStringAttribute('abstract_vpc_domain');
  }

  // active_migration - computed: true, optional: false, required: false
  public get activeMigration() {
    return this.getBooleanAttribute('active_migration');
  }

  // advertise_pip_bgp - computed: true, optional: false, required: false
  public get advertisePipBgp() {
    return this.getBooleanAttribute('advertise_pip_bgp');
  }

  // advertise_pip_on_border - computed: true, optional: false, required: false
  public get advertisePipOnBorder() {
    return this.getBooleanAttribute('advertise_pip_on_border');
  }

  // agent_intf - computed: true, optional: false, required: false
  public get agentIntf() {
    return this.getStringAttribute('agent_intf');
  }

  // agg_acc_vpc_po_id_range - computed: true, optional: false, required: false
  public get aggAccVpcPoIdRange() {
    return this.getStringAttribute('agg_acc_vpc_po_id_range');
  }

  // ai_ml_qos_policy - computed: true, optional: false, required: false
  public get aiMlQosPolicy() {
    return this.getStringAttribute('ai_ml_qos_policy');
  }

  // allow_l3vni_no_vlan - computed: true, optional: false, required: false
  public get allowL3VniNoVlan() {
    return this.getBooleanAttribute('allow_l3vni_no_vlan');
  }

  // allow_l3vni_no_vlan_prev - computed: true, optional: false, required: false
  public get allowL3VniNoVlanPrev() {
    return this.getBooleanAttribute('allow_l3vni_no_vlan_prev');
  }

  // allow_nxc - computed: true, optional: false, required: false
  public get allowNxc() {
    return this.getBooleanAttribute('allow_nxc');
  }

  // allow_nxc_prev - computed: true, optional: false, required: false
  public get allowNxcPrev() {
    return this.getBooleanAttribute('allow_nxc_prev');
  }

  // anycast_bgw_advertise_pip - computed: true, optional: false, required: false
  public get anycastBgwAdvertisePip() {
    return this.getBooleanAttribute('anycast_bgw_advertise_pip');
  }

  // anycast_gw_mac - computed: true, optional: false, required: false
  public get anycastGwMac() {
    return this.getStringAttribute('anycast_gw_mac');
  }

  // anycast_lb_id - computed: true, optional: false, required: false
  public get anycastLbId() {
    return this.getNumberAttribute('anycast_lb_id');
  }

  // anycast_rp_ip_range - computed: true, optional: false, required: false
  public get anycastRpIpRange() {
    return this.getStringAttribute('anycast_rp_ip_range');
  }

  // anycast_rp_ip_range_internal - computed: true, optional: false, required: false
  public get anycastRpIpRangeInternal() {
    return this.getStringAttribute('anycast_rp_ip_range_internal');
  }

  // auto_symmetric_default_vrf - computed: true, optional: false, required: false
  public get autoSymmetricDefaultVrf() {
    return this.getBooleanAttribute('auto_symmetric_default_vrf');
  }

  // auto_symmetric_vrf_lite - computed: true, optional: false, required: false
  public get autoSymmetricVrfLite() {
    return this.getBooleanAttribute('auto_symmetric_vrf_lite');
  }

  // auto_unique_vrf_lite_ip_prefix - computed: true, optional: false, required: false
  public get autoUniqueVrfLiteIpPrefix() {
    return this.getBooleanAttribute('auto_unique_vrf_lite_ip_prefix');
  }

  // auto_unique_vrf_lite_ip_prefix_prev - computed: true, optional: false, required: false
  public get autoUniqueVrfLiteIpPrefixPrev() {
    return this.getBooleanAttribute('auto_unique_vrf_lite_ip_prefix_prev');
  }

  // auto_vrflite_ifc_default_vrf - computed: true, optional: false, required: false
  public get autoVrfliteIfcDefaultVrf() {
    return this.getBooleanAttribute('auto_vrflite_ifc_default_vrf');
  }

  // banner - computed: true, optional: false, required: false
  public get banner() {
    return this.getStringAttribute('banner');
  }

  // bfd_auth_enable - computed: true, optional: false, required: false
  public get bfdAuthEnable() {
    return this.getBooleanAttribute('bfd_auth_enable');
  }

  // bfd_auth_key - computed: true, optional: false, required: false
  public get bfdAuthKey() {
    return this.getStringAttribute('bfd_auth_key');
  }

  // bfd_auth_key_id - computed: true, optional: false, required: false
  public get bfdAuthKeyId() {
    return this.getNumberAttribute('bfd_auth_key_id');
  }

  // bfd_enable - computed: true, optional: false, required: false
  public get bfdEnable() {
    return this.getBooleanAttribute('bfd_enable');
  }

  // bfd_enable_prev - computed: true, optional: false, required: false
  public get bfdEnablePrev() {
    return this.getBooleanAttribute('bfd_enable_prev');
  }

  // bfd_ibgp_enable - computed: true, optional: false, required: false
  public get bfdIbgpEnable() {
    return this.getBooleanAttribute('bfd_ibgp_enable');
  }

  // bfd_isis_enable - computed: true, optional: false, required: false
  public get bfdIsisEnable() {
    return this.getBooleanAttribute('bfd_isis_enable');
  }

  // bfd_ospf_enable - computed: true, optional: false, required: false
  public get bfdOspfEnable() {
    return this.getBooleanAttribute('bfd_ospf_enable');
  }

  // bfd_pim_enable - computed: true, optional: false, required: false
  public get bfdPimEnable() {
    return this.getBooleanAttribute('bfd_pim_enable');
  }

  // bgp_as - computed: true, optional: false, required: false
  public get bgpAs() {
    return this.getStringAttribute('bgp_as');
  }

  // bgp_as_prev - computed: true, optional: false, required: false
  public get bgpAsPrev() {
    return this.getStringAttribute('bgp_as_prev');
  }

  // bgp_auth_enable - computed: true, optional: false, required: false
  public get bgpAuthEnable() {
    return this.getBooleanAttribute('bgp_auth_enable');
  }

  // bgp_auth_key - computed: true, optional: false, required: false
  public get bgpAuthKey() {
    return this.getStringAttribute('bgp_auth_key');
  }

  // bgp_auth_key_type - computed: true, optional: false, required: false
  public get bgpAuthKeyType() {
    return this.getNumberAttribute('bgp_auth_key_type');
  }

  // bgp_lb_id - computed: true, optional: false, required: false
  public get bgpLbId() {
    return this.getNumberAttribute('bgp_lb_id');
  }

  // bgw_routing_tag - computed: true, optional: false, required: false
  public get bgwRoutingTag() {
    return this.getNumberAttribute('bgw_routing_tag');
  }

  // bgw_routing_tag_prev - computed: true, optional: false, required: false
  public get bgwRoutingTagPrev() {
    return this.getStringAttribute('bgw_routing_tag_prev');
  }

  // bootstrap_conf - computed: true, optional: false, required: false
  public get bootstrapConf() {
    return this.getStringAttribute('bootstrap_conf');
  }

  // bootstrap_enable - computed: true, optional: false, required: false
  public get bootstrapEnable() {
    return this.getBooleanAttribute('bootstrap_enable');
  }

  // bootstrap_enable_prev - computed: true, optional: false, required: false
  public get bootstrapEnablePrev() {
    return this.getBooleanAttribute('bootstrap_enable_prev');
  }

  // bootstrap_multisubnet - computed: true, optional: false, required: false
  public get bootstrapMultisubnet() {
    return this.getStringAttribute('bootstrap_multisubnet');
  }

  // bootstrap_multisubnet_internal - computed: true, optional: false, required: false
  public get bootstrapMultisubnetInternal() {
    return this.getStringAttribute('bootstrap_multisubnet_internal');
  }

  // brfield_debug_flag - computed: true, optional: false, required: false
  public get brfieldDebugFlag() {
    return this.getStringAttribute('brfield_debug_flag');
  }

  // brownfield_network_name_format - computed: true, optional: false, required: false
  public get brownfieldNetworkNameFormat() {
    return this.getStringAttribute('brownfield_network_name_format');
  }

  // brownfield_skip_overlay_network_attachments - computed: true, optional: false, required: false
  public get brownfieldSkipOverlayNetworkAttachments() {
    return this.getBooleanAttribute('brownfield_skip_overlay_network_attachments');
  }

  // cdp_enable - computed: true, optional: false, required: false
  public get cdpEnable() {
    return this.getBooleanAttribute('cdp_enable');
  }

  // copp_policy - computed: true, optional: false, required: false
  public get coppPolicy() {
    return this.getStringAttribute('copp_policy');
  }

  // dci_macsec_algorithm - computed: true, optional: false, required: false
  public get dciMacsecAlgorithm() {
    return this.getStringAttribute('dci_macsec_algorithm');
  }

  // dci_macsec_cipher_suite - computed: true, optional: false, required: false
  public get dciMacsecCipherSuite() {
    return this.getStringAttribute('dci_macsec_cipher_suite');
  }

  // dci_macsec_fallback_algorithm - computed: true, optional: false, required: false
  public get dciMacsecFallbackAlgorithm() {
    return this.getStringAttribute('dci_macsec_fallback_algorithm');
  }

  // dci_macsec_fallback_key_string - computed: true, optional: false, required: false
  public get dciMacsecFallbackKeyString() {
    return this.getStringAttribute('dci_macsec_fallback_key_string');
  }

  // dci_macsec_key_string - computed: true, optional: false, required: false
  public get dciMacsecKeyString() {
    return this.getStringAttribute('dci_macsec_key_string');
  }

  // dci_subnet_range - computed: true, optional: false, required: false
  public get dciSubnetRange() {
    return this.getStringAttribute('dci_subnet_range');
  }

  // dci_subnet_target_mask - computed: true, optional: false, required: false
  public get dciSubnetTargetMask() {
    return this.getNumberAttribute('dci_subnet_target_mask');
  }

  // dcnm_id - computed: true, optional: false, required: false
  public get dcnmId() {
    return this.getStringAttribute('dcnm_id');
  }

  // default_network - computed: true, optional: false, required: false
  public get defaultNetwork() {
    return this.getStringAttribute('default_network');
  }

  // default_pvlan_sec_network - computed: true, optional: false, required: false
  public get defaultPvlanSecNetwork() {
    return this.getStringAttribute('default_pvlan_sec_network');
  }

  // default_queuing_policy_cloudscale - computed: true, optional: false, required: false
  public get defaultQueuingPolicyCloudscale() {
    return this.getStringAttribute('default_queuing_policy_cloudscale');
  }

  // default_queuing_policy_other - computed: true, optional: false, required: false
  public get defaultQueuingPolicyOther() {
    return this.getStringAttribute('default_queuing_policy_other');
  }

  // default_queuing_policy_r_series - computed: true, optional: false, required: false
  public get defaultQueuingPolicyRSeries() {
    return this.getStringAttribute('default_queuing_policy_r_series');
  }

  // default_vrf - computed: true, optional: false, required: false
  public get defaultVrf() {
    return this.getStringAttribute('default_vrf');
  }

  // default_vrf_redis_bgp_rmap - computed: true, optional: false, required: false
  public get defaultVrfRedisBgpRmap() {
    return this.getStringAttribute('default_vrf_redis_bgp_rmap');
  }

  // deployment_freeze - computed: true, optional: false, required: false
  public get deploymentFreeze() {
    return this.getBooleanAttribute('deployment_freeze');
  }

  // deployment_status - computed: true, optional: false, required: false
  public get deploymentStatus() {
    return this.getStringAttribute('deployment_status');
  }

  // dhcp_enable - computed: true, optional: false, required: false
  public get dhcpEnable() {
    return this.getBooleanAttribute('dhcp_enable');
  }

  // dhcp_end - computed: true, optional: false, required: false
  public get dhcpEnd() {
    return this.getStringAttribute('dhcp_end');
  }

  // dhcp_end_internal - computed: true, optional: false, required: false
  public get dhcpEndInternal() {
    return this.getStringAttribute('dhcp_end_internal');
  }

  // dhcp_ipv6_enable - computed: true, optional: false, required: false
  public get dhcpIpv6Enable() {
    return this.getStringAttribute('dhcp_ipv6_enable');
  }

  // dhcp_ipv6_enable_internal - computed: true, optional: false, required: false
  public get dhcpIpv6EnableInternal() {
    return this.getStringAttribute('dhcp_ipv6_enable_internal');
  }

  // dhcp_start - computed: true, optional: false, required: false
  public get dhcpStart() {
    return this.getStringAttribute('dhcp_start');
  }

  // dhcp_start_internal - computed: true, optional: false, required: false
  public get dhcpStartInternal() {
    return this.getStringAttribute('dhcp_start_internal');
  }

  // dns_server_ip_list - computed: true, optional: false, required: false
  public get dnsServerIpList() {
    return this.getStringAttribute('dns_server_ip_list');
  }

  // dns_server_vrf - computed: true, optional: false, required: false
  public get dnsServerVrf() {
    return this.getStringAttribute('dns_server_vrf');
  }

  // domain_name_internal - computed: true, optional: false, required: false
  public get domainNameInternal() {
    return this.getStringAttribute('domain_name_internal');
  }

  // enable_aaa - computed: true, optional: false, required: false
  public get enableAaa() {
    return this.getBooleanAttribute('enable_aaa');
  }

  // enable_agent - computed: true, optional: false, required: false
  public get enableAgent() {
    return this.getBooleanAttribute('enable_agent');
  }

  // enable_agg_acc_id_range - computed: true, optional: false, required: false
  public get enableAggAccIdRange() {
    return this.getBooleanAttribute('enable_agg_acc_id_range');
  }

  // enable_ai_ml_qos_policy - computed: true, optional: false, required: false
  public get enableAiMlQosPolicy() {
    return this.getBooleanAttribute('enable_ai_ml_qos_policy');
  }

  // enable_ai_ml_qos_policy_flap - computed: true, optional: false, required: false
  public get enableAiMlQosPolicyFlap() {
    return this.getBooleanAttribute('enable_ai_ml_qos_policy_flap');
  }

  // enable_asm - computed: true, optional: false, required: false
  public get enableAsm() {
    return this.getBooleanAttribute('enable_asm');
  }

  // enable_dci_macsec - computed: true, optional: false, required: false
  public get enableDciMacsec() {
    return this.getBooleanAttribute('enable_dci_macsec');
  }

  // enable_dci_macsec_prev - computed: true, optional: false, required: false
  public get enableDciMacsecPrev() {
    return this.getBooleanAttribute('enable_dci_macsec_prev');
  }

  // enable_default_queuing_policy - computed: true, optional: false, required: false
  public get enableDefaultQueuingPolicy() {
    return this.getBooleanAttribute('enable_default_queuing_policy');
  }

  // enable_evpn - computed: true, optional: false, required: false
  public get enableEvpn() {
    return this.getBooleanAttribute('enable_evpn');
  }

  // enable_fabric_vpc_domain_id - computed: true, optional: false, required: false
  public get enableFabricVpcDomainId() {
    return this.getBooleanAttribute('enable_fabric_vpc_domain_id');
  }

  // enable_fabric_vpc_domain_id_prev - computed: true, optional: false, required: false
  public get enableFabricVpcDomainIdPrev() {
    return this.getBooleanAttribute('enable_fabric_vpc_domain_id_prev');
  }

  // enable_l3vni_no_vlan - computed: true, optional: false, required: false
  public get enableL3VniNoVlan() {
    return this.getBooleanAttribute('enable_l3vni_no_vlan');
  }

  // enable_macsec - computed: true, optional: false, required: false
  public get enableMacsec() {
    return this.getBooleanAttribute('enable_macsec');
  }

  // enable_macsec_prev - computed: true, optional: false, required: false
  public get enableMacsecPrev() {
    return this.getBooleanAttribute('enable_macsec_prev');
  }

  // enable_nbm_passive_prev - computed: true, optional: false, required: false
  public get enableNbmPassivePrev() {
    return this.getBooleanAttribute('enable_nbm_passive_prev');
  }

  // enable_netflow - computed: true, optional: false, required: false
  public get enableNetflow() {
    return this.getBooleanAttribute('enable_netflow');
  }

  // enable_netflow_prev - computed: true, optional: false, required: false
  public get enableNetflowPrev() {
    return this.getBooleanAttribute('enable_netflow_prev');
  }

  // enable_ngoam - computed: true, optional: false, required: false
  public get enableNgoam() {
    return this.getBooleanAttribute('enable_ngoam');
  }

  // enable_nxapi - computed: true, optional: false, required: false
  public get enableNxapi() {
    return this.getBooleanAttribute('enable_nxapi');
  }

  // enable_nxapi_http - computed: true, optional: false, required: false
  public get enableNxapiHttp() {
    return this.getBooleanAttribute('enable_nxapi_http');
  }

  // enable_pbr - computed: true, optional: false, required: false
  public get enablePbr() {
    return this.getBooleanAttribute('enable_pbr');
  }

  // enable_pvlan - computed: true, optional: false, required: false
  public get enablePvlan() {
    return this.getBooleanAttribute('enable_pvlan');
  }

  // enable_pvlan_prev - computed: true, optional: false, required: false
  public get enablePvlanPrev() {
    return this.getBooleanAttribute('enable_pvlan_prev');
  }

  // enable_qkd - computed: true, optional: false, required: false
  public get enableQkd() {
    return this.getBooleanAttribute('enable_qkd');
  }

  // enable_real_time_backup - computed: true, optional: false, required: false
  public get enableRealTimeBackup() {
    return this.getBooleanAttribute('enable_real_time_backup');
  }

  // enable_rt_intf_stats - computed: true, optional: false, required: false
  public get enableRtIntfStats() {
    return this.getBooleanAttribute('enable_rt_intf_stats');
  }

  // enable_scheduled_backup - computed: true, optional: false, required: false
  public get enableScheduledBackup() {
    return this.getBooleanAttribute('enable_scheduled_backup');
  }

  // enable_sgt - computed: true, optional: false, required: false
  public get enableSgt() {
    return this.getBooleanAttribute('enable_sgt');
  }

  // enable_sgt_prev - computed: true, optional: false, required: false
  public get enableSgtPrev() {
    return this.getBooleanAttribute('enable_sgt_prev');
  }

  // enable_tenant_dhcp - computed: true, optional: false, required: false
  public get enableTenantDhcp() {
    return this.getBooleanAttribute('enable_tenant_dhcp');
  }

  // enable_trm - computed: true, optional: false, required: false
  public get enableTrm() {
    return this.getBooleanAttribute('enable_trm');
  }

  // enable_trm_trmv6 - computed: true, optional: false, required: false
  public get enableTrmTrmv6() {
    return this.getBooleanAttribute('enable_trm_trmv6');
  }

  // enable_trm_trmv6_prev - computed: true, optional: false, required: false
  public get enableTrmTrmv6Prev() {
    return this.getBooleanAttribute('enable_trm_trmv6_prev');
  }

  // enable_trmv6 - computed: true, optional: false, required: false
  public get enableTrmv6() {
    return this.getBooleanAttribute('enable_trmv6');
  }

  // enable_vpc_peer_link_native_vlan - computed: true, optional: false, required: false
  public get enableVpcPeerLinkNativeVlan() {
    return this.getBooleanAttribute('enable_vpc_peer_link_native_vlan');
  }

  // enable_vri_id_realloc - computed: true, optional: false, required: false
  public get enableVriIdRealloc() {
    return this.getBooleanAttribute('enable_vri_id_realloc');
  }

  // esr_option - computed: true, optional: false, required: false
  public get esrOption() {
    return this.getStringAttribute('esr_option');
  }

  // ext_fabric_type - computed: true, optional: false, required: false
  public get extFabricType() {
    return this.getStringAttribute('ext_fabric_type');
  }

  // extra_conf_intra_links - computed: true, optional: false, required: false
  public get extraConfIntraLinks() {
    return this.getStringAttribute('extra_conf_intra_links');
  }

  // extra_conf_leaf - computed: true, optional: false, required: false
  public get extraConfLeaf() {
    return this.getStringAttribute('extra_conf_leaf');
  }

  // extra_conf_spine - computed: true, optional: false, required: false
  public get extraConfSpine() {
    return this.getStringAttribute('extra_conf_spine');
  }

  // extra_conf_tor - computed: true, optional: false, required: false
  public get extraConfTor() {
    return this.getStringAttribute('extra_conf_tor');
  }

  // fabric_interface_type - computed: true, optional: false, required: false
  public get fabricInterfaceType() {
    return this.getStringAttribute('fabric_interface_type');
  }

  // fabric_mtu - computed: true, optional: false, required: false
  public get fabricMtu() {
    return this.getNumberAttribute('fabric_mtu');
  }

  // fabric_mtu_prev - computed: true, optional: false, required: false
  public get fabricMtuPrev() {
    return this.getNumberAttribute('fabric_mtu_prev');
  }

  // fabric_name - computed: false, optional: false, required: true
  private _fabricName?: string; 
  public get fabricName() {
    return this.getStringAttribute('fabric_name');
  }
  public set fabricName(value: string) {
    this._fabricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricNameInput() {
    return this._fabricName;
  }

  // fabric_technology - computed: true, optional: false, required: false
  public get fabricTechnology() {
    return this.getStringAttribute('fabric_technology');
  }

  // fabric_type - computed: true, optional: false, required: false
  public get fabricType() {
    return this.getStringAttribute('fabric_type');
  }

  // fabric_vpc_domain_id - computed: true, optional: false, required: false
  public get fabricVpcDomainId() {
    return this.getNumberAttribute('fabric_vpc_domain_id');
  }

  // fabric_vpc_domain_id_prev - computed: true, optional: false, required: false
  public get fabricVpcDomainIdPrev() {
    return this.getNumberAttribute('fabric_vpc_domain_id_prev');
  }

  // fabric_vpc_qos - computed: true, optional: false, required: false
  public get fabricVpcQos() {
    return this.getBooleanAttribute('fabric_vpc_qos');
  }

  // fabric_vpc_qos_policy_name - computed: true, optional: false, required: false
  public get fabricVpcQosPolicyName() {
    return this.getStringAttribute('fabric_vpc_qos_policy_name');
  }

  // feature_ptp - computed: true, optional: false, required: false
  public get featurePtp() {
    return this.getBooleanAttribute('feature_ptp');
  }

  // feature_ptp_internal - computed: true, optional: false, required: false
  public get featurePtpInternal() {
    return this.getBooleanAttribute('feature_ptp_internal');
  }

  // ff - computed: true, optional: false, required: false
  public get ff() {
    return this.getStringAttribute('ff');
  }

  // grfield_debug_flag - computed: true, optional: false, required: false
  public get grfieldDebugFlag() {
    return this.getStringAttribute('grfield_debug_flag');
  }

  // hd_time - computed: true, optional: false, required: false
  public get hdTime() {
    return this.getNumberAttribute('hd_time');
  }

  // host_intf_admin_state - computed: true, optional: false, required: false
  public get hostIntfAdminState() {
    return this.getBooleanAttribute('host_intf_admin_state');
  }

  // ibgp_peer_template - computed: true, optional: false, required: false
  public get ibgpPeerTemplate() {
    return this.getStringAttribute('ibgp_peer_template');
  }

  // ibgp_peer_template_leaf - computed: true, optional: false, required: false
  public get ibgpPeerTemplateLeaf() {
    return this.getStringAttribute('ibgp_peer_template_leaf');
  }

  // ignore_cert - computed: true, optional: false, required: false
  public get ignoreCert() {
    return this.getBooleanAttribute('ignore_cert');
  }

  // inband_dhcp_servers - computed: true, optional: false, required: false
  public get inbandDhcpServers() {
    return this.getStringAttribute('inband_dhcp_servers');
  }

  // inband_enable_prev - computed: true, optional: false, required: false
  public get inbandEnablePrev() {
    return this.getBooleanAttribute('inband_enable_prev');
  }

  // inband_mgmt - computed: true, optional: false, required: false
  public get inbandMgmt() {
    return this.getBooleanAttribute('inband_mgmt');
  }

  // inband_mgmt_prev - computed: true, optional: false, required: false
  public get inbandMgmtPrev() {
    return this.getBooleanAttribute('inband_mgmt_prev');
  }

  // interface_ethernet_default_policy - computed: true, optional: false, required: false
  public get interfaceEthernetDefaultPolicy() {
    return this.getStringAttribute('interface_ethernet_default_policy');
  }

  // interface_loopback_default_policy - computed: true, optional: false, required: false
  public get interfaceLoopbackDefaultPolicy() {
    return this.getStringAttribute('interface_loopback_default_policy');
  }

  // interface_port_channel_default_policy - computed: true, optional: false, required: false
  public get interfacePortChannelDefaultPolicy() {
    return this.getStringAttribute('interface_port_channel_default_policy');
  }

  // interface_vlan_default_policy - computed: true, optional: false, required: false
  public get interfaceVlanDefaultPolicy() {
    return this.getStringAttribute('interface_vlan_default_policy');
  }

  // ipv6_anycast_rp_ip_range - computed: true, optional: false, required: false
  public get ipv6AnycastRpIpRange() {
    return this.getStringAttribute('ipv6_anycast_rp_ip_range');
  }

  // ipv6_anycast_rp_ip_range_internal - computed: true, optional: false, required: false
  public get ipv6AnycastRpIpRangeInternal() {
    return this.getStringAttribute('ipv6_anycast_rp_ip_range_internal');
  }

  // ipv6_multicast_group_subnet - computed: true, optional: false, required: false
  public get ipv6MulticastGroupSubnet() {
    return this.getStringAttribute('ipv6_multicast_group_subnet');
  }

  // isis_area_num - computed: true, optional: false, required: false
  public get isisAreaNum() {
    return this.getStringAttribute('isis_area_num');
  }

  // isis_area_num_prev - computed: true, optional: false, required: false
  public get isisAreaNumPrev() {
    return this.getStringAttribute('isis_area_num_prev');
  }

  // isis_auth_enable - computed: true, optional: false, required: false
  public get isisAuthEnable() {
    return this.getBooleanAttribute('isis_auth_enable');
  }

  // isis_auth_key - computed: true, optional: false, required: false
  public get isisAuthKey() {
    return this.getStringAttribute('isis_auth_key');
  }

  // isis_auth_keychain_key_id - computed: true, optional: false, required: false
  public get isisAuthKeychainKeyId() {
    return this.getNumberAttribute('isis_auth_keychain_key_id');
  }

  // isis_auth_keychain_name - computed: true, optional: false, required: false
  public get isisAuthKeychainName() {
    return this.getStringAttribute('isis_auth_keychain_name');
  }

  // isis_level - computed: true, optional: false, required: false
  public get isisLevel() {
    return this.getStringAttribute('isis_level');
  }

  // isis_overload_elapse_time - computed: true, optional: false, required: false
  public get isisOverloadElapseTime() {
    return this.getNumberAttribute('isis_overload_elapse_time');
  }

  // isis_overload_enable - computed: true, optional: false, required: false
  public get isisOverloadEnable() {
    return this.getBooleanAttribute('isis_overload_enable');
  }

  // isis_p2p_enable - computed: true, optional: false, required: false
  public get isisP2PEnable() {
    return this.getBooleanAttribute('isis_p2p_enable');
  }

  // kme_server_ip - computed: true, optional: false, required: false
  public get kmeServerIp() {
    return this.getStringAttribute('kme_server_ip');
  }

  // kme_server_port - computed: true, optional: false, required: false
  public get kmeServerPort() {
    return this.getNumberAttribute('kme_server_port');
  }

  // l2_host_intf_mtu - computed: true, optional: false, required: false
  public get l2HostIntfMtu() {
    return this.getNumberAttribute('l2_host_intf_mtu');
  }

  // l2_host_intf_mtu_prev - computed: true, optional: false, required: false
  public get l2HostIntfMtuPrev() {
    return this.getNumberAttribute('l2_host_intf_mtu_prev');
  }

  // l2_segment_id_range - computed: true, optional: false, required: false
  public get l2SegmentIdRange() {
    return this.getStringAttribute('l2_segment_id_range');
  }

  // l3_partition_id_range - computed: true, optional: false, required: false
  public get l3PartitionIdRange() {
    return this.getStringAttribute('l3_partition_id_range');
  }

  // l3vni_ipv6_mcast_group - computed: true, optional: false, required: false
  public get l3VniIpv6McastGroup() {
    return this.getStringAttribute('l3vni_ipv6_mcast_group');
  }

  // l3vni_mcast_group - computed: true, optional: false, required: false
  public get l3VniMcastGroup() {
    return this.getStringAttribute('l3vni_mcast_group');
  }

  // link_state_routing - computed: true, optional: false, required: false
  public get linkStateRouting() {
    return this.getStringAttribute('link_state_routing');
  }

  // link_state_routing_tag - computed: true, optional: false, required: false
  public get linkStateRoutingTag() {
    return this.getStringAttribute('link_state_routing_tag');
  }

  // link_state_routing_tag_prev - computed: true, optional: false, required: false
  public get linkStateRoutingTagPrev() {
    return this.getStringAttribute('link_state_routing_tag_prev');
  }

  // loopback0_ip_range - computed: true, optional: false, required: false
  public get loopback0IpRange() {
    return this.getStringAttribute('loopback0_ip_range');
  }

  // loopback0_ipv6_range - computed: true, optional: false, required: false
  public get loopback0Ipv6Range() {
    return this.getStringAttribute('loopback0_ipv6_range');
  }

  // loopback100_ipv6_range - computed: true, optional: false, required: false
  public get loopback100Ipv6Range() {
    return this.getStringAttribute('loopback100_ipv6_range');
  }

  // loopback1_ip_range - computed: true, optional: false, required: false
  public get loopback1IpRange() {
    return this.getStringAttribute('loopback1_ip_range');
  }

  // loopback1_ipv6_range - computed: true, optional: false, required: false
  public get loopback1Ipv6Range() {
    return this.getStringAttribute('loopback1_ipv6_range');
  }

  // macsec_algorithm - computed: true, optional: false, required: false
  public get macsecAlgorithm() {
    return this.getStringAttribute('macsec_algorithm');
  }

  // macsec_cipher_suite - computed: true, optional: false, required: false
  public get macsecCipherSuite() {
    return this.getStringAttribute('macsec_cipher_suite');
  }

  // macsec_fallback_algorithm - computed: true, optional: false, required: false
  public get macsecFallbackAlgorithm() {
    return this.getStringAttribute('macsec_fallback_algorithm');
  }

  // macsec_fallback_key_string - computed: true, optional: false, required: false
  public get macsecFallbackKeyString() {
    return this.getStringAttribute('macsec_fallback_key_string');
  }

  // macsec_key_string - computed: true, optional: false, required: false
  public get macsecKeyString() {
    return this.getStringAttribute('macsec_key_string');
  }

  // macsec_report_timer - computed: true, optional: false, required: false
  public get macsecReportTimer() {
    return this.getNumberAttribute('macsec_report_timer');
  }

  // mgmt_gw - computed: true, optional: false, required: false
  public get mgmtGw() {
    return this.getStringAttribute('mgmt_gw');
  }

  // mgmt_gw_internal - computed: true, optional: false, required: false
  public get mgmtGwInternal() {
    return this.getStringAttribute('mgmt_gw_internal');
  }

  // mgmt_prefix - computed: true, optional: false, required: false
  public get mgmtPrefix() {
    return this.getNumberAttribute('mgmt_prefix');
  }

  // mgmt_prefix_internal - computed: true, optional: false, required: false
  public get mgmtPrefixInternal() {
    return this.getNumberAttribute('mgmt_prefix_internal');
  }

  // mgmt_v6prefix - computed: true, optional: false, required: false
  public get mgmtV6Prefix() {
    return this.getNumberAttribute('mgmt_v6prefix');
  }

  // mgmt_v6prefix_internal - computed: true, optional: false, required: false
  public get mgmtV6PrefixInternal() {
    return this.getNumberAttribute('mgmt_v6prefix_internal');
  }

  // mpls_handoff - computed: true, optional: false, required: false
  public get mplsHandoff() {
    return this.getBooleanAttribute('mpls_handoff');
  }

  // mpls_isis_area_num - computed: true, optional: false, required: false
  public get mplsIsisAreaNum() {
    return this.getStringAttribute('mpls_isis_area_num');
  }

  // mpls_isis_area_num_prev - computed: true, optional: false, required: false
  public get mplsIsisAreaNumPrev() {
    return this.getStringAttribute('mpls_isis_area_num_prev');
  }

  // mpls_lb_id - computed: true, optional: false, required: false
  public get mplsLbId() {
    return this.getNumberAttribute('mpls_lb_id');
  }

  // mpls_loopback_ip_range - computed: true, optional: false, required: false
  public get mplsLoopbackIpRange() {
    return this.getStringAttribute('mpls_loopback_ip_range');
  }

  // ms_ifc_bgp_auth_key_type - computed: true, optional: false, required: false
  public get msIfcBgpAuthKeyType() {
    return this.getNumberAttribute('ms_ifc_bgp_auth_key_type');
  }

  // ms_ifc_bgp_auth_key_type_prev - computed: true, optional: false, required: false
  public get msIfcBgpAuthKeyTypePrev() {
    return this.getNumberAttribute('ms_ifc_bgp_auth_key_type_prev');
  }

  // ms_ifc_bgp_password_enable_prev - computed: true, optional: false, required: false
  public get msIfcBgpPasswordEnablePrev() {
    return this.getBooleanAttribute('ms_ifc_bgp_password_enable_prev');
  }

  // ms_ifc_bgp_password_prev - computed: true, optional: false, required: false
  public get msIfcBgpPasswordPrev() {
    return this.getStringAttribute('ms_ifc_bgp_password_prev');
  }

  // mso_connectivity_deployed - computed: true, optional: false, required: false
  public get msoConnectivityDeployed() {
    return this.getStringAttribute('mso_connectivity_deployed');
  }

  // mso_controler_id - computed: true, optional: false, required: false
  public get msoControlerId() {
    return this.getStringAttribute('mso_controler_id');
  }

  // mso_site_group_name - computed: true, optional: false, required: false
  public get msoSiteGroupName() {
    return this.getStringAttribute('mso_site_group_name');
  }

  // mso_site_id - computed: true, optional: false, required: false
  public get msoSiteId() {
    return this.getStringAttribute('mso_site_id');
  }

  // mst_instance_range - computed: true, optional: false, required: false
  public get mstInstanceRange() {
    return this.getStringAttribute('mst_instance_range');
  }

  // multicast_group_subnet - computed: true, optional: false, required: false
  public get multicastGroupSubnet() {
    return this.getStringAttribute('multicast_group_subnet');
  }

  // mvpn_vri_id_range - computed: true, optional: false, required: false
  public get mvpnVriIdRange() {
    return this.getStringAttribute('mvpn_vri_id_range');
  }

  // netflow_exporter_list - computed: true, optional: false, required: false
  public get netflowExporterList() {
    return this.getStringAttribute('netflow_exporter_list');
  }

  // netflow_monitor_list - computed: true, optional: false, required: false
  public get netflowMonitorList() {
    return this.getStringAttribute('netflow_monitor_list');
  }

  // netflow_record_list - computed: true, optional: false, required: false
  public get netflowRecordList() {
    return this.getStringAttribute('netflow_record_list');
  }

  // network_extension_template - computed: true, optional: false, required: false
  public get networkExtensionTemplate() {
    return this.getStringAttribute('network_extension_template');
  }

  // network_vlan_range - computed: true, optional: false, required: false
  public get networkVlanRange() {
    return this.getStringAttribute('network_vlan_range');
  }

  // ntp_server_ip_list - computed: true, optional: false, required: false
  public get ntpServerIpList() {
    return this.getStringAttribute('ntp_server_ip_list');
  }

  // ntp_server_vrf - computed: true, optional: false, required: false
  public get ntpServerVrf() {
    return this.getStringAttribute('ntp_server_vrf');
  }

  // nve_lb_id - computed: true, optional: false, required: false
  public get nveLbId() {
    return this.getNumberAttribute('nve_lb_id');
  }

  // nxapi_http_port - computed: true, optional: false, required: false
  public get nxapiHttpPort() {
    return this.getNumberAttribute('nxapi_http_port');
  }

  // nxapi_https_port - computed: true, optional: false, required: false
  public get nxapiHttpsPort() {
    return this.getNumberAttribute('nxapi_https_port');
  }

  // nxc_dest_vrf - computed: true, optional: false, required: false
  public get nxcDestVrf() {
    return this.getStringAttribute('nxc_dest_vrf');
  }

  // nxc_proxy_port - computed: true, optional: false, required: false
  public get nxcProxyPort() {
    return this.getNumberAttribute('nxc_proxy_port');
  }

  // nxc_proxy_server - computed: true, optional: false, required: false
  public get nxcProxyServer() {
    return this.getStringAttribute('nxc_proxy_server');
  }

  // nxc_src_intf - computed: true, optional: false, required: false
  public get nxcSrcIntf() {
    return this.getStringAttribute('nxc_src_intf');
  }

  // object_tracking_number_range - computed: true, optional: false, required: false
  public get objectTrackingNumberRange() {
    return this.getStringAttribute('object_tracking_number_range');
  }

  // ospf_area_id - computed: true, optional: false, required: false
  public get ospfAreaId() {
    return this.getStringAttribute('ospf_area_id');
  }

  // ospf_auth_enable - computed: true, optional: false, required: false
  public get ospfAuthEnable() {
    return this.getBooleanAttribute('ospf_auth_enable');
  }

  // ospf_auth_key - computed: true, optional: false, required: false
  public get ospfAuthKey() {
    return this.getStringAttribute('ospf_auth_key');
  }

  // ospf_auth_key_id - computed: true, optional: false, required: false
  public get ospfAuthKeyId() {
    return this.getNumberAttribute('ospf_auth_key_id');
  }

  // overlay_mode - computed: true, optional: false, required: false
  public get overlayMode() {
    return this.getStringAttribute('overlay_mode');
  }

  // overlay_mode_prev - computed: true, optional: false, required: false
  public get overlayModePrev() {
    return this.getStringAttribute('overlay_mode_prev');
  }

  // overwrite_global_nxc - computed: true, optional: false, required: false
  public get overwriteGlobalNxc() {
    return this.getBooleanAttribute('overwrite_global_nxc');
  }

  // parent_onemanage_fabric - computed: true, optional: false, required: false
  public get parentOnemanageFabric() {
    return this.getStringAttribute('parent_onemanage_fabric');
  }

  // per_vrf_loopback_auto_provision - computed: true, optional: false, required: false
  public get perVrfLoopbackAutoProvision() {
    return this.getBooleanAttribute('per_vrf_loopback_auto_provision');
  }

  // per_vrf_loopback_auto_provision_prev - computed: true, optional: false, required: false
  public get perVrfLoopbackAutoProvisionPrev() {
    return this.getBooleanAttribute('per_vrf_loopback_auto_provision_prev');
  }

  // per_vrf_loopback_auto_provision_v6 - computed: true, optional: false, required: false
  public get perVrfLoopbackAutoProvisionV6() {
    return this.getBooleanAttribute('per_vrf_loopback_auto_provision_v6');
  }

  // per_vrf_loopback_auto_provision_v6_prev - computed: true, optional: false, required: false
  public get perVrfLoopbackAutoProvisionV6Prev() {
    return this.getBooleanAttribute('per_vrf_loopback_auto_provision_v6_prev');
  }

  // per_vrf_loopback_ip_range - computed: true, optional: false, required: false
  public get perVrfLoopbackIpRange() {
    return this.getStringAttribute('per_vrf_loopback_ip_range');
  }

  // per_vrf_loopback_ip_range_v6 - computed: true, optional: false, required: false
  public get perVrfLoopbackIpRangeV6() {
    return this.getStringAttribute('per_vrf_loopback_ip_range_v6');
  }

  // pfc_watch_int - computed: true, optional: false, required: false
  public get pfcWatchInt() {
    return this.getNumberAttribute('pfc_watch_int');
  }

  // pfc_watch_int_prev - computed: true, optional: false, required: false
  public get pfcWatchIntPrev() {
    return this.getNumberAttribute('pfc_watch_int_prev');
  }

  // phantom_rp_lb_id1 - computed: true, optional: false, required: false
  public get phantomRpLbId1() {
    return this.getNumberAttribute('phantom_rp_lb_id1');
  }

  // phantom_rp_lb_id2 - computed: true, optional: false, required: false
  public get phantomRpLbId2() {
    return this.getNumberAttribute('phantom_rp_lb_id2');
  }

  // phantom_rp_lb_id3 - computed: true, optional: false, required: false
  public get phantomRpLbId3() {
    return this.getNumberAttribute('phantom_rp_lb_id3');
  }

  // phantom_rp_lb_id4 - computed: true, optional: false, required: false
  public get phantomRpLbId4() {
    return this.getNumberAttribute('phantom_rp_lb_id4');
  }

  // pim_hello_auth_enable - computed: true, optional: false, required: false
  public get pimHelloAuthEnable() {
    return this.getBooleanAttribute('pim_hello_auth_enable');
  }

  // pim_hello_auth_key - computed: true, optional: false, required: false
  public get pimHelloAuthKey() {
    return this.getStringAttribute('pim_hello_auth_key');
  }

  // pm_enable - computed: true, optional: false, required: false
  public get pmEnable() {
    return this.getBooleanAttribute('pm_enable');
  }

  // pm_enable_prev - computed: true, optional: false, required: false
  public get pmEnablePrev() {
    return this.getBooleanAttribute('pm_enable_prev');
  }

  // pnp_enable_internal - computed: true, optional: false, required: false
  public get pnpEnableInternal() {
    return this.getBooleanAttribute('pnp_enable_internal');
  }

  // power_redundancy_mode - computed: true, optional: false, required: false
  public get powerRedundancyMode() {
    return this.getStringAttribute('power_redundancy_mode');
  }

  // premso_parent_fabric - computed: true, optional: false, required: false
  public get premsoParentFabric() {
    return this.getStringAttribute('premso_parent_fabric');
  }

  // ptp_domain_id - computed: true, optional: false, required: false
  public get ptpDomainId() {
    return this.getNumberAttribute('ptp_domain_id');
  }

  // ptp_lb_id - computed: true, optional: false, required: false
  public get ptpLbId() {
    return this.getNumberAttribute('ptp_lb_id');
  }

  // ptp_vlan_id - computed: true, optional: false, required: false
  public get ptpVlanId() {
    return this.getNumberAttribute('ptp_vlan_id');
  }

  // qkd_profile_name - computed: true, optional: false, required: false
  public get qkdProfileName() {
    return this.getStringAttribute('qkd_profile_name');
  }

  // qkd_profile_name_prev - computed: true, optional: false, required: false
  public get qkdProfileNamePrev() {
    return this.getBooleanAttribute('qkd_profile_name_prev');
  }

  // replication_mode - computed: true, optional: false, required: false
  public get replicationMode() {
    return this.getStringAttribute('replication_mode');
  }

  // route_map_sequence_number_range - computed: true, optional: false, required: false
  public get routeMapSequenceNumberRange() {
    return this.getStringAttribute('route_map_sequence_number_range');
  }

  // router_id_range - computed: true, optional: false, required: false
  public get routerIdRange() {
    return this.getStringAttribute('router_id_range');
  }

  // rp_count - computed: true, optional: false, required: false
  public get rpCount() {
    return this.getNumberAttribute('rp_count');
  }

  // rp_ip_range_internal - computed: true, optional: false, required: false
  public get rpIpRangeInternal() {
    return this.getStringAttribute('rp_ip_range_internal');
  }

  // rp_lb_id - computed: true, optional: false, required: false
  public get rpLbId() {
    return this.getNumberAttribute('rp_lb_id');
  }

  // rp_mode - computed: true, optional: false, required: false
  public get rpMode() {
    return this.getStringAttribute('rp_mode');
  }

  // rr_count - computed: true, optional: false, required: false
  public get rrCount() {
    return this.getNumberAttribute('rr_count');
  }

  // scheduled_time - computed: true, optional: false, required: false
  public get scheduledTime() {
    return this.getStringAttribute('scheduled_time');
  }

  // seed_switch_core_interfaces - computed: true, optional: false, required: false
  public get seedSwitchCoreInterfaces() {
    return this.getStringAttribute('seed_switch_core_interfaces');
  }

  // service_network_vlan_range - computed: true, optional: false, required: false
  public get serviceNetworkVlanRange() {
    return this.getStringAttribute('service_network_vlan_range');
  }

  // sgt_id_range - computed: true, optional: false, required: false
  public get sgtIdRange() {
    return this.getStringAttribute('sgt_id_range');
  }

  // sgt_id_range_prev - computed: true, optional: false, required: false
  public get sgtIdRangePrev() {
    return this.getStringAttribute('sgt_id_range_prev');
  }

  // sgt_name_prefix - computed: true, optional: false, required: false
  public get sgtNamePrefix() {
    return this.getStringAttribute('sgt_name_prefix');
  }

  // sgt_name_prefix_prev - computed: true, optional: false, required: false
  public get sgtNamePrefixPrev() {
    return this.getStringAttribute('sgt_name_prefix_prev');
  }

  // sgt_oper_status - computed: true, optional: false, required: false
  public get sgtOperStatus() {
    return this.getStringAttribute('sgt_oper_status');
  }

  // sgt_preprov_recalc_status - computed: true, optional: false, required: false
  public get sgtPreprovRecalcStatus() {
    return this.getStringAttribute('sgt_preprov_recalc_status');
  }

  // sgt_preprovision - computed: true, optional: false, required: false
  public get sgtPreprovision() {
    return this.getBooleanAttribute('sgt_preprovision');
  }

  // sgt_preprovision_prev - computed: true, optional: false, required: false
  public get sgtPreprovisionPrev() {
    return this.getBooleanAttribute('sgt_preprovision_prev');
  }

  // sgt_recalc_status - computed: true, optional: false, required: false
  public get sgtRecalcStatus() {
    return this.getStringAttribute('sgt_recalc_status');
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getStringAttribute('site_id');
  }

  // site_id_policy_id - computed: true, optional: false, required: false
  public get siteIdPolicyId() {
    return this.getNumberAttribute('site_id_policy_id');
  }

  // sla_id_range - computed: true, optional: false, required: false
  public get slaIdRange() {
    return this.getStringAttribute('sla_id_range');
  }

  // snmp_server_host_trap - computed: true, optional: false, required: false
  public get snmpServerHostTrap() {
    return this.getBooleanAttribute('snmp_server_host_trap');
  }

  // spine_count - computed: true, optional: false, required: false
  public get spineCount() {
    return this.getNumberAttribute('spine_count');
  }

  // spine_switch_core_interfaces - computed: true, optional: false, required: false
  public get spineSwitchCoreInterfaces() {
    return this.getStringAttribute('spine_switch_core_interfaces');
  }

  // sspine_add_del_debug_flag - computed: true, optional: false, required: false
  public get sspineAddDelDebugFlag() {
    return this.getStringAttribute('sspine_add_del_debug_flag');
  }

  // sspine_count - computed: true, optional: false, required: false
  public get sspineCount() {
    return this.getNumberAttribute('sspine_count');
  }

  // static_underlay_ip_alloc - computed: true, optional: false, required: false
  public get staticUnderlayIpAlloc() {
    return this.getBooleanAttribute('static_underlay_ip_alloc');
  }

  // stp_bridge_priority - computed: true, optional: false, required: false
  public get stpBridgePriority() {
    return this.getNumberAttribute('stp_bridge_priority');
  }

  // stp_root_option - computed: true, optional: false, required: false
  public get stpRootOption() {
    return this.getStringAttribute('stp_root_option');
  }

  // stp_vlan_range - computed: true, optional: false, required: false
  public get stpVlanRange() {
    return this.getStringAttribute('stp_vlan_range');
  }

  // strict_cc_mode - computed: true, optional: false, required: false
  public get strictCcMode() {
    return this.getBooleanAttribute('strict_cc_mode');
  }

  // subinterface_range - computed: true, optional: false, required: false
  public get subinterfaceRange() {
    return this.getStringAttribute('subinterface_range');
  }

  // subnet_range - computed: true, optional: false, required: false
  public get subnetRange() {
    return this.getStringAttribute('subnet_range');
  }

  // subnet_target_mask - computed: true, optional: false, required: false
  public get subnetTargetMask() {
    return this.getNumberAttribute('subnet_target_mask');
  }

  // syslog_server_ip_list - computed: true, optional: false, required: false
  public get syslogServerIpList() {
    return this.getStringAttribute('syslog_server_ip_list');
  }

  // syslog_server_vrf - computed: true, optional: false, required: false
  public get syslogServerVrf() {
    return this.getStringAttribute('syslog_server_vrf');
  }

  // syslog_sev - computed: true, optional: false, required: false
  public get syslogSev() {
    return this.getStringAttribute('syslog_sev');
  }

  // tcam_allocation - computed: true, optional: false, required: false
  public get tcamAllocation() {
    return this.getBooleanAttribute('tcam_allocation');
  }

  // temp_anycast_gateway - computed: true, optional: false, required: false
  public get tempAnycastGateway() {
    return this.getStringAttribute('temp_anycast_gateway');
  }

  // temp_vpc_domain_mgmt - computed: true, optional: false, required: false
  public get tempVpcDomainMgmt() {
    return this.getStringAttribute('temp_vpc_domain_mgmt');
  }

  // temp_vpc_peer_link - computed: true, optional: false, required: false
  public get tempVpcPeerLink() {
    return this.getStringAttribute('temp_vpc_peer_link');
  }

  // topdown_config_rm_tracking - computed: true, optional: false, required: false
  public get topdownConfigRmTracking() {
    return this.getStringAttribute('topdown_config_rm_tracking');
  }

  // trustpoint_label - computed: true, optional: false, required: false
  public get trustpointLabel() {
    return this.getStringAttribute('trustpoint_label');
  }

  // underlay_is_v6 - computed: true, optional: false, required: false
  public get underlayIsV6() {
    return this.getBooleanAttribute('underlay_is_v6');
  }

  // underlay_is_v6_prev - computed: true, optional: false, required: false
  public get underlayIsV6Prev() {
    return this.getBooleanAttribute('underlay_is_v6_prev');
  }

  // unnum_bootstrap_lb_id - computed: true, optional: false, required: false
  public get unnumBootstrapLbId() {
    return this.getNumberAttribute('unnum_bootstrap_lb_id');
  }

  // unnum_dhcp_end - computed: true, optional: false, required: false
  public get unnumDhcpEnd() {
    return this.getStringAttribute('unnum_dhcp_end');
  }

  // unnum_dhcp_end_internal - computed: true, optional: false, required: false
  public get unnumDhcpEndInternal() {
    return this.getStringAttribute('unnum_dhcp_end_internal');
  }

  // unnum_dhcp_start - computed: true, optional: false, required: false
  public get unnumDhcpStart() {
    return this.getStringAttribute('unnum_dhcp_start');
  }

  // unnum_dhcp_start_internal - computed: true, optional: false, required: false
  public get unnumDhcpStartInternal() {
    return this.getStringAttribute('unnum_dhcp_start_internal');
  }

  // upgrade_from_version - computed: true, optional: false, required: false
  public get upgradeFromVersion() {
    return this.getStringAttribute('upgrade_from_version');
  }

  // use_link_local - computed: true, optional: false, required: false
  public get useLinkLocal() {
    return this.getBooleanAttribute('use_link_local');
  }

  // v6_dci_subnet_range - computed: true, optional: false, required: false
  public get v6DciSubnetRange() {
    return this.getStringAttribute('v6_dci_subnet_range');
  }

  // v6_dci_subnet_target_mask - computed: true, optional: false, required: false
  public get v6DciSubnetTargetMask() {
    return this.getNumberAttribute('v6_dci_subnet_target_mask');
  }

  // v6_subnet_range - computed: true, optional: false, required: false
  public get v6SubnetRange() {
    return this.getStringAttribute('v6_subnet_range');
  }

  // v6_subnet_target_mask - computed: true, optional: false, required: false
  public get v6SubnetTargetMask() {
    return this.getNumberAttribute('v6_subnet_target_mask');
  }

  // vpc_auto_recovery_time - computed: true, optional: false, required: false
  public get vpcAutoRecoveryTime() {
    return this.getNumberAttribute('vpc_auto_recovery_time');
  }

  // vpc_delay_restore - computed: true, optional: false, required: false
  public get vpcDelayRestore() {
    return this.getNumberAttribute('vpc_delay_restore');
  }

  // vpc_delay_restore_time - computed: true, optional: false, required: false
  public get vpcDelayRestoreTime() {
    return this.getNumberAttribute('vpc_delay_restore_time');
  }

  // vpc_domain_id_range - computed: true, optional: false, required: false
  public get vpcDomainIdRange() {
    return this.getStringAttribute('vpc_domain_id_range');
  }

  // vpc_enable_ipv6_nd_sync - computed: true, optional: false, required: false
  public get vpcEnableIpv6NdSync() {
    return this.getBooleanAttribute('vpc_enable_ipv6_nd_sync');
  }

  // vpc_peer_keep_alive_option - computed: true, optional: false, required: false
  public get vpcPeerKeepAliveOption() {
    return this.getStringAttribute('vpc_peer_keep_alive_option');
  }

  // vpc_peer_link_po - computed: true, optional: false, required: false
  public get vpcPeerLinkPo() {
    return this.getNumberAttribute('vpc_peer_link_po');
  }

  // vpc_peer_link_vlan - computed: true, optional: false, required: false
  public get vpcPeerLinkVlan() {
    return this.getNumberAttribute('vpc_peer_link_vlan');
  }

  // vrf_extension_template - computed: true, optional: false, required: false
  public get vrfExtensionTemplate() {
    return this.getStringAttribute('vrf_extension_template');
  }

  // vrf_lite_autoconfig - computed: true, optional: false, required: false
  public get vrfLiteAutoconfig() {
    return this.getStringAttribute('vrf_lite_autoconfig');
  }

  // vrf_vlan_range - computed: true, optional: false, required: false
  public get vrfVlanRange() {
    return this.getStringAttribute('vrf_vlan_range');
  }

  // vxlan_underlay_is_v6 - computed: true, optional: false, required: false
  public get vxlanUnderlayIsV6() {
    return this.getBooleanAttribute('vxlan_underlay_is_v6');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fabric_name: cdktf.stringToTerraform(this._fabricName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fabric_name: {
        value: cdktf.stringToHclTerraform(this._fabricName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
