// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallPolicy6Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#action FirewallPolicy6#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#anti_replay FirewallPolicy6#anti_replay}
  */
  readonly antiReplay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#application_list FirewallPolicy6#application_list}
  */
  readonly applicationList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#auto_asic_offload FirewallPolicy6#auto_asic_offload}
  */
  readonly autoAsicOffload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#av_profile FirewallPolicy6#av_profile}
  */
  readonly avProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#cifs_profile FirewallPolicy6#cifs_profile}
  */
  readonly cifsProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#comments FirewallPolicy6#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#decrypted_traffic_mirror FirewallPolicy6#decrypted_traffic_mirror}
  */
  readonly decryptedTrafficMirror?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#diffserv_forward FirewallPolicy6#diffserv_forward}
  */
  readonly diffservForward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#diffserv_reverse FirewallPolicy6#diffserv_reverse}
  */
  readonly diffservReverse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#diffservcode_forward FirewallPolicy6#diffservcode_forward}
  */
  readonly diffservcodeForward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#diffservcode_rev FirewallPolicy6#diffservcode_rev}
  */
  readonly diffservcodeRev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#dlp_sensor FirewallPolicy6#dlp_sensor}
  */
  readonly dlpSensor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#dnsfilter_profile FirewallPolicy6#dnsfilter_profile}
  */
  readonly dnsfilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#dsri FirewallPolicy6#dsri}
  */
  readonly dsri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#dstaddr_negate FirewallPolicy6#dstaddr_negate}
  */
  readonly dstaddrNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#dynamic_sort_subtable FirewallPolicy6#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#emailfilter_profile FirewallPolicy6#emailfilter_profile}
  */
  readonly emailfilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#firewall_session_dirty FirewallPolicy6#firewall_session_dirty}
  */
  readonly firewallSessionDirty?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#fixedport FirewallPolicy6#fixedport}
  */
  readonly fixedport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#get_all_tables FirewallPolicy6#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#global_label FirewallPolicy6#global_label}
  */
  readonly globalLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#http_policy_redirect FirewallPolicy6#http_policy_redirect}
  */
  readonly httpPolicyRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#icap_profile FirewallPolicy6#icap_profile}
  */
  readonly icapProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#id FirewallPolicy6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#inbound FirewallPolicy6#inbound}
  */
  readonly inbound?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#inspection_mode FirewallPolicy6#inspection_mode}
  */
  readonly inspectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#ippool FirewallPolicy6#ippool}
  */
  readonly ippool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#ips_sensor FirewallPolicy6#ips_sensor}
  */
  readonly ipsSensor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#label FirewallPolicy6#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#logtraffic FirewallPolicy6#logtraffic}
  */
  readonly logtraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#logtraffic_start FirewallPolicy6#logtraffic_start}
  */
  readonly logtrafficStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#name FirewallPolicy6#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#nat FirewallPolicy6#nat}
  */
  readonly nat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#natinbound FirewallPolicy6#natinbound}
  */
  readonly natinbound?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#natoutbound FirewallPolicy6#natoutbound}
  */
  readonly natoutbound?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#outbound FirewallPolicy6#outbound}
  */
  readonly outbound?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#per_ip_shaper FirewallPolicy6#per_ip_shaper}
  */
  readonly perIpShaper?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#policyid FirewallPolicy6#policyid}
  */
  readonly policyid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#profile_group FirewallPolicy6#profile_group}
  */
  readonly profileGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#profile_protocol_options FirewallPolicy6#profile_protocol_options}
  */
  readonly profileProtocolOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#profile_type FirewallPolicy6#profile_type}
  */
  readonly profileType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#replacemsg_override_group FirewallPolicy6#replacemsg_override_group}
  */
  readonly replacemsgOverrideGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#rsso FirewallPolicy6#rsso}
  */
  readonly rsso?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#schedule FirewallPolicy6#schedule}
  */
  readonly schedule: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#send_deny_packet FirewallPolicy6#send_deny_packet}
  */
  readonly sendDenyPacket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#service_negate FirewallPolicy6#service_negate}
  */
  readonly serviceNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#session_ttl FirewallPolicy6#session_ttl}
  */
  readonly sessionTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#spamfilter_profile FirewallPolicy6#spamfilter_profile}
  */
  readonly spamfilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#srcaddr_negate FirewallPolicy6#srcaddr_negate}
  */
  readonly srcaddrNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#ssh_filter_profile FirewallPolicy6#ssh_filter_profile}
  */
  readonly sshFilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#ssh_policy_redirect FirewallPolicy6#ssh_policy_redirect}
  */
  readonly sshPolicyRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#ssl_mirror FirewallPolicy6#ssl_mirror}
  */
  readonly sslMirror?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#ssl_ssh_profile FirewallPolicy6#ssl_ssh_profile}
  */
  readonly sslSshProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#status FirewallPolicy6#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#tcp_mss_receiver FirewallPolicy6#tcp_mss_receiver}
  */
  readonly tcpMssReceiver?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#tcp_mss_sender FirewallPolicy6#tcp_mss_sender}
  */
  readonly tcpMssSender?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#tcp_session_without_syn FirewallPolicy6#tcp_session_without_syn}
  */
  readonly tcpSessionWithoutSyn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#timeout_send_rst FirewallPolicy6#timeout_send_rst}
  */
  readonly timeoutSendRst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#tos FirewallPolicy6#tos}
  */
  readonly tos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#tos_mask FirewallPolicy6#tos_mask}
  */
  readonly tosMask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#tos_negate FirewallPolicy6#tos_negate}
  */
  readonly tosNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#traffic_shaper FirewallPolicy6#traffic_shaper}
  */
  readonly trafficShaper?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#traffic_shaper_reverse FirewallPolicy6#traffic_shaper_reverse}
  */
  readonly trafficShaperReverse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#utm_status FirewallPolicy6#utm_status}
  */
  readonly utmStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#uuid FirewallPolicy6#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#vdomparam FirewallPolicy6#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#vlan_cos_fwd FirewallPolicy6#vlan_cos_fwd}
  */
  readonly vlanCosFwd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#vlan_cos_rev FirewallPolicy6#vlan_cos_rev}
  */
  readonly vlanCosRev?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#vlan_filter FirewallPolicy6#vlan_filter}
  */
  readonly vlanFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#voip_profile FirewallPolicy6#voip_profile}
  */
  readonly voipProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#vpntunnel FirewallPolicy6#vpntunnel}
  */
  readonly vpntunnel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#waf_profile FirewallPolicy6#waf_profile}
  */
  readonly wafProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#webcache FirewallPolicy6#webcache}
  */
  readonly webcache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#webcache_https FirewallPolicy6#webcache_https}
  */
  readonly webcacheHttps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#webfilter_profile FirewallPolicy6#webfilter_profile}
  */
  readonly webfilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#webproxy_forward_server FirewallPolicy6#webproxy_forward_server}
  */
  readonly webproxyForwardServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#webproxy_profile FirewallPolicy6#webproxy_profile}
  */
  readonly webproxyProfile?: string;
  /**
  * app_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#app_category FirewallPolicy6#app_category}
  */
  readonly appCategory?: FirewallPolicy6AppCategory[] | cdktf.IResolvable;
  /**
  * app_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#app_group FirewallPolicy6#app_group}
  */
  readonly appGroup?: FirewallPolicy6AppGroup[] | cdktf.IResolvable;
  /**
  * application block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#application FirewallPolicy6#application}
  */
  readonly application?: FirewallPolicy6Application[] | cdktf.IResolvable;
  /**
  * custom_log_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#custom_log_fields FirewallPolicy6#custom_log_fields}
  */
  readonly customLogFields?: FirewallPolicy6CustomLogFields[] | cdktf.IResolvable;
  /**
  * devices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#devices FirewallPolicy6#devices}
  */
  readonly devices?: FirewallPolicy6Devices[] | cdktf.IResolvable;
  /**
  * dstaddr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#dstaddr FirewallPolicy6#dstaddr}
  */
  readonly dstaddr: FirewallPolicy6Dstaddr[] | cdktf.IResolvable;
  /**
  * dstintf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#dstintf FirewallPolicy6#dstintf}
  */
  readonly dstintf: FirewallPolicy6Dstintf[] | cdktf.IResolvable;
  /**
  * fsso_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#fsso_groups FirewallPolicy6#fsso_groups}
  */
  readonly fssoGroups?: FirewallPolicy6FssoGroups[] | cdktf.IResolvable;
  /**
  * groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#groups FirewallPolicy6#groups}
  */
  readonly groups?: FirewallPolicy6Groups[] | cdktf.IResolvable;
  /**
  * poolname block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#poolname FirewallPolicy6#poolname}
  */
  readonly poolname?: FirewallPolicy6Poolname[] | cdktf.IResolvable;
  /**
  * service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#service FirewallPolicy6#service}
  */
  readonly service?: FirewallPolicy6Service[] | cdktf.IResolvable;
  /**
  * srcaddr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#srcaddr FirewallPolicy6#srcaddr}
  */
  readonly srcaddr: FirewallPolicy6Srcaddr[] | cdktf.IResolvable;
  /**
  * srcintf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#srcintf FirewallPolicy6#srcintf}
  */
  readonly srcintf: FirewallPolicy6Srcintf[] | cdktf.IResolvable;
  /**
  * ssl_mirror_intf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#ssl_mirror_intf FirewallPolicy6#ssl_mirror_intf}
  */
  readonly sslMirrorIntf?: FirewallPolicy6SslMirrorIntf[] | cdktf.IResolvable;
  /**
  * url_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#url_category FirewallPolicy6#url_category}
  */
  readonly urlCategory?: FirewallPolicy6UrlCategory[] | cdktf.IResolvable;
  /**
  * users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#users FirewallPolicy6#users}
  */
  readonly users?: FirewallPolicy6Users[] | cdktf.IResolvable;
}
export interface FirewallPolicy6AppCategory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#id FirewallPolicy6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function firewallPolicy6AppCategoryToTerraform(struct?: FirewallPolicy6AppCategory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function firewallPolicy6AppCategoryToHclTerraform(struct?: FirewallPolicy6AppCategory | cdktf.IResolvable): any {
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

