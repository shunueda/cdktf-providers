// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#action FirewallPolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#anti_replay FirewallPolicy#anti_replay}
  */
  readonly antiReplay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#app_monitor FirewallPolicy#app_monitor}
  */
  readonly appMonitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#application_list FirewallPolicy#application_list}
  */
  readonly applicationList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#auth_cert FirewallPolicy#auth_cert}
  */
  readonly authCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#auth_path FirewallPolicy#auth_path}
  */
  readonly authPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#auth_redirect_addr FirewallPolicy#auth_redirect_addr}
  */
  readonly authRedirectAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#auto_asic_offload FirewallPolicy#auto_asic_offload}
  */
  readonly autoAsicOffload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#av_profile FirewallPolicy#av_profile}
  */
  readonly avProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#block_notification FirewallPolicy#block_notification}
  */
  readonly blockNotification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#captive_portal_exempt FirewallPolicy#captive_portal_exempt}
  */
  readonly captivePortalExempt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#capture_packet FirewallPolicy#capture_packet}
  */
  readonly capturePacket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#casb_profile FirewallPolicy#casb_profile}
  */
  readonly casbProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#cifs_profile FirewallPolicy#cifs_profile}
  */
  readonly cifsProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#comments FirewallPolicy#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#decrypted_traffic_mirror FirewallPolicy#decrypted_traffic_mirror}
  */
  readonly decryptedTrafficMirror?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#delay_tcp_npu_session FirewallPolicy#delay_tcp_npu_session}
  */
  readonly delayTcpNpuSession?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#diameter_filter_profile FirewallPolicy#diameter_filter_profile}
  */
  readonly diameterFilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#diffserv_copy FirewallPolicy#diffserv_copy}
  */
  readonly diffservCopy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#diffserv_forward FirewallPolicy#diffserv_forward}
  */
  readonly diffservForward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#diffserv_reverse FirewallPolicy#diffserv_reverse}
  */
  readonly diffservReverse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#diffservcode_forward FirewallPolicy#diffservcode_forward}
  */
  readonly diffservcodeForward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#diffservcode_rev FirewallPolicy#diffservcode_rev}
  */
  readonly diffservcodeRev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#disclaimer FirewallPolicy#disclaimer}
  */
  readonly disclaimer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#dlp_profile FirewallPolicy#dlp_profile}
  */
  readonly dlpProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#dlp_sensor FirewallPolicy#dlp_sensor}
  */
  readonly dlpSensor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#dnsfilter_profile FirewallPolicy#dnsfilter_profile}
  */
  readonly dnsfilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#dsri FirewallPolicy#dsri}
  */
  readonly dsri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#dstaddr6_negate FirewallPolicy#dstaddr6_negate}
  */
  readonly dstaddr6Negate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#dstaddr_negate FirewallPolicy#dstaddr_negate}
  */
  readonly dstaddrNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#dynamic_shaping FirewallPolicy#dynamic_shaping}
  */
  readonly dynamicShaping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#dynamic_sort_subtable FirewallPolicy#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#email_collect FirewallPolicy#email_collect}
  */
  readonly emailCollect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#emailfilter_profile FirewallPolicy#emailfilter_profile}
  */
  readonly emailfilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#fec FirewallPolicy#fec}
  */
  readonly fec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#file_filter_profile FirewallPolicy#file_filter_profile}
  */
  readonly fileFilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#firewall_session_dirty FirewallPolicy#firewall_session_dirty}
  */
  readonly firewallSessionDirty?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#fixedport FirewallPolicy#fixedport}
  */
  readonly fixedport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#fsso FirewallPolicy#fsso}
  */
  readonly fsso?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#fsso_agent_for_ntlm FirewallPolicy#fsso_agent_for_ntlm}
  */
  readonly fssoAgentForNtlm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#geoip_anycast FirewallPolicy#geoip_anycast}
  */
  readonly geoipAnycast?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#geoip_match FirewallPolicy#geoip_match}
  */
  readonly geoipMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#get_all_tables FirewallPolicy#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#global_label FirewallPolicy#global_label}
  */
  readonly globalLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#http_policy_redirect FirewallPolicy#http_policy_redirect}
  */
  readonly httpPolicyRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#icap_profile FirewallPolicy#icap_profile}
  */
  readonly icapProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#id FirewallPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#identity_based_route FirewallPolicy#identity_based_route}
  */
  readonly identityBasedRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#inbound FirewallPolicy#inbound}
  */
  readonly inbound?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#inspection_mode FirewallPolicy#inspection_mode}
  */
  readonly inspectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#internet_service FirewallPolicy#internet_service}
  */
  readonly internetService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#internet_service6 FirewallPolicy#internet_service6}
  */
  readonly internetService6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#internet_service6_negate FirewallPolicy#internet_service6_negate}
  */
  readonly internetService6Negate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#internet_service6_src FirewallPolicy#internet_service6_src}
  */
  readonly internetService6Src?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#internet_service6_src_negate FirewallPolicy#internet_service6_src_negate}
  */
  readonly internetService6SrcNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#internet_service_negate FirewallPolicy#internet_service_negate}
  */
  readonly internetServiceNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#internet_service_src FirewallPolicy#internet_service_src}
  */
  readonly internetServiceSrc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#internet_service_src_negate FirewallPolicy#internet_service_src_negate}
  */
  readonly internetServiceSrcNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#ippool FirewallPolicy#ippool}
  */
  readonly ippool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#ips_sensor FirewallPolicy#ips_sensor}
  */
  readonly ipsSensor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#ips_voip_filter FirewallPolicy#ips_voip_filter}
  */
  readonly ipsVoipFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#label FirewallPolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#learning_mode FirewallPolicy#learning_mode}
  */
  readonly learningMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#log_http_transaction FirewallPolicy#log_http_transaction}
  */
  readonly logHttpTransaction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#logtraffic FirewallPolicy#logtraffic}
  */
  readonly logtraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#logtraffic_start FirewallPolicy#logtraffic_start}
  */
  readonly logtrafficStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#match_vip FirewallPolicy#match_vip}
  */
  readonly matchVip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#match_vip_only FirewallPolicy#match_vip_only}
  */
  readonly matchVipOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#nat FirewallPolicy#nat}
  */
  readonly nat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#nat46 FirewallPolicy#nat46}
  */
  readonly nat46?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#nat64 FirewallPolicy#nat64}
  */
  readonly nat64?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#natinbound FirewallPolicy#natinbound}
  */
  readonly natinbound?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#natip FirewallPolicy#natip}
  */
  readonly natip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#natoutbound FirewallPolicy#natoutbound}
  */
  readonly natoutbound?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#np_acceleration FirewallPolicy#np_acceleration}
  */
  readonly npAcceleration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#ntlm FirewallPolicy#ntlm}
  */
  readonly ntlm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#ntlm_guest FirewallPolicy#ntlm_guest}
  */
  readonly ntlmGuest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#outbound FirewallPolicy#outbound}
  */
  readonly outbound?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#passive_wan_health_measurement FirewallPolicy#passive_wan_health_measurement}
  */
  readonly passiveWanHealthMeasurement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#pcp_inbound FirewallPolicy#pcp_inbound}
  */
  readonly pcpInbound?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#pcp_outbound FirewallPolicy#pcp_outbound}
  */
  readonly pcpOutbound?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#per_ip_shaper FirewallPolicy#per_ip_shaper}
  */
  readonly perIpShaper?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#permit_any_host FirewallPolicy#permit_any_host}
  */
  readonly permitAnyHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#permit_stun_host FirewallPolicy#permit_stun_host}
  */
  readonly permitStunHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#policy_expiry FirewallPolicy#policy_expiry}
  */
  readonly policyExpiry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#policy_expiry_date FirewallPolicy#policy_expiry_date}
  */
  readonly policyExpiryDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#policy_expiry_date_utc FirewallPolicy#policy_expiry_date_utc}
  */
  readonly policyExpiryDateUtc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#policyid FirewallPolicy#policyid}
  */
  readonly policyid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#port_preserve FirewallPolicy#port_preserve}
  */
  readonly portPreserve?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#port_random FirewallPolicy#port_random}
  */
  readonly portRandom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#profile_group FirewallPolicy#profile_group}
  */
  readonly profileGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#profile_protocol_options FirewallPolicy#profile_protocol_options}
  */
  readonly profileProtocolOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#profile_type FirewallPolicy#profile_type}
  */
  readonly profileType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#radius_ip_auth_bypass FirewallPolicy#radius_ip_auth_bypass}
  */
  readonly radiusIpAuthBypass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#radius_mac_auth_bypass FirewallPolicy#radius_mac_auth_bypass}
  */
  readonly radiusMacAuthBypass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#redirect_url FirewallPolicy#redirect_url}
  */
  readonly redirectUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#replacemsg_override_group FirewallPolicy#replacemsg_override_group}
  */
  readonly replacemsgOverrideGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#reputation_direction FirewallPolicy#reputation_direction}
  */
  readonly reputationDirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#reputation_direction6 FirewallPolicy#reputation_direction6}
  */
  readonly reputationDirection6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#reputation_minimum FirewallPolicy#reputation_minimum}
  */
  readonly reputationMinimum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#reputation_minimum6 FirewallPolicy#reputation_minimum6}
  */
  readonly reputationMinimum6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#rsso FirewallPolicy#rsso}
  */
  readonly rsso?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#rtp_nat FirewallPolicy#rtp_nat}
  */
  readonly rtpNat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#saml_server FirewallPolicy#saml_server}
  */
  readonly samlServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#scan_botnet_connections FirewallPolicy#scan_botnet_connections}
  */
  readonly scanBotnetConnections?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#schedule FirewallPolicy#schedule}
  */
  readonly schedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#schedule_timeout FirewallPolicy#schedule_timeout}
  */
  readonly scheduleTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#scim FirewallPolicy#scim}
  */
  readonly scim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#sctp_filter_profile FirewallPolicy#sctp_filter_profile}
  */
  readonly sctpFilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#send_deny_packet FirewallPolicy#send_deny_packet}
  */
  readonly sendDenyPacket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#service_negate FirewallPolicy#service_negate}
  */
  readonly serviceNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#session_ttl FirewallPolicy#session_ttl}
  */
  readonly sessionTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#sgt_check FirewallPolicy#sgt_check}
  */
  readonly sgtCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#spamfilter_profile FirewallPolicy#spamfilter_profile}
  */
  readonly spamfilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#srcaddr6_negate FirewallPolicy#srcaddr6_negate}
  */
  readonly srcaddr6Negate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#srcaddr_negate FirewallPolicy#srcaddr_negate}
  */
  readonly srcaddrNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#ssh_filter_profile FirewallPolicy#ssh_filter_profile}
  */
  readonly sshFilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#ssh_policy_redirect FirewallPolicy#ssh_policy_redirect}
  */
  readonly sshPolicyRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#ssl_mirror FirewallPolicy#ssl_mirror}
  */
  readonly sslMirror?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#ssl_ssh_profile FirewallPolicy#ssl_ssh_profile}
  */
  readonly sslSshProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#status FirewallPolicy#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#tcp_mss_receiver FirewallPolicy#tcp_mss_receiver}
  */
  readonly tcpMssReceiver?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#tcp_mss_sender FirewallPolicy#tcp_mss_sender}
  */
  readonly tcpMssSender?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#tcp_session_without_syn FirewallPolicy#tcp_session_without_syn}
  */
  readonly tcpSessionWithoutSyn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#timeout_send_rst FirewallPolicy#timeout_send_rst}
  */
  readonly timeoutSendRst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#tos FirewallPolicy#tos}
  */
  readonly tos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#tos_mask FirewallPolicy#tos_mask}
  */
  readonly tosMask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#tos_negate FirewallPolicy#tos_negate}
  */
  readonly tosNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#traffic_shaper FirewallPolicy#traffic_shaper}
  */
  readonly trafficShaper?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#traffic_shaper_reverse FirewallPolicy#traffic_shaper_reverse}
  */
  readonly trafficShaperReverse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#utm_status FirewallPolicy#utm_status}
  */
  readonly utmStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#uuid FirewallPolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#vdomparam FirewallPolicy#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#videofilter_profile FirewallPolicy#videofilter_profile}
  */
  readonly videofilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#virtual_patch_profile FirewallPolicy#virtual_patch_profile}
  */
  readonly virtualPatchProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#vlan_cos_fwd FirewallPolicy#vlan_cos_fwd}
  */
  readonly vlanCosFwd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#vlan_cos_rev FirewallPolicy#vlan_cos_rev}
  */
  readonly vlanCosRev?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#vlan_filter FirewallPolicy#vlan_filter}
  */
  readonly vlanFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#voip_profile FirewallPolicy#voip_profile}
  */
  readonly voipProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#vpntunnel FirewallPolicy#vpntunnel}
  */
  readonly vpntunnel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#waf_profile FirewallPolicy#waf_profile}
  */
  readonly wafProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#wanopt FirewallPolicy#wanopt}
  */
  readonly wanopt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#wanopt_detection FirewallPolicy#wanopt_detection}
  */
  readonly wanoptDetection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#wanopt_passive_opt FirewallPolicy#wanopt_passive_opt}
  */
  readonly wanoptPassiveOpt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#wanopt_peer FirewallPolicy#wanopt_peer}
  */
  readonly wanoptPeer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#wanopt_profile FirewallPolicy#wanopt_profile}
  */
  readonly wanoptProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#wccp FirewallPolicy#wccp}
  */
  readonly wccp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#webcache FirewallPolicy#webcache}
  */
  readonly webcache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#webcache_https FirewallPolicy#webcache_https}
  */
  readonly webcacheHttps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#webfilter_profile FirewallPolicy#webfilter_profile}
  */
  readonly webfilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#webproxy_forward_server FirewallPolicy#webproxy_forward_server}
  */
  readonly webproxyForwardServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#webproxy_profile FirewallPolicy#webproxy_profile}
  */
  readonly webproxyProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#wsso FirewallPolicy#wsso}
  */
  readonly wsso?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#ztna_device_ownership FirewallPolicy#ztna_device_ownership}
  */
  readonly ztnaDeviceOwnership?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#ztna_ems_tag_negate FirewallPolicy#ztna_ems_tag_negate}
  */
  readonly ztnaEmsTagNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#ztna_policy_redirect FirewallPolicy#ztna_policy_redirect}
  */
  readonly ztnaPolicyRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#ztna_status FirewallPolicy#ztna_status}
  */
  readonly ztnaStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#ztna_tags_match_logic FirewallPolicy#ztna_tags_match_logic}
  */
  readonly ztnaTagsMatchLogic?: string;
  /**
  * app_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#app_category FirewallPolicy#app_category}
  */
  readonly appCategory?: FirewallPolicyAppCategory[] | cdktf.IResolvable;
  /**
  * app_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#app_group FirewallPolicy#app_group}
  */
  readonly appGroup?: FirewallPolicyAppGroup[] | cdktf.IResolvable;
  /**
  * application block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#application FirewallPolicy#application}
  */
  readonly application?: FirewallPolicyApplication[] | cdktf.IResolvable;
  /**
  * custom_log_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#custom_log_fields FirewallPolicy#custom_log_fields}
  */
  readonly customLogFields?: FirewallPolicyCustomLogFields[] | cdktf.IResolvable;
  /**
  * devices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#devices FirewallPolicy#devices}
  */
  readonly devices?: FirewallPolicyDevices[] | cdktf.IResolvable;
  /**
  * dstaddr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#dstaddr FirewallPolicy#dstaddr}
  */
  readonly dstaddr?: FirewallPolicyDstaddr[] | cdktf.IResolvable;
  /**
  * dstaddr6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#dstaddr6 FirewallPolicy#dstaddr6}
  */
  readonly dstaddr6?: FirewallPolicyDstaddr6[] | cdktf.IResolvable;
  /**
  * dstintf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#dstintf FirewallPolicy#dstintf}
  */
  readonly dstintf: FirewallPolicyDstintf[] | cdktf.IResolvable;
  /**
  * fsso_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#fsso_groups FirewallPolicy#fsso_groups}
  */
  readonly fssoGroups?: FirewallPolicyFssoGroups[] | cdktf.IResolvable;
  /**
  * groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#groups FirewallPolicy#groups}
  */
  readonly groups?: FirewallPolicyGroups[] | cdktf.IResolvable;
  /**
  * internet_service6_custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#internet_service6_custom FirewallPolicy#internet_service6_custom}
  */
  readonly internetService6Custom?: FirewallPolicyInternetService6Custom[] | cdktf.IResolvable;
  /**
  * internet_service6_custom_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#internet_service6_custom_group FirewallPolicy#internet_service6_custom_group}
  */
  readonly internetService6CustomGroup?: FirewallPolicyInternetService6CustomGroup[] | cdktf.IResolvable;
  /**
  * internet_service6_fortiguard block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#internet_service6_fortiguard FirewallPolicy#internet_service6_fortiguard}
  */
  readonly internetService6Fortiguard?: FirewallPolicyInternetService6Fortiguard[] | cdktf.IResolvable;
  /**
  * internet_service6_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#internet_service6_group FirewallPolicy#internet_service6_group}
  */
  readonly internetService6Group?: FirewallPolicyInternetService6Group[] | cdktf.IResolvable;
  /**
  * internet_service6_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#internet_service6_name FirewallPolicy#internet_service6_name}
  */
  readonly internetService6Name?: FirewallPolicyInternetService6Name[] | cdktf.IResolvable;
  /**
  * internet_service6_src_custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#internet_service6_src_custom FirewallPolicy#internet_service6_src_custom}
  */
  readonly internetService6SrcCustom?: FirewallPolicyInternetService6SrcCustom[] | cdktf.IResolvable;
  /**
  * internet_service6_src_custom_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#internet_service6_src_custom_group FirewallPolicy#internet_service6_src_custom_group}
  */
  readonly internetService6SrcCustomGroup?: FirewallPolicyInternetService6SrcCustomGroup[] | cdktf.IResolvable;
  /**
  * internet_service6_src_fortiguard block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#internet_service6_src_fortiguard FirewallPolicy#internet_service6_src_fortiguard}
  */
  readonly internetService6SrcFortiguard?: FirewallPolicyInternetService6SrcFortiguard[] | cdktf.IResolvable;
  /**
  * internet_service6_src_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#internet_service6_src_group FirewallPolicy#internet_service6_src_group}
  */
  readonly internetService6SrcGroup?: FirewallPolicyInternetService6SrcGroup[] | cdktf.IResolvable;
  /**
  * internet_service6_src_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#internet_service6_src_name FirewallPolicy#internet_service6_src_name}
  */
  readonly internetService6SrcName?: FirewallPolicyInternetService6SrcName[] | cdktf.IResolvable;
  /**
  * internet_service_custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#internet_service_custom FirewallPolicy#internet_service_custom}
  */
  readonly internetServiceCustom?: FirewallPolicyInternetServiceCustom[] | cdktf.IResolvable;
  /**
  * internet_service_custom_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#internet_service_custom_group FirewallPolicy#internet_service_custom_group}
  */
  readonly internetServiceCustomGroup?: FirewallPolicyInternetServiceCustomGroup[] | cdktf.IResolvable;
  /**
  * internet_service_fortiguard block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#internet_service_fortiguard FirewallPolicy#internet_service_fortiguard}
  */
  readonly internetServiceFortiguard?: FirewallPolicyInternetServiceFortiguard[] | cdktf.IResolvable;
  /**
  * internet_service_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#internet_service_group FirewallPolicy#internet_service_group}
  */
  readonly internetServiceGroup?: FirewallPolicyInternetServiceGroup[] | cdktf.IResolvable;
  /**
  * internet_service_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#internet_service_id FirewallPolicy#internet_service_id}
  */
  readonly internetServiceId?: FirewallPolicyInternetServiceId[] | cdktf.IResolvable;
  /**
  * internet_service_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#internet_service_name FirewallPolicy#internet_service_name}
  */
  readonly internetServiceName?: FirewallPolicyInternetServiceName[] | cdktf.IResolvable;
  /**
  * internet_service_src_custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#internet_service_src_custom FirewallPolicy#internet_service_src_custom}
  */
  readonly internetServiceSrcCustom?: FirewallPolicyInternetServiceSrcCustom[] | cdktf.IResolvable;
  /**
  * internet_service_src_custom_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#internet_service_src_custom_group FirewallPolicy#internet_service_src_custom_group}
  */
  readonly internetServiceSrcCustomGroup?: FirewallPolicyInternetServiceSrcCustomGroup[] | cdktf.IResolvable;
  /**
  * internet_service_src_fortiguard block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#internet_service_src_fortiguard FirewallPolicy#internet_service_src_fortiguard}
  */
  readonly internetServiceSrcFortiguard?: FirewallPolicyInternetServiceSrcFortiguard[] | cdktf.IResolvable;
  /**
  * internet_service_src_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#internet_service_src_group FirewallPolicy#internet_service_src_group}
  */
  readonly internetServiceSrcGroup?: FirewallPolicyInternetServiceSrcGroup[] | cdktf.IResolvable;
  /**
  * internet_service_src_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#internet_service_src_id FirewallPolicy#internet_service_src_id}
  */
  readonly internetServiceSrcId?: FirewallPolicyInternetServiceSrcId[] | cdktf.IResolvable;
  /**
  * internet_service_src_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#internet_service_src_name FirewallPolicy#internet_service_src_name}
  */
  readonly internetServiceSrcName?: FirewallPolicyInternetServiceSrcName[] | cdktf.IResolvable;
  /**
  * network_service_dynamic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#network_service_dynamic FirewallPolicy#network_service_dynamic}
  */
  readonly networkServiceDynamic?: FirewallPolicyNetworkServiceDynamic[] | cdktf.IResolvable;
  /**
  * network_service_src_dynamic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#network_service_src_dynamic FirewallPolicy#network_service_src_dynamic}
  */
  readonly networkServiceSrcDynamic?: FirewallPolicyNetworkServiceSrcDynamic[] | cdktf.IResolvable;
  /**
  * ntlm_enabled_browsers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#ntlm_enabled_browsers FirewallPolicy#ntlm_enabled_browsers}
  */
  readonly ntlmEnabledBrowsers?: FirewallPolicyNtlmEnabledBrowsers[] | cdktf.IResolvable;
  /**
  * pcp_poolname block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#pcp_poolname FirewallPolicy#pcp_poolname}
  */
  readonly pcpPoolname?: FirewallPolicyPcpPoolname[] | cdktf.IResolvable;
  /**
  * poolname block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#poolname FirewallPolicy#poolname}
  */
  readonly poolname?: FirewallPolicyPoolname[] | cdktf.IResolvable;
  /**
  * poolname6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#poolname6 FirewallPolicy#poolname6}
  */
  readonly poolname6?: FirewallPolicyPoolname6[] | cdktf.IResolvable;
  /**
  * rtp_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#rtp_addr FirewallPolicy#rtp_addr}
  */
  readonly rtpAddr?: FirewallPolicyRtpAddr[] | cdktf.IResolvable;
  /**
  * scim_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#scim_groups FirewallPolicy#scim_groups}
  */
  readonly scimGroups?: FirewallPolicyScimGroups[] | cdktf.IResolvable;
  /**
  * scim_users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#scim_users FirewallPolicy#scim_users}
  */
  readonly scimUsers?: FirewallPolicyScimUsers[] | cdktf.IResolvable;
  /**
  * service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#service FirewallPolicy#service}
  */
  readonly service?: FirewallPolicyService[] | cdktf.IResolvable;
  /**
  * sgt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#sgt FirewallPolicy#sgt}
  */
  readonly sgt?: FirewallPolicySgt[] | cdktf.IResolvable;
  /**
  * src_vendor_mac block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#src_vendor_mac FirewallPolicy#src_vendor_mac}
  */
  readonly srcVendorMac?: FirewallPolicySrcVendorMac[] | cdktf.IResolvable;
  /**
  * srcaddr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#srcaddr FirewallPolicy#srcaddr}
  */
  readonly srcaddr?: FirewallPolicySrcaddr[] | cdktf.IResolvable;
  /**
  * srcaddr6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#srcaddr6 FirewallPolicy#srcaddr6}
  */
  readonly srcaddr6?: FirewallPolicySrcaddr6[] | cdktf.IResolvable;
  /**
  * srcintf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#srcintf FirewallPolicy#srcintf}
  */
  readonly srcintf: FirewallPolicySrcintf[] | cdktf.IResolvable;
  /**
  * ssl_mirror_intf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#ssl_mirror_intf FirewallPolicy#ssl_mirror_intf}
  */
  readonly sslMirrorIntf?: FirewallPolicySslMirrorIntf[] | cdktf.IResolvable;
  /**
  * url_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#url_category FirewallPolicy#url_category}
  */
  readonly urlCategory?: FirewallPolicyUrlCategory[] | cdktf.IResolvable;
  /**
  * users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#users FirewallPolicy#users}
  */
  readonly users?: FirewallPolicyUsers[] | cdktf.IResolvable;
  /**
  * ztna_ems_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#ztna_ems_tag FirewallPolicy#ztna_ems_tag}
  */
  readonly ztnaEmsTag?: FirewallPolicyZtnaEmsTag[] | cdktf.IResolvable;
  /**
  * ztna_ems_tag_secondary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#ztna_ems_tag_secondary FirewallPolicy#ztna_ems_tag_secondary}
  */
  readonly ztnaEmsTagSecondary?: FirewallPolicyZtnaEmsTagSecondary[] | cdktf.IResolvable;
  /**
  * ztna_geo_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#ztna_geo_tag FirewallPolicy#ztna_geo_tag}
  */
  readonly ztnaGeoTag?: FirewallPolicyZtnaGeoTag[] | cdktf.IResolvable;
}
export interface FirewallPolicyAppCategory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#id FirewallPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function firewallPolicyAppCategoryToTerraform(struct?: FirewallPolicyAppCategory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function firewallPolicyAppCategoryToHclTerraform(struct?: FirewallPolicyAppCategory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyAppCategoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyAppCategory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyAppCategory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class FirewallPolicyAppCategoryList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyAppCategory[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyAppCategoryOutputReference {
    return new FirewallPolicyAppCategoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyAppGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name?: string;
}

