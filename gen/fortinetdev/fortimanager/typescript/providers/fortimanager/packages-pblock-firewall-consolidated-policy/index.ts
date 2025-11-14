// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PackagesPblockFirewallConsolidatedPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#_policy_block PackagesPblockFirewallConsolidatedPolicy#_policy_block}
  */
  readonly policyBlock?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#action PackagesPblockFirewallConsolidatedPolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#adom PackagesPblockFirewallConsolidatedPolicy#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#app_category PackagesPblockFirewallConsolidatedPolicy#app_category}
  */
  readonly appCategory?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#app_group PackagesPblockFirewallConsolidatedPolicy#app_group}
  */
  readonly appGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#application PackagesPblockFirewallConsolidatedPolicy#application}
  */
  readonly application?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#application_list PackagesPblockFirewallConsolidatedPolicy#application_list}
  */
  readonly applicationList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#auto_asic_offload PackagesPblockFirewallConsolidatedPolicy#auto_asic_offload}
  */
  readonly autoAsicOffload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#av_profile PackagesPblockFirewallConsolidatedPolicy#av_profile}
  */
  readonly avProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#captive_portal_exempt PackagesPblockFirewallConsolidatedPolicy#captive_portal_exempt}
  */
  readonly captivePortalExempt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#cifs_profile PackagesPblockFirewallConsolidatedPolicy#cifs_profile}
  */
  readonly cifsProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#comments PackagesPblockFirewallConsolidatedPolicy#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#diffserv_forward PackagesPblockFirewallConsolidatedPolicy#diffserv_forward}
  */
  readonly diffservForward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#diffserv_reverse PackagesPblockFirewallConsolidatedPolicy#diffserv_reverse}
  */
  readonly diffservReverse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#diffservcode_forward PackagesPblockFirewallConsolidatedPolicy#diffservcode_forward}
  */
  readonly diffservcodeForward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#diffservcode_rev PackagesPblockFirewallConsolidatedPolicy#diffservcode_rev}
  */
  readonly diffservcodeRev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#dlp_sensor PackagesPblockFirewallConsolidatedPolicy#dlp_sensor}
  */
  readonly dlpSensor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#dnsfilter_profile PackagesPblockFirewallConsolidatedPolicy#dnsfilter_profile}
  */
  readonly dnsfilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#dstaddr4 PackagesPblockFirewallConsolidatedPolicy#dstaddr4}
  */
  readonly dstaddr4?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#dstaddr6 PackagesPblockFirewallConsolidatedPolicy#dstaddr6}
  */
  readonly dstaddr6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#dstaddr_negate PackagesPblockFirewallConsolidatedPolicy#dstaddr_negate}
  */
  readonly dstaddrNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#dstintf PackagesPblockFirewallConsolidatedPolicy#dstintf}
  */
  readonly dstintf?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#emailfilter_profile PackagesPblockFirewallConsolidatedPolicy#emailfilter_profile}
  */
  readonly emailfilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#fixedport PackagesPblockFirewallConsolidatedPolicy#fixedport}
  */
  readonly fixedport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#fsso_groups PackagesPblockFirewallConsolidatedPolicy#fsso_groups}
  */
  readonly fssoGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#global_label PackagesPblockFirewallConsolidatedPolicy#global_label}
  */
  readonly globalLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#groups PackagesPblockFirewallConsolidatedPolicy#groups}
  */
  readonly groups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#http_policy_redirect PackagesPblockFirewallConsolidatedPolicy#http_policy_redirect}
  */
  readonly httpPolicyRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#icap_profile PackagesPblockFirewallConsolidatedPolicy#icap_profile}
  */
  readonly icapProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#id PackagesPblockFirewallConsolidatedPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#inbound PackagesPblockFirewallConsolidatedPolicy#inbound}
  */
  readonly inbound?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#inspection_mode PackagesPblockFirewallConsolidatedPolicy#inspection_mode}
  */
  readonly inspectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#internet_service PackagesPblockFirewallConsolidatedPolicy#internet_service}
  */
  readonly internetService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#internet_service_custom PackagesPblockFirewallConsolidatedPolicy#internet_service_custom}
  */
  readonly internetServiceCustom?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#internet_service_custom_group PackagesPblockFirewallConsolidatedPolicy#internet_service_custom_group}
  */
  readonly internetServiceCustomGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#internet_service_group PackagesPblockFirewallConsolidatedPolicy#internet_service_group}
  */
  readonly internetServiceGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#internet_service_id PackagesPblockFirewallConsolidatedPolicy#internet_service_id}
  */
  readonly internetServiceId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#internet_service_negate PackagesPblockFirewallConsolidatedPolicy#internet_service_negate}
  */
  readonly internetServiceNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#internet_service_src PackagesPblockFirewallConsolidatedPolicy#internet_service_src}
  */
  readonly internetServiceSrc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#internet_service_src_custom PackagesPblockFirewallConsolidatedPolicy#internet_service_src_custom}
  */
  readonly internetServiceSrcCustom?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#internet_service_src_custom_group PackagesPblockFirewallConsolidatedPolicy#internet_service_src_custom_group}
  */
  readonly internetServiceSrcCustomGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#internet_service_src_group PackagesPblockFirewallConsolidatedPolicy#internet_service_src_group}
  */
  readonly internetServiceSrcGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#internet_service_src_id PackagesPblockFirewallConsolidatedPolicy#internet_service_src_id}
  */
  readonly internetServiceSrcId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#internet_service_src_negate PackagesPblockFirewallConsolidatedPolicy#internet_service_src_negate}
  */
  readonly internetServiceSrcNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#ippool PackagesPblockFirewallConsolidatedPolicy#ippool}
  */
  readonly ippool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#ips_sensor PackagesPblockFirewallConsolidatedPolicy#ips_sensor}
  */
  readonly ipsSensor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#logtraffic PackagesPblockFirewallConsolidatedPolicy#logtraffic}
  */
  readonly logtraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#logtraffic_start PackagesPblockFirewallConsolidatedPolicy#logtraffic_start}
  */
  readonly logtrafficStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#mms_profile PackagesPblockFirewallConsolidatedPolicy#mms_profile}
  */
  readonly mmsProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#name PackagesPblockFirewallConsolidatedPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#nat PackagesPblockFirewallConsolidatedPolicy#nat}
  */
  readonly nat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#outbound PackagesPblockFirewallConsolidatedPolicy#outbound}
  */
  readonly outbound?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#pblock PackagesPblockFirewallConsolidatedPolicy#pblock}
  */
  readonly pblock: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#per_ip_shaper PackagesPblockFirewallConsolidatedPolicy#per_ip_shaper}
  */
  readonly perIpShaper?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#poolname4 PackagesPblockFirewallConsolidatedPolicy#poolname4}
  */
  readonly poolname4?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#poolname6 PackagesPblockFirewallConsolidatedPolicy#poolname6}
  */
  readonly poolname6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#profile_group PackagesPblockFirewallConsolidatedPolicy#profile_group}
  */
  readonly profileGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#profile_protocol_options PackagesPblockFirewallConsolidatedPolicy#profile_protocol_options}
  */
  readonly profileProtocolOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#profile_type PackagesPblockFirewallConsolidatedPolicy#profile_type}
  */
  readonly profileType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#schedule PackagesPblockFirewallConsolidatedPolicy#schedule}
  */
  readonly schedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#scopetype PackagesPblockFirewallConsolidatedPolicy#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#service PackagesPblockFirewallConsolidatedPolicy#service}
  */
  readonly service?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#service_negate PackagesPblockFirewallConsolidatedPolicy#service_negate}
  */
  readonly serviceNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#session_ttl PackagesPblockFirewallConsolidatedPolicy#session_ttl}
  */
  readonly sessionTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#srcaddr4 PackagesPblockFirewallConsolidatedPolicy#srcaddr4}
  */
  readonly srcaddr4?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#srcaddr6 PackagesPblockFirewallConsolidatedPolicy#srcaddr6}
  */
  readonly srcaddr6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#srcaddr_negate PackagesPblockFirewallConsolidatedPolicy#srcaddr_negate}
  */
  readonly srcaddrNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#srcintf PackagesPblockFirewallConsolidatedPolicy#srcintf}
  */
  readonly srcintf?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#ssh_filter_profile PackagesPblockFirewallConsolidatedPolicy#ssh_filter_profile}
  */
  readonly sshFilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#ssh_policy_redirect PackagesPblockFirewallConsolidatedPolicy#ssh_policy_redirect}
  */
  readonly sshPolicyRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#ssl_ssh_profile PackagesPblockFirewallConsolidatedPolicy#ssl_ssh_profile}
  */
  readonly sslSshProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#status PackagesPblockFirewallConsolidatedPolicy#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#tcp_mss_receiver PackagesPblockFirewallConsolidatedPolicy#tcp_mss_receiver}
  */
  readonly tcpMssReceiver?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#tcp_mss_sender PackagesPblockFirewallConsolidatedPolicy#tcp_mss_sender}
  */
  readonly tcpMssSender?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#traffic_shaper PackagesPblockFirewallConsolidatedPolicy#traffic_shaper}
  */
  readonly trafficShaper?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#traffic_shaper_reverse PackagesPblockFirewallConsolidatedPolicy#traffic_shaper_reverse}
  */
  readonly trafficShaperReverse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#url_category PackagesPblockFirewallConsolidatedPolicy#url_category}
  */
  readonly urlCategory?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#users PackagesPblockFirewallConsolidatedPolicy#users}
  */
  readonly users?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#utm_status PackagesPblockFirewallConsolidatedPolicy#utm_status}
  */
  readonly utmStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#uuid PackagesPblockFirewallConsolidatedPolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#voip_profile PackagesPblockFirewallConsolidatedPolicy#voip_profile}
  */
  readonly voipProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#vpntunnel PackagesPblockFirewallConsolidatedPolicy#vpntunnel}
  */
  readonly vpntunnel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#waf_profile PackagesPblockFirewallConsolidatedPolicy#waf_profile}
  */
  readonly wafProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#wanopt PackagesPblockFirewallConsolidatedPolicy#wanopt}
  */
  readonly wanopt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#wanopt_detection PackagesPblockFirewallConsolidatedPolicy#wanopt_detection}
  */
  readonly wanoptDetection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#wanopt_passive_opt PackagesPblockFirewallConsolidatedPolicy#wanopt_passive_opt}
  */
  readonly wanoptPassiveOpt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#wanopt_peer PackagesPblockFirewallConsolidatedPolicy#wanopt_peer}
  */
  readonly wanoptPeer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#wanopt_profile PackagesPblockFirewallConsolidatedPolicy#wanopt_profile}
  */
  readonly wanoptProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#webcache PackagesPblockFirewallConsolidatedPolicy#webcache}
  */
  readonly webcache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#webcache_https PackagesPblockFirewallConsolidatedPolicy#webcache_https}
  */
  readonly webcacheHttps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#webfilter_profile PackagesPblockFirewallConsolidatedPolicy#webfilter_profile}
  */
  readonly webfilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#webproxy_forward_server PackagesPblockFirewallConsolidatedPolicy#webproxy_forward_server}
  */
  readonly webproxyForwardServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#webproxy_profile PackagesPblockFirewallConsolidatedPolicy#webproxy_profile}
  */
  readonly webproxyProfile?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy fortimanager_packages_pblock_firewall_consolidated_policy}
