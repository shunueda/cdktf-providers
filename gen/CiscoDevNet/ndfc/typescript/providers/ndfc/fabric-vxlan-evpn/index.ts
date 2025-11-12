// https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FabricVxlanEvpnConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable only, when IP Authorization is enabled in the AAA Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#aaa_remote_ip_enabled FabricVxlanEvpn#aaa_remote_ip_enabled}
  */
  readonly aaaRemoteIpEnabled?: boolean | cdktf.IResolvable;
  /**
  * AAA Configurations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#aaa_server_conf FabricVxlanEvpn#aaa_server_conf}
  */
  readonly aaaServerConf?: string;
  /**
  * Active Migration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#active_migration FabricVxlanEvpn#active_migration}
  */
  readonly activeMigration?: boolean | cdktf.IResolvable;
  /**
  * For Primary VTEP IP Advertisement As Next-Hop Of Prefix Routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#advertise_pip_bgp FabricVxlanEvpn#advertise_pip_bgp}
  */
  readonly advertisePipBgp?: boolean | cdktf.IResolvable;
  /**
  * Enable advertise-pip on vPC borders and border gateways only. Applicable only when vPC advertise-pip is not enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#advertise_pip_on_border FabricVxlanEvpn#advertise_pip_on_border}
  */
  readonly advertisePipOnBorder?: boolean | cdktf.IResolvable;
  /**
  * Interface to connect to Agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#agent_intf FabricVxlanEvpn#agent_intf}
  */
  readonly agentIntf?: string;
  /**
  * Specify one vPC/Port-Channel ID range, this range is used for auto-allocating vPC/Port-Channel IDs for leaf-tor pairings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#agg_acc_vpc_po_id_range FabricVxlanEvpn#agg_acc_vpc_po_id_range}
  */
  readonly aggAccVpcPoIdRange?: string;
  /**
  * Queuing Policy based on predominant fabric link speed: 400G / 100G / 25G
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#ai_ml_qos_policy FabricVxlanEvpn#ai_ml_qos_policy}
  */
  readonly aiMlQosPolicy?: string;
  /**
  * Whether allows L3 VNI configuration without VLAN configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#allow_l3vni_no_vlan FabricVxlanEvpn#allow_l3vni_no_vlan}
  */
  readonly allowL3VniNoVlan?: boolean | cdktf.IResolvable;
  /**
  * Allow onboarding of this fabric to Nexus Cloud
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#allow_nxc FabricVxlanEvpn#allow_nxc}
  */
  readonly allowNxc?: boolean | cdktf.IResolvable;
  /**
  * To advertise Anycast Border Gateway PIP as VTEP. Effective on MSD fabric 'Recalculate Config'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#anycast_bgw_advertise_pip FabricVxlanEvpn#anycast_bgw_advertise_pip}
  */
  readonly anycastBgwAdvertisePip?: boolean | cdktf.IResolvable;
  /**
  * Shared MAC address for all leafs (xxxx.xxxx.xxxx)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#anycast_gw_mac FabricVxlanEvpn#anycast_gw_mac}
  */
  readonly anycastGwMac?: string;
  /**
  * Underlay Anycast Loopback Id - Used for vPC Peering in VXLANv6 Fabrics (Min:0, Max:1023)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#anycast_lb_id FabricVxlanEvpn#anycast_lb_id}
  */
  readonly anycastLbId?: number;
  /**
  * Anycast or Phantom RP IP Address Range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#anycast_rp_ip_range FabricVxlanEvpn#anycast_rp_ip_range}
  */
  readonly anycastRpIpRange?: string;
  /**
  * Whether to auto generate Default VRF interface and BGP peering configuration on managed neighbor devices. If set, auto created VRF Lite IFC links will have 'Auto Deploy Default VRF for Peer' enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#auto_symmetric_default_vrf FabricVxlanEvpn#auto_symmetric_default_vrf}
  */
  readonly autoSymmetricDefaultVrf?: boolean | cdktf.IResolvable;
  /**
  * Whether to auto generate VRF LITE sub-interface and BGP peering configuration on managed neighbor devices. If set, auto created VRF Lite IFC links will have 'Auto Deploy for Peer' enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#auto_symmetric_vrf_lite FabricVxlanEvpn#auto_symmetric_vrf_lite}
  */
  readonly autoSymmetricVrfLite?: boolean | cdktf.IResolvable;
  /**
  * When enabled, IP prefix allocated to the VRF LITE IFC is not reused on VRF extension over VRF LITE IFC. Instead, unique IP Subnet is allocated for each VRF extension over VRF LITE IFC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#auto_unique_vrf_lite_ip_prefix FabricVxlanEvpn#auto_unique_vrf_lite_ip_prefix}
  */
  readonly autoUniqueVrfLiteIpPrefix?: boolean | cdktf.IResolvable;
  /**
  * For IPv4 underlay, whether to auto generate BGP peering in Default VRF for VRF Lite IFC auto deployment option. If set, will auto create VRF Lite Inter-Fabric links with 'Auto Deploy Default VRF' knob enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#auto_vrflite_ifc_default_vrf FabricVxlanEvpn#auto_vrflite_ifc_default_vrf}
  */
  readonly autoVrfliteIfcDefaultVrf?: boolean | cdktf.IResolvable;
  /**
  * Message of the Day (motd) banner. Delimiter char (very first char is delimiter char) followed by message ending with delimiter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#banner FabricVxlanEvpn#banner}
  */
  readonly banner?: string;
  /**
  * Enable BFD Authentication - Valid for P2P Interfaces only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#bfd_auth_enable FabricVxlanEvpn#bfd_auth_enable}
  */
  readonly bfdAuthEnable?: boolean | cdktf.IResolvable;
  /**
  * BFD Authentication Key - Encrypted SHA1 secret value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#bfd_auth_key FabricVxlanEvpn#bfd_auth_key}
  */
  readonly bfdAuthKey?: string;
  /**
  * BFD Authentication Key ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#bfd_auth_key_id FabricVxlanEvpn#bfd_auth_key_id}
  */
  readonly bfdAuthKeyId?: number;
  /**
  * Enable BFD - Valid for IPv4 Underlay only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#bfd_enable FabricVxlanEvpn#bfd_enable}
  */
  readonly bfdEnable?: boolean | cdktf.IResolvable;
  /**
  * Enable BFD For iBGP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#bfd_ibgp_enable FabricVxlanEvpn#bfd_ibgp_enable}
  */
  readonly bfdIbgpEnable?: boolean | cdktf.IResolvable;
  /**
  * Enable BFD For ISIS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#bfd_isis_enable FabricVxlanEvpn#bfd_isis_enable}
  */
  readonly bfdIsisEnable?: boolean | cdktf.IResolvable;
  /**
  * Enable BFD For OSPF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#bfd_ospf_enable FabricVxlanEvpn#bfd_ospf_enable}
  */
  readonly bfdOspfEnable?: boolean | cdktf.IResolvable;
  /**
  * Enable BFD For PIM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#bfd_pim_enable FabricVxlanEvpn#bfd_pim_enable}
  */
  readonly bfdPimEnable?: boolean | cdktf.IResolvable;
  /**
  * 1-4294967295 | 1-65535[.0-65535] It is a good practice to have a unique ASN for each Fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#bgp_as FabricVxlanEvpn#bgp_as}
  */
  readonly bgpAs: string;
  /**
  * Enable BGP Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#bgp_auth_enable FabricVxlanEvpn#bgp_auth_enable}
  */
  readonly bgpAuthEnable?: boolean | cdktf.IResolvable;
  /**
  * BGP Authentication Key - Encrypted BGP Authentication Key based on type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#bgp_auth_key FabricVxlanEvpn#bgp_auth_key}
  */
  readonly bgpAuthKey?: string;
  /**
  * BGP Authentication Key Encryption Type: 3 - 3DES, 7 - Cisco
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#bgp_auth_key_type FabricVxlanEvpn#bgp_auth_key_type}
  */
  readonly bgpAuthKeyType?: number;
  /**
  * Underlay Routing Loopback Id (Min:0, Max:1023)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#bgp_lb_id FabricVxlanEvpn#bgp_lb_id}
  */
  readonly bgpLbId?: number;
  /**
  * Additional CLIs required during device bootup/login e.g. AAA/Radius
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#bootstrap_conf FabricVxlanEvpn#bootstrap_conf}
  */
  readonly bootstrapConf?: string;
  /**
  * Automatic IP Assignment For POAP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#bootstrap_enable FabricVxlanEvpn#bootstrap_enable}
  */
  readonly bootstrapEnable?: boolean | cdktf.IResolvable;
  /**
  * DHCPv4 Multi Subnet Scope - lines with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#bootstrap_multisubnet FabricVxlanEvpn#bootstrap_multisubnet}
  */
  readonly bootstrapMultisubnet?: string;
  /**
  * Only for brf debugging purpose !!!
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#brfield_debug_flag FabricVxlanEvpn#brfield_debug_flag}
  */
  readonly brfieldDebugFlag?: string;
  /**
  * Brownfield Overlay Network Name Format - Generated network name should be < 64 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#brownfield_network_name_format FabricVxlanEvpn#brownfield_network_name_format}
  */
  readonly brownfieldNetworkNameFormat?: string;
  /**
  * Enable to skip overlay network interface attachments for Brownfield and Host Port Resync cases
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#brownfield_skip_overlay_network_attachments FabricVxlanEvpn#brownfield_skip_overlay_network_attachments}
  */
  readonly brownfieldSkipOverlayNetworkAttachments?: boolean | cdktf.IResolvable;
  /**
  * Enable CDP for Bootstrapped Switch - Enable CDP on management interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#cdp_enable FabricVxlanEvpn#cdp_enable}
  */
  readonly cdpEnable?: boolean | cdktf.IResolvable;
  /**
  * Fabric Wide CoPP Policy. Customized CoPP policy should be provided when 'manual' is selected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#copp_policy FabricVxlanEvpn#copp_policy}
  */
  readonly coppPolicy?: string;
  /**
  * AES_128_CMAC or AES_256_CMAC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#dci_macsec_algorithm FabricVxlanEvpn#dci_macsec_algorithm}
  */
  readonly dciMacsecAlgorithm?: string;
  /**
  * Configure Cipher Suite
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#dci_macsec_cipher_suite FabricVxlanEvpn#dci_macsec_cipher_suite}
  */
  readonly dciMacsecCipherSuite?: string;
  /**
  * AES_128_CMAC or AES_256_CMAC. This parameter is used when DCI link has QKD disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#dci_macsec_fallback_algorithm FabricVxlanEvpn#dci_macsec_fallback_algorithm}
  */
  readonly dciMacsecFallbackAlgorithm?: string;
  /**
  * Cisco Type 7 Encrypted Octet String. This parameter is used when DCI link has QKD disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#dci_macsec_fallback_key_string FabricVxlanEvpn#dci_macsec_fallback_key_string}
  */
  readonly dciMacsecFallbackKeyString?: string;
  /**
  * Cisco Type 7 Encrypted Octet String
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#dci_macsec_key_string FabricVxlanEvpn#dci_macsec_key_string}
  */
  readonly dciMacsecKeyString?: string;
  /**
  * Address range to assign P2P Interfabric Connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#dci_subnet_range FabricVxlanEvpn#dci_subnet_range}
  */
  readonly dciSubnetRange?: string;
  /**
  * VRF Lite Subnet Mask (Min:8, Max:31)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#dci_subnet_target_mask FabricVxlanEvpn#dci_subnet_target_mask}
  */
  readonly dciSubnetTargetMask?: number;
  /**
  * Default Overlay Network Template For Leafs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#default_network FabricVxlanEvpn#default_network}
  */
  readonly defaultNetwork?: string;
  /**
  * Default PVLAN Secondary Network Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#default_pvlan_sec_network FabricVxlanEvpn#default_pvlan_sec_network}
  */
  readonly defaultPvlanSecNetwork?: string;
  /**
  * Queuing Policy for all 92xx, -EX, -FX, -FX2, -FX3, -GX series switches in the fabric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#default_queuing_policy_cloudscale FabricVxlanEvpn#default_queuing_policy_cloudscale}
  */
  readonly defaultQueuingPolicyCloudscale?: string;
  /**
  * Queuing Policy for all other switches in the fabric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#default_queuing_policy_other FabricVxlanEvpn#default_queuing_policy_other}
  */
  readonly defaultQueuingPolicyOther?: string;
  /**
  * Queuing Policy for all R-Series switches in the fabric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#default_queuing_policy_r_series FabricVxlanEvpn#default_queuing_policy_r_series}
  */
  readonly defaultQueuingPolicyRSeries?: string;
  /**
  * Default Overlay VRF Template For Leafs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#default_vrf FabricVxlanEvpn#default_vrf}
  */
  readonly defaultVrf?: string;
  /**
  * Route Map used to redistribute BGP routes to IGP in default vrf in auto created VRF Lite IFC links
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#default_vrf_redis_bgp_rmap FabricVxlanEvpn#default_vrf_redis_bgp_rmap}
  */
  readonly defaultVrfRedisBgpRmap?: string;
  /**
  * This flag does configuration save and deploy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#deploy FabricVxlanEvpn#deploy}
  */
  readonly deploy: boolean | cdktf.IResolvable;
  /**
  * Disable all deployments in this fabric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#deployment_freeze FabricVxlanEvpn#deployment_freeze}
  */
  readonly deploymentFreeze?: boolean | cdktf.IResolvable;
  /**
  * Automatic IP Assignment For POAP From Local DHCP Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#dhcp_enable FabricVxlanEvpn#dhcp_enable}
  */
  readonly dhcpEnable?: boolean | cdktf.IResolvable;
  /**
  * End Address For Switch POAP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#dhcp_end FabricVxlanEvpn#dhcp_end}
  */
  readonly dhcpEnd?: string;
  /**
  * DHCP Version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#dhcp_ipv6_enable FabricVxlanEvpn#dhcp_ipv6_enable}
  */
  readonly dhcpIpv6Enable?: string;
  /**
  * Start Address For Switch POAP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#dhcp_start FabricVxlanEvpn#dhcp_start}
  */
  readonly dhcpStart?: string;
  /**
  * Comma separated list of IP Addresses (v4/v6)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#dns_server_ip_list FabricVxlanEvpn#dns_server_ip_list}
  */
  readonly dnsServerIpList?: string;
  /**
  * One VRF for all DNS servers or a comma separated list of VRFs, one per DNS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#dns_server_vrf FabricVxlanEvpn#dns_server_vrf}
  */
  readonly dnsServerVrf?: string;
  /**
  * Include AAA configs from Manageability tab during device bootup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#enable_aaa FabricVxlanEvpn#enable_aaa}
  */
  readonly enableAaa?: boolean | cdktf.IResolvable;
  /**
  * Enable Agnet (development purpose only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#enable_agent FabricVxlanEvpn#enable_agent}
  */
  readonly enableAgent?: boolean | cdktf.IResolvable;
  /**
  * Use specific vPC/Port-channel ID range for leaf-tor pairings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#enable_agg_acc_id_range FabricVxlanEvpn#enable_agg_acc_id_range}
  */
  readonly enableAggAccIdRange?: boolean | cdktf.IResolvable;
  /**
  * Configures QoS and Queuing Policies specific to N9K Cloud Scale switch fabric for AI/ML network loads
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#enable_ai_ml_qos_policy FabricVxlanEvpn#enable_ai_ml_qos_policy}
  */
  readonly enableAiMlQosPolicy?: boolean | cdktf.IResolvable;
  /**
  * Enable DCI MACsec - Enable MACsec on DCI links. DCI MACsec fabric parameters are used for configuring MACsec on a DCI link if 'Use Link MACsec Setting' is disabled on the link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#enable_dci_macsec FabricVxlanEvpn#enable_dci_macsec}
  */
  readonly enableDciMacsec?: boolean | cdktf.IResolvable;
  /**
  * Enable Default Queuing Policies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#enable_default_queuing_policy FabricVxlanEvpn#enable_default_queuing_policy}
  */
  readonly enableDefaultQueuingPolicy?: boolean | cdktf.IResolvable;
  /**
  * Enable the same vPC Domain Id for all vPC Pairs (Not Recommended)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#enable_fabric_vpc_domain_id FabricVxlanEvpn#enable_fabric_vpc_domain_id}
  */
  readonly enableFabricVpcDomainId?: boolean | cdktf.IResolvable;
  /**
  * L3 VNI configuration without VLAN configuration. This value is propagated on vrf creation as the default value of 'Enable L3VNI w/o VLAN' in vrf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#enable_l3vni_no_vlan FabricVxlanEvpn#enable_l3vni_no_vlan}
  */
  readonly enableL3VniNoVlan?: boolean | cdktf.IResolvable;
  /**
  * Enable MACsec - Enable MACsec in the fabric. MACsec fabric parameters are used for configuring MACsec on a fabric link if MACsec is enabled on the link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#enable_macsec FabricVxlanEvpn#enable_macsec}
  */
  readonly enableMacsec?: boolean | cdktf.IResolvable;
  /**
  * Enable Netflow on VTEPs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#enable_netflow FabricVxlanEvpn#enable_netflow}
  */
  readonly enableNetflow?: boolean | cdktf.IResolvable;
  /**
  * Enable VXLAN OAM - Enable the Next Generation (NG) OAM feature for all switches in the fabric to aid in trouble-shooting VXLAN EVPN fabrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#enable_ngoam FabricVxlanEvpn#enable_ngoam}
  */
  readonly enableNgoam?: boolean | cdktf.IResolvable;
  /**
  * Enable NX-API - Enable HTTPS NX-API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#enable_nxapi FabricVxlanEvpn#enable_nxapi}
  */
  readonly enableNxapi?: boolean | cdktf.IResolvable;
  /**
  * Enable HTTP NX-API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#enable_nxapi_http FabricVxlanEvpn#enable_nxapi_http}
  */
  readonly enableNxapiHttp?: boolean | cdktf.IResolvable;
  /**
  * Enable feature pbr, sla sender, epbr, or enable feature pbr, based on the L4-L7 Services use case
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#enable_pbr FabricVxlanEvpn#enable_pbr}
  */
  readonly enablePbr?: boolean | cdktf.IResolvable;
  /**
  * Enable Private VLAN (PVLAN) - Enable PVLAN on switches except spines and super spines
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#enable_pvlan FabricVxlanEvpn#enable_pvlan}
  */
  readonly enablePvlan?: boolean | cdktf.IResolvable;
  /**
  * Enable QKD - Enable DCI MACsec with QKD config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#enable_qkd FabricVxlanEvpn#enable_qkd}
  */
  readonly enableQkd?: boolean | cdktf.IResolvable;
  /**
  * Backup hourly only if there is any config deployment since last backup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#enable_real_time_backup FabricVxlanEvpn#enable_real_time_backup}
  */
  readonly enableRealTimeBackup?: boolean | cdktf.IResolvable;
  /**
  * Enable Real Time Interface Statistics Collection - Valid for NX-OS only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#enable_rt_intf_stats FabricVxlanEvpn#enable_rt_intf_stats}
  */
  readonly enableRtIntfStats?: boolean | cdktf.IResolvable;
  /**
  * Backup at the specified time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#enable_scheduled_backup FabricVxlanEvpn#enable_scheduled_backup}
  */
  readonly enableScheduledBackup?: boolean | cdktf.IResolvable;
  /**
  * Enable Security Groups - Security group can be enabled only with V4 underlay and CLI overlay mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#enable_sgt FabricVxlanEvpn#enable_sgt}
  */
  readonly enableSgt?: boolean | cdktf.IResolvable;
  /**
  * Enable Tenant DHCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#enable_tenant_dhcp FabricVxlanEvpn#enable_tenant_dhcp}
  */
  readonly enableTenantDhcp?: boolean | cdktf.IResolvable;
  /**
  * For Overlay IPv4 Multicast Support In VXLAN Fabrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#enable_trm FabricVxlanEvpn#enable_trm}
  */
  readonly enableTrm?: boolean | cdktf.IResolvable;
  /**
  * For Overlay IPv6 Multicast Support In VXLAN Fabrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#enable_trmv6 FabricVxlanEvpn#enable_trmv6}
  */
  readonly enableTrmv6?: boolean | cdktf.IResolvable;
  /**
  * Make vPC Peer Link VLAN as Native VLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#enable_vpc_peer_link_native_vlan FabricVxlanEvpn#enable_vpc_peer_link_native_vlan}
  */
  readonly enableVpcPeerLinkNativeVlan?: boolean | cdktf.IResolvable;
  /**
  * One time VRI ID re-allocation based on 'MVPN VRI ID Range'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#enable_vri_id_realloc FabricVxlanEvpn#enable_vri_id_realloc}
  */
  readonly enableVriIdRealloc?: boolean | cdktf.IResolvable;
  /**
  * Policy-Based Routing (PBR) or Enhanced PBR (ePBR)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#esr_option FabricVxlanEvpn#esr_option}
  */
  readonly esrOption?: string;
  /**
  * External Fabric Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#ext_fabric_type FabricVxlanEvpn#ext_fabric_type}
  */
  readonly extFabricType?: string;
  /**
  * Additional CLIs For All Intra-Fabric Links
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#extra_conf_intra_links FabricVxlanEvpn#extra_conf_intra_links}
  */
  readonly extraConfIntraLinks?: string;
  /**
  * Additional CLIs For All Leafs As Captured From Show Running Configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#extra_conf_leaf FabricVxlanEvpn#extra_conf_leaf}
  */
  readonly extraConfLeaf?: string;
  /**
  * Additional CLIs For All Spines As Captured From Show Running Configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#extra_conf_spine FabricVxlanEvpn#extra_conf_spine}
  */
  readonly extraConfSpine?: string;
  /**
  * Additional CLIs For All ToRs As Captured From Show Running Configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#extra_conf_tor FabricVxlanEvpn#extra_conf_tor}
  */
  readonly extraConfTor?: string;
  /**
  * Fabric Interface Numbering - Numbered(Point-to-Point) or Unnumbered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#fabric_interface_type FabricVxlanEvpn#fabric_interface_type}
  */
  readonly fabricInterfaceType?: string;
  /**
  * Intra Fabric Interface MTU (Min:576, Max:9216). Must be an even number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#fabric_mtu FabricVxlanEvpn#fabric_mtu}
  */
  readonly fabricMtu?: number;
  /**
  * Fabric name to be created, updated or deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#fabric_name FabricVxlanEvpn#fabric_name}
  */
  readonly fabricName: string;
  /**
  * vPC Domain Id to be used on all vPC pairs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#fabric_vpc_domain_id FabricVxlanEvpn#fabric_vpc_domain_id}
  */
  readonly fabricVpcDomainId?: number;
  /**
  * Qos on spines for guaranteed delivery of vPC Fabric Peering communication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#fabric_vpc_qos FabricVxlanEvpn#fabric_vpc_qos}
  */
  readonly fabricVpcQos?: boolean | cdktf.IResolvable;
  /**
  * Qos Policy name should be same on all spines
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#fabric_vpc_qos_policy_name FabricVxlanEvpn#fabric_vpc_qos_policy_name}
  */
  readonly fabricVpcQosPolicyName?: string;
  /**
  * Enable Precision Time Protocol (PTP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#feature_ptp FabricVxlanEvpn#feature_ptp}
  */
  readonly featurePtp?: boolean | cdktf.IResolvable;
  /**
  * Template Family
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#ff FabricVxlanEvpn#ff}
  */
  readonly ff?: string;
  /**
  * Greenfield Cleanup Option - Enable to clean switch configuration without reload when PreserveConfig=no
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#grfield_debug_flag FabricVxlanEvpn#grfield_debug_flag}
  */
  readonly grfieldDebugFlag?: string;
  /**
  * NVE Source Interface HoldDown Time (Min:1, Max:1500) in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#hd_time FabricVxlanEvpn#hd_time}
  */
  readonly hdTime?: number;
  /**
  * Unshut Host Interfaces by Default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#host_intf_admin_state FabricVxlanEvpn#host_intf_admin_state}
  */
  readonly hostIntfAdminState?: boolean | cdktf.IResolvable;
  /**
  * iBGP Peer-Template Config - Specifies the iBGP Peer-Template config used for RR and spines with border role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#ibgp_peer_template FabricVxlanEvpn#ibgp_peer_template}
  */
  readonly ibgpPeerTemplate?: string;
  /**
  * Leaf/Border/Border Gateway iBGP Peer-Template Config - Specifies the config used for leaf, border or border gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#ibgp_peer_template_leaf FabricVxlanEvpn#ibgp_peer_template_leaf}
  */
  readonly ibgpPeerTemplateLeaf?: string;
  /**
  * Skip verification of incoming certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#ignore_cert FabricVxlanEvpn#ignore_cert}
  */
  readonly ignoreCert?: boolean | cdktf.IResolvable;
  /**
  * Comma separated list of IPv4 Addresses (Max 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#inband_dhcp_servers FabricVxlanEvpn#inband_dhcp_servers}
  */
  readonly inbandDhcpServers?: string;
  /**
  * Manage switches with only Inband connectivity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#inband_mgmt FabricVxlanEvpn#inband_mgmt}
  */
  readonly inbandMgmt?: boolean | cdktf.IResolvable;
  /**
  * Interface Statistics Load Interval - Time in seconds (Min:5, Max:300)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#intf_stat_load_interval FabricVxlanEvpn#intf_stat_load_interval}
  */
  readonly intfStatLoadInterval?: number;
  /**
  * Anycast RP IPv6 Address Range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#ipv6_anycast_rp_ip_range FabricVxlanEvpn#ipv6_anycast_rp_ip_range}
  */
  readonly ipv6AnycastRpIpRange?: string;
  /**
  * IPv6 Multicast Group Subnet - IPv6 Multicast address with prefix 112 to 128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#ipv6_multicast_group_subnet FabricVxlanEvpn#ipv6_multicast_group_subnet}
  */
  readonly ipv6MulticastGroupSubnet?: string;
  /**
  * IS-IS NET Area Number - NET in form of XX.<4-hex-digit Custom Area Number>.XXXX.XXXX.XXXX.00
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#isis_area_num FabricVxlanEvpn#isis_area_num}
  */
  readonly isisAreaNum?: string;
  /**
  * Enable IS-IS Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#isis_auth_enable FabricVxlanEvpn#isis_auth_enable}
  */
  readonly isisAuthEnable?: boolean | cdktf.IResolvable;
  /**
  * IS-IS Authentication Key - Cisco Type 7 Encrypted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#isis_auth_key FabricVxlanEvpn#isis_auth_key}
  */
  readonly isisAuthKey?: string;
  /**
  * IS-IS Authentication Key ID (Min:0, Max:*****)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#isis_auth_keychain_key_id FabricVxlanEvpn#isis_auth_keychain_key_id}
  */
  readonly isisAuthKeychainKeyId?: number;
  /**
  * IS-IS Authentication Keychain Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#isis_auth_keychain_name FabricVxlanEvpn#isis_auth_keychain_name}
  */
  readonly isisAuthKeychainName?: string;
  /**
  * IS-IS Level - Supported IS types: level-1, level-2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#isis_level FabricVxlanEvpn#isis_level}
  */
  readonly isisLevel?: string;
  /**
  * IS-IS Overload Bit Elapsed Time - Clear the overload bit after an elapsed time in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#isis_overload_elapse_time FabricVxlanEvpn#isis_overload_elapse_time}
  */
  readonly isisOverloadElapseTime?: number;
  /**
  * Set IS-IS Overload Bit - When enabled, set the overload bit for an elapsed time after a reload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#isis_overload_enable FabricVxlanEvpn#isis_overload_enable}
  */
  readonly isisOverloadEnable?: boolean | cdktf.IResolvable;
  /**
  * Enable IS-IS Network Point-to-Point - This will enable network point-to-point on fabric interfaces which are numbered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#isis_p2p_enable FabricVxlanEvpn#isis_p2p_enable}
  */
  readonly isisP2PEnable?: boolean | cdktf.IResolvable;
  /**
  * Key Management Entity server IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#kme_server_ip FabricVxlanEvpn#kme_server_ip}
  */
  readonly kmeServerIp?: string;
  /**
  * Key Management Entity server port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#kme_server_port FabricVxlanEvpn#kme_server_port}
  */
  readonly kmeServerPort?: number;
  /**
  * Layer 2 Host Interface MTU (Min:1500, Max:9216). Must be an even number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#l2_host_intf_mtu FabricVxlanEvpn#l2_host_intf_mtu}
  */
  readonly l2HostIntfMtu?: number;
  /**
  * Overlay Network Identifier Range (Min:1, Max:16777214)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#l2_segment_id_range FabricVxlanEvpn#l2_segment_id_range}
  */
  readonly l2SegmentIdRange?: string;
  /**
  * Overlay VRF Identifier Range (Min:1, Max:16777214)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#l3_partition_id_range FabricVxlanEvpn#l3_partition_id_range}
  */
  readonly l3PartitionIdRange?: string;
  /**
  * Default MDT IPv6 Address for TRM VRFs - Default Underlay Multicast group IP6 address assigned for every overlay VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#l3vni_ipv6_mcast_group FabricVxlanEvpn#l3vni_ipv6_mcast_group}
  */
  readonly l3VniIpv6McastGroup?: string;
  /**
  * Default MDT IPv4 Address for TRM VRFs - Default Underlay Multicast group IPv4 address assigned for every overlay VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#l3vni_mcast_group FabricVxlanEvpn#l3vni_mcast_group}
  */
  readonly l3VniMcastGroup?: string;
  /**
  * Underlay Routing Protocol - Used for Spine-Leaf Connectivity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#link_state_routing FabricVxlanEvpn#link_state_routing}
  */
  readonly linkStateRouting?: string;
  /**
  * Underlay Routing Protocol Tag - Underlay Routing Process Tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#link_state_routing_tag FabricVxlanEvpn#link_state_routing_tag}
  */
  readonly linkStateRoutingTag?: string;
  /**
  * Typically Loopback0 IP Address Range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#loopback0_ip_range FabricVxlanEvpn#loopback0_ip_range}
  */
  readonly loopback0IpRange?: string;
  /**
  * Typically Loopback0 IPv6 Address Range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#loopback0_ipv6_range FabricVxlanEvpn#loopback0_ipv6_range}
  */
  readonly loopback0Ipv6Range?: string;
  /**
  * Typically Loopback1 IP Address Range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#loopback1_ip_range FabricVxlanEvpn#loopback1_ip_range}
  */
  readonly loopback1IpRange?: string;
  /**
  * Typically Loopback1 and Anycast Loopback IPv6 Address Range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#loopback1_ipv6_range FabricVxlanEvpn#loopback1_ipv6_range}
  */
  readonly loopback1Ipv6Range?: string;
  /**
  * MACsec Primary Cryptographic Algorithm - AES_128_CMAC or AES_256_CMAC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#macsec_algorithm FabricVxlanEvpn#macsec_algorithm}
  */
  readonly macsecAlgorithm?: string;
  /**
  * MACsec Cipher Suite - Configure Cipher Suite
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#macsec_cipher_suite FabricVxlanEvpn#macsec_cipher_suite}
  */
  readonly macsecCipherSuite?: string;
  /**
  * MACsec Fallback Cryptographic Algorithm - AES_128_CMAC or AES_256_CMAC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#macsec_fallback_algorithm FabricVxlanEvpn#macsec_fallback_algorithm}
  */
  readonly macsecFallbackAlgorithm?: string;
  /**
  * MACsec Fallback Key String - Cisco Type 7 Encrypted Octet String
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#macsec_fallback_key_string FabricVxlanEvpn#macsec_fallback_key_string}
  */
  readonly macsecFallbackKeyString?: string;
  /**
  * MACsec Primary Key String - Cisco Type 7 Encrypted Octet String
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#macsec_key_string FabricVxlanEvpn#macsec_key_string}
  */
  readonly macsecKeyString?: string;
  /**
  * MACsec Status Report Timer - MACsec Operational Status periodic report timer in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#macsec_report_timer FabricVxlanEvpn#macsec_report_timer}
  */
  readonly macsecReportTimer?: number;
  /**
  * Default Gateway For Management VRF On The Switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#mgmt_gw FabricVxlanEvpn#mgmt_gw}
  */
  readonly mgmtGw?: string;
  /**
  * Switch Mgmt IP Subnet Prefix (Min:8, Max:30)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#mgmt_prefix FabricVxlanEvpn#mgmt_prefix}
  */
  readonly mgmtPrefix?: number;
  /**
  * Switch Mgmt IPv6 Subnet Prefix (Min:64, Max:126)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#mgmt_v6prefix FabricVxlanEvpn#mgmt_v6prefix}
  */
  readonly mgmtV6Prefix?: number;
  /**
  * Enable MPLS Handoff
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#mpls_handoff FabricVxlanEvpn#mpls_handoff}
  */
  readonly mplsHandoff?: boolean | cdktf.IResolvable;
  /**
  * IS-IS NET Area Number for MPLS Handoff - NET in form of XX.<4-hex-digit Custom Area Number>.XXXX.XXXX.XXXX.00
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#mpls_isis_area_num FabricVxlanEvpn#mpls_isis_area_num}
  */
  readonly mplsIsisAreaNum?: string;
  /**
  * Underlay MPLS Loopback Id - Used for VXLAN to MPLS SR/LDP Handoff (Min:0, Max:1023)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#mpls_lb_id FabricVxlanEvpn#mpls_lb_id}
  */
  readonly mplsLbId?: number;
  /**
  * Used for VXLAN to MPLS SR/LDP Handoff
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#mpls_loopback_ip_range FabricVxlanEvpn#mpls_loopback_ip_range}
  */
  readonly mplsLoopbackIpRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#mst_instance_range FabricVxlanEvpn#mst_instance_range}
  */
  readonly mstInstanceRange?: string;
  /**
  * Multicast Group Subnet - Multicast pool prefix between 8 to 30. A multicast group IP from this pool is used for BUM traffic for each overlay network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#multicast_group_subnet FabricVxlanEvpn#multicast_group_subnet}
  */
  readonly multicastGroupSubnet?: string;
  /**
  * MVPN VRI ID for vPC, applicable when TRM is enabled with IPv6 underlay, or TRM is enabled with IPv4 underlay while fabric allows L3VNI without VLAN option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#mvpn_vri_id_range FabricVxlanEvpn#mvpn_vri_id_range}
  */
  readonly mvpnVriIdRange?: string;
  /**
  * One or Multiple Netflow Exporters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#netflow_exporter_list FabricVxlanEvpn#netflow_exporter_list}
  */
  readonly netflowExporterList?: string;
  /**
  * One or Multiple Netflow Monitors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#netflow_monitor_list FabricVxlanEvpn#netflow_monitor_list}
  */
  readonly netflowMonitorList?: string;
  /**
  * One or Multiple Netflow Records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#netflow_record_list FabricVxlanEvpn#netflow_record_list}
  */
  readonly netflowRecordList?: string;
  /**
  * Default Overlay Network Template For Borders
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#network_extension_template FabricVxlanEvpn#network_extension_template}
  */
  readonly networkExtensionTemplate?: string;
  /**
  * Per Switch Overlay Network VLAN Range (Min:2, Max:4094)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#network_vlan_range FabricVxlanEvpn#network_vlan_range}
  */
  readonly networkVlanRange?: string;
  /**
  * Comma separated list of IP Addresses (v4/v6)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#ntp_server_ip_list FabricVxlanEvpn#ntp_server_ip_list}
  */
  readonly ntpServerIpList?: string;
  /**
  * One VRF for all NTP servers or a comma separated list of VRFs, one per NTP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#ntp_server_vrf FabricVxlanEvpn#ntp_server_vrf}
  */
  readonly ntpServerVrf?: string;
  /**
  * Underlay VTEP Loopback Id (Min:0, Max:1023)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#nve_lb_id FabricVxlanEvpn#nve_lb_id}
  */
  readonly nveLbId?: number;
  /**
  * NX-API HTTP Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#nxapi_http_port FabricVxlanEvpn#nxapi_http_port}
  */
  readonly nxapiHttpPort?: number;
  /**
  * NX-API HTTPS Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#nxapi_https_port FabricVxlanEvpn#nxapi_https_port}
  */
  readonly nxapiHttpsPort?: number;
  /**
  * VRF to be used to reach Nexus Cloud, enter 'management' for management VRF and 'default' for default VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#nxc_dest_vrf FabricVxlanEvpn#nxc_dest_vrf}
  */
  readonly nxcDestVrf?: string;
  /**
  * Proxy port number, default is 8080
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#nxc_proxy_port FabricVxlanEvpn#nxc_proxy_port}
  */
  readonly nxcProxyPort?: number;
  /**
  * IPv4 or IPv6 address, or DNS name of the proxy server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#nxc_proxy_server FabricVxlanEvpn#nxc_proxy_server}
  */
  readonly nxcProxyServer?: string;
  /**
  * Source interface for communication to Nexus Cloud, mandatory if Destination VRF is not management, supported interfaces: loopback, port-channel, vlan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#nxc_src_intf FabricVxlanEvpn#nxc_src_intf}
  */
  readonly nxcSrcIntf?: string;
  /**
  * Tracked Object ID Range - Per switch tracked object ID Range (Min:1, Max:512)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#object_tracking_number_range FabricVxlanEvpn#object_tracking_number_range}
  */
  readonly objectTrackingNumberRange?: string;
  /**
  * OSPF Area Id in IP address format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#ospf_area_id FabricVxlanEvpn#ospf_area_id}
  */
  readonly ospfAreaId?: string;
  /**
  * Enable OSPF Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#ospf_auth_enable FabricVxlanEvpn#ospf_auth_enable}
  */
  readonly ospfAuthEnable?: boolean | cdktf.IResolvable;
  /**
  * OSPF Authentication Key - 3DES Encrypted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#ospf_auth_key FabricVxlanEvpn#ospf_auth_key}
  */
  readonly ospfAuthKey?: string;
  /**
  * OSPF Authentication Key ID (Min:0, Max:255)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#ospf_auth_key_id FabricVxlanEvpn#ospf_auth_key_id}
  */
  readonly ospfAuthKeyId?: number;
  /**
  * Overlay Mode - VRF/Network configuration using config-profile or CLI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#overlay_mode FabricVxlanEvpn#overlay_mode}
  */
  readonly overlayMode?: string;
  /**
  * If enabled, Fabric NxCloud Settings will be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#overwrite_global_nxc FabricVxlanEvpn#overwrite_global_nxc}
  */
  readonly overwriteGlobalNxc?: boolean | cdktf.IResolvable;
  /**
  * Per VRF Per VTEP Loopback IPv4 Auto-Provisioning - Auto provision a loopback IPv4 on a VTEP on VRF attachment. Note: Enabling this option auto-provisions loopback on existing VRF attachments also when Edit, QuickAttach, or Multiattach actions are performed. Provisioned loopbacks cannot be deleted until VRFs are unattached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#per_vrf_loopback_auto_provision FabricVxlanEvpn#per_vrf_loopback_auto_provision}
  */
  readonly perVrfLoopbackAutoProvision?: boolean | cdktf.IResolvable;
  /**
  * Auto provision a loopback IPv6 on a VTEP on VRF attachment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#per_vrf_loopback_auto_provision_v6 FabricVxlanEvpn#per_vrf_loopback_auto_provision_v6}
  */
  readonly perVrfLoopbackAutoProvisionV6?: boolean | cdktf.IResolvable;
  /**
  * Prefix pool to assign IPv4 addresses to loopbacks on VTEPs on a per VRF basis
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#per_vrf_loopback_ip_range FabricVxlanEvpn#per_vrf_loopback_ip_range}
  */
  readonly perVrfLoopbackIpRange?: string;
  /**
  * Prefix pool to assign IPv6 addresses to loopbacks on VTEPs on a per VRF basis
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#per_vrf_loopback_ip_range_v6 FabricVxlanEvpn#per_vrf_loopback_ip_range_v6}
  */
  readonly perVrfLoopbackIpRangeV6?: string;
  /**
  * Priority flow control watch-dog interval - Acceptable values from 101 to 1000 (milliseconds). Leave blank for system default (100ms).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#pfc_watch_int FabricVxlanEvpn#pfc_watch_int}
  */
  readonly pfcWatchInt?: number;
  /**
  * Underlay Primary RP Loopback Id - Used for Bidir-PIM Phantom RP (Min:0, Max:1023)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#phantom_rp_lb_id1 FabricVxlanEvpn#phantom_rp_lb_id1}
  */
  readonly phantomRpLbId1?: number;
  /**
  * Underlay Backup RP Loopback Id - Used for Fallback Bidir-PIM Phantom RP (Min:0, Max:1023)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#phantom_rp_lb_id2 FabricVxlanEvpn#phantom_rp_lb_id2}
  */
  readonly phantomRpLbId2?: number;
  /**
  * Underlay Second Backup RP Loopback Id - Used for second Fallback Bidir-PIM Phantom RP (Min:0, Max:1023)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#phantom_rp_lb_id3 FabricVxlanEvpn#phantom_rp_lb_id3}
  */
  readonly phantomRpLbId3?: number;
  /**
  * Underlay Third Backup RP Loopback Id - Used for third Fallback Bidir-PIM Phantom RP (Min:0, Max:1023)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#phantom_rp_lb_id4 FabricVxlanEvpn#phantom_rp_lb_id4}
  */
  readonly phantomRpLbId4?: number;
  /**
  * Enable PIM Hello Authentication - Valid for IPv4 Underlay only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#pim_hello_auth_enable FabricVxlanEvpn#pim_hello_auth_enable}
  */
  readonly pimHelloAuthEnable?: boolean | cdktf.IResolvable;
  /**
  * PIM Hello Authentication Key - 3DES Encrypted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#pim_hello_auth_key FabricVxlanEvpn#pim_hello_auth_key}
  */
  readonly pimHelloAuthKey?: string;
  /**
  * Enable Performance Monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#pm_enable FabricVxlanEvpn#pm_enable}
  */
  readonly pmEnable?: boolean | cdktf.IResolvable;
  /**
  * Default Power Supply Mode For The Fabric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#power_redundancy_mode FabricVxlanEvpn#power_redundancy_mode}
  */
  readonly powerRedundancyMode?: string;
  /**
  * PTP Domain Id - Multiple Independent PTP Clocking Subdomains on a Single Network (Min:0, Max:127)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#ptp_domain_id FabricVxlanEvpn#ptp_domain_id}
  */
  readonly ptpDomainId?: number;
  /**
  * PTP Source Loopback Id (Min:0, Max:1023)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#ptp_lb_id FabricVxlanEvpn#ptp_lb_id}
  */
  readonly ptpLbId?: number;
  /**
  * (Min:2, Max:3967) SVI used for PTP source on ToRs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#ptp_vlan_id FabricVxlanEvpn#ptp_vlan_id}
  */
  readonly ptpVlanId?: number;
  /**
  * Name of crypto profile (Max Size 63)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#qkd_profile_name FabricVxlanEvpn#qkd_profile_name}
  */
  readonly qkdProfileName?: string;
  /**
  * Replication Mode for BUM Traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#replication_mode FabricVxlanEvpn#replication_mode}
  */
  readonly replicationMode?: string;
  /**
  * Route Map Sequence Number Range (Min:1, Max:65534)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#route_map_sequence_number_range FabricVxlanEvpn#route_map_sequence_number_range}
  */
  readonly routeMapSequenceNumberRange?: string;
  /**
  * BGP Router ID Range for IPv6 Underlay - IPv4 Address Range for BGP Router Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#router_id_range FabricVxlanEvpn#router_id_range}
  */
  readonly routerIdRange?: string;
  /**
  * Number of spines acting as Rendezvous-Point (RP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#rp_count FabricVxlanEvpn#rp_count}
  */
  readonly rpCount?: number;
  /**
  * Underlay RP Loopback Id (Min:0, Max:1023)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#rp_lb_id FabricVxlanEvpn#rp_lb_id}
  */
  readonly rpLbId?: number;
  /**
  * Multicast RP Mode. For IPv6 underlay, please use asm only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#rp_mode FabricVxlanEvpn#rp_mode}
  */
  readonly rpMode?: string;
  /**
  * Number of spines acting as Route-Reflectors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#rr_count FabricVxlanEvpn#rr_count}
  */
  readonly rrCount?: number;
  /**
  * Time (UTC) in 24hr format. (00:00 to 23:59)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#scheduled_time FabricVxlanEvpn#scheduled_time}
  */
  readonly scheduledTime?: string;
  /**
  * Core-facing Interface list on Seed Switch (e.g. e1/1-30,e1/32)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#seed_switch_core_interfaces FabricVxlanEvpn#seed_switch_core_interfaces}
  */
  readonly seedSwitchCoreInterfaces?: string;
  /**
  * Per Switch Overlay Service Network VLAN Range (Min:2, Max:4094)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#service_network_vlan_range FabricVxlanEvpn#service_network_vlan_range}
  */
  readonly serviceNetworkVlanRange?: string;
  /**
  * Security Group Tag (SGT) ID Range - Min:16, Max:65535. Reserved Range: 0-15
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#sgt_id_range FabricVxlanEvpn#sgt_id_range}
  */
  readonly sgtIdRange?: string;
  /**
  * Security Group Name Prefix - Prefix to be used when a new Security Group is created (Min:1, Max:10 characters)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#sgt_name_prefix FabricVxlanEvpn#sgt_name_prefix}
  */
  readonly sgtNamePrefix?: string;
  /**
  * Security Groups Pre-provision - Generate security groups configuration for non-enforced VRFs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#sgt_preprovision FabricVxlanEvpn#sgt_preprovision}
  */
  readonly sgtPreprovision?: boolean | cdktf.IResolvable;
  /**
  * For EVPN Multi-Site Support (Min:1, Max:281474976710655). Defaults to Fabric ASN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#site_id FabricVxlanEvpn#site_id}
  */
  readonly siteId?: string;
  /**
  * Service Level Agreement (SLA) ID Range - Per switch SLA ID Range (Min:1, Max:2147483647)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#sla_id_range FabricVxlanEvpn#sla_id_range}
  */
  readonly slaIdRange?: string;
  /**
  * Configure NDFC as a receiver for SNMP traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#snmp_server_host_trap FabricVxlanEvpn#snmp_server_host_trap}
  */
  readonly snmpServerHostTrap?: boolean | cdktf.IResolvable;
  /**
  * Core-facing Interface list on all Spines (e.g. e1/1-30,e1/32)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#spine_switch_core_interfaces FabricVxlanEvpn#spine_switch_core_interfaces}
  */
  readonly spineSwitchCoreInterfaces?: string;
  /**
  * Allow First Super Spine Add or Last Super Spine Delete From Topology
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#sspine_add_del_debug_flag FabricVxlanEvpn#sspine_add_del_debug_flag}
  */
  readonly sspineAddDelDebugFlag?: string;
  /**
  * Manual Underlay IP Address Allocation - Checking this will disable Dynamic Underlay IP Address Allocations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#static_underlay_ip_alloc FabricVxlanEvpn#static_underlay_ip_alloc}
  */
  readonly staticUnderlayIpAlloc?: boolean | cdktf.IResolvable;
  /**
  * Spanning Tree Bridge Priority - Bridge priority for the spanning tree in increments of 4096
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#stp_bridge_priority FabricVxlanEvpn#stp_bridge_priority}
  */
  readonly stpBridgePriority?: number;
  /**
  * Which protocol to use for configuring root bridge? rpvst+: Rapid Per-VLAN Spanning Tree, mst: Multiple Spanning Tree, unmanaged (default): STP Root not managed by NDFC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#stp_root_option FabricVxlanEvpn#stp_root_option}
  */
  readonly stpRootOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#stp_vlan_range FabricVxlanEvpn#stp_vlan_range}
  */
  readonly stpVlanRange?: string;
  /**
  * Enable bi-directional compliance checks to flag additional configs in the running config that are not in the intent/expected config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#strict_cc_mode FabricVxlanEvpn#strict_cc_mode}
  */
  readonly strictCcMode?: boolean | cdktf.IResolvable;
  /**
  * Per Border Dot1q Range For VRF Lite Connectivity (Min:2, Max:4093)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#subinterface_range FabricVxlanEvpn#subinterface_range}
  */
  readonly subinterfaceRange?: string;
  /**
  * Address range to assign Numbered and Peer Link SVI IPs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#subnet_range FabricVxlanEvpn#subnet_range}
  */
  readonly subnetRange?: string;
  /**
  * Underlay Subnet IP Mask - Mask for Underlay Subnet IP Range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#subnet_target_mask FabricVxlanEvpn#subnet_target_mask}
  */
  readonly subnetTargetMask?: number;
  /**
  * Comma separated list of IP Addresses (v4/v6)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#syslog_server_ip_list FabricVxlanEvpn#syslog_server_ip_list}
  */
  readonly syslogServerIpList?: string;
  /**
  * One VRF for all Syslog servers or a comma separated list of VRFs, one per Syslog server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#syslog_server_vrf FabricVxlanEvpn#syslog_server_vrf}
  */
  readonly syslogServerVrf?: string;
  /**
  * Comma separated list of Syslog severity values, one per Syslog server (Min:0, Max:7)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#syslog_sev FabricVxlanEvpn#syslog_sev}
  */
  readonly syslogSev?: string;
  /**
  * Enable TCAM Allocation - TCAM commands are automatically generated for VxLAN and vPC Fabric Peering when Enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#tcam_allocation FabricVxlanEvpn#tcam_allocation}
  */
  readonly tcamAllocation?: boolean | cdktf.IResolvable;
  /**
  * Tls authentication type trustpoint label (Max Size 64)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#trustpoint_label FabricVxlanEvpn#trustpoint_label}
  */
  readonly trustpointLabel?: string;
  /**
  * Enable IPv6 Underlay - If not enabled, IPv4 underlay is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#underlay_is_v6 FabricVxlanEvpn#underlay_is_v6}
  */
  readonly underlayIsV6?: boolean | cdktf.IResolvable;
  /**
  * Bootstrap Seed Switch Loopback Interface ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#unnum_bootstrap_lb_id FabricVxlanEvpn#unnum_bootstrap_lb_id}
  */
  readonly unnumBootstrapLbId?: number;
  /**
  * Enable IPv6 Link-Local Address - If not enabled, Spine-Leaf interfaces will use global IPv6 addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#use_link_local FabricVxlanEvpn#use_link_local}
  */
  readonly useLinkLocal?: boolean | cdktf.IResolvable;
  /**
  * IPv6 Address range to assign Numbered and Peer Link SVI IPs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#v6_subnet_range FabricVxlanEvpn#v6_subnet_range}
  */
  readonly v6SubnetRange?: string;
  /**
  * Underlay Subnet IPv6 Mask - Mask for Underlay Subnet IPv6 Range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#v6_subnet_target_mask FabricVxlanEvpn#v6_subnet_target_mask}
  */
  readonly v6SubnetTargetMask?: number;
  /**
  * vPC Auto Recovery Time (In Seconds) (Min:240, Max:3600)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#vpc_auto_recovery_time FabricVxlanEvpn#vpc_auto_recovery_time}
  */
  readonly vpcAutoRecoveryTime?: number;
  /**
  * vPC Delay Restore Time (In Seconds) (Min:1, Max:3600)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#vpc_delay_restore FabricVxlanEvpn#vpc_delay_restore}
  */
  readonly vpcDelayRestore?: number;
  /**
  * vPC Delay Restore Time For vPC links in seconds (Min:1, Max:3600)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#vpc_delay_restore_time FabricVxlanEvpn#vpc_delay_restore_time}
  */
  readonly vpcDelayRestoreTime?: number;
  /**
  * vPC Domain id range to use for new pairings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#vpc_domain_id_range FabricVxlanEvpn#vpc_domain_id_range}
  */
  readonly vpcDomainIdRange?: string;
  /**
  * Enable IPv6 ND synchronization between vPC peers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#vpc_enable_ipv6_nd_sync FabricVxlanEvpn#vpc_enable_ipv6_nd_sync}
  */
  readonly vpcEnableIpv6NdSync?: boolean | cdktf.IResolvable;
  /**
  * Use vPC Peer Keep Alive with Loopback or Management
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#vpc_peer_keep_alive_option FabricVxlanEvpn#vpc_peer_keep_alive_option}
  */
  readonly vpcPeerKeepAliveOption?: string;
  /**
  * vPC Peer Link Port Channel ID (Min:1, Max:4096)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#vpc_peer_link_po FabricVxlanEvpn#vpc_peer_link_po}
  */
  readonly vpcPeerLinkPo?: number;
  /**
  * VLAN range for vPC Peer Link SVI (Min:2, Max:4094)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#vpc_peer_link_vlan FabricVxlanEvpn#vpc_peer_link_vlan}
  */
  readonly vpcPeerLinkVlan?: number;
  /**
  * Default Overlay VRF Template For Borders
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#vrf_extension_template FabricVxlanEvpn#vrf_extension_template}
  */
  readonly vrfExtensionTemplate?: string;
  /**
  * VRF Lite Inter-Fabric Connection Deployment Options. If 'Back2Back&ToExternal' is selected, VRF Lite IFCs are auto created between border devices of two Easy Fabrics, and between border devices in Easy Fabric and edge routers in External Fabric. The IP address is taken from the 'VRF Lite Subnet IP Range' pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#vrf_lite_autoconfig FabricVxlanEvpn#vrf_lite_autoconfig}
  */
  readonly vrfLiteAutoconfig?: string;
  /**
  * Per Switch Overlay VRF VLAN Range (Min:2, Max:4094)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#vrf_vlan_range FabricVxlanEvpn#vrf_vlan_range}
  */
  readonly vrfVlanRange?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn ndfc_fabric_vxlan_evpn}
