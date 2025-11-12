// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PackagesFirewallPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#_policy_block PackagesFirewallPolicy#_policy_block}
  */
  readonly policyBlock?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#action PackagesFirewallPolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#adom PackagesFirewallPolicy#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#anti_replay PackagesFirewallPolicy#anti_replay}
  */
  readonly antiReplay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#app_category PackagesFirewallPolicy#app_category}
  */
  readonly appCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#app_group PackagesFirewallPolicy#app_group}
  */
  readonly appGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#app_monitor PackagesFirewallPolicy#app_monitor}
  */
  readonly appMonitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#application PackagesFirewallPolicy#application}
  */
  readonly application?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#application_list PackagesFirewallPolicy#application_list}
  */
  readonly applicationList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#auth_cert PackagesFirewallPolicy#auth_cert}
  */
  readonly authCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#auth_path PackagesFirewallPolicy#auth_path}
  */
  readonly authPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#auth_redirect_addr PackagesFirewallPolicy#auth_redirect_addr}
  */
  readonly authRedirectAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#auto_asic_offload PackagesFirewallPolicy#auto_asic_offload}
  */
  readonly autoAsicOffload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#av_profile PackagesFirewallPolicy#av_profile}
  */
  readonly avProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#best_route PackagesFirewallPolicy#best_route}
  */
  readonly bestRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#block_notification PackagesFirewallPolicy#block_notification}
  */
  readonly blockNotification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#captive_portal_exempt PackagesFirewallPolicy#captive_portal_exempt}
  */
  readonly captivePortalExempt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#capture_packet PackagesFirewallPolicy#capture_packet}
  */
  readonly capturePacket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#casb_profile PackagesFirewallPolicy#casb_profile}
  */
  readonly casbProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#cgn_eif PackagesFirewallPolicy#cgn_eif}
  */
  readonly cgnEif?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#cgn_eim PackagesFirewallPolicy#cgn_eim}
  */
  readonly cgnEim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#cgn_log_server_grp PackagesFirewallPolicy#cgn_log_server_grp}
  */
  readonly cgnLogServerGrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#cgn_resource_quota PackagesFirewallPolicy#cgn_resource_quota}
  */
  readonly cgnResourceQuota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#cgn_session_quota PackagesFirewallPolicy#cgn_session_quota}
  */
  readonly cgnSessionQuota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#cgn_sw_eif_ctrl PackagesFirewallPolicy#cgn_sw_eif_ctrl}
  */
  readonly cgnSwEifCtrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#cifs_profile PackagesFirewallPolicy#cifs_profile}
  */
  readonly cifsProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#comments PackagesFirewallPolicy#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#custom_log_fields PackagesFirewallPolicy#custom_log_fields}
  */
  readonly customLogFields?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#decrypted_traffic_mirror PackagesFirewallPolicy#decrypted_traffic_mirror}
  */
  readonly decryptedTrafficMirror?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#delay_tcp_npu_session PackagesFirewallPolicy#delay_tcp_npu_session}
  */
  readonly delayTcpNpuSession?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#devices PackagesFirewallPolicy#devices}
  */
  readonly devices?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#diameter_filter_profile PackagesFirewallPolicy#diameter_filter_profile}
  */
  readonly diameterFilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#diffserv_copy PackagesFirewallPolicy#diffserv_copy}
  */
  readonly diffservCopy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#diffserv_forward PackagesFirewallPolicy#diffserv_forward}
  */
  readonly diffservForward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#diffserv_reverse PackagesFirewallPolicy#diffserv_reverse}
  */
  readonly diffservReverse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#diffservcode_forward PackagesFirewallPolicy#diffservcode_forward}
  */
  readonly diffservcodeForward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#diffservcode_rev PackagesFirewallPolicy#diffservcode_rev}
  */
  readonly diffservcodeRev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#disclaimer PackagesFirewallPolicy#disclaimer}
  */
  readonly disclaimer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#dlp_profile PackagesFirewallPolicy#dlp_profile}
  */
  readonly dlpProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#dlp_sensor PackagesFirewallPolicy#dlp_sensor}
  */
  readonly dlpSensor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#dnsfilter_profile PackagesFirewallPolicy#dnsfilter_profile}
  */
  readonly dnsfilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#dscp_match PackagesFirewallPolicy#dscp_match}
  */
  readonly dscpMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#dscp_negate PackagesFirewallPolicy#dscp_negate}
  */
  readonly dscpNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#dscp_value PackagesFirewallPolicy#dscp_value}
  */
  readonly dscpValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#dsri PackagesFirewallPolicy#dsri}
  */
  readonly dsri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#dstaddr PackagesFirewallPolicy#dstaddr}
  */
  readonly dstaddr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#dstaddr6 PackagesFirewallPolicy#dstaddr6}
  */
  readonly dstaddr6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#dstaddr6_negate PackagesFirewallPolicy#dstaddr6_negate}
  */
  readonly dstaddr6Negate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#dstaddr_negate PackagesFirewallPolicy#dstaddr_negate}
  */
  readonly dstaddrNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#dstintf PackagesFirewallPolicy#dstintf}
  */
  readonly dstintf?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#dynamic_shaping PackagesFirewallPolicy#dynamic_shaping}
  */
  readonly dynamicShaping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#dynamic_sort_subtable PackagesFirewallPolicy#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#eif_check PackagesFirewallPolicy#eif_check}
  */
  readonly eifCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#eif_learn PackagesFirewallPolicy#eif_learn}
  */
  readonly eifLearn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#email_collect PackagesFirewallPolicy#email_collect}
  */
  readonly emailCollect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#emailfilter_profile PackagesFirewallPolicy#emailfilter_profile}
  */
  readonly emailfilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#fec PackagesFirewallPolicy#fec}
  */
  readonly fec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#file_filter_profile PackagesFirewallPolicy#file_filter_profile}
  */
  readonly fileFilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#firewall_session_dirty PackagesFirewallPolicy#firewall_session_dirty}
  */
  readonly firewallSessionDirty?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#fixedport PackagesFirewallPolicy#fixedport}
  */
  readonly fixedport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#fsso PackagesFirewallPolicy#fsso}
  */
  readonly fsso?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#fsso_agent_for_ntlm PackagesFirewallPolicy#fsso_agent_for_ntlm}
  */
  readonly fssoAgentForNtlm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#fsso_groups PackagesFirewallPolicy#fsso_groups}
  */
  readonly fssoGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#geoip_anycast PackagesFirewallPolicy#geoip_anycast}
  */
  readonly geoipAnycast?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#geoip_match PackagesFirewallPolicy#geoip_match}
  */
  readonly geoipMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#global_label PackagesFirewallPolicy#global_label}
  */
  readonly globalLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#groups PackagesFirewallPolicy#groups}
  */
  readonly groups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#gtp_profile PackagesFirewallPolicy#gtp_profile}
  */
  readonly gtpProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#http_policy_redirect PackagesFirewallPolicy#http_policy_redirect}
  */
  readonly httpPolicyRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#icap_profile PackagesFirewallPolicy#icap_profile}
  */
  readonly icapProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#id PackagesFirewallPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#identity_based_route PackagesFirewallPolicy#identity_based_route}
  */
  readonly identityBasedRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#inbound PackagesFirewallPolicy#inbound}
  */
  readonly inbound?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#inspection_mode PackagesFirewallPolicy#inspection_mode}
  */
  readonly inspectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#internet_service PackagesFirewallPolicy#internet_service}
  */
  readonly internetService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#internet_service6 PackagesFirewallPolicy#internet_service6}
  */
  readonly internetService6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#internet_service6_custom PackagesFirewallPolicy#internet_service6_custom}
  */
  readonly internetService6Custom?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#internet_service6_custom_group PackagesFirewallPolicy#internet_service6_custom_group}
  */
  readonly internetService6CustomGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#internet_service6_group PackagesFirewallPolicy#internet_service6_group}
  */
  readonly internetService6Group?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#internet_service6_name PackagesFirewallPolicy#internet_service6_name}
  */
  readonly internetService6Name?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#internet_service6_negate PackagesFirewallPolicy#internet_service6_negate}
  */
  readonly internetService6Negate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#internet_service6_src PackagesFirewallPolicy#internet_service6_src}
  */
  readonly internetService6Src?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#internet_service6_src_custom PackagesFirewallPolicy#internet_service6_src_custom}
  */
  readonly internetService6SrcCustom?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#internet_service6_src_custom_group PackagesFirewallPolicy#internet_service6_src_custom_group}
  */
  readonly internetService6SrcCustomGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#internet_service6_src_group PackagesFirewallPolicy#internet_service6_src_group}
  */
  readonly internetService6SrcGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#internet_service6_src_name PackagesFirewallPolicy#internet_service6_src_name}
  */
  readonly internetService6SrcName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#internet_service6_src_negate PackagesFirewallPolicy#internet_service6_src_negate}
  */
  readonly internetService6SrcNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#internet_service_custom PackagesFirewallPolicy#internet_service_custom}
  */
  readonly internetServiceCustom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#internet_service_custom_group PackagesFirewallPolicy#internet_service_custom_group}
  */
  readonly internetServiceCustomGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#internet_service_group PackagesFirewallPolicy#internet_service_group}
  */
  readonly internetServiceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#internet_service_id PackagesFirewallPolicy#internet_service_id}
  */
  readonly internetServiceId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#internet_service_name PackagesFirewallPolicy#internet_service_name}
  */
  readonly internetServiceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#internet_service_negate PackagesFirewallPolicy#internet_service_negate}
  */
  readonly internetServiceNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#internet_service_src PackagesFirewallPolicy#internet_service_src}
  */
  readonly internetServiceSrc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#internet_service_src_custom PackagesFirewallPolicy#internet_service_src_custom}
  */
  readonly internetServiceSrcCustom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#internet_service_src_custom_group PackagesFirewallPolicy#internet_service_src_custom_group}
  */
  readonly internetServiceSrcCustomGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#internet_service_src_group PackagesFirewallPolicy#internet_service_src_group}
  */
  readonly internetServiceSrcGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#internet_service_src_id PackagesFirewallPolicy#internet_service_src_id}
  */
  readonly internetServiceSrcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#internet_service_src_name PackagesFirewallPolicy#internet_service_src_name}
  */
  readonly internetServiceSrcName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#internet_service_src_negate PackagesFirewallPolicy#internet_service_src_negate}
  */
  readonly internetServiceSrcNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#ip_version_type PackagesFirewallPolicy#ip_version_type}
  */
  readonly ipVersionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#ippool PackagesFirewallPolicy#ippool}
  */
  readonly ippool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#ips_sensor PackagesFirewallPolicy#ips_sensor}
  */
  readonly ipsSensor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#ips_voip_filter PackagesFirewallPolicy#ips_voip_filter}
  */
  readonly ipsVoipFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#label PackagesFirewallPolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#learning_mode PackagesFirewallPolicy#learning_mode}
  */
  readonly learningMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#log_http_transaction PackagesFirewallPolicy#log_http_transaction}
  */
  readonly logHttpTransaction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#logtraffic PackagesFirewallPolicy#logtraffic}
  */
  readonly logtraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#logtraffic_start PackagesFirewallPolicy#logtraffic_start}
  */
  readonly logtrafficStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#match_vip PackagesFirewallPolicy#match_vip}
  */
  readonly matchVip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#match_vip_only PackagesFirewallPolicy#match_vip_only}
  */
  readonly matchVipOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#mms_profile PackagesFirewallPolicy#mms_profile}
  */
  readonly mmsProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#name PackagesFirewallPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#nat PackagesFirewallPolicy#nat}
  */
  readonly nat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#nat46 PackagesFirewallPolicy#nat46}
  */
  readonly nat46?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#nat64 PackagesFirewallPolicy#nat64}
  */
  readonly nat64?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#natinbound PackagesFirewallPolicy#natinbound}
  */
  readonly natinbound?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#natip PackagesFirewallPolicy#natip}
  */
  readonly natip?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#natoutbound PackagesFirewallPolicy#natoutbound}
  */
  readonly natoutbound?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#network_service_dynamic PackagesFirewallPolicy#network_service_dynamic}
  */
  readonly networkServiceDynamic?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#network_service_src_dynamic PackagesFirewallPolicy#network_service_src_dynamic}
  */
  readonly networkServiceSrcDynamic?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#np_acceleration PackagesFirewallPolicy#np_acceleration}
  */
  readonly npAcceleration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#ntlm PackagesFirewallPolicy#ntlm}
  */
  readonly ntlm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#ntlm_enabled_browsers PackagesFirewallPolicy#ntlm_enabled_browsers}
  */
  readonly ntlmEnabledBrowsers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#ntlm_guest PackagesFirewallPolicy#ntlm_guest}
  */
  readonly ntlmGuest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#outbound PackagesFirewallPolicy#outbound}
  */
  readonly outbound?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#passive_wan_health_measurement PackagesFirewallPolicy#passive_wan_health_measurement}
  */
  readonly passiveWanHealthMeasurement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#pcp_inbound PackagesFirewallPolicy#pcp_inbound}
  */
  readonly pcpInbound?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#pcp_outbound PackagesFirewallPolicy#pcp_outbound}
  */
  readonly pcpOutbound?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#pcp_poolname PackagesFirewallPolicy#pcp_poolname}
  */
  readonly pcpPoolname?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#per_ip_shaper PackagesFirewallPolicy#per_ip_shaper}
  */
  readonly perIpShaper?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#permit_any_host PackagesFirewallPolicy#permit_any_host}
  */
  readonly permitAnyHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#permit_stun_host PackagesFirewallPolicy#permit_stun_host}
  */
  readonly permitStunHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#pfcp_profile PackagesFirewallPolicy#pfcp_profile}
  */
  readonly pfcpProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#pkg PackagesFirewallPolicy#pkg}
  */
  readonly pkg: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#pkg_folder_path PackagesFirewallPolicy#pkg_folder_path}
  */
  readonly pkgFolderPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#policy_behaviour_type PackagesFirewallPolicy#policy_behaviour_type}
  */
  readonly policyBehaviourType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#policy_expiry PackagesFirewallPolicy#policy_expiry}
  */
  readonly policyExpiry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#policy_expiry_date PackagesFirewallPolicy#policy_expiry_date}
  */
  readonly policyExpiryDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#policy_expiry_date_utc PackagesFirewallPolicy#policy_expiry_date_utc}
  */
  readonly policyExpiryDateUtc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#policy_offload PackagesFirewallPolicy#policy_offload}
  */
  readonly policyOffload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#policyid PackagesFirewallPolicy#policyid}
  */
  readonly policyid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#poolname PackagesFirewallPolicy#poolname}
  */
  readonly poolname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#poolname6 PackagesFirewallPolicy#poolname6}
  */
  readonly poolname6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#port_preserve PackagesFirewallPolicy#port_preserve}
  */
  readonly portPreserve?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#port_random PackagesFirewallPolicy#port_random}
  */
  readonly portRandom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#profile_group PackagesFirewallPolicy#profile_group}
  */
  readonly profileGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#profile_protocol_options PackagesFirewallPolicy#profile_protocol_options}
  */
  readonly profileProtocolOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#profile_type PackagesFirewallPolicy#profile_type}
  */
  readonly profileType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#radius_ip_auth_bypass PackagesFirewallPolicy#radius_ip_auth_bypass}
  */
  readonly radiusIpAuthBypass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#radius_mac_auth_bypass PackagesFirewallPolicy#radius_mac_auth_bypass}
  */
  readonly radiusMacAuthBypass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#redirect_url PackagesFirewallPolicy#redirect_url}
  */
  readonly redirectUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#replacemsg_override_group PackagesFirewallPolicy#replacemsg_override_group}
  */
  readonly replacemsgOverrideGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#reputation_direction PackagesFirewallPolicy#reputation_direction}
  */
  readonly reputationDirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#reputation_direction6 PackagesFirewallPolicy#reputation_direction6}
  */
  readonly reputationDirection6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#reputation_minimum PackagesFirewallPolicy#reputation_minimum}
  */
  readonly reputationMinimum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#reputation_minimum6 PackagesFirewallPolicy#reputation_minimum6}
  */
  readonly reputationMinimum6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#rsso PackagesFirewallPolicy#rsso}
  */
  readonly rsso?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#rtp_addr PackagesFirewallPolicy#rtp_addr}
  */
  readonly rtpAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#rtp_nat PackagesFirewallPolicy#rtp_nat}
  */
  readonly rtpNat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#scan_botnet_connections PackagesFirewallPolicy#scan_botnet_connections}
  */
  readonly scanBotnetConnections?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#schedule PackagesFirewallPolicy#schedule}
  */
  readonly schedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#schedule_timeout PackagesFirewallPolicy#schedule_timeout}
  */
  readonly scheduleTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#scopetype PackagesFirewallPolicy#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#sctp_filter_profile PackagesFirewallPolicy#sctp_filter_profile}
  */
  readonly sctpFilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#send_deny_packet PackagesFirewallPolicy#send_deny_packet}
  */
  readonly sendDenyPacket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#service PackagesFirewallPolicy#service}
  */
  readonly service?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#service_negate PackagesFirewallPolicy#service_negate}
  */
  readonly serviceNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#session_ttl PackagesFirewallPolicy#session_ttl}
  */
  readonly sessionTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#sgt PackagesFirewallPolicy#sgt}
  */
  readonly sgt?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#sgt_check PackagesFirewallPolicy#sgt_check}
  */
  readonly sgtCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#spamfilter_profile PackagesFirewallPolicy#spamfilter_profile}
  */
  readonly spamfilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#src_vendor_mac PackagesFirewallPolicy#src_vendor_mac}
  */
  readonly srcVendorMac?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#srcaddr PackagesFirewallPolicy#srcaddr}
  */
  readonly srcaddr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#srcaddr6 PackagesFirewallPolicy#srcaddr6}
  */
  readonly srcaddr6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#srcaddr6_negate PackagesFirewallPolicy#srcaddr6_negate}
  */
  readonly srcaddr6Negate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#srcaddr_negate PackagesFirewallPolicy#srcaddr_negate}
  */
  readonly srcaddrNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#srcintf PackagesFirewallPolicy#srcintf}
  */
  readonly srcintf?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#ssh_filter_profile PackagesFirewallPolicy#ssh_filter_profile}
  */
  readonly sshFilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#ssh_policy_redirect PackagesFirewallPolicy#ssh_policy_redirect}
  */
  readonly sshPolicyRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#ssl_mirror PackagesFirewallPolicy#ssl_mirror}
  */
  readonly sslMirror?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#ssl_mirror_intf PackagesFirewallPolicy#ssl_mirror_intf}
  */
  readonly sslMirrorIntf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#ssl_ssh_profile PackagesFirewallPolicy#ssl_ssh_profile}
  */
  readonly sslSshProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#status PackagesFirewallPolicy#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#tcp_mss_receiver PackagesFirewallPolicy#tcp_mss_receiver}
  */
  readonly tcpMssReceiver?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#tcp_mss_sender PackagesFirewallPolicy#tcp_mss_sender}
  */
  readonly tcpMssSender?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#tcp_session_without_syn PackagesFirewallPolicy#tcp_session_without_syn}
  */
  readonly tcpSessionWithoutSyn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#tcp_timeout_pid PackagesFirewallPolicy#tcp_timeout_pid}
  */
  readonly tcpTimeoutPid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#timeout_send_rst PackagesFirewallPolicy#timeout_send_rst}
  */
  readonly timeoutSendRst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#tos PackagesFirewallPolicy#tos}
  */
  readonly tos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#tos_mask PackagesFirewallPolicy#tos_mask}
  */
  readonly tosMask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#tos_negate PackagesFirewallPolicy#tos_negate}
  */
  readonly tosNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#traffic_shaper PackagesFirewallPolicy#traffic_shaper}
  */
  readonly trafficShaper?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#traffic_shaper_reverse PackagesFirewallPolicy#traffic_shaper_reverse}
  */
  readonly trafficShaperReverse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#udp_timeout_pid PackagesFirewallPolicy#udp_timeout_pid}
  */
  readonly udpTimeoutPid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#url_category PackagesFirewallPolicy#url_category}
  */
  readonly urlCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#users PackagesFirewallPolicy#users}
  */
  readonly users?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#utm_status PackagesFirewallPolicy#utm_status}
  */
  readonly utmStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#uuid PackagesFirewallPolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#videofilter_profile PackagesFirewallPolicy#videofilter_profile}
  */
  readonly videofilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#virtual_patch_profile PackagesFirewallPolicy#virtual_patch_profile}
  */
  readonly virtualPatchProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#vlan_cos_fwd PackagesFirewallPolicy#vlan_cos_fwd}
  */
  readonly vlanCosFwd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#vlan_cos_rev PackagesFirewallPolicy#vlan_cos_rev}
  */
  readonly vlanCosRev?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#vlan_filter PackagesFirewallPolicy#vlan_filter}
  */
  readonly vlanFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#voip_profile PackagesFirewallPolicy#voip_profile}
  */
  readonly voipProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#vpntunnel PackagesFirewallPolicy#vpntunnel}
  */
  readonly vpntunnel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#waf_profile PackagesFirewallPolicy#waf_profile}
  */
  readonly wafProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#wanopt PackagesFirewallPolicy#wanopt}
  */
  readonly wanopt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#wanopt_detection PackagesFirewallPolicy#wanopt_detection}
  */
  readonly wanoptDetection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#wanopt_passive_opt PackagesFirewallPolicy#wanopt_passive_opt}
  */
  readonly wanoptPassiveOpt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#wanopt_peer PackagesFirewallPolicy#wanopt_peer}
  */
  readonly wanoptPeer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#wanopt_profile PackagesFirewallPolicy#wanopt_profile}
  */
  readonly wanoptProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#wccp PackagesFirewallPolicy#wccp}
  */
  readonly wccp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#webcache PackagesFirewallPolicy#webcache}
  */
  readonly webcache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#webcache_https PackagesFirewallPolicy#webcache_https}
  */
  readonly webcacheHttps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#webfilter_profile PackagesFirewallPolicy#webfilter_profile}
  */
  readonly webfilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#webproxy_forward_server PackagesFirewallPolicy#webproxy_forward_server}
  */
  readonly webproxyForwardServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#webproxy_profile PackagesFirewallPolicy#webproxy_profile}
  */
  readonly webproxyProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#wsso PackagesFirewallPolicy#wsso}
  */
  readonly wsso?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#ztna_device_ownership PackagesFirewallPolicy#ztna_device_ownership}
  */
  readonly ztnaDeviceOwnership?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#ztna_ems_tag PackagesFirewallPolicy#ztna_ems_tag}
  */
  readonly ztnaEmsTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#ztna_ems_tag_negate PackagesFirewallPolicy#ztna_ems_tag_negate}
  */
  readonly ztnaEmsTagNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#ztna_ems_tag_secondary PackagesFirewallPolicy#ztna_ems_tag_secondary}
  */
  readonly ztnaEmsTagSecondary?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#ztna_geo_tag PackagesFirewallPolicy#ztna_geo_tag}
  */
  readonly ztnaGeoTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#ztna_policy_redirect PackagesFirewallPolicy#ztna_policy_redirect}
  */
  readonly ztnaPolicyRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#ztna_status PackagesFirewallPolicy#ztna_status}
  */
  readonly ztnaStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#ztna_tags_match_logic PackagesFirewallPolicy#ztna_tags_match_logic}
  */
  readonly ztnaTagsMatchLogic?: string;
  /**
  * vpn_dst_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#vpn_dst_node PackagesFirewallPolicy#vpn_dst_node}
  */
  readonly vpnDstNode?: PackagesFirewallPolicyVpnDstNode[] | cdktf.IResolvable;
  /**
  * vpn_src_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#vpn_src_node PackagesFirewallPolicy#vpn_src_node}
  */
  readonly vpnSrcNode?: PackagesFirewallPolicyVpnSrcNode[] | cdktf.IResolvable;
}
export interface PackagesFirewallPolicyVpnDstNode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#host PackagesFirewallPolicy#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#seq PackagesFirewallPolicy#seq}
  */
  readonly seq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#subnet PackagesFirewallPolicy#subnet}
  */
  readonly subnet?: string;
}

