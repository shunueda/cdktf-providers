// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PackagesFirewallSecuritypolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#_policy_block PackagesFirewallSecuritypolicy#_policy_block}
  */
  readonly policyBlock?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#action PackagesFirewallSecuritypolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#adom PackagesFirewallSecuritypolicy#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#app_category PackagesFirewallSecuritypolicy#app_category}
  */
  readonly appCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#app_group PackagesFirewallSecuritypolicy#app_group}
  */
  readonly appGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#application PackagesFirewallSecuritypolicy#application}
  */
  readonly application?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#application_list PackagesFirewallSecuritypolicy#application_list}
  */
  readonly applicationList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#av_profile PackagesFirewallSecuritypolicy#av_profile}
  */
  readonly avProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#casb_profile PackagesFirewallSecuritypolicy#casb_profile}
  */
  readonly casbProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#cifs_profile PackagesFirewallSecuritypolicy#cifs_profile}
  */
  readonly cifsProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#comments PackagesFirewallSecuritypolicy#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#diameter_filter_profile PackagesFirewallSecuritypolicy#diameter_filter_profile}
  */
  readonly diameterFilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#dlp_profile PackagesFirewallSecuritypolicy#dlp_profile}
  */
  readonly dlpProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#dlp_sensor PackagesFirewallSecuritypolicy#dlp_sensor}
  */
  readonly dlpSensor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#dnsfilter_profile PackagesFirewallSecuritypolicy#dnsfilter_profile}
  */
  readonly dnsfilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#dstaddr PackagesFirewallSecuritypolicy#dstaddr}
  */
  readonly dstaddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#dstaddr4 PackagesFirewallSecuritypolicy#dstaddr4}
  */
  readonly dstaddr4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#dstaddr6 PackagesFirewallSecuritypolicy#dstaddr6}
  */
  readonly dstaddr6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#dstaddr6_negate PackagesFirewallSecuritypolicy#dstaddr6_negate}
  */
  readonly dstaddr6Negate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#dstaddr_negate PackagesFirewallSecuritypolicy#dstaddr_negate}
  */
  readonly dstaddrNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#dstintf PackagesFirewallSecuritypolicy#dstintf}
  */
  readonly dstintf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#emailfilter_profile PackagesFirewallSecuritypolicy#emailfilter_profile}
  */
  readonly emailfilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#enforce_default_app_port PackagesFirewallSecuritypolicy#enforce_default_app_port}
  */
  readonly enforceDefaultAppPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#file_filter_profile PackagesFirewallSecuritypolicy#file_filter_profile}
  */
  readonly fileFilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#fsso_groups PackagesFirewallSecuritypolicy#fsso_groups}
  */
  readonly fssoGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#global_label PackagesFirewallSecuritypolicy#global_label}
  */
  readonly globalLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#groups PackagesFirewallSecuritypolicy#groups}
  */
  readonly groups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#icap_profile PackagesFirewallSecuritypolicy#icap_profile}
  */
  readonly icapProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#id PackagesFirewallSecuritypolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#internet_service PackagesFirewallSecuritypolicy#internet_service}
  */
  readonly internetService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#internet_service6 PackagesFirewallSecuritypolicy#internet_service6}
  */
  readonly internetService6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#internet_service6_custom PackagesFirewallSecuritypolicy#internet_service6_custom}
  */
  readonly internetService6Custom?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#internet_service6_custom_group PackagesFirewallSecuritypolicy#internet_service6_custom_group}
  */
  readonly internetService6CustomGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#internet_service6_group PackagesFirewallSecuritypolicy#internet_service6_group}
  */
  readonly internetService6Group?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#internet_service6_name PackagesFirewallSecuritypolicy#internet_service6_name}
  */
  readonly internetService6Name?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#internet_service6_negate PackagesFirewallSecuritypolicy#internet_service6_negate}
  */
  readonly internetService6Negate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#internet_service6_src PackagesFirewallSecuritypolicy#internet_service6_src}
  */
  readonly internetService6Src?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#internet_service6_src_custom PackagesFirewallSecuritypolicy#internet_service6_src_custom}
  */
  readonly internetService6SrcCustom?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#internet_service6_src_custom_group PackagesFirewallSecuritypolicy#internet_service6_src_custom_group}
  */
  readonly internetService6SrcCustomGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#internet_service6_src_group PackagesFirewallSecuritypolicy#internet_service6_src_group}
  */
  readonly internetService6SrcGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#internet_service6_src_name PackagesFirewallSecuritypolicy#internet_service6_src_name}
  */
  readonly internetService6SrcName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#internet_service6_src_negate PackagesFirewallSecuritypolicy#internet_service6_src_negate}
  */
  readonly internetService6SrcNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#internet_service_custom PackagesFirewallSecuritypolicy#internet_service_custom}
  */
  readonly internetServiceCustom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#internet_service_custom_group PackagesFirewallSecuritypolicy#internet_service_custom_group}
  */
  readonly internetServiceCustomGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#internet_service_group PackagesFirewallSecuritypolicy#internet_service_group}
  */
  readonly internetServiceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#internet_service_id PackagesFirewallSecuritypolicy#internet_service_id}
  */
  readonly internetServiceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#internet_service_name PackagesFirewallSecuritypolicy#internet_service_name}
  */
  readonly internetServiceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#internet_service_negate PackagesFirewallSecuritypolicy#internet_service_negate}
  */
  readonly internetServiceNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#internet_service_src PackagesFirewallSecuritypolicy#internet_service_src}
  */
  readonly internetServiceSrc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#internet_service_src_custom PackagesFirewallSecuritypolicy#internet_service_src_custom}
  */
  readonly internetServiceSrcCustom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#internet_service_src_custom_group PackagesFirewallSecuritypolicy#internet_service_src_custom_group}
  */
  readonly internetServiceSrcCustomGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#internet_service_src_group PackagesFirewallSecuritypolicy#internet_service_src_group}
  */
  readonly internetServiceSrcGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#internet_service_src_id PackagesFirewallSecuritypolicy#internet_service_src_id}
  */
  readonly internetServiceSrcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#internet_service_src_name PackagesFirewallSecuritypolicy#internet_service_src_name}
  */
  readonly internetServiceSrcName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#internet_service_src_negate PackagesFirewallSecuritypolicy#internet_service_src_negate}
  */
  readonly internetServiceSrcNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#ips_sensor PackagesFirewallSecuritypolicy#ips_sensor}
  */
  readonly ipsSensor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#ips_voip_filter PackagesFirewallSecuritypolicy#ips_voip_filter}
  */
  readonly ipsVoipFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#learning_mode PackagesFirewallSecuritypolicy#learning_mode}
  */
  readonly learningMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#logtraffic PackagesFirewallSecuritypolicy#logtraffic}
  */
  readonly logtraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#logtraffic_start PackagesFirewallSecuritypolicy#logtraffic_start}
  */
  readonly logtrafficStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#mms_profile PackagesFirewallSecuritypolicy#mms_profile}
  */
  readonly mmsProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#name PackagesFirewallSecuritypolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#nat46 PackagesFirewallSecuritypolicy#nat46}
  */
  readonly nat46?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#nat64 PackagesFirewallSecuritypolicy#nat64}
  */
  readonly nat64?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#pkg PackagesFirewallSecuritypolicy#pkg}
  */
  readonly pkg: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#pkg_folder_path PackagesFirewallSecuritypolicy#pkg_folder_path}
  */
  readonly pkgFolderPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#policyid PackagesFirewallSecuritypolicy#policyid}
  */
  readonly policyid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#profile_group PackagesFirewallSecuritypolicy#profile_group}
  */
  readonly profileGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#profile_protocol_options PackagesFirewallSecuritypolicy#profile_protocol_options}
  */
  readonly profileProtocolOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#profile_type PackagesFirewallSecuritypolicy#profile_type}
  */
  readonly profileType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#schedule PackagesFirewallSecuritypolicy#schedule}
  */
  readonly schedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#scopetype PackagesFirewallSecuritypolicy#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#sctp_filter_profile PackagesFirewallSecuritypolicy#sctp_filter_profile}
  */
  readonly sctpFilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#send_deny_packet PackagesFirewallSecuritypolicy#send_deny_packet}
  */
  readonly sendDenyPacket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#service PackagesFirewallSecuritypolicy#service}
  */
  readonly service?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#service_negate PackagesFirewallSecuritypolicy#service_negate}
  */
  readonly serviceNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#srcaddr PackagesFirewallSecuritypolicy#srcaddr}
  */
  readonly srcaddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#srcaddr4 PackagesFirewallSecuritypolicy#srcaddr4}
  */
  readonly srcaddr4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#srcaddr6 PackagesFirewallSecuritypolicy#srcaddr6}
  */
  readonly srcaddr6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#srcaddr6_negate PackagesFirewallSecuritypolicy#srcaddr6_negate}
  */
  readonly srcaddr6Negate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#srcaddr_negate PackagesFirewallSecuritypolicy#srcaddr_negate}
  */
  readonly srcaddrNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#srcintf PackagesFirewallSecuritypolicy#srcintf}
  */
  readonly srcintf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#ssh_filter_profile PackagesFirewallSecuritypolicy#ssh_filter_profile}
  */
  readonly sshFilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#ssl_ssh_profile PackagesFirewallSecuritypolicy#ssl_ssh_profile}
  */
  readonly sslSshProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#status PackagesFirewallSecuritypolicy#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#url_category PackagesFirewallSecuritypolicy#url_category}
  */
  readonly urlCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#users PackagesFirewallSecuritypolicy#users}
  */
  readonly users?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#utm_status PackagesFirewallSecuritypolicy#utm_status}
  */
  readonly utmStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#uuid PackagesFirewallSecuritypolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#videofilter_profile PackagesFirewallSecuritypolicy#videofilter_profile}
  */
  readonly videofilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#virtual_patch_profile PackagesFirewallSecuritypolicy#virtual_patch_profile}
  */
  readonly virtualPatchProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#voip_profile PackagesFirewallSecuritypolicy#voip_profile}
  */
  readonly voipProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#webfilter_profile PackagesFirewallSecuritypolicy#webfilter_profile}
  */
  readonly webfilterProfile?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy fortimanager_packages_firewall_securitypolicy}