*/
export class PackagesPblockFirewallConsolidatedPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_packages_pblock_firewall_consolidated_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PackagesPblockFirewallConsolidatedPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PackagesPblockFirewallConsolidatedPolicy to import
  * @param importFromId The id of the existing PackagesPblockFirewallConsolidatedPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PackagesPblockFirewallConsolidatedPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_packages_pblock_firewall_consolidated_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock_firewall_consolidated_policy fortimanager_packages_pblock_firewall_consolidated_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PackagesPblockFirewallConsolidatedPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: PackagesPblockFirewallConsolidatedPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_packages_pblock_firewall_consolidated_policy',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
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
    this._appCategory = config.appCategory;
    this._appGroup = config.appGroup;
    this._application = config.application;
    this._applicationList = config.applicationList;
    this._autoAsicOffload = config.autoAsicOffload;
    this._avProfile = config.avProfile;
    this._captivePortalExempt = config.captivePortalExempt;
    this._cifsProfile = config.cifsProfile;
    this._comments = config.comments;
    this._diffservForward = config.diffservForward;
    this._diffservReverse = config.diffservReverse;
    this._diffservcodeForward = config.diffservcodeForward;
    this._diffservcodeRev = config.diffservcodeRev;
    this._dlpSensor = config.dlpSensor;
    this._dnsfilterProfile = config.dnsfilterProfile;
    this._dstaddr4 = config.dstaddr4;
    this._dstaddr6 = config.dstaddr6;
    this._dstaddrNegate = config.dstaddrNegate;
    this._dstintf = config.dstintf;
    this._emailfilterProfile = config.emailfilterProfile;
    this._fixedport = config.fixedport;
    this._fssoGroups = config.fssoGroups;
    this._globalLabel = config.globalLabel;
    this._groups = config.groups;
    this._httpPolicyRedirect = config.httpPolicyRedirect;
    this._icapProfile = config.icapProfile;
    this._id = config.id;
    this._inbound = config.inbound;
    this._inspectionMode = config.inspectionMode;
    this._internetService = config.internetService;
    this._internetServiceCustom = config.internetServiceCustom;
    this._internetServiceCustomGroup = config.internetServiceCustomGroup;
    this._internetServiceGroup = config.internetServiceGroup;
    this._internetServiceId = config.internetServiceId;
    this._internetServiceNegate = config.internetServiceNegate;
    this._internetServiceSrc = config.internetServiceSrc;
    this._internetServiceSrcCustom = config.internetServiceSrcCustom;
    this._internetServiceSrcCustomGroup = config.internetServiceSrcCustomGroup;
    this._internetServiceSrcGroup = config.internetServiceSrcGroup;
    this._internetServiceSrcId = config.internetServiceSrcId;
    this._internetServiceSrcNegate = config.internetServiceSrcNegate;
    this._ippool = config.ippool;
    this._ipsSensor = config.ipsSensor;
    this._logtraffic = config.logtraffic;
    this._logtrafficStart = config.logtrafficStart;
    this._mmsProfile = config.mmsProfile;
    this._name = config.name;
    this._nat = config.nat;
    this._outbound = config.outbound;
    this._pblock = config.pblock;
    this._perIpShaper = config.perIpShaper;
    this._poolname4 = config.poolname4;
    this._poolname6 = config.poolname6;
    this._profileGroup = config.profileGroup;
    this._profileProtocolOptions = config.profileProtocolOptions;
    this._profileType = config.profileType;
    this._schedule = config.schedule;
    this._scopetype = config.scopetype;
    this._service = config.service;
    this._serviceNegate = config.serviceNegate;
    this._sessionTtl = config.sessionTtl;
    this._srcaddr4 = config.srcaddr4;
    this._srcaddr6 = config.srcaddr6;
    this._srcaddrNegate = config.srcaddrNegate;
    this._srcintf = config.srcintf;
    this._sshFilterProfile = config.sshFilterProfile;
    this._sshPolicyRedirect = config.sshPolicyRedirect;
    this._sslSshProfile = config.sslSshProfile;
    this._status = config.status;
    this._tcpMssReceiver = config.tcpMssReceiver;
    this._tcpMssSender = config.tcpMssSender;
    this._trafficShaper = config.trafficShaper;
    this._trafficShaperReverse = config.trafficShaperReverse;
    this._urlCategory = config.urlCategory;
    this._users = config.users;
    this._utmStatus = config.utmStatus;
    this._uuid = config.uuid;
    this._voipProfile = config.voipProfile;
    this._vpntunnel = config.vpntunnel;
    this._wafProfile = config.wafProfile;
    this._wanopt = config.wanopt;
    this._wanoptDetection = config.wanoptDetection;
    this._wanoptPassiveOpt = config.wanoptPassiveOpt;
    this._wanoptPeer = config.wanoptPeer;
    this._wanoptProfile = config.wanoptProfile;
    this._webcache = config.webcache;
    this._webcacheHttps = config.webcacheHttps;
    this._webfilterProfile = config.webfilterProfile;
    this._webproxyForwardServer = config.webproxyForwardServer;
    this._webproxyProfile = config.webproxyProfile;
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

  // action - computed: false, optional: true, required: false
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

  // app_category - computed: true, optional: true, required: false
  private _appCategory?: string[]; 
  public get appCategory() {
    return cdktf.Fn.tolist(this.getListAttribute('app_category'));
  }
  public set appCategory(value: string[]) {
    this._appCategory = value;
  }
  public resetAppCategory() {
    this._appCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appCategoryInput() {
    return this._appCategory;
  }

  // app_group - computed: true, optional: true, required: false
  private _appGroup?: string[]; 
  public get appGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('app_group'));
  }
  public set appGroup(value: string[]) {
    this._appGroup = value;
  }
  public resetAppGroup() {
    this._appGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appGroupInput() {
    return this._appGroup;
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

  // dstaddr4 - computed: true, optional: true, required: false
  private _dstaddr4?: string[]; 
  public get dstaddr4() {
    return cdktf.Fn.tolist(this.getListAttribute('dstaddr4'));
  }
  public set dstaddr4(value: string[]) {
    this._dstaddr4 = value;
  }
  public resetDstaddr4() {
    this._dstaddr4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstaddr4Input() {
    return this._dstaddr4;
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

  // internet_service_custom - computed: true, optional: true, required: false
  private _internetServiceCustom?: string[]; 
  public get internetServiceCustom() {
    return cdktf.Fn.tolist(this.getListAttribute('internet_service_custom'));
  }
  public set internetServiceCustom(value: string[]) {
    this._internetServiceCustom = value;
  }
  public resetInternetServiceCustom() {
    this._internetServiceCustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceCustomInput() {
    return this._internetServiceCustom;
  }

  // internet_service_custom_group - computed: true, optional: true, required: false
  private _internetServiceCustomGroup?: string[]; 
  public get internetServiceCustomGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('internet_service_custom_group'));
  }
  public set internetServiceCustomGroup(value: string[]) {
    this._internetServiceCustomGroup = value;
  }
  public resetInternetServiceCustomGroup() {
    this._internetServiceCustomGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceCustomGroupInput() {
    return this._internetServiceCustomGroup;
  }

  // internet_service_group - computed: true, optional: true, required: false
  private _internetServiceGroup?: string[]; 
  public get internetServiceGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('internet_service_group'));
  }
  public set internetServiceGroup(value: string[]) {
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

  // internet_service_src_custom - computed: true, optional: true, required: false
  private _internetServiceSrcCustom?: string[]; 
  public get internetServiceSrcCustom() {
    return cdktf.Fn.tolist(this.getListAttribute('internet_service_src_custom'));
  }
  public set internetServiceSrcCustom(value: string[]) {
    this._internetServiceSrcCustom = value;
  }
  public resetInternetServiceSrcCustom() {
    this._internetServiceSrcCustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceSrcCustomInput() {
    return this._internetServiceSrcCustom;
  }

  // internet_service_src_custom_group - computed: true, optional: true, required: false
  private _internetServiceSrcCustomGroup?: string[]; 
  public get internetServiceSrcCustomGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('internet_service_src_custom_group'));
  }
  public set internetServiceSrcCustomGroup(value: string[]) {
    this._internetServiceSrcCustomGroup = value;
  }
  public resetInternetServiceSrcCustomGroup() {
    this._internetServiceSrcCustomGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceSrcCustomGroupInput() {
    return this._internetServiceSrcCustomGroup;
  }

  // internet_service_src_group - computed: true, optional: true, required: false
  private _internetServiceSrcGroup?: string[]; 
  public get internetServiceSrcGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('internet_service_src_group'));
  }
  public set internetServiceSrcGroup(value: string[]) {
    this._internetServiceSrcGroup = value;
  }
  public resetInternetServiceSrcGroup() {
    this._internetServiceSrcGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceSrcGroupInput() {
    return this._internetServiceSrcGroup;
  }

  // internet_service_src_id - computed: true, optional: true, required: false
  private _internetServiceSrcId?: string[]; 
  public get internetServiceSrcId() {
    return cdktf.Fn.tolist(this.getListAttribute('internet_service_src_id'));
  }
  public set internetServiceSrcId(value: string[]) {
    this._internetServiceSrcId = value;
  }
  public resetInternetServiceSrcId() {
    this._internetServiceSrcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceSrcIdInput() {
    return this._internetServiceSrcId;
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

  // pblock - computed: false, optional: false, required: true
  private _pblock?: string; 
  public get pblock() {
    return this.getStringAttribute('pblock');
  }
  public set pblock(value: string) {
    this._pblock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pblockInput() {
    return this._pblock;
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

  // poolname4 - computed: true, optional: true, required: false
  private _poolname4?: string[]; 
  public get poolname4() {
    return cdktf.Fn.tolist(this.getListAttribute('poolname4'));
  }
  public set poolname4(value: string[]) {
    this._poolname4 = value;
  }
  public resetPoolname4() {
    this._poolname4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolname4Input() {
    return this._poolname4;
  }

  // poolname6 - computed: true, optional: true, required: false
  private _poolname6?: string[]; 
  public get poolname6() {
    return cdktf.Fn.tolist(this.getListAttribute('poolname6'));
  }
  public set poolname6(value: string[]) {
    this._poolname6 = value;
  }
  public resetPoolname6() {
    this._poolname6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolname6Input() {
    return this._poolname6;
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

  // profile_protocol_options - computed: false, optional: true, required: false
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

  // session_ttl - computed: false, optional: true, required: false
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

  // srcaddr4 - computed: true, optional: true, required: false
  private _srcaddr4?: string[]; 
  public get srcaddr4() {
    return cdktf.Fn.tolist(this.getListAttribute('srcaddr4'));
  }
  public set srcaddr4(value: string[]) {
    this._srcaddr4 = value;
  }
  public resetSrcaddr4() {
    this._srcaddr4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddr4Input() {
    return this._srcaddr4;
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

  // ssl_ssh_profile - computed: false, optional: true, required: false
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

  // status - computed: false, optional: true, required: false
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

  // url_category - computed: true, optional: true, required: false
  private _urlCategory?: string[]; 
  public get urlCategory() {
    return cdktf.Fn.tolist(this.getListAttribute('url_category'));
  }
  public set urlCategory(value: string[]) {
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      _policy_block: cdktf.numberToTerraform(this._policyBlock),
      action: cdktf.stringToTerraform(this._action),
      adom: cdktf.stringToTerraform(this._adom),
      app_category: cdktf.listMapper(cdktf.stringToTerraform, false)(this._appCategory),
      app_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._appGroup),
      application: cdktf.listMapper(cdktf.numberToTerraform, false)(this._application),
      application_list: cdktf.stringToTerraform(this._applicationList),
      auto_asic_offload: cdktf.stringToTerraform(this._autoAsicOffload),
      av_profile: cdktf.stringToTerraform(this._avProfile),
      captive_portal_exempt: cdktf.stringToTerraform(this._captivePortalExempt),
      cifs_profile: cdktf.stringToTerraform(this._cifsProfile),
      comments: cdktf.stringToTerraform(this._comments),
      diffserv_forward: cdktf.stringToTerraform(this._diffservForward),
      diffserv_reverse: cdktf.stringToTerraform(this._diffservReverse),
      diffservcode_forward: cdktf.stringToTerraform(this._diffservcodeForward),
      diffservcode_rev: cdktf.stringToTerraform(this._diffservcodeRev),
      dlp_sensor: cdktf.stringToTerraform(this._dlpSensor),
      dnsfilter_profile: cdktf.stringToTerraform(this._dnsfilterProfile),
      dstaddr4: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dstaddr4),
      dstaddr6: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dstaddr6),
      dstaddr_negate: cdktf.stringToTerraform(this._dstaddrNegate),
      dstintf: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dstintf),
      emailfilter_profile: cdktf.stringToTerraform(this._emailfilterProfile),
      fixedport: cdktf.stringToTerraform(this._fixedport),
      fsso_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fssoGroups),
      global_label: cdktf.stringToTerraform(this._globalLabel),
      groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groups),
      http_policy_redirect: cdktf.stringToTerraform(this._httpPolicyRedirect),
      icap_profile: cdktf.stringToTerraform(this._icapProfile),
      id: cdktf.stringToTerraform(this._id),
      inbound: cdktf.stringToTerraform(this._inbound),
      inspection_mode: cdktf.stringToTerraform(this._inspectionMode),
      internet_service: cdktf.stringToTerraform(this._internetService),
      internet_service_custom: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internetServiceCustom),
      internet_service_custom_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internetServiceCustomGroup),
      internet_service_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internetServiceGroup),
      internet_service_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internetServiceId),
      internet_service_negate: cdktf.stringToTerraform(this._internetServiceNegate),
      internet_service_src: cdktf.stringToTerraform(this._internetServiceSrc),
      internet_service_src_custom: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internetServiceSrcCustom),
      internet_service_src_custom_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internetServiceSrcCustomGroup),
      internet_service_src_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internetServiceSrcGroup),
      internet_service_src_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internetServiceSrcId),
      internet_service_src_negate: cdktf.stringToTerraform(this._internetServiceSrcNegate),
      ippool: cdktf.stringToTerraform(this._ippool),
      ips_sensor: cdktf.stringToTerraform(this._ipsSensor),
      logtraffic: cdktf.stringToTerraform(this._logtraffic),
      logtraffic_start: cdktf.stringToTerraform(this._logtrafficStart),
      mms_profile: cdktf.stringToTerraform(this._mmsProfile),
      name: cdktf.stringToTerraform(this._name),
      nat: cdktf.stringToTerraform(this._nat),
      outbound: cdktf.stringToTerraform(this._outbound),
      pblock: cdktf.stringToTerraform(this._pblock),
      per_ip_shaper: cdktf.stringToTerraform(this._perIpShaper),
      poolname4: cdktf.listMapper(cdktf.stringToTerraform, false)(this._poolname4),
      poolname6: cdktf.listMapper(cdktf.stringToTerraform, false)(this._poolname6),
      profile_group: cdktf.stringToTerraform(this._profileGroup),
      profile_protocol_options: cdktf.stringToTerraform(this._profileProtocolOptions),
      profile_type: cdktf.stringToTerraform(this._profileType),
      schedule: cdktf.stringToTerraform(this._schedule),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      service: cdktf.listMapper(cdktf.stringToTerraform, false)(this._service),
      service_negate: cdktf.stringToTerraform(this._serviceNegate),
      session_ttl: cdktf.stringToTerraform(this._sessionTtl),
      srcaddr4: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcaddr4),
      srcaddr6: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcaddr6),
      srcaddr_negate: cdktf.stringToTerraform(this._srcaddrNegate),
      srcintf: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcintf),
      ssh_filter_profile: cdktf.stringToTerraform(this._sshFilterProfile),
      ssh_policy_redirect: cdktf.stringToTerraform(this._sshPolicyRedirect),
      ssl_ssh_profile: cdktf.stringToTerraform(this._sslSshProfile),
      status: cdktf.stringToTerraform(this._status),
      tcp_mss_receiver: cdktf.numberToTerraform(this._tcpMssReceiver),
      tcp_mss_sender: cdktf.numberToTerraform(this._tcpMssSender),
      traffic_shaper: cdktf.stringToTerraform(this._trafficShaper),
      traffic_shaper_reverse: cdktf.stringToTerraform(this._trafficShaperReverse),
      url_category: cdktf.listMapper(cdktf.stringToTerraform, false)(this._urlCategory),
      users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._users),
      utm_status: cdktf.stringToTerraform(this._utmStatus),
      uuid: cdktf.stringToTerraform(this._uuid),
      voip_profile: cdktf.stringToTerraform(this._voipProfile),
      vpntunnel: cdktf.stringToTerraform(this._vpntunnel),
      waf_profile: cdktf.stringToTerraform(this._wafProfile),
      wanopt: cdktf.stringToTerraform(this._wanopt),
      wanopt_detection: cdktf.stringToTerraform(this._wanoptDetection),
      wanopt_passive_opt: cdktf.stringToTerraform(this._wanoptPassiveOpt),
      wanopt_peer: cdktf.stringToTerraform(this._wanoptPeer),
      wanopt_profile: cdktf.stringToTerraform(this._wanoptProfile),
      webcache: cdktf.stringToTerraform(this._webcache),
      webcache_https: cdktf.stringToTerraform(this._webcacheHttps),
      webfilter_profile: cdktf.stringToTerraform(this._webfilterProfile),
      webproxy_forward_server: cdktf.stringToTerraform(this._webproxyForwardServer),
      webproxy_profile: cdktf.stringToTerraform(this._webproxyProfile),
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
      app_category: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._appCategory),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      app_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._appGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      captive_portal_exempt: {
        value: cdktf.stringToHclTerraform(this._captivePortalExempt),
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
      dstaddr4: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dstaddr4),
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
      emailfilter_profile: {
        value: cdktf.stringToHclTerraform(this._emailfilterProfile),
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
      fsso_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fssoGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      internet_service_custom: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internetServiceCustom),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      internet_service_custom_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internetServiceCustomGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      internet_service_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internetServiceGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      internet_service_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internetServiceId),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internetServiceSrcCustom),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      internet_service_src_custom_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internetServiceSrcCustomGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      internet_service_src_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internetServiceSrcGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      internet_service_src_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internetServiceSrcId),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      outbound: {
        value: cdktf.stringToHclTerraform(this._outbound),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pblock: {
        value: cdktf.stringToHclTerraform(this._pblock),
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
      poolname4: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._poolname4),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      poolname6: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._poolname6),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      schedule: {
        value: cdktf.stringToHclTerraform(this._schedule),
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
      srcaddr4: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._srcaddr4),
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
      url_category: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._urlCategory),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