export function packagesFirewallPolicyVpnDstNodeToTerraform(struct?: PackagesFirewallPolicyVpnDstNode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    seq: cdktf.numberToTerraform(struct!.seq),
    subnet: cdktf.stringToTerraform(struct!.subnet),
  }
}


export function packagesFirewallPolicyVpnDstNodeToHclTerraform(struct?: PackagesFirewallPolicyVpnDstNode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seq: {
      value: cdktf.numberToHclTerraform(struct!.seq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PackagesFirewallPolicyVpnDstNodeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PackagesFirewallPolicyVpnDstNode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._seq !== undefined) {
      hasAnyValues = true;
      internalValueResult.seq = this._seq;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PackagesFirewallPolicyVpnDstNode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._seq = undefined;
      this._subnet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._seq = value.seq;
      this._subnet = value.subnet;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // seq - computed: false, optional: true, required: false
  private _seq?: number; 
  public get seq() {
    return this.getNumberAttribute('seq');
  }
  public set seq(value: number) {
    this._seq = value;
  }
  public resetSeq() {
    this._seq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seqInput() {
    return this._seq;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }
}

export class PackagesFirewallPolicyVpnDstNodeList extends cdktf.ComplexList {
  public internalValue? : PackagesFirewallPolicyVpnDstNode[] | cdktf.IResolvable

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
  public get(index: number): PackagesFirewallPolicyVpnDstNodeOutputReference {
    return new PackagesFirewallPolicyVpnDstNodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PackagesFirewallPolicyVpnSrcNode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#host PackagesFirewallPolicy#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#seq PackagesFirewallPolicy#seq}
  */
  readonly seq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#subnet PackagesFirewallPolicy#subnet}
  */
  readonly subnet?: string;
}

export function packagesFirewallPolicyVpnSrcNodeToTerraform(struct?: PackagesFirewallPolicyVpnSrcNode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    seq: cdktf.numberToTerraform(struct!.seq),
    subnet: cdktf.stringToTerraform(struct!.subnet),
  }
}


export function packagesFirewallPolicyVpnSrcNodeToHclTerraform(struct?: PackagesFirewallPolicyVpnSrcNode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seq: {
      value: cdktf.numberToHclTerraform(struct!.seq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PackagesFirewallPolicyVpnSrcNodeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PackagesFirewallPolicyVpnSrcNode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._seq !== undefined) {
      hasAnyValues = true;
      internalValueResult.seq = this._seq;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PackagesFirewallPolicyVpnSrcNode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._seq = undefined;
      this._subnet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._seq = value.seq;
      this._subnet = value.subnet;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // seq - computed: false, optional: true, required: false
  private _seq?: number; 
  public get seq() {
    return this.getNumberAttribute('seq');
  }
  public set seq(value: number) {
    this._seq = value;
  }
  public resetSeq() {
    this._seq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seqInput() {
    return this._seq;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }
}

export class PackagesFirewallPolicyVpnSrcNodeList extends cdktf.ComplexList {
  public internalValue? : PackagesFirewallPolicyVpnSrcNode[] | cdktf.IResolvable

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
  public get(index: number): PackagesFirewallPolicyVpnSrcNodeOutputReference {
    return new PackagesFirewallPolicyVpnSrcNodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy fortimanager_packages_firewall_policy}
*/
export class PackagesFirewallPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_packages_firewall_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PackagesFirewallPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PackagesFirewallPolicy to import
  * @param importFromId The id of the existing PackagesFirewallPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PackagesFirewallPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_packages_firewall_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_policy fortimanager_packages_firewall_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PackagesFirewallPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: PackagesFirewallPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_packages_firewall_policy',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._policyBlock = config.policyBlock;
    this._action = config.action;
    this._adom = config.adom;
    this._antiReplay = config.antiReplay;
    this._appCategory = config.appCategory;
    this._appGroup = config.appGroup;
    this._appMonitor = config.appMonitor;
    this._application = config.application;
    this._applicationList = config.applicationList;
    this._authCert = config.authCert;
    this._authPath = config.authPath;
    this._authRedirectAddr = config.authRedirectAddr;
    this._autoAsicOffload = config.autoAsicOffload;
    this._avProfile = config.avProfile;
    this._bestRoute = config.bestRoute;
    this._blockNotification = config.blockNotification;
    this._captivePortalExempt = config.captivePortalExempt;
    this._capturePacket = config.capturePacket;
    this._casbProfile = config.casbProfile;
    this._cgnEif = config.cgnEif;
    this._cgnEim = config.cgnEim;
    this._cgnLogServerGrp = config.cgnLogServerGrp;
    this._cgnResourceQuota = config.cgnResourceQuota;
    this._cgnSessionQuota = config.cgnSessionQuota;
    this._cgnSwEifCtrl = config.cgnSwEifCtrl;
    this._cifsProfile = config.cifsProfile;
    this._comments = config.comments;
    this._customLogFields = config.customLogFields;
    this._decryptedTrafficMirror = config.decryptedTrafficMirror;
    this._delayTcpNpuSession = config.delayTcpNpuSession;
    this._devices = config.devices;
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
    this._dscpMatch = config.dscpMatch;
    this._dscpNegate = config.dscpNegate;
    this._dscpValue = config.dscpValue;
    this._dsri = config.dsri;
    this._dstaddr = config.dstaddr;
    this._dstaddr6 = config.dstaddr6;
    this._dstaddr6Negate = config.dstaddr6Negate;
    this._dstaddrNegate = config.dstaddrNegate;
    this._dstintf = config.dstintf;
    this._dynamicShaping = config.dynamicShaping;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._eifCheck = config.eifCheck;
    this._eifLearn = config.eifLearn;
    this._emailCollect = config.emailCollect;
    this._emailfilterProfile = config.emailfilterProfile;
    this._fec = config.fec;
    this._fileFilterProfile = config.fileFilterProfile;
    this._firewallSessionDirty = config.firewallSessionDirty;
    this._fixedport = config.fixedport;
    this._fsso = config.fsso;
    this._fssoAgentForNtlm = config.fssoAgentForNtlm;
    this._fssoGroups = config.fssoGroups;
    this._geoipAnycast = config.geoipAnycast;
    this._geoipMatch = config.geoipMatch;
    this._globalLabel = config.globalLabel;
    this._groups = config.groups;
    this._gtpProfile = config.gtpProfile;
    this._httpPolicyRedirect = config.httpPolicyRedirect;
    this._icapProfile = config.icapProfile;
    this._id = config.id;
    this._identityBasedRoute = config.identityBasedRoute;
    this._inbound = config.inbound;
    this._inspectionMode = config.inspectionMode;
    this._internetService = config.internetService;
    this._internetService6 = config.internetService6;
    this._internetService6Custom = config.internetService6Custom;
    this._internetService6CustomGroup = config.internetService6CustomGroup;
    this._internetService6Group = config.internetService6Group;
    this._internetService6Name = config.internetService6Name;
    this._internetService6Negate = config.internetService6Negate;
    this._internetService6Src = config.internetService6Src;
    this._internetService6SrcCustom = config.internetService6SrcCustom;
    this._internetService6SrcCustomGroup = config.internetService6SrcCustomGroup;
    this._internetService6SrcGroup = config.internetService6SrcGroup;
    this._internetService6SrcName = config.internetService6SrcName;
    this._internetService6SrcNegate = config.internetService6SrcNegate;
    this._internetServiceCustom = config.internetServiceCustom;
    this._internetServiceCustomGroup = config.internetServiceCustomGroup;
    this._internetServiceGroup = config.internetServiceGroup;
    this._internetServiceId = config.internetServiceId;
    this._internetServiceName = config.internetServiceName;
    this._internetServiceNegate = config.internetServiceNegate;
    this._internetServiceSrc = config.internetServiceSrc;
    this._internetServiceSrcCustom = config.internetServiceSrcCustom;
    this._internetServiceSrcCustomGroup = config.internetServiceSrcCustomGroup;
    this._internetServiceSrcGroup = config.internetServiceSrcGroup;
    this._internetServiceSrcId = config.internetServiceSrcId;
    this._internetServiceSrcName = config.internetServiceSrcName;
    this._internetServiceSrcNegate = config.internetServiceSrcNegate;
    this._ipVersionType = config.ipVersionType;
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
    this._mmsProfile = config.mmsProfile;
    this._name = config.name;
    this._nat = config.nat;
    this._nat46 = config.nat46;
    this._nat64 = config.nat64;
    this._natinbound = config.natinbound;
    this._natip = config.natip;
    this._natoutbound = config.natoutbound;
    this._networkServiceDynamic = config.networkServiceDynamic;
    this._networkServiceSrcDynamic = config.networkServiceSrcDynamic;
    this._npAcceleration = config.npAcceleration;
    this._ntlm = config.ntlm;
    this._ntlmEnabledBrowsers = config.ntlmEnabledBrowsers;
    this._ntlmGuest = config.ntlmGuest;
    this._outbound = config.outbound;
    this._passiveWanHealthMeasurement = config.passiveWanHealthMeasurement;
    this._pcpInbound = config.pcpInbound;
    this._pcpOutbound = config.pcpOutbound;
    this._pcpPoolname = config.pcpPoolname;
    this._perIpShaper = config.perIpShaper;
    this._permitAnyHost = config.permitAnyHost;
    this._permitStunHost = config.permitStunHost;
    this._pfcpProfile = config.pfcpProfile;
    this._pkg = config.pkg;
    this._pkgFolderPath = config.pkgFolderPath;
    this._policyBehaviourType = config.policyBehaviourType;
    this._policyExpiry = config.policyExpiry;
    this._policyExpiryDate = config.policyExpiryDate;
    this._policyExpiryDateUtc = config.policyExpiryDateUtc;
    this._policyOffload = config.policyOffload;
    this._policyid = config.policyid;
    this._poolname = config.poolname;
    this._poolname6 = config.poolname6;
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
    this._rtpAddr = config.rtpAddr;
    this._rtpNat = config.rtpNat;
    this._scanBotnetConnections = config.scanBotnetConnections;
    this._schedule = config.schedule;
    this._scheduleTimeout = config.scheduleTimeout;
    this._scopetype = config.scopetype;
    this._sctpFilterProfile = config.sctpFilterProfile;
    this._sendDenyPacket = config.sendDenyPacket;
    this._service = config.service;
    this._serviceNegate = config.serviceNegate;
    this._sessionTtl = config.sessionTtl;
    this._sgt = config.sgt;
    this._sgtCheck = config.sgtCheck;
    this._spamfilterProfile = config.spamfilterProfile;
    this._srcVendorMac = config.srcVendorMac;
    this._srcaddr = config.srcaddr;
    this._srcaddr6 = config.srcaddr6;
    this._srcaddr6Negate = config.srcaddr6Negate;
    this._srcaddrNegate = config.srcaddrNegate;
    this._srcintf = config.srcintf;
    this._sshFilterProfile = config.sshFilterProfile;
    this._sshPolicyRedirect = config.sshPolicyRedirect;
    this._sslMirror = config.sslMirror;
    this._sslMirrorIntf = config.sslMirrorIntf;
    this._sslSshProfile = config.sslSshProfile;
    this._status = config.status;
    this._tcpMssReceiver = config.tcpMssReceiver;
    this._tcpMssSender = config.tcpMssSender;
    this._tcpSessionWithoutSyn = config.tcpSessionWithoutSyn;
    this._tcpTimeoutPid = config.tcpTimeoutPid;
    this._timeoutSendRst = config.timeoutSendRst;
    this._tos = config.tos;
    this._tosMask = config.tosMask;
    this._tosNegate = config.tosNegate;
    this._trafficShaper = config.trafficShaper;
    this._trafficShaperReverse = config.trafficShaperReverse;
    this._udpTimeoutPid = config.udpTimeoutPid;
    this._urlCategory = config.urlCategory;
    this._users = config.users;
    this._utmStatus = config.utmStatus;
    this._uuid = config.uuid;
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
    this._ztnaEmsTag = config.ztnaEmsTag;
    this._ztnaEmsTagNegate = config.ztnaEmsTagNegate;
    this._ztnaEmsTagSecondary = config.ztnaEmsTagSecondary;
    this._ztnaGeoTag = config.ztnaGeoTag;
    this._ztnaPolicyRedirect = config.ztnaPolicyRedirect;
    this._ztnaStatus = config.ztnaStatus;
    this._ztnaTagsMatchLogic = config.ztnaTagsMatchLogic;
    this._vpnDstNode.internalValue = config.vpnDstNode;
    this._vpnSrcNode.internalValue = config.vpnSrcNode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // _policy_block - computed: false, optional: true, required: false
  private _policyBlock?: number; 
  public get policyBlock() {
    return this.getNumberAttribute('_policy_block');
  }
  public set policyBlock(value: number) {
    this._policyBlock = value;
  }
  public resetPolicyBlock() {
    this._policyBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyBlockInput() {
    return this._policyBlock;
  }

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

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
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

  // app_category - computed: false, optional: true, required: false
  private _appCategory?: string; 
  public get appCategory() {
    return this.getStringAttribute('app_category');
  }
  public set appCategory(value: string) {
    this._appCategory = value;
  }
  public resetAppCategory() {
    this._appCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appCategoryInput() {
    return this._appCategory;
  }

  // app_group - computed: false, optional: true, required: false
  private _appGroup?: string; 
  public get appGroup() {
    return this.getStringAttribute('app_group');
  }
  public set appGroup(value: string) {
    this._appGroup = value;
  }
  public resetAppGroup() {
    this._appGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appGroupInput() {
    return this._appGroup;
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

  // application - computed: true, optional: true, required: false
  private _application?: number[]; 
  public get application() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('application')));
  }
  public set application(value: number[]) {
    this._application = value;
  }
  public resetApplication() {
    this._application = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
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

  // auth_path - computed: false, optional: true, required: false
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

  // auto_asic_offload - computed: false, optional: true, required: false
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

  // best_route - computed: false, optional: true, required: false
  private _bestRoute?: string; 
  public get bestRoute() {
    return this.getStringAttribute('best_route');
  }
  public set bestRoute(value: string) {
    this._bestRoute = value;
  }
  public resetBestRoute() {
    this._bestRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bestRouteInput() {
    return this._bestRoute;
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

  // cgn_eif - computed: true, optional: true, required: false
  private _cgnEif?: string; 
  public get cgnEif() {
    return this.getStringAttribute('cgn_eif');
  }
  public set cgnEif(value: string) {
    this._cgnEif = value;
  }
  public resetCgnEif() {
    this._cgnEif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnEifInput() {
    return this._cgnEif;
  }

  // cgn_eim - computed: true, optional: true, required: false
  private _cgnEim?: string; 
  public get cgnEim() {
    return this.getStringAttribute('cgn_eim');
  }
  public set cgnEim(value: string) {
    this._cgnEim = value;
  }
  public resetCgnEim() {
    this._cgnEim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnEimInput() {
    return this._cgnEim;
  }

  // cgn_log_server_grp - computed: false, optional: true, required: false
  private _cgnLogServerGrp?: string; 
  public get cgnLogServerGrp() {
    return this.getStringAttribute('cgn_log_server_grp');
  }
  public set cgnLogServerGrp(value: string) {
    this._cgnLogServerGrp = value;
  }
  public resetCgnLogServerGrp() {
    this._cgnLogServerGrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnLogServerGrpInput() {
    return this._cgnLogServerGrp;
  }

  // cgn_resource_quota - computed: true, optional: true, required: false
  private _cgnResourceQuota?: number; 
  public get cgnResourceQuota() {
    return this.getNumberAttribute('cgn_resource_quota');
  }
  public set cgnResourceQuota(value: number) {
    this._cgnResourceQuota = value;
  }
  public resetCgnResourceQuota() {
    this._cgnResourceQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnResourceQuotaInput() {
    return this._cgnResourceQuota;
  }

  // cgn_session_quota - computed: true, optional: true, required: false
  private _cgnSessionQuota?: number; 
  public get cgnSessionQuota() {
    return this.getNumberAttribute('cgn_session_quota');
  }
  public set cgnSessionQuota(value: number) {
    this._cgnSessionQuota = value;
  }
  public resetCgnSessionQuota() {
    this._cgnSessionQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnSessionQuotaInput() {
    return this._cgnSessionQuota;
  }

  // cgn_sw_eif_ctrl - computed: true, optional: true, required: false
  private _cgnSwEifCtrl?: string; 
  public get cgnSwEifCtrl() {
    return this.getStringAttribute('cgn_sw_eif_ctrl');
  }
  public set cgnSwEifCtrl(value: string) {
    this._cgnSwEifCtrl = value;
  }
  public resetCgnSwEifCtrl() {
    this._cgnSwEifCtrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnSwEifCtrlInput() {
    return this._cgnSwEifCtrl;
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

  // custom_log_fields - computed: false, optional: true, required: false
  private _customLogFields?: string; 
  public get customLogFields() {
    return this.getStringAttribute('custom_log_fields');
  }
  public set customLogFields(value: string) {
    this._customLogFields = value;
  }
  public resetCustomLogFields() {
    this._customLogFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLogFieldsInput() {
    return this._customLogFields;
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

  // devices - computed: false, optional: true, required: false
  private _devices?: string; 
  public get devices() {
    return this.getStringAttribute('devices');
  }
  public set devices(value: string) {
    this._devices = value;
  }
  public resetDevices() {
    this._devices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices;
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

  // diffservcode_forward - computed: false, optional: true, required: false
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

  // diffservcode_rev - computed: false, optional: true, required: false
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

  // dscp_match - computed: false, optional: true, required: false
  private _dscpMatch?: string; 
  public get dscpMatch() {
    return this.getStringAttribute('dscp_match');
  }
  public set dscpMatch(value: string) {
    this._dscpMatch = value;
  }
  public resetDscpMatch() {
    this._dscpMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpMatchInput() {
    return this._dscpMatch;
  }

  // dscp_negate - computed: false, optional: true, required: false
  private _dscpNegate?: string; 
  public get dscpNegate() {
    return this.getStringAttribute('dscp_negate');
  }
  public set dscpNegate(value: string) {
    this._dscpNegate = value;
  }
  public resetDscpNegate() {
    this._dscpNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpNegateInput() {
    return this._dscpNegate;
  }

  // dscp_value - computed: false, optional: true, required: false
  private _dscpValue?: string; 
  public get dscpValue() {
    return this.getStringAttribute('dscp_value');
  }
  public set dscpValue(value: string) {
    this._dscpValue = value;
  }
  public resetDscpValue() {
    this._dscpValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpValueInput() {
    return this._dscpValue;
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

  // dstaddr - computed: true, optional: true, required: false
  private _dstaddr?: string[]; 
  public get dstaddr() {
    return cdktf.Fn.tolist(this.getListAttribute('dstaddr'));
  }
  public set dstaddr(value: string[]) {
    this._dstaddr = value;
  }
  public resetDstaddr() {
    this._dstaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstaddrInput() {
    return this._dstaddr;
  }

  // dstaddr6 - computed: true, optional: true, required: false
  private _dstaddr6?: string[]; 
  public get dstaddr6() {
    return cdktf.Fn.tolist(this.getListAttribute('dstaddr6'));
  }
  public set dstaddr6(value: string[]) {
    this._dstaddr6 = value;
  }
  public resetDstaddr6() {
    this._dstaddr6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstaddr6Input() {
    return this._dstaddr6;
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

  // dstintf - computed: true, optional: true, required: false
  private _dstintf?: string[]; 
  public get dstintf() {
    return cdktf.Fn.tolist(this.getListAttribute('dstintf'));
  }
  public set dstintf(value: string[]) {
    this._dstintf = value;
  }
  public resetDstintf() {
    this._dstintf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstintfInput() {
    return this._dstintf;
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

  // eif_check - computed: false, optional: true, required: false
  private _eifCheck?: string; 
  public get eifCheck() {
    return this.getStringAttribute('eif_check');
  }
  public set eifCheck(value: string) {
    this._eifCheck = value;
  }
  public resetEifCheck() {
    this._eifCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eifCheckInput() {
    return this._eifCheck;
  }

  // eif_learn - computed: false, optional: true, required: false
  private _eifLearn?: string; 
  public get eifLearn() {
    return this.getStringAttribute('eif_learn');
  }
  public set eifLearn(value: string) {
    this._eifLearn = value;
  }
  public resetEifLearn() {
    this._eifLearn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eifLearnInput() {
    return this._eifLearn;
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

  // firewall_session_dirty - computed: false, optional: true, required: false
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

  // fixedport - computed: false, optional: true, required: false
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

  // fsso_groups - computed: true, optional: true, required: false
  private _fssoGroups?: string[]; 
  public get fssoGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('fsso_groups'));
  }
  public set fssoGroups(value: string[]) {
    this._fssoGroups = value;
  }
  public resetFssoGroups() {
    this._fssoGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fssoGroupsInput() {
    return this._fssoGroups;
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

  // groups - computed: true, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return cdktf.Fn.tolist(this.getListAttribute('groups'));
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // gtp_profile - computed: false, optional: true, required: false
  private _gtpProfile?: string; 
  public get gtpProfile() {
    return this.getStringAttribute('gtp_profile');
  }
  public set gtpProfile(value: string) {
    this._gtpProfile = value;
  }
  public resetGtpProfile() {
    this._gtpProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpProfileInput() {
    return this._gtpProfile;
  }

  // http_policy_redirect - computed: false, optional: true, required: false
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

  // inbound - computed: false, optional: true, required: false
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

  // internet_service6_custom - computed: true, optional: true, required: false
  private _internetService6Custom?: string[]; 
  public get internetService6Custom() {
    return cdktf.Fn.tolist(this.getListAttribute('internet_service6_custom'));
  }
  public set internetService6Custom(value: string[]) {
    this._internetService6Custom = value;
  }
  public resetInternetService6Custom() {
    this._internetService6Custom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetService6CustomInput() {
    return this._internetService6Custom;
  }

  // internet_service6_custom_group - computed: true, optional: true, required: false
  private _internetService6CustomGroup?: string[]; 
  public get internetService6CustomGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('internet_service6_custom_group'));
  }
  public set internetService6CustomGroup(value: string[]) {
    this._internetService6CustomGroup = value;
  }
  public resetInternetService6CustomGroup() {
    this._internetService6CustomGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetService6CustomGroupInput() {
    return this._internetService6CustomGroup;
  }

  // internet_service6_group - computed: true, optional: true, required: false
  private _internetService6Group?: string[]; 
  public get internetService6Group() {
    return cdktf.Fn.tolist(this.getListAttribute('internet_service6_group'));
  }
  public set internetService6Group(value: string[]) {
    this._internetService6Group = value;
  }
  public resetInternetService6Group() {
    this._internetService6Group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetService6GroupInput() {
    return this._internetService6Group;
  }

  // internet_service6_name - computed: true, optional: true, required: false
  private _internetService6Name?: string[]; 
  public get internetService6Name() {
    return cdktf.Fn.tolist(this.getListAttribute('internet_service6_name'));
  }
  public set internetService6Name(value: string[]) {
    this._internetService6Name = value;
  }
  public resetInternetService6Name() {
    this._internetService6Name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetService6NameInput() {
    return this._internetService6Name;
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

  // internet_service6_src_custom - computed: true, optional: true, required: false
  private _internetService6SrcCustom?: string[]; 
  public get internetService6SrcCustom() {
    return cdktf.Fn.tolist(this.getListAttribute('internet_service6_src_custom'));
  }
  public set internetService6SrcCustom(value: string[]) {
    this._internetService6SrcCustom = value;
  }
  public resetInternetService6SrcCustom() {
    this._internetService6SrcCustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetService6SrcCustomInput() {
    return this._internetService6SrcCustom;
  }

  // internet_service6_src_custom_group - computed: true, optional: true, required: false
  private _internetService6SrcCustomGroup?: string[]; 
  public get internetService6SrcCustomGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('internet_service6_src_custom_group'));
  }
  public set internetService6SrcCustomGroup(value: string[]) {
    this._internetService6SrcCustomGroup = value;
  }
  public resetInternetService6SrcCustomGroup() {
    this._internetService6SrcCustomGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetService6SrcCustomGroupInput() {
    return this._internetService6SrcCustomGroup;
  }

  // internet_service6_src_group - computed: true, optional: true, required: false
  private _internetService6SrcGroup?: string[]; 
  public get internetService6SrcGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('internet_service6_src_group'));
  }
  public set internetService6SrcGroup(value: string[]) {
    this._internetService6SrcGroup = value;
  }
  public resetInternetService6SrcGroup() {
    this._internetService6SrcGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetService6SrcGroupInput() {
    return this._internetService6SrcGroup;
  }

  // internet_service6_src_name - computed: true, optional: true, required: false
  private _internetService6SrcName?: string[]; 
  public get internetService6SrcName() {
    return cdktf.Fn.tolist(this.getListAttribute('internet_service6_src_name'));
  }
  public set internetService6SrcName(value: string[]) {
    this._internetService6SrcName = value;
  }
  public resetInternetService6SrcName() {
    this._internetService6SrcName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetService6SrcNameInput() {
    return this._internetService6SrcName;
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

  // internet_service_custom - computed: false, optional: true, required: false
  private _internetServiceCustom?: string; 
  public get internetServiceCustom() {
    return this.getStringAttribute('internet_service_custom');
  }
  public set internetServiceCustom(value: string) {
    this._internetServiceCustom = value;
  }
  public resetInternetServiceCustom() {
    this._internetServiceCustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceCustomInput() {
    return this._internetServiceCustom;
  }

  // internet_service_custom_group - computed: false, optional: true, required: false
  private _internetServiceCustomGroup?: string; 
  public get internetServiceCustomGroup() {
    return this.getStringAttribute('internet_service_custom_group');
  }
  public set internetServiceCustomGroup(value: string) {
    this._internetServiceCustomGroup = value;
  }
  public resetInternetServiceCustomGroup() {
    this._internetServiceCustomGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceCustomGroupInput() {
    return this._internetServiceCustomGroup;
  }

  // internet_service_group - computed: false, optional: true, required: false
  private _internetServiceGroup?: string; 
  public get internetServiceGroup() {
    return this.getStringAttribute('internet_service_group');
  }
  public set internetServiceGroup(value: string) {
    this._internetServiceGroup = value;
  }
  public resetInternetServiceGroup() {
    this._internetServiceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceGroupInput() {
    return this._internetServiceGroup;
  }

  // internet_service_id - computed: true, optional: true, required: false
  private _internetServiceId?: string[]; 
  public get internetServiceId() {
    return cdktf.Fn.tolist(this.getListAttribute('internet_service_id'));
  }
  public set internetServiceId(value: string[]) {
    this._internetServiceId = value;
  }
  public resetInternetServiceId() {
    this._internetServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceIdInput() {
    return this._internetServiceId;
  }

  // internet_service_name - computed: false, optional: true, required: false
  private _internetServiceName?: string; 
  public get internetServiceName() {
    return this.getStringAttribute('internet_service_name');
  }
  public set internetServiceName(value: string) {
    this._internetServiceName = value;
  }
  public resetInternetServiceName() {
    this._internetServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceNameInput() {
    return this._internetServiceName;
  }

  // internet_service_negate - computed: false, optional: true, required: false
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

  // internet_service_src_custom - computed: false, optional: true, required: false
  private _internetServiceSrcCustom?: string; 
  public get internetServiceSrcCustom() {
    return this.getStringAttribute('internet_service_src_custom');
  }
  public set internetServiceSrcCustom(value: string) {
    this._internetServiceSrcCustom = value;
  }
  public resetInternetServiceSrcCustom() {
    this._internetServiceSrcCustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceSrcCustomInput() {
    return this._internetServiceSrcCustom;
  }

  // internet_service_src_custom_group - computed: false, optional: true, required: false
  private _internetServiceSrcCustomGroup?: string; 
  public get internetServiceSrcCustomGroup() {
    return this.getStringAttribute('internet_service_src_custom_group');
  }
  public set internetServiceSrcCustomGroup(value: string) {
    this._internetServiceSrcCustomGroup = value;
  }
  public resetInternetServiceSrcCustomGroup() {
    this._internetServiceSrcCustomGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceSrcCustomGroupInput() {
    return this._internetServiceSrcCustomGroup;
  }

  // internet_service_src_group - computed: false, optional: true, required: false
  private _internetServiceSrcGroup?: string; 
  public get internetServiceSrcGroup() {
    return this.getStringAttribute('internet_service_src_group');
  }
  public set internetServiceSrcGroup(value: string) {
    this._internetServiceSrcGroup = value;
  }
  public resetInternetServiceSrcGroup() {
    this._internetServiceSrcGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceSrcGroupInput() {
    return this._internetServiceSrcGroup;
  }

  // internet_service_src_id - computed: false, optional: true, required: false
  private _internetServiceSrcId?: string; 
  public get internetServiceSrcId() {
    return this.getStringAttribute('internet_service_src_id');
  }
  public set internetServiceSrcId(value: string) {
    this._internetServiceSrcId = value;
  }
  public resetInternetServiceSrcId() {
    this._internetServiceSrcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceSrcIdInput() {
    return this._internetServiceSrcId;
  }

  // internet_service_src_name - computed: false, optional: true, required: false
  private _internetServiceSrcName?: string; 
  public get internetServiceSrcName() {
    return this.getStringAttribute('internet_service_src_name');
  }
  public set internetServiceSrcName(value: string) {
    this._internetServiceSrcName = value;
  }
  public resetInternetServiceSrcName() {
    this._internetServiceSrcName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceSrcNameInput() {
    return this._internetServiceSrcName;
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

  // ip_version_type - computed: true, optional: true, required: false
  private _ipVersionType?: string; 
  public get ipVersionType() {
    return this.getStringAttribute('ip_version_type');
  }
  public set ipVersionType(value: string) {
    this._ipVersionType = value;
  }
  public resetIpVersionType() {
    this._ipVersionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionTypeInput() {
    return this._ipVersionType;
  }

  // ippool - computed: false, optional: true, required: false
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

  // mms_profile - computed: false, optional: true, required: false
  private _mmsProfile?: string; 
  public get mmsProfile() {
    return this.getStringAttribute('mms_profile');
  }
  public set mmsProfile(value: string) {
    this._mmsProfile = value;
  }
  public resetMmsProfile() {
    this._mmsProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mmsProfileInput() {
    return this._mmsProfile;
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

  // natinbound - computed: false, optional: true, required: false
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
  private _natip?: string[]; 
  public get natip() {
    return this.getListAttribute('natip');
  }
  public set natip(value: string[]) {
    this._natip = value;
  }
  public resetNatip() {
    this._natip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natipInput() {
    return this._natip;
  }

  // natoutbound - computed: false, optional: true, required: false
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

  // network_service_dynamic - computed: true, optional: true, required: false
  private _networkServiceDynamic?: string[]; 
  public get networkServiceDynamic() {
    return cdktf.Fn.tolist(this.getListAttribute('network_service_dynamic'));
  }
  public set networkServiceDynamic(value: string[]) {
    this._networkServiceDynamic = value;
  }
  public resetNetworkServiceDynamic() {
    this._networkServiceDynamic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkServiceDynamicInput() {
    return this._networkServiceDynamic;
  }

  // network_service_src_dynamic - computed: true, optional: true, required: false
  private _networkServiceSrcDynamic?: string[]; 
  public get networkServiceSrcDynamic() {
    return cdktf.Fn.tolist(this.getListAttribute('network_service_src_dynamic'));
  }
  public set networkServiceSrcDynamic(value: string[]) {
    this._networkServiceSrcDynamic = value;
  }
  public resetNetworkServiceSrcDynamic() {
    this._networkServiceSrcDynamic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkServiceSrcDynamicInput() {
    return this._networkServiceSrcDynamic;
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

  // ntlm - computed: false, optional: true, required: false
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

  // ntlm_enabled_browsers - computed: true, optional: true, required: false
  private _ntlmEnabledBrowsers?: string[]; 
  public get ntlmEnabledBrowsers() {
    return cdktf.Fn.tolist(this.getListAttribute('ntlm_enabled_browsers'));
  }
  public set ntlmEnabledBrowsers(value: string[]) {
    this._ntlmEnabledBrowsers = value;
  }
  public resetNtlmEnabledBrowsers() {
    this._ntlmEnabledBrowsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmEnabledBrowsersInput() {
    return this._ntlmEnabledBrowsers;
  }

  // ntlm_guest - computed: false, optional: true, required: false
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

  // outbound - computed: false, optional: true, required: false
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

  // pcp_poolname - computed: true, optional: true, required: false
  private _pcpPoolname?: string[]; 
  public get pcpPoolname() {
    return cdktf.Fn.tolist(this.getListAttribute('pcp_poolname'));
  }
  public set pcpPoolname(value: string[]) {
    this._pcpPoolname = value;
  }
  public resetPcpPoolname() {
    this._pcpPoolname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcpPoolnameInput() {
    return this._pcpPoolname;
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

  // permit_stun_host - computed: false, optional: true, required: false
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

  // pfcp_profile - computed: false, optional: true, required: false
  private _pfcpProfile?: string; 
  public get pfcpProfile() {
    return this.getStringAttribute('pfcp_profile');
  }
  public set pfcpProfile(value: string) {
    this._pfcpProfile = value;
  }
  public resetPfcpProfile() {
    this._pfcpProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pfcpProfileInput() {
    return this._pfcpProfile;
  }

  // pkg - computed: false, optional: false, required: true
  private _pkg?: string; 
  public get pkg() {
    return this.getStringAttribute('pkg');
  }
  public set pkg(value: string) {
    this._pkg = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pkgInput() {
    return this._pkg;
  }

  // pkg_folder_path - computed: false, optional: true, required: false
  private _pkgFolderPath?: string; 
  public get pkgFolderPath() {
    return this.getStringAttribute('pkg_folder_path');
  }
  public set pkgFolderPath(value: string) {
    this._pkgFolderPath = value;
  }
  public resetPkgFolderPath() {
    this._pkgFolderPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkgFolderPathInput() {
    return this._pkgFolderPath;
  }

  // policy_behaviour_type - computed: true, optional: true, required: false
  private _policyBehaviourType?: string; 
  public get policyBehaviourType() {
    return this.getStringAttribute('policy_behaviour_type');
  }
  public set policyBehaviourType(value: string) {
    this._policyBehaviourType = value;
  }
  public resetPolicyBehaviourType() {
    this._policyBehaviourType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyBehaviourTypeInput() {
    return this._policyBehaviourType;
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

  // policy_offload - computed: true, optional: true, required: false
  private _policyOffload?: string; 
  public get policyOffload() {
    return this.getStringAttribute('policy_offload');
  }
  public set policyOffload(value: string) {
    this._policyOffload = value;
  }
  public resetPolicyOffload() {
    this._policyOffload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyOffloadInput() {
    return this._policyOffload;
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

  // poolname - computed: false, optional: true, required: false
  private _poolname?: string; 
  public get poolname() {
    return this.getStringAttribute('poolname');
  }
  public set poolname(value: string) {
    this._poolname = value;
  }
  public resetPoolname() {
    this._poolname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolnameInput() {
    return this._poolname;
  }

  // poolname6 - computed: false, optional: true, required: false
  private _poolname6?: string; 
  public get poolname6() {
    return this.getStringAttribute('poolname6');
  }
  public set poolname6(value: string) {
    this._poolname6 = value;
  }
  public resetPoolname6() {
    this._poolname6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolname6Input() {
    return this._poolname6;
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

  // reputation_direction - computed: false, optional: true, required: false
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

  // rtp_addr - computed: false, optional: true, required: false
  private _rtpAddr?: string; 
  public get rtpAddr() {
    return this.getStringAttribute('rtp_addr');
  }
  public set rtpAddr(value: string) {
    this._rtpAddr = value;
  }
  public resetRtpAddr() {
    this._rtpAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtpAddrInput() {
    return this._rtpAddr;
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

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
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

  // service - computed: true, optional: true, required: false
  private _service?: string[]; 
  public get service() {
    return cdktf.Fn.tolist(this.getListAttribute('service'));
  }
  public set service(value: string[]) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
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

  // session_ttl - computed: true, optional: true, required: false
  private _sessionTtl?: string; 
  public get sessionTtl() {
    return this.getStringAttribute('session_ttl');
  }
  public set sessionTtl(value: string) {
    this._sessionTtl = value;
  }
  public resetSessionTtl() {
    this._sessionTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTtlInput() {
    return this._sessionTtl;
  }

  // sgt - computed: true, optional: true, required: false
  private _sgt?: number[]; 
  public get sgt() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('sgt')));
  }
  public set sgt(value: number[]) {
    this._sgt = value;
  }
  public resetSgt() {
    this._sgt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgtInput() {
    return this._sgt;
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

  // src_vendor_mac - computed: true, optional: true, required: false
  private _srcVendorMac?: string[]; 
  public get srcVendorMac() {
    return cdktf.Fn.tolist(this.getListAttribute('src_vendor_mac'));
  }
  public set srcVendorMac(value: string[]) {
    this._srcVendorMac = value;
  }
  public resetSrcVendorMac() {
    this._srcVendorMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcVendorMacInput() {
    return this._srcVendorMac;
  }

  // srcaddr - computed: true, optional: true, required: false
  private _srcaddr?: string[]; 
  public get srcaddr() {
    return cdktf.Fn.tolist(this.getListAttribute('srcaddr'));
  }
  public set srcaddr(value: string[]) {
    this._srcaddr = value;
  }
  public resetSrcaddr() {
    this._srcaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddrInput() {
    return this._srcaddr;
  }

  // srcaddr6 - computed: true, optional: true, required: false
  private _srcaddr6?: string[]; 
  public get srcaddr6() {
    return cdktf.Fn.tolist(this.getListAttribute('srcaddr6'));
  }
  public set srcaddr6(value: string[]) {
    this._srcaddr6 = value;
  }
  public resetSrcaddr6() {
    this._srcaddr6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddr6Input() {
    return this._srcaddr6;
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

  // srcintf - computed: true, optional: true, required: false
  private _srcintf?: string[]; 
  public get srcintf() {
    return cdktf.Fn.tolist(this.getListAttribute('srcintf'));
  }
  public set srcintf(value: string[]) {
    this._srcintf = value;
  }
  public resetSrcintf() {
    this._srcintf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcintfInput() {
    return this._srcintf;
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

  // ssh_policy_redirect - computed: false, optional: true, required: false
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

  // ssl_mirror_intf - computed: false, optional: true, required: false
  private _sslMirrorIntf?: string; 
  public get sslMirrorIntf() {
    return this.getStringAttribute('ssl_mirror_intf');
  }
  public set sslMirrorIntf(value: string) {
    this._sslMirrorIntf = value;
  }
  public resetSslMirrorIntf() {
    this._sslMirrorIntf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslMirrorIntfInput() {
    return this._sslMirrorIntf;
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

  // tcp_timeout_pid - computed: false, optional: true, required: false
  private _tcpTimeoutPid?: string; 
  public get tcpTimeoutPid() {
    return this.getStringAttribute('tcp_timeout_pid');
  }
  public set tcpTimeoutPid(value: string) {
    this._tcpTimeoutPid = value;
  }
  public resetTcpTimeoutPid() {
    this._tcpTimeoutPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpTimeoutPidInput() {
    return this._tcpTimeoutPid;
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

  // udp_timeout_pid - computed: false, optional: true, required: false
  private _udpTimeoutPid?: string; 
  public get udpTimeoutPid() {
    return this.getStringAttribute('udp_timeout_pid');
  }
  public set udpTimeoutPid(value: string) {
    this._udpTimeoutPid = value;
  }
  public resetUdpTimeoutPid() {
    this._udpTimeoutPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpTimeoutPidInput() {
    return this._udpTimeoutPid;
  }

  // url_category - computed: false, optional: true, required: false
  private _urlCategory?: string; 
  public get urlCategory() {
    return this.getStringAttribute('url_category');
  }
  public set urlCategory(value: string) {
    this._urlCategory = value;
  }
  public resetUrlCategory() {
    this._urlCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlCategoryInput() {
    return this._urlCategory;
  }

  // users - computed: true, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return cdktf.Fn.tolist(this.getListAttribute('users'));
  }
  public set users(value: string[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
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

  // wanopt - computed: false, optional: true, required: false
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

  // wanopt_detection - computed: false, optional: true, required: false
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

  // wanopt_passive_opt - computed: false, optional: true, required: false
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

  // webcache - computed: false, optional: true, required: false
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

  // ztna_ems_tag - computed: false, optional: true, required: false
  private _ztnaEmsTag?: string; 
  public get ztnaEmsTag() {
    return this.getStringAttribute('ztna_ems_tag');
  }
  public set ztnaEmsTag(value: string) {
    this._ztnaEmsTag = value;
  }
  public resetZtnaEmsTag() {
    this._ztnaEmsTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ztnaEmsTagInput() {
    return this._ztnaEmsTag;
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

  // ztna_ems_tag_secondary - computed: true, optional: true, required: false
  private _ztnaEmsTagSecondary?: string[]; 
  public get ztnaEmsTagSecondary() {
    return cdktf.Fn.tolist(this.getListAttribute('ztna_ems_tag_secondary'));
  }
  public set ztnaEmsTagSecondary(value: string[]) {
    this._ztnaEmsTagSecondary = value;
  }
  public resetZtnaEmsTagSecondary() {
    this._ztnaEmsTagSecondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ztnaEmsTagSecondaryInput() {
    return this._ztnaEmsTagSecondary;
  }

  // ztna_geo_tag - computed: false, optional: true, required: false
  private _ztnaGeoTag?: string; 
  public get ztnaGeoTag() {
    return this.getStringAttribute('ztna_geo_tag');
  }
  public set ztnaGeoTag(value: string) {
    this._ztnaGeoTag = value;
  }
  public resetZtnaGeoTag() {
    this._ztnaGeoTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ztnaGeoTagInput() {
    return this._ztnaGeoTag;
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

  // vpn_dst_node - computed: false, optional: true, required: false
  private _vpnDstNode = new PackagesFirewallPolicyVpnDstNodeList(this, "vpn_dst_node", false);
  public get vpnDstNode() {
    return this._vpnDstNode;
  }
  public putVpnDstNode(value: PackagesFirewallPolicyVpnDstNode[] | cdktf.IResolvable) {
    this._vpnDstNode.internalValue = value;
  }
  public resetVpnDstNode() {
    this._vpnDstNode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnDstNodeInput() {
    return this._vpnDstNode.internalValue;
  }

  // vpn_src_node - computed: false, optional: true, required: false
  private _vpnSrcNode = new PackagesFirewallPolicyVpnSrcNodeList(this, "vpn_src_node", false);
  public get vpnSrcNode() {
    return this._vpnSrcNode;
  }
  public putVpnSrcNode(value: PackagesFirewallPolicyVpnSrcNode[] | cdktf.IResolvable) {
    this._vpnSrcNode.internalValue = value;
  }
  public resetVpnSrcNode() {
    this._vpnSrcNode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnSrcNodeInput() {
    return this._vpnSrcNode.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      _policy_block: cdktf.numberToTerraform(this._policyBlock),
      action: cdktf.stringToTerraform(this._action),
      adom: cdktf.stringToTerraform(this._adom),
      anti_replay: cdktf.stringToTerraform(this._antiReplay),
      app_category: cdktf.stringToTerraform(this._appCategory),
      app_group: cdktf.stringToTerraform(this._appGroup),
      app_monitor: cdktf.stringToTerraform(this._appMonitor),
      application: cdktf.listMapper(cdktf.numberToTerraform, false)(this._application),
      application_list: cdktf.stringToTerraform(this._applicationList),
      auth_cert: cdktf.stringToTerraform(this._authCert),
      auth_path: cdktf.stringToTerraform(this._authPath),
      auth_redirect_addr: cdktf.stringToTerraform(this._authRedirectAddr),
      auto_asic_offload: cdktf.stringToTerraform(this._autoAsicOffload),
      av_profile: cdktf.stringToTerraform(this._avProfile),
      best_route: cdktf.stringToTerraform(this._bestRoute),
      block_notification: cdktf.stringToTerraform(this._blockNotification),
      captive_portal_exempt: cdktf.stringToTerraform(this._captivePortalExempt),
      capture_packet: cdktf.stringToTerraform(this._capturePacket),
      casb_profile: cdktf.stringToTerraform(this._casbProfile),
      cgn_eif: cdktf.stringToTerraform(this._cgnEif),
      cgn_eim: cdktf.stringToTerraform(this._cgnEim),
      cgn_log_server_grp: cdktf.stringToTerraform(this._cgnLogServerGrp),
      cgn_resource_quota: cdktf.numberToTerraform(this._cgnResourceQuota),
      cgn_session_quota: cdktf.numberToTerraform(this._cgnSessionQuota),
      cgn_sw_eif_ctrl: cdktf.stringToTerraform(this._cgnSwEifCtrl),
      cifs_profile: cdktf.stringToTerraform(this._cifsProfile),
      comments: cdktf.stringToTerraform(this._comments),
      custom_log_fields: cdktf.stringToTerraform(this._customLogFields),
      decrypted_traffic_mirror: cdktf.stringToTerraform(this._decryptedTrafficMirror),
      delay_tcp_npu_session: cdktf.stringToTerraform(this._delayTcpNpuSession),
      devices: cdktf.stringToTerraform(this._devices),
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
      dscp_match: cdktf.stringToTerraform(this._dscpMatch),
      dscp_negate: cdktf.stringToTerraform(this._dscpNegate),
      dscp_value: cdktf.stringToTerraform(this._dscpValue),
      dsri: cdktf.stringToTerraform(this._dsri),
      dstaddr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dstaddr),
      dstaddr6: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dstaddr6),
      dstaddr6_negate: cdktf.stringToTerraform(this._dstaddr6Negate),
      dstaddr_negate: cdktf.stringToTerraform(this._dstaddrNegate),
      dstintf: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dstintf),
      dynamic_shaping: cdktf.stringToTerraform(this._dynamicShaping),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      eif_check: cdktf.stringToTerraform(this._eifCheck),
      eif_learn: cdktf.stringToTerraform(this._eifLearn),
      email_collect: cdktf.stringToTerraform(this._emailCollect),
      emailfilter_profile: cdktf.stringToTerraform(this._emailfilterProfile),
      fec: cdktf.stringToTerraform(this._fec),
      file_filter_profile: cdktf.stringToTerraform(this._fileFilterProfile),
      firewall_session_dirty: cdktf.stringToTerraform(this._firewallSessionDirty),
      fixedport: cdktf.stringToTerraform(this._fixedport),
      fsso: cdktf.stringToTerraform(this._fsso),
      fsso_agent_for_ntlm: cdktf.stringToTerraform(this._fssoAgentForNtlm),
      fsso_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fssoGroups),
      geoip_anycast: cdktf.stringToTerraform(this._geoipAnycast),
      geoip_match: cdktf.stringToTerraform(this._geoipMatch),
      global_label: cdktf.stringToTerraform(this._globalLabel),
      groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groups),
      gtp_profile: cdktf.stringToTerraform(this._gtpProfile),
      http_policy_redirect: cdktf.stringToTerraform(this._httpPolicyRedirect),
      icap_profile: cdktf.stringToTerraform(this._icapProfile),
      id: cdktf.stringToTerraform(this._id),
      identity_based_route: cdktf.stringToTerraform(this._identityBasedRoute),
      inbound: cdktf.stringToTerraform(this._inbound),
      inspection_mode: cdktf.stringToTerraform(this._inspectionMode),
      internet_service: cdktf.stringToTerraform(this._internetService),
      internet_service6: cdktf.stringToTerraform(this._internetService6),
      internet_service6_custom: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internetService6Custom),
      internet_service6_custom_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internetService6CustomGroup),
      internet_service6_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internetService6Group),
      internet_service6_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internetService6Name),
      internet_service6_negate: cdktf.stringToTerraform(this._internetService6Negate),
      internet_service6_src: cdktf.stringToTerraform(this._internetService6Src),
      internet_service6_src_custom: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internetService6SrcCustom),
      internet_service6_src_custom_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internetService6SrcCustomGroup),
      internet_service6_src_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internetService6SrcGroup),
      internet_service6_src_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internetService6SrcName),
      internet_service6_src_negate: cdktf.stringToTerraform(this._internetService6SrcNegate),
      internet_service_custom: cdktf.stringToTerraform(this._internetServiceCustom),
      internet_service_custom_group: cdktf.stringToTerraform(this._internetServiceCustomGroup),
      internet_service_group: cdktf.stringToTerraform(this._internetServiceGroup),
      internet_service_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internetServiceId),
      internet_service_name: cdktf.stringToTerraform(this._internetServiceName),
      internet_service_negate: cdktf.stringToTerraform(this._internetServiceNegate),
      internet_service_src: cdktf.stringToTerraform(this._internetServiceSrc),
      internet_service_src_custom: cdktf.stringToTerraform(this._internetServiceSrcCustom),
      internet_service_src_custom_group: cdktf.stringToTerraform(this._internetServiceSrcCustomGroup),
      internet_service_src_group: cdktf.stringToTerraform(this._internetServiceSrcGroup),
      internet_service_src_id: cdktf.stringToTerraform(this._internetServiceSrcId),
      internet_service_src_name: cdktf.stringToTerraform(this._internetServiceSrcName),
      internet_service_src_negate: cdktf.stringToTerraform(this._internetServiceSrcNegate),
      ip_version_type: cdktf.stringToTerraform(this._ipVersionType),
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
      mms_profile: cdktf.stringToTerraform(this._mmsProfile),
      name: cdktf.stringToTerraform(this._name),
      nat: cdktf.stringToTerraform(this._nat),
      nat46: cdktf.stringToTerraform(this._nat46),
      nat64: cdktf.stringToTerraform(this._nat64),
      natinbound: cdktf.stringToTerraform(this._natinbound),
      natip: cdktf.listMapper(cdktf.stringToTerraform, false)(this._natip),
      natoutbound: cdktf.stringToTerraform(this._natoutbound),
      network_service_dynamic: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networkServiceDynamic),
      network_service_src_dynamic: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networkServiceSrcDynamic),
      np_acceleration: cdktf.stringToTerraform(this._npAcceleration),
      ntlm: cdktf.stringToTerraform(this._ntlm),
      ntlm_enabled_browsers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ntlmEnabledBrowsers),
      ntlm_guest: cdktf.stringToTerraform(this._ntlmGuest),
      outbound: cdktf.stringToTerraform(this._outbound),
      passive_wan_health_measurement: cdktf.stringToTerraform(this._passiveWanHealthMeasurement),
      pcp_inbound: cdktf.stringToTerraform(this._pcpInbound),
      pcp_outbound: cdktf.stringToTerraform(this._pcpOutbound),
      pcp_poolname: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pcpPoolname),
      per_ip_shaper: cdktf.stringToTerraform(this._perIpShaper),
      permit_any_host: cdktf.stringToTerraform(this._permitAnyHost),
      permit_stun_host: cdktf.stringToTerraform(this._permitStunHost),
      pfcp_profile: cdktf.stringToTerraform(this._pfcpProfile),
      pkg: cdktf.stringToTerraform(this._pkg),
      pkg_folder_path: cdktf.stringToTerraform(this._pkgFolderPath),
      policy_behaviour_type: cdktf.stringToTerraform(this._policyBehaviourType),
      policy_expiry: cdktf.stringToTerraform(this._policyExpiry),
      policy_expiry_date: cdktf.stringToTerraform(this._policyExpiryDate),
      policy_expiry_date_utc: cdktf.stringToTerraform(this._policyExpiryDateUtc),
      policy_offload: cdktf.stringToTerraform(this._policyOffload),
      policyid: cdktf.numberToTerraform(this._policyid),
      poolname: cdktf.stringToTerraform(this._poolname),
      poolname6: cdktf.stringToTerraform(this._poolname6),
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
      rtp_addr: cdktf.stringToTerraform(this._rtpAddr),
      rtp_nat: cdktf.stringToTerraform(this._rtpNat),
      scan_botnet_connections: cdktf.stringToTerraform(this._scanBotnetConnections),
      schedule: cdktf.stringToTerraform(this._schedule),
      schedule_timeout: cdktf.stringToTerraform(this._scheduleTimeout),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      sctp_filter_profile: cdktf.stringToTerraform(this._sctpFilterProfile),
      send_deny_packet: cdktf.stringToTerraform(this._sendDenyPacket),
      service: cdktf.listMapper(cdktf.stringToTerraform, false)(this._service),
      service_negate: cdktf.stringToTerraform(this._serviceNegate),
      session_ttl: cdktf.stringToTerraform(this._sessionTtl),
      sgt: cdktf.listMapper(cdktf.numberToTerraform, false)(this._sgt),
      sgt_check: cdktf.stringToTerraform(this._sgtCheck),
      spamfilter_profile: cdktf.stringToTerraform(this._spamfilterProfile),
      src_vendor_mac: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcVendorMac),
      srcaddr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcaddr),
      srcaddr6: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcaddr6),
      srcaddr6_negate: cdktf.stringToTerraform(this._srcaddr6Negate),
      srcaddr_negate: cdktf.stringToTerraform(this._srcaddrNegate),
      srcintf: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcintf),
      ssh_filter_profile: cdktf.stringToTerraform(this._sshFilterProfile),
      ssh_policy_redirect: cdktf.stringToTerraform(this._sshPolicyRedirect),
      ssl_mirror: cdktf.stringToTerraform(this._sslMirror),
      ssl_mirror_intf: cdktf.stringToTerraform(this._sslMirrorIntf),
      ssl_ssh_profile: cdktf.stringToTerraform(this._sslSshProfile),
      status: cdktf.stringToTerraform(this._status),
      tcp_mss_receiver: cdktf.numberToTerraform(this._tcpMssReceiver),
      tcp_mss_sender: cdktf.numberToTerraform(this._tcpMssSender),
      tcp_session_without_syn: cdktf.stringToTerraform(this._tcpSessionWithoutSyn),
      tcp_timeout_pid: cdktf.stringToTerraform(this._tcpTimeoutPid),
      timeout_send_rst: cdktf.stringToTerraform(this._timeoutSendRst),
      tos: cdktf.stringToTerraform(this._tos),
      tos_mask: cdktf.stringToTerraform(this._tosMask),
      tos_negate: cdktf.stringToTerraform(this._tosNegate),
      traffic_shaper: cdktf.stringToTerraform(this._trafficShaper),
      traffic_shaper_reverse: cdktf.stringToTerraform(this._trafficShaperReverse),
      udp_timeout_pid: cdktf.stringToTerraform(this._udpTimeoutPid),
      url_category: cdktf.stringToTerraform(this._urlCategory),
      users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._users),
      utm_status: cdktf.stringToTerraform(this._utmStatus),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      ztna_ems_tag: cdktf.stringToTerraform(this._ztnaEmsTag),
      ztna_ems_tag_negate: cdktf.stringToTerraform(this._ztnaEmsTagNegate),
      ztna_ems_tag_secondary: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ztnaEmsTagSecondary),
      ztna_geo_tag: cdktf.stringToTerraform(this._ztnaGeoTag),
      ztna_policy_redirect: cdktf.stringToTerraform(this._ztnaPolicyRedirect),
      ztna_status: cdktf.stringToTerraform(this._ztnaStatus),
      ztna_tags_match_logic: cdktf.stringToTerraform(this._ztnaTagsMatchLogic),
      vpn_dst_node: cdktf.listMapper(packagesFirewallPolicyVpnDstNodeToTerraform, true)(this._vpnDstNode.internalValue),
      vpn_src_node: cdktf.listMapper(packagesFirewallPolicyVpnSrcNodeToTerraform, true)(this._vpnSrcNode.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      _policy_block: {
        value: cdktf.numberToHclTerraform(this._policyBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
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
      app_category: {
        value: cdktf.stringToHclTerraform(this._appCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_group: {
        value: cdktf.stringToHclTerraform(this._appGroup),
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
      application: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._application),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
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
      best_route: {
        value: cdktf.stringToHclTerraform(this._bestRoute),
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
      cgn_eif: {
        value: cdktf.stringToHclTerraform(this._cgnEif),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cgn_eim: {
        value: cdktf.stringToHclTerraform(this._cgnEim),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cgn_log_server_grp: {
        value: cdktf.stringToHclTerraform(this._cgnLogServerGrp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cgn_resource_quota: {
        value: cdktf.numberToHclTerraform(this._cgnResourceQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cgn_session_quota: {
        value: cdktf.numberToHclTerraform(this._cgnSessionQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cgn_sw_eif_ctrl: {
        value: cdktf.stringToHclTerraform(this._cgnSwEifCtrl),
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
      custom_log_fields: {
        value: cdktf.stringToHclTerraform(this._customLogFields),
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
      devices: {
        value: cdktf.stringToHclTerraform(this._devices),
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
      dscp_match: {
        value: cdktf.stringToHclTerraform(this._dscpMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dscp_negate: {
        value: cdktf.stringToHclTerraform(this._dscpNegate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dscp_value: {
        value: cdktf.stringToHclTerraform(this._dscpValue),
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
      dstaddr: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dstaddr),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dstaddr6: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dstaddr6),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      dstintf: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dstintf),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      eif_check: {
        value: cdktf.stringToHclTerraform(this._eifCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eif_learn: {
        value: cdktf.stringToHclTerraform(this._eifLearn),
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
      fsso_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fssoGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      global_label: {
        value: cdktf.stringToHclTerraform(this._globalLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      gtp_profile: {
        value: cdktf.stringToHclTerraform(this._gtpProfile),
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
      internet_service6_custom: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internetService6Custom),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      internet_service6_custom_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internetService6CustomGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      internet_service6_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internetService6Group),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      internet_service6_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internetService6Name),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      internet_service6_src_custom: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internetService6SrcCustom),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      internet_service6_src_custom_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internetService6SrcCustomGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      internet_service6_src_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internetService6SrcGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      internet_service6_src_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internetService6SrcName),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      internet_service6_src_negate: {
        value: cdktf.stringToHclTerraform(this._internetService6SrcNegate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service_custom: {
        value: cdktf.stringToHclTerraform(this._internetServiceCustom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service_custom_group: {
        value: cdktf.stringToHclTerraform(this._internetServiceCustomGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service_group: {
        value: cdktf.stringToHclTerraform(this._internetServiceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internetServiceId),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      internet_service_name: {
        value: cdktf.stringToHclTerraform(this._internetServiceName),
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
      internet_service_src_custom: {
        value: cdktf.stringToHclTerraform(this._internetServiceSrcCustom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service_src_custom_group: {
        value: cdktf.stringToHclTerraform(this._internetServiceSrcCustomGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service_src_group: {
        value: cdktf.stringToHclTerraform(this._internetServiceSrcGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service_src_id: {
        value: cdktf.stringToHclTerraform(this._internetServiceSrcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service_src_name: {
        value: cdktf.stringToHclTerraform(this._internetServiceSrcName),
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
      ip_version_type: {
        value: cdktf.stringToHclTerraform(this._ipVersionType),
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
      mms_profile: {
        value: cdktf.stringToHclTerraform(this._mmsProfile),
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
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._natip),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      natoutbound: {
        value: cdktf.stringToHclTerraform(this._natoutbound),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_service_dynamic: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._networkServiceDynamic),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      network_service_src_dynamic: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._networkServiceSrcDynamic),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      ntlm_enabled_browsers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ntlmEnabledBrowsers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      pcp_poolname: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pcpPoolname),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      pfcp_profile: {
        value: cdktf.stringToHclTerraform(this._pfcpProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pkg: {
        value: cdktf.stringToHclTerraform(this._pkg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pkg_folder_path: {
        value: cdktf.stringToHclTerraform(this._pkgFolderPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_behaviour_type: {
        value: cdktf.stringToHclTerraform(this._policyBehaviourType),
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
      policy_offload: {
        value: cdktf.stringToHclTerraform(this._policyOffload),
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
      poolname: {
        value: cdktf.stringToHclTerraform(this._poolname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      poolname6: {
        value: cdktf.stringToHclTerraform(this._poolname6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      rtp_addr: {
        value: cdktf.stringToHclTerraform(this._rtpAddr),
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
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
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
      service: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._service),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      service_negate: {
        value: cdktf.stringToHclTerraform(this._serviceNegate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_ttl: {
        value: cdktf.stringToHclTerraform(this._sessionTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sgt: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._sgt),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
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
      src_vendor_mac: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._srcVendorMac),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      srcaddr: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._srcaddr),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      srcaddr6: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._srcaddr6),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      srcintf: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._srcintf),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      ssl_mirror_intf: {
        value: cdktf.stringToHclTerraform(this._sslMirrorIntf),
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
      tcp_timeout_pid: {
        value: cdktf.stringToHclTerraform(this._tcpTimeoutPid),
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
      udp_timeout_pid: {
        value: cdktf.stringToHclTerraform(this._udpTimeoutPid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_category: {
        value: cdktf.stringToHclTerraform(this._urlCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._users),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      ztna_ems_tag: {
        value: cdktf.stringToHclTerraform(this._ztnaEmsTag),
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
      ztna_ems_tag_secondary: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ztnaEmsTagSecondary),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ztna_geo_tag: {
        value: cdktf.stringToHclTerraform(this._ztnaGeoTag),
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
      vpn_dst_node: {
        value: cdktf.listMapperHcl(packagesFirewallPolicyVpnDstNodeToHclTerraform, true)(this._vpnDstNode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PackagesFirewallPolicyVpnDstNodeList",
      },
      vpn_src_node: {
        value: cdktf.listMapperHcl(packagesFirewallPolicyVpnSrcNodeToHclTerraform, true)(this._vpnSrcNode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PackagesFirewallPolicyVpnSrcNodeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