export class FirewallPolicy6AppCategoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicy6AppCategory | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallPolicy6AppCategory | cdktf.IResolvable | undefined) {
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

export class FirewallPolicy6AppCategoryList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicy6AppCategory[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicy6AppCategoryOutputReference {
    return new FirewallPolicy6AppCategoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicy6AppGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#name FirewallPolicy6#name}
  */
  readonly name?: string;
}

export function firewallPolicy6AppGroupToTerraform(struct?: FirewallPolicy6AppGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicy6AppGroupToHclTerraform(struct?: FirewallPolicy6AppGroup | cdktf.IResolvable): any {
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

export class FirewallPolicy6AppGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicy6AppGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallPolicy6AppGroup | cdktf.IResolvable | undefined) {
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

export class FirewallPolicy6AppGroupList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicy6AppGroup[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicy6AppGroupOutputReference {
    return new FirewallPolicy6AppGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicy6Application {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#id FirewallPolicy6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function firewallPolicy6ApplicationToTerraform(struct?: FirewallPolicy6Application | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function firewallPolicy6ApplicationToHclTerraform(struct?: FirewallPolicy6Application | cdktf.IResolvable): any {
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

export class FirewallPolicy6ApplicationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicy6Application | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallPolicy6Application | cdktf.IResolvable | undefined) {
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

export class FirewallPolicy6ApplicationList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicy6Application[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicy6ApplicationOutputReference {
    return new FirewallPolicy6ApplicationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicy6CustomLogFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#field_id FirewallPolicy6#field_id}
  */
  readonly fieldId?: string;
}

export function firewallPolicy6CustomLogFieldsToTerraform(struct?: FirewallPolicy6CustomLogFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_id: cdktf.stringToTerraform(struct!.fieldId),
  }
}


export function firewallPolicy6CustomLogFieldsToHclTerraform(struct?: FirewallPolicy6CustomLogFields | cdktf.IResolvable): any {
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

export class FirewallPolicy6CustomLogFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicy6CustomLogFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallPolicy6CustomLogFields | cdktf.IResolvable | undefined) {
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

export class FirewallPolicy6CustomLogFieldsList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicy6CustomLogFields[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicy6CustomLogFieldsOutputReference {
    return new FirewallPolicy6CustomLogFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicy6Devices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#name FirewallPolicy6#name}
  */
  readonly name?: string;
}

export function firewallPolicy6DevicesToTerraform(struct?: FirewallPolicy6Devices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicy6DevicesToHclTerraform(struct?: FirewallPolicy6Devices | cdktf.IResolvable): any {
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

export class FirewallPolicy6DevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicy6Devices | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallPolicy6Devices | cdktf.IResolvable | undefined) {
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

export class FirewallPolicy6DevicesList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicy6Devices[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicy6DevicesOutputReference {
    return new FirewallPolicy6DevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicy6Dstaddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#name FirewallPolicy6#name}
  */
  readonly name?: string;
}

export function firewallPolicy6DstaddrToTerraform(struct?: FirewallPolicy6Dstaddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicy6DstaddrToHclTerraform(struct?: FirewallPolicy6Dstaddr | cdktf.IResolvable): any {
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

export class FirewallPolicy6DstaddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicy6Dstaddr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallPolicy6Dstaddr | cdktf.IResolvable | undefined) {
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

export class FirewallPolicy6DstaddrList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicy6Dstaddr[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicy6DstaddrOutputReference {
    return new FirewallPolicy6DstaddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicy6Dstintf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#name FirewallPolicy6#name}
  */
  readonly name?: string;
}

export function firewallPolicy6DstintfToTerraform(struct?: FirewallPolicy6Dstintf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicy6DstintfToHclTerraform(struct?: FirewallPolicy6Dstintf | cdktf.IResolvable): any {
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

export class FirewallPolicy6DstintfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicy6Dstintf | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallPolicy6Dstintf | cdktf.IResolvable | undefined) {
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

export class FirewallPolicy6DstintfList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicy6Dstintf[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicy6DstintfOutputReference {
    return new FirewallPolicy6DstintfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicy6FssoGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#name FirewallPolicy6#name}
  */
  readonly name?: string;
}

export function firewallPolicy6FssoGroupsToTerraform(struct?: FirewallPolicy6FssoGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicy6FssoGroupsToHclTerraform(struct?: FirewallPolicy6FssoGroups | cdktf.IResolvable): any {
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

export class FirewallPolicy6FssoGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicy6FssoGroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallPolicy6FssoGroups | cdktf.IResolvable | undefined) {
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

export class FirewallPolicy6FssoGroupsList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicy6FssoGroups[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicy6FssoGroupsOutputReference {
    return new FirewallPolicy6FssoGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicy6Groups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#name FirewallPolicy6#name}
  */
  readonly name?: string;
}

export function firewallPolicy6GroupsToTerraform(struct?: FirewallPolicy6Groups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicy6GroupsToHclTerraform(struct?: FirewallPolicy6Groups | cdktf.IResolvable): any {
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

export class FirewallPolicy6GroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicy6Groups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallPolicy6Groups | cdktf.IResolvable | undefined) {
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

export class FirewallPolicy6GroupsList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicy6Groups[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicy6GroupsOutputReference {
    return new FirewallPolicy6GroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicy6Poolname {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#name FirewallPolicy6#name}
  */
  readonly name?: string;
}

export function firewallPolicy6PoolnameToTerraform(struct?: FirewallPolicy6Poolname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicy6PoolnameToHclTerraform(struct?: FirewallPolicy6Poolname | cdktf.IResolvable): any {
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

export class FirewallPolicy6PoolnameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicy6Poolname | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallPolicy6Poolname | cdktf.IResolvable | undefined) {
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

export class FirewallPolicy6PoolnameList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicy6Poolname[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicy6PoolnameOutputReference {
    return new FirewallPolicy6PoolnameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicy6Service {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#name FirewallPolicy6#name}
  */
  readonly name?: string;
}

export function firewallPolicy6ServiceToTerraform(struct?: FirewallPolicy6Service | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicy6ServiceToHclTerraform(struct?: FirewallPolicy6Service | cdktf.IResolvable): any {
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

export class FirewallPolicy6ServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicy6Service | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallPolicy6Service | cdktf.IResolvable | undefined) {
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

export class FirewallPolicy6ServiceList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicy6Service[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicy6ServiceOutputReference {
    return new FirewallPolicy6ServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicy6Srcaddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#name FirewallPolicy6#name}
  */
  readonly name?: string;
}

export function firewallPolicy6SrcaddrToTerraform(struct?: FirewallPolicy6Srcaddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicy6SrcaddrToHclTerraform(struct?: FirewallPolicy6Srcaddr | cdktf.IResolvable): any {
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

export class FirewallPolicy6SrcaddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicy6Srcaddr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallPolicy6Srcaddr | cdktf.IResolvable | undefined) {
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

export class FirewallPolicy6SrcaddrList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicy6Srcaddr[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicy6SrcaddrOutputReference {
    return new FirewallPolicy6SrcaddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicy6Srcintf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#name FirewallPolicy6#name}
  */
  readonly name?: string;
}

export function firewallPolicy6SrcintfToTerraform(struct?: FirewallPolicy6Srcintf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicy6SrcintfToHclTerraform(struct?: FirewallPolicy6Srcintf | cdktf.IResolvable): any {
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

export class FirewallPolicy6SrcintfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicy6Srcintf | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallPolicy6Srcintf | cdktf.IResolvable | undefined) {
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

export class FirewallPolicy6SrcintfList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicy6Srcintf[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicy6SrcintfOutputReference {
    return new FirewallPolicy6SrcintfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicy6SslMirrorIntf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#name FirewallPolicy6#name}
  */
  readonly name?: string;
}

export function firewallPolicy6SslMirrorIntfToTerraform(struct?: FirewallPolicy6SslMirrorIntf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicy6SslMirrorIntfToHclTerraform(struct?: FirewallPolicy6SslMirrorIntf | cdktf.IResolvable): any {
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

export class FirewallPolicy6SslMirrorIntfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicy6SslMirrorIntf | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallPolicy6SslMirrorIntf | cdktf.IResolvable | undefined) {
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

export class FirewallPolicy6SslMirrorIntfList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicy6SslMirrorIntf[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicy6SslMirrorIntfOutputReference {
    return new FirewallPolicy6SslMirrorIntfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicy6UrlCategory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#id FirewallPolicy6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function firewallPolicy6UrlCategoryToTerraform(struct?: FirewallPolicy6UrlCategory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function firewallPolicy6UrlCategoryToHclTerraform(struct?: FirewallPolicy6UrlCategory | cdktf.IResolvable): any {
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

export class FirewallPolicy6UrlCategoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicy6UrlCategory | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallPolicy6UrlCategory | cdktf.IResolvable | undefined) {
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

export class FirewallPolicy6UrlCategoryList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicy6UrlCategory[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicy6UrlCategoryOutputReference {
    return new FirewallPolicy6UrlCategoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicy6Users {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#name FirewallPolicy6#name}
  */
  readonly name?: string;
}

export function firewallPolicy6UsersToTerraform(struct?: FirewallPolicy6Users | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicy6UsersToHclTerraform(struct?: FirewallPolicy6Users | cdktf.IResolvable): any {
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

export class FirewallPolicy6UsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicy6Users | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallPolicy6Users | cdktf.IResolvable | undefined) {
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

export class FirewallPolicy6UsersList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicy6Users[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicy6UsersOutputReference {
    return new FirewallPolicy6UsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6 fortios_firewall_policy6}
*/
export class FirewallPolicy6 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_firewall_policy6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallPolicy6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallPolicy6 to import
  * @param importFromId The id of the existing FirewallPolicy6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallPolicy6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_firewall_policy6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy6 fortios_firewall_policy6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallPolicy6Config
  */
  public constructor(scope: Construct, id: string, config: FirewallPolicy6Config) {
    super(scope, id, {
      terraformResourceType: 'fortios_firewall_policy6',
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
    this._applicationList = config.applicationList;
    this._autoAsicOffload = config.autoAsicOffload;
    this._avProfile = config.avProfile;
    this._cifsProfile = config.cifsProfile;
    this._comments = config.comments;
    this._decryptedTrafficMirror = config.decryptedTrafficMirror;
    this._diffservForward = config.diffservForward;
    this._diffservReverse = config.diffservReverse;
    this._diffservcodeForward = config.diffservcodeForward;
    this._diffservcodeRev = config.diffservcodeRev;
    this._dlpSensor = config.dlpSensor;
    this._dnsfilterProfile = config.dnsfilterProfile;
    this._dsri = config.dsri;
    this._dstaddrNegate = config.dstaddrNegate;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._emailfilterProfile = config.emailfilterProfile;
    this._firewallSessionDirty = config.firewallSessionDirty;
    this._fixedport = config.fixedport;
    this._getAllTables = config.fetchAllTables;
    this._globalLabel = config.globalLabel;
    this._httpPolicyRedirect = config.httpPolicyRedirect;
    this._icapProfile = config.icapProfile;
    this._id = config.id;
    this._inbound = config.inbound;
    this._inspectionMode = config.inspectionMode;
    this._ippool = config.ippool;
    this._ipsSensor = config.ipsSensor;
    this._label = config.label;
    this._logtraffic = config.logtraffic;
    this._logtrafficStart = config.logtrafficStart;
    this._name = config.name;
    this._nat = config.nat;
    this._natinbound = config.natinbound;
    this._natoutbound = config.natoutbound;
    this._outbound = config.outbound;
    this._perIpShaper = config.perIpShaper;
    this._policyid = config.policyid;
    this._profileGroup = config.profileGroup;
    this._profileProtocolOptions = config.profileProtocolOptions;
    this._profileType = config.profileType;
    this._replacemsgOverrideGroup = config.replacemsgOverrideGroup;
    this._rsso = config.rsso;
    this._schedule = config.schedule;
    this._sendDenyPacket = config.sendDenyPacket;
    this._serviceNegate = config.serviceNegate;
    this._sessionTtl = config.sessionTtl;
    this._spamfilterProfile = config.spamfilterProfile;
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
    this._vlanCosFwd = config.vlanCosFwd;
    this._vlanCosRev = config.vlanCosRev;
    this._vlanFilter = config.vlanFilter;
    this._voipProfile = config.voipProfile;
    this._vpntunnel = config.vpntunnel;
    this._wafProfile = config.wafProfile;
    this._webcache = config.webcache;
    this._webcacheHttps = config.webcacheHttps;
    this._webfilterProfile = config.webfilterProfile;
    this._webproxyForwardServer = config.webproxyForwardServer;
    this._webproxyProfile = config.webproxyProfile;
    this._appCategory.internalValue = config.appCategory;
    this._appGroup.internalValue = config.appGroup;
    this._application.internalValue = config.application;
    this._customLogFields.internalValue = config.customLogFields;
    this._devices.internalValue = config.devices;
    this._dstaddr.internalValue = config.dstaddr;
    this._dstintf.internalValue = config.dstintf;
    this._fssoGroups.internalValue = config.fssoGroups;
    this._groups.internalValue = config.groups;
    this._poolname.internalValue = config.poolname;
    this._service.internalValue = config.service;
    this._srcaddr.internalValue = config.srcaddr;
    this._srcintf.internalValue = config.srcintf;
    this._sslMirrorIntf.internalValue = config.sslMirrorIntf;
    this._urlCategory.internalValue = config.urlCategory;
    this._users.internalValue = config.users;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // diffserv_forward - computed: false, optional: true, required: false
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

  // diffserv_reverse - computed: false, optional: true, required: false
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

  // dsri - computed: false, optional: true, required: false
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

  // dstaddr_negate - computed: false, optional: true, required: false
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

  // logtraffic - computed: false, optional: true, required: false
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

  // logtraffic_start - computed: false, optional: true, required: false
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

  // nat - computed: false, optional: true, required: false
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

  // profile_type - computed: false, optional: true, required: false
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

  // schedule - computed: false, optional: false, required: true
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // send_deny_packet - computed: false, optional: true, required: false
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

  // service_negate - computed: false, optional: true, required: false
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

  // srcaddr_negate - computed: false, optional: true, required: false
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

  // tcp_session_without_syn - computed: false, optional: true, required: false
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

  // timeout_send_rst - computed: false, optional: true, required: false
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

  // tos - computed: false, optional: true, required: false
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

  // tos_mask - computed: false, optional: true, required: false
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

  // tos_negate - computed: false, optional: true, required: false
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

  // utm_status - computed: false, optional: true, required: false
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

  // uuid - computed: false, optional: true, required: false
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

  // app_category - computed: false, optional: true, required: false
  private _appCategory = new FirewallPolicy6AppCategoryList(this, "app_category", true);
  public get appCategory() {
    return this._appCategory;
  }
  public putAppCategory(value: FirewallPolicy6AppCategory[] | cdktf.IResolvable) {
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
  private _appGroup = new FirewallPolicy6AppGroupList(this, "app_group", true);
  public get appGroup() {
    return this._appGroup;
  }
  public putAppGroup(value: FirewallPolicy6AppGroup[] | cdktf.IResolvable) {
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
  private _application = new FirewallPolicy6ApplicationList(this, "application", true);
  public get application() {
    return this._application;
  }
  public putApplication(value: FirewallPolicy6Application[] | cdktf.IResolvable) {
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
  private _customLogFields = new FirewallPolicy6CustomLogFieldsList(this, "custom_log_fields", true);
  public get customLogFields() {
    return this._customLogFields;
  }
  public putCustomLogFields(value: FirewallPolicy6CustomLogFields[] | cdktf.IResolvable) {
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
  private _devices = new FirewallPolicy6DevicesList(this, "devices", false);
  public get devices() {
    return this._devices;
  }
  public putDevices(value: FirewallPolicy6Devices[] | cdktf.IResolvable) {
    this._devices.internalValue = value;
  }
  public resetDevices() {
    this._devices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices.internalValue;
  }

  // dstaddr - computed: false, optional: false, required: true
  private _dstaddr = new FirewallPolicy6DstaddrList(this, "dstaddr", true);
  public get dstaddr() {
    return this._dstaddr;
  }
  public putDstaddr(value: FirewallPolicy6Dstaddr[] | cdktf.IResolvable) {
    this._dstaddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstaddrInput() {
    return this._dstaddr.internalValue;
  }

  // dstintf - computed: false, optional: false, required: true
  private _dstintf = new FirewallPolicy6DstintfList(this, "dstintf", true);
  public get dstintf() {
    return this._dstintf;
  }
  public putDstintf(value: FirewallPolicy6Dstintf[] | cdktf.IResolvable) {
    this._dstintf.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstintfInput() {
    return this._dstintf.internalValue;
  }

  // fsso_groups - computed: false, optional: true, required: false
  private _fssoGroups = new FirewallPolicy6FssoGroupsList(this, "fsso_groups", true);
  public get fssoGroups() {
    return this._fssoGroups;
  }
  public putFssoGroups(value: FirewallPolicy6FssoGroups[] | cdktf.IResolvable) {
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
  private _groups = new FirewallPolicy6GroupsList(this, "groups", true);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: FirewallPolicy6Groups[] | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  public resetGroups() {
    this._groups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }

  // poolname - computed: false, optional: true, required: false
  private _poolname = new FirewallPolicy6PoolnameList(this, "poolname", true);
  public get poolname() {
    return this._poolname;
  }
  public putPoolname(value: FirewallPolicy6Poolname[] | cdktf.IResolvable) {
    this._poolname.internalValue = value;
  }
  public resetPoolname() {
    this._poolname.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolnameInput() {
    return this._poolname.internalValue;
  }

  // service - computed: false, optional: true, required: false
  private _service = new FirewallPolicy6ServiceList(this, "service", true);
  public get service() {
    return this._service;
  }
  public putService(value: FirewallPolicy6Service[] | cdktf.IResolvable) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // srcaddr - computed: false, optional: false, required: true
  private _srcaddr = new FirewallPolicy6SrcaddrList(this, "srcaddr", true);
  public get srcaddr() {
    return this._srcaddr;
  }
  public putSrcaddr(value: FirewallPolicy6Srcaddr[] | cdktf.IResolvable) {
    this._srcaddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddrInput() {
    return this._srcaddr.internalValue;
  }

  // srcintf - computed: false, optional: false, required: true
  private _srcintf = new FirewallPolicy6SrcintfList(this, "srcintf", true);
  public get srcintf() {
    return this._srcintf;
  }
  public putSrcintf(value: FirewallPolicy6Srcintf[] | cdktf.IResolvable) {
    this._srcintf.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcintfInput() {
    return this._srcintf.internalValue;
  }

  // ssl_mirror_intf - computed: false, optional: true, required: false
  private _sslMirrorIntf = new FirewallPolicy6SslMirrorIntfList(this, "ssl_mirror_intf", true);
  public get sslMirrorIntf() {
    return this._sslMirrorIntf;
  }
  public putSslMirrorIntf(value: FirewallPolicy6SslMirrorIntf[] | cdktf.IResolvable) {
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
  private _urlCategory = new FirewallPolicy6UrlCategoryList(this, "url_category", true);
  public get urlCategory() {
    return this._urlCategory;
  }
  public putUrlCategory(value: FirewallPolicy6UrlCategory[] | cdktf.IResolvable) {
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
  private _users = new FirewallPolicy6UsersList(this, "users", true);
  public get users() {
    return this._users;
  }
  public putUsers(value: FirewallPolicy6Users[] | cdktf.IResolvable) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      anti_replay: cdktf.stringToTerraform(this._antiReplay),
      application_list: cdktf.stringToTerraform(this._applicationList),
      auto_asic_offload: cdktf.stringToTerraform(this._autoAsicOffload),
      av_profile: cdktf.stringToTerraform(this._avProfile),
      cifs_profile: cdktf.stringToTerraform(this._cifsProfile),
      comments: cdktf.stringToTerraform(this._comments),
      decrypted_traffic_mirror: cdktf.stringToTerraform(this._decryptedTrafficMirror),
      diffserv_forward: cdktf.stringToTerraform(this._diffservForward),
      diffserv_reverse: cdktf.stringToTerraform(this._diffservReverse),
      diffservcode_forward: cdktf.stringToTerraform(this._diffservcodeForward),
      diffservcode_rev: cdktf.stringToTerraform(this._diffservcodeRev),
      dlp_sensor: cdktf.stringToTerraform(this._dlpSensor),
      dnsfilter_profile: cdktf.stringToTerraform(this._dnsfilterProfile),
      dsri: cdktf.stringToTerraform(this._dsri),
      dstaddr_negate: cdktf.stringToTerraform(this._dstaddrNegate),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      emailfilter_profile: cdktf.stringToTerraform(this._emailfilterProfile),
      firewall_session_dirty: cdktf.stringToTerraform(this._firewallSessionDirty),
      fixedport: cdktf.stringToTerraform(this._fixedport),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      global_label: cdktf.stringToTerraform(this._globalLabel),
      http_policy_redirect: cdktf.stringToTerraform(this._httpPolicyRedirect),
      icap_profile: cdktf.stringToTerraform(this._icapProfile),
      id: cdktf.stringToTerraform(this._id),
      inbound: cdktf.stringToTerraform(this._inbound),
      inspection_mode: cdktf.stringToTerraform(this._inspectionMode),
      ippool: cdktf.stringToTerraform(this._ippool),
      ips_sensor: cdktf.stringToTerraform(this._ipsSensor),
      label: cdktf.stringToTerraform(this._label),
      logtraffic: cdktf.stringToTerraform(this._logtraffic),
      logtraffic_start: cdktf.stringToTerraform(this._logtrafficStart),
      name: cdktf.stringToTerraform(this._name),
      nat: cdktf.stringToTerraform(this._nat),
      natinbound: cdktf.stringToTerraform(this._natinbound),
      natoutbound: cdktf.stringToTerraform(this._natoutbound),
      outbound: cdktf.stringToTerraform(this._outbound),
      per_ip_shaper: cdktf.stringToTerraform(this._perIpShaper),
      policyid: cdktf.numberToTerraform(this._policyid),
      profile_group: cdktf.stringToTerraform(this._profileGroup),
      profile_protocol_options: cdktf.stringToTerraform(this._profileProtocolOptions),
      profile_type: cdktf.stringToTerraform(this._profileType),
      replacemsg_override_group: cdktf.stringToTerraform(this._replacemsgOverrideGroup),
      rsso: cdktf.stringToTerraform(this._rsso),
      schedule: cdktf.stringToTerraform(this._schedule),
      send_deny_packet: cdktf.stringToTerraform(this._sendDenyPacket),
      service_negate: cdktf.stringToTerraform(this._serviceNegate),
      session_ttl: cdktf.numberToTerraform(this._sessionTtl),
      spamfilter_profile: cdktf.stringToTerraform(this._spamfilterProfile),
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
      vlan_cos_fwd: cdktf.numberToTerraform(this._vlanCosFwd),
      vlan_cos_rev: cdktf.numberToTerraform(this._vlanCosRev),
      vlan_filter: cdktf.stringToTerraform(this._vlanFilter),
      voip_profile: cdktf.stringToTerraform(this._voipProfile),
      vpntunnel: cdktf.stringToTerraform(this._vpntunnel),
      waf_profile: cdktf.stringToTerraform(this._wafProfile),
      webcache: cdktf.stringToTerraform(this._webcache),
      webcache_https: cdktf.stringToTerraform(this._webcacheHttps),
      webfilter_profile: cdktf.stringToTerraform(this._webfilterProfile),
      webproxy_forward_server: cdktf.stringToTerraform(this._webproxyForwardServer),
      webproxy_profile: cdktf.stringToTerraform(this._webproxyProfile),
      app_category: cdktf.listMapper(firewallPolicy6AppCategoryToTerraform, true)(this._appCategory.internalValue),
      app_group: cdktf.listMapper(firewallPolicy6AppGroupToTerraform, true)(this._appGroup.internalValue),
      application: cdktf.listMapper(firewallPolicy6ApplicationToTerraform, true)(this._application.internalValue),
      custom_log_fields: cdktf.listMapper(firewallPolicy6CustomLogFieldsToTerraform, true)(this._customLogFields.internalValue),
      devices: cdktf.listMapper(firewallPolicy6DevicesToTerraform, true)(this._devices.internalValue),
      dstaddr: cdktf.listMapper(firewallPolicy6DstaddrToTerraform, true)(this._dstaddr.internalValue),
      dstintf: cdktf.listMapper(firewallPolicy6DstintfToTerraform, true)(this._dstintf.internalValue),
      fsso_groups: cdktf.listMapper(firewallPolicy6FssoGroupsToTerraform, true)(this._fssoGroups.internalValue),
      groups: cdktf.listMapper(firewallPolicy6GroupsToTerraform, true)(this._groups.internalValue),
      poolname: cdktf.listMapper(firewallPolicy6PoolnameToTerraform, true)(this._poolname.internalValue),
      service: cdktf.listMapper(firewallPolicy6ServiceToTerraform, true)(this._service.internalValue),
      srcaddr: cdktf.listMapper(firewallPolicy6SrcaddrToTerraform, true)(this._srcaddr.internalValue),
      srcintf: cdktf.listMapper(firewallPolicy6SrcintfToTerraform, true)(this._srcintf.internalValue),
      ssl_mirror_intf: cdktf.listMapper(firewallPolicy6SslMirrorIntfToTerraform, true)(this._sslMirrorIntf.internalValue),
      url_category: cdktf.listMapper(firewallPolicy6UrlCategoryToTerraform, true)(this._urlCategory.internalValue),
      users: cdktf.listMapper(firewallPolicy6UsersToTerraform, true)(this._users.internalValue),
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
      dsri: {
        value: cdktf.stringToHclTerraform(this._dsri),
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
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
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
      label: {
        value: cdktf.stringToHclTerraform(this._label),
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
      natinbound: {
        value: cdktf.stringToHclTerraform(this._natinbound),
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
      outbound: {
        value: cdktf.stringToHclTerraform(this._outbound),
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
      policyid: {
        value: cdktf.numberToHclTerraform(this._policyid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      replacemsg_override_group: {
        value: cdktf.stringToHclTerraform(this._replacemsgOverrideGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rsso: {
        value: cdktf.stringToHclTerraform(this._rsso),
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
      spamfilter_profile: {
        value: cdktf.stringToHclTerraform(this._spamfilterProfile),
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
      app_category: {
        value: cdktf.listMapperHcl(firewallPolicy6AppCategoryToHclTerraform, true)(this._appCategory.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicy6AppCategoryList",
      },
      app_group: {
        value: cdktf.listMapperHcl(firewallPolicy6AppGroupToHclTerraform, true)(this._appGroup.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicy6AppGroupList",
      },
      application: {
        value: cdktf.listMapperHcl(firewallPolicy6ApplicationToHclTerraform, true)(this._application.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicy6ApplicationList",
      },
      custom_log_fields: {
        value: cdktf.listMapperHcl(firewallPolicy6CustomLogFieldsToHclTerraform, true)(this._customLogFields.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicy6CustomLogFieldsList",
      },
      devices: {
        value: cdktf.listMapperHcl(firewallPolicy6DevicesToHclTerraform, true)(this._devices.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallPolicy6DevicesList",
      },
      dstaddr: {
        value: cdktf.listMapperHcl(firewallPolicy6DstaddrToHclTerraform, true)(this._dstaddr.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicy6DstaddrList",
      },
      dstintf: {
        value: cdktf.listMapperHcl(firewallPolicy6DstintfToHclTerraform, true)(this._dstintf.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicy6DstintfList",
      },
      fsso_groups: {
        value: cdktf.listMapperHcl(firewallPolicy6FssoGroupsToHclTerraform, true)(this._fssoGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicy6FssoGroupsList",
      },
      groups: {
        value: cdktf.listMapperHcl(firewallPolicy6GroupsToHclTerraform, true)(this._groups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicy6GroupsList",
      },
      poolname: {
        value: cdktf.listMapperHcl(firewallPolicy6PoolnameToHclTerraform, true)(this._poolname.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicy6PoolnameList",
      },
      service: {
        value: cdktf.listMapperHcl(firewallPolicy6ServiceToHclTerraform, true)(this._service.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicy6ServiceList",
      },
      srcaddr: {
        value: cdktf.listMapperHcl(firewallPolicy6SrcaddrToHclTerraform, true)(this._srcaddr.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicy6SrcaddrList",
      },
      srcintf: {
        value: cdktf.listMapperHcl(firewallPolicy6SrcintfToHclTerraform, true)(this._srcintf.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicy6SrcintfList",
      },
      ssl_mirror_intf: {
        value: cdktf.listMapperHcl(firewallPolicy6SslMirrorIntfToHclTerraform, true)(this._sslMirrorIntf.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicy6SslMirrorIntfList",
      },
      url_category: {
        value: cdktf.listMapperHcl(firewallPolicy6UrlCategoryToHclTerraform, true)(this._urlCategory.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicy6UrlCategoryList",
      },
      users: {
        value: cdktf.listMapperHcl(firewallPolicy6UsersToHclTerraform, true)(this._users.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicy6UsersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
