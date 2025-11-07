// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PackagesGlobalHeaderPolicy6Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#_policy_block PackagesGlobalHeaderPolicy6#_policy_block}
  */
  readonly policyBlock?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#action PackagesGlobalHeaderPolicy6#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#anti_replay PackagesGlobalHeaderPolicy6#anti_replay}
  */
  readonly antiReplay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#app_category PackagesGlobalHeaderPolicy6#app_category}
  */
  readonly appCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#app_group PackagesGlobalHeaderPolicy6#app_group}
  */
  readonly appGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#application PackagesGlobalHeaderPolicy6#application}
  */
  readonly application?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#application_charts PackagesGlobalHeaderPolicy6#application_charts}
  */
  readonly applicationCharts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#application_list PackagesGlobalHeaderPolicy6#application_list}
  */
  readonly applicationList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#auto_asic_offload PackagesGlobalHeaderPolicy6#auto_asic_offload}
  */
  readonly autoAsicOffload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#av_profile PackagesGlobalHeaderPolicy6#av_profile}
  */
  readonly avProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#casi_profile PackagesGlobalHeaderPolicy6#casi_profile}
  */
  readonly casiProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#cgn_log_server_grp PackagesGlobalHeaderPolicy6#cgn_log_server_grp}
  */
  readonly cgnLogServerGrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#cifs_profile PackagesGlobalHeaderPolicy6#cifs_profile}
  */
  readonly cifsProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#comments PackagesGlobalHeaderPolicy6#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#custom_log_fields PackagesGlobalHeaderPolicy6#custom_log_fields}
  */
  readonly customLogFields?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#decrypted_traffic_mirror PackagesGlobalHeaderPolicy6#decrypted_traffic_mirror}
  */
  readonly decryptedTrafficMirror?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#deep_inspection_options PackagesGlobalHeaderPolicy6#deep_inspection_options}
  */
  readonly deepInspectionOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#device_detection_portal PackagesGlobalHeaderPolicy6#device_detection_portal}
  */
  readonly deviceDetectionPortal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#devices PackagesGlobalHeaderPolicy6#devices}
  */
  readonly devices?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#diffserv_forward PackagesGlobalHeaderPolicy6#diffserv_forward}
  */
  readonly diffservForward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#diffserv_reverse PackagesGlobalHeaderPolicy6#diffserv_reverse}
  */
  readonly diffservReverse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#diffservcode_forward PackagesGlobalHeaderPolicy6#diffservcode_forward}
  */
  readonly diffservcodeForward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#diffservcode_rev PackagesGlobalHeaderPolicy6#diffservcode_rev}
  */
  readonly diffservcodeRev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#dlp_sensor PackagesGlobalHeaderPolicy6#dlp_sensor}
  */
  readonly dlpSensor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#dnsfilter_profile PackagesGlobalHeaderPolicy6#dnsfilter_profile}
  */
  readonly dnsfilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#dscp_match PackagesGlobalHeaderPolicy6#dscp_match}
  */
  readonly dscpMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#dscp_negate PackagesGlobalHeaderPolicy6#dscp_negate}
  */
  readonly dscpNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#dscp_value PackagesGlobalHeaderPolicy6#dscp_value}
  */
  readonly dscpValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#dsri PackagesGlobalHeaderPolicy6#dsri}
  */
  readonly dsri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#dstaddr PackagesGlobalHeaderPolicy6#dstaddr}
  */
  readonly dstaddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#dstaddr_negate PackagesGlobalHeaderPolicy6#dstaddr_negate}
  */
  readonly dstaddrNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#dstintf PackagesGlobalHeaderPolicy6#dstintf}
  */
  readonly dstintf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#dynamic_profile PackagesGlobalHeaderPolicy6#dynamic_profile}
  */
  readonly dynamicProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#dynamic_profile_access PackagesGlobalHeaderPolicy6#dynamic_profile_access}
  */
  readonly dynamicProfileAccess?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#dynamic_profile_group PackagesGlobalHeaderPolicy6#dynamic_profile_group}
  */
  readonly dynamicProfileGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#email_collection_portal PackagesGlobalHeaderPolicy6#email_collection_portal}
  */
  readonly emailCollectionPortal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#emailfilter_profile PackagesGlobalHeaderPolicy6#emailfilter_profile}
  */
  readonly emailfilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#file_filter_profile PackagesGlobalHeaderPolicy6#file_filter_profile}
  */
  readonly fileFilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#firewall_session_dirty PackagesGlobalHeaderPolicy6#firewall_session_dirty}
  */
  readonly firewallSessionDirty?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#fixedport PackagesGlobalHeaderPolicy6#fixedport}
  */
  readonly fixedport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#fsae PackagesGlobalHeaderPolicy6#fsae}
  */
  readonly fsae?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#fsso_groups PackagesGlobalHeaderPolicy6#fsso_groups}
  */
  readonly fssoGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#global_label PackagesGlobalHeaderPolicy6#global_label}
  */
  readonly globalLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#groups PackagesGlobalHeaderPolicy6#groups}
  */
  readonly groups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#http_policy_redirect PackagesGlobalHeaderPolicy6#http_policy_redirect}
  */
  readonly httpPolicyRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#icap_profile PackagesGlobalHeaderPolicy6#icap_profile}
  */
  readonly icapProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#id PackagesGlobalHeaderPolicy6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#identity_based PackagesGlobalHeaderPolicy6#identity_based}
  */
  readonly identityBased?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#identity_from PackagesGlobalHeaderPolicy6#identity_from}
  */
  readonly identityFrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#inbound PackagesGlobalHeaderPolicy6#inbound}
  */
  readonly inbound?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#inspection_mode PackagesGlobalHeaderPolicy6#inspection_mode}
  */
  readonly inspectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#ippool PackagesGlobalHeaderPolicy6#ippool}
  */
  readonly ippool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#ips_sensor PackagesGlobalHeaderPolicy6#ips_sensor}
  */
  readonly ipsSensor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#label PackagesGlobalHeaderPolicy6#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#logtraffic PackagesGlobalHeaderPolicy6#logtraffic}
  */
  readonly logtraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#logtraffic_start PackagesGlobalHeaderPolicy6#logtraffic_start}
  */
  readonly logtrafficStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#mms_profile PackagesGlobalHeaderPolicy6#mms_profile}
  */
  readonly mmsProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#name PackagesGlobalHeaderPolicy6#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#nat PackagesGlobalHeaderPolicy6#nat}
  */
  readonly nat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#natinbound PackagesGlobalHeaderPolicy6#natinbound}
  */
  readonly natinbound?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#natoutbound PackagesGlobalHeaderPolicy6#natoutbound}
  */
  readonly natoutbound?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#np_accelation PackagesGlobalHeaderPolicy6#np_accelation}
  */
  readonly npAccelation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#np_acceleration PackagesGlobalHeaderPolicy6#np_acceleration}
  */
  readonly npAcceleration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#outbound PackagesGlobalHeaderPolicy6#outbound}
  */
  readonly outbound?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#per_ip_shaper PackagesGlobalHeaderPolicy6#per_ip_shaper}
  */
  readonly perIpShaper?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#pkg PackagesGlobalHeaderPolicy6#pkg}
  */
  readonly pkg: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#pkg_folder_path PackagesGlobalHeaderPolicy6#pkg_folder_path}
  */
  readonly pkgFolderPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#policy_offload PackagesGlobalHeaderPolicy6#policy_offload}
  */
  readonly policyOffload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#policyid PackagesGlobalHeaderPolicy6#policyid}
  */
  readonly policyid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#poolname PackagesGlobalHeaderPolicy6#poolname}
  */
  readonly poolname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#profile_group PackagesGlobalHeaderPolicy6#profile_group}
  */
  readonly profileGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#profile_protocol_options PackagesGlobalHeaderPolicy6#profile_protocol_options}
  */
  readonly profileProtocolOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#profile_type PackagesGlobalHeaderPolicy6#profile_type}
  */
  readonly profileType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#replacemsg_group PackagesGlobalHeaderPolicy6#replacemsg_group}
  */
  readonly replacemsgGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#replacemsg_override_group PackagesGlobalHeaderPolicy6#replacemsg_override_group}
  */
  readonly replacemsgOverrideGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#rsso PackagesGlobalHeaderPolicy6#rsso}
  */
  readonly rsso?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#schedule PackagesGlobalHeaderPolicy6#schedule}
  */
  readonly schedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#send_deny_packet PackagesGlobalHeaderPolicy6#send_deny_packet}
  */
  readonly sendDenyPacket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#service PackagesGlobalHeaderPolicy6#service}
  */
  readonly service?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#service_negate PackagesGlobalHeaderPolicy6#service_negate}
  */
  readonly serviceNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#session_ttl PackagesGlobalHeaderPolicy6#session_ttl}
  */
  readonly sessionTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#spamfilter_profile PackagesGlobalHeaderPolicy6#spamfilter_profile}
  */
  readonly spamfilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#srcaddr PackagesGlobalHeaderPolicy6#srcaddr}
  */
  readonly srcaddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#srcaddr_negate PackagesGlobalHeaderPolicy6#srcaddr_negate}
  */
  readonly srcaddrNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#srcintf PackagesGlobalHeaderPolicy6#srcintf}
  */
  readonly srcintf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#ssh_filter_profile PackagesGlobalHeaderPolicy6#ssh_filter_profile}
  */
  readonly sshFilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#ssh_policy_redirect PackagesGlobalHeaderPolicy6#ssh_policy_redirect}
  */
  readonly sshPolicyRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#ssl_mirror PackagesGlobalHeaderPolicy6#ssl_mirror}
  */
  readonly sslMirror?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#ssl_mirror_intf PackagesGlobalHeaderPolicy6#ssl_mirror_intf}
  */
  readonly sslMirrorIntf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#ssl_ssh_profile PackagesGlobalHeaderPolicy6#ssl_ssh_profile}
  */
  readonly sslSshProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#sslvpn_auth PackagesGlobalHeaderPolicy6#sslvpn_auth}
  */
  readonly sslvpnAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#sslvpn_ccert PackagesGlobalHeaderPolicy6#sslvpn_ccert}
  */
  readonly sslvpnCcert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#sslvpn_cipher PackagesGlobalHeaderPolicy6#sslvpn_cipher}
  */
  readonly sslvpnCipher?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#status PackagesGlobalHeaderPolicy6#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#tags PackagesGlobalHeaderPolicy6#tags}
  */
  readonly tags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#tcp_mss_receiver PackagesGlobalHeaderPolicy6#tcp_mss_receiver}
  */
  readonly tcpMssReceiver?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#tcp_mss_sender PackagesGlobalHeaderPolicy6#tcp_mss_sender}
  */
  readonly tcpMssSender?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#tcp_session_without_syn PackagesGlobalHeaderPolicy6#tcp_session_without_syn}
  */
  readonly tcpSessionWithoutSyn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#timeout_send_rst PackagesGlobalHeaderPolicy6#timeout_send_rst}
  */
  readonly timeoutSendRst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#tos PackagesGlobalHeaderPolicy6#tos}
  */
  readonly tos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#tos_mask PackagesGlobalHeaderPolicy6#tos_mask}
  */
  readonly tosMask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#tos_negate PackagesGlobalHeaderPolicy6#tos_negate}
  */
  readonly tosNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#traffic_shaper PackagesGlobalHeaderPolicy6#traffic_shaper}
  */
  readonly trafficShaper?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#traffic_shaper_reverse PackagesGlobalHeaderPolicy6#traffic_shaper_reverse}
  */
  readonly trafficShaperReverse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#url_category PackagesGlobalHeaderPolicy6#url_category}
  */
  readonly urlCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#users PackagesGlobalHeaderPolicy6#users}
  */
  readonly users?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#utm_inspection_mode PackagesGlobalHeaderPolicy6#utm_inspection_mode}
  */
  readonly utmInspectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#utm_status PackagesGlobalHeaderPolicy6#utm_status}
  */
  readonly utmStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#uuid PackagesGlobalHeaderPolicy6#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#vlan_cos_fwd PackagesGlobalHeaderPolicy6#vlan_cos_fwd}
  */
  readonly vlanCosFwd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#vlan_cos_rev PackagesGlobalHeaderPolicy6#vlan_cos_rev}
  */
  readonly vlanCosRev?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#vlan_filter PackagesGlobalHeaderPolicy6#vlan_filter}
  */
  readonly vlanFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#voip_profile PackagesGlobalHeaderPolicy6#voip_profile}
  */
  readonly voipProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#vpntunnel PackagesGlobalHeaderPolicy6#vpntunnel}
  */
  readonly vpntunnel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#waf_profile PackagesGlobalHeaderPolicy6#waf_profile}
  */
  readonly wafProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#webcache PackagesGlobalHeaderPolicy6#webcache}
  */
  readonly webcache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#webcache_https PackagesGlobalHeaderPolicy6#webcache_https}
  */
  readonly webcacheHttps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#webfilter_profile PackagesGlobalHeaderPolicy6#webfilter_profile}
  */
  readonly webfilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#webproxy_forward_server PackagesGlobalHeaderPolicy6#webproxy_forward_server}
  */
  readonly webproxyForwardServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#webproxy_profile PackagesGlobalHeaderPolicy6#webproxy_profile}
  */
  readonly webproxyProfile?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6 fortimanager_packages_global_header_policy6}
