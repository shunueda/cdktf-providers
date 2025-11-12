// https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FabricIpfmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable only, when IP Authorization is enabled in the AAA \ Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#aaa_remote_ip_enabled FabricIpfm#aaa_remote_ip_enabled}
  */
  readonly aaaRemoteIpEnabled?: boolean | cdktf.IResolvable;
  /**
  * AAA Configurations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#aaa_server_conf FabricIpfm#aaa_server_conf}
  */
  readonly aaaServerConf?: string;
  /**
  * Active Migration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#active_migration FabricIpfm#active_migration}
  */
  readonly activeMigration?: boolean | cdktf.IResolvable;
  /**
  * Interface to connect to Agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#agent_intf FabricIpfm#agent_intf}
  */
  readonly agentIntf?: string;
  /**
  * ASM group ranges with prefixes (len:4-32) example: 239.1.1.0/25, max 20 ranges. Enabling SPT-Threshold Infinity to prevent switchover to source-tree.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#asm_group_ranges FabricIpfm#asm_group_ranges}
  */
  readonly asmGroupRanges?: string;
  /**
  * Additional CLIs required during device bootup/login e.g. AAA/Radius
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#bootstrap_conf FabricIpfm#bootstrap_conf}
  */
  readonly bootstrapConf?: string;
  /**
  * Automatic IP Assignment For POAP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#bootstrap_enable FabricIpfm#bootstrap_enable}
  */
  readonly bootstrapEnable?: boolean | cdktf.IResolvable;
  /**
  * DHCPv4 Multi Subnet Scope - lines with # prefix are ignored here
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#bootstrap_multisubnet FabricIpfm#bootstrap_multisubnet}
  */
  readonly bootstrapMultisubnet?: string;
  /**
  * Only for brf debugging purpose !!!
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#brfield_debug_flag FabricIpfm#brfield_debug_flag}
  */
  readonly brfieldDebugFlag?: string;
  /**
  * Enable CDP on management interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#cdp_enable FabricIpfm#cdp_enable}
  */
  readonly cdpEnable?: boolean | cdktf.IResolvable;
  /**
  * This flag does configuration save and deploy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#deploy FabricIpfm#deploy}
  */
  readonly deploy: boolean | cdktf.IResolvable;
  /**
  * Disable all deployments in this fabric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#deployment_freeze FabricIpfm#deployment_freeze}
  */
  readonly deploymentFreeze?: boolean | cdktf.IResolvable;
  /**
  * Automatic IP Assignment For POAP From Local DHCP Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#dhcp_enable FabricIpfm#dhcp_enable}
  */
  readonly dhcpEnable?: boolean | cdktf.IResolvable;
  /**
  * End Address For Switch Out-of-Band POAP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#dhcp_end FabricIpfm#dhcp_end}
  */
  readonly dhcpEnd?: string;
  /**
  * No description available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#dhcp_ipv6_enable FabricIpfm#dhcp_ipv6_enable}
  */
  readonly dhcpIpv6Enable?: string;
  /**
  * Start Address For Switch Out-of-Band POAP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#dhcp_start FabricIpfm#dhcp_start}
  */
  readonly dhcpStart?: string;
  /**
  * Comma separated list of IP Addresses (v4/v6)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#dns_server_ip_list FabricIpfm#dns_server_ip_list}
  */
  readonly dnsServerIpList?: string;
  /**
  * One VRF for all DNS servers or a comma separated list of VRFs, one per DNS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#dns_server_vrf FabricIpfm#dns_server_vrf}
  */
  readonly dnsServerVrf?: string;
  /**
  * Include AAA configs from Manageability tab during device bootup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#enable_aaa FabricIpfm#enable_aaa}
  */
  readonly enableAaa?: boolean | cdktf.IResolvable;
  /**
  * Enable Agent (development purpose only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#enable_agent FabricIpfm#enable_agent}
  */
  readonly enableAgent?: boolean | cdktf.IResolvable;
  /**
  * Enable groups with receivers sending (*,G) joins
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#enable_asm FabricIpfm#enable_asm}
  */
  readonly enableAsm?: boolean | cdktf.IResolvable;
  /**
  * Enable NBM mode to pim-passive for default VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#enable_nbm_passive FabricIpfm#enable_nbm_passive}
  */
  readonly enableNbmPassive?: boolean | cdktf.IResolvable;
  /**
  * Enable HTTPS NX-API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#enable_nxapi FabricIpfm#enable_nxapi}
  */
  readonly enableNxapi?: boolean | cdktf.IResolvable;
  /**
  * Enable HTTP NX-API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#enable_nxapi_http FabricIpfm#enable_nxapi_http}
  */
  readonly enableNxapiHttp?: boolean | cdktf.IResolvable;
  /**
  * Valid for NX-OS only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#enable_rt_intf_stats FabricIpfm#enable_rt_intf_stats}
  */
  readonly enableRtIntfStats?: boolean | cdktf.IResolvable;
  /**
  * External Fabric Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#ext_fabric_type FabricIpfm#ext_fabric_type}
  */
  readonly extFabricType?: string;
  /**
  * Additional CLIs For All Intra-Fabric Links
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#extra_conf_intra_links FabricIpfm#extra_conf_intra_links}
  */
  readonly extraConfIntraLinks?: string;
  /**
  * Additional CLIs For All Leafs and Tier2 Leafs As Captured From Show Running Configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#extra_conf_leaf FabricIpfm#extra_conf_leaf}
  */
  readonly extraConfLeaf?: string;
  /**
  * Additional CLIs For All Spines As Captured From Show Running Configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#extra_conf_spine FabricIpfm#extra_conf_spine}
  */
  readonly extraConfSpine?: string;
  /**
  * Must be an even number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#fabric_mtu FabricIpfm#fabric_mtu}
  */
  readonly fabricMtu?: number;
  /**
  * Fabric name to be created, updated or deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#fabric_name FabricIpfm#fabric_name}
  */
  readonly fabricName: string;
  /**
  * Enable Precision Time Protocol (PTP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#feature_ptp FabricIpfm#feature_ptp}
  */
  readonly featurePtp?: boolean | cdktf.IResolvable;
  /**
  * Template Family
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#ff FabricIpfm#ff}
  */
  readonly ff?: string;
  /**
  * Enable to clean switch configuration without reload when PreserveConfig=no
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#grfield_debug_flag FabricIpfm#grfield_debug_flag}
  */
  readonly grfieldDebugFlag?: string;
  /**
  * Time in seconds (Min:5, Max:300)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#intf_stat_load_interval FabricIpfm#intf_stat_load_interval}
  */
  readonly intfStatLoadInterval?: number;
  /**
  * Enable IS-IS Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#isis_auth_enable FabricIpfm#isis_auth_enable}
  */
  readonly isisAuthEnable?: boolean | cdktf.IResolvable;
  /**
  * Cisco Type 7 Encrypted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#isis_auth_key FabricIpfm#isis_auth_key}
  */
  readonly isisAuthKey?: string;
  /**
  * IS-IS Authentication Key ID (Min:0, Max:65535)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#isis_auth_keychain_key_id FabricIpfm#isis_auth_keychain_key_id}
  */
  readonly isisAuthKeychainKeyId?: number;
  /**
  * IS-IS Authentication Keychain Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#isis_auth_keychain_name FabricIpfm#isis_auth_keychain_name}
  */
  readonly isisAuthKeychainName?: string;
  /**
  * Supported IS types: level-1, level-2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#isis_level FabricIpfm#isis_level}
  */
  readonly isisLevel?: string;
  /**
  * This will enable network point-to-point on fabric interfaces which are numbered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#isis_p2p_enable FabricIpfm#isis_p2p_enable}
  */
  readonly isisP2PEnable?: boolean | cdktf.IResolvable;
  /**
  * Must be an even number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#l2_host_intf_mtu FabricIpfm#l2_host_intf_mtu}
  */
  readonly l2HostIntfMtu?: number;
  /**
  * Used for Spine-Leaf Connectivity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#link_state_routing FabricIpfm#link_state_routing}
  */
  readonly linkStateRouting?: string;
  /**
  * Routing process tag for the fabric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#link_state_routing_tag FabricIpfm#link_state_routing_tag}
  */
  readonly linkStateRoutingTag?: string;
  /**
  * Routing Loopback IP Address Range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#loopback0_ip_range FabricIpfm#loopback0_ip_range}
  */
  readonly loopback0IpRange?: string;
  /**
  * Default Gateway For Management VRF On The Switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#mgmt_gw FabricIpfm#mgmt_gw}
  */
  readonly mgmtGw?: string;
  /**
  * Switch Mgmt IP Subnet Prefix (Min:8, Max:30)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#mgmt_prefix FabricIpfm#mgmt_prefix}
  */
  readonly mgmtPrefix?: number;
  /**
  * Comma separated list of IP Addresses (v4/v6)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#ntp_server_ip_list FabricIpfm#ntp_server_ip_list}
  */
  readonly ntpServerIpList?: string;
  /**
  * One VRF for all NTP servers or a comma separated list of VRFs, one per NTP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#ntp_server_vrf FabricIpfm#ntp_server_vrf}
  */
  readonly ntpServerVrf?: string;
  /**
  * NX-API HTTP Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#nxapi_http_port FabricIpfm#nxapi_http_port}
  */
  readonly nxapiHttpPort?: number;
  /**
  * NX-API HTTPS Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#nxapi_https_port FabricIpfm#nxapi_https_port}
  */
  readonly nxapiHttpsPort?: number;
  /**
  * VRF used for NX-API communication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#nxapi_vrf FabricIpfm#nxapi_vrf}
  */
  readonly nxapiVrf?: string;
  /**
  * OSPF Area Id in IP address format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#ospf_area_id FabricIpfm#ospf_area_id}
  */
  readonly ospfAreaId?: string;
  /**
  * Enable OSPF Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#ospf_auth_enable FabricIpfm#ospf_auth_enable}
  */
  readonly ospfAuthEnable?: boolean | cdktf.IResolvable;
  /**
  * 3DES Encrypted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#ospf_auth_key FabricIpfm#ospf_auth_key}
  */
  readonly ospfAuthKey?: string;
  /**
  * No description available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#ospf_auth_key_id FabricIpfm#ospf_auth_key_id}
  */
  readonly ospfAuthKeyId?: number;
  /**
  * Enable PIM Hello Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#pim_hello_auth_enable FabricIpfm#pim_hello_auth_enable}
  */
  readonly pimHelloAuthEnable?: boolean | cdktf.IResolvable;
  /**
  * 3DES Encrypted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#pim_hello_auth_key FabricIpfm#pim_hello_auth_key}
  */
  readonly pimHelloAuthKey?: string;
  /**
  * Enable Performance Monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#pm_enable FabricIpfm#pm_enable}
  */
  readonly pmEnable?: boolean | cdktf.IResolvable;
  /**
  * Default power supply mode for the fabric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#power_redundancy_mode FabricIpfm#power_redundancy_mode}
  */
  readonly powerRedundancyMode?: string;
  /**
  * Multiple Independent PTP Clocking Subdomains on a Single Network (Min:0, Max:127)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#ptp_domain_id FabricIpfm#ptp_domain_id}
  */
  readonly ptpDomainId?: number;
  /**
  * No description available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#ptp_lb_id FabricIpfm#ptp_lb_id}
  */
  readonly ptpLbId?: number;
  /**
  * Enabled on ISL links only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#ptp_profile FabricIpfm#ptp_profile}
  */
  readonly ptpProfile?: string;
  /**
  * Replication Mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#replication_mode FabricIpfm#replication_mode}
  */
  readonly replicationMode?: string;
  /**
  * No description available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#routing_lb_id FabricIpfm#routing_lb_id}
  */
  readonly routingLbId?: number;
  /**
  * RP Loopback IP Address Range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#rp_ip_range FabricIpfm#rp_ip_range}
  */
  readonly rpIpRange?: string;
  /**
  * No description available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#rp_lb_id FabricIpfm#rp_lb_id}
  */
  readonly rpLbId?: number;
  /**
  * Configure NDFC as a receiver for SNMP traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#snmp_server_host_trap FabricIpfm#snmp_server_host_trap}
  */
  readonly snmpServerHostTrap?: boolean | cdktf.IResolvable;
  /**
  * Checking this will disable Dynamic Fabric IP Address Allocations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#static_underlay_ip_alloc FabricIpfm#static_underlay_ip_alloc}
  */
  readonly staticUnderlayIpAlloc?: boolean | cdktf.IResolvable;
  /**
  * Address range to assign Numbered IPs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#subnet_range FabricIpfm#subnet_range}
  */
  readonly subnetRange?: string;
  /**
  * Mask for Fabric Subnet IP Range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#subnet_target_mask FabricIpfm#subnet_target_mask}
  */
  readonly subnetTargetMask?: number;
  /**
  * Comma separated list of IP Addresses (v4/v6)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#syslog_server_ip_list FabricIpfm#syslog_server_ip_list}
  */
  readonly syslogServerIpList?: string;
  /**
  * One VRF for all Syslog servers or a comma separated list of VRFs, one per Syslog server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#syslog_server_vrf FabricIpfm#syslog_server_vrf}
  */
  readonly syslogServerVrf?: string;
  /**
  * Comma separated list of Syslog severity values, one per Syslog server (Min:0, Max:7)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#syslog_sev FabricIpfm#syslog_sev}
  */
  readonly syslogSev?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm ndfc_fabric_ipfm}