export function firewallPolicyAppGroupToTerraform(struct?: FirewallPolicyAppGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicyAppGroupToHclTerraform(struct?: FirewallPolicyAppGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyAppGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyAppGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyAppGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class FirewallPolicyAppGroupList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyAppGroup[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyAppGroupOutputReference {
    return new FirewallPolicyAppGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyApplication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#id FirewallPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function firewallPolicyApplicationToTerraform(struct?: FirewallPolicyApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function firewallPolicyApplicationToHclTerraform(struct?: FirewallPolicyApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyApplicationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyApplication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyApplication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class FirewallPolicyApplicationList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyApplication[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyApplicationOutputReference {
    return new FirewallPolicyApplicationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyCustomLogFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#field_id FirewallPolicy#field_id}
  */
  readonly fieldId?: string;
}

export function firewallPolicyCustomLogFieldsToTerraform(struct?: FirewallPolicyCustomLogFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_id: cdktf.stringToTerraform(struct!.fieldId),
  }
}


export function firewallPolicyCustomLogFieldsToHclTerraform(struct?: FirewallPolicyCustomLogFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_id: {
      value: cdktf.stringToHclTerraform(struct!.fieldId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyCustomLogFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyCustomLogFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldId = this._fieldId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyCustomLogFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldId = value.fieldId;
    }
  }

  // field_id - computed: false, optional: true, required: false
  private _fieldId?: string; 
  public get fieldId() {
    return this.getStringAttribute('field_id');
  }
  public set fieldId(value: string) {
    this._fieldId = value;
  }
  public resetFieldId() {
    this._fieldId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldIdInput() {
    return this._fieldId;
  }
}

export class FirewallPolicyCustomLogFieldsList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyCustomLogFields[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyCustomLogFieldsOutputReference {
    return new FirewallPolicyCustomLogFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyDevices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name?: string;
}

export function firewallPolicyDevicesToTerraform(struct?: FirewallPolicyDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicyDevicesToHclTerraform(struct?: FirewallPolicyDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class FirewallPolicyDevicesList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyDevices[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyDevicesOutputReference {
    return new FirewallPolicyDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyDstaddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name?: string;
}

export function firewallPolicyDstaddrToTerraform(struct?: FirewallPolicyDstaddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicyDstaddrToHclTerraform(struct?: FirewallPolicyDstaddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyDstaddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyDstaddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyDstaddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class FirewallPolicyDstaddrList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyDstaddr[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyDstaddrOutputReference {
    return new FirewallPolicyDstaddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyDstaddr6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name?: string;
}

export function firewallPolicyDstaddr6ToTerraform(struct?: FirewallPolicyDstaddr6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicyDstaddr6ToHclTerraform(struct?: FirewallPolicyDstaddr6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyDstaddr6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyDstaddr6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyDstaddr6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class FirewallPolicyDstaddr6List extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyDstaddr6[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyDstaddr6OutputReference {
    return new FirewallPolicyDstaddr6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyDstintf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name?: string;
}

export function firewallPolicyDstintfToTerraform(struct?: FirewallPolicyDstintf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicyDstintfToHclTerraform(struct?: FirewallPolicyDstintf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyDstintfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyDstintf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyDstintf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class FirewallPolicyDstintfList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyDstintf[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyDstintfOutputReference {
    return new FirewallPolicyDstintfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyFssoGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name?: string;
}

export function firewallPolicyFssoGroupsToTerraform(struct?: FirewallPolicyFssoGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicyFssoGroupsToHclTerraform(struct?: FirewallPolicyFssoGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyFssoGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyFssoGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyFssoGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class FirewallPolicyFssoGroupsList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyFssoGroups[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyFssoGroupsOutputReference {
    return new FirewallPolicyFssoGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name?: string;
}

export function firewallPolicyGroupsToTerraform(struct?: FirewallPolicyGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicyGroupsToHclTerraform(struct?: FirewallPolicyGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class FirewallPolicyGroupsList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyGroups[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyGroupsOutputReference {
    return new FirewallPolicyGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyInternetService6Custom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name?: string;
}

export function firewallPolicyInternetService6CustomToTerraform(struct?: FirewallPolicyInternetService6Custom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicyInternetService6CustomToHclTerraform(struct?: FirewallPolicyInternetService6Custom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyInternetService6CustomOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyInternetService6Custom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyInternetService6Custom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class FirewallPolicyInternetService6CustomList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyInternetService6Custom[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyInternetService6CustomOutputReference {
    return new FirewallPolicyInternetService6CustomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyInternetService6CustomGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name?: string;
}

export function firewallPolicyInternetService6CustomGroupToTerraform(struct?: FirewallPolicyInternetService6CustomGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicyInternetService6CustomGroupToHclTerraform(struct?: FirewallPolicyInternetService6CustomGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyInternetService6CustomGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyInternetService6CustomGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyInternetService6CustomGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class FirewallPolicyInternetService6CustomGroupList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyInternetService6CustomGroup[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyInternetService6CustomGroupOutputReference {
    return new FirewallPolicyInternetService6CustomGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyInternetService6Fortiguard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name?: string;
}

export function firewallPolicyInternetService6FortiguardToTerraform(struct?: FirewallPolicyInternetService6Fortiguard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicyInternetService6FortiguardToHclTerraform(struct?: FirewallPolicyInternetService6Fortiguard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyInternetService6FortiguardOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyInternetService6Fortiguard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyInternetService6Fortiguard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class FirewallPolicyInternetService6FortiguardList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyInternetService6Fortiguard[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyInternetService6FortiguardOutputReference {
    return new FirewallPolicyInternetService6FortiguardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyInternetService6Group {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name?: string;
}

export function firewallPolicyInternetService6GroupToTerraform(struct?: FirewallPolicyInternetService6Group | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicyInternetService6GroupToHclTerraform(struct?: FirewallPolicyInternetService6Group | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyInternetService6GroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyInternetService6Group | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyInternetService6Group | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class FirewallPolicyInternetService6GroupList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyInternetService6Group[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyInternetService6GroupOutputReference {
    return new FirewallPolicyInternetService6GroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyInternetService6Name {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name?: string;
}

export function firewallPolicyInternetService6NameToTerraform(struct?: FirewallPolicyInternetService6Name | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicyInternetService6NameToHclTerraform(struct?: FirewallPolicyInternetService6Name | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyInternetService6NameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyInternetService6Name | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyInternetService6Name | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class FirewallPolicyInternetService6NameList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyInternetService6Name[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyInternetService6NameOutputReference {
    return new FirewallPolicyInternetService6NameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyInternetService6SrcCustom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name?: string;
}

export function firewallPolicyInternetService6SrcCustomToTerraform(struct?: FirewallPolicyInternetService6SrcCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicyInternetService6SrcCustomToHclTerraform(struct?: FirewallPolicyInternetService6SrcCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyInternetService6SrcCustomOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyInternetService6SrcCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyInternetService6SrcCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class FirewallPolicyInternetService6SrcCustomList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyInternetService6SrcCustom[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyInternetService6SrcCustomOutputReference {
    return new FirewallPolicyInternetService6SrcCustomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyInternetService6SrcCustomGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name?: string;
}

export function firewallPolicyInternetService6SrcCustomGroupToTerraform(struct?: FirewallPolicyInternetService6SrcCustomGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicyInternetService6SrcCustomGroupToHclTerraform(struct?: FirewallPolicyInternetService6SrcCustomGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyInternetService6SrcCustomGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyInternetService6SrcCustomGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyInternetService6SrcCustomGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class FirewallPolicyInternetService6SrcCustomGroupList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyInternetService6SrcCustomGroup[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyInternetService6SrcCustomGroupOutputReference {
    return new FirewallPolicyInternetService6SrcCustomGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyInternetService6SrcFortiguard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name?: string;
}

export function firewallPolicyInternetService6SrcFortiguardToTerraform(struct?: FirewallPolicyInternetService6SrcFortiguard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicyInternetService6SrcFortiguardToHclTerraform(struct?: FirewallPolicyInternetService6SrcFortiguard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyInternetService6SrcFortiguardOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyInternetService6SrcFortiguard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyInternetService6SrcFortiguard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class FirewallPolicyInternetService6SrcFortiguardList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyInternetService6SrcFortiguard[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyInternetService6SrcFortiguardOutputReference {
    return new FirewallPolicyInternetService6SrcFortiguardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyInternetService6SrcGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name?: string;
}

export function firewallPolicyInternetService6SrcGroupToTerraform(struct?: FirewallPolicyInternetService6SrcGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicyInternetService6SrcGroupToHclTerraform(struct?: FirewallPolicyInternetService6SrcGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyInternetService6SrcGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyInternetService6SrcGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyInternetService6SrcGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class FirewallPolicyInternetService6SrcGroupList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyInternetService6SrcGroup[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyInternetService6SrcGroupOutputReference {
    return new FirewallPolicyInternetService6SrcGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyInternetService6SrcName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name?: string;
}

export function firewallPolicyInternetService6SrcNameToTerraform(struct?: FirewallPolicyInternetService6SrcName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicyInternetService6SrcNameToHclTerraform(struct?: FirewallPolicyInternetService6SrcName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyInternetService6SrcNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyInternetService6SrcName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyInternetService6SrcName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class FirewallPolicyInternetService6SrcNameList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyInternetService6SrcName[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyInternetService6SrcNameOutputReference {
    return new FirewallPolicyInternetService6SrcNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyInternetServiceCustom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name?: string;
}

export function firewallPolicyInternetServiceCustomToTerraform(struct?: FirewallPolicyInternetServiceCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicyInternetServiceCustomToHclTerraform(struct?: FirewallPolicyInternetServiceCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyInternetServiceCustomOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyInternetServiceCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyInternetServiceCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class FirewallPolicyInternetServiceCustomList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyInternetServiceCustom[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyInternetServiceCustomOutputReference {
    return new FirewallPolicyInternetServiceCustomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyInternetServiceCustomGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name?: string;
}

export function firewallPolicyInternetServiceCustomGroupToTerraform(struct?: FirewallPolicyInternetServiceCustomGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicyInternetServiceCustomGroupToHclTerraform(struct?: FirewallPolicyInternetServiceCustomGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyInternetServiceCustomGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyInternetServiceCustomGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyInternetServiceCustomGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class FirewallPolicyInternetServiceCustomGroupList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyInternetServiceCustomGroup[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyInternetServiceCustomGroupOutputReference {
    return new FirewallPolicyInternetServiceCustomGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyInternetServiceFortiguard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name?: string;
}

export function firewallPolicyInternetServiceFortiguardToTerraform(struct?: FirewallPolicyInternetServiceFortiguard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicyInternetServiceFortiguardToHclTerraform(struct?: FirewallPolicyInternetServiceFortiguard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyInternetServiceFortiguardOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyInternetServiceFortiguard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyInternetServiceFortiguard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class FirewallPolicyInternetServiceFortiguardList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyInternetServiceFortiguard[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyInternetServiceFortiguardOutputReference {
    return new FirewallPolicyInternetServiceFortiguardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyInternetServiceGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name?: string;
}

export function firewallPolicyInternetServiceGroupToTerraform(struct?: FirewallPolicyInternetServiceGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicyInternetServiceGroupToHclTerraform(struct?: FirewallPolicyInternetServiceGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyInternetServiceGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyInternetServiceGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyInternetServiceGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class FirewallPolicyInternetServiceGroupList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyInternetServiceGroup[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyInternetServiceGroupOutputReference {
    return new FirewallPolicyInternetServiceGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyInternetServiceId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#id FirewallPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function firewallPolicyInternetServiceIdToTerraform(struct?: FirewallPolicyInternetServiceId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function firewallPolicyInternetServiceIdToHclTerraform(struct?: FirewallPolicyInternetServiceId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyInternetServiceIdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyInternetServiceId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyInternetServiceId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class FirewallPolicyInternetServiceIdList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyInternetServiceId[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyInternetServiceIdOutputReference {
    return new FirewallPolicyInternetServiceIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyInternetServiceName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name?: string;
}

export function firewallPolicyInternetServiceNameToTerraform(struct?: FirewallPolicyInternetServiceName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicyInternetServiceNameToHclTerraform(struct?: FirewallPolicyInternetServiceName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyInternetServiceNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyInternetServiceName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyInternetServiceName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class FirewallPolicyInternetServiceNameList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyInternetServiceName[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyInternetServiceNameOutputReference {
    return new FirewallPolicyInternetServiceNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyInternetServiceSrcCustom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name?: string;
}

export function firewallPolicyInternetServiceSrcCustomToTerraform(struct?: FirewallPolicyInternetServiceSrcCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicyInternetServiceSrcCustomToHclTerraform(struct?: FirewallPolicyInternetServiceSrcCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyInternetServiceSrcCustomOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyInternetServiceSrcCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyInternetServiceSrcCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class FirewallPolicyInternetServiceSrcCustomList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyInternetServiceSrcCustom[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyInternetServiceSrcCustomOutputReference {
    return new FirewallPolicyInternetServiceSrcCustomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyInternetServiceSrcCustomGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name?: string;
}

export function firewallPolicyInternetServiceSrcCustomGroupToTerraform(struct?: FirewallPolicyInternetServiceSrcCustomGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicyInternetServiceSrcCustomGroupToHclTerraform(struct?: FirewallPolicyInternetServiceSrcCustomGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyInternetServiceSrcCustomGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyInternetServiceSrcCustomGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyInternetServiceSrcCustomGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class FirewallPolicyInternetServiceSrcCustomGroupList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyInternetServiceSrcCustomGroup[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyInternetServiceSrcCustomGroupOutputReference {
    return new FirewallPolicyInternetServiceSrcCustomGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyInternetServiceSrcFortiguard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name?: string;
}

export function firewallPolicyInternetServiceSrcFortiguardToTerraform(struct?: FirewallPolicyInternetServiceSrcFortiguard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicyInternetServiceSrcFortiguardToHclTerraform(struct?: FirewallPolicyInternetServiceSrcFortiguard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyInternetServiceSrcFortiguardOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyInternetServiceSrcFortiguard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyInternetServiceSrcFortiguard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class FirewallPolicyInternetServiceSrcFortiguardList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyInternetServiceSrcFortiguard[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyInternetServiceSrcFortiguardOutputReference {
    return new FirewallPolicyInternetServiceSrcFortiguardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyInternetServiceSrcGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name?: string;
}

export function firewallPolicyInternetServiceSrcGroupToTerraform(struct?: FirewallPolicyInternetServiceSrcGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicyInternetServiceSrcGroupToHclTerraform(struct?: FirewallPolicyInternetServiceSrcGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyInternetServiceSrcGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyInternetServiceSrcGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyInternetServiceSrcGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class FirewallPolicyInternetServiceSrcGroupList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyInternetServiceSrcGroup[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyInternetServiceSrcGroupOutputReference {
    return new FirewallPolicyInternetServiceSrcGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyInternetServiceSrcId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#id FirewallPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function firewallPolicyInternetServiceSrcIdToTerraform(struct?: FirewallPolicyInternetServiceSrcId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function firewallPolicyInternetServiceSrcIdToHclTerraform(struct?: FirewallPolicyInternetServiceSrcId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyInternetServiceSrcIdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyInternetServiceSrcId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyInternetServiceSrcId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class FirewallPolicyInternetServiceSrcIdList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyInternetServiceSrcId[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyInternetServiceSrcIdOutputReference {
    return new FirewallPolicyInternetServiceSrcIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyInternetServiceSrcName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name?: string;
}

export function firewallPolicyInternetServiceSrcNameToTerraform(struct?: FirewallPolicyInternetServiceSrcName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicyInternetServiceSrcNameToHclTerraform(struct?: FirewallPolicyInternetServiceSrcName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyInternetServiceSrcNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyInternetServiceSrcName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyInternetServiceSrcName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class FirewallPolicyInternetServiceSrcNameList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyInternetServiceSrcName[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyInternetServiceSrcNameOutputReference {
    return new FirewallPolicyInternetServiceSrcNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyNetworkServiceDynamic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name?: string;
}

export function firewallPolicyNetworkServiceDynamicToTerraform(struct?: FirewallPolicyNetworkServiceDynamic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicyNetworkServiceDynamicToHclTerraform(struct?: FirewallPolicyNetworkServiceDynamic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyNetworkServiceDynamicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyNetworkServiceDynamic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyNetworkServiceDynamic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class FirewallPolicyNetworkServiceDynamicList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyNetworkServiceDynamic[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyNetworkServiceDynamicOutputReference {
    return new FirewallPolicyNetworkServiceDynamicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyNetworkServiceSrcDynamic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name?: string;
}

export function firewallPolicyNetworkServiceSrcDynamicToTerraform(struct?: FirewallPolicyNetworkServiceSrcDynamic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicyNetworkServiceSrcDynamicToHclTerraform(struct?: FirewallPolicyNetworkServiceSrcDynamic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyNetworkServiceSrcDynamicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyNetworkServiceSrcDynamic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyNetworkServiceSrcDynamic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class FirewallPolicyNetworkServiceSrcDynamicList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyNetworkServiceSrcDynamic[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyNetworkServiceSrcDynamicOutputReference {
    return new FirewallPolicyNetworkServiceSrcDynamicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyNtlmEnabledBrowsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#user_agent_string FirewallPolicy#user_agent_string}
  */
  readonly userAgentString?: string;
}

export function firewallPolicyNtlmEnabledBrowsersToTerraform(struct?: FirewallPolicyNtlmEnabledBrowsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_agent_string: cdktf.stringToTerraform(struct!.userAgentString),
  }
}


export function firewallPolicyNtlmEnabledBrowsersToHclTerraform(struct?: FirewallPolicyNtlmEnabledBrowsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_agent_string: {
      value: cdktf.stringToHclTerraform(struct!.userAgentString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyNtlmEnabledBrowsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyNtlmEnabledBrowsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userAgentString !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAgentString = this._userAgentString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyNtlmEnabledBrowsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._userAgentString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._userAgentString = value.userAgentString;
    }
  }

  // user_agent_string - computed: false, optional: true, required: false
  private _userAgentString?: string; 
  public get userAgentString() {
    return this.getStringAttribute('user_agent_string');
  }
  public set userAgentString(value: string) {
    this._userAgentString = value;
  }
  public resetUserAgentString() {
    this._userAgentString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentStringInput() {
    return this._userAgentString;
  }
}

export class FirewallPolicyNtlmEnabledBrowsersList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyNtlmEnabledBrowsers[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyNtlmEnabledBrowsersOutputReference {
    return new FirewallPolicyNtlmEnabledBrowsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyPcpPoolname {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name?: string;
}

export function firewallPolicyPcpPoolnameToTerraform(struct?: FirewallPolicyPcpPoolname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicyPcpPoolnameToHclTerraform(struct?: FirewallPolicyPcpPoolname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyPcpPoolnameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyPcpPoolname | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyPcpPoolname | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class FirewallPolicyPcpPoolnameList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyPcpPoolname[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyPcpPoolnameOutputReference {
    return new FirewallPolicyPcpPoolnameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyPoolname {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name?: string;
}

export function firewallPolicyPoolnameToTerraform(struct?: FirewallPolicyPoolname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicyPoolnameToHclTerraform(struct?: FirewallPolicyPoolname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyPoolnameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyPoolname | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyPoolname | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class FirewallPolicyPoolnameList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyPoolname[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyPoolnameOutputReference {
    return new FirewallPolicyPoolnameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyPoolname6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name?: string;
}

export function firewallPolicyPoolname6ToTerraform(struct?: FirewallPolicyPoolname6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicyPoolname6ToHclTerraform(struct?: FirewallPolicyPoolname6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyPoolname6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyPoolname6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyPoolname6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class FirewallPolicyPoolname6List extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyPoolname6[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyPoolname6OutputReference {
    return new FirewallPolicyPoolname6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyRtpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name?: string;
}

export function firewallPolicyRtpAddrToTerraform(struct?: FirewallPolicyRtpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicyRtpAddrToHclTerraform(struct?: FirewallPolicyRtpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyRtpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyRtpAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyRtpAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class FirewallPolicyRtpAddrList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyRtpAddr[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyRtpAddrOutputReference {
    return new FirewallPolicyRtpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyScimGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name?: string;
}

export function firewallPolicyScimGroupsToTerraform(struct?: FirewallPolicyScimGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicyScimGroupsToHclTerraform(struct?: FirewallPolicyScimGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyScimGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyScimGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyScimGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class FirewallPolicyScimGroupsList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyScimGroups[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyScimGroupsOutputReference {
    return new FirewallPolicyScimGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyScimUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name?: string;
}

export function firewallPolicyScimUsersToTerraform(struct?: FirewallPolicyScimUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicyScimUsersToHclTerraform(struct?: FirewallPolicyScimUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyScimUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyScimUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyScimUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class FirewallPolicyScimUsersList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyScimUsers[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyScimUsersOutputReference {
    return new FirewallPolicyScimUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name?: string;
}

export function firewallPolicyServiceToTerraform(struct?: FirewallPolicyService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicyServiceToHclTerraform(struct?: FirewallPolicyService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class FirewallPolicyServiceList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyService[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyServiceOutputReference {
    return new FirewallPolicyServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicySgt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#id FirewallPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function firewallPolicySgtToTerraform(struct?: FirewallPolicySgt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function firewallPolicySgtToHclTerraform(struct?: FirewallPolicySgt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicySgtOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicySgt | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicySgt | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class FirewallPolicySgtList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicySgt[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicySgtOutputReference {
    return new FirewallPolicySgtOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicySrcVendorMac {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#id FirewallPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function firewallPolicySrcVendorMacToTerraform(struct?: FirewallPolicySrcVendorMac | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function firewallPolicySrcVendorMacToHclTerraform(struct?: FirewallPolicySrcVendorMac | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicySrcVendorMacOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicySrcVendorMac | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicySrcVendorMac | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class FirewallPolicySrcVendorMacList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicySrcVendorMac[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicySrcVendorMacOutputReference {
    return new FirewallPolicySrcVendorMacOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicySrcaddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name?: string;
}

export function firewallPolicySrcaddrToTerraform(struct?: FirewallPolicySrcaddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicySrcaddrToHclTerraform(struct?: FirewallPolicySrcaddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicySrcaddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicySrcaddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicySrcaddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class FirewallPolicySrcaddrList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicySrcaddr[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicySrcaddrOutputReference {
    return new FirewallPolicySrcaddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicySrcaddr6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name?: string;
}

export function firewallPolicySrcaddr6ToTerraform(struct?: FirewallPolicySrcaddr6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicySrcaddr6ToHclTerraform(struct?: FirewallPolicySrcaddr6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicySrcaddr6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicySrcaddr6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicySrcaddr6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class FirewallPolicySrcaddr6List extends cdktf.ComplexList {
  public internalValue? : FirewallPolicySrcaddr6[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicySrcaddr6OutputReference {
    return new FirewallPolicySrcaddr6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicySrcintf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name?: string;
}

export function firewallPolicySrcintfToTerraform(struct?: FirewallPolicySrcintf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicySrcintfToHclTerraform(struct?: FirewallPolicySrcintf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicySrcintfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicySrcintf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicySrcintf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class FirewallPolicySrcintfList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicySrcintf[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicySrcintfOutputReference {
    return new FirewallPolicySrcintfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicySslMirrorIntf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name?: string;
}

export function firewallPolicySslMirrorIntfToTerraform(struct?: FirewallPolicySslMirrorIntf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicySslMirrorIntfToHclTerraform(struct?: FirewallPolicySslMirrorIntf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicySslMirrorIntfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicySslMirrorIntf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicySslMirrorIntf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class FirewallPolicySslMirrorIntfList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicySslMirrorIntf[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicySslMirrorIntfOutputReference {
    return new FirewallPolicySslMirrorIntfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyUrlCategory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#id FirewallPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function firewallPolicyUrlCategoryToTerraform(struct?: FirewallPolicyUrlCategory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function firewallPolicyUrlCategoryToHclTerraform(struct?: FirewallPolicyUrlCategory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyUrlCategoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyUrlCategory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyUrlCategory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class FirewallPolicyUrlCategoryList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyUrlCategory[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyUrlCategoryOutputReference {
    return new FirewallPolicyUrlCategoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name?: string;
}

export function firewallPolicyUsersToTerraform(struct?: FirewallPolicyUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicyUsersToHclTerraform(struct?: FirewallPolicyUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class FirewallPolicyUsersList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyUsers[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyUsersOutputReference {
    return new FirewallPolicyUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyZtnaEmsTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name?: string;
}

export function firewallPolicyZtnaEmsTagToTerraform(struct?: FirewallPolicyZtnaEmsTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicyZtnaEmsTagToHclTerraform(struct?: FirewallPolicyZtnaEmsTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyZtnaEmsTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyZtnaEmsTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyZtnaEmsTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class FirewallPolicyZtnaEmsTagList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyZtnaEmsTag[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyZtnaEmsTagOutputReference {
    return new FirewallPolicyZtnaEmsTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyZtnaEmsTagSecondary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name?: string;
}

export function firewallPolicyZtnaEmsTagSecondaryToTerraform(struct?: FirewallPolicyZtnaEmsTagSecondary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicyZtnaEmsTagSecondaryToHclTerraform(struct?: FirewallPolicyZtnaEmsTagSecondary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyZtnaEmsTagSecondaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyZtnaEmsTagSecondary | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyZtnaEmsTagSecondary | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class FirewallPolicyZtnaEmsTagSecondaryList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyZtnaEmsTagSecondary[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyZtnaEmsTagSecondaryOutputReference {
    return new FirewallPolicyZtnaEmsTagSecondaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyZtnaGeoTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name?: string;
}

export function firewallPolicyZtnaGeoTagToTerraform(struct?: FirewallPolicyZtnaGeoTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicyZtnaGeoTagToHclTerraform(struct?: FirewallPolicyZtnaGeoTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyZtnaGeoTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyZtnaGeoTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyZtnaGeoTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}

export class FirewallPolicyZtnaGeoTagList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyZtnaGeoTag[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyZtnaGeoTagOutputReference {
    return new FirewallPolicyZtnaGeoTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy fortios_firewall_policy}
*/
export class FirewallPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_firewall_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallPolicy to import
  * @param importFromId The id of the existing FirewallPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_firewall_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy fortios_firewall_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_firewall_policy',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._antiReplay = config.antiReplay;
    this._appMonitor = config.appMonitor;
    this._applicationList = config.applicationList;
    this._authCert = config.authCert;
    this._authPath = config.authPath;
    this._authRedirectAddr = config.authRedirectAddr;
    this._autoAsicOffload = config.autoAsicOffload;
    this._avProfile = config.avProfile;
    this._blockNotification = config.blockNotification;
    this._captivePortalExempt = config.captivePortalExempt;
    this._capturePacket = config.capturePacket;
    this._casbProfile = config.casbProfile;
    this._cifsProfile = config.cifsProfile;
    this._comments = config.comments;
    this._decryptedTrafficMirror = config.decryptedTrafficMirror;
    this._delayTcpNpuSession = config.delayTcpNpuSession;
    this._diameterFilterProfile = config.diameterFilterProfile;
    this._diffservCopy = config.diffservCopy;
    this._diffservForward = config.diffservForward;
    this._diffservReverse = config.diffservReverse;
    this._diffservcodeForward = config.diffservcodeForward;
    this._diffservcodeRev = config.diffservcodeRev;
    this._disclaimer = config.disclaimer;
    this._dlpProfile = config.dlpProfile;
    this._dlpSensor = config.dlpSensor;
    this._dnsfilterProfile = config.dnsfilterProfile;
    this._dsri = config.dsri;
    this._dstaddr6Negate = config.dstaddr6Negate;
    this._dstaddrNegate = config.dstaddrNegate;
    this._dynamicShaping = config.dynamicShaping;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._emailCollect = config.emailCollect;
    this._emailfilterProfile = config.emailfilterProfile;
    this._fec = config.fec;
    this._fileFilterProfile = config.fileFilterProfile;
    this._firewallSessionDirty = config.firewallSessionDirty;
    this._fixedport = config.fixedport;
    this._fsso = config.fsso;
    this._fssoAgentForNtlm = config.fssoAgentForNtlm;
    this._geoipAnycast = config.geoipAnycast;
    this._geoipMatch = config.geoipMatch;
    this._getAllTables = config.fetchAllTables;
    this._globalLabel = config.globalLabel;
    this._httpPolicyRedirect = config.httpPolicyRedirect;
    this._icapProfile = config.icapProfile;
    this._id = config.id;
    this._identityBasedRoute = config.identityBasedRoute;
    this._inbound = config.inbound;
    this._inspectionMode = config.inspectionMode;
    this._internetService = config.internetService;
    this._internetService6 = config.internetService6;
    this._internetService6Negate = config.internetService6Negate;
    this._internetService6Src = config.internetService6Src;
    this._internetService6SrcNegate = config.internetService6SrcNegate;
    this._internetServiceNegate = config.internetServiceNegate;
    this._internetServiceSrc = config.internetServiceSrc;
    this._internetServiceSrcNegate = config.internetServiceSrcNegate;
    this._ippool = config.ippool;
    this._ipsSensor = config.ipsSensor;
    this._ipsVoipFilter = config.ipsVoipFilter;
    this._label = config.label;
    this._learningMode = config.learningMode;
    this._logHttpTransaction = config.logHttpTransaction;
    this._logtraffic = config.logtraffic;
    this._logtrafficStart = config.logtrafficStart;
    this._matchVip = config.matchVip;
    this._matchVipOnly = config.matchVipOnly;
    this._name = config.name;
    this._nat = config.nat;
    this._nat46 = config.nat46;
    this._nat64 = config.nat64;
    this._natinbound = config.natinbound;
    this._natip = config.natip;
    this._natoutbound = config.natoutbound;
    this._npAcceleration = config.npAcceleration;
    this._ntlm = config.ntlm;
    this._ntlmGuest = config.ntlmGuest;
    this._outbound = config.outbound;
    this._passiveWanHealthMeasurement = config.passiveWanHealthMeasurement;
    this._pcpInbound = config.pcpInbound;
    this._pcpOutbound = config.pcpOutbound;
    this._perIpShaper = config.perIpShaper;
    this._permitAnyHost = config.permitAnyHost;
    this._permitStunHost = config.permitStunHost;
    this._policyExpiry = config.policyExpiry;
    this._policyExpiryDate = config.policyExpiryDate;
    this._policyExpiryDateUtc = config.policyExpiryDateUtc;
    this._policyid = config.policyid;
    this._portPreserve = config.portPreserve;
    this._portRandom = config.portRandom;
    this._profileGroup = config.profileGroup;
    this._profileProtocolOptions = config.profileProtocolOptions;
    this._profileType = config.profileType;
    this._radiusIpAuthBypass = config.radiusIpAuthBypass;
    this._radiusMacAuthBypass = config.radiusMacAuthBypass;
    this._redirectUrl = config.redirectUrl;
    this._replacemsgOverrideGroup = config.replacemsgOverrideGroup;
    this._reputationDirection = config.reputationDirection;
    this._reputationDirection6 = config.reputationDirection6;
    this._reputationMinimum = config.reputationMinimum;
    this._reputationMinimum6 = config.reputationMinimum6;
    this._rsso = config.rsso;
    this._rtpNat = config.rtpNat;
    this._samlServer = config.samlServer;
    this._scanBotnetConnections = config.scanBotnetConnections;
    this._schedule = config.schedule;
    this._scheduleTimeout = config.scheduleTimeout;
    this._scim = config.scim;
    this._sctpFilterProfile = config.sctpFilterProfile;
    this._sendDenyPacket = config.sendDenyPacket;
    this._serviceNegate = config.serviceNegate;
    this._sessionTtl = config.sessionTtl;
    this._sgtCheck = config.sgtCheck;
    this._spamfilterProfile = config.spamfilterProfile;
    this._srcaddr6Negate = config.srcaddr6Negate;
    this._srcaddrNegate = config.srcaddrNegate;
    this._sshFilterProfile = config.sshFilterProfile;
    this._sshPolicyRedirect = config.sshPolicyRedirect;
    this._sslMirror = config.sslMirror;
    this._sslSshProfile = config.sslSshProfile;
    this._status = config.status;
    this._tcpMssReceiver = config.tcpMssReceiver;
    this._tcpMssSender = config.tcpMssSender;
    this._tcpSessionWithoutSyn = config.tcpSessionWithoutSyn;
    this._timeoutSendRst = config.timeoutSendRst;
    this._tos = config.tos;
    this._tosMask = config.tosMask;
    this._tosNegate = config.tosNegate;
    this._trafficShaper = config.trafficShaper;
    this._trafficShaperReverse = config.trafficShaperReverse;
    this._utmStatus = config.utmStatus;
    this._uuid = config.uuid;
    this._vdomparam = config.vdomparam;
    this._videofilterProfile = config.videofilterProfile;
    this._virtualPatchProfile = config.virtualPatchProfile;
    this._vlanCosFwd = config.vlanCosFwd;
    this._vlanCosRev = config.vlanCosRev;
    this._vlanFilter = config.vlanFilter;
    this._voipProfile = config.voipProfile;
    this._vpntunnel = config.vpntunnel;
    this._wafProfile = config.wafProfile;
    this._wanopt = config.wanopt;
    this._wanoptDetection = config.wanoptDetection;
    this._wanoptPassiveOpt = config.wanoptPassiveOpt;
    this._wanoptPeer = config.wanoptPeer;
    this._wanoptProfile = config.wanoptProfile;
    this._wccp = config.wccp;
    this._webcache = config.webcache;
    this._webcacheHttps = config.webcacheHttps;
    this._webfilterProfile = config.webfilterProfile;
    this._webproxyForwardServer = config.webproxyForwardServer;
    this._webproxyProfile = config.webproxyProfile;
    this._wsso = config.wsso;
    this._ztnaDeviceOwnership = config.ztnaDeviceOwnership;
    this._ztnaEmsTagNegate = config.ztnaEmsTagNegate;
    this._ztnaPolicyRedirect = config.ztnaPolicyRedirect;
    this._ztnaStatus = config.ztnaStatus;
    this._ztnaTagsMatchLogic = config.ztnaTagsMatchLogic;
    this._appCategory.internalValue = config.appCategory;
    this._appGroup.internalValue = config.appGroup;
    this._application.internalValue = config.application;
    this._customLogFields.internalValue = config.customLogFields;
    this._devices.internalValue = config.devices;
    this._dstaddr.internalValue = config.dstaddr;
    this._dstaddr6.internalValue = config.dstaddr6;
    this._dstintf.internalValue = config.dstintf;
    this._fssoGroups.internalValue = config.fssoGroups;
    this._groups.internalValue = config.groups;
    this._internetService6Custom.internalValue = config.internetService6Custom;
    this._internetService6CustomGroup.internalValue = config.internetService6CustomGroup;
    this._internetService6Fortiguard.internalValue = config.internetService6Fortiguard;
    this._internetService6Group.internalValue = config.internetService6Group;
    this._internetService6Name.internalValue = config.internetService6Name;
    this._internetService6SrcCustom.internalValue = config.internetService6SrcCustom;
    this._internetService6SrcCustomGroup.internalValue = config.internetService6SrcCustomGroup;
    this._internetService6SrcFortiguard.internalValue = config.internetService6SrcFortiguard;
    this._internetService6SrcGroup.internalValue = config.internetService6SrcGroup;
    this._internetService6SrcName.internalValue = config.internetService6SrcName;
    this._internetServiceCustom.internalValue = config.internetServiceCustom;
    this._internetServiceCustomGroup.internalValue = config.internetServiceCustomGroup;
    this._internetServiceFortiguard.internalValue = config.internetServiceFortiguard;
    this._internetServiceGroup.internalValue = config.internetServiceGroup;
    this._internetServiceId.internalValue = config.internetServiceId;
    this._internetServiceName.internalValue = config.internetServiceName;
    this._internetServiceSrcCustom.internalValue = config.internetServiceSrcCustom;
    this._internetServiceSrcCustomGroup.internalValue = config.internetServiceSrcCustomGroup;
    this._internetServiceSrcFortiguard.internalValue = config.internetServiceSrcFortiguard;
    this._internetServiceSrcGroup.internalValue = config.internetServiceSrcGroup;
    this._internetServiceSrcId.internalValue = config.internetServiceSrcId;
    this._internetServiceSrcName.internalValue = config.internetServiceSrcName;
    this._networkServiceDynamic.internalValue = config.networkServiceDynamic;
    this._networkServiceSrcDynamic.internalValue = config.networkServiceSrcDynamic;
    this._ntlmEnabledBrowsers.internalValue = config.ntlmEnabledBrowsers;
    this._pcpPoolname.internalValue = config.pcpPoolname;
    this._poolname.internalValue = config.poolname;
    this._poolname6.internalValue = config.poolname6;
    this._rtpAddr.internalValue = config.rtpAddr;
    this._scimGroups.internalValue = config.scimGroups;
    this._scimUsers.internalValue = config.scimUsers;
    this._service.internalValue = config.service;
    this._sgt.internalValue = config.sgt;
    this._srcVendorMac.internalValue = config.srcVendorMac;
    this._srcaddr.internalValue = config.srcaddr;
    this._srcaddr6.internalValue = config.srcaddr6;
    this._srcintf.internalValue = config.srcintf;
    this._sslMirrorIntf.internalValue = config.sslMirrorIntf;
    this._urlCategory.internalValue = config.urlCategory;
    this._users.internalValue = config.users;
    this._ztnaEmsTag.internalValue = config.ztnaEmsTag;
    this._ztnaEmsTagSecondary.internalValue = config.ztnaEmsTagSecondary;
    this._ztnaGeoTag.internalValue = config.ztnaGeoTag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // anti_replay - computed: true, optional: true, required: false
  private _antiReplay?: string; 
  public get antiReplay() {
    return this.getStringAttribute('anti_replay');
  }
  public set antiReplay(value: string) {
    this._antiReplay = value;
  }
  public resetAntiReplay() {
    this._antiReplay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiReplayInput() {
    return this._antiReplay;
  }

  // app_monitor - computed: true, optional: true, required: false
  private _appMonitor?: string; 
  public get appMonitor() {
    return this.getStringAttribute('app_monitor');
  }
  public set appMonitor(value: string) {
    this._appMonitor = value;
  }
  public resetAppMonitor() {
    this._appMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appMonitorInput() {
    return this._appMonitor;
  }

  // application_list - computed: false, optional: true, required: false
  private _applicationList?: string; 
  public get applicationList() {
    return this.getStringAttribute('application_list');
  }
  public set applicationList(value: string) {
    this._applicationList = value;
  }
  public resetApplicationList() {
    this._applicationList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationListInput() {
    return this._applicationList;
  }

  // auth_cert - computed: false, optional: true, required: false
  private _authCert?: string; 
  public get authCert() {
    return this.getStringAttribute('auth_cert');
  }
  public set authCert(value: string) {
    this._authCert = value;
  }
  public resetAuthCert() {
    this._authCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCertInput() {
    return this._authCert;
  }

  // auth_path - computed: true, optional: true, required: false
  private _authPath?: string; 
  public get authPath() {
    return this.getStringAttribute('auth_path');
  }
  public set authPath(value: string) {
    this._authPath = value;
  }
  public resetAuthPath() {
    this._authPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPathInput() {
    return this._authPath;
  }

  // auth_redirect_addr - computed: false, optional: true, required: false
  private _authRedirectAddr?: string; 
  public get authRedirectAddr() {
    return this.getStringAttribute('auth_redirect_addr');
  }
  public set authRedirectAddr(value: string) {
    this._authRedirectAddr = value;
  }
  public resetAuthRedirectAddr() {
    this._authRedirectAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authRedirectAddrInput() {
    return this._authRedirectAddr;
  }

  // auto_asic_offload - computed: true, optional: true, required: false
  private _autoAsicOffload?: string; 
  public get autoAsicOffload() {
    return this.getStringAttribute('auto_asic_offload');
  }
  public set autoAsicOffload(value: string) {
    this._autoAsicOffload = value;
  }
  public resetAutoAsicOffload() {
    this._autoAsicOffload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAsicOffloadInput() {
    return this._autoAsicOffload;
  }

  // av_profile - computed: false, optional: true, required: false
  private _avProfile?: string; 
  public get avProfile() {
    return this.getStringAttribute('av_profile');
  }
  public set avProfile(value: string) {
    this._avProfile = value;
  }
  public resetAvProfile() {
    this._avProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avProfileInput() {
    return this._avProfile;
  }

  // block_notification - computed: true, optional: true, required: false
  private _blockNotification?: string; 
  public get blockNotification() {
    return this.getStringAttribute('block_notification');
  }
  public set blockNotification(value: string) {
    this._blockNotification = value;
  }
  public resetBlockNotification() {
    this._blockNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockNotificationInput() {
    return this._blockNotification;
  }

  // captive_portal_exempt - computed: true, optional: true, required: false
  private _captivePortalExempt?: string; 
  public get captivePortalExempt() {
    return this.getStringAttribute('captive_portal_exempt');
  }
  public set captivePortalExempt(value: string) {
    this._captivePortalExempt = value;
  }
  public resetCaptivePortalExempt() {
    this._captivePortalExempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captivePortalExemptInput() {
    return this._captivePortalExempt;
  }

  // capture_packet - computed: true, optional: true, required: false
  private _capturePacket?: string; 
  public get capturePacket() {
    return this.getStringAttribute('capture_packet');
  }
  public set capturePacket(value: string) {
    this._capturePacket = value;
  }
  public resetCapturePacket() {
    this._capturePacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capturePacketInput() {
    return this._capturePacket;
  }

  // casb_profile - computed: false, optional: true, required: false
  private _casbProfile?: string; 
  public get casbProfile() {
    return this.getStringAttribute('casb_profile');
  }
  public set casbProfile(value: string) {
    this._casbProfile = value;
  }
  public resetCasbProfile() {
    this._casbProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get casbProfileInput() {
    return this._casbProfile;
  }

  // cifs_profile - computed: false, optional: true, required: false
  private _cifsProfile?: string; 
  public get cifsProfile() {
    return this.getStringAttribute('cifs_profile');
  }
  public set cifsProfile(value: string) {
    this._cifsProfile = value;
  }
  public resetCifsProfile() {
    this._cifsProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cifsProfileInput() {
    return this._cifsProfile;
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

  // decrypted_traffic_mirror - computed: false, optional: true, required: false
  private _decryptedTrafficMirror?: string; 
  public get decryptedTrafficMirror() {
    return this.getStringAttribute('decrypted_traffic_mirror');
  }
  public set decryptedTrafficMirror(value: string) {
    this._decryptedTrafficMirror = value;
  }
  public resetDecryptedTrafficMirror() {
    this._decryptedTrafficMirror = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptedTrafficMirrorInput() {
    return this._decryptedTrafficMirror;
  }

  // delay_tcp_npu_session - computed: true, optional: true, required: false
  private _delayTcpNpuSession?: string; 
  public get delayTcpNpuSession() {
    return this.getStringAttribute('delay_tcp_npu_session');
  }
  public set delayTcpNpuSession(value: string) {
    this._delayTcpNpuSession = value;
  }
  public resetDelayTcpNpuSession() {
    this._delayTcpNpuSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayTcpNpuSessionInput() {
    return this._delayTcpNpuSession;
  }

  // diameter_filter_profile - computed: false, optional: true, required: false
  private _diameterFilterProfile?: string; 
  public get diameterFilterProfile() {
    return this.getStringAttribute('diameter_filter_profile');
  }
  public set diameterFilterProfile(value: string) {
    this._diameterFilterProfile = value;
  }
  public resetDiameterFilterProfile() {
    this._diameterFilterProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diameterFilterProfileInput() {
    return this._diameterFilterProfile;
  }

  // diffserv_copy - computed: true, optional: true, required: false
  private _diffservCopy?: string; 
  public get diffservCopy() {
    return this.getStringAttribute('diffserv_copy');
  }
  public set diffservCopy(value: string) {
    this._diffservCopy = value;
  }
  public resetDiffservCopy() {
    this._diffservCopy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diffservCopyInput() {
    return this._diffservCopy;
  }

  // diffserv_forward - computed: true, optional: true, required: false
  private _diffservForward?: string; 
  public get diffservForward() {
    return this.getStringAttribute('diffserv_forward');
  }
  public set diffservForward(value: string) {
    this._diffservForward = value;
  }
  public resetDiffservForward() {
    this._diffservForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diffservForwardInput() {
    return this._diffservForward;
  }

  // diffserv_reverse - computed: true, optional: true, required: false
  private _diffservReverse?: string; 
  public get diffservReverse() {
    return this.getStringAttribute('diffserv_reverse');
  }
  public set diffservReverse(value: string) {
    this._diffservReverse = value;
  }
  public resetDiffservReverse() {
    this._diffservReverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diffservReverseInput() {
    return this._diffservReverse;
  }

  // diffservcode_forward - computed: true, optional: true, required: false
  private _diffservcodeForward?: string; 
  public get diffservcodeForward() {
    return this.getStringAttribute('diffservcode_forward');
  }
  public set diffservcodeForward(value: string) {
    this._diffservcodeForward = value;
  }
  public resetDiffservcodeForward() {
    this._diffservcodeForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diffservcodeForwardInput() {
    return this._diffservcodeForward;
  }

  // diffservcode_rev - computed: true, optional: true, required: false
  private _diffservcodeRev?: string; 
  public get diffservcodeRev() {
    return this.getStringAttribute('diffservcode_rev');
  }
  public set diffservcodeRev(value: string) {
    this._diffservcodeRev = value;
  }
  public resetDiffservcodeRev() {
    this._diffservcodeRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diffservcodeRevInput() {
    return this._diffservcodeRev;
  }

  // disclaimer - computed: true, optional: true, required: false
  private _disclaimer?: string; 
  public get disclaimer() {
    return this.getStringAttribute('disclaimer');
  }
  public set disclaimer(value: string) {
    this._disclaimer = value;
  }
  public resetDisclaimer() {
    this._disclaimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disclaimerInput() {
    return this._disclaimer;
  }

  // dlp_profile - computed: false, optional: true, required: false
  private _dlpProfile?: string; 
  public get dlpProfile() {
    return this.getStringAttribute('dlp_profile');
  }
  public set dlpProfile(value: string) {
    this._dlpProfile = value;
  }
  public resetDlpProfile() {
    this._dlpProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlpProfileInput() {
    return this._dlpProfile;
  }

  // dlp_sensor - computed: false, optional: true, required: false
  private _dlpSensor?: string; 
  public get dlpSensor() {
    return this.getStringAttribute('dlp_sensor');
  }
  public set dlpSensor(value: string) {
    this._dlpSensor = value;
  }
  public resetDlpSensor() {
    this._dlpSensor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlpSensorInput() {
    return this._dlpSensor;
  }

  // dnsfilter_profile - computed: false, optional: true, required: false
  private _dnsfilterProfile?: string; 
  public get dnsfilterProfile() {
    return this.getStringAttribute('dnsfilter_profile');
  }
  public set dnsfilterProfile(value: string) {
    this._dnsfilterProfile = value;
  }
  public resetDnsfilterProfile() {
    this._dnsfilterProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsfilterProfileInput() {
    return this._dnsfilterProfile;
  }

  // dsri - computed: true, optional: true, required: false
  private _dsri?: string; 
  public get dsri() {
    return this.getStringAttribute('dsri');
  }
  public set dsri(value: string) {
    this._dsri = value;
  }
  public resetDsri() {
    this._dsri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsriInput() {
    return this._dsri;
  }

  // dstaddr6_negate - computed: true, optional: true, required: false
  private _dstaddr6Negate?: string; 
  public get dstaddr6Negate() {
    return this.getStringAttribute('dstaddr6_negate');
  }
  public set dstaddr6Negate(value: string) {
    this._dstaddr6Negate = value;
  }
  public resetDstaddr6Negate() {
    this._dstaddr6Negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstaddr6NegateInput() {
    return this._dstaddr6Negate;
  }

  // dstaddr_negate - computed: true, optional: true, required: false
  private _dstaddrNegate?: string; 
  public get dstaddrNegate() {
    return this.getStringAttribute('dstaddr_negate');
  }
  public set dstaddrNegate(value: string) {
    this._dstaddrNegate = value;
  }
  public resetDstaddrNegate() {
    this._dstaddrNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstaddrNegateInput() {
    return this._dstaddrNegate;
  }

  // dynamic_shaping - computed: true, optional: true, required: false
  private _dynamicShaping?: string; 
  public get dynamicShaping() {
    return this.getStringAttribute('dynamic_shaping');
  }
  public set dynamicShaping(value: string) {
    this._dynamicShaping = value;
  }
  public resetDynamicShaping() {
    this._dynamicShaping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicShapingInput() {
    return this._dynamicShaping;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // email_collect - computed: true, optional: true, required: false
  private _emailCollect?: string; 
  public get emailCollect() {
    return this.getStringAttribute('email_collect');
  }
  public set emailCollect(value: string) {
    this._emailCollect = value;
  }
  public resetEmailCollect() {
    this._emailCollect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailCollectInput() {
    return this._emailCollect;
  }

  // emailfilter_profile - computed: false, optional: true, required: false
  private _emailfilterProfile?: string; 
  public get emailfilterProfile() {
    return this.getStringAttribute('emailfilter_profile');
  }
  public set emailfilterProfile(value: string) {
    this._emailfilterProfile = value;
  }
  public resetEmailfilterProfile() {
    this._emailfilterProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailfilterProfileInput() {
    return this._emailfilterProfile;
  }

  // fec - computed: true, optional: true, required: false
  private _fec?: string; 
  public get fec() {
    return this.getStringAttribute('fec');
  }
  public set fec(value: string) {
    this._fec = value;
  }
  public resetFec() {
    this._fec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fecInput() {
    return this._fec;
  }

  // file_filter_profile - computed: false, optional: true, required: false
  private _fileFilterProfile?: string; 
  public get fileFilterProfile() {
    return this.getStringAttribute('file_filter_profile');
  }
  public set fileFilterProfile(value: string) {
    this._fileFilterProfile = value;
  }
  public resetFileFilterProfile() {
    this._fileFilterProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileFilterProfileInput() {
    return this._fileFilterProfile;
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

  // fixedport - computed: true, optional: true, required: false
  private _fixedport?: string; 
  public get fixedport() {
    return this.getStringAttribute('fixedport');
  }
  public set fixedport(value: string) {
    this._fixedport = value;
  }
  public resetFixedport() {
    this._fixedport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedportInput() {
    return this._fixedport;
  }

  // fsso - computed: false, optional: true, required: false
  private _fsso?: string; 
  public get fsso() {
    return this.getStringAttribute('fsso');
  }
  public set fsso(value: string) {
    this._fsso = value;
  }
  public resetFsso() {
    this._fsso = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fssoInput() {
    return this._fsso;
  }

  // fsso_agent_for_ntlm - computed: false, optional: true, required: false
  private _fssoAgentForNtlm?: string; 
  public get fssoAgentForNtlm() {
    return this.getStringAttribute('fsso_agent_for_ntlm');
  }
  public set fssoAgentForNtlm(value: string) {
    this._fssoAgentForNtlm = value;
  }
  public resetFssoAgentForNtlm() {
    this._fssoAgentForNtlm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fssoAgentForNtlmInput() {
    return this._fssoAgentForNtlm;
  }

  // geoip_anycast - computed: true, optional: true, required: false
  private _geoipAnycast?: string; 
  public get geoipAnycast() {
    return this.getStringAttribute('geoip_anycast');
  }
  public set geoipAnycast(value: string) {
    this._geoipAnycast = value;
  }
  public resetGeoipAnycast() {
    this._geoipAnycast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoipAnycastInput() {
    return this._geoipAnycast;
  }

  // geoip_match - computed: true, optional: true, required: false
  private _geoipMatch?: string; 
  public get geoipMatch() {
    return this.getStringAttribute('geoip_match');
  }
  public set geoipMatch(value: string) {
    this._geoipMatch = value;
  }
  public resetGeoipMatch() {
    this._geoipMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoipMatchInput() {
    return this._geoipMatch;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
  }

  // global_label - computed: false, optional: true, required: false
  private _globalLabel?: string; 
  public get globalLabel() {
    return this.getStringAttribute('global_label');
  }
  public set globalLabel(value: string) {
    this._globalLabel = value;
  }
  public resetGlobalLabel() {
    this._globalLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalLabelInput() {
    return this._globalLabel;
  }

  // http_policy_redirect - computed: true, optional: true, required: false
  private _httpPolicyRedirect?: string; 
  public get httpPolicyRedirect() {
    return this.getStringAttribute('http_policy_redirect');
  }
  public set httpPolicyRedirect(value: string) {
    this._httpPolicyRedirect = value;
  }
  public resetHttpPolicyRedirect() {
    this._httpPolicyRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPolicyRedirectInput() {
    return this._httpPolicyRedirect;
  }

  // icap_profile - computed: false, optional: true, required: false
  private _icapProfile?: string; 
  public get icapProfile() {
    return this.getStringAttribute('icap_profile');
  }
  public set icapProfile(value: string) {
    this._icapProfile = value;
  }
  public resetIcapProfile() {
    this._icapProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icapProfileInput() {
    return this._icapProfile;
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

  // identity_based_route - computed: false, optional: true, required: false
  private _identityBasedRoute?: string; 
  public get identityBasedRoute() {
    return this.getStringAttribute('identity_based_route');
  }
  public set identityBasedRoute(value: string) {
    this._identityBasedRoute = value;
  }
  public resetIdentityBasedRoute() {
    this._identityBasedRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityBasedRouteInput() {
    return this._identityBasedRoute;
  }

  // inbound - computed: true, optional: true, required: false
  private _inbound?: string; 
  public get inbound() {
    return this.getStringAttribute('inbound');
  }
  public set inbound(value: string) {
    this._inbound = value;
  }
  public resetInbound() {
    this._inbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundInput() {
    return this._inbound;
  }

  // inspection_mode - computed: true, optional: true, required: false
  private _inspectionMode?: string; 
  public get inspectionMode() {
    return this.getStringAttribute('inspection_mode');
  }
  public set inspectionMode(value: string) {
    this._inspectionMode = value;
  }
  public resetInspectionMode() {
    this._inspectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectionModeInput() {
    return this._inspectionMode;
  }

  // internet_service - computed: true, optional: true, required: false
  private _internetService?: string; 
  public get internetService() {
    return this.getStringAttribute('internet_service');
  }
  public set internetService(value: string) {
    this._internetService = value;
  }
  public resetInternetService() {
    this._internetService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceInput() {
    return this._internetService;
  }

  // internet_service6 - computed: true, optional: true, required: false
  private _internetService6?: string; 
  public get internetService6() {
    return this.getStringAttribute('internet_service6');
  }
  public set internetService6(value: string) {
    this._internetService6 = value;
  }
  public resetInternetService6() {
    this._internetService6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetService6Input() {
    return this._internetService6;
  }

  // internet_service6_negate - computed: true, optional: true, required: false
  private _internetService6Negate?: string; 
  public get internetService6Negate() {
    return this.getStringAttribute('internet_service6_negate');
  }
  public set internetService6Negate(value: string) {
    this._internetService6Negate = value;
  }
  public resetInternetService6Negate() {
    this._internetService6Negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetService6NegateInput() {
    return this._internetService6Negate;
  }

  // internet_service6_src - computed: true, optional: true, required: false
  private _internetService6Src?: string; 
  public get internetService6Src() {
    return this.getStringAttribute('internet_service6_src');
  }
  public set internetService6Src(value: string) {
    this._internetService6Src = value;
  }
  public resetInternetService6Src() {
    this._internetService6Src = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetService6SrcInput() {
    return this._internetService6Src;
  }

  // internet_service6_src_negate - computed: true, optional: true, required: false
  private _internetService6SrcNegate?: string; 
  public get internetService6SrcNegate() {
    return this.getStringAttribute('internet_service6_src_negate');
  }
  public set internetService6SrcNegate(value: string) {
    this._internetService6SrcNegate = value;
  }
  public resetInternetService6SrcNegate() {
    this._internetService6SrcNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetService6SrcNegateInput() {
    return this._internetService6SrcNegate;
  }

  // internet_service_negate - computed: true, optional: true, required: false
  private _internetServiceNegate?: string; 
  public get internetServiceNegate() {
    return this.getStringAttribute('internet_service_negate');
  }
  public set internetServiceNegate(value: string) {
    this._internetServiceNegate = value;
  }
  public resetInternetServiceNegate() {
    this._internetServiceNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceNegateInput() {
    return this._internetServiceNegate;
  }

  // internet_service_src - computed: true, optional: true, required: false
  private _internetServiceSrc?: string; 
  public get internetServiceSrc() {
    return this.getStringAttribute('internet_service_src');
  }
  public set internetServiceSrc(value: string) {
    this._internetServiceSrc = value;
  }
  public resetInternetServiceSrc() {
    this._internetServiceSrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceSrcInput() {
    return this._internetServiceSrc;
  }

  // internet_service_src_negate - computed: true, optional: true, required: false
  private _internetServiceSrcNegate?: string; 
  public get internetServiceSrcNegate() {
    return this.getStringAttribute('internet_service_src_negate');
  }
  public set internetServiceSrcNegate(value: string) {
    this._internetServiceSrcNegate = value;
  }
  public resetInternetServiceSrcNegate() {
    this._internetServiceSrcNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceSrcNegateInput() {
    return this._internetServiceSrcNegate;
  }

  // ippool - computed: true, optional: true, required: false
  private _ippool?: string; 
  public get ippool() {
    return this.getStringAttribute('ippool');
  }
  public set ippool(value: string) {
    this._ippool = value;
  }
  public resetIppool() {
    this._ippool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ippoolInput() {
    return this._ippool;
  }

  // ips_sensor - computed: false, optional: true, required: false
  private _ipsSensor?: string; 
  public get ipsSensor() {
    return this.getStringAttribute('ips_sensor');
  }
  public set ipsSensor(value: string) {
    this._ipsSensor = value;
  }
  public resetIpsSensor() {
    this._ipsSensor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsSensorInput() {
    return this._ipsSensor;
  }

  // ips_voip_filter - computed: false, optional: true, required: false
  private _ipsVoipFilter?: string; 
  public get ipsVoipFilter() {
    return this.getStringAttribute('ips_voip_filter');
  }
  public set ipsVoipFilter(value: string) {
    this._ipsVoipFilter = value;
  }
  public resetIpsVoipFilter() {
    this._ipsVoipFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsVoipFilterInput() {
    return this._ipsVoipFilter;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // learning_mode - computed: false, optional: true, required: false
  private _learningMode?: string; 
  public get learningMode() {
    return this.getStringAttribute('learning_mode');
  }
  public set learningMode(value: string) {
    this._learningMode = value;
  }
  public resetLearningMode() {
    this._learningMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learningModeInput() {
    return this._learningMode;
  }

  // log_http_transaction - computed: true, optional: true, required: false
  private _logHttpTransaction?: string; 
  public get logHttpTransaction() {
    return this.getStringAttribute('log_http_transaction');
  }
  public set logHttpTransaction(value: string) {
    this._logHttpTransaction = value;
  }
  public resetLogHttpTransaction() {
    this._logHttpTransaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logHttpTransactionInput() {
    return this._logHttpTransaction;
  }

  // logtraffic - computed: true, optional: true, required: false
  private _logtraffic?: string; 
  public get logtraffic() {
    return this.getStringAttribute('logtraffic');
  }
  public set logtraffic(value: string) {
    this._logtraffic = value;
  }
  public resetLogtraffic() {
    this._logtraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logtrafficInput() {
    return this._logtraffic;
  }

  // logtraffic_start - computed: true, optional: true, required: false
  private _logtrafficStart?: string; 
  public get logtrafficStart() {
    return this.getStringAttribute('logtraffic_start');
  }
  public set logtrafficStart(value: string) {
    this._logtrafficStart = value;
  }
  public resetLogtrafficStart() {
    this._logtrafficStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logtrafficStartInput() {
    return this._logtrafficStart;
  }

  // match_vip - computed: true, optional: true, required: false
  private _matchVip?: string; 
  public get matchVip() {
    return this.getStringAttribute('match_vip');
  }
  public set matchVip(value: string) {
    this._matchVip = value;
  }
  public resetMatchVip() {
    this._matchVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchVipInput() {
    return this._matchVip;
  }

  // match_vip_only - computed: true, optional: true, required: false
  private _matchVipOnly?: string; 
  public get matchVipOnly() {
    return this.getStringAttribute('match_vip_only');
  }
  public set matchVipOnly(value: string) {
    this._matchVipOnly = value;
  }
  public resetMatchVipOnly() {
    this._matchVipOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchVipOnlyInput() {
    return this._matchVipOnly;
  }

  // name - computed: false, optional: true, required: false
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

  // nat - computed: true, optional: true, required: false
  private _nat?: string; 
  public get nat() {
    return this.getStringAttribute('nat');
  }
  public set nat(value: string) {
    this._nat = value;
  }
  public resetNat() {
    this._nat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natInput() {
    return this._nat;
  }

  // nat46 - computed: true, optional: true, required: false
  private _nat46?: string; 
  public get nat46() {
    return this.getStringAttribute('nat46');
  }
  public set nat46(value: string) {
    this._nat46 = value;
  }
  public resetNat46() {
    this._nat46 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat46Input() {
    return this._nat46;
  }

  // nat64 - computed: true, optional: true, required: false
  private _nat64?: string; 
  public get nat64() {
    return this.getStringAttribute('nat64');
  }
  public set nat64(value: string) {
    this._nat64 = value;
  }
  public resetNat64() {
    this._nat64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64Input() {
    return this._nat64;
  }

  // natinbound - computed: true, optional: true, required: false
  private _natinbound?: string; 
  public get natinbound() {
    return this.getStringAttribute('natinbound');
  }
  public set natinbound(value: string) {
    this._natinbound = value;
  }
  public resetNatinbound() {
    this._natinbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natinboundInput() {
    return this._natinbound;
  }

  // natip - computed: true, optional: true, required: false
  private _natip?: string; 
  public get natip() {
    return this.getStringAttribute('natip');
  }
  public set natip(value: string) {
    this._natip = value;
  }
  public resetNatip() {
    this._natip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natipInput() {
    return this._natip;
  }

  // natoutbound - computed: true, optional: true, required: false
  private _natoutbound?: string; 
  public get natoutbound() {
    return this.getStringAttribute('natoutbound');
  }
  public set natoutbound(value: string) {
    this._natoutbound = value;
  }
  public resetNatoutbound() {
    this._natoutbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natoutboundInput() {
    return this._natoutbound;
  }

  // np_acceleration - computed: true, optional: true, required: false
  private _npAcceleration?: string; 
  public get npAcceleration() {
    return this.getStringAttribute('np_acceleration');
  }
  public set npAcceleration(value: string) {
    this._npAcceleration = value;
  }
  public resetNpAcceleration() {
    this._npAcceleration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get npAccelerationInput() {
    return this._npAcceleration;
  }

  // ntlm - computed: true, optional: true, required: false
  private _ntlm?: string; 
  public get ntlm() {
    return this.getStringAttribute('ntlm');
  }
  public set ntlm(value: string) {
    this._ntlm = value;
  }
  public resetNtlm() {
    this._ntlm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmInput() {
    return this._ntlm;
  }

  // ntlm_guest - computed: true, optional: true, required: false
  private _ntlmGuest?: string; 
  public get ntlmGuest() {
    return this.getStringAttribute('ntlm_guest');
  }
  public set ntlmGuest(value: string) {
    this._ntlmGuest = value;
  }
  public resetNtlmGuest() {
    this._ntlmGuest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmGuestInput() {
    return this._ntlmGuest;
  }

  // outbound - computed: true, optional: true, required: false
  private _outbound?: string; 
  public get outbound() {
    return this.getStringAttribute('outbound');
  }
  public set outbound(value: string) {
    this._outbound = value;
  }
  public resetOutbound() {
    this._outbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundInput() {
    return this._outbound;
  }

  // passive_wan_health_measurement - computed: true, optional: true, required: false
  private _passiveWanHealthMeasurement?: string; 
  public get passiveWanHealthMeasurement() {
    return this.getStringAttribute('passive_wan_health_measurement');
  }
  public set passiveWanHealthMeasurement(value: string) {
    this._passiveWanHealthMeasurement = value;
  }
  public resetPassiveWanHealthMeasurement() {
    this._passiveWanHealthMeasurement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveWanHealthMeasurementInput() {
    return this._passiveWanHealthMeasurement;
  }

  // pcp_inbound - computed: true, optional: true, required: false
  private _pcpInbound?: string; 
  public get pcpInbound() {
    return this.getStringAttribute('pcp_inbound');
  }
  public set pcpInbound(value: string) {
    this._pcpInbound = value;
  }
  public resetPcpInbound() {
    this._pcpInbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcpInboundInput() {
    return this._pcpInbound;
  }

  // pcp_outbound - computed: true, optional: true, required: false
  private _pcpOutbound?: string; 
  public get pcpOutbound() {
    return this.getStringAttribute('pcp_outbound');
  }
  public set pcpOutbound(value: string) {
    this._pcpOutbound = value;
  }
  public resetPcpOutbound() {
    this._pcpOutbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcpOutboundInput() {
    return this._pcpOutbound;
  }

  // per_ip_shaper - computed: false, optional: true, required: false
  private _perIpShaper?: string; 
  public get perIpShaper() {
    return this.getStringAttribute('per_ip_shaper');
  }
  public set perIpShaper(value: string) {
    this._perIpShaper = value;
  }
  public resetPerIpShaper() {
    this._perIpShaper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perIpShaperInput() {
    return this._perIpShaper;
  }

  // permit_any_host - computed: true, optional: true, required: false
  private _permitAnyHost?: string; 
  public get permitAnyHost() {
    return this.getStringAttribute('permit_any_host');
  }
  public set permitAnyHost(value: string) {
    this._permitAnyHost = value;
  }
  public resetPermitAnyHost() {
    this._permitAnyHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitAnyHostInput() {
    return this._permitAnyHost;
  }

  // permit_stun_host - computed: true, optional: true, required: false
  private _permitStunHost?: string; 
  public get permitStunHost() {
    return this.getStringAttribute('permit_stun_host');
  }
  public set permitStunHost(value: string) {
    this._permitStunHost = value;
  }
  public resetPermitStunHost() {
    this._permitStunHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitStunHostInput() {
    return this._permitStunHost;
  }

  // policy_expiry - computed: true, optional: true, required: false
  private _policyExpiry?: string; 
  public get policyExpiry() {
    return this.getStringAttribute('policy_expiry');
  }
  public set policyExpiry(value: string) {
    this._policyExpiry = value;
  }
  public resetPolicyExpiry() {
    this._policyExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyExpiryInput() {
    return this._policyExpiry;
  }

  // policy_expiry_date - computed: true, optional: true, required: false
  private _policyExpiryDate?: string; 
  public get policyExpiryDate() {
    return this.getStringAttribute('policy_expiry_date');
  }
  public set policyExpiryDate(value: string) {
    this._policyExpiryDate = value;
  }
  public resetPolicyExpiryDate() {
    this._policyExpiryDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyExpiryDateInput() {
    return this._policyExpiryDate;
  }

  // policy_expiry_date_utc - computed: false, optional: true, required: false
  private _policyExpiryDateUtc?: string; 
  public get policyExpiryDateUtc() {
    return this.getStringAttribute('policy_expiry_date_utc');
  }
  public set policyExpiryDateUtc(value: string) {
    this._policyExpiryDateUtc = value;
  }
  public resetPolicyExpiryDateUtc() {
    this._policyExpiryDateUtc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyExpiryDateUtcInput() {
    return this._policyExpiryDateUtc;
  }

  // policyid - computed: true, optional: true, required: false
  private _policyid?: number; 
  public get policyid() {
    return this.getNumberAttribute('policyid');
  }
  public set policyid(value: number) {
    this._policyid = value;
  }
  public resetPolicyid() {
    this._policyid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyidInput() {
    return this._policyid;
  }

  // port_preserve - computed: true, optional: true, required: false
  private _portPreserve?: string; 
  public get portPreserve() {
    return this.getStringAttribute('port_preserve');
  }
  public set portPreserve(value: string) {
    this._portPreserve = value;
  }
  public resetPortPreserve() {
    this._portPreserve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portPreserveInput() {
    return this._portPreserve;
  }

  // port_random - computed: true, optional: true, required: false
  private _portRandom?: string; 
  public get portRandom() {
    return this.getStringAttribute('port_random');
  }
  public set portRandom(value: string) {
    this._portRandom = value;
  }
  public resetPortRandom() {
    this._portRandom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRandomInput() {
    return this._portRandom;
  }

  // profile_group - computed: false, optional: true, required: false
  private _profileGroup?: string; 
  public get profileGroup() {
    return this.getStringAttribute('profile_group');
  }
  public set profileGroup(value: string) {
    this._profileGroup = value;
  }
  public resetProfileGroup() {
    this._profileGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileGroupInput() {
    return this._profileGroup;
  }

  // profile_protocol_options - computed: true, optional: true, required: false
  private _profileProtocolOptions?: string; 
  public get profileProtocolOptions() {
    return this.getStringAttribute('profile_protocol_options');
  }
  public set profileProtocolOptions(value: string) {
    this._profileProtocolOptions = value;
  }
  public resetProfileProtocolOptions() {
    this._profileProtocolOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileProtocolOptionsInput() {
    return this._profileProtocolOptions;
  }

  // profile_type - computed: true, optional: true, required: false
  private _profileType?: string; 
  public get profileType() {
    return this.getStringAttribute('profile_type');
  }
  public set profileType(value: string) {
    this._profileType = value;
  }
  public resetProfileType() {
    this._profileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileTypeInput() {
    return this._profileType;
  }

  // radius_ip_auth_bypass - computed: true, optional: true, required: false
  private _radiusIpAuthBypass?: string; 
  public get radiusIpAuthBypass() {
    return this.getStringAttribute('radius_ip_auth_bypass');
  }
  public set radiusIpAuthBypass(value: string) {
    this._radiusIpAuthBypass = value;
  }
  public resetRadiusIpAuthBypass() {
    this._radiusIpAuthBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusIpAuthBypassInput() {
    return this._radiusIpAuthBypass;
  }

  // radius_mac_auth_bypass - computed: true, optional: true, required: false
  private _radiusMacAuthBypass?: string; 
  public get radiusMacAuthBypass() {
    return this.getStringAttribute('radius_mac_auth_bypass');
  }
  public set radiusMacAuthBypass(value: string) {
    this._radiusMacAuthBypass = value;
  }
  public resetRadiusMacAuthBypass() {
    this._radiusMacAuthBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusMacAuthBypassInput() {
    return this._radiusMacAuthBypass;
  }

  // redirect_url - computed: false, optional: true, required: false
  private _redirectUrl?: string; 
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }
  public set redirectUrl(value: string) {
    this._redirectUrl = value;
  }
  public resetRedirectUrl() {
    this._redirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrlInput() {
    return this._redirectUrl;
  }

  // replacemsg_override_group - computed: false, optional: true, required: false
  private _replacemsgOverrideGroup?: string; 
  public get replacemsgOverrideGroup() {
    return this.getStringAttribute('replacemsg_override_group');
  }
  public set replacemsgOverrideGroup(value: string) {
    this._replacemsgOverrideGroup = value;
  }
  public resetReplacemsgOverrideGroup() {
    this._replacemsgOverrideGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacemsgOverrideGroupInput() {
    return this._replacemsgOverrideGroup;
  }

  // reputation_direction - computed: true, optional: true, required: false
  private _reputationDirection?: string; 
  public get reputationDirection() {
    return this.getStringAttribute('reputation_direction');
  }
  public set reputationDirection(value: string) {
    this._reputationDirection = value;
  }
  public resetReputationDirection() {
    this._reputationDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reputationDirectionInput() {
    return this._reputationDirection;
  }

  // reputation_direction6 - computed: true, optional: true, required: false
  private _reputationDirection6?: string; 
  public get reputationDirection6() {
    return this.getStringAttribute('reputation_direction6');
  }
  public set reputationDirection6(value: string) {
    this._reputationDirection6 = value;
  }
  public resetReputationDirection6() {
    this._reputationDirection6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reputationDirection6Input() {
    return this._reputationDirection6;
  }

  // reputation_minimum - computed: false, optional: true, required: false
  private _reputationMinimum?: number; 
  public get reputationMinimum() {
    return this.getNumberAttribute('reputation_minimum');
  }
  public set reputationMinimum(value: number) {
    this._reputationMinimum = value;
  }
  public resetReputationMinimum() {
    this._reputationMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reputationMinimumInput() {
    return this._reputationMinimum;
  }

  // reputation_minimum6 - computed: false, optional: true, required: false
  private _reputationMinimum6?: number; 
  public get reputationMinimum6() {
    return this.getNumberAttribute('reputation_minimum6');
  }
  public set reputationMinimum6(value: number) {
    this._reputationMinimum6 = value;
  }
  public resetReputationMinimum6() {
    this._reputationMinimum6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reputationMinimum6Input() {
    return this._reputationMinimum6;
  }

  // rsso - computed: false, optional: true, required: false
  private _rsso?: string; 
  public get rsso() {
    return this.getStringAttribute('rsso');
  }
  public set rsso(value: string) {
    this._rsso = value;
  }
  public resetRsso() {
    this._rsso = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rssoInput() {
    return this._rsso;
  }

  // rtp_nat - computed: true, optional: true, required: false
  private _rtpNat?: string; 
  public get rtpNat() {
    return this.getStringAttribute('rtp_nat');
  }
  public set rtpNat(value: string) {
    this._rtpNat = value;
  }
  public resetRtpNat() {
    this._rtpNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtpNatInput() {
    return this._rtpNat;
  }

  // saml_server - computed: false, optional: true, required: false
  private _samlServer?: string; 
  public get samlServer() {
    return this.getStringAttribute('saml_server');
  }
  public set samlServer(value: string) {
    this._samlServer = value;
  }
  public resetSamlServer() {
    this._samlServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlServerInput() {
    return this._samlServer;
  }

  // scan_botnet_connections - computed: false, optional: true, required: false
  private _scanBotnetConnections?: string; 
  public get scanBotnetConnections() {
    return this.getStringAttribute('scan_botnet_connections');
  }
  public set scanBotnetConnections(value: string) {
    this._scanBotnetConnections = value;
  }
  public resetScanBotnetConnections() {
    this._scanBotnetConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanBotnetConnectionsInput() {
    return this._scanBotnetConnections;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // schedule_timeout - computed: true, optional: true, required: false
  private _scheduleTimeout?: string; 
  public get scheduleTimeout() {
    return this.getStringAttribute('schedule_timeout');
  }
  public set scheduleTimeout(value: string) {
    this._scheduleTimeout = value;
  }
  public resetScheduleTimeout() {
    this._scheduleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleTimeoutInput() {
    return this._scheduleTimeout;
  }

  // scim - computed: true, optional: true, required: false
  private _scim?: string; 
  public get scim() {
    return this.getStringAttribute('scim');
  }
  public set scim(value: string) {
    this._scim = value;
  }
  public resetScim() {
    this._scim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scimInput() {
    return this._scim;
  }

  // sctp_filter_profile - computed: false, optional: true, required: false
  private _sctpFilterProfile?: string; 
  public get sctpFilterProfile() {
    return this.getStringAttribute('sctp_filter_profile');
  }
  public set sctpFilterProfile(value: string) {
    this._sctpFilterProfile = value;
  }
  public resetSctpFilterProfile() {
    this._sctpFilterProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpFilterProfileInput() {
    return this._sctpFilterProfile;
  }

  // send_deny_packet - computed: true, optional: true, required: false
  private _sendDenyPacket?: string; 
  public get sendDenyPacket() {
    return this.getStringAttribute('send_deny_packet');
  }
  public set sendDenyPacket(value: string) {
    this._sendDenyPacket = value;
  }
  public resetSendDenyPacket() {
    this._sendDenyPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendDenyPacketInput() {
    return this._sendDenyPacket;
  }

  // service_negate - computed: true, optional: true, required: false
  private _serviceNegate?: string; 
  public get serviceNegate() {
    return this.getStringAttribute('service_negate');
  }
  public set serviceNegate(value: string) {
    this._serviceNegate = value;
  }
  public resetServiceNegate() {
    this._serviceNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNegateInput() {
    return this._serviceNegate;
  }

  // session_ttl - computed: false, optional: true, required: false
  private _sessionTtl?: number; 
  public get sessionTtl() {
    return this.getNumberAttribute('session_ttl');
  }
  public set sessionTtl(value: number) {
    this._sessionTtl = value;
  }
  public resetSessionTtl() {
    this._sessionTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTtlInput() {
    return this._sessionTtl;
  }

  // sgt_check - computed: true, optional: true, required: false
  private _sgtCheck?: string; 
  public get sgtCheck() {
    return this.getStringAttribute('sgt_check');
  }
  public set sgtCheck(value: string) {
    this._sgtCheck = value;
  }
  public resetSgtCheck() {
    this._sgtCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgtCheckInput() {
    return this._sgtCheck;
  }

  // spamfilter_profile - computed: false, optional: true, required: false
  private _spamfilterProfile?: string; 
  public get spamfilterProfile() {
    return this.getStringAttribute('spamfilter_profile');
  }
  public set spamfilterProfile(value: string) {
    this._spamfilterProfile = value;
  }
  public resetSpamfilterProfile() {
    this._spamfilterProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spamfilterProfileInput() {
    return this._spamfilterProfile;
  }

  // srcaddr6_negate - computed: true, optional: true, required: false
  private _srcaddr6Negate?: string; 
  public get srcaddr6Negate() {
    return this.getStringAttribute('srcaddr6_negate');
  }
  public set srcaddr6Negate(value: string) {
    this._srcaddr6Negate = value;
  }
  public resetSrcaddr6Negate() {
    this._srcaddr6Negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddr6NegateInput() {
    return this._srcaddr6Negate;
  }

  // srcaddr_negate - computed: true, optional: true, required: false
  private _srcaddrNegate?: string; 
  public get srcaddrNegate() {
    return this.getStringAttribute('srcaddr_negate');
  }
  public set srcaddrNegate(value: string) {
    this._srcaddrNegate = value;
  }
  public resetSrcaddrNegate() {
    this._srcaddrNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddrNegateInput() {
    return this._srcaddrNegate;
  }

  // ssh_filter_profile - computed: false, optional: true, required: false
  private _sshFilterProfile?: string; 
  public get sshFilterProfile() {
    return this.getStringAttribute('ssh_filter_profile');
  }
  public set sshFilterProfile(value: string) {
    this._sshFilterProfile = value;
  }
  public resetSshFilterProfile() {
    this._sshFilterProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshFilterProfileInput() {
    return this._sshFilterProfile;
  }

  // ssh_policy_redirect - computed: true, optional: true, required: false
  private _sshPolicyRedirect?: string; 
  public get sshPolicyRedirect() {
    return this.getStringAttribute('ssh_policy_redirect');
  }
  public set sshPolicyRedirect(value: string) {
    this._sshPolicyRedirect = value;
  }
  public resetSshPolicyRedirect() {
    this._sshPolicyRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPolicyRedirectInput() {
    return this._sshPolicyRedirect;
  }

  // ssl_mirror - computed: false, optional: true, required: false
  private _sslMirror?: string; 
  public get sslMirror() {
    return this.getStringAttribute('ssl_mirror');
  }
  public set sslMirror(value: string) {
    this._sslMirror = value;
  }
  public resetSslMirror() {
    this._sslMirror = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslMirrorInput() {
    return this._sslMirror;
  }

  // ssl_ssh_profile - computed: true, optional: true, required: false
  private _sslSshProfile?: string; 
  public get sslSshProfile() {
    return this.getStringAttribute('ssl_ssh_profile');
  }
  public set sslSshProfile(value: string) {
    this._sslSshProfile = value;
  }
  public resetSslSshProfile() {
    this._sslSshProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSshProfileInput() {
    return this._sslSshProfile;
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

  // tcp_mss_receiver - computed: false, optional: true, required: false
  private _tcpMssReceiver?: number; 
  public get tcpMssReceiver() {
    return this.getNumberAttribute('tcp_mss_receiver');
  }
  public set tcpMssReceiver(value: number) {
    this._tcpMssReceiver = value;
  }
  public resetTcpMssReceiver() {
    this._tcpMssReceiver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMssReceiverInput() {
    return this._tcpMssReceiver;
  }

  // tcp_mss_sender - computed: false, optional: true, required: false
  private _tcpMssSender?: number; 
  public get tcpMssSender() {
    return this.getNumberAttribute('tcp_mss_sender');
  }
  public set tcpMssSender(value: number) {
    this._tcpMssSender = value;
  }
  public resetTcpMssSender() {
    this._tcpMssSender = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMssSenderInput() {
    return this._tcpMssSender;
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

  // timeout_send_rst - computed: true, optional: true, required: false
  private _timeoutSendRst?: string; 
  public get timeoutSendRst() {
    return this.getStringAttribute('timeout_send_rst');
  }
  public set timeoutSendRst(value: string) {
    this._timeoutSendRst = value;
  }
  public resetTimeoutSendRst() {
    this._timeoutSendRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSendRstInput() {
    return this._timeoutSendRst;
  }

  // tos - computed: true, optional: true, required: false
  private _tos?: string; 
  public get tos() {
    return this.getStringAttribute('tos');
  }
  public set tos(value: string) {
    this._tos = value;
  }
  public resetTos() {
    this._tos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosInput() {
    return this._tos;
  }

  // tos_mask - computed: true, optional: true, required: false
  private _tosMask?: string; 
  public get tosMask() {
    return this.getStringAttribute('tos_mask');
  }
  public set tosMask(value: string) {
    this._tosMask = value;
  }
  public resetTosMask() {
    this._tosMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosMaskInput() {
    return this._tosMask;
  }

  // tos_negate - computed: true, optional: true, required: false
  private _tosNegate?: string; 
  public get tosNegate() {
    return this.getStringAttribute('tos_negate');
  }
  public set tosNegate(value: string) {
    this._tosNegate = value;
  }
  public resetTosNegate() {
    this._tosNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosNegateInput() {
    return this._tosNegate;
  }

  // traffic_shaper - computed: false, optional: true, required: false
  private _trafficShaper?: string; 
  public get trafficShaper() {
    return this.getStringAttribute('traffic_shaper');
  }
  public set trafficShaper(value: string) {
    this._trafficShaper = value;
  }
  public resetTrafficShaper() {
    this._trafficShaper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficShaperInput() {
    return this._trafficShaper;
  }

  // traffic_shaper_reverse - computed: false, optional: true, required: false
  private _trafficShaperReverse?: string; 
  public get trafficShaperReverse() {
    return this.getStringAttribute('traffic_shaper_reverse');
  }
  public set trafficShaperReverse(value: string) {
    this._trafficShaperReverse = value;
  }
  public resetTrafficShaperReverse() {
    this._trafficShaperReverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficShaperReverseInput() {
    return this._trafficShaperReverse;
  }

  // utm_status - computed: true, optional: true, required: false
  private _utmStatus?: string; 
  public get utmStatus() {
    return this.getStringAttribute('utm_status');
  }
  public set utmStatus(value: string) {
    this._utmStatus = value;
  }
  public resetUtmStatus() {
    this._utmStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utmStatusInput() {
    return this._utmStatus;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // videofilter_profile - computed: false, optional: true, required: false
  private _videofilterProfile?: string; 
  public get videofilterProfile() {
    return this.getStringAttribute('videofilter_profile');
  }
  public set videofilterProfile(value: string) {
    this._videofilterProfile = value;
  }
  public resetVideofilterProfile() {
    this._videofilterProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videofilterProfileInput() {
    return this._videofilterProfile;
  }

  // virtual_patch_profile - computed: false, optional: true, required: false
  private _virtualPatchProfile?: string; 
  public get virtualPatchProfile() {
    return this.getStringAttribute('virtual_patch_profile');
  }
  public set virtualPatchProfile(value: string) {
    this._virtualPatchProfile = value;
  }
  public resetVirtualPatchProfile() {
    this._virtualPatchProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualPatchProfileInput() {
    return this._virtualPatchProfile;
  }

  // vlan_cos_fwd - computed: true, optional: true, required: false
  private _vlanCosFwd?: number; 
  public get vlanCosFwd() {
    return this.getNumberAttribute('vlan_cos_fwd');
  }
  public set vlanCosFwd(value: number) {
    this._vlanCosFwd = value;
  }
  public resetVlanCosFwd() {
    this._vlanCosFwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanCosFwdInput() {
    return this._vlanCosFwd;
  }

  // vlan_cos_rev - computed: true, optional: true, required: false
  private _vlanCosRev?: number; 
  public get vlanCosRev() {
    return this.getNumberAttribute('vlan_cos_rev');
  }
  public set vlanCosRev(value: number) {
    this._vlanCosRev = value;
  }
  public resetVlanCosRev() {
    this._vlanCosRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanCosRevInput() {
    return this._vlanCosRev;
  }

  // vlan_filter - computed: false, optional: true, required: false
  private _vlanFilter?: string; 
  public get vlanFilter() {
    return this.getStringAttribute('vlan_filter');
  }
  public set vlanFilter(value: string) {
    this._vlanFilter = value;
  }
  public resetVlanFilter() {
    this._vlanFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanFilterInput() {
    return this._vlanFilter;
  }

  // voip_profile - computed: false, optional: true, required: false
  private _voipProfile?: string; 
  public get voipProfile() {
    return this.getStringAttribute('voip_profile');
  }
  public set voipProfile(value: string) {
    this._voipProfile = value;
  }
  public resetVoipProfile() {
    this._voipProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voipProfileInput() {
    return this._voipProfile;
  }

  // vpntunnel - computed: false, optional: true, required: false
  private _vpntunnel?: string; 
  public get vpntunnel() {
    return this.getStringAttribute('vpntunnel');
  }
  public set vpntunnel(value: string) {
    this._vpntunnel = value;
  }
  public resetVpntunnel() {
    this._vpntunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpntunnelInput() {
    return this._vpntunnel;
  }

  // waf_profile - computed: false, optional: true, required: false
  private _wafProfile?: string; 
  public get wafProfile() {
    return this.getStringAttribute('waf_profile');
  }
  public set wafProfile(value: string) {
    this._wafProfile = value;
  }
  public resetWafProfile() {
    this._wafProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafProfileInput() {
    return this._wafProfile;
  }

  // wanopt - computed: true, optional: true, required: false
  private _wanopt?: string; 
  public get wanopt() {
    return this.getStringAttribute('wanopt');
  }
  public set wanopt(value: string) {
    this._wanopt = value;
  }
  public resetWanopt() {
    this._wanopt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanoptInput() {
    return this._wanopt;
  }

  // wanopt_detection - computed: true, optional: true, required: false
  private _wanoptDetection?: string; 
  public get wanoptDetection() {
    return this.getStringAttribute('wanopt_detection');
  }
  public set wanoptDetection(value: string) {
    this._wanoptDetection = value;
  }
  public resetWanoptDetection() {
    this._wanoptDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanoptDetectionInput() {
    return this._wanoptDetection;
  }

  // wanopt_passive_opt - computed: true, optional: true, required: false
  private _wanoptPassiveOpt?: string; 
  public get wanoptPassiveOpt() {
    return this.getStringAttribute('wanopt_passive_opt');
  }
  public set wanoptPassiveOpt(value: string) {
    this._wanoptPassiveOpt = value;
  }
  public resetWanoptPassiveOpt() {
    this._wanoptPassiveOpt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanoptPassiveOptInput() {
    return this._wanoptPassiveOpt;
  }

  // wanopt_peer - computed: false, optional: true, required: false
  private _wanoptPeer?: string; 
  public get wanoptPeer() {
    return this.getStringAttribute('wanopt_peer');
  }
  public set wanoptPeer(value: string) {
    this._wanoptPeer = value;
  }
  public resetWanoptPeer() {
    this._wanoptPeer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanoptPeerInput() {
    return this._wanoptPeer;
  }

  // wanopt_profile - computed: false, optional: true, required: false
  private _wanoptProfile?: string; 
  public get wanoptProfile() {
    return this.getStringAttribute('wanopt_profile');
  }
  public set wanoptProfile(value: string) {
    this._wanoptProfile = value;
  }
  public resetWanoptProfile() {
    this._wanoptProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanoptProfileInput() {
    return this._wanoptProfile;
  }

  // wccp - computed: true, optional: true, required: false
  private _wccp?: string; 
  public get wccp() {
    return this.getStringAttribute('wccp');
  }
  public set wccp(value: string) {
    this._wccp = value;
  }
  public resetWccp() {
    this._wccp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wccpInput() {
    return this._wccp;
  }

  // webcache - computed: true, optional: true, required: false
  private _webcache?: string; 
  public get webcache() {
    return this.getStringAttribute('webcache');
  }
  public set webcache(value: string) {
    this._webcache = value;
  }
  public resetWebcache() {
    this._webcache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webcacheInput() {
    return this._webcache;
  }

  // webcache_https - computed: true, optional: true, required: false
  private _webcacheHttps?: string; 
  public get webcacheHttps() {
    return this.getStringAttribute('webcache_https');
  }
  public set webcacheHttps(value: string) {
    this._webcacheHttps = value;
  }
  public resetWebcacheHttps() {
    this._webcacheHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webcacheHttpsInput() {
    return this._webcacheHttps;
  }

  // webfilter_profile - computed: false, optional: true, required: false
  private _webfilterProfile?: string; 
  public get webfilterProfile() {
    return this.getStringAttribute('webfilter_profile');
  }
  public set webfilterProfile(value: string) {
    this._webfilterProfile = value;
  }
  public resetWebfilterProfile() {
    this._webfilterProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webfilterProfileInput() {
    return this._webfilterProfile;
  }

  // webproxy_forward_server - computed: false, optional: true, required: false
  private _webproxyForwardServer?: string; 
  public get webproxyForwardServer() {
    return this.getStringAttribute('webproxy_forward_server');
  }
  public set webproxyForwardServer(value: string) {
    this._webproxyForwardServer = value;
  }
  public resetWebproxyForwardServer() {
    this._webproxyForwardServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webproxyForwardServerInput() {
    return this._webproxyForwardServer;
  }

  // webproxy_profile - computed: false, optional: true, required: false
  private _webproxyProfile?: string; 
  public get webproxyProfile() {
    return this.getStringAttribute('webproxy_profile');
  }
  public set webproxyProfile(value: string) {
    this._webproxyProfile = value;
  }
  public resetWebproxyProfile() {
    this._webproxyProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webproxyProfileInput() {
    return this._webproxyProfile;
  }

  // wsso - computed: false, optional: true, required: false
  private _wsso?: string; 
  public get wsso() {
    return this.getStringAttribute('wsso');
  }
  public set wsso(value: string) {
    this._wsso = value;
  }
  public resetWsso() {
    this._wsso = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wssoInput() {
    return this._wsso;
  }

  // ztna_device_ownership - computed: true, optional: true, required: false
  private _ztnaDeviceOwnership?: string; 
  public get ztnaDeviceOwnership() {
    return this.getStringAttribute('ztna_device_ownership');
  }
  public set ztnaDeviceOwnership(value: string) {
    this._ztnaDeviceOwnership = value;
  }
  public resetZtnaDeviceOwnership() {
    this._ztnaDeviceOwnership = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ztnaDeviceOwnershipInput() {
    return this._ztnaDeviceOwnership;
  }

  // ztna_ems_tag_negate - computed: true, optional: true, required: false
  private _ztnaEmsTagNegate?: string; 
  public get ztnaEmsTagNegate() {
    return this.getStringAttribute('ztna_ems_tag_negate');
  }
  public set ztnaEmsTagNegate(value: string) {
    this._ztnaEmsTagNegate = value;
  }
  public resetZtnaEmsTagNegate() {
    this._ztnaEmsTagNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ztnaEmsTagNegateInput() {
    return this._ztnaEmsTagNegate;
  }

  // ztna_policy_redirect - computed: true, optional: true, required: false
  private _ztnaPolicyRedirect?: string; 
  public get ztnaPolicyRedirect() {
    return this.getStringAttribute('ztna_policy_redirect');
  }
  public set ztnaPolicyRedirect(value: string) {
    this._ztnaPolicyRedirect = value;
  }
  public resetZtnaPolicyRedirect() {
    this._ztnaPolicyRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ztnaPolicyRedirectInput() {
    return this._ztnaPolicyRedirect;
  }

  // ztna_status - computed: true, optional: true, required: false
  private _ztnaStatus?: string; 
  public get ztnaStatus() {
    return this.getStringAttribute('ztna_status');
  }
  public set ztnaStatus(value: string) {
    this._ztnaStatus = value;
  }
  public resetZtnaStatus() {
    this._ztnaStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ztnaStatusInput() {
    return this._ztnaStatus;
  }

  // ztna_tags_match_logic - computed: true, optional: true, required: false
  private _ztnaTagsMatchLogic?: string; 
  public get ztnaTagsMatchLogic() {
    return this.getStringAttribute('ztna_tags_match_logic');
  }
  public set ztnaTagsMatchLogic(value: string) {
    this._ztnaTagsMatchLogic = value;
  }
  public resetZtnaTagsMatchLogic() {
    this._ztnaTagsMatchLogic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ztnaTagsMatchLogicInput() {
    return this._ztnaTagsMatchLogic;
  }

  // app_category - computed: false, optional: true, required: false
  private _appCategory = new FirewallPolicyAppCategoryList(this, "app_category", true);
  public get appCategory() {
    return this._appCategory;
  }
  public putAppCategory(value: FirewallPolicyAppCategory[] | cdktf.IResolvable) {
    this._appCategory.internalValue = value;
  }
  public resetAppCategory() {
    this._appCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appCategoryInput() {
    return this._appCategory.internalValue;
  }

  // app_group - computed: false, optional: true, required: false
  private _appGroup = new FirewallPolicyAppGroupList(this, "app_group", true);
  public get appGroup() {
    return this._appGroup;
  }
  public putAppGroup(value: FirewallPolicyAppGroup[] | cdktf.IResolvable) {
    this._appGroup.internalValue = value;
  }
  public resetAppGroup() {
    this._appGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appGroupInput() {
    return this._appGroup.internalValue;
  }

  // application - computed: false, optional: true, required: false
  private _application = new FirewallPolicyApplicationList(this, "application", true);
  public get application() {
    return this._application;
  }
  public putApplication(value: FirewallPolicyApplication[] | cdktf.IResolvable) {
    this._application.internalValue = value;
  }
  public resetApplication() {
    this._application.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application.internalValue;
  }

  // custom_log_fields - computed: false, optional: true, required: false
  private _customLogFields = new FirewallPolicyCustomLogFieldsList(this, "custom_log_fields", true);
  public get customLogFields() {
    return this._customLogFields;
  }
  public putCustomLogFields(value: FirewallPolicyCustomLogFields[] | cdktf.IResolvable) {
    this._customLogFields.internalValue = value;
  }
  public resetCustomLogFields() {
    this._customLogFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLogFieldsInput() {
    return this._customLogFields.internalValue;
  }

  // devices - computed: false, optional: true, required: false
  private _devices = new FirewallPolicyDevicesList(this, "devices", false);
  public get devices() {
    return this._devices;
  }
  public putDevices(value: FirewallPolicyDevices[] | cdktf.IResolvable) {
    this._devices.internalValue = value;
  }
  public resetDevices() {
    this._devices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices.internalValue;
  }

  // dstaddr - computed: false, optional: true, required: false
  private _dstaddr = new FirewallPolicyDstaddrList(this, "dstaddr", true);
  public get dstaddr() {
    return this._dstaddr;
  }
  public putDstaddr(value: FirewallPolicyDstaddr[] | cdktf.IResolvable) {
    this._dstaddr.internalValue = value;
  }
  public resetDstaddr() {
    this._dstaddr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstaddrInput() {
    return this._dstaddr.internalValue;
  }

  // dstaddr6 - computed: false, optional: true, required: false
  private _dstaddr6 = new FirewallPolicyDstaddr6List(this, "dstaddr6", true);
  public get dstaddr6() {
    return this._dstaddr6;
  }
  public putDstaddr6(value: FirewallPolicyDstaddr6[] | cdktf.IResolvable) {
    this._dstaddr6.internalValue = value;
  }
  public resetDstaddr6() {
    this._dstaddr6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstaddr6Input() {
    return this._dstaddr6.internalValue;
  }

  // dstintf - computed: false, optional: false, required: true
  private _dstintf = new FirewallPolicyDstintfList(this, "dstintf", true);
  public get dstintf() {
    return this._dstintf;
  }
  public putDstintf(value: FirewallPolicyDstintf[] | cdktf.IResolvable) {
    this._dstintf.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstintfInput() {
    return this._dstintf.internalValue;
  }

  // fsso_groups - computed: false, optional: true, required: false
  private _fssoGroups = new FirewallPolicyFssoGroupsList(this, "fsso_groups", true);
  public get fssoGroups() {
    return this._fssoGroups;
  }
  public putFssoGroups(value: FirewallPolicyFssoGroups[] | cdktf.IResolvable) {
    this._fssoGroups.internalValue = value;
  }
  public resetFssoGroups() {
    this._fssoGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fssoGroupsInput() {
    return this._fssoGroups.internalValue;
  }

  // groups - computed: false, optional: true, required: false
  private _groups = new FirewallPolicyGroupsList(this, "groups", true);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: FirewallPolicyGroups[] | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  public resetGroups() {
    this._groups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }

  // internet_service6_custom - computed: false, optional: true, required: false
  private _internetService6Custom = new FirewallPolicyInternetService6CustomList(this, "internet_service6_custom", true);
  public get internetService6Custom() {
    return this._internetService6Custom;
  }
  public putInternetService6Custom(value: FirewallPolicyInternetService6Custom[] | cdktf.IResolvable) {
    this._internetService6Custom.internalValue = value;
  }
  public resetInternetService6Custom() {
    this._internetService6Custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetService6CustomInput() {
    return this._internetService6Custom.internalValue;
  }

  // internet_service6_custom_group - computed: false, optional: true, required: false
  private _internetService6CustomGroup = new FirewallPolicyInternetService6CustomGroupList(this, "internet_service6_custom_group", true);
  public get internetService6CustomGroup() {
    return this._internetService6CustomGroup;
  }
  public putInternetService6CustomGroup(value: FirewallPolicyInternetService6CustomGroup[] | cdktf.IResolvable) {
    this._internetService6CustomGroup.internalValue = value;
  }
  public resetInternetService6CustomGroup() {
    this._internetService6CustomGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetService6CustomGroupInput() {
    return this._internetService6CustomGroup.internalValue;
  }

  // internet_service6_fortiguard - computed: false, optional: true, required: false
  private _internetService6Fortiguard = new FirewallPolicyInternetService6FortiguardList(this, "internet_service6_fortiguard", true);
  public get internetService6Fortiguard() {
    return this._internetService6Fortiguard;
  }
  public putInternetService6Fortiguard(value: FirewallPolicyInternetService6Fortiguard[] | cdktf.IResolvable) {
    this._internetService6Fortiguard.internalValue = value;
  }
  public resetInternetService6Fortiguard() {
    this._internetService6Fortiguard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetService6FortiguardInput() {
    return this._internetService6Fortiguard.internalValue;
  }

  // internet_service6_group - computed: false, optional: true, required: false
  private _internetService6Group = new FirewallPolicyInternetService6GroupList(this, "internet_service6_group", true);
  public get internetService6Group() {
    return this._internetService6Group;
  }
  public putInternetService6Group(value: FirewallPolicyInternetService6Group[] | cdktf.IResolvable) {
    this._internetService6Group.internalValue = value;
  }
  public resetInternetService6Group() {
    this._internetService6Group.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetService6GroupInput() {
    return this._internetService6Group.internalValue;
  }

  // internet_service6_name - computed: false, optional: true, required: false
  private _internetService6Name = new FirewallPolicyInternetService6NameList(this, "internet_service6_name", true);
  public get internetService6Name() {
    return this._internetService6Name;
  }
  public putInternetService6Name(value: FirewallPolicyInternetService6Name[] | cdktf.IResolvable) {
    this._internetService6Name.internalValue = value;
  }
  public resetInternetService6Name() {
    this._internetService6Name.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetService6NameInput() {
    return this._internetService6Name.internalValue;
  }

  // internet_service6_src_custom - computed: false, optional: true, required: false
  private _internetService6SrcCustom = new FirewallPolicyInternetService6SrcCustomList(this, "internet_service6_src_custom", true);
  public get internetService6SrcCustom() {
    return this._internetService6SrcCustom;
  }
  public putInternetService6SrcCustom(value: FirewallPolicyInternetService6SrcCustom[] | cdktf.IResolvable) {
    this._internetService6SrcCustom.internalValue = value;
  }
  public resetInternetService6SrcCustom() {
    this._internetService6SrcCustom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetService6SrcCustomInput() {
    return this._internetService6SrcCustom.internalValue;
  }

  // internet_service6_src_custom_group - computed: false, optional: true, required: false
  private _internetService6SrcCustomGroup = new FirewallPolicyInternetService6SrcCustomGroupList(this, "internet_service6_src_custom_group", true);
  public get internetService6SrcCustomGroup() {
    return this._internetService6SrcCustomGroup;
  }
  public putInternetService6SrcCustomGroup(value: FirewallPolicyInternetService6SrcCustomGroup[] | cdktf.IResolvable) {
    this._internetService6SrcCustomGroup.internalValue = value;
  }
  public resetInternetService6SrcCustomGroup() {
    this._internetService6SrcCustomGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetService6SrcCustomGroupInput() {
    return this._internetService6SrcCustomGroup.internalValue;
  }

  // internet_service6_src_fortiguard - computed: false, optional: true, required: false
  private _internetService6SrcFortiguard = new FirewallPolicyInternetService6SrcFortiguardList(this, "internet_service6_src_fortiguard", true);
  public get internetService6SrcFortiguard() {
    return this._internetService6SrcFortiguard;
  }
  public putInternetService6SrcFortiguard(value: FirewallPolicyInternetService6SrcFortiguard[] | cdktf.IResolvable) {
    this._internetService6SrcFortiguard.internalValue = value;
  }
  public resetInternetService6SrcFortiguard() {
    this._internetService6SrcFortiguard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetService6SrcFortiguardInput() {
    return this._internetService6SrcFortiguard.internalValue;
  }

  // internet_service6_src_group - computed: false, optional: true, required: false
  private _internetService6SrcGroup = new FirewallPolicyInternetService6SrcGroupList(this, "internet_service6_src_group", true);
  public get internetService6SrcGroup() {
    return this._internetService6SrcGroup;
  }
  public putInternetService6SrcGroup(value: FirewallPolicyInternetService6SrcGroup[] | cdktf.IResolvable) {
    this._internetService6SrcGroup.internalValue = value;
  }
  public resetInternetService6SrcGroup() {
    this._internetService6SrcGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetService6SrcGroupInput() {
    return this._internetService6SrcGroup.internalValue;
  }

  // internet_service6_src_name - computed: false, optional: true, required: false
  private _internetService6SrcName = new FirewallPolicyInternetService6SrcNameList(this, "internet_service6_src_name", true);
  public get internetService6SrcName() {
    return this._internetService6SrcName;
  }
  public putInternetService6SrcName(value: FirewallPolicyInternetService6SrcName[] | cdktf.IResolvable) {
    this._internetService6SrcName.internalValue = value;
  }
  public resetInternetService6SrcName() {
    this._internetService6SrcName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetService6SrcNameInput() {
    return this._internetService6SrcName.internalValue;
  }

  // internet_service_custom - computed: false, optional: true, required: false
  private _internetServiceCustom = new FirewallPolicyInternetServiceCustomList(this, "internet_service_custom", true);
  public get internetServiceCustom() {
    return this._internetServiceCustom;
  }
  public putInternetServiceCustom(value: FirewallPolicyInternetServiceCustom[] | cdktf.IResolvable) {
    this._internetServiceCustom.internalValue = value;
  }
  public resetInternetServiceCustom() {
    this._internetServiceCustom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceCustomInput() {
    return this._internetServiceCustom.internalValue;
  }

  // internet_service_custom_group - computed: false, optional: true, required: false
  private _internetServiceCustomGroup = new FirewallPolicyInternetServiceCustomGroupList(this, "internet_service_custom_group", true);
  public get internetServiceCustomGroup() {
    return this._internetServiceCustomGroup;
  }
  public putInternetServiceCustomGroup(value: FirewallPolicyInternetServiceCustomGroup[] | cdktf.IResolvable) {
    this._internetServiceCustomGroup.internalValue = value;
  }
  public resetInternetServiceCustomGroup() {
    this._internetServiceCustomGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceCustomGroupInput() {
    return this._internetServiceCustomGroup.internalValue;
  }

  // internet_service_fortiguard - computed: false, optional: true, required: false
  private _internetServiceFortiguard = new FirewallPolicyInternetServiceFortiguardList(this, "internet_service_fortiguard", true);
  public get internetServiceFortiguard() {
    return this._internetServiceFortiguard;
  }
  public putInternetServiceFortiguard(value: FirewallPolicyInternetServiceFortiguard[] | cdktf.IResolvable) {
    this._internetServiceFortiguard.internalValue = value;
  }
  public resetInternetServiceFortiguard() {
    this._internetServiceFortiguard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceFortiguardInput() {
    return this._internetServiceFortiguard.internalValue;
  }

  // internet_service_group - computed: false, optional: true, required: false
  private _internetServiceGroup = new FirewallPolicyInternetServiceGroupList(this, "internet_service_group", true);
  public get internetServiceGroup() {
    return this._internetServiceGroup;
  }
  public putInternetServiceGroup(value: FirewallPolicyInternetServiceGroup[] | cdktf.IResolvable) {
    this._internetServiceGroup.internalValue = value;
  }
  public resetInternetServiceGroup() {
    this._internetServiceGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceGroupInput() {
    return this._internetServiceGroup.internalValue;
  }

  // internet_service_id - computed: false, optional: true, required: false
  private _internetServiceId = new FirewallPolicyInternetServiceIdList(this, "internet_service_id", true);
  public get internetServiceId() {
    return this._internetServiceId;
  }
  public putInternetServiceId(value: FirewallPolicyInternetServiceId[] | cdktf.IResolvable) {
    this._internetServiceId.internalValue = value;
  }
  public resetInternetServiceId() {
    this._internetServiceId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceIdInput() {
    return this._internetServiceId.internalValue;
  }

  // internet_service_name - computed: false, optional: true, required: false
  private _internetServiceName = new FirewallPolicyInternetServiceNameList(this, "internet_service_name", true);
  public get internetServiceName() {
    return this._internetServiceName;
  }
  public putInternetServiceName(value: FirewallPolicyInternetServiceName[] | cdktf.IResolvable) {
    this._internetServiceName.internalValue = value;
  }
  public resetInternetServiceName() {
    this._internetServiceName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceNameInput() {
    return this._internetServiceName.internalValue;
  }

  // internet_service_src_custom - computed: false, optional: true, required: false
  private _internetServiceSrcCustom = new FirewallPolicyInternetServiceSrcCustomList(this, "internet_service_src_custom", true);
  public get internetServiceSrcCustom() {
    return this._internetServiceSrcCustom;
  }
  public putInternetServiceSrcCustom(value: FirewallPolicyInternetServiceSrcCustom[] | cdktf.IResolvable) {
    this._internetServiceSrcCustom.internalValue = value;
  }
  public resetInternetServiceSrcCustom() {
    this._internetServiceSrcCustom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceSrcCustomInput() {
    return this._internetServiceSrcCustom.internalValue;
  }

  // internet_service_src_custom_group - computed: false, optional: true, required: false
  private _internetServiceSrcCustomGroup = new FirewallPolicyInternetServiceSrcCustomGroupList(this, "internet_service_src_custom_group", true);
  public get internetServiceSrcCustomGroup() {
    return this._internetServiceSrcCustomGroup;
  }
  public putInternetServiceSrcCustomGroup(value: FirewallPolicyInternetServiceSrcCustomGroup[] | cdktf.IResolvable) {
    this._internetServiceSrcCustomGroup.internalValue = value;
  }
  public resetInternetServiceSrcCustomGroup() {
    this._internetServiceSrcCustomGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceSrcCustomGroupInput() {
    return this._internetServiceSrcCustomGroup.internalValue;
  }

  // internet_service_src_fortiguard - computed: false, optional: true, required: false
  private _internetServiceSrcFortiguard = new FirewallPolicyInternetServiceSrcFortiguardList(this, "internet_service_src_fortiguard", true);
  public get internetServiceSrcFortiguard() {
    return this._internetServiceSrcFortiguard;
  }
  public putInternetServiceSrcFortiguard(value: FirewallPolicyInternetServiceSrcFortiguard[] | cdktf.IResolvable) {
    this._internetServiceSrcFortiguard.internalValue = value;
  }
  public resetInternetServiceSrcFortiguard() {
    this._internetServiceSrcFortiguard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceSrcFortiguardInput() {
    return this._internetServiceSrcFortiguard.internalValue;
  }

  // internet_service_src_group - computed: false, optional: true, required: false
  private _internetServiceSrcGroup = new FirewallPolicyInternetServiceSrcGroupList(this, "internet_service_src_group", true);
  public get internetServiceSrcGroup() {
    return this._internetServiceSrcGroup;
  }
  public putInternetServiceSrcGroup(value: FirewallPolicyInternetServiceSrcGroup[] | cdktf.IResolvable) {
    this._internetServiceSrcGroup.internalValue = value;
  }
  public resetInternetServiceSrcGroup() {
    this._internetServiceSrcGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceSrcGroupInput() {
    return this._internetServiceSrcGroup.internalValue;
  }

  // internet_service_src_id - computed: false, optional: true, required: false
  private _internetServiceSrcId = new FirewallPolicyInternetServiceSrcIdList(this, "internet_service_src_id", true);
  public get internetServiceSrcId() {
    return this._internetServiceSrcId;
  }
  public putInternetServiceSrcId(value: FirewallPolicyInternetServiceSrcId[] | cdktf.IResolvable) {
    this._internetServiceSrcId.internalValue = value;
  }
  public resetInternetServiceSrcId() {
    this._internetServiceSrcId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceSrcIdInput() {
    return this._internetServiceSrcId.internalValue;
  }

  // internet_service_src_name - computed: false, optional: true, required: false
  private _internetServiceSrcName = new FirewallPolicyInternetServiceSrcNameList(this, "internet_service_src_name", true);
  public get internetServiceSrcName() {
    return this._internetServiceSrcName;
  }
  public putInternetServiceSrcName(value: FirewallPolicyInternetServiceSrcName[] | cdktf.IResolvable) {
    this._internetServiceSrcName.internalValue = value;
  }
  public resetInternetServiceSrcName() {
    this._internetServiceSrcName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceSrcNameInput() {
    return this._internetServiceSrcName.internalValue;
  }

  // network_service_dynamic - computed: false, optional: true, required: false
  private _networkServiceDynamic = new FirewallPolicyNetworkServiceDynamicList(this, "network_service_dynamic", true);
  public get networkServiceDynamic() {
    return this._networkServiceDynamic;
  }
  public putNetworkServiceDynamic(value: FirewallPolicyNetworkServiceDynamic[] | cdktf.IResolvable) {
    this._networkServiceDynamic.internalValue = value;
  }
  public resetNetworkServiceDynamic() {
    this._networkServiceDynamic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkServiceDynamicInput() {
    return this._networkServiceDynamic.internalValue;
  }

  // network_service_src_dynamic - computed: false, optional: true, required: false
  private _networkServiceSrcDynamic = new FirewallPolicyNetworkServiceSrcDynamicList(this, "network_service_src_dynamic", true);
  public get networkServiceSrcDynamic() {
    return this._networkServiceSrcDynamic;
  }
  public putNetworkServiceSrcDynamic(value: FirewallPolicyNetworkServiceSrcDynamic[] | cdktf.IResolvable) {
    this._networkServiceSrcDynamic.internalValue = value;
  }
  public resetNetworkServiceSrcDynamic() {
    this._networkServiceSrcDynamic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkServiceSrcDynamicInput() {
    return this._networkServiceSrcDynamic.internalValue;
  }

  // ntlm_enabled_browsers - computed: false, optional: true, required: false
  private _ntlmEnabledBrowsers = new FirewallPolicyNtlmEnabledBrowsersList(this, "ntlm_enabled_browsers", true);
  public get ntlmEnabledBrowsers() {
    return this._ntlmEnabledBrowsers;
  }
  public putNtlmEnabledBrowsers(value: FirewallPolicyNtlmEnabledBrowsers[] | cdktf.IResolvable) {
    this._ntlmEnabledBrowsers.internalValue = value;
  }
  public resetNtlmEnabledBrowsers() {
    this._ntlmEnabledBrowsers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmEnabledBrowsersInput() {
    return this._ntlmEnabledBrowsers.internalValue;
  }

  // pcp_poolname - computed: false, optional: true, required: false
  private _pcpPoolname = new FirewallPolicyPcpPoolnameList(this, "pcp_poolname", true);
  public get pcpPoolname() {
    return this._pcpPoolname;
  }
  public putPcpPoolname(value: FirewallPolicyPcpPoolname[] | cdktf.IResolvable) {
    this._pcpPoolname.internalValue = value;
  }
  public resetPcpPoolname() {
    this._pcpPoolname.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcpPoolnameInput() {
    return this._pcpPoolname.internalValue;
  }

  // poolname - computed: false, optional: true, required: false
  private _poolname = new FirewallPolicyPoolnameList(this, "poolname", true);
  public get poolname() {
    return this._poolname;
  }
  public putPoolname(value: FirewallPolicyPoolname[] | cdktf.IResolvable) {
    this._poolname.internalValue = value;
  }
  public resetPoolname() {
    this._poolname.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolnameInput() {
    return this._poolname.internalValue;
  }

  // poolname6 - computed: false, optional: true, required: false
  private _poolname6 = new FirewallPolicyPoolname6List(this, "poolname6", true);
  public get poolname6() {
    return this._poolname6;
  }
  public putPoolname6(value: FirewallPolicyPoolname6[] | cdktf.IResolvable) {
    this._poolname6.internalValue = value;
  }
  public resetPoolname6() {
    this._poolname6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolname6Input() {
    return this._poolname6.internalValue;
  }

  // rtp_addr - computed: false, optional: true, required: false
  private _rtpAddr = new FirewallPolicyRtpAddrList(this, "rtp_addr", true);
  public get rtpAddr() {
    return this._rtpAddr;
  }
  public putRtpAddr(value: FirewallPolicyRtpAddr[] | cdktf.IResolvable) {
    this._rtpAddr.internalValue = value;
  }
  public resetRtpAddr() {
    this._rtpAddr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtpAddrInput() {
    return this._rtpAddr.internalValue;
  }

  // scim_groups - computed: false, optional: true, required: false
  private _scimGroups = new FirewallPolicyScimGroupsList(this, "scim_groups", true);
  public get scimGroups() {
    return this._scimGroups;
  }
  public putScimGroups(value: FirewallPolicyScimGroups[] | cdktf.IResolvable) {
    this._scimGroups.internalValue = value;
  }
  public resetScimGroups() {
    this._scimGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scimGroupsInput() {
    return this._scimGroups.internalValue;
  }

  // scim_users - computed: false, optional: true, required: false
  private _scimUsers = new FirewallPolicyScimUsersList(this, "scim_users", true);
  public get scimUsers() {
    return this._scimUsers;
  }
  public putScimUsers(value: FirewallPolicyScimUsers[] | cdktf.IResolvable) {
    this._scimUsers.internalValue = value;
  }
  public resetScimUsers() {
    this._scimUsers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scimUsersInput() {
    return this._scimUsers.internalValue;
  }

  // service - computed: false, optional: true, required: false
  private _service = new FirewallPolicyServiceList(this, "service", true);
  public get service() {
    return this._service;
  }
  public putService(value: FirewallPolicyService[] | cdktf.IResolvable) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // sgt - computed: false, optional: true, required: false
  private _sgt = new FirewallPolicySgtList(this, "sgt", true);
  public get sgt() {
    return this._sgt;
  }
  public putSgt(value: FirewallPolicySgt[] | cdktf.IResolvable) {
    this._sgt.internalValue = value;
  }
  public resetSgt() {
    this._sgt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgtInput() {
    return this._sgt.internalValue;
  }

  // src_vendor_mac - computed: false, optional: true, required: false
  private _srcVendorMac = new FirewallPolicySrcVendorMacList(this, "src_vendor_mac", true);
  public get srcVendorMac() {
    return this._srcVendorMac;
  }
  public putSrcVendorMac(value: FirewallPolicySrcVendorMac[] | cdktf.IResolvable) {
    this._srcVendorMac.internalValue = value;
  }
  public resetSrcVendorMac() {
    this._srcVendorMac.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcVendorMacInput() {
    return this._srcVendorMac.internalValue;
  }

  // srcaddr - computed: false, optional: true, required: false
  private _srcaddr = new FirewallPolicySrcaddrList(this, "srcaddr", true);
  public get srcaddr() {
    return this._srcaddr;
  }
  public putSrcaddr(value: FirewallPolicySrcaddr[] | cdktf.IResolvable) {
    this._srcaddr.internalValue = value;
  }
  public resetSrcaddr() {
    this._srcaddr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddrInput() {
    return this._srcaddr.internalValue;
  }

  // srcaddr6 - computed: false, optional: true, required: false
  private _srcaddr6 = new FirewallPolicySrcaddr6List(this, "srcaddr6", true);
  public get srcaddr6() {
    return this._srcaddr6;
  }
  public putSrcaddr6(value: FirewallPolicySrcaddr6[] | cdktf.IResolvable) {
    this._srcaddr6.internalValue = value;
  }
  public resetSrcaddr6() {
    this._srcaddr6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddr6Input() {
    return this._srcaddr6.internalValue;
  }

  // srcintf - computed: false, optional: false, required: true
  private _srcintf = new FirewallPolicySrcintfList(this, "srcintf", true);
  public get srcintf() {
    return this._srcintf;
  }
  public putSrcintf(value: FirewallPolicySrcintf[] | cdktf.IResolvable) {
    this._srcintf.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcintfInput() {
    return this._srcintf.internalValue;
  }

  // ssl_mirror_intf - computed: false, optional: true, required: false
  private _sslMirrorIntf = new FirewallPolicySslMirrorIntfList(this, "ssl_mirror_intf", true);
  public get sslMirrorIntf() {
    return this._sslMirrorIntf;
  }
  public putSslMirrorIntf(value: FirewallPolicySslMirrorIntf[] | cdktf.IResolvable) {
    this._sslMirrorIntf.internalValue = value;
  }
  public resetSslMirrorIntf() {
    this._sslMirrorIntf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslMirrorIntfInput() {
    return this._sslMirrorIntf.internalValue;
  }

  // url_category - computed: false, optional: true, required: false
  private _urlCategory = new FirewallPolicyUrlCategoryList(this, "url_category", true);
  public get urlCategory() {
    return this._urlCategory;
  }
  public putUrlCategory(value: FirewallPolicyUrlCategory[] | cdktf.IResolvable) {
    this._urlCategory.internalValue = value;
  }
  public resetUrlCategory() {
    this._urlCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlCategoryInput() {
    return this._urlCategory.internalValue;
  }

  // users - computed: false, optional: true, required: false
  private _users = new FirewallPolicyUsersList(this, "users", true);
  public get users() {
    return this._users;
  }
  public putUsers(value: FirewallPolicyUsers[] | cdktf.IResolvable) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }

  // ztna_ems_tag - computed: false, optional: true, required: false
  private _ztnaEmsTag = new FirewallPolicyZtnaEmsTagList(this, "ztna_ems_tag", true);
  public get ztnaEmsTag() {
    return this._ztnaEmsTag;
  }
  public putZtnaEmsTag(value: FirewallPolicyZtnaEmsTag[] | cdktf.IResolvable) {
    this._ztnaEmsTag.internalValue = value;
  }
  public resetZtnaEmsTag() {
    this._ztnaEmsTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ztnaEmsTagInput() {
    return this._ztnaEmsTag.internalValue;
  }

  // ztna_ems_tag_secondary - computed: false, optional: true, required: false
  private _ztnaEmsTagSecondary = new FirewallPolicyZtnaEmsTagSecondaryList(this, "ztna_ems_tag_secondary", true);
  public get ztnaEmsTagSecondary() {
    return this._ztnaEmsTagSecondary;
  }
  public putZtnaEmsTagSecondary(value: FirewallPolicyZtnaEmsTagSecondary[] | cdktf.IResolvable) {
    this._ztnaEmsTagSecondary.internalValue = value;
  }
  public resetZtnaEmsTagSecondary() {
    this._ztnaEmsTagSecondary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ztnaEmsTagSecondaryInput() {
    return this._ztnaEmsTagSecondary.internalValue;
  }

  // ztna_geo_tag - computed: false, optional: true, required: false
  private _ztnaGeoTag = new FirewallPolicyZtnaGeoTagList(this, "ztna_geo_tag", true);
  public get ztnaGeoTag() {
    return this._ztnaGeoTag;
  }
  public putZtnaGeoTag(value: FirewallPolicyZtnaGeoTag[] | cdktf.IResolvable) {
    this._ztnaGeoTag.internalValue = value;
  }
  public resetZtnaGeoTag() {
    this._ztnaGeoTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ztnaGeoTagInput() {
    return this._ztnaGeoTag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      anti_replay: cdktf.stringToTerraform(this._antiReplay),
      app_monitor: cdktf.stringToTerraform(this._appMonitor),
      application_list: cdktf.stringToTerraform(this._applicationList),
      auth_cert: cdktf.stringToTerraform(this._authCert),
      auth_path: cdktf.stringToTerraform(this._authPath),
      auth_redirect_addr: cdktf.stringToTerraform(this._authRedirectAddr),
      auto_asic_offload: cdktf.stringToTerraform(this._autoAsicOffload),
      av_profile: cdktf.stringToTerraform(this._avProfile),
      block_notification: cdktf.stringToTerraform(this._blockNotification),
      captive_portal_exempt: cdktf.stringToTerraform(this._captivePortalExempt),
      capture_packet: cdktf.stringToTerraform(this._capturePacket),
      casb_profile: cdktf.stringToTerraform(this._casbProfile),
      cifs_profile: cdktf.stringToTerraform(this._cifsProfile),
      comments: cdktf.stringToTerraform(this._comments),
      decrypted_traffic_mirror: cdktf.stringToTerraform(this._decryptedTrafficMirror),
      delay_tcp_npu_session: cdktf.stringToTerraform(this._delayTcpNpuSession),
      diameter_filter_profile: cdktf.stringToTerraform(this._diameterFilterProfile),
      diffserv_copy: cdktf.stringToTerraform(this._diffservCopy),
      diffserv_forward: cdktf.stringToTerraform(this._diffservForward),
      diffserv_reverse: cdktf.stringToTerraform(this._diffservReverse),
      diffservcode_forward: cdktf.stringToTerraform(this._diffservcodeForward),
      diffservcode_rev: cdktf.stringToTerraform(this._diffservcodeRev),
      disclaimer: cdktf.stringToTerraform(this._disclaimer),
      dlp_profile: cdktf.stringToTerraform(this._dlpProfile),
      dlp_sensor: cdktf.stringToTerraform(this._dlpSensor),
      dnsfilter_profile: cdktf.stringToTerraform(this._dnsfilterProfile),
      dsri: cdktf.stringToTerraform(this._dsri),
      dstaddr6_negate: cdktf.stringToTerraform(this._dstaddr6Negate),
      dstaddr_negate: cdktf.stringToTerraform(this._dstaddrNegate),
      dynamic_shaping: cdktf.stringToTerraform(this._dynamicShaping),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      email_collect: cdktf.stringToTerraform(this._emailCollect),
      emailfilter_profile: cdktf.stringToTerraform(this._emailfilterProfile),
      fec: cdktf.stringToTerraform(this._fec),
      file_filter_profile: cdktf.stringToTerraform(this._fileFilterProfile),
      firewall_session_dirty: cdktf.stringToTerraform(this._firewallSessionDirty),
      fixedport: cdktf.stringToTerraform(this._fixedport),
      fsso: cdktf.stringToTerraform(this._fsso),
      fsso_agent_for_ntlm: cdktf.stringToTerraform(this._fssoAgentForNtlm),
      geoip_anycast: cdktf.stringToTerraform(this._geoipAnycast),
      geoip_match: cdktf.stringToTerraform(this._geoipMatch),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      global_label: cdktf.stringToTerraform(this._globalLabel),
      http_policy_redirect: cdktf.stringToTerraform(this._httpPolicyRedirect),
      icap_profile: cdktf.stringToTerraform(this._icapProfile),
      id: cdktf.stringToTerraform(this._id),
      identity_based_route: cdktf.stringToTerraform(this._identityBasedRoute),
      inbound: cdktf.stringToTerraform(this._inbound),
      inspection_mode: cdktf.stringToTerraform(this._inspectionMode),
      internet_service: cdktf.stringToTerraform(this._internetService),
      internet_service6: cdktf.stringToTerraform(this._internetService6),
      internet_service6_negate: cdktf.stringToTerraform(this._internetService6Negate),
      internet_service6_src: cdktf.stringToTerraform(this._internetService6Src),
      internet_service6_src_negate: cdktf.stringToTerraform(this._internetService6SrcNegate),
      internet_service_negate: cdktf.stringToTerraform(this._internetServiceNegate),
      internet_service_src: cdktf.stringToTerraform(this._internetServiceSrc),
      internet_service_src_negate: cdktf.stringToTerraform(this._internetServiceSrcNegate),
      ippool: cdktf.stringToTerraform(this._ippool),
      ips_sensor: cdktf.stringToTerraform(this._ipsSensor),
      ips_voip_filter: cdktf.stringToTerraform(this._ipsVoipFilter),
      label: cdktf.stringToTerraform(this._label),
      learning_mode: cdktf.stringToTerraform(this._learningMode),
      log_http_transaction: cdktf.stringToTerraform(this._logHttpTransaction),
      logtraffic: cdktf.stringToTerraform(this._logtraffic),
      logtraffic_start: cdktf.stringToTerraform(this._logtrafficStart),
      match_vip: cdktf.stringToTerraform(this._matchVip),
      match_vip_only: cdktf.stringToTerraform(this._matchVipOnly),
      name: cdktf.stringToTerraform(this._name),
      nat: cdktf.stringToTerraform(this._nat),
      nat46: cdktf.stringToTerraform(this._nat46),
      nat64: cdktf.stringToTerraform(this._nat64),
      natinbound: cdktf.stringToTerraform(this._natinbound),
      natip: cdktf.stringToTerraform(this._natip),
      natoutbound: cdktf.stringToTerraform(this._natoutbound),
      np_acceleration: cdktf.stringToTerraform(this._npAcceleration),
      ntlm: cdktf.stringToTerraform(this._ntlm),
      ntlm_guest: cdktf.stringToTerraform(this._ntlmGuest),
      outbound: cdktf.stringToTerraform(this._outbound),
      passive_wan_health_measurement: cdktf.stringToTerraform(this._passiveWanHealthMeasurement),
      pcp_inbound: cdktf.stringToTerraform(this._pcpInbound),
      pcp_outbound: cdktf.stringToTerraform(this._pcpOutbound),
      per_ip_shaper: cdktf.stringToTerraform(this._perIpShaper),
      permit_any_host: cdktf.stringToTerraform(this._permitAnyHost),
      permit_stun_host: cdktf.stringToTerraform(this._permitStunHost),
      policy_expiry: cdktf.stringToTerraform(this._policyExpiry),
      policy_expiry_date: cdktf.stringToTerraform(this._policyExpiryDate),
      policy_expiry_date_utc: cdktf.stringToTerraform(this._policyExpiryDateUtc),
      policyid: cdktf.numberToTerraform(this._policyid),
      port_preserve: cdktf.stringToTerraform(this._portPreserve),
      port_random: cdktf.stringToTerraform(this._portRandom),
      profile_group: cdktf.stringToTerraform(this._profileGroup),
      profile_protocol_options: cdktf.stringToTerraform(this._profileProtocolOptions),
      profile_type: cdktf.stringToTerraform(this._profileType),
      radius_ip_auth_bypass: cdktf.stringToTerraform(this._radiusIpAuthBypass),
      radius_mac_auth_bypass: cdktf.stringToTerraform(this._radiusMacAuthBypass),
      redirect_url: cdktf.stringToTerraform(this._redirectUrl),
      replacemsg_override_group: cdktf.stringToTerraform(this._replacemsgOverrideGroup),
      reputation_direction: cdktf.stringToTerraform(this._reputationDirection),
      reputation_direction6: cdktf.stringToTerraform(this._reputationDirection6),
      reputation_minimum: cdktf.numberToTerraform(this._reputationMinimum),
      reputation_minimum6: cdktf.numberToTerraform(this._reputationMinimum6),
      rsso: cdktf.stringToTerraform(this._rsso),
      rtp_nat: cdktf.stringToTerraform(this._rtpNat),
      saml_server: cdktf.stringToTerraform(this._samlServer),
      scan_botnet_connections: cdktf.stringToTerraform(this._scanBotnetConnections),
      schedule: cdktf.stringToTerraform(this._schedule),
      schedule_timeout: cdktf.stringToTerraform(this._scheduleTimeout),
      scim: cdktf.stringToTerraform(this._scim),
      sctp_filter_profile: cdktf.stringToTerraform(this._sctpFilterProfile),
      send_deny_packet: cdktf.stringToTerraform(this._sendDenyPacket),
      service_negate: cdktf.stringToTerraform(this._serviceNegate),
      session_ttl: cdktf.numberToTerraform(this._sessionTtl),
      sgt_check: cdktf.stringToTerraform(this._sgtCheck),
      spamfilter_profile: cdktf.stringToTerraform(this._spamfilterProfile),
      srcaddr6_negate: cdktf.stringToTerraform(this._srcaddr6Negate),
      srcaddr_negate: cdktf.stringToTerraform(this._srcaddrNegate),
      ssh_filter_profile: cdktf.stringToTerraform(this._sshFilterProfile),
      ssh_policy_redirect: cdktf.stringToTerraform(this._sshPolicyRedirect),
      ssl_mirror: cdktf.stringToTerraform(this._sslMirror),
      ssl_ssh_profile: cdktf.stringToTerraform(this._sslSshProfile),
      status: cdktf.stringToTerraform(this._status),
      tcp_mss_receiver: cdktf.numberToTerraform(this._tcpMssReceiver),
      tcp_mss_sender: cdktf.numberToTerraform(this._tcpMssSender),
      tcp_session_without_syn: cdktf.stringToTerraform(this._tcpSessionWithoutSyn),
      timeout_send_rst: cdktf.stringToTerraform(this._timeoutSendRst),
      tos: cdktf.stringToTerraform(this._tos),
      tos_mask: cdktf.stringToTerraform(this._tosMask),
      tos_negate: cdktf.stringToTerraform(this._tosNegate),
      traffic_shaper: cdktf.stringToTerraform(this._trafficShaper),
      traffic_shaper_reverse: cdktf.stringToTerraform(this._trafficShaperReverse),
      utm_status: cdktf.stringToTerraform(this._utmStatus),
      uuid: cdktf.stringToTerraform(this._uuid),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      videofilter_profile: cdktf.stringToTerraform(this._videofilterProfile),
      virtual_patch_profile: cdktf.stringToTerraform(this._virtualPatchProfile),
      vlan_cos_fwd: cdktf.numberToTerraform(this._vlanCosFwd),
      vlan_cos_rev: cdktf.numberToTerraform(this._vlanCosRev),
      vlan_filter: cdktf.stringToTerraform(this._vlanFilter),
      voip_profile: cdktf.stringToTerraform(this._voipProfile),
      vpntunnel: cdktf.stringToTerraform(this._vpntunnel),
      waf_profile: cdktf.stringToTerraform(this._wafProfile),
      wanopt: cdktf.stringToTerraform(this._wanopt),
      wanopt_detection: cdktf.stringToTerraform(this._wanoptDetection),
      wanopt_passive_opt: cdktf.stringToTerraform(this._wanoptPassiveOpt),
      wanopt_peer: cdktf.stringToTerraform(this._wanoptPeer),
      wanopt_profile: cdktf.stringToTerraform(this._wanoptProfile),
      wccp: cdktf.stringToTerraform(this._wccp),
      webcache: cdktf.stringToTerraform(this._webcache),
      webcache_https: cdktf.stringToTerraform(this._webcacheHttps),
      webfilter_profile: cdktf.stringToTerraform(this._webfilterProfile),
      webproxy_forward_server: cdktf.stringToTerraform(this._webproxyForwardServer),
      webproxy_profile: cdktf.stringToTerraform(this._webproxyProfile),
      wsso: cdktf.stringToTerraform(this._wsso),
      ztna_device_ownership: cdktf.stringToTerraform(this._ztnaDeviceOwnership),
      ztna_ems_tag_negate: cdktf.stringToTerraform(this._ztnaEmsTagNegate),
      ztna_policy_redirect: cdktf.stringToTerraform(this._ztnaPolicyRedirect),
      ztna_status: cdktf.stringToTerraform(this._ztnaStatus),
      ztna_tags_match_logic: cdktf.stringToTerraform(this._ztnaTagsMatchLogic),
      app_category: cdktf.listMapper(firewallPolicyAppCategoryToTerraform, true)(this._appCategory.internalValue),
      app_group: cdktf.listMapper(firewallPolicyAppGroupToTerraform, true)(this._appGroup.internalValue),
      application: cdktf.listMapper(firewallPolicyApplicationToTerraform, true)(this._application.internalValue),
      custom_log_fields: cdktf.listMapper(firewallPolicyCustomLogFieldsToTerraform, true)(this._customLogFields.internalValue),
      devices: cdktf.listMapper(firewallPolicyDevicesToTerraform, true)(this._devices.internalValue),
      dstaddr: cdktf.listMapper(firewallPolicyDstaddrToTerraform, true)(this._dstaddr.internalValue),
      dstaddr6: cdktf.listMapper(firewallPolicyDstaddr6ToTerraform, true)(this._dstaddr6.internalValue),
      dstintf: cdktf.listMapper(firewallPolicyDstintfToTerraform, true)(this._dstintf.internalValue),
      fsso_groups: cdktf.listMapper(firewallPolicyFssoGroupsToTerraform, true)(this._fssoGroups.internalValue),
      groups: cdktf.listMapper(firewallPolicyGroupsToTerraform, true)(this._groups.internalValue),
      internet_service6_custom: cdktf.listMapper(firewallPolicyInternetService6CustomToTerraform, true)(this._internetService6Custom.internalValue),
      internet_service6_custom_group: cdktf.listMapper(firewallPolicyInternetService6CustomGroupToTerraform, true)(this._internetService6CustomGroup.internalValue),
      internet_service6_fortiguard: cdktf.listMapper(firewallPolicyInternetService6FortiguardToTerraform, true)(this._internetService6Fortiguard.internalValue),
      internet_service6_group: cdktf.listMapper(firewallPolicyInternetService6GroupToTerraform, true)(this._internetService6Group.internalValue),
      internet_service6_name: cdktf.listMapper(firewallPolicyInternetService6NameToTerraform, true)(this._internetService6Name.internalValue),
      internet_service6_src_custom: cdktf.listMapper(firewallPolicyInternetService6SrcCustomToTerraform, true)(this._internetService6SrcCustom.internalValue),
      internet_service6_src_custom_group: cdktf.listMapper(firewallPolicyInternetService6SrcCustomGroupToTerraform, true)(this._internetService6SrcCustomGroup.internalValue),
      internet_service6_src_fortiguard: cdktf.listMapper(firewallPolicyInternetService6SrcFortiguardToTerraform, true)(this._internetService6SrcFortiguard.internalValue),
      internet_service6_src_group: cdktf.listMapper(firewallPolicyInternetService6SrcGroupToTerraform, true)(this._internetService6SrcGroup.internalValue),
      internet_service6_src_name: cdktf.listMapper(firewallPolicyInternetService6SrcNameToTerraform, true)(this._internetService6SrcName.internalValue),
      internet_service_custom: cdktf.listMapper(firewallPolicyInternetServiceCustomToTerraform, true)(this._internetServiceCustom.internalValue),
      internet_service_custom_group: cdktf.listMapper(firewallPolicyInternetServiceCustomGroupToTerraform, true)(this._internetServiceCustomGroup.internalValue),
      internet_service_fortiguard: cdktf.listMapper(firewallPolicyInternetServiceFortiguardToTerraform, true)(this._internetServiceFortiguard.internalValue),
      internet_service_group: cdktf.listMapper(firewallPolicyInternetServiceGroupToTerraform, true)(this._internetServiceGroup.internalValue),
      internet_service_id: cdktf.listMapper(firewallPolicyInternetServiceIdToTerraform, true)(this._internetServiceId.internalValue),
      internet_service_name: cdktf.listMapper(firewallPolicyInternetServiceNameToTerraform, true)(this._internetServiceName.internalValue),
      internet_service_src_custom: cdktf.listMapper(firewallPolicyInternetServiceSrcCustomToTerraform, true)(this._internetServiceSrcCustom.internalValue),
      internet_service_src_custom_group: cdktf.listMapper(firewallPolicyInternetServiceSrcCustomGroupToTerraform, true)(this._internetServiceSrcCustomGroup.internalValue),
      internet_service_src_fortiguard: cdktf.listMapper(firewallPolicyInternetServiceSrcFortiguardToTerraform, true)(this._internetServiceSrcFortiguard.internalValue),
      internet_service_src_group: cdktf.listMapper(firewallPolicyInternetServiceSrcGroupToTerraform, true)(this._internetServiceSrcGroup.internalValue),
      internet_service_src_id: cdktf.listMapper(firewallPolicyInternetServiceSrcIdToTerraform, true)(this._internetServiceSrcId.internalValue),
      internet_service_src_name: cdktf.listMapper(firewallPolicyInternetServiceSrcNameToTerraform, true)(this._internetServiceSrcName.internalValue),
      network_service_dynamic: cdktf.listMapper(firewallPolicyNetworkServiceDynamicToTerraform, true)(this._networkServiceDynamic.internalValue),
      network_service_src_dynamic: cdktf.listMapper(firewallPolicyNetworkServiceSrcDynamicToTerraform, true)(this._networkServiceSrcDynamic.internalValue),
      ntlm_enabled_browsers: cdktf.listMapper(firewallPolicyNtlmEnabledBrowsersToTerraform, true)(this._ntlmEnabledBrowsers.internalValue),
      pcp_poolname: cdktf.listMapper(firewallPolicyPcpPoolnameToTerraform, true)(this._pcpPoolname.internalValue),
      poolname: cdktf.listMapper(firewallPolicyPoolnameToTerraform, true)(this._poolname.internalValue),
      poolname6: cdktf.listMapper(firewallPolicyPoolname6ToTerraform, true)(this._poolname6.internalValue),
      rtp_addr: cdktf.listMapper(firewallPolicyRtpAddrToTerraform, true)(this._rtpAddr.internalValue),
      scim_groups: cdktf.listMapper(firewallPolicyScimGroupsToTerraform, true)(this._scimGroups.internalValue),
      scim_users: cdktf.listMapper(firewallPolicyScimUsersToTerraform, true)(this._scimUsers.internalValue),
      service: cdktf.listMapper(firewallPolicyServiceToTerraform, true)(this._service.internalValue),
      sgt: cdktf.listMapper(firewallPolicySgtToTerraform, true)(this._sgt.internalValue),
      src_vendor_mac: cdktf.listMapper(firewallPolicySrcVendorMacToTerraform, true)(this._srcVendorMac.internalValue),
      srcaddr: cdktf.listMapper(firewallPolicySrcaddrToTerraform, true)(this._srcaddr.internalValue),
      srcaddr6: cdktf.listMapper(firewallPolicySrcaddr6ToTerraform, true)(this._srcaddr6.internalValue),
      srcintf: cdktf.listMapper(firewallPolicySrcintfToTerraform, true)(this._srcintf.internalValue),
      ssl_mirror_intf: cdktf.listMapper(firewallPolicySslMirrorIntfToTerraform, true)(this._sslMirrorIntf.internalValue),
      url_category: cdktf.listMapper(firewallPolicyUrlCategoryToTerraform, true)(this._urlCategory.internalValue),
      users: cdktf.listMapper(firewallPolicyUsersToTerraform, true)(this._users.internalValue),
      ztna_ems_tag: cdktf.listMapper(firewallPolicyZtnaEmsTagToTerraform, true)(this._ztnaEmsTag.internalValue),
      ztna_ems_tag_secondary: cdktf.listMapper(firewallPolicyZtnaEmsTagSecondaryToTerraform, true)(this._ztnaEmsTagSecondary.internalValue),
      ztna_geo_tag: cdktf.listMapper(firewallPolicyZtnaGeoTagToTerraform, true)(this._ztnaGeoTag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      anti_replay: {
        value: cdktf.stringToHclTerraform(this._antiReplay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_monitor: {
        value: cdktf.stringToHclTerraform(this._appMonitor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_list: {
        value: cdktf.stringToHclTerraform(this._applicationList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_cert: {
        value: cdktf.stringToHclTerraform(this._authCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_path: {
        value: cdktf.stringToHclTerraform(this._authPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_redirect_addr: {
        value: cdktf.stringToHclTerraform(this._authRedirectAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_asic_offload: {
        value: cdktf.stringToHclTerraform(this._autoAsicOffload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      av_profile: {
        value: cdktf.stringToHclTerraform(this._avProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_notification: {
        value: cdktf.stringToHclTerraform(this._blockNotification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      captive_portal_exempt: {
        value: cdktf.stringToHclTerraform(this._captivePortalExempt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capture_packet: {
        value: cdktf.stringToHclTerraform(this._capturePacket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      casb_profile: {
        value: cdktf.stringToHclTerraform(this._casbProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cifs_profile: {
        value: cdktf.stringToHclTerraform(this._cifsProfile),
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
      decrypted_traffic_mirror: {
        value: cdktf.stringToHclTerraform(this._decryptedTrafficMirror),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delay_tcp_npu_session: {
        value: cdktf.stringToHclTerraform(this._delayTcpNpuSession),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      diameter_filter_profile: {
        value: cdktf.stringToHclTerraform(this._diameterFilterProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      diffserv_copy: {
        value: cdktf.stringToHclTerraform(this._diffservCopy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      diffserv_forward: {
        value: cdktf.stringToHclTerraform(this._diffservForward),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      diffserv_reverse: {
        value: cdktf.stringToHclTerraform(this._diffservReverse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      diffservcode_forward: {
        value: cdktf.stringToHclTerraform(this._diffservcodeForward),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      diffservcode_rev: {
        value: cdktf.stringToHclTerraform(this._diffservcodeRev),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disclaimer: {
        value: cdktf.stringToHclTerraform(this._disclaimer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dlp_profile: {
        value: cdktf.stringToHclTerraform(this._dlpProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dlp_sensor: {
        value: cdktf.stringToHclTerraform(this._dlpSensor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dnsfilter_profile: {
        value: cdktf.stringToHclTerraform(this._dnsfilterProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dsri: {
        value: cdktf.stringToHclTerraform(this._dsri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dstaddr6_negate: {
        value: cdktf.stringToHclTerraform(this._dstaddr6Negate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dstaddr_negate: {
        value: cdktf.stringToHclTerraform(this._dstaddrNegate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_shaping: {
        value: cdktf.stringToHclTerraform(this._dynamicShaping),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_collect: {
        value: cdktf.stringToHclTerraform(this._emailCollect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      emailfilter_profile: {
        value: cdktf.stringToHclTerraform(this._emailfilterProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fec: {
        value: cdktf.stringToHclTerraform(this._fec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_filter_profile: {
        value: cdktf.stringToHclTerraform(this._fileFilterProfile),
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
      fixedport: {
        value: cdktf.stringToHclTerraform(this._fixedport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fsso: {
        value: cdktf.stringToHclTerraform(this._fsso),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fsso_agent_for_ntlm: {
        value: cdktf.stringToHclTerraform(this._fssoAgentForNtlm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      geoip_anycast: {
        value: cdktf.stringToHclTerraform(this._geoipAnycast),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      geoip_match: {
        value: cdktf.stringToHclTerraform(this._geoipMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      global_label: {
        value: cdktf.stringToHclTerraform(this._globalLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_policy_redirect: {
        value: cdktf.stringToHclTerraform(this._httpPolicyRedirect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icap_profile: {
        value: cdktf.stringToHclTerraform(this._icapProfile),
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
      identity_based_route: {
        value: cdktf.stringToHclTerraform(this._identityBasedRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inbound: {
        value: cdktf.stringToHclTerraform(this._inbound),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inspection_mode: {
        value: cdktf.stringToHclTerraform(this._inspectionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service: {
        value: cdktf.stringToHclTerraform(this._internetService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service6: {
        value: cdktf.stringToHclTerraform(this._internetService6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service6_negate: {
        value: cdktf.stringToHclTerraform(this._internetService6Negate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service6_src: {
        value: cdktf.stringToHclTerraform(this._internetService6Src),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service6_src_negate: {
        value: cdktf.stringToHclTerraform(this._internetService6SrcNegate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service_negate: {
        value: cdktf.stringToHclTerraform(this._internetServiceNegate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service_src: {
        value: cdktf.stringToHclTerraform(this._internetServiceSrc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service_src_negate: {
        value: cdktf.stringToHclTerraform(this._internetServiceSrcNegate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ippool: {
        value: cdktf.stringToHclTerraform(this._ippool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ips_sensor: {
        value: cdktf.stringToHclTerraform(this._ipsSensor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ips_voip_filter: {
        value: cdktf.stringToHclTerraform(this._ipsVoipFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      learning_mode: {
        value: cdktf.stringToHclTerraform(this._learningMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_http_transaction: {
        value: cdktf.stringToHclTerraform(this._logHttpTransaction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logtraffic: {
        value: cdktf.stringToHclTerraform(this._logtraffic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logtraffic_start: {
        value: cdktf.stringToHclTerraform(this._logtrafficStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_vip: {
        value: cdktf.stringToHclTerraform(this._matchVip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_vip_only: {
        value: cdktf.stringToHclTerraform(this._matchVipOnly),
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
      nat: {
        value: cdktf.stringToHclTerraform(this._nat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat46: {
        value: cdktf.stringToHclTerraform(this._nat46),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat64: {
        value: cdktf.stringToHclTerraform(this._nat64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      natinbound: {
        value: cdktf.stringToHclTerraform(this._natinbound),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      natip: {
        value: cdktf.stringToHclTerraform(this._natip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      natoutbound: {
        value: cdktf.stringToHclTerraform(this._natoutbound),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      np_acceleration: {
        value: cdktf.stringToHclTerraform(this._npAcceleration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ntlm: {
        value: cdktf.stringToHclTerraform(this._ntlm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ntlm_guest: {
        value: cdktf.stringToHclTerraform(this._ntlmGuest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outbound: {
        value: cdktf.stringToHclTerraform(this._outbound),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passive_wan_health_measurement: {
        value: cdktf.stringToHclTerraform(this._passiveWanHealthMeasurement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pcp_inbound: {
        value: cdktf.stringToHclTerraform(this._pcpInbound),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pcp_outbound: {
        value: cdktf.stringToHclTerraform(this._pcpOutbound),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      per_ip_shaper: {
        value: cdktf.stringToHclTerraform(this._perIpShaper),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permit_any_host: {
        value: cdktf.stringToHclTerraform(this._permitAnyHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permit_stun_host: {
        value: cdktf.stringToHclTerraform(this._permitStunHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_expiry: {
        value: cdktf.stringToHclTerraform(this._policyExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_expiry_date: {
        value: cdktf.stringToHclTerraform(this._policyExpiryDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_expiry_date_utc: {
        value: cdktf.stringToHclTerraform(this._policyExpiryDateUtc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policyid: {
        value: cdktf.numberToHclTerraform(this._policyid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_preserve: {
        value: cdktf.stringToHclTerraform(this._portPreserve),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_random: {
        value: cdktf.stringToHclTerraform(this._portRandom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_group: {
        value: cdktf.stringToHclTerraform(this._profileGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_protocol_options: {
        value: cdktf.stringToHclTerraform(this._profileProtocolOptions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_type: {
        value: cdktf.stringToHclTerraform(this._profileType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_ip_auth_bypass: {
        value: cdktf.stringToHclTerraform(this._radiusIpAuthBypass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_mac_auth_bypass: {
        value: cdktf.stringToHclTerraform(this._radiusMacAuthBypass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirect_url: {
        value: cdktf.stringToHclTerraform(this._redirectUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replacemsg_override_group: {
        value: cdktf.stringToHclTerraform(this._replacemsgOverrideGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reputation_direction: {
        value: cdktf.stringToHclTerraform(this._reputationDirection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reputation_direction6: {
        value: cdktf.stringToHclTerraform(this._reputationDirection6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reputation_minimum: {
        value: cdktf.numberToHclTerraform(this._reputationMinimum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reputation_minimum6: {
        value: cdktf.numberToHclTerraform(this._reputationMinimum6),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rsso: {
        value: cdktf.stringToHclTerraform(this._rsso),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rtp_nat: {
        value: cdktf.stringToHclTerraform(this._rtpNat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml_server: {
        value: cdktf.stringToHclTerraform(this._samlServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scan_botnet_connections: {
        value: cdktf.stringToHclTerraform(this._scanBotnetConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: cdktf.stringToHclTerraform(this._schedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_timeout: {
        value: cdktf.stringToHclTerraform(this._scheduleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scim: {
        value: cdktf.stringToHclTerraform(this._scim),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sctp_filter_profile: {
        value: cdktf.stringToHclTerraform(this._sctpFilterProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_deny_packet: {
        value: cdktf.stringToHclTerraform(this._sendDenyPacket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_negate: {
        value: cdktf.stringToHclTerraform(this._serviceNegate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_ttl: {
        value: cdktf.numberToHclTerraform(this._sessionTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sgt_check: {
        value: cdktf.stringToHclTerraform(this._sgtCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spamfilter_profile: {
        value: cdktf.stringToHclTerraform(this._spamfilterProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srcaddr6_negate: {
        value: cdktf.stringToHclTerraform(this._srcaddr6Negate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srcaddr_negate: {
        value: cdktf.stringToHclTerraform(this._srcaddrNegate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_filter_profile: {
        value: cdktf.stringToHclTerraform(this._sshFilterProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_policy_redirect: {
        value: cdktf.stringToHclTerraform(this._sshPolicyRedirect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_mirror: {
        value: cdktf.stringToHclTerraform(this._sslMirror),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_ssh_profile: {
        value: cdktf.stringToHclTerraform(this._sslSshProfile),
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
      tcp_mss_receiver: {
        value: cdktf.numberToHclTerraform(this._tcpMssReceiver),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_mss_sender: {
        value: cdktf.numberToHclTerraform(this._tcpMssSender),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_session_without_syn: {
        value: cdktf.stringToHclTerraform(this._tcpSessionWithoutSyn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout_send_rst: {
        value: cdktf.stringToHclTerraform(this._timeoutSendRst),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tos: {
        value: cdktf.stringToHclTerraform(this._tos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tos_mask: {
        value: cdktf.stringToHclTerraform(this._tosMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tos_negate: {
        value: cdktf.stringToHclTerraform(this._tosNegate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_shaper: {
        value: cdktf.stringToHclTerraform(this._trafficShaper),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_shaper_reverse: {
        value: cdktf.stringToHclTerraform(this._trafficShaperReverse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      utm_status: {
        value: cdktf.stringToHclTerraform(this._utmStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      videofilter_profile: {
        value: cdktf.stringToHclTerraform(this._videofilterProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_patch_profile: {
        value: cdktf.stringToHclTerraform(this._virtualPatchProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_cos_fwd: {
        value: cdktf.numberToHclTerraform(this._vlanCosFwd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan_cos_rev: {
        value: cdktf.numberToHclTerraform(this._vlanCosRev),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan_filter: {
        value: cdktf.stringToHclTerraform(this._vlanFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      voip_profile: {
        value: cdktf.stringToHclTerraform(this._voipProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpntunnel: {
        value: cdktf.stringToHclTerraform(this._vpntunnel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      waf_profile: {
        value: cdktf.stringToHclTerraform(this._wafProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wanopt: {
        value: cdktf.stringToHclTerraform(this._wanopt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wanopt_detection: {
        value: cdktf.stringToHclTerraform(this._wanoptDetection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wanopt_passive_opt: {
        value: cdktf.stringToHclTerraform(this._wanoptPassiveOpt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wanopt_peer: {
        value: cdktf.stringToHclTerraform(this._wanoptPeer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wanopt_profile: {
        value: cdktf.stringToHclTerraform(this._wanoptProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wccp: {
        value: cdktf.stringToHclTerraform(this._wccp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webcache: {
        value: cdktf.stringToHclTerraform(this._webcache),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webcache_https: {
        value: cdktf.stringToHclTerraform(this._webcacheHttps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webfilter_profile: {
        value: cdktf.stringToHclTerraform(this._webfilterProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webproxy_forward_server: {
        value: cdktf.stringToHclTerraform(this._webproxyForwardServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webproxy_profile: {
        value: cdktf.stringToHclTerraform(this._webproxyProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wsso: {
        value: cdktf.stringToHclTerraform(this._wsso),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ztna_device_ownership: {
        value: cdktf.stringToHclTerraform(this._ztnaDeviceOwnership),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ztna_ems_tag_negate: {
        value: cdktf.stringToHclTerraform(this._ztnaEmsTagNegate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ztna_policy_redirect: {
        value: cdktf.stringToHclTerraform(this._ztnaPolicyRedirect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ztna_status: {
        value: cdktf.stringToHclTerraform(this._ztnaStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ztna_tags_match_logic: {
        value: cdktf.stringToHclTerraform(this._ztnaTagsMatchLogic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_category: {
        value: cdktf.listMapperHcl(firewallPolicyAppCategoryToHclTerraform, true)(this._appCategory.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyAppCategoryList",
      },
      app_group: {
        value: cdktf.listMapperHcl(firewallPolicyAppGroupToHclTerraform, true)(this._appGroup.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyAppGroupList",
      },
      application: {
        value: cdktf.listMapperHcl(firewallPolicyApplicationToHclTerraform, true)(this._application.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyApplicationList",
      },
      custom_log_fields: {
        value: cdktf.listMapperHcl(firewallPolicyCustomLogFieldsToHclTerraform, true)(this._customLogFields.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyCustomLogFieldsList",
      },
      devices: {
        value: cdktf.listMapperHcl(firewallPolicyDevicesToHclTerraform, true)(this._devices.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallPolicyDevicesList",
      },
      dstaddr: {
        value: cdktf.listMapperHcl(firewallPolicyDstaddrToHclTerraform, true)(this._dstaddr.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyDstaddrList",
      },
      dstaddr6: {
        value: cdktf.listMapperHcl(firewallPolicyDstaddr6ToHclTerraform, true)(this._dstaddr6.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyDstaddr6List",
      },
      dstintf: {
        value: cdktf.listMapperHcl(firewallPolicyDstintfToHclTerraform, true)(this._dstintf.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyDstintfList",
      },
      fsso_groups: {
        value: cdktf.listMapperHcl(firewallPolicyFssoGroupsToHclTerraform, true)(this._fssoGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyFssoGroupsList",
      },
      groups: {
        value: cdktf.listMapperHcl(firewallPolicyGroupsToHclTerraform, true)(this._groups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyGroupsList",
      },
      internet_service6_custom: {
        value: cdktf.listMapperHcl(firewallPolicyInternetService6CustomToHclTerraform, true)(this._internetService6Custom.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyInternetService6CustomList",
      },
      internet_service6_custom_group: {
        value: cdktf.listMapperHcl(firewallPolicyInternetService6CustomGroupToHclTerraform, true)(this._internetService6CustomGroup.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyInternetService6CustomGroupList",
      },
      internet_service6_fortiguard: {
        value: cdktf.listMapperHcl(firewallPolicyInternetService6FortiguardToHclTerraform, true)(this._internetService6Fortiguard.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyInternetService6FortiguardList",
      },
      internet_service6_group: {
        value: cdktf.listMapperHcl(firewallPolicyInternetService6GroupToHclTerraform, true)(this._internetService6Group.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyInternetService6GroupList",
      },
      internet_service6_name: {
        value: cdktf.listMapperHcl(firewallPolicyInternetService6NameToHclTerraform, true)(this._internetService6Name.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyInternetService6NameList",
      },
      internet_service6_src_custom: {
        value: cdktf.listMapperHcl(firewallPolicyInternetService6SrcCustomToHclTerraform, true)(this._internetService6SrcCustom.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyInternetService6SrcCustomList",
      },
      internet_service6_src_custom_group: {
        value: cdktf.listMapperHcl(firewallPolicyInternetService6SrcCustomGroupToHclTerraform, true)(this._internetService6SrcCustomGroup.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyInternetService6SrcCustomGroupList",
      },
      internet_service6_src_fortiguard: {
        value: cdktf.listMapperHcl(firewallPolicyInternetService6SrcFortiguardToHclTerraform, true)(this._internetService6SrcFortiguard.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyInternetService6SrcFortiguardList",
      },
      internet_service6_src_group: {
        value: cdktf.listMapperHcl(firewallPolicyInternetService6SrcGroupToHclTerraform, true)(this._internetService6SrcGroup.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyInternetService6SrcGroupList",
      },
      internet_service6_src_name: {
        value: cdktf.listMapperHcl(firewallPolicyInternetService6SrcNameToHclTerraform, true)(this._internetService6SrcName.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyInternetService6SrcNameList",
      },
      internet_service_custom: {
        value: cdktf.listMapperHcl(firewallPolicyInternetServiceCustomToHclTerraform, true)(this._internetServiceCustom.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyInternetServiceCustomList",
      },
      internet_service_custom_group: {
        value: cdktf.listMapperHcl(firewallPolicyInternetServiceCustomGroupToHclTerraform, true)(this._internetServiceCustomGroup.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyInternetServiceCustomGroupList",
      },
      internet_service_fortiguard: {
        value: cdktf.listMapperHcl(firewallPolicyInternetServiceFortiguardToHclTerraform, true)(this._internetServiceFortiguard.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyInternetServiceFortiguardList",
      },
      internet_service_group: {
        value: cdktf.listMapperHcl(firewallPolicyInternetServiceGroupToHclTerraform, true)(this._internetServiceGroup.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyInternetServiceGroupList",
      },
      internet_service_id: {
        value: cdktf.listMapperHcl(firewallPolicyInternetServiceIdToHclTerraform, true)(this._internetServiceId.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyInternetServiceIdList",
      },
      internet_service_name: {
        value: cdktf.listMapperHcl(firewallPolicyInternetServiceNameToHclTerraform, true)(this._internetServiceName.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyInternetServiceNameList",
      },
      internet_service_src_custom: {
        value: cdktf.listMapperHcl(firewallPolicyInternetServiceSrcCustomToHclTerraform, true)(this._internetServiceSrcCustom.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyInternetServiceSrcCustomList",
      },
      internet_service_src_custom_group: {
        value: cdktf.listMapperHcl(firewallPolicyInternetServiceSrcCustomGroupToHclTerraform, true)(this._internetServiceSrcCustomGroup.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyInternetServiceSrcCustomGroupList",
      },
      internet_service_src_fortiguard: {
        value: cdktf.listMapperHcl(firewallPolicyInternetServiceSrcFortiguardToHclTerraform, true)(this._internetServiceSrcFortiguard.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyInternetServiceSrcFortiguardList",
      },
      internet_service_src_group: {
        value: cdktf.listMapperHcl(firewallPolicyInternetServiceSrcGroupToHclTerraform, true)(this._internetServiceSrcGroup.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyInternetServiceSrcGroupList",
      },
      internet_service_src_id: {
        value: cdktf.listMapperHcl(firewallPolicyInternetServiceSrcIdToHclTerraform, true)(this._internetServiceSrcId.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyInternetServiceSrcIdList",
      },
      internet_service_src_name: {
        value: cdktf.listMapperHcl(firewallPolicyInternetServiceSrcNameToHclTerraform, true)(this._internetServiceSrcName.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyInternetServiceSrcNameList",
      },
      network_service_dynamic: {
        value: cdktf.listMapperHcl(firewallPolicyNetworkServiceDynamicToHclTerraform, true)(this._networkServiceDynamic.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyNetworkServiceDynamicList",
      },
      network_service_src_dynamic: {
        value: cdktf.listMapperHcl(firewallPolicyNetworkServiceSrcDynamicToHclTerraform, true)(this._networkServiceSrcDynamic.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyNetworkServiceSrcDynamicList",
      },
      ntlm_enabled_browsers: {
        value: cdktf.listMapperHcl(firewallPolicyNtlmEnabledBrowsersToHclTerraform, true)(this._ntlmEnabledBrowsers.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyNtlmEnabledBrowsersList",
      },
      pcp_poolname: {
        value: cdktf.listMapperHcl(firewallPolicyPcpPoolnameToHclTerraform, true)(this._pcpPoolname.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyPcpPoolnameList",
      },
      poolname: {
        value: cdktf.listMapperHcl(firewallPolicyPoolnameToHclTerraform, true)(this._poolname.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyPoolnameList",
      },
      poolname6: {
        value: cdktf.listMapperHcl(firewallPolicyPoolname6ToHclTerraform, true)(this._poolname6.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyPoolname6List",
      },
      rtp_addr: {
        value: cdktf.listMapperHcl(firewallPolicyRtpAddrToHclTerraform, true)(this._rtpAddr.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyRtpAddrList",
      },
      scim_groups: {
        value: cdktf.listMapperHcl(firewallPolicyScimGroupsToHclTerraform, true)(this._scimGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyScimGroupsList",
      },
      scim_users: {
        value: cdktf.listMapperHcl(firewallPolicyScimUsersToHclTerraform, true)(this._scimUsers.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyScimUsersList",
      },
      service: {
        value: cdktf.listMapperHcl(firewallPolicyServiceToHclTerraform, true)(this._service.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyServiceList",
      },
      sgt: {
        value: cdktf.listMapperHcl(firewallPolicySgtToHclTerraform, true)(this._sgt.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicySgtList",
      },
      src_vendor_mac: {
        value: cdktf.listMapperHcl(firewallPolicySrcVendorMacToHclTerraform, true)(this._srcVendorMac.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicySrcVendorMacList",
      },
      srcaddr: {
        value: cdktf.listMapperHcl(firewallPolicySrcaddrToHclTerraform, true)(this._srcaddr.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicySrcaddrList",
      },
      srcaddr6: {
        value: cdktf.listMapperHcl(firewallPolicySrcaddr6ToHclTerraform, true)(this._srcaddr6.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicySrcaddr6List",
      },
      srcintf: {
        value: cdktf.listMapperHcl(firewallPolicySrcintfToHclTerraform, true)(this._srcintf.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicySrcintfList",
      },
      ssl_mirror_intf: {
        value: cdktf.listMapperHcl(firewallPolicySslMirrorIntfToHclTerraform, true)(this._sslMirrorIntf.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicySslMirrorIntfList",
      },
      url_category: {
        value: cdktf.listMapperHcl(firewallPolicyUrlCategoryToHclTerraform, true)(this._urlCategory.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyUrlCategoryList",
      },
      users: {
        value: cdktf.listMapperHcl(firewallPolicyUsersToHclTerraform, true)(this._users.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyUsersList",
      },
      ztna_ems_tag: {
        value: cdktf.listMapperHcl(firewallPolicyZtnaEmsTagToHclTerraform, true)(this._ztnaEmsTag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyZtnaEmsTagList",
      },
      ztna_ems_tag_secondary: {
        value: cdktf.listMapperHcl(firewallPolicyZtnaEmsTagSecondaryToHclTerraform, true)(this._ztnaEmsTagSecondary.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyZtnaEmsTagSecondaryList",
      },
      ztna_geo_tag: {
        value: cdktf.listMapperHcl(firewallPolicyZtnaGeoTagToHclTerraform, true)(this._ztnaGeoTag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicyZtnaGeoTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