*/
export class PackagesFirewallSecuritypolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_packages_firewall_securitypolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PackagesFirewallSecuritypolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PackagesFirewallSecuritypolicy to import
  * @param importFromId The id of the existing PackagesFirewallSecuritypolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PackagesFirewallSecuritypolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_packages_firewall_securitypolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_securitypolicy fortimanager_packages_firewall_securitypolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PackagesFirewallSecuritypolicyConfig
  */
  public constructor(scope: Construct, id: string, config: PackagesFirewallSecuritypolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_packages_firewall_securitypolicy',
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
    this._adom = config.adom;
    this._appCategory = config.appCategory;
    this._appGroup = config.appGroup;
    this._application = config.application;
    this._applicationList = config.applicationList;
    this._avProfile = config.avProfile;
    this._casbProfile = config.casbProfile;
    this._cifsProfile = config.cifsProfile;
    this._comments = config.comments;
    this._diameterFilterProfile = config.diameterFilterProfile;
    this._dlpProfile = config.dlpProfile;
    this._dlpSensor = config.dlpSensor;
    this._dnsfilterProfile = config.dnsfilterProfile;
    this._dstaddr = config.dstaddr;
    this._dstaddr4 = config.dstaddr4;
    this._dstaddr6 = config.dstaddr6;
    this._dstaddr6Negate = config.dstaddr6Negate;
    this._dstaddrNegate = config.dstaddrNegate;
    this._dstintf = config.dstintf;
    this._emailfilterProfile = config.emailfilterProfile;
    this._enforceDefaultAppPort = config.enforceDefaultAppPort;
    this._fileFilterProfile = config.fileFilterProfile;
    this._fssoGroups = config.fssoGroups;
    this._globalLabel = config.globalLabel;
    this._groups = config.groups;
    this._icapProfile = config.icapProfile;
    this._id = config.id;
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
    this._ipsSensor = config.ipsSensor;
    this._ipsVoipFilter = config.ipsVoipFilter;
    this._learningMode = config.learningMode;
    this._logtraffic = config.logtraffic;
    this._logtrafficStart = config.logtrafficStart;
    this._mmsProfile = config.mmsProfile;
    this._name = config.name;
    this._nat46 = config.nat46;
    this._nat64 = config.nat64;
    this._pkg = config.pkg;
    this._pkgFolderPath = config.pkgFolderPath;
    this._policyid = config.policyid;
    this._profileGroup = config.profileGroup;
    this._profileProtocolOptions = config.profileProtocolOptions;
    this._profileType = config.profileType;
    this._schedule = config.schedule;
    this._scopetype = config.scopetype;
    this._sctpFilterProfile = config.sctpFilterProfile;
    this._sendDenyPacket = config.sendDenyPacket;
    this._service = config.service;
    this._serviceNegate = config.serviceNegate;
    this._srcaddr = config.srcaddr;
    this._srcaddr4 = config.srcaddr4;
    this._srcaddr6 = config.srcaddr6;
    this._srcaddr6Negate = config.srcaddr6Negate;
    this._srcaddrNegate = config.srcaddrNegate;
    this._srcintf = config.srcintf;
    this._sshFilterProfile = config.sshFilterProfile;
    this._sslSshProfile = config.sslSshProfile;
    this._status = config.status;
    this._urlCategory = config.urlCategory;
    this._users = config.users;
    this._utmStatus = config.utmStatus;
    this._uuid = config.uuid;
    this._videofilterProfile = config.videofilterProfile;
    this._virtualPatchProfile = config.virtualPatchProfile;
    this._voipProfile = config.voipProfile;
    this._webfilterProfile = config.webfilterProfile;
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

  // dstaddr4 - computed: false, optional: true, required: false
  private _dstaddr4?: string; 
  public get dstaddr4() {
    return this.getStringAttribute('dstaddr4');
  }
  public set dstaddr4(value: string) {
    this._dstaddr4 = value;
  }
  public resetDstaddr4() {
    this._dstaddr4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstaddr4Input() {
    return this._dstaddr4;
  }

  // dstaddr6 - computed: false, optional: true, required: false
  private _dstaddr6?: string; 
  public get dstaddr6() {
    return this.getStringAttribute('dstaddr6');
  }
  public set dstaddr6(value: string) {
    this._dstaddr6 = value;
  }
  public resetDstaddr6() {
    this._dstaddr6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstaddr6Input() {
    return this._dstaddr6;
  }

  // dstaddr6_negate - computed: false, optional: true, required: false
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

  // enforce_default_app_port - computed: false, optional: true, required: false
  private _enforceDefaultAppPort?: string; 
  public get enforceDefaultAppPort() {
    return this.getStringAttribute('enforce_default_app_port');
  }
  public set enforceDefaultAppPort(value: string) {
    this._enforceDefaultAppPort = value;
  }
  public resetEnforceDefaultAppPort() {
    this._enforceDefaultAppPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceDefaultAppPortInput() {
    return this._enforceDefaultAppPort;
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

  // internet_service - computed: false, optional: true, required: false
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

  // internet_service6 - computed: false, optional: true, required: false
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

  // internet_service6_negate - computed: false, optional: true, required: false
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

  // internet_service6_src - computed: false, optional: true, required: false
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

  // internet_service6_src_negate - computed: false, optional: true, required: false
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

  // internet_service_id - computed: false, optional: true, required: false
  private _internetServiceId?: string; 
  public get internetServiceId() {
    return this.getStringAttribute('internet_service_id');
  }
  public set internetServiceId(value: string) {
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

  // internet_service_src - computed: false, optional: true, required: false
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

  // internet_service_src_negate - computed: false, optional: true, required: false
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

  // nat46 - computed: false, optional: true, required: false
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

  // nat64 - computed: false, optional: true, required: false
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

  // srcaddr4 - computed: false, optional: true, required: false
  private _srcaddr4?: string; 
  public get srcaddr4() {
    return this.getStringAttribute('srcaddr4');
  }
  public set srcaddr4(value: string) {
    this._srcaddr4 = value;
  }
  public resetSrcaddr4() {
    this._srcaddr4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddr4Input() {
    return this._srcaddr4;
  }

  // srcaddr6 - computed: false, optional: true, required: false
  private _srcaddr6?: string; 
  public get srcaddr6() {
    return this.getStringAttribute('srcaddr6');
  }
  public set srcaddr6(value: string) {
    this._srcaddr6 = value;
  }
  public resetSrcaddr6() {
    this._srcaddr6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddr6Input() {
    return this._srcaddr6;
  }

  // srcaddr6_negate - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      _policy_block: cdktf.numberToTerraform(this._policyBlock),
      action: cdktf.stringToTerraform(this._action),
      adom: cdktf.stringToTerraform(this._adom),
      app_category: cdktf.stringToTerraform(this._appCategory),
      app_group: cdktf.stringToTerraform(this._appGroup),
      application: cdktf.listMapper(cdktf.numberToTerraform, false)(this._application),
      application_list: cdktf.stringToTerraform(this._applicationList),
      av_profile: cdktf.stringToTerraform(this._avProfile),
      casb_profile: cdktf.stringToTerraform(this._casbProfile),
      cifs_profile: cdktf.stringToTerraform(this._cifsProfile),
      comments: cdktf.stringToTerraform(this._comments),
      diameter_filter_profile: cdktf.stringToTerraform(this._diameterFilterProfile),
      dlp_profile: cdktf.stringToTerraform(this._dlpProfile),
      dlp_sensor: cdktf.stringToTerraform(this._dlpSensor),
      dnsfilter_profile: cdktf.stringToTerraform(this._dnsfilterProfile),
      dstaddr: cdktf.stringToTerraform(this._dstaddr),
      dstaddr4: cdktf.stringToTerraform(this._dstaddr4),
      dstaddr6: cdktf.stringToTerraform(this._dstaddr6),
      dstaddr6_negate: cdktf.stringToTerraform(this._dstaddr6Negate),
      dstaddr_negate: cdktf.stringToTerraform(this._dstaddrNegate),
      dstintf: cdktf.stringToTerraform(this._dstintf),
      emailfilter_profile: cdktf.stringToTerraform(this._emailfilterProfile),
      enforce_default_app_port: cdktf.stringToTerraform(this._enforceDefaultAppPort),
      file_filter_profile: cdktf.stringToTerraform(this._fileFilterProfile),
      fsso_groups: cdktf.stringToTerraform(this._fssoGroups),
      global_label: cdktf.stringToTerraform(this._globalLabel),
      groups: cdktf.stringToTerraform(this._groups),
      icap_profile: cdktf.stringToTerraform(this._icapProfile),
      id: cdktf.stringToTerraform(this._id),
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
      internet_service_id: cdktf.stringToTerraform(this._internetServiceId),
      internet_service_name: cdktf.stringToTerraform(this._internetServiceName),
      internet_service_negate: cdktf.stringToTerraform(this._internetServiceNegate),
      internet_service_src: cdktf.stringToTerraform(this._internetServiceSrc),
      internet_service_src_custom: cdktf.stringToTerraform(this._internetServiceSrcCustom),
      internet_service_src_custom_group: cdktf.stringToTerraform(this._internetServiceSrcCustomGroup),
      internet_service_src_group: cdktf.stringToTerraform(this._internetServiceSrcGroup),
      internet_service_src_id: cdktf.stringToTerraform(this._internetServiceSrcId),
      internet_service_src_name: cdktf.stringToTerraform(this._internetServiceSrcName),
      internet_service_src_negate: cdktf.stringToTerraform(this._internetServiceSrcNegate),
      ips_sensor: cdktf.stringToTerraform(this._ipsSensor),
      ips_voip_filter: cdktf.stringToTerraform(this._ipsVoipFilter),
      learning_mode: cdktf.stringToTerraform(this._learningMode),
      logtraffic: cdktf.stringToTerraform(this._logtraffic),
      logtraffic_start: cdktf.stringToTerraform(this._logtrafficStart),
      mms_profile: cdktf.stringToTerraform(this._mmsProfile),
      name: cdktf.stringToTerraform(this._name),
      nat46: cdktf.stringToTerraform(this._nat46),
      nat64: cdktf.stringToTerraform(this._nat64),
      pkg: cdktf.stringToTerraform(this._pkg),
      pkg_folder_path: cdktf.stringToTerraform(this._pkgFolderPath),
      policyid: cdktf.numberToTerraform(this._policyid),
      profile_group: cdktf.stringToTerraform(this._profileGroup),
      profile_protocol_options: cdktf.stringToTerraform(this._profileProtocolOptions),
      profile_type: cdktf.stringToTerraform(this._profileType),
      schedule: cdktf.stringToTerraform(this._schedule),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      sctp_filter_profile: cdktf.stringToTerraform(this._sctpFilterProfile),
      send_deny_packet: cdktf.stringToTerraform(this._sendDenyPacket),
      service: cdktf.stringToTerraform(this._service),
      service_negate: cdktf.stringToTerraform(this._serviceNegate),
      srcaddr: cdktf.stringToTerraform(this._srcaddr),
      srcaddr4: cdktf.stringToTerraform(this._srcaddr4),
      srcaddr6: cdktf.stringToTerraform(this._srcaddr6),
      srcaddr6_negate: cdktf.stringToTerraform(this._srcaddr6Negate),
      srcaddr_negate: cdktf.stringToTerraform(this._srcaddrNegate),
      srcintf: cdktf.stringToTerraform(this._srcintf),
      ssh_filter_profile: cdktf.stringToTerraform(this._sshFilterProfile),
      ssl_ssh_profile: cdktf.stringToTerraform(this._sslSshProfile),
      status: cdktf.stringToTerraform(this._status),
      url_category: cdktf.stringToTerraform(this._urlCategory),
      users: cdktf.stringToTerraform(this._users),
      utm_status: cdktf.stringToTerraform(this._utmStatus),
      uuid: cdktf.stringToTerraform(this._uuid),
      videofilter_profile: cdktf.stringToTerraform(this._videofilterProfile),
      virtual_patch_profile: cdktf.stringToTerraform(this._virtualPatchProfile),
      voip_profile: cdktf.stringToTerraform(this._voipProfile),
      webfilter_profile: cdktf.stringToTerraform(this._webfilterProfile),
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
      application_list: {
        value: cdktf.stringToHclTerraform(this._applicationList),
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
      diameter_filter_profile: {
        value: cdktf.stringToHclTerraform(this._diameterFilterProfile),
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
      dstaddr: {
        value: cdktf.stringToHclTerraform(this._dstaddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dstaddr4: {
        value: cdktf.stringToHclTerraform(this._dstaddr4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dstaddr6: {
        value: cdktf.stringToHclTerraform(this._dstaddr6),
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
      dstintf: {
        value: cdktf.stringToHclTerraform(this._dstintf),
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
      enforce_default_app_port: {
        value: cdktf.stringToHclTerraform(this._enforceDefaultAppPort),
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
        value: cdktf.stringToHclTerraform(this._internetServiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      learning_mode: {
        value: cdktf.stringToHclTerraform(this._learningMode),
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
      srcaddr: {
        value: cdktf.stringToHclTerraform(this._srcaddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srcaddr4: {
        value: cdktf.stringToHclTerraform(this._srcaddr4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srcaddr6: {
        value: cdktf.stringToHclTerraform(this._srcaddr6),
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
      voip_profile: {
        value: cdktf.stringToHclTerraform(this._voipProfile),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
