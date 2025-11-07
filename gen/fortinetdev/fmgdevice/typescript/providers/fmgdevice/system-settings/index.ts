// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#allow_linkdown_path SystemSettings#allow_linkdown_path}
  */
  readonly allowLinkdownPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#allow_subnet_overlap SystemSettings#allow_subnet_overlap}
  */
  readonly allowSubnetOverlap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#application_bandwidth_tracking SystemSettings#application_bandwidth_tracking}
  */
  readonly applicationBandwidthTracking?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#asymroute SystemSettings#asymroute}
  */
  readonly asymroute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#asymroute6 SystemSettings#asymroute6}
  */
  readonly asymroute6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#asymroute6_icmp SystemSettings#asymroute6_icmp}
  */
  readonly asymroute6Icmp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#asymroute_icmp SystemSettings#asymroute_icmp}
  */
  readonly asymrouteIcmp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#auxiliary_session SystemSettings#auxiliary_session}
  */
  readonly auxiliarySession?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#bfd SystemSettings#bfd}
  */
  readonly bfd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#bfd_desired_min_tx SystemSettings#bfd_desired_min_tx}
  */
  readonly bfdDesiredMinTx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#bfd_detect_mult SystemSettings#bfd_detect_mult}
  */
  readonly bfdDetectMult?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#bfd_dont_enforce_src_port SystemSettings#bfd_dont_enforce_src_port}
  */
  readonly bfdDontEnforceSrcPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#bfd_required_min_rx SystemSettings#bfd_required_min_rx}
  */
  readonly bfdRequiredMinRx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#block_land_attack SystemSettings#block_land_attack}
  */
  readonly blockLandAttack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#central_nat SystemSettings#central_nat}
  */
  readonly centralNat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#comments SystemSettings#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#consolidated_firewall_mode SystemSettings#consolidated_firewall_mode}
  */
  readonly consolidatedFirewallMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#default_app_port_as_service SystemSettings#default_app_port_as_service}
  */
  readonly defaultAppPortAsService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#default_policy_expiry_days SystemSettings#default_policy_expiry_days}
  */
  readonly defaultPolicyExpiryDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#default_voip_alg_mode SystemSettings#default_voip_alg_mode}
  */
  readonly defaultVoipAlgMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#deny_tcp_with_icmp SystemSettings#deny_tcp_with_icmp}
  */
  readonly denyTcpWithIcmp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#detect_unknown_esp SystemSettings#detect_unknown_esp}
  */
  readonly detectUnknownEsp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#device SystemSettings#device}
  */
  readonly device?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#device_name SystemSettings#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#device_vdom SystemSettings#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#dhcp6_server_ip SystemSettings#dhcp6_server_ip}
  */
  readonly dhcp6ServerIp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#dhcp_proxy SystemSettings#dhcp_proxy}
  */
  readonly dhcpProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#dhcp_proxy_interface SystemSettings#dhcp_proxy_interface}
  */
  readonly dhcpProxyInterface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#dhcp_proxy_interface_select_method SystemSettings#dhcp_proxy_interface_select_method}
  */
  readonly dhcpProxyInterfaceSelectMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#dhcp_proxy_vrf_select SystemSettings#dhcp_proxy_vrf_select}
  */
  readonly dhcpProxyVrfSelect?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#dhcp_server_ip SystemSettings#dhcp_server_ip}
  */
  readonly dhcpServerIp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#discovered_device_timeout SystemSettings#discovered_device_timeout}
  */
  readonly discoveredDeviceTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#dp_load_distribution_group SystemSettings#dp_load_distribution_group}
  */
  readonly dpLoadDistributionGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#dp_load_distribution_method SystemSettings#dp_load_distribution_method}
  */
  readonly dpLoadDistributionMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#dyn_addr_session_check SystemSettings#dyn_addr_session_check}
  */
  readonly dynAddrSessionCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#ecmp_max_paths SystemSettings#ecmp_max_paths}
  */
  readonly ecmpMaxPaths?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#email_portal_check_dns SystemSettings#email_portal_check_dns}
  */
  readonly emailPortalCheckDns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#ext_resource_session_check SystemSettings#ext_resource_session_check}
  */
  readonly extResourceSessionCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#firewall_session_dirty SystemSettings#firewall_session_dirty}
  */
  readonly firewallSessionDirty?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#fqdn_session_check SystemSettings#fqdn_session_check}
  */
  readonly fqdnSessionCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#fw_session_hairpin SystemSettings#fw_session_hairpin}
  */
  readonly fwSessionHairpin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gateway SystemSettings#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gateway6 SystemSettings#gateway6}
  */
  readonly gateway6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gtp_asym_fgsp SystemSettings#gtp_asym_fgsp}
  */
  readonly gtpAsymFgsp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gtp_monitor_mode SystemSettings#gtp_monitor_mode}
  */
  readonly gtpMonitorMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_advanced_policy SystemSettings#gui_advanced_policy}
  */
  readonly guiAdvancedPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_advanced_wireless_features SystemSettings#gui_advanced_wireless_features}
  */
  readonly guiAdvancedWirelessFeatures?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_allow_unnamed_policy SystemSettings#gui_allow_unnamed_policy}
  */
  readonly guiAllowUnnamedPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_antivirus SystemSettings#gui_antivirus}
  */
  readonly guiAntivirus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_ap_profile SystemSettings#gui_ap_profile}
  */
  readonly guiApProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_application_control SystemSettings#gui_application_control}
  */
  readonly guiApplicationControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_casb SystemSettings#gui_casb}
  */
  readonly guiCasb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_default_policy_columns SystemSettings#gui_default_policy_columns}
  */
  readonly guiDefaultPolicyColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_dhcp_advanced SystemSettings#gui_dhcp_advanced}
  */
  readonly guiDhcpAdvanced?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_dlp_advanced SystemSettings#gui_dlp_advanced}
  */
  readonly guiDlpAdvanced?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_dlp_profile SystemSettings#gui_dlp_profile}
  */
  readonly guiDlpProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_dns_database SystemSettings#gui_dns_database}
  */
  readonly guiDnsDatabase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_dnsfilter SystemSettings#gui_dnsfilter}
  */
  readonly guiDnsfilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_domain_ip_reputation SystemSettings#gui_domain_ip_reputation}
  */
  readonly guiDomainIpReputation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_dos_policy SystemSettings#gui_dos_policy}
  */
  readonly guiDosPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_dynamic_device_os_id SystemSettings#gui_dynamic_device_os_id}
  */
  readonly guiDynamicDeviceOsId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_dynamic_profile_display SystemSettings#gui_dynamic_profile_display}
  */
  readonly guiDynamicProfileDisplay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_dynamic_routing SystemSettings#gui_dynamic_routing}
  */
  readonly guiDynamicRouting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_email_collection SystemSettings#gui_email_collection}
  */
  readonly guiEmailCollection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_endpoint_control SystemSettings#gui_endpoint_control}
  */
  readonly guiEndpointControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_endpoint_control_advanced SystemSettings#gui_endpoint_control_advanced}
  */
  readonly guiEndpointControlAdvanced?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_enforce_change_summary SystemSettings#gui_enforce_change_summary}
  */
  readonly guiEnforceChangeSummary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_explicit_proxy SystemSettings#gui_explicit_proxy}
  */
  readonly guiExplicitProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_file_filter SystemSettings#gui_file_filter}
  */
  readonly guiFileFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_fortiap_split_tunneling SystemSettings#gui_fortiap_split_tunneling}
  */
  readonly guiFortiapSplitTunneling?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_fortiextender_controller SystemSettings#gui_fortiextender_controller}
  */
  readonly guiFortiextenderController?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_gtp SystemSettings#gui_gtp}
  */
  readonly guiGtp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_icap SystemSettings#gui_icap}
  */
  readonly guiIcap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_implicit_policy SystemSettings#gui_implicit_policy}
  */
  readonly guiImplicitPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_ips SystemSettings#gui_ips}
  */
  readonly guiIps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_load_balance SystemSettings#gui_load_balance}
  */
  readonly guiLoadBalance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_local_in_policy SystemSettings#gui_local_in_policy}
  */
  readonly guiLocalInPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_local_reports SystemSettings#gui_local_reports}
  */
  readonly guiLocalReports?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_multicast_policy SystemSettings#gui_multicast_policy}
  */
  readonly guiMulticastPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_multiple_interface_policy SystemSettings#gui_multiple_interface_policy}
  */
  readonly guiMultipleInterfacePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_multiple_utm_profiles SystemSettings#gui_multiple_utm_profiles}
  */
  readonly guiMultipleUtmProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_nat46_64 SystemSettings#gui_nat46_64}
  */
  readonly guiNat4664?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_object_colors SystemSettings#gui_object_colors}
  */
  readonly guiObjectColors?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_ot SystemSettings#gui_ot}
  */
  readonly guiOt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_per_policy_disclaimer SystemSettings#gui_per_policy_disclaimer}
  */
  readonly guiPerPolicyDisclaimer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_policy_based_ipsec SystemSettings#gui_policy_based_ipsec}
  */
  readonly guiPolicyBasedIpsec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_policy_disclaimer SystemSettings#gui_policy_disclaimer}
  */
  readonly guiPolicyDisclaimer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_proxy_inspection SystemSettings#gui_proxy_inspection}
  */
  readonly guiProxyInspection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_replacement_message_groups SystemSettings#gui_replacement_message_groups}
  */
  readonly guiReplacementMessageGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_route_tag_address_creation SystemSettings#gui_route_tag_address_creation}
  */
  readonly guiRouteTagAddressCreation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_security_profile_group SystemSettings#gui_security_profile_group}
  */
  readonly guiSecurityProfileGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_spamfilter SystemSettings#gui_spamfilter}
  */
  readonly guiSpamfilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_sslvpn SystemSettings#gui_sslvpn}
  */
  readonly guiSslvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_sslvpn_clients SystemSettings#gui_sslvpn_clients}
  */
  readonly guiSslvpnClients?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_sslvpn_personal_bookmarks SystemSettings#gui_sslvpn_personal_bookmarks}
  */
  readonly guiSslvpnPersonalBookmarks?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_sslvpn_realms SystemSettings#gui_sslvpn_realms}
  */
  readonly guiSslvpnRealms?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_switch_controller SystemSettings#gui_switch_controller}
  */
  readonly guiSwitchController?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_threat_weight SystemSettings#gui_threat_weight}
  */
  readonly guiThreatWeight?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_traffic_shaping SystemSettings#gui_traffic_shaping}
  */
  readonly guiTrafficShaping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_videofilter SystemSettings#gui_videofilter}
  */
  readonly guiVideofilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_virtual_patch_profile SystemSettings#gui_virtual_patch_profile}
  */
  readonly guiVirtualPatchProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_voip_profile SystemSettings#gui_voip_profile}
  */
  readonly guiVoipProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_vpn SystemSettings#gui_vpn}
  */
  readonly guiVpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_waf_profile SystemSettings#gui_waf_profile}
  */
  readonly guiWafProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_wan_load_balancing SystemSettings#gui_wan_load_balancing}
  */
  readonly guiWanLoadBalancing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_wanopt_cache SystemSettings#gui_wanopt_cache}
  */
  readonly guiWanoptCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_webfilter SystemSettings#gui_webfilter}
  */
  readonly guiWebfilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_webfilter_advanced SystemSettings#gui_webfilter_advanced}
  */
  readonly guiWebfilterAdvanced?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_wireless_controller SystemSettings#gui_wireless_controller}
  */
  readonly guiWirelessController?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#gui_ztna SystemSettings#gui_ztna}
  */
  readonly guiZtna?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#h323_direct_model SystemSettings#h323_direct_model}
  */
  readonly h323DirectModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#http_external_dest SystemSettings#http_external_dest}
  */
  readonly httpExternalDest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#hyperscale_default_policy_action SystemSettings#hyperscale_default_policy_action}
  */
  readonly hyperscaleDefaultPolicyAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#id SystemSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#ike_dn_format SystemSettings#ike_dn_format}
  */
  readonly ikeDnFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#ike_policy_route SystemSettings#ike_policy_route}
  */
  readonly ikePolicyRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#ike_port SystemSettings#ike_port}
  */
  readonly ikePort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#ike_quick_crash_detect SystemSettings#ike_quick_crash_detect}
  */
  readonly ikeQuickCrashDetect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#ike_session_resume SystemSettings#ike_session_resume}
  */
  readonly ikeSessionResume?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#ike_tcp_port SystemSettings#ike_tcp_port}
  */
  readonly ikeTcpPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#implicit_allow_dns SystemSettings#implicit_allow_dns}
  */
  readonly implicitAllowDns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#internet_service_app_ctrl_size SystemSettings#internet_service_app_ctrl_size}
  */
  readonly internetServiceAppCtrlSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#internet_service_database_cache SystemSettings#internet_service_database_cache}
  */
  readonly internetServiceDatabaseCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#intree_ses_best_route SystemSettings#intree_ses_best_route}
  */
  readonly intreeSesBestRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#ip SystemSettings#ip}
  */
  readonly ip?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#ip6 SystemSettings#ip6}
  */
  readonly ip6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#lan_extension_controller_addr SystemSettings#lan_extension_controller_addr}
  */
  readonly lanExtensionControllerAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#link_down_access SystemSettings#link_down_access}
  */
  readonly linkDownAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#lldp_reception SystemSettings#lldp_reception}
  */
  readonly lldpReception?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#lldp_transmission SystemSettings#lldp_transmission}
  */
  readonly lldpTransmission?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#location_id SystemSettings#location_id}
  */
  readonly locationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#mac_ttl SystemSettings#mac_ttl}
  */
  readonly macTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#manageip SystemSettings#manageip}
  */
  readonly manageip?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#manageip6 SystemSettings#manageip6}
  */
  readonly manageip6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#motherboard_traffic_forwarding SystemSettings#motherboard_traffic_forwarding}
  */
  readonly motherboardTrafficForwarding?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#multicast_forward SystemSettings#multicast_forward}
  */
  readonly multicastForward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#multicast_skip_policy SystemSettings#multicast_skip_policy}
  */
  readonly multicastSkipPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#multicast_ttl_notchange SystemSettings#multicast_ttl_notchange}
  */
  readonly multicastTtlNotchange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#nat46_force_ipv4_packet_forwarding SystemSettings#nat46_force_ipv4_packet_forwarding}
  */
  readonly nat46ForceIpv4PacketForwarding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#nat46_generate_ipv6_fragment_header SystemSettings#nat46_generate_ipv6_fragment_header}
  */
  readonly nat46GenerateIpv6FragmentHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#nat64_force_ipv6_packet_forwarding SystemSettings#nat64_force_ipv6_packet_forwarding}
  */
  readonly nat64ForceIpv6PacketForwarding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#ngfw_mode SystemSettings#ngfw_mode}
  */
  readonly ngfwMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#nonat_eif_key_sel SystemSettings#nonat_eif_key_sel}
  */
  readonly nonatEifKeySel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#npu_group_id SystemSettings#npu_group_id}
  */
  readonly npuGroupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#opmode SystemSettings#opmode}
  */
  readonly opmode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#pfcp_monitor_mode SystemSettings#pfcp_monitor_mode}
  */
  readonly pfcpMonitorMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#policy_offload_level SystemSettings#policy_offload_level}
  */
  readonly policyOffloadLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#prp_trailer_action SystemSettings#prp_trailer_action}
  */
  readonly prpTrailerAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#sccp_port SystemSettings#sccp_port}
  */
  readonly sccpPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#sctp_session_without_init SystemSettings#sctp_session_without_init}
  */
  readonly sctpSessionWithoutInit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#ses_denied_multicast_traffic SystemSettings#ses_denied_multicast_traffic}
  */
  readonly sesDeniedMulticastTraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#ses_denied_traffic SystemSettings#ses_denied_traffic}
  */
  readonly sesDeniedTraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#session_insert_trial SystemSettings#session_insert_trial}
  */
  readonly sessionInsertTrial?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#sip_expectation SystemSettings#sip_expectation}
  */
  readonly sipExpectation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#sip_nat_trace SystemSettings#sip_nat_trace}
  */
  readonly sipNatTrace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#sip_ssl_port SystemSettings#sip_ssl_port}
  */
  readonly sipSslPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#sip_tcp_port SystemSettings#sip_tcp_port}
  */
  readonly sipTcpPort?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#sip_udp_port SystemSettings#sip_udp_port}
  */
  readonly sipUdpPort?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#snat_hairpin_traffic SystemSettings#snat_hairpin_traffic}
  */
  readonly snatHairpinTraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#status SystemSettings#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#strict_src_check SystemSettings#strict_src_check}
  */
  readonly strictSrcCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#tcp_session_without_syn SystemSettings#tcp_session_without_syn}
  */
  readonly tcpSessionWithoutSyn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#trap_local_session SystemSettings#trap_local_session}
  */
  readonly trapLocalSession?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#trap_session_flag SystemSettings#trap_session_flag}
  */
  readonly trapSessionFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#utf8_spam_tagging SystemSettings#utf8_spam_tagging}
  */
  readonly utf8SpamTagging?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#v4_ecmp_mode SystemSettings#v4_ecmp_mode}
  */
  readonly v4EcmpMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#vdom_type SystemSettings#vdom_type}
  */
  readonly vdomType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#vpn_stats_log SystemSettings#vpn_stats_log}
  */
  readonly vpnStatsLog?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#vpn_stats_period SystemSettings#vpn_stats_period}
  */
  readonly vpnStatsPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#wccp_cache_engine SystemSettings#wccp_cache_engine}
  */
  readonly wccpCacheEngine?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings fmgdevice_system_settings}