*/
export class FabricIpfm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ndfc_fabric_ipfm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FabricIpfm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FabricIpfm to import
  * @param importFromId The id of the existing FabricIpfm that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FabricIpfm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ndfc_fabric_ipfm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/fabric_ipfm ndfc_fabric_ipfm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FabricIpfmConfig
  */
  public constructor(scope: Construct, id: string, config: FabricIpfmConfig) {
    super(scope, id, {
      terraformResourceType: 'ndfc_fabric_ipfm',
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
    this._agentIntf = config.agentIntf;
    this._asmGroupRanges = config.asmGroupRanges;
    this._bootstrapConf = config.bootstrapConf;
    this._bootstrapEnable = config.bootstrapEnable;
    this._bootstrapMultisubnet = config.bootstrapMultisubnet;
    this._brfieldDebugFlag = config.brfieldDebugFlag;
    this._cdpEnable = config.cdpEnable;
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
    this._enableAsm = config.enableAsm;
    this._enableNbmPassive = config.enableNbmPassive;
    this._enableNxapi = config.enableNxapi;
    this._enableNxapiHttp = config.enableNxapiHttp;
    this._enableRtIntfStats = config.enableRtIntfStats;
    this._extFabricType = config.extFabricType;
    this._extraConfIntraLinks = config.extraConfIntraLinks;
    this._extraConfLeaf = config.extraConfLeaf;
    this._extraConfSpine = config.extraConfSpine;
    this._fabricMtu = config.fabricMtu;
    this._fabricName = config.fabricName;
    this._featurePtp = config.featurePtp;
    this._ff = config.ff;
    this._grfieldDebugFlag = config.grfieldDebugFlag;
    this._intfStatLoadInterval = config.intfStatLoadInterval;
    this._isisAuthEnable = config.isisAuthEnable;
    this._isisAuthKey = config.isisAuthKey;
    this._isisAuthKeychainKeyId = config.isisAuthKeychainKeyId;
    this._isisAuthKeychainName = config.isisAuthKeychainName;
    this._isisLevel = config.isisLevel;
    this._isisP2PEnable = config.isisP2PEnable;
    this._l2HostIntfMtu = config.l2HostIntfMtu;
    this._linkStateRouting = config.linkStateRouting;
    this._linkStateRoutingTag = config.linkStateRoutingTag;
    this._loopback0IpRange = config.loopback0IpRange;
    this._mgmtGw = config.mgmtGw;
    this._mgmtPrefix = config.mgmtPrefix;
    this._ntpServerIpList = config.ntpServerIpList;
    this._ntpServerVrf = config.ntpServerVrf;
    this._nxapiHttpPort = config.nxapiHttpPort;
    this._nxapiHttpsPort = config.nxapiHttpsPort;
    this._nxapiVrf = config.nxapiVrf;
    this._ospfAreaId = config.ospfAreaId;
    this._ospfAuthEnable = config.ospfAuthEnable;
    this._ospfAuthKey = config.ospfAuthKey;
    this._ospfAuthKeyId = config.ospfAuthKeyId;
    this._pimHelloAuthEnable = config.pimHelloAuthEnable;
    this._pimHelloAuthKey = config.pimHelloAuthKey;
    this._pmEnable = config.pmEnable;
    this._powerRedundancyMode = config.powerRedundancyMode;
    this._ptpDomainId = config.ptpDomainId;
    this._ptpLbId = config.ptpLbId;
    this._ptpProfile = config.ptpProfile;
    this._replicationMode = config.replicationMode;
    this._routingLbId = config.routingLbId;
    this._rpIpRange = config.rpIpRange;
    this._rpLbId = config.rpLbId;
    this._snmpServerHostTrap = config.snmpServerHostTrap;
    this._staticUnderlayIpAlloc = config.staticUnderlayIpAlloc;
    this._subnetRange = config.subnetRange;
    this._subnetTargetMask = config.subnetTargetMask;
    this._syslogServerIpList = config.syslogServerIpList;
    this._syslogServerVrf = config.syslogServerVrf;
    this._syslogSev = config.syslogSev;
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

  // abstract_routed_host - computed: true, optional: false, required: false
  public get abstractRoutedHost() {
    return this.getStringAttribute('abstract_routed_host');
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

  // asm_group_ranges - computed: true, optional: true, required: false
  private _asmGroupRanges?: string; 
  public get asmGroupRanges() {
    return this.getStringAttribute('asm_group_ranges');
  }
  public set asmGroupRanges(value: string) {
    this._asmGroupRanges = value;
  }
  public resetAsmGroupRanges() {
    this._asmGroupRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asmGroupRangesInput() {
    return this._asmGroupRanges;
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

  // enable_asm - computed: true, optional: true, required: false
  private _enableAsm?: boolean | cdktf.IResolvable; 
  public get enableAsm() {
    return this.getBooleanAttribute('enable_asm');
  }
  public set enableAsm(value: boolean | cdktf.IResolvable) {
    this._enableAsm = value;
  }
  public resetEnableAsm() {
    this._enableAsm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAsmInput() {
    return this._enableAsm;
  }

  // enable_nbm_passive - computed: true, optional: true, required: false
  private _enableNbmPassive?: boolean | cdktf.IResolvable; 
  public get enableNbmPassive() {
    return this.getBooleanAttribute('enable_nbm_passive');
  }
  public set enableNbmPassive(value: boolean | cdktf.IResolvable) {
    this._enableNbmPassive = value;
  }
  public resetEnableNbmPassive() {
    this._enableNbmPassive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNbmPassiveInput() {
    return this._enableNbmPassive;
  }

  // enable_nbm_passive_prev - computed: true, optional: false, required: false
  public get enableNbmPassivePrev() {
    return this.getBooleanAttribute('enable_nbm_passive_prev');
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

  // fabric_interface_type - computed: true, optional: false, required: false
  public get fabricInterfaceType() {
    return this.getStringAttribute('fabric_interface_type');
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

  // fabric_technology - computed: true, optional: false, required: false
  public get fabricTechnology() {
    return this.getStringAttribute('fabric_technology');
  }

  // fabric_type - computed: true, optional: false, required: false
  public get fabricType() {
    return this.getStringAttribute('fabric_type');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // mgmt_v6prefix - computed: true, optional: false, required: false
  public get mgmtV6Prefix() {
    return this.getNumberAttribute('mgmt_v6prefix');
  }

  // mgmt_v6prefix_internal - computed: true, optional: false, required: false
  public get mgmtV6PrefixInternal() {
    return this.getNumberAttribute('mgmt_v6prefix_internal');
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

  // nxapi_vrf - computed: true, optional: true, required: false
  private _nxapiVrf?: string; 
  public get nxapiVrf() {
    return this.getStringAttribute('nxapi_vrf');
  }
  public set nxapiVrf(value: string) {
    this._nxapiVrf = value;
  }
  public resetNxapiVrf() {
    this._nxapiVrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxapiVrfInput() {
    return this._nxapiVrf;
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

  // ptp_profile - computed: true, optional: true, required: false
  private _ptpProfile?: string; 
  public get ptpProfile() {
    return this.getStringAttribute('ptp_profile');
  }
  public set ptpProfile(value: string) {
    this._ptpProfile = value;
  }
  public resetPtpProfile() {
    this._ptpProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ptpProfileInput() {
    return this._ptpProfile;
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

  // routing_lb_id - computed: true, optional: true, required: false
  private _routingLbId?: number; 
  public get routingLbId() {
    return this.getNumberAttribute('routing_lb_id');
  }
  public set routingLbId(value: number) {
    this._routingLbId = value;
  }
  public resetRoutingLbId() {
    this._routingLbId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingLbIdInput() {
    return this._routingLbId;
  }

  // rp_ip_range - computed: true, optional: true, required: false
  private _rpIpRange?: string; 
  public get rpIpRange() {
    return this.getStringAttribute('rp_ip_range');
  }
  public set rpIpRange(value: string) {
    this._rpIpRange = value;
  }
  public resetRpIpRange() {
    this._rpIpRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpIpRangeInput() {
    return this._rpIpRange;
  }

  // rp_ip_range_internal - computed: true, optional: false, required: false
  public get rpIpRangeInternal() {
    return this.getStringAttribute('rp_ip_range_internal');
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

  // upgrade_from_version - computed: true, optional: false, required: false
  public get upgradeFromVersion() {
    return this.getStringAttribute('upgrade_from_version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aaa_remote_ip_enabled: cdktf.booleanToTerraform(this._aaaRemoteIpEnabled),
      aaa_server_conf: cdktf.stringToTerraform(this._aaaServerConf),
      active_migration: cdktf.booleanToTerraform(this._activeMigration),
      agent_intf: cdktf.stringToTerraform(this._agentIntf),
      asm_group_ranges: cdktf.stringToTerraform(this._asmGroupRanges),
      bootstrap_conf: cdktf.stringToTerraform(this._bootstrapConf),
      bootstrap_enable: cdktf.booleanToTerraform(this._bootstrapEnable),
      bootstrap_multisubnet: cdktf.stringToTerraform(this._bootstrapMultisubnet),
      brfield_debug_flag: cdktf.stringToTerraform(this._brfieldDebugFlag),
      cdp_enable: cdktf.booleanToTerraform(this._cdpEnable),
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
      enable_asm: cdktf.booleanToTerraform(this._enableAsm),
      enable_nbm_passive: cdktf.booleanToTerraform(this._enableNbmPassive),
      enable_nxapi: cdktf.booleanToTerraform(this._enableNxapi),
      enable_nxapi_http: cdktf.booleanToTerraform(this._enableNxapiHttp),
      enable_rt_intf_stats: cdktf.booleanToTerraform(this._enableRtIntfStats),
      ext_fabric_type: cdktf.stringToTerraform(this._extFabricType),
      extra_conf_intra_links: cdktf.stringToTerraform(this._extraConfIntraLinks),
      extra_conf_leaf: cdktf.stringToTerraform(this._extraConfLeaf),
      extra_conf_spine: cdktf.stringToTerraform(this._extraConfSpine),
      fabric_mtu: cdktf.numberToTerraform(this._fabricMtu),
      fabric_name: cdktf.stringToTerraform(this._fabricName),
      feature_ptp: cdktf.booleanToTerraform(this._featurePtp),
      ff: cdktf.stringToTerraform(this._ff),
      grfield_debug_flag: cdktf.stringToTerraform(this._grfieldDebugFlag),
      intf_stat_load_interval: cdktf.numberToTerraform(this._intfStatLoadInterval),
      isis_auth_enable: cdktf.booleanToTerraform(this._isisAuthEnable),
      isis_auth_key: cdktf.stringToTerraform(this._isisAuthKey),
      isis_auth_keychain_key_id: cdktf.numberToTerraform(this._isisAuthKeychainKeyId),
      isis_auth_keychain_name: cdktf.stringToTerraform(this._isisAuthKeychainName),
      isis_level: cdktf.stringToTerraform(this._isisLevel),
      isis_p2p_enable: cdktf.booleanToTerraform(this._isisP2PEnable),
      l2_host_intf_mtu: cdktf.numberToTerraform(this._l2HostIntfMtu),
      link_state_routing: cdktf.stringToTerraform(this._linkStateRouting),
      link_state_routing_tag: cdktf.stringToTerraform(this._linkStateRoutingTag),
      loopback0_ip_range: cdktf.stringToTerraform(this._loopback0IpRange),
      mgmt_gw: cdktf.stringToTerraform(this._mgmtGw),
      mgmt_prefix: cdktf.numberToTerraform(this._mgmtPrefix),
      ntp_server_ip_list: cdktf.stringToTerraform(this._ntpServerIpList),
      ntp_server_vrf: cdktf.stringToTerraform(this._ntpServerVrf),
      nxapi_http_port: cdktf.numberToTerraform(this._nxapiHttpPort),
      nxapi_https_port: cdktf.numberToTerraform(this._nxapiHttpsPort),
      nxapi_vrf: cdktf.stringToTerraform(this._nxapiVrf),
      ospf_area_id: cdktf.stringToTerraform(this._ospfAreaId),
      ospf_auth_enable: cdktf.booleanToTerraform(this._ospfAuthEnable),
      ospf_auth_key: cdktf.stringToTerraform(this._ospfAuthKey),
      ospf_auth_key_id: cdktf.numberToTerraform(this._ospfAuthKeyId),
      pim_hello_auth_enable: cdktf.booleanToTerraform(this._pimHelloAuthEnable),
      pim_hello_auth_key: cdktf.stringToTerraform(this._pimHelloAuthKey),
      pm_enable: cdktf.booleanToTerraform(this._pmEnable),
      power_redundancy_mode: cdktf.stringToTerraform(this._powerRedundancyMode),
      ptp_domain_id: cdktf.numberToTerraform(this._ptpDomainId),
      ptp_lb_id: cdktf.numberToTerraform(this._ptpLbId),
      ptp_profile: cdktf.stringToTerraform(this._ptpProfile),
      replication_mode: cdktf.stringToTerraform(this._replicationMode),
      routing_lb_id: cdktf.numberToTerraform(this._routingLbId),
      rp_ip_range: cdktf.stringToTerraform(this._rpIpRange),
      rp_lb_id: cdktf.numberToTerraform(this._rpLbId),
      snmp_server_host_trap: cdktf.booleanToTerraform(this._snmpServerHostTrap),
      static_underlay_ip_alloc: cdktf.booleanToTerraform(this._staticUnderlayIpAlloc),
      subnet_range: cdktf.stringToTerraform(this._subnetRange),
      subnet_target_mask: cdktf.numberToTerraform(this._subnetTargetMask),
      syslog_server_ip_list: cdktf.stringToTerraform(this._syslogServerIpList),
      syslog_server_vrf: cdktf.stringToTerraform(this._syslogServerVrf),
      syslog_sev: cdktf.stringToTerraform(this._syslogSev),
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
      agent_intf: {
        value: cdktf.stringToHclTerraform(this._agentIntf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      asm_group_ranges: {
        value: cdktf.stringToHclTerraform(this._asmGroupRanges),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      cdp_enable: {
        value: cdktf.booleanToHclTerraform(this._cdpEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      enable_asm: {
        value: cdktf.booleanToHclTerraform(this._enableAsm),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_nbm_passive: {
        value: cdktf.booleanToHclTerraform(this._enableNbmPassive),
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
      enable_rt_intf_stats: {
        value: cdktf.booleanToHclTerraform(this._enableRtIntfStats),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      intf_stat_load_interval: {
        value: cdktf.numberToHclTerraform(this._intfStatLoadInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      isis_p2p_enable: {
        value: cdktf.booleanToHclTerraform(this._isisP2PEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      l2_host_intf_mtu: {
        value: cdktf.numberToHclTerraform(this._l2HostIntfMtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      nxapi_vrf: {
        value: cdktf.stringToHclTerraform(this._nxapiVrf),
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
      ptp_profile: {
        value: cdktf.stringToHclTerraform(this._ptpProfile),
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
      routing_lb_id: {
        value: cdktf.numberToHclTerraform(this._routingLbId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rp_ip_range: {
        value: cdktf.stringToHclTerraform(this._rpIpRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rp_lb_id: {
        value: cdktf.numberToHclTerraform(this._rpLbId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snmp_server_host_trap: {
        value: cdktf.booleanToHclTerraform(this._snmpServerHostTrap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      static_underlay_ip_alloc: {
        value: cdktf.booleanToHclTerraform(this._staticUnderlayIpAlloc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