*/
export class PackagesGlobalHeaderPolicy6 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_packages_global_header_policy6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PackagesGlobalHeaderPolicy6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PackagesGlobalHeaderPolicy6 to import
  * @param importFromId The id of the existing PackagesGlobalHeaderPolicy6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PackagesGlobalHeaderPolicy6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_packages_global_header_policy6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_global_header_policy6 fortimanager_packages_global_header_policy6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PackagesGlobalHeaderPolicy6Config
  */
  public constructor(scope: Construct, id: string, config: PackagesGlobalHeaderPolicy6Config) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_packages_global_header_policy6',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
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
    this._antiReplay = config.antiReplay;
    this._appCategory = config.appCategory;
    this._appGroup = config.appGroup;
    this._application = config.application;
    this._applicationCharts = config.applicationCharts;
    this._applicationList = config.applicationList;
    this._autoAsicOffload = config.autoAsicOffload;
    this._avProfile = config.avProfile;
    this._casiProfile = config.casiProfile;
    this._cgnLogServerGrp = config.cgnLogServerGrp;
    this._cifsProfile = config.cifsProfile;
    this._comments = config.comments;
    this._customLogFields = config.customLogFields;
    this._decryptedTrafficMirror = config.decryptedTrafficMirror;
    this._deepInspectionOptions = config.deepInspectionOptions;
    this._deviceDetectionPortal = config.deviceDetectionPortal;
    this._devices = config.devices;
    this._diffservForward = config.diffservForward;
    this._diffservReverse = config.diffservReverse;
    this._diffservcodeForward = config.diffservcodeForward;
    this._diffservcodeRev = config.diffservcodeRev;
    this._dlpSensor = config.dlpSensor;
    this._dnsfilterProfile = config.dnsfilterProfile;
    this._dscpMatch = config.dscpMatch;
    this._dscpNegate = config.dscpNegate;
    this._dscpValue = config.dscpValue;
    this._dsri = config.dsri;
    this._dstaddr = config.dstaddr;
    this._dstaddrNegate = config.dstaddrNegate;
    this._dstintf = config.dstintf;
    this._dynamicProfile = config.dynamicProfile;
    this._dynamicProfileAccess = config.dynamicProfileAccess;
    this._dynamicProfileGroup = config.dynamicProfileGroup;
    this._emailCollectionPortal = config.emailCollectionPortal;
    this._emailfilterProfile = config.emailfilterProfile;
    this._fileFilterProfile = config.fileFilterProfile;
    this._firewallSessionDirty = config.firewallSessionDirty;
    this._fixedport = config.fixedport;
    this._fsae = config.fsae;
    this._fssoGroups = config.fssoGroups;
    this._globalLabel = config.globalLabel;
    this._groups = config.groups;
    this._httpPolicyRedirect = config.httpPolicyRedirect;
    this._icapProfile = config.icapProfile;
    this._id = config.id;
    this._identityBased = config.identityBased;
    this._identityFrom = config.identityFrom;
    this._inbound = config.inbound;
    this._inspectionMode = config.inspectionMode;
    this._ippool = config.ippool;
    this._ipsSensor = config.ipsSensor;
    this._label = config.label;
    this._logtraffic = config.logtraffic;
    this._logtrafficStart = config.logtrafficStart;
    this._mmsProfile = config.mmsProfile;
    this._name = config.name;
    this._nat = config.nat;
    this._natinbound = config.natinbound;
    this._natoutbound = config.natoutbound;
    this._npAccelation = config.npAccelation;
    this._npAcceleration = config.npAcceleration;
    this._outbound = config.outbound;
    this._perIpShaper = config.perIpShaper;
    this._pkg = config.pkg;
    this._pkgFolderPath = config.pkgFolderPath;
    this._policyOffload = config.policyOffload;
    this._policyid = config.policyid;
    this._poolname = config.poolname;
    this._profileGroup = config.profileGroup;
    this._profileProtocolOptions = config.profileProtocolOptions;
    this._profileType = config.profileType;
    this._replacemsgGroup = config.replacemsgGroup;
    this._replacemsgOverrideGroup = config.replacemsgOverrideGroup;
    this._rsso = config.rsso;
    this._schedule = config.schedule;
    this._sendDenyPacket = config.sendDenyPacket;
    this._service = config.service;
    this._serviceNegate = config.serviceNegate;
    this._sessionTtl = config.sessionTtl;
    this._spamfilterProfile = config.spamfilterProfile;
    this._srcaddr = config.srcaddr;
    this._srcaddrNegate = config.srcaddrNegate;
    this._srcintf = config.srcintf;
    this._sshFilterProfile = config.sshFilterProfile;
    this._sshPolicyRedirect = config.sshPolicyRedirect;
    this._sslMirror = config.sslMirror;
    this._sslMirrorIntf = config.sslMirrorIntf;
    this._sslSshProfile = config.sslSshProfile;
    this._sslvpnAuth = config.sslvpnAuth;
    this._sslvpnCcert = config.sslvpnCcert;
    this._sslvpnCipher = config.sslvpnCipher;
    this._status = config.status;
    this._tags = config.tags;
    this._tcpMssReceiver = config.tcpMssReceiver;
    this._tcpMssSender = config.tcpMssSender;
    this._tcpSessionWithoutSyn = config.tcpSessionWithoutSyn;
    this._timeoutSendRst = config.timeoutSendRst;
    this._tos = config.tos;
    this._tosMask = config.tosMask;
    this._tosNegate = config.tosNegate;
    this._trafficShaper = config.trafficShaper;
    this._trafficShaperReverse = config.trafficShaperReverse;
    this._urlCategory = config.urlCategory;
    this._users = config.users;
    this._utmInspectionMode = config.utmInspectionMode;
    this._utmStatus = config.utmStatus;
    this._uuid = config.uuid;
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

  // application_charts - computed: true, optional: true, required: false
  private _applicationCharts?: string[]; 
  public get applicationCharts() {
    return cdktf.Fn.tolist(this.getListAttribute('application_charts'));
  }
  public set applicationCharts(value: string[]) {
    this._applicationCharts = value;
  }
  public resetApplicationCharts() {
    this._applicationCharts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationChartsInput() {
    return this._applicationCharts;
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

  // casi_profile - computed: false, optional: true, required: false
  private _casiProfile?: string; 
  public get casiProfile() {
    return this.getStringAttribute('casi_profile');
  }
  public set casiProfile(value: string) {
    this._casiProfile = value;
  }
  public resetCasiProfile() {
    this._casiProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get casiProfileInput() {
    return this._casiProfile;
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

  // deep_inspection_options - computed: false, optional: true, required: false
  private _deepInspectionOptions?: string; 
  public get deepInspectionOptions() {
    return this.getStringAttribute('deep_inspection_options');
  }
  public set deepInspectionOptions(value: string) {
    this._deepInspectionOptions = value;
  }
  public resetDeepInspectionOptions() {
    this._deepInspectionOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deepInspectionOptionsInput() {
    return this._deepInspectionOptions;
  }

  // device_detection_portal - computed: false, optional: true, required: false
  private _deviceDetectionPortal?: string; 
  public get deviceDetectionPortal() {
    return this.getStringAttribute('device_detection_portal');
  }
  public set deviceDetectionPortal(value: string) {
    this._deviceDetectionPortal = value;
  }
  public resetDeviceDetectionPortal() {
    this._deviceDetectionPortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceDetectionPortalInput() {
    return this._deviceDetectionPortal;
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

  // dstaddr - computed: false, optional: true, required: false
  private _dstaddr?: string; 
  public get dstaddr() {
    return this.getStringAttribute('dstaddr');
  }
  public set dstaddr(value: string) {
    this._dstaddr = value;
  }
  public resetDstaddr() {
    this._dstaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstaddrInput() {
    return this._dstaddr;
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

  // dstintf - computed: false, optional: true, required: false
  private _dstintf?: string; 
  public get dstintf() {
    return this.getStringAttribute('dstintf');
  }
  public set dstintf(value: string) {
    this._dstintf = value;
  }
  public resetDstintf() {
    this._dstintf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstintfInput() {
    return this._dstintf;
  }

  // dynamic_profile - computed: false, optional: true, required: false
  private _dynamicProfile?: string; 
  public get dynamicProfile() {
    return this.getStringAttribute('dynamic_profile');
  }
  public set dynamicProfile(value: string) {
    this._dynamicProfile = value;
  }
  public resetDynamicProfile() {
    this._dynamicProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicProfileInput() {
    return this._dynamicProfile;
  }

  // dynamic_profile_access - computed: true, optional: true, required: false
  private _dynamicProfileAccess?: string[]; 
  public get dynamicProfileAccess() {
    return cdktf.Fn.tolist(this.getListAttribute('dynamic_profile_access'));
  }
  public set dynamicProfileAccess(value: string[]) {
    this._dynamicProfileAccess = value;
  }
  public resetDynamicProfileAccess() {
    this._dynamicProfileAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicProfileAccessInput() {
    return this._dynamicProfileAccess;
  }

  // dynamic_profile_group - computed: false, optional: true, required: false
  private _dynamicProfileGroup?: string; 
  public get dynamicProfileGroup() {
    return this.getStringAttribute('dynamic_profile_group');
  }
  public set dynamicProfileGroup(value: string) {
    this._dynamicProfileGroup = value;
  }
  public resetDynamicProfileGroup() {
    this._dynamicProfileGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicProfileGroupInput() {
    return this._dynamicProfileGroup;
  }

  // email_collection_portal - computed: false, optional: true, required: false
  private _emailCollectionPortal?: string; 
  public get emailCollectionPortal() {
    return this.getStringAttribute('email_collection_portal');
  }
  public set emailCollectionPortal(value: string) {
    this._emailCollectionPortal = value;
  }
  public resetEmailCollectionPortal() {
    this._emailCollectionPortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailCollectionPortalInput() {
    return this._emailCollectionPortal;
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

  // fsae - computed: false, optional: true, required: false
  private _fsae?: string; 
  public get fsae() {
    return this.getStringAttribute('fsae');
  }
  public set fsae(value: string) {
    this._fsae = value;
  }
  public resetFsae() {
    this._fsae = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsaeInput() {
    return this._fsae;
  }

  // fsso_groups - computed: false, optional: true, required: false
  private _fssoGroups?: string; 
  public get fssoGroups() {
    return this.getStringAttribute('fsso_groups');
  }
  public set fssoGroups(value: string) {
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

  // groups - computed: false, optional: true, required: false
  private _groups?: string; 
  public get groups() {
    return this.getStringAttribute('groups');
  }
  public set groups(value: string) {
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

  // identity_based - computed: false, optional: true, required: false
  private _identityBased?: string; 
  public get identityBased() {
    return this.getStringAttribute('identity_based');
  }
  public set identityBased(value: string) {
    this._identityBased = value;
  }
  public resetIdentityBased() {
    this._identityBased = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityBasedInput() {
    return this._identityBased;
  }

  // identity_from - computed: false, optional: true, required: false
  private _identityFrom?: string; 
  public get identityFrom() {
    return this.getStringAttribute('identity_from');
  }
  public set identityFrom(value: string) {
    this._identityFrom = value;
  }
  public resetIdentityFrom() {
    this._identityFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityFromInput() {
    return this._identityFrom;
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

  // np_accelation - computed: false, optional: true, required: false
  private _npAccelation?: string; 
  public get npAccelation() {
    return this.getStringAttribute('np_accelation');
  }
  public set npAccelation(value: string) {
    this._npAccelation = value;
  }
  public resetNpAccelation() {
    this._npAccelation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get npAccelationInput() {
    return this._npAccelation;
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

  // policy_offload - computed: false, optional: true, required: false
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

  // replacemsg_group - computed: false, optional: true, required: false
  private _replacemsgGroup?: string; 
  public get replacemsgGroup() {
    return this.getStringAttribute('replacemsg_group');
  }
  public set replacemsgGroup(value: string) {
    this._replacemsgGroup = value;
  }
  public resetReplacemsgGroup() {
    this._replacemsgGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacemsgGroupInput() {
    return this._replacemsgGroup;
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

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
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

  // srcaddr - computed: false, optional: true, required: false
  private _srcaddr?: string; 
  public get srcaddr() {
    return this.getStringAttribute('srcaddr');
  }
  public set srcaddr(value: string) {
    this._srcaddr = value;
  }
  public resetSrcaddr() {
    this._srcaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddrInput() {
    return this._srcaddr;
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

  // srcintf - computed: false, optional: true, required: false
  private _srcintf?: string; 
  public get srcintf() {
    return this.getStringAttribute('srcintf');
  }
  public set srcintf(value: string) {
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

  // ssl_mirror - computed: true, optional: true, required: false
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

  // sslvpn_auth - computed: false, optional: true, required: false
  private _sslvpnAuth?: string; 
  public get sslvpnAuth() {
    return this.getStringAttribute('sslvpn_auth');
  }
  public set sslvpnAuth(value: string) {
    this._sslvpnAuth = value;
  }
  public resetSslvpnAuth() {
    this._sslvpnAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslvpnAuthInput() {
    return this._sslvpnAuth;
  }

  // sslvpn_ccert - computed: false, optional: true, required: false
  private _sslvpnCcert?: string; 
  public get sslvpnCcert() {
    return this.getStringAttribute('sslvpn_ccert');
  }
  public set sslvpnCcert(value: string) {
    this._sslvpnCcert = value;
  }
  public resetSslvpnCcert() {
    this._sslvpnCcert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslvpnCcertInput() {
    return this._sslvpnCcert;
  }

  // sslvpn_cipher - computed: false, optional: true, required: false
  private _sslvpnCipher?: string; 
  public get sslvpnCipher() {
    return this.getStringAttribute('sslvpn_cipher');
  }
  public set sslvpnCipher(value: string) {
    this._sslvpnCipher = value;
  }
  public resetSslvpnCipher() {
    this._sslvpnCipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslvpnCipherInput() {
    return this._sslvpnCipher;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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

  // users - computed: false, optional: true, required: false
  private _users?: string; 
  public get users() {
    return this.getStringAttribute('users');
  }
  public set users(value: string) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }

  // utm_inspection_mode - computed: false, optional: true, required: false
  private _utmInspectionMode?: string; 
  public get utmInspectionMode() {
    return this.getStringAttribute('utm_inspection_mode');
  }
  public set utmInspectionMode(value: string) {
    this._utmInspectionMode = value;
  }
  public resetUtmInspectionMode() {
    this._utmInspectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utmInspectionModeInput() {
    return this._utmInspectionMode;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      _policy_block: cdktf.numberToTerraform(this._policyBlock),
      action: cdktf.stringToTerraform(this._action),
      anti_replay: cdktf.stringToTerraform(this._antiReplay),
      app_category: cdktf.stringToTerraform(this._appCategory),
      app_group: cdktf.stringToTerraform(this._appGroup),
      application: cdktf.listMapper(cdktf.numberToTerraform, false)(this._application),
      application_charts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._applicationCharts),
      application_list: cdktf.stringToTerraform(this._applicationList),
      auto_asic_offload: cdktf.stringToTerraform(this._autoAsicOffload),
      av_profile: cdktf.stringToTerraform(this._avProfile),
      casi_profile: cdktf.stringToTerraform(this._casiProfile),
      cgn_log_server_grp: cdktf.stringToTerraform(this._cgnLogServerGrp),
      cifs_profile: cdktf.stringToTerraform(this._cifsProfile),
      comments: cdktf.stringToTerraform(this._comments),
      custom_log_fields: cdktf.stringToTerraform(this._customLogFields),
      decrypted_traffic_mirror: cdktf.stringToTerraform(this._decryptedTrafficMirror),
      deep_inspection_options: cdktf.stringToTerraform(this._deepInspectionOptions),
      device_detection_portal: cdktf.stringToTerraform(this._deviceDetectionPortal),
      devices: cdktf.stringToTerraform(this._devices),
      diffserv_forward: cdktf.stringToTerraform(this._diffservForward),
      diffserv_reverse: cdktf.stringToTerraform(this._diffservReverse),
      diffservcode_forward: cdktf.stringToTerraform(this._diffservcodeForward),
      diffservcode_rev: cdktf.stringToTerraform(this._diffservcodeRev),
      dlp_sensor: cdktf.stringToTerraform(this._dlpSensor),
      dnsfilter_profile: cdktf.stringToTerraform(this._dnsfilterProfile),
      dscp_match: cdktf.stringToTerraform(this._dscpMatch),
      dscp_negate: cdktf.stringToTerraform(this._dscpNegate),
      dscp_value: cdktf.stringToTerraform(this._dscpValue),
      dsri: cdktf.stringToTerraform(this._dsri),
      dstaddr: cdktf.stringToTerraform(this._dstaddr),
      dstaddr_negate: cdktf.stringToTerraform(this._dstaddrNegate),
      dstintf: cdktf.stringToTerraform(this._dstintf),
      dynamic_profile: cdktf.stringToTerraform(this._dynamicProfile),
      dynamic_profile_access: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynamicProfileAccess),
      dynamic_profile_group: cdktf.stringToTerraform(this._dynamicProfileGroup),
      email_collection_portal: cdktf.stringToTerraform(this._emailCollectionPortal),
      emailfilter_profile: cdktf.stringToTerraform(this._emailfilterProfile),
      file_filter_profile: cdktf.stringToTerraform(this._fileFilterProfile),
      firewall_session_dirty: cdktf.stringToTerraform(this._firewallSessionDirty),
      fixedport: cdktf.stringToTerraform(this._fixedport),
      fsae: cdktf.stringToTerraform(this._fsae),
      fsso_groups: cdktf.stringToTerraform(this._fssoGroups),
      global_label: cdktf.stringToTerraform(this._globalLabel),
      groups: cdktf.stringToTerraform(this._groups),
      http_policy_redirect: cdktf.stringToTerraform(this._httpPolicyRedirect),
      icap_profile: cdktf.stringToTerraform(this._icapProfile),
      id: cdktf.stringToTerraform(this._id),
      identity_based: cdktf.stringToTerraform(this._identityBased),
      identity_from: cdktf.stringToTerraform(this._identityFrom),
      inbound: cdktf.stringToTerraform(this._inbound),
      inspection_mode: cdktf.stringToTerraform(this._inspectionMode),
      ippool: cdktf.stringToTerraform(this._ippool),
      ips_sensor: cdktf.stringToTerraform(this._ipsSensor),
      label: cdktf.stringToTerraform(this._label),
      logtraffic: cdktf.stringToTerraform(this._logtraffic),
      logtraffic_start: cdktf.stringToTerraform(this._logtrafficStart),
      mms_profile: cdktf.stringToTerraform(this._mmsProfile),
      name: cdktf.stringToTerraform(this._name),
      nat: cdktf.stringToTerraform(this._nat),
      natinbound: cdktf.stringToTerraform(this._natinbound),
      natoutbound: cdktf.stringToTerraform(this._natoutbound),
      np_accelation: cdktf.stringToTerraform(this._npAccelation),
      np_acceleration: cdktf.stringToTerraform(this._npAcceleration),
      outbound: cdktf.stringToTerraform(this._outbound),
      per_ip_shaper: cdktf.stringToTerraform(this._perIpShaper),
      pkg: cdktf.stringToTerraform(this._pkg),
      pkg_folder_path: cdktf.stringToTerraform(this._pkgFolderPath),
      policy_offload: cdktf.stringToTerraform(this._policyOffload),
      policyid: cdktf.numberToTerraform(this._policyid),
      poolname: cdktf.stringToTerraform(this._poolname),
      profile_group: cdktf.stringToTerraform(this._profileGroup),
      profile_protocol_options: cdktf.stringToTerraform(this._profileProtocolOptions),
      profile_type: cdktf.stringToTerraform(this._profileType),
      replacemsg_group: cdktf.stringToTerraform(this._replacemsgGroup),
      replacemsg_override_group: cdktf.stringToTerraform(this._replacemsgOverrideGroup),
      rsso: cdktf.stringToTerraform(this._rsso),
      schedule: cdktf.stringToTerraform(this._schedule),
      send_deny_packet: cdktf.stringToTerraform(this._sendDenyPacket),
      service: cdktf.stringToTerraform(this._service),
      service_negate: cdktf.stringToTerraform(this._serviceNegate),
      session_ttl: cdktf.stringToTerraform(this._sessionTtl),
      spamfilter_profile: cdktf.stringToTerraform(this._spamfilterProfile),
      srcaddr: cdktf.stringToTerraform(this._srcaddr),
      srcaddr_negate: cdktf.stringToTerraform(this._srcaddrNegate),
      srcintf: cdktf.stringToTerraform(this._srcintf),
      ssh_filter_profile: cdktf.stringToTerraform(this._sshFilterProfile),
      ssh_policy_redirect: cdktf.stringToTerraform(this._sshPolicyRedirect),
      ssl_mirror: cdktf.stringToTerraform(this._sslMirror),
      ssl_mirror_intf: cdktf.stringToTerraform(this._sslMirrorIntf),
      ssl_ssh_profile: cdktf.stringToTerraform(this._sslSshProfile),
      sslvpn_auth: cdktf.stringToTerraform(this._sslvpnAuth),
      sslvpn_ccert: cdktf.stringToTerraform(this._sslvpnCcert),
      sslvpn_cipher: cdktf.stringToTerraform(this._sslvpnCipher),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.stringToTerraform(this._tags),
      tcp_mss_receiver: cdktf.numberToTerraform(this._tcpMssReceiver),
      tcp_mss_sender: cdktf.numberToTerraform(this._tcpMssSender),
      tcp_session_without_syn: cdktf.stringToTerraform(this._tcpSessionWithoutSyn),
      timeout_send_rst: cdktf.stringToTerraform(this._timeoutSendRst),
      tos: cdktf.stringToTerraform(this._tos),
      tos_mask: cdktf.stringToTerraform(this._tosMask),
      tos_negate: cdktf.stringToTerraform(this._tosNegate),
      traffic_shaper: cdktf.stringToTerraform(this._trafficShaper),
      traffic_shaper_reverse: cdktf.stringToTerraform(this._trafficShaperReverse),
      url_category: cdktf.stringToTerraform(this._urlCategory),
      users: cdktf.stringToTerraform(this._users),
      utm_inspection_mode: cdktf.stringToTerraform(this._utmInspectionMode),
      utm_status: cdktf.stringToTerraform(this._utmStatus),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      application: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._application),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      application_charts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._applicationCharts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      casi_profile: {
        value: cdktf.stringToHclTerraform(this._casiProfile),
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
      deep_inspection_options: {
        value: cdktf.stringToHclTerraform(this._deepInspectionOptions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_detection_portal: {
        value: cdktf.stringToHclTerraform(this._deviceDetectionPortal),
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
        value: cdktf.stringToHclTerraform(this._dstaddr),
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
        value: cdktf.stringToHclTerraform(this._dstintf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_profile: {
        value: cdktf.stringToHclTerraform(this._dynamicProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_profile_access: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynamicProfileAccess),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynamic_profile_group: {
        value: cdktf.stringToHclTerraform(this._dynamicProfileGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_collection_portal: {
        value: cdktf.stringToHclTerraform(this._emailCollectionPortal),
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
      fsae: {
        value: cdktf.stringToHclTerraform(this._fsae),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fsso_groups: {
        value: cdktf.stringToHclTerraform(this._fssoGroups),
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
        value: cdktf.stringToHclTerraform(this._groups),
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
      identity_based: {
        value: cdktf.stringToHclTerraform(this._identityBased),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_from: {
        value: cdktf.stringToHclTerraform(this._identityFrom),
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
      np_accelation: {
        value: cdktf.stringToHclTerraform(this._npAccelation),
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
      replacemsg_group: {
        value: cdktf.stringToHclTerraform(this._replacemsgGroup),
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
      service: {
        value: cdktf.stringToHclTerraform(this._service),
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
        value: cdktf.stringToHclTerraform(this._sessionTtl),
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
      srcaddr: {
        value: cdktf.stringToHclTerraform(this._srcaddr),
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
        value: cdktf.stringToHclTerraform(this._srcintf),
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
      sslvpn_auth: {
        value: cdktf.stringToHclTerraform(this._sslvpnAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sslvpn_ccert: {
        value: cdktf.stringToHclTerraform(this._sslvpnCcert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sslvpn_cipher: {
        value: cdktf.stringToHclTerraform(this._sslvpnCipher),
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
      tags: {
        value: cdktf.stringToHclTerraform(this._tags),
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
      url_category: {
        value: cdktf.stringToHclTerraform(this._urlCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      users: {
        value: cdktf.stringToHclTerraform(this._users),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      utm_inspection_mode: {
        value: cdktf.stringToHclTerraform(this._utmInspectionMode),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