*/
export class FabricVxlanEvpn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ndfc_fabric_vxlan_evpn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FabricVxlanEvpn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FabricVxlanEvpn to import
  * @param importFromId The id of the existing FabricVxlanEvpn that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FabricVxlanEvpn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ndfc_fabric_vxlan_evpn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_vxlan_evpn ndfc_fabric_vxlan_evpn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FabricVxlanEvpnConfig
  */
  public constructor(scope: Construct, id: string, config: FabricVxlanEvpnConfig) {
    super(scope, id, {
      terraformResourceType: 'ndfc_fabric_vxlan_evpn',
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
    this._aaaRemoteIpEnabled = config.aaaRemoteIpEnabled;
    this._aaaServerConf = config.aaaServerConf;
    this._activeMigration = config.activeMigration;
    this._advertisePipBgp = config.advertisePipBgp;
    this._advertisePipOnBorder = config.advertisePipOnBorder;
    this._agentIntf = config.agentIntf;
    this._aggAccVpcPoIdRange = config.aggAccVpcPoIdRange;
    this._aiMlQosPolicy = config.aiMlQosPolicy;
    this._allowL3VniNoVlan = config.allowL3VniNoVlan;
    this._allowNxc = config.allowNxc;
    this._anycastBgwAdvertisePip = config.anycastBgwAdvertisePip;
    this._anycastGwMac = config.anycastGwMac;
    this._anycastLbId = config.anycastLbId;
    this._anycastRpIpRange = config.anycastRpIpRange;
    this._autoSymmetricDefaultVrf = config.autoSymmetricDefaultVrf;
    this._autoSymmetricVrfLite = config.autoSymmetricVrfLite;
    this._autoUniqueVrfLiteIpPrefix = config.autoUniqueVrfLiteIpPrefix;
    this._autoVrfliteIfcDefaultVrf = config.autoVrfliteIfcDefaultVrf;
    this._banner = config.banner;
    this._bfdAuthEnable = config.bfdAuthEnable;
    this._bfdAuthKey = config.bfdAuthKey;
    this._bfdAuthKeyId = config.bfdAuthKeyId;
    this._bfdEnable = config.bfdEnable;
    this._bfdIbgpEnable = config.bfdIbgpEnable;
    this._bfdIsisEnable = config.bfdIsisEnable;
    this._bfdOspfEnable = config.bfdOspfEnable;
    this._bfdPimEnable = config.bfdPimEnable;
    this._bgpAs = config.bgpAs;
    this._bgpAuthEnable = config.bgpAuthEnable;
    this._bgpAuthKey = config.bgpAuthKey;
    this._bgpAuthKeyType = config.bgpAuthKeyType;
    this._bgpLbId = config.bgpLbId;
    this._bootstrapConf = config.bootstrapConf;
    this._bootstrapEnable = config.bootstrapEnable;
    this._bootstrapMultisubnet = config.bootstrapMultisubnet;
    this._brfieldDebugFlag = config.brfieldDebugFlag;
    this._brownfieldNetworkNameFormat = config.brownfieldNetworkNameFormat;
    this._brownfieldSkipOverlayNetworkAttachments = config.brownfieldSkipOverlayNetworkAttachments;
    this._cdpEnable = config.cdpEnable;
    this._coppPolicy = config.coppPolicy;
    this._dciMacsecAlgorithm = config.dciMacsecAlgorithm;
    this._dciMacsecCipherSuite = config.dciMacsecCipherSuite;
    this._dciMacsecFallbackAlgorithm = config.dciMacsecFallbackAlgorithm;
    this._dciMacsecFallbackKeyString = config.dciMacsecFallbackKeyString;
    this._dciMacsecKeyString = config.dciMacsecKeyString;
    this._dciSubnetRange = config.dciSubnetRange;
    this._dciSubnetTargetMask = config.dciSubnetTargetMask;
    this._defaultNetwork = config.defaultNetwork;
    this._defaultPvlanSecNetwork = config.defaultPvlanSecNetwork;
    this._defaultQueuingPolicyCloudscale = config.defaultQueuingPolicyCloudscale;
    this._defaultQueuingPolicyOther = config.defaultQueuingPolicyOther;
    this._defaultQueuingPolicyRSeries = config.defaultQueuingPolicyRSeries;
    this._defaultVrf = config.defaultVrf;
    this._defaultVrfRedisBgpRmap = config.defaultVrfRedisBgpRmap;
    this._deploy = config.deploy;
    this._deploymentFreeze = config.deploymentFreeze;
    this._dhcpEnable = config.dhcpEnable;
    this._dhcpEnd = config.dhcpEnd;
    this._dhcpIpv6Enable = config.dhcpIpv6Enable;
    this._dhcpStart = config.dhcpStart;
    this._dnsServerIpList = config.dnsServerIpList;
    this._dnsServerVrf = config.dnsServerVrf;
    this._enableAaa = config.enableAaa;
    this._enableAgent = config.enableAgent;
    this._enableAggAccIdRange = config.enableAggAccIdRange;
    this._enableAiMlQosPolicy = config.enableAiMlQosPolicy;
    this._enableDciMacsec = config.enableDciMacsec;
    this._enableDefaultQueuingPolicy = config.enableDefaultQueuingPolicy;
    this._enableFabricVpcDomainId = config.enableFabricVpcDomainId;
    this._enableL3VniNoVlan = config.enableL3VniNoVlan;
    this._enableMacsec = config.enableMacsec;
    this._enableNetflow = config.enableNetflow;
    this._enableNgoam = config.enableNgoam;
    this._enableNxapi = config.enableNxapi;
    this._enableNxapiHttp = config.enableNxapiHttp;
    this._enablePbr = config.enablePbr;
    this._enablePvlan = config.enablePvlan;
    this._enableQkd = config.enableQkd;
    this._enableRealTimeBackup = config.enableRealTimeBackup;
    this._enableRtIntfStats = config.enableRtIntfStats;
    this._enableScheduledBackup = config.enableScheduledBackup;
    this._enableSgt = config.enableSgt;
    this._enableTenantDhcp = config.enableTenantDhcp;
    this._enableTrm = config.enableTrm;
    this._enableTrmv6 = config.enableTrmv6;
    this._enableVpcPeerLinkNativeVlan = config.enableVpcPeerLinkNativeVlan;
    this._enableVriIdRealloc = config.enableVriIdRealloc;
    this._esrOption = config.esrOption;
    this._extFabricType = config.extFabricType;
    this._extraConfIntraLinks = config.extraConfIntraLinks;
    this._extraConfLeaf = config.extraConfLeaf;
    this._extraConfSpine = config.extraConfSpine;
    this._extraConfTor = config.extraConfTor;
    this._fabricInterfaceType = config.fabricInterfaceType;
    this._fabricMtu = config.fabricMtu;
    this._fabricName = config.fabricName;
    this._fabricVpcDomainId = config.fabricVpcDomainId;
    this._fabricVpcQos = config.fabricVpcQos;
    this._fabricVpcQosPolicyName = config.fabricVpcQosPolicyName;
    this._featurePtp = config.featurePtp;
    this._ff = config.ff;
    this._grfieldDebugFlag = config.grfieldDebugFlag;
    this._hdTime = config.hdTime;
    this._hostIntfAdminState = config.hostIntfAdminState;
    this._ibgpPeerTemplate = config.ibgpPeerTemplate;
    this._ibgpPeerTemplateLeaf = config.ibgpPeerTemplateLeaf;
    this._ignoreCert = config.ignoreCert;
    this._inbandDhcpServers = config.inbandDhcpServers;
    this._inbandMgmt = config.inbandMgmt;
    this._intfStatLoadInterval = config.intfStatLoadInterval;
    this._ipv6AnycastRpIpRange = config.ipv6AnycastRpIpRange;
    this._ipv6MulticastGroupSubnet = config.ipv6MulticastGroupSubnet;
    this._isisAreaNum = config.isisAreaNum;
    this._isisAuthEnable = config.isisAuthEnable;
    this._isisAuthKey = config.isisAuthKey;
    this._isisAuthKeychainKeyId = config.isisAuthKeychainKeyId;
    this._isisAuthKeychainName = config.isisAuthKeychainName;
    this._isisLevel = config.isisLevel;
    this._isisOverloadElapseTime = config.isisOverloadElapseTime;
    this._isisOverloadEnable = config.isisOverloadEnable;
    this._isisP2PEnable = config.isisP2PEnable;
    this._kmeServerIp = config.kmeServerIp;
    this._kmeServerPort = config.kmeServerPort;
    this._l2HostIntfMtu = config.l2HostIntfMtu;
    this._l2SegmentIdRange = config.l2SegmentIdRange;
    this._l3PartitionIdRange = config.l3PartitionIdRange;
    this._l3VniIpv6McastGroup = config.l3VniIpv6McastGroup;
    this._l3VniMcastGroup = config.l3VniMcastGroup;
    this._linkStateRouting = config.linkStateRouting;
    this._linkStateRoutingTag = config.linkStateRoutingTag;
    this._loopback0IpRange = config.loopback0IpRange;
    this._loopback0Ipv6Range = config.loopback0Ipv6Range;
    this._loopback1IpRange = config.loopback1IpRange;
    this._loopback1Ipv6Range = config.loopback1Ipv6Range;
    this._macsecAlgorithm = config.macsecAlgorithm;
    this._macsecCipherSuite = config.macsecCipherSuite;
    this._macsecFallbackAlgorithm = config.macsecFallbackAlgorithm;
    this._macsecFallbackKeyString = config.macsecFallbackKeyString;
    this._macsecKeyString = config.macsecKeyString;
    this._macsecReportTimer = config.macsecReportTimer;
    this._mgmtGw = config.mgmtGw;
    this._mgmtPrefix = config.mgmtPrefix;
    this._mgmtV6Prefix = config.mgmtV6Prefix;
    this._mplsHandoff = config.mplsHandoff;
    this._mplsIsisAreaNum = config.mplsIsisAreaNum;
    this._mplsLbId = config.mplsLbId;
    this._mplsLoopbackIpRange = config.mplsLoopbackIpRange;
    this._mstInstanceRange = config.mstInstanceRange;
    this._multicastGroupSubnet = config.multicastGroupSubnet;
    this._mvpnVriIdRange = config.mvpnVriIdRange;
    this._netflowExporterList = config.netflowExporterList;
    this._netflowMonitorList = config.netflowMonitorList;
    this._netflowRecordList = config.netflowRecordList;
    this._networkExtensionTemplate = config.networkExtensionTemplate;
    this._networkVlanRange = config.networkVlanRange;
    this._ntpServerIpList = config.ntpServerIpList;
    this._ntpServerVrf = config.ntpServerVrf;
    this._nveLbId = config.nveLbId;
    this._nxapiHttpPort = config.nxapiHttpPort;
    this._nxapiHttpsPort = config.nxapiHttpsPort;
    this._nxcDestVrf = config.nxcDestVrf;
    this._nxcProxyPort = config.nxcProxyPort;
    this._nxcProxyServer = config.nxcProxyServer;
    this._nxcSrcIntf = config.nxcSrcIntf;
    this._objectTrackingNumberRange = config.objectTrackingNumberRange;
    this._ospfAreaId = config.ospfAreaId;
    this._ospfAuthEnable = config.ospfAuthEnable;
    this._ospfAuthKey = config.ospfAuthKey;
    this._ospfAuthKeyId = config.ospfAuthKeyId;
    this._overlayMode = config.overlayMode;
    this._overwriteGlobalNxc = config.overwriteGlobalNxc;
    this._perVrfLoopbackAutoProvision = config.perVrfLoopbackAutoProvision;
    this._perVrfLoopbackAutoProvisionV6 = config.perVrfLoopbackAutoProvisionV6;
    this._perVrfLoopbackIpRange = config.perVrfLoopbackIpRange;
    this._perVrfLoopbackIpRangeV6 = config.perVrfLoopbackIpRangeV6;
    this._pfcWatchInt = config.pfcWatchInt;
    this._phantomRpLbId1 = config.phantomRpLbId1;
    this._phantomRpLbId2 = config.phantomRpLbId2;
    this._phantomRpLbId3 = config.phantomRpLbId3;
    this._phantomRpLbId4 = config.phantomRpLbId4;
    this._pimHelloAuthEnable = config.pimHelloAuthEnable;
    this._pimHelloAuthKey = config.pimHelloAuthKey;
    this._pmEnable = config.pmEnable;
    this._powerRedundancyMode = config.powerRedundancyMode;
    this._ptpDomainId = config.ptpDomainId;
    this._ptpLbId = config.ptpLbId;
    this._ptpVlanId = config.ptpVlanId;
    this._qkdProfileName = config.qkdProfileName;
    this._replicationMode = config.replicationMode;
    this._routeMapSequenceNumberRange = config.routeMapSequenceNumberRange;
    this._routerIdRange = config.routerIdRange;
    this._rpCount = config.rpCount;
    this._rpLbId = config.rpLbId;
    this._rpMode = config.rpMode;
    this._rrCount = config.rrCount;
    this._scheduledTime = config.scheduledTime;
    this._seedSwitchCoreInterfaces = config.seedSwitchCoreInterfaces;
    this._serviceNetworkVlanRange = config.serviceNetworkVlanRange;
    this._sgtIdRange = config.sgtIdRange;
    this._sgtNamePrefix = config.sgtNamePrefix;
    this._sgtPreprovision = config.sgtPreprovision;
    this._siteId = config.siteId;
    this._slaIdRange = config.slaIdRange;
    this._snmpServerHostTrap = config.snmpServerHostTrap;
    this._spineSwitchCoreInterfaces = config.spineSwitchCoreInterfaces;
    this._sspineAddDelDebugFlag = config.sspineAddDelDebugFlag;
    this._staticUnderlayIpAlloc = config.staticUnderlayIpAlloc;
    this._stpBridgePriority = config.stpBridgePriority;
    this._stpRootOption = config.stpRootOption;
    this._stpVlanRange = config.stpVlanRange;
    this._strictCcMode = config.strictCcMode;
    this._subinterfaceRange = config.subinterfaceRange;
    this._subnetRange = config.subnetRange;
    this._subnetTargetMask = config.subnetTargetMask;
    this._syslogServerIpList = config.syslogServerIpList;
    this._syslogServerVrf = config.syslogServerVrf;
    this._syslogSev = config.syslogSev;
    this._tcamAllocation = config.tcamAllocation;
    this._trustpointLabel = config.trustpointLabel;
    this._underlayIsV6 = config.underlayIsV6;
    this._unnumBootstrapLbId = config.unnumBootstrapLbId;
    this._useLinkLocal = config.useLinkLocal;
    this._v6SubnetRange = config.v6SubnetRange;
    this._v6SubnetTargetMask = config.v6SubnetTargetMask;
    this._vpcAutoRecoveryTime = config.vpcAutoRecoveryTime;
    this._vpcDelayRestore = config.vpcDelayRestore;
    this._vpcDelayRestoreTime = config.vpcDelayRestoreTime;
    this._vpcDomainIdRange = config.vpcDomainIdRange;
    this._vpcEnableIpv6NdSync = config.vpcEnableIpv6NdSync;
    this._vpcPeerKeepAliveOption = config.vpcPeerKeepAliveOption;
    this._vpcPeerLinkPo = config.vpcPeerLinkPo;
    this._vpcPeerLinkVlan = config.vpcPeerLinkVlan;
    this._vrfExtensionTemplate = config.vrfExtensionTemplate;
    this._vrfLiteAutoconfig = config.vrfLiteAutoconfig;
    this._vrfVlanRange = config.vrfVlanRange;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aaa_remote_ip_enabled - computed: true, optional: true, required: false
  private _aaaRemoteIpEnabled?: boolean | cdktf.IResolvable; 
  public get aaaRemoteIpEnabled() {
    return this.getBooleanAttribute('aaa_remote_ip_enabled');
  }
  public set aaaRemoteIpEnabled(value: boolean | cdktf.IResolvable) {
    this._aaaRemoteIpEnabled = value;
  }
  public resetAaaRemoteIpEnabled() {
    this._aaaRemoteIpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaaRemoteIpEnabledInput() {
    return this._aaaRemoteIpEnabled;
  }

  // aaa_server_conf - computed: true, optional: true, required: false
  private _aaaServerConf?: string; 
  public get aaaServerConf() {
    return this.getStringAttribute('aaa_server_conf');
  }
  public set aaaServerConf(value: string) {
    this._aaaServerConf = value;
  }
  public resetAaaServerConf() {
    this._aaaServerConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaaServerConfInput() {
    return this._aaaServerConf;
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

  // active_migration - computed: true, optional: true, required: false
  private _activeMigration?: boolean | cdktf.IResolvable; 
  public get activeMigration() {
    return this.getBooleanAttribute('active_migration');
  }
  public set activeMigration(value: boolean | cdktf.IResolvable) {
    this._activeMigration = value;
  }
  public resetActiveMigration() {
    this._activeMigration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeMigrationInput() {
    return this._activeMigration;
  }

  // advertise_pip_bgp - computed: true, optional: true, required: false
  private _advertisePipBgp?: boolean | cdktf.IResolvable; 
  public get advertisePipBgp() {
    return this.getBooleanAttribute('advertise_pip_bgp');
  }
  public set advertisePipBgp(value: boolean | cdktf.IResolvable) {
    this._advertisePipBgp = value;
  }
  public resetAdvertisePipBgp() {
    this._advertisePipBgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisePipBgpInput() {
    return this._advertisePipBgp;
  }

  // advertise_pip_on_border - computed: true, optional: true, required: false
  private _advertisePipOnBorder?: boolean | cdktf.IResolvable; 
  public get advertisePipOnBorder() {
    return this.getBooleanAttribute('advertise_pip_on_border');
  }
  public set advertisePipOnBorder(value: boolean | cdktf.IResolvable) {
    this._advertisePipOnBorder = value;
  }
  public resetAdvertisePipOnBorder() {
    this._advertisePipOnBorder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisePipOnBorderInput() {
    return this._advertisePipOnBorder;
  }

  // agent_intf - computed: true, optional: true, required: false
  private _agentIntf?: string; 
  public get agentIntf() {
    return this.getStringAttribute('agent_intf');
  }
  public set agentIntf(value: string) {
    this._agentIntf = value;
  }
  public resetAgentIntf() {
    this._agentIntf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIntfInput() {
    return this._agentIntf;
  }

  // agg_acc_vpc_po_id_range - computed: true, optional: true, required: false
  private _aggAccVpcPoIdRange?: string; 
  public get aggAccVpcPoIdRange() {
    return this.getStringAttribute('agg_acc_vpc_po_id_range');
  }
  public set aggAccVpcPoIdRange(value: string) {
    this._aggAccVpcPoIdRange = value;
  }
  public resetAggAccVpcPoIdRange() {
    this._aggAccVpcPoIdRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggAccVpcPoIdRangeInput() {
    return this._aggAccVpcPoIdRange;
  }

  // ai_ml_qos_policy - computed: true, optional: true, required: false
  private _aiMlQosPolicy?: string; 
  public get aiMlQosPolicy() {
    return this.getStringAttribute('ai_ml_qos_policy');
  }
  public set aiMlQosPolicy(value: string) {
    this._aiMlQosPolicy = value;
  }
  public resetAiMlQosPolicy() {
    this._aiMlQosPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiMlQosPolicyInput() {
    return this._aiMlQosPolicy;
  }

  // allow_l3vni_no_vlan - computed: true, optional: true, required: false
  private _allowL3VniNoVlan?: boolean | cdktf.IResolvable; 
  public get allowL3VniNoVlan() {
    return this.getBooleanAttribute('allow_l3vni_no_vlan');
  }
  public set allowL3VniNoVlan(value: boolean | cdktf.IResolvable) {
    this._allowL3VniNoVlan = value;
  }
  public resetAllowL3VniNoVlan() {
    this._allowL3VniNoVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowL3VniNoVlanInput() {
    return this._allowL3VniNoVlan;
  }

  // allow_l3vni_no_vlan_prev - computed: true, optional: false, required: false
  public get allowL3VniNoVlanPrev() {
    return this.getBooleanAttribute('allow_l3vni_no_vlan_prev');
  }

  // allow_nxc - computed: true, optional: true, required: false
  private _allowNxc?: boolean | cdktf.IResolvable; 
  public get allowNxc() {
    return this.getBooleanAttribute('allow_nxc');
  }
  public set allowNxc(value: boolean | cdktf.IResolvable) {
    this._allowNxc = value;
  }
  public resetAllowNxc() {
    this._allowNxc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNxcInput() {
    return this._allowNxc;
  }

  // allow_nxc_prev - computed: true, optional: false, required: false
  public get allowNxcPrev() {
    return this.getBooleanAttribute('allow_nxc_prev');
  }

  // anycast_bgw_advertise_pip - computed: true, optional: true, required: false
  private _anycastBgwAdvertisePip?: boolean | cdktf.IResolvable; 
  public get anycastBgwAdvertisePip() {
    return this.getBooleanAttribute('anycast_bgw_advertise_pip');
  }
  public set anycastBgwAdvertisePip(value: boolean | cdktf.IResolvable) {
    this._anycastBgwAdvertisePip = value;
  }
  public resetAnycastBgwAdvertisePip() {
    this._anycastBgwAdvertisePip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anycastBgwAdvertisePipInput() {
    return this._anycastBgwAdvertisePip;
  }

  // anycast_gw_mac - computed: true, optional: true, required: false
  private _anycastGwMac?: string; 
  public get anycastGwMac() {
    return this.getStringAttribute('anycast_gw_mac');
  }
  public set anycastGwMac(value: string) {
    this._anycastGwMac = value;
  }
  public resetAnycastGwMac() {
    this._anycastGwMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anycastGwMacInput() {
    return this._anycastGwMac;
  }

  // anycast_lb_id - computed: true, optional: true, required: false
  private _anycastLbId?: number; 
  public get anycastLbId() {
    return this.getNumberAttribute('anycast_lb_id');
  }
  public set anycastLbId(value: number) {
    this._anycastLbId = value;
  }
  public resetAnycastLbId() {
    this._anycastLbId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anycastLbIdInput() {
    return this._anycastLbId;
  }

  // anycast_rp_ip_range - computed: true, optional: true, required: false
  private _anycastRpIpRange?: string; 
  public get anycastRpIpRange() {
    return this.getStringAttribute('anycast_rp_ip_range');
  }
  public set anycastRpIpRange(value: string) {
    this._anycastRpIpRange = value;
  }
  public resetAnycastRpIpRange() {
    this._anycastRpIpRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anycastRpIpRangeInput() {
    return this._anycastRpIpRange;
  }

  // anycast_rp_ip_range_internal - computed: true, optional: false, required: false
  public get anycastRpIpRangeInternal() {
    return this.getStringAttribute('anycast_rp_ip_range_internal');
  }

  // auto_symmetric_default_vrf - computed: true, optional: true, required: false
  private _autoSymmetricDefaultVrf?: boolean | cdktf.IResolvable; 
  public get autoSymmetricDefaultVrf() {
    return this.getBooleanAttribute('auto_symmetric_default_vrf');
  }
  public set autoSymmetricDefaultVrf(value: boolean | cdktf.IResolvable) {
    this._autoSymmetricDefaultVrf = value;
  }
  public resetAutoSymmetricDefaultVrf() {
    this._autoSymmetricDefaultVrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSymmetricDefaultVrfInput() {
    return this._autoSymmetricDefaultVrf;
  }

  // auto_symmetric_vrf_lite - computed: true, optional: true, required: false
  private _autoSymmetricVrfLite?: boolean | cdktf.IResolvable; 
  public get autoSymmetricVrfLite() {
    return this.getBooleanAttribute('auto_symmetric_vrf_lite');
  }
  public set autoSymmetricVrfLite(value: boolean | cdktf.IResolvable) {
    this._autoSymmetricVrfLite = value;
  }
  public resetAutoSymmetricVrfLite() {
    this._autoSymmetricVrfLite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSymmetricVrfLiteInput() {
    return this._autoSymmetricVrfLite;
  }

  // auto_unique_vrf_lite_ip_prefix - computed: true, optional: true, required: false
  private _autoUniqueVrfLiteIpPrefix?: boolean | cdktf.IResolvable; 
  public get autoUniqueVrfLiteIpPrefix() {
    return this.getBooleanAttribute('auto_unique_vrf_lite_ip_prefix');
  }
  public set autoUniqueVrfLiteIpPrefix(value: boolean | cdktf.IResolvable) {
    this._autoUniqueVrfLiteIpPrefix = value;
  }
  public resetAutoUniqueVrfLiteIpPrefix() {
    this._autoUniqueVrfLiteIpPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUniqueVrfLiteIpPrefixInput() {
    return this._autoUniqueVrfLiteIpPrefix;
  }

  // auto_unique_vrf_lite_ip_prefix_prev - computed: true, optional: false, required: false
  public get autoUniqueVrfLiteIpPrefixPrev() {
    return this.getBooleanAttribute('auto_unique_vrf_lite_ip_prefix_prev');
  }

  // auto_vrflite_ifc_default_vrf - computed: true, optional: true, required: false
  private _autoVrfliteIfcDefaultVrf?: boolean | cdktf.IResolvable; 
  public get autoVrfliteIfcDefaultVrf() {
    return this.getBooleanAttribute('auto_vrflite_ifc_default_vrf');
  }
  public set autoVrfliteIfcDefaultVrf(value: boolean | cdktf.IResolvable) {
    this._autoVrfliteIfcDefaultVrf = value;
  }
  public resetAutoVrfliteIfcDefaultVrf() {
    this._autoVrfliteIfcDefaultVrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoVrfliteIfcDefaultVrfInput() {
    return this._autoVrfliteIfcDefaultVrf;
  }

  // banner - computed: true, optional: true, required: false
  private _banner?: string; 
  public get banner() {
    return this.getStringAttribute('banner');
  }
  public set banner(value: string) {
    this._banner = value;
  }
  public resetBanner() {
    this._banner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bannerInput() {
    return this._banner;
  }

  // bfd_auth_enable - computed: true, optional: true, required: false
  private _bfdAuthEnable?: boolean | cdktf.IResolvable; 
  public get bfdAuthEnable() {
    return this.getBooleanAttribute('bfd_auth_enable');
  }
  public set bfdAuthEnable(value: boolean | cdktf.IResolvable) {
    this._bfdAuthEnable = value;
  }
  public resetBfdAuthEnable() {
    this._bfdAuthEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdAuthEnableInput() {
    return this._bfdAuthEnable;
  }

  // bfd_auth_key - computed: true, optional: true, required: false
  private _bfdAuthKey?: string; 
  public get bfdAuthKey() {
    return this.getStringAttribute('bfd_auth_key');
  }
  public set bfdAuthKey(value: string) {
    this._bfdAuthKey = value;
  }
  public resetBfdAuthKey() {
    this._bfdAuthKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdAuthKeyInput() {
    return this._bfdAuthKey;
  }

  // bfd_auth_key_id - computed: true, optional: true, required: false
  private _bfdAuthKeyId?: number; 
  public get bfdAuthKeyId() {
    return this.getNumberAttribute('bfd_auth_key_id');
  }
  public set bfdAuthKeyId(value: number) {
    this._bfdAuthKeyId = value;
  }
  public resetBfdAuthKeyId() {
    this._bfdAuthKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdAuthKeyIdInput() {
    return this._bfdAuthKeyId;
  }

  // bfd_enable - computed: true, optional: true, required: false
  private _bfdEnable?: boolean | cdktf.IResolvable; 
  public get bfdEnable() {
    return this.getBooleanAttribute('bfd_enable');
  }
  public set bfdEnable(value: boolean | cdktf.IResolvable) {
    this._bfdEnable = value;
  }
  public resetBfdEnable() {
    this._bfdEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdEnableInput() {
    return this._bfdEnable;
  }

  // bfd_enable_prev - computed: true, optional: false, required: false
  public get bfdEnablePrev() {
    return this.getBooleanAttribute('bfd_enable_prev');
  }

  // bfd_ibgp_enable - computed: true, optional: true, required: false
  private _bfdIbgpEnable?: boolean | cdktf.IResolvable; 
  public get bfdIbgpEnable() {
    return this.getBooleanAttribute('bfd_ibgp_enable');
  }
  public set bfdIbgpEnable(value: boolean | cdktf.IResolvable) {
    this._bfdIbgpEnable = value;
  }
  public resetBfdIbgpEnable() {
    this._bfdIbgpEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdIbgpEnableInput() {
    return this._bfdIbgpEnable;
  }

  // bfd_isis_enable - computed: true, optional: true, required: false
  private _bfdIsisEnable?: boolean | cdktf.IResolvable; 
  public get bfdIsisEnable() {
    return this.getBooleanAttribute('bfd_isis_enable');
  }
  public set bfdIsisEnable(value: boolean | cdktf.IResolvable) {
    this._bfdIsisEnable = value;
  }
  public resetBfdIsisEnable() {
    this._bfdIsisEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdIsisEnableInput() {
    return this._bfdIsisEnable;
  }

  // bfd_ospf_enable - computed: true, optional: true, required: false
  private _bfdOspfEnable?: boolean | cdktf.IResolvable; 
  public get bfdOspfEnable() {
    return this.getBooleanAttribute('bfd_ospf_enable');
  }
  public set bfdOspfEnable(value: boolean | cdktf.IResolvable) {
    this._bfdOspfEnable = value;
  }
  public resetBfdOspfEnable() {
    this._bfdOspfEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdOspfEnableInput() {
    return this._bfdOspfEnable;
  }

  // bfd_pim_enable - computed: true, optional: true, required: false
  private _bfdPimEnable?: boolean | cdktf.IResolvable; 
  public get bfdPimEnable() {
    return this.getBooleanAttribute('bfd_pim_enable');
  }
  public set bfdPimEnable(value: boolean | cdktf.IResolvable) {
    this._bfdPimEnable = value;
  }
  public resetBfdPimEnable() {
    this._bfdPimEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdPimEnableInput() {
    return this._bfdPimEnable;
  }

  // bgp_as - computed: false, optional: false, required: true
  private _bgpAs?: string; 
  public get bgpAs() {
    return this.getStringAttribute('bgp_as');
  }
  public set bgpAs(value: string) {
    this._bgpAs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpAsInput() {
    return this._bgpAs;
  }

  // bgp_as_prev - computed: true, optional: false, required: false
  public get bgpAsPrev() {
    return this.getStringAttribute('bgp_as_prev');
  }

  // bgp_auth_enable - computed: true, optional: true, required: false
  private _bgpAuthEnable?: boolean | cdktf.IResolvable; 
  public get bgpAuthEnable() {
    return this.getBooleanAttribute('bgp_auth_enable');
  }
  public set bgpAuthEnable(value: boolean | cdktf.IResolvable) {
    this._bgpAuthEnable = value;
  }
  public resetBgpAuthEnable() {
    this._bgpAuthEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpAuthEnableInput() {
    return this._bgpAuthEnable;
  }

  // bgp_auth_key - computed: true, optional: true, required: false
  private _bgpAuthKey?: string; 
  public get bgpAuthKey() {
    return this.getStringAttribute('bgp_auth_key');
  }
  public set bgpAuthKey(value: string) {
    this._bgpAuthKey = value;
  }
  public resetBgpAuthKey() {
    this._bgpAuthKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpAuthKeyInput() {
    return this._bgpAuthKey;
  }

  // bgp_auth_key_type - computed: true, optional: true, required: false
  private _bgpAuthKeyType?: number; 
  public get bgpAuthKeyType() {
    return this.getNumberAttribute('bgp_auth_key_type');
  }
  public set bgpAuthKeyType(value: number) {
    this._bgpAuthKeyType = value;
  }
  public resetBgpAuthKeyType() {
    this._bgpAuthKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpAuthKeyTypeInput() {
    return this._bgpAuthKeyType;
  }

  // bgp_lb_id - computed: true, optional: true, required: false
  private _bgpLbId?: number; 
  public get bgpLbId() {
    return this.getNumberAttribute('bgp_lb_id');
  }
  public set bgpLbId(value: number) {
    this._bgpLbId = value;
  }
  public resetBgpLbId() {
    this._bgpLbId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpLbIdInput() {
    return this._bgpLbId;
  }

  // bootstrap_conf - computed: true, optional: true, required: false
  private _bootstrapConf?: string; 
  public get bootstrapConf() {
    return this.getStringAttribute('bootstrap_conf');
  }
  public set bootstrapConf(value: string) {
    this._bootstrapConf = value;
  }
  public resetBootstrapConf() {
    this._bootstrapConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapConfInput() {
    return this._bootstrapConf;
  }

  // bootstrap_enable - computed: true, optional: true, required: false
  private _bootstrapEnable?: boolean | cdktf.IResolvable; 
  public get bootstrapEnable() {
    return this.getBooleanAttribute('bootstrap_enable');
  }
  public set bootstrapEnable(value: boolean | cdktf.IResolvable) {
    this._bootstrapEnable = value;
  }
  public resetBootstrapEnable() {
    this._bootstrapEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapEnableInput() {
    return this._bootstrapEnable;
  }

  // bootstrap_enable_prev - computed: true, optional: false, required: false
  public get bootstrapEnablePrev() {
    return this.getBooleanAttribute('bootstrap_enable_prev');
  }

  // bootstrap_multisubnet - computed: true, optional: true, required: false
  private _bootstrapMultisubnet?: string; 
  public get bootstrapMultisubnet() {
    return this.getStringAttribute('bootstrap_multisubnet');
  }
  public set bootstrapMultisubnet(value: string) {
    this._bootstrapMultisubnet = value;
  }
  public resetBootstrapMultisubnet() {
    this._bootstrapMultisubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapMultisubnetInput() {
    return this._bootstrapMultisubnet;
  }

  // bootstrap_multisubnet_internal - computed: true, optional: false, required: false
  public get bootstrapMultisubnetInternal() {
    return this.getStringAttribute('bootstrap_multisubnet_internal');
  }

  // brfield_debug_flag - computed: true, optional: true, required: false
  private _brfieldDebugFlag?: string; 
  public get brfieldDebugFlag() {
    return this.getStringAttribute('brfield_debug_flag');
  }
  public set brfieldDebugFlag(value: string) {
    this._brfieldDebugFlag = value;
  }
  public resetBrfieldDebugFlag() {
    this._brfieldDebugFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brfieldDebugFlagInput() {
    return this._brfieldDebugFlag;
  }

  // brownfield_network_name_format - computed: true, optional: true, required: false
  private _brownfieldNetworkNameFormat?: string; 
  public get brownfieldNetworkNameFormat() {
    return this.getStringAttribute('brownfield_network_name_format');
  }
  public set brownfieldNetworkNameFormat(value: string) {
    this._brownfieldNetworkNameFormat = value;
  }
  public resetBrownfieldNetworkNameFormat() {
    this._brownfieldNetworkNameFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brownfieldNetworkNameFormatInput() {
    return this._brownfieldNetworkNameFormat;
  }

  // brownfield_skip_overlay_network_attachments - computed: true, optional: true, required: false
  private _brownfieldSkipOverlayNetworkAttachments?: boolean | cdktf.IResolvable; 
  public get brownfieldSkipOverlayNetworkAttachments() {
    return this.getBooleanAttribute('brownfield_skip_overlay_network_attachments');
  }
  public set brownfieldSkipOverlayNetworkAttachments(value: boolean | cdktf.IResolvable) {
    this._brownfieldSkipOverlayNetworkAttachments = value;
  }
  public resetBrownfieldSkipOverlayNetworkAttachments() {
    this._brownfieldSkipOverlayNetworkAttachments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brownfieldSkipOverlayNetworkAttachmentsInput() {
    return this._brownfieldSkipOverlayNetworkAttachments;
  }

  // cdp_enable - computed: true, optional: true, required: false
  private _cdpEnable?: boolean | cdktf.IResolvable; 
  public get cdpEnable() {
    return this.getBooleanAttribute('cdp_enable');
  }
  public set cdpEnable(value: boolean | cdktf.IResolvable) {
    this._cdpEnable = value;
  }
  public resetCdpEnable() {
    this._cdpEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdpEnableInput() {
    return this._cdpEnable;
  }

  // copp_policy - computed: true, optional: true, required: false
  private _coppPolicy?: string; 
  public get coppPolicy() {
    return this.getStringAttribute('copp_policy');
  }
  public set coppPolicy(value: string) {
    this._coppPolicy = value;
  }
  public resetCoppPolicy() {
    this._coppPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coppPolicyInput() {
    return this._coppPolicy;
  }

  // dci_macsec_algorithm - computed: true, optional: true, required: false
  private _dciMacsecAlgorithm?: string; 
  public get dciMacsecAlgorithm() {
    return this.getStringAttribute('dci_macsec_algorithm');
  }
  public set dciMacsecAlgorithm(value: string) {
    this._dciMacsecAlgorithm = value;
  }
  public resetDciMacsecAlgorithm() {
    this._dciMacsecAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dciMacsecAlgorithmInput() {
    return this._dciMacsecAlgorithm;
  }

  // dci_macsec_cipher_suite - computed: true, optional: true, required: false
  private _dciMacsecCipherSuite?: string; 
  public get dciMacsecCipherSuite() {
    return this.getStringAttribute('dci_macsec_cipher_suite');
  }
  public set dciMacsecCipherSuite(value: string) {
    this._dciMacsecCipherSuite = value;
  }
  public resetDciMacsecCipherSuite() {
    this._dciMacsecCipherSuite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dciMacsecCipherSuiteInput() {
    return this._dciMacsecCipherSuite;
  }

  // dci_macsec_fallback_algorithm - computed: true, optional: true, required: false
  private _dciMacsecFallbackAlgorithm?: string; 
  public get dciMacsecFallbackAlgorithm() {
    return this.getStringAttribute('dci_macsec_fallback_algorithm');
  }
  public set dciMacsecFallbackAlgorithm(value: string) {
    this._dciMacsecFallbackAlgorithm = value;
  }
  public resetDciMacsecFallbackAlgorithm() {
    this._dciMacsecFallbackAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dciMacsecFallbackAlgorithmInput() {
    return this._dciMacsecFallbackAlgorithm;
  }

  // dci_macsec_fallback_key_string - computed: true, optional: true, required: false
  private _dciMacsecFallbackKeyString?: string; 
  public get dciMacsecFallbackKeyString() {
    return this.getStringAttribute('dci_macsec_fallback_key_string');
  }
  public set dciMacsecFallbackKeyString(value: string) {
    this._dciMacsecFallbackKeyString = value;
  }
  public resetDciMacsecFallbackKeyString() {
    this._dciMacsecFallbackKeyString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dciMacsecFallbackKeyStringInput() {
    return this._dciMacsecFallbackKeyString;
  }

  // dci_macsec_key_string - computed: true, optional: true, required: false
  private _dciMacsecKeyString?: string; 
  public get dciMacsecKeyString() {
    return this.getStringAttribute('dci_macsec_key_string');
  }
  public set dciMacsecKeyString(value: string) {
    this._dciMacsecKeyString = value;
  }
  public resetDciMacsecKeyString() {
    this._dciMacsecKeyString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dciMacsecKeyStringInput() {
    return this._dciMacsecKeyString;
  }

  // dci_subnet_range - computed: true, optional: true, required: false
  private _dciSubnetRange?: string; 
  public get dciSubnetRange() {
    return this.getStringAttribute('dci_subnet_range');
  }
  public set dciSubnetRange(value: string) {
    this._dciSubnetRange = value;
  }
  public resetDciSubnetRange() {
    this._dciSubnetRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dciSubnetRangeInput() {
    return this._dciSubnetRange;
  }

  // dci_subnet_target_mask - computed: true, optional: true, required: false
  private _dciSubnetTargetMask?: number; 
  public get dciSubnetTargetMask() {
    return this.getNumberAttribute('dci_subnet_target_mask');
  }
  public set dciSubnetTargetMask(value: number) {
    this._dciSubnetTargetMask = value;
  }
  public resetDciSubnetTargetMask() {
    this._dciSubnetTargetMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dciSubnetTargetMaskInput() {
    return this._dciSubnetTargetMask;
  }

  // default_network - computed: true, optional: true, required: false
  private _defaultNetwork?: string; 
  public get defaultNetwork() {
    return this.getStringAttribute('default_network');
  }
  public set defaultNetwork(value: string) {
    this._defaultNetwork = value;
  }
  public resetDefaultNetwork() {
    this._defaultNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNetworkInput() {
    return this._defaultNetwork;
  }

  // default_pvlan_sec_network - computed: true, optional: true, required: false
  private _defaultPvlanSecNetwork?: string; 
  public get defaultPvlanSecNetwork() {
    return this.getStringAttribute('default_pvlan_sec_network');
  }
  public set defaultPvlanSecNetwork(value: string) {
    this._defaultPvlanSecNetwork = value;
  }
  public resetDefaultPvlanSecNetwork() {
    this._defaultPvlanSecNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPvlanSecNetworkInput() {
    return this._defaultPvlanSecNetwork;
  }

  // default_queuing_policy_cloudscale - computed: true, optional: true, required: false
  private _defaultQueuingPolicyCloudscale?: string; 
  public get defaultQueuingPolicyCloudscale() {
    return this.getStringAttribute('default_queuing_policy_cloudscale');
  }
  public set defaultQueuingPolicyCloudscale(value: string) {
    this._defaultQueuingPolicyCloudscale = value;
  }
  public resetDefaultQueuingPolicyCloudscale() {
    this._defaultQueuingPolicyCloudscale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultQueuingPolicyCloudscaleInput() {
    return this._defaultQueuingPolicyCloudscale;
  }

  // default_queuing_policy_other - computed: true, optional: true, required: false
  private _defaultQueuingPolicyOther?: string; 
  public get defaultQueuingPolicyOther() {
    return this.getStringAttribute('default_queuing_policy_other');
  }
  public set defaultQueuingPolicyOther(value: string) {
    this._defaultQueuingPolicyOther = value;
  }
  public resetDefaultQueuingPolicyOther() {
    this._defaultQueuingPolicyOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultQueuingPolicyOtherInput() {
    return this._defaultQueuingPolicyOther;
  }

  // default_queuing_policy_r_series - computed: true, optional: true, required: false
  private _defaultQueuingPolicyRSeries?: string; 
  public get defaultQueuingPolicyRSeries() {
    return this.getStringAttribute('default_queuing_policy_r_series');
  }
  public set defaultQueuingPolicyRSeries(value: string) {
    this._defaultQueuingPolicyRSeries = value;
  }
  public resetDefaultQueuingPolicyRSeries() {
    this._defaultQueuingPolicyRSeries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultQueuingPolicyRSeriesInput() {
    return this._defaultQueuingPolicyRSeries;
  }

  // default_vrf - computed: true, optional: true, required: false
  private _defaultVrf?: string; 
  public get defaultVrf() {
    return this.getStringAttribute('default_vrf');
  }
  public set defaultVrf(value: string) {
    this._defaultVrf = value;
  }
  public resetDefaultVrf() {
    this._defaultVrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVrfInput() {
    return this._defaultVrf;
  }

  // default_vrf_redis_bgp_rmap - computed: true, optional: true, required: false
  private _defaultVrfRedisBgpRmap?: string; 
  public get defaultVrfRedisBgpRmap() {
    return this.getStringAttribute('default_vrf_redis_bgp_rmap');
  }
  public set defaultVrfRedisBgpRmap(value: string) {
    this._defaultVrfRedisBgpRmap = value;
  }
  public resetDefaultVrfRedisBgpRmap() {
    this._defaultVrfRedisBgpRmap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVrfRedisBgpRmapInput() {
    return this._defaultVrfRedisBgpRmap;
  }

  // deploy - computed: false, optional: false, required: true
  private _deploy?: boolean | cdktf.IResolvable; 
  public get deploy() {
    return this.getBooleanAttribute('deploy');
  }
  public set deploy(value: boolean | cdktf.IResolvable) {
    this._deploy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deployInput() {
    return this._deploy;
  }

  // deployment_freeze - computed: true, optional: true, required: false
  private _deploymentFreeze?: boolean | cdktf.IResolvable; 
  public get deploymentFreeze() {
    return this.getBooleanAttribute('deployment_freeze');
  }
  public set deploymentFreeze(value: boolean | cdktf.IResolvable) {
    this._deploymentFreeze = value;
  }
  public resetDeploymentFreeze() {
    this._deploymentFreeze = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentFreezeInput() {
    return this._deploymentFreeze;
  }

  // deployment_status - computed: true, optional: false, required: false
  public get deploymentStatus() {
    return this.getStringAttribute('deployment_status');
  }

  // dhcp_enable - computed: true, optional: true, required: false
  private _dhcpEnable?: boolean | cdktf.IResolvable; 
  public get dhcpEnable() {
    return this.getBooleanAttribute('dhcp_enable');
  }
  public set dhcpEnable(value: boolean | cdktf.IResolvable) {
    this._dhcpEnable = value;
  }
  public resetDhcpEnable() {
    this._dhcpEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpEnableInput() {
    return this._dhcpEnable;
  }

  // dhcp_end - computed: true, optional: true, required: false
  private _dhcpEnd?: string; 
  public get dhcpEnd() {
    return this.getStringAttribute('dhcp_end');
  }
  public set dhcpEnd(value: string) {
    this._dhcpEnd = value;
  }
  public resetDhcpEnd() {
    this._dhcpEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpEndInput() {
    return this._dhcpEnd;
  }

  // dhcp_end_internal - computed: true, optional: false, required: false
  public get dhcpEndInternal() {
    return this.getStringAttribute('dhcp_end_internal');
  }

  // dhcp_ipv6_enable - computed: true, optional: true, required: false
  private _dhcpIpv6Enable?: string; 
  public get dhcpIpv6Enable() {
    return this.getStringAttribute('dhcp_ipv6_enable');
  }
  public set dhcpIpv6Enable(value: string) {
    this._dhcpIpv6Enable = value;
  }
  public resetDhcpIpv6Enable() {
    this._dhcpIpv6Enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpIpv6EnableInput() {
    return this._dhcpIpv6Enable;
  }

  // dhcp_ipv6_enable_internal - computed: true, optional: false, required: false
  public get dhcpIpv6EnableInternal() {
    return this.getStringAttribute('dhcp_ipv6_enable_internal');
  }

  // dhcp_start - computed: true, optional: true, required: false
  private _dhcpStart?: string; 
  public get dhcpStart() {
    return this.getStringAttribute('dhcp_start');
  }
  public set dhcpStart(value: string) {
    this._dhcpStart = value;
  }
  public resetDhcpStart() {
    this._dhcpStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpStartInput() {
    return this._dhcpStart;
  }

  // dhcp_start_internal - computed: true, optional: false, required: false
  public get dhcpStartInternal() {
    return this.getStringAttribute('dhcp_start_internal');
  }

  // dns_server_ip_list - computed: true, optional: true, required: false
  private _dnsServerIpList?: string; 
  public get dnsServerIpList() {
    return this.getStringAttribute('dns_server_ip_list');
  }
  public set dnsServerIpList(value: string) {
    this._dnsServerIpList = value;
  }
  public resetDnsServerIpList() {
    this._dnsServerIpList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerIpListInput() {
    return this._dnsServerIpList;
  }

  // dns_server_vrf - computed: true, optional: true, required: false
  private _dnsServerVrf?: string; 
  public get dnsServerVrf() {
    return this.getStringAttribute('dns_server_vrf');
  }
  public set dnsServerVrf(value: string) {
    this._dnsServerVrf = value;
  }
  public resetDnsServerVrf() {
    this._dnsServerVrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerVrfInput() {
    return this._dnsServerVrf;
  }

  // enable_aaa - computed: true, optional: true, required: false
  private _enableAaa?: boolean | cdktf.IResolvable; 
  public get enableAaa() {
    return this.getBooleanAttribute('enable_aaa');
  }
  public set enableAaa(value: boolean | cdktf.IResolvable) {
    this._enableAaa = value;
  }
  public resetEnableAaa() {
    this._enableAaa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAaaInput() {
    return this._enableAaa;
  }

  // enable_agent - computed: true, optional: true, required: false
  private _enableAgent?: boolean | cdktf.IResolvable; 
  public get enableAgent() {
    return this.getBooleanAttribute('enable_agent');
  }
  public set enableAgent(value: boolean | cdktf.IResolvable) {
    this._enableAgent = value;
  }
  public resetEnableAgent() {
    this._enableAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAgentInput() {
    return this._enableAgent;
  }

  // enable_agg_acc_id_range - computed: true, optional: true, required: false
  private _enableAggAccIdRange?: boolean | cdktf.IResolvable; 
  public get enableAggAccIdRange() {
    return this.getBooleanAttribute('enable_agg_acc_id_range');
  }
  public set enableAggAccIdRange(value: boolean | cdktf.IResolvable) {
    this._enableAggAccIdRange = value;
  }
  public resetEnableAggAccIdRange() {
    this._enableAggAccIdRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAggAccIdRangeInput() {
    return this._enableAggAccIdRange;
  }

  // enable_ai_ml_qos_policy - computed: true, optional: true, required: false
  private _enableAiMlQosPolicy?: boolean | cdktf.IResolvable; 
  public get enableAiMlQosPolicy() {
    return this.getBooleanAttribute('enable_ai_ml_qos_policy');
  }
  public set enableAiMlQosPolicy(value: boolean | cdktf.IResolvable) {
    this._enableAiMlQosPolicy = value;
  }
  public resetEnableAiMlQosPolicy() {
    this._enableAiMlQosPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAiMlQosPolicyInput() {
    return this._enableAiMlQosPolicy;
  }

  // enable_ai_ml_qos_policy_flap - computed: true, optional: false, required: false
  public get enableAiMlQosPolicyFlap() {
    return this.getBooleanAttribute('enable_ai_ml_qos_policy_flap');
  }

  // enable_dci_macsec - computed: true, optional: true, required: false
  private _enableDciMacsec?: boolean | cdktf.IResolvable; 
  public get enableDciMacsec() {
    return this.getBooleanAttribute('enable_dci_macsec');
  }
  public set enableDciMacsec(value: boolean | cdktf.IResolvable) {
    this._enableDciMacsec = value;
  }
  public resetEnableDciMacsec() {
    this._enableDciMacsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDciMacsecInput() {
    return this._enableDciMacsec;
  }

  // enable_dci_macsec_prev - computed: true, optional: false, required: false
  public get enableDciMacsecPrev() {
    return this.getBooleanAttribute('enable_dci_macsec_prev');
  }

  // enable_default_queuing_policy - computed: true, optional: true, required: false
  private _enableDefaultQueuingPolicy?: boolean | cdktf.IResolvable; 
  public get enableDefaultQueuingPolicy() {
    return this.getBooleanAttribute('enable_default_queuing_policy');
  }
  public set enableDefaultQueuingPolicy(value: boolean | cdktf.IResolvable) {
    this._enableDefaultQueuingPolicy = value;
  }
  public resetEnableDefaultQueuingPolicy() {
    this._enableDefaultQueuingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDefaultQueuingPolicyInput() {
    return this._enableDefaultQueuingPolicy;
  }

  // enable_evpn - computed: true, optional: false, required: false
  public get enableEvpn() {
    return this.getBooleanAttribute('enable_evpn');
  }

  // enable_fabric_vpc_domain_id - computed: true, optional: true, required: false
  private _enableFabricVpcDomainId?: boolean | cdktf.IResolvable; 
  public get enableFabricVpcDomainId() {
    return this.getBooleanAttribute('enable_fabric_vpc_domain_id');
  }
  public set enableFabricVpcDomainId(value: boolean | cdktf.IResolvable) {
    this._enableFabricVpcDomainId = value;
  }
  public resetEnableFabricVpcDomainId() {
    this._enableFabricVpcDomainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFabricVpcDomainIdInput() {
    return this._enableFabricVpcDomainId;
  }

  // enable_fabric_vpc_domain_id_prev - computed: true, optional: false, required: false
  public get enableFabricVpcDomainIdPrev() {
    return this.getBooleanAttribute('enable_fabric_vpc_domain_id_prev');
  }

  // enable_l3vni_no_vlan - computed: true, optional: true, required: false
  private _enableL3VniNoVlan?: boolean | cdktf.IResolvable; 
  public get enableL3VniNoVlan() {
    return this.getBooleanAttribute('enable_l3vni_no_vlan');
  }
  public set enableL3VniNoVlan(value: boolean | cdktf.IResolvable) {
    this._enableL3VniNoVlan = value;
  }
  public resetEnableL3VniNoVlan() {
    this._enableL3VniNoVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableL3VniNoVlanInput() {
    return this._enableL3VniNoVlan;
  }

  // enable_macsec - computed: true, optional: true, required: false
  private _enableMacsec?: boolean | cdktf.IResolvable; 
  public get enableMacsec() {
    return this.getBooleanAttribute('enable_macsec');
  }
  public set enableMacsec(value: boolean | cdktf.IResolvable) {
    this._enableMacsec = value;
  }
  public resetEnableMacsec() {
    this._enableMacsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMacsecInput() {
    return this._enableMacsec;
  }

  // enable_macsec_prev - computed: true, optional: false, required: false
  public get enableMacsecPrev() {
    return this.getBooleanAttribute('enable_macsec_prev');
  }

  // enable_netflow - computed: true, optional: true, required: false
  private _enableNetflow?: boolean | cdktf.IResolvable; 
  public get enableNetflow() {
    return this.getBooleanAttribute('enable_netflow');
  }
  public set enableNetflow(value: boolean | cdktf.IResolvable) {
    this._enableNetflow = value;
  }
  public resetEnableNetflow() {
    this._enableNetflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNetflowInput() {
    return this._enableNetflow;
  }

  // enable_netflow_prev - computed: true, optional: false, required: false
  public get enableNetflowPrev() {
    return this.getBooleanAttribute('enable_netflow_prev');
  }

  // enable_ngoam - computed: true, optional: true, required: false
  private _enableNgoam?: boolean | cdktf.IResolvable; 
  public get enableNgoam() {
    return this.getBooleanAttribute('enable_ngoam');
  }
  public set enableNgoam(value: boolean | cdktf.IResolvable) {
    this._enableNgoam = value;
  }
  public resetEnableNgoam() {
    this._enableNgoam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNgoamInput() {
    return this._enableNgoam;
  }

  // enable_nxapi - computed: true, optional: true, required: false
  private _enableNxapi?: boolean | cdktf.IResolvable; 
  public get enableNxapi() {
    return this.getBooleanAttribute('enable_nxapi');
  }
  public set enableNxapi(value: boolean | cdktf.IResolvable) {
    this._enableNxapi = value;
  }
  public resetEnableNxapi() {
    this._enableNxapi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNxapiInput() {
    return this._enableNxapi;
  }

  // enable_nxapi_http - computed: true, optional: true, required: false
  private _enableNxapiHttp?: boolean | cdktf.IResolvable; 
  public get enableNxapiHttp() {
    return this.getBooleanAttribute('enable_nxapi_http');
  }
  public set enableNxapiHttp(value: boolean | cdktf.IResolvable) {
    this._enableNxapiHttp = value;
  }
  public resetEnableNxapiHttp() {
    this._enableNxapiHttp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNxapiHttpInput() {
    return this._enableNxapiHttp;
  }

  // enable_pbr - computed: true, optional: true, required: false
  private _enablePbr?: boolean | cdktf.IResolvable; 
  public get enablePbr() {
    return this.getBooleanAttribute('enable_pbr');
  }
  public set enablePbr(value: boolean | cdktf.IResolvable) {
    this._enablePbr = value;
  }
  public resetEnablePbr() {
    this._enablePbr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePbrInput() {
    return this._enablePbr;
  }

  // enable_pvlan - computed: true, optional: true, required: false
  private _enablePvlan?: boolean | cdktf.IResolvable; 
  public get enablePvlan() {
    return this.getBooleanAttribute('enable_pvlan');
  }
  public set enablePvlan(value: boolean | cdktf.IResolvable) {
    this._enablePvlan = value;
  }
  public resetEnablePvlan() {
    this._enablePvlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePvlanInput() {
    return this._enablePvlan;
  }

  // enable_pvlan_prev - computed: true, optional: false, required: false
  public get enablePvlanPrev() {
    return this.getBooleanAttribute('enable_pvlan_prev');
  }

  // enable_qkd - computed: true, optional: true, required: false
  private _enableQkd?: boolean | cdktf.IResolvable; 
  public get enableQkd() {
    return this.getBooleanAttribute('enable_qkd');
  }
  public set enableQkd(value: boolean | cdktf.IResolvable) {
    this._enableQkd = value;
  }
  public resetEnableQkd() {
    this._enableQkd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableQkdInput() {
    return this._enableQkd;
  }

  // enable_real_time_backup - computed: true, optional: true, required: false
  private _enableRealTimeBackup?: boolean | cdktf.IResolvable; 
  public get enableRealTimeBackup() {
    return this.getBooleanAttribute('enable_real_time_backup');
  }
  public set enableRealTimeBackup(value: boolean | cdktf.IResolvable) {
    this._enableRealTimeBackup = value;
  }
  public resetEnableRealTimeBackup() {
    this._enableRealTimeBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRealTimeBackupInput() {
    return this._enableRealTimeBackup;
  }

  // enable_rt_intf_stats - computed: true, optional: true, required: false
  private _enableRtIntfStats?: boolean | cdktf.IResolvable; 
  public get enableRtIntfStats() {
    return this.getBooleanAttribute('enable_rt_intf_stats');
  }
  public set enableRtIntfStats(value: boolean | cdktf.IResolvable) {
    this._enableRtIntfStats = value;
  }
  public resetEnableRtIntfStats() {
    this._enableRtIntfStats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRtIntfStatsInput() {
    return this._enableRtIntfStats;
  }

  // enable_scheduled_backup - computed: true, optional: true, required: false
  private _enableScheduledBackup?: boolean | cdktf.IResolvable; 
  public get enableScheduledBackup() {
    return this.getBooleanAttribute('enable_scheduled_backup');
  }
  public set enableScheduledBackup(value: boolean | cdktf.IResolvable) {
    this._enableScheduledBackup = value;
  }
  public resetEnableScheduledBackup() {
    this._enableScheduledBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableScheduledBackupInput() {
    return this._enableScheduledBackup;
  }

  // enable_sgt - computed: true, optional: true, required: false
  private _enableSgt?: boolean | cdktf.IResolvable; 
  public get enableSgt() {
    return this.getBooleanAttribute('enable_sgt');
  }
  public set enableSgt(value: boolean | cdktf.IResolvable) {
    this._enableSgt = value;
  }
  public resetEnableSgt() {
    this._enableSgt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSgtInput() {
    return this._enableSgt;
  }

  // enable_sgt_prev - computed: true, optional: false, required: false
  public get enableSgtPrev() {
    return this.getBooleanAttribute('enable_sgt_prev');
  }

  // enable_tenant_dhcp - computed: true, optional: true, required: false
  private _enableTenantDhcp?: boolean | cdktf.IResolvable; 
  public get enableTenantDhcp() {
    return this.getBooleanAttribute('enable_tenant_dhcp');
  }
  public set enableTenantDhcp(value: boolean | cdktf.IResolvable) {
    this._enableTenantDhcp = value;
  }
  public resetEnableTenantDhcp() {
    this._enableTenantDhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTenantDhcpInput() {
    return this._enableTenantDhcp;
  }

  // enable_trm - computed: true, optional: true, required: false
  private _enableTrm?: boolean | cdktf.IResolvable; 
  public get enableTrm() {
    return this.getBooleanAttribute('enable_trm');
  }
  public set enableTrm(value: boolean | cdktf.IResolvable) {
    this._enableTrm = value;
  }
  public resetEnableTrm() {
    this._enableTrm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrmInput() {
    return this._enableTrm;
  }

  // enable_trmv6 - computed: true, optional: true, required: false
  private _enableTrmv6?: boolean | cdktf.IResolvable; 
  public get enableTrmv6() {
    return this.getBooleanAttribute('enable_trmv6');
  }
  public set enableTrmv6(value: boolean | cdktf.IResolvable) {
    this._enableTrmv6 = value;
  }
  public resetEnableTrmv6() {
    this._enableTrmv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrmv6Input() {
    return this._enableTrmv6;
  }

  // enable_vpc_peer_link_native_vlan - computed: true, optional: true, required: false
  private _enableVpcPeerLinkNativeVlan?: boolean | cdktf.IResolvable; 
  public get enableVpcPeerLinkNativeVlan() {
    return this.getBooleanAttribute('enable_vpc_peer_link_native_vlan');
  }
  public set enableVpcPeerLinkNativeVlan(value: boolean | cdktf.IResolvable) {
    this._enableVpcPeerLinkNativeVlan = value;
  }
  public resetEnableVpcPeerLinkNativeVlan() {
    this._enableVpcPeerLinkNativeVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVpcPeerLinkNativeVlanInput() {
    return this._enableVpcPeerLinkNativeVlan;
  }

  // enable_vri_id_realloc - computed: true, optional: true, required: false
  private _enableVriIdRealloc?: boolean | cdktf.IResolvable; 
  public get enableVriIdRealloc() {
    return this.getBooleanAttribute('enable_vri_id_realloc');
  }
  public set enableVriIdRealloc(value: boolean | cdktf.IResolvable) {
    this._enableVriIdRealloc = value;
  }
  public resetEnableVriIdRealloc() {
    this._enableVriIdRealloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVriIdReallocInput() {
    return this._enableVriIdRealloc;
  }

  // esr_option - computed: true, optional: true, required: false
  private _esrOption?: string; 
  public get esrOption() {
    return this.getStringAttribute('esr_option');
  }
  public set esrOption(value: string) {
    this._esrOption = value;
  }
  public resetEsrOption() {
    this._esrOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esrOptionInput() {
    return this._esrOption;
  }

  // ext_fabric_type - computed: true, optional: true, required: false
  private _extFabricType?: string; 
  public get extFabricType() {
    return this.getStringAttribute('ext_fabric_type');
  }
  public set extFabricType(value: string) {
    this._extFabricType = value;
  }
  public resetExtFabricType() {
    this._extFabricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extFabricTypeInput() {
    return this._extFabricType;
  }

  // extra_conf_intra_links - computed: true, optional: true, required: false
  private _extraConfIntraLinks?: string; 
  public get extraConfIntraLinks() {
    return this.getStringAttribute('extra_conf_intra_links');
  }
  public set extraConfIntraLinks(value: string) {
    this._extraConfIntraLinks = value;
  }
  public resetExtraConfIntraLinks() {
    this._extraConfIntraLinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraConfIntraLinksInput() {
    return this._extraConfIntraLinks;
  }

  // extra_conf_leaf - computed: true, optional: true, required: false
  private _extraConfLeaf?: string; 
  public get extraConfLeaf() {
    return this.getStringAttribute('extra_conf_leaf');
  }
  public set extraConfLeaf(value: string) {
    this._extraConfLeaf = value;
  }
  public resetExtraConfLeaf() {
    this._extraConfLeaf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraConfLeafInput() {
    return this._extraConfLeaf;
  }

  // extra_conf_spine - computed: true, optional: true, required: false
  private _extraConfSpine?: string; 
  public get extraConfSpine() {
    return this.getStringAttribute('extra_conf_spine');
  }
  public set extraConfSpine(value: string) {
    this._extraConfSpine = value;
  }
  public resetExtraConfSpine() {
    this._extraConfSpine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraConfSpineInput() {
    return this._extraConfSpine;
  }

  // extra_conf_tor - computed: true, optional: true, required: false
  private _extraConfTor?: string; 
  public get extraConfTor() {
    return this.getStringAttribute('extra_conf_tor');
  }
  public set extraConfTor(value: string) {
    this._extraConfTor = value;
  }
  public resetExtraConfTor() {
    this._extraConfTor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraConfTorInput() {
    return this._extraConfTor;
  }

  // fabric_interface_type - computed: true, optional: true, required: false
  private _fabricInterfaceType?: string; 
  public get fabricInterfaceType() {
    return this.getStringAttribute('fabric_interface_type');
  }
  public set fabricInterfaceType(value: string) {
    this._fabricInterfaceType = value;
  }
  public resetFabricInterfaceType() {
    this._fabricInterfaceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricInterfaceTypeInput() {
    return this._fabricInterfaceType;
  }

  // fabric_mtu - computed: true, optional: true, required: false
  private _fabricMtu?: number; 
  public get fabricMtu() {
    return this.getNumberAttribute('fabric_mtu');
  }
  public set fabricMtu(value: number) {
    this._fabricMtu = value;
  }
  public resetFabricMtu() {
    this._fabricMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricMtuInput() {
    return this._fabricMtu;
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

  // fabric_type - computed: true, optional: false, required: false
  public get fabricType() {
    return this.getStringAttribute('fabric_type');
  }

  // fabric_vpc_domain_id - computed: true, optional: true, required: false
  private _fabricVpcDomainId?: number; 
  public get fabricVpcDomainId() {
    return this.getNumberAttribute('fabric_vpc_domain_id');
  }
  public set fabricVpcDomainId(value: number) {
    this._fabricVpcDomainId = value;
  }
  public resetFabricVpcDomainId() {
    this._fabricVpcDomainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricVpcDomainIdInput() {
    return this._fabricVpcDomainId;
  }

  // fabric_vpc_domain_id_prev - computed: true, optional: false, required: false
  public get fabricVpcDomainIdPrev() {
    return this.getNumberAttribute('fabric_vpc_domain_id_prev');
  }

  // fabric_vpc_qos - computed: true, optional: true, required: false
  private _fabricVpcQos?: boolean | cdktf.IResolvable; 
  public get fabricVpcQos() {
    return this.getBooleanAttribute('fabric_vpc_qos');
  }
  public set fabricVpcQos(value: boolean | cdktf.IResolvable) {
    this._fabricVpcQos = value;
  }
  public resetFabricVpcQos() {
    this._fabricVpcQos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricVpcQosInput() {
    return this._fabricVpcQos;
  }

  // fabric_vpc_qos_policy_name - computed: true, optional: true, required: false
  private _fabricVpcQosPolicyName?: string; 
  public get fabricVpcQosPolicyName() {
    return this.getStringAttribute('fabric_vpc_qos_policy_name');
  }
  public set fabricVpcQosPolicyName(value: string) {
    this._fabricVpcQosPolicyName = value;
  }
  public resetFabricVpcQosPolicyName() {
    this._fabricVpcQosPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricVpcQosPolicyNameInput() {
    return this._fabricVpcQosPolicyName;
  }

  // feature_ptp - computed: true, optional: true, required: false
  private _featurePtp?: boolean | cdktf.IResolvable; 
  public get featurePtp() {
    return this.getBooleanAttribute('feature_ptp');
  }
  public set featurePtp(value: boolean | cdktf.IResolvable) {
    this._featurePtp = value;
  }
  public resetFeaturePtp() {
    this._featurePtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featurePtpInput() {
    return this._featurePtp;
  }

  // feature_ptp_internal - computed: true, optional: false, required: false
  public get featurePtpInternal() {
    return this.getBooleanAttribute('feature_ptp_internal');
  }

  // ff - computed: true, optional: true, required: false
  private _ff?: string; 
  public get ff() {
    return this.getStringAttribute('ff');
  }
  public set ff(value: string) {
    this._ff = value;
  }
  public resetFf() {
    this._ff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ffInput() {
    return this._ff;
  }

  // grfield_debug_flag - computed: true, optional: true, required: false
  private _grfieldDebugFlag?: string; 
  public get grfieldDebugFlag() {
    return this.getStringAttribute('grfield_debug_flag');
  }
  public set grfieldDebugFlag(value: string) {
    this._grfieldDebugFlag = value;
  }
  public resetGrfieldDebugFlag() {
    this._grfieldDebugFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grfieldDebugFlagInput() {
    return this._grfieldDebugFlag;
  }

  // hd_time - computed: true, optional: true, required: false
  private _hdTime?: number; 
  public get hdTime() {
    return this.getNumberAttribute('hd_time');
  }
  public set hdTime(value: number) {
    this._hdTime = value;
  }
  public resetHdTime() {
    this._hdTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hdTimeInput() {
    return this._hdTime;
  }

  // host_intf_admin_state - computed: true, optional: true, required: false
  private _hostIntfAdminState?: boolean | cdktf.IResolvable; 
  public get hostIntfAdminState() {
    return this.getBooleanAttribute('host_intf_admin_state');
  }
  public set hostIntfAdminState(value: boolean | cdktf.IResolvable) {
    this._hostIntfAdminState = value;
  }
  public resetHostIntfAdminState() {
    this._hostIntfAdminState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIntfAdminStateInput() {
    return this._hostIntfAdminState;
  }

  // ibgp_peer_template - computed: true, optional: true, required: false
  private _ibgpPeerTemplate?: string; 
  public get ibgpPeerTemplate() {
    return this.getStringAttribute('ibgp_peer_template');
  }
  public set ibgpPeerTemplate(value: string) {
    this._ibgpPeerTemplate = value;
  }
  public resetIbgpPeerTemplate() {
    this._ibgpPeerTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibgpPeerTemplateInput() {
    return this._ibgpPeerTemplate;
  }

  // ibgp_peer_template_leaf - computed: true, optional: true, required: false
  private _ibgpPeerTemplateLeaf?: string; 
  public get ibgpPeerTemplateLeaf() {
    return this.getStringAttribute('ibgp_peer_template_leaf');
  }
  public set ibgpPeerTemplateLeaf(value: string) {
    this._ibgpPeerTemplateLeaf = value;
  }
  public resetIbgpPeerTemplateLeaf() {
    this._ibgpPeerTemplateLeaf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibgpPeerTemplateLeafInput() {
    return this._ibgpPeerTemplateLeaf;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_cert - computed: true, optional: true, required: false
  private _ignoreCert?: boolean | cdktf.IResolvable; 
  public get ignoreCert() {
    return this.getBooleanAttribute('ignore_cert');
  }
  public set ignoreCert(value: boolean | cdktf.IResolvable) {
    this._ignoreCert = value;
  }
  public resetIgnoreCert() {
    this._ignoreCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCertInput() {
    return this._ignoreCert;
  }

  // inband_dhcp_servers - computed: true, optional: true, required: false
  private _inbandDhcpServers?: string; 
  public get inbandDhcpServers() {
    return this.getStringAttribute('inband_dhcp_servers');
  }
  public set inbandDhcpServers(value: string) {
    this._inbandDhcpServers = value;
  }
  public resetInbandDhcpServers() {
    this._inbandDhcpServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inbandDhcpServersInput() {
    return this._inbandDhcpServers;
  }

  // inband_mgmt - computed: true, optional: true, required: false
  private _inbandMgmt?: boolean | cdktf.IResolvable; 
  public get inbandMgmt() {
    return this.getBooleanAttribute('inband_mgmt');
  }
  public set inbandMgmt(value: boolean | cdktf.IResolvable) {
    this._inbandMgmt = value;
  }
  public resetInbandMgmt() {
    this._inbandMgmt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inbandMgmtInput() {
    return this._inbandMgmt;
  }

  // inband_mgmt_prev - computed: true, optional: false, required: false
  public get inbandMgmtPrev() {
    return this.getBooleanAttribute('inband_mgmt_prev');
  }

  // intf_stat_load_interval - computed: true, optional: true, required: false
  private _intfStatLoadInterval?: number; 
  public get intfStatLoadInterval() {
    return this.getNumberAttribute('intf_stat_load_interval');
  }
  public set intfStatLoadInterval(value: number) {
    this._intfStatLoadInterval = value;
  }
  public resetIntfStatLoadInterval() {
    this._intfStatLoadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intfStatLoadIntervalInput() {
    return this._intfStatLoadInterval;
  }

  // ipv6_anycast_rp_ip_range - computed: true, optional: true, required: false
  private _ipv6AnycastRpIpRange?: string; 
  public get ipv6AnycastRpIpRange() {
    return this.getStringAttribute('ipv6_anycast_rp_ip_range');
  }
  public set ipv6AnycastRpIpRange(value: string) {
    this._ipv6AnycastRpIpRange = value;
  }
  public resetIpv6AnycastRpIpRange() {
    this._ipv6AnycastRpIpRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AnycastRpIpRangeInput() {
    return this._ipv6AnycastRpIpRange;
  }

  // ipv6_anycast_rp_ip_range_internal - computed: true, optional: false, required: false
  public get ipv6AnycastRpIpRangeInternal() {
    return this.getStringAttribute('ipv6_anycast_rp_ip_range_internal');
  }

  // ipv6_multicast_group_subnet - computed: true, optional: true, required: false
  private _ipv6MulticastGroupSubnet?: string; 
  public get ipv6MulticastGroupSubnet() {
    return this.getStringAttribute('ipv6_multicast_group_subnet');
  }
  public set ipv6MulticastGroupSubnet(value: string) {
    this._ipv6MulticastGroupSubnet = value;
  }
  public resetIpv6MulticastGroupSubnet() {
    this._ipv6MulticastGroupSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6MulticastGroupSubnetInput() {
    return this._ipv6MulticastGroupSubnet;
  }

  // isis_area_num - computed: true, optional: true, required: false
  private _isisAreaNum?: string; 
  public get isisAreaNum() {
    return this.getStringAttribute('isis_area_num');
  }
  public set isisAreaNum(value: string) {
    this._isisAreaNum = value;
  }
  public resetIsisAreaNum() {
    this._isisAreaNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisAreaNumInput() {
    return this._isisAreaNum;
  }

  // isis_area_num_prev - computed: true, optional: false, required: false
  public get isisAreaNumPrev() {
    return this.getStringAttribute('isis_area_num_prev');
  }

  // isis_auth_enable - computed: true, optional: true, required: false
  private _isisAuthEnable?: boolean | cdktf.IResolvable; 
  public get isisAuthEnable() {
    return this.getBooleanAttribute('isis_auth_enable');
  }
  public set isisAuthEnable(value: boolean | cdktf.IResolvable) {
    this._isisAuthEnable = value;
  }
  public resetIsisAuthEnable() {
    this._isisAuthEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisAuthEnableInput() {
    return this._isisAuthEnable;
  }

  // isis_auth_key - computed: true, optional: true, required: false
  private _isisAuthKey?: string; 
  public get isisAuthKey() {
    return this.getStringAttribute('isis_auth_key');
  }
  public set isisAuthKey(value: string) {
    this._isisAuthKey = value;
  }
  public resetIsisAuthKey() {
    this._isisAuthKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisAuthKeyInput() {
    return this._isisAuthKey;
  }

  // isis_auth_keychain_key_id - computed: true, optional: true, required: false
  private _isisAuthKeychainKeyId?: number; 
  public get isisAuthKeychainKeyId() {
    return this.getNumberAttribute('isis_auth_keychain_key_id');
  }
  public set isisAuthKeychainKeyId(value: number) {
    this._isisAuthKeychainKeyId = value;
  }
  public resetIsisAuthKeychainKeyId() {
    this._isisAuthKeychainKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisAuthKeychainKeyIdInput() {
    return this._isisAuthKeychainKeyId;
  }

  // isis_auth_keychain_name - computed: true, optional: true, required: false
  private _isisAuthKeychainName?: string; 
  public get isisAuthKeychainName() {
    return this.getStringAttribute('isis_auth_keychain_name');
  }
  public set isisAuthKeychainName(value: string) {
    this._isisAuthKeychainName = value;
  }
  public resetIsisAuthKeychainName() {
    this._isisAuthKeychainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisAuthKeychainNameInput() {
    return this._isisAuthKeychainName;
  }

  // isis_level - computed: true, optional: true, required: false
  private _isisLevel?: string; 
  public get isisLevel() {
    return this.getStringAttribute('isis_level');
  }
  public set isisLevel(value: string) {
    this._isisLevel = value;
  }
  public resetIsisLevel() {
    this._isisLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisLevelInput() {
    return this._isisLevel;
  }

  // isis_overload_elapse_time - computed: true, optional: true, required: false
  private _isisOverloadElapseTime?: number; 
  public get isisOverloadElapseTime() {
    return this.getNumberAttribute('isis_overload_elapse_time');
  }
  public set isisOverloadElapseTime(value: number) {
    this._isisOverloadElapseTime = value;
  }
  public resetIsisOverloadElapseTime() {
    this._isisOverloadElapseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisOverloadElapseTimeInput() {
    return this._isisOverloadElapseTime;
  }

  // isis_overload_enable - computed: true, optional: true, required: false
  private _isisOverloadEnable?: boolean | cdktf.IResolvable; 
  public get isisOverloadEnable() {
    return this.getBooleanAttribute('isis_overload_enable');
  }
  public set isisOverloadEnable(value: boolean | cdktf.IResolvable) {
    this._isisOverloadEnable = value;
  }
  public resetIsisOverloadEnable() {
    this._isisOverloadEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisOverloadEnableInput() {
    return this._isisOverloadEnable;
  }

  // isis_p2p_enable - computed: true, optional: true, required: false
  private _isisP2PEnable?: boolean | cdktf.IResolvable; 
  public get isisP2PEnable() {
    return this.getBooleanAttribute('isis_p2p_enable');
  }
  public set isisP2PEnable(value: boolean | cdktf.IResolvable) {
    this._isisP2PEnable = value;
  }
  public resetIsisP2PEnable() {
    this._isisP2PEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisP2PEnableInput() {
    return this._isisP2PEnable;
  }

  // kme_server_ip - computed: true, optional: true, required: false
  private _kmeServerIp?: string; 
  public get kmeServerIp() {
    return this.getStringAttribute('kme_server_ip');
  }
  public set kmeServerIp(value: string) {
    this._kmeServerIp = value;
  }
  public resetKmeServerIp() {
    this._kmeServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmeServerIpInput() {
    return this._kmeServerIp;
  }

  // kme_server_port - computed: true, optional: true, required: false
  private _kmeServerPort?: number; 
  public get kmeServerPort() {
    return this.getNumberAttribute('kme_server_port');
  }
  public set kmeServerPort(value: number) {
    this._kmeServerPort = value;
  }
  public resetKmeServerPort() {
    this._kmeServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmeServerPortInput() {
    return this._kmeServerPort;
  }

  // l2_host_intf_mtu - computed: true, optional: true, required: false
  private _l2HostIntfMtu?: number; 
  public get l2HostIntfMtu() {
    return this.getNumberAttribute('l2_host_intf_mtu');
  }
  public set l2HostIntfMtu(value: number) {
    this._l2HostIntfMtu = value;
  }
  public resetL2HostIntfMtu() {
    this._l2HostIntfMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2HostIntfMtuInput() {
    return this._l2HostIntfMtu;
  }

  // l2_host_intf_mtu_prev - computed: true, optional: false, required: false
  public get l2HostIntfMtuPrev() {
    return this.getNumberAttribute('l2_host_intf_mtu_prev');
  }

  // l2_segment_id_range - computed: true, optional: true, required: false
  private _l2SegmentIdRange?: string; 
  public get l2SegmentIdRange() {
    return this.getStringAttribute('l2_segment_id_range');
  }
  public set l2SegmentIdRange(value: string) {
    this._l2SegmentIdRange = value;
  }
  public resetL2SegmentIdRange() {
    this._l2SegmentIdRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2SegmentIdRangeInput() {
    return this._l2SegmentIdRange;
  }

  // l3_partition_id_range - computed: true, optional: true, required: false
  private _l3PartitionIdRange?: string; 
  public get l3PartitionIdRange() {
    return this.getStringAttribute('l3_partition_id_range');
  }
  public set l3PartitionIdRange(value: string) {
    this._l3PartitionIdRange = value;
  }
  public resetL3PartitionIdRange() {
    this._l3PartitionIdRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3PartitionIdRangeInput() {
    return this._l3PartitionIdRange;
  }

  // l3vni_ipv6_mcast_group - computed: true, optional: true, required: false
  private _l3VniIpv6McastGroup?: string; 
  public get l3VniIpv6McastGroup() {
    return this.getStringAttribute('l3vni_ipv6_mcast_group');
  }
  public set l3VniIpv6McastGroup(value: string) {
    this._l3VniIpv6McastGroup = value;
  }
  public resetL3VniIpv6McastGroup() {
    this._l3VniIpv6McastGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3VniIpv6McastGroupInput() {
    return this._l3VniIpv6McastGroup;
  }

  // l3vni_mcast_group - computed: true, optional: true, required: false
  private _l3VniMcastGroup?: string; 
  public get l3VniMcastGroup() {
    return this.getStringAttribute('l3vni_mcast_group');
  }
  public set l3VniMcastGroup(value: string) {
    this._l3VniMcastGroup = value;
  }
  public resetL3VniMcastGroup() {
    this._l3VniMcastGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3VniMcastGroupInput() {
    return this._l3VniMcastGroup;
  }

  // link_state_routing - computed: true, optional: true, required: false
  private _linkStateRouting?: string; 
  public get linkStateRouting() {
    return this.getStringAttribute('link_state_routing');
  }
  public set linkStateRouting(value: string) {
    this._linkStateRouting = value;
  }
  public resetLinkStateRouting() {
    this._linkStateRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkStateRoutingInput() {
    return this._linkStateRouting;
  }

  // link_state_routing_tag - computed: true, optional: true, required: false
  private _linkStateRoutingTag?: string; 
  public get linkStateRoutingTag() {
    return this.getStringAttribute('link_state_routing_tag');
  }
  public set linkStateRoutingTag(value: string) {
    this._linkStateRoutingTag = value;
  }
  public resetLinkStateRoutingTag() {
    this._linkStateRoutingTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkStateRoutingTagInput() {
    return this._linkStateRoutingTag;
  }

  // link_state_routing_tag_prev - computed: true, optional: false, required: false
  public get linkStateRoutingTagPrev() {
    return this.getStringAttribute('link_state_routing_tag_prev');
  }

  // loopback0_ip_range - computed: true, optional: true, required: false
  private _loopback0IpRange?: string; 
  public get loopback0IpRange() {
    return this.getStringAttribute('loopback0_ip_range');
  }
  public set loopback0IpRange(value: string) {
    this._loopback0IpRange = value;
  }
  public resetLoopback0IpRange() {
    this._loopback0IpRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopback0IpRangeInput() {
    return this._loopback0IpRange;
  }

  // loopback0_ipv6_range - computed: true, optional: true, required: false
  private _loopback0Ipv6Range?: string; 
  public get loopback0Ipv6Range() {
    return this.getStringAttribute('loopback0_ipv6_range');
  }
  public set loopback0Ipv6Range(value: string) {
    this._loopback0Ipv6Range = value;
  }
  public resetLoopback0Ipv6Range() {
    this._loopback0Ipv6Range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopback0Ipv6RangeInput() {
    return this._loopback0Ipv6Range;
  }

  // loopback1_ip_range - computed: true, optional: true, required: false
  private _loopback1IpRange?: string; 
  public get loopback1IpRange() {
    return this.getStringAttribute('loopback1_ip_range');
  }
  public set loopback1IpRange(value: string) {
    this._loopback1IpRange = value;
  }
  public resetLoopback1IpRange() {
    this._loopback1IpRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopback1IpRangeInput() {
    return this._loopback1IpRange;
  }

  // loopback1_ipv6_range - computed: true, optional: true, required: false
  private _loopback1Ipv6Range?: string; 
  public get loopback1Ipv6Range() {
    return this.getStringAttribute('loopback1_ipv6_range');
  }
  public set loopback1Ipv6Range(value: string) {
    this._loopback1Ipv6Range = value;
  }
  public resetLoopback1Ipv6Range() {
    this._loopback1Ipv6Range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopback1Ipv6RangeInput() {
    return this._loopback1Ipv6Range;
  }

  // macsec_algorithm - computed: true, optional: true, required: false
  private _macsecAlgorithm?: string; 
  public get macsecAlgorithm() {
    return this.getStringAttribute('macsec_algorithm');
  }
  public set macsecAlgorithm(value: string) {
    this._macsecAlgorithm = value;
  }
  public resetMacsecAlgorithm() {
    this._macsecAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macsecAlgorithmInput() {
    return this._macsecAlgorithm;
  }

  // macsec_cipher_suite - computed: true, optional: true, required: false
  private _macsecCipherSuite?: string; 
  public get macsecCipherSuite() {
    return this.getStringAttribute('macsec_cipher_suite');
  }
  public set macsecCipherSuite(value: string) {
    this._macsecCipherSuite = value;
  }
  public resetMacsecCipherSuite() {
    this._macsecCipherSuite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macsecCipherSuiteInput() {
    return this._macsecCipherSuite;
  }

  // macsec_fallback_algorithm - computed: true, optional: true, required: false
  private _macsecFallbackAlgorithm?: string; 
  public get macsecFallbackAlgorithm() {
    return this.getStringAttribute('macsec_fallback_algorithm');
  }
  public set macsecFallbackAlgorithm(value: string) {
    this._macsecFallbackAlgorithm = value;
  }
  public resetMacsecFallbackAlgorithm() {
    this._macsecFallbackAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macsecFallbackAlgorithmInput() {
    return this._macsecFallbackAlgorithm;
  }

  // macsec_fallback_key_string - computed: true, optional: true, required: false
  private _macsecFallbackKeyString?: string; 
  public get macsecFallbackKeyString() {
    return this.getStringAttribute('macsec_fallback_key_string');
  }
  public set macsecFallbackKeyString(value: string) {
    this._macsecFallbackKeyString = value;
  }
  public resetMacsecFallbackKeyString() {
    this._macsecFallbackKeyString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macsecFallbackKeyStringInput() {
    return this._macsecFallbackKeyString;
  }

  // macsec_key_string - computed: true, optional: true, required: false
  private _macsecKeyString?: string; 
  public get macsecKeyString() {
    return this.getStringAttribute('macsec_key_string');
  }
  public set macsecKeyString(value: string) {
    this._macsecKeyString = value;
  }
  public resetMacsecKeyString() {
    this._macsecKeyString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macsecKeyStringInput() {
    return this._macsecKeyString;
  }

  // macsec_report_timer - computed: true, optional: true, required: false
  private _macsecReportTimer?: number; 
  public get macsecReportTimer() {
    return this.getNumberAttribute('macsec_report_timer');
  }
  public set macsecReportTimer(value: number) {
    this._macsecReportTimer = value;
  }
  public resetMacsecReportTimer() {
    this._macsecReportTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macsecReportTimerInput() {
    return this._macsecReportTimer;
  }

  // mgmt_gw - computed: true, optional: true, required: false
  private _mgmtGw?: string; 
  public get mgmtGw() {
    return this.getStringAttribute('mgmt_gw');
  }
  public set mgmtGw(value: string) {
    this._mgmtGw = value;
  }
  public resetMgmtGw() {
    this._mgmtGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtGwInput() {
    return this._mgmtGw;
  }

  // mgmt_gw_internal - computed: true, optional: false, required: false
  public get mgmtGwInternal() {
    return this.getStringAttribute('mgmt_gw_internal');
  }

  // mgmt_prefix - computed: true, optional: true, required: false
  private _mgmtPrefix?: number; 
  public get mgmtPrefix() {
    return this.getNumberAttribute('mgmt_prefix');
  }
  public set mgmtPrefix(value: number) {
    this._mgmtPrefix = value;
  }
  public resetMgmtPrefix() {
    this._mgmtPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtPrefixInput() {
    return this._mgmtPrefix;
  }

  // mgmt_prefix_internal - computed: true, optional: false, required: false
  public get mgmtPrefixInternal() {
    return this.getNumberAttribute('mgmt_prefix_internal');
  }

  // mgmt_v6prefix - computed: true, optional: true, required: false
  private _mgmtV6Prefix?: number; 
  public get mgmtV6Prefix() {
    return this.getNumberAttribute('mgmt_v6prefix');
  }
  public set mgmtV6Prefix(value: number) {
    this._mgmtV6Prefix = value;
  }
  public resetMgmtV6Prefix() {
    this._mgmtV6Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtV6PrefixInput() {
    return this._mgmtV6Prefix;
  }

  // mgmt_v6prefix_internal - computed: true, optional: false, required: false
  public get mgmtV6PrefixInternal() {
    return this.getNumberAttribute('mgmt_v6prefix_internal');
  }

  // mpls_handoff - computed: true, optional: true, required: false
  private _mplsHandoff?: boolean | cdktf.IResolvable; 
  public get mplsHandoff() {
    return this.getBooleanAttribute('mpls_handoff');
  }
  public set mplsHandoff(value: boolean | cdktf.IResolvable) {
    this._mplsHandoff = value;
  }
  public resetMplsHandoff() {
    this._mplsHandoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mplsHandoffInput() {
    return this._mplsHandoff;
  }

  // mpls_isis_area_num - computed: true, optional: true, required: false
  private _mplsIsisAreaNum?: string; 
  public get mplsIsisAreaNum() {
    return this.getStringAttribute('mpls_isis_area_num');
  }
  public set mplsIsisAreaNum(value: string) {
    this._mplsIsisAreaNum = value;
  }
  public resetMplsIsisAreaNum() {
    this._mplsIsisAreaNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mplsIsisAreaNumInput() {
    return this._mplsIsisAreaNum;
  }

  // mpls_isis_area_num_prev - computed: true, optional: false, required: false
  public get mplsIsisAreaNumPrev() {
    return this.getStringAttribute('mpls_isis_area_num_prev');
  }

  // mpls_lb_id - computed: true, optional: true, required: false
  private _mplsLbId?: number; 
  public get mplsLbId() {
    return this.getNumberAttribute('mpls_lb_id');
  }
  public set mplsLbId(value: number) {
    this._mplsLbId = value;
  }
  public resetMplsLbId() {
    this._mplsLbId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mplsLbIdInput() {
    return this._mplsLbId;
  }

  // mpls_loopback_ip_range - computed: true, optional: true, required: false
  private _mplsLoopbackIpRange?: string; 
  public get mplsLoopbackIpRange() {
    return this.getStringAttribute('mpls_loopback_ip_range');
  }
  public set mplsLoopbackIpRange(value: string) {
    this._mplsLoopbackIpRange = value;
  }
  public resetMplsLoopbackIpRange() {
    this._mplsLoopbackIpRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mplsLoopbackIpRangeInput() {
    return this._mplsLoopbackIpRange;
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

  // mst_instance_range - computed: true, optional: true, required: false
  private _mstInstanceRange?: string; 
  public get mstInstanceRange() {
    return this.getStringAttribute('mst_instance_range');
  }
  public set mstInstanceRange(value: string) {
    this._mstInstanceRange = value;
  }
  public resetMstInstanceRange() {
    this._mstInstanceRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mstInstanceRangeInput() {
    return this._mstInstanceRange;
  }

  // multicast_group_subnet - computed: true, optional: true, required: false
  private _multicastGroupSubnet?: string; 
  public get multicastGroupSubnet() {
    return this.getStringAttribute('multicast_group_subnet');
  }
  public set multicastGroupSubnet(value: string) {
    this._multicastGroupSubnet = value;
  }
  public resetMulticastGroupSubnet() {
    this._multicastGroupSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastGroupSubnetInput() {
    return this._multicastGroupSubnet;
  }

  // mvpn_vri_id_range - computed: true, optional: true, required: false
  private _mvpnVriIdRange?: string; 
  public get mvpnVriIdRange() {
    return this.getStringAttribute('mvpn_vri_id_range');
  }
  public set mvpnVriIdRange(value: string) {
    this._mvpnVriIdRange = value;
  }
  public resetMvpnVriIdRange() {
    this._mvpnVriIdRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mvpnVriIdRangeInput() {
    return this._mvpnVriIdRange;
  }

  // netflow_exporter_list - computed: true, optional: true, required: false
  private _netflowExporterList?: string; 
  public get netflowExporterList() {
    return this.getStringAttribute('netflow_exporter_list');
  }
  public set netflowExporterList(value: string) {
    this._netflowExporterList = value;
  }
  public resetNetflowExporterList() {
    this._netflowExporterList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowExporterListInput() {
    return this._netflowExporterList;
  }

  // netflow_monitor_list - computed: true, optional: true, required: false
  private _netflowMonitorList?: string; 
  public get netflowMonitorList() {
    return this.getStringAttribute('netflow_monitor_list');
  }
  public set netflowMonitorList(value: string) {
    this._netflowMonitorList = value;
  }
  public resetNetflowMonitorList() {
    this._netflowMonitorList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowMonitorListInput() {
    return this._netflowMonitorList;
  }

  // netflow_record_list - computed: true, optional: true, required: false
  private _netflowRecordList?: string; 
  public get netflowRecordList() {
    return this.getStringAttribute('netflow_record_list');
  }
  public set netflowRecordList(value: string) {
    this._netflowRecordList = value;
  }
  public resetNetflowRecordList() {
    this._netflowRecordList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowRecordListInput() {
    return this._netflowRecordList;
  }

  // network_extension_template - computed: true, optional: true, required: false
  private _networkExtensionTemplate?: string; 
  public get networkExtensionTemplate() {
    return this.getStringAttribute('network_extension_template');
  }
  public set networkExtensionTemplate(value: string) {
    this._networkExtensionTemplate = value;
  }
  public resetNetworkExtensionTemplate() {
    this._networkExtensionTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkExtensionTemplateInput() {
    return this._networkExtensionTemplate;
  }

  // network_vlan_range - computed: true, optional: true, required: false
  private _networkVlanRange?: string; 
  public get networkVlanRange() {
    return this.getStringAttribute('network_vlan_range');
  }
  public set networkVlanRange(value: string) {
    this._networkVlanRange = value;
  }
  public resetNetworkVlanRange() {
    this._networkVlanRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkVlanRangeInput() {
    return this._networkVlanRange;
  }

  // ntp_server_ip_list - computed: true, optional: true, required: false
  private _ntpServerIpList?: string; 
  public get ntpServerIpList() {
    return this.getStringAttribute('ntp_server_ip_list');
  }
  public set ntpServerIpList(value: string) {
    this._ntpServerIpList = value;
  }
  public resetNtpServerIpList() {
    this._ntpServerIpList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServerIpListInput() {
    return this._ntpServerIpList;
  }

  // ntp_server_vrf - computed: true, optional: true, required: false
  private _ntpServerVrf?: string; 
  public get ntpServerVrf() {
    return this.getStringAttribute('ntp_server_vrf');
  }
  public set ntpServerVrf(value: string) {
    this._ntpServerVrf = value;
  }
  public resetNtpServerVrf() {
    this._ntpServerVrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServerVrfInput() {
    return this._ntpServerVrf;
  }

  // nve_lb_id - computed: true, optional: true, required: false
  private _nveLbId?: number; 
  public get nveLbId() {
    return this.getNumberAttribute('nve_lb_id');
  }
  public set nveLbId(value: number) {
    this._nveLbId = value;
  }
  public resetNveLbId() {
    this._nveLbId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nveLbIdInput() {
    return this._nveLbId;
  }

  // nxapi_http_port - computed: true, optional: true, required: false
  private _nxapiHttpPort?: number; 
  public get nxapiHttpPort() {
    return this.getNumberAttribute('nxapi_http_port');
  }
  public set nxapiHttpPort(value: number) {
    this._nxapiHttpPort = value;
  }
  public resetNxapiHttpPort() {
    this._nxapiHttpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxapiHttpPortInput() {
    return this._nxapiHttpPort;
  }

  // nxapi_https_port - computed: true, optional: true, required: false
  private _nxapiHttpsPort?: number; 
  public get nxapiHttpsPort() {
    return this.getNumberAttribute('nxapi_https_port');
  }
  public set nxapiHttpsPort(value: number) {
    this._nxapiHttpsPort = value;
  }
  public resetNxapiHttpsPort() {
    this._nxapiHttpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxapiHttpsPortInput() {
    return this._nxapiHttpsPort;
  }

  // nxc_dest_vrf - computed: true, optional: true, required: false
  private _nxcDestVrf?: string; 
  public get nxcDestVrf() {
    return this.getStringAttribute('nxc_dest_vrf');
  }
  public set nxcDestVrf(value: string) {
    this._nxcDestVrf = value;
  }
  public resetNxcDestVrf() {
    this._nxcDestVrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxcDestVrfInput() {
    return this._nxcDestVrf;
  }

  // nxc_proxy_port - computed: true, optional: true, required: false
  private _nxcProxyPort?: number; 
  public get nxcProxyPort() {
    return this.getNumberAttribute('nxc_proxy_port');
  }
  public set nxcProxyPort(value: number) {
    this._nxcProxyPort = value;
  }
  public resetNxcProxyPort() {
    this._nxcProxyPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxcProxyPortInput() {
    return this._nxcProxyPort;
  }

  // nxc_proxy_server - computed: true, optional: true, required: false
  private _nxcProxyServer?: string; 
  public get nxcProxyServer() {
    return this.getStringAttribute('nxc_proxy_server');
  }
  public set nxcProxyServer(value: string) {
    this._nxcProxyServer = value;
  }
  public resetNxcProxyServer() {
    this._nxcProxyServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxcProxyServerInput() {
    return this._nxcProxyServer;
  }

  // nxc_src_intf - computed: true, optional: true, required: false
  private _nxcSrcIntf?: string; 
  public get nxcSrcIntf() {
    return this.getStringAttribute('nxc_src_intf');
  }
  public set nxcSrcIntf(value: string) {
    this._nxcSrcIntf = value;
  }
  public resetNxcSrcIntf() {
    this._nxcSrcIntf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxcSrcIntfInput() {
    return this._nxcSrcIntf;
  }

  // object_tracking_number_range - computed: true, optional: true, required: false
  private _objectTrackingNumberRange?: string; 
  public get objectTrackingNumberRange() {
    return this.getStringAttribute('object_tracking_number_range');
  }
  public set objectTrackingNumberRange(value: string) {
    this._objectTrackingNumberRange = value;
  }
  public resetObjectTrackingNumberRange() {
    this._objectTrackingNumberRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTrackingNumberRangeInput() {
    return this._objectTrackingNumberRange;
  }

  // ospf_area_id - computed: true, optional: true, required: false
  private _ospfAreaId?: string; 
  public get ospfAreaId() {
    return this.getStringAttribute('ospf_area_id');
  }
  public set ospfAreaId(value: string) {
    this._ospfAreaId = value;
  }
  public resetOspfAreaId() {
    this._ospfAreaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfAreaIdInput() {
    return this._ospfAreaId;
  }

  // ospf_auth_enable - computed: true, optional: true, required: false
  private _ospfAuthEnable?: boolean | cdktf.IResolvable; 
  public get ospfAuthEnable() {
    return this.getBooleanAttribute('ospf_auth_enable');
  }
  public set ospfAuthEnable(value: boolean | cdktf.IResolvable) {
    this._ospfAuthEnable = value;
  }
  public resetOspfAuthEnable() {
    this._ospfAuthEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfAuthEnableInput() {
    return this._ospfAuthEnable;
  }

  // ospf_auth_key - computed: true, optional: true, required: false
  private _ospfAuthKey?: string; 
  public get ospfAuthKey() {
    return this.getStringAttribute('ospf_auth_key');
  }
  public set ospfAuthKey(value: string) {
    this._ospfAuthKey = value;
  }
  public resetOspfAuthKey() {
    this._ospfAuthKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfAuthKeyInput() {
    return this._ospfAuthKey;
  }

  // ospf_auth_key_id - computed: true, optional: true, required: false
  private _ospfAuthKeyId?: number; 
  public get ospfAuthKeyId() {
    return this.getNumberAttribute('ospf_auth_key_id');
  }
  public set ospfAuthKeyId(value: number) {
    this._ospfAuthKeyId = value;
  }
  public resetOspfAuthKeyId() {
    this._ospfAuthKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfAuthKeyIdInput() {
    return this._ospfAuthKeyId;
  }

  // overlay_mode - computed: true, optional: true, required: false
  private _overlayMode?: string; 
  public get overlayMode() {
    return this.getStringAttribute('overlay_mode');
  }
  public set overlayMode(value: string) {
    this._overlayMode = value;
  }
  public resetOverlayMode() {
    this._overlayMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlayModeInput() {
    return this._overlayMode;
  }

  // overlay_mode_prev - computed: true, optional: false, required: false
  public get overlayModePrev() {
    return this.getStringAttribute('overlay_mode_prev');
  }

  // overwrite_global_nxc - computed: true, optional: true, required: false
  private _overwriteGlobalNxc?: boolean | cdktf.IResolvable; 
  public get overwriteGlobalNxc() {
    return this.getBooleanAttribute('overwrite_global_nxc');
  }
  public set overwriteGlobalNxc(value: boolean | cdktf.IResolvable) {
    this._overwriteGlobalNxc = value;
  }
  public resetOverwriteGlobalNxc() {
    this._overwriteGlobalNxc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteGlobalNxcInput() {
    return this._overwriteGlobalNxc;
  }

  // per_vrf_loopback_auto_provision - computed: true, optional: true, required: false
  private _perVrfLoopbackAutoProvision?: boolean | cdktf.IResolvable; 
  public get perVrfLoopbackAutoProvision() {
    return this.getBooleanAttribute('per_vrf_loopback_auto_provision');
  }
  public set perVrfLoopbackAutoProvision(value: boolean | cdktf.IResolvable) {
    this._perVrfLoopbackAutoProvision = value;
  }
  public resetPerVrfLoopbackAutoProvision() {
    this._perVrfLoopbackAutoProvision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perVrfLoopbackAutoProvisionInput() {
    return this._perVrfLoopbackAutoProvision;
  }

  // per_vrf_loopback_auto_provision_prev - computed: true, optional: false, required: false
  public get perVrfLoopbackAutoProvisionPrev() {
    return this.getBooleanAttribute('per_vrf_loopback_auto_provision_prev');
  }

  // per_vrf_loopback_auto_provision_v6 - computed: true, optional: true, required: false
  private _perVrfLoopbackAutoProvisionV6?: boolean | cdktf.IResolvable; 
  public get perVrfLoopbackAutoProvisionV6() {
    return this.getBooleanAttribute('per_vrf_loopback_auto_provision_v6');
  }
  public set perVrfLoopbackAutoProvisionV6(value: boolean | cdktf.IResolvable) {
    this._perVrfLoopbackAutoProvisionV6 = value;
  }
  public resetPerVrfLoopbackAutoProvisionV6() {
    this._perVrfLoopbackAutoProvisionV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perVrfLoopbackAutoProvisionV6Input() {
    return this._perVrfLoopbackAutoProvisionV6;
  }

  // per_vrf_loopback_auto_provision_v6_prev - computed: true, optional: false, required: false
  public get perVrfLoopbackAutoProvisionV6Prev() {
    return this.getBooleanAttribute('per_vrf_loopback_auto_provision_v6_prev');
  }

  // per_vrf_loopback_ip_range - computed: true, optional: true, required: false
  private _perVrfLoopbackIpRange?: string; 
  public get perVrfLoopbackIpRange() {
    return this.getStringAttribute('per_vrf_loopback_ip_range');
  }
  public set perVrfLoopbackIpRange(value: string) {
    this._perVrfLoopbackIpRange = value;
  }
  public resetPerVrfLoopbackIpRange() {
    this._perVrfLoopbackIpRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perVrfLoopbackIpRangeInput() {
    return this._perVrfLoopbackIpRange;
  }

  // per_vrf_loopback_ip_range_v6 - computed: true, optional: true, required: false
  private _perVrfLoopbackIpRangeV6?: string; 
  public get perVrfLoopbackIpRangeV6() {
    return this.getStringAttribute('per_vrf_loopback_ip_range_v6');
  }
  public set perVrfLoopbackIpRangeV6(value: string) {
    this._perVrfLoopbackIpRangeV6 = value;
  }
  public resetPerVrfLoopbackIpRangeV6() {
    this._perVrfLoopbackIpRangeV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perVrfLoopbackIpRangeV6Input() {
    return this._perVrfLoopbackIpRangeV6;
  }

  // pfc_watch_int - computed: true, optional: true, required: false
  private _pfcWatchInt?: number; 
  public get pfcWatchInt() {
    return this.getNumberAttribute('pfc_watch_int');
  }
  public set pfcWatchInt(value: number) {
    this._pfcWatchInt = value;
  }
  public resetPfcWatchInt() {
    this._pfcWatchInt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pfcWatchIntInput() {
    return this._pfcWatchInt;
  }

  // pfc_watch_int_prev - computed: true, optional: false, required: false
  public get pfcWatchIntPrev() {
    return this.getNumberAttribute('pfc_watch_int_prev');
  }

  // phantom_rp_lb_id1 - computed: true, optional: true, required: false
  private _phantomRpLbId1?: number; 
  public get phantomRpLbId1() {
    return this.getNumberAttribute('phantom_rp_lb_id1');
  }
  public set phantomRpLbId1(value: number) {
    this._phantomRpLbId1 = value;
  }
  public resetPhantomRpLbId1() {
    this._phantomRpLbId1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phantomRpLbId1Input() {
    return this._phantomRpLbId1;
  }

  // phantom_rp_lb_id2 - computed: true, optional: true, required: false
  private _phantomRpLbId2?: number; 
  public get phantomRpLbId2() {
    return this.getNumberAttribute('phantom_rp_lb_id2');
  }
  public set phantomRpLbId2(value: number) {
    this._phantomRpLbId2 = value;
  }
  public resetPhantomRpLbId2() {
    this._phantomRpLbId2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phantomRpLbId2Input() {
    return this._phantomRpLbId2;
  }

  // phantom_rp_lb_id3 - computed: true, optional: true, required: false
  private _phantomRpLbId3?: number; 
  public get phantomRpLbId3() {
    return this.getNumberAttribute('phantom_rp_lb_id3');
  }
  public set phantomRpLbId3(value: number) {
    this._phantomRpLbId3 = value;
  }
  public resetPhantomRpLbId3() {
    this._phantomRpLbId3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phantomRpLbId3Input() {
    return this._phantomRpLbId3;
  }

  // phantom_rp_lb_id4 - computed: true, optional: true, required: false
  private _phantomRpLbId4?: number; 
  public get phantomRpLbId4() {
    return this.getNumberAttribute('phantom_rp_lb_id4');
  }
  public set phantomRpLbId4(value: number) {
    this._phantomRpLbId4 = value;
  }
  public resetPhantomRpLbId4() {
    this._phantomRpLbId4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phantomRpLbId4Input() {
    return this._phantomRpLbId4;
  }

  // pim_hello_auth_enable - computed: true, optional: true, required: false
  private _pimHelloAuthEnable?: boolean | cdktf.IResolvable; 
  public get pimHelloAuthEnable() {
    return this.getBooleanAttribute('pim_hello_auth_enable');
  }
  public set pimHelloAuthEnable(value: boolean | cdktf.IResolvable) {
    this._pimHelloAuthEnable = value;
  }
  public resetPimHelloAuthEnable() {
    this._pimHelloAuthEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pimHelloAuthEnableInput() {
    return this._pimHelloAuthEnable;
  }

  // pim_hello_auth_key - computed: true, optional: true, required: false
  private _pimHelloAuthKey?: string; 
  public get pimHelloAuthKey() {
    return this.getStringAttribute('pim_hello_auth_key');
  }
  public set pimHelloAuthKey(value: string) {
    this._pimHelloAuthKey = value;
  }
  public resetPimHelloAuthKey() {
    this._pimHelloAuthKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pimHelloAuthKeyInput() {
    return this._pimHelloAuthKey;
  }

  // pm_enable - computed: true, optional: true, required: false
  private _pmEnable?: boolean | cdktf.IResolvable; 
  public get pmEnable() {
    return this.getBooleanAttribute('pm_enable');
  }
  public set pmEnable(value: boolean | cdktf.IResolvable) {
    this._pmEnable = value;
  }
  public resetPmEnable() {
    this._pmEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmEnableInput() {
    return this._pmEnable;
  }

  // pm_enable_prev - computed: true, optional: false, required: false
  public get pmEnablePrev() {
    return this.getBooleanAttribute('pm_enable_prev');
  }

  // power_redundancy_mode - computed: true, optional: true, required: false
  private _powerRedundancyMode?: string; 
  public get powerRedundancyMode() {
    return this.getStringAttribute('power_redundancy_mode');
  }
  public set powerRedundancyMode(value: string) {
    this._powerRedundancyMode = value;
  }
  public resetPowerRedundancyMode() {
    this._powerRedundancyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerRedundancyModeInput() {
    return this._powerRedundancyMode;
  }

  // premso_parent_fabric - computed: true, optional: false, required: false
  public get premsoParentFabric() {
    return this.getStringAttribute('premso_parent_fabric');
  }

  // ptp_domain_id - computed: true, optional: true, required: false
  private _ptpDomainId?: number; 
  public get ptpDomainId() {
    return this.getNumberAttribute('ptp_domain_id');
  }
  public set ptpDomainId(value: number) {
    this._ptpDomainId = value;
  }
  public resetPtpDomainId() {
    this._ptpDomainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ptpDomainIdInput() {
    return this._ptpDomainId;
  }

  // ptp_lb_id - computed: true, optional: true, required: false
  private _ptpLbId?: number; 
  public get ptpLbId() {
    return this.getNumberAttribute('ptp_lb_id');
  }
  public set ptpLbId(value: number) {
    this._ptpLbId = value;
  }
  public resetPtpLbId() {
    this._ptpLbId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ptpLbIdInput() {
    return this._ptpLbId;
  }

  // ptp_vlan_id - computed: true, optional: true, required: false
  private _ptpVlanId?: number; 
  public get ptpVlanId() {
    return this.getNumberAttribute('ptp_vlan_id');
  }
  public set ptpVlanId(value: number) {
    this._ptpVlanId = value;
  }
  public resetPtpVlanId() {
    this._ptpVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ptpVlanIdInput() {
    return this._ptpVlanId;
  }

  // qkd_profile_name - computed: true, optional: true, required: false
  private _qkdProfileName?: string; 
  public get qkdProfileName() {
    return this.getStringAttribute('qkd_profile_name');
  }
  public set qkdProfileName(value: string) {
    this._qkdProfileName = value;
  }
  public resetQkdProfileName() {
    this._qkdProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qkdProfileNameInput() {
    return this._qkdProfileName;
  }

  // qkd_profile_name_prev - computed: true, optional: false, required: false
  public get qkdProfileNamePrev() {
    return this.getBooleanAttribute('qkd_profile_name_prev');
  }

  // replication_mode - computed: true, optional: true, required: false
  private _replicationMode?: string; 
  public get replicationMode() {
    return this.getStringAttribute('replication_mode');
  }
  public set replicationMode(value: string) {
    this._replicationMode = value;
  }
  public resetReplicationMode() {
    this._replicationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationModeInput() {
    return this._replicationMode;
  }

  // route_map_sequence_number_range - computed: true, optional: true, required: false
  private _routeMapSequenceNumberRange?: string; 
  public get routeMapSequenceNumberRange() {
    return this.getStringAttribute('route_map_sequence_number_range');
  }
  public set routeMapSequenceNumberRange(value: string) {
    this._routeMapSequenceNumberRange = value;
  }
  public resetRouteMapSequenceNumberRange() {
    this._routeMapSequenceNumberRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapSequenceNumberRangeInput() {
    return this._routeMapSequenceNumberRange;
  }

  // router_id_range - computed: true, optional: true, required: false
  private _routerIdRange?: string; 
  public get routerIdRange() {
    return this.getStringAttribute('router_id_range');
  }
  public set routerIdRange(value: string) {
    this._routerIdRange = value;
  }
  public resetRouterIdRange() {
    this._routerIdRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdRangeInput() {
    return this._routerIdRange;
  }

  // rp_count - computed: true, optional: true, required: false
  private _rpCount?: number; 
  public get rpCount() {
    return this.getNumberAttribute('rp_count');
  }
  public set rpCount(value: number) {
    this._rpCount = value;
  }
  public resetRpCount() {
    this._rpCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpCountInput() {
    return this._rpCount;
  }

  // rp_lb_id - computed: true, optional: true, required: false
  private _rpLbId?: number; 
  public get rpLbId() {
    return this.getNumberAttribute('rp_lb_id');
  }
  public set rpLbId(value: number) {
    this._rpLbId = value;
  }
  public resetRpLbId() {
    this._rpLbId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpLbIdInput() {
    return this._rpLbId;
  }

  // rp_mode - computed: true, optional: true, required: false
  private _rpMode?: string; 
  public get rpMode() {
    return this.getStringAttribute('rp_mode');
  }
  public set rpMode(value: string) {
    this._rpMode = value;
  }
  public resetRpMode() {
    this._rpMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpModeInput() {
    return this._rpMode;
  }

  // rr_count - computed: true, optional: true, required: false
  private _rrCount?: number; 
  public get rrCount() {
    return this.getNumberAttribute('rr_count');
  }
  public set rrCount(value: number) {
    this._rrCount = value;
  }
  public resetRrCount() {
    this._rrCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrCountInput() {
    return this._rrCount;
  }

  // scheduled_time - computed: true, optional: true, required: false
  private _scheduledTime?: string; 
  public get scheduledTime() {
    return this.getStringAttribute('scheduled_time');
  }
  public set scheduledTime(value: string) {
    this._scheduledTime = value;
  }
  public resetScheduledTime() {
    this._scheduledTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledTimeInput() {
    return this._scheduledTime;
  }

  // seed_switch_core_interfaces - computed: true, optional: true, required: false
  private _seedSwitchCoreInterfaces?: string; 
  public get seedSwitchCoreInterfaces() {
    return this.getStringAttribute('seed_switch_core_interfaces');
  }
  public set seedSwitchCoreInterfaces(value: string) {
    this._seedSwitchCoreInterfaces = value;
  }
  public resetSeedSwitchCoreInterfaces() {
    this._seedSwitchCoreInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seedSwitchCoreInterfacesInput() {
    return this._seedSwitchCoreInterfaces;
  }

  // service_network_vlan_range - computed: true, optional: true, required: false
  private _serviceNetworkVlanRange?: string; 
  public get serviceNetworkVlanRange() {
    return this.getStringAttribute('service_network_vlan_range');
  }
  public set serviceNetworkVlanRange(value: string) {
    this._serviceNetworkVlanRange = value;
  }
  public resetServiceNetworkVlanRange() {
    this._serviceNetworkVlanRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNetworkVlanRangeInput() {
    return this._serviceNetworkVlanRange;
  }

  // sgt_id_range - computed: true, optional: true, required: false
  private _sgtIdRange?: string; 
  public get sgtIdRange() {
    return this.getStringAttribute('sgt_id_range');
  }
  public set sgtIdRange(value: string) {
    this._sgtIdRange = value;
  }
  public resetSgtIdRange() {
    this._sgtIdRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgtIdRangeInput() {
    return this._sgtIdRange;
  }

  // sgt_name_prefix - computed: true, optional: true, required: false
  private _sgtNamePrefix?: string; 
  public get sgtNamePrefix() {
    return this.getStringAttribute('sgt_name_prefix');
  }
  public set sgtNamePrefix(value: string) {
    this._sgtNamePrefix = value;
  }
  public resetSgtNamePrefix() {
    this._sgtNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgtNamePrefixInput() {
    return this._sgtNamePrefix;
  }

  // sgt_oper_status - computed: true, optional: false, required: false
  public get sgtOperStatus() {
    return this.getStringAttribute('sgt_oper_status');
  }

  // sgt_preprov_recalc_status - computed: true, optional: false, required: false
  public get sgtPreprovRecalcStatus() {
    return this.getStringAttribute('sgt_preprov_recalc_status');
  }

  // sgt_preprovision - computed: true, optional: true, required: false
  private _sgtPreprovision?: boolean | cdktf.IResolvable; 
  public get sgtPreprovision() {
    return this.getBooleanAttribute('sgt_preprovision');
  }
  public set sgtPreprovision(value: boolean | cdktf.IResolvable) {
    this._sgtPreprovision = value;
  }
  public resetSgtPreprovision() {
    this._sgtPreprovision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgtPreprovisionInput() {
    return this._sgtPreprovision;
  }

  // sgt_preprovision_prev - computed: true, optional: false, required: false
  public get sgtPreprovisionPrev() {
    return this.getBooleanAttribute('sgt_preprovision_prev');
  }

  // sgt_recalc_status - computed: true, optional: false, required: false
  public get sgtRecalcStatus() {
    return this.getStringAttribute('sgt_recalc_status');
  }

  // site_id - computed: true, optional: true, required: false
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  public resetSiteId() {
    this._siteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // site_id_policy_id - computed: true, optional: false, required: false
  public get siteIdPolicyId() {
    return this.getNumberAttribute('site_id_policy_id');
  }

  // sla_id_range - computed: true, optional: true, required: false
  private _slaIdRange?: string; 
  public get slaIdRange() {
    return this.getStringAttribute('sla_id_range');
  }
  public set slaIdRange(value: string) {
    this._slaIdRange = value;
  }
  public resetSlaIdRange() {
    this._slaIdRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaIdRangeInput() {
    return this._slaIdRange;
  }

  // snmp_server_host_trap - computed: true, optional: true, required: false
  private _snmpServerHostTrap?: boolean | cdktf.IResolvable; 
  public get snmpServerHostTrap() {
    return this.getBooleanAttribute('snmp_server_host_trap');
  }
  public set snmpServerHostTrap(value: boolean | cdktf.IResolvable) {
    this._snmpServerHostTrap = value;
  }
  public resetSnmpServerHostTrap() {
    this._snmpServerHostTrap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpServerHostTrapInput() {
    return this._snmpServerHostTrap;
  }

  // spine_count - computed: true, optional: false, required: false
  public get spineCount() {
    return this.getNumberAttribute('spine_count');
  }

  // spine_switch_core_interfaces - computed: true, optional: true, required: false
  private _spineSwitchCoreInterfaces?: string; 
  public get spineSwitchCoreInterfaces() {
    return this.getStringAttribute('spine_switch_core_interfaces');
  }
  public set spineSwitchCoreInterfaces(value: string) {
    this._spineSwitchCoreInterfaces = value;
  }
  public resetSpineSwitchCoreInterfaces() {
    this._spineSwitchCoreInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spineSwitchCoreInterfacesInput() {
    return this._spineSwitchCoreInterfaces;
  }

  // sspine_add_del_debug_flag - computed: true, optional: true, required: false
  private _sspineAddDelDebugFlag?: string; 
  public get sspineAddDelDebugFlag() {
    return this.getStringAttribute('sspine_add_del_debug_flag');
  }
  public set sspineAddDelDebugFlag(value: string) {
    this._sspineAddDelDebugFlag = value;
  }
  public resetSspineAddDelDebugFlag() {
    this._sspineAddDelDebugFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sspineAddDelDebugFlagInput() {
    return this._sspineAddDelDebugFlag;
  }

  // sspine_count - computed: true, optional: false, required: false
  public get sspineCount() {
    return this.getNumberAttribute('sspine_count');
  }

  // static_underlay_ip_alloc - computed: true, optional: true, required: false
  private _staticUnderlayIpAlloc?: boolean | cdktf.IResolvable; 
  public get staticUnderlayIpAlloc() {
    return this.getBooleanAttribute('static_underlay_ip_alloc');
  }
  public set staticUnderlayIpAlloc(value: boolean | cdktf.IResolvable) {
    this._staticUnderlayIpAlloc = value;
  }
  public resetStaticUnderlayIpAlloc() {
    this._staticUnderlayIpAlloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticUnderlayIpAllocInput() {
    return this._staticUnderlayIpAlloc;
  }

  // stp_bridge_priority - computed: true, optional: true, required: false
  private _stpBridgePriority?: number; 
  public get stpBridgePriority() {
    return this.getNumberAttribute('stp_bridge_priority');
  }
  public set stpBridgePriority(value: number) {
    this._stpBridgePriority = value;
  }
  public resetStpBridgePriority() {
    this._stpBridgePriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpBridgePriorityInput() {
    return this._stpBridgePriority;
  }

  // stp_root_option - computed: true, optional: true, required: false
  private _stpRootOption?: string; 
  public get stpRootOption() {
    return this.getStringAttribute('stp_root_option');
  }
  public set stpRootOption(value: string) {
    this._stpRootOption = value;
  }
  public resetStpRootOption() {
    this._stpRootOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpRootOptionInput() {
    return this._stpRootOption;
  }

  // stp_vlan_range - computed: true, optional: true, required: false
  private _stpVlanRange?: string; 
  public get stpVlanRange() {
    return this.getStringAttribute('stp_vlan_range');
  }
  public set stpVlanRange(value: string) {
    this._stpVlanRange = value;
  }
  public resetStpVlanRange() {
    this._stpVlanRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpVlanRangeInput() {
    return this._stpVlanRange;
  }

  // strict_cc_mode - computed: true, optional: true, required: false
  private _strictCcMode?: boolean | cdktf.IResolvable; 
  public get strictCcMode() {
    return this.getBooleanAttribute('strict_cc_mode');
  }
  public set strictCcMode(value: boolean | cdktf.IResolvable) {
    this._strictCcMode = value;
  }
  public resetStrictCcMode() {
    this._strictCcMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictCcModeInput() {
    return this._strictCcMode;
  }

  // subinterface_range - computed: true, optional: true, required: false
  private _subinterfaceRange?: string; 
  public get subinterfaceRange() {
    return this.getStringAttribute('subinterface_range');
  }
  public set subinterfaceRange(value: string) {
    this._subinterfaceRange = value;
  }
  public resetSubinterfaceRange() {
    this._subinterfaceRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subinterfaceRangeInput() {
    return this._subinterfaceRange;
  }

  // subnet_range - computed: true, optional: true, required: false
  private _subnetRange?: string; 
  public get subnetRange() {
    return this.getStringAttribute('subnet_range');
  }
  public set subnetRange(value: string) {
    this._subnetRange = value;
  }
  public resetSubnetRange() {
    this._subnetRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetRangeInput() {
    return this._subnetRange;
  }

  // subnet_target_mask - computed: true, optional: true, required: false
  private _subnetTargetMask?: number; 
  public get subnetTargetMask() {
    return this.getNumberAttribute('subnet_target_mask');
  }
  public set subnetTargetMask(value: number) {
    this._subnetTargetMask = value;
  }
  public resetSubnetTargetMask() {
    this._subnetTargetMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetTargetMaskInput() {
    return this._subnetTargetMask;
  }

  // syslog_server_ip_list - computed: true, optional: true, required: false
  private _syslogServerIpList?: string; 
  public get syslogServerIpList() {
    return this.getStringAttribute('syslog_server_ip_list');
  }
  public set syslogServerIpList(value: string) {
    this._syslogServerIpList = value;
  }
  public resetSyslogServerIpList() {
    this._syslogServerIpList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogServerIpListInput() {
    return this._syslogServerIpList;
  }

  // syslog_server_vrf - computed: true, optional: true, required: false
  private _syslogServerVrf?: string; 
  public get syslogServerVrf() {
    return this.getStringAttribute('syslog_server_vrf');
  }
  public set syslogServerVrf(value: string) {
    this._syslogServerVrf = value;
  }
  public resetSyslogServerVrf() {
    this._syslogServerVrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogServerVrfInput() {
    return this._syslogServerVrf;
  }

  // syslog_sev - computed: true, optional: true, required: false
  private _syslogSev?: string; 
  public get syslogSev() {
    return this.getStringAttribute('syslog_sev');
  }
  public set syslogSev(value: string) {
    this._syslogSev = value;
  }
  public resetSyslogSev() {
    this._syslogSev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogSevInput() {
    return this._syslogSev;
  }

  // tcam_allocation - computed: true, optional: true, required: false
  private _tcamAllocation?: boolean | cdktf.IResolvable; 
  public get tcamAllocation() {
    return this.getBooleanAttribute('tcam_allocation');
  }
  public set tcamAllocation(value: boolean | cdktf.IResolvable) {
    this._tcamAllocation = value;
  }
  public resetTcamAllocation() {
    this._tcamAllocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcamAllocationInput() {
    return this._tcamAllocation;
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

  // trustpoint_label - computed: true, optional: true, required: false
  private _trustpointLabel?: string; 
  public get trustpointLabel() {
    return this.getStringAttribute('trustpoint_label');
  }
  public set trustpointLabel(value: string) {
    this._trustpointLabel = value;
  }
  public resetTrustpointLabel() {
    this._trustpointLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustpointLabelInput() {
    return this._trustpointLabel;
  }

  // underlay_is_v6 - computed: true, optional: true, required: false
  private _underlayIsV6?: boolean | cdktf.IResolvable; 
  public get underlayIsV6() {
    return this.getBooleanAttribute('underlay_is_v6');
  }
  public set underlayIsV6(value: boolean | cdktf.IResolvable) {
    this._underlayIsV6 = value;
  }
  public resetUnderlayIsV6() {
    this._underlayIsV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get underlayIsV6Input() {
    return this._underlayIsV6;
  }

  // underlay_is_v6_prev - computed: true, optional: false, required: false
  public get underlayIsV6Prev() {
    return this.getBooleanAttribute('underlay_is_v6_prev');
  }

  // unnum_bootstrap_lb_id - computed: true, optional: true, required: false
  private _unnumBootstrapLbId?: number; 
  public get unnumBootstrapLbId() {
    return this.getNumberAttribute('unnum_bootstrap_lb_id');
  }
  public set unnumBootstrapLbId(value: number) {
    this._unnumBootstrapLbId = value;
  }
  public resetUnnumBootstrapLbId() {
    this._unnumBootstrapLbId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unnumBootstrapLbIdInput() {
    return this._unnumBootstrapLbId;
  }

  // unnum_dhcp_end_internal - computed: true, optional: false, required: false
  public get unnumDhcpEndInternal() {
    return this.getStringAttribute('unnum_dhcp_end_internal');
  }

  // unnum_dhcp_start_internal - computed: true, optional: false, required: false
  public get unnumDhcpStartInternal() {
    return this.getStringAttribute('unnum_dhcp_start_internal');
  }

  // upgrade_from_version - computed: true, optional: false, required: false
  public get upgradeFromVersion() {
    return this.getStringAttribute('upgrade_from_version');
  }

  // use_link_local - computed: true, optional: true, required: false
  private _useLinkLocal?: boolean | cdktf.IResolvable; 
  public get useLinkLocal() {
    return this.getBooleanAttribute('use_link_local');
  }
  public set useLinkLocal(value: boolean | cdktf.IResolvable) {
    this._useLinkLocal = value;
  }
  public resetUseLinkLocal() {
    this._useLinkLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLinkLocalInput() {
    return this._useLinkLocal;
  }

  // v6_subnet_range - computed: true, optional: true, required: false
  private _v6SubnetRange?: string; 
  public get v6SubnetRange() {
    return this.getStringAttribute('v6_subnet_range');
  }
  public set v6SubnetRange(value: string) {
    this._v6SubnetRange = value;
  }
  public resetV6SubnetRange() {
    this._v6SubnetRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6SubnetRangeInput() {
    return this._v6SubnetRange;
  }

  // v6_subnet_target_mask - computed: true, optional: true, required: false
  private _v6SubnetTargetMask?: number; 
  public get v6SubnetTargetMask() {
    return this.getNumberAttribute('v6_subnet_target_mask');
  }
  public set v6SubnetTargetMask(value: number) {
    this._v6SubnetTargetMask = value;
  }
  public resetV6SubnetTargetMask() {
    this._v6SubnetTargetMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6SubnetTargetMaskInput() {
    return this._v6SubnetTargetMask;
  }

  // vpc_auto_recovery_time - computed: true, optional: true, required: false
  private _vpcAutoRecoveryTime?: number; 
  public get vpcAutoRecoveryTime() {
    return this.getNumberAttribute('vpc_auto_recovery_time');
  }
  public set vpcAutoRecoveryTime(value: number) {
    this._vpcAutoRecoveryTime = value;
  }
  public resetVpcAutoRecoveryTime() {
    this._vpcAutoRecoveryTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcAutoRecoveryTimeInput() {
    return this._vpcAutoRecoveryTime;
  }

  // vpc_delay_restore - computed: true, optional: true, required: false
  private _vpcDelayRestore?: number; 
  public get vpcDelayRestore() {
    return this.getNumberAttribute('vpc_delay_restore');
  }
  public set vpcDelayRestore(value: number) {
    this._vpcDelayRestore = value;
  }
  public resetVpcDelayRestore() {
    this._vpcDelayRestore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcDelayRestoreInput() {
    return this._vpcDelayRestore;
  }

  // vpc_delay_restore_time - computed: true, optional: true, required: false
  private _vpcDelayRestoreTime?: number; 
  public get vpcDelayRestoreTime() {
    return this.getNumberAttribute('vpc_delay_restore_time');
  }
  public set vpcDelayRestoreTime(value: number) {
    this._vpcDelayRestoreTime = value;
  }
  public resetVpcDelayRestoreTime() {
    this._vpcDelayRestoreTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcDelayRestoreTimeInput() {
    return this._vpcDelayRestoreTime;
  }

  // vpc_domain_id_range - computed: true, optional: true, required: false
  private _vpcDomainIdRange?: string; 
  public get vpcDomainIdRange() {
    return this.getStringAttribute('vpc_domain_id_range');
  }
  public set vpcDomainIdRange(value: string) {
    this._vpcDomainIdRange = value;
  }
  public resetVpcDomainIdRange() {
    this._vpcDomainIdRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcDomainIdRangeInput() {
    return this._vpcDomainIdRange;
  }

  // vpc_enable_ipv6_nd_sync - computed: true, optional: true, required: false
  private _vpcEnableIpv6NdSync?: boolean | cdktf.IResolvable; 
  public get vpcEnableIpv6NdSync() {
    return this.getBooleanAttribute('vpc_enable_ipv6_nd_sync');
  }
  public set vpcEnableIpv6NdSync(value: boolean | cdktf.IResolvable) {
    this._vpcEnableIpv6NdSync = value;
  }
  public resetVpcEnableIpv6NdSync() {
    this._vpcEnableIpv6NdSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcEnableIpv6NdSyncInput() {
    return this._vpcEnableIpv6NdSync;
  }

  // vpc_peer_keep_alive_option - computed: true, optional: true, required: false
  private _vpcPeerKeepAliveOption?: string; 
  public get vpcPeerKeepAliveOption() {
    return this.getStringAttribute('vpc_peer_keep_alive_option');
  }
  public set vpcPeerKeepAliveOption(value: string) {
    this._vpcPeerKeepAliveOption = value;
  }
  public resetVpcPeerKeepAliveOption() {
    this._vpcPeerKeepAliveOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcPeerKeepAliveOptionInput() {
    return this._vpcPeerKeepAliveOption;
  }

  // vpc_peer_link_po - computed: true, optional: true, required: false
  private _vpcPeerLinkPo?: number; 
  public get vpcPeerLinkPo() {
    return this.getNumberAttribute('vpc_peer_link_po');
  }
  public set vpcPeerLinkPo(value: number) {
    this._vpcPeerLinkPo = value;
  }
  public resetVpcPeerLinkPo() {
    this._vpcPeerLinkPo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcPeerLinkPoInput() {
    return this._vpcPeerLinkPo;
  }

  // vpc_peer_link_vlan - computed: true, optional: true, required: false
  private _vpcPeerLinkVlan?: number; 
  public get vpcPeerLinkVlan() {
    return this.getNumberAttribute('vpc_peer_link_vlan');
  }
  public set vpcPeerLinkVlan(value: number) {
    this._vpcPeerLinkVlan = value;
  }
  public resetVpcPeerLinkVlan() {
    this._vpcPeerLinkVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcPeerLinkVlanInput() {
    return this._vpcPeerLinkVlan;
  }

  // vrf_extension_template - computed: true, optional: true, required: false
  private _vrfExtensionTemplate?: string; 
  public get vrfExtensionTemplate() {
    return this.getStringAttribute('vrf_extension_template');
  }
  public set vrfExtensionTemplate(value: string) {
    this._vrfExtensionTemplate = value;
  }
  public resetVrfExtensionTemplate() {
    this._vrfExtensionTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfExtensionTemplateInput() {
    return this._vrfExtensionTemplate;
  }

  // vrf_lite_autoconfig - computed: true, optional: true, required: false
  private _vrfLiteAutoconfig?: string; 
  public get vrfLiteAutoconfig() {
    return this.getStringAttribute('vrf_lite_autoconfig');
  }
  public set vrfLiteAutoconfig(value: string) {
    this._vrfLiteAutoconfig = value;
  }
  public resetVrfLiteAutoconfig() {
    this._vrfLiteAutoconfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfLiteAutoconfigInput() {
    return this._vrfLiteAutoconfig;
  }

  // vrf_vlan_range - computed: true, optional: true, required: false
  private _vrfVlanRange?: string; 
  public get vrfVlanRange() {
    return this.getStringAttribute('vrf_vlan_range');
  }
  public set vrfVlanRange(value: string) {
    this._vrfVlanRange = value;
  }
  public resetVrfVlanRange() {
    this._vrfVlanRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfVlanRangeInput() {
    return this._vrfVlanRange;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aaa_remote_ip_enabled: cdktf.booleanToTerraform(this._aaaRemoteIpEnabled),
      aaa_server_conf: cdktf.stringToTerraform(this._aaaServerConf),
      active_migration: cdktf.booleanToTerraform(this._activeMigration),
      advertise_pip_bgp: cdktf.booleanToTerraform(this._advertisePipBgp),
      advertise_pip_on_border: cdktf.booleanToTerraform(this._advertisePipOnBorder),
      agent_intf: cdktf.stringToTerraform(this._agentIntf),
      agg_acc_vpc_po_id_range: cdktf.stringToTerraform(this._aggAccVpcPoIdRange),
      ai_ml_qos_policy: cdktf.stringToTerraform(this._aiMlQosPolicy),
      allow_l3vni_no_vlan: cdktf.booleanToTerraform(this._allowL3VniNoVlan),
      allow_nxc: cdktf.booleanToTerraform(this._allowNxc),
      anycast_bgw_advertise_pip: cdktf.booleanToTerraform(this._anycastBgwAdvertisePip),
      anycast_gw_mac: cdktf.stringToTerraform(this._anycastGwMac),
      anycast_lb_id: cdktf.numberToTerraform(this._anycastLbId),
      anycast_rp_ip_range: cdktf.stringToTerraform(this._anycastRpIpRange),
      auto_symmetric_default_vrf: cdktf.booleanToTerraform(this._autoSymmetricDefaultVrf),
      auto_symmetric_vrf_lite: cdktf.booleanToTerraform(this._autoSymmetricVrfLite),
      auto_unique_vrf_lite_ip_prefix: cdktf.booleanToTerraform(this._autoUniqueVrfLiteIpPrefix),
      auto_vrflite_ifc_default_vrf: cdktf.booleanToTerraform(this._autoVrfliteIfcDefaultVrf),
      banner: cdktf.stringToTerraform(this._banner),
      bfd_auth_enable: cdktf.booleanToTerraform(this._bfdAuthEnable),
      bfd_auth_key: cdktf.stringToTerraform(this._bfdAuthKey),
      bfd_auth_key_id: cdktf.numberToTerraform(this._bfdAuthKeyId),
      bfd_enable: cdktf.booleanToTerraform(this._bfdEnable),
      bfd_ibgp_enable: cdktf.booleanToTerraform(this._bfdIbgpEnable),
      bfd_isis_enable: cdktf.booleanToTerraform(this._bfdIsisEnable),
      bfd_ospf_enable: cdktf.booleanToTerraform(this._bfdOspfEnable),
      bfd_pim_enable: cdktf.booleanToTerraform(this._bfdPimEnable),
      bgp_as: cdktf.stringToTerraform(this._bgpAs),
      bgp_auth_enable: cdktf.booleanToTerraform(this._bgpAuthEnable),
      bgp_auth_key: cdktf.stringToTerraform(this._bgpAuthKey),
      bgp_auth_key_type: cdktf.numberToTerraform(this._bgpAuthKeyType),
      bgp_lb_id: cdktf.numberToTerraform(this._bgpLbId),
      bootstrap_conf: cdktf.stringToTerraform(this._bootstrapConf),
      bootstrap_enable: cdktf.booleanToTerraform(this._bootstrapEnable),
      bootstrap_multisubnet: cdktf.stringToTerraform(this._bootstrapMultisubnet),
      brfield_debug_flag: cdktf.stringToTerraform(this._brfieldDebugFlag),
      brownfield_network_name_format: cdktf.stringToTerraform(this._brownfieldNetworkNameFormat),
      brownfield_skip_overlay_network_attachments: cdktf.booleanToTerraform(this._brownfieldSkipOverlayNetworkAttachments),
      cdp_enable: cdktf.booleanToTerraform(this._cdpEnable),
      copp_policy: cdktf.stringToTerraform(this._coppPolicy),
      dci_macsec_algorithm: cdktf.stringToTerraform(this._dciMacsecAlgorithm),
      dci_macsec_cipher_suite: cdktf.stringToTerraform(this._dciMacsecCipherSuite),
      dci_macsec_fallback_algorithm: cdktf.stringToTerraform(this._dciMacsecFallbackAlgorithm),
      dci_macsec_fallback_key_string: cdktf.stringToTerraform(this._dciMacsecFallbackKeyString),
      dci_macsec_key_string: cdktf.stringToTerraform(this._dciMacsecKeyString),
      dci_subnet_range: cdktf.stringToTerraform(this._dciSubnetRange),
      dci_subnet_target_mask: cdktf.numberToTerraform(this._dciSubnetTargetMask),
      default_network: cdktf.stringToTerraform(this._defaultNetwork),
      default_pvlan_sec_network: cdktf.stringToTerraform(this._defaultPvlanSecNetwork),
      default_queuing_policy_cloudscale: cdktf.stringToTerraform(this._defaultQueuingPolicyCloudscale),
      default_queuing_policy_other: cdktf.stringToTerraform(this._defaultQueuingPolicyOther),
      default_queuing_policy_r_series: cdktf.stringToTerraform(this._defaultQueuingPolicyRSeries),
      default_vrf: cdktf.stringToTerraform(this._defaultVrf),
      default_vrf_redis_bgp_rmap: cdktf.stringToTerraform(this._defaultVrfRedisBgpRmap),
      deploy: cdktf.booleanToTerraform(this._deploy),
      deployment_freeze: cdktf.booleanToTerraform(this._deploymentFreeze),
      dhcp_enable: cdktf.booleanToTerraform(this._dhcpEnable),
      dhcp_end: cdktf.stringToTerraform(this._dhcpEnd),
      dhcp_ipv6_enable: cdktf.stringToTerraform(this._dhcpIpv6Enable),
      dhcp_start: cdktf.stringToTerraform(this._dhcpStart),
      dns_server_ip_list: cdktf.stringToTerraform(this._dnsServerIpList),
      dns_server_vrf: cdktf.stringToTerraform(this._dnsServerVrf),
      enable_aaa: cdktf.booleanToTerraform(this._enableAaa),
      enable_agent: cdktf.booleanToTerraform(this._enableAgent),
      enable_agg_acc_id_range: cdktf.booleanToTerraform(this._enableAggAccIdRange),
      enable_ai_ml_qos_policy: cdktf.booleanToTerraform(this._enableAiMlQosPolicy),
      enable_dci_macsec: cdktf.booleanToTerraform(this._enableDciMacsec),
      enable_default_queuing_policy: cdktf.booleanToTerraform(this._enableDefaultQueuingPolicy),
      enable_fabric_vpc_domain_id: cdktf.booleanToTerraform(this._enableFabricVpcDomainId),
      enable_l3vni_no_vlan: cdktf.booleanToTerraform(this._enableL3VniNoVlan),
      enable_macsec: cdktf.booleanToTerraform(this._enableMacsec),
      enable_netflow: cdktf.booleanToTerraform(this._enableNetflow),
      enable_ngoam: cdktf.booleanToTerraform(this._enableNgoam),
      enable_nxapi: cdktf.booleanToTerraform(this._enableNxapi),
      enable_nxapi_http: cdktf.booleanToTerraform(this._enableNxapiHttp),
      enable_pbr: cdktf.booleanToTerraform(this._enablePbr),
      enable_pvlan: cdktf.booleanToTerraform(this._enablePvlan),
      enable_qkd: cdktf.booleanToTerraform(this._enableQkd),
      enable_real_time_backup: cdktf.booleanToTerraform(this._enableRealTimeBackup),
      enable_rt_intf_stats: cdktf.booleanToTerraform(this._enableRtIntfStats),
      enable_scheduled_backup: cdktf.booleanToTerraform(this._enableScheduledBackup),
      enable_sgt: cdktf.booleanToTerraform(this._enableSgt),
      enable_tenant_dhcp: cdktf.booleanToTerraform(this._enableTenantDhcp),
      enable_trm: cdktf.booleanToTerraform(this._enableTrm),
      enable_trmv6: cdktf.booleanToTerraform(this._enableTrmv6),
      enable_vpc_peer_link_native_vlan: cdktf.booleanToTerraform(this._enableVpcPeerLinkNativeVlan),
      enable_vri_id_realloc: cdktf.booleanToTerraform(this._enableVriIdRealloc),
      esr_option: cdktf.stringToTerraform(this._esrOption),
      ext_fabric_type: cdktf.stringToTerraform(this._extFabricType),
      extra_conf_intra_links: cdktf.stringToTerraform(this._extraConfIntraLinks),
      extra_conf_leaf: cdktf.stringToTerraform(this._extraConfLeaf),
      extra_conf_spine: cdktf.stringToTerraform(this._extraConfSpine),
      extra_conf_tor: cdktf.stringToTerraform(this._extraConfTor),
      fabric_interface_type: cdktf.stringToTerraform(this._fabricInterfaceType),
      fabric_mtu: cdktf.numberToTerraform(this._fabricMtu),
      fabric_name: cdktf.stringToTerraform(this._fabricName),
      fabric_vpc_domain_id: cdktf.numberToTerraform(this._fabricVpcDomainId),
      fabric_vpc_qos: cdktf.booleanToTerraform(this._fabricVpcQos),
      fabric_vpc_qos_policy_name: cdktf.stringToTerraform(this._fabricVpcQosPolicyName),
      feature_ptp: cdktf.booleanToTerraform(this._featurePtp),
      ff: cdktf.stringToTerraform(this._ff),
      grfield_debug_flag: cdktf.stringToTerraform(this._grfieldDebugFlag),
      hd_time: cdktf.numberToTerraform(this._hdTime),
      host_intf_admin_state: cdktf.booleanToTerraform(this._hostIntfAdminState),
      ibgp_peer_template: cdktf.stringToTerraform(this._ibgpPeerTemplate),
      ibgp_peer_template_leaf: cdktf.stringToTerraform(this._ibgpPeerTemplateLeaf),
      ignore_cert: cdktf.booleanToTerraform(this._ignoreCert),
      inband_dhcp_servers: cdktf.stringToTerraform(this._inbandDhcpServers),
      inband_mgmt: cdktf.booleanToTerraform(this._inbandMgmt),
      intf_stat_load_interval: cdktf.numberToTerraform(this._intfStatLoadInterval),
      ipv6_anycast_rp_ip_range: cdktf.stringToTerraform(this._ipv6AnycastRpIpRange),
      ipv6_multicast_group_subnet: cdktf.stringToTerraform(this._ipv6MulticastGroupSubnet),
      isis_area_num: cdktf.stringToTerraform(this._isisAreaNum),
      isis_auth_enable: cdktf.booleanToTerraform(this._isisAuthEnable),
      isis_auth_key: cdktf.stringToTerraform(this._isisAuthKey),
      isis_auth_keychain_key_id: cdktf.numberToTerraform(this._isisAuthKeychainKeyId),
      isis_auth_keychain_name: cdktf.stringToTerraform(this._isisAuthKeychainName),
      isis_level: cdktf.stringToTerraform(this._isisLevel),
      isis_overload_elapse_time: cdktf.numberToTerraform(this._isisOverloadElapseTime),
      isis_overload_enable: cdktf.booleanToTerraform(this._isisOverloadEnable),
      isis_p2p_enable: cdktf.booleanToTerraform(this._isisP2PEnable),
      kme_server_ip: cdktf.stringToTerraform(this._kmeServerIp),
      kme_server_port: cdktf.numberToTerraform(this._kmeServerPort),
      l2_host_intf_mtu: cdktf.numberToTerraform(this._l2HostIntfMtu),
      l2_segment_id_range: cdktf.stringToTerraform(this._l2SegmentIdRange),
      l3_partition_id_range: cdktf.stringToTerraform(this._l3PartitionIdRange),
      l3vni_ipv6_mcast_group: cdktf.stringToTerraform(this._l3VniIpv6McastGroup),
      l3vni_mcast_group: cdktf.stringToTerraform(this._l3VniMcastGroup),
      link_state_routing: cdktf.stringToTerraform(this._linkStateRouting),
      link_state_routing_tag: cdktf.stringToTerraform(this._linkStateRoutingTag),
      loopback0_ip_range: cdktf.stringToTerraform(this._loopback0IpRange),
      loopback0_ipv6_range: cdktf.stringToTerraform(this._loopback0Ipv6Range),
      loopback1_ip_range: cdktf.stringToTerraform(this._loopback1IpRange),
      loopback1_ipv6_range: cdktf.stringToTerraform(this._loopback1Ipv6Range),
      macsec_algorithm: cdktf.stringToTerraform(this._macsecAlgorithm),
      macsec_cipher_suite: cdktf.stringToTerraform(this._macsecCipherSuite),
      macsec_fallback_algorithm: cdktf.stringToTerraform(this._macsecFallbackAlgorithm),
      macsec_fallback_key_string: cdktf.stringToTerraform(this._macsecFallbackKeyString),
      macsec_key_string: cdktf.stringToTerraform(this._macsecKeyString),
      macsec_report_timer: cdktf.numberToTerraform(this._macsecReportTimer),
      mgmt_gw: cdktf.stringToTerraform(this._mgmtGw),
      mgmt_prefix: cdktf.numberToTerraform(this._mgmtPrefix),
      mgmt_v6prefix: cdktf.numberToTerraform(this._mgmtV6Prefix),
      mpls_handoff: cdktf.booleanToTerraform(this._mplsHandoff),
      mpls_isis_area_num: cdktf.stringToTerraform(this._mplsIsisAreaNum),
      mpls_lb_id: cdktf.numberToTerraform(this._mplsLbId),
      mpls_loopback_ip_range: cdktf.stringToTerraform(this._mplsLoopbackIpRange),
      mst_instance_range: cdktf.stringToTerraform(this._mstInstanceRange),
      multicast_group_subnet: cdktf.stringToTerraform(this._multicastGroupSubnet),
      mvpn_vri_id_range: cdktf.stringToTerraform(this._mvpnVriIdRange),
      netflow_exporter_list: cdktf.stringToTerraform(this._netflowExporterList),
      netflow_monitor_list: cdktf.stringToTerraform(this._netflowMonitorList),
      netflow_record_list: cdktf.stringToTerraform(this._netflowRecordList),
      network_extension_template: cdktf.stringToTerraform(this._networkExtensionTemplate),
      network_vlan_range: cdktf.stringToTerraform(this._networkVlanRange),
      ntp_server_ip_list: cdktf.stringToTerraform(this._ntpServerIpList),
      ntp_server_vrf: cdktf.stringToTerraform(this._ntpServerVrf),
      nve_lb_id: cdktf.numberToTerraform(this._nveLbId),
      nxapi_http_port: cdktf.numberToTerraform(this._nxapiHttpPort),
      nxapi_https_port: cdktf.numberToTerraform(this._nxapiHttpsPort),
      nxc_dest_vrf: cdktf.stringToTerraform(this._nxcDestVrf),
      nxc_proxy_port: cdktf.numberToTerraform(this._nxcProxyPort),
      nxc_proxy_server: cdktf.stringToTerraform(this._nxcProxyServer),
      nxc_src_intf: cdktf.stringToTerraform(this._nxcSrcIntf),
      object_tracking_number_range: cdktf.stringToTerraform(this._objectTrackingNumberRange),
      ospf_area_id: cdktf.stringToTerraform(this._ospfAreaId),
      ospf_auth_enable: cdktf.booleanToTerraform(this._ospfAuthEnable),
      ospf_auth_key: cdktf.stringToTerraform(this._ospfAuthKey),
      ospf_auth_key_id: cdktf.numberToTerraform(this._ospfAuthKeyId),
      overlay_mode: cdktf.stringToTerraform(this._overlayMode),
      overwrite_global_nxc: cdktf.booleanToTerraform(this._overwriteGlobalNxc),
      per_vrf_loopback_auto_provision: cdktf.booleanToTerraform(this._perVrfLoopbackAutoProvision),
      per_vrf_loopback_auto_provision_v6: cdktf.booleanToTerraform(this._perVrfLoopbackAutoProvisionV6),
      per_vrf_loopback_ip_range: cdktf.stringToTerraform(this._perVrfLoopbackIpRange),
      per_vrf_loopback_ip_range_v6: cdktf.stringToTerraform(this._perVrfLoopbackIpRangeV6),
      pfc_watch_int: cdktf.numberToTerraform(this._pfcWatchInt),
      phantom_rp_lb_id1: cdktf.numberToTerraform(this._phantomRpLbId1),
      phantom_rp_lb_id2: cdktf.numberToTerraform(this._phantomRpLbId2),
      phantom_rp_lb_id3: cdktf.numberToTerraform(this._phantomRpLbId3),
      phantom_rp_lb_id4: cdktf.numberToTerraform(this._phantomRpLbId4),
      pim_hello_auth_enable: cdktf.booleanToTerraform(this._pimHelloAuthEnable),
      pim_hello_auth_key: cdktf.stringToTerraform(this._pimHelloAuthKey),
      pm_enable: cdktf.booleanToTerraform(this._pmEnable),
      power_redundancy_mode: cdktf.stringToTerraform(this._powerRedundancyMode),
      ptp_domain_id: cdktf.numberToTerraform(this._ptpDomainId),
      ptp_lb_id: cdktf.numberToTerraform(this._ptpLbId),
      ptp_vlan_id: cdktf.numberToTerraform(this._ptpVlanId),
      qkd_profile_name: cdktf.stringToTerraform(this._qkdProfileName),
      replication_mode: cdktf.stringToTerraform(this._replicationMode),
      route_map_sequence_number_range: cdktf.stringToTerraform(this._routeMapSequenceNumberRange),
      router_id_range: cdktf.stringToTerraform(this._routerIdRange),
      rp_count: cdktf.numberToTerraform(this._rpCount),
      rp_lb_id: cdktf.numberToTerraform(this._rpLbId),
      rp_mode: cdktf.stringToTerraform(this._rpMode),
      rr_count: cdktf.numberToTerraform(this._rrCount),
      scheduled_time: cdktf.stringToTerraform(this._scheduledTime),
      seed_switch_core_interfaces: cdktf.stringToTerraform(this._seedSwitchCoreInterfaces),
      service_network_vlan_range: cdktf.stringToTerraform(this._serviceNetworkVlanRange),
      sgt_id_range: cdktf.stringToTerraform(this._sgtIdRange),
      sgt_name_prefix: cdktf.stringToTerraform(this._sgtNamePrefix),
      sgt_preprovision: cdktf.booleanToTerraform(this._sgtPreprovision),
      site_id: cdktf.stringToTerraform(this._siteId),
      sla_id_range: cdktf.stringToTerraform(this._slaIdRange),
      snmp_server_host_trap: cdktf.booleanToTerraform(this._snmpServerHostTrap),
      spine_switch_core_interfaces: cdktf.stringToTerraform(this._spineSwitchCoreInterfaces),
      sspine_add_del_debug_flag: cdktf.stringToTerraform(this._sspineAddDelDebugFlag),
      static_underlay_ip_alloc: cdktf.booleanToTerraform(this._staticUnderlayIpAlloc),
      stp_bridge_priority: cdktf.numberToTerraform(this._stpBridgePriority),
      stp_root_option: cdktf.stringToTerraform(this._stpRootOption),
      stp_vlan_range: cdktf.stringToTerraform(this._stpVlanRange),
      strict_cc_mode: cdktf.booleanToTerraform(this._strictCcMode),
      subinterface_range: cdktf.stringToTerraform(this._subinterfaceRange),
      subnet_range: cdktf.stringToTerraform(this._subnetRange),
      subnet_target_mask: cdktf.numberToTerraform(this._subnetTargetMask),
      syslog_server_ip_list: cdktf.stringToTerraform(this._syslogServerIpList),
      syslog_server_vrf: cdktf.stringToTerraform(this._syslogServerVrf),
      syslog_sev: cdktf.stringToTerraform(this._syslogSev),
      tcam_allocation: cdktf.booleanToTerraform(this._tcamAllocation),
      trustpoint_label: cdktf.stringToTerraform(this._trustpointLabel),
      underlay_is_v6: cdktf.booleanToTerraform(this._underlayIsV6),
      unnum_bootstrap_lb_id: cdktf.numberToTerraform(this._unnumBootstrapLbId),
      use_link_local: cdktf.booleanToTerraform(this._useLinkLocal),
      v6_subnet_range: cdktf.stringToTerraform(this._v6SubnetRange),
      v6_subnet_target_mask: cdktf.numberToTerraform(this._v6SubnetTargetMask),
      vpc_auto_recovery_time: cdktf.numberToTerraform(this._vpcAutoRecoveryTime),
      vpc_delay_restore: cdktf.numberToTerraform(this._vpcDelayRestore),
      vpc_delay_restore_time: cdktf.numberToTerraform(this._vpcDelayRestoreTime),
      vpc_domain_id_range: cdktf.stringToTerraform(this._vpcDomainIdRange),
      vpc_enable_ipv6_nd_sync: cdktf.booleanToTerraform(this._vpcEnableIpv6NdSync),
      vpc_peer_keep_alive_option: cdktf.stringToTerraform(this._vpcPeerKeepAliveOption),
      vpc_peer_link_po: cdktf.numberToTerraform(this._vpcPeerLinkPo),
      vpc_peer_link_vlan: cdktf.numberToTerraform(this._vpcPeerLinkVlan),
      vrf_extension_template: cdktf.stringToTerraform(this._vrfExtensionTemplate),
      vrf_lite_autoconfig: cdktf.stringToTerraform(this._vrfLiteAutoconfig),
      vrf_vlan_range: cdktf.stringToTerraform(this._vrfVlanRange),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aaa_remote_ip_enabled: {
        value: cdktf.booleanToHclTerraform(this._aaaRemoteIpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      aaa_server_conf: {
        value: cdktf.stringToHclTerraform(this._aaaServerConf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      active_migration: {
        value: cdktf.booleanToHclTerraform(this._activeMigration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      advertise_pip_bgp: {
        value: cdktf.booleanToHclTerraform(this._advertisePipBgp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      advertise_pip_on_border: {
        value: cdktf.booleanToHclTerraform(this._advertisePipOnBorder),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      agent_intf: {
        value: cdktf.stringToHclTerraform(this._agentIntf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agg_acc_vpc_po_id_range: {
        value: cdktf.stringToHclTerraform(this._aggAccVpcPoIdRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ai_ml_qos_policy: {
        value: cdktf.stringToHclTerraform(this._aiMlQosPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_l3vni_no_vlan: {
        value: cdktf.booleanToHclTerraform(this._allowL3VniNoVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_nxc: {
        value: cdktf.booleanToHclTerraform(this._allowNxc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      anycast_bgw_advertise_pip: {
        value: cdktf.booleanToHclTerraform(this._anycastBgwAdvertisePip),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      anycast_gw_mac: {
        value: cdktf.stringToHclTerraform(this._anycastGwMac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      anycast_lb_id: {
        value: cdktf.numberToHclTerraform(this._anycastLbId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      anycast_rp_ip_range: {
        value: cdktf.stringToHclTerraform(this._anycastRpIpRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_symmetric_default_vrf: {
        value: cdktf.booleanToHclTerraform(this._autoSymmetricDefaultVrf),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_symmetric_vrf_lite: {
        value: cdktf.booleanToHclTerraform(this._autoSymmetricVrfLite),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_unique_vrf_lite_ip_prefix: {
        value: cdktf.booleanToHclTerraform(this._autoUniqueVrfLiteIpPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_vrflite_ifc_default_vrf: {
        value: cdktf.booleanToHclTerraform(this._autoVrfliteIfcDefaultVrf),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      banner: {
        value: cdktf.stringToHclTerraform(this._banner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bfd_auth_enable: {
        value: cdktf.booleanToHclTerraform(this._bfdAuthEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bfd_auth_key: {
        value: cdktf.stringToHclTerraform(this._bfdAuthKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bfd_auth_key_id: {
        value: cdktf.numberToHclTerraform(this._bfdAuthKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bfd_enable: {
        value: cdktf.booleanToHclTerraform(this._bfdEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bfd_ibgp_enable: {
        value: cdktf.booleanToHclTerraform(this._bfdIbgpEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bfd_isis_enable: {
        value: cdktf.booleanToHclTerraform(this._bfdIsisEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bfd_ospf_enable: {
        value: cdktf.booleanToHclTerraform(this._bfdOspfEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bfd_pim_enable: {
        value: cdktf.booleanToHclTerraform(this._bfdPimEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bgp_as: {
        value: cdktf.stringToHclTerraform(this._bgpAs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_auth_enable: {
        value: cdktf.booleanToHclTerraform(this._bgpAuthEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bgp_auth_key: {
        value: cdktf.stringToHclTerraform(this._bgpAuthKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_auth_key_type: {
        value: cdktf.numberToHclTerraform(this._bgpAuthKeyType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bgp_lb_id: {
        value: cdktf.numberToHclTerraform(this._bgpLbId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bootstrap_conf: {
        value: cdktf.stringToHclTerraform(this._bootstrapConf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bootstrap_enable: {
        value: cdktf.booleanToHclTerraform(this._bootstrapEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bootstrap_multisubnet: {
        value: cdktf.stringToHclTerraform(this._bootstrapMultisubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      brfield_debug_flag: {
        value: cdktf.stringToHclTerraform(this._brfieldDebugFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      brownfield_network_name_format: {
        value: cdktf.stringToHclTerraform(this._brownfieldNetworkNameFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      brownfield_skip_overlay_network_attachments: {
        value: cdktf.booleanToHclTerraform(this._brownfieldSkipOverlayNetworkAttachments),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cdp_enable: {
        value: cdktf.booleanToHclTerraform(this._cdpEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      copp_policy: {
        value: cdktf.stringToHclTerraform(this._coppPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dci_macsec_algorithm: {
        value: cdktf.stringToHclTerraform(this._dciMacsecAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dci_macsec_cipher_suite: {
        value: cdktf.stringToHclTerraform(this._dciMacsecCipherSuite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dci_macsec_fallback_algorithm: {
        value: cdktf.stringToHclTerraform(this._dciMacsecFallbackAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dci_macsec_fallback_key_string: {
        value: cdktf.stringToHclTerraform(this._dciMacsecFallbackKeyString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dci_macsec_key_string: {
        value: cdktf.stringToHclTerraform(this._dciMacsecKeyString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dci_subnet_range: {
        value: cdktf.stringToHclTerraform(this._dciSubnetRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dci_subnet_target_mask: {
        value: cdktf.numberToHclTerraform(this._dciSubnetTargetMask),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_network: {
        value: cdktf.stringToHclTerraform(this._defaultNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_pvlan_sec_network: {
        value: cdktf.stringToHclTerraform(this._defaultPvlanSecNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_queuing_policy_cloudscale: {
        value: cdktf.stringToHclTerraform(this._defaultQueuingPolicyCloudscale),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_queuing_policy_other: {
        value: cdktf.stringToHclTerraform(this._defaultQueuingPolicyOther),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_queuing_policy_r_series: {
        value: cdktf.stringToHclTerraform(this._defaultQueuingPolicyRSeries),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_vrf: {
        value: cdktf.stringToHclTerraform(this._defaultVrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_vrf_redis_bgp_rmap: {
        value: cdktf.stringToHclTerraform(this._defaultVrfRedisBgpRmap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy: {
        value: cdktf.booleanToHclTerraform(this._deploy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deployment_freeze: {
        value: cdktf.booleanToHclTerraform(this._deploymentFreeze),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dhcp_enable: {
        value: cdktf.booleanToHclTerraform(this._dhcpEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dhcp_end: {
        value: cdktf.stringToHclTerraform(this._dhcpEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_ipv6_enable: {
        value: cdktf.stringToHclTerraform(this._dhcpIpv6Enable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_start: {
        value: cdktf.stringToHclTerraform(this._dhcpStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_server_ip_list: {
        value: cdktf.stringToHclTerraform(this._dnsServerIpList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_server_vrf: {
        value: cdktf.stringToHclTerraform(this._dnsServerVrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_aaa: {
        value: cdktf.booleanToHclTerraform(this._enableAaa),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_agent: {
        value: cdktf.booleanToHclTerraform(this._enableAgent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_agg_acc_id_range: {
        value: cdktf.booleanToHclTerraform(this._enableAggAccIdRange),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_ai_ml_qos_policy: {
        value: cdktf.booleanToHclTerraform(this._enableAiMlQosPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_dci_macsec: {
        value: cdktf.booleanToHclTerraform(this._enableDciMacsec),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_default_queuing_policy: {
        value: cdktf.booleanToHclTerraform(this._enableDefaultQueuingPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_fabric_vpc_domain_id: {
        value: cdktf.booleanToHclTerraform(this._enableFabricVpcDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_l3vni_no_vlan: {
        value: cdktf.booleanToHclTerraform(this._enableL3VniNoVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_macsec: {
        value: cdktf.booleanToHclTerraform(this._enableMacsec),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_netflow: {
        value: cdktf.booleanToHclTerraform(this._enableNetflow),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_ngoam: {
        value: cdktf.booleanToHclTerraform(this._enableNgoam),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_nxapi: {
        value: cdktf.booleanToHclTerraform(this._enableNxapi),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_nxapi_http: {
        value: cdktf.booleanToHclTerraform(this._enableNxapiHttp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_pbr: {
        value: cdktf.booleanToHclTerraform(this._enablePbr),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_pvlan: {
        value: cdktf.booleanToHclTerraform(this._enablePvlan),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_qkd: {
        value: cdktf.booleanToHclTerraform(this._enableQkd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_real_time_backup: {
        value: cdktf.booleanToHclTerraform(this._enableRealTimeBackup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_rt_intf_stats: {
        value: cdktf.booleanToHclTerraform(this._enableRtIntfStats),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_scheduled_backup: {
        value: cdktf.booleanToHclTerraform(this._enableScheduledBackup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_sgt: {
        value: cdktf.booleanToHclTerraform(this._enableSgt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_tenant_dhcp: {
        value: cdktf.booleanToHclTerraform(this._enableTenantDhcp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_trm: {
        value: cdktf.booleanToHclTerraform(this._enableTrm),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_trmv6: {
        value: cdktf.booleanToHclTerraform(this._enableTrmv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_vpc_peer_link_native_vlan: {
        value: cdktf.booleanToHclTerraform(this._enableVpcPeerLinkNativeVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_vri_id_realloc: {
        value: cdktf.booleanToHclTerraform(this._enableVriIdRealloc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      esr_option: {
        value: cdktf.stringToHclTerraform(this._esrOption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_fabric_type: {
        value: cdktf.stringToHclTerraform(this._extFabricType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extra_conf_intra_links: {
        value: cdktf.stringToHclTerraform(this._extraConfIntraLinks),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extra_conf_leaf: {
        value: cdktf.stringToHclTerraform(this._extraConfLeaf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extra_conf_spine: {
        value: cdktf.stringToHclTerraform(this._extraConfSpine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extra_conf_tor: {
        value: cdktf.stringToHclTerraform(this._extraConfTor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fabric_interface_type: {
        value: cdktf.stringToHclTerraform(this._fabricInterfaceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fabric_mtu: {
        value: cdktf.numberToHclTerraform(this._fabricMtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fabric_name: {
        value: cdktf.stringToHclTerraform(this._fabricName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fabric_vpc_domain_id: {
        value: cdktf.numberToHclTerraform(this._fabricVpcDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fabric_vpc_qos: {
        value: cdktf.booleanToHclTerraform(this._fabricVpcQos),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fabric_vpc_qos_policy_name: {
        value: cdktf.stringToHclTerraform(this._fabricVpcQosPolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_ptp: {
        value: cdktf.booleanToHclTerraform(this._featurePtp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ff: {
        value: cdktf.stringToHclTerraform(this._ff),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grfield_debug_flag: {
        value: cdktf.stringToHclTerraform(this._grfieldDebugFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hd_time: {
        value: cdktf.numberToHclTerraform(this._hdTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      host_intf_admin_state: {
        value: cdktf.booleanToHclTerraform(this._hostIntfAdminState),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ibgp_peer_template: {
        value: cdktf.stringToHclTerraform(this._ibgpPeerTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ibgp_peer_template_leaf: {
        value: cdktf.stringToHclTerraform(this._ibgpPeerTemplateLeaf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_cert: {
        value: cdktf.booleanToHclTerraform(this._ignoreCert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      inband_dhcp_servers: {
        value: cdktf.stringToHclTerraform(this._inbandDhcpServers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inband_mgmt: {
        value: cdktf.booleanToHclTerraform(this._inbandMgmt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      intf_stat_load_interval: {
        value: cdktf.numberToHclTerraform(this._intfStatLoadInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_anycast_rp_ip_range: {
        value: cdktf.stringToHclTerraform(this._ipv6AnycastRpIpRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_multicast_group_subnet: {
        value: cdktf.stringToHclTerraform(this._ipv6MulticastGroupSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      isis_area_num: {
        value: cdktf.stringToHclTerraform(this._isisAreaNum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      isis_auth_enable: {
        value: cdktf.booleanToHclTerraform(this._isisAuthEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      isis_auth_key: {
        value: cdktf.stringToHclTerraform(this._isisAuthKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      isis_auth_keychain_key_id: {
        value: cdktf.numberToHclTerraform(this._isisAuthKeychainKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      isis_auth_keychain_name: {
        value: cdktf.stringToHclTerraform(this._isisAuthKeychainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      isis_level: {
        value: cdktf.stringToHclTerraform(this._isisLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      isis_overload_elapse_time: {
        value: cdktf.numberToHclTerraform(this._isisOverloadElapseTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      isis_overload_enable: {
        value: cdktf.booleanToHclTerraform(this._isisOverloadEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      isis_p2p_enable: {
        value: cdktf.booleanToHclTerraform(this._isisP2PEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kme_server_ip: {
        value: cdktf.stringToHclTerraform(this._kmeServerIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kme_server_port: {
        value: cdktf.numberToHclTerraform(this._kmeServerPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l2_host_intf_mtu: {
        value: cdktf.numberToHclTerraform(this._l2HostIntfMtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l2_segment_id_range: {
        value: cdktf.stringToHclTerraform(this._l2SegmentIdRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l3_partition_id_range: {
        value: cdktf.stringToHclTerraform(this._l3PartitionIdRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l3vni_ipv6_mcast_group: {
        value: cdktf.stringToHclTerraform(this._l3VniIpv6McastGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l3vni_mcast_group: {
        value: cdktf.stringToHclTerraform(this._l3VniMcastGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link_state_routing: {
        value: cdktf.stringToHclTerraform(this._linkStateRouting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link_state_routing_tag: {
        value: cdktf.stringToHclTerraform(this._linkStateRoutingTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loopback0_ip_range: {
        value: cdktf.stringToHclTerraform(this._loopback0IpRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loopback0_ipv6_range: {
        value: cdktf.stringToHclTerraform(this._loopback0Ipv6Range),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loopback1_ip_range: {
        value: cdktf.stringToHclTerraform(this._loopback1IpRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loopback1_ipv6_range: {
        value: cdktf.stringToHclTerraform(this._loopback1Ipv6Range),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      macsec_algorithm: {
        value: cdktf.stringToHclTerraform(this._macsecAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      macsec_cipher_suite: {
        value: cdktf.stringToHclTerraform(this._macsecCipherSuite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      macsec_fallback_algorithm: {
        value: cdktf.stringToHclTerraform(this._macsecFallbackAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      macsec_fallback_key_string: {
        value: cdktf.stringToHclTerraform(this._macsecFallbackKeyString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      macsec_key_string: {
        value: cdktf.stringToHclTerraform(this._macsecKeyString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      macsec_report_timer: {
        value: cdktf.numberToHclTerraform(this._macsecReportTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mgmt_gw: {
        value: cdktf.stringToHclTerraform(this._mgmtGw),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mgmt_prefix: {
        value: cdktf.numberToHclTerraform(this._mgmtPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mgmt_v6prefix: {
        value: cdktf.numberToHclTerraform(this._mgmtV6Prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mpls_handoff: {
        value: cdktf.booleanToHclTerraform(this._mplsHandoff),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mpls_isis_area_num: {
        value: cdktf.stringToHclTerraform(this._mplsIsisAreaNum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mpls_lb_id: {
        value: cdktf.numberToHclTerraform(this._mplsLbId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mpls_loopback_ip_range: {
        value: cdktf.stringToHclTerraform(this._mplsLoopbackIpRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mst_instance_range: {
        value: cdktf.stringToHclTerraform(this._mstInstanceRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multicast_group_subnet: {
        value: cdktf.stringToHclTerraform(this._multicastGroupSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mvpn_vri_id_range: {
        value: cdktf.stringToHclTerraform(this._mvpnVriIdRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netflow_exporter_list: {
        value: cdktf.stringToHclTerraform(this._netflowExporterList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netflow_monitor_list: {
        value: cdktf.stringToHclTerraform(this._netflowMonitorList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netflow_record_list: {
        value: cdktf.stringToHclTerraform(this._netflowRecordList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_extension_template: {
        value: cdktf.stringToHclTerraform(this._networkExtensionTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_vlan_range: {
        value: cdktf.stringToHclTerraform(this._networkVlanRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ntp_server_ip_list: {
        value: cdktf.stringToHclTerraform(this._ntpServerIpList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ntp_server_vrf: {
        value: cdktf.stringToHclTerraform(this._ntpServerVrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nve_lb_id: {
        value: cdktf.numberToHclTerraform(this._nveLbId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nxapi_http_port: {
        value: cdktf.numberToHclTerraform(this._nxapiHttpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nxapi_https_port: {
        value: cdktf.numberToHclTerraform(this._nxapiHttpsPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nxc_dest_vrf: {
        value: cdktf.stringToHclTerraform(this._nxcDestVrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nxc_proxy_port: {
        value: cdktf.numberToHclTerraform(this._nxcProxyPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nxc_proxy_server: {
        value: cdktf.stringToHclTerraform(this._nxcProxyServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nxc_src_intf: {
        value: cdktf.stringToHclTerraform(this._nxcSrcIntf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_tracking_number_range: {
        value: cdktf.stringToHclTerraform(this._objectTrackingNumberRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ospf_area_id: {
        value: cdktf.stringToHclTerraform(this._ospfAreaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ospf_auth_enable: {
        value: cdktf.booleanToHclTerraform(this._ospfAuthEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ospf_auth_key: {
        value: cdktf.stringToHclTerraform(this._ospfAuthKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ospf_auth_key_id: {
        value: cdktf.numberToHclTerraform(this._ospfAuthKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      overlay_mode: {
        value: cdktf.stringToHclTerraform(this._overlayMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overwrite_global_nxc: {
        value: cdktf.booleanToHclTerraform(this._overwriteGlobalNxc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      per_vrf_loopback_auto_provision: {
        value: cdktf.booleanToHclTerraform(this._perVrfLoopbackAutoProvision),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      per_vrf_loopback_auto_provision_v6: {
        value: cdktf.booleanToHclTerraform(this._perVrfLoopbackAutoProvisionV6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      per_vrf_loopback_ip_range: {
        value: cdktf.stringToHclTerraform(this._perVrfLoopbackIpRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      per_vrf_loopback_ip_range_v6: {
        value: cdktf.stringToHclTerraform(this._perVrfLoopbackIpRangeV6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pfc_watch_int: {
        value: cdktf.numberToHclTerraform(this._pfcWatchInt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      phantom_rp_lb_id1: {
        value: cdktf.numberToHclTerraform(this._phantomRpLbId1),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      phantom_rp_lb_id2: {
        value: cdktf.numberToHclTerraform(this._phantomRpLbId2),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      phantom_rp_lb_id3: {
        value: cdktf.numberToHclTerraform(this._phantomRpLbId3),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      phantom_rp_lb_id4: {
        value: cdktf.numberToHclTerraform(this._phantomRpLbId4),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pim_hello_auth_enable: {
        value: cdktf.booleanToHclTerraform(this._pimHelloAuthEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pim_hello_auth_key: {
        value: cdktf.stringToHclTerraform(this._pimHelloAuthKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pm_enable: {
        value: cdktf.booleanToHclTerraform(this._pmEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      power_redundancy_mode: {
        value: cdktf.stringToHclTerraform(this._powerRedundancyMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ptp_domain_id: {
        value: cdktf.numberToHclTerraform(this._ptpDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ptp_lb_id: {
        value: cdktf.numberToHclTerraform(this._ptpLbId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ptp_vlan_id: {
        value: cdktf.numberToHclTerraform(this._ptpVlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      qkd_profile_name: {
        value: cdktf.stringToHclTerraform(this._qkdProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_mode: {
        value: cdktf.stringToHclTerraform(this._replicationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_map_sequence_number_range: {
        value: cdktf.stringToHclTerraform(this._routeMapSequenceNumberRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      router_id_range: {
        value: cdktf.stringToHclTerraform(this._routerIdRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rp_count: {
        value: cdktf.numberToHclTerraform(this._rpCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rp_lb_id: {
        value: cdktf.numberToHclTerraform(this._rpLbId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rp_mode: {
        value: cdktf.stringToHclTerraform(this._rpMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rr_count: {
        value: cdktf.numberToHclTerraform(this._rrCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scheduled_time: {
        value: cdktf.stringToHclTerraform(this._scheduledTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      seed_switch_core_interfaces: {
        value: cdktf.stringToHclTerraform(this._seedSwitchCoreInterfaces),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_network_vlan_range: {
        value: cdktf.stringToHclTerraform(this._serviceNetworkVlanRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sgt_id_range: {
        value: cdktf.stringToHclTerraform(this._sgtIdRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sgt_name_prefix: {
        value: cdktf.stringToHclTerraform(this._sgtNamePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sgt_preprovision: {
        value: cdktf.booleanToHclTerraform(this._sgtPreprovision),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sla_id_range: {
        value: cdktf.stringToHclTerraform(this._slaIdRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp_server_host_trap: {
        value: cdktf.booleanToHclTerraform(this._snmpServerHostTrap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      spine_switch_core_interfaces: {
        value: cdktf.stringToHclTerraform(this._spineSwitchCoreInterfaces),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sspine_add_del_debug_flag: {
        value: cdktf.stringToHclTerraform(this._sspineAddDelDebugFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_underlay_ip_alloc: {
        value: cdktf.booleanToHclTerraform(this._staticUnderlayIpAlloc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      stp_bridge_priority: {
        value: cdktf.numberToHclTerraform(this._stpBridgePriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stp_root_option: {
        value: cdktf.stringToHclTerraform(this._stpRootOption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stp_vlan_range: {
        value: cdktf.stringToHclTerraform(this._stpVlanRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strict_cc_mode: {
        value: cdktf.booleanToHclTerraform(this._strictCcMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      subinterface_range: {
        value: cdktf.stringToHclTerraform(this._subinterfaceRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_range: {
        value: cdktf.stringToHclTerraform(this._subnetRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_target_mask: {
        value: cdktf.numberToHclTerraform(this._subnetTargetMask),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      syslog_server_ip_list: {
        value: cdktf.stringToHclTerraform(this._syslogServerIpList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      syslog_server_vrf: {
        value: cdktf.stringToHclTerraform(this._syslogServerVrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      syslog_sev: {
        value: cdktf.stringToHclTerraform(this._syslogSev),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcam_allocation: {
        value: cdktf.booleanToHclTerraform(this._tcamAllocation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      trustpoint_label: {
        value: cdktf.stringToHclTerraform(this._trustpointLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      underlay_is_v6: {
        value: cdktf.booleanToHclTerraform(this._underlayIsV6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      unnum_bootstrap_lb_id: {
        value: cdktf.numberToHclTerraform(this._unnumBootstrapLbId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_link_local: {
        value: cdktf.booleanToHclTerraform(this._useLinkLocal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      v6_subnet_range: {
        value: cdktf.stringToHclTerraform(this._v6SubnetRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      v6_subnet_target_mask: {
        value: cdktf.numberToHclTerraform(this._v6SubnetTargetMask),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vpc_auto_recovery_time: {
        value: cdktf.numberToHclTerraform(this._vpcAutoRecoveryTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vpc_delay_restore: {
        value: cdktf.numberToHclTerraform(this._vpcDelayRestore),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vpc_delay_restore_time: {
        value: cdktf.numberToHclTerraform(this._vpcDelayRestoreTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vpc_domain_id_range: {
        value: cdktf.stringToHclTerraform(this._vpcDomainIdRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_enable_ipv6_nd_sync: {
        value: cdktf.booleanToHclTerraform(this._vpcEnableIpv6NdSync),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vpc_peer_keep_alive_option: {
        value: cdktf.stringToHclTerraform(this._vpcPeerKeepAliveOption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_peer_link_po: {
        value: cdktf.numberToHclTerraform(this._vpcPeerLinkPo),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vpc_peer_link_vlan: {
        value: cdktf.numberToHclTerraform(this._vpcPeerLinkVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vrf_extension_template: {
        value: cdktf.stringToHclTerraform(this._vrfExtensionTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_lite_autoconfig: {
        value: cdktf.stringToHclTerraform(this._vrfLiteAutoconfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_vlan_range: {
        value: cdktf.stringToHclTerraform(this._vrfVlanRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