*/
export class SystemSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemSettings to import
  * @param importFromId The id of the existing SystemSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_settings fmgdevice_system_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_settings',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowLinkdownPath = config.allowLinkdownPath;
    this._allowSubnetOverlap = config.allowSubnetOverlap;
    this._applicationBandwidthTracking = config.applicationBandwidthTracking;
    this._asymroute = config.asymroute;
    this._asymroute6 = config.asymroute6;
    this._asymroute6Icmp = config.asymroute6Icmp;
    this._asymrouteIcmp = config.asymrouteIcmp;
    this._auxiliarySession = config.auxiliarySession;
    this._bfd = config.bfd;
    this._bfdDesiredMinTx = config.bfdDesiredMinTx;
    this._bfdDetectMult = config.bfdDetectMult;
    this._bfdDontEnforceSrcPort = config.bfdDontEnforceSrcPort;
    this._bfdRequiredMinRx = config.bfdRequiredMinRx;
    this._blockLandAttack = config.blockLandAttack;
    this._centralNat = config.centralNat;
    this._comments = config.comments;
    this._consolidatedFirewallMode = config.consolidatedFirewallMode;
    this._defaultAppPortAsService = config.defaultAppPortAsService;
    this._defaultPolicyExpiryDays = config.defaultPolicyExpiryDays;
    this._defaultVoipAlgMode = config.defaultVoipAlgMode;
    this._denyTcpWithIcmp = config.denyTcpWithIcmp;
    this._detectUnknownEsp = config.detectUnknownEsp;
    this._device = config.device;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._dhcp6ServerIp = config.dhcp6ServerIp;
    this._dhcpProxy = config.dhcpProxy;
    this._dhcpProxyInterface = config.dhcpProxyInterface;
    this._dhcpProxyInterfaceSelectMethod = config.dhcpProxyInterfaceSelectMethod;
    this._dhcpProxyVrfSelect = config.dhcpProxyVrfSelect;
    this._dhcpServerIp = config.dhcpServerIp;
    this._discoveredDeviceTimeout = config.discoveredDeviceTimeout;
    this._dpLoadDistributionGroup = config.dpLoadDistributionGroup;
    this._dpLoadDistributionMethod = config.dpLoadDistributionMethod;
    this._dynAddrSessionCheck = config.dynAddrSessionCheck;
    this._ecmpMaxPaths = config.ecmpMaxPaths;
    this._emailPortalCheckDns = config.emailPortalCheckDns;
    this._extResourceSessionCheck = config.extResourceSessionCheck;
    this._firewallSessionDirty = config.firewallSessionDirty;
    this._fqdnSessionCheck = config.fqdnSessionCheck;
    this._fwSessionHairpin = config.fwSessionHairpin;
    this._gateway = config.gateway;
    this._gateway6 = config.gateway6;
    this._gtpAsymFgsp = config.gtpAsymFgsp;
    this._gtpMonitorMode = config.gtpMonitorMode;
    this._guiAdvancedPolicy = config.guiAdvancedPolicy;
    this._guiAdvancedWirelessFeatures = config.guiAdvancedWirelessFeatures;
    this._guiAllowUnnamedPolicy = config.guiAllowUnnamedPolicy;
    this._guiAntivirus = config.guiAntivirus;
    this._guiApProfile = config.guiApProfile;
    this._guiApplicationControl = config.guiApplicationControl;
    this._guiCasb = config.guiCasb;
    this._guiDefaultPolicyColumns = config.guiDefaultPolicyColumns;
    this._guiDhcpAdvanced = config.guiDhcpAdvanced;
    this._guiDlpAdvanced = config.guiDlpAdvanced;
    this._guiDlpProfile = config.guiDlpProfile;
    this._guiDnsDatabase = config.guiDnsDatabase;
    this._guiDnsfilter = config.guiDnsfilter;
    this._guiDomainIpReputation = config.guiDomainIpReputation;
    this._guiDosPolicy = config.guiDosPolicy;
    this._guiDynamicDeviceOsId = config.guiDynamicDeviceOsId;
    this._guiDynamicProfileDisplay = config.guiDynamicProfileDisplay;
    this._guiDynamicRouting = config.guiDynamicRouting;
    this._guiEmailCollection = config.guiEmailCollection;
    this._guiEndpointControl = config.guiEndpointControl;
    this._guiEndpointControlAdvanced = config.guiEndpointControlAdvanced;
    this._guiEnforceChangeSummary = config.guiEnforceChangeSummary;
    this._guiExplicitProxy = config.guiExplicitProxy;
    this._guiFileFilter = config.guiFileFilter;
    this._guiFortiapSplitTunneling = config.guiFortiapSplitTunneling;
    this._guiFortiextenderController = config.guiFortiextenderController;
    this._guiGtp = config.guiGtp;
    this._guiIcap = config.guiIcap;
    this._guiImplicitPolicy = config.guiImplicitPolicy;
    this._guiIps = config.guiIps;
    this._guiLoadBalance = config.guiLoadBalance;
    this._guiLocalInPolicy = config.guiLocalInPolicy;
    this._guiLocalReports = config.guiLocalReports;
    this._guiMulticastPolicy = config.guiMulticastPolicy;
    this._guiMultipleInterfacePolicy = config.guiMultipleInterfacePolicy;
    this._guiMultipleUtmProfiles = config.guiMultipleUtmProfiles;
    this._guiNat4664 = config.guiNat4664;
    this._guiObjectColors = config.guiObjectColors;
    this._guiOt = config.guiOt;
    this._guiPerPolicyDisclaimer = config.guiPerPolicyDisclaimer;
    this._guiPolicyBasedIpsec = config.guiPolicyBasedIpsec;
    this._guiPolicyDisclaimer = config.guiPolicyDisclaimer;
    this._guiProxyInspection = config.guiProxyInspection;
    this._guiReplacementMessageGroups = config.guiReplacementMessageGroups;
    this._guiRouteTagAddressCreation = config.guiRouteTagAddressCreation;
    this._guiSecurityProfileGroup = config.guiSecurityProfileGroup;
    this._guiSpamfilter = config.guiSpamfilter;
    this._guiSslvpn = config.guiSslvpn;
    this._guiSslvpnClients = config.guiSslvpnClients;
    this._guiSslvpnPersonalBookmarks = config.guiSslvpnPersonalBookmarks;
    this._guiSslvpnRealms = config.guiSslvpnRealms;
    this._guiSwitchController = config.guiSwitchController;
    this._guiThreatWeight = config.guiThreatWeight;
    this._guiTrafficShaping = config.guiTrafficShaping;
    this._guiVideofilter = config.guiVideofilter;
    this._guiVirtualPatchProfile = config.guiVirtualPatchProfile;
    this._guiVoipProfile = config.guiVoipProfile;
    this._guiVpn = config.guiVpn;
    this._guiWafProfile = config.guiWafProfile;
    this._guiWanLoadBalancing = config.guiWanLoadBalancing;
    this._guiWanoptCache = config.guiWanoptCache;
    this._guiWebfilter = config.guiWebfilter;
    this._guiWebfilterAdvanced = config.guiWebfilterAdvanced;
    this._guiWirelessController = config.guiWirelessController;
    this._guiZtna = config.guiZtna;
    this._h323DirectModel = config.h323DirectModel;
    this._httpExternalDest = config.httpExternalDest;
    this._hyperscaleDefaultPolicyAction = config.hyperscaleDefaultPolicyAction;
    this._id = config.id;
    this._ikeDnFormat = config.ikeDnFormat;
    this._ikePolicyRoute = config.ikePolicyRoute;
    this._ikePort = config.ikePort;
    this._ikeQuickCrashDetect = config.ikeQuickCrashDetect;
    this._ikeSessionResume = config.ikeSessionResume;
    this._ikeTcpPort = config.ikeTcpPort;
    this._implicitAllowDns = config.implicitAllowDns;
    this._internetServiceAppCtrlSize = config.internetServiceAppCtrlSize;
    this._internetServiceDatabaseCache = config.internetServiceDatabaseCache;
    this._intreeSesBestRoute = config.intreeSesBestRoute;
    this._ip = config.ip;
    this._ip6 = config.ip6;
    this._lanExtensionControllerAddr = config.lanExtensionControllerAddr;
    this._linkDownAccess = config.linkDownAccess;
    this._lldpReception = config.lldpReception;
    this._lldpTransmission = config.lldpTransmission;
    this._locationId = config.locationId;
    this._macTtl = config.macTtl;
    this._manageip = config.manageip;
    this._manageip6 = config.manageip6;
    this._motherboardTrafficForwarding = config.motherboardTrafficForwarding;
    this._multicastForward = config.multicastForward;
    this._multicastSkipPolicy = config.multicastSkipPolicy;
    this._multicastTtlNotchange = config.multicastTtlNotchange;
    this._nat46ForceIpv4PacketForwarding = config.nat46ForceIpv4PacketForwarding;
    this._nat46GenerateIpv6FragmentHeader = config.nat46GenerateIpv6FragmentHeader;
    this._nat64ForceIpv6PacketForwarding = config.nat64ForceIpv6PacketForwarding;
    this._ngfwMode = config.ngfwMode;
    this._nonatEifKeySel = config.nonatEifKeySel;
    this._npuGroupId = config.npuGroupId;
    this._opmode = config.opmode;
    this._pfcpMonitorMode = config.pfcpMonitorMode;
    this._policyOffloadLevel = config.policyOffloadLevel;
    this._prpTrailerAction = config.prpTrailerAction;
    this._sccpPort = config.sccpPort;
    this._sctpSessionWithoutInit = config.sctpSessionWithoutInit;
    this._sesDeniedMulticastTraffic = config.sesDeniedMulticastTraffic;
    this._sesDeniedTraffic = config.sesDeniedTraffic;
    this._sessionInsertTrial = config.sessionInsertTrial;
    this._sipExpectation = config.sipExpectation;
    this._sipNatTrace = config.sipNatTrace;
    this._sipSslPort = config.sipSslPort;
    this._sipTcpPort = config.sipTcpPort;
    this._sipUdpPort = config.sipUdpPort;
    this._snatHairpinTraffic = config.snatHairpinTraffic;
    this._status = config.status;
    this._strictSrcCheck = config.strictSrcCheck;
    this._tcpSessionWithoutSyn = config.tcpSessionWithoutSyn;
    this._trapLocalSession = config.trapLocalSession;
    this._trapSessionFlag = config.trapSessionFlag;
    this._utf8SpamTagging = config.utf8SpamTagging;
    this._v4EcmpMode = config.v4EcmpMode;
    this._vdomType = config.vdomType;
    this._vpnStatsLog = config.vpnStatsLog;
    this._vpnStatsPeriod = config.vpnStatsPeriod;
    this._wccpCacheEngine = config.wccpCacheEngine;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_linkdown_path - computed: true, optional: true, required: false
  private _allowLinkdownPath?: string; 
  public get allowLinkdownPath() {
    return this.getStringAttribute('allow_linkdown_path');
  }
  public set allowLinkdownPath(value: string) {
    this._allowLinkdownPath = value;
  }
  public resetAllowLinkdownPath() {
    this._allowLinkdownPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowLinkdownPathInput() {
    return this._allowLinkdownPath;
  }

  // allow_subnet_overlap - computed: true, optional: true, required: false
  private _allowSubnetOverlap?: string; 
  public get allowSubnetOverlap() {
    return this.getStringAttribute('allow_subnet_overlap');
  }
  public set allowSubnetOverlap(value: string) {
    this._allowSubnetOverlap = value;
  }
  public resetAllowSubnetOverlap() {
    this._allowSubnetOverlap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSubnetOverlapInput() {
    return this._allowSubnetOverlap;
  }

  // application_bandwidth_tracking - computed: true, optional: true, required: false
  private _applicationBandwidthTracking?: string; 
  public get applicationBandwidthTracking() {
    return this.getStringAttribute('application_bandwidth_tracking');
  }
  public set applicationBandwidthTracking(value: string) {
    this._applicationBandwidthTracking = value;
  }
  public resetApplicationBandwidthTracking() {
    this._applicationBandwidthTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationBandwidthTrackingInput() {
    return this._applicationBandwidthTracking;
  }

  // asymroute - computed: true, optional: true, required: false
  private _asymroute?: string; 
  public get asymroute() {
    return this.getStringAttribute('asymroute');
  }
  public set asymroute(value: string) {
    this._asymroute = value;
  }
  public resetAsymroute() {
    this._asymroute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asymrouteInput() {
    return this._asymroute;
  }

  // asymroute6 - computed: true, optional: true, required: false
  private _asymroute6?: string; 
  public get asymroute6() {
    return this.getStringAttribute('asymroute6');
  }
  public set asymroute6(value: string) {
    this._asymroute6 = value;
  }
  public resetAsymroute6() {
    this._asymroute6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asymroute6Input() {
    return this._asymroute6;
  }

  // asymroute6_icmp - computed: true, optional: true, required: false
  private _asymroute6Icmp?: string; 
  public get asymroute6Icmp() {
    return this.getStringAttribute('asymroute6_icmp');
  }
  public set asymroute6Icmp(value: string) {
    this._asymroute6Icmp = value;
  }
  public resetAsymroute6Icmp() {
    this._asymroute6Icmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asymroute6IcmpInput() {
    return this._asymroute6Icmp;
  }

  // asymroute_icmp - computed: true, optional: true, required: false
  private _asymrouteIcmp?: string; 
  public get asymrouteIcmp() {
    return this.getStringAttribute('asymroute_icmp');
  }
  public set asymrouteIcmp(value: string) {
    this._asymrouteIcmp = value;
  }
  public resetAsymrouteIcmp() {
    this._asymrouteIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asymrouteIcmpInput() {
    return this._asymrouteIcmp;
  }

  // auxiliary_session - computed: true, optional: true, required: false
  private _auxiliarySession?: string; 
  public get auxiliarySession() {
    return this.getStringAttribute('auxiliary_session');
  }
  public set auxiliarySession(value: string) {
    this._auxiliarySession = value;
  }
  public resetAuxiliarySession() {
    this._auxiliarySession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auxiliarySessionInput() {
    return this._auxiliarySession;
  }

  // bfd - computed: true, optional: true, required: false
  private _bfd?: string; 
  public get bfd() {
    return this.getStringAttribute('bfd');
  }
  public set bfd(value: string) {
    this._bfd = value;
  }
  public resetBfd() {
    this._bfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd;
  }

  // bfd_desired_min_tx - computed: false, optional: true, required: false
  private _bfdDesiredMinTx?: number; 
  public get bfdDesiredMinTx() {
    return this.getNumberAttribute('bfd_desired_min_tx');
  }
  public set bfdDesiredMinTx(value: number) {
    this._bfdDesiredMinTx = value;
  }
  public resetBfdDesiredMinTx() {
    this._bfdDesiredMinTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdDesiredMinTxInput() {
    return this._bfdDesiredMinTx;
  }

  // bfd_detect_mult - computed: false, optional: true, required: false
  private _bfdDetectMult?: number; 
  public get bfdDetectMult() {
    return this.getNumberAttribute('bfd_detect_mult');
  }
  public set bfdDetectMult(value: number) {
    this._bfdDetectMult = value;
  }
  public resetBfdDetectMult() {
    this._bfdDetectMult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdDetectMultInput() {
    return this._bfdDetectMult;
  }

  // bfd_dont_enforce_src_port - computed: false, optional: true, required: false
  private _bfdDontEnforceSrcPort?: string; 
  public get bfdDontEnforceSrcPort() {
    return this.getStringAttribute('bfd_dont_enforce_src_port');
  }
  public set bfdDontEnforceSrcPort(value: string) {
    this._bfdDontEnforceSrcPort = value;
  }
  public resetBfdDontEnforceSrcPort() {
    this._bfdDontEnforceSrcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdDontEnforceSrcPortInput() {
    return this._bfdDontEnforceSrcPort;
  }

  // bfd_required_min_rx - computed: false, optional: true, required: false
  private _bfdRequiredMinRx?: number; 
  public get bfdRequiredMinRx() {
    return this.getNumberAttribute('bfd_required_min_rx');
  }
  public set bfdRequiredMinRx(value: number) {
    this._bfdRequiredMinRx = value;
  }
  public resetBfdRequiredMinRx() {
    this._bfdRequiredMinRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdRequiredMinRxInput() {
    return this._bfdRequiredMinRx;
  }

  // block_land_attack - computed: true, optional: true, required: false
  private _blockLandAttack?: string; 
  public get blockLandAttack() {
    return this.getStringAttribute('block_land_attack');
  }
  public set blockLandAttack(value: string) {
    this._blockLandAttack = value;
  }
  public resetBlockLandAttack() {
    this._blockLandAttack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockLandAttackInput() {
    return this._blockLandAttack;
  }

  // central_nat - computed: true, optional: true, required: false
  private _centralNat?: string; 
  public get centralNat() {
    return this.getStringAttribute('central_nat');
  }
  public set centralNat(value: string) {
    this._centralNat = value;
  }
  public resetCentralNat() {
    this._centralNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get centralNatInput() {
    return this._centralNat;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // consolidated_firewall_mode - computed: false, optional: true, required: false
  private _consolidatedFirewallMode?: string; 
  public get consolidatedFirewallMode() {
    return this.getStringAttribute('consolidated_firewall_mode');
  }
  public set consolidatedFirewallMode(value: string) {
    this._consolidatedFirewallMode = value;
  }
  public resetConsolidatedFirewallMode() {
    this._consolidatedFirewallMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consolidatedFirewallModeInput() {
    return this._consolidatedFirewallMode;
  }

  // default_app_port_as_service - computed: true, optional: true, required: false
  private _defaultAppPortAsService?: string; 
  public get defaultAppPortAsService() {
    return this.getStringAttribute('default_app_port_as_service');
  }
  public set defaultAppPortAsService(value: string) {
    this._defaultAppPortAsService = value;
  }
  public resetDefaultAppPortAsService() {
    this._defaultAppPortAsService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAppPortAsServiceInput() {
    return this._defaultAppPortAsService;
  }

  // default_policy_expiry_days - computed: true, optional: true, required: false
  private _defaultPolicyExpiryDays?: number; 
  public get defaultPolicyExpiryDays() {
    return this.getNumberAttribute('default_policy_expiry_days');
  }
  public set defaultPolicyExpiryDays(value: number) {
    this._defaultPolicyExpiryDays = value;
  }
  public resetDefaultPolicyExpiryDays() {
    this._defaultPolicyExpiryDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPolicyExpiryDaysInput() {
    return this._defaultPolicyExpiryDays;
  }

  // default_voip_alg_mode - computed: true, optional: true, required: false
  private _defaultVoipAlgMode?: string; 
  public get defaultVoipAlgMode() {
    return this.getStringAttribute('default_voip_alg_mode');
  }
  public set defaultVoipAlgMode(value: string) {
    this._defaultVoipAlgMode = value;
  }
  public resetDefaultVoipAlgMode() {
    this._defaultVoipAlgMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVoipAlgModeInput() {
    return this._defaultVoipAlgMode;
  }

  // deny_tcp_with_icmp - computed: true, optional: true, required: false
  private _denyTcpWithIcmp?: string; 
  public get denyTcpWithIcmp() {
    return this.getStringAttribute('deny_tcp_with_icmp');
  }
  public set denyTcpWithIcmp(value: string) {
    this._denyTcpWithIcmp = value;
  }
  public resetDenyTcpWithIcmp() {
    this._denyTcpWithIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyTcpWithIcmpInput() {
    return this._denyTcpWithIcmp;
  }

  // detect_unknown_esp - computed: true, optional: true, required: false
  private _detectUnknownEsp?: string; 
  public get detectUnknownEsp() {
    return this.getStringAttribute('detect_unknown_esp');
  }
  public set detectUnknownEsp(value: string) {
    this._detectUnknownEsp = value;
  }
  public resetDetectUnknownEsp() {
    this._detectUnknownEsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectUnknownEspInput() {
    return this._detectUnknownEsp;
  }

  // device - computed: true, optional: true, required: false
  private _device?: string[]; 
  public get device() {
    return cdktf.Fn.tolist(this.getListAttribute('device'));
  }
  public set device(value: string[]) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // dhcp6_server_ip - computed: true, optional: true, required: false
  private _dhcp6ServerIp?: string[]; 
  public get dhcp6ServerIp() {
    return cdktf.Fn.tolist(this.getListAttribute('dhcp6_server_ip'));
  }
  public set dhcp6ServerIp(value: string[]) {
    this._dhcp6ServerIp = value;
  }
  public resetDhcp6ServerIp() {
    this._dhcp6ServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6ServerIpInput() {
    return this._dhcp6ServerIp;
  }

  // dhcp_proxy - computed: true, optional: true, required: false
  private _dhcpProxy?: string; 
  public get dhcpProxy() {
    return this.getStringAttribute('dhcp_proxy');
  }
  public set dhcpProxy(value: string) {
    this._dhcpProxy = value;
  }
  public resetDhcpProxy() {
    this._dhcpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpProxyInput() {
    return this._dhcpProxy;
  }

  // dhcp_proxy_interface - computed: true, optional: true, required: false
  private _dhcpProxyInterface?: string[]; 
  public get dhcpProxyInterface() {
    return cdktf.Fn.tolist(this.getListAttribute('dhcp_proxy_interface'));
  }
  public set dhcpProxyInterface(value: string[]) {
    this._dhcpProxyInterface = value;
  }
  public resetDhcpProxyInterface() {
    this._dhcpProxyInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpProxyInterfaceInput() {
    return this._dhcpProxyInterface;
  }

  // dhcp_proxy_interface_select_method - computed: true, optional: true, required: false
  private _dhcpProxyInterfaceSelectMethod?: string; 
  public get dhcpProxyInterfaceSelectMethod() {
    return this.getStringAttribute('dhcp_proxy_interface_select_method');
  }
  public set dhcpProxyInterfaceSelectMethod(value: string) {
    this._dhcpProxyInterfaceSelectMethod = value;
  }
  public resetDhcpProxyInterfaceSelectMethod() {
    this._dhcpProxyInterfaceSelectMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpProxyInterfaceSelectMethodInput() {
    return this._dhcpProxyInterfaceSelectMethod;
  }

  // dhcp_proxy_vrf_select - computed: false, optional: true, required: false
  private _dhcpProxyVrfSelect?: number; 
  public get dhcpProxyVrfSelect() {
    return this.getNumberAttribute('dhcp_proxy_vrf_select');
  }
  public set dhcpProxyVrfSelect(value: number) {
    this._dhcpProxyVrfSelect = value;
  }
  public resetDhcpProxyVrfSelect() {
    this._dhcpProxyVrfSelect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpProxyVrfSelectInput() {
    return this._dhcpProxyVrfSelect;
  }

  // dhcp_server_ip - computed: true, optional: true, required: false
  private _dhcpServerIp?: string[]; 
  public get dhcpServerIp() {
    return cdktf.Fn.tolist(this.getListAttribute('dhcp_server_ip'));
  }
  public set dhcpServerIp(value: string[]) {
    this._dhcpServerIp = value;
  }
  public resetDhcpServerIp() {
    this._dhcpServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServerIpInput() {
    return this._dhcpServerIp;
  }

  // discovered_device_timeout - computed: true, optional: true, required: false
  private _discoveredDeviceTimeout?: number; 
  public get discoveredDeviceTimeout() {
    return this.getNumberAttribute('discovered_device_timeout');
  }
  public set discoveredDeviceTimeout(value: number) {
    this._discoveredDeviceTimeout = value;
  }
  public resetDiscoveredDeviceTimeout() {
    this._discoveredDeviceTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveredDeviceTimeoutInput() {
    return this._discoveredDeviceTimeout;
  }

  // dp_load_distribution_group - computed: true, optional: true, required: false
  private _dpLoadDistributionGroup?: string[]; 
  public get dpLoadDistributionGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('dp_load_distribution_group'));
  }
  public set dpLoadDistributionGroup(value: string[]) {
    this._dpLoadDistributionGroup = value;
  }
  public resetDpLoadDistributionGroup() {
    this._dpLoadDistributionGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpLoadDistributionGroupInput() {
    return this._dpLoadDistributionGroup;
  }

  // dp_load_distribution_method - computed: false, optional: true, required: false
  private _dpLoadDistributionMethod?: string; 
  public get dpLoadDistributionMethod() {
    return this.getStringAttribute('dp_load_distribution_method');
  }
  public set dpLoadDistributionMethod(value: string) {
    this._dpLoadDistributionMethod = value;
  }
  public resetDpLoadDistributionMethod() {
    this._dpLoadDistributionMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpLoadDistributionMethodInput() {
    return this._dpLoadDistributionMethod;
  }

  // dyn_addr_session_check - computed: true, optional: true, required: false
  private _dynAddrSessionCheck?: string; 
  public get dynAddrSessionCheck() {
    return this.getStringAttribute('dyn_addr_session_check');
  }
  public set dynAddrSessionCheck(value: string) {
    this._dynAddrSessionCheck = value;
  }
  public resetDynAddrSessionCheck() {
    this._dynAddrSessionCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynAddrSessionCheckInput() {
    return this._dynAddrSessionCheck;
  }

  // ecmp_max_paths - computed: true, optional: true, required: false
  private _ecmpMaxPaths?: number; 
  public get ecmpMaxPaths() {
    return this.getNumberAttribute('ecmp_max_paths');
  }
  public set ecmpMaxPaths(value: number) {
    this._ecmpMaxPaths = value;
  }
  public resetEcmpMaxPaths() {
    this._ecmpMaxPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecmpMaxPathsInput() {
    return this._ecmpMaxPaths;
  }

  // email_portal_check_dns - computed: true, optional: true, required: false
  private _emailPortalCheckDns?: string; 
  public get emailPortalCheckDns() {
    return this.getStringAttribute('email_portal_check_dns');
  }
  public set emailPortalCheckDns(value: string) {
    this._emailPortalCheckDns = value;
  }
  public resetEmailPortalCheckDns() {
    this._emailPortalCheckDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailPortalCheckDnsInput() {
    return this._emailPortalCheckDns;
  }

  // ext_resource_session_check - computed: true, optional: true, required: false
  private _extResourceSessionCheck?: string; 
  public get extResourceSessionCheck() {
    return this.getStringAttribute('ext_resource_session_check');
  }
  public set extResourceSessionCheck(value: string) {
    this._extResourceSessionCheck = value;
  }
  public resetExtResourceSessionCheck() {
    this._extResourceSessionCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extResourceSessionCheckInput() {
    return this._extResourceSessionCheck;
  }

  // firewall_session_dirty - computed: true, optional: true, required: false
  private _firewallSessionDirty?: string; 
  public get firewallSessionDirty() {
    return this.getStringAttribute('firewall_session_dirty');
  }
  public set firewallSessionDirty(value: string) {
    this._firewallSessionDirty = value;
  }
  public resetFirewallSessionDirty() {
    this._firewallSessionDirty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallSessionDirtyInput() {
    return this._firewallSessionDirty;
  }

  // fqdn_session_check - computed: true, optional: true, required: false
  private _fqdnSessionCheck?: string; 
  public get fqdnSessionCheck() {
    return this.getStringAttribute('fqdn_session_check');
  }
  public set fqdnSessionCheck(value: string) {
    this._fqdnSessionCheck = value;
  }
  public resetFqdnSessionCheck() {
    this._fqdnSessionCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnSessionCheckInput() {
    return this._fqdnSessionCheck;
  }

  // fw_session_hairpin - computed: true, optional: true, required: false
  private _fwSessionHairpin?: string; 
  public get fwSessionHairpin() {
    return this.getStringAttribute('fw_session_hairpin');
  }
  public set fwSessionHairpin(value: string) {
    this._fwSessionHairpin = value;
  }
  public resetFwSessionHairpin() {
    this._fwSessionHairpin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwSessionHairpinInput() {
    return this._fwSessionHairpin;
  }

  // gateway - computed: true, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // gateway6 - computed: true, optional: true, required: false
  private _gateway6?: string; 
  public get gateway6() {
    return this.getStringAttribute('gateway6');
  }
  public set gateway6(value: string) {
    this._gateway6 = value;
  }
  public resetGateway6() {
    this._gateway6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gateway6Input() {
    return this._gateway6;
  }

  // gtp_asym_fgsp - computed: false, optional: true, required: false
  private _gtpAsymFgsp?: string; 
  public get gtpAsymFgsp() {
    return this.getStringAttribute('gtp_asym_fgsp');
  }
  public set gtpAsymFgsp(value: string) {
    this._gtpAsymFgsp = value;
  }
  public resetGtpAsymFgsp() {
    this._gtpAsymFgsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpAsymFgspInput() {
    return this._gtpAsymFgsp;
  }

  // gtp_monitor_mode - computed: false, optional: true, required: false
  private _gtpMonitorMode?: string; 
  public get gtpMonitorMode() {
    return this.getStringAttribute('gtp_monitor_mode');
  }
  public set gtpMonitorMode(value: string) {
    this._gtpMonitorMode = value;
  }
  public resetGtpMonitorMode() {
    this._gtpMonitorMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpMonitorModeInput() {
    return this._gtpMonitorMode;
  }

  // gui_advanced_policy - computed: true, optional: true, required: false
  private _guiAdvancedPolicy?: string; 
  public get guiAdvancedPolicy() {
    return this.getStringAttribute('gui_advanced_policy');
  }
  public set guiAdvancedPolicy(value: string) {
    this._guiAdvancedPolicy = value;
  }
  public resetGuiAdvancedPolicy() {
    this._guiAdvancedPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiAdvancedPolicyInput() {
    return this._guiAdvancedPolicy;
  }

  // gui_advanced_wireless_features - computed: true, optional: true, required: false
  private _guiAdvancedWirelessFeatures?: string; 
  public get guiAdvancedWirelessFeatures() {
    return this.getStringAttribute('gui_advanced_wireless_features');
  }
  public set guiAdvancedWirelessFeatures(value: string) {
    this._guiAdvancedWirelessFeatures = value;
  }
  public resetGuiAdvancedWirelessFeatures() {
    this._guiAdvancedWirelessFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiAdvancedWirelessFeaturesInput() {
    return this._guiAdvancedWirelessFeatures;
  }

  // gui_allow_unnamed_policy - computed: true, optional: true, required: false
  private _guiAllowUnnamedPolicy?: string; 
  public get guiAllowUnnamedPolicy() {
    return this.getStringAttribute('gui_allow_unnamed_policy');
  }
  public set guiAllowUnnamedPolicy(value: string) {
    this._guiAllowUnnamedPolicy = value;
  }
  public resetGuiAllowUnnamedPolicy() {
    this._guiAllowUnnamedPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiAllowUnnamedPolicyInput() {
    return this._guiAllowUnnamedPolicy;
  }

  // gui_antivirus - computed: true, optional: true, required: false
  private _guiAntivirus?: string; 
  public get guiAntivirus() {
    return this.getStringAttribute('gui_antivirus');
  }
  public set guiAntivirus(value: string) {
    this._guiAntivirus = value;
  }
  public resetGuiAntivirus() {
    this._guiAntivirus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiAntivirusInput() {
    return this._guiAntivirus;
  }

  // gui_ap_profile - computed: true, optional: true, required: false
  private _guiApProfile?: string; 
  public get guiApProfile() {
    return this.getStringAttribute('gui_ap_profile');
  }
  public set guiApProfile(value: string) {
    this._guiApProfile = value;
  }
  public resetGuiApProfile() {
    this._guiApProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiApProfileInput() {
    return this._guiApProfile;
  }

  // gui_application_control - computed: true, optional: true, required: false
  private _guiApplicationControl?: string; 
  public get guiApplicationControl() {
    return this.getStringAttribute('gui_application_control');
  }
  public set guiApplicationControl(value: string) {
    this._guiApplicationControl = value;
  }
  public resetGuiApplicationControl() {
    this._guiApplicationControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiApplicationControlInput() {
    return this._guiApplicationControl;
  }

  // gui_casb - computed: true, optional: true, required: false
  private _guiCasb?: string; 
  public get guiCasb() {
    return this.getStringAttribute('gui_casb');
  }
  public set guiCasb(value: string) {
    this._guiCasb = value;
  }
  public resetGuiCasb() {
    this._guiCasb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiCasbInput() {
    return this._guiCasb;
  }

  // gui_default_policy_columns - computed: true, optional: true, required: false
  private _guiDefaultPolicyColumns?: string[]; 
  public get guiDefaultPolicyColumns() {
    return cdktf.Fn.tolist(this.getListAttribute('gui_default_policy_columns'));
  }
  public set guiDefaultPolicyColumns(value: string[]) {
    this._guiDefaultPolicyColumns = value;
  }
  public resetGuiDefaultPolicyColumns() {
    this._guiDefaultPolicyColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiDefaultPolicyColumnsInput() {
    return this._guiDefaultPolicyColumns;
  }

  // gui_dhcp_advanced - computed: true, optional: true, required: false
  private _guiDhcpAdvanced?: string; 
  public get guiDhcpAdvanced() {
    return this.getStringAttribute('gui_dhcp_advanced');
  }
  public set guiDhcpAdvanced(value: string) {
    this._guiDhcpAdvanced = value;
  }
  public resetGuiDhcpAdvanced() {
    this._guiDhcpAdvanced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiDhcpAdvancedInput() {
    return this._guiDhcpAdvanced;
  }

  // gui_dlp_advanced - computed: true, optional: true, required: false
  private _guiDlpAdvanced?: string; 
  public get guiDlpAdvanced() {
    return this.getStringAttribute('gui_dlp_advanced');
  }
  public set guiDlpAdvanced(value: string) {
    this._guiDlpAdvanced = value;
  }
  public resetGuiDlpAdvanced() {
    this._guiDlpAdvanced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiDlpAdvancedInput() {
    return this._guiDlpAdvanced;
  }

  // gui_dlp_profile - computed: true, optional: true, required: false
  private _guiDlpProfile?: string; 
  public get guiDlpProfile() {
    return this.getStringAttribute('gui_dlp_profile');
  }
  public set guiDlpProfile(value: string) {
    this._guiDlpProfile = value;
  }
  public resetGuiDlpProfile() {
    this._guiDlpProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiDlpProfileInput() {
    return this._guiDlpProfile;
  }

  // gui_dns_database - computed: true, optional: true, required: false
  private _guiDnsDatabase?: string; 
  public get guiDnsDatabase() {
    return this.getStringAttribute('gui_dns_database');
  }
  public set guiDnsDatabase(value: string) {
    this._guiDnsDatabase = value;
  }
  public resetGuiDnsDatabase() {
    this._guiDnsDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiDnsDatabaseInput() {
    return this._guiDnsDatabase;
  }

  // gui_dnsfilter - computed: true, optional: true, required: false
  private _guiDnsfilter?: string; 
  public get guiDnsfilter() {
    return this.getStringAttribute('gui_dnsfilter');
  }
  public set guiDnsfilter(value: string) {
    this._guiDnsfilter = value;
  }
  public resetGuiDnsfilter() {
    this._guiDnsfilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiDnsfilterInput() {
    return this._guiDnsfilter;
  }

  // gui_domain_ip_reputation - computed: false, optional: true, required: false
  private _guiDomainIpReputation?: string; 
  public get guiDomainIpReputation() {
    return this.getStringAttribute('gui_domain_ip_reputation');
  }
  public set guiDomainIpReputation(value: string) {
    this._guiDomainIpReputation = value;
  }
  public resetGuiDomainIpReputation() {
    this._guiDomainIpReputation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiDomainIpReputationInput() {
    return this._guiDomainIpReputation;
  }

  // gui_dos_policy - computed: true, optional: true, required: false
  private _guiDosPolicy?: string; 
  public get guiDosPolicy() {
    return this.getStringAttribute('gui_dos_policy');
  }
  public set guiDosPolicy(value: string) {
    this._guiDosPolicy = value;
  }
  public resetGuiDosPolicy() {
    this._guiDosPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiDosPolicyInput() {
    return this._guiDosPolicy;
  }

  // gui_dynamic_device_os_id - computed: true, optional: true, required: false
  private _guiDynamicDeviceOsId?: string; 
  public get guiDynamicDeviceOsId() {
    return this.getStringAttribute('gui_dynamic_device_os_id');
  }
  public set guiDynamicDeviceOsId(value: string) {
    this._guiDynamicDeviceOsId = value;
  }
  public resetGuiDynamicDeviceOsId() {
    this._guiDynamicDeviceOsId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiDynamicDeviceOsIdInput() {
    return this._guiDynamicDeviceOsId;
  }

  // gui_dynamic_profile_display - computed: false, optional: true, required: false
  private _guiDynamicProfileDisplay?: string; 
  public get guiDynamicProfileDisplay() {
    return this.getStringAttribute('gui_dynamic_profile_display');
  }
  public set guiDynamicProfileDisplay(value: string) {
    this._guiDynamicProfileDisplay = value;
  }
  public resetGuiDynamicProfileDisplay() {
    this._guiDynamicProfileDisplay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiDynamicProfileDisplayInput() {
    return this._guiDynamicProfileDisplay;
  }

  // gui_dynamic_routing - computed: true, optional: true, required: false
  private _guiDynamicRouting?: string; 
  public get guiDynamicRouting() {
    return this.getStringAttribute('gui_dynamic_routing');
  }
  public set guiDynamicRouting(value: string) {
    this._guiDynamicRouting = value;
  }
  public resetGuiDynamicRouting() {
    this._guiDynamicRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiDynamicRoutingInput() {
    return this._guiDynamicRouting;
  }

  // gui_email_collection - computed: true, optional: true, required: false
  private _guiEmailCollection?: string; 
  public get guiEmailCollection() {
    return this.getStringAttribute('gui_email_collection');
  }
  public set guiEmailCollection(value: string) {
    this._guiEmailCollection = value;
  }
  public resetGuiEmailCollection() {
    this._guiEmailCollection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiEmailCollectionInput() {
    return this._guiEmailCollection;
  }

  // gui_endpoint_control - computed: true, optional: true, required: false
  private _guiEndpointControl?: string; 
  public get guiEndpointControl() {
    return this.getStringAttribute('gui_endpoint_control');
  }
  public set guiEndpointControl(value: string) {
    this._guiEndpointControl = value;
  }
  public resetGuiEndpointControl() {
    this._guiEndpointControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiEndpointControlInput() {
    return this._guiEndpointControl;
  }

  // gui_endpoint_control_advanced - computed: true, optional: true, required: false
  private _guiEndpointControlAdvanced?: string; 
  public get guiEndpointControlAdvanced() {
    return this.getStringAttribute('gui_endpoint_control_advanced');
  }
  public set guiEndpointControlAdvanced(value: string) {
    this._guiEndpointControlAdvanced = value;
  }
  public resetGuiEndpointControlAdvanced() {
    this._guiEndpointControlAdvanced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiEndpointControlAdvancedInput() {
    return this._guiEndpointControlAdvanced;
  }

  // gui_enforce_change_summary - computed: true, optional: true, required: false
  private _guiEnforceChangeSummary?: string; 
  public get guiEnforceChangeSummary() {
    return this.getStringAttribute('gui_enforce_change_summary');
  }
  public set guiEnforceChangeSummary(value: string) {
    this._guiEnforceChangeSummary = value;
  }
  public resetGuiEnforceChangeSummary() {
    this._guiEnforceChangeSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiEnforceChangeSummaryInput() {
    return this._guiEnforceChangeSummary;
  }

  // gui_explicit_proxy - computed: true, optional: true, required: false
  private _guiExplicitProxy?: string; 
  public get guiExplicitProxy() {
    return this.getStringAttribute('gui_explicit_proxy');
  }
  public set guiExplicitProxy(value: string) {
    this._guiExplicitProxy = value;
  }
  public resetGuiExplicitProxy() {
    this._guiExplicitProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiExplicitProxyInput() {
    return this._guiExplicitProxy;
  }

  // gui_file_filter - computed: true, optional: true, required: false
  private _guiFileFilter?: string; 
  public get guiFileFilter() {
    return this.getStringAttribute('gui_file_filter');
  }
  public set guiFileFilter(value: string) {
    this._guiFileFilter = value;
  }
  public resetGuiFileFilter() {
    this._guiFileFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiFileFilterInput() {
    return this._guiFileFilter;
  }

  // gui_fortiap_split_tunneling - computed: true, optional: true, required: false
  private _guiFortiapSplitTunneling?: string; 
  public get guiFortiapSplitTunneling() {
    return this.getStringAttribute('gui_fortiap_split_tunneling');
  }
  public set guiFortiapSplitTunneling(value: string) {
    this._guiFortiapSplitTunneling = value;
  }
  public resetGuiFortiapSplitTunneling() {
    this._guiFortiapSplitTunneling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiFortiapSplitTunnelingInput() {
    return this._guiFortiapSplitTunneling;
  }

  // gui_fortiextender_controller - computed: true, optional: true, required: false
  private _guiFortiextenderController?: string; 
  public get guiFortiextenderController() {
    return this.getStringAttribute('gui_fortiextender_controller');
  }
  public set guiFortiextenderController(value: string) {
    this._guiFortiextenderController = value;
  }
  public resetGuiFortiextenderController() {
    this._guiFortiextenderController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiFortiextenderControllerInput() {
    return this._guiFortiextenderController;
  }

  // gui_gtp - computed: true, optional: true, required: false
  private _guiGtp?: string; 
  public get guiGtp() {
    return this.getStringAttribute('gui_gtp');
  }
  public set guiGtp(value: string) {
    this._guiGtp = value;
  }
  public resetGuiGtp() {
    this._guiGtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiGtpInput() {
    return this._guiGtp;
  }

  // gui_icap - computed: true, optional: true, required: false
  private _guiIcap?: string; 
  public get guiIcap() {
    return this.getStringAttribute('gui_icap');
  }
  public set guiIcap(value: string) {
    this._guiIcap = value;
  }
  public resetGuiIcap() {
    this._guiIcap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiIcapInput() {
    return this._guiIcap;
  }

  // gui_implicit_policy - computed: true, optional: true, required: false
  private _guiImplicitPolicy?: string; 
  public get guiImplicitPolicy() {
    return this.getStringAttribute('gui_implicit_policy');
  }
  public set guiImplicitPolicy(value: string) {
    this._guiImplicitPolicy = value;
  }
  public resetGuiImplicitPolicy() {
    this._guiImplicitPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiImplicitPolicyInput() {
    return this._guiImplicitPolicy;
  }

  // gui_ips - computed: true, optional: true, required: false
  private _guiIps?: string; 
  public get guiIps() {
    return this.getStringAttribute('gui_ips');
  }
  public set guiIps(value: string) {
    this._guiIps = value;
  }
  public resetGuiIps() {
    this._guiIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiIpsInput() {
    return this._guiIps;
  }

  // gui_load_balance - computed: true, optional: true, required: false
  private _guiLoadBalance?: string; 
  public get guiLoadBalance() {
    return this.getStringAttribute('gui_load_balance');
  }
  public set guiLoadBalance(value: string) {
    this._guiLoadBalance = value;
  }
  public resetGuiLoadBalance() {
    this._guiLoadBalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiLoadBalanceInput() {
    return this._guiLoadBalance;
  }

  // gui_local_in_policy - computed: true, optional: true, required: false
  private _guiLocalInPolicy?: string; 
  public get guiLocalInPolicy() {
    return this.getStringAttribute('gui_local_in_policy');
  }
  public set guiLocalInPolicy(value: string) {
    this._guiLocalInPolicy = value;
  }
  public resetGuiLocalInPolicy() {
    this._guiLocalInPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiLocalInPolicyInput() {
    return this._guiLocalInPolicy;
  }

  // gui_local_reports - computed: true, optional: true, required: false
  private _guiLocalReports?: string; 
  public get guiLocalReports() {
    return this.getStringAttribute('gui_local_reports');
  }
  public set guiLocalReports(value: string) {
    this._guiLocalReports = value;
  }
  public resetGuiLocalReports() {
    this._guiLocalReports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiLocalReportsInput() {
    return this._guiLocalReports;
  }

  // gui_multicast_policy - computed: true, optional: true, required: false
  private _guiMulticastPolicy?: string; 
  public get guiMulticastPolicy() {
    return this.getStringAttribute('gui_multicast_policy');
  }
  public set guiMulticastPolicy(value: string) {
    this._guiMulticastPolicy = value;
  }
  public resetGuiMulticastPolicy() {
    this._guiMulticastPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiMulticastPolicyInput() {
    return this._guiMulticastPolicy;
  }

  // gui_multiple_interface_policy - computed: true, optional: true, required: false
  private _guiMultipleInterfacePolicy?: string; 
  public get guiMultipleInterfacePolicy() {
    return this.getStringAttribute('gui_multiple_interface_policy');
  }
  public set guiMultipleInterfacePolicy(value: string) {
    this._guiMultipleInterfacePolicy = value;
  }
  public resetGuiMultipleInterfacePolicy() {
    this._guiMultipleInterfacePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiMultipleInterfacePolicyInput() {
    return this._guiMultipleInterfacePolicy;
  }

  // gui_multiple_utm_profiles - computed: false, optional: true, required: false
  private _guiMultipleUtmProfiles?: string; 
  public get guiMultipleUtmProfiles() {
    return this.getStringAttribute('gui_multiple_utm_profiles');
  }
  public set guiMultipleUtmProfiles(value: string) {
    this._guiMultipleUtmProfiles = value;
  }
  public resetGuiMultipleUtmProfiles() {
    this._guiMultipleUtmProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiMultipleUtmProfilesInput() {
    return this._guiMultipleUtmProfiles;
  }

  // gui_nat46_64 - computed: false, optional: true, required: false
  private _guiNat4664?: string; 
  public get guiNat4664() {
    return this.getStringAttribute('gui_nat46_64');
  }
  public set guiNat4664(value: string) {
    this._guiNat4664 = value;
  }
  public resetGuiNat4664() {
    this._guiNat4664 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiNat4664Input() {
    return this._guiNat4664;
  }

  // gui_object_colors - computed: true, optional: true, required: false
  private _guiObjectColors?: string; 
  public get guiObjectColors() {
    return this.getStringAttribute('gui_object_colors');
  }
  public set guiObjectColors(value: string) {
    this._guiObjectColors = value;
  }
  public resetGuiObjectColors() {
    this._guiObjectColors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiObjectColorsInput() {
    return this._guiObjectColors;
  }

  // gui_ot - computed: true, optional: true, required: false
  private _guiOt?: string; 
  public get guiOt() {
    return this.getStringAttribute('gui_ot');
  }
  public set guiOt(value: string) {
    this._guiOt = value;
  }
  public resetGuiOt() {
    this._guiOt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiOtInput() {
    return this._guiOt;
  }

  // gui_per_policy_disclaimer - computed: false, optional: true, required: false
  private _guiPerPolicyDisclaimer?: string; 
  public get guiPerPolicyDisclaimer() {
    return this.getStringAttribute('gui_per_policy_disclaimer');
  }
  public set guiPerPolicyDisclaimer(value: string) {
    this._guiPerPolicyDisclaimer = value;
  }
  public resetGuiPerPolicyDisclaimer() {
    this._guiPerPolicyDisclaimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiPerPolicyDisclaimerInput() {
    return this._guiPerPolicyDisclaimer;
  }

  // gui_policy_based_ipsec - computed: true, optional: true, required: false
  private _guiPolicyBasedIpsec?: string; 
  public get guiPolicyBasedIpsec() {
    return this.getStringAttribute('gui_policy_based_ipsec');
  }
  public set guiPolicyBasedIpsec(value: string) {
    this._guiPolicyBasedIpsec = value;
  }
  public resetGuiPolicyBasedIpsec() {
    this._guiPolicyBasedIpsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiPolicyBasedIpsecInput() {
    return this._guiPolicyBasedIpsec;
  }

  // gui_policy_disclaimer - computed: true, optional: true, required: false
  private _guiPolicyDisclaimer?: string; 
  public get guiPolicyDisclaimer() {
    return this.getStringAttribute('gui_policy_disclaimer');
  }
  public set guiPolicyDisclaimer(value: string) {
    this._guiPolicyDisclaimer = value;
  }
  public resetGuiPolicyDisclaimer() {
    this._guiPolicyDisclaimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiPolicyDisclaimerInput() {
    return this._guiPolicyDisclaimer;
  }

  // gui_proxy_inspection - computed: true, optional: true, required: false
  private _guiProxyInspection?: string; 
  public get guiProxyInspection() {
    return this.getStringAttribute('gui_proxy_inspection');
  }
  public set guiProxyInspection(value: string) {
    this._guiProxyInspection = value;
  }
  public resetGuiProxyInspection() {
    this._guiProxyInspection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiProxyInspectionInput() {
    return this._guiProxyInspection;
  }

  // gui_replacement_message_groups - computed: false, optional: true, required: false
  private _guiReplacementMessageGroups?: string; 
  public get guiReplacementMessageGroups() {
    return this.getStringAttribute('gui_replacement_message_groups');
  }
  public set guiReplacementMessageGroups(value: string) {
    this._guiReplacementMessageGroups = value;
  }
  public resetGuiReplacementMessageGroups() {
    this._guiReplacementMessageGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiReplacementMessageGroupsInput() {
    return this._guiReplacementMessageGroups;
  }

  // gui_route_tag_address_creation - computed: true, optional: true, required: false
  private _guiRouteTagAddressCreation?: string; 
  public get guiRouteTagAddressCreation() {
    return this.getStringAttribute('gui_route_tag_address_creation');
  }
  public set guiRouteTagAddressCreation(value: string) {
    this._guiRouteTagAddressCreation = value;
  }
  public resetGuiRouteTagAddressCreation() {
    this._guiRouteTagAddressCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiRouteTagAddressCreationInput() {
    return this._guiRouteTagAddressCreation;
  }

  // gui_security_profile_group - computed: true, optional: true, required: false
  private _guiSecurityProfileGroup?: string; 
  public get guiSecurityProfileGroup() {
    return this.getStringAttribute('gui_security_profile_group');
  }
  public set guiSecurityProfileGroup(value: string) {
    this._guiSecurityProfileGroup = value;
  }
  public resetGuiSecurityProfileGroup() {
    this._guiSecurityProfileGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiSecurityProfileGroupInput() {
    return this._guiSecurityProfileGroup;
  }

  // gui_spamfilter - computed: true, optional: true, required: false
  private _guiSpamfilter?: string; 
  public get guiSpamfilter() {
    return this.getStringAttribute('gui_spamfilter');
  }
  public set guiSpamfilter(value: string) {
    this._guiSpamfilter = value;
  }
  public resetGuiSpamfilter() {
    this._guiSpamfilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiSpamfilterInput() {
    return this._guiSpamfilter;
  }

  // gui_sslvpn - computed: true, optional: true, required: false
  private _guiSslvpn?: string; 
  public get guiSslvpn() {
    return this.getStringAttribute('gui_sslvpn');
  }
  public set guiSslvpn(value: string) {
    this._guiSslvpn = value;
  }
  public resetGuiSslvpn() {
    this._guiSslvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiSslvpnInput() {
    return this._guiSslvpn;
  }

  // gui_sslvpn_clients - computed: true, optional: true, required: false
  private _guiSslvpnClients?: string; 
  public get guiSslvpnClients() {
    return this.getStringAttribute('gui_sslvpn_clients');
  }
  public set guiSslvpnClients(value: string) {
    this._guiSslvpnClients = value;
  }
  public resetGuiSslvpnClients() {
    this._guiSslvpnClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiSslvpnClientsInput() {
    return this._guiSslvpnClients;
  }

  // gui_sslvpn_personal_bookmarks - computed: true, optional: true, required: false
  private _guiSslvpnPersonalBookmarks?: string; 
  public get guiSslvpnPersonalBookmarks() {
    return this.getStringAttribute('gui_sslvpn_personal_bookmarks');
  }
  public set guiSslvpnPersonalBookmarks(value: string) {
    this._guiSslvpnPersonalBookmarks = value;
  }
  public resetGuiSslvpnPersonalBookmarks() {
    this._guiSslvpnPersonalBookmarks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiSslvpnPersonalBookmarksInput() {
    return this._guiSslvpnPersonalBookmarks;
  }

  // gui_sslvpn_realms - computed: true, optional: true, required: false
  private _guiSslvpnRealms?: string; 
  public get guiSslvpnRealms() {
    return this.getStringAttribute('gui_sslvpn_realms');
  }
  public set guiSslvpnRealms(value: string) {
    this._guiSslvpnRealms = value;
  }
  public resetGuiSslvpnRealms() {
    this._guiSslvpnRealms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiSslvpnRealmsInput() {
    return this._guiSslvpnRealms;
  }

  // gui_switch_controller - computed: true, optional: true, required: false
  private _guiSwitchController?: string; 
  public get guiSwitchController() {
    return this.getStringAttribute('gui_switch_controller');
  }
  public set guiSwitchController(value: string) {
    this._guiSwitchController = value;
  }
  public resetGuiSwitchController() {
    this._guiSwitchController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiSwitchControllerInput() {
    return this._guiSwitchController;
  }

  // gui_threat_weight - computed: true, optional: true, required: false
  private _guiThreatWeight?: string; 
  public get guiThreatWeight() {
    return this.getStringAttribute('gui_threat_weight');
  }
  public set guiThreatWeight(value: string) {
    this._guiThreatWeight = value;
  }
  public resetGuiThreatWeight() {
    this._guiThreatWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiThreatWeightInput() {
    return this._guiThreatWeight;
  }

  // gui_traffic_shaping - computed: true, optional: true, required: false
  private _guiTrafficShaping?: string; 
  public get guiTrafficShaping() {
    return this.getStringAttribute('gui_traffic_shaping');
  }
  public set guiTrafficShaping(value: string) {
    this._guiTrafficShaping = value;
  }
  public resetGuiTrafficShaping() {
    this._guiTrafficShaping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiTrafficShapingInput() {
    return this._guiTrafficShaping;
  }

  // gui_videofilter - computed: true, optional: true, required: false
  private _guiVideofilter?: string; 
  public get guiVideofilter() {
    return this.getStringAttribute('gui_videofilter');
  }
  public set guiVideofilter(value: string) {
    this._guiVideofilter = value;
  }
  public resetGuiVideofilter() {
    this._guiVideofilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiVideofilterInput() {
    return this._guiVideofilter;
  }

  // gui_virtual_patch_profile - computed: true, optional: true, required: false
  private _guiVirtualPatchProfile?: string; 
  public get guiVirtualPatchProfile() {
    return this.getStringAttribute('gui_virtual_patch_profile');
  }
  public set guiVirtualPatchProfile(value: string) {
    this._guiVirtualPatchProfile = value;
  }
  public resetGuiVirtualPatchProfile() {
    this._guiVirtualPatchProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiVirtualPatchProfileInput() {
    return this._guiVirtualPatchProfile;
  }

  // gui_voip_profile - computed: true, optional: true, required: false
  private _guiVoipProfile?: string; 
  public get guiVoipProfile() {
    return this.getStringAttribute('gui_voip_profile');
  }
  public set guiVoipProfile(value: string) {
    this._guiVoipProfile = value;
  }
  public resetGuiVoipProfile() {
    this._guiVoipProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiVoipProfileInput() {
    return this._guiVoipProfile;
  }

  // gui_vpn - computed: true, optional: true, required: false
  private _guiVpn?: string; 
  public get guiVpn() {
    return this.getStringAttribute('gui_vpn');
  }
  public set guiVpn(value: string) {
    this._guiVpn = value;
  }
  public resetGuiVpn() {
    this._guiVpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiVpnInput() {
    return this._guiVpn;
  }

  // gui_waf_profile - computed: true, optional: true, required: false
  private _guiWafProfile?: string; 
  public get guiWafProfile() {
    return this.getStringAttribute('gui_waf_profile');
  }
  public set guiWafProfile(value: string) {
    this._guiWafProfile = value;
  }
  public resetGuiWafProfile() {
    this._guiWafProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiWafProfileInput() {
    return this._guiWafProfile;
  }

  // gui_wan_load_balancing - computed: true, optional: true, required: false
  private _guiWanLoadBalancing?: string; 
  public get guiWanLoadBalancing() {
    return this.getStringAttribute('gui_wan_load_balancing');
  }
  public set guiWanLoadBalancing(value: string) {
    this._guiWanLoadBalancing = value;
  }
  public resetGuiWanLoadBalancing() {
    this._guiWanLoadBalancing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiWanLoadBalancingInput() {
    return this._guiWanLoadBalancing;
  }

  // gui_wanopt_cache - computed: true, optional: true, required: false
  private _guiWanoptCache?: string; 
  public get guiWanoptCache() {
    return this.getStringAttribute('gui_wanopt_cache');
  }
  public set guiWanoptCache(value: string) {
    this._guiWanoptCache = value;
  }
  public resetGuiWanoptCache() {
    this._guiWanoptCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiWanoptCacheInput() {
    return this._guiWanoptCache;
  }

  // gui_webfilter - computed: true, optional: true, required: false
  private _guiWebfilter?: string; 
  public get guiWebfilter() {
    return this.getStringAttribute('gui_webfilter');
  }
  public set guiWebfilter(value: string) {
    this._guiWebfilter = value;
  }
  public resetGuiWebfilter() {
    this._guiWebfilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiWebfilterInput() {
    return this._guiWebfilter;
  }

  // gui_webfilter_advanced - computed: true, optional: true, required: false
  private _guiWebfilterAdvanced?: string; 
  public get guiWebfilterAdvanced() {
    return this.getStringAttribute('gui_webfilter_advanced');
  }
  public set guiWebfilterAdvanced(value: string) {
    this._guiWebfilterAdvanced = value;
  }
  public resetGuiWebfilterAdvanced() {
    this._guiWebfilterAdvanced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiWebfilterAdvancedInput() {
    return this._guiWebfilterAdvanced;
  }

  // gui_wireless_controller - computed: true, optional: true, required: false
  private _guiWirelessController?: string; 
  public get guiWirelessController() {
    return this.getStringAttribute('gui_wireless_controller');
  }
  public set guiWirelessController(value: string) {
    this._guiWirelessController = value;
  }
  public resetGuiWirelessController() {
    this._guiWirelessController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiWirelessControllerInput() {
    return this._guiWirelessController;
  }

  // gui_ztna - computed: true, optional: true, required: false
  private _guiZtna?: string; 
  public get guiZtna() {
    return this.getStringAttribute('gui_ztna');
  }
  public set guiZtna(value: string) {
    this._guiZtna = value;
  }
  public resetGuiZtna() {
    this._guiZtna = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiZtnaInput() {
    return this._guiZtna;
  }

  // h323_direct_model - computed: true, optional: true, required: false
  private _h323DirectModel?: string; 
  public get h323DirectModel() {
    return this.getStringAttribute('h323_direct_model');
  }
  public set h323DirectModel(value: string) {
    this._h323DirectModel = value;
  }
  public resetH323DirectModel() {
    this._h323DirectModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h323DirectModelInput() {
    return this._h323DirectModel;
  }

  // http_external_dest - computed: true, optional: true, required: false
  private _httpExternalDest?: string; 
  public get httpExternalDest() {
    return this.getStringAttribute('http_external_dest');
  }
  public set httpExternalDest(value: string) {
    this._httpExternalDest = value;
  }
  public resetHttpExternalDest() {
    this._httpExternalDest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpExternalDestInput() {
    return this._httpExternalDest;
  }

  // hyperscale_default_policy_action - computed: false, optional: true, required: false
  private _hyperscaleDefaultPolicyAction?: string; 
  public get hyperscaleDefaultPolicyAction() {
    return this.getStringAttribute('hyperscale_default_policy_action');
  }
  public set hyperscaleDefaultPolicyAction(value: string) {
    this._hyperscaleDefaultPolicyAction = value;
  }
  public resetHyperscaleDefaultPolicyAction() {
    this._hyperscaleDefaultPolicyAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperscaleDefaultPolicyActionInput() {
    return this._hyperscaleDefaultPolicyAction;
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

  // ike_dn_format - computed: true, optional: true, required: false
  private _ikeDnFormat?: string; 
  public get ikeDnFormat() {
    return this.getStringAttribute('ike_dn_format');
  }
  public set ikeDnFormat(value: string) {
    this._ikeDnFormat = value;
  }
  public resetIkeDnFormat() {
    this._ikeDnFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeDnFormatInput() {
    return this._ikeDnFormat;
  }

  // ike_policy_route - computed: true, optional: true, required: false
  private _ikePolicyRoute?: string; 
  public get ikePolicyRoute() {
    return this.getStringAttribute('ike_policy_route');
  }
  public set ikePolicyRoute(value: string) {
    this._ikePolicyRoute = value;
  }
  public resetIkePolicyRoute() {
    this._ikePolicyRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikePolicyRouteInput() {
    return this._ikePolicyRoute;
  }

  // ike_port - computed: true, optional: true, required: false
  private _ikePort?: number; 
  public get ikePort() {
    return this.getNumberAttribute('ike_port');
  }
  public set ikePort(value: number) {
    this._ikePort = value;
  }
  public resetIkePort() {
    this._ikePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikePortInput() {
    return this._ikePort;
  }

  // ike_quick_crash_detect - computed: true, optional: true, required: false
  private _ikeQuickCrashDetect?: string; 
  public get ikeQuickCrashDetect() {
    return this.getStringAttribute('ike_quick_crash_detect');
  }
  public set ikeQuickCrashDetect(value: string) {
    this._ikeQuickCrashDetect = value;
  }
  public resetIkeQuickCrashDetect() {
    this._ikeQuickCrashDetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeQuickCrashDetectInput() {
    return this._ikeQuickCrashDetect;
  }

  // ike_session_resume - computed: true, optional: true, required: false
  private _ikeSessionResume?: string; 
  public get ikeSessionResume() {
    return this.getStringAttribute('ike_session_resume');
  }
  public set ikeSessionResume(value: string) {
    this._ikeSessionResume = value;
  }
  public resetIkeSessionResume() {
    this._ikeSessionResume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeSessionResumeInput() {
    return this._ikeSessionResume;
  }

  // ike_tcp_port - computed: true, optional: true, required: false
  private _ikeTcpPort?: number; 
  public get ikeTcpPort() {
    return this.getNumberAttribute('ike_tcp_port');
  }
  public set ikeTcpPort(value: number) {
    this._ikeTcpPort = value;
  }
  public resetIkeTcpPort() {
    this._ikeTcpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeTcpPortInput() {
    return this._ikeTcpPort;
  }

  // implicit_allow_dns - computed: false, optional: true, required: false
  private _implicitAllowDns?: string; 
  public get implicitAllowDns() {
    return this.getStringAttribute('implicit_allow_dns');
  }
  public set implicitAllowDns(value: string) {
    this._implicitAllowDns = value;
  }
  public resetImplicitAllowDns() {
    this._implicitAllowDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get implicitAllowDnsInput() {
    return this._implicitAllowDns;
  }

  // internet_service_app_ctrl_size - computed: true, optional: true, required: false
  private _internetServiceAppCtrlSize?: number; 
  public get internetServiceAppCtrlSize() {
    return this.getNumberAttribute('internet_service_app_ctrl_size');
  }
  public set internetServiceAppCtrlSize(value: number) {
    this._internetServiceAppCtrlSize = value;
  }
  public resetInternetServiceAppCtrlSize() {
    this._internetServiceAppCtrlSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceAppCtrlSizeInput() {
    return this._internetServiceAppCtrlSize;
  }

  // internet_service_database_cache - computed: true, optional: true, required: false
  private _internetServiceDatabaseCache?: string; 
  public get internetServiceDatabaseCache() {
    return this.getStringAttribute('internet_service_database_cache');
  }
  public set internetServiceDatabaseCache(value: string) {
    this._internetServiceDatabaseCache = value;
  }
  public resetInternetServiceDatabaseCache() {
    this._internetServiceDatabaseCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceDatabaseCacheInput() {
    return this._internetServiceDatabaseCache;
  }

  // intree_ses_best_route - computed: true, optional: true, required: false
  private _intreeSesBestRoute?: string; 
  public get intreeSesBestRoute() {
    return this.getStringAttribute('intree_ses_best_route');
  }
  public set intreeSesBestRoute(value: string) {
    this._intreeSesBestRoute = value;
  }
  public resetIntreeSesBestRoute() {
    this._intreeSesBestRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intreeSesBestRouteInput() {
    return this._intreeSesBestRoute;
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string[]; 
  public get ip() {
    return this.getListAttribute('ip');
  }
  public set ip(value: string[]) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ip6 - computed: true, optional: true, required: false
  private _ip6?: string; 
  public get ip6() {
    return this.getStringAttribute('ip6');
  }
  public set ip6(value: string) {
    this._ip6 = value;
  }
  public resetIp6() {
    this._ip6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Input() {
    return this._ip6;
  }

  // lan_extension_controller_addr - computed: false, optional: true, required: false
  private _lanExtensionControllerAddr?: string; 
  public get lanExtensionControllerAddr() {
    return this.getStringAttribute('lan_extension_controller_addr');
  }
  public set lanExtensionControllerAddr(value: string) {
    this._lanExtensionControllerAddr = value;
  }
  public resetLanExtensionControllerAddr() {
    this._lanExtensionControllerAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lanExtensionControllerAddrInput() {
    return this._lanExtensionControllerAddr;
  }

  // link_down_access - computed: true, optional: true, required: false
  private _linkDownAccess?: string; 
  public get linkDownAccess() {
    return this.getStringAttribute('link_down_access');
  }
  public set linkDownAccess(value: string) {
    this._linkDownAccess = value;
  }
  public resetLinkDownAccess() {
    this._linkDownAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkDownAccessInput() {
    return this._linkDownAccess;
  }

  // lldp_reception - computed: true, optional: true, required: false
  private _lldpReception?: string; 
  public get lldpReception() {
    return this.getStringAttribute('lldp_reception');
  }
  public set lldpReception(value: string) {
    this._lldpReception = value;
  }
  public resetLldpReception() {
    this._lldpReception = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpReceptionInput() {
    return this._lldpReception;
  }

  // lldp_transmission - computed: true, optional: true, required: false
  private _lldpTransmission?: string; 
  public get lldpTransmission() {
    return this.getStringAttribute('lldp_transmission');
  }
  public set lldpTransmission(value: string) {
    this._lldpTransmission = value;
  }
  public resetLldpTransmission() {
    this._lldpTransmission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpTransmissionInput() {
    return this._lldpTransmission;
  }

  // location_id - computed: true, optional: true, required: false
  private _locationId?: string; 
  public get locationId() {
    return this.getStringAttribute('location_id');
  }
  public set locationId(value: string) {
    this._locationId = value;
  }
  public resetLocationId() {
    this._locationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationIdInput() {
    return this._locationId;
  }

  // mac_ttl - computed: true, optional: true, required: false
  private _macTtl?: number; 
  public get macTtl() {
    return this.getNumberAttribute('mac_ttl');
  }
  public set macTtl(value: number) {
    this._macTtl = value;
  }
  public resetMacTtl() {
    this._macTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTtlInput() {
    return this._macTtl;
  }

  // manageip - computed: true, optional: true, required: false
  private _manageip?: string[]; 
  public get manageip() {
    return cdktf.Fn.tolist(this.getListAttribute('manageip'));
  }
  public set manageip(value: string[]) {
    this._manageip = value;
  }
  public resetManageip() {
    this._manageip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageipInput() {
    return this._manageip;
  }

  // manageip6 - computed: false, optional: true, required: false
  private _manageip6?: string; 
  public get manageip6() {
    return this.getStringAttribute('manageip6');
  }
  public set manageip6(value: string) {
    this._manageip6 = value;
  }
  public resetManageip6() {
    this._manageip6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageip6Input() {
    return this._manageip6;
  }

  // motherboard_traffic_forwarding - computed: true, optional: true, required: false
  private _motherboardTrafficForwarding?: string[]; 
  public get motherboardTrafficForwarding() {
    return cdktf.Fn.tolist(this.getListAttribute('motherboard_traffic_forwarding'));
  }
  public set motherboardTrafficForwarding(value: string[]) {
    this._motherboardTrafficForwarding = value;
  }
  public resetMotherboardTrafficForwarding() {
    this._motherboardTrafficForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get motherboardTrafficForwardingInput() {
    return this._motherboardTrafficForwarding;
  }

  // multicast_forward - computed: true, optional: true, required: false
  private _multicastForward?: string; 
  public get multicastForward() {
    return this.getStringAttribute('multicast_forward');
  }
  public set multicastForward(value: string) {
    this._multicastForward = value;
  }
  public resetMulticastForward() {
    this._multicastForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastForwardInput() {
    return this._multicastForward;
  }

  // multicast_skip_policy - computed: false, optional: true, required: false
  private _multicastSkipPolicy?: string; 
  public get multicastSkipPolicy() {
    return this.getStringAttribute('multicast_skip_policy');
  }
  public set multicastSkipPolicy(value: string) {
    this._multicastSkipPolicy = value;
  }
  public resetMulticastSkipPolicy() {
    this._multicastSkipPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastSkipPolicyInput() {
    return this._multicastSkipPolicy;
  }

  // multicast_ttl_notchange - computed: true, optional: true, required: false
  private _multicastTtlNotchange?: string; 
  public get multicastTtlNotchange() {
    return this.getStringAttribute('multicast_ttl_notchange');
  }
  public set multicastTtlNotchange(value: string) {
    this._multicastTtlNotchange = value;
  }
  public resetMulticastTtlNotchange() {
    this._multicastTtlNotchange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastTtlNotchangeInput() {
    return this._multicastTtlNotchange;
  }

  // nat46_force_ipv4_packet_forwarding - computed: true, optional: true, required: false
  private _nat46ForceIpv4PacketForwarding?: string; 
  public get nat46ForceIpv4PacketForwarding() {
    return this.getStringAttribute('nat46_force_ipv4_packet_forwarding');
  }
  public set nat46ForceIpv4PacketForwarding(value: string) {
    this._nat46ForceIpv4PacketForwarding = value;
  }
  public resetNat46ForceIpv4PacketForwarding() {
    this._nat46ForceIpv4PacketForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat46ForceIpv4PacketForwardingInput() {
    return this._nat46ForceIpv4PacketForwarding;
  }

  // nat46_generate_ipv6_fragment_header - computed: true, optional: true, required: false
  private _nat46GenerateIpv6FragmentHeader?: string; 
  public get nat46GenerateIpv6FragmentHeader() {
    return this.getStringAttribute('nat46_generate_ipv6_fragment_header');
  }
  public set nat46GenerateIpv6FragmentHeader(value: string) {
    this._nat46GenerateIpv6FragmentHeader = value;
  }
  public resetNat46GenerateIpv6FragmentHeader() {
    this._nat46GenerateIpv6FragmentHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat46GenerateIpv6FragmentHeaderInput() {
    return this._nat46GenerateIpv6FragmentHeader;
  }

  // nat64_force_ipv6_packet_forwarding - computed: true, optional: true, required: false
  private _nat64ForceIpv6PacketForwarding?: string; 
  public get nat64ForceIpv6PacketForwarding() {
    return this.getStringAttribute('nat64_force_ipv6_packet_forwarding');
  }
  public set nat64ForceIpv6PacketForwarding(value: string) {
    this._nat64ForceIpv6PacketForwarding = value;
  }
  public resetNat64ForceIpv6PacketForwarding() {
    this._nat64ForceIpv6PacketForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64ForceIpv6PacketForwardingInput() {
    return this._nat64ForceIpv6PacketForwarding;
  }

  // ngfw_mode - computed: true, optional: true, required: false
  private _ngfwMode?: string; 
  public get ngfwMode() {
    return this.getStringAttribute('ngfw_mode');
  }
  public set ngfwMode(value: string) {
    this._ngfwMode = value;
  }
  public resetNgfwMode() {
    this._ngfwMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwModeInput() {
    return this._ngfwMode;
  }

  // nonat_eif_key_sel - computed: false, optional: true, required: false
  private _nonatEifKeySel?: string; 
  public get nonatEifKeySel() {
    return this.getStringAttribute('nonat_eif_key_sel');
  }
  public set nonatEifKeySel(value: string) {
    this._nonatEifKeySel = value;
  }
  public resetNonatEifKeySel() {
    this._nonatEifKeySel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonatEifKeySelInput() {
    return this._nonatEifKeySel;
  }

  // npu_group_id - computed: false, optional: true, required: false
  private _npuGroupId?: number; 
  public get npuGroupId() {
    return this.getNumberAttribute('npu_group_id');
  }
  public set npuGroupId(value: number) {
    this._npuGroupId = value;
  }
  public resetNpuGroupId() {
    this._npuGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get npuGroupIdInput() {
    return this._npuGroupId;
  }

  // opmode - computed: true, optional: true, required: false
  private _opmode?: string; 
  public get opmode() {
    return this.getStringAttribute('opmode');
  }
  public set opmode(value: string) {
    this._opmode = value;
  }
  public resetOpmode() {
    this._opmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opmodeInput() {
    return this._opmode;
  }

  // pfcp_monitor_mode - computed: false, optional: true, required: false
  private _pfcpMonitorMode?: string; 
  public get pfcpMonitorMode() {
    return this.getStringAttribute('pfcp_monitor_mode');
  }
  public set pfcpMonitorMode(value: string) {
    this._pfcpMonitorMode = value;
  }
  public resetPfcpMonitorMode() {
    this._pfcpMonitorMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pfcpMonitorModeInput() {
    return this._pfcpMonitorMode;
  }

  // policy_offload_level - computed: false, optional: true, required: false
  private _policyOffloadLevel?: string; 
  public get policyOffloadLevel() {
    return this.getStringAttribute('policy_offload_level');
  }
  public set policyOffloadLevel(value: string) {
    this._policyOffloadLevel = value;
  }
  public resetPolicyOffloadLevel() {
    this._policyOffloadLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyOffloadLevelInput() {
    return this._policyOffloadLevel;
  }

  // prp_trailer_action - computed: true, optional: true, required: false
  private _prpTrailerAction?: string; 
  public get prpTrailerAction() {
    return this.getStringAttribute('prp_trailer_action');
  }
  public set prpTrailerAction(value: string) {
    this._prpTrailerAction = value;
  }
  public resetPrpTrailerAction() {
    this._prpTrailerAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prpTrailerActionInput() {
    return this._prpTrailerAction;
  }

  // sccp_port - computed: true, optional: true, required: false
  private _sccpPort?: number; 
  public get sccpPort() {
    return this.getNumberAttribute('sccp_port');
  }
  public set sccpPort(value: number) {
    this._sccpPort = value;
  }
  public resetSccpPort() {
    this._sccpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sccpPortInput() {
    return this._sccpPort;
  }

  // sctp_session_without_init - computed: true, optional: true, required: false
  private _sctpSessionWithoutInit?: string; 
  public get sctpSessionWithoutInit() {
    return this.getStringAttribute('sctp_session_without_init');
  }
  public set sctpSessionWithoutInit(value: string) {
    this._sctpSessionWithoutInit = value;
  }
  public resetSctpSessionWithoutInit() {
    this._sctpSessionWithoutInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpSessionWithoutInitInput() {
    return this._sctpSessionWithoutInit;
  }

  // ses_denied_multicast_traffic - computed: true, optional: true, required: false
  private _sesDeniedMulticastTraffic?: string; 
  public get sesDeniedMulticastTraffic() {
    return this.getStringAttribute('ses_denied_multicast_traffic');
  }
  public set sesDeniedMulticastTraffic(value: string) {
    this._sesDeniedMulticastTraffic = value;
  }
  public resetSesDeniedMulticastTraffic() {
    this._sesDeniedMulticastTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sesDeniedMulticastTrafficInput() {
    return this._sesDeniedMulticastTraffic;
  }

  // ses_denied_traffic - computed: true, optional: true, required: false
  private _sesDeniedTraffic?: string; 
  public get sesDeniedTraffic() {
    return this.getStringAttribute('ses_denied_traffic');
  }
  public set sesDeniedTraffic(value: string) {
    this._sesDeniedTraffic = value;
  }
  public resetSesDeniedTraffic() {
    this._sesDeniedTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sesDeniedTrafficInput() {
    return this._sesDeniedTraffic;
  }

  // session_insert_trial - computed: false, optional: true, required: false
  private _sessionInsertTrial?: string; 
  public get sessionInsertTrial() {
    return this.getStringAttribute('session_insert_trial');
  }
  public set sessionInsertTrial(value: string) {
    this._sessionInsertTrial = value;
  }
  public resetSessionInsertTrial() {
    this._sessionInsertTrial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionInsertTrialInput() {
    return this._sessionInsertTrial;
  }

  // sip_expectation - computed: true, optional: true, required: false
  private _sipExpectation?: string; 
  public get sipExpectation() {
    return this.getStringAttribute('sip_expectation');
  }
  public set sipExpectation(value: string) {
    this._sipExpectation = value;
  }
  public resetSipExpectation() {
    this._sipExpectation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipExpectationInput() {
    return this._sipExpectation;
  }

  // sip_nat_trace - computed: true, optional: true, required: false
  private _sipNatTrace?: string; 
  public get sipNatTrace() {
    return this.getStringAttribute('sip_nat_trace');
  }
  public set sipNatTrace(value: string) {
    this._sipNatTrace = value;
  }
  public resetSipNatTrace() {
    this._sipNatTrace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipNatTraceInput() {
    return this._sipNatTrace;
  }

  // sip_ssl_port - computed: true, optional: true, required: false
  private _sipSslPort?: number; 
  public get sipSslPort() {
    return this.getNumberAttribute('sip_ssl_port');
  }
  public set sipSslPort(value: number) {
    this._sipSslPort = value;
  }
  public resetSipSslPort() {
    this._sipSslPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipSslPortInput() {
    return this._sipSslPort;
  }

  // sip_tcp_port - computed: true, optional: true, required: false
  private _sipTcpPort?: number[]; 
  public get sipTcpPort() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('sip_tcp_port')));
  }
  public set sipTcpPort(value: number[]) {
    this._sipTcpPort = value;
  }
  public resetSipTcpPort() {
    this._sipTcpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipTcpPortInput() {
    return this._sipTcpPort;
  }

  // sip_udp_port - computed: true, optional: true, required: false
  private _sipUdpPort?: number[]; 
  public get sipUdpPort() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('sip_udp_port')));
  }
  public set sipUdpPort(value: number[]) {
    this._sipUdpPort = value;
  }
  public resetSipUdpPort() {
    this._sipUdpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipUdpPortInput() {
    return this._sipUdpPort;
  }

  // snat_hairpin_traffic - computed: true, optional: true, required: false
  private _snatHairpinTraffic?: string; 
  public get snatHairpinTraffic() {
    return this.getStringAttribute('snat_hairpin_traffic');
  }
  public set snatHairpinTraffic(value: string) {
    this._snatHairpinTraffic = value;
  }
  public resetSnatHairpinTraffic() {
    this._snatHairpinTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatHairpinTrafficInput() {
    return this._snatHairpinTraffic;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // strict_src_check - computed: true, optional: true, required: false
  private _strictSrcCheck?: string; 
  public get strictSrcCheck() {
    return this.getStringAttribute('strict_src_check');
  }
  public set strictSrcCheck(value: string) {
    this._strictSrcCheck = value;
  }
  public resetStrictSrcCheck() {
    this._strictSrcCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictSrcCheckInput() {
    return this._strictSrcCheck;
  }

  // tcp_session_without_syn - computed: true, optional: true, required: false
  private _tcpSessionWithoutSyn?: string; 
  public get tcpSessionWithoutSyn() {
    return this.getStringAttribute('tcp_session_without_syn');
  }
  public set tcpSessionWithoutSyn(value: string) {
    this._tcpSessionWithoutSyn = value;
  }
  public resetTcpSessionWithoutSyn() {
    this._tcpSessionWithoutSyn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSessionWithoutSynInput() {
    return this._tcpSessionWithoutSyn;
  }

  // trap_local_session - computed: false, optional: true, required: false
  private _trapLocalSession?: string; 
  public get trapLocalSession() {
    return this.getStringAttribute('trap_local_session');
  }
  public set trapLocalSession(value: string) {
    this._trapLocalSession = value;
  }
  public resetTrapLocalSession() {
    this._trapLocalSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapLocalSessionInput() {
    return this._trapLocalSession;
  }

  // trap_session_flag - computed: false, optional: true, required: false
  private _trapSessionFlag?: string; 
  public get trapSessionFlag() {
    return this.getStringAttribute('trap_session_flag');
  }
  public set trapSessionFlag(value: string) {
    this._trapSessionFlag = value;
  }
  public resetTrapSessionFlag() {
    this._trapSessionFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapSessionFlagInput() {
    return this._trapSessionFlag;
  }

  // utf8_spam_tagging - computed: true, optional: true, required: false
  private _utf8SpamTagging?: string; 
  public get utf8SpamTagging() {
    return this.getStringAttribute('utf8_spam_tagging');
  }
  public set utf8SpamTagging(value: string) {
    this._utf8SpamTagging = value;
  }
  public resetUtf8SpamTagging() {
    this._utf8SpamTagging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utf8SpamTaggingInput() {
    return this._utf8SpamTagging;
  }

  // v4_ecmp_mode - computed: true, optional: true, required: false
  private _v4EcmpMode?: string; 
  public get v4EcmpMode() {
    return this.getStringAttribute('v4_ecmp_mode');
  }
  public set v4EcmpMode(value: string) {
    this._v4EcmpMode = value;
  }
  public resetV4EcmpMode() {
    this._v4EcmpMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v4EcmpModeInput() {
    return this._v4EcmpMode;
  }

  // vdom_type - computed: false, optional: true, required: false
  private _vdomType?: string; 
  public get vdomType() {
    return this.getStringAttribute('vdom_type');
  }
  public set vdomType(value: string) {
    this._vdomType = value;
  }
  public resetVdomType() {
    this._vdomType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomTypeInput() {
    return this._vdomType;
  }

  // vpn_stats_log - computed: true, optional: true, required: false
  private _vpnStatsLog?: string[]; 
  public get vpnStatsLog() {
    return cdktf.Fn.tolist(this.getListAttribute('vpn_stats_log'));
  }
  public set vpnStatsLog(value: string[]) {
    this._vpnStatsLog = value;
  }
  public resetVpnStatsLog() {
    this._vpnStatsLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnStatsLogInput() {
    return this._vpnStatsLog;
  }

  // vpn_stats_period - computed: true, optional: true, required: false
  private _vpnStatsPeriod?: number; 
  public get vpnStatsPeriod() {
    return this.getNumberAttribute('vpn_stats_period');
  }
  public set vpnStatsPeriod(value: number) {
    this._vpnStatsPeriod = value;
  }
  public resetVpnStatsPeriod() {
    this._vpnStatsPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnStatsPeriodInput() {
    return this._vpnStatsPeriod;
  }

  // wccp_cache_engine - computed: true, optional: true, required: false
  private _wccpCacheEngine?: string; 
  public get wccpCacheEngine() {
    return this.getStringAttribute('wccp_cache_engine');
  }
  public set wccpCacheEngine(value: string) {
    this._wccpCacheEngine = value;
  }
  public resetWccpCacheEngine() {
    this._wccpCacheEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wccpCacheEngineInput() {
    return this._wccpCacheEngine;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_linkdown_path: cdktf.stringToTerraform(this._allowLinkdownPath),
      allow_subnet_overlap: cdktf.stringToTerraform(this._allowSubnetOverlap),
      application_bandwidth_tracking: cdktf.stringToTerraform(this._applicationBandwidthTracking),
      asymroute: cdktf.stringToTerraform(this._asymroute),
      asymroute6: cdktf.stringToTerraform(this._asymroute6),
      asymroute6_icmp: cdktf.stringToTerraform(this._asymroute6Icmp),
      asymroute_icmp: cdktf.stringToTerraform(this._asymrouteIcmp),
      auxiliary_session: cdktf.stringToTerraform(this._auxiliarySession),
      bfd: cdktf.stringToTerraform(this._bfd),
      bfd_desired_min_tx: cdktf.numberToTerraform(this._bfdDesiredMinTx),
      bfd_detect_mult: cdktf.numberToTerraform(this._bfdDetectMult),
      bfd_dont_enforce_src_port: cdktf.stringToTerraform(this._bfdDontEnforceSrcPort),
      bfd_required_min_rx: cdktf.numberToTerraform(this._bfdRequiredMinRx),
      block_land_attack: cdktf.stringToTerraform(this._blockLandAttack),
      central_nat: cdktf.stringToTerraform(this._centralNat),
      comments: cdktf.stringToTerraform(this._comments),
      consolidated_firewall_mode: cdktf.stringToTerraform(this._consolidatedFirewallMode),
      default_app_port_as_service: cdktf.stringToTerraform(this._defaultAppPortAsService),
      default_policy_expiry_days: cdktf.numberToTerraform(this._defaultPolicyExpiryDays),
      default_voip_alg_mode: cdktf.stringToTerraform(this._defaultVoipAlgMode),
      deny_tcp_with_icmp: cdktf.stringToTerraform(this._denyTcpWithIcmp),
      detect_unknown_esp: cdktf.stringToTerraform(this._detectUnknownEsp),
      device: cdktf.listMapper(cdktf.stringToTerraform, false)(this._device),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      dhcp6_server_ip: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dhcp6ServerIp),
      dhcp_proxy: cdktf.stringToTerraform(this._dhcpProxy),
      dhcp_proxy_interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dhcpProxyInterface),
      dhcp_proxy_interface_select_method: cdktf.stringToTerraform(this._dhcpProxyInterfaceSelectMethod),
      dhcp_proxy_vrf_select: cdktf.numberToTerraform(this._dhcpProxyVrfSelect),
      dhcp_server_ip: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dhcpServerIp),
      discovered_device_timeout: cdktf.numberToTerraform(this._discoveredDeviceTimeout),
      dp_load_distribution_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dpLoadDistributionGroup),
      dp_load_distribution_method: cdktf.stringToTerraform(this._dpLoadDistributionMethod),
      dyn_addr_session_check: cdktf.stringToTerraform(this._dynAddrSessionCheck),
      ecmp_max_paths: cdktf.numberToTerraform(this._ecmpMaxPaths),
      email_portal_check_dns: cdktf.stringToTerraform(this._emailPortalCheckDns),
      ext_resource_session_check: cdktf.stringToTerraform(this._extResourceSessionCheck),
      firewall_session_dirty: cdktf.stringToTerraform(this._firewallSessionDirty),
      fqdn_session_check: cdktf.stringToTerraform(this._fqdnSessionCheck),
      fw_session_hairpin: cdktf.stringToTerraform(this._fwSessionHairpin),
      gateway: cdktf.stringToTerraform(this._gateway),
      gateway6: cdktf.stringToTerraform(this._gateway6),
      gtp_asym_fgsp: cdktf.stringToTerraform(this._gtpAsymFgsp),
      gtp_monitor_mode: cdktf.stringToTerraform(this._gtpMonitorMode),
      gui_advanced_policy: cdktf.stringToTerraform(this._guiAdvancedPolicy),
      gui_advanced_wireless_features: cdktf.stringToTerraform(this._guiAdvancedWirelessFeatures),
      gui_allow_unnamed_policy: cdktf.stringToTerraform(this._guiAllowUnnamedPolicy),
      gui_antivirus: cdktf.stringToTerraform(this._guiAntivirus),
      gui_ap_profile: cdktf.stringToTerraform(this._guiApProfile),
      gui_application_control: cdktf.stringToTerraform(this._guiApplicationControl),
      gui_casb: cdktf.stringToTerraform(this._guiCasb),
      gui_default_policy_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._guiDefaultPolicyColumns),
      gui_dhcp_advanced: cdktf.stringToTerraform(this._guiDhcpAdvanced),
      gui_dlp_advanced: cdktf.stringToTerraform(this._guiDlpAdvanced),
      gui_dlp_profile: cdktf.stringToTerraform(this._guiDlpProfile),
      gui_dns_database: cdktf.stringToTerraform(this._guiDnsDatabase),
      gui_dnsfilter: cdktf.stringToTerraform(this._guiDnsfilter),
      gui_domain_ip_reputation: cdktf.stringToTerraform(this._guiDomainIpReputation),
      gui_dos_policy: cdktf.stringToTerraform(this._guiDosPolicy),
      gui_dynamic_device_os_id: cdktf.stringToTerraform(this._guiDynamicDeviceOsId),
      gui_dynamic_profile_display: cdktf.stringToTerraform(this._guiDynamicProfileDisplay),
      gui_dynamic_routing: cdktf.stringToTerraform(this._guiDynamicRouting),
      gui_email_collection: cdktf.stringToTerraform(this._guiEmailCollection),
      gui_endpoint_control: cdktf.stringToTerraform(this._guiEndpointControl),
      gui_endpoint_control_advanced: cdktf.stringToTerraform(this._guiEndpointControlAdvanced),
      gui_enforce_change_summary: cdktf.stringToTerraform(this._guiEnforceChangeSummary),
      gui_explicit_proxy: cdktf.stringToTerraform(this._guiExplicitProxy),
      gui_file_filter: cdktf.stringToTerraform(this._guiFileFilter),
      gui_fortiap_split_tunneling: cdktf.stringToTerraform(this._guiFortiapSplitTunneling),
      gui_fortiextender_controller: cdktf.stringToTerraform(this._guiFortiextenderController),
      gui_gtp: cdktf.stringToTerraform(this._guiGtp),
      gui_icap: cdktf.stringToTerraform(this._guiIcap),
      gui_implicit_policy: cdktf.stringToTerraform(this._guiImplicitPolicy),
      gui_ips: cdktf.stringToTerraform(this._guiIps),
      gui_load_balance: cdktf.stringToTerraform(this._guiLoadBalance),
      gui_local_in_policy: cdktf.stringToTerraform(this._guiLocalInPolicy),
      gui_local_reports: cdktf.stringToTerraform(this._guiLocalReports),
      gui_multicast_policy: cdktf.stringToTerraform(this._guiMulticastPolicy),
      gui_multiple_interface_policy: cdktf.stringToTerraform(this._guiMultipleInterfacePolicy),
      gui_multiple_utm_profiles: cdktf.stringToTerraform(this._guiMultipleUtmProfiles),
      gui_nat46_64: cdktf.stringToTerraform(this._guiNat4664),
      gui_object_colors: cdktf.stringToTerraform(this._guiObjectColors),
      gui_ot: cdktf.stringToTerraform(this._guiOt),
      gui_per_policy_disclaimer: cdktf.stringToTerraform(this._guiPerPolicyDisclaimer),
      gui_policy_based_ipsec: cdktf.stringToTerraform(this._guiPolicyBasedIpsec),
      gui_policy_disclaimer: cdktf.stringToTerraform(this._guiPolicyDisclaimer),
      gui_proxy_inspection: cdktf.stringToTerraform(this._guiProxyInspection),
      gui_replacement_message_groups: cdktf.stringToTerraform(this._guiReplacementMessageGroups),
      gui_route_tag_address_creation: cdktf.stringToTerraform(this._guiRouteTagAddressCreation),
      gui_security_profile_group: cdktf.stringToTerraform(this._guiSecurityProfileGroup),
      gui_spamfilter: cdktf.stringToTerraform(this._guiSpamfilter),
      gui_sslvpn: cdktf.stringToTerraform(this._guiSslvpn),
      gui_sslvpn_clients: cdktf.stringToTerraform(this._guiSslvpnClients),
      gui_sslvpn_personal_bookmarks: cdktf.stringToTerraform(this._guiSslvpnPersonalBookmarks),
      gui_sslvpn_realms: cdktf.stringToTerraform(this._guiSslvpnRealms),
      gui_switch_controller: cdktf.stringToTerraform(this._guiSwitchController),
      gui_threat_weight: cdktf.stringToTerraform(this._guiThreatWeight),
      gui_traffic_shaping: cdktf.stringToTerraform(this._guiTrafficShaping),
      gui_videofilter: cdktf.stringToTerraform(this._guiVideofilter),
      gui_virtual_patch_profile: cdktf.stringToTerraform(this._guiVirtualPatchProfile),
      gui_voip_profile: cdktf.stringToTerraform(this._guiVoipProfile),
      gui_vpn: cdktf.stringToTerraform(this._guiVpn),
      gui_waf_profile: cdktf.stringToTerraform(this._guiWafProfile),
      gui_wan_load_balancing: cdktf.stringToTerraform(this._guiWanLoadBalancing),
      gui_wanopt_cache: cdktf.stringToTerraform(this._guiWanoptCache),
      gui_webfilter: cdktf.stringToTerraform(this._guiWebfilter),
      gui_webfilter_advanced: cdktf.stringToTerraform(this._guiWebfilterAdvanced),
      gui_wireless_controller: cdktf.stringToTerraform(this._guiWirelessController),
      gui_ztna: cdktf.stringToTerraform(this._guiZtna),
      h323_direct_model: cdktf.stringToTerraform(this._h323DirectModel),
      http_external_dest: cdktf.stringToTerraform(this._httpExternalDest),
      hyperscale_default_policy_action: cdktf.stringToTerraform(this._hyperscaleDefaultPolicyAction),
      id: cdktf.stringToTerraform(this._id),
      ike_dn_format: cdktf.stringToTerraform(this._ikeDnFormat),
      ike_policy_route: cdktf.stringToTerraform(this._ikePolicyRoute),
      ike_port: cdktf.numberToTerraform(this._ikePort),
      ike_quick_crash_detect: cdktf.stringToTerraform(this._ikeQuickCrashDetect),
      ike_session_resume: cdktf.stringToTerraform(this._ikeSessionResume),
      ike_tcp_port: cdktf.numberToTerraform(this._ikeTcpPort),
      implicit_allow_dns: cdktf.stringToTerraform(this._implicitAllowDns),
      internet_service_app_ctrl_size: cdktf.numberToTerraform(this._internetServiceAppCtrlSize),
      internet_service_database_cache: cdktf.stringToTerraform(this._internetServiceDatabaseCache),
      intree_ses_best_route: cdktf.stringToTerraform(this._intreeSesBestRoute),
      ip: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ip),
      ip6: cdktf.stringToTerraform(this._ip6),
      lan_extension_controller_addr: cdktf.stringToTerraform(this._lanExtensionControllerAddr),
      link_down_access: cdktf.stringToTerraform(this._linkDownAccess),
      lldp_reception: cdktf.stringToTerraform(this._lldpReception),
      lldp_transmission: cdktf.stringToTerraform(this._lldpTransmission),
      location_id: cdktf.stringToTerraform(this._locationId),
      mac_ttl: cdktf.numberToTerraform(this._macTtl),
      manageip: cdktf.listMapper(cdktf.stringToTerraform, false)(this._manageip),
      manageip6: cdktf.stringToTerraform(this._manageip6),
      motherboard_traffic_forwarding: cdktf.listMapper(cdktf.stringToTerraform, false)(this._motherboardTrafficForwarding),
      multicast_forward: cdktf.stringToTerraform(this._multicastForward),
      multicast_skip_policy: cdktf.stringToTerraform(this._multicastSkipPolicy),
      multicast_ttl_notchange: cdktf.stringToTerraform(this._multicastTtlNotchange),
      nat46_force_ipv4_packet_forwarding: cdktf.stringToTerraform(this._nat46ForceIpv4PacketForwarding),
      nat46_generate_ipv6_fragment_header: cdktf.stringToTerraform(this._nat46GenerateIpv6FragmentHeader),
      nat64_force_ipv6_packet_forwarding: cdktf.stringToTerraform(this._nat64ForceIpv6PacketForwarding),
      ngfw_mode: cdktf.stringToTerraform(this._ngfwMode),
      nonat_eif_key_sel: cdktf.stringToTerraform(this._nonatEifKeySel),
      npu_group_id: cdktf.numberToTerraform(this._npuGroupId),
      opmode: cdktf.stringToTerraform(this._opmode),
      pfcp_monitor_mode: cdktf.stringToTerraform(this._pfcpMonitorMode),
      policy_offload_level: cdktf.stringToTerraform(this._policyOffloadLevel),
      prp_trailer_action: cdktf.stringToTerraform(this._prpTrailerAction),
      sccp_port: cdktf.numberToTerraform(this._sccpPort),
      sctp_session_without_init: cdktf.stringToTerraform(this._sctpSessionWithoutInit),
      ses_denied_multicast_traffic: cdktf.stringToTerraform(this._sesDeniedMulticastTraffic),
      ses_denied_traffic: cdktf.stringToTerraform(this._sesDeniedTraffic),
      session_insert_trial: cdktf.stringToTerraform(this._sessionInsertTrial),
      sip_expectation: cdktf.stringToTerraform(this._sipExpectation),
      sip_nat_trace: cdktf.stringToTerraform(this._sipNatTrace),
      sip_ssl_port: cdktf.numberToTerraform(this._sipSslPort),
      sip_tcp_port: cdktf.listMapper(cdktf.numberToTerraform, false)(this._sipTcpPort),
      sip_udp_port: cdktf.listMapper(cdktf.numberToTerraform, false)(this._sipUdpPort),
      snat_hairpin_traffic: cdktf.stringToTerraform(this._snatHairpinTraffic),
      status: cdktf.stringToTerraform(this._status),
      strict_src_check: cdktf.stringToTerraform(this._strictSrcCheck),
      tcp_session_without_syn: cdktf.stringToTerraform(this._tcpSessionWithoutSyn),
      trap_local_session: cdktf.stringToTerraform(this._trapLocalSession),
      trap_session_flag: cdktf.stringToTerraform(this._trapSessionFlag),
      utf8_spam_tagging: cdktf.stringToTerraform(this._utf8SpamTagging),
      v4_ecmp_mode: cdktf.stringToTerraform(this._v4EcmpMode),
      vdom_type: cdktf.stringToTerraform(this._vdomType),
      vpn_stats_log: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vpnStatsLog),
      vpn_stats_period: cdktf.numberToTerraform(this._vpnStatsPeriod),
      wccp_cache_engine: cdktf.stringToTerraform(this._wccpCacheEngine),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_linkdown_path: {
        value: cdktf.stringToHclTerraform(this._allowLinkdownPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_subnet_overlap: {
        value: cdktf.stringToHclTerraform(this._allowSubnetOverlap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_bandwidth_tracking: {
        value: cdktf.stringToHclTerraform(this._applicationBandwidthTracking),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      asymroute: {
        value: cdktf.stringToHclTerraform(this._asymroute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      asymroute6: {
        value: cdktf.stringToHclTerraform(this._asymroute6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      asymroute6_icmp: {
        value: cdktf.stringToHclTerraform(this._asymroute6Icmp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      asymroute_icmp: {
        value: cdktf.stringToHclTerraform(this._asymrouteIcmp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auxiliary_session: {
        value: cdktf.stringToHclTerraform(this._auxiliarySession),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bfd: {
        value: cdktf.stringToHclTerraform(this._bfd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bfd_desired_min_tx: {
        value: cdktf.numberToHclTerraform(this._bfdDesiredMinTx),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bfd_detect_mult: {
        value: cdktf.numberToHclTerraform(this._bfdDetectMult),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bfd_dont_enforce_src_port: {
        value: cdktf.stringToHclTerraform(this._bfdDontEnforceSrcPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bfd_required_min_rx: {
        value: cdktf.numberToHclTerraform(this._bfdRequiredMinRx),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      block_land_attack: {
        value: cdktf.stringToHclTerraform(this._blockLandAttack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      central_nat: {
        value: cdktf.stringToHclTerraform(this._centralNat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consolidated_firewall_mode: {
        value: cdktf.stringToHclTerraform(this._consolidatedFirewallMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_app_port_as_service: {
        value: cdktf.stringToHclTerraform(this._defaultAppPortAsService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_policy_expiry_days: {
        value: cdktf.numberToHclTerraform(this._defaultPolicyExpiryDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_voip_alg_mode: {
        value: cdktf.stringToHclTerraform(this._defaultVoipAlgMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deny_tcp_with_icmp: {
        value: cdktf.stringToHclTerraform(this._denyTcpWithIcmp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      detect_unknown_esp: {
        value: cdktf.stringToHclTerraform(this._detectUnknownEsp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._device),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp6_server_ip: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dhcp6ServerIp),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dhcp_proxy: {
        value: cdktf.stringToHclTerraform(this._dhcpProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_proxy_interface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dhcpProxyInterface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dhcp_proxy_interface_select_method: {
        value: cdktf.stringToHclTerraform(this._dhcpProxyInterfaceSelectMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_proxy_vrf_select: {
        value: cdktf.numberToHclTerraform(this._dhcpProxyVrfSelect),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dhcp_server_ip: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dhcpServerIp),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      discovered_device_timeout: {
        value: cdktf.numberToHclTerraform(this._discoveredDeviceTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dp_load_distribution_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dpLoadDistributionGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dp_load_distribution_method: {
        value: cdktf.stringToHclTerraform(this._dpLoadDistributionMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dyn_addr_session_check: {
        value: cdktf.stringToHclTerraform(this._dynAddrSessionCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ecmp_max_paths: {
        value: cdktf.numberToHclTerraform(this._ecmpMaxPaths),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      email_portal_check_dns: {
        value: cdktf.stringToHclTerraform(this._emailPortalCheckDns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_resource_session_check: {
        value: cdktf.stringToHclTerraform(this._extResourceSessionCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firewall_session_dirty: {
        value: cdktf.stringToHclTerraform(this._firewallSessionDirty),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fqdn_session_check: {
        value: cdktf.stringToHclTerraform(this._fqdnSessionCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fw_session_hairpin: {
        value: cdktf.stringToHclTerraform(this._fwSessionHairpin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway: {
        value: cdktf.stringToHclTerraform(this._gateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway6: {
        value: cdktf.stringToHclTerraform(this._gateway6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gtp_asym_fgsp: {
        value: cdktf.stringToHclTerraform(this._gtpAsymFgsp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gtp_monitor_mode: {
        value: cdktf.stringToHclTerraform(this._gtpMonitorMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_advanced_policy: {
        value: cdktf.stringToHclTerraform(this._guiAdvancedPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_advanced_wireless_features: {
        value: cdktf.stringToHclTerraform(this._guiAdvancedWirelessFeatures),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_allow_unnamed_policy: {
        value: cdktf.stringToHclTerraform(this._guiAllowUnnamedPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_antivirus: {
        value: cdktf.stringToHclTerraform(this._guiAntivirus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_ap_profile: {
        value: cdktf.stringToHclTerraform(this._guiApProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_application_control: {
        value: cdktf.stringToHclTerraform(this._guiApplicationControl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_casb: {
        value: cdktf.stringToHclTerraform(this._guiCasb),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_default_policy_columns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._guiDefaultPolicyColumns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      gui_dhcp_advanced: {
        value: cdktf.stringToHclTerraform(this._guiDhcpAdvanced),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_dlp_advanced: {
        value: cdktf.stringToHclTerraform(this._guiDlpAdvanced),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_dlp_profile: {
        value: cdktf.stringToHclTerraform(this._guiDlpProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_dns_database: {
        value: cdktf.stringToHclTerraform(this._guiDnsDatabase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_dnsfilter: {
        value: cdktf.stringToHclTerraform(this._guiDnsfilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_domain_ip_reputation: {
        value: cdktf.stringToHclTerraform(this._guiDomainIpReputation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_dos_policy: {
        value: cdktf.stringToHclTerraform(this._guiDosPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_dynamic_device_os_id: {
        value: cdktf.stringToHclTerraform(this._guiDynamicDeviceOsId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_dynamic_profile_display: {
        value: cdktf.stringToHclTerraform(this._guiDynamicProfileDisplay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_dynamic_routing: {
        value: cdktf.stringToHclTerraform(this._guiDynamicRouting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_email_collection: {
        value: cdktf.stringToHclTerraform(this._guiEmailCollection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_endpoint_control: {
        value: cdktf.stringToHclTerraform(this._guiEndpointControl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_endpoint_control_advanced: {
        value: cdktf.stringToHclTerraform(this._guiEndpointControlAdvanced),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_enforce_change_summary: {
        value: cdktf.stringToHclTerraform(this._guiEnforceChangeSummary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_explicit_proxy: {
        value: cdktf.stringToHclTerraform(this._guiExplicitProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_file_filter: {
        value: cdktf.stringToHclTerraform(this._guiFileFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_fortiap_split_tunneling: {
        value: cdktf.stringToHclTerraform(this._guiFortiapSplitTunneling),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_fortiextender_controller: {
        value: cdktf.stringToHclTerraform(this._guiFortiextenderController),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_gtp: {
        value: cdktf.stringToHclTerraform(this._guiGtp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_icap: {
        value: cdktf.stringToHclTerraform(this._guiIcap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_implicit_policy: {
        value: cdktf.stringToHclTerraform(this._guiImplicitPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_ips: {
        value: cdktf.stringToHclTerraform(this._guiIps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_load_balance: {
        value: cdktf.stringToHclTerraform(this._guiLoadBalance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_local_in_policy: {
        value: cdktf.stringToHclTerraform(this._guiLocalInPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_local_reports: {
        value: cdktf.stringToHclTerraform(this._guiLocalReports),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_multicast_policy: {
        value: cdktf.stringToHclTerraform(this._guiMulticastPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_multiple_interface_policy: {
        value: cdktf.stringToHclTerraform(this._guiMultipleInterfacePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_multiple_utm_profiles: {
        value: cdktf.stringToHclTerraform(this._guiMultipleUtmProfiles),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_nat46_64: {
        value: cdktf.stringToHclTerraform(this._guiNat4664),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_object_colors: {
        value: cdktf.stringToHclTerraform(this._guiObjectColors),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_ot: {
        value: cdktf.stringToHclTerraform(this._guiOt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_per_policy_disclaimer: {
        value: cdktf.stringToHclTerraform(this._guiPerPolicyDisclaimer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_policy_based_ipsec: {
        value: cdktf.stringToHclTerraform(this._guiPolicyBasedIpsec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_policy_disclaimer: {
        value: cdktf.stringToHclTerraform(this._guiPolicyDisclaimer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_proxy_inspection: {
        value: cdktf.stringToHclTerraform(this._guiProxyInspection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_replacement_message_groups: {
        value: cdktf.stringToHclTerraform(this._guiReplacementMessageGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_route_tag_address_creation: {
        value: cdktf.stringToHclTerraform(this._guiRouteTagAddressCreation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_security_profile_group: {
        value: cdktf.stringToHclTerraform(this._guiSecurityProfileGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_spamfilter: {
        value: cdktf.stringToHclTerraform(this._guiSpamfilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_sslvpn: {
        value: cdktf.stringToHclTerraform(this._guiSslvpn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_sslvpn_clients: {
        value: cdktf.stringToHclTerraform(this._guiSslvpnClients),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_sslvpn_personal_bookmarks: {
        value: cdktf.stringToHclTerraform(this._guiSslvpnPersonalBookmarks),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_sslvpn_realms: {
        value: cdktf.stringToHclTerraform(this._guiSslvpnRealms),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_switch_controller: {
        value: cdktf.stringToHclTerraform(this._guiSwitchController),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_threat_weight: {
        value: cdktf.stringToHclTerraform(this._guiThreatWeight),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_traffic_shaping: {
        value: cdktf.stringToHclTerraform(this._guiTrafficShaping),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_videofilter: {
        value: cdktf.stringToHclTerraform(this._guiVideofilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_virtual_patch_profile: {
        value: cdktf.stringToHclTerraform(this._guiVirtualPatchProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_voip_profile: {
        value: cdktf.stringToHclTerraform(this._guiVoipProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_vpn: {
        value: cdktf.stringToHclTerraform(this._guiVpn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_waf_profile: {
        value: cdktf.stringToHclTerraform(this._guiWafProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_wan_load_balancing: {
        value: cdktf.stringToHclTerraform(this._guiWanLoadBalancing),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_wanopt_cache: {
        value: cdktf.stringToHclTerraform(this._guiWanoptCache),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_webfilter: {
        value: cdktf.stringToHclTerraform(this._guiWebfilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_webfilter_advanced: {
        value: cdktf.stringToHclTerraform(this._guiWebfilterAdvanced),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_wireless_controller: {
        value: cdktf.stringToHclTerraform(this._guiWirelessController),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_ztna: {
        value: cdktf.stringToHclTerraform(this._guiZtna),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      h323_direct_model: {
        value: cdktf.stringToHclTerraform(this._h323DirectModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_external_dest: {
        value: cdktf.stringToHclTerraform(this._httpExternalDest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hyperscale_default_policy_action: {
        value: cdktf.stringToHclTerraform(this._hyperscaleDefaultPolicyAction),
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
      ike_dn_format: {
        value: cdktf.stringToHclTerraform(this._ikeDnFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_policy_route: {
        value: cdktf.stringToHclTerraform(this._ikePolicyRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_port: {
        value: cdktf.numberToHclTerraform(this._ikePort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ike_quick_crash_detect: {
        value: cdktf.stringToHclTerraform(this._ikeQuickCrashDetect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_session_resume: {
        value: cdktf.stringToHclTerraform(this._ikeSessionResume),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_tcp_port: {
        value: cdktf.numberToHclTerraform(this._ikeTcpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      implicit_allow_dns: {
        value: cdktf.stringToHclTerraform(this._implicitAllowDns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service_app_ctrl_size: {
        value: cdktf.numberToHclTerraform(this._internetServiceAppCtrlSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      internet_service_database_cache: {
        value: cdktf.stringToHclTerraform(this._internetServiceDatabaseCache),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intree_ses_best_route: {
        value: cdktf.stringToHclTerraform(this._intreeSesBestRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ip),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ip6: {
        value: cdktf.stringToHclTerraform(this._ip6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lan_extension_controller_addr: {
        value: cdktf.stringToHclTerraform(this._lanExtensionControllerAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link_down_access: {
        value: cdktf.stringToHclTerraform(this._linkDownAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lldp_reception: {
        value: cdktf.stringToHclTerraform(this._lldpReception),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lldp_transmission: {
        value: cdktf.stringToHclTerraform(this._lldpTransmission),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location_id: {
        value: cdktf.stringToHclTerraform(this._locationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_ttl: {
        value: cdktf.numberToHclTerraform(this._macTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      manageip: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._manageip),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      manageip6: {
        value: cdktf.stringToHclTerraform(this._manageip6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      motherboard_traffic_forwarding: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._motherboardTrafficForwarding),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      multicast_forward: {
        value: cdktf.stringToHclTerraform(this._multicastForward),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multicast_skip_policy: {
        value: cdktf.stringToHclTerraform(this._multicastSkipPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multicast_ttl_notchange: {
        value: cdktf.stringToHclTerraform(this._multicastTtlNotchange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat46_force_ipv4_packet_forwarding: {
        value: cdktf.stringToHclTerraform(this._nat46ForceIpv4PacketForwarding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat46_generate_ipv6_fragment_header: {
        value: cdktf.stringToHclTerraform(this._nat46GenerateIpv6FragmentHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat64_force_ipv6_packet_forwarding: {
        value: cdktf.stringToHclTerraform(this._nat64ForceIpv6PacketForwarding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ngfw_mode: {
        value: cdktf.stringToHclTerraform(this._ngfwMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nonat_eif_key_sel: {
        value: cdktf.stringToHclTerraform(this._nonatEifKeySel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      npu_group_id: {
        value: cdktf.numberToHclTerraform(this._npuGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      opmode: {
        value: cdktf.stringToHclTerraform(this._opmode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pfcp_monitor_mode: {
        value: cdktf.stringToHclTerraform(this._pfcpMonitorMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_offload_level: {
        value: cdktf.stringToHclTerraform(this._policyOffloadLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prp_trailer_action: {
        value: cdktf.stringToHclTerraform(this._prpTrailerAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sccp_port: {
        value: cdktf.numberToHclTerraform(this._sccpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sctp_session_without_init: {
        value: cdktf.stringToHclTerraform(this._sctpSessionWithoutInit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ses_denied_multicast_traffic: {
        value: cdktf.stringToHclTerraform(this._sesDeniedMulticastTraffic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ses_denied_traffic: {
        value: cdktf.stringToHclTerraform(this._sesDeniedTraffic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_insert_trial: {
        value: cdktf.stringToHclTerraform(this._sessionInsertTrial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sip_expectation: {
        value: cdktf.stringToHclTerraform(this._sipExpectation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sip_nat_trace: {
        value: cdktf.stringToHclTerraform(this._sipNatTrace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sip_ssl_port: {
        value: cdktf.numberToHclTerraform(this._sipSslPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sip_tcp_port: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._sipTcpPort),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      sip_udp_port: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._sipUdpPort),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      snat_hairpin_traffic: {
        value: cdktf.stringToHclTerraform(this._snatHairpinTraffic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strict_src_check: {
        value: cdktf.stringToHclTerraform(this._strictSrcCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_session_without_syn: {
        value: cdktf.stringToHclTerraform(this._tcpSessionWithoutSyn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trap_local_session: {
        value: cdktf.stringToHclTerraform(this._trapLocalSession),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trap_session_flag: {
        value: cdktf.stringToHclTerraform(this._trapSessionFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      utf8_spam_tagging: {
        value: cdktf.stringToHclTerraform(this._utf8SpamTagging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      v4_ecmp_mode: {
        value: cdktf.stringToHclTerraform(this._v4EcmpMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom_type: {
        value: cdktf.stringToHclTerraform(this._vdomType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_stats_log: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vpnStatsLog),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vpn_stats_period: {
        value: cdktf.numberToHclTerraform(this._vpnStatsPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wccp_cache_engine: {
        value: cdktf.stringToHclTerraform(this._wccpCacheEngine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
